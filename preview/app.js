"use strict";(()=>{var St=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var Sm=St((vz,km)=>{"use strict";var Fi=document.getElementById("loader"),Di=Fi&&Fi.querySelector(".loader-name"),sl=0,jf=0,Wf=!1,C4=performance.now(),Gi=.06,qi=0,vu=0,ym=!1,P4=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function $4(t){if(!Di)return;let e=Di.offsetWidth||1,n=(e*(1.14-1.28*t)-e).toFixed(1)+"px 0";Di.style.webkitMaskPosition=n,Di.style.maskPosition=n}function _m(t){let e=Math.min(.05,vu?(t-vu)/1e3:.016);vu=t;let o=Wf?.75:.22+(Gi-qi)*1.2;if(qi=Math.min(Gi,qi+Math.max(0,o)*e),P4&&(qi=Gi),$4(qi),Wf&&qi>=.999){ym||(ym=!0,setTimeout(Mm,650));return}requestAnimationFrame(_m)}Di&&requestAnimationFrame(_m);function bm(){let t=sl?jf/Math.max(sl,24):0;Gi=Math.max(Gi,Math.min(.9,.06+t*.84))}function Mm(){Fi&&(Fi.classList.add("done"),setTimeout(()=>Fi.remove(),1400))}function mu(){Wf||(Wf=!0,window.__galleryReady=!0,Fi&&(Gi=1,Di||Mm()))}var wm=null;function I4(){clearTimeout(wm),jf>=sl&&performance.now()-C4>600&&(wm=setTimeout(()=>{jf>=sl&&mu()},450))}setTimeout(mu,2e4);var q4=t=>/(^|\/)(res|images)\//.test(t),Bf=window.fetch.bind(window);async function D4(t,e){let o=await Bf(t+".gz",e);if(!o.ok)throw new Error("no .gz");let n=new Uint8Array(await o.arrayBuffer());if(!(n[0]===31&&n[1]===139))return new Response(n);let r=new Blob([n]).stream().pipeThrough(new DecompressionStream("gzip")),a=await new Response(r).arrayBuffer();return new Response(a,{status:200,headers:{"Content-Type":"application/octet-stream"}})}window.fetch=function(t,e){let o=typeof t=="string"?t:t&&t.url||"";if(!q4(o))return Bf(t,e);sl++,bm();let n=a=>(jf++,bm(),I4(),a),r;return/\.bin$/.test(o)&&typeof DecompressionStream!="undefined"?r=D4(o,e).catch(()=>Bf(t,e)):r=Bf(t,e),r.then(n,a=>{throw n(),a})};km.exports={finish:mu}});var Sr=St((mz,Tm)=>{"use strict";var Em=typeof navigator!="undefined"&&navigator.userAgent||"",F4=typeof window!="undefined"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches&&!window.matchMedia("(any-pointer: fine)").matches,wa=/Android|iPhone|iPad|iPod|Mobile|Silk|Kindle|webOS|BlackBerry|Opera Mini|IEMobile/i.test(Em)||/Macintosh/.test(Em)&&typeof navigator!="undefined"&&navigator.maxTouchPoints>1||F4,zm=typeof window!="undefined"&&window.devicePixelRatio||1,$o={isPhone:wa,pixelRatio:wa?Math.min(zm,1.5):Math.min(zm,2),reflection:!wa,gardenDetail:wa?0:1,leafShare:wa?.65:1,motion:!wa,post:wa?1:2,level:wa?1:0};$o.scale=1;var G4=wa?.55:.6,il=0,Vf=0,cl=0,ll=0,Hi=1,fl=0,Xf=48,Ui=null,gu=0;function H4(t){Ui={fps:t,scale:$o.scale},$o.scale>.86?$o.scale=.85:$o.reflection?$o.stepDown():$o.scale>.71?$o.scale=.7:$o.stepDown()||($o.scale=Math.max(G4,$o.scale-.1))}var Am=!0;try{/[?&]noadapt\b/.test(location.search)&&(Am=!1)}catch(t){}$o.frame=t=>{if(!Am)return;if(!(t>0)||t>1){il=0,Vf=0;return}if(il+=t,Vf++,il<.75)return;let e=Vf/il;if(il=0,Vf=0,fl>0&&(fl-=.75,fl<=0&&(Hi=1)),Ui){if(e<Ui.fps*1.08&&Ui.scale>$o.scale){if(++gu>=2){$o.scale=1,Hi=1,fl=0,Xf=Math.min(Xf,e*.85),gu=0,cl=0,Ui=null;return}}else gu=0;Ui=null}if(e<Xf){if(ll=0,++cl>=2){if(cl=0,$o.scale>.61&&$o.climbed){Hi=$o.scale-.05,fl=40,$o.scale=Hi,$o.climbed=!1;return}H4(e)}}else e>Math.max(Xf*1.15,55)?(cl=0,++ll>=6&&$o.scale<Hi-.001?($o.scale=Math.min(Hi,$o.scale+.05),$o.climbed=!0,ll=0):ll>=6&&($o.climbed=!1)):(cl=0,ll=0)};$o.stepDown=()=>{if($o.reflection)$o.reflection=!1;else if($o.gardenDetail>0||$o.motion)$o.gardenDetail=0,$o.motion=!1,$o.leafShare=Math.min($o.leafShare,.65);else if($o.post>0)$o.post--;else return!1;return $o.level++,!0};Tm.exports=$o});var xu=St((gz,Lm)=>{"use strict";Lm.exports=[{file:"IMG_20250717_102753.jpg",slug:"love-me-like-i-am-already-dead",title:"Love me like I am Already Dead",medium:"Oil on canvas",size:[61,91],description:`We live in a world soaked in hypocrisy. We\u2019re told not to \u201Cspeak ill of the dead,\u201D yet we spend lifetimes speaking ill of the living. We judge, ignore, neglect\u2014and then pretend to mourn with grace when it\u2019s too late. People say beautiful things at funerals, but only after burying a lifetime of cruelty or silence.

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
but the loneliness of having no one willing to admit it happened.`}]});var Yf=St((xz,Om)=>{"use strict";var $0={instagram:"muzammil_qureshi",email:"muzammilqureshi100@gmail.com"},Nm='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>',Rm='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>';$0.instagramUrl="https://instagram.com/"+$0.instagram;$0.mailUrl="mailto:"+$0.email+"?subject="+encodeURIComponent("Your paintings");$0.icons=t=>`
	<a class="${t}" href="${$0.instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram: @${$0.instagram}" title="Instagram">${Nm}</a>
	<a class="${t}" href="${$0.mailUrl}" aria-label="Email ${$0.email}" title="Email">${Rm}</a>`;$0.line=t=>`
	<span class="${t}">
		<a href="${$0.instagramUrl}" target="_blank" rel="noopener">${Nm}<span>@${$0.instagram}</span></a>
		<a href="${$0.mailUrl}">${Rm}<span>${$0.email}</span></a>
	</span>`;Om.exports=$0});var hl=St((yz,Cm)=>{"use strict";Cm.exports=t=>{if(!t)return"";let e=[];return t.medium&&e.push(t.medium),t.size&&t.size.length===2&&e.push(t.size[0]+" \xD7 "+t.size[1]+" cm"),e.join("  \xB7  ")}});var yu=St((bz,Im)=>{"use strict";var U4=xu(),B4=Yf(),Pm=hl(),j4=Sr(),Ba=t=>String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),W4=`
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
`,I0=null;function V4(t){if(I0){I0.hidden=!1,requestAnimationFrame(()=>I0.classList.add("on"));return}let e=document.createElement("style");e.textContent=W4,document.head.appendChild(e);let o=!j4.isPhone;I0=document.createElement("div"),I0.className="plist",I0.setAttribute("role","region"),I0.setAttribute("aria-label","All paintings"),I0.innerHTML=`
		${t?"":'<button type="button" class="plist-close">Back to the gallery</button>'}
		<header class="plist-head">
			<h1>Muzammil</h1>
			<p class="plist-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</p>
			${B4.line("plist-contact")}
		</header>
		${t?'<p class="plist-note">This device could not open the 3D gallery, so here are the paintings on their own.</p>':""}
		<main class="plist-grid">
			${U4.map(r=>`
			<article class="plist-item" id="${Ba(r.slug)}">
				<img loading="lazy" decoding="async" alt="${Ba(r.title)}, ${Ba(Pm(r))}"
					src="images/web/${Ba(r.slug)}${o?"":"-1024"}.webp"
					onerror="this.onerror=null;this.src='images/${Ba(r.file)}'">
				<p class="plist-meta">${Ba(Pm(r))}</p>
				<h2>${Ba(r.title)}</h2>
				<details><summary>Read its story</summary>
					${String(r.description).split(/\n\s*\n/).map(a=>`<p>${Ba(a.trim())}</p>`).join("")}
				</details>
			</article>`).join("")}
		</main>`,["mousedown","pointerdown","click","wheel","touchstart","touchmove","keydown"].forEach(r=>I0.addEventListener(r,a=>a.stopPropagation(),{passive:!0}));let n=I0.querySelector(".plist-close");n&&n.addEventListener("click",$m),document.body.appendChild(I0),requestAnimationFrame(()=>I0.classList.add("on"))}function $m(){I0&&(I0.classList.remove("on"),setTimeout(()=>{I0.hidden=!0},500),location.hash==="#list"&&history.replaceState(null,"",location.pathname+location.search))}Im.exports={show:V4,hide:$m}});var qm=St((bu,wu)=>{(function(t,e){typeof bu=="object"&&typeof wu!="undefined"?wu.exports=e():typeof define=="function"&&define.amd?define(e):t.Stats=e()})(bu,function(){var t=function(){function e(d){return r.appendChild(d.dom),d}function o(d){for(var u=0;u<r.children.length;u++)r.children[u].style.display=u===d?"block":"none";n=d}var n=0,r=document.createElement("div");r.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",r.addEventListener("click",function(d){d.preventDefault(),o(++n%r.children.length)},!1);var a=(performance||Date).now(),s=a,i=0,c=e(new t.Panel("FPS","#0ff","#002")),h=e(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var l=e(new t.Panel("MB","#f08","#201"));return o(0),{REVISION:16,dom:r,addPanel:e,showPanel:o,begin:function(){a=(performance||Date).now()},end:function(){i++;var d=(performance||Date).now();if(h.update(d-a,200),d>s+1e3&&(c.update(1e3*i/(d-s),100),s=d,i=0,l)){var u=performance.memory;l.update(u.usedJSHeapSize/1048576,u.jsHeapSizeLimit/1048576)}return d},update:function(){a=this.end()},domElement:r,setMode:o}};return t.Panel=function(e,o,n){var r=1/0,a=0,s=Math.round,i=s(window.devicePixelRatio||1),c=80*i,h=48*i,l=3*i,d=2*i,u=3*i,p=15*i,f=74*i,v=30*i,m=document.createElement("canvas");m.width=c,m.height=h,m.style.cssText="width:80px;height:48px";var g=m.getContext("2d");return g.font="bold "+9*i+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=n,g.fillRect(0,0,c,h),g.fillStyle=o,g.fillText(e,l,d),g.fillRect(u,p,f,v),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(u,p,f,v),{dom:m,update:function(x,y){r=Math.min(r,x),a=Math.max(a,x),g.fillStyle=n,g.globalAlpha=1,g.fillRect(0,0,c,p),g.fillStyle=o,g.fillText(s(x)+" "+e+" ("+s(r)+"-"+s(a)+")",l,d),g.drawImage(m,u+i,p,f-i,v,u,p,f-i,v),g.fillRect(u+f-i,p,i,v),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(u+f-i,p,i,s((1-x/y)*v))}}},t})});var Dm=St((_u,Mu)=>{(function(t,e){typeof _u=="object"&&typeof Mu!="undefined"?Mu.exports=e():typeof define=="function"&&define.amd?define(e):t.createREGL=e()})(_u,function(){"use strict";var t=function(b){return b instanceof Uint8Array||b instanceof Uint16Array||b instanceof Uint32Array||b instanceof Int8Array||b instanceof Int16Array||b instanceof Int32Array||b instanceof Float32Array||b instanceof Float64Array||b instanceof Uint8ClampedArray},e=function(b,z){for(var C=Object.keys(z),nt=0;nt<C.length;++nt)b[C[nt]]=z[C[nt]];return b},o=`
`;function n(b){return typeof atob!="undefined"?atob(b):"base64:"+b}function r(b){var z=new Error("(regl) "+b);throw console.error(z),z}function a(b,z){b||r(z)}function s(b){return b?": "+b:""}function i(b,z,C){b in z||r("unknown parameter ("+b+")"+s(C)+". possible values: "+Object.keys(z).join())}function c(b,z){t(b)||r("invalid parameter type"+s(z)+". must be a typed array")}function h(b,z){switch(z){case"number":return typeof b=="number";case"object":return typeof b=="object";case"string":return typeof b=="string";case"boolean":return typeof b=="boolean";case"function":return typeof b=="function";case"undefined":return typeof b=="undefined";case"symbol":return typeof b=="symbol"}}function l(b,z,C){h(b,z)||r("invalid parameter type"+s(C)+". expected "+z+", got "+typeof b)}function d(b,z){b>=0&&(b|0)===b||r("invalid parameter type, ("+b+")"+s(z)+". must be a nonnegative integer")}function u(b,z,C){z.indexOf(b)<0&&r("invalid value"+s(C)+". must be one of: "+z)}var p=["gl","canvas","container","attributes","pixelRatio","extensions","optionalExtensions","profile","onDone"];function f(b){Object.keys(b).forEach(function(z){p.indexOf(z)<0&&r('invalid regl constructor argument "'+z+'". must be one of '+p)})}function v(b,z){for(b=b+"";b.length<z;)b=" "+b;return b}function m(){this.name="unknown",this.lines=[],this.index={},this.hasErrors=!1}function g(b,z){this.number=b,this.line=z,this.errors=[]}function x(b,z,C){this.file=b,this.line=z,this.message=C}function y(){var b=new Error,z=(b.stack||b).toString(),C=/compileProcedure.*\n\s*at.*\((.*)\)/.exec(z);if(C)return C[1];var nt=/compileProcedure.*\n\s*at\s+(.*)(\n|$)/.exec(z);return nt?nt[1]:"unknown"}function w(){var b=new Error,z=(b.stack||b).toString(),C=/at REGLCommand.*\n\s+at.*\((.*)\)/.exec(z);if(C)return C[1];var nt=/at REGLCommand.*\n\s+at\s+(.*)\n/.exec(z);return nt?nt[1]:"unknown"}function M(b,z){var C=b.split(`
`),nt=1,pt=0,et={unknown:new m,0:new m};et.unknown.name=et[0].name=z||y(),et.unknown.lines.push(new g(0,""));for(var it=0;it<C.length;++it){var Nt=C[it],It=/^\s*#\s*(\w+)\s+(.+)\s*$/.exec(Nt);if(It)switch(It[1]){case"line":var Ht=/(\d+)(\s+\d+)?/.exec(It[2]);Ht&&(nt=Ht[1]|0,Ht[2]&&(pt=Ht[2]|0,pt in et||(et[pt]=new m)));break;case"define":var qt=/SHADER_NAME(_B64)?\s+(.*)$/.exec(It[2]);qt&&(et[pt].name=qt[1]?n(qt[2]):qt[2]);break}et[pt].lines.push(new g(nt++,Nt))}return Object.keys(et).forEach(function(Wt){var Zt=et[Wt];Zt.lines.forEach(function(Rt){Zt.index[Rt.number]=Rt})}),et}function _(b){var z=[];return b.split(`
`).forEach(function(C){if(!(C.length<5)){var nt=/^ERROR:\s+(\d+):(\d+):\s*(.*)$/.exec(C);nt?z.push(new x(nt[1]|0,nt[2]|0,nt[3].trim())):C.length>0&&z.push(new x("unknown",0,C))}}),z}function k(b,z){z.forEach(function(C){var nt=b[C.file];if(nt){var pt=nt.index[C.line];if(pt){pt.errors.push(C),nt.hasErrors=!0;return}}b.unknown.hasErrors=!0,b.unknown.lines[0].errors.push(C)})}function O(b,z,C,nt,pt){if(!b.getShaderParameter(z,b.COMPILE_STATUS)){var et=b.getShaderInfoLog(z),it=nt===b.FRAGMENT_SHADER?"fragment":"vertex";ht(C,"string",it+" shader source must be a string",pt);var Nt=M(C,pt),It=_(et);k(Nt,It),Object.keys(Nt).forEach(function(Ht){var qt=Nt[Ht];if(!qt.hasErrors)return;var Wt=[""],Zt=[""];function Rt(Vt,K){Wt.push(Vt),Zt.push(K||"")}Rt("file number "+Ht+": "+qt.name+`
`,"color:red;text-decoration:underline;font-weight:bold"),qt.lines.forEach(function(Vt){if(Vt.errors.length>0){Rt(v(Vt.number,4)+"|  ","background-color:yellow; font-weight:bold"),Rt(Vt.line+o,"color:red; background-color:yellow; font-weight:bold");var K=0;Vt.errors.forEach(function(ct){var Gt=ct.message,ae=/^\s*'(.*)'\s*:\s*(.*)$/.exec(Gt);if(ae){var _t=ae[1];switch(Gt=ae[2],_t){case"assign":_t="=";break}K=Math.max(Vt.line.indexOf(_t,K),0)}else K=0;Rt(v("| ",6)),Rt(v("^^^",K+3)+o,"font-weight:bold"),Rt(v("| ",6)),Rt(Gt+o,"font-weight:bold")}),Rt(v("| ",6)+o)}else Rt(v(Vt.number,4)+"|  "),Rt(Vt.line+o,"color:red")}),typeof document!="undefined"&&!window.chrome?(Zt[0]=Wt.join("%c"),console.log.apply(console,Zt)):console.log(Wt.join(""))}),a.raise("Error compiling "+it+" shader, "+Nt[0].name)}}function N(b,z,C,nt,pt){if(!b.getProgramParameter(z,b.LINK_STATUS)){var et=b.getProgramInfoLog(z),it=M(C,pt),Nt=M(nt,pt),It='Error linking program with vertex shader, "'+Nt[0].name+'", and fragment shader "'+it[0].name+'"';typeof document!="undefined"?console.log("%c"+It+o+"%c"+et,"color:red;text-decoration:underline;font-weight:bold","color:red"):console.log(It+o+et),a.raise(It)}}function G(b){b._commandRef=y()}function $(b,z,C,nt){G(b);function pt(It){return It?nt.id(It):0}b._fragId=pt(b.static.frag),b._vertId=pt(b.static.vert);function et(It,Ht){Object.keys(Ht).forEach(function(qt){It[nt.id(qt)]=!0})}var it=b._uniformSet={};et(it,z.static),et(it,z.dynamic);var Nt=b._attributeSet={};et(Nt,C.static),et(Nt,C.dynamic),b._hasCount="count"in b.static||"count"in b.dynamic||"elements"in b.static||"elements"in b.dynamic}function V(b,z){var C=w();r(b+" in command "+(z||y())+(C==="unknown"?"":" called from "+C))}function D(b,z,C){b||V(z,C||y())}function U(b,z,C,nt){b in z||V("unknown parameter ("+b+")"+s(C)+". possible values: "+Object.keys(z).join(),nt||y())}function ht(b,z,C,nt){h(b,z)||V("invalid parameter type"+s(C)+". expected "+z+", got "+typeof b,nt||y())}function jt(b){b()}function Lt(b,z,C){b.texture?u(b.texture._texture.internalformat,z,"unsupported texture format for attachment"):u(b.renderbuffer._renderbuffer.format,C,"unsupported renderbuffer format for attachment")}var gt=33071,tt=9728,W=9984,st=9985,wt=9986,$t=9987,Ut=5120,be=5121,De=5122,He=5123,Ot=5124,ie=5125,Oe=5126,Ue=32819,Ge=32820,ve=33635,ye=34042,mt=36193,ue={};ue[Ut]=ue[be]=1,ue[De]=ue[He]=ue[mt]=ue[ve]=ue[Ue]=ue[Ge]=2,ue[Ot]=ue[ie]=ue[Oe]=ue[ye]=4;function Be(b,z){return b===Ge||b===Ue||b===ve?2:b===ye?4:ue[b]*z}function Le(b){return!(b&b-1)&&!!b}function oe(b,z,C){var nt,pt=z.width,et=z.height,it=z.channels;a(pt>0&&pt<=C.maxTextureSize&&et>0&&et<=C.maxTextureSize,"invalid texture shape"),(b.wrapS!==gt||b.wrapT!==gt)&&a(Le(pt)&&Le(et),"incompatible wrap mode for texture, both width and height must be power of 2"),z.mipmask===1?pt!==1&&et!==1&&a(b.minFilter!==W&&b.minFilter!==wt&&b.minFilter!==st&&b.minFilter!==$t,"min filter requires mipmap"):(a(Le(pt)&&Le(et),"texture must be a square power of 2 to support mipmapping"),a(z.mipmask===(pt<<1)-1,"missing or incomplete mipmap data")),z.type===Oe&&(C.extensions.indexOf("oes_texture_float_linear")<0&&a(b.minFilter===tt&&b.magFilter===tt,"filter not supported, must enable oes_texture_float_linear"),a(!b.genMipmaps,"mipmap generation not supported with float textures"));var Nt=z.images;for(nt=0;nt<16;++nt)if(Nt[nt]){var It=pt>>nt,Ht=et>>nt;a(z.mipmask&1<<nt,"missing mipmap data");var qt=Nt[nt];if(a(qt.width===It&&qt.height===Ht,"invalid shape for mip images"),a(qt.format===z.format&&qt.internalformat===z.internalformat&&qt.type===z.type,"incompatible type for mip image"),!qt.compressed)if(qt.data){var Wt=Math.ceil(Be(qt.type,it)*It/qt.unpackAlignment)*qt.unpackAlignment;a(qt.data.byteLength===Wt*Ht,"invalid data for image, buffer size is inconsistent with image format")}else qt.element||qt.copy}else b.genMipmaps||a((z.mipmask&1<<nt)===0,"extra mipmap data");z.compressed&&a(!b.genMipmaps,"mipmap generation for compressed images not supported")}function So(b,z,C,nt){var pt=b.width,et=b.height,it=b.channels;a(pt>0&&pt<=nt.maxTextureSize&&et>0&&et<=nt.maxTextureSize,"invalid texture shape"),a(pt===et,"cube map must be square"),a(z.wrapS===gt&&z.wrapT===gt,"wrap mode not supported by cube map");for(var Nt=0;Nt<C.length;++Nt){var It=C[Nt];a(It.width===pt&&It.height===et,"inconsistent cube map face shape"),z.genMipmaps&&(a(!It.compressed,"can not generate mipmap for compressed textures"),a(It.mipmask===1,"can not specify mipmaps and generate mipmaps"));for(var Ht=It.images,qt=0;qt<16;++qt){var Wt=Ht[qt];if(Wt){var Zt=pt>>qt,Rt=et>>qt;a(It.mipmask&1<<qt,"missing mipmap data"),a(Wt.width===Zt&&Wt.height===Rt,"invalid shape for mip images"),a(Wt.format===b.format&&Wt.internalformat===b.internalformat&&Wt.type===b.type,"incompatible type for mip image"),Wt.compressed||(Wt.data?a(Wt.data.byteLength===Zt*Rt*Math.max(Be(Wt.type,it),Wt.unpackAlignment),"invalid data for image, buffer size is inconsistent with image format"):Wt.element||Wt.copy)}}}}var E=e(a,{optional:jt,raise:r,commandRaise:V,command:D,parameter:i,commandParameter:U,constructor:f,type:l,commandType:ht,isTypedArray:c,nni:d,oneOf:u,shaderError:O,linkError:N,callSite:w,saveCommandRef:G,saveDrawInfo:$,framebufferFormat:Lt,guessCommand:y,texture2D:oe,textureCube:So}),ho=0,io=0,dt=5,Ct=6;function Tt(b,z){this.id=ho++,this.type=b,this.data=z}function eo(b){return b.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function Ke(b){if(b.length===0)return[];var z=b.charAt(0),C=b.charAt(b.length-1);if(b.length>1&&z===C&&(z==='"'||z==="'"))return['"'+eo(b.substr(1,b.length-2))+'"'];var nt=/\[(false|true|null|\d+|'[^']*'|"[^"]*")\]/.exec(b);if(nt)return Ke(b.substr(0,nt.index)).concat(Ke(nt[1])).concat(Ke(b.substr(nt.index+nt[0].length)));var pt=b.split(".");if(pt.length===1)return['"'+eo(b)+'"'];for(var et=[],it=0;it<pt.length;++it)et=et.concat(Ke(pt[it]));return et}function Ye(b){return"["+Ke(b).join("][")+"]"}function je(b,z){return new Tt(b,Ye(z+""))}function Oo(b){return typeof b=="function"&&!b._reglType||b instanceof Tt}function B(b,z){if(typeof b=="function")return new Tt(io,b);if(typeof b=="number"||typeof b=="boolean")return new Tt(dt,b);if(Array.isArray(b))return new Tt(Ct,b.map((C,nt)=>B(C,z+"["+nt+"]")));if(b instanceof Tt)return b;E(!1,"invalid option type in uniform "+z)}var yt={DynamicVariable:Tt,define:je,isDynamic:Oo,unbox:B,accessor:Ye},At={next:typeof requestAnimationFrame=="function"?function(b){return requestAnimationFrame(b)}:function(b){return setTimeout(b,16)},cancel:typeof cancelAnimationFrame=="function"?function(b){return cancelAnimationFrame(b)}:clearTimeout},Et=typeof performance!="undefined"&&performance.now?function(){return performance.now()}:function(){return+new Date};function ne(){var b={"":0},z=[""];return{id:function(C){var nt=b[C];return nt||(nt=b[C]=z.length,z.push(C),nt)},str:function(C){return z[C]}}}function Te(b,z,C){var nt=document.createElement("canvas");e(nt.style,{border:0,margin:0,padding:0,top:0,left:0}),b.appendChild(nt),b===document.body&&(nt.style.position="absolute",e(b.style,{margin:0,padding:0}));function pt(){var Nt=window.innerWidth,It=window.innerHeight;if(b!==document.body){var Ht=b.getBoundingClientRect();Nt=Ht.right-Ht.left,It=Ht.bottom-Ht.top}nt.width=C*Nt,nt.height=C*It,e(nt.style,{width:Nt+"px",height:It+"px"})}var et;b!==document.body&&typeof ResizeObserver=="function"?(et=new ResizeObserver(function(){setTimeout(pt)}),et.observe(b)):window.addEventListener("resize",pt,!1);function it(){et?et.disconnect():window.removeEventListener("resize",pt),b.removeChild(nt)}return pt(),{canvas:nt,onDestroy:it}}function me(b,z){function C(nt){try{return b.getContext(nt,z)}catch(pt){return null}}return C("webgl")||C("experimental-webgl")||C("webgl-experimental")}function re(b){return typeof b.nodeName=="string"&&typeof b.appendChild=="function"&&typeof b.getBoundingClientRect=="function"}function he(b){return typeof b.drawArrays=="function"||typeof b.drawElements=="function"}function de(b){return typeof b=="string"?b.split():(E(Array.isArray(b),"invalid extension array"),b)}function We(b){return typeof b=="string"?(E(typeof document!="undefined","not supported outside of DOM"),document.querySelector(b)):b}function ge(b){var z=b||{},C,nt,pt,et,it={},Nt=[],It=[],Ht=typeof window=="undefined"?1:window.devicePixelRatio,qt=!1,Wt=function(Vt){Vt&&E.raise(Vt)},Zt=function(){};if(typeof z=="string"?(E(typeof document!="undefined","selector queries only supported in DOM enviroments"),C=document.querySelector(z),E(C,"invalid query string for element")):typeof z=="object"?re(z)?C=z:he(z)?(et=z,pt=et.canvas):(E.constructor(z),"gl"in z?et=z.gl:"canvas"in z?pt=We(z.canvas):"container"in z&&(nt=We(z.container)),"attributes"in z&&(it=z.attributes,E.type(it,"object","invalid context attributes")),"extensions"in z&&(Nt=de(z.extensions)),"optionalExtensions"in z&&(It=de(z.optionalExtensions)),"onDone"in z&&(E.type(z.onDone,"function","invalid or missing onDone callback"),Wt=z.onDone),"profile"in z&&(qt=!!z.profile),"pixelRatio"in z&&(Ht=+z.pixelRatio,E(Ht>0,"invalid pixel ratio"))):E.raise("invalid arguments to regl"),C&&(C.nodeName.toLowerCase()==="canvas"?pt=C:nt=C),!et){if(!pt){E(typeof document!="undefined","must manually specify webgl context outside of DOM environments");var Rt=Te(nt||document.body,Wt,Ht);if(!Rt)return null;pt=Rt.canvas,Zt=Rt.onDestroy}it.premultipliedAlpha===void 0&&(it.premultipliedAlpha=!0),et=me(pt,it)}return et?{gl:et,canvas:pt,container:nt,extensions:Nt,optionalExtensions:It,pixelRatio:Ht,profile:qt,onDone:Wt,onDestroy:Zt}:(Zt(),Wt("webgl not supported, try upgrading your browser or graphics drivers http://get.webgl.org"),null)}function se(b,z){var C={};function nt(it){E.type(it,"string","extension name must be string");var Nt=it.toLowerCase(),It;try{It=C[Nt]=b.getExtension(Nt)}catch(Ht){}return!!It}for(var pt=0;pt<z.extensions.length;++pt){var et=z.extensions[pt];if(!nt(et))return z.onDestroy(),z.onDone('"'+et+'" extension is not supported by the current WebGL context, try upgrading your system or a different browser'),null}return z.optionalExtensions.forEach(nt),{extensions:C,restore:function(){Object.keys(C).forEach(function(it){if(C[it]&&!nt(it))throw new Error("(regl): error restoring extension "+it)})}}}function Ee(b,z){for(var C=Array(b),nt=0;nt<b;++nt)C[nt]=z(nt);return C}var Qt=5120,Ie=5121,zo=5122,qe=5123,Ko=5124,br=5125,ga=5126;function yo(b){for(var z=16;z<=1<<28;z*=16)if(b<=z)return z;return 0}function Lo(b){var z,C;return z=(b>65535)<<4,b>>>=z,C=(b>255)<<3,b>>>=C,z|=C,C=(b>15)<<2,b>>>=C,z|=C,C=(b>3)<<1,b>>>=C,z|=C,z|b>>1}function jn(){var b=Ee(8,function(){return[]});function z(et){var it=yo(et),Nt=b[Lo(it)>>2];return Nt.length>0?Nt.pop():new ArrayBuffer(it)}function C(et){b[Lo(et.byteLength)>>2].push(et)}function nt(et,it){var Nt=null;switch(et){case Qt:Nt=new Int8Array(z(it),0,it);break;case Ie:Nt=new Uint8Array(z(it),0,it);break;case zo:Nt=new Int16Array(z(2*it),0,it);break;case qe:Nt=new Uint16Array(z(2*it),0,it);break;case Ko:Nt=new Int32Array(z(4*it),0,it);break;case br:Nt=new Uint32Array(z(4*it),0,it);break;case ga:Nt=new Float32Array(z(4*it),0,it);break;default:return null}return Nt.length!==it?Nt.subarray(0,it):Nt}function pt(et){C(et.buffer)}return{alloc:z,free:C,allocType:nt,freeType:pt}}var Y=jn();Y.zero=jn();var xt=3408,ce=3410,ze=3411,Ce=3412,hn=3413,u0=3414,O0=3415,un=33901,E0=33902,dn=3379,Eo=3386,n0=34921,en=36347,Wn=36348,X0=35661,Y0=35660,Jo=34930,wr=36349,An=34076,Fr=34024,qo=7936,pn=7937,_r=7938,ks=35724,ra=34047,Ss=36063,vf=34852,qa=3553,wi=34067,Gc=34069,w1=33984,xa=6408,Hc=5126,z0=5121,Uc=36160,Es=36053,mb=36064,gb=16384,xb=function(b,z){var C=1;z.ext_texture_filter_anisotropic&&(C=b.getParameter(ra));var nt=1,pt=1;z.webgl_draw_buffers&&(nt=b.getParameter(vf),pt=b.getParameter(Ss));var et=!!z.oes_texture_float;if(et){var it=b.createTexture();b.bindTexture(qa,it),b.texImage2D(qa,0,xa,1,1,0,xa,Hc,null);var Nt=b.createFramebuffer();if(b.bindFramebuffer(Uc,Nt),b.framebufferTexture2D(Uc,mb,qa,it,0),b.bindTexture(qa,null),b.checkFramebufferStatus(Uc)!==Es)et=!1;else{b.viewport(0,0,1,1),b.clearColor(1,0,0,1),b.clear(gb);var It=Y.allocType(Hc,4);b.readPixels(0,0,1,1,xa,Hc,It),b.getError()?et=!1:(b.deleteFramebuffer(Nt),b.deleteTexture(it),et=It[0]===1),Y.freeType(It)}}var Ht=typeof navigator!="undefined"&&(/MSIE/.test(navigator.userAgent)||/Trident\//.test(navigator.appVersion)||/Edge/.test(navigator.userAgent)),qt=!0;if(!Ht){var Wt=b.createTexture(),Zt=Y.allocType(z0,36);b.activeTexture(w1),b.bindTexture(wi,Wt),b.texImage2D(Gc,0,xa,3,3,0,xa,z0,Zt),Y.freeType(Zt),b.bindTexture(wi,null),b.deleteTexture(Wt),qt=!b.getError()}return{colorBits:[b.getParameter(ce),b.getParameter(ze),b.getParameter(Ce),b.getParameter(hn)],depthBits:b.getParameter(u0),stencilBits:b.getParameter(O0),subpixelBits:b.getParameter(xt),extensions:Object.keys(z).filter(function(Rt){return!!z[Rt]}),maxAnisotropic:C,maxDrawbuffers:nt,maxColorAttachments:pt,pointSizeDims:b.getParameter(un),lineWidthDims:b.getParameter(E0),maxViewportDims:b.getParameter(Eo),maxCombinedTextureUnits:b.getParameter(X0),maxCubeMapSize:b.getParameter(An),maxRenderbufferSize:b.getParameter(Fr),maxTextureUnits:b.getParameter(Jo),maxTextureSize:b.getParameter(dn),maxAttributes:b.getParameter(n0),maxVertexUniforms:b.getParameter(en),maxVertexTextureUnits:b.getParameter(Y0),maxVaryingVectors:b.getParameter(Wn),maxFragmentUniforms:b.getParameter(wr),glsl:b.getParameter(ks),renderer:b.getParameter(pn),vendor:b.getParameter(qo),version:b.getParameter(_r),readFloat:et,npotTextureCube:qt}};function Gr(b){return!!b&&typeof b=="object"&&Array.isArray(b.shape)&&Array.isArray(b.stride)&&typeof b.offset=="number"&&b.shape.length===b.stride.length&&(Array.isArray(b.data)||t(b.data))}var ir=function(b){return Object.keys(b).map(function(z){return b[z]})},mf={shape:_b,flatten:wb};function yb(b,z,C){for(var nt=0;nt<z;++nt)C[nt]=b[nt]}function bb(b,z,C,nt){for(var pt=0,et=0;et<z;++et)for(var it=b[et],Nt=0;Nt<C;++Nt)nt[pt++]=it[Nt]}function Np(b,z,C,nt,pt,et){for(var it=et,Nt=0;Nt<z;++Nt)for(var It=b[Nt],Ht=0;Ht<C;++Ht)for(var qt=It[Ht],Wt=0;Wt<nt;++Wt)pt[it++]=qt[Wt]}function Rp(b,z,C,nt,pt){for(var et=1,it=C+1;it<z.length;++it)et*=z[it];var Nt=z[C];if(z.length-C===4){var It=z[C+1],Ht=z[C+2],qt=z[C+3];for(it=0;it<Nt;++it)Np(b[it],It,Ht,qt,nt,pt),pt+=et}else for(it=0;it<Nt;++it)Rp(b[it],z,C+1,nt,pt),pt+=et}function wb(b,z,C,nt){var pt=1;if(z.length)for(var et=0;et<z.length;++et)pt*=z[et];else pt=0;var it=nt||Y.allocType(C,pt);switch(z.length){case 0:break;case 1:yb(b,z[0],it);break;case 2:bb(b,z[0],z[1],it);break;case 3:Np(b,z[0],z[1],z[2],it,0);break;default:Rp(b,z,0,it,0)}return it}function _b(b){for(var z=[],C=b;C.length;C=C[0])z.push(C.length);return z}var _1={"[object Int8Array]":5120,"[object Int16Array]":5122,"[object Int32Array]":5124,"[object Uint8Array]":5121,"[object Uint8ClampedArray]":5121,"[object Uint16Array]":5123,"[object Uint32Array]":5125,"[object Float32Array]":5126,"[object Float64Array]":5121,"[object ArrayBuffer]":5121},Mb=5120,kb=5122,Sb=5124,Eb=5121,zb=5123,Ab=5125,Tb=5126,Lb=5126,zs={int8:Mb,int16:kb,int32:Sb,uint8:Eb,uint16:zb,uint32:Ab,float:Tb,float32:Lb},Nb=35048,Rb=35040,gf={dynamic:Nb,stream:Rb,static:35044},M1=mf.flatten,Op=mf.shape,Cp=35044,Ob=35040,k1=5121,S1=5126,Da=[];Da[5120]=1,Da[5122]=2,Da[5124]=4,Da[5121]=1,Da[5123]=2,Da[5125]=4,Da[5126]=4;function xf(b){return _1[Object.prototype.toString.call(b)]|0}function Pp(b,z){for(var C=0;C<z.length;++C)b[C]=z[C]}function $p(b,z,C,nt,pt,et,it){for(var Nt=0,It=0;It<C;++It)for(var Ht=0;Ht<nt;++Ht)b[Nt++]=z[pt*It+et*Ht+it]}function Cb(b,z,C,nt){var pt=0,et={};function it(K){this.id=pt++,this.buffer=b.createBuffer(),this.type=K,this.usage=Cp,this.byteLength=0,this.dimension=1,this.dtype=k1,this.persistentData=null,C.profile&&(this.stats={size:0})}it.prototype.bind=function(){b.bindBuffer(this.type,this.buffer)},it.prototype.destroy=function(){Zt(this)};var Nt=[];function It(K,ct){var Gt=Nt.pop();return Gt||(Gt=new it(K)),Gt.bind(),Wt(Gt,ct,Ob,0,1,!1),Gt}function Ht(K){Nt.push(K)}function qt(K,ct,Gt){K.byteLength=ct.byteLength,b.bufferData(K.type,ct,Gt)}function Wt(K,ct,Gt,ae,_t,le){var zt;if(K.usage=Gt,Array.isArray(ct)){if(K.dtype=ae||S1,ct.length>0){var Xt;if(Array.isArray(ct[0])){zt=Op(ct);for(var kt=1,Yt=1;Yt<zt.length;++Yt)kt*=zt[Yt];K.dimension=kt,Xt=M1(ct,zt,K.dtype),qt(K,Xt,Gt),le?K.persistentData=Xt:Y.freeType(Xt)}else if(typeof ct[0]=="number"){K.dimension=_t;var Fe=Y.allocType(K.dtype,ct.length);Pp(Fe,ct),qt(K,Fe,Gt),le?K.persistentData=Fe:Y.freeType(Fe)}else t(ct[0])?(K.dimension=ct[0].length,K.dtype=ae||xf(ct[0])||S1,Xt=M1(ct,[ct.length,ct[0].length],K.dtype),qt(K,Xt,Gt),le?K.persistentData=Xt:Y.freeType(Xt)):E.raise("invalid buffer data")}}else if(t(ct))K.dtype=ae||xf(ct),K.dimension=_t,qt(K,ct,Gt),le&&(K.persistentData=new Uint8Array(new Uint8Array(ct.buffer)));else if(Gr(ct)){zt=ct.shape;var to=ct.stride,Jt=ct.offset,Bt=0,bt=0,Ze=0,co=0;zt.length===1?(Bt=zt[0],bt=1,Ze=to[0],co=0):zt.length===2?(Bt=zt[0],bt=zt[1],Ze=to[0],co=to[1]):E.raise("invalid shape"),K.dtype=ae||xf(ct.data)||S1,K.dimension=bt;var _e=Y.allocType(K.dtype,Bt*bt);$p(_e,ct.data,Bt,bt,Ze,co,Jt),qt(K,_e,Gt),le?K.persistentData=_e:Y.freeType(_e)}else ct instanceof ArrayBuffer?(K.dtype=k1,K.dimension=_t,qt(K,ct,Gt),le&&(K.persistentData=new Uint8Array(new Uint8Array(ct)))):E.raise("invalid buffer data")}function Zt(K){z.bufferCount--,nt(K);var ct=K.buffer;E(ct,"buffer must not be deleted already"),b.deleteBuffer(ct),K.buffer=null,delete et[K.id]}function Rt(K,ct,Gt,ae){z.bufferCount++;var _t=new it(ct);et[_t.id]=_t;function le(kt){var Yt=Cp,Fe=null,to=0,Jt=0,Bt=1;return Array.isArray(kt)||t(kt)||Gr(kt)||kt instanceof ArrayBuffer?Fe=kt:typeof kt=="number"?to=kt|0:kt&&(E.type(kt,"object","buffer arguments must be an object, a number or an array"),"data"in kt&&(E(Fe===null||Array.isArray(Fe)||t(Fe)||Gr(Fe),"invalid data for buffer"),Fe=kt.data),"usage"in kt&&(E.parameter(kt.usage,gf,"invalid buffer usage"),Yt=gf[kt.usage]),"type"in kt&&(E.parameter(kt.type,zs,"invalid buffer type"),Jt=zs[kt.type]),"dimension"in kt&&(E.type(kt.dimension,"number","invalid dimension"),Bt=kt.dimension|0),"length"in kt&&(E.nni(to,"buffer length must be a nonnegative integer"),to=kt.length|0)),_t.bind(),Fe?Wt(_t,Fe,Yt,Jt,Bt,ae):(to&&b.bufferData(_t.type,to,Yt),_t.dtype=Jt||k1,_t.usage=Yt,_t.dimension=Bt,_t.byteLength=to),C.profile&&(_t.stats.size=_t.byteLength*Da[_t.dtype]),le}function zt(kt,Yt){E(Yt+kt.byteLength<=_t.byteLength,"invalid buffer subdata call, buffer is too small.  Can't write data of size "+kt.byteLength+" starting from offset "+Yt+" to a buffer of size "+_t.byteLength),b.bufferSubData(_t.type,Yt,kt)}function Xt(kt,Yt){var Fe=(Yt||0)|0,to;if(_t.bind(),t(kt)||kt instanceof ArrayBuffer)zt(kt,Fe);else if(Array.isArray(kt)){if(kt.length>0)if(typeof kt[0]=="number"){var Jt=Y.allocType(_t.dtype,kt.length);Pp(Jt,kt),zt(Jt,Fe),Y.freeType(Jt)}else if(Array.isArray(kt[0])||t(kt[0])){to=Op(kt);var Bt=M1(kt,to,_t.dtype);zt(Bt,Fe),Y.freeType(Bt)}else E.raise("invalid buffer data")}else if(Gr(kt)){to=kt.shape;var bt=kt.stride,Ze=0,co=0,_e=0,mo=0;to.length===1?(Ze=to[0],co=1,_e=bt[0],mo=0):to.length===2?(Ze=to[0],co=to[1],_e=bt[0],mo=bt[1]):E.raise("invalid shape");var oo=Array.isArray(kt.data)?_t.dtype:xf(kt.data),uo=Y.allocType(oo,Ze*co);$p(uo,kt.data,Ze,co,_e,mo,kt.offset),zt(uo,Fe),Y.freeType(uo)}else E.raise("invalid data for buffer subdata");return le}return Gt||le(K),le._reglType="buffer",le._buffer=_t,le.subdata=Xt,C.profile&&(le.stats=_t.stats),le.destroy=function(){Zt(_t)},le}function Vt(){ir(et).forEach(function(K){K.buffer=b.createBuffer(),b.bindBuffer(K.type,K.buffer),b.bufferData(K.type,K.persistentData||K.byteLength,K.usage)})}return C.profile&&(z.getTotalBufferSize=function(){var K=0;return Object.keys(et).forEach(function(ct){K+=et[ct].stats.size}),K}),{create:Rt,createStream:It,destroyStream:Ht,clear:function(){ir(et).forEach(Zt),Nt.forEach(Zt)},getBuffer:function(K){return K&&K._buffer instanceof it?K._buffer:null},restore:Vt,_initBuffer:Wt}}var Pb=0,$b=0,Ib=1,qb=1,Db=4,Fb=4,_i={points:Pb,point:$b,lines:Ib,line:qb,triangles:Db,triangle:Fb,"line loop":2,"line strip":3,"triangle strip":5,"triangle fan":6},Gb=0,Hb=1,Bc=4,Ub=5120,Mi=5121,Ip=5122,ki=5123,qp=5124,As=5125,E1=34963,Bb=35040,jb=35044;function Wb(b,z,C,nt){var pt={},et=0,it={uint8:Mi,uint16:ki};z.oes_element_index_uint&&(it.uint32=As);function Nt(Vt){this.id=et++,pt[this.id]=this,this.buffer=Vt,this.primType=Bc,this.vertCount=0,this.type=0}Nt.prototype.bind=function(){this.buffer.bind()};var It=[];function Ht(Vt){var K=It.pop();return K||(K=new Nt(C.create(null,E1,!0,!1)._buffer)),Wt(K,Vt,Bb,-1,-1,0,0),K}function qt(Vt){It.push(Vt)}function Wt(Vt,K,ct,Gt,ae,_t,le){Vt.buffer.bind();var zt;if(K){var Xt=le;!le&&(!t(K)||Gr(K)&&!t(K.data))&&(Xt=z.oes_element_index_uint?As:ki),C._initBuffer(Vt.buffer,K,ct,Xt,3)}else b.bufferData(E1,_t,ct),Vt.buffer.dtype=zt||Mi,Vt.buffer.usage=ct,Vt.buffer.dimension=3,Vt.buffer.byteLength=_t;if(zt=le,!le){switch(Vt.buffer.dtype){case Mi:case Ub:zt=Mi;break;case ki:case Ip:zt=ki;break;case As:case qp:zt=As;break;default:E.raise("unsupported type for element array")}Vt.buffer.dtype=zt}Vt.type=zt,E(zt!==As||!!z.oes_element_index_uint,"32 bit element buffers not supported, enable oes_element_index_uint first");var kt=ae;kt<0&&(kt=Vt.buffer.byteLength,zt===ki?kt>>=1:zt===As&&(kt>>=2)),Vt.vertCount=kt;var Yt=Gt;if(Gt<0){Yt=Bc;var Fe=Vt.buffer.dimension;Fe===1&&(Yt=Gb),Fe===2&&(Yt=Hb),Fe===3&&(Yt=Bc)}Vt.primType=Yt}function Zt(Vt){nt.elementsCount--,E(Vt.buffer!==null,"must not double destroy elements"),delete pt[Vt.id],Vt.buffer.destroy(),Vt.buffer=null}function Rt(Vt,K){var ct=C.create(null,E1,!0),Gt=new Nt(ct._buffer);nt.elementsCount++;function ae(_t){if(!_t)ct(),Gt.primType=Bc,Gt.vertCount=0,Gt.type=Mi;else if(typeof _t=="number")ct(_t),Gt.primType=Bc,Gt.vertCount=_t|0,Gt.type=Mi;else{var le=null,zt=jb,Xt=-1,kt=-1,Yt=0,Fe=0;Array.isArray(_t)||t(_t)||Gr(_t)?le=_t:(E.type(_t,"object","invalid arguments for elements"),"data"in _t&&(le=_t.data,E(Array.isArray(le)||t(le)||Gr(le),"invalid data for element buffer")),"usage"in _t&&(E.parameter(_t.usage,gf,"invalid element buffer usage"),zt=gf[_t.usage]),"primitive"in _t&&(E.parameter(_t.primitive,_i,"invalid element buffer primitive"),Xt=_i[_t.primitive]),"count"in _t&&(E(typeof _t.count=="number"&&_t.count>=0,"invalid vertex count for elements"),kt=_t.count|0),"type"in _t&&(E.parameter(_t.type,it,"invalid buffer type"),Fe=it[_t.type]),"length"in _t?Yt=_t.length|0:(Yt=kt,Fe===ki||Fe===Ip?Yt*=2:(Fe===As||Fe===qp)&&(Yt*=4))),Wt(Gt,le,zt,Xt,kt,Yt,Fe)}return ae}return ae(Vt),ae._reglType="elements",ae._elements=Gt,ae.subdata=function(_t,le){return ct.subdata(_t,le),ae},ae.destroy=function(){Zt(Gt)},ae}return{create:Rt,createStream:Ht,destroyStream:qt,getElements:function(Vt){return typeof Vt=="function"&&Vt._elements instanceof Nt?Vt._elements:null},clear:function(){ir(pt).forEach(Zt)}}}var Dp=new Float32Array(1),Vb=new Uint32Array(Dp.buffer),Xb=5123;function Fp(b){for(var z=Y.allocType(Xb,b.length),C=0;C<b.length;++C)if(isNaN(b[C]))z[C]=65535;else if(b[C]===1/0)z[C]=31744;else if(b[C]===-1/0)z[C]=64512;else{Dp[0]=b[C];var nt=Vb[0],pt=nt>>>31<<15,et=(nt<<1>>>24)-127,it=nt>>13&1023;if(et<-24)z[C]=pt;else if(et<-14){var Nt=-14-et;z[C]=pt+(it+1024>>Nt)}else et>15?z[C]=pt+31744:z[C]=pt+(et+15<<10)+it}return z}function Mn(b){return Array.isArray(b)||t(b)}var Gp=function(b){return!(b&b-1)&&!!b},Yb=34467,aa=3553,z1=34067,yf=34069,Ts=6408,A1=6406,bf=6407,jc=6409,wf=6410,Hp=32854,T1=32855,Up=36194,Kb=32819,Qb=32820,Zb=33635,Jb=34042,L1=6402,_f=34041,N1=35904,R1=35906,Si=36193,O1=33776,C1=33777,P1=33778,$1=33779,Bp=35986,jp=35987,Wp=34798,Vp=35840,Xp=35841,Yp=35842,Kp=35843,Qp=36196,Ei=5121,I1=5123,q1=5125,Wc=5126,tw=10242,ew=10243,ow=10497,D1=33071,nw=33648,rw=10240,aw=10241,F1=9728,sw=9729,G1=9984,Zp=9985,Jp=9986,H1=9987,iw=33170,Mf=4352,cw=4353,lw=4354,fw=34046,hw=3317,uw=37440,dw=37441,pw=37443,tv=37444,Vc=33984,vw=[G1,Jp,Zp,H1],kf=[0,jc,wf,bf,Ts],Mr={};Mr[jc]=Mr[A1]=Mr[L1]=1,Mr[_f]=Mr[wf]=2,Mr[bf]=Mr[N1]=3,Mr[Ts]=Mr[R1]=4;function zi(b){return"[object "+b+"]"}var ev=zi("HTMLCanvasElement"),ov=zi("OffscreenCanvas"),nv=zi("CanvasRenderingContext2D"),rv=zi("ImageBitmap"),av=zi("HTMLImageElement"),sv=zi("HTMLVideoElement"),mw=Object.keys(_1).concat([ev,ov,nv,rv,av,sv]),Ai=[];Ai[Ei]=1,Ai[Wc]=4,Ai[Si]=2,Ai[I1]=2,Ai[q1]=4;var d0=[];d0[Hp]=2,d0[T1]=2,d0[Up]=2,d0[_f]=4,d0[O1]=.5,d0[C1]=.5,d0[P1]=1,d0[$1]=1,d0[Bp]=.5,d0[jp]=1,d0[Wp]=1,d0[Vp]=.5,d0[Xp]=.25,d0[Yp]=.5,d0[Kp]=.25,d0[Qp]=.5;function iv(b){return Array.isArray(b)&&(b.length===0||typeof b[0]=="number")}function cv(b){if(!Array.isArray(b))return!1;var z=b.length;return!(z===0||!Mn(b[0]))}function Ls(b){return Object.prototype.toString.call(b)}function lv(b){return Ls(b)===ev}function fv(b){return Ls(b)===ov}function gw(b){return Ls(b)===nv}function xw(b){return Ls(b)===rv}function yw(b){return Ls(b)===av}function bw(b){return Ls(b)===sv}function U1(b){if(!b)return!1;var z=Ls(b);return mw.indexOf(z)>=0?!0:iv(b)||cv(b)||Gr(b)}function hv(b){return _1[Object.prototype.toString.call(b)]|0}function ww(b,z){var C=z.length;switch(b.type){case Ei:case I1:case q1:case Wc:var nt=Y.allocType(b.type,C);nt.set(z),b.data=nt;break;case Si:b.data=Fp(z);break;default:E.raise("unsupported texture type, must specify a typed array")}}function uv(b,z){return Y.allocType(b.type===Si?Wc:b.type,z)}function dv(b,z){b.type===Si?(b.data=Fp(z),Y.freeType(z)):b.data=z}function _w(b,z,C,nt,pt,et){for(var it=b.width,Nt=b.height,It=b.channels,Ht=it*Nt*It,qt=uv(b,Ht),Wt=0,Zt=0;Zt<Nt;++Zt)for(var Rt=0;Rt<it;++Rt)for(var Vt=0;Vt<It;++Vt)qt[Wt++]=z[C*Rt+nt*Zt+pt*Vt+et];dv(b,qt)}function Sf(b,z,C,nt,pt,et){var it;if(typeof d0[b]!="undefined"?it=d0[b]:it=Mr[b]*Ai[z],et&&(it*=6),pt){for(var Nt=0,It=C;It>=1;)Nt+=it*It*It,It/=2;return Nt}else return it*C*nt}function Mw(b,z,C,nt,pt,et,it){var Nt={"don't care":Mf,"dont care":Mf,nice:lw,fast:cw},It={repeat:ow,clamp:D1,mirror:nw},Ht={nearest:F1,linear:sw},qt=e({mipmap:H1,"nearest mipmap nearest":G1,"linear mipmap nearest":Zp,"nearest mipmap linear":Jp,"linear mipmap linear":H1},Ht),Wt={none:0,browser:tv},Zt={uint8:Ei,rgba4:Kb,rgb565:Zb,"rgb5 a1":Qb},Rt={alpha:A1,luminance:jc,"luminance alpha":wf,rgb:bf,rgba:Ts,rgba4:Hp,"rgb5 a1":T1,rgb565:Up},Vt={};z.ext_srgb&&(Rt.srgb=N1,Rt.srgba=R1),z.oes_texture_float&&(Zt.float32=Zt.float=Wc),z.oes_texture_half_float&&(Zt.float16=Zt["half float"]=Si),z.webgl_depth_texture&&(e(Rt,{depth:L1,"depth stencil":_f}),e(Zt,{uint16:I1,uint32:q1,"depth stencil":Jb})),z.webgl_compressed_texture_s3tc&&e(Vt,{"rgb s3tc dxt1":O1,"rgba s3tc dxt1":C1,"rgba s3tc dxt3":P1,"rgba s3tc dxt5":$1}),z.webgl_compressed_texture_atc&&e(Vt,{"rgb atc":Bp,"rgba atc explicit alpha":jp,"rgba atc interpolated alpha":Wp}),z.webgl_compressed_texture_pvrtc&&e(Vt,{"rgb pvrtc 4bppv1":Vp,"rgb pvrtc 2bppv1":Xp,"rgba pvrtc 4bppv1":Yp,"rgba pvrtc 2bppv1":Kp}),z.webgl_compressed_texture_etc1&&(Vt["rgb etc1"]=Qp);var K=Array.prototype.slice.call(b.getParameter(Yb));Object.keys(Vt).forEach(function(R){var rt=Vt[R];K.indexOf(rt)>=0&&(Rt[R]=rt)});var ct=Object.keys(Rt);C.textureFormats=ct;var Gt=[];Object.keys(Rt).forEach(function(R){var rt=Rt[R];Gt[rt]=R});var ae=[];Object.keys(Zt).forEach(function(R){var rt=Zt[R];ae[rt]=R});var _t=[];Object.keys(Ht).forEach(function(R){var rt=Ht[R];_t[rt]=R});var le=[];Object.keys(qt).forEach(function(R){var rt=qt[R];le[rt]=R});var zt=[];Object.keys(It).forEach(function(R){var rt=It[R];zt[rt]=R});var Xt=ct.reduce(function(R,rt){var J=Rt[rt];return J===jc||J===A1||J===jc||J===wf||J===L1||J===_f||z.ext_srgb&&(J===N1||J===R1)?R[J]=J:J===T1||rt.indexOf("rgba")>=0?R[J]=Ts:R[J]=bf,R},{});function kt(){this.internalformat=Ts,this.format=Ts,this.type=Ei,this.compressed=!1,this.premultiplyAlpha=!1,this.flipY=!1,this.unpackAlignment=1,this.colorSpace=tv,this.width=0,this.height=0,this.channels=0}function Yt(R,rt){R.internalformat=rt.internalformat,R.format=rt.format,R.type=rt.type,R.compressed=rt.compressed,R.premultiplyAlpha=rt.premultiplyAlpha,R.flipY=rt.flipY,R.unpackAlignment=rt.unpackAlignment,R.colorSpace=rt.colorSpace,R.width=rt.width,R.height=rt.height,R.channels=rt.channels}function Fe(R,rt){if(!(typeof rt!="object"||!rt)){if("premultiplyAlpha"in rt&&(E.type(rt.premultiplyAlpha,"boolean","invalid premultiplyAlpha"),R.premultiplyAlpha=rt.premultiplyAlpha),"flipY"in rt&&(E.type(rt.flipY,"boolean","invalid texture flip"),R.flipY=rt.flipY),"alignment"in rt&&(E.oneOf(rt.alignment,[1,2,4,8],"invalid texture unpack alignment"),R.unpackAlignment=rt.alignment),"colorSpace"in rt&&(E.parameter(rt.colorSpace,Wt,"invalid colorSpace"),R.colorSpace=Wt[rt.colorSpace]),"type"in rt){var J=rt.type;E(z.oes_texture_float||!(J==="float"||J==="float32"),"you must enable the OES_texture_float extension in order to use floating point textures."),E(z.oes_texture_half_float||!(J==="half float"||J==="float16"),"you must enable the OES_texture_half_float extension in order to use 16-bit floating point textures."),E(z.webgl_depth_texture||!(J==="uint16"||J==="uint32"||J==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),E.parameter(J,Zt,"invalid texture type"),R.type=Zt[J]}var pe=R.width,go=R.height,T=R.channels,S=!1;"shape"in rt?(E(Array.isArray(rt.shape)&&rt.shape.length>=2,"shape must be an array"),pe=rt.shape[0],go=rt.shape[1],rt.shape.length===3&&(T=rt.shape[2],E(T>0&&T<=4,"invalid number of channels"),S=!0),E(pe>=0&&pe<=C.maxTextureSize,"invalid width"),E(go>=0&&go<=C.maxTextureSize,"invalid height")):("radius"in rt&&(pe=go=rt.radius,E(pe>=0&&pe<=C.maxTextureSize,"invalid radius")),"width"in rt&&(pe=rt.width,E(pe>=0&&pe<=C.maxTextureSize,"invalid width")),"height"in rt&&(go=rt.height,E(go>=0&&go<=C.maxTextureSize,"invalid height")),"channels"in rt&&(T=rt.channels,E(T>0&&T<=4,"invalid number of channels"),S=!0)),R.width=pe|0,R.height=go|0,R.channels=T|0;var I=!1;if("format"in rt){var X=rt.format;E(z.webgl_depth_texture||!(X==="depth"||X==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),E.parameter(X,Rt,"invalid texture format");var Q=R.internalformat=Rt[X];R.format=Xt[Q],X in Zt&&("type"in rt||(R.type=Zt[X])),X in Vt&&(R.compressed=!0),I=!0}!S&&I?R.channels=Mr[R.format]:S&&!I?R.channels!==kf[R.format]&&(R.format=R.internalformat=kf[R.channels]):I&&S&&E(R.channels===Mr[R.format],"number of channels inconsistent with specified format")}}function to(R){b.pixelStorei(uw,R.flipY),b.pixelStorei(dw,R.premultiplyAlpha),b.pixelStorei(pw,R.colorSpace),b.pixelStorei(hw,R.unpackAlignment)}function Jt(){kt.call(this),this.xOffset=0,this.yOffset=0,this.data=null,this.needsFree=!1,this.element=null,this.needsCopy=!1}function Bt(R,rt){var J=null;if(U1(rt)?J=rt:rt&&(E.type(rt,"object","invalid pixel data type"),Fe(R,rt),"x"in rt&&(R.xOffset=rt.x|0),"y"in rt&&(R.yOffset=rt.y|0),U1(rt.data)&&(J=rt.data)),E(!R.compressed||J instanceof Uint8Array,"compressed texture data must be stored in a uint8array"),rt.copy){E(!J,"can not specify copy and data field for the same texture");var pe=pt.viewportWidth,go=pt.viewportHeight;R.width=R.width||pe-R.xOffset,R.height=R.height||go-R.yOffset,R.needsCopy=!0,E(R.xOffset>=0&&R.xOffset<pe&&R.yOffset>=0&&R.yOffset<go&&R.width>0&&R.width<=pe&&R.height>0&&R.height<=go,"copy texture read out of bounds")}else if(!J)R.width=R.width||1,R.height=R.height||1,R.channels=R.channels||4;else if(t(J))R.channels=R.channels||4,R.data=J,!("type"in rt)&&R.type===Ei&&(R.type=hv(J));else if(iv(J))R.channels=R.channels||4,ww(R,J),R.alignment=1,R.needsFree=!0;else if(Gr(J)){var T=J.data;!Array.isArray(T)&&R.type===Ei&&(R.type=hv(T));var S=J.shape,I=J.stride,X,Q,F,q,H,L;S.length===3?(F=S[2],L=I[2]):(E(S.length===2,"invalid ndarray pixel data, must be 2 or 3D"),F=1,L=1),X=S[0],Q=S[1],q=I[0],H=I[1],R.alignment=1,R.width=X,R.height=Q,R.channels=F,R.format=R.internalformat=kf[F],R.needsFree=!0,_w(R,T,q,H,L,J.offset)}else if(lv(J)||fv(J)||gw(J))lv(J)||fv(J)?R.element=J:R.element=J.canvas,R.width=R.element.width,R.height=R.element.height,R.channels=4;else if(xw(J))R.element=J,R.width=J.width,R.height=J.height,R.channels=4;else if(yw(J))R.element=J,R.width=J.naturalWidth,R.height=J.naturalHeight,R.channels=4;else if(bw(J))R.element=J,R.width=J.videoWidth,R.height=J.videoHeight,R.channels=4;else if(cv(J)){var P=R.width||J[0].length,A=R.height||J.length,j=R.channels;Mn(J[0][0])?j=j||J[0][0].length:j=j||1;for(var Z=mf.shape(J),ut=1,vt=0;vt<Z.length;++vt)ut*=Z[vt];var ft=uv(R,ut);mf.flatten(J,Z,"",ft),dv(R,ft),R.alignment=1,R.width=P,R.height=A,R.channels=j,R.format=R.internalformat=kf[j],R.needsFree=!0}R.type===Wc?E(C.extensions.indexOf("oes_texture_float")>=0,"oes_texture_float extension not enabled"):R.type===Si&&E(C.extensions.indexOf("oes_texture_half_float")>=0,"oes_texture_half_float extension not enabled")}function bt(R,rt,J){var pe=R.element,go=R.data,T=R.internalformat,S=R.format,I=R.type,X=R.width,Q=R.height;to(R),pe?b.texImage2D(rt,J,S,S,I,pe):R.compressed?b.compressedTexImage2D(rt,J,T,X,Q,0,go):R.needsCopy?(nt(),b.copyTexImage2D(rt,J,S,R.xOffset,R.yOffset,X,Q,0)):b.texImage2D(rt,J,S,X,Q,0,S,I,go||null)}function Ze(R,rt,J,pe,go){var T=R.element,S=R.data,I=R.internalformat,X=R.format,Q=R.type,F=R.width,q=R.height;to(R),T?b.texSubImage2D(rt,go,J,pe,X,Q,T):R.compressed?b.compressedTexSubImage2D(rt,go,J,pe,I,F,q,S):R.needsCopy?(nt(),b.copyTexSubImage2D(rt,go,J,pe,R.xOffset,R.yOffset,F,q)):b.texSubImage2D(rt,go,J,pe,F,q,X,Q,S)}var co=[];function _e(){return co.pop()||new Jt}function mo(R){R.needsFree&&Y.freeType(R.data),Jt.call(R),co.push(R)}function oo(){kt.call(this),this.genMipmaps=!1,this.mipmapHint=Mf,this.mipmask=0,this.images=Array(16)}function uo(R,rt,J){var pe=R.images[0]=_e();R.mipmask=1,pe.width=R.width=rt,pe.height=R.height=J,pe.channels=R.channels=4}function Co(R,rt){var J=null;if(U1(rt))J=R.images[0]=_e(),Yt(J,R),Bt(J,rt),R.mipmask=1;else if(Fe(R,rt),Array.isArray(rt.mipmap))for(var pe=rt.mipmap,go=0;go<pe.length;++go)J=R.images[go]=_e(),Yt(J,R),J.width>>=go,J.height>>=go,Bt(J,pe[go]),R.mipmask|=1<<go;else J=R.images[0]=_e(),Yt(J,R),Bt(J,rt),R.mipmask=1;Yt(R,R.images[0]),R.compressed&&(R.internalformat===O1||R.internalformat===C1||R.internalformat===P1||R.internalformat===$1)&&E(R.width%4===0&&R.height%4===0,"for compressed texture formats, mipmap level 0 must have width and height that are a multiple of 4")}function Ln(R,rt){for(var J=R.images,pe=0;pe<J.length;++pe){if(!J[pe])return;bt(J[pe],rt,pe)}}var Vn=[];function _o(){var R=Vn.pop()||new oo;kt.call(R),R.mipmask=0;for(var rt=0;rt<16;++rt)R.images[rt]=null;return R}function In(R){for(var rt=R.images,J=0;J<rt.length;++J)rt[J]&&mo(rt[J]),rt[J]=null;Vn.push(R)}function on(){this.minFilter=F1,this.magFilter=F1,this.wrapS=D1,this.wrapT=D1,this.anisotropic=1,this.genMipmaps=!1,this.mipmapHint=Mf}function Nn(R,rt){if("min"in rt){var J=rt.min;E.parameter(J,qt),R.minFilter=qt[J],vw.indexOf(R.minFilter)>=0&&!("faces"in rt)&&(R.genMipmaps=!0)}if("mag"in rt){var pe=rt.mag;E.parameter(pe,Ht),R.magFilter=Ht[pe]}var go=R.wrapS,T=R.wrapT;if("wrap"in rt){var S=rt.wrap;typeof S=="string"?(E.parameter(S,It),go=T=It[S]):Array.isArray(S)&&(E.parameter(S[0],It),E.parameter(S[1],It),go=It[S[0]],T=It[S[1]])}else{if("wrapS"in rt){var I=rt.wrapS;E.parameter(I,It),go=It[I]}if("wrapT"in rt){var X=rt.wrapT;E.parameter(X,It),T=It[X]}}if(R.wrapS=go,R.wrapT=T,"anisotropic"in rt){var Q=rt.anisotropic;E(typeof Q=="number"&&Q>=1&&Q<=C.maxAnisotropic,"aniso samples must be between 1 and "),R.anisotropic=rt.anisotropic}if("mipmap"in rt){var F=!1;switch(typeof rt.mipmap){case"string":E.parameter(rt.mipmap,Nt,"invalid mipmap hint"),R.mipmapHint=Nt[rt.mipmap],R.genMipmaps=!0,F=!0;break;case"boolean":F=R.genMipmaps=rt.mipmap;break;case"object":E(Array.isArray(rt.mipmap),"invalid mipmap type"),R.genMipmaps=!1,F=!0;break;default:E.raise("invalid mipmap type")}F&&!("min"in rt)&&(R.minFilter=G1)}}function qn(R,rt){b.texParameteri(rt,aw,R.minFilter),b.texParameteri(rt,rw,R.magFilter),b.texParameteri(rt,tw,R.wrapS),b.texParameteri(rt,ew,R.wrapT),z.ext_texture_filter_anisotropic&&b.texParameteri(rt,fw,R.anisotropic),R.genMipmaps&&(b.hint(iw,R.mipmapHint),b.generateMipmap(rt))}var Dn=0,r0={},p0=C.maxTextureUnits,kn=Array(p0).map(function(){return null});function lo(R){kt.call(this),this.mipmask=0,this.internalformat=Ts,this.id=Dn++,this.refCount=1,this.target=R,this.texture=b.createTexture(),this.unit=-1,this.bindCount=0,this.texInfo=new on,it.profile&&(this.stats={size:0})}function v0(R){b.activeTexture(Vc),b.bindTexture(R.target,R.texture)}function Do(){var R=kn[0];R?b.bindTexture(R.target,R.texture):b.bindTexture(aa,null)}function Ve(R){var rt=R.texture;E(rt,"must not double destroy texture");var J=R.unit,pe=R.target;J>=0&&(b.activeTexture(Vc+J),b.bindTexture(pe,null),kn[J]=null),b.deleteTexture(rt),R.texture=null,R.params=null,R.pixels=null,R.refCount=0,delete r0[R.id],et.textureCount--}e(lo.prototype,{bind:function(){var R=this;R.bindCount+=1;var rt=R.unit;if(rt<0){for(var J=0;J<p0;++J){var pe=kn[J];if(pe){if(pe.bindCount>0)continue;pe.unit=-1}kn[J]=R,rt=J;break}rt>=p0&&E.raise("insufficient number of texture units"),it.profile&&et.maxTextureUnits<rt+1&&(et.maxTextureUnits=rt+1),R.unit=rt,b.activeTexture(Vc+rt),b.bindTexture(R.target,R.texture)}return rt},unbind:function(){this.bindCount-=1},decRef:function(){--this.refCount<=0&&Ve(this)}});function bo(R,rt){var J=new lo(aa);r0[J.id]=J,et.textureCount++;function pe(S,I){var X=J.texInfo;on.call(X);var Q=_o();return typeof S=="number"?typeof I=="number"?uo(Q,S|0,I|0):uo(Q,S|0,S|0):S?(E.type(S,"object","invalid arguments to regl.texture"),Nn(X,S),Co(Q,S)):uo(Q,1,1),X.genMipmaps&&(Q.mipmask=(Q.width<<1)-1),J.mipmask=Q.mipmask,Yt(J,Q),E.texture2D(X,Q,C),J.internalformat=Q.internalformat,pe.width=Q.width,pe.height=Q.height,v0(J),Ln(Q,aa),qn(X,aa),Do(),In(Q),it.profile&&(J.stats.size=Sf(J.internalformat,J.type,Q.width,Q.height,X.genMipmaps,!1)),pe.format=Gt[J.internalformat],pe.type=ae[J.type],pe.mag=_t[X.magFilter],pe.min=le[X.minFilter],pe.wrapS=zt[X.wrapS],pe.wrapT=zt[X.wrapT],pe}function go(S,I,X,Q){E(!!S,"must specify image data");var F=I|0,q=X|0,H=Q|0,L=_e();return Yt(L,J),L.width=0,L.height=0,Bt(L,S),L.width=L.width||(J.width>>H)-F,L.height=L.height||(J.height>>H)-q,E(J.type===L.type&&J.format===L.format&&J.internalformat===L.internalformat,"incompatible format for texture.subimage"),E(F>=0&&q>=0&&F+L.width<=J.width&&q+L.height<=J.height,"texture.subimage write out of bounds"),E(J.mipmask&1<<H,"missing mipmap data"),E(L.data||L.element||L.needsCopy,"missing image data"),v0(J),Ze(L,aa,F,q,H),Do(),mo(L),pe}function T(S,I){var X=S|0,Q=I|0||X;if(X===J.width&&Q===J.height)return pe;pe.width=J.width=X,pe.height=J.height=Q,v0(J);for(var F=0;J.mipmask>>F;++F){var q=X>>F,H=Q>>F;if(!q||!H)break;b.texImage2D(aa,F,J.format,q,H,0,J.format,J.type,null)}return Do(),it.profile&&(J.stats.size=Sf(J.internalformat,J.type,X,Q,!1,!1)),pe}return pe(R,rt),pe.subimage=go,pe.resize=T,pe._reglType="texture2d",pe._texture=J,it.profile&&(pe.stats=J.stats),pe.destroy=function(){J.decRef()},pe}function Ao(R,rt,J,pe,go,T){var S=new lo(z1);r0[S.id]=S,et.cubeCount++;var I=new Array(6);function X(q,H,L,P,A,j){var Z,ut=S.texInfo;for(on.call(ut),Z=0;Z<6;++Z)I[Z]=_o();if(typeof q=="number"||!q){var vt=q|0||1;for(Z=0;Z<6;++Z)uo(I[Z],vt,vt)}else if(typeof q=="object")if(H)Co(I[0],q),Co(I[1],H),Co(I[2],L),Co(I[3],P),Co(I[4],A),Co(I[5],j);else if(Nn(ut,q),Fe(S,q),"faces"in q){var ft=q.faces;for(E(Array.isArray(ft)&&ft.length===6,"cube faces must be a length 6 array"),Z=0;Z<6;++Z)E(typeof ft[Z]=="object"&&!!ft[Z],"invalid input for cube map face"),Yt(I[Z],S),Co(I[Z],ft[Z])}else for(Z=0;Z<6;++Z)Co(I[Z],q);else E.raise("invalid arguments to cube map");for(Yt(S,I[0]),C.npotTextureCube||E(Gp(S.width)&&Gp(S.height),"your browser does not support non power or two texture dimensions"),ut.genMipmaps?S.mipmask=(I[0].width<<1)-1:S.mipmask=I[0].mipmask,E.textureCube(S,ut,I,C),S.internalformat=I[0].internalformat,X.width=I[0].width,X.height=I[0].height,v0(S),Z=0;Z<6;++Z)Ln(I[Z],yf+Z);for(qn(ut,z1),Do(),it.profile&&(S.stats.size=Sf(S.internalformat,S.type,X.width,X.height,ut.genMipmaps,!0)),X.format=Gt[S.internalformat],X.type=ae[S.type],X.mag=_t[ut.magFilter],X.min=le[ut.minFilter],X.wrapS=zt[ut.wrapS],X.wrapT=zt[ut.wrapT],Z=0;Z<6;++Z)In(I[Z]);return X}function Q(q,H,L,P,A){E(!!H,"must specify image data"),E(typeof q=="number"&&q===(q|0)&&q>=0&&q<6,"invalid face");var j=L|0,Z=P|0,ut=A|0,vt=_e();return Yt(vt,S),vt.width=0,vt.height=0,Bt(vt,H),vt.width=vt.width||(S.width>>ut)-j,vt.height=vt.height||(S.height>>ut)-Z,E(S.type===vt.type&&S.format===vt.format&&S.internalformat===vt.internalformat,"incompatible format for texture.subimage"),E(j>=0&&Z>=0&&j+vt.width<=S.width&&Z+vt.height<=S.height,"texture.subimage write out of bounds"),E(S.mipmask&1<<ut,"missing mipmap data"),E(vt.data||vt.element||vt.needsCopy,"missing image data"),v0(S),Ze(vt,yf+q,j,Z,ut),Do(),mo(vt),X}function F(q){var H=q|0;if(H!==S.width){X.width=S.width=H,X.height=S.height=H,v0(S);for(var L=0;L<6;++L)for(var P=0;S.mipmask>>P;++P)b.texImage2D(yf+L,P,S.format,H>>P,H>>P,0,S.format,S.type,null);return Do(),it.profile&&(S.stats.size=Sf(S.internalformat,S.type,X.width,X.height,!1,!0)),X}}return X(R,rt,J,pe,go,T),X.subimage=Q,X.resize=F,X._reglType="textureCube",X._texture=S,it.profile&&(X.stats=S.stats),X.destroy=function(){S.decRef()},X}function Sn(){for(var R=0;R<p0;++R)b.activeTexture(Vc+R),b.bindTexture(aa,null),kn[R]=null;ir(r0).forEach(Ve),et.cubeCount=0,et.textureCount=0}it.profile&&(et.getTotalTextureSize=function(){var R=0;return Object.keys(r0).forEach(function(rt){R+=r0[rt].stats.size}),R});function ia(){for(var R=0;R<p0;++R){var rt=kn[R];rt&&(rt.bindCount=0,rt.unit=-1,kn[R]=null)}ir(r0).forEach(function(J){J.texture=b.createTexture(),b.bindTexture(J.target,J.texture);for(var pe=0;pe<32;++pe)if(J.mipmask&1<<pe)if(J.target===aa)b.texImage2D(aa,pe,J.internalformat,J.width>>pe,J.height>>pe,0,J.internalformat,J.type,null);else for(var go=0;go<6;++go)b.texImage2D(yf+go,pe,J.internalformat,J.width>>pe,J.height>>pe,0,J.internalformat,J.type,null);qn(J.texInfo,J.target)})}function Is(){for(var R=0;R<p0;++R){var rt=kn[R];rt&&(rt.bindCount=0,rt.unit=-1,kn[R]=null),b.activeTexture(Vc+R),b.bindTexture(aa,null),b.bindTexture(z1,null)}}return{create2D:bo,createCube:Ao,clear:Sn,getTexture:function(R){return null},restore:ia,refresh:Is}}var Fa=36161,Ef=32854,pv=32855,vv=36194,mv=33189,gv=36168,xv=34041,yv=35907,bv=34836,wv=34842,_v=34843,Hr=[];Hr[Ef]=2,Hr[pv]=2,Hr[vv]=2,Hr[mv]=2,Hr[gv]=1,Hr[xv]=4,Hr[yv]=4,Hr[bv]=16,Hr[wv]=8,Hr[_v]=6;function Mv(b,z,C){return Hr[b]*z*C}var kw=function(b,z,C,nt,pt){var et={rgba4:Ef,rgb565:vv,"rgb5 a1":pv,depth:mv,stencil:gv,"depth stencil":xv};z.ext_srgb&&(et.srgba=yv),z.ext_color_buffer_half_float&&(et.rgba16f=wv,et.rgb16f=_v),z.webgl_color_buffer_float&&(et.rgba32f=bv);var it=[];Object.keys(et).forEach(function(Rt){var Vt=et[Rt];it[Vt]=Rt});var Nt=0,It={};function Ht(Rt){this.id=Nt++,this.refCount=1,this.renderbuffer=Rt,this.format=Ef,this.width=0,this.height=0,pt.profile&&(this.stats={size:0})}Ht.prototype.decRef=function(){--this.refCount<=0&&qt(this)};function qt(Rt){var Vt=Rt.renderbuffer;E(Vt,"must not double destroy renderbuffer"),b.bindRenderbuffer(Fa,null),b.deleteRenderbuffer(Vt),Rt.renderbuffer=null,Rt.refCount=0,delete It[Rt.id],nt.renderbufferCount--}function Wt(Rt,Vt){var K=new Ht(b.createRenderbuffer());It[K.id]=K,nt.renderbufferCount++;function ct(ae,_t){var le=0,zt=0,Xt=Ef;if(typeof ae=="object"&&ae){var kt=ae;if("shape"in kt){var Yt=kt.shape;E(Array.isArray(Yt)&&Yt.length>=2,"invalid renderbuffer shape"),le=Yt[0]|0,zt=Yt[1]|0}else"radius"in kt&&(le=zt=kt.radius|0),"width"in kt&&(le=kt.width|0),"height"in kt&&(zt=kt.height|0);"format"in kt&&(E.parameter(kt.format,et,"invalid renderbuffer format"),Xt=et[kt.format])}else typeof ae=="number"?(le=ae|0,typeof _t=="number"?zt=_t|0:zt=le):ae?E.raise("invalid arguments to renderbuffer constructor"):le=zt=1;if(E(le>0&&zt>0&&le<=C.maxRenderbufferSize&&zt<=C.maxRenderbufferSize,"invalid renderbuffer size"),!(le===K.width&&zt===K.height&&Xt===K.format))return ct.width=K.width=le,ct.height=K.height=zt,K.format=Xt,b.bindRenderbuffer(Fa,K.renderbuffer),b.renderbufferStorage(Fa,Xt,le,zt),E(b.getError()===0,"invalid render buffer format"),pt.profile&&(K.stats.size=Mv(K.format,K.width,K.height)),ct.format=it[K.format],ct}function Gt(ae,_t){var le=ae|0,zt=_t|0||le;return le===K.width&&zt===K.height||(E(le>0&&zt>0&&le<=C.maxRenderbufferSize&&zt<=C.maxRenderbufferSize,"invalid renderbuffer size"),ct.width=K.width=le,ct.height=K.height=zt,b.bindRenderbuffer(Fa,K.renderbuffer),b.renderbufferStorage(Fa,K.format,le,zt),E(b.getError()===0,"invalid render buffer format"),pt.profile&&(K.stats.size=Mv(K.format,K.width,K.height))),ct}return ct(Rt,Vt),ct.resize=Gt,ct._reglType="renderbuffer",ct._renderbuffer=K,pt.profile&&(ct.stats=K.stats),ct.destroy=function(){K.decRef()},ct}pt.profile&&(nt.getTotalRenderbufferSize=function(){var Rt=0;return Object.keys(It).forEach(function(Vt){Rt+=It[Vt].stats.size}),Rt});function Zt(){ir(It).forEach(function(Rt){Rt.renderbuffer=b.createRenderbuffer(),b.bindRenderbuffer(Fa,Rt.renderbuffer),b.renderbufferStorage(Fa,Rt.format,Rt.width,Rt.height)}),b.bindRenderbuffer(Fa,null)}return{create:Wt,clear:function(){ir(It).forEach(qt)},restore:Zt}},ya=36160,B1=36161,Ns=3553,zf=34069,kv=36064,Sv=36096,Ev=36128,zv=33306,Av=36053,Sw=36054,Ew=36055,zw=36057,Aw=36061,Tw=36193,Lw=5121,Nw=5126,Tv=6407,Lv=6408,Rw=6402,Ow=[Tv,Lv],j1=[];j1[Lv]=4,j1[Tv]=3;var Af=[];Af[Lw]=1,Af[Nw]=4,Af[Tw]=2;var Cw=32854,Pw=32855,$w=36194,Iw=33189,qw=36168,Nv=34041,Dw=35907,Fw=34836,Gw=34842,Hw=34843,Uw=[Cw,Pw,$w,Dw,Gw,Hw,Fw],Ti={};Ti[Av]="complete",Ti[Sw]="incomplete attachment",Ti[zw]="incomplete dimensions",Ti[Ew]="incomplete, missing attachment",Ti[Aw]="unsupported";function Bw(b,z,C,nt,pt,et){var it={cur:null,next:null,dirty:!1,setFBO:null},Nt=["rgba"],It=["rgba4","rgb565","rgb5 a1"];z.ext_srgb&&It.push("srgba"),z.ext_color_buffer_half_float&&It.push("rgba16f","rgb16f"),z.webgl_color_buffer_float&&It.push("rgba32f");var Ht=["uint8"];z.oes_texture_half_float&&Ht.push("half float","float16"),z.oes_texture_float&&Ht.push("float","float32");function qt(Jt,Bt,bt){this.target=Jt,this.texture=Bt,this.renderbuffer=bt;var Ze=0,co=0;Bt?(Ze=Bt.width,co=Bt.height):bt&&(Ze=bt.width,co=bt.height),this.width=Ze,this.height=co}function Wt(Jt){Jt&&(Jt.texture&&Jt.texture._texture.decRef(),Jt.renderbuffer&&Jt.renderbuffer._renderbuffer.decRef())}function Zt(Jt,Bt,bt){if(Jt)if(Jt.texture){var Ze=Jt.texture._texture,co=Math.max(1,Ze.width),_e=Math.max(1,Ze.height);E(co===Bt&&_e===bt,"inconsistent width/height for supplied texture"),Ze.refCount+=1}else{var mo=Jt.renderbuffer._renderbuffer;E(mo.width===Bt&&mo.height===bt,"inconsistent width/height for renderbuffer"),mo.refCount+=1}}function Rt(Jt,Bt){Bt&&(Bt.texture?b.framebufferTexture2D(ya,Jt,Bt.target,Bt.texture._texture.texture,0):b.framebufferRenderbuffer(ya,Jt,B1,Bt.renderbuffer._renderbuffer.renderbuffer))}function Vt(Jt){var Bt=Ns,bt=null,Ze=null,co=Jt;typeof Jt=="object"&&(co=Jt.data,"target"in Jt&&(Bt=Jt.target|0)),E.type(co,"function","invalid attachment data");var _e=co._reglType;return _e==="texture2d"?(bt=co,E(Bt===Ns)):_e==="textureCube"?(bt=co,E(Bt>=zf&&Bt<zf+6,"invalid cube map target")):_e==="renderbuffer"?(Ze=co,Bt=B1):E.raise("invalid regl object for attachment"),new qt(Bt,bt,Ze)}function K(Jt,Bt,bt,Ze,co){if(bt){var _e=nt.create2D({width:Jt,height:Bt,format:Ze,type:co});return _e._texture.refCount=0,new qt(Ns,_e,null)}else{var mo=pt.create({width:Jt,height:Bt,format:Ze});return mo._renderbuffer.refCount=0,new qt(B1,null,mo)}}function ct(Jt){return Jt&&(Jt.texture||Jt.renderbuffer)}function Gt(Jt,Bt,bt){Jt&&(Jt.texture?Jt.texture.resize(Bt,bt):Jt.renderbuffer&&Jt.renderbuffer.resize(Bt,bt),Jt.width=Bt,Jt.height=bt)}var ae=0,_t={};function le(){this.id=ae++,_t[this.id]=this,this.framebuffer=b.createFramebuffer(),this.width=0,this.height=0,this.colorAttachments=[],this.depthAttachment=null,this.stencilAttachment=null,this.depthStencilAttachment=null}function zt(Jt){Jt.colorAttachments.forEach(Wt),Wt(Jt.depthAttachment),Wt(Jt.stencilAttachment),Wt(Jt.depthStencilAttachment)}function Xt(Jt){var Bt=Jt.framebuffer;E(Bt,"must not double destroy framebuffer"),b.deleteFramebuffer(Bt),Jt.framebuffer=null,et.framebufferCount--,delete _t[Jt.id]}function kt(Jt){var Bt;b.bindFramebuffer(ya,Jt.framebuffer);var bt=Jt.colorAttachments;for(Bt=0;Bt<bt.length;++Bt)Rt(kv+Bt,bt[Bt]);for(Bt=bt.length;Bt<C.maxColorAttachments;++Bt)b.framebufferTexture2D(ya,kv+Bt,Ns,null,0);b.framebufferTexture2D(ya,zv,Ns,null,0),b.framebufferTexture2D(ya,Sv,Ns,null,0),b.framebufferTexture2D(ya,Ev,Ns,null,0),Rt(Sv,Jt.depthAttachment),Rt(Ev,Jt.stencilAttachment),Rt(zv,Jt.depthStencilAttachment);var Ze=b.checkFramebufferStatus(ya);!b.isContextLost()&&Ze!==Av&&E.raise("framebuffer configuration not supported, status = "+Ti[Ze]),b.bindFramebuffer(ya,it.next?it.next.framebuffer:null),it.cur=it.next,b.getError()}function Yt(Jt,Bt){var bt=new le;et.framebufferCount++;function Ze(_e,mo){var oo;E(it.next!==bt,"can not update framebuffer which is currently in use");var uo=0,Co=0,Ln=!0,Vn=!0,_o=null,In=!0,on="rgba",Nn="uint8",qn=1,Dn=null,r0=null,p0=null,kn=!1;if(typeof _e=="number")uo=_e|0,Co=mo|0||uo;else if(!_e)uo=Co=1;else{E.type(_e,"object","invalid arguments for framebuffer");var lo=_e;if("shape"in lo){var v0=lo.shape;E(Array.isArray(v0)&&v0.length>=2,"invalid shape for framebuffer"),uo=v0[0],Co=v0[1]}else"radius"in lo&&(uo=Co=lo.radius),"width"in lo&&(uo=lo.width),"height"in lo&&(Co=lo.height);("color"in lo||"colors"in lo)&&(_o=lo.color||lo.colors,Array.isArray(_o)&&E(_o.length===1||z.webgl_draw_buffers,"multiple render targets not supported")),_o||("colorCount"in lo&&(qn=lo.colorCount|0,E(qn>0,"invalid color buffer count")),"colorTexture"in lo&&(In=!!lo.colorTexture,on="rgba4"),"colorType"in lo&&(Nn=lo.colorType,In?(E(z.oes_texture_float||!(Nn==="float"||Nn==="float32"),"you must enable OES_texture_float in order to use floating point framebuffer objects"),E(z.oes_texture_half_float||!(Nn==="half float"||Nn==="float16"),"you must enable OES_texture_half_float in order to use 16-bit floating point framebuffer objects")):Nn==="half float"||Nn==="float16"?(E(z.ext_color_buffer_half_float,"you must enable EXT_color_buffer_half_float to use 16-bit render buffers"),on="rgba16f"):(Nn==="float"||Nn==="float32")&&(E(z.webgl_color_buffer_float,"you must enable WEBGL_color_buffer_float in order to use 32-bit floating point renderbuffers"),on="rgba32f"),E.oneOf(Nn,Ht,"invalid color type")),"colorFormat"in lo&&(on=lo.colorFormat,Nt.indexOf(on)>=0?In=!0:It.indexOf(on)>=0?In=!1:In?E.oneOf(lo.colorFormat,Nt,"invalid color format for texture"):E.oneOf(lo.colorFormat,It,"invalid color format for renderbuffer"))),("depthTexture"in lo||"depthStencilTexture"in lo)&&(kn=!!(lo.depthTexture||lo.depthStencilTexture),E(!kn||z.webgl_depth_texture,"webgl_depth_texture extension not supported")),"depth"in lo&&(typeof lo.depth=="boolean"?Ln=lo.depth:(Dn=lo.depth,Vn=!1)),"stencil"in lo&&(typeof lo.stencil=="boolean"?Vn=lo.stencil:(r0=lo.stencil,Ln=!1)),"depthStencil"in lo&&(typeof lo.depthStencil=="boolean"?Ln=Vn=lo.depthStencil:(p0=lo.depthStencil,Ln=!1,Vn=!1))}var Do=null,Ve=null,bo=null,Ao=null;if(Array.isArray(_o))Do=_o.map(Vt);else if(_o)Do=[Vt(_o)];else for(Do=new Array(qn),oo=0;oo<qn;++oo)Do[oo]=K(uo,Co,In,on,Nn);E(z.webgl_draw_buffers||Do.length<=1,"you must enable the WEBGL_draw_buffers extension in order to use multiple color buffers."),E(Do.length<=C.maxColorAttachments,"too many color attachments, not supported"),uo=uo||Do[0].width,Co=Co||Do[0].height,Dn?Ve=Vt(Dn):Ln&&!Vn&&(Ve=K(uo,Co,kn,"depth","uint32")),r0?bo=Vt(r0):Vn&&!Ln&&(bo=K(uo,Co,!1,"stencil","uint8")),p0?Ao=Vt(p0):!Dn&&!r0&&Vn&&Ln&&(Ao=K(uo,Co,kn,"depth stencil","depth stencil")),E(!!Dn+!!r0+!!p0<=1,"invalid framebuffer configuration, can specify exactly one depth/stencil attachment");var Sn=null;for(oo=0;oo<Do.length;++oo)if(Zt(Do[oo],uo,Co),E(!Do[oo]||Do[oo].texture&&Ow.indexOf(Do[oo].texture._texture.format)>=0||Do[oo].renderbuffer&&Uw.indexOf(Do[oo].renderbuffer._renderbuffer.format)>=0,"framebuffer color attachment "+oo+" is invalid"),Do[oo]&&Do[oo].texture){var ia=j1[Do[oo].texture._texture.format]*Af[Do[oo].texture._texture.type];Sn===null?Sn=ia:E(Sn===ia,"all color attachments much have the same number of bits per pixel.")}return Zt(Ve,uo,Co),E(!Ve||Ve.texture&&Ve.texture._texture.format===Rw||Ve.renderbuffer&&Ve.renderbuffer._renderbuffer.format===Iw,"invalid depth attachment for framebuffer object"),Zt(bo,uo,Co),E(!bo||bo.renderbuffer&&bo.renderbuffer._renderbuffer.format===qw,"invalid stencil attachment for framebuffer object"),Zt(Ao,uo,Co),E(!Ao||Ao.texture&&Ao.texture._texture.format===Nv||Ao.renderbuffer&&Ao.renderbuffer._renderbuffer.format===Nv,"invalid depth-stencil attachment for framebuffer object"),zt(bt),bt.width=uo,bt.height=Co,bt.colorAttachments=Do,bt.depthAttachment=Ve,bt.stencilAttachment=bo,bt.depthStencilAttachment=Ao,Ze.color=Do.map(ct),Ze.depth=ct(Ve),Ze.stencil=ct(bo),Ze.depthStencil=ct(Ao),Ze.width=bt.width,Ze.height=bt.height,kt(bt),Ze}function co(_e,mo){E(it.next!==bt,"can not resize a framebuffer which is currently in use");var oo=Math.max(_e|0,1),uo=Math.max(mo|0||oo,1);if(oo===bt.width&&uo===bt.height)return Ze;for(var Co=bt.colorAttachments,Ln=0;Ln<Co.length;++Ln)Gt(Co[Ln],oo,uo);return Gt(bt.depthAttachment,oo,uo),Gt(bt.stencilAttachment,oo,uo),Gt(bt.depthStencilAttachment,oo,uo),bt.width=Ze.width=oo,bt.height=Ze.height=uo,kt(bt),Ze}return Ze(Jt,Bt),e(Ze,{resize:co,_reglType:"framebuffer",_framebuffer:bt,destroy:function(){Xt(bt),zt(bt)},use:function(_e){it.setFBO({framebuffer:Ze},_e)}})}function Fe(Jt){var Bt=Array(6);function bt(co){var _e;E(Bt.indexOf(it.next)<0,"can not update framebuffer which is currently in use");var mo={color:null},oo=0,uo=null,Co="rgba",Ln="uint8",Vn=1;if(typeof co=="number")oo=co|0;else if(!co)oo=1;else{E.type(co,"object","invalid arguments for framebuffer");var _o=co;if("shape"in _o){var In=_o.shape;E(Array.isArray(In)&&In.length>=2,"invalid shape for framebuffer"),E(In[0]===In[1],"cube framebuffer must be square"),oo=In[0]}else"radius"in _o&&(oo=_o.radius|0),"width"in _o?(oo=_o.width|0,"height"in _o&&E(_o.height===oo,"must be square")):"height"in _o&&(oo=_o.height|0);("color"in _o||"colors"in _o)&&(uo=_o.color||_o.colors,Array.isArray(uo)&&E(uo.length===1||z.webgl_draw_buffers,"multiple render targets not supported")),uo||("colorCount"in _o&&(Vn=_o.colorCount|0,E(Vn>0,"invalid color buffer count")),"colorType"in _o&&(E.oneOf(_o.colorType,Ht,"invalid color type"),Ln=_o.colorType),"colorFormat"in _o&&(Co=_o.colorFormat,E.oneOf(_o.colorFormat,Nt,"invalid color format for texture"))),"depth"in _o&&(mo.depth=_o.depth),"stencil"in _o&&(mo.stencil=_o.stencil),"depthStencil"in _o&&(mo.depthStencil=_o.depthStencil)}var on;if(uo)if(Array.isArray(uo))for(on=[],_e=0;_e<uo.length;++_e)on[_e]=uo[_e];else on=[uo];else{on=Array(Vn);var Nn={radius:oo,format:Co,type:Ln};for(_e=0;_e<Vn;++_e)on[_e]=nt.createCube(Nn)}for(mo.color=Array(on.length),_e=0;_e<on.length;++_e){var qn=on[_e];E(typeof qn=="function"&&qn._reglType==="textureCube","invalid cube map"),oo=oo||qn.width,E(qn.width===oo&&qn.height===oo,"invalid cube map shape"),mo.color[_e]={target:zf,data:on[_e]}}for(_e=0;_e<6;++_e){for(var Dn=0;Dn<on.length;++Dn)mo.color[Dn].target=zf+_e;_e>0&&(mo.depth=Bt[0].depth,mo.stencil=Bt[0].stencil,mo.depthStencil=Bt[0].depthStencil),Bt[_e]?Bt[_e](mo):Bt[_e]=Yt(mo)}return e(bt,{width:oo,height:oo,color:on})}function Ze(co){var _e,mo=co|0;if(E(mo>0&&mo<=C.maxCubeMapSize,"invalid radius for cube fbo"),mo===bt.width)return bt;var oo=bt.color;for(_e=0;_e<oo.length;++_e)oo[_e].resize(mo);for(_e=0;_e<6;++_e)Bt[_e].resize(mo);return bt.width=bt.height=mo,bt}return bt(Jt),e(bt,{faces:Bt,resize:Ze,_reglType:"framebufferCube",destroy:function(){Bt.forEach(function(co){co.destroy()})}})}function to(){it.cur=null,it.next=null,it.dirty=!0,ir(_t).forEach(function(Jt){Jt.framebuffer=b.createFramebuffer(),kt(Jt)})}return e(it,{getFramebuffer:function(Jt){if(typeof Jt=="function"&&Jt._reglType==="framebuffer"){var Bt=Jt._framebuffer;if(Bt instanceof le)return Bt}return null},create:Yt,createCube:Fe,clear:function(){ir(_t).forEach(Xt)},restore:to})}var jw=5126,Rv=34962;function W1(){this.state=0,this.x=0,this.y=0,this.z=0,this.w=0,this.buffer=null,this.size=0,this.normalized=!1,this.type=jw,this.offset=0,this.stride=0,this.divisor=0}function Ww(b,z,C,nt,pt){for(var et=C.maxAttributes,it=new Array(et),Nt=0;Nt<et;++Nt)it[Nt]=new W1;var It=0,Ht={},qt={Record:W1,scope:{},state:it,currentVAO:null,targetVAO:null,restore:Zt()?_t:function(){},createVAO:le,getVAO:Vt,destroyBuffer:Wt,setVAO:Zt()?K:ct,clear:Zt()?Gt:function(){}};function Wt(zt){for(var Xt=0;Xt<it.length;++Xt){var kt=it[Xt];kt.buffer===zt&&(b.disableVertexAttribArray(Xt),kt.buffer=null)}}function Zt(){return z.oes_vertex_array_object}function Rt(){return z.angle_instanced_arrays}function Vt(zt){return typeof zt=="function"&&zt._vao?zt._vao:null}function K(zt){if(zt!==qt.currentVAO){var Xt=Zt();zt?Xt.bindVertexArrayOES(zt.vao):Xt.bindVertexArrayOES(null),qt.currentVAO=zt}}function ct(zt){if(zt!==qt.currentVAO){if(zt)zt.bindAttrs();else for(var Xt=Rt(),kt=0;kt<it.length;++kt){var Yt=it[kt];Yt.buffer?(b.enableVertexAttribArray(kt),b.vertexAttribPointer(kt,Yt.size,Yt.type,Yt.normalized,Yt.stride,Yt.offfset),Xt&&Yt.divisor&&Xt.vertexAttribDivisorANGLE(kt,Yt.divisor)):(b.disableVertexAttribArray(kt),b.vertexAttrib4f(kt,Yt.x,Yt.y,Yt.z,Yt.w))}qt.currentVAO=zt}}function Gt(){ir(Ht).forEach(function(zt){zt.destroy()})}function ae(){this.id=++It,this.attributes=[];var zt=Zt();zt?this.vao=zt.createVertexArrayOES():this.vao=null,Ht[this.id]=this,this.buffers=[]}ae.prototype.bindAttrs=function(){for(var zt=Rt(),Xt=this.attributes,kt=0;kt<Xt.length;++kt){var Yt=Xt[kt];Yt.buffer?(b.enableVertexAttribArray(kt),b.bindBuffer(Rv,Yt.buffer.buffer),b.vertexAttribPointer(kt,Yt.size,Yt.type,Yt.normalized,Yt.stride,Yt.offset),zt&&Yt.divisor&&zt.vertexAttribDivisorANGLE(kt,Yt.divisor)):(b.disableVertexAttribArray(kt),b.vertexAttrib4f(kt,Yt.x,Yt.y,Yt.z,Yt.w))}for(var Fe=Xt.length;Fe<et;++Fe)b.disableVertexAttribArray(Fe)},ae.prototype.refresh=function(){var zt=Zt();zt&&(zt.bindVertexArrayOES(this.vao),this.bindAttrs(),qt.currentVAO=this)},ae.prototype.destroy=function(){if(this.vao){var zt=Zt();this===qt.currentVAO&&(qt.currentVAO=null,zt.bindVertexArrayOES(null)),zt.deleteVertexArrayOES(this.vao),this.vao=null}Ht[this.id]&&(delete Ht[this.id],nt.vaoCount-=1)};function _t(){var zt=Zt();zt&&ir(Ht).forEach(function(Xt){Xt.refresh()})}function le(zt){var Xt=new ae;nt.vaoCount+=1;function kt(Yt){E(Array.isArray(Yt),"arguments to vertex array constructor must be an array"),E(Yt.length<et,"too many attributes"),E(Yt.length>0,"must specify at least one attribute");var Fe={},to=Xt.attributes;to.length=Yt.length;for(var Jt=0;Jt<Yt.length;++Jt){var Bt=Yt[Jt],bt=to[Jt]=new W1,Ze=Bt.data||Bt;if(Array.isArray(Ze)||t(Ze)||Gr(Ze)){var co;Xt.buffers[Jt]&&(co=Xt.buffers[Jt],t(Ze)&&co._buffer.byteLength>=Ze.byteLength?co.subdata(Ze):(co.destroy(),Xt.buffers[Jt]=null)),Xt.buffers[Jt]||(co=Xt.buffers[Jt]=pt.create(Bt,Rv,!1,!0)),bt.buffer=pt.getBuffer(co),bt.size=bt.buffer.dimension|0,bt.normalized=!1,bt.type=bt.buffer.dtype,bt.offset=0,bt.stride=0,bt.divisor=0,bt.state=1,Fe[Jt]=1}else pt.getBuffer(Bt)?(bt.buffer=pt.getBuffer(Bt),bt.size=bt.buffer.dimension|0,bt.normalized=!1,bt.type=bt.buffer.dtype,bt.offset=0,bt.stride=0,bt.divisor=0,bt.state=1):pt.getBuffer(Bt.buffer)?(bt.buffer=pt.getBuffer(Bt.buffer),bt.size=(+Bt.size||bt.buffer.dimension)|0,bt.normalized=!!Bt.normalized||!1,"type"in Bt?(E.parameter(Bt.type,zs,"invalid buffer type"),bt.type=zs[Bt.type]):bt.type=bt.buffer.dtype,bt.offset=(Bt.offset||0)|0,bt.stride=(Bt.stride||0)|0,bt.divisor=(Bt.divisor||0)|0,bt.state=1,E(bt.size>=1&&bt.size<=4,"size must be between 1 and 4"),E(bt.offset>=0,"invalid offset"),E(bt.stride>=0&&bt.stride<=255,"stride must be between 0 and 255"),E(bt.divisor>=0,"divisor must be positive"),E(!bt.divisor||!!z.angle_instanced_arrays,"ANGLE_instanced_arrays must be enabled to use divisor")):"x"in Bt?(E(Jt>0,"first attribute must not be a constant"),bt.x=+Bt.x||0,bt.y=+Bt.y||0,bt.z=+Bt.z||0,bt.w=+Bt.w||0,bt.state=2):E(!1,"invalid attribute spec for location "+Jt)}for(var _e=0;_e<Xt.buffers.length;++_e)!Fe[_e]&&Xt.buffers[_e]&&(Xt.buffers[_e].destroy(),Xt.buffers[_e]=null);return Xt.refresh(),kt}return kt.destroy=function(){for(var Yt=0;Yt<Xt.buffers.length;++Yt)Xt.buffers[Yt]&&Xt.buffers[Yt].destroy();Xt.buffers.length=0,Xt.destroy()},kt._vao=Xt,kt._reglType="vao",kt(zt)}return qt}var Ov=35632,Vw=35633,Xw=35718,Yw=35721;function Kw(b,z,C,nt){var pt={},et={};function it(K,ct,Gt,ae){this.name=K,this.id=ct,this.location=Gt,this.info=ae}function Nt(K,ct){for(var Gt=0;Gt<K.length;++Gt)if(K[Gt].id===ct.id){K[Gt].location=ct.location;return}K.push(ct)}function It(K,ct,Gt){var ae=K===Ov?pt:et,_t=ae[ct];if(!_t){var le=z.str(ct);_t=b.createShader(K),b.shaderSource(_t,le),b.compileShader(_t),E.shaderError(b,_t,le,K,Gt),ae[ct]=_t}return _t}var Ht={},qt=[],Wt=0;function Zt(K,ct){this.id=Wt++,this.fragId=K,this.vertId=ct,this.program=null,this.uniforms=[],this.attributes=[],this.refCount=1,nt.profile&&(this.stats={uniformsCount:0,attributesCount:0})}function Rt(K,ct,Gt){var ae,_t,le=It(Ov,K.fragId),zt=It(Vw,K.vertId),Xt=K.program=b.createProgram();if(b.attachShader(Xt,le),b.attachShader(Xt,zt),Gt)for(ae=0;ae<Gt.length;++ae){var kt=Gt[ae];b.bindAttribLocation(Xt,kt[0],kt[1])}b.linkProgram(Xt),E.linkError(b,Xt,z.str(K.fragId),z.str(K.vertId),ct);var Yt=b.getProgramParameter(Xt,Xw);nt.profile&&(K.stats.uniformsCount=Yt);var Fe=K.uniforms;for(ae=0;ae<Yt;++ae)if(_t=b.getActiveUniform(Xt,ae),_t)if(_t.size>1)for(var to=0;to<_t.size;++to){var Jt=_t.name.replace("[0]","["+to+"]");Nt(Fe,new it(Jt,z.id(Jt),b.getUniformLocation(Xt,Jt),_t))}else Nt(Fe,new it(_t.name,z.id(_t.name),b.getUniformLocation(Xt,_t.name),_t));var Bt=b.getProgramParameter(Xt,Yw);nt.profile&&(K.stats.attributesCount=Bt);var bt=K.attributes;for(ae=0;ae<Bt;++ae)_t=b.getActiveAttrib(Xt,ae),_t&&Nt(bt,new it(_t.name,z.id(_t.name),b.getAttribLocation(Xt,_t.name),_t))}nt.profile&&(C.getMaxUniformsCount=function(){var K=0;return qt.forEach(function(ct){ct.stats.uniformsCount>K&&(K=ct.stats.uniformsCount)}),K},C.getMaxAttributesCount=function(){var K=0;return qt.forEach(function(ct){ct.stats.attributesCount>K&&(K=ct.stats.attributesCount)}),K});function Vt(){pt={},et={};for(var K=0;K<qt.length;++K)Rt(qt[K],null,qt[K].attributes.map(function(ct){return[ct.location,ct.name]}))}return{clear:function(){var K=b.deleteShader.bind(b);ir(pt).forEach(K),pt={},ir(et).forEach(K),et={},qt.forEach(function(ct){b.deleteProgram(ct.program)}),qt.length=0,Ht={},C.shaderCount=0},program:function(K,ct,Gt,ae){E.command(K>=0,"missing vertex shader",Gt),E.command(ct>=0,"missing fragment shader",Gt);var _t=Ht[ct];_t||(_t=Ht[ct]={});var le=_t[K];if(le&&(le.refCount++,!ae))return le;var zt=new Zt(ct,K);return C.shaderCount++,Rt(zt,Gt,ae),le||(_t[K]=zt),qt.push(zt),e(zt,{destroy:function(){if(zt.refCount--,zt.refCount<=0){b.deleteProgram(zt.program);var Xt=qt.indexOf(zt);qt.splice(Xt,1),C.shaderCount--}_t[zt.vertId].refCount<=0&&(b.deleteShader(et[zt.vertId]),delete et[zt.vertId],delete Ht[zt.fragId][zt.vertId]),Object.keys(Ht[zt.fragId]).length||(b.deleteShader(pt[zt.fragId]),delete pt[zt.fragId],delete Ht[zt.fragId])}})},restore:Vt,shader:It,frag:-1,vert:-1}}var Qw=6408,Xc=5121,Zw=3333,Tf=5126;function Jw(b,z,C,nt,pt,et,it){function Nt(qt){var Wt;z.next===null?(E(pt.preserveDrawingBuffer,'you must create a webgl context with "preserveDrawingBuffer":true in order to read pixels from the drawing buffer'),Wt=Xc):(E(z.next.colorAttachments[0].texture!==null,"You cannot read from a renderbuffer"),Wt=z.next.colorAttachments[0].texture._texture.type,et.oes_texture_float?(E(Wt===Xc||Wt===Tf,"Reading from a framebuffer is only allowed for the types 'uint8' and 'float'"),Wt===Tf&&E(it.readFloat,"Reading 'float' values is not permitted in your browser. For a fallback, please see: https://www.npmjs.com/package/glsl-read-float")):E(Wt===Xc,"Reading from a framebuffer is only allowed for the type 'uint8'"));var Zt=0,Rt=0,Vt=nt.framebufferWidth,K=nt.framebufferHeight,ct=null;t(qt)?ct=qt:qt&&(E.type(qt,"object","invalid arguments to regl.read()"),Zt=qt.x|0,Rt=qt.y|0,E(Zt>=0&&Zt<nt.framebufferWidth,"invalid x offset for regl.read"),E(Rt>=0&&Rt<nt.framebufferHeight,"invalid y offset for regl.read"),Vt=(qt.width||nt.framebufferWidth-Zt)|0,K=(qt.height||nt.framebufferHeight-Rt)|0,ct=qt.data||null),ct&&(Wt===Xc?E(ct instanceof Uint8Array,"buffer must be 'Uint8Array' when reading from a framebuffer of type 'uint8'"):Wt===Tf&&E(ct instanceof Float32Array,"buffer must be 'Float32Array' when reading from a framebuffer of type 'float'")),E(Vt>0&&Vt+Zt<=nt.framebufferWidth,"invalid width for read pixels"),E(K>0&&K+Rt<=nt.framebufferHeight,"invalid height for read pixels"),C();var Gt=Vt*K*4;return ct||(Wt===Xc?ct=new Uint8Array(Gt):Wt===Tf&&(ct=ct||new Float32Array(Gt))),E.isTypedArray(ct,"data buffer for regl.read() must be a typedarray"),E(ct.byteLength>=Gt,"data buffer for regl.read() too small"),b.pixelStorei(Zw,4),b.readPixels(Zt,Rt,Vt,K,Qw,Wt,ct),ct}function It(qt){var Wt;return z.setFBO({framebuffer:qt.framebuffer},function(){Wt=Nt(qt)}),Wt}function Ht(qt){return!qt||!("framebuffer"in qt)?Nt(qt):It(qt)}return Ht}function Li(b){return Array.prototype.slice.call(b)}function Ni(b){return Li(b).join("")}function t4(){var b=0,z=[],C=[];function nt(Wt){for(var Zt=0;Zt<C.length;++Zt)if(C[Zt]===Wt)return z[Zt];var Rt="g"+b++;return z.push(Rt),C.push(Wt),Rt}function pt(){var Wt=[];function Zt(){Wt.push.apply(Wt,Li(arguments))}var Rt=[];function Vt(){var K="v"+b++;return Rt.push(K),arguments.length>0&&(Wt.push(K,"="),Wt.push.apply(Wt,Li(arguments)),Wt.push(";")),K}return e(Zt,{def:Vt,toString:function(){return Ni([Rt.length>0?"var "+Rt.join(",")+";":"",Ni(Wt)])}})}function et(){var Wt=pt(),Zt=pt(),Rt=Wt.toString,Vt=Zt.toString;function K(ct,Gt){Zt(ct,Gt,"=",Wt.def(ct,Gt),";")}return e(function(){Wt.apply(Wt,Li(arguments))},{def:Wt.def,entry:Wt,exit:Zt,save:K,set:function(ct,Gt,ae){K(ct,Gt),Wt(ct,Gt,"=",ae,";")},toString:function(){return Rt()+Vt()}})}function it(){var Wt=Ni(arguments),Zt=et(),Rt=et(),Vt=Zt.toString,K=Rt.toString;return e(Zt,{then:function(){return Zt.apply(Zt,Li(arguments)),this},else:function(){return Rt.apply(Rt,Li(arguments)),this},toString:function(){var ct=K();return ct&&(ct="else{"+ct+"}"),Ni(["if(",Wt,"){",Vt(),"}",ct])}})}var Nt=pt(),It={};function Ht(Wt,Zt){var Rt=[];function Vt(){var _t="a"+Rt.length;return Rt.push(_t),_t}Zt=Zt||0;for(var K=0;K<Zt;++K)Vt();var ct=et(),Gt=ct.toString,ae=It[Wt]=e(ct,{arg:Vt,toString:function(){return Ni(["function(",Rt.join(),"){",Gt(),"}"])}});return ae}function qt(){var Wt=['"use strict";',Nt,"return {"];Object.keys(It).forEach(function(Vt){Wt.push('"',Vt,'":',It[Vt].toString(),",")}),Wt.push("}");var Zt=Ni(Wt).replace(/;/g,`;
`).replace(/}/g,`}
`).replace(/{/g,`{
`),Rt=Function.apply(null,z.concat(Zt));return Rt.apply(null,C)}return{global:Nt,link:nt,block:pt,proc:Ht,scope:et,cond:it,compile:qt}}var Ri="xyzw".split(""),Cv=5121,Oi=1,V1=2,X1=0,Y1=1,K1=2,Q1=3,Lf=4,Pv=5,$v=6,Iv="dither",qv="blend.enable",Dv="blend.color",Z1="blend.equation",J1="blend.func",Fv="depth.enable",Gv="depth.func",Hv="depth.range",Uv="depth.mask",tu="colorMask",Bv="cull.enable",jv="cull.face",eu="frontFace",ou="lineWidth",Wv="polygonOffset.enable",nu="polygonOffset.offset",Vv="sample.alpha",Xv="sample.enable",ru="sample.coverage",Yv="stencil.enable",Kv="stencil.mask",au="stencil.func",su="stencil.opFront",Yc="stencil.opBack",Qv="scissor.enable",Nf="scissor.box",ba="viewport",Kc="profile",Rs="framebuffer",Qc="vert",Zc="frag",Os="elements",Cs="primitive",Ps="count",Rf="offset",Of="instances",Jc="vao",iu="Width",cu="Height",Ci=Rs+iu,Pi=Rs+cu,e4=ba+iu,o4=ba+cu,Zv="drawingBuffer",Jv=Zv+iu,tm=Zv+cu,n4=[J1,Z1,au,su,Yc,ru,ba,Nf,nu],$i=34962,r4=34963,a4=35632,s4=35633,em=3553,i4=34067,c4=2884,l4=3042,f4=3024,h4=2960,u4=2929,d4=3089,p4=32823,v4=32926,m4=32928,lu=5126,Cf=35664,Pf=35665,$f=35666,fu=5124,If=35667,qf=35668,Df=35669,hu=35670,Ff=35671,Gf=35672,Hf=35673,tl=35674,el=35675,ol=35676,nl=35678,rl=35680,om=4,al=1028,$s=1029,nm=2304,uu=2305,g4=32775,x4=32776,y4=519,Ga=7680,rm=0,am=1,sm=32774,b4=513,im=36160,w4=36064,sa={0:0,1:1,zero:0,one:1,"src color":768,"one minus src color":769,"src alpha":770,"one minus src alpha":771,"dst color":774,"one minus dst color":775,"dst alpha":772,"one minus dst alpha":773,"constant color":32769,"one minus constant color":32770,"constant alpha":32771,"one minus constant alpha":32772,"src alpha saturate":776},cm=["constant color, constant alpha","one minus constant color, constant alpha","constant color, one minus constant alpha","one minus constant color, one minus constant alpha","constant alpha, constant color","constant alpha, one minus constant color","one minus constant alpha, constant color","one minus constant alpha, one minus constant color"],Ii={never:512,less:513,"<":513,equal:514,"=":514,"==":514,"===":514,lequal:515,"<=":515,greater:516,">":516,notequal:517,"!=":517,"!==":517,gequal:518,">=":518,always:519},Ha={0:0,zero:0,keep:7680,replace:7681,increment:7682,decrement:7683,"increment wrap":34055,"decrement wrap":34056,invert:5386},lm={frag:a4,vert:s4},du={cw:nm,ccw:uu};function Uf(b){return Array.isArray(b)||t(b)||Gr(b)}function fm(b){return b.sort(function(z,C){return z===ba?-1:C===ba?1:z<C?-1:1})}function C0(b,z,C,nt){this.thisDep=b,this.contextDep=z,this.propDep=C,this.append=nt}function Ua(b){return b&&!(b.thisDep||b.contextDep||b.propDep)}function Tn(b){return new C0(!1,!1,!1,b)}function K0(b,z){var C=b.type;if(C===X1){var nt=b.data.length;return new C0(!0,nt>=1,nt>=2,z)}else if(C===Lf){var pt=b.data;return new C0(pt.thisDep,pt.contextDep,pt.propDep,z)}else{if(C===Pv)return new C0(!1,!1,!1,z);if(C===$v){for(var et=!1,it=!1,Nt=!1,It=0;It<b.data.length;++It){var Ht=b.data[It];if(Ht.type===Y1)Nt=!0;else if(Ht.type===K1)it=!0;else if(Ht.type===Q1)et=!0;else if(Ht.type===X1){et=!0;var qt=Ht.data;qt>=1&&(it=!0),qt>=2&&(Nt=!0)}else Ht.type===Lf&&(et=et||Ht.data.thisDep,it=it||Ht.data.contextDep,Nt=Nt||Ht.data.propDep)}return new C0(et,it,Nt,z)}else return new C0(C===Q1,C===K1,C===Y1,z)}}var hm=new C0(!1,!1,!1,function(){});function _4(b,z,C,nt,pt,et,it,Nt,It,Ht,qt,Wt,Zt,Rt,Vt){var K=Ht.Record,ct={add:32774,subtract:32778,"reverse subtract":32779};C.ext_blend_minmax&&(ct.min=g4,ct.max=x4);var Gt=C.angle_instanced_arrays,ae=C.webgl_draw_buffers,_t={dirty:!0,profile:Vt.profile},le={},zt=[],Xt={},kt={};function Yt(T){return T.replace(".","_")}function Fe(T,S,I){var X=Yt(T);zt.push(T),le[X]=_t[X]=!!I,Xt[X]=S}function to(T,S,I){var X=Yt(T);zt.push(T),Array.isArray(I)?(_t[X]=I.slice(),le[X]=I.slice()):_t[X]=le[X]=I,kt[X]=S}Fe(Iv,f4),Fe(qv,l4),to(Dv,"blendColor",[0,0,0,0]),to(Z1,"blendEquationSeparate",[sm,sm]),to(J1,"blendFuncSeparate",[am,rm,am,rm]),Fe(Fv,u4,!0),to(Gv,"depthFunc",b4),to(Hv,"depthRange",[0,1]),to(Uv,"depthMask",!0),to(tu,tu,[!0,!0,!0,!0]),Fe(Bv,c4),to(jv,"cullFace",$s),to(eu,eu,uu),to(ou,ou,1),Fe(Wv,p4),to(nu,"polygonOffset",[0,0]),Fe(Vv,v4),Fe(Xv,m4),to(ru,"sampleCoverage",[1,!1]),Fe(Yv,h4),to(Kv,"stencilMask",-1),to(au,"stencilFunc",[y4,0,-1]),to(su,"stencilOpSeparate",[al,Ga,Ga,Ga]),to(Yc,"stencilOpSeparate",[$s,Ga,Ga,Ga]),Fe(Qv,d4),to(Nf,"scissor",[0,0,b.drawingBufferWidth,b.drawingBufferHeight]),to(ba,ba,[0,0,b.drawingBufferWidth,b.drawingBufferHeight]);var Jt={gl:b,context:Zt,strings:z,next:le,current:_t,draw:Wt,elements:et,buffer:pt,shader:qt,attributes:Ht.state,vao:Ht,uniforms:It,framebuffer:Nt,extensions:C,timer:Rt,isBufferArgs:Uf},Bt={primTypes:_i,compareFuncs:Ii,blendFuncs:sa,blendEquations:ct,stencilOps:Ha,glTypes:zs,orientationType:du};E.optional(function(){Jt.isArrayLike=Mn}),ae&&(Bt.backBuffer=[$s],Bt.drawBuffer=Ee(nt.maxDrawbuffers,function(T){return T===0?[0]:Ee(T,function(S){return w4+S})}));var bt=0;function Ze(){var T=t4(),S=T.link,I=T.global;T.id=bt++,T.batchId="0";var X=S(Jt),Q=T.shared={props:"a0"};Object.keys(Jt).forEach(function(P){Q[P]=I.def(X,".",P)}),E.optional(function(){T.CHECK=S(E),T.commandStr=E.guessCommand(),T.command=S(T.commandStr),T.assert=function(P,A,j){P("if(!(",A,"))",this.CHECK,".commandRaise(",S(j),",",this.command,");")},Bt.invalidBlendCombinations=cm});var F=T.next={},q=T.current={};Object.keys(kt).forEach(function(P){Array.isArray(_t[P])&&(F[P]=I.def(Q.next,".",P),q[P]=I.def(Q.current,".",P))});var H=T.constants={};Object.keys(Bt).forEach(function(P){H[P]=I.def(JSON.stringify(Bt[P]))}),T.invoke=function(P,A){switch(A.type){case X1:var j=["this",Q.context,Q.props,T.batchId];return P.def(S(A.data),".call(",j.slice(0,Math.max(A.data.length+1,4)),")");case Y1:return P.def(Q.props,A.data);case K1:return P.def(Q.context,A.data);case Q1:return P.def("this",A.data);case Lf:return A.data.append(T,P),A.data.ref;case Pv:return A.data.toString();case $v:return A.data.map(function(Z){return T.invoke(P,Z)})}},T.attribCache={};var L={};return T.scopeAttrib=function(P){var A=z.id(P);if(A in L)return L[A];var j=Ht.scope[A];j||(j=Ht.scope[A]=new K);var Z=L[A]=S(j);return Z},T}function co(T){var S=T.static,I=T.dynamic,X;if(Kc in S){var Q=!!S[Kc];X=Tn(function(q,H){return Q}),X.enable=Q}else if(Kc in I){var F=I[Kc];X=K0(F,function(q,H){return q.invoke(H,F)})}return X}function _e(T,S){var I=T.static,X=T.dynamic;if(Rs in I){var Q=I[Rs];return Q?(Q=Nt.getFramebuffer(Q),E.command(Q,"invalid framebuffer object"),Tn(function(q,H){var L=q.link(Q),P=q.shared;H.set(P.framebuffer,".next",L);var A=P.context;return H.set(A,"."+Ci,L+".width"),H.set(A,"."+Pi,L+".height"),L})):Tn(function(q,H){var L=q.shared;H.set(L.framebuffer,".next","null");var P=L.context;return H.set(P,"."+Ci,P+"."+Jv),H.set(P,"."+Pi,P+"."+tm),"null"})}else if(Rs in X){var F=X[Rs];return K0(F,function(q,H){var L=q.invoke(H,F),P=q.shared,A=P.framebuffer,j=H.def(A,".getFramebuffer(",L,")");E.optional(function(){q.assert(H,"!"+L+"||"+j,"invalid framebuffer object")}),H.set(A,".next",j);var Z=P.context;return H.set(Z,"."+Ci,j+"?"+j+".width:"+Z+"."+Jv),H.set(Z,"."+Pi,j+"?"+j+".height:"+Z+"."+tm),j})}else return null}function mo(T,S,I){var X=T.static,Q=T.dynamic;function F(L){if(L in X){var P=X[L];E.commandType(P,"object","invalid "+L,I.commandStr);var A=!0,j=P.x|0,Z=P.y|0,ut,vt;return"width"in P?(ut=P.width|0,E.command(ut>=0,"invalid "+L,I.commandStr)):A=!1,"height"in P?(vt=P.height|0,E.command(vt>=0,"invalid "+L,I.commandStr)):A=!1,new C0(!A&&S&&S.thisDep,!A&&S&&S.contextDep,!A&&S&&S.propDep,function(Pe,fo){var Me=Pe.shared.context,Xe=ut;"width"in P||(Xe=fo.def(Me,".",Ci,"-",j));var no=vt;return"height"in P||(no=fo.def(Me,".",Pi,"-",Z)),[j,Z,Xe,no]})}else if(L in Q){var ft=Q[L],Ft=K0(ft,function(Pe,fo){var Me=Pe.invoke(fo,ft);E.optional(function(){Pe.assert(fo,Me+"&&typeof "+Me+'==="object"',"invalid "+L)});var Xe=Pe.shared.context,no=fo.def(Me,".x|0"),Po=fo.def(Me,".y|0"),gn=fo.def('"width" in ',Me,"?",Me,".width|0:","(",Xe,".",Ci,"-",no,")"),P0=fo.def('"height" in ',Me,"?",Me,".height|0:","(",Xe,".",Pi,"-",Po,")");return E.optional(function(){Pe.assert(fo,gn+">=0&&"+P0+">=0","invalid "+L)}),[no,Po,gn,P0]});return S&&(Ft.thisDep=Ft.thisDep||S.thisDep,Ft.contextDep=Ft.contextDep||S.contextDep,Ft.propDep=Ft.propDep||S.propDep),Ft}else return S?new C0(S.thisDep,S.contextDep,S.propDep,function(Pe,fo){var Me=Pe.shared.context;return[0,0,fo.def(Me,".",Ci),fo.def(Me,".",Pi)]}):null}var q=F(ba);if(q){var H=q;q=new C0(q.thisDep,q.contextDep,q.propDep,function(L,P){var A=H.append(L,P),j=L.shared.context;return P.set(j,"."+e4,A[2]),P.set(j,"."+o4,A[3]),A})}return{viewport:q,scissor_box:F(Nf)}}function oo(T,S){var I=T.static,X=typeof I[Zc]=="string"&&typeof I[Qc]=="string";if(X){if(Object.keys(S.dynamic).length>0)return null;var Q=S.static,F=Object.keys(Q);if(F.length>0&&typeof Q[F[0]]=="number"){for(var q=[],H=0;H<F.length;++H)E(typeof Q[F[H]]=="number","must specify all vertex attribute locations when using vaos"),q.push([Q[F[H]]|0,F[H]]);return q}}return null}function uo(T,S,I){var X=T.static,Q=T.dynamic;function F(A){if(A in X){var j=z.id(X[A]);E.optional(function(){qt.shader(lm[A],j,E.guessCommand())});var Z=Tn(function(){return j});return Z.id=j,Z}else if(A in Q){var ut=Q[A];return K0(ut,function(vt,ft){var Ft=vt.invoke(ft,ut),Pe=ft.def(vt.shared.strings,".id(",Ft,")");return E.optional(function(){ft(vt.shared.shader,".shader(",lm[A],",",Pe,",",vt.command,");")}),Pe})}return null}var q=F(Zc),H=F(Qc),L=null,P;return Ua(q)&&Ua(H)?(L=qt.program(H.id,q.id,null,I),P=Tn(function(A,j){return A.link(L)})):P=new C0(q&&q.thisDep||H&&H.thisDep,q&&q.contextDep||H&&H.contextDep,q&&q.propDep||H&&H.propDep,function(A,j){var Z=A.shared.shader,ut;q?ut=q.append(A,j):ut=j.def(Z,".",Zc);var vt;H?vt=H.append(A,j):vt=j.def(Z,".",Qc);var ft=Z+".program("+vt+","+ut;return E.optional(function(){ft+=","+A.command}),j.def(ft+")")}),{frag:q,vert:H,progVar:P,program:L}}function Co(T,S){var I=T.static,X=T.dynamic;function Q(){if(Os in I){var A=I[Os];Uf(A)?A=et.getElements(et.create(A,!0)):A&&(A=et.getElements(A),E.command(A,"invalid elements",S.commandStr));var j=Tn(function(ut,vt){if(A){var ft=ut.link(A);return ut.ELEMENTS=ft,ft}return ut.ELEMENTS=null,null});return j.value=A,j}else if(Os in X){var Z=X[Os];return K0(Z,function(ut,vt){var ft=ut.shared,Ft=ft.isBufferArgs,Pe=ft.elements,fo=ut.invoke(vt,Z),Me=vt.def("null"),Xe=vt.def(Ft,"(",fo,")"),no=ut.cond(Xe).then(Me,"=",Pe,".createStream(",fo,");").else(Me,"=",Pe,".getElements(",fo,");");return E.optional(function(){ut.assert(no.else,"!"+fo+"||"+Me,"invalid elements")}),vt.entry(no),vt.exit(ut.cond(Xe).then(Pe,".destroyStream(",Me,");")),ut.ELEMENTS=Me,Me})}return null}var F=Q();function q(){if(Cs in I){var A=I[Cs];return E.commandParameter(A,_i,"invalid primitve",S.commandStr),Tn(function(Z,ut){return _i[A]})}else if(Cs in X){var j=X[Cs];return K0(j,function(Z,ut){var vt=Z.constants.primTypes,ft=Z.invoke(ut,j);return E.optional(function(){Z.assert(ut,ft+" in "+vt,"invalid primitive, must be one of "+Object.keys(_i))}),ut.def(vt,"[",ft,"]")})}else if(F)return Ua(F)?F.value?Tn(function(Z,ut){return ut.def(Z.ELEMENTS,".primType")}):Tn(function(){return om}):new C0(F.thisDep,F.contextDep,F.propDep,function(Z,ut){var vt=Z.ELEMENTS;return ut.def(vt,"?",vt,".primType:",om)});return null}function H(A,j){if(A in I){var Z=I[A]|0;return E.command(!j||Z>=0,"invalid "+A,S.commandStr),Tn(function(vt,ft){return j&&(vt.OFFSET=Z),Z})}else if(A in X){var ut=X[A];return K0(ut,function(vt,ft){var Ft=vt.invoke(ft,ut);return j&&(vt.OFFSET=Ft,E.optional(function(){vt.assert(ft,Ft+">=0","invalid "+A)})),Ft})}else if(j&&F)return Tn(function(vt,ft){return vt.OFFSET="0",0});return null}var L=H(Rf,!0);function P(){if(Ps in I){var A=I[Ps]|0;return E.command(typeof A=="number"&&A>=0,"invalid vertex count",S.commandStr),Tn(function(){return A})}else if(Ps in X){var j=X[Ps];return K0(j,function(vt,ft){var Ft=vt.invoke(ft,j);return E.optional(function(){vt.assert(ft,"typeof "+Ft+'==="number"&&'+Ft+">=0&&"+Ft+"===("+Ft+"|0)","invalid vertex count")}),Ft})}else if(F)if(Ua(F)){if(F)return L?new C0(L.thisDep,L.contextDep,L.propDep,function(vt,ft){var Ft=ft.def(vt.ELEMENTS,".vertCount-",vt.OFFSET);return E.optional(function(){vt.assert(ft,Ft+">=0","invalid vertex offset/element buffer too small")}),Ft}):Tn(function(vt,ft){return ft.def(vt.ELEMENTS,".vertCount")});var Z=Tn(function(){return-1});return E.optional(function(){Z.MISSING=!0}),Z}else{var ut=new C0(F.thisDep||L.thisDep,F.contextDep||L.contextDep,F.propDep||L.propDep,function(vt,ft){var Ft=vt.ELEMENTS;return vt.OFFSET?ft.def(Ft,"?",Ft,".vertCount-",vt.OFFSET,":-1"):ft.def(Ft,"?",Ft,".vertCount:-1")});return E.optional(function(){ut.DYNAMIC=!0}),ut}return null}return{elements:F,primitive:q(),count:P(),instances:H(Of,!1),offset:L}}function Ln(T,S){var I=T.static,X=T.dynamic,Q={};return zt.forEach(function(F){var q=Yt(F);function H(L,P){if(F in I){var A=L(I[F]);Q[q]=Tn(function(){return A})}else if(F in X){var j=X[F];Q[q]=K0(j,function(Z,ut){return P(Z,ut,Z.invoke(ut,j))})}}switch(F){case Bv:case qv:case Iv:case Yv:case Fv:case Qv:case Wv:case Vv:case Xv:case Uv:return H(function(L){return E.commandType(L,"boolean",F,S.commandStr),L},function(L,P,A){return E.optional(function(){L.assert(P,"typeof "+A+'==="boolean"',"invalid flag "+F,L.commandStr)}),A});case Gv:return H(function(L){return E.commandParameter(L,Ii,"invalid "+F,S.commandStr),Ii[L]},function(L,P,A){var j=L.constants.compareFuncs;return E.optional(function(){L.assert(P,A+" in "+j,"invalid "+F+", must be one of "+Object.keys(Ii))}),P.def(j,"[",A,"]")});case Hv:return H(function(L){return E.command(Mn(L)&&L.length===2&&typeof L[0]=="number"&&typeof L[1]=="number"&&L[0]<=L[1],"depth range is 2d array",S.commandStr),L},function(L,P,A){E.optional(function(){L.assert(P,L.shared.isArrayLike+"("+A+")&&"+A+".length===2&&typeof "+A+'[0]==="number"&&typeof '+A+'[1]==="number"&&'+A+"[0]<="+A+"[1]","depth range must be a 2d array")});var j=P.def("+",A,"[0]"),Z=P.def("+",A,"[1]");return[j,Z]});case J1:return H(function(L){E.commandType(L,"object","blend.func",S.commandStr);var P="srcRGB"in L?L.srcRGB:L.src,A="srcAlpha"in L?L.srcAlpha:L.src,j="dstRGB"in L?L.dstRGB:L.dst,Z="dstAlpha"in L?L.dstAlpha:L.dst;return E.commandParameter(P,sa,q+".srcRGB",S.commandStr),E.commandParameter(A,sa,q+".srcAlpha",S.commandStr),E.commandParameter(j,sa,q+".dstRGB",S.commandStr),E.commandParameter(Z,sa,q+".dstAlpha",S.commandStr),E.command(cm.indexOf(P+", "+j)===-1,"unallowed blending combination (srcRGB, dstRGB) = ("+P+", "+j+")",S.commandStr),[sa[P],sa[j],sa[A],sa[Z]]},function(L,P,A){var j=L.constants.blendFuncs;E.optional(function(){L.assert(P,A+"&&typeof "+A+'==="object"',"invalid blend func, must be an object")});function Z(Me,Xe){var no=P.def('"',Me,Xe,'" in ',A,"?",A,".",Me,Xe,":",A,".",Me);return E.optional(function(){L.assert(P,no+" in "+j,"invalid "+F+"."+Me+Xe+", must be one of "+Object.keys(sa))}),no}var ut=Z("src","RGB"),vt=Z("dst","RGB");E.optional(function(){var Me=L.constants.invalidBlendCombinations;L.assert(P,Me+".indexOf("+ut+'+", "+'+vt+") === -1 ","unallowed blending combination for (srcRGB, dstRGB)")});var ft=P.def(j,"[",ut,"]"),Ft=P.def(j,"[",Z("src","Alpha"),"]"),Pe=P.def(j,"[",vt,"]"),fo=P.def(j,"[",Z("dst","Alpha"),"]");return[ft,Pe,Ft,fo]});case Z1:return H(function(L){if(typeof L=="string")return E.commandParameter(L,ct,"invalid "+F,S.commandStr),[ct[L],ct[L]];if(typeof L=="object")return E.commandParameter(L.rgb,ct,F+".rgb",S.commandStr),E.commandParameter(L.alpha,ct,F+".alpha",S.commandStr),[ct[L.rgb],ct[L.alpha]];E.commandRaise("invalid blend.equation",S.commandStr)},function(L,P,A){var j=L.constants.blendEquations,Z=P.def(),ut=P.def(),vt=L.cond("typeof ",A,'==="string"');return E.optional(function(){function ft(Ft,Pe,fo){L.assert(Ft,fo+" in "+j,"invalid "+Pe+", must be one of "+Object.keys(ct))}ft(vt.then,F,A),L.assert(vt.else,A+"&&typeof "+A+'==="object"',"invalid "+F),ft(vt.else,F+".rgb",A+".rgb"),ft(vt.else,F+".alpha",A+".alpha")}),vt.then(Z,"=",ut,"=",j,"[",A,"];"),vt.else(Z,"=",j,"[",A,".rgb];",ut,"=",j,"[",A,".alpha];"),P(vt),[Z,ut]});case Dv:return H(function(L){return E.command(Mn(L)&&L.length===4,"blend.color must be a 4d array",S.commandStr),Ee(4,function(P){return+L[P]})},function(L,P,A){return E.optional(function(){L.assert(P,L.shared.isArrayLike+"("+A+")&&"+A+".length===4","blend.color must be a 4d array")}),Ee(4,function(j){return P.def("+",A,"[",j,"]")})});case Kv:return H(function(L){return E.commandType(L,"number",q,S.commandStr),L|0},function(L,P,A){return E.optional(function(){L.assert(P,"typeof "+A+'==="number"',"invalid stencil.mask")}),P.def(A,"|0")});case au:return H(function(L){E.commandType(L,"object",q,S.commandStr);var P=L.cmp||"keep",A=L.ref||0,j="mask"in L?L.mask:-1;return E.commandParameter(P,Ii,F+".cmp",S.commandStr),E.commandType(A,"number",F+".ref",S.commandStr),E.commandType(j,"number",F+".mask",S.commandStr),[Ii[P],A,j]},function(L,P,A){var j=L.constants.compareFuncs;E.optional(function(){function ft(){L.assert(P,Array.prototype.join.call(arguments,""),"invalid stencil.func")}ft(A+"&&typeof ",A,'==="object"'),ft('!("cmp" in ',A,")||(",A,".cmp in ",j,")")});var Z=P.def('"cmp" in ',A,"?",j,"[",A,".cmp]",":",Ga),ut=P.def(A,".ref|0"),vt=P.def('"mask" in ',A,"?",A,".mask|0:-1");return[Z,ut,vt]});case su:case Yc:return H(function(L){E.commandType(L,"object",q,S.commandStr);var P=L.fail||"keep",A=L.zfail||"keep",j=L.zpass||"keep";return E.commandParameter(P,Ha,F+".fail",S.commandStr),E.commandParameter(A,Ha,F+".zfail",S.commandStr),E.commandParameter(j,Ha,F+".zpass",S.commandStr),[F===Yc?$s:al,Ha[P],Ha[A],Ha[j]]},function(L,P,A){var j=L.constants.stencilOps;E.optional(function(){L.assert(P,A+"&&typeof "+A+'==="object"',"invalid "+F)});function Z(ut){return E.optional(function(){L.assert(P,'!("'+ut+'" in '+A+")||("+A+"."+ut+" in "+j+")","invalid "+F+"."+ut+", must be one of "+Object.keys(Ha))}),P.def('"',ut,'" in ',A,"?",j,"[",A,".",ut,"]:",Ga)}return[F===Yc?$s:al,Z("fail"),Z("zfail"),Z("zpass")]});case nu:return H(function(L){E.commandType(L,"object",q,S.commandStr);var P=L.factor|0,A=L.units|0;return E.commandType(P,"number",q+".factor",S.commandStr),E.commandType(A,"number",q+".units",S.commandStr),[P,A]},function(L,P,A){E.optional(function(){L.assert(P,A+"&&typeof "+A+'==="object"',"invalid "+F)});var j=P.def(A,".factor|0"),Z=P.def(A,".units|0");return[j,Z]});case jv:return H(function(L){var P=0;return L==="front"?P=al:L==="back"&&(P=$s),E.command(!!P,q,S.commandStr),P},function(L,P,A){return E.optional(function(){L.assert(P,A+'==="front"||'+A+'==="back"',"invalid cull.face")}),P.def(A,'==="front"?',al,":",$s)});case ou:return H(function(L){return E.command(typeof L=="number"&&L>=nt.lineWidthDims[0]&&L<=nt.lineWidthDims[1],"invalid line width, must be a positive number between "+nt.lineWidthDims[0]+" and "+nt.lineWidthDims[1],S.commandStr),L},function(L,P,A){return E.optional(function(){L.assert(P,"typeof "+A+'==="number"&&'+A+">="+nt.lineWidthDims[0]+"&&"+A+"<="+nt.lineWidthDims[1],"invalid line width")}),A});case eu:return H(function(L){return E.commandParameter(L,du,q,S.commandStr),du[L]},function(L,P,A){return E.optional(function(){L.assert(P,A+'==="cw"||'+A+'==="ccw"',"invalid frontFace, must be one of cw,ccw")}),P.def(A+'==="cw"?'+nm+":"+uu)});case tu:return H(function(L){return E.command(Mn(L)&&L.length===4,"color.mask must be length 4 array",S.commandStr),L.map(function(P){return!!P})},function(L,P,A){return E.optional(function(){L.assert(P,L.shared.isArrayLike+"("+A+")&&"+A+".length===4","invalid color.mask")}),Ee(4,function(j){return"!!"+A+"["+j+"]"})});case ru:return H(function(L){E.command(typeof L=="object"&&L,q,S.commandStr);var P="value"in L?L.value:1,A=!!L.invert;return E.command(typeof P=="number"&&P>=0&&P<=1,"sample.coverage.value must be a number between 0 and 1",S.commandStr),[P,A]},function(L,P,A){E.optional(function(){L.assert(P,A+"&&typeof "+A+'==="object"',"invalid sample.coverage")});var j=P.def('"value" in ',A,"?+",A,".value:1"),Z=P.def("!!",A,".invert");return[j,Z]})}}),Q}function Vn(T,S){var I=T.static,X=T.dynamic,Q={};return Object.keys(I).forEach(function(F){var q=I[F],H;if(typeof q=="number"||typeof q=="boolean")H=Tn(function(){return q});else if(typeof q=="function"){var L=q._reglType;L==="texture2d"||L==="textureCube"?H=Tn(function(P){return P.link(q)}):L==="framebuffer"||L==="framebufferCube"?(E.command(q.color.length>0,'missing color attachment for framebuffer sent to uniform "'+F+'"',S.commandStr),H=Tn(function(P){return P.link(q.color[0])})):E.commandRaise('invalid data for uniform "'+F+'"',S.commandStr)}else Mn(q)?H=Tn(function(P){var A=P.global.def("[",Ee(q.length,function(j){return E.command(typeof q[j]=="number"||typeof q[j]=="boolean","invalid uniform "+F,P.commandStr),q[j]}),"]");return A}):E.commandRaise('invalid or missing data for uniform "'+F+'"',S.commandStr);H.value=q,Q[F]=H}),Object.keys(X).forEach(function(F){var q=X[F];Q[F]=K0(q,function(H,L){return H.invoke(L,q)})}),Q}function _o(T,S){var I=T.static,X=T.dynamic,Q={};return Object.keys(I).forEach(function(F){var q=I[F],H=z.id(F),L=new K;if(Uf(q))L.state=Oi,L.buffer=pt.getBuffer(pt.create(q,$i,!1,!0)),L.type=0;else{var P=pt.getBuffer(q);if(P)L.state=Oi,L.buffer=P,L.type=0;else if(E.command(typeof q=="object"&&q,"invalid data for attribute "+F,S.commandStr),"constant"in q){var A=q.constant;L.buffer="null",L.state=V1,typeof A=="number"?L.x=A:(E.command(Mn(A)&&A.length>0&&A.length<=4,"invalid constant for attribute "+F,S.commandStr),Ri.forEach(function(Pe,fo){fo<A.length&&(L[Pe]=A[fo])}))}else{Uf(q.buffer)?P=pt.getBuffer(pt.create(q.buffer,$i,!1,!0)):P=pt.getBuffer(q.buffer),E.command(!!P,'missing buffer for attribute "'+F+'"',S.commandStr);var j=q.offset|0;E.command(j>=0,'invalid offset for attribute "'+F+'"',S.commandStr);var Z=q.stride|0;E.command(Z>=0&&Z<256,'invalid stride for attribute "'+F+'", must be integer betweeen [0, 255]',S.commandStr);var ut=q.size|0;E.command(!("size"in q)||ut>0&&ut<=4,'invalid size for attribute "'+F+'", must be 1,2,3,4',S.commandStr);var vt=!!q.normalized,ft=0;"type"in q&&(E.commandParameter(q.type,zs,"invalid type for attribute "+F,S.commandStr),ft=zs[q.type]);var Ft=q.divisor|0;"divisor"in q&&(E.command(Ft===0||Gt,'cannot specify divisor for attribute "'+F+'", instancing not supported',S.commandStr),E.command(Ft>=0,'invalid divisor for attribute "'+F+'"',S.commandStr)),E.optional(function(){var Pe=S.commandStr,fo=["buffer","offset","divisor","normalized","type","size","stride"];Object.keys(q).forEach(function(Me){E.command(fo.indexOf(Me)>=0,'unknown parameter "'+Me+'" for attribute pointer "'+F+'" (valid parameters are '+fo+")",Pe)})}),L.buffer=P,L.state=Oi,L.size=ut,L.normalized=vt,L.type=ft||P.dtype,L.offset=j,L.stride=Z,L.divisor=Ft}}Q[F]=Tn(function(Pe,fo){var Me=Pe.attribCache;if(H in Me)return Me[H];var Xe={isStream:!1};return Object.keys(L).forEach(function(no){Xe[no]=L[no]}),L.buffer&&(Xe.buffer=Pe.link(L.buffer),Xe.type=Xe.type||Xe.buffer+".dtype"),Me[H]=Xe,Xe})}),Object.keys(X).forEach(function(F){var q=X[F];function H(L,P){var A=L.invoke(P,q),j=L.shared,Z=L.constants,ut=j.isBufferArgs,vt=j.buffer;E.optional(function(){L.assert(P,A+"&&(typeof "+A+'==="object"||typeof '+A+'==="function")&&('+ut+"("+A+")||"+vt+".getBuffer("+A+")||"+vt+".getBuffer("+A+".buffer)||"+ut+"("+A+'.buffer)||("constant" in '+A+"&&(typeof "+A+'.constant==="number"||'+j.isArrayLike+"("+A+".constant))))",'invalid dynamic attribute "'+F+'"')});var ft={isStream:P.def(!1)},Ft=new K;Ft.state=Oi,Object.keys(Ft).forEach(function(Xe){ft[Xe]=P.def(""+Ft[Xe])});var Pe=ft.buffer,fo=ft.type;P("if(",ut,"(",A,")){",ft.isStream,"=true;",Pe,"=",vt,".createStream(",$i,",",A,");",fo,"=",Pe,".dtype;","}else{",Pe,"=",vt,".getBuffer(",A,");","if(",Pe,"){",fo,"=",Pe,".dtype;",'}else if("constant" in ',A,"){",ft.state,"=",V1,";","if(typeof "+A+'.constant === "number"){',ft[Ri[0]],"=",A,".constant;",Ri.slice(1).map(function(Xe){return ft[Xe]}).join("="),"=0;","}else{",Ri.map(function(Xe,no){return ft[Xe]+"="+A+".constant.length>"+no+"?"+A+".constant["+no+"]:0;"}).join(""),"}}else{","if(",ut,"(",A,".buffer)){",Pe,"=",vt,".createStream(",$i,",",A,".buffer);","}else{",Pe,"=",vt,".getBuffer(",A,".buffer);","}",fo,'="type" in ',A,"?",Z.glTypes,"[",A,".type]:",Pe,".dtype;",ft.normalized,"=!!",A,".normalized;");function Me(Xe){P(ft[Xe],"=",A,".",Xe,"|0;")}return Me("size"),Me("offset"),Me("stride"),Me("divisor"),P("}}"),P.exit("if(",ft.isStream,"){",vt,".destroyStream(",Pe,");","}"),ft}Q[F]=K0(q,H)}),Q}function In(T,S){var I=T.static,X=T.dynamic;if(Jc in I){var Q=I[Jc];return Q!==null&&Ht.getVAO(Q)===null&&(Q=Ht.createVAO(Q)),Tn(function(q){return q.link(Ht.getVAO(Q))})}else if(Jc in X){var F=X[Jc];return K0(F,function(q,H){var L=q.invoke(H,F);return H.def(q.shared.vao+".getVAO("+L+")")})}return null}function on(T){var S=T.static,I=T.dynamic,X={};return Object.keys(S).forEach(function(Q){var F=S[Q];X[Q]=Tn(function(q,H){return typeof F=="number"||typeof F=="boolean"?""+F:q.link(F)})}),Object.keys(I).forEach(function(Q){var F=I[Q];X[Q]=K0(F,function(q,H){return q.invoke(H,F)})}),X}function Nn(T,S,I,X,Q){var F=T.static,q=T.dynamic;E.optional(function(){var Me=[Rs,Qc,Zc,Os,Cs,Rf,Ps,Of,Kc,Jc].concat(zt);function Xe(no){Object.keys(no).forEach(function(Po){E.command(Me.indexOf(Po)>=0,'unknown parameter "'+Po+'"',Q.commandStr)})}Xe(F),Xe(q)});var H=oo(T,S),L=_e(T,Q),P=mo(T,L,Q),A=Co(T,Q),j=Ln(T,Q),Z=uo(T,Q,H);function ut(Me){var Xe=P[Me];Xe&&(j[Me]=Xe)}ut(ba),ut(Yt(Nf));var vt=Object.keys(j).length>0,ft={framebuffer:L,draw:A,shader:Z,state:j,dirty:vt,scopeVAO:null,drawVAO:null,useVAO:!1,attributes:{}};if(ft.profile=co(T,Q),ft.uniforms=Vn(I,Q),ft.drawVAO=ft.scopeVAO=In(T,Q),!ft.drawVAO&&Z.program&&!H&&C.angle_instanced_arrays){var Ft=!0,Pe=Z.program.attributes.map(function(Me){var Xe=S.static[Me];return Ft=Ft&&!!Xe,Xe});if(Ft&&Pe.length>0){var fo=Ht.getVAO(Ht.createVAO(Pe));ft.drawVAO=new C0(null,null,null,function(Me,Xe){return Me.link(fo)}),ft.useVAO=!0}}return H?ft.useVAO=!0:ft.attributes=_o(S,Q),ft.context=on(X,Q),ft}function qn(T,S,I){var X=T.shared,Q=X.context,F=T.scope();Object.keys(I).forEach(function(q){S.save(Q,"."+q);var H=I[q],L=H.append(T,S);Array.isArray(L)?F(Q,".",q,"=[",L.join(),"];"):F(Q,".",q,"=",L,";")}),S(F)}function Dn(T,S,I,X){var Q=T.shared,F=Q.gl,q=Q.framebuffer,H;ae&&(H=S.def(Q.extensions,".webgl_draw_buffers"));var L=T.constants,P=L.drawBuffer,A=L.backBuffer,j;I?j=I.append(T,S):j=S.def(q,".next"),X||S("if(",j,"!==",q,".cur){"),S("if(",j,"){",F,".bindFramebuffer(",im,",",j,".framebuffer);"),ae&&S(H,".drawBuffersWEBGL(",P,"[",j,".colorAttachments.length]);"),S("}else{",F,".bindFramebuffer(",im,",null);"),ae&&S(H,".drawBuffersWEBGL(",A,");"),S("}",q,".cur=",j,";"),X||S("}")}function r0(T,S,I){var X=T.shared,Q=X.gl,F=T.current,q=T.next,H=X.current,L=X.next,P=T.cond(H,".dirty");zt.forEach(function(A){var j=Yt(A);if(!(j in I.state)){var Z,ut;if(j in q){Z=q[j],ut=F[j];var vt=Ee(_t[j].length,function(Ft){return P.def(Z,"[",Ft,"]")});P(T.cond(vt.map(function(Ft,Pe){return Ft+"!=="+ut+"["+Pe+"]"}).join("||")).then(Q,".",kt[j],"(",vt,");",vt.map(function(Ft,Pe){return ut+"["+Pe+"]="+Ft}).join(";"),";"))}else{Z=P.def(L,".",j);var ft=T.cond(Z,"!==",H,".",j);P(ft),j in Xt?ft(T.cond(Z).then(Q,".enable(",Xt[j],");").else(Q,".disable(",Xt[j],");"),H,".",j,"=",Z,";"):ft(Q,".",kt[j],"(",Z,");",H,".",j,"=",Z,";")}}}),Object.keys(I.state).length===0&&P(H,".dirty=false;"),S(P)}function p0(T,S,I,X){var Q=T.shared,F=T.current,q=Q.current,H=Q.gl;fm(Object.keys(I)).forEach(function(L){var P=I[L];if(!(X&&!X(P))){var A=P.append(T,S);if(Xt[L]){var j=Xt[L];Ua(P)?A?S(H,".enable(",j,");"):S(H,".disable(",j,");"):S(T.cond(A).then(H,".enable(",j,");").else(H,".disable(",j,");")),S(q,".",L,"=",A,";")}else if(Mn(A)){var Z=F[L];S(H,".",kt[L],"(",A,");",A.map(function(ut,vt){return Z+"["+vt+"]="+ut}).join(";"),";")}else S(H,".",kt[L],"(",A,");",q,".",L,"=",A,";")}})}function kn(T,S){Gt&&(T.instancing=S.def(T.shared.extensions,".angle_instanced_arrays"))}function lo(T,S,I,X,Q){var F=T.shared,q=T.stats,H=F.current,L=F.timer,P=I.profile;function A(){return typeof performance=="undefined"?"Date.now()":"performance.now()"}var j,Z;function ut(Me){j=S.def(),Me(j,"=",A(),";"),typeof Q=="string"?Me(q,".count+=",Q,";"):Me(q,".count++;"),Rt&&(X?(Z=S.def(),Me(Z,"=",L,".getNumPendingQueries();")):Me(L,".beginQuery(",q,");"))}function vt(Me){Me(q,".cpuTime+=",A(),"-",j,";"),Rt&&(X?Me(L,".pushScopeStats(",Z,",",L,".getNumPendingQueries(),",q,");"):Me(L,".endQuery();"))}function ft(Me){var Xe=S.def(H,".profile");S(H,".profile=",Me,";"),S.exit(H,".profile=",Xe,";")}var Ft;if(P){if(Ua(P)){P.enable?(ut(S),vt(S.exit),ft("true")):ft("false");return}Ft=P.append(T,S),ft(Ft)}else Ft=S.def(H,".profile");var Pe=T.block();ut(Pe),S("if(",Ft,"){",Pe,"}");var fo=T.block();vt(fo),S.exit("if(",Ft,"){",fo,"}")}function v0(T,S,I,X,Q){var F=T.shared;function q(L){switch(L){case Cf:case If:case Ff:return 2;case Pf:case qf:case Gf:return 3;case $f:case Df:case Hf:return 4;default:return 1}}function H(L,P,A){var j=F.gl,Z=S.def(L,".location"),ut=S.def(F.attributes,"[",Z,"]"),vt=A.state,ft=A.buffer,Ft=[A.x,A.y,A.z,A.w],Pe=["buffer","normalized","offset","stride"];function fo(){S("if(!",ut,".buffer){",j,".enableVertexAttribArray(",Z,");}");var Xe=A.type,no;if(A.size?no=S.def(A.size,"||",P):no=P,S("if(",ut,".type!==",Xe,"||",ut,".size!==",no,"||",Pe.map(function(gn){return ut+"."+gn+"!=="+A[gn]}).join("||"),"){",j,".bindBuffer(",$i,",",ft,".buffer);",j,".vertexAttribPointer(",[Z,no,Xe,A.normalized,A.stride,A.offset],");",ut,".type=",Xe,";",ut,".size=",no,";",Pe.map(function(gn){return ut+"."+gn+"="+A[gn]+";"}).join(""),"}"),Gt){var Po=A.divisor;S("if(",ut,".divisor!==",Po,"){",T.instancing,".vertexAttribDivisorANGLE(",[Z,Po],");",ut,".divisor=",Po,";}")}}function Me(){S("if(",ut,".buffer){",j,".disableVertexAttribArray(",Z,");",ut,".buffer=null;","}if(",Ri.map(function(Xe,no){return ut+"."+Xe+"!=="+Ft[no]}).join("||"),"){",j,".vertexAttrib4f(",Z,",",Ft,");",Ri.map(function(Xe,no){return ut+"."+Xe+"="+Ft[no]+";"}).join(""),"}")}vt===Oi?fo():vt===V1?Me():(S("if(",vt,"===",Oi,"){"),fo(),S("}else{"),Me(),S("}"))}X.forEach(function(L){var P=L.name,A=I.attributes[P],j;if(A){if(!Q(A))return;j=A.append(T,S)}else{if(!Q(hm))return;var Z=T.scopeAttrib(P);E.optional(function(){T.assert(S,Z+".state","missing attribute "+P)}),j={},Object.keys(new K).forEach(function(ut){j[ut]=S.def(Z,".",ut)})}H(T.link(L),q(L.info.type),j)})}function Do(T,S,I,X,Q){for(var F=T.shared,q=F.gl,H,L=0;L<X.length;++L){var P=X[L],A=P.name,j=P.info.type,Z=I.uniforms[A],ut=T.link(P),vt=ut+".location",ft;if(Z){if(!Q(Z))continue;if(Ua(Z)){var Ft=Z.value;if(E.command(Ft!==null&&typeof Ft!="undefined",'missing uniform "'+A+'"',T.commandStr),j===nl||j===rl){E.command(typeof Ft=="function"&&(j===nl&&(Ft._reglType==="texture2d"||Ft._reglType==="framebuffer")||j===rl&&(Ft._reglType==="textureCube"||Ft._reglType==="framebufferCube")),"invalid texture for uniform "+A,T.commandStr);var Pe=T.link(Ft._texture||Ft.color[0]._texture);S(q,".uniform1i(",vt,",",Pe+".bind());"),S.exit(Pe,".unbind();")}else if(j===tl||j===el||j===ol){E.optional(function(){E.command(Mn(Ft),"invalid matrix for uniform "+A,T.commandStr),E.command(j===tl&&Ft.length===4||j===el&&Ft.length===9||j===ol&&Ft.length===16,"invalid length for matrix uniform "+A,T.commandStr)});var fo=T.global.def("new Float32Array(["+Array.prototype.slice.call(Ft)+"])"),Me=2;j===el?Me=3:j===ol&&(Me=4),S(q,".uniformMatrix",Me,"fv(",vt,",false,",fo,");")}else{switch(j){case lu:E.commandType(Ft,"number","uniform "+A,T.commandStr),H="1f";break;case Cf:E.command(Mn(Ft)&&Ft.length===2,"uniform "+A,T.commandStr),H="2f";break;case Pf:E.command(Mn(Ft)&&Ft.length===3,"uniform "+A,T.commandStr),H="3f";break;case $f:E.command(Mn(Ft)&&Ft.length===4,"uniform "+A,T.commandStr),H="4f";break;case hu:E.commandType(Ft,"boolean","uniform "+A,T.commandStr),H="1i";break;case fu:E.commandType(Ft,"number","uniform "+A,T.commandStr),H="1i";break;case Ff:E.command(Mn(Ft)&&Ft.length===2,"uniform "+A,T.commandStr),H="2i";break;case If:E.command(Mn(Ft)&&Ft.length===2,"uniform "+A,T.commandStr),H="2i";break;case Gf:E.command(Mn(Ft)&&Ft.length===3,"uniform "+A,T.commandStr),H="3i";break;case qf:E.command(Mn(Ft)&&Ft.length===3,"uniform "+A,T.commandStr),H="3i";break;case Hf:E.command(Mn(Ft)&&Ft.length===4,"uniform "+A,T.commandStr),H="4i";break;case Df:E.command(Mn(Ft)&&Ft.length===4,"uniform "+A,T.commandStr),H="4i";break}S(q,".uniform",H,"(",vt,",",Mn(Ft)?Array.prototype.slice.call(Ft):Ft,");")}continue}else ft=Z.append(T,S)}else{if(!Q(hm))continue;ft=S.def(F.uniforms,"[",z.id(A),"]")}j===nl?(E(!Array.isArray(ft),"must specify a scalar prop for textures"),S("if(",ft,"&&",ft,'._reglType==="framebuffer"){',ft,"=",ft,".color[0];","}")):j===rl&&(E(!Array.isArray(ft),"must specify a scalar prop for cube maps"),S("if(",ft,"&&",ft,'._reglType==="framebufferCube"){',ft,"=",ft,".color[0];","}")),E.optional(function(){function P0(Ur,xm){T.assert(S,Ur,'bad data or missing for uniform "'+A+'".  '+xm)}function pu(Ur){E(!Array.isArray(ft),"must not specify an array type for uniform"),P0("typeof "+ft+'==="'+Ur+'"',"invalid type, expected "+Ur)}function kr(Ur,xm){Array.isArray(ft)?E(ft.length===Ur,"must have length "+Ur):P0(F.isArrayLike+"("+ft+")&&"+ft+".length==="+Ur,"invalid vector, should have length "+Ur,T.commandStr)}function gm(Ur){E(!Array.isArray(ft),"must not specify a value type"),P0("typeof "+ft+'==="function"&&'+ft+'._reglType==="texture'+(Ur===em?"2d":"Cube")+'"',"invalid texture type",T.commandStr)}switch(j){case fu:pu("number");break;case If:kr(2,"number");break;case qf:kr(3,"number");break;case Df:kr(4,"number");break;case lu:pu("number");break;case Cf:kr(2,"number");break;case Pf:kr(3,"number");break;case $f:kr(4,"number");break;case hu:pu("boolean");break;case Ff:kr(2,"boolean");break;case Gf:kr(3,"boolean");break;case Hf:kr(4,"boolean");break;case tl:kr(4,"number");break;case el:kr(9,"number");break;case ol:kr(16,"number");break;case nl:gm(em);break;case rl:gm(i4);break}});var Xe=1;switch(j){case nl:case rl:var no=S.def(ft,"._texture");S(q,".uniform1i(",vt,",",no,".bind());"),S.exit(no,".unbind();");continue;case fu:case hu:H="1i";break;case If:case Ff:H="2i",Xe=2;break;case qf:case Gf:H="3i",Xe=3;break;case Df:case Hf:H="4i",Xe=4;break;case lu:H="1f";break;case Cf:H="2f",Xe=2;break;case Pf:H="3f",Xe=3;break;case $f:H="4f",Xe=4;break;case tl:H="Matrix2fv";break;case el:H="Matrix3fv";break;case ol:H="Matrix4fv";break}if(S(q,".uniform",H,"(",vt,","),H.charAt(0)==="M"){var Po=Math.pow(j-tl+2,2),gn=T.global.def("new Float32Array(",Po,")");Array.isArray(ft)?S("false,(",Ee(Po,function(P0){return gn+"["+P0+"]="+ft[P0]}),",",gn,")"):S("false,(Array.isArray(",ft,")||",ft," instanceof Float32Array)?",ft,":(",Ee(Po,function(P0){return gn+"["+P0+"]="+ft+"["+P0+"]"}),",",gn,")")}else Xe>1?S(Ee(Xe,function(P0){return Array.isArray(ft)?ft[P0]:ft+"["+P0+"]"})):(E(!Array.isArray(ft),"uniform value must not be an array"),S(ft));S(");")}}function Ve(T,S,I,X){var Q=T.shared,F=Q.gl,q=Q.draw,H=X.draw;function L(){var no=H.elements,Po,gn=S;return no?((no.contextDep&&X.contextDynamic||no.propDep)&&(gn=I),Po=no.append(T,gn)):Po=gn.def(q,".",Os),Po&&gn("if("+Po+")"+F+".bindBuffer("+r4+","+Po+".buffer.buffer);"),Po}function P(){var no=H.count,Po,gn=S;return no?((no.contextDep&&X.contextDynamic||no.propDep)&&(gn=I),Po=no.append(T,gn),E.optional(function(){no.MISSING&&T.assert(S,"false","missing vertex count"),no.DYNAMIC&&T.assert(gn,Po+">=0","missing vertex count")})):(Po=gn.def(q,".",Ps),E.optional(function(){T.assert(gn,Po+">=0","missing vertex count")})),Po}var A=L();function j(no){var Po=H[no];return Po?Po.contextDep&&X.contextDynamic||Po.propDep?Po.append(T,I):Po.append(T,S):S.def(q,".",no)}var Z=j(Cs),ut=j(Rf),vt=P();if(typeof vt=="number"){if(vt===0)return}else I("if(",vt,"){"),I.exit("}");var ft,Ft;Gt&&(ft=j(Of),Ft=T.instancing);var Pe=A+".type",fo=H.elements&&Ua(H.elements);function Me(){function no(){I(Ft,".drawElementsInstancedANGLE(",[Z,vt,Pe,ut+"<<(("+Pe+"-"+Cv+")>>1)",ft],");")}function Po(){I(Ft,".drawArraysInstancedANGLE(",[Z,ut,vt,ft],");")}A?fo?no():(I("if(",A,"){"),no(),I("}else{"),Po(),I("}")):Po()}function Xe(){function no(){I(F+".drawElements("+[Z,vt,Pe,ut+"<<(("+Pe+"-"+Cv+")>>1)"]+");")}function Po(){I(F+".drawArrays("+[Z,ut,vt]+");")}A?fo?no():(I("if(",A,"){"),no(),I("}else{"),Po(),I("}")):Po()}Gt&&(typeof ft!="number"||ft>=0)?typeof ft=="string"?(I("if(",ft,">0){"),Me(),I("}else if(",ft,"<0){"),Xe(),I("}")):Me():Xe()}function bo(T,S,I,X,Q){var F=Ze(),q=F.proc("body",Q);return E.optional(function(){F.commandStr=S.commandStr,F.command=F.link(S.commandStr)}),Gt&&(F.instancing=q.def(F.shared.extensions,".angle_instanced_arrays")),T(F,q,I,X),F.compile().body}function Ao(T,S,I,X){kn(T,S),I.useVAO?I.drawVAO?S(T.shared.vao,".setVAO(",I.drawVAO.append(T,S),");"):S(T.shared.vao,".setVAO(",T.shared.vao,".targetVAO);"):(S(T.shared.vao,".setVAO(null);"),v0(T,S,I,X.attributes,function(){return!0})),Do(T,S,I,X.uniforms,function(){return!0}),Ve(T,S,S,I)}function Sn(T,S){var I=T.proc("draw",1);kn(T,I),qn(T,I,S.context),Dn(T,I,S.framebuffer),r0(T,I,S),p0(T,I,S.state),lo(T,I,S,!1,!0);var X=S.shader.progVar.append(T,I);if(I(T.shared.gl,".useProgram(",X,".program);"),S.shader.program)Ao(T,I,S,S.shader.program);else{I(T.shared.vao,".setVAO(null);");var Q=T.global.def("{}"),F=I.def(X,".id"),q=I.def(Q,"[",F,"]");I(T.cond(q).then(q,".call(this,a0);").else(q,"=",Q,"[",F,"]=",T.link(function(H){return bo(Ao,T,S,H,1)}),"(",X,");",q,".call(this,a0);"))}Object.keys(S.state).length>0&&I(T.shared.current,".dirty=true;")}function ia(T,S,I,X){T.batchId="a1",kn(T,S);function Q(){return!0}v0(T,S,I,X.attributes,Q),Do(T,S,I,X.uniforms,Q),Ve(T,S,S,I)}function Is(T,S,I,X){kn(T,S);var Q=I.contextDep,F=S.def(),q="a0",H="a1",L=S.def();T.shared.props=L,T.batchId=F;var P=T.scope(),A=T.scope();S(P.entry,"for(",F,"=0;",F,"<",H,";++",F,"){",L,"=",q,"[",F,"];",A,"}",P.exit);function j(Pe){return Pe.contextDep&&Q||Pe.propDep}function Z(Pe){return!j(Pe)}if(I.needsContext&&qn(T,A,I.context),I.needsFramebuffer&&Dn(T,A,I.framebuffer),p0(T,A,I.state,j),I.profile&&j(I.profile)&&lo(T,A,I,!1,!0),X)I.useVAO?I.drawVAO?j(I.drawVAO)?A(T.shared.vao,".setVAO(",I.drawVAO.append(T,A),");"):P(T.shared.vao,".setVAO(",I.drawVAO.append(T,P),");"):P(T.shared.vao,".setVAO(",T.shared.vao,".targetVAO);"):(P(T.shared.vao,".setVAO(null);"),v0(T,P,I,X.attributes,Z),v0(T,A,I,X.attributes,j)),Do(T,P,I,X.uniforms,Z),Do(T,A,I,X.uniforms,j),Ve(T,P,A,I);else{var ut=T.global.def("{}"),vt=I.shader.progVar.append(T,A),ft=A.def(vt,".id"),Ft=A.def(ut,"[",ft,"]");A(T.shared.gl,".useProgram(",vt,".program);","if(!",Ft,"){",Ft,"=",ut,"[",ft,"]=",T.link(function(Pe){return bo(ia,T,I,Pe,2)}),"(",vt,");}",Ft,".call(this,a0[",F,"],",F,");")}}function R(T,S){var I=T.proc("batch",2);T.batchId="0",kn(T,I);var X=!1,Q=!0;Object.keys(S.context).forEach(function(ut){X=X||S.context[ut].propDep}),X||(qn(T,I,S.context),Q=!1);var F=S.framebuffer,q=!1;F?(F.propDep?X=q=!0:F.contextDep&&X&&(q=!0),q||Dn(T,I,F)):Dn(T,I,null),S.state.viewport&&S.state.viewport.propDep&&(X=!0);function H(ut){return ut.contextDep&&X||ut.propDep}r0(T,I,S),p0(T,I,S.state,function(ut){return!H(ut)}),(!S.profile||!H(S.profile))&&lo(T,I,S,!1,"a1"),S.contextDep=X,S.needsContext=Q,S.needsFramebuffer=q;var L=S.shader.progVar;if(L.contextDep&&X||L.propDep)Is(T,I,S,null);else{var P=L.append(T,I);if(I(T.shared.gl,".useProgram(",P,".program);"),S.shader.program)Is(T,I,S,S.shader.program);else{I(T.shared.vao,".setVAO(null);");var A=T.global.def("{}"),j=I.def(P,".id"),Z=I.def(A,"[",j,"]");I(T.cond(Z).then(Z,".call(this,a0,a1);").else(Z,"=",A,"[",j,"]=",T.link(function(ut){return bo(Is,T,S,ut,2)}),"(",P,");",Z,".call(this,a0,a1);"))}}Object.keys(S.state).length>0&&I(T.shared.current,".dirty=true;")}function rt(T,S){var I=T.proc("scope",3);T.batchId="a2";var X=T.shared,Q=X.current;qn(T,I,S.context),S.framebuffer&&S.framebuffer.append(T,I),fm(Object.keys(S.state)).forEach(function(q){var H=S.state[q],L=H.append(T,I);Mn(L)?L.forEach(function(P,A){I.set(T.next[q],"["+A+"]",P)}):I.set(X.next,"."+q,L)}),lo(T,I,S,!0,!0),[Os,Rf,Ps,Of,Cs].forEach(function(q){var H=S.draw[q];H&&I.set(X.draw,"."+q,""+H.append(T,I))}),Object.keys(S.uniforms).forEach(function(q){var H=S.uniforms[q].append(T,I);Array.isArray(H)&&(H="["+H.join()+"]"),I.set(X.uniforms,"["+z.id(q)+"]",H)}),Object.keys(S.attributes).forEach(function(q){var H=S.attributes[q].append(T,I),L=T.scopeAttrib(q);Object.keys(new K).forEach(function(P){I.set(L,"."+P,H[P])})}),S.scopeVAO&&I.set(X.vao,".targetVAO",S.scopeVAO.append(T,I));function F(q){var H=S.shader[q];H&&I.set(X.shader,"."+q,H.append(T,I))}F(Qc),F(Zc),Object.keys(S.state).length>0&&(I(Q,".dirty=true;"),I.exit(Q,".dirty=true;")),I("a1(",T.shared.context,",a0,",T.batchId,");")}function J(T){if(!(typeof T!="object"||Mn(T))){for(var S=Object.keys(T),I=0;I<S.length;++I)if(yt.isDynamic(T[S[I]]))return!0;return!1}}function pe(T,S,I){var X=S.static[I];if(!X||!J(X))return;var Q=T.global,F=Object.keys(X),q=!1,H=!1,L=!1,P=T.global.def("{}");F.forEach(function(j){var Z=X[j];if(yt.isDynamic(Z)){typeof Z=="function"&&(Z=X[j]=yt.unbox(Z));var ut=K0(Z,null);q=q||ut.thisDep,L=L||ut.propDep,H=H||ut.contextDep}else{switch(Q(P,".",j,"="),typeof Z){case"number":Q(Z);break;case"string":Q('"',Z,'"');break;case"object":Array.isArray(Z)&&Q("[",Z.join(),"]");break;default:Q(T.link(Z));break}Q(";")}});function A(j,Z){F.forEach(function(ut){var vt=X[ut];if(yt.isDynamic(vt)){var ft=j.invoke(Z,vt);Z(P,".",ut,"=",ft,";")}})}S.dynamic[I]=new yt.DynamicVariable(Lf,{thisDep:q,contextDep:H,propDep:L,ref:P,append:A}),delete S.static[I]}function go(T,S,I,X,Q){var F=Ze();F.stats=F.link(Q),Object.keys(S.static).forEach(function(H){pe(F,S,H)}),n4.forEach(function(H){pe(F,T,H)});var q=Nn(T,S,I,X,F);return Sn(F,q),rt(F,q),R(F,q),e(F.compile(),{destroy:function(){q.shader.program.destroy()}})}return{next:le,current:_t,procs:function(){var T=Ze(),S=T.proc("poll"),I=T.proc("refresh"),X=T.block();S(X),I(X);var Q=T.shared,F=Q.gl,q=Q.next,H=Q.current;X(H,".dirty=false;"),Dn(T,S),Dn(T,I,null,!0);var L;Gt&&(L=T.link(Gt)),C.oes_vertex_array_object&&I(T.link(C.oes_vertex_array_object),".bindVertexArrayOES(null);");for(var P=0;P<nt.maxAttributes;++P){var A=I.def(Q.attributes,"[",P,"]"),j=T.cond(A,".buffer");j.then(F,".enableVertexAttribArray(",P,");",F,".bindBuffer(",$i,",",A,".buffer.buffer);",F,".vertexAttribPointer(",P,",",A,".size,",A,".type,",A,".normalized,",A,".stride,",A,".offset);").else(F,".disableVertexAttribArray(",P,");",F,".vertexAttrib4f(",P,",",A,".x,",A,".y,",A,".z,",A,".w);",A,".buffer=null;"),I(j),Gt&&I(L,".vertexAttribDivisorANGLE(",P,",",A,".divisor);")}return I(T.shared.vao,".currentVAO=null;",T.shared.vao,".setVAO(",T.shared.vao,".targetVAO);"),Object.keys(Xt).forEach(function(Z){var ut=Xt[Z],vt=X.def(q,".",Z),ft=T.block();ft("if(",vt,"){",F,".enable(",ut,")}else{",F,".disable(",ut,")}",H,".",Z,"=",vt,";"),I(ft),S("if(",vt,"!==",H,".",Z,"){",ft,"}")}),Object.keys(kt).forEach(function(Z){var ut=kt[Z],vt=_t[Z],ft,Ft,Pe=T.block();if(Pe(F,".",ut,"("),Mn(vt)){var fo=vt.length;ft=T.global.def(q,".",Z),Ft=T.global.def(H,".",Z),Pe(Ee(fo,function(Me){return ft+"["+Me+"]"}),");",Ee(fo,function(Me){return Ft+"["+Me+"]="+ft+"["+Me+"];"}).join("")),S("if(",Ee(fo,function(Me){return ft+"["+Me+"]!=="+Ft+"["+Me+"]"}).join("||"),"){",Pe,"}")}else ft=X.def(q,".",Z),Ft=X.def(H,".",Z),Pe(ft,");",H,".",Z,"=",ft,";"),S("if(",ft,"!==",Ft,"){",Pe,"}");I(Pe)}),T.compile()}(),compile:go}}function M4(){return{vaoCount:0,bufferCount:0,elementsCount:0,framebufferCount:0,shaderCount:0,textureCount:0,cubeCount:0,renderbufferCount:0,maxTextureUnits:0}}var k4=34918,S4=34919,um=35007,E4=function(b,z){if(!z.ext_disjoint_timer_query)return null;var C=[];function nt(){return C.pop()||z.ext_disjoint_timer_query.createQueryEXT()}function pt(Gt){C.push(Gt)}var et=[];function it(Gt){var ae=nt();z.ext_disjoint_timer_query.beginQueryEXT(um,ae),et.push(ae),Rt(et.length-1,et.length,Gt)}function Nt(){z.ext_disjoint_timer_query.endQueryEXT(um)}function It(){this.startQueryIndex=-1,this.endQueryIndex=-1,this.sum=0,this.stats=null}var Ht=[];function qt(){return Ht.pop()||new It}function Wt(Gt){Ht.push(Gt)}var Zt=[];function Rt(Gt,ae,_t){var le=qt();le.startQueryIndex=Gt,le.endQueryIndex=ae,le.sum=0,le.stats=_t,Zt.push(le)}var Vt=[],K=[];function ct(){var Gt,ae,_t=et.length;if(_t!==0){K.length=Math.max(K.length,_t+1),Vt.length=Math.max(Vt.length,_t+1),Vt[0]=0,K[0]=0;var le=0;for(Gt=0,ae=0;ae<et.length;++ae){var zt=et[ae];z.ext_disjoint_timer_query.getQueryObjectEXT(zt,S4)?(le+=z.ext_disjoint_timer_query.getQueryObjectEXT(zt,k4),pt(zt)):et[Gt++]=zt,Vt[ae+1]=le,K[ae+1]=Gt}for(et.length=Gt,Gt=0,ae=0;ae<Zt.length;++ae){var Xt=Zt[ae],kt=Xt.startQueryIndex,Yt=Xt.endQueryIndex;Xt.sum+=Vt[Yt]-Vt[kt];var Fe=K[kt],to=K[Yt];to===Fe?(Xt.stats.gpuTime+=Xt.sum/1e6,Wt(Xt)):(Xt.startQueryIndex=Fe,Xt.endQueryIndex=to,Zt[Gt++]=Xt)}Zt.length=Gt}}return{beginQuery:it,endQuery:Nt,pushScopeStats:Rt,update:ct,getNumPendingQueries:function(){return et.length},clear:function(){C.push.apply(C,et);for(var Gt=0;Gt<C.length;Gt++)z.ext_disjoint_timer_query.deleteQueryEXT(C[Gt]);et.length=0,C.length=0},restore:function(){et.length=0,C.length=0}}},z4=16384,A4=256,T4=1024,L4=34962,dm="webglcontextlost",pm="webglcontextrestored",vm=1,N4=2,R4=3;function mm(b,z){for(var C=0;C<b.length;++C)if(b[C]===z)return C;return-1}function O4(b){var z=ge(b);if(!z)return null;var C=z.gl,nt=C.getContextAttributes(),pt=C.isContextLost(),et=se(C,z);if(!et)return null;var it=ne(),Nt=M4(),It=et.extensions,Ht=E4(C,It),qt=Et(),Wt=C.drawingBufferWidth,Zt=C.drawingBufferHeight,Rt={tick:0,time:0,viewportWidth:Wt,viewportHeight:Zt,framebufferWidth:Wt,framebufferHeight:Zt,drawingBufferWidth:Wt,drawingBufferHeight:Zt,pixelRatio:z.pixelRatio},Vt={},K={elements:null,primitive:4,count:-1,offset:0,instances:-1},ct=xb(C,It),Gt=Cb(C,Nt,z,_t),ae=Ww(C,It,ct,Nt,Gt);function _t(Ve){return ae.destroyBuffer(Ve)}var le=Wb(C,It,Gt,Nt),zt=Kw(C,it,Nt,z),Xt=Mw(C,It,ct,function(){Fe.procs.poll()},Rt,Nt,z),kt=kw(C,It,ct,Nt,z),Yt=Bw(C,It,ct,Xt,kt,Nt),Fe=_4(C,it,It,ct,Gt,le,Xt,Yt,Vt,ae,zt,K,Rt,Ht,z),to=Jw(C,Yt,Fe.procs.poll,Rt,nt,It,ct),Jt=Fe.next,Bt=C.canvas,bt=[],Ze=[],co=[],_e=[z.onDestroy],mo=null;function oo(){if(bt.length===0){Ht&&Ht.update(),mo=null;return}mo=At.next(oo),p0();for(var Ve=bt.length-1;Ve>=0;--Ve){var bo=bt[Ve];bo&&bo(Rt,null,0)}C.flush(),Ht&&Ht.update()}function uo(){!mo&&bt.length>0&&(mo=At.next(oo))}function Co(){mo&&(At.cancel(oo),mo=null)}function Ln(Ve){Ve.preventDefault(),pt=!0,Co(),Ze.forEach(function(bo){bo()})}function Vn(Ve){C.getError(),pt=!1,et.restore(),zt.restore(),Gt.restore(),Xt.restore(),kt.restore(),Yt.restore(),ae.restore(),Ht&&Ht.restore(),Fe.procs.refresh(),uo(),co.forEach(function(bo){bo()})}Bt&&(Bt.addEventListener(dm,Ln,!1),Bt.addEventListener(pm,Vn,!1));function _o(){bt.length=0,Co(),Bt&&(Bt.removeEventListener(dm,Ln),Bt.removeEventListener(pm,Vn)),zt.clear(),Yt.clear(),kt.clear(),Xt.clear(),le.clear(),Gt.clear(),ae.clear(),Ht&&Ht.clear(),_e.forEach(function(Ve){Ve()})}function In(Ve){E(!!Ve,"invalid args to regl({...})"),E.type(Ve,"object","invalid args to regl({...})");function bo(Q){var F=e({},Q);delete F.uniforms,delete F.attributes,delete F.context,delete F.vao,"stencil"in F&&F.stencil.op&&(F.stencil.opBack=F.stencil.opFront=F.stencil.op,delete F.stencil.op);function q(H){if(H in F){var L=F[H];delete F[H],Object.keys(L).forEach(function(P){F[H+"."+P]=L[P]})}}return q("blend"),q("depth"),q("cull"),q("stencil"),q("polygonOffset"),q("scissor"),q("sample"),"vao"in Q&&(F.vao=Q.vao),F}function Ao(Q,F){var q={},H={};return Object.keys(Q).forEach(function(L){var P=Q[L];if(yt.isDynamic(P)){H[L]=yt.unbox(P,L);return}else if(F&&Array.isArray(P)){for(var A=0;A<P.length;++A)if(yt.isDynamic(P[A])){H[L]=yt.unbox(P,L);return}}q[L]=P}),{dynamic:H,static:q}}var Sn=Ao(Ve.context||{},!0),ia=Ao(Ve.uniforms||{},!0),Is=Ao(Ve.attributes||{},!1),R=Ao(bo(Ve),!1),rt={gpuTime:0,cpuTime:0,count:0},J=Fe.compile(R,Is,ia,Sn,rt),pe=J.draw,go=J.batch,T=J.scope,S=[];function I(Q){for(;S.length<Q;)S.push(null);return S}function X(Q,F){var q;if(pt&&E.raise("context lost"),typeof Q=="function")return T.call(this,null,Q,0);if(typeof F=="function")if(typeof Q=="number")for(q=0;q<Q;++q)T.call(this,null,F,q);else if(Array.isArray(Q))for(q=0;q<Q.length;++q)T.call(this,Q[q],F,q);else return T.call(this,Q,F,0);else if(typeof Q=="number"){if(Q>0)return go.call(this,I(Q|0),Q|0)}else if(Array.isArray(Q)){if(Q.length)return go.call(this,Q,Q.length)}else return pe.call(this,Q)}return e(X,{stats:rt,destroy:function(){J.destroy()}})}var on=Yt.setFBO=In({framebuffer:yt.define.call(null,vm,"framebuffer")});function Nn(Ve,bo){var Ao=0;Fe.procs.poll();var Sn=bo.color;Sn&&(C.clearColor(+Sn[0]||0,+Sn[1]||0,+Sn[2]||0,+Sn[3]||0),Ao|=z4),"depth"in bo&&(C.clearDepth(+bo.depth),Ao|=A4),"stencil"in bo&&(C.clearStencil(bo.stencil|0),Ao|=T4),E(!!Ao,"called regl.clear with no buffer specified"),C.clear(Ao)}function qn(Ve){if(E(typeof Ve=="object"&&Ve,"regl.clear() takes an object as input"),"framebuffer"in Ve)if(Ve.framebuffer&&Ve.framebuffer_reglType==="framebufferCube")for(var bo=0;bo<6;++bo)on(e({framebuffer:Ve.framebuffer.faces[bo]},Ve),Nn);else on(Ve,Nn);else Nn(null,Ve)}function Dn(Ve){E.type(Ve,"function","regl.frame() callback must be a function"),bt.push(Ve);function bo(){var Ao=mm(bt,Ve);E(Ao>=0,"cannot cancel a frame twice");function Sn(){var ia=mm(bt,Sn);bt[ia]=bt[bt.length-1],bt.length-=1,bt.length<=0&&Co()}bt[Ao]=Sn}return uo(),{cancel:bo}}function r0(){var Ve=Jt.viewport,bo=Jt.scissor_box;Ve[0]=Ve[1]=bo[0]=bo[1]=0,Rt.viewportWidth=Rt.framebufferWidth=Rt.drawingBufferWidth=Ve[2]=bo[2]=C.drawingBufferWidth,Rt.viewportHeight=Rt.framebufferHeight=Rt.drawingBufferHeight=Ve[3]=bo[3]=C.drawingBufferHeight}function p0(){Rt.tick+=1,Rt.time=lo(),r0(),Fe.procs.poll()}function kn(){Xt.refresh(),r0(),Fe.procs.refresh(),Ht&&Ht.update()}function lo(){return(Et()-qt)/1e3}kn();function v0(Ve,bo){E.type(bo,"function","listener callback must be a function");var Ao;switch(Ve){case"frame":return Dn(bo);case"lost":Ao=Ze;break;case"restore":Ao=co;break;case"destroy":Ao=_e;break;default:E.raise("invalid event, must be one of frame,lost,restore,destroy")}return Ao.push(bo),{cancel:function(){for(var Sn=0;Sn<Ao.length;++Sn)if(Ao[Sn]===bo){Ao[Sn]=Ao[Ao.length-1],Ao.pop();return}}}}var Do=e(In,{clear:qn,prop:yt.define.bind(null,vm),context:yt.define.bind(null,N4),this:yt.define.bind(null,R4),draw:In({}),buffer:function(Ve){return Gt.create(Ve,L4,!1,!1)},elements:function(Ve){return le.create(Ve,!1)},texture:Xt.create2D,cube:Xt.createCube,renderbuffer:kt.create,framebuffer:Yt.create,framebufferCube:Yt.createCube,vao:ae.createVAO,attributes:nt,frame:Dn,on:v0,limits:ct,hasExtension:function(Ve){return ct.extensions.indexOf(Ve.toLowerCase())>=0},read:to,destroy:_o,_gl:C,_refresh:kn,poll:function(){p0(),Ht&&Ht.update()},now:lo,stats:Nt});return z.onDone(null,Do),Do}return O4})});var qs=St((wz,Fm)=>{"use strict";var _a=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],Ma=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],ca=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],Kf=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2],ul=(t,e)=>[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]],ku=t=>Math.hypot(t[0],t[1],t[2]),Er=t=>{let e=ku(t)||1;return[t[0]/e,t[1]/e,t[2]/e]};function Bi(t,e){let o=t.length-1,n=Math.min(Math.max(e,0),1)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,s=t[Math.max(0,r-1)],i=t[r],c=t[r+1],h=t[Math.min(o,r+2)],l=[0,0,0];for(let d=0;d<3;d++)l[d]=.5*(2*i[d]+(-s[d]+c[d])*a+(2*s[d]-5*i[d]+4*c[d]-h[d])*a*a+(-s[d]+3*i[d]-3*c[d]+h[d])*a*a*a);return l}function X4(t,e){return Bi(t.map(o=>[o,0,0]),e)[0]}function Y4(t,e,o,n){let r={curMat:[0,0,0]},s={r:[1,0,0,0,1,0,0,0,1],t:[0,0,0],s:1},i=[];r.save=()=>{i.push({r:s.r.slice(),t:s.t.slice(),s:s.s})},r.restore=()=>{s=i.pop()};let c=(u,p)=>{let f=new Array(9);for(let v=0;v<3;v++)for(let m=0;m<3;m++)f[v*3+m]=u[v*3]*p[m]+u[v*3+1]*p[3+m]+u[v*3+2]*p[6+m];return f},h=u=>[s.r[0]*u[0]+s.r[1]*u[1]+s.r[2]*u[2],s.r[3]*u[0]+s.r[4]*u[1]+s.r[5]*u[2],s.r[6]*u[0]+s.r[7]*u[1]+s.r[8]*u[2]];r.translate=(u,p,f)=>{let v=h([u,p,f]);s.t=[s.t[0]+v[0]*s.s,s.t[1]+v[1]*s.s,s.t[2]+v[2]*s.s]},r.scale=u=>{s.s*=u},r.rotateY=u=>{let p=Math.cos(u),f=Math.sin(u);s.r=c(s.r,[p,0,f,0,1,0,-f,0,p])},r.vert=(u,p,f)=>{let v=f||r.curMat,m=h(u),g=Er(h(p));return t.push(m[0]*s.s+s.t[0],m[1]*s.s+s.t[1],m[2]*s.s+s.t[2]),e.push(g[0],g[1],g[2]),n.push(v[0],v[1],v[2]),t.length/3-1};let l=u=>[t[u*3],t[u*3+1],t[u*3+2]],d=u=>[e[u*3],e[u*3+1],e[u*3+2]];return r.tri=(u,p,f)=>{let v=l(u),m=ul(_a(l(p),v),_a(l(f),v)),g=Ma(Ma(d(u),d(p)),d(f));Kf(m,g)<0?o.push(u,f,p):o.push(u,p,f)},r.box=(u,p,f,v,m,g,x)=>{let y=[[[u,p,f],[v,p,f],[u,m,f],[v,m,f],[0,0,-1]],[[v,p,g],[u,p,g],[v,m,g],[u,m,g],[0,0,1]],[[u,p,g],[u,p,f],[u,m,g],[u,m,f],[-1,0,0]],[[v,p,f],[v,p,g],[v,m,f],[v,m,g],[1,0,0]],[[u,m,f],[v,m,f],[u,m,g],[v,m,g],[0,1,0]],[[u,p,g],[v,p,g],[u,p,f],[v,p,f],[0,-1,0]]];for(let w of y){let M=r.vert(w[0],w[4],x),_=r.vert(w[1],w[4],x),k=r.vert(w[2],w[4],x),O=r.vert(w[3],w[4],x);r.tri(M,_,k),r.tri(_,O,k)}},r.surface=(u,p,f,v)=>{v=v||{};let m=.001,g=M=>Math.min(1,Math.max(0,M)),x=[],y=[];for(let M=0;M<=p;M++){let _=[],k=[];for(let O=0;O<=f;O++){let N=M/p,G=O/f,$=u(N,G),V=Math.min(1-m,Math.max(m,N)),D=v.wrapV?G:Math.min(1-m,Math.max(m,G)),U=_a(u(g(V+m),D),u(g(V-m),D)),ht=v.wrapV?D+m:g(D+m),jt=v.wrapV?D-m:g(D-m),Lt=_a(u(V,ht),u(V,jt)),gt=ul(U,Lt);ku(gt)<1e-14&&(gt=v.inside?_a($,v.inside(N,G)):[0,1,0]),gt=Er(gt),v.inside&&Kf(gt,_a($,v.inside(N,G)))<0&&(gt=ca(gt,-1));let tt=v.mat?v.mat(N,G,$):null;_.push(r.vert($,gt,tt)),v.double&&k.push(r.vert($,ca(gt,-1),tt))}x.push(_),y.push(k)}let w=M=>{for(let _=0;_<p;_++)for(let k=0;k<f;k++){let O=M[_][k],N=M[_+1][k],G=M[_][k+1],$=M[_+1][k+1];r.tri(O,N,G),r.tri(N,$,G)}};w(x),v.double&&w(y)},r.ellipsoid=(u,p,f,v,m)=>{m=m||{};let g=m.warp||null;r.surface((x,y)=>{let w=x*Math.PI,M=y*Math.PI*2,_=g?g(x,y):1;return[u[0]+p[0]*_*Math.sin(w)*Math.cos(M),u[1]+p[1]*_*Math.cos(w),u[2]+p[2]*_*Math.sin(w)*Math.sin(M)]},f||10,v||14,{wrapV:!0,inside:()=>u,mat:m.mat})},r.tube=(u,p,f,v,m)=>{m=m||{};let g=40,x=[],y=null;for(let _=0;_<=g;_++){let k=_/g,O=Bi(u,Math.max(0,k-.01)),N=Bi(u,Math.min(1,k+.01)),G=Er(_a(N,O)),$;if(y)$=Er(_a(y,ca(G,Kf(y,G))));else{let V=Math.abs(G[1])<.9?[0,1,0]:[1,0,0];$=Er(ul(G,V))}x.push({N:$,B:Er(ul(G,$))}),y=$}let w=_=>{let k=Math.min(Math.max(_,0),1)*g,O=Math.min(g-1,Math.floor(k)),N=k-O,G=x[O],$=x[O+1];return{N:Er(Ma(ca(G.N,1-N),ca($.N,N))),B:Er(Ma(ca(G.B,1-N),ca($.B,N)))}},M=m.squash||[1,1];r.surface((_,k)=>{let O=Bi(u,_),N=w(_),G=p(_),$=k*Math.PI*2;return Ma(O,Ma(ca(N.N,Math.cos($)*G*M[0]),ca(N.B,Math.sin($)*G*M[1])))},f||12,v||8,{wrapV:!0,inside:_=>Bi(u,_),mat:m.mat})},r.lathe=(u,p,f,v,m)=>{m=m||{};let g=[];for(let x=0;x<u.length-1;x++){let y=u[x+1][0]-u[x][0],w=u[x+1][1]-u[x][1];g.push(Er([w,-y,0]))}for(let x=0;x<u.length-1;x++){let y=u[x],w=u[x+1],M=x===0||y[2]===1,_=x===u.length-2||w[2]===1,k=M?g[x]:Er(Ma(g[x-1],g[x])),O=_?g[x]:Er(Ma(g[x],g[x+1])),N=[],G=[];for(let $=0;$<=v;$++){let V=$/v*Math.PI*2,D=Math.cos(V),U=Math.sin(V),ht=m.mat?m.mat(V,y[1]):null,jt=m.mat?m.mat(V,w[1]):null;N.push(r.vert([p+y[0]*D,y[1],f+y[0]*U],[k[0]*D,k[1],k[0]*U],ht)),G.push(r.vert([p+w[0]*D,w[1],f+w[0]*U],[O[0]*D,O[1],O[0]*U],jt))}for(let $=0;$<v;$++)r.tri(N[$],N[$+1],G[$]),r.tri(N[$+1],G[$+1],G[$])}},r}Fm.exports={createBuilder:Y4,catmull:Bi,curve1:X4,sub:_a,add:Ma,mul:ca,dot:Kf,cross:ul,norm:Er,len:ku}});var Bm=St((_z,Um)=>{"use strict";var{norm:Qf,add:Zf,mul:ja,sub:K4,cross:Gm}=qs(),Hm=Math.PI*2,Q4=(t,e,o)=>{let n=Math.min(1,Math.max(0,(o-t)/(e-t)));return n*n*(3-2*n)};function Z4(t){let e=t>>>0;return()=>{e|=0,e=e+1831565813|0;let o=Math.imul(e^e>>>15,1|e);return o=o+Math.imul(o^o>>>7,61|o)^o,((o^o>>>14)>>>0)/4294967296}}function J4(t,e,o,n,r,a){let s=(u,p)=>[7,u*a,p];t.curMat=[0,0,0],t.box(e-a*1.36,n,o-a*1.36,e+a*1.36,n+.22,o+a*1.36),t.lathe([[a*1.24,n+.22,1],[a*1.3,n+.27],[a*1.31,n+.32],[a*1.26,n+.37,1],[a*1.1,n+.4],[a*1.14,n+.44,1],[a*1.18,n+.47],[a*1.1,n+.52,1],[a*.96,n+.55]],e,o,56,{mat:s});let i=n+.55,c=r-i,h=20,l=6,d=a*.075;return t.surface((u,p)=>{let f=i+u*c,v=a*(.96-.12*u),m=p*Hm,g=p*h%1,x=v-d*4*g*(1-g);return[e+x*Math.cos(m),f,o+x*Math.sin(m)]},10,h*l,{wrapV:!0,inside:u=>[e,i+u*c,o],mat:(u,p)=>[7,p*Hm*a,i+u*c]}),t.lathe([[a*.8,r-.02,1],[a*.9,r+.02],[a*.9,r+.07,1],[a*.82,r+.09,1],[a*.86,r+.13],[a*1.06,r+.2],[a*1.22,r+.28],[a*1.28,r+.33,1]],e,o,56,{mat:s}),t.curMat=[0,0,0],t.box(e-a*1.42,r+.33,o-a*1.42,e+a*1.42,r+.53,o+a*1.42),r+.53}function t6(t,e,o){t.curMat=[1,0,0],t.lathe([[e*1.1,0,1],[e*1.1,o*.14,1],[e*1.04,o*.14,1],[e*1.04,o*.2],[e*.97,o*.26,1],[e*.95,o*.26,1],[e*.95,o*.8,1],[e*.98,o*.8,1],[e*1.03,o*.86],[e*1.05,o*.92,1],[e*1.05,o,1],[e*.5,o,1],[0,o]],0,0,72)}function e6(t,e,o,n,r){t.save(),t.translate(e,0,o),t6(t,n,r),t.restore()}function o6(t,e,o,n,r,a){let s=Z4(n),i=a?Qf([a[0],0,a[1]]):null;t.save(),t.translate(e,0,o),t.scale(r||1),t.curMat=[3,0,0],t.lathe([[.17,0,1],[.2,.02],[.28,.13],[.36,.3],[.395,.47],[.38,.62],[.32,.74],[.29,.8],[.292,.82,1],[.325,.84],[.335,.88,1],[.3,.905,1],[.275,.895,1],[.272,.85]],0,0,48),t.curMat=[5,0,0],t.lathe([[.272,.85,1],[.1,.868],[0,.872]],0,0,24);let c=11,h=.86;for(let l=0;l<c;l++){let d=l>=c-2,u=l*2.399963+s()*.5,p=[Math.cos(u),0,Math.sin(u)],f=[-Math.sin(u),0,Math.cos(u)],v=l*.618%1,m=d?.06+s()*.06:.12+.62*v,g=1;if(i){let gt=p[0]*i[0]+p[2]*i[2];g=.25+.75*Q4(-.7,.5,gt),m*=g}let x=d?1.1+s()*.25:.85+.55*(1-v*.55)+s()*.15,y=d?1+s()*.2:.95+s()*.28,w=d?.055:.215+s()*.05,M=.04+s()*.05,_=[p[0]*M,h,p[2]*M],k=[_[0]+p[0]*Math.sin(m)*x*.92,_[1]+Math.cos(m)*x,_[2]+p[2]*Math.sin(m)*x*.92],O=[_[0]+p[0]*Math.sin(m*.5)*x*.45,_[1]+x*.5,_[2]+p[2]*Math.sin(m*.5)*x*.45];t.curMat=[4,0,0],t.tube([_,O,k],gt=>.02-.008*gt,8,7);let N=24,G=m*.9+.05,$=m+(d?.12:(.95+.45*v)*(.35+.65*g)),V=[k],D=[],U=k;for(let gt=0;gt<N;gt++){let tt=gt/N,W=G+($-G)*tt*tt,st=[p[0]*Math.sin(W),Math.cos(W),p[2]*Math.sin(W)];D.push(st),U=Zf(U,ja(st,y/N)),V.push(U)}D.push(D[D.length-1]);let ht=gt=>{let tt=gt*N,W=Math.min(N-1,Math.floor(tt)),st=tt-W;return Zf(ja(V[W],1-st),ja(V[W+1],st))},jt=gt=>{let tt=gt*N,W=Math.min(N,Math.floor(tt)),st=Math.min(N,W+1),wt=tt-W;return Qf(Zf(ja(D[W],1-wt),ja(D[st],wt)))},Lt=(s()-.5)*.5;t.curMat=[2,0,0],t.surface((gt,tt)=>{let W=tt*2-1,st=ht(gt),wt=jt(gt),$t=Lt*gt,Ut=Zf(ja(f,Math.cos($t)),ja(Gm(wt,f),Math.sin($t)));Ut=Qf(K4(Ut,ja(wt,Ut[0]*wt[0]+Ut[1]*wt[1]+Ut[2]*wt[2])));let be=Qf(Gm(Ut,wt)),De=w*Math.pow(Math.sin(Math.PI*Math.pow(gt,.72)),.85),He=.3*De*Math.abs(W)+.012*Math.sin(gt*40+W*2)*Math.abs(W)*(d?0:1),Ot=-.1*De*W*W*W*W,ie=He+Ot;return[st[0]+Ut[0]*W*De+be[0]*ie,st[1]+Ut[1]*W*De+be[1]*ie,st[2]+Ut[2]*W*De+be[2]*ie]},14,8,{double:!0,mat:(gt,tt)=>[2,tt*2-1,gt]})}t.restore()}Um.exports={addFlutedColumn:J4,addStatue:e6,addPlant:o6}});var Wa=St((Mz,Xm)=>{"use strict";var Pt={xc:7,r:2.5,spring:4.7};Pt.x0=Pt.xc-Pt.r;Pt.x1=Pt.xc+Pt.r;Pt.top=Pt.spring+Pt.r;var q0=.06,cn=.1,jm=.08,Jf=Pt.r,th=[Pt.x0+Jf/3,Pt.x0+2*Jf/3,Pt.xc+Jf/3,Pt.xc+2*Jf/3],ji=.28,Su=[.95,1.65,2.35,3.05,3.75],Wm=[1.05,1.8],dl=[8,0,0],cr=[0,0,0];function zr(t,e,o,n,r,a,s,i){t.box(Math.min(e,r),Math.min(o,a),Math.min(n,s),Math.max(e,r),Math.max(o,a),Math.max(n,s),i)}function Wi(t,e,o,n,r,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),h=t.vert(n,a,s),l=t.vert(r,a,s);t.tri(i,c,h),t.tri(i,h,l)}function eh(t,e,o,n,r,a,s=48,i=0,c=Math.PI){let h=(l,d,u)=>[Pt.xc+d*Math.cos(l),Pt.spring+d*Math.sin(l),u];for(let l=0;l<s;l++){let d=i+(c-i)*l/s,u=i+(c-i)*(l+1)/s,p=(d+u)/2;Wi(t,h(d,e,r),h(u,e,r),h(u,o,r),h(d,o,r),[0,0,1],a),Wi(t,h(d,o,n),h(u,o,n),h(u,e,n),h(d,e,n),[0,0,-1],a),Wi(t,h(d,e,n),h(u,e,n),h(u,e,r),h(d,e,r),[-Math.cos(p),-Math.sin(p),0],a),Wi(t,h(u,o,n),h(d,o,n),h(d,o,r),h(u,o,r),[Math.cos(p),Math.sin(p),0],a)}}function n6(t){let n=a=>[Pt.xc+Pt.r*Math.cos(a),Pt.spring+Pt.r*Math.sin(a)],r=a=>{let s=Math.cos(a),i=Math.sin(a),c=Math.abs(s)>1e-6?Pt.r/Math.abs(s):1/0,h=i>1e-6?(8-Pt.spring)/i:1/0,l=Math.min(c,h);return[Math.min(Pt.x1,Math.max(Pt.x0,Pt.xc+s*l)),Math.min(8,Pt.spring+i*l)]};for(let a=0;a<48;a++){let s=Math.PI*a/48,i=Math.PI*(a+1)/48,c=n(s),h=n(i),l=r(s),d=r(i);for(let[p,f]of[[.35,1],[-.35,-1]])Wi(t,[c[0],c[1],p],[h[0],h[1],p],[d[0],d[1],p],[l[0],l[1],p],[0,0,f],cr);let u=(s+i)/2;Wi(t,[c[0],c[1],-.35],[h[0],h[1],-.35],[h[0],h[1],.35],[c[0],c[1],.35],[-Math.cos(u),-Math.sin(u),0],cr)}}function r6(t){zr(t,-.35,0,-.35,Pt.x0,8,.35,cr),zr(t,Pt.x1,0,-.35,14+.35,8,.35,cr),n6(t),Vm(t)}function Vm(t){zr(t,Pt.x0-.32,.3,.35,Pt.x0,Pt.spring,.35+.07,cr),zr(t,Pt.x1,.3,.35,Pt.x1+.32,Pt.spring,.35+.07,cr),zr(t,Pt.x0-.32-.05,0,.35,Pt.x0,.3,.35+.07+.04,cr),zr(t,Pt.x1,0,.35,Pt.x1+.32+.05,.3,.35+.07+.04,cr),zr(t,Pt.x0-.32-.06,Pt.spring-.12,.35,Pt.x0,Pt.spring,.35+.07+.05,cr),zr(t,Pt.x1,Pt.spring-.12,.35,Pt.x1+.32+.06,Pt.spring,.35+.07+.05,cr),eh(t,Pt.r,Pt.r+.32,.35,.35+.07,cr),eh(t,Pt.r+.32,Pt.r+.32+.06,.35,.35+.07+.03,cr),zr(t,Pt.xc-.22,Pt.top-.08,.35,Pt.xc+.22,Pt.top+.32+.12,.35+.07+.06,cr)}function a6(t,e){e=e||"all";let o=e==="all",n=o||e==="fixed",r=-jm/2,a=jm/2,s=(u,p,f,v,m=0)=>zr(t,u-m,p,r,f+m,v,a,dl),i=u=>Pt.spring+Math.sqrt(Math.max(0,Pt.r*Pt.r-(u-Pt.xc)*(u-Pt.xc))),c=e==="right"?Pt.xc:Pt.x0,h=e==="left"?Pt.xc:Pt.x1,l=u=>o||e==="left"&&u<Pt.xc||e==="right"&&u>Pt.xc,d=o?null:Pt.spring-.06;if(n){s(Pt.x0,0,Pt.x0+cn,Pt.spring),s(Pt.x1-cn,0,Pt.x1,Pt.spring),eh(t,Pt.r-cn,Pt.r,r,a,dl,64),s(Pt.x0,0,Pt.x1,.05),s(Pt.x0,Pt.spring-.06,Pt.x1,Pt.spring+.06);for(let u of Wm)eh(t,u-q0/2,u+q0/2,r,a,dl,48)}if(o){s(Pt.x0,0,Pt.x1,ji),s(Pt.xc-cn/2,0,Pt.xc+cn/2,Pt.top-cn*.5);for(let u of th)s(u-q0/2,ji,u+q0/2,i(u)-cn*.5);for(let u of Su)s(Pt.x0,u-q0/2,Pt.x1,u+q0/2)}else if(e==="fixed"){s(Pt.xc-cn/2,Pt.spring+.06,Pt.xc+cn/2,Pt.top-cn*.5);for(let u of th)s(u-q0/2,Pt.spring+.06,u+q0/2,i(u)-cn*.5)}else{let u=e==="left"?Pt.x0+cn:Pt.x1-cn;s(Math.min(u,u+(e==="left"?cn*.8:-cn*.8)),.05,Math.max(u,u+(e==="left"?cn*.8:-cn*.8)),d),s(c,.05,h,ji),s(c,d-.07,h,d);let p=e==="left"?Pt.xc-cn/2:Pt.xc;s(p,.05,p+cn/2,d);for(let f of th)l(f)&&s(f-q0/2,ji,f+q0/2,d-.07);for(let f of Su)s(c,f-q0/2,h,f+q0/2)}for(let u of[-1,1]){let p=Pt.xc+u*.16;l(p)&&(zr(t,p-.02,1.05,a,p+.02,1.13,a+.06,dl),zr(t,p-(u>0?0:.14),1.07,a+.05,p+(u>0?.14:0),1.11,a+.08,dl))}}function s6(t){t=t||"all";let e=[],o=0,{x0:n,x1:r,xc:a,r:s,spring:i}=Pt;if(t!=="fixed"){let h=t==="right"?a:n,l=t==="left"?a:r;if(e.push([h,0,o],[l,0,o],[l,i,o],[h,0,o],[l,i,o],[h,i,o]),t!=="all")return e}let c=48;for(let h=0;h<c;h++){let l=Math.PI*h/c,d=Math.PI*(h+1)/c;e.push([a,i,o],[a+s*Math.cos(l),i+s*Math.sin(l),o],[a+s*Math.cos(d),i+s*Math.sin(d),o])}return e}var Bo=t=>t.toFixed(4);function i6(){let t=th.map(n=>`vb = max(vb, barCover(abs(q.x - ${Bo(n)}), ${Bo(q0/2)}, soft));`).join(`
		`),e=Su.map(n=>`hb = max(hb, barCover(abs(q.y - ${Bo(n)}), ${Bo(q0/2)}, soft));`).join(`
		`),o=Wm.map(n=>`ab = max(ab, barCover(abs(rr - ${Bo(n)}), ${Bo(q0/2)}, soft));`).join(`
		`);return`
	float barCover(float d, float hw, float soft) {
		return 1.0 - smoothstep(hw - soft, hw + soft, d);
	}

	// how open the doorway is at a point (x, y) on a plane, 0..1
	float doorOpen(vec2 q, float soft) {
		float side = smoothstep(${Bo(Pt.x0)} - soft, ${Bo(Pt.x0)} + soft, q.x)
		           * (1.0 - smoothstep(${Bo(Pt.x1)} - soft, ${Bo(Pt.x1)} + soft, q.x));
		float above = smoothstep(-soft, soft, q.y);
		float rr = length(q - vec2(${Bo(Pt.xc)}, ${Bo(Pt.spring)}));
		float arch = q.y < ${Bo(Pt.spring)} ? 1.0 : 1.0 - smoothstep(${Bo(Pt.r)} - soft, ${Bo(Pt.r)} + soft, rr);
		return side * above * arch;
	}

	// light that reaches floor point p through the door, 0..1
	float doorLight(vec3 p, vec3 toLight) {
		if (p.z < 0.3 || toLight.z > -0.01) return 0.0;
		// through the inner face of the wall
		float tIn = (${Bo(.35)} - p.z) / toLight.z;
		float tMid = (0.0 - p.z) / toLight.z;
		float tOut = (${Bo(-.35)} - p.z) / toLight.z;
		vec2 qIn = (p + toLight * tIn).xy;
		vec2 q = (p + toLight * tMid).xy;
		vec2 qOut = (p + toLight * tOut).xy;
		float dist = length(toLight * tMid);
		float soft = 0.006 + 0.016 * dist;
		float open = doorOpen(qIn, soft) * doorOpen(qOut, soft);
		if (open <= 0.0) return 0.0;

		// the frame: outer jambs, arched head, transom, rails, stiles, bars
		float rr = length(q - vec2(${Bo(Pt.xc)}, ${Bo(Pt.spring)}));
		float vb = barCover(abs(q.x - ${Bo(Pt.xc)}), ${Bo(cn/2)}, soft);
		${t}
		float hb = barCover(abs(q.y - ${Bo(Pt.spring)}), 0.06, soft);
		hb = max(hb, 1.0 - smoothstep(${Bo(ji)} - soft, ${Bo(ji)} + soft, q.y));
		float hRows = 0.0;
		{
			float hb2 = 0.0;
			${e.replace(/hb = max\(hb,/g,"hb2 = max(hb2,")}
			hRows = q.y < ${Bo(Pt.spring)} ? hb2 : 0.0;
		}
		float ab = 0.0;
		${o}
		ab = q.y > ${Bo(Pt.spring)} ? ab : 0.0;
		float frame = max(
			barCover(abs(q.x - ${Bo(Pt.x0+cn/2)}), ${Bo(cn/2)}, soft),
			barCover(abs(q.x - ${Bo(Pt.x1-cn/2)}), ${Bo(cn/2)}, soft));
		frame = q.y < ${Bo(Pt.spring)} ? frame : barCover(abs(rr - ${Bo(Pt.r-cn/2)}), ${Bo(cn/2)}, soft);
		float cover = max(max(max(vb, hb), max(hRows, ab)), frame);
		return open * (1.0 - cover * 0.92);
	}`}Xm.exports={addEntranceWall:r6,addSurround:Vm,addFrames:a6,glassPanes:s6,doorLightGLSL:i6,DOOR:Pt,WALL:.35}});var Xi=St((kz,t2)=>{"use strict";var Fs=1.1583333333333334,Gs=(13.05-8*.16)/9,zu=Fs+.16,Au=Gs+.16,Sa=14/2-7.75/2,lr=15,pl=Sa+7.75,ka=lr+13.05,fr=.3,Ea={y:8+.18,inset:.15},Ds={y:8+.36,inset:fr},Tu=8+.2,vl=8+.62,Lu=8+.9,Nu=.016,Zm=.28,Jm=.66,c6=(()=>{let t=[-.15,1,.3],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),l6=(()=>{let t=[.42,1,-.32],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),f6=[9,0,0],m0=[10,0,0];function Vi(t,e,o,n,r,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),h=t.vert(n,a,s),l=t.vert(r,a,s);t.tri(i,c,h),t.tri(i,h,l)}function D0(t,e,o,n,r,a,s){Vi(t,[e,a,o],[n,a,o],[n,a,r],[e,a,r],[0,-1,0],s)}function Eu(t,e,o,n,r,a,s,i){Vi(t,[e,a,o],[n,a,o],[n,s,o],[e,s,o],[0,0,1],i),Vi(t,[n,a,r],[e,a,r],[e,s,r],[n,s,r],[0,0,-1],i),Vi(t,[e,a,r],[e,a,o],[e,s,o],[e,s,r],[1,0,0],i),Vi(t,[n,a,o],[n,a,r],[n,s,r],[n,s,o],[-1,0,0],i)}function Ym(t,e,o,n,r){D0(t,e[0],e[1],e[2],o[1],n,r),D0(t,e[0],o[3],e[2],e[3],n,r),D0(t,e[0],o[1],o[0],o[3],n,r),D0(t,o[2],o[1],e[2],o[3],n,r)}var Km=t=>Sa+t*zu,Qm=t=>lr+t*Au;function h6(t,e,o=48){let n=[Sa-fr,lr-fr,pl+fr,ka+fr],r=(h,l)=>[h[0]+l,h[1]+l,h[2]-l,h[3]-l],a=r(n,Ea.inset),s=r(n,Ds.inset);D0(t,0,0,14,n[1],8,e),D0(t,0,n[3],14,o,8,e),D0(t,0,n[1],n[0],n[3],8,e),D0(t,n[2],n[1],14,n[3],8,e);let i=.06,c=.06;t.box(n[0]-i,8-c,n[1]-i,n[2]+i,8,n[1],m0),t.box(n[0]-i,8-c,n[3],n[2]+i,8,n[3]+i,m0),t.box(n[0]-i,8-c,n[1],n[0],8,n[3],m0),t.box(n[2],8-c,n[1],n[2]+i,8,n[3],m0),Eu(t,...n.slice(0,2),...n.slice(2),8,Ea.y,m0),Ym(t,n,a,Ea.y,m0),Eu(t,...a.slice(0,2),...a.slice(2),Ea.y,Ds.y,m0),Ym(t,a,s,Ds.y,m0);for(let h=1;h<6;h++){let l=Km(h)-.16;t.box(l,Tu,lr,l+.16,Ds.y,ka,m0)}for(let h=1;h<9;h++){let l=Qm(h)-.16;t.box(Sa,Tu,l,pl,Ds.y,l+.16,m0)}for(let h=0;h<9;h++)for(let l=0;l<6;l++){let d=Km(l),u=Qm(h);Eu(t,d,u,d+Fs,u+Gs,Ds.y,Lu,m0),D0(t,d,u,d+Fs,u+Gs,Lu,f6),u6(t,d+Fs/2,u+Gs/2,Fs/2,Gs/2)}}function u6(t,e,o,n,r){let a=vl,s=Nu;D0(t,e-n,o-s,e+n,o+s,a,m0),D0(t,e-s,o-r,e+s,o+r,a,m0);for(let i of[1,-1]){let c=Math.hypot(n,r),h=n/c,l=i*r/c,d=-l*s,u=h*s;Vi(t,[e-h*c+d,a,o-l*c+u],[e+h*c+d,a,o+l*c+u],[e+h*c-d,a,o+l*c-u],[e-h*c-d,a,o-l*c-u],[0,-1,0],m0)}for(let i of[Zm,Jm]){let c=i*n,h=i*r;D0(t,e-c-s,o-h-s,e+c+s,o-h+s,a,m0),D0(t,e-c-s,o+h-s,e+c+s,o+h+s,a,m0),D0(t,e-c-s,o-h+s,e-c+s,o+h-s,a,m0),D0(t,e+c-s,o-h+s,e+c+s,o+h-s,a,m0)}}var ro=t=>t.toFixed(4);function d6(){return`
	// by day the sun, high and a little towards the entrance; by night
	// the moon, lower and from the other side, so its squares of light
	// reach across the floor to the foot of the wall. (When the light is
	// switched, the squares slide from one to the other.)
	const vec3 SKY_SUN_DAY = vec3(${c6.map(ro).join(", ")});
	const vec3 SKY_MOON = vec3(${l6.map(ro).join(", ")});
	vec3 skySun() { return normalize(mix(SKY_SUN_DAY, SKY_MOON, night)); }
	#define SKY_SUN skySun()

	float rectOpen(vec2 q, vec4 r, float soft) {
		vec2 lo = smoothstep(r.xy - soft, r.xy + soft, q);
		vec2 hi = 1.0 - smoothstep(r.zw - soft, r.zw + soft, q);
		return lo.x * lo.y * hi.x * hi.y;
	}

	// inside a pane (not on a beam)? 0..1
	float paneOpen(vec2 q, float soft) {
		vec2 rel = q - vec2(${ro(Sa)}, ${ro(lr)});
		vec2 pitch = vec2(${ro(zu)}, ${ro(Au)});
		vec2 cell = floor(rel / pitch);
		if (cell.x < 0.0 || cell.y < 0.0 || cell.x > ${ro(5)} || cell.y > ${ro(8)}) return 0.0;
		vec2 loc = rel - cell * pitch;
		return rectOpen(loc, vec4(0.0, 0.0, ${ro(Fs)}, ${ro(Gs)}), soft);
	}

	float barCov(float d, float soft) {
		return 1.0 - smoothstep(${ro(Nu)} - soft, ${ro(Nu)} + soft, d);
	}

	// sunlight reaching point p through the skylight, 0..1
	float skylightAt(vec3 p) {
		if (p.y > ${ro(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q0 = (p + L * ((${ro(8)} - p.y) / L.y)).xz;
		vec2 q1 = (p + L * ((${ro(Ea.y)} - p.y) / L.y)).xz;
		vec2 qb = (p + L * ((${ro(Tu)} - p.y) / L.y)).xz;
		vec2 q2 = (p + L * ((${ro(Ds.y)} - p.y) / L.y)).xz;
		float tG = (${ro(vl)} - p.y) / L.y;
		vec2 qg = (p + L * tG).xz;
		vec2 qt = (p + L * ((${ro(Lu)} - p.y) / L.y)).xz;
		float soft = 0.004 + 0.007 * tG;
		float open = rectOpen(q0, vec4(${ro(Sa-fr)}, ${ro(lr-fr)}, ${ro(pl+fr)}, ${ro(ka+fr)}), soft)
		           * rectOpen(q1, vec4(${ro(Sa-fr+Ea.inset)}, ${ro(lr-fr+Ea.inset)}, ${ro(pl+fr-Ea.inset)}, ${ro(ka+fr-Ea.inset)}), soft)
		           * paneOpen(qb, soft) * paneOpen(q2, soft) * paneOpen(qt, soft);
		if (open <= 0.0) return 0.0;
		// the glazing, measured from the centre of this pane
		vec2 rel = qg - vec2(${ro(Sa)}, ${ro(lr)});
		vec2 pitch = vec2(${ro(zu)}, ${ro(Au)});
		vec2 paneHalf = vec2(${ro(Fs/2)}, ${ro(Gs/2)});
		vec2 c = rel - floor(rel / pitch) * pitch - paneHalf;
		vec2 ac = abs(c);
		vec2 an = ac / paneHalf;                       // 0 at the centre, 1 at the pane's edge
		float hm = min(paneHalf.x, paneHalf.y);
		float ring = max(an.x, an.y);
		float cover = max(barCov(ac.x, soft), barCov(ac.y, soft));
		cover = max(cover, barCov(abs(an.x - an.y) * hm * 0.7071, soft));
		cover = max(cover, barCov(abs(ring - ${ro(Zm)}) * hm, soft));
		cover = max(cover, barCov(abs(ring - ${ro(Jm)}) * hm, soft));
		return open * (1.0 - cover * 0.9);
	}

	// the same light for the beams in the air: the whole opening glows a
	// little, and the panes and bars show in it, softly
	float skylightVol(vec3 p) {
		if (p.y > ${ro(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q = (p + L * ((${ro(vl)} - p.y) / L.y)).xz;
		float open = rectOpen(q, vec4(${ro(Sa)}, ${ro(lr)}, ${ro(pl)}, ${ro(ka)}), 0.25);
		if (open <= 0.0) return 0.0;
		return open * (0.13 + 0.87 * skylightAt(p));
	}

	// light thrown back up by the bright squares on the floor: strongest
	// on what stands beside them and faces them (the lower walls, the
	// pillars, the statues, the ceiling above), fading with distance
	float skylightBounce(vec3 p, vec3 n) {
		if (p.x > 14.2 || p.x < -0.4) return 0.0;
		vec3 L = SKY_SUN;
		vec2 c = vec2(${ro(14/2)}, ${ro((lr+ka)/2)}) - L.xz * (${ro(vl)} / L.y);
		vec2 d = max(abs(p.xz - c) - vec2(${ro(7.75/2)}, ${ro(13.05/2)}), 0.0);
		float fall = 1.0 / (1.0 + 0.09 * (dot(d, d) + p.y * p.y * 0.6));
		vec3 to = normalize(vec3(c.x, -0.4, c.y) - p);
		return fall * (0.3 + 0.7 * max(dot(n, to), 0.0));
	}

	// a soft daylight glow under the lantern
	float skylightGlow(vec3 p) {
		float z = smoothstep(${ro(lr-3)}, ${ro(lr+2)}, p.z)
		        * (1.0 - smoothstep(${ro(ka-2)}, ${ro(ka+3)}, p.z));
		float x = 1.0 - 0.35 * smoothstep(${ro(7.75/2)}, ${ro(14/2)}, abs(p.x - ${ro(14/2)}));
		return z * x;
	}`}t2.exports={addSkylight:h6,skylightGLSL:d6,Z_START:lr,Z_END:ka,GLASS_Y:vl,HEIGHT:8}});var _0=St((Sz,a2)=>{"use strict";var Ki=Wa(),Pu=8,ln=.35,ee={x0:13.65,x1:38.12,z0:41,z1:47.2,zc:44.1,hallEnd:50.65,spring:5.6,crown:Pu},e2=(ee.z1-ee.z0)/2,Ru=ee.crown-ee.spring,Cu=(Ru*Ru+e2*e2)/(2*Ru),$u=ee.crown-Cu;function Yi(t){let e=t-ee.zc;return $u+Math.sqrt(Math.max(0,Cu*Cu-e*e))}var Qe={first:17.43,pitch:4.4,count:5,halfW:1.2,sill:.75,spring:4.3},Br=Array.from({length:Qe.count},(t,e)=>Qe.first+e*Qe.pitch),n2=Br.slice(1).map(t=>t-Qe.pitch/2),p6=[Br[0],Br[2],Br[4]],nh=[Br[1],Br[3]],Q0={r:1.3,sill:.62,spring:3.3},Xo=[0,0,0],ml=[11,0,0],Va=[10,0,0],gl=[8,0,0];function a0(t,e,o,n,r,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),h=t.vert(n,a,s),l=t.vert(r,a,s);t.tri(i,c,h),t.tri(i,h,l)}function Z0(t,e,o,n,r,a,s,i){t.box(Math.min(e,r),Math.min(o,a),Math.min(n,s),Math.max(e,r),Math.max(o,a),Math.max(n,s),i)}function xl(t,e){let{u0:o,u1:n,w0:r,w1:a,top:s,holes:i,mat:c}=e,h=new Set([o,n]);for(let v of i){h.add(v.u0),h.add(v.u1);let m=Math.max(8,Math.ceil((v.u1-v.u0)/(v.step||.08)));for(let g=1;g<m;g++)h.add(v.u0+(v.u1-v.u0)*g/m)}for(let v of e.cuts||[])h.add(v);let l=e.topStep||.5;for(let v=o;v<n;v+=l)h.add(v);let d=[...h].filter(v=>v>=o-1e-9&&v<=n+1e-9).sort((v,m)=>v-m),u=(v,m)=>v.bot?v.bot(m):v.bottom,p=(v,m)=>{let g=s(v),x=m.map(M=>[Math.max(0,u(M,v)),Math.min(M.head(v),g)]).filter(M=>M[1]>M[0]).sort((M,_)=>M[0]-_[0]),y=[],w=0;for(let M of x)M[0]>w+1e-6&&y.push([w,M[0]]),w=Math.max(w,M[1]);return g>w+1e-6&&y.push([w,g]),y},f=(v,m,g)=>[v,m,g];for(let v=0;v<d.length-1;v++){let m=d[v],g=d[v+1],x=(m+g)/2,y=i.filter(N=>x>N.u0&&x<N.u1),w=y.length?Math.max(m,Math.max(...y.map(N=>N.u0))+1e-7):m,M=y.length?Math.min(g,Math.min(...y.map(N=>N.u1))-1e-7):g,_=p(w,y),k=p(M,y),O=Math.min(_.length,k.length);for(let N=0;N<O;N++){let[G,$]=_[N],[V,D]=k[N];$-G<1e-6&&D-V<1e-6||(a0(t,f(m,G,a),f(g,V,a),f(g,D,a),f(m,$,a),[0,0,1],c),e.frontOnly||a0(t,f(g,V,r),f(m,G,r),f(m,$,r),f(g,D,r),[0,0,-1],c))}}e.noEnds||(a0(t,f(o,0,r),f(o,0,a),f(o,s(o),a),f(o,s(o),r),[-1,0,0],c),a0(t,f(n,0,a),f(n,0,r),f(n,s(n),r),f(n,s(n),a),[1,0,0],c));for(let v of i){if(v.noReveal)continue;let m=v.mat||e.revealMat||c,g=Math.max(0,u(v,v.u0+1e-7)),x=Math.max(0,u(v,v.u1-1e-7)),y=Math.min(v.head(v.u0+1e-7),s(v.u0)),w=Math.min(v.head(v.u1-1e-7),s(v.u1));y>g+1e-6&&a0(t,f(v.u0,g,a),f(v.u0,g,r),f(v.u0,y,r),f(v.u0,y,a),[1,0,0],m),w>x+1e-6&&a0(t,f(v.u1,x,r),f(v.u1,x,a),f(v.u1,w,a),f(v.u1,w,r),[-1,0,0],m);let M=Math.max(8,Math.ceil((v.u1-v.u0)/(v.step||.06)));for(let _=0;_<M;_++){let k=v.u0+(v.u1-v.u0)*_/M,O=v.u0+(v.u1-v.u0)*(_+1)/M,N=Math.max(k,v.u0+1e-7),G=Math.min(O,v.u1-1e-7),$=Math.min(v.head(N),s(k)),V=Math.min(v.head(G),s(O));if(!($>=s(k)-1e-6&&V>=s(O)-1e-6)){let ht=O-k,jt=V-$,Lt=Math.hypot(ht,jt)||1;a0(t,f(k,$,r),f(O,V,r),f(O,V,a),f(k,$,a),[jt/Lt,-ht/Lt,0],m)}let D=u(v,N),U=u(v,G);if(D>1e-6||U>1e-6){let ht=O-k,jt=U-D,Lt=Math.hypot(ht,jt)||1;a0(t,f(O,U,r),f(k,D,r),f(k,D,a),f(O,U,a),[-jt/Lt,ht/Lt,0],m)}}}}var Ou=(t,e,o)=>n=>{let r=n-t;return o+Math.sqrt(Math.max(0,e*e-r*r))};function v6(t,e){let o=Q0.r,n=Q0.sill,r=Q0.spring,a=ee.z0,s=24,i=(p,f,v)=>[e+Math.cos(p)*f,v,a-Math.sin(p)*f];for(let p=0;p<s;p++){let f=Math.PI*p/s,v=Math.PI*(p+1)/s,m=[-Math.cos(f),0,Math.sin(f)],g=[-Math.cos(v),0,Math.sin(v)],x=[t.vert(i(f,o,n),m,Xo),t.vert(i(v,o,n),g,Xo),t.vert(i(v,o,r),g,Xo),t.vert(i(f,o,r),m,Xo)];t.tri(x[0],x[1],x[2]),t.tri(x[0],x[2],x[3])}let c=12,h=(p,f)=>[e+Math.cos(p)*Math.cos(f)*o,r+Math.sin(f)*o,a-Math.sin(p)*Math.cos(f)*o],l=(p,f)=>[-Math.cos(p)*Math.cos(f),-Math.sin(f),Math.sin(p)*Math.cos(f)];for(let p=0;p<s;p++)for(let f=0;f<c;f++){let v=Math.PI*p/s,m=Math.PI*(p+1)/s,g=Math.PI/2*f/c,x=Math.PI/2*(f+1)/c,y=[t.vert(h(v,g),l(v,g),Va),t.vert(h(m,g),l(m,g),Va),t.vert(h(m,x),l(m,x),Va),t.vert(h(v,x),l(v,x),Va)];t.tri(y[0],y[1],y[2]),t.tri(y[0],y[2],y[3])}for(let p=1;p<8;p++){let f=Math.PI*p/8,v=[];for(let m=0;m<=10;m++){let g=Math.PI/2*m/10*.97;v.push(h(f,g).map((x,y)=>x-l(f,g)[y]*.02))}t.tube(v,m=>.035*(1-m*.6),12,6,{mat:()=>Va})}let d=t.vert([e,n,a],[0,1,0],Xo);for(let p=0;p<s;p++){let f=Math.PI*p/s,v=Math.PI*(p+1)/s;t.tri(d,t.vert(i(f,o,n),[0,1,0],Xo),t.vert(i(v,o,n),[0,1,0],Xo))}Z0(t,e-o-.12,n-.1,a,e+o+.12,n+.02,a+.12,Xo),Z0(t,e-o-.16,n-.2,a,e+o+.16,n-.1,a+.07,Xo);let u=.16;for(let p=0;p<s;p++){let f=Math.PI*p/s,v=Math.PI*(p+1)/s,m=(g,x,y)=>[e+Math.cos(g)*x,r+Math.sin(g)*x,y];a0(t,m(f,o,a+.05),m(v,o,a+.05),m(v,o+u,a+.05),m(f,o+u,a+.05),[0,0,1],Xo),a0(t,m(f,o+u,a),m(v,o+u,a),m(v,o+u,a+.05),m(f,o+u,a+.05),[Math.cos((f+v)/2),Math.sin((f+v)/2),0],Xo),a0(t,m(f,o,a),m(v,o,a),m(v,o,a+.05),m(f,o,a+.05),[-Math.cos((f+v)/2),-Math.sin((f+v)/2),0],Xo)}for(let p of[-1,1]){let f=e+p*o,v=e+p*(o+u);Z0(t,f,n,a,v,r,a+.05,Xo),Z0(t,f-p*.02,r-.12,a,v+p*.06,r,a+.09,Xo)}Z0(t,e-.11,r+o-.04,a,e+.11,r+o+u+.1,a+.09,Xo),t.lathe([[.66,n,1],[.66,n+.06,1],[.62,n+.1],[.6,n+.3],[.64,n+.34,1],[.64,n+.4,1],[0,n+.4]],e,a-.62,40,{mat:()=>Xo})}var m6=Q0.sill+.4,g6=ee.z0-.62;function x6(t){a0(t,[14,0,ee.z0-ln],[ee.x1+ln,0,ee.z0-ln],[ee.x1+ln,0,ee.z1+ln],[14,0,ee.z1+ln],[0,1,0],Xo),t.curMat=ml,xl(t,{u0:14+ln,u1:ee.x1+2*ln,w0:ee.z0-2*ln,w1:ee.z0,top:()=>ee.spring,holes:nh.map(h=>({u0:h-Q0.r,u1:h+Q0.r,bottom:Q0.sill,head:Ou(h,Q0.r,Q0.spring),noReveal:!0})),mat:ml,cuts:[ee.x1]});for(let h of nh)v6(t,h);t.save(),t.translate(0,0,ee.z1),t.rotateY(Math.PI),t.translate(-(ee.x1+2*ln),0,-2*ln);let e=h=>ee.x1+2*ln-h;xl(t,{u0:e(ee.x1+2*ln),u1:e(13.65),w0:0,w1:2*ln,top:()=>ee.spring,holes:Br.map(h=>({u0:e(h+Qe.halfW),u1:e(h-Qe.halfW),bottom:Qe.sill,head:Ou(e(h),Qe.halfW,Qe.spring)})),mat:ml,revealMat:Xo}),t.restore(),t.save(),t.translate(ee.x1,0,0),t.rotateY(-Math.PI/2);let o=Ki.DOOR,n=ee.zc,r=o.r;xl(t,{u0:ee.z0-2*ln,u1:ee.z1+2*ln,w0:-2*ln,w1:0,top:h=>h<ee.z0||h>ee.z1?ee.spring:Yi(h),topStep:.15,holes:[{u0:n-r,u1:n+r,bottom:0,head:Ou(n,r,o.spring)}],mat:ml,revealMat:Xo}),t.restore(),t.save(),t.translate(14+ln,0,0),t.rotateY(-Math.PI/2),xl(t,{u0:ee.z0,u1:ee.z1,w0:-0,w1:2*ln,top:()=>Pu,topStep:.15,holes:[{u0:ee.z0,u1:ee.z1,bottom:0,head:h=>Yi(h)}],mat:ml,revealMat:Xo}),t.restore();let a=14+ln,s=Math.ceil((ee.x1-a)/1),i=28,c=[];for(let h=0;h<=s;h++){let l=a+(ee.x1-a)*h/s,d=[];for(let u=0;u<=i;u++){let p=ee.z0+(ee.z1-ee.z0)*u/i,f=Yi(p),v=[0,$u-f,ee.zc-p],m=Math.hypot(v[1],v[2]);d.push(t.vert([l,f,p],[0,v[1]/m,v[2]/m],Va))}c.push(d)}for(let h=0;h<s;h++)for(let l=0;l<i;l++)t.tri(c[h][l],c[h+1][l],c[h][l+1]),t.tri(c[h+1][l],c[h+1][l+1],c[h][l+1])}function o2(t,e,o,n){let a=[];for(let s=0;s<=32;s++){let i=ee.z0+(ee.z1-ee.z0)*s/32,c=Yi(i),h=$u-c,l=ee.zc-i,d=Math.hypot(h,l),u=[c+h/d*n,i+l/d*n];a.push({y:c,z:i,iy:u[0],iz:u[1],n:[0,h/d,l/d]})}for(let s=0;s<32;s++){let i=a[s],c=a[s+1];a0(t,[e-o,i.iy,i.iz],[e+o,i.iy,i.iz],[e+o,c.iy,c.iz],[e-o,c.iy,c.iz],i.n,Xo),a0(t,[e-o,i.y,i.z],[e-o,i.iy,i.iz],[e-o,c.iy,c.iz],[e-o,c.y,c.z],[-1,0,0],Xo),a0(t,[e+o,i.iy,i.iz],[e+o,i.y,i.z],[e+o,c.y,c.z],[e+o,c.iy,c.iz],[1,0,0],Xo)}}function oh(t,e,o,n){let s=o,i=o+n*.16;Z0(t,e-.28,0,s,e+.28,ee.spring-.3,i,Xo),Z0(t,e-.28-.06,0,s,e+.28+.06,.32,o+n*(.16+.05),Xo),Z0(t,e-.28-.05,ee.spring-.3,s,e+.28+.05,ee.spring-.1,o+n*(.16+.05),Xo),Z0(t,e-.28-.1,ee.spring-.1,s,e+.28+.1,ee.spring,o+n*(.16+.1),Xo)}function y6(t,e){let o=Yi(ee.zc),n=[[0,o-.13,1],[.05,o-.125],[.12,o-.1],[.16,o-.06,1],[.22,o-.05],[.3,o-.075],[.4,o-.06],[.48,o-.03,1],[.55,o-.035],[.7,o-.025],[.82,o-.012,1],[.95,o+.03]];t.lathe(n,e,ee.zc,48,{mat:()=>Va});for(let r=0;r<8;r++){let a=r*Math.PI/4,s=e+Math.cos(a)*.32,i=ee.zc+Math.sin(a)*.32;t.save(),t.translate(s,o-.07,i),t.rotateY(-a),t.curMat=Va,t.ellipsoid([0,0,0],[.13,.03,.06],6,10),t.restore()}}function b6(t){t.curMat=Xo;for(let[e,o]of[[ee.z0,1],[ee.z1,-1]])Z0(t,14.35,ee.spring-.12,e,ee.x1,ee.spring,e+o*.1,Xo),Z0(t,14.35,ee.spring-.04,e,ee.x1,ee.spring+.05,e+o*.18,Xo);for(let[e,o]of[[ee.z0,1],[ee.z1,-1]])Z0(t,14.35,0,e,ee.x1,.42,e+o*.12,Xo),Z0(t,14.35,.42,e,ee.x1,.5,e+o*.07,Xo);for(let e of n2)o2(t,e,.24,.16),oh(t,e,ee.z0,1),oh(t,e,ee.z1,-1);for(let e of[14.35+.28,ee.x1-.28])o2(t,e,.28,.22),oh(t,e,ee.z0,1),oh(t,e,ee.z1,-1);for(let e of Br)y6(t,e)}function w6(t){let e=ee.z1+ln,o=e-.04,n=e+.04,r=(i,c,h,l)=>Z0(t,i,c,o,h,l,n,gl),a=Qe.halfW,s=(i,c,h,l,d,u)=>{let p=(f,v,m)=>[i+v*Math.cos(f),Qe.spring+v*Math.sin(f),m];for(let f=0;f<u;f++){let v=l+(d-l)*f/u,m=l+(d-l)*(f+1)/u;a0(t,p(v,c,o),p(m,c,o),p(m,h,o),p(v,h,o),[0,0,-1],gl),a0(t,p(v,h,n),p(m,h,n),p(m,c,n),p(v,c,n),[0,0,1],gl)}};for(let i of Br){let c=i-a,h=i+a;r(c,Qe.sill,c+.07,Qe.spring),r(h-.07,Qe.sill,h,Qe.spring),r(c,Qe.sill,h,Qe.sill+.07),r(c,Qe.spring-.04,h,Qe.spring+.04);for(let d of[-.5,0,.5])r(i+d*a-.022,Qe.sill,i+d*a+.022,Qe.spring);let l=6;for(let d=1;d<l;d++){let u=Qe.sill+(Qe.spring-Qe.sill)*d/l;r(c,u-.02,h,u+.02)}s(i,a-.07,a,0,Math.PI,32),s(i,.42,.46,0,Math.PI,20);for(let d=1;d<6;d++){let u=Math.PI*d/6,p=Math.cos(u),f=Math.sin(u),v=.02,m=(g,x)=>[i+p*g-f*v*x,Qe.spring+f*g+p*v*x];a0(t,[...m(.44,-1),o],[...m(a-.05,-1),o],[...m(a-.05,1),o],[...m(.44,1),o],[0,0,-1],gl),a0(t,[...m(.44,1),n],[...m(a-.05,1),n],[...m(a-.05,-1),n],[...m(.44,-1),n],[0,0,1],gl)}}}function _6(){let t=[],e=ee.z1+ln;for(let o of Br){let n=o-Qe.halfW,r=o+Qe.halfW;t.push([n,Qe.sill,e],[r,Qe.sill,e],[r,Qe.spring,e],[n,Qe.sill,e],[r,Qe.spring,e],[n,Qe.spring,e]);for(let a=0;a<24;a++){let s=Math.PI*a/24,i=Math.PI*(a+1)/24;t.push([o,Qe.spring,e],[o+Qe.halfW*Math.cos(s),Qe.spring+Qe.halfW*Math.sin(s),e],[o+Qe.halfW*Math.cos(i),Qe.spring+Qe.halfW*Math.sin(i),e])}}return t}function r2(t,e){t.save(),t.translate(ee.x1+ln,0,ee.zc-7),t.rotateY(-Math.PI/2),e(),t.restore()}function M6(t){r2(t,()=>{Ki.addSurround(t),Ki.addFrames(t,"fixed")})}function k6(t){return Ki.glassPanes(t||"fixed").map(([o,n,r])=>[ee.x1+ln-r,n,ee.zc-7+o])}function S6(t){x6(t),b6(t),w6(t),M6(t),t.curMat=[0,0,0]}var E6={x:ee.x1+ln,zLo:ee.zc-Ki.DOOR.r,zHi:ee.zc+Ki.DOOR.r},No=t=>t.toFixed(4);function z6(){return`
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
		float k = floor((q.x - ${No(Qe.first)}) / ${No(Qe.pitch)} + 0.5);
		if (k < 0.0 || k > ${No(Qe.count-1)}) return 0.0;
		float dx = q.x - (${No(Qe.first)} + k * ${No(Qe.pitch)});
		float side = 1.0 - smoothstep(${No(Qe.halfW)} - soft, ${No(Qe.halfW)} + soft, abs(dx));
		float sill = smoothstep(${No(Qe.sill)} - soft, ${No(Qe.sill)} + soft, q.y);
		float r = length(vec2(dx, q.y - ${No(Qe.spring)}));
		float head = q.y < ${No(Qe.spring)} ? 1.0 : 1.0 - smoothstep(${No(Qe.halfW)} - soft, ${No(Qe.halfW)} + soft, r);
		float open = side * sill * head;
		// the black glazing bars, softly
		float cover = 0.0;
		cover = max(cover, winBar(abs(dx), 0.022, soft));
		cover = max(cover, winBar(abs(abs(dx) - ${No(Qe.halfW*.5)}), 0.022, soft));
		float rowH = ${No((Qe.spring-Qe.sill)/6)};
		float ry = (q.y - ${No(Qe.sill)}) / rowH;
		cover = max(cover, q.y < ${No(Qe.spring)} ? winBar(abs(fract(ry + 0.5) - 0.5) * rowH, 0.02, soft) : 0.0);
		cover = max(cover, q.y > ${No(Qe.spring)} ? winBar(abs(r - 0.44), 0.02, soft) : 0.0);
		return open * (1.0 - cover * 0.75);
	}

	// daylight reaching point p from the windows
	float windowLight(vec3 p, vec3 n) {
		if (p.x < ${No(ee.x0)} || p.z < ${No(ee.z0-.1)} || p.z > ${No(ee.z1)}) return 0.0;
		float ndl = max(dot(n, WIN_SKY), 0.0);
		if (ndl <= 0.0) return 0.0;
		float tIn = (${No(ee.z1)} - p.z) / WIN_SKY.z;
		float tOut = (${No(ee.z1+2*ln)} - p.z) / WIN_SKY.z;
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
		${nh.map(t=>`{ float d = abs(p.x - ${No(t)}); if (d < best) { best = d; lamp = vec3(${No(t)}, ${No(Q0.spring+.55)}, ${No(ee.z0-.15)}); } }`).join(`
		`)}
		return lamp;
	}

	float nicheLight(vec3 p, vec3 n) {
		if (p.z > ${No(ee.z0+1.6)} || p.z < ${No(ee.z0-Q0.r-.1)} || p.x < ${No(ee.x0)}) return 0.0;
		vec3 lamp = nicheLamp(p);
		vec3 d = lamp - p;
		float dist = length(d);
		vec3 L = d / dist;
		// a cone pointing down into the niche
		float cone = smoothstep(0.35, 0.75, dot(-L, normalize(vec3(0.0, -1.0, 0.35))));
		float inside = 1.0 - smoothstep(${No(Q0.r)}, ${No(Q0.r+.5)}, abs(p.x - lamp.x));
		return max(dot(n, L), 0.0) * cone * inside / (1.0 + 0.35 * dist * dist);
	}

	// soft general daylight in the corridor, strongest near the glass
	float corridorGlow(vec3 p) {
		if (p.x < ${No(ee.x0-1)}) return 0.0;
		float inC = smoothstep(${No(ee.z0-1.5)}, ${No(ee.z0)}, p.z) * smoothstep(${No(ee.x0-1)}, ${No(ee.x0+1)}, p.x);
		float near = 0.55 + 0.45 * smoothstep(${No(ee.z0)}, ${No(ee.z1)}, p.z);
		return inC * near;
	}`}a2.exports={wallWithHoles:xl,windowLightGLSL:z6,addWing:S6,windowGlass:_6,farDoorGlass:k6,atFarDoor:r2,FAR_DOOR:E6,vaultY:Yi,C:ee,NICHE_X:nh,NICHE:Q0,NICHE_PLINTH_TOP:m6,NICHE_STATUE_Z:g6,WIN:Qe,winCentres:Br,piers:n2,PAINTING_X:p6,HEIGHT:Pu}});var Ar=St((Ez,c2)=>{"use strict";var Iu=_0(),rn=8,Ji=.35,Hs=14,Zi=4,xe={x0:Hs+Ji,x1:Hs+Ji+2*Zi,z0:5.9-Zi,z1:5.9+Zi,zc:5.9,cx:Hs+Ji+Zi,arch:{r:2.6,spring:4.4},dome:{r:3.3,base:rn},oculus:3.3};xe.domeTop=xe.dome.base+xe.dome.r;var tc={spokes:16,ringE:[.42,.95],bar:.035},Xn={sxz:1.32,sy:1.6,yaw:.6};Xn.crownC=[xe.cx,.4+3.4*Xn.sy,xe.zc];Xn.crownR=[2.3*Xn.sxz,1.9*Xn.sy,2.3*Xn.sxz];Xn.trunkR=.26*Xn.sxz;Xn.trunkTop=.4+2.2*Xn.sy;var s2={inner:1.05,outer:1.62,seat:.48,soil:.4},sh=(()=>{let t=[.2,1,-.15],e=Math.hypot(...t);return t.map(o=>o/e)})(),s0=[0,0,0],Qi=[11,0,0],rh=[10,0,0],ah=[9,0,0],A6=[5,0,0],qu=[3,0,0];function za(t,e,o,n,r,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),h=t.vert(n,a,s),l=t.vert(r,a,s);t.tri(i,c,h),t.tri(i,h,l)}function F0(t,e,o,n,r,a,s,i){t.box(Math.min(e,r),Math.min(o,a),Math.min(n,s),Math.max(e,r),Math.max(o,a),Math.max(n,s),i)}var T6=(t,e,o)=>n=>{let r=n-t;return o+Math.sqrt(Math.max(0,e*e-r*r))};function L6(t){t.save(),t.translate(Hs+Ji,0,0),t.rotateY(-Math.PI/2),Iu.wallWithHoles(t,{u0:0,u1:Iu.C.z0,w0:0,w1:2*Ji,top:()=>rn,holes:[{u0:xe.zc-xe.arch.r,u1:xe.zc+xe.arch.r,bottom:0,head:T6(xe.zc,xe.arch.r,xe.arch.spring),step:.05}],mat:Qi,revealMat:s0,topStep:1}),t.restore();let e=Hs-Ji;for(let[s,i]of[[0,xe.zc-xe.arch.r],[xe.zc+xe.arch.r,Iu.C.z0]])F0(t,e-.12,0,s,e,.42,i,s0),F0(t,e-.07,.42,s,e,.5,i,s0);let o=e,n=.24,r=40,a=(s,i,c)=>[c,xe.arch.spring+Math.sin(s)*i,xe.zc+Math.cos(s)*i];for(let s=0;s<r;s++){let i=Math.PI*s/r,c=Math.PI*(s+1)/r;za(t,a(i,xe.arch.r,o-.07),a(c,xe.arch.r,o-.07),a(c,xe.arch.r+n,o-.07),a(i,xe.arch.r+n,o-.07),[-1,0,0],s0),za(t,a(i,xe.arch.r+n,o),a(c,xe.arch.r+n,o),a(c,xe.arch.r+n,o-.07),a(i,xe.arch.r+n,o-.07),[0,Math.sin((i+c)/2),Math.cos((i+c)/2)],s0),za(t,a(i,xe.arch.r,o),a(c,xe.arch.r,o),a(c,xe.arch.r,o-.07),a(i,xe.arch.r,o-.07),[0,-Math.sin((i+c)/2),-Math.cos((i+c)/2)],s0)}F0(t,o-.12,xe.arch.spring+xe.arch.r-.06,xe.zc-.17,o,xe.arch.spring+xe.arch.r+n+.16,xe.zc+.17,s0);for(let s of[-1,1]){let i=xe.zc+s*xe.arch.r,c=xe.zc+s*(xe.arch.r+n);F0(t,o-.07,0,i,o,xe.arch.spring,c,s0),F0(t,o-.13,xe.arch.spring-.16,i-s*.03,o,xe.arch.spring,c+s*.08,s0),F0(t,o-.12,0,i-s*.03,o,.5,c+s*.06,s0)}}function N6(t){let{x0:e,x1:o,z0:n,z1:r}=xe;za(t,[Hs,0,n],[o,0,n],[o,0,r],[Hs,0,r],[0,1,0],s0),t.curMat=Qi,za(t,[o,0,n],[o,0,r],[o,rn,r],[o,rn,n],[-1,0,0],Qi),za(t,[e,0,n],[o,0,n],[o,rn,n],[e,rn,n],[0,0,1],Qi),za(t,[o,0,r],[e,0,r],[e,rn,r],[o,rn,r],[0,0,-1],Qi),za(t,[e,0,r],[e,0,n],[e,rn,n],[e,rn,r],[1,0,0],Qi),F0(t,o-.12,0,n,o,.42,r,s0),F0(t,e,0,n,o,.42,n+.12,s0),F0(t,e,0,r-.12,o,.42,r,s0),F0(t,o-.2,rn-.3,n,o,rn,r,s0),F0(t,e,rn-.3,n,o,rn,n+.2,s0),F0(t,e,rn-.3,r-.2,o,rn,r,s0),F0(t,e,rn-.3,n,e+.2,rn,r,s0);let a=xe.dome.r,s=48,i=[];for(let g=0;g<=s;g++){let x=Math.PI*2*g/s;i.push([xe.cx+Math.cos(x)*a,xe.zc+Math.sin(x)*a])}let c=g=>{let x=Math.abs(Math.cos(g)),y=Math.abs(Math.sin(g));return Math.min(Zi/Math.max(x,1e-6),Zi/Math.max(y,1e-6))};for(let g=0;g<s;g++){let x=Math.PI*2*g/s,y=Math.PI*2*(g+1)/s,w=c(x),M=c(y),_=[xe.cx+Math.cos(x)*w,rn,xe.zc+Math.sin(x)*w],k=[xe.cx+Math.cos(y)*M,rn,xe.zc+Math.sin(y)*M];za(t,[i[g][0],rn,i[g][1]],[i[g+1][0],rn,i[g+1][1]],k,_,[0,-1,0],rh)}t.lathe([[a+.02,rn-.18,1],[a-.12,rn-.18,1],[a-.12,rn-.06,1],[a-.05,rn,1],[a,rn+.02]],xe.cx,xe.zc,s,{mat:()=>s0});let h=16,l=(g,x,y)=>[xe.cx+Math.cos(g)*Math.cos(x)*y,xe.dome.base+Math.sin(x)*y,xe.zc+Math.sin(g)*Math.cos(x)*y],d=Math.PI/2;for(let g=0;g<s;g++)for(let x=0;x<h;x++){let y=Math.PI*2*g/s,w=Math.PI*2*(g+1)/s,M=d*x/h,_=d*(x+1)/h,k=(N,G)=>[-Math.cos(N)*Math.cos(G),-Math.sin(G),-Math.sin(N)*Math.cos(G)],O=[t.vert(l(y,M,a),k(y,M),ah),t.vert(l(w,M,a),k(w,M),ah),t.vert(l(w,_,a),k(w,_),ah),t.vert(l(y,_,a),k(y,_),ah)];t.tri(O[0],O[1],O[2]),t.tri(O[0],O[2],O[3])}for(let g=0;g<tc.spokes;g++){let x=Math.PI*2*g/tc.spokes,y=[];for(let w=0;w<=14;w++)y.push(l(x,(d-.06)*w/14,a-.04));t.tube(y,()=>.04,20,6,{mat:()=>rh})}for(let g of tc.ringE){let x=Math.cos(g)*(a-.04),y=xe.dome.base+Math.sin(g)*(a-.04),w=[];for(let M=0;M<=72;M++){let _=Math.PI*2*M/72;w.push([xe.cx+Math.cos(_)*x,y,xe.zc+Math.sin(_)*x])}t.tube(w,()=>.035,72,6,{mat:()=>rh})}t.ellipsoid([xe.cx,xe.dome.base+a-.06,xe.zc],[.16,.08,.16],6,12,{mat:()=>rh});let u=.46,p=.55,f=.12,v=(g,x,y,w)=>{F0(t,g,u-.08,x,y,u,w,qu);let M=y-g>w-x?[g+.25,y-.25]:[g+.06,y-.06],_=y-g>w-x?[x+.06,w-.06]:[x+.25,w-.25];F0(t,M[0],0,_[0],M[1],u-.08,_[1],qu)};v(o-f-p,n+1.1,o-f,r-1.1),v(e+1,n+f,o-1.1,n+f+p),v(e+1,r-f-p,o-1.1,r-f);let m=s2;t.lathe([[m.outer,0,1],[m.outer,m.seat-.1,1],[m.outer+.07,m.seat-.07,1],[m.outer+.07,m.seat,1],[m.inner-.05,m.seat,1],[m.inner-.05,m.seat-.06,1],[m.inner,m.seat-.08,1],[m.inner,m.soil]],xe.cx,xe.zc,64,{mat:()=>qu}),t.lathe([[m.inner,m.soil,1],[0,m.soil+.03]],xe.cx,xe.zc,48,{mat:()=>A6})}function R6(t){L6(t),N6(t),t.curMat=[0,0,0]}var Yo=t=>t.toFixed(4);function i2(){let t=xe.dome.r,e=tc.ringE.map(o=>Math.cos(o)*t);return`
	const vec3 SHAFT = vec3(${Yo(sh[0])}, ${Yo(sh[1])}, ${Yo(sh[2])});

	// how much sun the glass dome lets through towards p (0..1): the round
	// opening, less the soft shadows of its ribs and rings (worked out on
	// the dome's base, where the frame is seen almost straight on)
	float oculusOpen(vec3 p) {
		float t = (${Yo(xe.dome.base+.6)} - p.y) / SHAFT.y;
		vec3 q = p + SHAFT * t;
		vec2 d2 = q.xz - vec2(${Yo(xe.cx)}, ${Yo(xe.zc)});
		float d = length(d2);
		float soft = 0.02 + 0.012 * t;
		float open = 1.0 - smoothstep(${Yo(t-.15)} - soft, ${Yo(t-.15)} + soft, d);
		float hw = ${Yo(tc.bar)};
		float cover = 0.0;
		${e.map(o=>`cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, abs(d - ${Yo(o)})));`).join(`
		`)}
		float ang = atan(d2.y, d2.x);
		float stp = ${Yo(Math.PI*2/tc.spokes)};
		float da = abs(mod(ang + stp * 0.5, stp) - stp * 0.5);
		cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, d * sin(da)));
		cover = max(cover, 1.0 - smoothstep(0.16 - soft, 0.16 + soft, d));
		return open * (1.0 - cover * 0.85);
	}

	// the tree's own shade: its crown lets dappled light through, its
	// trunk blocks it
	float treeShade(vec3 p) {
		vec3 c = vec3(${Yo(Xn.crownC[0])}, ${Yo(Xn.crownC[1])}, ${Yo(Xn.crownC[2])});
		vec3 r = vec3(${Yo(Xn.crownR[0])}, ${Yo(Xn.crownR[1])}, ${Yo(Xn.crownR[2])});
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
		float tt = (${Yo(Xn.trunkTop)} - p.y) / SHAFT.y;
		if (tt > 0.0) {
			vec2 o = p.xz - vec2(${Yo(xe.cx)}, ${Yo(xe.zc)});
			vec2 dir = SHAFT.xz;
			float k = clamp(-dot(o, dir) / dot(dir, dir), 0.0, tt);
			float dist = length(o + dir * k);
			tr *= smoothstep(${Yo(Xn.trunkR*.7)}, ${Yo(Xn.trunkR*1.3)}, dist);
		}
		return tr;
	}`}function O6(){return`
	${i2()}

	// sunlight through the oculus reaching p (0..1)
	float alcoveSun(vec3 p, vec3 n) {
		if (p.x < ${Yo(xe.x0-.75)} || p.z < ${Yo(xe.z0-.5)} || p.z > ${Yo(xe.z1+.5)}) return 0.0;
		float ndl = max(dot(n, SHAFT), 0.0);
		if (ndl <= 0.0) return 0.0;
		return ndl * oculusOpen(p) * treeShade(p);
	}

	// soft daylight filling the court, brightest under the dome
	float alcoveGlow(vec3 p) {
		if (p.x < ${Yo(xe.x0-1.5)} || p.z < ${Yo(xe.z0-1.5)} || p.z > ${Yo(xe.z1+1.5)}) return 0.0;
		float inside = smoothstep(${Yo(xe.x0-1.2)}, ${Yo(xe.x0+.6)}, p.x);
		float d = length(p.xz - vec2(${Yo(xe.cx)}, ${Yo(xe.zc)}));
		return inside * (0.55 + 0.45 * smoothstep(0.0, 8.0, p.y)) * (1.0 - 0.35 * smoothstep(1.0, 5.0, d));
	}`}c2.exports={addAlcove:R6,alcoveLightGLSL:O6,oculusGLSL:i2,A:xe,BENCH:s2,SHAFT:sh,TREE:Xn}});var i0=St((zz,f2)=>{"use strict";var jr=0;try{let t=location.search;/[?&]night\b/.test(t)&&(jr=1)}catch(t){}var Aa=jr,Du=0,l2=[],ih={tick(t){let e=Du?Math.min(.1,t-Du):0;if(Du=t,Aa!==jr){let o=e/2.4;Aa=jr>Aa?Math.min(jr,Aa+o):Math.max(jr,Aa-o)}return ih.night},get night(){return Aa*Aa*(3-2*Aa)},get isNight(){return jr===1},get settled(){return Aa===jr},set(t){jr=t?1:0,l2.forEach(e=>e(jr))},toggle(){ih.set(!jr)},onChange(t){l2.push(t)}};ih.GLSL=`
uniform float night;
vec3 toNight(vec3 c, float keep) {
	float l = dot(c, vec3(0.299, 0.587, 0.114));
	vec3 n = mix(vec3(l), c, 0.35) * vec3(0.55, 0.70, 1.05) * keep;
	return mix(c, n, night);
}
`;f2.exports=ih});var Ya=St((Az,wl)=>{"use strict";var Fu=i0(),{C:Gu}=_0(),{A:ch,BENCH:yl}=Ar(),Yn=Math.PI,C6=[18,29,40],lh=.575,Xa=[],bl=(t,e,o,n,r,a,s)=>Xa.push(Object.assign({x:t,y:e,z:o,o:n,back:r,hw:a,s:1,k:1,range:7,mount:"wall"},s||{}));C6.forEach(t=>{bl(1.25+lh+.48,3.25,t,[1,0],.48,lh,{s:1.2}),bl(12.75-lh-.48,3.25,t,[-1,0],.48,lh,{s:1.2})});[3,11].forEach(t=>bl(t,3.45,Gu.hallEnd-.5,[0,-1],.5,99,{s:1.2}));var P6=[14.63,19.63,24.03,28.43,32.83,Gu.x1-.28];P6.forEach(t=>bl(t,3.15,Gu.z0+.16+.44,[0,1],.44,.28));[3,8.8].forEach(t=>bl(.35+.44,2.75,t,[1,0],.44,99));{let t=(yl.inner+yl.outer)/2,e=Math.atan2(-1.12,-.98);Xa.push({x:ch.cx+Math.cos(e)*t,y:yl.seat+.155,z:ch.zc+Math.sin(e)*t,o:[Math.cos(e),Math.sin(e)],back:0,hw:0,ring:[ch.cx,ch.zc,yl.outer+.07,yl.seat],s:.52,k:2.2,range:3.6,mount:"table"})}var Hu=.13,fh=.21,c0=Hu/Math.cos(Yn/6),Uo=t=>t.toFixed(4);function h2(t){let o=(t||Xa.map((n,r)=>r)).map(n=>{let r=Xa[n],a=-r.o[1],s=r.o[0],i=r.mount==="table"?`
				// the bench it stands on hides the floor under and around it
				if (p.y < ${Uo(r.ring[3]-.03)}) {
					float tt = ${Uo(r.y-r.ring[3])} / max(-D.y, 1e-3);
					vec2 hit = vec2(${Uo(r.x)}, ${Uo(r.z)}) + D.xz * tt - vec2(${Uo(r.ring[0])}, ${Uo(r.ring[1])});
					T *= smoothstep(${Uo(r.ring[2]-.02)}, ${Uo(r.ring[2]+.12)}, length(hit));
				}`:"",c=r.mount==="wall"?`
				{
					// what it hangs on stands behind it and hides what lies beyond
					float behind = -dot(D.xz, vec2(${Uo(r.o[0])}, ${Uo(r.o[1])}));
					if (behind > ${Uo(r.back+.06)}) {
						float side = abs(dot(D.xz, vec2(${Uo(a)}, ${Uo(s)}))) * ${Uo(r.back)} / behind;
						T *= smoothstep(${Uo(r.hw-.04)}, ${Uo(r.hw+.04)}, side);
					}
				}`:"";return`
			{
				vec3 D = p - vec3(${Uo(r.x)}, ${Uo(r.y)}, ${Uo(r.z)});
				float d2 = dot(D, D);
				if (d2 < ${Uo(r.range*r.range)}) {
					float d = sqrt(d2);
					// the direction in the lantern's own frame
					float c = ${Uo(Math.cos(Math.atan2(r.o[1],r.o[0])))}, s = ${Uo(Math.sin(Math.atan2(r.o[1],r.o[0])))};
					vec3 q = vec3(D.x * c + D.z * s, D.y, -D.x * s + D.z * c);
					float T = lanternGlass(q, 0.10 + 0.05 * d);
					${c}${i}
					float fl = 0.90 + 0.06 * sin(time * 6.1 + ${Uo(n*1.7)}) + 0.04 * sin(time * 15.3 + ${Uo(n*2.9)}) * sin(time * 1.9 + ${Uo(n*.6)});
					float lam = max(dot(N, -D / d), 0.0) * 0.85 + 0.15;
					float fall = 1.0 / (1.0 + d2 * ${Uo(1/(r.s*r.s))}) * (1.0 - smoothstep(${Uo(r.range*.6)}, ${Uo(r.range)}, d));
					sum += ${Uo(r.k)} * T * fl * lam * fall;
				}
			}`}).join("");return`
	// how much of a lantern's light gets out in direction q (lantern frame,
	// y up): through the leaded glass, past the iron posts, a little
	// through the vents in the roof and the open work under the base
	float lanternGlass(vec3 q, float blur) {
		float h = length(q.xz) + 1e-5;
		float az = atan(q.z, q.x);
		// which of the six panels, and where across it
		float t = mod(az + ${Uo(Yn/6)}, ${Uo(Yn/3)}) - ${Uo(Yn/6)};
		float U = tan(t) / ${Uo(Math.tan(Yn/6))};
		float V = (q.y / h) * (${Uo(Hu/fh)} / cos(t));
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
	}`}var fn=0,$6=1;function I6(){let t=[],e=[],o=[],n=[],r=[],a=(p,f,v,m)=>(t.push(p[0],p[1],p[2]),e.push(f[0],f[1],f[2]),o.push(v),n.push(m?m[0]:0,m?m[1]:0),t.length/3-1),s=(p,f)=>[p[0]-f[0],p[1]-f[1],p[2]-f[2]],i=(p,f)=>[p[1]*f[2]-p[2]*f[1],p[2]*f[0]-p[0]*f[2],p[0]*f[1]-p[1]*f[0]],c=p=>{let f=Math.hypot(p[0],p[1],p[2])||1;return[p[0]/f,p[1]/f,p[2]/f]};function h(p,f,v,m,g,x){let y=c(i(s(f,p),s(m,p))),w=a(p,y,g,[0,0]),M=a(f,y,g,[1,0]),_=a(v,y,g,[1,1]),k=a(m,y,g,[0,1]);r.push(w,M,_,w,_,k),x&&r.push(w,_,M,w,k,_)}function l(p,f,v){for(let x=0;x<p.length;x++){let y=p[Math.max(0,x-1)],w=p[Math.min(p.length-1,x+1)],M=c(s(w,y)),_=Math.abs(M[1])>.9?[1,0,0]:[0,1,0],k=c(i(M,_)),O=i(k,M),N=typeof f=="function"?f(x/(p.length-1)):f;for(let G=0;G<=6;G++){let $=G/6*Yn*2,V=Math.cos($),D=Math.sin($),U=[k[0]*V+O[0]*D,k[1]*V+O[1]*D,k[2]*V+O[2]*D];a([p[x][0]+U[0]*N,p[x][1]+U[1]*N,p[x][2]+U[2]*N],U,v)}}let g=t.length/3-p.length*7;for(let x=0;x<p.length-1;x++)for(let y=0;y<6;y++){let w=g+x*7+y,M=w+6+1;r.push(w,M,w+1,w+1,M,M+1)}}function d(p,f,v,m,g,x,y,w,M){let _=(k,O,N)=>{let G=x+Yn/6+N*Yn/3;return[p[0]+Math.cos(G)*k,O,p[2]+Math.sin(G)*k]};for(let k=0;k<6;k++)h(_(m,f,k+1),_(m,f,k),_(g,v,k),_(g,v,k+1),y);if(w&&g>0)for(let k=0;k<6;k++){let O=a([p[0],v,p[2]],[0,1,0],y),N=a(_(g,v,k),[0,1,0],y),G=a(_(g,v,k+1),[0,1,0],y);r.push(O,G,N)}if(M&&m>0)for(let k=0;k<6;k++){let O=a([p[0],f,p[2]],[0,-1,0],y),N=a(_(m,f,k),[0,-1,0],y),G=a(_(m,f,k+1),[0,-1,0],y);r.push(O,N,G)}}function u(p,f,v,m,g,x,y){let w=[];for(let _=0;_<=18;_++){let k=_/18,O=(y||0)+k*m*Yn*2,N=v*(1-.75*k);w.push([p[0]+f[0]*Math.cos(O)*N,p[1]+Math.sin(O)*N,p[2]+f[2]*Math.cos(O)*N])}l(w,g,x)}return Xa.forEach(p=>{let f=p.s,v=Math.atan2(p.o[1],p.o[0]),m=[p.x,p.y,p.z],g=(w,M,_)=>[p.x+p.o[0]*w-p.o[1]*(_||0),p.y+M,p.z+p.o[1]*w+p.o[0]*(_||0)],x=p.y-fh*f,y=p.y+fh*f;for(let w=0;w<6;w++){let M=v+Yn/6+w*Yn/3,_=M+Yn/3,k=c0*f*.97,O=[p.x+Math.cos(M)*k,x,p.z+Math.sin(M)*k],N=[p.x+Math.cos(_)*k,x,p.z+Math.sin(_)*k];h(N,O,[O[0],y,O[2]],[N[0],y,N[2]],$6,!0)}for(let w=0;w<6;w++){let M=v+Yn/6+w*Yn/3,_=c0*f;l([[p.x+Math.cos(M)*_,x-.02*f,p.z+Math.sin(M)*_],[p.x+Math.cos(M)*_,y+.02*f,p.z+Math.sin(M)*_]],.011*f,fn)}d(m,x-.035*f,x,c0*f*1.12,c0*f*1.12,v,fn,!0,!0),d(m,x-.1*f,x-.035*f,c0*f*.55,c0*f*1,v,fn,!1,!0),d(m,x-.17*f,x-.1*f,0,c0*f*.55,v,fn,!1,!1);for(let w=0;w<6;w++){let M=v+w*Yn/3,_=Hu*f*1.06,k=[p.x+Math.cos(M)*_,x-.06*f,p.z+Math.sin(M)*_];u(k,[-Math.sin(M),0,Math.cos(M)],.03*f,.85,.004*f,fn,.3)}d(m,y,y+.03*f,c0*f*1.14,c0*f*1.14,v,fn,!1,!0),d(m,y+.03*f,y+.2*f,c0*f*1.14,c0*f*.32,v,fn,!1,!1),d(m,y+.2*f,y+.27*f,c0*f*.34,c0*f*.34,v,fn,!1,!1),d(m,y+.27*f,y+.37*f,c0*f*.42,0,v,fn,!1,!0),l([[p.x,y+.36*f,p.z],[p.x,y+.47*f,p.z]],w=>.01*f*(1-.7*w),fn),d([p.x,0,p.z],y+.44*f,y+.47*f,.018*f,0,v,fn,!1,!0);for(let w=0;w<6;w++){let M=v+Yn/6+w*Yn/3,_=c0*f*1.14,k=[p.x+Math.cos(M)*_,y+.03*f,p.z+Math.sin(M)*_];l([k,[k[0],k[1]+.09*f,k[2]]],O=>.008*f*(1-.8*O),fn),d([k[0],0,k[2]],k[1]+.035*f,k[1]+.06*f,.014*f,.014*f,M,fn,!0,!0)}if(p.mount==="wall"){let w=p.back,M=x-.32,_=g(-w,0,0);(($,V,D)=>{let U=[p.o[0],0,p.o[1]],ht=[-p.o[1],0,p.o[0]],jt=(tt,W,st)=>[_[0]+ht[0]*tt+U[0]*st,W,_[2]+ht[2]*tt+U[2]*st],Lt=.03,gt=.065;h(jt(-D,$,gt),jt(D,$,gt),jt(D,V,gt),jt(-D,V,gt),fn,!0),h(jt(D,$,Lt),jt(D,$,gt),jt(D,V,gt),jt(D,V,Lt),fn,!0),h(jt(-D,$,gt),jt(-D,$,Lt),jt(-D,V,Lt),jt(-D,V,gt),fn,!0),h(jt(-D,V,gt),jt(D,V,gt),jt(D,V,Lt),jt(-D,V,Lt),fn,!0),h(jt(-D,$,Lt),jt(D,$,Lt),jt(D,$,gt),jt(-D,$,gt),fn,!0),d([_[0]+U[0]*gt,0,_[2]+U[2]*gt],V,V+.05,D*.6,0,v,fn,!1,!0),d([_[0]+U[0]*gt,0,_[2]+U[2]*gt],$-.05,$,0,D*.6,v,fn,!1,!1)})(M-.2,M+.2,.07);let O=[];for(let $=0;$<=14;$++){let V=$/14,D=-w+.05+V*(w-.05),U=M+.04+(x-.17*f-M-.04)*Math.pow(V,2.2);O.push(g(D,U-p.y,0))}l(O,$=>.022*(1-.3*$),fn);let N=[];for(let $=0;$<=10;$++){let V=$/10;N.push(g(-w+.05+V*w*.6,M-.14+V*.16+.05*Math.sin(V*Yn)-p.y,0))}l(N,.009,fn);let G=N[N.length-1];u([G[0]-p.o[0]*.03,G[1]+.02,G[2]-p.o[1]*.03],[p.o[0],0,p.o[1]],.045,1.1,.007,fn,-.4),[.3,.55].forEach($=>{let V=O[Math.round($*14)],D=N[Math.round($/.62*10)]||N[10];l([V,D],.006,fn)}),[-1,1].forEach($=>{let V=g(-.05,-fh*f-.2*f,0);u([V[0]-p.o[1]*$*.05,V[1],V[2]+p.o[0]*$*.05],[-p.o[1]*$,0,p.o[0]*$],.05*f,.9,.006,fn,Yn)})}else for(let w=0;w<3;w++){let M=v+w*Yn*2/3,_=[p.x+Math.cos(M)*c0*f*.7,x-.035*f,p.z+Math.sin(M)*c0*f*.7],k=[p.x+Math.cos(M)*c0*f*1.25,x-.17*f,p.z+Math.sin(M)*c0*f*1.25];l([_,k],.012*f,fn)}}),{pos:t,nrm:e,kind:o,uv:n,elems:r}}wl.exports=t=>{let e=I6(),o=t({vert:`
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
		${h2()}
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
		}`,attributes:{position:e.pos,normal:e.nrm,kind:e.kind,uv:e.uv},elements:e.elems,uniforms:{time:t.context("time"),night:()=>Fu.night}}),n=[],r=[];Xa.forEach((s,i)=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(c=>{n.push(c[0],c[1]),r.push(s.x,s.y,s.z,s.s+i*.001)})});let a=t({vert:`
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
		}`,attributes:{corner:n,at:r},count:n.length/2,uniforms:{time:t.context("time"),night:()=>Fu.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o(),Fu.night>.01&&a()}};wl.exports.lanternGLSL=h2;wl.exports.LANTERNS=Xa;wl.exports.TREE_LANTERN=[Xa.length-1]});var Za=St((Tz,J0)=>{"use strict";var q6=i0(),jo=Math.PI,Kn=t=>(+t).toFixed(4),D6=t=>`vec3(${Kn(t[0])}, ${Kn(t[1])}, ${Kn(t[2])})`,Je={x:-7,z:44.5},po=5.2,g0=15,ke={z0:42.6,z1:46.4,zc:44.5,spring:4,r:1.9},la={z0:42.2,z1:46.8,top:6.3,x:.35},dh=[Je.x-Math.sqrt(po*po-3.05*3.05),0,0],Rn={x0:-2.05+dh[0],x1:dh[0],z0:41.45,z1:47.55,top:4.3},Uu=[[Rn.x1+.05,2.35,Rn.z0-.45],[Rn.x1+.05,2.35,Rn.z1+.45]].map(([t,e,o])=>{let n=Math.atan2(o-Je.z,t-Je.x);return[Je.x+Math.cos(n)*(po-.16),e,Je.z+Math.sin(n)*(po-.16)]}),Fo={ri:3.4,ro:po,a0:-35*jo/180,rise:.1836,step:3.6*jo/180,n:88,thick:.36};Fo.k=Fo.rise/Fo.step;var G0=t=>Fo.a0-t,Qa=t=>t*Fo.k,vn={x:Je.x+.1,z:Je.z-.15,yaw:-jo/2,scale:1.3},Ta=vn.scale/1.1,_l={keyX0:vn.x-.524*Ta,keyX1:vn.x+.491*Ta,keyTop:.647*Ta,keyFront:vn.z+.808*Ta,keyBack:vn.z+.72*Ta,stoolX:vn.x-.041*Ta,stoolZ:vn.z+1.122*Ta,stoolFront:vn.z+.96*Ta,stoolTop:.37*Ta,heading:jo},uh=[[3.6,44.5],[.6,44.5],[-2.2,44.7],[-4.5,46.5],[-7,47.2],[-9.4,46.6],[-10.5,44.9],[-10.9,43.2]];function d2(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let o=e;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function F6(t,e){let o=1e9;for(let n=0;n<uh.length-1;n++){let[r,a]=uh[n],[s,i]=uh[n+1],c=s-r,h=i-a,l=Math.max(0,Math.min(1,((t-r)*c+(e-a)*h)/(c*c+h*h)));o=Math.min(o,Math.hypot(t-r-c*l,e-a-h*l))}return o}var hh=t=>ke.spring+Math.sqrt(Math.max(0,ke.r*ke.r-(t-ke.zc)*(t-ke.zc))),Ka=t=>Je.x+Math.sqrt(Math.max(0,po*po-(t-Je.z)*(t-Je.z)));function ec(t,e){return Math.hypot(t-Je.x,e-Je.z)<po||t<=0&&t>Je.x&&e>ke.z0&&e<ke.z1||t>Rn.x0&&t<Rn.x1&&e>Rn.z0&&e<Rn.z1}function G6(t,e){if(Math.hypot(t-Je.x,e-Je.z)<Fo.ri-.05)return 99;let n=Math.atan2(e-Je.z,t-Je.x),r=Fo.a0-n;for(;r<0;)r+=2*jo;for(;r>=2*jo;)r-=2*jo;return r>Fo.n*Fo.step?99:Qa(r)-Fo.thick}function H6(){let t=[],e=d2(1729),o=(a,s,i)=>{for(let c=Math.max(0,t.length-400);c<t.length;c++){let h=t[c];if(!(h[1]>.01)&&Math.hypot(h[0]-a,h[2]-s)<i+h[3]+.012)return!0}return!1},n=(a,s)=>{let i=a-vn.x,c=s-vn.z,h=Math.cos(vn.yaw),l=Math.sin(vn.yaw),d=(h*i-l*c)/vn.scale,u=(l*i+h*c)/vn.scale;return d>-1.05&&d<1.3&&u>-.7&&u<.72},r=0;for(;t.length<980&&r<6e4;){r++;let s=e()<.55?1.25+e()*2.1:1.25+Math.sqrt(e())*(po-1.45),i=e()*2*jo,c=Je.x+Math.cos(i)*s,h=Je.z+Math.sin(i)*s;if(!ec(c,h)||s>po-.18||n(c,h)||F6(c,h)<.62||G6(c,h)<2.3||c<Rn.x1+.9)continue;let l=.022+e()*.02;if(o(c,h,l))continue;let d=e()<.15?.22+e()*.14:.05+e()*.15;t.push([c,0,h,l,d,e()*100])}for(let a=1;a<26;a++){let s=a<12?3:2;for(let i=0;i<s;i++){let c=(a+.25+e()*.5)*Fo.step,h=G0(c),l=Fo.ri+.55+e()*(Fo.ro-Fo.ri-.75),d=.022+e()*.016;t.push([Je.x+Math.cos(h)*l,(a+1)*Fo.rise,Je.z+Math.sin(h)*l,d,.05+e()*.14,e()*100])}}for(let a of Uu)for(let[s,i,c]of[[0,0,.26],[.06,.05,.18],[-.05,-.04,.14]])t.push([a[0]+s,a[1],a[2]+i,.024,c,e()*100]);for(let a of[Rn.z0-.35,Rn.z1+.35])for(let s=0;s<9;s++){let i=Rn.x1+.35+e()*.5,c=a+(e()-.5)*.5;Math.hypot(i-Je.x,c-Je.z)>po-.15||t.push([i,0,c,.026+e()*.014,.18+e()*.3,e()*100])}return t}function U6(t){let o=d2(77),n=[];for(let r=0;r<14;r++){let a=t[Math.floor(o()*t.length)];n.push([a[0],a[1]+a[4],a[2]])}for(let r=0;r<12;r++){let a=n.map(()=>[0,0,0,0]);for(let s of t){let i=[s[0],s[1]+s[4],s[2]],c=0,h=1e9;n.forEach((l,d)=>{let u=(i[0]-l[0])**2+(i[1]-l[1])**2*4+(i[2]-l[2])**2;u<h&&(h=u,c=d)}),a[c][0]+=i[0],a[c][1]+=i[1],a[c][2]+=i[2],a[c][3]++}n=a.map((s,i)=>s[3]?[s[0]/s[3],s[1]/s[3],s[2]/s[3],s[3]]:n[i])}return n.filter(r=>r[3]>0).map(r=>[r[0],r[1]+.12,r[2],r[3]/t.length])}var Bu=H6(),u2=U6(Bu.filter(t=>t[1]<2||t[1]>2.5)).concat(Uu.map(t=>[t[0],t[1]+.35,t[2],.035]));function p2(){return`
	vec3 roomLight(vec3 p, vec3 N, vec3 V, float gloss, out vec3 spec) {
		spec = vec3(0.0);
		vec3 col = vec3(0.0);
		float floorK = (p.y < 0.02 && N.y > 0.9) ? 1.0 : 0.0;
		${u2.map((e,o)=>`
		{
			vec3 d = ${D6(e)} - p;
			float dd = dot(d, d);
			vec3 L = d * inversesqrt(dd);
			float fl = 0.86 + 0.08 * sin(time * ${Kn(5.3+o*.71)} + ${Kn(o*1.9)}) + 0.06 * sin(time * ${Kn(11.7+o*1.3)} + ${Kn(o*.7)});
			float w = ${Kn(e[3]*u2.length)} * fl;
			float lam = max(dot(N, L), 0.0) * 0.82 + 0.18;
			col += w * lam / (0.7 + dd * 0.42);
			// the floor glows in pools round the candles
			col += w * floorK * 0.9 / (0.02 + dd * 7.0);
			spec += w * pow(max(dot(N, normalize(L + V)), 0.0), mix(10.0, 180.0, gloss)) * gloss * 1.6 / (0.25 + dd * 0.9);
		}`).join("")}
		col *= vec3(1.0, 0.56, 0.24) * 0.62;
		spec *= vec3(1.0, 0.62, 0.30) * 0.62;
		// light from the oculus, high above: pale by day, moonlight at night
		float up = smoothstep(0.0, ${Kn(g0)}, p.y);
		vec3 sky = mix(vec3(0.10, 0.095, 0.085), vec3(0.030, 0.045, 0.085), night);
		col += sky * (0.35 + 0.65 * up) * (0.55 + 0.45 * max(N.y, 0.0)) * (0.6 + 0.4 * max(-dot(N, normalize(p - vec3(${Kn(Je.x)}, ${Kn(g0)}, ${Kn(Je.z)}))), 0.0));
		// and straight down from it a soft pool falls on the piano and
		// whoever is playing it: it catches his shoulders, his hair, the
		// edge of the lid, and lifts them out of the dark
		float pool = 1.0 - smoothstep(0.5, 2.9, length(p.xz - vec2(${Kn(_l.stoolX)}, ${Kn(_l.keyFront+.1)})));
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
	}`}var so={FLOOR:0,WALL:1,STEP:2,SOFFIT:3,STRING:4,CEIL:5,OCULUS:6,HALLSTONE:7,IRON:8,RAILING:9,CANDLE:10};function v2(){let t={pos:[],nrm:[],kind:[],uv:[],idx:[]};return t.v=(e,o,n,r)=>(t.pos.push(e[0],e[1],e[2]),t.nrm.push(o[0],o[1],o[2]),t.kind.push(n),t.uv.push(r?r[0]:0,r?r[1]:0),t.pos.length/3-1),t.quad=(e,o,n,r,a,s,i)=>{let c=t.v(e,a,s,i&&i[0]),h=t.v(o,a,s,i&&i[1]),l=t.v(n,a,s,i&&i[2]),d=t.v(r,a,s,i&&i[3]);t.idx.push(c,h,l,c,l,d)},t.tri=(e,o,n,r,a)=>{let s=t.v(e,r,a),i=t.v(o,r,a),c=t.v(n,r,a);t.idx.push(s,i,c)},t}function B6(){let t=v2(),e=(n,r,a)=>[Je.x+Math.cos(n)*r,a,Je.z+Math.sin(n)*r],o=n=>[Math.cos(n),0,Math.sin(n)];for(let r=0;r>Rn.x0-.01;r-=.25)for(let a=41.2;a<47.8;a+=.2){let s=r-.25,i=r,c=a,h=a+.2;if(!(ec(s,c)||ec(i,c)||ec(s,h)||ec(i,h)||ec((s+i)/2,(c+h)/2)))continue;let l=c,d=h;s>Ka(ke.z0)-.3&&(l=Math.max(l,ke.z0),d=Math.min(d,ke.z1),d<=l)||t.quad([s,0,l],[s,0,d],[i,0,d],[i,0,l],[0,1,0],so.FLOOR)}{for(let r=0;r<360;r++){let a=r/360*2*jo,s=(r+1)/360*2*jo,i=(a+s)/2,c=e(i,po,0),h=0;c[0]>Je.x&&c[2]>ke.z0-.02&&c[2]<ke.z1+.02&&(h=Math.max(hh(Math.min(Math.max(e(a,po,0)[2],ke.z0),ke.z1)),hh(Math.min(Math.max(e(s,po,0)[2],ke.z0),ke.z1)))),c[0]<Je.x&&c[2]>Rn.z0-.02&&c[2]<Rn.z1+.02&&(h=Rn.top);let l=a*po,d=s*po,u=o(a).map(v=>-v),p=o(s).map(v=>-v),f=[h];for(let v=Math.ceil(h/2.5)*2.5;v<g0;v+=2.5)v>h+.01&&f.push(v);f.push(g0);for(let v=0;v<f.length-1;v++){let m=f[v],g=f[v+1],x=t.v(e(a,po,m),u,so.WALL,[l,m]),y=t.v(e(s,po,m),p,so.WALL,[d,m]),w=t.v(e(s,po,g),p,so.WALL,[d,g]),M=t.v(e(a,po,g),u,so.WALL,[l,g]);t.idx.push(x,y,w,x,w,M)}}for(let[r,a,s]of[[6.55,.22,.07],[0,.32,.05]])for(let i=0;i<360;i++){let c=i/360*2*jo,h=(i+1)/360*2*jo,l=(c+h)/2,d=e(l,po,0);if(r<1&&(d[0]>Je.x&&d[2]>ke.z0&&d[2]<ke.z1||d[0]<Je.x&&d[2]>Rn.z0&&d[2]<Rn.z1))continue;let u=po-s;t.quad(e(c,u,r),e(h,u,r),e(h,u,r+a),e(c,u,r+a),o(l).map(p=>-p),so.WALL,[[c*po,r+100],[h*po,r+100],[h*po,r+a+100],[c*po,r+a+100]]),t.quad(e(c,u,r+a),e(h,u,r+a),e(h,po,r+a),e(c,po,r+a),[0,1,0],so.WALL,[[0,200],[0,200],[0,200],[0,200]]),r>1&&t.quad(e(c,po,r),e(h,po,r),e(h,u,r),e(c,u,r),[0,-1,0],so.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let n=la.x;for(let[a,s]of[[ke.z0,1],[ke.z1,-1]]){let i=Ka(a);t.quad([n,0,a],[i,0,a],[i,ke.spring,a],[n,ke.spring,a],[0,0,s],so.WALL,[[n,0],[i,0],[i,ke.spring],[n,ke.spring]])}let r=40;for(let a=0;a<r;a++){let s=a/r*jo,i=(a+1)/r*jo,c=ke.zc-Math.cos(s)*ke.r,h=ke.zc-Math.cos(i)*ke.r,l=ke.spring+Math.sin(s)*ke.r,d=ke.spring+Math.sin(i)*ke.r,u=[0,-Math.sin(s),Math.cos(s)],p=[0,-Math.sin(i),Math.cos(i)],f=t.v([n,l,c],u,so.WALL,[n,s*ke.r]),v=t.v([Ka(c),l,c],u,so.WALL,[Ka(c),s*ke.r]),m=t.v([Ka(h),d,h],p,so.WALL,[Ka(h),i*ke.r]),g=t.v([n,d,h],p,so.WALL,[n,i*ke.r]);t.idx.push(f,v,m,f,m,g)}}{let n=la.x,r=.05;for(let h=la.z0;h<la.z1-1e-6;h+=r){let l=h,d=Math.min(la.z1,h+r),p=(f=>f>ke.z0&&f<ke.z1)((l+d)/2)?Math.max(hh(l),hh(d)):0;t.quad([n,p,l],[n,p,d],[n,la.top,d],[n,la.top,l],[1,0,0],so.HALLSTONE,[[l,p],[d,p],[d,la.top],[l,la.top]])}let a=.32,s=.06,i=n+s,c=36;for(let h=0;h<c;h++){let l=h/c*jo,d=(h+1)/c*jo,u=(g,x)=>[i,ke.spring+Math.sin(g)*x,ke.zc-Math.cos(g)*x],p=ke.r,f=ke.r+a;t.quad(u(l,p),u(d,p),u(d,f),u(l,f),[1,0,0],so.HALLSTONE,[[0,300],[0,300],[1,300],[1,300]]);let v=(g,x,y)=>[y,ke.spring+Math.sin(g)*x,ke.zc-Math.cos(g)*x],m=[0,Math.sin((l+d)/2),-Math.cos((l+d)/2)];t.quad(v(l,f,n),v(d,f,n),v(d,f,i),v(l,f,i),m,so.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad(v(l,p,n),v(d,p,n),v(d,p,i),v(l,p,i),m.map(g=>-g),so.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}for(let[h,l,d]of[[ke.z0-a,ke.z0,-1],[ke.z1,ke.z1+a,1]]){t.quad([i,0,h],[i,0,l],[i,ke.spring,l],[i,ke.spring,h],[1,0,0],so.HALLSTONE,[[0,300],[1,300],[1,300],[0,300]]);let u=d<0?h:l,p=d<0?l:h;t.quad([n,0,u],[i,0,u],[i,ke.spring,u],[n,ke.spring,u],[0,0,d],so.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad([n,0,p],[i,0,p],[i,ke.spring,p],[n,ke.spring,p],[0,0,-d],so.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);let f=ke.spring-.16,v=.16,m=.11,g=Math.min(h,l)-.05,x=Math.max(h,l)+.05;t.quad([n+m,f,g],[n+m,f,x],[n+m,f+v,x],[n+m,f+v,g],[1,0,0],so.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad([n,f+v,g],[n+m,f+v,g],[n+m,f+v,x],[n,f+v,x],[0,1,0],so.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad([n,f,g],[n,f,x],[n+m,f,x],[n+m,f,g],[0,-1,0],so.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let y of[g,x])t.quad([n,f,y],[n+m,f,y],[n+m,f+v,y],[n,f+v,y],[0,0,y===g?-1:1],so.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}{let h=ke.spring+ke.r-.05,l=ke.spring+ke.r+a+.12,d=.16,u=.22,p=i+.04;t.quad([p,h,ke.zc-d],[p,h,ke.zc+d],[p,l,ke.zc+u],[p,l,ke.zc-u],[1,0,0],so.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let f of[-1,1])t.quad([n,h,ke.zc+f*d],[p,h,ke.zc+f*d],[p,l,ke.zc+f*u],[n,l,ke.zc+f*u],[0,0,f],so.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);t.quad([n,l,ke.zc-u],[p,l,ke.zc-u],[p,l,ke.zc+u],[n,l,ke.zc+u],[0,1,0],so.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}}{let{x0:n,x1:r,z0:a,z1:s,top:i}=Rn;t.quad([n,0,a],[n,0,s],[n,i,s],[n,i,a],[1,0,0],so.WALL,[[a,0],[s,0],[s,i],[a,i]]);for(let[h,l]of[[a,1],[s,-1]]){let d=Je.x-Math.sqrt(po*po-(h-Je.z)*(h-Je.z));t.quad([n,0,h],[d,0,h],[d,i,h],[n,i,h],[0,0,l],so.WALL,[[n,0],[d,0],[d,i],[n,i]])}let c=24;for(let h=0;h<c;h++){let l=a+(s-a)*h/c,d=a+(s-a)*(h+1)/c,u=Je.x-Math.sqrt(po*po-(l-Je.z)**2),p=Je.x-Math.sqrt(po*po-(d-Je.z)**2);t.quad([n,i,l],[u,i,l],[p,i,d],[n,i,d],[0,-1,0],so.WALL,[[0,200],[0,200],[0,200],[0,200]])}for(let h=0;h<c;h++){let l=a+(s-a)*h/c,d=a+(s-a)*(h+1)/c,u=Je.x-Math.sqrt(po*po-(l-Je.z)**2)+.05,p=Je.x-Math.sqrt(po*po-(d-Je.z)**2)+.05;t.quad([u,i-.3,l],[p,i-.3,d],[p,i,d],[u,i,l],[1,0,0],so.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let r=[1.15,1.6,2.3,3,3.35,4.2,po];for(let a=0;a<120;a++){let s=a/120*2*jo,i=(a+1)/120*2*jo,c=(s+i)/2;c>jo&&(c-=2*jo);for(let h=0;h<r.length-1;h++){let l=r[h],d=r[h+1],u=c*180/jo;l>=3.3&&u>8&&u<85||t.quad(e(s,l,g0),e(s,d,g0),e(i,d,g0),e(i,l,g0),[0,-1,0],so.CEIL,[[s*l,l],[s*d,d],[i*d,d],[i*l,l]])}t.quad(e(s,1.15,g0),e(i,1.15,g0),e(i,1.15,g0+.7),e(s,1.15,g0+.7),o(c).map(h=>-h),so.CEIL,[[0,400],[0,400],[0,400],[0,400]]),t.tri([Je.x,g0+.7,Je.z],e(i,1.15,g0+.7),e(s,1.15,g0+.7),[0,-1,0],so.OCULUS)}}{let n=Fo.ri,r=Fo.ro,a=Fo.n*Fo.step;for(let c=0;c<Fo.n;c++){let h=c*Fo.step,l=(c+1)*Fo.step,d=G0(h),u=G0(l),p=(c+1)*Fo.rise,f=c*Fo.rise,v=2;for(let x=0;x<v;x++){let y=d+(u-d)*x/v-(x===0?.004:0),w=d+(u-d)*(x+1)/v;t.quad(e(y,n,p),e(y,r,p),e(w,r,p),e(w,n,p),[0,1,0],so.STEP,[[n*y,c],[r*y,c],[r*w,c],[n*w,c]])}let m=[-Math.sin(d),0,Math.cos(d)],g=d-.004;t.quad(e(g,n,f),e(g,r,f),e(g,r,p),e(g,n,p),m,so.STEP,[[n*d,c+.5],[r*d,c+.5],[r*d,c+.5],[n*d,c+.5]]),t.quad(e(d,n,Qa(h)+.06),e(u,n,Qa(l)+.06),e(u,n,p),e(g,n,p),o((d+u)/2).map(x=>-x),so.STEP,[[0,500],[0,500],[0,500],[0,500]])}let s=Math.ceil(a/(1.2*jo/180)),i=[n,n+.6,n+1.2,r];for(let c=0;c<s;c++){let h=c/s*a,l=(c+1)/s*a,d=G0(h),u=G0(l),p=Qa(h),f=Qa(l),v=p-Fo.thick,m=f-Fo.thick,g=o(d).map(k=>-k),x=o(u).map(k=>-k),y=t.v(e(d,n,v),g,so.STRING,[h*n,0]),w=t.v(e(u,n,m),x,so.STRING,[l*n,0]),M=t.v(e(u,n,f+.06),x,so.STRING,[l*n,1]),_=t.v(e(d,n,p+.06),g,so.STRING,[h*n,1]);t.idx.push(y,w,M,y,M,_);for(let k=0;k<i.length-1;k++){let O=i[k],N=i[k+1],G=$=>{let V=o($);return[-V[0]*.12,-.99,-V[2]*.12]};t.quad(e(d,O,v),e(d,N,v),e(u,N,m),e(u,O,m),G((d+u)/2),so.SOFFIT,[[h*O,O],[h*N,N],[l*N,N],[l*O,O]])}}}return t}function j6(){let t=v2(),e=Fo.ri+.045,o=Fo.n*Fo.step,n=Math.ceil(o/(.8*jo/180)),r=.92,a=(c,h,l)=>[Je.x+Math.cos(c)*h,l,Je.z+Math.sin(c)*h],s=c=>[Math.cos(c),0,Math.sin(c)];for(let c=0;c<n;c++){let h=c/n*o,l=(c+1)/n*o,d=G0(h),u=G0(l),p=Qa(h)+.06,f=Qa(l)+.06,v=s(d).map(k=>-k),m=s(u).map(k=>-k),g=h*e,x=l*e,y=t.v(a(d,e,p),v,so.RAILING,[g,0]),w=t.v(a(u,e,f),m,so.RAILING,[x,0]),M=t.v(a(u,e,f+r),m,so.RAILING,[x,r]),_=t.v(a(d,e,p+r),v,so.RAILING,[g,r]);t.idx.push(y,w,M,y,M,_)}((c,h,l,d)=>{let p=v=>{let m=G0(v),g=Qa(v)+.06+h,x=a(m,e+c,g),y=s(m),w=[];for(let M=0;M<8;M++){let _=M/8*2*jo,k=[y[0]*Math.cos(_),Math.sin(_),y[2]*Math.cos(_)];w.push([[x[0]+k[0]*l,x[1]+k[1]*l,x[2]+k[2]*l],k])}return w},f=p(0);for(let v=1;v<=n;v++){let m=p(v/n*o);for(let g=0;g<8;g++){let x=(g+1)%8,y=t.v(f[g][0],f[g][1],d),w=t.v(m[g][0],m[g][1],d),M=t.v(m[x][0],m[x][1],d),_=t.v(f[x][0],f[x][1],d);t.idx.push(y,w,M,y,M,_)}f=m}})(0,r+.02,.028,so.IRON);for(let c of Uu){let h=Math.atan2(c[2]-Je.z,c[0]-Je.x),l=[Math.cos(h),0,Math.sin(h)],d=12;for(let v=0;v<d;v++){let m=v/d*2*jo,g=(v+1)/d*2*jo,x=(y,w,M)=>[c[0]+Math.cos(y)*w,M,c[2]+Math.sin(y)*w];t.quad(x(m,.16,c[1]),x(g,.16,c[1]),x(g,.13,c[1]-.05),x(m,.13,c[1]-.05),[Math.cos(m)*.6,.8,Math.sin(m)*.6],so.IRON),t.quad(x(m,.16,c[1]),x(g,.16,c[1]),x(g,0,c[1]+.002),x(m,0,c[1]+.002),[0,1,0],so.IRON)}let u=[c[0]+l[0]*.16,c[1]-.35,c[2]+l[2]*.16],p=[-l[2],0,l[0]],f=.018;t.quad([u[0]-p[0]*f,u[1],u[2]-p[2]*f],[u[0]+p[0]*f,u[1],u[2]+p[2]*f],[c[0]+p[0]*f,c[1]-.05,c[2]+p[2]*f],[c[0]-p[0]*f,c[1]-.05,c[2]-p[2]*f],[-l[0],.5,-l[2]],so.IRON)}{let c=G0(0),h=a(c,e,0),l=10;for(let d=0;d<l;d++){let u=d/l*2*jo,p=(d+1)/l*2*jo,f=(v,m,g)=>[h[0]+Math.cos(v)*m,g,h[2]+Math.sin(v)*m];t.quad(f(u,.035,0),f(p,.035,0),f(p,.035,r+.1),f(u,.035,r+.1),[Math.cos((u+p)/2),0,Math.sin((u+p)/2)],so.IRON),t.quad(f(u,.06,r+.1),f(p,.06,r+.1),f(p,.03,r+.2),f(u,.03,r+.2),[Math.cos((u+p)/2)*.8,.6,Math.sin((u+p)/2)*.8],so.IRON)}}return t}function W6(){let t=[],e=[],o=[],n=[];for(let a of Bu){let[s,i,c,h,l,d]=a,u=t.length/3;for(let f=0;f<=7;f++){let v=f/7*2*jo+d,m=Math.cos(v),g=Math.sin(v);t.push(s+m*h,i,c+g*h,s+m*h,i+l,c+g*h),e.push(m,0,g,m,0,g),o.push(0,l,d,1,l,d)}for(let f=0;f<7;f++){let v=u+f*2;n.push(v,v+2,v+3,v,v+3,v+1)}let p=t.length/3;t.push(s,i+l-.006,c),e.push(0,1,0),o.push(2,l,d);for(let f=0;f<7;f++){let v=f/7*2*jo+d;t.push(s+Math.cos(v)*h,i+l,c+Math.sin(v)*h),e.push(0,1,0),o.push(1,l,d)}for(let f=0;f<7;f++)n.push(p,p+1+f,p+1+(f+1)%7)}return{pos:t,nrm:e,info:o,idx:n}}function V6(){let t=[],e=[],o=[],n=[];for(let r of Bu){let[a,s,i,,c,h]=r,l=t.length/3;for(let d of[[-1,0],[1,0],[1,1],[-1,1]])t.push(a,s+c+.004,i),e.push(d[0],d[1]),o.push(h);n.push(l,l+1,l+2,l,l+2,l+3)}return{ctr:t,corner:e,ph:o,idx:n}}function X6(t){let e=new DataView(t),o=e.getUint32(4,!0),n=e.getUint32(8,!0),r=[],a=[];for(let g=0;g<3;g++)r.push(e.getFloat32(12+g*4,!0)),a.push(e.getFloat32(24+g*4,!0));let s=36,i=new Uint16Array(t,s,o*3);s+=o*6;let c=new Uint16Array(t,s,n);s+=n*2;let h=new Int8Array(t,s,o*3);s+=o*3;let l=new Uint8Array(t,s,o),d=new Float32Array(o*3),u=new Float32Array(o*3),p=new Float32Array(o),f=Math.cos(vn.yaw),v=Math.sin(vn.yaw),m=vn.scale;for(let g=0;g<o;g++){let x=(r[0]+i[g*3]/65535*a[0])*m,y=(r[1]+i[g*3+1]/65535*a[1])*m,w=(r[2]+i[g*3+2]/65535*a[2])*m;d[g*3]=vn.x+f*x+v*w,d[g*3+1]=y,d[g*3+2]=vn.z-v*x+f*w;let M=h[g*3]/127,_=h[g*3+1]/127,k=h[g*3+2]/127;u[g*3]=f*M+v*k,u[g*3+1]=_,u[g*3+2]=-v*M+f*k,p[g]=l[g]}return{pos:d,nrm:u,mat:p,idx:new Uint32Array(c)}}function Y6(){let t=[],e=(d,u)=>[Je.x+Math.cos(d)*u,Je.z+Math.sin(d)*u];t.push([[0,ke.z0],[Ka(ke.z0),ke.z0]]),t.push([[Ka(ke.z1),ke.z1],[0,ke.z1]]);let o=Math.asin((ke.z1-Je.z)/po),n=72;for(let d=0;d<n;d++){let u=o+d/n*(2*jo-2*o),p=o+(d+1)/n*(2*jo-2*o);t.push([e(u,po-.25),e(p,po-.25)])}let r=dh[0]-.55+.35;t.push([[r,Rn.z0],[r,Rn.z1]]);let a=2.4/Fo.k,s=12;for(let d=0;d<s;d++){let u=G0(d/s*a),p=G0((d+1)/s*a);t.push([e(u,Fo.ri-.2),e(p,Fo.ri-.2)])}t.push([e(G0(0),Fo.ri-.2),e(G0(0),po)]),t.push([e(G0(a),Fo.ri-.2),e(G0(a),po)]);let i=Math.cos(vn.yaw),c=Math.sin(vn.yaw),h=vn.scale,l=[[-1,-.62],[1.25,-.62],[1.25,.62],[-1,.62]].map(([d,u])=>[vn.x+(i*d+c*u)*h,vn.z+(-c*d+i*u)*h]);for(let d=0;d<4;d++)t.push([l[d],l[(d+1)%4]]);return t}J0.exports=t=>{let e=B6(),o=j6(),n=W6(),r=V6(),a=Ya(),s=`
	precision highp float;
	${q6.GLSL}
	uniform float time;
	${p2()}
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
				base *= 1.0 - 0.25 * smoothstep(3.0, ${Kn(g0)}, v_pos.y);
			} else if (k < 2.5) {
				// the steps: a greyer, harder stone, worn paler in the middle
				float r = length(v_pos.xz - vec2(${Kn(Je.x)}, ${Kn(Je.z)}));
				base = limestone(v_pos.xz * 1.4 + v_uv * 0.3) * vec3(0.90, 0.88, 0.86);
				base *= 1.0 + 0.10 * (1.0 - smoothstep(0.0, 0.6, abs(r - ${Kn((Fo.ri+Fo.ro)/2)})));
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
				vec2 q = v_pos.xz - vec2(${Kn(Je.x)}, ${Kn(Je.z)});
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
		}`,attributes:{position:e.pos,normal:e.nrm,kind:e.kind,uv:e.uv},elements:new Uint32Array(e.idx),cull:{enable:!1}}),h=t({vert:i,frag:`${s}
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
		}`,attributes:{ctr:r.ctr,corner:r.corner,ph:r.ph},elements:new Uint32Array(r.idx),uniforms:{halo:t.prop("halo")},depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),u=null;fetch("res/piano.bin").then(m=>{if(!m.ok)throw new Error("Could not load piano.bin");return m.arrayBuffer()}).then(m=>{let g=X6(m);u=t({vert:`
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
				}`,attributes:{position:g.pos,normal:g.nrm,mat:g.mat},elements:g.idx,cull:{enable:!1}})}).catch(m=>console.error(m));let p=(()=>{let m=[],g=[],x=[],y=[],M=[Je.x,g0-.3,Je.z],_=[_l.stoolX,.02,_l.keyFront+.1],k=1.25,O=2.35;for(let N=0;N<=40;N++){let G=N/40*2*jo,$=Math.cos(G),V=Math.sin(G);m.push(M[0]+$*k,M[1],M[2]+V*k,_[0]+$*O,_[1],_[2]+V*O),g.push($,.08,V,$,.08,V),x.push(1,0)}for(let N=0;N<40;N++){let G=N*2;y.push(G,G+1,G+3,G,G+3,G+2)}return{pos:m,nrm:g,hh:x,idx:y}})(),f=t({vert:`
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
		}`,attributes:{position:p.pos,normal:p.nrm,hh:p.hh},elements:p.idx,depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});function v(m){let g=m&&m.reflected;c(),h(),l(),u&&u(),g||(f(),d({halo:1}),d({halo:0}))}return v};J0.exports.C=Je;J0.exports.R=po;J0.exports.PASS=ke;J0.exports.SURR=la;J0.exports.OFF=dh;J0.exports.BAY=Rn;J0.exports.PATH=uh;J0.exports.PIANO=vn;J0.exports.PLAY=_l;J0.exports.TOP=g0;J0.exports.roomGLSL=p2;J0.exports.segments=Y6});var S2=St((Lz,k2)=>{"use strict";var K6=qs(),{addFlutedColumn:m2,addStatue:Q6,addPlant:Z6}=Bm(),g2=Wa(),J6=Xi(),Wr=_0(),t_=Ar(),nc=Za(),Ro=14,Cn=Wr.C.hallEnd+.35,Zo=8,Ho=.35,ju=1.15,Wu=1.15,Vu=[18,29,40],e_=[[[0,0],[0,nc.PASS.z0]],[[0,nc.PASS.z1],[0,Cn]],[[Ro,Cn],[Ro,0]],[[0,0],[Ro,0]],[[Ro,Cn],[0,Cn]]],w2=[];for(let t of Vu)for(let e of[1.25,Ro-1.25]){let o=ju/2,n=Wu/2;w2.push([[e-o,t-n],[e+o,t-n]],[[e+o,t-n],[e+o,t+n]],[[e+o,t+n],[e-o,t+n]],[[e-o,t+n],[e-o,t-n]])}var vh=12,_2=2.95,M2=.62,xh=_2+M2,mh=[{file:"venus.bin",x:1.85,z:Cn-1.6,yaw:2.67,height:5.2,pedestal:!0,mat:1},{file:"david.bin",x:Ro-2.1,z:Cn-1.6,yaw:-2.67,height:5.2,pedestal:!0,mat:1},{file:"pieta.bin",x:1.75,z:5.9,yaw:Math.PI/2,height:3.6,base:1,mat:1},{file:"spinario.bin",x:Wr.NICHE_X[0],z:Wr.NICHE_STATUE_Z,yaw:-.35,height:1.85,base:Wr.NICHE_PLINTH_TOP,mat:3},{file:"charioteer.bin",x:Wr.NICHE_X[1],z:Wr.NICHE_STATUE_Z+.1,yaw:0,height:2.95,base:Wr.NICHE_PLINTH_TOP,mat:3}],o_={x0:Ho,x1:3.15,z0:3.6,z1:8.2,top:1},x2=.8,yh=1.17,Ml=[];[{z:10.4,dz:-.7},{z:19.2,dz:.7},{z:27.8,dz:-.7}].forEach((t,e)=>{Ml.push({x:1,z:t.z,seed:11+e*7,away:[1,t.dz]}),Ml.push({x:Ro-1,z:t.z,seed:53+e*5,away:[-1,t.dz]})});function Xu(t,e,o,n){return[[[t-o,e-n],[t+o,e-n]],[[t+o,e-n],[t+o,e+n]],[[t+o,e+n],[t-o,e+n]],[[t-o,e+n],[t-o,e-n]]]}var bh=[];for(let t of[-1,1])bh.push(...Xu(Ro/2+t*xh,vh,.85,.85));for(let t of mh.filter(e=>e.pedestal))bh.push(...Xu(t.x,t.z,yh*1.1,yh*1.1));for(let t of Ml)bh.push(...Xu(t.x,t.z,.42,.42));var n_=e_.concat(w2,bh,nc.segments());function r_(t){let o=new Map,n=(r,a,s)=>{let i=r+":"+a;o.has(i)||o.set(i,[]);let c=o.get(i);c.includes(s)||c.push(s)};for(let r of t){let a=Math.floor(Math.min(r[0][0],r[1][0])/4)-1,s=Math.floor(Math.max(r[0][0],r[1][0])/4)+1,i=Math.floor(Math.min(r[0][1],r[1][1])/4)-1,c=Math.floor(Math.max(r[0][1],r[1][1])/4)+1;for(let h=a;h<=s;h++)for(let l=i;l<=c;l++)n(h,l,r)}return{get(r,a){let s=Math.floor(r/4),i=Math.floor(a/4),c=[];for(let h=-1;h<=1;h++)for(let l=-1;l<=1;l++){let d=o.get(s+h+":"+(i+l));d&&c.push(...d)}return[...new Set(c)]}}}var gh=[],On={curMat:[0,0,0]};function Yu(t,e,o,n,r,a,s){let i=t.length/3;t.push(...o,...n,...r,...a),e.push(...s,...s,...s,...s);let c=On.curMat;return gh.push(...c,...c,...c,...c),[i,i+2,i+1,i+1,i+2,i+3]}function Go(t,e,o,n,r,a,s,i,c){let h=(l,d,u,p,f)=>{o.push(...Yu(t,e,l,d,u,p,f))};h([n,r,a],[s,r,a],[n,i,a],[s,i,a],[0,0,-1]),h([s,r,c],[n,r,c],[s,i,c],[n,i,c],[0,0,1]),h([n,r,c],[n,r,a],[n,i,c],[n,i,a],[-1,0,0]),h([s,r,a],[s,r,c],[s,i,a],[s,i,c],[1,0,0]),h([n,i,a],[s,i,a],[n,i,c],[s,i,c],[0,1,0]),h([n,r,c],[s,r,c],[n,r,a],[s,r,a],[0,-1,0])}function oc(t,e,o,n,r){let a=On,s=a.vert(t,r),i=a.vert(e,r),c=a.vert(o,r),h=a.vert(n,r);a.tri(s,i,c),a.tri(i,h,c)}function y2(t,e,o,n,r,a,s){for(let i=0;i<s;i++){let c=Math.PI*i/s,h=Math.PI*(i+1)/s,l=Math.cos(c),d=Math.sin(c),u=Math.cos(h),p=Math.sin(h),f=[t+o*l,e+o*d],v=[t+o*u,e+o*p],m=[t+n*l,e+n*d],g=[t+n*u,e+n*p];oc([f[0],f[1],r],[v[0],v[1],r],[m[0],m[1],r],[g[0],g[1],r],[0,0,-1]),oc([f[0],f[1],a],[v[0],v[1],a],[m[0],m[1],a],[g[0],g[1],a],[0,0,1]);let x=(c+h)/2;oc([f[0],f[1],r],[v[0],v[1],r],[f[0],f[1],a],[v[0],v[1],a],[-Math.cos(x),-Math.sin(x),0]),oc([m[0],m[1],r],[g[0],g[1],r],[m[0],m[1],a],[g[0],g[1],a],[Math.cos(x),Math.sin(x),0])}}function a_(t,e,o,n,r,a,s){for(let i=0;i<s;i++){let c=Math.PI*i/s,h=Math.PI*(i+1)/s,l=t+o*Math.cos(c),d=e+o*Math.sin(c),u=t+o*Math.cos(h),p=e+o*Math.sin(h);oc([l,d,r],[u,p,r],[l,n,r],[u,n,r],[0,0,-1]),oc([l,d,a],[u,p,a],[l,n,a],[u,n,a],[0,0,1])}}function s_(t,e,o,n){let r=Ro/2,a=_2,s=3,i=a+.42,c=i+.15,h=M2,l=xh,d=5.98,u=n-.45,p=n+.45,f=64,v=m2(On,r-l,n,0,d,h);m2(On,r+l,n,0,d,h),On.curMat=[0,0,0],y2(r,s,a,i,u,p,f),y2(r,s,i,c,u-.07,p+.07,f),a_(r,s,c,v+.05,u,p,f);for(let g of[-1,1]){let x=r+g*(c-.02),y=r+g*l;Go(t,e,o,Math.min(x,y),s,u,Math.max(x,y),v+.05,p)}for(let g of[-1,1]){let x=r+g*(a-.05),y=r+g*(a+.85);Go(t,e,o,Math.min(x,y),s-.16,n-.6,Math.max(x,y),s,n+.6)}let m=l+h*1.42+.45;Go(t,e,o,r-m,v,n-.7,r+m,v+.44,n+.7),Go(t,e,o,r-m+.12,v+.44,n-.62,r+m-.12,v+.7,n+.62),Go(t,e,o,r-m-.1,v+.7,n-.84,r+m+.1,v+.84,n+.84),Go(t,e,o,r-m-.22,v+.84,n-.96,r+m+.22,v+1,n+.96),Go(t,e,o,r-.3,s+a-.1,n-.56,r+.3,v,n+.56)}function b2(t,e,o,n,r){Go(t,e,o,n-.72,0,r-.72,n+.72,.2,r+.72),Go(t,e,o,n-.58,.2,r-.58,n+.58,.4,r+.58),Go(t,e,o,n-ju/2,.4,r-Wu/2,n+ju/2,Zo-1.35,r+Wu/2),Go(t,e,o,n-.67,.42,r-.67,n+.67,.62,r+.67),Go(t,e,o,n-.67,Zo-1.58,r-.67,n+.67,Zo-1.35,r+.67),Go(t,e,o,n-.82,Zo-1.35,r-.82,n+.82,Zo-1.05,r+.82),Go(t,e,o,n-.66,Zo-1.05,r-.66,n+.66,Zo-.78,r+.66),Go(t,e,o,n-.92,Zo-.78,r-.92,n+.92,Zo-.55,r+.92),Go(t,e,o,n-.78,Zo-.55,r-.78,n+.78,Zo-.3,r+.78),Go(t,e,o,n-.92,Zo-.3,r-.92,n+.92,Zo-.1,r+.92)}function ph(t,e,o,n,r){r==="left"?(Go(t,e,o,-.08,1,n-3.8/2,.14,5.7,n+3.8/2),Go(t,e,o,-.08-.04,1+.18,n-3.8/2+.18,.18,5.7-.18,n+3.8/2-.18)):(Go(t,e,o,Ro-.14,1,n-3.8/2,Ro+.08,5.7,n+3.8/2),Go(t,e,o,Ro-.18,1+.18,n-3.8/2+.18,Ro+.08+.04,5.7-.18,n+3.8/2-.18))}function i_(t,e,o,n){Go(t,e,o,.65,Zo-.16,n-1.65,.65+.22,Zo,n+1.65),Go(t,e,o,Ro-.65-.22,Zo-.16,n-1.65,Ro-.65,Zo,n+1.65),Go(t,e,o,.65,Zo-.16,n-1.65,Ro-.65,Zo,n-1.43),Go(t,e,o,.65,Zo-.16,n+1.43,Ro-.65,Zo,n+1.65),o.push(...Yu(t,e,[.65+.22,Zo-.16,n-1.43],[Ro-.65-.22,Zo-.16,n-1.43],[.65+.22,Zo-.16,n+1.43],[Ro-.65-.22,Zo-.16,n+1.43],[0,-1,0]))}k2.exports=function(){let t=[],e=[],o=[];gh=[],On=K6.createBuilder(t,e,o,gh),o.push(...Yu(t,e,[0,0,0],[Ro,0,0],[0,0,Cn],[Ro,0,Cn],[0,1,0])),J6.addSkylight(On,[0,0,0],Cn),On.curMat=[0,0,0];{let c=nc.SURR;Go(t,e,o,-Ho,0,0,Ho,Zo,c.z0),Go(t,e,o,-Ho,0,c.z1,Ho,Zo,Cn),Go(t,e,o,-Ho,c.top,c.z0,Ho,Zo,c.z1)}Go(t,e,o,Ro-Ho,0,Wr.C.z1,Ro+Ho,Zo,Cn-Ho),Go(t,e,o,Ro-Ho-.12,0,Wr.C.z1+2*Ho,Ro-Ho,.42,Cn-Ho),Go(t,e,o,Ro-Ho-.07,.42,Wr.C.z1+2*Ho,Ro-Ho,.5,Cn-Ho);for(let[c,h]of[[0,nc.SURR.z0],[nc.SURR.z1,Cn-Ho]])Go(t,e,o,Ho,0,c,Ho+.12,.42,h),Go(t,e,o,Ho,.42,c,Ho+.07,.5,h);Go(t,e,o,Ho,0,Cn-Ho-.12,Ro-Ho,.42,Cn-Ho),Go(t,e,o,Ho,.42,Cn-Ho-.07,Ro-Ho,.5,Cn-Ho),g2.addEntranceWall(On),g2.addFrames(On),On.curMat=[0,0,0],Go(t,e,o,-Ho,0,Cn-Ho,Ro+Ho,Zo,Cn+Ho),s_(t,e,o,vh);for(let c of Vu)b2(t,e,o,1.25,c),b2(t,e,o,Ro-1.25,c);ph(t,e,o,22,"left"),ph(t,e,o,25,"right"),ph(t,e,o,33,"left"),ph(t,e,o,36,"right");let n=[4,9,34,39,44,49];for(let c of n)i_(t,e,o,c);Wr.addWing(On),On.curMat=[0,0,0];for(let c of mh.filter(h=>h.pedestal))Q6(On,c.x,c.z,yh,x2);{let c=o_;On.curMat=[0,0,0],On.box(c.x0,0,c.z0-.08,c.x1+.08,.16,c.z1+.08,[0,0,0]),On.box(c.x0,.16,c.z0+.04,c.x1-.04,c.top-.14,c.z1-.04,[0,0,0]),On.box(c.x0,c.top-.14,c.z0-.02,c.x1+.03,c.top-.06,c.z1+.02,[0,0,0]),On.box(c.x0,c.top-.06,c.z0-.06,c.x1+.07,c.top,c.z1+.06,[0,0,0])}t_.addAlcove(On);for(let c of Ml)Z6(On,c.x,c.z,c.seed,1,c.away);On.curMat=[0,0,0];let r=[[[Ro,Cn-.35],[0,Cn-.35]],[[0,3],[0,10]],[[Ro,15],[Ro,22]],[[0,24],[0,31]],[[Ro,33],[Ro,40]],[[0,41],[0,46]]],a=r_(n_),s=(c,h)=>{let l=0,d=1/0;return r.forEach((u,p)=>{let f=(u[0][0]+u[1][0])/2,v=(u[0][1]+u[1][1])/2,m=Math.hypot(c-f,h-v);m<d&&(d=m,l=p)}),l},i=[];for(let c=0;c<10;c++)i.push({c:[0,0,0,0],d:[1,0,0,0]});return{placements:r,lights:i,statues:mh,occluders:[...Vu.flatMap(c=>[[1.25,c,.78],[Ro-1.25,c,.78]]),[Ro/2-xh,vh,.86],[Ro/2+xh,vh,.86],...mh.filter(c=>c.pedestal).map(c=>[c.x,c.z,yh*1.12]),...Ml.map(c=>[c.x,c.z,.34])],pedestalTop:x2,mat:gh,getAreaIndex:s,getGridSegments:(c,h)=>a.get(c,h),getGridParts:(c,h)=>a.get(c,h),position:t,normal:e,elements:o}}});var Ku=St((Nz,E2)=>{"use strict";var{doorLightGLSL:c_}=Wa(),{skylightGLSL:l_}=Xi(),{windowLightGLSL:f_,C:hr}=_0(),{alcoveLightGLSL:h_}=Ar(),Tr=t=>t.toFixed(4),u_=(()=>{let t=[-.22,.6,-.77],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>(o/e).toFixed(4)).join(", ")})();E2.exports=(t,e,o,n)=>{let a=(e.occluders||[]).slice(0,24).map(([p,f,v])=>`ao = min(ao, contact(v_pos.xz, vec2(${p.toFixed(3)}, ${f.toFixed(3)}), ${v.toFixed(3)}));`).join(`
      `),s={c:[0,0,0,0],d:[1,0,0,0]},i=-1,c=[],h=p=>{let f=p&&p.tick!==void 0?p.tick:0;if(f!==i||c.length===0){i=f;let v=e.viewer||[7,2,20];for(c=e.lights.filter(m=>m.c[3]>.5).map(m=>({l:m,d:Math.hypot(m.c[0]-v[0],m.c[2]-v[2])})).sort((m,g)=>m.d-g.d).slice(0,8).map(m=>m.l);c.length<8;)c.push(s)}return c},l={},d="",u="";for(let p=0;p<8;p++)l["lightC"+p]=f=>h(f)[p].c,l["lightD"+p]=f=>h(f)[p].d,d+="uniform vec4 lightC"+p+", lightD"+p+`;
`,u+="pic += pictureLight(lightC"+p+", lightD"+p+`, v_pos, N);
`;return t({frag:`
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

    ${c_()}

    ${l_()}

    ${f_()}

    ${h_()}

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
        step(abs(v_pos.z - ${Tr(hr.hallEnd)}), 0.02) * step(0.5, -N.z) +
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
                 + exp(-pow((v_pos.z - ${Tr((hr.z0+hr.z1)/2)}) / 1.3, 2.0)) * step(14.0, v_pos.x);
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
      ${u}

      // Corridor glow and the end wall light
      light += (1.0 - smoothstep(7.0, 35.0, abs(v_pos.z - 29.0))) * 0.04;
      light += (1.0 - smoothstep(2.0, 16.0, abs(v_pos.z - ${Tr(hr.hallEnd-1.6)}))) * 0.09 * (1.0 - smoothstep(14.5, 18.0, v_pos.x));

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
          float through = doorLight(v_pos, vec3(${u_}));
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
        if (v_pos.x < 14.0) wallD = min(wallD, ${Tr(hr.hallEnd)} - v_pos.z);
        if (v_pos.x < 14.0 && (v_pos.z < ${Tr(hr.z0)} || v_pos.z > ${Tr(hr.z1)})) wallD = min(wallD, 13.65 - v_pos.x);
        if (v_pos.x > 13.65 && v_pos.z > ${Tr(hr.z0-1)}) wallD = min(min(min(wallD, v_pos.z - ${Tr(hr.z0)}), ${Tr(hr.z1)} - v_pos.z), ${Tr(hr.x1)} - v_pos.x);
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
        if (v_pos.z < ${Tr(hr.z0+.3)} && v_pos.x > ${Tr(hr.x0)}) {
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
    }`,attributes:{position:e.position,normal:e.normal,a_mat:e.mat},uniforms:l,blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},elements:new Uint32Array(e.elements),offset:n?t.prop("offset"):0,count:n?t.prop("count"):e.elements.length})}});var A2=St((Rz,z2)=>{"strict mode";var d_="https://api.artic.edu/api/v1/artworks/search",p_=({image_id:t},e)=>`https://www.artic.edu/iiif/2/${t}/full/${e},/0/default.jpg`,v_="?query[bool][must][][term][classification_titles.keyword]=painting&query[bool][must][][term][is_public_domain]=true",m_="&fields=image_id,title,artist_title",g_={low:400,mid:843,high:1686};z2.exports={fetchList:async function(t,e){let o=d_+v_+m_+`&from=${t}&size=${e}`;return(await fetch(o).then(r=>r.json())).data.filter(r=>r.image_id)},fetchImage:async function(t,e){let o=p_(t,g_[e]),n=await fetch(o).then(r=>r.blob());return{title:t.title+" - "+t.artist_title,image:n}}}});var N2=St((Oz,L2)=>{"use strict";var x_=xu(),y_=Sr(),b_=t=>"images/web/"+t.slug+(y_.isPhone?"-1024":"")+".webp";async function T2(t){let e=await fetch(t);if(!e.ok)throw new Error("Could not load "+t);return e.blob()}L2.exports={fetchList:async function(t,e){return x_.slice(t,t+e).map((o,n)=>({...o,image_id:t+n}))},fetchImage:async function(t){let e;try{e=await T2(b_(t))}catch(o){e=await T2("images/"+t.file)}return{title:t.title,image:e}}}});var O2=St((Cz,R2)=>{"strict mode";R2.exports={default:"local",artic:A2(),local:N2()}});var Zu=St((Pz,P2)=>{"strict mode";var Us=document.createElement("canvas"),Qu=Us.width=Us.height=1024,Ja=Us.getContext("2d");Ja.mozImageSmoothingEnabled=!1;Ja.webkitImageSmoothingEnabled=!1;Ja.font="32px Verdana";Ja.textBaseline="bottom";Ja.fillStyle="#aaa";function C2(t,e,o,n){var r=e,a,s=0,i=0,c=e.split(" "),h,l;for(h=l=c.length;t.measureText(r).width>o&&h>1;){h--,r=a="";for(var d=0;d<l;d++)d<h?(r+=c[d],d+1<h&&(r+=" ")):(a+=c[d],d+1<l&&(a+=" "))}return n.push(r),i=t.measureText(r).width,a&&(s=C2(t,a,o,n),s>i&&(i=s)),i}P2.exports={init(t,e,o=Qu){var n=[];C2(Ja,e,Math.min(o*Qu,Qu),n),Ja.clearRect(0,0,Us.width,Us.height);for(var r=0;r<n.length;r++)Ja.fillText(n[r],0,Us.height-(Math.max(n.length,3)-r)*32);return t({data:Us,min:"mipmap",mipmap:"nice",flipY:!0})},draw(t){return t({frag:`
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
            }`,attributes:{pos:[0,0,1,0,0,1,1,1,0,1,1,0]},uniforms:{model:t.prop("textmodel"),tex:t.prop("text")},count:6,blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}})}}});var q2=St(($z,I2)=>{"strict mode";var Ju=O2(),w_=new URLSearchParams(window.location.search).get("api"),$2=Ju[w_]||Ju[Ju.default],__=Zu(),td={},ac=[],M_=2;function k_(t){return(!navigator.connection||navigator.connection.downlink<M_)&&(t=t=="high"?"mid":"low"),t}var S_=Sr(),rc=document.createElement("canvas");rc.width=rc.height=S_.isPhone?1024:2048;var nd=rc.getContext("2d");nd.imageSmoothingEnabled=!0;nd.imageSmoothingQuality="high";var ed=!1,E_=t=>[(ac.pop()||t.texture)([[[200,200,200]]]),e=>(ac.pop()||t.texture)([[[0,0,0,0]]]),1];async function od(t,e,o){ed===!1&&(ed=t.hasExtension("EXT_texture_filter_anisotropic")?t._gl.getParameter(t._gl.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0);let n,r;try{let a=await $2.fetchImage(e,k_(o));r=a.title,n=await createImageBitmap(a.image),nd.drawImage(n,0,0,rc.width,rc.height)}catch(a){return console.error(a),o=="high"?await od(t,e,"low"):E_(t)}return[(ac.pop()||t.texture)({data:rc,min:"mipmap",mipmap:"nice",aniso:ed,flipY:!0}),a=>__.init(ac.pop()||t.texture,r,a),n.width/n.height]}I2.exports={fetch:(t,e=10,o="low",n,r)=>{let a=Object.keys(td).length;$2.fetchList(a,e).then(s=>{e=s.length,s.map(i=>{if(td[i.image_id]){--e===0&&r();return}td[i.image_id]=i,od(t,i,o).then(([c,h,l])=>{n({...i,tex:c,textGen:h,aspect:l}),--e===0&&r()})})})},load:(t,e,o="low")=>{e.tex||e.loading||(e.loading=!0,od(t,e,o).then(([n,r])=>{e.loading=!1,e.tex=n,e.text=r(e.width)}))},unload:t=>{t.tex&&(ac.push(t.tex),t.tex=void 0),t.text&&(ac.push(t.text),t.text=void 0)}}});var F2=St((Iz,D2)=>{D2.exports=z_;function z_(){var t=new Float32Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var H2=St((qz,G2)=>{G2.exports=A_;function A_(t){var e=new Float32Array(16);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var B2=St((Dz,U2)=>{U2.exports=T_;function T_(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var rd=St((Fz,j2)=>{j2.exports=L_;function L_(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var V2=St((Gz,W2)=>{W2.exports=N_;function N_(t,e){if(t===e){var o=e[1],n=e[2],r=e[3],a=e[6],s=e[7],i=e[11];t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=o,t[6]=e[9],t[7]=e[13],t[8]=n,t[9]=a,t[11]=e[14],t[12]=r,t[13]=s,t[14]=i}else t[0]=e[0],t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=e[1],t[5]=e[5],t[6]=e[9],t[7]=e[13],t[8]=e[2],t[9]=e[6],t[10]=e[10],t[11]=e[14],t[12]=e[3],t[13]=e[7],t[14]=e[11],t[15]=e[15];return t}});var Y2=St((Hz,X2)=>{X2.exports=R_;function R_(t,e){var o=e[0],n=e[1],r=e[2],a=e[3],s=e[4],i=e[5],c=e[6],h=e[7],l=e[8],d=e[9],u=e[10],p=e[11],f=e[12],v=e[13],m=e[14],g=e[15],x=o*i-n*s,y=o*c-r*s,w=o*h-a*s,M=n*c-r*i,_=n*h-a*i,k=r*h-a*c,O=l*v-d*f,N=l*m-u*f,G=l*g-p*f,$=d*m-u*v,V=d*g-p*v,D=u*g-p*m,U=x*D-y*V+w*$+M*G-_*N+k*O;return U?(U=1/U,t[0]=(i*D-c*V+h*$)*U,t[1]=(r*V-n*D-a*$)*U,t[2]=(v*k-m*_+g*M)*U,t[3]=(u*_-d*k-p*M)*U,t[4]=(c*G-s*D-h*N)*U,t[5]=(o*D-r*G+a*N)*U,t[6]=(m*w-f*k-g*y)*U,t[7]=(l*k-u*w+p*y)*U,t[8]=(s*V-i*G+h*O)*U,t[9]=(n*G-o*V-a*O)*U,t[10]=(f*_-v*w+g*x)*U,t[11]=(d*w-l*_-p*x)*U,t[12]=(i*N-s*$-c*O)*U,t[13]=(o*$-n*N+r*O)*U,t[14]=(v*y-f*M-m*x)*U,t[15]=(l*M-d*y+u*x)*U,t):null}});var Q2=St((Uz,K2)=>{K2.exports=O_;function O_(t,e){var o=e[0],n=e[1],r=e[2],a=e[3],s=e[4],i=e[5],c=e[6],h=e[7],l=e[8],d=e[9],u=e[10],p=e[11],f=e[12],v=e[13],m=e[14],g=e[15];return t[0]=i*(u*g-p*m)-d*(c*g-h*m)+v*(c*p-h*u),t[1]=-(n*(u*g-p*m)-d*(r*g-a*m)+v*(r*p-a*u)),t[2]=n*(c*g-h*m)-i*(r*g-a*m)+v*(r*h-a*c),t[3]=-(n*(c*p-h*u)-i*(r*p-a*u)+d*(r*h-a*c)),t[4]=-(s*(u*g-p*m)-l*(c*g-h*m)+f*(c*p-h*u)),t[5]=o*(u*g-p*m)-l*(r*g-a*m)+f*(r*p-a*u),t[6]=-(o*(c*g-h*m)-s*(r*g-a*m)+f*(r*h-a*c)),t[7]=o*(c*p-h*u)-s*(r*p-a*u)+l*(r*h-a*c),t[8]=s*(d*g-p*v)-l*(i*g-h*v)+f*(i*p-h*d),t[9]=-(o*(d*g-p*v)-l*(n*g-a*v)+f*(n*p-a*d)),t[10]=o*(i*g-h*v)-s*(n*g-a*v)+f*(n*h-a*i),t[11]=-(o*(i*p-h*d)-s*(n*p-a*d)+l*(n*h-a*i)),t[12]=-(s*(d*m-u*v)-l*(i*m-c*v)+f*(i*u-c*d)),t[13]=o*(d*m-u*v)-l*(n*m-r*v)+f*(n*u-r*d),t[14]=-(o*(i*m-c*v)-s*(n*m-r*v)+f*(n*c-r*i)),t[15]=o*(i*u-c*d)-s*(n*u-r*d)+l*(n*c-r*i),t}});var J2=St((Bz,Z2)=>{Z2.exports=C_;function C_(t){var e=t[0],o=t[1],n=t[2],r=t[3],a=t[4],s=t[5],i=t[6],c=t[7],h=t[8],l=t[9],d=t[10],u=t[11],p=t[12],f=t[13],v=t[14],m=t[15],g=e*s-o*a,x=e*i-n*a,y=e*c-r*a,w=o*i-n*s,M=o*c-r*s,_=n*c-r*i,k=h*f-l*p,O=h*v-d*p,N=h*m-u*p,G=l*v-d*f,$=l*m-u*f,V=d*m-u*v;return g*V-x*$+y*G+w*N-M*O+_*k}});var eg=St((jz,tg)=>{tg.exports=P_;function P_(t,e,o){var n=e[0],r=e[1],a=e[2],s=e[3],i=e[4],c=e[5],h=e[6],l=e[7],d=e[8],u=e[9],p=e[10],f=e[11],v=e[12],m=e[13],g=e[14],x=e[15],y=o[0],w=o[1],M=o[2],_=o[3];return t[0]=y*n+w*i+M*d+_*v,t[1]=y*r+w*c+M*u+_*m,t[2]=y*a+w*h+M*p+_*g,t[3]=y*s+w*l+M*f+_*x,y=o[4],w=o[5],M=o[6],_=o[7],t[4]=y*n+w*i+M*d+_*v,t[5]=y*r+w*c+M*u+_*m,t[6]=y*a+w*h+M*p+_*g,t[7]=y*s+w*l+M*f+_*x,y=o[8],w=o[9],M=o[10],_=o[11],t[8]=y*n+w*i+M*d+_*v,t[9]=y*r+w*c+M*u+_*m,t[10]=y*a+w*h+M*p+_*g,t[11]=y*s+w*l+M*f+_*x,y=o[12],w=o[13],M=o[14],_=o[15],t[12]=y*n+w*i+M*d+_*v,t[13]=y*r+w*c+M*u+_*m,t[14]=y*a+w*h+M*p+_*g,t[15]=y*s+w*l+M*f+_*x,t}});var ng=St((Wz,og)=>{og.exports=$_;function $_(t,e,o){var n=o[0],r=o[1],a=o[2],s,i,c,h,l,d,u,p,f,v,m,g;return e===t?(t[12]=e[0]*n+e[4]*r+e[8]*a+e[12],t[13]=e[1]*n+e[5]*r+e[9]*a+e[13],t[14]=e[2]*n+e[6]*r+e[10]*a+e[14],t[15]=e[3]*n+e[7]*r+e[11]*a+e[15]):(s=e[0],i=e[1],c=e[2],h=e[3],l=e[4],d=e[5],u=e[6],p=e[7],f=e[8],v=e[9],m=e[10],g=e[11],t[0]=s,t[1]=i,t[2]=c,t[3]=h,t[4]=l,t[5]=d,t[6]=u,t[7]=p,t[8]=f,t[9]=v,t[10]=m,t[11]=g,t[12]=s*n+l*r+f*a+e[12],t[13]=i*n+d*r+v*a+e[13],t[14]=c*n+u*r+m*a+e[14],t[15]=h*n+p*r+g*a+e[15]),t}});var ag=St((Vz,rg)=>{rg.exports=I_;function I_(t,e,o){var n=o[0],r=o[1],a=o[2];return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=e[7]*r,t[8]=e[8]*a,t[9]=e[9]*a,t[10]=e[10]*a,t[11]=e[11]*a,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var ig=St((Xz,sg)=>{sg.exports=q_;function q_(t,e,o,n){var r=n[0],a=n[1],s=n[2],i=Math.sqrt(r*r+a*a+s*s),c,h,l,d,u,p,f,v,m,g,x,y,w,M,_,k,O,N,G,$,V,D,U,ht;return Math.abs(i)<1e-6?null:(i=1/i,r*=i,a*=i,s*=i,c=Math.sin(o),h=Math.cos(o),l=1-h,d=e[0],u=e[1],p=e[2],f=e[3],v=e[4],m=e[5],g=e[6],x=e[7],y=e[8],w=e[9],M=e[10],_=e[11],k=r*r*l+h,O=a*r*l+s*c,N=s*r*l-a*c,G=r*a*l-s*c,$=a*a*l+h,V=s*a*l+r*c,D=r*s*l+a*c,U=a*s*l-r*c,ht=s*s*l+h,t[0]=d*k+v*O+y*N,t[1]=u*k+m*O+w*N,t[2]=p*k+g*O+M*N,t[3]=f*k+x*O+_*N,t[4]=d*G+v*$+y*V,t[5]=u*G+m*$+w*V,t[6]=p*G+g*$+M*V,t[7]=f*G+x*$+_*V,t[8]=d*D+v*U+y*ht,t[9]=u*D+m*U+w*ht,t[10]=p*D+g*U+M*ht,t[11]=f*D+x*U+_*ht,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)}});var lg=St((Yz,cg)=>{cg.exports=D_;function D_(t,e,o){var n=Math.sin(o),r=Math.cos(o),a=e[4],s=e[5],i=e[6],c=e[7],h=e[8],l=e[9],d=e[10],u=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=a*r+h*n,t[5]=s*r+l*n,t[6]=i*r+d*n,t[7]=c*r+u*n,t[8]=h*r-a*n,t[9]=l*r-s*n,t[10]=d*r-i*n,t[11]=u*r-c*n,t}});var hg=St((Kz,fg)=>{fg.exports=F_;function F_(t,e,o){var n=Math.sin(o),r=Math.cos(o),a=e[0],s=e[1],i=e[2],c=e[3],h=e[8],l=e[9],d=e[10],u=e[11];return e!==t&&(t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=a*r-h*n,t[1]=s*r-l*n,t[2]=i*r-d*n,t[3]=c*r-u*n,t[8]=a*n+h*r,t[9]=s*n+l*r,t[10]=i*n+d*r,t[11]=c*n+u*r,t}});var dg=St((Qz,ug)=>{ug.exports=G_;function G_(t,e,o){var n=Math.sin(o),r=Math.cos(o),a=e[0],s=e[1],i=e[2],c=e[3],h=e[4],l=e[5],d=e[6],u=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=a*r+h*n,t[1]=s*r+l*n,t[2]=i*r+d*n,t[3]=c*r+u*n,t[4]=h*r-a*n,t[5]=l*r-s*n,t[6]=d*r-i*n,t[7]=u*r-c*n,t}});var vg=St((Zz,pg)=>{pg.exports=H_;function H_(t,e,o){var n,r,a,s=o[0],i=o[1],c=o[2],h=Math.sqrt(s*s+i*i+c*c);return Math.abs(h)<1e-6?null:(h=1/h,s*=h,i*=h,c*=h,n=Math.sin(e),r=Math.cos(e),a=1-r,t[0]=s*s*a+r,t[1]=i*s*a+c*n,t[2]=c*s*a-i*n,t[3]=0,t[4]=s*i*a-c*n,t[5]=i*i*a+r,t[6]=c*i*a+s*n,t[7]=0,t[8]=s*c*a+i*n,t[9]=i*c*a-s*n,t[10]=c*c*a+r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)}});var gg=St((Jz,mg)=>{mg.exports=U_;function U_(t,e,o){var n=e[0],r=e[1],a=e[2],s=e[3],i=n+n,c=r+r,h=a+a,l=n*i,d=n*c,u=n*h,p=r*c,f=r*h,v=a*h,m=s*i,g=s*c,x=s*h;return t[0]=1-(p+v),t[1]=d+x,t[2]=u-g,t[3]=0,t[4]=d-x,t[5]=1-(l+v),t[6]=f+m,t[7]=0,t[8]=u+g,t[9]=f-m,t[10]=1-(l+p),t[11]=0,t[12]=o[0],t[13]=o[1],t[14]=o[2],t[15]=1,t}});var yg=St((tA,xg)=>{xg.exports=B_;function B_(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var wg=St((eA,bg)=>{bg.exports=j_;function j_(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t}});var Mg=St((oA,_g)=>{_g.exports=W_;function W_(t,e){var o=Math.sin(e),n=Math.cos(e);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n,t[6]=o,t[7]=0,t[8]=0,t[9]=-o,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var Sg=St((nA,kg)=>{kg.exports=V_;function V_(t,e){var o=Math.sin(e),n=Math.cos(e);return t[0]=n,t[1]=0,t[2]=-o,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=o,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var zg=St((rA,Eg)=>{Eg.exports=X_;function X_(t,e){var o=Math.sin(e),n=Math.cos(e);return t[0]=n,t[1]=o,t[2]=0,t[3]=0,t[4]=-o,t[5]=n,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var Tg=St((aA,Ag)=>{Ag.exports=Y_;function Y_(t,e){var o=e[0],n=e[1],r=e[2],a=e[3],s=o+o,i=n+n,c=r+r,h=o*s,l=n*s,d=n*i,u=r*s,p=r*i,f=r*c,v=a*s,m=a*i,g=a*c;return t[0]=1-d-f,t[1]=l+g,t[2]=u-m,t[3]=0,t[4]=l-g,t[5]=1-h-f,t[6]=p+v,t[7]=0,t[8]=u+m,t[9]=p-v,t[10]=1-h-d,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var Ng=St((sA,Lg)=>{Lg.exports=K_;function K_(t,e,o,n,r,a,s){var i=1/(o-e),c=1/(r-n),h=1/(a-s);return t[0]=a*2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a*2*c,t[6]=0,t[7]=0,t[8]=(o+e)*i,t[9]=(r+n)*c,t[10]=(s+a)*h,t[11]=-1,t[12]=0,t[13]=0,t[14]=s*a*2*h,t[15]=0,t}});var Og=St((iA,Rg)=>{Rg.exports=Q_;function Q_(t,e,o,n,r){var a=1/Math.tan(e/2),s=1/(n-r);return t[0]=a/o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(r+n)*s,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*r*n*s,t[15]=0,t}});var Pg=St((cA,Cg)=>{Cg.exports=Z_;function Z_(t,e,o,n){var r=Math.tan(e.upDegrees*Math.PI/180),a=Math.tan(e.downDegrees*Math.PI/180),s=Math.tan(e.leftDegrees*Math.PI/180),i=Math.tan(e.rightDegrees*Math.PI/180),c=2/(s+i),h=2/(r+a);return t[0]=c,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=h,t[6]=0,t[7]=0,t[8]=-((s-i)*c*.5),t[9]=(r-a)*h*.5,t[10]=n/(o-n),t[11]=-1,t[12]=0,t[13]=0,t[14]=n*o/(o-n),t[15]=0,t}});var Ig=St((lA,$g)=>{$g.exports=J_;function J_(t,e,o,n,r,a,s){var i=1/(e-o),c=1/(n-r),h=1/(a-s);return t[0]=-2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*c,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*h,t[11]=0,t[12]=(e+o)*i,t[13]=(r+n)*c,t[14]=(s+a)*h,t[15]=1,t}});var Dg=St((fA,qg)=>{var tM=rd();qg.exports=eM;function eM(t,e,o,n){var r,a,s,i,c,h,l,d,u,p,f=e[0],v=e[1],m=e[2],g=n[0],x=n[1],y=n[2],w=o[0],M=o[1],_=o[2];return Math.abs(f-w)<1e-6&&Math.abs(v-M)<1e-6&&Math.abs(m-_)<1e-6?tM(t):(l=f-w,d=v-M,u=m-_,p=1/Math.sqrt(l*l+d*d+u*u),l*=p,d*=p,u*=p,r=x*u-y*d,a=y*l-g*u,s=g*d-x*l,p=Math.sqrt(r*r+a*a+s*s),p?(p=1/p,r*=p,a*=p,s*=p):(r=0,a=0,s=0),i=d*s-u*a,c=u*r-l*s,h=l*a-d*r,p=Math.sqrt(i*i+c*c+h*h),p?(p=1/p,i*=p,c*=p,h*=p):(i=0,c=0,h=0),t[0]=r,t[1]=i,t[2]=l,t[3]=0,t[4]=a,t[5]=c,t[6]=d,t[7]=0,t[8]=s,t[9]=h,t[10]=u,t[11]=0,t[12]=-(r*f+a*v+s*m),t[13]=-(i*f+c*v+h*m),t[14]=-(l*f+d*v+u*m),t[15]=1,t)}});var Gg=St((hA,Fg)=>{Fg.exports=oM;function oM(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"}});var sc=St((uA,Hg)=>{Hg.exports={create:F2(),clone:H2(),copy:B2(),identity:rd(),transpose:V2(),invert:Y2(),adjoint:Q2(),determinant:J2(),multiply:eg(),translate:ng(),scale:ag(),rotate:ig(),rotateX:lg(),rotateY:hg(),rotateZ:dg(),fromRotation:vg(),fromRotationTranslation:gg(),fromScaling:yg(),fromTranslation:wg(),fromXRotation:Mg(),fromYRotation:Sg(),fromZRotation:zg(),fromQuat:Tg(),frustum:Ng(),perspective:Og(),perspectiveFromFieldOfView:Pg(),ortho:Ig(),lookAt:Dg(),str:Gg()}});var jg=St((dA,Bg)=>{"use strict";var Ug=q2(),En=sc(),Bs=_0(),nM=3e3,wh="high",ad,Sl=.36,El=13.64,ic=Bs.C.hallEnd-.01,zl=Bs.C.z0+.01,rM=.356,aM=13.644,sM=Bs.C.hallEnd-.006,iM=Bs.C.z0+.006,cM=.12,Mh=4,cc=t=>M0[t]&&M0[t].cy||Mh,sd=.26,lM=5.6,fM=7,M0=[{side:"right",z:34.5},{side:"right",z:23.5},{side:"left",z:23.5},{side:"end",z:ic},{side:"left",z:34.5},{side:"right",z:14.6},{side:"left",z:14.6,maxW:3.7,maxH:3.7},{side:"corridor",x:Bs.PAINTING_X[0],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:Bs.PAINTING_X[1],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:Bs.PAINTING_X[2],cy:3,maxW:3.3,maxH:3.73}];function hM(t,e){let o=e&&e.maxH||lM,n=e&&e.maxW||fM,r=Math.min(o,n/t);return{width:r*t,height:r}}function uM(t,e,o){let n=M0[o],r=[],a=cc(o)-e/2;return n.side==="left"?(En.fromTranslation(r,[Sl,a,n.z+t/2]),En.rotateY(r,r,Math.PI/2)):n.side==="right"?(En.fromTranslation(r,[El,a,n.z-t/2]),En.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?En.fromTranslation(r,[n.x-t/2,a,zl]):(En.fromTranslation(r,[7+t/2,a,ic]),En.rotateY(r,r,Math.PI)),En.scale(r,r,[t,e,cM]),r}function dM(t,e,o){let n=M0[o],r=[],a=cc(o)-e/2;return n.side==="left"?(En.fromTranslation(r,[Sl,a,n.z+t/2]),En.rotateY(r,r,Math.PI/2)):n.side==="right"?(En.fromTranslation(r,[El,a,n.z-t/2]),En.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?En.fromTranslation(r,[n.x-t/2,a,zl]):(En.fromTranslation(r,[7+t/2,a,ic]),En.rotateY(r,r,Math.PI)),r}function pM(t,e,o){let n=M0[o],r=[],a=cc(o)-e/2-sd-.38;return n.side==="left"?(En.fromTranslation(r,[rM,a,n.z+t/2]),En.rotateY(r,r,Math.PI/2)):n.side==="right"?(En.fromTranslation(r,[aM,a,n.z-t/2]),En.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?En.fromTranslation(r,[n.x-t/2,a,iM]):(En.fromTranslation(r,[7+t/2,a,sM]),En.rotateY(r,r,Math.PI)),En.scale(r,r,[2,2,2]),r}function vM(t,e,o){let n=M0[o],r=cc(o)-e/2-sd-.38;return n.side==="left"?[Sl+.55,r,n.z]:n.side==="right"?[El-.55,r,n.z]:n.side==="corridor"?[n.x,r,zl+.55]:[7,r,ic-.55]}var kl=.42;function _h(t,e,o,n,r,a){return[e[0]*n,e[1]*n,e[2]*n,0,0,r,0,0,o[0]*a,o[1]*a,o[2]*a,0,t[0],t[1],t[2],1]}function mM(t,e,o){let n=M0[o],r,a,s;n.side==="left"?(r=[Sl,n.z],a=[0,0,1],s=[1,0,0]):n.side==="right"?(r=[El,n.z],a=[0,0,1],s=[-1,0,0]):n.side==="corridor"?(r=[n.x,zl],a=[1,0,0],s=[0,0,1]):(r=[7,ic],a=[1,0,0],s=[0,0,-1]);let i=cc(o)+e/2+sd+.3,c=Math.min(2.4,Math.max(.9,t*.55)),h=(p,f)=>[r[0]+s[0]*p,f,r[1]+s[2]*p],l=[.075,.062,.05],d=[{fixmodel:_h(h(.014,i),a,s,.1,.13,.028),fixcol:l,fixglow:0},{fixmodel:_h(h(kl/2,i),a,s,.02,.02,kl),fixcol:l,fixglow:0},{fixmodel:_h(h(kl,i),a,s,c,.034,.05),fixcol:l,fixglow:0},{fixmodel:_h(h(kl-.012,i-.019),a,s,c*.94,.006,.028),fixcol:l,fixglow:1}],u=h(kl,i-.02);return{fixtures:d,light:{c:[u[0],u[1],u[2],1],d:[a[0],a[1],a[2],c/2]}}}Bg.exports=(t,e)=>{let o=[],n=[],r=a=>{let s=a.image_id;if(!M0[s])return;let{width:i,height:c}=hM(a.aspect,M0[s]),h=mM(i,c,s);e&&e.lights&&s<e.lights.length&&(e.lights[s]=h.light),o.push({...a,fixtures:h.fixtures,side:M0[s].side,model:uM(i,c,s),framemodel:dM(i,c,s),framesize:[i,c],textmodel:pM(i,c,s),text:a.textGen(i),width:i,height:c,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:vM(i,c,s),paintingPosition:M0[s].side==="left"?[Sl+.05,Mh,M0[s].z]:M0[s].side==="right"?[El-.05,Mh,M0[s].z]:M0[s].side==="corridor"?[M0[s].x,cc(s),zl+.05]:[7,Mh,ic-.05],textGen:null})};return Ug.fetch(t,M0.length,wh,r,()=>{}),{update:()=>{n=o,n.forEach(a=>{Ug.load(t,a,wh)}),wh="low",ad&&clearTimeout(ad),ad=setTimeout(()=>{wh="high"},nM)},batch:()=>n,interactables:()=>n.map((a,s)=>({side:a.side,width:a.width,index:s,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:a.plaquePosition,paintingPosition:a.paintingPosition}))}}});var Yg=St((pA,Xg)=>{"use strict";var gM=Zu(),Wg=Sr(),Vg=[[-.02,.125],[-.02,.15],[.035,.15],[.07,.12],[.07,.17],[.185,.17],[.185,.19],[.215,.19],[.26,.03]];function xM(){let t=[[0,0],[1,0],[1,1],[0,1]],e=[];Vg.forEach(([n,r])=>{t.forEach(([a,s])=>e.push([a,s,n,r]))});let o=[];for(let n=0;n<Vg.length-1;n++)for(let r=0;r<4;r++){let a=(r+1)%4,s=n*4+r,i=n*4+a,c=(n+1)*4+r,h=(n+1)*4+a;o.push(s,i,h,s,h,c)}return{verts:e,elems:o}}var yM=`#extension GL_OES_standard_derivatives : enable
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
}`,bM=`
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
}`;Xg.exports=t=>{let e=gM.draw(t),o=t({frag:`#extension GL_OES_standard_derivatives : enable
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
	}`,attributes:{pos:[0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,-.1,-.1,0,1.1,-.1,0,-.1,1.1,0,1.1,1.1,0]},elements:[0,1,2,3,2,1,1,0,5,4,5,0,3,1,7,5,7,1,0,2,4,6,4,2,8,9,4,5,4,9,9,11,5,7,5,11,11,10,7,6,7,10,10,8,6,4,6,8],uniforms:{model:t.prop("model"),tex:t.prop("tex"),psize:t.prop("framesize"),canvasCm:(s,i)=>i.size?[i.size[1],i.size[0]]:[61,91],texel:1/(Wg.isPhone?1024:2048),detail:()=>Wg.post===0?0:1},blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}}),n=xM(),r=t({frag:yM,vert:bM,attributes:{prof:n.verts},elements:n.elems,uniforms:{model:t.prop("framemodel"),fsize:t.prop("framesize")},cull:{enable:!1},blend:{enable:!1}}),a=t({frag:`#extension GL_OES_standard_derivatives : enable
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
}`,attributes:{pos:[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5],[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]]},elements:[0,1,2,0,2,3,4,5,6,4,6,7,0,1,5,0,5,4,2,3,7,2,7,6,0,3,7,0,7,4,1,2,6,1,6,5],uniforms:{model:t.prop("fixmodel"),fixcol:t.prop("fixcol"),fixglow:t.prop("fixglow")},cull:{enable:!1},blend:{enable:!1}});return function(s){o(s),r(s);let i=[];s.forEach(c=>{c.fixtures&&i.push(...c.fixtures)}),i.length&&a(i),e(s)}}});var Xs=St((mA,Xr)=>{"use strict";var vo=Math.PI,at=t=>(+t).toFixed(4),Ae=[-90,0,0],Dt=16,Ne=22,wo=7.8,ur=11.6,x0=.55,dr=(ur-wo)/(Dt/2),we={c:[3.6,8.6,13.6,18.6],hw:1.3,sill:.62,spring:4.9};we.top=we.spring+we.hw;var H0={cols:[-.65,0,.65],rowH:.71,w:.055,ring:.78},Qo={rafter:Ne/12,rafterW:.1,purlin:1,purlinW:.07},Nl=[5.5,11,16.5],To={cx:Dt/2,hw:1.12,spring:3.95,pier:1.05,face:Ne-1.45,back:Ne-.2,floor:.66,top:6.55};To.x0=To.cx-To.hw-To.pier;To.x1=To.cx+To.hw+To.pier;var lt={x0:Dt/2-1.7,x1:Dt/2+1.7,z0:Ne-To.face+.44,z1:Ne-7.2,curb:.5,top:.36},Fn=t=>lt.z1-(t-5.6)/11*(lt.z1-lt.z0),xn={x:Dt/2,z:1,plinth:To.floor+.26,height:2.75,yaw:.35,file:"res/nymph.bin"},kh=Ne-xn.z,fa=(()=>{let t=[-.68,.6,.36],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),id=t=>[t[0]+Ae[0],t[1]+Ae[1],t[2]+Ae[2]];function t3(){let t=we.c.map(o=>`
		{
			float dz = q.z - ${at(o)};
			float inside = smoothstep(-b, b, ${at(we.hw)} - abs(dz)) * smoothstep(-b, b, q.y - ${at(we.sill)});
			float arch = smoothstep(-b, b, ${at(we.hw)} - length(vec2(dz, max(q.y - ${at(we.spring)}, 0.0))));
			o = max(o, inside * arch);
		}`).join(""),e=we.c.map(o=>`
		{
			float dz = q.z - ${at(o)};
			if (abs(dz) < ${at(we.hw+.2)}) {
				${H0.cols.map(n=>`bar = max(bar, 1.0 - smoothstep(${at(H0.w*.5)} - b, ${at(H0.w*.5)} + b, abs(dz - ${at(n)})));`).join(`
				`)}
				float ry = q.y - ${at(we.sill)};
				float tr = abs(ry - ${at(H0.rowH)} * floor(ry / ${at(H0.rowH)} + 0.5));
				if (q.y < ${at(we.spring+.02)}) bar = max(bar, 1.0 - smoothstep(${at(H0.w*.5)} - b, ${at(H0.w*.5)} + b, tr));
				float rr = length(vec2(dz, q.y - ${at(we.spring)}));
				if (q.y > ${at(we.spring)}) bar = max(bar, 1.0 - smoothstep(${at(H0.w*.5)} - b, ${at(H0.w*.5)} + b, abs(rr - ${at(H0.ring)})));
				// the frame round the opening
				bar = max(bar, 1.0 - smoothstep(0.0, b + 0.03, ${at(we.hw)} - max(abs(dz), q.y > ${at(we.spring)} ? rr : 0.0)));
			}
		}`).join("");return`
	const vec3 STUDIO_SUN = vec3(${at(fa[0])}, ${at(fa[1])}, ${at(fa[2])});

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
	// coordinates (centre 0, half size ${at(Qo.purlin/2)} x ${at(Qo.rafter/2)}),
	// b the softness. Returns how much light gets through.
	float studioRoofPattern(vec2 q, float b) {
		vec2 hs = vec2(${at(Qo.purlin/2)}, ${at(Qo.rafter/2)});
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
		vec3 p = pw - vec3(${at(Ae[0])}, ${at(Ae[1])}, ${at(Ae[2])});
		vec3 S = STUDIO_SUN;
		// the niche: inside its hollow, the sun gets in only through the arch;
		// elsewhere its block of stone stands in the way of some of the light
		{
			// (worked as if the niche stood against the far wall: z turned round)
			vec3 q = vec3(${at(Dt)} - p.x, p.y, ${at(Ne)} - p.z);
			vec3 Sq = vec3(-S.x, S.y, -S.z);
			float dxn = q.x - ${at(To.cx)};
			if (abs(dxn) < ${at(To.hw)} && q.z > ${at(To.face)} && q.y > ${at(To.floor-.05)} && q.y < ${at(To.spring)} + sqrt(max(${at(To.hw*To.hw)} - dxn * dxn, 0.0))) {
				if (Sq.z >= 0.0) return 0.0;
				vec3 hf = q + Sq * ((${at(To.face)} - q.z) / Sq.z);
				float hx = hf.x - ${at(To.cx)};
				float edge = ${at(To.hw)} - abs(hx);
				float topY = ${at(To.spring)} + sqrt(max(${at(To.hw*To.hw)} - hx * hx, 0.0));
				float soft = 0.02 + 0.03 * (${at(To.face)} - q.z) / Sq.z;
				float inA = smoothstep(-soft, soft, edge) * smoothstep(-soft, soft, topY - hf.y);
				if (inA <= 0.0) return 0.0;
			} else {
				vec3 bmin = vec3(${at(To.x0-.2)}, 0.0, ${at(To.face-.3)}), bmax = vec3(${at(To.x1+.2)}, ${at(6.95)}, ${at(Ne)});
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
		float te = (${at(wo)} - p.y) / S.y;
		if (tw > 0.0 && tw < te) {
			vec3 h0 = p + S * tw;
			if (h0.z < 0.0 || h0.z > ${at(Ne)}) return 0.0;
			vec3 h1 = p + S * ((${at(-x0)} - p.x) / S.x);
			vec3 hm = p + S * ((${at(-x0*.5)} - p.x) / S.x);
			float b = 0.006 + 0.0075 * tw;
			float open = min(studioWinOpen(h0, b), studioWinOpen(h1, b));
			if (open <= 0.0) return 0.0;
			float bar = studioWinBars(hm, b);
			return open * (1.0 - bar) * 0.92;
		}
		// up through the roof: the trusses' tie beams first
		vec3 he = p + S * max(te, 0.0);
		float vis = 1.0;
		if (p.y < ${at(wo)}) {
			if (he.z < 0.0 || he.z > ${at(Ne)} || he.x < 0.0 || he.x > ${at(Dt)}) return 0.0;
			float be = 0.01 + 0.008 * te;
			${Nl.map(o=>`vis *= smoothstep(0.08 - be, 0.08 + be, abs(he.z - ${at(o)}));`).join(`
			`)}
			// the bougainvillea along the tie beams
			${Ws.filter(o=>o[0]==="truss").map(([o,n,r])=>`vis *= 1.0 - studioVineShade(he.z - ${at(n)}, he.x, he.z, ${at(r)});`).join(`
			`)}
		}
		// then the glass: the two slopes of the roof
		float tl = (${at(dr)} * p.x - p.y + ${at(wo)}) / (S.y - ${at(dr)} * S.x);
		float tr = (${at(dr)} * (${at(Dt)} - p.x) - p.y + ${at(wo)}) / (S.y + ${at(dr)} * S.x);
		float t = 1e9;
		vec3 h = vec3(0.0);
		vec3 hl = p + S * tl, hr = p + S * tr;
		if (tl > 0.0 && hl.x >= -0.01 && hl.x <= ${at(Dt/2+.01)}) { t = tl; h = hl; }
		if (tr > 0.0 && tr < t && hr.x >= ${at(Dt/2-.01)} && hr.x <= ${at(Dt+.01)}) { t = tr; h = hr; }
		if (t > 1e8) return 0.0;
		if (h.z < 0.0 || h.z > ${at(Ne)}) return 0.0;
		float b = 0.008 + 0.0075 * t;
		float rz = abs(h.z - ${at(Qo.rafter)} * floor(h.z / ${at(Qo.rafter)} + 0.5));
		float bar = 1.0 - smoothstep(${at(Qo.rafterW*.5)} - b, ${at(Qo.rafterW*.5)} + b, rz);
		float ux = h.x < ${at(Dt/2)} ? h.x : ${at(Dt)} - h.x;
		float rx = abs(ux - ${at(Qo.purlin)} * floor(ux / ${at(Qo.purlin)} + 0.5));
		bar = max(bar, 1.0 - smoothstep(${at(Qo.purlinW*.5)} - b, ${at(Qo.purlinW*.5)} + b, rx));
		// the ridge beam
		bar = max(bar, 1.0 - smoothstep(0.14 - b, 0.14 + b, abs(h.x - ${at(Dt/2)})));
		// the leaded pattern in the panes (its shadow is crisper than
		// the sun's disc would allow, for the drawing to read)
		vec2 pq = vec2(ux - ${at(Qo.purlin)} * floor(ux / ${at(Qo.purlin)}) - ${at(Qo.purlin/2)}, h.z - ${at(Qo.rafter)} * floor(h.z / ${at(Qo.rafter)}) - ${at(Qo.rafter/2)});
		float pat = studioRoofPattern(pq, 0.004 + 0.0035 * t);
		// and along the rafters and the ridge
		${Ws.filter(o=>o[0]==="rafter").map(([o,n,r])=>`pat *= 1.0 - studioVineShade(h.z - ${at(n)}, h.x, h.z, ${at(r)});`).join(`
		`)}
		pat *= 1.0 - studioVineShade(h.x - ${at(Dt/2)}, h.z, h.x, 0.9);
		return vis * (1.0 - bar) * pat * 0.78;
	}`}function Vs(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let o=e;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}var Mt={FLOOR:0,PLASTER:1,STONE:2,STEEL:3,WATER:4,PAD:5,PETAL:6,STAMEN:7,MARBLE:8,WOOD:9,GESSO:10,PAINT:11,POT:12,SHADE:13,BULB:14,NICHE:15,JAR:16,SOIL:17,BRUSH:18,TRAVERTINE:19,CLOTH:20,WMARBLE:21,REDDOOR:22,REDPANEL:23,DARKWOOD:24,BRASS:25,BRACT:26,KEYHOLE:27,ROCK:28,OLDSTONE:29,HOLLOW:30};function cd(){let t={pos:[],nrm:[],kind:[],uv:[],anchor:[],idx:[]};return t.float=null,t.v=(e,o,n,r)=>(t.pos.push(e[0]+Ae[0],e[1]+Ae[1],e[2]+Ae[2]),t.nrm.push(o[0],o[1],o[2]),t.kind.push(n),t.uv.push(r?r[0]:0,r?r[1]:0),t.float?t.anchor.push(t.float[0]+Ae[0],t.float[1]+Ae[2],t.float[2],1):t.anchor.push(0,0,0,0),t.pos.length/3-1),t.quad=(e,o,n,r,a,s,i)=>{let c=t.v(e,a,s,i&&i[0]),h=t.v(o,a,s,i&&i[1]),l=t.v(n,a,s,i&&i[2]),d=t.v(r,a,s,i&&i[3]);t.idx.push(c,h,l,c,l,d)},t.box=(e,o,n,r,a,s,i,c)=>{let h=c||{};h.top||t.quad([e,a,n],[e,a,s],[r,a,s],[r,a,n],[0,1,0],i,[[e,n],[e,s],[r,s],[r,n]]),h.bottom||t.quad([e,o,n],[r,o,n],[r,o,s],[e,o,s],[0,-1,0],i,[[e,n],[r,n],[r,s],[e,s]]),h.x0||t.quad([e,o,n],[e,o,s],[e,a,s],[e,a,n],[-1,0,0],i,[[n,o],[s,o],[s,a],[n,a]]),h.x1||t.quad([r,o,s],[r,o,n],[r,a,n],[r,a,s],[1,0,0],i,[[s,o],[n,o],[n,a],[s,a]]),h.z0||t.quad([r,o,n],[e,o,n],[e,a,n],[r,a,n],[0,0,-1],i,[[r,o],[e,o],[e,a],[r,a]]),h.z1||t.quad([e,o,s],[r,o,s],[r,a,s],[e,a,s],[0,0,1],i,[[e,o],[r,o],[r,a],[e,a]])},t.tbox=(e,o,n,r,a,s,i,c,h)=>{let l=Math.cos(n),d=Math.sin(n),u=Math.cos(h||0),p=Math.sin(h||0),f=(g,x,y)=>{let w=a+(x-a)*u-y*p*0,M=y+(x-a)*p,_=a+(x-a)*u;return[e+l*g+d*M,_,o-d*g+l*M]},v=g=>{let x=g[1]*u-g[2]*p,y=g[2]*u+g[1]*p;return[l*g[0]+d*y,x,-d*g[0]+l*y]},m=(g,x,y,w,M)=>t.quad(f(...g),f(...x),f(...y),f(...w),v(M),c,[[g[0]+g[2],g[1]],[x[0]+x[2],x[1]],[y[0]+y[2],y[1]],[w[0]+w[2],w[1]]]);m([-r,s,-i],[-r,s,i],[r,s,i],[r,s,-i],[0,1,0]),m([-r,a,-i],[r,a,-i],[r,a,i],[-r,a,i],[0,-1,0]),m([-r,a,-i],[-r,a,i],[-r,s,i],[-r,s,-i],[-1,0,0]),m([r,a,i],[r,a,-i],[r,s,-i],[r,s,i],[1,0,0]),m([r,a,-i],[-r,a,-i],[-r,s,-i],[r,s,-i],[0,0,-1]),m([-r,a,i],[r,a,i],[r,s,i],[-r,s,i],[0,0,1])},t.beam=(e,o,n,r,a)=>{let s=[o[0]-e[0],o[1]-e[1],o[2]-e[2]],i=Math.hypot(...s),c=s.map(f=>f/i),h=a||(Math.abs(c[1])>.9?[1,0,0]:[0,1,0]),l=[c[1]*h[2]-c[2]*h[1],c[2]*h[0]-c[0]*h[2],c[0]*h[1]-c[1]*h[0]],d=Math.hypot(...l);l=l.map(f=>f/d),h=[l[1]*c[2]-l[2]*c[1],l[2]*c[0]-l[0]*c[2],l[0]*c[1]-l[1]*c[0]];let u=(f,v,m)=>[f[0]+l[0]*n*v+h[0]*n*m,f[1]+l[1]*n*v+h[1]*n*m,f[2]+l[2]*n*v+h[2]*n*m],p=[[[1,-1],[1,1],l],[[1,1],[-1,1],h],[[-1,1],[-1,-1],l.map(f=>-f)],[[-1,-1],[1,-1],h.map(f=>-f)]];for(let[f,v,m]of p)t.quad(u(e,...f),u(o,...f),u(o,...v),u(e,...v),m,r,[[0,0],[i,0],[i,1],[0,1]])},t.lathe=(e,o,n,r,a)=>{let s=a||32,i=n.map(([c,h],l)=>{let d=n[Math.max(0,l-1)],u=n[Math.min(n.length-1,l+1)],p=u[0]-d[0],f=u[1]-d[1],v=Math.hypot(p,f)||1,m=f/v,g=-p/v,x=[];for(let y=0;y<=s;y++){let w=y/s*2*vo;x.push(t.v([e+Math.cos(w)*c,h,o+Math.sin(w)*c],[Math.cos(w)*m,g,Math.sin(w)*m],r,[y/s*c*2*vo,h]))}return x});for(let c=0;c<i.length-1;c++)for(let h=0;h<s;h++){let l=i[c][h],d=i[c][h+1],u=i[c+1][h+1],p=i[c+1][h];t.idx.push(l,p,u,l,u,d)}},t}var hc=t=>Math.abs(t)>=we.hw?null:we.spring+Math.sqrt(we.hw*we.hw-t*t),Ws=[["truss",Nl[0],3.1],["truss",Nl[1],5.4],["truss",Nl[2],7.7],["rafter",Qo.rafter*2,1.7],["rafter",Qo.rafter*5,8.5],["rafter",Qo.rafter*8,13.6],["rafter",Qo.rafter*10,17],["ridge",Dt/2,.9],...[.75,...we.c.slice(1).map((t,e)=>(t+we.c[e])/2),Ne-.75].map((t,e)=>["wall",t,2.3+e*4.1])],Ol=(t,e)=>.5*Math.sin(t*1.9+e)+.5*Math.sin(t*.77+e*1.3)>-.25,wM=t=>t<Dt/2?wo+dr*t:wo+dr*(Dt-t);function Ah(t,e,o){return t==="wall"?[.12,o,e]:t==="truss"?[o,wo-.12,e]:t==="rafter"?[o,wM(o)-.2,e]:[e,ur-.32,o]}var Th=t=>t==="ridge"?[.4,Ne-.4]:t==="wall"?[.15,wo-.05]:[.35,Dt-.35],tr={w:1.72,spring:2.05,r:2.05,frame:.21,zl:Ne-.05,zf:Ne-.13};tr.c=tr.r-tr.w/2;var Nr=(t,e)=>{let o=tr.r+(e||0),n=Math.abs(t)+tr.c;return n>=o?tr.spring:tr.spring+Math.sqrt(o*o-n*n)};tr.top=Nr(0);function _M(t){let e=Dt/2,{w:o,frame:n,zl:r,zf:a}=tr,s=o/2,i=s+n,c=.02;for(let _=-i;_<i-1e-6;_+=c){let k=_,O=Math.min(i,_+c),N=(k+O)/2,G=Nr(k,n),$=Nr(O,n),V=0,D=0;Math.abs(N)<s&&(V=Nr(k),D=Nr(O)),Math.abs(N)>=s;{let U=Math.abs(N)<s?V:0,ht=Math.abs(N)<s?D:0;t.quad([e+O,ht,a],[e+k,U,a],[e+k,G,a],[e+O,$,a],[0,0,-1],Mt.DARKWOOD,[[O,ht],[k,U],[k,G],[O,$]])}t.quad([e+k,G,a],[e+k,G,Ne],[e+O,$,Ne],[e+O,$,a],[0,1,0],Mt.DARKWOOD,[[k,0],[k,1],[O,1],[O,0]]),Math.abs(N)<s&&t.quad([e+k,V,a],[e+O,D,a],[e+O,D,r],[e+k,V,r],[0,-1,0],Mt.DARKWOOD,[[k,0],[O,0],[O,1],[k,1]])}for(let _ of[-1,1])t.quad([e+_*i,0,a],[e+_*i,0,Ne],[e+_*i,tr.spring,Ne],[e+_*i,tr.spring,a],[_,0,0],Mt.DARKWOOD,[[0,0],[1,0],[1,1],[0,1]]),t.quad([e+_*s,0,a],[e+_*s,tr.spring,a],[e+_*s,tr.spring,r],[e+_*s,0,r],[-_,0,0],Mt.DARKWOOD,[[0,0],[1,0],[1,1],[0,1]]),t.box(e+_*(s+n/2)-n/2-.04,0,a-.04,e+_*(s+n/2)+n/2+.04,.42,Ne,Mt.DARKWOOD);let h=40;for(let _=0;_<h;_++){let k=-s+2*s*_/h,O=-s+2*s*(_+1)/h;t.beam([e+k,Nr(k)+.03,a-.015],[e+O,Nr(O)+.03,a-.015],.018,Mt.DARKWOOD)}for(let _ of[-1,1])t.beam([e+_*(s+.03),.42,a-.015],[e+_*(s+.03),tr.spring+.02,a-.015],.018,Mt.DARKWOOD);for(let _=-s;_<s-1e-6;_+=c){let k=_,O=Math.min(s,_+c),N=Nr(k),G=Nr(O);t.quad([e+O,0,r],[e+k,0,r],[e+k,N,r],[e+O,G,r],[0,0,-1],Mt.REDDOOR,[[O,0],[k,0],[k,N],[O,G]])}let l=s-.2,d=.3,u=2.12,p=r-.006,f=.05,v=(_,k,O,N)=>t.box(e+_,k,p-.018,e+O,N,p,Mt.REDDOOR);v(-l,d,l,d+f),v(-l,u-f,l,u),v(-l,d,-l+f,u),v(l-f,d,l,u),t.box(e-l+.14,d+.14,p-.022,e+l-.14,u-.14,p,Mt.REDDOOR);let m=2.36;v(-s+.08,u+.06,s-.08,u+.12);for(let _ of[-1,1]){let O=s-.17;for(let N=.07;N<O-1e-6;N+=c){let G=N,$=Math.min(O,N+c),V=Nr(G,-.18),D=Nr($,-.18);if(V<=m+.02&&D<=m+.02)continue;let U=jt=>e+_*jt,ht=[[U(G),m,p+.004],[U($),m,p+.004],[U($),Math.max(m,D),p+.004],[U(G),Math.max(m,V),p+.004]];_>0?t.quad(ht[1],ht[0],ht[3],ht[2],[0,0,-1],Mt.REDPANEL,[[$,0],[G,0],[G,1],[$,1]]):t.quad(...ht,[0,0,-1],Mt.REDPANEL,[[G,0],[$,0],[$,1],[G,1]])}}t.beam([e,m-.02,p-.008],[e,Nr(0,-.12),p-.008],.03,Mt.REDDOOR),t.beam([e-s+.1,m-.01,p-.006],[e+s-.1,m-.01,p-.006],.014,Mt.REDDOOR);let g=e-s+.15,x=1.06,y=p-.03;t.box(g-.034,x-.2,y-.008,g+.034,x+.17,y+.012,Mt.BRASS);for(let[_,k]of[[x+.2,.026],[x+.235,.016],[x-.23,.026],[x-.265,.016]])t.lathe(g,y-.002,[[0,_-k],[k,_-k*.4],[k,_+k*.4],[0,_+k]],Mt.BRASS,12);for(let _=0;_<6;_++){let k=x-.17+_*.065;for(let O of[-1,1])t.beam([g+O*.034,k,y-.01],[g+O*.041,k+.03,y-.01],.006,Mt.BRASS)}let w=y-.008,M=(_,k,O)=>{for(let N=0;N<O;N++){let G=vo*N/O,$=vo*(N+1)/O;for(let V=0;V<16;V++){let D=2*vo*V/16,U=2*vo*(V+1)/16,ht=(st,wt)=>[g+k*Math.sin(st)*Math.cos(wt),x+.03+k*Math.sin(st)*Math.sin(wt),_-k*Math.cos(st)],jt=(st,wt)=>[Math.sin(st)*Math.cos(wt),Math.sin(st)*Math.sin(wt),-Math.cos(st)],Lt=t.v(ht(G,D),jt(G,D),Mt.BRASS),gt=t.v(ht(G,U),jt(G,U),Mt.BRASS),tt=t.v(ht($,U),jt($,U),Mt.BRASS),W=t.v(ht($,D),jt($,D),Mt.BRASS);t.idx.push(Lt,gt,tt,Lt,tt,W)}}};t.beam([g,x+.03,w],[g,x+.03,w-.05],.011,Mt.BRASS),M(w-.075,.034,10),t.box(g-.008,x-.1,y-.0125,g+.008,x-.06,y-.0085,Mt.KEYHOLE)}function MM(t,e){let o=t.pos.length/3;for(let n=0;n<e.pos.length;n+=3){let r=e.pos[n]-Ae[0],a=e.pos[n+2]-Ae[2];t.pos.push(Dt-r+Ae[0],e.pos[n+1],Ne-a+Ae[2]),t.nrm.push(-e.nrm[n],e.nrm[n+1],-e.nrm[n+2])}t.kind.push(...e.kind),t.uv.push(...e.uv),t.anchor.push(...e.anchor);for(let n of e.idx)t.idx.push(n+o)}function kM(t){let{cx:e,hw:o,spring:n,pier:r,face:a,back:s,floor:i,x0:c,x1:h}=To,l=Mt.OLDSTONE,d=Mt.HOLLOW,u=s-o,p=5.35,f=m=>n+Math.sqrt(Math.max(0,o*o-(m-e)*(m-e)));t.box(c-.1,0,a-.28,h+.1,i-.06,Ne,l,{bottom:!0}),t.box(c-.14,i-.06,a-.34,h+.14,i,Ne,l),t.box(e-.95,lt.top,a-.62,e+.95,lt.top+.15,a-.28,l,{bottom:!0});for(let[m,g]of[[c,e-o],[e+o,h]]){t.box(m,i,a+.03,g,p,Ne,d,{bottom:!0});let x=m<e?m:g,y=m<e?g:m,w=m<e?1:-1,M=11,_=(p-.38-i)/M;for(let k=0;k<M;k++){let O=i+k*_+.018,N=i+(k+1)*_-.018,G=k%2===0,$=x+w*.01,V=G?y-w*.01:x+w*(r*.66);if(t.box(Math.min($,V),O,a-.06,Math.max($,V),N,a+.03,l,{z1:!0}),!G){let U=x+w*(r*.66+.025),ht=y-w*.01;t.box(Math.min(U,ht),O,a-.02,Math.max(U,ht),N,a+.03,l,{z1:!0})}let D=x-w*.035;t.box(Math.min(D,x+w*.02),O,a-.035,Math.max(D,x+w*.02),N,G?a+.9:a+.55,l)}t.box(m-.05,p-.38,a-.07,g+.05,p-.3,Ne,l),t.box(m-.02,p-.3,a-.03,g+.02,p-.12,Ne,l),t.box(m-.09,p-.12,a-.11,g+.09,p,Ne,l)}let v=.03;for(let m=e-o;m<e+o-1e-6;m+=v){let g=m,x=Math.min(e+o,m+v);t.quad([x,f(x),a+.02],[g,f(g),a+.02],[g,p,a+.02],[x,p,a+.02],[0,0,-1],l,[[x,f(x)],[g,f(g)],[g,p],[x,p]])}{let g=o+.07;for(let y=0;y<36;y++){let w=vo*y/36,M=vo*(y+1)/36;t.beam([e+Math.cos(w)*g,n+Math.sin(w)*g,a-.02],[e+Math.cos(M)*g,n+Math.sin(M)*g,a-.02],.065,l,[0,0,1])}for(let y of[-1,1])t.box(e+y*o-.16,n-.14,a-.06,e+y*o+.16,n,a+.4,l);let x=n+o;t.quad([e-.17,x+.32,a-.08],[e+.17,x+.32,a-.08],[e+.11,x-.06,a-.08],[e-.11,x-.06,a-.08],[0,0,-1],l,[[0,1],[1,1],[1,0],[0,0]]);for(let y of[-1,1])t.quad([e+y*.11,x-.06,a-.08],[e+y*.17,x+.32,a-.08],[e+y*.17,x+.32,a+.02],[e+y*.11,x-.06,a+.02],[y,-.15,0],l,[[0,0],[1,0],[1,1],[0,1]]);t.quad([e-.11,x-.06,a-.08],[e+.11,x-.06,a-.08],[e+.11,x-.06,a+.02],[e-.11,x-.06,a+.02],[0,-1,0],l,[[0,0],[1,0],[1,1],[0,1]])}for(let m of[-1,1]){let g=e+m*o;t.quad([g,i,a],[g,i,u],[g,n,u],[g,n,a],[-m,0,0],d,[[a,i],[u,i],[u,n],[a,n]])}{for(let y=0;y<40;y++){let w=vo*y/40,M=vo*(y+1)/40,_=(O,N)=>[e+Math.cos(O)*o,n+Math.sin(O)*o,N],k=[-Math.cos((w+M)/2),-Math.sin((w+M)/2),0];t.quad(_(w,a),_(M,a),_(M,u),_(w,u),k,d,[[o*w+0,a],[o*M,a],[o*M,u],[o*w,u]])}for(let y=0;y<40;y++){let w=vo*y/40,M=vo*(y+1)/40,_=(V,D)=>[e+Math.cos(V)*o,D,u+Math.sin(V)*o],k=V=>[-Math.cos(V),0,-Math.sin(V)],O=t.v(_(w,i),k(w),d,[o*w,i]),N=t.v(_(M,i),k(M),d,[o*M,i]),G=t.v(_(M,n),k(M),d,[o*M,n]),$=t.v(_(w,n),k(w),d,[o*w,n]);t.idx.push(O,N,G,O,G,$)}let x=[];for(let y=0;y<=14;y++){let w=vo/2*y/14,M=[];for(let _=0;_<=40;_++){let k=vo*_/40,O=[Math.cos(k)*Math.cos(w),Math.sin(w),Math.sin(k)*Math.cos(w)];M.push(t.v([e+o*O[0],n+o*O[1],u+o*O[2]],O.map(N=>-N),d,[o*k,n+o*w]))}x.push(M)}for(let y=0;y<14;y++)for(let w=0;w<40;w++){let M=x[y][w],_=x[y][w+1],k=x[y+1][w+1],O=x[y+1][w];t.idx.push(M,_,k,M,k,O)}t.box(e-o,i-.02,a-.02,e+o,i,s,d,{bottom:!0,x0:!0,x1:!0,z1:!0})}t.box(xn.x-.6,i,kh-.5,xn.x+.6,xn.plinth-.05,kh+.55,l,{bottom:!0}),t.box(xn.x-.64,xn.plinth-.05,kh-.54,xn.x+.64,xn.plinth,kh+.59,l),t.box(c-.06,p,a-.08,h+.06,p+.32,Ne,l),t.box(c-.02,p+.32,a-.02,h+.02,p+.78,Ne,l),t.box(c-.12,p+.78,a-.16,h+.12,p+.86,Ne,l),t.box(c-.2,p+.86,a-.26,h+.2,p+1.02,Ne,l);{let m=p+.55,g=.34,x=.2,y=28,w=[];for(let M=0;M<=4;M++){let _=M/4,k=[];for(let O=0;O<=y;O++){let N=2*vo*O/y,G=.09*Math.sqrt(Math.max(0,1-_*_))+.01;k.push(t.v([e+Math.cos(N)*g*_,m+Math.sin(N)*x*_,a-.02-G],[Math.cos(N)*_*.6,Math.sin(N)*_*.6,-1],l,[Math.cos(N)*_,Math.sin(N)*_]))}w.push(k)}for(let M=0;M<4;M++)for(let _=0;_<y;_++){let k=w[M][_],O=w[M][_+1],N=w[M+1][_+1],G=w[M+1][_];t.idx.push(k,G,N,k,N,O)}for(let M=0;M<y;M++){let _=2*vo*M/y,k=2*vo*(M+1)/y;t.beam([e+Math.cos(_)*(g+.03),m+Math.sin(_)*(x+.03),a-.04],[e+Math.cos(k)*(g+.03),m+Math.sin(k)*(x+.03),a-.04],.025,l,[0,0,1])}for(let M of[-1,1])for(let _=0;_<14;_++){let k=1.8*vo*_/14,O=1.8*vo*(_+1)/14,N=.1*(1-_/16),G=.1*(1-(_+1)/16),$=e+M*(g+.16),V=m;t.beam([$+M*Math.cos(k)*N,V+Math.sin(k)*N,a-.04],[$+M*Math.cos(O)*G,V+Math.sin(O)*G,a-.04],.018,l,[0,0,1])}}{let m=p+1.02,g=.62,x=(h-c)/2+.2,y=a-.2,w=_=>m+g*(1-Math.abs(_-e)/x);for(let _=e-x;_<e+x-1e-6;_+=.1){let k=_,O=Math.min(e+x,_+.1);t.quad([O,m,y],[k,m,y],[k,w(k),y],[O,w(O),y],[0,0,-1],l,[[O,m],[k,m],[k,w(k)],[O,w(O)]])}let M=Math.hypot(x,g);for(let _ of[-1,1]){let k=[_*g/M,x/M,0],O=e+_*(x+.06);t.quad([e,m+g+.06,y-.06],[O,m-.02,y-.06],[O,m-.02,Ne],[e,m+g+.06,Ne],k,l,[[0,y],[M,y],[M,Ne],[0,Ne]]),t.quad([e,m+g+.06,y-.06],[e,m+g-.06,y-.06],[O,m-.12,y-.06],[O,m-.02,y-.06],[0,0,-1],l,[[0,1],[0,0],[M,0],[M,1]])}}}function SM(t){let e=Vs(77);for(let[o,n,r]of Ws){let[a,s]=Th(o);for(let i=0;i<2;i++){let c=null;for(let h=a;h<=s;h+=.18){let l=Ah(o,n,h),d=Math.sin(h*3.1+i*2+r)*.07,u=Math.cos(h*2.3+i+r)*.05,p=o==="wall"?.25+.5*h/wo:0,f=o==="wall"?[.05+Math.abs(u)*.6,l[1],l[2]+d*(1.5+i)*(1+2*p)+(i-.5)*p]:o==="ridge"?[l[0]+d,l[1]+u+.12,l[2]]:[l[0],l[1]+u+.12,l[2]+d];c&&(o==="wall"||Ol(h,r)||e()<.5)&&t.beam(c,f,(o==="wall"?.022*(1.2-h/wo):.012)+.008*e(),Mt.WOOD),c=f}}}}function EM(t){let e=Vs(4242),o=(r,a)=>!(r>lt.x0-lt.curb-.1&&r<lt.x1+lt.curb+.1&&a>lt.z0-lt.curb-.1&&a<lt.z1+lt.curb+.1)&&r>.2&&r<Dt-.2&&a>.3&&a<Ne-.4,n=(r,a,s,i)=>{let c=.022+e()*.022,h=e()*2*vo,l=Math.cos(h),d=Math.sin(h),u=(f,v)=>[r+(f*l-v*d)*c,a+.004*f*v,s+(f*d+v*l)*c],p=i?2:0;t.quad(u(-1,-1),u(-1,1),u(1,1),u(1,-1),[0,1,0],Mt.BRACT,[[p,0],[p,1],[p+1,1],[p+1,0]])};for(let[r,a,s]of Ws){let[i,c]=Th(r);for(let h=i;h<=c;h+=.05){if(!Ol(h,s)||e()>.55)continue;let l=Ah(r,a,h),d=l[0]+(e()-.5)*1.8,u=l[2]+(e()-.5)*1.8;o(d,u)&&n(d,.004,u,e()<.18)}}for(let r=0;r<260;r++){let a=Math.floor(e()*4),s,i;a<2?(s=a?lt.x1+lt.curb+.12+e()*e()*.9:lt.x0-lt.curb-.12-e()*e()*.9,i=lt.z0+e()*(lt.z1-lt.z0)):(i=a===2?lt.z0-lt.curb-.12-e()*e()*.9:lt.z1+lt.curb+.12+e()*e()*.9,s=lt.x0+e()*(lt.x1-lt.x0)),o(s,i)&&n(s,.004,i,e()<.18)}for(let r=0;r<70;r++){let a=lt.x0+.08+e()*(lt.x1-lt.x0-.16),s=lt.z0+.08+e()*(lt.z1-lt.z0-.16);Math.hypot(a-xn.x,s-xn.z)<.6||(t.float=[a,s,a*5.1+s*2.9],n(a,.016,s,e()<.2),t.float=null)}}function zM(t,e,o){let n=(a,s,i,c,h)=>{let l=t.pos.length/3,d=Math.cos(i),u=Math.sin(i),p=Math.cos(c),f=Math.sin(c),v=[d,0,-u],m=[u*f,p,d*f],g=[v[1]*m[2]-v[2]*m[1],v[2]*m[0]-v[0]*m[2],v[0]*m[1]-v[1]*m[0]],x=h?.95:o()*.8;for(let[y,w]of[[0,0],[1,0],[1,1],[0,1]]){let M=(y-.5)*s,_=(w-.5)*s;t.pos.push(a[0]+v[0]*M+m[0]*_+Ae[0],a[1]+v[1]*M+m[1]*_+Ae[1],a[2]+v[2]*M+m[2]*_+Ae[2]),t.nrm.push(...g),t.uv.push(y,w),t.shade.push(x),t.flower.push(1)}t.idx.push(l,l+1,l+2,l,l+2,l+3)};function r(a,s,i){let c=s/wo,h=Math.min(.15+.9*c,a<1||a>Ne-1?.6:1.15),l=Math.round(3+7*c),d=s<1?0:Math.round((2+9*c)*(Ol(s*1.4,i)?1:.45));for(let u=0;u<l;u++){let p=o()*2*vo;e([.04+o()*.22,s+(o()-.5)*.12,a+(o()-.5)*2*h],[Math.cos(p)*.4+.5,-.2-o()*.5,Math.sin(p)],[0,0,1],.07+o()*.06,.1)}for(let u=0;u<d;u++)n([.06+o()*.28,s+(o()-.5)*.18,a+(o()-.5)*2*h*.9],.34+o()*.32,o()*2*vo,(o()-.5)*2.4,o()<.14);if(s>3&&o()<.05){let u=[.15,s,a+(o()-.5)*2*h],p=.4+o()*1.2;for(let f=0;f<p;f+=.13)u=[u[0]+.03,u[1]-.13,u[2]+(o()-.5)*.06],n([u[0],u[1],u[2]],(.26+o()*.2)*(1-.4*f/p),o()*2*vo,(o()-.5)*.8,o()<.15)}}for(let[a,s,i]of Ws){let[c,h]=Th(a);for(let l=c;l<=h;l+=.1){if(a==="wall"){r(s,l,i);continue}if(!Ol(l,i))continue;let d=Ah(a,s,l),u=()=>(o()-.5)*.7,p=4+Math.floor(o()*4);for(let f=0;f<p;f++){let v=a==="ridge"?[d[0]+u(),d[1]-o()*.25,d[2]+u()*.4]:[d[0]+u()*.4,d[1]-o()*.25,d[2]+u()];n(v,.42+o()*.4,o()*2*vo,(o()-.5)*2.4,o()<.16)}for(let f=0;f<5;f++){let v=o()*2*vo;e([d[0]+u()*.6,d[1]-o()*.2,d[2]+u()*.6],[Math.cos(v),-.3-o()*.5,Math.sin(v)],[-Math.sin(v),0,Math.cos(v)],.08+o()*.06,.1)}if(o()<.22){let f=.5+o()*2,v=[d[0],d[1],d[2]],m=[(o()-.5)*.08,(o()-.5)*.08];for(let g=0;g<f;g+=.13){v=[v[0]+m[0],v[1]-.13,v[2]+m[1]];let x=(.3+o()*.22)*(1-.4*g/f);if(n([v[0]+(o()-.5)*.08,v[1],v[2]+(o()-.5)*.08],x,o()*2*vo,(o()-.5)*.8,o()<.15),o()<.6){let y=o()*2*vo;e([v[0],v[1],v[2]],[Math.cos(y),-.6,Math.sin(y)],[-Math.sin(y),0,Math.cos(y)],.05+o()*.04,.1)}}}}}}var Kg=(()=>{let t=Vs(9001),e=[],o=[];for(let[r,a,s]of Ws){let[i,c]=Th(r);for(let h=i;h<=c;h+=.1)Ol(h,s)&&o.push(Ah(r,a,h))}let n=o.filter(r=>r[0]>lt.x0-.6&&r[0]<lt.x1+.6&&r[2]>lt.z0&&r[2]<lt.z1);for(let r=0;r<64;r++){let a=r%2===0&&n.length?n:o,s=a[Math.floor(t()*a.length)];e.push({start:[s[0]+(t()-.5)*.4,s[1]-.25-t()*.3,s[2]+(t()-.5)*.4],period:18+t()*22,offset:t()*60,drift:[(t()-.5)*1.6,(t()-.5)*1.6],speed:.45+t()*.25,seed:t(),white:t()<.18?1:0})}return e})(),es=[lt.x0+.06,lt.z0+.06,lt.x1-.06,lt.z1-.06];function AM(t,e){let o=e+t.offset,n=Math.floor(o/t.period),r=o-n*t.period,a=.6+.4*Math.sin(n*1.7+t.seed*5),s=t.start[0]+t.drift[0]*a,i=t.start[2]+t.drift[1]*a,c=s>es[0]&&s<es[2]&&i>es[1]&&i<es[3],h=c?.017:.006,l=(t.start[1]-h)/t.speed;return{ph:r,Tf:l,lx:s,lz:i,inPool:c}}var Vr=[{at:[Dt/2-.8,Fn(7.6)],dir:.9,len:.92,kind:0,sip:21,first:9},{at:[Dt/2+.9,Fn(11.6)],dir:3.6,len:.74,kind:1,sip:29,first:17},{at:[Dt/2-.3,Fn(12.8)],dir:5.2,len:.86,kind:2,sip:25,first:4},{at:[Dt/2+1,Fn(7)],dir:2.2,len:.7,kind:1,sip:33,first:23},{at:[Dt/2-1.1,Fn(10.4)],dir:4.4,len:.82,kind:0,sip:27,first:13},{at:[Dt/2+.4,Fn(9)],dir:1.4,len:.94,kind:2,sip:31,first:28},{at:[Dt/2-.9,Fn(13)],dir:5.9,len:.66,kind:1,sip:23,first:6},{at:[Dt/2+1.1,Fn(12.6)],dir:3,len:.8,kind:0,sip:35,first:31}],js=[lt.x0+.5,lt.z0+.5,lt.x1-.5,lt.z1-.55],Al=[lt.x0+.25,lt.z0+.25,lt.x1-.25,lt.z1-.3],Ll=12,Tl=-.36,ld=[];function TM(){let t=d=>{let u=Math.sin(d*12.9898+78.233)*43758.5453;return u-Math.floor(u)},e=Vr.map((d,u)=>({k:d,i:u,x:d.at[0],z:d.at[1],th:d.dir,w:0,v:.08,y:-.17,ph:u*2.1,pitch:0,kappa:0,thrust:0,amp:.2,stroking:u%2===0,modeT:t(u*3.1)*3,aim:d.dir,nextAim:t(u*7.7)*5,yAim:-.17,nextY:t(u*5.9)*8,gx:d.at[0],gz:d.at[1],nextSip:d.first,sipT:-1,bite:0,notice:0})),o=[],n=[];for(let d=0;d<Ll;d++)n.push({x:0,z:0,alive:0,born:0,seed:d*.37});let r={on:!1,x:0,z:0,t0:0},a=0,s=0,i=d=>Math.atan2(Math.sin(d),Math.cos(d)),c=()=>t(++s*1.618+a*.37);return{fish:e,events:o,crumbs:n,feed:r,drop:(d,u)=>{d=Math.max(Al[0],Math.min(Al[2],d)),u=Math.max(Al[1],Math.min(Al[3],u)),Object.assign(r,{on:!0,x:d,z:u,t0:a}),n.forEach((p,f)=>{let v=t(a+f)*Math.PI*2,m=.04+.16*Math.sqrt(t(a*1.7+f*3.1));Object.assign(p,{x:d+Math.cos(v)*m,z:u+Math.sin(v)*m,alive:1,born:a+t(f*5.3+a)*.35})}),o.push([d,u,a,1]);for(let p of e)p.notice=a+.3+Math.hypot(p.x-d,p.z-u)*.35+t(p.i*9.1+a)*.7},step:d=>{a+=d;let u=a,p=0;for(let f of n)!f.alive||u<f.born||(p++,f.x+=Math.sin(u*.7+f.seed*11)*.004*d,f.z+=Math.cos(u*.6+f.seed*7)*.004*d);if(r.on&&(p===0&&u>r.t0+1||u>r.t0+40)){r.on=!1;for(let f of n)f.alive=0}for(let f of e){let{k:v}=f,m=v.len,g=r.on&&u>f.notice;(u>f.nextAim||Math.hypot(f.gx-f.x,f.gz-f.z)<.7)&&(f.gx=js[0]+c()*(js[2]-js[0]),f.gz=js[1]+c()*(js[3]-js[1]),f.nextAim=u+12+c()*14),f.aim=Math.atan2(f.gz-f.z,f.gx-f.x)+.35*Math.sin(u*.21+f.i*1.7);let x=f.aim,y=.7,w=null;if(g){let tt=1e9;for(let wt of n){if(!wt.alive||u<wt.born)continue;let $t=Math.hypot(wt.x-f.x,wt.z-f.z)+.1*Math.sin(f.i*3.3+wt.seed*9);$t<tt&&(tt=$t,w=wt)}let W=w?w.x:r.x,st=w?w.z:r.z;x=Math.atan2(st-f.z,W-f.x),f.aim=x,y=1.8}let M=.6+m*.8+f.v*2,_=g?Al:js,k=0;for(let tt of[0,.5,-.5]){let W=f.x+Math.cos(f.th+tt)*M,st=f.z+Math.sin(f.th+tt)*M;k=Math.max(k,Math.max(_[0]-W,W-_[2],_[1]-st,st-_[3],0))}if(k>0){let tt=(_[0]+_[2])/2,W=(_[1]+_[3])/2+Math.sin(f.i*2.3)*1.5,st=Math.atan2(W-f.z,tt-f.x),wt=Math.min(1,k*2.2);x=f.th+i(st-f.th)*wt+i(x-f.th)*(1-wt),g||(f.aim=x),y=Math.max(y,.6+wt*.8)}let O=0;for(let tt of e){if(tt===f)continue;let W=tt.x-f.x,st=tt.z-f.z,wt=Math.hypot(W,st),$t=(g?.4:1)*(m+tt.k.len)/2+.2;if(wt<$t&&Math.abs(tt.y-f.y)<.14){let Ut=i(Math.atan2(st,W)-f.th);(Math.abs(Ut)<1.6||wt<$t*.5)&&(O-=Math.sign(Ut||1)*($t-wt)/$t*(Math.abs(Ut)<1.6?1:.6))}}let N=i(x-f.th)+O*(g?.4:2);f.modeT-=d,g?(f.stroking=!0,f.modeT=Math.max(f.modeT,.4)):f.modeT<=0&&(f.stroking=!f.stroking,f.modeT=f.stroking?1.2+c()*1.6:1.6+c()*3.2),!f.stroking&&(Math.abs(N)>.9||f.v<.035)&&(f.stroking=!0,f.modeT=1+c()*.8),!g&&f.sipT<0&&u>f.nextSip&&(f.sipT=0,f.nextSip=u+v.sip*(.7+.6*c()));let G=0;if(f.sipT>=0){let tt=f.sipT;f.sipT+=d,G=Math.min(1,tt/1.6)*(1-Math.max(0,Math.min(1,(tt-2.6)/1.6))),tt<1.7&&f.sipT>=1.7&&o.push([f.x+Math.cos(f.th)*.03,f.z+Math.sin(f.th)*.03,u,.9]),tt<2.4&&f.sipT>=2.4&&o.push([f.x,f.z,u,.55]),(f.sipT>4.2||g)&&(f.sipT=-1)}let $=(f.stroking?g?2.4:1:0)*(1-.6*G);f.thrust+=($-f.thrust)*Math.min(d*3,1);let V=g?.9:.55;f.v+=(f.thrust*.085*(.7+.4*m)-V*f.v)*d,f.v=Math.max(f.v,.008);let D=.35+.65*Math.min(1,f.thrust),U=Math.max(-y,Math.min(y,N*1.3))*D;f.w+=(U-f.w)*Math.min(d*2.2,1),f.th+=f.w*d,u>f.nextY&&(f.yAim=-(.13+c()*.1),f.nextY=u+6+c()*10);let ht=f.yAim;if(G>0&&(ht+=(-.045-ht)*G),g){let tt=w?w.x:r.x,W=w?w.z:r.z,st=1-Math.min(1,Math.max(0,(Math.hypot(tt-f.x,W-f.z)-.15)/.9));if(ht+=(-.04-ht)*st,w&&u>f.bite&&f.y>-.08){let wt=f.x+Math.cos(f.th)*.02,$t=f.z+Math.sin(f.th)*.02;Math.hypot(w.x-wt,w.z-$t)<.09&&(w.alive=0,f.bite=u+1.3,o.push([w.x,w.z,u,.75]))}}f.x+=Math.cos(f.th)*f.v*d,f.z+=Math.sin(f.th)*f.v*d,f.x=Math.max(lt.x0+.15,Math.min(lt.x1-.15,f.x)),f.z=Math.max(lt.z0+.15,Math.min(lt.z1-.15,f.z));let jt=(ht-f.y)*Math.min(d*(g?2:.8),1);f.y+=jt,f.pitch+=(Math.max(-.4,Math.min(.4,jt/d/Math.max(f.v,.06)))-f.pitch)*Math.min(d*2.5,1);let Lt=Math.max(-1/m,Math.min(1/m,f.w/Math.max(f.v,.1)));f.kappa+=(Lt-f.kappa)*Math.min(d*4,1);let gt=.12+.88*Math.min(1.4,f.thrust)+.4*Math.min(1,Math.abs(f.w));f.amp+=(gt-f.amp)*Math.min(d*2,1),f.ph+=d*(2+5.5*Math.min(1.6,f.thrust))*(.75+.35/Math.sqrt(m))}for(;o.length&&u-o[0][2]>10;)o.shift()},get t(){return a}}}function LM(){let t=cd();{let e=lt.x0-lt.curb,o=lt.x1+lt.curb,n=lt.z0-lt.curb,r=lt.z1+lt.curb,a=[[0,0,Dt,n],[0,r,Dt,Ne],[0,n,e,r],[o,n,Dt,r]];for(let[s,i,c,h]of a)for(let d=s;d<c-1e-6;d+=1)for(let u=i;u<h-1e-6;u+=1){let p=d,f=Math.min(c,d+1),v=u,m=Math.min(h,u+1);t.quad([p,0,v],[p,0,m],[f,0,m],[f,0,v],[0,1,0],Mt.FLOOR,[[p,v],[p,m],[f,m],[f,v]])}}for(let e of[0,1]){let o=e?Dt:0,n=e?Dt+x0:-x0,r=e?[-1,0,0]:[1,0,0],a=.04;for(let p=0;p<Ne-1e-6;p+=a){let f=p,v=Math.min(Ne,p+a),m=(f+v)/2,g=null;if(!e)for(let y of we.c)hc(m-y)!==null&&(g=[we.sill,Math.min(hc(f-y)||we.spring,hc(v-y)||we.spring)]);let x=g?[[0,g[0]],[g[1],wo]]:[[0,wo]];for(let[y,w]of x)w<=y||(e?t.quad([o,y,v],[o,y,f],[o,w,f],[o,w,v],r,Mt.ROCK,[[v,y],[f,y],[f,w],[v,w]]):t.quad([o,y,f],[o,y,v],[o,w,v],[o,w,f],r,Mt.ROCK,[[f,y],[v,y],[v,w],[f,w]]))}if(!e)for(let p of we.c){for(let g of[-1,1]){let x=p+g*we.hw,y=[0,0,-g],w=[o,we.sill,x],M=[n,we.sill,x],_=[n,we.spring,x],k=[o,we.spring,x];g>0!=!!e?t.quad(w,M,_,k,y,Mt.ROCK,[[0,we.sill],[x0,we.sill],[x0,we.spring],[0,we.spring]]):t.quad(k,_,M,w,y,Mt.ROCK,[[0,we.spring],[x0,we.spring],[x0,we.sill],[0,we.sill]])}let f=28;for(let g=0;g<f;g++){let x=g/f*vo,y=(g+1)/f*vo,w=p+Math.cos(x)*we.hw,M=p+Math.cos(y)*we.hw,_=we.spring+Math.sin(x)*we.hw,k=we.spring+Math.sin(y)*we.hw,O=[0,-Math.sin((x+y)/2),-Math.cos((x+y)/2)];e?t.quad([o,_,w],[n,_,w],[n,k,M],[o,k,M],O,Mt.ROCK,[[0,x],[x0,x],[x0,y],[0,y]]):t.quad([o,k,M],[n,k,M],[n,_,w],[o,_,w],O,Mt.ROCK,[[0,y],[x0,y],[x0,x],[0,x]])}let v=e?Dt-.08:-x0,m=e?Dt+x0:.08;t.box(v,we.sill-.09,p-we.hw-.12,m,we.sill,p+we.hw+.12,Mt.OLDSTONE)}let s=e?Dt:0,i=e?-1:1,c=Mt.OLDSTONE,h=Math.min(s,s+i*.32),l=Math.max(s,s+i*.32);t.box(h,wo-.55,0,l,wo-.3,Ne,c);let d=Math.min(s,s+i*.42),u=Math.max(s,s+i*.42);t.box(d,wo-.3,0,u,wo-.12,Ne,c)}for(let[e,o]of[[0,1],[Ne,-1]]){for(let s=0;s<32;s++){let i=s/32*Dt,c=(s+1)/32*Dt,h=d=>d<Dt/2?wo+dr*d:wo+dr*(Dt-d),l=o>0?[[c,0],[i,0],[i,h(i)],[c,h(c)]]:[[i,0],[c,0],[c,h(c)],[i,h(i)]];t.quad(...l.map(([d,u])=>[d,u,e]),[0,0,o],Mt.ROCK,l.map(([d,u])=>[d,u]))}let r=o>0?0:Ne-.32,a=o>0?.32:Ne;t.box(0,wo-.55,r,Dt,wo-.3,a,Mt.OLDSTONE)}_M(t);{let e=cd();kM(e),MM(t,e)}{let{x0:e,x1:o,z0:n,z1:r,curb:a,top:s}=lt,i=.06,c=.08;t.box(e-a,0,n-a,e,s-c,r+a,Mt.OLDSTONE,{bottom:!0}),t.box(o,0,n-a,o+a,s-c,r+a,Mt.OLDSTONE,{bottom:!0}),t.box(e,0,n-a,o,s-c,n,Mt.OLDSTONE,{bottom:!0}),t.box(e,0,r,o,s-c,r+a,Mt.OLDSTONE,{bottom:!0}),t.box(e-a-i,s-c,n-a-i,e+i*.5,s,r+a+i,Mt.OLDSTONE),t.box(o-i*.5,s-c,n-a-i,o+a+i,s,r+a+i,Mt.OLDSTONE),t.box(e+i*.5,s-c,n-a-i,o-i*.5,s,n+i*.5,Mt.OLDSTONE),t.box(e+i*.5,s-c,r-i*.5,o-i*.5,s,r+a+i,Mt.OLDSTONE);let h=.5;for(let l=e;l<o-1e-6;l+=h)for(let d=n;d<r-1e-6;d+=h){let u=l,p=Math.min(o,l+h),f=d,v=Math.min(r,d+h);t.quad([u,0,f],[u,0,v],[p,0,v],[p,0,f],[0,1,0],Mt.WATER,[[u,f],[u,v],[p,v],[p,f]])}}return t}function NM(t){for(let o of[0]){let n=o?Dt+x0*.5:-x0*.5,r=.05,a=H0.w*.5;for(let s of we.c){for(let i of H0.cols){let c=hc(i)-.01;t.box(n-r,we.sill,s+i-a,n+r,c,s+i+a,Mt.STEEL)}for(let i=we.sill+H0.rowH;i<we.spring+.01;i+=H0.rowH)t.box(n-r,i-a,s-we.hw,n+r,i+a,s+we.hw,Mt.STEEL);for(let[i,c]of[[we.hw-.03,.06],[H0.ring,a]])for(let l=0;l<24;l++){let d=l/24*vo,u=(l+1)/24*vo;t.beam([n,we.spring+Math.sin(d)*i,s+Math.cos(d)*i],[n,we.spring+Math.sin(u)*i,s+Math.cos(u)*i],c,Mt.STEEL,[1,0,0])}for(let i of[-1,1])t.box(n-r,we.sill,s+i*(we.hw-.03)-.03,n+r,we.spring,s+i*(we.hw-.03)+.03,Mt.STEEL);t.box(n-r,we.sill,s-we.hw,n+r,we.sill+.06,s+we.hw,Mt.STEEL)}}let e=o=>o<Dt/2?wo+dr*o:wo+dr*(Dt-o);for(let o=0;o<=12;o++){let n=o*Qo.rafter;for(let[r,a]of[[-.3,Dt/2],[Dt/2,Dt+.3]])t.beam([r,e(Math.max(0,Math.min(Dt,r)))-.1,n],[a,e(a)-.1,n],.06,Mt.STEEL)}for(let o=Qo.purlin;o<Dt/2-.2;o+=Qo.purlin)for(let n of[o,Dt-o])t.beam([n,e(n)-.06,-.2],[n,e(n)-.06,Ne+.2],.035,Mt.STEEL);t.beam([Dt/2,ur-.14,-.2],[Dt/2,ur-.14,Ne+.2],.12,Mt.STEEL);for(let o of[.05,Dt-.05])t.beam([o,wo-.05,0],[o,wo-.05,Ne],.1,Mt.STEEL);for(let o of Nl){t.box(-.05,wo-.13,o-.08,Dt+.05,wo+.13,o+.08,Mt.STEEL),t.beam([Dt/2,wo,o],[Dt/2,ur-.2,o],.07,Mt.STEEL);for(let n of[-1,1])t.beam([Dt/2+n*Dt/4,wo,o],[Dt/2,ur-.4,o],.055,Mt.STEEL),t.beam([Dt/2+n*Dt/4,wo,o],[Dt/2+n*Dt/4,e(Dt/2+n*Dt/4)-.2,o],.045,Mt.STEEL),t.beam([Dt/2+n*(Dt/2-.1),wo,o],[Dt/2+n*Dt/4,e(Dt/2+n*Dt/4)-.2,o],.045,Mt.STEEL);for(let n of[-1,1])t.box(Dt/2+n*Dt/4-.12,wo-.18,o-.1,Dt/2+n*Dt/4+.12,wo+.18,o+.1,Mt.STEEL)}}function RM(t){let e=Vs(311),o=[],n=[[lt.x0+.9,Fn(6.6),.9,11],[lt.x1-.8,Fn(8.4),.85,10],[lt.x0+.8,Fn(10.6),.8,9],[lt.x1-.9,Fn(12.4),.9,11],[lt.x0+1,Fn(13.9),.65,7],[Dt/2+.2,Fn(9.6),.5,4],[lt.x1-.7,Fn(15.9),.6,6]];for(let[a,s,i,c]of n)for(let h=0;h<c;h++)for(let l=0;l<40;l++){let d=e()*2*vo,u=i*Math.sqrt(e()),p=a+Math.cos(d)*u,f=s+Math.sin(d)*u,v=.15+e()*.17;if(!(p-v<lt.x0+.04||p+v>lt.x1-.04||f-v<lt.z0+.04||f+v>lt.z1-.04)&&!(Math.hypot(p-xn.x,f-xn.z)<.62+v)&&!o.some(m=>Math.hypot(m[0]-p,m[1]-f)<(m[2]+v)*.93)){o.push([p,f,v,e()*2*vo,e()]);break}}for(let[a,s,i,c,h]of o){ld.push([a,s,i]),t.float=[a,s,h*7.3+i*13];let l=28,d=4,u=i*1.08,p=[];for(let f=0;f<=d;f++){let v=[];for(let m=0;m<l;m++){let g=m/l*2*vo,x=f/d,y=g-c,w=.012+.004*(1-x*x)+.006*Math.pow(x,6)*(.5+.5*Math.sin(g*3+h*9));v.push(t.v([a+Math.cos(g)*u*x,w,s+Math.sin(g)*u*x],[0,1,0],Mt.PAD,[.5+.5*x*Math.sin(y),.5+.5*x*Math.cos(y)]))}p.push(v)}for(let f=0;f<d;f++)for(let v=0;v<l;v++){let m=p[f][v],g=p[f][(v+1)%l],x=p[f+1][(v+1)%l],y=p[f+1][v];t.idx.push(m,g,x,m,x,y)}}t.float=null;let r=[[lt.x0+.75,Fn(6.9),1],[lt.x1-.65,Fn(8.1),.85],[lt.x1-.95,Fn(12.6),1.1],[lt.x0+.95,Fn(10.3),.8],[lt.x1-.55,Fn(15.6),.9],[lt.x0+1.05,Fn(13.7),.75]];for(let[a,s,i]of r){t.float=[a,s,a*3.7+s*1.3];let c=.17;[[12,1,70],[10,.86,48],[8,.66,26]].forEach(([l,d,u],p)=>{for(let f=0;f<l;f++){let v=2*vo*f/l+p*.33,m=(90-(90-u)*i)*vo/180,g=6,x=4,y=[];for(let w=0;w<=g;w++){let M=w/g,_=(.18+.82*Math.sin(vo*Math.min(1,Math.pow(M,.8)*.75+.1)))*.36*d*c,k=[];for(let O=0;O<=x;O++){let N=O/x*2-1,G=N*_,$=Math.abs(N)*Math.abs(N)*.12*d*c,V=M*d*c,D=V*Math.cos(m),U=V*Math.sin(m)+$,ht=a+Math.cos(v)*D-Math.sin(v)*G,jt=s+Math.sin(v)*D+Math.cos(v)*G;k.push(t.v([ht,.03+U,jt],[-Math.cos(v)*Math.sin(m)*.6,.8,-Math.sin(v)*Math.sin(m)*.6],Mt.PETAL,[(p===2?.5:0)+.5*(.5+.5*N*.92),.98-M*.96]))}y.push(k)}for(let w=0;w<g;w++)for(let M=0;M<x;M++){let _=y[w][M],k=y[w][M+1],O=y[w+1][M+1],N=y[w+1][M];t.idx.push(_,k,O,_,O,N,_,O,k,_,N,O)}}}),t.lathe(a,s,[[0,.03+.05*c*4],[.025,.03+.045*c*4],[.032,.035],[0,.03]],Mt.STAMEN,12)}t.float=null}function OM(t){let e=Vs(907);{t.box(1.25-.48,.86-.06,11.1-1.35,1.25+.48,.86,11.1+1.35,Mt.WOOD);for(let i of[-1,1])for(let c of[-1,1])t.box(1.25+i*(.48-.08)-.04,0,11.1+c*(1.35-.1)-.04,1.25+i*(.48-.08)+.04,.86-.06,11.1+c*(1.35-.1)+.04,Mt.WOOD);t.box(1.25-.48+.06,.16,11.1-1.35+.1,1.25+.48-.06,.19,11.1+1.35-.1,Mt.WOOD);for(let i=0;i<11;i++){let c=1.25+(e()-.5)*.6,h=11.1+(e()-.5)*2.2,l=.035+e()*.04,d=.09+e()*.14;if(t.lathe(c,h,[[0,.86],[l,.86],[l*1.02,.86+d*.9],[l*.9,.86+d],[0,.86+d]],i%3?Mt.JAR:Mt.POT,14),i%3===0)for(let u=0;u<7;u++){let p=e()*2*vo,f=.28+e()*.12,v=.12+e()*.2;t.beam([c,.86+.03,h],[c+Math.cos(p)*v*f,.86+.03+f,h+Math.sin(p)*v*f],.0055,Mt.BRUSH)}}t.box(1.25-.3,.86,11.1+.7,1.25+.15,.86+.02,11.1+1.15,Mt.WOOD)}for(let o=0;o<5;o++){let n=.55+e()*.6,r=.75+e()*.8,a=19.3+o*.16,s=.25+o*.07,i=.17,c=[s+r*Math.sin(i)*0,r,a];t.quad([s+.18,0,a-n/2],[s+.18,0,a+n/2],[s+.18-r*Math.sin(i),r*Math.cos(i),a+n/2],[s+.18-r*Math.sin(i),r*Math.cos(i),a-n/2],[Math.cos(i),Math.sin(i),0],o%2?Mt.WOOD:Mt.GESSO,[[0,0],[1,0],[1,1],[0,1]])}for(let o of e3)t.beam([o[0],wo,o[2]],[o[0],o[1]+.05,o[2]],.008,Mt.STEEL),t.lathe(o[0],o[2],[[.04,o[1]+.06],[.06,o[1]+.02],[.16,o[1]-.09],[.29,o[1]-.22],[.33,o[1]-.28],[.32,o[1]-.285]],Mt.SHADE,32),t.lathe(o[0],o[2],[[0,o[1]-.25],[.06,o[1]-.2],[0,o[1]-.12]],Mt.BULB,12)}var e3=[[4.2,4.6,7.33],[11.8,4.6,7.33],[4.2,4.6,16.5],[11.8,4.6,16.5]],vA=[[lt.x0-1,lt.z0-1,1],[lt.x1+1,lt.z0-1,.95],[lt.x0-1,lt.z1+1,1.15],[lt.x1+1,lt.z1+1,1.1],[.9,1.3,1.25],[Dt-.9,Ne-1.2,1.3]],Qg=[[0,0,.16,.5],[.16,0,.34,.4],[.35,0,.5,.36],[.5,0,.66,.38],[.68,0,.84,.42],[0,.6,.19,1],[.2,.57,.36,1],[.41,.6,.58,1]];function CM(){let t={pos:[],nrm:[],uv:[],shade:[],flower:[],idx:[]},e=Vs(1213),o=(n,r,a,s,i)=>{let c=Qg[Math.floor(e()*Qg.length)],h=(c[2]-c[0])/(c[3]-c[1]),l=s*h*1,d=5,u=t.pos.length/3,p=.6+e()*.4;for(let f=0;f<=d;f++){let v=f/d,m=i*v*v*s,g=[n[0]+r[0]*v*s,n[1]+r[1]*v*s-m,n[2]+r[2]*v*s];for(let x of[-.5,.5]){t.pos.push(g[0]+a[0]*x*l+Ae[0],g[1]+a[1]*x*l-Math.abs(x)*.08*l+Ae[1],g[2]+a[2]*x*l+Ae[2]);let y=[r[1]*a[2]-r[2]*a[1],r[2]*a[0]-r[0]*a[2],r[0]*a[1]-r[1]*a[0]],w=Math.hypot(...y)||1;t.nrm.push(y[0]/w,Math.abs(y[1]/w)+.2,y[2]/w),t.uv.push(x<0?c[0]:c[2],c[3]-(c[3]-c[1])*v),t.shade.push(p),t.flower.push(0)}}for(let f=0;f<d;f++){let v=u+f*2;t.idx.push(v,v+1,v+3,v,v+3,v+2)}};zM(t,o,e);for(let[n,r,a]of[[lt.x0-.3,lt.z1+.3,-1],[lt.x1+.3,lt.z0-.3,1],[lt.x0-.3,lt.z0-.2,-1]])for(let s=0;s<26;s++){let i=e()*2*vo,c=n+(e()-.3)*.5*-a,h=r+(e()-.5)*.8,l=lt.top+.01-Math.max(0,Math.abs(c-n)-.1)*.6*e();o([c,Math.max(.05,l),h],[Math.cos(i),-.15,Math.sin(i)],[-Math.sin(i),0,Math.cos(i)],.08+e()*.05,.12)}return t}function PM(){let t=cd();for(let o of[0]){let n=o?Dt+x0*.5+.01:-x0*.5-.01,r=o?[-1,0,0]:[1,0,0];for(let a of we.c)for(let i=a-we.hw;i<a+we.hw-1e-6;i+=.05){let c=i,h=Math.min(a+we.hw,i+.05),l=hc(c-a+1e-4)||we.spring,d=hc(h-a-1e-4)||we.spring;o?t.quad([n,we.sill,h],[n,we.sill,c],[n,l,c],[n,d,h],r,0,[[h,we.sill],[c,we.sill],[c,l],[h,d]]):t.quad([n,we.sill,c],[n,we.sill,h],[n,d,h],[n,l,c],r,0,[[c,we.sill],[h,we.sill],[h,d],[c,l]])}}let e=Math.hypot(dr,1);return t.quad([0,wo+.002,Ne],[0,wo+.002,0],[Dt/2,ur+.002,0],[Dt/2,ur+.002,Ne],[dr/e,-1/e,0].map(o=>-o).map((o,n)=>n===1?-Math.abs(o):o),1,[[0,Ne],[0,0],[Dt/2,0],[Dt/2,Ne]]),t.quad([Dt,wo+.002,0],[Dt,wo+.002,Ne],[Dt/2,ur+.002,Ne],[Dt/2,ur+.002,0],[-dr/e,-1/e,0],1,[[Dt,0],[Dt,Ne],[Dt/2,Ne],[Dt/2,0]]),t}var lc={ivy:[[.00293,.0127,.12207,.23633],[.13037,.00586,.24463,.24414],[.25293,.0166,.37207,.23242],[.37793,.02344,.49707,.22656],[.50293,.01367,.62207,.23535],[.62793,.03418,.74707,.21582]],blade:[[.01855,.50391,.02832,.99512],[.05762,.50391,.08301,.99512],[.10889,.50391,.12549,.99609],[.1582,.50391,.16943,.99512],[.19922,.50391,.22266,.99512],[.25,.50391,.26562,.99609],[.29932,.50391,.31006,.99609],[.33008,.50781,.37305,.99121],[.38721,.50391,.40918,.99609]],daisy:[[.75684,.00586,.86768,.24414],[.87793,.00781,.99707,.24121],[.00342,.25586,.12158,.49414],[.12842,.25586,.24609,.49414],[.25293,.25684,.37207,.49219],[.37891,.25586,.49609,.49316]],weed:[[.50293,.25781,.62207,.49121],[.62793,.26562,.74707,.48438],[.75293,.26855,.87207,.48047],[.88281,.25586,.99219,.49414],[.44043,.50977,.55957,.73926],[.5752,.50586,.67432,.74414],[.69043,.50586,.80908,.74414],[.81738,.50586,.93213,.74414],[.44043,.75781,.55957,.99219]]},$M=[[.248,.8613],[.3438,.9785],[.4492,.584],[.5957,.3281],[.5371,.918],[.1699,.4062],[.752,.6699],[.5879,.2207],[.3789,.8477],[.2637,.2266],[.6758,.7422],[.6016,.0273],[.5762,.502],[.0469,.5078],[.1406,.7773],[.791,.7539],[.6113,.5605],[.9121,.6777],[.6523,.1523],[.2871,.3301],[.2109,.832],[.4297,.625],[.168,.4434],[.1348,.1211],[.9668,.0859],[.3164,.873],[.1777,.7539],[.0215,.3281],[.6719,.334],[.9844,.6172],[.6523,.3828],[.1152,.2988],[.0176,.1328],[.207,.0996],[.6152,.9844],[.0234,.0117],[.0723,.6328],[.2695,.7695],[.2539,.9395],[.502,.9941],[.1504,.9961],[.957,.8145],[.5117,.123],[.4062,.4941],[.0547,.1387],[.4375,.2949],[.373,.2109],[.1699,.3086],[.5176,.6445],[.4863,.3027],[.877,.6602],[.5977,.8887],[.5488,.0098],[.5156,.5332],[.6973,.1094],[.4707,.2051],[.498,.7559],[.0312,.7363],[.2051,.4629],[.541,.8379],[.8398,.8965],[.1426,.1855],[.3711,.1172],[.1328,.9082],[.75,.9629],[.2812,.0449],[.6367,.4277],[.2051,.9824],[.7012,.9766],[.0059,.9102],[.7168,.3379],[.1602,.584],[.8594,.1973],[.3516,.7227],[.0918,.9727],[.416,.3359],[.6465,.9355],[.3418,.627],[.7578,.332],[.0293,.6973],[.9004,.957],[.7012,.7617],[.1855,.8652],[.6914,.8184],[.5684,.543],[.6523,.8672],[.5742,.7441],[.2949,.4121],[.2363,.6387],[.25,.1953],[.0352,.5918],[.248,.293],[.0762,.4863],[.9785,.4922],[.9004,.7305],[.9277,.5527],[.9395,.125],[.3691,.8789],[.4805,.0469],[.5703,.4551],[.4199,.2246],[.0371,.625],[.3281,.4941],[.1152,.6094],[.2793,.834],[.5039,.166],[.4609,.5312],[.0645,.7715],[.6035,.7227],[.4746,.6348],[.6777,.5684],[.2773,.4512],[.8008,.1191],[.3945,.9297],[.2109,.6855],[.5977,.1875],[.5195,.0742],[.1309,.4609],[.9531,.4277],[.4785,.9648],[.543,.3262],[.9121,.041],[.5059,.7188],[.0098,.2969],[.8438,.3789],[.1504,.2637],[.7969,.873],[.8613,.9863],[.834,.7461],[.377,.6211],[.791,.7227],[.6758,.8457],[.7832,.8066],[.834,.5293],[.1973,.6562],[.8281,.9609],[.5332,.7773],[.9062,.8008],[.3262,.0234],[.8984,.7676]],Sh={IVY:0,BLADE:1,DAISY:2,WEED:3},IM=2;function qM(){let t={pos:[],nrm:[],uv:[],info:[],idx:[]},e={pos:[],nrm:[],uv:[],info:[],idx:[]},o=t,n=Vs(2718),r=W=>{let st=Math.hypot(W[0],W[1],W[2])||1;return[W[0]/st,W[1]/st,W[2]/st]},a=(W,st)=>[W[1]*st[2]-W[2]*st[1],W[2]*st[0]-W[0]*st[2],W[0]*st[1]-W[1]*st[0]],s=(W,st)=>W[0]*st[0]+W[1]*st[1]+W[2]*st[2],i=(W,st,wt)=>[W[0]+st[0]*wt,W[1]+st[1]*wt,W[2]+st[2]*wt],c=W=>W[Math.floor(n()*W.length)],h=W=>(W[2]-W[0])*IM/(W[3]-W[1]),l=(W,st,wt,$t,Ut,be)=>(o.pos.push(W[0]+Ae[0],W[1]+Ae[1],W[2]+Ae[2]),o.nrm.push(st[0],st[1],st[2]),o.uv.push(wt[0],wt[1]),o.info.push($t,Ut,be),o.pos.length/3-1),d=(W,st,wt,$t,Ut,be,De,He,Ot)=>{let ie=Ot?2:1,Oe=o.pos.length/3;for(let Ue=0;Ue<=ie;Ue++){let Ge=Ue/ie,ve=Ot?i(i(W,wt,Ge),He,Ot*Ge*Ge):i(W,wt,Ge),ye=$t[3]+($t[1]-$t[3])*Ge;l(i(ve,st,-1),De,[$t[0],ye],Ut,be,Ge),l(i(ve,st,1),De,[$t[2],ye],Ut,be,Ge)}for(let Ue=0;Ue<ie;Ue++){let Ge=Oe+Ue*2;o.idx.push(Ge,Ge+1,Ge+3,Ge,Ge+3,Ge+2)}},u=[...lc.ivy,...lc.ivy,...lc.weed.slice(0,7)],p=[0,1,0],f=(W,st,wt,$t,Ut)=>{let be=c(u),De=a(wt,st),He=r(i(i(st,wt,n()*.9-.25),De,(n()-.5)*.8)),Ot=r(i(wt,He,-s(wt,He))),ie=(n()-.5)*2,Oe=Math.cos(ie),Ue=Math.sin(ie);Ot=r(i(i([0,0,0],Ot,Oe),a(He,Ot),Ue));let Ge=a(Ot,He),ve=$t*h(be);d(i(W,Ot,-$t*.18),i([0,0,0],Ge,ve/2),i([0,0,0],Ot,$t),be,Ut,Sh.IVY,He)},v=(W,st,wt,$t,Ut,be,De,He,Ot)=>{let ie=Math.max(3,Math.round(Ut*3.4*De)),Oe=[];for(let Ge=0;Ge<ie;Ge++){let ve=$t+(n()-.5)*Ut,ye=Math.min(1,Math.abs(ve-$t)/(Ut/2+.001)),mt=be*(.6+.4*n())*(1-.5*ye*ye);Oe.push([ve,He||n()*.15,(n()-.5)*.5,mt,0])}let Ue=0;for(;Oe.length&&Ue++<4e3;){let[Ge,ve,ye,mt,ue]=Oe.pop(),Be=ve;for(let Le=0;Le<260&&(ye+=(n()-.5)*.45,ye=Math.max(-1,Math.min(1,ye)),Ge+=Math.sin(ye)*.09,ve+=(He?-1:1)*Math.cos(ye)*.09,!(He?Be-ve>mt||ve<(Ot?Ot(Ge):.05):ve-Be>mt));Le++){let So=He?(Be-ve)/mt:(ve-Be)/mt,E=n()<.9*De?n()<.5?2:1:0;for(let ho=0;ho<E;ho++){let io=.015+n()*.11,dt=i(i(i(W,st,Ge+(n()-.5)*.2),p,ve+(n()-.5)*.12),wt,io),Ct=(.12+.09*n())*(He?1.05-.3*So:1.2-.4*So);f(dt,wt,p,Ct,.45+.55*(io/.125)*(.6+.4*n()))}ue<2&&n()<.035&&Oe.push([Ge,ve,ye+(n()<.5?-.7:.7),mt*(.35+.4*n())*(1-So*.5),ue+1])}}},m={o:[0,0,0],u:[1,0,0],n:[0,0,1]},g={o:[0,0,Ne],u:[1,0,0],n:[0,0,-1]},x={o:[Dt,0,0],u:[0,0,1],n:[-1,0,0]},y=(W,...st)=>v(W.o,W.u,W.n,...st);y(m,4.25,2.6,6.6,1.25),y(m,11.9,3,5.2,1),y(m,1,1.8,3.2,.9),y(m,15,1.8,3.8,.9);{let W=To.face-.26,st={o:[0,0,Ne-W+.03],u:[1,0,0],n:[0,0,1]},wt=5.35+1.02;v(st.o,st.u,st.n,Dt-To.x1+1,1.9,2.2,1.2,wt,()=>3.2),v(st.o,st.u,st.n,Dt-To.x0-.5,.8,1,.8,wt,()=>4.6);for(let $t=0;$t<70;$t++){let Ut=To.x0+.2+Math.pow(n(),1.6)*2.4,be=(To.x1-To.x0)/2+.2,De=wt+.62*(1-Math.abs(Ut-To.cx)/be)+.02;f([Dt-Ut,De+n()*.05,.1+n()*(Ne-W-.15)],r([0,1,.3]),[0,0,1],.08+n()*.05,.7+.3*n())}}y(g,5.4,2.8,5.6,1.1),y(g,11,3.2,6.4,1.1),y(g,1.2,2,3,.8),y(g,14.9,2,4.4,.9),v(g.o,g.u,g.n,Dt/2+.3,3.6,1.6,1.1,5.2,W=>Math.abs(W-Dt/2)<1.25?4.15:2.6),y(x,2.6,3.6,6.6,1.1),y(x,9.2,4,4.6,.9),y(x,15.6,4.6,7,1.2),y(x,20.9,1.6,3,.9);for(let[W,st]of Ws.filter(wt=>wt[0]==="wall"))v([0,0,0],[0,0,1],[1,0,0],st,1.2,1.1,.8);o=e;let w=(W,st,wt,$t,Ut,be,De)=>{let He=c(lc.blade),Ot=[Math.cos(be),0,Math.sin(be)],ie=Math.max($t*.16,.012);d([W,st,wt],[-Ot[2]*ie/2,0,Ot[0]*ie/2],[Ot[0]*Ut*$t*.4,$t,Ot[2]*Ut*$t*.4],He,De,Sh.BLADE,r([Ot[0]*.5,1,Ot[2]*.5]),Ot,$t>.12?$t*Ut*.6:0)},M=(W,st,wt,$t,Ut)=>{for(let be=0;be<Ut;be++){let De=n()*2*vo,He=n()*.035;w(W+Math.cos(De)*He,st,wt+Math.sin(De)*He,$t*(.45+.55*n()),.25+.75*n(),De+(n()-.5),.6+.4*n())}},_=(W,st,wt,$t)=>{let Ut=4+Math.floor(n()*3),be=n()*2*vo;for(let De=0;De<Ut;De++){let He=c(lc.weed),Ot=be+De*2*vo/Ut+(n()-.5)*.4,ie=[Math.cos(Ot),0,Math.sin(Ot)],Oe=.35+n()*.45,Ue=$t*(.7+.5*n()),Ge=[ie[0]*Math.cos(Oe)*Ue,Math.sin(Oe)*Ue,ie[2]*Math.cos(Oe)*Ue],ve=Ue*h(He);d([W,st+.004,wt],[-ie[2]*ve/2,0,ie[0]*ve/2],Ge,He,.7+.3*n(),Sh.WEED,r([-ie[0]*Math.sin(Oe),Math.cos(Oe),-ie[2]*Math.sin(Oe)]),[0,-1,0],Ue*.15)}},k=(W,st,wt)=>{let $t=.05+n()*.12;w(W,st,wt,$t+.02,.15,n()*2*vo,.8);let Ut=c(lc.daisy),be=.03+n()*.025,De=(n()-.5)*.6,He=n()*2*vo,Ot=[Math.cos(He)*be*2,Math.sin(De)*be,Math.sin(He)*be*2],ie=[-Math.sin(He)*be,0,Math.cos(He)*be];d([W-Math.cos(He)*be,st+$t,wt-Math.sin(He)*be],ie,Ot,Ut,1,Sh.DAISY,[0,1,0]),_(W,st,wt,.04)},O=(W,st,wt,$t)=>{let Ut=n();Ut<.8?M(W,st,wt,$t?.2+.3*n():.08+.1*n(),$t?5+Math.floor(n()*6):3+Math.floor(n()*3)):Ut<.93?_(W,st,wt,$t?.09+.06*n():.06+.03*n()):k(W,st,wt)},N=lt.x0-lt.curb-.08,G=lt.x1+lt.curb+.08,$=lt.z0-lt.curb-.08,V=lt.z1+lt.curb+.08,D=Dt-To.x1-.16,U=Dt-To.x0+.16,ht=Ne-To.face+.36,jt=(W,st)=>W>N&&W<G&&st>$&&st<V||W>D&&W<U&&st<ht||Math.abs(W-Dt/2)<1.15&&st>Ne-.5||W<.06||W>Dt-.06||st<.06||st>Ne-.06,Lt=(W,st)=>{let wt=Math.min(W,Dt-W,st,Ne-st),$t=Math.max(N-W,W-G,$-st,st-V),Ut=Math.max(D-W,W-U,st-ht);return Math.min(wt,Math.max($t,0)+($t<0?9:0),Math.max(Ut,0)+(Ut<0?9:0))},gt=(W,st)=>.5+.5*Math.sin(W*.9+1.3)*Math.sin(st*.7-.4)+.25*Math.sin(W*2.3+st*1.7);for(let W=0;W*2<Dt;W++)for(let st=0;st*2<Ne;st++)for(let[wt,$t]of $M){let Ut=(W+wt)*2,be=(st+$t)*2;if(jt(Ut,be))continue;let De=Lt(Ut,be),He=(De<1.2?.75-.4*De:.2)*Math.max(.2,gt(Ut,be));n()<He&&O(Ut,.002,be,De<.8&&n()<.85)}let tt=(W,st,wt)=>{let $t=Math.hypot(st[0]-W[0],st[1]-W[1]);for(let Ut=0;Ut<$t;Ut+=.08){if(n()>.8)continue;let be=Ut/$t,De=.04+Math.pow(n(),2)*.3,He=W[0]+(st[0]-W[0])*be+wt[0]*De,Ot=W[1]+(st[1]-W[1])*be+wt[1]*De;jt(He,Ot)||O(He,.002,Ot,!0)}};tt([0,0],[0,Ne],[1,0]),tt([Dt,0],[Dt,Ne],[-1,0]),tt([0,0],[Dt,0],[0,1]),tt([0,Ne],[Dt,Ne],[0,-1]),tt([N,$],[G,$],[0,-1]),tt([N,$],[N,V],[-1,0]),tt([G,$],[G,V],[1,0]),tt([D,ht],[U,ht],[0,1]),tt([D,0],[D,ht],[-1,0]),tt([U,0],[U,ht],[1,0]);for(let W=0;W<60;W++){let st=Math.floor(n()*3),wt,$t;st<2?(wt=st?lt.x1+.08+n()*.38:lt.x0-.08-n()*.38,$t=lt.z0+n()*(lt.z1-lt.z0)):($t=lt.z1+.08+n()*.38,wt=lt.x0+n()*(lt.x1-lt.x0)),M(wt,lt.top,$t,.04+.06*n(),2+Math.floor(n()*3))}return{walls:t,ground:e}}var DM=`
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
`,FM=e3.map(t=>id([t[0],t[1]-.22,t[2]])),La=`
	${DM}
	${t3()}

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
		vec3 p = pw - vec3(${at(Ae[0])}, ${at(Ae[1])}, ${at(Ae[2])});
		float vis = studioSun(pw + N * 0.03);
		sunVis = vis;
		vec3 sunC = mix(vec3(1.0, 0.88, 0.70) * 3.9, vec3(0.50, 0.64, 1.0) * 1.35, night);
		float lam = max(dot(N, STUDIO_SUN), 0.0);
		vec3 col = sunC * vis * lam;
		vec3 Hh = normalize(STUDIO_SUN + V);
		spec = sunC * vis * pow(max(dot(N, Hh), 0.0), mix(16.0, 400.0, gloss)) * mix(0.04, 1.0, gloss) * (lam > 0.0 ? 1.0 : 0.0);

		// skylight: the roof is glass, the walls are full of windows
		float upF = 0.5 + 0.5 * N.y;
		float hgt = clamp(p.y / ${at(wo)}, 0.0, 1.0);
		// corners and the foot of the walls get less of the sky
		float dw = min(min(p.x, ${at(Dt)} - p.x), min(p.z, ${at(Ne)} - p.z));
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
			${FM.map(t=>`
			{
				vec3 d = vec3(${at(t[0])}, ${at(t[1])}, ${at(t[2])}) - pw;
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
`;function GM(t){let e=new DataView(t),o=e.getUint32(4,!0),n=e.getUint32(8,!0),r=[],a=[];for(let l=0;l<3;l++)r.push(e.getFloat32(12+l*4,!0)),a.push(e.getFloat32(24+l*4,!0));let s=36,i=new Uint16Array(t,s,o*3);s+=o*6;let c=new Uint16Array(t,s,n);s+=n*2;let h=new Int8Array(t,s,o*3);return{nV:o,nI:n,mn:r,sz:a,pos:i,idx:c,nrm:h}}function Lr(t,e,o){let n=o&&o.wrap||"clamp",r=t.texture({data:[[[0,0,0,0]]],min:"linear",mag:"linear"}),a={tex:r,ready:!1};return fetch(e).then(s=>{if(!s.ok)throw new Error("Could not load "+e);return s.blob()}).then(s=>createImageBitmap(s,{premultiplyAlpha:"none"}).catch(()=>new Promise((i,c)=>{let h=new Image;h.onload=()=>i(h),h.onerror=c,h.src=URL.createObjectURL(s)}))).then(s=>{r({data:s,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrap:n}),a.ready=!0}).catch(s=>console.error(s)),a}var Eh=128,zh=Math.round((lt.z1-lt.z0)/(11/372)),Rl=(lt.x1-lt.x0)/Eh,o3=(lt.z1-lt.z0)/zh,HM=.02,n3=`
	float simDec(vec2 c) { return (floor(c.x * 255.0 + 0.5) * 256.0 + floor(c.y * 255.0 + 0.5)) / 65535.0 * 2.0 - 1.0; }
	vec2 simEnc(float h) {
		float v = floor(clamp(h * 0.5 + 0.5, 0.0, 1.0) * 65535.0 + 0.5);
		float hi = floor(v / 256.0);
		return vec2(hi, v - hi * 256.0) / 255.0;
	}
`,ts=`
	uniform float stime;
	uniform highp sampler2D simTex;
	${n3}
	float simAt(vec2 i) {
		i = clamp(i, vec2(0.0), vec2(${Eh-1}.0, ${zh-1}.0));
		return simDec(texture2D(simTex, (i + 0.5) / vec2(${Eh}.0, ${zh}.0)).rg);
	}
	// the height of the water at world xz (metres, tiny)
	float poolHeight(vec2 xz) {
		float h = 0.0018 * sin(xz.x * 2.1 + stime * 0.55) * sin(xz.y * 1.7 - stime * 0.43)
		        + 0.0010 * sin(xz.x * 3.7 - xz.y * 2.9 + stime * 0.8);
#ifndef NO_SIM
		vec2 g = (xz - vec2(${at(lt.x0+Ae[0])}, ${at(lt.z0+Ae[2])})) / vec2(${at(Rl)}, ${at(o3)}) - 0.5;
		vec2 i = floor(g), fr = g - i;
		float sh = mix(mix(simAt(i), simAt(i + vec2(1.0, 0.0)), fr.x), mix(simAt(i + vec2(0.0, 1.0)), simAt(i + vec2(1.0, 1.0)), fr.x), fr.y);
		h += sh * ${at(HM)};
#endif
		return h;
	}
`,Zg=`
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
	${ts}
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
	}`,UM=`
	precision highp float;
	uniform float night, time, yScale, mirrorOn;
	uniform sampler2D padTex, petalTex, reflTex;
	uniform sampler2D rockCol, rockNrm, oldCol, oldNrm, floorCol, floorNrm;
	uniform vec2 reflSize;
	uniform float reflOn;
	uniform mat4 view;
	${ts}
	varying vec3 v_pos, v_nrm, v_eye;
	varying float v_kind;
	varying vec2 v_uv;
	${La}

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
		vec3 p = pw - vec3(${at(Ae[0])}, ${at(Ae[1])}, ${at(Ae[2])});
		vec3 V = normalize(v_eye - pw);
		vec3 N = normalize(v_nrm);
		if (dot(N, V) < 0.0 && !is(${Mt.PETAL}.0)) N = -N;
		if (is(${Mt.PETAL}.0) && dot(N, V) < 0.0) N = -N;

		// in the reflection under the floor, the floor and the water are not drawn
		bool floorish = is(${Mt.FLOOR}.0) || is(${Mt.WATER}.0);
		if (yScale < 0.0 && floorish) discard;

		// fallen bracts: little papery hearts, pink or white
		if (is(${Mt.BRACT}.0)) {
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

		if (is(${Mt.ROCK}.0)) {
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
			base *= mix(1.0, 0.84, smoothstep(${at(wo-2.2)}, ${at(wo)}, p.y));
			N = bumped(N, T, B, tn, 1.4);
			aoK = mix(0.42, 1.0, tn.b);
			gloss = 0.05;
		} else if (is(${Mt.OLDSTONE}.0) || is(${Mt.HOLLOW}.0)) {
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
			float low = 1.0 - smoothstep(0.0, ${at(lt.top+.35)}, p.y);
			float moss = low * smoothstep(0.35, 0.65, fbm3(p * 4.0 + 2.0));
			base = mix(base, vec3(0.10, 0.12, 0.065), moss * 0.6);
			base *= mix(0.72, 1.0, smoothstep(0.0, 0.22, p.y));
			if (is(${Mt.HOLLOW}.0)) {
				// the hollow: older, damper, never washed by the sun
				base *= vec3(0.70, 0.73, 0.68) * (0.85 + 0.15 * smoothstep(${at(To.floor)}, ${at(To.spring)}, p.y));
			}
			N = bumped(N, T, B, tn, 1.1);
			aoK = mix(0.5, 1.0, tn.b);
			gloss = 0.08;
		} else if (is(${Mt.PLASTER}.0) || is(${Mt.NICHE}.0)) {
			// old lime plaster: warm, patchy, with a soft trowelled bloom
			float big = fbm3(p * vec3(0.35, 0.45, 0.35));
			float mid = fbm3(p * 1.6 + 3.0);
			float fine = vnoise3(p * 14.0);
			vec3 a = vec3(0.70, 0.60, 0.47), b = vec3(0.84, 0.76, 0.63);
			base = mix(a, b, smoothstep(0.3, 0.7, big));
			base *= 0.86 + 0.22 * mid + 0.05 * fine;
			// damp stains low down, soot high up
			base *= mix(0.86, 1.0, smoothstep(0.0, 1.4, p.y + 0.6 * mid));
			base *= mix(1.0, 0.9, smoothstep(${at(wo-2)}, ${at(wo)}, p.y));
			// where the plaster has come away, old brick shows through
			float bare = smoothstep(0.70, 0.74, fbm3(p * vec3(0.5, 0.8, 0.5) + 11.0)) * smoothstep(0.4, 1.6, p.y) * 0.85;
			vec2 bk = (abs(N.x) > 0.5 ? p.zy : p.xy) * vec2(1.0 / 0.23, 1.0 / 0.075);
			bk.x += floor(bk.y) * 0.5;
			float mortar = max(smoothstep(0.9, 0.97, fract(bk.x)), smoothstep(0.82, 0.92, fract(bk.y)));
			vec3 brick = mix(vec3(0.55, 0.30, 0.20), vec3(0.42, 0.25, 0.18), vnoise3(vec3(floor(bk), 0.0) * 0.7)) * (0.85 + 0.3 * hash13(vec3(floor(bk), 1.0)));
			brick = mix(brick, vec3(0.62, 0.58, 0.52), mortar);
			base = mix(base, brick, bare);
			if (is(${Mt.NICHE}.0)) base *= 0.55;
			gloss = 0.04;
		} else if (is(${Mt.STONE}.0)) {
			float n = fbm3(p * vec3(1.2, 2.5, 1.2));
			base = mix(vec3(0.72, 0.66, 0.56), vec3(0.84, 0.79, 0.70), n) * (0.92 + 0.12 * vnoise3(p * 20.0));
			gloss = 0.12;
		} else if (is(${Mt.TRAVERTINE}.0)) {
			// travertine: bands, little holes, a warm cream
			float band = fbm3(vec3(p.x * 0.4, p.y * 9.0 + fbm3(p * 1.5) * 2.0, p.z * 0.4));
			base = mix(vec3(0.73, 0.65, 0.53), vec3(0.88, 0.82, 0.72), band);
			float pit = smoothstep(0.84, 0.9, vnoise3(p * 55.0));
			base *= 1.0 - pit * 0.18;
			// wet and darker just above the water
			base *= mix(0.78, 1.0, smoothstep(0.0, 0.12, p.y));
			gloss = 0.18;
		} else if (is(${Mt.STEEL}.0)) {
			base = vec3(0.035, 0.036, 0.038) * (0.8 + 0.4 * vnoise3(p * 3.0));
			gloss = 0.45;
		} else if (is(${Mt.FLOOR}.0)) {
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
			float wallD = min(min(p.x, ${at(Dt)} - p.x), min(p.z, ${at(Ne)} - p.z));
			base *= mix(0.72, 1.0, smoothstep(0.0, 1.2, wallD));
			N = normalize(N + (vec3(1.0, 0.0, 0.0) * (tn.r * 2.0 - 1.0) + vec3(0.0, 0.0, -1.0) * (tn.g * 2.0 - 1.0)) * 1.2);
			gloss = 0.12;
			aoK = mix(0.5, 1.0, tn.b) * mix(0.62, 1.0, smoothstep(0.0, 0.9, wallD));
			// the curb throws a soft shadow round the pool
			vec2 dq = max(vec2(${at(lt.x0-lt.curb)} - p.x, p.x - ${at(lt.x1+lt.curb)}), vec2(${at(lt.z0-lt.curb)} - p.z, p.z - ${at(lt.z1+lt.curb)}));
			float dpool = max(max(dq.x, dq.y), 0.0);
			aoK *= mix(0.7, 1.0, smoothstep(0.0, 0.4, dpool));
		} else if (is(${Mt.WMARBLE}.0)) {
			// white statuary marble, polished: a soft grey cloud and fine veins
			float cl = fbm3(p * 1.4 + 2.0);
			float v1 = abs(sin(p.x * 3.1 + p.z * 1.7 + p.y * 5.0 + cl * 7.0));
			float vein = (1.0 - smoothstep(0.0, 0.05, v1)) * 0.7 + (1.0 - smoothstep(0.0, 0.02, abs(sin(p.z * 6.3 - p.x * 2.2 + cl * 11.0)))) * 0.3;
			base = mix(vec3(0.68, 0.68, 0.66), vec3(0.76, 0.76, 0.74), cl);
			base = mix(base, vec3(0.50, 0.51, 0.52), vein * 0.45);
			base *= mix(0.8, 1.0, smoothstep(0.0, 0.1, p.y));
			gloss = 0.88;
		} else if (is(${Mt.REDDOOR}.0) || is(${Mt.REDPANEL}.0)) {
			// deep crimson paint over wood: a soft sheen, the grain just showing
			float grain = vnoise3(vec3(p.x * 40.0, p.y * 2.0, p.z * 40.0));
			base = vec3(0.30, 0.022, 0.026) * (0.88 + 0.2 * grain);
			if (is(${Mt.REDPANEL}.0)) base *= 0.55;
			gloss = 0.62;
		} else if (is(${Mt.DARKWOOD}.0)) {
			float grain = vnoise3(vec3(p.x * 3.0, p.y * 45.0, p.z * 3.0));
			base = mix(vec3(0.030, 0.019, 0.014), vec3(0.062, 0.040, 0.028), grain);
			gloss = 0.35;
		} else if (is(${Mt.BRASS}.0)) {
			base = vec3(0.60, 0.44, 0.17) * (0.85 + 0.25 * vnoise3(p * 90.0));
			gloss = 0.78;
		} else if (is(${Mt.KEYHOLE}.0)) {
			base = vec3(0.004);
		} else if (is(${Mt.BRACT}.0)) {
			float white = step(1.5, v_uv.x);
			base = mix(vec3(0.62, 0.03, 0.22), vec3(0.86, 0.80, 0.80), white) * (0.8 + 0.3 * hash13(floor(p * 30.0)));
			sss = 0.5;
		} else if (is(${Mt.WATER}.0)) {
			base = vec3(0.012, 0.018, 0.014);
			gloss = 1.0;
		} else if (is(${Mt.PAD}.0)) {
			vec4 tx = texture2D(padTex, v_uv);
			if (tx.a < 0.5) discard;
			base = tx.rgb * tx.rgb * (0.8 + 0.35 * vnoise3(vec3(p.xz * 1.3, 2.0)));
			gloss = 0.55;
		} else if (is(${Mt.PETAL}.0)) {
			vec4 tx = texture2D(petalTex, v_uv);
			if (tx.a < 0.45) discard;
			base = tx.rgb * tx.rgb;
			sss = 0.6;
			gloss = 0.25;
		} else if (is(${Mt.STAMEN}.0)) {
			base = vec3(0.95, 0.66, 0.12);
			gloss = 0.2;
		} else if (is(${Mt.MARBLE}.0)) {
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
			float foot = 1.0 - smoothstep(${at(xn.plinth)}, ${at(xn.plinth+.7)}, p.y);
			base = mix(base, base * vec3(0.55, 0.62, 0.48), foot * smoothstep(0.4, 0.7, fbm3(p * 6.0)));
			sss = 0.06;
			gloss = 0.14;
		} else if (is(${Mt.WOOD}.0)) {
			float g = vnoise3(vec3(p.x * 2.0, p.y * 30.0, p.z * 2.0));
			base = mix(vec3(0.26, 0.15, 0.08), vec3(0.42, 0.27, 0.15), g) * (0.85 + 0.2 * vnoise3(p * 5.0));
			gloss = 0.2;
		} else if (is(${Mt.GESSO}.0)) {
			base = vec3(0.86, 0.83, 0.76) * (0.95 + 0.08 * vnoise3(p * 30.0));
		} else if (is(${Mt.PAINT}.0)) {
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
		} else if (is(${Mt.POT}.0)) {
			base = vec3(0.025, 0.025, 0.028);
			gloss = 0.85;
		} else if (is(${Mt.SOIL}.0)) {
			base = vec3(0.10, 0.07, 0.05) * (0.7 + 0.5 * vnoise3(p * 40.0));
		} else if (is(${Mt.SHADE}.0)) {
			base = vec3(0.03);
			gloss = 0.6;
		} else if (is(${Mt.BULB}.0)) {
			vec3 glow = mix(vec3(0.75, 0.70, 0.62) * 0.35, vec3(1.0, 0.75, 0.45) * 3.5, night);
			gl_FragColor = vec4(sqrt(glow), 1.0);
			return;
		} else if (is(${Mt.JAR}.0)) {
			base = mix(vec3(0.55, 0.42, 0.25), vec3(0.75, 0.70, 0.62), hash13(floor(p * 3.0)));
			gloss = 0.7;
		} else if (is(${Mt.BRUSH}.0)) {
			base = mix(vec3(0.42, 0.10, 0.06), vec3(0.75, 0.62, 0.38), step(${at(.86+.24)}, p.y));
			gloss = 0.5;
		} else if (is(${Mt.CLOTH}.0)) {
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
		if (is(${Mt.POT}.0) || is(${Mt.STEEL}.0) || is(${Mt.SHADE}.0) || is(${Mt.JAR}.0)) {
			col += env * (0.04 + 0.6 * fres) * gloss * 1.2;
		}
		if (is(${Mt.BRASS}.0)) {
			col = base * light * 0.35 + spec * base * 2.5 + env * base * 1.6;
		}
		if (is(${Mt.REDDOOR}.0) || is(${Mt.REDPANEL}.0) || is(${Mt.WMARBLE}.0)) {
			col += env * (0.03 + 0.5 * fres) * gloss;
		}

		col = studioAir(col, pw, v_eye);

		float alpha = 1.0;
		if (is(${Mt.FLOOR}.0)) {
			// worn stone: no mirror, just a faint sheen of the room at grazing angles
			float cosV = clamp(V.y, 0.0, 1.0);
			alpha = 1.0 - 0.1 * pow(1.0 - cosV, 4.0) * mirrorOn;
		}
		if (is(${Mt.WATER}.0)) {
			// still, dark water: almost a mirror, the sky's light on it, a
			// very slow breath of ripples
			// the moving surface: its slope from the swell and the rings
			float e = ${at(Rl)};
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
	}`;Xr.exports=function(t){let e=LM();NM(e),RM(e),OM(e),SM(e),EM(e);let o={enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},n=performance.now(),r={t:0},a=0,s=t._gl,i=!!(s&&s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS)>0),c=dt=>i?dt:`#define NO_SIM
`+dt,h=(()=>{let dt=Eh,Ct=zh,Tt=new Uint8Array(dt*Ct*4);for(let he=0;he<dt*Ct;he++)Tt[he*4]=128,Tt[he*4+2]=128;let eo=()=>t.framebuffer({color:t.texture({width:dt,height:Ct,data:Tt,min:"nearest",mag:"nearest",wrap:"clamp"}),depth:!1,stencil:!1}),Ke=[eo(),eo()],Ye=0,je=new Uint8Array(dt*Ct*4);for(let he=0;he<Ct;he++)for(let de=0;de<dt;de++){let We=lt.x0+(de+.5)*Rl,ge=lt.z0+(he+.5)*o3,se=Math.abs(We-xn.x)<.43&&Math.abs(ge-xn.z)<.43,Ee=0;for(let Ie of ld)Ee=Math.max(Ee,1-Math.min(1,Math.max(0,(Math.hypot(We-Ie[0],ge-Ie[1])-Ie[2]*.7)/(Ie[2]*.3))));let Qt=(he*dt+de)*4;je[Qt]=se?0:255,je[Qt+1]=Math.round(Ee*255),je[Qt+3]=255}let Oo=t.texture({width:dt,height:Ct,data:je,min:"nearest",mag:"nearest",wrap:"clamp"}),B=16,yt=[];for(let he=0;he<B;he++)yt.push([0,0,0,.04]);let At={prev:t.prop("prev"),mask:Oo};for(let he=0;he<B;he++)At["src["+he+"]"]=(de=>()=>yt[de])(he);let Et=Math.pow(.36*(1/60)/Rl,2),ne=t({vert:"precision highp float; attribute vec2 position; varying vec2 uv; void main() { uv = position * 0.5 + 0.5; gl_Position = vec4(position, 0.0, 1.0); }",frag:`
			precision highp float;
			uniform highp sampler2D prev, mask;
			uniform vec4 src[${B}];
			varying vec2 uv;
			${n3}
			void main() {
				vec2 px = 1.0 / vec2(${dt}.0, ${Ct}.0);
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
				float hn = h + (h - hp) * damp + ${at(Et)} * lap;
				hn *= 0.9993;
				// whatever touched the water this moment
				vec2 p = vec2(${at(lt.x0+Ae[0])}, ${at(lt.z0+Ae[2])}) + uv * vec2(${at(lt.x1-lt.x0)}, ${at(lt.z1-lt.z0)});
				for (int i = 0; i < ${B}; i++) {
					vec4 s = src[i];
					if (s.z == 0.0) continue;
					vec2 dd = p - s.xy;
					hn += s.z * exp(-dot(dd, dd) / (s.w * s.w));
				}
				gl_FragColor = vec4(simEnc(clamp(hn, -1.0, 1.0)), simEnc(h));
			}`,attributes:{position:[-1,-1,1,-1,-1,1,1,1]},primitive:"triangle strip",count:4,framebuffer:t.prop("out"),uniforms:At,depth:{enable:!1,mask:!1},blend:{enable:!1},cull:{enable:!1},viewport:{x:0,y:0,width:dt,height:Ct}}),Te=[],me=0,re=0;return{tex:()=>Ke[Ye].color[0],drop(he,de,We,ge){Te.push([he,de,me,We,0,ge||.035]),typeof window!="undefined"&&window.__dropLog&&window.__dropLog.push([he,de,me,We])},advance(he,de){let We=he-me-re;if(We<0||We>2){me=he,re=0;return}re+=We;let ge=0;for(;re>=1/60&&ge<8;){re-=1/60,me+=1/60,ge++;let se=0;for(let Ee=Te.length-1;Ee>=0;Ee--){let Qt=Te[Ee],Ie=me-Qt[2];if(Ie>1.4){Te.splice(Ee,1);continue}if(se>=B)continue;let zo=Qt[3]*.05*Math.sin(Ie*2*Math.PI*2.4)*Math.exp(-Ie*3.2),qe=yt[se++];qe[0]=Qt[0],qe[1]=Qt[1],qe[2]=zo,qe[3]=Qt[5]}for(let Ee of de){if(se>=B)break;let Qt=yt[se++];Qt[0]=Ee[0],Qt[1]=Ee[1],Qt[2]=Ee[2],Qt[3]=Ee[3]}for(;se<B;se++)yt[se][2]=0;ne({prev:Ke[Ye].color[0],out:Ke[1-Ye]}),Ye=1-Ye}ge===8&&(re=0,me=he)},read(){return t.read({framebuffer:Ke[Ye]})}}})(),l=()=>{r.t=(performance.now()-n)/1e3,typeof window!="undefined"&&window.__studioFreeze!=null&&(r.t=window.__studioFreeze);for(let Tt of Kg){let eo=AM(Tt,r.t),Ke=eo.ph-eo.Tf;eo.inPool&&Ke>=0&&Ke<.5&&!(Tt.heard>r.t-1)&&(Tt.heard=r.t,h.drop(eo.lx+Ae[0],eo.lz+Ae[2],1.1,.04))}let dt=r.t-$t.sim.t;for((dt<0||dt>120)&&(dt=Math.min(Math.max(dt,0),120));dt>1e-6;){let Tt=Math.min(dt,.05);$t.sim.step(Tt),dt-=Tt}for(let Tt of $t.sim.events)Tt[2]>a&&(a=Tt[2],h.drop(Tt[0]+Ae[0],Tt[1]+Ae[2],Tt[3]*1.3,Tt[3]>=1?.07:.04));let Ct=[];for(let Tt of $t.sim.fish){let eo=Math.min(1,Math.max(0,(Tt.y+.15)/.09));if(eo<=0)continue;let Ke=.008*eo*Math.min(1.5,Tt.v/.15);Ct.push([Tt.x+Ae[0]+Math.cos(Tt.th)*.02,Tt.z+Ae[2]+Math.sin(Tt.th)*.02,Ke,.045]),Ct.push([Tt.x+Ae[0]-Math.cos(Tt.th)*.14,Tt.z+Ae[2]-Math.sin(Tt.th)*.14,-Ke,.055])}h.advance(r.t,Ct)},d={stime:()=>r.t,simTex:()=>h.tex()};typeof location!="undefined"&&/tourdebug/.test(location.search)&&(window.__studioClock=r,window.__pondSim=h);let u=t.texture({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"}),p=[4,4],f=0,v=t({}),m=()=>v(dt=>{let Ct=dt.viewportWidth,Tt=dt.viewportHeight;u.width!==Ct||u.height!==Tt?u({copy:!0,width:Ct,height:Tt,min:"linear",mag:"linear",wrap:"clamp"}):u.subimage({copy:!0,width:Ct,height:Tt}),p[0]=Ct,p[1]=Tt,f=1}),g=Lr(t,"res/pond/lilypad.webp"),x=Lr(t,"res/pond/petals.webp"),y=Lr(t,"res/studio/rock_col.webp",{wrap:"repeat"}),w=Lr(t,"res/studio/rock_nrm.webp",{wrap:"repeat"}),M=Lr(t,"res/studio/oldstone_col.webp",{wrap:"repeat"}),_=Lr(t,"res/studio/oldstone_nrm.webp",{wrap:"repeat"}),k=Lr(t,"res/studio/floor_col.webp",{wrap:"repeat"}),O=Lr(t,"res/studio/floor_nrm.webp",{wrap:"repeat"}),N=Object.assign({padTex:()=>g.tex,petalTex:()=>x.tex,reflTex:()=>u,reflSize:()=>p,reflOn:()=>f,rockCol:()=>y.tex,rockNrm:()=>w.tex,oldCol:()=>M.tex,oldNrm:()=>_.tex,floorCol:()=>k.tex,floorNrm:()=>O.tex},d),G=(dt,Ct)=>t({vert:c(Zg),frag:UM,attributes:{position:dt.pos,normal:dt.nrm,kind:dt.kind,uv:dt.uv,anchor:dt.anchor&&dt.anchor.length?dt.anchor:new Float32Array(dt.pos.length/3*4)},elements:new Uint32Array(dt.idx),count:Ct||dt.idx.length,uniforms:N,cull:{enable:!1},blend:o}),$=G(e),V=null;fetch(xn.file).then(dt=>{if(!dt.ok)throw new Error("Could not load "+xn.file);return dt.arrayBuffer()}).then(dt=>{let Ct=GM(dt),Tt={pos:[],nrm:[],kind:[],uv:[],anchor:null,idx:[]},eo=xn.height,Ke=Math.cos(xn.yaw),Ye=Math.sin(xn.yaw);for(let je=0;je<Ct.nV;je++){let Oo=(Ct.mn[0]+Ct.pos[je*3]/65535*Ct.sz[0])*eo,B=(Ct.mn[1]+Ct.pos[je*3+1]/65535*Ct.sz[1])*eo,yt=(Ct.mn[2]+Ct.pos[je*3+2]/65535*Ct.sz[2])*eo;Tt.pos.push(xn.x+Ke*Oo+Ye*yt+Ae[0],xn.plinth+B+Ae[1],xn.z-Ye*Oo+Ke*yt+Ae[2]);let At=Ct.nrm[je*3]/127,Et=Ct.nrm[je*3+1]/127,ne=Ct.nrm[je*3+2]/127;Tt.nrm.push(Ke*At+Ye*ne,Et,-Ye*At+Ke*ne),Tt.kind.push(Mt.MARBLE),Tt.uv.push(0,0)}for(let je=0;je<Ct.nI;je++)Tt.idx.push(Ct.idx[je]);V=G(Tt)}).catch(dt=>console.error(dt));let D=Lr(t,"res/tree/leaves.webp"),U=CM(),ht=t({vert:c(`
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
		${La}
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
		}`,attributes:{position:U.pos,normal:U.nrm,uv:U.uv,shade:U.shade,flower:U.flower},elements:new Uint32Array(U.idx),uniforms:{tex:D.tex},cull:{enable:!1}}),jt=Lr(t,"res/studio/plants.webp"),Lt=qM(),gt=dt=>t({vert:c(`
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
		uniform sampler2D tex;
		varying vec3 v_pos, v_nrm, v_eye, v_info;
		varying vec2 v_uv;
		${La}
		void main() {
			vec4 tx = texture2D(tex, v_uv);
			if (tx.a < 0.5) discard;
			vec3 V = normalize(v_eye - v_pos);
			vec3 N = normalize(v_nrm);
			if (dot(N, V) < 0.0) N = -N;
			float type = v_info.y;
			vec3 base = tx.rgb * tx.rgb;
			float gloss = 0.3, through = 1.8;
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
			} else {
				base *= vec3(0.62, 0.78, 0.5);
			}
			base *= v_info.x;
			vec3 spec; float sv;
			vec3 light = studioLight(v_pos, N, V, gloss, spec, sv);
			float tr = max(dot(-N, STUDIO_SUN), 0.0) * sv;
			vec3 col = base * light + base * vec3(0.9, 1.0, 0.5) * tr * through * (1.0 - night) + spec * 0.2 * gloss;
			col = studioAir(col, v_pos, v_eye);
			gl_FragColor = vec4(sqrt(max(col, 0.0)), 1.0);
		}`,attributes:{position:dt.pos,normal:dt.nrm,uv:dt.uv,info:dt.info},elements:new Uint32Array(dt.idx),uniforms:{tex:jt.tex},cull:{enable:!1}}),tt=gt(Lt.walls),W=gt(Lt.ground);typeof location!="undefined"&&/tourdebug/.test(location.search)&&console.log("studio greenery: ivy verts",Lt.walls.pos.length/3,"ground verts",Lt.ground.pos.length/3);let st=(()=>{let dt={corner:[],start:[],par:[],misc:[],idx:[]};return Kg.forEach((Ct,Tt)=>{for(let eo of[[-1,-1],[1,-1],[1,1],[-1,1]])dt.corner.push(eo[0],eo[1]),dt.start.push(Ct.start[0]+Ae[0],Ct.start[1],Ct.start[2]+Ae[2]),dt.par.push(Ct.period,Ct.offset,Ct.drift[0],Ct.drift[1]),dt.misc.push(Ct.speed,Ct.seed,Ct.white);dt.idx.push(Tt*4,Tt*4+1,Tt*4+2,Tt*4,Tt*4+2,Tt*4+3)}),dt})(),wt=t({vert:c(`
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
		${ts}
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
			vec2 lq = land - vec2(${at(Ae[0])}, ${at(Ae[2])});
			bool inPool = lq.x > ${at(es[0])} && lq.x < ${at(es[2])} && lq.y > ${at(es[1])} && lq.y < ${at(es[3])};
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
		${La}
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
		}`,attributes:{corner:st.corner,start:st.start,par:st.par,misc:st.misc},elements:new Uint32Array(st.idx),uniforms:d,cull:{enable:!1}}),$t={sim:TM(),ready:!1};Cl=$t.sim,typeof location!="undefined"&&/tourdebug/.test(location.search)&&(window.__koi=$t.sim);let Ut=Object.assign({},d);Vr.forEach((dt,Ct)=>{Ut["koiA["+Ct+"]"]=()=>{let Tt=$t.sim.fish[Ct];return[Tt.x+Ae[0],Tt.y,Tt.z+Ae[2],Tt.th]},Ut["koiB["+Ct+"]"]=()=>{let Tt=$t.sim.fish[Ct];return[Tt.kappa,Tt.ph,Tt.amp,Tt.pitch]}});let be=(()=>{let Ct=Math.round(96*(lt.z1-lt.z0)/(lt.x1-lt.x0)),Tt=new Uint8Array(96*Ct*4),eo=[-fa[0]/fa[1]*-Tl,-fa[2]/fa[1]*-Tl],Ke=96/(lt.x1-lt.x0),Ye=Ct/(lt.z1-lt.z0);for(let je=0;je<Ct;je++)for(let Oo=0;Oo<96;Oo++){let B=lt.x0+(Oo+.5)/Ke,yt=lt.z0+(je+.5)/Ye,At=0;for(let Et of ld){let ne=Math.hypot(B-(Et[0]+eo[0]),yt-(Et[1]+eo[1]));At=Math.max(At,1-Math.min(1,Math.max(0,(ne-Et[2]*.82)/(Et[2]*.35))))}Tt[(je*96+Oo)*4]=Math.round(At*255),Tt[(je*96+Oo)*4+3]=255}return t.texture({width:96,height:Ct,data:Tt,min:"linear",mag:"linear"})})(),De=`
		uniform vec4 koiA[${Vr.length}], koiB[${Vr.length}];
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
	`,He=`
		uniform vec4 koiA[${Vr.length}], koiB[${Vr.length}];
		uniform sampler2D padShadow;
		const vec3 W_SUN = vec3(${at(fa[0])}, ${at(fa[1])}, ${at(fa[2])});
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
			vec2 lp = pw.xz - vec2(${at(Ae[0])}, ${at(Ae[2])});
			// (the picture is for the bed; nearer the surface the shadow sits nearer the pad)
			vec2 back = W_SUN.xz / W_SUN.y * (pw.y - ${at(Tl)});
			vec2 uv = (lp - back - vec2(${at(lt.x0)}, ${at(lt.z0)})) / vec2(${at(lt.x1-lt.x0)}, ${at(lt.z1-lt.z0)});
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
			float e = ${at(Rl)};
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
	`,Ot=(()=>{let dt=[],Ct=[],Tt=[],eo=[],Ke=(Et,ne,Te,me,re)=>(dt.push(Et+Ae[0],ne,Te+Ae[2]),Ct.push(...me),Tt.push(re),dt.length/3-1),Ye=(Et,ne,Te,me,re,he,de)=>{let We=dt.length/3;for(let ge=0;ge<=me;ge++)for(let se=0;se<=re;se++)Ke(Et[0]+ne[0]*ge/me+Te[0]*se/re,Et[1]+ne[1]*ge/me+Te[1]*se/re,Et[2]+ne[2]*ge/me+Te[2]*se/re,he,de);for(let ge=0;ge<me;ge++)for(let se=0;se<re;se++){let Ee=We+ge*(re+1)+se;eo.push(Ee,Ee+1,Ee+re+2,Ee,Ee+re+2,Ee+re+1)}},{x0:je,x1:Oo,z0:B,z1:yt}=lt,At=Tl;return Ye([je,At,B],[Oo-je,0,0],[0,0,yt-B],8,22,[0,1,0],0),Ye([je,0,B],[0,0,yt-B],[0,At,0],22,2,[1,0,0],1),Ye([Oo,0,B],[0,0,yt-B],[0,At,0],22,2,[-1,0,0],1),Ye([je,0,B],[Oo-je,0,0],[0,At,0],8,2,[0,0,1],1),Ye([je,0,yt],[Oo-je,0,0],[0,At,0],8,2,[0,0,-1],1),{pos:dt,nrm:Ct,kd:Tt,idx:eo}})(),ie=Lr(t,"res/pond/gravel.jpg",{wrap:"repeat"}),Oe=Object.assign({padShadow:be,gravel:()=>ie.tex,reflTex:()=>u,reflSize:()=>p,reflOn:()=>f},Ut),Ue=t({vert:c(`
		precision highp float;
		uniform mat4 proj, view;
		attribute vec3 position, normal;
		attribute float kd;
		varying vec3 v_pos, v_nrm, v_eye;
		varying float v_kd;
		${ts}
		${De}
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
		${ts}
		${La}
		${He}
		float klen(int i) {
			${Vr.map((dt,Ct)=>`if (i == ${Ct}) return ${at(dt.len)};`).join(" ")}
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
				base = mix(base, vec3(0.10, 0.13, 0.07), smoothstep(-0.05, ${at(Tl)}, v_pos.y) * 0.75);
			}
			vec3 spec; float sv;
			vec3 light = studioLight(vec3(v_pos.x - W_SUN.x / W_SUN.y * v_pos.y, 0.02, v_pos.z - W_SUN.z / W_SUN.y * v_pos.y), N, V, 0.1, spec, sv);
			vec3 sunPart;
			vec3 lit = underSun(v_pos, N, sv, sunPart);
			// the koi's shadows, softer the higher they swim above the bed
			float sh = 0.0;
			for (int i = 0; i < ${Vr.length}; i++) {
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
		}`,attributes:{position:Ot.pos,normal:Ot.nrm,kd:Ot.kd},elements:new Uint16Array(Ot.idx),uniforms:Oe,cull:{enable:!1},depth:{enable:!0,mask:!1,func:"less"},blend:o}),Ge=Lr(t,"res/koi.webp"),ve=null,ye=null;fetch("res/koi.bin").then(dt=>{if(!dt.ok)throw new Error("Could not load res/koi.bin");return dt.arrayBuffer()}).then(dt=>{let Ct=new DataView(dt),Tt=Ct.getUint32(4,!0),eo=Ct.getUint32(8,!0),Ke=Ct.getFloat32(12,!0),Ye=16,je=new Uint16Array(dt,Ye,Tt);Ye+=Tt*2;let Oo=new Int16Array(dt,Ye,Tt*2);Ye+=Tt*4;let B=new Uint16Array(dt,Ye,Tt*2);Ye+=Tt*4;let yt=new Uint16Array(dt,Ye,eo);Ye+=eo*2;let At=new Int8Array(dt,Ye,Tt*3);Ye+=Tt*3;let Et=new Uint8Array(dt,Ye,Tt*2),ne=Vr.length,Te=new Float32Array(Tt*3*ne),me=new Float32Array(Tt*3*ne),re=new Float32Array(Tt*2*ne),he=new Float32Array(Tt*2*ne),de=new Float32Array(Tt*4*ne);Vr.forEach((se,Ee)=>{for(let Qt=0;Qt<Tt;Qt++){let Ie=Ee*Tt+Qt;Te[Ie*3]=je[Qt]/65535*1.2,Te[Ie*3+1]=Oo[Qt*2]/32767*Ke,Te[Ie*3+2]=Oo[Qt*2+1]/32767*Ke,me[Ie*3]=At[Qt*3]/127,me[Ie*3+1]=At[Qt*3+1]/127,me[Ie*3+2]=At[Qt*3+2]/127,re[Ie*2]=B[Qt*2]/65535,re[Ie*2+1]=B[Qt*2+1]/65535,he[Ie*2]=Et[Qt*2]/255,he[Ie*2+1]=Et[Qt*2+1]/255,de[Ie*4]=se.len,de[Ie*4+1]=se.kind,de[Ie*4+2]=Ee,de[Ie*4+3]=0}});let We=[],ge=[];for(let se=0;se<ne;se++)for(let Ee=0;Ee<eo;Ee+=3){let Qt=yt[Ee],Ie=yt[Ee+1],zo=yt[Ee+2];(Math.max(Et[Qt*2],Et[Ie*2],Et[zo*2])>140?ge:We).push(Qt+se*Tt,Ie+se*Tt,zo+se*Tt)}ye={body:t.elements({data:new Uint32Array(We),type:"uint32"}),fins:t.elements({data:new Uint32Array(ge),type:"uint32"})},ve=t({vert:c(`
				precision highp float;
				uniform mat4 proj, view;
				attribute vec3 loc, nrm;
				attribute vec2 uv, fin;
				attribute vec4 km;
				varying vec3 v_pos, v_nrm, v_eye;
				varying vec2 v_uv;
				varying float v_kind, v_fin, v_depth, v_seed, v_u;
				${ts}
				${De}
				void main() {
					float len = km.x;
					int fi = int(km.z + 0.5);
					vec4 A = koiA[0], B = koiB[0];
					for (int i = 1; i < ${Vr.length}; i++) if (i == fi) { A = koiA[i]; B = koiB[i]; }
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
				${ts}
				${La}
				${He}
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
				}`,attributes:{loc:Te,nrm:me,uv:re,fin:he,km:de},elements:t.prop("els"),uniforms:Object.assign({koiTex:()=>Ge.tex,padShadow:be,reflTex:()=>u,reflSize:()=>p,reflOn:()=>f},Ut),cull:{enable:!1},colorMask:t.prop("color"),depth:{enable:!0,mask:t.prop("write"),func:t.prop("func")},blend:o}),$t.ready=!0}).catch(dt=>console.error(dt));let mt=()=>{ve&&(ve({els:ye.body,color:[!1,!1,!1,!1],write:!0,func:"less"}),ve({els:ye.body,color:[!0,!0,!0,!0],write:!1,func:"lequal"}),ve({els:ye.fins,color:[!0,!0,!0,!0],write:!1,func:"less"}))},ue=(()=>{let dt={cp:[],ci:[],idx:[]};for(let Ct=0;Ct<Ll;Ct++){let Tt=dt.cp.length/3,eo=5,Ke=7;for(let Ye=0;Ye<=eo;Ye++)for(let je=0;je<Ke;je++){let Oo=Ye/eo*Math.PI,B=je/Ke*Math.PI*2,yt=1+.35*Math.sin(B*3+Ct*1.7)*Math.sin(Oo*2+Ct);dt.cp.push(Math.sin(Oo)*Math.cos(B)*yt,Math.cos(Oo)*.6,Math.sin(Oo)*Math.sin(B)*yt*(.8+.4*(Ct*.37%1))),dt.ci.push(Ct)}for(let Ye=0;Ye<eo;Ye++)for(let je=0;je<Ke;je++){let Oo=Tt+Ye*Ke+je,B=Tt+Ye*Ke+(je+1)%Ke,yt=Tt+(Ye+1)*Ke+je,At=Tt+(Ye+1)*Ke+(je+1)%Ke;dt.idx.push(Oo,B,At,Oo,At,yt)}}return dt})(),Be=Object.assign({},d);for(let dt=0;dt<Ll;dt++)Be["crumbs["+dt+"]"]=()=>{let Ct=$t.sim.crumbs[dt],Tt=$t.sim.t,eo=Ct.alive?Math.min(1,Math.max(0,(Tt-Ct.born)/.25)):0;return[Ct.x+Ae[0],Ct.z+Ae[2],eo,Ct.seed]};let Le=t({vert:c(`
		precision highp float;
		uniform mat4 proj, view;
		uniform vec4 crumbs[${Ll}];
		attribute vec3 cp;
		attribute float ci;
		varying vec3 v_pos, v_nrm, v_eye;
		${ts}
		void main() {
			int k = int(ci + 0.5);
			vec4 c = crumbs[0];
			for (int i = 1; i < ${Ll}; i++) if (i == k) c = crumbs[i];
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
		${La}
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
		}`,attributes:{cp:ue.cp,ci:ue.ci},elements:new Uint32Array(ue.idx),uniforms:Be,cull:{enable:!1}}),oe=PM(),So=t({vert:c(Zg),frag:`
		precision highp float;
		uniform float night, time;
		varying vec3 v_pos, v_nrm, v_eye;
		varying float v_kind;
		varying vec2 v_uv;
		${La}
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			vec3 N = normalize(v_nrm);
			if (dot(N, V) < 0.0) N = -N;
			float F = 0.04 + 0.96 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
			vec3 p = v_pos - vec3(${at(Ae[0])}, ${at(Ae[1])}, ${at(Ae[2])});
			float dust = fbm3(p * vec3(1.5, 3.0, 1.5)) * (v_kind > 0.5 ? 1.0 : 0.6);
			// streaks where old rain has run down the roof
			float streak = v_kind > 0.5 ? smoothstep(0.55, 0.9, vnoise3(vec3(p.z * 9.0, p.x * 0.6, 0.0))) * 0.5 : 0.0;
			vec3 c = mix(vec3(0.85, 0.80, 0.72), vec3(0.12, 0.13, 0.17), night) * (dust * 0.5 + streak);
			float a = clamp(0.05 + dust * 0.16 + streak * 0.2 + F * 0.4, 0.0, 0.6);
			vec3 col = mix(c, studioSky(reflect(-V, N)), F / max(a, 0.01) * 0.4);
			// the roof's leaded pattern: dark cames, frosted rondels lit
			// from behind by the sky
			if (v_kind > 0.5) {
				float ux = p.x < ${at(Dt/2)} ? p.x : ${at(Dt)} - p.x;
				vec2 pq = vec2(ux - ${at(Qo.purlin)} * floor(ux / ${at(Qo.purlin)}) - ${at(Qo.purlin/2)}, p.z - ${at(Qo.rafter)} * floor(p.z / ${at(Qo.rafter)}) - ${at(Qo.rafter/2)});
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
		}`,attributes:{position:oe.pos,normal:oe.nrm,kind:oe.kind,uv:oe.uv,anchor:oe.anchor},uniforms:d,elements:new Uint32Array(oe.idx),cull:{enable:!1},depth:{mask:!1},blend:o}),E=(()=>{let dt={pos:[],idx:[]},Ct=300,Tt=24,eo=12;for(let Ke=0;Ke<=eo;Ke++){let Ye=-.25*vo+Ke/eo*.75*vo;for(let je=0;je<=Tt;je++){let Oo=je/Tt*2*vo;dt.pos.push(Ae[0]+Dt/2+Ct*Math.cos(Ye)*Math.cos(Oo),Ct*Math.sin(Ye),Ae[2]+Ne/2+Ct*Math.cos(Ye)*Math.sin(Oo))}}for(let Ke=0;Ke<eo;Ke++)for(let Ye=0;Ye<Tt;Ye++){let je=Ke*(Tt+1)+Ye,Oo=je+1,B=je+Tt+2,yt=je+Tt+1;dt.idx.push(je,Oo,B,je,B,yt)}return dt})(),ho=t({vert:c(`
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
		${La}
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
		void main() {`),attributes:{position:E.pos},elements:new Uint32Array(E.idx),cull:{enable:!1}});function io(dt){dt&&dt.reflected||(m(),l()),ho(),$(),dt&&dt.reflected||(Ue(),mt(),Le()),V&&V(),ht(),tt(),dt&&dt.reflected||W(),wt(),dt&&dt.reflected||So()}return io};var Cl=null;function BM(t,e){if(e[1]>=-1e-4)return null;let o=-t[1]/e[1],n=t[0]+e[0]*o-Ae[0],r=t[2]+e[2]*o-Ae[2];return n<lt.x0||n>lt.x1||r<lt.z0||r>lt.z1?null:[n+Ae[0],r+Ae[2]]}function jM(t,e){Cl&&Cl.drop(t-Ae[0],e-Ae[2])}function WM(){return!!(Cl&&Cl.feed.on)}var Jg=[{from:[8,1.65,21.1],to:[8,1.7,19.1],at:[8,2.4,1],fov:58},{from:[3.6,1.65,20.5],to:[4.6,1.75,18.7],at:[8.8,2.7,1.5],fov:58},{from:[8,1.45,11.2],to:[8,1.55,8.4],at:[8,2.5,.5],fov:46},{from:[8.9,3.9,11.4],to:[7.4,3.7,10.2],at:[8,-.2,7.2],fov:50,pond:!0},{from:[5.1,1.5,5.8],to:[5.7,1.7,4.6],at:[8,2.6,.8],fov:44},{from:[10.6,1.6,2.4],to:[9.7,1.7,3.6],at:[8,2.4,22],fov:60},{from:[2.6,1.5,19],to:[3.6,1.6,17.4],at:[8,6.8,8],fov:62}],fc=11;function VM(t){let e=Jg.length,o=Math.floor(t/fc)%e,n=t%fc/fc,r=n*n*(3-2*n),a=Jg[o],s=a.from.map((c,h)=>c+(a.to[h]-c)*r),i=Math.max(0,1-Math.min(n*fc,(1-n)*fc)/.7);return{eye:id(s),target:id(a.at),fov:a.fov,roll:0,fade:i,pond:!!a.pond&&i<.05,shot:Math.floor(t/fc)}}Xr.exports.previewCam=VM;Xr.exports.poolHit=BM;Xr.exports.feedAt=jM;Xr.exports.feeding=WM;Xr.exports.sunGLSL=t3;Xr.exports.O=Ae;Xr.exports.SIZE={W:Dt,L:Ne,H:wo,RIDGE:ur};Xr.exports.BOX=[Ae[0]-.8,0,Ae[2]-.8,Ae[0]+Dt+.8,ur+.5,Ae[2]+Ne+.8];Xr.exports.AIR_BOX=[Ae[0],0,Ae[2],Ae[0]+Dt,ur,Ae[2]+Ne]});var Nh=St((gA,l3)=>{"use strict";var{A:y0}=Ar(),{C:Gn}=_0(),{DOOR:uc}=Wa(),l0=Za(),dc=Xs(),s3=Gn.hallEnd+.35,i3={arch:[13.6,0,y0.zc-y0.arch.r-.3,14.4,y0.arch.spring+y0.arch.r+.3,y0.zc+y0.arch.r+.3],mouth:[13.3,0,Gn.z0-.3,14.3,8.2,Gn.z1+.3],stair:[-.5,0,l0.SURR.z0-.2,.5,l0.SURR.top+.3,l0.SURR.z1+.2],door:[uc.x0-.4,0,-.5,uc.x1+.4,uc.top+.4,.5],windows:[15.6,.4,Gn.z1-.2,36.9,6.4,Gn.z1+.9],farDoor:[Gn.x1-.2,0,Gn.zc-uc.r-.4,Gn.x1+.9,uc.top+.4,Gn.zc+uc.r+.4]},Na={court:[y0.x0-.4,0,y0.z0-.3,y0.x1+.3,y0.domeTop+.5,y0.z1+.3],stair:[l0.C.x-l0.R-2.6,0,l0.C.z-l0.R-1.5,.5,15.6,l0.C.z+l0.R+1.5],street:[-60,-1,-140,74,60,.6],garden:[10,-1,Gn.z1,46,60,Gn.z1+110],florence:[Gn.x1,-1,Gn.zc-30,Gn.x1+80,60,Gn.zc+30],studio:dc.BOX},XM=[[0,0,0,14,0,s3],[13.6,0,Gn.z0,Gn.x1+.4,0,Gn.z1],[y0.x0-.4,0,y0.z0,y0.x1,0,y0.z1],[l0.C.x-l0.R-2.6,0,l0.C.z-l0.R,.4,0,l0.C.z+l0.R],[dc.BOX[0],0,dc.BOX[2],dc.BOX[3],0,dc.BOX[5]]],YM={hall:{court:["arch"],stair:["stair"],street:["door"],garden:["mouth","windows"],florence:["mouth","farDoor"]},wing:{court:["mouth","arch"],stair:["mouth","stair"],street:["mouth","door"],garden:["windows"],florence:["farDoor"]},court:{stair:["arch","stair"],street:["arch","door"],garden:["arch","mouth","windows"],florence:["arch","mouth","farDoor"]},stair:{court:["stair","arch"],street:["stair","door"],garden:["stair","mouth","windows"],florence:["stair","mouth","farDoor"]}},Il=new Float64Array(24),Yr=[7,2,2],c3=0,Ra="out",Lh=!0;try{/[?&]nocull\b/.test(location.search)&&(Lh=!1)}catch(t){}var Pl={court:!0,stair:!0,street:!0,garden:!0,florence:!0,studio:!1},$l={court:!0,stair:!0,street:!0,garden:!0,florence:!0,studio:!1},r3=!0;function KM(t){let e=i=>[t[i],t[4+i],t[8+i],t[12+i]],o=e(0),n=e(1),r=e(2),a=e(3),s=(i,c,h,l)=>{for(let d=0;d<4;d++)Il[i*4+d]=c[d]+h*l[d]};s(0,a,1,o),s(1,a,-1,o),s(2,a,1,n),s(3,a,-1,n),s(4,a,1,r),s(5,a,-1,r)}function os(t,e){if(!Lh)return!0;let o=e?-t[4]:t[1],n=e?-t[1]:t[4];for(let r=0;r<6;r++){let a=Il[r*4],s=Il[r*4+1],i=Il[r*4+2],c=Il[r*4+3],h=a>0?t[3]:t[0],l=s>0?n:o,d=i>0?t[5]:t[2];if(a*h+s*l+i*d+c<0)return!1}return!0}var fd=(t,e)=>Yr[0]>t[0]-e&&Yr[0]<t[3]+e&&Yr[2]>t[2]-e&&Yr[2]<t[5]+e;function QM(t){if(fd(t,.6))return null;let e=1/0,o=-1/0;for(let n=0;n<4;n++){let r=(n&1?t[3]:t[0])-Yr[0],a=(n&2?t[5]:t[2])-Yr[2],s=Math.atan2(r,a)-c3;s-=Math.round(s/(2*Math.PI))*2*Math.PI,e=Math.min(e,s),o=Math.max(o,s)}return o-e>Math.PI?null:[e,o]}function a3(t,e,o){let n=-Math.PI,r=Math.PI,a=s=>{let i=QM(s);return i?(n=Math.max(n,i[0]-.03),r=Math.min(r,i[1]+.03),n<=r):!0};for(let s of t){let i=i3[s];if(!fd(i,.6)&&(!os(i,o)||!a(i)))return!1}return os(e,o)&&a(e)}function ZM(){let t=Yr[0],e=Yr[2],o=dc.BOX;return t>o[0]&&t<o[3]&&e>o[2]&&e<o[5]?"studio":t<0&&e>l0.C.z-l0.R-1.5&&t>l0.C.x-l0.R-2.6?"stair":t>14.1&&e>y0.z0-.3&&e<y0.z1+.3&&t<y0.x1+.3?"court":t>13.9&&e>Gn.z0-.4&&e<Gn.z1+.1&&t<Gn.x1+.3?"wing":t>=0&&t<=14.1&&e>.3&&e<s3?"hall":"out"}var JM={PORTAL:i3,ROOM:Na,update(t,e,o){let n=new Array(16);for(let r=0;r<4;r++)for(let a=0;a<4;a++){let s=0;for(let i=0;i<4;i++)s+=e[i*4+a]*t[r*4+i];n[r*4+a]=s}KM(n),Yr[0]=o[0],Yr[1]=o[1],Yr[2]=o[2],c3=Math.atan2(-t[2],-t[10]),Ra=ZM();for(let r in Na){if(r==="studio"||Ra==="studio"){Pl[r]=$l[r]=r==="studio"&&Ra==="studio";continue}if(!Lh||Ra==="out"||Ra===r||fd(Na[r],.3))Pl[r]=os(Na[r],!1)||Ra===r,$l[r]=os(Na[r],!0)||Ra===r;else{let a=YM[Ra][r];Pl[r]=a?a3(a,Na[r],!1):os(Na[r],!1),$l[r]=a?a3(a,Na[r],!0):os(Na[r],!0)}}r3=!Lh||XM.some(r=>os(r,!1))},get zone(){return Ra},room(t,e){return e?$l[t]:Pl[t]},box(t,e,o){return o&&!(e?$l[o]:Pl[o])?!1:os(t,e)},get floor(){return r3}};l3.exports=JM});var h3=St((xA,f3)=>{"use strict";var t8=Ku(),e8=Nh();function o8(t){let e=new DataView(t);if(String.fromCharCode(e.getUint8(0),e.getUint8(1),e.getUint8(2),e.getUint8(3))!=="STAT")throw new Error("Not a statue file");let n=e.getUint32(4,!0),r=e.getUint32(8,!0),a=[],s=[];for(let d=0;d<3;d++)a.push(e.getFloat32(12+d*4,!0)),s.push(e.getFloat32(24+d*4,!0));let i=36,c=new Uint16Array(t,i,n*3);i+=n*6;let h=new Uint16Array(t,i,r);i+=r*2;let l=new Int8Array(t,i,n*3);return{nV:n,nI:r,mn:a,sz:s,pos:c,idx:h,nrm:l}}f3.exports=(t,e)=>{let o=[],n=[],r=[],a=[],s=null,i=e.statues.length,c=[],h=(d,u)=>{let p=o.length/3,f=u.height*.75,v=u.base!==void 0?u.base:e.pedestalTop;c.push({offset:a.length,count:d.nI,box:[u.x-f,v-.1,u.z-f,u.x+f,v+u.height+.2,u.z+f]});let m=u.height,g=Math.cos(u.yaw),x=Math.sin(u.yaw),y=u.base!==void 0?u.base:e.pedestalTop;for(let w=0;w<d.nV;w++){let M=(d.mn[0]+d.pos[w*3]/65535*d.sz[0])*m,_=(d.mn[1]+d.pos[w*3+1]/65535*d.sz[1])*m,k=(d.mn[2]+d.pos[w*3+2]/65535*d.sz[2])*m;o.push(u.x+g*M+x*k,y+_,u.z-x*M+g*k);let O=d.nrm[w*3]/127,N=d.nrm[w*3+1]/127,G=d.nrm[w*3+2]/127;n.push(g*O+x*G,N,-x*O+g*G),r.push(u.mat||1,0,0)}for(let w=0;w<d.nI;w++)a.push(p+d.idx[w])},l=()=>{a.length!==0&&(s=t8(t,{position:o,normal:n,mat:r,elements:a,lights:e.lights,get viewer(){return e.viewer}},!1,!0))};return e.statues.forEach(d=>{fetch("res/"+d.file).then(u=>{if(!u.ok)throw new Error("Could not load "+d.file);return u.arrayBuffer()}).then(u=>h(o8(u),d)).catch(u=>console.error(u)).then(()=>{--i===0&&l()})}),function(d){if(!s)return;let u=!!(d&&d.reflected),p=c.filter(f=>e8.box(f.box,u));p.length&&s(p)}}});var _3=St((yA,ud)=>{"use strict";var n8=qs(),Qn=1.29032,Ks=[9.2968,2,5.9],r8=[[.767398,.00185,-.10827],[.010515,.769952,.087681],[-.107774,.08829,-.762374]],Rh=2147.64,u3=725,d3=1288,p3=1450,v3=2576,er=-5.197,Zs=3.865,ns=10.135,Js=-14.679,ql=-30.229,Dl=7.232,m3=-45.713,pc=17.1*Qn,Qs=16.6*Qn,Fl=16.6*Qn,g3=[6.9,17.1],Oh=[2.95,16.6],a8=1.6,s8=0,i8=1,x3=2,hd=3,y3=4,b3=5,c8=6;function l8(){let t=[],e=[],o=[],n=[],r=n8.createBuilder(t,e,o,n),a=(h,l,d,u,p,f,v=1,m=1)=>{let g=[];for(let x=0;x<=v;x++){let y=[];for(let w=0;w<=m;w++){let M=[h[0]+l[0]*x/v+d[0]*w/m,h[1]+l[1]*x/v+d[1]*w/m,h[2]+l[2]*x/v+d[2]*w/m],_=f(M);y.push(r.vert(M,u,[p,_[0],_[1]]))}g.push(y)}for(let x=0;x<v;x++)for(let y=0;y<m;y++)r.tri(g[x][y],g[x+1][y],g[x][y+1]),r.tri(g[x+1][y],g[x+1][y+1],g[x][y+1])},s=h=>l=>[(Ks[2]-l[2])/Qn-h,l[1]/Qn];a([-60,0,-.36],[130,0,0],[0,0,-140],[0,1,0],s8,h=>[h[0]/Qn,h[2]/Qn],13,14),a([Zs,0,er],[0,0,Js-er],[0,pc,0],[1,0,0],i8,s(8.6),6,6),a([-40,0,er],[Zs+40,0,0],[0,pc,0],[0,0,1],x3,h=>[(Zs-h[0])/Qn,h[1]/Qn],8,4),a([-40,0,-.36],[0,0,er+.36],[0,pc,0],[1,0,0],x3,h=>[-h[2]/Qn,h[1]/Qn]),a([ns,0,-80],[0,0,er+80],[0,Qs,0],[-1,0,0],y3,s(8.6),12,6),a([ns,0,er],[60,0,0],[0,Qs,0],[0,0,1],b3,h=>[(h[0]-ns)/Qn,h[1]/Qn],8,4),a([70,0,er],[0,0,-.36-er],[0,Qs,0],[-1,0,0],b3,h=>[-h[2]/Qn,h[1]/Qn]);let i=h=>[(h[0]-Ks[0])/Qn+4.18,h[1]/Qn];a([-20,0,ql],[Dl+20,0,0],[0,Fl,0],[0,0,1],hd,i,8,6),a([Dl,0,ql],[0,0,m3-ql],[0,Fl,0],[1,0,0],hd,s(28),4,4),a([Dl,0,m3],[ns-Dl,0,0],[0,Qs,0],[0,0,1],y3,h=>[(h[0]-Ks[0])/Qn,h[1]/Qn],2,4),a([-20,0,Js],[0,0,ql-Js],[0,Fl,0],[1,0,0],hd,s(16),4,4);let c=(h,l,d,u)=>a(h,l,d,u,c8,()=>[0,0],4,4);return c([-300,-20,-300],[600,0,0],[0,320,0],[0,0,1]),c([-300,300,-300],[600,0,0],[0,0,300],[0,-1,0]),c([-300,-20,0],[0,0,-300],[0,320,0],[1,0,0]),c([300,-20,-300],[0,0,300],[0,320,0],[-1,0,0]),{position:t,normal:e,elements:o,attr:n}}function Ys(t,e,o,n){let r=t.texture({data:[[n]],...o,min:"linear",mag:"linear"});return fetch(e).then(a=>{if(!a.ok)throw new Error("Could not load "+e);return a.blob()}).then(a=>createImageBitmap(a)).then(a=>{r({data:a,...o,min:"mipmap",mipmap:"nice",mag:"linear"})}).catch(a=>console.error(a)),r}var Kr=t=>"vec3("+t.map(e=>e.toFixed(4)).join(", ")+")",f8=[[[-.35,0,-.35],[14.35,9.2,50]],[[-40,0,Js],[Zs,pc,er]],[[ns,0,-80],[70,Qs,er]],[[-20,0,-80],[Dl,Fl,ql]],[[-40,0,-80],[-20,Fl,Js]]],h8=f8.map(t=>`if (hitBox(ro, rd, ${Kr(t[0])}, ${Kr(t[1])}, 1e4) ) return 0.0;`).join(`
		`),w3="mat3("+[0,1,2].map(t=>[0,1,2].map(e=>r8[e][t].toFixed(6)).join(", ")).join(", ")+")",u8=`
precision highp float;

uniform sampler2D photo, photoNight, photoMask, pinkTex, yellowTex, creamTex, cobbleTex;
uniform float time;
uniform float night;   // 0 by day, 1 at night

varying vec3 v_pos;
varying vec3 v_normal;
varying vec3 v_attr;
varying vec3 v_eye;

const vec3 SUN = ${Kr([-.25,.4,.88].map(t=>t/Math.hypot(-.25,.4,.88)))};

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
	${h8}
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
	vec3 ro = ${Kr(Ks)};
	vec3 rd = p - ro;
	if (hitBox(ro, rd, ${Kr([-40,0,Js])}, ${Kr([Zs-.02,pc,er])}, 0.995)) return false;
	if (hitBox(ro, rd, ${Kr([ns+.02,0,-80])}, ${Kr([70,Qs,er])}, 0.995)) return false;
	return true;
}

// is this point sky in the photo? (only meaningful inside the photo)
bool photoSky(vec3 p) {
	vec3 pc = ${w3} * (p - ${Kr(Ks)});
	if (pc.z < 0.2) return false;
	vec2 uv = vec2(
		(${u3.toFixed(2)} + ${Rh.toFixed(3)} * pc.x / pc.z) / ${p3.toFixed(1)},
		(${d3.toFixed(2)} - ${Rh.toFixed(3)} * pc.y / pc.z) / ${v3.toFixed(1)}
	);
	if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return false;
	return texture2D(photoMask, uv).r < 0.5;
}

// photo colour and how much to trust it (0..1)
vec4 photoAt(vec3 p, vec3 n, vec3 eye) {
	vec3 pc = ${w3} * (p - ${Kr(Ks)});
	if (pc.z < 0.2) return vec4(0.0);
	vec2 uv = vec2(
		(${u3.toFixed(2)} + ${Rh.toFixed(3)} * pc.x / pc.z) / ${p3.toFixed(1)},
		(${d3.toFixed(2)} - ${Rh.toFixed(3)} * pc.y / pc.z) / ${v3.toFixed(1)}
	);
	vec2 e = min(uv, 1.0 - uv);
	float w = smoothstep(0.002, 0.02, min(e.x, e.y));
	if (w <= 0.0) return vec4(0.0);
	w *= smoothstep(0.35, 0.75, texture2D(photoMask, uv).r);
	if (w <= 0.0) return vec4(0.0);
	if (!photoSees(p)) return vec4(0.0);
	// if we see this surface much more square-on than the photo did,
	// the photo would look smeared: hand over to the painted facade
	float camCos = abs(dot(normalize(p - ${Kr(Ks)}), n));
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
		base = texture2D(cobbleTex, fuv / ${a8.toFixed(2)}).rgb;
	} else if (kind < 2.5) {
		base = texture2D(pinkTex, vec2(fuv.x / ${g3[0].toFixed(2)}, 1.0 - fuv.y / ${g3[1].toFixed(2)})).rgb;
	} else if (kind < 3.5) {
		base = texture2D(yellowTex, vec2(fuv.x / ${Oh[0].toFixed(2)}, 1.0 - fuv.y / ${Oh[1].toFixed(2)})).rgb;
	} else {
		base = texture2D(creamTex, vec2(fuv.x / ${Oh[0].toFixed(2)}, 1.0 - fuv.y / ${Oh[1].toFixed(2)})).rgb;
	}

	// ---------- the photograph, where it can be trusted ----------
	bool projectable = kind < 0.5 || (kind > 0.5 && kind < 1.5) || (kind > 2.5 && kind < 4.5);
	if (kind < 0.5) {
		// the photo only shows ground inside the alley, or beyond its corners
		bool inAlley = v_pos.x > ${(Zs-.05).toFixed(3)} && v_pos.x < ${(ns+.05).toFixed(3)};
		projectable = inAlley || v_pos.z < ${Js.toFixed(3)};
		projectable = projectable && v_pos.z < ${(er+4.5).toFixed(3)};
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
}`,d8=`
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
}`,p8=i0();ud.exports=t=>{let e=l8(),o={wrapS:"clamp",wrapT:"clamp",flipY:!1},n={wrapS:"mirror",wrapT:"clamp",flipY:!1},r={wrapS:"repeat",wrapT:"repeat",flipY:!1},a=Ys(t,"res/street/photo.jpg",o,[190,160,120]),s=Ys(t,"res/street/photo_night.jpg",o,[12,14,22]),i=Ys(t,"res/street/photo_mask.png",o,[255,255,255]),c=Ys(t,"res/street/facade_pink.jpg",n,[200,150,135]),h=Ys(t,"res/street/facade_yellow.jpg",n,[225,180,95]),l=Ys(t,"res/street/facade_cream.jpg",n,[215,200,175]),d=Ys(t,"res/street/cobbles.jpg",r,[95,95,95]),u=Date.now(),p=t({frag:u8,vert:d8,attributes:{position:e.position,normal:e.normal,attr:e.attr},elements:new Uint32Array(e.elements),uniforms:{photo:a,photoMask:i,pinkTex:c,yellowTex:h,creamTex:l,cobbleTex:d,photoNight:s,night:()=>p8.night,time:()=>(Date.now()-u)/1e3}});return function(){p()}};ud.exports.layout={MOUTH_Z:er,PINK_X:Zs,RIGHT_X:ns,PINK_H:pc,CREAM_H:Qs,S:Qn}});var S3=St((bA,k3)=>{"use strict";var v8=i0().GLSL,{glassPanes:m8}=Wa(),M3=_0();function g8(){let t=[],e=[],o=(n,r)=>{for(let a of n)t.push(a),e.push(r)};return o(m8(),[0,0,1]),o(M3.windowGlass(),[0,0,1]),o(M3.farDoorGlass(),[1,0,0]),{position:t,normal:e}}k3.exports=t=>{let e=g8(),o=t({frag:`
		precision highp float;
		${v8}
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
		}`,attributes:{position:e.position,normal:e.normal},count:e.position.length,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o()}}});var H3=St((wA,gd)=>{"use strict";var N3=i0().GLSL,x8=qs(),dd=Sr(),{wallWithHoles:y8,C:ss}=_0(),Re=.28,ot={westBack:14.4,westCol:15-Re,eastCol:37.4+Re,eastBack:41.8,south:ss.z1+.7,northCol:ss.z1+.7+16,northBack:ss.z1+.7+19,cx:(15+37.4)/2,cz:(ss.z1+.7+ss.z1+.7+16-Re)/2},Wo={x0:ot.westCol+Re,x1:ot.eastCol-Re,z0:ot.south,z1:ot.northCol-Re},A0=3.3,Ul=.92,is=5.6,E3=6,Rr=11.9,as=9.6,ko={x0:ot.cx-2.9,x1:ot.cx+2.9,top:14.4},Fh=7,R3=4,vd=(ot.eastCol-ot.westCol)/Fh,b8=(ot.northCol-ot.south)/R3,O3=3,jl=.26,ni=1.4,ei=1.1,Ph=3,ha=(()=>{let t=[.3,.82,-.49],e=Math.hypot(...t);return t.map(o=>o/e)})(),fe={GROUND:0,BRICK:1,STONE:2,MARBLE:3,HEDGE:4,POT:5,ROOF:6,SHUTTER:7,PANE:8,PLASTER:9,BARK:10,IRON:11,SKY:12,LEAD:13,FARBRICK:14,DARK:15,SOIL:16},ua=[],C3=(t,e,o)=>[ot.cx+t,e,ot.cz+o],$h=C3(-5.9,0,3.4),cs=.85,rs={c:[$h[0],4.6*cs+.5,$h[2]],r:[5*cs,3.6*cs,4.5*cs]},P3=[{d:[0,4.4,0],r:[3.9,2.6,3.6],n:230},{d:[-2.7,4,-1.2],r:[2.6,2.1,2.4],n:105},{d:[2.7,4.5,-1.6],r:[2.5,2.2,2.3],n:105},{d:[.8,6.9,.8],r:[2.6,2,2.5],n:105},{d:[-1.6,6.1,2],r:[2.2,1.9,2],n:80},{d:[2.3,3.4,1.8],r:[2,1.5,1.9],n:60}].map(t=>({c:[$h[0]+t.d[0]*cs,t.d[1]*cs+.5,$h[2]+t.d[2]*cs],r:t.r.map(e=>e*cs),n:t.n}));for(let t of P3)ua.push({...t,cell:0,leaf:[.5,.7,.46],bloom:[1,1,1],size:[.95,1.35],magnolia:1,shadow:1});var w8=[3.6,6.3,9];for(let t of w8){let e=8.6+t%1.7*.6;ua.push({c:C3(t,e/2+.5,5.2),r:[.9,e/2,.9],cell:1,leaf:[.5,.64,.5],bloom:[1,1,1],n:180,size:[.72,.98],spindle:1,shadow:1})}var _8=[{d:[-8.4,-4],bloom:[1,.62,.78]},{d:[-3.6,-4.6],bloom:[1,.98,.94]},{d:[3.8,-4.3],bloom:[1,.98,.94]},{d:[8.5,-4],bloom:[1,.58,.72]}].map(t=>({x:ot.cx+t.d[0],z:ot.cz+t.d[1],bloom:t.bloom}));for(let t of _8)ua.push({c:[t.x,.95,t.z],r:[1.25,.95,1.1],cell:3,leaf:[.7,.86,.58],bloom:t.bloom,n:80,size:[.55,.8],shadow:1});var md=[45,135,225,315].map(t=>{let e=t*Math.PI/180;return[ot.cx+Math.cos(e)*2.3,ot.cz+Math.sin(e)*2.3]});for(let[t,e]of md)ua.push({c:[t,1.85,e],r:[.62,.55,.62],cell:3,leaf:[.78,.95,.55],bloom:[1.25,1,.25],n:36,size:[.32,.42],shadow:1});var $3=[];{let t=(o,n,r,a,s,i)=>{let c=Math.hypot(r-o,a-n),h=Math.floor(c/.9);for(let l=0;l<=h;l++){let d=l/h,u=o+(r-o)*d,p=n+(a-n)*d;s!==void 0&&Math.abs((r!==o?u:p)-s)<i||$3.push([u,p])}};t(Wo.x0+.45,Wo.z0+1.2,Wo.x0+.45,Wo.z1-.45,ot.cz,1),t(Wo.x1-.45,Wo.z0+1.2,Wo.x1-.45,Wo.z1-.45,ot.cz,1),t(Wo.x0+.45,Wo.z1-.45,Wo.x1-.45,Wo.z1-.45,ot.cx,1.9)}var M8=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],Ih=t=>{let e=Math.hypot(t[0],t[1],t[2])||1;return[t[0]/e,t[1]/e,t[2]/e]};function mc(t,e,o,n,r,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),h=t.vert(n,a,s),l=t.vert(r,a,s);t.tri(i,c,h),t.tri(i,h,l)}function Zn(t,e,o,n,r,a,s,i){t.box(Math.min(e,r),Math.min(o,a),Math.min(n,s),Math.max(e,r),Math.max(o,a),Math.max(n,s),[i,0,0])}function k8(t,e,o){return{vert:(n,r,a)=>t.vert(e(n),o(r),a),tri:t.tri}}var S8={north:[t=>[t[0],t[1],ot.northCol-t[2]],t=>[t[0],t[1],-t[2]]],west:[t=>[ot.westCol+t[2],t[1],t[0]],t=>[t[2],t[1],t[0]]],east:[t=>[ot.eastCol-t[2],t[1],t[0]],t=>[-t[2],t[1],t[0]]]};function I3(t,e,o,n,r){let a=[];for(let s=0;s<o;s++){let i=t+s*e+(s===0?n:.02),c=t+(s+1)*e-(s===o-1?r:.02);a.push([i,c,t+(s+.5)*e])}return a}var E8=I3(ot.westCol,vd,Fh,Re+jl,Re+jl),z3=I3(ot.south,b8,R3,.32,Re+jl),vc=[ot.cx-32.35,ot.northCol-77],z8=Array.from({length:Fh-1},(t,e)=>ot.westCol+(e+1)*vd),q3=t=>(t[1]-t[0])/2-.2,Bl=t=>(t[0]+t[1])/2;function A8(t,e){let o=Bl(t),n=q3(t);return{u0:t[0],u1:t[1],bottom:e?0:Ul,head:r=>{let a=Math.abs(r-o);return a<n?A0+Math.sqrt(n*n-a*a):A0},step:.05}}function T8(t,e,o){return{u0:t-o,u1:t+o,bot:n=>e-Math.sqrt(Math.max(0,o*o-(n-t)*(n-t))),head:n=>e+Math.sqrt(Math.max(0,o*o-(n-t)*(n-t))),step:.04,mat:[fe.STONE,0,0]}}function L8(t,e,o,n){return{u0:t-e/2,u1:t+e/2,bottom:o,head:()=>n,step:.5,mat:[fe.STONE,0,0]}}function A3(t,e,o){let[n,r]=S8[e],a=k8(t,n,r),s=[];o.arches.forEach((l,d)=>s.push(A8(l,d===o.open)));let i=[];for(let l of o.bays||o.arches){let d=Bl(l);o.oculi&&s.push(T8(d,6.85,.3)),i.push({c:d,y0:o.win[0],y1:o.win[1],w:1.05})}for(let l of o.extraWindows||[])i.push(l);for(let l of i)s.push(L8(l.c,l.w,l.y0,l.y1));for(let l of o.extraHoles||[])s.push(l);y8(a,{u0:o.u0,u1:o.u1,w0:-Re,w1:Re,top:o.top,holes:s,mat:[fe.BRICK,0,0],revealMat:[fe.BRICK,0,0],noEnds:o.noEnds,cuts:o.cuts,topStep:.25});let c=(l,d,u,p,f,v,m)=>{let g=n([l,d,u]),x=n([p,f,v]);Zn(t,g[0],g[1],g[2],x[0],x[1],x[2],m)},h=(l,d,u,p,f,v)=>mc(a,l,d,u,p,f,[v,0,0]);for(let l of o.arches){let d=Bl(l),u=q3(l),p=28;for(let f of[Re,-Re]){let v=f>0?1:-1,m=f+v*.025;for(let g=0;g<p;g++){let x=Math.PI*g/p,y=Math.PI*(g+1)/p,w=($,V)=>[d+Math.cos($)*V,A0+Math.sin($)*V],M=w(x,u),_=w(y,u),k=w(x,u+.26),O=w(y,u+.26);h([M[0],M[1],m],[_[0],_[1],m],[O[0],O[1],m],[k[0],k[1],m],[0,0,v],fe.STONE);let N=Math.cos((x+y)/2),G=Math.sin((x+y)/2);h([k[0],k[1],f],[O[0],O[1],f],[O[0],O[1],m],[k[0],k[1],m],[N,G,0],fe.STONE)}}}if(o.arches.forEach((l,d)=>{d!==o.open&&c(l[0]-.02,Ul,-Re-.05,l[1]+.02,Ul+.09,Re+.05,fe.STONE)}),c(o.u0,E3,-Re,o.u1,E3+.18,Re+.09,fe.STONE),c(o.u0,o.win[0]-.12,Re-.01,o.u1,o.win[0],Re+.06,fe.STONE),o.cornice)for(let[l,d,u]of o.cornice)c(l,u-.22,Re-.01,d,u,Re+.16,fe.STONE),c(l,u,Re-.01,d,u+.16,Re+.42,fe.STONE);for(let{c:l,y0:d,y1:u,w:p,door:f}of i){let v=p/2;if(h([l-v-.01,d,.06],[l+v+.01,d,.06],[l+v+.01,u,.06],[l-v-.01,u,.06],[0,0,1],f?fe.DARK:fe.PANE),f){c(l-v-.16,0,Re-.01,l-v,u+.16,Re+.07,fe.STONE),c(l+v,0,Re-.01,l+v+.16,u+.16,Re+.07,fe.STONE),c(l-v-.16,u,Re-.01,l+v+.16,u+.2,Re+.09,fe.STONE),c(l-v,0,.07,l+v,u-.02,.12,fe.SHUTTER),c(l-.012,0,.12,l+.012,u-.02,.14,fe.DARK);continue}for(let m of[-1,1]){let g=l+m*v;c(g+m*.02,d+.02,Re+.02,g+m*(v+.025),u-.02,Re+.06,fe.SHUTTER)}c(l-v-.09,u,Re-.01,l+v+.09,u+.16,Re+.05,fe.STONE),c(l-v-.09,d-.1,Re-.01,l+v+.09,d,Re+.09,fe.STONE),c(l-.015,d,.06,l+.015,u,.09,fe.SHUTTER),c(l-v,(d+u)/2-.015,.06,l+v,(d+u)/2+.015,.09,fe.SHUTTER)}if(o.oculi)for(let l of o.bays||o.arches){let d=Bl(l);h([d-.31,6.54,0],[d+.31,6.54,0],[d+.31,7.16,0],[d-.31,7.16,0],[0,0,1],fe.DARK)}for(let l of o.cols){let d=Ul+.09,u=n([l,0,0]);Zn(t,u[0]-.24,d,u[2]-.24,u[0]+.24,d+.12,u[2]+.24,fe.MARBLE),t.lathe([[.23,d+.12,1],[.24,d+.17],[.2,d+.24],[.215,d+.28],[.17,d+.34,1],[.165,d+.6],[.155,A0-.5],[.15,A0-.38,1],[.175,A0-.34,1],[.17,A0-.3],[.2,A0-.22],[.27,A0-.15],[.29,A0-.12,1]],u[0],u[2],18,{mat:()=>[fe.MARBLE,0,0]}),Zn(t,u[0]-.29,A0-.12,u[2]-.29,u[0]+.29,A0+.01,u[2]+.29,fe.STONE)}o.walk&&o.walk(t)}function N8(t){let e=[-1,0,1].map(r=>{let a=ot.cx+r*1.7;return{u0:a-.6,u1:a+.6,bottom:11,head:s=>12.9+Math.sqrt(Math.max(0,.36-(s-a)*(s-a))),step:.04,mat:[fe.STONE,0,0]}});A3(t,"north",{u0:ot.westCol-Re,u1:ot.eastCol+Re,top:r=>r>ko.x0+1e-6&&r<ko.x1-1e-6?ko.top:Rr,cuts:[ko.x0,ko.x0+1e-5,ko.x1-1e-5,ko.x1],arches:E8,open:O3,cols:z8,oculi:!0,win:[8,9.9],extraHoles:e,cornice:[[ot.westCol-Re-3.3,ko.x0,Rr],[ko.x1,ot.eastCol+Re+3.3,Rr],[ko.x0-.2,ko.x1+.2,ko.top]],walk:r=>{Zn(r,Wo.x0,is,ot.northCol+Re,Wo.x1,is+.2,ot.northBack,fe.PLASTER),Zn(r,Wo.x0,0,ot.northBack,Wo.x1,is,ot.northBack+.3,fe.PLASTER);for(let a of[ot.cx-7.2,ot.cx,ot.cx+7.2])mc(r,[a-.8,0,ot.northBack-.01],[a+.8,0,ot.northBack-.01],[a+.8,2.9,ot.northBack-.01],[a-.8,2.9,ot.northBack-.01],[0,0,-1],[fe.DARK,0,0]),Zn(r,a-.98,0,ot.northBack-.06,a+.98,3.12,ot.northBack,fe.STONE),mc(r,[a-.8,0,ot.northBack-.07],[a+.8,0,ot.northBack-.07],[a+.8,2.9,ot.northBack-.07],[a-.8,2.9,ot.northBack-.07],[0,0,-1],[fe.DARK,0,0])}}),mc(t,[ko.x0,11,ot.northCol+.2],[ko.x1,11,ot.northCol+.2],[ko.x1,13.6,ot.northCol+.2],[ko.x0,13.6,ot.northCol+.2],[0,0,-1],[fe.DARK,0,0]),Zn(t,ko.x0+.3,10.88,ot.northCol-Re-.06,ko.x1-.3,11,ot.northCol-Re+.1,fe.STONE),Zn(t,ot.westBack,is+.2,ot.northBack,ot.eastBack,Rr,ot.northBack+3.4,fe.BRICK),Zn(t,ot.westBack,as,ot.northCol-Re,ot.westCol-Re,Rr,ot.northCol+Re,fe.BRICK),Zn(t,ot.eastCol+Re,as,ot.northCol-Re,ot.eastBack,Rr,ot.northCol+Re,fe.BRICK),Zn(t,ot.westBack,is+.2,ot.northCol+Re+.12,ot.eastBack,Rr,ot.northBack,fe.BRICK),Gl(t,[ot.westBack-.5,Rr+.16,ot.northCol-Re-.42],[ko.x0-ot.westBack+.5,0,0],[0,2.6,4.4],fe.ROOF),Gl(t,[ko.x1,Rr+.16,ot.northCol-Re-.42],[ot.eastBack+.5-ko.x1,0,0],[0,2.6,4.4],fe.ROOF),Gl(t,[ko.x0-.3,ko.top+.16,ot.northCol-Re-.42],[ko.x1-ko.x0+.6,0,0],[0,1.4,3],fe.ROOF),T3(t,[ko.x0-.3,ko.top+.16,ot.northCol-Re-.42],[ko.x0-.3,ko.top+1.56,ot.northCol-Re+2.58],[ko.x0-.3,ko.top+.16,ot.northCol-Re+2.58],[-1,0,0],fe.BRICK),T3(t,[ko.x1+.3,ko.top+.16,ot.northCol-Re-.42],[ko.x1+.3,ko.top+1.56,ot.northCol-Re+2.58],[ko.x1+.3,ko.top+.16,ot.northCol-Re+2.58],[1,0,0],fe.BRICK),Zn(t,ko.x0,Rr,ot.northCol+Re,ko.x1,ko.top,ot.northCol+2.6,fe.BRICK);for(let[r,a]of[[ot.cx-9.8,ot.northBack+.6],[ot.cx+9.4,ot.northBack+.4],[ot.cx-4.6,ot.northBack+1]])Zn(t,r-.4,12.5,a-.4,r+.4,15.4,a+.4,fe.BRICK),Zn(t,r-.52,15.4,a-.52,r+.52,15.62,a+.52,fe.STONE);let o=(r,a,s)=>{let i=r==="west"?-1:1,c=[];z3.forEach((d,u)=>{let p=Bl(d);u===1?c.push({c:p,y0:0,y1:2.9,w:1.4,door:!0}):c.push({c:p,y0:1,y1:2.75,w:1.05}),c.push({c:p,y0:3.85,y1:5.45,w:1.05})}),A3(t,r,{u0:ot.south,u1:ot.northCol-Re,top:()=>as,arches:[],bays:z3,cols:[],win:[7.45,8.85],extraWindows:c,noEnds:!0,cornice:[[ot.south,ot.northCol-Re,as]]}),Zn(t,a,0,ot.south,s+i*(Re+.12),as,ot.northBack+.3,fe.BRICK);let h=s-i*Re;Zn(t,h,0,ot.south,h-i*.06,.55,ot.northCol-Re,fe.STONE);let l=s-i*(Re+.42);Gl(t,[l,as+.16,ot.south],[0,0,ot.northCol-Re-ot.south],[a-l+i*.4,1.9,0],fe.ROOF)};o("west",ot.westBack,ot.westCol),o("east",ot.eastBack,ot.eastCol);let n=ss.x1+.7;Zn(t,13.65,7.4,ot.south-.02,n,7.62,ot.south+.14,fe.STONE),Zn(t,13.65,10.4,ot.south-.02,n,10.6,ot.south+.38,fe.STONE),Gl(t,[13.65,10.6,ot.south+.38],[n-13.65,0,0],[0,2.2,-5],fe.ROOF)}function T3(t,e,o,n,r,a){let s=[a,0,0];t.tri(t.vert(e,r,s),t.vert(o,r,s),t.vert(n,r,s))}function Gl(t,e,o,n,r){let a=Ih([o[1]*n[2]-o[2]*n[1],o[2]*n[0]-o[0]*n[2],o[0]*n[1]-o[1]*n[0]]),s=a[1]<0?a.map(h=>-h):a,i=(h,l)=>[e[0]+o[0]*h+n[0]*l,e[1]+o[1]*h+n[1]*l,e[2]+o[2]*h+n[2]*l];mc(t,i(0,0),i(1,0),i(1,1),i(0,1),s,[r,0,0]);let c=.08;mc(t,i(0,0),i(1,0),[i(1,0)[0],i(1,0)[1]-c,i(1,0)[2]],[i(0,0)[0],i(0,0)[1]-c,i(0,0)[2]],Ih([-n[0],0,-n[2]]),[r,0,0])}function R8(t){let e=ot.westBack,o=ot.eastBack,n=ot.south,r=ot.northBack,a=36,s=22,i=[];for(let c=0;c<=a;c++){i.push([]);for(let h=0;h<=s;h++){let l=[e+(o-e)*c/a,0,n+(r-n)*h/s];i[c].push(t.vert(l,[0,1,0],[fe.GROUND,0,0]))}}for(let c=0;c<a;c++)for(let h=0;h<s;h++)t.tri(i[c][h],i[c+1][h],i[c+1][h+1]),t.tri(i[c][h],i[c+1][h+1],i[c][h+1])}var Hl=.46,oi=.58,ti=[[-.5,0],[-.52,.45],[-.46,.78],[-.3,.95],[0,1],[.3,.95],[.46,.78],[.52,.45],[.5,0]];function O8(t,e,o){let n=ei+o,r=(t>0?Wo.x1-ot.cx:ot.cx-Wo.x0)-ni-o,a=ei+o,s=(e>0?Wo.z1-ot.cz:ot.cz-Wo.z0)-ni-o,i=Ph+o,c=Math.sqrt(i*i-n*n),h=Math.sqrt(i*i-a*a),l=[[n,c],[n,s],[r,s],[r,a],[h,a]],d=Math.atan2(a,h),u=Math.atan2(c,n);for(let p=1;p<10;p++){let f=d+(u-d)*p/10;l.push([Math.cos(f)*i,Math.sin(f)*i])}return l.map(([p,f])=>[ot.cx+t*p,ot.cz+e*f])}function C8(t,e,o){let n=o[0]-e[0],r=o[1]-e[1],a=Math.hypot(n,r),s=n/a,i=r/a,c=-i,h=s,l=Hl*.5,d=-l,u=a+l,p=[],f=Math.max(1,Math.ceil((u-d)/1));for(let v=0;v<=f;v++){let m=d+(u-d)*v/f,g=[];for(let x=0;x<ti.length;x++){let[y,w]=ti[x],M=Math.min(ti.length-2,x),_=ti[Math.max(0,x-1)],k=ti[Math.min(ti.length-1,x+1)],O=(k[0]-_[0])*Hl,G=(k[1]-_[1])*oi,$=-O,V=Math.hypot(G,$)||1,D=[e[0]+s*m+c*y*Hl,w*oi,e[1]+i*m+h*y*Hl],U=[c*(-G/V),-$/V,h*(-G/V)];g.push(t.vert(D,U[1]<-.2?[c*Math.sign(y),.3,h*Math.sign(y)]:U,[fe.HEDGE,0,0]))}p.push(g)}for(let v=0;v<f;v++)for(let m=0;m<ti.length-1;m++)t.tri(p[v][m],p[v+1][m],p[v+1][m+1]),t.tri(p[v][m],p[v+1][m+1],p[v][m+1]);for(let[v,m]of[[0,-1],[f,1]]){let g=p[v],x=t.vert([e[0]+s*(v?u:d),oi*.5,e[1]+i*(v?u:d)],[s*m,0,i*m],[fe.HEDGE,0,0]);for(let y=0;y<g.length-1;y++)t.tri(x,g[y],g[y+1])}}function P8(t){for(let e of[-1,1])for(let o of[-1,1]){let n=O8(e,o,.3);for(let r=0;r<n.length;r++)C8(t,n[r],n[(r+1)%n.length])}}function $8(t){let e=ot.cx,o=ot.cz,n=()=>[fe.STONE,0,0];t.lathe([[1.45,0,1],[1.45,.14,1],[1.12,.14,1],[1.12,.3,1],[0,.3]],e,o,8,{mat:n}),t.lathe([[.76,.3,1],[.8,.38,1],[.74,.44],[.76,.7],[.82,.9],[.8,1.02,1],[.88,1.06,1],[.88,1.18,1],[.6,1.18,1],[.6,.98]],e,o,24,{mat:n}),t.lathe([[.6,.98,1],[0,.98]],e,o,16,{mat:()=>[fe.DARK,0,0]});let r={mat:()=>[fe.IRON,0,0]};t.tube([[e-.72,1.1,o],[e-.72,1.9,o],[e-.7,2.3,o]],()=>.035,8,6,r),t.tube([[e+.72,1.1,o],[e+.72,1.9,o],[e+.7,2.3,o]],()=>.035,8,6,r);let a=[];for(let s=0;s<=10;s++){let i=Math.PI*s/10;a.push([e-Math.cos(i)*.7,2.3+Math.sin(i)*.45,o])}t.tube(a,()=>.03,20,6,r),t.tube([[e-.45,2.25,o],[e,2.38,o],[e+.45,2.25,o]],()=>.02,8,5,r),t.ellipsoid([e,2.32,o],[.03,.13,.13],6,10,r);for(let s of[-1,1]){let i=[];for(let c=0;c<=12;c++){let h=c/12*Math.PI*1.6,l=.16*(1-c/16);i.push([e+s*(.72-.18+Math.cos(h)*l*s*-1+0),1.95+Math.sin(h)*l,o])}t.tube(i,()=>.016,16,5,r)}}function I8(t){for(let[e,o]of md)t.lathe([[.26,0,1],[.3,.06],[.36,.42],[.38,.5,1],[.44,.52,1],[.44,.64,1],[.38,.66,1],[.37,.6]],e,o,20,{mat:()=>[fe.POT,0,0]}),t.lathe([[.37,.6,1],[0,.6]],e,o,12,{mat:()=>[fe.SOIL,0,0]}),t.tube([[e,.6,o],[e+.02,1,o-.01],[e-.01,1.45,o+.02]],n=>.045-n*.02,6,6,{mat:()=>[fe.BARK,0,0]})}function q8(t){let[e,,o]=rs.c,n=F3(7),r=[[-1.8,.4,3.6],[1.6,-.9,3.9],[.4,1.9,3.4],[-.6,-1.7,4.2],[2.1,1.2,3.2]];for(let[a,s,i]of r){let c=[[e+a*.05,0,o+s*.05],[e+a*.25,i*.35,o+s*.25],[e+a*.6,i*.7,o+s*.6],[e+a,i,o+s],[e+a*1.35+(n()-.5),i+1.4,o+s*1.35+(n()-.5)]];t.tube(c,h=>.2*(1-h*.75),14,9,{mat:()=>[fe.BARK,0,0]});for(let h=0;h<2;h++){let l=.55+h*.2,d=[e+a*l,i*l,o+s*l],u=n()*Math.PI*2;t.tube([d,[d[0]+Math.cos(u)*1.3,d[1]+.9,d[2]+Math.sin(u)*1.3],[d[0]+Math.cos(u)*2.3,d[1]+1.4+n(),d[2]+Math.sin(u)*2.3]],p=>.08*(1-p*.7),8,6,{mat:()=>[fe.BARK,0,0]})}}for(let a of ua.filter(s=>s.spindle))t.tube([[a.c[0],0,a.c[2]],[a.c[0],1.4,a.c[2]]],()=>.12,3,7,{mat:()=>[fe.BARK,0,0]})}function D8(t){let e=()=>[fe.FARBRICK,0,0],o=()=>[fe.LEAD,0,0],n=(a,s,i,c,h,l)=>{t.lathe([[i+.3,20,1],[i+.3,c-1.2,1],[i+.8,c-.9,1],[i+.8,c,1],[i,c,1]],a,s,28,{mat:e});let d=[];for(let p=0;p<=12;p++){let f=p/12*Math.PI/2,v=Math.cos(f)*i,m=Math.sin(f)*h;l&&(v*=1-.18*Math.sin(f*2)),d.push([Math.max(v,i*.12),c+m])}t.lathe(d,a,s,28,{mat:o});let u=c+h;t.lathe([[i*.13,u-.2,1],[i*.13,u+3,1],[i*.18,u+3.2,1],[i*.02,u+6.4]],a,s,10,{mat:o})};Zn(t,14,0,104,52,26,150,fe.FARBRICK),t.lathe([[3,26],[.1,32]],33,108,4,{mat:e}),n(26,124,7.2,33,9.5,!0),n(40.5,116,6,31,8,!0),n(16.5,117,5.5,30,7.2,!0),t.lathe([[6.4,20,1],[6.4,34,1],[6.9,34.4,1],[6,34.4,1],[.6,46.5,1],[.15,50]],33,132,24,{mat:o});let r=(a,s,i)=>{Zn(t,a-1.8,0,s-1.8,a+1.8,i,s+1.8,fe.FARBRICK),t.lathe([[1.9,i,1],[1.6,i+3.5,1],[1.2,i+3.5,1],[1.2,i+6,1],[.9,i+6.2,1],[.05,i+13]],a,s,8,{mat:e})};r(20.5,109,36),r(46.5,112,38)}function F8(t){let o=[ot.cx,0,ot.cz],n=24,r=10,a=[];for(let s=0;s<=n;s++){a.push([]);let i=-Math.PI*.62+Math.PI*1.24*s/n;for(let c=0;c<=r;c++){let h=Math.PI/2*(c/r)-.05,l=[Math.sin(i)*Math.cos(h),Math.sin(h),Math.cos(i)*Math.cos(h)],d=[o[0]+l[0]*420,o[1]+l[1]*420,o[2]+l[2]*420];a[s].push(t.vert(d,[-l[0],-l[1],-l[2]],[fe.SKY,0,0]))}}for(let s=0;s<n;s++)for(let i=0;i<r;i++)t.tri(a[s][i],a[s+1][i],a[s+1][i+1]),t.tri(a[s][i],a[s+1][i+1],a[s][i+1])}function G8(){let t=[],e=[],o=[],n=[],r=x8.createBuilder(t,e,o,n);return R8(r),N8(r),P8(r),$8(r),I8(r),q8(r),r.save(),r.translate(vc[0],0,vc[1]),D8(r),r.restore(),F8(r),{position:t,normal:e,elements:o,attr:n}}var D3=[[[13.65,0,ss.z0-.7],[ss.x1+.7,10.6,ot.south]],[[ot.westBack,is,ot.northCol-Re],[ot.eastBack,Rr,ot.northBack+3.4]],[[ko.x0,Rr,ot.northCol-Re],[ko.x1,ko.top,ot.northCol+2.6]],[[ot.westBack,0,ot.south],[ot.westCol+Re,as,ot.northBack+.3]],[[ot.eastCol-Re,0,ot.south],[ot.eastBack,as,ot.northBack+.3]],[[14+vc[0],0,104+vc[1]],[52+vc[0],26,150+vc[1]]]];function H8(t,e,o,n){let r=.001,a=1e9;for(let s=0;s<3;s++){if(Math.abs(e[s])<1e-9){if(t[s]<o[s]||t[s]>n[s])return!1;continue}let i=(o[s]-t[s])/e[s],c=(n[s]-t[s])/e[s];if(i>c&&([i,c]=[c,i]),r=Math.max(r,i),a=Math.min(a,c),r>a)return!1}return!0}function Ch(t,e,o,n){let r=[(t[0]-o[0])/n[0],(t[1]-o[1])/n[1],(t[2]-o[2])/n[2]],a=[e[0]/n[0],e[1]/n[1],e[2]/n[2]],s=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],i=r[0]*a[0]+r[1]*a[1]+r[2]*a[2],c=r[0]*r[0]+r[1]*r[1]+r[2]*r[2]-1,h=i*i-s*c;if(h<=0)return 0;let l=Math.sqrt(h),d=Math.max(0,(-i-l)/s),u=(-i+l)/s;return Math.max(0,u-d)}function pd(t){for(let[e,o]of D3)if(H8(t,ha,e,o))return 0;return 1}function F3(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let o=e;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function U8(){let t=[],e=[],o=[],n=[],r=[],a=[],s=[],i=F3(21),c=(f,v,m,g,x,y,w)=>{let M=t.length/3;for(let[_,k]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.push(...f),e.push(_,k),o.push(v,m,g),n.push(...x),r.push(...y),a.push(...w);s.push(M,M+1,M+2,M,M+2,M+3)},h=(f,v)=>{let m=1;for(let g of ua){if(g===v||!g.shadow)continue;let x=Ch(f,ha,g.c,g.r);x>0&&(m*=Math.exp(-x*.9))}return m},l=ua.map(f=>({...f,pts:null}));for(let f of l)for(let v=0;v<f.n;v++){let m;do m=[i()*2-1,i()*2-1,i()*2-1];while(m[0]*m[0]+m[1]*m[1]+m[2]*m[2]>1);let g=Math.hypot(m[0],m[1],m[2])||1,x=Math.pow(i(),.35)*.98,y=[m[0]/g*x,m[1]/g*x,m[2]/g*x];if(f.spindle){let D=y[1],U=Math.sqrt(Math.max(.02,1-D*D))*(D>0?1-D*.55:1+D*.25),ht=Math.hypot(y[0],y[2])||1,jt=U*Math.min(1,ht*1.4);y=[y[0]/ht*jt,D,y[2]/ht*jt]}f.magnolia&&y[1]<-.55&&(y[1]=-.55+(y[1]+.55)*.35);let w=[f.c[0]+y[0]*f.r[0],f.c[1]+y[1]*f.r[1],f.c[2]+y[2]*f.r[2]],M,_;if(f.magnolia){let D=0;for(let jt of P3)D=Math.max(D,Ch(w,ha,jt.c,jt.r));M=Math.exp(-D*1.1);let U=1;for(let jt of ua)if(!jt.magnolia&&jt.shadow){let Lt=Ch(w,ha,jt.c,jt.r);Lt>0&&(U*=Math.exp(-Lt*.9))}M*=pd(w)*U;let ht=M8(w,rs.c);_=Ih([ht[0]/rs.r[0]+y[0]*.5,ht[1]/rs.r[1]+y[1]*.5,ht[2]/rs.r[2]+y[2]*.5]),x=Math.min(1,Math.hypot(ht[0]/rs.r[0],ht[1]/rs.r[1],ht[2]/rs.r[2])*.6+x*.4)}else{let D=Ch(w,ha,f.c,f.r);M=Math.exp(-D*(f.spindle?2.2:1.25)),M*=pd(w)*h(w,ua[l.indexOf(f)]),_=Ih([y[0]/f.r[0],y[1]/f.r[1],y[2]/f.r[2]])}let k=Math.max(0,_[0]*ha[0]+_[1]*ha[1]+_[2]*ha[2]),O=.25+.75*Math.pow(x,1.5)*(.65+.35*(_[1]*.5+.5)),N=f.size[0]+(f.size[1]-f.size[0])*i(),G=.85+i()*.3,$=f.leaf.map(D=>D*G),V=f.cell;f.cell===3&&i()<.35&&(V=2),c(w,N,V,i()*Math.PI*2,[M,O,.35+.65*k],$,f.bloom)}for(let[f,v]of $3){let m=i()<.5;for(let g=0;g<3;g++){let x=[f+(i()-.5)*.7,.28+i()*.22,v+(i()-.5)*.5],y=pd(x)*h(x,null);c(x,.32+i()*.12,i()<.7?3:2,i()*6.28,[y,.6+i()*.3,.8],[.75,.9,.6],m?[1,.55,.75]:[.85,.8,1.15])}}let d=s.length/6,u=Array.from({length:d},(f,v)=>v);for(let f=d-1;f>0;f--){let v=Math.floor(i()*(f+1));[u[f],u[v]]=[u[v],u[f]]}let p=[];for(let f of u)for(let v=0;v<6;v++)p.push(s[f*6+v]);return{center:t,corner:e,par:o,light:n,tint:r,bloom:a,elements:p}}var Se=t=>t.toFixed(4),Wl=t=>`vec3(${Se(t[0])}, ${Se(t[1])}, ${Se(t[2])})`,G3=`
const vec3 SUN = ${Wl(ha)};
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
`,B8=D3.map(([t,e])=>`if (hitBox(ro, SUN, ${Wl(t)}, ${Wl(e)})) return 0.0;`).join(`
	`),j8=ua.filter(t=>t.shadow).map(t=>`tr *= crownShade(ro, ${Wl(t.c)}, ${Wl(t.r)}, ${t.spindle?"1.8":"1.0"});`).join(`
	`),W8=(t,e,o,n,r,a,s,i,c)=>`
	{
		float t = (${Se(e)} - ro.${t}) / SUN.${t};
		if (t > 0.0) {
			vec3 q = ro + SUN * t;
			float u = q.${t==="z"?"x":"z"};
			if (q.y < ${Se(is)} && u > ${Se(o-Re)} && u < ${Se(o+n*r+Re)}) {
				float k = floor((u - ${Se(o)}) / ${Se(n)});
				float a = ${Se(o)} + k * ${Se(n)} + (k < 0.5 ? ${Se(a)} : 0.02);
				float b = ${Se(o)} + (k + 1.0) * ${Se(n)} - (k > ${Se(r-1.5)} ? ${Se(s)} : 0.02);
				float c = 0.5 * (a + b), r = 0.5 * (b - a) - 0.2;
				float d = abs(u - c);
				float sill = abs(k - ${Se(i)}) < 0.5 ? 0.0 : ${Se(Ul+.09)};
				bool hole = (q.y > sill && q.y < ${Se(A0)} && u > a && u < b && d < 0.5 * (b - a) - 0.17)
					|| (q.y >= ${Se(A0)} && d * d + (q.y - ${Se(A0)}) * (q.y - ${Se(A0)}) < r * r);
				if (!hole && ${c}) return 0.0;
			}
		}
	}`,qh=ei+.3,Dh=ei+.3,Vl=Ph+.3,L3=Wo.x1-ot.cx-ni-.3,V8=Wo.z1-ot.cz-ni-.3,X8=ot.cz-Wo.z0-ni-.3,Y8=Math.sqrt(Vl*Vl-qh*qh),K8=Math.sqrt(Vl*Vl-Dh*Dh),Q8=[[ot.cx,ot.cz,.86,1.18],[ot.cx,ot.cz,1.25,.3],...md.map(([t,e])=>[t,e,.42,.65])].map(([t,e,o,n])=>`if (hitCyl(ro, vec2(${Se(t)}, ${Se(e)}), ${Se(o)}, ${Se(n)})) return 0.0;`).join(`
	`),Z8=`
float segDist(vec2 p, vec2 a, vec2 b) {
	vec2 pa = p - a, ba = b - a;
	float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
	return length(pa - ba * h);
}

// distance to the nearest hedge line
float hedgeDist(vec2 xz) {
	vec2 q = abs(xz - vec2(${Se(ot.cx)}, ${Se(ot.cz)}));
	float b1 = xz.y > ${Se(ot.cz)} ? ${Se(V8)} : ${Se(X8)};
	vec2 A = vec2(${Se(qh)}, ${Se(Y8)}), Bp = vec2(${Se(qh)}, b1), C = vec2(${Se(L3)}, b1);
	vec2 D = vec2(${Se(L3)}, ${Se(Dh)}), E = vec2(${Se(K8)}, ${Se(Dh)});
	float d = min(min(segDist(q, A, Bp), segDist(q, Bp, C)), min(segDist(q, C, D), segDist(q, D, E)));
	float ang = atan(q.y, q.x);
	if (ang > atan(E.y, E.x) && ang < atan(A.y, A.x)) d = min(d, abs(length(q) - ${Se(Vl)}));
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
	${B8}
	${W8("z",ot.northCol,ot.westCol,vd,Fh,Re+jl,Re+jl,O3,"ro.z > "+Se(ot.northCol-Re))}
	// on lighter settings only the buildings cast shadows
	if (gardenDetail < 0.5) return 1.0;
	${Q8}
	if (ro.y < ${Se(oi)} && ro.x > ${Se(Wo.x0)} && ro.x < ${Se(Wo.x1)}) {
		for (int i = 1; i <= 4; i++) {
			float t = float(i) / 4.0 * (${Se(oi)} - ro.y) / SUN.y;
			vec3 q = ro + SUN * t;
			float w = ${Se(Hl*.5)} * sqrt(max(0.0, 1.0 - pow(q.y / ${Se(oi)}, 4.0)));
			if (hedgeDist(q.xz) < w) return 0.0;
		}
	}
	float tr = 1.0;
	${j8}
	return tr;
}
`,J8=`
precision highp float;
${N3}
varying vec3 v_pos, v_normal, v_attr, v_eye;
uniform float time, gardenDetail;
${G3}
${Z8}

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

	if (kind == ${fe.SKY}.0) {
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

	if (kind == ${fe.GROUND}.0) {
		bool yard = P.x > ${Se(Wo.x0)} && P.x < ${Se(Wo.x1)} && P.z < ${Se(Wo.z1)};
		if (!yard) {
			// stone slabs under the arcades
			vec2 g = P.xz / 0.62;
			vec2 fg = fract(g);
			float h = hash(floor(g));
			base = mix(vec3(0.66, 0.60, 0.52), vec3(0.76, 0.70, 0.62), h);
			base *= 1.0 - 0.25 * (step(fg.x, 0.03) + step(fg.y, 0.03)) * (1.0 - lod);
			spec = 0.15;
		} else {
			float ex = min(P.x - ${Se(Wo.x0)}, ${Se(Wo.x1)} - P.x);
			float ez = min(P.z - ${Se(Wo.z0)}, ${Se(Wo.z1)} - P.z);
			float edge = min(ex, ez);
			float dx = abs(P.x - ${Se(ot.cx)}), dz = abs(P.z - ${Se(ot.cz)});
			float rc = length(vec2(dx, dz));
			if (edge < ${Se(ni)}) {
				// brick path laid in rows, with a stone kerb
				vec2 q = ex < ez ? P.zx : P.xz;
				base = brick(q * vec2(1.0, 2.6), 0.4) * 0.9;
				if (abs(edge - ${Se(ni)}) < 0.08) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (rc < ${Se(Ph)}) {
				// brick in rings round the wellhead
				float ang = atan(P.z - ${Se(ot.cz)}, P.x - ${Se(ot.cx)});
				vec2 q = vec2(ang * rc, rc);
				base = brick(q * vec2(1.0, 2.6), 0.5) * 0.92;
				if (abs(rc - ${Se(Ph)}) < 0.1) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (dx < ${Se(ei)} || dz < ${Se(ei)}) {
				// pale gravel
				float g = noise(P.xz * 40.0) * 0.6 + noise(P.xz * 9.0) * 0.4;
				base = mix(vec3(0.66, 0.58, 0.46), vec3(0.86, 0.79, 0.66), mix(g, 0.5, lod));
				base *= 0.94 + 0.12 * noise(P.xz * 1.3);
				float e = min(${Se(ei)} - min(dx, dz), 1.0);
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
			ao *= 0.6 + 0.4 * smoothstep(0.85, 1.6, length(P.xz - vec2(${Se(ot.cx)}, ${Se(ot.cz)})));
		}
	} else if (kind == ${fe.BRICK}.0) {
		float pink = smoothstep(0.4, 0.6, noise(wq * 0.05 + 7.0));
		base = mix(brick(wq, 0.25 * pink), vec3(0.68, 0.46, 0.33), lod * 0.6);
		base *= 1.0 - 0.18 * smoothstep(0.0, 1.5, 1.6 - P.y) * noise(wq * 1.5);
		ao *= 0.78 + 0.22 * smoothstep(0.0, 1.2, P.y);
	} else if (kind == ${fe.STONE}.0) {
		float n = noise(wq * 3.0) * 0.5 + noise(wq * 0.7) * 0.5;
		base = mix(vec3(0.74, 0.70, 0.62), vec3(0.86, 0.83, 0.76), n);
		spec = 0.1;
	} else if (kind == ${fe.MARBLE}.0) {
		// red Verona marble
		float n = noise3(P * vec3(5.0, 1.5, 5.0)) * 0.6 + noise3(P * 14.0) * 0.4;
		base = mix(vec3(0.56, 0.32, 0.25), vec3(0.68, 0.42, 0.33), n);
		base = mix(base, vec3(0.80, 0.66, 0.56), smoothstep(0.66, 0.74, noise3(P * 9.0 + 3.0)) * 0.35);
		spec = 0.35;
	} else if (kind == ${fe.HEDGE}.0) {
		float n = noise3(P * 9.0) * 0.55 + noise3(P * 2.5) * 0.45;
		base = mix(vec3(0.05, 0.16, 0.04), vec3(0.22, 0.38, 0.10), n);
		ao *= 0.55 + 0.45 * smoothstep(0.0, ${Se(oi)}, P.y) * (0.6 + 0.4 * n);
		N = normalize(N + vec3(noise3(P * 13.0) - 0.5, 0.0, noise3(P * 13.0 + 5.0) - 0.5) * 0.9);
	} else if (kind == ${fe.POT}.0) {
		base = mix(vec3(0.66, 0.34, 0.20), vec3(0.75, 0.44, 0.28), noise(wq * 6.0));
	} else if (kind == ${fe.SOIL}.0) {
		base = vec3(0.20, 0.14, 0.09);
	} else if (kind == ${fe.ROOF}.0) {
		// rows of curved clay tiles
		float along = abs(N.x) > abs(N.z) ? P.z : P.x;
		float rib = abs(fract(along / 0.24) - 0.5) * 2.0;
		float h = hash(vec2(floor(along / 0.24), floor(P.y / 0.42)));
		base = mix(vec3(0.58, 0.30, 0.20), vec3(0.72, 0.44, 0.30), h);
		base = mix(base, vec3(0.45, 0.42, 0.36), smoothstep(0.55, 0.85, noise(P.xz * 0.6)) * 0.4);
		base *= mix(0.62 + 0.38 * (1.0 - rib * rib), 0.85, lod);
	} else if (kind == ${fe.SHUTTER}.0) {
		float slat = fract(P.y / 0.07);
		base = vec3(0.17, 0.30, 0.20) * (0.75 + 0.25 * smoothstep(0.1, 0.5, slat));
	} else if (kind == ${fe.PANE}.0) {
		vec3 R = reflect(-V, N);
		base = vec3(0.03, 0.035, 0.04);
		vec3 refl = skyColor(normalize(vec3(R.x, abs(R.y), R.z))) * 0.25;
		gl_FragColor = vec4(toNight(tonemap(base + refl * (0.4 + 0.6 * pow(1.0 - abs(dot(N, V)), 3.0))), 0.45), 1.0);
		return;
	} else if (kind == ${fe.PLASTER}.0) {
		base = mix(vec3(0.82, 0.76, 0.64), vec3(0.88, 0.83, 0.72), noise(wq * 1.3));
		// a darker dado on the back walls
		if (abs(N.y) < 0.5 && P.y < 1.1) base *= 0.82;
	} else if (kind == ${fe.BARK}.0) {
		base = mix(vec3(0.30, 0.27, 0.24), vec3(0.45, 0.42, 0.38), noise3(P * vec3(8.0, 2.0, 8.0)));
	} else if (kind == ${fe.IRON}.0) {
		base = vec3(0.07, 0.07, 0.07);
		spec = 0.4;
	} else if (kind == ${fe.LEAD}.0) {
		base = mix(vec3(0.30, 0.33, 0.35), vec3(0.40, 0.43, 0.45), noise(P.xy * 0.5));
		// ribs on the domes
		float a = atan(P.z - floor(P.z / 50.0) * 50.0, 1.0);
		base *= 0.9 + 0.1 * step(0.5, fract(a * 6.0));
		far = 1.0;
	} else if (kind == ${fe.FARBRICK}.0) {
		base = mix(vec3(0.66, 0.46, 0.34), vec3(0.74, 0.54, 0.40), noise(P.xy * 0.3));
		// a row of small arches under the eaves and some dark windows
		far = 1.0;
	} else if (kind == ${fe.DARK}.0) {
		base = vec3(0.025, 0.022, 0.02);
	}

	// ---------- light ----------

	// in the arcade walks the sky is mostly hidden
	bool walk = (P.x < ${Se(ot.westCol)} || P.x > ${Se(ot.eastCol)} || P.z > ${Se(ot.northCol)}) && P.y < ${Se(is+.05)} && P.z > ${Se(ot.south-.1)} && P.z < ${Se(ot.northBack+.5)};
	float skyVis = 0.55 + 0.45 * N.y;
	if (walk) {
		float depth = P.z > ${Se(ot.northCol)} ? P.z - ${Se(ot.northCol)} : (P.x < ${Se(ot.westCol)} ? ${Se(ot.westCol)} - P.x : P.x - ${Se(ot.eastCol)});
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
}`,tk=`
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
}`,ek=`
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
}`,ok=`
precision highp float;
${N3}
uniform sampler2D leaves;
varying vec2 v_uv;
varying vec3 v_light, v_tint, v_bloom, v_pos;
${G3}
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
}`;function nk(t,e,o){let n=t.texture({data:[[o]],min:"linear",mag:"linear"});return fetch(e).then(r=>{if(!r.ok)throw new Error("Could not load "+e);return r.blob()}).then(r=>createImageBitmap(r,{premultiplyAlpha:"none"})).then(r=>n({data:r,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(r=>console.error(r)),n}gd.exports=t=>{let e=G8(),o=U8(),n=nk(t,"res/garden/foliage.webp",[0,0,0,0]),r=Date.now(),a=()=>dd.motion?window.__streetClock!==void 0?window.__streetClock:(Date.now()-r)/1e3:20,s=t({frag:J8,vert:tk,attributes:{position:e.position,normal:e.normal,attr:e.attr},elements:new Uint32Array(e.elements),uniforms:{time:a,gardenDetail:()=>dd.gardenDetail}}),i=t({frag:ok,vert:ek,attributes:{center:o.center,corner:o.corner,par:o.par,light:o.light,tint:o.tint,bloom:o.bloom},elements:new Uint32Array(o.elements),uniforms:{leaves:n,time:a},cull:{enable:!1},count:()=>Math.floor(o.elements.length*dd.leafShare/6)*6});return function(){s(),i()}};gd.exports.layout={G:ot,YARD:Wo,SUN:ha}});var V3=St((_A,W3)=>{"use strict";var rk=i0().GLSL,ak=qs(),{C:j3}=_0(),T0=j3.x1+.35,wd=j3.zc,xd=[T0-7.3,2,wd],U3=5.2*Math.PI/180,B3=2100,sk=725,ik=1288,ck=1450,lk=2576,Oa=wd-3.2,Uh=wd+3.3,yd=T0+5,bd=T0+11.7,gc=3.9,Xl=T0+22.7,Gh=40;function fk(){let t=[],e=[],o=[],n=[],r=ak.createBuilder(t,e,o,n),a=(l,d,u,p,f,v)=>{let m=[];for(let g=0;g<=f;g++){m.push([]);for(let x=0;x<=v;x++){let y=[0,1,2].map(w=>l[w]+d[w]*g/f+u[w]*x/v);m[g].push(r.vert(y,p,[0,0,0]))}}for(let g=0;g<f;g++)for(let x=0;x<v;x++)r.tri(m[g][x],m[g+1][x],m[g+1][x+1]),r.tri(m[g][x],m[g+1][x+1],m[g][x+1])},s=Uh-Oa,i=.7;a([T0-i,0,Oa],[yd-T0+i,0,0],[0,0,s],[0,1,0],6,4);let c=bd-yd,h=Math.hypot(c,gc);return a([yd,0,Oa],[c,gc,0],[0,0,s],[-gc/h,c/h,0],6,4),a([bd,gc,Oa],[Xl-bd,0,0],[0,0,s],[0,1,0],6,4),a([T0-i,0,Oa],[Xl-T0+i,0,0],[0,Gh,0],[0,0,1],12,12),a([T0-i,0,Uh],[Xl-T0+i,0,0],[0,Gh,0],[0,0,-1],12,12),a([Xl,0,Oa],[0,Gh,0],[0,0,s],[-1,0,0],8,4),a([T0-i,Gh,Oa],[Xl-T0+i,0,0],[0,0,s],[0,-1,0],6,4),{position:t,normal:e,elements:o,attr:n}}var U0=t=>t.toFixed(5),Hh=[[T0+3.4,3.7,Oa+.01,1],[T0+8.6,4.1,Uh-.01,-1],[T0+14.8,gc+3.3,Oa+.01,1],[T0+19.6,gc+3.6,Uh-.01,-1]],hk=`
precision highp float;
${rk}
uniform sampler2D photo;
uniform float time;
varying vec3 v_pos;
varying vec3 v_normal;
const int NLAMP = ${Hh.length};
vec4 LAMP[NLAMP];

void main() {
	${Hh.map((t,e)=>`LAMP[${e}] = vec4(${U0(t[0])}, ${U0(t[1])}, ${U0(t[2])}, ${U0(t[3])});`).join(`
	`)}
	vec3 d = v_pos - vec3(${U0(xd[0])}, ${U0(xd[1])}, ${U0(xd[2])});
	float c = ${U0(Math.cos(U3))}, s = ${U0(Math.sin(U3))};
	float fw = d.x * c + d.y * s;
	float up = -d.x * s + d.y * c;
	fw = max(fw, 0.05);
	vec2 px = vec2(${U0(sk)} + ${U0(B3)} * d.z / fw, ${U0(ik)} - ${U0(B3)} * up / fw);
	vec2 uv = px / vec2(${U0(ck)}, ${U0(lk)});
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
	for (int i = 0; i < ${Hh.length}; i++) {
		vec4 L = LAMP[i];                       // x, y, z, side (+1 left wall, -1 right)
		vec3 d = L.xyz - v_pos;
		float dd = dot(d, d);
		float fl = 0.92 + 0.05 * sin(time * 7.3 + float(i) * 2.1) + 0.03 * sin(time * 17.0 + float(i));
		// the wall it hangs on is lit across, the paving from above
		float face = v_normal.y > 0.5 ? max(normalize(d).y, 0.0) : 0.35 + 0.65 * max(dot(v_normal, normalize(d)), 0.0);
		lit += albedo * vec3(1.0, 0.62, 0.30) * face * fl * lampK * 3.2 / (0.6 + dd * 0.45);
	}
	gl_FragColor = vec4(lit, 1.0);
}`,uk=`
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
}`;W3.exports=t=>{let e=fk(),o=t.texture({data:[[[120,105,85]]],min:"linear",mag:"linear"});fetch("res/florence/photo.jpg").then(i=>{if(!i.ok)throw new Error("Could not load the Florence photo");return i.blob()}).then(i=>createImageBitmap(i)).then(i=>o({data:i,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(i=>console.error(i));let n=t({frag:hk,vert:uk,attributes:{position:e.position,normal:e.normal},elements:new Uint32Array(e.elements),uniforms:{photo:o},cull:{enable:!1}}),r={pos:[],nrm:[],k:[],idx:[]},a=(i,c,h)=>{let[l,d,u]=i,p=[[[1,0,0],[0,1,0],[0,0,1]],[[-1,0,0],[0,1,0],[0,0,-1]],[[0,0,1],[0,1,0],[-1,0,0]],[[0,0,-1],[0,1,0],[1,0,0]],[[0,1,0],[0,0,1],[1,0,0]],[[0,-1,0],[0,0,1],[-1,0,0]]];for(let[f,v,m]of p){let g=r.pos.length/3;for(let[x,y]of[[-1,-1],[1,-1],[1,1],[-1,1]])r.pos.push(l+f[0]*c[0]+v[0]*x*c[0]+m[0]*y*c[0],d+f[1]*c[1]+v[1]*x*c[1]+m[1]*y*c[1],u+f[2]*c[2]+v[2]*x*c[2]+m[2]*y*c[2]),r.nrm.push(...f),r.k.push(h);r.idx.push(g,g+1,g+2,g,g+2,g+3)}};for(let i of Hh){let c=i[3],h=i[2]+c*.42;a([i[0],i[1],h],[.11,.17,.11],1);for(let l of[-1,1])for(let d of[-1,1])a([i[0]+l*.11,i[1],h+d*.11],[.014,.18,.014],0);a([i[0],i[1]+.2,h],[.15,.03,.15],0),a([i[0],i[1]+.27,h],[.05,.05,.05],0),a([i[0],i[1]-.19,h],[.09,.025,.09],0),a([i[0],i[1]+.34,i[2]+c*.21],[.015,.015,.21],0),a([i[0],i[1]+.15,i[2]+c*.03],[.04,.24,.03],0)}let s=t({vert:`
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
		}`,attributes:{position:r.pos,normal:r.nrm,k:r.k},elements:new Uint16Array(r.idx),cull:{enable:!1}});return function(){n(),s()}}});var Z3=St((MA,Q3)=>{"use strict";var dk=i0().GLSL,{A:jh,BENCH:Md,SHAFT:_d,TREE:Yl,oculusGLSL:pk}=Ar(),vk=Sr(),Bh=Yl.sxz,X3=Yl.sy,Y3=Yl.yaw;function mk(t){let e=new DataView(t),o=e.getUint32(4,!0),n=e.getUint32(8,!0),r=e.getUint32(12,!0),a=[0,1,2].map(u=>e.getFloat32(16+u*4,!0)),s=[0,1,2].map(u=>e.getFloat32(28+u*4,!0)),i=40,c=new Uint16Array(t,i,o*3);i+=o*6;let h=new Uint16Array(t,i,o*2);i+=o*4;let l=new Int8Array(t,i,o*3);i+=o*3,i=i+3&-4;let d=new Uint32Array(t,i,r);return{nV:o,nWood:n,nI:r,mn:a,sz:s,pos:c,uv:h,nrm:l,idx:d}}function gk(t){let e=new Float32Array(t.nV*3),o=new Float32Array(t.nV*3),n=new Float32Array(t.nV*2),r=new Float32Array(t.nV),a=Math.cos(Y3),s=Math.sin(Y3);for(let i=0;i<t.nV;i++){let c=(t.mn[0]+t.pos[i*3]/65535*t.sz[0])*Bh,h=(t.mn[1]+t.pos[i*3+1]/65535*t.sz[1])*X3,l=(t.mn[2]+t.pos[i*3+2]/65535*t.sz[2])*Bh;e[i*3]=jh.cx+a*c+s*l,e[i*3+1]=Md.soil+.02+h,e[i*3+2]=jh.zc-s*c+a*l;let d=t.nrm[i*3]/127/Bh,u=t.nrm[i*3+1]/127/X3,p=t.nrm[i*3+2]/127/Bh,f=Math.hypot(d,u,p)||1;d/=f,u/=f,p/=f,o[i*3]=a*d+s*p,o[i*3+1]=u,o[i*3+2]=-s*d+a*p,n[i*2]=t.uv[i*2]/65535,n[i*2+1]=t.uv[i*2+1]/65535,r[i]=i>=t.nWood?1:0}return{position:e,normal:o,uv:n,leaf:r,elements:t.idx}}function K3(t,e,o,n){let r=t.texture({data:[[n]],min:"linear",mag:"linear"});return fetch(e).then(a=>{if(!a.ok)throw new Error("Could not load "+e);return a.blob()}).then(a=>createImageBitmap(a,{premultiplyAlpha:"none"}).catch(()=>new Promise((s,i)=>{let c=new Image;c.onload=()=>s(c),c.onerror=i,c.src=URL.createObjectURL(a)}))).then(a=>r({data:a,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",...o})).catch(a=>console.error(a)),r}var f0=t=>t.toFixed(4),xc=Yl.crownC,yc=Yl.crownR,xk=`
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

const vec3 SHAFT = vec3(${f0(_d[0])}, ${f0(_d[1])}, ${f0(_d[2])});

void main() {
	vec3 p = position;
	// the air in the court is never quite still. The whole tree leans
	// with it, slowly, more the higher and the further out on a limb
	// (wood and leaves together, so every leaf stays on its twig) ...
	float h = max(p.y - 1.2, 0.0);
	vec2 out2 = p.xz - vec2(${f0(jh.cx)}, ${f0(jh.zc)});
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
	vec3 cc = vec3(${f0(xc[0])}, ${f0(xc[1])}, ${f0(xc[2])});
	vec3 cr = vec3(${f0(yc[0])}, ${f0(yc[1])}, ${f0(yc[2])});
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
}`,ls=Ya(),yk=`
precision highp float;
${dk}
uniform float time;
${ls.lanternGLSL(ls.TREE_LANTERN)}
const vec3 LANTERN_POS = vec3(${ls.LANTERNS[ls.TREE_LANTERN[0]].x.toFixed(3)}, ${ls.LANTERNS[ls.TREE_LANTERN[0]].y.toFixed(3)}, ${ls.LANTERNS[ls.TREE_LANTERN[0]].z.toFixed(3)});
uniform sampler2D leaves, bark;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_leaf, v_shade;
varying vec3 v_eye;

${pk()}

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
	vec3 rel = (v_pos - vec3(${f0(xc[0])}, ${f0(xc[1])}, ${f0(xc[2])})) / vec3(${f0(yc[0])}, ${f0(yc[1])}, ${f0(yc[2])});
	float outer = clamp(length(rel), 0.0, 1.0);
	float ao = mix(0.38, 1.0, outer * outer) * (0.75 + 0.25 * smoothstep(0.4, 2.0, v_pos.y));
	// and the trunk darkens where it meets the soil
	ao *= 0.6 + 0.4 * smoothstep(${f0(Md.soil)}, ${f0(Md.soil+.5)}, v_pos.y);

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
}`;Q3.exports=t=>{let e=null,o=K3(t,"res/tree/leaves.webp",{wrapS:"clamp",wrapT:"clamp"},[60,80,40,0]),n=K3(t,"res/tree/bark.jpg",{wrapS:"repeat",wrapT:"repeat"},[90,80,70]),r=Date.now();return fetch("res/tree.bin").then(a=>{if(!a.ok)throw new Error("Could not load the tree");return a.arrayBuffer()}).then(a=>{let s=gk(mk(a));e=t({vert:xk,frag:yk,attributes:{position:s.position,normal:s.normal,uv:s.uv,leaf:s.leaf},elements:s.elements,uniforms:{leaves:o,bark:n,time:()=>vk.motion?typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-r)/1e3:0},cull:{enable:!1}})}).catch(a=>console.error(a)),function(){e&&e()}}});var Yh=St((kA,ox)=>{"use strict";var bc=Za(),bk="res/audio/go-tomorrow.mp3",wk="res/audio/go-tomorrow.json",tx="gallery-sound",Wh=[bc.PIANO.x,1,bc.PIANO.z],_k=bc.R,or=!0;try{localStorage.getItem(tx)==="off"&&(or=!1)}catch(t){}var Pn=null,k0=null,Kl=null,Ql=null,fs=null,Ca=null,ri=!1,Vh=null,J3=[],Mk=(typeof performance!="undefined"?performance.now():0)/1e3;function kk(t){let e=Math.floor(t.sampleRate*2.6),o=t.createBuffer(2,e,t.sampleRate),n=12345,r=()=>(n=n*16807%2147483647,n/10737418235e-1-1);for(let a=0;a<2;a++){let s=o.getChannelData(a),i=0;for(let c=0;c<e;c++){let h=c/t.sampleRate,l=.25+.6*Math.exp(-h*2.2);i+=(r()-i)*l,s[c]=i*Math.pow(1-c/e,2.2)*Math.exp(-h*1.5)*(h<.012?h/.012:1)}}return o}function Sk(){if(Pn)return;Pn=new Audio,Pn.src=bk,Pn.loop=!0,Pn.preload="auto",Pn.crossOrigin="anonymous";let t=window.AudioContext||window.webkitAudioContext;if(!t){Pn.volume=.2;return}try{k0=new t;let e=k0.createMediaElementSource(Pn);fs=k0.createBiquadFilter(),fs.type="lowpass",fs.frequency.value=1500,fs.Q.value=.4,Kl=k0.createGain(),Kl.gain.value=0,Ql=k0.createGain(),Ql.gain.value=0;let o=k0.createConvolver();o.buffer=kk(k0),Ca=k0.createGain(),Ca.gain.value=or?1:0,e.connect(fs),fs.connect(Kl),Kl.connect(Ca),fs.connect(o),o.connect(Ql),Ql.connect(Ca),Ca.connect(k0.destination)}catch(e){k0=null,Pn.volume=.2}}function ex(){if(ri||!or)return;Sk();let t=()=>Pn.play().then(()=>{ri=!0}).catch(()=>{});k0&&k0.state==="suspended"?k0.resume().then(t,t):t()}typeof window!="undefined"&&(["pointerdown","pointerup","touchend","keydown","click"].forEach(t=>window.addEventListener(t,ex,{capture:!0,passive:!0})),document.addEventListener("visibilitychange",()=>{!Pn||!ri||(document.hidden?Pn.pause():or&&Pn.play().catch(()=>{}))}),fetch(wk).then(t=>t.ok?t.json():null).then(t=>{if(!t)return;let e=o=>{let n=o.map(s=>s[2]).sort((s,i)=>s-i),r=n[Math.floor(n.length*.03)]||0,a=n[Math.floor(n.length*.97)]||1;return o.map(s=>({t:s[0],w:s[1],x:Math.max(0,Math.min(1,(s[2]-r)/Math.max(a-r,.001)))}))};Vh={left:e(t.l),right:e(t.r),level:t.e,dur:t.d}}).catch(()=>{}));var Xh={AT:Wh,listen(t){if(!k0||!ri)return;let e=t[0]-Wh[0],o=t[2]-Wh[2],n=Math.hypot(e,o,(t[1]-Wh[1])*.5),r=Math.hypot(t[0]-bc.C.x,t[2]-bc.C.z)<_k+.4||t[0]<-.2&&Math.abs(t[2]-bc.C.z)<4,a,s,i;if(r){let h=Math.max(0,Math.min(1,(n-1.2)/5));a=1-.3*h,s=.22+.16*h,i=16e3}else{let h=5.5/Math.max(n,5.5),l=t[0]>14.2&&t[2]<12?.6:1;a=.5*Math.pow(h,1.5)*l,s=.34*Math.pow(h,.95)*l,i=(650+9e3*Math.pow(h,1.3))*(l<1?.7:1)}let c=k0.currentTime;Kl.gain.setTargetAtTime(a,c,.35),Ql.gain.setTargetAtTime(s,c,.35),fs.frequency.setTargetAtTime(i,c,.35)},time(){let t=Vh&&Vh.dur||158;return Pn&&ri&&!Pn.paused||Pn&&ri?Pn.currentTime%t:((performance.now()/1e3-Mk)%t+t)%t},get cues(){return Vh},get on(){return or},set(t){or=!!t;try{localStorage.setItem(tx,or?"on":"off")}catch(e){}or?(ex(),Pn&&ri&&Pn.play().catch(()=>{}),Ca&&Ca.gain.setTargetAtTime(1,k0.currentTime,.2)):Ca?Ca.gain.setTargetAtTime(0,k0.currentTime,.15):Pn&&Pn.pause(),J3.forEach(e=>e(or))},toggle(){Xh.set(!or)},onChange(t){J3.push(t)},button(t){let e='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a7.8 7.8 0 0 1 0 11"/></svg>',o='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>',n=document.createElement("button");n.type="button",n.className=t+" sound-toggle";let r=()=>{n.innerHTML=or?e:o,n.setAttribute("aria-label",or?"Turn the music off":"Turn the music on"),n.title=or?"Music on":"Music off",n.setAttribute("aria-pressed",or?"true":"false")};return r(),Xh.onChange(r),["mousedown","pointerdown"].forEach(a=>n.addEventListener(a,s=>s.stopPropagation())),n.addEventListener("click",a=>{a.stopPropagation(),Xh.toggle()}),n}};ox.exports=Xh});var dx=St((SA,Ad)=>{"use strict";var Ed=i0().GLSL,{A:nx,BENCH:lx,oculusGLSL:fx}=Ar(),rx=Sr(),hx=Za(),ax=Yh(),Ek=1.74,zk=1.877,L0=Ek/zk,si={x:nx.cx-1.22,z:nx.zc+.02,hipY:lx.seat+.115},an=(t,e)=>[t[3]*e[0]+t[0]*e[3]+t[1]*e[2]-t[2]*e[1],t[3]*e[1]-t[0]*e[2]+t[1]*e[3]+t[2]*e[0],t[3]*e[2]+t[0]*e[1]-t[1]*e[0]+t[2]*e[3],t[3]*e[3]-t[0]*e[0]-t[1]*e[1]-t[2]*e[2]],Qr=t=>[-t[0],-t[1],-t[2],t[3]],us=(t,e)=>{let o=Math.hypot(t[0],t[1],t[2])||1,n=Math.sin(e/2);return[t[0]/o*n,t[1]/o*n,t[2]/o*n,Math.cos(e/2)]},Kh=(t,e,o)=>an(us([0,0,1],o*Math.PI/180),an(us([0,1,0],e*Math.PI/180),us([1,0,0],t*Math.PI/180))),zd=t=>{let e=Math.hypot(...t)||1;return t.map(o=>o/e)},da=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],Jl=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],hs=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],Sd=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2],Zh=t=>Math.hypot(t[0],t[1],t[2]),Zl=t=>{let e=Zh(t)||1;return[t[0]/e,t[1]/e,t[2]/e]},t1=(t,e)=>[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]],Ak=(t,e)=>{let o=[t[0],t[1],t[2]],n=hs(t1(o,e),2);return Jl(Jl(e,hs(n,t[3])),t1(o,n))},Tk=(t,e)=>{let o=t1(t,e),n=1+Sd(t,e);return n<1e-6?[0,0,1,0]:zd([o[0],o[1],o[2],n])};function pr(t,e,o){let[n,r,a,s]=e,i=n*n,c=r*r,h=a*a,l=n*r,d=n*a,u=r*a,p=s*n,f=s*r,v=s*a;return[(1-2*(c+h))*o[0],2*(l+v)*o[0],2*(d-f)*o[0],0,2*(l-v)*o[1],(1-2*(i+h))*o[1],2*(u+p)*o[1],0,2*(d+f)*o[2],2*(u-p)*o[2],(1-2*(i+c))*o[2],0,t[0],t[1],t[2],1]}function Jn(t,e){let o=new Array(16);for(let n=0;n<4;n++)for(let r=0;r<4;r++)o[n*4+r]=t[r]*e[n*4]+t[4+r]*e[n*4+1]+t[8+r]*e[n*4+2]+t[12+r]*e[n*4+3];return o}function kd(t){let e=Math.hypot(t[0],t[1],t[2]),o=Math.hypot(t[4],t[5],t[6]),n=Math.hypot(t[8],t[9],t[10]),r=t[0]/e,a=t[1]/e,s=t[2]/e,i=t[4]/o,c=t[5]/o,h=t[6]/o,l=t[8]/n,d=t[9]/n,u=t[10]/n,p=r+c+u,f;if(p>0){let v=Math.sqrt(p+1)*2;f=[(h-d)/v,(l-s)/v,(a-i)/v,v/4]}else if(r>c&&r>u){let v=Math.sqrt(1+r-c-u)*2;f=[v/4,(i+a)/v,(l+s)/v,(h-d)/v]}else if(c>u){let v=Math.sqrt(1+c-r-u)*2;f=[(i+a)/v,v/4,(d+h)/v,(l-s)/v]}else{let v=Math.sqrt(1+u-r-c)*2;f=[(l+s)/v,(d+h)/v,v/4,(a-i)/v]}return zd(f)}var Jh={LeftUpLeg:[-62,10,0],LeftLeg:[122,0,0],LeftFoot:[30,0,0],RightUpLeg:[0,-3,-2],RightLeg:[4,0,0],RightFoot:[35,-12,0],Neck:[10,0,0],Head:[6,0,0],LeftShoulder:[0,0,6],LeftArm:[-112.4,3.4,62.5],LeftForeArm:[0,-122.6,0],LeftHand:[0,0,-10],RightShoulder:[0,0,0],RightArm:[0,78,-8],RightForeArm:[0,14,0],RightHand:[0,0,0]};for(let t of["Left","Right"]){let e=t==="Left"?-1:1,o=t==="Left"?1:.35;["Index","Middle","Ring","Pinky"].forEach((n,r)=>{Jh[t+"Hand"+n+"1"]=[0,0,e*(18+r*6)*o],Jh[t+"Hand"+n+"2"]=[0,0,e*(26+r*6)*o],Jh[t+"Hand"+n+"3"]=[0,0,e*16*o]})}function ai(t,e,o){let n=t-e;return n-=Math.round(n),Math.exp(-(n/o)*(n/o))}function sx(t){let e=9+20*Math.cos(2*Math.PI*t),o=4+13*ai(t,.14,.07)+57*ai(t,.72,.12),n=5*ai(t,.06,.04)-9*ai(t,.42,.12)+17*ai(t,.62,.05)-3*ai(t,.85,.1),r=-26*ai(t,.58,.06);return{hip:e,knee:o,ankle:n,toe:r}}function Lk(t){let e=(t%1+1)%1,o=sx(e),n=sx(e+.5),r=Math.cos(2*Math.PI*e),a=Math.sin(2*Math.PI*e);return{swing:{LeftArm:[16*r,0,0],RightArm:[-16*r,0,0],LeftForeArm:[0,-14-8*Math.max(0,-r),0],RightForeArm:[0,14+8*Math.max(0,r),0]},pose:{Hips:[0,5*a,1.5*Math.cos(4*Math.PI*e)],Spine1:[3,-4*a,0],LeftUpLeg:[-o.hip,0,0],LeftLeg:[o.knee,0,0],LeftFoot:[o.ankle,0,0],LeftToeBase:[o.toe,0,0],RightUpLeg:[-n.hip,0,0],RightLeg:[n.knee,0,0],RightFoot:[n.ankle,0,0],RightToeBase:[n.toe,0,0],LeftArm:[0,0,-78],RightArm:[0,0,78],LeftHand:[0,0,-8],RightHand:[0,0,8]},sway:.022*r}}var ix=`
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
}`,e1=Ya(),cx=`#extension GL_OES_standard_derivatives : enable
precision highp float;
${Ed}
uniform float time;
${hx.roomGLSL()}
${e1.lanternGLSL(e1.TREE_LANTERN)}
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
${fx()}
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
}`;function Nk(t,e){let o=t.texture({data:[[[120,100,90,255]]],min:"linear",mag:"linear"});return fetch(e).then(n=>{if(!n.ok)throw new Error("Could not load "+e);return n.blob()}).then(n=>createImageBitmap(n,{premultiplyAlpha:"none"}).catch(()=>new Promise((r,a)=>{let s=new Image;s.onload=()=>r(s),s.onerror=a,s.src=URL.createObjectURL(n)}))).then(n=>o({data:n,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(n=>console.error(n)),o}var ux={w:.13,h:.2},Qh=t=>.011*(1-Math.pow(1-t,3));function Rk(){let t=[],e=[],o=[],n=[],r=[],a=(v,m,g,x,y,w,M)=>{let _=t.length/3;[v,m,g,x].forEach((k,O)=>{t.push(...k),e.push(...y),o.push(...M[O]),n.push(w)}),r.push(_,_+1,_+2,_,_+2,_+3)},{w:s,h:i}=ux,c=i/2,h=[[0,1],[1,1],[1,0],[0,0]],l=-.006,d=s+.001,u=c+.001;a([0,l,-u],[d,l,-u],[d,l,u],[0,l,u],[0,-1,0],1,[[0,1],[1,1],[1,0],[0,0]]),a([0,l+.001,-u],[0,l+.001,u],[d,l+.001,u],[d,l+.001,-u],[0,1,0],2,h),a([-d,l,-u],[0,l,-u],[0,l,u],[-d,l,u],[0,-1,0],2,h),a([-d,l+.001,-u],[-d,l+.001,u],[0,l+.001,u],[0,l+.001,-u],[0,1,0],2,h);let p=8;for(let v of[1,-1]){for(let g=0;g<p;g++){let x=g/p,y=(g+1)/p,w=(.002+x*(s-.002))*v,M=(.002+y*(s-.002))*v,_=Qh(x),k=Qh(y),O=v>0?x:1-x,N=v>0?y:1-y,G=1,$=-(k-_)/(M-w);a([w,_,-c],[M,k,-c],[M,k,c],[w,_,c],[$,G,0],3,[[O,1],[N,1],[N,0],[O,0]]),a([w,l+.001,c],[M,l+.001,c],[M,k,c],[w,_,c],[0,0,1],4,h),a([w,_,-c],[M,k,-c],[M,l+.001,-c],[w,l+.001,-c],[0,0,-1],4,h)}let m=s*v;a([m,l+.001,-c],[m,Qh(1),-c],[m,Qh(1),c],[m,l+.001,c],[v,0,0],4,h)}let f=10;for(let v=0;v<f;v++){let m=v/f,g=(v+1)/f,x=t.length/3;for(let[y,w]of[[m,-c],[g,-c],[g,c],[m,c]])t.push(y,0,w),e.push(0,1,0),o.push(y,(w+c)/i),n.push(5);r.push(x,x+1,x+2,x,x+2,x+3)}return{pos:t,nrm:e,uv:o,kind:n,idx:r}}function Ok(){if(typeof document=="undefined")return null;let t=document.createElement("canvas");t.width=512,t.height=768;let e=t.getContext("2d");e.fillStyle="#ebe5d8",e.fillRect(0,0,512,768);let o=7,n=()=>(o=o*16807%2147483647,o/2147483647),r=(s,i,c,h,l,d,u)=>{for(let p=0;p<d;p++){let f=s+(n()-.5)*c*2,v=i+(n()-.5)*h*2,m=20+n()*60,g=e.createRadialGradient(f,v,0,f,v,m);g.addColorStop(0,`rgba(${l},${u})`),g.addColorStop(1,`rgba(${l},0)`),e.fillStyle=g,e.fillRect(f-m,v-m,m*2,m*2)}},a=e.createRadialGradient(236,280,10,256,300,125);a.addColorStop(0,"#3d4866"),a.addColorStop(1,"#232a3d"),e.fillStyle=a,e.beginPath(),e.arc(256,300,122,0,Math.PI*2),e.fill(),e.fillStyle="#b8873f",e.beginPath(),e.moveTo(64,452);for(let s=64;s<=448;s+=16)e.lineTo(s,446+n()*4);for(let s=448;s>=64;s-=16)e.lineTo(s,466+n()*4);e.fill(),e.strokeStyle="#2b2f3a",e.lineCap="round",[[120,392,500,5],[160,352,530,4],[205,307,558,3]].forEach(([s,i,c,h])=>{e.lineWidth=h,e.beginPath(),e.moveTo(s,c),e.lineTo(i,c),e.stroke()});for(let s=0;s<9e3;s++)e.fillStyle=`rgba(90,80,60,${n()*.05})`,e.fillRect(n()*512,n()*768,1,1);return t}var Ck=`
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
		float r = u * ${ux.w.toFixed(3)};
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
}`,Pk=`
precision highp float;
${Ed}
uniform float time;
${e1.lanternGLSL(e1.TREE_LANTERN)}
uniform sampler2D cover;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_kind;
${fx()}
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
}`;function $k(){let t=[],e=[],o=[],n=[],r=[],a=[.36,.11,.07],s=[.1,.07,.05],i=[.78,.76,.72],c=[.55,.41,.26],h=[.8,.55,.22],l=[[0,-.15,h,2],[.0012,-.147,h,2],[.004,-.138,h,2],[.0058,-.125,c,2],[.0064,-.112,c,2],[.006,-.104,c,2],[.0066,-.102,i,1],[.0066,-.08,i,1],[.0062,-.074,i,1],[.0068,-.072,i,1],[.007,-.066,i,1],[.0058,-.064,a,0],[.0062,-.04,a,0],[.0058,0,a,0],[.0046,.06,a,0],[.0036,.11,a,0],[.003,.13,s,0],[.0026,.136,s,0],[0,.139,s,0]],d=16;for(let u=0;u<l.length;u++){let[p,f,v,m]=l[u],g=m===2?.45:1;for(let x=0;x<=d;x++){let y=x/d*Math.PI*2;t.push(Math.cos(y)*p,f,Math.sin(y)*p*g);let w=Math.max(u-1,0),M=Math.min(u+1,l.length-1),_=l[M][0]-l[w][0],k=l[M][1]-l[w][1],O=Math.hypot(_,k)||1;e.push(Math.cos(y)*k/O,-_/O,Math.sin(y)*k/O/g),o.push(...v),n.push(m)}}for(let u=0;u<l.length-1;u++)for(let p=0;p<d;p++){let f=u*(d+1)+p,v=f+d+1;r.push(f,v,f+1,f+1,v,v+1)}return{pos:t,nrm:e,col:o,mat:n,idx:r}}var Ik=`
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
}`,qk=`
precision highp float;
${Ed}
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
}`,Dk=`
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
}`,Fk=`
precision highp float;
uniform float pulse;
varying vec2 v_c;
void main() {
	float d = length(v_c);
	float g = exp(-d * d * 6.0) * 0.10 + exp(-d * d * 30.0) * 0.08;
	gl_FragColor = vec4(vec3(1.0, 0.80, 0.45) * g * (0.75 + 0.25 * pulse), 1.0);
}`;Ad.exports=t=>{let e="res/avatar/",o=null,n=Date.now(),r=()=>typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-n)/1e3,a={glowPos:[si.x,1.9,si.z],glow:0};Promise.all([fetch(e+"avatar.json").then(N=>N.json()),fetch(e+"avatar.bin").then(N=>N.arrayBuffer())]).then(([N,G])=>{o=h(N,G)}).catch(N=>console.error(N));let s=null;Promise.all([fetch(e+"motion.json").then(N=>N.ok?N.json():null),fetch(e+"motion.bin").then(N=>N.ok?N.arrayBuffer():null)]).then(([N,G])=>{if(!N||!G)return;let $={};for(let V in N.clips){let D=N.clips[V],U=D.bones.length,ht=new Float32Array(G,D.mean,U*4),jt={};D.bones.forEach((Lt,gt)=>{jt[Lt]=[ht[gt*4],ht[gt*4+1],ht[gt*4+2],ht[gt*4+3]]}),$[V]=Object.assign({},D,{Q:new Int16Array(G,D.q,D.frames*U*4),H:new Float32Array(G,D.hips,D.frames*3),meanQ:jt})}s=$}).catch(()=>{});function i(N,G){let $=N.frames,V=N.bones.length,D=(G%$+$)%$,U=Math.floor(D)%$,ht=(U+1)%$,jt=D-Math.floor(D),Lt={};for(let W=0;W<V;W++){let st=(U*V+W)*4,wt=(ht*V+W)*4,$t=N.Q[st],Ut=N.Q[st+1],be=N.Q[st+2],De=N.Q[st+3],He=N.Q[wt],Ot=N.Q[wt+1],ie=N.Q[wt+2],Oe=N.Q[wt+3];$t*He+Ut*Ot+be*ie+De*Oe<0&&(He=-He,Ot=-Ot,ie=-ie,Oe=-Oe),Lt[N.bones[W]]=zd([$t+(He-$t)*jt,Ut+(Ot-Ut)*jt,be+(ie-be)*jt,De+(Oe-De)*jt])}let gt=U*3,tt=ht*3;return{q:Lt,hips:[N.H[gt]+(N.H[tt]-N.H[gt])*jt,N.H[gt+1]+(N.H[tt+1]-N.H[gt+1])*jt,N.H[gt+2]+(N.H[tt+2]-N.H[gt+2])*jt]}}let c=t.texture({data:[[[255,255,255,255]]]});function h(N,G){let $=(B,yt)=>new Float32Array(G,B,yt),V=N.bones,D=V.length,U={};V.forEach((B,yt)=>{U[B.name]=yt});let ht=[];for(let B=0;B<D;B++)ht.push(Array.from($(N.ibm+B*64,16)));let jt=V.map(B=>pr(B.t,B.r,B.s)),Lt=[];for(let B=0;B<D;B++){let yt=V[B].parent;Lt[B]=yt<0?jt[B]:Jn(Lt[yt],jt[B])}let gt=Lt.map(kd),tt=N.meshes.map(B=>{let yt=$(B.pos,B.n*3),At=$(B.nrm,B.n*3),Et=$(B.uv,B.n*2),ne=new Uint8Array(G,B.jnt,B.n*4),Te=$(B.wgt,B.n*4),me=new Uint16Array(G,B.idx,B.ni),re={};for(let qe in B.morphs){let Ko=B.morphs[qe];re[qe]={idx:new Uint16Array(G,Ko.idx,Ko.n),d:$(Ko.d,Ko.n*3)}}let he=new Float32Array(B.n*3),de=new Float32Array(B.n*3),We=new Float32Array(B.n*3),ge=t.buffer({data:he,usage:"dynamic"}),se=t.buffer({data:de,usage:"dynamic"}),Ee=/avaturn_hair/.test(B.name),Qt=/EyeAO|Eyelash/.test(B.name),Ie=/Body|Head/.test(B.name),zo=B.kind||0;return{m:B,pos:yt,nrm:At,uv:Et,jnt:ne,wgt:Te,idx:me,morphs:re,outP:he,outN:de,work:We,pb:ge,nbuf:se,tex:B.tex?Nk(t,e+B.tex):c,kind:zo,alphaScale:/EyeAO/.test(B.name)?.25:1,blend:B.blend||Ee,alphaCut:Ee?.35:Qt?.02:0,skin:Ie?1:0}}),W=t({vert:ix,frag:cx,attributes:{position:t.prop("pb"),normal:t.prop("nb"),uv:t.prop("uv")},elements:t.prop("el"),uniforms:{tex:t.prop("tex"),alphaCut:t.prop("alphaCut"),skin:t.prop("skin"),kind:t.prop("kind"),alphaScale:t.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>_&&!k?_.lamp:[0,0,0,0],court:()=>_||k?0:1,candle:()=>k?1:0},cull:{enable:!1}}),st=t({vert:ix,frag:cx,attributes:{position:t.prop("pb"),normal:t.prop("nb"),uv:t.prop("uv")},elements:t.prop("el"),uniforms:{tex:t.prop("tex"),alphaCut:t.prop("alphaCut"),skin:t.prop("skin"),kind:t.prop("kind"),alphaScale:t.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>_&&!k?_.lamp:[0,0,0,0],court:()=>_||k?0:1,candle:()=>k?1:0},cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"one minus src alpha"}}}),wt=.3;for(let B of tt)if(B.uvBuf=t.buffer(B.uv),/Body/.test(B.m.name)){let yt=[],At=[];for(let Et=0;Et<B.idx.length;Et+=3){let ne=B.idx[Et],Te=B.idx[Et+1],me=B.idx[Et+2];(B.pos[ne*3+1]<wt&&B.pos[Te*3+1]<wt&&B.pos[me*3+1]<wt?At:yt).push(ne,Te,me)}B.el=t.elements({data:new Uint16Array(yt),type:"uint16"}),At.length&&(B.sockEl=t.elements({data:new Uint16Array(At),type:"uint16"}))}else B.el=t.elements({data:B.idx,type:"uint16"});let $t=Lt[U.Hips],Ut=us([1,0,0],-Math.PI/2),be=Jn(pr([si.x-$t[12]*L0,si.hipY-$t[14]*L0,si.z+$t[13]*L0],Ut,[1,1,1]),pr([0,0,0],[0,0,0,1],[L0,L0,L0])),De=new Array(D),He=-1,Ot=(B,yt,At)=>Jn(pr([B,0,yt],us([0,1,0],At),[1,1,1]),pr([0,0,0],[0,0,0,1],[L0,L0,L0])),ie=["LeftFoot","RightFoot","LeftToeBase","RightToeBase"].map(B=>U[B]),Oe=ie.map(B=>Lt[B][13]*L0);function Ue(B){if(s&&s.walk)return Ge(B);let yt=Lk(B.phase),At={},Et=de=>{for(let We in de){let ge=de[We],se=Kh(ge[0],ge[1],ge[2]);At[We]=At[We]?an(At[We],se):se}};Et(yt.swing),Et(yt.pose);let ne=Math.cos(B.heading),Te=-Math.sin(B.heading),me=Ot(B.x+ne*yt.sway,B.z+Te*yt.sway,B.heading),re=new Array(D);for(let de=0;de<D;de++){let We=V[de],ge=jt[de],se=At[We.name];if(se){let Ee=gt[de],Qt=an(Qr(Ee),an(se,Ee));ge=pr(We.t,an(We.r,Qt),We.s)}re[de]=We.parent<0?Jn(me,ge):Jn(re[We.parent],ge)}let he=1/0;ie.forEach((de,We)=>{he=Math.min(he,re[de][13]-Oe[We])});for(let de=0;de<D;de++)re[de]=re[de].slice(),re[de][13]-=he,De[de]=Jn(re[de],ht[de]);return{blink:0}}function Ge(B){let yt=s.walk,At=i(yt,(B.phase+yt.phase0)*yt.frames),Et=Ot(B.x,B.z,B.heading),ne=new Array(D),Te=U.Hips;for(let re=0;re<D;re++){let he=V[re],de=jt[re],We=At.q[he.name];if(We){let ge=gt[re],se=an(Qr(ge),an(We,ge)),Ee=re===Te?[he.t[0]+At.hips[0],he.t[1]+At.hips[1],he.t[2]+At.hips[2]]:he.t;de=pr(Ee,an(he.r,se),he.s)}ne[re]=he.parent<0?Jn(Et,de):Jn(ne[he.parent],de)}let me=1/0;ie.forEach((re,he)=>{me=Math.min(me,ne[re][13]-Oe[he])});for(let re=0;re<D;re++)ne[re]=ne[re].slice(),ne[re][13]-=me,De[re]=Jn(ne[re],ht[re]);return{blink:0}}function ve(B,yt){let At=Math.sin(B*2*Math.PI/4.6),Et=Math.sin(B*.37)*.6+Math.sin(B*.83+1)*.4,ne={LeftUpLeg:[-86,-6,0],RightUpLeg:[-84,7,0],LeftLeg:[88,0,0],RightLeg:[82,0,0],LeftFoot:[-4,0,0],RightFoot:[-2,0,0],Spine:[6,0,0],Spine1:[5+At*.8,0,0],Spine2:[4+At*.6,0,0],Neck:[10,0,0],Head:[12+Et*2,Et*2.5,0],LeftArm:[0,0,-72],RightArm:[0,0,72],LeftForeArm:[0,-62,0],RightForeArm:[0,62,0],LeftHand:[0,0,-10],RightHand:[0,0,10]},Te={};for(let ge in ne){let se=ne[ge];Te[ge]=Kh(se[0],se[1],se[2])}let me=Ot(yt.x,yt.z,yt.heading),re=new Array(D);for(let ge=0;ge<D;ge++){let se=V[ge],Ee=jt[ge],Qt=Te[se.name];if(Qt){let Ie=gt[ge],zo=an(Qr(Ie),an(Qt,Ie));Ee=pr(se.t,an(se.r,zo),se.s)}re[ge]=se.parent<0?Jn(me,Ee):Jn(re[se.parent],Ee)}let de=re[U.Hips][13]-(yt.y+.1);for(let ge=0;ge<D;ge++)re[ge]=re[ge].slice(),re[ge][13]-=de,De[ge]=Jn(re[ge],ht[ge]);let We=B%4.1;return{blink:We<.16?Math.sin(We/.16*Math.PI):0}}let ye=B=>[Lt[B][12],Lt[B][13],Lt[B][14]],mt=(B,yt)=>{let At=Zl(B),Et=Zl(da(yt,hs(At,Sd(yt,At)))),ne=t1(At,Et);return kd([At[0],At[1],At[2],0,Et[0],Et[1],Et[2],0,ne[0],ne[1],ne[2],0,0,0,0,1])},ue={};for(let B of["Left","Right"]){let yt=U[B+"Arm"],At=U[B+"ForeArm"],Et=U[B+"Hand"],ne=U[B+"HandMiddle1"];ue[B]={a:yt,f:At,h:Et,upper:Zh(da(ye(At),ye(yt)))*L0,fore:Zh(da(ye(Et),ye(At)))*L0,dir0:Zl(da(ye(At),ye(yt))),qf0:mt(da(ye(Et),ye(At)),[0,1,0]),qh0:mt(da(ye(ne),ye(Et)),[0,1,0])}}let Be={};for(let B of["Left","Right"])Be[ue[B].a]={side:B,part:0},Be[ue[B].f]={side:B,part:1},Be[ue[B].h]={side:B,part:2};function Le(B,yt,At){if(!B||!B.length)return{x:.5,lift:0,press:0,finger:1,busy:0};let Et=0,ne=B.length-1,Te=-1;for(;Et<=ne;){let Ko=Et+ne>>1;B[Ko].t<=yt?(Te=Ko,Et=Ko+1):ne=Ko-1}let me=B[B.length-1],re=B[0],he=Te>=0?B[Te]:{t:me.t-At,x:me.x,w:me.w},de=Te+1<B.length?B[Te+1]:{t:re.t+At,x:re.x,w:re.w},We=Math.max(.05,de.t-he.t),ge=Math.min(.14,We*.45),se=Math.max(0,Math.min(1,(yt-he.t-ge)/Math.max(We-ge-.03,.02))),Ee=se*se*(3-2*se),Qt=yt-he.t,Ie=(.55+.45*he.w)*Math.exp(-Qt/.11),zo=de.t-yt,qe=zo<.05?(.55+.45*de.w)*(1-zo/.05):0;return{x:he.x+(de.x-he.x)*Ee,lift:Math.sin(Math.PI*se)*Math.min(.05,.012+We*.03)*(We>2.5?.4:1),press:Math.max(Ie,qe),finger:qe>Ie?((Te+1)*7+3)%4:(Math.max(Te,0)*7+3)%4,busy:Math.exp(-Qt/.9)}}let oe={lean:0,turn:0,nod:0,pedal:0,last:-1},So=["Index","Middle","Ring","Pinky"];function E(B){let yt=hx.PLAY,At=ax.cues,Et=ax.time(),ne=At&&At.dur||158,Te={Left:Le(At&&At.left,Et,ne),Right:Le(At&&At.right,Et,ne)},me=.35;if(At&&At.level&&At.level.length){let yo=Et*8,Lo=Math.floor(yo)%At.level.length,jn=(Lo+1)%At.level.length;me=At.level[Lo]+(At.level[jn]-At.level[Lo])*(yo-Math.floor(yo))}let re=oe.last<0?0:Math.min(.1,Math.max(0,B-oe.last));oe.last=B;let he=yo=>Math.min(1,re*yo);oe.lean+=(me-oe.lean)*he(1.2),oe.turn+=(Te.Right.busy-Te.Left.busy-oe.turn)*he(1.5),oe.nod+=(Math.max(Te.Right.press,Te.Left.press*.7)-oe.nod)*he(6),oe.pedal+=((Te.Left.busy>.35?1:.15)-oe.pedal)*he(5);let de=Math.sin(B*2*Math.PI/4.6),We=Math.sin(Et*.41)*.6+Math.sin(Et*.17+1)*.4,ge={LeftUpLeg:[-80,-9,0],RightUpLeg:[-77,9,0],LeftLeg:[86,0,0],RightLeg:[64,0,0],LeftFoot:[-2,0,0],RightFoot:[12-10*oe.pedal,0,0],Spine:[9+3.5*oe.lean+We*1.6,oe.turn*2.5,-oe.turn*1.6],Spine1:[7+de*.8+2.5*oe.lean,oe.turn*2.5,-oe.turn*1.2],Spine2:[6+de*.6+We*.8,oe.turn*1.5,0],Neck:[13+3*oe.lean,oe.turn*3,0],Head:[15+oe.nod*3.5+We*1.5,oe.turn*5,We*1.5]};for(let yo of["Left","Right"]){let Lo=yo==="Left"?-1:1,jn=Te[yo];So.forEach((Y,xt)=>{let ce=xt===jn.finger?jn.press:jn.press*.2;ge[yo+"Hand"+Y+"1"]=[0,0,Lo*(20+3*xt+20*ce)],ge[yo+"Hand"+Y+"2"]=[0,0,Lo*(26+4*xt-6*ce)],ge[yo+"Hand"+Y+"3"]=[0,0,Lo*14]}),ge[yo+"HandThumb1"]=[0,Lo*-18,Lo*10]}let se={};for(let yo in ge){let Lo=ge[yo];se[yo]=Kh(Lo[0],Lo[1],Lo[2])}let Ee=Lt[U.Hips][13]*L0,Qt=Jn(pr([yt.stoolX,yt.stoolTop+.1-Ee,yt.stoolFront+.15],us([0,1,0],yt.heading),[1,1,1]),pr([0,0,0],[0,0,0,1],[L0,L0,L0])),Ie=(yt.keyX0+yt.keyX1)/2,zo={};for(let yo of["Left","Right"]){let Lo=Te[yo],jn=yo==="Left"?Ie-.4+.33*Lo.x:Ie+.07+.33*Lo.x;zo[yo]=[jn,yt.keyTop+.062+Lo.lift-Lo.press*.012,yt.keyFront+.075]}let qe=new Array(D),Ko={},br=[0,1,0];for(let yo=0;yo<D;yo++){let Lo=V[yo],jn=jt[yo],Y=se[Lo.name],xt=Be[yo];if(xt){let ce=ue[xt.side];if(xt.part===0){let ze=qe[Lo.parent],Ce=Jn(ze,jt[yo]),hn=[Ce[12],Ce[13],Ce[14]],u0=an(kd(ze),Qr(gt[Lo.parent])),O0=da(zo[xt.side],hn),un=Zh(O0),E0=(ce.upper+ce.fore)*.995;un>E0&&(O0=hs(O0,E0/un),un=E0);let dn=hs(O0,1/un),Eo=(ce.upper*ce.upper-ce.fore*ce.fore+un*un)/(2*un),n0=Math.sqrt(Math.max(0,ce.upper*ce.upper-Eo*Eo)),en=[xt.side==="Left"?-.6:.6,-.8,.3];en=Zl(da(en,hs(dn,Sd(en,dn))));let Wn=Jl(hn,Jl(hs(dn,Eo),hs(en,n0)));ce.T=Jl(hn,O0),ce.elbow=Wn;let X0=Zl(da(Wn,hn)),Y0=an(Tk(Ak(u0,ce.dir0),X0),u0);Ko[yo]=Y0,Y=an(Qr(u0),Y0)}else if(xt.part===1){let ze=an(mt(da(ce.T,ce.elbow),br),Qr(ce.qf0));Ko[yo]=ze,Y=an(Qr(Ko[Lo.parent]),ze)}else{let ze=Te[xt.side],Ce=an(mt([xt.side==="Left"?.12:-.12,-.2-.1*ze.press,-1],br),Qr(ce.qh0));Ko[yo]=Ce,Y=an(Qr(Ko[Lo.parent]),Ce)}}if(Y){let ce=gt[yo],ze=an(Qr(ce),an(Y,ce));jn=pr(Lo.t,an(Lo.r,ze),Lo.s)}qe[yo]=Lo.parent<0?Jn(Qt,jn):Jn(qe[Lo.parent],jn)}for(let yo=0;yo<D;yo++)De[yo]=Jn(qe[yo],ht[yo]);a.pianist={head:[qe[U.Head][12],qe[U.Head][13],qe[U.Head][14]]};let ga=B%4.3;return{blink:ga<.16?Math.sin(ga/.16*Math.PI):0}}function ho(B,yt){if(k)return E(B);if(_)return ve(B,_);if(yt)return Ue(yt);let At=Math.sin(B*2*Math.PI/4.2),Et=B%3.7,ne=Et<.16?Math.sin(Et/.16*Math.PI):0,Te=Math.sin(B*.45),me=Math.sin(B*.31+.8),re=Math.max(0,Math.sin(B*.085)-.75)*4,he={RightArm:[0,-22*re,11*Te],RightForeArm:[0,8+26*re,0],RightHand:[38*me,0,6*Math.sin(B*.7)],LeftUpLeg:[0,0,3.2*Math.sin(B*.36)],RightFoot:[5*Math.sin(B*.52+.4),0,0],Head:[0,1.6*Math.sin(B*.21),0]};["Index","Middle","Ring","Pinky"].forEach((Qt,Ie)=>{let zo=Math.sin(B*1.1-Ie*.5);he["RightHand"+Qt+"1"]=[0,0,8+12*zo],he["RightHand"+Qt+"2"]=[0,0,6+10*zo]});let de={},We=(Qt,Ie)=>{for(let zo in Qt){let qe=Qt[zo],Ko=Kh(qe[0]*Ie,qe[1]*Ie,qe[2]*Ie);de[zo]=de[zo]?an(de[zo],Ko):Ko}};We(Jh,1),We({Spine1:[At*.8,0,0],Spine2:[At*.6,0,0]},1),We(he,1);let ge=new Array(D),se=new Array(D);for(let Qt=0;Qt<D;Qt++){let Ie=V[Qt],zo=jt[Qt],qe=de[Ie.name];if(qe){let Ko=gt[Qt],br=an(Qr(Ko),an(qe,Ko));zo=pr(Ie.t,an(Ie.r,br),Ie.s)}ge[Qt]=Ie.parent<0?Jn(be,zo):Jn(ge[Ie.parent],zo),se[Qt]=null}for(let Qt=0;Qt<D;Qt++)De[Qt]=Jn(ge[Qt],ht[Qt]);let Ee=Qt=>[Qt[12],Qt[13],Qt[14]];return a.headPos=Ee(ge[U.Head]),a.hipsPos=Ee(ge[U.Hips]),a.headM=ge[U.Head],{blink:ne}}function io(B,yt){let{pos:At,nrm:Et,jnt:ne,wgt:Te,outP:me,outN:re,work:he,m:de}=B,We=de.n,ge=At;if(yt){he.set(At);for(let se in B.morphs){let Ee=yt[se]||0;if(Ee<=0)continue;let Qt=B.morphs[se];for(let Ie=0;Ie<Qt.idx.length;Ie++){let zo=Qt.idx[Ie]*3;he[zo]+=Qt.d[Ie*3]*Ee,he[zo+1]+=Qt.d[Ie*3+1]*Ee,he[zo+2]+=Qt.d[Ie*3+2]*Ee}}ge=he}for(let se=0;se<We;se++){let Ee=ge[se*3],Qt=ge[se*3+1],Ie=ge[se*3+2],zo=Et[se*3],qe=Et[se*3+1],Ko=Et[se*3+2],br=0,ga=0,yo=0,Lo=0,jn=0,Y=0;for(let ce=0;ce<4;ce++){let ze=Te[se*4+ce];if(ze===0)continue;let Ce=De[ne[se*4+ce]];br+=ze*(Ce[0]*Ee+Ce[4]*Qt+Ce[8]*Ie+Ce[12]),ga+=ze*(Ce[1]*Ee+Ce[5]*Qt+Ce[9]*Ie+Ce[13]),yo+=ze*(Ce[2]*Ee+Ce[6]*Qt+Ce[10]*Ie+Ce[14]),Lo+=ze*(Ce[0]*zo+Ce[4]*qe+Ce[8]*Ko),jn+=ze*(Ce[1]*zo+Ce[5]*qe+Ce[9]*Ko),Y+=ze*(Ce[2]*zo+Ce[6]*qe+Ce[10]*Ko)}me[se*3]=br,me[se*3+1]=ga,me[se*3+2]=yo;let xt=Math.hypot(Lo,jn,Y)||1;re[se*3]=Lo/xt,re[se*3+1]=jn/xt,re[se*3+2]=Y/xt}de.grid&&!Ct&&!_&&!k&&dt(B),B.sway&&je(B),B.pb.subdata(me),B.nbuf.subdata(re)}function dt(B){let[yt,At]=B.m.grid,Et=B.outP,ne=B.outN,Te=lx.seat+.012;for(let me=1;me<yt;me++){let re=Math.pow(1-me/(yt-1),1.5);for(let he=0;he<At;he++){let de=(me*At+he)*3;Et[de+1]>Te?Et[de+1]=Te+(Et[de+1]-Te)*Math.max(re,.15):Et[de+1]=Te}}for(let me=0;me<ne.length;me+=3)ne[me]=0,ne[me+1]=1,ne[me+2]=0}let Ct=!1,Tt=(B,yt,At,Et,ne)=>({bone:U[B],rate:yt,damp:At,drag:Et,most:ne,x:[0,0,0],v:[0,0,0],p:null,vel:[0,0,0]}),eo={head:Tt("Head",15,.32,.012,.035),chest:Tt("Spine2",9,.38,.03,.1),hips:Tt("Hips",7,.42,.045,.16)},Ke=-1;function Ye(B){let yt=Ke<0?0:B-Ke;Ke=B;for(let At in eo){let Et=eo[At],ne=De[Et.bone],Te=Lt[Et.bone],me=Te[12],re=Te[13],he=Te[14],de=[ne[0]*me+ne[4]*re+ne[8]*he+ne[12],ne[1]*me+ne[5]*re+ne[9]*he+ne[13],ne[2]*me+ne[6]*re+ne[10]*he+ne[14]];if(!Et.p||!(yt>0)||yt>.25||Math.hypot(de[0]-Et.p[0],de[1]-Et.p[1],de[2]-Et.p[2])>.5){Et.p=de,Et.x=[0,0,0],Et.v=[0,0,0],Et.vel=[0,0,0];continue}let We=[(de[0]-Et.p[0])/yt,(de[1]-Et.p[1])/yt,(de[2]-Et.p[2])/yt],ge=Math.max(1,Math.ceil(yt/.016)),se=yt/ge;for(let Qt=0;Qt<3;Qt++){let Ie=Math.max(-30,Math.min(30,(We[Qt]-Et.vel[Qt])/yt)),zo=-We[Qt]*Et.drag;for(let qe=0;qe<ge;qe++)Et.v[Qt]+=((zo-Et.x[Qt])*Et.rate*Et.rate-2*Et.damp*Et.rate*Et.v[Qt]-Ie)*se,Et.x[Qt]+=Et.v[Qt]*se}let Ee=Math.hypot(Et.x[0],Et.x[1],Et.x[2]);if(Ee>Et.most){let Qt=Et.most/Ee;Et.x=[Et.x[0]*Qt,Et.x[1]*Qt,Et.x[2]*Qt]}Et.p=de,Et.vel=We}}for(let B of tt){let yt=B.m,At=yt.n,Et=null,ne=null;if(yt.kind===9){ne="head",Et=new Float32Array(At);for(let Te=0;Te<At;Te++){let me=B.uv[Te*2]<-.5?0:B.uv[Te*2+1];Et[Te]=me*me}}else if(yt.name==="scarf"){ne="chest",Et=new Float32Array(At);for(let Te=0;Te<At;Te++)Et[Te]=l(1.52,1.12,B.pos[Te*3+1])}else if(yt.grid){ne="hips",Et=new Float32Array(At);let Te=yt.grid[0],me=yt.grid[1];for(let re=0;re<At;re++)Et[re]=Math.pow(Math.floor(re/me)/(Te-1),1.6)}Et&&(B.sway=Et,B.spring=eo[ne],B.loose=ne)}function je(B){if(!Ct&&!k&&!_)return;let yt=B.spring.x,At=B.sway,Et=B.outP;if(!(Math.abs(yt[0])+Math.abs(yt[1])+Math.abs(yt[2])<1e-5))for(let ne=0,Te=At.length;ne<Te;ne++){let me=At[ne];me>0&&(Et[ne*3]+=yt[0]*me,Et[ne*3+1]+=yt[1]*me,Et[ne*3+2]+=yt[2]*me)}}function Oo(B,yt){Ct=!!yt;let At=ho(B,yt);Ye(B);let Et={eyeBlinkLeft:At.blink,eyeBlinkRight:At.blink};for(let ne of tt)io(ne,Object.keys(ne.morphs).length?Et:null);a.pose=At}return{parts:tt,update:Oo,drawOpaque:W,drawBlend:st,state:a}}function l(N,G,$){let V=Math.min(1,Math.max(0,($-N)/(G-N)));return V*V*(3-2*V)}let d=Rk(),u=Ok(),p=u?t.texture({data:u,flipY:!1,min:"linear",mag:"linear"}):c,f=t({vert:Ck,frag:Pk,attributes:{position:d.pos,normal:d.nrm,uv:d.uv,kind:d.kind},elements:new Uint16Array(d.idx),uniforms:{model:t.prop("model"),turn:0,fold:1.12,cover:p},cull:{enable:!1}}),v=$k(),m=t({vert:Ik,frag:qk,attributes:{position:v.pos,normal:v.nrm,color:v.col,mat:v.mat},elements:new Uint16Array(v.idx),uniforms:{model:t.prop("model"),pulse:t.prop("pulse")},cull:{enable:!1}}),g=t({vert:Dk,frag:Fk,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{center:t.prop("center"),size:t.prop("size"),pulse:t.prop("pulse")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});function x(N){let G=N.headM,$=tt=>{let W=Math.hypot(...tt)||1;return tt.map(st=>st/W)},V=$([G[4],G[5],G[6]]),D=$([G[8],G[9],G[10]]),U=V,ht=D.map(tt=>-tt),jt=[ht[1]*U[2]-ht[2]*U[1],ht[2]*U[0]-ht[0]*U[2],ht[0]*U[1]-ht[1]*U[0]],Lt=N.headPos,gt=[0,1,2].map(tt=>Lt[tt]+V[tt]*.06+D[tt]*.185);return[jt[0],jt[1],jt[2],0,ht[0],ht[1],ht[2],0,U[0],U[1],U[2],0,gt[0],gt[1],gt[2],1]}let y=-1,w="",M=null,_=null,k=!1;function O(N){if(!o)return;let G=(rx.motion,r()),$=M?[M.x,M.z,M.heading,M.phase].map(D=>D.toFixed(4)).join():"";(_||k||$!==w||!M&&Math.abs(G-y)>(rx.isPhone?1/30:0))&&(o.update(G,M),y=G,w=$);for(let D of o.parts)D.blend||(o.drawOpaque({pb:D.pb,nb:D.nbuf,uv:D.uvBuf,el:D.el,tex:D.tex,alphaCut:D.alphaCut,skin:D.skin,kind:D.kind,alphaScale:D.alphaScale}),D.sockEl&&o.drawOpaque({pb:D.pb,nb:D.nbuf,uv:D.uvBuf,el:D.sockEl,tex:c,alphaCut:0,skin:0,kind:8,alphaScale:1}));let V=o.state;if(V.headM&&!M&&!_&&!k){f({model:x(V)});let D=V.headPos,U=Math.sin(G*1.3)*.02,ht=[D[0],D[1]+.62+U,D[2]+.05],jt=G*.6,Lt=pr(ht,an(us([0,1,0],jt),us([0,0,1],.18)),[1.2,1.2,1.2]),gt=.5+.5*Math.sin(G*2);m({model:Lt,pulse:gt}),a.glowPos=ht,a.glow=.06+.03*gt,g({center:[ht[0],ht[1]-.12,ht[2]],size:.1,pulse:gt})}for(let D of o.parts)D.blend&&o.drawBlend({pb:D.pb,nb:D.nbuf,uv:D.uvBuf,el:D.el,tex:D.tex,alphaCut:D.alphaCut,skin:D.skin,kind:D.kind,alphaScale:D.alphaScale})}return O.state=a,O.place=si,O.setWalk=N=>{M=N||null,M&&(a.glow=0)},O.setSeat=N=>{_=N||null,a.glow=_?0:a.glow,y=-1},O.setPiano=N=>{N=!!N,N!==k&&(k=N,k&&(a.glow=0),y=-1)},O};Ad.exports.PLACE=si});var Td=St((EA,px)=>{"use strict";px.exports={name:"Muzammil",title:"Hi, I\u2019m Muzammil.",text:`I\u2019m a self-taught artist. I paint emotions. Grief, longing, love, and the quiet ways we keep holding on. I borrow the light and stillness of the Renaissance to talk about very modern feelings.

This gallery is my portfolio, built brick by pixel, so my work has a home that never closes. Every painting comes with a few words, because some feelings need both a frame and a sentence.

You\u2019ll find me in the tree court, catching sunlight and trying not to get too absorbed. Wander the halls, stay as long as you like, and don\u2019t worry about the time. In here, the only thing that\u2019s drying is the paint.`}});var Nd=St((zA,bx)=>{"use strict";var xx=Sr(),vx=hl(),ds=t=>String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function Ld(){return xx.isPhone||!window.matchMedia||!window.matchMedia("(pointer: fine)").matches?!1:window.innerWidth>=900&&window.innerHeight>=520}var Gk=`
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
`,mx=!1;function yx(){if(mx)return;mx=!0;let t=document.createElement("style");t.textContent=Gk,document.head.appendChild(t)}var Hk='<svg class="visit-play" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="10.2"/><path d="M10 8.4l6 3.6-6 3.6z" fill="currentColor" stroke="none"/></svg>';function Uk(t){return!t||!t.visit||!Ld()?"":(yx(),`<button type="button" class="visit-btn" data-visit="${ds(t.slug||"")}" aria-label="Visit what remained: watch ${ds(t.title)} come to life">${Hk}<span>Visit what remained</span></button>`)}function Bk(t){let e=t.getContext("2d");t.width=t.height=160;let o=e.createImageData(160,160),n=!0,r=0;return function a(s){if(n){if(s-r>70){r=s;let i=o.data;for(let c=0;c<i.length;c+=4){let h=Math.random()*255;i[c]=i[c+1]=i[c+2]=h,i[c+3]=255}e.putImageData(o,0,0),t.style.transform=`translate(${(Math.random()*6-3).toFixed(1)}%, ${(Math.random()*6-3).toFixed(1)}%)`}requestAnimationFrame(a)}}(0),()=>{n=!1}}var tf=null;function jk(t){if(tf||!t||!t.visit)return;yx();let e=document.activeElement;document.body.classList.add("visiting");let o="images/web/"+t.slug+(xx.isPhone?"-1024":"")+".webp",n=document.createElement("div");n.className="visit",n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.setAttribute("aria-label","Visiting "+t.title),n.innerHTML=`
		<video muted playsinline preload="auto" ${t.visit.poster?`poster="${ds(t.visit.poster)}"`:""}></video>
		<img class="visit-art" alt="${ds(t.title)}, ${ds(vx(t))}" src="${ds(o)}">
		<canvas class="visit-grain" aria-hidden="true"></canvas>
		<div class="visit-vignette" aria-hidden="true"></div>
		<div class="visit-bar top" aria-hidden="true"></div>
		<div class="visit-bar bottom" aria-hidden="true"></div>
		<div class="visit-title">
			<span class="visit-kicker">A visit</span>
			<span class="visit-name">${ds(t.title)}</span>
			<span class="visit-meta">${ds(vx(t))}</span>
		</div>
		<button type="button" class="visit-close" aria-label="Return to the gallery">\xD7</button>
		<button type="button" class="visit-skip">Skip</button>
		<div class="visit-end">
			<button type="button" class="primary" data-act="back">Return to the gallery</button>
			<button type="button" data-act="again">Watch again</button>
		</div>`,document.body.appendChild(n);let r=n.querySelector("video"),a=n.querySelector(".visit-title"),s=Bk(n.querySelector(".visit-grain")),i=[],c=(m,g)=>i.push(setTimeout(m,g)),h=m=>m.stopPropagation();["mousedown","pointerdown","click","wheel","touchstart","touchmove"].forEach(m=>n.addEventListener(m,h));let l=m=>{m.key==="Escape"?(m.preventDefault(),v()):m.key===" "&&!(m.target&&m.target.tagName==="BUTTON")&&(m.preventDefault(),p()),m.stopImmediatePropagation()};window.addEventListener("keydown",l,!0);let d=m=>m.stopImmediatePropagation();window.addEventListener("keyup",d,!0);let u=!1;function p(){u||(u=!0,a.classList.add("on"),n.classList.add("resolved"),c(()=>{let m=n.querySelector('[data-act="back"]');m&&m.focus({preventScroll:!0})},1300))}function f(){u=!1,n.classList.remove("resolved"),a.classList.remove("on");try{r.currentTime=0}catch(g){}let m=r.play();m&&m.catch&&m.catch(()=>p()),n.classList.add("playing"),c(()=>{u||a.classList.add("on")},1600),c(()=>{u||a.classList.remove("on")},6200)}r.addEventListener("timeupdate",()=>{r.duration&&r.currentTime>r.duration-1.2&&p()}),r.addEventListener("ended",p),r.addEventListener("error",p);function v(){if(tf){tf=null,i.forEach(clearTimeout),n.classList.remove("on");try{r.pause()}catch(m){}window.removeEventListener("keydown",l,!0),window.removeEventListener("keyup",d,!0),document.body.classList.remove("visiting"),setTimeout(()=>{s(),n.remove(),e&&e.focus&&e.focus({preventScroll:!0})},1150)}}n.querySelector(".visit-close").addEventListener("click",v),n.querySelector(".visit-skip").addEventListener("click",()=>{try{r.pause()}catch(m){}p()}),n.querySelector(".visit-end").addEventListener("click",m=>{let g=m.target.closest("button");g&&(g.dataset.act==="back"&&v(),g.dataset.act==="again"&&(i.forEach(clearTimeout),f()))}),r.src=t.visit.video,tf={close:v},requestAnimationFrame(()=>{n.classList.add("on"),c(f,1300)})}var gx={};function Wk(t){if(!t||!t.visit||gx[t.visit.video]||!Ld())return;gx[t.visit.video]=!0;let e=document.createElement("link");e.rel="preload",e.as="video",e.href=t.visit.video,document.head.appendChild(e)}bx.exports={available:Ld,button:Uk,open:jk,warm:Wk,get active(){return!!tf}}});var Mx=St((AA,_x)=>{"use strict";var Vk=Sr(),Sc=[0,0],wc=[0,0],Pa=null,Od=0;if(typeof window!="undefined"){window.addEventListener("pointermove",e=>{e.pointerType!=="touch"&&(Sc[0]=Math.max(-1,Math.min(1,e.clientX/window.innerWidth*2-1)),Sc[1]=Math.max(-1,Math.min(1,e.clientY/window.innerHeight*2-1)),Od=performance.now())},{passive:!0});let t=()=>{Od=performance.now()};["wheel","touchstart","touchmove","keydown","pointerdown"].forEach(e=>window.addEventListener(e,t,{passive:!0,capture:!0})),window.addEventListener("deviceorientation",e=>{e.gamma===null||e.beta===null||(Pa||(Pa=[e.gamma,e.beta]),Pa[0]+=(e.gamma-Pa[0])*.01,Pa[1]+=(e.beta-Pa[1])*.01,Sc[0]=Math.max(-1,Math.min(1,(e.gamma-Pa[0])/14)),Sc[1]=Math.max(-1,Math.min(1,(e.beta-Pa[1])/14)))},{passive:!0})}var wx=0,_c=null,o1=null,pa=[0,0,0],Rd=0,Mc=null,kc=0,ii={eye:[0,0,0],target:[0,0,0],fov:50,roll:0},Xk={apply(t,e){let o=Math.min(.1,Math.max(0,e-wx));wx=e;let n=t.eye,r=t.target,a=[r[0]-n[0],r[1]-n[1],r[2]-n[2]],s=Math.hypot(a[0],a[1],a[2])||1;a=[a[0]/s,a[1]/s,a[2]/s];let i=[-a[2],0,a[0]],c=Math.hypot(i[0],i[2])||1;i=[i[0]/c,0,i[2]/c];let h=[i[1]*a[2]-i[2]*a[1],i[2]*a[0]-i[0]*a[2],i[0]*a[1]-i[1]*a[0]],l=!_c;if(_c&&o>0){let y=[n[0]-_c[0],n[1]-_c[1],n[2]-_c[2]],w=Math.hypot(y[0],y[1],y[2]);if(w>2.5)l=!0;else{let _=Math.min(1,o*5);for(let k=0;k<3;k++)pa[k]+=(y[k]/o-pa[k])*_}let M=Math.hypot(r[0]-o1[0],r[1]-o1[1],r[2]-o1[2]);kc=w/o<.12&&M/o<.2?kc+o:0}l&&(pa[0]=pa[1]=pa[2]=0,kc=0),_c=n.slice(),o1=r.slice(),Rd=Math.hypot(pa[0],pa[1],pa[2]);let d=Math.min(1,o*2.6);wc[0]+=(Sc[0]-wc[0])*d,wc[1]+=(Sc[1]-wc[1])*d;let u=Math.max(.03,Math.min(.32,s*.05)),p=(Vk.isPhone&&!Pa?1.5:1)*Math.min(1,kc/2.5),f=(Math.sin(e*.131)*.55+Math.sin(e*.071+1.3)*.45)*u*.55*p,v=Math.sin(e*.097+.6)*u*.16*p,m=wc[0]*u+f,g=-wc[1]*u*.45+v;for(let y=0;y<3;y++)ii.eye[y]=n[y]+i[y]*m+h[y]*g,ii.target[y]=r[y]+(i[y]*m+h[y]*g)*.12;n[1]>.05&&(ii.eye[1]=Math.max(.05,ii.eye[1]));let x=pa[0]*i[0]+pa[2]*i[2];return ii.fov=t.fov+Math.min(3.5,Rd*.55),ii.roll=(t.roll||0)+Math.max(-.035,Math.min(.035,-x*.006)),ii},pull(t,e){(Mc===null||!(Math.abs(t.focus-Mc)<40))&&(Mc=t.focus);let o=1/60;Mc+=(t.focus-Mc)*Math.min(1,o*3.2),t.focus=Mc,t.aperture>0&&(t.aperture*=1+.25*Math.min(1,kc/3))},get speed(){return Rd},get resting(){return kc>2&&performance.now()-Od>2e3}};_x.exports=Xk});var Cd=St((TA,kx)=>{kx.exports=1e-6});var Pd=St((LA,Sx)=>{Sx.exports=Yk;function Yk(){var t=new Float32Array(3);return t[0]=0,t[1]=0,t[2]=0,t}});var zx=St((NA,Ex)=>{Ex.exports=Kk;function Kk(t){var e=new Float32Array(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}});var $d=St((RA,Ax)=>{Ax.exports=Qk;function Qk(t,e,o){var n=new Float32Array(3);return n[0]=t,n[1]=e,n[2]=o,n}});var Id=St((OA,Tx)=>{Tx.exports=Zk;function Zk(t,e){var o=e[0],n=e[1],r=e[2],a=o*o+n*n+r*r;return a>0&&(a=1/Math.sqrt(a),t[0]=e[0]*a,t[1]=e[1]*a,t[2]=e[2]*a),t}});var qd=St((CA,Lx)=>{Lx.exports=Jk;function Jk(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}});var Cx=St((PA,Ox)=>{Ox.exports=eS;var Nx=$d(),Rx=Id(),tS=qd();function eS(t,e){var o=Nx(t[0],t[1],t[2]),n=Nx(e[0],e[1],e[2]);Rx(o,o),Rx(n,n);var r=tS(o,n);return r>1?0:Math.acos(r)}});var $x=St(($A,Px)=>{Px.exports=oS;function oS(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}});var qx=St((IA,Ix)=>{Ix.exports=nS;function nS(t,e,o,n){return t[0]=e,t[1]=o,t[2]=n,t}});var Fx=St((qA,Dx)=>{Dx.exports=rS;var Dd=Cd();function rS(t,e){var o=t[0],n=t[1],r=t[2],a=e[0],s=e[1],i=e[2];return Math.abs(o-a)<=Dd*Math.max(1,Math.abs(o),Math.abs(a))&&Math.abs(n-s)<=Dd*Math.max(1,Math.abs(n),Math.abs(s))&&Math.abs(r-i)<=Dd*Math.max(1,Math.abs(r),Math.abs(i))}});var Hx=St((DA,Gx)=>{Gx.exports=aS;function aS(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}});var Bx=St((FA,Ux)=>{Ux.exports=sS;function sS(t,e,o){return t[0]=e[0]+o[0],t[1]=e[1]+o[1],t[2]=e[2]+o[2],t}});var Fd=St((GA,jx)=>{jx.exports=iS;function iS(t,e,o){return t[0]=e[0]-o[0],t[1]=e[1]-o[1],t[2]=e[2]-o[2],t}});var Vx=St((HA,Wx)=>{Wx.exports=Fd()});var Gd=St((UA,Xx)=>{Xx.exports=cS;function cS(t,e,o){return t[0]=e[0]*o[0],t[1]=e[1]*o[1],t[2]=e[2]*o[2],t}});var Kx=St((BA,Yx)=>{Yx.exports=Gd()});var Hd=St((jA,Qx)=>{Qx.exports=lS;function lS(t,e,o){return t[0]=e[0]/o[0],t[1]=e[1]/o[1],t[2]=e[2]/o[2],t}});var Jx=St((WA,Zx)=>{Zx.exports=Hd()});var e5=St((VA,t5)=>{t5.exports=fS;function fS(t,e,o){return t[0]=Math.min(e[0],o[0]),t[1]=Math.min(e[1],o[1]),t[2]=Math.min(e[2],o[2]),t}});var n5=St((XA,o5)=>{o5.exports=hS;function hS(t,e,o){return t[0]=Math.max(e[0],o[0]),t[1]=Math.max(e[1],o[1]),t[2]=Math.max(e[2],o[2]),t}});var a5=St((YA,r5)=>{r5.exports=uS;function uS(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t[2]=Math.floor(e[2]),t}});var i5=St((KA,s5)=>{s5.exports=dS;function dS(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t[2]=Math.ceil(e[2]),t}});var l5=St((QA,c5)=>{c5.exports=pS;function pS(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t[2]=Math.round(e[2]),t}});var h5=St((ZA,f5)=>{f5.exports=vS;function vS(t,e,o){return t[0]=e[0]*o,t[1]=e[1]*o,t[2]=e[2]*o,t}});var d5=St((JA,u5)=>{u5.exports=mS;function mS(t,e,o,n){return t[0]=e[0]+o[0]*n,t[1]=e[1]+o[1]*n,t[2]=e[2]+o[2]*n,t}});var Ud=St((t7,p5)=>{p5.exports=gS;function gS(t,e){var o=e[0]-t[0],n=e[1]-t[1],r=e[2]-t[2];return Math.sqrt(o*o+n*n+r*r)}});var m5=St((e7,v5)=>{v5.exports=Ud()});var Bd=St((o7,g5)=>{g5.exports=xS;function xS(t,e){var o=e[0]-t[0],n=e[1]-t[1],r=e[2]-t[2];return o*o+n*n+r*r}});var y5=St((n7,x5)=>{x5.exports=Bd()});var jd=St((r7,b5)=>{b5.exports=yS;function yS(t){var e=t[0],o=t[1],n=t[2];return Math.sqrt(e*e+o*o+n*n)}});var _5=St((a7,w5)=>{w5.exports=jd()});var Wd=St((s7,M5)=>{M5.exports=bS;function bS(t){var e=t[0],o=t[1],n=t[2];return e*e+o*o+n*n}});var S5=St((i7,k5)=>{k5.exports=Wd()});var z5=St((c7,E5)=>{E5.exports=wS;function wS(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}});var T5=St((l7,A5)=>{A5.exports=_S;function _S(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}});var N5=St((f7,L5)=>{L5.exports=MS;function MS(t,e,o){var n=e[0],r=e[1],a=e[2],s=o[0],i=o[1],c=o[2];return t[0]=r*c-a*i,t[1]=a*s-n*c,t[2]=n*i-r*s,t}});var O5=St((h7,R5)=>{R5.exports=kS;function kS(t,e,o,n){var r=e[0],a=e[1],s=e[2];return t[0]=r+n*(o[0]-r),t[1]=a+n*(o[1]-a),t[2]=s+n*(o[2]-s),t}});var P5=St((u7,C5)=>{C5.exports=SS;function SS(t,e){e=e||1;var o=Math.random()*2*Math.PI,n=Math.random()*2-1,r=Math.sqrt(1-n*n)*e;return t[0]=Math.cos(o)*r,t[1]=Math.sin(o)*r,t[2]=n*e,t}});var I5=St((d7,$5)=>{$5.exports=ES;function ES(t,e,o){var n=e[0],r=e[1],a=e[2],s=o[3]*n+o[7]*r+o[11]*a+o[15];return s=s||1,t[0]=(o[0]*n+o[4]*r+o[8]*a+o[12])/s,t[1]=(o[1]*n+o[5]*r+o[9]*a+o[13])/s,t[2]=(o[2]*n+o[6]*r+o[10]*a+o[14])/s,t}});var D5=St((p7,q5)=>{q5.exports=zS;function zS(t,e,o){var n=e[0],r=e[1],a=e[2];return t[0]=n*o[0]+r*o[3]+a*o[6],t[1]=n*o[1]+r*o[4]+a*o[7],t[2]=n*o[2]+r*o[5]+a*o[8],t}});var G5=St((v7,F5)=>{F5.exports=AS;function AS(t,e,o){var n=e[0],r=e[1],a=e[2],s=o[0],i=o[1],c=o[2],h=o[3],l=h*n+i*a-c*r,d=h*r+c*n-s*a,u=h*a+s*r-i*n,p=-s*n-i*r-c*a;return t[0]=l*h+p*-s+d*-c-u*-i,t[1]=d*h+p*-i+u*-s-l*-c,t[2]=u*h+p*-c+l*-i-d*-s,t}});var U5=St((m7,H5)=>{H5.exports=TS;function TS(t,e,o,n){var r=o[1],a=o[2],s=e[1]-r,i=e[2]-a,c=Math.sin(n),h=Math.cos(n);return t[0]=e[0],t[1]=r+s*h-i*c,t[2]=a+s*c+i*h,t}});var j5=St((g7,B5)=>{B5.exports=LS;function LS(t,e,o,n){var r=o[0],a=o[2],s=e[0]-r,i=e[2]-a,c=Math.sin(n),h=Math.cos(n);return t[0]=r+i*c+s*h,t[1]=e[1],t[2]=a+i*h-s*c,t}});var V5=St((x7,W5)=>{W5.exports=NS;function NS(t,e,o,n){var r=o[0],a=o[1],s=e[0]-r,i=e[1]-a,c=Math.sin(n),h=Math.cos(n);return t[0]=r+s*h-i*c,t[1]=a+s*c+i*h,t[2]=e[2],t}});var Y5=St((y7,X5)=>{X5.exports=RS;var ps=Pd()();function RS(t,e,o,n,r,a){var s,i;for(e||(e=3),o||(o=0),n?i=Math.min(n*e+o,t.length):i=t.length,s=o;s<i;s+=e)ps[0]=t[s],ps[1]=t[s+1],ps[2]=t[s+2],r(ps,ps,a),t[s]=ps[0],t[s+1]=ps[1],t[s+2]=ps[2];return t}});var Q5=St((b7,K5)=>{K5.exports={EPSILON:Cd(),create:Pd(),clone:zx(),angle:Cx(),fromValues:$d(),copy:$x(),set:qx(),equals:Fx(),exactEquals:Hx(),add:Bx(),subtract:Fd(),sub:Vx(),multiply:Gd(),mul:Kx(),divide:Hd(),div:Jx(),min:e5(),max:n5(),floor:a5(),ceil:i5(),round:l5(),scale:h5(),scaleAndAdd:d5(),distance:Ud(),dist:m5(),squaredDistance:Bd(),sqrDist:y5(),length:jd(),len:_5(),squaredLength:Wd(),sqrLen:S5(),negate:z5(),inverse:T5(),normalize:Id(),dot:qd(),cross:N5(),lerp:O5(),random:P5(),transformMat4:I5(),transformMat3:D5(),transformQuat:G5(),rotateX:U5(),rotateY:j5(),rotateZ:V5(),forEach:Y5()}});var ty=St((w7,J5)=>{"use strict";function Z5(){let t={};return{on(e,o){return(t[e]=t[e]||[]).push(o),this},emit(e,o){(t[e]||[]).slice().forEach(n=>n(o))}}}J5.exports=function(e){let o=e.ownerDocument||document,n=Z5(),r=null,a={dx:0,dy:0,dt:0},s=0,i=()=>o.pointerLockElement||o.webkitPointerLockElement||null,c=()=>{if(i())return;let l=e.requestPointerLock||e.webkitRequestPointerLock;if(l)try{let d=l.call(e);d&&d.catch&&d.catch(()=>{})}catch(d){}};e.addEventListener("mousedown",c,!1);let h=()=>{if(!i()){r&&(n.emit("release"),r.emit("end"),r=null);return}r=Z5(),s=Date.now(),n.emit("attain",r)};return o.addEventListener("pointerlockchange",h),o.addEventListener("webkitpointerlockchange",h),o.addEventListener("pointerlockerror",()=>n.emit("error")),(o.body||e).addEventListener("mousemove",l=>{r&&(a.dx=l.movementX||l.webkitMovementX||0,a.dy=l.movementY||l.webkitMovementY||0,a.dt=Date.now()-s,n.emit("data",a),r.emit("data",a))},!1),n.request=c,n.target=i,n.release=()=>{i()&&(o.exitPointerLock||o.webkitExitPointerLock).call(o)},n}});var ay=St((k7,ry)=>{"use strict";var ci=sc(),li=Q5(),OS=ty(),_7=Math.PI/4,M7=Math.PI/6,ey=2,CS=1,PS=2.4,$S=2.4,IS=1e3,qS=5,DS=7,Vd=_0().C,ef=[[7,1.6],[7,Vd.zc],[Vd.x1-2.95,Vd.zc]],vs=ef.slice(1).map((t,e)=>{let o=ef[e],n=t[0]-o[0],r=t[1]-o[1],a=Math.hypot(n,r);return{a:o,len:a,dir:[n/a,r/a]}}),Xd=vs.reduce((t,e)=>t+e.len,0);function oy(t){let e=Math.max(0,Math.min(Xd,t));for(let n of vs){if(e<=n.len)return[n.a[0]+n.dir[0]*e,n.a[1]+n.dir[1]*e];e-=n.len}let o=ef[ef.length-1];return[o[0],o[1]]}function FS(t){let e=0;for(let n=0;n<vs.length;n++){let r=vs[n],a=e+r.len;if(t<a-1e-4||n===vs.length-1){let s=r.dir,c=t<=e+1e-4&&n>0?vs[n-1].dir:r.dir;return{ahead:s,back:[-c[0],-c[1]]}}e=a}let o=vs[vs.length-1].dir;return{ahead:o,back:[-o[0],-o[1]]}}var GS=Math.PI/4,HS=7,US=140,BS=70,ny=(t,e,o)=>(1-t)*e+t*o,jS=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;ry.exports=function({getGridSegments:t,getGridParts:e},o){var n=[0,Math.PI],r=[0,Math.PI],a=0,s=[0,0,0],i=[DS,ey,ef[0][1]],c=0,h=1,l=0,d=[.707,0,.707],u=[0,1,0],p=[0,0,0],f=.5,v=ci.identity([]),m=ci.identity([]),g=!1,x=[0,0,0],y=[0,0,0],w=1,M=!1;let _=Ot=>{n[1]+=Ot*GS},k=(Ot,ie,Oe)=>{if(Ot=Math.max(Math.min(Ot,100),-100),ie=Math.max(Math.min(ie,100),-100),n[0]=0,M){a=0;return}for(a+=Ot;a>=Oe;)_(1),a-=Oe;for(;a<=-Oe;)_(-1),a+=Oe};OS(document.body).on("attain",Ot=>{Ot.on("data",ie=>{k(ie.dx,ie.dy,US)})});let N=null,G=null,$=0,V={x:0,y:0},D=58,U=document.createElement("div");U.id="museum-mobile-controls",U.innerHTML=`

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
	`,document.body.appendChild(U);let ht=U.querySelector("#museum-joystick"),jt=U.querySelector("#museum-joystick-knob"),Lt=()=>{jt.style.transform="translate(-50%, -50%)",s[0]=0,s[2]=0},gt=Ot=>{let ie=Ot.clientX-V.x,Oe=Ot.clientY-V.y,Ue=Math.hypot(ie,Oe);if(Ue>D&&(ie=ie/Ue*D,Oe=Oe/Ue*D),jt.style.transform=`translate(
				calc(-50% + ${ie}px),
				calc(-50% + ${Oe}px)
			)`,Ue<10){s[0]=0,s[2]=0;return}let ve=ie/D,ye=Oe/D;s[0]=0,s[2]=Math.abs(ye)>.15?ye:0},tt=(Ot,ie)=>{for(let Oe=0;Oe<Ot.length;Oe++)if(Ot[Oe].identifier===ie)return Ot[Oe];return null},W=Ot=>!!(Ot&&Ot.closest&&Ot.closest(".painting-plaque, .story-overlay, .story-card, .story-close, button")),st=Ot=>{if(!W(Ot.target)&&(Ot.cancelable&&Ot.preventDefault(),!M))for(let ie=0;ie<Ot.changedTouches.length;ie++){let Oe=Ot.changedTouches[ie];if(N===null&&Oe.clientX<window.innerWidth*.48){N=Oe.identifier;let Ue=ht.getBoundingClientRect();V.x=Ue.left+Ue.width/2,V.y=Ue.top+Ue.height/2,gt(Oe)}else G===null&&Oe.clientX>=window.innerWidth*.48&&(G=Oe.identifier,$=Oe.clientX,a=0)}},wt=Ot=>{if(W(Ot.target)||(Ot.cancelable&&Ot.preventDefault(),M))return;let ie=N===null?null:tt(Ot.touches,N);ie&&gt(ie);let Oe=G===null?null:tt(Ot.touches,G);if(Oe){let Ue=Oe.clientX-$;$=Oe.clientX,k(Ue,0,BS)}},$t=Ot=>{if(!W(Ot.target)){Ot.cancelable&&Ot.preventDefault();for(let ie=0;ie<Ot.changedTouches.length;ie++){let Oe=Ot.changedTouches[ie];Oe.identifier===N&&(N=null,Lt()),Oe.identifier===G&&(G=null)}}};document.addEventListener("touchstart",st,{passive:!1}),document.addEventListener("touchmove",wt,{passive:!1}),document.addEventListener("touchend",$t,{passive:!1}),document.addEventListener("touchcancel",$t,{passive:!1});let Ut=document.createElement("style");Ut.textContent=`

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
	`,document.head.appendChild(Ut);var be={};let De=Ot=>{if(Ot.defaultPrevented||Ot.ctrlKey||Ot.altKey||Ot.metaKey)return;let ie=Ot.type==="keydown";be[Ot.code]=ie,ie&&!Ot.repeat&&!M&&((Ot.code==="KeyA"||Ot.code==="ArrowLeft")&&_(-1),(Ot.code==="KeyD"||Ot.code==="ArrowRight")&&_(1)),g=!1;let Oe=be.KeyW||be.ArrowUp?1:0;s=[0,0,(be.KeyS||be.ArrowDown?1:0)-Oe],Ot.preventDefault()};window.addEventListener("keydown",De),window.addEventListener("keyup",De);var He=0;return{pos:i,fmouse:r,forward:d,up:u,setPaused:Ot=>{M=!!Ot,M&&(s[0]=0,s[2]=0,Lt())},place:(Ot,ie)=>{c=Math.max(0,Math.min(Xd,Ot));let Oe=oy(c);i[0]=Oe[0],i[2]=Oe[1],n[1]=ie,r[1]=ie,a=0,h=1},view:()=>v,proj:()=>(ci.perspective(m,o(),window.innerWidth/window.innerHeight,.1,700),m),tick:({time:Ot})=>{let ie=Ot-He;He=Ot;let Oe=[0,0,0],Ue=[];li.set(d,Math.sin(r[1]),0,-Math.cos(r[1])),li.set(u,0,1,0);let Ge=g?$S:PS,ve=Math.sin(n[1]),ye=-Math.cos(n[1]),mt=FS(c),ue=ve*mt.ahead[0]+ye*mt.ahead[1],Be=ve*mt.back[0]+ye*mt.back[1],Le=h;Math.max(ue,Be)>.3&&(Le=ue>=Be?1:-1);let oe=M?0:-s[2]*Ge;l+=(oe-l)*(1-Math.exp(-Math.min(ie,.1)*5.5)),oe===0&&Math.abs(l)<.01&&(l=0);let So=l*Le*Math.min(ie,.1);M&&(s[0]=0,s[2]=0,So=0,l=0),So!==0&&(h=Math.sign(So)*Math.sign(-s[2]||1)),c=Math.max(0,Math.min(Xd,c+So));let E=oy(c);li.set(p,E[0]-i[0],0,E[1]-i[2]);let ho=li.len(p);ho===0&&f!==.25&&(f=(Math.abs((f+.5)%1-.5)-.25)*.8+.25,(f+.01)%.25<.02&&(f=.25));let io=f;if(f+=ho/(g?qS:IS),i[1]=ey,li.add(i,i,p),w<1){w+=ie/CS,w=Math.min(w,1);let dt=jS(w);li.set(i,ny(dt,x[0],y[0]),i[1],ny(dt,x[2],y[2]))}r[0]=0,r[1]+=(n[1]-r[1])*Math.min(1,Math.min(ie,.1)*HS),Math.abs(n[1]-r[1])<5e-4&&(r[1]=n[1]),ci.identity(v),ci.rotateX(v,v,0),ci.rotateY(v,v,r[1]),ci.translate(v,v,li.scale(Oe,i,-1))}}}});var cy=St((S7,iy)=>{"use strict";var{skylightGLSL:WS,Z_START:VS,Z_END:XS,GLASS_Y:YS}=Xi(),{oculusGLSL:KS,A:fi}=Ar(),{windowLightGLSL:QS,C:n1}=_0(),{doorLightGLSL:ZS}=Wa(),r1=i0(),of=Nh(),sy=Xs(),Or=t=>t.toFixed(4),Yd=.1,Kd=700,Ec={exposure:.88,shafts:1,bloom:1,vignette:.42,grain:.032};function JS(t,e){let o=e[0],n=e[1],r=e[2],a=e[3],s=e[4],i=e[5],c=e[6],h=e[7],l=e[8],d=e[9],u=e[10],p=e[11],f=e[12],v=e[13],m=e[14],g=e[15],x=o*i-n*s,y=o*c-r*s,w=o*h-a*s,M=n*c-r*i,_=n*h-a*i,k=r*h-a*c,O=l*v-d*f,N=l*m-u*f,G=l*g-p*f,$=d*m-u*v,V=d*g-p*v,D=u*g-p*m,U=x*D-y*V+w*$+M*G-_*N+k*O;return U?(U=1/U,t[0]=(i*D-c*V+h*$)*U,t[1]=(r*V-n*D-a*$)*U,t[2]=(v*k-m*_+g*M)*U,t[3]=(u*_-d*k-p*M)*U,t[4]=(c*G-s*D-h*N)*U,t[5]=(o*D-r*G+a*N)*U,t[6]=(m*w-f*k-g*y)*U,t[7]=(l*k-u*w+p*y)*U,t[8]=(s*V-i*G+h*O)*U,t[9]=(n*G-o*V-a*O)*U,t[10]=(f*_-v*w+g*x)*U,t[11]=(d*w-l*_-p*x)*U,t[12]=(i*N-s*$-c*O)*U,t[13]=(o*$-n*N+r*O)*U,t[14]=(v*y-f*M-m*x)*U,t[15]=(l*M-d*y+u*x)*U,t):null}function tE(t,e,o){let n=new Array(16);for(let r=0;r<4;r++)for(let a=0;a<4;a++){let s=0;for(let i=0;i<4;i++)s+=e[i*4+a]*o[r*4+i];n[r*4+a]=s}for(let r=0;r<16;r++)t[r]=n[r];return t}var eE=`
precision highp float;
attribute vec2 position;
varying vec2 uv;
void main() {
	uv = position * 0.5 + 0.5;
	gl_Position = vec4(position, 0.0, 1.0);
}`;iy.exports=(t,e)=>{let o=!!e.isPhone,n=t.hasExtension("webgl_depth_texture"),r=o?10:18,a=()=>e.post>=2?2:4,s=tt=>t.texture(Object.assign({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"},tt||{})),i=()=>t.framebuffer({color:s(),depth:!1}),c=s(),h=n?t.texture({width:4,height:4,format:"depth",type:"uint32"}):null,l=t.framebuffer({color:c,depth:h||!0}),d=[i(),i()],u=[i(),i()],p=[i(),i()],f=[i(),i()],v=new Array(16).fill(0),m=new Array(16).fill(0),g=[0,0,0],x={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},y={position:[-1,-1,3,-1,-1,3]},w=(tt,W,st)=>t(Object.assign({vert:eE,frag:tt,attributes:y,count:3,depth:{enable:!1,mask:!1},cull:{enable:!1},blend:{enable:!1},uniforms:W,framebuffer:t.prop("out")},st||{})),M=[2.6,0,VS-3.2,12.6,YS,XS+.4],_=[fi.x0-.2,0,fi.z0,fi.x1,fi.domeTop,fi.z1],k=[n1.x0,0,n1.z0,n1.x1,7.6,n1.z1],O=[.35,0,.35,13.65,7.6,9],N=sy.AIR_BOX,G=tt=>`vec3(${Or(tt[0])}, ${Or(tt[1])}, ${Or(tt[2])}), vec3(${Or(tt[3])}, ${Or(tt[4])}, ${Or(tt[5])})`,$=w(`
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

	${WS()}
	${KS()}
	${QS()}
	${ZS()}
	${sy.sunGLSL()}

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
			vec2 t = hitBox(eye, rd, ${G(M)});
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
			vec2 t = hitBox(eye, rd, ${G(_)});
			t.y = min(t.y, len);
			if (t.y > t.x) {
				float st = (t.y - t.x) / float(N);
				float acc = 0.0;
				for (int i = 0; i < N; i++) {
					vec3 p = eye + rd * (t.x + (float(i) + jit) * st);
					if (p.y < ${Or(fi.dome.base)} && p.x > ${Or(fi.x0-.1)}) acc += oculusOpen(p) * treeShade(p) * air(p);
				}
				float ph = phase(dot(rd, SHAFT), 0.6) + 0.05;
				sum += mix(vec3(1.0, 0.88, 0.68), vec3(0.62, 0.74, 1.0) * 1.2, night) * acc * st * ph * strength.y;
			}
		}

		// the corridor windows
		if (strength.z > 0.0) {
			vec2 t = hitBox(eye, rd, ${G(k)});
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
			vec2 t = hitBox(eye, rd, ${G(O)});
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
			vec2 t = hitBox(eye, rd, ${G(N)});
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
	}`,{depthTex:()=>h,invVP:()=>v,eye:()=>g,time:t.context("time"),night:()=>r1.night,strength:()=>V,strength5:()=>D}),V=[0,0,0,0],D=0;function U(){let tt=Ec.shafts*x.shafts,W=r1.night;return V[0]=of.box(M)?.06*tt*(1+.9*W):0,V[1]=of.box(_,!1,"court")?.1*tt*(1+.9*W):0,V[2]=of.box(k)?.07*tt*(1+.4*W):0,V[3]=of.box(O)?.04*tt*(1-.75*W):0,of.zone==="studio"?(V[0]=V[1]=V[2]=V[3]=0,D=.03*tt*(1+1.3*W)):D=0,V[0]+V[1]+V[2]+V[3]+D>5e-4}let ht=w(`
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
	}`,{src:t.prop("src"),dir:(tt,W)=>[W.dir[0]/W.size[0],W.dir[1]/W.size[1]]}),jt=w(`
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
	}`,{src:t.prop("src"),texel:(tt,W)=>[.5/W.size[0],.5/W.size[1]],threshold:t.prop("threshold")}),Lt=w(`
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
		return 2.0 * ${Or(Yd)} * ${Or(Kd)} / (${Or(Kd+Yd)} - z * ${Or(Kd-Yd)});
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
	}`,{scene:()=>c,depthTex:()=>h||c,soft:()=>d[0],bloomA:()=>u[0],bloomB:()=>p[0],shafts:()=>f[0],res:()=>[l.width,l.height],time:t.context("time"),exposure:()=>Ec.exposure*x.exposure,vignette:()=>Math.min(1,Ec.vignette+x.vignette+.22*r1.night),night:()=>r1.night,grain:()=>Ec.grain,bloomK:()=>Ec.bloom,letterbox:()=>x.letterbox,fade:()=>x.fade,fadeColor:()=>x.fadeColor,aperture:()=>e.post>=2?x.aperture:0,focus:()=>x.focus,hasDepth:n?1:0},{framebuffer:null}),gt=t({framebuffer:()=>l});return{shot:x,look:Ec,hasDepth:n,capture(tt,W,st){let wt=Math.max(.4,Math.min(1,e.scale||1)),$t=Math.max(2,Math.round(tt.drawingBufferWidth*wt/2)*2),Ut=Math.max(2,Math.round(tt.drawingBufferHeight*wt/2)*2);(l.width!==$t||l.height!==Ut)&&l.resize($t,Ut);let be=Math.max(1,Math.ceil($t/2)),De=Math.max(1,Math.ceil(Ut/2));d.forEach(He=>He.resize(be,De)),u.forEach(He=>He.resize(Math.max(1,Math.ceil($t/4)),Math.max(1,Math.ceil(Ut/4)))),p.forEach(He=>He.resize(Math.max(1,Math.ceil($t/8)),Math.max(1,Math.ceil(Ut/8)))),f.forEach(He=>He.resize(Math.max(1,Math.ceil($t/a())),Math.max(1,Math.ceil(Ut/a())))),tE(m,W.proj,W.view),JS(v,m),g[0]=W.eye[0],g[1]=W.eye[1],g[2]=W.eye[2],gt(()=>{t.clear({color:[0,0,0,1],depth:1}),st()})},present(){let tt=W=>[W.width,W.height];n&&e.post>=1&&U()?($({out:f[0]}),ht({out:f[1],src:f[0],dir:[1,0],size:tt(f[0])}),ht({out:f[0],src:f[1],dir:[0,1],size:tt(f[0])})):t.clear({color:[0,0,0,1],framebuffer:f[0]}),jt({out:d[0],src:c,size:[l.width,l.height],threshold:0}),ht({out:d[1],src:d[0],dir:[1,0],size:tt(d[0])}),ht({out:d[0],src:d[1],dir:[0,1],size:tt(d[0])}),jt({out:u[0],src:d[0],size:tt(d[0]),threshold:.42}),ht({out:u[1],src:u[0],dir:[1,0],size:tt(u[0])}),ht({out:u[0],src:u[1],dir:[0,1],size:tt(u[0])}),jt({out:p[0],src:u[0],size:tt(u[0]),threshold:0}),ht({out:p[1],src:p[0],dir:[1.5,0],size:tt(p[0])}),ht({out:p[0],src:p[1],dir:[0,1.5],size:tt(p[0])}),Lt({out:null})}}}});var dy=St((E7,uy)=>{"use strict";var ly=i0().GLSL,oE=qs(),Qd=Wa(),{C:nE,FAR_DOOR:rE}=_0(),aE=100*Math.PI/180,fy=t=>[rE.x-t[2],t[1],nE.zc-7+t[0]],hy=t=>[-t[2],t[1],t[0]];function sE(t){let e=[],o=[],n=[],r=[],a=oE.createBuilder(e,o,n,r);Qd.addFrames(a,t);let s=Qd.glassPanes(t),i=c=>{let h=[];for(let l=0;l<c.length;l+=3)h.push([c[l],c[l+1],c[l+2]]);return h};return{position:i(e),normal:i(o),elements:n,glass:s}}uy.exports=t=>{let e=Qd.DOOR,o=["left","right"].map(l=>{let d=sE(l),u=d.position.length;return{part:l,hinge:l==="left"?e.x0:e.x1,sign:l==="left"?-1:1,src:d.position.map(p=>p.slice()),srcN:d.normal.map(p=>p.slice()),srcG:d.glass.map(p=>p.slice()),pos:t.buffer({data:new Float32Array(u*3),usage:"dynamic"}),nrm:t.buffer({data:new Float32Array(u*3),usage:"dynamic"}),gpos:t.buffer({data:new Float32Array(d.glass.length*3),usage:"dynamic"}),gnrm:t.buffer({data:new Float32Array(d.glass.length*3),usage:"dynamic"}),el:t.elements({data:new Uint32Array(d.elements),type:"uint32"}),glassCount:d.glass.length,outP:new Float32Array(u*3),outN:new Float32Array(u*3),outG:new Float32Array(d.glass.length*3),outGN:new Float32Array(d.glass.length*3)}}),n=null;function r(l){if(l!==n){n=l;for(let d of o){let u=d.sign*l,p=Math.cos(u),f=Math.sin(u),v=x=>{let y=x[0]-d.hinge,w=x[2];return[d.hinge+y*p+w*f,x[1],-y*f+w*p]},m=x=>[x[0]*p+x[2]*f,x[1],-x[0]*f+x[2]*p];d.src.forEach((x,y)=>{let w=fy(v(x));d.outP.set(w,y*3),d.outN.set(hy(m(d.srcN[y])),y*3)});let g=hy(m([0,0,1]));d.srcG.forEach((x,y)=>{d.outG.set(fy(v(x)),y*3),d.outGN.set(g,y*3)}),d.pos.subdata(d.outP),d.nrm.subdata(d.outN),d.gpos.subdata(d.outG),d.gnrm.subdata(d.outGN)}}}r(0);let a=`
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
		${ly}
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
		${ly}
		varying vec3 v_pos, v_n, v_eye;
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			float c = abs(dot(V, normalize(v_n)));
			float fres = pow(1.0 - c, 3.0);
			float d = (v_pos.x + v_pos.z) * 0.55 + v_pos.y * 0.85;
			float sheen = smoothstep(0.35, 0.0, abs(fract(d * 0.22) - 0.5)) * 0.05;
			float a = 0.05 + 0.32 * fres + sheen;
			gl_FragColor = vec4(toNight(mix(vec3(0.80, 0.86, 0.90), vec3(1.0, 0.95, 0.86), 0.4), 0.22), a);
		}`,attributes:{position:t.prop("pos"),normal:t.prop("nrm")},count:t.prop("count"),cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}}),c=0,h=()=>{r(c*aE);for(let l of o)s({pos:l.pos,nrm:l.nrm,el:l.el})};return h.glass=()=>{for(let l of o)i({pos:l.gpos,nrm:l.gnrm,count:l.glassCount})},h.setOpen=l=>{c=l||0},h.openNow=()=>c,h}});var vy=St((z7,py)=>{"use strict";var iE=i0().GLSL,{skylightGLSL:cE}=Xi(),{oculusGLSL:lE}=Ar(),{windowLightGLSL:fE}=_0(),Zr=.22;function hE(){let t=[],e=[],o=[],n=[],s=(l,d)=>{let u=Zr*.2*Math.pow(Math.sin(Math.PI*Math.pow(l,.85)),.9)*(d>0?1.06:.94),p=l*Zr-Zr*.12,f=d*u,v=Math.abs(d)*u*.42-.14*l*l*Zr;v+=Math.sin(l*17+(d>0?0:2.1))*.012*Zr*d*d;let m=(l-.3)*.55,g=Math.cos(m),x=Math.sin(m),y=v*g-f*x,w=v*x+f*g;return[p,y,w+.05*Zr*l*l]},i=(l,d)=>{let p=s(Math.min(1,l+.01),d),f=s(Math.max(0,l-.01),d),v=s(l,Math.min(1,d+.01)),m=s(l,Math.max(-1,d-.01)),g=[p[0]-f[0],p[1]-f[1],p[2]-f[2]],x=[v[0]-m[0],v[1]-m[1],v[2]-m[2]],y=[x[1]*g[2]-x[2]*g[1],x[2]*g[0]-x[0]*g[2],x[0]*g[1]-x[1]*g[0]],w=Math.hypot(y[0],y[1],y[2])||1,M=y[1]<0?-1:1;return[y[0]/w*M,y[1]/w*M,y[2]/w*M]};for(let l=0;l<=18;l++){let d=l/18;for(let u=0;u<=5*2;u++){let p=u/5-1;t.push(s(d,p)),e.push(i(Math.min(.97,Math.max(.03,d)),p)),o.push([d,p])}}let c=5*2+1;for(let l=0;l<18;l++)for(let d=0;d<c-1;d++){let u=l*c+d,p=u+1,f=u+c,v=f+1;n.push([u,f,p],[p,f,v])}let h=t.length;return t.push([-Zr*.12,0,-.003],[-Zr*.12,0,.003],[-Zr*.24,-.01,.0015],[-Zr*.24,-.01,-.0015]),e.push([0,1,0],[0,1,0],[0,1,0],[0,1,0]),o.push([0,0],[0,0],[-.1,0],[-.1,0]),n.push([h,h+2,h+1],[h,h+3,h+2]),{pos:t,nrm:e,uv:o,idx:n}}py.exports=t=>{let e=hE(),o=t({vert:`
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
		${iE}
		uniform float time;
		uniform float yScale, visible;
		varying vec3 v_pos, v_normal;
		varying vec2 v_uv;
		varying vec3 v_eye;

		${cE()}
		${lE()}
		${fE()}

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
		}`,attributes:{position:e.pos,normal:e.nrm,uv:e.uv},elements:e.idx,uniforms:{model:t.prop("model"),visible:1},cull:{enable:!1}}),n=i0(),r=t({vert:`
		precision highp float;
		uniform mat4 proj, view, model;
		uniform float yScale;
		attribute vec2 corner;
		varying vec2 v_uv;
		void main() {
			vec3 c = (model * vec4(${(Zr*.35).toFixed(3)}, 0.0, 0.0, 1.0)).xyz;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{model:t.prop("model"),night:()=>n.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(a){a&&a.visible&&(o({model:a.model}),n.night>.01&&r({model:a.model}))}}});var xy=St((A7,gy)=>{"use strict";var{skylightGLSL:uE,Z_START:my,Z_END:dE}=Xi(),{oculusGLSL:pE,A:zc}=Ar(),{windowLightGLSL:vE,C:hi}=_0();gy.exports=(t,e)=>{let o=e.isPhone?900:2600,n=e.isPhone?350:900,r=e.isPhone?450:1300,a=e.isPhone?13:22,s=7,i=()=>(s=s*16807%2147483647,(s-1)/2147483646),c=hi.x0+.6,h=hi.x1-.3,l=[];for(let f=0;f<o;f++)l.push([2.5+i()*10.5,.3+i()*8,my-3.5+i()*(dE-my+4.5),i()]);for(let f=0;f<n;f++)l.push([zc.x0+.3+i()*(zc.x1-zc.x0-.6),.3+i()*7.5,zc.z0+.3+i()*(zc.z1-zc.z0-.6),i()]);for(let f=0;f<r;f++)l.push([c+i()*(h-c),.2+i()*5.6,hi.z0+.25+i()*(hi.z1-hi.z0-.5),i()]);let d=f=>f.toFixed(4),u=[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],p=t({vert:`
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

		${uE()}
		${pE()}
		${vE()}

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
				p.x = ${d(c)} + mod(p.x - ${d(c)} - gust.x * (0.55 + 0.9 * seed.w), ${d(h-c)});
				p.y += sin(time * 5.0 + s * 11.0) * 0.22 * gust.y;
				p.z += cos(time * 4.3 + s * 13.0) * 0.30 * gust.y;
				p.z = clamp(p.z, ${d(hi.z0+.1)}, ${d(hi.z1-.1)});
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
		}`,attributes:{seed:l},count:l.length,primitive:"points",uniforms:{time:t.context("time"),pixelScale:f=>f.viewportHeight*.006,focus:(f,v)=>v&&v.focus||6,aperture:(f,v)=>v&&v.aperture||0,wake0:(f,v)=>(v&&v.wake||u)[0],wake1:(f,v)=>(v&&v.wake||u)[1],wake2:(f,v)=>(v&&v.wake||u)[2],wake3:(f,v)=>(v&&v.wake||u)[3],wakeDir:(f,v)=>v&&v.wakeDir||[0,0,1],gust:(f,v)=>v&&v.gust||[0,0]},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});return f=>p(f||{})}});var ky=St((T7,My)=>{"use strict";var{C:_y}=_0(),yy=i0(),by=15.3,mE=37.1,wy=_y.z1+.9,gE=_y.z1+.7+16-.6;My.exports=(t,e)=>{let o=e.isPhone?36:80,n=11,r=()=>(n=n*16807%2147483647,(n-1)/2147483646),a=[];for(let h=0;h<o;h++){let l=.35+Math.pow(r(),1.8)*2.4;a.push([by+r()*(mE-by),l,wy+r()*(gE-wy),r()])}let s=[],i=[];a.forEach(h=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(l=>{s.push(l[0],l[1]),i.push(...h)})});let c=t({vert:`
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
		}`,attributes:{corner:s,seed:i},count:s.length/2,uniforms:{time:t.context("time"),night:()=>yy.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){yy.night>.01&&c()}}});var i1=St((L7,gr)=>{"use strict";var Sy=i0(),va=Za(),xE=sc(),gs=Math.PI,$e=t=>(+t).toFixed(4),Jr=t=>`vec3(${$e(t[0])}, ${$e(t[1])}, ${$e(t[2])})`,nn={x0:-2.05,z0:41.45,z1:47.55,top:5.1},Io=-.55,e0=-2,yn=42.25,Un=43.65,$r=45.35,B0=46.75,h0=2.75,vr=.12,yE=(Io+e0)/2,Vo={x:-1.3,y:1.42,w:.42,h:.52,z:Un,cell:.026},ao={x0:-1.85,x1:-.75,top:.98,z0:Un-.3,z1:Un-.02},Cr={x0:-1.44,x1:-1.16,y0:ao.top-.002,y1:ao.top+.018},mr={cx:-1.3,cz:Un-.165,w:.2,d:.255,y:ao.top+.0012},b0={x:-1.03,z:Un-.14,r:.042,h:.075},sn={x:-.86,z:Un-.12,h:.085,r:.019};sn.flame=[sn.x,ao.top+.012+sn.h+.028,sn.z];var s1={a:[b0.x-.004,ao.top+.03,b0.z+.004],b:[b0.x-.13,ao.top+.34,b0.z-.12]},bn=[-1.5,2.42,44.66],Hn=[-1.78,1.95,yn+.09],Pr={x:-1.32,z:44.08,y:.64,heading:.32},Ay={window:{eye:[-1.3,1.33,42.8],target:[Vo.x,1.37,Un],fov:54},paper:{eye:[-1.3,1.4,43.23],target:[mr.cx,ao.top,mr.cz+.01],fov:40},front:{eye:[1.6,1.62,43],target:[-.9,1.35,43],fov:55},bay:{eye:[4.2,2.1,44.6],target:[-1,1.9,44.5],fov:55}},N0={z0:(yn+Un)/2+.03,z1:(yn+Un)/2+.56,y0:.98,y1:1.78,x:Io+.03,cell:.047};Ay.peek={eye:[-1.2,1.42,42.95],target:[va.PLAY.stoolX-va.OFF[0],.85,va.PLAY.keyFront+.2],fov:30};var ms={ink:null,inkDirty:!1,fold:0,slide:0,shown:!0,active:!1};function Ey(){return`
	// a quatrefoil hole in the brass (g: metres across the window from its centre)
	float grilleHole(vec2 g) {
		vec2 q = fract(g / ${$e(Vo.cell)} + 0.5) - 0.5;
		float d = min(min(length(q - vec2(0.17, 0.0)), length(q + vec2(0.17, 0.0))),
		              min(length(q - vec2(0.0, 0.17)), length(q + vec2(0.0, 0.17))));
		d = min(d, length(q) - 0.04);
		return 1.0 - smoothstep(0.15, 0.19, d);
	}
	// how much of the lamp's light reaches p (on the penitent's side) through the window
	float throughGrille(vec3 p, float soft) {
		vec3 d = p - ${Jr(bn)};
		if (d.z > -0.001) return 0.0;
		float t = (${$e(Vo.z)} - ${$e(bn[2])}) / d.z;
		vec2 g = (${Jr(bn)} + d * t).xy - vec2(${$e(Vo.x)}, ${$e(Vo.y)});
		float inWin = (1.0 - smoothstep(${$e(Vo.w/2-.01)}, ${$e(Vo.w/2)} + soft, abs(g.x))) *
		              (1.0 - smoothstep(${$e(Vo.h/2-.01)}, ${$e(Vo.h/2)} + soft, abs(g.y)));
		// the lamp is not a point: the pattern blurs the further it falls
		// from the brass
		float pen = 0.045 * abs(p.z - ${$e(Vo.z)}) / abs(${$e(Vo.z)} - ${$e(bn[2])}) / ${$e(Vo.cell)};
		vec2 qc = fract(g / ${$e(Vo.cell)} + 0.5) - 0.5;
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
		vec3 c = ${Jr(sn.flame)};
		vec3 d = c - p;
		float s = 1.0;
		// the pot: a short upright cylinder
		vec2 a = vec2(${$e(b0.x)}, ${$e(b0.z)}) - p.xz;
		vec2 dd = d.xz;
		float t = clamp(dot(a, dd) / max(dot(dd, dd), 1e-5), 0.0, 1.0);
		float r = length(p.xz + dd * t - vec2(${$e(b0.x)}, ${$e(b0.z)}));
		float y = p.y + d.y * t;
		s *= mix(1.0, 0.25, (1.0 - smoothstep(${$e(b0.r*.7)}, ${$e(b0.r*1.6)}, r)) * (1.0 - smoothstep(${$e(ao.top+b0.h*.8)}, ${$e(ao.top+b0.h*1.3)}, y)));
		// the quill: a thin capsule
		vec3 qa = ${Jr(s1.a)}, qb = ${Jr(s1.b)};
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
		bool inB1 = p.z < ${$e(Un)} && p.z > ${$e(yn-.04)} && p.x < ${$e(Io+.02)};
		bool inPriest = p.z >= ${$e(Un)} && p.z < ${$e($r)} && p.x < ${$e(Io)};
		bool inB2 = p.z >= ${$e($r)} && p.z < ${$e(B0+.04)} && p.x < ${$e(Io)};
		// how open to the hall it is
		float open = 1.0;
		if (inB1) open = mix(0.7, 1.1, smoothstep(${$e(e0)}, ${$e(Io)}, p.x));
		if (inPriest) open = 0.16;
		if (inB2) open = 0.10;
		// deeper into the bay, a little less of the hall's light
		open *= mix(0.62, 1.0, smoothstep(${$e(nn.x0)}, 0.3, p.x));
		// the stair hall's candlelight (it stands there now: see stairhall.js)
		vec3 rs;
		vec3 col = roomLight(p + ${Jr(va.OFF)}, N, V, gloss, rs) * 1.25 * open;
		spec += rs * open;
		// the lamp, warm, behind the brass
		vec3 Ld = ${Jr(bn)} - p;
		float dl = length(Ld);
		vec3 L = Ld / dl;
		float T = inPriest ? 1.0 : (inB1 ? throughGrille(p, 0.0) : 0.0);
		vec3 lampCol = vec3(1.0, 0.70, 0.40) * mix(3.2, 1.0, night);
		vec3 lamp = lampCol * T * max(dot(N, L), 0.0) / (1.0 + dl * dl * 1.6);
		col += lamp;
		spec += lampCol * T * pow(max(dot(N, normalize(L + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss / (1.0 + dl * dl * 1.6);
		// the little lamp in the open booth
		if (inB1) {
			vec3 Sd = ${Jr(Hn)} - p;
			float ds = length(Sd);
			vec3 Ls = Sd / ds;
			vec3 sc = vec3(1.0, 0.72, 0.42) * mix(1.5, 0.35, night);
			col += sc * (max(dot(N, Ls), 0.0) * 0.8 + 0.2) / (0.15 + ds * ds * 1.6);
			spec += sc * pow(max(dot(N, normalize(Ls + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss * 0.6 / (0.15 + ds * ds * 1.6);
		}
		// the candle
		if (night > 0.01) {
			vec3 Cd = ${Jr(sn.flame)} - p;
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
	}`}var t0={WOOD:0,CARVED:1,VELVET:2,CUSHION:3,BRASS:4,INKGLASS:5,QUILL:6,LAMPGLASS:7,DARKWOOD:8};function Ty(){let t=[],e=[],o=[],n=[],r=[],a=(h,l)=>[h[0]-l[0],h[1]-l[1],h[2]-l[2]],s=(h,l)=>[h[1]*l[2]-h[2]*l[1],h[2]*l[0]-h[0]*l[2],h[0]*l[1]-h[1]*l[0]],i=h=>{let l=Math.hypot(h[0],h[1],h[2])||1;return[h[0]/l,h[1]/l,h[2]/l]},c={pos:t,nrm:e,kind:o,uv:n,idx:r,norm:i,cross:s,sub:a};return c.v=(h,l,d,u)=>(t.push(h[0],h[1],h[2]),e.push(l[0],l[1],l[2]),o.push(d),n.push(u?u[0]:0,u?u[1]:0),t.length/3-1),c.quad=(h,l,d,u,p,f)=>{let v=i(s(a(l,h),a(u,h)));f=f||[[0,0],[1,0],[1,1],[0,1]];let m=c.v(h,v,p,f[0]),g=c.v(l,v,p,f[1]),x=c.v(d,v,p,f[2]),y=c.v(u,v,p,f[3]);r.push(m,g,x,m,x,y)},c.box=(h,l,d,u,p,f,v)=>{let m=(g,x,y,w,M,_,k,O)=>c.quad(g,x,y,w,v,[[M,k],[_,k],[_,O],[M,O]]);m([u,l,d],[u,l,f],[u,p,f],[u,p,d],d,f,l,p),m([h,l,f],[h,l,d],[h,p,d],[h,p,f],f,d,l,p),m([h,p,d],[u,p,d],[u,p,f],[h,p,f],h,u,d,f),m([h,l,f],[u,l,f],[u,l,d],[h,l,d],h,u,f,d),m([h,l,f],[u,l,f],[u,p,f],[h,p,f],h,u,l,p),m([u,l,d],[h,l,d],[h,p,d],[u,p,d],u,h,l,p)},c.tube=(h,l,d,u)=>{u=u||6;let p=t.length/3;for(let f=0;f<h.length;f++){let v=h[Math.max(0,f-1)],m=h[Math.min(h.length-1,f+1)],g=i(a(m,v)),x=Math.abs(g[1])>.9?[1,0,0]:[0,1,0],y=i(s(g,x)),w=s(y,g),M=typeof l=="function"?l(f/(h.length-1)):l;for(let _=0;_<=u;_++){let k=_/u*gs*2,O=Math.cos(k),N=Math.sin(k),G=[y[0]*O+w[0]*N,y[1]*O+w[1]*N,y[2]*O+w[2]*N];c.v([h[f][0]+G[0]*M,h[f][1]+G[1]*M,h[f][2]+G[2]*M],G,d,[f/(h.length-1),_/u])}}for(let f=0;f<h.length-1;f++)for(let v=0;v<u;v++){let m=p+f*(u+1)+v,g=m+u+1;r.push(m,m+1,g,m+1,g+1,g)}},c.lathe=(h,l,d,u,p)=>{p=p||20;let f=t.length/3;for(let v=0;v<d.length;v++){let[m,g]=d[v],x=d[Math.max(0,v-1)],y=d[Math.min(d.length-1,v+1)],w=y[0]-x[0],M=y[1]-x[1];for(let _=0;_<=p;_++){let k=_/p*gs*2,O=Math.cos(k),N=Math.sin(k),G=i([M*O,-w,M*N]);c.v([h+O*m,g,l+N*m],G,u,[_/p,v/(d.length-1)])}}for(let v=0;v<d.length-1;v++)for(let m=0;m<p;m++){let g=f+v*(p+1)+m,x=g+p+1;r.push(g,x,g+1,g+1,x,x+1)}},c.spire=(h,l,d,u,p,f)=>{let v=[[-u,-u],[u,-u],[u,u],[-u,u]];for(let m=0;m<4;m++){let g=v[m],x=v[(m+1)%4],y=[h+g[0],d,l+g[1]],w=[h+x[0],d,l+x[1]],M=[h,p,l],_=i(s(a(M,y),a(w,y))),k=c.v(y,_,f,[0,0]),O=c.v(w,_,f,[1,0]),N=c.v(M,_,f,[.5,1]);r.push(k,N,O)}},c.orient=()=>{for(let h=0;h<r.length;h+=3){let[l,d,u]=[r[h],r[h+1],r[h+2]],p=m=>[t[m*3],t[m*3+1],t[m*3+2]],f=s(a(p(d),p(l)),a(p(u),p(l))),v=[0,1,2].map(m=>e[l*3+m]+e[d*3+m]+e[u*3+m]);f[0]*v[0]+f[1]*v[1]+f[2]*v[2]<0&&(r[h+1]=u,r[h+2]=d)}return c},c}function a1(t,e,o,n){if(t<=e)return o;let r=t-e;return r>=n?0:Math.max(0,Math.sqrt(n*n-r*r)-(n-o))}var mn={ys:1.78,a:.56,r:.78};mn.apex=mn.ys+Math.sqrt(mn.r*mn.r-(mn.r-mn.a)*(mn.r-mn.a));function bE(){let t=Ty(),e=t0.WOOD,o=t0.CARVED,n=t0.DARKWOOD,r=.06;t.box(e0,0,yn,Io+.08,vr,B0,n),t.box(e0,h0-.06,yn-.04,Io+.1,h0,B0+.04,e),t.box(Io,h0-.2,yn-.06,Io+.12,h0-.06,B0+.06,e),t.box(Io+.02,h0,yn-.08,Io+.14,h0+.07,B0+.08,n),t.box(e0,vr,yn,e0+.04,h0-.06,B0,e);for(let[l,d,u]of[[yn-r,yn,-1],[B0,B0+r,1]]){t.box(e0,0,l,Io+.08,h0,d,e);let p=u<0?l-.018:d;t.box(e0+.18,.45,Math.min(p,p+.018),Io-.12,2.35,Math.max(p,p+.018),n),t.box(e0+.26,.55,Math.min(p,p+.03*u),Io-.2,2.25,Math.max(p,p+.03*u),e)}{let l=Un-.02,d=Un+.02,u=Vo.x-Vo.w/2,p=Vo.x+Vo.w/2,f=Vo.y-Vo.h/2,v=Vo.y+Vo.h/2;t.box(e0,vr,l,Io,Cr.y0,d,e),t.box(e0,Cr.y0,l,Cr.x0,Cr.y1,d,e),t.box(Cr.x1,Cr.y0,l,Io,Cr.y1,d,e),t.box(e0,Cr.y1,l,Io,f,d,e),t.box(e0,f,l,u,v,d,e),t.box(p,f,l,Io,v,d,e),t.box(e0,v,l,Io,h0-.06,d,e);let m=.05,g=l-.025;t.box(u-m,f-m,g,p+m,f,l,n),t.box(u-m,v,g,p+m,v+m,l,n),t.box(u-m,f,g,u,v,l,n),t.box(p,f,g,p+m,v,l,n),t.box(u-m-.02,v+m,g-.015,p+m+.02,v+m+.03,l,e),t.box(Cr.x0-.01,Cr.y1,l-.006,Cr.x1+.01,Cr.y1+.008,l,t0.BRASS)}{let l=N0,d=Io+.008,u=Io+.052;t.box(d,l.y0,l.z0-.035,u,l.y1,l.z0,n),t.box(d,l.y0,l.z0,u,l.y0+.04,l.z1,n),t.box(d,l.y1-.04,l.z0,u,l.y1,l.z1,n),t.box(d+.008,vr,l.z0-.035,u-.008,l.y0,l.z1,e),t.box(u-.008,vr+.12,l.z0+.03,u,l.y0-.08,l.z1-.06,n),t.box(d-.004,l.y0-.012,l.z0-.045,u+.012,l.y0,l.z1,t0.BRASS)}t.box(e0,vr,$r-.02,Io,h0-.06,$r+.02,e),t.box(ao.x0,ao.top-.035,ao.z0,ao.x1,ao.top,ao.z1,e),t.tube([[ao.x0,ao.top-.018,ao.z0],[ao.x1,ao.top-.018,ao.z0]],.02,e,8);for(let l of[ao.x0+.1,ao.x1-.1]){let d=[];for(let u=0;u<=8;u++){let p=u/8;d.push([l,ao.top-.04-.22*p,ao.z1-.02-.22*Math.cos(p*gs/2)])}t.tube(d,.018,n,6)}t.box(e0+.06,.12,yn,Io-.1,.44,yn+.42,n),t.box(e0+.08,.44,yn+.01,Io-.12,.52,yn+.41,t0.CUSHION),t.box(e0+.06,.12,B0-.42,Io-.1,.44,B0,n),t.box(Hn[0]-.05,Hn[1]-.16,yn,Hn[0]+.05,Hn[1]-.02,yn+.012,t0.BRASS),t.tube([[Hn[0],Hn[1]-.09,yn+.012],[Hn[0],Hn[1]-.09,Hn[2]-.01],[Hn[0],Hn[1]-.05,Hn[2]]],.006,t0.BRASS,6),t.lathe(Hn[0],Hn[2],[[0,Hn[1]-.05],[.028,Hn[1]-.035],[.034,Hn[1]+.01],[.024,Hn[1]+.06],[.026,Hn[1]+.065]],t0.LAMPGLASS,16),t.box(Pr.x-.22,.12,Pr.z-.24,Pr.x+.22,Pr.y-.05,Pr.z+.16,n),t.box(Pr.x-.24,Pr.y-.05,Pr.z-.26,Pr.x+.24,Pr.y,Pr.z+.18,t0.CUSHION),t.tube([[bn[0],h0-.06,bn[2]],[bn[0],bn[1]+.07,bn[2]]],.005,t0.BRASS,5),t.lathe(bn[0],bn[2],[[0,bn[1]+.09],[.03,bn[1]+.08],[.02,bn[1]+.06]],t0.BRASS,12),t.lathe(bn[0],bn[2],[[0,bn[1]-.06],[.035,bn[1]-.04],[.045,bn[1]],[.035,bn[1]+.05],[.018,bn[1]+.07]],t0.LAMPGLASS,16);let a=Io,s=Io+r;function i(l,d,u){let p=(l+d)/2,f=40,v=[];for(let g=0;g<=f;g++)v.push(vr+(h0-.2-vr)*g/f);let m=[];v.forEach(g=>m.push(g));for(let g=1;g<24;g++)m.push(mn.ys+(mn.apex-mn.ys)*g/24);m.sort((g,x)=>g-x);for(let g=0;g<m.length-1;g++){let x=m[g],y=m[g+1];if(y-x<1e-4)continue;let w=u?a1(x,mn.ys,mn.a,mn.r):0,M=u?a1(y,mn.ys,mn.a,mn.r):0,_=(k,O)=>[k,O];t.quad([s,x,p-w],[s,x,l],[s,y,l],[s,y,p-M],e,[_(p-w,x),_(l,x),_(l,y),_(p-M,y)]),t.quad([s,x,d],[s,x,p+w],[s,y,p+M],[s,y,d],e,[_(d,x),_(p+w,x),_(p+M,y),_(d,y)]),(w>0||M>0)&&(t.quad([a,x,p-w],[s,x,p-w],[s,y,p-M],[a,y,p-M],n),t.quad([s,x,p+w],[a,x,p+w],[a,y,p+M],[s,y,p+M],n),t.quad([a,x,l],[a,x,p-w],[a,y,p-M],[a,y,l],e),t.quad([a,x,p+w],[a,x,d],[a,y,d],[a,y,p+M],e))}if(t.box(a,h0-.2,l,s,h0-.06,d,e),t.box(s,h0-.42,l+.05,s+.012,h0-.24,d-.05,o),u){let g=[];for(let x=0;x<=30;x++){let y=x/30,w=y<.5?vr+(mn.apex-vr)*(y*2):mn.apex-(mn.apex-vr)*((y-.5)*2),M=y<.5?-1:1;g.push([s+.01,Math.min(w,mn.apex-.002),p+M*(a1(w,mn.ys,mn.a,mn.r)+.03)])}t.tube(g,.022,n,6)}}i(yn,Un,!0),i($r,B0,!0);{let l=Un,d=$r,u=(l+d)/2;t.box(a,vr,l,s,h0-.06,d,e);let p={ys:1.85,a:.55,r:.8},f=[];for(let v=0;v<=40;v++){let m=v/40,g=p.ys+Math.sqrt(p.r*p.r-(p.r-p.a)*(p.r-p.a)),x=m<.5?.35+(g-.35)*(m*2):g-(g-.35)*((m-.5)*2),y=m<.5?-1:1;f.push([s+.012,Math.min(x,g-.002),u+y*a1(x,p.ys,p.a,p.r)])}f.push(f[0]),t.tube(f,.02,n,6),t.box(s,.95,u-.22,s+.015,1.3,u+.22,o),t.box(s,.35,u-.42,s+.01,.75,u+.42,n),t.tube([[s+.03,1.12,d-.13],[s+.06,1.12,d-.13],[s+.06,1.12,d-.2]],.009,t0.BRASS,6)}[yn-.02,Un,$r,B0+.02].forEach((l,d)=>{let u=d===1||d===2,p=.075,f=h0+(u?.62:.4);t.box(Io+.06,0,l-p,Io+.06+2*p,f,l+p,e),t.box(Io+.04,f-.04,l-p-.02,Io+.08+2*p,f,l+p+.02,n);let v=Io+.06+p,m=u?.62:.5;t.spire(v,l,f,p*.95,f+m,e);for(let g=1;g<=3;g++){let x=f+m*g/4.2,y=p*.95*(1-g/4.2)+.02;for(let[w,M]of[[1,0],[-1,0],[0,1],[0,-1]])t.tube([[v+w*(y-.02),x-.02,l+M*(y-.02)],[v+w*(y+.015),x+.03,l+M*(y+.015)]],.008,n,4)}t.lathe(v,l,[[0,f+m-.02],[.03,f+m+.03],[.022,f+m+.07],[0,f+m+.1]],e,10)});let h=(l,d,u)=>{let p=(l+d)/2,f=Io+.075,v=h0+.07,m=v+u,g=[1,0,0],x=t.v([f,v,l],g,o,[l,v]),y=t.v([f,v,d],g,o,[d,v]),w=t.v([f,m,p],g,o,[p,m]);t.idx.push(x,y,w);let M=t.v([f-.04,v,l],[-1,0,0],e),_=t.v([f-.04,v,d],[-1,0,0],e),k=t.v([f-.04,m,p],[-1,0,0],e);t.idx.push(M,k,_);let O=[],N=[];for(let D=0;D<=10;D++){let U=D/10;O.push([f+.02,v+u*U,l+(p-l)*U]),N.push([f+.02,v+u*U,d+(p-d)*U])}t.tube(O,.022,n,6),t.tube(N,.022,n,6);for(let D=2;D<=8;D+=2)for(let U of[O[D],N[D]])t.tube([U,[U[0]+.01,U[1]+.06,U[2]+(U===O[D]?-.02:.02)]],.01,n,4);t.lathe(f,p,[[0,m],[.035,m+.06],[.022,m+.12],[0,m+.16]].map(([D,U])=>[D,U]),e,10);let G=Math.min(.17,u*.32),$=v+u*.38,V=[];for(let D=0;D<=24;D++){let U=D/24*gs*2;V.push([f+.012,$+Math.sin(U)*G,p+Math.cos(U)*G])}t.tube(V,.012,n,5)};h(yn-.02,Un,.52),h(Un,$r,.82),h($r,B0+.02,.52),t.lathe(b0.x,b0.z,[[0,ao.top],[.036,ao.top+.001],[b0.r,ao.top+.012],[b0.r*1.02,ao.top+.035],[.036,ao.top+.052],[.02,ao.top+.062],[.016,ao.top+.068]],t0.INKGLASS,24),t.lathe(b0.x,b0.z,[[.016,ao.top+.064],[.021,ao.top+.066],[.022,ao.top+.075],[.016,ao.top+.076],[0,ao.top+.072]],t0.BRASS,20);{let l=s1.a,d=s1.b,u=26,p=x=>{let y=Math.sin(x*gs)*.025;return[l[0]+(d[0]-l[0])*x+y*.6,l[1]+(d[1]-l[1])*x+y*.4,l[2]+(d[2]-l[2])*x+y]},f=[];for(let x=0;x<=u;x++)f.push(p(x/u));t.tube(f,x=>.0028*(1-.7*x)+6e-4,t0.QUILL,5);let v=t.norm(t.sub(d,l)),m=t.norm(t.cross(v,[.2,1,.1])),g=t.cross(m,v);for(let x of[-1,1]){let y=t.pos.length/3;for(let w=0;w<=u;w++){let M=w/u,_=p(M),k=M<.28?0:(x>0?.03:.02)*Math.sin(gs*Math.pow((M-.28)/.72,.75)),O=k*.25,N=[_[0]+m[0]*x*k-g[0]*O,_[1]+m[1]*x*k-g[1]*O,_[2]+m[2]*x*k-g[2]*O];t.v(_,g,t0.QUILL,[M,0]),t.v(N,g,t0.QUILL,[M,x])}for(let w=0;w<u;w++){let M=y+w*2;t.idx.push(M,M+2,M+1,M+1,M+2,M+3)}}}return t.orient()}function wE(t,e){let n=nn.top,r=nn.x0;t(r-.35,0,nn.z0-.35,r,n+.35,nn.z1+.35),t(r,0,nn.z0-.35,-.35,n,nn.z0),t(r,0,nn.z1,-.35,n,nn.z1+.35),t(r,n,nn.z0,-.35,n+.35,nn.z1),t(.35,0,nn.z0-.42,.35+.16,n,nn.z0),t(.35,0,nn.z1,.35+.16,n,nn.z1+.42),t(.35,n,nn.z0-.5,.35+.18,n+.42,nn.z1+.5),t(.35,n+.42,nn.z0-.6,.35+.26,n+.52,nn.z1+.6),t(.35,0,nn.z0-.5,.35+.22,.42,nn.z0),t(.35,0,nn.z1,.35+.22,.42,nn.z1+.5),t(-.35-.01,0,nn.z0,.35+.12,.02,nn.z1),e(r,nn.z0,-.35,nn.z1)}gr.exports=t=>{let e=Ya(),o=Sy.GLSL,n=bE(),r=`
	precision highp float;
	${o}
	uniform float time;
	${e.lanternGLSL()}
	${va.roomGLSL()}
	${Ey()}
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
		}`,attributes:{position:n.pos,normal:n.nrm,kind:n.kind,uv:n.uv},elements:n.idx});function i(Lt,gt,tt,W){let st=[],wt=[],$t=[],Ut=[],be=[],Ot=Io-.02,ie=mn.apex+.08,Oe=vr+.015;for(let Ue=0;Ue<=40;Ue++){let Ge=Ue/40,ve=ie+(Oe-ie)*Ge;for(let ye=0;ye<=90;ye++){let mt=ye/90,ue=tt?.2+.13*Ge*Ge:gt-Lt,Be=Lt+mt*ue,Le=tt?.05+.02*Ge:.035+.01*Math.sin(mt*7),oe=mt*W*gs*2+Math.sin(Ge*2+mt*5)*.6,So=Ot-Le*(.5+.5*Math.sin(oe))-(tt?.02*Ge:0),ho=[1,0,-(-Le*.5*Math.cos(oe)*W*gs*2/ue)],io=Math.hypot(ho[0],ho[1],ho[2]);st.push(So,ve,Be),wt.push(ho[0]/io,0,ho[2]/io),$t.push(2),Ut.push(Math.sin(oe),Ge)}}for(let Ue=0;Ue<40;Ue++)for(let Ge=0;Ge<90;Ge++){let ve=Ue*91+Ge,ye=ve+90+1;be.push(ve,ye,ve+1,ve+1,ye,ye+1)}for(let Ue=0;Ue<be.length;Ue+=3){let[Ge,ve,ye]=[be[Ue],be[Ue+1],be[Ue+2]],mt=oe=>[st[oe*3],st[oe*3+1],st[oe*3+2]],ue=[0,1,2].map(oe=>mt(ve)[oe]-mt(Ge)[oe]),Be=[0,1,2].map(oe=>mt(ye)[oe]-mt(Ge)[oe]);ue[1]*Be[2]-ue[2]*Be[1]<0&&(be[Ue+1]=ye,be[Ue+2]=ve)}return{pos:st,nrm:wt,kind:$t,uv:Ut,idx:be}}let c=i(yn+.02,yn+.4,!0,6),h=i($r+.04,B0-.04,!1,9),l={pos:c.pos.concat(h.pos),nrm:c.nrm.concat(h.nrm),kind:c.kind.concat(h.kind),uv:c.uv.concat(h.uv),idx:c.idx.concat(h.idx.map(Lt=>Lt+c.pos.length/3))},d=t({vert:`
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
		}`,attributes:{position:l.pos,normal:l.nrm,uv:l.uv},elements:l.idx}),u=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec2 corner;
		varying vec3 v_pos, v_eye;
		void main() {
			vec3 p = vec3(${$e(Vo.x)} + corner.x * ${$e(Vo.w/2)}, ${$e(Vo.y)} + corner.y * ${$e(Vo.h/2)}, ${$e(Vo.z)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${r}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = v_pos.xy - vec2(${$e(Vo.x)}, ${$e(Vo.y)});
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(0.0, 0.0, v_eye.z < ${$e(Vo.z)} ? -1.0 : 1.0);
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
			vec3 p = vec3(${$e(N0.x)}, ${$e((N0.y0+N0.y1)/2)} + corner.y * ${$e((N0.y1-N0.y0)/2-.04)}, ${$e((N0.z0+N0.z1)/2)} + corner.x * ${$e((N0.z1-N0.z0)/2)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${r}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = (v_pos.zy - vec2(${$e((N0.z0+N0.z1)/2)}, ${$e((N0.y0+N0.y1)/2)})) * ${$e(Vo.cell/N0.cell)};
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(v_eye.x < ${$e(N0.x)} ? -1.0 : 1.0, 0.0, 0.0);
			vec3 V = normalize(v_eye - v_pos);
			vec3 spec;
			vec3 light = boothLight(v_pos + N * 0.01, N, V, 0.8, spec);
			vec3 base = vec3(0.16, 0.10, 0.05);
			vec3 col = base * light + spec * 0.6;
			// the rims of the holes catch the candles in the hall beyond
			float edge = smoothstep(0.25, 0.5, hole);
			col += vec3(1.0, 0.62, 0.30) * edge * (N.x < 0.0 ? 0.30 : 0.10);
			gl_FragColor = vec4(col, 1.0);
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,cull:{enable:!1}}),f=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec2 corner;
		varying vec2 v_c;
		void main() {
			vec3 p = vec3(${$e(Vo.x)} + corner.x * 0.75, ${$e(Vo.y)} + corner.y * 0.9, ${$e($r-.03)});
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),v=14,m=[];for(let Lt=0;Lt<v;Lt++)[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(gt=>m.push(gt[0],gt[1],(Lt+.5)/v));let g=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 c;
		varying vec3 v_pos;
		void main() {
			// slices across the booth, from the window back towards the bench
			vec3 p = vec3(${$e(yE)} + c.x * ${$e((Io-e0)/2-.02)}, 0.9 + (c.y + 1.0) * 0.8, ${$e(Un-.03)} - c.z * 1.25);
			v_pos = p;
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`
		precision highp float;
		uniform float night, time;
		${Ey().split("// the candle's light is hidden")[0]}
		varying vec3 v_pos;
		void main() {
			float T = throughGrille(v_pos, 0.0);
			float d = length(v_pos - ${Jr(bn)});
			// dust drifting in the beam
			float dust = 0.65 + 0.35 * sin(v_pos.x * 23.0 + time * 0.3) * sin(v_pos.y * 17.0 - time * 0.21) * sin(v_pos.z * 19.0 + time * 0.17);
			vec3 col = vec3(1.0, 0.68, 0.36) * T * dust * 0.035 / (0.4 + d * d * 0.5) * mix(1.0, 0.7, night);
			gl_FragColor = vec4(col, 1.0);
		}`.replace("float grilleHole","float grilleHole"),attributes:{c:{buffer:t.buffer(m),size:3}},count:m.length/3,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}}),x=(()=>{if(typeof document=="undefined")return null;let Lt=document.createElement("canvas");Lt.width=512,Lt.height=652;let gt=Lt.getContext("2d");gt.fillStyle="#cdb38a",gt.fillRect(0,0,Lt.width,Lt.height);let tt=7,W=()=>(tt=tt*1664525+1013904223>>>0,tt/4294967296);for(let wt=0;wt<2400;wt++){gt.fillStyle=`rgba(${W()<.5?"90,62,30":"245,230,200"},${.03+W()*.05})`;let $t=W()*Lt.width,Ut=W()*Lt.height;gt.fillRect($t,Ut,1+W()*14,1)}for(let wt=0;wt<26;wt++){let $t=W()*Lt.width,Ut=W()*Lt.height,be=20+W()*90,De=gt.createRadialGradient($t,Ut,0,$t,Ut,be);De.addColorStop(0,`rgba(120,80,35,${.04+W()*.06})`),De.addColorStop(1,"rgba(120,80,35,0)"),gt.fillStyle=De,gt.fillRect($t-be,Ut-be,be*2,be*2)}let st=gt.createRadialGradient(Lt.width/2,Lt.height/2,Lt.width*.3,Lt.width/2,Lt.height/2,Lt.height*.72);return st.addColorStop(0,"rgba(110,70,30,0)"),st.addColorStop(1,"rgba(110,70,30,0.38)"),gt.fillStyle=st,gt.fillRect(0,0,Lt.width,Lt.height),Lt})(),y=x?t.texture({data:x,min:"linear",mag:"linear",flipY:!1}):t.texture(),w=t.texture({shape:[8,8],data:new Uint8Array(8*8*4)}),M=[18,24],_=[],k=[];for(let Lt=0;Lt<=M[1];Lt++)for(let gt=0;gt<=M[0];gt++)_.push(gt/M[0],Lt/M[1]);for(let Lt=0;Lt<M[1];Lt++)for(let gt=0;gt<M[0];gt++){let tt=Lt*(M[0]+1)+gt,W=tt+M[0]+1;k.push(tt,tt+1,W,tt+1,W+1,W)}let O=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale, fold, slide;
		attribute vec2 st;
		varying vec3 v_pos, v_n, v_eye;
		varying vec2 v_st;
		void main() {
			// s across (texture left = +x), t from the near edge (0) to the far (1)
			float s = st.x, t = st.y;
			float x = ${$e(mr.cx+mr.w/2)} - s * ${$e(mr.w)};
			float zNear = ${$e(mr.cz-mr.d/2)};
			vec3 p = vec3(x, ${$e(mr.y)}, zNear + t * ${$e(mr.d)});
			vec3 n = vec3(0.0, 1.0, 0.0);
			// a slight cockle
			p.y += 0.0012 * sin(s * 7.0 + t * 3.0) * sin(t * 5.0);
			// the near half folds up and over onto the far half
			if (t < 0.5) {
				float a = fold * 3.14159 * 0.985;
				float dd = (0.5 - t) * ${$e(mr.d)};
				float zf = zNear + 0.5 * ${$e(mr.d)};
				p.z = zf - dd * cos(a);
				p.y = ${$e(mr.y)} + dd * sin(a) + 0.0016 * fold;
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
			if (v_pos.z > ${$e(Un+.015)}) discard;
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
		}`,attributes:{st:{buffer:t.buffer(_),size:2}},elements:k,uniforms:{fold:()=>ms.fold,slide:()=>ms.slide,paperTex:y,inkTex:w},cull:{enable:!1}}),N=Ty();N.lathe(sn.x,sn.z,[[0,ao.top],[.048,ao.top+.002],[.052,ao.top+.012],[.046,ao.top+.014],[.022,ao.top+.012],[0,ao.top+.012]],t0.BRASS,24),N.lathe(sn.x,sn.z,[[0,ao.top+.012],[sn.r,ao.top+.012],[sn.r*1.02,ao.top+.012+sn.h*.6],[sn.r,ao.top+.012+sn.h],[sn.r*.75,ao.top+.012+sn.h-.004],[0,ao.top+.012+sn.h-.008]],9,20),N.tube([[sn.x,ao.top+.012+sn.h-.008,sn.z],[sn.x+.001,ao.top+.012+sn.h+.012,sn.z]],.0012,8,4),N.orient();let G=t({vert:a,frag:`${r}
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
				float up = smoothstep(${$e(ao.top+sn.h*.4)}, ${$e(ao.top+.012+sn.h)}, v_pos.y);
				col += vec3(1.0, 0.55, 0.22) * up * 0.22 * candleFlicker();
			}
			gl_FragColor = vec4(col * night, 1.0);
		}`,attributes:{position:N.pos,normal:N.nrm,kind:N.kind,uv:N.uv},elements:N.idx}),$=t({vert:`
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
			vec3 p = ${Jr(sn.flame)} + right * corner.x * size.x + vec3(0.0, 1.0, 0.0) * corner.y * size.y;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{halo:t.prop("halo")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),V=[0,0],D=t({uniforms:{view:t.prop("view")}}),U=new Float32Array(16);function ht(Lt){xE.translate(U,Lt.view,va.OFF),D({view:U},()=>jt(Lt))}function jt(Lt){let gt=Lt&&Lt.reflected;if(s(),d(),u(),p(),ms.ink&&ms.inkDirty){let tt=ms.ink;V[0]!==tt.width||V[1]!==tt.height?(w({data:tt,min:"linear",mag:"linear",flipY:!1}),V=[tt.width,tt.height]):w.subimage(tt),ms.inkDirty=!1}ms.shown&&O(),Sy.night>.01&&(G(),gt||($({halo:1}),$({halo:0}))),gt||(f(),g())}return ht};gr.exports.addBay=wE;gr.exports.BAY=nn;gr.exports.OFF=va.OFF;gr.exports.STATE=ms;var zy=t=>[t[0]+va.OFF[0],t[1]+va.OFF[1],t[2]+va.OFF[2]];gr.exports.SHOTS=Object.fromEntries(Object.entries(Ay).map(([t,e])=>[t,Object.assign({},e,{eye:zy(e.eye),target:zy(e.target)})]));gr.exports.SEAT=Pr;gr.exports.LAMP=bn;gr.exports.SCONCE=Hn;gr.exports.GRILLE=Vo;gr.exports.PAPER=mr;gr.exports.ZONE={FRONT:Io,BACK:e0,ZA:yn,ZB:Un,ZC:$r,ZD:B0}});var Zd=St((N7,Ny)=>{"use strict";function _E(t){let e=t>>>0||1;return function(){return e=e*1664525+1013904223>>>0,e/4294967296}}var Ly={stroke:.05,letter:.045,word:.15,comma:.28,stop:.45,line:.25,para:.6},ME=["th","ng","er"];function kE(t,e,o){o=Object.assign({ink:"#2a1d12",xh:14,speed:23,lineHeight:2.85,seed:7,width:.12,pace:.45},o||{});let n=t.getContext("2d"),r={};Object.keys(Ly).forEach(v=>{r[v]=Ly[v]*o.pace});let a=[],s=0,i=0,c=0,h=[];function l(v,m){let g=_E(o.seed),x=o.xh,y={},w=U=>{let ht=e[U];if(!ht)return null;let jt=Math.floor(g()*ht.length);return ht.length>1&&jt===y[U]&&(jt=(jt+1)%ht.length),y[U]=jt,ht[jt]},M=U=>{if(e[U])return{g:w(U),sc:1};let ht=U.toLowerCase();return e[ht]?{g:w(ht),sc:/[A-Z]/.test(U)?1.32:1}:null},_=[],k=.15,O=0,N=0,G=(g()-.5)*.02,$=m/x,V=v.split(/\n\s*\n/);V.forEach((U,ht)=>{U.replace(/\s+/g," ").trim().split(" ").forEach(Lt=>{let gt=[];for(let wt=0;wt<Lt.length;wt++){let $t=Lt.substr(wt,2).toLowerCase();if(ME.indexOf($t)>=0&&e[$t]&&g()<.55&&Lt[wt]===Lt[wt].toLowerCase()){gt.push({ch:$t,gl:{g:w($t),sc:1}}),wt++;continue}let Ut=M(Lt[wt]);Ut&&Ut.g&&gt.push({ch:Lt[wt],gl:Ut})}let tt=gt.map(()=>.17+g()*.07),W=gt.reduce((wt,$t,Ut)=>wt+$t.gl.g.w*$t.gl.sc+tt[Ut],0);O>0&&O+W>$&&(O=0,N++,k+=r.line,G=(g()-.5)*.02),gt.forEach((wt,$t)=>{let Ut=wt.gl.g,be=wt.gl.sc*(.95+g()*.1),De=(g()-.5)*.06,He=(g()-.5)*.08+G*O,Ot=O,ie=N*o.lineHeight+1.9+He,Oe=Math.cos(De),Ue=Math.sin(De),Ge=ye=>[(Ot+(ye[0]*Oe-ye[1]*Ue)*be)*x,(ie+(ye[0]*Ue+ye[1]*Oe)*be)*x],ve=(ye,mt)=>{let ue=0;for(let Le=1;Le<ye.length;Le++)ue+=Math.hypot(ye[Le][0]-ye[Le-1][0],ye[Le][1]-ye[Le-1][1]);let Be=Math.max(o.minDur||(mt?.06:.07),ue/(o.speed*x));_.push({pts:ye,L:ue,start:k,dur:Be,dot:mt}),k+=Be};if(Ut.s.forEach((ye,mt)=>{mt>0&&(k+=r.stroke),ve(ye.map(Ge),!1)}),Ut.dot){let ye=Ut.s[0][0];Ut.s.forEach(ue=>ue.forEach(Be=>{Be[1]<ye[1]&&(ye=Be)}));let mt=Ge([ye[0]+.1,-1.36]);k+=r.stroke*1.4,ve([mt,[mt[0]+x*.05,mt[1]+x*.03]],!0)}k+=r.letter*(.6+g()*.8),O+=Ut.w*be+tt[$t]});let st=Lt[Lt.length-1];k+=/[.!?]/.test(st)?r.stop:/[,;:]/.test(st)?r.comma:r.word,O+=.55+g()*.2}),ht<V.length-1&&(O=0,N+=1.6,k+=r.para)});let D=(N+1)*o.lineHeight*x+x*1.55;return{strokes:_,total:k,height:D}}function d(v,m){if(o.fixed){let g=o.fixed;n.setTransform(1,0,0,1,g.mx,g.my),n.clearRect(-g.mx,-g.my,t.width,t.height)}else{let g=Math.min(window.devicePixelRatio||1,2);t.width=Math.round(v*g),t.height=Math.round(m*g),t.style.height=m+"px",t.style.width=v+"px",n.setTransform(g,0,0,g,0,0),n.clearRect(0,0,v,m)}n.strokeStyle=o.ink,n.fillStyle=o.ink,n.lineCap="round",n.lineJoin="round",o.shadow&&(n.shadowColor=o.shadow,n.shadowBlur=o.shadowBlur||6)}let u=v=>v<.5?2*v*v:1-Math.pow(-2*v+2,2)/2;function p(v,m){let g=h[v.i]||0;if(m<=g)return;let x=o.width*o.xh,y=0;for(let w=1;w<v.pts.length;w++){let M=v.pts[w-1],_=v.pts[w],k=Math.hypot(_[0]-M[0],_[1]-M[1]),O=y,N=y+k;if(y=N,N<=g||k===0)continue;if(O>=m)break;let G=Math.max(0,(g-O)/k),$=Math.min(1,(m-O)/k),V=[M[0]+(_[0]-M[0])*G,M[1]+(_[1]-M[1])*G],D=[M[0]+(_[0]-M[0])*$,M[1]+(_[1]-M[1])*$],U=(O+N)/2/(v.L||1),ht=.72+.28*Math.sin(Math.PI*Math.min(1,Math.max(0,U)));n.lineWidth=x*ht,n.globalAlpha=.86+.14*ht,n.beginPath(),n.moveTo(V[0],V[1]),n.lineTo(D[0],D[1]),n.stroke()}v.dot&&g===0&&(n.globalAlpha=1,n.beginPath(),n.arc(v.pts[0][0],v.pts[0][1],x*.75,0,Math.PI*2),n.fill()),h[v.i]=m}function f(v){let m=(v-c)/1e3;for(let g=0;g<a.length;g++){let x=a[g];if(x.start>m)break;let y=Math.min(1,(m-x.start)/x.dur);p(x,u(y)*x.L)}if(o.onPen){let g=0;for(;g+1<a.length&&a[g+1].start<=m;)g++;a[g]&&o.onPen(a[g].pts[0][1])}m<s?i=requestAnimationFrame(f):o.onDone&&o.onDone()}return{write(v,m){cancelAnimationFrame(i);let g=o.fixed?t.width-2*o.fixed.mx:t.parentElement.clientWidth,x=l(v,g);a=x.strokes,s=x.total;let y=typeof o.maxTime=="function"?o.maxTime(v):o.maxTime;if(y&&s>y){let M=y/s;a.forEach(_=>{_.start*=M,_.dur*=M}),s=y}a.forEach((M,_)=>{M.i=_}),h=[],d(g,x.height);let w=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(m||w){a.forEach(M=>p(M,M.L));return}return c=performance.now(),i=requestAnimationFrame(f),s},finish(){cancelAnimationFrame(i),a.forEach(v=>p(v,v.L)),o.onDone&&o.onDone()},stop(){cancelAnimationFrame(i)}}}Ny.exports=kE});var tp=St((R7,Ry)=>{"use strict";var Jd=i0(),SE='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7"/></svg>',EE='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M19.5 14.6A8 8 0 0 1 9.4 4.5a8 8 0 1 0 10.1 10.1z"/></svg>';Ry.exports=function(e){let o=document.createElement("button");o.type="button",o.className=e+" light-toggle";let n=()=>{let r=Jd.isNight;o.innerHTML=r?SE:EE,o.setAttribute("aria-label",r?"Switch to day":"Switch to night"),o.title=r?"Day":"Night",o.setAttribute("aria-pressed",r?"true":"false")};return n(),Jd.onChange(n),["mousedown","pointerdown"].forEach(r=>o.addEventListener(r,a=>a.stopPropagation())),o.addEventListener("click",r=>{r.stopPropagation(),Jd.toggle()}),o}});var $y=St((O7,Py)=>{"use strict";var Bn=i1(),zE=Za(),AE=Zd(),TE="81efb912-50a2-4fcd-b5e8-c3a28eecbe93",Oy=100,$a=t=>Math.max(0,Math.min(1,t)),nr=(t,e,o)=>{let n=$a((o-t)/(e-t));return n*n*(3-2*n)},ta=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,Ir=(t,e,o)=>t+(e-t)*o,rf=(t,e,o)=>[Ir(t[0],e[0],o),Ir(t[1],e[1],o),Ir(t[2],e[2],o)];function ui(t,e){let o=t.length-1,n=$a(e)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,s=t[Math.max(0,r-1)],i=t[r],c=t[r+1],h=t[Math.min(o,r+2)];return[0,1,2].map(l=>.5*(2*i[l]+(-s[l]+c[l])*a+(2*s[l]-5*i[l]+4*c[l]-h[l])*a*a+(-s[l]+3*i[l]-3*c[l]+h[l])*a*a*a))}var c1=t=>({eye:t.eye.slice(),target:t.target.slice(),fov:t.fov,roll:0});function ep(t,e,o){return{eye:rf(t.eye,e.eye,o),target:rf(t.target,e.target,o),fov:Ir(t.fov,e.fov,o),roll:Ir(t.roll||0,e.roll||0,o)}}var af=zE.PLAY,ea=[af.stoolX,1,af.keyFront+.25],l1=[af.stoolX,af.keyTop+.03,af.keyFront-.05],np=t=>{let e=(15+110*t)*Math.PI/180,o=2.1+.4*t;return[ea[0]+Math.cos(e)*o,1.15+.4*t,ea[2]+Math.sin(e)*o]},Ac=[{eye:np(1),target:[ea[0],.92,ea[2]-.15],fov:46,aperture:.6},{eye:[-6.93,3.2,45.85],target:[-6.93,.77,45.3],fov:34,aperture:.6,to:l1},{eye:[ea[0]+1,1.14,ea[2]+1.72],target:[l1[0]+.05,.8,l1[2]+.05],fov:40,aperture:1,to:l1}],Cy=(t,e)=>Math.hypot(t[0]-e[0],t[1]-e[1],t[2]-e[2]),f1=t=>({fade:0,letterbox:.55,exposure:1.3,focus:Cy(t.eye,t.to||ea),aperture:t.aperture,vignette:.42,shafts:0}),op={fade:0,letterbox:.55,exposure:2.1,focus:6.2,aperture:.55,vignette:.45,shafts:0},Tc={fade:0,letterbox:.55,exposure:2,focus:.82,aperture:1.1,vignette:.48,shafts:0},nf={fade:0,letterbox:.55,exposure:1.8,focus:.42,aperture:1.3,vignette:.5,shafts:0},LE=`
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
`;Py.exports=function(e){let{root:o,avatar:n}=e,r=document.createElement("style");r.textContent=LE,document.head.appendChild(r);let a=document.createElement("div");a.className="conf-ui",a.innerHTML=`
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
		</div>`,o.appendChild(a);let s=a.querySelector(".conf-write"),i=a.querySelector("textarea"),c=a.querySelector('[data-act="send"]'),h=a.querySelector(".conf-hint"),l=a.querySelector(".conf-close"),d=a.querySelector(".conf-final"),u=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,p=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;i.addEventListener("input",()=>{let mt=i.value.match(new RegExp("^\\s*(\\S+\\s+){0,"+(Oy-1)+"}\\S+"));(i.value.trim()?i.value.trim().split(/\s+/).length:0)>Oy&&mt&&(i.value=mt[0]),c.disabled=!i.value.trim()}),["keydown","keyup","keypress"].forEach(mt=>i.addEventListener(mt,ue=>ue.stopPropagation())),a.addEventListener("pointerdown",mt=>mt.stopPropagation()),a.addEventListener("click",mt=>{let ue=mt.target.closest("button");ue&&(mt.stopPropagation(),ue.dataset.act==="send"&&ht(),ue.dataset.act==="leave"&&gt())});let f=!1,v="",m=0,g=null,x=null,y="",w=null,M=0,_="",k=document.createElement("canvas");k.width=512,k.height=652;function O(mt){mt!==_&&(_=mt,s.classList.toggle("on",mt==="write"),h.classList.toggle("on",mt==="hint"),l.classList.toggle("on",f&&mt==="hint"&&(v==="room"||v==="peek")),d.classList.toggle("on",mt==="final"),mt==="write"&&setTimeout(()=>{if(v==="write")try{i.focus({preventScroll:!0})}catch(ue){}},900))}function N(mt){v=mt,m=0}function G(mt,ue){if(f)return;f=!0,g={eye:mt.eye.slice(),target:mt.target.slice(),fov:mt.fov,roll:mt.roll||0},x=Object.assign({},ue),y="",i.value="",c.disabled=!0,Bn.STATE.fold=0,Bn.STATE.slide=0,Bn.STATE.shown=!0,Bn.STATE.active=!0;let Be=k.getContext("2d");Be.setTransform(1,0,0,1,0,0),Be.clearRect(0,0,k.width,k.height),Bn.STATE.ink=k,Bn.STATE.inkDirty=!0,document.body.classList.add("confessing");let Le=Ac[0],oe=p?.3:5.5,So=p?.3:3.6;$.i=0,$.u=0,$.T=oe+So,$.moving=!0,$.rest=0,$.raw=!0,$.lookFrom=x,$.lookTo=f1(Le);let E=[g.eye,[3.4,1.75,44.5],[.3,1.72,44.7],[-2.8,1.5,45.4],np(0)],ho=[g.target,[-3,1.9,44.5],[-6.5,1.3,44.9],[ea[0],1,ea[2]-.1],Le.target];$.path=io=>{let dt=io*(oe+So);if(dt<oe){let eo=dt/oe,Ke=1-Math.cos(eo*Math.PI/2);return{eye:ui(E,Ke),target:ui(ho,nr(0,1,Ke*1.05)),fov:Ir(g.fov,52,nr(.4,1,Ke)),roll:(g.roll||0)*(1-Ke)}}let Ct=(dt-oe)/So,Tt=1-Math.pow(1-Ct,2.4);return{eye:np(Tt),target:Le.target,fov:Ir(52,Le.fov,Tt),roll:.05*Math.sin(Math.PI*Tt)}},N("room"),O("")}let $={i:0,u:0,T:1,moving:!1,rest:0,raw:!1,path:null,lookFrom:null,lookTo:null},V=()=>u?"Scroll on":"Swipe up";function D(mt){let ue=st,Be=Ac[mt],Le={eye:ue.eye.slice(),target:ue.target.slice(),fov:ue.fov,roll:ue.roll||0},oe=rf(Le.eye,Be.eye,.5),So=[oe[0]-ea[0],0,oe[2]-ea[2]],E=Math.hypot(So[0],So[2])||1,ho=[oe[0]+So[0]/E*.6,oe[1]+.3,oe[2]+So[2]/E*.6];$.path=io=>{let dt=1-io;return{eye:[0,1,2].map(Ct=>dt*dt*Le.eye[Ct]+2*dt*io*ho[Ct]+io*io*Be.eye[Ct]),target:rf(Le.target,Be.target,nr(0,1,io)),fov:Ir(Le.fov,Be.fov,io),roll:Le.roll*dt}},$.lookFrom=U||f1(Ac[$.i]),$.lookTo=f1(Be),$.i=mt,$.u=0,$.moving=!0,$.rest=0,$.raw=!1,$.T=p?.4:Math.max(2.8,Math.min(4.4,Cy(Le.eye,Be.eye)*1+1.6)),O("")}let U=null;function ht(){if(v!=="write"||(y=i.value.trim(),!y))return;i.blur(),O("");let mt=Math.max(10,Math.min(22,24-y.length/28));w=AE(k,e.glyphs(),{ink:"rgba(30,16,8,0.97)",xh:mt,width:.15,seed:11+y.length,speed:60,pace:.2,minDur:.03,maxTime:ue=>2.4+ue.length/160,fixed:{mx:46,my:40},onPen:()=>{Bn.STATE.inkDirty=!0},onDone:()=>{Bn.STATE.inkDirty=!0}}),N("down")}function jt(){try{let mt={access_key:TE,subject:"A note left in the confessional",from_name:"Your gallery",message:y,page:location.href,when:new Date().toString()};fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(mt),keepalive:!0}).catch(()=>{})}catch(mt){}}function Lt(){v==="ready"&&(jt(),N("fold"),O(""))}function gt(){!f||v==="leave"||(O(""),i.blur(),tt=st,W=U,N("leave"))}let tt=null,W=null,st=null,wt=Bn.SHOTS.window,$t=Bn.OFF,Ut=mt=>[mt[0]+$t[0],mt[1],mt[2]],be=[[3.4,1.75,44.5],[.3,1.72,44.5],[-2.5,1.66,45],[-4.6,1.6,46.55],[-7,1.58,47.15],[-9.3,1.55,46.4],Ut([1.25,1.5,43.25]),Ut([-.55,1.36,42.92])],De=[[-3,1.9,44.5],[-6.5,1.5,44.6],[-7,1,44.4],[-7.6,.95,44],[-10.5,1.5,44.6],Ut([-1,1.55,43.6]),Ut([-1.4,1.35,43.1]),Ut([-1.5,1.33,43.3])];function He(mt){let ue=ta($a(mt)),Be=[g.eye,...be,wt.eye],Le=[g.target,...De,wt.target];return{eye:ui(Be,ue),target:ui(Le,nr(0,1,ue*1.03)),fov:Ir(g.fov,wt.fov,nr(.6,.97,ue)),roll:(g.roll||0)*(1-ue)}}function Ot(mt,ue){if(p)return mt;let Be=performance.now()/1e3,Le=.004*ue,oe=Math.sin(Be*.61)*.6+Math.sin(Be*1.37+1.3)*.4,So=Math.sin(Be*.47+2.1)*.6+Math.sin(Be*1.13+.4)*.4;return{eye:[mt.eye[0]+oe*Le,mt.eye[1]+So*Le*.7,mt.eye[2]],target:[mt.target[0]+So*Le*1.5,mt.target[1]+oe*Le,mt.target[2]],fov:mt.fov,roll:mt.roll}}function ie(mt,ue,Be){let Le={};for(let oe in ue)Le[oe]=typeof ue[oe]=="number"&&typeof mt[oe]=="number"?Ir(mt[oe],ue[oe],Be):ue[oe];return Le}function Oe(mt){mt*=window.__confSpeed||1,m+=mt;let ue=c1(wt),Be=c1(Bn.SHOTS.paper),Le,oe,So=c1(Bn.SHOTS.peek);if(v==="room")$.moving?($.u=Math.min(1,$.u+mt/$.T),Le=$.path($.raw?$.u:ta($.u)),oe=ie($.lookFrom,$.lookTo,nr(.1,.9,$.u)),$.raw&&(oe.fade=(x.fade||0)*(1-nr(0,.12,$.u))),$.u>=1&&($.moving=!1,$.rest=0,h.textContent=V(),O("hint"))):($.rest+=mt,Le=Ot(c1(Ac[$.i]),2.5),oe=f1(Ac[$.i]));else if(v==="enter"){let ho=$a(m/(p?.6:9)),io=ta(ho),dt=[Ue.eye,[-7.6,1.9,47.6],[-9.6,1.85,45.6],Ut([.75,1.5,42.95]),Ut([-.25,1.42,42.82]),Ut([-.9,1.42,42.82]),So.eye];Le={eye:ui(dt,io),target:rf(Ue.target,So.target,nr(0,.35,io)),fov:Ir(Ue.fov,So.fov,nr(.3,1,io)),roll:0},oe=ie(Ge,op,nr(.2,.9,ho)),ho>=1&&N("peek")}else if(v==="peek")Le=Ot(So,1.5),oe=op,m>(p?.5:3.2)&&N("turn");else if(v==="turn"){let E=$a(m/(p?.4:3.2));Le=ep(So,ue,ta(E)),oe=ie(op,Tc,ta(E)),E>=1&&(N("write"),O("write"))}else if(v==="write")Le=Ot(ue,1),oe=Tc;else if(v==="down"){let E=$a(m/(p?.4:2));Le=ep(ue,Be,ta(E)),oe=ie(Tc,nf,ta(E)),E>=1&&(M=w.write(y,p)||0,Bn.STATE.inkDirty=!0,N("writing"))}else if(v==="writing")Le=Ot(Be,.6),oe=nf,m>M+.8&&(N("ready"),h.textContent=u?"Scroll to fold it and pass it through":"Swipe up to fold it and pass it through",O("hint"));else if(v==="ready")Le=Ot(Be,.6),oe=nf;else if(v==="fold"){let E=$a(m/(p?.3:1.5));Bn.STATE.fold=ta(E),Le=Ot(Be,.6),oe=nf,E>=1&&N("slide")}else if(v==="slide"){let ho=$a(m/(p?.6:3.4));Bn.STATE.slide=ta(nr(0,.7,ho));let io=ta(nr(.35,1,ho));Le=ep(Be,ue,io),oe=ie(nf,Tc,io),ho>=1&&(Bn.STATE.shown=!1,N("final"),O("final"))}else if(v==="final")Le=Ot(ue,1),oe=Tc;else if(v==="leave"){let E=p?.6:tt.eye[0]<$t[0]-.3?12:7,ho=$a(m/E),io={eye:g.eye,target:g.target,fov:g.fov,roll:g.roll},dt=ta(ho),Ct=tt.eye[0]<$t[0]-.3,Tt=Ct?[tt.eye,Ut([-.55,1.4,42.8]),Ut([1.4,1.55,43.3]),[-9.3,1.58,46.4],[-7,1.6,47.15],[-4.6,1.62,46.55],[-2.2,1.68,44.8],[.6,1.72,44.5],io.eye]:[tt.eye,[-3.4,1.7,46.2],[-1.2,1.7,44.8],[.6,1.72,44.5],io.eye],eo=Ct?[tt.target,Ut([1.5,1.45,43.4]),[-7,1.2,44.6],[-4,1.5,47],[-1.5,1.7,45.5],[1,1.8,44.5],[4,1.8,44.5],[7,1.9,44.2],io.target]:[tt.target,[-1.5,1.7,45.2],[2,1.8,44.5],[6,1.9,44.3],io.target];if(Le={eye:ui(Tt,dt),target:ui(eo,dt),fov:Ir(tt.fov,io.fov,dt),roll:io.roll*dt},oe=ie(W||Tc,x,nr(.1,.7,ho)),oe.fade=(x.fade||0)*nr(.82,1,ho),ho>=1){f=!1,Bn.STATE.active=!1,Bn.STATE.shown=!0,Bn.STATE.fold=0,Bn.STATE.slide=0;let Ke=k.getContext("2d");Ke.setTransform(1,0,0,1,0,0),Ke.clearRect(0,0,k.width,k.height),Bn.STATE.inkDirty=!0,document.body.classList.remove("confessing"),e.onExit&&e.onExit()}}return st=Le,U=oe,{camera:Le,look:oe}}let Ue=null,Ge=null;function ve(){if(v==="room"){if($.moving||$.rest<.4)return;$.i<Ac.length-1?D($.i+1):(Ue=st,Ge=U,O(""),N("enter"));return}if(v==="peek"){m>.4&&N("turn");return}v==="ready"?Lt():v==="writing"&&w&&(w.finish(),m=Math.max(m,M))}function ye(){v==="room"&&!$.moving&&$.rest>.4&&$.i>0&&D($.i-1)}return{start:G,update:Oe,leave:gt,get active(){return f},get stage(){return v},wheel(mt){mt>8?ve():mt<-8&&ye()},swipe(mt){mt>0?ve():mt<0&&ye()},tap(){ve()},key(mt){return["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(mt)>=0?(ve(),!0):["ArrowUp","ArrowLeft","PageUp"].indexOf(mt)>=0?(ye(),!0):mt==="Escape"?(gt(),!0):!1},_setNote(mt){i.value=mt,i.dispatchEvent(new Event("input"))}}}});var jy=St((C7,By)=>{"use strict";var Lc=sc(),h1=Td(),rp=Yf(),NE=hl(),ap=Nd(),RE=Sr(),u1=!RE.isPhone&&!!(window.matchMedia&&window.matchMedia("(pointer: fine)").matches),{A:xr}=Ar(),{C:w0,PAINTING_X:Cc}=_0(),ar=t=>Math.max(0,Math.min(1,t)),te=(t,e,o)=>t+(e-t)*o,tn=(t,e,o)=>[te(t[0],e[0],o),te(t[1],e[1],o),te(t[2],e[2],o)],Mo=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],sp=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],j0=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],Kt=(t,e,o)=>{let n=ar((o-t)/(e-t));return n*n*(3-2*n)};function OE(t,e,o,n,r,a){if(r<=0)return[t,o];let s=2/n,i=s*r,c=1/(1+i+.48*i*i+.235*i*i*i),h=a*n,l=Math.max(-h,Math.min(h,t-e)),d=t-l,u=(o+s*l)*r,p=(o-s*u)*c,f=d+(l+u)*c;return e-t>0==f>e&&(f=e,p=0),[f,p]}var Iy=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,CE=t=>t*t*t,ip=t=>1-Math.pow(1-t,3),zn=t=>-(Math.cos(Math.PI*t)-1)/2;function $n(t,e){let o=t.length-1,n=ar(e)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,s=t[Math.max(0,r-1)],i=t[r],c=t[r+1],h=t[Math.min(o,r+2)],l=a*a,d=l*a;return[0,1,2].map(u=>.5*(2*i[u]+(-s[u]+c[u])*a+(2*s[u]-5*i[u]+4*c[u]-h[u])*l+(-s[u]+3*i[u]-3*c[u]+h[u])*d))}var xo=(t,e,o,n)=>({eye:t,target:e,fov:o,roll:n||0});function gi(t,e,o){return xo(tn(t.eye,e.eye,o),tn(t.target,e.target,o),te(t.fov,e.fov,o),te(t.roll,e.roll,o))}var up=()=>Kt(.75,1.3,window.innerWidth/window.innerHeight),W0=(t,e)=>gi(t,e,up()),d1=[7,3.95,w0.hallEnd-.05],PE=[w0.x1,2.9,w0.zc],Rc=[16.75,4.55,6.75],dp=[6.92,2.72,14.5],oa=[7.3,.015,47.1],$E=[Rc,[16.2,4,7],[15.3,3.45,6.4],[14.1,3.2,5.7],[12.2,3.35,6.6],[10,3.75,9.6],[8.2,3.8,12.2],[7.3,3.4,13.8],dp],IE=[dp,[7.3,4.6,19.5],[7.6,4.9,23.5],[6.6,4.3,28.5],[7.5,3.2,34],[6.8,2.1,39.5],[7.4,1,44.2],[7.2,.3,46.4],oa],pi=[Cc[0],3,w0.z0],vi=[Cc[1],3,w0.z0],lp=47.45,Uy=4.6,qE=13.2,DE=1.57,sf=[7.55,1.25,46.75],pp=[17.25,2.42,46],vp=[26.05,1.95,46],cf=[36.15,.015,44],g1=()=>te(6.8,6.15,up()),FE=[sf,[9.6,1.65,46.2],[12.3,2.05,45.1],[14.6,2.35,44.5],[16.2,2.3,44.7],pp],GE=[pp,[20.2,2.05,45.6],[23.2,1.8,45],vp],mi=[Cc[2],3,w0.z0],fp=[34.8,1.35,46],ys=[7.89,.03,19.03],qy=.36,Dy=13.64,S0=[{side:"left",z:34.5},{side:"left",z:23.5},{side:"left",z:14.6},{side:"right",z:14.6},{side:"right",z:23.5},{side:"right",z:34.5}];function qr(t){let e=t.side==="left"?1:-1;return tn([7-e*1,3,t.z+e*.2],[7-e*.6,3.25,t.z+e*.13],up())}function HE(t){return t.side==="left"?W0(xo([8.6,3.9,t.z],[qy,1.45,t.z],76),xo([8,3.6,t.z+.7],[qy,3.95,t.z-2],46,-.008)):W0(xo([5.4,3.9,t.z],[Dy,1.45,t.z],76),xo([6,3.6,t.z-.7],[Dy,3.95,t.z+2],46,-.008))}var UE=()=>[cf,[35.6,.5,44.6],[33.2,1.5,45.6],[29,2.3,46.1],[23.5,2.7,45.9],[18.5,2.9,45.4],[14.8,3.1,44.3],[11,3.3,41.8],[7.4,3.4,38.8],[5.4,3.3,36.6],qr(S0[0])],BE=()=>[qr(S0[2]),[3,3.2,13.2],[1.7,3,12],[2.6,3.2,10],[5,3.6,8.9],[7,3.8,8.6],[9,3.6,8.9],[11.4,3.2,10],[12.3,3,12],[11,3.1,13.4],qr(S0[3])],jE=()=>[qr(S0[5]),[9,3.4,31],[7.8,2.8,27.5],[6.8,1.9,24.5],[7.4,1,21],[7.75,.35,19.6],ys],Fy={2:{pos:()=>dp,amp:[.18,.07,.12],tumble:.5},7:{pos:()=>sf,amp:[.12,.09,.1],tumble:.55},8:{pos:()=>pp,amp:[.1,.08,.08],tumble:.5},9:{pos:()=>vp,amp:[.09,.06,.07],tumble:.45},10:{pos:()=>fp,amp:[.07,.04,.06],tumble:.35},12:{pos:()=>qr(S0[0]),amp:[.12,.08,.1],tumble:.5},13:{pos:()=>qr(S0[1]),amp:[.12,.08,.1],tumble:.5},14:{pos:()=>qr(S0[2]),amp:[.12,.08,.1],tumble:.5},15:{pos:()=>qr(S0[3]),amp:[.12,.08,.1],tumble:.5},16:{pos:()=>qr(S0[4]),amp:[.12,.08,.1],tumble:.5},17:{pos:()=>qr(S0[5]),amp:[.12,.08,.1],tumble:.5}},xs=[{name:"corridor",ui:"intro",look:{letterbox:1,exposure:1,focus:14,aperture:.25,vignette:.1},cam(t){let e=.9*(1-Math.exp(-t/14)),o=[0,Math.sin(t*.37)*.025,Math.sin(t*.23)*.06],n=W0(xo([w0.x0+.9,1.85,w0.zc+.25],[w0.x1,2.85,w0.zc-.1],64),xo([w0.x0+1.2,2,w0.zc+.35],[w0.x1,2.6,w0.zc-.15],50));return n.eye=Mo(Mo(n.eye,[e,0,0]),o),n}},{name:"about",ui:"about",look:{letterbox:.55,exposure:1.32,focus:2.9,aperture:.9,vignette:.12,shafts:.65},cam(t){let e=[Math.sin(t*.21)*.08,Math.sin(t*.33)*.03,-.25*(1-Math.exp(-t/12))],o=W0(xo([16.6,1.9,9.2],[17.3,.4,5.6],64),xo([15,1.35,7.75],[17.55,1.05,5.5],44,-.02));return o.eye=Mo(o.eye,e),o}},{name:"sky",ui:"sky",look:{letterbox:.55,exposure:1,focus:2.1,aperture:.45,vignette:.1,shafts:1},cam(t){let e=[Math.sin(t*.12)*.35,Math.sin(t*.2)*.04,(1-Math.cos(t*.12))*.25],o=W0(xo([7,1.35,13],[7.2,7.6,20.4],74,.05),xo([6.6,1.5,12.6],[7.3,7.2,20.8],56,.07));return o.eye=Mo(o.eye,e),o}},{name:"master",ui:"master",look:{letterbox:.55,exposure:1.12,focus:8,aperture:.6,vignette:.3,shafts:.5},cam(t){let e=[Math.sin(t*.17)*.05,Math.sin(t*.29)*.02,-.35*(1-Math.exp(-t/16))],o=W0(xo([7,3.6,43.7],[7,3.85,d1[2]],74),xo([7,3.6,41.3],[7,3.95,d1[2]],46));return o.eye=Mo(o.eye,e),o}},{name:"story",ui:"story",look:{letterbox:.55,exposure:1,focus:8.1,aperture:.9,vignette:.4,shafts:.4},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=W0(xo([7,3.9,40.3],[7,1.35,d1[2]],76),xo([6.3,3.6,41.2],[3.7,3.95,d1[2]],46,-.008));return o.eye=Mo(o.eye,e),o}},{name:"leaf",ui:"leaf",look:{letterbox:.55,exposure:1.15,focus:1.25,aperture:1.3,vignette:.35,shafts:.4},cam(t){let e=[Math.sin(t*.2)*.02,Math.sin(t*.3)*.006,0],o=W0(xo([7.15,.15,46],[7.3,.04,oa[2]],50),xo([7.05,.14,45.9],[7.25,.05,oa[2]],32));return o.eye=Mo(o.eye,e),o}},{name:"steps",ui:"steps",look:{letterbox:.9,exposure:1.2,focus:1.6,aperture:1.4,vignette:.4,shafts:.4},cam(t){let e=[Math.sin(t*.2)*.015,0,0],o=W0(xo([7.15,.1,46.3],[7.05,.1,lp],50),xo([7.1,.12,45.85],[7,.2,lp],30));return o.eye=Mo(o.eye,e),o}},{name:"float",ui:"float",look:{letterbox:.55,exposure:1.1,focus:2.2,aperture:.8,vignette:.3,shafts:.6},cam(t){let e=[Math.sin(t*.17)*.05,Math.sin(t*.27)*.02,0],o=W0(xo([7.3,.85,45.65],[7.6,1.38,47.1],64),xo([7.25,.82,45.8],[7.65,1.35,47.1],44));return o.eye=Mo(o.eye,e),o}},{name:"painting1",ui:"p1",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=W0(xo([pi[0],2.3,46.85],[pi[0],1.25,pi[2]],74),xo([pi[0]-.6,2.55,46.85],[pi[0]+1.9,2.9,pi[2]],46,.008));return o.eye=Mo(o.eye,e),o}},{name:"painting2",ui:"p2",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=W0(xo([vi[0],1.95,46.85],[vi[0],1,vi[2]],74),xo([vi[0]-.6,2.1,46.85],[vi[0]+1.9,2.75,vi[2]],46,.008));return o.eye=Mo(o.eye,e),o}},{name:"painting3",ui:"p3",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.9},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=W0(xo([mi[0],1.4,46.85],[mi[0],.6,mi[2]],74),xo([mi[0]-.6,1.45,46.85],[mi[0]+1.9,2,mi[2]],46,.008));return o.eye=Mo(o.eye,e),o}},{name:"door",ui:"door",look:{letterbox:.8,exposure:1.05,focus:1.45,aperture:1.1,vignette:.35,shafts:1},cam(t){let e=[Math.sin(t*.2)*.02,Math.sin(t*.3)*.006,0],o=W0(xo([34.75,.5,44.15],[w0.x1,.8,43.95],66),xo([34.75,.45,44.3],[w0.x1,.35,43.95],50));return o.eye=Mo(o.eye,e),o}},...S0.map((t,e)=>({name:"hall"+e,ui:"h"+e,look:{letterbox:.55,exposure:1,focus:7.6,aperture:.7,vignette:.35,shafts:.7},cam(o){let n=[Math.sin(o*.15)*.04,Math.sin(o*.25)*.015,Math.sin(o*.11)*.04],r=HE(t);return r.eye=Mo(r.eye,n),r}})),{name:"rest",ui:"end",look:{letterbox:.55,exposure:1.05,focus:2.4,aperture:.5,vignette:.4,shafts:1.15},cam(t){let e=t*.025,o=W0(xo([7.75,2.6,18.6],[7.89,0,19.08],60),xo([7.75,2.3,18.45],[7.89,0,19.08],46)),n=o.eye[0]-ys[0],r=o.eye[2]-ys[2];return o.eye=[ys[0]+n*Math.cos(e)-r*Math.sin(e),o.eye[1],ys[2]+n*Math.sin(e)+r*Math.cos(e)],o}}],WE=[1,.96,.88];function Gy(t,e){return{dur:e,cam(o,n,r){let a=zn(o),s=gi(n,r,a),i=S0[t].side==="left"?1:-1;return s.eye=Mo(s.eye,[i*.6*Math.sin(Math.PI*a),.15*Math.sin(Math.PI*a),0]),s},look(o,n,r){let a={};for(let s in r)typeof r[s]=="number"&&(a[s]=te(n[s],r[s],o));return a.aperture=te(n.aperture,r.aperture,o)*(1-.5*Math.sin(Math.PI*o)),a},leaf(o){let n=zn(o),r=qr(S0[t]),a=qr(S0[t+1]),s=S0[t].side==="left"?1:-1,i=Mo(tn(r,a,.5),[s*1.2,.5,0]),c=$n([r,tn(r,i,.6),i,tn(a,i,.6),a],n);return{phase:"fly",pos:Mo(c,[0,Math.sin(o*Math.PI*5)*.07*Math.sin(Math.PI*o),0]),tumble:.5+.35*Math.sin(Math.PI*o)}}}}var cp=[{dur:6.2,cam(t,e,o){if(t<.5){let i=CE(t/.5),c=tn(e.eye,[w0.x1-3.2,2.6,w0.zc],i),h=tn(e.target,PE,Kt(0,.6,t/.5));return xo(c,h,te(e.fov,e.fov-8,i),te(e.roll,.04,i))}let n=ip((t-.5)/.5),r=[[xr.cx+.4,10.4,xr.zc+.6],[xr.cx-.6,7.6,xr.zc+1.3],[xr.cx-1.9,4.6,xr.zc+1.75],o.eye],a=[[xr.cx-.1,0,xr.zc-.2],[xr.cx-1,.4,xr.zc-.1],[xr.cx-1.1,.8,xr.zc-.2],o.target];return xo($n(r,n),$n(a,n),te(o.fov+14,o.fov,n),te(-.25,o.roll,n))},look(t,e,o){let n=Kt(.22,.5,t),r=1-Kt(.5,.74,t);return{fade:t<.5?n:r,fadeColor:WE,exposure:te(e.exposure,o.exposure,Kt(.5,.9,t))*(1+2.2*(t<.5?Kt(.15,.5,t):1-Kt(.5,.8,t))),letterbox:te(e.letterbox,o.letterbox,Kt(.3,.7,t)),aperture:t<.5?e.aperture*(1-t*2):o.aperture*Kt(.6,1,t),focus:te(4,o.focus,Kt(.5,1,t)),shafts:te(e.shafts,o.shafts,Kt(.4,.6,t)),vignette:te(e.vignette,o.vignette,t)}},leaf(){return{phase:"home"}}},{dur:9,cam(t,e,o,n){let r=[e.eye,[15.6,2.4,8.3],[15.4,2.7,7.1],[12.6,2.6,5.4],[9.6,2,7.4],[7.6,1.6,10.6],o.eye],a=$n(r,zn(t)),s=Kt(0,.12,t)*(1-Kt(.82,1,t)),i=tn(tn(e.target,o.target,Kt(.55,1,t)),n.pos,s),c=te(e.fov,o.fov,Kt(.3,1,t))-6*Math.sin(Math.PI*t),h=te(e.roll,o.roll,t)+.05*Math.sin(Math.PI*2*t);return xo(a,i,c,h)},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{exposure:te(e.exposure,o.exposure,Kt(.25,.75,t)),letterbox:te(e.letterbox,o.letterbox,t),focus:te(a,o.focus,Kt(.8,1,t)),aperture:te(.7,o.aperture,Kt(.8,1,t)),shafts:te(e.shafts,o.shafts,Kt(.3,.8,t)),vignette:te(e.vignette,o.vignette,t)}},leaf(t){let e=Iy(t),o=Math.sin(t*Math.PI*7)*.14*Math.sin(Math.PI*t);return{phase:"fly",pos:Mo($n($E,e),[0,Math.sin(t*Math.PI*9)*.05*Math.sin(Math.PI*t),o]),tumble:1-.5*Kt(.8,1,t)}}},{dur:11.5,cam(t,e,o,n){let r=$n([e.eye,[7,1.9,19],[7.1,1.6,27.5],[6.9,1.1,36],[7,.7,42.5],[7.05,.5,45.7]],Kt(0,.8,t)*.6+zn(ar(t/.8))*.4),a=$n([[7.05,.5,45.7],[7,1.2,45.3],[7,2.6,43.8],o.eye],zn(Kt(.8,1,t))),s=t<.8?r:a,i=tn(tn(e.target,n.pos,Kt(.03,.22,t)),o.target,Kt(.82,1,t)),c=te(e.fov,o.fov,Kt(.15,.7,t))-6*Kt(.6,.8,t)*(1-Kt(.85,1,t)),h=te(e.roll,o.roll,Kt(0,.6,t))-.04*Math.sin(Math.PI*t);return xo(s,i,c,h)},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{exposure:te(e.exposure,o.exposure,Kt(.5,1,t)),letterbox:te(e.letterbox,o.letterbox,t),focus:te(a,o.focus,Kt(.84,1,t)),aperture:te(1.1,o.aperture,Kt(.84,1,t)),shafts:te(e.shafts,o.shafts,Kt(.2,.9,t)),vignette:te(e.vignette,o.vignette,Kt(.5,1,t))}},leaf(t){let e=te(Iy(t),t,.35),o=$n(IE,Kt(0,.78,e)),n=Math.sin(t*Math.PI*8)*.35*(1-Kt(.55,.76,t)),r=Kt(.7,.8,t);return{phase:"fly",pos:Mo(o,[n,Math.abs(Math.cos(t*Math.PI*8))*.12*(1-r),0]),tumble:1-r,swing:n}}},{dur:2.6,cam(t,e,o){let n=zn(t),r=gi(e,o,n);return r.eye=Mo(r.eye,[0,0,-.35*Math.sin(Math.PI*n)]),r},look(t,e,o){let n=zn(t),r={};for(let a in o)typeof o[a]=="number"&&(r[a]=te(e[a],o[a],n));return r},leaf(){return{phase:"floor"}}},{dur:4.5,cam(t,e,o){let n=zn(t),r=$n([e.eye,[6.9,1.7,43.9],[7.05,.45,45.4],o.eye],n),a=tn(e.target,o.target,Kt(.1,.85,t));return xo(r,a,te(e.fov,o.fov,Kt(.2,1,t)),te(e.roll,o.roll,n))},look(t,e,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=te(e[r],o[r],Kt(.2,1,t)));return n},leaf(){return{phase:"floor"}}},{dur:5.5,cam(t,e,o){return gi(e,o,zn(t))},look(t,e,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=te(e[r],o[r],zn(t)));return n},leaf(){return{phase:"floor"}},walker(t){return te(Uy,g1(),t)}},{dur:11,kick:t=>ar((t-Nc())/(1-Nc())),cam(t,e,o,n){let r=Nc(),a=Kt(0,r,t)*(1-Kt(r+.12,r+.35,t)),s=Hy(Math.min(t,Oc)),i=Mo(e.target,[(s-e.target[0])*.15*a,0,0]),c=Kt(r+.12,1,t),h=$n([e.eye,e.eye,Mo(e.eye,[0,.12,-.3]),o.eye],c);return i=tn(i,n.pos,Kt(r+.06,r+.24,t)*(1-Kt(.9,1,t))),i=tn(i,o.target,Kt(.88,1,t)),xo(h,i,te(e.fov,o.fov,c),te(e.roll,o.roll,c))},look(t,e,o,n,r){let a=Nc(),s=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]),i=Kt(0,.12,t)*(1-Kt(a+.25,a+.5,t));return{letterbox:te(te(e.letterbox,o.letterbox,Kt(a,1,t)),1.75,i),exposure:te(e.exposure,o.exposure,Kt(a,1,t)),focus:t<a?e.focus:te(e.focus,s,Kt(a,a+.2,t)),aperture:te(e.aperture,o.aperture,Kt(a,1,t)),vignette:te(e.vignette,o.vignette,t),shafts:te(e.shafts,o.shafts,t)}},leaf(t){let e=ar((t-Nc())/(1-Nc()));if(e<=0)return{phase:"floor"};let o=Kt(0,.85,e)*.85+ip(Kt(0,.15,e))*.15;return{phase:"fly",pos:Mo(oa,[(sf[0]-oa[0])*o+Math.sin(e*9)*.08*(1-e),(sf[1]-oa[1])*o,(sf[2]-oa[2])*o+Math.sin(e*7)*.06*(1-e)]),tumble:1.3-.75*e}},walker(t){return t<.985?Hy(t):null}},{dur:9,cam(t,e,o,n){let r=zn(t),a=$n([e.eye,[9.4,1.35,45.6],[12.4,2,45.9],[15,2.45,46.5],o.eye],r),s=1-Kt(.6,.92,t),i=tn(tn(e.target,n.pos,Kt(0,.15,t)),o.target,1-s),c=te(e.fov,o.fov,Kt(.3,1,t)),h=te(e.roll,o.roll,r)+.04*Math.sin(Math.PI*t);return xo(a,i,c,h)},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:te(e.letterbox,o.letterbox,t),exposure:te(e.exposure,o.exposure,Kt(.3,.8,t)),focus:te(a,o.focus,Kt(.6,.95,t)),aperture:te(e.aperture,o.aperture,Kt(.6,1,t)),vignette:te(e.vignette,o.vignette,t),shafts:te(e.shafts,o.shafts,Kt(.3,.8,t))}},leaf(t){let e=zn(t);return{phase:"fly",pos:Mo($n(FE,e),[0,Math.sin(t*Math.PI*5)*.08*Math.sin(Math.PI*t),Math.sin(t*Math.PI*4)*.12*Math.sin(Math.PI*t)]),tumble:.55+.4*Math.sin(Math.PI*t)}}},{dur:6.5,cam(t,e,o){let n=zn(t),r=gi(e,o,n);return r.eye=Mo(r.eye,[0,.12*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),r},look(t,e,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=te(e[r],o[r],t));return n.aperture=te(e.aperture,o.aperture,t)*(1-.5*Math.sin(Math.PI*t)),n},leaf(t){let e=zn(t);return{phase:"fly",pos:Mo($n(GE,e),[0,Math.sin(t*Math.PI*4)*.07*Math.sin(Math.PI*t),0]),tumble:.5+.3*Math.sin(Math.PI*t)}}},{dur:6.5,cam(t,e,o){let n=zn(t),r=gi(e,o,n);return r.eye=Mo(r.eye,[0,.1*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),r},look(t,e,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=te(e[r],o[r],t));return n.aperture=te(e.aperture,o.aperture,t)*(1-.5*Math.sin(Math.PI*t)),n},leaf(t){let e=zn(t);return{phase:"fly",pos:Mo($n([vp,[29.2,1.75,45.5],[32.2,1.5,45.4],fp],e),[0,Math.sin(t*Math.PI*4)*.06*Math.sin(Math.PI*t),0]),tumble:.45+.25*Math.sin(Math.PI*t)}}},{dur:6,cam(t,e,o,n){let r=zn(t),a=$n([e.eye,[34.2,1.15,45.6],[34.5,.7,44.8],o.eye],r),s=Kt(.05,.3,t)*(1-Kt(.8,1,t)),i=tn(tn(e.target,o.target,Kt(.6,1,t)),n.pos,s);return xo(a,i,te(e.fov,o.fov,Kt(.2,1,t)),te(e.roll,o.roll,r))},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:te(e.letterbox,o.letterbox,t),exposure:te(e.exposure,o.exposure,t),focus:te(a,o.focus,Kt(.8,1,t)),aperture:te(.9,o.aperture,Kt(.8,1,t)),vignette:te(e.vignette,o.vignette,t),shafts:te(e.shafts,o.shafts,t)}},leaf(t){let e=$n([fp,[35.3,.9,45.2],[35.75,.4,44.4],[36,.08,44.05],cf],Kt(0,.85,t)),o=Math.sin(t*Math.PI*6)*.25*(1-Kt(.35,.82,t)),n=Kt(.78,.88,t);return{phase:"fly",pos:Mo(e,[0,Math.abs(Math.cos(t*Math.PI*6))*.07*(1-n),o]),tumble:.7*(1-n),swing:o}}},{dur:12,door(t){let e=ar((t-.02)/.09);return ip(e)+.07*Math.sin(ar((t-.08)/.18)*Math.PI)*(1-ar((t-.08)/.3))},cam(t,e,o,n){let r=Math.sin(t*340)*.012*Kt(.02,.05,t)*(1-Kt(.08,.16,t)),a=Kt(.06,1,t),s=$n([e.eye,[34.3,1,43.6],[31.5,1.9,43.4],[26.5,2.4,43.6],[21,2.6,43.6],[16.5,2.8,43.2],[12.6,3.1,41.2],[9.6,3.4,38],o.eye],a*.55+zn(a)*.45),i=Mo(n.pos,[1,-.2,-1.45]);s=tn(s,i,Kt(.1,.22,t)*(1-Kt(.52,.72,t)));let c=Kt(.06,.16,t)*(1-Kt(.86,1,t)),h=tn(e.target,n.pos,c);h=tn(h,o.target,Kt(.86,1,t));let l=te(e.fov,o.fov,Kt(.1,1,t))+6*Math.sin(Math.PI*Kt(.08,.9,t)),d=te(e.roll,o.roll,t)+.06*Math.sin(Math.PI*2*Kt(.1,.9,t))+r;return xo(Mo(s,[0,r,0]),h,l,d)},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]),s=Kt(.02,.06,t)*(1-Kt(.08,.3,t));return{letterbox:te(e.letterbox,o.letterbox,Kt(.1,.4,t)),exposure:te(e.exposure,o.exposure,t)*(1+.8*s),focus:te(a,o.focus,Kt(.86,1,t)),aperture:te(.8,o.aperture,Kt(.86,1,t)),vignette:te(e.vignette,o.vignette,t),shafts:te(e.shafts,o.shafts,t)+s}},leaf(t){let e=ar((t-.05)/.95);if(e<=0)return{phase:"floor"};let o=$n(UE(),e*.6+zn(e)*.4),n=Math.sin(t*Math.PI*9)*.12*Math.sin(Math.PI*e);return{phase:"fly",pos:Mo(o,[0,n*.6,n]),tumble:1.4-.8*e}}},...[0,1].map(t=>Gy(t,7.5)),{dur:10,cam(t,e,o,n){let r=zn(t),a=$n([e.eye,[7.6,3.2,16.2],[7,2.9,17.2],[6.5,3.2,16],o.eye],r),s=Kt(0,.15,t)*(1-Kt(.85,1,t)),i=tn(tn(e.target,o.target,Kt(.5,1,t)),n.pos,s);return xo(a,i,te(e.fov,o.fov,r)+4*Math.sin(Math.PI*r),te(e.roll,o.roll,r))},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:te(e.letterbox,o.letterbox,t),exposure:te(e.exposure,o.exposure,t),focus:te(a,o.focus,Kt(.85,1,t)),aperture:te(.6,o.aperture,Kt(.85,1,t)),vignette:te(e.vignette,o.vignette,t),shafts:te(e.shafts,o.shafts,t)}},leaf(t){let e=zn(t),o=$n(BE(),e);return{phase:"fly",pos:Mo(o,[0,Math.sin(t*Math.PI*6)*.06*Math.sin(Math.PI*t),0]),tumble:.6+.4*Math.sin(Math.PI*t)}}},...[3,4].map(t=>Gy(t,7.5)),{dur:10,cam(t,e,o,n){let r=zn(t),a=$n([e.eye,[7.6,4,30.5],[7.3,4.4,25.5],[7.1,4,21.8],o.eye],r),s=Kt(0,.2,t)*(1-Kt(.9,1,t)),i=tn(tn(e.target,o.target,Kt(.5,1,t)),n.pos,s);return xo(a,i,te(e.fov,o.fov,r),te(e.roll,o.roll,r))},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:te(e.letterbox,o.letterbox,t),exposure:te(e.exposure,o.exposure,t),focus:te(a,o.focus,Kt(.85,1,t)),aperture:te(.7,o.aperture,Kt(.85,1,t)),vignette:te(e.vignette,o.vignette,t),shafts:te(e.shafts,o.shafts,t)}},leaf(t){let e=$n(jE(),Kt(0,.86,t)),o=Math.sin(t*Math.PI*7)*.3*(1-Kt(.4,.84,t)),n=Kt(.8,.9,t);return{phase:"fly",pos:Mo(e,[o,Math.abs(Math.cos(t*Math.PI*7))*.08*(1-n),0]),tumble:.8*(1-n),swing:o}}}],hp=9.2,Oc=.72;function Hy(t){return t<Oc?te(g1(),hp,t/Oc):te(hp,qE,(t-Oc)/(1-Oc))}function Nc(){return Oc*ar((oa[0]+.15-g1())/(hp-g1()))}var m1={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},p1=t=>Object.assign({},m1,xs[t].look),VE=`
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
`;function rr(t,e,o){let n=document.createElement(t);return e&&(n.className=e),o!==void 0&&(n.innerHTML=o),n}var di=t=>String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function v1(t,e,o){t.querySelectorAll(".tour-line").forEach((n,r)=>{n.style.transitionDelay=(e+r*o).toFixed(2)+"s"})}By.exports=function(e){let o=/tourdebug/.test(location.search),{fps:n}=e;if(!document.querySelector("link[data-tour-font]")){let Y=document.createElement("link");Y.rel="stylesheet",Y.href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&display=swap",Y.setAttribute("data-tour-font",""),document.head.appendChild(Y)}let r=Zd(),a=null;fetch("res/hand.json").then(Y=>Y.ok?Y.json():null).then(Y=>{a=Y}).catch(()=>{});let s=document.createElement("style");s.textContent=VE+`
	.hand-text { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); clip-path: inset(50%); white-space: normal; }
	.tour-body canvas.hand { display: block; cursor: pointer; }`,s.textContent+=`
	body.touring #museum-mobile-controls,
	body.touring .painting-plaque { display: none !important; }`,document.head.appendChild(s);let i=rr("div","tour");i.setAttribute("role","region"),i.setAttribute("aria-label","Guided tour of the gallery. Swipe, scroll or press the arrow keys to move on.");let c=rr("div","tour-mark",di(h1.name)),h=rr("button","tour-free","Explore freely");h.type="button";let l=rr("div","tour-links",rp.icons("tour-icon"));l.insertBefore(tp()("tour-icon"),l.firstChild),l.insertBefore(Yh().button("tour-icon"),l.firstChild.nextSibling);let d=rr("button","tour-free tour-note",'<svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 4c-7 1-11.5 5.5-13 13l-1.5 3 3-1.5c7.500-1.500 12-6 13-13z"/><path d="M5.5 20L13 12.500"/></svg><span>Leave a note</span>');d.type="button",d.setAttribute("aria-label","Leave a note: go to the piano room and the confessional"),l.appendChild(d),u1&&l.appendChild(h);let u=rr("div","tour-progress",xs.map(()=>"<i></i>").join("")),p=rr("div","tour-hint",'<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 15l6-6 6 6"></path></svg><span></span>'),f=p.querySelector("span"),v=rr("div","tour-card tour-intro",`
		<span class="tour-line tour-kicker">A virtual gallery</span>
		<span class="tour-rule"></span>
		<h1 class="tour-line tour-title">${di(h1.name)}</h1>
		<span class="tour-line tour-sub tour-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</span>`);v1(v,.4,.35);let m=h1.text.split(/\n\s*\n/).map(Y=>`<p class="tour-line">${di(Y.trim())}</p>`).join(""),g=rr("div","tour-card tour-about",`
		<span class="tour-line tour-kicker">The artist</span>
		<h2 class="tour-line tour-title">${di(h1.title)}</h2>
		<span class="tour-rule"></span>
		${rp.line("tour-line tour-contact")}
		${m}`);v1(g,.25,.28);let x=rr("div","tour-card tour-sky",`
		<span class="tour-line tour-sub">Every painting here waits for the light.</span>`);v1(x,.6,.3);let y=rr("div","tour-card tour-master","");function w(Y){let xt=rr("div","tour-card tour-story",`
			<span class="tour-line tour-kicker"></span>
			<h2 class="tour-title tour-letters"></h2>
			<span class="tour-rule"></span>
			<span class="tour-line visit-row"></span>
			<div class="tour-body"></div>`),ce=xt.querySelector(".tour-title"),ze=xt.querySelector(".tour-body");return xt.filled=!1,xt.body=ze,xt.fill=()=>{let Ce=Y();if(!Ce||xt.filled)return;xt.filled=!0;let hn=Ce.title||"";xt.querySelector(".tour-kicker").textContent=NE(Ce)||"Oil on canvas";let u0=xt.querySelector(".visit-row");u0.innerHTML=ap.button(Ce),u0.hidden=!u0.innerHTML;let O0=u0.querySelector(".visit-btn");O0&&(O0.addEventListener("click",Eo=>{Eo.stopPropagation(),ap.open(Ce)}),xt.warm=()=>ap.warm(Ce));let un=0;ce.innerHTML=hn.split(" ").map(Eo=>'<span class="tour-word">'+Eo.split("").map(n0=>`<span style="transition-delay:${(.35+un++*.045).toFixed(3)}s">${di(n0)}</span>`).join("")+"</span>").join(" "),ce.setAttribute("aria-label",hn);let E0=.35+hn.length*.045+.2;xt.querySelector(".tour-rule").style.transitionDelay=E0.toFixed(2)+"s";let dn=String(Ce.description||"").split(/\n\s*\n/).filter(Eo=>Eo.trim());if(xt.querySelector(".tour-kicker").style.transitionDelay="0.1s",a&&dn.length){ze.innerHTML=dn.map(An=>`<p class="hand-text">${di(An.trim())}</p>`).join("")+'<div class="hand-wrap"><canvas class="hand" aria-hidden="true"></canvas></div>';let Eo=ze.querySelector("canvas"),n0=dn.map(An=>An.trim()).join(`

`),en=!1,Wn=!1,X0=0;ze.addEventListener("wheel",()=>{en=!0},{passive:!0}),ze.addEventListener("touchmove",()=>{en=!0},{passive:!0});let Y0=parseFloat(getComputedStyle(ze).fontSize)||17,Jo=r(Eo,a,{ink:"rgba(244,236,223,0.93)",shadow:"rgba(0,0,0,0.55)",shadowBlur:7,xh:Math.max(8.5,Y0*.56),width:.14,speed:80,pace:.12,minDur:.022,maxTime:An=>3.5+An.length/420,seed:3+hn.length,onPen:An=>{if(en)return;let Fr=An-ze.clientHeight*.55;Fr>ze.scrollTop+4&&(ze.scrollTop+=Math.min(16,Fr-ze.scrollTop))}});Eo.addEventListener("click",An=>{An.stopPropagation(),clearTimeout(X0),Wn?Jo.finish():(Wn=!0,Jo.write(n0,!0))}),xt.write=()=>{if(clearTimeout(X0),en=!1,Wn){Jo.write(n0,!0);return}Jo.write("",!0),X0=setTimeout(()=>{Wn=!0,Jo.write(n0)},E0*.6*1e3)},xt.stopWrite=()=>{clearTimeout(X0),Jo.stop()};let wr=0;window.addEventListener("resize",()=>{clearTimeout(wr),wr=setTimeout(()=>{Wn&&xt.classList.contains("on")&&Jo.write(n0,!0)},250)})}else ze.innerHTML=dn.map(Eo=>`<p class="tour-line">${di(Eo.trim())}</p>`).join(""),ze.querySelectorAll(".tour-line").forEach((Eo,n0)=>{Eo.style.transitionDelay=(E0+.3+Math.min(n0,6)*.35).toFixed(2)+"s"})},xt}let M=()=>e.paintings?e.paintings():[],_=Y=>M().find(xt=>xt.side==="corridor"&&Math.abs(xt.paintingPosition[0]-Y)<.5),k=w(()=>M().find(Y=>Y.side==="end")),O=()=>rr("div","tour-card",""),N=w(()=>_(pi[0])),G=w(()=>_(vi[0])),$=w(()=>_(mi[0])),V=S0.map(Y=>w(()=>M().find(xt=>xt.side===Y.side&&Math.abs(xt.paintingPosition[2]-Y.z)<.5))),D=rr("div","tour-card tour-endcard",`
		<span class="tour-line tour-kicker">Thank you for walking with me</span>
		<span class="tour-rule"></span>
		<span class="tour-line tour-sub">${u1?"The rest of the gallery is yours to wander.":"Swipe back to return to any painting."}</span>
		<span class="tour-line tour-sub tour-confess-line">Before you leave, the confessional is open.<br>Leave me a note; no one else will read it.</span>
		<div class="tour-line tour-end"><button type="button" class="tour-btn" data-act="confess">Leave something behind</button></div>
		${rp.line("tour-line tour-contact")}
		<div class="tour-line tour-end">
			${u1?'<button type="button" class="tour-btn" data-act="free">Walk the gallery</button>':""}
			<button type="button" class="tour-btn quiet" data-act="list">All paintings</button>
			<button type="button" class="tour-btn quiet" data-act="replay">Replay</button>
		</div>`);v1(D,.5,.35);let U=[v,g,x,y,k,O(),O(),O(),N,G,$,O(),...V,D];i.append(...U,c,l,u,p),document.body.appendChild(i);let ht=$y()({root:i,avatar:e.avatar,glyphs:()=>a,onExit:()=>{Le=-1,re&&(Qt={start:E},re=!1)}});document.body.classList.add("touring");let jt=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,Lt=jt?"Scroll":"Swipe",gt=xs.map((Y,xt)=>xt===0?jt?"Scroll to begin":"Swipe up to begin":xt===1?Lt+" to follow the leaf":xt===2?Lt+" to follow the light":xt===3?Lt+" for its story":xt===6||xt===7||xt===xs.length-1?"":Lt+" on"),tt=[0];cp.forEach(Y=>tt.push(tt[tt.length-1]+Y.dur));let W=tt[tt.length-1],st=210,wt=95,$t=.35,Ut=1.4,be=.32,De=1,He=1.3,Ot=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,ie=2.2,Oe=.7,Ue=.9,Ge=!0,ve=0,ye=0,mt=0,ue=-10,Be=!1,Le=-1,oe=0,So=0,E=0,ho=null,io=Object.assign({},p1(0)),dt=xs[0].cam(0),Ct={phase:"home",pos:Rc.slice(),tumble:0},Tt=0,eo=Y=>{let xt=0;for(let ce=1;ce<tt.length;ce++)Math.abs(tt[ce]-Y)<Math.abs(tt[xt]-Y)&&(xt=ce);return xt};function Ke(Y){let xt=U[Y];xt&&xt.fill&&(xt.fill(),xt.body.scrollTop=0,xt.offsetWidth),U.forEach((ce,ze)=>{let Ce=ce.classList.contains("on");ce.classList.toggle("on",ze===Y),ze===Y&&!Ce&&ce.write&&ce.write(),ze!==Y&&Ce&&ce.stopWrite&&ce.stopWrite()}),xt&&xt.warm&&xt.warm(),f.textContent=gt[Y]||"",p.classList.toggle("on",!!gt[Y])}function Ye(){U.forEach(Y=>{Y.stopWrite&&Y.classList.contains("on")&&Y.stopWrite(),Y.classList.remove("on")}),p.classList.remove("on")}let je=null,Oo=-1;function B(Y){if(ht.active||!Ge||ho)return;let xt=E-ue>$t;if(ue=E,xt||!je){let ce=0,ze=W;for(let Ce=0;Ce<tt.length;Ce++)if(tt[Ce]<=ve-.02&&(ce=tt[Ce]),tt[Ce]>=ve+.02){ze=tt[Ce];break}je={lo:ce,hi:ze}}E<Oo||(Be=!1,mt=Math.max(je.lo,Math.min(je.hi,mt+Y)),mt=Math.max(ve-ie,Math.min(ve+ie,mt)))}function yt(Y){if(ht.active||!Ge||ho)return;let xt=Be?mt:ve,ce;if(Y>0)ce=tt.findIndex(ze=>ze>xt+.05);else{ce=-1;for(let ze=tt.length-1;ze>=0;ze--)if(tt[ze]<xt-.05){ce=ze;break}}ce<0||(mt=tt[ce],Be=!0,ue=E)}let At=null,Et=Y=>Y.stopPropagation();["touchstart","touchmove","touchend","mousedown","mouseup","click","contextmenu"].forEach(Y=>i.addEventListener(Y,Et)),i.addEventListener("pointerdown",Y=>{if(Y.stopPropagation(),!(Y.target.closest("button, a")||Y.target.closest(".tour-body"))){At={x:Y.clientX,y:Y.clientY,lx:Y.clientX,ly:Y.clientY,t:performance.now(),moved:0,v:0,lt:performance.now()};try{i.setPointerCapture(Y.pointerId)}catch(xt){}}}),i.addEventListener("pointermove",Y=>{if(!At)return;let xt=Y.clientX-At.lx,ce=Y.clientY-At.ly;At.lx=Y.clientX,At.ly=Y.clientY;let ze=Math.abs(ce)>=Math.abs(xt)?-ce:-xt;At.moved+=Math.abs(ze);let Ce=performance.now(),hn=ze/wt;At.v=At.v*.6+hn/Math.max(.008,(Ce-At.lt)/1e3)*.4,At.lt=Ce,At.moved>6&&B(hn)});let ne=Y=>{let xt=At;if(At=null,!!xt){if(ht.active){xt.moved<10&&performance.now()-xt.t<500?ht.tap():xt.y-(Y?Y.clientY:xt.ly)>30&&ht.swipe(1);return}xt.moved<10&&performance.now()-xt.t<500?yt(1):performance.now()-xt.lt<120&&B(Math.max(-1.6,Math.min(1.6,xt.v*.22)))}};i.addEventListener("pointerup",Y=>{Y.stopPropagation(),ne(Y)}),i.addEventListener("pointercancel",()=>{At=null}),i.addEventListener("wheel",Y=>{if(ht.active){if(Y.target.closest(".conf-ui"))return;Y.preventDefault(),ht.wheel(Y.deltaY);return}if(Y.target.closest(".tour-body")){let ce=Y.target.closest(".tour-body"),ze=ce.scrollTop+ce.clientHeight>=ce.scrollHeight-2&&Y.deltaY>0,Ce=ce.scrollTop<=0&&Y.deltaY<0;if(!ze&&!Ce)return}Y.preventDefault();let xt=Y.deltaMode===1?Y.deltaY*16:Y.deltaMode===2?Y.deltaY*window.innerHeight:Y.deltaY;B(xt/st)},{passive:!1}),window.addEventListener("keydown",Y=>{if(!Ge||ho||document.body.classList.contains("visiting"))return;if(ht.active){if(Y.stopImmediatePropagation(),Y.target&&/TEXTAREA|INPUT|BUTTON/.test(Y.target.tagName))return;ht.key(Y.key)&&Y.preventDefault();return}let xt=Y.key;if(["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(xt)>=0){if((xt==="Enter"||xt===" ")&&Y.target&&Y.target.tagName==="BUTTON")return;Y.preventDefault(),Y.stopImmediatePropagation(),yt(1)}else["ArrowUp","ArrowLeft","PageUp"].indexOf(xt)>=0?(Y.preventDefault(),Y.stopImmediatePropagation(),yt(-1)):xt==="Escape"?(Y.preventDefault(),se()):/^[wasdzq]$/i.test(xt)&&Y.stopImmediatePropagation()},!0),window.addEventListener("keyup",Y=>{Ge&&!ho&&/^(Arrow|[wasdzq]$)/i.test(Y.key)&&Y.stopImmediatePropagation()},!0),h.addEventListener("click",Y=>{Y.stopPropagation(),se()}),["mousedown","pointerdown"].forEach(Y=>d.addEventListener(Y,xt=>xt.stopPropagation())),d.addEventListener("click",Y=>{Y.stopPropagation(),he()});let Te=xo([8.6,1.75,44.3],[-3,1.85,44.5],55,0),me=null,re=!1;function he(){if(!Ge||ho||ht.active||me)return;Ye(),Le=-2;let Y=dt.eye;if(Y[0]>.5&&Y[0]<13.5&&Y[2]>36&&Y[2]<50){re=!1,ht.start(dt,io);return}me={t:0}}D.addEventListener("click",Y=>{let xt=Y.target.closest("button");xt&&(Y.stopPropagation(),xt.dataset.act==="free"&&se(),xt.dataset.act==="replay"&&Ee(),xt.dataset.act==="list"&&yu().show(!1),xt.dataset.act==="confess"&&(Ye(),Le=-2,ht.start(dt,io)))});let de=[null,[xr.zc-1.6,Math.PI/2],[11.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[42.5+Cc[0]-7,0],[42.5+Cc[1]-7,0],[42.5+Cc[2]-7,0],[1e3,Math.PI/2],...S0.map(Y=>[Y.z-1.6,Y.side==="left"?-Math.PI/2:Math.PI/2]),[ys[2]-1.6,Math.PI]],We=null,ge=0;function se(){if(!Ge||ho||!u1)return;let Y=eo(ve),xt=de[Y];We=Y<=1?{phase:"home",pos:Rc.slice()}:Y>=3&&Y<=6?{phase:"floor",pos:oa.slice()}:Y===11?{phase:"floor",pos:cf.slice()}:Y===18?{phase:"floor",pos:ys.slice()}:null,ge=Y>=12?1:0,xt&&n.place&&n.place(xt[0],xt[1]),ho={start:E,fromCam:dt,fromLook:Object.assign({},io)},Ye(),i.hidden=!0,document.body.classList.remove("touring"),e.onExit&&e.onExit()}function Ee(){ve=mt=0,ye=0,Be=!1,Le=-1,oe=0,So=0,Ct={phase:"home",pos:Rc.slice(),tumble:0},Qt={start:E}}let Qt={start:-1},Ie=!1,zo=[],qe={prev:null,vel:[0,0,0],axis:[1,0,0],dir:null,bank:0,rock:0,spin:0,fresh:!0};function Ko(Y){Tt+=Y*(Ct.phase==="floor"?0:1);let xt=Ct.tumble===void 0?0:Ct.tumble,ce=Lc.fromTranslation(zo,Ct.pos);if(Ct.phase==="home")ce=Lc.rotateY(ce,ce,2.2+Math.sin(Tt*.9)*.15),ce=Lc.rotateZ(ce,ce,-1+Math.sin(Tt*1.3)*.12),ce=Lc.rotateX(ce,ce,.4);else if(Ct.phase==="floor")ce=Lc.rotateY(ce,ce,.65),ce=Lc.rotateX(ce,ce,.16);else{let ze=Ct.pos;if(qe.prev&&Y>0){let z0=[ze[0]-qe.prev[0],ze[1]-qe.prev[1],ze[2]-qe.prev[2]];if(Math.hypot(z0[0],z0[1],z0[2])<1.5){let Uc=Math.min(1,Y*6);for(let Es=0;Es<3;Es++)qe.vel[Es]+=(z0[Es]/Y-qe.vel[Es])*Uc}else qe.vel=[0,0,0]}qe.prev=ze.slice();let Ce=qe.vel,hn=Math.hypot(Ce[0],Ce[1],Ce[2]),u0=Kt(.25,1.4,hn),O0=Kt(.5,2,-Ce[1]),un=Tt*.35*(.3+xt)+.65,E0=[Math.cos(un),0,Math.sin(un)];hn>.001&&(E0=tn(E0,j0(Ce,-1/hn),u0));let dn=Math.min(1,Y*4);qe.axis=tn(qe.axis,E0,qe.fresh?1:dn);let Eo=qe.axis,n0=Math.hypot(Eo[0],Eo[1],Eo[2])||1;Eo=j0(Eo,1/n0);let en=dt.eye,Wn=[en[0]-ze[0],en[1]-ze[1],en[2]-ze[2]],X0=Math.hypot(Wn[0],Wn[1],Wn[2])||1,Y0=te(.6,.22,u0),Jo=[Wn[0]/X0*Y0,1+Wn[1]/X0*Y0,Wn[2]/X0*Y0],wr=Eo[0]*Jo[0]+Eo[1]*Jo[1]+Eo[2]*Jo[2];Jo=sp(Jo,j0(Eo,wr));let An=Math.hypot(Jo[0],Jo[1],Jo[2])||1;Jo=j0(Jo,1/An);let Fr=[Eo[1]*Jo[2]-Eo[2]*Jo[1],Eo[2]*Jo[0]-Eo[0]*Jo[2],Eo[0]*Jo[1]-Eo[1]*Jo[0]],qo=Math.hypot(Ce[0],Ce[2]),pn=0;if(qo>.15&&qe.dir&&Y>0){let z0=[Ce[0]/qo,Ce[2]/qo];pn=(qe.dir[0]*z0[1]-qe.dir[1]*z0[0])/Y,qe.dir=z0}else qo>.15&&(qe.dir=[Ce[0]/qo,Ce[2]/qo]);qe.bank+=(Math.max(-.8,Math.min(.8,pn*.3))*u0-qe.bank)*Math.min(1,Y*3),qe.rock+=Y*(1.5+2.4*u0),qe.spin+=Y*O0*7*(.4+xt);let _r=Math.sin(qe.rock)*(.26+.45*xt)*(1-.5*O0)+qe.bank+qe.spin,ks=Math.sin(qe.rock*.63+1)*(.16+.3*xt)+(Ct.swing||0)*.9,ra=Math.cos(_r),Ss=Math.sin(_r),vf=Mo(j0(Jo,ra),j0(Fr,Ss)),qa=Mo(j0(Fr,ra),j0(Jo,-Ss));ra=Math.cos(ks),Ss=Math.sin(ks);let wi=Mo(j0(Eo,ra),j0(vf,Ss)),Gc=Mo(j0(vf,ra),j0(Eo,-Ss)),w1=Math.sin(qe.rock+1.5708)*.035*(.3+xt)*(1-.5*u0),xa=Mo(ze,j0(Fr,w1)),Hc=[wi[0],wi[1],wi[2],0,Gc[0],Gc[1],Gc[2],0,qa[0],qa[1],qa[2],0,xa[0],xa[1],xa[2],1];for(let z0=0;z0<16;z0++)ce[z0]=Hc[z0];qe.fresh=!1}return Ct.phase!=="fly"&&(qe.prev=null,qe.vel=[0,0,0],qe.fresh=!0,qe.spin=0,qe.bank=0,qe.dir=null),{visible:!0,model:ce}}function br(Y){for(let xt in m1)io[xt]=Y[xt]!==void 0?Y[xt]:m1[xt]}function ga(Y,xt){if(Y<=1)return{phase:"home",pos:Rc.slice(),tumble:0};let ce=Fy[Y];if(ce){let ze=ce.amp;return{phase:"fly",pos:Mo(ce.pos(),[Math.sin(xt*.55)*ze[0],Math.sin(xt*.8)*ze[1],(1-Math.cos(xt*.45))*ze[2]]),tumble:ce.tumble}}return{phase:"floor",pos:(Y>=18?ys:Y>=10?cf:oa).slice(),tumble:0}}let yo=0,Lo=null;function jn(Y){let xt=Math.min(.1,Math.max(0,Y-yo));if(yo=Y,E=Y,Ie||(Ie=!0,Qt.start=Y),ho)return null;if(me&&(me.t+=xt,me.t>=.7&&(me=null,re=!0,ht.start(Te,Object.assign({},m1,{fade:1,fadeColor:[0,0,0]})))),ht.active){let qo=ht.update(xt);return dt=qo.camera,br(qo.look),o&&window.__camOverride&&(dt=window.__camOverride),o&&window.__lookOverride&&Object.assign(io,window.__lookOverride),{camera:dt,walker:null,door:1,look:io,leaf:Ko(xt)}}if(!Be&&!At&&E-ue>Oe){let qo=eo(mt);Math.abs(tt[qo]-mt)<Ue&&(mt=tt[qo])}let ce=mt-ve;if(Be){let pn=Math.sign(ce)*Math.min(De,Math.sqrt(2*He*Math.abs(ce)))-ye;ye+=Math.sign(pn)*Math.min(Math.abs(pn),He*xt),ve+=ye*xt,(ce>0&&ve>=mt||ce<0&&ve<=mt||Math.abs(mt-ve)<1e-4)&&(ve=mt,ye=0,Be=!1)}else{let qo=OE(ve,mt,ye,be,xt,3);ve=qo[0],ye=qo[1],Math.abs(mt-ve)<1e-4&&Math.abs(ye)<.001&&(ve=mt,ye=0)}let ze=0;for(;ze<cp.length-1&&ve>=tt[ze+1];)ze++;let Ce=cp[ze],hn=ar((ve-tt[ze])/Ce.dur),u0=xs[ze],O0=xs[ze+1],un=eo(ve);un!==oe&&(oe=un,So=0);let E0=Math.abs(ve-tt[un])<.02;E0&&(So+=xt);let dn=1-Kt(0,1.2,Math.abs(ve-tt[un])),Eo=Ce.leaf(hn);if(Eo.pos?Ct=Object.assign({},Eo):Ct=Object.assign({},Eo,{pos:Eo.phase==="home"?Rc.slice():(ze>=10?cf:oa).slice()}),Fy[un]&&dn>0){let qo=ga(un,So);Ct.pos=tn(Ct.pos,qo.pos,dn)}let n0=Ce.walker&&(hn>.01||ze===6)?Ce.walker(hn):null;Lo=n0==null?null:{x:n0,z:lp,heading:Math.PI/2,phase:(n0-Uy)/DE};let en=Ce.cam(hn,u0.cam(0),O0.cam(0),Ct);if(dn>0&&So>0){let qo=xs[un],pn=qo.cam(0),_r=qo.cam(So);en=xo(Mo(en.eye,j0(sp(_r.eye,pn.eye),dn)),Mo(en.target,j0(sp(_r.target,pn.target),dn)),en.fov+(_r.fov-pn.fov)*dn,en.roll+(_r.roll-pn.roll)*dn)}if(dn>0&&!Ot){let qo=E,pn=.006*dn,_r=Math.sin(qo*.61)*.6+Math.sin(qo*1.37+1.3)*.4,ks=Math.sin(qo*.47+2.1)*.6+Math.sin(qo*1.13+.4)*.4,ra=Math.sin(qo*.53+4)*.5+Math.sin(qo*.97+2.6)*.5;en=xo(Mo(en.eye,[_r*pn,ks*pn*.7,ra*pn]),Mo(en.target,[ks*pn*1.8,_r*pn*1.4,0]),en.fov,en.roll+ra*.0012*dn)}dt=en;let Wn=p1(ze),X0=p1(ze+1),Y0=Object.assign({},Wn,Ce.look(hn,Wn,X0,Ct,en.eye));if(dn>0){let qo=p1(un);for(let pn in qo)typeof qo[pn]=="number"&&(Y0[pn]=te(Y0[pn],qo[pn],dn))}br(Y0);let wr=E0&&Math.abs(mt-ve)<.02?un:-1;wr!==Le&&(wr>=0&&(Oo=E+Ut),Le=wr,wr>=0?Ke(wr):Ye()),u.querySelectorAll("i").forEach((qo,pn)=>qo.classList.toggle("on",pn===un));let An=Le>=0?U[Le]:null;An&&An.fill&&!An.filled&&(An.fill(),An.filled&&(An.classList.remove("on"),An.offsetWidth,An.classList.add("on")));let Fr=ar((Y-Qt.start)/2.6);return Fr<1&&(io.fade=Math.max(io.fade,1-Kt(0,1,Fr)),io.fadeColor=[0,0,0]),o&&window.__camOverride&&(dt=window.__camOverride),o&&window.__lookOverride&&Object.assign(io,window.__lookOverride),{camera:dt,walker:Lo,door:Ce.door?Ce.door(hn):ze>=12?1:0,look:me?Object.assign(io,{fade:Math.max(io.fade||0,ar(me.t/.6)),fadeColor:[0,0,0]}):io,leaf:Ko(xt)}}return o&&(window.__tour={go:yt,exit:se,wind:B,confess(){Ye(),Le=-2,ht.start(dt,io)},note:()=>he(),conf:ht,paper:i1().STATE,seek(Y,xt){ve=mt=tt[Y]+(tt[Y+1]-tt[Y])*xt,ye=0,Be=!1,ue=E+1e6,Qt.start=E-10,Ie=!0},jump(Y){ve=mt=tt[Y],ye=0,Be=!1,So=0,ue=E,Qt.start=E-10,Ie=!0},state:()=>({current:eo(ve),scroll:+ve.toFixed(3),target:+mt.toFixed(3),shown:Le,move:Math.abs(mt-ve)>.02?{p:ve}:null,camNow:dt,leaf:Ct,look:io})}),{update:jn,get active(){return Ge&&!ho},handover(Y){if(!ho)return null;let xt=ar((Y-ho.start)/1.8);return xt>=1?(Ge=!1,null):{from:ho.fromCam,fromLook:ho.fromLook,k:zn(xt)}},restingDoor:()=>ge,restingLeaf(){return We?(Ct=We,Ko(0)):null},mix:gi,cam:xo}}});var XE=Sm(),na=Sr(),zp=yu(),b1=na.reflection,YE=!1,cb=(t,e,o,n,r)=>n+(t-e)*(r-n)/(o-e),Ap=()=>cb(window.innerWidth/window.innerHeight,16/9,9/16,1.7,Math.PI/3);navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)&&(Ap=()=>cb(window.innerWidth/window.innerHeight,16/9,9/16,1.5,Math.PI/3));var lb=()=>2*Math.atan(Math.tan(Ap()*.5)*window.innerHeight/window.innerWidth),KE=qm(),uf=new KE;uf.showPanel(0);YE&&document.body.appendChild(uf.dom);var _n,Fc,yp,Ic,bp,wn;function QE(){try{let t=document.createElement("canvas"),e=t.getContext("webgl")||t.getContext("experimental-webgl");return!!(e&&e.getExtension("OES_standard_derivatives"))}catch(t){return!1}}if(!QE())throw XE.finish(),zp.show(!0),new Error("This device cannot draw the 3D gallery; showing the list instead.");_n=Dm()({extensions:["OES_element_index_uint","OES_standard_derivatives"],optionalExtensions:["EXT_texture_filter_anisotropic","WEBGL_depth_texture"],attributes:{alpha:!1,antialias:!1},pixelRatio:na.pixelRatio});location.hash==="#list"&&zp.show(!1);window.addEventListener("hashchange",()=>{location.hash==="#list"&&zp.show(!1)});Fc=S2()();var ZE=Ku();yp=ZE(_n,Fc,b1);Ic=jg()(_n,Fc);bp=Yg()(_n);var Wy=h3()(_n,Fc),Vy=_3()(_n),Xy=S3()(_n),Yy=H3()(_n),Ky=V3()(_n),Qy=Z3()(_n),_s=dx()(_n),wp=Td(),fb=Yf(),JE=hl(),_p=Nd(),Mp=i0(),o0=Nh(),kp=Mx(),hb=Yh(),{A:$c}=Ar();wn=ay()(Fc,lb);var qc=cy()(_n,na),bs=dy()(_n),Zy=vy()(_n),tz=xy()(_n,na),ez=ky()(_n,na),Jy=Ya()(_n),tb=i1()(_n),eb=Za()(_n),ob=Xs()(_n),ma=jy()({fps:wn,paintings:()=>Ic.interactables(),avatar:_s,onExit:()=>wn.setPaused(!1)});wn.setPaused(!0);/tourdebug/.test(location.search)&&(window.__post=qc);var ws=[],Dc=[],R0=[7,2,1.6];Fc.viewer=R0;var oz=_n({cull:{enable:!0,face:"back"},uniforms:{view:()=>ws,proj:()=>Dc,yScale:1,mirrorOn:()=>b1?1:0,night:()=>Mp.night,time:_n.context("time")}}),nz=_n({cull:{enable:!0,face:"front"},uniforms:{yScale:-1}}),ub=document.createElement("style");ub.textContent=`

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
`;document.head.appendChild(ub);var Dr=document.createElement("button");Dr.className="painting-plaque";Dr.type="button";Dr.setAttribute("aria-label","Read painting");document.body.appendChild(Dr);var V0=document.createElement("div");V0.className="story-overlay";V0.innerHTML=`

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

		${fb.line("story-contact")}

		<div class="visit-row story-visit"></div>

		<p
			class="story-body"
			id="story-body"
		></p>

	</article>
`;document.body.appendChild(V0);var Ms=document.createElement("div");Ms.className="museum-links";Ms.innerHTML=fb.icons("museum-link");Ms.insertBefore(tp()("museum-link"),Ms.firstChild);Ms.insertBefore(hb.button("museum-link"),Ms.firstChild.nextSibling);["mousedown","pointerdown","click"].forEach(t=>Ms.addEventListener(t,e=>e.stopPropagation()));document.body.appendChild(Ms);var rz=V0.querySelector("#story-title"),az=V0.querySelector("#story-body"),nb=V0.querySelector("#story-meta"),sz=V0.querySelector(".story-contact"),hf=V0.querySelector(".story-visit");hf.addEventListener("click",t=>{t.target.closest(".visit-btn")&&bi&&_p.open(bi)});var iz=V0.querySelector(".story-close"),bi=null,sr={p:0,target:0,last:0},db={title:wp.title,description:wp.text,isAbout:!0},Ia=null;function Tp(t){t&&(bi=t,rz.textContent=t.title||"",az.textContent=t.description||"",nb.textContent=t.isAbout?"":JE(t),nb.hidden=!!t.isAbout,sz.hidden=!t.isAbout,hf.innerHTML=t.isAbout?"":_p.button(t),hf.hidden=!hf.innerHTML,hf.hidden||_p.warm(t),V0.classList.toggle("about-mode",!!t.isAbout),V0.classList.add("open"),sr.target=t.isAbout?1:0,Ia=t,Dr.classList.remove("visible"),wn.setPaused(!0))}function Lp(){V0.classList.remove("open"),sr.target=0,bi=null,Ia=null,wn.setPaused(!1)}function pb(t){t&&(t.preventDefault(),t.stopPropagation()),Ia&&Tp(Ia)}Dr.addEventListener("pointerup",pb,!0);Dr.addEventListener("touchend",pb,{passive:!1,capture:!0});Dr.addEventListener("click",t=>{t&&(t.preventDefault(),t.stopPropagation()),bi===null&&Ia&&Tp(Ia)},!0);iz.addEventListener("click",Lp);V0.addEventListener("click",t=>{t.target===V0&&Lp()});window.addEventListener("keydown",t=>{t.code==="Escape"&&V0.classList.contains("open")&&Lp()});function rb(t,e){let o=e[0],n=e[1],r=e[2];return[t[0]*o+t[4]*n+t[8]*r+t[12],t[1]*o+t[5]*n+t[9]*r+t[13],t[2]*o+t[6]*n+t[10]*r+t[14],t[3]*o+t[7]*n+t[11]*r+t[15]]}function cz(){if(bi)return;if(ma.active){Ia=null,Dr.classList.remove("visible");return}let t=Ic.interactables(),e=wn.forward[0],o=wn.forward[2],n=Math.hypot(e,o)||1,r=null,a=1/0;for(let s of t){let i=s.paintingPosition,c=0,h=0;s.side==="left"?c=1:s.side==="right"?c=-1:s.side==="corridor"?h=1:h=-1;let l=i[0]-wn.pos[0],d=i[2]-wn.pos[2],u=-(l*c+d*h),p=Math.abs(l*h-d*c),f=-(e*c+o*h)/n,v=s.side==="end"?11:8,m=(s.width||2)/2;f>.9&&u>.5&&u<v&&p<m+.8&&u<a&&(r=s,a=u)}if(!r){let s=wn.pos[0],i=wn.pos[2];e/n>.85&&s<13.6&&i>$c.z0-.5&&i<$c.z1+.5&&(r=Object.assign({},db,{plaqueTitle:wp.name}))}r?(Ia=r,Dr.textContent=r.isAbout?"ABOUT  \xB7  "+r.plaqueTitle:"READ  \xB7  "+r.title,Dr.classList.add("visible")):(Ia=null,Dr.classList.remove("visible"))}var pf=sc();function lz(){let t=_s.state;if(!t||!t.glowPos)return null;let e=rb(wn.view(),[t.glowPos[0],t.glowPos[1]-.08,t.glowPos[2],1]),o=rb(wn.proj(),e);return o[3]<=.05?null:[(o[0]/o[3]*.5+.5)*window.innerWidth,(.5-o[1]/o[3]*.5)*window.innerHeight,o[3]]}var Sp=null;window.addEventListener("pointerdown",t=>{Sp={x:t.clientX,y:t.clientY,t:performance.now()}},!0);window.addEventListener("pointerup",t=>{let e=Sp;if(Sp=null,!e||bi||ma.active||!t.target||!/^(CANVAS|BODY)$/.test(t.target.tagName)||Math.hypot(t.clientX-e.x,t.clientY-e.y)>12||performance.now()-e.t>600)return;let o=lz();if(!o)return;let n=!!document.pointerLockElement,r=n?window.innerWidth/2:t.clientX,a=n?window.innerHeight/2:t.clientY,s=Math.max(t.pointerType==="touch"?60:40,260/o[2]);Math.hypot(r-o[0],a-o[1])<s&&(t.preventDefault(),t.stopPropagation(),Tp(db))},!0);function fz(t){let e=Math.min(Math.max(t-sr.last,0),.1);sr.last=t;let o=e/1.6;if(sr.p=sr.target>sr.p?Math.min(1,sr.p+o):Math.max(0,sr.p-o),sr.p<=0)return;let n=sr.p<.5?2*sr.p*sr.p:1-Math.pow(-2*sr.p+2,2)/2,r=window.innerHeight>window.innerWidth,a=_s.state,s=a&&a.hipsPos?a.hipsPos[0]:$c.cx-1.2,i=a&&a.hipsPos?a.hipsPos[2]:$c.zc,c=r?[s-2.3,2,i-.1]:[s-1.55,1.55,i+.3],h=r?[s+.1,.2,i-.1]:[s+.1,.7,i+.6],l=wn.pos,d=wn.forward,u=[l[0],l[1],l[2]],p=[l[0]+d[0],l[1]+d[1],l[2]+d[2]],f=(x,y)=>x.map((w,M)=>w+(y[M]-w)*n),v=[$c.cx-6.2,1.7,$c.zc],m=1-n,g=u.map((x,y)=>m*m*x+2*m*n*v[y]+n*n*c[y]);pf.lookAt(wn.view(),g,f(p,h),[0,1,0])}var vb=/[?&]studio\b/.test(location.search);if(vb){let t=document.createElement("style");t.textContent=".tour, #museum-mobile-controls, .painting-plaque { display: none !important; }",document.head.appendChild(t),window.addEventListener("pointerdown",e=>{Ep.takes(e)||i0().toggle()}),window.addEventListener("keydown",e=>{(e.key==="n"||e.key===" ")&&i0().toggle()})}var Ep=(()=>{let t={mode:"idle",fedTill:0,offset:0,holdAt:null,now:0,lastShot:-1,doneShot:-1,since:0,hintUntil:0},e=null,o=null,n=null,r=(c,h)=>{n&&(n.textContent=c,n.classList.add("on"),t.hintUntil=h?t.now+h:0)},a=()=>{let c=document.createElement("style");c.textContent=`
.koi-feed { position: fixed; left: 0; right: 0; bottom: 7vh; display: flex; flex-direction: column; align-items: center; gap: 0.6em; z-index: 20; pointer-events: none; font-family: 'Cormorant Garamond', Georgia, serif; }
.koi-feed-btn { pointer-events: none; opacity: 0; transform: translateY(6px); transition: opacity 1.2s ease, transform 1.2s ease; background: rgba(12, 10, 8, 0.28); border: 1px solid rgba(244, 236, 223, 0.38); border-radius: 999px; color: #f4ecdf; font: italic 400 clamp(17px, 2.3vw, 24px)/1 'Cormorant Garamond', Georgia, serif; letter-spacing: 0.06em; padding: 0.7em 1.5em 0.75em; cursor: pointer; text-shadow: 0 1px 8px rgba(0, 0, 0, 0.55); backdrop-filter: blur(3px); -webkit-backdrop-filter: blur(3px); }
.koi-feed-btn.on { opacity: 1; transform: none; pointer-events: auto; }
.koi-feed-btn:hover { background: rgba(12, 10, 8, 0.42); border-color: rgba(244, 236, 223, 0.7); }
.koi-feed-btn .orn { display: inline-block; margin: 0 0.55em; font-style: normal; opacity: 0.75; transform: translateY(-0.05em); }
.koi-feed-hint { opacity: 0; transition: opacity 1.4s ease; color: #f4ecdf; font: italic 400 clamp(16px, 2vw, 21px)/1.3 'Cormorant Garamond', Georgia, serif; letter-spacing: 0.05em; text-shadow: 0 1px 10px rgba(0, 0, 0, 0.7); text-align: center; padding: 0 1em; }
.koi-feed-hint.on { opacity: 0.95; }
.koi-aim, .koi-aim canvas { cursor: crosshair !important; }
`,document.head.appendChild(c),e=document.createElement("div"),e.className="koi-feed",e.innerHTML='<button type="button" class="koi-feed-btn"><span class="orn">\u2766</span>Cast a crumb upon the water<span class="orn">\u2766</span></button><div class="koi-feed-hint"></div>',document.body.appendChild(e),o=e.querySelector(".koi-feed-btn"),n=e.querySelector(".koi-feed-hint"),o.addEventListener("pointerdown",h=>{h.stopPropagation(),t.mode==="idle"&&(t.mode="aim",t.holdAt=t.now-t.offset,t.since=t.now,o.classList.remove("on"),document.body.classList.add("koi-aim"),r("Touch the water where it should fall"))})},s=(c,h)=>{let l=pf.multiply([],Dc,ws),d=pf.invert([],l);if(!d)return null;let u=c/window.innerWidth*2-1,p=1-h/window.innerHeight*2,f=[0,0,0,0];for(let v=0;v<4;v++)f[v]=d[v]*u+d[4+v]*p+d[8+v]*1+d[12+v];return[f[0]/f[3]-R0[0],f[1]/f[3]-R0[1],f[2]/f[3]-R0[2]]},i=()=>{t.holdAt!==null&&(t.offset=t.now-t.holdAt),t.holdAt=null,t.mode="idle",t.doneShot=t.lastShot,document.body.classList.remove("koi-aim"),n&&n.classList.remove("on")};return{time(c){return t.now=c,t.holdAt!==null?t.holdAt:c-t.offset},update(c){e||a(),c.shot!==t.lastShot&&(t.lastShot=c.shot);let h=Xs();t.mode==="idle"?o.classList.toggle("on",!!c.pond&&t.doneShot!==c.shot):t.mode==="aim"?t.now-t.since>40&&i():t.mode==="watch"&&(h.feeding()&&(t.fedTill=t.now),(t.now-t.fedTill>5&&t.now-t.since>8||t.now-t.since>60)&&i()),t.hintUntil&&t.now>t.hintUntil&&(n.classList.remove("on"),t.hintUntil=0)},takes(c){if(t.mode==="idle")return!1;let h=Xs(),l=s(c.clientX,c.clientY),d=l&&h.poolHit(R0,l);return d?(h.feedAt(d[0],d[1]),t.fedTill=t.now,t.mode==="aim"&&r("and they come, like embers through the dark",5),t.mode="watch",t.since=t.now,document.body.classList.remove("koi-aim"),!0):(t.mode==="aim"&&r("Upon the water, there\u2026"),!0)}}})(),xi={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},yi=null,df=!1,x1=!1;function hz(t,e,o,n){let r=[o[0]-e[0],o[1]-e[1],o[2]-e[2]],a=Math.hypot(r[0],r[1],r[2])||1,s=[-r[2]/a,0,r[0]/a],i=Math.hypot(s[0],s[2])||1;s=[s[0]/i,0,s[2]/i];let c=Math.cos(n),h=Math.sin(n);return pf.lookAt(t,e,o,[s[0]*h,c,s[2]*h])}function uz(t){let e=window.innerWidth/window.innerHeight,o=qc.shot,n=ma.active?ma.update(t):null,r=n?null:ma.handover(t),a=null,s=xi;if(n){a=n.camera,s=n.look,yi=n.leaf;let i=window.__walkOverride&&/tourdebug/.test(location.search)?window.__walkOverride:n.walker||null;_s.setWalk(i),df=!!i,bs.setOpen(n.door||0)}else yi=ma.restingLeaf(),_s.setWalk(null),df=!1,bs.setOpen(ma.restingDoor());if(r){let i=wn.pos,c=wn.forward,h=ma.cam([i[0],i[1],i[2]],[i[0]+c[0],i[1]+c[1],i[2]+c[2]],lb()*180/Math.PI,0);a=ma.mix(r.from,h,r.k),s={};for(let l in xi)s[l]=Array.isArray(xi[l])?xi[l]:r.fromLook[l]+(xi[l]-r.fromLook[l])*r.k}if(a&&n&&(a=kp.apply(a,t)),vb&&!(/tourdebug/.test(location.search)&&window.__camOverride)){let i=Xs().previewCam(Ep.time(t));Ep.update(i),a=i,s=Object.assign({},xi,{fade:i.fade,focus:8})}if(a)hz(ws,a.eye,a.target,a.roll||0),pf.perspective(Dc,a.fov*Math.PI/180,e,.1,700),R0[0]=a.eye[0],R0[1]=a.eye[1],R0[2]=a.eye[2];else{let i=wn.view(),c=wn.proj();for(let u=0;u<16;u++)ws[u]=i[u],Dc[u]=c[u];let h=i[12],l=i[13],d=i[14];R0[0]=-(i[0]*h+i[1]*l+i[2]*d),R0[1]=-(i[4]*h+i[5]*l+i[6]*d),R0[2]=-(i[8]*h+i[9]*l+i[10]*d)}for(let i in xi)o[i]=s[i];n&&kp.pull(o,t)}var yr={wake:[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],wakeDir:[0,0,1],gust:[0,0],focus:6,aperture:0},mp=[9,9,9,9],ab=[0,0,0,0],lf=0,gp=0,Pc=null,sb=0,ib=0,ff=0;function dz(t){let e=Math.min(.1,Math.max(0,t-sb));sb=t,yr.focus=qc.shot.focus,yr.aperture=na.post>=2?qc.shot.aperture:0;for(let s=0;s<4;s++)mp[s]+=e,yr.wake[s][3]=ab[s]*Math.exp(-mp[s]/1.1);let o=yi&&yi.visible?yi.model:null;if(o&&e>0){let s=[o[12],o[13],o[14]];if(Pc){let i=[s[0]-Pc[0],s[1]-Pc[1],s[2]-Pc[2]],c=Math.hypot(i[0],i[1],i[2]),h=c/e;if(c<1.5&&h>.12){let l=Math.min(1,e*8);for(let u=0;u<3;u++)yr.wakeDir[u]+=(i[u]/c-yr.wakeDir[u])*l;let d=Math.hypot(yr.wakeDir[0],yr.wakeDir[1],yr.wakeDir[2])||1;for(let u=0;u<3;u++)yr.wakeDir[u]/=d;if(gp+=e,gp>.14){gp=0;let u=yr.wake[lf];u[0]=s[0],u[1]=s[1],u[2]=s[2],ab[lf]=Math.min(1,(h-.12)/1.6)*.5,mp[lf]=0,lf=(lf+1)%4}}}Pc=s}else o||(Pc=null);let n=bs.openNow?bs.openNow():0,r=e>0?(n-ib)/e:0;ib=n;let a=Math.max(-1,Math.min(1,r*1.2));ff+=(a-ff)*Math.min(1,e*(Math.abs(a)>Math.abs(ff)?6:.7)),yr.gust[0]+=ff*5.5*e,yr.gust[1]=Math.abs(ff)}var xp=0,y1=!1;_n.frame(function({time:t}){if(document.body.classList.contains("visiting")){xp=0;return}uf.begin(),Mp.tick(t);let e=ma.active&&kp.resting&&Mp.settled&&(na.isPhone||na.scale<1||na.level>0);if(e){if(y1=!y1,y1){uf.end();return}}else y1=!1;let o=t-xp;xp=t,na.frame(e?o/2:o),b1=na.reflection,wn.tick({time:t}),fz(t),Ic.update(wn.pos,wn.fmouse[1],Ap()),cz(),uz(t),o0.update(ws,Dc,R0),hb.listen(R0),x1=!df&&o0.room("stair")&&(!o0.room("court")||R0[0]<.5||R0[2]>30),_s.setPiano(x1),dz(t),qc.capture(arguments[0],{view:ws,proj:Dc,eye:R0},()=>{oz(()=>{b1&&o0.floor&&nz(()=>{o0.room("studio",!0)&&ob({reflected:!0}),o0.zone!=="studio"&&(yp(),Wy({reflected:!0}),Jy(),o0.room("stair",!0)&&(eb({reflected:!0}),tb({reflected:!0,view:ws})),o0.room("court",!0)&&Qy(),(x1||o0.room("court",!0)||df)&&_s(),bp(Ic.batch()),o0.room("street",!0)&&Vy(),o0.room("garden",!0)&&Yy(),o0.room("florence",!0)&&Ky(),Zy(yi),bs(),Xy(),bs.glass())}),o0.room("studio")&&ob(),o0.zone!=="studio"&&(yp(),Wy(),Jy(),o0.room("stair")&&(eb(),tb({view:ws})),o0.room("court")&&Qy(),(x1||o0.room("court")||df)&&_s(),bp(Ic.batch()),o0.room("street")&&Vy(),o0.room("garden")&&(Yy(),ez()),o0.room("florence")&&Ky(),Zy(yi),bs(),tz(yr),Xy(),bs.glass())})}),qc.present(),uf.end()});})();
