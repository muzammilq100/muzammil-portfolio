"use strict";(()=>{var ke=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var ym=ke((aA,xm)=>{"use strict";var Pi=document.getElementById("loader"),Ci=Pi&&Pi.querySelector(".loader-name"),ol=0,Gf=0,Hf=!1,T4=performance.now(),Ii=.06,Oi=0,fu=0,dm=!1,L4=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function N4(e){if(!Ci)return;let t=Ci.offsetWidth||1,n=(t*(1.14-1.28*e)-t).toFixed(1)+"px 0";Ci.style.webkitMaskPosition=n,Ci.style.maskPosition=n}function mm(e){let t=Math.min(.05,fu?(e-fu)/1e3:.016);fu=e;let o=Hf?.75:.22+(Ii-Oi)*1.2;if(Oi=Math.min(Ii,Oi+Math.max(0,o)*t),L4&&(Oi=Ii),N4(Oi),Hf&&Oi>=.999){dm||(dm=!0,setTimeout(gm,650));return}requestAnimationFrame(mm)}Ci&&requestAnimationFrame(mm);function pm(){let e=ol?Gf/Math.max(ol,24):0;Ii=Math.max(Ii,Math.min(.9,.06+e*.84))}function gm(){Pi&&(Pi.classList.add("done"),setTimeout(()=>Pi.remove(),1400))}function hu(){Hf||(Hf=!0,window.__galleryReady=!0,Pi&&(Ii=1,Ci||gm()))}var vm=null;function R4(){clearTimeout(vm),Gf>=ol&&performance.now()-T4>600&&(vm=setTimeout(()=>{Gf>=ol&&hu()},450))}setTimeout(hu,2e4);var O4=e=>/(^|\/)(res|images)\//.test(e),Df=window.fetch.bind(window);async function C4(e,t){let o=await Df(e+".gz",t);if(!o.ok)throw new Error("no .gz");let n=new Uint8Array(await o.arrayBuffer());if(!(n[0]===31&&n[1]===139))return new Response(n);let r=new Blob([n]).stream().pipeThrough(new DecompressionStream("gzip")),a=await new Response(r).arrayBuffer();return new Response(a,{status:200,headers:{"Content-Type":"application/octet-stream"}})}window.fetch=function(e,t){let o=typeof e=="string"?e:e&&e.url||"";if(!O4(o))return Df(e,t);ol++,pm();let n=a=>(Gf++,pm(),R4(),a),r;return/\.bin$/.test(o)&&typeof DecompressionStream!="undefined"?r=C4(o,t).catch(()=>Df(e,t)):r=Df(e,t),r.then(n,a=>{throw n(),a})};xm.exports={finish:hu}});var Ma=ke((sA,Mm)=>{"use strict";var bm=typeof navigator!="undefined"&&navigator.userAgent||"",P4=typeof window!="undefined"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches&&!window.matchMedia("(any-pointer: fine)").matches,x0=/Android|iPhone|iPad|iPod|Mobile|Silk|Kindle|webOS|BlackBerry|Opera Mini|IEMobile/i.test(bm)||/Macintosh/.test(bm)&&typeof navigator!="undefined"&&navigator.maxTouchPoints>1||P4,wm=typeof window!="undefined"&&window.devicePixelRatio||1,zo={isPhone:x0,pixelRatio:x0?Math.min(wm,1.5):Math.min(wm,2),reflection:!x0,gardenDetail:x0?0:1,leafShare:x0?.65:1,motion:!x0,post:x0?1:2,level:x0?1:0};zo.scale=1;var I4=x0?.55:.6,nl=0,Uf=0,rl=0,al=0,$i=1,sl=0,Bf=48,Fi=null,uu=0;function $4(e){Fi={fps:e,scale:zo.scale},zo.scale>.86?zo.scale=.85:zo.reflection?zo.stepDown():zo.scale>.71?zo.scale=.7:zo.stepDown()||(zo.scale=Math.max(I4,zo.scale-.1))}var _m=!0;try{/[?&]noadapt\b/.test(location.search)&&(_m=!1)}catch(e){}zo.frame=e=>{if(!_m)return;if(!(e>0)||e>1){nl=0,Uf=0;return}if(nl+=e,Uf++,nl<.75)return;let t=Uf/nl;if(nl=0,Uf=0,sl>0&&(sl-=.75,sl<=0&&($i=1)),Fi){if(t<Fi.fps*1.08&&Fi.scale>zo.scale){if(++uu>=2){zo.scale=1,$i=1,sl=0,Bf=Math.min(Bf,t*.85),uu=0,rl=0,Fi=null;return}}else uu=0;Fi=null}if(t<Bf){if(al=0,++rl>=2){if(rl=0,zo.scale>.61&&zo.climbed){$i=zo.scale-.05,sl=40,zo.scale=$i,zo.climbed=!1;return}$4(t)}}else t>Math.max(Bf*1.15,55)?(rl=0,++al>=6&&zo.scale<$i-.001?(zo.scale=Math.min($i,zo.scale+.05),zo.climbed=!0,al=0):al>=6&&(zo.climbed=!1)):(rl=0,al=0)};zo.stepDown=()=>{if(zo.reflection)zo.reflection=!1;else if(zo.gardenDetail>0||zo.motion)zo.gardenDetail=0,zo.motion=!1,zo.leafShare=Math.min(zo.leafShare,.65);else if(zo.post>0)zo.post--;else return!1;return zo.level++,!0};Mm.exports=zo});var du=ke((iA,km)=>{"use strict";km.exports=[{file:"IMG_20250717_102753.jpg",slug:"love-me-like-i-am-already-dead",title:"Love me like I am Already Dead",medium:"Oil on canvas",size:[61,91],description:`We live in a world soaked in hypocrisy. We\u2019re told not to \u201Cspeak ill of the dead,\u201D yet we spend lifetimes speaking ill of the living. We judge, ignore, neglect\u2014and then pretend to mourn with grace when it\u2019s too late. People say beautiful things at funerals, but only after burying a lifetime of cruelty or silence.

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
but the loneliness of having no one willing to admit it happened.`}]});var jf=ke((cA,Am)=>{"use strict";var Cr={instagram:"muzammil_qureshi",email:"muzammilqureshi100@gmail.com"},Sm='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>',Em='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>';Cr.instagramUrl="https://instagram.com/"+Cr.instagram;Cr.mailUrl="mailto:"+Cr.email+"?subject="+encodeURIComponent("Your paintings");Cr.icons=e=>`
	<a class="${e}" href="${Cr.instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram: @${Cr.instagram}" title="Instagram">${Sm}</a>
	<a class="${e}" href="${Cr.mailUrl}" aria-label="Email ${Cr.email}" title="Email">${Em}</a>`;Cr.line=e=>`
	<span class="${e}">
		<a href="${Cr.instagramUrl}" target="_blank" rel="noopener">${Sm}<span>@${Cr.instagram}</span></a>
		<a href="${Cr.mailUrl}">${Em}<span>${Cr.email}</span></a>
	</span>`;Am.exports=Cr});var il=ke((lA,zm)=>{"use strict";zm.exports=e=>{if(!e)return"";let t=[];return e.medium&&t.push(e.medium),e.size&&e.size.length===2&&t.push(e.size[0]+" \xD7 "+e.size[1]+" cm"),t.join("  \xB7  ")}});var pu=ke((fA,Nm)=>{"use strict";var F4=du(),q4=jf(),Tm=il(),D4=Ma(),D0=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),G4=`
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
`,Pr=null;function H4(e){if(Pr){Pr.hidden=!1,requestAnimationFrame(()=>Pr.classList.add("on"));return}let t=document.createElement("style");t.textContent=G4,document.head.appendChild(t);let o=!D4.isPhone;Pr=document.createElement("div"),Pr.className="plist",Pr.setAttribute("role","region"),Pr.setAttribute("aria-label","All paintings"),Pr.innerHTML=`
		${e?"":'<button type="button" class="plist-close">Back to the gallery</button>'}
		<header class="plist-head">
			<h1>Muzammil</h1>
			<p class="plist-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</p>
			${q4.line("plist-contact")}
		</header>
		${e?'<p class="plist-note">This device could not open the 3D gallery, so here are the paintings on their own.</p>':""}
		<main class="plist-grid">
			${F4.map(r=>`
			<article class="plist-item" id="${D0(r.slug)}">
				<img loading="lazy" decoding="async" alt="${D0(r.title)}, ${D0(Tm(r))}"
					src="images/web/${D0(r.slug)}${o?"":"-1024"}.webp"
					onerror="this.onerror=null;this.src='images/${D0(r.file)}'">
				<p class="plist-meta">${D0(Tm(r))}</p>
				<h2>${D0(r.title)}</h2>
				<details><summary>Read its story</summary>
					${String(r.description).split(/\n\s*\n/).map(a=>`<p>${D0(a.trim())}</p>`).join("")}
				</details>
			</article>`).join("")}
		</main>`,["mousedown","pointerdown","click","wheel","touchstart","touchmove","keydown"].forEach(r=>Pr.addEventListener(r,a=>a.stopPropagation(),{passive:!0}));let n=Pr.querySelector(".plist-close");n&&n.addEventListener("click",Lm),document.body.appendChild(Pr),requestAnimationFrame(()=>Pr.classList.add("on"))}function Lm(){Pr&&(Pr.classList.remove("on"),setTimeout(()=>{Pr.hidden=!0},500),location.hash==="#list"&&history.replaceState(null,"",location.pathname+location.search))}Nm.exports={show:H4,hide:Lm}});var Rm=ke((vu,mu)=>{(function(e,t){typeof vu=="object"&&typeof mu!="undefined"?mu.exports=t():typeof define=="function"&&define.amd?define(t):e.Stats=t()})(vu,function(){var e=function(){function t(u){return r.appendChild(u.dom),u}function o(u){for(var d=0;d<r.children.length;d++)r.children[d].style.display=d===u?"block":"none";n=u}var n=0,r=document.createElement("div");r.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",r.addEventListener("click",function(u){u.preventDefault(),o(++n%r.children.length)},!1);var a=(performance||Date).now(),s=a,i=0,c=t(new e.Panel("FPS","#0ff","#002")),h=t(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var f=t(new e.Panel("MB","#f08","#201"));return o(0),{REVISION:16,dom:r,addPanel:t,showPanel:o,begin:function(){a=(performance||Date).now()},end:function(){i++;var u=(performance||Date).now();if(h.update(u-a,200),u>s+1e3&&(c.update(1e3*i/(u-s),100),s=u,i=0,f)){var d=performance.memory;f.update(d.usedJSHeapSize/1048576,d.jsHeapSizeLimit/1048576)}return u},update:function(){a=this.end()},domElement:r,setMode:o}};return e.Panel=function(t,o,n){var r=1/0,a=0,s=Math.round,i=s(window.devicePixelRatio||1),c=80*i,h=48*i,f=3*i,u=2*i,d=3*i,v=15*i,l=74*i,p=30*i,m=document.createElement("canvas");m.width=c,m.height=h,m.style.cssText="width:80px;height:48px";var g=m.getContext("2d");return g.font="bold "+9*i+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=n,g.fillRect(0,0,c,h),g.fillStyle=o,g.fillText(t,f,u),g.fillRect(d,v,l,p),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(d,v,l,p),{dom:m,update:function(x,b){r=Math.min(r,x),a=Math.max(a,x),g.fillStyle=n,g.globalAlpha=1,g.fillRect(0,0,c,v),g.fillStyle=o,g.fillText(s(x)+" "+t+" ("+s(r)+"-"+s(a)+")",f,u),g.drawImage(m,d+i,v,l-i,p,d,v,l-i,p),g.fillRect(d+l-i,v,i,p),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(d+l-i,v,i,s((1-x/b)*p))}}},e})});var Om=ke((gu,xu)=>{(function(e,t){typeof gu=="object"&&typeof xu!="undefined"?xu.exports=t():typeof define=="function"&&define.amd?define(t):e.createREGL=t()})(gu,function(){"use strict";var e=function(y){return y instanceof Uint8Array||y instanceof Uint16Array||y instanceof Uint32Array||y instanceof Int8Array||y instanceof Int16Array||y instanceof Int32Array||y instanceof Float32Array||y instanceof Float64Array||y instanceof Uint8ClampedArray},t=function(y,E){for(var O=Object.keys(E),oe=0;oe<O.length;++oe)y[O[oe]]=E[O[oe]];return y},o=`
`;function n(y){return typeof atob!="undefined"?atob(y):"base64:"+y}function r(y){var E=new Error("(regl) "+y);throw console.error(E),E}function a(y,E){y||r(E)}function s(y){return y?": "+y:""}function i(y,E,O){y in E||r("unknown parameter ("+y+")"+s(O)+". possible values: "+Object.keys(E).join())}function c(y,E){e(y)||r("invalid parameter type"+s(E)+". must be a typed array")}function h(y,E){switch(E){case"number":return typeof y=="number";case"object":return typeof y=="object";case"string":return typeof y=="string";case"boolean":return typeof y=="boolean";case"function":return typeof y=="function";case"undefined":return typeof y=="undefined";case"symbol":return typeof y=="symbol"}}function f(y,E,O){h(y,E)||r("invalid parameter type"+s(O)+". expected "+E+", got "+typeof y)}function u(y,E){y>=0&&(y|0)===y||r("invalid parameter type, ("+y+")"+s(E)+". must be a nonnegative integer")}function d(y,E,O){E.indexOf(y)<0&&r("invalid value"+s(O)+". must be one of: "+E)}var v=["gl","canvas","container","attributes","pixelRatio","extensions","optionalExtensions","profile","onDone"];function l(y){Object.keys(y).forEach(function(E){v.indexOf(E)<0&&r('invalid regl constructor argument "'+E+'". must be one of '+v)})}function p(y,E){for(y=y+"";y.length<E;)y=" "+y;return y}function m(){this.name="unknown",this.lines=[],this.index={},this.hasErrors=!1}function g(y,E){this.number=y,this.line=E,this.errors=[]}function x(y,E,O){this.file=y,this.line=E,this.message=O}function b(){var y=new Error,E=(y.stack||y).toString(),O=/compileProcedure.*\n\s*at.*\((.*)\)/.exec(E);if(O)return O[1];var oe=/compileProcedure.*\n\s*at\s+(.*)(\n|$)/.exec(E);return oe?oe[1]:"unknown"}function w(){var y=new Error,E=(y.stack||y).toString(),O=/at REGLCommand.*\n\s+at.*\((.*)\)/.exec(E);if(O)return O[1];var oe=/at REGLCommand.*\n\s+at\s+(.*)\n/.exec(E);return oe?oe[1]:"unknown"}function M(y,E){var O=y.split(`
`),oe=1,pe=0,ee={unknown:new m,0:new m};ee.unknown.name=ee[0].name=E||b(),ee.unknown.lines.push(new g(0,""));for(var ae=0;ae<O.length;++ae){var Te=O[ae],Ce=/^\s*#\s*(\w+)\s+(.+)\s*$/.exec(Te);if(Ce)switch(Ce[1]){case"line":var Fe=/(\d+)(\s+\d+)?/.exec(Ce[2]);Fe&&(oe=Fe[1]|0,Fe[2]&&(pe=Fe[2]|0,pe in ee||(ee[pe]=new m)));break;case"define":var Pe=/SHADER_NAME(_B64)?\s+(.*)$/.exec(Ce[2]);Pe&&(ee[pe].name=Pe[1]?n(Pe[2]):Pe[2]);break}ee[pe].lines.push(new g(oe++,Te))}return Object.keys(ee).forEach(function(He){var Ye=ee[He];Ye.lines.forEach(function(Le){Ye.index[Le.number]=Le})}),ee}function k(y){var E=[];return y.split(`
`).forEach(function(O){if(!(O.length<5)){var oe=/^ERROR:\s+(\d+):(\d+):\s*(.*)$/.exec(O);oe?E.push(new x(oe[1]|0,oe[2]|0,oe[3].trim())):O.length>0&&E.push(new x("unknown",0,O))}}),E}function z(y,E){E.forEach(function(O){var oe=y[O.file];if(oe){var pe=oe.index[O.line];if(pe){pe.errors.push(O),oe.hasErrors=!0;return}}y.unknown.hasErrors=!0,y.unknown.lines[0].errors.push(O)})}function P(y,E,O,oe,pe){if(!y.getShaderParameter(E,y.COMPILE_STATUS)){var ee=y.getShaderInfoLog(E),ae=oe===y.FRAGMENT_SHADER?"fragment":"vertex";me(O,"string",ae+" shader source must be a string",pe);var Te=M(O,pe),Ce=k(ee);z(Te,Ce),Object.keys(Te).forEach(function(Fe){var Pe=Te[Fe];if(!Pe.hasErrors)return;var He=[""],Ye=[""];function Le(Be,Y){He.push(Be),Ye.push(Y||"")}Le("file number "+Fe+": "+Pe.name+`
`,"color:red;text-decoration:underline;font-weight:bold"),Pe.lines.forEach(function(Be){if(Be.errors.length>0){Le(p(Be.number,4)+"|  ","background-color:yellow; font-weight:bold"),Le(Be.line+o,"color:red; background-color:yellow; font-weight:bold");var Y=0;Be.errors.forEach(function(se){var $e=se.message,et=/^\s*'(.*)'\s*:\s*(.*)$/.exec($e);if(et){var we=et[1];switch($e=et[2],we){case"assign":we="=";break}Y=Math.max(Be.line.indexOf(we,Y),0)}else Y=0;Le(p("| ",6)),Le(p("^^^",Y+3)+o,"font-weight:bold"),Le(p("| ",6)),Le($e+o,"font-weight:bold")}),Le(p("| ",6)+o)}else Le(p(Be.number,4)+"|  "),Le(Be.line+o,"color:red")}),typeof document!="undefined"&&!window.chrome?(Ye[0]=He.join("%c"),console.log.apply(console,Ye)):console.log(He.join(""))}),a.raise("Error compiling "+ae+" shader, "+Te[0].name)}}function R(y,E,O,oe,pe){if(!y.getProgramParameter(E,y.LINK_STATUS)){var ee=y.getProgramInfoLog(E),ae=M(O,pe),Te=M(oe,pe),Ce='Error linking program with vertex shader, "'+Te[0].name+'", and fragment shader "'+ae[0].name+'"';typeof document!="undefined"?console.log("%c"+Ce+o+"%c"+ee,"color:red;text-decoration:underline;font-weight:bold","color:red"):console.log(Ce+o+ee),a.raise(Ce)}}function U(y){y._commandRef=b()}function q(y,E,O,oe){U(y);function pe(Ce){return Ce?oe.id(Ce):0}y._fragId=pe(y.static.frag),y._vertId=pe(y.static.vert);function ee(Ce,Fe){Object.keys(Fe).forEach(function(Pe){Ce[oe.id(Pe)]=!0})}var ae=y._uniformSet={};ee(ae,E.static),ee(ae,E.dynamic);var Te=y._attributeSet={};ee(Te,O.static),ee(Te,O.dynamic),y._hasCount="count"in y.static||"count"in y.dynamic||"elements"in y.static||"elements"in y.dynamic}function Q(y,E){var O=w();r(y+" in command "+(E||b())+(O==="unknown"?"":" called from "+O))}function D(y,E,O){y||Q(E,O||b())}function V(y,E,O,oe){y in E||Q("unknown parameter ("+y+")"+s(O)+". possible values: "+Object.keys(E).join(),oe||b())}function me(y,E,O,oe){h(y,E)||Q("invalid parameter type"+s(O)+". expected "+E+", got "+typeof y,oe||b())}function Ge(y){y()}function Re(y,E,O){y.texture?d(y.texture._texture.internalformat,E,"unsupported texture format for attachment"):d(y.renderbuffer._renderbuffer.format,O,"unsupported renderbuffer format for attachment")}var be=33071,re=9728,Ue=9984,xt=9985,at=9986,Ot=9987,Et=5120,no=5121,bo=5122,Yo=5123,tt=5124,zt=5125,Ft=5126,ro=32819,wo=32820,ce=33635,le=34042,G=36193,Oe={};Oe[Et]=Oe[no]=1,Oe[bo]=Oe[Yo]=Oe[G]=Oe[ce]=Oe[ro]=Oe[wo]=2,Oe[tt]=Oe[zt]=Oe[Ft]=Oe[le]=4;function Qe(y,E){return y===wo||y===ro||y===ce?2:y===le?4:Oe[y]*E}function Se(y){return!(y&y-1)&&!!y}function he(y,E,O){var oe,pe=E.width,ee=E.height,ae=E.channels;a(pe>0&&pe<=O.maxTextureSize&&ee>0&&ee<=O.maxTextureSize,"invalid texture shape"),(y.wrapS!==be||y.wrapT!==be)&&a(Se(pe)&&Se(ee),"incompatible wrap mode for texture, both width and height must be power of 2"),E.mipmask===1?pe!==1&&ee!==1&&a(y.minFilter!==Ue&&y.minFilter!==at&&y.minFilter!==xt&&y.minFilter!==Ot,"min filter requires mipmap"):(a(Se(pe)&&Se(ee),"texture must be a square power of 2 to support mipmapping"),a(E.mipmask===(pe<<1)-1,"missing or incomplete mipmap data")),E.type===Ft&&(O.extensions.indexOf("oes_texture_float_linear")<0&&a(y.minFilter===re&&y.magFilter===re,"filter not supported, must enable oes_texture_float_linear"),a(!y.genMipmaps,"mipmap generation not supported with float textures"));var Te=E.images;for(oe=0;oe<16;++oe)if(Te[oe]){var Ce=pe>>oe,Fe=ee>>oe;a(E.mipmask&1<<oe,"missing mipmap data");var Pe=Te[oe];if(a(Pe.width===Ce&&Pe.height===Fe,"invalid shape for mip images"),a(Pe.format===E.format&&Pe.internalformat===E.internalformat&&Pe.type===E.type,"incompatible type for mip image"),!Pe.compressed)if(Pe.data){var He=Math.ceil(Qe(Pe.type,ae)*Ce/Pe.unpackAlignment)*Pe.unpackAlignment;a(Pe.data.byteLength===He*Fe,"invalid data for image, buffer size is inconsistent with image format")}else Pe.element||Pe.copy}else y.genMipmaps||a((E.mipmask&1<<oe)===0,"extra mipmap data");E.compressed&&a(!y.genMipmaps,"mipmap generation for compressed images not supported")}function At(y,E,O,oe){var pe=y.width,ee=y.height,ae=y.channels;a(pe>0&&pe<=oe.maxTextureSize&&ee>0&&ee<=oe.maxTextureSize,"invalid texture shape"),a(pe===ee,"cube map must be square"),a(E.wrapS===be&&E.wrapT===be,"wrap mode not supported by cube map");for(var Te=0;Te<O.length;++Te){var Ce=O[Te];a(Ce.width===pe&&Ce.height===ee,"inconsistent cube map face shape"),E.genMipmaps&&(a(!Ce.compressed,"can not generate mipmap for compressed textures"),a(Ce.mipmask===1,"can not specify mipmaps and generate mipmaps"));for(var Fe=Ce.images,Pe=0;Pe<16;++Pe){var He=Fe[Pe];if(He){var Ye=pe>>Pe,Le=ee>>Pe;a(Ce.mipmask&1<<Pe,"missing mipmap data"),a(He.width===Ye&&He.height===Le,"invalid shape for mip images"),a(He.format===y.format&&He.internalformat===y.internalformat&&He.type===y.type,"incompatible type for mip image"),He.compressed||(He.data?a(He.data.byteLength===Ye*Le*Math.max(Qe(He.type,ae),He.unpackAlignment),"invalid data for image, buffer size is inconsistent with image format"):He.element||He.copy)}}}}var _=t(a,{optional:Ge,raise:r,commandRaise:Q,command:D,parameter:i,commandParameter:V,constructor:l,type:f,commandType:me,isTypedArray:c,nni:u,oneOf:d,shaderError:P,linkError:R,callSite:w,saveCommandRef:U,saveDrawInfo:q,framebufferFormat:Re,guessCommand:b,texture2D:he,textureCube:At}),_t=0,yt=0,Gt=5,Yt=6;function So(y,E){this.id=_t++,this.type=y,this.data=E}function Ho(y){return y.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function Lo(y){if(y.length===0)return[];var E=y.charAt(0),O=y.charAt(y.length-1);if(y.length>1&&E===O&&(E==='"'||E==="'"))return['"'+Ho(y.substr(1,y.length-2))+'"'];var oe=/\[(false|true|null|\d+|'[^']*'|"[^"]*")\]/.exec(y);if(oe)return Lo(y.substr(0,oe.index)).concat(Lo(oe[1])).concat(Lo(y.substr(oe.index+oe[0].length)));var pe=y.split(".");if(pe.length===1)return['"'+Ho(y)+'"'];for(var ee=[],ae=0;ae<pe.length;++ae)ee=ee.concat(Lo(pe[ae]));return ee}function co(y){return"["+Lo(y).join("][")+"]"}function Uo(y,E){return new So(y,co(E+""))}function tn(y){return typeof y=="function"&&!y._reglType||y instanceof So}function W(y,E){if(typeof y=="function")return new So(yt,y);if(typeof y=="number"||typeof y=="boolean")return new So(Gt,y);if(Array.isArray(y))return new So(Yt,y.map((O,oe)=>W(O,E+"["+oe+"]")));if(y instanceof So)return y;_(!1,"invalid option type in uniform "+E)}var Ee={DynamicVariable:So,define:Uo,isDynamic:tn,unbox:W,accessor:co},ze={next:typeof requestAnimationFrame=="function"?function(y){return requestAnimationFrame(y)}:function(y){return setTimeout(y,16)},cancel:typeof cancelAnimationFrame=="function"?function(y){return cancelAnimationFrame(y)}:clearTimeout},ue=typeof performance!="undefined"&&performance.now?function(){return performance.now()}:function(){return+new Date};function qe(){var y={"":0},E=[""];return{id:function(O){var oe=y[O];return oe||(oe=y[O]=E.length,E.push(O),oe)},str:function(O){return E[O]}}}function pt(y,E,O){var oe=document.createElement("canvas");t(oe.style,{border:0,margin:0,padding:0,top:0,left:0}),y.appendChild(oe),y===document.body&&(oe.style.position="absolute",t(y.style,{margin:0,padding:0}));function pe(){var Te=window.innerWidth,Ce=window.innerHeight;if(y!==document.body){var Fe=y.getBoundingClientRect();Te=Fe.right-Fe.left,Ce=Fe.bottom-Fe.top}oe.width=O*Te,oe.height=O*Ce,t(oe.style,{width:Te+"px",height:Ce+"px"})}var ee;y!==document.body&&typeof ResizeObserver=="function"?(ee=new ResizeObserver(function(){setTimeout(pe)}),ee.observe(y)):window.addEventListener("resize",pe,!1);function ae(){ee?ee.disconnect():window.removeEventListener("resize",pe),y.removeChild(oe)}return pe(),{canvas:oe,onDestroy:ae}}function vt(y,E){function O(oe){try{return y.getContext(oe,E)}catch(pe){return null}}return O("webgl")||O("experimental-webgl")||O("webgl-experimental")}function Mt(y){return typeof y.nodeName=="string"&&typeof y.appendChild=="function"&&typeof y.getBoundingClientRect=="function"}function Ut(y){return typeof y.drawArrays=="function"||typeof y.drawElements=="function"}function Lt(y){return typeof y=="string"?y.split():(_(Array.isArray(y),"invalid extension array"),y)}function Jt(y){return typeof y=="string"?(_(typeof document!="undefined","not supported outside of DOM"),document.querySelector(y)):y}function Pt(y){var E=y||{},O,oe,pe,ee,ae={},Te=[],Ce=[],Fe=typeof window=="undefined"?1:window.devicePixelRatio,Pe=!1,He=function(Be){Be&&_.raise(Be)},Ye=function(){};if(typeof E=="string"?(_(typeof document!="undefined","selector queries only supported in DOM enviroments"),O=document.querySelector(E),_(O,"invalid query string for element")):typeof E=="object"?Mt(E)?O=E:Ut(E)?(ee=E,pe=ee.canvas):(_.constructor(E),"gl"in E?ee=E.gl:"canvas"in E?pe=Jt(E.canvas):"container"in E&&(oe=Jt(E.container)),"attributes"in E&&(ae=E.attributes,_.type(ae,"object","invalid context attributes")),"extensions"in E&&(Te=Lt(E.extensions)),"optionalExtensions"in E&&(Ce=Lt(E.optionalExtensions)),"onDone"in E&&(_.type(E.onDone,"function","invalid or missing onDone callback"),He=E.onDone),"profile"in E&&(Pe=!!E.profile),"pixelRatio"in E&&(Fe=+E.pixelRatio,_(Fe>0,"invalid pixel ratio"))):_.raise("invalid arguments to regl"),O&&(O.nodeName.toLowerCase()==="canvas"?pe=O:oe=O),!ee){if(!pe){_(typeof document!="undefined","must manually specify webgl context outside of DOM environments");var Le=pt(oe||document.body,He,Fe);if(!Le)return null;pe=Le.canvas,Ye=Le.onDestroy}ae.premultipliedAlpha===void 0&&(ae.premultipliedAlpha=!0),ee=vt(pe,ae)}return ee?{gl:ee,canvas:pe,container:oe,extensions:Te,optionalExtensions:Ce,pixelRatio:Fe,profile:Pe,onDone:He,onDestroy:Ye}:(Ye(),He("webgl not supported, try upgrading your browser or graphics drivers http://get.webgl.org"),null)}function It(y,E){var O={};function oe(ae){_.type(ae,"string","extension name must be string");var Te=ae.toLowerCase(),Ce;try{Ce=O[Te]=y.getExtension(Te)}catch(Fe){}return!!Ce}for(var pe=0;pe<E.extensions.length;++pe){var ee=E.extensions[pe];if(!oe(ee))return E.onDestroy(),E.onDone('"'+ee+'" extension is not supported by the current WebGL context, try upgrading your system or a different browser'),null}return E.optionalExtensions.forEach(oe),{extensions:O,restore:function(){Object.keys(O).forEach(function(ae){if(O[ae]&&!oe(ae))throw new Error("(regl): error restoring extension "+ae)})}}}function to(y,E){for(var O=Array(y),oe=0;oe<y;++oe)O[oe]=E(oe);return O}var St=5120,po=5121,Po=5122,Nt=5123,Wo=5124,xa=5125,p0=5126;function lo(y){for(var E=16;E<=1<<28;E*=16)if(y<=E)return E;return 0}function _o(y){var E,O;return E=(y>65535)<<4,y>>>=E,O=(y>255)<<3,y>>>=O,E|=O,O=(y>15)<<2,y>>>=O,E|=O,O=(y>3)<<1,y>>>=O,E|=O,E|y>>1}function Un(){var y=to(8,function(){return[]});function E(ee){var ae=lo(ee),Te=y[_o(ae)>>2];return Te.length>0?Te.pop():new ArrayBuffer(ae)}function O(ee){y[_o(ee.byteLength)>>2].push(ee)}function oe(ee,ae){var Te=null;switch(ee){case St:Te=new Int8Array(E(ae),0,ae);break;case po:Te=new Uint8Array(E(ae),0,ae);break;case Po:Te=new Int16Array(E(2*ae),0,ae);break;case Nt:Te=new Uint16Array(E(2*ae),0,ae);break;case Wo:Te=new Int32Array(E(4*ae),0,ae);break;case xa:Te=new Uint32Array(E(4*ae),0,ae);break;case p0:Te=new Float32Array(E(4*ae),0,ae);break;default:return null}return Te.length!==ae?Te.subarray(0,ae):Te}function pe(ee){O(ee.buffer)}return{alloc:E,free:O,allocType:oe,freeType:pe}}var X=Un();X.zero=Un();var xe=3408,ot=3410,dt=3411,gt=3412,hn=3413,fr=3414,Nr=3415,un=33901,kr=33902,dn=3379,xo=3386,tr=34921,Zo=36347,Bn=36348,Wr=35661,Vr=35660,Ko=34930,ya=36349,An=34076,$a=34024,No=7936,pn=7937,ba=7938,ws=35724,t0=34047,_s=36063,hf=34852,C0=3553,mi=34067,$c=34069,m1=33984,v0=6408,Fc=5126,Sr=5121,qc=36160,Ms=36053,hb=36064,ub=16384,db=function(y,E){var O=1;E.ext_texture_filter_anisotropic&&(O=y.getParameter(t0));var oe=1,pe=1;E.webgl_draw_buffers&&(oe=y.getParameter(hf),pe=y.getParameter(_s));var ee=!!E.oes_texture_float;if(ee){var ae=y.createTexture();y.bindTexture(C0,ae),y.texImage2D(C0,0,v0,1,1,0,v0,Fc,null);var Te=y.createFramebuffer();if(y.bindFramebuffer(qc,Te),y.framebufferTexture2D(qc,hb,C0,ae,0),y.bindTexture(C0,null),y.checkFramebufferStatus(qc)!==Ms)ee=!1;else{y.viewport(0,0,1,1),y.clearColor(1,0,0,1),y.clear(ub);var Ce=X.allocType(Fc,4);y.readPixels(0,0,1,1,v0,Fc,Ce),y.getError()?ee=!1:(y.deleteFramebuffer(Te),y.deleteTexture(ae),ee=Ce[0]===1),X.freeType(Ce)}}var Fe=typeof navigator!="undefined"&&(/MSIE/.test(navigator.userAgent)||/Trident\//.test(navigator.appVersion)||/Edge/.test(navigator.userAgent)),Pe=!0;if(!Fe){var He=y.createTexture(),Ye=X.allocType(Sr,36);y.activeTexture(m1),y.bindTexture(mi,He),y.texImage2D($c,0,v0,3,3,0,v0,Sr,Ye),X.freeType(Ye),y.bindTexture(mi,null),y.deleteTexture(He),Pe=!y.getError()}return{colorBits:[y.getParameter(ot),y.getParameter(dt),y.getParameter(gt),y.getParameter(hn)],depthBits:y.getParameter(fr),stencilBits:y.getParameter(Nr),subpixelBits:y.getParameter(xe),extensions:Object.keys(E).filter(function(Le){return!!E[Le]}),maxAnisotropic:O,maxDrawbuffers:oe,maxColorAttachments:pe,pointSizeDims:y.getParameter(un),lineWidthDims:y.getParameter(kr),maxViewportDims:y.getParameter(xo),maxCombinedTextureUnits:y.getParameter(Wr),maxCubeMapSize:y.getParameter(An),maxRenderbufferSize:y.getParameter($a),maxTextureUnits:y.getParameter(Ko),maxTextureSize:y.getParameter(dn),maxAttributes:y.getParameter(tr),maxVertexUniforms:y.getParameter(Zo),maxVertexTextureUnits:y.getParameter(Vr),maxVaryingVectors:y.getParameter(Bn),maxFragmentUniforms:y.getParameter(ya),glsl:y.getParameter(ws),renderer:y.getParameter(pn),vendor:y.getParameter(No),version:y.getParameter(ba),readFloat:ee,npotTextureCube:Pe}};function Fa(y){return!!y&&typeof y=="object"&&Array.isArray(y.shape)&&Array.isArray(y.stride)&&typeof y.offset=="number"&&y.shape.length===y.stride.length&&(Array.isArray(y.data)||e(y.data))}var aa=function(y){return Object.keys(y).map(function(E){return y[E]})},uf={shape:gb,flatten:mb};function pb(y,E,O){for(var oe=0;oe<E;++oe)O[oe]=y[oe]}function vb(y,E,O,oe){for(var pe=0,ee=0;ee<E;++ee)for(var ae=y[ee],Te=0;Te<O;++Te)oe[pe++]=ae[Te]}function Sp(y,E,O,oe,pe,ee){for(var ae=ee,Te=0;Te<E;++Te)for(var Ce=y[Te],Fe=0;Fe<O;++Fe)for(var Pe=Ce[Fe],He=0;He<oe;++He)pe[ae++]=Pe[He]}function Ep(y,E,O,oe,pe){for(var ee=1,ae=O+1;ae<E.length;++ae)ee*=E[ae];var Te=E[O];if(E.length-O===4){var Ce=E[O+1],Fe=E[O+2],Pe=E[O+3];for(ae=0;ae<Te;++ae)Sp(y[ae],Ce,Fe,Pe,oe,pe),pe+=ee}else for(ae=0;ae<Te;++ae)Ep(y[ae],E,O+1,oe,pe),pe+=ee}function mb(y,E,O,oe){var pe=1;if(E.length)for(var ee=0;ee<E.length;++ee)pe*=E[ee];else pe=0;var ae=oe||X.allocType(O,pe);switch(E.length){case 0:break;case 1:pb(y,E[0],ae);break;case 2:vb(y,E[0],E[1],ae);break;case 3:Sp(y,E[0],E[1],E[2],ae,0);break;default:Ep(y,E,0,ae,0)}return ae}function gb(y){for(var E=[],O=y;O.length;O=O[0])E.push(O.length);return E}var g1={"[object Int8Array]":5120,"[object Int16Array]":5122,"[object Int32Array]":5124,"[object Uint8Array]":5121,"[object Uint8ClampedArray]":5121,"[object Uint16Array]":5123,"[object Uint32Array]":5125,"[object Float32Array]":5126,"[object Float64Array]":5121,"[object ArrayBuffer]":5121},xb=5120,yb=5122,bb=5124,wb=5121,_b=5123,Mb=5125,kb=5126,Sb=5126,ks={int8:xb,int16:yb,int32:bb,uint8:wb,uint16:_b,uint32:Mb,float:kb,float32:Sb},Eb=35048,Ab=35040,df={dynamic:Eb,stream:Ab,static:35044},x1=uf.flatten,Ap=uf.shape,zp=35044,zb=35040,y1=5121,b1=5126,P0=[];P0[5120]=1,P0[5122]=2,P0[5124]=4,P0[5121]=1,P0[5123]=2,P0[5125]=4,P0[5126]=4;function pf(y){return g1[Object.prototype.toString.call(y)]|0}function Tp(y,E){for(var O=0;O<E.length;++O)y[O]=E[O]}function Lp(y,E,O,oe,pe,ee,ae){for(var Te=0,Ce=0;Ce<O;++Ce)for(var Fe=0;Fe<oe;++Fe)y[Te++]=E[pe*Ce+ee*Fe+ae]}function Tb(y,E,O,oe){var pe=0,ee={};function ae(Y){this.id=pe++,this.buffer=y.createBuffer(),this.type=Y,this.usage=zp,this.byteLength=0,this.dimension=1,this.dtype=y1,this.persistentData=null,O.profile&&(this.stats={size:0})}ae.prototype.bind=function(){y.bindBuffer(this.type,this.buffer)},ae.prototype.destroy=function(){Ye(this)};var Te=[];function Ce(Y,se){var $e=Te.pop();return $e||($e=new ae(Y)),$e.bind(),He($e,se,zb,0,1,!1),$e}function Fe(Y){Te.push(Y)}function Pe(Y,se,$e){Y.byteLength=se.byteLength,y.bufferData(Y.type,se,$e)}function He(Y,se,$e,et,we,nt){var Ae;if(Y.usage=$e,Array.isArray(se)){if(Y.dtype=et||b1,se.length>0){var je;if(Array.isArray(se[0])){Ae=Ap(se);for(var Me=1,We=1;We<Ae.length;++We)Me*=Ae[We];Y.dimension=Me,je=x1(se,Ae,Y.dtype),Pe(Y,je,$e),nt?Y.persistentData=je:X.freeType(je)}else if(typeof se[0]=="number"){Y.dimension=we;var Tt=X.allocType(Y.dtype,se.length);Tp(Tt,se),Pe(Y,Tt,$e),nt?Y.persistentData=Tt:X.freeType(Tt)}else e(se[0])?(Y.dimension=se[0].length,Y.dtype=et||pf(se[0])||b1,je=x1(se,[se.length,se[0].length],Y.dtype),Pe(Y,je,$e),nt?Y.persistentData=je:X.freeType(je)):_.raise("invalid buffer data")}}else if(e(se))Y.dtype=et||pf(se),Y.dimension=we,Pe(Y,se,$e),nt&&(Y.persistentData=new Uint8Array(new Uint8Array(se.buffer)));else if(Fa(se)){Ae=se.shape;var Ht=se.stride,Ke=se.offset,De=0,ye=0,qt=0,Kt=0;Ae.length===1?(De=Ae[0],ye=1,qt=Ht[0],Kt=0):Ae.length===2?(De=Ae[0],ye=Ae[1],qt=Ht[0],Kt=Ht[1]):_.raise("invalid shape"),Y.dtype=et||pf(se.data)||b1,Y.dimension=ye;var lt=X.allocType(Y.dtype,De*ye);Lp(lt,se.data,De,ye,qt,Kt,Ke),Pe(Y,lt,$e),nt?Y.persistentData=lt:X.freeType(lt)}else se instanceof ArrayBuffer?(Y.dtype=y1,Y.dimension=we,Pe(Y,se,$e),nt&&(Y.persistentData=new Uint8Array(new Uint8Array(se)))):_.raise("invalid buffer data")}function Ye(Y){E.bufferCount--,oe(Y);var se=Y.buffer;_(se,"buffer must not be deleted already"),y.deleteBuffer(se),Y.buffer=null,delete ee[Y.id]}function Le(Y,se,$e,et){E.bufferCount++;var we=new ae(se);ee[we.id]=we;function nt(Me){var We=zp,Tt=null,Ht=0,Ke=0,De=1;return Array.isArray(Me)||e(Me)||Fa(Me)||Me instanceof ArrayBuffer?Tt=Me:typeof Me=="number"?Ht=Me|0:Me&&(_.type(Me,"object","buffer arguments must be an object, a number or an array"),"data"in Me&&(_(Tt===null||Array.isArray(Tt)||e(Tt)||Fa(Tt),"invalid data for buffer"),Tt=Me.data),"usage"in Me&&(_.parameter(Me.usage,df,"invalid buffer usage"),We=df[Me.usage]),"type"in Me&&(_.parameter(Me.type,ks,"invalid buffer type"),Ke=ks[Me.type]),"dimension"in Me&&(_.type(Me.dimension,"number","invalid dimension"),De=Me.dimension|0),"length"in Me&&(_.nni(Ht,"buffer length must be a nonnegative integer"),Ht=Me.length|0)),we.bind(),Tt?He(we,Tt,We,Ke,De,et):(Ht&&y.bufferData(we.type,Ht,We),we.dtype=Ke||y1,we.usage=We,we.dimension=De,we.byteLength=Ht),O.profile&&(we.stats.size=we.byteLength*P0[we.dtype]),nt}function Ae(Me,We){_(We+Me.byteLength<=we.byteLength,"invalid buffer subdata call, buffer is too small.  Can't write data of size "+Me.byteLength+" starting from offset "+We+" to a buffer of size "+we.byteLength),y.bufferSubData(we.type,We,Me)}function je(Me,We){var Tt=(We||0)|0,Ht;if(we.bind(),e(Me)||Me instanceof ArrayBuffer)Ae(Me,Tt);else if(Array.isArray(Me)){if(Me.length>0)if(typeof Me[0]=="number"){var Ke=X.allocType(we.dtype,Me.length);Tp(Ke,Me),Ae(Ke,Tt),X.freeType(Ke)}else if(Array.isArray(Me[0])||e(Me[0])){Ht=Ap(Me);var De=x1(Me,Ht,we.dtype);Ae(De,Tt),X.freeType(De)}else _.raise("invalid buffer data")}else if(Fa(Me)){Ht=Me.shape;var ye=Me.stride,qt=0,Kt=0,lt=0,ao=0;Ht.length===1?(qt=Ht[0],Kt=1,lt=ye[0],ao=0):Ht.length===2?(qt=Ht[0],Kt=Ht[1],lt=ye[0],ao=ye[1]):_.raise("invalid shape");var Bt=Array.isArray(Me.data)?we.dtype:pf(Me.data),eo=X.allocType(Bt,qt*Kt);Lp(eo,Me.data,qt,Kt,lt,ao,Me.offset),Ae(eo,Tt),X.freeType(eo)}else _.raise("invalid data for buffer subdata");return nt}return $e||nt(Y),nt._reglType="buffer",nt._buffer=we,nt.subdata=je,O.profile&&(nt.stats=we.stats),nt.destroy=function(){Ye(we)},nt}function Be(){aa(ee).forEach(function(Y){Y.buffer=y.createBuffer(),y.bindBuffer(Y.type,Y.buffer),y.bufferData(Y.type,Y.persistentData||Y.byteLength,Y.usage)})}return O.profile&&(E.getTotalBufferSize=function(){var Y=0;return Object.keys(ee).forEach(function(se){Y+=ee[se].stats.size}),Y}),{create:Le,createStream:Ce,destroyStream:Fe,clear:function(){aa(ee).forEach(Ye),Te.forEach(Ye)},getBuffer:function(Y){return Y&&Y._buffer instanceof ae?Y._buffer:null},restore:Be,_initBuffer:He}}var Lb=0,Nb=0,Rb=1,Ob=1,Cb=4,Pb=4,gi={points:Lb,point:Nb,lines:Rb,line:Ob,triangles:Cb,triangle:Pb,"line loop":2,"line strip":3,"triangle strip":5,"triangle fan":6},Ib=0,$b=1,Dc=4,Fb=5120,xi=5121,Np=5122,yi=5123,Rp=5124,Ss=5125,w1=34963,qb=35040,Db=35044;function Gb(y,E,O,oe){var pe={},ee=0,ae={uint8:xi,uint16:yi};E.oes_element_index_uint&&(ae.uint32=Ss);function Te(Be){this.id=ee++,pe[this.id]=this,this.buffer=Be,this.primType=Dc,this.vertCount=0,this.type=0}Te.prototype.bind=function(){this.buffer.bind()};var Ce=[];function Fe(Be){var Y=Ce.pop();return Y||(Y=new Te(O.create(null,w1,!0,!1)._buffer)),He(Y,Be,qb,-1,-1,0,0),Y}function Pe(Be){Ce.push(Be)}function He(Be,Y,se,$e,et,we,nt){Be.buffer.bind();var Ae;if(Y){var je=nt;!nt&&(!e(Y)||Fa(Y)&&!e(Y.data))&&(je=E.oes_element_index_uint?Ss:yi),O._initBuffer(Be.buffer,Y,se,je,3)}else y.bufferData(w1,we,se),Be.buffer.dtype=Ae||xi,Be.buffer.usage=se,Be.buffer.dimension=3,Be.buffer.byteLength=we;if(Ae=nt,!nt){switch(Be.buffer.dtype){case xi:case Fb:Ae=xi;break;case yi:case Np:Ae=yi;break;case Ss:case Rp:Ae=Ss;break;default:_.raise("unsupported type for element array")}Be.buffer.dtype=Ae}Be.type=Ae,_(Ae!==Ss||!!E.oes_element_index_uint,"32 bit element buffers not supported, enable oes_element_index_uint first");var Me=et;Me<0&&(Me=Be.buffer.byteLength,Ae===yi?Me>>=1:Ae===Ss&&(Me>>=2)),Be.vertCount=Me;var We=$e;if($e<0){We=Dc;var Tt=Be.buffer.dimension;Tt===1&&(We=Ib),Tt===2&&(We=$b),Tt===3&&(We=Dc)}Be.primType=We}function Ye(Be){oe.elementsCount--,_(Be.buffer!==null,"must not double destroy elements"),delete pe[Be.id],Be.buffer.destroy(),Be.buffer=null}function Le(Be,Y){var se=O.create(null,w1,!0),$e=new Te(se._buffer);oe.elementsCount++;function et(we){if(!we)se(),$e.primType=Dc,$e.vertCount=0,$e.type=xi;else if(typeof we=="number")se(we),$e.primType=Dc,$e.vertCount=we|0,$e.type=xi;else{var nt=null,Ae=Db,je=-1,Me=-1,We=0,Tt=0;Array.isArray(we)||e(we)||Fa(we)?nt=we:(_.type(we,"object","invalid arguments for elements"),"data"in we&&(nt=we.data,_(Array.isArray(nt)||e(nt)||Fa(nt),"invalid data for element buffer")),"usage"in we&&(_.parameter(we.usage,df,"invalid element buffer usage"),Ae=df[we.usage]),"primitive"in we&&(_.parameter(we.primitive,gi,"invalid element buffer primitive"),je=gi[we.primitive]),"count"in we&&(_(typeof we.count=="number"&&we.count>=0,"invalid vertex count for elements"),Me=we.count|0),"type"in we&&(_.parameter(we.type,ae,"invalid buffer type"),Tt=ae[we.type]),"length"in we?We=we.length|0:(We=Me,Tt===yi||Tt===Np?We*=2:(Tt===Ss||Tt===Rp)&&(We*=4))),He($e,nt,Ae,je,Me,We,Tt)}return et}return et(Be),et._reglType="elements",et._elements=$e,et.subdata=function(we,nt){return se.subdata(we,nt),et},et.destroy=function(){Ye($e)},et}return{create:Le,createStream:Fe,destroyStream:Pe,getElements:function(Be){return typeof Be=="function"&&Be._elements instanceof Te?Be._elements:null},clear:function(){aa(pe).forEach(Ye)}}}var Op=new Float32Array(1),Hb=new Uint32Array(Op.buffer),Ub=5123;function Cp(y){for(var E=X.allocType(Ub,y.length),O=0;O<y.length;++O)if(isNaN(y[O]))E[O]=65535;else if(y[O]===1/0)E[O]=31744;else if(y[O]===-1/0)E[O]=64512;else{Op[0]=y[O];var oe=Hb[0],pe=oe>>>31<<15,ee=(oe<<1>>>24)-127,ae=oe>>13&1023;if(ee<-24)E[O]=pe;else if(ee<-14){var Te=-14-ee;E[O]=pe+(ae+1024>>Te)}else ee>15?E[O]=pe+31744:E[O]=pe+(ee+15<<10)+ae}return E}function _n(y){return Array.isArray(y)||e(y)}var Pp=function(y){return!(y&y-1)&&!!y},Bb=34467,o0=3553,_1=34067,vf=34069,Es=6408,M1=6406,mf=6407,Gc=6409,gf=6410,Ip=32854,k1=32855,$p=36194,jb=32819,Wb=32820,Vb=33635,Xb=34042,S1=6402,xf=34041,E1=35904,A1=35906,bi=36193,z1=33776,T1=33777,L1=33778,N1=33779,Fp=35986,qp=35987,Dp=34798,Gp=35840,Hp=35841,Up=35842,Bp=35843,jp=36196,wi=5121,R1=5123,O1=5125,Hc=5126,Yb=10242,Kb=10243,Qb=10497,C1=33071,Zb=33648,Jb=10240,ew=10241,P1=9728,tw=9729,I1=9984,Wp=9985,Vp=9986,$1=9987,ow=33170,yf=4352,nw=4353,rw=4354,aw=34046,sw=3317,iw=37440,cw=37441,lw=37443,Xp=37444,Uc=33984,fw=[I1,Vp,Wp,$1],bf=[0,Gc,gf,mf,Es],wa={};wa[Gc]=wa[M1]=wa[S1]=1,wa[xf]=wa[gf]=2,wa[mf]=wa[E1]=3,wa[Es]=wa[A1]=4;function _i(y){return"[object "+y+"]"}var Yp=_i("HTMLCanvasElement"),Kp=_i("OffscreenCanvas"),Qp=_i("CanvasRenderingContext2D"),Zp=_i("ImageBitmap"),Jp=_i("HTMLImageElement"),ev=_i("HTMLVideoElement"),hw=Object.keys(g1).concat([Yp,Kp,Qp,Zp,Jp,ev]),Mi=[];Mi[wi]=1,Mi[Hc]=4,Mi[bi]=2,Mi[R1]=2,Mi[O1]=4;var hr=[];hr[Ip]=2,hr[k1]=2,hr[$p]=2,hr[xf]=4,hr[z1]=.5,hr[T1]=.5,hr[L1]=1,hr[N1]=1,hr[Fp]=.5,hr[qp]=1,hr[Dp]=1,hr[Gp]=.5,hr[Hp]=.25,hr[Up]=.5,hr[Bp]=.25,hr[jp]=.5;function tv(y){return Array.isArray(y)&&(y.length===0||typeof y[0]=="number")}function ov(y){if(!Array.isArray(y))return!1;var E=y.length;return!(E===0||!_n(y[0]))}function As(y){return Object.prototype.toString.call(y)}function nv(y){return As(y)===Yp}function rv(y){return As(y)===Kp}function uw(y){return As(y)===Qp}function dw(y){return As(y)===Zp}function pw(y){return As(y)===Jp}function vw(y){return As(y)===ev}function F1(y){if(!y)return!1;var E=As(y);return hw.indexOf(E)>=0?!0:tv(y)||ov(y)||Fa(y)}function av(y){return g1[Object.prototype.toString.call(y)]|0}function mw(y,E){var O=E.length;switch(y.type){case wi:case R1:case O1:case Hc:var oe=X.allocType(y.type,O);oe.set(E),y.data=oe;break;case bi:y.data=Cp(E);break;default:_.raise("unsupported texture type, must specify a typed array")}}function sv(y,E){return X.allocType(y.type===bi?Hc:y.type,E)}function iv(y,E){y.type===bi?(y.data=Cp(E),X.freeType(E)):y.data=E}function gw(y,E,O,oe,pe,ee){for(var ae=y.width,Te=y.height,Ce=y.channels,Fe=ae*Te*Ce,Pe=sv(y,Fe),He=0,Ye=0;Ye<Te;++Ye)for(var Le=0;Le<ae;++Le)for(var Be=0;Be<Ce;++Be)Pe[He++]=E[O*Le+oe*Ye+pe*Be+ee];iv(y,Pe)}function wf(y,E,O,oe,pe,ee){var ae;if(typeof hr[y]!="undefined"?ae=hr[y]:ae=wa[y]*Mi[E],ee&&(ae*=6),pe){for(var Te=0,Ce=O;Ce>=1;)Te+=ae*Ce*Ce,Ce/=2;return Te}else return ae*O*oe}function xw(y,E,O,oe,pe,ee,ae){var Te={"don't care":yf,"dont care":yf,nice:rw,fast:nw},Ce={repeat:Qb,clamp:C1,mirror:Zb},Fe={nearest:P1,linear:tw},Pe=t({mipmap:$1,"nearest mipmap nearest":I1,"linear mipmap nearest":Wp,"nearest mipmap linear":Vp,"linear mipmap linear":$1},Fe),He={none:0,browser:Xp},Ye={uint8:wi,rgba4:jb,rgb565:Vb,"rgb5 a1":Wb},Le={alpha:M1,luminance:Gc,"luminance alpha":gf,rgb:mf,rgba:Es,rgba4:Ip,"rgb5 a1":k1,rgb565:$p},Be={};E.ext_srgb&&(Le.srgb=E1,Le.srgba=A1),E.oes_texture_float&&(Ye.float32=Ye.float=Hc),E.oes_texture_half_float&&(Ye.float16=Ye["half float"]=bi),E.webgl_depth_texture&&(t(Le,{depth:S1,"depth stencil":xf}),t(Ye,{uint16:R1,uint32:O1,"depth stencil":Xb})),E.webgl_compressed_texture_s3tc&&t(Be,{"rgb s3tc dxt1":z1,"rgba s3tc dxt1":T1,"rgba s3tc dxt3":L1,"rgba s3tc dxt5":N1}),E.webgl_compressed_texture_atc&&t(Be,{"rgb atc":Fp,"rgba atc explicit alpha":qp,"rgba atc interpolated alpha":Dp}),E.webgl_compressed_texture_pvrtc&&t(Be,{"rgb pvrtc 4bppv1":Gp,"rgb pvrtc 2bppv1":Hp,"rgba pvrtc 4bppv1":Up,"rgba pvrtc 2bppv1":Bp}),E.webgl_compressed_texture_etc1&&(Be["rgb etc1"]=jp);var Y=Array.prototype.slice.call(y.getParameter(Bb));Object.keys(Be).forEach(function(N){var ne=Be[N];Y.indexOf(ne)>=0&&(Le[N]=ne)});var se=Object.keys(Le);O.textureFormats=se;var $e=[];Object.keys(Le).forEach(function(N){var ne=Le[N];$e[ne]=N});var et=[];Object.keys(Ye).forEach(function(N){var ne=Ye[N];et[ne]=N});var we=[];Object.keys(Fe).forEach(function(N){var ne=Fe[N];we[ne]=N});var nt=[];Object.keys(Pe).forEach(function(N){var ne=Pe[N];nt[ne]=N});var Ae=[];Object.keys(Ce).forEach(function(N){var ne=Ce[N];Ae[ne]=N});var je=se.reduce(function(N,ne){var J=Le[ne];return J===Gc||J===M1||J===Gc||J===gf||J===S1||J===xf||E.ext_srgb&&(J===E1||J===A1)?N[J]=J:J===k1||ne.indexOf("rgba")>=0?N[J]=Es:N[J]=mf,N},{});function Me(){this.internalformat=Es,this.format=Es,this.type=wi,this.compressed=!1,this.premultiplyAlpha=!1,this.flipY=!1,this.unpackAlignment=1,this.colorSpace=Xp,this.width=0,this.height=0,this.channels=0}function We(N,ne){N.internalformat=ne.internalformat,N.format=ne.format,N.type=ne.type,N.compressed=ne.compressed,N.premultiplyAlpha=ne.premultiplyAlpha,N.flipY=ne.flipY,N.unpackAlignment=ne.unpackAlignment,N.colorSpace=ne.colorSpace,N.width=ne.width,N.height=ne.height,N.channels=ne.channels}function Tt(N,ne){if(!(typeof ne!="object"||!ne)){if("premultiplyAlpha"in ne&&(_.type(ne.premultiplyAlpha,"boolean","invalid premultiplyAlpha"),N.premultiplyAlpha=ne.premultiplyAlpha),"flipY"in ne&&(_.type(ne.flipY,"boolean","invalid texture flip"),N.flipY=ne.flipY),"alignment"in ne&&(_.oneOf(ne.alignment,[1,2,4,8],"invalid texture unpack alignment"),N.unpackAlignment=ne.alignment),"colorSpace"in ne&&(_.parameter(ne.colorSpace,He,"invalid colorSpace"),N.colorSpace=He[ne.colorSpace]),"type"in ne){var J=ne.type;_(E.oes_texture_float||!(J==="float"||J==="float32"),"you must enable the OES_texture_float extension in order to use floating point textures."),_(E.oes_texture_half_float||!(J==="half float"||J==="float16"),"you must enable the OES_texture_half_float extension in order to use 16-bit floating point textures."),_(E.webgl_depth_texture||!(J==="uint16"||J==="uint32"||J==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),_.parameter(J,Ye,"invalid texture type"),N.type=Ye[J]}var st=N.width,so=N.height,T=N.channels,S=!1;"shape"in ne?(_(Array.isArray(ne.shape)&&ne.shape.length>=2,"shape must be an array"),st=ne.shape[0],so=ne.shape[1],ne.shape.length===3&&(T=ne.shape[2],_(T>0&&T<=4,"invalid number of channels"),S=!0),_(st>=0&&st<=O.maxTextureSize,"invalid width"),_(so>=0&&so<=O.maxTextureSize,"invalid height")):("radius"in ne&&(st=so=ne.radius,_(st>=0&&st<=O.maxTextureSize,"invalid radius")),"width"in ne&&(st=ne.width,_(st>=0&&st<=O.maxTextureSize,"invalid width")),"height"in ne&&(so=ne.height,_(so>=0&&so<=O.maxTextureSize,"invalid height")),"channels"in ne&&(T=ne.channels,_(T>0&&T<=4,"invalid number of channels"),S=!0)),N.width=st|0,N.height=so|0,N.channels=T|0;var I=!1;if("format"in ne){var j=ne.format;_(E.webgl_depth_texture||!(j==="depth"||j==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),_.parameter(j,Le,"invalid texture format");var K=N.internalformat=Le[j];N.format=je[K],j in Ye&&("type"in ne||(N.type=Ye[j])),j in Be&&(N.compressed=!0),I=!0}!S&&I?N.channels=wa[N.format]:S&&!I?N.channels!==bf[N.format]&&(N.format=N.internalformat=bf[N.channels]):I&&S&&_(N.channels===wa[N.format],"number of channels inconsistent with specified format")}}function Ht(N){y.pixelStorei(iw,N.flipY),y.pixelStorei(cw,N.premultiplyAlpha),y.pixelStorei(lw,N.colorSpace),y.pixelStorei(sw,N.unpackAlignment)}function Ke(){Me.call(this),this.xOffset=0,this.yOffset=0,this.data=null,this.needsFree=!1,this.element=null,this.needsCopy=!1}function De(N,ne){var J=null;if(F1(ne)?J=ne:ne&&(_.type(ne,"object","invalid pixel data type"),Tt(N,ne),"x"in ne&&(N.xOffset=ne.x|0),"y"in ne&&(N.yOffset=ne.y|0),F1(ne.data)&&(J=ne.data)),_(!N.compressed||J instanceof Uint8Array,"compressed texture data must be stored in a uint8array"),ne.copy){_(!J,"can not specify copy and data field for the same texture");var st=pe.viewportWidth,so=pe.viewportHeight;N.width=N.width||st-N.xOffset,N.height=N.height||so-N.yOffset,N.needsCopy=!0,_(N.xOffset>=0&&N.xOffset<st&&N.yOffset>=0&&N.yOffset<so&&N.width>0&&N.width<=st&&N.height>0&&N.height<=so,"copy texture read out of bounds")}else if(!J)N.width=N.width||1,N.height=N.height||1,N.channels=N.channels||4;else if(e(J))N.channels=N.channels||4,N.data=J,!("type"in ne)&&N.type===wi&&(N.type=av(J));else if(tv(J))N.channels=N.channels||4,mw(N,J),N.alignment=1,N.needsFree=!0;else if(Fa(J)){var T=J.data;!Array.isArray(T)&&N.type===wi&&(N.type=av(T));var S=J.shape,I=J.stride,j,K,F,$,H,L;S.length===3?(F=S[2],L=I[2]):(_(S.length===2,"invalid ndarray pixel data, must be 2 or 3D"),F=1,L=1),j=S[0],K=S[1],$=I[0],H=I[1],N.alignment=1,N.width=j,N.height=K,N.channels=F,N.format=N.internalformat=bf[F],N.needsFree=!0,gw(N,T,$,H,L,J.offset)}else if(nv(J)||rv(J)||uw(J))nv(J)||rv(J)?N.element=J:N.element=J.canvas,N.width=N.element.width,N.height=N.element.height,N.channels=4;else if(dw(J))N.element=J,N.width=J.width,N.height=J.height,N.channels=4;else if(pw(J))N.element=J,N.width=J.naturalWidth,N.height=J.naturalHeight,N.channels=4;else if(vw(J))N.element=J,N.width=J.videoWidth,N.height=J.videoHeight,N.channels=4;else if(ov(J)){var C=N.width||J[0].length,A=N.height||J.length,B=N.channels;_n(J[0][0])?B=B||J[0][0].length:B=B||1;for(var Z=uf.shape(J),fe=1,ve=0;ve<Z.length;++ve)fe*=Z[ve];var ie=sv(N,fe);uf.flatten(J,Z,"",ie),iv(N,ie),N.alignment=1,N.width=C,N.height=A,N.channels=B,N.format=N.internalformat=bf[B],N.needsFree=!0}N.type===Hc?_(O.extensions.indexOf("oes_texture_float")>=0,"oes_texture_float extension not enabled"):N.type===bi&&_(O.extensions.indexOf("oes_texture_half_float")>=0,"oes_texture_half_float extension not enabled")}function ye(N,ne,J){var st=N.element,so=N.data,T=N.internalformat,S=N.format,I=N.type,j=N.width,K=N.height;Ht(N),st?y.texImage2D(ne,J,S,S,I,st):N.compressed?y.compressedTexImage2D(ne,J,T,j,K,0,so):N.needsCopy?(oe(),y.copyTexImage2D(ne,J,S,N.xOffset,N.yOffset,j,K,0)):y.texImage2D(ne,J,S,j,K,0,S,I,so||null)}function qt(N,ne,J,st,so){var T=N.element,S=N.data,I=N.internalformat,j=N.format,K=N.type,F=N.width,$=N.height;Ht(N),T?y.texSubImage2D(ne,so,J,st,j,K,T):N.compressed?y.compressedTexSubImage2D(ne,so,J,st,I,F,$,S):N.needsCopy?(oe(),y.copyTexSubImage2D(ne,so,J,st,N.xOffset,N.yOffset,F,$)):y.texSubImage2D(ne,so,J,st,F,$,j,K,S)}var Kt=[];function lt(){return Kt.pop()||new Ke}function ao(N){N.needsFree&&X.freeType(N.data),Ke.call(N),Kt.push(N)}function Bt(){Me.call(this),this.genMipmaps=!1,this.mipmapHint=yf,this.mipmask=0,this.images=Array(16)}function eo(N,ne,J){var st=N.images[0]=lt();N.mipmask=1,st.width=N.width=ne,st.height=N.height=J,st.channels=N.channels=4}function Eo(N,ne){var J=null;if(F1(ne))J=N.images[0]=lt(),We(J,N),De(J,ne),N.mipmask=1;else if(Tt(N,ne),Array.isArray(ne.mipmap))for(var st=ne.mipmap,so=0;so<st.length;++so)J=N.images[so]=lt(),We(J,N),J.width>>=so,J.height>>=so,De(J,st[so]),N.mipmask|=1<<so;else J=N.images[0]=lt(),We(J,N),De(J,ne),N.mipmask=1;We(N,N.images[0]),N.compressed&&(N.internalformat===z1||N.internalformat===T1||N.internalformat===L1||N.internalformat===N1)&&_(N.width%4===0&&N.height%4===0,"for compressed texture formats, mipmap level 0 must have width and height that are a multiple of 4")}function Tn(N,ne){for(var J=N.images,st=0;st<J.length;++st){if(!J[st])return;ye(J[st],ne,st)}}var jn=[];function ho(){var N=jn.pop()||new Bt;Me.call(N),N.mipmask=0;for(var ne=0;ne<16;++ne)N.images[ne]=null;return N}function In(N){for(var ne=N.images,J=0;J<ne.length;++J)ne[J]&&ao(ne[J]),ne[J]=null;jn.push(N)}function Jo(){this.minFilter=P1,this.magFilter=P1,this.wrapS=C1,this.wrapT=C1,this.anisotropic=1,this.genMipmaps=!1,this.mipmapHint=yf}function Ln(N,ne){if("min"in ne){var J=ne.min;_.parameter(J,Pe),N.minFilter=Pe[J],fw.indexOf(N.minFilter)>=0&&!("faces"in ne)&&(N.genMipmaps=!0)}if("mag"in ne){var st=ne.mag;_.parameter(st,Fe),N.magFilter=Fe[st]}var so=N.wrapS,T=N.wrapT;if("wrap"in ne){var S=ne.wrap;typeof S=="string"?(_.parameter(S,Ce),so=T=Ce[S]):Array.isArray(S)&&(_.parameter(S[0],Ce),_.parameter(S[1],Ce),so=Ce[S[0]],T=Ce[S[1]])}else{if("wrapS"in ne){var I=ne.wrapS;_.parameter(I,Ce),so=Ce[I]}if("wrapT"in ne){var j=ne.wrapT;_.parameter(j,Ce),T=Ce[j]}}if(N.wrapS=so,N.wrapT=T,"anisotropic"in ne){var K=ne.anisotropic;_(typeof K=="number"&&K>=1&&K<=O.maxAnisotropic,"aniso samples must be between 1 and "),N.anisotropic=ne.anisotropic}if("mipmap"in ne){var F=!1;switch(typeof ne.mipmap){case"string":_.parameter(ne.mipmap,Te,"invalid mipmap hint"),N.mipmapHint=Te[ne.mipmap],N.genMipmaps=!0,F=!0;break;case"boolean":F=N.genMipmaps=ne.mipmap;break;case"object":_(Array.isArray(ne.mipmap),"invalid mipmap type"),N.genMipmaps=!1,F=!0;break;default:_.raise("invalid mipmap type")}F&&!("min"in ne)&&(N.minFilter=I1)}}function $n(N,ne){y.texParameteri(ne,ew,N.minFilter),y.texParameteri(ne,Jb,N.magFilter),y.texParameteri(ne,Yb,N.wrapS),y.texParameteri(ne,Kb,N.wrapT),E.ext_texture_filter_anisotropic&&y.texParameteri(ne,aw,N.anisotropic),N.genMipmaps&&(y.hint(ow,N.mipmapHint),y.generateMipmap(ne))}var Fn=0,or={},ur=O.maxTextureUnits,Mn=Array(ur).map(function(){return null});function Qt(N){Me.call(this),this.mipmask=0,this.internalformat=Es,this.id=Fn++,this.refCount=1,this.target=N,this.texture=y.createTexture(),this.unit=-1,this.bindCount=0,this.texInfo=new Jo,ae.profile&&(this.stats={size:0})}function dr(N){y.activeTexture(Uc),y.bindTexture(N.target,N.texture)}function Ro(){var N=Mn[0];N?y.bindTexture(N.target,N.texture):y.bindTexture(o0,null)}function Rt(N){var ne=N.texture;_(ne,"must not double destroy texture");var J=N.unit,st=N.target;J>=0&&(y.activeTexture(Uc+J),y.bindTexture(st,null),Mn[J]=null),y.deleteTexture(ne),N.texture=null,N.params=null,N.pixels=null,N.refCount=0,delete or[N.id],ee.textureCount--}t(Qt.prototype,{bind:function(){var N=this;N.bindCount+=1;var ne=N.unit;if(ne<0){for(var J=0;J<ur;++J){var st=Mn[J];if(st){if(st.bindCount>0)continue;st.unit=-1}Mn[J]=N,ne=J;break}ne>=ur&&_.raise("insufficient number of texture units"),ae.profile&&ee.maxTextureUnits<ne+1&&(ee.maxTextureUnits=ne+1),N.unit=ne,y.activeTexture(Uc+ne),y.bindTexture(N.target,N.texture)}return ne},unbind:function(){this.bindCount-=1},decRef:function(){--this.refCount<=0&&Rt(this)}});function fo(N,ne){var J=new Qt(o0);or[J.id]=J,ee.textureCount++;function st(S,I){var j=J.texInfo;Jo.call(j);var K=ho();return typeof S=="number"?typeof I=="number"?eo(K,S|0,I|0):eo(K,S|0,S|0):S?(_.type(S,"object","invalid arguments to regl.texture"),Ln(j,S),Eo(K,S)):eo(K,1,1),j.genMipmaps&&(K.mipmask=(K.width<<1)-1),J.mipmask=K.mipmask,We(J,K),_.texture2D(j,K,O),J.internalformat=K.internalformat,st.width=K.width,st.height=K.height,dr(J),Tn(K,o0),$n(j,o0),Ro(),In(K),ae.profile&&(J.stats.size=wf(J.internalformat,J.type,K.width,K.height,j.genMipmaps,!1)),st.format=$e[J.internalformat],st.type=et[J.type],st.mag=we[j.magFilter],st.min=nt[j.minFilter],st.wrapS=Ae[j.wrapS],st.wrapT=Ae[j.wrapT],st}function so(S,I,j,K){_(!!S,"must specify image data");var F=I|0,$=j|0,H=K|0,L=lt();return We(L,J),L.width=0,L.height=0,De(L,S),L.width=L.width||(J.width>>H)-F,L.height=L.height||(J.height>>H)-$,_(J.type===L.type&&J.format===L.format&&J.internalformat===L.internalformat,"incompatible format for texture.subimage"),_(F>=0&&$>=0&&F+L.width<=J.width&&$+L.height<=J.height,"texture.subimage write out of bounds"),_(J.mipmask&1<<H,"missing mipmap data"),_(L.data||L.element||L.needsCopy,"missing image data"),dr(J),qt(L,o0,F,$,H),Ro(),ao(L),st}function T(S,I){var j=S|0,K=I|0||j;if(j===J.width&&K===J.height)return st;st.width=J.width=j,st.height=J.height=K,dr(J);for(var F=0;J.mipmask>>F;++F){var $=j>>F,H=K>>F;if(!$||!H)break;y.texImage2D(o0,F,J.format,$,H,0,J.format,J.type,null)}return Ro(),ae.profile&&(J.stats.size=wf(J.internalformat,J.type,j,K,!1,!1)),st}return st(N,ne),st.subimage=so,st.resize=T,st._reglType="texture2d",st._texture=J,ae.profile&&(st.stats=J.stats),st.destroy=function(){J.decRef()},st}function yo(N,ne,J,st,so,T){var S=new Qt(_1);or[S.id]=S,ee.cubeCount++;var I=new Array(6);function j($,H,L,C,A,B){var Z,fe=S.texInfo;for(Jo.call(fe),Z=0;Z<6;++Z)I[Z]=ho();if(typeof $=="number"||!$){var ve=$|0||1;for(Z=0;Z<6;++Z)eo(I[Z],ve,ve)}else if(typeof $=="object")if(H)Eo(I[0],$),Eo(I[1],H),Eo(I[2],L),Eo(I[3],C),Eo(I[4],A),Eo(I[5],B);else if(Ln(fe,$),Tt(S,$),"faces"in $){var ie=$.faces;for(_(Array.isArray(ie)&&ie.length===6,"cube faces must be a length 6 array"),Z=0;Z<6;++Z)_(typeof ie[Z]=="object"&&!!ie[Z],"invalid input for cube map face"),We(I[Z],S),Eo(I[Z],ie[Z])}else for(Z=0;Z<6;++Z)Eo(I[Z],$);else _.raise("invalid arguments to cube map");for(We(S,I[0]),O.npotTextureCube||_(Pp(S.width)&&Pp(S.height),"your browser does not support non power or two texture dimensions"),fe.genMipmaps?S.mipmask=(I[0].width<<1)-1:S.mipmask=I[0].mipmask,_.textureCube(S,fe,I,O),S.internalformat=I[0].internalformat,j.width=I[0].width,j.height=I[0].height,dr(S),Z=0;Z<6;++Z)Tn(I[Z],vf+Z);for($n(fe,_1),Ro(),ae.profile&&(S.stats.size=wf(S.internalformat,S.type,j.width,j.height,fe.genMipmaps,!0)),j.format=$e[S.internalformat],j.type=et[S.type],j.mag=we[fe.magFilter],j.min=nt[fe.minFilter],j.wrapS=Ae[fe.wrapS],j.wrapT=Ae[fe.wrapT],Z=0;Z<6;++Z)In(I[Z]);return j}function K($,H,L,C,A){_(!!H,"must specify image data"),_(typeof $=="number"&&$===($|0)&&$>=0&&$<6,"invalid face");var B=L|0,Z=C|0,fe=A|0,ve=lt();return We(ve,S),ve.width=0,ve.height=0,De(ve,H),ve.width=ve.width||(S.width>>fe)-B,ve.height=ve.height||(S.height>>fe)-Z,_(S.type===ve.type&&S.format===ve.format&&S.internalformat===ve.internalformat,"incompatible format for texture.subimage"),_(B>=0&&Z>=0&&B+ve.width<=S.width&&Z+ve.height<=S.height,"texture.subimage write out of bounds"),_(S.mipmask&1<<fe,"missing mipmap data"),_(ve.data||ve.element||ve.needsCopy,"missing image data"),dr(S),qt(ve,vf+$,B,Z,fe),Ro(),ao(ve),j}function F($){var H=$|0;if(H!==S.width){j.width=S.width=H,j.height=S.height=H,dr(S);for(var L=0;L<6;++L)for(var C=0;S.mipmask>>C;++C)y.texImage2D(vf+L,C,S.format,H>>C,H>>C,0,S.format,S.type,null);return Ro(),ae.profile&&(S.stats.size=wf(S.internalformat,S.type,j.width,j.height,!1,!0)),j}}return j(N,ne,J,st,so,T),j.subimage=K,j.resize=F,j._reglType="textureCube",j._texture=S,ae.profile&&(j.stats=S.stats),j.destroy=function(){S.decRef()},j}function kn(){for(var N=0;N<ur;++N)y.activeTexture(Uc+N),y.bindTexture(o0,null),Mn[N]=null;aa(or).forEach(Rt),ee.cubeCount=0,ee.textureCount=0}ae.profile&&(ee.getTotalTextureSize=function(){var N=0;return Object.keys(or).forEach(function(ne){N+=or[ne].stats.size}),N});function r0(){for(var N=0;N<ur;++N){var ne=Mn[N];ne&&(ne.bindCount=0,ne.unit=-1,Mn[N]=null)}aa(or).forEach(function(J){J.texture=y.createTexture(),y.bindTexture(J.target,J.texture);for(var st=0;st<32;++st)if(J.mipmask&1<<st)if(J.target===o0)y.texImage2D(o0,st,J.internalformat,J.width>>st,J.height>>st,0,J.internalformat,J.type,null);else for(var so=0;so<6;++so)y.texImage2D(vf+so,st,J.internalformat,J.width>>st,J.height>>st,0,J.internalformat,J.type,null);$n(J.texInfo,J.target)})}function Cs(){for(var N=0;N<ur;++N){var ne=Mn[N];ne&&(ne.bindCount=0,ne.unit=-1,Mn[N]=null),y.activeTexture(Uc+N),y.bindTexture(o0,null),y.bindTexture(_1,null)}}return{create2D:fo,createCube:yo,clear:kn,getTexture:function(N){return null},restore:r0,refresh:Cs}}var I0=36161,_f=32854,cv=32855,lv=36194,fv=33189,hv=36168,uv=34041,dv=35907,pv=34836,vv=34842,mv=34843,qa=[];qa[_f]=2,qa[cv]=2,qa[lv]=2,qa[fv]=2,qa[hv]=1,qa[uv]=4,qa[dv]=4,qa[pv]=16,qa[vv]=8,qa[mv]=6;function gv(y,E,O){return qa[y]*E*O}var yw=function(y,E,O,oe,pe){var ee={rgba4:_f,rgb565:lv,"rgb5 a1":cv,depth:fv,stencil:hv,"depth stencil":uv};E.ext_srgb&&(ee.srgba=dv),E.ext_color_buffer_half_float&&(ee.rgba16f=vv,ee.rgb16f=mv),E.webgl_color_buffer_float&&(ee.rgba32f=pv);var ae=[];Object.keys(ee).forEach(function(Le){var Be=ee[Le];ae[Be]=Le});var Te=0,Ce={};function Fe(Le){this.id=Te++,this.refCount=1,this.renderbuffer=Le,this.format=_f,this.width=0,this.height=0,pe.profile&&(this.stats={size:0})}Fe.prototype.decRef=function(){--this.refCount<=0&&Pe(this)};function Pe(Le){var Be=Le.renderbuffer;_(Be,"must not double destroy renderbuffer"),y.bindRenderbuffer(I0,null),y.deleteRenderbuffer(Be),Le.renderbuffer=null,Le.refCount=0,delete Ce[Le.id],oe.renderbufferCount--}function He(Le,Be){var Y=new Fe(y.createRenderbuffer());Ce[Y.id]=Y,oe.renderbufferCount++;function se(et,we){var nt=0,Ae=0,je=_f;if(typeof et=="object"&&et){var Me=et;if("shape"in Me){var We=Me.shape;_(Array.isArray(We)&&We.length>=2,"invalid renderbuffer shape"),nt=We[0]|0,Ae=We[1]|0}else"radius"in Me&&(nt=Ae=Me.radius|0),"width"in Me&&(nt=Me.width|0),"height"in Me&&(Ae=Me.height|0);"format"in Me&&(_.parameter(Me.format,ee,"invalid renderbuffer format"),je=ee[Me.format])}else typeof et=="number"?(nt=et|0,typeof we=="number"?Ae=we|0:Ae=nt):et?_.raise("invalid arguments to renderbuffer constructor"):nt=Ae=1;if(_(nt>0&&Ae>0&&nt<=O.maxRenderbufferSize&&Ae<=O.maxRenderbufferSize,"invalid renderbuffer size"),!(nt===Y.width&&Ae===Y.height&&je===Y.format))return se.width=Y.width=nt,se.height=Y.height=Ae,Y.format=je,y.bindRenderbuffer(I0,Y.renderbuffer),y.renderbufferStorage(I0,je,nt,Ae),_(y.getError()===0,"invalid render buffer format"),pe.profile&&(Y.stats.size=gv(Y.format,Y.width,Y.height)),se.format=ae[Y.format],se}function $e(et,we){var nt=et|0,Ae=we|0||nt;return nt===Y.width&&Ae===Y.height||(_(nt>0&&Ae>0&&nt<=O.maxRenderbufferSize&&Ae<=O.maxRenderbufferSize,"invalid renderbuffer size"),se.width=Y.width=nt,se.height=Y.height=Ae,y.bindRenderbuffer(I0,Y.renderbuffer),y.renderbufferStorage(I0,Y.format,nt,Ae),_(y.getError()===0,"invalid render buffer format"),pe.profile&&(Y.stats.size=gv(Y.format,Y.width,Y.height))),se}return se(Le,Be),se.resize=$e,se._reglType="renderbuffer",se._renderbuffer=Y,pe.profile&&(se.stats=Y.stats),se.destroy=function(){Y.decRef()},se}pe.profile&&(oe.getTotalRenderbufferSize=function(){var Le=0;return Object.keys(Ce).forEach(function(Be){Le+=Ce[Be].stats.size}),Le});function Ye(){aa(Ce).forEach(function(Le){Le.renderbuffer=y.createRenderbuffer(),y.bindRenderbuffer(I0,Le.renderbuffer),y.renderbufferStorage(I0,Le.format,Le.width,Le.height)}),y.bindRenderbuffer(I0,null)}return{create:He,clear:function(){aa(Ce).forEach(Pe)},restore:Ye}},m0=36160,q1=36161,zs=3553,Mf=34069,xv=36064,yv=36096,bv=36128,wv=33306,_v=36053,bw=36054,ww=36055,_w=36057,Mw=36061,kw=36193,Sw=5121,Ew=5126,Mv=6407,kv=6408,Aw=6402,zw=[Mv,kv],D1=[];D1[kv]=4,D1[Mv]=3;var kf=[];kf[Sw]=1,kf[Ew]=4,kf[kw]=2;var Tw=32854,Lw=32855,Nw=36194,Rw=33189,Ow=36168,Sv=34041,Cw=35907,Pw=34836,Iw=34842,$w=34843,Fw=[Tw,Lw,Nw,Cw,Iw,$w,Pw],ki={};ki[_v]="complete",ki[bw]="incomplete attachment",ki[_w]="incomplete dimensions",ki[ww]="incomplete, missing attachment",ki[Mw]="unsupported";function qw(y,E,O,oe,pe,ee){var ae={cur:null,next:null,dirty:!1,setFBO:null},Te=["rgba"],Ce=["rgba4","rgb565","rgb5 a1"];E.ext_srgb&&Ce.push("srgba"),E.ext_color_buffer_half_float&&Ce.push("rgba16f","rgb16f"),E.webgl_color_buffer_float&&Ce.push("rgba32f");var Fe=["uint8"];E.oes_texture_half_float&&Fe.push("half float","float16"),E.oes_texture_float&&Fe.push("float","float32");function Pe(Ke,De,ye){this.target=Ke,this.texture=De,this.renderbuffer=ye;var qt=0,Kt=0;De?(qt=De.width,Kt=De.height):ye&&(qt=ye.width,Kt=ye.height),this.width=qt,this.height=Kt}function He(Ke){Ke&&(Ke.texture&&Ke.texture._texture.decRef(),Ke.renderbuffer&&Ke.renderbuffer._renderbuffer.decRef())}function Ye(Ke,De,ye){if(Ke)if(Ke.texture){var qt=Ke.texture._texture,Kt=Math.max(1,qt.width),lt=Math.max(1,qt.height);_(Kt===De&&lt===ye,"inconsistent width/height for supplied texture"),qt.refCount+=1}else{var ao=Ke.renderbuffer._renderbuffer;_(ao.width===De&&ao.height===ye,"inconsistent width/height for renderbuffer"),ao.refCount+=1}}function Le(Ke,De){De&&(De.texture?y.framebufferTexture2D(m0,Ke,De.target,De.texture._texture.texture,0):y.framebufferRenderbuffer(m0,Ke,q1,De.renderbuffer._renderbuffer.renderbuffer))}function Be(Ke){var De=zs,ye=null,qt=null,Kt=Ke;typeof Ke=="object"&&(Kt=Ke.data,"target"in Ke&&(De=Ke.target|0)),_.type(Kt,"function","invalid attachment data");var lt=Kt._reglType;return lt==="texture2d"?(ye=Kt,_(De===zs)):lt==="textureCube"?(ye=Kt,_(De>=Mf&&De<Mf+6,"invalid cube map target")):lt==="renderbuffer"?(qt=Kt,De=q1):_.raise("invalid regl object for attachment"),new Pe(De,ye,qt)}function Y(Ke,De,ye,qt,Kt){if(ye){var lt=oe.create2D({width:Ke,height:De,format:qt,type:Kt});return lt._texture.refCount=0,new Pe(zs,lt,null)}else{var ao=pe.create({width:Ke,height:De,format:qt});return ao._renderbuffer.refCount=0,new Pe(q1,null,ao)}}function se(Ke){return Ke&&(Ke.texture||Ke.renderbuffer)}function $e(Ke,De,ye){Ke&&(Ke.texture?Ke.texture.resize(De,ye):Ke.renderbuffer&&Ke.renderbuffer.resize(De,ye),Ke.width=De,Ke.height=ye)}var et=0,we={};function nt(){this.id=et++,we[this.id]=this,this.framebuffer=y.createFramebuffer(),this.width=0,this.height=0,this.colorAttachments=[],this.depthAttachment=null,this.stencilAttachment=null,this.depthStencilAttachment=null}function Ae(Ke){Ke.colorAttachments.forEach(He),He(Ke.depthAttachment),He(Ke.stencilAttachment),He(Ke.depthStencilAttachment)}function je(Ke){var De=Ke.framebuffer;_(De,"must not double destroy framebuffer"),y.deleteFramebuffer(De),Ke.framebuffer=null,ee.framebufferCount--,delete we[Ke.id]}function Me(Ke){var De;y.bindFramebuffer(m0,Ke.framebuffer);var ye=Ke.colorAttachments;for(De=0;De<ye.length;++De)Le(xv+De,ye[De]);for(De=ye.length;De<O.maxColorAttachments;++De)y.framebufferTexture2D(m0,xv+De,zs,null,0);y.framebufferTexture2D(m0,wv,zs,null,0),y.framebufferTexture2D(m0,yv,zs,null,0),y.framebufferTexture2D(m0,bv,zs,null,0),Le(yv,Ke.depthAttachment),Le(bv,Ke.stencilAttachment),Le(wv,Ke.depthStencilAttachment);var qt=y.checkFramebufferStatus(m0);!y.isContextLost()&&qt!==_v&&_.raise("framebuffer configuration not supported, status = "+ki[qt]),y.bindFramebuffer(m0,ae.next?ae.next.framebuffer:null),ae.cur=ae.next,y.getError()}function We(Ke,De){var ye=new nt;ee.framebufferCount++;function qt(lt,ao){var Bt;_(ae.next!==ye,"can not update framebuffer which is currently in use");var eo=0,Eo=0,Tn=!0,jn=!0,ho=null,In=!0,Jo="rgba",Ln="uint8",$n=1,Fn=null,or=null,ur=null,Mn=!1;if(typeof lt=="number")eo=lt|0,Eo=ao|0||eo;else if(!lt)eo=Eo=1;else{_.type(lt,"object","invalid arguments for framebuffer");var Qt=lt;if("shape"in Qt){var dr=Qt.shape;_(Array.isArray(dr)&&dr.length>=2,"invalid shape for framebuffer"),eo=dr[0],Eo=dr[1]}else"radius"in Qt&&(eo=Eo=Qt.radius),"width"in Qt&&(eo=Qt.width),"height"in Qt&&(Eo=Qt.height);("color"in Qt||"colors"in Qt)&&(ho=Qt.color||Qt.colors,Array.isArray(ho)&&_(ho.length===1||E.webgl_draw_buffers,"multiple render targets not supported")),ho||("colorCount"in Qt&&($n=Qt.colorCount|0,_($n>0,"invalid color buffer count")),"colorTexture"in Qt&&(In=!!Qt.colorTexture,Jo="rgba4"),"colorType"in Qt&&(Ln=Qt.colorType,In?(_(E.oes_texture_float||!(Ln==="float"||Ln==="float32"),"you must enable OES_texture_float in order to use floating point framebuffer objects"),_(E.oes_texture_half_float||!(Ln==="half float"||Ln==="float16"),"you must enable OES_texture_half_float in order to use 16-bit floating point framebuffer objects")):Ln==="half float"||Ln==="float16"?(_(E.ext_color_buffer_half_float,"you must enable EXT_color_buffer_half_float to use 16-bit render buffers"),Jo="rgba16f"):(Ln==="float"||Ln==="float32")&&(_(E.webgl_color_buffer_float,"you must enable WEBGL_color_buffer_float in order to use 32-bit floating point renderbuffers"),Jo="rgba32f"),_.oneOf(Ln,Fe,"invalid color type")),"colorFormat"in Qt&&(Jo=Qt.colorFormat,Te.indexOf(Jo)>=0?In=!0:Ce.indexOf(Jo)>=0?In=!1:In?_.oneOf(Qt.colorFormat,Te,"invalid color format for texture"):_.oneOf(Qt.colorFormat,Ce,"invalid color format for renderbuffer"))),("depthTexture"in Qt||"depthStencilTexture"in Qt)&&(Mn=!!(Qt.depthTexture||Qt.depthStencilTexture),_(!Mn||E.webgl_depth_texture,"webgl_depth_texture extension not supported")),"depth"in Qt&&(typeof Qt.depth=="boolean"?Tn=Qt.depth:(Fn=Qt.depth,jn=!1)),"stencil"in Qt&&(typeof Qt.stencil=="boolean"?jn=Qt.stencil:(or=Qt.stencil,Tn=!1)),"depthStencil"in Qt&&(typeof Qt.depthStencil=="boolean"?Tn=jn=Qt.depthStencil:(ur=Qt.depthStencil,Tn=!1,jn=!1))}var Ro=null,Rt=null,fo=null,yo=null;if(Array.isArray(ho))Ro=ho.map(Be);else if(ho)Ro=[Be(ho)];else for(Ro=new Array($n),Bt=0;Bt<$n;++Bt)Ro[Bt]=Y(eo,Eo,In,Jo,Ln);_(E.webgl_draw_buffers||Ro.length<=1,"you must enable the WEBGL_draw_buffers extension in order to use multiple color buffers."),_(Ro.length<=O.maxColorAttachments,"too many color attachments, not supported"),eo=eo||Ro[0].width,Eo=Eo||Ro[0].height,Fn?Rt=Be(Fn):Tn&&!jn&&(Rt=Y(eo,Eo,Mn,"depth","uint32")),or?fo=Be(or):jn&&!Tn&&(fo=Y(eo,Eo,!1,"stencil","uint8")),ur?yo=Be(ur):!Fn&&!or&&jn&&Tn&&(yo=Y(eo,Eo,Mn,"depth stencil","depth stencil")),_(!!Fn+!!or+!!ur<=1,"invalid framebuffer configuration, can specify exactly one depth/stencil attachment");var kn=null;for(Bt=0;Bt<Ro.length;++Bt)if(Ye(Ro[Bt],eo,Eo),_(!Ro[Bt]||Ro[Bt].texture&&zw.indexOf(Ro[Bt].texture._texture.format)>=0||Ro[Bt].renderbuffer&&Fw.indexOf(Ro[Bt].renderbuffer._renderbuffer.format)>=0,"framebuffer color attachment "+Bt+" is invalid"),Ro[Bt]&&Ro[Bt].texture){var r0=D1[Ro[Bt].texture._texture.format]*kf[Ro[Bt].texture._texture.type];kn===null?kn=r0:_(kn===r0,"all color attachments much have the same number of bits per pixel.")}return Ye(Rt,eo,Eo),_(!Rt||Rt.texture&&Rt.texture._texture.format===Aw||Rt.renderbuffer&&Rt.renderbuffer._renderbuffer.format===Rw,"invalid depth attachment for framebuffer object"),Ye(fo,eo,Eo),_(!fo||fo.renderbuffer&&fo.renderbuffer._renderbuffer.format===Ow,"invalid stencil attachment for framebuffer object"),Ye(yo,eo,Eo),_(!yo||yo.texture&&yo.texture._texture.format===Sv||yo.renderbuffer&&yo.renderbuffer._renderbuffer.format===Sv,"invalid depth-stencil attachment for framebuffer object"),Ae(ye),ye.width=eo,ye.height=Eo,ye.colorAttachments=Ro,ye.depthAttachment=Rt,ye.stencilAttachment=fo,ye.depthStencilAttachment=yo,qt.color=Ro.map(se),qt.depth=se(Rt),qt.stencil=se(fo),qt.depthStencil=se(yo),qt.width=ye.width,qt.height=ye.height,Me(ye),qt}function Kt(lt,ao){_(ae.next!==ye,"can not resize a framebuffer which is currently in use");var Bt=Math.max(lt|0,1),eo=Math.max(ao|0||Bt,1);if(Bt===ye.width&&eo===ye.height)return qt;for(var Eo=ye.colorAttachments,Tn=0;Tn<Eo.length;++Tn)$e(Eo[Tn],Bt,eo);return $e(ye.depthAttachment,Bt,eo),$e(ye.stencilAttachment,Bt,eo),$e(ye.depthStencilAttachment,Bt,eo),ye.width=qt.width=Bt,ye.height=qt.height=eo,Me(ye),qt}return qt(Ke,De),t(qt,{resize:Kt,_reglType:"framebuffer",_framebuffer:ye,destroy:function(){je(ye),Ae(ye)},use:function(lt){ae.setFBO({framebuffer:qt},lt)}})}function Tt(Ke){var De=Array(6);function ye(Kt){var lt;_(De.indexOf(ae.next)<0,"can not update framebuffer which is currently in use");var ao={color:null},Bt=0,eo=null,Eo="rgba",Tn="uint8",jn=1;if(typeof Kt=="number")Bt=Kt|0;else if(!Kt)Bt=1;else{_.type(Kt,"object","invalid arguments for framebuffer");var ho=Kt;if("shape"in ho){var In=ho.shape;_(Array.isArray(In)&&In.length>=2,"invalid shape for framebuffer"),_(In[0]===In[1],"cube framebuffer must be square"),Bt=In[0]}else"radius"in ho&&(Bt=ho.radius|0),"width"in ho?(Bt=ho.width|0,"height"in ho&&_(ho.height===Bt,"must be square")):"height"in ho&&(Bt=ho.height|0);("color"in ho||"colors"in ho)&&(eo=ho.color||ho.colors,Array.isArray(eo)&&_(eo.length===1||E.webgl_draw_buffers,"multiple render targets not supported")),eo||("colorCount"in ho&&(jn=ho.colorCount|0,_(jn>0,"invalid color buffer count")),"colorType"in ho&&(_.oneOf(ho.colorType,Fe,"invalid color type"),Tn=ho.colorType),"colorFormat"in ho&&(Eo=ho.colorFormat,_.oneOf(ho.colorFormat,Te,"invalid color format for texture"))),"depth"in ho&&(ao.depth=ho.depth),"stencil"in ho&&(ao.stencil=ho.stencil),"depthStencil"in ho&&(ao.depthStencil=ho.depthStencil)}var Jo;if(eo)if(Array.isArray(eo))for(Jo=[],lt=0;lt<eo.length;++lt)Jo[lt]=eo[lt];else Jo=[eo];else{Jo=Array(jn);var Ln={radius:Bt,format:Eo,type:Tn};for(lt=0;lt<jn;++lt)Jo[lt]=oe.createCube(Ln)}for(ao.color=Array(Jo.length),lt=0;lt<Jo.length;++lt){var $n=Jo[lt];_(typeof $n=="function"&&$n._reglType==="textureCube","invalid cube map"),Bt=Bt||$n.width,_($n.width===Bt&&$n.height===Bt,"invalid cube map shape"),ao.color[lt]={target:Mf,data:Jo[lt]}}for(lt=0;lt<6;++lt){for(var Fn=0;Fn<Jo.length;++Fn)ao.color[Fn].target=Mf+lt;lt>0&&(ao.depth=De[0].depth,ao.stencil=De[0].stencil,ao.depthStencil=De[0].depthStencil),De[lt]?De[lt](ao):De[lt]=We(ao)}return t(ye,{width:Bt,height:Bt,color:Jo})}function qt(Kt){var lt,ao=Kt|0;if(_(ao>0&&ao<=O.maxCubeMapSize,"invalid radius for cube fbo"),ao===ye.width)return ye;var Bt=ye.color;for(lt=0;lt<Bt.length;++lt)Bt[lt].resize(ao);for(lt=0;lt<6;++lt)De[lt].resize(ao);return ye.width=ye.height=ao,ye}return ye(Ke),t(ye,{faces:De,resize:qt,_reglType:"framebufferCube",destroy:function(){De.forEach(function(Kt){Kt.destroy()})}})}function Ht(){ae.cur=null,ae.next=null,ae.dirty=!0,aa(we).forEach(function(Ke){Ke.framebuffer=y.createFramebuffer(),Me(Ke)})}return t(ae,{getFramebuffer:function(Ke){if(typeof Ke=="function"&&Ke._reglType==="framebuffer"){var De=Ke._framebuffer;if(De instanceof nt)return De}return null},create:We,createCube:Tt,clear:function(){aa(we).forEach(je)},restore:Ht})}var Dw=5126,Ev=34962;function G1(){this.state=0,this.x=0,this.y=0,this.z=0,this.w=0,this.buffer=null,this.size=0,this.normalized=!1,this.type=Dw,this.offset=0,this.stride=0,this.divisor=0}function Gw(y,E,O,oe,pe){for(var ee=O.maxAttributes,ae=new Array(ee),Te=0;Te<ee;++Te)ae[Te]=new G1;var Ce=0,Fe={},Pe={Record:G1,scope:{},state:ae,currentVAO:null,targetVAO:null,restore:Ye()?we:function(){},createVAO:nt,getVAO:Be,destroyBuffer:He,setVAO:Ye()?Y:se,clear:Ye()?$e:function(){}};function He(Ae){for(var je=0;je<ae.length;++je){var Me=ae[je];Me.buffer===Ae&&(y.disableVertexAttribArray(je),Me.buffer=null)}}function Ye(){return E.oes_vertex_array_object}function Le(){return E.angle_instanced_arrays}function Be(Ae){return typeof Ae=="function"&&Ae._vao?Ae._vao:null}function Y(Ae){if(Ae!==Pe.currentVAO){var je=Ye();Ae?je.bindVertexArrayOES(Ae.vao):je.bindVertexArrayOES(null),Pe.currentVAO=Ae}}function se(Ae){if(Ae!==Pe.currentVAO){if(Ae)Ae.bindAttrs();else for(var je=Le(),Me=0;Me<ae.length;++Me){var We=ae[Me];We.buffer?(y.enableVertexAttribArray(Me),y.vertexAttribPointer(Me,We.size,We.type,We.normalized,We.stride,We.offfset),je&&We.divisor&&je.vertexAttribDivisorANGLE(Me,We.divisor)):(y.disableVertexAttribArray(Me),y.vertexAttrib4f(Me,We.x,We.y,We.z,We.w))}Pe.currentVAO=Ae}}function $e(){aa(Fe).forEach(function(Ae){Ae.destroy()})}function et(){this.id=++Ce,this.attributes=[];var Ae=Ye();Ae?this.vao=Ae.createVertexArrayOES():this.vao=null,Fe[this.id]=this,this.buffers=[]}et.prototype.bindAttrs=function(){for(var Ae=Le(),je=this.attributes,Me=0;Me<je.length;++Me){var We=je[Me];We.buffer?(y.enableVertexAttribArray(Me),y.bindBuffer(Ev,We.buffer.buffer),y.vertexAttribPointer(Me,We.size,We.type,We.normalized,We.stride,We.offset),Ae&&We.divisor&&Ae.vertexAttribDivisorANGLE(Me,We.divisor)):(y.disableVertexAttribArray(Me),y.vertexAttrib4f(Me,We.x,We.y,We.z,We.w))}for(var Tt=je.length;Tt<ee;++Tt)y.disableVertexAttribArray(Tt)},et.prototype.refresh=function(){var Ae=Ye();Ae&&(Ae.bindVertexArrayOES(this.vao),this.bindAttrs(),Pe.currentVAO=this)},et.prototype.destroy=function(){if(this.vao){var Ae=Ye();this===Pe.currentVAO&&(Pe.currentVAO=null,Ae.bindVertexArrayOES(null)),Ae.deleteVertexArrayOES(this.vao),this.vao=null}Fe[this.id]&&(delete Fe[this.id],oe.vaoCount-=1)};function we(){var Ae=Ye();Ae&&aa(Fe).forEach(function(je){je.refresh()})}function nt(Ae){var je=new et;oe.vaoCount+=1;function Me(We){_(Array.isArray(We),"arguments to vertex array constructor must be an array"),_(We.length<ee,"too many attributes"),_(We.length>0,"must specify at least one attribute");var Tt={},Ht=je.attributes;Ht.length=We.length;for(var Ke=0;Ke<We.length;++Ke){var De=We[Ke],ye=Ht[Ke]=new G1,qt=De.data||De;if(Array.isArray(qt)||e(qt)||Fa(qt)){var Kt;je.buffers[Ke]&&(Kt=je.buffers[Ke],e(qt)&&Kt._buffer.byteLength>=qt.byteLength?Kt.subdata(qt):(Kt.destroy(),je.buffers[Ke]=null)),je.buffers[Ke]||(Kt=je.buffers[Ke]=pe.create(De,Ev,!1,!0)),ye.buffer=pe.getBuffer(Kt),ye.size=ye.buffer.dimension|0,ye.normalized=!1,ye.type=ye.buffer.dtype,ye.offset=0,ye.stride=0,ye.divisor=0,ye.state=1,Tt[Ke]=1}else pe.getBuffer(De)?(ye.buffer=pe.getBuffer(De),ye.size=ye.buffer.dimension|0,ye.normalized=!1,ye.type=ye.buffer.dtype,ye.offset=0,ye.stride=0,ye.divisor=0,ye.state=1):pe.getBuffer(De.buffer)?(ye.buffer=pe.getBuffer(De.buffer),ye.size=(+De.size||ye.buffer.dimension)|0,ye.normalized=!!De.normalized||!1,"type"in De?(_.parameter(De.type,ks,"invalid buffer type"),ye.type=ks[De.type]):ye.type=ye.buffer.dtype,ye.offset=(De.offset||0)|0,ye.stride=(De.stride||0)|0,ye.divisor=(De.divisor||0)|0,ye.state=1,_(ye.size>=1&&ye.size<=4,"size must be between 1 and 4"),_(ye.offset>=0,"invalid offset"),_(ye.stride>=0&&ye.stride<=255,"stride must be between 0 and 255"),_(ye.divisor>=0,"divisor must be positive"),_(!ye.divisor||!!E.angle_instanced_arrays,"ANGLE_instanced_arrays must be enabled to use divisor")):"x"in De?(_(Ke>0,"first attribute must not be a constant"),ye.x=+De.x||0,ye.y=+De.y||0,ye.z=+De.z||0,ye.w=+De.w||0,ye.state=2):_(!1,"invalid attribute spec for location "+Ke)}for(var lt=0;lt<je.buffers.length;++lt)!Tt[lt]&&je.buffers[lt]&&(je.buffers[lt].destroy(),je.buffers[lt]=null);return je.refresh(),Me}return Me.destroy=function(){for(var We=0;We<je.buffers.length;++We)je.buffers[We]&&je.buffers[We].destroy();je.buffers.length=0,je.destroy()},Me._vao=je,Me._reglType="vao",Me(Ae)}return Pe}var Av=35632,Hw=35633,Uw=35718,Bw=35721;function jw(y,E,O,oe){var pe={},ee={};function ae(Y,se,$e,et){this.name=Y,this.id=se,this.location=$e,this.info=et}function Te(Y,se){for(var $e=0;$e<Y.length;++$e)if(Y[$e].id===se.id){Y[$e].location=se.location;return}Y.push(se)}function Ce(Y,se,$e){var et=Y===Av?pe:ee,we=et[se];if(!we){var nt=E.str(se);we=y.createShader(Y),y.shaderSource(we,nt),y.compileShader(we),_.shaderError(y,we,nt,Y,$e),et[se]=we}return we}var Fe={},Pe=[],He=0;function Ye(Y,se){this.id=He++,this.fragId=Y,this.vertId=se,this.program=null,this.uniforms=[],this.attributes=[],this.refCount=1,oe.profile&&(this.stats={uniformsCount:0,attributesCount:0})}function Le(Y,se,$e){var et,we,nt=Ce(Av,Y.fragId),Ae=Ce(Hw,Y.vertId),je=Y.program=y.createProgram();if(y.attachShader(je,nt),y.attachShader(je,Ae),$e)for(et=0;et<$e.length;++et){var Me=$e[et];y.bindAttribLocation(je,Me[0],Me[1])}y.linkProgram(je),_.linkError(y,je,E.str(Y.fragId),E.str(Y.vertId),se);var We=y.getProgramParameter(je,Uw);oe.profile&&(Y.stats.uniformsCount=We);var Tt=Y.uniforms;for(et=0;et<We;++et)if(we=y.getActiveUniform(je,et),we)if(we.size>1)for(var Ht=0;Ht<we.size;++Ht){var Ke=we.name.replace("[0]","["+Ht+"]");Te(Tt,new ae(Ke,E.id(Ke),y.getUniformLocation(je,Ke),we))}else Te(Tt,new ae(we.name,E.id(we.name),y.getUniformLocation(je,we.name),we));var De=y.getProgramParameter(je,Bw);oe.profile&&(Y.stats.attributesCount=De);var ye=Y.attributes;for(et=0;et<De;++et)we=y.getActiveAttrib(je,et),we&&Te(ye,new ae(we.name,E.id(we.name),y.getAttribLocation(je,we.name),we))}oe.profile&&(O.getMaxUniformsCount=function(){var Y=0;return Pe.forEach(function(se){se.stats.uniformsCount>Y&&(Y=se.stats.uniformsCount)}),Y},O.getMaxAttributesCount=function(){var Y=0;return Pe.forEach(function(se){se.stats.attributesCount>Y&&(Y=se.stats.attributesCount)}),Y});function Be(){pe={},ee={};for(var Y=0;Y<Pe.length;++Y)Le(Pe[Y],null,Pe[Y].attributes.map(function(se){return[se.location,se.name]}))}return{clear:function(){var Y=y.deleteShader.bind(y);aa(pe).forEach(Y),pe={},aa(ee).forEach(Y),ee={},Pe.forEach(function(se){y.deleteProgram(se.program)}),Pe.length=0,Fe={},O.shaderCount=0},program:function(Y,se,$e,et){_.command(Y>=0,"missing vertex shader",$e),_.command(se>=0,"missing fragment shader",$e);var we=Fe[se];we||(we=Fe[se]={});var nt=we[Y];if(nt&&(nt.refCount++,!et))return nt;var Ae=new Ye(se,Y);return O.shaderCount++,Le(Ae,$e,et),nt||(we[Y]=Ae),Pe.push(Ae),t(Ae,{destroy:function(){if(Ae.refCount--,Ae.refCount<=0){y.deleteProgram(Ae.program);var je=Pe.indexOf(Ae);Pe.splice(je,1),O.shaderCount--}we[Ae.vertId].refCount<=0&&(y.deleteShader(ee[Ae.vertId]),delete ee[Ae.vertId],delete Fe[Ae.fragId][Ae.vertId]),Object.keys(Fe[Ae.fragId]).length||(y.deleteShader(pe[Ae.fragId]),delete pe[Ae.fragId],delete Fe[Ae.fragId])}})},restore:Be,shader:Ce,frag:-1,vert:-1}}var Ww=6408,Bc=5121,Vw=3333,Sf=5126;function Xw(y,E,O,oe,pe,ee,ae){function Te(Pe){var He;E.next===null?(_(pe.preserveDrawingBuffer,'you must create a webgl context with "preserveDrawingBuffer":true in order to read pixels from the drawing buffer'),He=Bc):(_(E.next.colorAttachments[0].texture!==null,"You cannot read from a renderbuffer"),He=E.next.colorAttachments[0].texture._texture.type,ee.oes_texture_float?(_(He===Bc||He===Sf,"Reading from a framebuffer is only allowed for the types 'uint8' and 'float'"),He===Sf&&_(ae.readFloat,"Reading 'float' values is not permitted in your browser. For a fallback, please see: https://www.npmjs.com/package/glsl-read-float")):_(He===Bc,"Reading from a framebuffer is only allowed for the type 'uint8'"));var Ye=0,Le=0,Be=oe.framebufferWidth,Y=oe.framebufferHeight,se=null;e(Pe)?se=Pe:Pe&&(_.type(Pe,"object","invalid arguments to regl.read()"),Ye=Pe.x|0,Le=Pe.y|0,_(Ye>=0&&Ye<oe.framebufferWidth,"invalid x offset for regl.read"),_(Le>=0&&Le<oe.framebufferHeight,"invalid y offset for regl.read"),Be=(Pe.width||oe.framebufferWidth-Ye)|0,Y=(Pe.height||oe.framebufferHeight-Le)|0,se=Pe.data||null),se&&(He===Bc?_(se instanceof Uint8Array,"buffer must be 'Uint8Array' when reading from a framebuffer of type 'uint8'"):He===Sf&&_(se instanceof Float32Array,"buffer must be 'Float32Array' when reading from a framebuffer of type 'float'")),_(Be>0&&Be+Ye<=oe.framebufferWidth,"invalid width for read pixels"),_(Y>0&&Y+Le<=oe.framebufferHeight,"invalid height for read pixels"),O();var $e=Be*Y*4;return se||(He===Bc?se=new Uint8Array($e):He===Sf&&(se=se||new Float32Array($e))),_.isTypedArray(se,"data buffer for regl.read() must be a typedarray"),_(se.byteLength>=$e,"data buffer for regl.read() too small"),y.pixelStorei(Vw,4),y.readPixels(Ye,Le,Be,Y,Ww,He,se),se}function Ce(Pe){var He;return E.setFBO({framebuffer:Pe.framebuffer},function(){He=Te(Pe)}),He}function Fe(Pe){return!Pe||!("framebuffer"in Pe)?Te(Pe):Ce(Pe)}return Fe}function Si(y){return Array.prototype.slice.call(y)}function Ei(y){return Si(y).join("")}function Yw(){var y=0,E=[],O=[];function oe(He){for(var Ye=0;Ye<O.length;++Ye)if(O[Ye]===He)return E[Ye];var Le="g"+y++;return E.push(Le),O.push(He),Le}function pe(){var He=[];function Ye(){He.push.apply(He,Si(arguments))}var Le=[];function Be(){var Y="v"+y++;return Le.push(Y),arguments.length>0&&(He.push(Y,"="),He.push.apply(He,Si(arguments)),He.push(";")),Y}return t(Ye,{def:Be,toString:function(){return Ei([Le.length>0?"var "+Le.join(",")+";":"",Ei(He)])}})}function ee(){var He=pe(),Ye=pe(),Le=He.toString,Be=Ye.toString;function Y(se,$e){Ye(se,$e,"=",He.def(se,$e),";")}return t(function(){He.apply(He,Si(arguments))},{def:He.def,entry:He,exit:Ye,save:Y,set:function(se,$e,et){Y(se,$e),He(se,$e,"=",et,";")},toString:function(){return Le()+Be()}})}function ae(){var He=Ei(arguments),Ye=ee(),Le=ee(),Be=Ye.toString,Y=Le.toString;return t(Ye,{then:function(){return Ye.apply(Ye,Si(arguments)),this},else:function(){return Le.apply(Le,Si(arguments)),this},toString:function(){var se=Y();return se&&(se="else{"+se+"}"),Ei(["if(",He,"){",Be(),"}",se])}})}var Te=pe(),Ce={};function Fe(He,Ye){var Le=[];function Be(){var we="a"+Le.length;return Le.push(we),we}Ye=Ye||0;for(var Y=0;Y<Ye;++Y)Be();var se=ee(),$e=se.toString,et=Ce[He]=t(se,{arg:Be,toString:function(){return Ei(["function(",Le.join(),"){",$e(),"}"])}});return et}function Pe(){var He=['"use strict";',Te,"return {"];Object.keys(Ce).forEach(function(Be){He.push('"',Be,'":',Ce[Be].toString(),",")}),He.push("}");var Ye=Ei(He).replace(/;/g,`;
`).replace(/}/g,`}
`).replace(/{/g,`{
`),Le=Function.apply(null,E.concat(Ye));return Le.apply(null,O)}return{global:Te,link:oe,block:pe,proc:Fe,scope:ee,cond:ae,compile:Pe}}var Ai="xyzw".split(""),zv=5121,zi=1,H1=2,U1=0,B1=1,j1=2,W1=3,Ef=4,Tv=5,Lv=6,Nv="dither",Rv="blend.enable",Ov="blend.color",V1="blend.equation",X1="blend.func",Cv="depth.enable",Pv="depth.func",Iv="depth.range",$v="depth.mask",Y1="colorMask",Fv="cull.enable",qv="cull.face",K1="frontFace",Q1="lineWidth",Dv="polygonOffset.enable",Z1="polygonOffset.offset",Gv="sample.alpha",Hv="sample.enable",J1="sample.coverage",Uv="stencil.enable",Bv="stencil.mask",eu="stencil.func",tu="stencil.opFront",jc="stencil.opBack",jv="scissor.enable",Af="scissor.box",g0="viewport",Wc="profile",Ts="framebuffer",Vc="vert",Xc="frag",Ls="elements",Ns="primitive",Rs="count",zf="offset",Tf="instances",Yc="vao",ou="Width",nu="Height",Ti=Ts+ou,Li=Ts+nu,Kw=g0+ou,Qw=g0+nu,Wv="drawingBuffer",Vv=Wv+ou,Xv=Wv+nu,Zw=[X1,V1,eu,tu,jc,J1,g0,Af,Z1],Ni=34962,Jw=34963,e4=35632,t4=35633,Yv=3553,o4=34067,n4=2884,r4=3042,a4=3024,s4=2960,i4=2929,c4=3089,l4=32823,f4=32926,h4=32928,ru=5126,Lf=35664,Nf=35665,Rf=35666,au=5124,Of=35667,Cf=35668,Pf=35669,su=35670,If=35671,$f=35672,Ff=35673,Kc=35674,Qc=35675,Zc=35676,Jc=35678,el=35680,Kv=4,tl=1028,Os=1029,Qv=2304,iu=2305,u4=32775,d4=32776,p4=519,$0=7680,Zv=0,Jv=1,em=32774,v4=513,tm=36160,m4=36064,n0={0:0,1:1,zero:0,one:1,"src color":768,"one minus src color":769,"src alpha":770,"one minus src alpha":771,"dst color":774,"one minus dst color":775,"dst alpha":772,"one minus dst alpha":773,"constant color":32769,"one minus constant color":32770,"constant alpha":32771,"one minus constant alpha":32772,"src alpha saturate":776},om=["constant color, constant alpha","one minus constant color, constant alpha","constant color, one minus constant alpha","one minus constant color, one minus constant alpha","constant alpha, constant color","constant alpha, one minus constant color","one minus constant alpha, constant color","one minus constant alpha, one minus constant color"],Ri={never:512,less:513,"<":513,equal:514,"=":514,"==":514,"===":514,lequal:515,"<=":515,greater:516,">":516,notequal:517,"!=":517,"!==":517,gequal:518,">=":518,always:519},F0={0:0,zero:0,keep:7680,replace:7681,increment:7682,decrement:7683,"increment wrap":34055,"decrement wrap":34056,invert:5386},nm={frag:e4,vert:t4},cu={cw:Qv,ccw:iu};function qf(y){return Array.isArray(y)||e(y)||Fa(y)}function rm(y){return y.sort(function(E,O){return E===g0?-1:O===g0?1:E<O?-1:1})}function Rr(y,E,O,oe){this.thisDep=y,this.contextDep=E,this.propDep=O,this.append=oe}function q0(y){return y&&!(y.thisDep||y.contextDep||y.propDep)}function zn(y){return new Rr(!1,!1,!1,y)}function Xr(y,E){var O=y.type;if(O===U1){var oe=y.data.length;return new Rr(!0,oe>=1,oe>=2,E)}else if(O===Ef){var pe=y.data;return new Rr(pe.thisDep,pe.contextDep,pe.propDep,E)}else{if(O===Tv)return new Rr(!1,!1,!1,E);if(O===Lv){for(var ee=!1,ae=!1,Te=!1,Ce=0;Ce<y.data.length;++Ce){var Fe=y.data[Ce];if(Fe.type===B1)Te=!0;else if(Fe.type===j1)ae=!0;else if(Fe.type===W1)ee=!0;else if(Fe.type===U1){ee=!0;var Pe=Fe.data;Pe>=1&&(ae=!0),Pe>=2&&(Te=!0)}else Fe.type===Ef&&(ee=ee||Fe.data.thisDep,ae=ae||Fe.data.contextDep,Te=Te||Fe.data.propDep)}return new Rr(ee,ae,Te,E)}else return new Rr(O===W1,O===j1,O===B1,E)}}var am=new Rr(!1,!1,!1,function(){});function g4(y,E,O,oe,pe,ee,ae,Te,Ce,Fe,Pe,He,Ye,Le,Be){var Y=Fe.Record,se={add:32774,subtract:32778,"reverse subtract":32779};O.ext_blend_minmax&&(se.min=u4,se.max=d4);var $e=O.angle_instanced_arrays,et=O.webgl_draw_buffers,we={dirty:!0,profile:Be.profile},nt={},Ae=[],je={},Me={};function We(T){return T.replace(".","_")}function Tt(T,S,I){var j=We(T);Ae.push(T),nt[j]=we[j]=!!I,je[j]=S}function Ht(T,S,I){var j=We(T);Ae.push(T),Array.isArray(I)?(we[j]=I.slice(),nt[j]=I.slice()):we[j]=nt[j]=I,Me[j]=S}Tt(Nv,a4),Tt(Rv,r4),Ht(Ov,"blendColor",[0,0,0,0]),Ht(V1,"blendEquationSeparate",[em,em]),Ht(X1,"blendFuncSeparate",[Jv,Zv,Jv,Zv]),Tt(Cv,i4,!0),Ht(Pv,"depthFunc",v4),Ht(Iv,"depthRange",[0,1]),Ht($v,"depthMask",!0),Ht(Y1,Y1,[!0,!0,!0,!0]),Tt(Fv,n4),Ht(qv,"cullFace",Os),Ht(K1,K1,iu),Ht(Q1,Q1,1),Tt(Dv,l4),Ht(Z1,"polygonOffset",[0,0]),Tt(Gv,f4),Tt(Hv,h4),Ht(J1,"sampleCoverage",[1,!1]),Tt(Uv,s4),Ht(Bv,"stencilMask",-1),Ht(eu,"stencilFunc",[p4,0,-1]),Ht(tu,"stencilOpSeparate",[tl,$0,$0,$0]),Ht(jc,"stencilOpSeparate",[Os,$0,$0,$0]),Tt(jv,c4),Ht(Af,"scissor",[0,0,y.drawingBufferWidth,y.drawingBufferHeight]),Ht(g0,g0,[0,0,y.drawingBufferWidth,y.drawingBufferHeight]);var Ke={gl:y,context:Ye,strings:E,next:nt,current:we,draw:He,elements:ee,buffer:pe,shader:Pe,attributes:Fe.state,vao:Fe,uniforms:Ce,framebuffer:Te,extensions:O,timer:Le,isBufferArgs:qf},De={primTypes:gi,compareFuncs:Ri,blendFuncs:n0,blendEquations:se,stencilOps:F0,glTypes:ks,orientationType:cu};_.optional(function(){Ke.isArrayLike=_n}),et&&(De.backBuffer=[Os],De.drawBuffer=to(oe.maxDrawbuffers,function(T){return T===0?[0]:to(T,function(S){return m4+S})}));var ye=0;function qt(){var T=Yw(),S=T.link,I=T.global;T.id=ye++,T.batchId="0";var j=S(Ke),K=T.shared={props:"a0"};Object.keys(Ke).forEach(function(C){K[C]=I.def(j,".",C)}),_.optional(function(){T.CHECK=S(_),T.commandStr=_.guessCommand(),T.command=S(T.commandStr),T.assert=function(C,A,B){C("if(!(",A,"))",this.CHECK,".commandRaise(",S(B),",",this.command,");")},De.invalidBlendCombinations=om});var F=T.next={},$=T.current={};Object.keys(Me).forEach(function(C){Array.isArray(we[C])&&(F[C]=I.def(K.next,".",C),$[C]=I.def(K.current,".",C))});var H=T.constants={};Object.keys(De).forEach(function(C){H[C]=I.def(JSON.stringify(De[C]))}),T.invoke=function(C,A){switch(A.type){case U1:var B=["this",K.context,K.props,T.batchId];return C.def(S(A.data),".call(",B.slice(0,Math.max(A.data.length+1,4)),")");case B1:return C.def(K.props,A.data);case j1:return C.def(K.context,A.data);case W1:return C.def("this",A.data);case Ef:return A.data.append(T,C),A.data.ref;case Tv:return A.data.toString();case Lv:return A.data.map(function(Z){return T.invoke(C,Z)})}},T.attribCache={};var L={};return T.scopeAttrib=function(C){var A=E.id(C);if(A in L)return L[A];var B=Fe.scope[A];B||(B=Fe.scope[A]=new Y);var Z=L[A]=S(B);return Z},T}function Kt(T){var S=T.static,I=T.dynamic,j;if(Wc in S){var K=!!S[Wc];j=zn(function($,H){return K}),j.enable=K}else if(Wc in I){var F=I[Wc];j=Xr(F,function($,H){return $.invoke(H,F)})}return j}function lt(T,S){var I=T.static,j=T.dynamic;if(Ts in I){var K=I[Ts];return K?(K=Te.getFramebuffer(K),_.command(K,"invalid framebuffer object"),zn(function($,H){var L=$.link(K),C=$.shared;H.set(C.framebuffer,".next",L);var A=C.context;return H.set(A,"."+Ti,L+".width"),H.set(A,"."+Li,L+".height"),L})):zn(function($,H){var L=$.shared;H.set(L.framebuffer,".next","null");var C=L.context;return H.set(C,"."+Ti,C+"."+Vv),H.set(C,"."+Li,C+"."+Xv),"null"})}else if(Ts in j){var F=j[Ts];return Xr(F,function($,H){var L=$.invoke(H,F),C=$.shared,A=C.framebuffer,B=H.def(A,".getFramebuffer(",L,")");_.optional(function(){$.assert(H,"!"+L+"||"+B,"invalid framebuffer object")}),H.set(A,".next",B);var Z=C.context;return H.set(Z,"."+Ti,B+"?"+B+".width:"+Z+"."+Vv),H.set(Z,"."+Li,B+"?"+B+".height:"+Z+"."+Xv),B})}else return null}function ao(T,S,I){var j=T.static,K=T.dynamic;function F(L){if(L in j){var C=j[L];_.commandType(C,"object","invalid "+L,I.commandStr);var A=!0,B=C.x|0,Z=C.y|0,fe,ve;return"width"in C?(fe=C.width|0,_.command(fe>=0,"invalid "+L,I.commandStr)):A=!1,"height"in C?(ve=C.height|0,_.command(ve>=0,"invalid "+L,I.commandStr)):A=!1,new Rr(!A&&S&&S.thisDep,!A&&S&&S.contextDep,!A&&S&&S.propDep,function(bt,Zt){var ft=bt.shared.context,Ct=fe;"width"in C||(Ct=Zt.def(ft,".",Ti,"-",B));var jt=ve;return"height"in C||(jt=Zt.def(ft,".",Li,"-",Z)),[B,Z,Ct,jt]})}else if(L in K){var ie=K[L],Ie=Xr(ie,function(bt,Zt){var ft=bt.invoke(Zt,ie);_.optional(function(){bt.assert(Zt,ft+"&&typeof "+ft+'==="object"',"invalid "+L)});var Ct=bt.shared.context,jt=Zt.def(ft,".x|0"),Ao=Zt.def(ft,".y|0"),gn=Zt.def('"width" in ',ft,"?",ft,".width|0:","(",Ct,".",Ti,"-",jt,")"),Or=Zt.def('"height" in ',ft,"?",ft,".height|0:","(",Ct,".",Li,"-",Ao,")");return _.optional(function(){bt.assert(Zt,gn+">=0&&"+Or+">=0","invalid "+L)}),[jt,Ao,gn,Or]});return S&&(Ie.thisDep=Ie.thisDep||S.thisDep,Ie.contextDep=Ie.contextDep||S.contextDep,Ie.propDep=Ie.propDep||S.propDep),Ie}else return S?new Rr(S.thisDep,S.contextDep,S.propDep,function(bt,Zt){var ft=bt.shared.context;return[0,0,Zt.def(ft,".",Ti),Zt.def(ft,".",Li)]}):null}var $=F(g0);if($){var H=$;$=new Rr($.thisDep,$.contextDep,$.propDep,function(L,C){var A=H.append(L,C),B=L.shared.context;return C.set(B,"."+Kw,A[2]),C.set(B,"."+Qw,A[3]),A})}return{viewport:$,scissor_box:F(Af)}}function Bt(T,S){var I=T.static,j=typeof I[Xc]=="string"&&typeof I[Vc]=="string";if(j){if(Object.keys(S.dynamic).length>0)return null;var K=S.static,F=Object.keys(K);if(F.length>0&&typeof K[F[0]]=="number"){for(var $=[],H=0;H<F.length;++H)_(typeof K[F[H]]=="number","must specify all vertex attribute locations when using vaos"),$.push([K[F[H]]|0,F[H]]);return $}}return null}function eo(T,S,I){var j=T.static,K=T.dynamic;function F(A){if(A in j){var B=E.id(j[A]);_.optional(function(){Pe.shader(nm[A],B,_.guessCommand())});var Z=zn(function(){return B});return Z.id=B,Z}else if(A in K){var fe=K[A];return Xr(fe,function(ve,ie){var Ie=ve.invoke(ie,fe),bt=ie.def(ve.shared.strings,".id(",Ie,")");return _.optional(function(){ie(ve.shared.shader,".shader(",nm[A],",",bt,",",ve.command,");")}),bt})}return null}var $=F(Xc),H=F(Vc),L=null,C;return q0($)&&q0(H)?(L=Pe.program(H.id,$.id,null,I),C=zn(function(A,B){return A.link(L)})):C=new Rr($&&$.thisDep||H&&H.thisDep,$&&$.contextDep||H&&H.contextDep,$&&$.propDep||H&&H.propDep,function(A,B){var Z=A.shared.shader,fe;$?fe=$.append(A,B):fe=B.def(Z,".",Xc);var ve;H?ve=H.append(A,B):ve=B.def(Z,".",Vc);var ie=Z+".program("+ve+","+fe;return _.optional(function(){ie+=","+A.command}),B.def(ie+")")}),{frag:$,vert:H,progVar:C,program:L}}function Eo(T,S){var I=T.static,j=T.dynamic;function K(){if(Ls in I){var A=I[Ls];qf(A)?A=ee.getElements(ee.create(A,!0)):A&&(A=ee.getElements(A),_.command(A,"invalid elements",S.commandStr));var B=zn(function(fe,ve){if(A){var ie=fe.link(A);return fe.ELEMENTS=ie,ie}return fe.ELEMENTS=null,null});return B.value=A,B}else if(Ls in j){var Z=j[Ls];return Xr(Z,function(fe,ve){var ie=fe.shared,Ie=ie.isBufferArgs,bt=ie.elements,Zt=fe.invoke(ve,Z),ft=ve.def("null"),Ct=ve.def(Ie,"(",Zt,")"),jt=fe.cond(Ct).then(ft,"=",bt,".createStream(",Zt,");").else(ft,"=",bt,".getElements(",Zt,");");return _.optional(function(){fe.assert(jt.else,"!"+Zt+"||"+ft,"invalid elements")}),ve.entry(jt),ve.exit(fe.cond(Ct).then(bt,".destroyStream(",ft,");")),fe.ELEMENTS=ft,ft})}return null}var F=K();function $(){if(Ns in I){var A=I[Ns];return _.commandParameter(A,gi,"invalid primitve",S.commandStr),zn(function(Z,fe){return gi[A]})}else if(Ns in j){var B=j[Ns];return Xr(B,function(Z,fe){var ve=Z.constants.primTypes,ie=Z.invoke(fe,B);return _.optional(function(){Z.assert(fe,ie+" in "+ve,"invalid primitive, must be one of "+Object.keys(gi))}),fe.def(ve,"[",ie,"]")})}else if(F)return q0(F)?F.value?zn(function(Z,fe){return fe.def(Z.ELEMENTS,".primType")}):zn(function(){return Kv}):new Rr(F.thisDep,F.contextDep,F.propDep,function(Z,fe){var ve=Z.ELEMENTS;return fe.def(ve,"?",ve,".primType:",Kv)});return null}function H(A,B){if(A in I){var Z=I[A]|0;return _.command(!B||Z>=0,"invalid "+A,S.commandStr),zn(function(ve,ie){return B&&(ve.OFFSET=Z),Z})}else if(A in j){var fe=j[A];return Xr(fe,function(ve,ie){var Ie=ve.invoke(ie,fe);return B&&(ve.OFFSET=Ie,_.optional(function(){ve.assert(ie,Ie+">=0","invalid "+A)})),Ie})}else if(B&&F)return zn(function(ve,ie){return ve.OFFSET="0",0});return null}var L=H(zf,!0);function C(){if(Rs in I){var A=I[Rs]|0;return _.command(typeof A=="number"&&A>=0,"invalid vertex count",S.commandStr),zn(function(){return A})}else if(Rs in j){var B=j[Rs];return Xr(B,function(ve,ie){var Ie=ve.invoke(ie,B);return _.optional(function(){ve.assert(ie,"typeof "+Ie+'==="number"&&'+Ie+">=0&&"+Ie+"===("+Ie+"|0)","invalid vertex count")}),Ie})}else if(F)if(q0(F)){if(F)return L?new Rr(L.thisDep,L.contextDep,L.propDep,function(ve,ie){var Ie=ie.def(ve.ELEMENTS,".vertCount-",ve.OFFSET);return _.optional(function(){ve.assert(ie,Ie+">=0","invalid vertex offset/element buffer too small")}),Ie}):zn(function(ve,ie){return ie.def(ve.ELEMENTS,".vertCount")});var Z=zn(function(){return-1});return _.optional(function(){Z.MISSING=!0}),Z}else{var fe=new Rr(F.thisDep||L.thisDep,F.contextDep||L.contextDep,F.propDep||L.propDep,function(ve,ie){var Ie=ve.ELEMENTS;return ve.OFFSET?ie.def(Ie,"?",Ie,".vertCount-",ve.OFFSET,":-1"):ie.def(Ie,"?",Ie,".vertCount:-1")});return _.optional(function(){fe.DYNAMIC=!0}),fe}return null}return{elements:F,primitive:$(),count:C(),instances:H(Tf,!1),offset:L}}function Tn(T,S){var I=T.static,j=T.dynamic,K={};return Ae.forEach(function(F){var $=We(F);function H(L,C){if(F in I){var A=L(I[F]);K[$]=zn(function(){return A})}else if(F in j){var B=j[F];K[$]=Xr(B,function(Z,fe){return C(Z,fe,Z.invoke(fe,B))})}}switch(F){case Fv:case Rv:case Nv:case Uv:case Cv:case jv:case Dv:case Gv:case Hv:case $v:return H(function(L){return _.commandType(L,"boolean",F,S.commandStr),L},function(L,C,A){return _.optional(function(){L.assert(C,"typeof "+A+'==="boolean"',"invalid flag "+F,L.commandStr)}),A});case Pv:return H(function(L){return _.commandParameter(L,Ri,"invalid "+F,S.commandStr),Ri[L]},function(L,C,A){var B=L.constants.compareFuncs;return _.optional(function(){L.assert(C,A+" in "+B,"invalid "+F+", must be one of "+Object.keys(Ri))}),C.def(B,"[",A,"]")});case Iv:return H(function(L){return _.command(_n(L)&&L.length===2&&typeof L[0]=="number"&&typeof L[1]=="number"&&L[0]<=L[1],"depth range is 2d array",S.commandStr),L},function(L,C,A){_.optional(function(){L.assert(C,L.shared.isArrayLike+"("+A+")&&"+A+".length===2&&typeof "+A+'[0]==="number"&&typeof '+A+'[1]==="number"&&'+A+"[0]<="+A+"[1]","depth range must be a 2d array")});var B=C.def("+",A,"[0]"),Z=C.def("+",A,"[1]");return[B,Z]});case X1:return H(function(L){_.commandType(L,"object","blend.func",S.commandStr);var C="srcRGB"in L?L.srcRGB:L.src,A="srcAlpha"in L?L.srcAlpha:L.src,B="dstRGB"in L?L.dstRGB:L.dst,Z="dstAlpha"in L?L.dstAlpha:L.dst;return _.commandParameter(C,n0,$+".srcRGB",S.commandStr),_.commandParameter(A,n0,$+".srcAlpha",S.commandStr),_.commandParameter(B,n0,$+".dstRGB",S.commandStr),_.commandParameter(Z,n0,$+".dstAlpha",S.commandStr),_.command(om.indexOf(C+", "+B)===-1,"unallowed blending combination (srcRGB, dstRGB) = ("+C+", "+B+")",S.commandStr),[n0[C],n0[B],n0[A],n0[Z]]},function(L,C,A){var B=L.constants.blendFuncs;_.optional(function(){L.assert(C,A+"&&typeof "+A+'==="object"',"invalid blend func, must be an object")});function Z(ft,Ct){var jt=C.def('"',ft,Ct,'" in ',A,"?",A,".",ft,Ct,":",A,".",ft);return _.optional(function(){L.assert(C,jt+" in "+B,"invalid "+F+"."+ft+Ct+", must be one of "+Object.keys(n0))}),jt}var fe=Z("src","RGB"),ve=Z("dst","RGB");_.optional(function(){var ft=L.constants.invalidBlendCombinations;L.assert(C,ft+".indexOf("+fe+'+", "+'+ve+") === -1 ","unallowed blending combination for (srcRGB, dstRGB)")});var ie=C.def(B,"[",fe,"]"),Ie=C.def(B,"[",Z("src","Alpha"),"]"),bt=C.def(B,"[",ve,"]"),Zt=C.def(B,"[",Z("dst","Alpha"),"]");return[ie,bt,Ie,Zt]});case V1:return H(function(L){if(typeof L=="string")return _.commandParameter(L,se,"invalid "+F,S.commandStr),[se[L],se[L]];if(typeof L=="object")return _.commandParameter(L.rgb,se,F+".rgb",S.commandStr),_.commandParameter(L.alpha,se,F+".alpha",S.commandStr),[se[L.rgb],se[L.alpha]];_.commandRaise("invalid blend.equation",S.commandStr)},function(L,C,A){var B=L.constants.blendEquations,Z=C.def(),fe=C.def(),ve=L.cond("typeof ",A,'==="string"');return _.optional(function(){function ie(Ie,bt,Zt){L.assert(Ie,Zt+" in "+B,"invalid "+bt+", must be one of "+Object.keys(se))}ie(ve.then,F,A),L.assert(ve.else,A+"&&typeof "+A+'==="object"',"invalid "+F),ie(ve.else,F+".rgb",A+".rgb"),ie(ve.else,F+".alpha",A+".alpha")}),ve.then(Z,"=",fe,"=",B,"[",A,"];"),ve.else(Z,"=",B,"[",A,".rgb];",fe,"=",B,"[",A,".alpha];"),C(ve),[Z,fe]});case Ov:return H(function(L){return _.command(_n(L)&&L.length===4,"blend.color must be a 4d array",S.commandStr),to(4,function(C){return+L[C]})},function(L,C,A){return _.optional(function(){L.assert(C,L.shared.isArrayLike+"("+A+")&&"+A+".length===4","blend.color must be a 4d array")}),to(4,function(B){return C.def("+",A,"[",B,"]")})});case Bv:return H(function(L){return _.commandType(L,"number",$,S.commandStr),L|0},function(L,C,A){return _.optional(function(){L.assert(C,"typeof "+A+'==="number"',"invalid stencil.mask")}),C.def(A,"|0")});case eu:return H(function(L){_.commandType(L,"object",$,S.commandStr);var C=L.cmp||"keep",A=L.ref||0,B="mask"in L?L.mask:-1;return _.commandParameter(C,Ri,F+".cmp",S.commandStr),_.commandType(A,"number",F+".ref",S.commandStr),_.commandType(B,"number",F+".mask",S.commandStr),[Ri[C],A,B]},function(L,C,A){var B=L.constants.compareFuncs;_.optional(function(){function ie(){L.assert(C,Array.prototype.join.call(arguments,""),"invalid stencil.func")}ie(A+"&&typeof ",A,'==="object"'),ie('!("cmp" in ',A,")||(",A,".cmp in ",B,")")});var Z=C.def('"cmp" in ',A,"?",B,"[",A,".cmp]",":",$0),fe=C.def(A,".ref|0"),ve=C.def('"mask" in ',A,"?",A,".mask|0:-1");return[Z,fe,ve]});case tu:case jc:return H(function(L){_.commandType(L,"object",$,S.commandStr);var C=L.fail||"keep",A=L.zfail||"keep",B=L.zpass||"keep";return _.commandParameter(C,F0,F+".fail",S.commandStr),_.commandParameter(A,F0,F+".zfail",S.commandStr),_.commandParameter(B,F0,F+".zpass",S.commandStr),[F===jc?Os:tl,F0[C],F0[A],F0[B]]},function(L,C,A){var B=L.constants.stencilOps;_.optional(function(){L.assert(C,A+"&&typeof "+A+'==="object"',"invalid "+F)});function Z(fe){return _.optional(function(){L.assert(C,'!("'+fe+'" in '+A+")||("+A+"."+fe+" in "+B+")","invalid "+F+"."+fe+", must be one of "+Object.keys(F0))}),C.def('"',fe,'" in ',A,"?",B,"[",A,".",fe,"]:",$0)}return[F===jc?Os:tl,Z("fail"),Z("zfail"),Z("zpass")]});case Z1:return H(function(L){_.commandType(L,"object",$,S.commandStr);var C=L.factor|0,A=L.units|0;return _.commandType(C,"number",$+".factor",S.commandStr),_.commandType(A,"number",$+".units",S.commandStr),[C,A]},function(L,C,A){_.optional(function(){L.assert(C,A+"&&typeof "+A+'==="object"',"invalid "+F)});var B=C.def(A,".factor|0"),Z=C.def(A,".units|0");return[B,Z]});case qv:return H(function(L){var C=0;return L==="front"?C=tl:L==="back"&&(C=Os),_.command(!!C,$,S.commandStr),C},function(L,C,A){return _.optional(function(){L.assert(C,A+'==="front"||'+A+'==="back"',"invalid cull.face")}),C.def(A,'==="front"?',tl,":",Os)});case Q1:return H(function(L){return _.command(typeof L=="number"&&L>=oe.lineWidthDims[0]&&L<=oe.lineWidthDims[1],"invalid line width, must be a positive number between "+oe.lineWidthDims[0]+" and "+oe.lineWidthDims[1],S.commandStr),L},function(L,C,A){return _.optional(function(){L.assert(C,"typeof "+A+'==="number"&&'+A+">="+oe.lineWidthDims[0]+"&&"+A+"<="+oe.lineWidthDims[1],"invalid line width")}),A});case K1:return H(function(L){return _.commandParameter(L,cu,$,S.commandStr),cu[L]},function(L,C,A){return _.optional(function(){L.assert(C,A+'==="cw"||'+A+'==="ccw"',"invalid frontFace, must be one of cw,ccw")}),C.def(A+'==="cw"?'+Qv+":"+iu)});case Y1:return H(function(L){return _.command(_n(L)&&L.length===4,"color.mask must be length 4 array",S.commandStr),L.map(function(C){return!!C})},function(L,C,A){return _.optional(function(){L.assert(C,L.shared.isArrayLike+"("+A+")&&"+A+".length===4","invalid color.mask")}),to(4,function(B){return"!!"+A+"["+B+"]"})});case J1:return H(function(L){_.command(typeof L=="object"&&L,$,S.commandStr);var C="value"in L?L.value:1,A=!!L.invert;return _.command(typeof C=="number"&&C>=0&&C<=1,"sample.coverage.value must be a number between 0 and 1",S.commandStr),[C,A]},function(L,C,A){_.optional(function(){L.assert(C,A+"&&typeof "+A+'==="object"',"invalid sample.coverage")});var B=C.def('"value" in ',A,"?+",A,".value:1"),Z=C.def("!!",A,".invert");return[B,Z]})}}),K}function jn(T,S){var I=T.static,j=T.dynamic,K={};return Object.keys(I).forEach(function(F){var $=I[F],H;if(typeof $=="number"||typeof $=="boolean")H=zn(function(){return $});else if(typeof $=="function"){var L=$._reglType;L==="texture2d"||L==="textureCube"?H=zn(function(C){return C.link($)}):L==="framebuffer"||L==="framebufferCube"?(_.command($.color.length>0,'missing color attachment for framebuffer sent to uniform "'+F+'"',S.commandStr),H=zn(function(C){return C.link($.color[0])})):_.commandRaise('invalid data for uniform "'+F+'"',S.commandStr)}else _n($)?H=zn(function(C){var A=C.global.def("[",to($.length,function(B){return _.command(typeof $[B]=="number"||typeof $[B]=="boolean","invalid uniform "+F,C.commandStr),$[B]}),"]");return A}):_.commandRaise('invalid or missing data for uniform "'+F+'"',S.commandStr);H.value=$,K[F]=H}),Object.keys(j).forEach(function(F){var $=j[F];K[F]=Xr($,function(H,L){return H.invoke(L,$)})}),K}function ho(T,S){var I=T.static,j=T.dynamic,K={};return Object.keys(I).forEach(function(F){var $=I[F],H=E.id(F),L=new Y;if(qf($))L.state=zi,L.buffer=pe.getBuffer(pe.create($,Ni,!1,!0)),L.type=0;else{var C=pe.getBuffer($);if(C)L.state=zi,L.buffer=C,L.type=0;else if(_.command(typeof $=="object"&&$,"invalid data for attribute "+F,S.commandStr),"constant"in $){var A=$.constant;L.buffer="null",L.state=H1,typeof A=="number"?L.x=A:(_.command(_n(A)&&A.length>0&&A.length<=4,"invalid constant for attribute "+F,S.commandStr),Ai.forEach(function(bt,Zt){Zt<A.length&&(L[bt]=A[Zt])}))}else{qf($.buffer)?C=pe.getBuffer(pe.create($.buffer,Ni,!1,!0)):C=pe.getBuffer($.buffer),_.command(!!C,'missing buffer for attribute "'+F+'"',S.commandStr);var B=$.offset|0;_.command(B>=0,'invalid offset for attribute "'+F+'"',S.commandStr);var Z=$.stride|0;_.command(Z>=0&&Z<256,'invalid stride for attribute "'+F+'", must be integer betweeen [0, 255]',S.commandStr);var fe=$.size|0;_.command(!("size"in $)||fe>0&&fe<=4,'invalid size for attribute "'+F+'", must be 1,2,3,4',S.commandStr);var ve=!!$.normalized,ie=0;"type"in $&&(_.commandParameter($.type,ks,"invalid type for attribute "+F,S.commandStr),ie=ks[$.type]);var Ie=$.divisor|0;"divisor"in $&&(_.command(Ie===0||$e,'cannot specify divisor for attribute "'+F+'", instancing not supported',S.commandStr),_.command(Ie>=0,'invalid divisor for attribute "'+F+'"',S.commandStr)),_.optional(function(){var bt=S.commandStr,Zt=["buffer","offset","divisor","normalized","type","size","stride"];Object.keys($).forEach(function(ft){_.command(Zt.indexOf(ft)>=0,'unknown parameter "'+ft+'" for attribute pointer "'+F+'" (valid parameters are '+Zt+")",bt)})}),L.buffer=C,L.state=zi,L.size=fe,L.normalized=ve,L.type=ie||C.dtype,L.offset=B,L.stride=Z,L.divisor=Ie}}K[F]=zn(function(bt,Zt){var ft=bt.attribCache;if(H in ft)return ft[H];var Ct={isStream:!1};return Object.keys(L).forEach(function(jt){Ct[jt]=L[jt]}),L.buffer&&(Ct.buffer=bt.link(L.buffer),Ct.type=Ct.type||Ct.buffer+".dtype"),ft[H]=Ct,Ct})}),Object.keys(j).forEach(function(F){var $=j[F];function H(L,C){var A=L.invoke(C,$),B=L.shared,Z=L.constants,fe=B.isBufferArgs,ve=B.buffer;_.optional(function(){L.assert(C,A+"&&(typeof "+A+'==="object"||typeof '+A+'==="function")&&('+fe+"("+A+")||"+ve+".getBuffer("+A+")||"+ve+".getBuffer("+A+".buffer)||"+fe+"("+A+'.buffer)||("constant" in '+A+"&&(typeof "+A+'.constant==="number"||'+B.isArrayLike+"("+A+".constant))))",'invalid dynamic attribute "'+F+'"')});var ie={isStream:C.def(!1)},Ie=new Y;Ie.state=zi,Object.keys(Ie).forEach(function(Ct){ie[Ct]=C.def(""+Ie[Ct])});var bt=ie.buffer,Zt=ie.type;C("if(",fe,"(",A,")){",ie.isStream,"=true;",bt,"=",ve,".createStream(",Ni,",",A,");",Zt,"=",bt,".dtype;","}else{",bt,"=",ve,".getBuffer(",A,");","if(",bt,"){",Zt,"=",bt,".dtype;",'}else if("constant" in ',A,"){",ie.state,"=",H1,";","if(typeof "+A+'.constant === "number"){',ie[Ai[0]],"=",A,".constant;",Ai.slice(1).map(function(Ct){return ie[Ct]}).join("="),"=0;","}else{",Ai.map(function(Ct,jt){return ie[Ct]+"="+A+".constant.length>"+jt+"?"+A+".constant["+jt+"]:0;"}).join(""),"}}else{","if(",fe,"(",A,".buffer)){",bt,"=",ve,".createStream(",Ni,",",A,".buffer);","}else{",bt,"=",ve,".getBuffer(",A,".buffer);","}",Zt,'="type" in ',A,"?",Z.glTypes,"[",A,".type]:",bt,".dtype;",ie.normalized,"=!!",A,".normalized;");function ft(Ct){C(ie[Ct],"=",A,".",Ct,"|0;")}return ft("size"),ft("offset"),ft("stride"),ft("divisor"),C("}}"),C.exit("if(",ie.isStream,"){",ve,".destroyStream(",bt,");","}"),ie}K[F]=Xr($,H)}),K}function In(T,S){var I=T.static,j=T.dynamic;if(Yc in I){var K=I[Yc];return K!==null&&Fe.getVAO(K)===null&&(K=Fe.createVAO(K)),zn(function($){return $.link(Fe.getVAO(K))})}else if(Yc in j){var F=j[Yc];return Xr(F,function($,H){var L=$.invoke(H,F);return H.def($.shared.vao+".getVAO("+L+")")})}return null}function Jo(T){var S=T.static,I=T.dynamic,j={};return Object.keys(S).forEach(function(K){var F=S[K];j[K]=zn(function($,H){return typeof F=="number"||typeof F=="boolean"?""+F:$.link(F)})}),Object.keys(I).forEach(function(K){var F=I[K];j[K]=Xr(F,function($,H){return $.invoke(H,F)})}),j}function Ln(T,S,I,j,K){var F=T.static,$=T.dynamic;_.optional(function(){var ft=[Ts,Vc,Xc,Ls,Ns,zf,Rs,Tf,Wc,Yc].concat(Ae);function Ct(jt){Object.keys(jt).forEach(function(Ao){_.command(ft.indexOf(Ao)>=0,'unknown parameter "'+Ao+'"',K.commandStr)})}Ct(F),Ct($)});var H=Bt(T,S),L=lt(T,K),C=ao(T,L,K),A=Eo(T,K),B=Tn(T,K),Z=eo(T,K,H);function fe(ft){var Ct=C[ft];Ct&&(B[ft]=Ct)}fe(g0),fe(We(Af));var ve=Object.keys(B).length>0,ie={framebuffer:L,draw:A,shader:Z,state:B,dirty:ve,scopeVAO:null,drawVAO:null,useVAO:!1,attributes:{}};if(ie.profile=Kt(T,K),ie.uniforms=jn(I,K),ie.drawVAO=ie.scopeVAO=In(T,K),!ie.drawVAO&&Z.program&&!H&&O.angle_instanced_arrays){var Ie=!0,bt=Z.program.attributes.map(function(ft){var Ct=S.static[ft];return Ie=Ie&&!!Ct,Ct});if(Ie&&bt.length>0){var Zt=Fe.getVAO(Fe.createVAO(bt));ie.drawVAO=new Rr(null,null,null,function(ft,Ct){return ft.link(Zt)}),ie.useVAO=!0}}return H?ie.useVAO=!0:ie.attributes=ho(S,K),ie.context=Jo(j,K),ie}function $n(T,S,I){var j=T.shared,K=j.context,F=T.scope();Object.keys(I).forEach(function($){S.save(K,"."+$);var H=I[$],L=H.append(T,S);Array.isArray(L)?F(K,".",$,"=[",L.join(),"];"):F(K,".",$,"=",L,";")}),S(F)}function Fn(T,S,I,j){var K=T.shared,F=K.gl,$=K.framebuffer,H;et&&(H=S.def(K.extensions,".webgl_draw_buffers"));var L=T.constants,C=L.drawBuffer,A=L.backBuffer,B;I?B=I.append(T,S):B=S.def($,".next"),j||S("if(",B,"!==",$,".cur){"),S("if(",B,"){",F,".bindFramebuffer(",tm,",",B,".framebuffer);"),et&&S(H,".drawBuffersWEBGL(",C,"[",B,".colorAttachments.length]);"),S("}else{",F,".bindFramebuffer(",tm,",null);"),et&&S(H,".drawBuffersWEBGL(",A,");"),S("}",$,".cur=",B,";"),j||S("}")}function or(T,S,I){var j=T.shared,K=j.gl,F=T.current,$=T.next,H=j.current,L=j.next,C=T.cond(H,".dirty");Ae.forEach(function(A){var B=We(A);if(!(B in I.state)){var Z,fe;if(B in $){Z=$[B],fe=F[B];var ve=to(we[B].length,function(Ie){return C.def(Z,"[",Ie,"]")});C(T.cond(ve.map(function(Ie,bt){return Ie+"!=="+fe+"["+bt+"]"}).join("||")).then(K,".",Me[B],"(",ve,");",ve.map(function(Ie,bt){return fe+"["+bt+"]="+Ie}).join(";"),";"))}else{Z=C.def(L,".",B);var ie=T.cond(Z,"!==",H,".",B);C(ie),B in je?ie(T.cond(Z).then(K,".enable(",je[B],");").else(K,".disable(",je[B],");"),H,".",B,"=",Z,";"):ie(K,".",Me[B],"(",Z,");",H,".",B,"=",Z,";")}}}),Object.keys(I.state).length===0&&C(H,".dirty=false;"),S(C)}function ur(T,S,I,j){var K=T.shared,F=T.current,$=K.current,H=K.gl;rm(Object.keys(I)).forEach(function(L){var C=I[L];if(!(j&&!j(C))){var A=C.append(T,S);if(je[L]){var B=je[L];q0(C)?A?S(H,".enable(",B,");"):S(H,".disable(",B,");"):S(T.cond(A).then(H,".enable(",B,");").else(H,".disable(",B,");")),S($,".",L,"=",A,";")}else if(_n(A)){var Z=F[L];S(H,".",Me[L],"(",A,");",A.map(function(fe,ve){return Z+"["+ve+"]="+fe}).join(";"),";")}else S(H,".",Me[L],"(",A,");",$,".",L,"=",A,";")}})}function Mn(T,S){$e&&(T.instancing=S.def(T.shared.extensions,".angle_instanced_arrays"))}function Qt(T,S,I,j,K){var F=T.shared,$=T.stats,H=F.current,L=F.timer,C=I.profile;function A(){return typeof performance=="undefined"?"Date.now()":"performance.now()"}var B,Z;function fe(ft){B=S.def(),ft(B,"=",A(),";"),typeof K=="string"?ft($,".count+=",K,";"):ft($,".count++;"),Le&&(j?(Z=S.def(),ft(Z,"=",L,".getNumPendingQueries();")):ft(L,".beginQuery(",$,");"))}function ve(ft){ft($,".cpuTime+=",A(),"-",B,";"),Le&&(j?ft(L,".pushScopeStats(",Z,",",L,".getNumPendingQueries(),",$,");"):ft(L,".endQuery();"))}function ie(ft){var Ct=S.def(H,".profile");S(H,".profile=",ft,";"),S.exit(H,".profile=",Ct,";")}var Ie;if(C){if(q0(C)){C.enable?(fe(S),ve(S.exit),ie("true")):ie("false");return}Ie=C.append(T,S),ie(Ie)}else Ie=S.def(H,".profile");var bt=T.block();fe(bt),S("if(",Ie,"){",bt,"}");var Zt=T.block();ve(Zt),S.exit("if(",Ie,"){",Zt,"}")}function dr(T,S,I,j,K){var F=T.shared;function $(L){switch(L){case Lf:case Of:case If:return 2;case Nf:case Cf:case $f:return 3;case Rf:case Pf:case Ff:return 4;default:return 1}}function H(L,C,A){var B=F.gl,Z=S.def(L,".location"),fe=S.def(F.attributes,"[",Z,"]"),ve=A.state,ie=A.buffer,Ie=[A.x,A.y,A.z,A.w],bt=["buffer","normalized","offset","stride"];function Zt(){S("if(!",fe,".buffer){",B,".enableVertexAttribArray(",Z,");}");var Ct=A.type,jt;if(A.size?jt=S.def(A.size,"||",C):jt=C,S("if(",fe,".type!==",Ct,"||",fe,".size!==",jt,"||",bt.map(function(gn){return fe+"."+gn+"!=="+A[gn]}).join("||"),"){",B,".bindBuffer(",Ni,",",ie,".buffer);",B,".vertexAttribPointer(",[Z,jt,Ct,A.normalized,A.stride,A.offset],");",fe,".type=",Ct,";",fe,".size=",jt,";",bt.map(function(gn){return fe+"."+gn+"="+A[gn]+";"}).join(""),"}"),$e){var Ao=A.divisor;S("if(",fe,".divisor!==",Ao,"){",T.instancing,".vertexAttribDivisorANGLE(",[Z,Ao],");",fe,".divisor=",Ao,";}")}}function ft(){S("if(",fe,".buffer){",B,".disableVertexAttribArray(",Z,");",fe,".buffer=null;","}if(",Ai.map(function(Ct,jt){return fe+"."+Ct+"!=="+Ie[jt]}).join("||"),"){",B,".vertexAttrib4f(",Z,",",Ie,");",Ai.map(function(Ct,jt){return fe+"."+Ct+"="+Ie[jt]+";"}).join(""),"}")}ve===zi?Zt():ve===H1?ft():(S("if(",ve,"===",zi,"){"),Zt(),S("}else{"),ft(),S("}"))}j.forEach(function(L){var C=L.name,A=I.attributes[C],B;if(A){if(!K(A))return;B=A.append(T,S)}else{if(!K(am))return;var Z=T.scopeAttrib(C);_.optional(function(){T.assert(S,Z+".state","missing attribute "+C)}),B={},Object.keys(new Y).forEach(function(fe){B[fe]=S.def(Z,".",fe)})}H(T.link(L),$(L.info.type),B)})}function Ro(T,S,I,j,K){for(var F=T.shared,$=F.gl,H,L=0;L<j.length;++L){var C=j[L],A=C.name,B=C.info.type,Z=I.uniforms[A],fe=T.link(C),ve=fe+".location",ie;if(Z){if(!K(Z))continue;if(q0(Z)){var Ie=Z.value;if(_.command(Ie!==null&&typeof Ie!="undefined",'missing uniform "'+A+'"',T.commandStr),B===Jc||B===el){_.command(typeof Ie=="function"&&(B===Jc&&(Ie._reglType==="texture2d"||Ie._reglType==="framebuffer")||B===el&&(Ie._reglType==="textureCube"||Ie._reglType==="framebufferCube")),"invalid texture for uniform "+A,T.commandStr);var bt=T.link(Ie._texture||Ie.color[0]._texture);S($,".uniform1i(",ve,",",bt+".bind());"),S.exit(bt,".unbind();")}else if(B===Kc||B===Qc||B===Zc){_.optional(function(){_.command(_n(Ie),"invalid matrix for uniform "+A,T.commandStr),_.command(B===Kc&&Ie.length===4||B===Qc&&Ie.length===9||B===Zc&&Ie.length===16,"invalid length for matrix uniform "+A,T.commandStr)});var Zt=T.global.def("new Float32Array(["+Array.prototype.slice.call(Ie)+"])"),ft=2;B===Qc?ft=3:B===Zc&&(ft=4),S($,".uniformMatrix",ft,"fv(",ve,",false,",Zt,");")}else{switch(B){case ru:_.commandType(Ie,"number","uniform "+A,T.commandStr),H="1f";break;case Lf:_.command(_n(Ie)&&Ie.length===2,"uniform "+A,T.commandStr),H="2f";break;case Nf:_.command(_n(Ie)&&Ie.length===3,"uniform "+A,T.commandStr),H="3f";break;case Rf:_.command(_n(Ie)&&Ie.length===4,"uniform "+A,T.commandStr),H="4f";break;case su:_.commandType(Ie,"boolean","uniform "+A,T.commandStr),H="1i";break;case au:_.commandType(Ie,"number","uniform "+A,T.commandStr),H="1i";break;case If:_.command(_n(Ie)&&Ie.length===2,"uniform "+A,T.commandStr),H="2i";break;case Of:_.command(_n(Ie)&&Ie.length===2,"uniform "+A,T.commandStr),H="2i";break;case $f:_.command(_n(Ie)&&Ie.length===3,"uniform "+A,T.commandStr),H="3i";break;case Cf:_.command(_n(Ie)&&Ie.length===3,"uniform "+A,T.commandStr),H="3i";break;case Ff:_.command(_n(Ie)&&Ie.length===4,"uniform "+A,T.commandStr),H="4i";break;case Pf:_.command(_n(Ie)&&Ie.length===4,"uniform "+A,T.commandStr),H="4i";break}S($,".uniform",H,"(",ve,",",_n(Ie)?Array.prototype.slice.call(Ie):Ie,");")}continue}else ie=Z.append(T,S)}else{if(!K(am))continue;ie=S.def(F.uniforms,"[",E.id(A),"]")}B===Jc?(_(!Array.isArray(ie),"must specify a scalar prop for textures"),S("if(",ie,"&&",ie,'._reglType==="framebuffer"){',ie,"=",ie,".color[0];","}")):B===el&&(_(!Array.isArray(ie),"must specify a scalar prop for cube maps"),S("if(",ie,"&&",ie,'._reglType==="framebufferCube"){',ie,"=",ie,".color[0];","}")),_.optional(function(){function Or(Da,um){T.assert(S,Da,'bad data or missing for uniform "'+A+'".  '+um)}function lu(Da){_(!Array.isArray(ie),"must not specify an array type for uniform"),Or("typeof "+ie+'==="'+Da+'"',"invalid type, expected "+Da)}function _a(Da,um){Array.isArray(ie)?_(ie.length===Da,"must have length "+Da):Or(F.isArrayLike+"("+ie+")&&"+ie+".length==="+Da,"invalid vector, should have length "+Da,T.commandStr)}function hm(Da){_(!Array.isArray(ie),"must not specify a value type"),Or("typeof "+ie+'==="function"&&'+ie+'._reglType==="texture'+(Da===Yv?"2d":"Cube")+'"',"invalid texture type",T.commandStr)}switch(B){case au:lu("number");break;case Of:_a(2,"number");break;case Cf:_a(3,"number");break;case Pf:_a(4,"number");break;case ru:lu("number");break;case Lf:_a(2,"number");break;case Nf:_a(3,"number");break;case Rf:_a(4,"number");break;case su:lu("boolean");break;case If:_a(2,"boolean");break;case $f:_a(3,"boolean");break;case Ff:_a(4,"boolean");break;case Kc:_a(4,"number");break;case Qc:_a(9,"number");break;case Zc:_a(16,"number");break;case Jc:hm(Yv);break;case el:hm(o4);break}});var Ct=1;switch(B){case Jc:case el:var jt=S.def(ie,"._texture");S($,".uniform1i(",ve,",",jt,".bind());"),S.exit(jt,".unbind();");continue;case au:case su:H="1i";break;case Of:case If:H="2i",Ct=2;break;case Cf:case $f:H="3i",Ct=3;break;case Pf:case Ff:H="4i",Ct=4;break;case ru:H="1f";break;case Lf:H="2f",Ct=2;break;case Nf:H="3f",Ct=3;break;case Rf:H="4f",Ct=4;break;case Kc:H="Matrix2fv";break;case Qc:H="Matrix3fv";break;case Zc:H="Matrix4fv";break}if(S($,".uniform",H,"(",ve,","),H.charAt(0)==="M"){var Ao=Math.pow(B-Kc+2,2),gn=T.global.def("new Float32Array(",Ao,")");Array.isArray(ie)?S("false,(",to(Ao,function(Or){return gn+"["+Or+"]="+ie[Or]}),",",gn,")"):S("false,(Array.isArray(",ie,")||",ie," instanceof Float32Array)?",ie,":(",to(Ao,function(Or){return gn+"["+Or+"]="+ie+"["+Or+"]"}),",",gn,")")}else Ct>1?S(to(Ct,function(Or){return Array.isArray(ie)?ie[Or]:ie+"["+Or+"]"})):(_(!Array.isArray(ie),"uniform value must not be an array"),S(ie));S(");")}}function Rt(T,S,I,j){var K=T.shared,F=K.gl,$=K.draw,H=j.draw;function L(){var jt=H.elements,Ao,gn=S;return jt?((jt.contextDep&&j.contextDynamic||jt.propDep)&&(gn=I),Ao=jt.append(T,gn)):Ao=gn.def($,".",Ls),Ao&&gn("if("+Ao+")"+F+".bindBuffer("+Jw+","+Ao+".buffer.buffer);"),Ao}function C(){var jt=H.count,Ao,gn=S;return jt?((jt.contextDep&&j.contextDynamic||jt.propDep)&&(gn=I),Ao=jt.append(T,gn),_.optional(function(){jt.MISSING&&T.assert(S,"false","missing vertex count"),jt.DYNAMIC&&T.assert(gn,Ao+">=0","missing vertex count")})):(Ao=gn.def($,".",Rs),_.optional(function(){T.assert(gn,Ao+">=0","missing vertex count")})),Ao}var A=L();function B(jt){var Ao=H[jt];return Ao?Ao.contextDep&&j.contextDynamic||Ao.propDep?Ao.append(T,I):Ao.append(T,S):S.def($,".",jt)}var Z=B(Ns),fe=B(zf),ve=C();if(typeof ve=="number"){if(ve===0)return}else I("if(",ve,"){"),I.exit("}");var ie,Ie;$e&&(ie=B(Tf),Ie=T.instancing);var bt=A+".type",Zt=H.elements&&q0(H.elements);function ft(){function jt(){I(Ie,".drawElementsInstancedANGLE(",[Z,ve,bt,fe+"<<(("+bt+"-"+zv+")>>1)",ie],");")}function Ao(){I(Ie,".drawArraysInstancedANGLE(",[Z,fe,ve,ie],");")}A?Zt?jt():(I("if(",A,"){"),jt(),I("}else{"),Ao(),I("}")):Ao()}function Ct(){function jt(){I(F+".drawElements("+[Z,ve,bt,fe+"<<(("+bt+"-"+zv+")>>1)"]+");")}function Ao(){I(F+".drawArrays("+[Z,fe,ve]+");")}A?Zt?jt():(I("if(",A,"){"),jt(),I("}else{"),Ao(),I("}")):Ao()}$e&&(typeof ie!="number"||ie>=0)?typeof ie=="string"?(I("if(",ie,">0){"),ft(),I("}else if(",ie,"<0){"),Ct(),I("}")):ft():Ct()}function fo(T,S,I,j,K){var F=qt(),$=F.proc("body",K);return _.optional(function(){F.commandStr=S.commandStr,F.command=F.link(S.commandStr)}),$e&&(F.instancing=$.def(F.shared.extensions,".angle_instanced_arrays")),T(F,$,I,j),F.compile().body}function yo(T,S,I,j){Mn(T,S),I.useVAO?I.drawVAO?S(T.shared.vao,".setVAO(",I.drawVAO.append(T,S),");"):S(T.shared.vao,".setVAO(",T.shared.vao,".targetVAO);"):(S(T.shared.vao,".setVAO(null);"),dr(T,S,I,j.attributes,function(){return!0})),Ro(T,S,I,j.uniforms,function(){return!0}),Rt(T,S,S,I)}function kn(T,S){var I=T.proc("draw",1);Mn(T,I),$n(T,I,S.context),Fn(T,I,S.framebuffer),or(T,I,S),ur(T,I,S.state),Qt(T,I,S,!1,!0);var j=S.shader.progVar.append(T,I);if(I(T.shared.gl,".useProgram(",j,".program);"),S.shader.program)yo(T,I,S,S.shader.program);else{I(T.shared.vao,".setVAO(null);");var K=T.global.def("{}"),F=I.def(j,".id"),$=I.def(K,"[",F,"]");I(T.cond($).then($,".call(this,a0);").else($,"=",K,"[",F,"]=",T.link(function(H){return fo(yo,T,S,H,1)}),"(",j,");",$,".call(this,a0);"))}Object.keys(S.state).length>0&&I(T.shared.current,".dirty=true;")}function r0(T,S,I,j){T.batchId="a1",Mn(T,S);function K(){return!0}dr(T,S,I,j.attributes,K),Ro(T,S,I,j.uniforms,K),Rt(T,S,S,I)}function Cs(T,S,I,j){Mn(T,S);var K=I.contextDep,F=S.def(),$="a0",H="a1",L=S.def();T.shared.props=L,T.batchId=F;var C=T.scope(),A=T.scope();S(C.entry,"for(",F,"=0;",F,"<",H,";++",F,"){",L,"=",$,"[",F,"];",A,"}",C.exit);function B(bt){return bt.contextDep&&K||bt.propDep}function Z(bt){return!B(bt)}if(I.needsContext&&$n(T,A,I.context),I.needsFramebuffer&&Fn(T,A,I.framebuffer),ur(T,A,I.state,B),I.profile&&B(I.profile)&&Qt(T,A,I,!1,!0),j)I.useVAO?I.drawVAO?B(I.drawVAO)?A(T.shared.vao,".setVAO(",I.drawVAO.append(T,A),");"):C(T.shared.vao,".setVAO(",I.drawVAO.append(T,C),");"):C(T.shared.vao,".setVAO(",T.shared.vao,".targetVAO);"):(C(T.shared.vao,".setVAO(null);"),dr(T,C,I,j.attributes,Z),dr(T,A,I,j.attributes,B)),Ro(T,C,I,j.uniforms,Z),Ro(T,A,I,j.uniforms,B),Rt(T,C,A,I);else{var fe=T.global.def("{}"),ve=I.shader.progVar.append(T,A),ie=A.def(ve,".id"),Ie=A.def(fe,"[",ie,"]");A(T.shared.gl,".useProgram(",ve,".program);","if(!",Ie,"){",Ie,"=",fe,"[",ie,"]=",T.link(function(bt){return fo(r0,T,I,bt,2)}),"(",ve,");}",Ie,".call(this,a0[",F,"],",F,");")}}function N(T,S){var I=T.proc("batch",2);T.batchId="0",Mn(T,I);var j=!1,K=!0;Object.keys(S.context).forEach(function(fe){j=j||S.context[fe].propDep}),j||($n(T,I,S.context),K=!1);var F=S.framebuffer,$=!1;F?(F.propDep?j=$=!0:F.contextDep&&j&&($=!0),$||Fn(T,I,F)):Fn(T,I,null),S.state.viewport&&S.state.viewport.propDep&&(j=!0);function H(fe){return fe.contextDep&&j||fe.propDep}or(T,I,S),ur(T,I,S.state,function(fe){return!H(fe)}),(!S.profile||!H(S.profile))&&Qt(T,I,S,!1,"a1"),S.contextDep=j,S.needsContext=K,S.needsFramebuffer=$;var L=S.shader.progVar;if(L.contextDep&&j||L.propDep)Cs(T,I,S,null);else{var C=L.append(T,I);if(I(T.shared.gl,".useProgram(",C,".program);"),S.shader.program)Cs(T,I,S,S.shader.program);else{I(T.shared.vao,".setVAO(null);");var A=T.global.def("{}"),B=I.def(C,".id"),Z=I.def(A,"[",B,"]");I(T.cond(Z).then(Z,".call(this,a0,a1);").else(Z,"=",A,"[",B,"]=",T.link(function(fe){return fo(Cs,T,S,fe,2)}),"(",C,");",Z,".call(this,a0,a1);"))}}Object.keys(S.state).length>0&&I(T.shared.current,".dirty=true;")}function ne(T,S){var I=T.proc("scope",3);T.batchId="a2";var j=T.shared,K=j.current;$n(T,I,S.context),S.framebuffer&&S.framebuffer.append(T,I),rm(Object.keys(S.state)).forEach(function($){var H=S.state[$],L=H.append(T,I);_n(L)?L.forEach(function(C,A){I.set(T.next[$],"["+A+"]",C)}):I.set(j.next,"."+$,L)}),Qt(T,I,S,!0,!0),[Ls,zf,Rs,Tf,Ns].forEach(function($){var H=S.draw[$];H&&I.set(j.draw,"."+$,""+H.append(T,I))}),Object.keys(S.uniforms).forEach(function($){var H=S.uniforms[$].append(T,I);Array.isArray(H)&&(H="["+H.join()+"]"),I.set(j.uniforms,"["+E.id($)+"]",H)}),Object.keys(S.attributes).forEach(function($){var H=S.attributes[$].append(T,I),L=T.scopeAttrib($);Object.keys(new Y).forEach(function(C){I.set(L,"."+C,H[C])})}),S.scopeVAO&&I.set(j.vao,".targetVAO",S.scopeVAO.append(T,I));function F($){var H=S.shader[$];H&&I.set(j.shader,"."+$,H.append(T,I))}F(Vc),F(Xc),Object.keys(S.state).length>0&&(I(K,".dirty=true;"),I.exit(K,".dirty=true;")),I("a1(",T.shared.context,",a0,",T.batchId,");")}function J(T){if(!(typeof T!="object"||_n(T))){for(var S=Object.keys(T),I=0;I<S.length;++I)if(Ee.isDynamic(T[S[I]]))return!0;return!1}}function st(T,S,I){var j=S.static[I];if(!j||!J(j))return;var K=T.global,F=Object.keys(j),$=!1,H=!1,L=!1,C=T.global.def("{}");F.forEach(function(B){var Z=j[B];if(Ee.isDynamic(Z)){typeof Z=="function"&&(Z=j[B]=Ee.unbox(Z));var fe=Xr(Z,null);$=$||fe.thisDep,L=L||fe.propDep,H=H||fe.contextDep}else{switch(K(C,".",B,"="),typeof Z){case"number":K(Z);break;case"string":K('"',Z,'"');break;case"object":Array.isArray(Z)&&K("[",Z.join(),"]");break;default:K(T.link(Z));break}K(";")}});function A(B,Z){F.forEach(function(fe){var ve=j[fe];if(Ee.isDynamic(ve)){var ie=B.invoke(Z,ve);Z(C,".",fe,"=",ie,";")}})}S.dynamic[I]=new Ee.DynamicVariable(Ef,{thisDep:$,contextDep:H,propDep:L,ref:C,append:A}),delete S.static[I]}function so(T,S,I,j,K){var F=qt();F.stats=F.link(K),Object.keys(S.static).forEach(function(H){st(F,S,H)}),Zw.forEach(function(H){st(F,T,H)});var $=Ln(T,S,I,j,F);return kn(F,$),ne(F,$),N(F,$),t(F.compile(),{destroy:function(){$.shader.program.destroy()}})}return{next:nt,current:we,procs:function(){var T=qt(),S=T.proc("poll"),I=T.proc("refresh"),j=T.block();S(j),I(j);var K=T.shared,F=K.gl,$=K.next,H=K.current;j(H,".dirty=false;"),Fn(T,S),Fn(T,I,null,!0);var L;$e&&(L=T.link($e)),O.oes_vertex_array_object&&I(T.link(O.oes_vertex_array_object),".bindVertexArrayOES(null);");for(var C=0;C<oe.maxAttributes;++C){var A=I.def(K.attributes,"[",C,"]"),B=T.cond(A,".buffer");B.then(F,".enableVertexAttribArray(",C,");",F,".bindBuffer(",Ni,",",A,".buffer.buffer);",F,".vertexAttribPointer(",C,",",A,".size,",A,".type,",A,".normalized,",A,".stride,",A,".offset);").else(F,".disableVertexAttribArray(",C,");",F,".vertexAttrib4f(",C,",",A,".x,",A,".y,",A,".z,",A,".w);",A,".buffer=null;"),I(B),$e&&I(L,".vertexAttribDivisorANGLE(",C,",",A,".divisor);")}return I(T.shared.vao,".currentVAO=null;",T.shared.vao,".setVAO(",T.shared.vao,".targetVAO);"),Object.keys(je).forEach(function(Z){var fe=je[Z],ve=j.def($,".",Z),ie=T.block();ie("if(",ve,"){",F,".enable(",fe,")}else{",F,".disable(",fe,")}",H,".",Z,"=",ve,";"),I(ie),S("if(",ve,"!==",H,".",Z,"){",ie,"}")}),Object.keys(Me).forEach(function(Z){var fe=Me[Z],ve=we[Z],ie,Ie,bt=T.block();if(bt(F,".",fe,"("),_n(ve)){var Zt=ve.length;ie=T.global.def($,".",Z),Ie=T.global.def(H,".",Z),bt(to(Zt,function(ft){return ie+"["+ft+"]"}),");",to(Zt,function(ft){return Ie+"["+ft+"]="+ie+"["+ft+"];"}).join("")),S("if(",to(Zt,function(ft){return ie+"["+ft+"]!=="+Ie+"["+ft+"]"}).join("||"),"){",bt,"}")}else ie=j.def($,".",Z),Ie=j.def(H,".",Z),bt(ie,");",H,".",Z,"=",ie,";"),S("if(",ie,"!==",Ie,"){",bt,"}");I(bt)}),T.compile()}(),compile:so}}function x4(){return{vaoCount:0,bufferCount:0,elementsCount:0,framebufferCount:0,shaderCount:0,textureCount:0,cubeCount:0,renderbufferCount:0,maxTextureUnits:0}}var y4=34918,b4=34919,sm=35007,w4=function(y,E){if(!E.ext_disjoint_timer_query)return null;var O=[];function oe(){return O.pop()||E.ext_disjoint_timer_query.createQueryEXT()}function pe($e){O.push($e)}var ee=[];function ae($e){var et=oe();E.ext_disjoint_timer_query.beginQueryEXT(sm,et),ee.push(et),Le(ee.length-1,ee.length,$e)}function Te(){E.ext_disjoint_timer_query.endQueryEXT(sm)}function Ce(){this.startQueryIndex=-1,this.endQueryIndex=-1,this.sum=0,this.stats=null}var Fe=[];function Pe(){return Fe.pop()||new Ce}function He($e){Fe.push($e)}var Ye=[];function Le($e,et,we){var nt=Pe();nt.startQueryIndex=$e,nt.endQueryIndex=et,nt.sum=0,nt.stats=we,Ye.push(nt)}var Be=[],Y=[];function se(){var $e,et,we=ee.length;if(we!==0){Y.length=Math.max(Y.length,we+1),Be.length=Math.max(Be.length,we+1),Be[0]=0,Y[0]=0;var nt=0;for($e=0,et=0;et<ee.length;++et){var Ae=ee[et];E.ext_disjoint_timer_query.getQueryObjectEXT(Ae,b4)?(nt+=E.ext_disjoint_timer_query.getQueryObjectEXT(Ae,y4),pe(Ae)):ee[$e++]=Ae,Be[et+1]=nt,Y[et+1]=$e}for(ee.length=$e,$e=0,et=0;et<Ye.length;++et){var je=Ye[et],Me=je.startQueryIndex,We=je.endQueryIndex;je.sum+=Be[We]-Be[Me];var Tt=Y[Me],Ht=Y[We];Ht===Tt?(je.stats.gpuTime+=je.sum/1e6,He(je)):(je.startQueryIndex=Tt,je.endQueryIndex=Ht,Ye[$e++]=je)}Ye.length=$e}}return{beginQuery:ae,endQuery:Te,pushScopeStats:Le,update:se,getNumPendingQueries:function(){return ee.length},clear:function(){O.push.apply(O,ee);for(var $e=0;$e<O.length;$e++)E.ext_disjoint_timer_query.deleteQueryEXT(O[$e]);ee.length=0,O.length=0},restore:function(){ee.length=0,O.length=0}}},_4=16384,M4=256,k4=1024,S4=34962,im="webglcontextlost",cm="webglcontextrestored",lm=1,E4=2,A4=3;function fm(y,E){for(var O=0;O<y.length;++O)if(y[O]===E)return O;return-1}function z4(y){var E=Pt(y);if(!E)return null;var O=E.gl,oe=O.getContextAttributes(),pe=O.isContextLost(),ee=It(O,E);if(!ee)return null;var ae=qe(),Te=x4(),Ce=ee.extensions,Fe=w4(O,Ce),Pe=ue(),He=O.drawingBufferWidth,Ye=O.drawingBufferHeight,Le={tick:0,time:0,viewportWidth:He,viewportHeight:Ye,framebufferWidth:He,framebufferHeight:Ye,drawingBufferWidth:He,drawingBufferHeight:Ye,pixelRatio:E.pixelRatio},Be={},Y={elements:null,primitive:4,count:-1,offset:0,instances:-1},se=db(O,Ce),$e=Tb(O,Te,E,we),et=Gw(O,Ce,se,Te,$e);function we(Rt){return et.destroyBuffer(Rt)}var nt=Gb(O,Ce,$e,Te),Ae=jw(O,ae,Te,E),je=xw(O,Ce,se,function(){Tt.procs.poll()},Le,Te,E),Me=yw(O,Ce,se,Te,E),We=qw(O,Ce,se,je,Me,Te),Tt=g4(O,ae,Ce,se,$e,nt,je,We,Be,et,Ae,Y,Le,Fe,E),Ht=Xw(O,We,Tt.procs.poll,Le,oe,Ce,se),Ke=Tt.next,De=O.canvas,ye=[],qt=[],Kt=[],lt=[E.onDestroy],ao=null;function Bt(){if(ye.length===0){Fe&&Fe.update(),ao=null;return}ao=ze.next(Bt),ur();for(var Rt=ye.length-1;Rt>=0;--Rt){var fo=ye[Rt];fo&&fo(Le,null,0)}O.flush(),Fe&&Fe.update()}function eo(){!ao&&ye.length>0&&(ao=ze.next(Bt))}function Eo(){ao&&(ze.cancel(Bt),ao=null)}function Tn(Rt){Rt.preventDefault(),pe=!0,Eo(),qt.forEach(function(fo){fo()})}function jn(Rt){O.getError(),pe=!1,ee.restore(),Ae.restore(),$e.restore(),je.restore(),Me.restore(),We.restore(),et.restore(),Fe&&Fe.restore(),Tt.procs.refresh(),eo(),Kt.forEach(function(fo){fo()})}De&&(De.addEventListener(im,Tn,!1),De.addEventListener(cm,jn,!1));function ho(){ye.length=0,Eo(),De&&(De.removeEventListener(im,Tn),De.removeEventListener(cm,jn)),Ae.clear(),We.clear(),Me.clear(),je.clear(),nt.clear(),$e.clear(),et.clear(),Fe&&Fe.clear(),lt.forEach(function(Rt){Rt()})}function In(Rt){_(!!Rt,"invalid args to regl({...})"),_.type(Rt,"object","invalid args to regl({...})");function fo(K){var F=t({},K);delete F.uniforms,delete F.attributes,delete F.context,delete F.vao,"stencil"in F&&F.stencil.op&&(F.stencil.opBack=F.stencil.opFront=F.stencil.op,delete F.stencil.op);function $(H){if(H in F){var L=F[H];delete F[H],Object.keys(L).forEach(function(C){F[H+"."+C]=L[C]})}}return $("blend"),$("depth"),$("cull"),$("stencil"),$("polygonOffset"),$("scissor"),$("sample"),"vao"in K&&(F.vao=K.vao),F}function yo(K,F){var $={},H={};return Object.keys(K).forEach(function(L){var C=K[L];if(Ee.isDynamic(C)){H[L]=Ee.unbox(C,L);return}else if(F&&Array.isArray(C)){for(var A=0;A<C.length;++A)if(Ee.isDynamic(C[A])){H[L]=Ee.unbox(C,L);return}}$[L]=C}),{dynamic:H,static:$}}var kn=yo(Rt.context||{},!0),r0=yo(Rt.uniforms||{},!0),Cs=yo(Rt.attributes||{},!1),N=yo(fo(Rt),!1),ne={gpuTime:0,cpuTime:0,count:0},J=Tt.compile(N,Cs,r0,kn,ne),st=J.draw,so=J.batch,T=J.scope,S=[];function I(K){for(;S.length<K;)S.push(null);return S}function j(K,F){var $;if(pe&&_.raise("context lost"),typeof K=="function")return T.call(this,null,K,0);if(typeof F=="function")if(typeof K=="number")for($=0;$<K;++$)T.call(this,null,F,$);else if(Array.isArray(K))for($=0;$<K.length;++$)T.call(this,K[$],F,$);else return T.call(this,K,F,0);else if(typeof K=="number"){if(K>0)return so.call(this,I(K|0),K|0)}else if(Array.isArray(K)){if(K.length)return so.call(this,K,K.length)}else return st.call(this,K)}return t(j,{stats:ne,destroy:function(){J.destroy()}})}var Jo=We.setFBO=In({framebuffer:Ee.define.call(null,lm,"framebuffer")});function Ln(Rt,fo){var yo=0;Tt.procs.poll();var kn=fo.color;kn&&(O.clearColor(+kn[0]||0,+kn[1]||0,+kn[2]||0,+kn[3]||0),yo|=_4),"depth"in fo&&(O.clearDepth(+fo.depth),yo|=M4),"stencil"in fo&&(O.clearStencil(fo.stencil|0),yo|=k4),_(!!yo,"called regl.clear with no buffer specified"),O.clear(yo)}function $n(Rt){if(_(typeof Rt=="object"&&Rt,"regl.clear() takes an object as input"),"framebuffer"in Rt)if(Rt.framebuffer&&Rt.framebuffer_reglType==="framebufferCube")for(var fo=0;fo<6;++fo)Jo(t({framebuffer:Rt.framebuffer.faces[fo]},Rt),Ln);else Jo(Rt,Ln);else Ln(null,Rt)}function Fn(Rt){_.type(Rt,"function","regl.frame() callback must be a function"),ye.push(Rt);function fo(){var yo=fm(ye,Rt);_(yo>=0,"cannot cancel a frame twice");function kn(){var r0=fm(ye,kn);ye[r0]=ye[ye.length-1],ye.length-=1,ye.length<=0&&Eo()}ye[yo]=kn}return eo(),{cancel:fo}}function or(){var Rt=Ke.viewport,fo=Ke.scissor_box;Rt[0]=Rt[1]=fo[0]=fo[1]=0,Le.viewportWidth=Le.framebufferWidth=Le.drawingBufferWidth=Rt[2]=fo[2]=O.drawingBufferWidth,Le.viewportHeight=Le.framebufferHeight=Le.drawingBufferHeight=Rt[3]=fo[3]=O.drawingBufferHeight}function ur(){Le.tick+=1,Le.time=Qt(),or(),Tt.procs.poll()}function Mn(){je.refresh(),or(),Tt.procs.refresh(),Fe&&Fe.update()}function Qt(){return(ue()-Pe)/1e3}Mn();function dr(Rt,fo){_.type(fo,"function","listener callback must be a function");var yo;switch(Rt){case"frame":return Fn(fo);case"lost":yo=qt;break;case"restore":yo=Kt;break;case"destroy":yo=lt;break;default:_.raise("invalid event, must be one of frame,lost,restore,destroy")}return yo.push(fo),{cancel:function(){for(var kn=0;kn<yo.length;++kn)if(yo[kn]===fo){yo[kn]=yo[yo.length-1],yo.pop();return}}}}var Ro=t(In,{clear:$n,prop:Ee.define.bind(null,lm),context:Ee.define.bind(null,E4),this:Ee.define.bind(null,A4),draw:In({}),buffer:function(Rt){return $e.create(Rt,S4,!1,!1)},elements:function(Rt){return nt.create(Rt,!1)},texture:je.create2D,cube:je.createCube,renderbuffer:Me.create,framebuffer:We.create,framebufferCube:We.createCube,vao:et.createVAO,attributes:oe,frame:Fn,on:dr,limits:se,hasExtension:function(Rt){return se.extensions.indexOf(Rt.toLowerCase())>=0},read:Ht,destroy:ho,_gl:O,_refresh:Mn,poll:function(){ur(),Fe&&Fe.update()},now:Qt,stats:Te});return E.onDone(null,Ro),Ro}return z4})});var Ps=ke((hA,Cm)=>{"use strict";var y0=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],b0=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],a0=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],Wf=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],cl=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],yu=e=>Math.hypot(e[0],e[1],e[2]),ka=e=>{let t=yu(e)||1;return[e[0]/t,e[1]/t,e[2]/t]};function qi(e,t){let o=e.length-1,n=Math.min(Math.max(t,0),1)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,s=e[Math.max(0,r-1)],i=e[r],c=e[r+1],h=e[Math.min(o,r+2)],f=[0,0,0];for(let u=0;u<3;u++)f[u]=.5*(2*i[u]+(-s[u]+c[u])*a+(2*s[u]-5*i[u]+4*c[u]-h[u])*a*a+(-s[u]+3*i[u]-3*c[u]+h[u])*a*a*a);return f}function U4(e,t){return qi(e.map(o=>[o,0,0]),t)[0]}function B4(e,t,o,n){let r={curMat:[0,0,0]},s={r:[1,0,0,0,1,0,0,0,1],t:[0,0,0],s:1},i=[];r.save=()=>{i.push({r:s.r.slice(),t:s.t.slice(),s:s.s})},r.restore=()=>{s=i.pop()};let c=(d,v)=>{let l=new Array(9);for(let p=0;p<3;p++)for(let m=0;m<3;m++)l[p*3+m]=d[p*3]*v[m]+d[p*3+1]*v[3+m]+d[p*3+2]*v[6+m];return l},h=d=>[s.r[0]*d[0]+s.r[1]*d[1]+s.r[2]*d[2],s.r[3]*d[0]+s.r[4]*d[1]+s.r[5]*d[2],s.r[6]*d[0]+s.r[7]*d[1]+s.r[8]*d[2]];r.translate=(d,v,l)=>{let p=h([d,v,l]);s.t=[s.t[0]+p[0]*s.s,s.t[1]+p[1]*s.s,s.t[2]+p[2]*s.s]},r.scale=d=>{s.s*=d},r.rotateY=d=>{let v=Math.cos(d),l=Math.sin(d);s.r=c(s.r,[v,0,l,0,1,0,-l,0,v])},r.vert=(d,v,l)=>{let p=l||r.curMat,m=h(d),g=ka(h(v));return e.push(m[0]*s.s+s.t[0],m[1]*s.s+s.t[1],m[2]*s.s+s.t[2]),t.push(g[0],g[1],g[2]),n.push(p[0],p[1],p[2]),e.length/3-1};let f=d=>[e[d*3],e[d*3+1],e[d*3+2]],u=d=>[t[d*3],t[d*3+1],t[d*3+2]];return r.tri=(d,v,l)=>{let p=f(d),m=cl(y0(f(v),p),y0(f(l),p)),g=b0(b0(u(d),u(v)),u(l));Wf(m,g)<0?o.push(d,l,v):o.push(d,v,l)},r.box=(d,v,l,p,m,g,x)=>{let b=[[[d,v,l],[p,v,l],[d,m,l],[p,m,l],[0,0,-1]],[[p,v,g],[d,v,g],[p,m,g],[d,m,g],[0,0,1]],[[d,v,g],[d,v,l],[d,m,g],[d,m,l],[-1,0,0]],[[p,v,l],[p,v,g],[p,m,l],[p,m,g],[1,0,0]],[[d,m,l],[p,m,l],[d,m,g],[p,m,g],[0,1,0]],[[d,v,g],[p,v,g],[d,v,l],[p,v,l],[0,-1,0]]];for(let w of b){let M=r.vert(w[0],w[4],x),k=r.vert(w[1],w[4],x),z=r.vert(w[2],w[4],x),P=r.vert(w[3],w[4],x);r.tri(M,k,z),r.tri(k,P,z)}},r.surface=(d,v,l,p)=>{p=p||{};let m=.001,g=M=>Math.min(1,Math.max(0,M)),x=[],b=[];for(let M=0;M<=v;M++){let k=[],z=[];for(let P=0;P<=l;P++){let R=M/v,U=P/l,q=d(R,U),Q=Math.min(1-m,Math.max(m,R)),D=p.wrapV?U:Math.min(1-m,Math.max(m,U)),V=y0(d(g(Q+m),D),d(g(Q-m),D)),me=p.wrapV?D+m:g(D+m),Ge=p.wrapV?D-m:g(D-m),Re=y0(d(Q,me),d(Q,Ge)),be=cl(V,Re);yu(be)<1e-14&&(be=p.inside?y0(q,p.inside(R,U)):[0,1,0]),be=ka(be),p.inside&&Wf(be,y0(q,p.inside(R,U)))<0&&(be=a0(be,-1));let re=p.mat?p.mat(R,U,q):null;k.push(r.vert(q,be,re)),p.double&&z.push(r.vert(q,a0(be,-1),re))}x.push(k),b.push(z)}let w=M=>{for(let k=0;k<v;k++)for(let z=0;z<l;z++){let P=M[k][z],R=M[k+1][z],U=M[k][z+1],q=M[k+1][z+1];r.tri(P,R,U),r.tri(R,q,U)}};w(x),p.double&&w(b)},r.ellipsoid=(d,v,l,p,m)=>{m=m||{};let g=m.warp||null;r.surface((x,b)=>{let w=x*Math.PI,M=b*Math.PI*2,k=g?g(x,b):1;return[d[0]+v[0]*k*Math.sin(w)*Math.cos(M),d[1]+v[1]*k*Math.cos(w),d[2]+v[2]*k*Math.sin(w)*Math.sin(M)]},l||10,p||14,{wrapV:!0,inside:()=>d,mat:m.mat})},r.tube=(d,v,l,p,m)=>{m=m||{};let g=40,x=[],b=null;for(let k=0;k<=g;k++){let z=k/g,P=qi(d,Math.max(0,z-.01)),R=qi(d,Math.min(1,z+.01)),U=ka(y0(R,P)),q;if(b)q=ka(y0(b,a0(U,Wf(b,U))));else{let Q=Math.abs(U[1])<.9?[0,1,0]:[1,0,0];q=ka(cl(U,Q))}x.push({N:q,B:ka(cl(U,q))}),b=q}let w=k=>{let z=Math.min(Math.max(k,0),1)*g,P=Math.min(g-1,Math.floor(z)),R=z-P,U=x[P],q=x[P+1];return{N:ka(b0(a0(U.N,1-R),a0(q.N,R))),B:ka(b0(a0(U.B,1-R),a0(q.B,R)))}},M=m.squash||[1,1];r.surface((k,z)=>{let P=qi(d,k),R=w(k),U=v(k),q=z*Math.PI*2;return b0(P,b0(a0(R.N,Math.cos(q)*U*M[0]),a0(R.B,Math.sin(q)*U*M[1])))},l||12,p||8,{wrapV:!0,inside:k=>qi(d,k),mat:m.mat})},r.lathe=(d,v,l,p,m)=>{m=m||{};let g=[];for(let x=0;x<d.length-1;x++){let b=d[x+1][0]-d[x][0],w=d[x+1][1]-d[x][1];g.push(ka([w,-b,0]))}for(let x=0;x<d.length-1;x++){let b=d[x],w=d[x+1],M=x===0||b[2]===1,k=x===d.length-2||w[2]===1,z=M?g[x]:ka(b0(g[x-1],g[x])),P=k?g[x]:ka(b0(g[x],g[x+1])),R=[],U=[];for(let q=0;q<=p;q++){let Q=q/p*Math.PI*2,D=Math.cos(Q),V=Math.sin(Q),me=m.mat?m.mat(Q,b[1]):null,Ge=m.mat?m.mat(Q,w[1]):null;R.push(r.vert([v+b[0]*D,b[1],l+b[0]*V],[z[0]*D,z[1],z[0]*V],me)),U.push(r.vert([v+w[0]*D,w[1],l+w[0]*V],[P[0]*D,P[1],P[0]*V],Ge))}for(let q=0;q<p;q++)r.tri(R[q],R[q+1],U[q]),r.tri(R[q+1],U[q+1],U[q])}},r}Cm.exports={createBuilder:B4,catmull:qi,curve1:U4,sub:y0,add:b0,mul:a0,dot:Wf,cross:cl,norm:ka,len:yu}});var Fm=ke((uA,$m)=>{"use strict";var{norm:Vf,add:Xf,mul:G0,sub:j4,cross:Pm}=Ps(),Im=Math.PI*2,W4=(e,t,o)=>{let n=Math.min(1,Math.max(0,(o-e)/(t-e)));return n*n*(3-2*n)};function V4(e){let t=e>>>0;return()=>{t|=0,t=t+1831565813|0;let o=Math.imul(t^t>>>15,1|t);return o=o+Math.imul(o^o>>>7,61|o)^o,((o^o>>>14)>>>0)/4294967296}}function X4(e,t,o,n,r,a){let s=(d,v)=>[7,d*a,v];e.curMat=[0,0,0],e.box(t-a*1.36,n,o-a*1.36,t+a*1.36,n+.22,o+a*1.36),e.lathe([[a*1.24,n+.22,1],[a*1.3,n+.27],[a*1.31,n+.32],[a*1.26,n+.37,1],[a*1.1,n+.4],[a*1.14,n+.44,1],[a*1.18,n+.47],[a*1.1,n+.52,1],[a*.96,n+.55]],t,o,56,{mat:s});let i=n+.55,c=r-i,h=20,f=6,u=a*.075;return e.surface((d,v)=>{let l=i+d*c,p=a*(.96-.12*d),m=v*Im,g=v*h%1,x=p-u*4*g*(1-g);return[t+x*Math.cos(m),l,o+x*Math.sin(m)]},10,h*f,{wrapV:!0,inside:d=>[t,i+d*c,o],mat:(d,v)=>[7,v*Im*a,i+d*c]}),e.lathe([[a*.8,r-.02,1],[a*.9,r+.02],[a*.9,r+.07,1],[a*.82,r+.09,1],[a*.86,r+.13],[a*1.06,r+.2],[a*1.22,r+.28],[a*1.28,r+.33,1]],t,o,56,{mat:s}),e.curMat=[0,0,0],e.box(t-a*1.42,r+.33,o-a*1.42,t+a*1.42,r+.53,o+a*1.42),r+.53}function Y4(e,t,o){e.curMat=[1,0,0],e.lathe([[t*1.1,0,1],[t*1.1,o*.14,1],[t*1.04,o*.14,1],[t*1.04,o*.2],[t*.97,o*.26,1],[t*.95,o*.26,1],[t*.95,o*.8,1],[t*.98,o*.8,1],[t*1.03,o*.86],[t*1.05,o*.92,1],[t*1.05,o,1],[t*.5,o,1],[0,o]],0,0,72)}function K4(e,t,o,n,r){e.save(),e.translate(t,0,o),Y4(e,n,r),e.restore()}function Q4(e,t,o,n,r,a){let s=V4(n),i=a?Vf([a[0],0,a[1]]):null;e.save(),e.translate(t,0,o),e.scale(r||1),e.curMat=[3,0,0],e.lathe([[.17,0,1],[.2,.02],[.28,.13],[.36,.3],[.395,.47],[.38,.62],[.32,.74],[.29,.8],[.292,.82,1],[.325,.84],[.335,.88,1],[.3,.905,1],[.275,.895,1],[.272,.85]],0,0,48),e.curMat=[5,0,0],e.lathe([[.272,.85,1],[.1,.868],[0,.872]],0,0,24);let c=11,h=.86;for(let f=0;f<c;f++){let u=f>=c-2,d=f*2.399963+s()*.5,v=[Math.cos(d),0,Math.sin(d)],l=[-Math.sin(d),0,Math.cos(d)],p=f*.618%1,m=u?.06+s()*.06:.12+.62*p,g=1;if(i){let be=v[0]*i[0]+v[2]*i[2];g=.25+.75*W4(-.7,.5,be),m*=g}let x=u?1.1+s()*.25:.85+.55*(1-p*.55)+s()*.15,b=u?1+s()*.2:.95+s()*.28,w=u?.055:.215+s()*.05,M=.04+s()*.05,k=[v[0]*M,h,v[2]*M],z=[k[0]+v[0]*Math.sin(m)*x*.92,k[1]+Math.cos(m)*x,k[2]+v[2]*Math.sin(m)*x*.92],P=[k[0]+v[0]*Math.sin(m*.5)*x*.45,k[1]+x*.5,k[2]+v[2]*Math.sin(m*.5)*x*.45];e.curMat=[4,0,0],e.tube([k,P,z],be=>.02-.008*be,8,7);let R=24,U=m*.9+.05,q=m+(u?.12:(.95+.45*p)*(.35+.65*g)),Q=[z],D=[],V=z;for(let be=0;be<R;be++){let re=be/R,Ue=U+(q-U)*re*re,xt=[v[0]*Math.sin(Ue),Math.cos(Ue),v[2]*Math.sin(Ue)];D.push(xt),V=Xf(V,G0(xt,b/R)),Q.push(V)}D.push(D[D.length-1]);let me=be=>{let re=be*R,Ue=Math.min(R-1,Math.floor(re)),xt=re-Ue;return Xf(G0(Q[Ue],1-xt),G0(Q[Ue+1],xt))},Ge=be=>{let re=be*R,Ue=Math.min(R,Math.floor(re)),xt=Math.min(R,Ue+1),at=re-Ue;return Vf(Xf(G0(D[Ue],1-at),G0(D[xt],at)))},Re=(s()-.5)*.5;e.curMat=[2,0,0],e.surface((be,re)=>{let Ue=re*2-1,xt=me(be),at=Ge(be),Ot=Re*be,Et=Xf(G0(l,Math.cos(Ot)),G0(Pm(at,l),Math.sin(Ot)));Et=Vf(j4(Et,G0(at,Et[0]*at[0]+Et[1]*at[1]+Et[2]*at[2])));let no=Vf(Pm(Et,at)),bo=w*Math.pow(Math.sin(Math.PI*Math.pow(be,.72)),.85),Yo=.3*bo*Math.abs(Ue)+.012*Math.sin(be*40+Ue*2)*Math.abs(Ue)*(u?0:1),tt=-.1*bo*Ue*Ue*Ue*Ue,zt=Yo+tt;return[xt[0]+Et[0]*Ue*bo+no[0]*zt,xt[1]+Et[1]*Ue*bo+no[1]*zt,xt[2]+Et[2]*Ue*bo+no[2]*zt]},14,8,{double:!0,mat:(be,re)=>[2,re*2-1,be]})}e.restore()}$m.exports={addFlutedColumn:X4,addStatue:K4,addPlant:Q4}});var H0=ke((dA,Hm)=>{"use strict";var Ne={xc:7,r:2.5,spring:4.7};Ne.x0=Ne.xc-Ne.r;Ne.x1=Ne.xc+Ne.r;Ne.top=Ne.spring+Ne.r;var Ir=.06,sn=.1,qm=.08,Yf=Ne.r,Kf=[Ne.x0+Yf/3,Ne.x0+2*Yf/3,Ne.xc+Yf/3,Ne.xc+2*Yf/3],Di=.28,bu=[.95,1.65,2.35,3.05,3.75],Dm=[1.05,1.8],ll=[8,0,0],sa=[0,0,0];function Sa(e,t,o,n,r,a,s,i){e.box(Math.min(t,r),Math.min(o,a),Math.min(n,s),Math.max(t,r),Math.max(o,a),Math.max(n,s),i)}function Gi(e,t,o,n,r,a,s){let i=e.vert(t,a,s),c=e.vert(o,a,s),h=e.vert(n,a,s),f=e.vert(r,a,s);e.tri(i,c,h),e.tri(i,h,f)}function Qf(e,t,o,n,r,a,s=48,i=0,c=Math.PI){let h=(f,u,d)=>[Ne.xc+u*Math.cos(f),Ne.spring+u*Math.sin(f),d];for(let f=0;f<s;f++){let u=i+(c-i)*f/s,d=i+(c-i)*(f+1)/s,v=(u+d)/2;Gi(e,h(u,t,r),h(d,t,r),h(d,o,r),h(u,o,r),[0,0,1],a),Gi(e,h(u,o,n),h(d,o,n),h(d,t,n),h(u,t,n),[0,0,-1],a),Gi(e,h(u,t,n),h(d,t,n),h(d,t,r),h(u,t,r),[-Math.cos(v),-Math.sin(v),0],a),Gi(e,h(d,o,n),h(u,o,n),h(u,o,r),h(d,o,r),[Math.cos(v),Math.sin(v),0],a)}}function Z4(e){let n=a=>[Ne.xc+Ne.r*Math.cos(a),Ne.spring+Ne.r*Math.sin(a)],r=a=>{let s=Math.cos(a),i=Math.sin(a),c=Math.abs(s)>1e-6?Ne.r/Math.abs(s):1/0,h=i>1e-6?(8-Ne.spring)/i:1/0,f=Math.min(c,h);return[Math.min(Ne.x1,Math.max(Ne.x0,Ne.xc+s*f)),Math.min(8,Ne.spring+i*f)]};for(let a=0;a<48;a++){let s=Math.PI*a/48,i=Math.PI*(a+1)/48,c=n(s),h=n(i),f=r(s),u=r(i);for(let[v,l]of[[.35,1],[-.35,-1]])Gi(e,[c[0],c[1],v],[h[0],h[1],v],[u[0],u[1],v],[f[0],f[1],v],[0,0,l],sa);let d=(s+i)/2;Gi(e,[c[0],c[1],-.35],[h[0],h[1],-.35],[h[0],h[1],.35],[c[0],c[1],.35],[-Math.cos(d),-Math.sin(d),0],sa)}}function J4(e){Sa(e,-.35,0,-.35,Ne.x0,8,.35,sa),Sa(e,Ne.x1,0,-.35,14+.35,8,.35,sa),Z4(e),Gm(e)}function Gm(e){Sa(e,Ne.x0-.32,.3,.35,Ne.x0,Ne.spring,.35+.07,sa),Sa(e,Ne.x1,.3,.35,Ne.x1+.32,Ne.spring,.35+.07,sa),Sa(e,Ne.x0-.32-.05,0,.35,Ne.x0,.3,.35+.07+.04,sa),Sa(e,Ne.x1,0,.35,Ne.x1+.32+.05,.3,.35+.07+.04,sa),Sa(e,Ne.x0-.32-.06,Ne.spring-.12,.35,Ne.x0,Ne.spring,.35+.07+.05,sa),Sa(e,Ne.x1,Ne.spring-.12,.35,Ne.x1+.32+.06,Ne.spring,.35+.07+.05,sa),Qf(e,Ne.r,Ne.r+.32,.35,.35+.07,sa),Qf(e,Ne.r+.32,Ne.r+.32+.06,.35,.35+.07+.03,sa),Sa(e,Ne.xc-.22,Ne.top-.08,.35,Ne.xc+.22,Ne.top+.32+.12,.35+.07+.06,sa)}function e_(e,t){t=t||"all";let o=t==="all",n=o||t==="fixed",r=-qm/2,a=qm/2,s=(d,v,l,p,m=0)=>Sa(e,d-m,v,r,l+m,p,a,ll),i=d=>Ne.spring+Math.sqrt(Math.max(0,Ne.r*Ne.r-(d-Ne.xc)*(d-Ne.xc))),c=t==="right"?Ne.xc:Ne.x0,h=t==="left"?Ne.xc:Ne.x1,f=d=>o||t==="left"&&d<Ne.xc||t==="right"&&d>Ne.xc,u=o?null:Ne.spring-.06;if(n){s(Ne.x0,0,Ne.x0+sn,Ne.spring),s(Ne.x1-sn,0,Ne.x1,Ne.spring),Qf(e,Ne.r-sn,Ne.r,r,a,ll,64),s(Ne.x0,0,Ne.x1,.05),s(Ne.x0,Ne.spring-.06,Ne.x1,Ne.spring+.06);for(let d of Dm)Qf(e,d-Ir/2,d+Ir/2,r,a,ll,48)}if(o){s(Ne.x0,0,Ne.x1,Di),s(Ne.xc-sn/2,0,Ne.xc+sn/2,Ne.top-sn*.5);for(let d of Kf)s(d-Ir/2,Di,d+Ir/2,i(d)-sn*.5);for(let d of bu)s(Ne.x0,d-Ir/2,Ne.x1,d+Ir/2)}else if(t==="fixed"){s(Ne.xc-sn/2,Ne.spring+.06,Ne.xc+sn/2,Ne.top-sn*.5);for(let d of Kf)s(d-Ir/2,Ne.spring+.06,d+Ir/2,i(d)-sn*.5)}else{let d=t==="left"?Ne.x0+sn:Ne.x1-sn;s(Math.min(d,d+(t==="left"?sn*.8:-sn*.8)),.05,Math.max(d,d+(t==="left"?sn*.8:-sn*.8)),u),s(c,.05,h,Di),s(c,u-.07,h,u);let v=t==="left"?Ne.xc-sn/2:Ne.xc;s(v,.05,v+sn/2,u);for(let l of Kf)f(l)&&s(l-Ir/2,Di,l+Ir/2,u-.07);for(let l of bu)s(c,l-Ir/2,h,l+Ir/2)}for(let d of[-1,1]){let v=Ne.xc+d*.16;f(v)&&(Sa(e,v-.02,1.05,a,v+.02,1.13,a+.06,ll),Sa(e,v-(d>0?0:.14),1.07,a+.05,v+(d>0?.14:0),1.11,a+.08,ll))}}function t_(e){e=e||"all";let t=[],o=0,{x0:n,x1:r,xc:a,r:s,spring:i}=Ne;if(e!=="fixed"){let h=e==="right"?a:n,f=e==="left"?a:r;if(t.push([h,0,o],[f,0,o],[f,i,o],[h,0,o],[f,i,o],[h,i,o]),e!=="all")return t}let c=48;for(let h=0;h<c;h++){let f=Math.PI*h/c,u=Math.PI*(h+1)/c;t.push([a,i,o],[a+s*Math.cos(f),i+s*Math.sin(f),o],[a+s*Math.cos(u),i+s*Math.sin(u),o])}return t}var Fo=e=>e.toFixed(4);function o_(){let e=Kf.map(n=>`vb = max(vb, barCover(abs(q.x - ${Fo(n)}), ${Fo(Ir/2)}, soft));`).join(`
		`),t=bu.map(n=>`hb = max(hb, barCover(abs(q.y - ${Fo(n)}), ${Fo(Ir/2)}, soft));`).join(`
		`),o=Dm.map(n=>`ab = max(ab, barCover(abs(rr - ${Fo(n)}), ${Fo(Ir/2)}, soft));`).join(`
		`);return`
	float barCover(float d, float hw, float soft) {
		return 1.0 - smoothstep(hw - soft, hw + soft, d);
	}

	// how open the doorway is at a point (x, y) on a plane, 0..1
	float doorOpen(vec2 q, float soft) {
		float side = smoothstep(${Fo(Ne.x0)} - soft, ${Fo(Ne.x0)} + soft, q.x)
		           * (1.0 - smoothstep(${Fo(Ne.x1)} - soft, ${Fo(Ne.x1)} + soft, q.x));
		float above = smoothstep(-soft, soft, q.y);
		float rr = length(q - vec2(${Fo(Ne.xc)}, ${Fo(Ne.spring)}));
		float arch = q.y < ${Fo(Ne.spring)} ? 1.0 : 1.0 - smoothstep(${Fo(Ne.r)} - soft, ${Fo(Ne.r)} + soft, rr);
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
		float rr = length(q - vec2(${Fo(Ne.xc)}, ${Fo(Ne.spring)}));
		float vb = barCover(abs(q.x - ${Fo(Ne.xc)}), ${Fo(sn/2)}, soft);
		${e}
		float hb = barCover(abs(q.y - ${Fo(Ne.spring)}), 0.06, soft);
		hb = max(hb, 1.0 - smoothstep(${Fo(Di)} - soft, ${Fo(Di)} + soft, q.y));
		float hRows = 0.0;
		{
			float hb2 = 0.0;
			${t.replace(/hb = max\(hb,/g,"hb2 = max(hb2,")}
			hRows = q.y < ${Fo(Ne.spring)} ? hb2 : 0.0;
		}
		float ab = 0.0;
		${o}
		ab = q.y > ${Fo(Ne.spring)} ? ab : 0.0;
		float frame = max(
			barCover(abs(q.x - ${Fo(Ne.x0+sn/2)}), ${Fo(sn/2)}, soft),
			barCover(abs(q.x - ${Fo(Ne.x1-sn/2)}), ${Fo(sn/2)}, soft));
		frame = q.y < ${Fo(Ne.spring)} ? frame : barCover(abs(rr - ${Fo(Ne.r-sn/2)}), ${Fo(sn/2)}, soft);
		float cover = max(max(max(vb, hb), max(hRows, ab)), frame);
		return open * (1.0 - cover * 0.92);
	}`}Hm.exports={addEntranceWall:J4,addSurround:Gm,addFrames:e_,glassPanes:t_,doorLightGLSL:o_,DOOR:Ne,WALL:.35}});var Ui=ke((pA,Xm)=>{"use strict";var $s=1.1583333333333334,Fs=(13.05-8*.16)/9,_u=$s+.16,Mu=Fs+.16,_0=14/2-7.75/2,ia=15,fl=_0+7.75,w0=ia+13.05,ca=.3,M0={y:8+.18,inset:.15},Is={y:8+.36,inset:ca},ku=8+.2,hl=8+.62,Su=8+.9,Eu=.016,Wm=.28,Vm=.66,n_=(()=>{let e=[-.15,1,.3],t=Math.hypot(e[0],e[1],e[2]);return e.map(o=>o/t)})(),r_=(()=>{let e=[.42,1,-.32],t=Math.hypot(e[0],e[1],e[2]);return e.map(o=>o/t)})(),a_=[9,0,0],pr=[10,0,0];function Hi(e,t,o,n,r,a,s){let i=e.vert(t,a,s),c=e.vert(o,a,s),h=e.vert(n,a,s),f=e.vert(r,a,s);e.tri(i,c,h),e.tri(i,h,f)}function $r(e,t,o,n,r,a,s){Hi(e,[t,a,o],[n,a,o],[n,a,r],[t,a,r],[0,-1,0],s)}function wu(e,t,o,n,r,a,s,i){Hi(e,[t,a,o],[n,a,o],[n,s,o],[t,s,o],[0,0,1],i),Hi(e,[n,a,r],[t,a,r],[t,s,r],[n,s,r],[0,0,-1],i),Hi(e,[t,a,r],[t,a,o],[t,s,o],[t,s,r],[1,0,0],i),Hi(e,[n,a,o],[n,a,r],[n,s,r],[n,s,o],[-1,0,0],i)}function Um(e,t,o,n,r){$r(e,t[0],t[1],t[2],o[1],n,r),$r(e,t[0],o[3],t[2],t[3],n,r),$r(e,t[0],o[1],o[0],o[3],n,r),$r(e,o[2],o[1],t[2],o[3],n,r)}var Bm=e=>_0+e*_u,jm=e=>ia+e*Mu;function s_(e,t,o=48){let n=[_0-ca,ia-ca,fl+ca,w0+ca],r=(h,f)=>[h[0]+f,h[1]+f,h[2]-f,h[3]-f],a=r(n,M0.inset),s=r(n,Is.inset);$r(e,0,0,14,n[1],8,t),$r(e,0,n[3],14,o,8,t),$r(e,0,n[1],n[0],n[3],8,t),$r(e,n[2],n[1],14,n[3],8,t);let i=.06,c=.06;e.box(n[0]-i,8-c,n[1]-i,n[2]+i,8,n[1],pr),e.box(n[0]-i,8-c,n[3],n[2]+i,8,n[3]+i,pr),e.box(n[0]-i,8-c,n[1],n[0],8,n[3],pr),e.box(n[2],8-c,n[1],n[2]+i,8,n[3],pr),wu(e,...n.slice(0,2),...n.slice(2),8,M0.y,pr),Um(e,n,a,M0.y,pr),wu(e,...a.slice(0,2),...a.slice(2),M0.y,Is.y,pr),Um(e,a,s,Is.y,pr);for(let h=1;h<6;h++){let f=Bm(h)-.16;e.box(f,ku,ia,f+.16,Is.y,w0,pr)}for(let h=1;h<9;h++){let f=jm(h)-.16;e.box(_0,ku,f,fl,Is.y,f+.16,pr)}for(let h=0;h<9;h++)for(let f=0;f<6;f++){let u=Bm(f),d=jm(h);wu(e,u,d,u+$s,d+Fs,Is.y,Su,pr),$r(e,u,d,u+$s,d+Fs,Su,a_),i_(e,u+$s/2,d+Fs/2,$s/2,Fs/2)}}function i_(e,t,o,n,r){let a=hl,s=Eu;$r(e,t-n,o-s,t+n,o+s,a,pr),$r(e,t-s,o-r,t+s,o+r,a,pr);for(let i of[1,-1]){let c=Math.hypot(n,r),h=n/c,f=i*r/c,u=-f*s,d=h*s;Hi(e,[t-h*c+u,a,o-f*c+d],[t+h*c+u,a,o+f*c+d],[t+h*c-u,a,o+f*c-d],[t-h*c-u,a,o-f*c-d],[0,-1,0],pr)}for(let i of[Wm,Vm]){let c=i*n,h=i*r;$r(e,t-c-s,o-h-s,t+c+s,o-h+s,a,pr),$r(e,t-c-s,o+h-s,t+c+s,o+h+s,a,pr),$r(e,t-c-s,o-h+s,t-c+s,o+h-s,a,pr),$r(e,t+c-s,o-h+s,t+c+s,o+h-s,a,pr)}}var Wt=e=>e.toFixed(4);function c_(){return`
	// by day the sun, high and a little towards the entrance; by night
	// the moon, lower and from the other side, so its squares of light
	// reach across the floor to the foot of the wall. (When the light is
	// switched, the squares slide from one to the other.)
	const vec3 SKY_SUN_DAY = vec3(${n_.map(Wt).join(", ")});
	const vec3 SKY_MOON = vec3(${r_.map(Wt).join(", ")});
	vec3 skySun() { return normalize(mix(SKY_SUN_DAY, SKY_MOON, night)); }
	#define SKY_SUN skySun()

	float rectOpen(vec2 q, vec4 r, float soft) {
		vec2 lo = smoothstep(r.xy - soft, r.xy + soft, q);
		vec2 hi = 1.0 - smoothstep(r.zw - soft, r.zw + soft, q);
		return lo.x * lo.y * hi.x * hi.y;
	}

	// inside a pane (not on a beam)? 0..1
	float paneOpen(vec2 q, float soft) {
		vec2 rel = q - vec2(${Wt(_0)}, ${Wt(ia)});
		vec2 pitch = vec2(${Wt(_u)}, ${Wt(Mu)});
		vec2 cell = floor(rel / pitch);
		if (cell.x < 0.0 || cell.y < 0.0 || cell.x > ${Wt(5)} || cell.y > ${Wt(8)}) return 0.0;
		vec2 loc = rel - cell * pitch;
		return rectOpen(loc, vec4(0.0, 0.0, ${Wt($s)}, ${Wt(Fs)}), soft);
	}

	float barCov(float d, float soft) {
		return 1.0 - smoothstep(${Wt(Eu)} - soft, ${Wt(Eu)} + soft, d);
	}

	// sunlight reaching point p through the skylight, 0..1
	float skylightAt(vec3 p) {
		if (p.y > ${Wt(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q0 = (p + L * ((${Wt(8)} - p.y) / L.y)).xz;
		vec2 q1 = (p + L * ((${Wt(M0.y)} - p.y) / L.y)).xz;
		vec2 qb = (p + L * ((${Wt(ku)} - p.y) / L.y)).xz;
		vec2 q2 = (p + L * ((${Wt(Is.y)} - p.y) / L.y)).xz;
		float tG = (${Wt(hl)} - p.y) / L.y;
		vec2 qg = (p + L * tG).xz;
		vec2 qt = (p + L * ((${Wt(Su)} - p.y) / L.y)).xz;
		float soft = 0.004 + 0.007 * tG;
		float open = rectOpen(q0, vec4(${Wt(_0-ca)}, ${Wt(ia-ca)}, ${Wt(fl+ca)}, ${Wt(w0+ca)}), soft)
		           * rectOpen(q1, vec4(${Wt(_0-ca+M0.inset)}, ${Wt(ia-ca+M0.inset)}, ${Wt(fl+ca-M0.inset)}, ${Wt(w0+ca-M0.inset)}), soft)
		           * paneOpen(qb, soft) * paneOpen(q2, soft) * paneOpen(qt, soft);
		if (open <= 0.0) return 0.0;
		// the glazing, measured from the centre of this pane
		vec2 rel = qg - vec2(${Wt(_0)}, ${Wt(ia)});
		vec2 pitch = vec2(${Wt(_u)}, ${Wt(Mu)});
		vec2 paneHalf = vec2(${Wt($s/2)}, ${Wt(Fs/2)});
		vec2 c = rel - floor(rel / pitch) * pitch - paneHalf;
		vec2 ac = abs(c);
		vec2 an = ac / paneHalf;                       // 0 at the centre, 1 at the pane's edge
		float hm = min(paneHalf.x, paneHalf.y);
		float ring = max(an.x, an.y);
		float cover = max(barCov(ac.x, soft), barCov(ac.y, soft));
		cover = max(cover, barCov(abs(an.x - an.y) * hm * 0.7071, soft));
		cover = max(cover, barCov(abs(ring - ${Wt(Wm)}) * hm, soft));
		cover = max(cover, barCov(abs(ring - ${Wt(Vm)}) * hm, soft));
		return open * (1.0 - cover * 0.9);
	}

	// the same light for the beams in the air: the whole opening glows a
	// little, and the panes and bars show in it, softly
	float skylightVol(vec3 p) {
		if (p.y > ${Wt(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q = (p + L * ((${Wt(hl)} - p.y) / L.y)).xz;
		float open = rectOpen(q, vec4(${Wt(_0)}, ${Wt(ia)}, ${Wt(fl)}, ${Wt(w0)}), 0.25);
		if (open <= 0.0) return 0.0;
		return open * (0.13 + 0.87 * skylightAt(p));
	}

	// light thrown back up by the bright squares on the floor: strongest
	// on what stands beside them and faces them (the lower walls, the
	// pillars, the statues, the ceiling above), fading with distance
	float skylightBounce(vec3 p, vec3 n) {
		if (p.x > 14.2 || p.x < -0.4) return 0.0;
		vec3 L = SKY_SUN;
		vec2 c = vec2(${Wt(14/2)}, ${Wt((ia+w0)/2)}) - L.xz * (${Wt(hl)} / L.y);
		vec2 d = max(abs(p.xz - c) - vec2(${Wt(7.75/2)}, ${Wt(13.05/2)}), 0.0);
		float fall = 1.0 / (1.0 + 0.09 * (dot(d, d) + p.y * p.y * 0.6));
		vec3 to = normalize(vec3(c.x, -0.4, c.y) - p);
		return fall * (0.3 + 0.7 * max(dot(n, to), 0.0));
	}

	// a soft daylight glow under the lantern
	float skylightGlow(vec3 p) {
		float z = smoothstep(${Wt(ia-3)}, ${Wt(ia+2)}, p.z)
		        * (1.0 - smoothstep(${Wt(w0-2)}, ${Wt(w0+3)}, p.z));
		float x = 1.0 - 0.35 * smoothstep(${Wt(7.75/2)}, ${Wt(14/2)}, abs(p.x - ${Wt(14/2)}));
		return z * x;
	}`}Xm.exports={addSkylight:s_,skylightGLSL:c_,Z_START:ia,Z_END:w0,GLASS_Y:hl,HEIGHT:8}});var br=ke((vA,Jm)=>{"use strict";var ji=H0(),Lu=8,cn=.35,Je={x0:13.65,x1:38.12,z0:41,z1:47.2,zc:44.1,hallEnd:50.65,spring:5.6,crown:Lu},Ym=(Je.z1-Je.z0)/2,Au=Je.crown-Je.spring,Tu=(Au*Au+Ym*Ym)/(2*Au),Nu=Je.crown-Tu;function Bi(e){let t=e-Je.zc;return Nu+Math.sqrt(Math.max(0,Tu*Tu-t*t))}var $t={first:17.43,pitch:4.4,count:5,halfW:1.2,sill:.75,spring:4.3},Ga=Array.from({length:$t.count},(e,t)=>$t.first+t*$t.pitch),Qm=Ga.slice(1).map(e=>e-$t.pitch/2),l_=[Ga[0],Ga[2],Ga[4]],Jf=[Ga[1],Ga[3]],Yr={r:1.3,sill:.62,spring:3.3},Bo=[0,0,0],ul=[11,0,0],U0=[10,0,0],dl=[8,0,0];function nr(e,t,o,n,r,a,s){let i=e.vert(t,a,s),c=e.vert(o,a,s),h=e.vert(n,a,s),f=e.vert(r,a,s);e.tri(i,c,h),e.tri(i,h,f)}function Kr(e,t,o,n,r,a,s,i){e.box(Math.min(t,r),Math.min(o,a),Math.min(n,s),Math.max(t,r),Math.max(o,a),Math.max(n,s),i)}function pl(e,t){let{u0:o,u1:n,w0:r,w1:a,top:s,holes:i,mat:c}=t,h=new Set([o,n]);for(let p of i){h.add(p.u0),h.add(p.u1);let m=Math.max(8,Math.ceil((p.u1-p.u0)/(p.step||.08)));for(let g=1;g<m;g++)h.add(p.u0+(p.u1-p.u0)*g/m)}for(let p of t.cuts||[])h.add(p);let f=t.topStep||.5;for(let p=o;p<n;p+=f)h.add(p);let u=[...h].filter(p=>p>=o-1e-9&&p<=n+1e-9).sort((p,m)=>p-m),d=(p,m)=>p.bot?p.bot(m):p.bottom,v=(p,m)=>{let g=s(p),x=m.map(M=>[Math.max(0,d(M,p)),Math.min(M.head(p),g)]).filter(M=>M[1]>M[0]).sort((M,k)=>M[0]-k[0]),b=[],w=0;for(let M of x)M[0]>w+1e-6&&b.push([w,M[0]]),w=Math.max(w,M[1]);return g>w+1e-6&&b.push([w,g]),b},l=(p,m,g)=>[p,m,g];for(let p=0;p<u.length-1;p++){let m=u[p],g=u[p+1],x=(m+g)/2,b=i.filter(R=>x>R.u0&&x<R.u1),w=b.length?Math.max(m,Math.max(...b.map(R=>R.u0))+1e-7):m,M=b.length?Math.min(g,Math.min(...b.map(R=>R.u1))-1e-7):g,k=v(w,b),z=v(M,b),P=Math.min(k.length,z.length);for(let R=0;R<P;R++){let[U,q]=k[R],[Q,D]=z[R];q-U<1e-6&&D-Q<1e-6||(nr(e,l(m,U,a),l(g,Q,a),l(g,D,a),l(m,q,a),[0,0,1],c),t.frontOnly||nr(e,l(g,Q,r),l(m,U,r),l(m,q,r),l(g,D,r),[0,0,-1],c))}}t.noEnds||(nr(e,l(o,0,r),l(o,0,a),l(o,s(o),a),l(o,s(o),r),[-1,0,0],c),nr(e,l(n,0,a),l(n,0,r),l(n,s(n),r),l(n,s(n),a),[1,0,0],c));for(let p of i){if(p.noReveal)continue;let m=p.mat||t.revealMat||c,g=Math.max(0,d(p,p.u0+1e-7)),x=Math.max(0,d(p,p.u1-1e-7)),b=Math.min(p.head(p.u0+1e-7),s(p.u0)),w=Math.min(p.head(p.u1-1e-7),s(p.u1));b>g+1e-6&&nr(e,l(p.u0,g,a),l(p.u0,g,r),l(p.u0,b,r),l(p.u0,b,a),[1,0,0],m),w>x+1e-6&&nr(e,l(p.u1,x,r),l(p.u1,x,a),l(p.u1,w,a),l(p.u1,w,r),[-1,0,0],m);let M=Math.max(8,Math.ceil((p.u1-p.u0)/(p.step||.06)));for(let k=0;k<M;k++){let z=p.u0+(p.u1-p.u0)*k/M,P=p.u0+(p.u1-p.u0)*(k+1)/M,R=Math.max(z,p.u0+1e-7),U=Math.min(P,p.u1-1e-7),q=Math.min(p.head(R),s(z)),Q=Math.min(p.head(U),s(P));if(!(q>=s(z)-1e-6&&Q>=s(P)-1e-6)){let me=P-z,Ge=Q-q,Re=Math.hypot(me,Ge)||1;nr(e,l(z,q,r),l(P,Q,r),l(P,Q,a),l(z,q,a),[Ge/Re,-me/Re,0],m)}let D=d(p,R),V=d(p,U);if(D>1e-6||V>1e-6){let me=P-z,Ge=V-D,Re=Math.hypot(me,Ge)||1;nr(e,l(P,V,r),l(z,D,r),l(z,D,a),l(P,V,a),[-Ge/Re,me/Re,0],m)}}}}var zu=(e,t,o)=>n=>{let r=n-e;return o+Math.sqrt(Math.max(0,t*t-r*r))};function f_(e,t){let o=Yr.r,n=Yr.sill,r=Yr.spring,a=Je.z0,s=24,i=(v,l,p)=>[t+Math.cos(v)*l,p,a-Math.sin(v)*l];for(let v=0;v<s;v++){let l=Math.PI*v/s,p=Math.PI*(v+1)/s,m=[-Math.cos(l),0,Math.sin(l)],g=[-Math.cos(p),0,Math.sin(p)],x=[e.vert(i(l,o,n),m,Bo),e.vert(i(p,o,n),g,Bo),e.vert(i(p,o,r),g,Bo),e.vert(i(l,o,r),m,Bo)];e.tri(x[0],x[1],x[2]),e.tri(x[0],x[2],x[3])}let c=12,h=(v,l)=>[t+Math.cos(v)*Math.cos(l)*o,r+Math.sin(l)*o,a-Math.sin(v)*Math.cos(l)*o],f=(v,l)=>[-Math.cos(v)*Math.cos(l),-Math.sin(l),Math.sin(v)*Math.cos(l)];for(let v=0;v<s;v++)for(let l=0;l<c;l++){let p=Math.PI*v/s,m=Math.PI*(v+1)/s,g=Math.PI/2*l/c,x=Math.PI/2*(l+1)/c,b=[e.vert(h(p,g),f(p,g),U0),e.vert(h(m,g),f(m,g),U0),e.vert(h(m,x),f(m,x),U0),e.vert(h(p,x),f(p,x),U0)];e.tri(b[0],b[1],b[2]),e.tri(b[0],b[2],b[3])}for(let v=1;v<8;v++){let l=Math.PI*v/8,p=[];for(let m=0;m<=10;m++){let g=Math.PI/2*m/10*.97;p.push(h(l,g).map((x,b)=>x-f(l,g)[b]*.02))}e.tube(p,m=>.035*(1-m*.6),12,6,{mat:()=>U0})}let u=e.vert([t,n,a],[0,1,0],Bo);for(let v=0;v<s;v++){let l=Math.PI*v/s,p=Math.PI*(v+1)/s;e.tri(u,e.vert(i(l,o,n),[0,1,0],Bo),e.vert(i(p,o,n),[0,1,0],Bo))}Kr(e,t-o-.12,n-.1,a,t+o+.12,n+.02,a+.12,Bo),Kr(e,t-o-.16,n-.2,a,t+o+.16,n-.1,a+.07,Bo);let d=.16;for(let v=0;v<s;v++){let l=Math.PI*v/s,p=Math.PI*(v+1)/s,m=(g,x,b)=>[t+Math.cos(g)*x,r+Math.sin(g)*x,b];nr(e,m(l,o,a+.05),m(p,o,a+.05),m(p,o+d,a+.05),m(l,o+d,a+.05),[0,0,1],Bo),nr(e,m(l,o+d,a),m(p,o+d,a),m(p,o+d,a+.05),m(l,o+d,a+.05),[Math.cos((l+p)/2),Math.sin((l+p)/2),0],Bo),nr(e,m(l,o,a),m(p,o,a),m(p,o,a+.05),m(l,o,a+.05),[-Math.cos((l+p)/2),-Math.sin((l+p)/2),0],Bo)}for(let v of[-1,1]){let l=t+v*o,p=t+v*(o+d);Kr(e,l,n,a,p,r,a+.05,Bo),Kr(e,l-v*.02,r-.12,a,p+v*.06,r,a+.09,Bo)}Kr(e,t-.11,r+o-.04,a,t+.11,r+o+d+.1,a+.09,Bo),e.lathe([[.66,n,1],[.66,n+.06,1],[.62,n+.1],[.6,n+.3],[.64,n+.34,1],[.64,n+.4,1],[0,n+.4]],t,a-.62,40,{mat:()=>Bo})}var h_=Yr.sill+.4,u_=Je.z0-.62;function d_(e){nr(e,[14,0,Je.z0-cn],[Je.x1+cn,0,Je.z0-cn],[Je.x1+cn,0,Je.z1+cn],[14,0,Je.z1+cn],[0,1,0],Bo),e.curMat=ul,pl(e,{u0:14+cn,u1:Je.x1+2*cn,w0:Je.z0-2*cn,w1:Je.z0,top:()=>Je.spring,holes:Jf.map(h=>({u0:h-Yr.r,u1:h+Yr.r,bottom:Yr.sill,head:zu(h,Yr.r,Yr.spring),noReveal:!0})),mat:ul,cuts:[Je.x1]});for(let h of Jf)f_(e,h);e.save(),e.translate(0,0,Je.z1),e.rotateY(Math.PI),e.translate(-(Je.x1+2*cn),0,-2*cn);let t=h=>Je.x1+2*cn-h;pl(e,{u0:t(Je.x1+2*cn),u1:t(13.65),w0:0,w1:2*cn,top:()=>Je.spring,holes:Ga.map(h=>({u0:t(h+$t.halfW),u1:t(h-$t.halfW),bottom:$t.sill,head:zu(t(h),$t.halfW,$t.spring)})),mat:ul,revealMat:Bo}),e.restore(),e.save(),e.translate(Je.x1,0,0),e.rotateY(-Math.PI/2);let o=ji.DOOR,n=Je.zc,r=o.r;pl(e,{u0:Je.z0-2*cn,u1:Je.z1+2*cn,w0:-2*cn,w1:0,top:h=>h<Je.z0||h>Je.z1?Je.spring:Bi(h),topStep:.15,holes:[{u0:n-r,u1:n+r,bottom:0,head:zu(n,r,o.spring)}],mat:ul,revealMat:Bo}),e.restore(),e.save(),e.translate(14+cn,0,0),e.rotateY(-Math.PI/2),pl(e,{u0:Je.z0,u1:Je.z1,w0:-0,w1:2*cn,top:()=>Lu,topStep:.15,holes:[{u0:Je.z0,u1:Je.z1,bottom:0,head:h=>Bi(h)}],mat:ul,revealMat:Bo}),e.restore();let a=14+cn,s=Math.ceil((Je.x1-a)/1),i=28,c=[];for(let h=0;h<=s;h++){let f=a+(Je.x1-a)*h/s,u=[];for(let d=0;d<=i;d++){let v=Je.z0+(Je.z1-Je.z0)*d/i,l=Bi(v),p=[0,Nu-l,Je.zc-v],m=Math.hypot(p[1],p[2]);u.push(e.vert([f,l,v],[0,p[1]/m,p[2]/m],U0))}c.push(u)}for(let h=0;h<s;h++)for(let f=0;f<i;f++)e.tri(c[h][f],c[h+1][f],c[h][f+1]),e.tri(c[h+1][f],c[h+1][f+1],c[h][f+1])}function Km(e,t,o,n){let a=[];for(let s=0;s<=32;s++){let i=Je.z0+(Je.z1-Je.z0)*s/32,c=Bi(i),h=Nu-c,f=Je.zc-i,u=Math.hypot(h,f),d=[c+h/u*n,i+f/u*n];a.push({y:c,z:i,iy:d[0],iz:d[1],n:[0,h/u,f/u]})}for(let s=0;s<32;s++){let i=a[s],c=a[s+1];nr(e,[t-o,i.iy,i.iz],[t+o,i.iy,i.iz],[t+o,c.iy,c.iz],[t-o,c.iy,c.iz],i.n,Bo),nr(e,[t-o,i.y,i.z],[t-o,i.iy,i.iz],[t-o,c.iy,c.iz],[t-o,c.y,c.z],[-1,0,0],Bo),nr(e,[t+o,i.iy,i.iz],[t+o,i.y,i.z],[t+o,c.y,c.z],[t+o,c.iy,c.iz],[1,0,0],Bo)}}function Zf(e,t,o,n){let s=o,i=o+n*.16;Kr(e,t-.28,0,s,t+.28,Je.spring-.3,i,Bo),Kr(e,t-.28-.06,0,s,t+.28+.06,.32,o+n*(.16+.05),Bo),Kr(e,t-.28-.05,Je.spring-.3,s,t+.28+.05,Je.spring-.1,o+n*(.16+.05),Bo),Kr(e,t-.28-.1,Je.spring-.1,s,t+.28+.1,Je.spring,o+n*(.16+.1),Bo)}function p_(e,t){let o=Bi(Je.zc),n=[[0,o-.13,1],[.05,o-.125],[.12,o-.1],[.16,o-.06,1],[.22,o-.05],[.3,o-.075],[.4,o-.06],[.48,o-.03,1],[.55,o-.035],[.7,o-.025],[.82,o-.012,1],[.95,o+.03]];e.lathe(n,t,Je.zc,48,{mat:()=>U0});for(let r=0;r<8;r++){let a=r*Math.PI/4,s=t+Math.cos(a)*.32,i=Je.zc+Math.sin(a)*.32;e.save(),e.translate(s,o-.07,i),e.rotateY(-a),e.curMat=U0,e.ellipsoid([0,0,0],[.13,.03,.06],6,10),e.restore()}}function v_(e){e.curMat=Bo;for(let[t,o]of[[Je.z0,1],[Je.z1,-1]])Kr(e,14.35,Je.spring-.12,t,Je.x1,Je.spring,t+o*.1,Bo),Kr(e,14.35,Je.spring-.04,t,Je.x1,Je.spring+.05,t+o*.18,Bo);for(let[t,o]of[[Je.z0,1],[Je.z1,-1]])Kr(e,14.35,0,t,Je.x1,.42,t+o*.12,Bo),Kr(e,14.35,.42,t,Je.x1,.5,t+o*.07,Bo);for(let t of Qm)Km(e,t,.24,.16),Zf(e,t,Je.z0,1),Zf(e,t,Je.z1,-1);for(let t of[14.35+.28,Je.x1-.28])Km(e,t,.28,.22),Zf(e,t,Je.z0,1),Zf(e,t,Je.z1,-1);for(let t of Ga)p_(e,t)}function m_(e){let t=Je.z1+cn,o=t-.04,n=t+.04,r=(i,c,h,f)=>Kr(e,i,c,o,h,f,n,dl),a=$t.halfW,s=(i,c,h,f,u,d)=>{let v=(l,p,m)=>[i+p*Math.cos(l),$t.spring+p*Math.sin(l),m];for(let l=0;l<d;l++){let p=f+(u-f)*l/d,m=f+(u-f)*(l+1)/d;nr(e,v(p,c,o),v(m,c,o),v(m,h,o),v(p,h,o),[0,0,-1],dl),nr(e,v(p,h,n),v(m,h,n),v(m,c,n),v(p,c,n),[0,0,1],dl)}};for(let i of Ga){let c=i-a,h=i+a;r(c,$t.sill,c+.07,$t.spring),r(h-.07,$t.sill,h,$t.spring),r(c,$t.sill,h,$t.sill+.07),r(c,$t.spring-.04,h,$t.spring+.04);for(let u of[-.5,0,.5])r(i+u*a-.022,$t.sill,i+u*a+.022,$t.spring);let f=6;for(let u=1;u<f;u++){let d=$t.sill+($t.spring-$t.sill)*u/f;r(c,d-.02,h,d+.02)}s(i,a-.07,a,0,Math.PI,32),s(i,.42,.46,0,Math.PI,20);for(let u=1;u<6;u++){let d=Math.PI*u/6,v=Math.cos(d),l=Math.sin(d),p=.02,m=(g,x)=>[i+v*g-l*p*x,$t.spring+l*g+v*p*x];nr(e,[...m(.44,-1),o],[...m(a-.05,-1),o],[...m(a-.05,1),o],[...m(.44,1),o],[0,0,-1],dl),nr(e,[...m(.44,1),n],[...m(a-.05,1),n],[...m(a-.05,-1),n],[...m(.44,-1),n],[0,0,1],dl)}}}function g_(){let e=[],t=Je.z1+cn;for(let o of Ga){let n=o-$t.halfW,r=o+$t.halfW;e.push([n,$t.sill,t],[r,$t.sill,t],[r,$t.spring,t],[n,$t.sill,t],[r,$t.spring,t],[n,$t.spring,t]);for(let a=0;a<24;a++){let s=Math.PI*a/24,i=Math.PI*(a+1)/24;e.push([o,$t.spring,t],[o+$t.halfW*Math.cos(s),$t.spring+$t.halfW*Math.sin(s),t],[o+$t.halfW*Math.cos(i),$t.spring+$t.halfW*Math.sin(i),t])}}return e}function Zm(e,t){e.save(),e.translate(Je.x1+cn,0,Je.zc-7),e.rotateY(-Math.PI/2),t(),e.restore()}function x_(e){Zm(e,()=>{ji.addSurround(e),ji.addFrames(e,"fixed")})}function y_(e){return ji.glassPanes(e||"fixed").map(([o,n,r])=>[Je.x1+cn-r,n,Je.zc-7+o])}function b_(e){d_(e),v_(e),m_(e),x_(e),e.curMat=[0,0,0]}var w_={x:Je.x1+cn,zLo:Je.zc-ji.DOOR.r,zHi:Je.zc+ji.DOOR.r},Mo=e=>e.toFixed(4);function __(){return`
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
		float k = floor((q.x - ${Mo($t.first)}) / ${Mo($t.pitch)} + 0.5);
		if (k < 0.0 || k > ${Mo($t.count-1)}) return 0.0;
		float dx = q.x - (${Mo($t.first)} + k * ${Mo($t.pitch)});
		float side = 1.0 - smoothstep(${Mo($t.halfW)} - soft, ${Mo($t.halfW)} + soft, abs(dx));
		float sill = smoothstep(${Mo($t.sill)} - soft, ${Mo($t.sill)} + soft, q.y);
		float r = length(vec2(dx, q.y - ${Mo($t.spring)}));
		float head = q.y < ${Mo($t.spring)} ? 1.0 : 1.0 - smoothstep(${Mo($t.halfW)} - soft, ${Mo($t.halfW)} + soft, r);
		float open = side * sill * head;
		// the black glazing bars, softly
		float cover = 0.0;
		cover = max(cover, winBar(abs(dx), 0.022, soft));
		cover = max(cover, winBar(abs(abs(dx) - ${Mo($t.halfW*.5)}), 0.022, soft));
		float rowH = ${Mo(($t.spring-$t.sill)/6)};
		float ry = (q.y - ${Mo($t.sill)}) / rowH;
		cover = max(cover, q.y < ${Mo($t.spring)} ? winBar(abs(fract(ry + 0.5) - 0.5) * rowH, 0.02, soft) : 0.0);
		cover = max(cover, q.y > ${Mo($t.spring)} ? winBar(abs(r - 0.44), 0.02, soft) : 0.0);
		return open * (1.0 - cover * 0.75);
	}

	// daylight reaching point p from the windows
	float windowLight(vec3 p, vec3 n) {
		if (p.x < ${Mo(Je.x0)} || p.z < ${Mo(Je.z0-.1)} || p.z > ${Mo(Je.z1)}) return 0.0;
		float ndl = max(dot(n, WIN_SKY), 0.0);
		if (ndl <= 0.0) return 0.0;
		float tIn = (${Mo(Je.z1)} - p.z) / WIN_SKY.z;
		float tOut = (${Mo(Je.z1+2*cn)} - p.z) / WIN_SKY.z;
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
		${Jf.map(e=>`{ float d = abs(p.x - ${Mo(e)}); if (d < best) { best = d; lamp = vec3(${Mo(e)}, ${Mo(Yr.spring+.55)}, ${Mo(Je.z0-.15)}); } }`).join(`
		`)}
		return lamp;
	}

	float nicheLight(vec3 p, vec3 n) {
		if (p.z > ${Mo(Je.z0+1.6)} || p.z < ${Mo(Je.z0-Yr.r-.1)} || p.x < ${Mo(Je.x0)}) return 0.0;
		vec3 lamp = nicheLamp(p);
		vec3 d = lamp - p;
		float dist = length(d);
		vec3 L = d / dist;
		// a cone pointing down into the niche
		float cone = smoothstep(0.35, 0.75, dot(-L, normalize(vec3(0.0, -1.0, 0.35))));
		float inside = 1.0 - smoothstep(${Mo(Yr.r)}, ${Mo(Yr.r+.5)}, abs(p.x - lamp.x));
		return max(dot(n, L), 0.0) * cone * inside / (1.0 + 0.35 * dist * dist);
	}

	// soft general daylight in the corridor, strongest near the glass
	float corridorGlow(vec3 p) {
		if (p.x < ${Mo(Je.x0-1)}) return 0.0;
		float inC = smoothstep(${Mo(Je.z0-1.5)}, ${Mo(Je.z0)}, p.z) * smoothstep(${Mo(Je.x0-1)}, ${Mo(Je.x0+1)}, p.x);
		float near = 0.55 + 0.45 * smoothstep(${Mo(Je.z0)}, ${Mo(Je.z1)}, p.z);
		return inC * near;
	}`}Jm.exports={wallWithHoles:pl,windowLightGLSL:__,addWing:b_,windowGlass:g_,farDoorGlass:y_,atFarDoor:Zm,FAR_DOOR:w_,vaultY:Bi,C:Je,NICHE_X:Jf,NICHE:Yr,NICHE_PLINTH_TOP:h_,NICHE_STATUE_Z:u_,WIN:$t,winCentres:Ga,piers:Qm,PAINTING_X:l_,HEIGHT:Lu}});var Ea=ke((mA,o2)=>{"use strict";var Ru=br(),on=8,Xi=.35,qs=14,Vi=4,it={x0:qs+Xi,x1:qs+Xi+2*Vi,z0:5.9-Vi,z1:5.9+Vi,zc:5.9,cx:qs+Xi+Vi,arch:{r:2.6,spring:4.4},dome:{r:3.3,base:on},oculus:3.3};it.domeTop=it.dome.base+it.dome.r;var Yi={spokes:16,ringE:[.42,.95],bar:.035},Wn={sxz:1.32,sy:1.6,yaw:.6};Wn.crownC=[it.cx,.4+3.4*Wn.sy,it.zc];Wn.crownR=[2.3*Wn.sxz,1.9*Wn.sy,2.3*Wn.sxz];Wn.trunkR=.26*Wn.sxz;Wn.trunkTop=.4+2.2*Wn.sy;var e2={inner:1.05,outer:1.62,seat:.48,soil:.4},oh=(()=>{let e=[.2,1,-.15],t=Math.hypot(...e);return e.map(o=>o/t)})(),rr=[0,0,0],Wi=[11,0,0],eh=[10,0,0],th=[9,0,0],M_=[5,0,0],Ou=[3,0,0];function k0(e,t,o,n,r,a,s){let i=e.vert(t,a,s),c=e.vert(o,a,s),h=e.vert(n,a,s),f=e.vert(r,a,s);e.tri(i,c,h),e.tri(i,h,f)}function Fr(e,t,o,n,r,a,s,i){e.box(Math.min(t,r),Math.min(o,a),Math.min(n,s),Math.max(t,r),Math.max(o,a),Math.max(n,s),i)}var k_=(e,t,o)=>n=>{let r=n-e;return o+Math.sqrt(Math.max(0,t*t-r*r))};function S_(e){e.save(),e.translate(qs+Xi,0,0),e.rotateY(-Math.PI/2),Ru.wallWithHoles(e,{u0:0,u1:Ru.C.z0,w0:0,w1:2*Xi,top:()=>on,holes:[{u0:it.zc-it.arch.r,u1:it.zc+it.arch.r,bottom:0,head:k_(it.zc,it.arch.r,it.arch.spring),step:.05}],mat:Wi,revealMat:rr,topStep:1}),e.restore();let t=qs-Xi;for(let[s,i]of[[0,it.zc-it.arch.r],[it.zc+it.arch.r,Ru.C.z0]])Fr(e,t-.12,0,s,t,.42,i,rr),Fr(e,t-.07,.42,s,t,.5,i,rr);let o=t,n=.24,r=40,a=(s,i,c)=>[c,it.arch.spring+Math.sin(s)*i,it.zc+Math.cos(s)*i];for(let s=0;s<r;s++){let i=Math.PI*s/r,c=Math.PI*(s+1)/r;k0(e,a(i,it.arch.r,o-.07),a(c,it.arch.r,o-.07),a(c,it.arch.r+n,o-.07),a(i,it.arch.r+n,o-.07),[-1,0,0],rr),k0(e,a(i,it.arch.r+n,o),a(c,it.arch.r+n,o),a(c,it.arch.r+n,o-.07),a(i,it.arch.r+n,o-.07),[0,Math.sin((i+c)/2),Math.cos((i+c)/2)],rr),k0(e,a(i,it.arch.r,o),a(c,it.arch.r,o),a(c,it.arch.r,o-.07),a(i,it.arch.r,o-.07),[0,-Math.sin((i+c)/2),-Math.cos((i+c)/2)],rr)}Fr(e,o-.12,it.arch.spring+it.arch.r-.06,it.zc-.17,o,it.arch.spring+it.arch.r+n+.16,it.zc+.17,rr);for(let s of[-1,1]){let i=it.zc+s*it.arch.r,c=it.zc+s*(it.arch.r+n);Fr(e,o-.07,0,i,o,it.arch.spring,c,rr),Fr(e,o-.13,it.arch.spring-.16,i-s*.03,o,it.arch.spring,c+s*.08,rr),Fr(e,o-.12,0,i-s*.03,o,.5,c+s*.06,rr)}}function E_(e){let{x0:t,x1:o,z0:n,z1:r}=it;k0(e,[qs,0,n],[o,0,n],[o,0,r],[qs,0,r],[0,1,0],rr),e.curMat=Wi,k0(e,[o,0,n],[o,0,r],[o,on,r],[o,on,n],[-1,0,0],Wi),k0(e,[t,0,n],[o,0,n],[o,on,n],[t,on,n],[0,0,1],Wi),k0(e,[o,0,r],[t,0,r],[t,on,r],[o,on,r],[0,0,-1],Wi),k0(e,[t,0,r],[t,0,n],[t,on,n],[t,on,r],[1,0,0],Wi),Fr(e,o-.12,0,n,o,.42,r,rr),Fr(e,t,0,n,o,.42,n+.12,rr),Fr(e,t,0,r-.12,o,.42,r,rr),Fr(e,o-.2,on-.3,n,o,on,r,rr),Fr(e,t,on-.3,n,o,on,n+.2,rr),Fr(e,t,on-.3,r-.2,o,on,r,rr),Fr(e,t,on-.3,n,t+.2,on,r,rr);let a=it.dome.r,s=48,i=[];for(let g=0;g<=s;g++){let x=Math.PI*2*g/s;i.push([it.cx+Math.cos(x)*a,it.zc+Math.sin(x)*a])}let c=g=>{let x=Math.abs(Math.cos(g)),b=Math.abs(Math.sin(g));return Math.min(Vi/Math.max(x,1e-6),Vi/Math.max(b,1e-6))};for(let g=0;g<s;g++){let x=Math.PI*2*g/s,b=Math.PI*2*(g+1)/s,w=c(x),M=c(b),k=[it.cx+Math.cos(x)*w,on,it.zc+Math.sin(x)*w],z=[it.cx+Math.cos(b)*M,on,it.zc+Math.sin(b)*M];k0(e,[i[g][0],on,i[g][1]],[i[g+1][0],on,i[g+1][1]],z,k,[0,-1,0],eh)}e.lathe([[a+.02,on-.18,1],[a-.12,on-.18,1],[a-.12,on-.06,1],[a-.05,on,1],[a,on+.02]],it.cx,it.zc,s,{mat:()=>rr});let h=16,f=(g,x,b)=>[it.cx+Math.cos(g)*Math.cos(x)*b,it.dome.base+Math.sin(x)*b,it.zc+Math.sin(g)*Math.cos(x)*b],u=Math.PI/2;for(let g=0;g<s;g++)for(let x=0;x<h;x++){let b=Math.PI*2*g/s,w=Math.PI*2*(g+1)/s,M=u*x/h,k=u*(x+1)/h,z=(R,U)=>[-Math.cos(R)*Math.cos(U),-Math.sin(U),-Math.sin(R)*Math.cos(U)],P=[e.vert(f(b,M,a),z(b,M),th),e.vert(f(w,M,a),z(w,M),th),e.vert(f(w,k,a),z(w,k),th),e.vert(f(b,k,a),z(b,k),th)];e.tri(P[0],P[1],P[2]),e.tri(P[0],P[2],P[3])}for(let g=0;g<Yi.spokes;g++){let x=Math.PI*2*g/Yi.spokes,b=[];for(let w=0;w<=14;w++)b.push(f(x,(u-.06)*w/14,a-.04));e.tube(b,()=>.04,20,6,{mat:()=>eh})}for(let g of Yi.ringE){let x=Math.cos(g)*(a-.04),b=it.dome.base+Math.sin(g)*(a-.04),w=[];for(let M=0;M<=72;M++){let k=Math.PI*2*M/72;w.push([it.cx+Math.cos(k)*x,b,it.zc+Math.sin(k)*x])}e.tube(w,()=>.035,72,6,{mat:()=>eh})}e.ellipsoid([it.cx,it.dome.base+a-.06,it.zc],[.16,.08,.16],6,12,{mat:()=>eh});let d=.46,v=.55,l=.12,p=(g,x,b,w)=>{Fr(e,g,d-.08,x,b,d,w,Ou);let M=b-g>w-x?[g+.25,b-.25]:[g+.06,b-.06],k=b-g>w-x?[x+.06,w-.06]:[x+.25,w-.25];Fr(e,M[0],0,k[0],M[1],d-.08,k[1],Ou)};p(o-l-v,n+1.1,o-l,r-1.1),p(t+1,n+l,o-1.1,n+l+v),p(t+1,r-l-v,o-1.1,r-l);let m=e2;e.lathe([[m.outer,0,1],[m.outer,m.seat-.1,1],[m.outer+.07,m.seat-.07,1],[m.outer+.07,m.seat,1],[m.inner-.05,m.seat,1],[m.inner-.05,m.seat-.06,1],[m.inner,m.seat-.08,1],[m.inner,m.soil]],it.cx,it.zc,64,{mat:()=>Ou}),e.lathe([[m.inner,m.soil,1],[0,m.soil+.03]],it.cx,it.zc,48,{mat:()=>M_})}function A_(e){S_(e),E_(e),e.curMat=[0,0,0]}var jo=e=>e.toFixed(4);function t2(){let e=it.dome.r,t=Yi.ringE.map(o=>Math.cos(o)*e);return`
	const vec3 SHAFT = vec3(${jo(oh[0])}, ${jo(oh[1])}, ${jo(oh[2])});

	// how much sun the glass dome lets through towards p (0..1): the round
	// opening, less the soft shadows of its ribs and rings (worked out on
	// the dome's base, where the frame is seen almost straight on)
	float oculusOpen(vec3 p) {
		float t = (${jo(it.dome.base+.6)} - p.y) / SHAFT.y;
		vec3 q = p + SHAFT * t;
		vec2 d2 = q.xz - vec2(${jo(it.cx)}, ${jo(it.zc)});
		float d = length(d2);
		float soft = 0.02 + 0.012 * t;
		float open = 1.0 - smoothstep(${jo(e-.15)} - soft, ${jo(e-.15)} + soft, d);
		float hw = ${jo(Yi.bar)};
		float cover = 0.0;
		${t.map(o=>`cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, abs(d - ${jo(o)})));`).join(`
		`)}
		float ang = atan(d2.y, d2.x);
		float stp = ${jo(Math.PI*2/Yi.spokes)};
		float da = abs(mod(ang + stp * 0.5, stp) - stp * 0.5);
		cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, d * sin(da)));
		cover = max(cover, 1.0 - smoothstep(0.16 - soft, 0.16 + soft, d));
		return open * (1.0 - cover * 0.85);
	}

	// the tree's own shade: its crown lets dappled light through, its
	// trunk blocks it
	float treeShade(vec3 p) {
		vec3 c = vec3(${jo(Wn.crownC[0])}, ${jo(Wn.crownC[1])}, ${jo(Wn.crownC[2])});
		vec3 r = vec3(${jo(Wn.crownR[0])}, ${jo(Wn.crownR[1])}, ${jo(Wn.crownR[2])});
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
		float tt = (${jo(Wn.trunkTop)} - p.y) / SHAFT.y;
		if (tt > 0.0) {
			vec2 o = p.xz - vec2(${jo(it.cx)}, ${jo(it.zc)});
			vec2 dir = SHAFT.xz;
			float k = clamp(-dot(o, dir) / dot(dir, dir), 0.0, tt);
			float dist = length(o + dir * k);
			tr *= smoothstep(${jo(Wn.trunkR*.7)}, ${jo(Wn.trunkR*1.3)}, dist);
		}
		return tr;
	}`}function z_(){return`
	${t2()}

	// sunlight through the oculus reaching p (0..1)
	float alcoveSun(vec3 p, vec3 n) {
		if (p.x < ${jo(it.x0-.75)} || p.z < ${jo(it.z0-.5)} || p.z > ${jo(it.z1+.5)}) return 0.0;
		float ndl = max(dot(n, SHAFT), 0.0);
		if (ndl <= 0.0) return 0.0;
		return ndl * oculusOpen(p) * treeShade(p);
	}

	// soft daylight filling the court, brightest under the dome
	float alcoveGlow(vec3 p) {
		if (p.x < ${jo(it.x0-1.5)} || p.z < ${jo(it.z0-1.5)} || p.z > ${jo(it.z1+1.5)}) return 0.0;
		float inside = smoothstep(${jo(it.x0-1.2)}, ${jo(it.x0+.6)}, p.x);
		float d = length(p.xz - vec2(${jo(it.cx)}, ${jo(it.zc)}));
		return inside * (0.55 + 0.45 * smoothstep(0.0, 8.0, p.y)) * (1.0 - 0.35 * smoothstep(1.0, 5.0, d));
	}`}o2.exports={addAlcove:A_,alcoveLightGLSL:z_,oculusGLSL:t2,A:it,BENCH:e2,SHAFT:oh,TREE:Wn}});var ar=ke((gA,r2)=>{"use strict";var Ha=0;try{let e=location.search;/[?&]night\b/.test(e)&&(Ha=1)}catch(e){}var S0=Ha,Cu=0,n2=[],nh={tick(e){let t=Cu?Math.min(.1,e-Cu):0;if(Cu=e,S0!==Ha){let o=t/2.4;S0=Ha>S0?Math.min(Ha,S0+o):Math.max(Ha,S0-o)}return nh.night},get night(){return S0*S0*(3-2*S0)},get isNight(){return Ha===1},get settled(){return S0===Ha},set(e){Ha=e?1:0,n2.forEach(t=>t(Ha))},toggle(){nh.set(!Ha)},onChange(e){n2.push(e)}};nh.GLSL=`
uniform float night;
vec3 toNight(vec3 c, float keep) {
	float l = dot(c, vec3(0.299, 0.587, 0.114));
	vec3 n = mix(vec3(l), c, 0.35) * vec3(0.55, 0.70, 1.05) * keep;
	return mix(c, n, night);
}
`;r2.exports=nh});var j0=ke((xA,gl)=>{"use strict";var Pu=ar(),{C:Iu}=br(),{A:rh,BENCH:vl}=Ea(),Vn=Math.PI,T_=[18,29,40],ah=.575,B0=[],ml=(e,t,o,n,r,a,s)=>B0.push(Object.assign({x:e,y:t,z:o,o:n,back:r,hw:a,s:1,k:1,range:7,mount:"wall"},s||{}));T_.forEach(e=>{ml(1.25+ah+.48,3.25,e,[1,0],.48,ah,{s:1.2}),ml(12.75-ah-.48,3.25,e,[-1,0],.48,ah,{s:1.2})});[3,11].forEach(e=>ml(e,3.45,Iu.hallEnd-.5,[0,-1],.5,99,{s:1.2}));var L_=[14.63,19.63,24.03,28.43,32.83,Iu.x1-.28];L_.forEach(e=>ml(e,3.15,Iu.z0+.16+.44,[0,1],.44,.28));[3,8.8].forEach(e=>ml(.35+.44,2.75,e,[1,0],.44,99));{let e=(vl.inner+vl.outer)/2,t=Math.atan2(-1.12,-.98);B0.push({x:rh.cx+Math.cos(t)*e,y:vl.seat+.155,z:rh.zc+Math.sin(t)*e,o:[Math.cos(t),Math.sin(t)],back:0,hw:0,ring:[rh.cx,rh.zc,vl.outer+.07,vl.seat],s:.52,k:2.2,range:3.6,mount:"table"})}var $u=.13,sh=.21,sr=$u/Math.cos(Vn/6),$o=e=>e.toFixed(4);function a2(e){let o=(e||B0.map((n,r)=>r)).map(n=>{let r=B0[n],a=-r.o[1],s=r.o[0],i=r.mount==="table"?`
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
		float t = mod(az + ${$o(Vn/6)}, ${$o(Vn/3)}) - ${$o(Vn/6)};
		float U = tan(t) / ${$o(Math.tan(Vn/6))};
		float V = (q.y / h) * (${$o($u/sh)} / cos(t));
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
	}`}var ln=0,N_=1;function R_(){let e=[],t=[],o=[],n=[],r=[],a=(v,l,p,m)=>(e.push(v[0],v[1],v[2]),t.push(l[0],l[1],l[2]),o.push(p),n.push(m?m[0]:0,m?m[1]:0),e.length/3-1),s=(v,l)=>[v[0]-l[0],v[1]-l[1],v[2]-l[2]],i=(v,l)=>[v[1]*l[2]-v[2]*l[1],v[2]*l[0]-v[0]*l[2],v[0]*l[1]-v[1]*l[0]],c=v=>{let l=Math.hypot(v[0],v[1],v[2])||1;return[v[0]/l,v[1]/l,v[2]/l]};function h(v,l,p,m,g,x){let b=c(i(s(l,v),s(m,v))),w=a(v,b,g,[0,0]),M=a(l,b,g,[1,0]),k=a(p,b,g,[1,1]),z=a(m,b,g,[0,1]);r.push(w,M,k,w,k,z),x&&r.push(w,k,M,w,z,k)}function f(v,l,p){for(let x=0;x<v.length;x++){let b=v[Math.max(0,x-1)],w=v[Math.min(v.length-1,x+1)],M=c(s(w,b)),k=Math.abs(M[1])>.9?[1,0,0]:[0,1,0],z=c(i(M,k)),P=i(z,M),R=typeof l=="function"?l(x/(v.length-1)):l;for(let U=0;U<=6;U++){let q=U/6*Vn*2,Q=Math.cos(q),D=Math.sin(q),V=[z[0]*Q+P[0]*D,z[1]*Q+P[1]*D,z[2]*Q+P[2]*D];a([v[x][0]+V[0]*R,v[x][1]+V[1]*R,v[x][2]+V[2]*R],V,p)}}let g=e.length/3-v.length*7;for(let x=0;x<v.length-1;x++)for(let b=0;b<6;b++){let w=g+x*7+b,M=w+6+1;r.push(w,M,w+1,w+1,M,M+1)}}function u(v,l,p,m,g,x,b,w,M){let k=(z,P,R)=>{let U=x+Vn/6+R*Vn/3;return[v[0]+Math.cos(U)*z,P,v[2]+Math.sin(U)*z]};for(let z=0;z<6;z++)h(k(m,l,z+1),k(m,l,z),k(g,p,z),k(g,p,z+1),b);if(w&&g>0)for(let z=0;z<6;z++){let P=a([v[0],p,v[2]],[0,1,0],b),R=a(k(g,p,z),[0,1,0],b),U=a(k(g,p,z+1),[0,1,0],b);r.push(P,U,R)}if(M&&m>0)for(let z=0;z<6;z++){let P=a([v[0],l,v[2]],[0,-1,0],b),R=a(k(m,l,z),[0,-1,0],b),U=a(k(m,l,z+1),[0,-1,0],b);r.push(P,R,U)}}function d(v,l,p,m,g,x,b){let w=[];for(let k=0;k<=18;k++){let z=k/18,P=(b||0)+z*m*Vn*2,R=p*(1-.75*z);w.push([v[0]+l[0]*Math.cos(P)*R,v[1]+Math.sin(P)*R,v[2]+l[2]*Math.cos(P)*R])}f(w,g,x)}return B0.forEach(v=>{let l=v.s,p=Math.atan2(v.o[1],v.o[0]),m=[v.x,v.y,v.z],g=(w,M,k)=>[v.x+v.o[0]*w-v.o[1]*(k||0),v.y+M,v.z+v.o[1]*w+v.o[0]*(k||0)],x=v.y-sh*l,b=v.y+sh*l;for(let w=0;w<6;w++){let M=p+Vn/6+w*Vn/3,k=M+Vn/3,z=sr*l*.97,P=[v.x+Math.cos(M)*z,x,v.z+Math.sin(M)*z],R=[v.x+Math.cos(k)*z,x,v.z+Math.sin(k)*z];h(R,P,[P[0],b,P[2]],[R[0],b,R[2]],N_,!0)}for(let w=0;w<6;w++){let M=p+Vn/6+w*Vn/3,k=sr*l;f([[v.x+Math.cos(M)*k,x-.02*l,v.z+Math.sin(M)*k],[v.x+Math.cos(M)*k,b+.02*l,v.z+Math.sin(M)*k]],.011*l,ln)}u(m,x-.035*l,x,sr*l*1.12,sr*l*1.12,p,ln,!0,!0),u(m,x-.1*l,x-.035*l,sr*l*.55,sr*l*1,p,ln,!1,!0),u(m,x-.17*l,x-.1*l,0,sr*l*.55,p,ln,!1,!1);for(let w=0;w<6;w++){let M=p+w*Vn/3,k=$u*l*1.06,z=[v.x+Math.cos(M)*k,x-.06*l,v.z+Math.sin(M)*k];d(z,[-Math.sin(M),0,Math.cos(M)],.03*l,.85,.004*l,ln,.3)}u(m,b,b+.03*l,sr*l*1.14,sr*l*1.14,p,ln,!1,!0),u(m,b+.03*l,b+.2*l,sr*l*1.14,sr*l*.32,p,ln,!1,!1),u(m,b+.2*l,b+.27*l,sr*l*.34,sr*l*.34,p,ln,!1,!1),u(m,b+.27*l,b+.37*l,sr*l*.42,0,p,ln,!1,!0),f([[v.x,b+.36*l,v.z],[v.x,b+.47*l,v.z]],w=>.01*l*(1-.7*w),ln),u([v.x,0,v.z],b+.44*l,b+.47*l,.018*l,0,p,ln,!1,!0);for(let w=0;w<6;w++){let M=p+Vn/6+w*Vn/3,k=sr*l*1.14,z=[v.x+Math.cos(M)*k,b+.03*l,v.z+Math.sin(M)*k];f([z,[z[0],z[1]+.09*l,z[2]]],P=>.008*l*(1-.8*P),ln),u([z[0],0,z[2]],z[1]+.035*l,z[1]+.06*l,.014*l,.014*l,M,ln,!0,!0)}if(v.mount==="wall"){let w=v.back,M=x-.32,k=g(-w,0,0);((q,Q,D)=>{let V=[v.o[0],0,v.o[1]],me=[-v.o[1],0,v.o[0]],Ge=(re,Ue,xt)=>[k[0]+me[0]*re+V[0]*xt,Ue,k[2]+me[2]*re+V[2]*xt],Re=.03,be=.065;h(Ge(-D,q,be),Ge(D,q,be),Ge(D,Q,be),Ge(-D,Q,be),ln,!0),h(Ge(D,q,Re),Ge(D,q,be),Ge(D,Q,be),Ge(D,Q,Re),ln,!0),h(Ge(-D,q,be),Ge(-D,q,Re),Ge(-D,Q,Re),Ge(-D,Q,be),ln,!0),h(Ge(-D,Q,be),Ge(D,Q,be),Ge(D,Q,Re),Ge(-D,Q,Re),ln,!0),h(Ge(-D,q,Re),Ge(D,q,Re),Ge(D,q,be),Ge(-D,q,be),ln,!0),u([k[0]+V[0]*be,0,k[2]+V[2]*be],Q,Q+.05,D*.6,0,p,ln,!1,!0),u([k[0]+V[0]*be,0,k[2]+V[2]*be],q-.05,q,0,D*.6,p,ln,!1,!1)})(M-.2,M+.2,.07);let P=[];for(let q=0;q<=14;q++){let Q=q/14,D=-w+.05+Q*(w-.05),V=M+.04+(x-.17*l-M-.04)*Math.pow(Q,2.2);P.push(g(D,V-v.y,0))}f(P,q=>.022*(1-.3*q),ln);let R=[];for(let q=0;q<=10;q++){let Q=q/10;R.push(g(-w+.05+Q*w*.6,M-.14+Q*.16+.05*Math.sin(Q*Vn)-v.y,0))}f(R,.009,ln);let U=R[R.length-1];d([U[0]-v.o[0]*.03,U[1]+.02,U[2]-v.o[1]*.03],[v.o[0],0,v.o[1]],.045,1.1,.007,ln,-.4),[.3,.55].forEach(q=>{let Q=P[Math.round(q*14)],D=R[Math.round(q/.62*10)]||R[10];f([Q,D],.006,ln)}),[-1,1].forEach(q=>{let Q=g(-.05,-sh*l-.2*l,0);d([Q[0]-v.o[1]*q*.05,Q[1],Q[2]+v.o[0]*q*.05],[-v.o[1]*q,0,v.o[0]*q],.05*l,.9,.006,ln,Vn)})}else for(let w=0;w<3;w++){let M=p+w*Vn*2/3,k=[v.x+Math.cos(M)*sr*l*.7,x-.035*l,v.z+Math.sin(M)*sr*l*.7],z=[v.x+Math.cos(M)*sr*l*1.25,x-.17*l,v.z+Math.sin(M)*sr*l*1.25];f([k,z],.012*l,ln)}}),{pos:e,nrm:t,kind:o,uv:n,elems:r}}gl.exports=e=>{let t=R_(),o=e({vert:`
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
		${a2()}
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
		}`,attributes:{position:t.pos,normal:t.nrm,kind:t.kind,uv:t.uv},elements:t.elems,uniforms:{time:e.context("time"),night:()=>Pu.night}}),n=[],r=[];B0.forEach((s,i)=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(c=>{n.push(c[0],c[1]),r.push(s.x,s.y,s.z,s.s+i*.001)})});let a=e({vert:`
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
		}`,attributes:{corner:n,at:r},count:n.length/2,uniforms:{time:e.context("time"),night:()=>Pu.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o(),Pu.night>.01&&a()}};gl.exports.lanternGLSL=a2;gl.exports.LANTERNS=B0;gl.exports.TREE_LANTERN=[B0.length-1]});var X0=ke((yA,Qr)=>{"use strict";var O_=ar(),qo=Math.PI,Xn=e=>(+e).toFixed(4),C_=e=>`vec3(${Xn(e[0])}, ${Xn(e[1])}, ${Xn(e[2])})`,Dt={x:-7,z:44.5},oo=5.2,vr=15,ht={z0:42.6,z1:46.4,zc:44.5,spring:4,r:1.9},s0={z0:42.2,z1:46.8,top:6.3,x:.35},lh=[Dt.x-Math.sqrt(oo*oo-3.05*3.05),0,0],Nn={x0:-2.05+lh[0],x1:lh[0],z0:41.45,z1:47.55,top:4.3},Fu=[[Nn.x1+.05,2.35,Nn.z0-.45],[Nn.x1+.05,2.35,Nn.z1+.45]].map(([e,t,o])=>{let n=Math.atan2(o-Dt.z,e-Dt.x);return[Dt.x+Math.cos(n)*(oo-.16),t,Dt.z+Math.sin(n)*(oo-.16)]}),Oo={ri:3.4,ro:oo,a0:-35*qo/180,rise:.1836,step:3.6*qo/180,n:88,thick:.36};Oo.k=Oo.rise/Oo.step;var qr=e=>Oo.a0-e,V0=e=>e*Oo.k,vn={x:Dt.x+.1,z:Dt.z-.15,yaw:-qo/2,scale:1.3},E0=vn.scale/1.1,xl={keyX0:vn.x-.524*E0,keyX1:vn.x+.491*E0,keyTop:.647*E0,keyFront:vn.z+.808*E0,keyBack:vn.z+.72*E0,stoolX:vn.x-.041*E0,stoolZ:vn.z+1.122*E0,stoolFront:vn.z+.96*E0,stoolTop:.37*E0,heading:qo},ch=[[3.6,44.5],[.6,44.5],[-2.2,44.7],[-4.5,46.5],[-7,47.2],[-9.4,46.6],[-10.5,44.9],[-10.9,43.2]];function i2(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let o=t;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function P_(e,t){let o=1e9;for(let n=0;n<ch.length-1;n++){let[r,a]=ch[n],[s,i]=ch[n+1],c=s-r,h=i-a,f=Math.max(0,Math.min(1,((e-r)*c+(t-a)*h)/(c*c+h*h)));o=Math.min(o,Math.hypot(e-r-c*f,t-a-h*f))}return o}var ih=e=>ht.spring+Math.sqrt(Math.max(0,ht.r*ht.r-(e-ht.zc)*(e-ht.zc))),W0=e=>Dt.x+Math.sqrt(Math.max(0,oo*oo-(e-Dt.z)*(e-Dt.z)));function Ki(e,t){return Math.hypot(e-Dt.x,t-Dt.z)<oo||e<=0&&e>Dt.x&&t>ht.z0&&t<ht.z1||e>Nn.x0&&e<Nn.x1&&t>Nn.z0&&t<Nn.z1}function I_(e,t){if(Math.hypot(e-Dt.x,t-Dt.z)<Oo.ri-.05)return 99;let n=Math.atan2(t-Dt.z,e-Dt.x),r=Oo.a0-n;for(;r<0;)r+=2*qo;for(;r>=2*qo;)r-=2*qo;return r>Oo.n*Oo.step?99:V0(r)-Oo.thick}function $_(){let e=[],t=i2(1729),o=(a,s,i)=>{for(let c=Math.max(0,e.length-400);c<e.length;c++){let h=e[c];if(!(h[1]>.01)&&Math.hypot(h[0]-a,h[2]-s)<i+h[3]+.012)return!0}return!1},n=(a,s)=>{let i=a-vn.x,c=s-vn.z,h=Math.cos(vn.yaw),f=Math.sin(vn.yaw),u=(h*i-f*c)/vn.scale,d=(f*i+h*c)/vn.scale;return u>-1.05&&u<1.3&&d>-.7&&d<.72},r=0;for(;e.length<980&&r<6e4;){r++;let s=t()<.55?1.25+t()*2.1:1.25+Math.sqrt(t())*(oo-1.45),i=t()*2*qo,c=Dt.x+Math.cos(i)*s,h=Dt.z+Math.sin(i)*s;if(!Ki(c,h)||s>oo-.18||n(c,h)||P_(c,h)<.62||I_(c,h)<2.3||c<Nn.x1+.9)continue;let f=.022+t()*.02;if(o(c,h,f))continue;let u=t()<.15?.22+t()*.14:.05+t()*.15;e.push([c,0,h,f,u,t()*100])}for(let a=1;a<26;a++){let s=a<12?3:2;for(let i=0;i<s;i++){let c=(a+.25+t()*.5)*Oo.step,h=qr(c),f=Oo.ri+.55+t()*(Oo.ro-Oo.ri-.75),u=.022+t()*.016;e.push([Dt.x+Math.cos(h)*f,(a+1)*Oo.rise,Dt.z+Math.sin(h)*f,u,.05+t()*.14,t()*100])}}for(let a of Fu)for(let[s,i,c]of[[0,0,.26],[.06,.05,.18],[-.05,-.04,.14]])e.push([a[0]+s,a[1],a[2]+i,.024,c,t()*100]);for(let a of[Nn.z0-.35,Nn.z1+.35])for(let s=0;s<9;s++){let i=Nn.x1+.35+t()*.5,c=a+(t()-.5)*.5;Math.hypot(i-Dt.x,c-Dt.z)>oo-.15||e.push([i,0,c,.026+t()*.014,.18+t()*.3,t()*100])}return e}function F_(e){let o=i2(77),n=[];for(let r=0;r<14;r++){let a=e[Math.floor(o()*e.length)];n.push([a[0],a[1]+a[4],a[2]])}for(let r=0;r<12;r++){let a=n.map(()=>[0,0,0,0]);for(let s of e){let i=[s[0],s[1]+s[4],s[2]],c=0,h=1e9;n.forEach((f,u)=>{let d=(i[0]-f[0])**2+(i[1]-f[1])**2*4+(i[2]-f[2])**2;d<h&&(h=d,c=u)}),a[c][0]+=i[0],a[c][1]+=i[1],a[c][2]+=i[2],a[c][3]++}n=a.map((s,i)=>s[3]?[s[0]/s[3],s[1]/s[3],s[2]/s[3],s[3]]:n[i])}return n.filter(r=>r[3]>0).map(r=>[r[0],r[1]+.12,r[2],r[3]/e.length])}var qu=$_(),s2=F_(qu.filter(e=>e[1]<2||e[1]>2.5)).concat(Fu.map(e=>[e[0],e[1]+.35,e[2],.035]));function c2(){return`
	vec3 roomLight(vec3 p, vec3 N, vec3 V, float gloss, out vec3 spec) {
		spec = vec3(0.0);
		vec3 col = vec3(0.0);
		float floorK = (p.y < 0.02 && N.y > 0.9) ? 1.0 : 0.0;
		${s2.map((t,o)=>`
		{
			vec3 d = ${C_(t)} - p;
			float dd = dot(d, d);
			vec3 L = d * inversesqrt(dd);
			float fl = 0.86 + 0.08 * sin(time * ${Xn(5.3+o*.71)} + ${Xn(o*1.9)}) + 0.06 * sin(time * ${Xn(11.7+o*1.3)} + ${Xn(o*.7)});
			float w = ${Xn(t[3]*s2.length)} * fl;
			float lam = max(dot(N, L), 0.0) * 0.82 + 0.18;
			col += w * lam / (0.7 + dd * 0.42);
			// the floor glows in pools round the candles
			col += w * floorK * 0.9 / (0.02 + dd * 7.0);
			spec += w * pow(max(dot(N, normalize(L + V)), 0.0), mix(10.0, 180.0, gloss)) * gloss * 1.6 / (0.25 + dd * 0.9);
		}`).join("")}
		col *= vec3(1.0, 0.56, 0.24) * 0.62;
		spec *= vec3(1.0, 0.62, 0.30) * 0.62;
		// light from the oculus, high above: pale by day, moonlight at night
		float up = smoothstep(0.0, ${Xn(vr)}, p.y);
		vec3 sky = mix(vec3(0.10, 0.095, 0.085), vec3(0.030, 0.045, 0.085), night);
		col += sky * (0.35 + 0.65 * up) * (0.55 + 0.45 * max(N.y, 0.0)) * (0.6 + 0.4 * max(-dot(N, normalize(p - vec3(${Xn(Dt.x)}, ${Xn(vr)}, ${Xn(Dt.z)}))), 0.0));
		// and straight down from it a soft pool falls on the piano and
		// whoever is playing it: it catches his shoulders, his hair, the
		// edge of the lid, and lifts them out of the dark
		float pool = 1.0 - smoothstep(0.5, 2.9, length(p.xz - vec2(${Xn(xl.stoolX)}, ${Xn(xl.keyFront+.1)})));
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
	}`}var Xt={FLOOR:0,WALL:1,STEP:2,SOFFIT:3,STRING:4,CEIL:5,OCULUS:6,HALLSTONE:7,IRON:8,RAILING:9,CANDLE:10};function l2(){let e={pos:[],nrm:[],kind:[],uv:[],idx:[]};return e.v=(t,o,n,r)=>(e.pos.push(t[0],t[1],t[2]),e.nrm.push(o[0],o[1],o[2]),e.kind.push(n),e.uv.push(r?r[0]:0,r?r[1]:0),e.pos.length/3-1),e.quad=(t,o,n,r,a,s,i)=>{let c=e.v(t,a,s,i&&i[0]),h=e.v(o,a,s,i&&i[1]),f=e.v(n,a,s,i&&i[2]),u=e.v(r,a,s,i&&i[3]);e.idx.push(c,h,f,c,f,u)},e.tri=(t,o,n,r,a)=>{let s=e.v(t,r,a),i=e.v(o,r,a),c=e.v(n,r,a);e.idx.push(s,i,c)},e}function q_(){let e=l2(),t=(n,r,a)=>[Dt.x+Math.cos(n)*r,a,Dt.z+Math.sin(n)*r],o=n=>[Math.cos(n),0,Math.sin(n)];for(let r=0;r>Nn.x0-.01;r-=.25)for(let a=41.2;a<47.8;a+=.2){let s=r-.25,i=r,c=a,h=a+.2;if(!(Ki(s,c)||Ki(i,c)||Ki(s,h)||Ki(i,h)||Ki((s+i)/2,(c+h)/2)))continue;let f=c,u=h;s>W0(ht.z0)-.3&&(f=Math.max(f,ht.z0),u=Math.min(u,ht.z1),u<=f)||e.quad([s,0,f],[s,0,u],[i,0,u],[i,0,f],[0,1,0],Xt.FLOOR)}{for(let r=0;r<360;r++){let a=r/360*2*qo,s=(r+1)/360*2*qo,i=(a+s)/2,c=t(i,oo,0),h=0;c[0]>Dt.x&&c[2]>ht.z0-.02&&c[2]<ht.z1+.02&&(h=Math.max(ih(Math.min(Math.max(t(a,oo,0)[2],ht.z0),ht.z1)),ih(Math.min(Math.max(t(s,oo,0)[2],ht.z0),ht.z1)))),c[0]<Dt.x&&c[2]>Nn.z0-.02&&c[2]<Nn.z1+.02&&(h=Nn.top);let f=a*oo,u=s*oo,d=o(a).map(p=>-p),v=o(s).map(p=>-p),l=[h];for(let p=Math.ceil(h/2.5)*2.5;p<vr;p+=2.5)p>h+.01&&l.push(p);l.push(vr);for(let p=0;p<l.length-1;p++){let m=l[p],g=l[p+1],x=e.v(t(a,oo,m),d,Xt.WALL,[f,m]),b=e.v(t(s,oo,m),v,Xt.WALL,[u,m]),w=e.v(t(s,oo,g),v,Xt.WALL,[u,g]),M=e.v(t(a,oo,g),d,Xt.WALL,[f,g]);e.idx.push(x,b,w,x,w,M)}}for(let[r,a,s]of[[6.55,.22,.07],[0,.32,.05]])for(let i=0;i<360;i++){let c=i/360*2*qo,h=(i+1)/360*2*qo,f=(c+h)/2,u=t(f,oo,0);if(r<1&&(u[0]>Dt.x&&u[2]>ht.z0&&u[2]<ht.z1||u[0]<Dt.x&&u[2]>Nn.z0&&u[2]<Nn.z1))continue;let d=oo-s;e.quad(t(c,d,r),t(h,d,r),t(h,d,r+a),t(c,d,r+a),o(f).map(v=>-v),Xt.WALL,[[c*oo,r+100],[h*oo,r+100],[h*oo,r+a+100],[c*oo,r+a+100]]),e.quad(t(c,d,r+a),t(h,d,r+a),t(h,oo,r+a),t(c,oo,r+a),[0,1,0],Xt.WALL,[[0,200],[0,200],[0,200],[0,200]]),r>1&&e.quad(t(c,oo,r),t(h,oo,r),t(h,d,r),t(c,d,r),[0,-1,0],Xt.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let n=s0.x;for(let[a,s]of[[ht.z0,1],[ht.z1,-1]]){let i=W0(a);e.quad([n,0,a],[i,0,a],[i,ht.spring,a],[n,ht.spring,a],[0,0,s],Xt.WALL,[[n,0],[i,0],[i,ht.spring],[n,ht.spring]])}let r=40;for(let a=0;a<r;a++){let s=a/r*qo,i=(a+1)/r*qo,c=ht.zc-Math.cos(s)*ht.r,h=ht.zc-Math.cos(i)*ht.r,f=ht.spring+Math.sin(s)*ht.r,u=ht.spring+Math.sin(i)*ht.r,d=[0,-Math.sin(s),Math.cos(s)],v=[0,-Math.sin(i),Math.cos(i)],l=e.v([n,f,c],d,Xt.WALL,[n,s*ht.r]),p=e.v([W0(c),f,c],d,Xt.WALL,[W0(c),s*ht.r]),m=e.v([W0(h),u,h],v,Xt.WALL,[W0(h),i*ht.r]),g=e.v([n,u,h],v,Xt.WALL,[n,i*ht.r]);e.idx.push(l,p,m,l,m,g)}}{let n=s0.x,r=.05;for(let h=s0.z0;h<s0.z1-1e-6;h+=r){let f=h,u=Math.min(s0.z1,h+r),v=(l=>l>ht.z0&&l<ht.z1)((f+u)/2)?Math.max(ih(f),ih(u)):0;e.quad([n,v,f],[n,v,u],[n,s0.top,u],[n,s0.top,f],[1,0,0],Xt.HALLSTONE,[[f,v],[u,v],[u,s0.top],[f,s0.top]])}let a=.32,s=.06,i=n+s,c=36;for(let h=0;h<c;h++){let f=h/c*qo,u=(h+1)/c*qo,d=(g,x)=>[i,ht.spring+Math.sin(g)*x,ht.zc-Math.cos(g)*x],v=ht.r,l=ht.r+a;e.quad(d(f,v),d(u,v),d(u,l),d(f,l),[1,0,0],Xt.HALLSTONE,[[0,300],[0,300],[1,300],[1,300]]);let p=(g,x,b)=>[b,ht.spring+Math.sin(g)*x,ht.zc-Math.cos(g)*x],m=[0,Math.sin((f+u)/2),-Math.cos((f+u)/2)];e.quad(p(f,l,n),p(u,l,n),p(u,l,i),p(f,l,i),m,Xt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),e.quad(p(f,v,n),p(u,v,n),p(u,v,i),p(f,v,i),m.map(g=>-g),Xt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}for(let[h,f,u]of[[ht.z0-a,ht.z0,-1],[ht.z1,ht.z1+a,1]]){e.quad([i,0,h],[i,0,f],[i,ht.spring,f],[i,ht.spring,h],[1,0,0],Xt.HALLSTONE,[[0,300],[1,300],[1,300],[0,300]]);let d=u<0?h:f,v=u<0?f:h;e.quad([n,0,d],[i,0,d],[i,ht.spring,d],[n,ht.spring,d],[0,0,u],Xt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),e.quad([n,0,v],[i,0,v],[i,ht.spring,v],[n,ht.spring,v],[0,0,-u],Xt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);let l=ht.spring-.16,p=.16,m=.11,g=Math.min(h,f)-.05,x=Math.max(h,f)+.05;e.quad([n+m,l,g],[n+m,l,x],[n+m,l+p,x],[n+m,l+p,g],[1,0,0],Xt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),e.quad([n,l+p,g],[n+m,l+p,g],[n+m,l+p,x],[n,l+p,x],[0,1,0],Xt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),e.quad([n,l,g],[n,l,x],[n+m,l,x],[n+m,l,g],[0,-1,0],Xt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let b of[g,x])e.quad([n,l,b],[n+m,l,b],[n+m,l+p,b],[n,l+p,b],[0,0,b===g?-1:1],Xt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}{let h=ht.spring+ht.r-.05,f=ht.spring+ht.r+a+.12,u=.16,d=.22,v=i+.04;e.quad([v,h,ht.zc-u],[v,h,ht.zc+u],[v,f,ht.zc+d],[v,f,ht.zc-d],[1,0,0],Xt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let l of[-1,1])e.quad([n,h,ht.zc+l*u],[v,h,ht.zc+l*u],[v,f,ht.zc+l*d],[n,f,ht.zc+l*d],[0,0,l],Xt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);e.quad([n,f,ht.zc-d],[v,f,ht.zc-d],[v,f,ht.zc+d],[n,f,ht.zc+d],[0,1,0],Xt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}}{let{x0:n,x1:r,z0:a,z1:s,top:i}=Nn;e.quad([n,0,a],[n,0,s],[n,i,s],[n,i,a],[1,0,0],Xt.WALL,[[a,0],[s,0],[s,i],[a,i]]);for(let[h,f]of[[a,1],[s,-1]]){let u=Dt.x-Math.sqrt(oo*oo-(h-Dt.z)*(h-Dt.z));e.quad([n,0,h],[u,0,h],[u,i,h],[n,i,h],[0,0,f],Xt.WALL,[[n,0],[u,0],[u,i],[n,i]])}let c=24;for(let h=0;h<c;h++){let f=a+(s-a)*h/c,u=a+(s-a)*(h+1)/c,d=Dt.x-Math.sqrt(oo*oo-(f-Dt.z)**2),v=Dt.x-Math.sqrt(oo*oo-(u-Dt.z)**2);e.quad([n,i,f],[d,i,f],[v,i,u],[n,i,u],[0,-1,0],Xt.WALL,[[0,200],[0,200],[0,200],[0,200]])}for(let h=0;h<c;h++){let f=a+(s-a)*h/c,u=a+(s-a)*(h+1)/c,d=Dt.x-Math.sqrt(oo*oo-(f-Dt.z)**2)+.05,v=Dt.x-Math.sqrt(oo*oo-(u-Dt.z)**2)+.05;e.quad([d,i-.3,f],[v,i-.3,u],[v,i,u],[d,i,f],[1,0,0],Xt.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let r=[1.15,1.6,2.3,3,3.35,4.2,oo];for(let a=0;a<120;a++){let s=a/120*2*qo,i=(a+1)/120*2*qo,c=(s+i)/2;c>qo&&(c-=2*qo);for(let h=0;h<r.length-1;h++){let f=r[h],u=r[h+1],d=c*180/qo;f>=3.3&&d>8&&d<85||e.quad(t(s,f,vr),t(s,u,vr),t(i,u,vr),t(i,f,vr),[0,-1,0],Xt.CEIL,[[s*f,f],[s*u,u],[i*u,u],[i*f,f]])}e.quad(t(s,1.15,vr),t(i,1.15,vr),t(i,1.15,vr+.7),t(s,1.15,vr+.7),o(c).map(h=>-h),Xt.CEIL,[[0,400],[0,400],[0,400],[0,400]]),e.tri([Dt.x,vr+.7,Dt.z],t(i,1.15,vr+.7),t(s,1.15,vr+.7),[0,-1,0],Xt.OCULUS)}}{let n=Oo.ri,r=Oo.ro,a=Oo.n*Oo.step;for(let c=0;c<Oo.n;c++){let h=c*Oo.step,f=(c+1)*Oo.step,u=qr(h),d=qr(f),v=(c+1)*Oo.rise,l=c*Oo.rise,p=2;for(let x=0;x<p;x++){let b=u+(d-u)*x/p-(x===0?.004:0),w=u+(d-u)*(x+1)/p;e.quad(t(b,n,v),t(b,r,v),t(w,r,v),t(w,n,v),[0,1,0],Xt.STEP,[[n*b,c],[r*b,c],[r*w,c],[n*w,c]])}let m=[-Math.sin(u),0,Math.cos(u)],g=u-.004;e.quad(t(g,n,l),t(g,r,l),t(g,r,v),t(g,n,v),m,Xt.STEP,[[n*u,c+.5],[r*u,c+.5],[r*u,c+.5],[n*u,c+.5]]),e.quad(t(u,n,V0(h)+.06),t(d,n,V0(f)+.06),t(d,n,v),t(g,n,v),o((u+d)/2).map(x=>-x),Xt.STEP,[[0,500],[0,500],[0,500],[0,500]])}let s=Math.ceil(a/(1.2*qo/180)),i=[n,n+.6,n+1.2,r];for(let c=0;c<s;c++){let h=c/s*a,f=(c+1)/s*a,u=qr(h),d=qr(f),v=V0(h),l=V0(f),p=v-Oo.thick,m=l-Oo.thick,g=o(u).map(z=>-z),x=o(d).map(z=>-z),b=e.v(t(u,n,p),g,Xt.STRING,[h*n,0]),w=e.v(t(d,n,m),x,Xt.STRING,[f*n,0]),M=e.v(t(d,n,l+.06),x,Xt.STRING,[f*n,1]),k=e.v(t(u,n,v+.06),g,Xt.STRING,[h*n,1]);e.idx.push(b,w,M,b,M,k);for(let z=0;z<i.length-1;z++){let P=i[z],R=i[z+1],U=q=>{let Q=o(q);return[-Q[0]*.12,-.99,-Q[2]*.12]};e.quad(t(u,P,p),t(u,R,p),t(d,R,m),t(d,P,m),U((u+d)/2),Xt.SOFFIT,[[h*P,P],[h*R,R],[f*R,R],[f*P,P]])}}}return e}function D_(){let e=l2(),t=Oo.ri+.045,o=Oo.n*Oo.step,n=Math.ceil(o/(.8*qo/180)),r=.92,a=(c,h,f)=>[Dt.x+Math.cos(c)*h,f,Dt.z+Math.sin(c)*h],s=c=>[Math.cos(c),0,Math.sin(c)];for(let c=0;c<n;c++){let h=c/n*o,f=(c+1)/n*o,u=qr(h),d=qr(f),v=V0(h)+.06,l=V0(f)+.06,p=s(u).map(z=>-z),m=s(d).map(z=>-z),g=h*t,x=f*t,b=e.v(a(u,t,v),p,Xt.RAILING,[g,0]),w=e.v(a(d,t,l),m,Xt.RAILING,[x,0]),M=e.v(a(d,t,l+r),m,Xt.RAILING,[x,r]),k=e.v(a(u,t,v+r),p,Xt.RAILING,[g,r]);e.idx.push(b,w,M,b,M,k)}((c,h,f,u)=>{let v=p=>{let m=qr(p),g=V0(p)+.06+h,x=a(m,t+c,g),b=s(m),w=[];for(let M=0;M<8;M++){let k=M/8*2*qo,z=[b[0]*Math.cos(k),Math.sin(k),b[2]*Math.cos(k)];w.push([[x[0]+z[0]*f,x[1]+z[1]*f,x[2]+z[2]*f],z])}return w},l=v(0);for(let p=1;p<=n;p++){let m=v(p/n*o);for(let g=0;g<8;g++){let x=(g+1)%8,b=e.v(l[g][0],l[g][1],u),w=e.v(m[g][0],m[g][1],u),M=e.v(m[x][0],m[x][1],u),k=e.v(l[x][0],l[x][1],u);e.idx.push(b,w,M,b,M,k)}l=m}})(0,r+.02,.028,Xt.IRON);for(let c of Fu){let h=Math.atan2(c[2]-Dt.z,c[0]-Dt.x),f=[Math.cos(h),0,Math.sin(h)],u=12;for(let p=0;p<u;p++){let m=p/u*2*qo,g=(p+1)/u*2*qo,x=(b,w,M)=>[c[0]+Math.cos(b)*w,M,c[2]+Math.sin(b)*w];e.quad(x(m,.16,c[1]),x(g,.16,c[1]),x(g,.13,c[1]-.05),x(m,.13,c[1]-.05),[Math.cos(m)*.6,.8,Math.sin(m)*.6],Xt.IRON),e.quad(x(m,.16,c[1]),x(g,.16,c[1]),x(g,0,c[1]+.002),x(m,0,c[1]+.002),[0,1,0],Xt.IRON)}let d=[c[0]+f[0]*.16,c[1]-.35,c[2]+f[2]*.16],v=[-f[2],0,f[0]],l=.018;e.quad([d[0]-v[0]*l,d[1],d[2]-v[2]*l],[d[0]+v[0]*l,d[1],d[2]+v[2]*l],[c[0]+v[0]*l,c[1]-.05,c[2]+v[2]*l],[c[0]-v[0]*l,c[1]-.05,c[2]-v[2]*l],[-f[0],.5,-f[2]],Xt.IRON)}{let c=qr(0),h=a(c,t,0),f=10;for(let u=0;u<f;u++){let d=u/f*2*qo,v=(u+1)/f*2*qo,l=(p,m,g)=>[h[0]+Math.cos(p)*m,g,h[2]+Math.sin(p)*m];e.quad(l(d,.035,0),l(v,.035,0),l(v,.035,r+.1),l(d,.035,r+.1),[Math.cos((d+v)/2),0,Math.sin((d+v)/2)],Xt.IRON),e.quad(l(d,.06,r+.1),l(v,.06,r+.1),l(v,.03,r+.2),l(d,.03,r+.2),[Math.cos((d+v)/2)*.8,.6,Math.sin((d+v)/2)*.8],Xt.IRON)}}return e}function G_(){let e=[],t=[],o=[],n=[];for(let a of qu){let[s,i,c,h,f,u]=a,d=e.length/3;for(let l=0;l<=7;l++){let p=l/7*2*qo+u,m=Math.cos(p),g=Math.sin(p);e.push(s+m*h,i,c+g*h,s+m*h,i+f,c+g*h),t.push(m,0,g,m,0,g),o.push(0,f,u,1,f,u)}for(let l=0;l<7;l++){let p=d+l*2;n.push(p,p+2,p+3,p,p+3,p+1)}let v=e.length/3;e.push(s,i+f-.006,c),t.push(0,1,0),o.push(2,f,u);for(let l=0;l<7;l++){let p=l/7*2*qo+u;e.push(s+Math.cos(p)*h,i+f,c+Math.sin(p)*h),t.push(0,1,0),o.push(1,f,u)}for(let l=0;l<7;l++)n.push(v,v+1+l,v+1+(l+1)%7)}return{pos:e,nrm:t,info:o,idx:n}}function H_(){let e=[],t=[],o=[],n=[];for(let r of qu){let[a,s,i,,c,h]=r,f=e.length/3;for(let u of[[-1,0],[1,0],[1,1],[-1,1]])e.push(a,s+c+.004,i),t.push(u[0],u[1]),o.push(h);n.push(f,f+1,f+2,f,f+2,f+3)}return{ctr:e,corner:t,ph:o,idx:n}}function U_(e){let t=new DataView(e),o=t.getUint32(4,!0),n=t.getUint32(8,!0),r=[],a=[];for(let g=0;g<3;g++)r.push(t.getFloat32(12+g*4,!0)),a.push(t.getFloat32(24+g*4,!0));let s=36,i=new Uint16Array(e,s,o*3);s+=o*6;let c=new Uint16Array(e,s,n);s+=n*2;let h=new Int8Array(e,s,o*3);s+=o*3;let f=new Uint8Array(e,s,o),u=new Float32Array(o*3),d=new Float32Array(o*3),v=new Float32Array(o),l=Math.cos(vn.yaw),p=Math.sin(vn.yaw),m=vn.scale;for(let g=0;g<o;g++){let x=(r[0]+i[g*3]/65535*a[0])*m,b=(r[1]+i[g*3+1]/65535*a[1])*m,w=(r[2]+i[g*3+2]/65535*a[2])*m;u[g*3]=vn.x+l*x+p*w,u[g*3+1]=b,u[g*3+2]=vn.z-p*x+l*w;let M=h[g*3]/127,k=h[g*3+1]/127,z=h[g*3+2]/127;d[g*3]=l*M+p*z,d[g*3+1]=k,d[g*3+2]=-p*M+l*z,v[g]=f[g]}return{pos:u,nrm:d,mat:v,idx:new Uint32Array(c)}}function B_(){let e=[],t=(u,d)=>[Dt.x+Math.cos(u)*d,Dt.z+Math.sin(u)*d];e.push([[0,ht.z0],[W0(ht.z0),ht.z0]]),e.push([[W0(ht.z1),ht.z1],[0,ht.z1]]);let o=Math.asin((ht.z1-Dt.z)/oo),n=72;for(let u=0;u<n;u++){let d=o+u/n*(2*qo-2*o),v=o+(u+1)/n*(2*qo-2*o);e.push([t(d,oo-.25),t(v,oo-.25)])}let r=lh[0]-.55+.35;e.push([[r,Nn.z0],[r,Nn.z1]]);let a=2.4/Oo.k,s=12;for(let u=0;u<s;u++){let d=qr(u/s*a),v=qr((u+1)/s*a);e.push([t(d,Oo.ri-.2),t(v,Oo.ri-.2)])}e.push([t(qr(0),Oo.ri-.2),t(qr(0),oo)]),e.push([t(qr(a),Oo.ri-.2),t(qr(a),oo)]);let i=Math.cos(vn.yaw),c=Math.sin(vn.yaw),h=vn.scale,f=[[-1,-.62],[1.25,-.62],[1.25,.62],[-1,.62]].map(([u,d])=>[vn.x+(i*u+c*d)*h,vn.z+(-c*u+i*d)*h]);for(let u=0;u<4;u++)e.push([f[u],f[(u+1)%4]]);return e}Qr.exports=e=>{let t=q_(),o=D_(),n=G_(),r=H_(),a=j0(),s=`
	precision highp float;
	${O_.GLSL}
	uniform float time;
	${c2()}
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
	}`,c=e({vert:i,frag:`${s}
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
				base *= 1.0 - 0.25 * smoothstep(3.0, ${Xn(vr)}, v_pos.y);
			} else if (k < 2.5) {
				// the steps: a greyer, harder stone, worn paler in the middle
				float r = length(v_pos.xz - vec2(${Xn(Dt.x)}, ${Xn(Dt.z)}));
				base = limestone(v_pos.xz * 1.4 + v_uv * 0.3) * vec3(0.90, 0.88, 0.86);
				base *= 1.0 + 0.10 * (1.0 - smoothstep(0.0, 0.6, abs(r - ${Xn((Oo.ri+Oo.ro)/2)})));
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
				vec2 q = v_pos.xz - vec2(${Xn(Dt.x)}, ${Xn(Dt.z)});
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
		}`,attributes:{position:t.pos,normal:t.nrm,kind:t.kind,uv:t.uv},elements:new Uint32Array(t.idx),cull:{enable:!1}}),h=e({vert:i,frag:`${s}
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
		}`,attributes:{ctr:r.ctr,corner:r.corner,ph:r.ph},elements:new Uint32Array(r.idx),uniforms:{halo:e.prop("halo")},depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),d=null;fetch("res/piano.bin").then(m=>{if(!m.ok)throw new Error("Could not load piano.bin");return m.arrayBuffer()}).then(m=>{let g=U_(m);d=e({vert:`
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
				}`,attributes:{position:g.pos,normal:g.nrm,mat:g.mat},elements:g.idx,cull:{enable:!1}})}).catch(m=>console.error(m));let v=(()=>{let m=[],g=[],x=[],b=[],M=[Dt.x,vr-.3,Dt.z],k=[xl.stoolX,.02,xl.keyFront+.1],z=1.25,P=2.35;for(let R=0;R<=40;R++){let U=R/40*2*qo,q=Math.cos(U),Q=Math.sin(U);m.push(M[0]+q*z,M[1],M[2]+Q*z,k[0]+q*P,k[1],k[2]+Q*P),g.push(q,.08,Q,q,.08,Q),x.push(1,0)}for(let R=0;R<40;R++){let U=R*2;b.push(U,U+1,U+3,U,U+3,U+2)}return{pos:m,nrm:g,hh:x,idx:b}})(),l=e({vert:`
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
		}`,attributes:{position:v.pos,normal:v.nrm,hh:v.hh},elements:v.idx,depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});function p(m){let g=m&&m.reflected;c(),h(),f(),d&&d(),g||(l(),u({halo:1}),u({halo:0}))}return p};Qr.exports.C=Dt;Qr.exports.R=oo;Qr.exports.PASS=ht;Qr.exports.SURR=s0;Qr.exports.OFF=lh;Qr.exports.BAY=Nn;Qr.exports.PATH=ch;Qr.exports.PIANO=vn;Qr.exports.PLAY=xl;Qr.exports.TOP=vr;Qr.exports.roomGLSL=c2;Qr.exports.segments=B_});var y2=ke((bA,x2)=>{"use strict";var j_=Ps(),{addFlutedColumn:f2,addStatue:W_,addPlant:V_}=Fm(),h2=H0(),X_=Ui(),Ua=br(),Y_=Ea(),Zi=X0(),ko=14,On=Ua.C.hallEnd+.35,Xo=8,Io=.35,Du=1.15,Gu=1.15,Hu=[18,29,40],K_=[[[0,0],[0,Zi.PASS.z0]],[[0,Zi.PASS.z1],[0,On]],[[ko,On],[ko,0]],[[0,0],[ko,0]],[[ko,On],[0,On]]],v2=[];for(let e of Hu)for(let t of[1.25,ko-1.25]){let o=Du/2,n=Gu/2;v2.push([[t-o,e-n],[t+o,e-n]],[[t+o,e-n],[t+o,e+n]],[[t+o,e+n],[t-o,e+n]],[[t-o,e+n],[t-o,e-n]])}var hh=12,m2=2.95,g2=.62,ph=m2+g2,uh=[{file:"venus.bin",x:1.85,z:On-1.6,yaw:2.67,height:5.2,pedestal:!0,mat:1},{file:"david.bin",x:ko-2.1,z:On-1.6,yaw:-2.67,height:5.2,pedestal:!0,mat:1},{file:"pieta.bin",x:1.75,z:5.9,yaw:Math.PI/2,height:3.6,base:1,mat:1},{file:"spinario.bin",x:Ua.NICHE_X[0],z:Ua.NICHE_STATUE_Z,yaw:-.35,height:1.85,base:Ua.NICHE_PLINTH_TOP,mat:3},{file:"charioteer.bin",x:Ua.NICHE_X[1],z:Ua.NICHE_STATUE_Z+.1,yaw:0,height:2.95,base:Ua.NICHE_PLINTH_TOP,mat:3}],Q_={x0:Io,x1:3.15,z0:3.6,z1:8.2,top:1},u2=.8,vh=1.17,yl=[];[{z:10.4,dz:-.7},{z:19.2,dz:.7},{z:27.8,dz:-.7}].forEach((e,t)=>{yl.push({x:1,z:e.z,seed:11+t*7,away:[1,e.dz]}),yl.push({x:ko-1,z:e.z,seed:53+t*5,away:[-1,e.dz]})});function Uu(e,t,o,n){return[[[e-o,t-n],[e+o,t-n]],[[e+o,t-n],[e+o,t+n]],[[e+o,t+n],[e-o,t+n]],[[e-o,t+n],[e-o,t-n]]]}var mh=[];for(let e of[-1,1])mh.push(...Uu(ko/2+e*ph,hh,.85,.85));for(let e of uh.filter(t=>t.pedestal))mh.push(...Uu(e.x,e.z,vh*1.1,vh*1.1));for(let e of yl)mh.push(...Uu(e.x,e.z,.42,.42));var Z_=K_.concat(v2,mh,Zi.segments());function J_(e){let o=new Map,n=(r,a,s)=>{let i=r+":"+a;o.has(i)||o.set(i,[]);let c=o.get(i);c.includes(s)||c.push(s)};for(let r of e){let a=Math.floor(Math.min(r[0][0],r[1][0])/4)-1,s=Math.floor(Math.max(r[0][0],r[1][0])/4)+1,i=Math.floor(Math.min(r[0][1],r[1][1])/4)-1,c=Math.floor(Math.max(r[0][1],r[1][1])/4)+1;for(let h=a;h<=s;h++)for(let f=i;f<=c;f++)n(h,f,r)}return{get(r,a){let s=Math.floor(r/4),i=Math.floor(a/4),c=[];for(let h=-1;h<=1;h++)for(let f=-1;f<=1;f++){let u=o.get(s+h+":"+(i+f));u&&c.push(...u)}return[...new Set(c)]}}}var dh=[],Rn={curMat:[0,0,0]};function Bu(e,t,o,n,r,a,s){let i=e.length/3;e.push(...o,...n,...r,...a),t.push(...s,...s,...s,...s);let c=Rn.curMat;return dh.push(...c,...c,...c,...c),[i,i+2,i+1,i+1,i+2,i+3]}function Co(e,t,o,n,r,a,s,i,c){let h=(f,u,d,v,l)=>{o.push(...Bu(e,t,f,u,d,v,l))};h([n,r,a],[s,r,a],[n,i,a],[s,i,a],[0,0,-1]),h([s,r,c],[n,r,c],[s,i,c],[n,i,c],[0,0,1]),h([n,r,c],[n,r,a],[n,i,c],[n,i,a],[-1,0,0]),h([s,r,a],[s,r,c],[s,i,a],[s,i,c],[1,0,0]),h([n,i,a],[s,i,a],[n,i,c],[s,i,c],[0,1,0]),h([n,r,c],[s,r,c],[n,r,a],[s,r,a],[0,-1,0])}function Qi(e,t,o,n,r){let a=Rn,s=a.vert(e,r),i=a.vert(t,r),c=a.vert(o,r),h=a.vert(n,r);a.tri(s,i,c),a.tri(i,h,c)}function d2(e,t,o,n,r,a,s){for(let i=0;i<s;i++){let c=Math.PI*i/s,h=Math.PI*(i+1)/s,f=Math.cos(c),u=Math.sin(c),d=Math.cos(h),v=Math.sin(h),l=[e+o*f,t+o*u],p=[e+o*d,t+o*v],m=[e+n*f,t+n*u],g=[e+n*d,t+n*v];Qi([l[0],l[1],r],[p[0],p[1],r],[m[0],m[1],r],[g[0],g[1],r],[0,0,-1]),Qi([l[0],l[1],a],[p[0],p[1],a],[m[0],m[1],a],[g[0],g[1],a],[0,0,1]);let x=(c+h)/2;Qi([l[0],l[1],r],[p[0],p[1],r],[l[0],l[1],a],[p[0],p[1],a],[-Math.cos(x),-Math.sin(x),0]),Qi([m[0],m[1],r],[g[0],g[1],r],[m[0],m[1],a],[g[0],g[1],a],[Math.cos(x),Math.sin(x),0])}}function e6(e,t,o,n,r,a,s){for(let i=0;i<s;i++){let c=Math.PI*i/s,h=Math.PI*(i+1)/s,f=e+o*Math.cos(c),u=t+o*Math.sin(c),d=e+o*Math.cos(h),v=t+o*Math.sin(h);Qi([f,u,r],[d,v,r],[f,n,r],[d,n,r],[0,0,-1]),Qi([f,u,a],[d,v,a],[f,n,a],[d,n,a],[0,0,1])}}function t6(e,t,o,n){let r=ko/2,a=m2,s=3,i=a+.42,c=i+.15,h=g2,f=ph,u=5.98,d=n-.45,v=n+.45,l=64,p=f2(Rn,r-f,n,0,u,h);f2(Rn,r+f,n,0,u,h),Rn.curMat=[0,0,0],d2(r,s,a,i,d,v,l),d2(r,s,i,c,d-.07,v+.07,l),e6(r,s,c,p+.05,d,v,l);for(let g of[-1,1]){let x=r+g*(c-.02),b=r+g*f;Co(e,t,o,Math.min(x,b),s,d,Math.max(x,b),p+.05,v)}for(let g of[-1,1]){let x=r+g*(a-.05),b=r+g*(a+.85);Co(e,t,o,Math.min(x,b),s-.16,n-.6,Math.max(x,b),s,n+.6)}let m=f+h*1.42+.45;Co(e,t,o,r-m,p,n-.7,r+m,p+.44,n+.7),Co(e,t,o,r-m+.12,p+.44,n-.62,r+m-.12,p+.7,n+.62),Co(e,t,o,r-m-.1,p+.7,n-.84,r+m+.1,p+.84,n+.84),Co(e,t,o,r-m-.22,p+.84,n-.96,r+m+.22,p+1,n+.96),Co(e,t,o,r-.3,s+a-.1,n-.56,r+.3,p,n+.56)}function p2(e,t,o,n,r){Co(e,t,o,n-.72,0,r-.72,n+.72,.2,r+.72),Co(e,t,o,n-.58,.2,r-.58,n+.58,.4,r+.58),Co(e,t,o,n-Du/2,.4,r-Gu/2,n+Du/2,Xo-1.35,r+Gu/2),Co(e,t,o,n-.67,.42,r-.67,n+.67,.62,r+.67),Co(e,t,o,n-.67,Xo-1.58,r-.67,n+.67,Xo-1.35,r+.67),Co(e,t,o,n-.82,Xo-1.35,r-.82,n+.82,Xo-1.05,r+.82),Co(e,t,o,n-.66,Xo-1.05,r-.66,n+.66,Xo-.78,r+.66),Co(e,t,o,n-.92,Xo-.78,r-.92,n+.92,Xo-.55,r+.92),Co(e,t,o,n-.78,Xo-.55,r-.78,n+.78,Xo-.3,r+.78),Co(e,t,o,n-.92,Xo-.3,r-.92,n+.92,Xo-.1,r+.92)}function fh(e,t,o,n,r){r==="left"?(Co(e,t,o,-.08,1,n-3.8/2,.14,5.7,n+3.8/2),Co(e,t,o,-.08-.04,1+.18,n-3.8/2+.18,.18,5.7-.18,n+3.8/2-.18)):(Co(e,t,o,ko-.14,1,n-3.8/2,ko+.08,5.7,n+3.8/2),Co(e,t,o,ko-.18,1+.18,n-3.8/2+.18,ko+.08+.04,5.7-.18,n+3.8/2-.18))}function o6(e,t,o,n){Co(e,t,o,.65,Xo-.16,n-1.65,.65+.22,Xo,n+1.65),Co(e,t,o,ko-.65-.22,Xo-.16,n-1.65,ko-.65,Xo,n+1.65),Co(e,t,o,.65,Xo-.16,n-1.65,ko-.65,Xo,n-1.43),Co(e,t,o,.65,Xo-.16,n+1.43,ko-.65,Xo,n+1.65),o.push(...Bu(e,t,[.65+.22,Xo-.16,n-1.43],[ko-.65-.22,Xo-.16,n-1.43],[.65+.22,Xo-.16,n+1.43],[ko-.65-.22,Xo-.16,n+1.43],[0,-1,0]))}x2.exports=function(){let e=[],t=[],o=[];dh=[],Rn=j_.createBuilder(e,t,o,dh),o.push(...Bu(e,t,[0,0,0],[ko,0,0],[0,0,On],[ko,0,On],[0,1,0])),X_.addSkylight(Rn,[0,0,0],On),Rn.curMat=[0,0,0];{let c=Zi.SURR;Co(e,t,o,-Io,0,0,Io,Xo,c.z0),Co(e,t,o,-Io,0,c.z1,Io,Xo,On),Co(e,t,o,-Io,c.top,c.z0,Io,Xo,c.z1)}Co(e,t,o,ko-Io,0,Ua.C.z1,ko+Io,Xo,On-Io),Co(e,t,o,ko-Io-.12,0,Ua.C.z1+2*Io,ko-Io,.42,On-Io),Co(e,t,o,ko-Io-.07,.42,Ua.C.z1+2*Io,ko-Io,.5,On-Io);for(let[c,h]of[[0,Zi.SURR.z0],[Zi.SURR.z1,On-Io]])Co(e,t,o,Io,0,c,Io+.12,.42,h),Co(e,t,o,Io,.42,c,Io+.07,.5,h);Co(e,t,o,Io,0,On-Io-.12,ko-Io,.42,On-Io),Co(e,t,o,Io,.42,On-Io-.07,ko-Io,.5,On-Io),h2.addEntranceWall(Rn),h2.addFrames(Rn),Rn.curMat=[0,0,0],Co(e,t,o,-Io,0,On-Io,ko+Io,Xo,On+Io),t6(e,t,o,hh);for(let c of Hu)p2(e,t,o,1.25,c),p2(e,t,o,ko-1.25,c);fh(e,t,o,22,"left"),fh(e,t,o,25,"right"),fh(e,t,o,33,"left"),fh(e,t,o,36,"right");let n=[4,9,34,39,44,49];for(let c of n)o6(e,t,o,c);Ua.addWing(Rn),Rn.curMat=[0,0,0];for(let c of uh.filter(h=>h.pedestal))W_(Rn,c.x,c.z,vh,u2);{let c=Q_;Rn.curMat=[0,0,0],Rn.box(c.x0,0,c.z0-.08,c.x1+.08,.16,c.z1+.08,[0,0,0]),Rn.box(c.x0,.16,c.z0+.04,c.x1-.04,c.top-.14,c.z1-.04,[0,0,0]),Rn.box(c.x0,c.top-.14,c.z0-.02,c.x1+.03,c.top-.06,c.z1+.02,[0,0,0]),Rn.box(c.x0,c.top-.06,c.z0-.06,c.x1+.07,c.top,c.z1+.06,[0,0,0])}Y_.addAlcove(Rn);for(let c of yl)V_(Rn,c.x,c.z,c.seed,1,c.away);Rn.curMat=[0,0,0];let r=[[[ko,On-.35],[0,On-.35]],[[0,3],[0,10]],[[ko,15],[ko,22]],[[0,24],[0,31]],[[ko,33],[ko,40]],[[0,41],[0,46]]],a=J_(Z_),s=(c,h)=>{let f=0,u=1/0;return r.forEach((d,v)=>{let l=(d[0][0]+d[1][0])/2,p=(d[0][1]+d[1][1])/2,m=Math.hypot(c-l,h-p);m<u&&(u=m,f=v)}),f},i=[];for(let c=0;c<10;c++)i.push({c:[0,0,0,0],d:[1,0,0,0]});return{placements:r,lights:i,statues:uh,occluders:[...Hu.flatMap(c=>[[1.25,c,.78],[ko-1.25,c,.78]]),[ko/2-ph,hh,.86],[ko/2+ph,hh,.86],...uh.filter(c=>c.pedestal).map(c=>[c.x,c.z,vh*1.12]),...yl.map(c=>[c.x,c.z,.34])],pedestalTop:u2,mat:dh,getAreaIndex:s,getGridSegments:(c,h)=>a.get(c,h),getGridParts:(c,h)=>a.get(c,h),position:e,normal:t,elements:o}}});var ju=ke((wA,b2)=>{"use strict";var{doorLightGLSL:n6}=H0(),{skylightGLSL:r6}=Ui(),{windowLightGLSL:a6,C:la}=br(),{alcoveLightGLSL:s6}=Ea(),Aa=e=>e.toFixed(4),i6=(()=>{let e=[-.22,.6,-.77],t=Math.hypot(e[0],e[1],e[2]);return e.map(o=>(o/t).toFixed(4)).join(", ")})();b2.exports=(e,t,o,n)=>{let a=(t.occluders||[]).slice(0,24).map(([v,l,p])=>`ao = min(ao, contact(v_pos.xz, vec2(${v.toFixed(3)}, ${l.toFixed(3)}), ${p.toFixed(3)}));`).join(`
      `),s={c:[0,0,0,0],d:[1,0,0,0]},i=-1,c=[],h=v=>{let l=v&&v.tick!==void 0?v.tick:0;if(l!==i||c.length===0){i=l;let p=t.viewer||[7,2,20];for(c=t.lights.filter(m=>m.c[3]>.5).map(m=>({l:m,d:Math.hypot(m.c[0]-p[0],m.c[2]-p[2])})).sort((m,g)=>m.d-g.d).slice(0,8).map(m=>m.l);c.length<8;)c.push(s)}return c},f={},u="",d="";for(let v=0;v<8;v++)f["lightC"+v]=l=>h(l)[v].c,f["lightD"+v]=l=>h(l)[v].d,u+="uniform vec4 lightC"+v+", lightD"+v+`;
`,d+="pic += pictureLight(lightC"+v+", lightD"+v+`, v_pos, N);
`;return e({frag:`
    precision highp float;

    uniform float yScale;
    uniform float mirrorOn;
    uniform float night;   // 0 by day, 1 at night
    uniform float time;
    ${j0().lanternGLSL()}

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

    ${n6()}

    ${r6()}

    ${a6()}

    ${s6()}

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
        step(abs(v_pos.z - ${Aa(la.hallEnd)}), 0.02) * step(0.5, -N.z) +
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
                 + exp(-pow((v_pos.z - ${Aa((la.z0+la.z1)/2)}) / 1.3, 2.0)) * step(14.0, v_pos.x);
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
      light += (1.0 - smoothstep(2.0, 16.0, abs(v_pos.z - ${Aa(la.hallEnd-1.6)}))) * 0.09 * (1.0 - smoothstep(14.5, 18.0, v_pos.x));

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
          float through = doorLight(v_pos, vec3(${i6}));
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
        if (v_pos.x < 14.0) wallD = min(wallD, ${Aa(la.hallEnd)} - v_pos.z);
        if (v_pos.x < 14.0 && (v_pos.z < ${Aa(la.z0)} || v_pos.z > ${Aa(la.z1)})) wallD = min(wallD, 13.65 - v_pos.x);
        if (v_pos.x > 13.65 && v_pos.z > ${Aa(la.z0-1)}) wallD = min(min(min(wallD, v_pos.z - ${Aa(la.z0)}), ${Aa(la.z1)} - v_pos.z), ${Aa(la.x1)} - v_pos.x);
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
        if (v_pos.z < ${Aa(la.z0+.3)} && v_pos.x > ${Aa(la.x0)}) {
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
    }`,attributes:{position:t.position,normal:t.normal,a_mat:t.mat},uniforms:f,blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},elements:new Uint32Array(t.elements),offset:n?e.prop("offset"):0,count:n?e.prop("count"):t.elements.length})}});var _2=ke((_A,w2)=>{"strict mode";var c6="https://api.artic.edu/api/v1/artworks/search",l6=({image_id:e},t)=>`https://www.artic.edu/iiif/2/${e}/full/${t},/0/default.jpg`,f6="?query[bool][must][][term][classification_titles.keyword]=painting&query[bool][must][][term][is_public_domain]=true",h6="&fields=image_id,title,artist_title",u6={low:400,mid:843,high:1686};w2.exports={fetchList:async function(e,t){let o=c6+f6+h6+`&from=${e}&size=${t}`;return(await fetch(o).then(r=>r.json())).data.filter(r=>r.image_id)},fetchImage:async function(e,t){let o=l6(e,u6[t]),n=await fetch(o).then(r=>r.blob());return{title:e.title+" - "+e.artist_title,image:n}}}});var S2=ke((MA,k2)=>{"use strict";var d6=du(),p6=Ma(),v6=e=>"images/web/"+e.slug+(p6.isPhone?"-1024":"")+".webp";async function M2(e){let t=await fetch(e);if(!t.ok)throw new Error("Could not load "+e);return t.blob()}k2.exports={fetchList:async function(e,t){return d6.slice(e,e+t).map((o,n)=>({...o,image_id:e+n}))},fetchImage:async function(e){let t;try{t=await M2(v6(e))}catch(o){t=await M2("images/"+e.file)}return{title:e.title,image:t}}}});var A2=ke((kA,E2)=>{"strict mode";E2.exports={default:"local",artic:_2(),local:S2()}});var Vu=ke((SA,T2)=>{"strict mode";var Ds=document.createElement("canvas"),Wu=Ds.width=Ds.height=1024,Y0=Ds.getContext("2d");Y0.mozImageSmoothingEnabled=!1;Y0.webkitImageSmoothingEnabled=!1;Y0.font="32px Verdana";Y0.textBaseline="bottom";Y0.fillStyle="#aaa";function z2(e,t,o,n){var r=t,a,s=0,i=0,c=t.split(" "),h,f;for(h=f=c.length;e.measureText(r).width>o&&h>1;){h--,r=a="";for(var u=0;u<f;u++)u<h?(r+=c[u],u+1<h&&(r+=" ")):(a+=c[u],u+1<f&&(a+=" "))}return n.push(r),i=e.measureText(r).width,a&&(s=z2(e,a,o,n),s>i&&(i=s)),i}T2.exports={init(e,t,o=Wu){var n=[];z2(Y0,t,Math.min(o*Wu,Wu),n),Y0.clearRect(0,0,Ds.width,Ds.height);for(var r=0;r<n.length;r++)Y0.fillText(n[r],0,Ds.height-(Math.max(n.length,3)-r)*32);return e({data:Ds,min:"mipmap",mipmap:"nice",flipY:!0})},draw(e){return e({frag:`
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
            }`,attributes:{pos:[0,0,1,0,0,1,1,1,0,1,1,0]},uniforms:{model:e.prop("textmodel"),tex:e.prop("text")},count:6,blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}})}}});var R2=ke((EA,N2)=>{"strict mode";var Xu=A2(),m6=new URLSearchParams(window.location.search).get("api"),L2=Xu[m6]||Xu[Xu.default],g6=Vu(),Yu={},ec=[],x6=2;function y6(e){return(!navigator.connection||navigator.connection.downlink<x6)&&(e=e=="high"?"mid":"low"),e}var b6=Ma(),Ji=document.createElement("canvas");Ji.width=Ji.height=b6.isPhone?1024:2048;var Zu=Ji.getContext("2d");Zu.imageSmoothingEnabled=!0;Zu.imageSmoothingQuality="high";var Ku=!1,w6=e=>[(ec.pop()||e.texture)([[[200,200,200]]]),t=>(ec.pop()||e.texture)([[[0,0,0,0]]]),1];async function Qu(e,t,o){Ku===!1&&(Ku=e.hasExtension("EXT_texture_filter_anisotropic")?e._gl.getParameter(e._gl.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0);let n,r;try{let a=await L2.fetchImage(t,y6(o));r=a.title,n=await createImageBitmap(a.image),Zu.drawImage(n,0,0,Ji.width,Ji.height)}catch(a){return console.error(a),o=="high"?await Qu(e,t,"low"):w6(e)}return[(ec.pop()||e.texture)({data:Ji,min:"mipmap",mipmap:"nice",aniso:Ku,flipY:!0}),a=>g6.init(ec.pop()||e.texture,r,a),n.width/n.height]}N2.exports={fetch:(e,t=10,o="low",n,r)=>{let a=Object.keys(Yu).length;L2.fetchList(a,t).then(s=>{t=s.length,s.map(i=>{if(Yu[i.image_id]){--t===0&&r();return}Yu[i.image_id]=i,Qu(e,i,o).then(([c,h,f])=>{n({...i,tex:c,textGen:h,aspect:f}),--t===0&&r()})})})},load:(e,t,o="low")=>{t.tex||t.loading||(t.loading=!0,Qu(e,t,o).then(([n,r])=>{t.loading=!1,t.tex=n,t.text=r(t.width)}))},unload:e=>{e.tex&&(ec.push(e.tex),e.tex=void 0),e.text&&(ec.push(e.text),e.text=void 0)}}});var C2=ke((AA,O2)=>{O2.exports=_6;function _6(){var e=new Float32Array(16);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var I2=ke((zA,P2)=>{P2.exports=M6;function M6(e){var t=new Float32Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var F2=ke((TA,$2)=>{$2.exports=k6;function k6(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var Ju=ke((LA,q2)=>{q2.exports=S6;function S6(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var G2=ke((NA,D2)=>{D2.exports=E6;function E6(e,t){if(e===t){var o=t[1],n=t[2],r=t[3],a=t[6],s=t[7],i=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=o,e[6]=t[9],e[7]=t[13],e[8]=n,e[9]=a,e[11]=t[14],e[12]=r,e[13]=s,e[14]=i}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e}});var U2=ke((RA,H2)=>{H2.exports=A6;function A6(e,t){var o=t[0],n=t[1],r=t[2],a=t[3],s=t[4],i=t[5],c=t[6],h=t[7],f=t[8],u=t[9],d=t[10],v=t[11],l=t[12],p=t[13],m=t[14],g=t[15],x=o*i-n*s,b=o*c-r*s,w=o*h-a*s,M=n*c-r*i,k=n*h-a*i,z=r*h-a*c,P=f*p-u*l,R=f*m-d*l,U=f*g-v*l,q=u*m-d*p,Q=u*g-v*p,D=d*g-v*m,V=x*D-b*Q+w*q+M*U-k*R+z*P;return V?(V=1/V,e[0]=(i*D-c*Q+h*q)*V,e[1]=(r*Q-n*D-a*q)*V,e[2]=(p*z-m*k+g*M)*V,e[3]=(d*k-u*z-v*M)*V,e[4]=(c*U-s*D-h*R)*V,e[5]=(o*D-r*U+a*R)*V,e[6]=(m*w-l*z-g*b)*V,e[7]=(f*z-d*w+v*b)*V,e[8]=(s*Q-i*U+h*P)*V,e[9]=(n*U-o*Q-a*P)*V,e[10]=(l*k-p*w+g*x)*V,e[11]=(u*w-f*k-v*x)*V,e[12]=(i*R-s*q-c*P)*V,e[13]=(o*q-n*R+r*P)*V,e[14]=(p*b-l*M-m*x)*V,e[15]=(f*M-u*b+d*x)*V,e):null}});var j2=ke((OA,B2)=>{B2.exports=z6;function z6(e,t){var o=t[0],n=t[1],r=t[2],a=t[3],s=t[4],i=t[5],c=t[6],h=t[7],f=t[8],u=t[9],d=t[10],v=t[11],l=t[12],p=t[13],m=t[14],g=t[15];return e[0]=i*(d*g-v*m)-u*(c*g-h*m)+p*(c*v-h*d),e[1]=-(n*(d*g-v*m)-u*(r*g-a*m)+p*(r*v-a*d)),e[2]=n*(c*g-h*m)-i*(r*g-a*m)+p*(r*h-a*c),e[3]=-(n*(c*v-h*d)-i*(r*v-a*d)+u*(r*h-a*c)),e[4]=-(s*(d*g-v*m)-f*(c*g-h*m)+l*(c*v-h*d)),e[5]=o*(d*g-v*m)-f*(r*g-a*m)+l*(r*v-a*d),e[6]=-(o*(c*g-h*m)-s*(r*g-a*m)+l*(r*h-a*c)),e[7]=o*(c*v-h*d)-s*(r*v-a*d)+f*(r*h-a*c),e[8]=s*(u*g-v*p)-f*(i*g-h*p)+l*(i*v-h*u),e[9]=-(o*(u*g-v*p)-f*(n*g-a*p)+l*(n*v-a*u)),e[10]=o*(i*g-h*p)-s*(n*g-a*p)+l*(n*h-a*i),e[11]=-(o*(i*v-h*u)-s*(n*v-a*u)+f*(n*h-a*i)),e[12]=-(s*(u*m-d*p)-f*(i*m-c*p)+l*(i*d-c*u)),e[13]=o*(u*m-d*p)-f*(n*m-r*p)+l*(n*d-r*u),e[14]=-(o*(i*m-c*p)-s*(n*m-r*p)+l*(n*c-r*i)),e[15]=o*(i*d-c*u)-s*(n*d-r*u)+f*(n*c-r*i),e}});var V2=ke((CA,W2)=>{W2.exports=T6;function T6(e){var t=e[0],o=e[1],n=e[2],r=e[3],a=e[4],s=e[5],i=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],v=e[12],l=e[13],p=e[14],m=e[15],g=t*s-o*a,x=t*i-n*a,b=t*c-r*a,w=o*i-n*s,M=o*c-r*s,k=n*c-r*i,z=h*l-f*v,P=h*p-u*v,R=h*m-d*v,U=f*p-u*l,q=f*m-d*l,Q=u*m-d*p;return g*Q-x*q+b*U+w*R-M*P+k*z}});var Y2=ke((PA,X2)=>{X2.exports=L6;function L6(e,t,o){var n=t[0],r=t[1],a=t[2],s=t[3],i=t[4],c=t[5],h=t[6],f=t[7],u=t[8],d=t[9],v=t[10],l=t[11],p=t[12],m=t[13],g=t[14],x=t[15],b=o[0],w=o[1],M=o[2],k=o[3];return e[0]=b*n+w*i+M*u+k*p,e[1]=b*r+w*c+M*d+k*m,e[2]=b*a+w*h+M*v+k*g,e[3]=b*s+w*f+M*l+k*x,b=o[4],w=o[5],M=o[6],k=o[7],e[4]=b*n+w*i+M*u+k*p,e[5]=b*r+w*c+M*d+k*m,e[6]=b*a+w*h+M*v+k*g,e[7]=b*s+w*f+M*l+k*x,b=o[8],w=o[9],M=o[10],k=o[11],e[8]=b*n+w*i+M*u+k*p,e[9]=b*r+w*c+M*d+k*m,e[10]=b*a+w*h+M*v+k*g,e[11]=b*s+w*f+M*l+k*x,b=o[12],w=o[13],M=o[14],k=o[15],e[12]=b*n+w*i+M*u+k*p,e[13]=b*r+w*c+M*d+k*m,e[14]=b*a+w*h+M*v+k*g,e[15]=b*s+w*f+M*l+k*x,e}});var Q2=ke((IA,K2)=>{K2.exports=N6;function N6(e,t,o){var n=o[0],r=o[1],a=o[2],s,i,c,h,f,u,d,v,l,p,m,g;return t===e?(e[12]=t[0]*n+t[4]*r+t[8]*a+t[12],e[13]=t[1]*n+t[5]*r+t[9]*a+t[13],e[14]=t[2]*n+t[6]*r+t[10]*a+t[14],e[15]=t[3]*n+t[7]*r+t[11]*a+t[15]):(s=t[0],i=t[1],c=t[2],h=t[3],f=t[4],u=t[5],d=t[6],v=t[7],l=t[8],p=t[9],m=t[10],g=t[11],e[0]=s,e[1]=i,e[2]=c,e[3]=h,e[4]=f,e[5]=u,e[6]=d,e[7]=v,e[8]=l,e[9]=p,e[10]=m,e[11]=g,e[12]=s*n+f*r+l*a+t[12],e[13]=i*n+u*r+p*a+t[13],e[14]=c*n+d*r+m*a+t[14],e[15]=h*n+v*r+g*a+t[15]),e}});var J2=ke(($A,Z2)=>{Z2.exports=R6;function R6(e,t,o){var n=o[0],r=o[1],a=o[2];return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*r,e[5]=t[5]*r,e[6]=t[6]*r,e[7]=t[7]*r,e[8]=t[8]*a,e[9]=t[9]*a,e[10]=t[10]*a,e[11]=t[11]*a,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var tg=ke((FA,eg)=>{eg.exports=O6;function O6(e,t,o,n){var r=n[0],a=n[1],s=n[2],i=Math.sqrt(r*r+a*a+s*s),c,h,f,u,d,v,l,p,m,g,x,b,w,M,k,z,P,R,U,q,Q,D,V,me;return Math.abs(i)<1e-6?null:(i=1/i,r*=i,a*=i,s*=i,c=Math.sin(o),h=Math.cos(o),f=1-h,u=t[0],d=t[1],v=t[2],l=t[3],p=t[4],m=t[5],g=t[6],x=t[7],b=t[8],w=t[9],M=t[10],k=t[11],z=r*r*f+h,P=a*r*f+s*c,R=s*r*f-a*c,U=r*a*f-s*c,q=a*a*f+h,Q=s*a*f+r*c,D=r*s*f+a*c,V=a*s*f-r*c,me=s*s*f+h,e[0]=u*z+p*P+b*R,e[1]=d*z+m*P+w*R,e[2]=v*z+g*P+M*R,e[3]=l*z+x*P+k*R,e[4]=u*U+p*q+b*Q,e[5]=d*U+m*q+w*Q,e[6]=v*U+g*q+M*Q,e[7]=l*U+x*q+k*Q,e[8]=u*D+p*V+b*me,e[9]=d*D+m*V+w*me,e[10]=v*D+g*V+M*me,e[11]=l*D+x*V+k*me,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}});var ng=ke((qA,og)=>{og.exports=C6;function C6(e,t,o){var n=Math.sin(o),r=Math.cos(o),a=t[4],s=t[5],i=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=a*r+h*n,e[5]=s*r+f*n,e[6]=i*r+u*n,e[7]=c*r+d*n,e[8]=h*r-a*n,e[9]=f*r-s*n,e[10]=u*r-i*n,e[11]=d*r-c*n,e}});var ag=ke((DA,rg)=>{rg.exports=P6;function P6(e,t,o){var n=Math.sin(o),r=Math.cos(o),a=t[0],s=t[1],i=t[2],c=t[3],h=t[8],f=t[9],u=t[10],d=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*r-h*n,e[1]=s*r-f*n,e[2]=i*r-u*n,e[3]=c*r-d*n,e[8]=a*n+h*r,e[9]=s*n+f*r,e[10]=i*n+u*r,e[11]=c*n+d*r,e}});var ig=ke((GA,sg)=>{sg.exports=I6;function I6(e,t,o){var n=Math.sin(o),r=Math.cos(o),a=t[0],s=t[1],i=t[2],c=t[3],h=t[4],f=t[5],u=t[6],d=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*r+h*n,e[1]=s*r+f*n,e[2]=i*r+u*n,e[3]=c*r+d*n,e[4]=h*r-a*n,e[5]=f*r-s*n,e[6]=u*r-i*n,e[7]=d*r-c*n,e}});var lg=ke((HA,cg)=>{cg.exports=$6;function $6(e,t,o){var n,r,a,s=o[0],i=o[1],c=o[2],h=Math.sqrt(s*s+i*i+c*c);return Math.abs(h)<1e-6?null:(h=1/h,s*=h,i*=h,c*=h,n=Math.sin(t),r=Math.cos(t),a=1-r,e[0]=s*s*a+r,e[1]=i*s*a+c*n,e[2]=c*s*a-i*n,e[3]=0,e[4]=s*i*a-c*n,e[5]=i*i*a+r,e[6]=c*i*a+s*n,e[7]=0,e[8]=s*c*a+i*n,e[9]=i*c*a-s*n,e[10]=c*c*a+r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e)}});var hg=ke((UA,fg)=>{fg.exports=F6;function F6(e,t,o){var n=t[0],r=t[1],a=t[2],s=t[3],i=n+n,c=r+r,h=a+a,f=n*i,u=n*c,d=n*h,v=r*c,l=r*h,p=a*h,m=s*i,g=s*c,x=s*h;return e[0]=1-(v+p),e[1]=u+x,e[2]=d-g,e[3]=0,e[4]=u-x,e[5]=1-(f+p),e[6]=l+m,e[7]=0,e[8]=d+g,e[9]=l-m,e[10]=1-(f+v),e[11]=0,e[12]=o[0],e[13]=o[1],e[14]=o[2],e[15]=1,e}});var dg=ke((BA,ug)=>{ug.exports=q6;function q6(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var vg=ke((jA,pg)=>{pg.exports=D6;function D6(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}});var gg=ke((WA,mg)=>{mg.exports=G6;function G6(e,t){var o=Math.sin(t),n=Math.cos(t);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=n,e[6]=o,e[7]=0,e[8]=0,e[9]=-o,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var yg=ke((VA,xg)=>{xg.exports=H6;function H6(e,t){var o=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=0,e[2]=-o,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=o,e[9]=0,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var wg=ke((XA,bg)=>{bg.exports=U6;function U6(e,t){var o=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=o,e[2]=0,e[3]=0,e[4]=-o,e[5]=n,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var Mg=ke((YA,_g)=>{_g.exports=B6;function B6(e,t){var o=t[0],n=t[1],r=t[2],a=t[3],s=o+o,i=n+n,c=r+r,h=o*s,f=n*s,u=n*i,d=r*s,v=r*i,l=r*c,p=a*s,m=a*i,g=a*c;return e[0]=1-u-l,e[1]=f+g,e[2]=d-m,e[3]=0,e[4]=f-g,e[5]=1-h-l,e[6]=v+p,e[7]=0,e[8]=d+m,e[9]=v-p,e[10]=1-h-u,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var Sg=ke((KA,kg)=>{kg.exports=j6;function j6(e,t,o,n,r,a,s){var i=1/(o-t),c=1/(r-n),h=1/(a-s);return e[0]=a*2*i,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a*2*c,e[6]=0,e[7]=0,e[8]=(o+t)*i,e[9]=(r+n)*c,e[10]=(s+a)*h,e[11]=-1,e[12]=0,e[13]=0,e[14]=s*a*2*h,e[15]=0,e}});var Ag=ke((QA,Eg)=>{Eg.exports=W6;function W6(e,t,o,n,r){var a=1/Math.tan(t/2),s=1/(n-r);return e[0]=a/o,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(r+n)*s,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*r*n*s,e[15]=0,e}});var Tg=ke((ZA,zg)=>{zg.exports=V6;function V6(e,t,o,n){var r=Math.tan(t.upDegrees*Math.PI/180),a=Math.tan(t.downDegrees*Math.PI/180),s=Math.tan(t.leftDegrees*Math.PI/180),i=Math.tan(t.rightDegrees*Math.PI/180),c=2/(s+i),h=2/(r+a);return e[0]=c,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=h,e[6]=0,e[7]=0,e[8]=-((s-i)*c*.5),e[9]=(r-a)*h*.5,e[10]=n/(o-n),e[11]=-1,e[12]=0,e[13]=0,e[14]=n*o/(o-n),e[15]=0,e}});var Ng=ke((JA,Lg)=>{Lg.exports=X6;function X6(e,t,o,n,r,a,s){var i=1/(t-o),c=1/(n-r),h=1/(a-s);return e[0]=-2*i,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*c,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*h,e[11]=0,e[12]=(t+o)*i,e[13]=(r+n)*c,e[14]=(s+a)*h,e[15]=1,e}});var Og=ke((ez,Rg)=>{var Y6=Ju();Rg.exports=K6;function K6(e,t,o,n){var r,a,s,i,c,h,f,u,d,v,l=t[0],p=t[1],m=t[2],g=n[0],x=n[1],b=n[2],w=o[0],M=o[1],k=o[2];return Math.abs(l-w)<1e-6&&Math.abs(p-M)<1e-6&&Math.abs(m-k)<1e-6?Y6(e):(f=l-w,u=p-M,d=m-k,v=1/Math.sqrt(f*f+u*u+d*d),f*=v,u*=v,d*=v,r=x*d-b*u,a=b*f-g*d,s=g*u-x*f,v=Math.sqrt(r*r+a*a+s*s),v?(v=1/v,r*=v,a*=v,s*=v):(r=0,a=0,s=0),i=u*s-d*a,c=d*r-f*s,h=f*a-u*r,v=Math.sqrt(i*i+c*c+h*h),v?(v=1/v,i*=v,c*=v,h*=v):(i=0,c=0,h=0),e[0]=r,e[1]=i,e[2]=f,e[3]=0,e[4]=a,e[5]=c,e[6]=u,e[7]=0,e[8]=s,e[9]=h,e[10]=d,e[11]=0,e[12]=-(r*l+a*p+s*m),e[13]=-(i*l+c*p+h*m),e[14]=-(f*l+u*p+d*m),e[15]=1,e)}});var Pg=ke((tz,Cg)=>{Cg.exports=Q6;function Q6(e){return"mat4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+", "+e[9]+", "+e[10]+", "+e[11]+", "+e[12]+", "+e[13]+", "+e[14]+", "+e[15]+")"}});var tc=ke((oz,Ig)=>{Ig.exports={create:C2(),clone:I2(),copy:F2(),identity:Ju(),transpose:G2(),invert:U2(),adjoint:j2(),determinant:V2(),multiply:Y2(),translate:Q2(),scale:J2(),rotate:tg(),rotateX:ng(),rotateY:ag(),rotateZ:ig(),fromRotation:lg(),fromRotationTranslation:hg(),fromScaling:dg(),fromTranslation:vg(),fromXRotation:gg(),fromYRotation:yg(),fromZRotation:wg(),fromQuat:Mg(),frustum:Sg(),perspective:Ag(),perspectiveFromFieldOfView:Tg(),ortho:Ng(),lookAt:Og(),str:Pg()}});var qg=ke((nz,Fg)=>{"use strict";var $g=R2(),Sn=tc(),Gs=br(),Z6=3e3,gh="high",ed,wl=.36,_l=13.64,oc=Gs.C.hallEnd-.01,Ml=Gs.C.z0+.01,J6=.356,eM=13.644,tM=Gs.C.hallEnd-.006,oM=Gs.C.z0+.006,nM=.12,yh=4,nc=e=>wr[e]&&wr[e].cy||yh,td=.26,rM=5.6,aM=7,wr=[{side:"right",z:34.5},{side:"right",z:23.5},{side:"left",z:23.5},{side:"end",z:oc},{side:"left",z:34.5},{side:"right",z:14.6},{side:"left",z:14.6,maxW:3.7,maxH:3.7},{side:"corridor",x:Gs.PAINTING_X[0],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:Gs.PAINTING_X[1],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:Gs.PAINTING_X[2],cy:3,maxW:3.3,maxH:3.73}];function sM(e,t){let o=t&&t.maxH||rM,n=t&&t.maxW||aM,r=Math.min(o,n/e);return{width:r*e,height:r}}function iM(e,t,o){let n=wr[o],r=[],a=nc(o)-t/2;return n.side==="left"?(Sn.fromTranslation(r,[wl,a,n.z+e/2]),Sn.rotateY(r,r,Math.PI/2)):n.side==="right"?(Sn.fromTranslation(r,[_l,a,n.z-e/2]),Sn.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?Sn.fromTranslation(r,[n.x-e/2,a,Ml]):(Sn.fromTranslation(r,[7+e/2,a,oc]),Sn.rotateY(r,r,Math.PI)),Sn.scale(r,r,[e,t,nM]),r}function cM(e,t,o){let n=wr[o],r=[],a=nc(o)-t/2;return n.side==="left"?(Sn.fromTranslation(r,[wl,a,n.z+e/2]),Sn.rotateY(r,r,Math.PI/2)):n.side==="right"?(Sn.fromTranslation(r,[_l,a,n.z-e/2]),Sn.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?Sn.fromTranslation(r,[n.x-e/2,a,Ml]):(Sn.fromTranslation(r,[7+e/2,a,oc]),Sn.rotateY(r,r,Math.PI)),r}function lM(e,t,o){let n=wr[o],r=[],a=nc(o)-t/2-td-.38;return n.side==="left"?(Sn.fromTranslation(r,[J6,a,n.z+e/2]),Sn.rotateY(r,r,Math.PI/2)):n.side==="right"?(Sn.fromTranslation(r,[eM,a,n.z-e/2]),Sn.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?Sn.fromTranslation(r,[n.x-e/2,a,oM]):(Sn.fromTranslation(r,[7+e/2,a,tM]),Sn.rotateY(r,r,Math.PI)),Sn.scale(r,r,[2,2,2]),r}function fM(e,t,o){let n=wr[o],r=nc(o)-t/2-td-.38;return n.side==="left"?[wl+.55,r,n.z]:n.side==="right"?[_l-.55,r,n.z]:n.side==="corridor"?[n.x,r,Ml+.55]:[7,r,oc-.55]}var bl=.42;function xh(e,t,o,n,r,a){return[t[0]*n,t[1]*n,t[2]*n,0,0,r,0,0,o[0]*a,o[1]*a,o[2]*a,0,e[0],e[1],e[2],1]}function hM(e,t,o){let n=wr[o],r,a,s;n.side==="left"?(r=[wl,n.z],a=[0,0,1],s=[1,0,0]):n.side==="right"?(r=[_l,n.z],a=[0,0,1],s=[-1,0,0]):n.side==="corridor"?(r=[n.x,Ml],a=[1,0,0],s=[0,0,1]):(r=[7,oc],a=[1,0,0],s=[0,0,-1]);let i=nc(o)+t/2+td+.3,c=Math.min(2.4,Math.max(.9,e*.55)),h=(v,l)=>[r[0]+s[0]*v,l,r[1]+s[2]*v],f=[.075,.062,.05],u=[{fixmodel:xh(h(.014,i),a,s,.1,.13,.028),fixcol:f,fixglow:0},{fixmodel:xh(h(bl/2,i),a,s,.02,.02,bl),fixcol:f,fixglow:0},{fixmodel:xh(h(bl,i),a,s,c,.034,.05),fixcol:f,fixglow:0},{fixmodel:xh(h(bl-.012,i-.019),a,s,c*.94,.006,.028),fixcol:f,fixglow:1}],d=h(bl,i-.02);return{fixtures:u,light:{c:[d[0],d[1],d[2],1],d:[a[0],a[1],a[2],c/2]}}}Fg.exports=(e,t)=>{let o=[],n=[],r=a=>{let s=a.image_id;if(!wr[s])return;let{width:i,height:c}=sM(a.aspect,wr[s]),h=hM(i,c,s);t&&t.lights&&s<t.lights.length&&(t.lights[s]=h.light),o.push({...a,fixtures:h.fixtures,side:wr[s].side,model:iM(i,c,s),framemodel:cM(i,c,s),framesize:[i,c],textmodel:lM(i,c,s),text:a.textGen(i),width:i,height:c,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:fM(i,c,s),paintingPosition:wr[s].side==="left"?[wl+.05,yh,wr[s].z]:wr[s].side==="right"?[_l-.05,yh,wr[s].z]:wr[s].side==="corridor"?[wr[s].x,nc(s),Ml+.05]:[7,yh,oc-.05],textGen:null})};return $g.fetch(e,wr.length,gh,r,()=>{}),{update:()=>{n=o,n.forEach(a=>{$g.load(e,a,gh)}),gh="low",ed&&clearTimeout(ed),ed=setTimeout(()=>{gh="high"},Z6)},batch:()=>n,interactables:()=>n.map((a,s)=>({side:a.side,width:a.width,index:s,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:a.plaquePosition,paintingPosition:a.paintingPosition}))}}});var Ug=ke((rz,Hg)=>{"use strict";var uM=Vu(),Dg=Ma(),Gg=[[-.02,.125],[-.02,.15],[.035,.15],[.07,.12],[.07,.17],[.185,.17],[.185,.19],[.215,.19],[.26,.03]];function dM(){let e=[[0,0],[1,0],[1,1],[0,1]],t=[];Gg.forEach(([n,r])=>{e.forEach(([a,s])=>t.push([a,s,n,r]))});let o=[];for(let n=0;n<Gg.length-1;n++)for(let r=0;r<4;r++){let a=(r+1)%4,s=n*4+r,i=n*4+a,c=(n+1)*4+r,h=(n+1)*4+a;o.push(s,i,h,s,h,c)}return{verts:t,elems:o}}var pM=`#extension GL_OES_standard_derivatives : enable
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
}`,vM=`
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
}`;Hg.exports=e=>{let t=uM.draw(e),o=e({frag:`#extension GL_OES_standard_derivatives : enable
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
	${j0().lanternGLSL()}
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
	}`,attributes:{pos:[0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,-.1,-.1,0,1.1,-.1,0,-.1,1.1,0,1.1,1.1,0]},elements:[0,1,2,3,2,1,1,0,5,4,5,0,3,1,7,5,7,1,0,2,4,6,4,2,8,9,4,5,4,9,9,11,5,7,5,11,11,10,7,6,7,10,10,8,6,4,6,8],uniforms:{model:e.prop("model"),tex:e.prop("tex"),psize:e.prop("framesize"),canvasCm:(s,i)=>i.size?[i.size[1],i.size[0]]:[61,91],texel:1/(Dg.isPhone?1024:2048),detail:()=>Dg.post===0?0:1},blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}}),n=dM(),r=e({frag:pM,vert:vM,attributes:{prof:n.verts},elements:n.elems,uniforms:{model:e.prop("framemodel"),fsize:e.prop("framesize")},cull:{enable:!1},blend:{enable:!1}}),a=e({frag:`#extension GL_OES_standard_derivatives : enable
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
}`,attributes:{pos:[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5],[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]]},elements:[0,1,2,0,2,3,4,5,6,4,6,7,0,1,5,0,5,4,2,3,7,2,7,6,0,3,7,0,7,4,1,2,6,1,6,5],uniforms:{model:e.prop("fixmodel"),fixcol:e.prop("fixcol"),fixglow:e.prop("fixglow")},cull:{enable:!1},blend:{enable:!1}});return function(s){o(s),r(s);let i=[];s.forEach(c=>{c.fixtures&&i.push(...c.fixtures)}),i.length&&a(i),t(s)}}});var Us=ke((sz,ja)=>{"use strict";var nn=Math.PI,de=e=>(+e).toFixed(4),kt=[-90,0,0],Ve=16,vo=22,go=7.8,fa=11.6,mr=.55,ha=(fa-go)/(Ve/2),ct={c:[3.6,8.6,13.6,18.6],hw:1.3,sill:.62,spring:4.9};ct.top=ct.spring+ct.hw;var Dr={cols:[-.65,0,.65],rowH:.71,w:.055,ring:.78},Vo={rafter:vo/12,rafterW:.1,purlin:1,purlinW:.07},zl=[5.5,11,16.5],_e={x0:Ve/2-1.9,x1:Ve/2+1.9,z0:5.6,z1:16.6,curb:.5,top:.36},fn={x:Ve/2,z:14.9,plinth:.86,height:2.05,yaw:nn+.35,file:"res/nymph.bin"},i0=(()=>{let e=[-.68,.6,-.36],t=Math.hypot(e[0],e[1],e[2]);return e.map(o=>o/t)})(),od=e=>[e[0]+kt[0],e[1]+kt[1],e[2]+kt[2]];function Xg(){let e=ct.c.map(o=>`
		{
			float dz = q.z - ${de(o)};
			float inside = smoothstep(-b, b, ${de(ct.hw)} - abs(dz)) * smoothstep(-b, b, q.y - ${de(ct.sill)});
			float arch = smoothstep(-b, b, ${de(ct.hw)} - length(vec2(dz, max(q.y - ${de(ct.spring)}, 0.0))));
			o = max(o, inside * arch);
		}`).join(""),t=ct.c.map(o=>`
		{
			float dz = q.z - ${de(o)};
			if (abs(dz) < ${de(ct.hw+.2)}) {
				${Dr.cols.map(n=>`bar = max(bar, 1.0 - smoothstep(${de(Dr.w*.5)} - b, ${de(Dr.w*.5)} + b, abs(dz - ${de(n)})));`).join(`
				`)}
				float ry = q.y - ${de(ct.sill)};
				float tr = abs(ry - ${de(Dr.rowH)} * floor(ry / ${de(Dr.rowH)} + 0.5));
				if (q.y < ${de(ct.spring+.02)}) bar = max(bar, 1.0 - smoothstep(${de(Dr.w*.5)} - b, ${de(Dr.w*.5)} + b, tr));
				float rr = length(vec2(dz, q.y - ${de(ct.spring)}));
				if (q.y > ${de(ct.spring)}) bar = max(bar, 1.0 - smoothstep(${de(Dr.w*.5)} - b, ${de(Dr.w*.5)} + b, abs(rr - ${de(Dr.ring)})));
				// the frame round the opening
				bar = max(bar, 1.0 - smoothstep(0.0, b + 0.03, ${de(ct.hw)} - max(abs(dz), q.y > ${de(ct.spring)} ? rr : 0.0)));
			}
		}`).join("");return`
	const vec3 STUDIO_SUN = vec3(${de(i0[0])}, ${de(i0[1])}, ${de(i0[2])});

	// how open a window is at (y, z) on the wall's face; b softens edges
	float studioWinOpen(vec3 q, float b) {
		float o = 0.0;
		${e}
		return o;
	}
	float studioWinBars(vec3 q, float b) {
		float bar = 0.0;
		${t}
		return bar;
	}

	// the leaded pattern in each pane of the roof: q is the pane's own
	// coordinates (centre 0, half size ${de(Vo.purlin/2)} x ${de(Vo.rafter/2)}),
	// b the softness. Returns how much light gets through.
	float studioRoofPattern(vec2 q, float b) {
		vec2 hs = vec2(${de(Vo.purlin/2)}, ${de(Vo.rafter/2)});
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
		vec3 p = pw - vec3(${de(kt[0])}, ${de(kt[1])}, ${de(kt[2])});
		vec3 S = STUDIO_SUN;
		// where the ray towards the sun leaves through the left wall
		float tw = (0.0 - p.x) / S.x;
		// and where it rises past the eaves
		float te = (${de(go)} - p.y) / S.y;
		if (tw > 0.0 && tw < te) {
			vec3 h0 = p + S * tw;
			if (h0.z < 0.0 || h0.z > ${de(vo)}) return 0.0;
			vec3 h1 = p + S * ((${de(-mr)} - p.x) / S.x);
			vec3 hm = p + S * ((${de(-mr*.5)} - p.x) / S.x);
			float b = 0.006 + 0.0075 * tw;
			float open = min(studioWinOpen(h0, b), studioWinOpen(h1, b));
			if (open <= 0.0) return 0.0;
			float bar = studioWinBars(hm, b);
			return open * (1.0 - bar) * 0.92;
		}
		// up through the roof: the trusses' tie beams first
		vec3 he = p + S * max(te, 0.0);
		float vis = 1.0;
		if (p.y < ${de(go)}) {
			if (he.z < 0.0 || he.z > ${de(vo)} || he.x < 0.0 || he.x > ${de(Ve)}) return 0.0;
			float be = 0.01 + 0.008 * te;
			${zl.map(o=>`vis *= smoothstep(0.08 - be, 0.08 + be, abs(he.z - ${de(o)}));`).join(`
			`)}
			// the bougainvillea along the tie beams
			${sc.filter(o=>o[0]==="truss").map(([o,n,r])=>`vis *= 1.0 - studioVineShade(he.z - ${de(n)}, he.x, he.z, ${de(r)});`).join(`
			`)}
		}
		// then the glass: the two slopes of the roof
		float tl = (${de(ha)} * p.x - p.y + ${de(go)}) / (S.y - ${de(ha)} * S.x);
		float tr = (${de(ha)} * (${de(Ve)} - p.x) - p.y + ${de(go)}) / (S.y + ${de(ha)} * S.x);
		float t = 1e9;
		vec3 h = vec3(0.0);
		vec3 hl = p + S * tl, hr = p + S * tr;
		if (tl > 0.0 && hl.x >= -0.01 && hl.x <= ${de(Ve/2+.01)}) { t = tl; h = hl; }
		if (tr > 0.0 && tr < t && hr.x >= ${de(Ve/2-.01)} && hr.x <= ${de(Ve+.01)}) { t = tr; h = hr; }
		if (t > 1e8) return 0.0;
		if (h.z < 0.0 || h.z > ${de(vo)}) return 0.0;
		float b = 0.008 + 0.0075 * t;
		float rz = abs(h.z - ${de(Vo.rafter)} * floor(h.z / ${de(Vo.rafter)} + 0.5));
		float bar = 1.0 - smoothstep(${de(Vo.rafterW*.5)} - b, ${de(Vo.rafterW*.5)} + b, rz);
		float ux = h.x < ${de(Ve/2)} ? h.x : ${de(Ve)} - h.x;
		float rx = abs(ux - ${de(Vo.purlin)} * floor(ux / ${de(Vo.purlin)} + 0.5));
		bar = max(bar, 1.0 - smoothstep(${de(Vo.purlinW*.5)} - b, ${de(Vo.purlinW*.5)} + b, rx));
		// the ridge beam
		bar = max(bar, 1.0 - smoothstep(0.14 - b, 0.14 + b, abs(h.x - ${de(Ve/2)})));
		// the leaded pattern in the panes (its shadow is crisper than
		// the sun's disc would allow, for the drawing to read)
		vec2 pq = vec2(ux - ${de(Vo.purlin)} * floor(ux / ${de(Vo.purlin)}) - ${de(Vo.purlin/2)}, h.z - ${de(Vo.rafter)} * floor(h.z / ${de(Vo.rafter)}) - ${de(Vo.rafter/2)});
		float pat = studioRoofPattern(pq, 0.004 + 0.0035 * t);
		// and along the rafters and the ridge
		${sc.filter(o=>o[0]==="rafter").map(([o,n,r])=>`pat *= 1.0 - studioVineShade(h.z - ${de(n)}, h.x, h.z, ${de(r)});`).join(`
		`)}
		pat *= 1.0 - studioVineShade(h.x - ${de(Ve/2)}, h.z, h.x, 0.9);
		return vis * (1.0 - bar) * pat * 0.78;
	}`}function ic(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let o=t;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}var ge={FLOOR:0,PLASTER:1,STONE:2,STEEL:3,WATER:4,PAD:5,PETAL:6,STAMEN:7,MARBLE:8,WOOD:9,GESSO:10,PAINT:11,POT:12,SHADE:13,BULB:14,NICHE:15,JAR:16,SOIL:17,BRUSH:18,TRAVERTINE:19,CLOTH:20,WMARBLE:21,REDDOOR:22,REDPANEL:23,DARKWOOD:24,BRASS:25,BRACT:26,KEYHOLE:27};function Yg(){let e={pos:[],nrm:[],kind:[],uv:[],anchor:[],idx:[]};return e.float=null,e.v=(t,o,n,r)=>(e.pos.push(t[0]+kt[0],t[1]+kt[1],t[2]+kt[2]),e.nrm.push(o[0],o[1],o[2]),e.kind.push(n),e.uv.push(r?r[0]:0,r?r[1]:0),e.float?e.anchor.push(e.float[0]+kt[0],e.float[1]+kt[2],e.float[2],1):e.anchor.push(0,0,0,0),e.pos.length/3-1),e.quad=(t,o,n,r,a,s,i)=>{let c=e.v(t,a,s,i&&i[0]),h=e.v(o,a,s,i&&i[1]),f=e.v(n,a,s,i&&i[2]),u=e.v(r,a,s,i&&i[3]);e.idx.push(c,h,f,c,f,u)},e.box=(t,o,n,r,a,s,i,c)=>{let h=c||{};h.top||e.quad([t,a,n],[t,a,s],[r,a,s],[r,a,n],[0,1,0],i,[[t,n],[t,s],[r,s],[r,n]]),h.bottom||e.quad([t,o,n],[r,o,n],[r,o,s],[t,o,s],[0,-1,0],i,[[t,n],[r,n],[r,s],[t,s]]),h.x0||e.quad([t,o,n],[t,o,s],[t,a,s],[t,a,n],[-1,0,0],i,[[n,o],[s,o],[s,a],[n,a]]),h.x1||e.quad([r,o,s],[r,o,n],[r,a,n],[r,a,s],[1,0,0],i,[[s,o],[n,o],[n,a],[s,a]]),h.z0||e.quad([r,o,n],[t,o,n],[t,a,n],[r,a,n],[0,0,-1],i,[[r,o],[t,o],[t,a],[r,a]]),h.z1||e.quad([t,o,s],[r,o,s],[r,a,s],[t,a,s],[0,0,1],i,[[t,o],[r,o],[r,a],[t,a]])},e.tbox=(t,o,n,r,a,s,i,c,h)=>{let f=Math.cos(n),u=Math.sin(n),d=Math.cos(h||0),v=Math.sin(h||0),l=(g,x,b)=>{let w=a+(x-a)*d-b*v*0,M=b+(x-a)*v,k=a+(x-a)*d;return[t+f*g+u*M,k,o-u*g+f*M]},p=g=>{let x=g[1]*d-g[2]*v,b=g[2]*d+g[1]*v;return[f*g[0]+u*b,x,-u*g[0]+f*b]},m=(g,x,b,w,M)=>e.quad(l(...g),l(...x),l(...b),l(...w),p(M),c,[[g[0]+g[2],g[1]],[x[0]+x[2],x[1]],[b[0]+b[2],b[1]],[w[0]+w[2],w[1]]]);m([-r,s,-i],[-r,s,i],[r,s,i],[r,s,-i],[0,1,0]),m([-r,a,-i],[r,a,-i],[r,a,i],[-r,a,i],[0,-1,0]),m([-r,a,-i],[-r,a,i],[-r,s,i],[-r,s,-i],[-1,0,0]),m([r,a,i],[r,a,-i],[r,s,-i],[r,s,i],[1,0,0]),m([r,a,-i],[-r,a,-i],[-r,s,-i],[r,s,-i],[0,0,-1]),m([-r,a,i],[r,a,i],[r,s,i],[-r,s,i],[0,0,1])},e.beam=(t,o,n,r,a)=>{let s=[o[0]-t[0],o[1]-t[1],o[2]-t[2]],i=Math.hypot(...s),c=s.map(l=>l/i),h=a||(Math.abs(c[1])>.9?[1,0,0]:[0,1,0]),f=[c[1]*h[2]-c[2]*h[1],c[2]*h[0]-c[0]*h[2],c[0]*h[1]-c[1]*h[0]],u=Math.hypot(...f);f=f.map(l=>l/u),h=[f[1]*c[2]-f[2]*c[1],f[2]*c[0]-f[0]*c[2],f[0]*c[1]-f[1]*c[0]];let d=(l,p,m)=>[l[0]+f[0]*n*p+h[0]*n*m,l[1]+f[1]*n*p+h[1]*n*m,l[2]+f[2]*n*p+h[2]*n*m],v=[[[1,-1],[1,1],f],[[1,1],[-1,1],h],[[-1,1],[-1,-1],f.map(l=>-l)],[[-1,-1],[1,-1],h.map(l=>-l)]];for(let[l,p,m]of v)e.quad(d(t,...l),d(o,...l),d(o,...p),d(t,...p),m,r,[[0,0],[i,0],[i,1],[0,1]])},e.lathe=(t,o,n,r,a)=>{let s=a||32,i=n.map(([c,h],f)=>{let u=n[Math.max(0,f-1)],d=n[Math.min(n.length-1,f+1)],v=d[0]-u[0],l=d[1]-u[1],p=Math.hypot(v,l)||1,m=l/p,g=-v/p,x=[];for(let b=0;b<=s;b++){let w=b/s*2*nn;x.push(e.v([t+Math.cos(w)*c,h,o+Math.sin(w)*c],[Math.cos(w)*m,g,Math.sin(w)*m],r,[b/s*c*2*nn,h]))}return x});for(let c=0;c<i.length-1;c++)for(let h=0;h<s;h++){let f=i[c][h],u=i[c][h+1],d=i[c+1][h+1],v=i[c+1][h];e.idx.push(f,v,d,f,d,u)}},e}var ac=e=>Math.abs(e)>=ct.hw?null:ct.spring+Math.sqrt(ct.hw*ct.hw-e*e),sc=[["truss",zl[0],3.1],["truss",zl[1],5.4],["truss",zl[2],7.7],["rafter",Vo.rafter*2,1.7],["rafter",Vo.rafter*5,8.5],["rafter",Vo.rafter*8,13.6],["rafter",Vo.rafter*10,17],["ridge",Ve/2,.9]],_h=(e,t)=>.5*Math.sin(e*1.9+t)+.5*Math.sin(e*.77+t*1.3)>-.25,mM=e=>e<Ve/2?go+ha*e:go+ha*(Ve-e);function Mh(e,t,o){return e==="truss"?[o,go-.12,t]:e==="rafter"?[o,mM(o)-.2,t]:[t,fa-.32,o]}var kh=e=>e==="ridge"?[.4,vo-.4]:[.35,Ve-.35],Zr={w:1.72,spring:2.05,r:2.05,frame:.21,zl:vo-.05,zf:vo-.13};Zr.c=Zr.r-Zr.w/2;var za=(e,t)=>{let o=Zr.r+(t||0),n=Math.abs(e)+Zr.c;return n>=o?Zr.spring:Zr.spring+Math.sqrt(o*o-n*n)};Zr.top=za(0);function gM(e){let t=Ve/2,{w:o,frame:n,zl:r,zf:a}=Zr,s=o/2,i=s+n,c=.02;for(let k=-i;k<i-1e-6;k+=c){let z=k,P=Math.min(i,k+c),R=(z+P)/2,U=za(z,n),q=za(P,n),Q=0,D=0;Math.abs(R)<s&&(Q=za(z),D=za(P)),Math.abs(R)>=s;{let V=Math.abs(R)<s?Q:0,me=Math.abs(R)<s?D:0;e.quad([t+P,me,a],[t+z,V,a],[t+z,U,a],[t+P,q,a],[0,0,-1],ge.DARKWOOD,[[P,me],[z,V],[z,U],[P,q]])}e.quad([t+z,U,a],[t+z,U,vo],[t+P,q,vo],[t+P,q,a],[0,1,0],ge.DARKWOOD,[[z,0],[z,1],[P,1],[P,0]]),Math.abs(R)<s&&e.quad([t+z,Q,a],[t+P,D,a],[t+P,D,r],[t+z,Q,r],[0,-1,0],ge.DARKWOOD,[[z,0],[P,0],[P,1],[z,1]])}for(let k of[-1,1])e.quad([t+k*i,0,a],[t+k*i,0,vo],[t+k*i,Zr.spring,vo],[t+k*i,Zr.spring,a],[k,0,0],ge.DARKWOOD,[[0,0],[1,0],[1,1],[0,1]]),e.quad([t+k*s,0,a],[t+k*s,Zr.spring,a],[t+k*s,Zr.spring,r],[t+k*s,0,r],[-k,0,0],ge.DARKWOOD,[[0,0],[1,0],[1,1],[0,1]]),e.box(t+k*(s+n/2)-n/2-.04,0,a-.04,t+k*(s+n/2)+n/2+.04,.42,vo,ge.DARKWOOD);let h=40;for(let k=0;k<h;k++){let z=-s+2*s*k/h,P=-s+2*s*(k+1)/h;e.beam([t+z,za(z)+.03,a-.015],[t+P,za(P)+.03,a-.015],.018,ge.DARKWOOD)}for(let k of[-1,1])e.beam([t+k*(s+.03),.42,a-.015],[t+k*(s+.03),Zr.spring+.02,a-.015],.018,ge.DARKWOOD);for(let k=-s;k<s-1e-6;k+=c){let z=k,P=Math.min(s,k+c),R=za(z),U=za(P);e.quad([t+P,0,r],[t+z,0,r],[t+z,R,r],[t+P,U,r],[0,0,-1],ge.REDDOOR,[[P,0],[z,0],[z,R],[P,U]])}let f=s-.2,u=.3,d=2.12,v=r-.006,l=.05,p=(k,z,P,R)=>e.box(t+k,z,v-.018,t+P,R,v,ge.REDDOOR);p(-f,u,f,u+l),p(-f,d-l,f,d),p(-f,u,-f+l,d),p(f-l,u,f,d),e.box(t-f+.14,u+.14,v-.022,t+f-.14,d-.14,v,ge.REDDOOR);let m=2.36;p(-s+.08,d+.06,s-.08,d+.12);for(let k of[-1,1]){let P=s-.17;for(let R=.07;R<P-1e-6;R+=c){let U=R,q=Math.min(P,R+c),Q=za(U,-.18),D=za(q,-.18);if(Q<=m+.02&&D<=m+.02)continue;let V=Ge=>t+k*Ge,me=[[V(U),m,v+.004],[V(q),m,v+.004],[V(q),Math.max(m,D),v+.004],[V(U),Math.max(m,Q),v+.004]];k>0?e.quad(me[1],me[0],me[3],me[2],[0,0,-1],ge.REDPANEL,[[q,0],[U,0],[U,1],[q,1]]):e.quad(...me,[0,0,-1],ge.REDPANEL,[[U,0],[q,0],[q,1],[U,1]])}}e.beam([t,m-.02,v-.008],[t,za(0,-.12),v-.008],.03,ge.REDDOOR),e.beam([t-s+.1,m-.01,v-.006],[t+s-.1,m-.01,v-.006],.014,ge.REDDOOR);let g=t-s+.15,x=1.06,b=v-.03;e.box(g-.034,x-.2,b-.008,g+.034,x+.17,b+.012,ge.BRASS);for(let[k,z]of[[x+.2,.026],[x+.235,.016],[x-.23,.026],[x-.265,.016]])e.lathe(g,b-.002,[[0,k-z],[z,k-z*.4],[z,k+z*.4],[0,k+z]],ge.BRASS,12);for(let k=0;k<6;k++){let z=x-.17+k*.065;for(let P of[-1,1])e.beam([g+P*.034,z,b-.01],[g+P*.041,z+.03,b-.01],.006,ge.BRASS)}let w=b-.008,M=(k,z,P)=>{for(let R=0;R<P;R++){let U=nn*R/P,q=nn*(R+1)/P;for(let Q=0;Q<16;Q++){let D=2*nn*Q/16,V=2*nn*(Q+1)/16,me=(xt,at)=>[g+z*Math.sin(xt)*Math.cos(at),x+.03+z*Math.sin(xt)*Math.sin(at),k-z*Math.cos(xt)],Ge=(xt,at)=>[Math.sin(xt)*Math.cos(at),Math.sin(xt)*Math.sin(at),-Math.cos(xt)],Re=e.v(me(U,D),Ge(U,D),ge.BRASS),be=e.v(me(U,V),Ge(U,V),ge.BRASS),re=e.v(me(q,V),Ge(q,V),ge.BRASS),Ue=e.v(me(q,D),Ge(q,D),ge.BRASS);e.idx.push(Re,be,re,Re,re,Ue)}}};e.beam([g,x+.03,w],[g,x+.03,w-.05],.011,ge.BRASS),M(w-.075,.034,10),e.box(g-.008,x-.1,b-.0125,g+.008,x-.06,b-.0085,ge.KEYHOLE)}function xM(e){let t=ic(77);for(let[o,n,r]of sc){let[a,s]=kh(o);for(let i=0;i<2;i++){let c=null;for(let h=a;h<=s;h+=.18){let f=Mh(o,n,h),u=Math.sin(h*3.1+i*2+r)*.07,d=Math.cos(h*2.3+i+r)*.05,v=o==="ridge"?[f[0]+u,f[1]+d+.12,f[2]]:[f[0],f[1]+d+.12,f[2]+u];c&&(_h(h,r)||t()<.5)&&e.beam(c,v,.012+.008*t(),ge.WOOD),c=v}}}}function yM(e){let t=ic(4242),o=(r,a)=>!(r>_e.x0-_e.curb-.1&&r<_e.x1+_e.curb+.1&&a>_e.z0-_e.curb-.1&&a<_e.z1+_e.curb+.1)&&r>.2&&r<Ve-.2&&a>.3&&a<vo-.4,n=(r,a,s,i)=>{let c=.022+t()*.022,h=t()*2*nn,f=Math.cos(h),u=Math.sin(h),d=(l,p)=>[r+(l*f-p*u)*c,a+.004*l*p,s+(l*u+p*f)*c],v=i?2:0;e.quad(d(-1,-1),d(-1,1),d(1,1),d(1,-1),[0,1,0],ge.BRACT,[[v,0],[v,1],[v+1,1],[v+1,0]])};for(let[r,a,s]of sc){let[i,c]=kh(r);for(let h=i;h<=c;h+=.05){if(!_h(h,s)||t()>.55)continue;let f=Mh(r,a,h),u=f[0]+(t()-.5)*1.8,d=f[2]+(t()-.5)*1.8;o(u,d)&&n(u,.004,d,t()<.18)}}for(let r=0;r<260;r++){let a=Math.floor(t()*4),s,i;a<2?(s=a?_e.x1+_e.curb+.12+t()*t()*.9:_e.x0-_e.curb-.12-t()*t()*.9,i=_e.z0+t()*(_e.z1-_e.z0)):(i=a===2?_e.z0-_e.curb-.12-t()*t()*.9:_e.z1+_e.curb+.12+t()*t()*.9,s=_e.x0+t()*(_e.x1-_e.x0)),o(s,i)&&n(s,.004,i,t()<.18)}for(let r=0;r<70;r++){let a=_e.x0+.08+t()*(_e.x1-_e.x0-.16),s=_e.z0+.08+t()*(_e.z1-_e.z0-.16);Math.hypot(a-fn.x,s-fn.z)<.6||(e.float=[a,s,a*5.1+s*2.9],n(a,.016,s,t()<.2),e.float=null)}}function bM(e,t,o){let n=(r,a,s,i,c)=>{let h=e.pos.length/3,f=Math.cos(s),u=Math.sin(s),d=Math.cos(i),v=Math.sin(i),l=[f,0,-u],p=[u*v,d,f*v],m=[l[1]*p[2]-l[2]*p[1],l[2]*p[0]-l[0]*p[2],l[0]*p[1]-l[1]*p[0]],g=c?.95:o()*.8;for(let[x,b]of[[0,0],[1,0],[1,1],[0,1]]){let w=(x-.5)*a,M=(b-.5)*a;e.pos.push(r[0]+l[0]*w+p[0]*M+kt[0],r[1]+l[1]*w+p[1]*M+kt[1],r[2]+l[2]*w+p[2]*M+kt[2]),e.nrm.push(...m),e.uv.push(x,b),e.shade.push(g),e.flower.push(1)}e.idx.push(h,h+1,h+2,h,h+2,h+3)};for(let[r,a,s]of sc){let[i,c]=kh(r);for(let h=i;h<=c;h+=.1){if(!_h(h,s))continue;let f=Mh(r,a,h),u=()=>(o()-.5)*.7,d=4+Math.floor(o()*4);for(let v=0;v<d;v++){let l=r==="ridge"?[f[0]+u(),f[1]-o()*.25,f[2]+u()*.4]:[f[0]+u()*.4,f[1]-o()*.25,f[2]+u()];n(l,.42+o()*.4,o()*2*nn,(o()-.5)*2.4,o()<.16)}for(let v=0;v<5;v++){let l=o()*2*nn;t([f[0]+u()*.6,f[1]-o()*.2,f[2]+u()*.6],[Math.cos(l),-.3-o()*.5,Math.sin(l)],[-Math.sin(l),0,Math.cos(l)],.08+o()*.06,.1)}if(o()<.22){let v=.5+o()*2,l=[f[0],f[1],f[2]],p=[(o()-.5)*.08,(o()-.5)*.08];for(let m=0;m<v;m+=.13){l=[l[0]+p[0],l[1]-.13,l[2]+p[1]];let g=(.3+o()*.22)*(1-.4*m/v);if(n([l[0]+(o()-.5)*.08,l[1],l[2]+(o()-.5)*.08],g,o()*2*nn,(o()-.5)*.8,o()<.15),o()<.6){let x=o()*2*nn;t([l[0],l[1],l[2]],[Math.cos(x),-.6,Math.sin(x)],[-Math.sin(x),0,Math.cos(x)],.05+o()*.04,.1)}}}}}}var Bg=(()=>{let e=ic(9001),t=[],o=[];for(let[r,a,s]of sc){let[i,c]=kh(r);for(let h=i;h<=c;h+=.1)_h(h,s)&&o.push(Mh(r,a,h))}let n=o.filter(r=>r[0]>_e.x0-.6&&r[0]<_e.x1+.6&&r[2]>_e.z0&&r[2]<_e.z1);for(let r=0;r<64;r++){let a=r%2===0&&n.length?n:o,s=a[Math.floor(e()*a.length)];t.push({start:[s[0]+(e()-.5)*.4,s[1]-.25-e()*.3,s[2]+(e()-.5)*.4],period:18+e()*22,offset:e()*60,drift:[(e()-.5)*1.6,(e()-.5)*1.6],speed:.45+e()*.25,seed:e(),white:e()<.18?1:0})}return t})(),Z0=[_e.x0+.06,_e.z0+.06,_e.x1-.06,_e.z1-.06];function wM(e,t){let o=t+e.offset,n=Math.floor(o/e.period),r=o-n*e.period,a=.6+.4*Math.sin(n*1.7+e.seed*5),s=e.start[0]+e.drift[0]*a,i=e.start[2]+e.drift[1]*a,c=s>Z0[0]&&s<Z0[2]&&i>Z0[1]&&i<Z0[3],h=c?.017:.006,f=(e.start[1]-h)/e.speed;return{ph:r,Tf:f,lx:s,lz:i,inPool:c}}var Ba=[{at:[Ve/2-.8,7.6],dir:.9,len:.92,kind:0,sip:21,first:9},{at:[Ve/2+.9,11.6],dir:3.6,len:.74,kind:1,sip:29,first:17},{at:[Ve/2-.3,12.8],dir:5.2,len:.86,kind:2,sip:25,first:4},{at:[Ve/2+1,7],dir:2.2,len:.7,kind:1,sip:33,first:23},{at:[Ve/2-1.1,10.4],dir:4.4,len:.82,kind:0,sip:27,first:13},{at:[Ve/2+.4,9],dir:1.4,len:.94,kind:2,sip:31,first:28},{at:[Ve/2-.9,13],dir:5.9,len:.66,kind:1,sip:23,first:6},{at:[Ve/2+1.1,12.6],dir:3,len:.8,kind:0,sip:35,first:31}],Hs=[_e.x0+.5,_e.z0+.5,_e.x1-.5,fn.z-1.05],kl=[_e.x0+.25,_e.z0+.25,_e.x1-.25,fn.z-.8],Al=12,Sl=-.36,nd=[];function _M(){let e=u=>{let d=Math.sin(u*12.9898+78.233)*43758.5453;return d-Math.floor(d)},t=Ba.map((u,d)=>({k:u,i:d,x:u.at[0],z:u.at[1],th:u.dir,w:0,v:.08,y:-.17,ph:d*2.1,pitch:0,kappa:0,thrust:0,amp:.2,stroking:d%2===0,modeT:e(d*3.1)*3,aim:u.dir,nextAim:e(d*7.7)*5,yAim:-.17,nextY:e(d*5.9)*8,gx:u.at[0],gz:u.at[1],nextSip:u.first,sipT:-1,bite:0,notice:0})),o=[],n=[];for(let u=0;u<Al;u++)n.push({x:0,z:0,alive:0,born:0,seed:u*.37});let r={on:!1,x:0,z:0,t0:0},a=0,s=0,i=u=>Math.atan2(Math.sin(u),Math.cos(u)),c=()=>e(++s*1.618+a*.37);return{fish:t,events:o,crumbs:n,feed:r,drop:(u,d)=>{u=Math.max(kl[0],Math.min(kl[2],u)),d=Math.max(kl[1],Math.min(kl[3],d)),Object.assign(r,{on:!0,x:u,z:d,t0:a}),n.forEach((v,l)=>{let p=e(a+l)*Math.PI*2,m=.04+.16*Math.sqrt(e(a*1.7+l*3.1));Object.assign(v,{x:u+Math.cos(p)*m,z:d+Math.sin(p)*m,alive:1,born:a+e(l*5.3+a)*.35})}),o.push([u,d,a,1]);for(let v of t)v.notice=a+.3+Math.hypot(v.x-u,v.z-d)*.35+e(v.i*9.1+a)*.7},step:u=>{a+=u;let d=a,v=0;for(let l of n)!l.alive||d<l.born||(v++,l.x+=Math.sin(d*.7+l.seed*11)*.004*u,l.z+=Math.cos(d*.6+l.seed*7)*.004*u);if(r.on&&(v===0&&d>r.t0+1||d>r.t0+40)){r.on=!1;for(let l of n)l.alive=0}for(let l of t){let{k:p}=l,m=p.len,g=r.on&&d>l.notice;(d>l.nextAim||Math.hypot(l.gx-l.x,l.gz-l.z)<.7)&&(l.gx=Hs[0]+c()*(Hs[2]-Hs[0]),l.gz=Hs[1]+c()*(Hs[3]-Hs[1]),l.nextAim=d+12+c()*14),l.aim=Math.atan2(l.gz-l.z,l.gx-l.x)+.35*Math.sin(d*.21+l.i*1.7);let x=l.aim,b=.7,w=null;if(g){let re=1e9;for(let at of n){if(!at.alive||d<at.born)continue;let Ot=Math.hypot(at.x-l.x,at.z-l.z)+.1*Math.sin(l.i*3.3+at.seed*9);Ot<re&&(re=Ot,w=at)}let Ue=w?w.x:r.x,xt=w?w.z:r.z;x=Math.atan2(xt-l.z,Ue-l.x),l.aim=x,b=1.8}let M=.6+m*.8+l.v*2,k=g?kl:Hs,z=0;for(let re of[0,.5,-.5]){let Ue=l.x+Math.cos(l.th+re)*M,xt=l.z+Math.sin(l.th+re)*M;z=Math.max(z,Math.max(k[0]-Ue,Ue-k[2],k[1]-xt,xt-k[3],0))}if(z>0){let re=(k[0]+k[2])/2,Ue=(k[1]+k[3])/2+Math.sin(l.i*2.3)*1.5,xt=Math.atan2(Ue-l.z,re-l.x),at=Math.min(1,z*2.2);x=l.th+i(xt-l.th)*at+i(x-l.th)*(1-at),g||(l.aim=x),b=Math.max(b,.6+at*.8)}let P=0;for(let re of t){if(re===l)continue;let Ue=re.x-l.x,xt=re.z-l.z,at=Math.hypot(Ue,xt),Ot=(g?.4:1)*(m+re.k.len)/2+.2;if(at<Ot&&Math.abs(re.y-l.y)<.14){let Et=i(Math.atan2(xt,Ue)-l.th);(Math.abs(Et)<1.6||at<Ot*.5)&&(P-=Math.sign(Et||1)*(Ot-at)/Ot*(Math.abs(Et)<1.6?1:.6))}}let R=i(x-l.th)+P*(g?.4:2);l.modeT-=u,g?(l.stroking=!0,l.modeT=Math.max(l.modeT,.4)):l.modeT<=0&&(l.stroking=!l.stroking,l.modeT=l.stroking?1.2+c()*1.6:1.6+c()*3.2),!l.stroking&&(Math.abs(R)>.9||l.v<.035)&&(l.stroking=!0,l.modeT=1+c()*.8),!g&&l.sipT<0&&d>l.nextSip&&(l.sipT=0,l.nextSip=d+p.sip*(.7+.6*c()));let U=0;if(l.sipT>=0){let re=l.sipT;l.sipT+=u,U=Math.min(1,re/1.6)*(1-Math.max(0,Math.min(1,(re-2.6)/1.6))),re<1.7&&l.sipT>=1.7&&o.push([l.x+Math.cos(l.th)*.03,l.z+Math.sin(l.th)*.03,d,.9]),re<2.4&&l.sipT>=2.4&&o.push([l.x,l.z,d,.55]),(l.sipT>4.2||g)&&(l.sipT=-1)}let q=(l.stroking?g?2.4:1:0)*(1-.6*U);l.thrust+=(q-l.thrust)*Math.min(u*3,1);let Q=g?.9:.55;l.v+=(l.thrust*.085*(.7+.4*m)-Q*l.v)*u,l.v=Math.max(l.v,.008);let D=.35+.65*Math.min(1,l.thrust),V=Math.max(-b,Math.min(b,R*1.3))*D;l.w+=(V-l.w)*Math.min(u*2.2,1),l.th+=l.w*u,d>l.nextY&&(l.yAim=-(.13+c()*.1),l.nextY=d+6+c()*10);let me=l.yAim;if(U>0&&(me+=(-.045-me)*U),g){let re=w?w.x:r.x,Ue=w?w.z:r.z,xt=1-Math.min(1,Math.max(0,(Math.hypot(re-l.x,Ue-l.z)-.15)/.9));if(me+=(-.04-me)*xt,w&&d>l.bite&&l.y>-.08){let at=l.x+Math.cos(l.th)*.02,Ot=l.z+Math.sin(l.th)*.02;Math.hypot(w.x-at,w.z-Ot)<.09&&(w.alive=0,l.bite=d+1.3,o.push([w.x,w.z,d,.75]))}}l.x+=Math.cos(l.th)*l.v*u,l.z+=Math.sin(l.th)*l.v*u,l.x=Math.max(_e.x0+.15,Math.min(_e.x1-.15,l.x)),l.z=Math.max(_e.z0+.15,Math.min(fn.z-.62,l.z));let Ge=(me-l.y)*Math.min(u*(g?2:.8),1);l.y+=Ge,l.pitch+=(Math.max(-.4,Math.min(.4,Ge/u/Math.max(l.v,.06)))-l.pitch)*Math.min(u*2.5,1);let Re=Math.max(-1/m,Math.min(1/m,l.w/Math.max(l.v,.1)));l.kappa+=(Re-l.kappa)*Math.min(u*4,1);let be=.12+.88*Math.min(1.4,l.thrust)+.4*Math.min(1,Math.abs(l.w));l.amp+=(be-l.amp)*Math.min(u*2,1),l.ph+=u*(2+5.5*Math.min(1.6,l.thrust))*(.75+.35/Math.sqrt(m))}for(;o.length&&d-o[0][2]>10;)o.shift()},get t(){return a}}}function MM(){let e=Yg();{let t=_e.x0-_e.curb,o=_e.x1+_e.curb,n=_e.z0-_e.curb,r=_e.z1+_e.curb,a=[[0,0,Ve,n],[0,r,Ve,vo],[0,n,t,r],[o,n,Ve,r]];for(let[s,i,c,h]of a)for(let u=s;u<c-1e-6;u+=1)for(let d=i;d<h-1e-6;d+=1){let v=u,l=Math.min(c,u+1),p=d,m=Math.min(h,d+1);e.quad([v,0,p],[v,0,m],[l,0,m],[l,0,p],[0,1,0],ge.FLOOR,[[v,p],[v,m],[l,m],[l,p]])}}for(let t of[0,1]){let o=t?Ve:0,n=t?Ve+mr:-mr,r=t?[-1,0,0]:[1,0,0],a=.04;for(let p=0;p<vo-1e-6;p+=a){let m=p,g=Math.min(vo,p+a),x=(m+g)/2,b=null;if(!t)for(let M of ct.c)ac(x-M)!==null&&(b=[ct.sill,Math.min(ac(m-M)||ct.spring,ac(g-M)||ct.spring)]);let w=b?[[0,b[0]],[b[1],go]]:[[0,go]];for(let[M,k]of w)k<=M||(t?e.quad([o,M,g],[o,M,m],[o,k,m],[o,k,g],r,ge.PLASTER,[[g,M],[m,M],[m,k],[g,k]]):e.quad([o,M,m],[o,M,g],[o,k,g],[o,k,m],r,ge.PLASTER,[[m,M],[g,M],[g,k],[m,k]]))}if(!t)for(let p of ct.c){for(let b of[-1,1]){let w=p+b*ct.hw,M=[0,0,-b],k=[o,ct.sill,w],z=[n,ct.sill,w],P=[n,ct.spring,w],R=[o,ct.spring,w];b>0!=!!t?e.quad(k,z,P,R,M,ge.PLASTER,[[0,ct.sill],[mr,ct.sill],[mr,ct.spring],[0,ct.spring]]):e.quad(R,P,z,k,M,ge.PLASTER,[[0,ct.spring],[mr,ct.spring],[mr,ct.sill],[0,ct.sill]])}let m=28;for(let b=0;b<m;b++){let w=b/m*nn,M=(b+1)/m*nn,k=p+Math.cos(w)*ct.hw,z=p+Math.cos(M)*ct.hw,P=ct.spring+Math.sin(w)*ct.hw,R=ct.spring+Math.sin(M)*ct.hw,U=[0,-Math.sin((w+M)/2),-Math.cos((w+M)/2)];t?e.quad([o,P,k],[n,P,k],[n,R,z],[o,R,z],U,ge.PLASTER,[[0,w],[mr,w],[mr,M],[0,M]]):e.quad([o,R,z],[n,R,z],[n,P,k],[o,P,k],U,ge.PLASTER,[[0,M],[mr,M],[mr,w],[0,w]])}let g=t?Ve-.08:-mr,x=t?Ve+mr:.08;e.box(g,ct.sill-.09,p-ct.hw-.12,x,ct.sill,p+ct.hw+.12,ge.STONE)}let s=t?Ve:0,i=t?-1:1,c=[.6,...ct.c.slice(1).map((p,m)=>(p+ct.c[m])/2),vo-.6];for(let p of c){let m=Math.min(s,s+i*.14),g=Math.max(s,s+i*.14);e.box(m,0,p-.34,g,go-.7,p+.34,ge.STONE,{bottom:!0});let x=Math.min(s,s+i*.24),b=Math.max(s,s+i*.24);e.box(x,0,p-.44,b,.55,p+.44,ge.STONE,{bottom:!0}),e.box(x,go-.95,p-.46,b,go-.7,p+.46,ge.STONE)}let h=Math.min(s,s+i*.05),f=Math.max(s,s+i*.05);e.box(h,0,0,f,.22,vo,ge.STONE,{bottom:!0});let u=Math.min(s,s+i*.32),d=Math.max(s,s+i*.32);e.box(u,go-.55,0,d,go-.3,vo,ge.STONE);let v=Math.min(s,s+i*.42),l=Math.max(s,s+i*.42);e.box(v,go-.3,0,l,go-.12,vo,ge.STONE)}for(let[t,o]of[[0,1],[vo,-1]]){for(let c=0;c<32;c++){let h=c/32*Ve,f=(c+1)/32*Ve,u=v=>v<Ve/2?go+ha*v:go+ha*(Ve-v),d=o>0?[[f,0],[h,0],[h,u(h)],[f,u(f)]]:[[h,0],[f,0],[f,u(f)],[h,u(h)]];e.quad(...d.map(([v,l])=>[v,l,t]),[0,0,o],ge.PLASTER,d.map(([v,l])=>[v,l]))}let r=o>0?0:vo-.05,a=o>0?.05:vo;e.box(0,0,r,Ve,.22,a,ge.STONE,{bottom:!0});let s=o>0?0:vo-.32,i=o>0?.32:vo;e.box(0,go-.55,s,Ve,go-.3,i,ge.STONE)}{let o=Ve/2-1.1,n=Ve/2+1.1,r=3.9;e.box(o-.3,0,0,o,r+.3,.12,ge.STONE),e.box(n,0,0,n+.3,r+.3,.12,ge.STONE),e.box(o-.3,r,0,n+.3,r+.4,.14,ge.STONE);for(let[a,s]of[[o,Ve/2-.01],[Ve/2+.01,n]])e.box(a,0,.02,s,r,.02+.06,ge.WOOD),e.box(a+.12,.3,.02+.06,s-.12,1.7,.02+.09,ge.WOOD),e.box(a+.12,2,.02+.06,s-.12,r-.2,.02+.09,ge.WOOD)}gM(e);{let{x0:t,x1:o,z0:n,z1:r,curb:a,top:s}=_e,i=.06,c=.08;e.box(t-a,0,n-a,t,s-c,r+a,ge.WMARBLE,{bottom:!0}),e.box(o,0,n-a,o+a,s-c,r+a,ge.WMARBLE,{bottom:!0}),e.box(t,0,n-a,o,s-c,n,ge.WMARBLE,{bottom:!0}),e.box(t,0,r,o,s-c,r+a,ge.WMARBLE,{bottom:!0}),e.box(t-a-i,s-c,n-a-i,t+i*.5,s,r+a+i,ge.WMARBLE),e.box(o-i*.5,s-c,n-a-i,o+a+i,s,r+a+i,ge.WMARBLE),e.box(t+i*.5,s-c,n-a-i,o-i*.5,s,n+i*.5,ge.WMARBLE),e.box(t+i*.5,s-c,r-i*.5,o-i*.5,s,r+a+i,ge.WMARBLE);let h=.5;for(let v=t;v<o-1e-6;v+=h)for(let l=n;l<r-1e-6;l+=h){let p=v,m=Math.min(o,v+h),g=l,x=Math.min(r,l+h);e.quad([p,0,g],[p,0,x],[m,0,x],[m,0,g],[0,1,0],ge.WATER,[[p,g],[p,x],[m,x],[m,g]])}let{x:f,z:u,plinth:d}=fn;e.box(f-.42,0,u-.42,f+.42,d-.12,u+.42,ge.WMARBLE,{bottom:!0}),e.box(f-.5,d-.12,u-.5,f+.5,d,u+.5,ge.WMARBLE),e.box(f-.48,0,u-.48,f+.48,.12,u+.48,ge.WMARBLE,{bottom:!0})}return e}function kM(e){for(let o of[0]){let n=o?Ve+mr*.5:-mr*.5,r=.05,a=Dr.w*.5;for(let s of ct.c){for(let i of Dr.cols){let c=ac(i)-.01;e.box(n-r,ct.sill,s+i-a,n+r,c,s+i+a,ge.STEEL)}for(let i=ct.sill+Dr.rowH;i<ct.spring+.01;i+=Dr.rowH)e.box(n-r,i-a,s-ct.hw,n+r,i+a,s+ct.hw,ge.STEEL);for(let[i,c]of[[ct.hw-.03,.06],[Dr.ring,a]])for(let f=0;f<24;f++){let u=f/24*nn,d=(f+1)/24*nn;e.beam([n,ct.spring+Math.sin(u)*i,s+Math.cos(u)*i],[n,ct.spring+Math.sin(d)*i,s+Math.cos(d)*i],c,ge.STEEL,[1,0,0])}for(let i of[-1,1])e.box(n-r,ct.sill,s+i*(ct.hw-.03)-.03,n+r,ct.spring,s+i*(ct.hw-.03)+.03,ge.STEEL);e.box(n-r,ct.sill,s-ct.hw,n+r,ct.sill+.06,s+ct.hw,ge.STEEL)}}let t=o=>o<Ve/2?go+ha*o:go+ha*(Ve-o);for(let o=0;o<=12;o++){let n=o*Vo.rafter;for(let[r,a]of[[-.3,Ve/2],[Ve/2,Ve+.3]])e.beam([r,t(Math.max(0,Math.min(Ve,r)))-.1,n],[a,t(a)-.1,n],.06,ge.STEEL)}for(let o=Vo.purlin;o<Ve/2-.2;o+=Vo.purlin)for(let n of[o,Ve-o])e.beam([n,t(n)-.06,-.2],[n,t(n)-.06,vo+.2],.035,ge.STEEL);e.beam([Ve/2,fa-.14,-.2],[Ve/2,fa-.14,vo+.2],.12,ge.STEEL);for(let o of[.05,Ve-.05])e.beam([o,go-.05,0],[o,go-.05,vo],.1,ge.STEEL);for(let o of zl){e.box(-.05,go-.13,o-.08,Ve+.05,go+.13,o+.08,ge.STEEL),e.beam([Ve/2,go,o],[Ve/2,fa-.2,o],.07,ge.STEEL);for(let n of[-1,1])e.beam([Ve/2+n*Ve/4,go,o],[Ve/2,fa-.4,o],.055,ge.STEEL),e.beam([Ve/2+n*Ve/4,go,o],[Ve/2+n*Ve/4,t(Ve/2+n*Ve/4)-.2,o],.045,ge.STEEL),e.beam([Ve/2+n*(Ve/2-.1),go,o],[Ve/2+n*Ve/4,t(Ve/2+n*Ve/4)-.2,o],.045,ge.STEEL);for(let n of[-1,1])e.box(Ve/2+n*Ve/4-.12,go-.18,o-.1,Ve/2+n*Ve/4+.12,go+.18,o+.1,ge.STEEL)}}function SM(e){let t=ic(311),o=[],n=[[_e.x0+.9,6.6,.9,10],[_e.x1-.8,8.4,.85,9],[_e.x0+.8,10.6,.8,8],[_e.x1-.9,12.4,.9,10],[_e.x0+1,13.9,.65,6],[Ve/2+.2,9.6,.5,4],[_e.x1-.7,15.9,.55,5]];for(let[a,s,i,c]of n)for(let h=0;h<c;h++)for(let f=0;f<40;f++){let u=t()*2*nn,d=i*Math.sqrt(t()),v=a+Math.cos(u)*d,l=s+Math.sin(u)*d,p=.15+t()*.17;if(!(v-p<_e.x0+.04||v+p>_e.x1-.04||l-p<_e.z0+.04||l+p>_e.z1-.04)&&!(Math.hypot(v-fn.x,l-fn.z)<.62+p)&&!o.some(m=>Math.hypot(m[0]-v,m[1]-l)<(m[2]+p)*.93)){o.push([v,l,p,t()*2*nn,t()]);break}}for(let[a,s,i,c,h]of o){nd.push([a,s,i]),e.float=[a,s,h*7.3+i*13];let f=28,u=4,d=i*1.08,v=[];for(let l=0;l<=u;l++){let p=[];for(let m=0;m<f;m++){let g=m/f*2*nn,x=l/u,b=g-c,w=.012+.004*(1-x*x)+.006*Math.pow(x,6)*(.5+.5*Math.sin(g*3+h*9));p.push(e.v([a+Math.cos(g)*d*x,w,s+Math.sin(g)*d*x],[0,1,0],ge.PAD,[.5+.5*x*Math.sin(b),.5+.5*x*Math.cos(b)]))}v.push(p)}for(let l=0;l<u;l++)for(let p=0;p<f;p++){let m=v[l][p],g=v[l][(p+1)%f],x=v[l+1][(p+1)%f],b=v[l+1][p];e.idx.push(m,g,x,m,x,b)}}e.float=null;let r=[[_e.x0+.75,6.9,1],[_e.x1-.65,8.1,.85],[_e.x1-.95,12.6,1.1],[_e.x0+.95,10.3,.8],[_e.x1-.55,15.6,.9],[_e.x0+1.15,13.7,.75]];for(let[a,s,i]of r){e.float=[a,s,a*3.7+s*1.3];let c=.17;[[12,1,70],[10,.86,48],[8,.66,26]].forEach(([f,u,d],v)=>{for(let l=0;l<f;l++){let p=2*nn*l/f+v*.33,m=(90-(90-d)*i)*nn/180,g=6,x=4,b=[];for(let w=0;w<=g;w++){let M=w/g,k=(.18+.82*Math.sin(nn*Math.min(1,Math.pow(M,.8)*.75+.1)))*.36*u*c,z=[];for(let P=0;P<=x;P++){let R=P/x*2-1,U=R*k,q=Math.abs(R)*Math.abs(R)*.12*u*c,Q=M*u*c,D=Q*Math.cos(m),V=Q*Math.sin(m)+q,me=a+Math.cos(p)*D-Math.sin(p)*U,Ge=s+Math.sin(p)*D+Math.cos(p)*U;z.push(e.v([me,.03+V,Ge],[-Math.cos(p)*Math.sin(m)*.6,.8,-Math.sin(p)*Math.sin(m)*.6],ge.PETAL,[(v===2?.5:0)+.5*(.5+.5*R*.92),.98-M*.96]))}b.push(z)}for(let w=0;w<g;w++)for(let M=0;M<x;M++){let k=b[w][M],z=b[w][M+1],P=b[w+1][M+1],R=b[w+1][M];e.idx.push(k,z,P,k,P,R,k,P,z,k,R,P)}}}),e.lathe(a,s,[[0,.03+.05*c*4],[.025,.03+.045*c*4],[.032,.035],[0,.03]],ge.STAMEN,12)}e.float=null}function EM(e){let t=ic(907);{e.box(1.25-.48,.86-.06,11.1-1.35,1.25+.48,.86,11.1+1.35,ge.WOOD);for(let i of[-1,1])for(let c of[-1,1])e.box(1.25+i*(.48-.08)-.04,0,11.1+c*(1.35-.1)-.04,1.25+i*(.48-.08)+.04,.86-.06,11.1+c*(1.35-.1)+.04,ge.WOOD);e.box(1.25-.48+.06,.16,11.1-1.35+.1,1.25+.48-.06,.19,11.1+1.35-.1,ge.WOOD);for(let i=0;i<11;i++){let c=1.25+(t()-.5)*.6,h=11.1+(t()-.5)*2.2,f=.035+t()*.04,u=.09+t()*.14;if(e.lathe(c,h,[[0,.86],[f,.86],[f*1.02,.86+u*.9],[f*.9,.86+u],[0,.86+u]],i%3?ge.JAR:ge.POT,14),i%3===0)for(let d=0;d<7;d++){let v=t()*2*nn,l=.28+t()*.12,p=.12+t()*.2;e.beam([c,.86+.03,h],[c+Math.cos(v)*p*l,.86+.03+l,h+Math.sin(v)*p*l],.0055,ge.BRUSH)}}e.box(1.25-.3,.86,11.1+.7,1.25+.15,.86+.02,11.1+1.15,ge.WOOD)}for(let o=0;o<5;o++){let n=.55+t()*.6,r=.75+t()*.8,a=19.3+o*.16,s=.25+o*.07,i=.17,c=[s+r*Math.sin(i)*0,r,a];e.quad([s+.18,0,a-n/2],[s+.18,0,a+n/2],[s+.18-r*Math.sin(i),r*Math.cos(i),a+n/2],[s+.18-r*Math.sin(i),r*Math.cos(i),a-n/2],[Math.cos(i),Math.sin(i),0],o%2?ge.WOOD:ge.GESSO,[[0,0],[1,0],[1,1],[0,1]])}for(let o of Kg)e.beam([o[0],go,o[2]],[o[0],o[1]+.05,o[2]],.008,ge.STEEL),e.lathe(o[0],o[2],[[.04,o[1]+.06],[.06,o[1]+.02],[.16,o[1]-.09],[.29,o[1]-.22],[.33,o[1]-.28],[.32,o[1]-.285]],ge.SHADE,32),e.lathe(o[0],o[2],[[0,o[1]-.25],[.06,o[1]-.2],[0,o[1]-.12]],ge.BULB,12)}var Kg=[[4.2,4.6,7.33],[11.8,4.6,7.33],[4.2,4.6,16.5],[11.8,4.6,16.5]],az=[[_e.x0-1,_e.z0-1,1],[_e.x1+1,_e.z0-1,.95],[_e.x0-1,_e.z1+1,1.15],[_e.x1+1,_e.z1+1,1.1],[.9,1.3,1.25],[Ve-.9,vo-1.2,1.3]],jg=[[0,0,.16,.5],[.16,0,.34,.4],[.35,0,.5,.36],[.5,0,.66,.38],[.68,0,.84,.42],[0,.6,.19,1],[.2,.57,.36,1],[.41,.6,.58,1]];function AM(){let e={pos:[],nrm:[],uv:[],shade:[],flower:[],idx:[]},t=ic(1213),o=(n,r,a,s,i)=>{let c=jg[Math.floor(t()*jg.length)],h=(c[2]-c[0])/(c[3]-c[1]),f=s*h*1,u=5,d=e.pos.length/3,v=.6+t()*.4;for(let l=0;l<=u;l++){let p=l/u,m=i*p*p*s,g=[n[0]+r[0]*p*s,n[1]+r[1]*p*s-m,n[2]+r[2]*p*s];for(let x of[-.5,.5]){e.pos.push(g[0]+a[0]*x*f+kt[0],g[1]+a[1]*x*f-Math.abs(x)*.08*f+kt[1],g[2]+a[2]*x*f+kt[2]);let b=[r[1]*a[2]-r[2]*a[1],r[2]*a[0]-r[0]*a[2],r[0]*a[1]-r[1]*a[0]],w=Math.hypot(...b)||1;e.nrm.push(b[0]/w,Math.abs(b[1]/w)+.2,b[2]/w),e.uv.push(x<0?c[0]:c[2],c[3]-(c[3]-c[1])*p),e.shade.push(v),e.flower.push(0)}}for(let l=0;l<u;l++){let p=d+l*2;e.idx.push(p,p+1,p+3,p,p+3,p+2)}};bM(e,o,t);for(let[n,r,a]of[[_e.x0-.3,_e.z0-.3,-1],[_e.x1+.3,_e.z1+.3,1],[_e.x0-.3,_e.z1+.2,-1]])for(let s=0;s<26;s++){let i=t()*2*nn,c=n+(t()-.3)*.5*-a,h=r+(t()-.5)*.8,f=_e.top+.01-Math.max(0,Math.abs(c-n)-.1)*.6*t();o([c,Math.max(.05,f),h],[Math.cos(i),-.15,Math.sin(i)],[-Math.sin(i),0,Math.cos(i)],.08+t()*.05,.12)}return e}function zM(){let e=Yg();for(let o of[0]){let n=o?Ve+mr*.5+.01:-mr*.5-.01,r=o?[-1,0,0]:[1,0,0];for(let a of ct.c)for(let i=a-ct.hw;i<a+ct.hw-1e-6;i+=.05){let c=i,h=Math.min(a+ct.hw,i+.05),f=ac(c-a+1e-4)||ct.spring,u=ac(h-a-1e-4)||ct.spring;o?e.quad([n,ct.sill,h],[n,ct.sill,c],[n,f,c],[n,u,h],r,0,[[h,ct.sill],[c,ct.sill],[c,f],[h,u]]):e.quad([n,ct.sill,c],[n,ct.sill,h],[n,u,h],[n,f,c],r,0,[[c,ct.sill],[h,ct.sill],[h,u],[c,f]])}}let t=Math.hypot(ha,1);return e.quad([0,go+.002,vo],[0,go+.002,0],[Ve/2,fa+.002,0],[Ve/2,fa+.002,vo],[ha/t,-1/t,0].map(o=>-o).map((o,n)=>n===1?-Math.abs(o):o),1,[[0,vo],[0,0],[Ve/2,0],[Ve/2,vo]]),e.quad([Ve,go+.002,0],[Ve,go+.002,vo],[Ve/2,fa+.002,vo],[Ve/2,fa+.002,0],[-ha/t,-1/t,0],1,[[Ve,0],[Ve,vo],[Ve/2,vo],[Ve/2,0]]),e}var TM=`
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
`,LM=Kg.map(e=>od([e[0],e[1]-.22,e[2]])),K0=`
	${TM}
	${Xg()}

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
		vec3 p = pw - vec3(${de(kt[0])}, ${de(kt[1])}, ${de(kt[2])});
		float vis = studioSun(pw + N * 0.03);
		sunVis = vis;
		vec3 sunC = mix(vec3(1.0, 0.88, 0.70) * 3.9, vec3(0.50, 0.64, 1.0) * 1.35, night);
		float lam = max(dot(N, STUDIO_SUN), 0.0);
		vec3 col = sunC * vis * lam;
		vec3 Hh = normalize(STUDIO_SUN + V);
		spec = sunC * vis * pow(max(dot(N, Hh), 0.0), mix(16.0, 400.0, gloss)) * mix(0.04, 1.0, gloss) * (lam > 0.0 ? 1.0 : 0.0);

		// skylight: the roof is glass, the walls are full of windows
		float upF = 0.5 + 0.5 * N.y;
		float hgt = clamp(p.y / ${de(go)}, 0.0, 1.0);
		// corners and the foot of the walls get less of the sky
		float dw = min(min(p.x, ${de(Ve)} - p.x), min(p.z, ${de(vo)} - p.z));
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
			${LM.map(e=>`
			{
				vec3 d = vec3(${de(e[0])}, ${de(e[1])}, ${de(e[2])}) - pw;
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
`;function NM(e){let t=new DataView(e),o=t.getUint32(4,!0),n=t.getUint32(8,!0),r=[],a=[];for(let f=0;f<3;f++)r.push(t.getFloat32(12+f*4,!0)),a.push(t.getFloat32(24+f*4,!0));let s=36,i=new Uint16Array(e,s,o*3);s+=o*6;let c=new Uint16Array(e,s,n);s+=n*2;let h=new Int8Array(e,s,o*3);return{nV:o,nI:n,mn:r,sz:a,pos:i,idx:c,nrm:h}}function El(e,t,o){let n=o&&o.wrap||"clamp",r=e.texture({data:[[[0,0,0,0]]],min:"linear",mag:"linear"}),a={tex:r,ready:!1};return fetch(t).then(s=>{if(!s.ok)throw new Error("Could not load "+t);return s.blob()}).then(s=>createImageBitmap(s,{premultiplyAlpha:"none"}).catch(()=>new Promise((i,c)=>{let h=new Image;h.onload=()=>i(h),h.onerror=c,h.src=URL.createObjectURL(s)}))).then(s=>{r({data:s,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrap:n}),a.ready=!0}).catch(s=>console.error(s)),a}var bh=128,wh=372,Tl=(_e.x1-_e.x0)/bh,Qg=(_e.z1-_e.z0)/wh,RM=.02,Zg=`
	float simDec(vec2 c) { return (floor(c.x * 255.0 + 0.5) * 256.0 + floor(c.y * 255.0 + 0.5)) / 65535.0 * 2.0 - 1.0; }
	vec2 simEnc(float h) {
		float v = floor(clamp(h * 0.5 + 0.5, 0.0, 1.0) * 65535.0 + 0.5);
		float hi = floor(v / 256.0);
		return vec2(hi, v - hi * 256.0) / 255.0;
	}
`,Q0=`
	uniform float stime;
	uniform highp sampler2D simTex;
	${Zg}
	float simAt(vec2 i) {
		i = clamp(i, vec2(0.0), vec2(${bh-1}.0, ${wh-1}.0));
		return simDec(texture2D(simTex, (i + 0.5) / vec2(${bh}.0, ${wh}.0)).rg);
	}
	// the height of the water at world xz (metres, tiny)
	float poolHeight(vec2 xz) {
		float h = 0.0018 * sin(xz.x * 2.1 + stime * 0.55) * sin(xz.y * 1.7 - stime * 0.43)
		        + 0.0010 * sin(xz.x * 3.7 - xz.y * 2.9 + stime * 0.8);
#ifndef NO_SIM
		vec2 g = (xz - vec2(${de(_e.x0+kt[0])}, ${de(_e.z0+kt[2])})) / vec2(${de(Tl)}, ${de(Qg)}) - 0.5;
		vec2 i = floor(g), fr = g - i;
		float sh = mix(mix(simAt(i), simAt(i + vec2(1.0, 0.0)), fr.x), mix(simAt(i + vec2(0.0, 1.0)), simAt(i + vec2(1.0, 1.0)), fr.x), fr.y);
		h += sh * ${de(RM)};
#endif
		return h;
	}
`,Wg=`
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
	${Q0}
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
	}`,OM=`
	precision highp float;
	uniform float night, time, yScale, mirrorOn;
	uniform sampler2D padTex, petalTex, reflTex;
	uniform vec2 reflSize;
	uniform float reflOn;
	uniform mat4 view;
	${Q0}
	varying vec3 v_pos, v_nrm, v_eye;
	varying float v_kind;
	varying vec2 v_uv;
	${K0}

	bool is(float k) { return abs(v_kind - k) < 0.5; }

	void main() {
		vec3 pw = v_pos;
		vec3 p = pw - vec3(${de(kt[0])}, ${de(kt[1])}, ${de(kt[2])});
		vec3 V = normalize(v_eye - pw);
		vec3 N = normalize(v_nrm);
		if (dot(N, V) < 0.0 && !is(${ge.PETAL}.0)) N = -N;
		if (is(${ge.PETAL}.0) && dot(N, V) < 0.0) N = -N;

		// in the reflection under the floor, the floor and the water are not drawn
		bool floorish = is(${ge.FLOOR}.0) || is(${ge.WATER}.0);
		if (yScale < 0.0 && floorish) discard;

		// fallen bracts: little papery hearts, pink or white
		if (is(${ge.BRACT}.0)) {
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

		if (is(${ge.PLASTER}.0) || is(${ge.NICHE}.0)) {
			// old lime plaster: warm, patchy, with a soft trowelled bloom
			float big = fbm3(p * vec3(0.35, 0.45, 0.35));
			float mid = fbm3(p * 1.6 + 3.0);
			float fine = vnoise3(p * 14.0);
			vec3 a = vec3(0.70, 0.60, 0.47), b = vec3(0.84, 0.76, 0.63);
			base = mix(a, b, smoothstep(0.3, 0.7, big));
			base *= 0.86 + 0.22 * mid + 0.05 * fine;
			// damp stains low down, soot high up
			base *= mix(0.86, 1.0, smoothstep(0.0, 1.4, p.y + 0.6 * mid));
			base *= mix(1.0, 0.9, smoothstep(${de(go-2)}, ${de(go)}, p.y));
			// where the plaster has come away, old brick shows through
			float bare = smoothstep(0.70, 0.74, fbm3(p * vec3(0.5, 0.8, 0.5) + 11.0)) * smoothstep(0.4, 1.6, p.y) * 0.85;
			vec2 bk = (abs(N.x) > 0.5 ? p.zy : p.xy) * vec2(1.0 / 0.23, 1.0 / 0.075);
			bk.x += floor(bk.y) * 0.5;
			float mortar = max(smoothstep(0.9, 0.97, fract(bk.x)), smoothstep(0.82, 0.92, fract(bk.y)));
			vec3 brick = mix(vec3(0.55, 0.30, 0.20), vec3(0.42, 0.25, 0.18), vnoise3(vec3(floor(bk), 0.0) * 0.7)) * (0.85 + 0.3 * hash13(vec3(floor(bk), 1.0)));
			brick = mix(brick, vec3(0.62, 0.58, 0.52), mortar);
			base = mix(base, brick, bare);
			if (is(${ge.NICHE}.0)) base *= 0.55;
			gloss = 0.04;
		} else if (is(${ge.STONE}.0)) {
			float n = fbm3(p * vec3(1.2, 2.5, 1.2));
			base = mix(vec3(0.72, 0.66, 0.56), vec3(0.84, 0.79, 0.70), n) * (0.92 + 0.12 * vnoise3(p * 20.0));
			gloss = 0.12;
		} else if (is(${ge.TRAVERTINE}.0)) {
			// travertine: bands, little holes, a warm cream
			float band = fbm3(vec3(p.x * 0.4, p.y * 9.0 + fbm3(p * 1.5) * 2.0, p.z * 0.4));
			base = mix(vec3(0.73, 0.65, 0.53), vec3(0.88, 0.82, 0.72), band);
			float pit = smoothstep(0.84, 0.9, vnoise3(p * 55.0));
			base *= 1.0 - pit * 0.18;
			// wet and darker just above the water
			base *= mix(0.78, 1.0, smoothstep(0.0, 0.12, p.y));
			gloss = 0.18;
		} else if (is(${ge.STEEL}.0)) {
			base = vec3(0.035, 0.036, 0.038) * (0.8 + 0.4 * vnoise3(p * 3.0));
			gloss = 0.45;
		} else if (is(${ge.FLOOR}.0)) {
			// the gallery's own floor: polished chequered marble, black and
			// dark cream, laid on the diagonal, with fine veins and hair-line
			// grout, the polish duller where people walk
			vec2 tq = mat2(0.70711, 0.70711, -0.70711, 0.70711) * (p.xz - vec2(${de(Ve/2)}, 0.0));
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
			aoK = mix(0.62, 1.0, smoothstep(0.0, 0.9, min(min(p.x, ${de(Ve)} - p.x), min(p.z, ${de(vo)} - p.z))));
			// the curb throws a soft shadow round the pool
			vec2 dq = max(vec2(${de(_e.x0-_e.curb)} - p.x, p.x - ${de(_e.x1+_e.curb)}), vec2(${de(_e.z0-_e.curb)} - p.z, p.z - ${de(_e.z1+_e.curb)}));
			float dpool = max(max(dq.x, dq.y), 0.0);
			aoK *= mix(0.7, 1.0, smoothstep(0.0, 0.4, dpool));
		} else if (is(${ge.WMARBLE}.0)) {
			// white statuary marble, polished: a soft grey cloud and fine veins
			float cl = fbm3(p * 1.4 + 2.0);
			float v1 = abs(sin(p.x * 3.1 + p.z * 1.7 + p.y * 5.0 + cl * 7.0));
			float vein = (1.0 - smoothstep(0.0, 0.05, v1)) * 0.7 + (1.0 - smoothstep(0.0, 0.02, abs(sin(p.z * 6.3 - p.x * 2.2 + cl * 11.0)))) * 0.3;
			base = mix(vec3(0.68, 0.68, 0.66), vec3(0.76, 0.76, 0.74), cl);
			base = mix(base, vec3(0.50, 0.51, 0.52), vein * 0.45);
			base *= mix(0.8, 1.0, smoothstep(0.0, 0.1, p.y));
			gloss = 0.88;
		} else if (is(${ge.REDDOOR}.0) || is(${ge.REDPANEL}.0)) {
			// deep crimson paint over wood: a soft sheen, the grain just showing
			float grain = vnoise3(vec3(p.x * 40.0, p.y * 2.0, p.z * 40.0));
			base = vec3(0.30, 0.022, 0.026) * (0.88 + 0.2 * grain);
			if (is(${ge.REDPANEL}.0)) base *= 0.55;
			gloss = 0.62;
		} else if (is(${ge.DARKWOOD}.0)) {
			float grain = vnoise3(vec3(p.x * 3.0, p.y * 45.0, p.z * 3.0));
			base = mix(vec3(0.030, 0.019, 0.014), vec3(0.062, 0.040, 0.028), grain);
			gloss = 0.35;
		} else if (is(${ge.BRASS}.0)) {
			base = vec3(0.60, 0.44, 0.17) * (0.85 + 0.25 * vnoise3(p * 90.0));
			gloss = 0.78;
		} else if (is(${ge.KEYHOLE}.0)) {
			base = vec3(0.004);
		} else if (is(${ge.BRACT}.0)) {
			float white = step(1.5, v_uv.x);
			base = mix(vec3(0.62, 0.03, 0.22), vec3(0.86, 0.80, 0.80), white) * (0.8 + 0.3 * hash13(floor(p * 30.0)));
			sss = 0.5;
		} else if (is(${ge.WATER}.0)) {
			base = vec3(0.012, 0.018, 0.014);
			gloss = 1.0;
		} else if (is(${ge.PAD}.0)) {
			vec4 tx = texture2D(padTex, v_uv);
			if (tx.a < 0.5) discard;
			base = tx.rgb * tx.rgb * (0.8 + 0.35 * vnoise3(vec3(p.xz * 1.3, 2.0)));
			gloss = 0.55;
		} else if (is(${ge.PETAL}.0)) {
			vec4 tx = texture2D(petalTex, v_uv);
			if (tx.a < 0.45) discard;
			base = tx.rgb * tx.rgb;
			sss = 0.6;
			gloss = 0.25;
		} else if (is(${ge.STAMEN}.0)) {
			base = vec3(0.95, 0.66, 0.12);
			gloss = 0.2;
		} else if (is(${ge.MARBLE}.0)) {
			// warm white marble with faint grey veins
			float v = fbm3(p * 2.2);
			float vein = 1.0 - smoothstep(0.0, 0.035, abs(sin((p.y * 3.0 + p.x * 2.0 + v * 6.0))) - 0.0) ;
			base = mix(vec3(0.86, 0.83, 0.77), vec3(0.93, 0.91, 0.86), v) * (1.0 - 0.06 * vein);
			// a little grime in the folds, darker at the foot
			base *= mix(0.84, 1.0, smoothstep(${de(fn.plinth)}, ${de(fn.plinth+.5)}, p.y));
			sss = 0.18;
			gloss = 0.32;
		} else if (is(${ge.WOOD}.0)) {
			float g = vnoise3(vec3(p.x * 2.0, p.y * 30.0, p.z * 2.0));
			base = mix(vec3(0.26, 0.15, 0.08), vec3(0.42, 0.27, 0.15), g) * (0.85 + 0.2 * vnoise3(p * 5.0));
			gloss = 0.2;
		} else if (is(${ge.GESSO}.0)) {
			base = vec3(0.86, 0.83, 0.76) * (0.95 + 0.08 * vnoise3(p * 30.0));
		} else if (is(${ge.PAINT}.0)) {
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
		} else if (is(${ge.POT}.0)) {
			base = vec3(0.025, 0.025, 0.028);
			gloss = 0.85;
		} else if (is(${ge.SOIL}.0)) {
			base = vec3(0.10, 0.07, 0.05) * (0.7 + 0.5 * vnoise3(p * 40.0));
		} else if (is(${ge.SHADE}.0)) {
			base = vec3(0.03);
			gloss = 0.6;
		} else if (is(${ge.BULB}.0)) {
			vec3 glow = mix(vec3(0.75, 0.70, 0.62) * 0.35, vec3(1.0, 0.75, 0.45) * 3.5, night);
			gl_FragColor = vec4(sqrt(glow), 1.0);
			return;
		} else if (is(${ge.JAR}.0)) {
			base = mix(vec3(0.55, 0.42, 0.25), vec3(0.75, 0.70, 0.62), hash13(floor(p * 3.0)));
			gloss = 0.7;
		} else if (is(${ge.BRUSH}.0)) {
			base = mix(vec3(0.42, 0.10, 0.06), vec3(0.75, 0.62, 0.38), step(${de(.86+.24)}, p.y));
			gloss = 0.5;
		} else if (is(${ge.CLOTH}.0)) {
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
		if (is(${ge.POT}.0) || is(${ge.STEEL}.0) || is(${ge.SHADE}.0) || is(${ge.JAR}.0)) {
			col += env * (0.04 + 0.6 * fres) * gloss * 1.2;
		}
		if (is(${ge.BRASS}.0)) {
			col = base * light * 0.35 + spec * base * 2.5 + env * base * 1.6;
		}
		if (is(${ge.REDDOOR}.0) || is(${ge.REDPANEL}.0) || is(${ge.WMARBLE}.0)) {
			col += env * (0.03 + 0.5 * fres) * gloss;
		}

		col = studioAir(col, pw, v_eye);

		float alpha = 1.0;
		if (is(${ge.FLOOR}.0)) {
			// as polished as the gallery's: a clear reflection even looking
			// down, a mirror at grazing angles, more on the black tiles
			float cosV = clamp(V.y, 0.0, 1.0);
			float refl = 0.16 + 0.58 * pow(1.0 - cosV, 3.0);
			refl *= mix(0.72, 1.0, checker);
			refl *= gloss;
			alpha = 1.0 - refl * mirrorOn;
			alpha = mix(alpha, 1.0, clamp(sunVis * 0.4, 0.0, 0.45));
		}
		if (is(${ge.WATER}.0)) {
			// still, dark water: almost a mirror, the sky's light on it, a
			// very slow breath of ripples
			// the moving surface: its slope from the swell and the rings
			float e = ${de(Tl)};
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
	}`;ja.exports=function(e){let t=MM();kM(t),SM(t),EM(t),xM(t),yM(t);let o={enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},n=performance.now(),r={t:0},a=0,s=e._gl,i=!!(s&&s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS)>0),c=ce=>i?ce:`#define NO_SIM
`+ce,h=(()=>{let ce=bh,le=wh,G=new Uint8Array(ce*le*4);for(let co=0;co<ce*le;co++)G[co*4]=128,G[co*4+2]=128;let Oe=()=>e.framebuffer({color:e.texture({width:ce,height:le,data:G,min:"nearest",mag:"nearest",wrap:"clamp"}),depth:!1,stencil:!1}),Qe=[Oe(),Oe()],Se=0,he=new Uint8Array(ce*le*4);for(let co=0;co<le;co++)for(let Uo=0;Uo<ce;Uo++){let tn=_e.x0+(Uo+.5)*Tl,W=_e.z0+(co+.5)*Qg,Ee=Math.abs(tn-fn.x)<.43&&Math.abs(W-fn.z)<.43,ze=0;for(let qe of nd)ze=Math.max(ze,1-Math.min(1,Math.max(0,(Math.hypot(tn-qe[0],W-qe[1])-qe[2]*.7)/(qe[2]*.3))));let ue=(co*ce+Uo)*4;he[ue]=Ee?0:255,he[ue+1]=Math.round(ze*255),he[ue+3]=255}let At=e.texture({width:ce,height:le,data:he,min:"nearest",mag:"nearest",wrap:"clamp"}),_=16,_t=[];for(let co=0;co<_;co++)_t.push([0,0,0,.04]);let yt={prev:e.prop("prev"),mask:At};for(let co=0;co<_;co++)yt["src["+co+"]"]=(Uo=>()=>_t[Uo])(co);let Gt=Math.pow(.36*(1/60)/Tl,2),Yt=e({vert:"precision highp float; attribute vec2 position; varying vec2 uv; void main() { uv = position * 0.5 + 0.5; gl_Position = vec4(position, 0.0, 1.0); }",frag:`
			precision highp float;
			uniform highp sampler2D prev, mask;
			uniform vec4 src[${_}];
			varying vec2 uv;
			${Zg}
			void main() {
				vec2 px = 1.0 / vec2(${ce}.0, ${le}.0);
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
				float hn = h + (h - hp) * damp + ${de(Gt)} * lap;
				hn *= 0.9993;
				// whatever touched the water this moment
				vec2 p = vec2(${de(_e.x0+kt[0])}, ${de(_e.z0+kt[2])}) + uv * vec2(${de(_e.x1-_e.x0)}, ${de(_e.z1-_e.z0)});
				for (int i = 0; i < ${_}; i++) {
					vec4 s = src[i];
					if (s.z == 0.0) continue;
					vec2 dd = p - s.xy;
					hn += s.z * exp(-dot(dd, dd) / (s.w * s.w));
				}
				gl_FragColor = vec4(simEnc(clamp(hn, -1.0, 1.0)), simEnc(h));
			}`,attributes:{position:[-1,-1,1,-1,-1,1,1,1]},primitive:"triangle strip",count:4,framebuffer:e.prop("out"),uniforms:yt,depth:{enable:!1,mask:!1},blend:{enable:!1},cull:{enable:!1},viewport:{x:0,y:0,width:ce,height:le}}),So=[],Ho=0,Lo=0;return{tex:()=>Qe[Se].color[0],drop(co,Uo,tn,W){So.push([co,Uo,Ho,tn,0,W||.035]),typeof window!="undefined"&&window.__dropLog&&window.__dropLog.push([co,Uo,Ho,tn])},advance(co,Uo){let tn=co-Ho-Lo;if(tn<0||tn>2){Ho=co,Lo=0;return}Lo+=tn;let W=0;for(;Lo>=1/60&&W<8;){Lo-=1/60,Ho+=1/60,W++;let Ee=0;for(let ze=So.length-1;ze>=0;ze--){let ue=So[ze],qe=Ho-ue[2];if(qe>1.4){So.splice(ze,1);continue}if(Ee>=_)continue;let pt=ue[3]*.05*Math.sin(qe*2*Math.PI*2.4)*Math.exp(-qe*3.2),vt=_t[Ee++];vt[0]=ue[0],vt[1]=ue[1],vt[2]=pt,vt[3]=ue[5]}for(let ze of Uo){if(Ee>=_)break;let ue=_t[Ee++];ue[0]=ze[0],ue[1]=ze[1],ue[2]=ze[2],ue[3]=ze[3]}for(;Ee<_;Ee++)_t[Ee][2]=0;Yt({prev:Qe[Se].color[0],out:Qe[1-Se]}),Se=1-Se}W===8&&(Lo=0,Ho=co)},read(){return e.read({framebuffer:Qe[Se]})}}})(),f=()=>{r.t=(performance.now()-n)/1e3,typeof window!="undefined"&&window.__studioFreeze!=null&&(r.t=window.__studioFreeze);for(let G of Bg){let Oe=wM(G,r.t),Qe=Oe.ph-Oe.Tf;Oe.inPool&&Qe>=0&&Qe<.5&&!(G.heard>r.t-1)&&(G.heard=r.t,h.drop(Oe.lx+kt[0],Oe.lz+kt[2],1.1,.04))}let ce=r.t-Q.sim.t;for((ce<0||ce>120)&&(ce=Math.min(Math.max(ce,0),120));ce>1e-6;){let G=Math.min(ce,.05);Q.sim.step(G),ce-=G}for(let G of Q.sim.events)G[2]>a&&(a=G[2],h.drop(G[0]+kt[0],G[1]+kt[2],G[3]*1.3,G[3]>=1?.07:.04));let le=[];for(let G of Q.sim.fish){let Oe=Math.min(1,Math.max(0,(G.y+.15)/.09));if(Oe<=0)continue;let Qe=.008*Oe*Math.min(1.5,G.v/.15);le.push([G.x+kt[0]+Math.cos(G.th)*.02,G.z+kt[2]+Math.sin(G.th)*.02,Qe,.045]),le.push([G.x+kt[0]-Math.cos(G.th)*.14,G.z+kt[2]-Math.sin(G.th)*.14,-Qe,.055])}h.advance(r.t,le)},u={stime:()=>r.t,simTex:()=>h.tex()};typeof location!="undefined"&&/tourdebug/.test(location.search)&&(window.__studioClock=r,window.__pondSim=h);let d=e.texture({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"}),v=[4,4],l=0,p=e({}),m=()=>p(ce=>{let le=ce.viewportWidth,G=ce.viewportHeight;d.width!==le||d.height!==G?d({copy:!0,width:le,height:G,min:"linear",mag:"linear",wrap:"clamp"}):d.subimage({copy:!0,width:le,height:G}),v[0]=le,v[1]=G,l=1}),g=El(e,"res/pond/lilypad.webp"),x=El(e,"res/pond/petals.webp"),b=Object.assign({padTex:()=>g.tex,petalTex:()=>x.tex,reflTex:()=>d,reflSize:()=>v,reflOn:()=>l},u),w=(ce,le)=>e({vert:c(Wg),frag:OM,attributes:{position:ce.pos,normal:ce.nrm,kind:ce.kind,uv:ce.uv,anchor:ce.anchor&&ce.anchor.length?ce.anchor:new Float32Array(ce.pos.length/3*4)},elements:new Uint32Array(ce.idx),count:le||ce.idx.length,uniforms:b,cull:{enable:!1},blend:o}),M=w(t),k=null;fetch(fn.file).then(ce=>{if(!ce.ok)throw new Error("Could not load "+fn.file);return ce.arrayBuffer()}).then(ce=>{let le=NM(ce),G={pos:[],nrm:[],kind:[],uv:[],anchor:null,idx:[]},Oe=fn.height,Qe=Math.cos(fn.yaw),Se=Math.sin(fn.yaw);for(let he=0;he<le.nV;he++){let At=(le.mn[0]+le.pos[he*3]/65535*le.sz[0])*Oe,_=(le.mn[1]+le.pos[he*3+1]/65535*le.sz[1])*Oe,_t=(le.mn[2]+le.pos[he*3+2]/65535*le.sz[2])*Oe;G.pos.push(fn.x+Qe*At+Se*_t+kt[0],fn.plinth+_+kt[1],fn.z-Se*At+Qe*_t+kt[2]);let yt=le.nrm[he*3]/127,Gt=le.nrm[he*3+1]/127,Yt=le.nrm[he*3+2]/127;G.nrm.push(Qe*yt+Se*Yt,Gt,-Se*yt+Qe*Yt),G.kind.push(ge.MARBLE),G.uv.push(0,0)}for(let he=0;he<le.nI;he++)G.idx.push(le.idx[he]);k=w(G)}).catch(ce=>console.error(ce));let z=El(e,"res/tree/leaves.webp"),P=AM(),R=e({vert:c(`
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
		${K0}
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
		}`,attributes:{position:P.pos,normal:P.nrm,uv:P.uv,shade:P.shade,flower:P.flower},elements:new Uint32Array(P.idx),uniforms:{tex:z.tex},cull:{enable:!1}}),U=(()=>{let ce={corner:[],start:[],par:[],misc:[],idx:[]};return Bg.forEach((le,G)=>{for(let Oe of[[-1,-1],[1,-1],[1,1],[-1,1]])ce.corner.push(Oe[0],Oe[1]),ce.start.push(le.start[0]+kt[0],le.start[1],le.start[2]+kt[2]),ce.par.push(le.period,le.offset,le.drift[0],le.drift[1]),ce.misc.push(le.speed,le.seed,le.white);ce.idx.push(G*4,G*4+1,G*4+2,G*4,G*4+2,G*4+3)}),ce})(),q=e({vert:c(`
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
		${Q0}
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
			vec2 lq = land - vec2(${de(kt[0])}, ${de(kt[2])});
			bool inPool = lq.x > ${de(Z0[0])} && lq.x < ${de(Z0[2])} && lq.y > ${de(Z0[1])} && lq.y < ${de(Z0[3])};
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
		${K0}
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
		}`,attributes:{corner:U.corner,start:U.start,par:U.par,misc:U.misc},elements:new Uint32Array(U.idx),uniforms:u,cull:{enable:!1}}),Q={sim:_M(),ready:!1};Ll=Q.sim,typeof location!="undefined"&&/tourdebug/.test(location.search)&&(window.__koi=Q.sim);let D=Object.assign({},u);Ba.forEach((ce,le)=>{D["koiA["+le+"]"]=()=>{let G=Q.sim.fish[le];return[G.x+kt[0],G.y,G.z+kt[2],G.th]},D["koiB["+le+"]"]=()=>{let G=Q.sim.fish[le];return[G.kappa,G.ph,G.amp,G.pitch]}});let V=(()=>{let le=Math.round(96*(_e.z1-_e.z0)/(_e.x1-_e.x0)),G=new Uint8Array(96*le*4),Oe=[-i0[0]/i0[1]*-Sl,-i0[2]/i0[1]*-Sl],Qe=96/(_e.x1-_e.x0),Se=le/(_e.z1-_e.z0);for(let he=0;he<le;he++)for(let At=0;At<96;At++){let _=_e.x0+(At+.5)/Qe,_t=_e.z0+(he+.5)/Se,yt=0;for(let Gt of nd){let Yt=Math.hypot(_-(Gt[0]+Oe[0]),_t-(Gt[1]+Oe[1]));yt=Math.max(yt,1-Math.min(1,Math.max(0,(Yt-Gt[2]*.82)/(Gt[2]*.35))))}G[(he*96+At)*4]=Math.round(yt*255),G[(he*96+At)*4+3]=255}return e.texture({width:96,height:le,data:G,min:"linear",mag:"linear"})})(),me=`
		uniform vec4 koiA[${Ba.length}], koiB[${Ba.length}];
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
	`,Ge=`
		uniform vec4 koiA[${Ba.length}], koiB[${Ba.length}];
		uniform sampler2D padShadow;
		const vec3 W_SUN = vec3(${de(i0[0])}, ${de(i0[1])}, ${de(i0[2])});
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
			vec2 lp = pw.xz - vec2(${de(kt[0])}, ${de(kt[2])});
			// (the picture is for the bed; nearer the surface the shadow sits nearer the pad)
			vec2 back = W_SUN.xz / W_SUN.y * (pw.y - ${de(Sl)});
			vec2 uv = (lp - back - vec2(${de(_e.x0)}, ${de(_e.z0)})) / vec2(${de(_e.x1-_e.x0)}, ${de(_e.z1-_e.z0)});
			return texture2D(padShadow, uv).r;
		}
		// the sun's share of the light under the water at pw
		vec3 underSun(vec3 pw, vec3 N, float sv, out vec3 sunPart) {
			vec3 sunC = mix(vec3(1.0, 0.88, 0.70) * 3.9, vec3(0.50, 0.64, 1.0) * 1.35, night);
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
			float e = ${de(Tl)};
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
	`,Re=(()=>{let ce=[],le=[],G=[],Oe=[],Qe=(Lo,co,Uo,tn,W)=>(ce.push(Lo+kt[0],co,Uo+kt[2]),le.push(...tn),G.push(W),ce.length/3-1),Se=(Lo,co,Uo,tn,W,Ee,ze)=>{let ue=ce.length/3;for(let qe=0;qe<=tn;qe++)for(let pt=0;pt<=W;pt++)Qe(Lo[0]+co[0]*qe/tn+Uo[0]*pt/W,Lo[1]+co[1]*qe/tn+Uo[1]*pt/W,Lo[2]+co[2]*qe/tn+Uo[2]*pt/W,Ee,ze);for(let qe=0;qe<tn;qe++)for(let pt=0;pt<W;pt++){let vt=ue+qe*(W+1)+pt;Oe.push(vt,vt+1,vt+W+2,vt,vt+W+2,vt+W+1)}},{x0:he,x1:At,z0:_,z1:_t}=_e,yt=Sl;Se([he,yt,_],[At-he,0,0],[0,0,_t-_],8,22,[0,1,0],0),Se([he,0,_],[0,0,_t-_],[0,yt,0],22,2,[1,0,0],1),Se([At,0,_],[0,0,_t-_],[0,yt,0],22,2,[-1,0,0],1),Se([he,0,_],[At-he,0,0],[0,yt,0],8,2,[0,0,1],1),Se([he,0,_t],[At-he,0,0],[0,yt,0],8,2,[0,0,-1],1);let Gt=fn.x-.42,Yt=fn.x+.42,So=fn.z-.42,Ho=fn.z+.42;return Se([Gt,0,So],[0,0,Ho-So],[0,yt,0],2,2,[-1,0,0],1),Se([Yt,0,So],[0,0,Ho-So],[0,yt,0],2,2,[1,0,0],1),Se([Gt,0,So],[Yt-Gt,0,0],[0,yt,0],2,2,[0,0,-1],1),Se([Gt,0,Ho],[Yt-Gt,0,0],[0,yt,0],2,2,[0,0,1],1),{pos:ce,nrm:le,kd:G,idx:Oe}})(),be=El(e,"res/pond/gravel.jpg",{wrap:"repeat"}),re=Object.assign({padShadow:V,gravel:()=>be.tex,reflTex:()=>d,reflSize:()=>v,reflOn:()=>l},D),Ue=e({vert:c(`
		precision highp float;
		uniform mat4 proj, view;
		attribute vec3 position, normal;
		attribute float kd;
		varying vec3 v_pos, v_nrm, v_eye;
		varying float v_kd;
		${Q0}
		${me}
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
		${Q0}
		${K0}
		${Ge}
		float klen(int i) {
			${Ba.map((ce,le)=>`if (i == ${le}) return ${de(ce.len)};`).join(" ")}
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
				base = mix(base, vec3(0.10, 0.13, 0.07), smoothstep(-0.05, ${de(Sl)}, v_pos.y) * 0.75);
			}
			vec3 spec; float sv;
			vec3 light = studioLight(vec3(v_pos.x - W_SUN.x / W_SUN.y * v_pos.y, 0.02, v_pos.z - W_SUN.z / W_SUN.y * v_pos.y), N, V, 0.1, spec, sv);
			vec3 sunPart;
			vec3 lit = underSun(v_pos, N, sv, sunPart);
			// the koi's shadows, softer the higher they swim above the bed
			float sh = 0.0;
			for (int i = 0; i < ${Ba.length}; i++) {
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
		}`,attributes:{position:Re.pos,normal:Re.nrm,kd:Re.kd},elements:new Uint16Array(Re.idx),uniforms:re,cull:{enable:!1},depth:{enable:!0,mask:!1,func:"less"},blend:o}),xt=El(e,"res/koi.webp"),at=null,Ot=null;fetch("res/koi.bin").then(ce=>{if(!ce.ok)throw new Error("Could not load res/koi.bin");return ce.arrayBuffer()}).then(ce=>{let le=new DataView(ce),G=le.getUint32(4,!0),Oe=le.getUint32(8,!0),Qe=le.getFloat32(12,!0),Se=16,he=new Uint16Array(ce,Se,G);Se+=G*2;let At=new Int16Array(ce,Se,G*2);Se+=G*4;let _=new Uint16Array(ce,Se,G*2);Se+=G*4;let _t=new Uint16Array(ce,Se,Oe);Se+=Oe*2;let yt=new Int8Array(ce,Se,G*3);Se+=G*3;let Gt=new Uint8Array(ce,Se,G*2),Yt=Ba.length,So=new Float32Array(G*3*Yt),Ho=new Float32Array(G*3*Yt),Lo=new Float32Array(G*2*Yt),co=new Float32Array(G*2*Yt),Uo=new Float32Array(G*4*Yt);Ba.forEach((Ee,ze)=>{for(let ue=0;ue<G;ue++){let qe=ze*G+ue;So[qe*3]=he[ue]/65535*1.2,So[qe*3+1]=At[ue*2]/32767*Qe,So[qe*3+2]=At[ue*2+1]/32767*Qe,Ho[qe*3]=yt[ue*3]/127,Ho[qe*3+1]=yt[ue*3+1]/127,Ho[qe*3+2]=yt[ue*3+2]/127,Lo[qe*2]=_[ue*2]/65535,Lo[qe*2+1]=_[ue*2+1]/65535,co[qe*2]=Gt[ue*2]/255,co[qe*2+1]=Gt[ue*2+1]/255,Uo[qe*4]=Ee.len,Uo[qe*4+1]=Ee.kind,Uo[qe*4+2]=ze,Uo[qe*4+3]=0}});let tn=[],W=[];for(let Ee=0;Ee<Yt;Ee++)for(let ze=0;ze<Oe;ze+=3){let ue=_t[ze],qe=_t[ze+1],pt=_t[ze+2];(Math.max(Gt[ue*2],Gt[qe*2],Gt[pt*2])>140?W:tn).push(ue+Ee*G,qe+Ee*G,pt+Ee*G)}Ot={body:e.elements({data:new Uint32Array(tn),type:"uint32"}),fins:e.elements({data:new Uint32Array(W),type:"uint32"})},at=e({vert:c(`
				precision highp float;
				uniform mat4 proj, view;
				attribute vec3 loc, nrm;
				attribute vec2 uv, fin;
				attribute vec4 km;
				varying vec3 v_pos, v_nrm, v_eye;
				varying vec2 v_uv;
				varying float v_kind, v_fin, v_depth, v_seed, v_u;
				${Q0}
				${me}
				void main() {
					float len = km.x;
					int fi = int(km.z + 0.5);
					vec4 A = koiA[0], B = koiB[0];
					for (int i = 1; i < ${Ba.length}; i++) if (i == fi) { A = koiA[i]; B = koiB[i]; }
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
				${Q0}
				${K0}
				${Ge}
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
				}`,attributes:{loc:So,nrm:Ho,uv:Lo,fin:co,km:Uo},elements:e.prop("els"),uniforms:Object.assign({koiTex:()=>xt.tex,padShadow:V,reflTex:()=>d,reflSize:()=>v,reflOn:()=>l},D),cull:{enable:!1},colorMask:e.prop("color"),depth:{enable:!0,mask:e.prop("write"),func:e.prop("func")},blend:o}),Q.ready=!0}).catch(ce=>console.error(ce));let Et=()=>{at&&(at({els:Ot.body,color:[!1,!1,!1,!1],write:!0,func:"less"}),at({els:Ot.body,color:[!0,!0,!0,!0],write:!1,func:"lequal"}),at({els:Ot.fins,color:[!0,!0,!0,!0],write:!1,func:"less"}))},no=(()=>{let ce={cp:[],ci:[],idx:[]};for(let le=0;le<Al;le++){let G=ce.cp.length/3,Oe=5,Qe=7;for(let Se=0;Se<=Oe;Se++)for(let he=0;he<Qe;he++){let At=Se/Oe*Math.PI,_=he/Qe*Math.PI*2,_t=1+.35*Math.sin(_*3+le*1.7)*Math.sin(At*2+le);ce.cp.push(Math.sin(At)*Math.cos(_)*_t,Math.cos(At)*.6,Math.sin(At)*Math.sin(_)*_t*(.8+.4*(le*.37%1))),ce.ci.push(le)}for(let Se=0;Se<Oe;Se++)for(let he=0;he<Qe;he++){let At=G+Se*Qe+he,_=G+Se*Qe+(he+1)%Qe,_t=G+(Se+1)*Qe+he,yt=G+(Se+1)*Qe+(he+1)%Qe;ce.idx.push(At,_,yt,At,yt,_t)}}return ce})(),bo=Object.assign({},u);for(let ce=0;ce<Al;ce++)bo["crumbs["+ce+"]"]=()=>{let le=Q.sim.crumbs[ce],G=Q.sim.t,Oe=le.alive?Math.min(1,Math.max(0,(G-le.born)/.25)):0;return[le.x+kt[0],le.z+kt[2],Oe,le.seed]};let Yo=e({vert:c(`
		precision highp float;
		uniform mat4 proj, view;
		uniform vec4 crumbs[${Al}];
		attribute vec3 cp;
		attribute float ci;
		varying vec3 v_pos, v_nrm, v_eye;
		${Q0}
		void main() {
			int k = int(ci + 0.5);
			vec4 c = crumbs[0];
			for (int i = 1; i < ${Al}; i++) if (i == k) c = crumbs[i];
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
		${K0}
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
		}`,attributes:{cp:no.cp,ci:no.ci},elements:new Uint32Array(no.idx),uniforms:bo,cull:{enable:!1}}),tt=zM(),zt=e({vert:c(Wg),frag:`
		precision highp float;
		uniform float night, time;
		varying vec3 v_pos, v_nrm, v_eye;
		varying float v_kind;
		varying vec2 v_uv;
		${K0}
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			vec3 N = normalize(v_nrm);
			if (dot(N, V) < 0.0) N = -N;
			float F = 0.04 + 0.96 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
			vec3 p = v_pos - vec3(${de(kt[0])}, ${de(kt[1])}, ${de(kt[2])});
			float dust = fbm3(p * vec3(1.5, 3.0, 1.5)) * (v_kind > 0.5 ? 1.0 : 0.6);
			// streaks where old rain has run down the roof
			float streak = v_kind > 0.5 ? smoothstep(0.55, 0.9, vnoise3(vec3(p.z * 9.0, p.x * 0.6, 0.0))) * 0.5 : 0.0;
			vec3 c = mix(vec3(0.85, 0.80, 0.72), vec3(0.12, 0.13, 0.17), night) * (dust * 0.5 + streak);
			float a = clamp(0.05 + dust * 0.16 + streak * 0.2 + F * 0.4, 0.0, 0.6);
			vec3 col = mix(c, studioSky(reflect(-V, N)), F / max(a, 0.01) * 0.4);
			// the roof's leaded pattern: dark cames, frosted rondels lit
			// from behind by the sky
			if (v_kind > 0.5) {
				float ux = p.x < ${de(Ve/2)} ? p.x : ${de(Ve)} - p.x;
				vec2 pq = vec2(ux - ${de(Vo.purlin)} * floor(ux / ${de(Vo.purlin)}) - ${de(Vo.purlin/2)}, p.z - ${de(Vo.rafter)} * floor(p.z / ${de(Vo.rafter)}) - ${de(Vo.rafter/2)});
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
		}`,attributes:{position:tt.pos,normal:tt.nrm,kind:tt.kind,uv:tt.uv,anchor:tt.anchor},uniforms:u,elements:new Uint32Array(tt.idx),cull:{enable:!1},depth:{mask:!1},blend:o}),Ft=(()=>{let ce={pos:[],idx:[]},le=300,G=24,Oe=12;for(let Qe=0;Qe<=Oe;Qe++){let Se=-.25*nn+Qe/Oe*.75*nn;for(let he=0;he<=G;he++){let At=he/G*2*nn;ce.pos.push(kt[0]+Ve/2+le*Math.cos(Se)*Math.cos(At),le*Math.sin(Se),kt[2]+vo/2+le*Math.cos(Se)*Math.sin(At))}}for(let Qe=0;Qe<Oe;Qe++)for(let Se=0;Se<G;Se++){let he=Qe*(G+1)+Se,At=he+1,_=he+G+2,_t=he+G+1;ce.idx.push(he,At,_,he,_,_t)}return ce})(),ro=e({vert:c(`
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
		${K0}
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
		void main() {`),attributes:{position:Ft.pos},elements:new Uint32Array(Ft.idx),cull:{enable:!1}});function wo(ce){ce&&ce.reflected||(m(),f()),ro(),M(),ce&&ce.reflected||(Ue(),Et(),Yo()),k&&k(),R(),q(),ce&&ce.reflected||zt()}return wo};var Ll=null;function CM(e,t){if(t[1]>=-1e-4)return null;let o=-e[1]/t[1],n=e[0]+t[0]*o-kt[0],r=e[2]+t[2]*o-kt[2];return n<_e.x0||n>_e.x1||r<_e.z0||r>_e.z1||Math.abs(n-fn.x)<.45&&Math.abs(r-fn.z)<.45?null:[n+kt[0],r+kt[2]]}function PM(e,t){Ll&&Ll.drop(e-kt[0],t-kt[2])}function IM(){return!!(Ll&&Ll.feed.on)}var Vg=[{from:[12.6,1.65,.9],to:[11.4,1.75,2.6],at:[6.2,2.6,15.5],fov:60},{from:[8,1.45,1.4],to:[8,1.25,4.4],at:[8,1.7,16],fov:50},{from:[7.2,1.6,3.8],to:[8.3,1.55,5.2],at:[13,1.4,10.4],fov:52},{from:[7.1,3.9,6.4],to:[8.6,3.7,7.6],at:[8,-.2,10.6],fov:50,pond:!0},{from:[6.2,1.45,10.4],to:[7,1.75,11.6],at:[8,2.3,15.2],fov:44},{from:[2.6,1.5,2.6],to:[3.6,1.6,4.4],at:[7,6.8,12],fov:62}],rc=11;function $M(e){let t=Vg.length,o=Math.floor(e/rc)%t,n=e%rc/rc,r=n*n*(3-2*n),a=Vg[o],s=a.from.map((c,h)=>c+(a.to[h]-c)*r),i=Math.max(0,1-Math.min(n*rc,(1-n)*rc)/.7);return{eye:od(s),target:od(a.at),fov:a.fov,roll:0,fade:i,pond:!!a.pond&&i<.05,shot:Math.floor(e/rc)}}ja.exports.previewCam=$M;ja.exports.poolHit=CM;ja.exports.feedAt=PM;ja.exports.feeding=IM;ja.exports.sunGLSL=Xg;ja.exports.O=kt;ja.exports.SIZE={W:Ve,L:vo,H:go,RIDGE:fa};ja.exports.BOX=[kt[0]-.8,0,kt[2]-.8,kt[0]+Ve+.8,fa+.5,kt[2]+vo+.8];ja.exports.AIR_BOX=[kt[0],0,kt[2],kt[0]+Ve,fa,kt[2]+vo]});var Eh=ke((iz,r3)=>{"use strict";var{A:gr}=Ea(),{C:qn}=br(),{DOOR:cc}=H0(),ir=X0(),lc=Us(),t3=qn.hallEnd+.35,o3={arch:[13.6,0,gr.zc-gr.arch.r-.3,14.4,gr.arch.spring+gr.arch.r+.3,gr.zc+gr.arch.r+.3],mouth:[13.3,0,qn.z0-.3,14.3,8.2,qn.z1+.3],stair:[-.5,0,ir.SURR.z0-.2,.5,ir.SURR.top+.3,ir.SURR.z1+.2],door:[cc.x0-.4,0,-.5,cc.x1+.4,cc.top+.4,.5],windows:[15.6,.4,qn.z1-.2,36.9,6.4,qn.z1+.9],farDoor:[qn.x1-.2,0,qn.zc-cc.r-.4,qn.x1+.9,cc.top+.4,qn.zc+cc.r+.4]},A0={court:[gr.x0-.4,0,gr.z0-.3,gr.x1+.3,gr.domeTop+.5,gr.z1+.3],stair:[ir.C.x-ir.R-2.6,0,ir.C.z-ir.R-1.5,.5,15.6,ir.C.z+ir.R+1.5],street:[-60,-1,-140,74,60,.6],garden:[10,-1,qn.z1,46,60,qn.z1+110],florence:[qn.x1,-1,qn.zc-30,qn.x1+80,60,qn.zc+30],studio:lc.BOX},FM=[[0,0,0,14,0,t3],[13.6,0,qn.z0,qn.x1+.4,0,qn.z1],[gr.x0-.4,0,gr.z0,gr.x1,0,gr.z1],[ir.C.x-ir.R-2.6,0,ir.C.z-ir.R,.4,0,ir.C.z+ir.R],[lc.BOX[0],0,lc.BOX[2],lc.BOX[3],0,lc.BOX[5]]],qM={hall:{court:["arch"],stair:["stair"],street:["door"],garden:["mouth","windows"],florence:["mouth","farDoor"]},wing:{court:["mouth","arch"],stair:["mouth","stair"],street:["mouth","door"],garden:["windows"],florence:["farDoor"]},court:{stair:["arch","stair"],street:["arch","door"],garden:["arch","mouth","windows"],florence:["arch","mouth","farDoor"]},stair:{court:["stair","arch"],street:["stair","door"],garden:["stair","mouth","windows"],florence:["stair","mouth","farDoor"]}},Ol=new Float64Array(24),Wa=[7,2,2],n3=0,z0="out",Sh=!0;try{/[?&]nocull\b/.test(location.search)&&(Sh=!1)}catch(e){}var Nl={court:!0,stair:!0,street:!0,garden:!0,florence:!0,studio:!1},Rl={court:!0,stair:!0,street:!0,garden:!0,florence:!0,studio:!1},Jg=!0;function DM(e){let t=i=>[e[i],e[4+i],e[8+i],e[12+i]],o=t(0),n=t(1),r=t(2),a=t(3),s=(i,c,h,f)=>{for(let u=0;u<4;u++)Ol[i*4+u]=c[u]+h*f[u]};s(0,a,1,o),s(1,a,-1,o),s(2,a,1,n),s(3,a,-1,n),s(4,a,1,r),s(5,a,-1,r)}function J0(e,t){if(!Sh)return!0;let o=t?-e[4]:e[1],n=t?-e[1]:e[4];for(let r=0;r<6;r++){let a=Ol[r*4],s=Ol[r*4+1],i=Ol[r*4+2],c=Ol[r*4+3],h=a>0?e[3]:e[0],f=s>0?n:o,u=i>0?e[5]:e[2];if(a*h+s*f+i*u+c<0)return!1}return!0}var rd=(e,t)=>Wa[0]>e[0]-t&&Wa[0]<e[3]+t&&Wa[2]>e[2]-t&&Wa[2]<e[5]+t;function GM(e){if(rd(e,.6))return null;let t=1/0,o=-1/0;for(let n=0;n<4;n++){let r=(n&1?e[3]:e[0])-Wa[0],a=(n&2?e[5]:e[2])-Wa[2],s=Math.atan2(r,a)-n3;s-=Math.round(s/(2*Math.PI))*2*Math.PI,t=Math.min(t,s),o=Math.max(o,s)}return o-t>Math.PI?null:[t,o]}function e3(e,t,o){let n=-Math.PI,r=Math.PI,a=s=>{let i=GM(s);return i?(n=Math.max(n,i[0]-.03),r=Math.min(r,i[1]+.03),n<=r):!0};for(let s of e){let i=o3[s];if(!rd(i,.6)&&(!J0(i,o)||!a(i)))return!1}return J0(t,o)&&a(t)}function HM(){let e=Wa[0],t=Wa[2],o=lc.BOX;return e>o[0]&&e<o[3]&&t>o[2]&&t<o[5]?"studio":e<0&&t>ir.C.z-ir.R-1.5&&e>ir.C.x-ir.R-2.6?"stair":e>14.1&&t>gr.z0-.3&&t<gr.z1+.3&&e<gr.x1+.3?"court":e>13.9&&t>qn.z0-.4&&t<qn.z1+.1&&e<qn.x1+.3?"wing":e>=0&&e<=14.1&&t>.3&&t<t3?"hall":"out"}var UM={PORTAL:o3,ROOM:A0,update(e,t,o){let n=new Array(16);for(let r=0;r<4;r++)for(let a=0;a<4;a++){let s=0;for(let i=0;i<4;i++)s+=t[i*4+a]*e[r*4+i];n[r*4+a]=s}DM(n),Wa[0]=o[0],Wa[1]=o[1],Wa[2]=o[2],n3=Math.atan2(-e[2],-e[10]),z0=HM();for(let r in A0){if(r==="studio"||z0==="studio"){Nl[r]=Rl[r]=r==="studio"&&z0==="studio";continue}if(!Sh||z0==="out"||z0===r||rd(A0[r],.3))Nl[r]=J0(A0[r],!1)||z0===r,Rl[r]=J0(A0[r],!0)||z0===r;else{let a=qM[z0][r];Nl[r]=a?e3(a,A0[r],!1):J0(A0[r],!1),Rl[r]=a?e3(a,A0[r],!0):J0(A0[r],!0)}}Jg=!Sh||FM.some(r=>J0(r,!1))},get zone(){return z0},room(e,t){return t?Rl[e]:Nl[e]},box(e,t,o){return o&&!(t?Rl[o]:Nl[o])?!1:J0(e,t)},get floor(){return Jg}};r3.exports=UM});var s3=ke((cz,a3)=>{"use strict";var BM=ju(),jM=Eh();function WM(e){let t=new DataView(e);if(String.fromCharCode(t.getUint8(0),t.getUint8(1),t.getUint8(2),t.getUint8(3))!=="STAT")throw new Error("Not a statue file");let n=t.getUint32(4,!0),r=t.getUint32(8,!0),a=[],s=[];for(let u=0;u<3;u++)a.push(t.getFloat32(12+u*4,!0)),s.push(t.getFloat32(24+u*4,!0));let i=36,c=new Uint16Array(e,i,n*3);i+=n*6;let h=new Uint16Array(e,i,r);i+=r*2;let f=new Int8Array(e,i,n*3);return{nV:n,nI:r,mn:a,sz:s,pos:c,idx:h,nrm:f}}a3.exports=(e,t)=>{let o=[],n=[],r=[],a=[],s=null,i=t.statues.length,c=[],h=(u,d)=>{let v=o.length/3,l=d.height*.75,p=d.base!==void 0?d.base:t.pedestalTop;c.push({offset:a.length,count:u.nI,box:[d.x-l,p-.1,d.z-l,d.x+l,p+d.height+.2,d.z+l]});let m=d.height,g=Math.cos(d.yaw),x=Math.sin(d.yaw),b=d.base!==void 0?d.base:t.pedestalTop;for(let w=0;w<u.nV;w++){let M=(u.mn[0]+u.pos[w*3]/65535*u.sz[0])*m,k=(u.mn[1]+u.pos[w*3+1]/65535*u.sz[1])*m,z=(u.mn[2]+u.pos[w*3+2]/65535*u.sz[2])*m;o.push(d.x+g*M+x*z,b+k,d.z-x*M+g*z);let P=u.nrm[w*3]/127,R=u.nrm[w*3+1]/127,U=u.nrm[w*3+2]/127;n.push(g*P+x*U,R,-x*P+g*U),r.push(d.mat||1,0,0)}for(let w=0;w<u.nI;w++)a.push(v+u.idx[w])},f=()=>{a.length!==0&&(s=BM(e,{position:o,normal:n,mat:r,elements:a,lights:t.lights,get viewer(){return t.viewer}},!1,!0))};return t.statues.forEach(u=>{fetch("res/"+u.file).then(d=>{if(!d.ok)throw new Error("Could not load "+u.file);return d.arrayBuffer()}).then(d=>h(WM(d),u)).catch(d=>console.error(d)).then(()=>{--i===0&&f()})}),function(u){if(!s)return;let d=!!(u&&u.reflected),v=c.filter(l=>jM.box(l.box,d));v.length&&s(v)}}});var g3=ke((lz,sd)=>{"use strict";var VM=Ps(),Yn=1.29032,js=[9.2968,2,5.9],XM=[[.767398,.00185,-.10827],[.010515,.769952,.087681],[-.107774,.08829,-.762374]],Ah=2147.64,i3=725,c3=1288,l3=1450,f3=2576,Jr=-5.197,Vs=3.865,es=10.135,Xs=-14.679,Cl=-30.229,Pl=7.232,h3=-45.713,fc=17.1*Yn,Ws=16.6*Yn,Il=16.6*Yn,u3=[6.9,17.1],zh=[2.95,16.6],YM=1.6,KM=0,QM=1,d3=2,ad=3,p3=4,v3=5,ZM=6;function JM(){let e=[],t=[],o=[],n=[],r=VM.createBuilder(e,t,o,n),a=(h,f,u,d,v,l,p=1,m=1)=>{let g=[];for(let x=0;x<=p;x++){let b=[];for(let w=0;w<=m;w++){let M=[h[0]+f[0]*x/p+u[0]*w/m,h[1]+f[1]*x/p+u[1]*w/m,h[2]+f[2]*x/p+u[2]*w/m],k=l(M);b.push(r.vert(M,d,[v,k[0],k[1]]))}g.push(b)}for(let x=0;x<p;x++)for(let b=0;b<m;b++)r.tri(g[x][b],g[x+1][b],g[x][b+1]),r.tri(g[x+1][b],g[x+1][b+1],g[x][b+1])},s=h=>f=>[(js[2]-f[2])/Yn-h,f[1]/Yn];a([-60,0,-.36],[130,0,0],[0,0,-140],[0,1,0],KM,h=>[h[0]/Yn,h[2]/Yn],13,14),a([Vs,0,Jr],[0,0,Xs-Jr],[0,fc,0],[1,0,0],QM,s(8.6),6,6),a([-40,0,Jr],[Vs+40,0,0],[0,fc,0],[0,0,1],d3,h=>[(Vs-h[0])/Yn,h[1]/Yn],8,4),a([-40,0,-.36],[0,0,Jr+.36],[0,fc,0],[1,0,0],d3,h=>[-h[2]/Yn,h[1]/Yn]),a([es,0,-80],[0,0,Jr+80],[0,Ws,0],[-1,0,0],p3,s(8.6),12,6),a([es,0,Jr],[60,0,0],[0,Ws,0],[0,0,1],v3,h=>[(h[0]-es)/Yn,h[1]/Yn],8,4),a([70,0,Jr],[0,0,-.36-Jr],[0,Ws,0],[-1,0,0],v3,h=>[-h[2]/Yn,h[1]/Yn]);let i=h=>[(h[0]-js[0])/Yn+4.18,h[1]/Yn];a([-20,0,Cl],[Pl+20,0,0],[0,Il,0],[0,0,1],ad,i,8,6),a([Pl,0,Cl],[0,0,h3-Cl],[0,Il,0],[1,0,0],ad,s(28),4,4),a([Pl,0,h3],[es-Pl,0,0],[0,Ws,0],[0,0,1],p3,h=>[(h[0]-js[0])/Yn,h[1]/Yn],2,4),a([-20,0,Xs],[0,0,Cl-Xs],[0,Il,0],[1,0,0],ad,s(16),4,4);let c=(h,f,u,d)=>a(h,f,u,d,ZM,()=>[0,0],4,4);return c([-300,-20,-300],[600,0,0],[0,320,0],[0,0,1]),c([-300,300,-300],[600,0,0],[0,0,300],[0,-1,0]),c([-300,-20,0],[0,0,-300],[0,320,0],[1,0,0]),c([300,-20,-300],[0,0,300],[0,320,0],[-1,0,0]),{position:e,normal:t,elements:o,attr:n}}function Bs(e,t,o,n){let r=e.texture({data:[[n]],...o,min:"linear",mag:"linear"});return fetch(t).then(a=>{if(!a.ok)throw new Error("Could not load "+t);return a.blob()}).then(a=>createImageBitmap(a)).then(a=>{r({data:a,...o,min:"mipmap",mipmap:"nice",mag:"linear"})}).catch(a=>console.error(a)),r}var Va=e=>"vec3("+e.map(t=>t.toFixed(4)).join(", ")+")",e8=[[[-.35,0,-.35],[14.35,9.2,50]],[[-40,0,Xs],[Vs,fc,Jr]],[[es,0,-80],[70,Ws,Jr]],[[-20,0,-80],[Pl,Il,Cl]],[[-40,0,-80],[-20,Il,Xs]]],t8=e8.map(e=>`if (hitBox(ro, rd, ${Va(e[0])}, ${Va(e[1])}, 1e4) ) return 0.0;`).join(`
		`),m3="mat3("+[0,1,2].map(e=>[0,1,2].map(t=>XM[t][e].toFixed(6)).join(", ")).join(", ")+")",o8=`
precision highp float;

uniform sampler2D photo, photoNight, photoMask, pinkTex, yellowTex, creamTex, cobbleTex;
uniform float time;
uniform float night;   // 0 by day, 1 at night

varying vec3 v_pos;
varying vec3 v_normal;
varying vec3 v_attr;
varying vec3 v_eye;

const vec3 SUN = ${Va([-.25,.4,.88].map(e=>e/Math.hypot(-.25,.4,.88)))};

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
	${t8}
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
	vec3 ro = ${Va(js)};
	vec3 rd = p - ro;
	if (hitBox(ro, rd, ${Va([-40,0,Xs])}, ${Va([Vs-.02,fc,Jr])}, 0.995)) return false;
	if (hitBox(ro, rd, ${Va([es+.02,0,-80])}, ${Va([70,Ws,Jr])}, 0.995)) return false;
	return true;
}

// is this point sky in the photo? (only meaningful inside the photo)
bool photoSky(vec3 p) {
	vec3 pc = ${m3} * (p - ${Va(js)});
	if (pc.z < 0.2) return false;
	vec2 uv = vec2(
		(${i3.toFixed(2)} + ${Ah.toFixed(3)} * pc.x / pc.z) / ${l3.toFixed(1)},
		(${c3.toFixed(2)} - ${Ah.toFixed(3)} * pc.y / pc.z) / ${f3.toFixed(1)}
	);
	if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return false;
	return texture2D(photoMask, uv).r < 0.5;
}

// photo colour and how much to trust it (0..1)
vec4 photoAt(vec3 p, vec3 n, vec3 eye) {
	vec3 pc = ${m3} * (p - ${Va(js)});
	if (pc.z < 0.2) return vec4(0.0);
	vec2 uv = vec2(
		(${i3.toFixed(2)} + ${Ah.toFixed(3)} * pc.x / pc.z) / ${l3.toFixed(1)},
		(${c3.toFixed(2)} - ${Ah.toFixed(3)} * pc.y / pc.z) / ${f3.toFixed(1)}
	);
	vec2 e = min(uv, 1.0 - uv);
	float w = smoothstep(0.002, 0.02, min(e.x, e.y));
	if (w <= 0.0) return vec4(0.0);
	w *= smoothstep(0.35, 0.75, texture2D(photoMask, uv).r);
	if (w <= 0.0) return vec4(0.0);
	if (!photoSees(p)) return vec4(0.0);
	// if we see this surface much more square-on than the photo did,
	// the photo would look smeared: hand over to the painted facade
	float camCos = abs(dot(normalize(p - ${Va(js)}), n));
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
		base = texture2D(cobbleTex, fuv / ${YM.toFixed(2)}).rgb;
	} else if (kind < 2.5) {
		base = texture2D(pinkTex, vec2(fuv.x / ${u3[0].toFixed(2)}, 1.0 - fuv.y / ${u3[1].toFixed(2)})).rgb;
	} else if (kind < 3.5) {
		base = texture2D(yellowTex, vec2(fuv.x / ${zh[0].toFixed(2)}, 1.0 - fuv.y / ${zh[1].toFixed(2)})).rgb;
	} else {
		base = texture2D(creamTex, vec2(fuv.x / ${zh[0].toFixed(2)}, 1.0 - fuv.y / ${zh[1].toFixed(2)})).rgb;
	}

	// ---------- the photograph, where it can be trusted ----------
	bool projectable = kind < 0.5 || (kind > 0.5 && kind < 1.5) || (kind > 2.5 && kind < 4.5);
	if (kind < 0.5) {
		// the photo only shows ground inside the alley, or beyond its corners
		bool inAlley = v_pos.x > ${(Vs-.05).toFixed(3)} && v_pos.x < ${(es+.05).toFixed(3)};
		projectable = inAlley || v_pos.z < ${Xs.toFixed(3)};
		projectable = projectable && v_pos.z < ${(Jr+4.5).toFixed(3)};
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
}`,n8=`
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
}`,r8=ar();sd.exports=e=>{let t=JM(),o={wrapS:"clamp",wrapT:"clamp",flipY:!1},n={wrapS:"mirror",wrapT:"clamp",flipY:!1},r={wrapS:"repeat",wrapT:"repeat",flipY:!1},a=Bs(e,"res/street/photo.jpg",o,[190,160,120]),s=Bs(e,"res/street/photo_night.jpg",o,[12,14,22]),i=Bs(e,"res/street/photo_mask.png",o,[255,255,255]),c=Bs(e,"res/street/facade_pink.jpg",n,[200,150,135]),h=Bs(e,"res/street/facade_yellow.jpg",n,[225,180,95]),f=Bs(e,"res/street/facade_cream.jpg",n,[215,200,175]),u=Bs(e,"res/street/cobbles.jpg",r,[95,95,95]),d=Date.now(),v=e({frag:o8,vert:n8,attributes:{position:t.position,normal:t.normal,attr:t.attr},elements:new Uint32Array(t.elements),uniforms:{photo:a,photoMask:i,pinkTex:c,yellowTex:h,creamTex:f,cobbleTex:u,photoNight:s,night:()=>r8.night,time:()=>(Date.now()-d)/1e3}});return function(){v()}};sd.exports.layout={MOUTH_Z:Jr,PINK_X:Vs,RIGHT_X:es,PINK_H:fc,CREAM_H:Ws,S:Yn}});var b3=ke((fz,y3)=>{"use strict";var a8=ar().GLSL,{glassPanes:s8}=H0(),x3=br();function i8(){let e=[],t=[],o=(n,r)=>{for(let a of n)e.push(a),t.push(r)};return o(s8(),[0,0,1]),o(x3.windowGlass(),[0,0,1]),o(x3.farDoorGlass(),[1,0,0]),{position:e,normal:t}}y3.exports=e=>{let t=i8(),o=e({frag:`
		precision highp float;
		${a8}
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
		}`,attributes:{position:t.position,normal:t.normal},count:t.position.length,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o()}}});var $3=ke((hz,hd)=>{"use strict";var E3=ar().GLSL,c8=Ps(),id=Ma(),{wallWithHoles:l8,C:ns}=br(),mt=.28,te={westBack:14.4,westCol:15-mt,eastCol:37.4+mt,eastBack:41.8,south:ns.z1+.7,northCol:ns.z1+.7+16,northBack:ns.z1+.7+19,cx:(15+37.4)/2,cz:(ns.z1+.7+ns.z1+.7+16-mt)/2},Do={x0:te.westCol+mt,x1:te.eastCol-mt,z0:te.south,z1:te.northCol-mt},Er=3.3,ql=.92,rs=5.6,w3=6,Ta=11.9,os=9.6,mo={x0:te.cx-2.9,x1:te.cx+2.9,top:14.4},Ph=7,A3=4,ld=(te.eastCol-te.westCol)/Ph,f8=(te.northCol-te.south)/A3,z3=3,Gl=.26,Zs=1.4,Ks=1.1,Lh=3,c0=(()=>{let e=[.3,.82,-.49],t=Math.hypot(...e);return e.map(o=>o/t)})(),rt={GROUND:0,BRICK:1,STONE:2,MARBLE:3,HEDGE:4,POT:5,ROOF:6,SHUTTER:7,PANE:8,PLASTER:9,BARK:10,IRON:11,SKY:12,LEAD:13,FARBRICK:14,DARK:15,SOIL:16},l0=[],T3=(e,t,o)=>[te.cx+e,t,te.cz+o],Nh=T3(-5.9,0,3.4),as=.85,ts={c:[Nh[0],4.6*as+.5,Nh[2]],r:[5*as,3.6*as,4.5*as]},L3=[{d:[0,4.4,0],r:[3.9,2.6,3.6],n:230},{d:[-2.7,4,-1.2],r:[2.6,2.1,2.4],n:105},{d:[2.7,4.5,-1.6],r:[2.5,2.2,2.3],n:105},{d:[.8,6.9,.8],r:[2.6,2,2.5],n:105},{d:[-1.6,6.1,2],r:[2.2,1.9,2],n:80},{d:[2.3,3.4,1.8],r:[2,1.5,1.9],n:60}].map(e=>({c:[Nh[0]+e.d[0]*as,e.d[1]*as+.5,Nh[2]+e.d[2]*as],r:e.r.map(t=>t*as),n:e.n}));for(let e of L3)l0.push({...e,cell:0,leaf:[.5,.7,.46],bloom:[1,1,1],size:[.95,1.35],magnolia:1,shadow:1});var h8=[3.6,6.3,9];for(let e of h8){let t=8.6+e%1.7*.6;l0.push({c:T3(e,t/2+.5,5.2),r:[.9,t/2,.9],cell:1,leaf:[.5,.64,.5],bloom:[1,1,1],n:180,size:[.72,.98],spindle:1,shadow:1})}var u8=[{d:[-8.4,-4],bloom:[1,.62,.78]},{d:[-3.6,-4.6],bloom:[1,.98,.94]},{d:[3.8,-4.3],bloom:[1,.98,.94]},{d:[8.5,-4],bloom:[1,.58,.72]}].map(e=>({x:te.cx+e.d[0],z:te.cz+e.d[1],bloom:e.bloom}));for(let e of u8)l0.push({c:[e.x,.95,e.z],r:[1.25,.95,1.1],cell:3,leaf:[.7,.86,.58],bloom:e.bloom,n:80,size:[.55,.8],shadow:1});var fd=[45,135,225,315].map(e=>{let t=e*Math.PI/180;return[te.cx+Math.cos(t)*2.3,te.cz+Math.sin(t)*2.3]});for(let[e,t]of fd)l0.push({c:[e,1.85,t],r:[.62,.55,.62],cell:3,leaf:[.78,.95,.55],bloom:[1.25,1,.25],n:36,size:[.32,.42],shadow:1});var N3=[];{let e=(o,n,r,a,s,i)=>{let c=Math.hypot(r-o,a-n),h=Math.floor(c/.9);for(let f=0;f<=h;f++){let u=f/h,d=o+(r-o)*u,v=n+(a-n)*u;s!==void 0&&Math.abs((r!==o?d:v)-s)<i||N3.push([d,v])}};e(Do.x0+.45,Do.z0+1.2,Do.x0+.45,Do.z1-.45,te.cz,1),e(Do.x1-.45,Do.z0+1.2,Do.x1-.45,Do.z1-.45,te.cz,1),e(Do.x0+.45,Do.z1-.45,Do.x1-.45,Do.z1-.45,te.cx,1.9)}var d8=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],Rh=e=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]};function uc(e,t,o,n,r,a,s){let i=e.vert(t,a,s),c=e.vert(o,a,s),h=e.vert(n,a,s),f=e.vert(r,a,s);e.tri(i,c,h),e.tri(i,h,f)}function Kn(e,t,o,n,r,a,s,i){e.box(Math.min(t,r),Math.min(o,a),Math.min(n,s),Math.max(t,r),Math.max(o,a),Math.max(n,s),[i,0,0])}function p8(e,t,o){return{vert:(n,r,a)=>e.vert(t(n),o(r),a),tri:e.tri}}var v8={north:[e=>[e[0],e[1],te.northCol-e[2]],e=>[e[0],e[1],-e[2]]],west:[e=>[te.westCol+e[2],e[1],e[0]],e=>[e[2],e[1],e[0]]],east:[e=>[te.eastCol-e[2],e[1],e[0]],e=>[-e[2],e[1],e[0]]]};function R3(e,t,o,n,r){let a=[];for(let s=0;s<o;s++){let i=e+s*t+(s===0?n:.02),c=e+(s+1)*t-(s===o-1?r:.02);a.push([i,c,e+(s+.5)*t])}return a}var m8=R3(te.westCol,ld,Ph,mt+Gl,mt+Gl),_3=R3(te.south,f8,A3,.32,mt+Gl),hc=[te.cx-32.35,te.northCol-77],g8=Array.from({length:Ph-1},(e,t)=>te.westCol+(t+1)*ld),O3=e=>(e[1]-e[0])/2-.2,Dl=e=>(e[0]+e[1])/2;function x8(e,t){let o=Dl(e),n=O3(e);return{u0:e[0],u1:e[1],bottom:t?0:ql,head:r=>{let a=Math.abs(r-o);return a<n?Er+Math.sqrt(n*n-a*a):Er},step:.05}}function y8(e,t,o){return{u0:e-o,u1:e+o,bot:n=>t-Math.sqrt(Math.max(0,o*o-(n-e)*(n-e))),head:n=>t+Math.sqrt(Math.max(0,o*o-(n-e)*(n-e))),step:.04,mat:[rt.STONE,0,0]}}function b8(e,t,o,n){return{u0:e-t/2,u1:e+t/2,bottom:o,head:()=>n,step:.5,mat:[rt.STONE,0,0]}}function M3(e,t,o){let[n,r]=v8[t],a=p8(e,n,r),s=[];o.arches.forEach((f,u)=>s.push(x8(f,u===o.open)));let i=[];for(let f of o.bays||o.arches){let u=Dl(f);o.oculi&&s.push(y8(u,6.85,.3)),i.push({c:u,y0:o.win[0],y1:o.win[1],w:1.05})}for(let f of o.extraWindows||[])i.push(f);for(let f of i)s.push(b8(f.c,f.w,f.y0,f.y1));for(let f of o.extraHoles||[])s.push(f);l8(a,{u0:o.u0,u1:o.u1,w0:-mt,w1:mt,top:o.top,holes:s,mat:[rt.BRICK,0,0],revealMat:[rt.BRICK,0,0],noEnds:o.noEnds,cuts:o.cuts,topStep:.25});let c=(f,u,d,v,l,p,m)=>{let g=n([f,u,d]),x=n([v,l,p]);Kn(e,g[0],g[1],g[2],x[0],x[1],x[2],m)},h=(f,u,d,v,l,p)=>uc(a,f,u,d,v,l,[p,0,0]);for(let f of o.arches){let u=Dl(f),d=O3(f),v=28;for(let l of[mt,-mt]){let p=l>0?1:-1,m=l+p*.025;for(let g=0;g<v;g++){let x=Math.PI*g/v,b=Math.PI*(g+1)/v,w=(q,Q)=>[u+Math.cos(q)*Q,Er+Math.sin(q)*Q],M=w(x,d),k=w(b,d),z=w(x,d+.26),P=w(b,d+.26);h([M[0],M[1],m],[k[0],k[1],m],[P[0],P[1],m],[z[0],z[1],m],[0,0,p],rt.STONE);let R=Math.cos((x+b)/2),U=Math.sin((x+b)/2);h([z[0],z[1],l],[P[0],P[1],l],[P[0],P[1],m],[z[0],z[1],m],[R,U,0],rt.STONE)}}}if(o.arches.forEach((f,u)=>{u!==o.open&&c(f[0]-.02,ql,-mt-.05,f[1]+.02,ql+.09,mt+.05,rt.STONE)}),c(o.u0,w3,-mt,o.u1,w3+.18,mt+.09,rt.STONE),c(o.u0,o.win[0]-.12,mt-.01,o.u1,o.win[0],mt+.06,rt.STONE),o.cornice)for(let[f,u,d]of o.cornice)c(f,d-.22,mt-.01,u,d,mt+.16,rt.STONE),c(f,d,mt-.01,u,d+.16,mt+.42,rt.STONE);for(let{c:f,y0:u,y1:d,w:v,door:l}of i){let p=v/2;if(h([f-p-.01,u,.06],[f+p+.01,u,.06],[f+p+.01,d,.06],[f-p-.01,d,.06],[0,0,1],l?rt.DARK:rt.PANE),l){c(f-p-.16,0,mt-.01,f-p,d+.16,mt+.07,rt.STONE),c(f+p,0,mt-.01,f+p+.16,d+.16,mt+.07,rt.STONE),c(f-p-.16,d,mt-.01,f+p+.16,d+.2,mt+.09,rt.STONE),c(f-p,0,.07,f+p,d-.02,.12,rt.SHUTTER),c(f-.012,0,.12,f+.012,d-.02,.14,rt.DARK);continue}for(let m of[-1,1]){let g=f+m*p;c(g+m*.02,u+.02,mt+.02,g+m*(p+.025),d-.02,mt+.06,rt.SHUTTER)}c(f-p-.09,d,mt-.01,f+p+.09,d+.16,mt+.05,rt.STONE),c(f-p-.09,u-.1,mt-.01,f+p+.09,u,mt+.09,rt.STONE),c(f-.015,u,.06,f+.015,d,.09,rt.SHUTTER),c(f-p,(u+d)/2-.015,.06,f+p,(u+d)/2+.015,.09,rt.SHUTTER)}if(o.oculi)for(let f of o.bays||o.arches){let u=Dl(f);h([u-.31,6.54,0],[u+.31,6.54,0],[u+.31,7.16,0],[u-.31,7.16,0],[0,0,1],rt.DARK)}for(let f of o.cols){let u=ql+.09,d=n([f,0,0]);Kn(e,d[0]-.24,u,d[2]-.24,d[0]+.24,u+.12,d[2]+.24,rt.MARBLE),e.lathe([[.23,u+.12,1],[.24,u+.17],[.2,u+.24],[.215,u+.28],[.17,u+.34,1],[.165,u+.6],[.155,Er-.5],[.15,Er-.38,1],[.175,Er-.34,1],[.17,Er-.3],[.2,Er-.22],[.27,Er-.15],[.29,Er-.12,1]],d[0],d[2],18,{mat:()=>[rt.MARBLE,0,0]}),Kn(e,d[0]-.29,Er-.12,d[2]-.29,d[0]+.29,Er+.01,d[2]+.29,rt.STONE)}o.walk&&o.walk(e)}function w8(e){let t=[-1,0,1].map(r=>{let a=te.cx+r*1.7;return{u0:a-.6,u1:a+.6,bottom:11,head:s=>12.9+Math.sqrt(Math.max(0,.36-(s-a)*(s-a))),step:.04,mat:[rt.STONE,0,0]}});M3(e,"north",{u0:te.westCol-mt,u1:te.eastCol+mt,top:r=>r>mo.x0+1e-6&&r<mo.x1-1e-6?mo.top:Ta,cuts:[mo.x0,mo.x0+1e-5,mo.x1-1e-5,mo.x1],arches:m8,open:z3,cols:g8,oculi:!0,win:[8,9.9],extraHoles:t,cornice:[[te.westCol-mt-3.3,mo.x0,Ta],[mo.x1,te.eastCol+mt+3.3,Ta],[mo.x0-.2,mo.x1+.2,mo.top]],walk:r=>{Kn(r,Do.x0,rs,te.northCol+mt,Do.x1,rs+.2,te.northBack,rt.PLASTER),Kn(r,Do.x0,0,te.northBack,Do.x1,rs,te.northBack+.3,rt.PLASTER);for(let a of[te.cx-7.2,te.cx,te.cx+7.2])uc(r,[a-.8,0,te.northBack-.01],[a+.8,0,te.northBack-.01],[a+.8,2.9,te.northBack-.01],[a-.8,2.9,te.northBack-.01],[0,0,-1],[rt.DARK,0,0]),Kn(r,a-.98,0,te.northBack-.06,a+.98,3.12,te.northBack,rt.STONE),uc(r,[a-.8,0,te.northBack-.07],[a+.8,0,te.northBack-.07],[a+.8,2.9,te.northBack-.07],[a-.8,2.9,te.northBack-.07],[0,0,-1],[rt.DARK,0,0])}}),uc(e,[mo.x0,11,te.northCol+.2],[mo.x1,11,te.northCol+.2],[mo.x1,13.6,te.northCol+.2],[mo.x0,13.6,te.northCol+.2],[0,0,-1],[rt.DARK,0,0]),Kn(e,mo.x0+.3,10.88,te.northCol-mt-.06,mo.x1-.3,11,te.northCol-mt+.1,rt.STONE),Kn(e,te.westBack,rs+.2,te.northBack,te.eastBack,Ta,te.northBack+3.4,rt.BRICK),Kn(e,te.westBack,os,te.northCol-mt,te.westCol-mt,Ta,te.northCol+mt,rt.BRICK),Kn(e,te.eastCol+mt,os,te.northCol-mt,te.eastBack,Ta,te.northCol+mt,rt.BRICK),Kn(e,te.westBack,rs+.2,te.northCol+mt+.12,te.eastBack,Ta,te.northBack,rt.BRICK),$l(e,[te.westBack-.5,Ta+.16,te.northCol-mt-.42],[mo.x0-te.westBack+.5,0,0],[0,2.6,4.4],rt.ROOF),$l(e,[mo.x1,Ta+.16,te.northCol-mt-.42],[te.eastBack+.5-mo.x1,0,0],[0,2.6,4.4],rt.ROOF),$l(e,[mo.x0-.3,mo.top+.16,te.northCol-mt-.42],[mo.x1-mo.x0+.6,0,0],[0,1.4,3],rt.ROOF),k3(e,[mo.x0-.3,mo.top+.16,te.northCol-mt-.42],[mo.x0-.3,mo.top+1.56,te.northCol-mt+2.58],[mo.x0-.3,mo.top+.16,te.northCol-mt+2.58],[-1,0,0],rt.BRICK),k3(e,[mo.x1+.3,mo.top+.16,te.northCol-mt-.42],[mo.x1+.3,mo.top+1.56,te.northCol-mt+2.58],[mo.x1+.3,mo.top+.16,te.northCol-mt+2.58],[1,0,0],rt.BRICK),Kn(e,mo.x0,Ta,te.northCol+mt,mo.x1,mo.top,te.northCol+2.6,rt.BRICK);for(let[r,a]of[[te.cx-9.8,te.northBack+.6],[te.cx+9.4,te.northBack+.4],[te.cx-4.6,te.northBack+1]])Kn(e,r-.4,12.5,a-.4,r+.4,15.4,a+.4,rt.BRICK),Kn(e,r-.52,15.4,a-.52,r+.52,15.62,a+.52,rt.STONE);let o=(r,a,s)=>{let i=r==="west"?-1:1,c=[];_3.forEach((u,d)=>{let v=Dl(u);d===1?c.push({c:v,y0:0,y1:2.9,w:1.4,door:!0}):c.push({c:v,y0:1,y1:2.75,w:1.05}),c.push({c:v,y0:3.85,y1:5.45,w:1.05})}),M3(e,r,{u0:te.south,u1:te.northCol-mt,top:()=>os,arches:[],bays:_3,cols:[],win:[7.45,8.85],extraWindows:c,noEnds:!0,cornice:[[te.south,te.northCol-mt,os]]}),Kn(e,a,0,te.south,s+i*(mt+.12),os,te.northBack+.3,rt.BRICK);let h=s-i*mt;Kn(e,h,0,te.south,h-i*.06,.55,te.northCol-mt,rt.STONE);let f=s-i*(mt+.42);$l(e,[f,os+.16,te.south],[0,0,te.northCol-mt-te.south],[a-f+i*.4,1.9,0],rt.ROOF)};o("west",te.westBack,te.westCol),o("east",te.eastBack,te.eastCol);let n=ns.x1+.7;Kn(e,13.65,7.4,te.south-.02,n,7.62,te.south+.14,rt.STONE),Kn(e,13.65,10.4,te.south-.02,n,10.6,te.south+.38,rt.STONE),$l(e,[13.65,10.6,te.south+.38],[n-13.65,0,0],[0,2.2,-5],rt.ROOF)}function k3(e,t,o,n,r,a){let s=[a,0,0];e.tri(e.vert(t,r,s),e.vert(o,r,s),e.vert(n,r,s))}function $l(e,t,o,n,r){let a=Rh([o[1]*n[2]-o[2]*n[1],o[2]*n[0]-o[0]*n[2],o[0]*n[1]-o[1]*n[0]]),s=a[1]<0?a.map(h=>-h):a,i=(h,f)=>[t[0]+o[0]*h+n[0]*f,t[1]+o[1]*h+n[1]*f,t[2]+o[2]*h+n[2]*f];uc(e,i(0,0),i(1,0),i(1,1),i(0,1),s,[r,0,0]);let c=.08;uc(e,i(0,0),i(1,0),[i(1,0)[0],i(1,0)[1]-c,i(1,0)[2]],[i(0,0)[0],i(0,0)[1]-c,i(0,0)[2]],Rh([-n[0],0,-n[2]]),[r,0,0])}function _8(e){let t=te.westBack,o=te.eastBack,n=te.south,r=te.northBack,a=36,s=22,i=[];for(let c=0;c<=a;c++){i.push([]);for(let h=0;h<=s;h++){let f=[t+(o-t)*c/a,0,n+(r-n)*h/s];i[c].push(e.vert(f,[0,1,0],[rt.GROUND,0,0]))}}for(let c=0;c<a;c++)for(let h=0;h<s;h++)e.tri(i[c][h],i[c+1][h],i[c+1][h+1]),e.tri(i[c][h],i[c+1][h+1],i[c][h+1])}var Fl=.46,Qs=.58,Ys=[[-.5,0],[-.52,.45],[-.46,.78],[-.3,.95],[0,1],[.3,.95],[.46,.78],[.52,.45],[.5,0]];function M8(e,t,o){let n=Ks+o,r=(e>0?Do.x1-te.cx:te.cx-Do.x0)-Zs-o,a=Ks+o,s=(t>0?Do.z1-te.cz:te.cz-Do.z0)-Zs-o,i=Lh+o,c=Math.sqrt(i*i-n*n),h=Math.sqrt(i*i-a*a),f=[[n,c],[n,s],[r,s],[r,a],[h,a]],u=Math.atan2(a,h),d=Math.atan2(c,n);for(let v=1;v<10;v++){let l=u+(d-u)*v/10;f.push([Math.cos(l)*i,Math.sin(l)*i])}return f.map(([v,l])=>[te.cx+e*v,te.cz+t*l])}function k8(e,t,o){let n=o[0]-t[0],r=o[1]-t[1],a=Math.hypot(n,r),s=n/a,i=r/a,c=-i,h=s,f=Fl*.5,u=-f,d=a+f,v=[],l=Math.max(1,Math.ceil((d-u)/1));for(let p=0;p<=l;p++){let m=u+(d-u)*p/l,g=[];for(let x=0;x<Ys.length;x++){let[b,w]=Ys[x],M=Math.min(Ys.length-2,x),k=Ys[Math.max(0,x-1)],z=Ys[Math.min(Ys.length-1,x+1)],P=(z[0]-k[0])*Fl,U=(z[1]-k[1])*Qs,q=-P,Q=Math.hypot(U,q)||1,D=[t[0]+s*m+c*b*Fl,w*Qs,t[1]+i*m+h*b*Fl],V=[c*(-U/Q),-q/Q,h*(-U/Q)];g.push(e.vert(D,V[1]<-.2?[c*Math.sign(b),.3,h*Math.sign(b)]:V,[rt.HEDGE,0,0]))}v.push(g)}for(let p=0;p<l;p++)for(let m=0;m<Ys.length-1;m++)e.tri(v[p][m],v[p+1][m],v[p+1][m+1]),e.tri(v[p][m],v[p+1][m+1],v[p][m+1]);for(let[p,m]of[[0,-1],[l,1]]){let g=v[p],x=e.vert([t[0]+s*(p?d:u),Qs*.5,t[1]+i*(p?d:u)],[s*m,0,i*m],[rt.HEDGE,0,0]);for(let b=0;b<g.length-1;b++)e.tri(x,g[b],g[b+1])}}function S8(e){for(let t of[-1,1])for(let o of[-1,1]){let n=M8(t,o,.3);for(let r=0;r<n.length;r++)k8(e,n[r],n[(r+1)%n.length])}}function E8(e){let t=te.cx,o=te.cz,n=()=>[rt.STONE,0,0];e.lathe([[1.45,0,1],[1.45,.14,1],[1.12,.14,1],[1.12,.3,1],[0,.3]],t,o,8,{mat:n}),e.lathe([[.76,.3,1],[.8,.38,1],[.74,.44],[.76,.7],[.82,.9],[.8,1.02,1],[.88,1.06,1],[.88,1.18,1],[.6,1.18,1],[.6,.98]],t,o,24,{mat:n}),e.lathe([[.6,.98,1],[0,.98]],t,o,16,{mat:()=>[rt.DARK,0,0]});let r={mat:()=>[rt.IRON,0,0]};e.tube([[t-.72,1.1,o],[t-.72,1.9,o],[t-.7,2.3,o]],()=>.035,8,6,r),e.tube([[t+.72,1.1,o],[t+.72,1.9,o],[t+.7,2.3,o]],()=>.035,8,6,r);let a=[];for(let s=0;s<=10;s++){let i=Math.PI*s/10;a.push([t-Math.cos(i)*.7,2.3+Math.sin(i)*.45,o])}e.tube(a,()=>.03,20,6,r),e.tube([[t-.45,2.25,o],[t,2.38,o],[t+.45,2.25,o]],()=>.02,8,5,r),e.ellipsoid([t,2.32,o],[.03,.13,.13],6,10,r);for(let s of[-1,1]){let i=[];for(let c=0;c<=12;c++){let h=c/12*Math.PI*1.6,f=.16*(1-c/16);i.push([t+s*(.72-.18+Math.cos(h)*f*s*-1+0),1.95+Math.sin(h)*f,o])}e.tube(i,()=>.016,16,5,r)}}function A8(e){for(let[t,o]of fd)e.lathe([[.26,0,1],[.3,.06],[.36,.42],[.38,.5,1],[.44,.52,1],[.44,.64,1],[.38,.66,1],[.37,.6]],t,o,20,{mat:()=>[rt.POT,0,0]}),e.lathe([[.37,.6,1],[0,.6]],t,o,12,{mat:()=>[rt.SOIL,0,0]}),e.tube([[t,.6,o],[t+.02,1,o-.01],[t-.01,1.45,o+.02]],n=>.045-n*.02,6,6,{mat:()=>[rt.BARK,0,0]})}function z8(e){let[t,,o]=ts.c,n=P3(7),r=[[-1.8,.4,3.6],[1.6,-.9,3.9],[.4,1.9,3.4],[-.6,-1.7,4.2],[2.1,1.2,3.2]];for(let[a,s,i]of r){let c=[[t+a*.05,0,o+s*.05],[t+a*.25,i*.35,o+s*.25],[t+a*.6,i*.7,o+s*.6],[t+a,i,o+s],[t+a*1.35+(n()-.5),i+1.4,o+s*1.35+(n()-.5)]];e.tube(c,h=>.2*(1-h*.75),14,9,{mat:()=>[rt.BARK,0,0]});for(let h=0;h<2;h++){let f=.55+h*.2,u=[t+a*f,i*f,o+s*f],d=n()*Math.PI*2;e.tube([u,[u[0]+Math.cos(d)*1.3,u[1]+.9,u[2]+Math.sin(d)*1.3],[u[0]+Math.cos(d)*2.3,u[1]+1.4+n(),u[2]+Math.sin(d)*2.3]],v=>.08*(1-v*.7),8,6,{mat:()=>[rt.BARK,0,0]})}}for(let a of l0.filter(s=>s.spindle))e.tube([[a.c[0],0,a.c[2]],[a.c[0],1.4,a.c[2]]],()=>.12,3,7,{mat:()=>[rt.BARK,0,0]})}function T8(e){let t=()=>[rt.FARBRICK,0,0],o=()=>[rt.LEAD,0,0],n=(a,s,i,c,h,f)=>{e.lathe([[i+.3,20,1],[i+.3,c-1.2,1],[i+.8,c-.9,1],[i+.8,c,1],[i,c,1]],a,s,28,{mat:t});let u=[];for(let v=0;v<=12;v++){let l=v/12*Math.PI/2,p=Math.cos(l)*i,m=Math.sin(l)*h;f&&(p*=1-.18*Math.sin(l*2)),u.push([Math.max(p,i*.12),c+m])}e.lathe(u,a,s,28,{mat:o});let d=c+h;e.lathe([[i*.13,d-.2,1],[i*.13,d+3,1],[i*.18,d+3.2,1],[i*.02,d+6.4]],a,s,10,{mat:o})};Kn(e,14,0,104,52,26,150,rt.FARBRICK),e.lathe([[3,26],[.1,32]],33,108,4,{mat:t}),n(26,124,7.2,33,9.5,!0),n(40.5,116,6,31,8,!0),n(16.5,117,5.5,30,7.2,!0),e.lathe([[6.4,20,1],[6.4,34,1],[6.9,34.4,1],[6,34.4,1],[.6,46.5,1],[.15,50]],33,132,24,{mat:o});let r=(a,s,i)=>{Kn(e,a-1.8,0,s-1.8,a+1.8,i,s+1.8,rt.FARBRICK),e.lathe([[1.9,i,1],[1.6,i+3.5,1],[1.2,i+3.5,1],[1.2,i+6,1],[.9,i+6.2,1],[.05,i+13]],a,s,8,{mat:t})};r(20.5,109,36),r(46.5,112,38)}function L8(e){let o=[te.cx,0,te.cz],n=24,r=10,a=[];for(let s=0;s<=n;s++){a.push([]);let i=-Math.PI*.62+Math.PI*1.24*s/n;for(let c=0;c<=r;c++){let h=Math.PI/2*(c/r)-.05,f=[Math.sin(i)*Math.cos(h),Math.sin(h),Math.cos(i)*Math.cos(h)],u=[o[0]+f[0]*420,o[1]+f[1]*420,o[2]+f[2]*420];a[s].push(e.vert(u,[-f[0],-f[1],-f[2]],[rt.SKY,0,0]))}}for(let s=0;s<n;s++)for(let i=0;i<r;i++)e.tri(a[s][i],a[s+1][i],a[s+1][i+1]),e.tri(a[s][i],a[s+1][i+1],a[s][i+1])}function N8(){let e=[],t=[],o=[],n=[],r=c8.createBuilder(e,t,o,n);return _8(r),w8(r),S8(r),E8(r),A8(r),z8(r),r.save(),r.translate(hc[0],0,hc[1]),T8(r),r.restore(),L8(r),{position:e,normal:t,elements:o,attr:n}}var C3=[[[13.65,0,ns.z0-.7],[ns.x1+.7,10.6,te.south]],[[te.westBack,rs,te.northCol-mt],[te.eastBack,Ta,te.northBack+3.4]],[[mo.x0,Ta,te.northCol-mt],[mo.x1,mo.top,te.northCol+2.6]],[[te.westBack,0,te.south],[te.westCol+mt,os,te.northBack+.3]],[[te.eastCol-mt,0,te.south],[te.eastBack,os,te.northBack+.3]],[[14+hc[0],0,104+hc[1]],[52+hc[0],26,150+hc[1]]]];function R8(e,t,o,n){let r=.001,a=1e9;for(let s=0;s<3;s++){if(Math.abs(t[s])<1e-9){if(e[s]<o[s]||e[s]>n[s])return!1;continue}let i=(o[s]-e[s])/t[s],c=(n[s]-e[s])/t[s];if(i>c&&([i,c]=[c,i]),r=Math.max(r,i),a=Math.min(a,c),r>a)return!1}return!0}function Th(e,t,o,n){let r=[(e[0]-o[0])/n[0],(e[1]-o[1])/n[1],(e[2]-o[2])/n[2]],a=[t[0]/n[0],t[1]/n[1],t[2]/n[2]],s=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],i=r[0]*a[0]+r[1]*a[1]+r[2]*a[2],c=r[0]*r[0]+r[1]*r[1]+r[2]*r[2]-1,h=i*i-s*c;if(h<=0)return 0;let f=Math.sqrt(h),u=Math.max(0,(-i-f)/s),d=(-i+f)/s;return Math.max(0,d-u)}function cd(e){for(let[t,o]of C3)if(R8(e,c0,t,o))return 0;return 1}function P3(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let o=t;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function O8(){let e=[],t=[],o=[],n=[],r=[],a=[],s=[],i=P3(21),c=(l,p,m,g,x,b,w)=>{let M=e.length/3;for(let[k,z]of[[-1,-1],[1,-1],[1,1],[-1,1]])e.push(...l),t.push(k,z),o.push(p,m,g),n.push(...x),r.push(...b),a.push(...w);s.push(M,M+1,M+2,M,M+2,M+3)},h=(l,p)=>{let m=1;for(let g of l0){if(g===p||!g.shadow)continue;let x=Th(l,c0,g.c,g.r);x>0&&(m*=Math.exp(-x*.9))}return m},f=l0.map(l=>({...l,pts:null}));for(let l of f)for(let p=0;p<l.n;p++){let m;do m=[i()*2-1,i()*2-1,i()*2-1];while(m[0]*m[0]+m[1]*m[1]+m[2]*m[2]>1);let g=Math.hypot(m[0],m[1],m[2])||1,x=Math.pow(i(),.35)*.98,b=[m[0]/g*x,m[1]/g*x,m[2]/g*x];if(l.spindle){let D=b[1],V=Math.sqrt(Math.max(.02,1-D*D))*(D>0?1-D*.55:1+D*.25),me=Math.hypot(b[0],b[2])||1,Ge=V*Math.min(1,me*1.4);b=[b[0]/me*Ge,D,b[2]/me*Ge]}l.magnolia&&b[1]<-.55&&(b[1]=-.55+(b[1]+.55)*.35);let w=[l.c[0]+b[0]*l.r[0],l.c[1]+b[1]*l.r[1],l.c[2]+b[2]*l.r[2]],M,k;if(l.magnolia){let D=0;for(let Ge of L3)D=Math.max(D,Th(w,c0,Ge.c,Ge.r));M=Math.exp(-D*1.1);let V=1;for(let Ge of l0)if(!Ge.magnolia&&Ge.shadow){let Re=Th(w,c0,Ge.c,Ge.r);Re>0&&(V*=Math.exp(-Re*.9))}M*=cd(w)*V;let me=d8(w,ts.c);k=Rh([me[0]/ts.r[0]+b[0]*.5,me[1]/ts.r[1]+b[1]*.5,me[2]/ts.r[2]+b[2]*.5]),x=Math.min(1,Math.hypot(me[0]/ts.r[0],me[1]/ts.r[1],me[2]/ts.r[2])*.6+x*.4)}else{let D=Th(w,c0,l.c,l.r);M=Math.exp(-D*(l.spindle?2.2:1.25)),M*=cd(w)*h(w,l0[f.indexOf(l)]),k=Rh([b[0]/l.r[0],b[1]/l.r[1],b[2]/l.r[2]])}let z=Math.max(0,k[0]*c0[0]+k[1]*c0[1]+k[2]*c0[2]),P=.25+.75*Math.pow(x,1.5)*(.65+.35*(k[1]*.5+.5)),R=l.size[0]+(l.size[1]-l.size[0])*i(),U=.85+i()*.3,q=l.leaf.map(D=>D*U),Q=l.cell;l.cell===3&&i()<.35&&(Q=2),c(w,R,Q,i()*Math.PI*2,[M,P,.35+.65*z],q,l.bloom)}for(let[l,p]of N3){let m=i()<.5;for(let g=0;g<3;g++){let x=[l+(i()-.5)*.7,.28+i()*.22,p+(i()-.5)*.5],b=cd(x)*h(x,null);c(x,.32+i()*.12,i()<.7?3:2,i()*6.28,[b,.6+i()*.3,.8],[.75,.9,.6],m?[1,.55,.75]:[.85,.8,1.15])}}let u=s.length/6,d=Array.from({length:u},(l,p)=>p);for(let l=u-1;l>0;l--){let p=Math.floor(i()*(l+1));[d[l],d[p]]=[d[p],d[l]]}let v=[];for(let l of d)for(let p=0;p<6;p++)v.push(s[l*6+p]);return{center:e,corner:t,par:o,light:n,tint:r,bloom:a,elements:v}}var ut=e=>e.toFixed(4),Hl=e=>`vec3(${ut(e[0])}, ${ut(e[1])}, ${ut(e[2])})`,I3=`
const vec3 SUN = ${Hl(c0)};
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
`,C8=C3.map(([e,t])=>`if (hitBox(ro, SUN, ${Hl(e)}, ${Hl(t)})) return 0.0;`).join(`
	`),P8=l0.filter(e=>e.shadow).map(e=>`tr *= crownShade(ro, ${Hl(e.c)}, ${Hl(e.r)}, ${e.spindle?"1.8":"1.0"});`).join(`
	`),I8=(e,t,o,n,r,a,s,i,c)=>`
	{
		float t = (${ut(t)} - ro.${e}) / SUN.${e};
		if (t > 0.0) {
			vec3 q = ro + SUN * t;
			float u = q.${e==="z"?"x":"z"};
			if (q.y < ${ut(rs)} && u > ${ut(o-mt)} && u < ${ut(o+n*r+mt)}) {
				float k = floor((u - ${ut(o)}) / ${ut(n)});
				float a = ${ut(o)} + k * ${ut(n)} + (k < 0.5 ? ${ut(a)} : 0.02);
				float b = ${ut(o)} + (k + 1.0) * ${ut(n)} - (k > ${ut(r-1.5)} ? ${ut(s)} : 0.02);
				float c = 0.5 * (a + b), r = 0.5 * (b - a) - 0.2;
				float d = abs(u - c);
				float sill = abs(k - ${ut(i)}) < 0.5 ? 0.0 : ${ut(ql+.09)};
				bool hole = (q.y > sill && q.y < ${ut(Er)} && u > a && u < b && d < 0.5 * (b - a) - 0.17)
					|| (q.y >= ${ut(Er)} && d * d + (q.y - ${ut(Er)}) * (q.y - ${ut(Er)}) < r * r);
				if (!hole && ${c}) return 0.0;
			}
		}
	}`,Oh=Ks+.3,Ch=Ks+.3,Ul=Lh+.3,S3=Do.x1-te.cx-Zs-.3,$8=Do.z1-te.cz-Zs-.3,F8=te.cz-Do.z0-Zs-.3,q8=Math.sqrt(Ul*Ul-Oh*Oh),D8=Math.sqrt(Ul*Ul-Ch*Ch),G8=[[te.cx,te.cz,.86,1.18],[te.cx,te.cz,1.25,.3],...fd.map(([e,t])=>[e,t,.42,.65])].map(([e,t,o,n])=>`if (hitCyl(ro, vec2(${ut(e)}, ${ut(t)}), ${ut(o)}, ${ut(n)})) return 0.0;`).join(`
	`),H8=`
float segDist(vec2 p, vec2 a, vec2 b) {
	vec2 pa = p - a, ba = b - a;
	float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
	return length(pa - ba * h);
}

// distance to the nearest hedge line
float hedgeDist(vec2 xz) {
	vec2 q = abs(xz - vec2(${ut(te.cx)}, ${ut(te.cz)}));
	float b1 = xz.y > ${ut(te.cz)} ? ${ut($8)} : ${ut(F8)};
	vec2 A = vec2(${ut(Oh)}, ${ut(q8)}), Bp = vec2(${ut(Oh)}, b1), C = vec2(${ut(S3)}, b1);
	vec2 D = vec2(${ut(S3)}, ${ut(Ch)}), E = vec2(${ut(D8)}, ${ut(Ch)});
	float d = min(min(segDist(q, A, Bp), segDist(q, Bp, C)), min(segDist(q, C, D), segDist(q, D, E)));
	float ang = atan(q.y, q.x);
	if (ang > atan(E.y, E.x) && ang < atan(A.y, A.x)) d = min(d, abs(length(q) - ${ut(Ul)}));
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
	${C8}
	${I8("z",te.northCol,te.westCol,ld,Ph,mt+Gl,mt+Gl,z3,"ro.z > "+ut(te.northCol-mt))}
	// on lighter settings only the buildings cast shadows
	if (gardenDetail < 0.5) return 1.0;
	${G8}
	if (ro.y < ${ut(Qs)} && ro.x > ${ut(Do.x0)} && ro.x < ${ut(Do.x1)}) {
		for (int i = 1; i <= 4; i++) {
			float t = float(i) / 4.0 * (${ut(Qs)} - ro.y) / SUN.y;
			vec3 q = ro + SUN * t;
			float w = ${ut(Fl*.5)} * sqrt(max(0.0, 1.0 - pow(q.y / ${ut(Qs)}, 4.0)));
			if (hedgeDist(q.xz) < w) return 0.0;
		}
	}
	float tr = 1.0;
	${P8}
	return tr;
}
`,U8=`
precision highp float;
${E3}
varying vec3 v_pos, v_normal, v_attr, v_eye;
uniform float time, gardenDetail;
${I3}
${H8}

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

	if (kind == ${rt.SKY}.0) {
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

	if (kind == ${rt.GROUND}.0) {
		bool yard = P.x > ${ut(Do.x0)} && P.x < ${ut(Do.x1)} && P.z < ${ut(Do.z1)};
		if (!yard) {
			// stone slabs under the arcades
			vec2 g = P.xz / 0.62;
			vec2 fg = fract(g);
			float h = hash(floor(g));
			base = mix(vec3(0.66, 0.60, 0.52), vec3(0.76, 0.70, 0.62), h);
			base *= 1.0 - 0.25 * (step(fg.x, 0.03) + step(fg.y, 0.03)) * (1.0 - lod);
			spec = 0.15;
		} else {
			float ex = min(P.x - ${ut(Do.x0)}, ${ut(Do.x1)} - P.x);
			float ez = min(P.z - ${ut(Do.z0)}, ${ut(Do.z1)} - P.z);
			float edge = min(ex, ez);
			float dx = abs(P.x - ${ut(te.cx)}), dz = abs(P.z - ${ut(te.cz)});
			float rc = length(vec2(dx, dz));
			if (edge < ${ut(Zs)}) {
				// brick path laid in rows, with a stone kerb
				vec2 q = ex < ez ? P.zx : P.xz;
				base = brick(q * vec2(1.0, 2.6), 0.4) * 0.9;
				if (abs(edge - ${ut(Zs)}) < 0.08) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (rc < ${ut(Lh)}) {
				// brick in rings round the wellhead
				float ang = atan(P.z - ${ut(te.cz)}, P.x - ${ut(te.cx)});
				vec2 q = vec2(ang * rc, rc);
				base = brick(q * vec2(1.0, 2.6), 0.5) * 0.92;
				if (abs(rc - ${ut(Lh)}) < 0.1) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (dx < ${ut(Ks)} || dz < ${ut(Ks)}) {
				// pale gravel
				float g = noise(P.xz * 40.0) * 0.6 + noise(P.xz * 9.0) * 0.4;
				base = mix(vec3(0.66, 0.58, 0.46), vec3(0.86, 0.79, 0.66), mix(g, 0.5, lod));
				base *= 0.94 + 0.12 * noise(P.xz * 1.3);
				float e = min(${ut(Ks)} - min(dx, dz), 1.0);
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
			ao *= 0.6 + 0.4 * smoothstep(0.85, 1.6, length(P.xz - vec2(${ut(te.cx)}, ${ut(te.cz)})));
		}
	} else if (kind == ${rt.BRICK}.0) {
		float pink = smoothstep(0.4, 0.6, noise(wq * 0.05 + 7.0));
		base = mix(brick(wq, 0.25 * pink), vec3(0.68, 0.46, 0.33), lod * 0.6);
		base *= 1.0 - 0.18 * smoothstep(0.0, 1.5, 1.6 - P.y) * noise(wq * 1.5);
		ao *= 0.78 + 0.22 * smoothstep(0.0, 1.2, P.y);
	} else if (kind == ${rt.STONE}.0) {
		float n = noise(wq * 3.0) * 0.5 + noise(wq * 0.7) * 0.5;
		base = mix(vec3(0.74, 0.70, 0.62), vec3(0.86, 0.83, 0.76), n);
		spec = 0.1;
	} else if (kind == ${rt.MARBLE}.0) {
		// red Verona marble
		float n = noise3(P * vec3(5.0, 1.5, 5.0)) * 0.6 + noise3(P * 14.0) * 0.4;
		base = mix(vec3(0.56, 0.32, 0.25), vec3(0.68, 0.42, 0.33), n);
		base = mix(base, vec3(0.80, 0.66, 0.56), smoothstep(0.66, 0.74, noise3(P * 9.0 + 3.0)) * 0.35);
		spec = 0.35;
	} else if (kind == ${rt.HEDGE}.0) {
		float n = noise3(P * 9.0) * 0.55 + noise3(P * 2.5) * 0.45;
		base = mix(vec3(0.05, 0.16, 0.04), vec3(0.22, 0.38, 0.10), n);
		ao *= 0.55 + 0.45 * smoothstep(0.0, ${ut(Qs)}, P.y) * (0.6 + 0.4 * n);
		N = normalize(N + vec3(noise3(P * 13.0) - 0.5, 0.0, noise3(P * 13.0 + 5.0) - 0.5) * 0.9);
	} else if (kind == ${rt.POT}.0) {
		base = mix(vec3(0.66, 0.34, 0.20), vec3(0.75, 0.44, 0.28), noise(wq * 6.0));
	} else if (kind == ${rt.SOIL}.0) {
		base = vec3(0.20, 0.14, 0.09);
	} else if (kind == ${rt.ROOF}.0) {
		// rows of curved clay tiles
		float along = abs(N.x) > abs(N.z) ? P.z : P.x;
		float rib = abs(fract(along / 0.24) - 0.5) * 2.0;
		float h = hash(vec2(floor(along / 0.24), floor(P.y / 0.42)));
		base = mix(vec3(0.58, 0.30, 0.20), vec3(0.72, 0.44, 0.30), h);
		base = mix(base, vec3(0.45, 0.42, 0.36), smoothstep(0.55, 0.85, noise(P.xz * 0.6)) * 0.4);
		base *= mix(0.62 + 0.38 * (1.0 - rib * rib), 0.85, lod);
	} else if (kind == ${rt.SHUTTER}.0) {
		float slat = fract(P.y / 0.07);
		base = vec3(0.17, 0.30, 0.20) * (0.75 + 0.25 * smoothstep(0.1, 0.5, slat));
	} else if (kind == ${rt.PANE}.0) {
		vec3 R = reflect(-V, N);
		base = vec3(0.03, 0.035, 0.04);
		vec3 refl = skyColor(normalize(vec3(R.x, abs(R.y), R.z))) * 0.25;
		gl_FragColor = vec4(toNight(tonemap(base + refl * (0.4 + 0.6 * pow(1.0 - abs(dot(N, V)), 3.0))), 0.45), 1.0);
		return;
	} else if (kind == ${rt.PLASTER}.0) {
		base = mix(vec3(0.82, 0.76, 0.64), vec3(0.88, 0.83, 0.72), noise(wq * 1.3));
		// a darker dado on the back walls
		if (abs(N.y) < 0.5 && P.y < 1.1) base *= 0.82;
	} else if (kind == ${rt.BARK}.0) {
		base = mix(vec3(0.30, 0.27, 0.24), vec3(0.45, 0.42, 0.38), noise3(P * vec3(8.0, 2.0, 8.0)));
	} else if (kind == ${rt.IRON}.0) {
		base = vec3(0.07, 0.07, 0.07);
		spec = 0.4;
	} else if (kind == ${rt.LEAD}.0) {
		base = mix(vec3(0.30, 0.33, 0.35), vec3(0.40, 0.43, 0.45), noise(P.xy * 0.5));
		// ribs on the domes
		float a = atan(P.z - floor(P.z / 50.0) * 50.0, 1.0);
		base *= 0.9 + 0.1 * step(0.5, fract(a * 6.0));
		far = 1.0;
	} else if (kind == ${rt.FARBRICK}.0) {
		base = mix(vec3(0.66, 0.46, 0.34), vec3(0.74, 0.54, 0.40), noise(P.xy * 0.3));
		// a row of small arches under the eaves and some dark windows
		far = 1.0;
	} else if (kind == ${rt.DARK}.0) {
		base = vec3(0.025, 0.022, 0.02);
	}

	// ---------- light ----------

	// in the arcade walks the sky is mostly hidden
	bool walk = (P.x < ${ut(te.westCol)} || P.x > ${ut(te.eastCol)} || P.z > ${ut(te.northCol)}) && P.y < ${ut(rs+.05)} && P.z > ${ut(te.south-.1)} && P.z < ${ut(te.northBack+.5)};
	float skyVis = 0.55 + 0.45 * N.y;
	if (walk) {
		float depth = P.z > ${ut(te.northCol)} ? P.z - ${ut(te.northCol)} : (P.x < ${ut(te.westCol)} ? ${ut(te.westCol)} - P.x : P.x - ${ut(te.eastCol)});
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
}`,B8=`
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
}`,j8=`
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
}`,W8=`
precision highp float;
${E3}
uniform sampler2D leaves;
varying vec2 v_uv;
varying vec3 v_light, v_tint, v_bloom, v_pos;
${I3}
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
}`;function V8(e,t,o){let n=e.texture({data:[[o]],min:"linear",mag:"linear"});return fetch(t).then(r=>{if(!r.ok)throw new Error("Could not load "+t);return r.blob()}).then(r=>createImageBitmap(r,{premultiplyAlpha:"none"})).then(r=>n({data:r,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(r=>console.error(r)),n}hd.exports=e=>{let t=N8(),o=O8(),n=V8(e,"res/garden/foliage.webp",[0,0,0,0]),r=Date.now(),a=()=>id.motion?window.__streetClock!==void 0?window.__streetClock:(Date.now()-r)/1e3:20,s=e({frag:U8,vert:B8,attributes:{position:t.position,normal:t.normal,attr:t.attr},elements:new Uint32Array(t.elements),uniforms:{time:a,gardenDetail:()=>id.gardenDetail}}),i=e({frag:W8,vert:j8,attributes:{center:o.center,corner:o.corner,par:o.par,light:o.light,tint:o.tint,bloom:o.bloom},elements:new Uint32Array(o.elements),uniforms:{leaves:n,time:a},cull:{enable:!1},count:()=>Math.floor(o.elements.length*id.leafShare/6)*6});return function(){s(),i()}};hd.exports.layout={G:te,YARD:Do,SUN:c0}});var H3=ke((uz,G3)=>{"use strict";var X8=ar().GLSL,Y8=Ps(),{C:D3}=br(),Ar=D3.x1+.35,vd=D3.zc,ud=[Ar-7.3,2,vd],F3=5.2*Math.PI/180,q3=2100,K8=725,Q8=1288,Z8=1450,J8=2576,T0=vd-3.2,Fh=vd+3.3,dd=Ar+5,pd=Ar+11.7,dc=3.9,Bl=Ar+22.7,Ih=40;function ek(){let e=[],t=[],o=[],n=[],r=Y8.createBuilder(e,t,o,n),a=(f,u,d,v,l,p)=>{let m=[];for(let g=0;g<=l;g++){m.push([]);for(let x=0;x<=p;x++){let b=[0,1,2].map(w=>f[w]+u[w]*g/l+d[w]*x/p);m[g].push(r.vert(b,v,[0,0,0]))}}for(let g=0;g<l;g++)for(let x=0;x<p;x++)r.tri(m[g][x],m[g+1][x],m[g+1][x+1]),r.tri(m[g][x],m[g+1][x+1],m[g][x+1])},s=Fh-T0,i=.7;a([Ar-i,0,T0],[dd-Ar+i,0,0],[0,0,s],[0,1,0],6,4);let c=pd-dd,h=Math.hypot(c,dc);return a([dd,0,T0],[c,dc,0],[0,0,s],[-dc/h,c/h,0],6,4),a([pd,dc,T0],[Bl-pd,0,0],[0,0,s],[0,1,0],6,4),a([Ar-i,0,T0],[Bl-Ar+i,0,0],[0,Ih,0],[0,0,1],12,12),a([Ar-i,0,Fh],[Bl-Ar+i,0,0],[0,Ih,0],[0,0,-1],12,12),a([Bl,0,T0],[0,Ih,0],[0,0,s],[-1,0,0],8,4),a([Ar-i,Ih,T0],[Bl-Ar+i,0,0],[0,0,s],[0,-1,0],6,4),{position:e,normal:t,elements:o,attr:n}}var Gr=e=>e.toFixed(5),$h=[[Ar+3.4,3.7,T0+.01,1],[Ar+8.6,4.1,Fh-.01,-1],[Ar+14.8,dc+3.3,T0+.01,1],[Ar+19.6,dc+3.6,Fh-.01,-1]],tk=`
precision highp float;
${X8}
uniform sampler2D photo;
uniform float time;
varying vec3 v_pos;
varying vec3 v_normal;
const int NLAMP = ${$h.length};
vec4 LAMP[NLAMP];

void main() {
	${$h.map((e,t)=>`LAMP[${t}] = vec4(${Gr(e[0])}, ${Gr(e[1])}, ${Gr(e[2])}, ${Gr(e[3])});`).join(`
	`)}
	vec3 d = v_pos - vec3(${Gr(ud[0])}, ${Gr(ud[1])}, ${Gr(ud[2])});
	float c = ${Gr(Math.cos(F3))}, s = ${Gr(Math.sin(F3))};
	float fw = d.x * c + d.y * s;
	float up = -d.x * s + d.y * c;
	fw = max(fw, 0.05);
	vec2 px = vec2(${Gr(K8)} + ${Gr(q3)} * d.z / fw, ${Gr(Q8)} - ${Gr(q3)} * up / fw);
	vec2 uv = px / vec2(${Gr(Z8)}, ${Gr(J8)});
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
	for (int i = 0; i < ${$h.length}; i++) {
		vec4 L = LAMP[i];                       // x, y, z, side (+1 left wall, -1 right)
		vec3 d = L.xyz - v_pos;
		float dd = dot(d, d);
		float fl = 0.92 + 0.05 * sin(time * 7.3 + float(i) * 2.1) + 0.03 * sin(time * 17.0 + float(i));
		// the wall it hangs on is lit across, the paving from above
		float face = v_normal.y > 0.5 ? max(normalize(d).y, 0.0) : 0.35 + 0.65 * max(dot(v_normal, normalize(d)), 0.0);
		lit += albedo * vec3(1.0, 0.62, 0.30) * face * fl * lampK * 3.2 / (0.6 + dd * 0.45);
	}
	gl_FragColor = vec4(lit, 1.0);
}`,ok=`
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
}`;G3.exports=e=>{let t=ek(),o=e.texture({data:[[[120,105,85]]],min:"linear",mag:"linear"});fetch("res/florence/photo.jpg").then(i=>{if(!i.ok)throw new Error("Could not load the Florence photo");return i.blob()}).then(i=>createImageBitmap(i)).then(i=>o({data:i,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(i=>console.error(i));let n=e({frag:tk,vert:ok,attributes:{position:t.position,normal:t.normal},elements:new Uint32Array(t.elements),uniforms:{photo:o},cull:{enable:!1}}),r={pos:[],nrm:[],k:[],idx:[]},a=(i,c,h)=>{let[f,u,d]=i,v=[[[1,0,0],[0,1,0],[0,0,1]],[[-1,0,0],[0,1,0],[0,0,-1]],[[0,0,1],[0,1,0],[-1,0,0]],[[0,0,-1],[0,1,0],[1,0,0]],[[0,1,0],[0,0,1],[1,0,0]],[[0,-1,0],[0,0,1],[-1,0,0]]];for(let[l,p,m]of v){let g=r.pos.length/3;for(let[x,b]of[[-1,-1],[1,-1],[1,1],[-1,1]])r.pos.push(f+l[0]*c[0]+p[0]*x*c[0]+m[0]*b*c[0],u+l[1]*c[1]+p[1]*x*c[1]+m[1]*b*c[1],d+l[2]*c[2]+p[2]*x*c[2]+m[2]*b*c[2]),r.nrm.push(...l),r.k.push(h);r.idx.push(g,g+1,g+2,g,g+2,g+3)}};for(let i of $h){let c=i[3],h=i[2]+c*.42;a([i[0],i[1],h],[.11,.17,.11],1);for(let f of[-1,1])for(let u of[-1,1])a([i[0]+f*.11,i[1],h+u*.11],[.014,.18,.014],0);a([i[0],i[1]+.2,h],[.15,.03,.15],0),a([i[0],i[1]+.27,h],[.05,.05,.05],0),a([i[0],i[1]-.19,h],[.09,.025,.09],0),a([i[0],i[1]+.34,i[2]+c*.21],[.015,.015,.21],0),a([i[0],i[1]+.15,i[2]+c*.03],[.04,.24,.03],0)}let s=e({vert:`
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
		}`,attributes:{position:r.pos,normal:r.nrm,k:r.k},elements:new Uint16Array(r.idx),cull:{enable:!1}});return function(){n(),s()}}});var V3=ke((dz,W3)=>{"use strict";var nk=ar().GLSL,{A:Dh,BENCH:gd,SHAFT:md,TREE:jl,oculusGLSL:rk}=Ea(),ak=Ma(),qh=jl.sxz,U3=jl.sy,B3=jl.yaw;function sk(e){let t=new DataView(e),o=t.getUint32(4,!0),n=t.getUint32(8,!0),r=t.getUint32(12,!0),a=[0,1,2].map(d=>t.getFloat32(16+d*4,!0)),s=[0,1,2].map(d=>t.getFloat32(28+d*4,!0)),i=40,c=new Uint16Array(e,i,o*3);i+=o*6;let h=new Uint16Array(e,i,o*2);i+=o*4;let f=new Int8Array(e,i,o*3);i+=o*3,i=i+3&-4;let u=new Uint32Array(e,i,r);return{nV:o,nWood:n,nI:r,mn:a,sz:s,pos:c,uv:h,nrm:f,idx:u}}function ik(e){let t=new Float32Array(e.nV*3),o=new Float32Array(e.nV*3),n=new Float32Array(e.nV*2),r=new Float32Array(e.nV),a=Math.cos(B3),s=Math.sin(B3);for(let i=0;i<e.nV;i++){let c=(e.mn[0]+e.pos[i*3]/65535*e.sz[0])*qh,h=(e.mn[1]+e.pos[i*3+1]/65535*e.sz[1])*U3,f=(e.mn[2]+e.pos[i*3+2]/65535*e.sz[2])*qh;t[i*3]=Dh.cx+a*c+s*f,t[i*3+1]=gd.soil+.02+h,t[i*3+2]=Dh.zc-s*c+a*f;let u=e.nrm[i*3]/127/qh,d=e.nrm[i*3+1]/127/U3,v=e.nrm[i*3+2]/127/qh,l=Math.hypot(u,d,v)||1;u/=l,d/=l,v/=l,o[i*3]=a*u+s*v,o[i*3+1]=d,o[i*3+2]=-s*u+a*v,n[i*2]=e.uv[i*2]/65535,n[i*2+1]=e.uv[i*2+1]/65535,r[i]=i>=e.nWood?1:0}return{position:t,normal:o,uv:n,leaf:r,elements:e.idx}}function j3(e,t,o,n){let r=e.texture({data:[[n]],min:"linear",mag:"linear"});return fetch(t).then(a=>{if(!a.ok)throw new Error("Could not load "+t);return a.blob()}).then(a=>createImageBitmap(a,{premultiplyAlpha:"none"}).catch(()=>new Promise((s,i)=>{let c=new Image;c.onload=()=>s(c),c.onerror=i,c.src=URL.createObjectURL(a)}))).then(a=>r({data:a,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",...o})).catch(a=>console.error(a)),r}var cr=e=>e.toFixed(4),pc=jl.crownC,vc=jl.crownR,ck=`
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

const vec3 SHAFT = vec3(${cr(md[0])}, ${cr(md[1])}, ${cr(md[2])});

void main() {
	vec3 p = position;
	// the air in the court is never quite still. The whole tree leans
	// with it, slowly, more the higher and the further out on a limb
	// (wood and leaves together, so every leaf stays on its twig) ...
	float h = max(p.y - 1.2, 0.0);
	vec2 out2 = p.xz - vec2(${cr(Dh.cx)}, ${cr(Dh.zc)});
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
	vec3 cc = vec3(${cr(pc[0])}, ${cr(pc[1])}, ${cr(pc[2])});
	vec3 cr = vec3(${cr(vc[0])}, ${cr(vc[1])}, ${cr(vc[2])});
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
}`,ss=j0(),lk=`
precision highp float;
${nk}
uniform float time;
${ss.lanternGLSL(ss.TREE_LANTERN)}
const vec3 LANTERN_POS = vec3(${ss.LANTERNS[ss.TREE_LANTERN[0]].x.toFixed(3)}, ${ss.LANTERNS[ss.TREE_LANTERN[0]].y.toFixed(3)}, ${ss.LANTERNS[ss.TREE_LANTERN[0]].z.toFixed(3)});
uniform sampler2D leaves, bark;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_leaf, v_shade;
varying vec3 v_eye;

${rk()}

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
	vec3 rel = (v_pos - vec3(${cr(pc[0])}, ${cr(pc[1])}, ${cr(pc[2])})) / vec3(${cr(vc[0])}, ${cr(vc[1])}, ${cr(vc[2])});
	float outer = clamp(length(rel), 0.0, 1.0);
	float ao = mix(0.38, 1.0, outer * outer) * (0.75 + 0.25 * smoothstep(0.4, 2.0, v_pos.y));
	// and the trunk darkens where it meets the soil
	ao *= 0.6 + 0.4 * smoothstep(${cr(gd.soil)}, ${cr(gd.soil+.5)}, v_pos.y);

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
}`;W3.exports=e=>{let t=null,o=j3(e,"res/tree/leaves.webp",{wrapS:"clamp",wrapT:"clamp"},[60,80,40,0]),n=j3(e,"res/tree/bark.jpg",{wrapS:"repeat",wrapT:"repeat"},[90,80,70]),r=Date.now();return fetch("res/tree.bin").then(a=>{if(!a.ok)throw new Error("Could not load the tree");return a.arrayBuffer()}).then(a=>{let s=ik(sk(a));t=e({vert:ck,frag:lk,attributes:{position:s.position,normal:s.normal,uv:s.uv,leaf:s.leaf},elements:s.elements,uniforms:{leaves:o,bark:n,time:()=>ak.motion?typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-r)/1e3:0},cull:{enable:!1}})}).catch(a=>console.error(a)),function(){t&&t()}}});var Bh=ke((pz,Q3)=>{"use strict";var mc=X0(),fk="res/audio/go-tomorrow.mp3",hk="res/audio/go-tomorrow.json",Y3="gallery-sound",Gh=[mc.PIANO.x,1,mc.PIANO.z],uk=mc.R,ea=!0;try{localStorage.getItem(Y3)==="off"&&(ea=!1)}catch(e){}var Cn=null,_r=null,Wl=null,Vl=null,is=null,L0=null,Js=!1,Hh=null,X3=[],dk=(typeof performance!="undefined"?performance.now():0)/1e3;function pk(e){let t=Math.floor(e.sampleRate*2.6),o=e.createBuffer(2,t,e.sampleRate),n=12345,r=()=>(n=n*16807%2147483647,n/10737418235e-1-1);for(let a=0;a<2;a++){let s=o.getChannelData(a),i=0;for(let c=0;c<t;c++){let h=c/e.sampleRate,f=.25+.6*Math.exp(-h*2.2);i+=(r()-i)*f,s[c]=i*Math.pow(1-c/t,2.2)*Math.exp(-h*1.5)*(h<.012?h/.012:1)}}return o}function vk(){if(Cn)return;Cn=new Audio,Cn.src=fk,Cn.loop=!0,Cn.preload="auto",Cn.crossOrigin="anonymous";let e=window.AudioContext||window.webkitAudioContext;if(!e){Cn.volume=.2;return}try{_r=new e;let t=_r.createMediaElementSource(Cn);is=_r.createBiquadFilter(),is.type="lowpass",is.frequency.value=1500,is.Q.value=.4,Wl=_r.createGain(),Wl.gain.value=0,Vl=_r.createGain(),Vl.gain.value=0;let o=_r.createConvolver();o.buffer=pk(_r),L0=_r.createGain(),L0.gain.value=ea?1:0,t.connect(is),is.connect(Wl),Wl.connect(L0),is.connect(o),o.connect(Vl),Vl.connect(L0),L0.connect(_r.destination)}catch(t){_r=null,Cn.volume=.2}}function K3(){if(Js||!ea)return;vk();let e=()=>Cn.play().then(()=>{Js=!0}).catch(()=>{});_r&&_r.state==="suspended"?_r.resume().then(e,e):e()}typeof window!="undefined"&&(["pointerdown","pointerup","touchend","keydown","click"].forEach(e=>window.addEventListener(e,K3,{capture:!0,passive:!0})),document.addEventListener("visibilitychange",()=>{!Cn||!Js||(document.hidden?Cn.pause():ea&&Cn.play().catch(()=>{}))}),fetch(hk).then(e=>e.ok?e.json():null).then(e=>{if(!e)return;let t=o=>{let n=o.map(s=>s[2]).sort((s,i)=>s-i),r=n[Math.floor(n.length*.03)]||0,a=n[Math.floor(n.length*.97)]||1;return o.map(s=>({t:s[0],w:s[1],x:Math.max(0,Math.min(1,(s[2]-r)/Math.max(a-r,.001)))}))};Hh={left:t(e.l),right:t(e.r),level:e.e,dur:e.d}}).catch(()=>{}));var Uh={AT:Gh,listen(e){if(!_r||!Js)return;let t=e[0]-Gh[0],o=e[2]-Gh[2],n=Math.hypot(t,o,(e[1]-Gh[1])*.5),r=Math.hypot(e[0]-mc.C.x,e[2]-mc.C.z)<uk+.4||e[0]<-.2&&Math.abs(e[2]-mc.C.z)<4,a,s,i;if(r){let h=Math.max(0,Math.min(1,(n-1.2)/5));a=1-.3*h,s=.22+.16*h,i=16e3}else{let h=5.5/Math.max(n,5.5),f=e[0]>14.2&&e[2]<12?.6:1;a=.5*Math.pow(h,1.5)*f,s=.34*Math.pow(h,.95)*f,i=(650+9e3*Math.pow(h,1.3))*(f<1?.7:1)}let c=_r.currentTime;Wl.gain.setTargetAtTime(a,c,.35),Vl.gain.setTargetAtTime(s,c,.35),is.frequency.setTargetAtTime(i,c,.35)},time(){let e=Hh&&Hh.dur||158;return Cn&&Js&&!Cn.paused||Cn&&Js?Cn.currentTime%e:((performance.now()/1e3-dk)%e+e)%e},get cues(){return Hh},get on(){return ea},set(e){ea=!!e;try{localStorage.setItem(Y3,ea?"on":"off")}catch(t){}ea?(K3(),Cn&&Js&&Cn.play().catch(()=>{}),L0&&L0.gain.setTargetAtTime(1,_r.currentTime,.2)):L0?L0.gain.setTargetAtTime(0,_r.currentTime,.15):Cn&&Cn.pause(),X3.forEach(t=>t(ea))},toggle(){Uh.set(!ea)},onChange(e){X3.push(e)},button(e){let t='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a7.8 7.8 0 0 1 0 11"/></svg>',o='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>',n=document.createElement("button");n.type="button",n.className=e+" sound-toggle";let r=()=>{n.innerHTML=ea?t:o,n.setAttribute("aria-label",ea?"Turn the music off":"Turn the music on"),n.title=ea?"Music on":"Music off",n.setAttribute("aria-pressed",ea?"true":"false")};return r(),Uh.onChange(r),["mousedown","pointerdown"].forEach(a=>n.addEventListener(a,s=>s.stopPropagation())),n.addEventListener("click",a=>{a.stopPropagation(),Uh.toggle()}),n}};Q3.exports=Uh});var cx=ke((vz,_d)=>{"use strict";var bd=ar().GLSL,{A:Z3,BENCH:rx,oculusGLSL:ax}=Ea(),J3=Ma(),sx=X0(),ex=Bh(),mk=1.74,gk=1.877,zr=mk/gk,ti={x:Z3.cx-1.22,z:Z3.zc+.02,hipY:rx.seat+.115},rn=(e,t)=>[e[3]*t[0]+e[0]*t[3]+e[1]*t[2]-e[2]*t[1],e[3]*t[1]-e[0]*t[2]+e[1]*t[3]+e[2]*t[0],e[3]*t[2]+e[0]*t[1]-e[1]*t[0]+e[2]*t[3],e[3]*t[3]-e[0]*t[0]-e[1]*t[1]-e[2]*t[2]],Xa=e=>[-e[0],-e[1],-e[2],e[3]],ls=(e,t)=>{let o=Math.hypot(e[0],e[1],e[2])||1,n=Math.sin(t/2);return[e[0]/o*n,e[1]/o*n,e[2]/o*n,Math.cos(t/2)]},jh=(e,t,o)=>rn(ls([0,0,1],o*Math.PI/180),rn(ls([0,1,0],t*Math.PI/180),ls([1,0,0],e*Math.PI/180))),wd=e=>{let t=Math.hypot(...e)||1;return e.map(o=>o/t)},f0=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],Yl=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],cs=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],yd=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],Vh=e=>Math.hypot(e[0],e[1],e[2]),Xl=e=>{let t=Vh(e)||1;return[e[0]/t,e[1]/t,e[2]/t]},Yh=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],xk=(e,t)=>{let o=[e[0],e[1],e[2]],n=cs(Yh(o,t),2);return Yl(Yl(t,cs(n,e[3])),Yh(o,n))},yk=(e,t)=>{let o=Yh(e,t),n=1+yd(e,t);return n<1e-6?[0,0,1,0]:wd([o[0],o[1],o[2],n])};function ua(e,t,o){let[n,r,a,s]=t,i=n*n,c=r*r,h=a*a,f=n*r,u=n*a,d=r*a,v=s*n,l=s*r,p=s*a;return[(1-2*(c+h))*o[0],2*(f+p)*o[0],2*(u-l)*o[0],0,2*(f-p)*o[1],(1-2*(i+h))*o[1],2*(d+v)*o[1],0,2*(u+l)*o[2],2*(d-v)*o[2],(1-2*(i+c))*o[2],0,e[0],e[1],e[2],1]}function Qn(e,t){let o=new Array(16);for(let n=0;n<4;n++)for(let r=0;r<4;r++)o[n*4+r]=e[r]*t[n*4]+e[4+r]*t[n*4+1]+e[8+r]*t[n*4+2]+e[12+r]*t[n*4+3];return o}function xd(e){let t=Math.hypot(e[0],e[1],e[2]),o=Math.hypot(e[4],e[5],e[6]),n=Math.hypot(e[8],e[9],e[10]),r=e[0]/t,a=e[1]/t,s=e[2]/t,i=e[4]/o,c=e[5]/o,h=e[6]/o,f=e[8]/n,u=e[9]/n,d=e[10]/n,v=r+c+d,l;if(v>0){let p=Math.sqrt(v+1)*2;l=[(h-u)/p,(f-s)/p,(a-i)/p,p/4]}else if(r>c&&r>d){let p=Math.sqrt(1+r-c-d)*2;l=[p/4,(i+a)/p,(f+s)/p,(h-u)/p]}else if(c>d){let p=Math.sqrt(1+c-r-d)*2;l=[(i+a)/p,p/4,(u+h)/p,(f-s)/p]}else{let p=Math.sqrt(1+d-r-c)*2;l=[(f+s)/p,(u+h)/p,p/4,(a-i)/p]}return wd(l)}var Xh={LeftUpLeg:[-62,10,0],LeftLeg:[122,0,0],LeftFoot:[30,0,0],RightUpLeg:[0,-3,-2],RightLeg:[4,0,0],RightFoot:[35,-12,0],Neck:[10,0,0],Head:[6,0,0],LeftShoulder:[0,0,6],LeftArm:[-112.4,3.4,62.5],LeftForeArm:[0,-122.6,0],LeftHand:[0,0,-10],RightShoulder:[0,0,0],RightArm:[0,78,-8],RightForeArm:[0,14,0],RightHand:[0,0,0]};for(let e of["Left","Right"]){let t=e==="Left"?-1:1,o=e==="Left"?1:.35;["Index","Middle","Ring","Pinky"].forEach((n,r)=>{Xh[e+"Hand"+n+"1"]=[0,0,t*(18+r*6)*o],Xh[e+"Hand"+n+"2"]=[0,0,t*(26+r*6)*o],Xh[e+"Hand"+n+"3"]=[0,0,t*16*o]})}function ei(e,t,o){let n=e-t;return n-=Math.round(n),Math.exp(-(n/o)*(n/o))}function tx(e){let t=9+20*Math.cos(2*Math.PI*e),o=4+13*ei(e,.14,.07)+57*ei(e,.72,.12),n=5*ei(e,.06,.04)-9*ei(e,.42,.12)+17*ei(e,.62,.05)-3*ei(e,.85,.1),r=-26*ei(e,.58,.06);return{hip:t,knee:o,ankle:n,toe:r}}function bk(e){let t=(e%1+1)%1,o=tx(t),n=tx(t+.5),r=Math.cos(2*Math.PI*t),a=Math.sin(2*Math.PI*t);return{swing:{LeftArm:[16*r,0,0],RightArm:[-16*r,0,0],LeftForeArm:[0,-14-8*Math.max(0,-r),0],RightForeArm:[0,14+8*Math.max(0,r),0]},pose:{Hips:[0,5*a,1.5*Math.cos(4*Math.PI*t)],Spine1:[3,-4*a,0],LeftUpLeg:[-o.hip,0,0],LeftLeg:[o.knee,0,0],LeftFoot:[o.ankle,0,0],LeftToeBase:[o.toe,0,0],RightUpLeg:[-n.hip,0,0],RightLeg:[n.knee,0,0],RightFoot:[n.ankle,0,0],RightToeBase:[n.toe,0,0],LeftArm:[0,0,-78],RightArm:[0,0,78],LeftHand:[0,0,-8],RightHand:[0,0,8]},sway:.022*r}}var ox=`
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
}`,Kh=j0(),nx=`#extension GL_OES_standard_derivatives : enable
precision highp float;
${bd}
uniform float time;
${sx.roomGLSL()}
${Kh.lanternGLSL(Kh.TREE_LANTERN)}
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
}`;function wk(e,t){let o=e.texture({data:[[[120,100,90,255]]],min:"linear",mag:"linear"});return fetch(t).then(n=>{if(!n.ok)throw new Error("Could not load "+t);return n.blob()}).then(n=>createImageBitmap(n,{premultiplyAlpha:"none"}).catch(()=>new Promise((r,a)=>{let s=new Image;s.onload=()=>r(s),s.onerror=a,s.src=URL.createObjectURL(n)}))).then(n=>o({data:n,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(n=>console.error(n)),o}var ix={w:.13,h:.2},Wh=e=>.011*(1-Math.pow(1-e,3));function _k(){let e=[],t=[],o=[],n=[],r=[],a=(p,m,g,x,b,w,M)=>{let k=e.length/3;[p,m,g,x].forEach((z,P)=>{e.push(...z),t.push(...b),o.push(...M[P]),n.push(w)}),r.push(k,k+1,k+2,k,k+2,k+3)},{w:s,h:i}=ix,c=i/2,h=[[0,1],[1,1],[1,0],[0,0]],f=-.006,u=s+.001,d=c+.001;a([0,f,-d],[u,f,-d],[u,f,d],[0,f,d],[0,-1,0],1,[[0,1],[1,1],[1,0],[0,0]]),a([0,f+.001,-d],[0,f+.001,d],[u,f+.001,d],[u,f+.001,-d],[0,1,0],2,h),a([-u,f,-d],[0,f,-d],[0,f,d],[-u,f,d],[0,-1,0],2,h),a([-u,f+.001,-d],[-u,f+.001,d],[0,f+.001,d],[0,f+.001,-d],[0,1,0],2,h);let v=8;for(let p of[1,-1]){for(let g=0;g<v;g++){let x=g/v,b=(g+1)/v,w=(.002+x*(s-.002))*p,M=(.002+b*(s-.002))*p,k=Wh(x),z=Wh(b),P=p>0?x:1-x,R=p>0?b:1-b,U=1,q=-(z-k)/(M-w);a([w,k,-c],[M,z,-c],[M,z,c],[w,k,c],[q,U,0],3,[[P,1],[R,1],[R,0],[P,0]]),a([w,f+.001,c],[M,f+.001,c],[M,z,c],[w,k,c],[0,0,1],4,h),a([w,k,-c],[M,z,-c],[M,f+.001,-c],[w,f+.001,-c],[0,0,-1],4,h)}let m=s*p;a([m,f+.001,-c],[m,Wh(1),-c],[m,Wh(1),c],[m,f+.001,c],[p,0,0],4,h)}let l=10;for(let p=0;p<l;p++){let m=p/l,g=(p+1)/l,x=e.length/3;for(let[b,w]of[[m,-c],[g,-c],[g,c],[m,c]])e.push(b,0,w),t.push(0,1,0),o.push(b,(w+c)/i),n.push(5);r.push(x,x+1,x+2,x,x+2,x+3)}return{pos:e,nrm:t,uv:o,kind:n,idx:r}}function Mk(){if(typeof document=="undefined")return null;let e=document.createElement("canvas");e.width=512,e.height=768;let t=e.getContext("2d");t.fillStyle="#ebe5d8",t.fillRect(0,0,512,768);let o=7,n=()=>(o=o*16807%2147483647,o/2147483647),r=(s,i,c,h,f,u,d)=>{for(let v=0;v<u;v++){let l=s+(n()-.5)*c*2,p=i+(n()-.5)*h*2,m=20+n()*60,g=t.createRadialGradient(l,p,0,l,p,m);g.addColorStop(0,`rgba(${f},${d})`),g.addColorStop(1,`rgba(${f},0)`),t.fillStyle=g,t.fillRect(l-m,p-m,m*2,m*2)}},a=t.createRadialGradient(236,280,10,256,300,125);a.addColorStop(0,"#3d4866"),a.addColorStop(1,"#232a3d"),t.fillStyle=a,t.beginPath(),t.arc(256,300,122,0,Math.PI*2),t.fill(),t.fillStyle="#b8873f",t.beginPath(),t.moveTo(64,452);for(let s=64;s<=448;s+=16)t.lineTo(s,446+n()*4);for(let s=448;s>=64;s-=16)t.lineTo(s,466+n()*4);t.fill(),t.strokeStyle="#2b2f3a",t.lineCap="round",[[120,392,500,5],[160,352,530,4],[205,307,558,3]].forEach(([s,i,c,h])=>{t.lineWidth=h,t.beginPath(),t.moveTo(s,c),t.lineTo(i,c),t.stroke()});for(let s=0;s<9e3;s++)t.fillStyle=`rgba(90,80,60,${n()*.05})`,t.fillRect(n()*512,n()*768,1,1);return e}var kk=`
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
}`,Sk=`
precision highp float;
${bd}
uniform float time;
${Kh.lanternGLSL(Kh.TREE_LANTERN)}
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
}`;function Ek(){let e=[],t=[],o=[],n=[],r=[],a=[.36,.11,.07],s=[.1,.07,.05],i=[.78,.76,.72],c=[.55,.41,.26],h=[.8,.55,.22],f=[[0,-.15,h,2],[.0012,-.147,h,2],[.004,-.138,h,2],[.0058,-.125,c,2],[.0064,-.112,c,2],[.006,-.104,c,2],[.0066,-.102,i,1],[.0066,-.08,i,1],[.0062,-.074,i,1],[.0068,-.072,i,1],[.007,-.066,i,1],[.0058,-.064,a,0],[.0062,-.04,a,0],[.0058,0,a,0],[.0046,.06,a,0],[.0036,.11,a,0],[.003,.13,s,0],[.0026,.136,s,0],[0,.139,s,0]],u=16;for(let d=0;d<f.length;d++){let[v,l,p,m]=f[d],g=m===2?.45:1;for(let x=0;x<=u;x++){let b=x/u*Math.PI*2;e.push(Math.cos(b)*v,l,Math.sin(b)*v*g);let w=Math.max(d-1,0),M=Math.min(d+1,f.length-1),k=f[M][0]-f[w][0],z=f[M][1]-f[w][1],P=Math.hypot(k,z)||1;t.push(Math.cos(b)*z/P,-k/P,Math.sin(b)*z/P/g),o.push(...p),n.push(m)}}for(let d=0;d<f.length-1;d++)for(let v=0;v<u;v++){let l=d*(u+1)+v,p=l+u+1;r.push(l,p,l+1,l+1,p,p+1)}return{pos:e,nrm:t,col:o,mat:n,idx:r}}var Ak=`
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
}`,zk=`
precision highp float;
${bd}
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
}`,Tk=`
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
}`,Lk=`
precision highp float;
uniform float pulse;
varying vec2 v_c;
void main() {
	float d = length(v_c);
	float g = exp(-d * d * 6.0) * 0.10 + exp(-d * d * 30.0) * 0.08;
	gl_FragColor = vec4(vec3(1.0, 0.80, 0.45) * g * (0.75 + 0.25 * pulse), 1.0);
}`;_d.exports=e=>{let t="res/avatar/",o=null,n=Date.now(),r=()=>typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-n)/1e3,a={glowPos:[ti.x,1.9,ti.z],glow:0};Promise.all([fetch(t+"avatar.json").then(R=>R.json()),fetch(t+"avatar.bin").then(R=>R.arrayBuffer())]).then(([R,U])=>{o=h(R,U)}).catch(R=>console.error(R));let s=null;Promise.all([fetch(t+"motion.json").then(R=>R.ok?R.json():null),fetch(t+"motion.bin").then(R=>R.ok?R.arrayBuffer():null)]).then(([R,U])=>{if(!R||!U)return;let q={};for(let Q in R.clips){let D=R.clips[Q],V=D.bones.length,me=new Float32Array(U,D.mean,V*4),Ge={};D.bones.forEach((Re,be)=>{Ge[Re]=[me[be*4],me[be*4+1],me[be*4+2],me[be*4+3]]}),q[Q]=Object.assign({},D,{Q:new Int16Array(U,D.q,D.frames*V*4),H:new Float32Array(U,D.hips,D.frames*3),meanQ:Ge})}s=q}).catch(()=>{});function i(R,U){let q=R.frames,Q=R.bones.length,D=(U%q+q)%q,V=Math.floor(D)%q,me=(V+1)%q,Ge=D-Math.floor(D),Re={};for(let Ue=0;Ue<Q;Ue++){let xt=(V*Q+Ue)*4,at=(me*Q+Ue)*4,Ot=R.Q[xt],Et=R.Q[xt+1],no=R.Q[xt+2],bo=R.Q[xt+3],Yo=R.Q[at],tt=R.Q[at+1],zt=R.Q[at+2],Ft=R.Q[at+3];Ot*Yo+Et*tt+no*zt+bo*Ft<0&&(Yo=-Yo,tt=-tt,zt=-zt,Ft=-Ft),Re[R.bones[Ue]]=wd([Ot+(Yo-Ot)*Ge,Et+(tt-Et)*Ge,no+(zt-no)*Ge,bo+(Ft-bo)*Ge])}let be=V*3,re=me*3;return{q:Re,hips:[R.H[be]+(R.H[re]-R.H[be])*Ge,R.H[be+1]+(R.H[re+1]-R.H[be+1])*Ge,R.H[be+2]+(R.H[re+2]-R.H[be+2])*Ge]}}let c=e.texture({data:[[[255,255,255,255]]]});function h(R,U){let q=(W,Ee)=>new Float32Array(U,W,Ee),Q=R.bones,D=Q.length,V={};Q.forEach((W,Ee)=>{V[W.name]=Ee});let me=[];for(let W=0;W<D;W++)me.push(Array.from(q(R.ibm+W*64,16)));let Ge=Q.map(W=>ua(W.t,W.r,W.s)),Re=[];for(let W=0;W<D;W++){let Ee=Q[W].parent;Re[W]=Ee<0?Ge[W]:Qn(Re[Ee],Ge[W])}let be=Re.map(xd),re=R.meshes.map(W=>{let Ee=q(W.pos,W.n*3),ze=q(W.nrm,W.n*3),ue=q(W.uv,W.n*2),qe=new Uint8Array(U,W.jnt,W.n*4),pt=q(W.wgt,W.n*4),vt=new Uint16Array(U,W.idx,W.ni),Mt={};for(let Nt in W.morphs){let Wo=W.morphs[Nt];Mt[Nt]={idx:new Uint16Array(U,Wo.idx,Wo.n),d:q(Wo.d,Wo.n*3)}}let Ut=new Float32Array(W.n*3),Lt=new Float32Array(W.n*3),Jt=new Float32Array(W.n*3),Pt=e.buffer({data:Ut,usage:"dynamic"}),It=e.buffer({data:Lt,usage:"dynamic"}),to=/avaturn_hair/.test(W.name),St=/EyeAO|Eyelash/.test(W.name),po=/Body|Head/.test(W.name),Po=W.kind||0;return{m:W,pos:Ee,nrm:ze,uv:ue,jnt:qe,wgt:pt,idx:vt,morphs:Mt,outP:Ut,outN:Lt,work:Jt,pb:Pt,nbuf:It,tex:W.tex?wk(e,t+W.tex):c,kind:Po,alphaScale:/EyeAO/.test(W.name)?.25:1,blend:W.blend||to,alphaCut:to?.35:St?.02:0,skin:po?1:0}}),Ue=e({vert:ox,frag:nx,attributes:{position:e.prop("pb"),normal:e.prop("nb"),uv:e.prop("uv")},elements:e.prop("el"),uniforms:{tex:e.prop("tex"),alphaCut:e.prop("alphaCut"),skin:e.prop("skin"),kind:e.prop("kind"),alphaScale:e.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>k&&!z?k.lamp:[0,0,0,0],court:()=>k||z?0:1,candle:()=>z?1:0},cull:{enable:!1}}),xt=e({vert:ox,frag:nx,attributes:{position:e.prop("pb"),normal:e.prop("nb"),uv:e.prop("uv")},elements:e.prop("el"),uniforms:{tex:e.prop("tex"),alphaCut:e.prop("alphaCut"),skin:e.prop("skin"),kind:e.prop("kind"),alphaScale:e.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>k&&!z?k.lamp:[0,0,0,0],court:()=>k||z?0:1,candle:()=>z?1:0},cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"one minus src alpha"}}}),at=.3;for(let W of re)if(W.uvBuf=e.buffer(W.uv),/Body/.test(W.m.name)){let Ee=[],ze=[];for(let ue=0;ue<W.idx.length;ue+=3){let qe=W.idx[ue],pt=W.idx[ue+1],vt=W.idx[ue+2];(W.pos[qe*3+1]<at&&W.pos[pt*3+1]<at&&W.pos[vt*3+1]<at?ze:Ee).push(qe,pt,vt)}W.el=e.elements({data:new Uint16Array(Ee),type:"uint16"}),ze.length&&(W.sockEl=e.elements({data:new Uint16Array(ze),type:"uint16"}))}else W.el=e.elements({data:W.idx,type:"uint16"});let Ot=Re[V.Hips],Et=ls([1,0,0],-Math.PI/2),no=Qn(ua([ti.x-Ot[12]*zr,ti.hipY-Ot[14]*zr,ti.z+Ot[13]*zr],Et,[1,1,1]),ua([0,0,0],[0,0,0,1],[zr,zr,zr])),bo=new Array(D),Yo=-1,tt=(W,Ee,ze)=>Qn(ua([W,0,Ee],ls([0,1,0],ze),[1,1,1]),ua([0,0,0],[0,0,0,1],[zr,zr,zr])),zt=["LeftFoot","RightFoot","LeftToeBase","RightToeBase"].map(W=>V[W]),Ft=zt.map(W=>Re[W][13]*zr);function ro(W){if(s&&s.walk)return wo(W);let Ee=bk(W.phase),ze={},ue=Lt=>{for(let Jt in Lt){let Pt=Lt[Jt],It=jh(Pt[0],Pt[1],Pt[2]);ze[Jt]=ze[Jt]?rn(ze[Jt],It):It}};ue(Ee.swing),ue(Ee.pose);let qe=Math.cos(W.heading),pt=-Math.sin(W.heading),vt=tt(W.x+qe*Ee.sway,W.z+pt*Ee.sway,W.heading),Mt=new Array(D);for(let Lt=0;Lt<D;Lt++){let Jt=Q[Lt],Pt=Ge[Lt],It=ze[Jt.name];if(It){let to=be[Lt],St=rn(Xa(to),rn(It,to));Pt=ua(Jt.t,rn(Jt.r,St),Jt.s)}Mt[Lt]=Jt.parent<0?Qn(vt,Pt):Qn(Mt[Jt.parent],Pt)}let Ut=1/0;zt.forEach((Lt,Jt)=>{Ut=Math.min(Ut,Mt[Lt][13]-Ft[Jt])});for(let Lt=0;Lt<D;Lt++)Mt[Lt]=Mt[Lt].slice(),Mt[Lt][13]-=Ut,bo[Lt]=Qn(Mt[Lt],me[Lt]);return{blink:0}}function wo(W){let Ee=s.walk,ze=i(Ee,(W.phase+Ee.phase0)*Ee.frames),ue=tt(W.x,W.z,W.heading),qe=new Array(D),pt=V.Hips;for(let Mt=0;Mt<D;Mt++){let Ut=Q[Mt],Lt=Ge[Mt],Jt=ze.q[Ut.name];if(Jt){let Pt=be[Mt],It=rn(Xa(Pt),rn(Jt,Pt)),to=Mt===pt?[Ut.t[0]+ze.hips[0],Ut.t[1]+ze.hips[1],Ut.t[2]+ze.hips[2]]:Ut.t;Lt=ua(to,rn(Ut.r,It),Ut.s)}qe[Mt]=Ut.parent<0?Qn(ue,Lt):Qn(qe[Ut.parent],Lt)}let vt=1/0;zt.forEach((Mt,Ut)=>{vt=Math.min(vt,qe[Mt][13]-Ft[Ut])});for(let Mt=0;Mt<D;Mt++)qe[Mt]=qe[Mt].slice(),qe[Mt][13]-=vt,bo[Mt]=Qn(qe[Mt],me[Mt]);return{blink:0}}function ce(W,Ee){let ze=Math.sin(W*2*Math.PI/4.6),ue=Math.sin(W*.37)*.6+Math.sin(W*.83+1)*.4,qe={LeftUpLeg:[-86,-6,0],RightUpLeg:[-84,7,0],LeftLeg:[88,0,0],RightLeg:[82,0,0],LeftFoot:[-4,0,0],RightFoot:[-2,0,0],Spine:[6,0,0],Spine1:[5+ze*.8,0,0],Spine2:[4+ze*.6,0,0],Neck:[10,0,0],Head:[12+ue*2,ue*2.5,0],LeftArm:[0,0,-72],RightArm:[0,0,72],LeftForeArm:[0,-62,0],RightForeArm:[0,62,0],LeftHand:[0,0,-10],RightHand:[0,0,10]},pt={};for(let Pt in qe){let It=qe[Pt];pt[Pt]=jh(It[0],It[1],It[2])}let vt=tt(Ee.x,Ee.z,Ee.heading),Mt=new Array(D);for(let Pt=0;Pt<D;Pt++){let It=Q[Pt],to=Ge[Pt],St=pt[It.name];if(St){let po=be[Pt],Po=rn(Xa(po),rn(St,po));to=ua(It.t,rn(It.r,Po),It.s)}Mt[Pt]=It.parent<0?Qn(vt,to):Qn(Mt[It.parent],to)}let Lt=Mt[V.Hips][13]-(Ee.y+.1);for(let Pt=0;Pt<D;Pt++)Mt[Pt]=Mt[Pt].slice(),Mt[Pt][13]-=Lt,bo[Pt]=Qn(Mt[Pt],me[Pt]);let Jt=W%4.1;return{blink:Jt<.16?Math.sin(Jt/.16*Math.PI):0}}let le=W=>[Re[W][12],Re[W][13],Re[W][14]],G=(W,Ee)=>{let ze=Xl(W),ue=Xl(f0(Ee,cs(ze,yd(Ee,ze)))),qe=Yh(ze,ue);return xd([ze[0],ze[1],ze[2],0,ue[0],ue[1],ue[2],0,qe[0],qe[1],qe[2],0,0,0,0,1])},Oe={};for(let W of["Left","Right"]){let Ee=V[W+"Arm"],ze=V[W+"ForeArm"],ue=V[W+"Hand"],qe=V[W+"HandMiddle1"];Oe[W]={a:Ee,f:ze,h:ue,upper:Vh(f0(le(ze),le(Ee)))*zr,fore:Vh(f0(le(ue),le(ze)))*zr,dir0:Xl(f0(le(ze),le(Ee))),qf0:G(f0(le(ue),le(ze)),[0,1,0]),qh0:G(f0(le(qe),le(ue)),[0,1,0])}}let Qe={};for(let W of["Left","Right"])Qe[Oe[W].a]={side:W,part:0},Qe[Oe[W].f]={side:W,part:1},Qe[Oe[W].h]={side:W,part:2};function Se(W,Ee,ze){if(!W||!W.length)return{x:.5,lift:0,press:0,finger:1,busy:0};let ue=0,qe=W.length-1,pt=-1;for(;ue<=qe;){let Wo=ue+qe>>1;W[Wo].t<=Ee?(pt=Wo,ue=Wo+1):qe=Wo-1}let vt=W[W.length-1],Mt=W[0],Ut=pt>=0?W[pt]:{t:vt.t-ze,x:vt.x,w:vt.w},Lt=pt+1<W.length?W[pt+1]:{t:Mt.t+ze,x:Mt.x,w:Mt.w},Jt=Math.max(.05,Lt.t-Ut.t),Pt=Math.min(.14,Jt*.45),It=Math.max(0,Math.min(1,(Ee-Ut.t-Pt)/Math.max(Jt-Pt-.03,.02))),to=It*It*(3-2*It),St=Ee-Ut.t,po=(.55+.45*Ut.w)*Math.exp(-St/.11),Po=Lt.t-Ee,Nt=Po<.05?(.55+.45*Lt.w)*(1-Po/.05):0;return{x:Ut.x+(Lt.x-Ut.x)*to,lift:Math.sin(Math.PI*It)*Math.min(.05,.012+Jt*.03)*(Jt>2.5?.4:1),press:Math.max(po,Nt),finger:Nt>po?((pt+1)*7+3)%4:(Math.max(pt,0)*7+3)%4,busy:Math.exp(-St/.9)}}let he={lean:0,turn:0,nod:0,pedal:0,last:-1},At=["Index","Middle","Ring","Pinky"];function _(W){let Ee=sx.PLAY,ze=ex.cues,ue=ex.time(),qe=ze&&ze.dur||158,pt={Left:Se(ze&&ze.left,ue,qe),Right:Se(ze&&ze.right,ue,qe)},vt=.35;if(ze&&ze.level&&ze.level.length){let lo=ue*8,_o=Math.floor(lo)%ze.level.length,Un=(_o+1)%ze.level.length;vt=ze.level[_o]+(ze.level[Un]-ze.level[_o])*(lo-Math.floor(lo))}let Mt=he.last<0?0:Math.min(.1,Math.max(0,W-he.last));he.last=W;let Ut=lo=>Math.min(1,Mt*lo);he.lean+=(vt-he.lean)*Ut(1.2),he.turn+=(pt.Right.busy-pt.Left.busy-he.turn)*Ut(1.5),he.nod+=(Math.max(pt.Right.press,pt.Left.press*.7)-he.nod)*Ut(6),he.pedal+=((pt.Left.busy>.35?1:.15)-he.pedal)*Ut(5);let Lt=Math.sin(W*2*Math.PI/4.6),Jt=Math.sin(ue*.41)*.6+Math.sin(ue*.17+1)*.4,Pt={LeftUpLeg:[-80,-9,0],RightUpLeg:[-77,9,0],LeftLeg:[86,0,0],RightLeg:[64,0,0],LeftFoot:[-2,0,0],RightFoot:[12-10*he.pedal,0,0],Spine:[9+3.5*he.lean+Jt*1.6,he.turn*2.5,-he.turn*1.6],Spine1:[7+Lt*.8+2.5*he.lean,he.turn*2.5,-he.turn*1.2],Spine2:[6+Lt*.6+Jt*.8,he.turn*1.5,0],Neck:[13+3*he.lean,he.turn*3,0],Head:[15+he.nod*3.5+Jt*1.5,he.turn*5,Jt*1.5]};for(let lo of["Left","Right"]){let _o=lo==="Left"?-1:1,Un=pt[lo];At.forEach((X,xe)=>{let ot=xe===Un.finger?Un.press:Un.press*.2;Pt[lo+"Hand"+X+"1"]=[0,0,_o*(20+3*xe+20*ot)],Pt[lo+"Hand"+X+"2"]=[0,0,_o*(26+4*xe-6*ot)],Pt[lo+"Hand"+X+"3"]=[0,0,_o*14]}),Pt[lo+"HandThumb1"]=[0,_o*-18,_o*10]}let It={};for(let lo in Pt){let _o=Pt[lo];It[lo]=jh(_o[0],_o[1],_o[2])}let to=Re[V.Hips][13]*zr,St=Qn(ua([Ee.stoolX,Ee.stoolTop+.1-to,Ee.stoolFront+.15],ls([0,1,0],Ee.heading),[1,1,1]),ua([0,0,0],[0,0,0,1],[zr,zr,zr])),po=(Ee.keyX0+Ee.keyX1)/2,Po={};for(let lo of["Left","Right"]){let _o=pt[lo],Un=lo==="Left"?po-.4+.33*_o.x:po+.07+.33*_o.x;Po[lo]=[Un,Ee.keyTop+.062+_o.lift-_o.press*.012,Ee.keyFront+.075]}let Nt=new Array(D),Wo={},xa=[0,1,0];for(let lo=0;lo<D;lo++){let _o=Q[lo],Un=Ge[lo],X=It[_o.name],xe=Qe[lo];if(xe){let ot=Oe[xe.side];if(xe.part===0){let dt=Nt[_o.parent],gt=Qn(dt,Ge[lo]),hn=[gt[12],gt[13],gt[14]],fr=rn(xd(dt),Xa(be[_o.parent])),Nr=f0(Po[xe.side],hn),un=Vh(Nr),kr=(ot.upper+ot.fore)*.995;un>kr&&(Nr=cs(Nr,kr/un),un=kr);let dn=cs(Nr,1/un),xo=(ot.upper*ot.upper-ot.fore*ot.fore+un*un)/(2*un),tr=Math.sqrt(Math.max(0,ot.upper*ot.upper-xo*xo)),Zo=[xe.side==="Left"?-.6:.6,-.8,.3];Zo=Xl(f0(Zo,cs(dn,yd(Zo,dn))));let Bn=Yl(hn,Yl(cs(dn,xo),cs(Zo,tr)));ot.T=Yl(hn,Nr),ot.elbow=Bn;let Wr=Xl(f0(Bn,hn)),Vr=rn(yk(xk(fr,ot.dir0),Wr),fr);Wo[lo]=Vr,X=rn(Xa(fr),Vr)}else if(xe.part===1){let dt=rn(G(f0(ot.T,ot.elbow),xa),Xa(ot.qf0));Wo[lo]=dt,X=rn(Xa(Wo[_o.parent]),dt)}else{let dt=pt[xe.side],gt=rn(G([xe.side==="Left"?.12:-.12,-.2-.1*dt.press,-1],xa),Xa(ot.qh0));Wo[lo]=gt,X=rn(Xa(Wo[_o.parent]),gt)}}if(X){let ot=be[lo],dt=rn(Xa(ot),rn(X,ot));Un=ua(_o.t,rn(_o.r,dt),_o.s)}Nt[lo]=_o.parent<0?Qn(St,Un):Qn(Nt[_o.parent],Un)}for(let lo=0;lo<D;lo++)bo[lo]=Qn(Nt[lo],me[lo]);a.pianist={head:[Nt[V.Head][12],Nt[V.Head][13],Nt[V.Head][14]]};let p0=W%4.3;return{blink:p0<.16?Math.sin(p0/.16*Math.PI):0}}function _t(W,Ee){if(z)return _(W);if(k)return ce(W,k);if(Ee)return ro(Ee);let ze=Math.sin(W*2*Math.PI/4.2),ue=W%3.7,qe=ue<.16?Math.sin(ue/.16*Math.PI):0,pt=Math.sin(W*.45),vt=Math.sin(W*.31+.8),Mt=Math.max(0,Math.sin(W*.085)-.75)*4,Ut={RightArm:[0,-22*Mt,11*pt],RightForeArm:[0,8+26*Mt,0],RightHand:[38*vt,0,6*Math.sin(W*.7)],LeftUpLeg:[0,0,3.2*Math.sin(W*.36)],RightFoot:[5*Math.sin(W*.52+.4),0,0],Head:[0,1.6*Math.sin(W*.21),0]};["Index","Middle","Ring","Pinky"].forEach((St,po)=>{let Po=Math.sin(W*1.1-po*.5);Ut["RightHand"+St+"1"]=[0,0,8+12*Po],Ut["RightHand"+St+"2"]=[0,0,6+10*Po]});let Lt={},Jt=(St,po)=>{for(let Po in St){let Nt=St[Po],Wo=jh(Nt[0]*po,Nt[1]*po,Nt[2]*po);Lt[Po]=Lt[Po]?rn(Lt[Po],Wo):Wo}};Jt(Xh,1),Jt({Spine1:[ze*.8,0,0],Spine2:[ze*.6,0,0]},1),Jt(Ut,1);let Pt=new Array(D),It=new Array(D);for(let St=0;St<D;St++){let po=Q[St],Po=Ge[St],Nt=Lt[po.name];if(Nt){let Wo=be[St],xa=rn(Xa(Wo),rn(Nt,Wo));Po=ua(po.t,rn(po.r,xa),po.s)}Pt[St]=po.parent<0?Qn(no,Po):Qn(Pt[po.parent],Po),It[St]=null}for(let St=0;St<D;St++)bo[St]=Qn(Pt[St],me[St]);let to=St=>[St[12],St[13],St[14]];return a.headPos=to(Pt[V.Head]),a.hipsPos=to(Pt[V.Hips]),a.headM=Pt[V.Head],{blink:qe}}function yt(W,Ee){let{pos:ze,nrm:ue,jnt:qe,wgt:pt,outP:vt,outN:Mt,work:Ut,m:Lt}=W,Jt=Lt.n,Pt=ze;if(Ee){Ut.set(ze);for(let It in W.morphs){let to=Ee[It]||0;if(to<=0)continue;let St=W.morphs[It];for(let po=0;po<St.idx.length;po++){let Po=St.idx[po]*3;Ut[Po]+=St.d[po*3]*to,Ut[Po+1]+=St.d[po*3+1]*to,Ut[Po+2]+=St.d[po*3+2]*to}}Pt=Ut}for(let It=0;It<Jt;It++){let to=Pt[It*3],St=Pt[It*3+1],po=Pt[It*3+2],Po=ue[It*3],Nt=ue[It*3+1],Wo=ue[It*3+2],xa=0,p0=0,lo=0,_o=0,Un=0,X=0;for(let ot=0;ot<4;ot++){let dt=pt[It*4+ot];if(dt===0)continue;let gt=bo[qe[It*4+ot]];xa+=dt*(gt[0]*to+gt[4]*St+gt[8]*po+gt[12]),p0+=dt*(gt[1]*to+gt[5]*St+gt[9]*po+gt[13]),lo+=dt*(gt[2]*to+gt[6]*St+gt[10]*po+gt[14]),_o+=dt*(gt[0]*Po+gt[4]*Nt+gt[8]*Wo),Un+=dt*(gt[1]*Po+gt[5]*Nt+gt[9]*Wo),X+=dt*(gt[2]*Po+gt[6]*Nt+gt[10]*Wo)}vt[It*3]=xa,vt[It*3+1]=p0,vt[It*3+2]=lo;let xe=Math.hypot(_o,Un,X)||1;Mt[It*3]=_o/xe,Mt[It*3+1]=Un/xe,Mt[It*3+2]=X/xe}Lt.grid&&!Yt&&!k&&!z&&Gt(W),W.sway&&Uo(W),W.pb.subdata(vt),W.nbuf.subdata(Mt)}function Gt(W){let[Ee,ze]=W.m.grid,ue=W.outP,qe=W.outN,pt=rx.seat+.012;for(let vt=1;vt<Ee;vt++){let Mt=Math.pow(1-vt/(Ee-1),1.5);for(let Ut=0;Ut<ze;Ut++){let Lt=(vt*ze+Ut)*3;ue[Lt+1]>pt?ue[Lt+1]=pt+(ue[Lt+1]-pt)*Math.max(Mt,.15):ue[Lt+1]=pt}}for(let vt=0;vt<qe.length;vt+=3)qe[vt]=0,qe[vt+1]=1,qe[vt+2]=0}let Yt=!1,So=(W,Ee,ze,ue,qe)=>({bone:V[W],rate:Ee,damp:ze,drag:ue,most:qe,x:[0,0,0],v:[0,0,0],p:null,vel:[0,0,0]}),Ho={head:So("Head",15,.32,.012,.035),chest:So("Spine2",9,.38,.03,.1),hips:So("Hips",7,.42,.045,.16)},Lo=-1;function co(W){let Ee=Lo<0?0:W-Lo;Lo=W;for(let ze in Ho){let ue=Ho[ze],qe=bo[ue.bone],pt=Re[ue.bone],vt=pt[12],Mt=pt[13],Ut=pt[14],Lt=[qe[0]*vt+qe[4]*Mt+qe[8]*Ut+qe[12],qe[1]*vt+qe[5]*Mt+qe[9]*Ut+qe[13],qe[2]*vt+qe[6]*Mt+qe[10]*Ut+qe[14]];if(!ue.p||!(Ee>0)||Ee>.25||Math.hypot(Lt[0]-ue.p[0],Lt[1]-ue.p[1],Lt[2]-ue.p[2])>.5){ue.p=Lt,ue.x=[0,0,0],ue.v=[0,0,0],ue.vel=[0,0,0];continue}let Jt=[(Lt[0]-ue.p[0])/Ee,(Lt[1]-ue.p[1])/Ee,(Lt[2]-ue.p[2])/Ee],Pt=Math.max(1,Math.ceil(Ee/.016)),It=Ee/Pt;for(let St=0;St<3;St++){let po=Math.max(-30,Math.min(30,(Jt[St]-ue.vel[St])/Ee)),Po=-Jt[St]*ue.drag;for(let Nt=0;Nt<Pt;Nt++)ue.v[St]+=((Po-ue.x[St])*ue.rate*ue.rate-2*ue.damp*ue.rate*ue.v[St]-po)*It,ue.x[St]+=ue.v[St]*It}let to=Math.hypot(ue.x[0],ue.x[1],ue.x[2]);if(to>ue.most){let St=ue.most/to;ue.x=[ue.x[0]*St,ue.x[1]*St,ue.x[2]*St]}ue.p=Lt,ue.vel=Jt}}for(let W of re){let Ee=W.m,ze=Ee.n,ue=null,qe=null;if(Ee.kind===9){qe="head",ue=new Float32Array(ze);for(let pt=0;pt<ze;pt++){let vt=W.uv[pt*2]<-.5?0:W.uv[pt*2+1];ue[pt]=vt*vt}}else if(Ee.name==="scarf"){qe="chest",ue=new Float32Array(ze);for(let pt=0;pt<ze;pt++)ue[pt]=f(1.52,1.12,W.pos[pt*3+1])}else if(Ee.grid){qe="hips",ue=new Float32Array(ze);let pt=Ee.grid[0],vt=Ee.grid[1];for(let Mt=0;Mt<ze;Mt++)ue[Mt]=Math.pow(Math.floor(Mt/vt)/(pt-1),1.6)}ue&&(W.sway=ue,W.spring=Ho[qe],W.loose=qe)}function Uo(W){if(!Yt&&!z&&!k)return;let Ee=W.spring.x,ze=W.sway,ue=W.outP;if(!(Math.abs(Ee[0])+Math.abs(Ee[1])+Math.abs(Ee[2])<1e-5))for(let qe=0,pt=ze.length;qe<pt;qe++){let vt=ze[qe];vt>0&&(ue[qe*3]+=Ee[0]*vt,ue[qe*3+1]+=Ee[1]*vt,ue[qe*3+2]+=Ee[2]*vt)}}function tn(W,Ee){Yt=!!Ee;let ze=_t(W,Ee);co(W);let ue={eyeBlinkLeft:ze.blink,eyeBlinkRight:ze.blink};for(let qe of re)yt(qe,Object.keys(qe.morphs).length?ue:null);a.pose=ze}return{parts:re,update:tn,drawOpaque:Ue,drawBlend:xt,state:a}}function f(R,U,q){let Q=Math.min(1,Math.max(0,(q-R)/(U-R)));return Q*Q*(3-2*Q)}let u=_k(),d=Mk(),v=d?e.texture({data:d,flipY:!1,min:"linear",mag:"linear"}):c,l=e({vert:kk,frag:Sk,attributes:{position:u.pos,normal:u.nrm,uv:u.uv,kind:u.kind},elements:new Uint16Array(u.idx),uniforms:{model:e.prop("model"),turn:0,fold:1.12,cover:v},cull:{enable:!1}}),p=Ek(),m=e({vert:Ak,frag:zk,attributes:{position:p.pos,normal:p.nrm,color:p.col,mat:p.mat},elements:new Uint16Array(p.idx),uniforms:{model:e.prop("model"),pulse:e.prop("pulse")},cull:{enable:!1}}),g=e({vert:Tk,frag:Lk,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{center:e.prop("center"),size:e.prop("size"),pulse:e.prop("pulse")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});function x(R){let U=R.headM,q=re=>{let Ue=Math.hypot(...re)||1;return re.map(xt=>xt/Ue)},Q=q([U[4],U[5],U[6]]),D=q([U[8],U[9],U[10]]),V=Q,me=D.map(re=>-re),Ge=[me[1]*V[2]-me[2]*V[1],me[2]*V[0]-me[0]*V[2],me[0]*V[1]-me[1]*V[0]],Re=R.headPos,be=[0,1,2].map(re=>Re[re]+Q[re]*.06+D[re]*.185);return[Ge[0],Ge[1],Ge[2],0,me[0],me[1],me[2],0,V[0],V[1],V[2],0,be[0],be[1],be[2],1]}let b=-1,w="",M=null,k=null,z=!1;function P(R){if(!o)return;let U=(J3.motion,r()),q=M?[M.x,M.z,M.heading,M.phase].map(D=>D.toFixed(4)).join():"";(k||z||q!==w||!M&&Math.abs(U-b)>(J3.isPhone?1/30:0))&&(o.update(U,M),b=U,w=q);for(let D of o.parts)D.blend||(o.drawOpaque({pb:D.pb,nb:D.nbuf,uv:D.uvBuf,el:D.el,tex:D.tex,alphaCut:D.alphaCut,skin:D.skin,kind:D.kind,alphaScale:D.alphaScale}),D.sockEl&&o.drawOpaque({pb:D.pb,nb:D.nbuf,uv:D.uvBuf,el:D.sockEl,tex:c,alphaCut:0,skin:0,kind:8,alphaScale:1}));let Q=o.state;if(Q.headM&&!M&&!k&&!z){l({model:x(Q)});let D=Q.headPos,V=Math.sin(U*1.3)*.02,me=[D[0],D[1]+.62+V,D[2]+.05],Ge=U*.6,Re=ua(me,rn(ls([0,1,0],Ge),ls([0,0,1],.18)),[1.2,1.2,1.2]),be=.5+.5*Math.sin(U*2);m({model:Re,pulse:be}),a.glowPos=me,a.glow=.06+.03*be,g({center:[me[0],me[1]-.12,me[2]],size:.1,pulse:be})}for(let D of o.parts)D.blend&&o.drawBlend({pb:D.pb,nb:D.nbuf,uv:D.uvBuf,el:D.el,tex:D.tex,alphaCut:D.alphaCut,skin:D.skin,kind:D.kind,alphaScale:D.alphaScale})}return P.state=a,P.place=ti,P.setWalk=R=>{M=R||null,M&&(a.glow=0)},P.setSeat=R=>{k=R||null,a.glow=k?0:a.glow,b=-1},P.setPiano=R=>{R=!!R,R!==z&&(z=R,z&&(a.glow=0),b=-1)},P};_d.exports.PLACE=ti});var Md=ke((mz,lx)=>{"use strict";lx.exports={name:"Muzammil",title:"Hi, I\u2019m Muzammil.",text:`I\u2019m a self-taught artist. I paint emotions. Grief, longing, love, and the quiet ways we keep holding on. I borrow the light and stillness of the Renaissance to talk about very modern feelings.

This gallery is my portfolio, built brick by pixel, so my work has a home that never closes. Every painting comes with a few words, because some feelings need both a frame and a sentence.

You\u2019ll find me in the tree court, catching sunlight and trying not to get too absorbed. Wander the halls, stay as long as you like, and don\u2019t worry about the time. In here, the only thing that\u2019s drying is the paint.`}});var Sd=ke((gz,vx)=>{"use strict";var dx=Ma(),fx=il(),fs=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function kd(){return dx.isPhone||!window.matchMedia||!window.matchMedia("(pointer: fine)").matches?!1:window.innerWidth>=900&&window.innerHeight>=520}var Nk=`
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
`,hx=!1;function px(){if(hx)return;hx=!0;let e=document.createElement("style");e.textContent=Nk,document.head.appendChild(e)}var Rk='<svg class="visit-play" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="10.2"/><path d="M10 8.4l6 3.6-6 3.6z" fill="currentColor" stroke="none"/></svg>';function Ok(e){return!e||!e.visit||!kd()?"":(px(),`<button type="button" class="visit-btn" data-visit="${fs(e.slug||"")}" aria-label="Visit what remained: watch ${fs(e.title)} come to life">${Rk}<span>Visit what remained</span></button>`)}function Ck(e){let t=e.getContext("2d");e.width=e.height=160;let o=t.createImageData(160,160),n=!0,r=0;return function a(s){if(n){if(s-r>70){r=s;let i=o.data;for(let c=0;c<i.length;c+=4){let h=Math.random()*255;i[c]=i[c+1]=i[c+2]=h,i[c+3]=255}t.putImageData(o,0,0),e.style.transform=`translate(${(Math.random()*6-3).toFixed(1)}%, ${(Math.random()*6-3).toFixed(1)}%)`}requestAnimationFrame(a)}}(0),()=>{n=!1}}var Kl=null;function Pk(e){if(Kl||!e||!e.visit)return;px();let t=document.activeElement;document.body.classList.add("visiting");let o="images/web/"+e.slug+(dx.isPhone?"-1024":"")+".webp",n=document.createElement("div");n.className="visit",n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.setAttribute("aria-label","Visiting "+e.title),n.innerHTML=`
		<video muted playsinline preload="auto" ${e.visit.poster?`poster="${fs(e.visit.poster)}"`:""}></video>
		<img class="visit-art" alt="${fs(e.title)}, ${fs(fx(e))}" src="${fs(o)}">
		<canvas class="visit-grain" aria-hidden="true"></canvas>
		<div class="visit-vignette" aria-hidden="true"></div>
		<div class="visit-bar top" aria-hidden="true"></div>
		<div class="visit-bar bottom" aria-hidden="true"></div>
		<div class="visit-title">
			<span class="visit-kicker">A visit</span>
			<span class="visit-name">${fs(e.title)}</span>
			<span class="visit-meta">${fs(fx(e))}</span>
		</div>
		<button type="button" class="visit-close" aria-label="Return to the gallery">\xD7</button>
		<button type="button" class="visit-skip">Skip</button>
		<div class="visit-end">
			<button type="button" class="primary" data-act="back">Return to the gallery</button>
			<button type="button" data-act="again">Watch again</button>
		</div>`,document.body.appendChild(n);let r=n.querySelector("video"),a=n.querySelector(".visit-title"),s=Ck(n.querySelector(".visit-grain")),i=[],c=(m,g)=>i.push(setTimeout(m,g)),h=m=>m.stopPropagation();["mousedown","pointerdown","click","wheel","touchstart","touchmove"].forEach(m=>n.addEventListener(m,h));let f=m=>{m.key==="Escape"?(m.preventDefault(),p()):m.key===" "&&!(m.target&&m.target.tagName==="BUTTON")&&(m.preventDefault(),v()),m.stopImmediatePropagation()};window.addEventListener("keydown",f,!0);let u=m=>m.stopImmediatePropagation();window.addEventListener("keyup",u,!0);let d=!1;function v(){d||(d=!0,a.classList.add("on"),n.classList.add("resolved"),c(()=>{let m=n.querySelector('[data-act="back"]');m&&m.focus({preventScroll:!0})},1300))}function l(){d=!1,n.classList.remove("resolved"),a.classList.remove("on");try{r.currentTime=0}catch(g){}let m=r.play();m&&m.catch&&m.catch(()=>v()),n.classList.add("playing"),c(()=>{d||a.classList.add("on")},1600),c(()=>{d||a.classList.remove("on")},6200)}r.addEventListener("timeupdate",()=>{r.duration&&r.currentTime>r.duration-1.2&&v()}),r.addEventListener("ended",v),r.addEventListener("error",v);function p(){if(Kl){Kl=null,i.forEach(clearTimeout),n.classList.remove("on");try{r.pause()}catch(m){}window.removeEventListener("keydown",f,!0),window.removeEventListener("keyup",u,!0),document.body.classList.remove("visiting"),setTimeout(()=>{s(),n.remove(),t&&t.focus&&t.focus({preventScroll:!0})},1150)}}n.querySelector(".visit-close").addEventListener("click",p),n.querySelector(".visit-skip").addEventListener("click",()=>{try{r.pause()}catch(m){}v()}),n.querySelector(".visit-end").addEventListener("click",m=>{let g=m.target.closest("button");g&&(g.dataset.act==="back"&&p(),g.dataset.act==="again"&&(i.forEach(clearTimeout),l()))}),r.src=e.visit.video,Kl={close:p},requestAnimationFrame(()=>{n.classList.add("on"),c(l,1300)})}var ux={};function Ik(e){if(!e||!e.visit||ux[e.visit.video]||!kd())return;ux[e.visit.video]=!0;let t=document.createElement("link");t.rel="preload",t.as="video",t.href=e.visit.video,document.head.appendChild(t)}vx.exports={available:kd,button:Ok,open:Pk,warm:Ik,get active(){return!!Kl}}});var xx=ke((xz,gx)=>{"use strict";var $k=Ma(),wc=[0,0],gc=[0,0],N0=null,Ad=0;if(typeof window!="undefined"){window.addEventListener("pointermove",t=>{t.pointerType!=="touch"&&(wc[0]=Math.max(-1,Math.min(1,t.clientX/window.innerWidth*2-1)),wc[1]=Math.max(-1,Math.min(1,t.clientY/window.innerHeight*2-1)),Ad=performance.now())},{passive:!0});let e=()=>{Ad=performance.now()};["wheel","touchstart","touchmove","keydown","pointerdown"].forEach(t=>window.addEventListener(t,e,{passive:!0,capture:!0})),window.addEventListener("deviceorientation",t=>{t.gamma===null||t.beta===null||(N0||(N0=[t.gamma,t.beta]),N0[0]+=(t.gamma-N0[0])*.01,N0[1]+=(t.beta-N0[1])*.01,wc[0]=Math.max(-1,Math.min(1,(t.gamma-N0[0])/14)),wc[1]=Math.max(-1,Math.min(1,(t.beta-N0[1])/14)))},{passive:!0})}var mx=0,xc=null,Qh=null,h0=[0,0,0],Ed=0,yc=null,bc=0,oi={eye:[0,0,0],target:[0,0,0],fov:50,roll:0},Fk={apply(e,t){let o=Math.min(.1,Math.max(0,t-mx));mx=t;let n=e.eye,r=e.target,a=[r[0]-n[0],r[1]-n[1],r[2]-n[2]],s=Math.hypot(a[0],a[1],a[2])||1;a=[a[0]/s,a[1]/s,a[2]/s];let i=[-a[2],0,a[0]],c=Math.hypot(i[0],i[2])||1;i=[i[0]/c,0,i[2]/c];let h=[i[1]*a[2]-i[2]*a[1],i[2]*a[0]-i[0]*a[2],i[0]*a[1]-i[1]*a[0]],f=!xc;if(xc&&o>0){let b=[n[0]-xc[0],n[1]-xc[1],n[2]-xc[2]],w=Math.hypot(b[0],b[1],b[2]);if(w>2.5)f=!0;else{let k=Math.min(1,o*5);for(let z=0;z<3;z++)h0[z]+=(b[z]/o-h0[z])*k}let M=Math.hypot(r[0]-Qh[0],r[1]-Qh[1],r[2]-Qh[2]);bc=w/o<.12&&M/o<.2?bc+o:0}f&&(h0[0]=h0[1]=h0[2]=0,bc=0),xc=n.slice(),Qh=r.slice(),Ed=Math.hypot(h0[0],h0[1],h0[2]);let u=Math.min(1,o*2.6);gc[0]+=(wc[0]-gc[0])*u,gc[1]+=(wc[1]-gc[1])*u;let d=Math.max(.03,Math.min(.32,s*.05)),v=($k.isPhone&&!N0?1.5:1)*Math.min(1,bc/2.5),l=(Math.sin(t*.131)*.55+Math.sin(t*.071+1.3)*.45)*d*.55*v,p=Math.sin(t*.097+.6)*d*.16*v,m=gc[0]*d+l,g=-gc[1]*d*.45+p;for(let b=0;b<3;b++)oi.eye[b]=n[b]+i[b]*m+h[b]*g,oi.target[b]=r[b]+(i[b]*m+h[b]*g)*.12;n[1]>.05&&(oi.eye[1]=Math.max(.05,oi.eye[1]));let x=h0[0]*i[0]+h0[2]*i[2];return oi.fov=e.fov+Math.min(3.5,Ed*.55),oi.roll=(e.roll||0)+Math.max(-.035,Math.min(.035,-x*.006)),oi},pull(e,t){(yc===null||!(Math.abs(e.focus-yc)<40))&&(yc=e.focus);let o=1/60;yc+=(e.focus-yc)*Math.min(1,o*3.2),e.focus=yc,e.aperture>0&&(e.aperture*=1+.25*Math.min(1,bc/3))},get speed(){return Ed},get resting(){return bc>2&&performance.now()-Ad>2e3}};gx.exports=Fk});var zd=ke((yz,yx)=>{yx.exports=1e-6});var Td=ke((bz,bx)=>{bx.exports=qk;function qk(){var e=new Float32Array(3);return e[0]=0,e[1]=0,e[2]=0,e}});var _x=ke((wz,wx)=>{wx.exports=Dk;function Dk(e){var t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}});var Ld=ke((_z,Mx)=>{Mx.exports=Gk;function Gk(e,t,o){var n=new Float32Array(3);return n[0]=e,n[1]=t,n[2]=o,n}});var Nd=ke((Mz,kx)=>{kx.exports=Hk;function Hk(e,t){var o=t[0],n=t[1],r=t[2],a=o*o+n*n+r*r;return a>0&&(a=1/Math.sqrt(a),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a),e}});var Rd=ke((kz,Sx)=>{Sx.exports=Uk;function Uk(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}});var Tx=ke((Sz,zx)=>{zx.exports=jk;var Ex=Ld(),Ax=Nd(),Bk=Rd();function jk(e,t){var o=Ex(e[0],e[1],e[2]),n=Ex(t[0],t[1],t[2]);Ax(o,o),Ax(n,n);var r=Bk(o,n);return r>1?0:Math.acos(r)}});var Nx=ke((Ez,Lx)=>{Lx.exports=Wk;function Wk(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}});var Ox=ke((Az,Rx)=>{Rx.exports=Vk;function Vk(e,t,o,n){return e[0]=t,e[1]=o,e[2]=n,e}});var Px=ke((zz,Cx)=>{Cx.exports=Xk;var Od=zd();function Xk(e,t){var o=e[0],n=e[1],r=e[2],a=t[0],s=t[1],i=t[2];return Math.abs(o-a)<=Od*Math.max(1,Math.abs(o),Math.abs(a))&&Math.abs(n-s)<=Od*Math.max(1,Math.abs(n),Math.abs(s))&&Math.abs(r-i)<=Od*Math.max(1,Math.abs(r),Math.abs(i))}});var $x=ke((Tz,Ix)=>{Ix.exports=Yk;function Yk(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}});var qx=ke((Lz,Fx)=>{Fx.exports=Kk;function Kk(e,t,o){return e[0]=t[0]+o[0],e[1]=t[1]+o[1],e[2]=t[2]+o[2],e}});var Cd=ke((Nz,Dx)=>{Dx.exports=Qk;function Qk(e,t,o){return e[0]=t[0]-o[0],e[1]=t[1]-o[1],e[2]=t[2]-o[2],e}});var Hx=ke((Rz,Gx)=>{Gx.exports=Cd()});var Pd=ke((Oz,Ux)=>{Ux.exports=Zk;function Zk(e,t,o){return e[0]=t[0]*o[0],e[1]=t[1]*o[1],e[2]=t[2]*o[2],e}});var jx=ke((Cz,Bx)=>{Bx.exports=Pd()});var Id=ke((Pz,Wx)=>{Wx.exports=Jk;function Jk(e,t,o){return e[0]=t[0]/o[0],e[1]=t[1]/o[1],e[2]=t[2]/o[2],e}});var Xx=ke((Iz,Vx)=>{Vx.exports=Id()});var Kx=ke(($z,Yx)=>{Yx.exports=eS;function eS(e,t,o){return e[0]=Math.min(t[0],o[0]),e[1]=Math.min(t[1],o[1]),e[2]=Math.min(t[2],o[2]),e}});var Zx=ke((Fz,Qx)=>{Qx.exports=tS;function tS(e,t,o){return e[0]=Math.max(t[0],o[0]),e[1]=Math.max(t[1],o[1]),e[2]=Math.max(t[2],o[2]),e}});var ey=ke((qz,Jx)=>{Jx.exports=oS;function oS(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e}});var oy=ke((Dz,ty)=>{ty.exports=nS;function nS(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e}});var ry=ke((Gz,ny)=>{ny.exports=rS;function rS(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e}});var sy=ke((Hz,ay)=>{ay.exports=aS;function aS(e,t,o){return e[0]=t[0]*o,e[1]=t[1]*o,e[2]=t[2]*o,e}});var cy=ke((Uz,iy)=>{iy.exports=sS;function sS(e,t,o,n){return e[0]=t[0]+o[0]*n,e[1]=t[1]+o[1]*n,e[2]=t[2]+o[2]*n,e}});var $d=ke((Bz,ly)=>{ly.exports=iS;function iS(e,t){var o=t[0]-e[0],n=t[1]-e[1],r=t[2]-e[2];return Math.sqrt(o*o+n*n+r*r)}});var hy=ke((jz,fy)=>{fy.exports=$d()});var Fd=ke((Wz,uy)=>{uy.exports=cS;function cS(e,t){var o=t[0]-e[0],n=t[1]-e[1],r=t[2]-e[2];return o*o+n*n+r*r}});var py=ke((Vz,dy)=>{dy.exports=Fd()});var qd=ke((Xz,vy)=>{vy.exports=lS;function lS(e){var t=e[0],o=e[1],n=e[2];return Math.sqrt(t*t+o*o+n*n)}});var gy=ke((Yz,my)=>{my.exports=qd()});var Dd=ke((Kz,xy)=>{xy.exports=fS;function fS(e){var t=e[0],o=e[1],n=e[2];return t*t+o*o+n*n}});var by=ke((Qz,yy)=>{yy.exports=Dd()});var _y=ke((Zz,wy)=>{wy.exports=hS;function hS(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}});var ky=ke((Jz,My)=>{My.exports=uS;function uS(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e}});var Ey=ke((eT,Sy)=>{Sy.exports=dS;function dS(e,t,o){var n=t[0],r=t[1],a=t[2],s=o[0],i=o[1],c=o[2];return e[0]=r*c-a*i,e[1]=a*s-n*c,e[2]=n*i-r*s,e}});var zy=ke((tT,Ay)=>{Ay.exports=pS;function pS(e,t,o,n){var r=t[0],a=t[1],s=t[2];return e[0]=r+n*(o[0]-r),e[1]=a+n*(o[1]-a),e[2]=s+n*(o[2]-s),e}});var Ly=ke((oT,Ty)=>{Ty.exports=vS;function vS(e,t){t=t||1;var o=Math.random()*2*Math.PI,n=Math.random()*2-1,r=Math.sqrt(1-n*n)*t;return e[0]=Math.cos(o)*r,e[1]=Math.sin(o)*r,e[2]=n*t,e}});var Ry=ke((nT,Ny)=>{Ny.exports=mS;function mS(e,t,o){var n=t[0],r=t[1],a=t[2],s=o[3]*n+o[7]*r+o[11]*a+o[15];return s=s||1,e[0]=(o[0]*n+o[4]*r+o[8]*a+o[12])/s,e[1]=(o[1]*n+o[5]*r+o[9]*a+o[13])/s,e[2]=(o[2]*n+o[6]*r+o[10]*a+o[14])/s,e}});var Cy=ke((rT,Oy)=>{Oy.exports=gS;function gS(e,t,o){var n=t[0],r=t[1],a=t[2];return e[0]=n*o[0]+r*o[3]+a*o[6],e[1]=n*o[1]+r*o[4]+a*o[7],e[2]=n*o[2]+r*o[5]+a*o[8],e}});var Iy=ke((aT,Py)=>{Py.exports=xS;function xS(e,t,o){var n=t[0],r=t[1],a=t[2],s=o[0],i=o[1],c=o[2],h=o[3],f=h*n+i*a-c*r,u=h*r+c*n-s*a,d=h*a+s*r-i*n,v=-s*n-i*r-c*a;return e[0]=f*h+v*-s+u*-c-d*-i,e[1]=u*h+v*-i+d*-s-f*-c,e[2]=d*h+v*-c+f*-i-u*-s,e}});var Fy=ke((sT,$y)=>{$y.exports=yS;function yS(e,t,o,n){var r=o[1],a=o[2],s=t[1]-r,i=t[2]-a,c=Math.sin(n),h=Math.cos(n);return e[0]=t[0],e[1]=r+s*h-i*c,e[2]=a+s*c+i*h,e}});var Dy=ke((iT,qy)=>{qy.exports=bS;function bS(e,t,o,n){var r=o[0],a=o[2],s=t[0]-r,i=t[2]-a,c=Math.sin(n),h=Math.cos(n);return e[0]=r+i*c+s*h,e[1]=t[1],e[2]=a+i*h-s*c,e}});var Hy=ke((cT,Gy)=>{Gy.exports=wS;function wS(e,t,o,n){var r=o[0],a=o[1],s=t[0]-r,i=t[1]-a,c=Math.sin(n),h=Math.cos(n);return e[0]=r+s*h-i*c,e[1]=a+s*c+i*h,e[2]=t[2],e}});var By=ke((lT,Uy)=>{Uy.exports=_S;var hs=Td()();function _S(e,t,o,n,r,a){var s,i;for(t||(t=3),o||(o=0),n?i=Math.min(n*t+o,e.length):i=e.length,s=o;s<i;s+=t)hs[0]=e[s],hs[1]=e[s+1],hs[2]=e[s+2],r(hs,hs,a),e[s]=hs[0],e[s+1]=hs[1],e[s+2]=hs[2];return e}});var Wy=ke((fT,jy)=>{jy.exports={EPSILON:zd(),create:Td(),clone:_x(),angle:Tx(),fromValues:Ld(),copy:Nx(),set:Ox(),equals:Px(),exactEquals:$x(),add:qx(),subtract:Cd(),sub:Hx(),multiply:Pd(),mul:jx(),divide:Id(),div:Xx(),min:Kx(),max:Zx(),floor:ey(),ceil:oy(),round:ry(),scale:sy(),scaleAndAdd:cy(),distance:$d(),dist:hy(),squaredDistance:Fd(),sqrDist:py(),length:qd(),len:gy(),squaredLength:Dd(),sqrLen:by(),negate:_y(),inverse:ky(),normalize:Nd(),dot:Rd(),cross:Ey(),lerp:zy(),random:Ly(),transformMat4:Ry(),transformMat3:Cy(),transformQuat:Iy(),rotateX:Fy(),rotateY:Dy(),rotateZ:Hy(),forEach:By()}});var Yy=ke((hT,Xy)=>{"use strict";function Vy(){let e={};return{on(t,o){return(e[t]=e[t]||[]).push(o),this},emit(t,o){(e[t]||[]).slice().forEach(n=>n(o))}}}Xy.exports=function(t){let o=t.ownerDocument||document,n=Vy(),r=null,a={dx:0,dy:0,dt:0},s=0,i=()=>o.pointerLockElement||o.webkitPointerLockElement||null,c=()=>{if(i())return;let f=t.requestPointerLock||t.webkitRequestPointerLock;if(f)try{let u=f.call(t);u&&u.catch&&u.catch(()=>{})}catch(u){}};t.addEventListener("mousedown",c,!1);let h=()=>{if(!i()){r&&(n.emit("release"),r.emit("end"),r=null);return}r=Vy(),s=Date.now(),n.emit("attain",r)};return o.addEventListener("pointerlockchange",h),o.addEventListener("webkitpointerlockchange",h),o.addEventListener("pointerlockerror",()=>n.emit("error")),(o.body||t).addEventListener("mousemove",f=>{r&&(a.dx=f.movementX||f.webkitMovementX||0,a.dy=f.movementY||f.webkitMovementY||0,a.dt=Date.now()-s,n.emit("data",a),r.emit("data",a))},!1),n.request=c,n.target=i,n.release=()=>{i()&&(o.exitPointerLock||o.webkitExitPointerLock).call(o)},n}});var e5=ke((pT,Jy)=>{"use strict";var ni=tc(),ri=Wy(),MS=Yy(),uT=Math.PI/4,dT=Math.PI/6,Ky=2,kS=1,SS=2.4,ES=2.4,AS=1e3,zS=5,TS=7,Gd=br().C,Ql=[[7,1.6],[7,Gd.zc],[Gd.x1-2.95,Gd.zc]],us=Ql.slice(1).map((e,t)=>{let o=Ql[t],n=e[0]-o[0],r=e[1]-o[1],a=Math.hypot(n,r);return{a:o,len:a,dir:[n/a,r/a]}}),Hd=us.reduce((e,t)=>e+t.len,0);function Qy(e){let t=Math.max(0,Math.min(Hd,e));for(let n of us){if(t<=n.len)return[n.a[0]+n.dir[0]*t,n.a[1]+n.dir[1]*t];t-=n.len}let o=Ql[Ql.length-1];return[o[0],o[1]]}function LS(e){let t=0;for(let n=0;n<us.length;n++){let r=us[n],a=t+r.len;if(e<a-1e-4||n===us.length-1){let s=r.dir,c=e<=t+1e-4&&n>0?us[n-1].dir:r.dir;return{ahead:s,back:[-c[0],-c[1]]}}t=a}let o=us[us.length-1].dir;return{ahead:o,back:[-o[0],-o[1]]}}var NS=Math.PI/4,RS=7,OS=140,CS=70,Zy=(e,t,o)=>(1-e)*t+e*o,PS=e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2;Jy.exports=function({getGridSegments:e,getGridParts:t},o){var n=[0,Math.PI],r=[0,Math.PI],a=0,s=[0,0,0],i=[TS,Ky,Ql[0][1]],c=0,h=1,f=0,u=[.707,0,.707],d=[0,1,0],v=[0,0,0],l=.5,p=ni.identity([]),m=ni.identity([]),g=!1,x=[0,0,0],b=[0,0,0],w=1,M=!1;let k=tt=>{n[1]+=tt*NS},z=(tt,zt,Ft)=>{if(tt=Math.max(Math.min(tt,100),-100),zt=Math.max(Math.min(zt,100),-100),n[0]=0,M){a=0;return}for(a+=tt;a>=Ft;)k(1),a-=Ft;for(;a<=-Ft;)k(-1),a+=Ft};MS(document.body).on("attain",tt=>{tt.on("data",zt=>{z(zt.dx,zt.dy,OS)})});let R=null,U=null,q=0,Q={x:0,y:0},D=58,V=document.createElement("div");V.id="museum-mobile-controls",V.innerHTML=`

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
	`,document.body.appendChild(V);let me=V.querySelector("#museum-joystick"),Ge=V.querySelector("#museum-joystick-knob"),Re=()=>{Ge.style.transform="translate(-50%, -50%)",s[0]=0,s[2]=0},be=tt=>{let zt=tt.clientX-Q.x,Ft=tt.clientY-Q.y,ro=Math.hypot(zt,Ft);if(ro>D&&(zt=zt/ro*D,Ft=Ft/ro*D),Ge.style.transform=`translate(
				calc(-50% + ${zt}px),
				calc(-50% + ${Ft}px)
			)`,ro<10){s[0]=0,s[2]=0;return}let ce=zt/D,le=Ft/D;s[0]=0,s[2]=Math.abs(le)>.15?le:0},re=(tt,zt)=>{for(let Ft=0;Ft<tt.length;Ft++)if(tt[Ft].identifier===zt)return tt[Ft];return null},Ue=tt=>!!(tt&&tt.closest&&tt.closest(".painting-plaque, .story-overlay, .story-card, .story-close, button")),xt=tt=>{if(!Ue(tt.target)&&(tt.cancelable&&tt.preventDefault(),!M))for(let zt=0;zt<tt.changedTouches.length;zt++){let Ft=tt.changedTouches[zt];if(R===null&&Ft.clientX<window.innerWidth*.48){R=Ft.identifier;let ro=me.getBoundingClientRect();Q.x=ro.left+ro.width/2,Q.y=ro.top+ro.height/2,be(Ft)}else U===null&&Ft.clientX>=window.innerWidth*.48&&(U=Ft.identifier,q=Ft.clientX,a=0)}},at=tt=>{if(Ue(tt.target)||(tt.cancelable&&tt.preventDefault(),M))return;let zt=R===null?null:re(tt.touches,R);zt&&be(zt);let Ft=U===null?null:re(tt.touches,U);if(Ft){let ro=Ft.clientX-q;q=Ft.clientX,z(ro,0,CS)}},Ot=tt=>{if(!Ue(tt.target)){tt.cancelable&&tt.preventDefault();for(let zt=0;zt<tt.changedTouches.length;zt++){let Ft=tt.changedTouches[zt];Ft.identifier===R&&(R=null,Re()),Ft.identifier===U&&(U=null)}}};document.addEventListener("touchstart",xt,{passive:!1}),document.addEventListener("touchmove",at,{passive:!1}),document.addEventListener("touchend",Ot,{passive:!1}),document.addEventListener("touchcancel",Ot,{passive:!1});let Et=document.createElement("style");Et.textContent=`

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
	`,document.head.appendChild(Et);var no={};let bo=tt=>{if(tt.defaultPrevented||tt.ctrlKey||tt.altKey||tt.metaKey)return;let zt=tt.type==="keydown";no[tt.code]=zt,zt&&!tt.repeat&&!M&&((tt.code==="KeyA"||tt.code==="ArrowLeft")&&k(-1),(tt.code==="KeyD"||tt.code==="ArrowRight")&&k(1)),g=!1;let Ft=no.KeyW||no.ArrowUp?1:0;s=[0,0,(no.KeyS||no.ArrowDown?1:0)-Ft],tt.preventDefault()};window.addEventListener("keydown",bo),window.addEventListener("keyup",bo);var Yo=0;return{pos:i,fmouse:r,forward:u,up:d,setPaused:tt=>{M=!!tt,M&&(s[0]=0,s[2]=0,Re())},place:(tt,zt)=>{c=Math.max(0,Math.min(Hd,tt));let Ft=Qy(c);i[0]=Ft[0],i[2]=Ft[1],n[1]=zt,r[1]=zt,a=0,h=1},view:()=>p,proj:()=>(ni.perspective(m,o(),window.innerWidth/window.innerHeight,.1,700),m),tick:({time:tt})=>{let zt=tt-Yo;Yo=tt;let Ft=[0,0,0],ro=[];ri.set(u,Math.sin(r[1]),0,-Math.cos(r[1])),ri.set(d,0,1,0);let wo=g?ES:SS,ce=Math.sin(n[1]),le=-Math.cos(n[1]),G=LS(c),Oe=ce*G.ahead[0]+le*G.ahead[1],Qe=ce*G.back[0]+le*G.back[1],Se=h;Math.max(Oe,Qe)>.3&&(Se=Oe>=Qe?1:-1);let he=M?0:-s[2]*wo;f+=(he-f)*(1-Math.exp(-Math.min(zt,.1)*5.5)),he===0&&Math.abs(f)<.01&&(f=0);let At=f*Se*Math.min(zt,.1);M&&(s[0]=0,s[2]=0,At=0,f=0),At!==0&&(h=Math.sign(At)*Math.sign(-s[2]||1)),c=Math.max(0,Math.min(Hd,c+At));let _=Qy(c);ri.set(v,_[0]-i[0],0,_[1]-i[2]);let _t=ri.len(v);_t===0&&l!==.25&&(l=(Math.abs((l+.5)%1-.5)-.25)*.8+.25,(l+.01)%.25<.02&&(l=.25));let yt=l;if(l+=_t/(g?zS:AS),i[1]=Ky,ri.add(i,i,v),w<1){w+=zt/kS,w=Math.min(w,1);let Gt=PS(w);ri.set(i,Zy(Gt,x[0],b[0]),i[1],Zy(Gt,x[2],b[2]))}r[0]=0,r[1]+=(n[1]-r[1])*Math.min(1,Math.min(zt,.1)*RS),Math.abs(n[1]-r[1])<5e-4&&(r[1]=n[1]),ni.identity(p),ni.rotateX(p,p,0),ni.rotateY(p,p,r[1]),ni.translate(p,p,ri.scale(Ft,i,-1))}}}});var n5=ke((vT,o5)=>{"use strict";var{skylightGLSL:IS,Z_START:$S,Z_END:FS,GLASS_Y:qS}=Ui(),{oculusGLSL:DS,A:ai}=Ea(),{windowLightGLSL:GS,C:Zh}=br(),{doorLightGLSL:HS}=H0(),Jh=ar(),Zl=Eh(),t5=Us(),La=e=>e.toFixed(4),Ud=.1,Bd=700,_c={exposure:.88,shafts:1,bloom:1,vignette:.42,grain:.032};function US(e,t){let o=t[0],n=t[1],r=t[2],a=t[3],s=t[4],i=t[5],c=t[6],h=t[7],f=t[8],u=t[9],d=t[10],v=t[11],l=t[12],p=t[13],m=t[14],g=t[15],x=o*i-n*s,b=o*c-r*s,w=o*h-a*s,M=n*c-r*i,k=n*h-a*i,z=r*h-a*c,P=f*p-u*l,R=f*m-d*l,U=f*g-v*l,q=u*m-d*p,Q=u*g-v*p,D=d*g-v*m,V=x*D-b*Q+w*q+M*U-k*R+z*P;return V?(V=1/V,e[0]=(i*D-c*Q+h*q)*V,e[1]=(r*Q-n*D-a*q)*V,e[2]=(p*z-m*k+g*M)*V,e[3]=(d*k-u*z-v*M)*V,e[4]=(c*U-s*D-h*R)*V,e[5]=(o*D-r*U+a*R)*V,e[6]=(m*w-l*z-g*b)*V,e[7]=(f*z-d*w+v*b)*V,e[8]=(s*Q-i*U+h*P)*V,e[9]=(n*U-o*Q-a*P)*V,e[10]=(l*k-p*w+g*x)*V,e[11]=(u*w-f*k-v*x)*V,e[12]=(i*R-s*q-c*P)*V,e[13]=(o*q-n*R+r*P)*V,e[14]=(p*b-l*M-m*x)*V,e[15]=(f*M-u*b+d*x)*V,e):null}function BS(e,t,o){let n=new Array(16);for(let r=0;r<4;r++)for(let a=0;a<4;a++){let s=0;for(let i=0;i<4;i++)s+=t[i*4+a]*o[r*4+i];n[r*4+a]=s}for(let r=0;r<16;r++)e[r]=n[r];return e}var jS=`
precision highp float;
attribute vec2 position;
varying vec2 uv;
void main() {
	uv = position * 0.5 + 0.5;
	gl_Position = vec4(position, 0.0, 1.0);
}`;o5.exports=(e,t)=>{let o=!!t.isPhone,n=e.hasExtension("webgl_depth_texture"),r=o?10:18,a=()=>t.post>=2?2:4,s=re=>e.texture(Object.assign({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"},re||{})),i=()=>e.framebuffer({color:s(),depth:!1}),c=s(),h=n?e.texture({width:4,height:4,format:"depth",type:"uint32"}):null,f=e.framebuffer({color:c,depth:h||!0}),u=[i(),i()],d=[i(),i()],v=[i(),i()],l=[i(),i()],p=new Array(16).fill(0),m=new Array(16).fill(0),g=[0,0,0],x={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},b={position:[-1,-1,3,-1,-1,3]},w=(re,Ue,xt)=>e(Object.assign({vert:jS,frag:re,attributes:b,count:3,depth:{enable:!1,mask:!1},cull:{enable:!1},blend:{enable:!1},uniforms:Ue,framebuffer:e.prop("out")},xt||{})),M=[2.6,0,$S-3.2,12.6,qS,FS+.4],k=[ai.x0-.2,0,ai.z0,ai.x1,ai.domeTop,ai.z1],z=[Zh.x0,0,Zh.z0,Zh.x1,7.6,Zh.z1],P=[.35,0,.35,13.65,7.6,9],R=t5.AIR_BOX,U=re=>`vec3(${La(re[0])}, ${La(re[1])}, ${La(re[2])}), vec3(${La(re[3])}, ${La(re[4])}, ${La(re[5])})`,q=w(`
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

	${IS()}
	${DS()}
	${GS()}
	${HS()}
	${t5.sunGLSL()}

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
			vec2 t = hitBox(eye, rd, ${U(M)});
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
			vec2 t = hitBox(eye, rd, ${U(k)});
			t.y = min(t.y, len);
			if (t.y > t.x) {
				float st = (t.y - t.x) / float(N);
				float acc = 0.0;
				for (int i = 0; i < N; i++) {
					vec3 p = eye + rd * (t.x + (float(i) + jit) * st);
					if (p.y < ${La(ai.dome.base)} && p.x > ${La(ai.x0-.1)}) acc += oculusOpen(p) * treeShade(p) * air(p);
				}
				float ph = phase(dot(rd, SHAFT), 0.6) + 0.05;
				sum += mix(vec3(1.0, 0.88, 0.68), vec3(0.62, 0.74, 1.0) * 1.2, night) * acc * st * ph * strength.y;
			}
		}

		// the corridor windows
		if (strength.z > 0.0) {
			vec2 t = hitBox(eye, rd, ${U(z)});
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
			vec2 t = hitBox(eye, rd, ${U(P)});
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
			vec2 t = hitBox(eye, rd, ${U(R)});
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
	}`,{depthTex:()=>h,invVP:()=>p,eye:()=>g,time:e.context("time"),night:()=>Jh.night,strength:()=>Q,strength5:()=>D}),Q=[0,0,0,0],D=0;function V(){let re=_c.shafts*x.shafts,Ue=Jh.night;return Q[0]=Zl.box(M)?.06*re*(1+.9*Ue):0,Q[1]=Zl.box(k,!1,"court")?.1*re*(1+.9*Ue):0,Q[2]=Zl.box(z)?.07*re*(1+.4*Ue):0,Q[3]=Zl.box(P)?.04*re*(1-.75*Ue):0,Zl.zone==="studio"?(Q[0]=Q[1]=Q[2]=Q[3]=0,D=.03*re*(1+1.3*Ue)):D=0,Q[0]+Q[1]+Q[2]+Q[3]+D>5e-4}let me=w(`
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
	}`,{src:e.prop("src"),dir:(re,Ue)=>[Ue.dir[0]/Ue.size[0],Ue.dir[1]/Ue.size[1]]}),Ge=w(`
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
	}`,{src:e.prop("src"),texel:(re,Ue)=>[.5/Ue.size[0],.5/Ue.size[1]],threshold:e.prop("threshold")}),Re=w(`
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
		return 2.0 * ${La(Ud)} * ${La(Bd)} / (${La(Bd+Ud)} - z * ${La(Bd-Ud)});
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
	}`,{scene:()=>c,depthTex:()=>h||c,soft:()=>u[0],bloomA:()=>d[0],bloomB:()=>v[0],shafts:()=>l[0],res:()=>[f.width,f.height],time:e.context("time"),exposure:()=>_c.exposure*x.exposure,vignette:()=>Math.min(1,_c.vignette+x.vignette+.22*Jh.night),night:()=>Jh.night,grain:()=>_c.grain,bloomK:()=>_c.bloom,letterbox:()=>x.letterbox,fade:()=>x.fade,fadeColor:()=>x.fadeColor,aperture:()=>t.post>=2?x.aperture:0,focus:()=>x.focus,hasDepth:n?1:0},{framebuffer:null}),be=e({framebuffer:()=>f});return{shot:x,look:_c,hasDepth:n,capture(re,Ue,xt){let at=Math.max(.4,Math.min(1,t.scale||1)),Ot=Math.max(2,Math.round(re.drawingBufferWidth*at/2)*2),Et=Math.max(2,Math.round(re.drawingBufferHeight*at/2)*2);(f.width!==Ot||f.height!==Et)&&f.resize(Ot,Et);let no=Math.max(1,Math.ceil(Ot/2)),bo=Math.max(1,Math.ceil(Et/2));u.forEach(Yo=>Yo.resize(no,bo)),d.forEach(Yo=>Yo.resize(Math.max(1,Math.ceil(Ot/4)),Math.max(1,Math.ceil(Et/4)))),v.forEach(Yo=>Yo.resize(Math.max(1,Math.ceil(Ot/8)),Math.max(1,Math.ceil(Et/8)))),l.forEach(Yo=>Yo.resize(Math.max(1,Math.ceil(Ot/a())),Math.max(1,Math.ceil(Et/a())))),BS(m,Ue.proj,Ue.view),US(p,m),g[0]=Ue.eye[0],g[1]=Ue.eye[1],g[2]=Ue.eye[2],be(()=>{e.clear({color:[0,0,0,1],depth:1}),xt()})},present(){let re=Ue=>[Ue.width,Ue.height];n&&t.post>=1&&V()?(q({out:l[0]}),me({out:l[1],src:l[0],dir:[1,0],size:re(l[0])}),me({out:l[0],src:l[1],dir:[0,1],size:re(l[0])})):e.clear({color:[0,0,0,1],framebuffer:l[0]}),Ge({out:u[0],src:c,size:[f.width,f.height],threshold:0}),me({out:u[1],src:u[0],dir:[1,0],size:re(u[0])}),me({out:u[0],src:u[1],dir:[0,1],size:re(u[0])}),Ge({out:d[0],src:u[0],size:re(u[0]),threshold:.42}),me({out:d[1],src:d[0],dir:[1,0],size:re(d[0])}),me({out:d[0],src:d[1],dir:[0,1],size:re(d[0])}),Ge({out:v[0],src:d[0],size:re(d[0]),threshold:0}),me({out:v[1],src:v[0],dir:[1.5,0],size:re(v[0])}),me({out:v[0],src:v[1],dir:[0,1.5],size:re(v[0])}),Re({out:null})}}}});var c5=ke((mT,i5)=>{"use strict";var r5=ar().GLSL,WS=Ps(),jd=H0(),{C:VS,FAR_DOOR:XS}=br(),YS=100*Math.PI/180,a5=e=>[XS.x-e[2],e[1],VS.zc-7+e[0]],s5=e=>[-e[2],e[1],e[0]];function KS(e){let t=[],o=[],n=[],r=[],a=WS.createBuilder(t,o,n,r);jd.addFrames(a,e);let s=jd.glassPanes(e),i=c=>{let h=[];for(let f=0;f<c.length;f+=3)h.push([c[f],c[f+1],c[f+2]]);return h};return{position:i(t),normal:i(o),elements:n,glass:s}}i5.exports=e=>{let t=jd.DOOR,o=["left","right"].map(f=>{let u=KS(f),d=u.position.length;return{part:f,hinge:f==="left"?t.x0:t.x1,sign:f==="left"?-1:1,src:u.position.map(v=>v.slice()),srcN:u.normal.map(v=>v.slice()),srcG:u.glass.map(v=>v.slice()),pos:e.buffer({data:new Float32Array(d*3),usage:"dynamic"}),nrm:e.buffer({data:new Float32Array(d*3),usage:"dynamic"}),gpos:e.buffer({data:new Float32Array(u.glass.length*3),usage:"dynamic"}),gnrm:e.buffer({data:new Float32Array(u.glass.length*3),usage:"dynamic"}),el:e.elements({data:new Uint32Array(u.elements),type:"uint32"}),glassCount:u.glass.length,outP:new Float32Array(d*3),outN:new Float32Array(d*3),outG:new Float32Array(u.glass.length*3),outGN:new Float32Array(u.glass.length*3)}}),n=null;function r(f){if(f!==n){n=f;for(let u of o){let d=u.sign*f,v=Math.cos(d),l=Math.sin(d),p=x=>{let b=x[0]-u.hinge,w=x[2];return[u.hinge+b*v+w*l,x[1],-b*l+w*v]},m=x=>[x[0]*v+x[2]*l,x[1],-x[0]*l+x[2]*v];u.src.forEach((x,b)=>{let w=a5(p(x));u.outP.set(w,b*3),u.outN.set(s5(m(u.srcN[b])),b*3)});let g=s5(m([0,0,1]));u.srcG.forEach((x,b)=>{u.outG.set(a5(p(x)),b*3),u.outGN.set(g,b*3)}),u.pos.subdata(u.outP),u.nrm.subdata(u.outN),u.gpos.subdata(u.outG),u.gnrm.subdata(u.outGN)}}}r(0);let a=`
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
	}`,s=e({vert:a,frag:`
		precision highp float;
		${r5}
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
		}`,attributes:{position:e.prop("pos"),normal:e.prop("nrm")},elements:e.prop("el"),cull:{enable:!1}}),i=e({vert:a,frag:`
		precision highp float;
		${r5}
		varying vec3 v_pos, v_n, v_eye;
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			float c = abs(dot(V, normalize(v_n)));
			float fres = pow(1.0 - c, 3.0);
			float d = (v_pos.x + v_pos.z) * 0.55 + v_pos.y * 0.85;
			float sheen = smoothstep(0.35, 0.0, abs(fract(d * 0.22) - 0.5)) * 0.05;
			float a = 0.05 + 0.32 * fres + sheen;
			gl_FragColor = vec4(toNight(mix(vec3(0.80, 0.86, 0.90), vec3(1.0, 0.95, 0.86), 0.4), 0.22), a);
		}`,attributes:{position:e.prop("pos"),normal:e.prop("nrm")},count:e.prop("count"),cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}}),c=0,h=()=>{r(c*YS);for(let f of o)s({pos:f.pos,nrm:f.nrm,el:f.el})};return h.glass=()=>{for(let f of o)i({pos:f.gpos,nrm:f.gnrm,count:f.glassCount})},h.setOpen=f=>{c=f||0},h.openNow=()=>c,h}});var f5=ke((gT,l5)=>{"use strict";var QS=ar().GLSL,{skylightGLSL:ZS}=Ui(),{oculusGLSL:JS}=Ea(),{windowLightGLSL:eE}=br(),Ya=.22;function tE(){let e=[],t=[],o=[],n=[],s=(f,u)=>{let d=Ya*.2*Math.pow(Math.sin(Math.PI*Math.pow(f,.85)),.9)*(u>0?1.06:.94),v=f*Ya-Ya*.12,l=u*d,p=Math.abs(u)*d*.42-.14*f*f*Ya;p+=Math.sin(f*17+(u>0?0:2.1))*.012*Ya*u*u;let m=(f-.3)*.55,g=Math.cos(m),x=Math.sin(m),b=p*g-l*x,w=p*x+l*g;return[v,b,w+.05*Ya*f*f]},i=(f,u)=>{let v=s(Math.min(1,f+.01),u),l=s(Math.max(0,f-.01),u),p=s(f,Math.min(1,u+.01)),m=s(f,Math.max(-1,u-.01)),g=[v[0]-l[0],v[1]-l[1],v[2]-l[2]],x=[p[0]-m[0],p[1]-m[1],p[2]-m[2]],b=[x[1]*g[2]-x[2]*g[1],x[2]*g[0]-x[0]*g[2],x[0]*g[1]-x[1]*g[0]],w=Math.hypot(b[0],b[1],b[2])||1,M=b[1]<0?-1:1;return[b[0]/w*M,b[1]/w*M,b[2]/w*M]};for(let f=0;f<=18;f++){let u=f/18;for(let d=0;d<=5*2;d++){let v=d/5-1;e.push(s(u,v)),t.push(i(Math.min(.97,Math.max(.03,u)),v)),o.push([u,v])}}let c=5*2+1;for(let f=0;f<18;f++)for(let u=0;u<c-1;u++){let d=f*c+u,v=d+1,l=d+c,p=l+1;n.push([d,l,v],[v,l,p])}let h=e.length;return e.push([-Ya*.12,0,-.003],[-Ya*.12,0,.003],[-Ya*.24,-.01,.0015],[-Ya*.24,-.01,-.0015]),t.push([0,1,0],[0,1,0],[0,1,0],[0,1,0]),o.push([0,0],[0,0],[-.1,0],[-.1,0]),n.push([h,h+2,h+1],[h,h+3,h+2]),{pos:e,nrm:t,uv:o,idx:n}}l5.exports=e=>{let t=tE(),o=e({vert:`
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
		${QS}
		uniform float time;
		uniform float yScale, visible;
		varying vec3 v_pos, v_normal;
		varying vec2 v_uv;
		varying vec3 v_eye;

		${ZS()}
		${JS()}
		${eE()}

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
		}`,attributes:{position:t.pos,normal:t.nrm,uv:t.uv},elements:t.idx,uniforms:{model:e.prop("model"),visible:1},cull:{enable:!1}}),n=ar(),r=e({vert:`
		precision highp float;
		uniform mat4 proj, view, model;
		uniform float yScale;
		attribute vec2 corner;
		varying vec2 v_uv;
		void main() {
			vec3 c = (model * vec4(${(Ya*.35).toFixed(3)}, 0.0, 0.0, 1.0)).xyz;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{model:e.prop("model"),night:()=>n.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(a){a&&a.visible&&(o({model:a.model}),n.night>.01&&r({model:a.model}))}}});var d5=ke((xT,u5)=>{"use strict";var{skylightGLSL:oE,Z_START:h5,Z_END:nE}=Ui(),{oculusGLSL:rE,A:Mc}=Ea(),{windowLightGLSL:aE,C:si}=br();u5.exports=(e,t)=>{let o=t.isPhone?900:2600,n=t.isPhone?350:900,r=t.isPhone?450:1300,a=t.isPhone?13:22,s=7,i=()=>(s=s*16807%2147483647,(s-1)/2147483646),c=si.x0+.6,h=si.x1-.3,f=[];for(let l=0;l<o;l++)f.push([2.5+i()*10.5,.3+i()*8,h5-3.5+i()*(nE-h5+4.5),i()]);for(let l=0;l<n;l++)f.push([Mc.x0+.3+i()*(Mc.x1-Mc.x0-.6),.3+i()*7.5,Mc.z0+.3+i()*(Mc.z1-Mc.z0-.6),i()]);for(let l=0;l<r;l++)f.push([c+i()*(h-c),.2+i()*5.6,si.z0+.25+i()*(si.z1-si.z0-.5),i()]);let u=l=>l.toFixed(4),d=[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],v=e({vert:`
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

		${oE()}
		${rE()}
		${aE()}

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
				p.x = ${u(c)} + mod(p.x - ${u(c)} - gust.x * (0.55 + 0.9 * seed.w), ${u(h-c)});
				p.y += sin(time * 5.0 + s * 11.0) * 0.22 * gust.y;
				p.z += cos(time * 4.3 + s * 13.0) * 0.30 * gust.y;
				p.z = clamp(p.z, ${u(si.z0+.1)}, ${u(si.z1-.1)});
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
		}`,attributes:{seed:f},count:f.length,primitive:"points",uniforms:{time:e.context("time"),pixelScale:l=>l.viewportHeight*.006,focus:(l,p)=>p&&p.focus||6,aperture:(l,p)=>p&&p.aperture||0,wake0:(l,p)=>(p&&p.wake||d)[0],wake1:(l,p)=>(p&&p.wake||d)[1],wake2:(l,p)=>(p&&p.wake||d)[2],wake3:(l,p)=>(p&&p.wake||d)[3],wakeDir:(l,p)=>p&&p.wakeDir||[0,0,1],gust:(l,p)=>p&&p.gust||[0,0]},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});return l=>v(l||{})}});var y5=ke((yT,x5)=>{"use strict";var{C:g5}=br(),p5=ar(),v5=15.3,sE=37.1,m5=g5.z1+.9,iE=g5.z1+.7+16-.6;x5.exports=(e,t)=>{let o=t.isPhone?36:80,n=11,r=()=>(n=n*16807%2147483647,(n-1)/2147483646),a=[];for(let h=0;h<o;h++){let f=.35+Math.pow(r(),1.8)*2.4;a.push([v5+r()*(sE-v5),f,m5+r()*(iE-m5),r()])}let s=[],i=[];a.forEach(h=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(f=>{s.push(f[0],f[1]),i.push(...h)})});let c=e({vert:`
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
		}`,attributes:{corner:s,seed:i},count:s.length/2,uniforms:{time:e.context("time"),night:()=>p5.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){p5.night>.01&&c()}}});var o1=ke((bT,va)=>{"use strict";var b5=ar(),u0=X0(),cE=tc(),ps=Math.PI,wt=e=>(+e).toFixed(4),Ka=e=>`vec3(${wt(e[0])}, ${wt(e[1])}, ${wt(e[2])})`,en={x0:-2.05,z0:41.45,z1:47.55,top:5.1},To=-.55,Jn=-2,xn=42.25,Gn=43.65,Oa=45.35,Hr=46.75,lr=2.75,da=.12,lE=(To+Jn)/2,Go={x:-1.3,y:1.42,w:.42,h:.52,z:Gn,cell:.026},Vt={x0:-1.85,x1:-.75,top:.98,z0:Gn-.3,z1:Gn-.02},Na={x0:-1.44,x1:-1.16,y0:Vt.top-.002,y1:Vt.top+.018},pa={cx:-1.3,cz:Gn-.165,w:.2,d:.255,y:Vt.top+.0012},xr={x:-1.03,z:Gn-.14,r:.042,h:.075},an={x:-.86,z:Gn-.12,h:.085,r:.019};an.flame=[an.x,Vt.top+.012+an.h+.028,an.z];var t1={a:[xr.x-.004,Vt.top+.03,xr.z+.004],b:[xr.x-.13,Vt.top+.34,xr.z-.12]},yn=[-1.5,2.42,44.66],Dn=[-1.78,1.95,xn+.09],Ra={x:-1.32,z:44.08,y:.64,heading:.32},M5={window:{eye:[-1.3,1.33,42.8],target:[Go.x,1.37,Gn],fov:54},paper:{eye:[-1.3,1.4,43.23],target:[pa.cx,Vt.top,pa.cz+.01],fov:40},front:{eye:[1.6,1.62,43],target:[-.9,1.35,43],fov:55},bay:{eye:[4.2,2.1,44.6],target:[-1,1.9,44.5],fov:55}},Tr={z0:(xn+Gn)/2+.03,z1:(xn+Gn)/2+.56,y0:.98,y1:1.78,x:To+.03,cell:.047};M5.peek={eye:[-1.2,1.42,42.95],target:[u0.PLAY.stoolX-u0.OFF[0],.85,u0.PLAY.keyFront+.2],fov:30};var ds={ink:null,inkDirty:!1,fold:0,slide:0,shown:!0,active:!1};function w5(){return`
	// a quatrefoil hole in the brass (g: metres across the window from its centre)
	float grilleHole(vec2 g) {
		vec2 q = fract(g / ${wt(Go.cell)} + 0.5) - 0.5;
		float d = min(min(length(q - vec2(0.17, 0.0)), length(q + vec2(0.17, 0.0))),
		              min(length(q - vec2(0.0, 0.17)), length(q + vec2(0.0, 0.17))));
		d = min(d, length(q) - 0.04);
		return 1.0 - smoothstep(0.15, 0.19, d);
	}
	// how much of the lamp's light reaches p (on the penitent's side) through the window
	float throughGrille(vec3 p, float soft) {
		vec3 d = p - ${Ka(yn)};
		if (d.z > -0.001) return 0.0;
		float t = (${wt(Go.z)} - ${wt(yn[2])}) / d.z;
		vec2 g = (${Ka(yn)} + d * t).xy - vec2(${wt(Go.x)}, ${wt(Go.y)});
		float inWin = (1.0 - smoothstep(${wt(Go.w/2-.01)}, ${wt(Go.w/2)} + soft, abs(g.x))) *
		              (1.0 - smoothstep(${wt(Go.h/2-.01)}, ${wt(Go.h/2)} + soft, abs(g.y)));
		// the lamp is not a point: the pattern blurs the further it falls
		// from the brass
		float pen = 0.045 * abs(p.z - ${wt(Go.z)}) / abs(${wt(Go.z)} - ${wt(yn[2])}) / ${wt(Go.cell)};
		vec2 qc = fract(g / ${wt(Go.cell)} + 0.5) - 0.5;
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
		vec3 c = ${Ka(an.flame)};
		vec3 d = c - p;
		float s = 1.0;
		// the pot: a short upright cylinder
		vec2 a = vec2(${wt(xr.x)}, ${wt(xr.z)}) - p.xz;
		vec2 dd = d.xz;
		float t = clamp(dot(a, dd) / max(dot(dd, dd), 1e-5), 0.0, 1.0);
		float r = length(p.xz + dd * t - vec2(${wt(xr.x)}, ${wt(xr.z)}));
		float y = p.y + d.y * t;
		s *= mix(1.0, 0.25, (1.0 - smoothstep(${wt(xr.r*.7)}, ${wt(xr.r*1.6)}, r)) * (1.0 - smoothstep(${wt(Vt.top+xr.h*.8)}, ${wt(Vt.top+xr.h*1.3)}, y)));
		// the quill: a thin capsule
		vec3 qa = ${Ka(t1.a)}, qb = ${Ka(t1.b)};
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
		bool inB1 = p.z < ${wt(Gn)} && p.z > ${wt(xn-.04)} && p.x < ${wt(To+.02)};
		bool inPriest = p.z >= ${wt(Gn)} && p.z < ${wt(Oa)} && p.x < ${wt(To)};
		bool inB2 = p.z >= ${wt(Oa)} && p.z < ${wt(Hr+.04)} && p.x < ${wt(To)};
		// how open to the hall it is
		float open = 1.0;
		if (inB1) open = mix(0.7, 1.1, smoothstep(${wt(Jn)}, ${wt(To)}, p.x));
		if (inPriest) open = 0.16;
		if (inB2) open = 0.10;
		// deeper into the bay, a little less of the hall's light
		open *= mix(0.62, 1.0, smoothstep(${wt(en.x0)}, 0.3, p.x));
		// the stair hall's candlelight (it stands there now: see stairhall.js)
		vec3 rs;
		vec3 col = roomLight(p + ${Ka(u0.OFF)}, N, V, gloss, rs) * 1.25 * open;
		spec += rs * open;
		// the lamp, warm, behind the brass
		vec3 Ld = ${Ka(yn)} - p;
		float dl = length(Ld);
		vec3 L = Ld / dl;
		float T = inPriest ? 1.0 : (inB1 ? throughGrille(p, 0.0) : 0.0);
		vec3 lampCol = vec3(1.0, 0.70, 0.40) * mix(3.2, 1.0, night);
		vec3 lamp = lampCol * T * max(dot(N, L), 0.0) / (1.0 + dl * dl * 1.6);
		col += lamp;
		spec += lampCol * T * pow(max(dot(N, normalize(L + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss / (1.0 + dl * dl * 1.6);
		// the little lamp in the open booth
		if (inB1) {
			vec3 Sd = ${Ka(Dn)} - p;
			float ds = length(Sd);
			vec3 Ls = Sd / ds;
			vec3 sc = vec3(1.0, 0.72, 0.42) * mix(1.5, 0.35, night);
			col += sc * (max(dot(N, Ls), 0.0) * 0.8 + 0.2) / (0.15 + ds * ds * 1.6);
			spec += sc * pow(max(dot(N, normalize(Ls + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss * 0.6 / (0.15 + ds * ds * 1.6);
		}
		// the candle
		if (night > 0.01) {
			vec3 Cd = ${Ka(an.flame)} - p;
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
	}`}var Zn={WOOD:0,CARVED:1,VELVET:2,CUSHION:3,BRASS:4,INKGLASS:5,QUILL:6,LAMPGLASS:7,DARKWOOD:8};function k5(){let e=[],t=[],o=[],n=[],r=[],a=(h,f)=>[h[0]-f[0],h[1]-f[1],h[2]-f[2]],s=(h,f)=>[h[1]*f[2]-h[2]*f[1],h[2]*f[0]-h[0]*f[2],h[0]*f[1]-h[1]*f[0]],i=h=>{let f=Math.hypot(h[0],h[1],h[2])||1;return[h[0]/f,h[1]/f,h[2]/f]},c={pos:e,nrm:t,kind:o,uv:n,idx:r,norm:i,cross:s,sub:a};return c.v=(h,f,u,d)=>(e.push(h[0],h[1],h[2]),t.push(f[0],f[1],f[2]),o.push(u),n.push(d?d[0]:0,d?d[1]:0),e.length/3-1),c.quad=(h,f,u,d,v,l)=>{let p=i(s(a(f,h),a(d,h)));l=l||[[0,0],[1,0],[1,1],[0,1]];let m=c.v(h,p,v,l[0]),g=c.v(f,p,v,l[1]),x=c.v(u,p,v,l[2]),b=c.v(d,p,v,l[3]);r.push(m,g,x,m,x,b)},c.box=(h,f,u,d,v,l,p)=>{let m=(g,x,b,w,M,k,z,P)=>c.quad(g,x,b,w,p,[[M,z],[k,z],[k,P],[M,P]]);m([d,f,u],[d,f,l],[d,v,l],[d,v,u],u,l,f,v),m([h,f,l],[h,f,u],[h,v,u],[h,v,l],l,u,f,v),m([h,v,u],[d,v,u],[d,v,l],[h,v,l],h,d,u,l),m([h,f,l],[d,f,l],[d,f,u],[h,f,u],h,d,l,u),m([h,f,l],[d,f,l],[d,v,l],[h,v,l],h,d,f,v),m([d,f,u],[h,f,u],[h,v,u],[d,v,u],d,h,f,v)},c.tube=(h,f,u,d)=>{d=d||6;let v=e.length/3;for(let l=0;l<h.length;l++){let p=h[Math.max(0,l-1)],m=h[Math.min(h.length-1,l+1)],g=i(a(m,p)),x=Math.abs(g[1])>.9?[1,0,0]:[0,1,0],b=i(s(g,x)),w=s(b,g),M=typeof f=="function"?f(l/(h.length-1)):f;for(let k=0;k<=d;k++){let z=k/d*ps*2,P=Math.cos(z),R=Math.sin(z),U=[b[0]*P+w[0]*R,b[1]*P+w[1]*R,b[2]*P+w[2]*R];c.v([h[l][0]+U[0]*M,h[l][1]+U[1]*M,h[l][2]+U[2]*M],U,u,[l/(h.length-1),k/d])}}for(let l=0;l<h.length-1;l++)for(let p=0;p<d;p++){let m=v+l*(d+1)+p,g=m+d+1;r.push(m,m+1,g,m+1,g+1,g)}},c.lathe=(h,f,u,d,v)=>{v=v||20;let l=e.length/3;for(let p=0;p<u.length;p++){let[m,g]=u[p],x=u[Math.max(0,p-1)],b=u[Math.min(u.length-1,p+1)],w=b[0]-x[0],M=b[1]-x[1];for(let k=0;k<=v;k++){let z=k/v*ps*2,P=Math.cos(z),R=Math.sin(z),U=i([M*P,-w,M*R]);c.v([h+P*m,g,f+R*m],U,d,[k/v,p/(u.length-1)])}}for(let p=0;p<u.length-1;p++)for(let m=0;m<v;m++){let g=l+p*(v+1)+m,x=g+v+1;r.push(g,x,g+1,g+1,x,x+1)}},c.spire=(h,f,u,d,v,l)=>{let p=[[-d,-d],[d,-d],[d,d],[-d,d]];for(let m=0;m<4;m++){let g=p[m],x=p[(m+1)%4],b=[h+g[0],u,f+g[1]],w=[h+x[0],u,f+x[1]],M=[h,v,f],k=i(s(a(M,b),a(w,b))),z=c.v(b,k,l,[0,0]),P=c.v(w,k,l,[1,0]),R=c.v(M,k,l,[.5,1]);r.push(z,R,P)}},c.orient=()=>{for(let h=0;h<r.length;h+=3){let[f,u,d]=[r[h],r[h+1],r[h+2]],v=m=>[e[m*3],e[m*3+1],e[m*3+2]],l=s(a(v(u),v(f)),a(v(d),v(f))),p=[0,1,2].map(m=>t[f*3+m]+t[u*3+m]+t[d*3+m]);l[0]*p[0]+l[1]*p[1]+l[2]*p[2]<0&&(r[h+1]=d,r[h+2]=u)}return c},c}function e1(e,t,o,n){if(e<=t)return o;let r=e-t;return r>=n?0:Math.max(0,Math.sqrt(n*n-r*r)-(n-o))}var mn={ys:1.78,a:.56,r:.78};mn.apex=mn.ys+Math.sqrt(mn.r*mn.r-(mn.r-mn.a)*(mn.r-mn.a));function fE(){let e=k5(),t=Zn.WOOD,o=Zn.CARVED,n=Zn.DARKWOOD,r=.06;e.box(Jn,0,xn,To+.08,da,Hr,n),e.box(Jn,lr-.06,xn-.04,To+.1,lr,Hr+.04,t),e.box(To,lr-.2,xn-.06,To+.12,lr-.06,Hr+.06,t),e.box(To+.02,lr,xn-.08,To+.14,lr+.07,Hr+.08,n),e.box(Jn,da,xn,Jn+.04,lr-.06,Hr,t);for(let[f,u,d]of[[xn-r,xn,-1],[Hr,Hr+r,1]]){e.box(Jn,0,f,To+.08,lr,u,t);let v=d<0?f-.018:u;e.box(Jn+.18,.45,Math.min(v,v+.018),To-.12,2.35,Math.max(v,v+.018),n),e.box(Jn+.26,.55,Math.min(v,v+.03*d),To-.2,2.25,Math.max(v,v+.03*d),t)}{let f=Gn-.02,u=Gn+.02,d=Go.x-Go.w/2,v=Go.x+Go.w/2,l=Go.y-Go.h/2,p=Go.y+Go.h/2;e.box(Jn,da,f,To,Na.y0,u,t),e.box(Jn,Na.y0,f,Na.x0,Na.y1,u,t),e.box(Na.x1,Na.y0,f,To,Na.y1,u,t),e.box(Jn,Na.y1,f,To,l,u,t),e.box(Jn,l,f,d,p,u,t),e.box(v,l,f,To,p,u,t),e.box(Jn,p,f,To,lr-.06,u,t);let m=.05,g=f-.025;e.box(d-m,l-m,g,v+m,l,f,n),e.box(d-m,p,g,v+m,p+m,f,n),e.box(d-m,l,g,d,p,f,n),e.box(v,l,g,v+m,p,f,n),e.box(d-m-.02,p+m,g-.015,v+m+.02,p+m+.03,f,t),e.box(Na.x0-.01,Na.y1,f-.006,Na.x1+.01,Na.y1+.008,f,Zn.BRASS)}{let f=Tr,u=To+.008,d=To+.052;e.box(u,f.y0,f.z0-.035,d,f.y1,f.z0,n),e.box(u,f.y0,f.z0,d,f.y0+.04,f.z1,n),e.box(u,f.y1-.04,f.z0,d,f.y1,f.z1,n),e.box(u+.008,da,f.z0-.035,d-.008,f.y0,f.z1,t),e.box(d-.008,da+.12,f.z0+.03,d,f.y0-.08,f.z1-.06,n),e.box(u-.004,f.y0-.012,f.z0-.045,d+.012,f.y0,f.z1,Zn.BRASS)}e.box(Jn,da,Oa-.02,To,lr-.06,Oa+.02,t),e.box(Vt.x0,Vt.top-.035,Vt.z0,Vt.x1,Vt.top,Vt.z1,t),e.tube([[Vt.x0,Vt.top-.018,Vt.z0],[Vt.x1,Vt.top-.018,Vt.z0]],.02,t,8);for(let f of[Vt.x0+.1,Vt.x1-.1]){let u=[];for(let d=0;d<=8;d++){let v=d/8;u.push([f,Vt.top-.04-.22*v,Vt.z1-.02-.22*Math.cos(v*ps/2)])}e.tube(u,.018,n,6)}e.box(Jn+.06,.12,xn,To-.1,.44,xn+.42,n),e.box(Jn+.08,.44,xn+.01,To-.12,.52,xn+.41,Zn.CUSHION),e.box(Jn+.06,.12,Hr-.42,To-.1,.44,Hr,n),e.box(Dn[0]-.05,Dn[1]-.16,xn,Dn[0]+.05,Dn[1]-.02,xn+.012,Zn.BRASS),e.tube([[Dn[0],Dn[1]-.09,xn+.012],[Dn[0],Dn[1]-.09,Dn[2]-.01],[Dn[0],Dn[1]-.05,Dn[2]]],.006,Zn.BRASS,6),e.lathe(Dn[0],Dn[2],[[0,Dn[1]-.05],[.028,Dn[1]-.035],[.034,Dn[1]+.01],[.024,Dn[1]+.06],[.026,Dn[1]+.065]],Zn.LAMPGLASS,16),e.box(Ra.x-.22,.12,Ra.z-.24,Ra.x+.22,Ra.y-.05,Ra.z+.16,n),e.box(Ra.x-.24,Ra.y-.05,Ra.z-.26,Ra.x+.24,Ra.y,Ra.z+.18,Zn.CUSHION),e.tube([[yn[0],lr-.06,yn[2]],[yn[0],yn[1]+.07,yn[2]]],.005,Zn.BRASS,5),e.lathe(yn[0],yn[2],[[0,yn[1]+.09],[.03,yn[1]+.08],[.02,yn[1]+.06]],Zn.BRASS,12),e.lathe(yn[0],yn[2],[[0,yn[1]-.06],[.035,yn[1]-.04],[.045,yn[1]],[.035,yn[1]+.05],[.018,yn[1]+.07]],Zn.LAMPGLASS,16);let a=To,s=To+r;function i(f,u,d){let v=(f+u)/2,l=40,p=[];for(let g=0;g<=l;g++)p.push(da+(lr-.2-da)*g/l);let m=[];p.forEach(g=>m.push(g));for(let g=1;g<24;g++)m.push(mn.ys+(mn.apex-mn.ys)*g/24);m.sort((g,x)=>g-x);for(let g=0;g<m.length-1;g++){let x=m[g],b=m[g+1];if(b-x<1e-4)continue;let w=d?e1(x,mn.ys,mn.a,mn.r):0,M=d?e1(b,mn.ys,mn.a,mn.r):0,k=(z,P)=>[z,P];e.quad([s,x,v-w],[s,x,f],[s,b,f],[s,b,v-M],t,[k(v-w,x),k(f,x),k(f,b),k(v-M,b)]),e.quad([s,x,u],[s,x,v+w],[s,b,v+M],[s,b,u],t,[k(u,x),k(v+w,x),k(v+M,b),k(u,b)]),(w>0||M>0)&&(e.quad([a,x,v-w],[s,x,v-w],[s,b,v-M],[a,b,v-M],n),e.quad([s,x,v+w],[a,x,v+w],[a,b,v+M],[s,b,v+M],n),e.quad([a,x,f],[a,x,v-w],[a,b,v-M],[a,b,f],t),e.quad([a,x,v+w],[a,x,u],[a,b,u],[a,b,v+M],t))}if(e.box(a,lr-.2,f,s,lr-.06,u,t),e.box(s,lr-.42,f+.05,s+.012,lr-.24,u-.05,o),d){let g=[];for(let x=0;x<=30;x++){let b=x/30,w=b<.5?da+(mn.apex-da)*(b*2):mn.apex-(mn.apex-da)*((b-.5)*2),M=b<.5?-1:1;g.push([s+.01,Math.min(w,mn.apex-.002),v+M*(e1(w,mn.ys,mn.a,mn.r)+.03)])}e.tube(g,.022,n,6)}}i(xn,Gn,!0),i(Oa,Hr,!0);{let f=Gn,u=Oa,d=(f+u)/2;e.box(a,da,f,s,lr-.06,u,t);let v={ys:1.85,a:.55,r:.8},l=[];for(let p=0;p<=40;p++){let m=p/40,g=v.ys+Math.sqrt(v.r*v.r-(v.r-v.a)*(v.r-v.a)),x=m<.5?.35+(g-.35)*(m*2):g-(g-.35)*((m-.5)*2),b=m<.5?-1:1;l.push([s+.012,Math.min(x,g-.002),d+b*e1(x,v.ys,v.a,v.r)])}l.push(l[0]),e.tube(l,.02,n,6),e.box(s,.95,d-.22,s+.015,1.3,d+.22,o),e.box(s,.35,d-.42,s+.01,.75,d+.42,n),e.tube([[s+.03,1.12,u-.13],[s+.06,1.12,u-.13],[s+.06,1.12,u-.2]],.009,Zn.BRASS,6)}[xn-.02,Gn,Oa,Hr+.02].forEach((f,u)=>{let d=u===1||u===2,v=.075,l=lr+(d?.62:.4);e.box(To+.06,0,f-v,To+.06+2*v,l,f+v,t),e.box(To+.04,l-.04,f-v-.02,To+.08+2*v,l,f+v+.02,n);let p=To+.06+v,m=d?.62:.5;e.spire(p,f,l,v*.95,l+m,t);for(let g=1;g<=3;g++){let x=l+m*g/4.2,b=v*.95*(1-g/4.2)+.02;for(let[w,M]of[[1,0],[-1,0],[0,1],[0,-1]])e.tube([[p+w*(b-.02),x-.02,f+M*(b-.02)],[p+w*(b+.015),x+.03,f+M*(b+.015)]],.008,n,4)}e.lathe(p,f,[[0,l+m-.02],[.03,l+m+.03],[.022,l+m+.07],[0,l+m+.1]],t,10)});let h=(f,u,d)=>{let v=(f+u)/2,l=To+.075,p=lr+.07,m=p+d,g=[1,0,0],x=e.v([l,p,f],g,o,[f,p]),b=e.v([l,p,u],g,o,[u,p]),w=e.v([l,m,v],g,o,[v,m]);e.idx.push(x,b,w);let M=e.v([l-.04,p,f],[-1,0,0],t),k=e.v([l-.04,p,u],[-1,0,0],t),z=e.v([l-.04,m,v],[-1,0,0],t);e.idx.push(M,z,k);let P=[],R=[];for(let D=0;D<=10;D++){let V=D/10;P.push([l+.02,p+d*V,f+(v-f)*V]),R.push([l+.02,p+d*V,u+(v-u)*V])}e.tube(P,.022,n,6),e.tube(R,.022,n,6);for(let D=2;D<=8;D+=2)for(let V of[P[D],R[D]])e.tube([V,[V[0]+.01,V[1]+.06,V[2]+(V===P[D]?-.02:.02)]],.01,n,4);e.lathe(l,v,[[0,m],[.035,m+.06],[.022,m+.12],[0,m+.16]].map(([D,V])=>[D,V]),t,10);let U=Math.min(.17,d*.32),q=p+d*.38,Q=[];for(let D=0;D<=24;D++){let V=D/24*ps*2;Q.push([l+.012,q+Math.sin(V)*U,v+Math.cos(V)*U])}e.tube(Q,.012,n,5)};h(xn-.02,Gn,.52),h(Gn,Oa,.82),h(Oa,Hr+.02,.52),e.lathe(xr.x,xr.z,[[0,Vt.top],[.036,Vt.top+.001],[xr.r,Vt.top+.012],[xr.r*1.02,Vt.top+.035],[.036,Vt.top+.052],[.02,Vt.top+.062],[.016,Vt.top+.068]],Zn.INKGLASS,24),e.lathe(xr.x,xr.z,[[.016,Vt.top+.064],[.021,Vt.top+.066],[.022,Vt.top+.075],[.016,Vt.top+.076],[0,Vt.top+.072]],Zn.BRASS,20);{let f=t1.a,u=t1.b,d=26,v=x=>{let b=Math.sin(x*ps)*.025;return[f[0]+(u[0]-f[0])*x+b*.6,f[1]+(u[1]-f[1])*x+b*.4,f[2]+(u[2]-f[2])*x+b]},l=[];for(let x=0;x<=d;x++)l.push(v(x/d));e.tube(l,x=>.0028*(1-.7*x)+6e-4,Zn.QUILL,5);let p=e.norm(e.sub(u,f)),m=e.norm(e.cross(p,[.2,1,.1])),g=e.cross(m,p);for(let x of[-1,1]){let b=e.pos.length/3;for(let w=0;w<=d;w++){let M=w/d,k=v(M),z=M<.28?0:(x>0?.03:.02)*Math.sin(ps*Math.pow((M-.28)/.72,.75)),P=z*.25,R=[k[0]+m[0]*x*z-g[0]*P,k[1]+m[1]*x*z-g[1]*P,k[2]+m[2]*x*z-g[2]*P];e.v(k,g,Zn.QUILL,[M,0]),e.v(R,g,Zn.QUILL,[M,x])}for(let w=0;w<d;w++){let M=b+w*2;e.idx.push(M,M+2,M+1,M+1,M+2,M+3)}}}return e.orient()}function hE(e,t){let n=en.top,r=en.x0;e(r-.35,0,en.z0-.35,r,n+.35,en.z1+.35),e(r,0,en.z0-.35,-.35,n,en.z0),e(r,0,en.z1,-.35,n,en.z1+.35),e(r,n,en.z0,-.35,n+.35,en.z1),e(.35,0,en.z0-.42,.35+.16,n,en.z0),e(.35,0,en.z1,.35+.16,n,en.z1+.42),e(.35,n,en.z0-.5,.35+.18,n+.42,en.z1+.5),e(.35,n+.42,en.z0-.6,.35+.26,n+.52,en.z1+.6),e(.35,0,en.z0-.5,.35+.22,.42,en.z0),e(.35,0,en.z1,.35+.22,.42,en.z1+.5),e(-.35-.01,0,en.z0,.35+.12,.02,en.z1),t(r,en.z0,-.35,en.z1)}va.exports=e=>{let t=j0(),o=b5.GLSL,n=fE(),r=`
	precision highp float;
	${o}
	uniform float time;
	${t.lanternGLSL()}
	${u0.roomGLSL()}
	${w5()}
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
	}`,s=e({vert:a,frag:`${r}
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
		}`,attributes:{position:n.pos,normal:n.nrm,kind:n.kind,uv:n.uv},elements:n.idx});function i(Re,be,re,Ue){let xt=[],at=[],Ot=[],Et=[],no=[],tt=To-.02,zt=mn.apex+.08,Ft=da+.015;for(let ro=0;ro<=40;ro++){let wo=ro/40,ce=zt+(Ft-zt)*wo;for(let le=0;le<=90;le++){let G=le/90,Oe=re?.2+.13*wo*wo:be-Re,Qe=Re+G*Oe,Se=re?.05+.02*wo:.035+.01*Math.sin(G*7),he=G*Ue*ps*2+Math.sin(wo*2+G*5)*.6,At=tt-Se*(.5+.5*Math.sin(he))-(re?.02*wo:0),_t=[1,0,-(-Se*.5*Math.cos(he)*Ue*ps*2/Oe)],yt=Math.hypot(_t[0],_t[1],_t[2]);xt.push(At,ce,Qe),at.push(_t[0]/yt,0,_t[2]/yt),Ot.push(2),Et.push(Math.sin(he),wo)}}for(let ro=0;ro<40;ro++)for(let wo=0;wo<90;wo++){let ce=ro*91+wo,le=ce+90+1;no.push(ce,le,ce+1,ce+1,le,le+1)}for(let ro=0;ro<no.length;ro+=3){let[wo,ce,le]=[no[ro],no[ro+1],no[ro+2]],G=he=>[xt[he*3],xt[he*3+1],xt[he*3+2]],Oe=[0,1,2].map(he=>G(ce)[he]-G(wo)[he]),Qe=[0,1,2].map(he=>G(le)[he]-G(wo)[he]);Oe[1]*Qe[2]-Oe[2]*Qe[1]<0&&(no[ro+1]=le,no[ro+2]=ce)}return{pos:xt,nrm:at,kind:Ot,uv:Et,idx:no}}let c=i(xn+.02,xn+.4,!0,6),h=i(Oa+.04,Hr-.04,!1,9),f={pos:c.pos.concat(h.pos),nrm:c.nrm.concat(h.nrm),kind:c.kind.concat(h.kind),uv:c.uv.concat(h.uv),idx:c.idx.concat(h.idx.map(Re=>Re+c.pos.length/3))},u=e({vert:`
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
		}`,attributes:{position:f.pos,normal:f.nrm,uv:f.uv},elements:f.idx}),d=e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec2 corner;
		varying vec3 v_pos, v_eye;
		void main() {
			vec3 p = vec3(${wt(Go.x)} + corner.x * ${wt(Go.w/2)}, ${wt(Go.y)} + corner.y * ${wt(Go.h/2)}, ${wt(Go.z)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${r}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = v_pos.xy - vec2(${wt(Go.x)}, ${wt(Go.y)});
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(0.0, 0.0, v_eye.z < ${wt(Go.z)} ? -1.0 : 1.0);
			vec3 V = normalize(v_eye - v_pos);
			vec3 spec;
			vec3 light = boothLight(v_pos + N * 0.01, N, V, 0.8, spec);
			// dark old bronze, its edges catching the lamp behind it
			vec3 base = vec3(0.16, 0.10, 0.05);
			vec3 col = base * light + spec * 0.6;
			float edge = smoothstep(0.25, 0.5, hole);
			col += vec3(1.0, 0.66, 0.34) * edge * mix(0.35, 0.22, night);
			gl_FragColor = vec4(col, 1.0);
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,cull:{enable:!1}}),v=e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec2 corner;
		varying vec3 v_pos, v_eye;
		void main() {
			vec3 p = vec3(${wt(Tr.x)}, ${wt((Tr.y0+Tr.y1)/2)} + corner.y * ${wt((Tr.y1-Tr.y0)/2-.04)}, ${wt((Tr.z0+Tr.z1)/2)} + corner.x * ${wt((Tr.z1-Tr.z0)/2)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${r}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = (v_pos.zy - vec2(${wt((Tr.z0+Tr.z1)/2)}, ${wt((Tr.y0+Tr.y1)/2)})) * ${wt(Go.cell/Tr.cell)};
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(v_eye.x < ${wt(Tr.x)} ? -1.0 : 1.0, 0.0, 0.0);
			vec3 V = normalize(v_eye - v_pos);
			vec3 spec;
			vec3 light = boothLight(v_pos + N * 0.01, N, V, 0.8, spec);
			vec3 base = vec3(0.16, 0.10, 0.05);
			vec3 col = base * light + spec * 0.6;
			// the rims of the holes catch the candles in the hall beyond
			float edge = smoothstep(0.25, 0.5, hole);
			col += vec3(1.0, 0.62, 0.30) * edge * (N.x < 0.0 ? 0.30 : 0.10);
			gl_FragColor = vec4(col, 1.0);
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,cull:{enable:!1}}),l=e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec2 corner;
		varying vec2 v_c;
		void main() {
			vec3 p = vec3(${wt(Go.x)} + corner.x * 0.75, ${wt(Go.y)} + corner.y * 0.9, ${wt(Oa-.03)});
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),p=14,m=[];for(let Re=0;Re<p;Re++)[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(be=>m.push(be[0],be[1],(Re+.5)/p));let g=e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 c;
		varying vec3 v_pos;
		void main() {
			// slices across the booth, from the window back towards the bench
			vec3 p = vec3(${wt(lE)} + c.x * ${wt((To-Jn)/2-.02)}, 0.9 + (c.y + 1.0) * 0.8, ${wt(Gn-.03)} - c.z * 1.25);
			v_pos = p;
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`
		precision highp float;
		uniform float night, time;
		${w5().split("// the candle's light is hidden")[0]}
		varying vec3 v_pos;
		void main() {
			float T = throughGrille(v_pos, 0.0);
			float d = length(v_pos - ${Ka(yn)});
			// dust drifting in the beam
			float dust = 0.65 + 0.35 * sin(v_pos.x * 23.0 + time * 0.3) * sin(v_pos.y * 17.0 - time * 0.21) * sin(v_pos.z * 19.0 + time * 0.17);
			vec3 col = vec3(1.0, 0.68, 0.36) * T * dust * 0.035 / (0.4 + d * d * 0.5) * mix(1.0, 0.7, night);
			gl_FragColor = vec4(col, 1.0);
		}`.replace("float grilleHole","float grilleHole"),attributes:{c:{buffer:e.buffer(m),size:3}},count:m.length/3,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}}),x=(()=>{if(typeof document=="undefined")return null;let Re=document.createElement("canvas");Re.width=512,Re.height=652;let be=Re.getContext("2d");be.fillStyle="#cdb38a",be.fillRect(0,0,Re.width,Re.height);let re=7,Ue=()=>(re=re*1664525+1013904223>>>0,re/4294967296);for(let at=0;at<2400;at++){be.fillStyle=`rgba(${Ue()<.5?"90,62,30":"245,230,200"},${.03+Ue()*.05})`;let Ot=Ue()*Re.width,Et=Ue()*Re.height;be.fillRect(Ot,Et,1+Ue()*14,1)}for(let at=0;at<26;at++){let Ot=Ue()*Re.width,Et=Ue()*Re.height,no=20+Ue()*90,bo=be.createRadialGradient(Ot,Et,0,Ot,Et,no);bo.addColorStop(0,`rgba(120,80,35,${.04+Ue()*.06})`),bo.addColorStop(1,"rgba(120,80,35,0)"),be.fillStyle=bo,be.fillRect(Ot-no,Et-no,no*2,no*2)}let xt=be.createRadialGradient(Re.width/2,Re.height/2,Re.width*.3,Re.width/2,Re.height/2,Re.height*.72);return xt.addColorStop(0,"rgba(110,70,30,0)"),xt.addColorStop(1,"rgba(110,70,30,0.38)"),be.fillStyle=xt,be.fillRect(0,0,Re.width,Re.height),Re})(),b=x?e.texture({data:x,min:"linear",mag:"linear",flipY:!1}):e.texture(),w=e.texture({shape:[8,8],data:new Uint8Array(8*8*4)}),M=[18,24],k=[],z=[];for(let Re=0;Re<=M[1];Re++)for(let be=0;be<=M[0];be++)k.push(be/M[0],Re/M[1]);for(let Re=0;Re<M[1];Re++)for(let be=0;be<M[0];be++){let re=Re*(M[0]+1)+be,Ue=re+M[0]+1;z.push(re,re+1,Ue,re+1,Ue+1,Ue)}let P=e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale, fold, slide;
		attribute vec2 st;
		varying vec3 v_pos, v_n, v_eye;
		varying vec2 v_st;
		void main() {
			// s across (texture left = +x), t from the near edge (0) to the far (1)
			float s = st.x, t = st.y;
			float x = ${wt(pa.cx+pa.w/2)} - s * ${wt(pa.w)};
			float zNear = ${wt(pa.cz-pa.d/2)};
			vec3 p = vec3(x, ${wt(pa.y)}, zNear + t * ${wt(pa.d)});
			vec3 n = vec3(0.0, 1.0, 0.0);
			// a slight cockle
			p.y += 0.0012 * sin(s * 7.0 + t * 3.0) * sin(t * 5.0);
			// the near half folds up and over onto the far half
			if (t < 0.5) {
				float a = fold * 3.14159 * 0.985;
				float dd = (0.5 - t) * ${wt(pa.d)};
				float zf = zNear + 0.5 * ${wt(pa.d)};
				p.z = zf - dd * cos(a);
				p.y = ${wt(pa.y)} + dd * sin(a) + 0.0016 * fold;
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
			if (v_pos.z > ${wt(Gn+.015)}) discard;
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
		}`,attributes:{st:{buffer:e.buffer(k),size:2}},elements:z,uniforms:{fold:()=>ds.fold,slide:()=>ds.slide,paperTex:b,inkTex:w},cull:{enable:!1}}),R=k5();R.lathe(an.x,an.z,[[0,Vt.top],[.048,Vt.top+.002],[.052,Vt.top+.012],[.046,Vt.top+.014],[.022,Vt.top+.012],[0,Vt.top+.012]],Zn.BRASS,24),R.lathe(an.x,an.z,[[0,Vt.top+.012],[an.r,Vt.top+.012],[an.r*1.02,Vt.top+.012+an.h*.6],[an.r,Vt.top+.012+an.h],[an.r*.75,Vt.top+.012+an.h-.004],[0,Vt.top+.012+an.h-.008]],9,20),R.tube([[an.x,Vt.top+.012+an.h-.008,an.z],[an.x+.001,Vt.top+.012+an.h+.012,an.z]],.0012,8,4),R.orient();let U=e({vert:a,frag:`${r}
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
				float up = smoothstep(${wt(Vt.top+an.h*.4)}, ${wt(Vt.top+.012+an.h)}, v_pos.y);
				col += vec3(1.0, 0.55, 0.22) * up * 0.22 * candleFlicker();
			}
			gl_FragColor = vec4(col * night, 1.0);
		}`,attributes:{position:R.pos,normal:R.nrm,kind:R.kind,uv:R.uv},elements:R.idx}),q=e({vert:`
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
			vec3 p = ${Ka(an.flame)} + right * corner.x * size.x + vec3(0.0, 1.0, 0.0) * corner.y * size.y;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{halo:e.prop("halo")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),Q=[0,0],D=e({uniforms:{view:e.prop("view")}}),V=new Float32Array(16);function me(Re){cE.translate(V,Re.view,u0.OFF),D({view:V},()=>Ge(Re))}function Ge(Re){let be=Re&&Re.reflected;if(s(),u(),d(),v(),ds.ink&&ds.inkDirty){let re=ds.ink;Q[0]!==re.width||Q[1]!==re.height?(w({data:re,min:"linear",mag:"linear",flipY:!1}),Q=[re.width,re.height]):w.subimage(re),ds.inkDirty=!1}ds.shown&&P(),b5.night>.01&&(U(),be||(q({halo:1}),q({halo:0}))),be||(l(),g())}return me};va.exports.addBay=hE;va.exports.BAY=en;va.exports.OFF=u0.OFF;va.exports.STATE=ds;var _5=e=>[e[0]+u0.OFF[0],e[1]+u0.OFF[1],e[2]+u0.OFF[2]];va.exports.SHOTS=Object.fromEntries(Object.entries(M5).map(([e,t])=>[e,Object.assign({},t,{eye:_5(t.eye),target:_5(t.target)})]));va.exports.SEAT=Ra;va.exports.LAMP=yn;va.exports.SCONCE=Dn;va.exports.GRILLE=Go;va.exports.PAPER=pa;va.exports.ZONE={FRONT:To,BACK:Jn,ZA:xn,ZB:Gn,ZC:Oa,ZD:Hr}});var Wd=ke((wT,E5)=>{"use strict";function uE(e){let t=e>>>0||1;return function(){return t=t*1664525+1013904223>>>0,t/4294967296}}var S5={stroke:.05,letter:.045,word:.15,comma:.28,stop:.45,line:.25,para:.6},dE=["th","ng","er"];function pE(e,t,o){o=Object.assign({ink:"#2a1d12",xh:14,speed:23,lineHeight:2.85,seed:7,width:.12,pace:.45},o||{});let n=e.getContext("2d"),r={};Object.keys(S5).forEach(p=>{r[p]=S5[p]*o.pace});let a=[],s=0,i=0,c=0,h=[];function f(p,m){let g=uE(o.seed),x=o.xh,b={},w=V=>{let me=t[V];if(!me)return null;let Ge=Math.floor(g()*me.length);return me.length>1&&Ge===b[V]&&(Ge=(Ge+1)%me.length),b[V]=Ge,me[Ge]},M=V=>{if(t[V])return{g:w(V),sc:1};let me=V.toLowerCase();return t[me]?{g:w(me),sc:/[A-Z]/.test(V)?1.32:1}:null},k=[],z=.15,P=0,R=0,U=(g()-.5)*.02,q=m/x,Q=p.split(/\n\s*\n/);Q.forEach((V,me)=>{V.replace(/\s+/g," ").trim().split(" ").forEach(Re=>{let be=[];for(let at=0;at<Re.length;at++){let Ot=Re.substr(at,2).toLowerCase();if(dE.indexOf(Ot)>=0&&t[Ot]&&g()<.55&&Re[at]===Re[at].toLowerCase()){be.push({ch:Ot,gl:{g:w(Ot),sc:1}}),at++;continue}let Et=M(Re[at]);Et&&Et.g&&be.push({ch:Re[at],gl:Et})}let re=be.map(()=>.17+g()*.07),Ue=be.reduce((at,Ot,Et)=>at+Ot.gl.g.w*Ot.gl.sc+re[Et],0);P>0&&P+Ue>q&&(P=0,R++,z+=r.line,U=(g()-.5)*.02),be.forEach((at,Ot)=>{let Et=at.gl.g,no=at.gl.sc*(.95+g()*.1),bo=(g()-.5)*.06,Yo=(g()-.5)*.08+U*P,tt=P,zt=R*o.lineHeight+1.9+Yo,Ft=Math.cos(bo),ro=Math.sin(bo),wo=le=>[(tt+(le[0]*Ft-le[1]*ro)*no)*x,(zt+(le[0]*ro+le[1]*Ft)*no)*x],ce=(le,G)=>{let Oe=0;for(let Se=1;Se<le.length;Se++)Oe+=Math.hypot(le[Se][0]-le[Se-1][0],le[Se][1]-le[Se-1][1]);let Qe=Math.max(o.minDur||(G?.06:.07),Oe/(o.speed*x));k.push({pts:le,L:Oe,start:z,dur:Qe,dot:G}),z+=Qe};if(Et.s.forEach((le,G)=>{G>0&&(z+=r.stroke),ce(le.map(wo),!1)}),Et.dot){let le=Et.s[0][0];Et.s.forEach(Oe=>Oe.forEach(Qe=>{Qe[1]<le[1]&&(le=Qe)}));let G=wo([le[0]+.1,-1.36]);z+=r.stroke*1.4,ce([G,[G[0]+x*.05,G[1]+x*.03]],!0)}z+=r.letter*(.6+g()*.8),P+=Et.w*no+re[Ot]});let xt=Re[Re.length-1];z+=/[.!?]/.test(xt)?r.stop:/[,;:]/.test(xt)?r.comma:r.word,P+=.55+g()*.2}),me<Q.length-1&&(P=0,R+=1.6,z+=r.para)});let D=(R+1)*o.lineHeight*x+x*1.55;return{strokes:k,total:z,height:D}}function u(p,m){if(o.fixed){let g=o.fixed;n.setTransform(1,0,0,1,g.mx,g.my),n.clearRect(-g.mx,-g.my,e.width,e.height)}else{let g=Math.min(window.devicePixelRatio||1,2);e.width=Math.round(p*g),e.height=Math.round(m*g),e.style.height=m+"px",e.style.width=p+"px",n.setTransform(g,0,0,g,0,0),n.clearRect(0,0,p,m)}n.strokeStyle=o.ink,n.fillStyle=o.ink,n.lineCap="round",n.lineJoin="round",o.shadow&&(n.shadowColor=o.shadow,n.shadowBlur=o.shadowBlur||6)}let d=p=>p<.5?2*p*p:1-Math.pow(-2*p+2,2)/2;function v(p,m){let g=h[p.i]||0;if(m<=g)return;let x=o.width*o.xh,b=0;for(let w=1;w<p.pts.length;w++){let M=p.pts[w-1],k=p.pts[w],z=Math.hypot(k[0]-M[0],k[1]-M[1]),P=b,R=b+z;if(b=R,R<=g||z===0)continue;if(P>=m)break;let U=Math.max(0,(g-P)/z),q=Math.min(1,(m-P)/z),Q=[M[0]+(k[0]-M[0])*U,M[1]+(k[1]-M[1])*U],D=[M[0]+(k[0]-M[0])*q,M[1]+(k[1]-M[1])*q],V=(P+R)/2/(p.L||1),me=.72+.28*Math.sin(Math.PI*Math.min(1,Math.max(0,V)));n.lineWidth=x*me,n.globalAlpha=.86+.14*me,n.beginPath(),n.moveTo(Q[0],Q[1]),n.lineTo(D[0],D[1]),n.stroke()}p.dot&&g===0&&(n.globalAlpha=1,n.beginPath(),n.arc(p.pts[0][0],p.pts[0][1],x*.75,0,Math.PI*2),n.fill()),h[p.i]=m}function l(p){let m=(p-c)/1e3;for(let g=0;g<a.length;g++){let x=a[g];if(x.start>m)break;let b=Math.min(1,(m-x.start)/x.dur);v(x,d(b)*x.L)}if(o.onPen){let g=0;for(;g+1<a.length&&a[g+1].start<=m;)g++;a[g]&&o.onPen(a[g].pts[0][1])}m<s?i=requestAnimationFrame(l):o.onDone&&o.onDone()}return{write(p,m){cancelAnimationFrame(i);let g=o.fixed?e.width-2*o.fixed.mx:e.parentElement.clientWidth,x=f(p,g);a=x.strokes,s=x.total;let b=typeof o.maxTime=="function"?o.maxTime(p):o.maxTime;if(b&&s>b){let M=b/s;a.forEach(k=>{k.start*=M,k.dur*=M}),s=b}a.forEach((M,k)=>{M.i=k}),h=[],u(g,x.height);let w=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(m||w){a.forEach(M=>v(M,M.L));return}return c=performance.now(),i=requestAnimationFrame(l),s},finish(){cancelAnimationFrame(i),a.forEach(p=>v(p,p.L)),o.onDone&&o.onDone()},stop(){cancelAnimationFrame(i)}}}E5.exports=pE});var Xd=ke((_T,A5)=>{"use strict";var Vd=ar(),vE='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7"/></svg>',mE='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M19.5 14.6A8 8 0 0 1 9.4 4.5a8 8 0 1 0 10.1 10.1z"/></svg>';A5.exports=function(t){let o=document.createElement("button");o.type="button",o.className=t+" light-toggle";let n=()=>{let r=Vd.isNight;o.innerHTML=r?vE:mE,o.setAttribute("aria-label",r?"Switch to day":"Switch to night"),o.title=r?"Day":"Night",o.setAttribute("aria-pressed",r?"true":"false")};return n(),Vd.onChange(n),["mousedown","pointerdown"].forEach(r=>o.addEventListener(r,a=>a.stopPropagation())),o.addEventListener("click",r=>{r.stopPropagation(),Vd.toggle()}),o}});var N5=ke((MT,L5)=>{"use strict";var Hn=o1(),gE=X0(),xE=Wd(),yE="81efb912-50a2-4fcd-b5e8-c3a28eecbe93",z5=100,R0=e=>Math.max(0,Math.min(1,e)),ta=(e,t,o)=>{let n=R0((o-e)/(t-e));return n*n*(3-2*n)},Qa=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,Ca=(e,t,o)=>e+(t-e)*o,ef=(e,t,o)=>[Ca(e[0],t[0],o),Ca(e[1],t[1],o),Ca(e[2],t[2],o)];function ii(e,t){let o=e.length-1,n=R0(t)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,s=e[Math.max(0,r-1)],i=e[r],c=e[r+1],h=e[Math.min(o,r+2)];return[0,1,2].map(f=>.5*(2*i[f]+(-s[f]+c[f])*a+(2*s[f]-5*i[f]+4*c[f]-h[f])*a*a+(-s[f]+3*i[f]-3*c[f]+h[f])*a*a*a))}var n1=e=>({eye:e.eye.slice(),target:e.target.slice(),fov:e.fov,roll:0});function Yd(e,t,o){return{eye:ef(e.eye,t.eye,o),target:ef(e.target,t.target,o),fov:Ca(e.fov,t.fov,o),roll:Ca(e.roll||0,t.roll||0,o)}}var tf=gE.PLAY,Za=[tf.stoolX,1,tf.keyFront+.25],r1=[tf.stoolX,tf.keyTop+.03,tf.keyFront-.05],Qd=e=>{let t=(15+110*e)*Math.PI/180,o=2.1+.4*e;return[Za[0]+Math.cos(t)*o,1.15+.4*e,Za[2]+Math.sin(t)*o]},kc=[{eye:Qd(1),target:[Za[0],.92,Za[2]-.15],fov:46,aperture:.6},{eye:[-6.93,3.2,45.85],target:[-6.93,.77,45.3],fov:34,aperture:.6,to:r1},{eye:[Za[0]+1,1.14,Za[2]+1.72],target:[r1[0]+.05,.8,r1[2]+.05],fov:40,aperture:1,to:r1}],T5=(e,t)=>Math.hypot(e[0]-t[0],e[1]-t[1],e[2]-t[2]),a1=e=>({fade:0,letterbox:.55,exposure:1.3,focus:T5(e.eye,e.to||Za),aperture:e.aperture,vignette:.42,shafts:0}),Kd={fade:0,letterbox:.55,exposure:2.1,focus:6.2,aperture:.55,vignette:.45,shafts:0},Sc={fade:0,letterbox:.55,exposure:2,focus:.82,aperture:1.1,vignette:.48,shafts:0},Jl={fade:0,letterbox:.55,exposure:1.8,focus:.42,aperture:1.3,vignette:.5,shafts:0},bE=`
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
`;L5.exports=function(t){let{root:o,avatar:n}=t,r=document.createElement("style");r.textContent=bE,document.head.appendChild(r);let a=document.createElement("div");a.className="conf-ui",a.innerHTML=`
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
		</div>`,o.appendChild(a);let s=a.querySelector(".conf-write"),i=a.querySelector("textarea"),c=a.querySelector('[data-act="send"]'),h=a.querySelector(".conf-hint"),f=a.querySelector(".conf-close"),u=a.querySelector(".conf-final"),d=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,v=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;i.addEventListener("input",()=>{let G=i.value.match(new RegExp("^\\s*(\\S+\\s+){0,"+(z5-1)+"}\\S+"));(i.value.trim()?i.value.trim().split(/\s+/).length:0)>z5&&G&&(i.value=G[0]),c.disabled=!i.value.trim()}),["keydown","keyup","keypress"].forEach(G=>i.addEventListener(G,Oe=>Oe.stopPropagation())),a.addEventListener("pointerdown",G=>G.stopPropagation()),a.addEventListener("click",G=>{let Oe=G.target.closest("button");Oe&&(G.stopPropagation(),Oe.dataset.act==="send"&&me(),Oe.dataset.act==="leave"&&be())});let l=!1,p="",m=0,g=null,x=null,b="",w=null,M=0,k="",z=document.createElement("canvas");z.width=512,z.height=652;function P(G){G!==k&&(k=G,s.classList.toggle("on",G==="write"),h.classList.toggle("on",G==="hint"),f.classList.toggle("on",l&&G==="hint"&&(p==="room"||p==="peek")),u.classList.toggle("on",G==="final"),G==="write"&&setTimeout(()=>{if(p==="write")try{i.focus({preventScroll:!0})}catch(Oe){}},900))}function R(G){p=G,m=0}function U(G,Oe){if(l)return;l=!0,g={eye:G.eye.slice(),target:G.target.slice(),fov:G.fov,roll:G.roll||0},x=Object.assign({},Oe),b="",i.value="",c.disabled=!0,Hn.STATE.fold=0,Hn.STATE.slide=0,Hn.STATE.shown=!0,Hn.STATE.active=!0;let Qe=z.getContext("2d");Qe.setTransform(1,0,0,1,0,0),Qe.clearRect(0,0,z.width,z.height),Hn.STATE.ink=z,Hn.STATE.inkDirty=!0,document.body.classList.add("confessing");let Se=kc[0],he=v?.3:5.5,At=v?.3:3.6;q.i=0,q.u=0,q.T=he+At,q.moving=!0,q.rest=0,q.raw=!0,q.lookFrom=x,q.lookTo=a1(Se);let _=[g.eye,[3.4,1.75,44.5],[.3,1.72,44.7],[-2.8,1.5,45.4],Qd(0)],_t=[g.target,[-3,1.9,44.5],[-6.5,1.3,44.9],[Za[0],1,Za[2]-.1],Se.target];q.path=yt=>{let Gt=yt*(he+At);if(Gt<he){let Ho=Gt/he,Lo=1-Math.cos(Ho*Math.PI/2);return{eye:ii(_,Lo),target:ii(_t,ta(0,1,Lo*1.05)),fov:Ca(g.fov,52,ta(.4,1,Lo)),roll:(g.roll||0)*(1-Lo)}}let Yt=(Gt-he)/At,So=1-Math.pow(1-Yt,2.4);return{eye:Qd(So),target:Se.target,fov:Ca(52,Se.fov,So),roll:.05*Math.sin(Math.PI*So)}},R("room"),P("")}let q={i:0,u:0,T:1,moving:!1,rest:0,raw:!1,path:null,lookFrom:null,lookTo:null},Q=()=>d?"Scroll on":"Swipe up";function D(G){let Oe=xt,Qe=kc[G],Se={eye:Oe.eye.slice(),target:Oe.target.slice(),fov:Oe.fov,roll:Oe.roll||0},he=ef(Se.eye,Qe.eye,.5),At=[he[0]-Za[0],0,he[2]-Za[2]],_=Math.hypot(At[0],At[2])||1,_t=[he[0]+At[0]/_*.6,he[1]+.3,he[2]+At[2]/_*.6];q.path=yt=>{let Gt=1-yt;return{eye:[0,1,2].map(Yt=>Gt*Gt*Se.eye[Yt]+2*Gt*yt*_t[Yt]+yt*yt*Qe.eye[Yt]),target:ef(Se.target,Qe.target,ta(0,1,yt)),fov:Ca(Se.fov,Qe.fov,yt),roll:Se.roll*Gt}},q.lookFrom=V||a1(kc[q.i]),q.lookTo=a1(Qe),q.i=G,q.u=0,q.moving=!0,q.rest=0,q.raw=!1,q.T=v?.4:Math.max(2.8,Math.min(4.4,T5(Se.eye,Qe.eye)*1+1.6)),P("")}let V=null;function me(){if(p!=="write"||(b=i.value.trim(),!b))return;i.blur(),P("");let G=Math.max(10,Math.min(22,24-b.length/28));w=xE(z,t.glyphs(),{ink:"rgba(30,16,8,0.97)",xh:G,width:.15,seed:11+b.length,speed:60,pace:.2,minDur:.03,maxTime:Oe=>2.4+Oe.length/160,fixed:{mx:46,my:40},onPen:()=>{Hn.STATE.inkDirty=!0},onDone:()=>{Hn.STATE.inkDirty=!0}}),R("down")}function Ge(){try{let G={access_key:yE,subject:"A note left in the confessional",from_name:"Your gallery",message:b,page:location.href,when:new Date().toString()};fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(G),keepalive:!0}).catch(()=>{})}catch(G){}}function Re(){p==="ready"&&(Ge(),R("fold"),P(""))}function be(){!l||p==="leave"||(P(""),i.blur(),re=xt,Ue=V,R("leave"))}let re=null,Ue=null,xt=null,at=Hn.SHOTS.window,Ot=Hn.OFF,Et=G=>[G[0]+Ot[0],G[1],G[2]],no=[[3.4,1.75,44.5],[.3,1.72,44.5],[-2.5,1.66,45],[-4.6,1.6,46.55],[-7,1.58,47.15],[-9.3,1.55,46.4],Et([1.25,1.5,43.25]),Et([-.55,1.36,42.92])],bo=[[-3,1.9,44.5],[-6.5,1.5,44.6],[-7,1,44.4],[-7.6,.95,44],[-10.5,1.5,44.6],Et([-1,1.55,43.6]),Et([-1.4,1.35,43.1]),Et([-1.5,1.33,43.3])];function Yo(G){let Oe=Qa(R0(G)),Qe=[g.eye,...no,at.eye],Se=[g.target,...bo,at.target];return{eye:ii(Qe,Oe),target:ii(Se,ta(0,1,Oe*1.03)),fov:Ca(g.fov,at.fov,ta(.6,.97,Oe)),roll:(g.roll||0)*(1-Oe)}}function tt(G,Oe){if(v)return G;let Qe=performance.now()/1e3,Se=.004*Oe,he=Math.sin(Qe*.61)*.6+Math.sin(Qe*1.37+1.3)*.4,At=Math.sin(Qe*.47+2.1)*.6+Math.sin(Qe*1.13+.4)*.4;return{eye:[G.eye[0]+he*Se,G.eye[1]+At*Se*.7,G.eye[2]],target:[G.target[0]+At*Se*1.5,G.target[1]+he*Se,G.target[2]],fov:G.fov,roll:G.roll}}function zt(G,Oe,Qe){let Se={};for(let he in Oe)Se[he]=typeof Oe[he]=="number"&&typeof G[he]=="number"?Ca(G[he],Oe[he],Qe):Oe[he];return Se}function Ft(G){G*=window.__confSpeed||1,m+=G;let Oe=n1(at),Qe=n1(Hn.SHOTS.paper),Se,he,At=n1(Hn.SHOTS.peek);if(p==="room")q.moving?(q.u=Math.min(1,q.u+G/q.T),Se=q.path(q.raw?q.u:Qa(q.u)),he=zt(q.lookFrom,q.lookTo,ta(.1,.9,q.u)),q.raw&&(he.fade=(x.fade||0)*(1-ta(0,.12,q.u))),q.u>=1&&(q.moving=!1,q.rest=0,h.textContent=Q(),P("hint"))):(q.rest+=G,Se=tt(n1(kc[q.i]),2.5),he=a1(kc[q.i]));else if(p==="enter"){let _t=R0(m/(v?.6:9)),yt=Qa(_t),Gt=[ro.eye,[-7.6,1.9,47.6],[-9.6,1.85,45.6],Et([.75,1.5,42.95]),Et([-.25,1.42,42.82]),Et([-.9,1.42,42.82]),At.eye];Se={eye:ii(Gt,yt),target:ef(ro.target,At.target,ta(0,.35,yt)),fov:Ca(ro.fov,At.fov,ta(.3,1,yt)),roll:0},he=zt(wo,Kd,ta(.2,.9,_t)),_t>=1&&R("peek")}else if(p==="peek")Se=tt(At,1.5),he=Kd,m>(v?.5:3.2)&&R("turn");else if(p==="turn"){let _=R0(m/(v?.4:3.2));Se=Yd(At,Oe,Qa(_)),he=zt(Kd,Sc,Qa(_)),_>=1&&(R("write"),P("write"))}else if(p==="write")Se=tt(Oe,1),he=Sc;else if(p==="down"){let _=R0(m/(v?.4:2));Se=Yd(Oe,Qe,Qa(_)),he=zt(Sc,Jl,Qa(_)),_>=1&&(M=w.write(b,v)||0,Hn.STATE.inkDirty=!0,R("writing"))}else if(p==="writing")Se=tt(Qe,.6),he=Jl,m>M+.8&&(R("ready"),h.textContent=d?"Scroll to fold it and pass it through":"Swipe up to fold it and pass it through",P("hint"));else if(p==="ready")Se=tt(Qe,.6),he=Jl;else if(p==="fold"){let _=R0(m/(v?.3:1.5));Hn.STATE.fold=Qa(_),Se=tt(Qe,.6),he=Jl,_>=1&&R("slide")}else if(p==="slide"){let _t=R0(m/(v?.6:3.4));Hn.STATE.slide=Qa(ta(0,.7,_t));let yt=Qa(ta(.35,1,_t));Se=Yd(Qe,Oe,yt),he=zt(Jl,Sc,yt),_t>=1&&(Hn.STATE.shown=!1,R("final"),P("final"))}else if(p==="final")Se=tt(Oe,1),he=Sc;else if(p==="leave"){let _=v?.6:re.eye[0]<Ot[0]-.3?12:7,_t=R0(m/_),yt={eye:g.eye,target:g.target,fov:g.fov,roll:g.roll},Gt=Qa(_t),Yt=re.eye[0]<Ot[0]-.3,So=Yt?[re.eye,Et([-.55,1.4,42.8]),Et([1.4,1.55,43.3]),[-9.3,1.58,46.4],[-7,1.6,47.15],[-4.6,1.62,46.55],[-2.2,1.68,44.8],[.6,1.72,44.5],yt.eye]:[re.eye,[-3.4,1.7,46.2],[-1.2,1.7,44.8],[.6,1.72,44.5],yt.eye],Ho=Yt?[re.target,Et([1.5,1.45,43.4]),[-7,1.2,44.6],[-4,1.5,47],[-1.5,1.7,45.5],[1,1.8,44.5],[4,1.8,44.5],[7,1.9,44.2],yt.target]:[re.target,[-1.5,1.7,45.2],[2,1.8,44.5],[6,1.9,44.3],yt.target];if(Se={eye:ii(So,Gt),target:ii(Ho,Gt),fov:Ca(re.fov,yt.fov,Gt),roll:yt.roll*Gt},he=zt(Ue||Sc,x,ta(.1,.7,_t)),he.fade=(x.fade||0)*ta(.82,1,_t),_t>=1){l=!1,Hn.STATE.active=!1,Hn.STATE.shown=!0,Hn.STATE.fold=0,Hn.STATE.slide=0;let Lo=z.getContext("2d");Lo.setTransform(1,0,0,1,0,0),Lo.clearRect(0,0,z.width,z.height),Hn.STATE.inkDirty=!0,document.body.classList.remove("confessing"),t.onExit&&t.onExit()}}return xt=Se,V=he,{camera:Se,look:he}}let ro=null,wo=null;function ce(){if(p==="room"){if(q.moving||q.rest<.4)return;q.i<kc.length-1?D(q.i+1):(ro=xt,wo=V,P(""),R("enter"));return}if(p==="peek"){m>.4&&R("turn");return}p==="ready"?Re():p==="writing"&&w&&(w.finish(),m=Math.max(m,M))}function le(){p==="room"&&!q.moving&&q.rest>.4&&q.i>0&&D(q.i-1)}return{start:U,update:Ft,leave:be,get active(){return l},get stage(){return p},wheel(G){G>8?ce():G<-8&&le()},swipe(G){G>0?ce():G<0&&le()},tap(){ce()},key(G){return["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(G)>=0?(ce(),!0):["ArrowUp","ArrowLeft","PageUp"].indexOf(G)>=0?(le(),!0):G==="Escape"?(be(),!0):!1},_setNote(G){i.value=G,i.dispatchEvent(new Event("input"))}}}});var D5=ke((kT,q5)=>{"use strict";var Ec=tc(),s1=Md(),Zd=jf(),wE=il(),Jd=Sd(),_E=Ma(),i1=!_E.isPhone&&!!(window.matchMedia&&window.matchMedia("(pointer: fine)").matches),{A:ma}=Ea(),{C:yr,PAINTING_X:Lc}=br(),na=e=>Math.max(0,Math.min(1,e)),Ze=(e,t,o)=>e+(t-e)*o,Qo=(e,t,o)=>[Ze(e[0],t[0],o),Ze(e[1],t[1],o),Ze(e[2],t[2],o)],uo=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],ep=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],Ur=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],Xe=(e,t,o)=>{let n=na((o-e)/(t-e));return n*n*(3-2*n)};function ME(e,t,o,n,r,a){if(r<=0)return[e,o];let s=2/n,i=s*r,c=1/(1+i+.48*i*i+.235*i*i*i),h=a*n,f=Math.max(-h,Math.min(h,e-t)),u=e-f,d=(o+s*f)*r,v=(o-s*d)*c,l=u+(f+d)*c;return t-e>0==l>t&&(l=t,v=0),[l,v]}var R5=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,kE=e=>e*e*e,tp=e=>1-Math.pow(1-e,3),En=e=>-(Math.cos(Math.PI*e)-1)/2;function Pn(e,t){let o=e.length-1,n=na(t)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,s=e[Math.max(0,r-1)],i=e[r],c=e[r+1],h=e[Math.min(o,r+2)],f=a*a,u=f*a;return[0,1,2].map(d=>.5*(2*i[d]+(-s[d]+c[d])*a+(2*s[d]-5*i[d]+4*c[d]-h[d])*f+(-s[d]+3*i[d]-3*c[d]+h[d])*u))}var io=(e,t,o,n)=>({eye:e,target:t,fov:o,roll:n||0});function ui(e,t,o){return io(Qo(e.eye,t.eye,o),Qo(e.target,t.target,o),Ze(e.fov,t.fov,o),Ze(e.roll,t.roll,o))}var sp=()=>Xe(.75,1.3,window.innerWidth/window.innerHeight),Br=(e,t)=>ui(e,t,sp()),c1=[7,3.95,yr.hallEnd-.05],SE=[yr.x1,2.9,yr.zc],zc=[16.75,4.55,6.75],ip=[6.92,2.72,14.5],Ja=[7.3,.015,47.1],EE=[zc,[16.2,4,7],[15.3,3.45,6.4],[14.1,3.2,5.7],[12.2,3.35,6.6],[10,3.75,9.6],[8.2,3.8,12.2],[7.3,3.4,13.8],ip],AE=[ip,[7.3,4.6,19.5],[7.6,4.9,23.5],[6.6,4.3,28.5],[7.5,3.2,34],[6.8,2.1,39.5],[7.4,1,44.2],[7.2,.3,46.4],Ja],li=[Lc[0],3,yr.z0],fi=[Lc[1],3,yr.z0],np=47.45,F5=4.6,zE=13.2,TE=1.57,of=[7.55,1.25,46.75],cp=[17.25,2.42,46],lp=[26.05,1.95,46],nf=[36.15,.015,44],u1=()=>Ze(6.8,6.15,sp()),LE=[of,[9.6,1.65,46.2],[12.3,2.05,45.1],[14.6,2.35,44.5],[16.2,2.3,44.7],cp],NE=[cp,[20.2,2.05,45.6],[23.2,1.8,45],lp],hi=[Lc[2],3,yr.z0],rp=[34.8,1.35,46],ms=[7.89,.03,19.03],O5=.36,C5=13.64,Mr=[{side:"left",z:34.5},{side:"left",z:23.5},{side:"left",z:14.6},{side:"right",z:14.6},{side:"right",z:23.5},{side:"right",z:34.5}];function Pa(e){let t=e.side==="left"?1:-1;return Qo([7-t*1,3,e.z+t*.2],[7-t*.6,3.25,e.z+t*.13],sp())}function RE(e){return e.side==="left"?Br(io([8.6,3.9,e.z],[O5,1.45,e.z],76),io([8,3.6,e.z+.7],[O5,3.95,e.z-2],46,-.008)):Br(io([5.4,3.9,e.z],[C5,1.45,e.z],76),io([6,3.6,e.z-.7],[C5,3.95,e.z+2],46,-.008))}var OE=()=>[nf,[35.6,.5,44.6],[33.2,1.5,45.6],[29,2.3,46.1],[23.5,2.7,45.9],[18.5,2.9,45.4],[14.8,3.1,44.3],[11,3.3,41.8],[7.4,3.4,38.8],[5.4,3.3,36.6],Pa(Mr[0])],CE=()=>[Pa(Mr[2]),[3,3.2,13.2],[1.7,3,12],[2.6,3.2,10],[5,3.6,8.9],[7,3.8,8.6],[9,3.6,8.9],[11.4,3.2,10],[12.3,3,12],[11,3.1,13.4],Pa(Mr[3])],PE=()=>[Pa(Mr[5]),[9,3.4,31],[7.8,2.8,27.5],[6.8,1.9,24.5],[7.4,1,21],[7.75,.35,19.6],ms],P5={2:{pos:()=>ip,amp:[.18,.07,.12],tumble:.5},7:{pos:()=>of,amp:[.12,.09,.1],tumble:.55},8:{pos:()=>cp,amp:[.1,.08,.08],tumble:.5},9:{pos:()=>lp,amp:[.09,.06,.07],tumble:.45},10:{pos:()=>rp,amp:[.07,.04,.06],tumble:.35},12:{pos:()=>Pa(Mr[0]),amp:[.12,.08,.1],tumble:.5},13:{pos:()=>Pa(Mr[1]),amp:[.12,.08,.1],tumble:.5},14:{pos:()=>Pa(Mr[2]),amp:[.12,.08,.1],tumble:.5},15:{pos:()=>Pa(Mr[3]),amp:[.12,.08,.1],tumble:.5},16:{pos:()=>Pa(Mr[4]),amp:[.12,.08,.1],tumble:.5},17:{pos:()=>Pa(Mr[5]),amp:[.12,.08,.1],tumble:.5}},vs=[{name:"corridor",ui:"intro",look:{letterbox:1,exposure:1,focus:14,aperture:.25,vignette:.1},cam(e){let t=.9*(1-Math.exp(-e/14)),o=[0,Math.sin(e*.37)*.025,Math.sin(e*.23)*.06],n=Br(io([yr.x0+.9,1.85,yr.zc+.25],[yr.x1,2.85,yr.zc-.1],64),io([yr.x0+1.2,2,yr.zc+.35],[yr.x1,2.6,yr.zc-.15],50));return n.eye=uo(uo(n.eye,[t,0,0]),o),n}},{name:"about",ui:"about",look:{letterbox:.55,exposure:1.32,focus:2.9,aperture:.9,vignette:.12,shafts:.65},cam(e){let t=[Math.sin(e*.21)*.08,Math.sin(e*.33)*.03,-.25*(1-Math.exp(-e/12))],o=Br(io([16.6,1.9,9.2],[17.3,.4,5.6],64),io([15,1.35,7.75],[17.55,1.05,5.5],44,-.02));return o.eye=uo(o.eye,t),o}},{name:"sky",ui:"sky",look:{letterbox:.55,exposure:1,focus:2.1,aperture:.45,vignette:.1,shafts:1},cam(e){let t=[Math.sin(e*.12)*.35,Math.sin(e*.2)*.04,(1-Math.cos(e*.12))*.25],o=Br(io([7,1.35,13],[7.2,7.6,20.4],74,.05),io([6.6,1.5,12.6],[7.3,7.2,20.8],56,.07));return o.eye=uo(o.eye,t),o}},{name:"master",ui:"master",look:{letterbox:.55,exposure:1.12,focus:8,aperture:.6,vignette:.3,shafts:.5},cam(e){let t=[Math.sin(e*.17)*.05,Math.sin(e*.29)*.02,-.35*(1-Math.exp(-e/16))],o=Br(io([7,3.6,43.7],[7,3.85,c1[2]],74),io([7,3.6,41.3],[7,3.95,c1[2]],46));return o.eye=uo(o.eye,t),o}},{name:"story",ui:"story",look:{letterbox:.55,exposure:1,focus:8.1,aperture:.9,vignette:.4,shafts:.4},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],o=Br(io([7,3.9,40.3],[7,1.35,c1[2]],76),io([6.3,3.6,41.2],[3.7,3.95,c1[2]],46,-.008));return o.eye=uo(o.eye,t),o}},{name:"leaf",ui:"leaf",look:{letterbox:.55,exposure:1.15,focus:1.25,aperture:1.3,vignette:.35,shafts:.4},cam(e){let t=[Math.sin(e*.2)*.02,Math.sin(e*.3)*.006,0],o=Br(io([7.15,.15,46],[7.3,.04,Ja[2]],50),io([7.05,.14,45.9],[7.25,.05,Ja[2]],32));return o.eye=uo(o.eye,t),o}},{name:"steps",ui:"steps",look:{letterbox:.9,exposure:1.2,focus:1.6,aperture:1.4,vignette:.4,shafts:.4},cam(e){let t=[Math.sin(e*.2)*.015,0,0],o=Br(io([7.15,.1,46.3],[7.05,.1,np],50),io([7.1,.12,45.85],[7,.2,np],30));return o.eye=uo(o.eye,t),o}},{name:"float",ui:"float",look:{letterbox:.55,exposure:1.1,focus:2.2,aperture:.8,vignette:.3,shafts:.6},cam(e){let t=[Math.sin(e*.17)*.05,Math.sin(e*.27)*.02,0],o=Br(io([7.3,.85,45.65],[7.6,1.38,47.1],64),io([7.25,.82,45.8],[7.65,1.35,47.1],44));return o.eye=uo(o.eye,t),o}},{name:"painting1",ui:"p1",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],o=Br(io([li[0],2.3,46.85],[li[0],1.25,li[2]],74),io([li[0]-.6,2.55,46.85],[li[0]+1.9,2.9,li[2]],46,.008));return o.eye=uo(o.eye,t),o}},{name:"painting2",ui:"p2",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],o=Br(io([fi[0],1.95,46.85],[fi[0],1,fi[2]],74),io([fi[0]-.6,2.1,46.85],[fi[0]+1.9,2.75,fi[2]],46,.008));return o.eye=uo(o.eye,t),o}},{name:"painting3",ui:"p3",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.9},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],o=Br(io([hi[0],1.4,46.85],[hi[0],.6,hi[2]],74),io([hi[0]-.6,1.45,46.85],[hi[0]+1.9,2,hi[2]],46,.008));return o.eye=uo(o.eye,t),o}},{name:"door",ui:"door",look:{letterbox:.8,exposure:1.05,focus:1.45,aperture:1.1,vignette:.35,shafts:1},cam(e){let t=[Math.sin(e*.2)*.02,Math.sin(e*.3)*.006,0],o=Br(io([34.75,.5,44.15],[yr.x1,.8,43.95],66),io([34.75,.45,44.3],[yr.x1,.35,43.95],50));return o.eye=uo(o.eye,t),o}},...Mr.map((e,t)=>({name:"hall"+t,ui:"h"+t,look:{letterbox:.55,exposure:1,focus:7.6,aperture:.7,vignette:.35,shafts:.7},cam(o){let n=[Math.sin(o*.15)*.04,Math.sin(o*.25)*.015,Math.sin(o*.11)*.04],r=RE(e);return r.eye=uo(r.eye,n),r}})),{name:"rest",ui:"end",look:{letterbox:.55,exposure:1.05,focus:2.4,aperture:.5,vignette:.4,shafts:1.15},cam(e){let t=e*.025,o=Br(io([7.75,2.6,18.6],[7.89,0,19.08],60),io([7.75,2.3,18.45],[7.89,0,19.08],46)),n=o.eye[0]-ms[0],r=o.eye[2]-ms[2];return o.eye=[ms[0]+n*Math.cos(t)-r*Math.sin(t),o.eye[1],ms[2]+n*Math.sin(t)+r*Math.cos(t)],o}}],IE=[1,.96,.88];function I5(e,t){return{dur:t,cam(o,n,r){let a=En(o),s=ui(n,r,a),i=Mr[e].side==="left"?1:-1;return s.eye=uo(s.eye,[i*.6*Math.sin(Math.PI*a),.15*Math.sin(Math.PI*a),0]),s},look(o,n,r){let a={};for(let s in r)typeof r[s]=="number"&&(a[s]=Ze(n[s],r[s],o));return a.aperture=Ze(n.aperture,r.aperture,o)*(1-.5*Math.sin(Math.PI*o)),a},leaf(o){let n=En(o),r=Pa(Mr[e]),a=Pa(Mr[e+1]),s=Mr[e].side==="left"?1:-1,i=uo(Qo(r,a,.5),[s*1.2,.5,0]),c=Pn([r,Qo(r,i,.6),i,Qo(a,i,.6),a],n);return{phase:"fly",pos:uo(c,[0,Math.sin(o*Math.PI*5)*.07*Math.sin(Math.PI*o),0]),tumble:.5+.35*Math.sin(Math.PI*o)}}}}var op=[{dur:6.2,cam(e,t,o){if(e<.5){let i=kE(e/.5),c=Qo(t.eye,[yr.x1-3.2,2.6,yr.zc],i),h=Qo(t.target,SE,Xe(0,.6,e/.5));return io(c,h,Ze(t.fov,t.fov-8,i),Ze(t.roll,.04,i))}let n=tp((e-.5)/.5),r=[[ma.cx+.4,10.4,ma.zc+.6],[ma.cx-.6,7.6,ma.zc+1.3],[ma.cx-1.9,4.6,ma.zc+1.75],o.eye],a=[[ma.cx-.1,0,ma.zc-.2],[ma.cx-1,.4,ma.zc-.1],[ma.cx-1.1,.8,ma.zc-.2],o.target];return io(Pn(r,n),Pn(a,n),Ze(o.fov+14,o.fov,n),Ze(-.25,o.roll,n))},look(e,t,o){let n=Xe(.22,.5,e),r=1-Xe(.5,.74,e);return{fade:e<.5?n:r,fadeColor:IE,exposure:Ze(t.exposure,o.exposure,Xe(.5,.9,e))*(1+2.2*(e<.5?Xe(.15,.5,e):1-Xe(.5,.8,e))),letterbox:Ze(t.letterbox,o.letterbox,Xe(.3,.7,e)),aperture:e<.5?t.aperture*(1-e*2):o.aperture*Xe(.6,1,e),focus:Ze(4,o.focus,Xe(.5,1,e)),shafts:Ze(t.shafts,o.shafts,Xe(.4,.6,e)),vignette:Ze(t.vignette,o.vignette,e)}},leaf(){return{phase:"home"}}},{dur:9,cam(e,t,o,n){let r=[t.eye,[15.6,2.4,8.3],[15.4,2.7,7.1],[12.6,2.6,5.4],[9.6,2,7.4],[7.6,1.6,10.6],o.eye],a=Pn(r,En(e)),s=Xe(0,.12,e)*(1-Xe(.82,1,e)),i=Qo(Qo(t.target,o.target,Xe(.55,1,e)),n.pos,s),c=Ze(t.fov,o.fov,Xe(.3,1,e))-6*Math.sin(Math.PI*e),h=Ze(t.roll,o.roll,e)+.05*Math.sin(Math.PI*2*e);return io(a,i,c,h)},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{exposure:Ze(t.exposure,o.exposure,Xe(.25,.75,e)),letterbox:Ze(t.letterbox,o.letterbox,e),focus:Ze(a,o.focus,Xe(.8,1,e)),aperture:Ze(.7,o.aperture,Xe(.8,1,e)),shafts:Ze(t.shafts,o.shafts,Xe(.3,.8,e)),vignette:Ze(t.vignette,o.vignette,e)}},leaf(e){let t=R5(e),o=Math.sin(e*Math.PI*7)*.14*Math.sin(Math.PI*e);return{phase:"fly",pos:uo(Pn(EE,t),[0,Math.sin(e*Math.PI*9)*.05*Math.sin(Math.PI*e),o]),tumble:1-.5*Xe(.8,1,e)}}},{dur:11.5,cam(e,t,o,n){let r=Pn([t.eye,[7,1.9,19],[7.1,1.6,27.5],[6.9,1.1,36],[7,.7,42.5],[7.05,.5,45.7]],Xe(0,.8,e)*.6+En(na(e/.8))*.4),a=Pn([[7.05,.5,45.7],[7,1.2,45.3],[7,2.6,43.8],o.eye],En(Xe(.8,1,e))),s=e<.8?r:a,i=Qo(Qo(t.target,n.pos,Xe(.03,.22,e)),o.target,Xe(.82,1,e)),c=Ze(t.fov,o.fov,Xe(.15,.7,e))-6*Xe(.6,.8,e)*(1-Xe(.85,1,e)),h=Ze(t.roll,o.roll,Xe(0,.6,e))-.04*Math.sin(Math.PI*e);return io(s,i,c,h)},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{exposure:Ze(t.exposure,o.exposure,Xe(.5,1,e)),letterbox:Ze(t.letterbox,o.letterbox,e),focus:Ze(a,o.focus,Xe(.84,1,e)),aperture:Ze(1.1,o.aperture,Xe(.84,1,e)),shafts:Ze(t.shafts,o.shafts,Xe(.2,.9,e)),vignette:Ze(t.vignette,o.vignette,Xe(.5,1,e))}},leaf(e){let t=Ze(R5(e),e,.35),o=Pn(AE,Xe(0,.78,t)),n=Math.sin(e*Math.PI*8)*.35*(1-Xe(.55,.76,e)),r=Xe(.7,.8,e);return{phase:"fly",pos:uo(o,[n,Math.abs(Math.cos(e*Math.PI*8))*.12*(1-r),0]),tumble:1-r,swing:n}}},{dur:2.6,cam(e,t,o){let n=En(e),r=ui(t,o,n);return r.eye=uo(r.eye,[0,0,-.35*Math.sin(Math.PI*n)]),r},look(e,t,o){let n=En(e),r={};for(let a in o)typeof o[a]=="number"&&(r[a]=Ze(t[a],o[a],n));return r},leaf(){return{phase:"floor"}}},{dur:4.5,cam(e,t,o){let n=En(e),r=Pn([t.eye,[6.9,1.7,43.9],[7.05,.45,45.4],o.eye],n),a=Qo(t.target,o.target,Xe(.1,.85,e));return io(r,a,Ze(t.fov,o.fov,Xe(.2,1,e)),Ze(t.roll,o.roll,n))},look(e,t,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Ze(t[r],o[r],Xe(.2,1,e)));return n},leaf(){return{phase:"floor"}}},{dur:5.5,cam(e,t,o){return ui(t,o,En(e))},look(e,t,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Ze(t[r],o[r],En(e)));return n},leaf(){return{phase:"floor"}},walker(e){return Ze(F5,u1(),e)}},{dur:11,kick:e=>na((e-Ac())/(1-Ac())),cam(e,t,o,n){let r=Ac(),a=Xe(0,r,e)*(1-Xe(r+.12,r+.35,e)),s=$5(Math.min(e,Tc)),i=uo(t.target,[(s-t.target[0])*.15*a,0,0]),c=Xe(r+.12,1,e),h=Pn([t.eye,t.eye,uo(t.eye,[0,.12,-.3]),o.eye],c);return i=Qo(i,n.pos,Xe(r+.06,r+.24,e)*(1-Xe(.9,1,e))),i=Qo(i,o.target,Xe(.88,1,e)),io(h,i,Ze(t.fov,o.fov,c),Ze(t.roll,o.roll,c))},look(e,t,o,n,r){let a=Ac(),s=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]),i=Xe(0,.12,e)*(1-Xe(a+.25,a+.5,e));return{letterbox:Ze(Ze(t.letterbox,o.letterbox,Xe(a,1,e)),1.75,i),exposure:Ze(t.exposure,o.exposure,Xe(a,1,e)),focus:e<a?t.focus:Ze(t.focus,s,Xe(a,a+.2,e)),aperture:Ze(t.aperture,o.aperture,Xe(a,1,e)),vignette:Ze(t.vignette,o.vignette,e),shafts:Ze(t.shafts,o.shafts,e)}},leaf(e){let t=na((e-Ac())/(1-Ac()));if(t<=0)return{phase:"floor"};let o=Xe(0,.85,t)*.85+tp(Xe(0,.15,t))*.15;return{phase:"fly",pos:uo(Ja,[(of[0]-Ja[0])*o+Math.sin(t*9)*.08*(1-t),(of[1]-Ja[1])*o,(of[2]-Ja[2])*o+Math.sin(t*7)*.06*(1-t)]),tumble:1.3-.75*t}},walker(e){return e<.985?$5(e):null}},{dur:9,cam(e,t,o,n){let r=En(e),a=Pn([t.eye,[9.4,1.35,45.6],[12.4,2,45.9],[15,2.45,46.5],o.eye],r),s=1-Xe(.6,.92,e),i=Qo(Qo(t.target,n.pos,Xe(0,.15,e)),o.target,1-s),c=Ze(t.fov,o.fov,Xe(.3,1,e)),h=Ze(t.roll,o.roll,r)+.04*Math.sin(Math.PI*e);return io(a,i,c,h)},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Ze(t.letterbox,o.letterbox,e),exposure:Ze(t.exposure,o.exposure,Xe(.3,.8,e)),focus:Ze(a,o.focus,Xe(.6,.95,e)),aperture:Ze(t.aperture,o.aperture,Xe(.6,1,e)),vignette:Ze(t.vignette,o.vignette,e),shafts:Ze(t.shafts,o.shafts,Xe(.3,.8,e))}},leaf(e){let t=En(e);return{phase:"fly",pos:uo(Pn(LE,t),[0,Math.sin(e*Math.PI*5)*.08*Math.sin(Math.PI*e),Math.sin(e*Math.PI*4)*.12*Math.sin(Math.PI*e)]),tumble:.55+.4*Math.sin(Math.PI*e)}}},{dur:6.5,cam(e,t,o){let n=En(e),r=ui(t,o,n);return r.eye=uo(r.eye,[0,.12*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),r},look(e,t,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Ze(t[r],o[r],e));return n.aperture=Ze(t.aperture,o.aperture,e)*(1-.5*Math.sin(Math.PI*e)),n},leaf(e){let t=En(e);return{phase:"fly",pos:uo(Pn(NE,t),[0,Math.sin(e*Math.PI*4)*.07*Math.sin(Math.PI*e),0]),tumble:.5+.3*Math.sin(Math.PI*e)}}},{dur:6.5,cam(e,t,o){let n=En(e),r=ui(t,o,n);return r.eye=uo(r.eye,[0,.1*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),r},look(e,t,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Ze(t[r],o[r],e));return n.aperture=Ze(t.aperture,o.aperture,e)*(1-.5*Math.sin(Math.PI*e)),n},leaf(e){let t=En(e);return{phase:"fly",pos:uo(Pn([lp,[29.2,1.75,45.5],[32.2,1.5,45.4],rp],t),[0,Math.sin(e*Math.PI*4)*.06*Math.sin(Math.PI*e),0]),tumble:.45+.25*Math.sin(Math.PI*e)}}},{dur:6,cam(e,t,o,n){let r=En(e),a=Pn([t.eye,[34.2,1.15,45.6],[34.5,.7,44.8],o.eye],r),s=Xe(.05,.3,e)*(1-Xe(.8,1,e)),i=Qo(Qo(t.target,o.target,Xe(.6,1,e)),n.pos,s);return io(a,i,Ze(t.fov,o.fov,Xe(.2,1,e)),Ze(t.roll,o.roll,r))},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Ze(t.letterbox,o.letterbox,e),exposure:Ze(t.exposure,o.exposure,e),focus:Ze(a,o.focus,Xe(.8,1,e)),aperture:Ze(.9,o.aperture,Xe(.8,1,e)),vignette:Ze(t.vignette,o.vignette,e),shafts:Ze(t.shafts,o.shafts,e)}},leaf(e){let t=Pn([rp,[35.3,.9,45.2],[35.75,.4,44.4],[36,.08,44.05],nf],Xe(0,.85,e)),o=Math.sin(e*Math.PI*6)*.25*(1-Xe(.35,.82,e)),n=Xe(.78,.88,e);return{phase:"fly",pos:uo(t,[0,Math.abs(Math.cos(e*Math.PI*6))*.07*(1-n),o]),tumble:.7*(1-n),swing:o}}},{dur:12,door(e){let t=na((e-.02)/.09);return tp(t)+.07*Math.sin(na((e-.08)/.18)*Math.PI)*(1-na((e-.08)/.3))},cam(e,t,o,n){let r=Math.sin(e*340)*.012*Xe(.02,.05,e)*(1-Xe(.08,.16,e)),a=Xe(.06,1,e),s=Pn([t.eye,[34.3,1,43.6],[31.5,1.9,43.4],[26.5,2.4,43.6],[21,2.6,43.6],[16.5,2.8,43.2],[12.6,3.1,41.2],[9.6,3.4,38],o.eye],a*.55+En(a)*.45),i=uo(n.pos,[1,-.2,-1.45]);s=Qo(s,i,Xe(.1,.22,e)*(1-Xe(.52,.72,e)));let c=Xe(.06,.16,e)*(1-Xe(.86,1,e)),h=Qo(t.target,n.pos,c);h=Qo(h,o.target,Xe(.86,1,e));let f=Ze(t.fov,o.fov,Xe(.1,1,e))+6*Math.sin(Math.PI*Xe(.08,.9,e)),u=Ze(t.roll,o.roll,e)+.06*Math.sin(Math.PI*2*Xe(.1,.9,e))+r;return io(uo(s,[0,r,0]),h,f,u)},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]),s=Xe(.02,.06,e)*(1-Xe(.08,.3,e));return{letterbox:Ze(t.letterbox,o.letterbox,Xe(.1,.4,e)),exposure:Ze(t.exposure,o.exposure,e)*(1+.8*s),focus:Ze(a,o.focus,Xe(.86,1,e)),aperture:Ze(.8,o.aperture,Xe(.86,1,e)),vignette:Ze(t.vignette,o.vignette,e),shafts:Ze(t.shafts,o.shafts,e)+s}},leaf(e){let t=na((e-.05)/.95);if(t<=0)return{phase:"floor"};let o=Pn(OE(),t*.6+En(t)*.4),n=Math.sin(e*Math.PI*9)*.12*Math.sin(Math.PI*t);return{phase:"fly",pos:uo(o,[0,n*.6,n]),tumble:1.4-.8*t}}},...[0,1].map(e=>I5(e,7.5)),{dur:10,cam(e,t,o,n){let r=En(e),a=Pn([t.eye,[7.6,3.2,16.2],[7,2.9,17.2],[6.5,3.2,16],o.eye],r),s=Xe(0,.15,e)*(1-Xe(.85,1,e)),i=Qo(Qo(t.target,o.target,Xe(.5,1,e)),n.pos,s);return io(a,i,Ze(t.fov,o.fov,r)+4*Math.sin(Math.PI*r),Ze(t.roll,o.roll,r))},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Ze(t.letterbox,o.letterbox,e),exposure:Ze(t.exposure,o.exposure,e),focus:Ze(a,o.focus,Xe(.85,1,e)),aperture:Ze(.6,o.aperture,Xe(.85,1,e)),vignette:Ze(t.vignette,o.vignette,e),shafts:Ze(t.shafts,o.shafts,e)}},leaf(e){let t=En(e),o=Pn(CE(),t);return{phase:"fly",pos:uo(o,[0,Math.sin(e*Math.PI*6)*.06*Math.sin(Math.PI*e),0]),tumble:.6+.4*Math.sin(Math.PI*e)}}},...[3,4].map(e=>I5(e,7.5)),{dur:10,cam(e,t,o,n){let r=En(e),a=Pn([t.eye,[7.6,4,30.5],[7.3,4.4,25.5],[7.1,4,21.8],o.eye],r),s=Xe(0,.2,e)*(1-Xe(.9,1,e)),i=Qo(Qo(t.target,o.target,Xe(.5,1,e)),n.pos,s);return io(a,i,Ze(t.fov,o.fov,r),Ze(t.roll,o.roll,r))},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Ze(t.letterbox,o.letterbox,e),exposure:Ze(t.exposure,o.exposure,e),focus:Ze(a,o.focus,Xe(.85,1,e)),aperture:Ze(.7,o.aperture,Xe(.85,1,e)),vignette:Ze(t.vignette,o.vignette,e),shafts:Ze(t.shafts,o.shafts,e)}},leaf(e){let t=Pn(PE(),Xe(0,.86,e)),o=Math.sin(e*Math.PI*7)*.3*(1-Xe(.4,.84,e)),n=Xe(.8,.9,e);return{phase:"fly",pos:uo(t,[o,Math.abs(Math.cos(e*Math.PI*7))*.08*(1-n),0]),tumble:.8*(1-n),swing:o}}}],ap=9.2,Tc=.72;function $5(e){return e<Tc?Ze(u1(),ap,e/Tc):Ze(ap,zE,(e-Tc)/(1-Tc))}function Ac(){return Tc*na((Ja[0]+.15-u1())/(ap-u1()))}var h1={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},l1=e=>Object.assign({},h1,vs[e].look),$E=`
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
`;function oa(e,t,o){let n=document.createElement(e);return t&&(n.className=t),o!==void 0&&(n.innerHTML=o),n}var ci=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function f1(e,t,o){e.querySelectorAll(".tour-line").forEach((n,r)=>{n.style.transitionDelay=(t+r*o).toFixed(2)+"s"})}q5.exports=function(t){let o=/tourdebug/.test(location.search),{fps:n}=t;if(!document.querySelector("link[data-tour-font]")){let X=document.createElement("link");X.rel="stylesheet",X.href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&display=swap",X.setAttribute("data-tour-font",""),document.head.appendChild(X)}let r=Wd(),a=null;fetch("res/hand.json").then(X=>X.ok?X.json():null).then(X=>{a=X}).catch(()=>{});let s=document.createElement("style");s.textContent=$E+`
	.hand-text { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); clip-path: inset(50%); white-space: normal; }
	.tour-body canvas.hand { display: block; cursor: pointer; }`,s.textContent+=`
	body.touring #museum-mobile-controls,
	body.touring .painting-plaque { display: none !important; }`,document.head.appendChild(s);let i=oa("div","tour");i.setAttribute("role","region"),i.setAttribute("aria-label","Guided tour of the gallery. Swipe, scroll or press the arrow keys to move on.");let c=oa("div","tour-mark",ci(s1.name)),h=oa("button","tour-free","Explore freely");h.type="button";let f=oa("div","tour-links",Zd.icons("tour-icon"));f.insertBefore(Xd()("tour-icon"),f.firstChild),f.insertBefore(Bh().button("tour-icon"),f.firstChild.nextSibling);let u=oa("button","tour-free tour-note",'<svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 4c-7 1-11.5 5.5-13 13l-1.5 3 3-1.5c7.500-1.500 12-6 13-13z"/><path d="M5.5 20L13 12.500"/></svg><span>Leave a note</span>');u.type="button",u.setAttribute("aria-label","Leave a note: go to the piano room and the confessional"),f.appendChild(u),i1&&f.appendChild(h);let d=oa("div","tour-progress",vs.map(()=>"<i></i>").join("")),v=oa("div","tour-hint",'<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 15l6-6 6 6"></path></svg><span></span>'),l=v.querySelector("span"),p=oa("div","tour-card tour-intro",`
		<span class="tour-line tour-kicker">A virtual gallery</span>
		<span class="tour-rule"></span>
		<h1 class="tour-line tour-title">${ci(s1.name)}</h1>
		<span class="tour-line tour-sub tour-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</span>`);f1(p,.4,.35);let m=s1.text.split(/\n\s*\n/).map(X=>`<p class="tour-line">${ci(X.trim())}</p>`).join(""),g=oa("div","tour-card tour-about",`
		<span class="tour-line tour-kicker">The artist</span>
		<h2 class="tour-line tour-title">${ci(s1.title)}</h2>
		<span class="tour-rule"></span>
		${Zd.line("tour-line tour-contact")}
		${m}`);f1(g,.25,.28);let x=oa("div","tour-card tour-sky",`
		<span class="tour-line tour-sub">Every painting here waits for the light.</span>`);f1(x,.6,.3);let b=oa("div","tour-card tour-master","");function w(X){let xe=oa("div","tour-card tour-story",`
			<span class="tour-line tour-kicker"></span>
			<h2 class="tour-title tour-letters"></h2>
			<span class="tour-rule"></span>
			<span class="tour-line visit-row"></span>
			<div class="tour-body"></div>`),ot=xe.querySelector(".tour-title"),dt=xe.querySelector(".tour-body");return xe.filled=!1,xe.body=dt,xe.fill=()=>{let gt=X();if(!gt||xe.filled)return;xe.filled=!0;let hn=gt.title||"";xe.querySelector(".tour-kicker").textContent=wE(gt)||"Oil on canvas";let fr=xe.querySelector(".visit-row");fr.innerHTML=Jd.button(gt),fr.hidden=!fr.innerHTML;let Nr=fr.querySelector(".visit-btn");Nr&&(Nr.addEventListener("click",xo=>{xo.stopPropagation(),Jd.open(gt)}),xe.warm=()=>Jd.warm(gt));let un=0;ot.innerHTML=hn.split(" ").map(xo=>'<span class="tour-word">'+xo.split("").map(tr=>`<span style="transition-delay:${(.35+un++*.045).toFixed(3)}s">${ci(tr)}</span>`).join("")+"</span>").join(" "),ot.setAttribute("aria-label",hn);let kr=.35+hn.length*.045+.2;xe.querySelector(".tour-rule").style.transitionDelay=kr.toFixed(2)+"s";let dn=String(gt.description||"").split(/\n\s*\n/).filter(xo=>xo.trim());if(xe.querySelector(".tour-kicker").style.transitionDelay="0.1s",a&&dn.length){dt.innerHTML=dn.map(An=>`<p class="hand-text">${ci(An.trim())}</p>`).join("")+'<div class="hand-wrap"><canvas class="hand" aria-hidden="true"></canvas></div>';let xo=dt.querySelector("canvas"),tr=dn.map(An=>An.trim()).join(`

`),Zo=!1,Bn=!1,Wr=0;dt.addEventListener("wheel",()=>{Zo=!0},{passive:!0}),dt.addEventListener("touchmove",()=>{Zo=!0},{passive:!0});let Vr=parseFloat(getComputedStyle(dt).fontSize)||17,Ko=r(xo,a,{ink:"rgba(244,236,223,0.93)",shadow:"rgba(0,0,0,0.55)",shadowBlur:7,xh:Math.max(8.5,Vr*.56),width:.14,speed:80,pace:.12,minDur:.022,maxTime:An=>3.5+An.length/420,seed:3+hn.length,onPen:An=>{if(Zo)return;let $a=An-dt.clientHeight*.55;$a>dt.scrollTop+4&&(dt.scrollTop+=Math.min(16,$a-dt.scrollTop))}});xo.addEventListener("click",An=>{An.stopPropagation(),clearTimeout(Wr),Bn?Ko.finish():(Bn=!0,Ko.write(tr,!0))}),xe.write=()=>{if(clearTimeout(Wr),Zo=!1,Bn){Ko.write(tr,!0);return}Ko.write("",!0),Wr=setTimeout(()=>{Bn=!0,Ko.write(tr)},kr*.6*1e3)},xe.stopWrite=()=>{clearTimeout(Wr),Ko.stop()};let ya=0;window.addEventListener("resize",()=>{clearTimeout(ya),ya=setTimeout(()=>{Bn&&xe.classList.contains("on")&&Ko.write(tr,!0)},250)})}else dt.innerHTML=dn.map(xo=>`<p class="tour-line">${ci(xo.trim())}</p>`).join(""),dt.querySelectorAll(".tour-line").forEach((xo,tr)=>{xo.style.transitionDelay=(kr+.3+Math.min(tr,6)*.35).toFixed(2)+"s"})},xe}let M=()=>t.paintings?t.paintings():[],k=X=>M().find(xe=>xe.side==="corridor"&&Math.abs(xe.paintingPosition[0]-X)<.5),z=w(()=>M().find(X=>X.side==="end")),P=()=>oa("div","tour-card",""),R=w(()=>k(li[0])),U=w(()=>k(fi[0])),q=w(()=>k(hi[0])),Q=Mr.map(X=>w(()=>M().find(xe=>xe.side===X.side&&Math.abs(xe.paintingPosition[2]-X.z)<.5))),D=oa("div","tour-card tour-endcard",`
		<span class="tour-line tour-kicker">Thank you for walking with me</span>
		<span class="tour-rule"></span>
		<span class="tour-line tour-sub">${i1?"The rest of the gallery is yours to wander.":"Swipe back to return to any painting."}</span>
		<span class="tour-line tour-sub tour-confess-line">Before you leave, the confessional is open.<br>Leave me a note; no one else will read it.</span>
		<div class="tour-line tour-end"><button type="button" class="tour-btn" data-act="confess">Leave something behind</button></div>
		${Zd.line("tour-line tour-contact")}
		<div class="tour-line tour-end">
			${i1?'<button type="button" class="tour-btn" data-act="free">Walk the gallery</button>':""}
			<button type="button" class="tour-btn quiet" data-act="list">All paintings</button>
			<button type="button" class="tour-btn quiet" data-act="replay">Replay</button>
		</div>`);f1(D,.5,.35);let V=[p,g,x,b,z,P(),P(),P(),R,U,q,P(),...Q,D];i.append(...V,c,f,d,v),document.body.appendChild(i);let me=N5()({root:i,avatar:t.avatar,glyphs:()=>a,onExit:()=>{Se=-1,Mt&&(St={start:_},Mt=!1)}});document.body.classList.add("touring");let Ge=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,Re=Ge?"Scroll":"Swipe",be=vs.map((X,xe)=>xe===0?Ge?"Scroll to begin":"Swipe up to begin":xe===1?Re+" to follow the leaf":xe===2?Re+" to follow the light":xe===3?Re+" for its story":xe===6||xe===7||xe===vs.length-1?"":Re+" on"),re=[0];op.forEach(X=>re.push(re[re.length-1]+X.dur));let Ue=re[re.length-1],xt=210,at=95,Ot=.35,Et=1.4,no=.32,bo=1,Yo=1.3,tt=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,zt=2.2,Ft=.7,ro=.9,wo=!0,ce=0,le=0,G=0,Oe=-10,Qe=!1,Se=-1,he=0,At=0,_=0,_t=null,yt=Object.assign({},l1(0)),Gt=vs[0].cam(0),Yt={phase:"home",pos:zc.slice(),tumble:0},So=0,Ho=X=>{let xe=0;for(let ot=1;ot<re.length;ot++)Math.abs(re[ot]-X)<Math.abs(re[xe]-X)&&(xe=ot);return xe};function Lo(X){let xe=V[X];xe&&xe.fill&&(xe.fill(),xe.body.scrollTop=0,xe.offsetWidth),V.forEach((ot,dt)=>{let gt=ot.classList.contains("on");ot.classList.toggle("on",dt===X),dt===X&&!gt&&ot.write&&ot.write(),dt!==X&&gt&&ot.stopWrite&&ot.stopWrite()}),xe&&xe.warm&&xe.warm(),l.textContent=be[X]||"",v.classList.toggle("on",!!be[X])}function co(){V.forEach(X=>{X.stopWrite&&X.classList.contains("on")&&X.stopWrite(),X.classList.remove("on")}),v.classList.remove("on")}let Uo=null,tn=-1;function W(X){if(me.active||!wo||_t)return;let xe=_-Oe>Ot;if(Oe=_,xe||!Uo){let ot=0,dt=Ue;for(let gt=0;gt<re.length;gt++)if(re[gt]<=ce-.02&&(ot=re[gt]),re[gt]>=ce+.02){dt=re[gt];break}Uo={lo:ot,hi:dt}}_<tn||(Qe=!1,G=Math.max(Uo.lo,Math.min(Uo.hi,G+X)),G=Math.max(ce-zt,Math.min(ce+zt,G)))}function Ee(X){if(me.active||!wo||_t)return;let xe=Qe?G:ce,ot;if(X>0)ot=re.findIndex(dt=>dt>xe+.05);else{ot=-1;for(let dt=re.length-1;dt>=0;dt--)if(re[dt]<xe-.05){ot=dt;break}}ot<0||(G=re[ot],Qe=!0,Oe=_)}let ze=null,ue=X=>X.stopPropagation();["touchstart","touchmove","touchend","mousedown","mouseup","click","contextmenu"].forEach(X=>i.addEventListener(X,ue)),i.addEventListener("pointerdown",X=>{if(X.stopPropagation(),!(X.target.closest("button, a")||X.target.closest(".tour-body"))){ze={x:X.clientX,y:X.clientY,lx:X.clientX,ly:X.clientY,t:performance.now(),moved:0,v:0,lt:performance.now()};try{i.setPointerCapture(X.pointerId)}catch(xe){}}}),i.addEventListener("pointermove",X=>{if(!ze)return;let xe=X.clientX-ze.lx,ot=X.clientY-ze.ly;ze.lx=X.clientX,ze.ly=X.clientY;let dt=Math.abs(ot)>=Math.abs(xe)?-ot:-xe;ze.moved+=Math.abs(dt);let gt=performance.now(),hn=dt/at;ze.v=ze.v*.6+hn/Math.max(.008,(gt-ze.lt)/1e3)*.4,ze.lt=gt,ze.moved>6&&W(hn)});let qe=X=>{let xe=ze;if(ze=null,!!xe){if(me.active){xe.moved<10&&performance.now()-xe.t<500?me.tap():xe.y-(X?X.clientY:xe.ly)>30&&me.swipe(1);return}xe.moved<10&&performance.now()-xe.t<500?Ee(1):performance.now()-xe.lt<120&&W(Math.max(-1.6,Math.min(1.6,xe.v*.22)))}};i.addEventListener("pointerup",X=>{X.stopPropagation(),qe(X)}),i.addEventListener("pointercancel",()=>{ze=null}),i.addEventListener("wheel",X=>{if(me.active){if(X.target.closest(".conf-ui"))return;X.preventDefault(),me.wheel(X.deltaY);return}if(X.target.closest(".tour-body")){let ot=X.target.closest(".tour-body"),dt=ot.scrollTop+ot.clientHeight>=ot.scrollHeight-2&&X.deltaY>0,gt=ot.scrollTop<=0&&X.deltaY<0;if(!dt&&!gt)return}X.preventDefault();let xe=X.deltaMode===1?X.deltaY*16:X.deltaMode===2?X.deltaY*window.innerHeight:X.deltaY;W(xe/xt)},{passive:!1}),window.addEventListener("keydown",X=>{if(!wo||_t||document.body.classList.contains("visiting"))return;if(me.active){if(X.stopImmediatePropagation(),X.target&&/TEXTAREA|INPUT|BUTTON/.test(X.target.tagName))return;me.key(X.key)&&X.preventDefault();return}let xe=X.key;if(["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(xe)>=0){if((xe==="Enter"||xe===" ")&&X.target&&X.target.tagName==="BUTTON")return;X.preventDefault(),X.stopImmediatePropagation(),Ee(1)}else["ArrowUp","ArrowLeft","PageUp"].indexOf(xe)>=0?(X.preventDefault(),X.stopImmediatePropagation(),Ee(-1)):xe==="Escape"?(X.preventDefault(),It()):/^[wasdzq]$/i.test(xe)&&X.stopImmediatePropagation()},!0),window.addEventListener("keyup",X=>{wo&&!_t&&/^(Arrow|[wasdzq]$)/i.test(X.key)&&X.stopImmediatePropagation()},!0),h.addEventListener("click",X=>{X.stopPropagation(),It()}),["mousedown","pointerdown"].forEach(X=>u.addEventListener(X,xe=>xe.stopPropagation())),u.addEventListener("click",X=>{X.stopPropagation(),Ut()});let pt=io([8.6,1.75,44.3],[-3,1.85,44.5],55,0),vt=null,Mt=!1;function Ut(){if(!wo||_t||me.active||vt)return;co(),Se=-2;let X=Gt.eye;if(X[0]>.5&&X[0]<13.5&&X[2]>36&&X[2]<50){Mt=!1,me.start(Gt,yt);return}vt={t:0}}D.addEventListener("click",X=>{let xe=X.target.closest("button");xe&&(X.stopPropagation(),xe.dataset.act==="free"&&It(),xe.dataset.act==="replay"&&to(),xe.dataset.act==="list"&&pu().show(!1),xe.dataset.act==="confess"&&(co(),Se=-2,me.start(Gt,yt)))});let Lt=[null,[ma.zc-1.6,Math.PI/2],[11.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[42.5+Lc[0]-7,0],[42.5+Lc[1]-7,0],[42.5+Lc[2]-7,0],[1e3,Math.PI/2],...Mr.map(X=>[X.z-1.6,X.side==="left"?-Math.PI/2:Math.PI/2]),[ms[2]-1.6,Math.PI]],Jt=null,Pt=0;function It(){if(!wo||_t||!i1)return;let X=Ho(ce),xe=Lt[X];Jt=X<=1?{phase:"home",pos:zc.slice()}:X>=3&&X<=6?{phase:"floor",pos:Ja.slice()}:X===11?{phase:"floor",pos:nf.slice()}:X===18?{phase:"floor",pos:ms.slice()}:null,Pt=X>=12?1:0,xe&&n.place&&n.place(xe[0],xe[1]),_t={start:_,fromCam:Gt,fromLook:Object.assign({},yt)},co(),i.hidden=!0,document.body.classList.remove("touring"),t.onExit&&t.onExit()}function to(){ce=G=0,le=0,Qe=!1,Se=-1,he=0,At=0,Yt={phase:"home",pos:zc.slice(),tumble:0},St={start:_}}let St={start:-1},po=!1,Po=[],Nt={prev:null,vel:[0,0,0],axis:[1,0,0],dir:null,bank:0,rock:0,spin:0,fresh:!0};function Wo(X){So+=X*(Yt.phase==="floor"?0:1);let xe=Yt.tumble===void 0?0:Yt.tumble,ot=Ec.fromTranslation(Po,Yt.pos);if(Yt.phase==="home")ot=Ec.rotateY(ot,ot,2.2+Math.sin(So*.9)*.15),ot=Ec.rotateZ(ot,ot,-1+Math.sin(So*1.3)*.12),ot=Ec.rotateX(ot,ot,.4);else if(Yt.phase==="floor")ot=Ec.rotateY(ot,ot,.65),ot=Ec.rotateX(ot,ot,.16);else{let dt=Yt.pos;if(Nt.prev&&X>0){let Sr=[dt[0]-Nt.prev[0],dt[1]-Nt.prev[1],dt[2]-Nt.prev[2]];if(Math.hypot(Sr[0],Sr[1],Sr[2])<1.5){let qc=Math.min(1,X*6);for(let Ms=0;Ms<3;Ms++)Nt.vel[Ms]+=(Sr[Ms]/X-Nt.vel[Ms])*qc}else Nt.vel=[0,0,0]}Nt.prev=dt.slice();let gt=Nt.vel,hn=Math.hypot(gt[0],gt[1],gt[2]),fr=Xe(.25,1.4,hn),Nr=Xe(.5,2,-gt[1]),un=So*.35*(.3+xe)+.65,kr=[Math.cos(un),0,Math.sin(un)];hn>.001&&(kr=Qo(kr,Ur(gt,-1/hn),fr));let dn=Math.min(1,X*4);Nt.axis=Qo(Nt.axis,kr,Nt.fresh?1:dn);let xo=Nt.axis,tr=Math.hypot(xo[0],xo[1],xo[2])||1;xo=Ur(xo,1/tr);let Zo=Gt.eye,Bn=[Zo[0]-dt[0],Zo[1]-dt[1],Zo[2]-dt[2]],Wr=Math.hypot(Bn[0],Bn[1],Bn[2])||1,Vr=Ze(.6,.22,fr),Ko=[Bn[0]/Wr*Vr,1+Bn[1]/Wr*Vr,Bn[2]/Wr*Vr],ya=xo[0]*Ko[0]+xo[1]*Ko[1]+xo[2]*Ko[2];Ko=ep(Ko,Ur(xo,ya));let An=Math.hypot(Ko[0],Ko[1],Ko[2])||1;Ko=Ur(Ko,1/An);let $a=[xo[1]*Ko[2]-xo[2]*Ko[1],xo[2]*Ko[0]-xo[0]*Ko[2],xo[0]*Ko[1]-xo[1]*Ko[0]],No=Math.hypot(gt[0],gt[2]),pn=0;if(No>.15&&Nt.dir&&X>0){let Sr=[gt[0]/No,gt[2]/No];pn=(Nt.dir[0]*Sr[1]-Nt.dir[1]*Sr[0])/X,Nt.dir=Sr}else No>.15&&(Nt.dir=[gt[0]/No,gt[2]/No]);Nt.bank+=(Math.max(-.8,Math.min(.8,pn*.3))*fr-Nt.bank)*Math.min(1,X*3),Nt.rock+=X*(1.5+2.4*fr),Nt.spin+=X*Nr*7*(.4+xe);let ba=Math.sin(Nt.rock)*(.26+.45*xe)*(1-.5*Nr)+Nt.bank+Nt.spin,ws=Math.sin(Nt.rock*.63+1)*(.16+.3*xe)+(Yt.swing||0)*.9,t0=Math.cos(ba),_s=Math.sin(ba),hf=uo(Ur(Ko,t0),Ur($a,_s)),C0=uo(Ur($a,t0),Ur(Ko,-_s));t0=Math.cos(ws),_s=Math.sin(ws);let mi=uo(Ur(xo,t0),Ur(hf,_s)),$c=uo(Ur(hf,t0),Ur(xo,-_s)),m1=Math.sin(Nt.rock+1.5708)*.035*(.3+xe)*(1-.5*fr),v0=uo(dt,Ur($a,m1)),Fc=[mi[0],mi[1],mi[2],0,$c[0],$c[1],$c[2],0,C0[0],C0[1],C0[2],0,v0[0],v0[1],v0[2],1];for(let Sr=0;Sr<16;Sr++)ot[Sr]=Fc[Sr];Nt.fresh=!1}return Yt.phase!=="fly"&&(Nt.prev=null,Nt.vel=[0,0,0],Nt.fresh=!0,Nt.spin=0,Nt.bank=0,Nt.dir=null),{visible:!0,model:ot}}function xa(X){for(let xe in h1)yt[xe]=X[xe]!==void 0?X[xe]:h1[xe]}function p0(X,xe){if(X<=1)return{phase:"home",pos:zc.slice(),tumble:0};let ot=P5[X];if(ot){let dt=ot.amp;return{phase:"fly",pos:uo(ot.pos(),[Math.sin(xe*.55)*dt[0],Math.sin(xe*.8)*dt[1],(1-Math.cos(xe*.45))*dt[2]]),tumble:ot.tumble}}return{phase:"floor",pos:(X>=18?ms:X>=10?nf:Ja).slice(),tumble:0}}let lo=0,_o=null;function Un(X){let xe=Math.min(.1,Math.max(0,X-lo));if(lo=X,_=X,po||(po=!0,St.start=X),_t)return null;if(vt&&(vt.t+=xe,vt.t>=.7&&(vt=null,Mt=!0,me.start(pt,Object.assign({},h1,{fade:1,fadeColor:[0,0,0]})))),me.active){let No=me.update(xe);return Gt=No.camera,xa(No.look),o&&window.__camOverride&&(Gt=window.__camOverride),o&&window.__lookOverride&&Object.assign(yt,window.__lookOverride),{camera:Gt,walker:null,door:1,look:yt,leaf:Wo(xe)}}if(!Qe&&!ze&&_-Oe>Ft){let No=Ho(G);Math.abs(re[No]-G)<ro&&(G=re[No])}let ot=G-ce;if(Qe){let pn=Math.sign(ot)*Math.min(bo,Math.sqrt(2*Yo*Math.abs(ot)))-le;le+=Math.sign(pn)*Math.min(Math.abs(pn),Yo*xe),ce+=le*xe,(ot>0&&ce>=G||ot<0&&ce<=G||Math.abs(G-ce)<1e-4)&&(ce=G,le=0,Qe=!1)}else{let No=ME(ce,G,le,no,xe,3);ce=No[0],le=No[1],Math.abs(G-ce)<1e-4&&Math.abs(le)<.001&&(ce=G,le=0)}let dt=0;for(;dt<op.length-1&&ce>=re[dt+1];)dt++;let gt=op[dt],hn=na((ce-re[dt])/gt.dur),fr=vs[dt],Nr=vs[dt+1],un=Ho(ce);un!==he&&(he=un,At=0);let kr=Math.abs(ce-re[un])<.02;kr&&(At+=xe);let dn=1-Xe(0,1.2,Math.abs(ce-re[un])),xo=gt.leaf(hn);if(xo.pos?Yt=Object.assign({},xo):Yt=Object.assign({},xo,{pos:xo.phase==="home"?zc.slice():(dt>=10?nf:Ja).slice()}),P5[un]&&dn>0){let No=p0(un,At);Yt.pos=Qo(Yt.pos,No.pos,dn)}let tr=gt.walker&&(hn>.01||dt===6)?gt.walker(hn):null;_o=tr==null?null:{x:tr,z:np,heading:Math.PI/2,phase:(tr-F5)/TE};let Zo=gt.cam(hn,fr.cam(0),Nr.cam(0),Yt);if(dn>0&&At>0){let No=vs[un],pn=No.cam(0),ba=No.cam(At);Zo=io(uo(Zo.eye,Ur(ep(ba.eye,pn.eye),dn)),uo(Zo.target,Ur(ep(ba.target,pn.target),dn)),Zo.fov+(ba.fov-pn.fov)*dn,Zo.roll+(ba.roll-pn.roll)*dn)}if(dn>0&&!tt){let No=_,pn=.006*dn,ba=Math.sin(No*.61)*.6+Math.sin(No*1.37+1.3)*.4,ws=Math.sin(No*.47+2.1)*.6+Math.sin(No*1.13+.4)*.4,t0=Math.sin(No*.53+4)*.5+Math.sin(No*.97+2.6)*.5;Zo=io(uo(Zo.eye,[ba*pn,ws*pn*.7,t0*pn]),uo(Zo.target,[ws*pn*1.8,ba*pn*1.4,0]),Zo.fov,Zo.roll+t0*.0012*dn)}Gt=Zo;let Bn=l1(dt),Wr=l1(dt+1),Vr=Object.assign({},Bn,gt.look(hn,Bn,Wr,Yt,Zo.eye));if(dn>0){let No=l1(un);for(let pn in No)typeof No[pn]=="number"&&(Vr[pn]=Ze(Vr[pn],No[pn],dn))}xa(Vr);let ya=kr&&Math.abs(G-ce)<.02?un:-1;ya!==Se&&(ya>=0&&(tn=_+Et),Se=ya,ya>=0?Lo(ya):co()),d.querySelectorAll("i").forEach((No,pn)=>No.classList.toggle("on",pn===un));let An=Se>=0?V[Se]:null;An&&An.fill&&!An.filled&&(An.fill(),An.filled&&(An.classList.remove("on"),An.offsetWidth,An.classList.add("on")));let $a=na((X-St.start)/2.6);return $a<1&&(yt.fade=Math.max(yt.fade,1-Xe(0,1,$a)),yt.fadeColor=[0,0,0]),o&&window.__camOverride&&(Gt=window.__camOverride),o&&window.__lookOverride&&Object.assign(yt,window.__lookOverride),{camera:Gt,walker:_o,door:gt.door?gt.door(hn):dt>=12?1:0,look:vt?Object.assign(yt,{fade:Math.max(yt.fade||0,na(vt.t/.6)),fadeColor:[0,0,0]}):yt,leaf:Wo(xe)}}return o&&(window.__tour={go:Ee,exit:It,wind:W,confess(){co(),Se=-2,me.start(Gt,yt)},note:()=>Ut(),conf:me,paper:o1().STATE,seek(X,xe){ce=G=re[X]+(re[X+1]-re[X])*xe,le=0,Qe=!1,Oe=_+1e6,St.start=_-10,po=!0},jump(X){ce=G=re[X],le=0,Qe=!1,At=0,Oe=_,St.start=_-10,po=!0},state:()=>({current:Ho(ce),scroll:+ce.toFixed(3),target:+G.toFixed(3),shown:Se,move:Math.abs(G-ce)>.02?{p:ce}:null,camNow:Gt,leaf:Yt,look:yt})}),{update:Un,get active(){return wo&&!_t},handover(X){if(!_t)return null;let xe=na((X-_t.start)/1.8);return xe>=1?(wo=!1,null):{from:_t.fromCam,fromLook:_t.fromLook,k:En(xe)}},restingDoor:()=>Pt,restingLeaf(){return Jt?(Yt=Jt,Wo(0)):null},mix:ui,cam:io}}});var FE=ym(),e0=Ma(),wp=pu(),v1=e0.reflection,qE=!1,nb=(e,t,o,n,r)=>n+(e-t)*(r-n)/(o-t),_p=()=>nb(window.innerWidth/window.innerHeight,16/9,9/16,1.7,Math.PI/3);navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)&&(_p=()=>nb(window.innerWidth/window.innerHeight,16/9,9/16,1.5,Math.PI/3));var rb=()=>2*Math.atan(Math.tan(_p()*.5)*window.innerHeight/window.innerWidth),DE=Rm(),cf=new DE;cf.showPanel(0);qE&&document.body.appendChild(cf.dom);var wn,Ic,dp,Oc,pp,bn;function GE(){try{let e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");return!!(t&&t.getExtension("OES_standard_derivatives"))}catch(e){return!1}}if(!GE())throw FE.finish(),wp.show(!0),new Error("This device cannot draw the 3D gallery; showing the list instead.");wn=Om()({extensions:["OES_element_index_uint","OES_standard_derivatives"],optionalExtensions:["EXT_texture_filter_anisotropic","WEBGL_depth_texture"],attributes:{alpha:!1,antialias:!1},pixelRatio:e0.pixelRatio});location.hash==="#list"&&wp.show(!1);window.addEventListener("hashchange",()=>{location.hash==="#list"&&wp.show(!1)});Ic=y2()();var HE=ju();dp=HE(wn,Ic,v1);Oc=qg()(wn,Ic);pp=Ug()(wn);var G5=s3()(wn,Ic),H5=g3()(wn),U5=b3()(wn),B5=$3()(wn),j5=H3()(wn),W5=V3()(wn),ys=cx()(wn),vp=Md(),ab=jf(),UE=il(),mp=Sd(),gp=ar(),er=Eh(),xp=xx(),sb=Bh(),{A:Rc}=Ea();bn=e5()(Ic,rb);var Cc=n5()(wn,e0),gs=c5()(wn),V5=f5()(wn),BE=d5()(wn,e0),jE=y5()(wn,e0),X5=j0()(wn),Y5=o1()(wn),K5=X0()(wn),Q5=Us()(wn),d0=D5()({fps:bn,paintings:()=>Oc.interactables(),avatar:ys,onExit:()=>bn.setPaused(!1)});bn.setPaused(!0);/tourdebug/.test(location.search)&&(window.__post=Cc);var xs=[],Pc=[],Lr=[7,2,1.6];Ic.viewer=Lr;var WE=wn({cull:{enable:!0,face:"back"},uniforms:{view:()=>xs,proj:()=>Pc,yScale:1,mirrorOn:()=>v1?1:0,night:()=>gp.night,time:wn.context("time")}}),VE=wn({cull:{enable:!0,face:"front"},uniforms:{yScale:-1}}),ib=document.createElement("style");ib.textContent=`

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
`;document.head.appendChild(ib);var Ia=document.createElement("button");Ia.className="painting-plaque";Ia.type="button";Ia.setAttribute("aria-label","Read painting");document.body.appendChild(Ia);var jr=document.createElement("div");jr.className="story-overlay";jr.innerHTML=`

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

		${ab.line("story-contact")}

		<div class="visit-row story-visit"></div>

		<p
			class="story-body"
			id="story-body"
		></p>

	</article>
`;document.body.appendChild(jr);var bs=document.createElement("div");bs.className="museum-links";bs.innerHTML=ab.icons("museum-link");bs.insertBefore(Xd()("museum-link"),bs.firstChild);bs.insertBefore(sb.button("museum-link"),bs.firstChild.nextSibling);["mousedown","pointerdown","click"].forEach(e=>bs.addEventListener(e,t=>t.stopPropagation()));document.body.appendChild(bs);var XE=jr.querySelector("#story-title"),YE=jr.querySelector("#story-body"),Z5=jr.querySelector("#story-meta"),KE=jr.querySelector(".story-contact"),sf=jr.querySelector(".story-visit");sf.addEventListener("click",e=>{e.target.closest(".visit-btn")&&vi&&mp.open(vi)});var QE=jr.querySelector(".story-close"),vi=null,ra={p:0,target:0,last:0},cb={title:vp.title,description:vp.text,isAbout:!0},O0=null;function Mp(e){e&&(vi=e,XE.textContent=e.title||"",YE.textContent=e.description||"",Z5.textContent=e.isAbout?"":UE(e),Z5.hidden=!!e.isAbout,KE.hidden=!e.isAbout,sf.innerHTML=e.isAbout?"":mp.button(e),sf.hidden=!sf.innerHTML,sf.hidden||mp.warm(e),jr.classList.toggle("about-mode",!!e.isAbout),jr.classList.add("open"),ra.target=e.isAbout?1:0,O0=e,Ia.classList.remove("visible"),bn.setPaused(!0))}function kp(){jr.classList.remove("open"),ra.target=0,vi=null,O0=null,bn.setPaused(!1)}function lb(e){e&&(e.preventDefault(),e.stopPropagation()),O0&&Mp(O0)}Ia.addEventListener("pointerup",lb,!0);Ia.addEventListener("touchend",lb,{passive:!1,capture:!0});Ia.addEventListener("click",e=>{e&&(e.preventDefault(),e.stopPropagation()),vi===null&&O0&&Mp(O0)},!0);QE.addEventListener("click",kp);jr.addEventListener("click",e=>{e.target===jr&&kp()});window.addEventListener("keydown",e=>{e.code==="Escape"&&jr.classList.contains("open")&&kp()});function J5(e,t){let o=t[0],n=t[1],r=t[2];return[e[0]*o+e[4]*n+e[8]*r+e[12],e[1]*o+e[5]*n+e[9]*r+e[13],e[2]*o+e[6]*n+e[10]*r+e[14],e[3]*o+e[7]*n+e[11]*r+e[15]]}function ZE(){if(vi)return;if(d0.active){O0=null,Ia.classList.remove("visible");return}let e=Oc.interactables(),t=bn.forward[0],o=bn.forward[2],n=Math.hypot(t,o)||1,r=null,a=1/0;for(let s of e){let i=s.paintingPosition,c=0,h=0;s.side==="left"?c=1:s.side==="right"?c=-1:s.side==="corridor"?h=1:h=-1;let f=i[0]-bn.pos[0],u=i[2]-bn.pos[2],d=-(f*c+u*h),v=Math.abs(f*h-u*c),l=-(t*c+o*h)/n,p=s.side==="end"?11:8,m=(s.width||2)/2;l>.9&&d>.5&&d<p&&v<m+.8&&d<a&&(r=s,a=d)}if(!r){let s=bn.pos[0],i=bn.pos[2];t/n>.85&&s<13.6&&i>Rc.z0-.5&&i<Rc.z1+.5&&(r=Object.assign({},cb,{plaqueTitle:vp.name}))}r?(O0=r,Ia.textContent=r.isAbout?"ABOUT  \xB7  "+r.plaqueTitle:"READ  \xB7  "+r.title,Ia.classList.add("visible")):(O0=null,Ia.classList.remove("visible"))}var ff=tc();function JE(){let e=ys.state;if(!e||!e.glowPos)return null;let t=J5(bn.view(),[e.glowPos[0],e.glowPos[1]-.08,e.glowPos[2],1]),o=J5(bn.proj(),t);return o[3]<=.05?null:[(o[0]/o[3]*.5+.5)*window.innerWidth,(.5-o[1]/o[3]*.5)*window.innerHeight,o[3]]}var yp=null;window.addEventListener("pointerdown",e=>{yp={x:e.clientX,y:e.clientY,t:performance.now()}},!0);window.addEventListener("pointerup",e=>{let t=yp;if(yp=null,!t||vi||d0.active||!e.target||!/^(CANVAS|BODY)$/.test(e.target.tagName)||Math.hypot(e.clientX-t.x,e.clientY-t.y)>12||performance.now()-t.t>600)return;let o=JE();if(!o)return;let n=!!document.pointerLockElement,r=n?window.innerWidth/2:e.clientX,a=n?window.innerHeight/2:e.clientY,s=Math.max(e.pointerType==="touch"?60:40,260/o[2]);Math.hypot(r-o[0],a-o[1])<s&&(e.preventDefault(),e.stopPropagation(),Mp(cb))},!0);function eA(e){let t=Math.min(Math.max(e-ra.last,0),.1);ra.last=e;let o=t/1.6;if(ra.p=ra.target>ra.p?Math.min(1,ra.p+o):Math.max(0,ra.p-o),ra.p<=0)return;let n=ra.p<.5?2*ra.p*ra.p:1-Math.pow(-2*ra.p+2,2)/2,r=window.innerHeight>window.innerWidth,a=ys.state,s=a&&a.hipsPos?a.hipsPos[0]:Rc.cx-1.2,i=a&&a.hipsPos?a.hipsPos[2]:Rc.zc,c=r?[s-2.3,2,i-.1]:[s-1.55,1.55,i+.3],h=r?[s+.1,.2,i-.1]:[s+.1,.7,i+.6],f=bn.pos,u=bn.forward,d=[f[0],f[1],f[2]],v=[f[0]+u[0],f[1]+u[1],f[2]+u[2]],l=(x,b)=>x.map((w,M)=>w+(b[M]-w)*n),p=[Rc.cx-6.2,1.7,Rc.zc],m=1-n,g=d.map((x,b)=>m*m*x+2*m*n*p[b]+n*n*c[b]);ff.lookAt(bn.view(),g,l(v,h),[0,1,0])}var fb=/[?&]studio\b/.test(location.search);if(fb){let e=document.createElement("style");e.textContent=".tour, #museum-mobile-controls, .painting-plaque { display: none !important; }",document.head.appendChild(e),window.addEventListener("pointerdown",t=>{bp.takes(t)||ar().toggle()}),window.addEventListener("keydown",t=>{(t.key==="n"||t.key===" ")&&ar().toggle()})}var bp=(()=>{let e={mode:"idle",fedTill:0,offset:0,holdAt:null,now:0,lastShot:-1,doneShot:-1,since:0,hintUntil:0},t=null,o=null,n=null,r=(c,h)=>{n&&(n.textContent=c,n.classList.add("on"),e.hintUntil=h?e.now+h:0)},a=()=>{let c=document.createElement("style");c.textContent=`
.koi-feed { position: fixed; left: 0; right: 0; bottom: 7vh; display: flex; flex-direction: column; align-items: center; gap: 0.6em; z-index: 20; pointer-events: none; font-family: 'Cormorant Garamond', Georgia, serif; }
.koi-feed-btn { pointer-events: none; opacity: 0; transform: translateY(6px); transition: opacity 1.2s ease, transform 1.2s ease; background: rgba(12, 10, 8, 0.28); border: 1px solid rgba(244, 236, 223, 0.38); border-radius: 999px; color: #f4ecdf; font: italic 400 clamp(17px, 2.3vw, 24px)/1 'Cormorant Garamond', Georgia, serif; letter-spacing: 0.06em; padding: 0.7em 1.5em 0.75em; cursor: pointer; text-shadow: 0 1px 8px rgba(0, 0, 0, 0.55); backdrop-filter: blur(3px); -webkit-backdrop-filter: blur(3px); }
.koi-feed-btn.on { opacity: 1; transform: none; pointer-events: auto; }
.koi-feed-btn:hover { background: rgba(12, 10, 8, 0.42); border-color: rgba(244, 236, 223, 0.7); }
.koi-feed-btn .orn { display: inline-block; margin: 0 0.55em; font-style: normal; opacity: 0.75; transform: translateY(-0.05em); }
.koi-feed-hint { opacity: 0; transition: opacity 1.4s ease; color: #f4ecdf; font: italic 400 clamp(16px, 2vw, 21px)/1.3 'Cormorant Garamond', Georgia, serif; letter-spacing: 0.05em; text-shadow: 0 1px 10px rgba(0, 0, 0, 0.7); text-align: center; padding: 0 1em; }
.koi-feed-hint.on { opacity: 0.95; }
.koi-aim, .koi-aim canvas { cursor: crosshair !important; }
`,document.head.appendChild(c),t=document.createElement("div"),t.className="koi-feed",t.innerHTML='<button type="button" class="koi-feed-btn"><span class="orn">\u2766</span>Cast a crumb upon the water<span class="orn">\u2766</span></button><div class="koi-feed-hint"></div>',document.body.appendChild(t),o=t.querySelector(".koi-feed-btn"),n=t.querySelector(".koi-feed-hint"),o.addEventListener("pointerdown",h=>{h.stopPropagation(),e.mode==="idle"&&(e.mode="aim",e.holdAt=e.now-e.offset,e.since=e.now,o.classList.remove("on"),document.body.classList.add("koi-aim"),r("Touch the water where it should fall"))})},s=(c,h)=>{let f=ff.multiply([],Pc,xs),u=ff.invert([],f);if(!u)return null;let d=c/window.innerWidth*2-1,v=1-h/window.innerHeight*2,l=[0,0,0,0];for(let p=0;p<4;p++)l[p]=u[p]*d+u[4+p]*v+u[8+p]*1+u[12+p];return[l[0]/l[3]-Lr[0],l[1]/l[3]-Lr[1],l[2]/l[3]-Lr[2]]},i=()=>{e.holdAt!==null&&(e.offset=e.now-e.holdAt),e.holdAt=null,e.mode="idle",e.doneShot=e.lastShot,document.body.classList.remove("koi-aim"),n&&n.classList.remove("on")};return{time(c){return e.now=c,e.holdAt!==null?e.holdAt:c-e.offset},update(c){t||a(),c.shot!==e.lastShot&&(e.lastShot=c.shot);let h=Us();e.mode==="idle"?o.classList.toggle("on",!!c.pond&&e.doneShot!==c.shot):e.mode==="aim"?e.now-e.since>40&&i():e.mode==="watch"&&(h.feeding()&&(e.fedTill=e.now),(e.now-e.fedTill>5&&e.now-e.since>8||e.now-e.since>60)&&i()),e.hintUntil&&e.now>e.hintUntil&&(n.classList.remove("on"),e.hintUntil=0)},takes(c){if(e.mode==="idle")return!1;let h=Us(),f=s(c.clientX,c.clientY),u=f&&h.poolHit(Lr,f);return u?(h.feedAt(u[0],u[1]),e.fedTill=e.now,e.mode==="aim"&&r("and they come, like embers through the dark",5),e.mode="watch",e.since=e.now,document.body.classList.remove("koi-aim"),!0):(e.mode==="aim"&&r("Upon the water, there\u2026"),!0)}}})(),di={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},pi=null,lf=!1,d1=!1;function tA(e,t,o,n){let r=[o[0]-t[0],o[1]-t[1],o[2]-t[2]],a=Math.hypot(r[0],r[1],r[2])||1,s=[-r[2]/a,0,r[0]/a],i=Math.hypot(s[0],s[2])||1;s=[s[0]/i,0,s[2]/i];let c=Math.cos(n),h=Math.sin(n);return ff.lookAt(e,t,o,[s[0]*h,c,s[2]*h])}function oA(e){let t=window.innerWidth/window.innerHeight,o=Cc.shot,n=d0.active?d0.update(e):null,r=n?null:d0.handover(e),a=null,s=di;if(n){a=n.camera,s=n.look,pi=n.leaf;let i=window.__walkOverride&&/tourdebug/.test(location.search)?window.__walkOverride:n.walker||null;ys.setWalk(i),lf=!!i,gs.setOpen(n.door||0)}else pi=d0.restingLeaf(),ys.setWalk(null),lf=!1,gs.setOpen(d0.restingDoor());if(r){let i=bn.pos,c=bn.forward,h=d0.cam([i[0],i[1],i[2]],[i[0]+c[0],i[1]+c[1],i[2]+c[2]],rb()*180/Math.PI,0);a=d0.mix(r.from,h,r.k),s={};for(let f in di)s[f]=Array.isArray(di[f])?di[f]:r.fromLook[f]+(di[f]-r.fromLook[f])*r.k}if(a&&n&&(a=xp.apply(a,e)),fb&&!(/tourdebug/.test(location.search)&&window.__camOverride)){let i=Us().previewCam(bp.time(e));bp.update(i),a=i,s=Object.assign({},di,{fade:i.fade,focus:8})}if(a)tA(xs,a.eye,a.target,a.roll||0),ff.perspective(Pc,a.fov*Math.PI/180,t,.1,700),Lr[0]=a.eye[0],Lr[1]=a.eye[1],Lr[2]=a.eye[2];else{let i=bn.view(),c=bn.proj();for(let d=0;d<16;d++)xs[d]=i[d],Pc[d]=c[d];let h=i[12],f=i[13],u=i[14];Lr[0]=-(i[0]*h+i[1]*f+i[2]*u),Lr[1]=-(i[4]*h+i[5]*f+i[6]*u),Lr[2]=-(i[8]*h+i[9]*f+i[10]*u)}for(let i in di)o[i]=s[i];n&&xp.pull(o,e)}var ga={wake:[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],wakeDir:[0,0,1],gust:[0,0],focus:6,aperture:0},fp=[9,9,9,9],eb=[0,0,0,0],rf=0,hp=0,Nc=null,tb=0,ob=0,af=0;function nA(e){let t=Math.min(.1,Math.max(0,e-tb));tb=e,ga.focus=Cc.shot.focus,ga.aperture=e0.post>=2?Cc.shot.aperture:0;for(let s=0;s<4;s++)fp[s]+=t,ga.wake[s][3]=eb[s]*Math.exp(-fp[s]/1.1);let o=pi&&pi.visible?pi.model:null;if(o&&t>0){let s=[o[12],o[13],o[14]];if(Nc){let i=[s[0]-Nc[0],s[1]-Nc[1],s[2]-Nc[2]],c=Math.hypot(i[0],i[1],i[2]),h=c/t;if(c<1.5&&h>.12){let f=Math.min(1,t*8);for(let d=0;d<3;d++)ga.wakeDir[d]+=(i[d]/c-ga.wakeDir[d])*f;let u=Math.hypot(ga.wakeDir[0],ga.wakeDir[1],ga.wakeDir[2])||1;for(let d=0;d<3;d++)ga.wakeDir[d]/=u;if(hp+=t,hp>.14){hp=0;let d=ga.wake[rf];d[0]=s[0],d[1]=s[1],d[2]=s[2],eb[rf]=Math.min(1,(h-.12)/1.6)*.5,fp[rf]=0,rf=(rf+1)%4}}}Nc=s}else o||(Nc=null);let n=gs.openNow?gs.openNow():0,r=t>0?(n-ob)/t:0;ob=n;let a=Math.max(-1,Math.min(1,r*1.2));af+=(a-af)*Math.min(1,t*(Math.abs(a)>Math.abs(af)?6:.7)),ga.gust[0]+=af*5.5*t,ga.gust[1]=Math.abs(af)}var up=0,p1=!1;wn.frame(function({time:e}){if(document.body.classList.contains("visiting")){up=0;return}cf.begin(),gp.tick(e);let t=d0.active&&xp.resting&&gp.settled&&(e0.isPhone||e0.scale<1||e0.level>0);if(t){if(p1=!p1,p1){cf.end();return}}else p1=!1;let o=e-up;up=e,e0.frame(t?o/2:o),v1=e0.reflection,bn.tick({time:e}),eA(e),Oc.update(bn.pos,bn.fmouse[1],_p()),ZE(),oA(e),er.update(xs,Pc,Lr),sb.listen(Lr),d1=!lf&&er.room("stair")&&(!er.room("court")||Lr[0]<.5||Lr[2]>30),ys.setPiano(d1),nA(e),Cc.capture(arguments[0],{view:xs,proj:Pc,eye:Lr},()=>{WE(()=>{v1&&er.floor&&VE(()=>{er.room("studio",!0)&&Q5({reflected:!0}),er.zone!=="studio"&&(dp(),G5({reflected:!0}),X5(),er.room("stair",!0)&&(K5({reflected:!0}),Y5({reflected:!0,view:xs})),er.room("court",!0)&&W5(),(d1||er.room("court",!0)||lf)&&ys(),pp(Oc.batch()),er.room("street",!0)&&H5(),er.room("garden",!0)&&B5(),er.room("florence",!0)&&j5(),V5(pi),gs(),U5(),gs.glass())}),er.room("studio")&&Q5(),er.zone!=="studio"&&(dp(),G5(),X5(),er.room("stair")&&(K5(),Y5({view:xs})),er.room("court")&&W5(),(d1||er.room("court")||lf)&&ys(),pp(Oc.batch()),er.room("street")&&H5(),er.room("garden")&&(B5(),jE()),er.room("florence")&&j5(),V5(pi),gs(),BE(ga),U5(),gs.glass())})}),Cc.present(),cf.end()});})();
