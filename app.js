"use strict";(()=>{var pe=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Bp=pe((DS,Up)=>{"use strict";var P0=document.getElementById("loader"),I0=P0&&P0.querySelector(".loader-name"),Js=0,Ml=0,El=!1,G5=performance.now(),O0=.06,R0=0,Dh=0,$p=!1,$5=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function D5(e){if(!I0)return;let t=I0.offsetWidth||1,n=(t*(1.14-1.28*e)-t).toFixed(1)+"px 0";I0.style.webkitMaskPosition=n,I0.style.maskPosition=n}function Hp(e){let t=Math.min(.05,Dh?(e-Dh)/1e3:.016);Dh=e;let o=El?.75:.22+(O0-R0)*1.2;if(R0=Math.min(O0,R0+Math.max(0,o)*t),$5&&(R0=O0),D5(R0),El&&R0>=.999){$p||($p=!0,setTimeout(jp,650));return}requestAnimationFrame(Hp)}I0&&requestAnimationFrame(Hp);function Dp(){let e=Js?Ml/Math.max(Js,24):0;O0=Math.max(O0,Math.min(.9,.06+e*.84))}function jp(){P0&&(P0.classList.add("done"),setTimeout(()=>P0.remove(),1400))}function qh(){El||(El=!0,window.__galleryReady=!0,P0&&(O0=1,I0||jp()))}var qp=null;function q5(){clearTimeout(qp),Ml>=Js&&performance.now()-G5>600&&(qp=setTimeout(()=>{Ml>=Js&&qh()},450))}setTimeout(qh,2e4);var H5=e=>/(^|\/)(res|images)\//.test(e),_l=window.fetch.bind(window);async function j5(e,t){let o=await _l(e+".gz",t);if(!o.ok)throw new Error("no .gz");let n=new Uint8Array(await o.arrayBuffer());if(!(n[0]===31&&n[1]===139))return new Response(n);let r=new Blob([n]).stream().pipeThrough(new DecompressionStream("gzip")),a=await new Response(r).arrayBuffer();return new Response(a,{status:200,headers:{"Content-Type":"application/octet-stream"}})}window.fetch=function(e,t){let o=typeof e=="string"?e:e&&e.url||"";if(!H5(o))return _l(e,t);Js++,Dp();let n=a=>(Ml++,Dp(),q5(),a),r;return/\.bin$/.test(o)&&typeof DecompressionStream!="undefined"?r=j5(o,t).catch(()=>_l(e,t)):r=_l(e,t),r.then(n,a=>{throw n(),a})};Up.exports={finish:qh}});var Cr=pe((qS,Yp)=>{"use strict";var Wp=typeof navigator!="undefined"&&navigator.userAgent||"",U5=typeof window!="undefined"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches&&!window.matchMedia("(any-pointer: fine)").matches,Ma=/Android|iPhone|iPad|iPod|Mobile|Silk|Kindle|webOS|BlackBerry|Opera Mini|IEMobile/i.test(Wp)||/Macintosh/.test(Wp)&&typeof navigator!="undefined"&&navigator.maxTouchPoints>1||U5,Vp=typeof window!="undefined"&&window.devicePixelRatio||1,to={isPhone:Ma,pixelRatio:Ma?Math.min(Vp,1.5):Math.min(Vp,2),reflection:!Ma,gardenDetail:Ma?0:1,leafShare:Ma?.65:1,motion:!Ma,post:Ma?1:2,level:Ma?1:0};to.scale=1;var B5=Ma?.55:.6,ec=0,Sl=0,tc=0,oc=0,F0=1,nc=0,Al=48,G0=null,Hh=0;function W5(e){G0={fps:e,scale:to.scale},to.scale>.86?to.scale=.85:to.reflection?to.stepDown():to.scale>.71?to.scale=.7:to.stepDown()||(to.scale=Math.max(B5,to.scale-.1))}var Xp=!0;try{/[?&]noadapt\b/.test(location.search)&&(Xp=!1)}catch(e){}to.frame=e=>{if(!Xp)return;if(!(e>0)||e>1){ec=0,Sl=0;return}if(ec+=e,Sl++,ec<.75)return;let t=Sl/ec;if(ec=0,Sl=0,nc>0&&(nc-=.75,nc<=0&&(F0=1)),G0){if(t<G0.fps*1.08&&G0.scale>to.scale){if(++Hh>=2){to.scale=1,F0=1,nc=0,Al=Math.min(Al,t*.85),Hh=0,tc=0,G0=null;return}}else Hh=0;G0=null}if(t<Al){if(oc=0,++tc>=2){if(tc=0,to.scale>.61&&to.climbed){F0=to.scale-.05,nc=40,to.scale=F0,to.climbed=!1;return}W5(t)}}else t>Math.max(Al*1.15,55)?(tc=0,++oc>=6&&to.scale<F0-.001?(to.scale=Math.min(F0,to.scale+.05),to.climbed=!0,oc=0):oc>=6&&(to.climbed=!1)):(tc=0,oc=0)};to.stepDown=()=>{if(to.reflection)to.reflection=!1;else if(to.gardenDetail>0||to.motion)to.gardenDetail=0,to.motion=!1,to.leafShare=Math.min(to.leafShare,.65);else if(to.post>0)to.post--;else return!1;return to.level++,!0};Yp.exports=to});var jh=pe((HS,Kp)=>{"use strict";Kp.exports=[{file:"IMG_20250717_102753.jpg",slug:"love-me-like-i-am-already-dead",title:"Love me like I am Already Dead",medium:"Oil on canvas",size:[61,91],description:`We live in a world soaked in hypocrisy. We\u2019re told not to \u201Cspeak ill of the dead,\u201D yet we spend lifetimes speaking ill of the living. We judge, ignore, neglect\u2014and then pretend to mourn with grace when it\u2019s too late. People say beautiful things at funerals, but only after burying a lifetime of cruelty or silence.

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
but the loneliness of having no one willing to admit it happened.`}]});var kl=pe((jS,Jp)=>{"use strict";var Yn={instagram:"muzammil_qureshi",email:"muzammilqureshi100@gmail.com"},Qp='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>',Zp='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>';Yn.instagramUrl="https://instagram.com/"+Yn.instagram;Yn.mailUrl="mailto:"+Yn.email+"?subject="+encodeURIComponent("Your paintings");Yn.icons=e=>`
	<a class="${e}" href="${Yn.instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram: @${Yn.instagram}" title="Instagram">${Qp}</a>
	<a class="${e}" href="${Yn.mailUrl}" aria-label="Email ${Yn.email}" title="Email">${Zp}</a>`;Yn.line=e=>`
	<span class="${e}">
		<a href="${Yn.instagramUrl}" target="_blank" rel="noopener">${Qp}<span>@${Yn.instagram}</span></a>
		<a href="${Yn.mailUrl}">${Zp}<span>${Yn.email}</span></a>
	</span>`;Jp.exports=Yn});var rc=pe((US,ev)=>{"use strict";ev.exports=e=>{if(!e)return"";let t=[];return e.medium&&t.push(e.medium),e.size&&e.size.length===2&&t.push(e.size[0]+" \xD7 "+e.size[1]+" cm"),t.join("  \xB7  ")}});var Uh=pe((BS,nv)=>{"use strict";var V5=jh(),X5=kl(),tv=rc(),Y5=Cr(),Ua=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),K5=`
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
`,Kn=null;function Q5(e){if(Kn){Kn.hidden=!1,requestAnimationFrame(()=>Kn.classList.add("on"));return}let t=document.createElement("style");t.textContent=K5,document.head.appendChild(t);let o=!Y5.isPhone;Kn=document.createElement("div"),Kn.className="plist",Kn.setAttribute("role","region"),Kn.setAttribute("aria-label","All paintings"),Kn.innerHTML=`
		${e?"":'<button type="button" class="plist-close">Back to the gallery</button>'}
		<header class="plist-head">
			<h1>Muzammil</h1>
			<p class="plist-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</p>
			${X5.line("plist-contact")}
		</header>
		${e?'<p class="plist-note">This device could not open the 3D gallery, so here are the paintings on their own.</p>':""}
		<main class="plist-grid">
			${V5.map(r=>`
			<article class="plist-item" id="${Ua(r.slug)}">
				<img loading="lazy" decoding="async" alt="${Ua(r.title)}, ${Ua(tv(r))}"
					src="images/web/${Ua(r.slug)}${o?"":"-1024"}.webp"
					onerror="this.onerror=null;this.src='images/${Ua(r.file)}'">
				<p class="plist-meta">${Ua(tv(r))}</p>
				<h2>${Ua(r.title)}</h2>
				<details><summary>Read its story</summary>
					${String(r.description).split(/\n\s*\n/).map(a=>`<p>${Ua(a.trim())}</p>`).join("")}
				</details>
			</article>`).join("")}
		</main>`,["mousedown","pointerdown","click","wheel","touchstart","touchmove","keydown"].forEach(r=>Kn.addEventListener(r,a=>a.stopPropagation(),{passive:!0}));let n=Kn.querySelector(".plist-close");n&&n.addEventListener("click",ov),document.body.appendChild(Kn),requestAnimationFrame(()=>Kn.classList.add("on"))}function ov(){Kn&&(Kn.classList.remove("on"),setTimeout(()=>{Kn.hidden=!0},500),location.hash==="#list"&&history.replaceState(null,"",location.pathname+location.search))}nv.exports={show:Q5,hide:ov}});var rv=pe((Bh,Wh)=>{(function(e,t){typeof Bh=="object"&&typeof Wh!="undefined"?Wh.exports=t():typeof define=="function"&&define.amd?define(t):e.Stats=t()})(Bh,function(){var e=function(){function t(d){return r.appendChild(d.dom),d}function o(d){for(var h=0;h<r.children.length;h++)r.children[h].style.display=h===d?"block":"none";n=d}var n=0,r=document.createElement("div");r.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",r.addEventListener("click",function(d){d.preventDefault(),o(++n%r.children.length)},!1);var a=(performance||Date).now(),i=a,s=0,c=t(new e.Panel("FPS","#0ff","#002")),f=t(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var l=t(new e.Panel("MB","#f08","#201"));return o(0),{REVISION:16,dom:r,addPanel:t,showPanel:o,begin:function(){a=(performance||Date).now()},end:function(){s++;var d=(performance||Date).now();if(f.update(d-a,200),d>i+1e3&&(c.update(1e3*s/(d-i),100),i=d,s=0,l)){var h=performance.memory;l.update(h.usedJSHeapSize/1048576,h.jsHeapSizeLimit/1048576)}return d},update:function(){a=this.end()},domElement:r,setMode:o}};return e.Panel=function(t,o,n){var r=1/0,a=0,i=Math.round,s=i(window.devicePixelRatio||1),c=80*s,f=48*s,l=3*s,d=2*s,h=3*s,p=15*s,u=74*s,v=30*s,m=document.createElement("canvas");m.width=c,m.height=f,m.style.cssText="width:80px;height:48px";var g=m.getContext("2d");return g.font="bold "+9*s+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=n,g.fillRect(0,0,c,f),g.fillStyle=o,g.fillText(t,l,d),g.fillRect(h,p,u,v),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(h,p,u,v),{dom:m,update:function(y,b){r=Math.min(r,y),a=Math.max(a,y),g.fillStyle=n,g.globalAlpha=1,g.fillRect(0,0,c,p),g.fillStyle=o,g.fillText(i(y)+" "+t+" ("+i(r)+"-"+i(a)+")",l,d),g.drawImage(m,h+s,p,u-s,v,h,p,u-s,v),g.fillRect(h+u-s,p,s,v),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(h+u-s,p,s,i((1-y/b)*v))}}},e})});var av=pe((Vh,Xh)=>{(function(e,t){typeof Vh=="object"&&typeof Xh!="undefined"?Xh.exports=t():typeof define=="function"&&define.amd?define(t):e.createREGL=t()})(Vh,function(){"use strict";var e=function(x){return x instanceof Uint8Array||x instanceof Uint16Array||x instanceof Uint32Array||x instanceof Int8Array||x instanceof Int16Array||x instanceof Int32Array||x instanceof Float32Array||x instanceof Float64Array||x instanceof Uint8ClampedArray},t=function(x,E){for(var N=Object.keys(E),Y=0;Y<N.length;++Y)x[N[Y]]=E[N[Y]];return x},o=`
`;function n(x){return typeof atob!="undefined"?atob(x):"base64:"+x}function r(x){var E=new Error("(regl) "+x);throw console.error(E),E}function a(x,E){x||r(E)}function i(x){return x?": "+x:""}function s(x,E,N){x in E||r("unknown parameter ("+x+")"+i(N)+". possible values: "+Object.keys(E).join())}function c(x,E){e(x)||r("invalid parameter type"+i(E)+". must be a typed array")}function f(x,E){switch(E){case"number":return typeof x=="number";case"object":return typeof x=="object";case"string":return typeof x=="string";case"boolean":return typeof x=="boolean";case"function":return typeof x=="function";case"undefined":return typeof x=="undefined";case"symbol":return typeof x=="symbol"}}function l(x,E,N){f(x,E)||r("invalid parameter type"+i(N)+". expected "+E+", got "+typeof x)}function d(x,E){x>=0&&(x|0)===x||r("invalid parameter type, ("+x+")"+i(E)+". must be a nonnegative integer")}function h(x,E,N){E.indexOf(x)<0&&r("invalid value"+i(N)+". must be one of: "+E)}var p=["gl","canvas","container","attributes","pixelRatio","extensions","optionalExtensions","profile","onDone"];function u(x){Object.keys(x).forEach(function(E){p.indexOf(E)<0&&r('invalid regl constructor argument "'+E+'". must be one of '+p)})}function v(x,E){for(x=x+"";x.length<E;)x=" "+x;return x}function m(){this.name="unknown",this.lines=[],this.index={},this.hasErrors=!1}function g(x,E){this.number=x,this.line=E,this.errors=[]}function y(x,E,N){this.file=x,this.line=E,this.message=N}function b(){var x=new Error,E=(x.stack||x).toString(),N=/compileProcedure.*\n\s*at.*\((.*)\)/.exec(E);if(N)return N[1];var Y=/compileProcedure.*\n\s*at\s+(.*)(\n|$)/.exec(E);return Y?Y[1]:"unknown"}function M(){var x=new Error,E=(x.stack||x).toString(),N=/at REGLCommand.*\n\s+at.*\((.*)\)/.exec(E);if(N)return N[1];var Y=/at REGLCommand.*\n\s+at\s+(.*)\n/.exec(E);return Y?Y[1]:"unknown"}function T(x,E){var N=x.split(`
`),Y=1,ie=0,V={unknown:new m,0:new m};V.unknown.name=V[0].name=E||b(),V.unknown.lines.push(new g(0,""));for(var Z=0;Z<N.length;++Z){var me=N[Z],ye=/^\s*#\s*(\w+)\s+(.+)\s*$/.exec(me);if(ye)switch(ye[1]){case"line":var Me=/(\d+)(\s+\d+)?/.exec(ye[2]);Me&&(Y=Me[1]|0,Me[2]&&(ie=Me[2]|0,ie in V||(V[ie]=new m)));break;case"define":var be=/SHADER_NAME(_B64)?\s+(.*)$/.exec(ye[2]);be&&(V[ie].name=be[1]?n(be[2]):be[2]);break}V[ie].lines.push(new g(Y++,me))}return Object.keys(V).forEach(function(Ae){var Ce=V[Ae];Ce.lines.forEach(function(ge){Ce.index[ge.number]=ge})}),V}function L(x){var E=[];return x.split(`
`).forEach(function(N){if(!(N.length<5)){var Y=/^ERROR:\s+(\d+):(\d+):\s*(.*)$/.exec(N);Y?E.push(new y(Y[1]|0,Y[2]|0,Y[3].trim())):N.length>0&&E.push(new y("unknown",0,N))}}),E}function C(x,E){E.forEach(function(N){var Y=x[N.file];if(Y){var ie=Y.index[N.line];if(ie){ie.errors.push(N),Y.hasErrors=!0;return}}x.unknown.hasErrors=!0,x.unknown.lines[0].errors.push(N)})}function D(x,E,N,Y,ie){if(!x.getShaderParameter(E,x.COMPILE_STATUS)){var V=x.getShaderInfoLog(E),Z=Y===x.FRAGMENT_SHADER?"fragment":"vertex";Ke(N,"string",Z+" shader source must be a string",ie);var me=T(N,ie),ye=L(V);C(me,ye),Object.keys(me).forEach(function(Me){var be=me[Me];if(!be.hasErrors)return;var Ae=[""],Ce=[""];function ge(ke,q){Ae.push(ke),Ce.push(q||"")}ge("file number "+Me+": "+be.name+`
`,"color:red;text-decoration:underline;font-weight:bold"),be.lines.forEach(function(ke){if(ke.errors.length>0){ge(v(ke.number,4)+"|  ","background-color:yellow; font-weight:bold"),ge(ke.line+o,"color:red; background-color:yellow; font-weight:bold");var q=0;ke.errors.forEach(function(J){var _e=J.message,Oe=/^\s*'(.*)'\s*:\s*(.*)$/.exec(_e);if(Oe){var he=Oe[1];switch(_e=Oe[2],he){case"assign":he="=";break}q=Math.max(ke.line.indexOf(he,q),0)}else q=0;ge(v("| ",6)),ge(v("^^^",q+3)+o,"font-weight:bold"),ge(v("| ",6)),ge(_e+o,"font-weight:bold")}),ge(v("| ",6)+o)}else ge(v(ke.number,4)+"|  "),ge(ke.line+o,"color:red")}),typeof document!="undefined"&&!window.chrome?(Ce[0]=Ae.join("%c"),console.log.apply(console,Ce)):console.log(Ae.join(""))}),a.raise("Error compiling "+Z+" shader, "+me[0].name)}}function B(x,E,N,Y,ie){if(!x.getProgramParameter(E,x.LINK_STATUS)){var V=x.getProgramInfoLog(E),Z=T(N,ie),me=T(Y,ie),ye='Error linking program with vertex shader, "'+me[0].name+'", and fragment shader "'+Z[0].name+'"';typeof document!="undefined"?console.log("%c"+ye+o+"%c"+V,"color:red;text-decoration:underline;font-weight:bold","color:red"):console.log(ye+o+V),a.raise(ye)}}function W(x){x._commandRef=b()}function Q(x,E,N,Y){W(x);function ie(ye){return ye?Y.id(ye):0}x._fragId=ie(x.static.frag),x._vertId=ie(x.static.vert);function V(ye,Me){Object.keys(Me).forEach(function(be){ye[Y.id(be)]=!0})}var Z=x._uniformSet={};V(Z,E.static),V(Z,E.dynamic);var me=x._attributeSet={};V(me,N.static),V(me,N.dynamic),x._hasCount="count"in x.static||"count"in x.dynamic||"elements"in x.static||"elements"in x.dynamic}function ce(x,E){var N=M();r(x+" in command "+(E||b())+(N==="unknown"?"":" called from "+N))}function ee(x,E,N){x||ce(E,N||b())}function te(x,E,N,Y){x in E||ce("unknown parameter ("+x+")"+i(N)+". possible values: "+Object.keys(E).join(),Y||b())}function Ke(x,E,N,Y){f(x,E)||ce("invalid parameter type"+i(N)+". expected "+E+", got "+typeof x,Y||b())}function ve(x){x()}function Te(x,E,N){x.texture?h(x.texture._texture.internalformat,E,"unsupported texture format for attachment"):h(x.renderbuffer._renderbuffer.format,N,"unsupported renderbuffer format for attachment")}var re=33071,vt=9728,xt=9984,$t=9985,yt=9986,Bt=9987,Lt=5120,Qt=5121,je=5122,Dt=5123,Fe=5124,Qe=5125,qe=5126,dt=32819,rt=32820,qt=33635,Je=34042,fe=36193,Xe={};Xe[Lt]=Xe[Qt]=1,Xe[je]=Xe[Dt]=Xe[fe]=Xe[qt]=Xe[dt]=Xe[rt]=2,Xe[Fe]=Xe[Qe]=Xe[qe]=Xe[Je]=4;function pt(x,E){return x===rt||x===dt||x===qt?2:x===Je?4:Xe[x]*E}function lt(x){return!(x&x-1)&&!!x}function oo(x,E,N){var Y,ie=E.width,V=E.height,Z=E.channels;a(ie>0&&ie<=N.maxTextureSize&&V>0&&V<=N.maxTextureSize,"invalid texture shape"),(x.wrapS!==re||x.wrapT!==re)&&a(lt(ie)&&lt(V),"incompatible wrap mode for texture, both width and height must be power of 2"),E.mipmask===1?ie!==1&&V!==1&&a(x.minFilter!==xt&&x.minFilter!==yt&&x.minFilter!==$t&&x.minFilter!==Bt,"min filter requires mipmap"):(a(lt(ie)&&lt(V),"texture must be a square power of 2 to support mipmapping"),a(E.mipmask===(ie<<1)-1,"missing or incomplete mipmap data")),E.type===qe&&(N.extensions.indexOf("oes_texture_float_linear")<0&&a(x.minFilter===vt&&x.magFilter===vt,"filter not supported, must enable oes_texture_float_linear"),a(!x.genMipmaps,"mipmap generation not supported with float textures"));var me=E.images;for(Y=0;Y<16;++Y)if(me[Y]){var ye=ie>>Y,Me=V>>Y;a(E.mipmask&1<<Y,"missing mipmap data");var be=me[Y];if(a(be.width===ye&&be.height===Me,"invalid shape for mip images"),a(be.format===E.format&&be.internalformat===E.internalformat&&be.type===E.type,"incompatible type for mip image"),!be.compressed)if(be.data){var Ae=Math.ceil(pt(be.type,Z)*ye/be.unpackAlignment)*be.unpackAlignment;a(be.data.byteLength===Ae*Me,"invalid data for image, buffer size is inconsistent with image format")}else be.element||be.copy}else x.genMipmaps||a((E.mipmask&1<<Y)===0,"extra mipmap data");E.compressed&&a(!x.genMipmaps,"mipmap generation for compressed images not supported")}function Wt(x,E,N,Y){var ie=x.width,V=x.height,Z=x.channels;a(ie>0&&ie<=Y.maxTextureSize&&V>0&&V<=Y.maxTextureSize,"invalid texture shape"),a(ie===V,"cube map must be square"),a(E.wrapS===re&&E.wrapT===re,"wrap mode not supported by cube map");for(var me=0;me<N.length;++me){var ye=N[me];a(ye.width===ie&&ye.height===V,"inconsistent cube map face shape"),E.genMipmaps&&(a(!ye.compressed,"can not generate mipmap for compressed textures"),a(ye.mipmask===1,"can not specify mipmaps and generate mipmaps"));for(var Me=ye.images,be=0;be<16;++be){var Ae=Me[be];if(Ae){var Ce=ie>>be,ge=V>>be;a(ye.mipmask&1<<be,"missing mipmap data"),a(Ae.width===Ce&&Ae.height===ge,"invalid shape for mip images"),a(Ae.format===x.format&&Ae.internalformat===x.internalformat&&Ae.type===x.type,"incompatible type for mip image"),Ae.compressed||(Ae.data?a(Ae.data.byteLength===Ce*ge*Math.max(pt(Ae.type,Z),Ae.unpackAlignment),"invalid data for image, buffer size is inconsistent with image format"):Ae.element||Ae.copy)}}}}var w=t(a,{optional:ve,raise:r,commandRaise:ce,command:ee,parameter:s,commandParameter:te,constructor:u,type:l,commandType:Ke,isTypedArray:c,nni:d,oneOf:h,shaderError:D,linkError:B,callSite:M,saveCommandRef:W,saveDrawInfo:Q,framebufferFormat:Te,guessCommand:b,texture2D:oo,textureCube:Wt}),Mt=0,no=0,ot=5,wo=6;function Tt(x,E){this.id=Mt++,this.type=x,this.data=E}function et(x){return x.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function jt(x){if(x.length===0)return[];var E=x.charAt(0),N=x.charAt(x.length-1);if(x.length>1&&E===N&&(E==='"'||E==="'"))return['"'+et(x.substr(1,x.length-2))+'"'];var Y=/\[(false|true|null|\d+|'[^']*'|"[^"]*")\]/.exec(x);if(Y)return jt(x.substr(0,Y.index)).concat(jt(Y[1])).concat(jt(x.substr(Y.index+Y[0].length)));var ie=x.split(".");if(ie.length===1)return['"'+et(x)+'"'];for(var V=[],Z=0;Z<ie.length;++Z)V=V.concat(jt(ie[Z]));return V}function ro(x){return"["+jt(x).join("][")+"]"}function Ao(x,E){return new Tt(x,ro(E+""))}function Po(x){return typeof x=="function"&&!x._reglType||x instanceof Tt}function qn(x,E){if(typeof x=="function")return new Tt(no,x);if(typeof x=="number"||typeof x=="boolean")return new Tt(ot,x);if(Array.isArray(x))return new Tt(wo,x.map((N,Y)=>qn(N,E+"["+Y+"]")));if(x instanceof Tt)return x;w(!1,"invalid option type in uniform "+E)}var Xt={DynamicVariable:Tt,define:Ao,isDynamic:Po,unbox:qn,accessor:ro},Fa={next:typeof requestAnimationFrame=="function"?function(x){return requestAnimationFrame(x)}:function(x){return setTimeout(x,16)},cancel:typeof cancelAnimationFrame=="function"?function(x){return cancelAnimationFrame(x)}:clearTimeout},gi=typeof performance!="undefined"&&performance.now?function(){return performance.now()}:function(){return+new Date};function v0(){var x={"":0},E=[""];return{id:function(N){var Y=x[N];return Y||(Y=x[N]=E.length,E.push(N),Y)},str:function(N){return E[N]}}}function ya(x,E,N){var Y=document.createElement("canvas");t(Y.style,{border:0,margin:0,padding:0,top:0,left:0}),x.appendChild(Y),x===document.body&&(Y.style.position="absolute",t(x.style,{margin:0,padding:0}));function ie(){var me=window.innerWidth,ye=window.innerHeight;if(x!==document.body){var Me=x.getBoundingClientRect();me=Me.right-Me.left,ye=Me.bottom-Me.top}Y.width=N*me,Y.height=N*ye,t(Y.style,{width:me+"px",height:ye+"px"})}var V;x!==document.body&&typeof ResizeObserver=="function"?(V=new ResizeObserver(function(){setTimeout(ie)}),V.observe(x)):window.addEventListener("resize",ie,!1);function Z(){V?V.disconnect():window.removeEventListener("resize",ie),x.removeChild(Y)}return ie(),{canvas:Y,onDestroy:Z}}function Ga(x,E){function N(Y){try{return x.getContext(Y,E)}catch(ie){return null}}return N("webgl")||N("experimental-webgl")||N("webgl-experimental")}function sa(x){return typeof x.nodeName=="string"&&typeof x.appendChild=="function"&&typeof x.getBoundingClientRect=="function"}function xi(x){return typeof x.drawArrays=="function"||typeof x.drawElements=="function"}function pr(x){return typeof x=="string"?x.split():(w(Array.isArray(x),"invalid extension array"),x)}function Wn(x){return typeof x=="string"?(w(typeof document!="undefined","not supported outside of DOM"),document.querySelector(x)):x}function Co(x){var E=x||{},N,Y,ie,V,Z={},me=[],ye=[],Me=typeof window=="undefined"?1:window.devicePixelRatio,be=!1,Ae=function(ke){ke&&w.raise(ke)},Ce=function(){};if(typeof E=="string"?(w(typeof document!="undefined","selector queries only supported in DOM enviroments"),N=document.querySelector(E),w(N,"invalid query string for element")):typeof E=="object"?sa(E)?N=E:xi(E)?(V=E,ie=V.canvas):(w.constructor(E),"gl"in E?V=E.gl:"canvas"in E?ie=Wn(E.canvas):"container"in E&&(Y=Wn(E.container)),"attributes"in E&&(Z=E.attributes,w.type(Z,"object","invalid context attributes")),"extensions"in E&&(me=pr(E.extensions)),"optionalExtensions"in E&&(ye=pr(E.optionalExtensions)),"onDone"in E&&(w.type(E.onDone,"function","invalid or missing onDone callback"),Ae=E.onDone),"profile"in E&&(be=!!E.profile),"pixelRatio"in E&&(Me=+E.pixelRatio,w(Me>0,"invalid pixel ratio"))):w.raise("invalid arguments to regl"),N&&(N.nodeName.toLowerCase()==="canvas"?ie=N:Y=N),!V){if(!ie){w(typeof document!="undefined","must manually specify webgl context outside of DOM environments");var ge=ya(Y||document.body,Ae,Me);if(!ge)return null;ie=ge.canvas,Ce=ge.onDestroy}Z.premultipliedAlpha===void 0&&(Z.premultipliedAlpha=!0),V=Ga(ie,Z)}return V?{gl:V,canvas:ie,container:Y,extensions:me,optionalExtensions:ye,pixelRatio:Me,profile:be,onDone:Ae,onDestroy:Ce}:(Ce(),Ae("webgl not supported, try upgrading your browser or graphics drivers http://get.webgl.org"),null)}function ao(x,E){var N={};function Y(Z){w.type(Z,"string","extension name must be string");var me=Z.toLowerCase(),ye;try{ye=N[me]=x.getExtension(me)}catch(Me){}return!!ye}for(var ie=0;ie<E.extensions.length;++ie){var V=E.extensions[ie];if(!Y(V))return E.onDestroy(),E.onDone('"'+V+'" extension is not supported by the current WebGL context, try upgrading your system or a different browser'),null}return E.optionalExtensions.forEach(Y),{extensions:N,restore:function(){Object.keys(N).forEach(function(Z){if(N[Z]&&!Y(Z))throw new Error("(regl): error restoring extension "+Z)})}}}function Sn(x,E){for(var N=Array(x),Y=0;Y<x;++Y)N[Y]=E(Y);return N}var Uc=5120,qf=5121,Bc=5122,Wc=5123,Hf=5124,ne=5125,Ee=5126;function st(x){for(var E=16;E<=1<<28;E*=16)if(x<=E)return E;return 0}function ft(x){var E,N;return E=(x>65535)<<4,x>>>=E,N=(x>255)<<3,x>>>=N,E|=N,N=(x>15)<<2,x>>>=N,E|=N,N=(x>3)<<1,x>>>=N,E|=N,E|x>>1}function Ct(){var x=Sn(8,function(){return[]});function E(V){var Z=st(V),me=x[ft(Z)>>2];return me.length>0?me.pop():new ArrayBuffer(Z)}function N(V){x[ft(V.byteLength)>>2].push(V)}function Y(V,Z){var me=null;switch(V){case Uc:me=new Int8Array(E(Z),0,Z);break;case qf:me=new Uint8Array(E(Z),0,Z);break;case Bc:me=new Int16Array(E(2*Z),0,Z);break;case Wc:me=new Uint16Array(E(2*Z),0,Z);break;case Hf:me=new Int32Array(E(4*Z),0,Z);break;case ne:me=new Uint32Array(E(4*Z),0,Z);break;case Ee:me=new Float32Array(E(4*Z),0,Z);break;default:return null}return me.length!==Z?me.subarray(0,Z):me}function ie(V){N(V.buffer)}return{alloc:E,free:N,allocType:Y,freeType:ie}}var Ut=Ct();Ut.zero=Ct();var ir=3408,ba=3410,Rn=3411,Ar=3412,on=3413,eo=3414,In=3415,$o=33901,Pn=33902,kr=3379,Wr=3386,_o=34921,Tr=36347,Vo=36348,Vr=35661,io=35660,Ro=34930,Lr=36349,yi=34076,ca=34024,bi=7936,Vc=7937,Cs=7938,Rs=35724,Is=34047,jf=36063,Ps=34852,m0=3553,Hn=34067,Uf=34069,wi=33984,Os=6408,Bf=5126,K1=5121,Wf=36160,yy=36053,by=36064,wy=16384,_y=function(x,E){var N=1;E.ext_texture_filter_anisotropic&&(N=x.getParameter(Is));var Y=1,ie=1;E.webgl_draw_buffers&&(Y=x.getParameter(Ps),ie=x.getParameter(jf));var V=!!E.oes_texture_float;if(V){var Z=x.createTexture();x.bindTexture(m0,Z),x.texImage2D(m0,0,Os,1,1,0,Os,Bf,null);var me=x.createFramebuffer();if(x.bindFramebuffer(Wf,me),x.framebufferTexture2D(Wf,by,m0,Z,0),x.bindTexture(m0,null),x.checkFramebufferStatus(Wf)!==yy)V=!1;else{x.viewport(0,0,1,1),x.clearColor(1,0,0,1),x.clear(wy);var ye=Ut.allocType(Bf,4);x.readPixels(0,0,1,1,Os,Bf,ye),x.getError()?V=!1:(x.deleteFramebuffer(me),x.deleteTexture(Z),V=ye[0]===1),Ut.freeType(ye)}}var Me=typeof navigator!="undefined"&&(/MSIE/.test(navigator.userAgent)||/Trident\//.test(navigator.appVersion)||/Edge/.test(navigator.userAgent)),be=!0;if(!Me){var Ae=x.createTexture(),Ce=Ut.allocType(K1,36);x.activeTexture(wi),x.bindTexture(Hn,Ae),x.texImage2D(Uf,0,Os,3,3,0,Os,K1,Ce),Ut.freeType(Ce),x.bindTexture(Hn,null),x.deleteTexture(Ae),be=!x.getError()}return{colorBits:[x.getParameter(ba),x.getParameter(Rn),x.getParameter(Ar),x.getParameter(on)],depthBits:x.getParameter(eo),stencilBits:x.getParameter(In),subpixelBits:x.getParameter(ir),extensions:Object.keys(E).filter(function(ge){return!!E[ge]}),maxAnisotropic:N,maxDrawbuffers:Y,maxColorAttachments:ie,pointSizeDims:x.getParameter($o),lineWidthDims:x.getParameter(Pn),maxViewportDims:x.getParameter(Wr),maxCombinedTextureUnits:x.getParameter(Vr),maxCubeMapSize:x.getParameter(yi),maxRenderbufferSize:x.getParameter(ca),maxTextureUnits:x.getParameter(Ro),maxTextureSize:x.getParameter(kr),maxAttributes:x.getParameter(_o),maxVertexUniforms:x.getParameter(Tr),maxVertexTextureUnits:x.getParameter(io),maxVaryingVectors:x.getParameter(Vo),maxFragmentUniforms:x.getParameter(Lr),glsl:x.getParameter(Rs),renderer:x.getParameter(Vc),vendor:x.getParameter(bi),version:x.getParameter(Cs),readFloat:V,npotTextureCube:be}};function Xr(x){return!!x&&typeof x=="object"&&Array.isArray(x.shape)&&Array.isArray(x.stride)&&typeof x.offset=="number"&&x.shape.length===x.stride.length&&(Array.isArray(x.data)||e(x.data))}var vr=function(x){return Object.keys(x).map(function(E){return x[E]})},Xc={shape:Ay,flatten:Sy};function My(x,E,N){for(var Y=0;Y<E;++Y)N[Y]=x[Y]}function Ey(x,E,N,Y){for(var ie=0,V=0;V<E;++V)for(var Z=x[V],me=0;me<N;++me)Y[ie++]=Z[me]}function Q1(x,E,N,Y,ie,V){for(var Z=V,me=0;me<E;++me)for(var ye=x[me],Me=0;Me<N;++Me)for(var be=ye[Me],Ae=0;Ae<Y;++Ae)ie[Z++]=be[Ae]}function Z1(x,E,N,Y,ie){for(var V=1,Z=N+1;Z<E.length;++Z)V*=E[Z];var me=E[N];if(E.length-N===4){var ye=E[N+1],Me=E[N+2],be=E[N+3];for(Z=0;Z<me;++Z)Q1(x[Z],ye,Me,be,Y,ie),ie+=V}else for(Z=0;Z<me;++Z)Z1(x[Z],E,N+1,Y,ie),ie+=V}function Sy(x,E,N,Y){var ie=1;if(E.length)for(var V=0;V<E.length;++V)ie*=E[V];else ie=0;var Z=Y||Ut.allocType(N,ie);switch(E.length){case 0:break;case 1:My(x,E[0],Z);break;case 2:Ey(x,E[0],E[1],Z);break;case 3:Q1(x,E[0],E[1],E[2],Z,0);break;default:Z1(x,E,0,Z,0)}return Z}function Ay(x){for(var E=[],N=x;N.length;N=N[0])E.push(N.length);return E}var Vf={"[object Int8Array]":5120,"[object Int16Array]":5122,"[object Int32Array]":5124,"[object Uint8Array]":5121,"[object Uint8ClampedArray]":5121,"[object Uint16Array]":5123,"[object Uint32Array]":5125,"[object Float32Array]":5126,"[object Float64Array]":5121,"[object ArrayBuffer]":5121},ky=5120,Ty=5122,Ly=5124,zy=5121,Ny=5123,Cy=5125,Ry=5126,Iy=5126,_i={int8:ky,int16:Ty,int32:Ly,uint8:zy,uint16:Ny,uint32:Cy,float:Ry,float32:Iy},Py=35048,Oy=35040,Yc={dynamic:Py,stream:Oy,static:35044},Xf=Xc.flatten,J1=Xc.shape,ed=35044,Fy=35040,Yf=5121,Kf=5126,$a=[];$a[5120]=1,$a[5122]=2,$a[5124]=4,$a[5121]=1,$a[5123]=2,$a[5125]=4,$a[5126]=4;function Kc(x){return Vf[Object.prototype.toString.call(x)]|0}function td(x,E){for(var N=0;N<E.length;++N)x[N]=E[N]}function od(x,E,N,Y,ie,V,Z){for(var me=0,ye=0;ye<N;++ye)for(var Me=0;Me<Y;++Me)x[me++]=E[ie*ye+V*Me+Z]}function Gy(x,E,N,Y){var ie=0,V={};function Z(q){this.id=ie++,this.buffer=x.createBuffer(),this.type=q,this.usage=ed,this.byteLength=0,this.dimension=1,this.dtype=Yf,this.persistentData=null,N.profile&&(this.stats={size:0})}Z.prototype.bind=function(){x.bindBuffer(this.type,this.buffer)},Z.prototype.destroy=function(){Ce(this)};var me=[];function ye(q,J){var _e=me.pop();return _e||(_e=new Z(q)),_e.bind(),Ae(_e,J,Fy,0,1,!1),_e}function Me(q){me.push(q)}function be(q,J,_e){q.byteLength=J.byteLength,x.bufferData(q.type,J,_e)}function Ae(q,J,_e,Oe,he,Ge){var de;if(q.usage=_e,Array.isArray(J)){if(q.dtype=Oe||Kf,J.length>0){var Le;if(Array.isArray(J[0])){de=J1(J);for(var ue=1,ze=1;ze<de.length;++ze)ue*=de[ze];q.dimension=ue,Le=Xf(J,de,q.dtype),be(q,Le,_e),Ge?q.persistentData=Le:Ut.freeType(Le)}else if(typeof J[0]=="number"){q.dimension=he;var tt=Ut.allocType(q.dtype,J.length);td(tt,J),be(q,tt,_e),Ge?q.persistentData=tt:Ut.freeType(tt)}else e(J[0])?(q.dimension=J[0].length,q.dtype=Oe||Kc(J[0])||Kf,Le=Xf(J,[J.length,J[0].length],q.dtype),be(q,Le,_e),Ge?q.persistentData=Le:Ut.freeType(Le)):w.raise("invalid buffer data")}}else if(e(J))q.dtype=Oe||Kc(J),q.dimension=he,be(q,J,_e),Ge&&(q.persistentData=new Uint8Array(new Uint8Array(J.buffer)));else if(Xr(J)){de=J.shape;var mt=J.stride,Re=J.offset,Se=0,le=0,ut=0,St=0;de.length===1?(Se=de[0],le=1,ut=mt[0],St=0):de.length===2?(Se=de[0],le=de[1],ut=mt[0],St=mt[1]):w.raise("invalid shape"),q.dtype=Oe||Kc(J.data)||Kf,q.dimension=le;var Ue=Ut.allocType(q.dtype,Se*le);od(Ue,J.data,Se,le,ut,St,Re),be(q,Ue,_e),Ge?q.persistentData=Ue:Ut.freeType(Ue)}else J instanceof ArrayBuffer?(q.dtype=Yf,q.dimension=he,be(q,J,_e),Ge&&(q.persistentData=new Uint8Array(new Uint8Array(J)))):w.raise("invalid buffer data")}function Ce(q){E.bufferCount--,Y(q);var J=q.buffer;w(J,"buffer must not be deleted already"),x.deleteBuffer(J),q.buffer=null,delete V[q.id]}function ge(q,J,_e,Oe){E.bufferCount++;var he=new Z(J);V[he.id]=he;function Ge(ue){var ze=ed,tt=null,mt=0,Re=0,Se=1;return Array.isArray(ue)||e(ue)||Xr(ue)||ue instanceof ArrayBuffer?tt=ue:typeof ue=="number"?mt=ue|0:ue&&(w.type(ue,"object","buffer arguments must be an object, a number or an array"),"data"in ue&&(w(tt===null||Array.isArray(tt)||e(tt)||Xr(tt),"invalid data for buffer"),tt=ue.data),"usage"in ue&&(w.parameter(ue.usage,Yc,"invalid buffer usage"),ze=Yc[ue.usage]),"type"in ue&&(w.parameter(ue.type,_i,"invalid buffer type"),Re=_i[ue.type]),"dimension"in ue&&(w.type(ue.dimension,"number","invalid dimension"),Se=ue.dimension|0),"length"in ue&&(w.nni(mt,"buffer length must be a nonnegative integer"),mt=ue.length|0)),he.bind(),tt?Ae(he,tt,ze,Re,Se,Oe):(mt&&x.bufferData(he.type,mt,ze),he.dtype=Re||Yf,he.usage=ze,he.dimension=Se,he.byteLength=mt),N.profile&&(he.stats.size=he.byteLength*$a[he.dtype]),Ge}function de(ue,ze){w(ze+ue.byteLength<=he.byteLength,"invalid buffer subdata call, buffer is too small.  Can't write data of size "+ue.byteLength+" starting from offset "+ze+" to a buffer of size "+he.byteLength),x.bufferSubData(he.type,ze,ue)}function Le(ue,ze){var tt=(ze||0)|0,mt;if(he.bind(),e(ue)||ue instanceof ArrayBuffer)de(ue,tt);else if(Array.isArray(ue)){if(ue.length>0)if(typeof ue[0]=="number"){var Re=Ut.allocType(he.dtype,ue.length);td(Re,ue),de(Re,tt),Ut.freeType(Re)}else if(Array.isArray(ue[0])||e(ue[0])){mt=J1(ue);var Se=Xf(ue,mt,he.dtype);de(Se,tt),Ut.freeType(Se)}else w.raise("invalid buffer data")}else if(Xr(ue)){mt=ue.shape;var le=ue.stride,ut=0,St=0,Ue=0,Rt=0;mt.length===1?(ut=mt[0],St=1,Ue=le[0],Rt=0):mt.length===2?(ut=mt[0],St=mt[1],Ue=le[0],Rt=le[1]):w.raise("invalid shape");var gt=Array.isArray(ue.data)?he.dtype:Kc(ue.data),zt=Ut.allocType(gt,ut*St);od(zt,ue.data,ut,St,Ue,Rt,ue.offset),de(zt,tt),Ut.freeType(zt)}else w.raise("invalid data for buffer subdata");return Ge}return _e||Ge(q),Ge._reglType="buffer",Ge._buffer=he,Ge.subdata=Le,N.profile&&(Ge.stats=he.stats),Ge.destroy=function(){Ce(he)},Ge}function ke(){vr(V).forEach(function(q){q.buffer=x.createBuffer(),x.bindBuffer(q.type,q.buffer),x.bufferData(q.type,q.persistentData||q.byteLength,q.usage)})}return N.profile&&(E.getTotalBufferSize=function(){var q=0;return Object.keys(V).forEach(function(J){q+=V[J].stats.size}),q}),{create:ge,createStream:ye,destroyStream:Me,clear:function(){vr(V).forEach(Ce),me.forEach(Ce)},getBuffer:function(q){return q&&q._buffer instanceof Z?q._buffer:null},restore:ke,_initBuffer:Ae}}var $y=0,Dy=0,qy=1,Hy=1,jy=4,Uy=4,g0={points:$y,point:Dy,lines:qy,line:Hy,triangles:jy,triangle:Uy,"line loop":2,"line strip":3,"triangle strip":5,"triangle fan":6},By=0,Wy=1,Fs=4,Vy=5120,x0=5121,nd=5122,y0=5123,rd=5124,Mi=5125,Qf=34963,Xy=35040,Yy=35044;function Ky(x,E,N,Y){var ie={},V=0,Z={uint8:x0,uint16:y0};E.oes_element_index_uint&&(Z.uint32=Mi);function me(ke){this.id=V++,ie[this.id]=this,this.buffer=ke,this.primType=Fs,this.vertCount=0,this.type=0}me.prototype.bind=function(){this.buffer.bind()};var ye=[];function Me(ke){var q=ye.pop();return q||(q=new me(N.create(null,Qf,!0,!1)._buffer)),Ae(q,ke,Xy,-1,-1,0,0),q}function be(ke){ye.push(ke)}function Ae(ke,q,J,_e,Oe,he,Ge){ke.buffer.bind();var de;if(q){var Le=Ge;!Ge&&(!e(q)||Xr(q)&&!e(q.data))&&(Le=E.oes_element_index_uint?Mi:y0),N._initBuffer(ke.buffer,q,J,Le,3)}else x.bufferData(Qf,he,J),ke.buffer.dtype=de||x0,ke.buffer.usage=J,ke.buffer.dimension=3,ke.buffer.byteLength=he;if(de=Ge,!Ge){switch(ke.buffer.dtype){case x0:case Vy:de=x0;break;case y0:case nd:de=y0;break;case Mi:case rd:de=Mi;break;default:w.raise("unsupported type for element array")}ke.buffer.dtype=de}ke.type=de,w(de!==Mi||!!E.oes_element_index_uint,"32 bit element buffers not supported, enable oes_element_index_uint first");var ue=Oe;ue<0&&(ue=ke.buffer.byteLength,de===y0?ue>>=1:de===Mi&&(ue>>=2)),ke.vertCount=ue;var ze=_e;if(_e<0){ze=Fs;var tt=ke.buffer.dimension;tt===1&&(ze=By),tt===2&&(ze=Wy),tt===3&&(ze=Fs)}ke.primType=ze}function Ce(ke){Y.elementsCount--,w(ke.buffer!==null,"must not double destroy elements"),delete ie[ke.id],ke.buffer.destroy(),ke.buffer=null}function ge(ke,q){var J=N.create(null,Qf,!0),_e=new me(J._buffer);Y.elementsCount++;function Oe(he){if(!he)J(),_e.primType=Fs,_e.vertCount=0,_e.type=x0;else if(typeof he=="number")J(he),_e.primType=Fs,_e.vertCount=he|0,_e.type=x0;else{var Ge=null,de=Yy,Le=-1,ue=-1,ze=0,tt=0;Array.isArray(he)||e(he)||Xr(he)?Ge=he:(w.type(he,"object","invalid arguments for elements"),"data"in he&&(Ge=he.data,w(Array.isArray(Ge)||e(Ge)||Xr(Ge),"invalid data for element buffer")),"usage"in he&&(w.parameter(he.usage,Yc,"invalid element buffer usage"),de=Yc[he.usage]),"primitive"in he&&(w.parameter(he.primitive,g0,"invalid element buffer primitive"),Le=g0[he.primitive]),"count"in he&&(w(typeof he.count=="number"&&he.count>=0,"invalid vertex count for elements"),ue=he.count|0),"type"in he&&(w.parameter(he.type,Z,"invalid buffer type"),tt=Z[he.type]),"length"in he?ze=he.length|0:(ze=ue,tt===y0||tt===nd?ze*=2:(tt===Mi||tt===rd)&&(ze*=4))),Ae(_e,Ge,de,Le,ue,ze,tt)}return Oe}return Oe(ke),Oe._reglType="elements",Oe._elements=_e,Oe.subdata=function(he,Ge){return J.subdata(he,Ge),Oe},Oe.destroy=function(){Ce(_e)},Oe}return{create:ge,createStream:Me,destroyStream:be,getElements:function(ke){return typeof ke=="function"&&ke._elements instanceof me?ke._elements:null},clear:function(){vr(ie).forEach(Ce)}}}var ad=new Float32Array(1),Qy=new Uint32Array(ad.buffer),Zy=5123;function id(x){for(var E=Ut.allocType(Zy,x.length),N=0;N<x.length;++N)if(isNaN(x[N]))E[N]=65535;else if(x[N]===1/0)E[N]=31744;else if(x[N]===-1/0)E[N]=64512;else{ad[0]=x[N];var Y=Qy[0],ie=Y>>>31<<15,V=(Y<<1>>>24)-127,Z=Y>>13&1023;if(V<-24)E[N]=ie;else if(V<-14){var me=-14-V;E[N]=ie+(Z+1024>>me)}else V>15?E[N]=ie+31744:E[N]=ie+(V+15<<10)+Z}return E}function Do(x){return Array.isArray(x)||e(x)}var sd=function(x){return!(x&x-1)&&!!x},Jy=34467,la=3553,Zf=34067,Qc=34069,Ei=6408,Jf=6406,Zc=6407,Gs=6409,Jc=6410,cd=32854,eh=32855,ld=36194,eb=32819,tb=32820,ob=33635,nb=34042,th=6402,el=34041,oh=35904,nh=35906,b0=36193,rh=33776,ah=33777,ih=33778,sh=33779,fd=35986,hd=35987,ud=34798,dd=35840,pd=35841,vd=35842,md=35843,gd=36196,w0=5121,ch=5123,lh=5125,$s=5126,rb=10242,ab=10243,ib=10497,fh=33071,sb=33648,cb=10240,lb=10241,hh=9728,fb=9729,uh=9984,xd=9985,yd=9986,dh=9987,hb=33170,tl=4352,ub=4353,db=4354,pb=34046,vb=3317,mb=37440,gb=37441,xb=37443,bd=37444,Ds=33984,yb=[uh,yd,xd,dh],ol=[0,Gs,Jc,Zc,Ei],zr={};zr[Gs]=zr[Jf]=zr[th]=1,zr[el]=zr[Jc]=2,zr[Zc]=zr[oh]=3,zr[Ei]=zr[nh]=4;function _0(x){return"[object "+x+"]"}var wd=_0("HTMLCanvasElement"),_d=_0("OffscreenCanvas"),Md=_0("CanvasRenderingContext2D"),Ed=_0("ImageBitmap"),Sd=_0("HTMLImageElement"),Ad=_0("HTMLVideoElement"),bb=Object.keys(Vf).concat([wd,_d,Md,Ed,Sd,Ad]),M0=[];M0[w0]=1,M0[$s]=4,M0[b0]=2,M0[ch]=2,M0[lh]=4;var An=[];An[cd]=2,An[eh]=2,An[ld]=2,An[el]=4,An[rh]=.5,An[ah]=.5,An[ih]=1,An[sh]=1,An[fd]=.5,An[hd]=1,An[ud]=1,An[dd]=.5,An[pd]=.25,An[vd]=.5,An[md]=.25,An[gd]=.5;function kd(x){return Array.isArray(x)&&(x.length===0||typeof x[0]=="number")}function Td(x){if(!Array.isArray(x))return!1;var E=x.length;return!(E===0||!Do(x[0]))}function Si(x){return Object.prototype.toString.call(x)}function Ld(x){return Si(x)===wd}function zd(x){return Si(x)===_d}function wb(x){return Si(x)===Md}function _b(x){return Si(x)===Ed}function Mb(x){return Si(x)===Sd}function Eb(x){return Si(x)===Ad}function ph(x){if(!x)return!1;var E=Si(x);return bb.indexOf(E)>=0?!0:kd(x)||Td(x)||Xr(x)}function Nd(x){return Vf[Object.prototype.toString.call(x)]|0}function Sb(x,E){var N=E.length;switch(x.type){case w0:case ch:case lh:case $s:var Y=Ut.allocType(x.type,N);Y.set(E),x.data=Y;break;case b0:x.data=id(E);break;default:w.raise("unsupported texture type, must specify a typed array")}}function Cd(x,E){return Ut.allocType(x.type===b0?$s:x.type,E)}function Rd(x,E){x.type===b0?(x.data=id(E),Ut.freeType(E)):x.data=E}function Ab(x,E,N,Y,ie,V){for(var Z=x.width,me=x.height,ye=x.channels,Me=Z*me*ye,be=Cd(x,Me),Ae=0,Ce=0;Ce<me;++Ce)for(var ge=0;ge<Z;++ge)for(var ke=0;ke<ye;++ke)be[Ae++]=E[N*ge+Y*Ce+ie*ke+V];Rd(x,be)}function nl(x,E,N,Y,ie,V){var Z;if(typeof An[x]!="undefined"?Z=An[x]:Z=zr[x]*M0[E],V&&(Z*=6),ie){for(var me=0,ye=N;ye>=1;)me+=Z*ye*ye,ye/=2;return me}else return Z*N*Y}function kb(x,E,N,Y,ie,V,Z){var me={"don't care":tl,"dont care":tl,nice:db,fast:ub},ye={repeat:ib,clamp:fh,mirror:sb},Me={nearest:hh,linear:fb},be=t({mipmap:dh,"nearest mipmap nearest":uh,"linear mipmap nearest":xd,"nearest mipmap linear":yd,"linear mipmap linear":dh},Me),Ae={none:0,browser:bd},Ce={uint8:w0,rgba4:eb,rgb565:ob,"rgb5 a1":tb},ge={alpha:Jf,luminance:Gs,"luminance alpha":Jc,rgb:Zc,rgba:Ei,rgba4:cd,"rgb5 a1":eh,rgb565:ld},ke={};E.ext_srgb&&(ge.srgb=oh,ge.srgba=nh),E.oes_texture_float&&(Ce.float32=Ce.float=$s),E.oes_texture_half_float&&(Ce.float16=Ce["half float"]=b0),E.webgl_depth_texture&&(t(ge,{depth:th,"depth stencil":el}),t(Ce,{uint16:ch,uint32:lh,"depth stencil":nb})),E.webgl_compressed_texture_s3tc&&t(ke,{"rgb s3tc dxt1":rh,"rgba s3tc dxt1":ah,"rgba s3tc dxt3":ih,"rgba s3tc dxt5":sh}),E.webgl_compressed_texture_atc&&t(ke,{"rgb atc":fd,"rgba atc explicit alpha":hd,"rgba atc interpolated alpha":ud}),E.webgl_compressed_texture_pvrtc&&t(ke,{"rgb pvrtc 4bppv1":dd,"rgb pvrtc 2bppv1":pd,"rgba pvrtc 4bppv1":vd,"rgba pvrtc 2bppv1":md}),E.webgl_compressed_texture_etc1&&(ke["rgb etc1"]=gd);var q=Array.prototype.slice.call(x.getParameter(Jy));Object.keys(ke).forEach(function(z){var K=ke[z];q.indexOf(K)>=0&&(ge[z]=K)});var J=Object.keys(ge);N.textureFormats=J;var _e=[];Object.keys(ge).forEach(function(z){var K=ge[z];_e[K]=z});var Oe=[];Object.keys(Ce).forEach(function(z){var K=Ce[z];Oe[K]=z});var he=[];Object.keys(Me).forEach(function(z){var K=Me[z];he[K]=z});var Ge=[];Object.keys(be).forEach(function(z){var K=be[z];Ge[K]=z});var de=[];Object.keys(ye).forEach(function(z){var K=ye[z];de[K]=z});var Le=J.reduce(function(z,K){var U=ge[K];return U===Gs||U===Jf||U===Gs||U===Jc||U===th||U===el||E.ext_srgb&&(U===oh||U===nh)?z[U]=U:U===eh||K.indexOf("rgba")>=0?z[U]=Ei:z[U]=Zc,z},{});function ue(){this.internalformat=Ei,this.format=Ei,this.type=w0,this.compressed=!1,this.premultiplyAlpha=!1,this.flipY=!1,this.unpackAlignment=1,this.colorSpace=bd,this.width=0,this.height=0,this.channels=0}function ze(z,K){z.internalformat=K.internalformat,z.format=K.format,z.type=K.type,z.compressed=K.compressed,z.premultiplyAlpha=K.premultiplyAlpha,z.flipY=K.flipY,z.unpackAlignment=K.unpackAlignment,z.colorSpace=K.colorSpace,z.width=K.width,z.height=K.height,z.channels=K.channels}function tt(z,K){if(!(typeof K!="object"||!K)){if("premultiplyAlpha"in K&&(w.type(K.premultiplyAlpha,"boolean","invalid premultiplyAlpha"),z.premultiplyAlpha=K.premultiplyAlpha),"flipY"in K&&(w.type(K.flipY,"boolean","invalid texture flip"),z.flipY=K.flipY),"alignment"in K&&(w.oneOf(K.alignment,[1,2,4,8],"invalid texture unpack alignment"),z.unpackAlignment=K.alignment),"colorSpace"in K&&(w.parameter(K.colorSpace,Ae,"invalid colorSpace"),z.colorSpace=Ae[K.colorSpace]),"type"in K){var U=K.type;w(E.oes_texture_float||!(U==="float"||U==="float32"),"you must enable the OES_texture_float extension in order to use floating point textures."),w(E.oes_texture_half_float||!(U==="half float"||U==="float16"),"you must enable the OES_texture_half_float extension in order to use 16-bit floating point textures."),w(E.webgl_depth_texture||!(U==="uint16"||U==="uint32"||U==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),w.parameter(U,Ce,"invalid texture type"),z.type=Ce[U]}var De=z.width,It=z.height,A=z.channels,_=!1;"shape"in K?(w(Array.isArray(K.shape)&&K.shape.length>=2,"shape must be an array"),De=K.shape[0],It=K.shape[1],K.shape.length===3&&(A=K.shape[2],w(A>0&&A<=4,"invalid number of channels"),_=!0),w(De>=0&&De<=N.maxTextureSize,"invalid width"),w(It>=0&&It<=N.maxTextureSize,"invalid height")):("radius"in K&&(De=It=K.radius,w(De>=0&&De<=N.maxTextureSize,"invalid radius")),"width"in K&&(De=K.width,w(De>=0&&De<=N.maxTextureSize,"invalid width")),"height"in K&&(It=K.height,w(It>=0&&It<=N.maxTextureSize,"invalid height")),"channels"in K&&(A=K.channels,w(A>0&&A<=4,"invalid number of channels"),_=!0)),z.width=De|0,z.height=It|0,z.channels=A|0;var I=!1;if("format"in K){var $=K.format;w(E.webgl_depth_texture||!($==="depth"||$==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),w.parameter($,ge,"invalid texture format");var H=z.internalformat=ge[$];z.format=Le[H],$ in Ce&&("type"in K||(z.type=Ce[$])),$ in ke&&(z.compressed=!0),I=!0}!_&&I?z.channels=zr[z.format]:_&&!I?z.channels!==ol[z.format]&&(z.format=z.internalformat=ol[z.channels]):I&&_&&w(z.channels===zr[z.format],"number of channels inconsistent with specified format")}}function mt(z){x.pixelStorei(mb,z.flipY),x.pixelStorei(gb,z.premultiplyAlpha),x.pixelStorei(xb,z.colorSpace),x.pixelStorei(vb,z.unpackAlignment)}function Re(){ue.call(this),this.xOffset=0,this.yOffset=0,this.data=null,this.needsFree=!1,this.element=null,this.needsCopy=!1}function Se(z,K){var U=null;if(ph(K)?U=K:K&&(w.type(K,"object","invalid pixel data type"),tt(z,K),"x"in K&&(z.xOffset=K.x|0),"y"in K&&(z.yOffset=K.y|0),ph(K.data)&&(U=K.data)),w(!z.compressed||U instanceof Uint8Array,"compressed texture data must be stored in a uint8array"),K.copy){w(!U,"can not specify copy and data field for the same texture");var De=ie.viewportWidth,It=ie.viewportHeight;z.width=z.width||De-z.xOffset,z.height=z.height||It-z.yOffset,z.needsCopy=!0,w(z.xOffset>=0&&z.xOffset<De&&z.yOffset>=0&&z.yOffset<It&&z.width>0&&z.width<=De&&z.height>0&&z.height<=It,"copy texture read out of bounds")}else if(!U)z.width=z.width||1,z.height=z.height||1,z.channels=z.channels||4;else if(e(U))z.channels=z.channels||4,z.data=U,!("type"in K)&&z.type===w0&&(z.type=Nd(U));else if(kd(U))z.channels=z.channels||4,Sb(z,U),z.alignment=1,z.needsFree=!0;else if(Xr(U)){var A=U.data;!Array.isArray(A)&&z.type===w0&&(z.type=Nd(A));var _=U.shape,I=U.stride,$,H,O,P,F,k;_.length===3?(O=_[2],k=I[2]):(w(_.length===2,"invalid ndarray pixel data, must be 2 or 3D"),O=1,k=1),$=_[0],H=_[1],P=I[0],F=I[1],z.alignment=1,z.width=$,z.height=H,z.channels=O,z.format=z.internalformat=ol[O],z.needsFree=!0,Ab(z,A,P,F,k,U.offset)}else if(Ld(U)||zd(U)||wb(U))Ld(U)||zd(U)?z.element=U:z.element=U.canvas,z.width=z.element.width,z.height=z.element.height,z.channels=4;else if(_b(U))z.element=U,z.width=U.width,z.height=U.height,z.channels=4;else if(Mb(U))z.element=U,z.width=U.naturalWidth,z.height=U.naturalHeight,z.channels=4;else if(Eb(U))z.element=U,z.width=U.videoWidth,z.height=U.videoHeight,z.channels=4;else if(Td(U)){var R=z.width||U[0].length,S=z.height||U.length,G=z.channels;Do(U[0][0])?G=G||U[0][0].length:G=G||1;for(var j=Xc.shape(U),ae=1,se=0;se<j.length;++se)ae*=j[se];var oe=Cd(z,ae);Xc.flatten(U,j,"",oe),Rd(z,oe),z.alignment=1,z.width=R,z.height=S,z.channels=G,z.format=z.internalformat=ol[G],z.needsFree=!0}z.type===$s?w(N.extensions.indexOf("oes_texture_float")>=0,"oes_texture_float extension not enabled"):z.type===b0&&w(N.extensions.indexOf("oes_texture_half_float")>=0,"oes_texture_half_float extension not enabled")}function le(z,K,U){var De=z.element,It=z.data,A=z.internalformat,_=z.format,I=z.type,$=z.width,H=z.height;mt(z),De?x.texImage2D(K,U,_,_,I,De):z.compressed?x.compressedTexImage2D(K,U,A,$,H,0,It):z.needsCopy?(Y(),x.copyTexImage2D(K,U,_,z.xOffset,z.yOffset,$,H,0)):x.texImage2D(K,U,_,$,H,0,_,I,It||null)}function ut(z,K,U,De,It){var A=z.element,_=z.data,I=z.internalformat,$=z.format,H=z.type,O=z.width,P=z.height;mt(z),A?x.texSubImage2D(K,It,U,De,$,H,A):z.compressed?x.compressedTexSubImage2D(K,It,U,De,I,O,P,_):z.needsCopy?(Y(),x.copyTexSubImage2D(K,It,U,De,z.xOffset,z.yOffset,O,P)):x.texSubImage2D(K,It,U,De,O,P,$,H,_)}var St=[];function Ue(){return St.pop()||new Re}function Rt(z){z.needsFree&&Ut.freeType(z.data),Re.call(z),St.push(z)}function gt(){ue.call(this),this.genMipmaps=!1,this.mipmapHint=tl,this.mipmask=0,this.images=Array(16)}function zt(z,K,U){var De=z.images[0]=Ue();z.mipmask=1,De.width=z.width=K,De.height=z.height=U,De.channels=z.channels=4}function Zt(z,K){var U=null;if(ph(K))U=z.images[0]=Ue(),ze(U,z),Se(U,K),z.mipmask=1;else if(tt(z,K),Array.isArray(K.mipmap))for(var De=K.mipmap,It=0;It<De.length;++It)U=z.images[It]=Ue(),ze(U,z),U.width>>=It,U.height>>=It,Se(U,De[It]),z.mipmask|=1<<It;else U=z.images[0]=Ue(),ze(U,z),Se(U,K),z.mipmask=1;ze(z,z.images[0]),z.compressed&&(z.internalformat===rh||z.internalformat===ah||z.internalformat===ih||z.internalformat===sh)&&w(z.width%4===0&&z.height%4===0,"for compressed texture formats, mipmap level 0 must have width and height that are a multiple of 4")}function Yo(z,K){for(var U=z.images,De=0;De<U.length;++De){if(!U[De])return;le(U[De],K,De)}}var ln=[];function Ft(){var z=ln.pop()||new gt;ue.call(z),z.mipmask=0;for(var K=0;K<16;++K)z.images[K]=null;return z}function nn(z){for(var K=z.images,U=0;U<K.length;++U)K[U]&&Rt(K[U]),K[U]=null;ln.push(z)}function Eo(){this.minFilter=hh,this.magFilter=hh,this.wrapS=fh,this.wrapT=fh,this.anisotropic=1,this.genMipmaps=!1,this.mipmapHint=tl}function Ko(z,K){if("min"in K){var U=K.min;w.parameter(U,be),z.minFilter=be[U],yb.indexOf(z.minFilter)>=0&&!("faces"in K)&&(z.genMipmaps=!0)}if("mag"in K){var De=K.mag;w.parameter(De,Me),z.magFilter=Me[De]}var It=z.wrapS,A=z.wrapT;if("wrap"in K){var _=K.wrap;typeof _=="string"?(w.parameter(_,ye),It=A=ye[_]):Array.isArray(_)&&(w.parameter(_[0],ye),w.parameter(_[1],ye),It=ye[_[0]],A=ye[_[1]])}else{if("wrapS"in K){var I=K.wrapS;w.parameter(I,ye),It=ye[I]}if("wrapT"in K){var $=K.wrapT;w.parameter($,ye),A=ye[$]}}if(z.wrapS=It,z.wrapT=A,"anisotropic"in K){var H=K.anisotropic;w(typeof H=="number"&&H>=1&&H<=N.maxAnisotropic,"aniso samples must be between 1 and "),z.anisotropic=K.anisotropic}if("mipmap"in K){var O=!1;switch(typeof K.mipmap){case"string":w.parameter(K.mipmap,me,"invalid mipmap hint"),z.mipmapHint=me[K.mipmap],z.genMipmaps=!0,O=!0;break;case"boolean":O=z.genMipmaps=K.mipmap;break;case"object":w(Array.isArray(K.mipmap),"invalid mipmap type"),z.genMipmaps=!1,O=!0;break;default:w.raise("invalid mipmap type")}O&&!("min"in K)&&(z.minFilter=uh)}}function rn(z,K){x.texParameteri(K,lb,z.minFilter),x.texParameteri(K,cb,z.magFilter),x.texParameteri(K,rb,z.wrapS),x.texParameteri(K,ab,z.wrapT),E.ext_texture_filter_anisotropic&&x.texParameteri(K,pb,z.anisotropic),z.genMipmaps&&(x.hint(hb,z.mipmapHint),x.generateMipmap(K))}var an=0,mn={},kn=N.maxTextureUnits,qo=Array(kn).map(function(){return null});function At(z){ue.call(this),this.mipmask=0,this.internalformat=Ei,this.id=an++,this.refCount=1,this.target=z,this.texture=x.createTexture(),this.unit=-1,this.bindCount=0,this.texInfo=new Eo,Z.profile&&(this.stats={size:0})}function Tn(z){x.activeTexture(Ds),x.bindTexture(z.target,z.texture)}function so(){var z=qo[0];z?x.bindTexture(z.target,z.texture):x.bindTexture(la,null)}function nt(z){var K=z.texture;w(K,"must not double destroy texture");var U=z.unit,De=z.target;U>=0&&(x.activeTexture(Ds+U),x.bindTexture(De,null),qo[U]=null),x.deleteTexture(K),z.texture=null,z.params=null,z.pixels=null,z.refCount=0,delete mn[z.id],V.textureCount--}t(At.prototype,{bind:function(){var z=this;z.bindCount+=1;var K=z.unit;if(K<0){for(var U=0;U<kn;++U){var De=qo[U];if(De){if(De.bindCount>0)continue;De.unit=-1}qo[U]=z,K=U;break}K>=kn&&w.raise("insufficient number of texture units"),Z.profile&&V.maxTextureUnits<K+1&&(V.maxTextureUnits=K+1),z.unit=K,x.activeTexture(Ds+K),x.bindTexture(z.target,z.texture)}return K},unbind:function(){this.bindCount-=1},decRef:function(){--this.refCount<=0&&nt(this)}});function Pt(z,K){var U=new At(la);mn[U.id]=U,V.textureCount++;function De(_,I){var $=U.texInfo;Eo.call($);var H=Ft();return typeof _=="number"?typeof I=="number"?zt(H,_|0,I|0):zt(H,_|0,_|0):_?(w.type(_,"object","invalid arguments to regl.texture"),Ko($,_),Zt(H,_)):zt(H,1,1),$.genMipmaps&&(H.mipmask=(H.width<<1)-1),U.mipmask=H.mipmask,ze(U,H),w.texture2D($,H,N),U.internalformat=H.internalformat,De.width=H.width,De.height=H.height,Tn(U),Yo(H,la),rn($,la),so(),nn(H),Z.profile&&(U.stats.size=nl(U.internalformat,U.type,H.width,H.height,$.genMipmaps,!1)),De.format=_e[U.internalformat],De.type=Oe[U.type],De.mag=he[$.magFilter],De.min=Ge[$.minFilter],De.wrapS=de[$.wrapS],De.wrapT=de[$.wrapT],De}function It(_,I,$,H){w(!!_,"must specify image data");var O=I|0,P=$|0,F=H|0,k=Ue();return ze(k,U),k.width=0,k.height=0,Se(k,_),k.width=k.width||(U.width>>F)-O,k.height=k.height||(U.height>>F)-P,w(U.type===k.type&&U.format===k.format&&U.internalformat===k.internalformat,"incompatible format for texture.subimage"),w(O>=0&&P>=0&&O+k.width<=U.width&&P+k.height<=U.height,"texture.subimage write out of bounds"),w(U.mipmask&1<<F,"missing mipmap data"),w(k.data||k.element||k.needsCopy,"missing image data"),Tn(U),ut(k,la,O,P,F),so(),Rt(k),De}function A(_,I){var $=_|0,H=I|0||$;if($===U.width&&H===U.height)return De;De.width=U.width=$,De.height=U.height=H,Tn(U);for(var O=0;U.mipmask>>O;++O){var P=$>>O,F=H>>O;if(!P||!F)break;x.texImage2D(la,O,U.format,P,F,0,U.format,U.type,null)}return so(),Z.profile&&(U.stats.size=nl(U.internalformat,U.type,$,H,!1,!1)),De}return De(z,K),De.subimage=It,De.resize=A,De._reglType="texture2d",De._texture=U,Z.profile&&(De.stats=U.stats),De.destroy=function(){U.decRef()},De}function Vt(z,K,U,De,It,A){var _=new At(Zf);mn[_.id]=_,V.cubeCount++;var I=new Array(6);function $(P,F,k,R,S,G){var j,ae=_.texInfo;for(Eo.call(ae),j=0;j<6;++j)I[j]=Ft();if(typeof P=="number"||!P){var se=P|0||1;for(j=0;j<6;++j)zt(I[j],se,se)}else if(typeof P=="object")if(F)Zt(I[0],P),Zt(I[1],F),Zt(I[2],k),Zt(I[3],R),Zt(I[4],S),Zt(I[5],G);else if(Ko(ae,P),tt(_,P),"faces"in P){var oe=P.faces;for(w(Array.isArray(oe)&&oe.length===6,"cube faces must be a length 6 array"),j=0;j<6;++j)w(typeof oe[j]=="object"&&!!oe[j],"invalid input for cube map face"),ze(I[j],_),Zt(I[j],oe[j])}else for(j=0;j<6;++j)Zt(I[j],P);else w.raise("invalid arguments to cube map");for(ze(_,I[0]),N.npotTextureCube||w(sd(_.width)&&sd(_.height),"your browser does not support non power or two texture dimensions"),ae.genMipmaps?_.mipmask=(I[0].width<<1)-1:_.mipmask=I[0].mipmask,w.textureCube(_,ae,I,N),_.internalformat=I[0].internalformat,$.width=I[0].width,$.height=I[0].height,Tn(_),j=0;j<6;++j)Yo(I[j],Qc+j);for(rn(ae,Zf),so(),Z.profile&&(_.stats.size=nl(_.internalformat,_.type,$.width,$.height,ae.genMipmaps,!0)),$.format=_e[_.internalformat],$.type=Oe[_.type],$.mag=he[ae.magFilter],$.min=Ge[ae.minFilter],$.wrapS=de[ae.wrapS],$.wrapT=de[ae.wrapT],j=0;j<6;++j)nn(I[j]);return $}function H(P,F,k,R,S){w(!!F,"must specify image data"),w(typeof P=="number"&&P===(P|0)&&P>=0&&P<6,"invalid face");var G=k|0,j=R|0,ae=S|0,se=Ue();return ze(se,_),se.width=0,se.height=0,Se(se,F),se.width=se.width||(_.width>>ae)-G,se.height=se.height||(_.height>>ae)-j,w(_.type===se.type&&_.format===se.format&&_.internalformat===se.internalformat,"incompatible format for texture.subimage"),w(G>=0&&j>=0&&G+se.width<=_.width&&j+se.height<=_.height,"texture.subimage write out of bounds"),w(_.mipmask&1<<ae,"missing mipmap data"),w(se.data||se.element||se.needsCopy,"missing image data"),Tn(_),ut(se,Qc+P,G,j,ae),so(),Rt(se),$}function O(P){var F=P|0;if(F!==_.width){$.width=_.width=F,$.height=_.height=F,Tn(_);for(var k=0;k<6;++k)for(var R=0;_.mipmask>>R;++R)x.texImage2D(Qc+k,R,_.format,F>>R,F>>R,0,_.format,_.type,null);return so(),Z.profile&&(_.stats.size=nl(_.internalformat,_.type,$.width,$.height,!1,!0)),$}}return $(z,K,U,De,It,A),$.subimage=H,$.resize=O,$._reglType="textureCube",$._texture=_,Z.profile&&($.stats=_.stats),$.destroy=function(){_.decRef()},$}function Ho(){for(var z=0;z<kn;++z)x.activeTexture(Ds+z),x.bindTexture(la,null),qo[z]=null;vr(mn).forEach(nt),V.cubeCount=0,V.textureCount=0}Z.profile&&(V.getTotalTextureSize=function(){var z=0;return Object.keys(mn).forEach(function(K){z+=mn[K].stats.size}),z});function ha(){for(var z=0;z<kn;++z){var K=qo[z];K&&(K.bindCount=0,K.unit=-1,qo[z]=null)}vr(mn).forEach(function(U){U.texture=x.createTexture(),x.bindTexture(U.target,U.texture);for(var De=0;De<32;++De)if(U.mipmask&1<<De)if(U.target===la)x.texImage2D(la,De,U.internalformat,U.width>>De,U.height>>De,0,U.internalformat,U.type,null);else for(var It=0;It<6;++It)x.texImage2D(Qc+It,De,U.internalformat,U.width>>De,U.height>>De,0,U.internalformat,U.type,null);rn(U.texInfo,U.target)})}function Ci(){for(var z=0;z<kn;++z){var K=qo[z];K&&(K.bindCount=0,K.unit=-1,qo[z]=null),x.activeTexture(Ds+z),x.bindTexture(la,null),x.bindTexture(Zf,null)}}return{create2D:Pt,createCube:Vt,clear:Ho,getTexture:function(z){return null},restore:ha,refresh:Ci}}var Da=36161,rl=32854,Id=32855,Pd=36194,Od=33189,Fd=36168,Gd=34041,$d=35907,Dd=34836,qd=34842,Hd=34843,Yr=[];Yr[rl]=2,Yr[Id]=2,Yr[Pd]=2,Yr[Od]=2,Yr[Fd]=1,Yr[Gd]=4,Yr[$d]=4,Yr[Dd]=16,Yr[qd]=8,Yr[Hd]=6;function jd(x,E,N){return Yr[x]*E*N}var Tb=function(x,E,N,Y,ie){var V={rgba4:rl,rgb565:Pd,"rgb5 a1":Id,depth:Od,stencil:Fd,"depth stencil":Gd};E.ext_srgb&&(V.srgba=$d),E.ext_color_buffer_half_float&&(V.rgba16f=qd,V.rgb16f=Hd),E.webgl_color_buffer_float&&(V.rgba32f=Dd);var Z=[];Object.keys(V).forEach(function(ge){var ke=V[ge];Z[ke]=ge});var me=0,ye={};function Me(ge){this.id=me++,this.refCount=1,this.renderbuffer=ge,this.format=rl,this.width=0,this.height=0,ie.profile&&(this.stats={size:0})}Me.prototype.decRef=function(){--this.refCount<=0&&be(this)};function be(ge){var ke=ge.renderbuffer;w(ke,"must not double destroy renderbuffer"),x.bindRenderbuffer(Da,null),x.deleteRenderbuffer(ke),ge.renderbuffer=null,ge.refCount=0,delete ye[ge.id],Y.renderbufferCount--}function Ae(ge,ke){var q=new Me(x.createRenderbuffer());ye[q.id]=q,Y.renderbufferCount++;function J(Oe,he){var Ge=0,de=0,Le=rl;if(typeof Oe=="object"&&Oe){var ue=Oe;if("shape"in ue){var ze=ue.shape;w(Array.isArray(ze)&&ze.length>=2,"invalid renderbuffer shape"),Ge=ze[0]|0,de=ze[1]|0}else"radius"in ue&&(Ge=de=ue.radius|0),"width"in ue&&(Ge=ue.width|0),"height"in ue&&(de=ue.height|0);"format"in ue&&(w.parameter(ue.format,V,"invalid renderbuffer format"),Le=V[ue.format])}else typeof Oe=="number"?(Ge=Oe|0,typeof he=="number"?de=he|0:de=Ge):Oe?w.raise("invalid arguments to renderbuffer constructor"):Ge=de=1;if(w(Ge>0&&de>0&&Ge<=N.maxRenderbufferSize&&de<=N.maxRenderbufferSize,"invalid renderbuffer size"),!(Ge===q.width&&de===q.height&&Le===q.format))return J.width=q.width=Ge,J.height=q.height=de,q.format=Le,x.bindRenderbuffer(Da,q.renderbuffer),x.renderbufferStorage(Da,Le,Ge,de),w(x.getError()===0,"invalid render buffer format"),ie.profile&&(q.stats.size=jd(q.format,q.width,q.height)),J.format=Z[q.format],J}function _e(Oe,he){var Ge=Oe|0,de=he|0||Ge;return Ge===q.width&&de===q.height||(w(Ge>0&&de>0&&Ge<=N.maxRenderbufferSize&&de<=N.maxRenderbufferSize,"invalid renderbuffer size"),J.width=q.width=Ge,J.height=q.height=de,x.bindRenderbuffer(Da,q.renderbuffer),x.renderbufferStorage(Da,q.format,Ge,de),w(x.getError()===0,"invalid render buffer format"),ie.profile&&(q.stats.size=jd(q.format,q.width,q.height))),J}return J(ge,ke),J.resize=_e,J._reglType="renderbuffer",J._renderbuffer=q,ie.profile&&(J.stats=q.stats),J.destroy=function(){q.decRef()},J}ie.profile&&(Y.getTotalRenderbufferSize=function(){var ge=0;return Object.keys(ye).forEach(function(ke){ge+=ye[ke].stats.size}),ge});function Ce(){vr(ye).forEach(function(ge){ge.renderbuffer=x.createRenderbuffer(),x.bindRenderbuffer(Da,ge.renderbuffer),x.renderbufferStorage(Da,ge.format,ge.width,ge.height)}),x.bindRenderbuffer(Da,null)}return{create:Ae,clear:function(){vr(ye).forEach(be)},restore:Ce}},wa=36160,vh=36161,Ai=3553,al=34069,Ud=36064,Bd=36096,Wd=36128,Vd=33306,Xd=36053,Lb=36054,zb=36055,Nb=36057,Cb=36061,Rb=36193,Ib=5121,Pb=5126,Yd=6407,Kd=6408,Ob=6402,Fb=[Yd,Kd],mh=[];mh[Kd]=4,mh[Yd]=3;var il=[];il[Ib]=1,il[Pb]=4,il[Rb]=2;var Gb=32854,$b=32855,Db=36194,qb=33189,Hb=36168,Qd=34041,jb=35907,Ub=34836,Bb=34842,Wb=34843,Vb=[Gb,$b,Db,jb,Bb,Wb,Ub],E0={};E0[Xd]="complete",E0[Lb]="incomplete attachment",E0[Nb]="incomplete dimensions",E0[zb]="incomplete, missing attachment",E0[Cb]="unsupported";function Xb(x,E,N,Y,ie,V){var Z={cur:null,next:null,dirty:!1,setFBO:null},me=["rgba"],ye=["rgba4","rgb565","rgb5 a1"];E.ext_srgb&&ye.push("srgba"),E.ext_color_buffer_half_float&&ye.push("rgba16f","rgb16f"),E.webgl_color_buffer_float&&ye.push("rgba32f");var Me=["uint8"];E.oes_texture_half_float&&Me.push("half float","float16"),E.oes_texture_float&&Me.push("float","float32");function be(Re,Se,le){this.target=Re,this.texture=Se,this.renderbuffer=le;var ut=0,St=0;Se?(ut=Se.width,St=Se.height):le&&(ut=le.width,St=le.height),this.width=ut,this.height=St}function Ae(Re){Re&&(Re.texture&&Re.texture._texture.decRef(),Re.renderbuffer&&Re.renderbuffer._renderbuffer.decRef())}function Ce(Re,Se,le){if(Re)if(Re.texture){var ut=Re.texture._texture,St=Math.max(1,ut.width),Ue=Math.max(1,ut.height);w(St===Se&&Ue===le,"inconsistent width/height for supplied texture"),ut.refCount+=1}else{var Rt=Re.renderbuffer._renderbuffer;w(Rt.width===Se&&Rt.height===le,"inconsistent width/height for renderbuffer"),Rt.refCount+=1}}function ge(Re,Se){Se&&(Se.texture?x.framebufferTexture2D(wa,Re,Se.target,Se.texture._texture.texture,0):x.framebufferRenderbuffer(wa,Re,vh,Se.renderbuffer._renderbuffer.renderbuffer))}function ke(Re){var Se=Ai,le=null,ut=null,St=Re;typeof Re=="object"&&(St=Re.data,"target"in Re&&(Se=Re.target|0)),w.type(St,"function","invalid attachment data");var Ue=St._reglType;return Ue==="texture2d"?(le=St,w(Se===Ai)):Ue==="textureCube"?(le=St,w(Se>=al&&Se<al+6,"invalid cube map target")):Ue==="renderbuffer"?(ut=St,Se=vh):w.raise("invalid regl object for attachment"),new be(Se,le,ut)}function q(Re,Se,le,ut,St){if(le){var Ue=Y.create2D({width:Re,height:Se,format:ut,type:St});return Ue._texture.refCount=0,new be(Ai,Ue,null)}else{var Rt=ie.create({width:Re,height:Se,format:ut});return Rt._renderbuffer.refCount=0,new be(vh,null,Rt)}}function J(Re){return Re&&(Re.texture||Re.renderbuffer)}function _e(Re,Se,le){Re&&(Re.texture?Re.texture.resize(Se,le):Re.renderbuffer&&Re.renderbuffer.resize(Se,le),Re.width=Se,Re.height=le)}var Oe=0,he={};function Ge(){this.id=Oe++,he[this.id]=this,this.framebuffer=x.createFramebuffer(),this.width=0,this.height=0,this.colorAttachments=[],this.depthAttachment=null,this.stencilAttachment=null,this.depthStencilAttachment=null}function de(Re){Re.colorAttachments.forEach(Ae),Ae(Re.depthAttachment),Ae(Re.stencilAttachment),Ae(Re.depthStencilAttachment)}function Le(Re){var Se=Re.framebuffer;w(Se,"must not double destroy framebuffer"),x.deleteFramebuffer(Se),Re.framebuffer=null,V.framebufferCount--,delete he[Re.id]}function ue(Re){var Se;x.bindFramebuffer(wa,Re.framebuffer);var le=Re.colorAttachments;for(Se=0;Se<le.length;++Se)ge(Ud+Se,le[Se]);for(Se=le.length;Se<N.maxColorAttachments;++Se)x.framebufferTexture2D(wa,Ud+Se,Ai,null,0);x.framebufferTexture2D(wa,Vd,Ai,null,0),x.framebufferTexture2D(wa,Bd,Ai,null,0),x.framebufferTexture2D(wa,Wd,Ai,null,0),ge(Bd,Re.depthAttachment),ge(Wd,Re.stencilAttachment),ge(Vd,Re.depthStencilAttachment);var ut=x.checkFramebufferStatus(wa);!x.isContextLost()&&ut!==Xd&&w.raise("framebuffer configuration not supported, status = "+E0[ut]),x.bindFramebuffer(wa,Z.next?Z.next.framebuffer:null),Z.cur=Z.next,x.getError()}function ze(Re,Se){var le=new Ge;V.framebufferCount++;function ut(Ue,Rt){var gt;w(Z.next!==le,"can not update framebuffer which is currently in use");var zt=0,Zt=0,Yo=!0,ln=!0,Ft=null,nn=!0,Eo="rgba",Ko="uint8",rn=1,an=null,mn=null,kn=null,qo=!1;if(typeof Ue=="number")zt=Ue|0,Zt=Rt|0||zt;else if(!Ue)zt=Zt=1;else{w.type(Ue,"object","invalid arguments for framebuffer");var At=Ue;if("shape"in At){var Tn=At.shape;w(Array.isArray(Tn)&&Tn.length>=2,"invalid shape for framebuffer"),zt=Tn[0],Zt=Tn[1]}else"radius"in At&&(zt=Zt=At.radius),"width"in At&&(zt=At.width),"height"in At&&(Zt=At.height);("color"in At||"colors"in At)&&(Ft=At.color||At.colors,Array.isArray(Ft)&&w(Ft.length===1||E.webgl_draw_buffers,"multiple render targets not supported")),Ft||("colorCount"in At&&(rn=At.colorCount|0,w(rn>0,"invalid color buffer count")),"colorTexture"in At&&(nn=!!At.colorTexture,Eo="rgba4"),"colorType"in At&&(Ko=At.colorType,nn?(w(E.oes_texture_float||!(Ko==="float"||Ko==="float32"),"you must enable OES_texture_float in order to use floating point framebuffer objects"),w(E.oes_texture_half_float||!(Ko==="half float"||Ko==="float16"),"you must enable OES_texture_half_float in order to use 16-bit floating point framebuffer objects")):Ko==="half float"||Ko==="float16"?(w(E.ext_color_buffer_half_float,"you must enable EXT_color_buffer_half_float to use 16-bit render buffers"),Eo="rgba16f"):(Ko==="float"||Ko==="float32")&&(w(E.webgl_color_buffer_float,"you must enable WEBGL_color_buffer_float in order to use 32-bit floating point renderbuffers"),Eo="rgba32f"),w.oneOf(Ko,Me,"invalid color type")),"colorFormat"in At&&(Eo=At.colorFormat,me.indexOf(Eo)>=0?nn=!0:ye.indexOf(Eo)>=0?nn=!1:nn?w.oneOf(At.colorFormat,me,"invalid color format for texture"):w.oneOf(At.colorFormat,ye,"invalid color format for renderbuffer"))),("depthTexture"in At||"depthStencilTexture"in At)&&(qo=!!(At.depthTexture||At.depthStencilTexture),w(!qo||E.webgl_depth_texture,"webgl_depth_texture extension not supported")),"depth"in At&&(typeof At.depth=="boolean"?Yo=At.depth:(an=At.depth,ln=!1)),"stencil"in At&&(typeof At.stencil=="boolean"?ln=At.stencil:(mn=At.stencil,Yo=!1)),"depthStencil"in At&&(typeof At.depthStencil=="boolean"?Yo=ln=At.depthStencil:(kn=At.depthStencil,Yo=!1,ln=!1))}var so=null,nt=null,Pt=null,Vt=null;if(Array.isArray(Ft))so=Ft.map(ke);else if(Ft)so=[ke(Ft)];else for(so=new Array(rn),gt=0;gt<rn;++gt)so[gt]=q(zt,Zt,nn,Eo,Ko);w(E.webgl_draw_buffers||so.length<=1,"you must enable the WEBGL_draw_buffers extension in order to use multiple color buffers."),w(so.length<=N.maxColorAttachments,"too many color attachments, not supported"),zt=zt||so[0].width,Zt=Zt||so[0].height,an?nt=ke(an):Yo&&!ln&&(nt=q(zt,Zt,qo,"depth","uint32")),mn?Pt=ke(mn):ln&&!Yo&&(Pt=q(zt,Zt,!1,"stencil","uint8")),kn?Vt=ke(kn):!an&&!mn&&ln&&Yo&&(Vt=q(zt,Zt,qo,"depth stencil","depth stencil")),w(!!an+!!mn+!!kn<=1,"invalid framebuffer configuration, can specify exactly one depth/stencil attachment");var Ho=null;for(gt=0;gt<so.length;++gt)if(Ce(so[gt],zt,Zt),w(!so[gt]||so[gt].texture&&Fb.indexOf(so[gt].texture._texture.format)>=0||so[gt].renderbuffer&&Vb.indexOf(so[gt].renderbuffer._renderbuffer.format)>=0,"framebuffer color attachment "+gt+" is invalid"),so[gt]&&so[gt].texture){var ha=mh[so[gt].texture._texture.format]*il[so[gt].texture._texture.type];Ho===null?Ho=ha:w(Ho===ha,"all color attachments much have the same number of bits per pixel.")}return Ce(nt,zt,Zt),w(!nt||nt.texture&&nt.texture._texture.format===Ob||nt.renderbuffer&&nt.renderbuffer._renderbuffer.format===qb,"invalid depth attachment for framebuffer object"),Ce(Pt,zt,Zt),w(!Pt||Pt.renderbuffer&&Pt.renderbuffer._renderbuffer.format===Hb,"invalid stencil attachment for framebuffer object"),Ce(Vt,zt,Zt),w(!Vt||Vt.texture&&Vt.texture._texture.format===Qd||Vt.renderbuffer&&Vt.renderbuffer._renderbuffer.format===Qd,"invalid depth-stencil attachment for framebuffer object"),de(le),le.width=zt,le.height=Zt,le.colorAttachments=so,le.depthAttachment=nt,le.stencilAttachment=Pt,le.depthStencilAttachment=Vt,ut.color=so.map(J),ut.depth=J(nt),ut.stencil=J(Pt),ut.depthStencil=J(Vt),ut.width=le.width,ut.height=le.height,ue(le),ut}function St(Ue,Rt){w(Z.next!==le,"can not resize a framebuffer which is currently in use");var gt=Math.max(Ue|0,1),zt=Math.max(Rt|0||gt,1);if(gt===le.width&&zt===le.height)return ut;for(var Zt=le.colorAttachments,Yo=0;Yo<Zt.length;++Yo)_e(Zt[Yo],gt,zt);return _e(le.depthAttachment,gt,zt),_e(le.stencilAttachment,gt,zt),_e(le.depthStencilAttachment,gt,zt),le.width=ut.width=gt,le.height=ut.height=zt,ue(le),ut}return ut(Re,Se),t(ut,{resize:St,_reglType:"framebuffer",_framebuffer:le,destroy:function(){Le(le),de(le)},use:function(Ue){Z.setFBO({framebuffer:ut},Ue)}})}function tt(Re){var Se=Array(6);function le(St){var Ue;w(Se.indexOf(Z.next)<0,"can not update framebuffer which is currently in use");var Rt={color:null},gt=0,zt=null,Zt="rgba",Yo="uint8",ln=1;if(typeof St=="number")gt=St|0;else if(!St)gt=1;else{w.type(St,"object","invalid arguments for framebuffer");var Ft=St;if("shape"in Ft){var nn=Ft.shape;w(Array.isArray(nn)&&nn.length>=2,"invalid shape for framebuffer"),w(nn[0]===nn[1],"cube framebuffer must be square"),gt=nn[0]}else"radius"in Ft&&(gt=Ft.radius|0),"width"in Ft?(gt=Ft.width|0,"height"in Ft&&w(Ft.height===gt,"must be square")):"height"in Ft&&(gt=Ft.height|0);("color"in Ft||"colors"in Ft)&&(zt=Ft.color||Ft.colors,Array.isArray(zt)&&w(zt.length===1||E.webgl_draw_buffers,"multiple render targets not supported")),zt||("colorCount"in Ft&&(ln=Ft.colorCount|0,w(ln>0,"invalid color buffer count")),"colorType"in Ft&&(w.oneOf(Ft.colorType,Me,"invalid color type"),Yo=Ft.colorType),"colorFormat"in Ft&&(Zt=Ft.colorFormat,w.oneOf(Ft.colorFormat,me,"invalid color format for texture"))),"depth"in Ft&&(Rt.depth=Ft.depth),"stencil"in Ft&&(Rt.stencil=Ft.stencil),"depthStencil"in Ft&&(Rt.depthStencil=Ft.depthStencil)}var Eo;if(zt)if(Array.isArray(zt))for(Eo=[],Ue=0;Ue<zt.length;++Ue)Eo[Ue]=zt[Ue];else Eo=[zt];else{Eo=Array(ln);var Ko={radius:gt,format:Zt,type:Yo};for(Ue=0;Ue<ln;++Ue)Eo[Ue]=Y.createCube(Ko)}for(Rt.color=Array(Eo.length),Ue=0;Ue<Eo.length;++Ue){var rn=Eo[Ue];w(typeof rn=="function"&&rn._reglType==="textureCube","invalid cube map"),gt=gt||rn.width,w(rn.width===gt&&rn.height===gt,"invalid cube map shape"),Rt.color[Ue]={target:al,data:Eo[Ue]}}for(Ue=0;Ue<6;++Ue){for(var an=0;an<Eo.length;++an)Rt.color[an].target=al+Ue;Ue>0&&(Rt.depth=Se[0].depth,Rt.stencil=Se[0].stencil,Rt.depthStencil=Se[0].depthStencil),Se[Ue]?Se[Ue](Rt):Se[Ue]=ze(Rt)}return t(le,{width:gt,height:gt,color:Eo})}function ut(St){var Ue,Rt=St|0;if(w(Rt>0&&Rt<=N.maxCubeMapSize,"invalid radius for cube fbo"),Rt===le.width)return le;var gt=le.color;for(Ue=0;Ue<gt.length;++Ue)gt[Ue].resize(Rt);for(Ue=0;Ue<6;++Ue)Se[Ue].resize(Rt);return le.width=le.height=Rt,le}return le(Re),t(le,{faces:Se,resize:ut,_reglType:"framebufferCube",destroy:function(){Se.forEach(function(St){St.destroy()})}})}function mt(){Z.cur=null,Z.next=null,Z.dirty=!0,vr(he).forEach(function(Re){Re.framebuffer=x.createFramebuffer(),ue(Re)})}return t(Z,{getFramebuffer:function(Re){if(typeof Re=="function"&&Re._reglType==="framebuffer"){var Se=Re._framebuffer;if(Se instanceof Ge)return Se}return null},create:ze,createCube:tt,clear:function(){vr(he).forEach(Le)},restore:mt})}var Yb=5126,Zd=34962;function gh(){this.state=0,this.x=0,this.y=0,this.z=0,this.w=0,this.buffer=null,this.size=0,this.normalized=!1,this.type=Yb,this.offset=0,this.stride=0,this.divisor=0}function Kb(x,E,N,Y,ie){for(var V=N.maxAttributes,Z=new Array(V),me=0;me<V;++me)Z[me]=new gh;var ye=0,Me={},be={Record:gh,scope:{},state:Z,currentVAO:null,targetVAO:null,restore:Ce()?he:function(){},createVAO:Ge,getVAO:ke,destroyBuffer:Ae,setVAO:Ce()?q:J,clear:Ce()?_e:function(){}};function Ae(de){for(var Le=0;Le<Z.length;++Le){var ue=Z[Le];ue.buffer===de&&(x.disableVertexAttribArray(Le),ue.buffer=null)}}function Ce(){return E.oes_vertex_array_object}function ge(){return E.angle_instanced_arrays}function ke(de){return typeof de=="function"&&de._vao?de._vao:null}function q(de){if(de!==be.currentVAO){var Le=Ce();de?Le.bindVertexArrayOES(de.vao):Le.bindVertexArrayOES(null),be.currentVAO=de}}function J(de){if(de!==be.currentVAO){if(de)de.bindAttrs();else for(var Le=ge(),ue=0;ue<Z.length;++ue){var ze=Z[ue];ze.buffer?(x.enableVertexAttribArray(ue),x.vertexAttribPointer(ue,ze.size,ze.type,ze.normalized,ze.stride,ze.offfset),Le&&ze.divisor&&Le.vertexAttribDivisorANGLE(ue,ze.divisor)):(x.disableVertexAttribArray(ue),x.vertexAttrib4f(ue,ze.x,ze.y,ze.z,ze.w))}be.currentVAO=de}}function _e(){vr(Me).forEach(function(de){de.destroy()})}function Oe(){this.id=++ye,this.attributes=[];var de=Ce();de?this.vao=de.createVertexArrayOES():this.vao=null,Me[this.id]=this,this.buffers=[]}Oe.prototype.bindAttrs=function(){for(var de=ge(),Le=this.attributes,ue=0;ue<Le.length;++ue){var ze=Le[ue];ze.buffer?(x.enableVertexAttribArray(ue),x.bindBuffer(Zd,ze.buffer.buffer),x.vertexAttribPointer(ue,ze.size,ze.type,ze.normalized,ze.stride,ze.offset),de&&ze.divisor&&de.vertexAttribDivisorANGLE(ue,ze.divisor)):(x.disableVertexAttribArray(ue),x.vertexAttrib4f(ue,ze.x,ze.y,ze.z,ze.w))}for(var tt=Le.length;tt<V;++tt)x.disableVertexAttribArray(tt)},Oe.prototype.refresh=function(){var de=Ce();de&&(de.bindVertexArrayOES(this.vao),this.bindAttrs(),be.currentVAO=this)},Oe.prototype.destroy=function(){if(this.vao){var de=Ce();this===be.currentVAO&&(be.currentVAO=null,de.bindVertexArrayOES(null)),de.deleteVertexArrayOES(this.vao),this.vao=null}Me[this.id]&&(delete Me[this.id],Y.vaoCount-=1)};function he(){var de=Ce();de&&vr(Me).forEach(function(Le){Le.refresh()})}function Ge(de){var Le=new Oe;Y.vaoCount+=1;function ue(ze){w(Array.isArray(ze),"arguments to vertex array constructor must be an array"),w(ze.length<V,"too many attributes"),w(ze.length>0,"must specify at least one attribute");var tt={},mt=Le.attributes;mt.length=ze.length;for(var Re=0;Re<ze.length;++Re){var Se=ze[Re],le=mt[Re]=new gh,ut=Se.data||Se;if(Array.isArray(ut)||e(ut)||Xr(ut)){var St;Le.buffers[Re]&&(St=Le.buffers[Re],e(ut)&&St._buffer.byteLength>=ut.byteLength?St.subdata(ut):(St.destroy(),Le.buffers[Re]=null)),Le.buffers[Re]||(St=Le.buffers[Re]=ie.create(Se,Zd,!1,!0)),le.buffer=ie.getBuffer(St),le.size=le.buffer.dimension|0,le.normalized=!1,le.type=le.buffer.dtype,le.offset=0,le.stride=0,le.divisor=0,le.state=1,tt[Re]=1}else ie.getBuffer(Se)?(le.buffer=ie.getBuffer(Se),le.size=le.buffer.dimension|0,le.normalized=!1,le.type=le.buffer.dtype,le.offset=0,le.stride=0,le.divisor=0,le.state=1):ie.getBuffer(Se.buffer)?(le.buffer=ie.getBuffer(Se.buffer),le.size=(+Se.size||le.buffer.dimension)|0,le.normalized=!!Se.normalized||!1,"type"in Se?(w.parameter(Se.type,_i,"invalid buffer type"),le.type=_i[Se.type]):le.type=le.buffer.dtype,le.offset=(Se.offset||0)|0,le.stride=(Se.stride||0)|0,le.divisor=(Se.divisor||0)|0,le.state=1,w(le.size>=1&&le.size<=4,"size must be between 1 and 4"),w(le.offset>=0,"invalid offset"),w(le.stride>=0&&le.stride<=255,"stride must be between 0 and 255"),w(le.divisor>=0,"divisor must be positive"),w(!le.divisor||!!E.angle_instanced_arrays,"ANGLE_instanced_arrays must be enabled to use divisor")):"x"in Se?(w(Re>0,"first attribute must not be a constant"),le.x=+Se.x||0,le.y=+Se.y||0,le.z=+Se.z||0,le.w=+Se.w||0,le.state=2):w(!1,"invalid attribute spec for location "+Re)}for(var Ue=0;Ue<Le.buffers.length;++Ue)!tt[Ue]&&Le.buffers[Ue]&&(Le.buffers[Ue].destroy(),Le.buffers[Ue]=null);return Le.refresh(),ue}return ue.destroy=function(){for(var ze=0;ze<Le.buffers.length;++ze)Le.buffers[ze]&&Le.buffers[ze].destroy();Le.buffers.length=0,Le.destroy()},ue._vao=Le,ue._reglType="vao",ue(de)}return be}var Jd=35632,Qb=35633,Zb=35718,Jb=35721;function e5(x,E,N,Y){var ie={},V={};function Z(q,J,_e,Oe){this.name=q,this.id=J,this.location=_e,this.info=Oe}function me(q,J){for(var _e=0;_e<q.length;++_e)if(q[_e].id===J.id){q[_e].location=J.location;return}q.push(J)}function ye(q,J,_e){var Oe=q===Jd?ie:V,he=Oe[J];if(!he){var Ge=E.str(J);he=x.createShader(q),x.shaderSource(he,Ge),x.compileShader(he),w.shaderError(x,he,Ge,q,_e),Oe[J]=he}return he}var Me={},be=[],Ae=0;function Ce(q,J){this.id=Ae++,this.fragId=q,this.vertId=J,this.program=null,this.uniforms=[],this.attributes=[],this.refCount=1,Y.profile&&(this.stats={uniformsCount:0,attributesCount:0})}function ge(q,J,_e){var Oe,he,Ge=ye(Jd,q.fragId),de=ye(Qb,q.vertId),Le=q.program=x.createProgram();if(x.attachShader(Le,Ge),x.attachShader(Le,de),_e)for(Oe=0;Oe<_e.length;++Oe){var ue=_e[Oe];x.bindAttribLocation(Le,ue[0],ue[1])}x.linkProgram(Le),w.linkError(x,Le,E.str(q.fragId),E.str(q.vertId),J);var ze=x.getProgramParameter(Le,Zb);Y.profile&&(q.stats.uniformsCount=ze);var tt=q.uniforms;for(Oe=0;Oe<ze;++Oe)if(he=x.getActiveUniform(Le,Oe),he)if(he.size>1)for(var mt=0;mt<he.size;++mt){var Re=he.name.replace("[0]","["+mt+"]");me(tt,new Z(Re,E.id(Re),x.getUniformLocation(Le,Re),he))}else me(tt,new Z(he.name,E.id(he.name),x.getUniformLocation(Le,he.name),he));var Se=x.getProgramParameter(Le,Jb);Y.profile&&(q.stats.attributesCount=Se);var le=q.attributes;for(Oe=0;Oe<Se;++Oe)he=x.getActiveAttrib(Le,Oe),he&&me(le,new Z(he.name,E.id(he.name),x.getAttribLocation(Le,he.name),he))}Y.profile&&(N.getMaxUniformsCount=function(){var q=0;return be.forEach(function(J){J.stats.uniformsCount>q&&(q=J.stats.uniformsCount)}),q},N.getMaxAttributesCount=function(){var q=0;return be.forEach(function(J){J.stats.attributesCount>q&&(q=J.stats.attributesCount)}),q});function ke(){ie={},V={};for(var q=0;q<be.length;++q)ge(be[q],null,be[q].attributes.map(function(J){return[J.location,J.name]}))}return{clear:function(){var q=x.deleteShader.bind(x);vr(ie).forEach(q),ie={},vr(V).forEach(q),V={},be.forEach(function(J){x.deleteProgram(J.program)}),be.length=0,Me={},N.shaderCount=0},program:function(q,J,_e,Oe){w.command(q>=0,"missing vertex shader",_e),w.command(J>=0,"missing fragment shader",_e);var he=Me[J];he||(he=Me[J]={});var Ge=he[q];if(Ge&&(Ge.refCount++,!Oe))return Ge;var de=new Ce(J,q);return N.shaderCount++,ge(de,_e,Oe),Ge||(he[q]=de),be.push(de),t(de,{destroy:function(){if(de.refCount--,de.refCount<=0){x.deleteProgram(de.program);var Le=be.indexOf(de);be.splice(Le,1),N.shaderCount--}he[de.vertId].refCount<=0&&(x.deleteShader(V[de.vertId]),delete V[de.vertId],delete Me[de.fragId][de.vertId]),Object.keys(Me[de.fragId]).length||(x.deleteShader(ie[de.fragId]),delete ie[de.fragId],delete Me[de.fragId])}})},restore:ke,shader:ye,frag:-1,vert:-1}}var t5=6408,qs=5121,o5=3333,sl=5126;function n5(x,E,N,Y,ie,V,Z){function me(be){var Ae;E.next===null?(w(ie.preserveDrawingBuffer,'you must create a webgl context with "preserveDrawingBuffer":true in order to read pixels from the drawing buffer'),Ae=qs):(w(E.next.colorAttachments[0].texture!==null,"You cannot read from a renderbuffer"),Ae=E.next.colorAttachments[0].texture._texture.type,V.oes_texture_float?(w(Ae===qs||Ae===sl,"Reading from a framebuffer is only allowed for the types 'uint8' and 'float'"),Ae===sl&&w(Z.readFloat,"Reading 'float' values is not permitted in your browser. For a fallback, please see: https://www.npmjs.com/package/glsl-read-float")):w(Ae===qs,"Reading from a framebuffer is only allowed for the type 'uint8'"));var Ce=0,ge=0,ke=Y.framebufferWidth,q=Y.framebufferHeight,J=null;e(be)?J=be:be&&(w.type(be,"object","invalid arguments to regl.read()"),Ce=be.x|0,ge=be.y|0,w(Ce>=0&&Ce<Y.framebufferWidth,"invalid x offset for regl.read"),w(ge>=0&&ge<Y.framebufferHeight,"invalid y offset for regl.read"),ke=(be.width||Y.framebufferWidth-Ce)|0,q=(be.height||Y.framebufferHeight-ge)|0,J=be.data||null),J&&(Ae===qs?w(J instanceof Uint8Array,"buffer must be 'Uint8Array' when reading from a framebuffer of type 'uint8'"):Ae===sl&&w(J instanceof Float32Array,"buffer must be 'Float32Array' when reading from a framebuffer of type 'float'")),w(ke>0&&ke+Ce<=Y.framebufferWidth,"invalid width for read pixels"),w(q>0&&q+ge<=Y.framebufferHeight,"invalid height for read pixels"),N();var _e=ke*q*4;return J||(Ae===qs?J=new Uint8Array(_e):Ae===sl&&(J=J||new Float32Array(_e))),w.isTypedArray(J,"data buffer for regl.read() must be a typedarray"),w(J.byteLength>=_e,"data buffer for regl.read() too small"),x.pixelStorei(o5,4),x.readPixels(Ce,ge,ke,q,t5,Ae,J),J}function ye(be){var Ae;return E.setFBO({framebuffer:be.framebuffer},function(){Ae=me(be)}),Ae}function Me(be){return!be||!("framebuffer"in be)?me(be):ye(be)}return Me}function S0(x){return Array.prototype.slice.call(x)}function A0(x){return S0(x).join("")}function r5(){var x=0,E=[],N=[];function Y(Ae){for(var Ce=0;Ce<N.length;++Ce)if(N[Ce]===Ae)return E[Ce];var ge="g"+x++;return E.push(ge),N.push(Ae),ge}function ie(){var Ae=[];function Ce(){Ae.push.apply(Ae,S0(arguments))}var ge=[];function ke(){var q="v"+x++;return ge.push(q),arguments.length>0&&(Ae.push(q,"="),Ae.push.apply(Ae,S0(arguments)),Ae.push(";")),q}return t(Ce,{def:ke,toString:function(){return A0([ge.length>0?"var "+ge.join(",")+";":"",A0(Ae)])}})}function V(){var Ae=ie(),Ce=ie(),ge=Ae.toString,ke=Ce.toString;function q(J,_e){Ce(J,_e,"=",Ae.def(J,_e),";")}return t(function(){Ae.apply(Ae,S0(arguments))},{def:Ae.def,entry:Ae,exit:Ce,save:q,set:function(J,_e,Oe){q(J,_e),Ae(J,_e,"=",Oe,";")},toString:function(){return ge()+ke()}})}function Z(){var Ae=A0(arguments),Ce=V(),ge=V(),ke=Ce.toString,q=ge.toString;return t(Ce,{then:function(){return Ce.apply(Ce,S0(arguments)),this},else:function(){return ge.apply(ge,S0(arguments)),this},toString:function(){var J=q();return J&&(J="else{"+J+"}"),A0(["if(",Ae,"){",ke(),"}",J])}})}var me=ie(),ye={};function Me(Ae,Ce){var ge=[];function ke(){var he="a"+ge.length;return ge.push(he),he}Ce=Ce||0;for(var q=0;q<Ce;++q)ke();var J=V(),_e=J.toString,Oe=ye[Ae]=t(J,{arg:ke,toString:function(){return A0(["function(",ge.join(),"){",_e(),"}"])}});return Oe}function be(){var Ae=['"use strict";',me,"return {"];Object.keys(ye).forEach(function(ke){Ae.push('"',ke,'":',ye[ke].toString(),",")}),Ae.push("}");var Ce=A0(Ae).replace(/;/g,`;
`).replace(/}/g,`}
`).replace(/{/g,`{
`),ge=Function.apply(null,E.concat(Ce));return ge.apply(null,N)}return{global:me,link:Y,block:ie,proc:Me,scope:V,cond:Z,compile:be}}var k0="xyzw".split(""),ep=5121,T0=1,xh=2,yh=0,bh=1,wh=2,_h=3,cl=4,tp=5,op=6,np="dither",rp="blend.enable",ap="blend.color",Mh="blend.equation",Eh="blend.func",ip="depth.enable",sp="depth.func",cp="depth.range",lp="depth.mask",Sh="colorMask",fp="cull.enable",hp="cull.face",Ah="frontFace",kh="lineWidth",up="polygonOffset.enable",Th="polygonOffset.offset",dp="sample.alpha",pp="sample.enable",Lh="sample.coverage",vp="stencil.enable",mp="stencil.mask",zh="stencil.func",Nh="stencil.opFront",Hs="stencil.opBack",gp="scissor.enable",ll="scissor.box",_a="viewport",js="profile",ki="framebuffer",Us="vert",Bs="frag",Ti="elements",Li="primitive",zi="count",fl="offset",hl="instances",Ws="vao",Ch="Width",Rh="Height",L0=ki+Ch,z0=ki+Rh,a5=_a+Ch,i5=_a+Rh,xp="drawingBuffer",yp=xp+Ch,bp=xp+Rh,s5=[Eh,Mh,zh,Nh,Hs,Lh,_a,ll,Th],N0=34962,c5=34963,l5=35632,f5=35633,wp=3553,h5=34067,u5=2884,d5=3042,p5=3024,v5=2960,m5=2929,g5=3089,x5=32823,y5=32926,b5=32928,Ih=5126,ul=35664,dl=35665,pl=35666,Ph=5124,vl=35667,ml=35668,gl=35669,Oh=35670,xl=35671,yl=35672,bl=35673,Vs=35674,Xs=35675,Ys=35676,Ks=35678,Qs=35680,_p=4,Zs=1028,Ni=1029,Mp=2304,Fh=2305,w5=32775,_5=32776,M5=519,qa=7680,Ep=0,Sp=1,Ap=32774,E5=513,kp=36160,S5=36064,fa={0:0,1:1,zero:0,one:1,"src color":768,"one minus src color":769,"src alpha":770,"one minus src alpha":771,"dst color":774,"one minus dst color":775,"dst alpha":772,"one minus dst alpha":773,"constant color":32769,"one minus constant color":32770,"constant alpha":32771,"one minus constant alpha":32772,"src alpha saturate":776},Tp=["constant color, constant alpha","one minus constant color, constant alpha","constant color, one minus constant alpha","one minus constant color, one minus constant alpha","constant alpha, constant color","constant alpha, one minus constant color","one minus constant alpha, constant color","one minus constant alpha, one minus constant color"],C0={never:512,less:513,"<":513,equal:514,"=":514,"==":514,"===":514,lequal:515,"<=":515,greater:516,">":516,notequal:517,"!=":517,"!==":517,gequal:518,">=":518,always:519},Ha={0:0,zero:0,keep:7680,replace:7681,increment:7682,decrement:7683,"increment wrap":34055,"decrement wrap":34056,invert:5386},Lp={frag:l5,vert:f5},Gh={cw:Mp,ccw:Fh};function wl(x){return Array.isArray(x)||e(x)||Xr(x)}function zp(x){return x.sort(function(E,N){return E===_a?-1:N===_a?1:E<N?-1:1})}function Vn(x,E,N,Y){this.thisDep=x,this.contextDep=E,this.propDep=N,this.append=Y}function ja(x){return x&&!(x.thisDep||x.contextDep||x.propDep)}function Xo(x){return new Vn(!1,!1,!1,x)}function sr(x,E){var N=x.type;if(N===yh){var Y=x.data.length;return new Vn(!0,Y>=1,Y>=2,E)}else if(N===cl){var ie=x.data;return new Vn(ie.thisDep,ie.contextDep,ie.propDep,E)}else{if(N===tp)return new Vn(!1,!1,!1,E);if(N===op){for(var V=!1,Z=!1,me=!1,ye=0;ye<x.data.length;++ye){var Me=x.data[ye];if(Me.type===bh)me=!0;else if(Me.type===wh)Z=!0;else if(Me.type===_h)V=!0;else if(Me.type===yh){V=!0;var be=Me.data;be>=1&&(Z=!0),be>=2&&(me=!0)}else Me.type===cl&&(V=V||Me.data.thisDep,Z=Z||Me.data.contextDep,me=me||Me.data.propDep)}return new Vn(V,Z,me,E)}else return new Vn(N===_h,N===wh,N===bh,E)}}var Np=new Vn(!1,!1,!1,function(){});function A5(x,E,N,Y,ie,V,Z,me,ye,Me,be,Ae,Ce,ge,ke){var q=Me.Record,J={add:32774,subtract:32778,"reverse subtract":32779};N.ext_blend_minmax&&(J.min=w5,J.max=_5);var _e=N.angle_instanced_arrays,Oe=N.webgl_draw_buffers,he={dirty:!0,profile:ke.profile},Ge={},de=[],Le={},ue={};function ze(A){return A.replace(".","_")}function tt(A,_,I){var $=ze(A);de.push(A),Ge[$]=he[$]=!!I,Le[$]=_}function mt(A,_,I){var $=ze(A);de.push(A),Array.isArray(I)?(he[$]=I.slice(),Ge[$]=I.slice()):he[$]=Ge[$]=I,ue[$]=_}tt(np,p5),tt(rp,d5),mt(ap,"blendColor",[0,0,0,0]),mt(Mh,"blendEquationSeparate",[Ap,Ap]),mt(Eh,"blendFuncSeparate",[Sp,Ep,Sp,Ep]),tt(ip,m5,!0),mt(sp,"depthFunc",E5),mt(cp,"depthRange",[0,1]),mt(lp,"depthMask",!0),mt(Sh,Sh,[!0,!0,!0,!0]),tt(fp,u5),mt(hp,"cullFace",Ni),mt(Ah,Ah,Fh),mt(kh,kh,1),tt(up,x5),mt(Th,"polygonOffset",[0,0]),tt(dp,y5),tt(pp,b5),mt(Lh,"sampleCoverage",[1,!1]),tt(vp,v5),mt(mp,"stencilMask",-1),mt(zh,"stencilFunc",[M5,0,-1]),mt(Nh,"stencilOpSeparate",[Zs,qa,qa,qa]),mt(Hs,"stencilOpSeparate",[Ni,qa,qa,qa]),tt(gp,g5),mt(ll,"scissor",[0,0,x.drawingBufferWidth,x.drawingBufferHeight]),mt(_a,_a,[0,0,x.drawingBufferWidth,x.drawingBufferHeight]);var Re={gl:x,context:Ce,strings:E,next:Ge,current:he,draw:Ae,elements:V,buffer:ie,shader:be,attributes:Me.state,vao:Me,uniforms:ye,framebuffer:me,extensions:N,timer:ge,isBufferArgs:wl},Se={primTypes:g0,compareFuncs:C0,blendFuncs:fa,blendEquations:J,stencilOps:Ha,glTypes:_i,orientationType:Gh};w.optional(function(){Re.isArrayLike=Do}),Oe&&(Se.backBuffer=[Ni],Se.drawBuffer=Sn(Y.maxDrawbuffers,function(A){return A===0?[0]:Sn(A,function(_){return S5+_})}));var le=0;function ut(){var A=r5(),_=A.link,I=A.global;A.id=le++,A.batchId="0";var $=_(Re),H=A.shared={props:"a0"};Object.keys(Re).forEach(function(R){H[R]=I.def($,".",R)}),w.optional(function(){A.CHECK=_(w),A.commandStr=w.guessCommand(),A.command=_(A.commandStr),A.assert=function(R,S,G){R("if(!(",S,"))",this.CHECK,".commandRaise(",_(G),",",this.command,");")},Se.invalidBlendCombinations=Tp});var O=A.next={},P=A.current={};Object.keys(ue).forEach(function(R){Array.isArray(he[R])&&(O[R]=I.def(H.next,".",R),P[R]=I.def(H.current,".",R))});var F=A.constants={};Object.keys(Se).forEach(function(R){F[R]=I.def(JSON.stringify(Se[R]))}),A.invoke=function(R,S){switch(S.type){case yh:var G=["this",H.context,H.props,A.batchId];return R.def(_(S.data),".call(",G.slice(0,Math.max(S.data.length+1,4)),")");case bh:return R.def(H.props,S.data);case wh:return R.def(H.context,S.data);case _h:return R.def("this",S.data);case cl:return S.data.append(A,R),S.data.ref;case tp:return S.data.toString();case op:return S.data.map(function(j){return A.invoke(R,j)})}},A.attribCache={};var k={};return A.scopeAttrib=function(R){var S=E.id(R);if(S in k)return k[S];var G=Me.scope[S];G||(G=Me.scope[S]=new q);var j=k[S]=_(G);return j},A}function St(A){var _=A.static,I=A.dynamic,$;if(js in _){var H=!!_[js];$=Xo(function(P,F){return H}),$.enable=H}else if(js in I){var O=I[js];$=sr(O,function(P,F){return P.invoke(F,O)})}return $}function Ue(A,_){var I=A.static,$=A.dynamic;if(ki in I){var H=I[ki];return H?(H=me.getFramebuffer(H),w.command(H,"invalid framebuffer object"),Xo(function(P,F){var k=P.link(H),R=P.shared;F.set(R.framebuffer,".next",k);var S=R.context;return F.set(S,"."+L0,k+".width"),F.set(S,"."+z0,k+".height"),k})):Xo(function(P,F){var k=P.shared;F.set(k.framebuffer,".next","null");var R=k.context;return F.set(R,"."+L0,R+"."+yp),F.set(R,"."+z0,R+"."+bp),"null"})}else if(ki in $){var O=$[ki];return sr(O,function(P,F){var k=P.invoke(F,O),R=P.shared,S=R.framebuffer,G=F.def(S,".getFramebuffer(",k,")");w.optional(function(){P.assert(F,"!"+k+"||"+G,"invalid framebuffer object")}),F.set(S,".next",G);var j=R.context;return F.set(j,"."+L0,G+"?"+G+".width:"+j+"."+yp),F.set(j,"."+z0,G+"?"+G+".height:"+j+"."+bp),G})}else return null}function Rt(A,_,I){var $=A.static,H=A.dynamic;function O(k){if(k in $){var R=$[k];w.commandType(R,"object","invalid "+k,I.commandStr);var S=!0,G=R.x|0,j=R.y|0,ae,se;return"width"in R?(ae=R.width|0,w.command(ae>=0,"invalid "+k,I.commandStr)):S=!1,"height"in R?(se=R.height|0,w.command(se>=0,"invalid "+k,I.commandStr)):S=!1,new Vn(!S&&_&&_.thisDep,!S&&_&&_.contextDep,!S&&_&&_.propDep,function(Ze,kt){var Be=Ze.shared.context,at=ae;"width"in R||(at=kt.def(Be,".",L0,"-",G));var bt=se;return"height"in R||(bt=kt.def(Be,".",z0,"-",j)),[G,j,at,bt]})}else if(k in H){var oe=H[k],we=sr(oe,function(Ze,kt){var Be=Ze.invoke(kt,oe);w.optional(function(){Ze.assert(kt,Be+"&&typeof "+Be+'==="object"',"invalid "+k)});var at=Ze.shared.context,bt=kt.def(Be,".x|0"),Jt=kt.def(Be,".y|0"),Oo=kt.def('"width" in ',Be,"?",Be,".width|0:","(",at,".",L0,"-",bt,")"),Xn=kt.def('"height" in ',Be,"?",Be,".height|0:","(",at,".",z0,"-",Jt,")");return w.optional(function(){Ze.assert(kt,Oo+">=0&&"+Xn+">=0","invalid "+k)}),[bt,Jt,Oo,Xn]});return _&&(we.thisDep=we.thisDep||_.thisDep,we.contextDep=we.contextDep||_.contextDep,we.propDep=we.propDep||_.propDep),we}else return _?new Vn(_.thisDep,_.contextDep,_.propDep,function(Ze,kt){var Be=Ze.shared.context;return[0,0,kt.def(Be,".",L0),kt.def(Be,".",z0)]}):null}var P=O(_a);if(P){var F=P;P=new Vn(P.thisDep,P.contextDep,P.propDep,function(k,R){var S=F.append(k,R),G=k.shared.context;return R.set(G,"."+a5,S[2]),R.set(G,"."+i5,S[3]),S})}return{viewport:P,scissor_box:O(ll)}}function gt(A,_){var I=A.static,$=typeof I[Bs]=="string"&&typeof I[Us]=="string";if($){if(Object.keys(_.dynamic).length>0)return null;var H=_.static,O=Object.keys(H);if(O.length>0&&typeof H[O[0]]=="number"){for(var P=[],F=0;F<O.length;++F)w(typeof H[O[F]]=="number","must specify all vertex attribute locations when using vaos"),P.push([H[O[F]]|0,O[F]]);return P}}return null}function zt(A,_,I){var $=A.static,H=A.dynamic;function O(S){if(S in $){var G=E.id($[S]);w.optional(function(){be.shader(Lp[S],G,w.guessCommand())});var j=Xo(function(){return G});return j.id=G,j}else if(S in H){var ae=H[S];return sr(ae,function(se,oe){var we=se.invoke(oe,ae),Ze=oe.def(se.shared.strings,".id(",we,")");return w.optional(function(){oe(se.shared.shader,".shader(",Lp[S],",",Ze,",",se.command,");")}),Ze})}return null}var P=O(Bs),F=O(Us),k=null,R;return ja(P)&&ja(F)?(k=be.program(F.id,P.id,null,I),R=Xo(function(S,G){return S.link(k)})):R=new Vn(P&&P.thisDep||F&&F.thisDep,P&&P.contextDep||F&&F.contextDep,P&&P.propDep||F&&F.propDep,function(S,G){var j=S.shared.shader,ae;P?ae=P.append(S,G):ae=G.def(j,".",Bs);var se;F?se=F.append(S,G):se=G.def(j,".",Us);var oe=j+".program("+se+","+ae;return w.optional(function(){oe+=","+S.command}),G.def(oe+")")}),{frag:P,vert:F,progVar:R,program:k}}function Zt(A,_){var I=A.static,$=A.dynamic;function H(){if(Ti in I){var S=I[Ti];wl(S)?S=V.getElements(V.create(S,!0)):S&&(S=V.getElements(S),w.command(S,"invalid elements",_.commandStr));var G=Xo(function(ae,se){if(S){var oe=ae.link(S);return ae.ELEMENTS=oe,oe}return ae.ELEMENTS=null,null});return G.value=S,G}else if(Ti in $){var j=$[Ti];return sr(j,function(ae,se){var oe=ae.shared,we=oe.isBufferArgs,Ze=oe.elements,kt=ae.invoke(se,j),Be=se.def("null"),at=se.def(we,"(",kt,")"),bt=ae.cond(at).then(Be,"=",Ze,".createStream(",kt,");").else(Be,"=",Ze,".getElements(",kt,");");return w.optional(function(){ae.assert(bt.else,"!"+kt+"||"+Be,"invalid elements")}),se.entry(bt),se.exit(ae.cond(at).then(Ze,".destroyStream(",Be,");")),ae.ELEMENTS=Be,Be})}return null}var O=H();function P(){if(Li in I){var S=I[Li];return w.commandParameter(S,g0,"invalid primitve",_.commandStr),Xo(function(j,ae){return g0[S]})}else if(Li in $){var G=$[Li];return sr(G,function(j,ae){var se=j.constants.primTypes,oe=j.invoke(ae,G);return w.optional(function(){j.assert(ae,oe+" in "+se,"invalid primitive, must be one of "+Object.keys(g0))}),ae.def(se,"[",oe,"]")})}else if(O)return ja(O)?O.value?Xo(function(j,ae){return ae.def(j.ELEMENTS,".primType")}):Xo(function(){return _p}):new Vn(O.thisDep,O.contextDep,O.propDep,function(j,ae){var se=j.ELEMENTS;return ae.def(se,"?",se,".primType:",_p)});return null}function F(S,G){if(S in I){var j=I[S]|0;return w.command(!G||j>=0,"invalid "+S,_.commandStr),Xo(function(se,oe){return G&&(se.OFFSET=j),j})}else if(S in $){var ae=$[S];return sr(ae,function(se,oe){var we=se.invoke(oe,ae);return G&&(se.OFFSET=we,w.optional(function(){se.assert(oe,we+">=0","invalid "+S)})),we})}else if(G&&O)return Xo(function(se,oe){return se.OFFSET="0",0});return null}var k=F(fl,!0);function R(){if(zi in I){var S=I[zi]|0;return w.command(typeof S=="number"&&S>=0,"invalid vertex count",_.commandStr),Xo(function(){return S})}else if(zi in $){var G=$[zi];return sr(G,function(se,oe){var we=se.invoke(oe,G);return w.optional(function(){se.assert(oe,"typeof "+we+'==="number"&&'+we+">=0&&"+we+"===("+we+"|0)","invalid vertex count")}),we})}else if(O)if(ja(O)){if(O)return k?new Vn(k.thisDep,k.contextDep,k.propDep,function(se,oe){var we=oe.def(se.ELEMENTS,".vertCount-",se.OFFSET);return w.optional(function(){se.assert(oe,we+">=0","invalid vertex offset/element buffer too small")}),we}):Xo(function(se,oe){return oe.def(se.ELEMENTS,".vertCount")});var j=Xo(function(){return-1});return w.optional(function(){j.MISSING=!0}),j}else{var ae=new Vn(O.thisDep||k.thisDep,O.contextDep||k.contextDep,O.propDep||k.propDep,function(se,oe){var we=se.ELEMENTS;return se.OFFSET?oe.def(we,"?",we,".vertCount-",se.OFFSET,":-1"):oe.def(we,"?",we,".vertCount:-1")});return w.optional(function(){ae.DYNAMIC=!0}),ae}return null}return{elements:O,primitive:P(),count:R(),instances:F(hl,!1),offset:k}}function Yo(A,_){var I=A.static,$=A.dynamic,H={};return de.forEach(function(O){var P=ze(O);function F(k,R){if(O in I){var S=k(I[O]);H[P]=Xo(function(){return S})}else if(O in $){var G=$[O];H[P]=sr(G,function(j,ae){return R(j,ae,j.invoke(ae,G))})}}switch(O){case fp:case rp:case np:case vp:case ip:case gp:case up:case dp:case pp:case lp:return F(function(k){return w.commandType(k,"boolean",O,_.commandStr),k},function(k,R,S){return w.optional(function(){k.assert(R,"typeof "+S+'==="boolean"',"invalid flag "+O,k.commandStr)}),S});case sp:return F(function(k){return w.commandParameter(k,C0,"invalid "+O,_.commandStr),C0[k]},function(k,R,S){var G=k.constants.compareFuncs;return w.optional(function(){k.assert(R,S+" in "+G,"invalid "+O+", must be one of "+Object.keys(C0))}),R.def(G,"[",S,"]")});case cp:return F(function(k){return w.command(Do(k)&&k.length===2&&typeof k[0]=="number"&&typeof k[1]=="number"&&k[0]<=k[1],"depth range is 2d array",_.commandStr),k},function(k,R,S){w.optional(function(){k.assert(R,k.shared.isArrayLike+"("+S+")&&"+S+".length===2&&typeof "+S+'[0]==="number"&&typeof '+S+'[1]==="number"&&'+S+"[0]<="+S+"[1]","depth range must be a 2d array")});var G=R.def("+",S,"[0]"),j=R.def("+",S,"[1]");return[G,j]});case Eh:return F(function(k){w.commandType(k,"object","blend.func",_.commandStr);var R="srcRGB"in k?k.srcRGB:k.src,S="srcAlpha"in k?k.srcAlpha:k.src,G="dstRGB"in k?k.dstRGB:k.dst,j="dstAlpha"in k?k.dstAlpha:k.dst;return w.commandParameter(R,fa,P+".srcRGB",_.commandStr),w.commandParameter(S,fa,P+".srcAlpha",_.commandStr),w.commandParameter(G,fa,P+".dstRGB",_.commandStr),w.commandParameter(j,fa,P+".dstAlpha",_.commandStr),w.command(Tp.indexOf(R+", "+G)===-1,"unallowed blending combination (srcRGB, dstRGB) = ("+R+", "+G+")",_.commandStr),[fa[R],fa[G],fa[S],fa[j]]},function(k,R,S){var G=k.constants.blendFuncs;w.optional(function(){k.assert(R,S+"&&typeof "+S+'==="object"',"invalid blend func, must be an object")});function j(Be,at){var bt=R.def('"',Be,at,'" in ',S,"?",S,".",Be,at,":",S,".",Be);return w.optional(function(){k.assert(R,bt+" in "+G,"invalid "+O+"."+Be+at+", must be one of "+Object.keys(fa))}),bt}var ae=j("src","RGB"),se=j("dst","RGB");w.optional(function(){var Be=k.constants.invalidBlendCombinations;k.assert(R,Be+".indexOf("+ae+'+", "+'+se+") === -1 ","unallowed blending combination for (srcRGB, dstRGB)")});var oe=R.def(G,"[",ae,"]"),we=R.def(G,"[",j("src","Alpha"),"]"),Ze=R.def(G,"[",se,"]"),kt=R.def(G,"[",j("dst","Alpha"),"]");return[oe,Ze,we,kt]});case Mh:return F(function(k){if(typeof k=="string")return w.commandParameter(k,J,"invalid "+O,_.commandStr),[J[k],J[k]];if(typeof k=="object")return w.commandParameter(k.rgb,J,O+".rgb",_.commandStr),w.commandParameter(k.alpha,J,O+".alpha",_.commandStr),[J[k.rgb],J[k.alpha]];w.commandRaise("invalid blend.equation",_.commandStr)},function(k,R,S){var G=k.constants.blendEquations,j=R.def(),ae=R.def(),se=k.cond("typeof ",S,'==="string"');return w.optional(function(){function oe(we,Ze,kt){k.assert(we,kt+" in "+G,"invalid "+Ze+", must be one of "+Object.keys(J))}oe(se.then,O,S),k.assert(se.else,S+"&&typeof "+S+'==="object"',"invalid "+O),oe(se.else,O+".rgb",S+".rgb"),oe(se.else,O+".alpha",S+".alpha")}),se.then(j,"=",ae,"=",G,"[",S,"];"),se.else(j,"=",G,"[",S,".rgb];",ae,"=",G,"[",S,".alpha];"),R(se),[j,ae]});case ap:return F(function(k){return w.command(Do(k)&&k.length===4,"blend.color must be a 4d array",_.commandStr),Sn(4,function(R){return+k[R]})},function(k,R,S){return w.optional(function(){k.assert(R,k.shared.isArrayLike+"("+S+")&&"+S+".length===4","blend.color must be a 4d array")}),Sn(4,function(G){return R.def("+",S,"[",G,"]")})});case mp:return F(function(k){return w.commandType(k,"number",P,_.commandStr),k|0},function(k,R,S){return w.optional(function(){k.assert(R,"typeof "+S+'==="number"',"invalid stencil.mask")}),R.def(S,"|0")});case zh:return F(function(k){w.commandType(k,"object",P,_.commandStr);var R=k.cmp||"keep",S=k.ref||0,G="mask"in k?k.mask:-1;return w.commandParameter(R,C0,O+".cmp",_.commandStr),w.commandType(S,"number",O+".ref",_.commandStr),w.commandType(G,"number",O+".mask",_.commandStr),[C0[R],S,G]},function(k,R,S){var G=k.constants.compareFuncs;w.optional(function(){function oe(){k.assert(R,Array.prototype.join.call(arguments,""),"invalid stencil.func")}oe(S+"&&typeof ",S,'==="object"'),oe('!("cmp" in ',S,")||(",S,".cmp in ",G,")")});var j=R.def('"cmp" in ',S,"?",G,"[",S,".cmp]",":",qa),ae=R.def(S,".ref|0"),se=R.def('"mask" in ',S,"?",S,".mask|0:-1");return[j,ae,se]});case Nh:case Hs:return F(function(k){w.commandType(k,"object",P,_.commandStr);var R=k.fail||"keep",S=k.zfail||"keep",G=k.zpass||"keep";return w.commandParameter(R,Ha,O+".fail",_.commandStr),w.commandParameter(S,Ha,O+".zfail",_.commandStr),w.commandParameter(G,Ha,O+".zpass",_.commandStr),[O===Hs?Ni:Zs,Ha[R],Ha[S],Ha[G]]},function(k,R,S){var G=k.constants.stencilOps;w.optional(function(){k.assert(R,S+"&&typeof "+S+'==="object"',"invalid "+O)});function j(ae){return w.optional(function(){k.assert(R,'!("'+ae+'" in '+S+")||("+S+"."+ae+" in "+G+")","invalid "+O+"."+ae+", must be one of "+Object.keys(Ha))}),R.def('"',ae,'" in ',S,"?",G,"[",S,".",ae,"]:",qa)}return[O===Hs?Ni:Zs,j("fail"),j("zfail"),j("zpass")]});case Th:return F(function(k){w.commandType(k,"object",P,_.commandStr);var R=k.factor|0,S=k.units|0;return w.commandType(R,"number",P+".factor",_.commandStr),w.commandType(S,"number",P+".units",_.commandStr),[R,S]},function(k,R,S){w.optional(function(){k.assert(R,S+"&&typeof "+S+'==="object"',"invalid "+O)});var G=R.def(S,".factor|0"),j=R.def(S,".units|0");return[G,j]});case hp:return F(function(k){var R=0;return k==="front"?R=Zs:k==="back"&&(R=Ni),w.command(!!R,P,_.commandStr),R},function(k,R,S){return w.optional(function(){k.assert(R,S+'==="front"||'+S+'==="back"',"invalid cull.face")}),R.def(S,'==="front"?',Zs,":",Ni)});case kh:return F(function(k){return w.command(typeof k=="number"&&k>=Y.lineWidthDims[0]&&k<=Y.lineWidthDims[1],"invalid line width, must be a positive number between "+Y.lineWidthDims[0]+" and "+Y.lineWidthDims[1],_.commandStr),k},function(k,R,S){return w.optional(function(){k.assert(R,"typeof "+S+'==="number"&&'+S+">="+Y.lineWidthDims[0]+"&&"+S+"<="+Y.lineWidthDims[1],"invalid line width")}),S});case Ah:return F(function(k){return w.commandParameter(k,Gh,P,_.commandStr),Gh[k]},function(k,R,S){return w.optional(function(){k.assert(R,S+'==="cw"||'+S+'==="ccw"',"invalid frontFace, must be one of cw,ccw")}),R.def(S+'==="cw"?'+Mp+":"+Fh)});case Sh:return F(function(k){return w.command(Do(k)&&k.length===4,"color.mask must be length 4 array",_.commandStr),k.map(function(R){return!!R})},function(k,R,S){return w.optional(function(){k.assert(R,k.shared.isArrayLike+"("+S+")&&"+S+".length===4","invalid color.mask")}),Sn(4,function(G){return"!!"+S+"["+G+"]"})});case Lh:return F(function(k){w.command(typeof k=="object"&&k,P,_.commandStr);var R="value"in k?k.value:1,S=!!k.invert;return w.command(typeof R=="number"&&R>=0&&R<=1,"sample.coverage.value must be a number between 0 and 1",_.commandStr),[R,S]},function(k,R,S){w.optional(function(){k.assert(R,S+"&&typeof "+S+'==="object"',"invalid sample.coverage")});var G=R.def('"value" in ',S,"?+",S,".value:1"),j=R.def("!!",S,".invert");return[G,j]})}}),H}function ln(A,_){var I=A.static,$=A.dynamic,H={};return Object.keys(I).forEach(function(O){var P=I[O],F;if(typeof P=="number"||typeof P=="boolean")F=Xo(function(){return P});else if(typeof P=="function"){var k=P._reglType;k==="texture2d"||k==="textureCube"?F=Xo(function(R){return R.link(P)}):k==="framebuffer"||k==="framebufferCube"?(w.command(P.color.length>0,'missing color attachment for framebuffer sent to uniform "'+O+'"',_.commandStr),F=Xo(function(R){return R.link(P.color[0])})):w.commandRaise('invalid data for uniform "'+O+'"',_.commandStr)}else Do(P)?F=Xo(function(R){var S=R.global.def("[",Sn(P.length,function(G){return w.command(typeof P[G]=="number"||typeof P[G]=="boolean","invalid uniform "+O,R.commandStr),P[G]}),"]");return S}):w.commandRaise('invalid or missing data for uniform "'+O+'"',_.commandStr);F.value=P,H[O]=F}),Object.keys($).forEach(function(O){var P=$[O];H[O]=sr(P,function(F,k){return F.invoke(k,P)})}),H}function Ft(A,_){var I=A.static,$=A.dynamic,H={};return Object.keys(I).forEach(function(O){var P=I[O],F=E.id(O),k=new q;if(wl(P))k.state=T0,k.buffer=ie.getBuffer(ie.create(P,N0,!1,!0)),k.type=0;else{var R=ie.getBuffer(P);if(R)k.state=T0,k.buffer=R,k.type=0;else if(w.command(typeof P=="object"&&P,"invalid data for attribute "+O,_.commandStr),"constant"in P){var S=P.constant;k.buffer="null",k.state=xh,typeof S=="number"?k.x=S:(w.command(Do(S)&&S.length>0&&S.length<=4,"invalid constant for attribute "+O,_.commandStr),k0.forEach(function(Ze,kt){kt<S.length&&(k[Ze]=S[kt])}))}else{wl(P.buffer)?R=ie.getBuffer(ie.create(P.buffer,N0,!1,!0)):R=ie.getBuffer(P.buffer),w.command(!!R,'missing buffer for attribute "'+O+'"',_.commandStr);var G=P.offset|0;w.command(G>=0,'invalid offset for attribute "'+O+'"',_.commandStr);var j=P.stride|0;w.command(j>=0&&j<256,'invalid stride for attribute "'+O+'", must be integer betweeen [0, 255]',_.commandStr);var ae=P.size|0;w.command(!("size"in P)||ae>0&&ae<=4,'invalid size for attribute "'+O+'", must be 1,2,3,4',_.commandStr);var se=!!P.normalized,oe=0;"type"in P&&(w.commandParameter(P.type,_i,"invalid type for attribute "+O,_.commandStr),oe=_i[P.type]);var we=P.divisor|0;"divisor"in P&&(w.command(we===0||_e,'cannot specify divisor for attribute "'+O+'", instancing not supported',_.commandStr),w.command(we>=0,'invalid divisor for attribute "'+O+'"',_.commandStr)),w.optional(function(){var Ze=_.commandStr,kt=["buffer","offset","divisor","normalized","type","size","stride"];Object.keys(P).forEach(function(Be){w.command(kt.indexOf(Be)>=0,'unknown parameter "'+Be+'" for attribute pointer "'+O+'" (valid parameters are '+kt+")",Ze)})}),k.buffer=R,k.state=T0,k.size=ae,k.normalized=se,k.type=oe||R.dtype,k.offset=G,k.stride=j,k.divisor=we}}H[O]=Xo(function(Ze,kt){var Be=Ze.attribCache;if(F in Be)return Be[F];var at={isStream:!1};return Object.keys(k).forEach(function(bt){at[bt]=k[bt]}),k.buffer&&(at.buffer=Ze.link(k.buffer),at.type=at.type||at.buffer+".dtype"),Be[F]=at,at})}),Object.keys($).forEach(function(O){var P=$[O];function F(k,R){var S=k.invoke(R,P),G=k.shared,j=k.constants,ae=G.isBufferArgs,se=G.buffer;w.optional(function(){k.assert(R,S+"&&(typeof "+S+'==="object"||typeof '+S+'==="function")&&('+ae+"("+S+")||"+se+".getBuffer("+S+")||"+se+".getBuffer("+S+".buffer)||"+ae+"("+S+'.buffer)||("constant" in '+S+"&&(typeof "+S+'.constant==="number"||'+G.isArrayLike+"("+S+".constant))))",'invalid dynamic attribute "'+O+'"')});var oe={isStream:R.def(!1)},we=new q;we.state=T0,Object.keys(we).forEach(function(at){oe[at]=R.def(""+we[at])});var Ze=oe.buffer,kt=oe.type;R("if(",ae,"(",S,")){",oe.isStream,"=true;",Ze,"=",se,".createStream(",N0,",",S,");",kt,"=",Ze,".dtype;","}else{",Ze,"=",se,".getBuffer(",S,");","if(",Ze,"){",kt,"=",Ze,".dtype;",'}else if("constant" in ',S,"){",oe.state,"=",xh,";","if(typeof "+S+'.constant === "number"){',oe[k0[0]],"=",S,".constant;",k0.slice(1).map(function(at){return oe[at]}).join("="),"=0;","}else{",k0.map(function(at,bt){return oe[at]+"="+S+".constant.length>"+bt+"?"+S+".constant["+bt+"]:0;"}).join(""),"}}else{","if(",ae,"(",S,".buffer)){",Ze,"=",se,".createStream(",N0,",",S,".buffer);","}else{",Ze,"=",se,".getBuffer(",S,".buffer);","}",kt,'="type" in ',S,"?",j.glTypes,"[",S,".type]:",Ze,".dtype;",oe.normalized,"=!!",S,".normalized;");function Be(at){R(oe[at],"=",S,".",at,"|0;")}return Be("size"),Be("offset"),Be("stride"),Be("divisor"),R("}}"),R.exit("if(",oe.isStream,"){",se,".destroyStream(",Ze,");","}"),oe}H[O]=sr(P,F)}),H}function nn(A,_){var I=A.static,$=A.dynamic;if(Ws in I){var H=I[Ws];return H!==null&&Me.getVAO(H)===null&&(H=Me.createVAO(H)),Xo(function(P){return P.link(Me.getVAO(H))})}else if(Ws in $){var O=$[Ws];return sr(O,function(P,F){var k=P.invoke(F,O);return F.def(P.shared.vao+".getVAO("+k+")")})}return null}function Eo(A){var _=A.static,I=A.dynamic,$={};return Object.keys(_).forEach(function(H){var O=_[H];$[H]=Xo(function(P,F){return typeof O=="number"||typeof O=="boolean"?""+O:P.link(O)})}),Object.keys(I).forEach(function(H){var O=I[H];$[H]=sr(O,function(P,F){return P.invoke(F,O)})}),$}function Ko(A,_,I,$,H){var O=A.static,P=A.dynamic;w.optional(function(){var Be=[ki,Us,Bs,Ti,Li,fl,zi,hl,js,Ws].concat(de);function at(bt){Object.keys(bt).forEach(function(Jt){w.command(Be.indexOf(Jt)>=0,'unknown parameter "'+Jt+'"',H.commandStr)})}at(O),at(P)});var F=gt(A,_),k=Ue(A,H),R=Rt(A,k,H),S=Zt(A,H),G=Yo(A,H),j=zt(A,H,F);function ae(Be){var at=R[Be];at&&(G[Be]=at)}ae(_a),ae(ze(ll));var se=Object.keys(G).length>0,oe={framebuffer:k,draw:S,shader:j,state:G,dirty:se,scopeVAO:null,drawVAO:null,useVAO:!1,attributes:{}};if(oe.profile=St(A,H),oe.uniforms=ln(I,H),oe.drawVAO=oe.scopeVAO=nn(A,H),!oe.drawVAO&&j.program&&!F&&N.angle_instanced_arrays){var we=!0,Ze=j.program.attributes.map(function(Be){var at=_.static[Be];return we=we&&!!at,at});if(we&&Ze.length>0){var kt=Me.getVAO(Me.createVAO(Ze));oe.drawVAO=new Vn(null,null,null,function(Be,at){return Be.link(kt)}),oe.useVAO=!0}}return F?oe.useVAO=!0:oe.attributes=Ft(_,H),oe.context=Eo($,H),oe}function rn(A,_,I){var $=A.shared,H=$.context,O=A.scope();Object.keys(I).forEach(function(P){_.save(H,"."+P);var F=I[P],k=F.append(A,_);Array.isArray(k)?O(H,".",P,"=[",k.join(),"];"):O(H,".",P,"=",k,";")}),_(O)}function an(A,_,I,$){var H=A.shared,O=H.gl,P=H.framebuffer,F;Oe&&(F=_.def(H.extensions,".webgl_draw_buffers"));var k=A.constants,R=k.drawBuffer,S=k.backBuffer,G;I?G=I.append(A,_):G=_.def(P,".next"),$||_("if(",G,"!==",P,".cur){"),_("if(",G,"){",O,".bindFramebuffer(",kp,",",G,".framebuffer);"),Oe&&_(F,".drawBuffersWEBGL(",R,"[",G,".colorAttachments.length]);"),_("}else{",O,".bindFramebuffer(",kp,",null);"),Oe&&_(F,".drawBuffersWEBGL(",S,");"),_("}",P,".cur=",G,";"),$||_("}")}function mn(A,_,I){var $=A.shared,H=$.gl,O=A.current,P=A.next,F=$.current,k=$.next,R=A.cond(F,".dirty");de.forEach(function(S){var G=ze(S);if(!(G in I.state)){var j,ae;if(G in P){j=P[G],ae=O[G];var se=Sn(he[G].length,function(we){return R.def(j,"[",we,"]")});R(A.cond(se.map(function(we,Ze){return we+"!=="+ae+"["+Ze+"]"}).join("||")).then(H,".",ue[G],"(",se,");",se.map(function(we,Ze){return ae+"["+Ze+"]="+we}).join(";"),";"))}else{j=R.def(k,".",G);var oe=A.cond(j,"!==",F,".",G);R(oe),G in Le?oe(A.cond(j).then(H,".enable(",Le[G],");").else(H,".disable(",Le[G],");"),F,".",G,"=",j,";"):oe(H,".",ue[G],"(",j,");",F,".",G,"=",j,";")}}}),Object.keys(I.state).length===0&&R(F,".dirty=false;"),_(R)}function kn(A,_,I,$){var H=A.shared,O=A.current,P=H.current,F=H.gl;zp(Object.keys(I)).forEach(function(k){var R=I[k];if(!($&&!$(R))){var S=R.append(A,_);if(Le[k]){var G=Le[k];ja(R)?S?_(F,".enable(",G,");"):_(F,".disable(",G,");"):_(A.cond(S).then(F,".enable(",G,");").else(F,".disable(",G,");")),_(P,".",k,"=",S,";")}else if(Do(S)){var j=O[k];_(F,".",ue[k],"(",S,");",S.map(function(ae,se){return j+"["+se+"]="+ae}).join(";"),";")}else _(F,".",ue[k],"(",S,");",P,".",k,"=",S,";")}})}function qo(A,_){_e&&(A.instancing=_.def(A.shared.extensions,".angle_instanced_arrays"))}function At(A,_,I,$,H){var O=A.shared,P=A.stats,F=O.current,k=O.timer,R=I.profile;function S(){return typeof performance=="undefined"?"Date.now()":"performance.now()"}var G,j;function ae(Be){G=_.def(),Be(G,"=",S(),";"),typeof H=="string"?Be(P,".count+=",H,";"):Be(P,".count++;"),ge&&($?(j=_.def(),Be(j,"=",k,".getNumPendingQueries();")):Be(k,".beginQuery(",P,");"))}function se(Be){Be(P,".cpuTime+=",S(),"-",G,";"),ge&&($?Be(k,".pushScopeStats(",j,",",k,".getNumPendingQueries(),",P,");"):Be(k,".endQuery();"))}function oe(Be){var at=_.def(F,".profile");_(F,".profile=",Be,";"),_.exit(F,".profile=",at,";")}var we;if(R){if(ja(R)){R.enable?(ae(_),se(_.exit),oe("true")):oe("false");return}we=R.append(A,_),oe(we)}else we=_.def(F,".profile");var Ze=A.block();ae(Ze),_("if(",we,"){",Ze,"}");var kt=A.block();se(kt),_.exit("if(",we,"){",kt,"}")}function Tn(A,_,I,$,H){var O=A.shared;function P(k){switch(k){case ul:case vl:case xl:return 2;case dl:case ml:case yl:return 3;case pl:case gl:case bl:return 4;default:return 1}}function F(k,R,S){var G=O.gl,j=_.def(k,".location"),ae=_.def(O.attributes,"[",j,"]"),se=S.state,oe=S.buffer,we=[S.x,S.y,S.z,S.w],Ze=["buffer","normalized","offset","stride"];function kt(){_("if(!",ae,".buffer){",G,".enableVertexAttribArray(",j,");}");var at=S.type,bt;if(S.size?bt=_.def(S.size,"||",R):bt=R,_("if(",ae,".type!==",at,"||",ae,".size!==",bt,"||",Ze.map(function(Oo){return ae+"."+Oo+"!=="+S[Oo]}).join("||"),"){",G,".bindBuffer(",N0,",",oe,".buffer);",G,".vertexAttribPointer(",[j,bt,at,S.normalized,S.stride,S.offset],");",ae,".type=",at,";",ae,".size=",bt,";",Ze.map(function(Oo){return ae+"."+Oo+"="+S[Oo]+";"}).join(""),"}"),_e){var Jt=S.divisor;_("if(",ae,".divisor!==",Jt,"){",A.instancing,".vertexAttribDivisorANGLE(",[j,Jt],");",ae,".divisor=",Jt,";}")}}function Be(){_("if(",ae,".buffer){",G,".disableVertexAttribArray(",j,");",ae,".buffer=null;","}if(",k0.map(function(at,bt){return ae+"."+at+"!=="+we[bt]}).join("||"),"){",G,".vertexAttrib4f(",j,",",we,");",k0.map(function(at,bt){return ae+"."+at+"="+we[bt]+";"}).join(""),"}")}se===T0?kt():se===xh?Be():(_("if(",se,"===",T0,"){"),kt(),_("}else{"),Be(),_("}"))}$.forEach(function(k){var R=k.name,S=I.attributes[R],G;if(S){if(!H(S))return;G=S.append(A,_)}else{if(!H(Np))return;var j=A.scopeAttrib(R);w.optional(function(){A.assert(_,j+".state","missing attribute "+R)}),G={},Object.keys(new q).forEach(function(ae){G[ae]=_.def(j,".",ae)})}F(A.link(k),P(k.info.type),G)})}function so(A,_,I,$,H){for(var O=A.shared,P=O.gl,F,k=0;k<$.length;++k){var R=$[k],S=R.name,G=R.info.type,j=I.uniforms[S],ae=A.link(R),se=ae+".location",oe;if(j){if(!H(j))continue;if(ja(j)){var we=j.value;if(w.command(we!==null&&typeof we!="undefined",'missing uniform "'+S+'"',A.commandStr),G===Ks||G===Qs){w.command(typeof we=="function"&&(G===Ks&&(we._reglType==="texture2d"||we._reglType==="framebuffer")||G===Qs&&(we._reglType==="textureCube"||we._reglType==="framebufferCube")),"invalid texture for uniform "+S,A.commandStr);var Ze=A.link(we._texture||we.color[0]._texture);_(P,".uniform1i(",se,",",Ze+".bind());"),_.exit(Ze,".unbind();")}else if(G===Vs||G===Xs||G===Ys){w.optional(function(){w.command(Do(we),"invalid matrix for uniform "+S,A.commandStr),w.command(G===Vs&&we.length===4||G===Xs&&we.length===9||G===Ys&&we.length===16,"invalid length for matrix uniform "+S,A.commandStr)});var kt=A.global.def("new Float32Array(["+Array.prototype.slice.call(we)+"])"),Be=2;G===Xs?Be=3:G===Ys&&(Be=4),_(P,".uniformMatrix",Be,"fv(",se,",false,",kt,");")}else{switch(G){case Ih:w.commandType(we,"number","uniform "+S,A.commandStr),F="1f";break;case ul:w.command(Do(we)&&we.length===2,"uniform "+S,A.commandStr),F="2f";break;case dl:w.command(Do(we)&&we.length===3,"uniform "+S,A.commandStr),F="3f";break;case pl:w.command(Do(we)&&we.length===4,"uniform "+S,A.commandStr),F="4f";break;case Oh:w.commandType(we,"boolean","uniform "+S,A.commandStr),F="1i";break;case Ph:w.commandType(we,"number","uniform "+S,A.commandStr),F="1i";break;case xl:w.command(Do(we)&&we.length===2,"uniform "+S,A.commandStr),F="2i";break;case vl:w.command(Do(we)&&we.length===2,"uniform "+S,A.commandStr),F="2i";break;case yl:w.command(Do(we)&&we.length===3,"uniform "+S,A.commandStr),F="3i";break;case ml:w.command(Do(we)&&we.length===3,"uniform "+S,A.commandStr),F="3i";break;case bl:w.command(Do(we)&&we.length===4,"uniform "+S,A.commandStr),F="4i";break;case gl:w.command(Do(we)&&we.length===4,"uniform "+S,A.commandStr),F="4i";break}_(P,".uniform",F,"(",se,",",Do(we)?Array.prototype.slice.call(we):we,");")}continue}else oe=j.append(A,_)}else{if(!H(Np))continue;oe=_.def(O.uniforms,"[",E.id(S),"]")}G===Ks?(w(!Array.isArray(oe),"must specify a scalar prop for textures"),_("if(",oe,"&&",oe,'._reglType==="framebuffer"){',oe,"=",oe,".color[0];","}")):G===Qs&&(w(!Array.isArray(oe),"must specify a scalar prop for cube maps"),_("if(",oe,"&&",oe,'._reglType==="framebufferCube"){',oe,"=",oe,".color[0];","}")),w.optional(function(){function Xn(Kr,Gp){A.assert(_,Kr,'bad data or missing for uniform "'+S+'".  '+Gp)}function $h(Kr){w(!Array.isArray(oe),"must not specify an array type for uniform"),Xn("typeof "+oe+'==="'+Kr+'"',"invalid type, expected "+Kr)}function Nr(Kr,Gp){Array.isArray(oe)?w(oe.length===Kr,"must have length "+Kr):Xn(O.isArrayLike+"("+oe+")&&"+oe+".length==="+Kr,"invalid vector, should have length "+Kr,A.commandStr)}function Fp(Kr){w(!Array.isArray(oe),"must not specify a value type"),Xn("typeof "+oe+'==="function"&&'+oe+'._reglType==="texture'+(Kr===wp?"2d":"Cube")+'"',"invalid texture type",A.commandStr)}switch(G){case Ph:$h("number");break;case vl:Nr(2,"number");break;case ml:Nr(3,"number");break;case gl:Nr(4,"number");break;case Ih:$h("number");break;case ul:Nr(2,"number");break;case dl:Nr(3,"number");break;case pl:Nr(4,"number");break;case Oh:$h("boolean");break;case xl:Nr(2,"boolean");break;case yl:Nr(3,"boolean");break;case bl:Nr(4,"boolean");break;case Vs:Nr(4,"number");break;case Xs:Nr(9,"number");break;case Ys:Nr(16,"number");break;case Ks:Fp(wp);break;case Qs:Fp(h5);break}});var at=1;switch(G){case Ks:case Qs:var bt=_.def(oe,"._texture");_(P,".uniform1i(",se,",",bt,".bind());"),_.exit(bt,".unbind();");continue;case Ph:case Oh:F="1i";break;case vl:case xl:F="2i",at=2;break;case ml:case yl:F="3i",at=3;break;case gl:case bl:F="4i",at=4;break;case Ih:F="1f";break;case ul:F="2f",at=2;break;case dl:F="3f",at=3;break;case pl:F="4f",at=4;break;case Vs:F="Matrix2fv";break;case Xs:F="Matrix3fv";break;case Ys:F="Matrix4fv";break}if(_(P,".uniform",F,"(",se,","),F.charAt(0)==="M"){var Jt=Math.pow(G-Vs+2,2),Oo=A.global.def("new Float32Array(",Jt,")");Array.isArray(oe)?_("false,(",Sn(Jt,function(Xn){return Oo+"["+Xn+"]="+oe[Xn]}),",",Oo,")"):_("false,(Array.isArray(",oe,")||",oe," instanceof Float32Array)?",oe,":(",Sn(Jt,function(Xn){return Oo+"["+Xn+"]="+oe+"["+Xn+"]"}),",",Oo,")")}else at>1?_(Sn(at,function(Xn){return Array.isArray(oe)?oe[Xn]:oe+"["+Xn+"]"})):(w(!Array.isArray(oe),"uniform value must not be an array"),_(oe));_(");")}}function nt(A,_,I,$){var H=A.shared,O=H.gl,P=H.draw,F=$.draw;function k(){var bt=F.elements,Jt,Oo=_;return bt?((bt.contextDep&&$.contextDynamic||bt.propDep)&&(Oo=I),Jt=bt.append(A,Oo)):Jt=Oo.def(P,".",Ti),Jt&&Oo("if("+Jt+")"+O+".bindBuffer("+c5+","+Jt+".buffer.buffer);"),Jt}function R(){var bt=F.count,Jt,Oo=_;return bt?((bt.contextDep&&$.contextDynamic||bt.propDep)&&(Oo=I),Jt=bt.append(A,Oo),w.optional(function(){bt.MISSING&&A.assert(_,"false","missing vertex count"),bt.DYNAMIC&&A.assert(Oo,Jt+">=0","missing vertex count")})):(Jt=Oo.def(P,".",zi),w.optional(function(){A.assert(Oo,Jt+">=0","missing vertex count")})),Jt}var S=k();function G(bt){var Jt=F[bt];return Jt?Jt.contextDep&&$.contextDynamic||Jt.propDep?Jt.append(A,I):Jt.append(A,_):_.def(P,".",bt)}var j=G(Li),ae=G(fl),se=R();if(typeof se=="number"){if(se===0)return}else I("if(",se,"){"),I.exit("}");var oe,we;_e&&(oe=G(hl),we=A.instancing);var Ze=S+".type",kt=F.elements&&ja(F.elements);function Be(){function bt(){I(we,".drawElementsInstancedANGLE(",[j,se,Ze,ae+"<<(("+Ze+"-"+ep+")>>1)",oe],");")}function Jt(){I(we,".drawArraysInstancedANGLE(",[j,ae,se,oe],");")}S?kt?bt():(I("if(",S,"){"),bt(),I("}else{"),Jt(),I("}")):Jt()}function at(){function bt(){I(O+".drawElements("+[j,se,Ze,ae+"<<(("+Ze+"-"+ep+")>>1)"]+");")}function Jt(){I(O+".drawArrays("+[j,ae,se]+");")}S?kt?bt():(I("if(",S,"){"),bt(),I("}else{"),Jt(),I("}")):Jt()}_e&&(typeof oe!="number"||oe>=0)?typeof oe=="string"?(I("if(",oe,">0){"),Be(),I("}else if(",oe,"<0){"),at(),I("}")):Be():at()}function Pt(A,_,I,$,H){var O=ut(),P=O.proc("body",H);return w.optional(function(){O.commandStr=_.commandStr,O.command=O.link(_.commandStr)}),_e&&(O.instancing=P.def(O.shared.extensions,".angle_instanced_arrays")),A(O,P,I,$),O.compile().body}function Vt(A,_,I,$){qo(A,_),I.useVAO?I.drawVAO?_(A.shared.vao,".setVAO(",I.drawVAO.append(A,_),");"):_(A.shared.vao,".setVAO(",A.shared.vao,".targetVAO);"):(_(A.shared.vao,".setVAO(null);"),Tn(A,_,I,$.attributes,function(){return!0})),so(A,_,I,$.uniforms,function(){return!0}),nt(A,_,_,I)}function Ho(A,_){var I=A.proc("draw",1);qo(A,I),rn(A,I,_.context),an(A,I,_.framebuffer),mn(A,I,_),kn(A,I,_.state),At(A,I,_,!1,!0);var $=_.shader.progVar.append(A,I);if(I(A.shared.gl,".useProgram(",$,".program);"),_.shader.program)Vt(A,I,_,_.shader.program);else{I(A.shared.vao,".setVAO(null);");var H=A.global.def("{}"),O=I.def($,".id"),P=I.def(H,"[",O,"]");I(A.cond(P).then(P,".call(this,a0);").else(P,"=",H,"[",O,"]=",A.link(function(F){return Pt(Vt,A,_,F,1)}),"(",$,");",P,".call(this,a0);"))}Object.keys(_.state).length>0&&I(A.shared.current,".dirty=true;")}function ha(A,_,I,$){A.batchId="a1",qo(A,_);function H(){return!0}Tn(A,_,I,$.attributes,H),so(A,_,I,$.uniforms,H),nt(A,_,_,I)}function Ci(A,_,I,$){qo(A,_);var H=I.contextDep,O=_.def(),P="a0",F="a1",k=_.def();A.shared.props=k,A.batchId=O;var R=A.scope(),S=A.scope();_(R.entry,"for(",O,"=0;",O,"<",F,";++",O,"){",k,"=",P,"[",O,"];",S,"}",R.exit);function G(Ze){return Ze.contextDep&&H||Ze.propDep}function j(Ze){return!G(Ze)}if(I.needsContext&&rn(A,S,I.context),I.needsFramebuffer&&an(A,S,I.framebuffer),kn(A,S,I.state,G),I.profile&&G(I.profile)&&At(A,S,I,!1,!0),$)I.useVAO?I.drawVAO?G(I.drawVAO)?S(A.shared.vao,".setVAO(",I.drawVAO.append(A,S),");"):R(A.shared.vao,".setVAO(",I.drawVAO.append(A,R),");"):R(A.shared.vao,".setVAO(",A.shared.vao,".targetVAO);"):(R(A.shared.vao,".setVAO(null);"),Tn(A,R,I,$.attributes,j),Tn(A,S,I,$.attributes,G)),so(A,R,I,$.uniforms,j),so(A,S,I,$.uniforms,G),nt(A,R,S,I);else{var ae=A.global.def("{}"),se=I.shader.progVar.append(A,S),oe=S.def(se,".id"),we=S.def(ae,"[",oe,"]");S(A.shared.gl,".useProgram(",se,".program);","if(!",we,"){",we,"=",ae,"[",oe,"]=",A.link(function(Ze){return Pt(ha,A,I,Ze,2)}),"(",se,");}",we,".call(this,a0[",O,"],",O,");")}}function z(A,_){var I=A.proc("batch",2);A.batchId="0",qo(A,I);var $=!1,H=!0;Object.keys(_.context).forEach(function(ae){$=$||_.context[ae].propDep}),$||(rn(A,I,_.context),H=!1);var O=_.framebuffer,P=!1;O?(O.propDep?$=P=!0:O.contextDep&&$&&(P=!0),P||an(A,I,O)):an(A,I,null),_.state.viewport&&_.state.viewport.propDep&&($=!0);function F(ae){return ae.contextDep&&$||ae.propDep}mn(A,I,_),kn(A,I,_.state,function(ae){return!F(ae)}),(!_.profile||!F(_.profile))&&At(A,I,_,!1,"a1"),_.contextDep=$,_.needsContext=H,_.needsFramebuffer=P;var k=_.shader.progVar;if(k.contextDep&&$||k.propDep)Ci(A,I,_,null);else{var R=k.append(A,I);if(I(A.shared.gl,".useProgram(",R,".program);"),_.shader.program)Ci(A,I,_,_.shader.program);else{I(A.shared.vao,".setVAO(null);");var S=A.global.def("{}"),G=I.def(R,".id"),j=I.def(S,"[",G,"]");I(A.cond(j).then(j,".call(this,a0,a1);").else(j,"=",S,"[",G,"]=",A.link(function(ae){return Pt(Ci,A,_,ae,2)}),"(",R,");",j,".call(this,a0,a1);"))}}Object.keys(_.state).length>0&&I(A.shared.current,".dirty=true;")}function K(A,_){var I=A.proc("scope",3);A.batchId="a2";var $=A.shared,H=$.current;rn(A,I,_.context),_.framebuffer&&_.framebuffer.append(A,I),zp(Object.keys(_.state)).forEach(function(P){var F=_.state[P],k=F.append(A,I);Do(k)?k.forEach(function(R,S){I.set(A.next[P],"["+S+"]",R)}):I.set($.next,"."+P,k)}),At(A,I,_,!0,!0),[Ti,fl,zi,hl,Li].forEach(function(P){var F=_.draw[P];F&&I.set($.draw,"."+P,""+F.append(A,I))}),Object.keys(_.uniforms).forEach(function(P){var F=_.uniforms[P].append(A,I);Array.isArray(F)&&(F="["+F.join()+"]"),I.set($.uniforms,"["+E.id(P)+"]",F)}),Object.keys(_.attributes).forEach(function(P){var F=_.attributes[P].append(A,I),k=A.scopeAttrib(P);Object.keys(new q).forEach(function(R){I.set(k,"."+R,F[R])})}),_.scopeVAO&&I.set($.vao,".targetVAO",_.scopeVAO.append(A,I));function O(P){var F=_.shader[P];F&&I.set($.shader,"."+P,F.append(A,I))}O(Us),O(Bs),Object.keys(_.state).length>0&&(I(H,".dirty=true;"),I.exit(H,".dirty=true;")),I("a1(",A.shared.context,",a0,",A.batchId,");")}function U(A){if(!(typeof A!="object"||Do(A))){for(var _=Object.keys(A),I=0;I<_.length;++I)if(Xt.isDynamic(A[_[I]]))return!0;return!1}}function De(A,_,I){var $=_.static[I];if(!$||!U($))return;var H=A.global,O=Object.keys($),P=!1,F=!1,k=!1,R=A.global.def("{}");O.forEach(function(G){var j=$[G];if(Xt.isDynamic(j)){typeof j=="function"&&(j=$[G]=Xt.unbox(j));var ae=sr(j,null);P=P||ae.thisDep,k=k||ae.propDep,F=F||ae.contextDep}else{switch(H(R,".",G,"="),typeof j){case"number":H(j);break;case"string":H('"',j,'"');break;case"object":Array.isArray(j)&&H("[",j.join(),"]");break;default:H(A.link(j));break}H(";")}});function S(G,j){O.forEach(function(ae){var se=$[ae];if(Xt.isDynamic(se)){var oe=G.invoke(j,se);j(R,".",ae,"=",oe,";")}})}_.dynamic[I]=new Xt.DynamicVariable(cl,{thisDep:P,contextDep:F,propDep:k,ref:R,append:S}),delete _.static[I]}function It(A,_,I,$,H){var O=ut();O.stats=O.link(H),Object.keys(_.static).forEach(function(F){De(O,_,F)}),s5.forEach(function(F){De(O,A,F)});var P=Ko(A,_,I,$,O);return Ho(O,P),K(O,P),z(O,P),t(O.compile(),{destroy:function(){P.shader.program.destroy()}})}return{next:Ge,current:he,procs:function(){var A=ut(),_=A.proc("poll"),I=A.proc("refresh"),$=A.block();_($),I($);var H=A.shared,O=H.gl,P=H.next,F=H.current;$(F,".dirty=false;"),an(A,_),an(A,I,null,!0);var k;_e&&(k=A.link(_e)),N.oes_vertex_array_object&&I(A.link(N.oes_vertex_array_object),".bindVertexArrayOES(null);");for(var R=0;R<Y.maxAttributes;++R){var S=I.def(H.attributes,"[",R,"]"),G=A.cond(S,".buffer");G.then(O,".enableVertexAttribArray(",R,");",O,".bindBuffer(",N0,",",S,".buffer.buffer);",O,".vertexAttribPointer(",R,",",S,".size,",S,".type,",S,".normalized,",S,".stride,",S,".offset);").else(O,".disableVertexAttribArray(",R,");",O,".vertexAttrib4f(",R,",",S,".x,",S,".y,",S,".z,",S,".w);",S,".buffer=null;"),I(G),_e&&I(k,".vertexAttribDivisorANGLE(",R,",",S,".divisor);")}return I(A.shared.vao,".currentVAO=null;",A.shared.vao,".setVAO(",A.shared.vao,".targetVAO);"),Object.keys(Le).forEach(function(j){var ae=Le[j],se=$.def(P,".",j),oe=A.block();oe("if(",se,"){",O,".enable(",ae,")}else{",O,".disable(",ae,")}",F,".",j,"=",se,";"),I(oe),_("if(",se,"!==",F,".",j,"){",oe,"}")}),Object.keys(ue).forEach(function(j){var ae=ue[j],se=he[j],oe,we,Ze=A.block();if(Ze(O,".",ae,"("),Do(se)){var kt=se.length;oe=A.global.def(P,".",j),we=A.global.def(F,".",j),Ze(Sn(kt,function(Be){return oe+"["+Be+"]"}),");",Sn(kt,function(Be){return we+"["+Be+"]="+oe+"["+Be+"];"}).join("")),_("if(",Sn(kt,function(Be){return oe+"["+Be+"]!=="+we+"["+Be+"]"}).join("||"),"){",Ze,"}")}else oe=$.def(P,".",j),we=$.def(F,".",j),Ze(oe,");",F,".",j,"=",oe,";"),_("if(",oe,"!==",we,"){",Ze,"}");I(Ze)}),A.compile()}(),compile:It}}function k5(){return{vaoCount:0,bufferCount:0,elementsCount:0,framebufferCount:0,shaderCount:0,textureCount:0,cubeCount:0,renderbufferCount:0,maxTextureUnits:0}}var T5=34918,L5=34919,Cp=35007,z5=function(x,E){if(!E.ext_disjoint_timer_query)return null;var N=[];function Y(){return N.pop()||E.ext_disjoint_timer_query.createQueryEXT()}function ie(_e){N.push(_e)}var V=[];function Z(_e){var Oe=Y();E.ext_disjoint_timer_query.beginQueryEXT(Cp,Oe),V.push(Oe),ge(V.length-1,V.length,_e)}function me(){E.ext_disjoint_timer_query.endQueryEXT(Cp)}function ye(){this.startQueryIndex=-1,this.endQueryIndex=-1,this.sum=0,this.stats=null}var Me=[];function be(){return Me.pop()||new ye}function Ae(_e){Me.push(_e)}var Ce=[];function ge(_e,Oe,he){var Ge=be();Ge.startQueryIndex=_e,Ge.endQueryIndex=Oe,Ge.sum=0,Ge.stats=he,Ce.push(Ge)}var ke=[],q=[];function J(){var _e,Oe,he=V.length;if(he!==0){q.length=Math.max(q.length,he+1),ke.length=Math.max(ke.length,he+1),ke[0]=0,q[0]=0;var Ge=0;for(_e=0,Oe=0;Oe<V.length;++Oe){var de=V[Oe];E.ext_disjoint_timer_query.getQueryObjectEXT(de,L5)?(Ge+=E.ext_disjoint_timer_query.getQueryObjectEXT(de,T5),ie(de)):V[_e++]=de,ke[Oe+1]=Ge,q[Oe+1]=_e}for(V.length=_e,_e=0,Oe=0;Oe<Ce.length;++Oe){var Le=Ce[Oe],ue=Le.startQueryIndex,ze=Le.endQueryIndex;Le.sum+=ke[ze]-ke[ue];var tt=q[ue],mt=q[ze];mt===tt?(Le.stats.gpuTime+=Le.sum/1e6,Ae(Le)):(Le.startQueryIndex=tt,Le.endQueryIndex=mt,Ce[_e++]=Le)}Ce.length=_e}}return{beginQuery:Z,endQuery:me,pushScopeStats:ge,update:J,getNumPendingQueries:function(){return V.length},clear:function(){N.push.apply(N,V);for(var _e=0;_e<N.length;_e++)E.ext_disjoint_timer_query.deleteQueryEXT(N[_e]);V.length=0,N.length=0},restore:function(){V.length=0,N.length=0}}},N5=16384,C5=256,R5=1024,I5=34962,Rp="webglcontextlost",Ip="webglcontextrestored",Pp=1,P5=2,O5=3;function Op(x,E){for(var N=0;N<x.length;++N)if(x[N]===E)return N;return-1}function F5(x){var E=Co(x);if(!E)return null;var N=E.gl,Y=N.getContextAttributes(),ie=N.isContextLost(),V=ao(N,E);if(!V)return null;var Z=v0(),me=k5(),ye=V.extensions,Me=z5(N,ye),be=gi(),Ae=N.drawingBufferWidth,Ce=N.drawingBufferHeight,ge={tick:0,time:0,viewportWidth:Ae,viewportHeight:Ce,framebufferWidth:Ae,framebufferHeight:Ce,drawingBufferWidth:Ae,drawingBufferHeight:Ce,pixelRatio:E.pixelRatio},ke={},q={elements:null,primitive:4,count:-1,offset:0,instances:-1},J=_y(N,ye),_e=Gy(N,me,E,he),Oe=Kb(N,ye,J,me,_e);function he(nt){return Oe.destroyBuffer(nt)}var Ge=Ky(N,ye,_e,me),de=e5(N,Z,me,E),Le=kb(N,ye,J,function(){tt.procs.poll()},ge,me,E),ue=Tb(N,ye,J,me,E),ze=Xb(N,ye,J,Le,ue,me),tt=A5(N,Z,ye,J,_e,Ge,Le,ze,ke,Oe,de,q,ge,Me,E),mt=n5(N,ze,tt.procs.poll,ge,Y,ye,J),Re=tt.next,Se=N.canvas,le=[],ut=[],St=[],Ue=[E.onDestroy],Rt=null;function gt(){if(le.length===0){Me&&Me.update(),Rt=null;return}Rt=Fa.next(gt),kn();for(var nt=le.length-1;nt>=0;--nt){var Pt=le[nt];Pt&&Pt(ge,null,0)}N.flush(),Me&&Me.update()}function zt(){!Rt&&le.length>0&&(Rt=Fa.next(gt))}function Zt(){Rt&&(Fa.cancel(gt),Rt=null)}function Yo(nt){nt.preventDefault(),ie=!0,Zt(),ut.forEach(function(Pt){Pt()})}function ln(nt){N.getError(),ie=!1,V.restore(),de.restore(),_e.restore(),Le.restore(),ue.restore(),ze.restore(),Oe.restore(),Me&&Me.restore(),tt.procs.refresh(),zt(),St.forEach(function(Pt){Pt()})}Se&&(Se.addEventListener(Rp,Yo,!1),Se.addEventListener(Ip,ln,!1));function Ft(){le.length=0,Zt(),Se&&(Se.removeEventListener(Rp,Yo),Se.removeEventListener(Ip,ln)),de.clear(),ze.clear(),ue.clear(),Le.clear(),Ge.clear(),_e.clear(),Oe.clear(),Me&&Me.clear(),Ue.forEach(function(nt){nt()})}function nn(nt){w(!!nt,"invalid args to regl({...})"),w.type(nt,"object","invalid args to regl({...})");function Pt(H){var O=t({},H);delete O.uniforms,delete O.attributes,delete O.context,delete O.vao,"stencil"in O&&O.stencil.op&&(O.stencil.opBack=O.stencil.opFront=O.stencil.op,delete O.stencil.op);function P(F){if(F in O){var k=O[F];delete O[F],Object.keys(k).forEach(function(R){O[F+"."+R]=k[R]})}}return P("blend"),P("depth"),P("cull"),P("stencil"),P("polygonOffset"),P("scissor"),P("sample"),"vao"in H&&(O.vao=H.vao),O}function Vt(H,O){var P={},F={};return Object.keys(H).forEach(function(k){var R=H[k];if(Xt.isDynamic(R)){F[k]=Xt.unbox(R,k);return}else if(O&&Array.isArray(R)){for(var S=0;S<R.length;++S)if(Xt.isDynamic(R[S])){F[k]=Xt.unbox(R,k);return}}P[k]=R}),{dynamic:F,static:P}}var Ho=Vt(nt.context||{},!0),ha=Vt(nt.uniforms||{},!0),Ci=Vt(nt.attributes||{},!1),z=Vt(Pt(nt),!1),K={gpuTime:0,cpuTime:0,count:0},U=tt.compile(z,Ci,ha,Ho,K),De=U.draw,It=U.batch,A=U.scope,_=[];function I(H){for(;_.length<H;)_.push(null);return _}function $(H,O){var P;if(ie&&w.raise("context lost"),typeof H=="function")return A.call(this,null,H,0);if(typeof O=="function")if(typeof H=="number")for(P=0;P<H;++P)A.call(this,null,O,P);else if(Array.isArray(H))for(P=0;P<H.length;++P)A.call(this,H[P],O,P);else return A.call(this,H,O,0);else if(typeof H=="number"){if(H>0)return It.call(this,I(H|0),H|0)}else if(Array.isArray(H)){if(H.length)return It.call(this,H,H.length)}else return De.call(this,H)}return t($,{stats:K,destroy:function(){U.destroy()}})}var Eo=ze.setFBO=nn({framebuffer:Xt.define.call(null,Pp,"framebuffer")});function Ko(nt,Pt){var Vt=0;tt.procs.poll();var Ho=Pt.color;Ho&&(N.clearColor(+Ho[0]||0,+Ho[1]||0,+Ho[2]||0,+Ho[3]||0),Vt|=N5),"depth"in Pt&&(N.clearDepth(+Pt.depth),Vt|=C5),"stencil"in Pt&&(N.clearStencil(Pt.stencil|0),Vt|=R5),w(!!Vt,"called regl.clear with no buffer specified"),N.clear(Vt)}function rn(nt){if(w(typeof nt=="object"&&nt,"regl.clear() takes an object as input"),"framebuffer"in nt)if(nt.framebuffer&&nt.framebuffer_reglType==="framebufferCube")for(var Pt=0;Pt<6;++Pt)Eo(t({framebuffer:nt.framebuffer.faces[Pt]},nt),Ko);else Eo(nt,Ko);else Ko(null,nt)}function an(nt){w.type(nt,"function","regl.frame() callback must be a function"),le.push(nt);function Pt(){var Vt=Op(le,nt);w(Vt>=0,"cannot cancel a frame twice");function Ho(){var ha=Op(le,Ho);le[ha]=le[le.length-1],le.length-=1,le.length<=0&&Zt()}le[Vt]=Ho}return zt(),{cancel:Pt}}function mn(){var nt=Re.viewport,Pt=Re.scissor_box;nt[0]=nt[1]=Pt[0]=Pt[1]=0,ge.viewportWidth=ge.framebufferWidth=ge.drawingBufferWidth=nt[2]=Pt[2]=N.drawingBufferWidth,ge.viewportHeight=ge.framebufferHeight=ge.drawingBufferHeight=nt[3]=Pt[3]=N.drawingBufferHeight}function kn(){ge.tick+=1,ge.time=At(),mn(),tt.procs.poll()}function qo(){Le.refresh(),mn(),tt.procs.refresh(),Me&&Me.update()}function At(){return(gi()-be)/1e3}qo();function Tn(nt,Pt){w.type(Pt,"function","listener callback must be a function");var Vt;switch(nt){case"frame":return an(Pt);case"lost":Vt=ut;break;case"restore":Vt=St;break;case"destroy":Vt=Ue;break;default:w.raise("invalid event, must be one of frame,lost,restore,destroy")}return Vt.push(Pt),{cancel:function(){for(var Ho=0;Ho<Vt.length;++Ho)if(Vt[Ho]===Pt){Vt[Ho]=Vt[Vt.length-1],Vt.pop();return}}}}var so=t(nn,{clear:rn,prop:Xt.define.bind(null,Pp),context:Xt.define.bind(null,P5),this:Xt.define.bind(null,O5),draw:nn({}),buffer:function(nt){return _e.create(nt,I5,!1,!1)},elements:function(nt){return Ge.create(nt,!1)},texture:Le.create2D,cube:Le.createCube,renderbuffer:ue.create,framebuffer:ze.create,framebufferCube:ze.createCube,vao:Oe.createVAO,attributes:Y,frame:an,on:Tn,limits:J,hasExtension:function(nt){return J.extensions.indexOf(nt.toLowerCase())>=0},read:mt,destroy:Ft,_gl:N,_refresh:qo,poll:function(){kn(),Me&&Me.update()},now:At,stats:me});return E.onDone(null,so),so}return F5})});var Ri=pe((WS,iv)=>{"use strict";var Ea=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],Sa=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],ua=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],Tl=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],ac=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],Yh=e=>Math.hypot(e[0],e[1],e[2]),Rr=e=>{let t=Yh(e)||1;return[e[0]/t,e[1]/t,e[2]/t]};function $0(e,t){let o=e.length-1,n=Math.min(Math.max(t,0),1)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,i=e[Math.max(0,r-1)],s=e[r],c=e[r+1],f=e[Math.min(o,r+2)],l=[0,0,0];for(let d=0;d<3;d++)l[d]=.5*(2*s[d]+(-i[d]+c[d])*a+(2*i[d]-5*s[d]+4*c[d]-f[d])*a*a+(-i[d]+3*s[d]-3*c[d]+f[d])*a*a*a);return l}function Z5(e,t){return $0(e.map(o=>[o,0,0]),t)[0]}function J5(e,t,o,n){let r={curMat:[0,0,0]},i={r:[1,0,0,0,1,0,0,0,1],t:[0,0,0],s:1},s=[];r.save=()=>{s.push({r:i.r.slice(),t:i.t.slice(),s:i.s})},r.restore=()=>{i=s.pop()};let c=(h,p)=>{let u=new Array(9);for(let v=0;v<3;v++)for(let m=0;m<3;m++)u[v*3+m]=h[v*3]*p[m]+h[v*3+1]*p[3+m]+h[v*3+2]*p[6+m];return u},f=h=>[i.r[0]*h[0]+i.r[1]*h[1]+i.r[2]*h[2],i.r[3]*h[0]+i.r[4]*h[1]+i.r[5]*h[2],i.r[6]*h[0]+i.r[7]*h[1]+i.r[8]*h[2]];r.translate=(h,p,u)=>{let v=f([h,p,u]);i.t=[i.t[0]+v[0]*i.s,i.t[1]+v[1]*i.s,i.t[2]+v[2]*i.s]},r.scale=h=>{i.s*=h},r.rotateY=h=>{let p=Math.cos(h),u=Math.sin(h);i.r=c(i.r,[p,0,u,0,1,0,-u,0,p])},r.vert=(h,p,u)=>{let v=u||r.curMat,m=f(h),g=Rr(f(p));return e.push(m[0]*i.s+i.t[0],m[1]*i.s+i.t[1],m[2]*i.s+i.t[2]),t.push(g[0],g[1],g[2]),n.push(v[0],v[1],v[2]),e.length/3-1};let l=h=>[e[h*3],e[h*3+1],e[h*3+2]],d=h=>[t[h*3],t[h*3+1],t[h*3+2]];return r.tri=(h,p,u)=>{let v=l(h),m=ac(Ea(l(p),v),Ea(l(u),v)),g=Sa(Sa(d(h),d(p)),d(u));Tl(m,g)<0?o.push(h,u,p):o.push(h,p,u)},r.box=(h,p,u,v,m,g,y)=>{let b=[[[h,p,u],[v,p,u],[h,m,u],[v,m,u],[0,0,-1]],[[v,p,g],[h,p,g],[v,m,g],[h,m,g],[0,0,1]],[[h,p,g],[h,p,u],[h,m,g],[h,m,u],[-1,0,0]],[[v,p,u],[v,p,g],[v,m,u],[v,m,g],[1,0,0]],[[h,m,u],[v,m,u],[h,m,g],[v,m,g],[0,1,0]],[[h,p,g],[v,p,g],[h,p,u],[v,p,u],[0,-1,0]]];for(let M of b){let T=r.vert(M[0],M[4],y),L=r.vert(M[1],M[4],y),C=r.vert(M[2],M[4],y),D=r.vert(M[3],M[4],y);r.tri(T,L,C),r.tri(L,D,C)}},r.surface=(h,p,u,v)=>{v=v||{};let m=.001,g=T=>Math.min(1,Math.max(0,T)),y=[],b=[];for(let T=0;T<=p;T++){let L=[],C=[];for(let D=0;D<=u;D++){let B=T/p,W=D/u,Q=h(B,W),ce=Math.min(1-m,Math.max(m,B)),ee=v.wrapV?W:Math.min(1-m,Math.max(m,W)),te=Ea(h(g(ce+m),ee),h(g(ce-m),ee)),Ke=v.wrapV?ee+m:g(ee+m),ve=v.wrapV?ee-m:g(ee-m),Te=Ea(h(ce,Ke),h(ce,ve)),re=ac(te,Te);Yh(re)<1e-14&&(re=v.inside?Ea(Q,v.inside(B,W)):[0,1,0]),re=Rr(re),v.inside&&Tl(re,Ea(Q,v.inside(B,W)))<0&&(re=ua(re,-1));let vt=v.mat?v.mat(B,W,Q):null;L.push(r.vert(Q,re,vt)),v.double&&C.push(r.vert(Q,ua(re,-1),vt))}y.push(L),b.push(C)}let M=T=>{for(let L=0;L<p;L++)for(let C=0;C<u;C++){let D=T[L][C],B=T[L+1][C],W=T[L][C+1],Q=T[L+1][C+1];r.tri(D,B,W),r.tri(B,Q,W)}};M(y),v.double&&M(b)},r.ellipsoid=(h,p,u,v,m)=>{m=m||{};let g=m.warp||null;r.surface((y,b)=>{let M=y*Math.PI,T=b*Math.PI*2,L=g?g(y,b):1;return[h[0]+p[0]*L*Math.sin(M)*Math.cos(T),h[1]+p[1]*L*Math.cos(M),h[2]+p[2]*L*Math.sin(M)*Math.sin(T)]},u||10,v||14,{wrapV:!0,inside:()=>h,mat:m.mat})},r.tube=(h,p,u,v,m)=>{m=m||{};let g=40,y=[],b=null;for(let L=0;L<=g;L++){let C=L/g,D=$0(h,Math.max(0,C-.01)),B=$0(h,Math.min(1,C+.01)),W=Rr(Ea(B,D)),Q;if(b)Q=Rr(Ea(b,ua(W,Tl(b,W))));else{let ce=Math.abs(W[1])<.9?[0,1,0]:[1,0,0];Q=Rr(ac(W,ce))}y.push({N:Q,B:Rr(ac(W,Q))}),b=Q}let M=L=>{let C=Math.min(Math.max(L,0),1)*g,D=Math.min(g-1,Math.floor(C)),B=C-D,W=y[D],Q=y[D+1];return{N:Rr(Sa(ua(W.N,1-B),ua(Q.N,B))),B:Rr(Sa(ua(W.B,1-B),ua(Q.B,B)))}},T=m.squash||[1,1];r.surface((L,C)=>{let D=$0(h,L),B=M(L),W=p(L),Q=C*Math.PI*2;return Sa(D,Sa(ua(B.N,Math.cos(Q)*W*T[0]),ua(B.B,Math.sin(Q)*W*T[1])))},u||12,v||8,{wrapV:!0,inside:L=>$0(h,L),mat:m.mat})},r.lathe=(h,p,u,v,m)=>{m=m||{};let g=[];for(let y=0;y<h.length-1;y++){let b=h[y+1][0]-h[y][0],M=h[y+1][1]-h[y][1];g.push(Rr([M,-b,0]))}for(let y=0;y<h.length-1;y++){let b=h[y],M=h[y+1],T=y===0||b[2]===1,L=y===h.length-2||M[2]===1,C=T?g[y]:Rr(Sa(g[y-1],g[y])),D=L?g[y]:Rr(Sa(g[y],g[y+1])),B=[],W=[];for(let Q=0;Q<=v;Q++){let ce=Q/v*Math.PI*2,ee=Math.cos(ce),te=Math.sin(ce),Ke=m.mat?m.mat(ce,b[1]):null,ve=m.mat?m.mat(ce,M[1]):null;B.push(r.vert([p+b[0]*ee,b[1],u+b[0]*te],[C[0]*ee,C[1],C[0]*te],Ke)),W.push(r.vert([p+M[0]*ee,M[1],u+M[0]*te],[D[0]*ee,D[1],D[0]*te],ve))}for(let Q=0;Q<v;Q++)r.tri(B[Q],B[Q+1],W[Q]),r.tri(B[Q+1],W[Q+1],W[Q])}},r}iv.exports={createBuilder:J5,catmull:$0,curve1:Z5,sub:Ea,add:Sa,mul:ua,dot:Tl,cross:ac,norm:Rr,len:Yh}});var fv=pe((VS,lv)=>{"use strict";var{norm:Ll,add:zl,mul:Ba,sub:ew,cross:sv}=Ri(),cv=Math.PI*2,tw=(e,t,o)=>{let n=Math.min(1,Math.max(0,(o-e)/(t-e)));return n*n*(3-2*n)};function ow(e){let t=e>>>0;return()=>{t|=0,t=t+1831565813|0;let o=Math.imul(t^t>>>15,1|t);return o=o+Math.imul(o^o>>>7,61|o)^o,((o^o>>>14)>>>0)/4294967296}}function nw(e,t,o,n,r,a){let i=(h,p)=>[7,h*a,p];e.curMat=[0,0,0],e.box(t-a*1.36,n,o-a*1.36,t+a*1.36,n+.22,o+a*1.36),e.lathe([[a*1.24,n+.22,1],[a*1.3,n+.27],[a*1.31,n+.32],[a*1.26,n+.37,1],[a*1.1,n+.4],[a*1.14,n+.44,1],[a*1.18,n+.47],[a*1.1,n+.52,1],[a*.96,n+.55]],t,o,56,{mat:i});let s=n+.55,c=r-s,f=20,l=6,d=a*.075;return e.surface((h,p)=>{let u=s+h*c,v=a*(.96-.12*h),m=p*cv,g=p*f%1,y=v-d*4*g*(1-g);return[t+y*Math.cos(m),u,o+y*Math.sin(m)]},10,f*l,{wrapV:!0,inside:h=>[t,s+h*c,o],mat:(h,p)=>[7,p*cv*a,s+h*c]}),e.lathe([[a*.8,r-.02,1],[a*.9,r+.02],[a*.9,r+.07,1],[a*.82,r+.09,1],[a*.86,r+.13],[a*1.06,r+.2],[a*1.22,r+.28],[a*1.28,r+.33,1]],t,o,56,{mat:i}),e.curMat=[0,0,0],e.box(t-a*1.42,r+.33,o-a*1.42,t+a*1.42,r+.53,o+a*1.42),r+.53}function rw(e,t,o){e.curMat=[1,0,0],e.lathe([[t*1.1,0,1],[t*1.1,o*.14,1],[t*1.04,o*.14,1],[t*1.04,o*.2],[t*.97,o*.26,1],[t*.95,o*.26,1],[t*.95,o*.8,1],[t*.98,o*.8,1],[t*1.03,o*.86],[t*1.05,o*.92,1],[t*1.05,o,1],[t*.5,o,1],[0,o]],0,0,72)}function aw(e,t,o,n,r){e.save(),e.translate(t,0,o),rw(e,n,r),e.restore()}function iw(e,t,o,n,r,a){let i=ow(n),s=a?Ll([a[0],0,a[1]]):null;e.save(),e.translate(t,0,o),e.scale(r||1),e.curMat=[3,0,0],e.lathe([[.17,0,1],[.2,.02],[.28,.13],[.36,.3],[.395,.47],[.38,.62],[.32,.74],[.29,.8],[.292,.82,1],[.325,.84],[.335,.88,1],[.3,.905,1],[.275,.895,1],[.272,.85]],0,0,48),e.curMat=[5,0,0],e.lathe([[.272,.85,1],[.1,.868],[0,.872]],0,0,24);let c=11,f=.86;for(let l=0;l<c;l++){let d=l>=c-2,h=l*2.399963+i()*.5,p=[Math.cos(h),0,Math.sin(h)],u=[-Math.sin(h),0,Math.cos(h)],v=l*.618%1,m=d?.06+i()*.06:.12+.62*v,g=1;if(s){let re=p[0]*s[0]+p[2]*s[2];g=.25+.75*tw(-.7,.5,re),m*=g}let y=d?1.1+i()*.25:.85+.55*(1-v*.55)+i()*.15,b=d?1+i()*.2:.95+i()*.28,M=d?.055:.215+i()*.05,T=.04+i()*.05,L=[p[0]*T,f,p[2]*T],C=[L[0]+p[0]*Math.sin(m)*y*.92,L[1]+Math.cos(m)*y,L[2]+p[2]*Math.sin(m)*y*.92],D=[L[0]+p[0]*Math.sin(m*.5)*y*.45,L[1]+y*.5,L[2]+p[2]*Math.sin(m*.5)*y*.45];e.curMat=[4,0,0],e.tube([L,D,C],re=>.02-.008*re,8,7);let B=24,W=m*.9+.05,Q=m+(d?.12:(.95+.45*v)*(.35+.65*g)),ce=[C],ee=[],te=C;for(let re=0;re<B;re++){let vt=re/B,xt=W+(Q-W)*vt*vt,$t=[p[0]*Math.sin(xt),Math.cos(xt),p[2]*Math.sin(xt)];ee.push($t),te=zl(te,Ba($t,b/B)),ce.push(te)}ee.push(ee[ee.length-1]);let Ke=re=>{let vt=re*B,xt=Math.min(B-1,Math.floor(vt)),$t=vt-xt;return zl(Ba(ce[xt],1-$t),Ba(ce[xt+1],$t))},ve=re=>{let vt=re*B,xt=Math.min(B,Math.floor(vt)),$t=Math.min(B,xt+1),yt=vt-xt;return Ll(zl(Ba(ee[xt],1-yt),Ba(ee[$t],yt)))},Te=(i()-.5)*.5;e.curMat=[2,0,0],e.surface((re,vt)=>{let xt=vt*2-1,$t=Ke(re),yt=ve(re),Bt=Te*re,Lt=zl(Ba(u,Math.cos(Bt)),Ba(sv(yt,u),Math.sin(Bt)));Lt=Ll(ew(Lt,Ba(yt,Lt[0]*yt[0]+Lt[1]*yt[1]+Lt[2]*yt[2])));let Qt=Ll(sv(Lt,yt)),je=M*Math.pow(Math.sin(Math.PI*Math.pow(re,.72)),.85),Dt=.3*je*Math.abs(xt)+.012*Math.sin(re*40+xt*2)*Math.abs(xt)*(d?0:1),Fe=-.1*je*xt*xt*xt*xt,Qe=Dt+Fe;return[$t[0]+Lt[0]*xt*je+Qt[0]*Qe,$t[1]+Lt[1]*xt*je+Qt[1]*Qe,$t[2]+Lt[2]*xt*je+Qt[2]*Qe]},14,8,{double:!0,mat:(re,vt)=>[2,vt*2-1,re]})}e.restore()}lv.exports={addFlutedColumn:nw,addStatue:aw,addPlant:iw}});var Wa=pe((XS,pv)=>{"use strict";var xe={xc:7,r:2.5,spring:4.7};xe.x0=xe.xc-xe.r;xe.x1=xe.xc+xe.r;xe.top=xe.spring+xe.r;var Qn=.06,Lo=.1,hv=.08,Nl=xe.r,Cl=[xe.x0+Nl/3,xe.x0+2*Nl/3,xe.xc+Nl/3,xe.xc+2*Nl/3],D0=.28,Kh=[.95,1.65,2.35,3.05,3.75],uv=[1.05,1.8],ic=[8,0,0],mr=[0,0,0];function Ir(e,t,o,n,r,a,i,s){e.box(Math.min(t,r),Math.min(o,a),Math.min(n,i),Math.max(t,r),Math.max(o,a),Math.max(n,i),s)}function q0(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),f=e.vert(n,a,i),l=e.vert(r,a,i);e.tri(s,c,f),e.tri(s,f,l)}function Rl(e,t,o,n,r,a,i=48,s=0,c=Math.PI){let f=(l,d,h)=>[xe.xc+d*Math.cos(l),xe.spring+d*Math.sin(l),h];for(let l=0;l<i;l++){let d=s+(c-s)*l/i,h=s+(c-s)*(l+1)/i,p=(d+h)/2;q0(e,f(d,t,r),f(h,t,r),f(h,o,r),f(d,o,r),[0,0,1],a),q0(e,f(d,o,n),f(h,o,n),f(h,t,n),f(d,t,n),[0,0,-1],a),q0(e,f(d,t,n),f(h,t,n),f(h,t,r),f(d,t,r),[-Math.cos(p),-Math.sin(p),0],a),q0(e,f(h,o,n),f(d,o,n),f(d,o,r),f(h,o,r),[Math.cos(p),Math.sin(p),0],a)}}function sw(e){let n=a=>[xe.xc+xe.r*Math.cos(a),xe.spring+xe.r*Math.sin(a)],r=a=>{let i=Math.cos(a),s=Math.sin(a),c=Math.abs(i)>1e-6?xe.r/Math.abs(i):1/0,f=s>1e-6?(8-xe.spring)/s:1/0,l=Math.min(c,f);return[Math.min(xe.x1,Math.max(xe.x0,xe.xc+i*l)),Math.min(8,xe.spring+s*l)]};for(let a=0;a<48;a++){let i=Math.PI*a/48,s=Math.PI*(a+1)/48,c=n(i),f=n(s),l=r(i),d=r(s);for(let[p,u]of[[.35,1],[-.35,-1]])q0(e,[c[0],c[1],p],[f[0],f[1],p],[d[0],d[1],p],[l[0],l[1],p],[0,0,u],mr);let h=(i+s)/2;q0(e,[c[0],c[1],-.35],[f[0],f[1],-.35],[f[0],f[1],.35],[c[0],c[1],.35],[-Math.cos(h),-Math.sin(h),0],mr)}}function cw(e){Ir(e,-.35,0,-.35,xe.x0,8,.35,mr),Ir(e,xe.x1,0,-.35,14+.35,8,.35,mr),sw(e),dv(e)}function dv(e){Ir(e,xe.x0-.32,.3,.35,xe.x0,xe.spring,.35+.07,mr),Ir(e,xe.x1,.3,.35,xe.x1+.32,xe.spring,.35+.07,mr),Ir(e,xe.x0-.32-.05,0,.35,xe.x0,.3,.35+.07+.04,mr),Ir(e,xe.x1,0,.35,xe.x1+.32+.05,.3,.35+.07+.04,mr),Ir(e,xe.x0-.32-.06,xe.spring-.12,.35,xe.x0,xe.spring,.35+.07+.05,mr),Ir(e,xe.x1,xe.spring-.12,.35,xe.x1+.32+.06,xe.spring,.35+.07+.05,mr),Rl(e,xe.r,xe.r+.32,.35,.35+.07,mr),Rl(e,xe.r+.32,xe.r+.32+.06,.35,.35+.07+.03,mr),Ir(e,xe.xc-.22,xe.top-.08,.35,xe.xc+.22,xe.top+.32+.12,.35+.07+.06,mr)}function lw(e,t){t=t||"all";let o=t==="all",n=o||t==="fixed",r=-hv/2,a=hv/2,i=(h,p,u,v,m=0)=>Ir(e,h-m,p,r,u+m,v,a,ic),s=h=>xe.spring+Math.sqrt(Math.max(0,xe.r*xe.r-(h-xe.xc)*(h-xe.xc))),c=t==="right"?xe.xc:xe.x0,f=t==="left"?xe.xc:xe.x1,l=h=>o||t==="left"&&h<xe.xc||t==="right"&&h>xe.xc,d=o?null:xe.spring-.06;if(n){i(xe.x0,0,xe.x0+Lo,xe.spring),i(xe.x1-Lo,0,xe.x1,xe.spring),Rl(e,xe.r-Lo,xe.r,r,a,ic,64),i(xe.x0,0,xe.x1,.05),i(xe.x0,xe.spring-.06,xe.x1,xe.spring+.06);for(let h of uv)Rl(e,h-Qn/2,h+Qn/2,r,a,ic,48)}if(o){i(xe.x0,0,xe.x1,D0),i(xe.xc-Lo/2,0,xe.xc+Lo/2,xe.top-Lo*.5);for(let h of Cl)i(h-Qn/2,D0,h+Qn/2,s(h)-Lo*.5);for(let h of Kh)i(xe.x0,h-Qn/2,xe.x1,h+Qn/2)}else if(t==="fixed"){i(xe.xc-Lo/2,xe.spring+.06,xe.xc+Lo/2,xe.top-Lo*.5);for(let h of Cl)i(h-Qn/2,xe.spring+.06,h+Qn/2,s(h)-Lo*.5)}else{let h=t==="left"?xe.x0+Lo:xe.x1-Lo;i(Math.min(h,h+(t==="left"?Lo*.8:-Lo*.8)),.05,Math.max(h,h+(t==="left"?Lo*.8:-Lo*.8)),d),i(c,.05,f,D0),i(c,d-.07,f,d);let p=t==="left"?xe.xc-Lo/2:xe.xc;i(p,.05,p+Lo/2,d);for(let u of Cl)l(u)&&i(u-Qn/2,D0,u+Qn/2,d-.07);for(let u of Kh)i(c,u-Qn/2,f,u+Qn/2)}for(let h of[-1,1]){let p=xe.xc+h*.16;l(p)&&(Ir(e,p-.02,1.05,a,p+.02,1.13,a+.06,ic),Ir(e,p-(h>0?0:.14),1.07,a+.05,p+(h>0?.14:0),1.11,a+.08,ic))}}function fw(e){e=e||"all";let t=[],o=0,{x0:n,x1:r,xc:a,r:i,spring:s}=xe;if(e!=="fixed"){let f=e==="right"?a:n,l=e==="left"?a:r;if(t.push([f,0,o],[l,0,o],[l,s,o],[f,0,o],[l,s,o],[f,s,o]),e!=="all")return t}let c=48;for(let f=0;f<c;f++){let l=Math.PI*f/c,d=Math.PI*(f+1)/c;t.push([a,s,o],[a+i*Math.cos(l),s+i*Math.sin(l),o],[a+i*Math.cos(d),s+i*Math.sin(d),o])}return t}var po=e=>e.toFixed(4);function hw(){let e=Cl.map(n=>`vb = max(vb, barCover(abs(q.x - ${po(n)}), ${po(Qn/2)}, soft));`).join(`
		`),t=Kh.map(n=>`hb = max(hb, barCover(abs(q.y - ${po(n)}), ${po(Qn/2)}, soft));`).join(`
		`),o=uv.map(n=>`ab = max(ab, barCover(abs(rr - ${po(n)}), ${po(Qn/2)}, soft));`).join(`
		`);return`
	float barCover(float d, float hw, float soft) {
		return 1.0 - smoothstep(hw - soft, hw + soft, d);
	}

	// how open the doorway is at a point (x, y) on a plane, 0..1
	float doorOpen(vec2 q, float soft) {
		float side = smoothstep(${po(xe.x0)} - soft, ${po(xe.x0)} + soft, q.x)
		           * (1.0 - smoothstep(${po(xe.x1)} - soft, ${po(xe.x1)} + soft, q.x));
		float above = smoothstep(-soft, soft, q.y);
		float rr = length(q - vec2(${po(xe.xc)}, ${po(xe.spring)}));
		float arch = q.y < ${po(xe.spring)} ? 1.0 : 1.0 - smoothstep(${po(xe.r)} - soft, ${po(xe.r)} + soft, rr);
		return side * above * arch;
	}

	// light that reaches floor point p through the door, 0..1
	float doorLight(vec3 p, vec3 toLight) {
		if (p.z < 0.3 || toLight.z > -0.01) return 0.0;
		// through the inner face of the wall
		float tIn = (${po(.35)} - p.z) / toLight.z;
		float tMid = (0.0 - p.z) / toLight.z;
		float tOut = (${po(-.35)} - p.z) / toLight.z;
		vec2 qIn = (p + toLight * tIn).xy;
		vec2 q = (p + toLight * tMid).xy;
		vec2 qOut = (p + toLight * tOut).xy;
		float dist = length(toLight * tMid);
		float soft = 0.006 + 0.016 * dist;
		float open = doorOpen(qIn, soft) * doorOpen(qOut, soft);
		if (open <= 0.0) return 0.0;

		// the frame: outer jambs, arched head, transom, rails, stiles, bars
		float rr = length(q - vec2(${po(xe.xc)}, ${po(xe.spring)}));
		float vb = barCover(abs(q.x - ${po(xe.xc)}), ${po(Lo/2)}, soft);
		${e}
		float hb = barCover(abs(q.y - ${po(xe.spring)}), 0.06, soft);
		hb = max(hb, 1.0 - smoothstep(${po(D0)} - soft, ${po(D0)} + soft, q.y));
		float hRows = 0.0;
		{
			float hb2 = 0.0;
			${t.replace(/hb = max\(hb,/g,"hb2 = max(hb2,")}
			hRows = q.y < ${po(xe.spring)} ? hb2 : 0.0;
		}
		float ab = 0.0;
		${o}
		ab = q.y > ${po(xe.spring)} ? ab : 0.0;
		float frame = max(
			barCover(abs(q.x - ${po(xe.x0+Lo/2)}), ${po(Lo/2)}, soft),
			barCover(abs(q.x - ${po(xe.x1-Lo/2)}), ${po(Lo/2)}, soft));
		frame = q.y < ${po(xe.spring)} ? frame : barCover(abs(rr - ${po(xe.r-Lo/2)}), ${po(Lo/2)}, soft);
		float cover = max(max(max(vb, hb), max(hRows, ab)), frame);
		return open * (1.0 - cover * 0.92);
	}`}pv.exports={addEntranceWall:cw,addSurround:dv,addFrames:lw,glassPanes:fw,doorLightGLSL:hw,DOOR:xe,WALL:.35}});var j0=pe((YS,bv)=>{"use strict";var Pi=1.1583333333333334,Oi=(13.05-8*.16)/9,Zh=Pi+.16,Jh=Oi+.16,ka=14/2-7.75/2,gr=15,sc=ka+7.75,Aa=gr+13.05,xr=.3,Ta={y:8+.18,inset:.15},Ii={y:8+.36,inset:xr},eu=8+.2,cc=8+.62,tu=8+.9,ou=.016,xv=.28,yv=.66,uw=(()=>{let e=[-.15,1,.3],t=Math.hypot(e[0],e[1],e[2]);return e.map(o=>o/t)})(),dw=(()=>{let e=[.42,1,-.32],t=Math.hypot(e[0],e[1],e[2]);return e.map(o=>o/t)})(),pw=[9,0,0],Ln=[10,0,0];function H0(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),f=e.vert(n,a,i),l=e.vert(r,a,i);e.tri(s,c,f),e.tri(s,f,l)}function Zn(e,t,o,n,r,a,i){H0(e,[t,a,o],[n,a,o],[n,a,r],[t,a,r],[0,-1,0],i)}function Qh(e,t,o,n,r,a,i,s){H0(e,[t,a,o],[n,a,o],[n,i,o],[t,i,o],[0,0,1],s),H0(e,[n,a,r],[t,a,r],[t,i,r],[n,i,r],[0,0,-1],s),H0(e,[t,a,r],[t,a,o],[t,i,o],[t,i,r],[1,0,0],s),H0(e,[n,a,o],[n,a,r],[n,i,r],[n,i,o],[-1,0,0],s)}function vv(e,t,o,n,r){Zn(e,t[0],t[1],t[2],o[1],n,r),Zn(e,t[0],o[3],t[2],t[3],n,r),Zn(e,t[0],o[1],o[0],o[3],n,r),Zn(e,o[2],o[1],t[2],o[3],n,r)}var mv=e=>ka+e*Zh,gv=e=>gr+e*Jh;function vw(e,t,o=48){let n=[ka-xr,gr-xr,sc+xr,Aa+xr],r=(f,l)=>[f[0]+l,f[1]+l,f[2]-l,f[3]-l],a=r(n,Ta.inset),i=r(n,Ii.inset);Zn(e,0,0,14,n[1],8,t),Zn(e,0,n[3],14,o,8,t),Zn(e,0,n[1],n[0],n[3],8,t),Zn(e,n[2],n[1],14,n[3],8,t);let s=.06,c=.06;e.box(n[0]-s,8-c,n[1]-s,n[2]+s,8,n[1],Ln),e.box(n[0]-s,8-c,n[3],n[2]+s,8,n[3]+s,Ln),e.box(n[0]-s,8-c,n[1],n[0],8,n[3],Ln),e.box(n[2],8-c,n[1],n[2]+s,8,n[3],Ln),Qh(e,...n.slice(0,2),...n.slice(2),8,Ta.y,Ln),vv(e,n,a,Ta.y,Ln),Qh(e,...a.slice(0,2),...a.slice(2),Ta.y,Ii.y,Ln),vv(e,a,i,Ii.y,Ln);for(let f=1;f<6;f++){let l=mv(f)-.16;e.box(l,eu,gr,l+.16,Ii.y,Aa,Ln)}for(let f=1;f<9;f++){let l=gv(f)-.16;e.box(ka,eu,l,sc,Ii.y,l+.16,Ln)}for(let f=0;f<9;f++)for(let l=0;l<6;l++){let d=mv(l),h=gv(f);Qh(e,d,h,d+Pi,h+Oi,Ii.y,tu,Ln),Zn(e,d,h,d+Pi,h+Oi,tu,pw),mw(e,d+Pi/2,h+Oi/2,Pi/2,Oi/2)}}function mw(e,t,o,n,r){let a=cc,i=ou;Zn(e,t-n,o-i,t+n,o+i,a,Ln),Zn(e,t-i,o-r,t+i,o+r,a,Ln);for(let s of[1,-1]){let c=Math.hypot(n,r),f=n/c,l=s*r/c,d=-l*i,h=f*i;H0(e,[t-f*c+d,a,o-l*c+h],[t+f*c+d,a,o+l*c+h],[t+f*c-d,a,o+l*c-h],[t-f*c-d,a,o-l*c-h],[0,-1,0],Ln)}for(let s of[xv,yv]){let c=s*n,f=s*r;Zn(e,t-c-i,o-f-i,t+c+i,o-f+i,a,Ln),Zn(e,t-c-i,o+f-i,t+c+i,o+f+i,a,Ln),Zn(e,t-c-i,o-f+i,t-c+i,o+f-i,a,Ln),Zn(e,t+c-i,o-f+i,t+c+i,o+f-i,a,Ln)}}var wt=e=>e.toFixed(4);function gw(){return`
	// by day the sun, high and a little towards the entrance; by night
	// the moon, lower and from the other side, so its squares of light
	// reach across the floor to the foot of the wall. (When the light is
	// switched, the squares slide from one to the other.)
	const vec3 SKY_SUN_DAY = vec3(${uw.map(wt).join(", ")});
	const vec3 SKY_MOON = vec3(${dw.map(wt).join(", ")});
	vec3 skySun() { return normalize(mix(SKY_SUN_DAY, SKY_MOON, night)); }
	#define SKY_SUN skySun()

	float rectOpen(vec2 q, vec4 r, float soft) {
		vec2 lo = smoothstep(r.xy - soft, r.xy + soft, q);
		vec2 hi = 1.0 - smoothstep(r.zw - soft, r.zw + soft, q);
		return lo.x * lo.y * hi.x * hi.y;
	}

	// inside a pane (not on a beam)? 0..1
	float paneOpen(vec2 q, float soft) {
		vec2 rel = q - vec2(${wt(ka)}, ${wt(gr)});
		vec2 pitch = vec2(${wt(Zh)}, ${wt(Jh)});
		vec2 cell = floor(rel / pitch);
		if (cell.x < 0.0 || cell.y < 0.0 || cell.x > ${wt(5)} || cell.y > ${wt(8)}) return 0.0;
		vec2 loc = rel - cell * pitch;
		return rectOpen(loc, vec4(0.0, 0.0, ${wt(Pi)}, ${wt(Oi)}), soft);
	}

	float barCov(float d, float soft) {
		return 1.0 - smoothstep(${wt(ou)} - soft, ${wt(ou)} + soft, d);
	}

	// sunlight reaching point p through the skylight, 0..1
	float skylightAt(vec3 p) {
		if (p.y > ${wt(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q0 = (p + L * ((${wt(8)} - p.y) / L.y)).xz;
		vec2 q1 = (p + L * ((${wt(Ta.y)} - p.y) / L.y)).xz;
		vec2 qb = (p + L * ((${wt(eu)} - p.y) / L.y)).xz;
		vec2 q2 = (p + L * ((${wt(Ii.y)} - p.y) / L.y)).xz;
		float tG = (${wt(cc)} - p.y) / L.y;
		vec2 qg = (p + L * tG).xz;
		vec2 qt = (p + L * ((${wt(tu)} - p.y) / L.y)).xz;
		float soft = 0.004 + 0.007 * tG;
		float open = rectOpen(q0, vec4(${wt(ka-xr)}, ${wt(gr-xr)}, ${wt(sc+xr)}, ${wt(Aa+xr)}), soft)
		           * rectOpen(q1, vec4(${wt(ka-xr+Ta.inset)}, ${wt(gr-xr+Ta.inset)}, ${wt(sc+xr-Ta.inset)}, ${wt(Aa+xr-Ta.inset)}), soft)
		           * paneOpen(qb, soft) * paneOpen(q2, soft) * paneOpen(qt, soft);
		if (open <= 0.0) return 0.0;
		// the glazing, measured from the centre of this pane
		vec2 rel = qg - vec2(${wt(ka)}, ${wt(gr)});
		vec2 pitch = vec2(${wt(Zh)}, ${wt(Jh)});
		vec2 paneHalf = vec2(${wt(Pi/2)}, ${wt(Oi/2)});
		vec2 c = rel - floor(rel / pitch) * pitch - paneHalf;
		vec2 ac = abs(c);
		vec2 an = ac / paneHalf;                       // 0 at the centre, 1 at the pane's edge
		float hm = min(paneHalf.x, paneHalf.y);
		float ring = max(an.x, an.y);
		float cover = max(barCov(ac.x, soft), barCov(ac.y, soft));
		cover = max(cover, barCov(abs(an.x - an.y) * hm * 0.7071, soft));
		cover = max(cover, barCov(abs(ring - ${wt(xv)}) * hm, soft));
		cover = max(cover, barCov(abs(ring - ${wt(yv)}) * hm, soft));
		return open * (1.0 - cover * 0.9);
	}

	// the same light for the beams in the air: the whole opening glows a
	// little, and the panes and bars show in it, softly
	float skylightVol(vec3 p) {
		if (p.y > ${wt(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q = (p + L * ((${wt(cc)} - p.y) / L.y)).xz;
		float open = rectOpen(q, vec4(${wt(ka)}, ${wt(gr)}, ${wt(sc)}, ${wt(Aa)}), 0.25);
		if (open <= 0.0) return 0.0;
		return open * (0.13 + 0.87 * skylightAt(p));
	}

	// light thrown back up by the bright squares on the floor: strongest
	// on what stands beside them and faces them (the lower walls, the
	// pillars, the statues, the ceiling above), fading with distance
	float skylightBounce(vec3 p, vec3 n) {
		if (p.x > 14.2 || p.x < -0.4) return 0.0;
		vec3 L = SKY_SUN;
		vec2 c = vec2(${wt(14/2)}, ${wt((gr+Aa)/2)}) - L.xz * (${wt(cc)} / L.y);
		vec2 d = max(abs(p.xz - c) - vec2(${wt(7.75/2)}, ${wt(13.05/2)}), 0.0);
		float fall = 1.0 / (1.0 + 0.09 * (dot(d, d) + p.y * p.y * 0.6));
		vec3 to = normalize(vec3(c.x, -0.4, c.y) - p);
		return fall * (0.3 + 0.7 * max(dot(n, to), 0.0));
	}

	// a soft daylight glow under the lantern
	float skylightGlow(vec3 p) {
		float z = smoothstep(${wt(gr-3)}, ${wt(gr+2)}, p.z)
		        * (1.0 - smoothstep(${wt(Aa-2)}, ${wt(Aa+3)}, p.z));
		float x = 1.0 - 0.35 * smoothstep(${wt(7.75/2)}, ${wt(14/2)}, abs(p.x - ${wt(14/2)}));
		return z * x;
	}`}bv.exports={addSkylight:vw,skylightGLSL:gw,Z_START:gr,Z_END:Aa,GLASS_Y:cc,HEIGHT:8}});var On=pe((KS,Sv)=>{"use strict";var B0=Wa(),iu=8,zo=.35,Pe={x0:13.65,x1:38.12,z0:41,z1:47.2,zc:44.1,hallEnd:50.65,spring:5.6,crown:iu},wv=(Pe.z1-Pe.z0)/2,nu=Pe.crown-Pe.spring,au=(nu*nu+wv*wv)/(2*nu),su=Pe.crown-au;function U0(e){let t=e-Pe.zc;return su+Math.sqrt(Math.max(0,au*au-t*t))}var ht={first:17.43,pitch:4.4,count:5,halfW:1.2,sill:.75,spring:4.3},Qr=Array.from({length:ht.count},(e,t)=>ht.first+t*ht.pitch),Mv=Qr.slice(1).map(e=>e-ht.pitch/2),xw=[Qr[0],Qr[2],Qr[4]],Pl=[Qr[1],Qr[3]],cr={r:1.3,sill:.62,spring:3.3},mo=[0,0,0],lc=[11,0,0],Va=[10,0,0],fc=[8,0,0];function gn(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),f=e.vert(n,a,i),l=e.vert(r,a,i);e.tri(s,c,f),e.tri(s,f,l)}function lr(e,t,o,n,r,a,i,s){e.box(Math.min(t,r),Math.min(o,a),Math.min(n,i),Math.max(t,r),Math.max(o,a),Math.max(n,i),s)}function hc(e,t){let{u0:o,u1:n,w0:r,w1:a,top:i,holes:s,mat:c}=t,f=new Set([o,n]);for(let v of s){f.add(v.u0),f.add(v.u1);let m=Math.max(8,Math.ceil((v.u1-v.u0)/(v.step||.08)));for(let g=1;g<m;g++)f.add(v.u0+(v.u1-v.u0)*g/m)}for(let v of t.cuts||[])f.add(v);let l=t.topStep||.5;for(let v=o;v<n;v+=l)f.add(v);let d=[...f].filter(v=>v>=o-1e-9&&v<=n+1e-9).sort((v,m)=>v-m),h=(v,m)=>v.bot?v.bot(m):v.bottom,p=(v,m)=>{let g=i(v),y=m.map(T=>[Math.max(0,h(T,v)),Math.min(T.head(v),g)]).filter(T=>T[1]>T[0]).sort((T,L)=>T[0]-L[0]),b=[],M=0;for(let T of y)T[0]>M+1e-6&&b.push([M,T[0]]),M=Math.max(M,T[1]);return g>M+1e-6&&b.push([M,g]),b},u=(v,m,g)=>[v,m,g];for(let v=0;v<d.length-1;v++){let m=d[v],g=d[v+1],y=(m+g)/2,b=s.filter(B=>y>B.u0&&y<B.u1),M=b.length?Math.max(m,Math.max(...b.map(B=>B.u0))+1e-7):m,T=b.length?Math.min(g,Math.min(...b.map(B=>B.u1))-1e-7):g,L=p(M,b),C=p(T,b),D=Math.min(L.length,C.length);for(let B=0;B<D;B++){let[W,Q]=L[B],[ce,ee]=C[B];Q-W<1e-6&&ee-ce<1e-6||(gn(e,u(m,W,a),u(g,ce,a),u(g,ee,a),u(m,Q,a),[0,0,1],c),t.frontOnly||gn(e,u(g,ce,r),u(m,W,r),u(m,Q,r),u(g,ee,r),[0,0,-1],c))}}t.noEnds||(gn(e,u(o,0,r),u(o,0,a),u(o,i(o),a),u(o,i(o),r),[-1,0,0],c),gn(e,u(n,0,a),u(n,0,r),u(n,i(n),r),u(n,i(n),a),[1,0,0],c));for(let v of s){if(v.noReveal)continue;let m=v.mat||t.revealMat||c,g=Math.max(0,h(v,v.u0+1e-7)),y=Math.max(0,h(v,v.u1-1e-7)),b=Math.min(v.head(v.u0+1e-7),i(v.u0)),M=Math.min(v.head(v.u1-1e-7),i(v.u1));b>g+1e-6&&gn(e,u(v.u0,g,a),u(v.u0,g,r),u(v.u0,b,r),u(v.u0,b,a),[1,0,0],m),M>y+1e-6&&gn(e,u(v.u1,y,r),u(v.u1,y,a),u(v.u1,M,a),u(v.u1,M,r),[-1,0,0],m);let T=Math.max(8,Math.ceil((v.u1-v.u0)/(v.step||.06)));for(let L=0;L<T;L++){let C=v.u0+(v.u1-v.u0)*L/T,D=v.u0+(v.u1-v.u0)*(L+1)/T,B=Math.max(C,v.u0+1e-7),W=Math.min(D,v.u1-1e-7),Q=Math.min(v.head(B),i(C)),ce=Math.min(v.head(W),i(D));if(!(Q>=i(C)-1e-6&&ce>=i(D)-1e-6)){let Ke=D-C,ve=ce-Q,Te=Math.hypot(Ke,ve)||1;gn(e,u(C,Q,r),u(D,ce,r),u(D,ce,a),u(C,Q,a),[ve/Te,-Ke/Te,0],m)}let ee=h(v,B),te=h(v,W);if(ee>1e-6||te>1e-6){let Ke=D-C,ve=te-ee,Te=Math.hypot(Ke,ve)||1;gn(e,u(D,te,r),u(C,ee,r),u(C,ee,a),u(D,te,a),[-ve/Te,Ke/Te,0],m)}}}}var ru=(e,t,o)=>n=>{let r=n-e;return o+Math.sqrt(Math.max(0,t*t-r*r))};function yw(e,t){let o=cr.r,n=cr.sill,r=cr.spring,a=Pe.z0,i=24,s=(p,u,v)=>[t+Math.cos(p)*u,v,a-Math.sin(p)*u];for(let p=0;p<i;p++){let u=Math.PI*p/i,v=Math.PI*(p+1)/i,m=[-Math.cos(u),0,Math.sin(u)],g=[-Math.cos(v),0,Math.sin(v)],y=[e.vert(s(u,o,n),m,mo),e.vert(s(v,o,n),g,mo),e.vert(s(v,o,r),g,mo),e.vert(s(u,o,r),m,mo)];e.tri(y[0],y[1],y[2]),e.tri(y[0],y[2],y[3])}let c=12,f=(p,u)=>[t+Math.cos(p)*Math.cos(u)*o,r+Math.sin(u)*o,a-Math.sin(p)*Math.cos(u)*o],l=(p,u)=>[-Math.cos(p)*Math.cos(u),-Math.sin(u),Math.sin(p)*Math.cos(u)];for(let p=0;p<i;p++)for(let u=0;u<c;u++){let v=Math.PI*p/i,m=Math.PI*(p+1)/i,g=Math.PI/2*u/c,y=Math.PI/2*(u+1)/c,b=[e.vert(f(v,g),l(v,g),Va),e.vert(f(m,g),l(m,g),Va),e.vert(f(m,y),l(m,y),Va),e.vert(f(v,y),l(v,y),Va)];e.tri(b[0],b[1],b[2]),e.tri(b[0],b[2],b[3])}for(let p=1;p<8;p++){let u=Math.PI*p/8,v=[];for(let m=0;m<=10;m++){let g=Math.PI/2*m/10*.97;v.push(f(u,g).map((y,b)=>y-l(u,g)[b]*.02))}e.tube(v,m=>.035*(1-m*.6),12,6,{mat:()=>Va})}let d=e.vert([t,n,a],[0,1,0],mo);for(let p=0;p<i;p++){let u=Math.PI*p/i,v=Math.PI*(p+1)/i;e.tri(d,e.vert(s(u,o,n),[0,1,0],mo),e.vert(s(v,o,n),[0,1,0],mo))}lr(e,t-o-.12,n-.1,a,t+o+.12,n+.02,a+.12,mo),lr(e,t-o-.16,n-.2,a,t+o+.16,n-.1,a+.07,mo);let h=.16;for(let p=0;p<i;p++){let u=Math.PI*p/i,v=Math.PI*(p+1)/i,m=(g,y,b)=>[t+Math.cos(g)*y,r+Math.sin(g)*y,b];gn(e,m(u,o,a+.05),m(v,o,a+.05),m(v,o+h,a+.05),m(u,o+h,a+.05),[0,0,1],mo),gn(e,m(u,o+h,a),m(v,o+h,a),m(v,o+h,a+.05),m(u,o+h,a+.05),[Math.cos((u+v)/2),Math.sin((u+v)/2),0],mo),gn(e,m(u,o,a),m(v,o,a),m(v,o,a+.05),m(u,o,a+.05),[-Math.cos((u+v)/2),-Math.sin((u+v)/2),0],mo)}for(let p of[-1,1]){let u=t+p*o,v=t+p*(o+h);lr(e,u,n,a,v,r,a+.05,mo),lr(e,u-p*.02,r-.12,a,v+p*.06,r,a+.09,mo)}lr(e,t-.11,r+o-.04,a,t+.11,r+o+h+.1,a+.09,mo),e.lathe([[.66,n,1],[.66,n+.06,1],[.62,n+.1],[.6,n+.3],[.64,n+.34,1],[.64,n+.4,1],[0,n+.4]],t,a-.62,40,{mat:()=>mo})}var bw=cr.sill+.4,ww=Pe.z0-.62;function _w(e){gn(e,[14,0,Pe.z0-zo],[Pe.x1+zo,0,Pe.z0-zo],[Pe.x1+zo,0,Pe.z1+zo],[14,0,Pe.z1+zo],[0,1,0],mo),e.curMat=lc,hc(e,{u0:14+zo,u1:Pe.x1+2*zo,w0:Pe.z0-2*zo,w1:Pe.z0,top:()=>Pe.spring,holes:Pl.map(f=>({u0:f-cr.r,u1:f+cr.r,bottom:cr.sill,head:ru(f,cr.r,cr.spring),noReveal:!0})),mat:lc,cuts:[Pe.x1]});for(let f of Pl)yw(e,f);e.save(),e.translate(0,0,Pe.z1),e.rotateY(Math.PI),e.translate(-(Pe.x1+2*zo),0,-2*zo);let t=f=>Pe.x1+2*zo-f;hc(e,{u0:t(Pe.x1+2*zo),u1:t(13.65),w0:0,w1:2*zo,top:()=>Pe.spring,holes:Qr.map(f=>({u0:t(f+ht.halfW),u1:t(f-ht.halfW),bottom:ht.sill,head:ru(t(f),ht.halfW,ht.spring)})),mat:lc,revealMat:mo}),e.restore(),e.save(),e.translate(Pe.x1,0,0),e.rotateY(-Math.PI/2);let o=B0.DOOR,n=Pe.zc,r=o.r;hc(e,{u0:Pe.z0-2*zo,u1:Pe.z1+2*zo,w0:-2*zo,w1:0,top:f=>f<Pe.z0||f>Pe.z1?Pe.spring:U0(f),topStep:.15,holes:[{u0:n-r,u1:n+r,bottom:0,head:ru(n,r,o.spring)}],mat:lc,revealMat:mo}),e.restore(),e.save(),e.translate(14+zo,0,0),e.rotateY(-Math.PI/2),hc(e,{u0:Pe.z0,u1:Pe.z1,w0:-0,w1:2*zo,top:()=>iu,topStep:.15,holes:[{u0:Pe.z0,u1:Pe.z1,bottom:0,head:f=>U0(f)}],mat:lc,revealMat:mo}),e.restore();let a=14+zo,i=Math.ceil((Pe.x1-a)/1),s=28,c=[];for(let f=0;f<=i;f++){let l=a+(Pe.x1-a)*f/i,d=[];for(let h=0;h<=s;h++){let p=Pe.z0+(Pe.z1-Pe.z0)*h/s,u=U0(p),v=[0,su-u,Pe.zc-p],m=Math.hypot(v[1],v[2]);d.push(e.vert([l,u,p],[0,v[1]/m,v[2]/m],Va))}c.push(d)}for(let f=0;f<i;f++)for(let l=0;l<s;l++)e.tri(c[f][l],c[f+1][l],c[f][l+1]),e.tri(c[f+1][l],c[f+1][l+1],c[f][l+1])}function _v(e,t,o,n){let a=[];for(let i=0;i<=32;i++){let s=Pe.z0+(Pe.z1-Pe.z0)*i/32,c=U0(s),f=su-c,l=Pe.zc-s,d=Math.hypot(f,l),h=[c+f/d*n,s+l/d*n];a.push({y:c,z:s,iy:h[0],iz:h[1],n:[0,f/d,l/d]})}for(let i=0;i<32;i++){let s=a[i],c=a[i+1];gn(e,[t-o,s.iy,s.iz],[t+o,s.iy,s.iz],[t+o,c.iy,c.iz],[t-o,c.iy,c.iz],s.n,mo),gn(e,[t-o,s.y,s.z],[t-o,s.iy,s.iz],[t-o,c.iy,c.iz],[t-o,c.y,c.z],[-1,0,0],mo),gn(e,[t+o,s.iy,s.iz],[t+o,s.y,s.z],[t+o,c.y,c.z],[t+o,c.iy,c.iz],[1,0,0],mo)}}function Il(e,t,o,n){let i=o,s=o+n*.16;lr(e,t-.28,0,i,t+.28,Pe.spring-.3,s,mo),lr(e,t-.28-.06,0,i,t+.28+.06,.32,o+n*(.16+.05),mo),lr(e,t-.28-.05,Pe.spring-.3,i,t+.28+.05,Pe.spring-.1,o+n*(.16+.05),mo),lr(e,t-.28-.1,Pe.spring-.1,i,t+.28+.1,Pe.spring,o+n*(.16+.1),mo)}function Mw(e,t){let o=U0(Pe.zc),n=[[0,o-.13,1],[.05,o-.125],[.12,o-.1],[.16,o-.06,1],[.22,o-.05],[.3,o-.075],[.4,o-.06],[.48,o-.03,1],[.55,o-.035],[.7,o-.025],[.82,o-.012,1],[.95,o+.03]];e.lathe(n,t,Pe.zc,48,{mat:()=>Va});for(let r=0;r<8;r++){let a=r*Math.PI/4,i=t+Math.cos(a)*.32,s=Pe.zc+Math.sin(a)*.32;e.save(),e.translate(i,o-.07,s),e.rotateY(-a),e.curMat=Va,e.ellipsoid([0,0,0],[.13,.03,.06],6,10),e.restore()}}function Ew(e){e.curMat=mo;for(let[t,o]of[[Pe.z0,1],[Pe.z1,-1]])lr(e,14.35,Pe.spring-.12,t,Pe.x1,Pe.spring,t+o*.1,mo),lr(e,14.35,Pe.spring-.04,t,Pe.x1,Pe.spring+.05,t+o*.18,mo);for(let[t,o]of[[Pe.z0,1],[Pe.z1,-1]])lr(e,14.35,0,t,Pe.x1,.42,t+o*.12,mo),lr(e,14.35,.42,t,Pe.x1,.5,t+o*.07,mo);for(let t of Mv)_v(e,t,.24,.16),Il(e,t,Pe.z0,1),Il(e,t,Pe.z1,-1);for(let t of[14.35+.28,Pe.x1-.28])_v(e,t,.28,.22),Il(e,t,Pe.z0,1),Il(e,t,Pe.z1,-1);for(let t of Qr)Mw(e,t)}function Sw(e){let t=Pe.z1+zo,o=t-.04,n=t+.04,r=(s,c,f,l)=>lr(e,s,c,o,f,l,n,fc),a=ht.halfW,i=(s,c,f,l,d,h)=>{let p=(u,v,m)=>[s+v*Math.cos(u),ht.spring+v*Math.sin(u),m];for(let u=0;u<h;u++){let v=l+(d-l)*u/h,m=l+(d-l)*(u+1)/h;gn(e,p(v,c,o),p(m,c,o),p(m,f,o),p(v,f,o),[0,0,-1],fc),gn(e,p(v,f,n),p(m,f,n),p(m,c,n),p(v,c,n),[0,0,1],fc)}};for(let s of Qr){let c=s-a,f=s+a;r(c,ht.sill,c+.07,ht.spring),r(f-.07,ht.sill,f,ht.spring),r(c,ht.sill,f,ht.sill+.07),r(c,ht.spring-.04,f,ht.spring+.04);for(let d of[-.5,0,.5])r(s+d*a-.022,ht.sill,s+d*a+.022,ht.spring);let l=6;for(let d=1;d<l;d++){let h=ht.sill+(ht.spring-ht.sill)*d/l;r(c,h-.02,f,h+.02)}i(s,a-.07,a,0,Math.PI,32),i(s,.42,.46,0,Math.PI,20);for(let d=1;d<6;d++){let h=Math.PI*d/6,p=Math.cos(h),u=Math.sin(h),v=.02,m=(g,y)=>[s+p*g-u*v*y,ht.spring+u*g+p*v*y];gn(e,[...m(.44,-1),o],[...m(a-.05,-1),o],[...m(a-.05,1),o],[...m(.44,1),o],[0,0,-1],fc),gn(e,[...m(.44,1),n],[...m(a-.05,1),n],[...m(a-.05,-1),n],[...m(.44,-1),n],[0,0,1],fc)}}}function Aw(){let e=[],t=Pe.z1+zo;for(let o of Qr){let n=o-ht.halfW,r=o+ht.halfW;e.push([n,ht.sill,t],[r,ht.sill,t],[r,ht.spring,t],[n,ht.sill,t],[r,ht.spring,t],[n,ht.spring,t]);for(let a=0;a<24;a++){let i=Math.PI*a/24,s=Math.PI*(a+1)/24;e.push([o,ht.spring,t],[o+ht.halfW*Math.cos(i),ht.spring+ht.halfW*Math.sin(i),t],[o+ht.halfW*Math.cos(s),ht.spring+ht.halfW*Math.sin(s),t])}}return e}function Ev(e,t){e.save(),e.translate(Pe.x1+zo,0,Pe.zc-7),e.rotateY(-Math.PI/2),t(),e.restore()}function kw(e){Ev(e,()=>{B0.addSurround(e),B0.addFrames(e,"fixed")})}function Tw(e){return B0.glassPanes(e||"fixed").map(([o,n,r])=>[Pe.x1+zo-r,n,Pe.zc-7+o])}function Lw(e){_w(e),Ew(e),Sw(e),kw(e),e.curMat=[0,0,0]}var zw={x:Pe.x1+zo,zLo:Pe.zc-B0.DOOR.r,zHi:Pe.zc+B0.DOOR.r},Yt=e=>e.toFixed(4);function Nw(){return`
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
		float k = floor((q.x - ${Yt(ht.first)}) / ${Yt(ht.pitch)} + 0.5);
		if (k < 0.0 || k > ${Yt(ht.count-1)}) return 0.0;
		float dx = q.x - (${Yt(ht.first)} + k * ${Yt(ht.pitch)});
		float side = 1.0 - smoothstep(${Yt(ht.halfW)} - soft, ${Yt(ht.halfW)} + soft, abs(dx));
		float sill = smoothstep(${Yt(ht.sill)} - soft, ${Yt(ht.sill)} + soft, q.y);
		float r = length(vec2(dx, q.y - ${Yt(ht.spring)}));
		float head = q.y < ${Yt(ht.spring)} ? 1.0 : 1.0 - smoothstep(${Yt(ht.halfW)} - soft, ${Yt(ht.halfW)} + soft, r);
		float open = side * sill * head;
		// the black glazing bars, softly
		float cover = 0.0;
		cover = max(cover, winBar(abs(dx), 0.022, soft));
		cover = max(cover, winBar(abs(abs(dx) - ${Yt(ht.halfW*.5)}), 0.022, soft));
		float rowH = ${Yt((ht.spring-ht.sill)/6)};
		float ry = (q.y - ${Yt(ht.sill)}) / rowH;
		cover = max(cover, q.y < ${Yt(ht.spring)} ? winBar(abs(fract(ry + 0.5) - 0.5) * rowH, 0.02, soft) : 0.0);
		cover = max(cover, q.y > ${Yt(ht.spring)} ? winBar(abs(r - 0.44), 0.02, soft) : 0.0);
		return open * (1.0 - cover * 0.75);
	}

	// daylight reaching point p from the windows
	float windowLight(vec3 p, vec3 n) {
		if (p.x < ${Yt(Pe.x0)} || p.z < ${Yt(Pe.z0-.1)} || p.z > ${Yt(Pe.z1)}) return 0.0;
		float ndl = max(dot(n, WIN_SKY), 0.0);
		if (ndl <= 0.0) return 0.0;
		float tIn = (${Yt(Pe.z1)} - p.z) / WIN_SKY.z;
		float tOut = (${Yt(Pe.z1+2*zo)} - p.z) / WIN_SKY.z;
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
		${Pl.map(e=>`{ float d = abs(p.x - ${Yt(e)}); if (d < best) { best = d; lamp = vec3(${Yt(e)}, ${Yt(cr.spring+.55)}, ${Yt(Pe.z0-.15)}); } }`).join(`
		`)}
		return lamp;
	}

	float nicheLight(vec3 p, vec3 n) {
		if (p.z > ${Yt(Pe.z0+1.6)} || p.z < ${Yt(Pe.z0-cr.r-.1)} || p.x < ${Yt(Pe.x0)}) return 0.0;
		vec3 lamp = nicheLamp(p);
		vec3 d = lamp - p;
		float dist = length(d);
		vec3 L = d / dist;
		// a cone pointing down into the niche
		float cone = smoothstep(0.35, 0.75, dot(-L, normalize(vec3(0.0, -1.0, 0.35))));
		float inside = 1.0 - smoothstep(${Yt(cr.r)}, ${Yt(cr.r+.5)}, abs(p.x - lamp.x));
		return max(dot(n, L), 0.0) * cone * inside / (1.0 + 0.35 * dist * dist);
	}

	// soft general daylight in the corridor, strongest near the glass
	float corridorGlow(vec3 p) {
		if (p.x < ${Yt(Pe.x0-1)}) return 0.0;
		float inC = smoothstep(${Yt(Pe.z0-1.5)}, ${Yt(Pe.z0)}, p.z) * smoothstep(${Yt(Pe.x0-1)}, ${Yt(Pe.x0+1)}, p.x);
		float near = 0.55 + 0.45 * smoothstep(${Yt(Pe.z0)}, ${Yt(Pe.z1)}, p.z);
		return inC * near;
	}`}Sv.exports={wallWithHoles:hc,windowLightGLSL:Nw,addWing:Lw,windowGlass:Aw,farDoorGlass:Tw,atFarDoor:Ev,FAR_DOOR:zw,vaultY:U0,C:Pe,NICHE_X:Pl,NICHE:cr,NICHE_PLINTH_TOP:bw,NICHE_STATUE_Z:ww,WIN:ht,winCentres:Qr,piers:Mv,PAINTING_X:xw,HEIGHT:iu}});var Pr=pe((QS,Tv)=>{"use strict";var cu=On(),ko=8,X0=.35,Fi=14,V0=4,He={x0:Fi+X0,x1:Fi+X0+2*V0,z0:5.9-V0,z1:5.9+V0,zc:5.9,cx:Fi+X0+V0,arch:{r:2.6,spring:4.4},dome:{r:3.3,base:ko},oculus:3.3};He.domeTop=He.dome.base+He.dome.r;var Y0={spokes:16,ringE:[.42,.95],bar:.035},fn={sxz:1.32,sy:1.6,yaw:.6};fn.crownC=[He.cx,.4+3.4*fn.sy,He.zc];fn.crownR=[2.3*fn.sxz,1.9*fn.sy,2.3*fn.sxz];fn.trunkR=.26*fn.sxz;fn.trunkTop=.4+2.2*fn.sy;var Av={inner:1.05,outer:1.62,seat:.48,soil:.4},Gl=(()=>{let e=[.2,1,-.15],t=Math.hypot(...e);return e.map(o=>o/t)})(),xn=[0,0,0],W0=[11,0,0],Ol=[10,0,0],Fl=[9,0,0],Cw=[5,0,0],lu=[3,0,0];function La(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),f=e.vert(n,a,i),l=e.vert(r,a,i);e.tri(s,c,f),e.tri(s,f,l)}function Jn(e,t,o,n,r,a,i,s){e.box(Math.min(t,r),Math.min(o,a),Math.min(n,i),Math.max(t,r),Math.max(o,a),Math.max(n,i),s)}var Rw=(e,t,o)=>n=>{let r=n-e;return o+Math.sqrt(Math.max(0,t*t-r*r))};function Iw(e){e.save(),e.translate(Fi+X0,0,0),e.rotateY(-Math.PI/2),cu.wallWithHoles(e,{u0:0,u1:cu.C.z0,w0:0,w1:2*X0,top:()=>ko,holes:[{u0:He.zc-He.arch.r,u1:He.zc+He.arch.r,bottom:0,head:Rw(He.zc,He.arch.r,He.arch.spring),step:.05}],mat:W0,revealMat:xn,topStep:1}),e.restore();let t=Fi-X0;for(let[i,s]of[[0,He.zc-He.arch.r],[He.zc+He.arch.r,cu.C.z0]])Jn(e,t-.12,0,i,t,.42,s,xn),Jn(e,t-.07,.42,i,t,.5,s,xn);let o=t,n=.24,r=40,a=(i,s,c)=>[c,He.arch.spring+Math.sin(i)*s,He.zc+Math.cos(i)*s];for(let i=0;i<r;i++){let s=Math.PI*i/r,c=Math.PI*(i+1)/r;La(e,a(s,He.arch.r,o-.07),a(c,He.arch.r,o-.07),a(c,He.arch.r+n,o-.07),a(s,He.arch.r+n,o-.07),[-1,0,0],xn),La(e,a(s,He.arch.r+n,o),a(c,He.arch.r+n,o),a(c,He.arch.r+n,o-.07),a(s,He.arch.r+n,o-.07),[0,Math.sin((s+c)/2),Math.cos((s+c)/2)],xn),La(e,a(s,He.arch.r,o),a(c,He.arch.r,o),a(c,He.arch.r,o-.07),a(s,He.arch.r,o-.07),[0,-Math.sin((s+c)/2),-Math.cos((s+c)/2)],xn)}Jn(e,o-.12,He.arch.spring+He.arch.r-.06,He.zc-.17,o,He.arch.spring+He.arch.r+n+.16,He.zc+.17,xn);for(let i of[-1,1]){let s=He.zc+i*He.arch.r,c=He.zc+i*(He.arch.r+n);Jn(e,o-.07,0,s,o,He.arch.spring,c,xn),Jn(e,o-.13,He.arch.spring-.16,s-i*.03,o,He.arch.spring,c+i*.08,xn),Jn(e,o-.12,0,s-i*.03,o,.5,c+i*.06,xn)}}function Pw(e){let{x0:t,x1:o,z0:n,z1:r}=He;La(e,[Fi,0,n],[o,0,n],[o,0,r],[Fi,0,r],[0,1,0],xn),e.curMat=W0,La(e,[o,0,n],[o,0,r],[o,ko,r],[o,ko,n],[-1,0,0],W0),La(e,[t,0,n],[o,0,n],[o,ko,n],[t,ko,n],[0,0,1],W0),La(e,[o,0,r],[t,0,r],[t,ko,r],[o,ko,r],[0,0,-1],W0),La(e,[t,0,r],[t,0,n],[t,ko,n],[t,ko,r],[1,0,0],W0),Jn(e,o-.12,0,n,o,.42,r,xn),Jn(e,t,0,n,o,.42,n+.12,xn),Jn(e,t,0,r-.12,o,.42,r,xn),Jn(e,o-.2,ko-.3,n,o,ko,r,xn),Jn(e,t,ko-.3,n,o,ko,n+.2,xn),Jn(e,t,ko-.3,r-.2,o,ko,r,xn),Jn(e,t,ko-.3,n,t+.2,ko,r,xn);let a=He.dome.r,i=48,s=[];for(let g=0;g<=i;g++){let y=Math.PI*2*g/i;s.push([He.cx+Math.cos(y)*a,He.zc+Math.sin(y)*a])}let c=g=>{let y=Math.abs(Math.cos(g)),b=Math.abs(Math.sin(g));return Math.min(V0/Math.max(y,1e-6),V0/Math.max(b,1e-6))};for(let g=0;g<i;g++){let y=Math.PI*2*g/i,b=Math.PI*2*(g+1)/i,M=c(y),T=c(b),L=[He.cx+Math.cos(y)*M,ko,He.zc+Math.sin(y)*M],C=[He.cx+Math.cos(b)*T,ko,He.zc+Math.sin(b)*T];La(e,[s[g][0],ko,s[g][1]],[s[g+1][0],ko,s[g+1][1]],C,L,[0,-1,0],Ol)}e.lathe([[a+.02,ko-.18,1],[a-.12,ko-.18,1],[a-.12,ko-.06,1],[a-.05,ko,1],[a,ko+.02]],He.cx,He.zc,i,{mat:()=>xn});let f=16,l=(g,y,b)=>[He.cx+Math.cos(g)*Math.cos(y)*b,He.dome.base+Math.sin(y)*b,He.zc+Math.sin(g)*Math.cos(y)*b],d=Math.PI/2;for(let g=0;g<i;g++)for(let y=0;y<f;y++){let b=Math.PI*2*g/i,M=Math.PI*2*(g+1)/i,T=d*y/f,L=d*(y+1)/f,C=(B,W)=>[-Math.cos(B)*Math.cos(W),-Math.sin(W),-Math.sin(B)*Math.cos(W)],D=[e.vert(l(b,T,a),C(b,T),Fl),e.vert(l(M,T,a),C(M,T),Fl),e.vert(l(M,L,a),C(M,L),Fl),e.vert(l(b,L,a),C(b,L),Fl)];e.tri(D[0],D[1],D[2]),e.tri(D[0],D[2],D[3])}for(let g=0;g<Y0.spokes;g++){let y=Math.PI*2*g/Y0.spokes,b=[];for(let M=0;M<=14;M++)b.push(l(y,(d-.06)*M/14,a-.04));e.tube(b,()=>.04,20,6,{mat:()=>Ol})}for(let g of Y0.ringE){let y=Math.cos(g)*(a-.04),b=He.dome.base+Math.sin(g)*(a-.04),M=[];for(let T=0;T<=72;T++){let L=Math.PI*2*T/72;M.push([He.cx+Math.cos(L)*y,b,He.zc+Math.sin(L)*y])}e.tube(M,()=>.035,72,6,{mat:()=>Ol})}e.ellipsoid([He.cx,He.dome.base+a-.06,He.zc],[.16,.08,.16],6,12,{mat:()=>Ol});let h=.46,p=.55,u=.12,v=(g,y,b,M)=>{Jn(e,g,h-.08,y,b,h,M,lu);let T=b-g>M-y?[g+.25,b-.25]:[g+.06,b-.06],L=b-g>M-y?[y+.06,M-.06]:[y+.25,M-.25];Jn(e,T[0],0,L[0],T[1],h-.08,L[1],lu)};v(o-u-p,n+1.1,o-u,r-1.1),v(t+1,n+u,o-1.1,n+u+p),v(t+1,r-u-p,o-1.1,r-u);let m=Av;e.lathe([[m.outer,0,1],[m.outer,m.seat-.1,1],[m.outer+.07,m.seat-.07,1],[m.outer+.07,m.seat,1],[m.inner-.05,m.seat,1],[m.inner-.05,m.seat-.06,1],[m.inner,m.seat-.08,1],[m.inner,m.soil]],He.cx,He.zc,64,{mat:()=>lu}),e.lathe([[m.inner,m.soil,1],[0,m.soil+.03]],He.cx,He.zc,48,{mat:()=>Cw})}function Ow(e){Iw(e),Pw(e),e.curMat=[0,0,0]}var go=e=>e.toFixed(4);function kv(){let e=He.dome.r,t=Y0.ringE.map(o=>Math.cos(o)*e);return`
	const vec3 SHAFT = vec3(${go(Gl[0])}, ${go(Gl[1])}, ${go(Gl[2])});

	// how much sun the glass dome lets through towards p (0..1): the round
	// opening, less the soft shadows of its ribs and rings (worked out on
	// the dome's base, where the frame is seen almost straight on)
	float oculusOpen(vec3 p) {
		float t = (${go(He.dome.base+.6)} - p.y) / SHAFT.y;
		vec3 q = p + SHAFT * t;
		vec2 d2 = q.xz - vec2(${go(He.cx)}, ${go(He.zc)});
		float d = length(d2);
		float soft = 0.02 + 0.012 * t;
		float open = 1.0 - smoothstep(${go(e-.15)} - soft, ${go(e-.15)} + soft, d);
		float hw = ${go(Y0.bar)};
		float cover = 0.0;
		${t.map(o=>`cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, abs(d - ${go(o)})));`).join(`
		`)}
		float ang = atan(d2.y, d2.x);
		float stp = ${go(Math.PI*2/Y0.spokes)};
		float da = abs(mod(ang + stp * 0.5, stp) - stp * 0.5);
		cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, d * sin(da)));
		cover = max(cover, 1.0 - smoothstep(0.16 - soft, 0.16 + soft, d));
		return open * (1.0 - cover * 0.85);
	}

	// the tree's own shade: its crown lets dappled light through, its
	// trunk blocks it
	float treeShade(vec3 p) {
		vec3 c = vec3(${go(fn.crownC[0])}, ${go(fn.crownC[1])}, ${go(fn.crownC[2])});
		vec3 r = vec3(${go(fn.crownR[0])}, ${go(fn.crownR[1])}, ${go(fn.crownR[2])});
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
		float tt = (${go(fn.trunkTop)} - p.y) / SHAFT.y;
		if (tt > 0.0) {
			vec2 o = p.xz - vec2(${go(He.cx)}, ${go(He.zc)});
			vec2 dir = SHAFT.xz;
			float k = clamp(-dot(o, dir) / dot(dir, dir), 0.0, tt);
			float dist = length(o + dir * k);
			tr *= smoothstep(${go(fn.trunkR*.7)}, ${go(fn.trunkR*1.3)}, dist);
		}
		return tr;
	}`}function Fw(){return`
	${kv()}

	// sunlight through the oculus reaching p (0..1)
	float alcoveSun(vec3 p, vec3 n) {
		if (p.x < ${go(He.x0-.75)} || p.z < ${go(He.z0-.5)} || p.z > ${go(He.z1+.5)}) return 0.0;
		float ndl = max(dot(n, SHAFT), 0.0);
		if (ndl <= 0.0) return 0.0;
		return ndl * oculusOpen(p) * treeShade(p);
	}

	// soft daylight filling the court, brightest under the dome
	float alcoveGlow(vec3 p) {
		if (p.x < ${go(He.x0-1.5)} || p.z < ${go(He.z0-1.5)} || p.z > ${go(He.z1+1.5)}) return 0.0;
		float inside = smoothstep(${go(He.x0-1.2)}, ${go(He.x0+.6)}, p.x);
		float d = length(p.xz - vec2(${go(He.cx)}, ${go(He.zc)}));
		return inside * (0.55 + 0.45 * smoothstep(0.0, 8.0, p.y)) * (1.0 - 0.35 * smoothstep(1.0, 5.0, d));
	}`}Tv.exports={addAlcove:Ow,alcoveLightGLSL:Fw,oculusGLSL:kv,A:He,BENCH:Av,SHAFT:Gl,TREE:fn}});var Fn=pe((ZS,zv)=>{"use strict";var Zr=0;try{let e=location.search;/[?&]night\b/.test(e)&&(Zr=1)}catch(e){}var za=Zr,fu=0,Lv=[],$l={tick(e){let t=fu?Math.min(.1,e-fu):0;if(fu=e,za!==Zr){let o=t/2.4;za=Zr>za?Math.min(Zr,za+o):Math.max(Zr,za-o)}return $l.night},get night(){return za*za*(3-2*za)},get isNight(){return Zr===1},get settled(){return za===Zr},set(e){Zr=e?1:0,Lv.forEach(t=>t(Zr))},toggle(){$l.set(!Zr)},onChange(e){Lv.push(e)}};$l.GLSL=`
uniform float night;
vec3 toNight(vec3 c, float keep) {
	float l = dot(c, vec3(0.299, 0.587, 0.114));
	vec3 n = mix(vec3(l), c, 0.35) * vec3(0.55, 0.70, 1.05) * keep;
	return mix(c, n, night);
}
`;zv.exports=$l});var Ya=pe((JS,pc)=>{"use strict";var hu=Fn(),{C:uu}=On(),{A:Dl,BENCH:uc}=Pr(),hn=Math.PI,Gw=[18,29,40],ql=.575,Xa=[],dc=(e,t,o,n,r,a,i)=>Xa.push(Object.assign({x:e,y:t,z:o,o:n,back:r,hw:a,s:1,k:1,range:7,mount:"wall"},i||{}));Gw.forEach(e=>{dc(1.25+ql+.48,3.25,e,[1,0],.48,ql,{s:1.2}),dc(12.75-ql-.48,3.25,e,[-1,0],.48,ql,{s:1.2})});[3,11].forEach(e=>dc(e,3.45,uu.hallEnd-.5,[0,-1],.5,99,{s:1.2}));var $w=[14.63,19.63,24.03,28.43,32.83,uu.x1-.28];$w.forEach(e=>dc(e,3.15,uu.z0+.16+.44,[0,1],.44,.28));[3,8.8].forEach(e=>dc(.35+.44,2.75,e,[1,0],.44,99));{let e=(uc.inner+uc.outer)/2,t=Math.atan2(-1.12,-.98);Xa.push({x:Dl.cx+Math.cos(t)*e,y:uc.seat+.155,z:Dl.zc+Math.sin(t)*e,o:[Math.cos(t),Math.sin(t)],back:0,hw:0,ring:[Dl.cx,Dl.zc,uc.outer+.07,uc.seat],s:.52,k:2.2,range:3.6,mount:"table"})}var du=.13,Hl=.21,yn=du/Math.cos(hn/6),ho=e=>e.toFixed(4);function Nv(e){let o=(e||Xa.map((n,r)=>r)).map(n=>{let r=Xa[n],a=-r.o[1],i=r.o[0],s=r.mount==="table"?`
				// the bench it stands on hides the floor under and around it
				if (p.y < ${ho(r.ring[3]-.03)}) {
					float tt = ${ho(r.y-r.ring[3])} / max(-D.y, 1e-3);
					vec2 hit = vec2(${ho(r.x)}, ${ho(r.z)}) + D.xz * tt - vec2(${ho(r.ring[0])}, ${ho(r.ring[1])});
					T *= smoothstep(${ho(r.ring[2]-.02)}, ${ho(r.ring[2]+.12)}, length(hit));
				}`:"",c=r.mount==="wall"?`
				{
					// what it hangs on stands behind it and hides what lies beyond
					float behind = -dot(D.xz, vec2(${ho(r.o[0])}, ${ho(r.o[1])}));
					if (behind > ${ho(r.back+.06)}) {
						float side = abs(dot(D.xz, vec2(${ho(a)}, ${ho(i)}))) * ${ho(r.back)} / behind;
						T *= smoothstep(${ho(r.hw-.04)}, ${ho(r.hw+.04)}, side);
					}
				}`:"";return`
			{
				vec3 D = p - vec3(${ho(r.x)}, ${ho(r.y)}, ${ho(r.z)});
				float d2 = dot(D, D);
				if (d2 < ${ho(r.range*r.range)}) {
					float d = sqrt(d2);
					// the direction in the lantern's own frame
					float c = ${ho(Math.cos(Math.atan2(r.o[1],r.o[0])))}, s = ${ho(Math.sin(Math.atan2(r.o[1],r.o[0])))};
					vec3 q = vec3(D.x * c + D.z * s, D.y, -D.x * s + D.z * c);
					float T = lanternGlass(q, 0.10 + 0.05 * d);
					${c}${s}
					float fl = 0.90 + 0.06 * sin(time * 6.1 + ${ho(n*1.7)}) + 0.04 * sin(time * 15.3 + ${ho(n*2.9)}) * sin(time * 1.9 + ${ho(n*.6)});
					float lam = max(dot(N, -D / d), 0.0) * 0.85 + 0.15;
					float fall = 1.0 / (1.0 + d2 * ${ho(1/(r.s*r.s))}) * (1.0 - smoothstep(${ho(r.range*.6)}, ${ho(r.range)}, d));
					sum += ${ho(r.k)} * T * fl * lam * fall;
				}
			}`}).join("");return`
	// how much of a lantern's light gets out in direction q (lantern frame,
	// y up): through the leaded glass, past the iron posts, a little
	// through the vents in the roof and the open work under the base
	float lanternGlass(vec3 q, float blur) {
		float h = length(q.xz) + 1e-5;
		float az = atan(q.z, q.x);
		// which of the six panels, and where across it
		float t = mod(az + ${ho(hn/6)}, ${ho(hn/3)}) - ${ho(hn/6)};
		float U = tan(t) / ${ho(Math.tan(hn/6))};
		float V = (q.y / h) * (${ho(du/Hl)} / cos(t));
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
	}`}var No=0,Dw=1;function qw(){let e=[],t=[],o=[],n=[],r=[],a=(p,u,v,m)=>(e.push(p[0],p[1],p[2]),t.push(u[0],u[1],u[2]),o.push(v),n.push(m?m[0]:0,m?m[1]:0),e.length/3-1),i=(p,u)=>[p[0]-u[0],p[1]-u[1],p[2]-u[2]],s=(p,u)=>[p[1]*u[2]-p[2]*u[1],p[2]*u[0]-p[0]*u[2],p[0]*u[1]-p[1]*u[0]],c=p=>{let u=Math.hypot(p[0],p[1],p[2])||1;return[p[0]/u,p[1]/u,p[2]/u]};function f(p,u,v,m,g,y){let b=c(s(i(u,p),i(m,p))),M=a(p,b,g,[0,0]),T=a(u,b,g,[1,0]),L=a(v,b,g,[1,1]),C=a(m,b,g,[0,1]);r.push(M,T,L,M,L,C),y&&r.push(M,L,T,M,C,L)}function l(p,u,v){for(let y=0;y<p.length;y++){let b=p[Math.max(0,y-1)],M=p[Math.min(p.length-1,y+1)],T=c(i(M,b)),L=Math.abs(T[1])>.9?[1,0,0]:[0,1,0],C=c(s(T,L)),D=s(C,T),B=typeof u=="function"?u(y/(p.length-1)):u;for(let W=0;W<=6;W++){let Q=W/6*hn*2,ce=Math.cos(Q),ee=Math.sin(Q),te=[C[0]*ce+D[0]*ee,C[1]*ce+D[1]*ee,C[2]*ce+D[2]*ee];a([p[y][0]+te[0]*B,p[y][1]+te[1]*B,p[y][2]+te[2]*B],te,v)}}let g=e.length/3-p.length*7;for(let y=0;y<p.length-1;y++)for(let b=0;b<6;b++){let M=g+y*7+b,T=M+6+1;r.push(M,T,M+1,M+1,T,T+1)}}function d(p,u,v,m,g,y,b,M,T){let L=(C,D,B)=>{let W=y+hn/6+B*hn/3;return[p[0]+Math.cos(W)*C,D,p[2]+Math.sin(W)*C]};for(let C=0;C<6;C++)f(L(m,u,C+1),L(m,u,C),L(g,v,C),L(g,v,C+1),b);if(M&&g>0)for(let C=0;C<6;C++){let D=a([p[0],v,p[2]],[0,1,0],b),B=a(L(g,v,C),[0,1,0],b),W=a(L(g,v,C+1),[0,1,0],b);r.push(D,W,B)}if(T&&m>0)for(let C=0;C<6;C++){let D=a([p[0],u,p[2]],[0,-1,0],b),B=a(L(m,u,C),[0,-1,0],b),W=a(L(m,u,C+1),[0,-1,0],b);r.push(D,B,W)}}function h(p,u,v,m,g,y,b){let M=[];for(let L=0;L<=18;L++){let C=L/18,D=(b||0)+C*m*hn*2,B=v*(1-.75*C);M.push([p[0]+u[0]*Math.cos(D)*B,p[1]+Math.sin(D)*B,p[2]+u[2]*Math.cos(D)*B])}l(M,g,y)}return Xa.forEach(p=>{let u=p.s,v=Math.atan2(p.o[1],p.o[0]),m=[p.x,p.y,p.z],g=(M,T,L)=>[p.x+p.o[0]*M-p.o[1]*(L||0),p.y+T,p.z+p.o[1]*M+p.o[0]*(L||0)],y=p.y-Hl*u,b=p.y+Hl*u;for(let M=0;M<6;M++){let T=v+hn/6+M*hn/3,L=T+hn/3,C=yn*u*.97,D=[p.x+Math.cos(T)*C,y,p.z+Math.sin(T)*C],B=[p.x+Math.cos(L)*C,y,p.z+Math.sin(L)*C];f(B,D,[D[0],b,D[2]],[B[0],b,B[2]],Dw,!0)}for(let M=0;M<6;M++){let T=v+hn/6+M*hn/3,L=yn*u;l([[p.x+Math.cos(T)*L,y-.02*u,p.z+Math.sin(T)*L],[p.x+Math.cos(T)*L,b+.02*u,p.z+Math.sin(T)*L]],.011*u,No)}d(m,y-.035*u,y,yn*u*1.12,yn*u*1.12,v,No,!0,!0),d(m,y-.1*u,y-.035*u,yn*u*.55,yn*u*1,v,No,!1,!0),d(m,y-.17*u,y-.1*u,0,yn*u*.55,v,No,!1,!1);for(let M=0;M<6;M++){let T=v+M*hn/3,L=du*u*1.06,C=[p.x+Math.cos(T)*L,y-.06*u,p.z+Math.sin(T)*L];h(C,[-Math.sin(T),0,Math.cos(T)],.03*u,.85,.004*u,No,.3)}d(m,b,b+.03*u,yn*u*1.14,yn*u*1.14,v,No,!1,!0),d(m,b+.03*u,b+.2*u,yn*u*1.14,yn*u*.32,v,No,!1,!1),d(m,b+.2*u,b+.27*u,yn*u*.34,yn*u*.34,v,No,!1,!1),d(m,b+.27*u,b+.37*u,yn*u*.42,0,v,No,!1,!0),l([[p.x,b+.36*u,p.z],[p.x,b+.47*u,p.z]],M=>.01*u*(1-.7*M),No),d([p.x,0,p.z],b+.44*u,b+.47*u,.018*u,0,v,No,!1,!0);for(let M=0;M<6;M++){let T=v+hn/6+M*hn/3,L=yn*u*1.14,C=[p.x+Math.cos(T)*L,b+.03*u,p.z+Math.sin(T)*L];l([C,[C[0],C[1]+.09*u,C[2]]],D=>.008*u*(1-.8*D),No),d([C[0],0,C[2]],C[1]+.035*u,C[1]+.06*u,.014*u,.014*u,T,No,!0,!0)}if(p.mount==="wall"){let M=p.back,T=y-.32,L=g(-M,0,0);((Q,ce,ee)=>{let te=[p.o[0],0,p.o[1]],Ke=[-p.o[1],0,p.o[0]],ve=(vt,xt,$t)=>[L[0]+Ke[0]*vt+te[0]*$t,xt,L[2]+Ke[2]*vt+te[2]*$t],Te=.03,re=.065;f(ve(-ee,Q,re),ve(ee,Q,re),ve(ee,ce,re),ve(-ee,ce,re),No,!0),f(ve(ee,Q,Te),ve(ee,Q,re),ve(ee,ce,re),ve(ee,ce,Te),No,!0),f(ve(-ee,Q,re),ve(-ee,Q,Te),ve(-ee,ce,Te),ve(-ee,ce,re),No,!0),f(ve(-ee,ce,re),ve(ee,ce,re),ve(ee,ce,Te),ve(-ee,ce,Te),No,!0),f(ve(-ee,Q,Te),ve(ee,Q,Te),ve(ee,Q,re),ve(-ee,Q,re),No,!0),d([L[0]+te[0]*re,0,L[2]+te[2]*re],ce,ce+.05,ee*.6,0,v,No,!1,!0),d([L[0]+te[0]*re,0,L[2]+te[2]*re],Q-.05,Q,0,ee*.6,v,No,!1,!1)})(T-.2,T+.2,.07);let D=[];for(let Q=0;Q<=14;Q++){let ce=Q/14,ee=-M+.05+ce*(M-.05),te=T+.04+(y-.17*u-T-.04)*Math.pow(ce,2.2);D.push(g(ee,te-p.y,0))}l(D,Q=>.022*(1-.3*Q),No);let B=[];for(let Q=0;Q<=10;Q++){let ce=Q/10;B.push(g(-M+.05+ce*M*.6,T-.14+ce*.16+.05*Math.sin(ce*hn)-p.y,0))}l(B,.009,No);let W=B[B.length-1];h([W[0]-p.o[0]*.03,W[1]+.02,W[2]-p.o[1]*.03],[p.o[0],0,p.o[1]],.045,1.1,.007,No,-.4),[.3,.55].forEach(Q=>{let ce=D[Math.round(Q*14)],ee=B[Math.round(Q/.62*10)]||B[10];l([ce,ee],.006,No)}),[-1,1].forEach(Q=>{let ce=g(-.05,-Hl*u-.2*u,0);h([ce[0]-p.o[1]*Q*.05,ce[1],ce[2]+p.o[0]*Q*.05],[-p.o[1]*Q,0,p.o[0]*Q],.05*u,.9,.006,No,hn)})}else for(let M=0;M<3;M++){let T=v+M*hn*2/3,L=[p.x+Math.cos(T)*yn*u*.7,y-.035*u,p.z+Math.sin(T)*yn*u*.7],C=[p.x+Math.cos(T)*yn*u*1.25,y-.17*u,p.z+Math.sin(T)*yn*u*1.25];l([L,C],.012*u,No)}}),{pos:e,nrm:t,kind:o,uv:n,elems:r}}pc.exports=e=>{let t=qw(),o=e({vert:`
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
		${Nv()}
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
		}`,attributes:{position:t.pos,normal:t.nrm,kind:t.kind,uv:t.uv},elements:t.elems,uniforms:{time:e.context("time"),night:()=>hu.night}}),n=[],r=[];Xa.forEach((i,s)=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(c=>{n.push(c[0],c[1]),r.push(i.x,i.y,i.z,i.s+s*.001)})});let a=e({vert:`
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
		}`,attributes:{corner:n,at:r},count:n.length/2,uniforms:{time:e.context("time"),night:()=>hu.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o(),hu.night>.01&&a()}};pc.exports.lanternGLSL=Nv;pc.exports.LANTERNS=Xa;pc.exports.TREE_LANTERN=[Xa.length-1]});var vc=pe((e8,Or)=>{"use strict";var Hw=Fn(),yo=Math.PI,jo=e=>(+e).toFixed(4),jw=e=>`vec3(${jo(e[0])}, ${jo(e[1])}, ${jo(e[2])})`,ct={x:-7,z:44.5},Nt=5.2,jn=15,We={z0:42.6,z1:46.4,zc:44.5,spring:4,r:1.9},da={z0:42.2,z1:46.8,top:6.3,x:.35},Bl=[ct.x-Math.sqrt(Nt*Nt-3.05*3.05),0,0],Qo={x0:-2.05+Bl[0],x1:Bl[0],z0:41.45,z1:47.55,top:4.3},pu=[[Qo.x1+.05,2.35,Qo.z0-.45],[Qo.x1+.05,2.35,Qo.z1+.45]].map(([e,t,o])=>{let n=Math.atan2(o-ct.z,e-ct.x);return[ct.x+Math.cos(n)*(Nt-.16),t,ct.z+Math.sin(n)*(Nt-.16)]}),co={ri:3.4,ro:Nt,a0:-35*yo/180,rise:.1836,step:3.6*yo/180,n:88,thick:.36};co.k=co.rise/co.step;var er=e=>co.a0-e,Qa=e=>e*co.k,Gn={x:ct.x+.1,z:ct.z-.15,yaw:-yo/2,scale:1.1},Ul=[[3.6,44.5],[.6,44.5],[-2.2,44.7],[-4.5,46.5],[-7,47.2],[-9.4,46.6],[-10.5,44.9],[-10.9,43.2]];function Rv(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let o=t;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function Uw(e,t){let o=1e9;for(let n=0;n<Ul.length-1;n++){let[r,a]=Ul[n],[i,s]=Ul[n+1],c=i-r,f=s-a,l=Math.max(0,Math.min(1,((e-r)*c+(t-a)*f)/(c*c+f*f)));o=Math.min(o,Math.hypot(e-r-c*l,t-a-f*l))}return o}var jl=e=>We.spring+Math.sqrt(Math.max(0,We.r*We.r-(e-We.zc)*(e-We.zc))),Ka=e=>ct.x+Math.sqrt(Math.max(0,Nt*Nt-(e-ct.z)*(e-ct.z)));function K0(e,t){return Math.hypot(e-ct.x,t-ct.z)<Nt||e<=0&&e>ct.x&&t>We.z0&&t<We.z1||e>Qo.x0&&e<Qo.x1&&t>Qo.z0&&t<Qo.z1}function Bw(e,t){if(Math.hypot(e-ct.x,t-ct.z)<co.ri-.05)return 99;let n=Math.atan2(t-ct.z,e-ct.x),r=co.a0-n;for(;r<0;)r+=2*yo;for(;r>=2*yo;)r-=2*yo;return r>co.n*co.step?99:Qa(r)-co.thick}function Ww(){let e=[],t=Rv(1729),o=(a,i,s)=>{for(let c=Math.max(0,e.length-400);c<e.length;c++){let f=e[c];if(!(f[1]>.01)&&Math.hypot(f[0]-a,f[2]-i)<s+f[3]+.012)return!0}return!1},n=(a,i)=>{let s=a-Gn.x,c=i-Gn.z,f=Math.cos(Gn.yaw),l=Math.sin(Gn.yaw),d=(f*s-l*c)/Gn.scale,h=(l*s+f*c)/Gn.scale;return d>-1.05&&d<1.3&&h>-.7&&h<.72},r=0;for(;e.length<980&&r<6e4;){r++;let i=t()<.55?1.25+t()*2.1:1.25+Math.sqrt(t())*(Nt-1.45),s=t()*2*yo,c=ct.x+Math.cos(s)*i,f=ct.z+Math.sin(s)*i;if(!K0(c,f)||i>Nt-.18||n(c,f)||Uw(c,f)<.62||Bw(c,f)<2.3||c<Qo.x1+.9)continue;let l=.022+t()*.02;if(o(c,f,l))continue;let d=t()<.15?.22+t()*.14:.05+t()*.15;e.push([c,0,f,l,d,t()*100])}for(let a=1;a<26;a++){let i=a<12?3:2;for(let s=0;s<i;s++){let c=(a+.25+t()*.5)*co.step,f=er(c),l=co.ri+.55+t()*(co.ro-co.ri-.75),d=.022+t()*.016;e.push([ct.x+Math.cos(f)*l,(a+1)*co.rise,ct.z+Math.sin(f)*l,d,.05+t()*.14,t()*100])}}for(let a of pu)for(let[i,s,c]of[[0,0,.26],[.06,.05,.18],[-.05,-.04,.14]])e.push([a[0]+i,a[1],a[2]+s,.024,c,t()*100]);for(let a of[Qo.z0-.35,Qo.z1+.35])for(let i=0;i<9;i++){let s=Qo.x1+.35+t()*.5,c=a+(t()-.5)*.5;Math.hypot(s-ct.x,c-ct.z)>Nt-.15||e.push([s,0,c,.026+t()*.014,.18+t()*.3,t()*100])}return e}function Vw(e){let o=Rv(77),n=[];for(let r=0;r<14;r++){let a=e[Math.floor(o()*e.length)];n.push([a[0],a[1]+a[4],a[2]])}for(let r=0;r<12;r++){let a=n.map(()=>[0,0,0,0]);for(let i of e){let s=[i[0],i[1]+i[4],i[2]],c=0,f=1e9;n.forEach((l,d)=>{let h=(s[0]-l[0])**2+(s[1]-l[1])**2*4+(s[2]-l[2])**2;h<f&&(f=h,c=d)}),a[c][0]+=s[0],a[c][1]+=s[1],a[c][2]+=s[2],a[c][3]++}n=a.map((i,s)=>i[3]?[i[0]/i[3],i[1]/i[3],i[2]/i[3],i[3]]:n[s])}return n.filter(r=>r[3]>0).map(r=>[r[0],r[1]+.12,r[2],r[3]/e.length])}var vu=Ww(),Cv=Vw(vu.filter(e=>e[1]<2||e[1]>2.5)).concat(pu.map(e=>[e[0],e[1]+.35,e[2],.035]));function Iv(){return`
	vec3 roomLight(vec3 p, vec3 N, vec3 V, float gloss, out vec3 spec) {
		spec = vec3(0.0);
		vec3 col = vec3(0.0);
		float floorK = (p.y < 0.02 && N.y > 0.9) ? 1.0 : 0.0;
		${Cv.map((t,o)=>`
		{
			vec3 d = ${jw(t)} - p;
			float dd = dot(d, d);
			vec3 L = d * inversesqrt(dd);
			float fl = 0.86 + 0.08 * sin(time * ${jo(5.3+o*.71)} + ${jo(o*1.9)}) + 0.06 * sin(time * ${jo(11.7+o*1.3)} + ${jo(o*.7)});
			float w = ${jo(t[3]*Cv.length)} * fl;
			float lam = max(dot(N, L), 0.0) * 0.82 + 0.18;
			col += w * lam / (0.7 + dd * 0.42);
			// the floor glows in pools round the candles
			col += w * floorK * 0.9 / (0.02 + dd * 7.0);
			spec += w * pow(max(dot(N, normalize(L + V)), 0.0), mix(10.0, 180.0, gloss)) * gloss * 1.6 / (0.25 + dd * 0.9);
		}`).join("")}
		col *= vec3(1.0, 0.56, 0.24) * 0.62;
		spec *= vec3(1.0, 0.62, 0.30) * 0.62;
		// light from the oculus, high above: pale by day, moonlight at night
		float up = smoothstep(0.0, ${jo(jn)}, p.y);
		vec3 sky = mix(vec3(0.10, 0.095, 0.085), vec3(0.030, 0.045, 0.085), night);
		col += sky * (0.35 + 0.65 * up) * (0.55 + 0.45 * max(N.y, 0.0)) * (0.6 + 0.4 * max(-dot(N, normalize(p - vec3(${jo(ct.x)}, ${jo(jn)}, ${jo(ct.z)}))), 0.0));
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
	}`}var Et={FLOOR:0,WALL:1,STEP:2,SOFFIT:3,STRING:4,CEIL:5,OCULUS:6,HALLSTONE:7,IRON:8,RAILING:9,CANDLE:10};function Pv(){let e={pos:[],nrm:[],kind:[],uv:[],idx:[]};return e.v=(t,o,n,r)=>(e.pos.push(t[0],t[1],t[2]),e.nrm.push(o[0],o[1],o[2]),e.kind.push(n),e.uv.push(r?r[0]:0,r?r[1]:0),e.pos.length/3-1),e.quad=(t,o,n,r,a,i,s)=>{let c=e.v(t,a,i,s&&s[0]),f=e.v(o,a,i,s&&s[1]),l=e.v(n,a,i,s&&s[2]),d=e.v(r,a,i,s&&s[3]);e.idx.push(c,f,l,c,l,d)},e.tri=(t,o,n,r,a)=>{let i=e.v(t,r,a),s=e.v(o,r,a),c=e.v(n,r,a);e.idx.push(i,s,c)},e}function Xw(){let e=Pv(),t=(n,r,a)=>[ct.x+Math.cos(n)*r,a,ct.z+Math.sin(n)*r],o=n=>[Math.cos(n),0,Math.sin(n)];for(let r=0;r>Qo.x0-.01;r-=.25)for(let a=41.2;a<47.8;a+=.2){let i=r-.25,s=r,c=a,f=a+.2;if(!(K0(i,c)||K0(s,c)||K0(i,f)||K0(s,f)||K0((i+s)/2,(c+f)/2)))continue;let l=c,d=f;i>Ka(We.z0)-.3&&(l=Math.max(l,We.z0),d=Math.min(d,We.z1),d<=l)||e.quad([i,0,l],[i,0,d],[s,0,d],[s,0,l],[0,1,0],Et.FLOOR)}{for(let r=0;r<360;r++){let a=r/360*2*yo,i=(r+1)/360*2*yo,s=(a+i)/2,c=t(s,Nt,0),f=0;c[0]>ct.x&&c[2]>We.z0-.02&&c[2]<We.z1+.02&&(f=Math.max(jl(Math.min(Math.max(t(a,Nt,0)[2],We.z0),We.z1)),jl(Math.min(Math.max(t(i,Nt,0)[2],We.z0),We.z1)))),c[0]<ct.x&&c[2]>Qo.z0-.02&&c[2]<Qo.z1+.02&&(f=Qo.top);let l=a*Nt,d=i*Nt,h=o(a).map(v=>-v),p=o(i).map(v=>-v),u=[f];for(let v=Math.ceil(f/2.5)*2.5;v<jn;v+=2.5)v>f+.01&&u.push(v);u.push(jn);for(let v=0;v<u.length-1;v++){let m=u[v],g=u[v+1],y=e.v(t(a,Nt,m),h,Et.WALL,[l,m]),b=e.v(t(i,Nt,m),p,Et.WALL,[d,m]),M=e.v(t(i,Nt,g),p,Et.WALL,[d,g]),T=e.v(t(a,Nt,g),h,Et.WALL,[l,g]);e.idx.push(y,b,M,y,M,T)}}for(let[r,a,i]of[[6.55,.22,.07],[0,.32,.05]])for(let s=0;s<360;s++){let c=s/360*2*yo,f=(s+1)/360*2*yo,l=(c+f)/2,d=t(l,Nt,0);if(r<1&&(d[0]>ct.x&&d[2]>We.z0&&d[2]<We.z1||d[0]<ct.x&&d[2]>Qo.z0&&d[2]<Qo.z1))continue;let h=Nt-i;e.quad(t(c,h,r),t(f,h,r),t(f,h,r+a),t(c,h,r+a),o(l).map(p=>-p),Et.WALL,[[c*Nt,r+100],[f*Nt,r+100],[f*Nt,r+a+100],[c*Nt,r+a+100]]),e.quad(t(c,h,r+a),t(f,h,r+a),t(f,Nt,r+a),t(c,Nt,r+a),[0,1,0],Et.WALL,[[0,200],[0,200],[0,200],[0,200]]),r>1&&e.quad(t(c,Nt,r),t(f,Nt,r),t(f,h,r),t(c,h,r),[0,-1,0],Et.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let n=da.x;for(let[a,i]of[[We.z0,1],[We.z1,-1]]){let s=Ka(a);e.quad([n,0,a],[s,0,a],[s,We.spring,a],[n,We.spring,a],[0,0,i],Et.WALL,[[n,0],[s,0],[s,We.spring],[n,We.spring]])}let r=40;for(let a=0;a<r;a++){let i=a/r*yo,s=(a+1)/r*yo,c=We.zc-Math.cos(i)*We.r,f=We.zc-Math.cos(s)*We.r,l=We.spring+Math.sin(i)*We.r,d=We.spring+Math.sin(s)*We.r,h=[0,-Math.sin(i),Math.cos(i)],p=[0,-Math.sin(s),Math.cos(s)],u=e.v([n,l,c],h,Et.WALL,[n,i*We.r]),v=e.v([Ka(c),l,c],h,Et.WALL,[Ka(c),i*We.r]),m=e.v([Ka(f),d,f],p,Et.WALL,[Ka(f),s*We.r]),g=e.v([n,d,f],p,Et.WALL,[n,s*We.r]);e.idx.push(u,v,m,u,m,g)}}{let n=da.x,r=.05;for(let f=da.z0;f<da.z1-1e-6;f+=r){let l=f,d=Math.min(da.z1,f+r),p=(u=>u>We.z0&&u<We.z1)((l+d)/2)?Math.max(jl(l),jl(d)):0;e.quad([n,p,l],[n,p,d],[n,da.top,d],[n,da.top,l],[1,0,0],Et.HALLSTONE,[[l,p],[d,p],[d,da.top],[l,da.top]])}let a=.32,i=.06,s=n+i,c=36;for(let f=0;f<c;f++){let l=f/c*yo,d=(f+1)/c*yo,h=(g,y)=>[s,We.spring+Math.sin(g)*y,We.zc-Math.cos(g)*y],p=We.r,u=We.r+a;e.quad(h(l,p),h(d,p),h(d,u),h(l,u),[1,0,0],Et.HALLSTONE,[[0,300],[0,300],[1,300],[1,300]]);let v=(g,y,b)=>[b,We.spring+Math.sin(g)*y,We.zc-Math.cos(g)*y],m=[0,Math.sin((l+d)/2),-Math.cos((l+d)/2)];e.quad(v(l,u,n),v(d,u,n),v(d,u,s),v(l,u,s),m,Et.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),e.quad(v(l,p,n),v(d,p,n),v(d,p,s),v(l,p,s),m.map(g=>-g),Et.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}for(let[f,l,d]of[[We.z0-a,We.z0,-1],[We.z1,We.z1+a,1]]){e.quad([s,0,f],[s,0,l],[s,We.spring,l],[s,We.spring,f],[1,0,0],Et.HALLSTONE,[[0,300],[1,300],[1,300],[0,300]]);let h=d<0?f:l,p=d<0?l:f;e.quad([n,0,h],[s,0,h],[s,We.spring,h],[n,We.spring,h],[0,0,d],Et.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),e.quad([n,0,p],[s,0,p],[s,We.spring,p],[n,We.spring,p],[0,0,-d],Et.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);let u=We.spring-.16,v=.16,m=.11,g=Math.min(f,l)-.05,y=Math.max(f,l)+.05;e.quad([n+m,u,g],[n+m,u,y],[n+m,u+v,y],[n+m,u+v,g],[1,0,0],Et.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),e.quad([n,u+v,g],[n+m,u+v,g],[n+m,u+v,y],[n,u+v,y],[0,1,0],Et.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),e.quad([n,u,g],[n,u,y],[n+m,u,y],[n+m,u,g],[0,-1,0],Et.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let b of[g,y])e.quad([n,u,b],[n+m,u,b],[n+m,u+v,b],[n,u+v,b],[0,0,b===g?-1:1],Et.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}{let f=We.spring+We.r-.05,l=We.spring+We.r+a+.12,d=.16,h=.22,p=s+.04;e.quad([p,f,We.zc-d],[p,f,We.zc+d],[p,l,We.zc+h],[p,l,We.zc-h],[1,0,0],Et.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let u of[-1,1])e.quad([n,f,We.zc+u*d],[p,f,We.zc+u*d],[p,l,We.zc+u*h],[n,l,We.zc+u*h],[0,0,u],Et.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);e.quad([n,l,We.zc-h],[p,l,We.zc-h],[p,l,We.zc+h],[n,l,We.zc+h],[0,1,0],Et.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}}{let{x0:n,x1:r,z0:a,z1:i,top:s}=Qo;e.quad([n,0,a],[n,0,i],[n,s,i],[n,s,a],[1,0,0],Et.WALL,[[a,0],[i,0],[i,s],[a,s]]);for(let[f,l]of[[a,1],[i,-1]]){let d=ct.x-Math.sqrt(Nt*Nt-(f-ct.z)*(f-ct.z));e.quad([n,0,f],[d,0,f],[d,s,f],[n,s,f],[0,0,l],Et.WALL,[[n,0],[d,0],[d,s],[n,s]])}let c=24;for(let f=0;f<c;f++){let l=a+(i-a)*f/c,d=a+(i-a)*(f+1)/c,h=ct.x-Math.sqrt(Nt*Nt-(l-ct.z)**2),p=ct.x-Math.sqrt(Nt*Nt-(d-ct.z)**2);e.quad([n,s,l],[h,s,l],[p,s,d],[n,s,d],[0,-1,0],Et.WALL,[[0,200],[0,200],[0,200],[0,200]])}for(let f=0;f<c;f++){let l=a+(i-a)*f/c,d=a+(i-a)*(f+1)/c,h=ct.x-Math.sqrt(Nt*Nt-(l-ct.z)**2)+.05,p=ct.x-Math.sqrt(Nt*Nt-(d-ct.z)**2)+.05;e.quad([h,s-.3,l],[p,s-.3,d],[p,s,d],[h,s,l],[1,0,0],Et.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let r=[1.15,1.6,2.3,3,3.35,4.2,Nt];for(let a=0;a<120;a++){let i=a/120*2*yo,s=(a+1)/120*2*yo,c=(i+s)/2;c>yo&&(c-=2*yo);for(let f=0;f<r.length-1;f++){let l=r[f],d=r[f+1],h=c*180/yo;l>=3.3&&h>8&&h<85||e.quad(t(i,l,jn),t(i,d,jn),t(s,d,jn),t(s,l,jn),[0,-1,0],Et.CEIL,[[i*l,l],[i*d,d],[s*d,d],[s*l,l]])}e.quad(t(i,1.15,jn),t(s,1.15,jn),t(s,1.15,jn+.7),t(i,1.15,jn+.7),o(c).map(f=>-f),Et.CEIL,[[0,400],[0,400],[0,400],[0,400]]),e.tri([ct.x,jn+.7,ct.z],t(s,1.15,jn+.7),t(i,1.15,jn+.7),[0,-1,0],Et.OCULUS)}}{let n=co.ri,r=co.ro,a=co.n*co.step;for(let c=0;c<co.n;c++){let f=c*co.step,l=(c+1)*co.step,d=er(f),h=er(l),p=(c+1)*co.rise,u=c*co.rise,v=2;for(let y=0;y<v;y++){let b=d+(h-d)*y/v-(y===0?.004:0),M=d+(h-d)*(y+1)/v;e.quad(t(b,n,p),t(b,r,p),t(M,r,p),t(M,n,p),[0,1,0],Et.STEP,[[n*b,c],[r*b,c],[r*M,c],[n*M,c]])}let m=[-Math.sin(d),0,Math.cos(d)],g=d-.004;e.quad(t(g,n,u),t(g,r,u),t(g,r,p),t(g,n,p),m,Et.STEP,[[n*d,c+.5],[r*d,c+.5],[r*d,c+.5],[n*d,c+.5]]),e.quad(t(d,n,Qa(f)+.06),t(h,n,Qa(l)+.06),t(h,n,p),t(g,n,p),o((d+h)/2).map(y=>-y),Et.STEP,[[0,500],[0,500],[0,500],[0,500]])}let i=Math.ceil(a/(1.2*yo/180)),s=[n,n+.6,n+1.2,r];for(let c=0;c<i;c++){let f=c/i*a,l=(c+1)/i*a,d=er(f),h=er(l),p=Qa(f),u=Qa(l),v=p-co.thick,m=u-co.thick,g=o(d).map(C=>-C),y=o(h).map(C=>-C),b=e.v(t(d,n,v),g,Et.STRING,[f*n,0]),M=e.v(t(h,n,m),y,Et.STRING,[l*n,0]),T=e.v(t(h,n,u+.06),y,Et.STRING,[l*n,1]),L=e.v(t(d,n,p+.06),g,Et.STRING,[f*n,1]);e.idx.push(b,M,T,b,T,L);for(let C=0;C<s.length-1;C++){let D=s[C],B=s[C+1],W=Q=>{let ce=o(Q);return[-ce[0]*.12,-.99,-ce[2]*.12]};e.quad(t(d,D,v),t(d,B,v),t(h,B,m),t(h,D,m),W((d+h)/2),Et.SOFFIT,[[f*D,D],[f*B,B],[l*B,B],[l*D,D]])}}}return e}function Yw(){let e=Pv(),t=co.ri+.045,o=co.n*co.step,n=Math.ceil(o/(.8*yo/180)),r=.92,a=(c,f,l)=>[ct.x+Math.cos(c)*f,l,ct.z+Math.sin(c)*f],i=c=>[Math.cos(c),0,Math.sin(c)];for(let c=0;c<n;c++){let f=c/n*o,l=(c+1)/n*o,d=er(f),h=er(l),p=Qa(f)+.06,u=Qa(l)+.06,v=i(d).map(C=>-C),m=i(h).map(C=>-C),g=f*t,y=l*t,b=e.v(a(d,t,p),v,Et.RAILING,[g,0]),M=e.v(a(h,t,u),m,Et.RAILING,[y,0]),T=e.v(a(h,t,u+r),m,Et.RAILING,[y,r]),L=e.v(a(d,t,p+r),v,Et.RAILING,[g,r]);e.idx.push(b,M,T,b,T,L)}((c,f,l,d)=>{let p=v=>{let m=er(v),g=Qa(v)+.06+f,y=a(m,t+c,g),b=i(m),M=[];for(let T=0;T<8;T++){let L=T/8*2*yo,C=[b[0]*Math.cos(L),Math.sin(L),b[2]*Math.cos(L)];M.push([[y[0]+C[0]*l,y[1]+C[1]*l,y[2]+C[2]*l],C])}return M},u=p(0);for(let v=1;v<=n;v++){let m=p(v/n*o);for(let g=0;g<8;g++){let y=(g+1)%8,b=e.v(u[g][0],u[g][1],d),M=e.v(m[g][0],m[g][1],d),T=e.v(m[y][0],m[y][1],d),L=e.v(u[y][0],u[y][1],d);e.idx.push(b,M,T,b,T,L)}u=m}})(0,r+.02,.028,Et.IRON);for(let c of pu){let f=Math.atan2(c[2]-ct.z,c[0]-ct.x),l=[Math.cos(f),0,Math.sin(f)],d=12;for(let v=0;v<d;v++){let m=v/d*2*yo,g=(v+1)/d*2*yo,y=(b,M,T)=>[c[0]+Math.cos(b)*M,T,c[2]+Math.sin(b)*M];e.quad(y(m,.16,c[1]),y(g,.16,c[1]),y(g,.13,c[1]-.05),y(m,.13,c[1]-.05),[Math.cos(m)*.6,.8,Math.sin(m)*.6],Et.IRON),e.quad(y(m,.16,c[1]),y(g,.16,c[1]),y(g,0,c[1]+.002),y(m,0,c[1]+.002),[0,1,0],Et.IRON)}let h=[c[0]+l[0]*.16,c[1]-.35,c[2]+l[2]*.16],p=[-l[2],0,l[0]],u=.018;e.quad([h[0]-p[0]*u,h[1],h[2]-p[2]*u],[h[0]+p[0]*u,h[1],h[2]+p[2]*u],[c[0]+p[0]*u,c[1]-.05,c[2]+p[2]*u],[c[0]-p[0]*u,c[1]-.05,c[2]-p[2]*u],[-l[0],.5,-l[2]],Et.IRON)}{let c=er(0),f=a(c,t,0),l=10;for(let d=0;d<l;d++){let h=d/l*2*yo,p=(d+1)/l*2*yo,u=(v,m,g)=>[f[0]+Math.cos(v)*m,g,f[2]+Math.sin(v)*m];e.quad(u(h,.035,0),u(p,.035,0),u(p,.035,r+.1),u(h,.035,r+.1),[Math.cos((h+p)/2),0,Math.sin((h+p)/2)],Et.IRON),e.quad(u(h,.06,r+.1),u(p,.06,r+.1),u(p,.03,r+.2),u(h,.03,r+.2),[Math.cos((h+p)/2)*.8,.6,Math.sin((h+p)/2)*.8],Et.IRON)}}return e}function Kw(){let e=[],t=[],o=[],n=[];for(let a of vu){let[i,s,c,f,l,d]=a,h=e.length/3;for(let u=0;u<=7;u++){let v=u/7*2*yo+d,m=Math.cos(v),g=Math.sin(v);e.push(i+m*f,s,c+g*f,i+m*f,s+l,c+g*f),t.push(m,0,g,m,0,g),o.push(0,l,d,1,l,d)}for(let u=0;u<7;u++){let v=h+u*2;n.push(v,v+2,v+3,v,v+3,v+1)}let p=e.length/3;e.push(i,s+l-.006,c),t.push(0,1,0),o.push(2,l,d);for(let u=0;u<7;u++){let v=u/7*2*yo+d;e.push(i+Math.cos(v)*f,s+l,c+Math.sin(v)*f),t.push(0,1,0),o.push(1,l,d)}for(let u=0;u<7;u++)n.push(p,p+1+u,p+1+(u+1)%7)}return{pos:e,nrm:t,info:o,idx:n}}function Qw(){let e=[],t=[],o=[],n=[];for(let r of vu){let[a,i,s,,c,f]=r,l=e.length/3;for(let d of[[-1,0],[1,0],[1,1],[-1,1]])e.push(a,i+c+.004,s),t.push(d[0],d[1]),o.push(f);n.push(l,l+1,l+2,l,l+2,l+3)}return{ctr:e,corner:t,ph:o,idx:n}}function Zw(e){let t=new DataView(e),o=t.getUint32(4,!0),n=t.getUint32(8,!0),r=[],a=[];for(let g=0;g<3;g++)r.push(t.getFloat32(12+g*4,!0)),a.push(t.getFloat32(24+g*4,!0));let i=36,s=new Uint16Array(e,i,o*3);i+=o*6;let c=new Uint16Array(e,i,n);i+=n*2;let f=new Int8Array(e,i,o*3);i+=o*3;let l=new Uint8Array(e,i,o),d=new Float32Array(o*3),h=new Float32Array(o*3),p=new Float32Array(o),u=Math.cos(Gn.yaw),v=Math.sin(Gn.yaw),m=Gn.scale;for(let g=0;g<o;g++){let y=(r[0]+s[g*3]/65535*a[0])*m,b=(r[1]+s[g*3+1]/65535*a[1])*m,M=(r[2]+s[g*3+2]/65535*a[2])*m;d[g*3]=Gn.x+u*y+v*M,d[g*3+1]=b,d[g*3+2]=Gn.z-v*y+u*M;let T=f[g*3]/127,L=f[g*3+1]/127,C=f[g*3+2]/127;h[g*3]=u*T+v*C,h[g*3+1]=L,h[g*3+2]=-v*T+u*C,p[g]=l[g]}return{pos:d,nrm:h,mat:p,idx:new Uint32Array(c)}}function Jw(){let e=[],t=(d,h)=>[ct.x+Math.cos(d)*h,ct.z+Math.sin(d)*h];e.push([[0,We.z0],[Ka(We.z0),We.z0]]),e.push([[Ka(We.z1),We.z1],[0,We.z1]]);let o=Math.asin((We.z1-ct.z)/Nt),n=72;for(let d=0;d<n;d++){let h=o+d/n*(2*yo-2*o),p=o+(d+1)/n*(2*yo-2*o);e.push([t(h,Nt-.25),t(p,Nt-.25)])}let r=Bl[0]-.55+.35;e.push([[r,Qo.z0],[r,Qo.z1]]);let a=2.4/co.k,i=12;for(let d=0;d<i;d++){let h=er(d/i*a),p=er((d+1)/i*a);e.push([t(h,co.ri-.2),t(p,co.ri-.2)])}e.push([t(er(0),co.ri-.2),t(er(0),Nt)]),e.push([t(er(a),co.ri-.2),t(er(a),Nt)]);let s=Math.cos(Gn.yaw),c=Math.sin(Gn.yaw),f=Gn.scale,l=[[-1,-.62],[1.25,-.62],[1.25,.62],[-1,.62]].map(([d,h])=>[Gn.x+(s*d+c*h)*f,Gn.z+(-c*d+s*h)*f]);for(let d=0;d<4;d++)e.push([l[d],l[(d+1)%4]]);return e}Or.exports=e=>{let t=Xw(),o=Yw(),n=Kw(),r=Qw(),a=Ya(),i=`
	precision highp float;
	${Hw.GLSL}
	uniform float time;
	${Iv()}
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
				float r = length(q - vec2(${jo(ct.x)}, ${jo(ct.z)}));
				float a = atan(q.y - ${jo(ct.z)}, q.x - ${jo(ct.x)});
				float ring = floor(r / 0.9);
				float cnt = max(1.0, floor(6.2831 * (ring + 0.5) * 0.9 / 0.95));
				float seg = a / 6.2831 * cnt + hash(vec2(ring, 3.0)) * 7.0;
				float jr = abs(fract(r / 0.9) - 0.5), ja = abs(fract(seg) - 0.5);
				float joint = smoothstep(0.485, 0.497, max(jr, ja * (r < 0.5 ? 0.0 : 1.0)));
				if (v_pos.x > ${jo(ct.x+Nt-.4)}) {
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
				base *= 1.0 - 0.25 * smoothstep(3.0, ${jo(jn)}, v_pos.y);
			} else if (k < 2.5) {
				// the steps: a greyer, harder stone, worn paler in the middle
				float r = length(v_pos.xz - vec2(${jo(ct.x)}, ${jo(ct.z)}));
				base = limestone(v_pos.xz * 1.4 + v_uv * 0.3) * vec3(0.90, 0.88, 0.86);
				base *= 1.0 + 0.10 * (1.0 - smoothstep(0.0, 0.6, abs(r - ${jo((co.ri+co.ro)/2)})));
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
				vec2 q = v_pos.xz - vec2(${jo(ct.x)}, ${jo(ct.z)});
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
		}`,attributes:{position:n.pos,normal:n.nrm,info:n.info},elements:new Uint32Array(n.idx),cull:{enable:!1}}),d=e({vert:`
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
		}`,attributes:{ctr:r.ctr,corner:r.corner,ph:r.ph},elements:new Uint32Array(r.idx),uniforms:{halo:e.prop("halo")},depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),h=null;fetch("res/piano.bin").then(u=>{if(!u.ok)throw new Error("Could not load piano.bin");return u.arrayBuffer()}).then(u=>{let v=Zw(u);h=e({vert:`
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
				}`,attributes:{position:v.pos,normal:v.nrm,mat:v.mat},elements:v.idx,cull:{enable:!1}})}).catch(u=>console.error(u));function p(u){let v=u&&u.reflected;c(),f(),l(),h&&h(),v||(d({halo:1}),d({halo:0}))}return p};Or.exports.C=ct;Or.exports.R=Nt;Or.exports.PASS=We;Or.exports.SURR=da;Or.exports.OFF=Bl;Or.exports.BAY=Qo;Or.exports.PATH=Ul;Or.exports.PIANO=Gn;Or.exports.roomGLSL=Iv;Or.exports.segments=Jw});var Bv=pe((t8,Uv)=>{"use strict";var e4=Ri(),{addFlutedColumn:Ov,addStatue:t4,addPlant:o4}=fv(),Fv=Wa(),n4=j0(),Jr=On(),r4=Pr(),Z0=vc(),Kt=14,Jo=Jr.C.hallEnd+.35,bo=8,fo=.35,mu=1.15,gu=1.15,xu=[18,29,40],a4=[[[0,0],[0,Z0.PASS.z0]],[[0,Z0.PASS.z1],[0,Jo]],[[Kt,Jo],[Kt,0]],[[0,0],[Kt,0]],[[Kt,Jo],[0,Jo]]],qv=[];for(let e of xu)for(let t of[1.25,Kt-1.25]){let o=mu/2,n=gu/2;qv.push([[t-o,e-n],[t+o,e-n]],[[t+o,e-n],[t+o,e+n]],[[t+o,e+n],[t-o,e+n]],[[t-o,e+n],[t-o,e-n]])}var Vl=12,Hv=2.95,jv=.62,Kl=Hv+jv,Xl=[{file:"venus.bin",x:1.85,z:Jo-1.6,yaw:2.67,height:5.2,pedestal:!0,mat:1},{file:"david.bin",x:Kt-2.1,z:Jo-1.6,yaw:-2.67,height:5.2,pedestal:!0,mat:1},{file:"pieta.bin",x:1.75,z:5.9,yaw:Math.PI/2,height:3.6,base:1,mat:1},{file:"spinario.bin",x:Jr.NICHE_X[0],z:Jr.NICHE_STATUE_Z,yaw:-.35,height:1.85,base:Jr.NICHE_PLINTH_TOP,mat:3},{file:"charioteer.bin",x:Jr.NICHE_X[1],z:Jr.NICHE_STATUE_Z+.1,yaw:0,height:2.95,base:Jr.NICHE_PLINTH_TOP,mat:3}],i4={x0:fo,x1:3.15,z0:3.6,z1:8.2,top:1},Gv=.8,Ql=1.17,mc=[];[{z:10.4,dz:-.7},{z:19.2,dz:.7},{z:27.8,dz:-.7}].forEach((e,t)=>{mc.push({x:1,z:e.z,seed:11+t*7,away:[1,e.dz]}),mc.push({x:Kt-1,z:e.z,seed:53+t*5,away:[-1,e.dz]})});function yu(e,t,o,n){return[[[e-o,t-n],[e+o,t-n]],[[e+o,t-n],[e+o,t+n]],[[e+o,t+n],[e-o,t+n]],[[e-o,t+n],[e-o,t-n]]]}var Zl=[];for(let e of[-1,1])Zl.push(...yu(Kt/2+e*Kl,Vl,.85,.85));for(let e of Xl.filter(t=>t.pedestal))Zl.push(...yu(e.x,e.z,Ql*1.1,Ql*1.1));for(let e of mc)Zl.push(...yu(e.x,e.z,.42,.42));var s4=a4.concat(qv,Zl,Z0.segments());function c4(e){let o=new Map,n=(r,a,i)=>{let s=r+":"+a;o.has(s)||o.set(s,[]);let c=o.get(s);c.includes(i)||c.push(i)};for(let r of e){let a=Math.floor(Math.min(r[0][0],r[1][0])/4)-1,i=Math.floor(Math.max(r[0][0],r[1][0])/4)+1,s=Math.floor(Math.min(r[0][1],r[1][1])/4)-1,c=Math.floor(Math.max(r[0][1],r[1][1])/4)+1;for(let f=a;f<=i;f++)for(let l=s;l<=c;l++)n(f,l,r)}return{get(r,a){let i=Math.floor(r/4),s=Math.floor(a/4),c=[];for(let f=-1;f<=1;f++)for(let l=-1;l<=1;l++){let d=o.get(i+f+":"+(s+l));d&&c.push(...d)}return[...new Set(c)]}}}var Yl=[],Zo={curMat:[0,0,0]};function bu(e,t,o,n,r,a,i){let s=e.length/3;e.push(...o,...n,...r,...a),t.push(...i,...i,...i,...i);let c=Zo.curMat;return Yl.push(...c,...c,...c,...c),[s,s+2,s+1,s+1,s+2,s+3]}function lo(e,t,o,n,r,a,i,s,c){let f=(l,d,h,p,u)=>{o.push(...bu(e,t,l,d,h,p,u))};f([n,r,a],[i,r,a],[n,s,a],[i,s,a],[0,0,-1]),f([i,r,c],[n,r,c],[i,s,c],[n,s,c],[0,0,1]),f([n,r,c],[n,r,a],[n,s,c],[n,s,a],[-1,0,0]),f([i,r,a],[i,r,c],[i,s,a],[i,s,c],[1,0,0]),f([n,s,a],[i,s,a],[n,s,c],[i,s,c],[0,1,0]),f([n,r,c],[i,r,c],[n,r,a],[i,r,a],[0,-1,0])}function Q0(e,t,o,n,r){let a=Zo,i=a.vert(e,r),s=a.vert(t,r),c=a.vert(o,r),f=a.vert(n,r);a.tri(i,s,c),a.tri(s,f,c)}function $v(e,t,o,n,r,a,i){for(let s=0;s<i;s++){let c=Math.PI*s/i,f=Math.PI*(s+1)/i,l=Math.cos(c),d=Math.sin(c),h=Math.cos(f),p=Math.sin(f),u=[e+o*l,t+o*d],v=[e+o*h,t+o*p],m=[e+n*l,t+n*d],g=[e+n*h,t+n*p];Q0([u[0],u[1],r],[v[0],v[1],r],[m[0],m[1],r],[g[0],g[1],r],[0,0,-1]),Q0([u[0],u[1],a],[v[0],v[1],a],[m[0],m[1],a],[g[0],g[1],a],[0,0,1]);let y=(c+f)/2;Q0([u[0],u[1],r],[v[0],v[1],r],[u[0],u[1],a],[v[0],v[1],a],[-Math.cos(y),-Math.sin(y),0]),Q0([m[0],m[1],r],[g[0],g[1],r],[m[0],m[1],a],[g[0],g[1],a],[Math.cos(y),Math.sin(y),0])}}function l4(e,t,o,n,r,a,i){for(let s=0;s<i;s++){let c=Math.PI*s/i,f=Math.PI*(s+1)/i,l=e+o*Math.cos(c),d=t+o*Math.sin(c),h=e+o*Math.cos(f),p=t+o*Math.sin(f);Q0([l,d,r],[h,p,r],[l,n,r],[h,n,r],[0,0,-1]),Q0([l,d,a],[h,p,a],[l,n,a],[h,n,a],[0,0,1])}}function f4(e,t,o,n){let r=Kt/2,a=Hv,i=3,s=a+.42,c=s+.15,f=jv,l=Kl,d=5.98,h=n-.45,p=n+.45,u=64,v=Ov(Zo,r-l,n,0,d,f);Ov(Zo,r+l,n,0,d,f),Zo.curMat=[0,0,0],$v(r,i,a,s,h,p,u),$v(r,i,s,c,h-.07,p+.07,u),l4(r,i,c,v+.05,h,p,u);for(let g of[-1,1]){let y=r+g*(c-.02),b=r+g*l;lo(e,t,o,Math.min(y,b),i,h,Math.max(y,b),v+.05,p)}for(let g of[-1,1]){let y=r+g*(a-.05),b=r+g*(a+.85);lo(e,t,o,Math.min(y,b),i-.16,n-.6,Math.max(y,b),i,n+.6)}let m=l+f*1.42+.45;lo(e,t,o,r-m,v,n-.7,r+m,v+.44,n+.7),lo(e,t,o,r-m+.12,v+.44,n-.62,r+m-.12,v+.7,n+.62),lo(e,t,o,r-m-.1,v+.7,n-.84,r+m+.1,v+.84,n+.84),lo(e,t,o,r-m-.22,v+.84,n-.96,r+m+.22,v+1,n+.96),lo(e,t,o,r-.3,i+a-.1,n-.56,r+.3,v,n+.56)}function Dv(e,t,o,n,r){lo(e,t,o,n-.72,0,r-.72,n+.72,.2,r+.72),lo(e,t,o,n-.58,.2,r-.58,n+.58,.4,r+.58),lo(e,t,o,n-mu/2,.4,r-gu/2,n+mu/2,bo-1.35,r+gu/2),lo(e,t,o,n-.67,.42,r-.67,n+.67,.62,r+.67),lo(e,t,o,n-.67,bo-1.58,r-.67,n+.67,bo-1.35,r+.67),lo(e,t,o,n-.82,bo-1.35,r-.82,n+.82,bo-1.05,r+.82),lo(e,t,o,n-.66,bo-1.05,r-.66,n+.66,bo-.78,r+.66),lo(e,t,o,n-.92,bo-.78,r-.92,n+.92,bo-.55,r+.92),lo(e,t,o,n-.78,bo-.55,r-.78,n+.78,bo-.3,r+.78),lo(e,t,o,n-.92,bo-.3,r-.92,n+.92,bo-.1,r+.92)}function Wl(e,t,o,n,r){r==="left"?(lo(e,t,o,-.08,1,n-3.8/2,.14,5.7,n+3.8/2),lo(e,t,o,-.08-.04,1+.18,n-3.8/2+.18,.18,5.7-.18,n+3.8/2-.18)):(lo(e,t,o,Kt-.14,1,n-3.8/2,Kt+.08,5.7,n+3.8/2),lo(e,t,o,Kt-.18,1+.18,n-3.8/2+.18,Kt+.08+.04,5.7-.18,n+3.8/2-.18))}function h4(e,t,o,n){lo(e,t,o,.65,bo-.16,n-1.65,.65+.22,bo,n+1.65),lo(e,t,o,Kt-.65-.22,bo-.16,n-1.65,Kt-.65,bo,n+1.65),lo(e,t,o,.65,bo-.16,n-1.65,Kt-.65,bo,n-1.43),lo(e,t,o,.65,bo-.16,n+1.43,Kt-.65,bo,n+1.65),o.push(...bu(e,t,[.65+.22,bo-.16,n-1.43],[Kt-.65-.22,bo-.16,n-1.43],[.65+.22,bo-.16,n+1.43],[Kt-.65-.22,bo-.16,n+1.43],[0,-1,0]))}Uv.exports=function(){let e=[],t=[],o=[];Yl=[],Zo=e4.createBuilder(e,t,o,Yl),o.push(...bu(e,t,[0,0,0],[Kt,0,0],[0,0,Jo],[Kt,0,Jo],[0,1,0])),n4.addSkylight(Zo,[0,0,0],Jo),Zo.curMat=[0,0,0];{let c=Z0.SURR;lo(e,t,o,-fo,0,0,fo,bo,c.z0),lo(e,t,o,-fo,0,c.z1,fo,bo,Jo),lo(e,t,o,-fo,c.top,c.z0,fo,bo,c.z1)}lo(e,t,o,Kt-fo,0,Jr.C.z1,Kt+fo,bo,Jo-fo),lo(e,t,o,Kt-fo-.12,0,Jr.C.z1+2*fo,Kt-fo,.42,Jo-fo),lo(e,t,o,Kt-fo-.07,.42,Jr.C.z1+2*fo,Kt-fo,.5,Jo-fo);for(let[c,f]of[[0,Z0.SURR.z0],[Z0.SURR.z1,Jo-fo]])lo(e,t,o,fo,0,c,fo+.12,.42,f),lo(e,t,o,fo,.42,c,fo+.07,.5,f);lo(e,t,o,fo,0,Jo-fo-.12,Kt-fo,.42,Jo-fo),lo(e,t,o,fo,.42,Jo-fo-.07,Kt-fo,.5,Jo-fo),Fv.addEntranceWall(Zo),Fv.addFrames(Zo),Zo.curMat=[0,0,0],lo(e,t,o,-fo,0,Jo-fo,Kt+fo,bo,Jo+fo),f4(e,t,o,Vl);for(let c of xu)Dv(e,t,o,1.25,c),Dv(e,t,o,Kt-1.25,c);Wl(e,t,o,22,"left"),Wl(e,t,o,25,"right"),Wl(e,t,o,33,"left"),Wl(e,t,o,36,"right");let n=[4,9,34,39,44,49];for(let c of n)h4(e,t,o,c);Jr.addWing(Zo),Zo.curMat=[0,0,0];for(let c of Xl.filter(f=>f.pedestal))t4(Zo,c.x,c.z,Ql,Gv);{let c=i4;Zo.curMat=[0,0,0],Zo.box(c.x0,0,c.z0-.08,c.x1+.08,.16,c.z1+.08,[0,0,0]),Zo.box(c.x0,.16,c.z0+.04,c.x1-.04,c.top-.14,c.z1-.04,[0,0,0]),Zo.box(c.x0,c.top-.14,c.z0-.02,c.x1+.03,c.top-.06,c.z1+.02,[0,0,0]),Zo.box(c.x0,c.top-.06,c.z0-.06,c.x1+.07,c.top,c.z1+.06,[0,0,0])}r4.addAlcove(Zo);for(let c of mc)o4(Zo,c.x,c.z,c.seed,1,c.away);Zo.curMat=[0,0,0];let r=[[[Kt,Jo-.35],[0,Jo-.35]],[[0,3],[0,10]],[[Kt,15],[Kt,22]],[[0,24],[0,31]],[[Kt,33],[Kt,40]],[[0,41],[0,46]]],a=c4(s4),i=(c,f)=>{let l=0,d=1/0;return r.forEach((h,p)=>{let u=(h[0][0]+h[1][0])/2,v=(h[0][1]+h[1][1])/2,m=Math.hypot(c-u,f-v);m<d&&(d=m,l=p)}),l},s=[];for(let c=0;c<10;c++)s.push({c:[0,0,0,0],d:[1,0,0,0]});return{placements:r,lights:s,statues:Xl,occluders:[...xu.flatMap(c=>[[1.25,c,.78],[Kt-1.25,c,.78]]),[Kt/2-Kl,Vl,.86],[Kt/2+Kl,Vl,.86],...Xl.filter(c=>c.pedestal).map(c=>[c.x,c.z,Ql*1.12]),...mc.map(c=>[c.x,c.z,.34])],pedestalTop:Gv,mat:Yl,getAreaIndex:i,getGridSegments:(c,f)=>a.get(c,f),getGridParts:(c,f)=>a.get(c,f),position:e,normal:t,elements:o}}});var wu=pe((o8,Wv)=>{"use strict";var{doorLightGLSL:u4}=Wa(),{skylightGLSL:d4}=j0(),{windowLightGLSL:p4,C:yr}=On(),{alcoveLightGLSL:v4}=Pr(),Fr=e=>e.toFixed(4),m4=(()=>{let e=[-.22,.6,-.77],t=Math.hypot(e[0],e[1],e[2]);return e.map(o=>(o/t).toFixed(4)).join(", ")})();Wv.exports=(e,t,o,n)=>{let a=(t.occluders||[]).slice(0,24).map(([p,u,v])=>`ao = min(ao, contact(v_pos.xz, vec2(${p.toFixed(3)}, ${u.toFixed(3)}), ${v.toFixed(3)}));`).join(`
      `),i={c:[0,0,0,0],d:[1,0,0,0]},s=-1,c=[],f=p=>{let u=p&&p.tick!==void 0?p.tick:0;if(u!==s||c.length===0){s=u;let v=t.viewer||[7,2,20];for(c=t.lights.filter(m=>m.c[3]>.5).map(m=>({l:m,d:Math.hypot(m.c[0]-v[0],m.c[2]-v[2])})).sort((m,g)=>m.d-g.d).slice(0,8).map(m=>m.l);c.length<8;)c.push(i)}return c},l={},d="",h="";for(let p=0;p<8;p++)l["lightC"+p]=u=>f(u)[p].c,l["lightD"+p]=u=>f(u)[p].d,d+="uniform vec4 lightC"+p+", lightD"+p+`;
`,h+="pic += pictureLight(lightC"+p+", lightD"+p+`, v_pos, N);
`;return e({frag:`
    precision highp float;

    uniform float yScale;
    uniform float mirrorOn;
    uniform float night;   // 0 by day, 1 at night
    uniform float time;
    ${Ya().lanternGLSL()}

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

    ${u4()}

    ${d4()}

    ${p4()}

    ${v4()}

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
        step(abs(v_pos.z - ${Fr(yr.hallEnd)}), 0.02) * step(0.5, -N.z) +
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
                 + exp(-pow((v_pos.z - ${Fr((yr.z0+yr.z1)/2)}) / 1.3, 2.0)) * step(14.0, v_pos.x);
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
      light += (1.0 - smoothstep(2.0, 16.0, abs(v_pos.z - ${Fr(yr.hallEnd-1.6)}))) * 0.09 * (1.0 - smoothstep(14.5, 18.0, v_pos.x));

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
          float through = doorLight(v_pos, vec3(${m4}));
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
        if (v_pos.x < 14.0) wallD = min(wallD, ${Fr(yr.hallEnd)} - v_pos.z);
        if (v_pos.x < 14.0 && (v_pos.z < ${Fr(yr.z0)} || v_pos.z > ${Fr(yr.z1)})) wallD = min(wallD, 13.65 - v_pos.x);
        if (v_pos.x > 13.65 && v_pos.z > ${Fr(yr.z0-1)}) wallD = min(min(min(wallD, v_pos.z - ${Fr(yr.z0)}), ${Fr(yr.z1)} - v_pos.z), ${Fr(yr.x1)} - v_pos.x);
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
        if (v_pos.z < ${Fr(yr.z0+.3)} && v_pos.x > ${Fr(yr.x0)}) {
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
    }`,attributes:{position:t.position,normal:t.normal,a_mat:t.mat},uniforms:l,blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},elements:new Uint32Array(t.elements),offset:n?e.prop("offset"):0,count:n?e.prop("count"):t.elements.length})}});var Xv=pe((n8,Vv)=>{"strict mode";var g4="https://api.artic.edu/api/v1/artworks/search",x4=({image_id:e},t)=>`https://www.artic.edu/iiif/2/${e}/full/${t},/0/default.jpg`,y4="?query[bool][must][][term][classification_titles.keyword]=painting&query[bool][must][][term][is_public_domain]=true",b4="&fields=image_id,title,artist_title",w4={low:400,mid:843,high:1686};Vv.exports={fetchList:async function(e,t){let o=g4+y4+b4+`&from=${e}&size=${t}`;return(await fetch(o).then(r=>r.json())).data.filter(r=>r.image_id)},fetchImage:async function(e,t){let o=x4(e,w4[t]),n=await fetch(o).then(r=>r.blob());return{title:e.title+" - "+e.artist_title,image:n}}}});var Qv=pe((r8,Kv)=>{"use strict";var _4=jh(),M4=Cr(),E4=e=>"images/web/"+e.slug+(M4.isPhone?"-1024":"")+".webp";async function Yv(e){let t=await fetch(e);if(!t.ok)throw new Error("Could not load "+e);return t.blob()}Kv.exports={fetchList:async function(e,t){return _4.slice(e,e+t).map((o,n)=>({...o,image_id:e+n}))},fetchImage:async function(e){let t;try{t=await Yv(E4(e))}catch(o){t=await Yv("images/"+e.file)}return{title:e.title,image:t}}}});var Jv=pe((a8,Zv)=>{"strict mode";Zv.exports={default:"local",artic:Xv(),local:Qv()}});var Mu=pe((i8,tm)=>{"strict mode";var Gi=document.createElement("canvas"),_u=Gi.width=Gi.height=1024,Za=Gi.getContext("2d");Za.mozImageSmoothingEnabled=!1;Za.webkitImageSmoothingEnabled=!1;Za.font="32px Verdana";Za.textBaseline="bottom";Za.fillStyle="#aaa";function em(e,t,o,n){var r=t,a,i=0,s=0,c=t.split(" "),f,l;for(f=l=c.length;e.measureText(r).width>o&&f>1;){f--,r=a="";for(var d=0;d<l;d++)d<f?(r+=c[d],d+1<f&&(r+=" ")):(a+=c[d],d+1<l&&(a+=" "))}return n.push(r),s=e.measureText(r).width,a&&(i=em(e,a,o,n),i>s&&(s=i)),s}tm.exports={init(e,t,o=_u){var n=[];em(Za,t,Math.min(o*_u,_u),n),Za.clearRect(0,0,Gi.width,Gi.height);for(var r=0;r<n.length;r++)Za.fillText(n[r],0,Gi.height-(Math.max(n.length,3)-r)*32);return e({data:Gi,min:"mipmap",mipmap:"nice",flipY:!0})},draw(e){return e({frag:`
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
            }`,attributes:{pos:[0,0,1,0,0,1,1,1,0,1,1,0]},uniforms:{model:e.prop("textmodel"),tex:e.prop("text")},count:6,blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}})}}});var rm=pe((s8,nm)=>{"strict mode";var Eu=Jv(),S4=new URLSearchParams(window.location.search).get("api"),om=Eu[S4]||Eu[Eu.default],A4=Mu(),Su={},es=[],k4=2;function T4(e){return(!navigator.connection||navigator.connection.downlink<k4)&&(e=e=="high"?"mid":"low"),e}var L4=Cr(),J0=document.createElement("canvas");J0.width=J0.height=L4.isPhone?1024:2048;var Tu=J0.getContext("2d");Tu.imageSmoothingEnabled=!0;Tu.imageSmoothingQuality="high";var Au=!1,z4=e=>[(es.pop()||e.texture)([[[200,200,200]]]),t=>(es.pop()||e.texture)([[[0,0,0,0]]]),1];async function ku(e,t,o){Au===!1&&(Au=e.hasExtension("EXT_texture_filter_anisotropic")?e._gl.getParameter(e._gl.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0);let n,r;try{let a=await om.fetchImage(t,T4(o));r=a.title,n=await createImageBitmap(a.image),Tu.drawImage(n,0,0,J0.width,J0.height)}catch(a){return console.error(a),o=="high"?await ku(e,t,"low"):z4(e)}return[(es.pop()||e.texture)({data:J0,min:"mipmap",mipmap:"nice",aniso:Au,flipY:!0}),a=>A4.init(es.pop()||e.texture,r,a),n.width/n.height]}nm.exports={fetch:(e,t=10,o="low",n,r)=>{let a=Object.keys(Su).length;om.fetchList(a,t).then(i=>{t=i.length,i.map(s=>{if(Su[s.image_id]){--t===0&&r();return}Su[s.image_id]=s,ku(e,s,o).then(([c,f,l])=>{n({...s,tex:c,textGen:f,aspect:l}),--t===0&&r()})})})},load:(e,t,o="low")=>{t.tex||t.loading||(t.loading=!0,ku(e,t,o).then(([n,r])=>{t.loading=!1,t.tex=n,t.text=r(t.width)}))},unload:e=>{e.tex&&(es.push(e.tex),e.tex=void 0),e.text&&(es.push(e.text),e.text=void 0)}}});var im=pe((c8,am)=>{am.exports=N4;function N4(){var e=new Float32Array(16);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var cm=pe((l8,sm)=>{sm.exports=C4;function C4(e){var t=new Float32Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var fm=pe((f8,lm)=>{lm.exports=R4;function R4(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var Lu=pe((h8,hm)=>{hm.exports=I4;function I4(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var dm=pe((u8,um)=>{um.exports=P4;function P4(e,t){if(e===t){var o=t[1],n=t[2],r=t[3],a=t[6],i=t[7],s=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=o,e[6]=t[9],e[7]=t[13],e[8]=n,e[9]=a,e[11]=t[14],e[12]=r,e[13]=i,e[14]=s}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e}});var vm=pe((d8,pm)=>{pm.exports=O4;function O4(e,t){var o=t[0],n=t[1],r=t[2],a=t[3],i=t[4],s=t[5],c=t[6],f=t[7],l=t[8],d=t[9],h=t[10],p=t[11],u=t[12],v=t[13],m=t[14],g=t[15],y=o*s-n*i,b=o*c-r*i,M=o*f-a*i,T=n*c-r*s,L=n*f-a*s,C=r*f-a*c,D=l*v-d*u,B=l*m-h*u,W=l*g-p*u,Q=d*m-h*v,ce=d*g-p*v,ee=h*g-p*m,te=y*ee-b*ce+M*Q+T*W-L*B+C*D;return te?(te=1/te,e[0]=(s*ee-c*ce+f*Q)*te,e[1]=(r*ce-n*ee-a*Q)*te,e[2]=(v*C-m*L+g*T)*te,e[3]=(h*L-d*C-p*T)*te,e[4]=(c*W-i*ee-f*B)*te,e[5]=(o*ee-r*W+a*B)*te,e[6]=(m*M-u*C-g*b)*te,e[7]=(l*C-h*M+p*b)*te,e[8]=(i*ce-s*W+f*D)*te,e[9]=(n*W-o*ce-a*D)*te,e[10]=(u*L-v*M+g*y)*te,e[11]=(d*M-l*L-p*y)*te,e[12]=(s*B-i*Q-c*D)*te,e[13]=(o*Q-n*B+r*D)*te,e[14]=(v*b-u*T-m*y)*te,e[15]=(l*T-d*b+h*y)*te,e):null}});var gm=pe((p8,mm)=>{mm.exports=F4;function F4(e,t){var o=t[0],n=t[1],r=t[2],a=t[3],i=t[4],s=t[5],c=t[6],f=t[7],l=t[8],d=t[9],h=t[10],p=t[11],u=t[12],v=t[13],m=t[14],g=t[15];return e[0]=s*(h*g-p*m)-d*(c*g-f*m)+v*(c*p-f*h),e[1]=-(n*(h*g-p*m)-d*(r*g-a*m)+v*(r*p-a*h)),e[2]=n*(c*g-f*m)-s*(r*g-a*m)+v*(r*f-a*c),e[3]=-(n*(c*p-f*h)-s*(r*p-a*h)+d*(r*f-a*c)),e[4]=-(i*(h*g-p*m)-l*(c*g-f*m)+u*(c*p-f*h)),e[5]=o*(h*g-p*m)-l*(r*g-a*m)+u*(r*p-a*h),e[6]=-(o*(c*g-f*m)-i*(r*g-a*m)+u*(r*f-a*c)),e[7]=o*(c*p-f*h)-i*(r*p-a*h)+l*(r*f-a*c),e[8]=i*(d*g-p*v)-l*(s*g-f*v)+u*(s*p-f*d),e[9]=-(o*(d*g-p*v)-l*(n*g-a*v)+u*(n*p-a*d)),e[10]=o*(s*g-f*v)-i*(n*g-a*v)+u*(n*f-a*s),e[11]=-(o*(s*p-f*d)-i*(n*p-a*d)+l*(n*f-a*s)),e[12]=-(i*(d*m-h*v)-l*(s*m-c*v)+u*(s*h-c*d)),e[13]=o*(d*m-h*v)-l*(n*m-r*v)+u*(n*h-r*d),e[14]=-(o*(s*m-c*v)-i*(n*m-r*v)+u*(n*c-r*s)),e[15]=o*(s*h-c*d)-i*(n*h-r*d)+l*(n*c-r*s),e}});var ym=pe((v8,xm)=>{xm.exports=G4;function G4(e){var t=e[0],o=e[1],n=e[2],r=e[3],a=e[4],i=e[5],s=e[6],c=e[7],f=e[8],l=e[9],d=e[10],h=e[11],p=e[12],u=e[13],v=e[14],m=e[15],g=t*i-o*a,y=t*s-n*a,b=t*c-r*a,M=o*s-n*i,T=o*c-r*i,L=n*c-r*s,C=f*u-l*p,D=f*v-d*p,B=f*m-h*p,W=l*v-d*u,Q=l*m-h*u,ce=d*m-h*v;return g*ce-y*Q+b*W+M*B-T*D+L*C}});var wm=pe((m8,bm)=>{bm.exports=$4;function $4(e,t,o){var n=t[0],r=t[1],a=t[2],i=t[3],s=t[4],c=t[5],f=t[6],l=t[7],d=t[8],h=t[9],p=t[10],u=t[11],v=t[12],m=t[13],g=t[14],y=t[15],b=o[0],M=o[1],T=o[2],L=o[3];return e[0]=b*n+M*s+T*d+L*v,e[1]=b*r+M*c+T*h+L*m,e[2]=b*a+M*f+T*p+L*g,e[3]=b*i+M*l+T*u+L*y,b=o[4],M=o[5],T=o[6],L=o[7],e[4]=b*n+M*s+T*d+L*v,e[5]=b*r+M*c+T*h+L*m,e[6]=b*a+M*f+T*p+L*g,e[7]=b*i+M*l+T*u+L*y,b=o[8],M=o[9],T=o[10],L=o[11],e[8]=b*n+M*s+T*d+L*v,e[9]=b*r+M*c+T*h+L*m,e[10]=b*a+M*f+T*p+L*g,e[11]=b*i+M*l+T*u+L*y,b=o[12],M=o[13],T=o[14],L=o[15],e[12]=b*n+M*s+T*d+L*v,e[13]=b*r+M*c+T*h+L*m,e[14]=b*a+M*f+T*p+L*g,e[15]=b*i+M*l+T*u+L*y,e}});var Mm=pe((g8,_m)=>{_m.exports=D4;function D4(e,t,o){var n=o[0],r=o[1],a=o[2],i,s,c,f,l,d,h,p,u,v,m,g;return t===e?(e[12]=t[0]*n+t[4]*r+t[8]*a+t[12],e[13]=t[1]*n+t[5]*r+t[9]*a+t[13],e[14]=t[2]*n+t[6]*r+t[10]*a+t[14],e[15]=t[3]*n+t[7]*r+t[11]*a+t[15]):(i=t[0],s=t[1],c=t[2],f=t[3],l=t[4],d=t[5],h=t[6],p=t[7],u=t[8],v=t[9],m=t[10],g=t[11],e[0]=i,e[1]=s,e[2]=c,e[3]=f,e[4]=l,e[5]=d,e[6]=h,e[7]=p,e[8]=u,e[9]=v,e[10]=m,e[11]=g,e[12]=i*n+l*r+u*a+t[12],e[13]=s*n+d*r+v*a+t[13],e[14]=c*n+h*r+m*a+t[14],e[15]=f*n+p*r+g*a+t[15]),e}});var Sm=pe((x8,Em)=>{Em.exports=q4;function q4(e,t,o){var n=o[0],r=o[1],a=o[2];return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*r,e[5]=t[5]*r,e[6]=t[6]*r,e[7]=t[7]*r,e[8]=t[8]*a,e[9]=t[9]*a,e[10]=t[10]*a,e[11]=t[11]*a,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var km=pe((y8,Am)=>{Am.exports=H4;function H4(e,t,o,n){var r=n[0],a=n[1],i=n[2],s=Math.sqrt(r*r+a*a+i*i),c,f,l,d,h,p,u,v,m,g,y,b,M,T,L,C,D,B,W,Q,ce,ee,te,Ke;return Math.abs(s)<1e-6?null:(s=1/s,r*=s,a*=s,i*=s,c=Math.sin(o),f=Math.cos(o),l=1-f,d=t[0],h=t[1],p=t[2],u=t[3],v=t[4],m=t[5],g=t[6],y=t[7],b=t[8],M=t[9],T=t[10],L=t[11],C=r*r*l+f,D=a*r*l+i*c,B=i*r*l-a*c,W=r*a*l-i*c,Q=a*a*l+f,ce=i*a*l+r*c,ee=r*i*l+a*c,te=a*i*l-r*c,Ke=i*i*l+f,e[0]=d*C+v*D+b*B,e[1]=h*C+m*D+M*B,e[2]=p*C+g*D+T*B,e[3]=u*C+y*D+L*B,e[4]=d*W+v*Q+b*ce,e[5]=h*W+m*Q+M*ce,e[6]=p*W+g*Q+T*ce,e[7]=u*W+y*Q+L*ce,e[8]=d*ee+v*te+b*Ke,e[9]=h*ee+m*te+M*Ke,e[10]=p*ee+g*te+T*Ke,e[11]=u*ee+y*te+L*Ke,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}});var Lm=pe((b8,Tm)=>{Tm.exports=j4;function j4(e,t,o){var n=Math.sin(o),r=Math.cos(o),a=t[4],i=t[5],s=t[6],c=t[7],f=t[8],l=t[9],d=t[10],h=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=a*r+f*n,e[5]=i*r+l*n,e[6]=s*r+d*n,e[7]=c*r+h*n,e[8]=f*r-a*n,e[9]=l*r-i*n,e[10]=d*r-s*n,e[11]=h*r-c*n,e}});var Nm=pe((w8,zm)=>{zm.exports=U4;function U4(e,t,o){var n=Math.sin(o),r=Math.cos(o),a=t[0],i=t[1],s=t[2],c=t[3],f=t[8],l=t[9],d=t[10],h=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*r-f*n,e[1]=i*r-l*n,e[2]=s*r-d*n,e[3]=c*r-h*n,e[8]=a*n+f*r,e[9]=i*n+l*r,e[10]=s*n+d*r,e[11]=c*n+h*r,e}});var Rm=pe((_8,Cm)=>{Cm.exports=B4;function B4(e,t,o){var n=Math.sin(o),r=Math.cos(o),a=t[0],i=t[1],s=t[2],c=t[3],f=t[4],l=t[5],d=t[6],h=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*r+f*n,e[1]=i*r+l*n,e[2]=s*r+d*n,e[3]=c*r+h*n,e[4]=f*r-a*n,e[5]=l*r-i*n,e[6]=d*r-s*n,e[7]=h*r-c*n,e}});var Pm=pe((M8,Im)=>{Im.exports=W4;function W4(e,t,o){var n,r,a,i=o[0],s=o[1],c=o[2],f=Math.sqrt(i*i+s*s+c*c);return Math.abs(f)<1e-6?null:(f=1/f,i*=f,s*=f,c*=f,n=Math.sin(t),r=Math.cos(t),a=1-r,e[0]=i*i*a+r,e[1]=s*i*a+c*n,e[2]=c*i*a-s*n,e[3]=0,e[4]=i*s*a-c*n,e[5]=s*s*a+r,e[6]=c*s*a+i*n,e[7]=0,e[8]=i*c*a+s*n,e[9]=s*c*a-i*n,e[10]=c*c*a+r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e)}});var Fm=pe((E8,Om)=>{Om.exports=V4;function V4(e,t,o){var n=t[0],r=t[1],a=t[2],i=t[3],s=n+n,c=r+r,f=a+a,l=n*s,d=n*c,h=n*f,p=r*c,u=r*f,v=a*f,m=i*s,g=i*c,y=i*f;return e[0]=1-(p+v),e[1]=d+y,e[2]=h-g,e[3]=0,e[4]=d-y,e[5]=1-(l+v),e[6]=u+m,e[7]=0,e[8]=h+g,e[9]=u-m,e[10]=1-(l+p),e[11]=0,e[12]=o[0],e[13]=o[1],e[14]=o[2],e[15]=1,e}});var $m=pe((S8,Gm)=>{Gm.exports=X4;function X4(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var qm=pe((A8,Dm)=>{Dm.exports=Y4;function Y4(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}});var jm=pe((k8,Hm)=>{Hm.exports=K4;function K4(e,t){var o=Math.sin(t),n=Math.cos(t);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=n,e[6]=o,e[7]=0,e[8]=0,e[9]=-o,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var Bm=pe((T8,Um)=>{Um.exports=Q4;function Q4(e,t){var o=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=0,e[2]=-o,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=o,e[9]=0,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var Vm=pe((L8,Wm)=>{Wm.exports=Z4;function Z4(e,t){var o=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=o,e[2]=0,e[3]=0,e[4]=-o,e[5]=n,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var Ym=pe((z8,Xm)=>{Xm.exports=J4;function J4(e,t){var o=t[0],n=t[1],r=t[2],a=t[3],i=o+o,s=n+n,c=r+r,f=o*i,l=n*i,d=n*s,h=r*i,p=r*s,u=r*c,v=a*i,m=a*s,g=a*c;return e[0]=1-d-u,e[1]=l+g,e[2]=h-m,e[3]=0,e[4]=l-g,e[5]=1-f-u,e[6]=p+v,e[7]=0,e[8]=h+m,e[9]=p-v,e[10]=1-f-d,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var Qm=pe((N8,Km)=>{Km.exports=e_;function e_(e,t,o,n,r,a,i){var s=1/(o-t),c=1/(r-n),f=1/(a-i);return e[0]=a*2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a*2*c,e[6]=0,e[7]=0,e[8]=(o+t)*s,e[9]=(r+n)*c,e[10]=(i+a)*f,e[11]=-1,e[12]=0,e[13]=0,e[14]=i*a*2*f,e[15]=0,e}});var Jm=pe((C8,Zm)=>{Zm.exports=t_;function t_(e,t,o,n,r){var a=1/Math.tan(t/2),i=1/(n-r);return e[0]=a/o,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(r+n)*i,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*r*n*i,e[15]=0,e}});var t2=pe((R8,e2)=>{e2.exports=o_;function o_(e,t,o,n){var r=Math.tan(t.upDegrees*Math.PI/180),a=Math.tan(t.downDegrees*Math.PI/180),i=Math.tan(t.leftDegrees*Math.PI/180),s=Math.tan(t.rightDegrees*Math.PI/180),c=2/(i+s),f=2/(r+a);return e[0]=c,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=f,e[6]=0,e[7]=0,e[8]=-((i-s)*c*.5),e[9]=(r-a)*f*.5,e[10]=n/(o-n),e[11]=-1,e[12]=0,e[13]=0,e[14]=n*o/(o-n),e[15]=0,e}});var n2=pe((I8,o2)=>{o2.exports=n_;function n_(e,t,o,n,r,a,i){var s=1/(t-o),c=1/(n-r),f=1/(a-i);return e[0]=-2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*c,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*f,e[11]=0,e[12]=(t+o)*s,e[13]=(r+n)*c,e[14]=(i+a)*f,e[15]=1,e}});var a2=pe((P8,r2)=>{var r_=Lu();r2.exports=a_;function a_(e,t,o,n){var r,a,i,s,c,f,l,d,h,p,u=t[0],v=t[1],m=t[2],g=n[0],y=n[1],b=n[2],M=o[0],T=o[1],L=o[2];return Math.abs(u-M)<1e-6&&Math.abs(v-T)<1e-6&&Math.abs(m-L)<1e-6?r_(e):(l=u-M,d=v-T,h=m-L,p=1/Math.sqrt(l*l+d*d+h*h),l*=p,d*=p,h*=p,r=y*h-b*d,a=b*l-g*h,i=g*d-y*l,p=Math.sqrt(r*r+a*a+i*i),p?(p=1/p,r*=p,a*=p,i*=p):(r=0,a=0,i=0),s=d*i-h*a,c=h*r-l*i,f=l*a-d*r,p=Math.sqrt(s*s+c*c+f*f),p?(p=1/p,s*=p,c*=p,f*=p):(s=0,c=0,f=0),e[0]=r,e[1]=s,e[2]=l,e[3]=0,e[4]=a,e[5]=c,e[6]=d,e[7]=0,e[8]=i,e[9]=f,e[10]=h,e[11]=0,e[12]=-(r*u+a*v+i*m),e[13]=-(s*u+c*v+f*m),e[14]=-(l*u+d*v+h*m),e[15]=1,e)}});var s2=pe((O8,i2)=>{i2.exports=i_;function i_(e){return"mat4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+", "+e[9]+", "+e[10]+", "+e[11]+", "+e[12]+", "+e[13]+", "+e[14]+", "+e[15]+")"}});var ts=pe((F8,c2)=>{c2.exports={create:im(),clone:cm(),copy:fm(),identity:Lu(),transpose:dm(),invert:vm(),adjoint:gm(),determinant:ym(),multiply:wm(),translate:Mm(),scale:Sm(),rotate:km(),rotateX:Lm(),rotateY:Nm(),rotateZ:Rm(),fromRotation:Pm(),fromRotationTranslation:Fm(),fromScaling:$m(),fromTranslation:qm(),fromXRotation:jm(),fromYRotation:Bm(),fromZRotation:Vm(),fromQuat:Ym(),frustum:Qm(),perspective:Jm(),perspectiveFromFieldOfView:t2(),ortho:n2(),lookAt:a2(),str:s2()}});var h2=pe((G8,f2)=>{"use strict";var l2=rm(),Uo=ts(),$i=On(),s_=3e3,Jl="high",zu,xc=.36,yc=13.64,os=$i.C.hallEnd-.01,bc=$i.C.z0+.01,c_=.356,l_=13.644,f_=$i.C.hallEnd-.006,h_=$i.C.z0+.006,u_=.12,tf=4,ns=e=>$n[e]&&$n[e].cy||tf,Nu=.26,d_=5.6,p_=7,$n=[{side:"right",z:34.5},{side:"right",z:23.5},{side:"left",z:23.5},{side:"end",z:os},{side:"left",z:34.5},{side:"right",z:14.6},{side:"left",z:14.6,maxW:3.7,maxH:3.7},{side:"corridor",x:$i.PAINTING_X[0],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:$i.PAINTING_X[1],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:$i.PAINTING_X[2],cy:3,maxW:3.3,maxH:3.73}];function v_(e,t){let o=t&&t.maxH||d_,n=t&&t.maxW||p_,r=Math.min(o,n/e);return{width:r*e,height:r}}function m_(e,t,o){let n=$n[o],r=[],a=ns(o)-t/2;return n.side==="left"?(Uo.fromTranslation(r,[xc,a,n.z+e/2]),Uo.rotateY(r,r,Math.PI/2)):n.side==="right"?(Uo.fromTranslation(r,[yc,a,n.z-e/2]),Uo.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?Uo.fromTranslation(r,[n.x-e/2,a,bc]):(Uo.fromTranslation(r,[7+e/2,a,os]),Uo.rotateY(r,r,Math.PI)),Uo.scale(r,r,[e,t,u_]),r}function g_(e,t,o){let n=$n[o],r=[],a=ns(o)-t/2;return n.side==="left"?(Uo.fromTranslation(r,[xc,a,n.z+e/2]),Uo.rotateY(r,r,Math.PI/2)):n.side==="right"?(Uo.fromTranslation(r,[yc,a,n.z-e/2]),Uo.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?Uo.fromTranslation(r,[n.x-e/2,a,bc]):(Uo.fromTranslation(r,[7+e/2,a,os]),Uo.rotateY(r,r,Math.PI)),r}function x_(e,t,o){let n=$n[o],r=[],a=ns(o)-t/2-Nu-.38;return n.side==="left"?(Uo.fromTranslation(r,[c_,a,n.z+e/2]),Uo.rotateY(r,r,Math.PI/2)):n.side==="right"?(Uo.fromTranslation(r,[l_,a,n.z-e/2]),Uo.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?Uo.fromTranslation(r,[n.x-e/2,a,h_]):(Uo.fromTranslation(r,[7+e/2,a,f_]),Uo.rotateY(r,r,Math.PI)),Uo.scale(r,r,[2,2,2]),r}function y_(e,t,o){let n=$n[o],r=ns(o)-t/2-Nu-.38;return n.side==="left"?[xc+.55,r,n.z]:n.side==="right"?[yc-.55,r,n.z]:n.side==="corridor"?[n.x,r,bc+.55]:[7,r,os-.55]}var gc=.42;function ef(e,t,o,n,r,a){return[t[0]*n,t[1]*n,t[2]*n,0,0,r,0,0,o[0]*a,o[1]*a,o[2]*a,0,e[0],e[1],e[2],1]}function b_(e,t,o){let n=$n[o],r,a,i;n.side==="left"?(r=[xc,n.z],a=[0,0,1],i=[1,0,0]):n.side==="right"?(r=[yc,n.z],a=[0,0,1],i=[-1,0,0]):n.side==="corridor"?(r=[n.x,bc],a=[1,0,0],i=[0,0,1]):(r=[7,os],a=[1,0,0],i=[0,0,-1]);let s=ns(o)+t/2+Nu+.3,c=Math.min(2.4,Math.max(.9,e*.55)),f=(p,u)=>[r[0]+i[0]*p,u,r[1]+i[2]*p],l=[.075,.062,.05],d=[{fixmodel:ef(f(.014,s),a,i,.1,.13,.028),fixcol:l,fixglow:0},{fixmodel:ef(f(gc/2,s),a,i,.02,.02,gc),fixcol:l,fixglow:0},{fixmodel:ef(f(gc,s),a,i,c,.034,.05),fixcol:l,fixglow:0},{fixmodel:ef(f(gc-.012,s-.019),a,i,c*.94,.006,.028),fixcol:l,fixglow:1}],h=f(gc,s-.02);return{fixtures:d,light:{c:[h[0],h[1],h[2],1],d:[a[0],a[1],a[2],c/2]}}}f2.exports=(e,t)=>{let o=[],n=[],r=a=>{let i=a.image_id;if(!$n[i])return;let{width:s,height:c}=v_(a.aspect,$n[i]),f=b_(s,c,i);t&&t.lights&&i<t.lights.length&&(t.lights[i]=f.light),o.push({...a,fixtures:f.fixtures,side:$n[i].side,model:m_(s,c,i),framemodel:g_(s,c,i),framesize:[s,c],textmodel:x_(s,c,i),text:a.textGen(s),width:s,height:c,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:y_(s,c,i),paintingPosition:$n[i].side==="left"?[xc+.05,tf,$n[i].z]:$n[i].side==="right"?[yc-.05,tf,$n[i].z]:$n[i].side==="corridor"?[$n[i].x,ns(i),bc+.05]:[7,tf,os-.05],textGen:null})};return l2.fetch(e,$n.length,Jl,r,()=>{}),{update:()=>{n=o,n.forEach(a=>{l2.load(e,a,Jl)}),Jl="low",zu&&clearTimeout(zu),zu=setTimeout(()=>{Jl="high"},s_)},batch:()=>n,interactables:()=>n.map((a,i)=>({side:a.side,width:a.width,index:i,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:a.plaquePosition,paintingPosition:a.paintingPosition}))}}});var v2=pe(($8,p2)=>{"use strict";var w_=Mu(),u2=Cr(),d2=[[-.02,.125],[-.02,.15],[.035,.15],[.07,.12],[.07,.17],[.185,.17],[.185,.19],[.215,.19],[.26,.03]];function __(){let e=[[0,0],[1,0],[1,1],[0,1]],t=[];d2.forEach(([n,r])=>{e.forEach(([a,i])=>t.push([a,i,n,r]))});let o=[];for(let n=0;n<d2.length-1;n++)for(let r=0;r<4;r++){let a=(r+1)%4,i=n*4+r,s=n*4+a,c=(n+1)*4+r,f=(n+1)*4+a;o.push(i,s,f,i,f,c)}return{verts:t,elems:o}}var M_=`#extension GL_OES_standard_derivatives : enable
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
}`,E_=`
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
}`;p2.exports=e=>{let t=w_.draw(e),o=e({frag:`#extension GL_OES_standard_derivatives : enable
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
	${Ya().lanternGLSL()}
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
	}`,attributes:{pos:[0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,-.1,-.1,0,1.1,-.1,0,-.1,1.1,0,1.1,1.1,0]},elements:[0,1,2,3,2,1,1,0,5,4,5,0,3,1,7,5,7,1,0,2,4,6,4,2,8,9,4,5,4,9,9,11,5,7,5,11,11,10,7,6,7,10,10,8,6,4,6,8],uniforms:{model:e.prop("model"),tex:e.prop("tex"),psize:e.prop("framesize"),canvasCm:(i,s)=>s.size?[s.size[1],s.size[0]]:[61,91],texel:1/(u2.isPhone?1024:2048),detail:()=>u2.post===0?0:1},blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}}),n=__(),r=e({frag:M_,vert:E_,attributes:{prof:n.verts},elements:n.elems,uniforms:{model:e.prop("framemodel"),fsize:e.prop("framesize")},cull:{enable:!1},blend:{enable:!1}}),a=e({frag:`#extension GL_OES_standard_derivatives : enable
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
}`,attributes:{pos:[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5],[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]]},elements:[0,1,2,0,2,3,4,5,6,4,6,7,0,1,5,0,5,4,2,3,7,2,7,6,0,3,7,0,7,4,1,2,6,1,6,5],uniforms:{model:e.prop("fixmodel"),fixcol:e.prop("fixcol"),fixglow:e.prop("fixglow")},cull:{enable:!1},blend:{enable:!1}});return function(i){o(i),r(i);let s=[];i.forEach(c=>{c.fixtures&&s.push(...c.fixtures)}),s.length&&a(s),t(i)}}});var af=pe((D8,w2)=>{"use strict";var{A:zn}=Pr(),{C:sn}=On(),{DOOR:rs}=Wa(),bn=vc(),x2=sn.hallEnd+.35,y2={arch:[13.6,0,zn.zc-zn.arch.r-.3,14.4,zn.arch.spring+zn.arch.r+.3,zn.zc+zn.arch.r+.3],mouth:[13.3,0,sn.z0-.3,14.3,8.2,sn.z1+.3],stair:[-.5,0,bn.SURR.z0-.2,.5,bn.SURR.top+.3,bn.SURR.z1+.2],door:[rs.x0-.4,0,-.5,rs.x1+.4,rs.top+.4,.5],windows:[15.6,.4,sn.z1-.2,36.9,6.4,sn.z1+.9],farDoor:[sn.x1-.2,0,sn.zc-rs.r-.4,sn.x1+.9,rs.top+.4,sn.zc+rs.r+.4]},Na={court:[zn.x0-.4,0,zn.z0-.3,zn.x1+.3,zn.domeTop+.5,zn.z1+.3],stair:[bn.C.x-bn.R-2.6,0,bn.C.z-bn.R-1.5,.5,15.6,bn.C.z+bn.R+1.5],street:[-60,-1,-140,74,60,.6],garden:[10,-1,sn.z1,46,60,sn.z1+110],florence:[sn.x1,-1,sn.zc-30,sn.x1+80,60,sn.zc+30]},S_=[[0,0,0,14,0,x2],[13.6,0,sn.z0,sn.x1+.4,0,sn.z1],[zn.x0-.4,0,zn.z0,zn.x1,0,zn.z1],[bn.C.x-bn.R-2.6,0,bn.C.z-bn.R,.4,0,bn.C.z+bn.R]],A_={hall:{court:["arch"],stair:["stair"],street:["door"],garden:["mouth","windows"],florence:["mouth","farDoor"]},wing:{court:["mouth","arch"],stair:["mouth","stair"],street:["mouth","door"],garden:["windows"],florence:["farDoor"]},court:{stair:["arch","stair"],street:["arch","door"],garden:["arch","mouth","windows"],florence:["arch","mouth","farDoor"]},stair:{court:["stair","arch"],street:["stair","door"],garden:["stair","mouth","windows"],florence:["stair","mouth","farDoor"]}},wc=new Float64Array(24),ea=[7,2,2],b2=0,Di="out",rf=!0;try{/[?&]nocull\b/.test(location.search)&&(rf=!1)}catch(e){}var of={court:!0,stair:!0,street:!0,garden:!0,florence:!0},nf={court:!0,stair:!0,street:!0,garden:!0,florence:!0},m2=!0;function k_(e){let t=s=>[e[s],e[4+s],e[8+s],e[12+s]],o=t(0),n=t(1),r=t(2),a=t(3),i=(s,c,f,l)=>{for(let d=0;d<4;d++)wc[s*4+d]=c[d]+f*l[d]};i(0,a,1,o),i(1,a,-1,o),i(2,a,1,n),i(3,a,-1,n),i(4,a,1,r),i(5,a,-1,r)}function Ja(e,t){if(!rf)return!0;let o=t?-e[4]:e[1],n=t?-e[1]:e[4];for(let r=0;r<6;r++){let a=wc[r*4],i=wc[r*4+1],s=wc[r*4+2],c=wc[r*4+3],f=a>0?e[3]:e[0],l=i>0?n:o,d=s>0?e[5]:e[2];if(a*f+i*l+s*d+c<0)return!1}return!0}var Cu=(e,t)=>ea[0]>e[0]-t&&ea[0]<e[3]+t&&ea[2]>e[2]-t&&ea[2]<e[5]+t;function T_(e){if(Cu(e,.6))return null;let t=1/0,o=-1/0;for(let n=0;n<4;n++){let r=(n&1?e[3]:e[0])-ea[0],a=(n&2?e[5]:e[2])-ea[2],i=Math.atan2(r,a)-b2;i-=Math.round(i/(2*Math.PI))*2*Math.PI,t=Math.min(t,i),o=Math.max(o,i)}return o-t>Math.PI?null:[t,o]}function g2(e,t,o){let n=-Math.PI,r=Math.PI,a=i=>{let s=T_(i);return s?(n=Math.max(n,s[0]-.03),r=Math.min(r,s[1]+.03),n<=r):!0};for(let i of e){let s=y2[i];if(!Cu(s,.6)&&(!Ja(s,o)||!a(s)))return!1}return Ja(t,o)&&a(t)}function L_(){let e=ea[0],t=ea[2];return e<0&&t>bn.C.z-bn.R-1.5&&e>bn.C.x-bn.R-2.6?"stair":e>14.1&&t>zn.z0-.3&&t<zn.z1+.3&&e<zn.x1+.3?"court":e>13.9&&t>sn.z0-.4&&t<sn.z1+.1&&e<sn.x1+.3?"wing":e>=0&&e<=14.1&&t>.3&&t<x2?"hall":"out"}var z_={PORTAL:y2,ROOM:Na,update(e,t,o){let n=new Array(16);for(let r=0;r<4;r++)for(let a=0;a<4;a++){let i=0;for(let s=0;s<4;s++)i+=t[s*4+a]*e[r*4+s];n[r*4+a]=i}k_(n),ea[0]=o[0],ea[1]=o[1],ea[2]=o[2],b2=Math.atan2(-e[2],-e[10]),Di=L_();for(let r in Na)if(!rf||Di==="out"||Di===r||Cu(Na[r],.3))of[r]=Ja(Na[r],!1)||Di===r,nf[r]=Ja(Na[r],!0)||Di===r;else{let a=A_[Di][r];of[r]=a?g2(a,Na[r],!1):Ja(Na[r],!1),nf[r]=a?g2(a,Na[r],!0):Ja(Na[r],!0)}m2=!rf||S_.some(r=>Ja(r,!1))},get zone(){return Di},room(e,t){return t?nf[e]:of[e]},box(e,t,o){return o&&!(t?nf[o]:of[o])?!1:Ja(e,t)},get floor(){return m2}};w2.exports=z_});var M2=pe((q8,_2)=>{"use strict";var N_=wu(),C_=af();function R_(e){let t=new DataView(e);if(String.fromCharCode(t.getUint8(0),t.getUint8(1),t.getUint8(2),t.getUint8(3))!=="STAT")throw new Error("Not a statue file");let n=t.getUint32(4,!0),r=t.getUint32(8,!0),a=[],i=[];for(let d=0;d<3;d++)a.push(t.getFloat32(12+d*4,!0)),i.push(t.getFloat32(24+d*4,!0));let s=36,c=new Uint16Array(e,s,n*3);s+=n*6;let f=new Uint16Array(e,s,r);s+=r*2;let l=new Int8Array(e,s,n*3);return{nV:n,nI:r,mn:a,sz:i,pos:c,idx:f,nrm:l}}_2.exports=(e,t)=>{let o=[],n=[],r=[],a=[],i=null,s=t.statues.length,c=[],f=(d,h)=>{let p=o.length/3,u=h.height*.75,v=h.base!==void 0?h.base:t.pedestalTop;c.push({offset:a.length,count:d.nI,box:[h.x-u,v-.1,h.z-u,h.x+u,v+h.height+.2,h.z+u]});let m=h.height,g=Math.cos(h.yaw),y=Math.sin(h.yaw),b=h.base!==void 0?h.base:t.pedestalTop;for(let M=0;M<d.nV;M++){let T=(d.mn[0]+d.pos[M*3]/65535*d.sz[0])*m,L=(d.mn[1]+d.pos[M*3+1]/65535*d.sz[1])*m,C=(d.mn[2]+d.pos[M*3+2]/65535*d.sz[2])*m;o.push(h.x+g*T+y*C,b+L,h.z-y*T+g*C);let D=d.nrm[M*3]/127,B=d.nrm[M*3+1]/127,W=d.nrm[M*3+2]/127;n.push(g*D+y*W,B,-y*D+g*W),r.push(h.mat||1,0,0)}for(let M=0;M<d.nI;M++)a.push(p+d.idx[M])},l=()=>{a.length!==0&&(i=N_(e,{position:o,normal:n,mat:r,elements:a,lights:t.lights,get viewer(){return t.viewer}},!1,!0))};return t.statues.forEach(d=>{fetch("res/"+d.file).then(h=>{if(!h.ok)throw new Error("Could not load "+d.file);return h.arrayBuffer()}).then(h=>f(R_(h),d)).catch(h=>console.error(h)).then(()=>{--s===0&&l()})}),function(d){if(!i)return;let h=!!(d&&d.reflected),p=c.filter(u=>C_.box(u.box,h));p.length&&i(p)}}});var I2=pe((H8,Iu)=>{"use strict";var I_=Ri(),un=1.29032,Hi=[9.2968,2,5.9],P_=[[.767398,.00185,-.10827],[.010515,.769952,.087681],[-.107774,.08829,-.762374]],sf=2147.64,E2=725,S2=1288,A2=1450,k2=2576,fr=-5.197,Ui=3.865,ei=10.135,Bi=-14.679,_c=-30.229,Mc=7.232,T2=-45.713,as=17.1*un,ji=16.6*un,Ec=16.6*un,L2=[6.9,17.1],cf=[2.95,16.6],O_=1.6,F_=0,G_=1,z2=2,Ru=3,N2=4,C2=5,$_=6;function D_(){let e=[],t=[],o=[],n=[],r=I_.createBuilder(e,t,o,n),a=(f,l,d,h,p,u,v=1,m=1)=>{let g=[];for(let y=0;y<=v;y++){let b=[];for(let M=0;M<=m;M++){let T=[f[0]+l[0]*y/v+d[0]*M/m,f[1]+l[1]*y/v+d[1]*M/m,f[2]+l[2]*y/v+d[2]*M/m],L=u(T);b.push(r.vert(T,h,[p,L[0],L[1]]))}g.push(b)}for(let y=0;y<v;y++)for(let b=0;b<m;b++)r.tri(g[y][b],g[y+1][b],g[y][b+1]),r.tri(g[y+1][b],g[y+1][b+1],g[y][b+1])},i=f=>l=>[(Hi[2]-l[2])/un-f,l[1]/un];a([-60,0,-.36],[130,0,0],[0,0,-140],[0,1,0],F_,f=>[f[0]/un,f[2]/un],13,14),a([Ui,0,fr],[0,0,Bi-fr],[0,as,0],[1,0,0],G_,i(8.6),6,6),a([-40,0,fr],[Ui+40,0,0],[0,as,0],[0,0,1],z2,f=>[(Ui-f[0])/un,f[1]/un],8,4),a([-40,0,-.36],[0,0,fr+.36],[0,as,0],[1,0,0],z2,f=>[-f[2]/un,f[1]/un]),a([ei,0,-80],[0,0,fr+80],[0,ji,0],[-1,0,0],N2,i(8.6),12,6),a([ei,0,fr],[60,0,0],[0,ji,0],[0,0,1],C2,f=>[(f[0]-ei)/un,f[1]/un],8,4),a([70,0,fr],[0,0,-.36-fr],[0,ji,0],[-1,0,0],C2,f=>[-f[2]/un,f[1]/un]);let s=f=>[(f[0]-Hi[0])/un+4.18,f[1]/un];a([-20,0,_c],[Mc+20,0,0],[0,Ec,0],[0,0,1],Ru,s,8,6),a([Mc,0,_c],[0,0,T2-_c],[0,Ec,0],[1,0,0],Ru,i(28),4,4),a([Mc,0,T2],[ei-Mc,0,0],[0,ji,0],[0,0,1],N2,f=>[(f[0]-Hi[0])/un,f[1]/un],2,4),a([-20,0,Bi],[0,0,_c-Bi],[0,Ec,0],[1,0,0],Ru,i(16),4,4);let c=(f,l,d,h)=>a(f,l,d,h,$_,()=>[0,0],4,4);return c([-300,-20,-300],[600,0,0],[0,320,0],[0,0,1]),c([-300,300,-300],[600,0,0],[0,0,300],[0,-1,0]),c([-300,-20,0],[0,0,-300],[0,320,0],[1,0,0]),c([300,-20,-300],[0,0,300],[0,320,0],[-1,0,0]),{position:e,normal:t,elements:o,attr:n}}function qi(e,t,o,n){let r=e.texture({data:[[n]],...o,min:"linear",mag:"linear"});return fetch(t).then(a=>{if(!a.ok)throw new Error("Could not load "+t);return a.blob()}).then(a=>createImageBitmap(a)).then(a=>{r({data:a,...o,min:"mipmap",mipmap:"nice",mag:"linear"})}).catch(a=>console.error(a)),r}var ta=e=>"vec3("+e.map(t=>t.toFixed(4)).join(", ")+")",q_=[[[-.35,0,-.35],[14.35,9.2,50]],[[-40,0,Bi],[Ui,as,fr]],[[ei,0,-80],[70,ji,fr]],[[-20,0,-80],[Mc,Ec,_c]],[[-40,0,-80],[-20,Ec,Bi]]],H_=q_.map(e=>`if (hitBox(ro, rd, ${ta(e[0])}, ${ta(e[1])}, 1e4) ) return 0.0;`).join(`
		`),R2="mat3("+[0,1,2].map(e=>[0,1,2].map(t=>P_[t][e].toFixed(6)).join(", ")).join(", ")+")",j_=`
precision highp float;

uniform sampler2D photo, photoNight, photoMask, pinkTex, yellowTex, creamTex, cobbleTex;
uniform float time;
uniform float night;   // 0 by day, 1 at night

varying vec3 v_pos;
varying vec3 v_normal;
varying vec3 v_attr;
varying vec3 v_eye;

const vec3 SUN = ${ta([-.25,.4,.88].map(e=>e/Math.hypot(-.25,.4,.88)))};

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
	${H_}
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
	vec3 ro = ${ta(Hi)};
	vec3 rd = p - ro;
	if (hitBox(ro, rd, ${ta([-40,0,Bi])}, ${ta([Ui-.02,as,fr])}, 0.995)) return false;
	if (hitBox(ro, rd, ${ta([ei+.02,0,-80])}, ${ta([70,ji,fr])}, 0.995)) return false;
	return true;
}

// is this point sky in the photo? (only meaningful inside the photo)
bool photoSky(vec3 p) {
	vec3 pc = ${R2} * (p - ${ta(Hi)});
	if (pc.z < 0.2) return false;
	vec2 uv = vec2(
		(${E2.toFixed(2)} + ${sf.toFixed(3)} * pc.x / pc.z) / ${A2.toFixed(1)},
		(${S2.toFixed(2)} - ${sf.toFixed(3)} * pc.y / pc.z) / ${k2.toFixed(1)}
	);
	if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return false;
	return texture2D(photoMask, uv).r < 0.5;
}

// photo colour and how much to trust it (0..1)
vec4 photoAt(vec3 p, vec3 n, vec3 eye) {
	vec3 pc = ${R2} * (p - ${ta(Hi)});
	if (pc.z < 0.2) return vec4(0.0);
	vec2 uv = vec2(
		(${E2.toFixed(2)} + ${sf.toFixed(3)} * pc.x / pc.z) / ${A2.toFixed(1)},
		(${S2.toFixed(2)} - ${sf.toFixed(3)} * pc.y / pc.z) / ${k2.toFixed(1)}
	);
	vec2 e = min(uv, 1.0 - uv);
	float w = smoothstep(0.002, 0.02, min(e.x, e.y));
	if (w <= 0.0) return vec4(0.0);
	w *= smoothstep(0.35, 0.75, texture2D(photoMask, uv).r);
	if (w <= 0.0) return vec4(0.0);
	if (!photoSees(p)) return vec4(0.0);
	// if we see this surface much more square-on than the photo did,
	// the photo would look smeared: hand over to the painted facade
	float camCos = abs(dot(normalize(p - ${ta(Hi)}), n));
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
		base = texture2D(cobbleTex, fuv / ${O_.toFixed(2)}).rgb;
	} else if (kind < 2.5) {
		base = texture2D(pinkTex, vec2(fuv.x / ${L2[0].toFixed(2)}, 1.0 - fuv.y / ${L2[1].toFixed(2)})).rgb;
	} else if (kind < 3.5) {
		base = texture2D(yellowTex, vec2(fuv.x / ${cf[0].toFixed(2)}, 1.0 - fuv.y / ${cf[1].toFixed(2)})).rgb;
	} else {
		base = texture2D(creamTex, vec2(fuv.x / ${cf[0].toFixed(2)}, 1.0 - fuv.y / ${cf[1].toFixed(2)})).rgb;
	}

	// ---------- the photograph, where it can be trusted ----------
	bool projectable = kind < 0.5 || (kind > 0.5 && kind < 1.5) || (kind > 2.5 && kind < 4.5);
	if (kind < 0.5) {
		// the photo only shows ground inside the alley, or beyond its corners
		bool inAlley = v_pos.x > ${(Ui-.05).toFixed(3)} && v_pos.x < ${(ei+.05).toFixed(3)};
		projectable = inAlley || v_pos.z < ${Bi.toFixed(3)};
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
}`,U_=`
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
}`,B_=Fn();Iu.exports=e=>{let t=D_(),o={wrapS:"clamp",wrapT:"clamp",flipY:!1},n={wrapS:"mirror",wrapT:"clamp",flipY:!1},r={wrapS:"repeat",wrapT:"repeat",flipY:!1},a=qi(e,"res/street/photo.jpg",o,[190,160,120]),i=qi(e,"res/street/photo_night.jpg",o,[12,14,22]),s=qi(e,"res/street/photo_mask.png",o,[255,255,255]),c=qi(e,"res/street/facade_pink.jpg",n,[200,150,135]),f=qi(e,"res/street/facade_yellow.jpg",n,[225,180,95]),l=qi(e,"res/street/facade_cream.jpg",n,[215,200,175]),d=qi(e,"res/street/cobbles.jpg",r,[95,95,95]),h=Date.now(),p=e({frag:j_,vert:U_,attributes:{position:t.position,normal:t.normal,attr:t.attr},elements:new Uint32Array(t.elements),uniforms:{photo:a,photoMask:s,pinkTex:c,yellowTex:f,creamTex:l,cobbleTex:d,photoNight:i,night:()=>B_.night,time:()=>(Date.now()-h)/1e3}});return function(){p()}};Iu.exports.layout={MOUTH_Z:fr,PINK_X:Ui,RIGHT_X:ei,PINK_H:as,CREAM_H:ji,S:un}});var F2=pe((j8,O2)=>{"use strict";var W_=Fn().GLSL,{glassPanes:V_}=Wa(),P2=On();function X_(){let e=[],t=[],o=(n,r)=>{for(let a of n)e.push(a),t.push(r)};return o(V_(),[0,0,1]),o(P2.windowGlass(),[0,0,1]),o(P2.farDoorGlass(),[1,0,0]),{position:e,normal:t}}O2.exports=e=>{let t=X_(),o=e({frag:`
		precision highp float;
		${W_}
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
		}`,attributes:{position:t.position,normal:t.normal},count:t.position.length,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o()}}});var eg=pe((U8,$u)=>{"use strict";var j2=Fn().GLSL,Y_=Ri(),Pu=Cr(),{wallWithHoles:K_,C:ni}=On(),Ye=.28,X={westBack:14.4,westCol:15-Ye,eastCol:37.4+Ye,eastBack:41.8,south:ni.z1+.7,northCol:ni.z1+.7+16,northBack:ni.z1+.7+19,cx:(15+37.4)/2,cz:(ni.z1+.7+ni.z1+.7+16-Ye)/2},vo={x0:X.westCol+Ye,x1:X.eastCol-Ye,z0:X.south,z1:X.northCol-Ye},Un=3.3,kc=.92,ri=5.6,G2=6,Gr=11.9,oi=9.6,Ht={x0:X.cx-2.9,x1:X.cx+2.9,top:14.4},vf=7,U2=4,Fu=(X.eastCol-X.westCol)/vf,Q_=(X.northCol-X.south)/U2,B2=3,Lc=.26,Yi=1.4,Vi=1.1,ff=3,pa=(()=>{let e=[.3,.82,-.49],t=Math.hypot(...e);return e.map(o=>o/t)})(),$e={GROUND:0,BRICK:1,STONE:2,MARBLE:3,HEDGE:4,POT:5,ROOF:6,SHUTTER:7,PANE:8,PLASTER:9,BARK:10,IRON:11,SKY:12,LEAD:13,FARBRICK:14,DARK:15,SOIL:16},va=[],W2=(e,t,o)=>[X.cx+e,t,X.cz+o],hf=W2(-5.9,0,3.4),ai=.85,ti={c:[hf[0],4.6*ai+.5,hf[2]],r:[5*ai,3.6*ai,4.5*ai]},V2=[{d:[0,4.4,0],r:[3.9,2.6,3.6],n:230},{d:[-2.7,4,-1.2],r:[2.6,2.1,2.4],n:105},{d:[2.7,4.5,-1.6],r:[2.5,2.2,2.3],n:105},{d:[.8,6.9,.8],r:[2.6,2,2.5],n:105},{d:[-1.6,6.1,2],r:[2.2,1.9,2],n:80},{d:[2.3,3.4,1.8],r:[2,1.5,1.9],n:60}].map(e=>({c:[hf[0]+e.d[0]*ai,e.d[1]*ai+.5,hf[2]+e.d[2]*ai],r:e.r.map(t=>t*ai),n:e.n}));for(let e of V2)va.push({...e,cell:0,leaf:[.5,.7,.46],bloom:[1,1,1],size:[.95,1.35],magnolia:1,shadow:1});var Z_=[3.6,6.3,9];for(let e of Z_){let t=8.6+e%1.7*.6;va.push({c:W2(e,t/2+.5,5.2),r:[.9,t/2,.9],cell:1,leaf:[.5,.64,.5],bloom:[1,1,1],n:180,size:[.72,.98],spindle:1,shadow:1})}var J_=[{d:[-8.4,-4],bloom:[1,.62,.78]},{d:[-3.6,-4.6],bloom:[1,.98,.94]},{d:[3.8,-4.3],bloom:[1,.98,.94]},{d:[8.5,-4],bloom:[1,.58,.72]}].map(e=>({x:X.cx+e.d[0],z:X.cz+e.d[1],bloom:e.bloom}));for(let e of J_)va.push({c:[e.x,.95,e.z],r:[1.25,.95,1.1],cell:3,leaf:[.7,.86,.58],bloom:e.bloom,n:80,size:[.55,.8],shadow:1});var Gu=[45,135,225,315].map(e=>{let t=e*Math.PI/180;return[X.cx+Math.cos(t)*2.3,X.cz+Math.sin(t)*2.3]});for(let[e,t]of Gu)va.push({c:[e,1.85,t],r:[.62,.55,.62],cell:3,leaf:[.78,.95,.55],bloom:[1.25,1,.25],n:36,size:[.32,.42],shadow:1});var X2=[];{let e=(o,n,r,a,i,s)=>{let c=Math.hypot(r-o,a-n),f=Math.floor(c/.9);for(let l=0;l<=f;l++){let d=l/f,h=o+(r-o)*d,p=n+(a-n)*d;i!==void 0&&Math.abs((r!==o?h:p)-i)<s||X2.push([h,p])}};e(vo.x0+.45,vo.z0+1.2,vo.x0+.45,vo.z1-.45,X.cz,1),e(vo.x1-.45,vo.z0+1.2,vo.x1-.45,vo.z1-.45,X.cz,1),e(vo.x0+.45,vo.z1-.45,vo.x1-.45,vo.z1-.45,X.cx,1.9)}var e6=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],uf=e=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]};function ss(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),f=e.vert(n,a,i),l=e.vert(r,a,i);e.tri(s,c,f),e.tri(s,f,l)}function dn(e,t,o,n,r,a,i,s){e.box(Math.min(t,r),Math.min(o,a),Math.min(n,i),Math.max(t,r),Math.max(o,a),Math.max(n,i),[s,0,0])}function t6(e,t,o){return{vert:(n,r,a)=>e.vert(t(n),o(r),a),tri:e.tri}}var o6={north:[e=>[e[0],e[1],X.northCol-e[2]],e=>[e[0],e[1],-e[2]]],west:[e=>[X.westCol+e[2],e[1],e[0]],e=>[e[2],e[1],e[0]]],east:[e=>[X.eastCol-e[2],e[1],e[0]],e=>[-e[2],e[1],e[0]]]};function Y2(e,t,o,n,r){let a=[];for(let i=0;i<o;i++){let s=e+i*t+(i===0?n:.02),c=e+(i+1)*t-(i===o-1?r:.02);a.push([s,c,e+(i+.5)*t])}return a}var n6=Y2(X.westCol,Fu,vf,Ye+Lc,Ye+Lc),$2=Y2(X.south,Q_,U2,.32,Ye+Lc),is=[X.cx-32.35,X.northCol-77],r6=Array.from({length:vf-1},(e,t)=>X.westCol+(t+1)*Fu),K2=e=>(e[1]-e[0])/2-.2,Tc=e=>(e[0]+e[1])/2;function a6(e,t){let o=Tc(e),n=K2(e);return{u0:e[0],u1:e[1],bottom:t?0:kc,head:r=>{let a=Math.abs(r-o);return a<n?Un+Math.sqrt(n*n-a*a):Un},step:.05}}function i6(e,t,o){return{u0:e-o,u1:e+o,bot:n=>t-Math.sqrt(Math.max(0,o*o-(n-e)*(n-e))),head:n=>t+Math.sqrt(Math.max(0,o*o-(n-e)*(n-e))),step:.04,mat:[$e.STONE,0,0]}}function s6(e,t,o,n){return{u0:e-t/2,u1:e+t/2,bottom:o,head:()=>n,step:.5,mat:[$e.STONE,0,0]}}function D2(e,t,o){let[n,r]=o6[t],a=t6(e,n,r),i=[];o.arches.forEach((l,d)=>i.push(a6(l,d===o.open)));let s=[];for(let l of o.bays||o.arches){let d=Tc(l);o.oculi&&i.push(i6(d,6.85,.3)),s.push({c:d,y0:o.win[0],y1:o.win[1],w:1.05})}for(let l of o.extraWindows||[])s.push(l);for(let l of s)i.push(s6(l.c,l.w,l.y0,l.y1));for(let l of o.extraHoles||[])i.push(l);K_(a,{u0:o.u0,u1:o.u1,w0:-Ye,w1:Ye,top:o.top,holes:i,mat:[$e.BRICK,0,0],revealMat:[$e.BRICK,0,0],noEnds:o.noEnds,cuts:o.cuts,topStep:.25});let c=(l,d,h,p,u,v,m)=>{let g=n([l,d,h]),y=n([p,u,v]);dn(e,g[0],g[1],g[2],y[0],y[1],y[2],m)},f=(l,d,h,p,u,v)=>ss(a,l,d,h,p,u,[v,0,0]);for(let l of o.arches){let d=Tc(l),h=K2(l),p=28;for(let u of[Ye,-Ye]){let v=u>0?1:-1,m=u+v*.025;for(let g=0;g<p;g++){let y=Math.PI*g/p,b=Math.PI*(g+1)/p,M=(Q,ce)=>[d+Math.cos(Q)*ce,Un+Math.sin(Q)*ce],T=M(y,h),L=M(b,h),C=M(y,h+.26),D=M(b,h+.26);f([T[0],T[1],m],[L[0],L[1],m],[D[0],D[1],m],[C[0],C[1],m],[0,0,v],$e.STONE);let B=Math.cos((y+b)/2),W=Math.sin((y+b)/2);f([C[0],C[1],u],[D[0],D[1],u],[D[0],D[1],m],[C[0],C[1],m],[B,W,0],$e.STONE)}}}if(o.arches.forEach((l,d)=>{d!==o.open&&c(l[0]-.02,kc,-Ye-.05,l[1]+.02,kc+.09,Ye+.05,$e.STONE)}),c(o.u0,G2,-Ye,o.u1,G2+.18,Ye+.09,$e.STONE),c(o.u0,o.win[0]-.12,Ye-.01,o.u1,o.win[0],Ye+.06,$e.STONE),o.cornice)for(let[l,d,h]of o.cornice)c(l,h-.22,Ye-.01,d,h,Ye+.16,$e.STONE),c(l,h,Ye-.01,d,h+.16,Ye+.42,$e.STONE);for(let{c:l,y0:d,y1:h,w:p,door:u}of s){let v=p/2;if(f([l-v-.01,d,.06],[l+v+.01,d,.06],[l+v+.01,h,.06],[l-v-.01,h,.06],[0,0,1],u?$e.DARK:$e.PANE),u){c(l-v-.16,0,Ye-.01,l-v,h+.16,Ye+.07,$e.STONE),c(l+v,0,Ye-.01,l+v+.16,h+.16,Ye+.07,$e.STONE),c(l-v-.16,h,Ye-.01,l+v+.16,h+.2,Ye+.09,$e.STONE),c(l-v,0,.07,l+v,h-.02,.12,$e.SHUTTER),c(l-.012,0,.12,l+.012,h-.02,.14,$e.DARK);continue}for(let m of[-1,1]){let g=l+m*v;c(g+m*.02,d+.02,Ye+.02,g+m*(v+.025),h-.02,Ye+.06,$e.SHUTTER)}c(l-v-.09,h,Ye-.01,l+v+.09,h+.16,Ye+.05,$e.STONE),c(l-v-.09,d-.1,Ye-.01,l+v+.09,d,Ye+.09,$e.STONE),c(l-.015,d,.06,l+.015,h,.09,$e.SHUTTER),c(l-v,(d+h)/2-.015,.06,l+v,(d+h)/2+.015,.09,$e.SHUTTER)}if(o.oculi)for(let l of o.bays||o.arches){let d=Tc(l);f([d-.31,6.54,0],[d+.31,6.54,0],[d+.31,7.16,0],[d-.31,7.16,0],[0,0,1],$e.DARK)}for(let l of o.cols){let d=kc+.09,h=n([l,0,0]);dn(e,h[0]-.24,d,h[2]-.24,h[0]+.24,d+.12,h[2]+.24,$e.MARBLE),e.lathe([[.23,d+.12,1],[.24,d+.17],[.2,d+.24],[.215,d+.28],[.17,d+.34,1],[.165,d+.6],[.155,Un-.5],[.15,Un-.38,1],[.175,Un-.34,1],[.17,Un-.3],[.2,Un-.22],[.27,Un-.15],[.29,Un-.12,1]],h[0],h[2],18,{mat:()=>[$e.MARBLE,0,0]}),dn(e,h[0]-.29,Un-.12,h[2]-.29,h[0]+.29,Un+.01,h[2]+.29,$e.STONE)}o.walk&&o.walk(e)}function c6(e){let t=[-1,0,1].map(r=>{let a=X.cx+r*1.7;return{u0:a-.6,u1:a+.6,bottom:11,head:i=>12.9+Math.sqrt(Math.max(0,.36-(i-a)*(i-a))),step:.04,mat:[$e.STONE,0,0]}});D2(e,"north",{u0:X.westCol-Ye,u1:X.eastCol+Ye,top:r=>r>Ht.x0+1e-6&&r<Ht.x1-1e-6?Ht.top:Gr,cuts:[Ht.x0,Ht.x0+1e-5,Ht.x1-1e-5,Ht.x1],arches:n6,open:B2,cols:r6,oculi:!0,win:[8,9.9],extraHoles:t,cornice:[[X.westCol-Ye-3.3,Ht.x0,Gr],[Ht.x1,X.eastCol+Ye+3.3,Gr],[Ht.x0-.2,Ht.x1+.2,Ht.top]],walk:r=>{dn(r,vo.x0,ri,X.northCol+Ye,vo.x1,ri+.2,X.northBack,$e.PLASTER),dn(r,vo.x0,0,X.northBack,vo.x1,ri,X.northBack+.3,$e.PLASTER);for(let a of[X.cx-7.2,X.cx,X.cx+7.2])ss(r,[a-.8,0,X.northBack-.01],[a+.8,0,X.northBack-.01],[a+.8,2.9,X.northBack-.01],[a-.8,2.9,X.northBack-.01],[0,0,-1],[$e.DARK,0,0]),dn(r,a-.98,0,X.northBack-.06,a+.98,3.12,X.northBack,$e.STONE),ss(r,[a-.8,0,X.northBack-.07],[a+.8,0,X.northBack-.07],[a+.8,2.9,X.northBack-.07],[a-.8,2.9,X.northBack-.07],[0,0,-1],[$e.DARK,0,0])}}),ss(e,[Ht.x0,11,X.northCol+.2],[Ht.x1,11,X.northCol+.2],[Ht.x1,13.6,X.northCol+.2],[Ht.x0,13.6,X.northCol+.2],[0,0,-1],[$e.DARK,0,0]),dn(e,Ht.x0+.3,10.88,X.northCol-Ye-.06,Ht.x1-.3,11,X.northCol-Ye+.1,$e.STONE),dn(e,X.westBack,ri+.2,X.northBack,X.eastBack,Gr,X.northBack+3.4,$e.BRICK),dn(e,X.westBack,oi,X.northCol-Ye,X.westCol-Ye,Gr,X.northCol+Ye,$e.BRICK),dn(e,X.eastCol+Ye,oi,X.northCol-Ye,X.eastBack,Gr,X.northCol+Ye,$e.BRICK),dn(e,X.westBack,ri+.2,X.northCol+Ye+.12,X.eastBack,Gr,X.northBack,$e.BRICK),Sc(e,[X.westBack-.5,Gr+.16,X.northCol-Ye-.42],[Ht.x0-X.westBack+.5,0,0],[0,2.6,4.4],$e.ROOF),Sc(e,[Ht.x1,Gr+.16,X.northCol-Ye-.42],[X.eastBack+.5-Ht.x1,0,0],[0,2.6,4.4],$e.ROOF),Sc(e,[Ht.x0-.3,Ht.top+.16,X.northCol-Ye-.42],[Ht.x1-Ht.x0+.6,0,0],[0,1.4,3],$e.ROOF),q2(e,[Ht.x0-.3,Ht.top+.16,X.northCol-Ye-.42],[Ht.x0-.3,Ht.top+1.56,X.northCol-Ye+2.58],[Ht.x0-.3,Ht.top+.16,X.northCol-Ye+2.58],[-1,0,0],$e.BRICK),q2(e,[Ht.x1+.3,Ht.top+.16,X.northCol-Ye-.42],[Ht.x1+.3,Ht.top+1.56,X.northCol-Ye+2.58],[Ht.x1+.3,Ht.top+.16,X.northCol-Ye+2.58],[1,0,0],$e.BRICK),dn(e,Ht.x0,Gr,X.northCol+Ye,Ht.x1,Ht.top,X.northCol+2.6,$e.BRICK);for(let[r,a]of[[X.cx-9.8,X.northBack+.6],[X.cx+9.4,X.northBack+.4],[X.cx-4.6,X.northBack+1]])dn(e,r-.4,12.5,a-.4,r+.4,15.4,a+.4,$e.BRICK),dn(e,r-.52,15.4,a-.52,r+.52,15.62,a+.52,$e.STONE);let o=(r,a,i)=>{let s=r==="west"?-1:1,c=[];$2.forEach((d,h)=>{let p=Tc(d);h===1?c.push({c:p,y0:0,y1:2.9,w:1.4,door:!0}):c.push({c:p,y0:1,y1:2.75,w:1.05}),c.push({c:p,y0:3.85,y1:5.45,w:1.05})}),D2(e,r,{u0:X.south,u1:X.northCol-Ye,top:()=>oi,arches:[],bays:$2,cols:[],win:[7.45,8.85],extraWindows:c,noEnds:!0,cornice:[[X.south,X.northCol-Ye,oi]]}),dn(e,a,0,X.south,i+s*(Ye+.12),oi,X.northBack+.3,$e.BRICK);let f=i-s*Ye;dn(e,f,0,X.south,f-s*.06,.55,X.northCol-Ye,$e.STONE);let l=i-s*(Ye+.42);Sc(e,[l,oi+.16,X.south],[0,0,X.northCol-Ye-X.south],[a-l+s*.4,1.9,0],$e.ROOF)};o("west",X.westBack,X.westCol),o("east",X.eastBack,X.eastCol);let n=ni.x1+.7;dn(e,13.65,7.4,X.south-.02,n,7.62,X.south+.14,$e.STONE),dn(e,13.65,10.4,X.south-.02,n,10.6,X.south+.38,$e.STONE),Sc(e,[13.65,10.6,X.south+.38],[n-13.65,0,0],[0,2.2,-5],$e.ROOF)}function q2(e,t,o,n,r,a){let i=[a,0,0];e.tri(e.vert(t,r,i),e.vert(o,r,i),e.vert(n,r,i))}function Sc(e,t,o,n,r){let a=uf([o[1]*n[2]-o[2]*n[1],o[2]*n[0]-o[0]*n[2],o[0]*n[1]-o[1]*n[0]]),i=a[1]<0?a.map(f=>-f):a,s=(f,l)=>[t[0]+o[0]*f+n[0]*l,t[1]+o[1]*f+n[1]*l,t[2]+o[2]*f+n[2]*l];ss(e,s(0,0),s(1,0),s(1,1),s(0,1),i,[r,0,0]);let c=.08;ss(e,s(0,0),s(1,0),[s(1,0)[0],s(1,0)[1]-c,s(1,0)[2]],[s(0,0)[0],s(0,0)[1]-c,s(0,0)[2]],uf([-n[0],0,-n[2]]),[r,0,0])}function l6(e){let t=X.westBack,o=X.eastBack,n=X.south,r=X.northBack,a=36,i=22,s=[];for(let c=0;c<=a;c++){s.push([]);for(let f=0;f<=i;f++){let l=[t+(o-t)*c/a,0,n+(r-n)*f/i];s[c].push(e.vert(l,[0,1,0],[$e.GROUND,0,0]))}}for(let c=0;c<a;c++)for(let f=0;f<i;f++)e.tri(s[c][f],s[c+1][f],s[c+1][f+1]),e.tri(s[c][f],s[c+1][f+1],s[c][f+1])}var Ac=.46,Xi=.58,Wi=[[-.5,0],[-.52,.45],[-.46,.78],[-.3,.95],[0,1],[.3,.95],[.46,.78],[.52,.45],[.5,0]];function f6(e,t,o){let n=Vi+o,r=(e>0?vo.x1-X.cx:X.cx-vo.x0)-Yi-o,a=Vi+o,i=(t>0?vo.z1-X.cz:X.cz-vo.z0)-Yi-o,s=ff+o,c=Math.sqrt(s*s-n*n),f=Math.sqrt(s*s-a*a),l=[[n,c],[n,i],[r,i],[r,a],[f,a]],d=Math.atan2(a,f),h=Math.atan2(c,n);for(let p=1;p<10;p++){let u=d+(h-d)*p/10;l.push([Math.cos(u)*s,Math.sin(u)*s])}return l.map(([p,u])=>[X.cx+e*p,X.cz+t*u])}function h6(e,t,o){let n=o[0]-t[0],r=o[1]-t[1],a=Math.hypot(n,r),i=n/a,s=r/a,c=-s,f=i,l=Ac*.5,d=-l,h=a+l,p=[],u=Math.max(1,Math.ceil((h-d)/1));for(let v=0;v<=u;v++){let m=d+(h-d)*v/u,g=[];for(let y=0;y<Wi.length;y++){let[b,M]=Wi[y],T=Math.min(Wi.length-2,y),L=Wi[Math.max(0,y-1)],C=Wi[Math.min(Wi.length-1,y+1)],D=(C[0]-L[0])*Ac,W=(C[1]-L[1])*Xi,Q=-D,ce=Math.hypot(W,Q)||1,ee=[t[0]+i*m+c*b*Ac,M*Xi,t[1]+s*m+f*b*Ac],te=[c*(-W/ce),-Q/ce,f*(-W/ce)];g.push(e.vert(ee,te[1]<-.2?[c*Math.sign(b),.3,f*Math.sign(b)]:te,[$e.HEDGE,0,0]))}p.push(g)}for(let v=0;v<u;v++)for(let m=0;m<Wi.length-1;m++)e.tri(p[v][m],p[v+1][m],p[v+1][m+1]),e.tri(p[v][m],p[v+1][m+1],p[v][m+1]);for(let[v,m]of[[0,-1],[u,1]]){let g=p[v],y=e.vert([t[0]+i*(v?h:d),Xi*.5,t[1]+s*(v?h:d)],[i*m,0,s*m],[$e.HEDGE,0,0]);for(let b=0;b<g.length-1;b++)e.tri(y,g[b],g[b+1])}}function u6(e){for(let t of[-1,1])for(let o of[-1,1]){let n=f6(t,o,.3);for(let r=0;r<n.length;r++)h6(e,n[r],n[(r+1)%n.length])}}function d6(e){let t=X.cx,o=X.cz,n=()=>[$e.STONE,0,0];e.lathe([[1.45,0,1],[1.45,.14,1],[1.12,.14,1],[1.12,.3,1],[0,.3]],t,o,8,{mat:n}),e.lathe([[.76,.3,1],[.8,.38,1],[.74,.44],[.76,.7],[.82,.9],[.8,1.02,1],[.88,1.06,1],[.88,1.18,1],[.6,1.18,1],[.6,.98]],t,o,24,{mat:n}),e.lathe([[.6,.98,1],[0,.98]],t,o,16,{mat:()=>[$e.DARK,0,0]});let r={mat:()=>[$e.IRON,0,0]};e.tube([[t-.72,1.1,o],[t-.72,1.9,o],[t-.7,2.3,o]],()=>.035,8,6,r),e.tube([[t+.72,1.1,o],[t+.72,1.9,o],[t+.7,2.3,o]],()=>.035,8,6,r);let a=[];for(let i=0;i<=10;i++){let s=Math.PI*i/10;a.push([t-Math.cos(s)*.7,2.3+Math.sin(s)*.45,o])}e.tube(a,()=>.03,20,6,r),e.tube([[t-.45,2.25,o],[t,2.38,o],[t+.45,2.25,o]],()=>.02,8,5,r),e.ellipsoid([t,2.32,o],[.03,.13,.13],6,10,r);for(let i of[-1,1]){let s=[];for(let c=0;c<=12;c++){let f=c/12*Math.PI*1.6,l=.16*(1-c/16);s.push([t+i*(.72-.18+Math.cos(f)*l*i*-1+0),1.95+Math.sin(f)*l,o])}e.tube(s,()=>.016,16,5,r)}}function p6(e){for(let[t,o]of Gu)e.lathe([[.26,0,1],[.3,.06],[.36,.42],[.38,.5,1],[.44,.52,1],[.44,.64,1],[.38,.66,1],[.37,.6]],t,o,20,{mat:()=>[$e.POT,0,0]}),e.lathe([[.37,.6,1],[0,.6]],t,o,12,{mat:()=>[$e.SOIL,0,0]}),e.tube([[t,.6,o],[t+.02,1,o-.01],[t-.01,1.45,o+.02]],n=>.045-n*.02,6,6,{mat:()=>[$e.BARK,0,0]})}function v6(e){let[t,,o]=ti.c,n=Z2(7),r=[[-1.8,.4,3.6],[1.6,-.9,3.9],[.4,1.9,3.4],[-.6,-1.7,4.2],[2.1,1.2,3.2]];for(let[a,i,s]of r){let c=[[t+a*.05,0,o+i*.05],[t+a*.25,s*.35,o+i*.25],[t+a*.6,s*.7,o+i*.6],[t+a,s,o+i],[t+a*1.35+(n()-.5),s+1.4,o+i*1.35+(n()-.5)]];e.tube(c,f=>.2*(1-f*.75),14,9,{mat:()=>[$e.BARK,0,0]});for(let f=0;f<2;f++){let l=.55+f*.2,d=[t+a*l,s*l,o+i*l],h=n()*Math.PI*2;e.tube([d,[d[0]+Math.cos(h)*1.3,d[1]+.9,d[2]+Math.sin(h)*1.3],[d[0]+Math.cos(h)*2.3,d[1]+1.4+n(),d[2]+Math.sin(h)*2.3]],p=>.08*(1-p*.7),8,6,{mat:()=>[$e.BARK,0,0]})}}for(let a of va.filter(i=>i.spindle))e.tube([[a.c[0],0,a.c[2]],[a.c[0],1.4,a.c[2]]],()=>.12,3,7,{mat:()=>[$e.BARK,0,0]})}function m6(e){let t=()=>[$e.FARBRICK,0,0],o=()=>[$e.LEAD,0,0],n=(a,i,s,c,f,l)=>{e.lathe([[s+.3,20,1],[s+.3,c-1.2,1],[s+.8,c-.9,1],[s+.8,c,1],[s,c,1]],a,i,28,{mat:t});let d=[];for(let p=0;p<=12;p++){let u=p/12*Math.PI/2,v=Math.cos(u)*s,m=Math.sin(u)*f;l&&(v*=1-.18*Math.sin(u*2)),d.push([Math.max(v,s*.12),c+m])}e.lathe(d,a,i,28,{mat:o});let h=c+f;e.lathe([[s*.13,h-.2,1],[s*.13,h+3,1],[s*.18,h+3.2,1],[s*.02,h+6.4]],a,i,10,{mat:o})};dn(e,14,0,104,52,26,150,$e.FARBRICK),e.lathe([[3,26],[.1,32]],33,108,4,{mat:t}),n(26,124,7.2,33,9.5,!0),n(40.5,116,6,31,8,!0),n(16.5,117,5.5,30,7.2,!0),e.lathe([[6.4,20,1],[6.4,34,1],[6.9,34.4,1],[6,34.4,1],[.6,46.5,1],[.15,50]],33,132,24,{mat:o});let r=(a,i,s)=>{dn(e,a-1.8,0,i-1.8,a+1.8,s,i+1.8,$e.FARBRICK),e.lathe([[1.9,s,1],[1.6,s+3.5,1],[1.2,s+3.5,1],[1.2,s+6,1],[.9,s+6.2,1],[.05,s+13]],a,i,8,{mat:t})};r(20.5,109,36),r(46.5,112,38)}function g6(e){let o=[X.cx,0,X.cz],n=24,r=10,a=[];for(let i=0;i<=n;i++){a.push([]);let s=-Math.PI*.62+Math.PI*1.24*i/n;for(let c=0;c<=r;c++){let f=Math.PI/2*(c/r)-.05,l=[Math.sin(s)*Math.cos(f),Math.sin(f),Math.cos(s)*Math.cos(f)],d=[o[0]+l[0]*420,o[1]+l[1]*420,o[2]+l[2]*420];a[i].push(e.vert(d,[-l[0],-l[1],-l[2]],[$e.SKY,0,0]))}}for(let i=0;i<n;i++)for(let s=0;s<r;s++)e.tri(a[i][s],a[i+1][s],a[i+1][s+1]),e.tri(a[i][s],a[i+1][s+1],a[i][s+1])}function x6(){let e=[],t=[],o=[],n=[],r=Y_.createBuilder(e,t,o,n);return l6(r),c6(r),u6(r),d6(r),p6(r),v6(r),r.save(),r.translate(is[0],0,is[1]),m6(r),r.restore(),g6(r),{position:e,normal:t,elements:o,attr:n}}var Q2=[[[13.65,0,ni.z0-.7],[ni.x1+.7,10.6,X.south]],[[X.westBack,ri,X.northCol-Ye],[X.eastBack,Gr,X.northBack+3.4]],[[Ht.x0,Gr,X.northCol-Ye],[Ht.x1,Ht.top,X.northCol+2.6]],[[X.westBack,0,X.south],[X.westCol+Ye,oi,X.northBack+.3]],[[X.eastCol-Ye,0,X.south],[X.eastBack,oi,X.northBack+.3]],[[14+is[0],0,104+is[1]],[52+is[0],26,150+is[1]]]];function y6(e,t,o,n){let r=.001,a=1e9;for(let i=0;i<3;i++){if(Math.abs(t[i])<1e-9){if(e[i]<o[i]||e[i]>n[i])return!1;continue}let s=(o[i]-e[i])/t[i],c=(n[i]-e[i])/t[i];if(s>c&&([s,c]=[c,s]),r=Math.max(r,s),a=Math.min(a,c),r>a)return!1}return!0}function lf(e,t,o,n){let r=[(e[0]-o[0])/n[0],(e[1]-o[1])/n[1],(e[2]-o[2])/n[2]],a=[t[0]/n[0],t[1]/n[1],t[2]/n[2]],i=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],s=r[0]*a[0]+r[1]*a[1]+r[2]*a[2],c=r[0]*r[0]+r[1]*r[1]+r[2]*r[2]-1,f=s*s-i*c;if(f<=0)return 0;let l=Math.sqrt(f),d=Math.max(0,(-s-l)/i),h=(-s+l)/i;return Math.max(0,h-d)}function Ou(e){for(let[t,o]of Q2)if(y6(e,pa,t,o))return 0;return 1}function Z2(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let o=t;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function b6(){let e=[],t=[],o=[],n=[],r=[],a=[],i=[],s=Z2(21),c=(u,v,m,g,y,b,M)=>{let T=e.length/3;for(let[L,C]of[[-1,-1],[1,-1],[1,1],[-1,1]])e.push(...u),t.push(L,C),o.push(v,m,g),n.push(...y),r.push(...b),a.push(...M);i.push(T,T+1,T+2,T,T+2,T+3)},f=(u,v)=>{let m=1;for(let g of va){if(g===v||!g.shadow)continue;let y=lf(u,pa,g.c,g.r);y>0&&(m*=Math.exp(-y*.9))}return m},l=va.map(u=>({...u,pts:null}));for(let u of l)for(let v=0;v<u.n;v++){let m;do m=[s()*2-1,s()*2-1,s()*2-1];while(m[0]*m[0]+m[1]*m[1]+m[2]*m[2]>1);let g=Math.hypot(m[0],m[1],m[2])||1,y=Math.pow(s(),.35)*.98,b=[m[0]/g*y,m[1]/g*y,m[2]/g*y];if(u.spindle){let ee=b[1],te=Math.sqrt(Math.max(.02,1-ee*ee))*(ee>0?1-ee*.55:1+ee*.25),Ke=Math.hypot(b[0],b[2])||1,ve=te*Math.min(1,Ke*1.4);b=[b[0]/Ke*ve,ee,b[2]/Ke*ve]}u.magnolia&&b[1]<-.55&&(b[1]=-.55+(b[1]+.55)*.35);let M=[u.c[0]+b[0]*u.r[0],u.c[1]+b[1]*u.r[1],u.c[2]+b[2]*u.r[2]],T,L;if(u.magnolia){let ee=0;for(let ve of V2)ee=Math.max(ee,lf(M,pa,ve.c,ve.r));T=Math.exp(-ee*1.1);let te=1;for(let ve of va)if(!ve.magnolia&&ve.shadow){let Te=lf(M,pa,ve.c,ve.r);Te>0&&(te*=Math.exp(-Te*.9))}T*=Ou(M)*te;let Ke=e6(M,ti.c);L=uf([Ke[0]/ti.r[0]+b[0]*.5,Ke[1]/ti.r[1]+b[1]*.5,Ke[2]/ti.r[2]+b[2]*.5]),y=Math.min(1,Math.hypot(Ke[0]/ti.r[0],Ke[1]/ti.r[1],Ke[2]/ti.r[2])*.6+y*.4)}else{let ee=lf(M,pa,u.c,u.r);T=Math.exp(-ee*(u.spindle?2.2:1.25)),T*=Ou(M)*f(M,va[l.indexOf(u)]),L=uf([b[0]/u.r[0],b[1]/u.r[1],b[2]/u.r[2]])}let C=Math.max(0,L[0]*pa[0]+L[1]*pa[1]+L[2]*pa[2]),D=.25+.75*Math.pow(y,1.5)*(.65+.35*(L[1]*.5+.5)),B=u.size[0]+(u.size[1]-u.size[0])*s(),W=.85+s()*.3,Q=u.leaf.map(ee=>ee*W),ce=u.cell;u.cell===3&&s()<.35&&(ce=2),c(M,B,ce,s()*Math.PI*2,[T,D,.35+.65*C],Q,u.bloom)}for(let[u,v]of X2){let m=s()<.5;for(let g=0;g<3;g++){let y=[u+(s()-.5)*.7,.28+s()*.22,v+(s()-.5)*.5],b=Ou(y)*f(y,null);c(y,.32+s()*.12,s()<.7?3:2,s()*6.28,[b,.6+s()*.3,.8],[.75,.9,.6],m?[1,.55,.75]:[.85,.8,1.15])}}let d=i.length/6,h=Array.from({length:d},(u,v)=>v);for(let u=d-1;u>0;u--){let v=Math.floor(s()*(u+1));[h[u],h[v]]=[h[v],h[u]]}let p=[];for(let u of h)for(let v=0;v<6;v++)p.push(i[u*6+v]);return{center:e,corner:t,par:o,light:n,tint:r,bloom:a,elements:p}}var Ve=e=>e.toFixed(4),zc=e=>`vec3(${Ve(e[0])}, ${Ve(e[1])}, ${Ve(e[2])})`,J2=`
const vec3 SUN = ${zc(pa)};
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
`,w6=Q2.map(([e,t])=>`if (hitBox(ro, SUN, ${zc(e)}, ${zc(t)})) return 0.0;`).join(`
	`),_6=va.filter(e=>e.shadow).map(e=>`tr *= crownShade(ro, ${zc(e.c)}, ${zc(e.r)}, ${e.spindle?"1.8":"1.0"});`).join(`
	`),M6=(e,t,o,n,r,a,i,s,c)=>`
	{
		float t = (${Ve(t)} - ro.${e}) / SUN.${e};
		if (t > 0.0) {
			vec3 q = ro + SUN * t;
			float u = q.${e==="z"?"x":"z"};
			if (q.y < ${Ve(ri)} && u > ${Ve(o-Ye)} && u < ${Ve(o+n*r+Ye)}) {
				float k = floor((u - ${Ve(o)}) / ${Ve(n)});
				float a = ${Ve(o)} + k * ${Ve(n)} + (k < 0.5 ? ${Ve(a)} : 0.02);
				float b = ${Ve(o)} + (k + 1.0) * ${Ve(n)} - (k > ${Ve(r-1.5)} ? ${Ve(i)} : 0.02);
				float c = 0.5 * (a + b), r = 0.5 * (b - a) - 0.2;
				float d = abs(u - c);
				float sill = abs(k - ${Ve(s)}) < 0.5 ? 0.0 : ${Ve(kc+.09)};
				bool hole = (q.y > sill && q.y < ${Ve(Un)} && u > a && u < b && d < 0.5 * (b - a) - 0.17)
					|| (q.y >= ${Ve(Un)} && d * d + (q.y - ${Ve(Un)}) * (q.y - ${Ve(Un)}) < r * r);
				if (!hole && ${c}) return 0.0;
			}
		}
	}`,df=Vi+.3,pf=Vi+.3,Nc=ff+.3,H2=vo.x1-X.cx-Yi-.3,E6=vo.z1-X.cz-Yi-.3,S6=X.cz-vo.z0-Yi-.3,A6=Math.sqrt(Nc*Nc-df*df),k6=Math.sqrt(Nc*Nc-pf*pf),T6=[[X.cx,X.cz,.86,1.18],[X.cx,X.cz,1.25,.3],...Gu.map(([e,t])=>[e,t,.42,.65])].map(([e,t,o,n])=>`if (hitCyl(ro, vec2(${Ve(e)}, ${Ve(t)}), ${Ve(o)}, ${Ve(n)})) return 0.0;`).join(`
	`),L6=`
float segDist(vec2 p, vec2 a, vec2 b) {
	vec2 pa = p - a, ba = b - a;
	float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
	return length(pa - ba * h);
}

// distance to the nearest hedge line
float hedgeDist(vec2 xz) {
	vec2 q = abs(xz - vec2(${Ve(X.cx)}, ${Ve(X.cz)}));
	float b1 = xz.y > ${Ve(X.cz)} ? ${Ve(E6)} : ${Ve(S6)};
	vec2 A = vec2(${Ve(df)}, ${Ve(A6)}), Bp = vec2(${Ve(df)}, b1), C = vec2(${Ve(H2)}, b1);
	vec2 D = vec2(${Ve(H2)}, ${Ve(pf)}), E = vec2(${Ve(k6)}, ${Ve(pf)});
	float d = min(min(segDist(q, A, Bp), segDist(q, Bp, C)), min(segDist(q, C, D), segDist(q, D, E)));
	float ang = atan(q.y, q.x);
	if (ang > atan(E.y, E.x) && ang < atan(A.y, A.x)) d = min(d, abs(length(q) - ${Ve(Nc)}));
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
	${w6}
	${M6("z",X.northCol,X.westCol,Fu,vf,Ye+Lc,Ye+Lc,B2,"ro.z > "+Ve(X.northCol-Ye))}
	// on lighter settings only the buildings cast shadows
	if (gardenDetail < 0.5) return 1.0;
	${T6}
	if (ro.y < ${Ve(Xi)} && ro.x > ${Ve(vo.x0)} && ro.x < ${Ve(vo.x1)}) {
		for (int i = 1; i <= 4; i++) {
			float t = float(i) / 4.0 * (${Ve(Xi)} - ro.y) / SUN.y;
			vec3 q = ro + SUN * t;
			float w = ${Ve(Ac*.5)} * sqrt(max(0.0, 1.0 - pow(q.y / ${Ve(Xi)}, 4.0)));
			if (hedgeDist(q.xz) < w) return 0.0;
		}
	}
	float tr = 1.0;
	${_6}
	return tr;
}
`,z6=`
precision highp float;
${j2}
varying vec3 v_pos, v_normal, v_attr, v_eye;
uniform float time, gardenDetail;
${J2}
${L6}

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
		bool yard = P.x > ${Ve(vo.x0)} && P.x < ${Ve(vo.x1)} && P.z < ${Ve(vo.z1)};
		if (!yard) {
			// stone slabs under the arcades
			vec2 g = P.xz / 0.62;
			vec2 fg = fract(g);
			float h = hash(floor(g));
			base = mix(vec3(0.66, 0.60, 0.52), vec3(0.76, 0.70, 0.62), h);
			base *= 1.0 - 0.25 * (step(fg.x, 0.03) + step(fg.y, 0.03)) * (1.0 - lod);
			spec = 0.15;
		} else {
			float ex = min(P.x - ${Ve(vo.x0)}, ${Ve(vo.x1)} - P.x);
			float ez = min(P.z - ${Ve(vo.z0)}, ${Ve(vo.z1)} - P.z);
			float edge = min(ex, ez);
			float dx = abs(P.x - ${Ve(X.cx)}), dz = abs(P.z - ${Ve(X.cz)});
			float rc = length(vec2(dx, dz));
			if (edge < ${Ve(Yi)}) {
				// brick path laid in rows, with a stone kerb
				vec2 q = ex < ez ? P.zx : P.xz;
				base = brick(q * vec2(1.0, 2.6), 0.4) * 0.9;
				if (abs(edge - ${Ve(Yi)}) < 0.08) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (rc < ${Ve(ff)}) {
				// brick in rings round the wellhead
				float ang = atan(P.z - ${Ve(X.cz)}, P.x - ${Ve(X.cx)});
				vec2 q = vec2(ang * rc, rc);
				base = brick(q * vec2(1.0, 2.6), 0.5) * 0.92;
				if (abs(rc - ${Ve(ff)}) < 0.1) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (dx < ${Ve(Vi)} || dz < ${Ve(Vi)}) {
				// pale gravel
				float g = noise(P.xz * 40.0) * 0.6 + noise(P.xz * 9.0) * 0.4;
				base = mix(vec3(0.66, 0.58, 0.46), vec3(0.86, 0.79, 0.66), mix(g, 0.5, lod));
				base *= 0.94 + 0.12 * noise(P.xz * 1.3);
				float e = min(${Ve(Vi)} - min(dx, dz), 1.0);
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
		ao *= 0.55 + 0.45 * smoothstep(0.0, ${Ve(Xi)}, P.y) * (0.6 + 0.4 * n);
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
	bool walk = (P.x < ${Ve(X.westCol)} || P.x > ${Ve(X.eastCol)} || P.z > ${Ve(X.northCol)}) && P.y < ${Ve(ri+.05)} && P.z > ${Ve(X.south-.1)} && P.z < ${Ve(X.northBack+.5)};
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
}`,N6=`
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
}`,C6=`
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
}`,R6=`
precision highp float;
${j2}
uniform sampler2D leaves;
varying vec2 v_uv;
varying vec3 v_light, v_tint, v_bloom, v_pos;
${J2}
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
}`;function I6(e,t,o){let n=e.texture({data:[[o]],min:"linear",mag:"linear"});return fetch(t).then(r=>{if(!r.ok)throw new Error("Could not load "+t);return r.blob()}).then(r=>createImageBitmap(r,{premultiplyAlpha:"none"})).then(r=>n({data:r,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(r=>console.error(r)),n}$u.exports=e=>{let t=x6(),o=b6(),n=I6(e,"res/garden/foliage.webp",[0,0,0,0]),r=Date.now(),a=()=>Pu.motion?window.__streetClock!==void 0?window.__streetClock:(Date.now()-r)/1e3:20,i=e({frag:z6,vert:N6,attributes:{position:t.position,normal:t.normal,attr:t.attr},elements:new Uint32Array(t.elements),uniforms:{time:a,gardenDetail:()=>Pu.gardenDetail}}),s=e({frag:R6,vert:C6,attributes:{center:o.center,corner:o.corner,par:o.par,light:o.light,tint:o.tint,bloom:o.bloom},elements:new Uint32Array(o.elements),uniforms:{leaves:n,time:a},cull:{enable:!1},count:()=>Math.floor(o.elements.length*Pu.leafShare/6)*6});return function(){i(),s()}};$u.exports.layout={G:X,YARD:vo,SUN:pa}});var ag=pe((B8,rg)=>{"use strict";var P6=Fn().GLSL,O6=Ri(),{C:ng}=On(),Bn=ng.x1+.35,ju=ng.zc,Du=[Bn-7.3,2,ju],tg=5.2*Math.PI/180,og=2100,F6=725,G6=1288,$6=1450,D6=2576,Ca=ju-3.2,xf=ju+3.3,qu=Bn+5,Hu=Bn+11.7,cs=3.9,Cc=Bn+22.7,mf=40;function q6(){let e=[],t=[],o=[],n=[],r=O6.createBuilder(e,t,o,n),a=(l,d,h,p,u,v)=>{let m=[];for(let g=0;g<=u;g++){m.push([]);for(let y=0;y<=v;y++){let b=[0,1,2].map(M=>l[M]+d[M]*g/u+h[M]*y/v);m[g].push(r.vert(b,p,[0,0,0]))}}for(let g=0;g<u;g++)for(let y=0;y<v;y++)r.tri(m[g][y],m[g+1][y],m[g+1][y+1]),r.tri(m[g][y],m[g+1][y+1],m[g][y+1])},i=xf-Ca,s=.7;a([Bn-s,0,Ca],[qu-Bn+s,0,0],[0,0,i],[0,1,0],6,4);let c=Hu-qu,f=Math.hypot(c,cs);return a([qu,0,Ca],[c,cs,0],[0,0,i],[-cs/f,c/f,0],6,4),a([Hu,cs,Ca],[Cc-Hu,0,0],[0,0,i],[0,1,0],6,4),a([Bn-s,0,Ca],[Cc-Bn+s,0,0],[0,mf,0],[0,0,1],12,12),a([Bn-s,0,xf],[Cc-Bn+s,0,0],[0,mf,0],[0,0,-1],12,12),a([Cc,0,Ca],[0,mf,0],[0,0,i],[-1,0,0],8,4),a([Bn-s,mf,Ca],[Cc-Bn+s,0,0],[0,0,i],[0,-1,0],6,4),{position:e,normal:t,elements:o,attr:n}}var tr=e=>e.toFixed(5),gf=[[Bn+3.4,3.7,Ca+.01,1],[Bn+8.6,4.1,xf-.01,-1],[Bn+14.8,cs+3.3,Ca+.01,1],[Bn+19.6,cs+3.6,xf-.01,-1]],H6=`
precision highp float;
${P6}
uniform sampler2D photo;
uniform float time;
varying vec3 v_pos;
varying vec3 v_normal;
const int NLAMP = ${gf.length};
vec4 LAMP[NLAMP];

void main() {
	${gf.map((e,t)=>`LAMP[${t}] = vec4(${tr(e[0])}, ${tr(e[1])}, ${tr(e[2])}, ${tr(e[3])});`).join(`
	`)}
	vec3 d = v_pos - vec3(${tr(Du[0])}, ${tr(Du[1])}, ${tr(Du[2])});
	float c = ${tr(Math.cos(tg))}, s = ${tr(Math.sin(tg))};
	float fw = d.x * c + d.y * s;
	float up = -d.x * s + d.y * c;
	fw = max(fw, 0.05);
	vec2 px = vec2(${tr(F6)} + ${tr(og)} * d.z / fw, ${tr(G6)} - ${tr(og)} * up / fw);
	vec2 uv = px / vec2(${tr($6)}, ${tr(D6)});
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
	for (int i = 0; i < ${gf.length}; i++) {
		vec4 L = LAMP[i];                       // x, y, z, side (+1 left wall, -1 right)
		vec3 d = L.xyz - v_pos;
		float dd = dot(d, d);
		float fl = 0.92 + 0.05 * sin(time * 7.3 + float(i) * 2.1) + 0.03 * sin(time * 17.0 + float(i));
		// the wall it hangs on is lit across, the paving from above
		float face = v_normal.y > 0.5 ? max(normalize(d).y, 0.0) : 0.35 + 0.65 * max(dot(v_normal, normalize(d)), 0.0);
		lit += albedo * vec3(1.0, 0.62, 0.30) * face * fl * lampK * 3.2 / (0.6 + dd * 0.45);
	}
	gl_FragColor = vec4(lit, 1.0);
}`,j6=`
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
}`;rg.exports=e=>{let t=q6(),o=e.texture({data:[[[120,105,85]]],min:"linear",mag:"linear"});fetch("res/florence/photo.jpg").then(s=>{if(!s.ok)throw new Error("Could not load the Florence photo");return s.blob()}).then(s=>createImageBitmap(s)).then(s=>o({data:s,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(s=>console.error(s));let n=e({frag:H6,vert:j6,attributes:{position:t.position,normal:t.normal},elements:new Uint32Array(t.elements),uniforms:{photo:o},cull:{enable:!1}}),r={pos:[],nrm:[],k:[],idx:[]},a=(s,c,f)=>{let[l,d,h]=s,p=[[[1,0,0],[0,1,0],[0,0,1]],[[-1,0,0],[0,1,0],[0,0,-1]],[[0,0,1],[0,1,0],[-1,0,0]],[[0,0,-1],[0,1,0],[1,0,0]],[[0,1,0],[0,0,1],[1,0,0]],[[0,-1,0],[0,0,1],[-1,0,0]]];for(let[u,v,m]of p){let g=r.pos.length/3;for(let[y,b]of[[-1,-1],[1,-1],[1,1],[-1,1]])r.pos.push(l+u[0]*c[0]+v[0]*y*c[0]+m[0]*b*c[0],d+u[1]*c[1]+v[1]*y*c[1]+m[1]*b*c[1],h+u[2]*c[2]+v[2]*y*c[2]+m[2]*b*c[2]),r.nrm.push(...u),r.k.push(f);r.idx.push(g,g+1,g+2,g,g+2,g+3)}};for(let s of gf){let c=s[3],f=s[2]+c*.42;a([s[0],s[1],f],[.11,.17,.11],1);for(let l of[-1,1])for(let d of[-1,1])a([s[0]+l*.11,s[1],f+d*.11],[.014,.18,.014],0);a([s[0],s[1]+.2,f],[.15,.03,.15],0),a([s[0],s[1]+.27,f],[.05,.05,.05],0),a([s[0],s[1]-.19,f],[.09,.025,.09],0),a([s[0],s[1]+.34,s[2]+c*.21],[.015,.015,.21],0),a([s[0],s[1]+.15,s[2]+c*.03],[.04,.24,.03],0)}let i=e({vert:`
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
		}`,attributes:{position:r.pos,normal:r.nrm,k:r.k},elements:new Uint16Array(r.idx),cull:{enable:!1}});return function(){n(),i()}}});var fg=pe((W8,lg)=>{"use strict";var U6=Fn().GLSL,{A:bf,BENCH:Bu,SHAFT:Uu,TREE:Rc,oculusGLSL:B6}=Pr(),W6=Cr(),yf=Rc.sxz,ig=Rc.sy,sg=Rc.yaw;function V6(e){let t=new DataView(e),o=t.getUint32(4,!0),n=t.getUint32(8,!0),r=t.getUint32(12,!0),a=[0,1,2].map(h=>t.getFloat32(16+h*4,!0)),i=[0,1,2].map(h=>t.getFloat32(28+h*4,!0)),s=40,c=new Uint16Array(e,s,o*3);s+=o*6;let f=new Uint16Array(e,s,o*2);s+=o*4;let l=new Int8Array(e,s,o*3);s+=o*3,s=s+3&-4;let d=new Uint32Array(e,s,r);return{nV:o,nWood:n,nI:r,mn:a,sz:i,pos:c,uv:f,nrm:l,idx:d}}function X6(e){let t=new Float32Array(e.nV*3),o=new Float32Array(e.nV*3),n=new Float32Array(e.nV*2),r=new Float32Array(e.nV),a=Math.cos(sg),i=Math.sin(sg);for(let s=0;s<e.nV;s++){let c=(e.mn[0]+e.pos[s*3]/65535*e.sz[0])*yf,f=(e.mn[1]+e.pos[s*3+1]/65535*e.sz[1])*ig,l=(e.mn[2]+e.pos[s*3+2]/65535*e.sz[2])*yf;t[s*3]=bf.cx+a*c+i*l,t[s*3+1]=Bu.soil+.02+f,t[s*3+2]=bf.zc-i*c+a*l;let d=e.nrm[s*3]/127/yf,h=e.nrm[s*3+1]/127/ig,p=e.nrm[s*3+2]/127/yf,u=Math.hypot(d,h,p)||1;d/=u,h/=u,p/=u,o[s*3]=a*d+i*p,o[s*3+1]=h,o[s*3+2]=-i*d+a*p,n[s*2]=e.uv[s*2]/65535,n[s*2+1]=e.uv[s*2+1]/65535,r[s]=s>=e.nWood?1:0}return{position:t,normal:o,uv:n,leaf:r,elements:e.idx}}function cg(e,t,o,n){let r=e.texture({data:[[n]],min:"linear",mag:"linear"});return fetch(t).then(a=>{if(!a.ok)throw new Error("Could not load "+t);return a.blob()}).then(a=>createImageBitmap(a,{premultiplyAlpha:"none"}).catch(()=>new Promise((i,s)=>{let c=new Image;c.onload=()=>i(c),c.onerror=s,c.src=URL.createObjectURL(a)}))).then(a=>r({data:a,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",...o})).catch(a=>console.error(a)),r}var wn=e=>e.toFixed(4),ls=Rc.crownC,fs=Rc.crownR,Y6=`
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

const vec3 SHAFT = vec3(${wn(Uu[0])}, ${wn(Uu[1])}, ${wn(Uu[2])});

void main() {
	vec3 p = position;
	// the air in the court is never quite still. The whole tree leans
	// with it, slowly, more the higher and the further out on a limb
	// (wood and leaves together, so every leaf stays on its twig) ...
	float h = max(p.y - 1.2, 0.0);
	vec2 out2 = p.xz - vec2(${wn(bf.cx)}, ${wn(bf.zc)});
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
	vec3 cc = vec3(${wn(ls[0])}, ${wn(ls[1])}, ${wn(ls[2])});
	vec3 cr = vec3(${wn(fs[0])}, ${wn(fs[1])}, ${wn(fs[2])});
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
}`,ii=Ya(),K6=`
precision highp float;
${U6}
uniform float time;
${ii.lanternGLSL(ii.TREE_LANTERN)}
const vec3 LANTERN_POS = vec3(${ii.LANTERNS[ii.TREE_LANTERN[0]].x.toFixed(3)}, ${ii.LANTERNS[ii.TREE_LANTERN[0]].y.toFixed(3)}, ${ii.LANTERNS[ii.TREE_LANTERN[0]].z.toFixed(3)});
uniform sampler2D leaves, bark;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_leaf, v_shade;
varying vec3 v_eye;

${B6()}

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
	vec3 rel = (v_pos - vec3(${wn(ls[0])}, ${wn(ls[1])}, ${wn(ls[2])})) / vec3(${wn(fs[0])}, ${wn(fs[1])}, ${wn(fs[2])});
	float outer = clamp(length(rel), 0.0, 1.0);
	float ao = mix(0.38, 1.0, outer * outer) * (0.75 + 0.25 * smoothstep(0.4, 2.0, v_pos.y));
	// and the trunk darkens where it meets the soil
	ao *= 0.6 + 0.4 * smoothstep(${wn(Bu.soil)}, ${wn(Bu.soil+.5)}, v_pos.y);

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
}`;lg.exports=e=>{let t=null,o=cg(e,"res/tree/leaves.webp",{wrapS:"clamp",wrapT:"clamp"},[60,80,40,0]),n=cg(e,"res/tree/bark.jpg",{wrapS:"repeat",wrapT:"repeat"},[90,80,70]),r=Date.now();return fetch("res/tree.bin").then(a=>{if(!a.ok)throw new Error("Could not load the tree");return a.arrayBuffer()}).then(a=>{let i=X6(V6(a));t=e({vert:Y6,frag:K6,attributes:{position:i.position,normal:i.normal,uv:i.uv,leaf:i.leaf},elements:i.elements,uniforms:{leaves:o,bark:n,time:()=>W6.motion?typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-r)/1e3:0},cull:{enable:!1}})}).catch(a=>console.error(a)),function(){t&&t()}}});var yg=pe((V8,Yu)=>{"use strict";var Xu=Fn().GLSL,{A:hg,BENCH:mg,oculusGLSL:gg}=Pr(),ug=Cr(),Q6=1.74,Z6=1.877,ma=Q6/Z6,Qi={x:hg.cx-1.22,z:hg.zc+.02,hipY:mg.seat+.115},hr=(e,t)=>[e[3]*t[0]+e[0]*t[3]+e[1]*t[2]-e[2]*t[1],e[3]*t[1]-e[0]*t[2]+e[1]*t[3]+e[2]*t[0],e[3]*t[2]+e[0]*t[1]-e[1]*t[0]+e[2]*t[3],e[3]*t[3]-e[0]*t[0]-e[1]*t[1]-e[2]*t[2]],Wu=e=>[-e[0],-e[1],-e[2],e[3]],Zi=(e,t)=>{let o=Math.hypot(e[0],e[1],e[2])||1,n=Math.sin(t/2);return[e[0]/o*n,e[1]/o*n,e[2]/o*n,Math.cos(t/2)]},Vu=(e,t,o)=>hr(Zi([0,0,1],o*Math.PI/180),hr(Zi([0,1,0],t*Math.PI/180),Zi([1,0,0],e*Math.PI/180))),J6=e=>{let t=Math.hypot(...e)||1;return e.map(o=>o/t)};function Ra(e,t,o){let[n,r,a,i]=t,s=n*n,c=r*r,f=a*a,l=n*r,d=n*a,h=r*a,p=i*n,u=i*r,v=i*a;return[(1-2*(c+f))*o[0],2*(l+v)*o[0],2*(d-u)*o[0],0,2*(l-v)*o[1],(1-2*(s+f))*o[1],2*(h+p)*o[1],0,2*(d+u)*o[2],2*(h-p)*o[2],(1-2*(s+c))*o[2],0,e[0],e[1],e[2],1]}function $r(e,t){let o=new Array(16);for(let n=0;n<4;n++)for(let r=0;r<4;r++)o[n*4+r]=e[r]*t[n*4]+e[4+r]*t[n*4+1]+e[8+r]*t[n*4+2]+e[12+r]*t[n*4+3];return o}function eM(e){let t=Math.hypot(e[0],e[1],e[2]),o=Math.hypot(e[4],e[5],e[6]),n=Math.hypot(e[8],e[9],e[10]),r=e[0]/t,a=e[1]/t,i=e[2]/t,s=e[4]/o,c=e[5]/o,f=e[6]/o,l=e[8]/n,d=e[9]/n,h=e[10]/n,p=r+c+h,u;if(p>0){let v=Math.sqrt(p+1)*2;u=[(f-d)/v,(l-i)/v,(a-s)/v,v/4]}else if(r>c&&r>h){let v=Math.sqrt(1+r-c-h)*2;u=[v/4,(s+a)/v,(l+i)/v,(f-d)/v]}else if(c>h){let v=Math.sqrt(1+c-r-h)*2;u=[(s+a)/v,v/4,(d+f)/v,(l-i)/v]}else{let v=Math.sqrt(1+h-r-c)*2;u=[(l+i)/v,(d+f)/v,v/4,(a-s)/v]}return J6(u)}var _f={LeftUpLeg:[-62,10,0],LeftLeg:[122,0,0],LeftFoot:[30,0,0],RightUpLeg:[0,-3,-2],RightLeg:[4,0,0],RightFoot:[35,-12,0],Neck:[10,0,0],Head:[6,0,0],LeftShoulder:[0,0,6],LeftArm:[-112.4,3.4,62.5],LeftForeArm:[0,-122.6,0],LeftHand:[0,0,-10],RightShoulder:[0,0,0],RightArm:[0,78,-8],RightForeArm:[0,14,0],RightHand:[0,0,0]};for(let e of["Left","Right"]){let t=e==="Left"?-1:1,o=e==="Left"?1:.35;["Index","Middle","Ring","Pinky"].forEach((n,r)=>{_f[e+"Hand"+n+"1"]=[0,0,t*(18+r*6)*o],_f[e+"Hand"+n+"2"]=[0,0,t*(26+r*6)*o],_f[e+"Hand"+n+"3"]=[0,0,t*16*o]})}function Ki(e,t,o){let n=e-t;return n-=Math.round(n),Math.exp(-(n/o)*(n/o))}function dg(e){let t=9+20*Math.cos(2*Math.PI*e),o=4+13*Ki(e,.14,.07)+57*Ki(e,.72,.12),n=5*Ki(e,.06,.04)-9*Ki(e,.42,.12)+17*Ki(e,.62,.05)-3*Ki(e,.85,.1),r=-26*Ki(e,.58,.06);return{hip:t,knee:o,ankle:n,toe:r}}function tM(e){let t=(e%1+1)%1,o=dg(t),n=dg(t+.5),r=Math.cos(2*Math.PI*t),a=Math.sin(2*Math.PI*t);return{swing:{LeftArm:[16*r,0,0],RightArm:[-16*r,0,0],LeftForeArm:[0,-14-8*Math.max(0,-r),0],RightForeArm:[0,14+8*Math.max(0,r),0]},pose:{Hips:[0,5*a,1.5*Math.cos(4*Math.PI*t)],Spine1:[3,-4*a,0],LeftUpLeg:[-o.hip,0,0],LeftLeg:[o.knee,0,0],LeftFoot:[o.ankle,0,0],LeftToeBase:[o.toe,0,0],RightUpLeg:[-n.hip,0,0],RightLeg:[n.knee,0,0],RightFoot:[n.ankle,0,0],RightToeBase:[n.toe,0,0],LeftArm:[0,0,-78],RightArm:[0,0,78],LeftHand:[0,0,-8],RightHand:[0,0,8]},sway:.022*r}}var pg=`
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
}`,Mf=Ya(),vg=`
precision highp float;
${Xu}
uniform float time;
${Mf.lanternGLSL(Mf.TREE_LANTERN)}
uniform sampler2D tex;
uniform float alphaCut, skin, glowLight, kind, alphaScale;
uniform vec3 glowPos;
// in the confessional: the priest's lamp (xyz, strength), and how much of
// the court's own light reaches him (0 there)
uniform vec4 boothLamp;
uniform float court;
varying vec3 v_pos, v_n, v_eye;
varying vec2 v_uv;
${gg()}
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
}`;function oM(e,t){let o=e.texture({data:[[[120,100,90,255]]],min:"linear",mag:"linear"});return fetch(t).then(n=>{if(!n.ok)throw new Error("Could not load "+t);return n.blob()}).then(n=>createImageBitmap(n,{premultiplyAlpha:"none"}).catch(()=>new Promise((r,a)=>{let i=new Image;i.onload=()=>r(i),i.onerror=a,i.src=URL.createObjectURL(n)}))).then(n=>o({data:n,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(n=>console.error(n)),o}var xg={w:.13,h:.2},wf=e=>.011*(1-Math.pow(1-e,3));function nM(){let e=[],t=[],o=[],n=[],r=[],a=(v,m,g,y,b,M,T)=>{let L=e.length/3;[v,m,g,y].forEach((C,D)=>{e.push(...C),t.push(...b),o.push(...T[D]),n.push(M)}),r.push(L,L+1,L+2,L,L+2,L+3)},{w:i,h:s}=xg,c=s/2,f=[[0,1],[1,1],[1,0],[0,0]],l=-.006,d=i+.001,h=c+.001;a([0,l,-h],[d,l,-h],[d,l,h],[0,l,h],[0,-1,0],1,[[0,1],[1,1],[1,0],[0,0]]),a([0,l+.001,-h],[0,l+.001,h],[d,l+.001,h],[d,l+.001,-h],[0,1,0],2,f),a([-d,l,-h],[0,l,-h],[0,l,h],[-d,l,h],[0,-1,0],2,f),a([-d,l+.001,-h],[-d,l+.001,h],[0,l+.001,h],[0,l+.001,-h],[0,1,0],2,f);let p=8;for(let v of[1,-1]){for(let g=0;g<p;g++){let y=g/p,b=(g+1)/p,M=(.002+y*(i-.002))*v,T=(.002+b*(i-.002))*v,L=wf(y),C=wf(b),D=v>0?y:1-y,B=v>0?b:1-b,W=1,Q=-(C-L)/(T-M);a([M,L,-c],[T,C,-c],[T,C,c],[M,L,c],[Q,W,0],3,[[D,1],[B,1],[B,0],[D,0]]),a([M,l+.001,c],[T,l+.001,c],[T,C,c],[M,L,c],[0,0,1],4,f),a([M,L,-c],[T,C,-c],[T,l+.001,-c],[M,l+.001,-c],[0,0,-1],4,f)}let m=i*v;a([m,l+.001,-c],[m,wf(1),-c],[m,wf(1),c],[m,l+.001,c],[v,0,0],4,f)}let u=10;for(let v=0;v<u;v++){let m=v/u,g=(v+1)/u,y=e.length/3;for(let[b,M]of[[m,-c],[g,-c],[g,c],[m,c]])e.push(b,0,M),t.push(0,1,0),o.push(b,(M+c)/s),n.push(5);r.push(y,y+1,y+2,y,y+2,y+3)}return{pos:e,nrm:t,uv:o,kind:n,idx:r}}function rM(){if(typeof document=="undefined")return null;let e=document.createElement("canvas");e.width=512,e.height=768;let t=e.getContext("2d");t.fillStyle="#ebe5d8",t.fillRect(0,0,512,768);let o=7,n=()=>(o=o*16807%2147483647,o/2147483647),r=(i,s,c,f,l,d,h)=>{for(let p=0;p<d;p++){let u=i+(n()-.5)*c*2,v=s+(n()-.5)*f*2,m=20+n()*60,g=t.createRadialGradient(u,v,0,u,v,m);g.addColorStop(0,`rgba(${l},${h})`),g.addColorStop(1,`rgba(${l},0)`),t.fillStyle=g,t.fillRect(u-m,v-m,m*2,m*2)}},a=t.createRadialGradient(236,280,10,256,300,125);a.addColorStop(0,"#3d4866"),a.addColorStop(1,"#232a3d"),t.fillStyle=a,t.beginPath(),t.arc(256,300,122,0,Math.PI*2),t.fill(),t.fillStyle="#b8873f",t.beginPath(),t.moveTo(64,452);for(let i=64;i<=448;i+=16)t.lineTo(i,446+n()*4);for(let i=448;i>=64;i-=16)t.lineTo(i,466+n()*4);t.fill(),t.strokeStyle="#2b2f3a",t.lineCap="round",[[120,392,500,5],[160,352,530,4],[205,307,558,3]].forEach(([i,s,c,f])=>{t.lineWidth=f,t.beginPath(),t.moveTo(i,c),t.lineTo(s,c),t.stroke()});for(let i=0;i<9e3;i++)t.fillStyle=`rgba(90,80,60,${n()*.05})`,t.fillRect(n()*512,n()*768,1,1);return e}var aM=`
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
		float r = u * ${xg.w.toFixed(3)};
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
}`,iM=`
precision highp float;
${Xu}
uniform float time;
${Mf.lanternGLSL(Mf.TREE_LANTERN)}
uniform sampler2D cover;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_kind;
${gg()}
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
}`;function sM(){let e=[],t=[],o=[],n=[],r=[],a=[.36,.11,.07],i=[.1,.07,.05],s=[.78,.76,.72],c=[.55,.41,.26],f=[.8,.55,.22],l=[[0,-.15,f,2],[.0012,-.147,f,2],[.004,-.138,f,2],[.0058,-.125,c,2],[.0064,-.112,c,2],[.006,-.104,c,2],[.0066,-.102,s,1],[.0066,-.08,s,1],[.0062,-.074,s,1],[.0068,-.072,s,1],[.007,-.066,s,1],[.0058,-.064,a,0],[.0062,-.04,a,0],[.0058,0,a,0],[.0046,.06,a,0],[.0036,.11,a,0],[.003,.13,i,0],[.0026,.136,i,0],[0,.139,i,0]],d=16;for(let h=0;h<l.length;h++){let[p,u,v,m]=l[h],g=m===2?.45:1;for(let y=0;y<=d;y++){let b=y/d*Math.PI*2;e.push(Math.cos(b)*p,u,Math.sin(b)*p*g);let M=Math.max(h-1,0),T=Math.min(h+1,l.length-1),L=l[T][0]-l[M][0],C=l[T][1]-l[M][1],D=Math.hypot(L,C)||1;t.push(Math.cos(b)*C/D,-L/D,Math.sin(b)*C/D/g),o.push(...v),n.push(m)}}for(let h=0;h<l.length-1;h++)for(let p=0;p<d;p++){let u=h*(d+1)+p,v=u+d+1;r.push(u,v,u+1,u+1,v,v+1)}return{pos:e,nrm:t,col:o,mat:n,idx:r}}var cM=`
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
}`,lM=`
precision highp float;
${Xu}
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
}`,fM=`
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
}`,hM=`
precision highp float;
uniform float pulse;
varying vec2 v_c;
void main() {
	float d = length(v_c);
	float g = exp(-d * d * 6.0) * 0.10 + exp(-d * d * 30.0) * 0.08;
	gl_FragColor = vec4(vec3(1.0, 0.80, 0.45) * g * (0.75 + 0.25 * pulse), 1.0);
}`;Yu.exports=e=>{let t="res/avatar/",o=null,n=Date.now(),r=()=>typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-n)/1e3,a={glowPos:[Qi.x,1.9,Qi.z],glow:0};Promise.all([fetch(t+"avatar.json").then(L=>L.json()),fetch(t+"avatar.bin").then(L=>L.arrayBuffer())]).then(([L,C])=>{o=s(L,C)}).catch(L=>console.error(L));let i=e.texture({data:[[[255,255,255,255]]]});function s(L,C){let D=(fe,Xe)=>new Float32Array(C,fe,Xe),B=L.bones,W=B.length,Q={};B.forEach((fe,Xe)=>{Q[fe.name]=Xe});let ce=[];for(let fe=0;fe<W;fe++)ce.push(Array.from(D(L.ibm+fe*64,16)));let ee=B.map(fe=>Ra(fe.t,fe.r,fe.s)),te=[];for(let fe=0;fe<W;fe++){let Xe=B[fe].parent;te[fe]=Xe<0?ee[fe]:$r(te[Xe],ee[fe])}let Ke=te.map(eM),ve=L.meshes.map(fe=>{let Xe=D(fe.pos,fe.n*3),pt=D(fe.nrm,fe.n*3),lt=D(fe.uv,fe.n*2),oo=new Uint8Array(C,fe.jnt,fe.n*4),Wt=D(fe.wgt,fe.n*4),w=new Uint16Array(C,fe.idx,fe.ni),Mt={};for(let qn in fe.morphs){let Xt=fe.morphs[qn];Mt[qn]={idx:new Uint16Array(C,Xt.idx,Xt.n),d:D(Xt.d,Xt.n*3)}}let no=new Float32Array(fe.n*3),ot=new Float32Array(fe.n*3),wo=new Float32Array(fe.n*3),Tt=e.buffer({data:no,usage:"dynamic"}),et=e.buffer({data:ot,usage:"dynamic"}),jt=/hair/.test(fe.name),ro=/EyeAO|Eyelash/.test(fe.name),Ao=/Body|Head/.test(fe.name),Po=fe.kind||0;return{m:fe,pos:Xe,nrm:pt,uv:lt,jnt:oo,wgt:Wt,idx:w,morphs:Mt,outP:no,outN:ot,work:wo,pb:Tt,nbuf:et,tex:fe.tex?oM(e,t+fe.tex):i,kind:Po,alphaScale:/EyeAO/.test(fe.name)?.25:1,blend:fe.blend||jt,alphaCut:jt?.35:ro?.02:0,skin:Ao?1:0}}),Te=e({vert:pg,frag:vg,attributes:{position:e.prop("pb"),normal:e.prop("nb"),uv:e.prop("uv")},elements:e.prop("el"),uniforms:{tex:e.prop("tex"),alphaCut:e.prop("alphaCut"),skin:e.prop("skin"),kind:e.prop("kind"),alphaScale:e.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>M?M.lamp:[0,0,0,0],court:()=>M?0:1},cull:{enable:!1}}),re=e({vert:pg,frag:vg,attributes:{position:e.prop("pb"),normal:e.prop("nb"),uv:e.prop("uv")},elements:e.prop("el"),uniforms:{tex:e.prop("tex"),alphaCut:e.prop("alphaCut"),skin:e.prop("skin"),kind:e.prop("kind"),alphaScale:e.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>M?M.lamp:[0,0,0,0],court:()=>M?0:1},cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"one minus src alpha"}}}),vt=.3;for(let fe of ve)if(fe.uvBuf=e.buffer(fe.uv),/Body/.test(fe.m.name)){let Xe=[],pt=[];for(let lt=0;lt<fe.idx.length;lt+=3){let oo=fe.idx[lt],Wt=fe.idx[lt+1],w=fe.idx[lt+2];(fe.pos[oo*3+1]<vt&&fe.pos[Wt*3+1]<vt&&fe.pos[w*3+1]<vt?pt:Xe).push(oo,Wt,w)}fe.el=e.elements({data:new Uint16Array(Xe),type:"uint16"}),pt.length&&(fe.sockEl=e.elements({data:new Uint16Array(pt),type:"uint16"}))}else fe.el=e.elements({data:fe.idx,type:"uint16"});let xt=te[Q.Hips],$t=Zi([1,0,0],-Math.PI/2),yt=$r(Ra([Qi.x-xt[12]*ma,Qi.hipY-xt[14]*ma,Qi.z+xt[13]*ma],$t,[1,1,1]),Ra([0,0,0],[0,0,0,1],[ma,ma,ma])),Bt=new Array(W),Lt=-1,Qt=(fe,Xe,pt)=>$r(Ra([fe,0,Xe],Zi([0,1,0],pt),[1,1,1]),Ra([0,0,0],[0,0,0,1],[ma,ma,ma])),je=["LeftFoot","RightFoot","LeftToeBase","RightToeBase"].map(fe=>Q[fe]),Dt=je.map(fe=>te[fe][13]*ma);function Fe(fe){let Xe=tM(fe.phase),pt={},lt=ot=>{for(let wo in ot){let Tt=ot[wo],et=Vu(Tt[0],Tt[1],Tt[2]);pt[wo]=pt[wo]?hr(pt[wo],et):et}};lt(Xe.swing),lt(Xe.pose);let oo=Math.cos(fe.heading),Wt=-Math.sin(fe.heading),w=Qt(fe.x+oo*Xe.sway,fe.z+Wt*Xe.sway,fe.heading),Mt=new Array(W);for(let ot=0;ot<W;ot++){let wo=B[ot],Tt=ee[ot],et=pt[wo.name];if(et){let jt=Ke[ot],ro=hr(Wu(jt),hr(et,jt));Tt=Ra(wo.t,hr(wo.r,ro),wo.s)}Mt[ot]=wo.parent<0?$r(w,Tt):$r(Mt[wo.parent],Tt)}let no=1/0;je.forEach((ot,wo)=>{no=Math.min(no,Mt[ot][13]-Dt[wo])});for(let ot=0;ot<W;ot++)Mt[ot]=Mt[ot].slice(),Mt[ot][13]-=no,Bt[ot]=$r(Mt[ot],ce[ot]);return{blink:0}}function Qe(fe,Xe){let pt=Math.sin(fe*2*Math.PI/4.6),lt=Math.sin(fe*.37)*.6+Math.sin(fe*.83+1)*.4,oo={LeftUpLeg:[-86,-6,0],RightUpLeg:[-84,7,0],LeftLeg:[88,0,0],RightLeg:[82,0,0],LeftFoot:[-4,0,0],RightFoot:[-2,0,0],Spine:[6,0,0],Spine1:[5+pt*.8,0,0],Spine2:[4+pt*.6,0,0],Neck:[10,0,0],Head:[12+lt*2,lt*2.5,0],LeftArm:[0,0,-72],RightArm:[0,0,72],LeftForeArm:[0,-62,0],RightForeArm:[0,62,0],LeftHand:[0,0,-10],RightHand:[0,0,10]},Wt={};for(let Tt in oo){let et=oo[Tt];Wt[Tt]=Vu(et[0],et[1],et[2])}let w=Qt(Xe.x,Xe.z,Xe.heading),Mt=new Array(W);for(let Tt=0;Tt<W;Tt++){let et=B[Tt],jt=ee[Tt],ro=Wt[et.name];if(ro){let Ao=Ke[Tt],Po=hr(Wu(Ao),hr(ro,Ao));jt=Ra(et.t,hr(et.r,Po),et.s)}Mt[Tt]=et.parent<0?$r(w,jt):$r(Mt[et.parent],jt)}let ot=Mt[Q.Hips][13]-(Xe.y+.1);for(let Tt=0;Tt<W;Tt++)Mt[Tt]=Mt[Tt].slice(),Mt[Tt][13]-=ot,Bt[Tt]=$r(Mt[Tt],ce[Tt]);let wo=fe%4.1;return{blink:wo<.16?Math.sin(wo/.16*Math.PI):0}}function qe(fe,Xe){if(M)return Qe(fe,M);if(Xe)return Fe(Xe);let pt=Math.sin(fe*2*Math.PI/4.2),lt=fe%3.7,oo=lt<.16?Math.sin(lt/.16*Math.PI):0,w={RightArm:[0,0,11*Math.sin(fe*.45)],RightForeArm:[0,8,0]};["Index","Middle","Ring","Pinky"].forEach((et,jt)=>{let ro=Math.sin(fe*1.1-jt*.5);w["RightHand"+et+"1"]=[0,0,8+12*ro],w["RightHand"+et+"2"]=[0,0,6+10*ro]});let Mt={},no=(et,jt)=>{for(let ro in et){let Ao=et[ro],Po=Vu(Ao[0]*jt,Ao[1]*jt,Ao[2]*jt);Mt[ro]=Mt[ro]?hr(Mt[ro],Po):Po}};no(_f,1),no({Spine1:[pt*.8,0,0],Spine2:[pt*.6,0,0]},1),no(w,1);let ot=new Array(W),wo=new Array(W);for(let et=0;et<W;et++){let jt=B[et],ro=ee[et],Ao=Mt[jt.name];if(Ao){let Po=Ke[et],qn=hr(Wu(Po),hr(Ao,Po));ro=Ra(jt.t,hr(jt.r,qn),jt.s)}ot[et]=jt.parent<0?$r(yt,ro):$r(ot[jt.parent],ro),wo[et]=null}for(let et=0;et<W;et++)Bt[et]=$r(ot[et],ce[et]);let Tt=et=>[et[12],et[13],et[14]];return a.headPos=Tt(ot[Q.Head]),a.hipsPos=Tt(ot[Q.Hips]),a.headM=ot[Q.Head],{blink:oo}}function dt(fe,Xe){let{pos:pt,nrm:lt,jnt:oo,wgt:Wt,outP:w,outN:Mt,work:no,m:ot}=fe,wo=ot.n,Tt=pt;if(Xe){no.set(pt);for(let et in fe.morphs){let jt=Xe[et]||0;if(jt<=0)continue;let ro=fe.morphs[et];for(let Ao=0;Ao<ro.idx.length;Ao++){let Po=ro.idx[Ao]*3;no[Po]+=ro.d[Ao*3]*jt,no[Po+1]+=ro.d[Ao*3+1]*jt,no[Po+2]+=ro.d[Ao*3+2]*jt}}Tt=no}for(let et=0;et<wo;et++){let jt=Tt[et*3],ro=Tt[et*3+1],Ao=Tt[et*3+2],Po=lt[et*3],qn=lt[et*3+1],Xt=lt[et*3+2],Fa=0,gi=0,v0=0,ya=0,Ga=0,sa=0;for(let pr=0;pr<4;pr++){let Wn=Wt[et*4+pr];if(Wn===0)continue;let Co=Bt[oo[et*4+pr]];Fa+=Wn*(Co[0]*jt+Co[4]*ro+Co[8]*Ao+Co[12]),gi+=Wn*(Co[1]*jt+Co[5]*ro+Co[9]*Ao+Co[13]),v0+=Wn*(Co[2]*jt+Co[6]*ro+Co[10]*Ao+Co[14]),ya+=Wn*(Co[0]*Po+Co[4]*qn+Co[8]*Xt),Ga+=Wn*(Co[1]*Po+Co[5]*qn+Co[9]*Xt),sa+=Wn*(Co[2]*Po+Co[6]*qn+Co[10]*Xt)}w[et*3]=Fa,w[et*3+1]=gi,w[et*3+2]=v0;let xi=Math.hypot(ya,Ga,sa)||1;Mt[et*3]=ya/xi,Mt[et*3+1]=Ga/xi,Mt[et*3+2]=sa/xi}ot.grid&&!qt&&!M&&rt(fe),fe.pb.subdata(w),fe.nbuf.subdata(Mt)}function rt(fe){let[Xe,pt]=fe.m.grid,lt=fe.outP,oo=fe.outN,Wt=mg.seat+.012;for(let w=1;w<Xe;w++){let Mt=Math.pow(1-w/(Xe-1),1.5);for(let no=0;no<pt;no++){let ot=(w*pt+no)*3;lt[ot+1]>Wt?lt[ot+1]=Wt+(lt[ot+1]-Wt)*Math.max(Mt,.15):lt[ot+1]=Wt}}for(let w=0;w<oo.length;w+=3)oo[w]=0,oo[w+1]=1,oo[w+2]=0}let qt=!1;function Je(fe,Xe){qt=!!Xe;let pt=qe(fe,Xe),lt={eyeBlinkLeft:pt.blink,eyeBlinkRight:pt.blink};for(let oo of ve)dt(oo,Object.keys(oo.morphs).length?lt:null);a.pose=pt}return{parts:ve,update:Je,drawOpaque:Te,drawBlend:re,state:a}}function c(L,C,D){let B=Math.min(1,Math.max(0,(D-L)/(C-L)));return B*B*(3-2*B)}let f=nM(),l=rM(),d=l?e.texture({data:l,flipY:!1,min:"linear",mag:"linear"}):i,h=e({vert:aM,frag:iM,attributes:{position:f.pos,normal:f.nrm,uv:f.uv,kind:f.kind},elements:new Uint16Array(f.idx),uniforms:{model:e.prop("model"),turn:0,fold:1.12,cover:d},cull:{enable:!1}}),p=sM(),u=e({vert:cM,frag:lM,attributes:{position:p.pos,normal:p.nrm,color:p.col,mat:p.mat},elements:new Uint16Array(p.idx),uniforms:{model:e.prop("model"),pulse:e.prop("pulse")},cull:{enable:!1}}),v=e({vert:fM,frag:hM,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{center:e.prop("center"),size:e.prop("size"),pulse:e.prop("pulse")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});function m(L){let C=L.headM,D=ve=>{let Te=Math.hypot(...ve)||1;return ve.map(re=>re/Te)},B=D([C[4],C[5],C[6]]),W=D([C[8],C[9],C[10]]),Q=B,ce=W.map(ve=>-ve),ee=[ce[1]*Q[2]-ce[2]*Q[1],ce[2]*Q[0]-ce[0]*Q[2],ce[0]*Q[1]-ce[1]*Q[0]],te=L.headPos,Ke=[0,1,2].map(ve=>te[ve]+B[ve]*.06+W[ve]*.185);return[ee[0],ee[1],ee[2],0,ce[0],ce[1],ce[2],0,Q[0],Q[1],Q[2],0,Ke[0],Ke[1],Ke[2],1]}let g=-1,y="",b=null,M=null;function T(L){if(!o)return;let C=(ug.motion,r()),D=b?[b.x,b.z,b.heading,b.phase].map(W=>W.toFixed(4)).join():"";(M||D!==y||!b&&Math.abs(C-g)>(ug.isPhone?1/30:0))&&(o.update(C,b),g=C,y=D);for(let W of o.parts)W.blend||(o.drawOpaque({pb:W.pb,nb:W.nbuf,uv:W.uvBuf,el:W.el,tex:W.tex,alphaCut:W.alphaCut,skin:W.skin,kind:W.kind,alphaScale:W.alphaScale}),W.sockEl&&o.drawOpaque({pb:W.pb,nb:W.nbuf,uv:W.uvBuf,el:W.sockEl,tex:i,alphaCut:0,skin:0,kind:8,alphaScale:1}));let B=o.state;if(B.headM&&!b&&!M){h({model:m(B)});let W=B.headPos,Q=Math.sin(C*1.3)*.02,ce=[W[0],W[1]+.62+Q,W[2]+.05],ee=C*.6,te=Ra(ce,hr(Zi([0,1,0],ee),Zi([0,0,1],.18)),[1.2,1.2,1.2]),Ke=.5+.5*Math.sin(C*2);u({model:te,pulse:Ke}),a.glowPos=ce,a.glow=.06+.03*Ke,v({center:[ce[0],ce[1]-.12,ce[2]],size:.1,pulse:Ke})}for(let W of o.parts)W.blend&&o.drawBlend({pb:W.pb,nb:W.nbuf,uv:W.uvBuf,el:W.el,tex:W.tex,alphaCut:W.alphaCut,skin:W.skin,kind:W.kind,alphaScale:W.alphaScale})}return T.state=a,T.place=Qi,T.setWalk=L=>{b=L||null,b&&(a.glow=0)},T.setSeat=L=>{M=L||null,a.glow=M?0:a.glow,g=-1},T};Yu.exports.PLACE=Qi});var Ku=pe((X8,bg)=>{"use strict";bg.exports={name:"Muzammil",title:"Hi, I\u2019m Muzammil.",text:`I\u2019m a self-taught artist. I paint emotions. Grief, longing, love, and the quiet ways we keep holding on. I borrow the light and stillness of the Renaissance to talk about very modern feelings.

This gallery is my portfolio, built brick by pixel, so my work has a home that never closes. Every painting comes with a few words, because some feelings need both a frame and a sentence.

You\u2019ll find me in the tree court, catching sunlight and trying not to get too absorbed. Wander the halls, stay as long as you like, and don\u2019t worry about the time. In here, the only thing that\u2019s drying is the paint.`}});var Zu=pe((Y8,Ag)=>{"use strict";var Eg=Cr(),wg=rc(),si=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function Qu(){return Eg.isPhone||!window.matchMedia||!window.matchMedia("(pointer: fine)").matches?!1:window.innerWidth>=900&&window.innerHeight>=520}var uM=`
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
`,_g=!1;function Sg(){if(_g)return;_g=!0;let e=document.createElement("style");e.textContent=uM,document.head.appendChild(e)}var dM='<svg class="visit-play" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="10.2"/><path d="M10 8.4l6 3.6-6 3.6z" fill="currentColor" stroke="none"/></svg>';function pM(e){return!e||!e.visit||!Qu()?"":(Sg(),`<button type="button" class="visit-btn" data-visit="${si(e.slug||"")}" aria-label="Visit what remained: watch ${si(e.title)} come to life">${dM}<span>Visit what remained</span></button>`)}function vM(e){let t=e.getContext("2d");e.width=e.height=160;let o=t.createImageData(160,160),n=!0,r=0;return function a(i){if(n){if(i-r>70){r=i;let s=o.data;for(let c=0;c<s.length;c+=4){let f=Math.random()*255;s[c]=s[c+1]=s[c+2]=f,s[c+3]=255}t.putImageData(o,0,0),e.style.transform=`translate(${(Math.random()*6-3).toFixed(1)}%, ${(Math.random()*6-3).toFixed(1)}%)`}requestAnimationFrame(a)}}(0),()=>{n=!1}}var Ic=null;function mM(e){if(Ic||!e||!e.visit)return;Sg();let t=document.activeElement;document.body.classList.add("visiting");let o="images/web/"+e.slug+(Eg.isPhone?"-1024":"")+".webp",n=document.createElement("div");n.className="visit",n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.setAttribute("aria-label","Visiting "+e.title),n.innerHTML=`
		<video muted playsinline preload="auto" ${e.visit.poster?`poster="${si(e.visit.poster)}"`:""}></video>
		<img class="visit-art" alt="${si(e.title)}, ${si(wg(e))}" src="${si(o)}">
		<canvas class="visit-grain" aria-hidden="true"></canvas>
		<div class="visit-vignette" aria-hidden="true"></div>
		<div class="visit-bar top" aria-hidden="true"></div>
		<div class="visit-bar bottom" aria-hidden="true"></div>
		<div class="visit-title">
			<span class="visit-kicker">A visit</span>
			<span class="visit-name">${si(e.title)}</span>
			<span class="visit-meta">${si(wg(e))}</span>
		</div>
		<button type="button" class="visit-close" aria-label="Return to the gallery">\xD7</button>
		<button type="button" class="visit-skip">Skip</button>
		<div class="visit-end">
			<button type="button" class="primary" data-act="back">Return to the gallery</button>
			<button type="button" data-act="again">Watch again</button>
		</div>`,document.body.appendChild(n);let r=n.querySelector("video"),a=n.querySelector(".visit-title"),i=vM(n.querySelector(".visit-grain")),s=[],c=(m,g)=>s.push(setTimeout(m,g)),f=m=>m.stopPropagation();["mousedown","pointerdown","click","wheel","touchstart","touchmove"].forEach(m=>n.addEventListener(m,f));let l=m=>{m.key==="Escape"?(m.preventDefault(),v()):m.key===" "&&!(m.target&&m.target.tagName==="BUTTON")&&(m.preventDefault(),p()),m.stopImmediatePropagation()};window.addEventListener("keydown",l,!0);let d=m=>m.stopImmediatePropagation();window.addEventListener("keyup",d,!0);let h=!1;function p(){h||(h=!0,a.classList.add("on"),n.classList.add("resolved"),c(()=>{let m=n.querySelector('[data-act="back"]');m&&m.focus({preventScroll:!0})},1300))}function u(){h=!1,n.classList.remove("resolved"),a.classList.remove("on");try{r.currentTime=0}catch(g){}let m=r.play();m&&m.catch&&m.catch(()=>p()),n.classList.add("playing"),c(()=>{h||a.classList.add("on")},1600),c(()=>{h||a.classList.remove("on")},6200)}r.addEventListener("timeupdate",()=>{r.duration&&r.currentTime>r.duration-1.2&&p()}),r.addEventListener("ended",p),r.addEventListener("error",p);function v(){if(Ic){Ic=null,s.forEach(clearTimeout),n.classList.remove("on");try{r.pause()}catch(m){}window.removeEventListener("keydown",l,!0),window.removeEventListener("keyup",d,!0),document.body.classList.remove("visiting"),setTimeout(()=>{i(),n.remove(),t&&t.focus&&t.focus({preventScroll:!0})},1150)}}n.querySelector(".visit-close").addEventListener("click",v),n.querySelector(".visit-skip").addEventListener("click",()=>{try{r.pause()}catch(m){}p()}),n.querySelector(".visit-end").addEventListener("click",m=>{let g=m.target.closest("button");g&&(g.dataset.act==="back"&&v(),g.dataset.act==="again"&&(s.forEach(clearTimeout),u()))}),r.src=e.visit.video,Ic={close:v},requestAnimationFrame(()=>{n.classList.add("on"),c(u,1300)})}var Mg={};function gM(e){if(!e||!e.visit||Mg[e.visit.video]||!Qu())return;Mg[e.visit.video]=!0;let t=document.createElement("link");t.rel="preload",t.as="video",t.href=e.visit.video,document.head.appendChild(t)}Ag.exports={available:Qu,button:pM,open:mM,warm:gM,get active(){return!!Ic}}});var Lg=pe((K8,Tg)=>{"use strict";var xM=Cr(),vs=[0,0],hs=[0,0],Ia=null,e1=0;if(typeof window!="undefined"){window.addEventListener("pointermove",t=>{t.pointerType!=="touch"&&(vs[0]=Math.max(-1,Math.min(1,t.clientX/window.innerWidth*2-1)),vs[1]=Math.max(-1,Math.min(1,t.clientY/window.innerHeight*2-1)),e1=performance.now())},{passive:!0});let e=()=>{e1=performance.now()};["wheel","touchstart","touchmove","keydown","pointerdown"].forEach(t=>window.addEventListener(t,e,{passive:!0,capture:!0})),window.addEventListener("deviceorientation",t=>{t.gamma===null||t.beta===null||(Ia||(Ia=[t.gamma,t.beta]),Ia[0]+=(t.gamma-Ia[0])*.01,Ia[1]+=(t.beta-Ia[1])*.01,vs[0]=Math.max(-1,Math.min(1,(t.gamma-Ia[0])/14)),vs[1]=Math.max(-1,Math.min(1,(t.beta-Ia[1])/14)))},{passive:!0})}var kg=0,us=null,Ef=null,ga=[0,0,0],Ju=0,ds=null,ps=0,Ji={eye:[0,0,0],target:[0,0,0],fov:50,roll:0},yM={apply(e,t){let o=Math.min(.1,Math.max(0,t-kg));kg=t;let n=e.eye,r=e.target,a=[r[0]-n[0],r[1]-n[1],r[2]-n[2]],i=Math.hypot(a[0],a[1],a[2])||1;a=[a[0]/i,a[1]/i,a[2]/i];let s=[-a[2],0,a[0]],c=Math.hypot(s[0],s[2])||1;s=[s[0]/c,0,s[2]/c];let f=[s[1]*a[2]-s[2]*a[1],s[2]*a[0]-s[0]*a[2],s[0]*a[1]-s[1]*a[0]],l=!us;if(us&&o>0){let b=[n[0]-us[0],n[1]-us[1],n[2]-us[2]],M=Math.hypot(b[0],b[1],b[2]);if(M>2.5)l=!0;else{let L=Math.min(1,o*5);for(let C=0;C<3;C++)ga[C]+=(b[C]/o-ga[C])*L}let T=Math.hypot(r[0]-Ef[0],r[1]-Ef[1],r[2]-Ef[2]);ps=M/o<.12&&T/o<.2?ps+o:0}l&&(ga[0]=ga[1]=ga[2]=0,ps=0),us=n.slice(),Ef=r.slice(),Ju=Math.hypot(ga[0],ga[1],ga[2]);let d=Math.min(1,o*2.6);hs[0]+=(vs[0]-hs[0])*d,hs[1]+=(vs[1]-hs[1])*d;let h=Math.max(.03,Math.min(.32,i*.05)),p=(xM.isPhone&&!Ia?1.5:1)*Math.min(1,ps/2.5),u=(Math.sin(t*.131)*.55+Math.sin(t*.071+1.3)*.45)*h*.55*p,v=Math.sin(t*.097+.6)*h*.16*p,m=hs[0]*h+u,g=-hs[1]*h*.45+v;for(let b=0;b<3;b++)Ji.eye[b]=n[b]+s[b]*m+f[b]*g,Ji.target[b]=r[b]+(s[b]*m+f[b]*g)*.12;n[1]>.05&&(Ji.eye[1]=Math.max(.05,Ji.eye[1]));let y=ga[0]*s[0]+ga[2]*s[2];return Ji.fov=e.fov+Math.min(3.5,Ju*.55),Ji.roll=(e.roll||0)+Math.max(-.035,Math.min(.035,-y*.006)),Ji},pull(e,t){(ds===null||!(Math.abs(e.focus-ds)<40))&&(ds=e.focus);let o=1/60;ds+=(e.focus-ds)*Math.min(1,o*3.2),e.focus=ds,e.aperture>0&&(e.aperture*=1+.25*Math.min(1,ps/3))},get speed(){return Ju},get resting(){return ps>2&&performance.now()-e1>2e3}};Tg.exports=yM});var t1=pe((Q8,zg)=>{zg.exports=1e-6});var o1=pe((Z8,Ng)=>{Ng.exports=bM;function bM(){var e=new Float32Array(3);return e[0]=0,e[1]=0,e[2]=0,e}});var Rg=pe((J8,Cg)=>{Cg.exports=wM;function wM(e){var t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}});var n1=pe((eA,Ig)=>{Ig.exports=_M;function _M(e,t,o){var n=new Float32Array(3);return n[0]=e,n[1]=t,n[2]=o,n}});var r1=pe((tA,Pg)=>{Pg.exports=MM;function MM(e,t){var o=t[0],n=t[1],r=t[2],a=o*o+n*n+r*r;return a>0&&(a=1/Math.sqrt(a),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a),e}});var a1=pe((oA,Og)=>{Og.exports=EM;function EM(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}});var Dg=pe((nA,$g)=>{$g.exports=AM;var Fg=n1(),Gg=r1(),SM=a1();function AM(e,t){var o=Fg(e[0],e[1],e[2]),n=Fg(t[0],t[1],t[2]);Gg(o,o),Gg(n,n);var r=SM(o,n);return r>1?0:Math.acos(r)}});var Hg=pe((rA,qg)=>{qg.exports=kM;function kM(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}});var Ug=pe((aA,jg)=>{jg.exports=TM;function TM(e,t,o,n){return e[0]=t,e[1]=o,e[2]=n,e}});var Wg=pe((iA,Bg)=>{Bg.exports=LM;var i1=t1();function LM(e,t){var o=e[0],n=e[1],r=e[2],a=t[0],i=t[1],s=t[2];return Math.abs(o-a)<=i1*Math.max(1,Math.abs(o),Math.abs(a))&&Math.abs(n-i)<=i1*Math.max(1,Math.abs(n),Math.abs(i))&&Math.abs(r-s)<=i1*Math.max(1,Math.abs(r),Math.abs(s))}});var Xg=pe((sA,Vg)=>{Vg.exports=zM;function zM(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}});var Kg=pe((cA,Yg)=>{Yg.exports=NM;function NM(e,t,o){return e[0]=t[0]+o[0],e[1]=t[1]+o[1],e[2]=t[2]+o[2],e}});var s1=pe((lA,Qg)=>{Qg.exports=CM;function CM(e,t,o){return e[0]=t[0]-o[0],e[1]=t[1]-o[1],e[2]=t[2]-o[2],e}});var Jg=pe((fA,Zg)=>{Zg.exports=s1()});var c1=pe((hA,ex)=>{ex.exports=RM;function RM(e,t,o){return e[0]=t[0]*o[0],e[1]=t[1]*o[1],e[2]=t[2]*o[2],e}});var ox=pe((uA,tx)=>{tx.exports=c1()});var l1=pe((dA,nx)=>{nx.exports=IM;function IM(e,t,o){return e[0]=t[0]/o[0],e[1]=t[1]/o[1],e[2]=t[2]/o[2],e}});var ax=pe((pA,rx)=>{rx.exports=l1()});var sx=pe((vA,ix)=>{ix.exports=PM;function PM(e,t,o){return e[0]=Math.min(t[0],o[0]),e[1]=Math.min(t[1],o[1]),e[2]=Math.min(t[2],o[2]),e}});var lx=pe((mA,cx)=>{cx.exports=OM;function OM(e,t,o){return e[0]=Math.max(t[0],o[0]),e[1]=Math.max(t[1],o[1]),e[2]=Math.max(t[2],o[2]),e}});var hx=pe((gA,fx)=>{fx.exports=FM;function FM(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e}});var dx=pe((xA,ux)=>{ux.exports=GM;function GM(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e}});var vx=pe((yA,px)=>{px.exports=$M;function $M(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e}});var gx=pe((bA,mx)=>{mx.exports=DM;function DM(e,t,o){return e[0]=t[0]*o,e[1]=t[1]*o,e[2]=t[2]*o,e}});var yx=pe((wA,xx)=>{xx.exports=qM;function qM(e,t,o,n){return e[0]=t[0]+o[0]*n,e[1]=t[1]+o[1]*n,e[2]=t[2]+o[2]*n,e}});var f1=pe((_A,bx)=>{bx.exports=HM;function HM(e,t){var o=t[0]-e[0],n=t[1]-e[1],r=t[2]-e[2];return Math.sqrt(o*o+n*n+r*r)}});var _x=pe((MA,wx)=>{wx.exports=f1()});var h1=pe((EA,Mx)=>{Mx.exports=jM;function jM(e,t){var o=t[0]-e[0],n=t[1]-e[1],r=t[2]-e[2];return o*o+n*n+r*r}});var Sx=pe((SA,Ex)=>{Ex.exports=h1()});var u1=pe((AA,Ax)=>{Ax.exports=UM;function UM(e){var t=e[0],o=e[1],n=e[2];return Math.sqrt(t*t+o*o+n*n)}});var Tx=pe((kA,kx)=>{kx.exports=u1()});var d1=pe((TA,Lx)=>{Lx.exports=BM;function BM(e){var t=e[0],o=e[1],n=e[2];return t*t+o*o+n*n}});var Nx=pe((LA,zx)=>{zx.exports=d1()});var Rx=pe((zA,Cx)=>{Cx.exports=WM;function WM(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}});var Px=pe((NA,Ix)=>{Ix.exports=VM;function VM(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e}});var Fx=pe((CA,Ox)=>{Ox.exports=XM;function XM(e,t,o){var n=t[0],r=t[1],a=t[2],i=o[0],s=o[1],c=o[2];return e[0]=r*c-a*s,e[1]=a*i-n*c,e[2]=n*s-r*i,e}});var $x=pe((RA,Gx)=>{Gx.exports=YM;function YM(e,t,o,n){var r=t[0],a=t[1],i=t[2];return e[0]=r+n*(o[0]-r),e[1]=a+n*(o[1]-a),e[2]=i+n*(o[2]-i),e}});var qx=pe((IA,Dx)=>{Dx.exports=KM;function KM(e,t){t=t||1;var o=Math.random()*2*Math.PI,n=Math.random()*2-1,r=Math.sqrt(1-n*n)*t;return e[0]=Math.cos(o)*r,e[1]=Math.sin(o)*r,e[2]=n*t,e}});var jx=pe((PA,Hx)=>{Hx.exports=QM;function QM(e,t,o){var n=t[0],r=t[1],a=t[2],i=o[3]*n+o[7]*r+o[11]*a+o[15];return i=i||1,e[0]=(o[0]*n+o[4]*r+o[8]*a+o[12])/i,e[1]=(o[1]*n+o[5]*r+o[9]*a+o[13])/i,e[2]=(o[2]*n+o[6]*r+o[10]*a+o[14])/i,e}});var Bx=pe((OA,Ux)=>{Ux.exports=ZM;function ZM(e,t,o){var n=t[0],r=t[1],a=t[2];return e[0]=n*o[0]+r*o[3]+a*o[6],e[1]=n*o[1]+r*o[4]+a*o[7],e[2]=n*o[2]+r*o[5]+a*o[8],e}});var Vx=pe((FA,Wx)=>{Wx.exports=JM;function JM(e,t,o){var n=t[0],r=t[1],a=t[2],i=o[0],s=o[1],c=o[2],f=o[3],l=f*n+s*a-c*r,d=f*r+c*n-i*a,h=f*a+i*r-s*n,p=-i*n-s*r-c*a;return e[0]=l*f+p*-i+d*-c-h*-s,e[1]=d*f+p*-s+h*-i-l*-c,e[2]=h*f+p*-c+l*-s-d*-i,e}});var Yx=pe((GA,Xx)=>{Xx.exports=eE;function eE(e,t,o,n){var r=o[1],a=o[2],i=t[1]-r,s=t[2]-a,c=Math.sin(n),f=Math.cos(n);return e[0]=t[0],e[1]=r+i*f-s*c,e[2]=a+i*c+s*f,e}});var Qx=pe(($A,Kx)=>{Kx.exports=tE;function tE(e,t,o,n){var r=o[0],a=o[2],i=t[0]-r,s=t[2]-a,c=Math.sin(n),f=Math.cos(n);return e[0]=r+s*c+i*f,e[1]=t[1],e[2]=a+s*f-i*c,e}});var Jx=pe((DA,Zx)=>{Zx.exports=oE;function oE(e,t,o,n){var r=o[0],a=o[1],i=t[0]-r,s=t[1]-a,c=Math.sin(n),f=Math.cos(n);return e[0]=r+i*f-s*c,e[1]=a+i*c+s*f,e[2]=t[2],e}});var t3=pe((qA,e3)=>{e3.exports=nE;var ci=o1()();function nE(e,t,o,n,r,a){var i,s;for(t||(t=3),o||(o=0),n?s=Math.min(n*t+o,e.length):s=e.length,i=o;i<s;i+=t)ci[0]=e[i],ci[1]=e[i+1],ci[2]=e[i+2],r(ci,ci,a),e[i]=ci[0],e[i+1]=ci[1],e[i+2]=ci[2];return e}});var n3=pe((HA,o3)=>{o3.exports={EPSILON:t1(),create:o1(),clone:Rg(),angle:Dg(),fromValues:n1(),copy:Hg(),set:Ug(),equals:Wg(),exactEquals:Xg(),add:Kg(),subtract:s1(),sub:Jg(),multiply:c1(),mul:ox(),divide:l1(),div:ax(),min:sx(),max:lx(),floor:hx(),ceil:dx(),round:vx(),scale:gx(),scaleAndAdd:yx(),distance:f1(),dist:_x(),squaredDistance:h1(),sqrDist:Sx(),length:u1(),len:Tx(),squaredLength:d1(),sqrLen:Nx(),negate:Rx(),inverse:Px(),normalize:r1(),dot:a1(),cross:Fx(),lerp:$x(),random:qx(),transformMat4:jx(),transformMat3:Bx(),transformQuat:Vx(),rotateX:Yx(),rotateY:Qx(),rotateZ:Jx(),forEach:t3()}});var i3=pe((jA,a3)=>{"use strict";function r3(){let e={};return{on(t,o){return(e[t]=e[t]||[]).push(o),this},emit(t,o){(e[t]||[]).slice().forEach(n=>n(o))}}}a3.exports=function(t){let o=t.ownerDocument||document,n=r3(),r=null,a={dx:0,dy:0,dt:0},i=0,s=()=>o.pointerLockElement||o.webkitPointerLockElement||null,c=()=>{if(s())return;let l=t.requestPointerLock||t.webkitRequestPointerLock;if(l)try{let d=l.call(t);d&&d.catch&&d.catch(()=>{})}catch(d){}};t.addEventListener("mousedown",c,!1);let f=()=>{if(!s()){r&&(n.emit("release"),r.emit("end"),r=null);return}r=r3(),i=Date.now(),n.emit("attain",r)};return o.addEventListener("pointerlockchange",f),o.addEventListener("webkitpointerlockchange",f),o.addEventListener("pointerlockerror",()=>n.emit("error")),(o.body||t).addEventListener("mousemove",l=>{r&&(a.dx=l.movementX||l.webkitMovementX||0,a.dy=l.movementY||l.webkitMovementY||0,a.dt=Date.now()-i,n.emit("data",a),r.emit("data",a))},!1),n.request=c,n.target=s,n.release=()=>{s()&&(o.exitPointerLock||o.webkitExitPointerLock).call(o)},n}});var h3=pe((WA,f3)=>{"use strict";var e0=ts(),t0=n3(),rE=i3(),UA=Math.PI/4,BA=Math.PI/6,s3=2,aE=1,iE=2.4,sE=2.4,cE=1e3,lE=5,fE=7,p1=On().C,Pc=[[7,1.6],[7,p1.zc],[p1.x1-2.95,p1.zc]],li=Pc.slice(1).map((e,t)=>{let o=Pc[t],n=e[0]-o[0],r=e[1]-o[1],a=Math.hypot(n,r);return{a:o,len:a,dir:[n/a,r/a]}}),v1=li.reduce((e,t)=>e+t.len,0);function c3(e){let t=Math.max(0,Math.min(v1,e));for(let n of li){if(t<=n.len)return[n.a[0]+n.dir[0]*t,n.a[1]+n.dir[1]*t];t-=n.len}let o=Pc[Pc.length-1];return[o[0],o[1]]}function hE(e){let t=0;for(let n=0;n<li.length;n++){let r=li[n],a=t+r.len;if(e<a-1e-4||n===li.length-1){let i=r.dir,c=e<=t+1e-4&&n>0?li[n-1].dir:r.dir;return{ahead:i,back:[-c[0],-c[1]]}}t=a}let o=li[li.length-1].dir;return{ahead:o,back:[-o[0],-o[1]]}}var uE=Math.PI/4,dE=7,pE=140,vE=70,l3=(e,t,o)=>(1-e)*t+e*o,mE=e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2;f3.exports=function({getGridSegments:e,getGridParts:t},o){var n=[0,Math.PI],r=[0,Math.PI],a=0,i=[0,0,0],s=[fE,s3,Pc[0][1]],c=0,f=1,l=0,d=[.707,0,.707],h=[0,1,0],p=[0,0,0],u=.5,v=e0.identity([]),m=e0.identity([]),g=!1,y=[0,0,0],b=[0,0,0],M=1,T=!1;let L=Fe=>{n[1]+=Fe*uE},C=(Fe,Qe,qe)=>{if(Fe=Math.max(Math.min(Fe,100),-100),Qe=Math.max(Math.min(Qe,100),-100),n[0]=0,T){a=0;return}for(a+=Fe;a>=qe;)L(1),a-=qe;for(;a<=-qe;)L(-1),a+=qe};rE(document.body).on("attain",Fe=>{Fe.on("data",Qe=>{C(Qe.dx,Qe.dy,pE)})});let B=null,W=null,Q=0,ce={x:0,y:0},ee=58,te=document.createElement("div");te.id="museum-mobile-controls",te.innerHTML=`

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
	`,document.body.appendChild(te);let Ke=te.querySelector("#museum-joystick"),ve=te.querySelector("#museum-joystick-knob"),Te=()=>{ve.style.transform="translate(-50%, -50%)",i[0]=0,i[2]=0},re=Fe=>{let Qe=Fe.clientX-ce.x,qe=Fe.clientY-ce.y,dt=Math.hypot(Qe,qe);if(dt>ee&&(Qe=Qe/dt*ee,qe=qe/dt*ee),ve.style.transform=`translate(
				calc(-50% + ${Qe}px),
				calc(-50% + ${qe}px)
			)`,dt<10){i[0]=0,i[2]=0;return}let qt=Qe/ee,Je=qe/ee;i[0]=0,i[2]=Math.abs(Je)>.15?Je:0},vt=(Fe,Qe)=>{for(let qe=0;qe<Fe.length;qe++)if(Fe[qe].identifier===Qe)return Fe[qe];return null},xt=Fe=>!!(Fe&&Fe.closest&&Fe.closest(".painting-plaque, .story-overlay, .story-card, .story-close, button")),$t=Fe=>{if(!xt(Fe.target)&&(Fe.cancelable&&Fe.preventDefault(),!T))for(let Qe=0;Qe<Fe.changedTouches.length;Qe++){let qe=Fe.changedTouches[Qe];if(B===null&&qe.clientX<window.innerWidth*.48){B=qe.identifier;let dt=Ke.getBoundingClientRect();ce.x=dt.left+dt.width/2,ce.y=dt.top+dt.height/2,re(qe)}else W===null&&qe.clientX>=window.innerWidth*.48&&(W=qe.identifier,Q=qe.clientX,a=0)}},yt=Fe=>{if(xt(Fe.target)||(Fe.cancelable&&Fe.preventDefault(),T))return;let Qe=B===null?null:vt(Fe.touches,B);Qe&&re(Qe);let qe=W===null?null:vt(Fe.touches,W);if(qe){let dt=qe.clientX-Q;Q=qe.clientX,C(dt,0,vE)}},Bt=Fe=>{if(!xt(Fe.target)){Fe.cancelable&&Fe.preventDefault();for(let Qe=0;Qe<Fe.changedTouches.length;Qe++){let qe=Fe.changedTouches[Qe];qe.identifier===B&&(B=null,Te()),qe.identifier===W&&(W=null)}}};document.addEventListener("touchstart",$t,{passive:!1}),document.addEventListener("touchmove",yt,{passive:!1}),document.addEventListener("touchend",Bt,{passive:!1}),document.addEventListener("touchcancel",Bt,{passive:!1});let Lt=document.createElement("style");Lt.textContent=`

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
	`,document.head.appendChild(Lt);var Qt={};let je=Fe=>{if(Fe.defaultPrevented||Fe.ctrlKey||Fe.altKey||Fe.metaKey)return;let Qe=Fe.type==="keydown";Qt[Fe.code]=Qe,Qe&&!Fe.repeat&&!T&&((Fe.code==="KeyA"||Fe.code==="ArrowLeft")&&L(-1),(Fe.code==="KeyD"||Fe.code==="ArrowRight")&&L(1)),g=!1;let qe=Qt.KeyW||Qt.ArrowUp?1:0;i=[0,0,(Qt.KeyS||Qt.ArrowDown?1:0)-qe],Fe.preventDefault()};window.addEventListener("keydown",je),window.addEventListener("keyup",je);var Dt=0;return{pos:s,fmouse:r,forward:d,up:h,setPaused:Fe=>{T=!!Fe,T&&(i[0]=0,i[2]=0,Te())},place:(Fe,Qe)=>{c=Math.max(0,Math.min(v1,Fe));let qe=c3(c);s[0]=qe[0],s[2]=qe[1],n[1]=Qe,r[1]=Qe,a=0,f=1},view:()=>v,proj:()=>(e0.perspective(m,o(),window.innerWidth/window.innerHeight,.1,700),m),tick:({time:Fe})=>{let Qe=Fe-Dt;Dt=Fe;let qe=[0,0,0],dt=[];t0.set(d,Math.sin(r[1]),0,-Math.cos(r[1])),t0.set(h,0,1,0);let rt=g?sE:iE,qt=Math.sin(n[1]),Je=-Math.cos(n[1]),fe=hE(c),Xe=qt*fe.ahead[0]+Je*fe.ahead[1],pt=qt*fe.back[0]+Je*fe.back[1],lt=f;Math.max(Xe,pt)>.3&&(lt=Xe>=pt?1:-1);let oo=T?0:-i[2]*rt;l+=(oo-l)*(1-Math.exp(-Math.min(Qe,.1)*5.5)),oo===0&&Math.abs(l)<.01&&(l=0);let Wt=l*lt*Math.min(Qe,.1);T&&(i[0]=0,i[2]=0,Wt=0,l=0),Wt!==0&&(f=Math.sign(Wt)*Math.sign(-i[2]||1)),c=Math.max(0,Math.min(v1,c+Wt));let w=c3(c);t0.set(p,w[0]-s[0],0,w[1]-s[2]);let Mt=t0.len(p);Mt===0&&u!==.25&&(u=(Math.abs((u+.5)%1-.5)-.25)*.8+.25,(u+.01)%.25<.02&&(u=.25));let no=u;if(u+=Mt/(g?lE:cE),s[1]=s3,t0.add(s,s,p),M<1){M+=Qe/aE,M=Math.min(M,1);let ot=mE(M);t0.set(s,l3(ot,y[0],b[0]),s[1],l3(ot,y[2],b[2]))}r[0]=0,r[1]+=(n[1]-r[1])*Math.min(1,Math.min(Qe,.1)*dE),Math.abs(n[1]-r[1])<5e-4&&(r[1]=n[1]),e0.identity(v),e0.rotateX(v,v,0),e0.rotateY(v,v,r[1]),e0.translate(v,v,t0.scale(qe,s,-1))}}}});var d3=pe((VA,u3)=>{"use strict";var{skylightGLSL:gE,Z_START:xE,Z_END:yE,GLASS_Y:bE}=j0(),{oculusGLSL:wE,A:o0}=Pr(),{windowLightGLSL:_E,C:Sf}=On(),{doorLightGLSL:ME}=Wa(),Af=Fn(),kf=af(),Dr=e=>e.toFixed(4),m1=.1,g1=700,ms={exposure:.88,shafts:1,bloom:1,vignette:.42,grain:.032};function EE(e,t){let o=t[0],n=t[1],r=t[2],a=t[3],i=t[4],s=t[5],c=t[6],f=t[7],l=t[8],d=t[9],h=t[10],p=t[11],u=t[12],v=t[13],m=t[14],g=t[15],y=o*s-n*i,b=o*c-r*i,M=o*f-a*i,T=n*c-r*s,L=n*f-a*s,C=r*f-a*c,D=l*v-d*u,B=l*m-h*u,W=l*g-p*u,Q=d*m-h*v,ce=d*g-p*v,ee=h*g-p*m,te=y*ee-b*ce+M*Q+T*W-L*B+C*D;return te?(te=1/te,e[0]=(s*ee-c*ce+f*Q)*te,e[1]=(r*ce-n*ee-a*Q)*te,e[2]=(v*C-m*L+g*T)*te,e[3]=(h*L-d*C-p*T)*te,e[4]=(c*W-i*ee-f*B)*te,e[5]=(o*ee-r*W+a*B)*te,e[6]=(m*M-u*C-g*b)*te,e[7]=(l*C-h*M+p*b)*te,e[8]=(i*ce-s*W+f*D)*te,e[9]=(n*W-o*ce-a*D)*te,e[10]=(u*L-v*M+g*y)*te,e[11]=(d*M-l*L-p*y)*te,e[12]=(s*B-i*Q-c*D)*te,e[13]=(o*Q-n*B+r*D)*te,e[14]=(v*b-u*T-m*y)*te,e[15]=(l*T-d*b+h*y)*te,e):null}function SE(e,t,o){let n=new Array(16);for(let r=0;r<4;r++)for(let a=0;a<4;a++){let i=0;for(let s=0;s<4;s++)i+=t[s*4+a]*o[r*4+s];n[r*4+a]=i}for(let r=0;r<16;r++)e[r]=n[r];return e}var AE=`
precision highp float;
attribute vec2 position;
varying vec2 uv;
void main() {
	uv = position * 0.5 + 0.5;
	gl_Position = vec4(position, 0.0, 1.0);
}`;u3.exports=(e,t)=>{let o=!!t.isPhone,n=e.hasExtension("webgl_depth_texture"),r=o?10:18,a=()=>t.post>=2?2:4,i=Te=>e.texture(Object.assign({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"},Te||{})),s=()=>e.framebuffer({color:i(),depth:!1}),c=i(),f=n?e.texture({width:4,height:4,format:"depth",type:"uint32"}):null,l=e.framebuffer({color:c,depth:f||!0}),d=[s(),s()],h=[s(),s()],p=[s(),s()],u=[s(),s()],v=new Array(16).fill(0),m=new Array(16).fill(0),g=[0,0,0],y={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},b={position:[-1,-1,3,-1,-1,3]},M=(Te,re,vt)=>e(Object.assign({vert:AE,frag:Te,attributes:b,count:3,depth:{enable:!1,mask:!1},cull:{enable:!1},blend:{enable:!1},uniforms:re,framebuffer:e.prop("out")},vt||{})),T=[2.6,0,xE-3.2,12.6,bE,yE+.4],L=[o0.x0-.2,0,o0.z0,o0.x1,o0.domeTop,o0.z1],C=[Sf.x0,0,Sf.z0,Sf.x1,7.6,Sf.z1],D=[.35,0,.35,13.65,7.6,9],B=Te=>`vec3(${Dr(Te[0])}, ${Dr(Te[1])}, ${Dr(Te[2])}), vec3(${Dr(Te[3])}, ${Dr(Te[4])}, ${Dr(Te[5])})`,W=M(`
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

	${gE()}
	${wE()}
	${_E()}
	${ME()}

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
			vec2 t = hitBox(eye, rd, ${B(T)});
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
			vec2 t = hitBox(eye, rd, ${B(L)});
			t.y = min(t.y, len);
			if (t.y > t.x) {
				float st = (t.y - t.x) / float(N);
				float acc = 0.0;
				for (int i = 0; i < N; i++) {
					vec3 p = eye + rd * (t.x + (float(i) + jit) * st);
					if (p.y < ${Dr(o0.dome.base)} && p.x > ${Dr(o0.x0-.1)}) acc += oculusOpen(p) * treeShade(p) * air(p);
				}
				float ph = phase(dot(rd, SHAFT), 0.6) + 0.05;
				sum += mix(vec3(1.0, 0.88, 0.68), vec3(0.62, 0.74, 1.0) * 1.2, night) * acc * st * ph * strength.y;
			}
		}

		// the corridor windows
		if (strength.z > 0.0) {
			vec2 t = hitBox(eye, rd, ${B(C)});
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
			vec2 t = hitBox(eye, rd, ${B(D)});
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
	}`,{depthTex:()=>f,invVP:()=>v,eye:()=>g,time:e.context("time"),night:()=>Af.night,strength:()=>Q}),Q=[0,0,0,0];function ce(){let Te=ms.shafts*y.shafts,re=Af.night;return Q[0]=kf.box(T)?.06*Te*(1+.9*re):0,Q[1]=kf.box(L,!1,"court")?.1*Te*(1+.9*re):0,Q[2]=kf.box(C)?.07*Te*(1+.4*re):0,Q[3]=kf.box(D)?.04*Te*(1-.75*re):0,Q[0]+Q[1]+Q[2]+Q[3]>5e-4}let ee=M(`
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
	}`,{src:e.prop("src"),dir:(Te,re)=>[re.dir[0]/re.size[0],re.dir[1]/re.size[1]]}),te=M(`
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
	}`,{src:e.prop("src"),texel:(Te,re)=>[.5/re.size[0],.5/re.size[1]],threshold:e.prop("threshold")}),Ke=M(`
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
		return 2.0 * ${Dr(m1)} * ${Dr(g1)} / (${Dr(g1+m1)} - z * ${Dr(g1-m1)});
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
	}`,{scene:()=>c,depthTex:()=>f||c,soft:()=>d[0],bloomA:()=>h[0],bloomB:()=>p[0],shafts:()=>u[0],res:()=>[l.width,l.height],time:e.context("time"),exposure:()=>ms.exposure*y.exposure,vignette:()=>Math.min(1,ms.vignette+y.vignette+.22*Af.night),night:()=>Af.night,grain:()=>ms.grain,bloomK:()=>ms.bloom,letterbox:()=>y.letterbox,fade:()=>y.fade,fadeColor:()=>y.fadeColor,aperture:()=>t.post>=2?y.aperture:0,focus:()=>y.focus,hasDepth:n?1:0},{framebuffer:null}),ve=e({framebuffer:()=>l});return{shot:y,look:ms,hasDepth:n,capture(Te,re,vt){let xt=Math.max(.4,Math.min(1,t.scale||1)),$t=Math.max(2,Math.round(Te.drawingBufferWidth*xt/2)*2),yt=Math.max(2,Math.round(Te.drawingBufferHeight*xt/2)*2);(l.width!==$t||l.height!==yt)&&l.resize($t,yt);let Bt=Math.max(1,Math.ceil($t/2)),Lt=Math.max(1,Math.ceil(yt/2));d.forEach(Qt=>Qt.resize(Bt,Lt)),h.forEach(Qt=>Qt.resize(Math.max(1,Math.ceil($t/4)),Math.max(1,Math.ceil(yt/4)))),p.forEach(Qt=>Qt.resize(Math.max(1,Math.ceil($t/8)),Math.max(1,Math.ceil(yt/8)))),u.forEach(Qt=>Qt.resize(Math.max(1,Math.ceil($t/a())),Math.max(1,Math.ceil(yt/a())))),SE(m,re.proj,re.view),EE(v,m),g[0]=re.eye[0],g[1]=re.eye[1],g[2]=re.eye[2],ve(()=>{e.clear({color:[0,0,0,1],depth:1}),vt()})},present(){let Te=re=>[re.width,re.height];n&&t.post>=1&&ce()?(W({out:u[0]}),ee({out:u[1],src:u[0],dir:[1,0],size:Te(u[0])}),ee({out:u[0],src:u[1],dir:[0,1],size:Te(u[0])})):e.clear({color:[0,0,0,1],framebuffer:u[0]}),te({out:d[0],src:c,size:[l.width,l.height],threshold:0}),ee({out:d[1],src:d[0],dir:[1,0],size:Te(d[0])}),ee({out:d[0],src:d[1],dir:[0,1],size:Te(d[0])}),te({out:h[0],src:d[0],size:Te(d[0]),threshold:.42}),ee({out:h[1],src:h[0],dir:[1,0],size:Te(h[0])}),ee({out:h[0],src:h[1],dir:[0,1],size:Te(h[0])}),te({out:p[0],src:h[0],size:Te(h[0]),threshold:0}),ee({out:p[1],src:p[0],dir:[1.5,0],size:Te(p[0])}),ee({out:p[0],src:p[1],dir:[0,1.5],size:Te(p[0])}),Ke({out:null})}}}});var x3=pe((XA,g3)=>{"use strict";var p3=Fn().GLSL,kE=Ri(),x1=Wa(),{C:TE,FAR_DOOR:LE}=On(),zE=100*Math.PI/180,v3=e=>[LE.x-e[2],e[1],TE.zc-7+e[0]],m3=e=>[-e[2],e[1],e[0]];function NE(e){let t=[],o=[],n=[],r=[],a=kE.createBuilder(t,o,n,r);x1.addFrames(a,e);let i=x1.glassPanes(e),s=c=>{let f=[];for(let l=0;l<c.length;l+=3)f.push([c[l],c[l+1],c[l+2]]);return f};return{position:s(t),normal:s(o),elements:n,glass:i}}g3.exports=e=>{let t=x1.DOOR,o=["left","right"].map(l=>{let d=NE(l),h=d.position.length;return{part:l,hinge:l==="left"?t.x0:t.x1,sign:l==="left"?-1:1,src:d.position.map(p=>p.slice()),srcN:d.normal.map(p=>p.slice()),srcG:d.glass.map(p=>p.slice()),pos:e.buffer({data:new Float32Array(h*3),usage:"dynamic"}),nrm:e.buffer({data:new Float32Array(h*3),usage:"dynamic"}),gpos:e.buffer({data:new Float32Array(d.glass.length*3),usage:"dynamic"}),gnrm:e.buffer({data:new Float32Array(d.glass.length*3),usage:"dynamic"}),el:e.elements({data:new Uint32Array(d.elements),type:"uint32"}),glassCount:d.glass.length,outP:new Float32Array(h*3),outN:new Float32Array(h*3),outG:new Float32Array(d.glass.length*3),outGN:new Float32Array(d.glass.length*3)}}),n=null;function r(l){if(l!==n){n=l;for(let d of o){let h=d.sign*l,p=Math.cos(h),u=Math.sin(h),v=y=>{let b=y[0]-d.hinge,M=y[2];return[d.hinge+b*p+M*u,y[1],-b*u+M*p]},m=y=>[y[0]*p+y[2]*u,y[1],-y[0]*u+y[2]*p];d.src.forEach((y,b)=>{let M=v3(v(y));d.outP.set(M,b*3),d.outN.set(m3(m(d.srcN[b])),b*3)});let g=m3(m([0,0,1]));d.srcG.forEach((y,b)=>{d.outG.set(v3(v(y)),b*3),d.outGN.set(g,b*3)}),d.pos.subdata(d.outP),d.nrm.subdata(d.outN),d.gpos.subdata(d.outG),d.gnrm.subdata(d.outGN)}}}r(0);let a=`
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
		${p3}
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
		${p3}
		varying vec3 v_pos, v_n, v_eye;
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			float c = abs(dot(V, normalize(v_n)));
			float fres = pow(1.0 - c, 3.0);
			float d = (v_pos.x + v_pos.z) * 0.55 + v_pos.y * 0.85;
			float sheen = smoothstep(0.35, 0.0, abs(fract(d * 0.22) - 0.5)) * 0.05;
			float a = 0.05 + 0.32 * fres + sheen;
			gl_FragColor = vec4(toNight(mix(vec3(0.80, 0.86, 0.90), vec3(1.0, 0.95, 0.86), 0.4), 0.22), a);
		}`,attributes:{position:e.prop("pos"),normal:e.prop("nrm")},count:e.prop("count"),cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}}),c=0,f=()=>{r(c*zE);for(let l of o)i({pos:l.pos,nrm:l.nrm,el:l.el})};return f.glass=()=>{for(let l of o)s({pos:l.gpos,nrm:l.gnrm,count:l.glassCount})},f.setOpen=l=>{c=l||0},f.openNow=()=>c,f}});var b3=pe((YA,y3)=>{"use strict";var CE=Fn().GLSL,{skylightGLSL:RE}=j0(),{oculusGLSL:IE}=Pr(),{windowLightGLSL:PE}=On(),oa=.22;function OE(){let e=[],t=[],o=[],n=[],i=(l,d)=>{let h=oa*.2*Math.pow(Math.sin(Math.PI*Math.pow(l,.85)),.9)*(d>0?1.06:.94),p=l*oa-oa*.12,u=d*h,v=Math.abs(d)*h*.42-.14*l*l*oa;v+=Math.sin(l*17+(d>0?0:2.1))*.012*oa*d*d;let m=(l-.3)*.55,g=Math.cos(m),y=Math.sin(m),b=v*g-u*y,M=v*y+u*g;return[p,b,M+.05*oa*l*l]},s=(l,d)=>{let p=i(Math.min(1,l+.01),d),u=i(Math.max(0,l-.01),d),v=i(l,Math.min(1,d+.01)),m=i(l,Math.max(-1,d-.01)),g=[p[0]-u[0],p[1]-u[1],p[2]-u[2]],y=[v[0]-m[0],v[1]-m[1],v[2]-m[2]],b=[y[1]*g[2]-y[2]*g[1],y[2]*g[0]-y[0]*g[2],y[0]*g[1]-y[1]*g[0]],M=Math.hypot(b[0],b[1],b[2])||1,T=b[1]<0?-1:1;return[b[0]/M*T,b[1]/M*T,b[2]/M*T]};for(let l=0;l<=18;l++){let d=l/18;for(let h=0;h<=5*2;h++){let p=h/5-1;e.push(i(d,p)),t.push(s(Math.min(.97,Math.max(.03,d)),p)),o.push([d,p])}}let c=5*2+1;for(let l=0;l<18;l++)for(let d=0;d<c-1;d++){let h=l*c+d,p=h+1,u=h+c,v=u+1;n.push([h,u,p],[p,u,v])}let f=e.length;return e.push([-oa*.12,0,-.003],[-oa*.12,0,.003],[-oa*.24,-.01,.0015],[-oa*.24,-.01,-.0015]),t.push([0,1,0],[0,1,0],[0,1,0],[0,1,0]),o.push([0,0],[0,0],[-.1,0],[-.1,0]),n.push([f,f+2,f+1],[f,f+3,f+2]),{pos:e,nrm:t,uv:o,idx:n}}y3.exports=e=>{let t=OE(),o=e({vert:`
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
		${CE}
		uniform float time;
		uniform float yScale, visible;
		varying vec3 v_pos, v_normal;
		varying vec2 v_uv;
		varying vec3 v_eye;

		${RE()}
		${IE()}
		${PE()}

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
		}`,attributes:{position:t.pos,normal:t.nrm,uv:t.uv},elements:t.idx,uniforms:{model:e.prop("model"),visible:1},cull:{enable:!1}}),n=Fn(),r=e({vert:`
		precision highp float;
		uniform mat4 proj, view, model;
		uniform float yScale;
		attribute vec2 corner;
		varying vec2 v_uv;
		void main() {
			vec3 c = (model * vec4(${(oa*.35).toFixed(3)}, 0.0, 0.0, 1.0)).xyz;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{model:e.prop("model"),night:()=>n.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(a){a&&a.visible&&(o({model:a.model}),n.night>.01&&r({model:a.model}))}}});var M3=pe((KA,_3)=>{"use strict";var{skylightGLSL:FE,Z_START:w3,Z_END:GE}=j0(),{oculusGLSL:$E,A:gs}=Pr(),{windowLightGLSL:DE,C:n0}=On();_3.exports=(e,t)=>{let o=t.isPhone?900:2600,n=t.isPhone?350:900,r=t.isPhone?450:1300,a=t.isPhone?13:22,i=7,s=()=>(i=i*16807%2147483647,(i-1)/2147483646),c=n0.x0+.6,f=n0.x1-.3,l=[];for(let u=0;u<o;u++)l.push([2.5+s()*10.5,.3+s()*8,w3-3.5+s()*(GE-w3+4.5),s()]);for(let u=0;u<n;u++)l.push([gs.x0+.3+s()*(gs.x1-gs.x0-.6),.3+s()*7.5,gs.z0+.3+s()*(gs.z1-gs.z0-.6),s()]);for(let u=0;u<r;u++)l.push([c+s()*(f-c),.2+s()*5.6,n0.z0+.25+s()*(n0.z1-n0.z0-.5),s()]);let d=u=>u.toFixed(4),h=[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],p=e({vert:`
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

		${FE()}
		${$E()}
		${DE()}

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
				p.z = clamp(p.z, ${d(n0.z0+.1)}, ${d(n0.z1-.1)});
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
		}`,attributes:{seed:l},count:l.length,primitive:"points",uniforms:{time:e.context("time"),pixelScale:u=>u.viewportHeight*.006,focus:(u,v)=>v&&v.focus||6,aperture:(u,v)=>v&&v.aperture||0,wake0:(u,v)=>(v&&v.wake||h)[0],wake1:(u,v)=>(v&&v.wake||h)[1],wake2:(u,v)=>(v&&v.wake||h)[2],wake3:(u,v)=>(v&&v.wake||h)[3],wakeDir:(u,v)=>v&&v.wakeDir||[0,0,1],gust:(u,v)=>v&&v.gust||[0,0]},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});return u=>p(u||{})}});var L3=pe((QA,T3)=>{"use strict";var{C:k3}=On(),E3=Fn(),S3=15.3,qE=37.1,A3=k3.z1+.9,HE=k3.z1+.7+16-.6;T3.exports=(e,t)=>{let o=t.isPhone?36:80,n=11,r=()=>(n=n*16807%2147483647,(n-1)/2147483646),a=[];for(let f=0;f<o;f++){let l=.35+Math.pow(r(),1.8)*2.4;a.push([S3+r()*(qE-S3),l,A3+r()*(HE-A3),r()])}let i=[],s=[];a.forEach(f=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(l=>{i.push(l[0],l[1]),s.push(...f)})});let c=e({vert:`
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
		}`,attributes:{corner:i,seed:s},count:i.length/2,uniforms:{time:e.context("time"),night:()=>E3.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){E3.night>.01&&c()}}});var zf=pe((ZA,wr)=>{"use strict";var z3=Fn(),r0=vc(),jE=ts(),hi=Math.PI,it=e=>(+e).toFixed(4),ra=e=>`vec3(${it(e[0])}, ${it(e[1])}, ${it(e[2])})`,So={x0:-2.05,z0:41.45,z1:47.55,top:5.1},uo=-.55,pn=-2,en=42.25,En=43.65,jr=45.35,or=46.75,_n=2.75,na=.12,UE=(uo+pn)/2,xo={x:-1.3,y:1.42,w:.42,h:.52,z:En,cell:.026},_t={x0:-1.85,x1:-.75,top:.98,z0:En-.3,z1:En-.02},qr={x0:-1.44,x1:-1.16,y0:_t.top-.002,y1:_t.top+.018},br={cx:-1.3,cz:En-.165,w:.2,d:.255,y:_t.top+.0012},Nn={x:-1.03,z:En-.14,r:.042,h:.075},To={x:-.86,z:En-.12,h:.085,r:.019};To.flame=[To.x,_t.top+.012+To.h+.028,To.z];var Lf={a:[Nn.x-.004,_t.top+.03,Nn.z+.004],b:[Nn.x-.13,_t.top+.34,Nn.z-.12]},Fo=[-1.5,2.42,44.66],cn=[-1.78,1.95,en+.09],Hr={x:-1.32,z:44.08,y:.64,heading:.32},BE={window:{eye:[-1.3,1.33,42.8],target:[xo.x,1.37,En],fov:54},paper:{eye:[-1.3,1.4,43.23],target:[br.cx,_t.top,br.cz+.01],fov:40},front:{eye:[1.6,1.62,43],target:[-.9,1.35,43],fov:55},bay:{eye:[4.2,2.1,44.6],target:[-1,1.9,44.5],fov:55}},fi={ink:null,inkDirty:!1,fold:0,slide:0,shown:!0,active:!1};function N3(){return`
	// a quatrefoil hole in the brass (g: metres across the window from its centre)
	float grilleHole(vec2 g) {
		vec2 q = fract(g / ${it(xo.cell)} + 0.5) - 0.5;
		float d = min(min(length(q - vec2(0.17, 0.0)), length(q + vec2(0.17, 0.0))),
		              min(length(q - vec2(0.0, 0.17)), length(q + vec2(0.0, 0.17))));
		d = min(d, length(q) - 0.04);
		return 1.0 - smoothstep(0.15, 0.19, d);
	}
	// how much of the lamp's light reaches p (on the penitent's side) through the window
	float throughGrille(vec3 p, float soft) {
		vec3 d = p - ${ra(Fo)};
		if (d.z > -0.001) return 0.0;
		float t = (${it(xo.z)} - ${it(Fo[2])}) / d.z;
		vec2 g = (${ra(Fo)} + d * t).xy - vec2(${it(xo.x)}, ${it(xo.y)});
		float inWin = (1.0 - smoothstep(${it(xo.w/2-.01)}, ${it(xo.w/2)} + soft, abs(g.x))) *
		              (1.0 - smoothstep(${it(xo.h/2-.01)}, ${it(xo.h/2)} + soft, abs(g.y)));
		// the lamp is not a point: the pattern blurs the further it falls
		// from the brass
		float pen = 0.045 * abs(p.z - ${it(xo.z)}) / abs(${it(xo.z)} - ${it(Fo[2])}) / ${it(xo.cell)};
		vec2 qc = fract(g / ${it(xo.cell)} + 0.5) - 0.5;
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
		vec3 c = ${ra(To.flame)};
		vec3 d = c - p;
		float s = 1.0;
		// the pot: a short upright cylinder
		vec2 a = vec2(${it(Nn.x)}, ${it(Nn.z)}) - p.xz;
		vec2 dd = d.xz;
		float t = clamp(dot(a, dd) / max(dot(dd, dd), 1e-5), 0.0, 1.0);
		float r = length(p.xz + dd * t - vec2(${it(Nn.x)}, ${it(Nn.z)}));
		float y = p.y + d.y * t;
		s *= mix(1.0, 0.25, (1.0 - smoothstep(${it(Nn.r*.7)}, ${it(Nn.r*1.6)}, r)) * (1.0 - smoothstep(${it(_t.top+Nn.h*.8)}, ${it(_t.top+Nn.h*1.3)}, y)));
		// the quill: a thin capsule
		vec3 qa = ${ra(Lf.a)}, qb = ${ra(Lf.b)};
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
		bool inB1 = p.z < ${it(En)} && p.z > ${it(en-.04)} && p.x < ${it(uo+.02)};
		bool inPriest = p.z >= ${it(En)} && p.z < ${it(jr)} && p.x < ${it(uo)};
		bool inB2 = p.z >= ${it(jr)} && p.z < ${it(or+.04)} && p.x < ${it(uo)};
		// how open to the hall it is
		float open = 1.0;
		if (inB1) open = mix(0.7, 1.1, smoothstep(${it(pn)}, ${it(uo)}, p.x));
		if (inPriest) open = 0.16;
		if (inB2) open = 0.10;
		// deeper into the bay, a little less of the hall's light
		open *= mix(0.62, 1.0, smoothstep(${it(So.x0)}, 0.3, p.x));
		// the stair hall's candlelight (it stands there now: see stairhall.js)
		vec3 rs;
		vec3 col = roomLight(p + ${ra(r0.OFF)}, N, V, gloss, rs) * 1.25 * open;
		spec += rs * open;
		// the lamp, warm, behind the brass
		vec3 Ld = ${ra(Fo)} - p;
		float dl = length(Ld);
		vec3 L = Ld / dl;
		float T = inPriest ? 1.0 : (inB1 ? throughGrille(p, 0.0) : 0.0);
		vec3 lampCol = vec3(1.0, 0.70, 0.40) * mix(3.2, 1.0, night);
		vec3 lamp = lampCol * T * max(dot(N, L), 0.0) / (1.0 + dl * dl * 1.6);
		col += lamp;
		spec += lampCol * T * pow(max(dot(N, normalize(L + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss / (1.0 + dl * dl * 1.6);
		// the little lamp in the open booth
		if (inB1) {
			vec3 Sd = ${ra(cn)} - p;
			float ds = length(Sd);
			vec3 Ls = Sd / ds;
			vec3 sc = vec3(1.0, 0.72, 0.42) * mix(1.5, 0.35, night);
			col += sc * (max(dot(N, Ls), 0.0) * 0.8 + 0.2) / (0.15 + ds * ds * 1.6);
			spec += sc * pow(max(dot(N, normalize(Ls + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss * 0.6 / (0.15 + ds * ds * 1.6);
		}
		// the candle
		if (night > 0.01) {
			vec3 Cd = ${ra(To.flame)} - p;
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
	}`}var Mn={WOOD:0,CARVED:1,VELVET:2,CUSHION:3,BRASS:4,INKGLASS:5,QUILL:6,LAMPGLASS:7,DARKWOOD:8};function R3(){let e=[],t=[],o=[],n=[],r=[],a=(f,l)=>[f[0]-l[0],f[1]-l[1],f[2]-l[2]],i=(f,l)=>[f[1]*l[2]-f[2]*l[1],f[2]*l[0]-f[0]*l[2],f[0]*l[1]-f[1]*l[0]],s=f=>{let l=Math.hypot(f[0],f[1],f[2])||1;return[f[0]/l,f[1]/l,f[2]/l]},c={pos:e,nrm:t,kind:o,uv:n,idx:r,norm:s,cross:i,sub:a};return c.v=(f,l,d,h)=>(e.push(f[0],f[1],f[2]),t.push(l[0],l[1],l[2]),o.push(d),n.push(h?h[0]:0,h?h[1]:0),e.length/3-1),c.quad=(f,l,d,h,p,u)=>{let v=s(i(a(l,f),a(h,f)));u=u||[[0,0],[1,0],[1,1],[0,1]];let m=c.v(f,v,p,u[0]),g=c.v(l,v,p,u[1]),y=c.v(d,v,p,u[2]),b=c.v(h,v,p,u[3]);r.push(m,g,y,m,y,b)},c.box=(f,l,d,h,p,u,v)=>{let m=(g,y,b,M,T,L,C,D)=>c.quad(g,y,b,M,v,[[T,C],[L,C],[L,D],[T,D]]);m([h,l,d],[h,l,u],[h,p,u],[h,p,d],d,u,l,p),m([f,l,u],[f,l,d],[f,p,d],[f,p,u],u,d,l,p),m([f,p,d],[h,p,d],[h,p,u],[f,p,u],f,h,d,u),m([f,l,u],[h,l,u],[h,l,d],[f,l,d],f,h,u,d),m([f,l,u],[h,l,u],[h,p,u],[f,p,u],f,h,l,p),m([h,l,d],[f,l,d],[f,p,d],[h,p,d],h,f,l,p)},c.tube=(f,l,d,h)=>{h=h||6;let p=e.length/3;for(let u=0;u<f.length;u++){let v=f[Math.max(0,u-1)],m=f[Math.min(f.length-1,u+1)],g=s(a(m,v)),y=Math.abs(g[1])>.9?[1,0,0]:[0,1,0],b=s(i(g,y)),M=i(b,g),T=typeof l=="function"?l(u/(f.length-1)):l;for(let L=0;L<=h;L++){let C=L/h*hi*2,D=Math.cos(C),B=Math.sin(C),W=[b[0]*D+M[0]*B,b[1]*D+M[1]*B,b[2]*D+M[2]*B];c.v([f[u][0]+W[0]*T,f[u][1]+W[1]*T,f[u][2]+W[2]*T],W,d,[u/(f.length-1),L/h])}}for(let u=0;u<f.length-1;u++)for(let v=0;v<h;v++){let m=p+u*(h+1)+v,g=m+h+1;r.push(m,m+1,g,m+1,g+1,g)}},c.lathe=(f,l,d,h,p)=>{p=p||20;let u=e.length/3;for(let v=0;v<d.length;v++){let[m,g]=d[v],y=d[Math.max(0,v-1)],b=d[Math.min(d.length-1,v+1)],M=b[0]-y[0],T=b[1]-y[1];for(let L=0;L<=p;L++){let C=L/p*hi*2,D=Math.cos(C),B=Math.sin(C),W=s([T*D,-M,T*B]);c.v([f+D*m,g,l+B*m],W,h,[L/p,v/(d.length-1)])}}for(let v=0;v<d.length-1;v++)for(let m=0;m<p;m++){let g=u+v*(p+1)+m,y=g+p+1;r.push(g,y,g+1,g+1,y,y+1)}},c.spire=(f,l,d,h,p,u)=>{let v=[[-h,-h],[h,-h],[h,h],[-h,h]];for(let m=0;m<4;m++){let g=v[m],y=v[(m+1)%4],b=[f+g[0],d,l+g[1]],M=[f+y[0],d,l+y[1]],T=[f,p,l],L=s(i(a(T,b),a(M,b))),C=c.v(b,L,u,[0,0]),D=c.v(M,L,u,[1,0]),B=c.v(T,L,u,[.5,1]);r.push(C,B,D)}},c.orient=()=>{for(let f=0;f<r.length;f+=3){let[l,d,h]=[r[f],r[f+1],r[f+2]],p=m=>[e[m*3],e[m*3+1],e[m*3+2]],u=i(a(p(d),p(l)),a(p(h),p(l))),v=[0,1,2].map(m=>t[l*3+m]+t[d*3+m]+t[h*3+m]);u[0]*v[0]+u[1]*v[1]+u[2]*v[2]<0&&(r[f+1]=h,r[f+2]=d)}return c},c}function Tf(e,t,o,n){if(e<=t)return o;let r=e-t;return r>=n?0:Math.max(0,Math.sqrt(n*n-r*r)-(n-o))}var Io={ys:1.78,a:.56,r:.78};Io.apex=Io.ys+Math.sqrt(Io.r*Io.r-(Io.r-Io.a)*(Io.r-Io.a));function WE(){let e=R3(),t=Mn.WOOD,o=Mn.CARVED,n=Mn.DARKWOOD,r=.06;e.box(pn,0,en,uo+.08,na,or,n),e.box(pn,_n-.06,en-.04,uo+.1,_n,or+.04,t),e.box(uo,_n-.2,en-.06,uo+.12,_n-.06,or+.06,t),e.box(uo+.02,_n,en-.08,uo+.14,_n+.07,or+.08,n),e.box(pn,na,en,pn+.04,_n-.06,or,t);for(let[l,d,h]of[[en-r,en,-1],[or,or+r,1]]){e.box(pn,0,l,uo+.08,_n,d,t);let p=h<0?l-.018:d;e.box(pn+.18,.45,Math.min(p,p+.018),uo-.12,2.35,Math.max(p,p+.018),n),e.box(pn+.26,.55,Math.min(p,p+.03*h),uo-.2,2.25,Math.max(p,p+.03*h),t)}{let l=En-.02,d=En+.02,h=xo.x-xo.w/2,p=xo.x+xo.w/2,u=xo.y-xo.h/2,v=xo.y+xo.h/2;e.box(pn,na,l,uo,qr.y0,d,t),e.box(pn,qr.y0,l,qr.x0,qr.y1,d,t),e.box(qr.x1,qr.y0,l,uo,qr.y1,d,t),e.box(pn,qr.y1,l,uo,u,d,t),e.box(pn,u,l,h,v,d,t),e.box(p,u,l,uo,v,d,t),e.box(pn,v,l,uo,_n-.06,d,t);let m=.05,g=l-.025;e.box(h-m,u-m,g,p+m,u,l,n),e.box(h-m,v,g,p+m,v+m,l,n),e.box(h-m,u,g,h,v,l,n),e.box(p,u,g,p+m,v,l,n),e.box(h-m-.02,v+m,g-.015,p+m+.02,v+m+.03,l,t),e.box(qr.x0-.01,qr.y1,l-.006,qr.x1+.01,qr.y1+.008,l,Mn.BRASS)}e.box(pn,na,jr-.02,uo,_n-.06,jr+.02,t),e.box(_t.x0,_t.top-.035,_t.z0,_t.x1,_t.top,_t.z1,t),e.tube([[_t.x0,_t.top-.018,_t.z0],[_t.x1,_t.top-.018,_t.z0]],.02,t,8);for(let l of[_t.x0+.1,_t.x1-.1]){let d=[];for(let h=0;h<=8;h++){let p=h/8;d.push([l,_t.top-.04-.22*p,_t.z1-.02-.22*Math.cos(p*hi/2)])}e.tube(d,.018,n,6)}e.box(pn+.06,.12,en,uo-.1,.44,en+.42,n),e.box(pn+.08,.44,en+.01,uo-.12,.52,en+.41,Mn.CUSHION),e.box(pn+.06,.12,or-.42,uo-.1,.44,or,n),e.box(cn[0]-.05,cn[1]-.16,en,cn[0]+.05,cn[1]-.02,en+.012,Mn.BRASS),e.tube([[cn[0],cn[1]-.09,en+.012],[cn[0],cn[1]-.09,cn[2]-.01],[cn[0],cn[1]-.05,cn[2]]],.006,Mn.BRASS,6),e.lathe(cn[0],cn[2],[[0,cn[1]-.05],[.028,cn[1]-.035],[.034,cn[1]+.01],[.024,cn[1]+.06],[.026,cn[1]+.065]],Mn.LAMPGLASS,16),e.box(Hr.x-.22,.12,Hr.z-.24,Hr.x+.22,Hr.y-.05,Hr.z+.16,n),e.box(Hr.x-.24,Hr.y-.05,Hr.z-.26,Hr.x+.24,Hr.y,Hr.z+.18,Mn.CUSHION),e.tube([[Fo[0],_n-.06,Fo[2]],[Fo[0],Fo[1]+.07,Fo[2]]],.005,Mn.BRASS,5),e.lathe(Fo[0],Fo[2],[[0,Fo[1]+.09],[.03,Fo[1]+.08],[.02,Fo[1]+.06]],Mn.BRASS,12),e.lathe(Fo[0],Fo[2],[[0,Fo[1]-.06],[.035,Fo[1]-.04],[.045,Fo[1]],[.035,Fo[1]+.05],[.018,Fo[1]+.07]],Mn.LAMPGLASS,16);let a=uo,i=uo+r;function s(l,d,h){let p=(l+d)/2,u=40,v=[];for(let g=0;g<=u;g++)v.push(na+(_n-.2-na)*g/u);let m=[];v.forEach(g=>m.push(g));for(let g=1;g<24;g++)m.push(Io.ys+(Io.apex-Io.ys)*g/24);m.sort((g,y)=>g-y);for(let g=0;g<m.length-1;g++){let y=m[g],b=m[g+1];if(b-y<1e-4)continue;let M=h?Tf(y,Io.ys,Io.a,Io.r):0,T=h?Tf(b,Io.ys,Io.a,Io.r):0,L=(C,D)=>[C,D];e.quad([i,y,p-M],[i,y,l],[i,b,l],[i,b,p-T],t,[L(p-M,y),L(l,y),L(l,b),L(p-T,b)]),e.quad([i,y,d],[i,y,p+M],[i,b,p+T],[i,b,d],t,[L(d,y),L(p+M,y),L(p+T,b),L(d,b)]),(M>0||T>0)&&(e.quad([a,y,p-M],[i,y,p-M],[i,b,p-T],[a,b,p-T],n),e.quad([i,y,p+M],[a,y,p+M],[a,b,p+T],[i,b,p+T],n),e.quad([a,y,l],[a,y,p-M],[a,b,p-T],[a,b,l],t),e.quad([a,y,p+M],[a,y,d],[a,b,d],[a,b,p+T],t))}if(e.box(a,_n-.2,l,i,_n-.06,d,t),e.box(i,_n-.42,l+.05,i+.012,_n-.24,d-.05,o),h){let g=[];for(let y=0;y<=30;y++){let b=y/30,M=b<.5?na+(Io.apex-na)*(b*2):Io.apex-(Io.apex-na)*((b-.5)*2),T=b<.5?-1:1;g.push([i+.01,Math.min(M,Io.apex-.002),p+T*(Tf(M,Io.ys,Io.a,Io.r)+.03)])}e.tube(g,.022,n,6)}}s(en,En,!0),s(jr,or,!0);{let l=En,d=jr,h=(l+d)/2;e.box(a,na,l,i,_n-.06,d,t);let p={ys:1.85,a:.55,r:.8},u=[];for(let v=0;v<=40;v++){let m=v/40,g=p.ys+Math.sqrt(p.r*p.r-(p.r-p.a)*(p.r-p.a)),y=m<.5?.35+(g-.35)*(m*2):g-(g-.35)*((m-.5)*2),b=m<.5?-1:1;u.push([i+.012,Math.min(y,g-.002),h+b*Tf(y,p.ys,p.a,p.r)])}u.push(u[0]),e.tube(u,.02,n,6),e.box(i,.95,h-.22,i+.015,1.3,h+.22,o),e.box(i,.35,h-.42,i+.01,.75,h+.42,n),e.tube([[i+.03,1.12,d-.13],[i+.06,1.12,d-.13],[i+.06,1.12,d-.2]],.009,Mn.BRASS,6)}[en-.02,En,jr,or+.02].forEach((l,d)=>{let h=d===1||d===2,p=.075,u=_n+(h?.62:.4);e.box(uo+.06,0,l-p,uo+.06+2*p,u,l+p,t),e.box(uo+.04,u-.04,l-p-.02,uo+.08+2*p,u,l+p+.02,n);let v=uo+.06+p,m=h?.62:.5;e.spire(v,l,u,p*.95,u+m,t);for(let g=1;g<=3;g++){let y=u+m*g/4.2,b=p*.95*(1-g/4.2)+.02;for(let[M,T]of[[1,0],[-1,0],[0,1],[0,-1]])e.tube([[v+M*(b-.02),y-.02,l+T*(b-.02)],[v+M*(b+.015),y+.03,l+T*(b+.015)]],.008,n,4)}e.lathe(v,l,[[0,u+m-.02],[.03,u+m+.03],[.022,u+m+.07],[0,u+m+.1]],t,10)});let f=(l,d,h)=>{let p=(l+d)/2,u=uo+.075,v=_n+.07,m=v+h,g=[1,0,0],y=e.v([u,v,l],g,o,[l,v]),b=e.v([u,v,d],g,o,[d,v]),M=e.v([u,m,p],g,o,[p,m]);e.idx.push(y,b,M);let T=e.v([u-.04,v,l],[-1,0,0],t),L=e.v([u-.04,v,d],[-1,0,0],t),C=e.v([u-.04,m,p],[-1,0,0],t);e.idx.push(T,C,L);let D=[],B=[];for(let ee=0;ee<=10;ee++){let te=ee/10;D.push([u+.02,v+h*te,l+(p-l)*te]),B.push([u+.02,v+h*te,d+(p-d)*te])}e.tube(D,.022,n,6),e.tube(B,.022,n,6);for(let ee=2;ee<=8;ee+=2)for(let te of[D[ee],B[ee]])e.tube([te,[te[0]+.01,te[1]+.06,te[2]+(te===D[ee]?-.02:.02)]],.01,n,4);e.lathe(u,p,[[0,m],[.035,m+.06],[.022,m+.12],[0,m+.16]].map(([ee,te])=>[ee,te]),t,10);let W=Math.min(.17,h*.32),Q=v+h*.38,ce=[];for(let ee=0;ee<=24;ee++){let te=ee/24*hi*2;ce.push([u+.012,Q+Math.sin(te)*W,p+Math.cos(te)*W])}e.tube(ce,.012,n,5)};f(en-.02,En,.52),f(En,jr,.82),f(jr,or+.02,.52),e.lathe(Nn.x,Nn.z,[[0,_t.top],[.036,_t.top+.001],[Nn.r,_t.top+.012],[Nn.r*1.02,_t.top+.035],[.036,_t.top+.052],[.02,_t.top+.062],[.016,_t.top+.068]],Mn.INKGLASS,24),e.lathe(Nn.x,Nn.z,[[.016,_t.top+.064],[.021,_t.top+.066],[.022,_t.top+.075],[.016,_t.top+.076],[0,_t.top+.072]],Mn.BRASS,20);{let l=Lf.a,d=Lf.b,h=26,p=y=>{let b=Math.sin(y*hi)*.025;return[l[0]+(d[0]-l[0])*y+b*.6,l[1]+(d[1]-l[1])*y+b*.4,l[2]+(d[2]-l[2])*y+b]},u=[];for(let y=0;y<=h;y++)u.push(p(y/h));e.tube(u,y=>.0028*(1-.7*y)+6e-4,Mn.QUILL,5);let v=e.norm(e.sub(d,l)),m=e.norm(e.cross(v,[.2,1,.1])),g=e.cross(m,v);for(let y of[-1,1]){let b=e.pos.length/3;for(let M=0;M<=h;M++){let T=M/h,L=p(T),C=T<.28?0:(y>0?.03:.02)*Math.sin(hi*Math.pow((T-.28)/.72,.75)),D=C*.25,B=[L[0]+m[0]*y*C-g[0]*D,L[1]+m[1]*y*C-g[1]*D,L[2]+m[2]*y*C-g[2]*D];e.v(L,g,Mn.QUILL,[T,0]),e.v(B,g,Mn.QUILL,[T,y])}for(let M=0;M<h;M++){let T=b+M*2;e.idx.push(T,T+2,T+1,T+1,T+2,T+3)}}}return e.orient()}function VE(e,t){let n=So.top,r=So.x0;e(r-.35,0,So.z0-.35,r,n+.35,So.z1+.35),e(r,0,So.z0-.35,-.35,n,So.z0),e(r,0,So.z1,-.35,n,So.z1+.35),e(r,n,So.z0,-.35,n+.35,So.z1),e(.35,0,So.z0-.42,.35+.16,n,So.z0),e(.35,0,So.z1,.35+.16,n,So.z1+.42),e(.35,n,So.z0-.5,.35+.18,n+.42,So.z1+.5),e(.35,n+.42,So.z0-.6,.35+.26,n+.52,So.z1+.6),e(.35,0,So.z0-.5,.35+.22,.42,So.z0),e(.35,0,So.z1,.35+.22,.42,So.z1+.5),e(-.35-.01,0,So.z0,.35+.12,.02,So.z1),t(r,So.z0,-.35,So.z1)}wr.exports=e=>{let t=Ya(),o=z3.GLSL,n=WE(),r=`
	precision highp float;
	${o}
	uniform float time;
	${t.lanternGLSL()}
	${r0.roomGLSL()}
	${N3()}
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
		}`,attributes:{position:n.pos,normal:n.nrm,kind:n.kind,uv:n.uv},elements:n.idx});function s(ve,Te,re,vt){let xt=[],$t=[],yt=[],Bt=[],Lt=[],Dt=uo-.02,Fe=Io.apex+.08,Qe=na+.015;for(let qe=0;qe<=40;qe++){let dt=qe/40,rt=Fe+(Qe-Fe)*dt;for(let qt=0;qt<=90;qt++){let Je=qt/90,fe=re?.2+.13*dt*dt:Te-ve,Xe=ve+Je*fe,pt=re?.05+.02*dt:.035+.01*Math.sin(Je*7),lt=Je*vt*hi*2+Math.sin(dt*2+Je*5)*.6,oo=Dt-pt*(.5+.5*Math.sin(lt))-(re?.02*dt:0),w=[1,0,-(-pt*.5*Math.cos(lt)*vt*hi*2/fe)],Mt=Math.hypot(w[0],w[1],w[2]);xt.push(oo,rt,Xe),$t.push(w[0]/Mt,0,w[2]/Mt),yt.push(2),Bt.push(Math.sin(lt),dt)}}for(let qe=0;qe<40;qe++)for(let dt=0;dt<90;dt++){let rt=qe*91+dt,qt=rt+90+1;Lt.push(rt,qt,rt+1,rt+1,qt,qt+1)}for(let qe=0;qe<Lt.length;qe+=3){let[dt,rt,qt]=[Lt[qe],Lt[qe+1],Lt[qe+2]],Je=lt=>[xt[lt*3],xt[lt*3+1],xt[lt*3+2]],fe=[0,1,2].map(lt=>Je(rt)[lt]-Je(dt)[lt]),Xe=[0,1,2].map(lt=>Je(qt)[lt]-Je(dt)[lt]);fe[1]*Xe[2]-fe[2]*Xe[1]<0&&(Lt[qe+1]=qt,Lt[qe+2]=rt)}return{pos:xt,nrm:$t,kind:yt,uv:Bt,idx:Lt}}let c=s(en+.02,en+.4,!0,6),f=s(jr+.04,or-.04,!1,9),l={pos:c.pos.concat(f.pos),nrm:c.nrm.concat(f.nrm),kind:c.kind.concat(f.kind),uv:c.uv.concat(f.uv),idx:c.idx.concat(f.idx.map(ve=>ve+c.pos.length/3))},d=e({vert:`
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
			vec3 p = vec3(${it(xo.x)} + corner.x * ${it(xo.w/2)}, ${it(xo.y)} + corner.y * ${it(xo.h/2)}, ${it(xo.z)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${r}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = v_pos.xy - vec2(${it(xo.x)}, ${it(xo.y)});
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(0.0, 0.0, v_eye.z < ${it(xo.z)} ? -1.0 : 1.0);
			vec3 V = normalize(v_eye - v_pos);
			vec3 spec;
			vec3 light = boothLight(v_pos + N * 0.01, N, V, 0.8, spec);
			// dark old bronze, its edges catching the lamp behind it
			vec3 base = vec3(0.16, 0.10, 0.05);
			vec3 col = base * light + spec * 0.6;
			float edge = smoothstep(0.25, 0.5, hole);
			col += vec3(1.0, 0.66, 0.34) * edge * mix(0.35, 0.22, night);
			gl_FragColor = vec4(col, 1.0);
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,cull:{enable:!1}}),p=e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec2 corner;
		varying vec2 v_c;
		void main() {
			vec3 p = vec3(${it(xo.x)} + corner.x * 0.75, ${it(xo.y)} + corner.y * 0.9, ${it(jr-.03)});
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),u=14,v=[];for(let ve=0;ve<u;ve++)[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(Te=>v.push(Te[0],Te[1],(ve+.5)/u));let m=e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 c;
		varying vec3 v_pos;
		void main() {
			// slices across the booth, from the window back towards the bench
			vec3 p = vec3(${it(UE)} + c.x * ${it((uo-pn)/2-.02)}, 0.9 + (c.y + 1.0) * 0.8, ${it(En-.03)} - c.z * 1.25);
			v_pos = p;
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`
		precision highp float;
		uniform float night, time;
		${N3().split("// the candle's light is hidden")[0]}
		varying vec3 v_pos;
		void main() {
			float T = throughGrille(v_pos, 0.0);
			float d = length(v_pos - ${ra(Fo)});
			// dust drifting in the beam
			float dust = 0.65 + 0.35 * sin(v_pos.x * 23.0 + time * 0.3) * sin(v_pos.y * 17.0 - time * 0.21) * sin(v_pos.z * 19.0 + time * 0.17);
			vec3 col = vec3(1.0, 0.68, 0.36) * T * dust * 0.035 / (0.4 + d * d * 0.5) * mix(1.0, 0.7, night);
			gl_FragColor = vec4(col, 1.0);
		}`.replace("float grilleHole","float grilleHole"),attributes:{c:{buffer:e.buffer(v),size:3}},count:v.length/3,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}}),g=(()=>{if(typeof document=="undefined")return null;let ve=document.createElement("canvas");ve.width=512,ve.height=652;let Te=ve.getContext("2d");Te.fillStyle="#cdb38a",Te.fillRect(0,0,ve.width,ve.height);let re=7,vt=()=>(re=re*1664525+1013904223>>>0,re/4294967296);for(let $t=0;$t<2400;$t++){Te.fillStyle=`rgba(${vt()<.5?"90,62,30":"245,230,200"},${.03+vt()*.05})`;let yt=vt()*ve.width,Bt=vt()*ve.height;Te.fillRect(yt,Bt,1+vt()*14,1)}for(let $t=0;$t<26;$t++){let yt=vt()*ve.width,Bt=vt()*ve.height,Lt=20+vt()*90,Qt=Te.createRadialGradient(yt,Bt,0,yt,Bt,Lt);Qt.addColorStop(0,`rgba(120,80,35,${.04+vt()*.06})`),Qt.addColorStop(1,"rgba(120,80,35,0)"),Te.fillStyle=Qt,Te.fillRect(yt-Lt,Bt-Lt,Lt*2,Lt*2)}let xt=Te.createRadialGradient(ve.width/2,ve.height/2,ve.width*.3,ve.width/2,ve.height/2,ve.height*.72);return xt.addColorStop(0,"rgba(110,70,30,0)"),xt.addColorStop(1,"rgba(110,70,30,0.38)"),Te.fillStyle=xt,Te.fillRect(0,0,ve.width,ve.height),ve})(),y=g?e.texture({data:g,min:"linear",mag:"linear",flipY:!1}):e.texture(),b=e.texture({shape:[8,8],data:new Uint8Array(8*8*4)}),M=[18,24],T=[],L=[];for(let ve=0;ve<=M[1];ve++)for(let Te=0;Te<=M[0];Te++)T.push(Te/M[0],ve/M[1]);for(let ve=0;ve<M[1];ve++)for(let Te=0;Te<M[0];Te++){let re=ve*(M[0]+1)+Te,vt=re+M[0]+1;L.push(re,re+1,vt,re+1,vt+1,vt)}let C=e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale, fold, slide;
		attribute vec2 st;
		varying vec3 v_pos, v_n, v_eye;
		varying vec2 v_st;
		void main() {
			// s across (texture left = +x), t from the near edge (0) to the far (1)
			float s = st.x, t = st.y;
			float x = ${it(br.cx+br.w/2)} - s * ${it(br.w)};
			float zNear = ${it(br.cz-br.d/2)};
			vec3 p = vec3(x, ${it(br.y)}, zNear + t * ${it(br.d)});
			vec3 n = vec3(0.0, 1.0, 0.0);
			// a slight cockle
			p.y += 0.0012 * sin(s * 7.0 + t * 3.0) * sin(t * 5.0);
			// the near half folds up and over onto the far half
			if (t < 0.5) {
				float a = fold * 3.14159 * 0.985;
				float dd = (0.5 - t) * ${it(br.d)};
				float zf = zNear + 0.5 * ${it(br.d)};
				p.z = zf - dd * cos(a);
				p.y = ${it(br.y)} + dd * sin(a) + 0.0016 * fold;
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
			if (v_pos.z > ${it(En+.015)}) discard;
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
		}`,attributes:{st:{buffer:e.buffer(T),size:2}},elements:L,uniforms:{fold:()=>fi.fold,slide:()=>fi.slide,paperTex:y,inkTex:b},cull:{enable:!1}}),D=R3();D.lathe(To.x,To.z,[[0,_t.top],[.048,_t.top+.002],[.052,_t.top+.012],[.046,_t.top+.014],[.022,_t.top+.012],[0,_t.top+.012]],Mn.BRASS,24),D.lathe(To.x,To.z,[[0,_t.top+.012],[To.r,_t.top+.012],[To.r*1.02,_t.top+.012+To.h*.6],[To.r,_t.top+.012+To.h],[To.r*.75,_t.top+.012+To.h-.004],[0,_t.top+.012+To.h-.008]],9,20),D.tube([[To.x,_t.top+.012+To.h-.008,To.z],[To.x+.001,_t.top+.012+To.h+.012,To.z]],.0012,8,4),D.orient();let B=e({vert:a,frag:`${r}
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
				float up = smoothstep(${it(_t.top+To.h*.4)}, ${it(_t.top+.012+To.h)}, v_pos.y);
				col += vec3(1.0, 0.55, 0.22) * up * 0.22 * candleFlicker();
			}
			gl_FragColor = vec4(col * night, 1.0);
		}`,attributes:{position:D.pos,normal:D.nrm,kind:D.kind,uv:D.uv},elements:D.idx}),W=e({vert:`
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
			vec3 p = ${ra(To.flame)} + right * corner.x * size.x + vec3(0.0, 1.0, 0.0) * corner.y * size.y;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{halo:e.prop("halo")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),Q=[0,0],ce=e({uniforms:{view:e.prop("view")}}),ee=new Float32Array(16);function te(ve){jE.translate(ee,ve.view,r0.OFF),ce({view:ee},()=>Ke(ve))}function Ke(ve){let Te=ve&&ve.reflected;if(i(),d(),h(),fi.ink&&fi.inkDirty){let re=fi.ink;Q[0]!==re.width||Q[1]!==re.height?(b({data:re,min:"linear",mag:"linear",flipY:!1}),Q=[re.width,re.height]):b.subimage(re),fi.inkDirty=!1}fi.shown&&C(),z3.night>.01&&(B(),Te||(W({halo:1}),W({halo:0}))),Te||(p(),m())}return te};wr.exports.addBay=VE;wr.exports.BAY=So;wr.exports.OFF=r0.OFF;wr.exports.STATE=fi;var C3=e=>[e[0]+r0.OFF[0],e[1]+r0.OFF[1],e[2]+r0.OFF[2]];wr.exports.SHOTS=Object.fromEntries(Object.entries(BE).map(([e,t])=>[e,Object.assign({},t,{eye:C3(t.eye),target:C3(t.target)})]));wr.exports.SEAT=Hr;wr.exports.LAMP=Fo;wr.exports.SCONCE=cn;wr.exports.GRILLE=xo;wr.exports.PAPER=br;wr.exports.ZONE={FRONT:uo,BACK:pn,ZA:en,ZB:En,ZC:jr,ZD:or}});var y1=pe((JA,P3)=>{"use strict";function XE(e){let t=e>>>0||1;return function(){return t=t*1664525+1013904223>>>0,t/4294967296}}var I3={stroke:.05,letter:.045,word:.15,comma:.28,stop:.45,line:.25,para:.6},YE=["th","ng","er"];function KE(e,t,o){o=Object.assign({ink:"#2a1d12",xh:14,speed:23,lineHeight:2.85,seed:7,width:.12,pace:.45},o||{});let n=e.getContext("2d"),r={};Object.keys(I3).forEach(v=>{r[v]=I3[v]*o.pace});let a=[],i=0,s=0,c=0,f=[];function l(v,m){let g=XE(o.seed),y=o.xh,b={},M=te=>{let Ke=t[te];if(!Ke)return null;let ve=Math.floor(g()*Ke.length);return Ke.length>1&&ve===b[te]&&(ve=(ve+1)%Ke.length),b[te]=ve,Ke[ve]},T=te=>{if(t[te])return{g:M(te),sc:1};let Ke=te.toLowerCase();return t[Ke]?{g:M(Ke),sc:/[A-Z]/.test(te)?1.32:1}:null},L=[],C=.15,D=0,B=0,W=(g()-.5)*.02,Q=m/y,ce=v.split(/\n\s*\n/);ce.forEach((te,Ke)=>{te.replace(/\s+/g," ").trim().split(" ").forEach(Te=>{let re=[];for(let yt=0;yt<Te.length;yt++){let Bt=Te.substr(yt,2).toLowerCase();if(YE.indexOf(Bt)>=0&&t[Bt]&&g()<.55&&Te[yt]===Te[yt].toLowerCase()){re.push({ch:Bt,gl:{g:M(Bt),sc:1}}),yt++;continue}let Lt=T(Te[yt]);Lt&&Lt.g&&re.push({ch:Te[yt],gl:Lt})}let vt=re.map(()=>.17+g()*.07),xt=re.reduce((yt,Bt,Lt)=>yt+Bt.gl.g.w*Bt.gl.sc+vt[Lt],0);D>0&&D+xt>Q&&(D=0,B++,C+=r.line,W=(g()-.5)*.02),re.forEach((yt,Bt)=>{let Lt=yt.gl.g,Qt=yt.gl.sc*(.95+g()*.1),je=(g()-.5)*.06,Dt=(g()-.5)*.08+W*D,Fe=D,Qe=B*o.lineHeight+1.9+Dt,qe=Math.cos(je),dt=Math.sin(je),rt=Je=>[(Fe+(Je[0]*qe-Je[1]*dt)*Qt)*y,(Qe+(Je[0]*dt+Je[1]*qe)*Qt)*y],qt=(Je,fe)=>{let Xe=0;for(let lt=1;lt<Je.length;lt++)Xe+=Math.hypot(Je[lt][0]-Je[lt-1][0],Je[lt][1]-Je[lt-1][1]);let pt=Math.max(o.minDur||(fe?.06:.07),Xe/(o.speed*y));L.push({pts:Je,L:Xe,start:C,dur:pt,dot:fe}),C+=pt};if(Lt.s.forEach((Je,fe)=>{fe>0&&(C+=r.stroke),qt(Je.map(rt),!1)}),Lt.dot){let Je=Lt.s[0][0];Lt.s.forEach(Xe=>Xe.forEach(pt=>{pt[1]<Je[1]&&(Je=pt)}));let fe=rt([Je[0]+.1,-1.36]);C+=r.stroke*1.4,qt([fe,[fe[0]+y*.05,fe[1]+y*.03]],!0)}C+=r.letter*(.6+g()*.8),D+=Lt.w*Qt+vt[Bt]});let $t=Te[Te.length-1];C+=/[.!?]/.test($t)?r.stop:/[,;:]/.test($t)?r.comma:r.word,D+=.55+g()*.2}),Ke<ce.length-1&&(D=0,B+=1.6,C+=r.para)});let ee=(B+1)*o.lineHeight*y+y*1.55;return{strokes:L,total:C,height:ee}}function d(v,m){if(o.fixed){let g=o.fixed;n.setTransform(1,0,0,1,g.mx,g.my),n.clearRect(-g.mx,-g.my,e.width,e.height)}else{let g=Math.min(window.devicePixelRatio||1,2);e.width=Math.round(v*g),e.height=Math.round(m*g),e.style.height=m+"px",e.style.width=v+"px",n.setTransform(g,0,0,g,0,0),n.clearRect(0,0,v,m)}n.strokeStyle=o.ink,n.fillStyle=o.ink,n.lineCap="round",n.lineJoin="round",o.shadow&&(n.shadowColor=o.shadow,n.shadowBlur=o.shadowBlur||6)}let h=v=>v<.5?2*v*v:1-Math.pow(-2*v+2,2)/2;function p(v,m){let g=f[v.i]||0;if(m<=g)return;let y=o.width*o.xh,b=0;for(let M=1;M<v.pts.length;M++){let T=v.pts[M-1],L=v.pts[M],C=Math.hypot(L[0]-T[0],L[1]-T[1]),D=b,B=b+C;if(b=B,B<=g||C===0)continue;if(D>=m)break;let W=Math.max(0,(g-D)/C),Q=Math.min(1,(m-D)/C),ce=[T[0]+(L[0]-T[0])*W,T[1]+(L[1]-T[1])*W],ee=[T[0]+(L[0]-T[0])*Q,T[1]+(L[1]-T[1])*Q],te=(D+B)/2/(v.L||1),Ke=.72+.28*Math.sin(Math.PI*Math.min(1,Math.max(0,te)));n.lineWidth=y*Ke,n.globalAlpha=.86+.14*Ke,n.beginPath(),n.moveTo(ce[0],ce[1]),n.lineTo(ee[0],ee[1]),n.stroke()}v.dot&&g===0&&(n.globalAlpha=1,n.beginPath(),n.arc(v.pts[0][0],v.pts[0][1],y*.75,0,Math.PI*2),n.fill()),f[v.i]=m}function u(v){let m=(v-c)/1e3;for(let g=0;g<a.length;g++){let y=a[g];if(y.start>m)break;let b=Math.min(1,(m-y.start)/y.dur);p(y,h(b)*y.L)}if(o.onPen){let g=0;for(;g+1<a.length&&a[g+1].start<=m;)g++;a[g]&&o.onPen(a[g].pts[0][1])}m<i?s=requestAnimationFrame(u):o.onDone&&o.onDone()}return{write(v,m){cancelAnimationFrame(s);let g=o.fixed?e.width-2*o.fixed.mx:e.parentElement.clientWidth,y=l(v,g);a=y.strokes,i=y.total;let b=typeof o.maxTime=="function"?o.maxTime(v):o.maxTime;if(b&&i>b){let T=b/i;a.forEach(L=>{L.start*=T,L.dur*=T}),i=b}a.forEach((T,L)=>{T.i=L}),f=[],d(g,y.height);let M=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(m||M){a.forEach(T=>p(T,T.L));return}return c=performance.now(),s=requestAnimationFrame(u),i},finish(){cancelAnimationFrame(s),a.forEach(v=>p(v,v.L)),o.onDone&&o.onDone()},stop(){cancelAnimationFrame(s)}}}P3.exports=KE});var w1=pe((ek,O3)=>{"use strict";var b1=Fn(),QE='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7"/></svg>',ZE='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M19.5 14.6A8 8 0 0 1 9.4 4.5a8 8 0 1 0 10.1 10.1z"/></svg>';O3.exports=function(t){let o=document.createElement("button");o.type="button",o.className=t+" light-toggle";let n=()=>{let r=b1.isNight;o.innerHTML=r?QE:ZE,o.setAttribute("aria-label",r?"Switch to day":"Switch to night"),o.title=r?"Day":"Night",o.setAttribute("aria-pressed",r?"true":"false")};return n(),b1.onChange(n),["mousedown","pointerdown"].forEach(r=>o.addEventListener(r,a=>a.stopPropagation())),o.addEventListener("click",r=>{r.stopPropagation(),b1.toggle()}),o}});var H3=pe((tk,q3)=>{"use strict";var vn=zf(),JE=y1(),eS="81efb912-50a2-4fcd-b5e8-c3a28eecbe93",F3=100,ui=e=>Math.max(0,Math.min(1,e)),xs=(e,t,o)=>{let n=ui((o-e)/(t-e));return n*n*(3-2*n)},a0=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,di=(e,t,o)=>e+(t-e)*o,G3=(e,t,o)=>[di(e[0],t[0],o),di(e[1],t[1],o),di(e[2],t[2],o)];function Nf(e,t){let o=e.length-1,n=ui(t)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,i=e[Math.max(0,r-1)],s=e[r],c=e[r+1],f=e[Math.min(o,r+2)];return[0,1,2].map(l=>.5*(2*s[l]+(-i[l]+c[l])*a+(2*i[l]-5*s[l]+4*c[l]-f[l])*a*a+(-i[l]+3*s[l]-3*c[l]+f[l])*a*a*a))}var $3=e=>({eye:e.eye.slice(),target:e.target.slice(),fov:e.fov,roll:0});function D3(e,t,o){return{eye:G3(e.eye,t.eye,o),target:G3(e.target,t.target,o),fov:di(e.fov,t.fov,o),roll:di(e.roll||0,t.roll||0,o)}}var ys={letterbox:.55,exposure:2,focus:.82,aperture:1.1,vignette:.48,shafts:0},Oc={letterbox:.55,exposure:1.8,focus:.42,aperture:1.3,vignette:.5,shafts:0},tS=`
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
`;q3.exports=function(t){let{root:o,avatar:n}=t,r=document.createElement("style");r.textContent=tS,document.head.appendChild(r);let a=document.createElement("div");a.className="conf-ui",a.innerHTML=`
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
		</div>`,o.appendChild(a);let i=a.querySelector(".conf-write"),s=a.querySelector("textarea"),c=a.querySelector('[data-act="send"]'),f=a.querySelector(".conf-hint"),l=a.querySelector(".conf-final"),d=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,h=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;s.addEventListener("input",()=>{let je=s.value.match(new RegExp("^\\s*(\\S+\\s+){0,"+(F3-1)+"}\\S+"));(s.value.trim()?s.value.trim().split(/\s+/).length:0)>F3&&je&&(s.value=je[0]),c.disabled=!s.value.trim()}),["keydown","keyup","keypress"].forEach(je=>s.addEventListener(je,Dt=>Dt.stopPropagation())),a.addEventListener("pointerdown",je=>je.stopPropagation()),a.addEventListener("click",je=>{let Dt=je.target.closest("button");Dt&&(je.stopPropagation(),Dt.dataset.act==="send"&&W(),Dt.dataset.act==="leave"&&ee())});let p=!1,u="",v=0,m=null,g=null,y="",b=null,M=0,T="",L=document.createElement("canvas");L.width=512,L.height=652;function C(je){je!==T&&(T=je,i.classList.toggle("on",je==="write"),f.classList.toggle("on",je==="hint"),l.classList.toggle("on",je==="final"),je==="write"&&setTimeout(()=>{if(u==="write")try{s.focus({preventScroll:!0})}catch(Dt){}},900))}function D(je){u=je,v=0}function B(je,Dt){if(p)return;p=!0,m={eye:je.eye.slice(),target:je.target.slice(),fov:je.fov,roll:je.roll||0},g=Object.assign({},Dt),y="",s.value="",c.disabled=!0,vn.STATE.fold=0,vn.STATE.slide=0,vn.STATE.shown=!0,vn.STATE.active=!0;let Fe=L.getContext("2d");Fe.setTransform(1,0,0,1,0,0),Fe.clearRect(0,0,L.width,L.height),vn.STATE.ink=L,vn.STATE.inkDirty=!0,document.body.classList.add("confessing"),D("approach"),C("")}function W(){if(u!=="write"||(y=s.value.trim(),!y))return;s.blur(),C("");let je=Math.max(10,Math.min(22,24-y.length/28));b=JE(L,t.glyphs(),{ink:"rgba(30,16,8,0.97)",xh:je,width:.15,seed:11+y.length,speed:60,pace:.2,minDur:.03,maxTime:Dt=>2.4+Dt.length/160,fixed:{mx:46,my:40},onPen:()=>{vn.STATE.inkDirty=!0},onDone:()=>{vn.STATE.inkDirty=!0}}),D("down")}function Q(){try{let je={access_key:eS,subject:"A note left in the confessional",from_name:"Your gallery",message:y,page:location.href,when:new Date().toString()};fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(je),keepalive:!0}).catch(()=>{})}catch(je){}}function ce(){u==="ready"&&(Q(),D("fold"),C(""))}function ee(){!p||u==="leave"||(C(""),s.blur(),te=Ke,D("leave"))}let te=null,Ke=null,ve=vn.SHOTS.window,Te=vn.OFF,re=je=>[je[0]+Te[0],je[1],je[2]],vt=[[3.4,1.75,44.5],[.3,1.72,44.5],[-2.5,1.66,45],[-4.6,1.6,46.55],[-7,1.58,47.15],[-9.3,1.55,46.4],re([1.25,1.5,43.25]),re([-.55,1.36,42.92])],xt=[[-3,1.9,44.5],[-6.5,1.5,44.6],[-7,1,44.4],[-7.6,.95,44],[-10.5,1.5,44.6],re([-1,1.55,43.6]),re([-1.4,1.35,43.1]),re([-1.5,1.33,43.3])];function $t(je){let Dt=a0(ui(je)),Fe=[m.eye,...vt,ve.eye],Qe=[m.target,...xt,ve.target];return{eye:Nf(Fe,Dt),target:Nf(Qe,xs(0,1,Dt*1.03)),fov:di(m.fov,ve.fov,xs(.6,.97,Dt)),roll:(m.roll||0)*(1-Dt)}}function yt(je,Dt){if(h)return je;let Fe=performance.now()/1e3,Qe=.004*Dt,qe=Math.sin(Fe*.61)*.6+Math.sin(Fe*1.37+1.3)*.4,dt=Math.sin(Fe*.47+2.1)*.6+Math.sin(Fe*1.13+.4)*.4;return{eye:[je.eye[0]+qe*Qe,je.eye[1]+dt*Qe*.7,je.eye[2]],target:[je.target[0]+dt*Qe*1.5,je.target[1]+qe*Qe,je.target[2]],fov:je.fov,roll:je.roll}}function Bt(je,Dt,Fe){let Qe={};for(let qe in Dt)Qe[qe]=typeof Dt[qe]=="number"&&typeof je[qe]=="number"?di(je[qe],Dt[qe],Fe):Dt[qe];return Qe}function Lt(je){je*=window.__confSpeed||1,v+=je;let Dt=$3(ve),Fe=$3(vn.SHOTS.paper),Qe,qe;if(u==="approach"){let rt=ui(v/(h?.6:15));Qe=$t(rt),qe=Bt(g,ys,xs(.15,.9,rt)),rt>=1&&(D("write"),C("write"))}else if(u==="write")Qe=yt(Dt,1),qe=ys;else if(u==="down"){let dt=ui(v/(h?.4:2));Qe=D3(Dt,Fe,a0(dt)),qe=Bt(ys,Oc,a0(dt)),dt>=1&&(M=b.write(y,h)||0,vn.STATE.inkDirty=!0,D("writing"))}else if(u==="writing")Qe=yt(Fe,.6),qe=Oc,v>M+.8&&(D("ready"),f.textContent=d?"Scroll to fold it and pass it through":"Swipe up to fold it and pass it through",C("hint"));else if(u==="ready")Qe=yt(Fe,.6),qe=Oc;else if(u==="fold"){let dt=ui(v/(h?.3:1.5));vn.STATE.fold=a0(dt),Qe=yt(Fe,.6),qe=Oc,dt>=1&&D("slide")}else if(u==="slide"){let rt=ui(v/(h?.6:3.4));vn.STATE.slide=a0(xs(0,.7,rt));let qt=a0(xs(.35,1,rt));Qe=D3(Fe,Dt,qt),qe=Bt(Oc,ys,qt),rt>=1&&(vn.STATE.shown=!1,D("final"),C("final"))}else if(u==="final")Qe=yt(Dt,1),qe=ys;else if(u==="leave"){let rt=ui(v/(h?.6:12)),qt={eye:m.eye,target:m.target,fov:m.fov,roll:m.roll},Je=a0(rt),fe=[te.eye,re([-.55,1.4,42.95]),re([1.4,1.55,43.4]),[-9.3,1.58,46.4],[-7,1.6,47.15],[-4.6,1.62,46.55],[-2.2,1.68,44.8],[.6,1.72,44.5],qt.eye],Xe=[te.target,re([1.5,1.45,43.4]),[-7,1.2,44.6],[-4,1.5,47],[-1.5,1.7,45.5],[1,1.8,44.5],[4,1.8,44.5],[7,1.9,44.2],qt.target];if(Qe={eye:Nf(fe,Je),target:Nf(Xe,Je),fov:di(te.fov,qt.fov,Je),roll:qt.roll*Je},qe=Bt(ys,g,xs(.1,.7,rt)),rt>=1){p=!1,vn.STATE.active=!1,vn.STATE.shown=!0,vn.STATE.fold=0,vn.STATE.slide=0;let pt=L.getContext("2d");pt.setTransform(1,0,0,1,0,0),pt.clearRect(0,0,L.width,L.height),vn.STATE.inkDirty=!0,document.body.classList.remove("confessing"),t.onExit&&t.onExit()}}return Ke=Qe,{camera:Qe,look:qe}}function Qt(){u==="ready"?ce():u==="writing"&&b&&(b.finish(),v=Math.max(v,M))}return{start:B,update:Lt,leave:ee,get active(){return p},get stage(){return u},wheel(je){je>8&&Qt()},swipe(je){je>0&&Qt()},tap(){Qt()},key(je){return["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(je)>=0?(Qt(),!0):je==="Escape"?(ee(),!0):!1},_setNote(je){s.value=je,s.dispatchEvent(new Event("input"))}}}});var Q3=pe((ok,K3)=>{"use strict";var bs=ts(),Cf=Ku(),_1=kl(),oS=rc(),M1=Zu(),nS=Cr(),Rf=!nS.isPhone&&!!(window.matchMedia&&window.matchMedia("(pointer: fine)").matches),{A:Mr}=Pr(),{C:Cn,PAINTING_X:Es}=On(),Er=e=>Math.max(0,Math.min(1,e)),Ie=(e,t,o)=>e+(t-e)*o,Mo=(e,t,o)=>[Ie(e[0],t[0],o),Ie(e[1],t[1],o),Ie(e[2],t[2],o)],Gt=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],E1=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],nr=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],Ne=(e,t,o)=>{let n=Er((o-e)/(t-e));return n*n*(3-2*n)};function rS(e,t,o,n,r,a){if(r<=0)return[e,o];let i=2/n,s=i*r,c=1/(1+s+.48*s*s+.235*s*s*s),f=a*n,l=Math.max(-f,Math.min(f,e-t)),d=e-l,h=(o+i*l)*r,p=(o-i*h)*c,u=d+(l+h)*c;return t-e>0==u>t&&(u=t,p=0),[u,p]}var j3=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,aS=e=>e*e*e,S1=e=>1-Math.pow(1-e,3),Bo=e=>-(Math.cos(Math.PI*e)-1)/2;function tn(e,t){let o=e.length-1,n=Er(t)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,i=e[Math.max(0,r-1)],s=e[r],c=e[r+1],f=e[Math.min(o,r+2)],l=a*a,d=l*a;return[0,1,2].map(h=>.5*(2*s[h]+(-i[h]+c[h])*a+(2*i[h]-5*s[h]+4*c[h]-f[h])*l+(-i[h]+3*s[h]-3*c[h]+f[h])*d))}var Ot=(e,t,o,n)=>({eye:e,target:t,fov:o,roll:n||0});function f0(e,t,o){return Ot(Mo(e.eye,t.eye,o),Mo(e.target,t.target,o),Ie(e.fov,t.fov,o),Ie(e.roll,t.roll,o))}var N1=()=>Ne(.75,1.3,window.innerWidth/window.innerHeight),rr=(e,t)=>f0(e,t,N1()),If=[7,3.95,Cn.hallEnd-.05],iS=[Cn.x1,2.9,Cn.zc],_s=[16.75,4.55,6.75],C1=[6.92,2.72,14.5],aa=[7.3,.015,47.1],sS=[_s,[16.2,4,7],[15.3,3.45,6.4],[14.1,3.2,5.7],[12.2,3.35,6.6],[10,3.75,9.6],[8.2,3.8,12.2],[7.3,3.4,13.8],C1],cS=[C1,[7.3,4.6,19.5],[7.6,4.9,23.5],[6.6,4.3,28.5],[7.5,3.2,34],[6.8,2.1,39.5],[7.4,1,44.2],[7.2,.3,46.4],aa],s0=[Es[0],3,Cn.z0],c0=[Es[1],3,Cn.z0],k1=47.45,Y3=4.6,lS=13.2,fS=1.42,Fc=[7.55,1.25,46.75],R1=[17.25,2.42,46],I1=[26.05,1.95,46],Gc=[36.15,.015,44],Ff=()=>Ie(6.8,6.15,N1()),hS=[Fc,[9.6,1.65,46.2],[12.3,2.05,45.1],[14.6,2.35,44.5],[16.2,2.3,44.7],R1],uS=[R1,[20.2,2.05,45.6],[23.2,1.8,45],I1],l0=[Es[2],3,Cn.z0],T1=[34.8,1.35,46],vi=[7.89,.03,19.03],U3=.36,B3=13.64,Dn=[{side:"left",z:34.5},{side:"left",z:23.5},{side:"left",z:14.6},{side:"right",z:14.6},{side:"right",z:23.5},{side:"right",z:34.5}];function Ur(e){let t=e.side==="left"?1:-1;return Mo([7-t*1,3,e.z+t*.2],[7-t*.6,3.25,e.z+t*.13],N1())}function dS(e){return e.side==="left"?rr(Ot([8.6,3.9,e.z],[U3,1.45,e.z],76),Ot([8,3.6,e.z+.7],[U3,3.95,e.z-2],46,-.008)):rr(Ot([5.4,3.9,e.z],[B3,1.45,e.z],76),Ot([6,3.6,e.z-.7],[B3,3.95,e.z+2],46,-.008))}var pS=()=>[Gc,[35.6,.5,44.6],[33.2,1.5,45.6],[29,2.3,46.1],[23.5,2.7,45.9],[18.5,2.9,45.4],[14.8,3.1,44.3],[11,3.3,41.8],[7.4,3.4,38.8],[5.4,3.3,36.6],Ur(Dn[0])],vS=()=>[Ur(Dn[2]),[3,3.2,13.2],[1.7,3,12],[2.6,3.2,10],[5,3.6,8.9],[7,3.8,8.6],[9,3.6,8.9],[11.4,3.2,10],[12.3,3,12],[11,3.1,13.4],Ur(Dn[3])],mS=()=>[Ur(Dn[5]),[9,3.4,31],[7.8,2.8,27.5],[6.8,1.9,24.5],[7.4,1,21],[7.75,.35,19.6],vi],W3={2:{pos:()=>C1,amp:[.18,.07,.12],tumble:.5},7:{pos:()=>Fc,amp:[.12,.09,.1],tumble:.55},8:{pos:()=>R1,amp:[.1,.08,.08],tumble:.5},9:{pos:()=>I1,amp:[.09,.06,.07],tumble:.45},10:{pos:()=>T1,amp:[.07,.04,.06],tumble:.35},12:{pos:()=>Ur(Dn[0]),amp:[.12,.08,.1],tumble:.5},13:{pos:()=>Ur(Dn[1]),amp:[.12,.08,.1],tumble:.5},14:{pos:()=>Ur(Dn[2]),amp:[.12,.08,.1],tumble:.5},15:{pos:()=>Ur(Dn[3]),amp:[.12,.08,.1],tumble:.5},16:{pos:()=>Ur(Dn[4]),amp:[.12,.08,.1],tumble:.5},17:{pos:()=>Ur(Dn[5]),amp:[.12,.08,.1],tumble:.5}},pi=[{name:"corridor",ui:"intro",look:{letterbox:1,exposure:1,focus:14,aperture:.25,vignette:.1},cam(e){let t=.9*(1-Math.exp(-e/14)),o=[0,Math.sin(e*.37)*.025,Math.sin(e*.23)*.06],n=rr(Ot([Cn.x0+.9,1.85,Cn.zc+.25],[Cn.x1,2.85,Cn.zc-.1],64),Ot([Cn.x0+1.2,2,Cn.zc+.35],[Cn.x1,2.6,Cn.zc-.15],50));return n.eye=Gt(Gt(n.eye,[t,0,0]),o),n}},{name:"about",ui:"about",look:{letterbox:.55,exposure:1.32,focus:2.9,aperture:.9,vignette:.12,shafts:.65},cam(e){let t=[Math.sin(e*.21)*.08,Math.sin(e*.33)*.03,-.25*(1-Math.exp(-e/12))],o=rr(Ot([16.6,1.9,9.2],[17.3,.4,5.6],64),Ot([15,1.35,7.75],[17.55,1.05,5.5],44,-.02));return o.eye=Gt(o.eye,t),o}},{name:"sky",ui:"sky",look:{letterbox:.55,exposure:1,focus:2.1,aperture:.45,vignette:.1,shafts:1},cam(e){let t=[Math.sin(e*.12)*.35,Math.sin(e*.2)*.04,(1-Math.cos(e*.12))*.25],o=rr(Ot([7,1.35,13],[7.2,7.6,20.4],74,.05),Ot([6.6,1.5,12.6],[7.3,7.2,20.8],56,.07));return o.eye=Gt(o.eye,t),o}},{name:"master",ui:"master",look:{letterbox:.55,exposure:1.12,focus:8,aperture:.6,vignette:.3,shafts:.5},cam(e){let t=[Math.sin(e*.17)*.05,Math.sin(e*.29)*.02,-.35*(1-Math.exp(-e/16))],o=rr(Ot([7,3.6,43.7],[7,3.85,If[2]],74),Ot([7,3.6,41.3],[7,3.95,If[2]],46));return o.eye=Gt(o.eye,t),o}},{name:"story",ui:"story",look:{letterbox:.55,exposure:1,focus:8.1,aperture:.9,vignette:.4,shafts:.4},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],o=rr(Ot([7,3.9,40.3],[7,1.35,If[2]],76),Ot([6.3,3.6,41.2],[3.7,3.95,If[2]],46,-.008));return o.eye=Gt(o.eye,t),o}},{name:"leaf",ui:"leaf",look:{letterbox:.55,exposure:1.15,focus:1.25,aperture:1.3,vignette:.35,shafts:.4},cam(e){let t=[Math.sin(e*.2)*.02,Math.sin(e*.3)*.006,0],o=rr(Ot([7.15,.15,46],[7.3,.04,aa[2]],50),Ot([7.05,.14,45.9],[7.25,.05,aa[2]],32));return o.eye=Gt(o.eye,t),o}},{name:"steps",ui:"steps",look:{letterbox:.9,exposure:1.2,focus:1.6,aperture:1.4,vignette:.4,shafts:.4},cam(e){let t=[Math.sin(e*.2)*.015,0,0],o=rr(Ot([7.15,.1,46.3],[7.05,.1,k1],50),Ot([7.1,.12,45.85],[7,.2,k1],30));return o.eye=Gt(o.eye,t),o}},{name:"float",ui:"float",look:{letterbox:.55,exposure:1.1,focus:2.2,aperture:.8,vignette:.3,shafts:.6},cam(e){let t=[Math.sin(e*.17)*.05,Math.sin(e*.27)*.02,0],o=rr(Ot([7.3,.85,45.65],[7.6,1.38,47.1],64),Ot([7.25,.82,45.8],[7.65,1.35,47.1],44));return o.eye=Gt(o.eye,t),o}},{name:"painting1",ui:"p1",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],o=rr(Ot([s0[0],2.3,46.85],[s0[0],1.25,s0[2]],74),Ot([s0[0]-.6,2.55,46.85],[s0[0]+1.9,2.9,s0[2]],46,.008));return o.eye=Gt(o.eye,t),o}},{name:"painting2",ui:"p2",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],o=rr(Ot([c0[0],1.95,46.85],[c0[0],1,c0[2]],74),Ot([c0[0]-.6,2.1,46.85],[c0[0]+1.9,2.75,c0[2]],46,.008));return o.eye=Gt(o.eye,t),o}},{name:"painting3",ui:"p3",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.9},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],o=rr(Ot([l0[0],1.4,46.85],[l0[0],.6,l0[2]],74),Ot([l0[0]-.6,1.45,46.85],[l0[0]+1.9,2,l0[2]],46,.008));return o.eye=Gt(o.eye,t),o}},{name:"door",ui:"door",look:{letterbox:.8,exposure:1.05,focus:1.45,aperture:1.1,vignette:.35,shafts:1},cam(e){let t=[Math.sin(e*.2)*.02,Math.sin(e*.3)*.006,0],o=rr(Ot([34.75,.5,44.15],[Cn.x1,.8,43.95],66),Ot([34.75,.45,44.3],[Cn.x1,.35,43.95],50));return o.eye=Gt(o.eye,t),o}},...Dn.map((e,t)=>({name:"hall"+t,ui:"h"+t,look:{letterbox:.55,exposure:1,focus:7.6,aperture:.7,vignette:.35,shafts:.7},cam(o){let n=[Math.sin(o*.15)*.04,Math.sin(o*.25)*.015,Math.sin(o*.11)*.04],r=dS(e);return r.eye=Gt(r.eye,n),r}})),{name:"rest",ui:"end",look:{letterbox:.55,exposure:1.05,focus:2.4,aperture:.5,vignette:.4,shafts:1.15},cam(e){let t=e*.025,o=rr(Ot([7.75,2.6,18.6],[7.89,0,19.08],60),Ot([7.75,2.3,18.45],[7.89,0,19.08],46)),n=o.eye[0]-vi[0],r=o.eye[2]-vi[2];return o.eye=[vi[0]+n*Math.cos(t)-r*Math.sin(t),o.eye[1],vi[2]+n*Math.sin(t)+r*Math.cos(t)],o}}],gS=[1,.96,.88];function V3(e,t){return{dur:t,cam(o,n,r){let a=Bo(o),i=f0(n,r,a),s=Dn[e].side==="left"?1:-1;return i.eye=Gt(i.eye,[s*.6*Math.sin(Math.PI*a),.15*Math.sin(Math.PI*a),0]),i},look(o,n,r){let a={};for(let i in r)typeof r[i]=="number"&&(a[i]=Ie(n[i],r[i],o));return a.aperture=Ie(n.aperture,r.aperture,o)*(1-.5*Math.sin(Math.PI*o)),a},leaf(o){let n=Bo(o),r=Ur(Dn[e]),a=Ur(Dn[e+1]),i=Dn[e].side==="left"?1:-1,s=Gt(Mo(r,a,.5),[i*1.2,.5,0]),c=tn([r,Mo(r,s,.6),s,Mo(a,s,.6),a],n);return{phase:"fly",pos:Gt(c,[0,Math.sin(o*Math.PI*5)*.07*Math.sin(Math.PI*o),0]),tumble:.5+.35*Math.sin(Math.PI*o)}}}}var A1=[{dur:6.2,cam(e,t,o){if(e<.5){let s=aS(e/.5),c=Mo(t.eye,[Cn.x1-3.2,2.6,Cn.zc],s),f=Mo(t.target,iS,Ne(0,.6,e/.5));return Ot(c,f,Ie(t.fov,t.fov-8,s),Ie(t.roll,.04,s))}let n=S1((e-.5)/.5),r=[[Mr.cx+.4,10.4,Mr.zc+.6],[Mr.cx-.6,7.6,Mr.zc+1.3],[Mr.cx-1.9,4.6,Mr.zc+1.75],o.eye],a=[[Mr.cx-.1,0,Mr.zc-.2],[Mr.cx-1,.4,Mr.zc-.1],[Mr.cx-1.1,.8,Mr.zc-.2],o.target];return Ot(tn(r,n),tn(a,n),Ie(o.fov+14,o.fov,n),Ie(-.25,o.roll,n))},look(e,t,o){let n=Ne(.22,.5,e),r=1-Ne(.5,.74,e);return{fade:e<.5?n:r,fadeColor:gS,exposure:Ie(t.exposure,o.exposure,Ne(.5,.9,e))*(1+2.2*(e<.5?Ne(.15,.5,e):1-Ne(.5,.8,e))),letterbox:Ie(t.letterbox,o.letterbox,Ne(.3,.7,e)),aperture:e<.5?t.aperture*(1-e*2):o.aperture*Ne(.6,1,e),focus:Ie(4,o.focus,Ne(.5,1,e)),shafts:Ie(t.shafts,o.shafts,Ne(.4,.6,e)),vignette:Ie(t.vignette,o.vignette,e)}},leaf(){return{phase:"home"}}},{dur:9,cam(e,t,o,n){let r=[t.eye,[15.6,2.4,8.3],[15.4,2.7,7.1],[12.6,2.6,5.4],[9.6,2,7.4],[7.6,1.6,10.6],o.eye],a=tn(r,Bo(e)),i=Ne(0,.12,e)*(1-Ne(.82,1,e)),s=Mo(Mo(t.target,o.target,Ne(.55,1,e)),n.pos,i),c=Ie(t.fov,o.fov,Ne(.3,1,e))-6*Math.sin(Math.PI*e),f=Ie(t.roll,o.roll,e)+.05*Math.sin(Math.PI*2*e);return Ot(a,s,c,f)},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{exposure:Ie(t.exposure,o.exposure,Ne(.25,.75,e)),letterbox:Ie(t.letterbox,o.letterbox,e),focus:Ie(a,o.focus,Ne(.8,1,e)),aperture:Ie(.7,o.aperture,Ne(.8,1,e)),shafts:Ie(t.shafts,o.shafts,Ne(.3,.8,e)),vignette:Ie(t.vignette,o.vignette,e)}},leaf(e){let t=j3(e),o=Math.sin(e*Math.PI*7)*.14*Math.sin(Math.PI*e);return{phase:"fly",pos:Gt(tn(sS,t),[0,Math.sin(e*Math.PI*9)*.05*Math.sin(Math.PI*e),o]),tumble:1-.5*Ne(.8,1,e)}}},{dur:11.5,cam(e,t,o,n){let r=tn([t.eye,[7,1.9,19],[7.1,1.6,27.5],[6.9,1.1,36],[7,.7,42.5],[7.05,.5,45.7]],Ne(0,.8,e)*.6+Bo(Er(e/.8))*.4),a=tn([[7.05,.5,45.7],[7,1.2,45.3],[7,2.6,43.8],o.eye],Bo(Ne(.8,1,e))),i=e<.8?r:a,s=Mo(Mo(t.target,n.pos,Ne(.03,.22,e)),o.target,Ne(.82,1,e)),c=Ie(t.fov,o.fov,Ne(.15,.7,e))-6*Ne(.6,.8,e)*(1-Ne(.85,1,e)),f=Ie(t.roll,o.roll,Ne(0,.6,e))-.04*Math.sin(Math.PI*e);return Ot(i,s,c,f)},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{exposure:Ie(t.exposure,o.exposure,Ne(.5,1,e)),letterbox:Ie(t.letterbox,o.letterbox,e),focus:Ie(a,o.focus,Ne(.84,1,e)),aperture:Ie(1.1,o.aperture,Ne(.84,1,e)),shafts:Ie(t.shafts,o.shafts,Ne(.2,.9,e)),vignette:Ie(t.vignette,o.vignette,Ne(.5,1,e))}},leaf(e){let t=Ie(j3(e),e,.35),o=tn(cS,Ne(0,.78,t)),n=Math.sin(e*Math.PI*8)*.35*(1-Ne(.55,.76,e)),r=Ne(.7,.8,e);return{phase:"fly",pos:Gt(o,[n,Math.abs(Math.cos(e*Math.PI*8))*.12*(1-r),0]),tumble:1-r,swing:n}}},{dur:2.6,cam(e,t,o){let n=Bo(e),r=f0(t,o,n);return r.eye=Gt(r.eye,[0,0,-.35*Math.sin(Math.PI*n)]),r},look(e,t,o){let n=Bo(e),r={};for(let a in o)typeof o[a]=="number"&&(r[a]=Ie(t[a],o[a],n));return r},leaf(){return{phase:"floor"}}},{dur:4.5,cam(e,t,o){let n=Bo(e),r=tn([t.eye,[6.9,1.7,43.9],[7.05,.45,45.4],o.eye],n),a=Mo(t.target,o.target,Ne(.1,.85,e));return Ot(r,a,Ie(t.fov,o.fov,Ne(.2,1,e)),Ie(t.roll,o.roll,n))},look(e,t,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Ie(t[r],o[r],Ne(.2,1,e)));return n},leaf(){return{phase:"floor"}}},{dur:3.5,cam(e,t,o){return f0(t,o,Bo(e))},look(e,t,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Ie(t[r],o[r],Bo(e)));return n},leaf(){return{phase:"floor"}},walker(e){return Ie(Y3,Ff(),e)}},{dur:7.5,kick:e=>Er((e-ws())/(1-ws())),cam(e,t,o,n){let r=ws(),a=Ne(0,r,e)*(1-Ne(r+.12,r+.35,e)),i=X3(Math.min(e,Ms)),s=Gt(t.target,[(i-t.target[0])*.15*a,0,0]),c=Ne(r+.12,1,e),f=tn([t.eye,t.eye,Gt(t.eye,[0,.12,-.3]),o.eye],c);return s=Mo(s,n.pos,Ne(r+.06,r+.24,e)*(1-Ne(.9,1,e))),s=Mo(s,o.target,Ne(.88,1,e)),Ot(f,s,Ie(t.fov,o.fov,c),Ie(t.roll,o.roll,c))},look(e,t,o,n,r){let a=ws(),i=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]),s=Ne(0,.12,e)*(1-Ne(a+.25,a+.5,e));return{letterbox:Ie(Ie(t.letterbox,o.letterbox,Ne(a,1,e)),1.75,s),exposure:Ie(t.exposure,o.exposure,Ne(a,1,e)),focus:e<a?t.focus:Ie(t.focus,i,Ne(a,a+.2,e)),aperture:Ie(t.aperture,o.aperture,Ne(a,1,e)),vignette:Ie(t.vignette,o.vignette,e),shafts:Ie(t.shafts,o.shafts,e)}},leaf(e){let t=Er((e-ws())/(1-ws()));if(t<=0)return{phase:"floor"};let o=Ne(0,.85,t)*.85+S1(Ne(0,.15,t))*.15;return{phase:"fly",pos:Gt(aa,[(Fc[0]-aa[0])*o+Math.sin(t*9)*.08*(1-t),(Fc[1]-aa[1])*o,(Fc[2]-aa[2])*o+Math.sin(t*7)*.06*(1-t)]),tumble:1.3-.75*t}},walker(e){return e<.985?X3(e):null}},{dur:9,cam(e,t,o,n){let r=Bo(e),a=tn([t.eye,[9.4,1.35,45.6],[12.4,2,45.9],[15,2.45,46.5],o.eye],r),i=1-Ne(.6,.92,e),s=Mo(Mo(t.target,n.pos,Ne(0,.15,e)),o.target,1-i),c=Ie(t.fov,o.fov,Ne(.3,1,e)),f=Ie(t.roll,o.roll,r)+.04*Math.sin(Math.PI*e);return Ot(a,s,c,f)},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Ie(t.letterbox,o.letterbox,e),exposure:Ie(t.exposure,o.exposure,Ne(.3,.8,e)),focus:Ie(a,o.focus,Ne(.6,.95,e)),aperture:Ie(t.aperture,o.aperture,Ne(.6,1,e)),vignette:Ie(t.vignette,o.vignette,e),shafts:Ie(t.shafts,o.shafts,Ne(.3,.8,e))}},leaf(e){let t=Bo(e);return{phase:"fly",pos:Gt(tn(hS,t),[0,Math.sin(e*Math.PI*5)*.08*Math.sin(Math.PI*e),Math.sin(e*Math.PI*4)*.12*Math.sin(Math.PI*e)]),tumble:.55+.4*Math.sin(Math.PI*e)}}},{dur:6.5,cam(e,t,o){let n=Bo(e),r=f0(t,o,n);return r.eye=Gt(r.eye,[0,.12*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),r},look(e,t,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Ie(t[r],o[r],e));return n.aperture=Ie(t.aperture,o.aperture,e)*(1-.5*Math.sin(Math.PI*e)),n},leaf(e){let t=Bo(e);return{phase:"fly",pos:Gt(tn(uS,t),[0,Math.sin(e*Math.PI*4)*.07*Math.sin(Math.PI*e),0]),tumble:.5+.3*Math.sin(Math.PI*e)}}},{dur:6.5,cam(e,t,o){let n=Bo(e),r=f0(t,o,n);return r.eye=Gt(r.eye,[0,.1*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),r},look(e,t,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Ie(t[r],o[r],e));return n.aperture=Ie(t.aperture,o.aperture,e)*(1-.5*Math.sin(Math.PI*e)),n},leaf(e){let t=Bo(e);return{phase:"fly",pos:Gt(tn([I1,[29.2,1.75,45.5],[32.2,1.5,45.4],T1],t),[0,Math.sin(e*Math.PI*4)*.06*Math.sin(Math.PI*e),0]),tumble:.45+.25*Math.sin(Math.PI*e)}}},{dur:6,cam(e,t,o,n){let r=Bo(e),a=tn([t.eye,[34.2,1.15,45.6],[34.5,.7,44.8],o.eye],r),i=Ne(.05,.3,e)*(1-Ne(.8,1,e)),s=Mo(Mo(t.target,o.target,Ne(.6,1,e)),n.pos,i);return Ot(a,s,Ie(t.fov,o.fov,Ne(.2,1,e)),Ie(t.roll,o.roll,r))},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Ie(t.letterbox,o.letterbox,e),exposure:Ie(t.exposure,o.exposure,e),focus:Ie(a,o.focus,Ne(.8,1,e)),aperture:Ie(.9,o.aperture,Ne(.8,1,e)),vignette:Ie(t.vignette,o.vignette,e),shafts:Ie(t.shafts,o.shafts,e)}},leaf(e){let t=tn([T1,[35.3,.9,45.2],[35.75,.4,44.4],[36,.08,44.05],Gc],Ne(0,.85,e)),o=Math.sin(e*Math.PI*6)*.25*(1-Ne(.35,.82,e)),n=Ne(.78,.88,e);return{phase:"fly",pos:Gt(t,[0,Math.abs(Math.cos(e*Math.PI*6))*.07*(1-n),o]),tumble:.7*(1-n),swing:o}}},{dur:12,door(e){let t=Er((e-.02)/.09);return S1(t)+.07*Math.sin(Er((e-.08)/.18)*Math.PI)*(1-Er((e-.08)/.3))},cam(e,t,o,n){let r=Math.sin(e*340)*.012*Ne(.02,.05,e)*(1-Ne(.08,.16,e)),a=Ne(.06,1,e),i=tn([t.eye,[34.3,1,43.6],[31.5,1.9,43.4],[26.5,2.4,43.6],[21,2.6,43.6],[16.5,2.8,43.2],[12.6,3.1,41.2],[9.6,3.4,38],o.eye],a*.55+Bo(a)*.45),s=Gt(n.pos,[1,-.2,-1.45]);i=Mo(i,s,Ne(.1,.22,e)*(1-Ne(.52,.72,e)));let c=Ne(.06,.16,e)*(1-Ne(.86,1,e)),f=Mo(t.target,n.pos,c);f=Mo(f,o.target,Ne(.86,1,e));let l=Ie(t.fov,o.fov,Ne(.1,1,e))+6*Math.sin(Math.PI*Ne(.08,.9,e)),d=Ie(t.roll,o.roll,e)+.06*Math.sin(Math.PI*2*Ne(.1,.9,e))+r;return Ot(Gt(i,[0,r,0]),f,l,d)},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]),i=Ne(.02,.06,e)*(1-Ne(.08,.3,e));return{letterbox:Ie(t.letterbox,o.letterbox,Ne(.1,.4,e)),exposure:Ie(t.exposure,o.exposure,e)*(1+.8*i),focus:Ie(a,o.focus,Ne(.86,1,e)),aperture:Ie(.8,o.aperture,Ne(.86,1,e)),vignette:Ie(t.vignette,o.vignette,e),shafts:Ie(t.shafts,o.shafts,e)+i}},leaf(e){let t=Er((e-.05)/.95);if(t<=0)return{phase:"floor"};let o=tn(pS(),t*.6+Bo(t)*.4),n=Math.sin(e*Math.PI*9)*.12*Math.sin(Math.PI*t);return{phase:"fly",pos:Gt(o,[0,n*.6,n]),tumble:1.4-.8*t}}},...[0,1].map(e=>V3(e,7.5)),{dur:10,cam(e,t,o,n){let r=Bo(e),a=tn([t.eye,[7.6,3.2,16.2],[7,2.9,17.2],[6.5,3.2,16],o.eye],r),i=Ne(0,.15,e)*(1-Ne(.85,1,e)),s=Mo(Mo(t.target,o.target,Ne(.5,1,e)),n.pos,i);return Ot(a,s,Ie(t.fov,o.fov,r)+4*Math.sin(Math.PI*r),Ie(t.roll,o.roll,r))},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Ie(t.letterbox,o.letterbox,e),exposure:Ie(t.exposure,o.exposure,e),focus:Ie(a,o.focus,Ne(.85,1,e)),aperture:Ie(.6,o.aperture,Ne(.85,1,e)),vignette:Ie(t.vignette,o.vignette,e),shafts:Ie(t.shafts,o.shafts,e)}},leaf(e){let t=Bo(e),o=tn(vS(),t);return{phase:"fly",pos:Gt(o,[0,Math.sin(e*Math.PI*6)*.06*Math.sin(Math.PI*e),0]),tumble:.6+.4*Math.sin(Math.PI*e)}}},...[3,4].map(e=>V3(e,7.5)),{dur:10,cam(e,t,o,n){let r=Bo(e),a=tn([t.eye,[7.6,4,30.5],[7.3,4.4,25.5],[7.1,4,21.8],o.eye],r),i=Ne(0,.2,e)*(1-Ne(.9,1,e)),s=Mo(Mo(t.target,o.target,Ne(.5,1,e)),n.pos,i);return Ot(a,s,Ie(t.fov,o.fov,r),Ie(t.roll,o.roll,r))},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Ie(t.letterbox,o.letterbox,e),exposure:Ie(t.exposure,o.exposure,e),focus:Ie(a,o.focus,Ne(.85,1,e)),aperture:Ie(.7,o.aperture,Ne(.85,1,e)),vignette:Ie(t.vignette,o.vignette,e),shafts:Ie(t.shafts,o.shafts,e)}},leaf(e){let t=tn(mS(),Ne(0,.86,e)),o=Math.sin(e*Math.PI*7)*.3*(1-Ne(.4,.84,e)),n=Ne(.8,.9,e);return{phase:"fly",pos:Gt(t,[o,Math.abs(Math.cos(e*Math.PI*7))*.08*(1-n),0]),tumble:.8*(1-n),swing:o}}}],L1=9.2,Ms=.6;function X3(e){return e<Ms?Ie(Ff(),L1,e/Ms):Ie(L1,lS,(e-Ms)/(1-Ms))}function ws(){return Ms*Er((aa[0]+.15-Ff())/(L1-Ff()))}var z1={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},Pf=e=>Object.assign({},z1,pi[e].look),xS=`
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
`;function _r(e,t,o){let n=document.createElement(e);return t&&(n.className=t),o!==void 0&&(n.innerHTML=o),n}var i0=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function Of(e,t,o){e.querySelectorAll(".tour-line").forEach((n,r)=>{n.style.transitionDelay=(t+r*o).toFixed(2)+"s"})}K3.exports=function(t){let o=/tourdebug/.test(location.search),{fps:n}=t;if(!document.querySelector("link[data-tour-font]")){let ne=document.createElement("link");ne.rel="stylesheet",ne.href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&display=swap",ne.setAttribute("data-tour-font",""),document.head.appendChild(ne)}let r=y1(),a=null;fetch("res/hand.json").then(ne=>ne.ok?ne.json():null).then(ne=>{a=ne}).catch(()=>{});let i=document.createElement("style");i.textContent=xS+`
	.hand-text { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); clip-path: inset(50%); white-space: normal; }
	.tour-body canvas.hand { display: block; cursor: pointer; }`,i.textContent+=`
	body.touring #museum-mobile-controls,
	body.touring .painting-plaque { display: none !important; }`,document.head.appendChild(i);let s=_r("div","tour");s.setAttribute("role","region"),s.setAttribute("aria-label","Guided tour of the gallery. Swipe, scroll or press the arrow keys to move on.");let c=_r("div","tour-mark",i0(Cf.name)),f=_r("button","tour-free","Explore freely");f.type="button";let l=_r("div","tour-links",_1.icons("tour-icon"));l.insertBefore(w1()("tour-icon"),l.firstChild),Rf&&l.appendChild(f);let d=_r("div","tour-progress",pi.map(()=>"<i></i>").join("")),h=_r("div","tour-hint",'<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 15l6-6 6 6"></path></svg><span></span>'),p=h.querySelector("span"),u=_r("div","tour-card tour-intro",`
		<span class="tour-line tour-kicker">A virtual gallery</span>
		<span class="tour-rule"></span>
		<h1 class="tour-line tour-title">${i0(Cf.name)}</h1>
		<span class="tour-line tour-sub tour-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</span>`);Of(u,.4,.35);let v=Cf.text.split(/\n\s*\n/).map(ne=>`<p class="tour-line">${i0(ne.trim())}</p>`).join(""),m=_r("div","tour-card tour-about",`
		<span class="tour-line tour-kicker">The artist</span>
		<h2 class="tour-line tour-title">${i0(Cf.title)}</h2>
		<span class="tour-rule"></span>
		${_1.line("tour-line tour-contact")}
		${v}`);Of(m,.25,.28);let g=_r("div","tour-card tour-sky",`
		<span class="tour-line tour-sub">Every painting here waits for the light.</span>`);Of(g,.6,.3);let y=_r("div","tour-card tour-master","");function b(ne){let Ee=_r("div","tour-card tour-story",`
			<span class="tour-line tour-kicker"></span>
			<h2 class="tour-title tour-letters"></h2>
			<span class="tour-rule"></span>
			<span class="tour-line visit-row"></span>
			<div class="tour-body"></div>`),st=Ee.querySelector(".tour-title"),ft=Ee.querySelector(".tour-body");return Ee.filled=!1,Ee.body=ft,Ee.fill=()=>{let Ct=ne();if(!Ct||Ee.filled)return;Ee.filled=!0;let Ut=Ct.title||"";Ee.querySelector(".tour-kicker").textContent=oS(Ct)||"Oil on canvas";let ir=Ee.querySelector(".visit-row");ir.innerHTML=M1.button(Ct),ir.hidden=!ir.innerHTML;let ba=ir.querySelector(".visit-btn");ba&&(ba.addEventListener("click",eo=>{eo.stopPropagation(),M1.open(Ct)}),Ee.warm=()=>M1.warm(Ct));let Rn=0;st.innerHTML=Ut.split(" ").map(eo=>'<span class="tour-word">'+eo.split("").map(In=>`<span style="transition-delay:${(.35+Rn++*.045).toFixed(3)}s">${i0(In)}</span>`).join("")+"</span>").join(" "),st.setAttribute("aria-label",Ut);let Ar=.35+Ut.length*.045+.2;Ee.querySelector(".tour-rule").style.transitionDelay=Ar.toFixed(2)+"s";let on=String(Ct.description||"").split(/\n\s*\n/).filter(eo=>eo.trim());if(Ee.querySelector(".tour-kicker").style.transitionDelay="0.1s",a&&on.length){ft.innerHTML=on.map(Vo=>`<p class="hand-text">${i0(Vo.trim())}</p>`).join("")+'<div class="hand-wrap"><canvas class="hand" aria-hidden="true"></canvas></div>';let eo=ft.querySelector("canvas"),In=on.map(Vo=>Vo.trim()).join(`

`),$o=!1,Pn=!1,kr=0;ft.addEventListener("wheel",()=>{$o=!0},{passive:!0}),ft.addEventListener("touchmove",()=>{$o=!0},{passive:!0});let Wr=parseFloat(getComputedStyle(ft).fontSize)||17,_o=r(eo,a,{ink:"rgba(244,236,223,0.93)",shadow:"rgba(0,0,0,0.55)",shadowBlur:7,xh:Math.max(8.5,Wr*.56),width:.14,speed:80,pace:.12,minDur:.022,maxTime:Vo=>3.5+Vo.length/420,seed:3+Ut.length,onPen:Vo=>{if($o)return;let Vr=Vo-ft.clientHeight*.55;Vr>ft.scrollTop+4&&(ft.scrollTop+=Math.min(16,Vr-ft.scrollTop))}});eo.addEventListener("click",Vo=>{Vo.stopPropagation(),clearTimeout(kr),Pn?_o.finish():(Pn=!0,_o.write(In,!0))}),Ee.write=()=>{if(clearTimeout(kr),$o=!1,Pn){_o.write(In,!0);return}_o.write("",!0),kr=setTimeout(()=>{Pn=!0,_o.write(In)},Ar*.6*1e3)},Ee.stopWrite=()=>{clearTimeout(kr),_o.stop()};let Tr=0;window.addEventListener("resize",()=>{clearTimeout(Tr),Tr=setTimeout(()=>{Pn&&Ee.classList.contains("on")&&_o.write(In,!0)},250)})}else ft.innerHTML=on.map(eo=>`<p class="tour-line">${i0(eo.trim())}</p>`).join(""),ft.querySelectorAll(".tour-line").forEach((eo,In)=>{eo.style.transitionDelay=(Ar+.3+Math.min(In,6)*.35).toFixed(2)+"s"})},Ee}let M=()=>t.paintings?t.paintings():[],T=ne=>M().find(Ee=>Ee.side==="corridor"&&Math.abs(Ee.paintingPosition[0]-ne)<.5),L=b(()=>M().find(ne=>ne.side==="end")),C=()=>_r("div","tour-card",""),D=b(()=>T(s0[0])),B=b(()=>T(c0[0])),W=b(()=>T(l0[0])),Q=Dn.map(ne=>b(()=>M().find(Ee=>Ee.side===ne.side&&Math.abs(Ee.paintingPosition[2]-ne.z)<.5))),ce=_r("div","tour-card tour-endcard",`
		<span class="tour-line tour-kicker">Thank you for walking with me</span>
		<span class="tour-rule"></span>
		<span class="tour-line tour-sub">${Rf?"The rest of the gallery is yours to wander.":"Swipe back to return to any painting."}</span>
		<span class="tour-line tour-sub tour-confess-line">Before you leave, the confessional is open.<br>Leave me a note; no one else will read it.</span>
		<div class="tour-line tour-end"><button type="button" class="tour-btn" data-act="confess">Leave something behind</button></div>
		${_1.line("tour-line tour-contact")}
		<div class="tour-line tour-end">
			${Rf?'<button type="button" class="tour-btn" data-act="free">Walk the gallery</button>':""}
			<button type="button" class="tour-btn quiet" data-act="list">All paintings</button>
			<button type="button" class="tour-btn quiet" data-act="replay">Replay</button>
		</div>`);Of(ce,.5,.35);let ee=[u,m,g,y,L,C(),C(),C(),D,B,W,C(),...Q,ce];s.append(...ee,c,l,d,h),document.body.appendChild(s);let te=H3()({root:s,avatar:t.avatar,glyphs:()=>a,onExit:()=>{pt=-1}});document.body.classList.add("touring");let Ke=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,ve=Ke?"Scroll":"Swipe",Te=pi.map((ne,Ee)=>Ee===0?Ke?"Scroll to begin":"Swipe up to begin":Ee===1?ve+" to follow the leaf":Ee===2?ve+" to follow the light":Ee===3?ve+" for its story":Ee===6||Ee===7||Ee===pi.length-1?"":ve+" on"),re=[0];A1.forEach(ne=>re.push(re[re.length-1]+ne.dur));let vt=re[re.length-1],xt=210,$t=95,yt=.35,Bt=1.4,Lt=.32,Qt=1,je=1.3,Dt=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,Fe=2.2,Qe=.7,qe=.9,dt=!0,rt=0,qt=0,Je=0,fe=-10,Xe=!1,pt=-1,lt=0,oo=0,Wt=0,w=null,Mt=Object.assign({},Pf(0)),no=pi[0].cam(0),ot={phase:"home",pos:_s.slice(),tumble:0},wo=0,Tt=ne=>{let Ee=0;for(let st=1;st<re.length;st++)Math.abs(re[st]-ne)<Math.abs(re[Ee]-ne)&&(Ee=st);return Ee};function et(ne){let Ee=ee[ne];Ee&&Ee.fill&&(Ee.fill(),Ee.body.scrollTop=0,Ee.offsetWidth),ee.forEach((st,ft)=>{let Ct=st.classList.contains("on");st.classList.toggle("on",ft===ne),ft===ne&&!Ct&&st.write&&st.write(),ft!==ne&&Ct&&st.stopWrite&&st.stopWrite()}),Ee&&Ee.warm&&Ee.warm(),p.textContent=Te[ne]||"",h.classList.toggle("on",!!Te[ne])}function jt(){ee.forEach(ne=>{ne.stopWrite&&ne.classList.contains("on")&&ne.stopWrite(),ne.classList.remove("on")}),h.classList.remove("on")}let ro=null,Ao=-1;function Po(ne){if(te.active||!dt||w)return;let Ee=Wt-fe>yt;if(fe=Wt,Ee||!ro){let st=0,ft=vt;for(let Ct=0;Ct<re.length;Ct++)if(re[Ct]<=rt-.02&&(st=re[Ct]),re[Ct]>=rt+.02){ft=re[Ct];break}ro={lo:st,hi:ft}}Wt<Ao||(Xe=!1,Je=Math.max(ro.lo,Math.min(ro.hi,Je+ne)),Je=Math.max(rt-Fe,Math.min(rt+Fe,Je)))}function qn(ne){if(te.active||!dt||w)return;let Ee=Xe?Je:rt,st;if(ne>0)st=re.findIndex(ft=>ft>Ee+.05);else{st=-1;for(let ft=re.length-1;ft>=0;ft--)if(re[ft]<Ee-.05){st=ft;break}}st<0||(Je=re[st],Xe=!0,fe=Wt)}let Xt=null,Fa=ne=>ne.stopPropagation();["touchstart","touchmove","touchend","mousedown","mouseup","click","contextmenu"].forEach(ne=>s.addEventListener(ne,Fa)),s.addEventListener("pointerdown",ne=>{if(ne.stopPropagation(),!(ne.target.closest("button, a")||ne.target.closest(".tour-body"))){Xt={x:ne.clientX,y:ne.clientY,lx:ne.clientX,ly:ne.clientY,t:performance.now(),moved:0,v:0,lt:performance.now()};try{s.setPointerCapture(ne.pointerId)}catch(Ee){}}}),s.addEventListener("pointermove",ne=>{if(!Xt)return;let Ee=ne.clientX-Xt.lx,st=ne.clientY-Xt.ly;Xt.lx=ne.clientX,Xt.ly=ne.clientY;let ft=Math.abs(st)>=Math.abs(Ee)?-st:-Ee;Xt.moved+=Math.abs(ft);let Ct=performance.now(),Ut=ft/$t;Xt.v=Xt.v*.6+Ut/Math.max(.008,(Ct-Xt.lt)/1e3)*.4,Xt.lt=Ct,Xt.moved>6&&Po(Ut)});let gi=ne=>{let Ee=Xt;if(Xt=null,!!Ee){if(te.active){Ee.moved<10&&performance.now()-Ee.t<500?te.tap():Ee.y-(ne?ne.clientY:Ee.ly)>30&&te.swipe(1);return}Ee.moved<10&&performance.now()-Ee.t<500?qn(1):performance.now()-Ee.lt<120&&Po(Math.max(-1.6,Math.min(1.6,Ee.v*.22)))}};s.addEventListener("pointerup",ne=>{ne.stopPropagation(),gi(ne)}),s.addEventListener("pointercancel",()=>{Xt=null}),s.addEventListener("wheel",ne=>{if(te.active){if(ne.target.closest(".conf-ui"))return;ne.preventDefault(),te.wheel(ne.deltaY);return}if(ne.target.closest(".tour-body")){let st=ne.target.closest(".tour-body"),ft=st.scrollTop+st.clientHeight>=st.scrollHeight-2&&ne.deltaY>0,Ct=st.scrollTop<=0&&ne.deltaY<0;if(!ft&&!Ct)return}ne.preventDefault();let Ee=ne.deltaMode===1?ne.deltaY*16:ne.deltaMode===2?ne.deltaY*window.innerHeight:ne.deltaY;Po(Ee/xt)},{passive:!1}),window.addEventListener("keydown",ne=>{if(!dt||w||document.body.classList.contains("visiting"))return;if(te.active){if(ne.stopImmediatePropagation(),ne.target&&/TEXTAREA|INPUT|BUTTON/.test(ne.target.tagName))return;te.key(ne.key)&&ne.preventDefault();return}let Ee=ne.key;if(["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(Ee)>=0){if((Ee==="Enter"||Ee===" ")&&ne.target&&ne.target.tagName==="BUTTON")return;ne.preventDefault(),ne.stopImmediatePropagation(),qn(1)}else["ArrowUp","ArrowLeft","PageUp"].indexOf(Ee)>=0?(ne.preventDefault(),ne.stopImmediatePropagation(),qn(-1)):Ee==="Escape"?(ne.preventDefault(),sa()):/^[wasdzq]$/i.test(Ee)&&ne.stopImmediatePropagation()},!0),window.addEventListener("keyup",ne=>{dt&&!w&&/^(Arrow|[wasdzq]$)/i.test(ne.key)&&ne.stopImmediatePropagation()},!0),f.addEventListener("click",ne=>{ne.stopPropagation(),sa()}),ce.addEventListener("click",ne=>{let Ee=ne.target.closest("button");Ee&&(ne.stopPropagation(),Ee.dataset.act==="free"&&sa(),Ee.dataset.act==="replay"&&xi(),Ee.dataset.act==="list"&&Uh().show(!1),Ee.dataset.act==="confess"&&(jt(),pt=-2,te.start(no,Mt)))});let v0=[null,[Mr.zc-1.6,Math.PI/2],[11.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[42.5+Es[0]-7,0],[42.5+Es[1]-7,0],[42.5+Es[2]-7,0],[1e3,Math.PI/2],...Dn.map(ne=>[ne.z-1.6,ne.side==="left"?-Math.PI/2:Math.PI/2]),[vi[2]-1.6,Math.PI]],ya=null,Ga=0;function sa(){if(!dt||w||!Rf)return;let ne=Tt(rt),Ee=v0[ne];ya=ne<=1?{phase:"home",pos:_s.slice()}:ne>=3&&ne<=6?{phase:"floor",pos:aa.slice()}:ne===11?{phase:"floor",pos:Gc.slice()}:ne===18?{phase:"floor",pos:vi.slice()}:null,Ga=ne>=12?1:0,Ee&&n.place&&n.place(Ee[0],Ee[1]),w={start:Wt,fromCam:no,fromLook:Object.assign({},Mt)},jt(),s.hidden=!0,document.body.classList.remove("touring"),t.onExit&&t.onExit()}function xi(){rt=Je=0,qt=0,Xe=!1,pt=-1,lt=0,oo=0,ot={phase:"home",pos:_s.slice(),tumble:0},pr={start:Wt}}let pr={start:-1},Wn=!1,Co=[],ao={prev:null,vel:[0,0,0],axis:[1,0,0],dir:null,bank:0,rock:0,spin:0,fresh:!0};function Sn(ne){wo+=ne*(ot.phase==="floor"?0:1);let Ee=ot.tumble===void 0?0:ot.tumble,st=bs.fromTranslation(Co,ot.pos);if(ot.phase==="home")st=bs.rotateY(st,st,2.2+Math.sin(wo*.9)*.15),st=bs.rotateZ(st,st,-1+Math.sin(wo*1.3)*.12),st=bs.rotateX(st,st,.4);else if(ot.phase==="floor")st=bs.rotateY(st,st,.65),st=bs.rotateX(st,st,.16);else{let ft=ot.pos;if(ao.prev&&ne>0){let Hn=[ft[0]-ao.prev[0],ft[1]-ao.prev[1],ft[2]-ao.prev[2]];if(Math.hypot(Hn[0],Hn[1],Hn[2])<1.5){let Uf=Math.min(1,ne*6);for(let wi=0;wi<3;wi++)ao.vel[wi]+=(Hn[wi]/ne-ao.vel[wi])*Uf}else ao.vel=[0,0,0]}ao.prev=ft.slice();let Ct=ao.vel,Ut=Math.hypot(Ct[0],Ct[1],Ct[2]),ir=Ne(.25,1.4,Ut),ba=Ne(.5,2,-Ct[1]),Rn=wo*.35*(.3+Ee)+.65,Ar=[Math.cos(Rn),0,Math.sin(Rn)];Ut>.001&&(Ar=Mo(Ar,nr(Ct,-1/Ut),ir));let on=Math.min(1,ne*4);ao.axis=Mo(ao.axis,Ar,ao.fresh?1:on);let eo=ao.axis,In=Math.hypot(eo[0],eo[1],eo[2])||1;eo=nr(eo,1/In);let $o=no.eye,Pn=[$o[0]-ft[0],$o[1]-ft[1],$o[2]-ft[2]],kr=Math.hypot(Pn[0],Pn[1],Pn[2])||1,Wr=Ie(.6,.22,ir),_o=[Pn[0]/kr*Wr,1+Pn[1]/kr*Wr,Pn[2]/kr*Wr],Tr=eo[0]*_o[0]+eo[1]*_o[1]+eo[2]*_o[2];_o=E1(_o,nr(eo,Tr));let Vo=Math.hypot(_o[0],_o[1],_o[2])||1;_o=nr(_o,1/Vo);let Vr=[eo[1]*_o[2]-eo[2]*_o[1],eo[2]*_o[0]-eo[0]*_o[2],eo[0]*_o[1]-eo[1]*_o[0]],io=Math.hypot(Ct[0],Ct[2]),Ro=0;if(io>.15&&ao.dir&&ne>0){let Hn=[Ct[0]/io,Ct[2]/io];Ro=(ao.dir[0]*Hn[1]-ao.dir[1]*Hn[0])/ne,ao.dir=Hn}else io>.15&&(ao.dir=[Ct[0]/io,Ct[2]/io]);ao.bank+=(Math.max(-.8,Math.min(.8,Ro*.3))*ir-ao.bank)*Math.min(1,ne*3),ao.rock+=ne*(1.5+2.4*ir),ao.spin+=ne*ba*7*(.4+Ee);let Lr=Math.sin(ao.rock)*(.26+.45*Ee)*(1-.5*ba)+ao.bank+ao.spin,yi=Math.sin(ao.rock*.63+1)*(.16+.3*Ee)+(ot.swing||0)*.9,ca=Math.cos(Lr),bi=Math.sin(Lr),Vc=Gt(nr(_o,ca),nr(Vr,bi)),Cs=Gt(nr(Vr,ca),nr(_o,-bi));ca=Math.cos(yi),bi=Math.sin(yi);let Rs=Gt(nr(eo,ca),nr(Vc,bi)),Is=Gt(nr(Vc,ca),nr(eo,-bi)),jf=Math.sin(ao.rock+1.5708)*.035*(.3+Ee)*(1-.5*ir),Ps=Gt(ft,nr(Vr,jf)),m0=[Rs[0],Rs[1],Rs[2],0,Is[0],Is[1],Is[2],0,Cs[0],Cs[1],Cs[2],0,Ps[0],Ps[1],Ps[2],1];for(let Hn=0;Hn<16;Hn++)st[Hn]=m0[Hn];ao.fresh=!1}return ot.phase!=="fly"&&(ao.prev=null,ao.vel=[0,0,0],ao.fresh=!0,ao.spin=0,ao.bank=0,ao.dir=null),{visible:!0,model:st}}function Uc(ne){for(let Ee in z1)Mt[Ee]=ne[Ee]!==void 0?ne[Ee]:z1[Ee]}function qf(ne,Ee){if(ne<=1)return{phase:"home",pos:_s.slice(),tumble:0};let st=W3[ne];if(st){let ft=st.amp;return{phase:"fly",pos:Gt(st.pos(),[Math.sin(Ee*.55)*ft[0],Math.sin(Ee*.8)*ft[1],(1-Math.cos(Ee*.45))*ft[2]]),tumble:st.tumble}}return{phase:"floor",pos:(ne>=18?vi:ne>=10?Gc:aa).slice(),tumble:0}}let Bc=0,Wc=null;function Hf(ne){let Ee=Math.min(.1,Math.max(0,ne-Bc));if(Bc=ne,Wt=ne,Wn||(Wn=!0,pr.start=ne),w)return null;if(te.active){let io=te.update(Ee);return no=io.camera,Uc(io.look),o&&window.__camOverride&&(no=window.__camOverride),o&&window.__lookOverride&&Object.assign(Mt,window.__lookOverride),{camera:no,walker:null,door:1,look:Mt,leaf:Sn(Ee)}}if(!Xe&&!Xt&&Wt-fe>Qe){let io=Tt(Je);Math.abs(re[io]-Je)<qe&&(Je=re[io])}let st=Je-rt;if(Xe){let Ro=Math.sign(st)*Math.min(Qt,Math.sqrt(2*je*Math.abs(st)))-qt;qt+=Math.sign(Ro)*Math.min(Math.abs(Ro),je*Ee),rt+=qt*Ee,(st>0&&rt>=Je||st<0&&rt<=Je||Math.abs(Je-rt)<1e-4)&&(rt=Je,qt=0,Xe=!1)}else{let io=rS(rt,Je,qt,Lt,Ee,3);rt=io[0],qt=io[1],Math.abs(Je-rt)<1e-4&&Math.abs(qt)<.001&&(rt=Je,qt=0)}let ft=0;for(;ft<A1.length-1&&rt>=re[ft+1];)ft++;let Ct=A1[ft],Ut=Er((rt-re[ft])/Ct.dur),ir=pi[ft],ba=pi[ft+1],Rn=Tt(rt);Rn!==lt&&(lt=Rn,oo=0);let Ar=Math.abs(rt-re[Rn])<.02;Ar&&(oo+=Ee);let on=1-Ne(0,1.2,Math.abs(rt-re[Rn])),eo=Ct.leaf(Ut);if(eo.pos?ot=Object.assign({},eo):ot=Object.assign({},eo,{pos:eo.phase==="home"?_s.slice():(ft>=10?Gc:aa).slice()}),W3[Rn]&&on>0){let io=qf(Rn,oo);ot.pos=Mo(ot.pos,io.pos,on)}let In=Ct.walker&&(Ut>.01||ft===6)?Ct.walker(Ut):null;Wc=In==null?null:{x:In,z:k1,heading:Math.PI/2,phase:(In-Y3)/fS};let $o=Ct.cam(Ut,ir.cam(0),ba.cam(0),ot);if(on>0&&oo>0){let io=pi[Rn],Ro=io.cam(0),Lr=io.cam(oo);$o=Ot(Gt($o.eye,nr(E1(Lr.eye,Ro.eye),on)),Gt($o.target,nr(E1(Lr.target,Ro.target),on)),$o.fov+(Lr.fov-Ro.fov)*on,$o.roll+(Lr.roll-Ro.roll)*on)}if(on>0&&!Dt){let io=Wt,Ro=.006*on,Lr=Math.sin(io*.61)*.6+Math.sin(io*1.37+1.3)*.4,yi=Math.sin(io*.47+2.1)*.6+Math.sin(io*1.13+.4)*.4,ca=Math.sin(io*.53+4)*.5+Math.sin(io*.97+2.6)*.5;$o=Ot(Gt($o.eye,[Lr*Ro,yi*Ro*.7,ca*Ro]),Gt($o.target,[yi*Ro*1.8,Lr*Ro*1.4,0]),$o.fov,$o.roll+ca*.0012*on)}no=$o;let Pn=Pf(ft),kr=Pf(ft+1),Wr=Object.assign({},Pn,Ct.look(Ut,Pn,kr,ot,$o.eye));if(on>0){let io=Pf(Rn);for(let Ro in io)typeof io[Ro]=="number"&&(Wr[Ro]=Ie(Wr[Ro],io[Ro],on))}Uc(Wr);let Tr=Ar&&Math.abs(Je-rt)<.02?Rn:-1;Tr!==pt&&(Tr>=0&&(Ao=Wt+Bt),pt=Tr,Tr>=0?et(Tr):jt()),d.querySelectorAll("i").forEach((io,Ro)=>io.classList.toggle("on",Ro===Rn));let Vo=pt>=0?ee[pt]:null;Vo&&Vo.fill&&!Vo.filled&&(Vo.fill(),Vo.filled&&(Vo.classList.remove("on"),Vo.offsetWidth,Vo.classList.add("on")));let Vr=Er((ne-pr.start)/2.6);return Vr<1&&(Mt.fade=Math.max(Mt.fade,1-Ne(0,1,Vr)),Mt.fadeColor=[0,0,0]),o&&window.__camOverride&&(no=window.__camOverride),o&&window.__lookOverride&&Object.assign(Mt,window.__lookOverride),{camera:no,walker:Wc,door:Ct.door?Ct.door(Ut):ft>=12?1:0,look:Mt,leaf:Sn(Ee)}}return o&&(window.__tour={go:qn,exit:sa,wind:Po,confess(){jt(),pt=-2,te.start(no,Mt)},conf:te,paper:zf().STATE,seek(ne,Ee){rt=Je=re[ne]+(re[ne+1]-re[ne])*Ee,qt=0,Xe=!1,fe=Wt+1e6,pr.start=Wt-10,Wn=!0},jump(ne){rt=Je=re[ne],qt=0,Xe=!1,oo=0,fe=Wt,pr.start=Wt-10,Wn=!0},state:()=>({current:Tt(rt),scroll:+rt.toFixed(3),target:+Je.toFixed(3),shown:pt,move:Math.abs(Je-rt)>.02?{p:rt}:null,camNow:no,leaf:ot,look:Mt})}),{update:Hf,get active(){return dt&&!w},handover(ne){if(!w)return null;let Ee=Er((ne-w.start)/1.8);return Ee>=1?(dt=!1,null):{from:w.fromCam,fromLook:w.fromLook,k:Bo(Ee)}},restingDoor:()=>Ga,restingLeaf(){return ya?(ot=ya,Sn(0)):null},mix:f0,cam:Ot}}});var yS=Bp(),ia=Cr(),B1=Uh(),$f=ia.reflection,bS=!1,dy=(e,t,o,n,r)=>n+(e-t)*(r-n)/(o-t),W1=()=>dy(window.innerWidth/window.innerHeight,16/9,9/16,1.7,Math.PI/3);navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)&&(W1=()=>dy(window.innerWidth/window.innerHeight,16/9,9/16,1.5,Math.PI/3));var py=()=>2*Math.atan(Math.tan(W1()*.5)*window.innerHeight/window.innerWidth),wS=rv(),Hc=new wS;Hc.showPanel(0);bS&&document.body.appendChild(Hc.dom);var Wo,Ns,G1,Ts,$1,Go;function _S(){try{let e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");return!!(t&&t.getExtension("OES_standard_derivatives"))}catch(e){return!1}}if(!_S())throw yS.finish(),B1.show(!0),new Error("This device cannot draw the 3D gallery; showing the list instead.");Wo=av()({extensions:["OES_element_index_uint","OES_standard_derivatives"],optionalExtensions:["EXT_texture_filter_anisotropic","WEBGL_depth_texture"],attributes:{alpha:!1,antialias:!1},pixelRatio:ia.pixelRatio});location.hash==="#list"&&B1.show(!1);window.addEventListener("hashchange",()=>{location.hash==="#list"&&B1.show(!1)});Ns=Bv()();var MS=wu();G1=MS(Wo,Ns,$f);Ts=h2()(Wo,Ns);$1=v2()(Wo);var Z3=M2()(Wo,Ns),J3=I2()(Wo),ey=F2()(Wo),ty=eg()(Wo),oy=ag()(Wo),ny=fg()(Wo),d0=yg()(Wo),D1=Ku(),vy=kl(),ES=rc(),q1=Zu(),H1=Fn(),ur=af(),j1=Lg(),{A:ks}=Pr();Go=h3()(Ns,py);var Ls=d3()(Wo,ia),mi=x3()(Wo),ry=b3()(Wo),SS=M3()(Wo,ia),AS=L3()(Wo,ia),ay=Ya()(Wo),iy=zf()(Wo),sy=vc()(Wo),xa=Q3()({fps:Go,paintings:()=>Ts.interactables(),avatar:d0,onExit:()=>Go.setPaused(!1)});Go.setPaused(!0);/tourdebug/.test(location.search)&&(window.__post=Ls);var h0=[],jc=[],Pa=[7,2,1.6];Ns.viewer=Pa;var kS=Wo({cull:{enable:!0,face:"back"},uniforms:{view:()=>h0,proj:()=>jc,yScale:1,mirrorOn:()=>$f?1:0,night:()=>H1.night,time:Wo.context("time")}}),TS=Wo({cull:{enable:!0,face:"front"},uniforms:{yScale:-1}}),my=document.createElement("style");my.textContent=`

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
`;document.head.appendChild(my);var Br=document.createElement("button");Br.className="painting-plaque";Br.type="button";Br.setAttribute("aria-label","Read painting");document.body.appendChild(Br);var ar=document.createElement("div");ar.className="story-overlay";ar.innerHTML=`

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

		${vy.line("story-contact")}

		<div class="visit-row story-visit"></div>

		<p
			class="story-body"
			id="story-body"
		></p>

	</article>
`;document.body.appendChild(ar);var zs=document.createElement("div");zs.className="museum-links";zs.innerHTML=vy.icons("museum-link");zs.insertBefore(w1()("museum-link"),zs.firstChild);["mousedown","pointerdown","click"].forEach(e=>zs.addEventListener(e,t=>t.stopPropagation()));document.body.appendChild(zs);var LS=ar.querySelector("#story-title"),zS=ar.querySelector("#story-body"),cy=ar.querySelector("#story-meta"),NS=ar.querySelector(".story-contact"),qc=ar.querySelector(".story-visit");qc.addEventListener("click",e=>{e.target.closest(".visit-btn")&&p0&&q1.open(p0)});var CS=ar.querySelector(".story-close"),p0=null,dr={p:0,target:0,last:0},gy={title:D1.title,description:D1.text,isAbout:!0},Oa=null;function V1(e){e&&(p0=e,LS.textContent=e.title||"",zS.textContent=e.description||"",cy.textContent=e.isAbout?"":ES(e),cy.hidden=!!e.isAbout,NS.hidden=!e.isAbout,qc.innerHTML=e.isAbout?"":q1.button(e),qc.hidden=!qc.innerHTML,qc.hidden||q1.warm(e),ar.classList.toggle("about-mode",!!e.isAbout),ar.classList.add("open"),dr.target=e.isAbout?1:0,Oa=e,Br.classList.remove("visible"),Go.setPaused(!0))}function X1(){ar.classList.remove("open"),dr.target=0,p0=null,Oa=null,Go.setPaused(!1)}function xy(e){e&&(e.preventDefault(),e.stopPropagation()),Oa&&V1(Oa)}Br.addEventListener("pointerup",xy,!0);Br.addEventListener("touchend",xy,{passive:!1,capture:!0});Br.addEventListener("click",e=>{e&&(e.preventDefault(),e.stopPropagation()),p0===null&&Oa&&V1(Oa)},!0);CS.addEventListener("click",X1);ar.addEventListener("click",e=>{e.target===ar&&X1()});window.addEventListener("keydown",e=>{e.code==="Escape"&&ar.classList.contains("open")&&X1()});function ly(e,t){let o=t[0],n=t[1],r=t[2];return[e[0]*o+e[4]*n+e[8]*r+e[12],e[1]*o+e[5]*n+e[9]*r+e[13],e[2]*o+e[6]*n+e[10]*r+e[14],e[3]*o+e[7]*n+e[11]*r+e[15]]}function RS(){if(p0)return;if(xa.active){Oa=null,Br.classList.remove("visible");return}let e=Ts.interactables(),t=Go.forward[0],o=Go.forward[2],n=Math.hypot(t,o)||1,r=null,a=1/0;for(let i of e){let s=i.paintingPosition,c=0,f=0;i.side==="left"?c=1:i.side==="right"?c=-1:i.side==="corridor"?f=1:f=-1;let l=s[0]-Go.pos[0],d=s[2]-Go.pos[2],h=-(l*c+d*f),p=Math.abs(l*f-d*c),u=-(t*c+o*f)/n,v=i.side==="end"?11:8,m=(i.width||2)/2;u>.9&&h>.5&&h<v&&p<m+.8&&h<a&&(r=i,a=h)}if(!r){let i=Go.pos[0],s=Go.pos[2];t/n>.85&&i<13.6&&s>ks.z0-.5&&s<ks.z1+.5&&(r=Object.assign({},gy,{plaqueTitle:D1.name}))}r?(Oa=r,Br.textContent=r.isAbout?"ABOUT  \xB7  "+r.plaqueTitle:"READ  \xB7  "+r.title,Br.classList.add("visible")):(Oa=null,Br.classList.remove("visible"))}var Y1=ts();function IS(){let e=d0.state;if(!e||!e.glowPos)return null;let t=ly(Go.view(),[e.glowPos[0],e.glowPos[1]-.08,e.glowPos[2],1]),o=ly(Go.proj(),t);return o[3]<=.05?null:[(o[0]/o[3]*.5+.5)*window.innerWidth,(.5-o[1]/o[3]*.5)*window.innerHeight,o[3]]}var U1=null;window.addEventListener("pointerdown",e=>{U1={x:e.clientX,y:e.clientY,t:performance.now()}},!0);window.addEventListener("pointerup",e=>{let t=U1;if(U1=null,!t||p0||xa.active||!e.target||!/^(CANVAS|BODY)$/.test(e.target.tagName)||Math.hypot(e.clientX-t.x,e.clientY-t.y)>12||performance.now()-t.t>600)return;let o=IS();if(!o)return;let n=!!document.pointerLockElement,r=n?window.innerWidth/2:e.clientX,a=n?window.innerHeight/2:e.clientY,i=Math.max(e.pointerType==="touch"?60:40,260/o[2]);Math.hypot(r-o[0],a-o[1])<i&&(e.preventDefault(),e.stopPropagation(),V1(gy))},!0);function PS(e){let t=Math.min(Math.max(e-dr.last,0),.1);dr.last=e;let o=t/1.6;if(dr.p=dr.target>dr.p?Math.min(1,dr.p+o):Math.max(0,dr.p-o),dr.p<=0)return;let n=dr.p<.5?2*dr.p*dr.p:1-Math.pow(-2*dr.p+2,2)/2,r=window.innerHeight>window.innerWidth,a=d0.state,i=a&&a.hipsPos?a.hipsPos[0]:ks.cx-1.2,s=a&&a.hipsPos?a.hipsPos[2]:ks.zc,c=r?[i-2.3,2,s-.1]:[i-1.55,1.55,s+.3],f=r?[i+.1,.2,s-.1]:[i+.1,.7,s+.6],l=Go.pos,d=Go.forward,h=[l[0],l[1],l[2]],p=[l[0]+d[0],l[1]+d[1],l[2]+d[2]],u=(y,b)=>y.map((M,T)=>M+(b[T]-M)*n),v=[ks.cx-6.2,1.7,ks.zc],m=1-n,g=h.map((y,b)=>m*m*y+2*m*n*v[b]+n*n*c[b]);Y1.lookAt(Go.view(),g,u(p,f),[0,1,0])}var Ss={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},u0=null,Df=!1;function OS(e,t,o,n){let r=[o[0]-t[0],o[1]-t[1],o[2]-t[2]],a=Math.hypot(r[0],r[1],r[2])||1,i=[-r[2]/a,0,r[0]/a],s=Math.hypot(i[0],i[2])||1;i=[i[0]/s,0,i[2]/s];let c=Math.cos(n),f=Math.sin(n);return Y1.lookAt(e,t,o,[i[0]*f,c,i[2]*f])}function FS(e){let t=window.innerWidth/window.innerHeight,o=Ls.shot,n=xa.active?xa.update(e):null,r=n?null:xa.handover(e),a=null,i=Ss;if(n?(a=n.camera,i=n.look,u0=n.leaf,d0.setWalk(n.walker||null),Df=!!n.walker,mi.setOpen(n.door||0)):(u0=xa.restingLeaf(),d0.setWalk(null),Df=!1,mi.setOpen(xa.restingDoor())),r){let s=Go.pos,c=Go.forward,f=xa.cam([s[0],s[1],s[2]],[s[0]+c[0],s[1]+c[1],s[2]+c[2]],py()*180/Math.PI,0);a=xa.mix(r.from,f,r.k),i={};for(let l in Ss)i[l]=Array.isArray(Ss[l])?Ss[l]:r.fromLook[l]+(Ss[l]-r.fromLook[l])*r.k}if(a&&n&&(a=j1.apply(a,e)),a)OS(h0,a.eye,a.target,a.roll||0),Y1.perspective(jc,a.fov*Math.PI/180,t,.1,700),Pa[0]=a.eye[0],Pa[1]=a.eye[1],Pa[2]=a.eye[2];else{let s=Go.view(),c=Go.proj();for(let h=0;h<16;h++)h0[h]=s[h],jc[h]=c[h];let f=s[12],l=s[13],d=s[14];Pa[0]=-(s[0]*f+s[1]*l+s[2]*d),Pa[1]=-(s[4]*f+s[5]*l+s[6]*d),Pa[2]=-(s[8]*f+s[9]*l+s[10]*d)}for(let s in Ss)o[s]=i[s];n&&j1.pull(o,e)}var Sr={wake:[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],wakeDir:[0,0,1],gust:[0,0],focus:6,aperture:0},P1=[9,9,9,9],fy=[0,0,0,0],$c=0,O1=0,As=null,hy=0,uy=0,Dc=0;function GS(e){let t=Math.min(.1,Math.max(0,e-hy));hy=e,Sr.focus=Ls.shot.focus,Sr.aperture=ia.post>=2?Ls.shot.aperture:0;for(let i=0;i<4;i++)P1[i]+=t,Sr.wake[i][3]=fy[i]*Math.exp(-P1[i]/1.1);let o=u0&&u0.visible?u0.model:null;if(o&&t>0){let i=[o[12],o[13],o[14]];if(As){let s=[i[0]-As[0],i[1]-As[1],i[2]-As[2]],c=Math.hypot(s[0],s[1],s[2]),f=c/t;if(c<1.5&&f>.12){let l=Math.min(1,t*8);for(let h=0;h<3;h++)Sr.wakeDir[h]+=(s[h]/c-Sr.wakeDir[h])*l;let d=Math.hypot(Sr.wakeDir[0],Sr.wakeDir[1],Sr.wakeDir[2])||1;for(let h=0;h<3;h++)Sr.wakeDir[h]/=d;if(O1+=t,O1>.14){O1=0;let h=Sr.wake[$c];h[0]=i[0],h[1]=i[1],h[2]=i[2],fy[$c]=Math.min(1,(f-.12)/1.6)*.5,P1[$c]=0,$c=($c+1)%4}}}As=i}else o||(As=null);let n=mi.openNow?mi.openNow():0,r=t>0?(n-uy)/t:0;uy=n;let a=Math.max(-1,Math.min(1,r*1.2));Dc+=(a-Dc)*Math.min(1,t*(Math.abs(a)>Math.abs(Dc)?6:.7)),Sr.gust[0]+=Dc*5.5*t,Sr.gust[1]=Math.abs(Dc)}var F1=0,Gf=!1;Wo.frame(function({time:e}){if(document.body.classList.contains("visiting")){F1=0;return}Hc.begin(),H1.tick(e);let t=xa.active&&j1.resting&&H1.settled&&(ia.isPhone||ia.scale<1||ia.level>0);if(t){if(Gf=!Gf,Gf){Hc.end();return}}else Gf=!1;let o=e-F1;F1=e,ia.frame(t?o/2:o),$f=ia.reflection,Go.tick({time:e}),PS(e),Ts.update(Go.pos,Go.fmouse[1],W1()),RS(),FS(e),ur.update(h0,jc,Pa),GS(e),Ls.capture(arguments[0],{view:h0,proj:jc,eye:Pa},()=>{kS(()=>{$f&&ur.floor&&TS(()=>{G1(),Z3({reflected:!0}),ay(),ur.room("stair",!0)&&(sy({reflected:!0}),iy({reflected:!0,view:h0})),ur.room("court",!0)&&ny(),(ur.room("court",!0)||Df)&&d0(),$1(Ts.batch()),ur.room("street",!0)&&J3(),ur.room("garden",!0)&&ty(),ur.room("florence",!0)&&oy(),ry(u0),mi(),ey(),mi.glass()}),G1(),Z3(),ay(),ur.room("stair")&&(sy(),iy({view:h0})),ur.room("court")&&ny(),(ur.room("court")||Df)&&d0(),$1(Ts.batch()),ur.room("street")&&J3(),ur.room("garden")&&(ty(),AS()),ur.room("florence")&&oy(),ry(u0),mi(),SS(Sr),ey(),mi.glass()})}),Ls.present(),Hc.end()});})();
