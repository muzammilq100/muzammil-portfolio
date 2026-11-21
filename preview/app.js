"use strict";(()=>{var Et=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var Sm=Et((vz,km)=>{"use strict";var Hi=document.getElementById("loader"),Gi=Hi&&Hi.querySelector(".loader-name"),il=0,Wf=0,Vf=!1,C4=performance.now(),Ui=.06,Fi=0,vu=0,ym=!1,P4=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function $4(t){if(!Gi)return;let e=Gi.offsetWidth||1,n=(e*(1.14-1.28*t)-e).toFixed(1)+"px 0";Gi.style.webkitMaskPosition=n,Gi.style.maskPosition=n}function _m(t){let e=Math.min(.05,vu?(t-vu)/1e3:.016);vu=t;let o=Vf?.75:.22+(Ui-Fi)*1.2;if(Fi=Math.min(Ui,Fi+Math.max(0,o)*e),P4&&(Fi=Ui),$4(Fi),Vf&&Fi>=.999){ym||(ym=!0,setTimeout(Mm,650));return}requestAnimationFrame(_m)}Gi&&requestAnimationFrame(_m);function bm(){let t=il?Wf/Math.max(il,24):0;Ui=Math.max(Ui,Math.min(.9,.06+t*.84))}function Mm(){Hi&&(Hi.classList.add("done"),setTimeout(()=>Hi.remove(),1400))}function mu(){Vf||(Vf=!0,window.__galleryReady=!0,Hi&&(Ui=1,Gi||Mm()))}var wm=null;function I4(){clearTimeout(wm),Wf>=il&&performance.now()-C4>600&&(wm=setTimeout(()=>{Wf>=il&&mu()},450))}setTimeout(mu,2e4);var q4=t=>/(^|\/)(res|images)\//.test(t),jf=window.fetch.bind(window);async function D4(t,e){let o=await jf(t+".gz",e);if(!o.ok)throw new Error("no .gz");let n=new Uint8Array(await o.arrayBuffer());if(!(n[0]===31&&n[1]===139))return new Response(n);let r=new Blob([n]).stream().pipeThrough(new DecompressionStream("gzip")),a=await new Response(r).arrayBuffer();return new Response(a,{status:200,headers:{"Content-Type":"application/octet-stream"}})}window.fetch=function(t,e){let o=typeof t=="string"?t:t&&t.url||"";if(!q4(o))return jf(t,e);il++,bm();let n=a=>(Wf++,bm(),I4(),a),r;return/\.bin$/.test(o)&&typeof DecompressionStream!="undefined"?r=D4(o,e).catch(()=>jf(t,e)):r=jf(t,e),r.then(n,a=>{throw n(),a})};km.exports={finish:mu}});var Sr=Et((mz,Tm)=>{"use strict";var Em=typeof navigator!="undefined"&&navigator.userAgent||"",F4=typeof window!="undefined"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches&&!window.matchMedia("(any-pointer: fine)").matches,wa=/Android|iPhone|iPad|iPod|Mobile|Silk|Kindle|webOS|BlackBerry|Opera Mini|IEMobile/i.test(Em)||/Macintosh/.test(Em)&&typeof navigator!="undefined"&&navigator.maxTouchPoints>1||F4,zm=typeof window!="undefined"&&window.devicePixelRatio||1,$o={isPhone:wa,pixelRatio:wa?Math.min(zm,1.5):Math.min(zm,2),reflection:!wa,gardenDetail:wa?0:1,leafShare:wa?.65:1,motion:!wa,post:wa?1:2,level:wa?1:0};$o.scale=1;var G4=wa?.55:.6,cl=0,Xf=0,ll=0,fl=0,Bi=1,hl=0,Yf=48,ji=null,gu=0;function H4(t){ji={fps:t,scale:$o.scale},$o.scale>.86?$o.scale=.85:$o.reflection?$o.stepDown():$o.scale>.71?$o.scale=.7:$o.stepDown()||($o.scale=Math.max(G4,$o.scale-.1))}var Am=!0;try{/[?&]noadapt\b/.test(location.search)&&(Am=!1)}catch(t){}$o.frame=t=>{if(!Am)return;if(!(t>0)||t>1){cl=0,Xf=0;return}if(cl+=t,Xf++,cl<.75)return;let e=Xf/cl;if(cl=0,Xf=0,hl>0&&(hl-=.75,hl<=0&&(Bi=1)),ji){if(e<ji.fps*1.08&&ji.scale>$o.scale){if(++gu>=2){$o.scale=1,Bi=1,hl=0,Yf=Math.min(Yf,e*.85),gu=0,ll=0,ji=null;return}}else gu=0;ji=null}if(e<Yf){if(fl=0,++ll>=2){if(ll=0,$o.scale>.61&&$o.climbed){Bi=$o.scale-.05,hl=40,$o.scale=Bi,$o.climbed=!1;return}H4(e)}}else e>Math.max(Yf*1.15,55)?(ll=0,++fl>=6&&$o.scale<Bi-.001?($o.scale=Math.min(Bi,$o.scale+.05),$o.climbed=!0,fl=0):fl>=6&&($o.climbed=!1)):(ll=0,fl=0)};$o.stepDown=()=>{if($o.reflection)$o.reflection=!1;else if($o.gardenDetail>0||$o.motion)$o.gardenDetail=0,$o.motion=!1,$o.leafShare=Math.min($o.leafShare,.65);else if($o.post>0)$o.post--;else return!1;return $o.level++,!0};Tm.exports=$o});var xu=Et((gz,Lm)=>{"use strict";Lm.exports=[{file:"IMG_20250717_102753.jpg",slug:"love-me-like-i-am-already-dead",title:"Love me like I am Already Dead",medium:"Oil on canvas",size:[61,91],description:`We live in a world soaked in hypocrisy. We\u2019re told not to \u201Cspeak ill of the dead,\u201D yet we spend lifetimes speaking ill of the living. We judge, ignore, neglect\u2014and then pretend to mourn with grace when it\u2019s too late. People say beautiful things at funerals, but only after burying a lifetime of cruelty or silence.

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
but the loneliness of having no one willing to admit it happened.`}]});var Kf=Et((xz,Om)=>{"use strict";var I0={instagram:"muzammil_qureshi",email:"muzammilqureshi100@gmail.com"},Nm='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>',Rm='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>';I0.instagramUrl="https://instagram.com/"+I0.instagram;I0.mailUrl="mailto:"+I0.email+"?subject="+encodeURIComponent("Your paintings");I0.icons=t=>`
	<a class="${t}" href="${I0.instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram: @${I0.instagram}" title="Instagram">${Nm}</a>
	<a class="${t}" href="${I0.mailUrl}" aria-label="Email ${I0.email}" title="Email">${Rm}</a>`;I0.line=t=>`
	<span class="${t}">
		<a href="${I0.instagramUrl}" target="_blank" rel="noopener">${Nm}<span>@${I0.instagram}</span></a>
		<a href="${I0.mailUrl}">${Rm}<span>${I0.email}</span></a>
	</span>`;Om.exports=I0});var ul=Et((yz,Cm)=>{"use strict";Cm.exports=t=>{if(!t)return"";let e=[];return t.medium&&e.push(t.medium),t.size&&t.size.length===2&&e.push(t.size[0]+" \xD7 "+t.size[1]+" cm"),e.join("  \xB7  ")}});var yu=Et((bz,Im)=>{"use strict";var U4=xu(),B4=Kf(),Pm=ul(),j4=Sr(),ja=t=>String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),W4=`
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
`,q0=null;function V4(t){if(q0){q0.hidden=!1,requestAnimationFrame(()=>q0.classList.add("on"));return}let e=document.createElement("style");e.textContent=W4,document.head.appendChild(e);let o=!j4.isPhone;q0=document.createElement("div"),q0.className="plist",q0.setAttribute("role","region"),q0.setAttribute("aria-label","All paintings"),q0.innerHTML=`
		${t?"":'<button type="button" class="plist-close">Back to the gallery</button>'}
		<header class="plist-head">
			<h1>Muzammil</h1>
			<p class="plist-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</p>
			${B4.line("plist-contact")}
		</header>
		${t?'<p class="plist-note">This device could not open the 3D gallery, so here are the paintings on their own.</p>':""}
		<main class="plist-grid">
			${U4.map(r=>`
			<article class="plist-item" id="${ja(r.slug)}">
				<img loading="lazy" decoding="async" alt="${ja(r.title)}, ${ja(Pm(r))}"
					src="images/web/${ja(r.slug)}${o?"":"-1024"}.webp"
					onerror="this.onerror=null;this.src='images/${ja(r.file)}'">
				<p class="plist-meta">${ja(Pm(r))}</p>
				<h2>${ja(r.title)}</h2>
				<details><summary>Read its story</summary>
					${String(r.description).split(/\n\s*\n/).map(a=>`<p>${ja(a.trim())}</p>`).join("")}
				</details>
			</article>`).join("")}
		</main>`,["mousedown","pointerdown","click","wheel","touchstart","touchmove","keydown"].forEach(r=>q0.addEventListener(r,a=>a.stopPropagation(),{passive:!0}));let n=q0.querySelector(".plist-close");n&&n.addEventListener("click",$m),document.body.appendChild(q0),requestAnimationFrame(()=>q0.classList.add("on"))}function $m(){q0&&(q0.classList.remove("on"),setTimeout(()=>{q0.hidden=!0},500),location.hash==="#list"&&history.replaceState(null,"",location.pathname+location.search))}Im.exports={show:V4,hide:$m}});var qm=Et((bu,wu)=>{(function(t,e){typeof bu=="object"&&typeof wu!="undefined"?wu.exports=e():typeof define=="function"&&define.amd?define(e):t.Stats=e()})(bu,function(){var t=function(){function e(d){return r.appendChild(d.dom),d}function o(d){for(var u=0;u<r.children.length;u++)r.children[u].style.display=u===d?"block":"none";n=d}var n=0,r=document.createElement("div");r.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",r.addEventListener("click",function(d){d.preventDefault(),o(++n%r.children.length)},!1);var a=(performance||Date).now(),i=a,s=0,c=e(new t.Panel("FPS","#0ff","#002")),h=e(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var l=e(new t.Panel("MB","#f08","#201"));return o(0),{REVISION:16,dom:r,addPanel:e,showPanel:o,begin:function(){a=(performance||Date).now()},end:function(){s++;var d=(performance||Date).now();if(h.update(d-a,200),d>i+1e3&&(c.update(1e3*s/(d-i),100),i=d,s=0,l)){var u=performance.memory;l.update(u.usedJSHeapSize/1048576,u.jsHeapSizeLimit/1048576)}return d},update:function(){a=this.end()},domElement:r,setMode:o}};return t.Panel=function(e,o,n){var r=1/0,a=0,i=Math.round,s=i(window.devicePixelRatio||1),c=80*s,h=48*s,l=3*s,d=2*s,u=3*s,p=15*s,f=74*s,v=30*s,m=document.createElement("canvas");m.width=c,m.height=h,m.style.cssText="width:80px;height:48px";var g=m.getContext("2d");return g.font="bold "+9*s+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=n,g.fillRect(0,0,c,h),g.fillStyle=o,g.fillText(e,l,d),g.fillRect(u,p,f,v),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(u,p,f,v),{dom:m,update:function(x,y){r=Math.min(r,x),a=Math.max(a,x),g.fillStyle=n,g.globalAlpha=1,g.fillRect(0,0,c,p),g.fillStyle=o,g.fillText(i(x)+" "+e+" ("+i(r)+"-"+i(a)+")",l,d),g.drawImage(m,u+s,p,f-s,v,u,p,f-s,v),g.fillRect(u+f-s,p,s,v),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(u+f-s,p,s,i((1-x/y)*v))}}},t})});var Dm=Et((_u,Mu)=>{(function(t,e){typeof _u=="object"&&typeof Mu!="undefined"?Mu.exports=e():typeof define=="function"&&define.amd?define(e):t.createREGL=e()})(_u,function(){"use strict";var t=function(b){return b instanceof Uint8Array||b instanceof Uint16Array||b instanceof Uint32Array||b instanceof Int8Array||b instanceof Int16Array||b instanceof Int32Array||b instanceof Float32Array||b instanceof Float64Array||b instanceof Uint8ClampedArray},e=function(b,z){for(var C=Object.keys(z),et=0;et<C.length;++et)b[C[et]]=z[C[et]];return b},o=`
`;function n(b){return typeof atob!="undefined"?atob(b):"base64:"+b}function r(b){var z=new Error("(regl) "+b);throw console.error(z),z}function a(b,z){b||r(z)}function i(b){return b?": "+b:""}function s(b,z,C){b in z||r("unknown parameter ("+b+")"+i(C)+". possible values: "+Object.keys(z).join())}function c(b,z){t(b)||r("invalid parameter type"+i(z)+". must be a typed array")}function h(b,z){switch(z){case"number":return typeof b=="number";case"object":return typeof b=="object";case"string":return typeof b=="string";case"boolean":return typeof b=="boolean";case"function":return typeof b=="function";case"undefined":return typeof b=="undefined";case"symbol":return typeof b=="symbol"}}function l(b,z,C){h(b,z)||r("invalid parameter type"+i(C)+". expected "+z+", got "+typeof b)}function d(b,z){b>=0&&(b|0)===b||r("invalid parameter type, ("+b+")"+i(z)+". must be a nonnegative integer")}function u(b,z,C){z.indexOf(b)<0&&r("invalid value"+i(C)+". must be one of: "+z)}var p=["gl","canvas","container","attributes","pixelRatio","extensions","optionalExtensions","profile","onDone"];function f(b){Object.keys(b).forEach(function(z){p.indexOf(z)<0&&r('invalid regl constructor argument "'+z+'". must be one of '+p)})}function v(b,z){for(b=b+"";b.length<z;)b=" "+b;return b}function m(){this.name="unknown",this.lines=[],this.index={},this.hasErrors=!1}function g(b,z){this.number=b,this.line=z,this.errors=[]}function x(b,z,C){this.file=b,this.line=z,this.message=C}function y(){var b=new Error,z=(b.stack||b).toString(),C=/compileProcedure.*\n\s*at.*\((.*)\)/.exec(z);if(C)return C[1];var et=/compileProcedure.*\n\s*at\s+(.*)(\n|$)/.exec(z);return et?et[1]:"unknown"}function w(){var b=new Error,z=(b.stack||b).toString(),C=/at REGLCommand.*\n\s+at.*\((.*)\)/.exec(z);if(C)return C[1];var et=/at REGLCommand.*\n\s+at\s+(.*)\n/.exec(z);return et?et[1]:"unknown"}function M(b,z){var C=b.split(`
`),et=1,mt=0,J={unknown:new m,0:new m};J.unknown.name=J[0].name=z||y(),J.unknown.lines.push(new g(0,""));for(var st=0;st<C.length;++st){var Ot=C[st],qt=/^\s*#\s*(\w+)\s+(.+)\s*$/.exec(Ot);if(qt)switch(qt[1]){case"line":var jt=/(\d+)(\s+\d+)?/.exec(qt[2]);jt&&(et=jt[1]|0,jt[2]&&(mt=jt[2]|0,mt in J||(J[mt]=new m)));break;case"define":var Dt=/SHADER_NAME(_B64)?\s+(.*)$/.exec(qt[2]);Dt&&(J[mt].name=Dt[1]?n(Dt[2]):Dt[2]);break}J[mt].lines.push(new g(et++,Ot))}return Object.keys(J).forEach(function(Xt){var ne=J[Xt];ne.lines.forEach(function(Ct){ne.index[Ct.number]=Ct})}),J}function _(b){var z=[];return b.split(`
`).forEach(function(C){if(!(C.length<5)){var et=/^ERROR:\s+(\d+):(\d+):\s*(.*)$/.exec(C);et?z.push(new x(et[1]|0,et[2]|0,et[3].trim())):C.length>0&&z.push(new x("unknown",0,C))}}),z}function S(b,z){z.forEach(function(C){var et=b[C.file];if(et){var mt=et.index[C.line];if(mt){mt.errors.push(C),et.hasErrors=!0;return}}b.unknown.hasErrors=!0,b.unknown.lines[0].errors.push(C)})}function R(b,z,C,et,mt){if(!b.getShaderParameter(z,b.COMPILE_STATUS)){var J=b.getShaderInfoLog(z),st=et===b.FRAGMENT_SHADER?"fragment":"vertex";dt(C,"string",st+" shader source must be a string",mt);var Ot=M(C,mt),qt=_(J);S(Ot,qt),Object.keys(Ot).forEach(function(jt){var Dt=Ot[jt];if(!Dt.hasErrors)return;var Xt=[""],ne=[""];function Ct(Yt,Y){Xt.push(Yt),ne.push(Y||"")}Ct("file number "+jt+": "+Dt.name+`
`,"color:red;text-decoration:underline;font-weight:bold"),Dt.lines.forEach(function(Yt){if(Yt.errors.length>0){Ct(v(Yt.number,4)+"|  ","background-color:yellow; font-weight:bold"),Ct(Yt.line+o,"color:red; background-color:yellow; font-weight:bold");var Y=0;Yt.errors.forEach(function(it){var Ut=it.message,fe=/^\s*'(.*)'\s*:\s*(.*)$/.exec(Ut);if(fe){var Mt=fe[1];switch(Ut=fe[2],Mt){case"assign":Mt="=";break}Y=Math.max(Yt.line.indexOf(Mt,Y),0)}else Y=0;Ct(v("| ",6)),Ct(v("^^^",Y+3)+o,"font-weight:bold"),Ct(v("| ",6)),Ct(Ut+o,"font-weight:bold")}),Ct(v("| ",6)+o)}else Ct(v(Yt.number,4)+"|  "),Ct(Yt.line+o,"color:red")}),typeof document!="undefined"&&!window.chrome?(ne[0]=Xt.join("%c"),console.log.apply(console,ne)):console.log(Xt.join(""))}),a.raise("Error compiling "+st+" shader, "+Ot[0].name)}}function N(b,z,C,et,mt){if(!b.getProgramParameter(z,b.LINK_STATUS)){var J=b.getProgramInfoLog(z),st=M(C,mt),Ot=M(et,mt),qt='Error linking program with vertex shader, "'+Ot[0].name+'", and fragment shader "'+st[0].name+'"';typeof document!="undefined"?console.log("%c"+qt+o+"%c"+J,"color:red;text-decoration:underline;font-weight:bold","color:red"):console.log(qt+o+J),a.raise(qt)}}function G(b){b._commandRef=y()}function q(b,z,C,et){G(b);function mt(qt){return qt?et.id(qt):0}b._fragId=mt(b.static.frag),b._vertId=mt(b.static.vert);function J(qt,jt){Object.keys(jt).forEach(function(Dt){qt[et.id(Dt)]=!0})}var st=b._uniformSet={};J(st,z.static),J(st,z.dynamic);var Ot=b._attributeSet={};J(Ot,C.static),J(Ot,C.dynamic),b._hasCount="count"in b.static||"count"in b.dynamic||"elements"in b.static||"elements"in b.dynamic}function V(b,z){var C=w();r(b+" in command "+(z||y())+(C==="unknown"?"":" called from "+C))}function D(b,z,C){b||V(z,C||y())}function B(b,z,C,et){b in z||V("unknown parameter ("+b+")"+i(C)+". possible values: "+Object.keys(z).join(),et||y())}function dt(b,z,C,et){h(b,z)||V("invalid parameter type"+i(C)+". expected "+z+", got "+typeof b,et||y())}function Gt(b){b()}function Nt(b,z,C){b.texture?u(b.texture._texture.internalformat,z,"unsupported texture format for attachment"):u(b.renderbuffer._renderbuffer.format,C,"unsupported renderbuffer format for attachment")}var xt=33071,ot=9728,Bt=9984,ze=9985,Se=9986,De=9987,Ee=5120,rt=5121,ht=5122,oe=5123,lt=5124,It=5125,Jt=5126,me=32819,xe=32820,te=33635,se=34042,ut=36193,Vt={};Vt[Ee]=Vt[rt]=1,Vt[ht]=Vt[oe]=Vt[ut]=Vt[te]=Vt[me]=Vt[xe]=2,Vt[lt]=Vt[It]=Vt[Jt]=Vt[se]=4;function he(b,z){return b===xe||b===me||b===te?2:b===se?4:Vt[b]*z}function Ht(b){return!(b&b-1)&&!!b}function Lt(b,z,C){var et,mt=z.width,J=z.height,st=z.channels;a(mt>0&&mt<=C.maxTextureSize&&J>0&&J<=C.maxTextureSize,"invalid texture shape"),(b.wrapS!==xt||b.wrapT!==xt)&&a(Ht(mt)&&Ht(J),"incompatible wrap mode for texture, both width and height must be power of 2"),z.mipmask===1?mt!==1&&J!==1&&a(b.minFilter!==Bt&&b.minFilter!==Se&&b.minFilter!==ze&&b.minFilter!==De,"min filter requires mipmap"):(a(Ht(mt)&&Ht(J),"texture must be a square power of 2 to support mipmapping"),a(z.mipmask===(mt<<1)-1,"missing or incomplete mipmap data")),z.type===Jt&&(C.extensions.indexOf("oes_texture_float_linear")<0&&a(b.minFilter===ot&&b.magFilter===ot,"filter not supported, must enable oes_texture_float_linear"),a(!b.genMipmaps,"mipmap generation not supported with float textures"));var Ot=z.images;for(et=0;et<16;++et)if(Ot[et]){var qt=mt>>et,jt=J>>et;a(z.mipmask&1<<et,"missing mipmap data");var Dt=Ot[et];if(a(Dt.width===qt&&Dt.height===jt,"invalid shape for mip images"),a(Dt.format===z.format&&Dt.internalformat===z.internalformat&&Dt.type===z.type,"incompatible type for mip image"),!Dt.compressed)if(Dt.data){var Xt=Math.ceil(he(Dt.type,st)*qt/Dt.unpackAlignment)*Dt.unpackAlignment;a(Dt.data.byteLength===Xt*jt,"invalid data for image, buffer size is inconsistent with image format")}else Dt.element||Dt.copy}else b.genMipmaps||a((z.mipmask&1<<et)===0,"extra mipmap data");z.compressed&&a(!b.genMipmaps,"mipmap generation for compressed images not supported")}function Je(b,z,C,et){var mt=b.width,J=b.height,st=b.channels;a(mt>0&&mt<=et.maxTextureSize&&J>0&&J<=et.maxTextureSize,"invalid texture shape"),a(mt===J,"cube map must be square"),a(z.wrapS===xt&&z.wrapT===xt,"wrap mode not supported by cube map");for(var Ot=0;Ot<C.length;++Ot){var qt=C[Ot];a(qt.width===mt&&qt.height===J,"inconsistent cube map face shape"),z.genMipmaps&&(a(!qt.compressed,"can not generate mipmap for compressed textures"),a(qt.mipmask===1,"can not specify mipmaps and generate mipmaps"));for(var jt=qt.images,Dt=0;Dt<16;++Dt){var Xt=jt[Dt];if(Xt){var ne=mt>>Dt,Ct=J>>Dt;a(qt.mipmask&1<<Dt,"missing mipmap data"),a(Xt.width===ne&&Xt.height===Ct,"invalid shape for mip images"),a(Xt.format===b.format&&Xt.internalformat===b.internalformat&&Xt.type===b.type,"incompatible type for mip image"),Xt.compressed||(Xt.data?a(Xt.data.byteLength===ne*Ct*Math.max(he(Xt.type,st),Xt.unpackAlignment),"invalid data for image, buffer size is inconsistent with image format"):Xt.element||Xt.copy)}}}}var k=e(a,{optional:Gt,raise:r,commandRaise:V,command:D,parameter:s,commandParameter:B,constructor:f,type:l,commandType:dt,isTypedArray:c,nni:d,oneOf:u,shaderError:R,linkError:N,callSite:w,saveCommandRef:G,saveDrawInfo:q,framebufferFormat:Nt,guessCommand:y,texture2D:Lt,textureCube:Je}),to=0,no=0,pt=5,At=6;function _t(b,z){this.id=to++,this.type=b,this.data=z}function Be(b){return b.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function je(b){if(b.length===0)return[];var z=b.charAt(0),C=b.charAt(b.length-1);if(b.length>1&&z===C&&(z==='"'||z==="'"))return['"'+Be(b.substr(1,b.length-2))+'"'];var et=/\[(false|true|null|\d+|'[^']*'|"[^"]*")\]/.exec(b);if(et)return je(b.substr(0,et.index)).concat(je(et[1])).concat(je(b.substr(et.index+et[0].length)));var mt=b.split(".");if(mt.length===1)return['"'+Be(b)+'"'];for(var J=[],st=0;st<mt.length;++st)J=J.concat(je(mt[st]));return J}function Xe(b){return"["+je(b).join("][")+"]"}function Ve(b,z){return new _t(b,Xe(z+""))}function zo(b){return typeof b=="function"&&!b._reglType||b instanceof _t}function U(b,z){if(typeof b=="function")return new _t(no,b);if(typeof b=="number"||typeof b=="boolean")return new _t(pt,b);if(Array.isArray(b))return new _t(At,b.map((C,et)=>U(C,z+"["+et+"]")));if(b instanceof _t)return b;k(!1,"invalid option type in uniform "+z)}var bt={DynamicVariable:_t,define:Ve,isDynamic:zo,unbox:U,accessor:Xe},Rt={next:typeof requestAnimationFrame=="function"?function(b){return requestAnimationFrame(b)}:function(b){return setTimeout(b,16)},cancel:typeof cancelAnimationFrame=="function"?function(b){return cancelAnimationFrame(b)}:clearTimeout},zt=typeof performance!="undefined"&&performance.now?function(){return performance.now()}:function(){return+new Date};function ce(){var b={"":0},z=[""];return{id:function(C){var et=b[C];return et||(et=b[C]=z.length,z.push(C),et)},str:function(C){return z[C]}}}function Pe(b,z,C){var et=document.createElement("canvas");e(et.style,{border:0,margin:0,padding:0,top:0,left:0}),b.appendChild(et),b===document.body&&(et.style.position="absolute",e(b.style,{margin:0,padding:0}));function mt(){var Ot=window.innerWidth,qt=window.innerHeight;if(b!==document.body){var jt=b.getBoundingClientRect();Ot=jt.right-jt.left,qt=jt.bottom-jt.top}et.width=C*Ot,et.height=C*qt,e(et.style,{width:Ot+"px",height:qt+"px"})}var J;b!==document.body&&typeof ResizeObserver=="function"?(J=new ResizeObserver(function(){setTimeout(mt)}),J.observe(b)):window.addEventListener("resize",mt,!1);function st(){J?J.disconnect():window.removeEventListener("resize",mt),b.removeChild(et)}return mt(),{canvas:et,onDestroy:st}}function _e(b,z){function C(et){try{return b.getContext(et,z)}catch(mt){return null}}return C("webgl")||C("experimental-webgl")||C("webgl-experimental")}function le(b){return typeof b.nodeName=="string"&&typeof b.appendChild=="function"&&typeof b.getBoundingClientRect=="function"}function ye(b){return typeof b.drawArrays=="function"||typeof b.drawElements=="function"}function be(b){return typeof b=="string"?b.split():(k(Array.isArray(b),"invalid extension array"),b)}function Ye(b){return typeof b=="string"?(k(typeof document!="undefined","not supported outside of DOM"),document.querySelector(b)):b}function Me(b){var z=b||{},C,et,mt,J,st={},Ot=[],qt=[],jt=typeof window=="undefined"?1:window.devicePixelRatio,Dt=!1,Xt=function(Yt){Yt&&k.raise(Yt)},ne=function(){};if(typeof z=="string"?(k(typeof document!="undefined","selector queries only supported in DOM enviroments"),C=document.querySelector(z),k(C,"invalid query string for element")):typeof z=="object"?le(z)?C=z:ye(z)?(J=z,mt=J.canvas):(k.constructor(z),"gl"in z?J=z.gl:"canvas"in z?mt=Ye(z.canvas):"container"in z&&(et=Ye(z.container)),"attributes"in z&&(st=z.attributes,k.type(st,"object","invalid context attributes")),"extensions"in z&&(Ot=be(z.extensions)),"optionalExtensions"in z&&(qt=be(z.optionalExtensions)),"onDone"in z&&(k.type(z.onDone,"function","invalid or missing onDone callback"),Xt=z.onDone),"profile"in z&&(Dt=!!z.profile),"pixelRatio"in z&&(jt=+z.pixelRatio,k(jt>0,"invalid pixel ratio"))):k.raise("invalid arguments to regl"),C&&(C.nodeName.toLowerCase()==="canvas"?mt=C:et=C),!J){if(!mt){k(typeof document!="undefined","must manually specify webgl context outside of DOM environments");var Ct=Pe(et||document.body,Xt,jt);if(!Ct)return null;mt=Ct.canvas,ne=Ct.onDestroy}st.premultipliedAlpha===void 0&&(st.premultipliedAlpha=!0),J=_e(mt,st)}return J?{gl:J,canvas:mt,container:et,extensions:Ot,optionalExtensions:qt,pixelRatio:jt,profile:Dt,onDone:Xt,onDestroy:ne}:(ne(),Xt("webgl not supported, try upgrading your browser or graphics drivers http://get.webgl.org"),null)}function ue(b,z){var C={};function et(st){k.type(st,"string","extension name must be string");var Ot=st.toLowerCase(),qt;try{qt=C[Ot]=b.getExtension(Ot)}catch(jt){}return!!qt}for(var mt=0;mt<z.extensions.length;++mt){var J=z.extensions[mt];if(!et(J))return z.onDestroy(),z.onDone('"'+J+'" extension is not supported by the current WebGL context, try upgrading your system or a different browser'),null}return z.optionalExtensions.forEach(et),{extensions:C,restore:function(){Object.keys(C).forEach(function(st){if(C[st]&&!et(st))throw new Error("(regl): error restoring extension "+st)})}}}function Re(b,z){for(var C=Array(b),et=0;et<b;++et)C[et]=z(et);return C}var ee=5120,He=5121,Ao=5122,Ue=5123,Ko=5124,br=5125,ga=5126;function wo(b){for(var z=16;z<=1<<28;z*=16)if(b<=z)return z;return 0}function No(b){var z,C;return z=(b>65535)<<4,b>>>=z,C=(b>255)<<3,b>>>=C,z|=C,C=(b>15)<<2,b>>>=C,z|=C,C=(b>3)<<1,b>>>=C,z|=C,z|b>>1}function jn(){var b=Re(8,function(){return[]});function z(J){var st=wo(J),Ot=b[No(st)>>2];return Ot.length>0?Ot.pop():new ArrayBuffer(st)}function C(J){b[No(J.byteLength)>>2].push(J)}function et(J,st){var Ot=null;switch(J){case ee:Ot=new Int8Array(z(st),0,st);break;case He:Ot=new Uint8Array(z(st),0,st);break;case Ao:Ot=new Int16Array(z(2*st),0,st);break;case Ue:Ot=new Uint16Array(z(2*st),0,st);break;case Ko:Ot=new Int32Array(z(4*st),0,st);break;case br:Ot=new Uint32Array(z(4*st),0,st);break;case ga:Ot=new Float32Array(z(4*st),0,st);break;default:return null}return Ot.length!==st?Ot.subarray(0,st):Ot}function mt(J){C(J.buffer)}return{alloc:z,free:C,allocType:et,freeType:mt}}var X=jn();X.zero=jn();var yt=3408,de=3410,Oe=3411,qe=3412,hn=3413,u0=3414,C0=3415,un=33901,z0=33902,dn=3379,Eo=3386,n0=34921,en=36347,Wn=36348,Y0=35661,K0=35660,Jo=34930,wr=36349,An=34076,Fr=34024,qo=7936,pn=7937,_r=7938,Es=35724,ra=34047,zs=36063,mf=34852,Da=3553,Mi=34067,Hc=34069,w1=33984,xa=6408,Uc=5126,A0=5121,Bc=36160,As=36053,mb=36064,gb=16384,xb=function(b,z){var C=1;z.ext_texture_filter_anisotropic&&(C=b.getParameter(ra));var et=1,mt=1;z.webgl_draw_buffers&&(et=b.getParameter(mf),mt=b.getParameter(zs));var J=!!z.oes_texture_float;if(J){var st=b.createTexture();b.bindTexture(Da,st),b.texImage2D(Da,0,xa,1,1,0,xa,Uc,null);var Ot=b.createFramebuffer();if(b.bindFramebuffer(Bc,Ot),b.framebufferTexture2D(Bc,mb,Da,st,0),b.bindTexture(Da,null),b.checkFramebufferStatus(Bc)!==As)J=!1;else{b.viewport(0,0,1,1),b.clearColor(1,0,0,1),b.clear(gb);var qt=X.allocType(Uc,4);b.readPixels(0,0,1,1,xa,Uc,qt),b.getError()?J=!1:(b.deleteFramebuffer(Ot),b.deleteTexture(st),J=qt[0]===1),X.freeType(qt)}}var jt=typeof navigator!="undefined"&&(/MSIE/.test(navigator.userAgent)||/Trident\//.test(navigator.appVersion)||/Edge/.test(navigator.userAgent)),Dt=!0;if(!jt){var Xt=b.createTexture(),ne=X.allocType(A0,36);b.activeTexture(w1),b.bindTexture(Mi,Xt),b.texImage2D(Hc,0,xa,3,3,0,xa,A0,ne),X.freeType(ne),b.bindTexture(Mi,null),b.deleteTexture(Xt),Dt=!b.getError()}return{colorBits:[b.getParameter(de),b.getParameter(Oe),b.getParameter(qe),b.getParameter(hn)],depthBits:b.getParameter(u0),stencilBits:b.getParameter(C0),subpixelBits:b.getParameter(yt),extensions:Object.keys(z).filter(function(Ct){return!!z[Ct]}),maxAnisotropic:C,maxDrawbuffers:et,maxColorAttachments:mt,pointSizeDims:b.getParameter(un),lineWidthDims:b.getParameter(z0),maxViewportDims:b.getParameter(Eo),maxCombinedTextureUnits:b.getParameter(Y0),maxCubeMapSize:b.getParameter(An),maxRenderbufferSize:b.getParameter(Fr),maxTextureUnits:b.getParameter(Jo),maxTextureSize:b.getParameter(dn),maxAttributes:b.getParameter(n0),maxVertexUniforms:b.getParameter(en),maxVertexTextureUnits:b.getParameter(K0),maxVaryingVectors:b.getParameter(Wn),maxFragmentUniforms:b.getParameter(wr),glsl:b.getParameter(Es),renderer:b.getParameter(pn),vendor:b.getParameter(qo),version:b.getParameter(_r),readFloat:J,npotTextureCube:Dt}};function Gr(b){return!!b&&typeof b=="object"&&Array.isArray(b.shape)&&Array.isArray(b.stride)&&typeof b.offset=="number"&&b.shape.length===b.stride.length&&(Array.isArray(b.data)||t(b.data))}var ir=function(b){return Object.keys(b).map(function(z){return b[z]})},gf={shape:_b,flatten:wb};function yb(b,z,C){for(var et=0;et<z;++et)C[et]=b[et]}function bb(b,z,C,et){for(var mt=0,J=0;J<z;++J)for(var st=b[J],Ot=0;Ot<C;++Ot)et[mt++]=st[Ot]}function Np(b,z,C,et,mt,J){for(var st=J,Ot=0;Ot<z;++Ot)for(var qt=b[Ot],jt=0;jt<C;++jt)for(var Dt=qt[jt],Xt=0;Xt<et;++Xt)mt[st++]=Dt[Xt]}function Rp(b,z,C,et,mt){for(var J=1,st=C+1;st<z.length;++st)J*=z[st];var Ot=z[C];if(z.length-C===4){var qt=z[C+1],jt=z[C+2],Dt=z[C+3];for(st=0;st<Ot;++st)Np(b[st],qt,jt,Dt,et,mt),mt+=J}else for(st=0;st<Ot;++st)Rp(b[st],z,C+1,et,mt),mt+=J}function wb(b,z,C,et){var mt=1;if(z.length)for(var J=0;J<z.length;++J)mt*=z[J];else mt=0;var st=et||X.allocType(C,mt);switch(z.length){case 0:break;case 1:yb(b,z[0],st);break;case 2:bb(b,z[0],z[1],st);break;case 3:Np(b,z[0],z[1],z[2],st,0);break;default:Rp(b,z,0,st,0)}return st}function _b(b){for(var z=[],C=b;C.length;C=C[0])z.push(C.length);return z}var _1={"[object Int8Array]":5120,"[object Int16Array]":5122,"[object Int32Array]":5124,"[object Uint8Array]":5121,"[object Uint8ClampedArray]":5121,"[object Uint16Array]":5123,"[object Uint32Array]":5125,"[object Float32Array]":5126,"[object Float64Array]":5121,"[object ArrayBuffer]":5121},Mb=5120,kb=5122,Sb=5124,Eb=5121,zb=5123,Ab=5125,Tb=5126,Lb=5126,Ts={int8:Mb,int16:kb,int32:Sb,uint8:Eb,uint16:zb,uint32:Ab,float:Tb,float32:Lb},Nb=35048,Rb=35040,xf={dynamic:Nb,stream:Rb,static:35044},M1=gf.flatten,Op=gf.shape,Cp=35044,Ob=35040,k1=5121,S1=5126,Fa=[];Fa[5120]=1,Fa[5122]=2,Fa[5124]=4,Fa[5121]=1,Fa[5123]=2,Fa[5125]=4,Fa[5126]=4;function yf(b){return _1[Object.prototype.toString.call(b)]|0}function Pp(b,z){for(var C=0;C<z.length;++C)b[C]=z[C]}function $p(b,z,C,et,mt,J,st){for(var Ot=0,qt=0;qt<C;++qt)for(var jt=0;jt<et;++jt)b[Ot++]=z[mt*qt+J*jt+st]}function Cb(b,z,C,et){var mt=0,J={};function st(Y){this.id=mt++,this.buffer=b.createBuffer(),this.type=Y,this.usage=Cp,this.byteLength=0,this.dimension=1,this.dtype=k1,this.persistentData=null,C.profile&&(this.stats={size:0})}st.prototype.bind=function(){b.bindBuffer(this.type,this.buffer)},st.prototype.destroy=function(){ne(this)};var Ot=[];function qt(Y,it){var Ut=Ot.pop();return Ut||(Ut=new st(Y)),Ut.bind(),Xt(Ut,it,Ob,0,1,!1),Ut}function jt(Y){Ot.push(Y)}function Dt(Y,it,Ut){Y.byteLength=it.byteLength,b.bufferData(Y.type,it,Ut)}function Xt(Y,it,Ut,fe,Mt,pe){var Tt;if(Y.usage=Ut,Array.isArray(it)){if(Y.dtype=fe||S1,it.length>0){var Kt;if(Array.isArray(it[0])){Tt=Op(it);for(var St=1,Qt=1;Qt<Tt.length;++Qt)St*=Tt[Qt];Y.dimension=St,Kt=M1(it,Tt,Y.dtype),Dt(Y,Kt,Ut),pe?Y.persistentData=Kt:X.freeType(Kt)}else if(typeof it[0]=="number"){Y.dimension=Mt;var We=X.allocType(Y.dtype,it.length);Pp(We,it),Dt(Y,We,Ut),pe?Y.persistentData=We:X.freeType(We)}else t(it[0])?(Y.dimension=it[0].length,Y.dtype=fe||yf(it[0])||S1,Kt=M1(it,[it.length,it[0].length],Y.dtype),Dt(Y,Kt,Ut),pe?Y.persistentData=Kt:X.freeType(Kt)):k.raise("invalid buffer data")}}else if(t(it))Y.dtype=fe||yf(it),Y.dimension=Mt,Dt(Y,it,Ut),pe&&(Y.persistentData=new Uint8Array(new Uint8Array(it.buffer)));else if(Gr(it)){Tt=it.shape;var ro=it.stride,re=it.offset,Wt=0,wt=0,eo=0,fo=0;Tt.length===1?(Wt=Tt[0],wt=1,eo=ro[0],fo=0):Tt.length===2?(Wt=Tt[0],wt=Tt[1],eo=ro[0],fo=ro[1]):k.raise("invalid shape"),Y.dtype=fe||yf(it.data)||S1,Y.dimension=wt;var Ae=X.allocType(Y.dtype,Wt*wt);$p(Ae,it.data,Wt,wt,eo,fo,re),Dt(Y,Ae,Ut),pe?Y.persistentData=Ae:X.freeType(Ae)}else it instanceof ArrayBuffer?(Y.dtype=k1,Y.dimension=Mt,Dt(Y,it,Ut),pe&&(Y.persistentData=new Uint8Array(new Uint8Array(it)))):k.raise("invalid buffer data")}function ne(Y){z.bufferCount--,et(Y);var it=Y.buffer;k(it,"buffer must not be deleted already"),b.deleteBuffer(it),Y.buffer=null,delete J[Y.id]}function Ct(Y,it,Ut,fe){z.bufferCount++;var Mt=new st(it);J[Mt.id]=Mt;function pe(St){var Qt=Cp,We=null,ro=0,re=0,Wt=1;return Array.isArray(St)||t(St)||Gr(St)||St instanceof ArrayBuffer?We=St:typeof St=="number"?ro=St|0:St&&(k.type(St,"object","buffer arguments must be an object, a number or an array"),"data"in St&&(k(We===null||Array.isArray(We)||t(We)||Gr(We),"invalid data for buffer"),We=St.data),"usage"in St&&(k.parameter(St.usage,xf,"invalid buffer usage"),Qt=xf[St.usage]),"type"in St&&(k.parameter(St.type,Ts,"invalid buffer type"),re=Ts[St.type]),"dimension"in St&&(k.type(St.dimension,"number","invalid dimension"),Wt=St.dimension|0),"length"in St&&(k.nni(ro,"buffer length must be a nonnegative integer"),ro=St.length|0)),Mt.bind(),We?Xt(Mt,We,Qt,re,Wt,fe):(ro&&b.bufferData(Mt.type,ro,Qt),Mt.dtype=re||k1,Mt.usage=Qt,Mt.dimension=Wt,Mt.byteLength=ro),C.profile&&(Mt.stats.size=Mt.byteLength*Fa[Mt.dtype]),pe}function Tt(St,Qt){k(Qt+St.byteLength<=Mt.byteLength,"invalid buffer subdata call, buffer is too small.  Can't write data of size "+St.byteLength+" starting from offset "+Qt+" to a buffer of size "+Mt.byteLength),b.bufferSubData(Mt.type,Qt,St)}function Kt(St,Qt){var We=(Qt||0)|0,ro;if(Mt.bind(),t(St)||St instanceof ArrayBuffer)Tt(St,We);else if(Array.isArray(St)){if(St.length>0)if(typeof St[0]=="number"){var re=X.allocType(Mt.dtype,St.length);Pp(re,St),Tt(re,We),X.freeType(re)}else if(Array.isArray(St[0])||t(St[0])){ro=Op(St);var Wt=M1(St,ro,Mt.dtype);Tt(Wt,We),X.freeType(Wt)}else k.raise("invalid buffer data")}else if(Gr(St)){ro=St.shape;var wt=St.stride,eo=0,fo=0,Ae=0,xo=0;ro.length===1?(eo=ro[0],fo=1,Ae=wt[0],xo=0):ro.length===2?(eo=ro[0],fo=ro[1],Ae=wt[0],xo=wt[1]):k.raise("invalid shape");var ao=Array.isArray(St.data)?Mt.dtype:yf(St.data),vo=X.allocType(ao,eo*fo);$p(vo,St.data,eo,fo,Ae,xo,St.offset),Tt(vo,We),X.freeType(vo)}else k.raise("invalid data for buffer subdata");return pe}return Ut||pe(Y),pe._reglType="buffer",pe._buffer=Mt,pe.subdata=Kt,C.profile&&(pe.stats=Mt.stats),pe.destroy=function(){ne(Mt)},pe}function Yt(){ir(J).forEach(function(Y){Y.buffer=b.createBuffer(),b.bindBuffer(Y.type,Y.buffer),b.bufferData(Y.type,Y.persistentData||Y.byteLength,Y.usage)})}return C.profile&&(z.getTotalBufferSize=function(){var Y=0;return Object.keys(J).forEach(function(it){Y+=J[it].stats.size}),Y}),{create:Ct,createStream:qt,destroyStream:jt,clear:function(){ir(J).forEach(ne),Ot.forEach(ne)},getBuffer:function(Y){return Y&&Y._buffer instanceof st?Y._buffer:null},restore:Yt,_initBuffer:Xt}}var Pb=0,$b=0,Ib=1,qb=1,Db=4,Fb=4,ki={points:Pb,point:$b,lines:Ib,line:qb,triangles:Db,triangle:Fb,"line loop":2,"line strip":3,"triangle strip":5,"triangle fan":6},Gb=0,Hb=1,jc=4,Ub=5120,Si=5121,Ip=5122,Ei=5123,qp=5124,Ls=5125,E1=34963,Bb=35040,jb=35044;function Wb(b,z,C,et){var mt={},J=0,st={uint8:Si,uint16:Ei};z.oes_element_index_uint&&(st.uint32=Ls);function Ot(Yt){this.id=J++,mt[this.id]=this,this.buffer=Yt,this.primType=jc,this.vertCount=0,this.type=0}Ot.prototype.bind=function(){this.buffer.bind()};var qt=[];function jt(Yt){var Y=qt.pop();return Y||(Y=new Ot(C.create(null,E1,!0,!1)._buffer)),Xt(Y,Yt,Bb,-1,-1,0,0),Y}function Dt(Yt){qt.push(Yt)}function Xt(Yt,Y,it,Ut,fe,Mt,pe){Yt.buffer.bind();var Tt;if(Y){var Kt=pe;!pe&&(!t(Y)||Gr(Y)&&!t(Y.data))&&(Kt=z.oes_element_index_uint?Ls:Ei),C._initBuffer(Yt.buffer,Y,it,Kt,3)}else b.bufferData(E1,Mt,it),Yt.buffer.dtype=Tt||Si,Yt.buffer.usage=it,Yt.buffer.dimension=3,Yt.buffer.byteLength=Mt;if(Tt=pe,!pe){switch(Yt.buffer.dtype){case Si:case Ub:Tt=Si;break;case Ei:case Ip:Tt=Ei;break;case Ls:case qp:Tt=Ls;break;default:k.raise("unsupported type for element array")}Yt.buffer.dtype=Tt}Yt.type=Tt,k(Tt!==Ls||!!z.oes_element_index_uint,"32 bit element buffers not supported, enable oes_element_index_uint first");var St=fe;St<0&&(St=Yt.buffer.byteLength,Tt===Ei?St>>=1:Tt===Ls&&(St>>=2)),Yt.vertCount=St;var Qt=Ut;if(Ut<0){Qt=jc;var We=Yt.buffer.dimension;We===1&&(Qt=Gb),We===2&&(Qt=Hb),We===3&&(Qt=jc)}Yt.primType=Qt}function ne(Yt){et.elementsCount--,k(Yt.buffer!==null,"must not double destroy elements"),delete mt[Yt.id],Yt.buffer.destroy(),Yt.buffer=null}function Ct(Yt,Y){var it=C.create(null,E1,!0),Ut=new Ot(it._buffer);et.elementsCount++;function fe(Mt){if(!Mt)it(),Ut.primType=jc,Ut.vertCount=0,Ut.type=Si;else if(typeof Mt=="number")it(Mt),Ut.primType=jc,Ut.vertCount=Mt|0,Ut.type=Si;else{var pe=null,Tt=jb,Kt=-1,St=-1,Qt=0,We=0;Array.isArray(Mt)||t(Mt)||Gr(Mt)?pe=Mt:(k.type(Mt,"object","invalid arguments for elements"),"data"in Mt&&(pe=Mt.data,k(Array.isArray(pe)||t(pe)||Gr(pe),"invalid data for element buffer")),"usage"in Mt&&(k.parameter(Mt.usage,xf,"invalid element buffer usage"),Tt=xf[Mt.usage]),"primitive"in Mt&&(k.parameter(Mt.primitive,ki,"invalid element buffer primitive"),Kt=ki[Mt.primitive]),"count"in Mt&&(k(typeof Mt.count=="number"&&Mt.count>=0,"invalid vertex count for elements"),St=Mt.count|0),"type"in Mt&&(k.parameter(Mt.type,st,"invalid buffer type"),We=st[Mt.type]),"length"in Mt?Qt=Mt.length|0:(Qt=St,We===Ei||We===Ip?Qt*=2:(We===Ls||We===qp)&&(Qt*=4))),Xt(Ut,pe,Tt,Kt,St,Qt,We)}return fe}return fe(Yt),fe._reglType="elements",fe._elements=Ut,fe.subdata=function(Mt,pe){return it.subdata(Mt,pe),fe},fe.destroy=function(){ne(Ut)},fe}return{create:Ct,createStream:jt,destroyStream:Dt,getElements:function(Yt){return typeof Yt=="function"&&Yt._elements instanceof Ot?Yt._elements:null},clear:function(){ir(mt).forEach(ne)}}}var Dp=new Float32Array(1),Vb=new Uint32Array(Dp.buffer),Xb=5123;function Fp(b){for(var z=X.allocType(Xb,b.length),C=0;C<b.length;++C)if(isNaN(b[C]))z[C]=65535;else if(b[C]===1/0)z[C]=31744;else if(b[C]===-1/0)z[C]=64512;else{Dp[0]=b[C];var et=Vb[0],mt=et>>>31<<15,J=(et<<1>>>24)-127,st=et>>13&1023;if(J<-24)z[C]=mt;else if(J<-14){var Ot=-14-J;z[C]=mt+(st+1024>>Ot)}else J>15?z[C]=mt+31744:z[C]=mt+(J+15<<10)+st}return z}function Mn(b){return Array.isArray(b)||t(b)}var Gp=function(b){return!(b&b-1)&&!!b},Yb=34467,aa=3553,z1=34067,bf=34069,Ns=6408,A1=6406,wf=6407,Wc=6409,_f=6410,Hp=32854,T1=32855,Up=36194,Kb=32819,Qb=32820,Zb=33635,Jb=34042,L1=6402,Mf=34041,N1=35904,R1=35906,zi=36193,O1=33776,C1=33777,P1=33778,$1=33779,Bp=35986,jp=35987,Wp=34798,Vp=35840,Xp=35841,Yp=35842,Kp=35843,Qp=36196,Ai=5121,I1=5123,q1=5125,Vc=5126,tw=10242,ew=10243,ow=10497,D1=33071,nw=33648,rw=10240,aw=10241,F1=9728,sw=9729,G1=9984,Zp=9985,Jp=9986,H1=9987,iw=33170,kf=4352,cw=4353,lw=4354,fw=34046,hw=3317,uw=37440,dw=37441,pw=37443,tv=37444,Xc=33984,vw=[G1,Jp,Zp,H1],Sf=[0,Wc,_f,wf,Ns],Mr={};Mr[Wc]=Mr[A1]=Mr[L1]=1,Mr[Mf]=Mr[_f]=2,Mr[wf]=Mr[N1]=3,Mr[Ns]=Mr[R1]=4;function Ti(b){return"[object "+b+"]"}var ev=Ti("HTMLCanvasElement"),ov=Ti("OffscreenCanvas"),nv=Ti("CanvasRenderingContext2D"),rv=Ti("ImageBitmap"),av=Ti("HTMLImageElement"),sv=Ti("HTMLVideoElement"),mw=Object.keys(_1).concat([ev,ov,nv,rv,av,sv]),Li=[];Li[Ai]=1,Li[Vc]=4,Li[zi]=2,Li[I1]=2,Li[q1]=4;var d0=[];d0[Hp]=2,d0[T1]=2,d0[Up]=2,d0[Mf]=4,d0[O1]=.5,d0[C1]=.5,d0[P1]=1,d0[$1]=1,d0[Bp]=.5,d0[jp]=1,d0[Wp]=1,d0[Vp]=.5,d0[Xp]=.25,d0[Yp]=.5,d0[Kp]=.25,d0[Qp]=.5;function iv(b){return Array.isArray(b)&&(b.length===0||typeof b[0]=="number")}function cv(b){if(!Array.isArray(b))return!1;var z=b.length;return!(z===0||!Mn(b[0]))}function Rs(b){return Object.prototype.toString.call(b)}function lv(b){return Rs(b)===ev}function fv(b){return Rs(b)===ov}function gw(b){return Rs(b)===nv}function xw(b){return Rs(b)===rv}function yw(b){return Rs(b)===av}function bw(b){return Rs(b)===sv}function U1(b){if(!b)return!1;var z=Rs(b);return mw.indexOf(z)>=0?!0:iv(b)||cv(b)||Gr(b)}function hv(b){return _1[Object.prototype.toString.call(b)]|0}function ww(b,z){var C=z.length;switch(b.type){case Ai:case I1:case q1:case Vc:var et=X.allocType(b.type,C);et.set(z),b.data=et;break;case zi:b.data=Fp(z);break;default:k.raise("unsupported texture type, must specify a typed array")}}function uv(b,z){return X.allocType(b.type===zi?Vc:b.type,z)}function dv(b,z){b.type===zi?(b.data=Fp(z),X.freeType(z)):b.data=z}function _w(b,z,C,et,mt,J){for(var st=b.width,Ot=b.height,qt=b.channels,jt=st*Ot*qt,Dt=uv(b,jt),Xt=0,ne=0;ne<Ot;++ne)for(var Ct=0;Ct<st;++Ct)for(var Yt=0;Yt<qt;++Yt)Dt[Xt++]=z[C*Ct+et*ne+mt*Yt+J];dv(b,Dt)}function Ef(b,z,C,et,mt,J){var st;if(typeof d0[b]!="undefined"?st=d0[b]:st=Mr[b]*Li[z],J&&(st*=6),mt){for(var Ot=0,qt=C;qt>=1;)Ot+=st*qt*qt,qt/=2;return Ot}else return st*C*et}function Mw(b,z,C,et,mt,J,st){var Ot={"don't care":kf,"dont care":kf,nice:lw,fast:cw},qt={repeat:ow,clamp:D1,mirror:nw},jt={nearest:F1,linear:sw},Dt=e({mipmap:H1,"nearest mipmap nearest":G1,"linear mipmap nearest":Zp,"nearest mipmap linear":Jp,"linear mipmap linear":H1},jt),Xt={none:0,browser:tv},ne={uint8:Ai,rgba4:Kb,rgb565:Zb,"rgb5 a1":Qb},Ct={alpha:A1,luminance:Wc,"luminance alpha":_f,rgb:wf,rgba:Ns,rgba4:Hp,"rgb5 a1":T1,rgb565:Up},Yt={};z.ext_srgb&&(Ct.srgb=N1,Ct.srgba=R1),z.oes_texture_float&&(ne.float32=ne.float=Vc),z.oes_texture_half_float&&(ne.float16=ne["half float"]=zi),z.webgl_depth_texture&&(e(Ct,{depth:L1,"depth stencil":Mf}),e(ne,{uint16:I1,uint32:q1,"depth stencil":Jb})),z.webgl_compressed_texture_s3tc&&e(Yt,{"rgb s3tc dxt1":O1,"rgba s3tc dxt1":C1,"rgba s3tc dxt3":P1,"rgba s3tc dxt5":$1}),z.webgl_compressed_texture_atc&&e(Yt,{"rgb atc":Bp,"rgba atc explicit alpha":jp,"rgba atc interpolated alpha":Wp}),z.webgl_compressed_texture_pvrtc&&e(Yt,{"rgb pvrtc 4bppv1":Vp,"rgb pvrtc 2bppv1":Xp,"rgba pvrtc 4bppv1":Yp,"rgba pvrtc 2bppv1":Kp}),z.webgl_compressed_texture_etc1&&(Yt["rgb etc1"]=Qp);var Y=Array.prototype.slice.call(b.getParameter(Yb));Object.keys(Yt).forEach(function(O){var nt=Yt[O];Y.indexOf(nt)>=0&&(Ct[O]=nt)});var it=Object.keys(Ct);C.textureFormats=it;var Ut=[];Object.keys(Ct).forEach(function(O){var nt=Ct[O];Ut[nt]=O});var fe=[];Object.keys(ne).forEach(function(O){var nt=ne[O];fe[nt]=O});var Mt=[];Object.keys(jt).forEach(function(O){var nt=jt[O];Mt[nt]=O});var pe=[];Object.keys(Dt).forEach(function(O){var nt=Dt[O];pe[nt]=O});var Tt=[];Object.keys(qt).forEach(function(O){var nt=qt[O];Tt[nt]=O});var Kt=it.reduce(function(O,nt){var Z=Ct[nt];return Z===Wc||Z===A1||Z===Wc||Z===_f||Z===L1||Z===Mf||z.ext_srgb&&(Z===N1||Z===R1)?O[Z]=Z:Z===T1||nt.indexOf("rgba")>=0?O[Z]=Ns:O[Z]=wf,O},{});function St(){this.internalformat=Ns,this.format=Ns,this.type=Ai,this.compressed=!1,this.premultiplyAlpha=!1,this.flipY=!1,this.unpackAlignment=1,this.colorSpace=tv,this.width=0,this.height=0,this.channels=0}function Qt(O,nt){O.internalformat=nt.internalformat,O.format=nt.format,O.type=nt.type,O.compressed=nt.compressed,O.premultiplyAlpha=nt.premultiplyAlpha,O.flipY=nt.flipY,O.unpackAlignment=nt.unpackAlignment,O.colorSpace=nt.colorSpace,O.width=nt.width,O.height=nt.height,O.channels=nt.channels}function We(O,nt){if(!(typeof nt!="object"||!nt)){if("premultiplyAlpha"in nt&&(k.type(nt.premultiplyAlpha,"boolean","invalid premultiplyAlpha"),O.premultiplyAlpha=nt.premultiplyAlpha),"flipY"in nt&&(k.type(nt.flipY,"boolean","invalid texture flip"),O.flipY=nt.flipY),"alignment"in nt&&(k.oneOf(nt.alignment,[1,2,4,8],"invalid texture unpack alignment"),O.unpackAlignment=nt.alignment),"colorSpace"in nt&&(k.parameter(nt.colorSpace,Xt,"invalid colorSpace"),O.colorSpace=Xt[nt.colorSpace]),"type"in nt){var Z=nt.type;k(z.oes_texture_float||!(Z==="float"||Z==="float32"),"you must enable the OES_texture_float extension in order to use floating point textures."),k(z.oes_texture_half_float||!(Z==="half float"||Z==="float16"),"you must enable the OES_texture_half_float extension in order to use 16-bit floating point textures."),k(z.webgl_depth_texture||!(Z==="uint16"||Z==="uint32"||Z==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),k.parameter(Z,ne,"invalid texture type"),O.type=ne[Z]}var we=O.width,yo=O.height,T=O.channels,E=!1;"shape"in nt?(k(Array.isArray(nt.shape)&&nt.shape.length>=2,"shape must be an array"),we=nt.shape[0],yo=nt.shape[1],nt.shape.length===3&&(T=nt.shape[2],k(T>0&&T<=4,"invalid number of channels"),E=!0),k(we>=0&&we<=C.maxTextureSize,"invalid width"),k(yo>=0&&yo<=C.maxTextureSize,"invalid height")):("radius"in nt&&(we=yo=nt.radius,k(we>=0&&we<=C.maxTextureSize,"invalid radius")),"width"in nt&&(we=nt.width,k(we>=0&&we<=C.maxTextureSize,"invalid width")),"height"in nt&&(yo=nt.height,k(yo>=0&&yo<=C.maxTextureSize,"invalid height")),"channels"in nt&&(T=nt.channels,k(T>0&&T<=4,"invalid number of channels"),E=!0)),O.width=we|0,O.height=yo|0,O.channels=T|0;var $=!1;if("format"in nt){var W=nt.format;k(z.webgl_depth_texture||!(W==="depth"||W==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),k.parameter(W,Ct,"invalid texture format");var K=O.internalformat=Ct[W];O.format=Kt[K],W in ne&&("type"in nt||(O.type=ne[W])),W in Yt&&(O.compressed=!0),$=!0}!E&&$?O.channels=Mr[O.format]:E&&!$?O.channels!==Sf[O.format]&&(O.format=O.internalformat=Sf[O.channels]):$&&E&&k(O.channels===Mr[O.format],"number of channels inconsistent with specified format")}}function ro(O){b.pixelStorei(uw,O.flipY),b.pixelStorei(dw,O.premultiplyAlpha),b.pixelStorei(pw,O.colorSpace),b.pixelStorei(hw,O.unpackAlignment)}function re(){St.call(this),this.xOffset=0,this.yOffset=0,this.data=null,this.needsFree=!1,this.element=null,this.needsCopy=!1}function Wt(O,nt){var Z=null;if(U1(nt)?Z=nt:nt&&(k.type(nt,"object","invalid pixel data type"),We(O,nt),"x"in nt&&(O.xOffset=nt.x|0),"y"in nt&&(O.yOffset=nt.y|0),U1(nt.data)&&(Z=nt.data)),k(!O.compressed||Z instanceof Uint8Array,"compressed texture data must be stored in a uint8array"),nt.copy){k(!Z,"can not specify copy and data field for the same texture");var we=mt.viewportWidth,yo=mt.viewportHeight;O.width=O.width||we-O.xOffset,O.height=O.height||yo-O.yOffset,O.needsCopy=!0,k(O.xOffset>=0&&O.xOffset<we&&O.yOffset>=0&&O.yOffset<yo&&O.width>0&&O.width<=we&&O.height>0&&O.height<=yo,"copy texture read out of bounds")}else if(!Z)O.width=O.width||1,O.height=O.height||1,O.channels=O.channels||4;else if(t(Z))O.channels=O.channels||4,O.data=Z,!("type"in nt)&&O.type===Ai&&(O.type=hv(Z));else if(iv(Z))O.channels=O.channels||4,ww(O,Z),O.alignment=1,O.needsFree=!0;else if(Gr(Z)){var T=Z.data;!Array.isArray(T)&&O.type===Ai&&(O.type=hv(T));var E=Z.shape,$=Z.stride,W,K,F,I,H,L;E.length===3?(F=E[2],L=$[2]):(k(E.length===2,"invalid ndarray pixel data, must be 2 or 3D"),F=1,L=1),W=E[0],K=E[1],I=$[0],H=$[1],O.alignment=1,O.width=W,O.height=K,O.channels=F,O.format=O.internalformat=Sf[F],O.needsFree=!0,_w(O,T,I,H,L,Z.offset)}else if(lv(Z)||fv(Z)||gw(Z))lv(Z)||fv(Z)?O.element=Z:O.element=Z.canvas,O.width=O.element.width,O.height=O.element.height,O.channels=4;else if(xw(Z))O.element=Z,O.width=Z.width,O.height=Z.height,O.channels=4;else if(yw(Z))O.element=Z,O.width=Z.naturalWidth,O.height=Z.naturalHeight,O.channels=4;else if(bw(Z))O.element=Z,O.width=Z.videoWidth,O.height=Z.videoHeight,O.channels=4;else if(cv(Z)){var P=O.width||Z[0].length,A=O.height||Z.length,j=O.channels;Mn(Z[0][0])?j=j||Z[0][0].length:j=j||1;for(var Q=gf.shape(Z),vt=1,gt=0;gt<Q.length;++gt)vt*=Q[gt];var ft=uv(O,vt);gf.flatten(Z,Q,"",ft),dv(O,ft),O.alignment=1,O.width=P,O.height=A,O.channels=j,O.format=O.internalformat=Sf[j],O.needsFree=!0}O.type===Vc?k(C.extensions.indexOf("oes_texture_float")>=0,"oes_texture_float extension not enabled"):O.type===zi&&k(C.extensions.indexOf("oes_texture_half_float")>=0,"oes_texture_half_float extension not enabled")}function wt(O,nt,Z){var we=O.element,yo=O.data,T=O.internalformat,E=O.format,$=O.type,W=O.width,K=O.height;ro(O),we?b.texImage2D(nt,Z,E,E,$,we):O.compressed?b.compressedTexImage2D(nt,Z,T,W,K,0,yo):O.needsCopy?(et(),b.copyTexImage2D(nt,Z,E,O.xOffset,O.yOffset,W,K,0)):b.texImage2D(nt,Z,E,W,K,0,E,$,yo||null)}function eo(O,nt,Z,we,yo){var T=O.element,E=O.data,$=O.internalformat,W=O.format,K=O.type,F=O.width,I=O.height;ro(O),T?b.texSubImage2D(nt,yo,Z,we,W,K,T):O.compressed?b.compressedTexSubImage2D(nt,yo,Z,we,$,F,I,E):O.needsCopy?(et(),b.copyTexSubImage2D(nt,yo,Z,we,O.xOffset,O.yOffset,F,I)):b.texSubImage2D(nt,yo,Z,we,F,I,W,K,E)}var fo=[];function Ae(){return fo.pop()||new re}function xo(O){O.needsFree&&X.freeType(O.data),re.call(O),fo.push(O)}function ao(){St.call(this),this.genMipmaps=!1,this.mipmapHint=kf,this.mipmask=0,this.images=Array(16)}function vo(O,nt,Z){var we=O.images[0]=Ae();O.mipmask=1,we.width=O.width=nt,we.height=O.height=Z,we.channels=O.channels=4}function Co(O,nt){var Z=null;if(U1(nt))Z=O.images[0]=Ae(),Qt(Z,O),Wt(Z,nt),O.mipmask=1;else if(We(O,nt),Array.isArray(nt.mipmap))for(var we=nt.mipmap,yo=0;yo<we.length;++yo)Z=O.images[yo]=Ae(),Qt(Z,O),Z.width>>=yo,Z.height>>=yo,Wt(Z,we[yo]),O.mipmask|=1<<yo;else Z=O.images[0]=Ae(),Qt(Z,O),Wt(Z,nt),O.mipmask=1;Qt(O,O.images[0]),O.compressed&&(O.internalformat===O1||O.internalformat===C1||O.internalformat===P1||O.internalformat===$1)&&k(O.width%4===0&&O.height%4===0,"for compressed texture formats, mipmap level 0 must have width and height that are a multiple of 4")}function Ln(O,nt){for(var Z=O.images,we=0;we<Z.length;++we){if(!Z[we])return;wt(Z[we],nt,we)}}var Vn=[];function Mo(){var O=Vn.pop()||new ao;St.call(O),O.mipmask=0;for(var nt=0;nt<16;++nt)O.images[nt]=null;return O}function In(O){for(var nt=O.images,Z=0;Z<nt.length;++Z)nt[Z]&&xo(nt[Z]),nt[Z]=null;Vn.push(O)}function on(){this.minFilter=F1,this.magFilter=F1,this.wrapS=D1,this.wrapT=D1,this.anisotropic=1,this.genMipmaps=!1,this.mipmapHint=kf}function Nn(O,nt){if("min"in nt){var Z=nt.min;k.parameter(Z,Dt),O.minFilter=Dt[Z],vw.indexOf(O.minFilter)>=0&&!("faces"in nt)&&(O.genMipmaps=!0)}if("mag"in nt){var we=nt.mag;k.parameter(we,jt),O.magFilter=jt[we]}var yo=O.wrapS,T=O.wrapT;if("wrap"in nt){var E=nt.wrap;typeof E=="string"?(k.parameter(E,qt),yo=T=qt[E]):Array.isArray(E)&&(k.parameter(E[0],qt),k.parameter(E[1],qt),yo=qt[E[0]],T=qt[E[1]])}else{if("wrapS"in nt){var $=nt.wrapS;k.parameter($,qt),yo=qt[$]}if("wrapT"in nt){var W=nt.wrapT;k.parameter(W,qt),T=qt[W]}}if(O.wrapS=yo,O.wrapT=T,"anisotropic"in nt){var K=nt.anisotropic;k(typeof K=="number"&&K>=1&&K<=C.maxAnisotropic,"aniso samples must be between 1 and "),O.anisotropic=nt.anisotropic}if("mipmap"in nt){var F=!1;switch(typeof nt.mipmap){case"string":k.parameter(nt.mipmap,Ot,"invalid mipmap hint"),O.mipmapHint=Ot[nt.mipmap],O.genMipmaps=!0,F=!0;break;case"boolean":F=O.genMipmaps=nt.mipmap;break;case"object":k(Array.isArray(nt.mipmap),"invalid mipmap type"),O.genMipmaps=!1,F=!0;break;default:k.raise("invalid mipmap type")}F&&!("min"in nt)&&(O.minFilter=G1)}}function qn(O,nt){b.texParameteri(nt,aw,O.minFilter),b.texParameteri(nt,rw,O.magFilter),b.texParameteri(nt,tw,O.wrapS),b.texParameteri(nt,ew,O.wrapT),z.ext_texture_filter_anisotropic&&b.texParameteri(nt,fw,O.anisotropic),O.genMipmaps&&(b.hint(iw,O.mipmapHint),b.generateMipmap(nt))}var Dn=0,r0={},p0=C.maxTextureUnits,kn=Array(p0).map(function(){return null});function ho(O){St.call(this),this.mipmask=0,this.internalformat=Ns,this.id=Dn++,this.refCount=1,this.target=O,this.texture=b.createTexture(),this.unit=-1,this.bindCount=0,this.texInfo=new on,st.profile&&(this.stats={size:0})}function v0(O){b.activeTexture(Xc),b.bindTexture(O.target,O.texture)}function Do(){var O=kn[0];O?b.bindTexture(O.target,O.texture):b.bindTexture(aa,null)}function Ke(O){var nt=O.texture;k(nt,"must not double destroy texture");var Z=O.unit,we=O.target;Z>=0&&(b.activeTexture(Xc+Z),b.bindTexture(we,null),kn[Z]=null),b.deleteTexture(nt),O.texture=null,O.params=null,O.pixels=null,O.refCount=0,delete r0[O.id],J.textureCount--}e(ho.prototype,{bind:function(){var O=this;O.bindCount+=1;var nt=O.unit;if(nt<0){for(var Z=0;Z<p0;++Z){var we=kn[Z];if(we){if(we.bindCount>0)continue;we.unit=-1}kn[Z]=O,nt=Z;break}nt>=p0&&k.raise("insufficient number of texture units"),st.profile&&J.maxTextureUnits<nt+1&&(J.maxTextureUnits=nt+1),O.unit=nt,b.activeTexture(Xc+nt),b.bindTexture(O.target,O.texture)}return nt},unbind:function(){this.bindCount-=1},decRef:function(){--this.refCount<=0&&Ke(this)}});function _o(O,nt){var Z=new ho(aa);r0[Z.id]=Z,J.textureCount++;function we(E,$){var W=Z.texInfo;on.call(W);var K=Mo();return typeof E=="number"?typeof $=="number"?vo(K,E|0,$|0):vo(K,E|0,E|0):E?(k.type(E,"object","invalid arguments to regl.texture"),Nn(W,E),Co(K,E)):vo(K,1,1),W.genMipmaps&&(K.mipmask=(K.width<<1)-1),Z.mipmask=K.mipmask,Qt(Z,K),k.texture2D(W,K,C),Z.internalformat=K.internalformat,we.width=K.width,we.height=K.height,v0(Z),Ln(K,aa),qn(W,aa),Do(),In(K),st.profile&&(Z.stats.size=Ef(Z.internalformat,Z.type,K.width,K.height,W.genMipmaps,!1)),we.format=Ut[Z.internalformat],we.type=fe[Z.type],we.mag=Mt[W.magFilter],we.min=pe[W.minFilter],we.wrapS=Tt[W.wrapS],we.wrapT=Tt[W.wrapT],we}function yo(E,$,W,K){k(!!E,"must specify image data");var F=$|0,I=W|0,H=K|0,L=Ae();return Qt(L,Z),L.width=0,L.height=0,Wt(L,E),L.width=L.width||(Z.width>>H)-F,L.height=L.height||(Z.height>>H)-I,k(Z.type===L.type&&Z.format===L.format&&Z.internalformat===L.internalformat,"incompatible format for texture.subimage"),k(F>=0&&I>=0&&F+L.width<=Z.width&&I+L.height<=Z.height,"texture.subimage write out of bounds"),k(Z.mipmask&1<<H,"missing mipmap data"),k(L.data||L.element||L.needsCopy,"missing image data"),v0(Z),eo(L,aa,F,I,H),Do(),xo(L),we}function T(E,$){var W=E|0,K=$|0||W;if(W===Z.width&&K===Z.height)return we;we.width=Z.width=W,we.height=Z.height=K,v0(Z);for(var F=0;Z.mipmask>>F;++F){var I=W>>F,H=K>>F;if(!I||!H)break;b.texImage2D(aa,F,Z.format,I,H,0,Z.format,Z.type,null)}return Do(),st.profile&&(Z.stats.size=Ef(Z.internalformat,Z.type,W,K,!1,!1)),we}return we(O,nt),we.subimage=yo,we.resize=T,we._reglType="texture2d",we._texture=Z,st.profile&&(we.stats=Z.stats),we.destroy=function(){Z.decRef()},we}function To(O,nt,Z,we,yo,T){var E=new ho(z1);r0[E.id]=E,J.cubeCount++;var $=new Array(6);function W(I,H,L,P,A,j){var Q,vt=E.texInfo;for(on.call(vt),Q=0;Q<6;++Q)$[Q]=Mo();if(typeof I=="number"||!I){var gt=I|0||1;for(Q=0;Q<6;++Q)vo($[Q],gt,gt)}else if(typeof I=="object")if(H)Co($[0],I),Co($[1],H),Co($[2],L),Co($[3],P),Co($[4],A),Co($[5],j);else if(Nn(vt,I),We(E,I),"faces"in I){var ft=I.faces;for(k(Array.isArray(ft)&&ft.length===6,"cube faces must be a length 6 array"),Q=0;Q<6;++Q)k(typeof ft[Q]=="object"&&!!ft[Q],"invalid input for cube map face"),Qt($[Q],E),Co($[Q],ft[Q])}else for(Q=0;Q<6;++Q)Co($[Q],I);else k.raise("invalid arguments to cube map");for(Qt(E,$[0]),C.npotTextureCube||k(Gp(E.width)&&Gp(E.height),"your browser does not support non power or two texture dimensions"),vt.genMipmaps?E.mipmask=($[0].width<<1)-1:E.mipmask=$[0].mipmask,k.textureCube(E,vt,$,C),E.internalformat=$[0].internalformat,W.width=$[0].width,W.height=$[0].height,v0(E),Q=0;Q<6;++Q)Ln($[Q],bf+Q);for(qn(vt,z1),Do(),st.profile&&(E.stats.size=Ef(E.internalformat,E.type,W.width,W.height,vt.genMipmaps,!0)),W.format=Ut[E.internalformat],W.type=fe[E.type],W.mag=Mt[vt.magFilter],W.min=pe[vt.minFilter],W.wrapS=Tt[vt.wrapS],W.wrapT=Tt[vt.wrapT],Q=0;Q<6;++Q)In($[Q]);return W}function K(I,H,L,P,A){k(!!H,"must specify image data"),k(typeof I=="number"&&I===(I|0)&&I>=0&&I<6,"invalid face");var j=L|0,Q=P|0,vt=A|0,gt=Ae();return Qt(gt,E),gt.width=0,gt.height=0,Wt(gt,H),gt.width=gt.width||(E.width>>vt)-j,gt.height=gt.height||(E.height>>vt)-Q,k(E.type===gt.type&&E.format===gt.format&&E.internalformat===gt.internalformat,"incompatible format for texture.subimage"),k(j>=0&&Q>=0&&j+gt.width<=E.width&&Q+gt.height<=E.height,"texture.subimage write out of bounds"),k(E.mipmask&1<<vt,"missing mipmap data"),k(gt.data||gt.element||gt.needsCopy,"missing image data"),v0(E),eo(gt,bf+I,j,Q,vt),Do(),xo(gt),W}function F(I){var H=I|0;if(H!==E.width){W.width=E.width=H,W.height=E.height=H,v0(E);for(var L=0;L<6;++L)for(var P=0;E.mipmask>>P;++P)b.texImage2D(bf+L,P,E.format,H>>P,H>>P,0,E.format,E.type,null);return Do(),st.profile&&(E.stats.size=Ef(E.internalformat,E.type,W.width,W.height,!1,!0)),W}}return W(O,nt,Z,we,yo,T),W.subimage=K,W.resize=F,W._reglType="textureCube",W._texture=E,st.profile&&(W.stats=E.stats),W.destroy=function(){E.decRef()},W}function Sn(){for(var O=0;O<p0;++O)b.activeTexture(Xc+O),b.bindTexture(aa,null),kn[O]=null;ir(r0).forEach(Ke),J.cubeCount=0,J.textureCount=0}st.profile&&(J.getTotalTextureSize=function(){var O=0;return Object.keys(r0).forEach(function(nt){O+=r0[nt].stats.size}),O});function ia(){for(var O=0;O<p0;++O){var nt=kn[O];nt&&(nt.bindCount=0,nt.unit=-1,kn[O]=null)}ir(r0).forEach(function(Z){Z.texture=b.createTexture(),b.bindTexture(Z.target,Z.texture);for(var we=0;we<32;++we)if(Z.mipmask&1<<we)if(Z.target===aa)b.texImage2D(aa,we,Z.internalformat,Z.width>>we,Z.height>>we,0,Z.internalformat,Z.type,null);else for(var yo=0;yo<6;++yo)b.texImage2D(bf+yo,we,Z.internalformat,Z.width>>we,Z.height>>we,0,Z.internalformat,Z.type,null);qn(Z.texInfo,Z.target)})}function Ds(){for(var O=0;O<p0;++O){var nt=kn[O];nt&&(nt.bindCount=0,nt.unit=-1,kn[O]=null),b.activeTexture(Xc+O),b.bindTexture(aa,null),b.bindTexture(z1,null)}}return{create2D:_o,createCube:To,clear:Sn,getTexture:function(O){return null},restore:ia,refresh:Ds}}var Ga=36161,zf=32854,pv=32855,vv=36194,mv=33189,gv=36168,xv=34041,yv=35907,bv=34836,wv=34842,_v=34843,Hr=[];Hr[zf]=2,Hr[pv]=2,Hr[vv]=2,Hr[mv]=2,Hr[gv]=1,Hr[xv]=4,Hr[yv]=4,Hr[bv]=16,Hr[wv]=8,Hr[_v]=6;function Mv(b,z,C){return Hr[b]*z*C}var kw=function(b,z,C,et,mt){var J={rgba4:zf,rgb565:vv,"rgb5 a1":pv,depth:mv,stencil:gv,"depth stencil":xv};z.ext_srgb&&(J.srgba=yv),z.ext_color_buffer_half_float&&(J.rgba16f=wv,J.rgb16f=_v),z.webgl_color_buffer_float&&(J.rgba32f=bv);var st=[];Object.keys(J).forEach(function(Ct){var Yt=J[Ct];st[Yt]=Ct});var Ot=0,qt={};function jt(Ct){this.id=Ot++,this.refCount=1,this.renderbuffer=Ct,this.format=zf,this.width=0,this.height=0,mt.profile&&(this.stats={size:0})}jt.prototype.decRef=function(){--this.refCount<=0&&Dt(this)};function Dt(Ct){var Yt=Ct.renderbuffer;k(Yt,"must not double destroy renderbuffer"),b.bindRenderbuffer(Ga,null),b.deleteRenderbuffer(Yt),Ct.renderbuffer=null,Ct.refCount=0,delete qt[Ct.id],et.renderbufferCount--}function Xt(Ct,Yt){var Y=new jt(b.createRenderbuffer());qt[Y.id]=Y,et.renderbufferCount++;function it(fe,Mt){var pe=0,Tt=0,Kt=zf;if(typeof fe=="object"&&fe){var St=fe;if("shape"in St){var Qt=St.shape;k(Array.isArray(Qt)&&Qt.length>=2,"invalid renderbuffer shape"),pe=Qt[0]|0,Tt=Qt[1]|0}else"radius"in St&&(pe=Tt=St.radius|0),"width"in St&&(pe=St.width|0),"height"in St&&(Tt=St.height|0);"format"in St&&(k.parameter(St.format,J,"invalid renderbuffer format"),Kt=J[St.format])}else typeof fe=="number"?(pe=fe|0,typeof Mt=="number"?Tt=Mt|0:Tt=pe):fe?k.raise("invalid arguments to renderbuffer constructor"):pe=Tt=1;if(k(pe>0&&Tt>0&&pe<=C.maxRenderbufferSize&&Tt<=C.maxRenderbufferSize,"invalid renderbuffer size"),!(pe===Y.width&&Tt===Y.height&&Kt===Y.format))return it.width=Y.width=pe,it.height=Y.height=Tt,Y.format=Kt,b.bindRenderbuffer(Ga,Y.renderbuffer),b.renderbufferStorage(Ga,Kt,pe,Tt),k(b.getError()===0,"invalid render buffer format"),mt.profile&&(Y.stats.size=Mv(Y.format,Y.width,Y.height)),it.format=st[Y.format],it}function Ut(fe,Mt){var pe=fe|0,Tt=Mt|0||pe;return pe===Y.width&&Tt===Y.height||(k(pe>0&&Tt>0&&pe<=C.maxRenderbufferSize&&Tt<=C.maxRenderbufferSize,"invalid renderbuffer size"),it.width=Y.width=pe,it.height=Y.height=Tt,b.bindRenderbuffer(Ga,Y.renderbuffer),b.renderbufferStorage(Ga,Y.format,pe,Tt),k(b.getError()===0,"invalid render buffer format"),mt.profile&&(Y.stats.size=Mv(Y.format,Y.width,Y.height))),it}return it(Ct,Yt),it.resize=Ut,it._reglType="renderbuffer",it._renderbuffer=Y,mt.profile&&(it.stats=Y.stats),it.destroy=function(){Y.decRef()},it}mt.profile&&(et.getTotalRenderbufferSize=function(){var Ct=0;return Object.keys(qt).forEach(function(Yt){Ct+=qt[Yt].stats.size}),Ct});function ne(){ir(qt).forEach(function(Ct){Ct.renderbuffer=b.createRenderbuffer(),b.bindRenderbuffer(Ga,Ct.renderbuffer),b.renderbufferStorage(Ga,Ct.format,Ct.width,Ct.height)}),b.bindRenderbuffer(Ga,null)}return{create:Xt,clear:function(){ir(qt).forEach(Dt)},restore:ne}},ya=36160,B1=36161,Os=3553,Af=34069,kv=36064,Sv=36096,Ev=36128,zv=33306,Av=36053,Sw=36054,Ew=36055,zw=36057,Aw=36061,Tw=36193,Lw=5121,Nw=5126,Tv=6407,Lv=6408,Rw=6402,Ow=[Tv,Lv],j1=[];j1[Lv]=4,j1[Tv]=3;var Tf=[];Tf[Lw]=1,Tf[Nw]=4,Tf[Tw]=2;var Cw=32854,Pw=32855,$w=36194,Iw=33189,qw=36168,Nv=34041,Dw=35907,Fw=34836,Gw=34842,Hw=34843,Uw=[Cw,Pw,$w,Dw,Gw,Hw,Fw],Ni={};Ni[Av]="complete",Ni[Sw]="incomplete attachment",Ni[zw]="incomplete dimensions",Ni[Ew]="incomplete, missing attachment",Ni[Aw]="unsupported";function Bw(b,z,C,et,mt,J){var st={cur:null,next:null,dirty:!1,setFBO:null},Ot=["rgba"],qt=["rgba4","rgb565","rgb5 a1"];z.ext_srgb&&qt.push("srgba"),z.ext_color_buffer_half_float&&qt.push("rgba16f","rgb16f"),z.webgl_color_buffer_float&&qt.push("rgba32f");var jt=["uint8"];z.oes_texture_half_float&&jt.push("half float","float16"),z.oes_texture_float&&jt.push("float","float32");function Dt(re,Wt,wt){this.target=re,this.texture=Wt,this.renderbuffer=wt;var eo=0,fo=0;Wt?(eo=Wt.width,fo=Wt.height):wt&&(eo=wt.width,fo=wt.height),this.width=eo,this.height=fo}function Xt(re){re&&(re.texture&&re.texture._texture.decRef(),re.renderbuffer&&re.renderbuffer._renderbuffer.decRef())}function ne(re,Wt,wt){if(re)if(re.texture){var eo=re.texture._texture,fo=Math.max(1,eo.width),Ae=Math.max(1,eo.height);k(fo===Wt&&Ae===wt,"inconsistent width/height for supplied texture"),eo.refCount+=1}else{var xo=re.renderbuffer._renderbuffer;k(xo.width===Wt&&xo.height===wt,"inconsistent width/height for renderbuffer"),xo.refCount+=1}}function Ct(re,Wt){Wt&&(Wt.texture?b.framebufferTexture2D(ya,re,Wt.target,Wt.texture._texture.texture,0):b.framebufferRenderbuffer(ya,re,B1,Wt.renderbuffer._renderbuffer.renderbuffer))}function Yt(re){var Wt=Os,wt=null,eo=null,fo=re;typeof re=="object"&&(fo=re.data,"target"in re&&(Wt=re.target|0)),k.type(fo,"function","invalid attachment data");var Ae=fo._reglType;return Ae==="texture2d"?(wt=fo,k(Wt===Os)):Ae==="textureCube"?(wt=fo,k(Wt>=Af&&Wt<Af+6,"invalid cube map target")):Ae==="renderbuffer"?(eo=fo,Wt=B1):k.raise("invalid regl object for attachment"),new Dt(Wt,wt,eo)}function Y(re,Wt,wt,eo,fo){if(wt){var Ae=et.create2D({width:re,height:Wt,format:eo,type:fo});return Ae._texture.refCount=0,new Dt(Os,Ae,null)}else{var xo=mt.create({width:re,height:Wt,format:eo});return xo._renderbuffer.refCount=0,new Dt(B1,null,xo)}}function it(re){return re&&(re.texture||re.renderbuffer)}function Ut(re,Wt,wt){re&&(re.texture?re.texture.resize(Wt,wt):re.renderbuffer&&re.renderbuffer.resize(Wt,wt),re.width=Wt,re.height=wt)}var fe=0,Mt={};function pe(){this.id=fe++,Mt[this.id]=this,this.framebuffer=b.createFramebuffer(),this.width=0,this.height=0,this.colorAttachments=[],this.depthAttachment=null,this.stencilAttachment=null,this.depthStencilAttachment=null}function Tt(re){re.colorAttachments.forEach(Xt),Xt(re.depthAttachment),Xt(re.stencilAttachment),Xt(re.depthStencilAttachment)}function Kt(re){var Wt=re.framebuffer;k(Wt,"must not double destroy framebuffer"),b.deleteFramebuffer(Wt),re.framebuffer=null,J.framebufferCount--,delete Mt[re.id]}function St(re){var Wt;b.bindFramebuffer(ya,re.framebuffer);var wt=re.colorAttachments;for(Wt=0;Wt<wt.length;++Wt)Ct(kv+Wt,wt[Wt]);for(Wt=wt.length;Wt<C.maxColorAttachments;++Wt)b.framebufferTexture2D(ya,kv+Wt,Os,null,0);b.framebufferTexture2D(ya,zv,Os,null,0),b.framebufferTexture2D(ya,Sv,Os,null,0),b.framebufferTexture2D(ya,Ev,Os,null,0),Ct(Sv,re.depthAttachment),Ct(Ev,re.stencilAttachment),Ct(zv,re.depthStencilAttachment);var eo=b.checkFramebufferStatus(ya);!b.isContextLost()&&eo!==Av&&k.raise("framebuffer configuration not supported, status = "+Ni[eo]),b.bindFramebuffer(ya,st.next?st.next.framebuffer:null),st.cur=st.next,b.getError()}function Qt(re,Wt){var wt=new pe;J.framebufferCount++;function eo(Ae,xo){var ao;k(st.next!==wt,"can not update framebuffer which is currently in use");var vo=0,Co=0,Ln=!0,Vn=!0,Mo=null,In=!0,on="rgba",Nn="uint8",qn=1,Dn=null,r0=null,p0=null,kn=!1;if(typeof Ae=="number")vo=Ae|0,Co=xo|0||vo;else if(!Ae)vo=Co=1;else{k.type(Ae,"object","invalid arguments for framebuffer");var ho=Ae;if("shape"in ho){var v0=ho.shape;k(Array.isArray(v0)&&v0.length>=2,"invalid shape for framebuffer"),vo=v0[0],Co=v0[1]}else"radius"in ho&&(vo=Co=ho.radius),"width"in ho&&(vo=ho.width),"height"in ho&&(Co=ho.height);("color"in ho||"colors"in ho)&&(Mo=ho.color||ho.colors,Array.isArray(Mo)&&k(Mo.length===1||z.webgl_draw_buffers,"multiple render targets not supported")),Mo||("colorCount"in ho&&(qn=ho.colorCount|0,k(qn>0,"invalid color buffer count")),"colorTexture"in ho&&(In=!!ho.colorTexture,on="rgba4"),"colorType"in ho&&(Nn=ho.colorType,In?(k(z.oes_texture_float||!(Nn==="float"||Nn==="float32"),"you must enable OES_texture_float in order to use floating point framebuffer objects"),k(z.oes_texture_half_float||!(Nn==="half float"||Nn==="float16"),"you must enable OES_texture_half_float in order to use 16-bit floating point framebuffer objects")):Nn==="half float"||Nn==="float16"?(k(z.ext_color_buffer_half_float,"you must enable EXT_color_buffer_half_float to use 16-bit render buffers"),on="rgba16f"):(Nn==="float"||Nn==="float32")&&(k(z.webgl_color_buffer_float,"you must enable WEBGL_color_buffer_float in order to use 32-bit floating point renderbuffers"),on="rgba32f"),k.oneOf(Nn,jt,"invalid color type")),"colorFormat"in ho&&(on=ho.colorFormat,Ot.indexOf(on)>=0?In=!0:qt.indexOf(on)>=0?In=!1:In?k.oneOf(ho.colorFormat,Ot,"invalid color format for texture"):k.oneOf(ho.colorFormat,qt,"invalid color format for renderbuffer"))),("depthTexture"in ho||"depthStencilTexture"in ho)&&(kn=!!(ho.depthTexture||ho.depthStencilTexture),k(!kn||z.webgl_depth_texture,"webgl_depth_texture extension not supported")),"depth"in ho&&(typeof ho.depth=="boolean"?Ln=ho.depth:(Dn=ho.depth,Vn=!1)),"stencil"in ho&&(typeof ho.stencil=="boolean"?Vn=ho.stencil:(r0=ho.stencil,Ln=!1)),"depthStencil"in ho&&(typeof ho.depthStencil=="boolean"?Ln=Vn=ho.depthStencil:(p0=ho.depthStencil,Ln=!1,Vn=!1))}var Do=null,Ke=null,_o=null,To=null;if(Array.isArray(Mo))Do=Mo.map(Yt);else if(Mo)Do=[Yt(Mo)];else for(Do=new Array(qn),ao=0;ao<qn;++ao)Do[ao]=Y(vo,Co,In,on,Nn);k(z.webgl_draw_buffers||Do.length<=1,"you must enable the WEBGL_draw_buffers extension in order to use multiple color buffers."),k(Do.length<=C.maxColorAttachments,"too many color attachments, not supported"),vo=vo||Do[0].width,Co=Co||Do[0].height,Dn?Ke=Yt(Dn):Ln&&!Vn&&(Ke=Y(vo,Co,kn,"depth","uint32")),r0?_o=Yt(r0):Vn&&!Ln&&(_o=Y(vo,Co,!1,"stencil","uint8")),p0?To=Yt(p0):!Dn&&!r0&&Vn&&Ln&&(To=Y(vo,Co,kn,"depth stencil","depth stencil")),k(!!Dn+!!r0+!!p0<=1,"invalid framebuffer configuration, can specify exactly one depth/stencil attachment");var Sn=null;for(ao=0;ao<Do.length;++ao)if(ne(Do[ao],vo,Co),k(!Do[ao]||Do[ao].texture&&Ow.indexOf(Do[ao].texture._texture.format)>=0||Do[ao].renderbuffer&&Uw.indexOf(Do[ao].renderbuffer._renderbuffer.format)>=0,"framebuffer color attachment "+ao+" is invalid"),Do[ao]&&Do[ao].texture){var ia=j1[Do[ao].texture._texture.format]*Tf[Do[ao].texture._texture.type];Sn===null?Sn=ia:k(Sn===ia,"all color attachments much have the same number of bits per pixel.")}return ne(Ke,vo,Co),k(!Ke||Ke.texture&&Ke.texture._texture.format===Rw||Ke.renderbuffer&&Ke.renderbuffer._renderbuffer.format===Iw,"invalid depth attachment for framebuffer object"),ne(_o,vo,Co),k(!_o||_o.renderbuffer&&_o.renderbuffer._renderbuffer.format===qw,"invalid stencil attachment for framebuffer object"),ne(To,vo,Co),k(!To||To.texture&&To.texture._texture.format===Nv||To.renderbuffer&&To.renderbuffer._renderbuffer.format===Nv,"invalid depth-stencil attachment for framebuffer object"),Tt(wt),wt.width=vo,wt.height=Co,wt.colorAttachments=Do,wt.depthAttachment=Ke,wt.stencilAttachment=_o,wt.depthStencilAttachment=To,eo.color=Do.map(it),eo.depth=it(Ke),eo.stencil=it(_o),eo.depthStencil=it(To),eo.width=wt.width,eo.height=wt.height,St(wt),eo}function fo(Ae,xo){k(st.next!==wt,"can not resize a framebuffer which is currently in use");var ao=Math.max(Ae|0,1),vo=Math.max(xo|0||ao,1);if(ao===wt.width&&vo===wt.height)return eo;for(var Co=wt.colorAttachments,Ln=0;Ln<Co.length;++Ln)Ut(Co[Ln],ao,vo);return Ut(wt.depthAttachment,ao,vo),Ut(wt.stencilAttachment,ao,vo),Ut(wt.depthStencilAttachment,ao,vo),wt.width=eo.width=ao,wt.height=eo.height=vo,St(wt),eo}return eo(re,Wt),e(eo,{resize:fo,_reglType:"framebuffer",_framebuffer:wt,destroy:function(){Kt(wt),Tt(wt)},use:function(Ae){st.setFBO({framebuffer:eo},Ae)}})}function We(re){var Wt=Array(6);function wt(fo){var Ae;k(Wt.indexOf(st.next)<0,"can not update framebuffer which is currently in use");var xo={color:null},ao=0,vo=null,Co="rgba",Ln="uint8",Vn=1;if(typeof fo=="number")ao=fo|0;else if(!fo)ao=1;else{k.type(fo,"object","invalid arguments for framebuffer");var Mo=fo;if("shape"in Mo){var In=Mo.shape;k(Array.isArray(In)&&In.length>=2,"invalid shape for framebuffer"),k(In[0]===In[1],"cube framebuffer must be square"),ao=In[0]}else"radius"in Mo&&(ao=Mo.radius|0),"width"in Mo?(ao=Mo.width|0,"height"in Mo&&k(Mo.height===ao,"must be square")):"height"in Mo&&(ao=Mo.height|0);("color"in Mo||"colors"in Mo)&&(vo=Mo.color||Mo.colors,Array.isArray(vo)&&k(vo.length===1||z.webgl_draw_buffers,"multiple render targets not supported")),vo||("colorCount"in Mo&&(Vn=Mo.colorCount|0,k(Vn>0,"invalid color buffer count")),"colorType"in Mo&&(k.oneOf(Mo.colorType,jt,"invalid color type"),Ln=Mo.colorType),"colorFormat"in Mo&&(Co=Mo.colorFormat,k.oneOf(Mo.colorFormat,Ot,"invalid color format for texture"))),"depth"in Mo&&(xo.depth=Mo.depth),"stencil"in Mo&&(xo.stencil=Mo.stencil),"depthStencil"in Mo&&(xo.depthStencil=Mo.depthStencil)}var on;if(vo)if(Array.isArray(vo))for(on=[],Ae=0;Ae<vo.length;++Ae)on[Ae]=vo[Ae];else on=[vo];else{on=Array(Vn);var Nn={radius:ao,format:Co,type:Ln};for(Ae=0;Ae<Vn;++Ae)on[Ae]=et.createCube(Nn)}for(xo.color=Array(on.length),Ae=0;Ae<on.length;++Ae){var qn=on[Ae];k(typeof qn=="function"&&qn._reglType==="textureCube","invalid cube map"),ao=ao||qn.width,k(qn.width===ao&&qn.height===ao,"invalid cube map shape"),xo.color[Ae]={target:Af,data:on[Ae]}}for(Ae=0;Ae<6;++Ae){for(var Dn=0;Dn<on.length;++Dn)xo.color[Dn].target=Af+Ae;Ae>0&&(xo.depth=Wt[0].depth,xo.stencil=Wt[0].stencil,xo.depthStencil=Wt[0].depthStencil),Wt[Ae]?Wt[Ae](xo):Wt[Ae]=Qt(xo)}return e(wt,{width:ao,height:ao,color:on})}function eo(fo){var Ae,xo=fo|0;if(k(xo>0&&xo<=C.maxCubeMapSize,"invalid radius for cube fbo"),xo===wt.width)return wt;var ao=wt.color;for(Ae=0;Ae<ao.length;++Ae)ao[Ae].resize(xo);for(Ae=0;Ae<6;++Ae)Wt[Ae].resize(xo);return wt.width=wt.height=xo,wt}return wt(re),e(wt,{faces:Wt,resize:eo,_reglType:"framebufferCube",destroy:function(){Wt.forEach(function(fo){fo.destroy()})}})}function ro(){st.cur=null,st.next=null,st.dirty=!0,ir(Mt).forEach(function(re){re.framebuffer=b.createFramebuffer(),St(re)})}return e(st,{getFramebuffer:function(re){if(typeof re=="function"&&re._reglType==="framebuffer"){var Wt=re._framebuffer;if(Wt instanceof pe)return Wt}return null},create:Qt,createCube:We,clear:function(){ir(Mt).forEach(Kt)},restore:ro})}var jw=5126,Rv=34962;function W1(){this.state=0,this.x=0,this.y=0,this.z=0,this.w=0,this.buffer=null,this.size=0,this.normalized=!1,this.type=jw,this.offset=0,this.stride=0,this.divisor=0}function Ww(b,z,C,et,mt){for(var J=C.maxAttributes,st=new Array(J),Ot=0;Ot<J;++Ot)st[Ot]=new W1;var qt=0,jt={},Dt={Record:W1,scope:{},state:st,currentVAO:null,targetVAO:null,restore:ne()?Mt:function(){},createVAO:pe,getVAO:Yt,destroyBuffer:Xt,setVAO:ne()?Y:it,clear:ne()?Ut:function(){}};function Xt(Tt){for(var Kt=0;Kt<st.length;++Kt){var St=st[Kt];St.buffer===Tt&&(b.disableVertexAttribArray(Kt),St.buffer=null)}}function ne(){return z.oes_vertex_array_object}function Ct(){return z.angle_instanced_arrays}function Yt(Tt){return typeof Tt=="function"&&Tt._vao?Tt._vao:null}function Y(Tt){if(Tt!==Dt.currentVAO){var Kt=ne();Tt?Kt.bindVertexArrayOES(Tt.vao):Kt.bindVertexArrayOES(null),Dt.currentVAO=Tt}}function it(Tt){if(Tt!==Dt.currentVAO){if(Tt)Tt.bindAttrs();else for(var Kt=Ct(),St=0;St<st.length;++St){var Qt=st[St];Qt.buffer?(b.enableVertexAttribArray(St),b.vertexAttribPointer(St,Qt.size,Qt.type,Qt.normalized,Qt.stride,Qt.offfset),Kt&&Qt.divisor&&Kt.vertexAttribDivisorANGLE(St,Qt.divisor)):(b.disableVertexAttribArray(St),b.vertexAttrib4f(St,Qt.x,Qt.y,Qt.z,Qt.w))}Dt.currentVAO=Tt}}function Ut(){ir(jt).forEach(function(Tt){Tt.destroy()})}function fe(){this.id=++qt,this.attributes=[];var Tt=ne();Tt?this.vao=Tt.createVertexArrayOES():this.vao=null,jt[this.id]=this,this.buffers=[]}fe.prototype.bindAttrs=function(){for(var Tt=Ct(),Kt=this.attributes,St=0;St<Kt.length;++St){var Qt=Kt[St];Qt.buffer?(b.enableVertexAttribArray(St),b.bindBuffer(Rv,Qt.buffer.buffer),b.vertexAttribPointer(St,Qt.size,Qt.type,Qt.normalized,Qt.stride,Qt.offset),Tt&&Qt.divisor&&Tt.vertexAttribDivisorANGLE(St,Qt.divisor)):(b.disableVertexAttribArray(St),b.vertexAttrib4f(St,Qt.x,Qt.y,Qt.z,Qt.w))}for(var We=Kt.length;We<J;++We)b.disableVertexAttribArray(We)},fe.prototype.refresh=function(){var Tt=ne();Tt&&(Tt.bindVertexArrayOES(this.vao),this.bindAttrs(),Dt.currentVAO=this)},fe.prototype.destroy=function(){if(this.vao){var Tt=ne();this===Dt.currentVAO&&(Dt.currentVAO=null,Tt.bindVertexArrayOES(null)),Tt.deleteVertexArrayOES(this.vao),this.vao=null}jt[this.id]&&(delete jt[this.id],et.vaoCount-=1)};function Mt(){var Tt=ne();Tt&&ir(jt).forEach(function(Kt){Kt.refresh()})}function pe(Tt){var Kt=new fe;et.vaoCount+=1;function St(Qt){k(Array.isArray(Qt),"arguments to vertex array constructor must be an array"),k(Qt.length<J,"too many attributes"),k(Qt.length>0,"must specify at least one attribute");var We={},ro=Kt.attributes;ro.length=Qt.length;for(var re=0;re<Qt.length;++re){var Wt=Qt[re],wt=ro[re]=new W1,eo=Wt.data||Wt;if(Array.isArray(eo)||t(eo)||Gr(eo)){var fo;Kt.buffers[re]&&(fo=Kt.buffers[re],t(eo)&&fo._buffer.byteLength>=eo.byteLength?fo.subdata(eo):(fo.destroy(),Kt.buffers[re]=null)),Kt.buffers[re]||(fo=Kt.buffers[re]=mt.create(Wt,Rv,!1,!0)),wt.buffer=mt.getBuffer(fo),wt.size=wt.buffer.dimension|0,wt.normalized=!1,wt.type=wt.buffer.dtype,wt.offset=0,wt.stride=0,wt.divisor=0,wt.state=1,We[re]=1}else mt.getBuffer(Wt)?(wt.buffer=mt.getBuffer(Wt),wt.size=wt.buffer.dimension|0,wt.normalized=!1,wt.type=wt.buffer.dtype,wt.offset=0,wt.stride=0,wt.divisor=0,wt.state=1):mt.getBuffer(Wt.buffer)?(wt.buffer=mt.getBuffer(Wt.buffer),wt.size=(+Wt.size||wt.buffer.dimension)|0,wt.normalized=!!Wt.normalized||!1,"type"in Wt?(k.parameter(Wt.type,Ts,"invalid buffer type"),wt.type=Ts[Wt.type]):wt.type=wt.buffer.dtype,wt.offset=(Wt.offset||0)|0,wt.stride=(Wt.stride||0)|0,wt.divisor=(Wt.divisor||0)|0,wt.state=1,k(wt.size>=1&&wt.size<=4,"size must be between 1 and 4"),k(wt.offset>=0,"invalid offset"),k(wt.stride>=0&&wt.stride<=255,"stride must be between 0 and 255"),k(wt.divisor>=0,"divisor must be positive"),k(!wt.divisor||!!z.angle_instanced_arrays,"ANGLE_instanced_arrays must be enabled to use divisor")):"x"in Wt?(k(re>0,"first attribute must not be a constant"),wt.x=+Wt.x||0,wt.y=+Wt.y||0,wt.z=+Wt.z||0,wt.w=+Wt.w||0,wt.state=2):k(!1,"invalid attribute spec for location "+re)}for(var Ae=0;Ae<Kt.buffers.length;++Ae)!We[Ae]&&Kt.buffers[Ae]&&(Kt.buffers[Ae].destroy(),Kt.buffers[Ae]=null);return Kt.refresh(),St}return St.destroy=function(){for(var Qt=0;Qt<Kt.buffers.length;++Qt)Kt.buffers[Qt]&&Kt.buffers[Qt].destroy();Kt.buffers.length=0,Kt.destroy()},St._vao=Kt,St._reglType="vao",St(Tt)}return Dt}var Ov=35632,Vw=35633,Xw=35718,Yw=35721;function Kw(b,z,C,et){var mt={},J={};function st(Y,it,Ut,fe){this.name=Y,this.id=it,this.location=Ut,this.info=fe}function Ot(Y,it){for(var Ut=0;Ut<Y.length;++Ut)if(Y[Ut].id===it.id){Y[Ut].location=it.location;return}Y.push(it)}function qt(Y,it,Ut){var fe=Y===Ov?mt:J,Mt=fe[it];if(!Mt){var pe=z.str(it);Mt=b.createShader(Y),b.shaderSource(Mt,pe),b.compileShader(Mt),k.shaderError(b,Mt,pe,Y,Ut),fe[it]=Mt}return Mt}var jt={},Dt=[],Xt=0;function ne(Y,it){this.id=Xt++,this.fragId=Y,this.vertId=it,this.program=null,this.uniforms=[],this.attributes=[],this.refCount=1,et.profile&&(this.stats={uniformsCount:0,attributesCount:0})}function Ct(Y,it,Ut){var fe,Mt,pe=qt(Ov,Y.fragId),Tt=qt(Vw,Y.vertId),Kt=Y.program=b.createProgram();if(b.attachShader(Kt,pe),b.attachShader(Kt,Tt),Ut)for(fe=0;fe<Ut.length;++fe){var St=Ut[fe];b.bindAttribLocation(Kt,St[0],St[1])}b.linkProgram(Kt),k.linkError(b,Kt,z.str(Y.fragId),z.str(Y.vertId),it);var Qt=b.getProgramParameter(Kt,Xw);et.profile&&(Y.stats.uniformsCount=Qt);var We=Y.uniforms;for(fe=0;fe<Qt;++fe)if(Mt=b.getActiveUniform(Kt,fe),Mt)if(Mt.size>1)for(var ro=0;ro<Mt.size;++ro){var re=Mt.name.replace("[0]","["+ro+"]");Ot(We,new st(re,z.id(re),b.getUniformLocation(Kt,re),Mt))}else Ot(We,new st(Mt.name,z.id(Mt.name),b.getUniformLocation(Kt,Mt.name),Mt));var Wt=b.getProgramParameter(Kt,Yw);et.profile&&(Y.stats.attributesCount=Wt);var wt=Y.attributes;for(fe=0;fe<Wt;++fe)Mt=b.getActiveAttrib(Kt,fe),Mt&&Ot(wt,new st(Mt.name,z.id(Mt.name),b.getAttribLocation(Kt,Mt.name),Mt))}et.profile&&(C.getMaxUniformsCount=function(){var Y=0;return Dt.forEach(function(it){it.stats.uniformsCount>Y&&(Y=it.stats.uniformsCount)}),Y},C.getMaxAttributesCount=function(){var Y=0;return Dt.forEach(function(it){it.stats.attributesCount>Y&&(Y=it.stats.attributesCount)}),Y});function Yt(){mt={},J={};for(var Y=0;Y<Dt.length;++Y)Ct(Dt[Y],null,Dt[Y].attributes.map(function(it){return[it.location,it.name]}))}return{clear:function(){var Y=b.deleteShader.bind(b);ir(mt).forEach(Y),mt={},ir(J).forEach(Y),J={},Dt.forEach(function(it){b.deleteProgram(it.program)}),Dt.length=0,jt={},C.shaderCount=0},program:function(Y,it,Ut,fe){k.command(Y>=0,"missing vertex shader",Ut),k.command(it>=0,"missing fragment shader",Ut);var Mt=jt[it];Mt||(Mt=jt[it]={});var pe=Mt[Y];if(pe&&(pe.refCount++,!fe))return pe;var Tt=new ne(it,Y);return C.shaderCount++,Ct(Tt,Ut,fe),pe||(Mt[Y]=Tt),Dt.push(Tt),e(Tt,{destroy:function(){if(Tt.refCount--,Tt.refCount<=0){b.deleteProgram(Tt.program);var Kt=Dt.indexOf(Tt);Dt.splice(Kt,1),C.shaderCount--}Mt[Tt.vertId].refCount<=0&&(b.deleteShader(J[Tt.vertId]),delete J[Tt.vertId],delete jt[Tt.fragId][Tt.vertId]),Object.keys(jt[Tt.fragId]).length||(b.deleteShader(mt[Tt.fragId]),delete mt[Tt.fragId],delete jt[Tt.fragId])}})},restore:Yt,shader:qt,frag:-1,vert:-1}}var Qw=6408,Yc=5121,Zw=3333,Lf=5126;function Jw(b,z,C,et,mt,J,st){function Ot(Dt){var Xt;z.next===null?(k(mt.preserveDrawingBuffer,'you must create a webgl context with "preserveDrawingBuffer":true in order to read pixels from the drawing buffer'),Xt=Yc):(k(z.next.colorAttachments[0].texture!==null,"You cannot read from a renderbuffer"),Xt=z.next.colorAttachments[0].texture._texture.type,J.oes_texture_float?(k(Xt===Yc||Xt===Lf,"Reading from a framebuffer is only allowed for the types 'uint8' and 'float'"),Xt===Lf&&k(st.readFloat,"Reading 'float' values is not permitted in your browser. For a fallback, please see: https://www.npmjs.com/package/glsl-read-float")):k(Xt===Yc,"Reading from a framebuffer is only allowed for the type 'uint8'"));var ne=0,Ct=0,Yt=et.framebufferWidth,Y=et.framebufferHeight,it=null;t(Dt)?it=Dt:Dt&&(k.type(Dt,"object","invalid arguments to regl.read()"),ne=Dt.x|0,Ct=Dt.y|0,k(ne>=0&&ne<et.framebufferWidth,"invalid x offset for regl.read"),k(Ct>=0&&Ct<et.framebufferHeight,"invalid y offset for regl.read"),Yt=(Dt.width||et.framebufferWidth-ne)|0,Y=(Dt.height||et.framebufferHeight-Ct)|0,it=Dt.data||null),it&&(Xt===Yc?k(it instanceof Uint8Array,"buffer must be 'Uint8Array' when reading from a framebuffer of type 'uint8'"):Xt===Lf&&k(it instanceof Float32Array,"buffer must be 'Float32Array' when reading from a framebuffer of type 'float'")),k(Yt>0&&Yt+ne<=et.framebufferWidth,"invalid width for read pixels"),k(Y>0&&Y+Ct<=et.framebufferHeight,"invalid height for read pixels"),C();var Ut=Yt*Y*4;return it||(Xt===Yc?it=new Uint8Array(Ut):Xt===Lf&&(it=it||new Float32Array(Ut))),k.isTypedArray(it,"data buffer for regl.read() must be a typedarray"),k(it.byteLength>=Ut,"data buffer for regl.read() too small"),b.pixelStorei(Zw,4),b.readPixels(ne,Ct,Yt,Y,Qw,Xt,it),it}function qt(Dt){var Xt;return z.setFBO({framebuffer:Dt.framebuffer},function(){Xt=Ot(Dt)}),Xt}function jt(Dt){return!Dt||!("framebuffer"in Dt)?Ot(Dt):qt(Dt)}return jt}function Ri(b){return Array.prototype.slice.call(b)}function Oi(b){return Ri(b).join("")}function t4(){var b=0,z=[],C=[];function et(Xt){for(var ne=0;ne<C.length;++ne)if(C[ne]===Xt)return z[ne];var Ct="g"+b++;return z.push(Ct),C.push(Xt),Ct}function mt(){var Xt=[];function ne(){Xt.push.apply(Xt,Ri(arguments))}var Ct=[];function Yt(){var Y="v"+b++;return Ct.push(Y),arguments.length>0&&(Xt.push(Y,"="),Xt.push.apply(Xt,Ri(arguments)),Xt.push(";")),Y}return e(ne,{def:Yt,toString:function(){return Oi([Ct.length>0?"var "+Ct.join(",")+";":"",Oi(Xt)])}})}function J(){var Xt=mt(),ne=mt(),Ct=Xt.toString,Yt=ne.toString;function Y(it,Ut){ne(it,Ut,"=",Xt.def(it,Ut),";")}return e(function(){Xt.apply(Xt,Ri(arguments))},{def:Xt.def,entry:Xt,exit:ne,save:Y,set:function(it,Ut,fe){Y(it,Ut),Xt(it,Ut,"=",fe,";")},toString:function(){return Ct()+Yt()}})}function st(){var Xt=Oi(arguments),ne=J(),Ct=J(),Yt=ne.toString,Y=Ct.toString;return e(ne,{then:function(){return ne.apply(ne,Ri(arguments)),this},else:function(){return Ct.apply(Ct,Ri(arguments)),this},toString:function(){var it=Y();return it&&(it="else{"+it+"}"),Oi(["if(",Xt,"){",Yt(),"}",it])}})}var Ot=mt(),qt={};function jt(Xt,ne){var Ct=[];function Yt(){var Mt="a"+Ct.length;return Ct.push(Mt),Mt}ne=ne||0;for(var Y=0;Y<ne;++Y)Yt();var it=J(),Ut=it.toString,fe=qt[Xt]=e(it,{arg:Yt,toString:function(){return Oi(["function(",Ct.join(),"){",Ut(),"}"])}});return fe}function Dt(){var Xt=['"use strict";',Ot,"return {"];Object.keys(qt).forEach(function(Yt){Xt.push('"',Yt,'":',qt[Yt].toString(),",")}),Xt.push("}");var ne=Oi(Xt).replace(/;/g,`;
`).replace(/}/g,`}
`).replace(/{/g,`{
`),Ct=Function.apply(null,z.concat(ne));return Ct.apply(null,C)}return{global:Ot,link:et,block:mt,proc:jt,scope:J,cond:st,compile:Dt}}var Ci="xyzw".split(""),Cv=5121,Pi=1,V1=2,X1=0,Y1=1,K1=2,Q1=3,Nf=4,Pv=5,$v=6,Iv="dither",qv="blend.enable",Dv="blend.color",Z1="blend.equation",J1="blend.func",Fv="depth.enable",Gv="depth.func",Hv="depth.range",Uv="depth.mask",tu="colorMask",Bv="cull.enable",jv="cull.face",eu="frontFace",ou="lineWidth",Wv="polygonOffset.enable",nu="polygonOffset.offset",Vv="sample.alpha",Xv="sample.enable",ru="sample.coverage",Yv="stencil.enable",Kv="stencil.mask",au="stencil.func",su="stencil.opFront",Kc="stencil.opBack",Qv="scissor.enable",Rf="scissor.box",ba="viewport",Qc="profile",Cs="framebuffer",Zc="vert",Jc="frag",Ps="elements",$s="primitive",Is="count",Of="offset",Cf="instances",tl="vao",iu="Width",cu="Height",$i=Cs+iu,Ii=Cs+cu,e4=ba+iu,o4=ba+cu,Zv="drawingBuffer",Jv=Zv+iu,tm=Zv+cu,n4=[J1,Z1,au,su,Kc,ru,ba,Rf,nu],qi=34962,r4=34963,a4=35632,s4=35633,em=3553,i4=34067,c4=2884,l4=3042,f4=3024,h4=2960,u4=2929,d4=3089,p4=32823,v4=32926,m4=32928,lu=5126,Pf=35664,$f=35665,If=35666,fu=5124,qf=35667,Df=35668,Ff=35669,hu=35670,Gf=35671,Hf=35672,Uf=35673,el=35674,ol=35675,nl=35676,rl=35678,al=35680,om=4,sl=1028,qs=1029,nm=2304,uu=2305,g4=32775,x4=32776,y4=519,Ha=7680,rm=0,am=1,sm=32774,b4=513,im=36160,w4=36064,sa={0:0,1:1,zero:0,one:1,"src color":768,"one minus src color":769,"src alpha":770,"one minus src alpha":771,"dst color":774,"one minus dst color":775,"dst alpha":772,"one minus dst alpha":773,"constant color":32769,"one minus constant color":32770,"constant alpha":32771,"one minus constant alpha":32772,"src alpha saturate":776},cm=["constant color, constant alpha","one minus constant color, constant alpha","constant color, one minus constant alpha","one minus constant color, one minus constant alpha","constant alpha, constant color","constant alpha, one minus constant color","one minus constant alpha, constant color","one minus constant alpha, one minus constant color"],Di={never:512,less:513,"<":513,equal:514,"=":514,"==":514,"===":514,lequal:515,"<=":515,greater:516,">":516,notequal:517,"!=":517,"!==":517,gequal:518,">=":518,always:519},Ua={0:0,zero:0,keep:7680,replace:7681,increment:7682,decrement:7683,"increment wrap":34055,"decrement wrap":34056,invert:5386},lm={frag:a4,vert:s4},du={cw:nm,ccw:uu};function Bf(b){return Array.isArray(b)||t(b)||Gr(b)}function fm(b){return b.sort(function(z,C){return z===ba?-1:C===ba?1:z<C?-1:1})}function P0(b,z,C,et){this.thisDep=b,this.contextDep=z,this.propDep=C,this.append=et}function Ba(b){return b&&!(b.thisDep||b.contextDep||b.propDep)}function Tn(b){return new P0(!1,!1,!1,b)}function Q0(b,z){var C=b.type;if(C===X1){var et=b.data.length;return new P0(!0,et>=1,et>=2,z)}else if(C===Nf){var mt=b.data;return new P0(mt.thisDep,mt.contextDep,mt.propDep,z)}else{if(C===Pv)return new P0(!1,!1,!1,z);if(C===$v){for(var J=!1,st=!1,Ot=!1,qt=0;qt<b.data.length;++qt){var jt=b.data[qt];if(jt.type===Y1)Ot=!0;else if(jt.type===K1)st=!0;else if(jt.type===Q1)J=!0;else if(jt.type===X1){J=!0;var Dt=jt.data;Dt>=1&&(st=!0),Dt>=2&&(Ot=!0)}else jt.type===Nf&&(J=J||jt.data.thisDep,st=st||jt.data.contextDep,Ot=Ot||jt.data.propDep)}return new P0(J,st,Ot,z)}else return new P0(C===Q1,C===K1,C===Y1,z)}}var hm=new P0(!1,!1,!1,function(){});function _4(b,z,C,et,mt,J,st,Ot,qt,jt,Dt,Xt,ne,Ct,Yt){var Y=jt.Record,it={add:32774,subtract:32778,"reverse subtract":32779};C.ext_blend_minmax&&(it.min=g4,it.max=x4);var Ut=C.angle_instanced_arrays,fe=C.webgl_draw_buffers,Mt={dirty:!0,profile:Yt.profile},pe={},Tt=[],Kt={},St={};function Qt(T){return T.replace(".","_")}function We(T,E,$){var W=Qt(T);Tt.push(T),pe[W]=Mt[W]=!!$,Kt[W]=E}function ro(T,E,$){var W=Qt(T);Tt.push(T),Array.isArray($)?(Mt[W]=$.slice(),pe[W]=$.slice()):Mt[W]=pe[W]=$,St[W]=E}We(Iv,f4),We(qv,l4),ro(Dv,"blendColor",[0,0,0,0]),ro(Z1,"blendEquationSeparate",[sm,sm]),ro(J1,"blendFuncSeparate",[am,rm,am,rm]),We(Fv,u4,!0),ro(Gv,"depthFunc",b4),ro(Hv,"depthRange",[0,1]),ro(Uv,"depthMask",!0),ro(tu,tu,[!0,!0,!0,!0]),We(Bv,c4),ro(jv,"cullFace",qs),ro(eu,eu,uu),ro(ou,ou,1),We(Wv,p4),ro(nu,"polygonOffset",[0,0]),We(Vv,v4),We(Xv,m4),ro(ru,"sampleCoverage",[1,!1]),We(Yv,h4),ro(Kv,"stencilMask",-1),ro(au,"stencilFunc",[y4,0,-1]),ro(su,"stencilOpSeparate",[sl,Ha,Ha,Ha]),ro(Kc,"stencilOpSeparate",[qs,Ha,Ha,Ha]),We(Qv,d4),ro(Rf,"scissor",[0,0,b.drawingBufferWidth,b.drawingBufferHeight]),ro(ba,ba,[0,0,b.drawingBufferWidth,b.drawingBufferHeight]);var re={gl:b,context:ne,strings:z,next:pe,current:Mt,draw:Xt,elements:J,buffer:mt,shader:Dt,attributes:jt.state,vao:jt,uniforms:qt,framebuffer:Ot,extensions:C,timer:Ct,isBufferArgs:Bf},Wt={primTypes:ki,compareFuncs:Di,blendFuncs:sa,blendEquations:it,stencilOps:Ua,glTypes:Ts,orientationType:du};k.optional(function(){re.isArrayLike=Mn}),fe&&(Wt.backBuffer=[qs],Wt.drawBuffer=Re(et.maxDrawbuffers,function(T){return T===0?[0]:Re(T,function(E){return w4+E})}));var wt=0;function eo(){var T=t4(),E=T.link,$=T.global;T.id=wt++,T.batchId="0";var W=E(re),K=T.shared={props:"a0"};Object.keys(re).forEach(function(P){K[P]=$.def(W,".",P)}),k.optional(function(){T.CHECK=E(k),T.commandStr=k.guessCommand(),T.command=E(T.commandStr),T.assert=function(P,A,j){P("if(!(",A,"))",this.CHECK,".commandRaise(",E(j),",",this.command,");")},Wt.invalidBlendCombinations=cm});var F=T.next={},I=T.current={};Object.keys(St).forEach(function(P){Array.isArray(Mt[P])&&(F[P]=$.def(K.next,".",P),I[P]=$.def(K.current,".",P))});var H=T.constants={};Object.keys(Wt).forEach(function(P){H[P]=$.def(JSON.stringify(Wt[P]))}),T.invoke=function(P,A){switch(A.type){case X1:var j=["this",K.context,K.props,T.batchId];return P.def(E(A.data),".call(",j.slice(0,Math.max(A.data.length+1,4)),")");case Y1:return P.def(K.props,A.data);case K1:return P.def(K.context,A.data);case Q1:return P.def("this",A.data);case Nf:return A.data.append(T,P),A.data.ref;case Pv:return A.data.toString();case $v:return A.data.map(function(Q){return T.invoke(P,Q)})}},T.attribCache={};var L={};return T.scopeAttrib=function(P){var A=z.id(P);if(A in L)return L[A];var j=jt.scope[A];j||(j=jt.scope[A]=new Y);var Q=L[A]=E(j);return Q},T}function fo(T){var E=T.static,$=T.dynamic,W;if(Qc in E){var K=!!E[Qc];W=Tn(function(I,H){return K}),W.enable=K}else if(Qc in $){var F=$[Qc];W=Q0(F,function(I,H){return I.invoke(H,F)})}return W}function Ae(T,E){var $=T.static,W=T.dynamic;if(Cs in $){var K=$[Cs];return K?(K=Ot.getFramebuffer(K),k.command(K,"invalid framebuffer object"),Tn(function(I,H){var L=I.link(K),P=I.shared;H.set(P.framebuffer,".next",L);var A=P.context;return H.set(A,"."+$i,L+".width"),H.set(A,"."+Ii,L+".height"),L})):Tn(function(I,H){var L=I.shared;H.set(L.framebuffer,".next","null");var P=L.context;return H.set(P,"."+$i,P+"."+Jv),H.set(P,"."+Ii,P+"."+tm),"null"})}else if(Cs in W){var F=W[Cs];return Q0(F,function(I,H){var L=I.invoke(H,F),P=I.shared,A=P.framebuffer,j=H.def(A,".getFramebuffer(",L,")");k.optional(function(){I.assert(H,"!"+L+"||"+j,"invalid framebuffer object")}),H.set(A,".next",j);var Q=P.context;return H.set(Q,"."+$i,j+"?"+j+".width:"+Q+"."+Jv),H.set(Q,"."+Ii,j+"?"+j+".height:"+Q+"."+tm),j})}else return null}function xo(T,E,$){var W=T.static,K=T.dynamic;function F(L){if(L in W){var P=W[L];k.commandType(P,"object","invalid "+L,$.commandStr);var A=!0,j=P.x|0,Q=P.y|0,vt,gt;return"width"in P?(vt=P.width|0,k.command(vt>=0,"invalid "+L,$.commandStr)):A=!1,"height"in P?(gt=P.height|0,k.command(gt>=0,"invalid "+L,$.commandStr)):A=!1,new P0(!A&&E&&E.thisDep,!A&&E&&E.contextDep,!A&&E&&E.propDep,function(Fe,uo){var Te=Fe.shared.context,Qe=vt;"width"in P||(Qe=uo.def(Te,".",$i,"-",j));var so=gt;return"height"in P||(so=uo.def(Te,".",Ii,"-",Q)),[j,Q,Qe,so]})}else if(L in K){var ft=K[L],Ft=Q0(ft,function(Fe,uo){var Te=Fe.invoke(uo,ft);k.optional(function(){Fe.assert(uo,Te+"&&typeof "+Te+'==="object"',"invalid "+L)});var Qe=Fe.shared.context,so=uo.def(Te,".x|0"),Po=uo.def(Te,".y|0"),gn=uo.def('"width" in ',Te,"?",Te,".width|0:","(",Qe,".",$i,"-",so,")"),$0=uo.def('"height" in ',Te,"?",Te,".height|0:","(",Qe,".",Ii,"-",Po,")");return k.optional(function(){Fe.assert(uo,gn+">=0&&"+$0+">=0","invalid "+L)}),[so,Po,gn,$0]});return E&&(Ft.thisDep=Ft.thisDep||E.thisDep,Ft.contextDep=Ft.contextDep||E.contextDep,Ft.propDep=Ft.propDep||E.propDep),Ft}else return E?new P0(E.thisDep,E.contextDep,E.propDep,function(Fe,uo){var Te=Fe.shared.context;return[0,0,uo.def(Te,".",$i),uo.def(Te,".",Ii)]}):null}var I=F(ba);if(I){var H=I;I=new P0(I.thisDep,I.contextDep,I.propDep,function(L,P){var A=H.append(L,P),j=L.shared.context;return P.set(j,"."+e4,A[2]),P.set(j,"."+o4,A[3]),A})}return{viewport:I,scissor_box:F(Rf)}}function ao(T,E){var $=T.static,W=typeof $[Jc]=="string"&&typeof $[Zc]=="string";if(W){if(Object.keys(E.dynamic).length>0)return null;var K=E.static,F=Object.keys(K);if(F.length>0&&typeof K[F[0]]=="number"){for(var I=[],H=0;H<F.length;++H)k(typeof K[F[H]]=="number","must specify all vertex attribute locations when using vaos"),I.push([K[F[H]]|0,F[H]]);return I}}return null}function vo(T,E,$){var W=T.static,K=T.dynamic;function F(A){if(A in W){var j=z.id(W[A]);k.optional(function(){Dt.shader(lm[A],j,k.guessCommand())});var Q=Tn(function(){return j});return Q.id=j,Q}else if(A in K){var vt=K[A];return Q0(vt,function(gt,ft){var Ft=gt.invoke(ft,vt),Fe=ft.def(gt.shared.strings,".id(",Ft,")");return k.optional(function(){ft(gt.shared.shader,".shader(",lm[A],",",Fe,",",gt.command,");")}),Fe})}return null}var I=F(Jc),H=F(Zc),L=null,P;return Ba(I)&&Ba(H)?(L=Dt.program(H.id,I.id,null,$),P=Tn(function(A,j){return A.link(L)})):P=new P0(I&&I.thisDep||H&&H.thisDep,I&&I.contextDep||H&&H.contextDep,I&&I.propDep||H&&H.propDep,function(A,j){var Q=A.shared.shader,vt;I?vt=I.append(A,j):vt=j.def(Q,".",Jc);var gt;H?gt=H.append(A,j):gt=j.def(Q,".",Zc);var ft=Q+".program("+gt+","+vt;return k.optional(function(){ft+=","+A.command}),j.def(ft+")")}),{frag:I,vert:H,progVar:P,program:L}}function Co(T,E){var $=T.static,W=T.dynamic;function K(){if(Ps in $){var A=$[Ps];Bf(A)?A=J.getElements(J.create(A,!0)):A&&(A=J.getElements(A),k.command(A,"invalid elements",E.commandStr));var j=Tn(function(vt,gt){if(A){var ft=vt.link(A);return vt.ELEMENTS=ft,ft}return vt.ELEMENTS=null,null});return j.value=A,j}else if(Ps in W){var Q=W[Ps];return Q0(Q,function(vt,gt){var ft=vt.shared,Ft=ft.isBufferArgs,Fe=ft.elements,uo=vt.invoke(gt,Q),Te=gt.def("null"),Qe=gt.def(Ft,"(",uo,")"),so=vt.cond(Qe).then(Te,"=",Fe,".createStream(",uo,");").else(Te,"=",Fe,".getElements(",uo,");");return k.optional(function(){vt.assert(so.else,"!"+uo+"||"+Te,"invalid elements")}),gt.entry(so),gt.exit(vt.cond(Qe).then(Fe,".destroyStream(",Te,");")),vt.ELEMENTS=Te,Te})}return null}var F=K();function I(){if($s in $){var A=$[$s];return k.commandParameter(A,ki,"invalid primitve",E.commandStr),Tn(function(Q,vt){return ki[A]})}else if($s in W){var j=W[$s];return Q0(j,function(Q,vt){var gt=Q.constants.primTypes,ft=Q.invoke(vt,j);return k.optional(function(){Q.assert(vt,ft+" in "+gt,"invalid primitive, must be one of "+Object.keys(ki))}),vt.def(gt,"[",ft,"]")})}else if(F)return Ba(F)?F.value?Tn(function(Q,vt){return vt.def(Q.ELEMENTS,".primType")}):Tn(function(){return om}):new P0(F.thisDep,F.contextDep,F.propDep,function(Q,vt){var gt=Q.ELEMENTS;return vt.def(gt,"?",gt,".primType:",om)});return null}function H(A,j){if(A in $){var Q=$[A]|0;return k.command(!j||Q>=0,"invalid "+A,E.commandStr),Tn(function(gt,ft){return j&&(gt.OFFSET=Q),Q})}else if(A in W){var vt=W[A];return Q0(vt,function(gt,ft){var Ft=gt.invoke(ft,vt);return j&&(gt.OFFSET=Ft,k.optional(function(){gt.assert(ft,Ft+">=0","invalid "+A)})),Ft})}else if(j&&F)return Tn(function(gt,ft){return gt.OFFSET="0",0});return null}var L=H(Of,!0);function P(){if(Is in $){var A=$[Is]|0;return k.command(typeof A=="number"&&A>=0,"invalid vertex count",E.commandStr),Tn(function(){return A})}else if(Is in W){var j=W[Is];return Q0(j,function(gt,ft){var Ft=gt.invoke(ft,j);return k.optional(function(){gt.assert(ft,"typeof "+Ft+'==="number"&&'+Ft+">=0&&"+Ft+"===("+Ft+"|0)","invalid vertex count")}),Ft})}else if(F)if(Ba(F)){if(F)return L?new P0(L.thisDep,L.contextDep,L.propDep,function(gt,ft){var Ft=ft.def(gt.ELEMENTS,".vertCount-",gt.OFFSET);return k.optional(function(){gt.assert(ft,Ft+">=0","invalid vertex offset/element buffer too small")}),Ft}):Tn(function(gt,ft){return ft.def(gt.ELEMENTS,".vertCount")});var Q=Tn(function(){return-1});return k.optional(function(){Q.MISSING=!0}),Q}else{var vt=new P0(F.thisDep||L.thisDep,F.contextDep||L.contextDep,F.propDep||L.propDep,function(gt,ft){var Ft=gt.ELEMENTS;return gt.OFFSET?ft.def(Ft,"?",Ft,".vertCount-",gt.OFFSET,":-1"):ft.def(Ft,"?",Ft,".vertCount:-1")});return k.optional(function(){vt.DYNAMIC=!0}),vt}return null}return{elements:F,primitive:I(),count:P(),instances:H(Cf,!1),offset:L}}function Ln(T,E){var $=T.static,W=T.dynamic,K={};return Tt.forEach(function(F){var I=Qt(F);function H(L,P){if(F in $){var A=L($[F]);K[I]=Tn(function(){return A})}else if(F in W){var j=W[F];K[I]=Q0(j,function(Q,vt){return P(Q,vt,Q.invoke(vt,j))})}}switch(F){case Bv:case qv:case Iv:case Yv:case Fv:case Qv:case Wv:case Vv:case Xv:case Uv:return H(function(L){return k.commandType(L,"boolean",F,E.commandStr),L},function(L,P,A){return k.optional(function(){L.assert(P,"typeof "+A+'==="boolean"',"invalid flag "+F,L.commandStr)}),A});case Gv:return H(function(L){return k.commandParameter(L,Di,"invalid "+F,E.commandStr),Di[L]},function(L,P,A){var j=L.constants.compareFuncs;return k.optional(function(){L.assert(P,A+" in "+j,"invalid "+F+", must be one of "+Object.keys(Di))}),P.def(j,"[",A,"]")});case Hv:return H(function(L){return k.command(Mn(L)&&L.length===2&&typeof L[0]=="number"&&typeof L[1]=="number"&&L[0]<=L[1],"depth range is 2d array",E.commandStr),L},function(L,P,A){k.optional(function(){L.assert(P,L.shared.isArrayLike+"("+A+")&&"+A+".length===2&&typeof "+A+'[0]==="number"&&typeof '+A+'[1]==="number"&&'+A+"[0]<="+A+"[1]","depth range must be a 2d array")});var j=P.def("+",A,"[0]"),Q=P.def("+",A,"[1]");return[j,Q]});case J1:return H(function(L){k.commandType(L,"object","blend.func",E.commandStr);var P="srcRGB"in L?L.srcRGB:L.src,A="srcAlpha"in L?L.srcAlpha:L.src,j="dstRGB"in L?L.dstRGB:L.dst,Q="dstAlpha"in L?L.dstAlpha:L.dst;return k.commandParameter(P,sa,I+".srcRGB",E.commandStr),k.commandParameter(A,sa,I+".srcAlpha",E.commandStr),k.commandParameter(j,sa,I+".dstRGB",E.commandStr),k.commandParameter(Q,sa,I+".dstAlpha",E.commandStr),k.command(cm.indexOf(P+", "+j)===-1,"unallowed blending combination (srcRGB, dstRGB) = ("+P+", "+j+")",E.commandStr),[sa[P],sa[j],sa[A],sa[Q]]},function(L,P,A){var j=L.constants.blendFuncs;k.optional(function(){L.assert(P,A+"&&typeof "+A+'==="object"',"invalid blend func, must be an object")});function Q(Te,Qe){var so=P.def('"',Te,Qe,'" in ',A,"?",A,".",Te,Qe,":",A,".",Te);return k.optional(function(){L.assert(P,so+" in "+j,"invalid "+F+"."+Te+Qe+", must be one of "+Object.keys(sa))}),so}var vt=Q("src","RGB"),gt=Q("dst","RGB");k.optional(function(){var Te=L.constants.invalidBlendCombinations;L.assert(P,Te+".indexOf("+vt+'+", "+'+gt+") === -1 ","unallowed blending combination for (srcRGB, dstRGB)")});var ft=P.def(j,"[",vt,"]"),Ft=P.def(j,"[",Q("src","Alpha"),"]"),Fe=P.def(j,"[",gt,"]"),uo=P.def(j,"[",Q("dst","Alpha"),"]");return[ft,Fe,Ft,uo]});case Z1:return H(function(L){if(typeof L=="string")return k.commandParameter(L,it,"invalid "+F,E.commandStr),[it[L],it[L]];if(typeof L=="object")return k.commandParameter(L.rgb,it,F+".rgb",E.commandStr),k.commandParameter(L.alpha,it,F+".alpha",E.commandStr),[it[L.rgb],it[L.alpha]];k.commandRaise("invalid blend.equation",E.commandStr)},function(L,P,A){var j=L.constants.blendEquations,Q=P.def(),vt=P.def(),gt=L.cond("typeof ",A,'==="string"');return k.optional(function(){function ft(Ft,Fe,uo){L.assert(Ft,uo+" in "+j,"invalid "+Fe+", must be one of "+Object.keys(it))}ft(gt.then,F,A),L.assert(gt.else,A+"&&typeof "+A+'==="object"',"invalid "+F),ft(gt.else,F+".rgb",A+".rgb"),ft(gt.else,F+".alpha",A+".alpha")}),gt.then(Q,"=",vt,"=",j,"[",A,"];"),gt.else(Q,"=",j,"[",A,".rgb];",vt,"=",j,"[",A,".alpha];"),P(gt),[Q,vt]});case Dv:return H(function(L){return k.command(Mn(L)&&L.length===4,"blend.color must be a 4d array",E.commandStr),Re(4,function(P){return+L[P]})},function(L,P,A){return k.optional(function(){L.assert(P,L.shared.isArrayLike+"("+A+")&&"+A+".length===4","blend.color must be a 4d array")}),Re(4,function(j){return P.def("+",A,"[",j,"]")})});case Kv:return H(function(L){return k.commandType(L,"number",I,E.commandStr),L|0},function(L,P,A){return k.optional(function(){L.assert(P,"typeof "+A+'==="number"',"invalid stencil.mask")}),P.def(A,"|0")});case au:return H(function(L){k.commandType(L,"object",I,E.commandStr);var P=L.cmp||"keep",A=L.ref||0,j="mask"in L?L.mask:-1;return k.commandParameter(P,Di,F+".cmp",E.commandStr),k.commandType(A,"number",F+".ref",E.commandStr),k.commandType(j,"number",F+".mask",E.commandStr),[Di[P],A,j]},function(L,P,A){var j=L.constants.compareFuncs;k.optional(function(){function ft(){L.assert(P,Array.prototype.join.call(arguments,""),"invalid stencil.func")}ft(A+"&&typeof ",A,'==="object"'),ft('!("cmp" in ',A,")||(",A,".cmp in ",j,")")});var Q=P.def('"cmp" in ',A,"?",j,"[",A,".cmp]",":",Ha),vt=P.def(A,".ref|0"),gt=P.def('"mask" in ',A,"?",A,".mask|0:-1");return[Q,vt,gt]});case su:case Kc:return H(function(L){k.commandType(L,"object",I,E.commandStr);var P=L.fail||"keep",A=L.zfail||"keep",j=L.zpass||"keep";return k.commandParameter(P,Ua,F+".fail",E.commandStr),k.commandParameter(A,Ua,F+".zfail",E.commandStr),k.commandParameter(j,Ua,F+".zpass",E.commandStr),[F===Kc?qs:sl,Ua[P],Ua[A],Ua[j]]},function(L,P,A){var j=L.constants.stencilOps;k.optional(function(){L.assert(P,A+"&&typeof "+A+'==="object"',"invalid "+F)});function Q(vt){return k.optional(function(){L.assert(P,'!("'+vt+'" in '+A+")||("+A+"."+vt+" in "+j+")","invalid "+F+"."+vt+", must be one of "+Object.keys(Ua))}),P.def('"',vt,'" in ',A,"?",j,"[",A,".",vt,"]:",Ha)}return[F===Kc?qs:sl,Q("fail"),Q("zfail"),Q("zpass")]});case nu:return H(function(L){k.commandType(L,"object",I,E.commandStr);var P=L.factor|0,A=L.units|0;return k.commandType(P,"number",I+".factor",E.commandStr),k.commandType(A,"number",I+".units",E.commandStr),[P,A]},function(L,P,A){k.optional(function(){L.assert(P,A+"&&typeof "+A+'==="object"',"invalid "+F)});var j=P.def(A,".factor|0"),Q=P.def(A,".units|0");return[j,Q]});case jv:return H(function(L){var P=0;return L==="front"?P=sl:L==="back"&&(P=qs),k.command(!!P,I,E.commandStr),P},function(L,P,A){return k.optional(function(){L.assert(P,A+'==="front"||'+A+'==="back"',"invalid cull.face")}),P.def(A,'==="front"?',sl,":",qs)});case ou:return H(function(L){return k.command(typeof L=="number"&&L>=et.lineWidthDims[0]&&L<=et.lineWidthDims[1],"invalid line width, must be a positive number between "+et.lineWidthDims[0]+" and "+et.lineWidthDims[1],E.commandStr),L},function(L,P,A){return k.optional(function(){L.assert(P,"typeof "+A+'==="number"&&'+A+">="+et.lineWidthDims[0]+"&&"+A+"<="+et.lineWidthDims[1],"invalid line width")}),A});case eu:return H(function(L){return k.commandParameter(L,du,I,E.commandStr),du[L]},function(L,P,A){return k.optional(function(){L.assert(P,A+'==="cw"||'+A+'==="ccw"',"invalid frontFace, must be one of cw,ccw")}),P.def(A+'==="cw"?'+nm+":"+uu)});case tu:return H(function(L){return k.command(Mn(L)&&L.length===4,"color.mask must be length 4 array",E.commandStr),L.map(function(P){return!!P})},function(L,P,A){return k.optional(function(){L.assert(P,L.shared.isArrayLike+"("+A+")&&"+A+".length===4","invalid color.mask")}),Re(4,function(j){return"!!"+A+"["+j+"]"})});case ru:return H(function(L){k.command(typeof L=="object"&&L,I,E.commandStr);var P="value"in L?L.value:1,A=!!L.invert;return k.command(typeof P=="number"&&P>=0&&P<=1,"sample.coverage.value must be a number between 0 and 1",E.commandStr),[P,A]},function(L,P,A){k.optional(function(){L.assert(P,A+"&&typeof "+A+'==="object"',"invalid sample.coverage")});var j=P.def('"value" in ',A,"?+",A,".value:1"),Q=P.def("!!",A,".invert");return[j,Q]})}}),K}function Vn(T,E){var $=T.static,W=T.dynamic,K={};return Object.keys($).forEach(function(F){var I=$[F],H;if(typeof I=="number"||typeof I=="boolean")H=Tn(function(){return I});else if(typeof I=="function"){var L=I._reglType;L==="texture2d"||L==="textureCube"?H=Tn(function(P){return P.link(I)}):L==="framebuffer"||L==="framebufferCube"?(k.command(I.color.length>0,'missing color attachment for framebuffer sent to uniform "'+F+'"',E.commandStr),H=Tn(function(P){return P.link(I.color[0])})):k.commandRaise('invalid data for uniform "'+F+'"',E.commandStr)}else Mn(I)?H=Tn(function(P){var A=P.global.def("[",Re(I.length,function(j){return k.command(typeof I[j]=="number"||typeof I[j]=="boolean","invalid uniform "+F,P.commandStr),I[j]}),"]");return A}):k.commandRaise('invalid or missing data for uniform "'+F+'"',E.commandStr);H.value=I,K[F]=H}),Object.keys(W).forEach(function(F){var I=W[F];K[F]=Q0(I,function(H,L){return H.invoke(L,I)})}),K}function Mo(T,E){var $=T.static,W=T.dynamic,K={};return Object.keys($).forEach(function(F){var I=$[F],H=z.id(F),L=new Y;if(Bf(I))L.state=Pi,L.buffer=mt.getBuffer(mt.create(I,qi,!1,!0)),L.type=0;else{var P=mt.getBuffer(I);if(P)L.state=Pi,L.buffer=P,L.type=0;else if(k.command(typeof I=="object"&&I,"invalid data for attribute "+F,E.commandStr),"constant"in I){var A=I.constant;L.buffer="null",L.state=V1,typeof A=="number"?L.x=A:(k.command(Mn(A)&&A.length>0&&A.length<=4,"invalid constant for attribute "+F,E.commandStr),Ci.forEach(function(Fe,uo){uo<A.length&&(L[Fe]=A[uo])}))}else{Bf(I.buffer)?P=mt.getBuffer(mt.create(I.buffer,qi,!1,!0)):P=mt.getBuffer(I.buffer),k.command(!!P,'missing buffer for attribute "'+F+'"',E.commandStr);var j=I.offset|0;k.command(j>=0,'invalid offset for attribute "'+F+'"',E.commandStr);var Q=I.stride|0;k.command(Q>=0&&Q<256,'invalid stride for attribute "'+F+'", must be integer betweeen [0, 255]',E.commandStr);var vt=I.size|0;k.command(!("size"in I)||vt>0&&vt<=4,'invalid size for attribute "'+F+'", must be 1,2,3,4',E.commandStr);var gt=!!I.normalized,ft=0;"type"in I&&(k.commandParameter(I.type,Ts,"invalid type for attribute "+F,E.commandStr),ft=Ts[I.type]);var Ft=I.divisor|0;"divisor"in I&&(k.command(Ft===0||Ut,'cannot specify divisor for attribute "'+F+'", instancing not supported',E.commandStr),k.command(Ft>=0,'invalid divisor for attribute "'+F+'"',E.commandStr)),k.optional(function(){var Fe=E.commandStr,uo=["buffer","offset","divisor","normalized","type","size","stride"];Object.keys(I).forEach(function(Te){k.command(uo.indexOf(Te)>=0,'unknown parameter "'+Te+'" for attribute pointer "'+F+'" (valid parameters are '+uo+")",Fe)})}),L.buffer=P,L.state=Pi,L.size=vt,L.normalized=gt,L.type=ft||P.dtype,L.offset=j,L.stride=Q,L.divisor=Ft}}K[F]=Tn(function(Fe,uo){var Te=Fe.attribCache;if(H in Te)return Te[H];var Qe={isStream:!1};return Object.keys(L).forEach(function(so){Qe[so]=L[so]}),L.buffer&&(Qe.buffer=Fe.link(L.buffer),Qe.type=Qe.type||Qe.buffer+".dtype"),Te[H]=Qe,Qe})}),Object.keys(W).forEach(function(F){var I=W[F];function H(L,P){var A=L.invoke(P,I),j=L.shared,Q=L.constants,vt=j.isBufferArgs,gt=j.buffer;k.optional(function(){L.assert(P,A+"&&(typeof "+A+'==="object"||typeof '+A+'==="function")&&('+vt+"("+A+")||"+gt+".getBuffer("+A+")||"+gt+".getBuffer("+A+".buffer)||"+vt+"("+A+'.buffer)||("constant" in '+A+"&&(typeof "+A+'.constant==="number"||'+j.isArrayLike+"("+A+".constant))))",'invalid dynamic attribute "'+F+'"')});var ft={isStream:P.def(!1)},Ft=new Y;Ft.state=Pi,Object.keys(Ft).forEach(function(Qe){ft[Qe]=P.def(""+Ft[Qe])});var Fe=ft.buffer,uo=ft.type;P("if(",vt,"(",A,")){",ft.isStream,"=true;",Fe,"=",gt,".createStream(",qi,",",A,");",uo,"=",Fe,".dtype;","}else{",Fe,"=",gt,".getBuffer(",A,");","if(",Fe,"){",uo,"=",Fe,".dtype;",'}else if("constant" in ',A,"){",ft.state,"=",V1,";","if(typeof "+A+'.constant === "number"){',ft[Ci[0]],"=",A,".constant;",Ci.slice(1).map(function(Qe){return ft[Qe]}).join("="),"=0;","}else{",Ci.map(function(Qe,so){return ft[Qe]+"="+A+".constant.length>"+so+"?"+A+".constant["+so+"]:0;"}).join(""),"}}else{","if(",vt,"(",A,".buffer)){",Fe,"=",gt,".createStream(",qi,",",A,".buffer);","}else{",Fe,"=",gt,".getBuffer(",A,".buffer);","}",uo,'="type" in ',A,"?",Q.glTypes,"[",A,".type]:",Fe,".dtype;",ft.normalized,"=!!",A,".normalized;");function Te(Qe){P(ft[Qe],"=",A,".",Qe,"|0;")}return Te("size"),Te("offset"),Te("stride"),Te("divisor"),P("}}"),P.exit("if(",ft.isStream,"){",gt,".destroyStream(",Fe,");","}"),ft}K[F]=Q0(I,H)}),K}function In(T,E){var $=T.static,W=T.dynamic;if(tl in $){var K=$[tl];return K!==null&&jt.getVAO(K)===null&&(K=jt.createVAO(K)),Tn(function(I){return I.link(jt.getVAO(K))})}else if(tl in W){var F=W[tl];return Q0(F,function(I,H){var L=I.invoke(H,F);return H.def(I.shared.vao+".getVAO("+L+")")})}return null}function on(T){var E=T.static,$=T.dynamic,W={};return Object.keys(E).forEach(function(K){var F=E[K];W[K]=Tn(function(I,H){return typeof F=="number"||typeof F=="boolean"?""+F:I.link(F)})}),Object.keys($).forEach(function(K){var F=$[K];W[K]=Q0(F,function(I,H){return I.invoke(H,F)})}),W}function Nn(T,E,$,W,K){var F=T.static,I=T.dynamic;k.optional(function(){var Te=[Cs,Zc,Jc,Ps,$s,Of,Is,Cf,Qc,tl].concat(Tt);function Qe(so){Object.keys(so).forEach(function(Po){k.command(Te.indexOf(Po)>=0,'unknown parameter "'+Po+'"',K.commandStr)})}Qe(F),Qe(I)});var H=ao(T,E),L=Ae(T,K),P=xo(T,L,K),A=Co(T,K),j=Ln(T,K),Q=vo(T,K,H);function vt(Te){var Qe=P[Te];Qe&&(j[Te]=Qe)}vt(ba),vt(Qt(Rf));var gt=Object.keys(j).length>0,ft={framebuffer:L,draw:A,shader:Q,state:j,dirty:gt,scopeVAO:null,drawVAO:null,useVAO:!1,attributes:{}};if(ft.profile=fo(T,K),ft.uniforms=Vn($,K),ft.drawVAO=ft.scopeVAO=In(T,K),!ft.drawVAO&&Q.program&&!H&&C.angle_instanced_arrays){var Ft=!0,Fe=Q.program.attributes.map(function(Te){var Qe=E.static[Te];return Ft=Ft&&!!Qe,Qe});if(Ft&&Fe.length>0){var uo=jt.getVAO(jt.createVAO(Fe));ft.drawVAO=new P0(null,null,null,function(Te,Qe){return Te.link(uo)}),ft.useVAO=!0}}return H?ft.useVAO=!0:ft.attributes=Mo(E,K),ft.context=on(W,K),ft}function qn(T,E,$){var W=T.shared,K=W.context,F=T.scope();Object.keys($).forEach(function(I){E.save(K,"."+I);var H=$[I],L=H.append(T,E);Array.isArray(L)?F(K,".",I,"=[",L.join(),"];"):F(K,".",I,"=",L,";")}),E(F)}function Dn(T,E,$,W){var K=T.shared,F=K.gl,I=K.framebuffer,H;fe&&(H=E.def(K.extensions,".webgl_draw_buffers"));var L=T.constants,P=L.drawBuffer,A=L.backBuffer,j;$?j=$.append(T,E):j=E.def(I,".next"),W||E("if(",j,"!==",I,".cur){"),E("if(",j,"){",F,".bindFramebuffer(",im,",",j,".framebuffer);"),fe&&E(H,".drawBuffersWEBGL(",P,"[",j,".colorAttachments.length]);"),E("}else{",F,".bindFramebuffer(",im,",null);"),fe&&E(H,".drawBuffersWEBGL(",A,");"),E("}",I,".cur=",j,";"),W||E("}")}function r0(T,E,$){var W=T.shared,K=W.gl,F=T.current,I=T.next,H=W.current,L=W.next,P=T.cond(H,".dirty");Tt.forEach(function(A){var j=Qt(A);if(!(j in $.state)){var Q,vt;if(j in I){Q=I[j],vt=F[j];var gt=Re(Mt[j].length,function(Ft){return P.def(Q,"[",Ft,"]")});P(T.cond(gt.map(function(Ft,Fe){return Ft+"!=="+vt+"["+Fe+"]"}).join("||")).then(K,".",St[j],"(",gt,");",gt.map(function(Ft,Fe){return vt+"["+Fe+"]="+Ft}).join(";"),";"))}else{Q=P.def(L,".",j);var ft=T.cond(Q,"!==",H,".",j);P(ft),j in Kt?ft(T.cond(Q).then(K,".enable(",Kt[j],");").else(K,".disable(",Kt[j],");"),H,".",j,"=",Q,";"):ft(K,".",St[j],"(",Q,");",H,".",j,"=",Q,";")}}}),Object.keys($.state).length===0&&P(H,".dirty=false;"),E(P)}function p0(T,E,$,W){var K=T.shared,F=T.current,I=K.current,H=K.gl;fm(Object.keys($)).forEach(function(L){var P=$[L];if(!(W&&!W(P))){var A=P.append(T,E);if(Kt[L]){var j=Kt[L];Ba(P)?A?E(H,".enable(",j,");"):E(H,".disable(",j,");"):E(T.cond(A).then(H,".enable(",j,");").else(H,".disable(",j,");")),E(I,".",L,"=",A,";")}else if(Mn(A)){var Q=F[L];E(H,".",St[L],"(",A,");",A.map(function(vt,gt){return Q+"["+gt+"]="+vt}).join(";"),";")}else E(H,".",St[L],"(",A,");",I,".",L,"=",A,";")}})}function kn(T,E){Ut&&(T.instancing=E.def(T.shared.extensions,".angle_instanced_arrays"))}function ho(T,E,$,W,K){var F=T.shared,I=T.stats,H=F.current,L=F.timer,P=$.profile;function A(){return typeof performance=="undefined"?"Date.now()":"performance.now()"}var j,Q;function vt(Te){j=E.def(),Te(j,"=",A(),";"),typeof K=="string"?Te(I,".count+=",K,";"):Te(I,".count++;"),Ct&&(W?(Q=E.def(),Te(Q,"=",L,".getNumPendingQueries();")):Te(L,".beginQuery(",I,");"))}function gt(Te){Te(I,".cpuTime+=",A(),"-",j,";"),Ct&&(W?Te(L,".pushScopeStats(",Q,",",L,".getNumPendingQueries(),",I,");"):Te(L,".endQuery();"))}function ft(Te){var Qe=E.def(H,".profile");E(H,".profile=",Te,";"),E.exit(H,".profile=",Qe,";")}var Ft;if(P){if(Ba(P)){P.enable?(vt(E),gt(E.exit),ft("true")):ft("false");return}Ft=P.append(T,E),ft(Ft)}else Ft=E.def(H,".profile");var Fe=T.block();vt(Fe),E("if(",Ft,"){",Fe,"}");var uo=T.block();gt(uo),E.exit("if(",Ft,"){",uo,"}")}function v0(T,E,$,W,K){var F=T.shared;function I(L){switch(L){case Pf:case qf:case Gf:return 2;case $f:case Df:case Hf:return 3;case If:case Ff:case Uf:return 4;default:return 1}}function H(L,P,A){var j=F.gl,Q=E.def(L,".location"),vt=E.def(F.attributes,"[",Q,"]"),gt=A.state,ft=A.buffer,Ft=[A.x,A.y,A.z,A.w],Fe=["buffer","normalized","offset","stride"];function uo(){E("if(!",vt,".buffer){",j,".enableVertexAttribArray(",Q,");}");var Qe=A.type,so;if(A.size?so=E.def(A.size,"||",P):so=P,E("if(",vt,".type!==",Qe,"||",vt,".size!==",so,"||",Fe.map(function(gn){return vt+"."+gn+"!=="+A[gn]}).join("||"),"){",j,".bindBuffer(",qi,",",ft,".buffer);",j,".vertexAttribPointer(",[Q,so,Qe,A.normalized,A.stride,A.offset],");",vt,".type=",Qe,";",vt,".size=",so,";",Fe.map(function(gn){return vt+"."+gn+"="+A[gn]+";"}).join(""),"}"),Ut){var Po=A.divisor;E("if(",vt,".divisor!==",Po,"){",T.instancing,".vertexAttribDivisorANGLE(",[Q,Po],");",vt,".divisor=",Po,";}")}}function Te(){E("if(",vt,".buffer){",j,".disableVertexAttribArray(",Q,");",vt,".buffer=null;","}if(",Ci.map(function(Qe,so){return vt+"."+Qe+"!=="+Ft[so]}).join("||"),"){",j,".vertexAttrib4f(",Q,",",Ft,");",Ci.map(function(Qe,so){return vt+"."+Qe+"="+Ft[so]+";"}).join(""),"}")}gt===Pi?uo():gt===V1?Te():(E("if(",gt,"===",Pi,"){"),uo(),E("}else{"),Te(),E("}"))}W.forEach(function(L){var P=L.name,A=$.attributes[P],j;if(A){if(!K(A))return;j=A.append(T,E)}else{if(!K(hm))return;var Q=T.scopeAttrib(P);k.optional(function(){T.assert(E,Q+".state","missing attribute "+P)}),j={},Object.keys(new Y).forEach(function(vt){j[vt]=E.def(Q,".",vt)})}H(T.link(L),I(L.info.type),j)})}function Do(T,E,$,W,K){for(var F=T.shared,I=F.gl,H,L=0;L<W.length;++L){var P=W[L],A=P.name,j=P.info.type,Q=$.uniforms[A],vt=T.link(P),gt=vt+".location",ft;if(Q){if(!K(Q))continue;if(Ba(Q)){var Ft=Q.value;if(k.command(Ft!==null&&typeof Ft!="undefined",'missing uniform "'+A+'"',T.commandStr),j===rl||j===al){k.command(typeof Ft=="function"&&(j===rl&&(Ft._reglType==="texture2d"||Ft._reglType==="framebuffer")||j===al&&(Ft._reglType==="textureCube"||Ft._reglType==="framebufferCube")),"invalid texture for uniform "+A,T.commandStr);var Fe=T.link(Ft._texture||Ft.color[0]._texture);E(I,".uniform1i(",gt,",",Fe+".bind());"),E.exit(Fe,".unbind();")}else if(j===el||j===ol||j===nl){k.optional(function(){k.command(Mn(Ft),"invalid matrix for uniform "+A,T.commandStr),k.command(j===el&&Ft.length===4||j===ol&&Ft.length===9||j===nl&&Ft.length===16,"invalid length for matrix uniform "+A,T.commandStr)});var uo=T.global.def("new Float32Array(["+Array.prototype.slice.call(Ft)+"])"),Te=2;j===ol?Te=3:j===nl&&(Te=4),E(I,".uniformMatrix",Te,"fv(",gt,",false,",uo,");")}else{switch(j){case lu:k.commandType(Ft,"number","uniform "+A,T.commandStr),H="1f";break;case Pf:k.command(Mn(Ft)&&Ft.length===2,"uniform "+A,T.commandStr),H="2f";break;case $f:k.command(Mn(Ft)&&Ft.length===3,"uniform "+A,T.commandStr),H="3f";break;case If:k.command(Mn(Ft)&&Ft.length===4,"uniform "+A,T.commandStr),H="4f";break;case hu:k.commandType(Ft,"boolean","uniform "+A,T.commandStr),H="1i";break;case fu:k.commandType(Ft,"number","uniform "+A,T.commandStr),H="1i";break;case Gf:k.command(Mn(Ft)&&Ft.length===2,"uniform "+A,T.commandStr),H="2i";break;case qf:k.command(Mn(Ft)&&Ft.length===2,"uniform "+A,T.commandStr),H="2i";break;case Hf:k.command(Mn(Ft)&&Ft.length===3,"uniform "+A,T.commandStr),H="3i";break;case Df:k.command(Mn(Ft)&&Ft.length===3,"uniform "+A,T.commandStr),H="3i";break;case Uf:k.command(Mn(Ft)&&Ft.length===4,"uniform "+A,T.commandStr),H="4i";break;case Ff:k.command(Mn(Ft)&&Ft.length===4,"uniform "+A,T.commandStr),H="4i";break}E(I,".uniform",H,"(",gt,",",Mn(Ft)?Array.prototype.slice.call(Ft):Ft,");")}continue}else ft=Q.append(T,E)}else{if(!K(hm))continue;ft=E.def(F.uniforms,"[",z.id(A),"]")}j===rl?(k(!Array.isArray(ft),"must specify a scalar prop for textures"),E("if(",ft,"&&",ft,'._reglType==="framebuffer"){',ft,"=",ft,".color[0];","}")):j===al&&(k(!Array.isArray(ft),"must specify a scalar prop for cube maps"),E("if(",ft,"&&",ft,'._reglType==="framebufferCube"){',ft,"=",ft,".color[0];","}")),k.optional(function(){function $0(Ur,xm){T.assert(E,Ur,'bad data or missing for uniform "'+A+'".  '+xm)}function pu(Ur){k(!Array.isArray(ft),"must not specify an array type for uniform"),$0("typeof "+ft+'==="'+Ur+'"',"invalid type, expected "+Ur)}function kr(Ur,xm){Array.isArray(ft)?k(ft.length===Ur,"must have length "+Ur):$0(F.isArrayLike+"("+ft+")&&"+ft+".length==="+Ur,"invalid vector, should have length "+Ur,T.commandStr)}function gm(Ur){k(!Array.isArray(ft),"must not specify a value type"),$0("typeof "+ft+'==="function"&&'+ft+'._reglType==="texture'+(Ur===em?"2d":"Cube")+'"',"invalid texture type",T.commandStr)}switch(j){case fu:pu("number");break;case qf:kr(2,"number");break;case Df:kr(3,"number");break;case Ff:kr(4,"number");break;case lu:pu("number");break;case Pf:kr(2,"number");break;case $f:kr(3,"number");break;case If:kr(4,"number");break;case hu:pu("boolean");break;case Gf:kr(2,"boolean");break;case Hf:kr(3,"boolean");break;case Uf:kr(4,"boolean");break;case el:kr(4,"number");break;case ol:kr(9,"number");break;case nl:kr(16,"number");break;case rl:gm(em);break;case al:gm(i4);break}});var Qe=1;switch(j){case rl:case al:var so=E.def(ft,"._texture");E(I,".uniform1i(",gt,",",so,".bind());"),E.exit(so,".unbind();");continue;case fu:case hu:H="1i";break;case qf:case Gf:H="2i",Qe=2;break;case Df:case Hf:H="3i",Qe=3;break;case Ff:case Uf:H="4i",Qe=4;break;case lu:H="1f";break;case Pf:H="2f",Qe=2;break;case $f:H="3f",Qe=3;break;case If:H="4f",Qe=4;break;case el:H="Matrix2fv";break;case ol:H="Matrix3fv";break;case nl:H="Matrix4fv";break}if(E(I,".uniform",H,"(",gt,","),H.charAt(0)==="M"){var Po=Math.pow(j-el+2,2),gn=T.global.def("new Float32Array(",Po,")");Array.isArray(ft)?E("false,(",Re(Po,function($0){return gn+"["+$0+"]="+ft[$0]}),",",gn,")"):E("false,(Array.isArray(",ft,")||",ft," instanceof Float32Array)?",ft,":(",Re(Po,function($0){return gn+"["+$0+"]="+ft+"["+$0+"]"}),",",gn,")")}else Qe>1?E(Re(Qe,function($0){return Array.isArray(ft)?ft[$0]:ft+"["+$0+"]"})):(k(!Array.isArray(ft),"uniform value must not be an array"),E(ft));E(");")}}function Ke(T,E,$,W){var K=T.shared,F=K.gl,I=K.draw,H=W.draw;function L(){var so=H.elements,Po,gn=E;return so?((so.contextDep&&W.contextDynamic||so.propDep)&&(gn=$),Po=so.append(T,gn)):Po=gn.def(I,".",Ps),Po&&gn("if("+Po+")"+F+".bindBuffer("+r4+","+Po+".buffer.buffer);"),Po}function P(){var so=H.count,Po,gn=E;return so?((so.contextDep&&W.contextDynamic||so.propDep)&&(gn=$),Po=so.append(T,gn),k.optional(function(){so.MISSING&&T.assert(E,"false","missing vertex count"),so.DYNAMIC&&T.assert(gn,Po+">=0","missing vertex count")})):(Po=gn.def(I,".",Is),k.optional(function(){T.assert(gn,Po+">=0","missing vertex count")})),Po}var A=L();function j(so){var Po=H[so];return Po?Po.contextDep&&W.contextDynamic||Po.propDep?Po.append(T,$):Po.append(T,E):E.def(I,".",so)}var Q=j($s),vt=j(Of),gt=P();if(typeof gt=="number"){if(gt===0)return}else $("if(",gt,"){"),$.exit("}");var ft,Ft;Ut&&(ft=j(Cf),Ft=T.instancing);var Fe=A+".type",uo=H.elements&&Ba(H.elements);function Te(){function so(){$(Ft,".drawElementsInstancedANGLE(",[Q,gt,Fe,vt+"<<(("+Fe+"-"+Cv+")>>1)",ft],");")}function Po(){$(Ft,".drawArraysInstancedANGLE(",[Q,vt,gt,ft],");")}A?uo?so():($("if(",A,"){"),so(),$("}else{"),Po(),$("}")):Po()}function Qe(){function so(){$(F+".drawElements("+[Q,gt,Fe,vt+"<<(("+Fe+"-"+Cv+")>>1)"]+");")}function Po(){$(F+".drawArrays("+[Q,vt,gt]+");")}A?uo?so():($("if(",A,"){"),so(),$("}else{"),Po(),$("}")):Po()}Ut&&(typeof ft!="number"||ft>=0)?typeof ft=="string"?($("if(",ft,">0){"),Te(),$("}else if(",ft,"<0){"),Qe(),$("}")):Te():Qe()}function _o(T,E,$,W,K){var F=eo(),I=F.proc("body",K);return k.optional(function(){F.commandStr=E.commandStr,F.command=F.link(E.commandStr)}),Ut&&(F.instancing=I.def(F.shared.extensions,".angle_instanced_arrays")),T(F,I,$,W),F.compile().body}function To(T,E,$,W){kn(T,E),$.useVAO?$.drawVAO?E(T.shared.vao,".setVAO(",$.drawVAO.append(T,E),");"):E(T.shared.vao,".setVAO(",T.shared.vao,".targetVAO);"):(E(T.shared.vao,".setVAO(null);"),v0(T,E,$,W.attributes,function(){return!0})),Do(T,E,$,W.uniforms,function(){return!0}),Ke(T,E,E,$)}function Sn(T,E){var $=T.proc("draw",1);kn(T,$),qn(T,$,E.context),Dn(T,$,E.framebuffer),r0(T,$,E),p0(T,$,E.state),ho(T,$,E,!1,!0);var W=E.shader.progVar.append(T,$);if($(T.shared.gl,".useProgram(",W,".program);"),E.shader.program)To(T,$,E,E.shader.program);else{$(T.shared.vao,".setVAO(null);");var K=T.global.def("{}"),F=$.def(W,".id"),I=$.def(K,"[",F,"]");$(T.cond(I).then(I,".call(this,a0);").else(I,"=",K,"[",F,"]=",T.link(function(H){return _o(To,T,E,H,1)}),"(",W,");",I,".call(this,a0);"))}Object.keys(E.state).length>0&&$(T.shared.current,".dirty=true;")}function ia(T,E,$,W){T.batchId="a1",kn(T,E);function K(){return!0}v0(T,E,$,W.attributes,K),Do(T,E,$,W.uniforms,K),Ke(T,E,E,$)}function Ds(T,E,$,W){kn(T,E);var K=$.contextDep,F=E.def(),I="a0",H="a1",L=E.def();T.shared.props=L,T.batchId=F;var P=T.scope(),A=T.scope();E(P.entry,"for(",F,"=0;",F,"<",H,";++",F,"){",L,"=",I,"[",F,"];",A,"}",P.exit);function j(Fe){return Fe.contextDep&&K||Fe.propDep}function Q(Fe){return!j(Fe)}if($.needsContext&&qn(T,A,$.context),$.needsFramebuffer&&Dn(T,A,$.framebuffer),p0(T,A,$.state,j),$.profile&&j($.profile)&&ho(T,A,$,!1,!0),W)$.useVAO?$.drawVAO?j($.drawVAO)?A(T.shared.vao,".setVAO(",$.drawVAO.append(T,A),");"):P(T.shared.vao,".setVAO(",$.drawVAO.append(T,P),");"):P(T.shared.vao,".setVAO(",T.shared.vao,".targetVAO);"):(P(T.shared.vao,".setVAO(null);"),v0(T,P,$,W.attributes,Q),v0(T,A,$,W.attributes,j)),Do(T,P,$,W.uniforms,Q),Do(T,A,$,W.uniforms,j),Ke(T,P,A,$);else{var vt=T.global.def("{}"),gt=$.shader.progVar.append(T,A),ft=A.def(gt,".id"),Ft=A.def(vt,"[",ft,"]");A(T.shared.gl,".useProgram(",gt,".program);","if(!",Ft,"){",Ft,"=",vt,"[",ft,"]=",T.link(function(Fe){return _o(ia,T,$,Fe,2)}),"(",gt,");}",Ft,".call(this,a0[",F,"],",F,");")}}function O(T,E){var $=T.proc("batch",2);T.batchId="0",kn(T,$);var W=!1,K=!0;Object.keys(E.context).forEach(function(vt){W=W||E.context[vt].propDep}),W||(qn(T,$,E.context),K=!1);var F=E.framebuffer,I=!1;F?(F.propDep?W=I=!0:F.contextDep&&W&&(I=!0),I||Dn(T,$,F)):Dn(T,$,null),E.state.viewport&&E.state.viewport.propDep&&(W=!0);function H(vt){return vt.contextDep&&W||vt.propDep}r0(T,$,E),p0(T,$,E.state,function(vt){return!H(vt)}),(!E.profile||!H(E.profile))&&ho(T,$,E,!1,"a1"),E.contextDep=W,E.needsContext=K,E.needsFramebuffer=I;var L=E.shader.progVar;if(L.contextDep&&W||L.propDep)Ds(T,$,E,null);else{var P=L.append(T,$);if($(T.shared.gl,".useProgram(",P,".program);"),E.shader.program)Ds(T,$,E,E.shader.program);else{$(T.shared.vao,".setVAO(null);");var A=T.global.def("{}"),j=$.def(P,".id"),Q=$.def(A,"[",j,"]");$(T.cond(Q).then(Q,".call(this,a0,a1);").else(Q,"=",A,"[",j,"]=",T.link(function(vt){return _o(Ds,T,E,vt,2)}),"(",P,");",Q,".call(this,a0,a1);"))}}Object.keys(E.state).length>0&&$(T.shared.current,".dirty=true;")}function nt(T,E){var $=T.proc("scope",3);T.batchId="a2";var W=T.shared,K=W.current;qn(T,$,E.context),E.framebuffer&&E.framebuffer.append(T,$),fm(Object.keys(E.state)).forEach(function(I){var H=E.state[I],L=H.append(T,$);Mn(L)?L.forEach(function(P,A){$.set(T.next[I],"["+A+"]",P)}):$.set(W.next,"."+I,L)}),ho(T,$,E,!0,!0),[Ps,Of,Is,Cf,$s].forEach(function(I){var H=E.draw[I];H&&$.set(W.draw,"."+I,""+H.append(T,$))}),Object.keys(E.uniforms).forEach(function(I){var H=E.uniforms[I].append(T,$);Array.isArray(H)&&(H="["+H.join()+"]"),$.set(W.uniforms,"["+z.id(I)+"]",H)}),Object.keys(E.attributes).forEach(function(I){var H=E.attributes[I].append(T,$),L=T.scopeAttrib(I);Object.keys(new Y).forEach(function(P){$.set(L,"."+P,H[P])})}),E.scopeVAO&&$.set(W.vao,".targetVAO",E.scopeVAO.append(T,$));function F(I){var H=E.shader[I];H&&$.set(W.shader,"."+I,H.append(T,$))}F(Zc),F(Jc),Object.keys(E.state).length>0&&($(K,".dirty=true;"),$.exit(K,".dirty=true;")),$("a1(",T.shared.context,",a0,",T.batchId,");")}function Z(T){if(!(typeof T!="object"||Mn(T))){for(var E=Object.keys(T),$=0;$<E.length;++$)if(bt.isDynamic(T[E[$]]))return!0;return!1}}function we(T,E,$){var W=E.static[$];if(!W||!Z(W))return;var K=T.global,F=Object.keys(W),I=!1,H=!1,L=!1,P=T.global.def("{}");F.forEach(function(j){var Q=W[j];if(bt.isDynamic(Q)){typeof Q=="function"&&(Q=W[j]=bt.unbox(Q));var vt=Q0(Q,null);I=I||vt.thisDep,L=L||vt.propDep,H=H||vt.contextDep}else{switch(K(P,".",j,"="),typeof Q){case"number":K(Q);break;case"string":K('"',Q,'"');break;case"object":Array.isArray(Q)&&K("[",Q.join(),"]");break;default:K(T.link(Q));break}K(";")}});function A(j,Q){F.forEach(function(vt){var gt=W[vt];if(bt.isDynamic(gt)){var ft=j.invoke(Q,gt);Q(P,".",vt,"=",ft,";")}})}E.dynamic[$]=new bt.DynamicVariable(Nf,{thisDep:I,contextDep:H,propDep:L,ref:P,append:A}),delete E.static[$]}function yo(T,E,$,W,K){var F=eo();F.stats=F.link(K),Object.keys(E.static).forEach(function(H){we(F,E,H)}),n4.forEach(function(H){we(F,T,H)});var I=Nn(T,E,$,W,F);return Sn(F,I),nt(F,I),O(F,I),e(F.compile(),{destroy:function(){I.shader.program.destroy()}})}return{next:pe,current:Mt,procs:function(){var T=eo(),E=T.proc("poll"),$=T.proc("refresh"),W=T.block();E(W),$(W);var K=T.shared,F=K.gl,I=K.next,H=K.current;W(H,".dirty=false;"),Dn(T,E),Dn(T,$,null,!0);var L;Ut&&(L=T.link(Ut)),C.oes_vertex_array_object&&$(T.link(C.oes_vertex_array_object),".bindVertexArrayOES(null);");for(var P=0;P<et.maxAttributes;++P){var A=$.def(K.attributes,"[",P,"]"),j=T.cond(A,".buffer");j.then(F,".enableVertexAttribArray(",P,");",F,".bindBuffer(",qi,",",A,".buffer.buffer);",F,".vertexAttribPointer(",P,",",A,".size,",A,".type,",A,".normalized,",A,".stride,",A,".offset);").else(F,".disableVertexAttribArray(",P,");",F,".vertexAttrib4f(",P,",",A,".x,",A,".y,",A,".z,",A,".w);",A,".buffer=null;"),$(j),Ut&&$(L,".vertexAttribDivisorANGLE(",P,",",A,".divisor);")}return $(T.shared.vao,".currentVAO=null;",T.shared.vao,".setVAO(",T.shared.vao,".targetVAO);"),Object.keys(Kt).forEach(function(Q){var vt=Kt[Q],gt=W.def(I,".",Q),ft=T.block();ft("if(",gt,"){",F,".enable(",vt,")}else{",F,".disable(",vt,")}",H,".",Q,"=",gt,";"),$(ft),E("if(",gt,"!==",H,".",Q,"){",ft,"}")}),Object.keys(St).forEach(function(Q){var vt=St[Q],gt=Mt[Q],ft,Ft,Fe=T.block();if(Fe(F,".",vt,"("),Mn(gt)){var uo=gt.length;ft=T.global.def(I,".",Q),Ft=T.global.def(H,".",Q),Fe(Re(uo,function(Te){return ft+"["+Te+"]"}),");",Re(uo,function(Te){return Ft+"["+Te+"]="+ft+"["+Te+"];"}).join("")),E("if(",Re(uo,function(Te){return ft+"["+Te+"]!=="+Ft+"["+Te+"]"}).join("||"),"){",Fe,"}")}else ft=W.def(I,".",Q),Ft=W.def(H,".",Q),Fe(ft,");",H,".",Q,"=",ft,";"),E("if(",ft,"!==",Ft,"){",Fe,"}");$(Fe)}),T.compile()}(),compile:yo}}function M4(){return{vaoCount:0,bufferCount:0,elementsCount:0,framebufferCount:0,shaderCount:0,textureCount:0,cubeCount:0,renderbufferCount:0,maxTextureUnits:0}}var k4=34918,S4=34919,um=35007,E4=function(b,z){if(!z.ext_disjoint_timer_query)return null;var C=[];function et(){return C.pop()||z.ext_disjoint_timer_query.createQueryEXT()}function mt(Ut){C.push(Ut)}var J=[];function st(Ut){var fe=et();z.ext_disjoint_timer_query.beginQueryEXT(um,fe),J.push(fe),Ct(J.length-1,J.length,Ut)}function Ot(){z.ext_disjoint_timer_query.endQueryEXT(um)}function qt(){this.startQueryIndex=-1,this.endQueryIndex=-1,this.sum=0,this.stats=null}var jt=[];function Dt(){return jt.pop()||new qt}function Xt(Ut){jt.push(Ut)}var ne=[];function Ct(Ut,fe,Mt){var pe=Dt();pe.startQueryIndex=Ut,pe.endQueryIndex=fe,pe.sum=0,pe.stats=Mt,ne.push(pe)}var Yt=[],Y=[];function it(){var Ut,fe,Mt=J.length;if(Mt!==0){Y.length=Math.max(Y.length,Mt+1),Yt.length=Math.max(Yt.length,Mt+1),Yt[0]=0,Y[0]=0;var pe=0;for(Ut=0,fe=0;fe<J.length;++fe){var Tt=J[fe];z.ext_disjoint_timer_query.getQueryObjectEXT(Tt,S4)?(pe+=z.ext_disjoint_timer_query.getQueryObjectEXT(Tt,k4),mt(Tt)):J[Ut++]=Tt,Yt[fe+1]=pe,Y[fe+1]=Ut}for(J.length=Ut,Ut=0,fe=0;fe<ne.length;++fe){var Kt=ne[fe],St=Kt.startQueryIndex,Qt=Kt.endQueryIndex;Kt.sum+=Yt[Qt]-Yt[St];var We=Y[St],ro=Y[Qt];ro===We?(Kt.stats.gpuTime+=Kt.sum/1e6,Xt(Kt)):(Kt.startQueryIndex=We,Kt.endQueryIndex=ro,ne[Ut++]=Kt)}ne.length=Ut}}return{beginQuery:st,endQuery:Ot,pushScopeStats:Ct,update:it,getNumPendingQueries:function(){return J.length},clear:function(){C.push.apply(C,J);for(var Ut=0;Ut<C.length;Ut++)z.ext_disjoint_timer_query.deleteQueryEXT(C[Ut]);J.length=0,C.length=0},restore:function(){J.length=0,C.length=0}}},z4=16384,A4=256,T4=1024,L4=34962,dm="webglcontextlost",pm="webglcontextrestored",vm=1,N4=2,R4=3;function mm(b,z){for(var C=0;C<b.length;++C)if(b[C]===z)return C;return-1}function O4(b){var z=Me(b);if(!z)return null;var C=z.gl,et=C.getContextAttributes(),mt=C.isContextLost(),J=ue(C,z);if(!J)return null;var st=ce(),Ot=M4(),qt=J.extensions,jt=E4(C,qt),Dt=zt(),Xt=C.drawingBufferWidth,ne=C.drawingBufferHeight,Ct={tick:0,time:0,viewportWidth:Xt,viewportHeight:ne,framebufferWidth:Xt,framebufferHeight:ne,drawingBufferWidth:Xt,drawingBufferHeight:ne,pixelRatio:z.pixelRatio},Yt={},Y={elements:null,primitive:4,count:-1,offset:0,instances:-1},it=xb(C,qt),Ut=Cb(C,Ot,z,Mt),fe=Ww(C,qt,it,Ot,Ut);function Mt(Ke){return fe.destroyBuffer(Ke)}var pe=Wb(C,qt,Ut,Ot),Tt=Kw(C,st,Ot,z),Kt=Mw(C,qt,it,function(){We.procs.poll()},Ct,Ot,z),St=kw(C,qt,it,Ot,z),Qt=Bw(C,qt,it,Kt,St,Ot),We=_4(C,st,qt,it,Ut,pe,Kt,Qt,Yt,fe,Tt,Y,Ct,jt,z),ro=Jw(C,Qt,We.procs.poll,Ct,et,qt,it),re=We.next,Wt=C.canvas,wt=[],eo=[],fo=[],Ae=[z.onDestroy],xo=null;function ao(){if(wt.length===0){jt&&jt.update(),xo=null;return}xo=Rt.next(ao),p0();for(var Ke=wt.length-1;Ke>=0;--Ke){var _o=wt[Ke];_o&&_o(Ct,null,0)}C.flush(),jt&&jt.update()}function vo(){!xo&&wt.length>0&&(xo=Rt.next(ao))}function Co(){xo&&(Rt.cancel(ao),xo=null)}function Ln(Ke){Ke.preventDefault(),mt=!0,Co(),eo.forEach(function(_o){_o()})}function Vn(Ke){C.getError(),mt=!1,J.restore(),Tt.restore(),Ut.restore(),Kt.restore(),St.restore(),Qt.restore(),fe.restore(),jt&&jt.restore(),We.procs.refresh(),vo(),fo.forEach(function(_o){_o()})}Wt&&(Wt.addEventListener(dm,Ln,!1),Wt.addEventListener(pm,Vn,!1));function Mo(){wt.length=0,Co(),Wt&&(Wt.removeEventListener(dm,Ln),Wt.removeEventListener(pm,Vn)),Tt.clear(),Qt.clear(),St.clear(),Kt.clear(),pe.clear(),Ut.clear(),fe.clear(),jt&&jt.clear(),Ae.forEach(function(Ke){Ke()})}function In(Ke){k(!!Ke,"invalid args to regl({...})"),k.type(Ke,"object","invalid args to regl({...})");function _o(K){var F=e({},K);delete F.uniforms,delete F.attributes,delete F.context,delete F.vao,"stencil"in F&&F.stencil.op&&(F.stencil.opBack=F.stencil.opFront=F.stencil.op,delete F.stencil.op);function I(H){if(H in F){var L=F[H];delete F[H],Object.keys(L).forEach(function(P){F[H+"."+P]=L[P]})}}return I("blend"),I("depth"),I("cull"),I("stencil"),I("polygonOffset"),I("scissor"),I("sample"),"vao"in K&&(F.vao=K.vao),F}function To(K,F){var I={},H={};return Object.keys(K).forEach(function(L){var P=K[L];if(bt.isDynamic(P)){H[L]=bt.unbox(P,L);return}else if(F&&Array.isArray(P)){for(var A=0;A<P.length;++A)if(bt.isDynamic(P[A])){H[L]=bt.unbox(P,L);return}}I[L]=P}),{dynamic:H,static:I}}var Sn=To(Ke.context||{},!0),ia=To(Ke.uniforms||{},!0),Ds=To(Ke.attributes||{},!1),O=To(_o(Ke),!1),nt={gpuTime:0,cpuTime:0,count:0},Z=We.compile(O,Ds,ia,Sn,nt),we=Z.draw,yo=Z.batch,T=Z.scope,E=[];function $(K){for(;E.length<K;)E.push(null);return E}function W(K,F){var I;if(mt&&k.raise("context lost"),typeof K=="function")return T.call(this,null,K,0);if(typeof F=="function")if(typeof K=="number")for(I=0;I<K;++I)T.call(this,null,F,I);else if(Array.isArray(K))for(I=0;I<K.length;++I)T.call(this,K[I],F,I);else return T.call(this,K,F,0);else if(typeof K=="number"){if(K>0)return yo.call(this,$(K|0),K|0)}else if(Array.isArray(K)){if(K.length)return yo.call(this,K,K.length)}else return we.call(this,K)}return e(W,{stats:nt,destroy:function(){Z.destroy()}})}var on=Qt.setFBO=In({framebuffer:bt.define.call(null,vm,"framebuffer")});function Nn(Ke,_o){var To=0;We.procs.poll();var Sn=_o.color;Sn&&(C.clearColor(+Sn[0]||0,+Sn[1]||0,+Sn[2]||0,+Sn[3]||0),To|=z4),"depth"in _o&&(C.clearDepth(+_o.depth),To|=A4),"stencil"in _o&&(C.clearStencil(_o.stencil|0),To|=T4),k(!!To,"called regl.clear with no buffer specified"),C.clear(To)}function qn(Ke){if(k(typeof Ke=="object"&&Ke,"regl.clear() takes an object as input"),"framebuffer"in Ke)if(Ke.framebuffer&&Ke.framebuffer_reglType==="framebufferCube")for(var _o=0;_o<6;++_o)on(e({framebuffer:Ke.framebuffer.faces[_o]},Ke),Nn);else on(Ke,Nn);else Nn(null,Ke)}function Dn(Ke){k.type(Ke,"function","regl.frame() callback must be a function"),wt.push(Ke);function _o(){var To=mm(wt,Ke);k(To>=0,"cannot cancel a frame twice");function Sn(){var ia=mm(wt,Sn);wt[ia]=wt[wt.length-1],wt.length-=1,wt.length<=0&&Co()}wt[To]=Sn}return vo(),{cancel:_o}}function r0(){var Ke=re.viewport,_o=re.scissor_box;Ke[0]=Ke[1]=_o[0]=_o[1]=0,Ct.viewportWidth=Ct.framebufferWidth=Ct.drawingBufferWidth=Ke[2]=_o[2]=C.drawingBufferWidth,Ct.viewportHeight=Ct.framebufferHeight=Ct.drawingBufferHeight=Ke[3]=_o[3]=C.drawingBufferHeight}function p0(){Ct.tick+=1,Ct.time=ho(),r0(),We.procs.poll()}function kn(){Kt.refresh(),r0(),We.procs.refresh(),jt&&jt.update()}function ho(){return(zt()-Dt)/1e3}kn();function v0(Ke,_o){k.type(_o,"function","listener callback must be a function");var To;switch(Ke){case"frame":return Dn(_o);case"lost":To=eo;break;case"restore":To=fo;break;case"destroy":To=Ae;break;default:k.raise("invalid event, must be one of frame,lost,restore,destroy")}return To.push(_o),{cancel:function(){for(var Sn=0;Sn<To.length;++Sn)if(To[Sn]===_o){To[Sn]=To[To.length-1],To.pop();return}}}}var Do=e(In,{clear:qn,prop:bt.define.bind(null,vm),context:bt.define.bind(null,N4),this:bt.define.bind(null,R4),draw:In({}),buffer:function(Ke){return Ut.create(Ke,L4,!1,!1)},elements:function(Ke){return pe.create(Ke,!1)},texture:Kt.create2D,cube:Kt.createCube,renderbuffer:St.create,framebuffer:Qt.create,framebufferCube:Qt.createCube,vao:fe.createVAO,attributes:et,frame:Dn,on:v0,limits:it,hasExtension:function(Ke){return it.extensions.indexOf(Ke.toLowerCase())>=0},read:ro,destroy:Mo,_gl:C,_refresh:kn,poll:function(){p0(),jt&&jt.update()},now:ho,stats:Ot});return z.onDone(null,Do),Do}return O4})});var Fs=Et((wz,Fm)=>{"use strict";var _a=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],Ma=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],ca=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],Qf=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2],dl=(t,e)=>[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]],ku=t=>Math.hypot(t[0],t[1],t[2]),Er=t=>{let e=ku(t)||1;return[t[0]/e,t[1]/e,t[2]/e]};function Wi(t,e){let o=t.length-1,n=Math.min(Math.max(e,0),1)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,i=t[Math.max(0,r-1)],s=t[r],c=t[r+1],h=t[Math.min(o,r+2)],l=[0,0,0];for(let d=0;d<3;d++)l[d]=.5*(2*s[d]+(-i[d]+c[d])*a+(2*i[d]-5*s[d]+4*c[d]-h[d])*a*a+(-i[d]+3*s[d]-3*c[d]+h[d])*a*a*a);return l}function X4(t,e){return Wi(t.map(o=>[o,0,0]),e)[0]}function Y4(t,e,o,n){let r={curMat:[0,0,0]},i={r:[1,0,0,0,1,0,0,0,1],t:[0,0,0],s:1},s=[];r.save=()=>{s.push({r:i.r.slice(),t:i.t.slice(),s:i.s})},r.restore=()=>{i=s.pop()};let c=(u,p)=>{let f=new Array(9);for(let v=0;v<3;v++)for(let m=0;m<3;m++)f[v*3+m]=u[v*3]*p[m]+u[v*3+1]*p[3+m]+u[v*3+2]*p[6+m];return f},h=u=>[i.r[0]*u[0]+i.r[1]*u[1]+i.r[2]*u[2],i.r[3]*u[0]+i.r[4]*u[1]+i.r[5]*u[2],i.r[6]*u[0]+i.r[7]*u[1]+i.r[8]*u[2]];r.translate=(u,p,f)=>{let v=h([u,p,f]);i.t=[i.t[0]+v[0]*i.s,i.t[1]+v[1]*i.s,i.t[2]+v[2]*i.s]},r.scale=u=>{i.s*=u},r.rotateY=u=>{let p=Math.cos(u),f=Math.sin(u);i.r=c(i.r,[p,0,f,0,1,0,-f,0,p])},r.vert=(u,p,f)=>{let v=f||r.curMat,m=h(u),g=Er(h(p));return t.push(m[0]*i.s+i.t[0],m[1]*i.s+i.t[1],m[2]*i.s+i.t[2]),e.push(g[0],g[1],g[2]),n.push(v[0],v[1],v[2]),t.length/3-1};let l=u=>[t[u*3],t[u*3+1],t[u*3+2]],d=u=>[e[u*3],e[u*3+1],e[u*3+2]];return r.tri=(u,p,f)=>{let v=l(u),m=dl(_a(l(p),v),_a(l(f),v)),g=Ma(Ma(d(u),d(p)),d(f));Qf(m,g)<0?o.push(u,f,p):o.push(u,p,f)},r.box=(u,p,f,v,m,g,x)=>{let y=[[[u,p,f],[v,p,f],[u,m,f],[v,m,f],[0,0,-1]],[[v,p,g],[u,p,g],[v,m,g],[u,m,g],[0,0,1]],[[u,p,g],[u,p,f],[u,m,g],[u,m,f],[-1,0,0]],[[v,p,f],[v,p,g],[v,m,f],[v,m,g],[1,0,0]],[[u,m,f],[v,m,f],[u,m,g],[v,m,g],[0,1,0]],[[u,p,g],[v,p,g],[u,p,f],[v,p,f],[0,-1,0]]];for(let w of y){let M=r.vert(w[0],w[4],x),_=r.vert(w[1],w[4],x),S=r.vert(w[2],w[4],x),R=r.vert(w[3],w[4],x);r.tri(M,_,S),r.tri(_,R,S)}},r.surface=(u,p,f,v)=>{v=v||{};let m=.001,g=M=>Math.min(1,Math.max(0,M)),x=[],y=[];for(let M=0;M<=p;M++){let _=[],S=[];for(let R=0;R<=f;R++){let N=M/p,G=R/f,q=u(N,G),V=Math.min(1-m,Math.max(m,N)),D=v.wrapV?G:Math.min(1-m,Math.max(m,G)),B=_a(u(g(V+m),D),u(g(V-m),D)),dt=v.wrapV?D+m:g(D+m),Gt=v.wrapV?D-m:g(D-m),Nt=_a(u(V,dt),u(V,Gt)),xt=dl(B,Nt);ku(xt)<1e-14&&(xt=v.inside?_a(q,v.inside(N,G)):[0,1,0]),xt=Er(xt),v.inside&&Qf(xt,_a(q,v.inside(N,G)))<0&&(xt=ca(xt,-1));let ot=v.mat?v.mat(N,G,q):null;_.push(r.vert(q,xt,ot)),v.double&&S.push(r.vert(q,ca(xt,-1),ot))}x.push(_),y.push(S)}let w=M=>{for(let _=0;_<p;_++)for(let S=0;S<f;S++){let R=M[_][S],N=M[_+1][S],G=M[_][S+1],q=M[_+1][S+1];r.tri(R,N,G),r.tri(N,q,G)}};w(x),v.double&&w(y)},r.ellipsoid=(u,p,f,v,m)=>{m=m||{};let g=m.warp||null;r.surface((x,y)=>{let w=x*Math.PI,M=y*Math.PI*2,_=g?g(x,y):1;return[u[0]+p[0]*_*Math.sin(w)*Math.cos(M),u[1]+p[1]*_*Math.cos(w),u[2]+p[2]*_*Math.sin(w)*Math.sin(M)]},f||10,v||14,{wrapV:!0,inside:()=>u,mat:m.mat})},r.tube=(u,p,f,v,m)=>{m=m||{};let g=40,x=[],y=null;for(let _=0;_<=g;_++){let S=_/g,R=Wi(u,Math.max(0,S-.01)),N=Wi(u,Math.min(1,S+.01)),G=Er(_a(N,R)),q;if(y)q=Er(_a(y,ca(G,Qf(y,G))));else{let V=Math.abs(G[1])<.9?[0,1,0]:[1,0,0];q=Er(dl(G,V))}x.push({N:q,B:Er(dl(G,q))}),y=q}let w=_=>{let S=Math.min(Math.max(_,0),1)*g,R=Math.min(g-1,Math.floor(S)),N=S-R,G=x[R],q=x[R+1];return{N:Er(Ma(ca(G.N,1-N),ca(q.N,N))),B:Er(Ma(ca(G.B,1-N),ca(q.B,N)))}},M=m.squash||[1,1];r.surface((_,S)=>{let R=Wi(u,_),N=w(_),G=p(_),q=S*Math.PI*2;return Ma(R,Ma(ca(N.N,Math.cos(q)*G*M[0]),ca(N.B,Math.sin(q)*G*M[1])))},f||12,v||8,{wrapV:!0,inside:_=>Wi(u,_),mat:m.mat})},r.lathe=(u,p,f,v,m)=>{m=m||{};let g=[];for(let x=0;x<u.length-1;x++){let y=u[x+1][0]-u[x][0],w=u[x+1][1]-u[x][1];g.push(Er([w,-y,0]))}for(let x=0;x<u.length-1;x++){let y=u[x],w=u[x+1],M=x===0||y[2]===1,_=x===u.length-2||w[2]===1,S=M?g[x]:Er(Ma(g[x-1],g[x])),R=_?g[x]:Er(Ma(g[x],g[x+1])),N=[],G=[];for(let q=0;q<=v;q++){let V=q/v*Math.PI*2,D=Math.cos(V),B=Math.sin(V),dt=m.mat?m.mat(V,y[1]):null,Gt=m.mat?m.mat(V,w[1]):null;N.push(r.vert([p+y[0]*D,y[1],f+y[0]*B],[S[0]*D,S[1],S[0]*B],dt)),G.push(r.vert([p+w[0]*D,w[1],f+w[0]*B],[R[0]*D,R[1],R[0]*B],Gt))}for(let q=0;q<v;q++)r.tri(N[q],N[q+1],G[q]),r.tri(N[q+1],G[q+1],G[q])}},r}Fm.exports={createBuilder:Y4,catmull:Wi,curve1:X4,sub:_a,add:Ma,mul:ca,dot:Qf,cross:dl,norm:Er,len:ku}});var Bm=Et((_z,Um)=>{"use strict";var{norm:Zf,add:Jf,mul:Wa,sub:K4,cross:Gm}=Fs(),Hm=Math.PI*2,Q4=(t,e,o)=>{let n=Math.min(1,Math.max(0,(o-t)/(e-t)));return n*n*(3-2*n)};function Z4(t){let e=t>>>0;return()=>{e|=0,e=e+1831565813|0;let o=Math.imul(e^e>>>15,1|e);return o=o+Math.imul(o^o>>>7,61|o)^o,((o^o>>>14)>>>0)/4294967296}}function J4(t,e,o,n,r,a){let i=(u,p)=>[7,u*a,p];t.curMat=[0,0,0],t.box(e-a*1.36,n,o-a*1.36,e+a*1.36,n+.22,o+a*1.36),t.lathe([[a*1.24,n+.22,1],[a*1.3,n+.27],[a*1.31,n+.32],[a*1.26,n+.37,1],[a*1.1,n+.4],[a*1.14,n+.44,1],[a*1.18,n+.47],[a*1.1,n+.52,1],[a*.96,n+.55]],e,o,56,{mat:i});let s=n+.55,c=r-s,h=20,l=6,d=a*.075;return t.surface((u,p)=>{let f=s+u*c,v=a*(.96-.12*u),m=p*Hm,g=p*h%1,x=v-d*4*g*(1-g);return[e+x*Math.cos(m),f,o+x*Math.sin(m)]},10,h*l,{wrapV:!0,inside:u=>[e,s+u*c,o],mat:(u,p)=>[7,p*Hm*a,s+u*c]}),t.lathe([[a*.8,r-.02,1],[a*.9,r+.02],[a*.9,r+.07,1],[a*.82,r+.09,1],[a*.86,r+.13],[a*1.06,r+.2],[a*1.22,r+.28],[a*1.28,r+.33,1]],e,o,56,{mat:i}),t.curMat=[0,0,0],t.box(e-a*1.42,r+.33,o-a*1.42,e+a*1.42,r+.53,o+a*1.42),r+.53}function t6(t,e,o){t.curMat=[1,0,0],t.lathe([[e*1.1,0,1],[e*1.1,o*.14,1],[e*1.04,o*.14,1],[e*1.04,o*.2],[e*.97,o*.26,1],[e*.95,o*.26,1],[e*.95,o*.8,1],[e*.98,o*.8,1],[e*1.03,o*.86],[e*1.05,o*.92,1],[e*1.05,o,1],[e*.5,o,1],[0,o]],0,0,72)}function e6(t,e,o,n,r){t.save(),t.translate(e,0,o),t6(t,n,r),t.restore()}function o6(t,e,o,n,r,a){let i=Z4(n),s=a?Zf([a[0],0,a[1]]):null;t.save(),t.translate(e,0,o),t.scale(r||1),t.curMat=[3,0,0],t.lathe([[.17,0,1],[.2,.02],[.28,.13],[.36,.3],[.395,.47],[.38,.62],[.32,.74],[.29,.8],[.292,.82,1],[.325,.84],[.335,.88,1],[.3,.905,1],[.275,.895,1],[.272,.85]],0,0,48),t.curMat=[5,0,0],t.lathe([[.272,.85,1],[.1,.868],[0,.872]],0,0,24);let c=11,h=.86;for(let l=0;l<c;l++){let d=l>=c-2,u=l*2.399963+i()*.5,p=[Math.cos(u),0,Math.sin(u)],f=[-Math.sin(u),0,Math.cos(u)],v=l*.618%1,m=d?.06+i()*.06:.12+.62*v,g=1;if(s){let xt=p[0]*s[0]+p[2]*s[2];g=.25+.75*Q4(-.7,.5,xt),m*=g}let x=d?1.1+i()*.25:.85+.55*(1-v*.55)+i()*.15,y=d?1+i()*.2:.95+i()*.28,w=d?.055:.215+i()*.05,M=.04+i()*.05,_=[p[0]*M,h,p[2]*M],S=[_[0]+p[0]*Math.sin(m)*x*.92,_[1]+Math.cos(m)*x,_[2]+p[2]*Math.sin(m)*x*.92],R=[_[0]+p[0]*Math.sin(m*.5)*x*.45,_[1]+x*.5,_[2]+p[2]*Math.sin(m*.5)*x*.45];t.curMat=[4,0,0],t.tube([_,R,S],xt=>.02-.008*xt,8,7);let N=24,G=m*.9+.05,q=m+(d?.12:(.95+.45*v)*(.35+.65*g)),V=[S],D=[],B=S;for(let xt=0;xt<N;xt++){let ot=xt/N,Bt=G+(q-G)*ot*ot,ze=[p[0]*Math.sin(Bt),Math.cos(Bt),p[2]*Math.sin(Bt)];D.push(ze),B=Jf(B,Wa(ze,y/N)),V.push(B)}D.push(D[D.length-1]);let dt=xt=>{let ot=xt*N,Bt=Math.min(N-1,Math.floor(ot)),ze=ot-Bt;return Jf(Wa(V[Bt],1-ze),Wa(V[Bt+1],ze))},Gt=xt=>{let ot=xt*N,Bt=Math.min(N,Math.floor(ot)),ze=Math.min(N,Bt+1),Se=ot-Bt;return Zf(Jf(Wa(D[Bt],1-Se),Wa(D[ze],Se)))},Nt=(i()-.5)*.5;t.curMat=[2,0,0],t.surface((xt,ot)=>{let Bt=ot*2-1,ze=dt(xt),Se=Gt(xt),De=Nt*xt,Ee=Jf(Wa(f,Math.cos(De)),Wa(Gm(Se,f),Math.sin(De)));Ee=Zf(K4(Ee,Wa(Se,Ee[0]*Se[0]+Ee[1]*Se[1]+Ee[2]*Se[2])));let rt=Zf(Gm(Ee,Se)),ht=w*Math.pow(Math.sin(Math.PI*Math.pow(xt,.72)),.85),oe=.3*ht*Math.abs(Bt)+.012*Math.sin(xt*40+Bt*2)*Math.abs(Bt)*(d?0:1),lt=-.1*ht*Bt*Bt*Bt*Bt,It=oe+lt;return[ze[0]+Ee[0]*Bt*ht+rt[0]*It,ze[1]+Ee[1]*Bt*ht+rt[1]*It,ze[2]+Ee[2]*Bt*ht+rt[2]*It]},14,8,{double:!0,mat:(xt,ot)=>[2,ot*2-1,xt]})}t.restore()}Um.exports={addFlutedColumn:J4,addStatue:e6,addPlant:o6}});var Va=Et((Mz,Xm)=>{"use strict";var Pt={xc:7,r:2.5,spring:4.7};Pt.x0=Pt.xc-Pt.r;Pt.x1=Pt.xc+Pt.r;Pt.top=Pt.spring+Pt.r;var D0=.06,cn=.1,jm=.08,th=Pt.r,eh=[Pt.x0+th/3,Pt.x0+2*th/3,Pt.xc+th/3,Pt.xc+2*th/3],Vi=.28,Su=[.95,1.65,2.35,3.05,3.75],Wm=[1.05,1.8],pl=[8,0,0],cr=[0,0,0];function zr(t,e,o,n,r,a,i,s){t.box(Math.min(e,r),Math.min(o,a),Math.min(n,i),Math.max(e,r),Math.max(o,a),Math.max(n,i),s)}function Xi(t,e,o,n,r,a,i){let s=t.vert(e,a,i),c=t.vert(o,a,i),h=t.vert(n,a,i),l=t.vert(r,a,i);t.tri(s,c,h),t.tri(s,h,l)}function oh(t,e,o,n,r,a,i=48,s=0,c=Math.PI){let h=(l,d,u)=>[Pt.xc+d*Math.cos(l),Pt.spring+d*Math.sin(l),u];for(let l=0;l<i;l++){let d=s+(c-s)*l/i,u=s+(c-s)*(l+1)/i,p=(d+u)/2;Xi(t,h(d,e,r),h(u,e,r),h(u,o,r),h(d,o,r),[0,0,1],a),Xi(t,h(d,o,n),h(u,o,n),h(u,e,n),h(d,e,n),[0,0,-1],a),Xi(t,h(d,e,n),h(u,e,n),h(u,e,r),h(d,e,r),[-Math.cos(p),-Math.sin(p),0],a),Xi(t,h(u,o,n),h(d,o,n),h(d,o,r),h(u,o,r),[Math.cos(p),Math.sin(p),0],a)}}function n6(t){let n=a=>[Pt.xc+Pt.r*Math.cos(a),Pt.spring+Pt.r*Math.sin(a)],r=a=>{let i=Math.cos(a),s=Math.sin(a),c=Math.abs(i)>1e-6?Pt.r/Math.abs(i):1/0,h=s>1e-6?(8-Pt.spring)/s:1/0,l=Math.min(c,h);return[Math.min(Pt.x1,Math.max(Pt.x0,Pt.xc+i*l)),Math.min(8,Pt.spring+s*l)]};for(let a=0;a<48;a++){let i=Math.PI*a/48,s=Math.PI*(a+1)/48,c=n(i),h=n(s),l=r(i),d=r(s);for(let[p,f]of[[.35,1],[-.35,-1]])Xi(t,[c[0],c[1],p],[h[0],h[1],p],[d[0],d[1],p],[l[0],l[1],p],[0,0,f],cr);let u=(i+s)/2;Xi(t,[c[0],c[1],-.35],[h[0],h[1],-.35],[h[0],h[1],.35],[c[0],c[1],.35],[-Math.cos(u),-Math.sin(u),0],cr)}}function r6(t){zr(t,-.35,0,-.35,Pt.x0,8,.35,cr),zr(t,Pt.x1,0,-.35,14+.35,8,.35,cr),n6(t),Vm(t)}function Vm(t){zr(t,Pt.x0-.32,.3,.35,Pt.x0,Pt.spring,.35+.07,cr),zr(t,Pt.x1,.3,.35,Pt.x1+.32,Pt.spring,.35+.07,cr),zr(t,Pt.x0-.32-.05,0,.35,Pt.x0,.3,.35+.07+.04,cr),zr(t,Pt.x1,0,.35,Pt.x1+.32+.05,.3,.35+.07+.04,cr),zr(t,Pt.x0-.32-.06,Pt.spring-.12,.35,Pt.x0,Pt.spring,.35+.07+.05,cr),zr(t,Pt.x1,Pt.spring-.12,.35,Pt.x1+.32+.06,Pt.spring,.35+.07+.05,cr),oh(t,Pt.r,Pt.r+.32,.35,.35+.07,cr),oh(t,Pt.r+.32,Pt.r+.32+.06,.35,.35+.07+.03,cr),zr(t,Pt.xc-.22,Pt.top-.08,.35,Pt.xc+.22,Pt.top+.32+.12,.35+.07+.06,cr)}function a6(t,e){e=e||"all";let o=e==="all",n=o||e==="fixed",r=-jm/2,a=jm/2,i=(u,p,f,v,m=0)=>zr(t,u-m,p,r,f+m,v,a,pl),s=u=>Pt.spring+Math.sqrt(Math.max(0,Pt.r*Pt.r-(u-Pt.xc)*(u-Pt.xc))),c=e==="right"?Pt.xc:Pt.x0,h=e==="left"?Pt.xc:Pt.x1,l=u=>o||e==="left"&&u<Pt.xc||e==="right"&&u>Pt.xc,d=o?null:Pt.spring-.06;if(n){i(Pt.x0,0,Pt.x0+cn,Pt.spring),i(Pt.x1-cn,0,Pt.x1,Pt.spring),oh(t,Pt.r-cn,Pt.r,r,a,pl,64),i(Pt.x0,0,Pt.x1,.05),i(Pt.x0,Pt.spring-.06,Pt.x1,Pt.spring+.06);for(let u of Wm)oh(t,u-D0/2,u+D0/2,r,a,pl,48)}if(o){i(Pt.x0,0,Pt.x1,Vi),i(Pt.xc-cn/2,0,Pt.xc+cn/2,Pt.top-cn*.5);for(let u of eh)i(u-D0/2,Vi,u+D0/2,s(u)-cn*.5);for(let u of Su)i(Pt.x0,u-D0/2,Pt.x1,u+D0/2)}else if(e==="fixed"){i(Pt.xc-cn/2,Pt.spring+.06,Pt.xc+cn/2,Pt.top-cn*.5);for(let u of eh)i(u-D0/2,Pt.spring+.06,u+D0/2,s(u)-cn*.5)}else{let u=e==="left"?Pt.x0+cn:Pt.x1-cn;i(Math.min(u,u+(e==="left"?cn*.8:-cn*.8)),.05,Math.max(u,u+(e==="left"?cn*.8:-cn*.8)),d),i(c,.05,h,Vi),i(c,d-.07,h,d);let p=e==="left"?Pt.xc-cn/2:Pt.xc;i(p,.05,p+cn/2,d);for(let f of eh)l(f)&&i(f-D0/2,Vi,f+D0/2,d-.07);for(let f of Su)i(c,f-D0/2,h,f+D0/2)}for(let u of[-1,1]){let p=Pt.xc+u*.16;l(p)&&(zr(t,p-.02,1.05,a,p+.02,1.13,a+.06,pl),zr(t,p-(u>0?0:.14),1.07,a+.05,p+(u>0?.14:0),1.11,a+.08,pl))}}function s6(t){t=t||"all";let e=[],o=0,{x0:n,x1:r,xc:a,r:i,spring:s}=Pt;if(t!=="fixed"){let h=t==="right"?a:n,l=t==="left"?a:r;if(e.push([h,0,o],[l,0,o],[l,s,o],[h,0,o],[l,s,o],[h,s,o]),t!=="all")return e}let c=48;for(let h=0;h<c;h++){let l=Math.PI*h/c,d=Math.PI*(h+1)/c;e.push([a,s,o],[a+i*Math.cos(l),s+i*Math.sin(l),o],[a+i*Math.cos(d),s+i*Math.sin(d),o])}return e}var Bo=t=>t.toFixed(4);function i6(){let t=eh.map(n=>`vb = max(vb, barCover(abs(q.x - ${Bo(n)}), ${Bo(D0/2)}, soft));`).join(`
		`),e=Su.map(n=>`hb = max(hb, barCover(abs(q.y - ${Bo(n)}), ${Bo(D0/2)}, soft));`).join(`
		`),o=Wm.map(n=>`ab = max(ab, barCover(abs(rr - ${Bo(n)}), ${Bo(D0/2)}, soft));`).join(`
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
		hb = max(hb, 1.0 - smoothstep(${Bo(Vi)} - soft, ${Bo(Vi)} + soft, q.y));
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
	}`}Xm.exports={addEntranceWall:r6,addSurround:Vm,addFrames:a6,glassPanes:s6,doorLightGLSL:i6,DOOR:Pt,WALL:.35}});var Ki=Et((kz,t2)=>{"use strict";var Hs=1.1583333333333334,Us=(13.05-8*.16)/9,zu=Hs+.16,Au=Us+.16,Sa=14/2-7.75/2,lr=15,vl=Sa+7.75,ka=lr+13.05,fr=.3,Ea={y:8+.18,inset:.15},Gs={y:8+.36,inset:fr},Tu=8+.2,ml=8+.62,Lu=8+.9,Nu=.016,Zm=.28,Jm=.66,c6=(()=>{let t=[-.15,1,.3],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),l6=(()=>{let t=[.42,1,-.32],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),f6=[9,0,0],m0=[10,0,0];function Yi(t,e,o,n,r,a,i){let s=t.vert(e,a,i),c=t.vert(o,a,i),h=t.vert(n,a,i),l=t.vert(r,a,i);t.tri(s,c,h),t.tri(s,h,l)}function F0(t,e,o,n,r,a,i){Yi(t,[e,a,o],[n,a,o],[n,a,r],[e,a,r],[0,-1,0],i)}function Eu(t,e,o,n,r,a,i,s){Yi(t,[e,a,o],[n,a,o],[n,i,o],[e,i,o],[0,0,1],s),Yi(t,[n,a,r],[e,a,r],[e,i,r],[n,i,r],[0,0,-1],s),Yi(t,[e,a,r],[e,a,o],[e,i,o],[e,i,r],[1,0,0],s),Yi(t,[n,a,o],[n,a,r],[n,i,r],[n,i,o],[-1,0,0],s)}function Ym(t,e,o,n,r){F0(t,e[0],e[1],e[2],o[1],n,r),F0(t,e[0],o[3],e[2],e[3],n,r),F0(t,e[0],o[1],o[0],o[3],n,r),F0(t,o[2],o[1],e[2],o[3],n,r)}var Km=t=>Sa+t*zu,Qm=t=>lr+t*Au;function h6(t,e,o=48){let n=[Sa-fr,lr-fr,vl+fr,ka+fr],r=(h,l)=>[h[0]+l,h[1]+l,h[2]-l,h[3]-l],a=r(n,Ea.inset),i=r(n,Gs.inset);F0(t,0,0,14,n[1],8,e),F0(t,0,n[3],14,o,8,e),F0(t,0,n[1],n[0],n[3],8,e),F0(t,n[2],n[1],14,n[3],8,e);let s=.06,c=.06;t.box(n[0]-s,8-c,n[1]-s,n[2]+s,8,n[1],m0),t.box(n[0]-s,8-c,n[3],n[2]+s,8,n[3]+s,m0),t.box(n[0]-s,8-c,n[1],n[0],8,n[3],m0),t.box(n[2],8-c,n[1],n[2]+s,8,n[3],m0),Eu(t,...n.slice(0,2),...n.slice(2),8,Ea.y,m0),Ym(t,n,a,Ea.y,m0),Eu(t,...a.slice(0,2),...a.slice(2),Ea.y,Gs.y,m0),Ym(t,a,i,Gs.y,m0);for(let h=1;h<6;h++){let l=Km(h)-.16;t.box(l,Tu,lr,l+.16,Gs.y,ka,m0)}for(let h=1;h<9;h++){let l=Qm(h)-.16;t.box(Sa,Tu,l,vl,Gs.y,l+.16,m0)}for(let h=0;h<9;h++)for(let l=0;l<6;l++){let d=Km(l),u=Qm(h);Eu(t,d,u,d+Hs,u+Us,Gs.y,Lu,m0),F0(t,d,u,d+Hs,u+Us,Lu,f6),u6(t,d+Hs/2,u+Us/2,Hs/2,Us/2)}}function u6(t,e,o,n,r){let a=ml,i=Nu;F0(t,e-n,o-i,e+n,o+i,a,m0),F0(t,e-i,o-r,e+i,o+r,a,m0);for(let s of[1,-1]){let c=Math.hypot(n,r),h=n/c,l=s*r/c,d=-l*i,u=h*i;Yi(t,[e-h*c+d,a,o-l*c+u],[e+h*c+d,a,o+l*c+u],[e+h*c-d,a,o+l*c-u],[e-h*c-d,a,o-l*c-u],[0,-1,0],m0)}for(let s of[Zm,Jm]){let c=s*n,h=s*r;F0(t,e-c-i,o-h-i,e+c+i,o-h+i,a,m0),F0(t,e-c-i,o+h-i,e+c+i,o+h+i,a,m0),F0(t,e-c-i,o-h+i,e-c+i,o+h-i,a,m0),F0(t,e+c-i,o-h+i,e+c+i,o+h-i,a,m0)}}var io=t=>t.toFixed(4);function d6(){return`
	// by day the sun, high and a little towards the entrance; by night
	// the moon, lower and from the other side, so its squares of light
	// reach across the floor to the foot of the wall. (When the light is
	// switched, the squares slide from one to the other.)
	const vec3 SKY_SUN_DAY = vec3(${c6.map(io).join(", ")});
	const vec3 SKY_MOON = vec3(${l6.map(io).join(", ")});
	vec3 skySun() { return normalize(mix(SKY_SUN_DAY, SKY_MOON, night)); }
	#define SKY_SUN skySun()

	float rectOpen(vec2 q, vec4 r, float soft) {
		vec2 lo = smoothstep(r.xy - soft, r.xy + soft, q);
		vec2 hi = 1.0 - smoothstep(r.zw - soft, r.zw + soft, q);
		return lo.x * lo.y * hi.x * hi.y;
	}

	// inside a pane (not on a beam)? 0..1
	float paneOpen(vec2 q, float soft) {
		vec2 rel = q - vec2(${io(Sa)}, ${io(lr)});
		vec2 pitch = vec2(${io(zu)}, ${io(Au)});
		vec2 cell = floor(rel / pitch);
		if (cell.x < 0.0 || cell.y < 0.0 || cell.x > ${io(5)} || cell.y > ${io(8)}) return 0.0;
		vec2 loc = rel - cell * pitch;
		return rectOpen(loc, vec4(0.0, 0.0, ${io(Hs)}, ${io(Us)}), soft);
	}

	float barCov(float d, float soft) {
		return 1.0 - smoothstep(${io(Nu)} - soft, ${io(Nu)} + soft, d);
	}

	// sunlight reaching point p through the skylight, 0..1
	float skylightAt(vec3 p) {
		if (p.y > ${io(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q0 = (p + L * ((${io(8)} - p.y) / L.y)).xz;
		vec2 q1 = (p + L * ((${io(Ea.y)} - p.y) / L.y)).xz;
		vec2 qb = (p + L * ((${io(Tu)} - p.y) / L.y)).xz;
		vec2 q2 = (p + L * ((${io(Gs.y)} - p.y) / L.y)).xz;
		float tG = (${io(ml)} - p.y) / L.y;
		vec2 qg = (p + L * tG).xz;
		vec2 qt = (p + L * ((${io(Lu)} - p.y) / L.y)).xz;
		float soft = 0.004 + 0.007 * tG;
		float open = rectOpen(q0, vec4(${io(Sa-fr)}, ${io(lr-fr)}, ${io(vl+fr)}, ${io(ka+fr)}), soft)
		           * rectOpen(q1, vec4(${io(Sa-fr+Ea.inset)}, ${io(lr-fr+Ea.inset)}, ${io(vl+fr-Ea.inset)}, ${io(ka+fr-Ea.inset)}), soft)
		           * paneOpen(qb, soft) * paneOpen(q2, soft) * paneOpen(qt, soft);
		if (open <= 0.0) return 0.0;
		// the glazing, measured from the centre of this pane
		vec2 rel = qg - vec2(${io(Sa)}, ${io(lr)});
		vec2 pitch = vec2(${io(zu)}, ${io(Au)});
		vec2 paneHalf = vec2(${io(Hs/2)}, ${io(Us/2)});
		vec2 c = rel - floor(rel / pitch) * pitch - paneHalf;
		vec2 ac = abs(c);
		vec2 an = ac / paneHalf;                       // 0 at the centre, 1 at the pane's edge
		float hm = min(paneHalf.x, paneHalf.y);
		float ring = max(an.x, an.y);
		float cover = max(barCov(ac.x, soft), barCov(ac.y, soft));
		cover = max(cover, barCov(abs(an.x - an.y) * hm * 0.7071, soft));
		cover = max(cover, barCov(abs(ring - ${io(Zm)}) * hm, soft));
		cover = max(cover, barCov(abs(ring - ${io(Jm)}) * hm, soft));
		return open * (1.0 - cover * 0.9);
	}

	// the same light for the beams in the air: the whole opening glows a
	// little, and the panes and bars show in it, softly
	float skylightVol(vec3 p) {
		if (p.y > ${io(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q = (p + L * ((${io(ml)} - p.y) / L.y)).xz;
		float open = rectOpen(q, vec4(${io(Sa)}, ${io(lr)}, ${io(vl)}, ${io(ka)}), 0.25);
		if (open <= 0.0) return 0.0;
		return open * (0.13 + 0.87 * skylightAt(p));
	}

	// light thrown back up by the bright squares on the floor: strongest
	// on what stands beside them and faces them (the lower walls, the
	// pillars, the statues, the ceiling above), fading with distance
	float skylightBounce(vec3 p, vec3 n) {
		if (p.x > 14.2 || p.x < -0.4) return 0.0;
		vec3 L = SKY_SUN;
		vec2 c = vec2(${io(14/2)}, ${io((lr+ka)/2)}) - L.xz * (${io(ml)} / L.y);
		vec2 d = max(abs(p.xz - c) - vec2(${io(7.75/2)}, ${io(13.05/2)}), 0.0);
		float fall = 1.0 / (1.0 + 0.09 * (dot(d, d) + p.y * p.y * 0.6));
		vec3 to = normalize(vec3(c.x, -0.4, c.y) - p);
		return fall * (0.3 + 0.7 * max(dot(n, to), 0.0));
	}

	// a soft daylight glow under the lantern
	float skylightGlow(vec3 p) {
		float z = smoothstep(${io(lr-3)}, ${io(lr+2)}, p.z)
		        * (1.0 - smoothstep(${io(ka-2)}, ${io(ka+3)}, p.z));
		float x = 1.0 - 0.35 * smoothstep(${io(7.75/2)}, ${io(14/2)}, abs(p.x - ${io(14/2)}));
		return z * x;
	}`}t2.exports={addSkylight:h6,skylightGLSL:d6,Z_START:lr,Z_END:ka,GLASS_Y:ml,HEIGHT:8}});var M0=Et((Sz,a2)=>{"use strict";var Zi=Va(),Pu=8,ln=.35,ie={x0:13.65,x1:38.12,z0:41,z1:47.2,zc:44.1,hallEnd:50.65,spring:5.6,crown:Pu},e2=(ie.z1-ie.z0)/2,Ru=ie.crown-ie.spring,Cu=(Ru*Ru+e2*e2)/(2*Ru),$u=ie.crown-Cu;function Qi(t){let e=t-ie.zc;return $u+Math.sqrt(Math.max(0,Cu*Cu-e*e))}var Ze={first:17.43,pitch:4.4,count:5,halfW:1.2,sill:.75,spring:4.3},Br=Array.from({length:Ze.count},(t,e)=>Ze.first+e*Ze.pitch),n2=Br.slice(1).map(t=>t-Ze.pitch/2),p6=[Br[0],Br[2],Br[4]],rh=[Br[1],Br[3]],Z0={r:1.3,sill:.62,spring:3.3},Xo=[0,0,0],gl=[11,0,0],Xa=[10,0,0],xl=[8,0,0];function a0(t,e,o,n,r,a,i){let s=t.vert(e,a,i),c=t.vert(o,a,i),h=t.vert(n,a,i),l=t.vert(r,a,i);t.tri(s,c,h),t.tri(s,h,l)}function J0(t,e,o,n,r,a,i,s){t.box(Math.min(e,r),Math.min(o,a),Math.min(n,i),Math.max(e,r),Math.max(o,a),Math.max(n,i),s)}function yl(t,e){let{u0:o,u1:n,w0:r,w1:a,top:i,holes:s,mat:c}=e,h=new Set([o,n]);for(let v of s){h.add(v.u0),h.add(v.u1);let m=Math.max(8,Math.ceil((v.u1-v.u0)/(v.step||.08)));for(let g=1;g<m;g++)h.add(v.u0+(v.u1-v.u0)*g/m)}for(let v of e.cuts||[])h.add(v);let l=e.topStep||.5;for(let v=o;v<n;v+=l)h.add(v);let d=[...h].filter(v=>v>=o-1e-9&&v<=n+1e-9).sort((v,m)=>v-m),u=(v,m)=>v.bot?v.bot(m):v.bottom,p=(v,m)=>{let g=i(v),x=m.map(M=>[Math.max(0,u(M,v)),Math.min(M.head(v),g)]).filter(M=>M[1]>M[0]).sort((M,_)=>M[0]-_[0]),y=[],w=0;for(let M of x)M[0]>w+1e-6&&y.push([w,M[0]]),w=Math.max(w,M[1]);return g>w+1e-6&&y.push([w,g]),y},f=(v,m,g)=>[v,m,g];for(let v=0;v<d.length-1;v++){let m=d[v],g=d[v+1],x=(m+g)/2,y=s.filter(N=>x>N.u0&&x<N.u1),w=y.length?Math.max(m,Math.max(...y.map(N=>N.u0))+1e-7):m,M=y.length?Math.min(g,Math.min(...y.map(N=>N.u1))-1e-7):g,_=p(w,y),S=p(M,y),R=Math.min(_.length,S.length);for(let N=0;N<R;N++){let[G,q]=_[N],[V,D]=S[N];q-G<1e-6&&D-V<1e-6||(a0(t,f(m,G,a),f(g,V,a),f(g,D,a),f(m,q,a),[0,0,1],c),e.frontOnly||a0(t,f(g,V,r),f(m,G,r),f(m,q,r),f(g,D,r),[0,0,-1],c))}}e.noEnds||(a0(t,f(o,0,r),f(o,0,a),f(o,i(o),a),f(o,i(o),r),[-1,0,0],c),a0(t,f(n,0,a),f(n,0,r),f(n,i(n),r),f(n,i(n),a),[1,0,0],c));for(let v of s){if(v.noReveal)continue;let m=v.mat||e.revealMat||c,g=Math.max(0,u(v,v.u0+1e-7)),x=Math.max(0,u(v,v.u1-1e-7)),y=Math.min(v.head(v.u0+1e-7),i(v.u0)),w=Math.min(v.head(v.u1-1e-7),i(v.u1));y>g+1e-6&&a0(t,f(v.u0,g,a),f(v.u0,g,r),f(v.u0,y,r),f(v.u0,y,a),[1,0,0],m),w>x+1e-6&&a0(t,f(v.u1,x,r),f(v.u1,x,a),f(v.u1,w,a),f(v.u1,w,r),[-1,0,0],m);let M=Math.max(8,Math.ceil((v.u1-v.u0)/(v.step||.06)));for(let _=0;_<M;_++){let S=v.u0+(v.u1-v.u0)*_/M,R=v.u0+(v.u1-v.u0)*(_+1)/M,N=Math.max(S,v.u0+1e-7),G=Math.min(R,v.u1-1e-7),q=Math.min(v.head(N),i(S)),V=Math.min(v.head(G),i(R));if(!(q>=i(S)-1e-6&&V>=i(R)-1e-6)){let dt=R-S,Gt=V-q,Nt=Math.hypot(dt,Gt)||1;a0(t,f(S,q,r),f(R,V,r),f(R,V,a),f(S,q,a),[Gt/Nt,-dt/Nt,0],m)}let D=u(v,N),B=u(v,G);if(D>1e-6||B>1e-6){let dt=R-S,Gt=B-D,Nt=Math.hypot(dt,Gt)||1;a0(t,f(R,B,r),f(S,D,r),f(S,D,a),f(R,B,a),[-Gt/Nt,dt/Nt,0],m)}}}}var Ou=(t,e,o)=>n=>{let r=n-t;return o+Math.sqrt(Math.max(0,e*e-r*r))};function v6(t,e){let o=Z0.r,n=Z0.sill,r=Z0.spring,a=ie.z0,i=24,s=(p,f,v)=>[e+Math.cos(p)*f,v,a-Math.sin(p)*f];for(let p=0;p<i;p++){let f=Math.PI*p/i,v=Math.PI*(p+1)/i,m=[-Math.cos(f),0,Math.sin(f)],g=[-Math.cos(v),0,Math.sin(v)],x=[t.vert(s(f,o,n),m,Xo),t.vert(s(v,o,n),g,Xo),t.vert(s(v,o,r),g,Xo),t.vert(s(f,o,r),m,Xo)];t.tri(x[0],x[1],x[2]),t.tri(x[0],x[2],x[3])}let c=12,h=(p,f)=>[e+Math.cos(p)*Math.cos(f)*o,r+Math.sin(f)*o,a-Math.sin(p)*Math.cos(f)*o],l=(p,f)=>[-Math.cos(p)*Math.cos(f),-Math.sin(f),Math.sin(p)*Math.cos(f)];for(let p=0;p<i;p++)for(let f=0;f<c;f++){let v=Math.PI*p/i,m=Math.PI*(p+1)/i,g=Math.PI/2*f/c,x=Math.PI/2*(f+1)/c,y=[t.vert(h(v,g),l(v,g),Xa),t.vert(h(m,g),l(m,g),Xa),t.vert(h(m,x),l(m,x),Xa),t.vert(h(v,x),l(v,x),Xa)];t.tri(y[0],y[1],y[2]),t.tri(y[0],y[2],y[3])}for(let p=1;p<8;p++){let f=Math.PI*p/8,v=[];for(let m=0;m<=10;m++){let g=Math.PI/2*m/10*.97;v.push(h(f,g).map((x,y)=>x-l(f,g)[y]*.02))}t.tube(v,m=>.035*(1-m*.6),12,6,{mat:()=>Xa})}let d=t.vert([e,n,a],[0,1,0],Xo);for(let p=0;p<i;p++){let f=Math.PI*p/i,v=Math.PI*(p+1)/i;t.tri(d,t.vert(s(f,o,n),[0,1,0],Xo),t.vert(s(v,o,n),[0,1,0],Xo))}J0(t,e-o-.12,n-.1,a,e+o+.12,n+.02,a+.12,Xo),J0(t,e-o-.16,n-.2,a,e+o+.16,n-.1,a+.07,Xo);let u=.16;for(let p=0;p<i;p++){let f=Math.PI*p/i,v=Math.PI*(p+1)/i,m=(g,x,y)=>[e+Math.cos(g)*x,r+Math.sin(g)*x,y];a0(t,m(f,o,a+.05),m(v,o,a+.05),m(v,o+u,a+.05),m(f,o+u,a+.05),[0,0,1],Xo),a0(t,m(f,o+u,a),m(v,o+u,a),m(v,o+u,a+.05),m(f,o+u,a+.05),[Math.cos((f+v)/2),Math.sin((f+v)/2),0],Xo),a0(t,m(f,o,a),m(v,o,a),m(v,o,a+.05),m(f,o,a+.05),[-Math.cos((f+v)/2),-Math.sin((f+v)/2),0],Xo)}for(let p of[-1,1]){let f=e+p*o,v=e+p*(o+u);J0(t,f,n,a,v,r,a+.05,Xo),J0(t,f-p*.02,r-.12,a,v+p*.06,r,a+.09,Xo)}J0(t,e-.11,r+o-.04,a,e+.11,r+o+u+.1,a+.09,Xo),t.lathe([[.66,n,1],[.66,n+.06,1],[.62,n+.1],[.6,n+.3],[.64,n+.34,1],[.64,n+.4,1],[0,n+.4]],e,a-.62,40,{mat:()=>Xo})}var m6=Z0.sill+.4,g6=ie.z0-.62;function x6(t){a0(t,[14,0,ie.z0-ln],[ie.x1+ln,0,ie.z0-ln],[ie.x1+ln,0,ie.z1+ln],[14,0,ie.z1+ln],[0,1,0],Xo),t.curMat=gl,yl(t,{u0:14+ln,u1:ie.x1+2*ln,w0:ie.z0-2*ln,w1:ie.z0,top:()=>ie.spring,holes:rh.map(h=>({u0:h-Z0.r,u1:h+Z0.r,bottom:Z0.sill,head:Ou(h,Z0.r,Z0.spring),noReveal:!0})),mat:gl,cuts:[ie.x1]});for(let h of rh)v6(t,h);t.save(),t.translate(0,0,ie.z1),t.rotateY(Math.PI),t.translate(-(ie.x1+2*ln),0,-2*ln);let e=h=>ie.x1+2*ln-h;yl(t,{u0:e(ie.x1+2*ln),u1:e(13.65),w0:0,w1:2*ln,top:()=>ie.spring,holes:Br.map(h=>({u0:e(h+Ze.halfW),u1:e(h-Ze.halfW),bottom:Ze.sill,head:Ou(e(h),Ze.halfW,Ze.spring)})),mat:gl,revealMat:Xo}),t.restore(),t.save(),t.translate(ie.x1,0,0),t.rotateY(-Math.PI/2);let o=Zi.DOOR,n=ie.zc,r=o.r;yl(t,{u0:ie.z0-2*ln,u1:ie.z1+2*ln,w0:-2*ln,w1:0,top:h=>h<ie.z0||h>ie.z1?ie.spring:Qi(h),topStep:.15,holes:[{u0:n-r,u1:n+r,bottom:0,head:Ou(n,r,o.spring)}],mat:gl,revealMat:Xo}),t.restore(),t.save(),t.translate(14+ln,0,0),t.rotateY(-Math.PI/2),yl(t,{u0:ie.z0,u1:ie.z1,w0:-0,w1:2*ln,top:()=>Pu,topStep:.15,holes:[{u0:ie.z0,u1:ie.z1,bottom:0,head:h=>Qi(h)}],mat:gl,revealMat:Xo}),t.restore();let a=14+ln,i=Math.ceil((ie.x1-a)/1),s=28,c=[];for(let h=0;h<=i;h++){let l=a+(ie.x1-a)*h/i,d=[];for(let u=0;u<=s;u++){let p=ie.z0+(ie.z1-ie.z0)*u/s,f=Qi(p),v=[0,$u-f,ie.zc-p],m=Math.hypot(v[1],v[2]);d.push(t.vert([l,f,p],[0,v[1]/m,v[2]/m],Xa))}c.push(d)}for(let h=0;h<i;h++)for(let l=0;l<s;l++)t.tri(c[h][l],c[h+1][l],c[h][l+1]),t.tri(c[h+1][l],c[h+1][l+1],c[h][l+1])}function o2(t,e,o,n){let a=[];for(let i=0;i<=32;i++){let s=ie.z0+(ie.z1-ie.z0)*i/32,c=Qi(s),h=$u-c,l=ie.zc-s,d=Math.hypot(h,l),u=[c+h/d*n,s+l/d*n];a.push({y:c,z:s,iy:u[0],iz:u[1],n:[0,h/d,l/d]})}for(let i=0;i<32;i++){let s=a[i],c=a[i+1];a0(t,[e-o,s.iy,s.iz],[e+o,s.iy,s.iz],[e+o,c.iy,c.iz],[e-o,c.iy,c.iz],s.n,Xo),a0(t,[e-o,s.y,s.z],[e-o,s.iy,s.iz],[e-o,c.iy,c.iz],[e-o,c.y,c.z],[-1,0,0],Xo),a0(t,[e+o,s.iy,s.iz],[e+o,s.y,s.z],[e+o,c.y,c.z],[e+o,c.iy,c.iz],[1,0,0],Xo)}}function nh(t,e,o,n){let i=o,s=o+n*.16;J0(t,e-.28,0,i,e+.28,ie.spring-.3,s,Xo),J0(t,e-.28-.06,0,i,e+.28+.06,.32,o+n*(.16+.05),Xo),J0(t,e-.28-.05,ie.spring-.3,i,e+.28+.05,ie.spring-.1,o+n*(.16+.05),Xo),J0(t,e-.28-.1,ie.spring-.1,i,e+.28+.1,ie.spring,o+n*(.16+.1),Xo)}function y6(t,e){let o=Qi(ie.zc),n=[[0,o-.13,1],[.05,o-.125],[.12,o-.1],[.16,o-.06,1],[.22,o-.05],[.3,o-.075],[.4,o-.06],[.48,o-.03,1],[.55,o-.035],[.7,o-.025],[.82,o-.012,1],[.95,o+.03]];t.lathe(n,e,ie.zc,48,{mat:()=>Xa});for(let r=0;r<8;r++){let a=r*Math.PI/4,i=e+Math.cos(a)*.32,s=ie.zc+Math.sin(a)*.32;t.save(),t.translate(i,o-.07,s),t.rotateY(-a),t.curMat=Xa,t.ellipsoid([0,0,0],[.13,.03,.06],6,10),t.restore()}}function b6(t){t.curMat=Xo;for(let[e,o]of[[ie.z0,1],[ie.z1,-1]])J0(t,14.35,ie.spring-.12,e,ie.x1,ie.spring,e+o*.1,Xo),J0(t,14.35,ie.spring-.04,e,ie.x1,ie.spring+.05,e+o*.18,Xo);for(let[e,o]of[[ie.z0,1],[ie.z1,-1]])J0(t,14.35,0,e,ie.x1,.42,e+o*.12,Xo),J0(t,14.35,.42,e,ie.x1,.5,e+o*.07,Xo);for(let e of n2)o2(t,e,.24,.16),nh(t,e,ie.z0,1),nh(t,e,ie.z1,-1);for(let e of[14.35+.28,ie.x1-.28])o2(t,e,.28,.22),nh(t,e,ie.z0,1),nh(t,e,ie.z1,-1);for(let e of Br)y6(t,e)}function w6(t){let e=ie.z1+ln,o=e-.04,n=e+.04,r=(s,c,h,l)=>J0(t,s,c,o,h,l,n,xl),a=Ze.halfW,i=(s,c,h,l,d,u)=>{let p=(f,v,m)=>[s+v*Math.cos(f),Ze.spring+v*Math.sin(f),m];for(let f=0;f<u;f++){let v=l+(d-l)*f/u,m=l+(d-l)*(f+1)/u;a0(t,p(v,c,o),p(m,c,o),p(m,h,o),p(v,h,o),[0,0,-1],xl),a0(t,p(v,h,n),p(m,h,n),p(m,c,n),p(v,c,n),[0,0,1],xl)}};for(let s of Br){let c=s-a,h=s+a;r(c,Ze.sill,c+.07,Ze.spring),r(h-.07,Ze.sill,h,Ze.spring),r(c,Ze.sill,h,Ze.sill+.07),r(c,Ze.spring-.04,h,Ze.spring+.04);for(let d of[-.5,0,.5])r(s+d*a-.022,Ze.sill,s+d*a+.022,Ze.spring);let l=6;for(let d=1;d<l;d++){let u=Ze.sill+(Ze.spring-Ze.sill)*d/l;r(c,u-.02,h,u+.02)}i(s,a-.07,a,0,Math.PI,32),i(s,.42,.46,0,Math.PI,20);for(let d=1;d<6;d++){let u=Math.PI*d/6,p=Math.cos(u),f=Math.sin(u),v=.02,m=(g,x)=>[s+p*g-f*v*x,Ze.spring+f*g+p*v*x];a0(t,[...m(.44,-1),o],[...m(a-.05,-1),o],[...m(a-.05,1),o],[...m(.44,1),o],[0,0,-1],xl),a0(t,[...m(.44,1),n],[...m(a-.05,1),n],[...m(a-.05,-1),n],[...m(.44,-1),n],[0,0,1],xl)}}}function _6(){let t=[],e=ie.z1+ln;for(let o of Br){let n=o-Ze.halfW,r=o+Ze.halfW;t.push([n,Ze.sill,e],[r,Ze.sill,e],[r,Ze.spring,e],[n,Ze.sill,e],[r,Ze.spring,e],[n,Ze.spring,e]);for(let a=0;a<24;a++){let i=Math.PI*a/24,s=Math.PI*(a+1)/24;t.push([o,Ze.spring,e],[o+Ze.halfW*Math.cos(i),Ze.spring+Ze.halfW*Math.sin(i),e],[o+Ze.halfW*Math.cos(s),Ze.spring+Ze.halfW*Math.sin(s),e])}}return t}function r2(t,e){t.save(),t.translate(ie.x1+ln,0,ie.zc-7),t.rotateY(-Math.PI/2),e(),t.restore()}function M6(t){r2(t,()=>{Zi.addSurround(t),Zi.addFrames(t,"fixed")})}function k6(t){return Zi.glassPanes(t||"fixed").map(([o,n,r])=>[ie.x1+ln-r,n,ie.zc-7+o])}function S6(t){x6(t),b6(t),w6(t),M6(t),t.curMat=[0,0,0]}var E6={x:ie.x1+ln,zLo:ie.zc-Zi.DOOR.r,zHi:ie.zc+Zi.DOOR.r},Ro=t=>t.toFixed(4);function z6(){return`
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
		float k = floor((q.x - ${Ro(Ze.first)}) / ${Ro(Ze.pitch)} + 0.5);
		if (k < 0.0 || k > ${Ro(Ze.count-1)}) return 0.0;
		float dx = q.x - (${Ro(Ze.first)} + k * ${Ro(Ze.pitch)});
		float side = 1.0 - smoothstep(${Ro(Ze.halfW)} - soft, ${Ro(Ze.halfW)} + soft, abs(dx));
		float sill = smoothstep(${Ro(Ze.sill)} - soft, ${Ro(Ze.sill)} + soft, q.y);
		float r = length(vec2(dx, q.y - ${Ro(Ze.spring)}));
		float head = q.y < ${Ro(Ze.spring)} ? 1.0 : 1.0 - smoothstep(${Ro(Ze.halfW)} - soft, ${Ro(Ze.halfW)} + soft, r);
		float open = side * sill * head;
		// the black glazing bars, softly
		float cover = 0.0;
		cover = max(cover, winBar(abs(dx), 0.022, soft));
		cover = max(cover, winBar(abs(abs(dx) - ${Ro(Ze.halfW*.5)}), 0.022, soft));
		float rowH = ${Ro((Ze.spring-Ze.sill)/6)};
		float ry = (q.y - ${Ro(Ze.sill)}) / rowH;
		cover = max(cover, q.y < ${Ro(Ze.spring)} ? winBar(abs(fract(ry + 0.5) - 0.5) * rowH, 0.02, soft) : 0.0);
		cover = max(cover, q.y > ${Ro(Ze.spring)} ? winBar(abs(r - 0.44), 0.02, soft) : 0.0);
		return open * (1.0 - cover * 0.75);
	}

	// daylight reaching point p from the windows
	float windowLight(vec3 p, vec3 n) {
		if (p.x < ${Ro(ie.x0)} || p.z < ${Ro(ie.z0-.1)} || p.z > ${Ro(ie.z1)}) return 0.0;
		float ndl = max(dot(n, WIN_SKY), 0.0);
		if (ndl <= 0.0) return 0.0;
		float tIn = (${Ro(ie.z1)} - p.z) / WIN_SKY.z;
		float tOut = (${Ro(ie.z1+2*ln)} - p.z) / WIN_SKY.z;
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
		${rh.map(t=>`{ float d = abs(p.x - ${Ro(t)}); if (d < best) { best = d; lamp = vec3(${Ro(t)}, ${Ro(Z0.spring+.55)}, ${Ro(ie.z0-.15)}); } }`).join(`
		`)}
		return lamp;
	}

	float nicheLight(vec3 p, vec3 n) {
		if (p.z > ${Ro(ie.z0+1.6)} || p.z < ${Ro(ie.z0-Z0.r-.1)} || p.x < ${Ro(ie.x0)}) return 0.0;
		vec3 lamp = nicheLamp(p);
		vec3 d = lamp - p;
		float dist = length(d);
		vec3 L = d / dist;
		// a cone pointing down into the niche
		float cone = smoothstep(0.35, 0.75, dot(-L, normalize(vec3(0.0, -1.0, 0.35))));
		float inside = 1.0 - smoothstep(${Ro(Z0.r)}, ${Ro(Z0.r+.5)}, abs(p.x - lamp.x));
		return max(dot(n, L), 0.0) * cone * inside / (1.0 + 0.35 * dist * dist);
	}

	// soft general daylight in the corridor, strongest near the glass
	float corridorGlow(vec3 p) {
		if (p.x < ${Ro(ie.x0-1)}) return 0.0;
		float inC = smoothstep(${Ro(ie.z0-1.5)}, ${Ro(ie.z0)}, p.z) * smoothstep(${Ro(ie.x0-1)}, ${Ro(ie.x0+1)}, p.x);
		float near = 0.55 + 0.45 * smoothstep(${Ro(ie.z0)}, ${Ro(ie.z1)}, p.z);
		return inC * near;
	}`}a2.exports={wallWithHoles:yl,windowLightGLSL:z6,addWing:S6,windowGlass:_6,farDoorGlass:k6,atFarDoor:r2,FAR_DOOR:E6,vaultY:Qi,C:ie,NICHE_X:rh,NICHE:Z0,NICHE_PLINTH_TOP:m6,NICHE_STATUE_Z:g6,WIN:Ze,winCentres:Br,piers:n2,PAINTING_X:p6,HEIGHT:Pu}});var Ar=Et((Ez,c2)=>{"use strict";var Iu=M0(),rn=8,ec=.35,Bs=14,tc=4,ke={x0:Bs+ec,x1:Bs+ec+2*tc,z0:5.9-tc,z1:5.9+tc,zc:5.9,cx:Bs+ec+tc,arch:{r:2.6,spring:4.4},dome:{r:3.3,base:rn},oculus:3.3};ke.domeTop=ke.dome.base+ke.dome.r;var oc={spokes:16,ringE:[.42,.95],bar:.035},Xn={sxz:1.32,sy:1.6,yaw:.6};Xn.crownC=[ke.cx,.4+3.4*Xn.sy,ke.zc];Xn.crownR=[2.3*Xn.sxz,1.9*Xn.sy,2.3*Xn.sxz];Xn.trunkR=.26*Xn.sxz;Xn.trunkTop=.4+2.2*Xn.sy;var s2={inner:1.05,outer:1.62,seat:.48,soil:.4},ih=(()=>{let t=[.2,1,-.15],e=Math.hypot(...t);return t.map(o=>o/e)})(),s0=[0,0,0],Ji=[11,0,0],ah=[10,0,0],sh=[9,0,0],A6=[5,0,0],qu=[3,0,0];function za(t,e,o,n,r,a,i){let s=t.vert(e,a,i),c=t.vert(o,a,i),h=t.vert(n,a,i),l=t.vert(r,a,i);t.tri(s,c,h),t.tri(s,h,l)}function G0(t,e,o,n,r,a,i,s){t.box(Math.min(e,r),Math.min(o,a),Math.min(n,i),Math.max(e,r),Math.max(o,a),Math.max(n,i),s)}var T6=(t,e,o)=>n=>{let r=n-t;return o+Math.sqrt(Math.max(0,e*e-r*r))};function L6(t){t.save(),t.translate(Bs+ec,0,0),t.rotateY(-Math.PI/2),Iu.wallWithHoles(t,{u0:0,u1:Iu.C.z0,w0:0,w1:2*ec,top:()=>rn,holes:[{u0:ke.zc-ke.arch.r,u1:ke.zc+ke.arch.r,bottom:0,head:T6(ke.zc,ke.arch.r,ke.arch.spring),step:.05}],mat:Ji,revealMat:s0,topStep:1}),t.restore();let e=Bs-ec;for(let[i,s]of[[0,ke.zc-ke.arch.r],[ke.zc+ke.arch.r,Iu.C.z0]])G0(t,e-.12,0,i,e,.42,s,s0),G0(t,e-.07,.42,i,e,.5,s,s0);let o=e,n=.24,r=40,a=(i,s,c)=>[c,ke.arch.spring+Math.sin(i)*s,ke.zc+Math.cos(i)*s];for(let i=0;i<r;i++){let s=Math.PI*i/r,c=Math.PI*(i+1)/r;za(t,a(s,ke.arch.r,o-.07),a(c,ke.arch.r,o-.07),a(c,ke.arch.r+n,o-.07),a(s,ke.arch.r+n,o-.07),[-1,0,0],s0),za(t,a(s,ke.arch.r+n,o),a(c,ke.arch.r+n,o),a(c,ke.arch.r+n,o-.07),a(s,ke.arch.r+n,o-.07),[0,Math.sin((s+c)/2),Math.cos((s+c)/2)],s0),za(t,a(s,ke.arch.r,o),a(c,ke.arch.r,o),a(c,ke.arch.r,o-.07),a(s,ke.arch.r,o-.07),[0,-Math.sin((s+c)/2),-Math.cos((s+c)/2)],s0)}G0(t,o-.12,ke.arch.spring+ke.arch.r-.06,ke.zc-.17,o,ke.arch.spring+ke.arch.r+n+.16,ke.zc+.17,s0);for(let i of[-1,1]){let s=ke.zc+i*ke.arch.r,c=ke.zc+i*(ke.arch.r+n);G0(t,o-.07,0,s,o,ke.arch.spring,c,s0),G0(t,o-.13,ke.arch.spring-.16,s-i*.03,o,ke.arch.spring,c+i*.08,s0),G0(t,o-.12,0,s-i*.03,o,.5,c+i*.06,s0)}}function N6(t){let{x0:e,x1:o,z0:n,z1:r}=ke;za(t,[Bs,0,n],[o,0,n],[o,0,r],[Bs,0,r],[0,1,0],s0),t.curMat=Ji,za(t,[o,0,n],[o,0,r],[o,rn,r],[o,rn,n],[-1,0,0],Ji),za(t,[e,0,n],[o,0,n],[o,rn,n],[e,rn,n],[0,0,1],Ji),za(t,[o,0,r],[e,0,r],[e,rn,r],[o,rn,r],[0,0,-1],Ji),za(t,[e,0,r],[e,0,n],[e,rn,n],[e,rn,r],[1,0,0],Ji),G0(t,o-.12,0,n,o,.42,r,s0),G0(t,e,0,n,o,.42,n+.12,s0),G0(t,e,0,r-.12,o,.42,r,s0),G0(t,o-.2,rn-.3,n,o,rn,r,s0),G0(t,e,rn-.3,n,o,rn,n+.2,s0),G0(t,e,rn-.3,r-.2,o,rn,r,s0),G0(t,e,rn-.3,n,e+.2,rn,r,s0);let a=ke.dome.r,i=48,s=[];for(let g=0;g<=i;g++){let x=Math.PI*2*g/i;s.push([ke.cx+Math.cos(x)*a,ke.zc+Math.sin(x)*a])}let c=g=>{let x=Math.abs(Math.cos(g)),y=Math.abs(Math.sin(g));return Math.min(tc/Math.max(x,1e-6),tc/Math.max(y,1e-6))};for(let g=0;g<i;g++){let x=Math.PI*2*g/i,y=Math.PI*2*(g+1)/i,w=c(x),M=c(y),_=[ke.cx+Math.cos(x)*w,rn,ke.zc+Math.sin(x)*w],S=[ke.cx+Math.cos(y)*M,rn,ke.zc+Math.sin(y)*M];za(t,[s[g][0],rn,s[g][1]],[s[g+1][0],rn,s[g+1][1]],S,_,[0,-1,0],ah)}t.lathe([[a+.02,rn-.18,1],[a-.12,rn-.18,1],[a-.12,rn-.06,1],[a-.05,rn,1],[a,rn+.02]],ke.cx,ke.zc,i,{mat:()=>s0});let h=16,l=(g,x,y)=>[ke.cx+Math.cos(g)*Math.cos(x)*y,ke.dome.base+Math.sin(x)*y,ke.zc+Math.sin(g)*Math.cos(x)*y],d=Math.PI/2;for(let g=0;g<i;g++)for(let x=0;x<h;x++){let y=Math.PI*2*g/i,w=Math.PI*2*(g+1)/i,M=d*x/h,_=d*(x+1)/h,S=(N,G)=>[-Math.cos(N)*Math.cos(G),-Math.sin(G),-Math.sin(N)*Math.cos(G)],R=[t.vert(l(y,M,a),S(y,M),sh),t.vert(l(w,M,a),S(w,M),sh),t.vert(l(w,_,a),S(w,_),sh),t.vert(l(y,_,a),S(y,_),sh)];t.tri(R[0],R[1],R[2]),t.tri(R[0],R[2],R[3])}for(let g=0;g<oc.spokes;g++){let x=Math.PI*2*g/oc.spokes,y=[];for(let w=0;w<=14;w++)y.push(l(x,(d-.06)*w/14,a-.04));t.tube(y,()=>.04,20,6,{mat:()=>ah})}for(let g of oc.ringE){let x=Math.cos(g)*(a-.04),y=ke.dome.base+Math.sin(g)*(a-.04),w=[];for(let M=0;M<=72;M++){let _=Math.PI*2*M/72;w.push([ke.cx+Math.cos(_)*x,y,ke.zc+Math.sin(_)*x])}t.tube(w,()=>.035,72,6,{mat:()=>ah})}t.ellipsoid([ke.cx,ke.dome.base+a-.06,ke.zc],[.16,.08,.16],6,12,{mat:()=>ah});let u=.46,p=.55,f=.12,v=(g,x,y,w)=>{G0(t,g,u-.08,x,y,u,w,qu);let M=y-g>w-x?[g+.25,y-.25]:[g+.06,y-.06],_=y-g>w-x?[x+.06,w-.06]:[x+.25,w-.25];G0(t,M[0],0,_[0],M[1],u-.08,_[1],qu)};v(o-f-p,n+1.1,o-f,r-1.1),v(e+1,n+f,o-1.1,n+f+p),v(e+1,r-f-p,o-1.1,r-f);let m=s2;t.lathe([[m.outer,0,1],[m.outer,m.seat-.1,1],[m.outer+.07,m.seat-.07,1],[m.outer+.07,m.seat,1],[m.inner-.05,m.seat,1],[m.inner-.05,m.seat-.06,1],[m.inner,m.seat-.08,1],[m.inner,m.soil]],ke.cx,ke.zc,64,{mat:()=>qu}),t.lathe([[m.inner,m.soil,1],[0,m.soil+.03]],ke.cx,ke.zc,48,{mat:()=>A6})}function R6(t){L6(t),N6(t),t.curMat=[0,0,0]}var Yo=t=>t.toFixed(4);function i2(){let t=ke.dome.r,e=oc.ringE.map(o=>Math.cos(o)*t);return`
	const vec3 SHAFT = vec3(${Yo(ih[0])}, ${Yo(ih[1])}, ${Yo(ih[2])});

	// how much sun the glass dome lets through towards p (0..1): the round
	// opening, less the soft shadows of its ribs and rings (worked out on
	// the dome's base, where the frame is seen almost straight on)
	float oculusOpen(vec3 p) {
		float t = (${Yo(ke.dome.base+.6)} - p.y) / SHAFT.y;
		vec3 q = p + SHAFT * t;
		vec2 d2 = q.xz - vec2(${Yo(ke.cx)}, ${Yo(ke.zc)});
		float d = length(d2);
		float soft = 0.02 + 0.012 * t;
		float open = 1.0 - smoothstep(${Yo(t-.15)} - soft, ${Yo(t-.15)} + soft, d);
		float hw = ${Yo(oc.bar)};
		float cover = 0.0;
		${e.map(o=>`cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, abs(d - ${Yo(o)})));`).join(`
		`)}
		float ang = atan(d2.y, d2.x);
		float stp = ${Yo(Math.PI*2/oc.spokes)};
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
			vec2 o = p.xz - vec2(${Yo(ke.cx)}, ${Yo(ke.zc)});
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
		if (p.x < ${Yo(ke.x0-.75)} || p.z < ${Yo(ke.z0-.5)} || p.z > ${Yo(ke.z1+.5)}) return 0.0;
		float ndl = max(dot(n, SHAFT), 0.0);
		if (ndl <= 0.0) return 0.0;
		return ndl * oculusOpen(p) * treeShade(p);
	}

	// soft daylight filling the court, brightest under the dome
	float alcoveGlow(vec3 p) {
		if (p.x < ${Yo(ke.x0-1.5)} || p.z < ${Yo(ke.z0-1.5)} || p.z > ${Yo(ke.z1+1.5)}) return 0.0;
		float inside = smoothstep(${Yo(ke.x0-1.2)}, ${Yo(ke.x0+.6)}, p.x);
		float d = length(p.xz - vec2(${Yo(ke.cx)}, ${Yo(ke.zc)}));
		return inside * (0.55 + 0.45 * smoothstep(0.0, 8.0, p.y)) * (1.0 - 0.35 * smoothstep(1.0, 5.0, d));
	}`}c2.exports={addAlcove:R6,alcoveLightGLSL:O6,oculusGLSL:i2,A:ke,BENCH:s2,SHAFT:ih,TREE:Xn}});var i0=Et((zz,f2)=>{"use strict";var jr=0;try{let t=location.search;/[?&]night\b/.test(t)&&(jr=1)}catch(t){}var Aa=jr,Du=0,l2=[],ch={tick(t){let e=Du?Math.min(.1,t-Du):0;if(Du=t,Aa!==jr){let o=e/2.4;Aa=jr>Aa?Math.min(jr,Aa+o):Math.max(jr,Aa-o)}return ch.night},get night(){return Aa*Aa*(3-2*Aa)},get isNight(){return jr===1},get settled(){return Aa===jr},set(t){jr=t?1:0,l2.forEach(e=>e(jr))},toggle(){ch.set(!jr)},onChange(t){l2.push(t)}};ch.GLSL=`
uniform float night;
vec3 toNight(vec3 c, float keep) {
	float l = dot(c, vec3(0.299, 0.587, 0.114));
	vec3 n = mix(vec3(l), c, 0.35) * vec3(0.55, 0.70, 1.05) * keep;
	return mix(c, n, night);
}
`;f2.exports=ch});var Ka=Et((Az,_l)=>{"use strict";var Fu=i0(),{C:Gu}=M0(),{A:lh,BENCH:bl}=Ar(),Yn=Math.PI,C6=[18,29,40],fh=.575,Ya=[],wl=(t,e,o,n,r,a,i)=>Ya.push(Object.assign({x:t,y:e,z:o,o:n,back:r,hw:a,s:1,k:1,range:7,mount:"wall"},i||{}));C6.forEach(t=>{wl(1.25+fh+.48,3.25,t,[1,0],.48,fh,{s:1.2}),wl(12.75-fh-.48,3.25,t,[-1,0],.48,fh,{s:1.2})});[3,11].forEach(t=>wl(t,3.45,Gu.hallEnd-.5,[0,-1],.5,99,{s:1.2}));var P6=[14.63,19.63,24.03,28.43,32.83,Gu.x1-.28];P6.forEach(t=>wl(t,3.15,Gu.z0+.16+.44,[0,1],.44,.28));[3,8.8].forEach(t=>wl(.35+.44,2.75,t,[1,0],.44,99));{let t=(bl.inner+bl.outer)/2,e=Math.atan2(-1.12,-.98);Ya.push({x:lh.cx+Math.cos(e)*t,y:bl.seat+.155,z:lh.zc+Math.sin(e)*t,o:[Math.cos(e),Math.sin(e)],back:0,hw:0,ring:[lh.cx,lh.zc,bl.outer+.07,bl.seat],s:.52,k:2.2,range:3.6,mount:"table"})}var Hu=.13,hh=.21,c0=Hu/Math.cos(Yn/6),Uo=t=>t.toFixed(4);function h2(t){let o=(t||Ya.map((n,r)=>r)).map(n=>{let r=Ya[n],a=-r.o[1],i=r.o[0],s=r.mount==="table"?`
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
						float side = abs(dot(D.xz, vec2(${Uo(a)}, ${Uo(i)}))) * ${Uo(r.back)} / behind;
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
					${c}${s}
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
		float V = (q.y / h) * (${Uo(Hu/hh)} / cos(t));
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
	}`}var fn=0,$6=1;function I6(){let t=[],e=[],o=[],n=[],r=[],a=(p,f,v,m)=>(t.push(p[0],p[1],p[2]),e.push(f[0],f[1],f[2]),o.push(v),n.push(m?m[0]:0,m?m[1]:0),t.length/3-1),i=(p,f)=>[p[0]-f[0],p[1]-f[1],p[2]-f[2]],s=(p,f)=>[p[1]*f[2]-p[2]*f[1],p[2]*f[0]-p[0]*f[2],p[0]*f[1]-p[1]*f[0]],c=p=>{let f=Math.hypot(p[0],p[1],p[2])||1;return[p[0]/f,p[1]/f,p[2]/f]};function h(p,f,v,m,g,x){let y=c(s(i(f,p),i(m,p))),w=a(p,y,g,[0,0]),M=a(f,y,g,[1,0]),_=a(v,y,g,[1,1]),S=a(m,y,g,[0,1]);r.push(w,M,_,w,_,S),x&&r.push(w,_,M,w,S,_)}function l(p,f,v){for(let x=0;x<p.length;x++){let y=p[Math.max(0,x-1)],w=p[Math.min(p.length-1,x+1)],M=c(i(w,y)),_=Math.abs(M[1])>.9?[1,0,0]:[0,1,0],S=c(s(M,_)),R=s(S,M),N=typeof f=="function"?f(x/(p.length-1)):f;for(let G=0;G<=6;G++){let q=G/6*Yn*2,V=Math.cos(q),D=Math.sin(q),B=[S[0]*V+R[0]*D,S[1]*V+R[1]*D,S[2]*V+R[2]*D];a([p[x][0]+B[0]*N,p[x][1]+B[1]*N,p[x][2]+B[2]*N],B,v)}}let g=t.length/3-p.length*7;for(let x=0;x<p.length-1;x++)for(let y=0;y<6;y++){let w=g+x*7+y,M=w+6+1;r.push(w,M,w+1,w+1,M,M+1)}}function d(p,f,v,m,g,x,y,w,M){let _=(S,R,N)=>{let G=x+Yn/6+N*Yn/3;return[p[0]+Math.cos(G)*S,R,p[2]+Math.sin(G)*S]};for(let S=0;S<6;S++)h(_(m,f,S+1),_(m,f,S),_(g,v,S),_(g,v,S+1),y);if(w&&g>0)for(let S=0;S<6;S++){let R=a([p[0],v,p[2]],[0,1,0],y),N=a(_(g,v,S),[0,1,0],y),G=a(_(g,v,S+1),[0,1,0],y);r.push(R,G,N)}if(M&&m>0)for(let S=0;S<6;S++){let R=a([p[0],f,p[2]],[0,-1,0],y),N=a(_(m,f,S),[0,-1,0],y),G=a(_(m,f,S+1),[0,-1,0],y);r.push(R,N,G)}}function u(p,f,v,m,g,x,y){let w=[];for(let _=0;_<=18;_++){let S=_/18,R=(y||0)+S*m*Yn*2,N=v*(1-.75*S);w.push([p[0]+f[0]*Math.cos(R)*N,p[1]+Math.sin(R)*N,p[2]+f[2]*Math.cos(R)*N])}l(w,g,x)}return Ya.forEach(p=>{let f=p.s,v=Math.atan2(p.o[1],p.o[0]),m=[p.x,p.y,p.z],g=(w,M,_)=>[p.x+p.o[0]*w-p.o[1]*(_||0),p.y+M,p.z+p.o[1]*w+p.o[0]*(_||0)],x=p.y-hh*f,y=p.y+hh*f;for(let w=0;w<6;w++){let M=v+Yn/6+w*Yn/3,_=M+Yn/3,S=c0*f*.97,R=[p.x+Math.cos(M)*S,x,p.z+Math.sin(M)*S],N=[p.x+Math.cos(_)*S,x,p.z+Math.sin(_)*S];h(N,R,[R[0],y,R[2]],[N[0],y,N[2]],$6,!0)}for(let w=0;w<6;w++){let M=v+Yn/6+w*Yn/3,_=c0*f;l([[p.x+Math.cos(M)*_,x-.02*f,p.z+Math.sin(M)*_],[p.x+Math.cos(M)*_,y+.02*f,p.z+Math.sin(M)*_]],.011*f,fn)}d(m,x-.035*f,x,c0*f*1.12,c0*f*1.12,v,fn,!0,!0),d(m,x-.1*f,x-.035*f,c0*f*.55,c0*f*1,v,fn,!1,!0),d(m,x-.17*f,x-.1*f,0,c0*f*.55,v,fn,!1,!1);for(let w=0;w<6;w++){let M=v+w*Yn/3,_=Hu*f*1.06,S=[p.x+Math.cos(M)*_,x-.06*f,p.z+Math.sin(M)*_];u(S,[-Math.sin(M),0,Math.cos(M)],.03*f,.85,.004*f,fn,.3)}d(m,y,y+.03*f,c0*f*1.14,c0*f*1.14,v,fn,!1,!0),d(m,y+.03*f,y+.2*f,c0*f*1.14,c0*f*.32,v,fn,!1,!1),d(m,y+.2*f,y+.27*f,c0*f*.34,c0*f*.34,v,fn,!1,!1),d(m,y+.27*f,y+.37*f,c0*f*.42,0,v,fn,!1,!0),l([[p.x,y+.36*f,p.z],[p.x,y+.47*f,p.z]],w=>.01*f*(1-.7*w),fn),d([p.x,0,p.z],y+.44*f,y+.47*f,.018*f,0,v,fn,!1,!0);for(let w=0;w<6;w++){let M=v+Yn/6+w*Yn/3,_=c0*f*1.14,S=[p.x+Math.cos(M)*_,y+.03*f,p.z+Math.sin(M)*_];l([S,[S[0],S[1]+.09*f,S[2]]],R=>.008*f*(1-.8*R),fn),d([S[0],0,S[2]],S[1]+.035*f,S[1]+.06*f,.014*f,.014*f,M,fn,!0,!0)}if(p.mount==="wall"){let w=p.back,M=x-.32,_=g(-w,0,0);((q,V,D)=>{let B=[p.o[0],0,p.o[1]],dt=[-p.o[1],0,p.o[0]],Gt=(ot,Bt,ze)=>[_[0]+dt[0]*ot+B[0]*ze,Bt,_[2]+dt[2]*ot+B[2]*ze],Nt=.03,xt=.065;h(Gt(-D,q,xt),Gt(D,q,xt),Gt(D,V,xt),Gt(-D,V,xt),fn,!0),h(Gt(D,q,Nt),Gt(D,q,xt),Gt(D,V,xt),Gt(D,V,Nt),fn,!0),h(Gt(-D,q,xt),Gt(-D,q,Nt),Gt(-D,V,Nt),Gt(-D,V,xt),fn,!0),h(Gt(-D,V,xt),Gt(D,V,xt),Gt(D,V,Nt),Gt(-D,V,Nt),fn,!0),h(Gt(-D,q,Nt),Gt(D,q,Nt),Gt(D,q,xt),Gt(-D,q,xt),fn,!0),d([_[0]+B[0]*xt,0,_[2]+B[2]*xt],V,V+.05,D*.6,0,v,fn,!1,!0),d([_[0]+B[0]*xt,0,_[2]+B[2]*xt],q-.05,q,0,D*.6,v,fn,!1,!1)})(M-.2,M+.2,.07);let R=[];for(let q=0;q<=14;q++){let V=q/14,D=-w+.05+V*(w-.05),B=M+.04+(x-.17*f-M-.04)*Math.pow(V,2.2);R.push(g(D,B-p.y,0))}l(R,q=>.022*(1-.3*q),fn);let N=[];for(let q=0;q<=10;q++){let V=q/10;N.push(g(-w+.05+V*w*.6,M-.14+V*.16+.05*Math.sin(V*Yn)-p.y,0))}l(N,.009,fn);let G=N[N.length-1];u([G[0]-p.o[0]*.03,G[1]+.02,G[2]-p.o[1]*.03],[p.o[0],0,p.o[1]],.045,1.1,.007,fn,-.4),[.3,.55].forEach(q=>{let V=R[Math.round(q*14)],D=N[Math.round(q/.62*10)]||N[10];l([V,D],.006,fn)}),[-1,1].forEach(q=>{let V=g(-.05,-hh*f-.2*f,0);u([V[0]-p.o[1]*q*.05,V[1],V[2]+p.o[0]*q*.05],[-p.o[1]*q,0,p.o[0]*q],.05*f,.9,.006,fn,Yn)})}else for(let w=0;w<3;w++){let M=v+w*Yn*2/3,_=[p.x+Math.cos(M)*c0*f*.7,x-.035*f,p.z+Math.sin(M)*c0*f*.7],S=[p.x+Math.cos(M)*c0*f*1.25,x-.17*f,p.z+Math.sin(M)*c0*f*1.25];l([_,S],.012*f,fn)}}),{pos:t,nrm:e,kind:o,uv:n,elems:r}}_l.exports=t=>{let e=I6(),o=t({vert:`
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
		}`,attributes:{position:e.pos,normal:e.nrm,kind:e.kind,uv:e.uv},elements:e.elems,uniforms:{time:t.context("time"),night:()=>Fu.night}}),n=[],r=[];Ya.forEach((i,s)=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(c=>{n.push(c[0],c[1]),r.push(i.x,i.y,i.z,i.s+s*.001)})});let a=t({vert:`
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
		}`,attributes:{corner:n,at:r},count:n.length/2,uniforms:{time:t.context("time"),night:()=>Fu.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o(),Fu.night>.01&&a()}};_l.exports.lanternGLSL=h2;_l.exports.LANTERNS=Ya;_l.exports.TREE_LANTERN=[Ya.length-1]});var Ja=Et((Tz,tr)=>{"use strict";var q6=i0(),jo=Math.PI,Kn=t=>(+t).toFixed(4),D6=t=>`vec3(${Kn(t[0])}, ${Kn(t[1])}, ${Kn(t[2])})`,oo={x:-7,z:44.5},go=5.2,g0=15,Le={z0:42.6,z1:46.4,zc:44.5,spring:4,r:1.9},la={z0:42.2,z1:46.8,top:6.3,x:.35},ph=[oo.x-Math.sqrt(go*go-3.05*3.05),0,0],Rn={x0:-2.05+ph[0],x1:ph[0],z0:41.45,z1:47.55,top:4.3},Uu=[[Rn.x1+.05,2.35,Rn.z0-.45],[Rn.x1+.05,2.35,Rn.z1+.45]].map(([t,e,o])=>{let n=Math.atan2(o-oo.z,t-oo.x);return[oo.x+Math.cos(n)*(go-.16),e,oo.z+Math.sin(n)*(go-.16)]}),Fo={ri:3.4,ro:go,a0:-35*jo/180,rise:.1836,step:3.6*jo/180,n:88,thick:.36};Fo.k=Fo.rise/Fo.step;var H0=t=>Fo.a0-t,Za=t=>t*Fo.k,vn={x:oo.x+.1,z:oo.z-.15,yaw:-jo/2,scale:1.3},Ta=vn.scale/1.1,Ml={keyX0:vn.x-.524*Ta,keyX1:vn.x+.491*Ta,keyTop:.647*Ta,keyFront:vn.z+.808*Ta,keyBack:vn.z+.72*Ta,stoolX:vn.x-.041*Ta,stoolZ:vn.z+1.122*Ta,stoolFront:vn.z+.96*Ta,stoolTop:.37*Ta,heading:jo},dh=[[3.6,44.5],[.6,44.5],[-2.2,44.7],[-4.5,46.5],[-7,47.2],[-9.4,46.6],[-10.5,44.9],[-10.9,43.2]];function d2(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let o=e;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function F6(t,e){let o=1e9;for(let n=0;n<dh.length-1;n++){let[r,a]=dh[n],[i,s]=dh[n+1],c=i-r,h=s-a,l=Math.max(0,Math.min(1,((t-r)*c+(e-a)*h)/(c*c+h*h)));o=Math.min(o,Math.hypot(t-r-c*l,e-a-h*l))}return o}var uh=t=>Le.spring+Math.sqrt(Math.max(0,Le.r*Le.r-(t-Le.zc)*(t-Le.zc))),Qa=t=>oo.x+Math.sqrt(Math.max(0,go*go-(t-oo.z)*(t-oo.z)));function nc(t,e){return Math.hypot(t-oo.x,e-oo.z)<go||t<=0&&t>oo.x&&e>Le.z0&&e<Le.z1||t>Rn.x0&&t<Rn.x1&&e>Rn.z0&&e<Rn.z1}function G6(t,e){if(Math.hypot(t-oo.x,e-oo.z)<Fo.ri-.05)return 99;let n=Math.atan2(e-oo.z,t-oo.x),r=Fo.a0-n;for(;r<0;)r+=2*jo;for(;r>=2*jo;)r-=2*jo;return r>Fo.n*Fo.step?99:Za(r)-Fo.thick}function H6(){let t=[],e=d2(1729),o=(a,i,s)=>{for(let c=Math.max(0,t.length-400);c<t.length;c++){let h=t[c];if(!(h[1]>.01)&&Math.hypot(h[0]-a,h[2]-i)<s+h[3]+.012)return!0}return!1},n=(a,i)=>{let s=a-vn.x,c=i-vn.z,h=Math.cos(vn.yaw),l=Math.sin(vn.yaw),d=(h*s-l*c)/vn.scale,u=(l*s+h*c)/vn.scale;return d>-1.05&&d<1.3&&u>-.7&&u<.72},r=0;for(;t.length<980&&r<6e4;){r++;let i=e()<.55?1.25+e()*2.1:1.25+Math.sqrt(e())*(go-1.45),s=e()*2*jo,c=oo.x+Math.cos(s)*i,h=oo.z+Math.sin(s)*i;if(!nc(c,h)||i>go-.18||n(c,h)||F6(c,h)<.62||G6(c,h)<2.3||c<Rn.x1+.9)continue;let l=.022+e()*.02;if(o(c,h,l))continue;let d=e()<.15?.22+e()*.14:.05+e()*.15;t.push([c,0,h,l,d,e()*100])}for(let a=1;a<26;a++){let i=a<12?3:2;for(let s=0;s<i;s++){let c=(a+.25+e()*.5)*Fo.step,h=H0(c),l=Fo.ri+.55+e()*(Fo.ro-Fo.ri-.75),d=.022+e()*.016;t.push([oo.x+Math.cos(h)*l,(a+1)*Fo.rise,oo.z+Math.sin(h)*l,d,.05+e()*.14,e()*100])}}for(let a of Uu)for(let[i,s,c]of[[0,0,.26],[.06,.05,.18],[-.05,-.04,.14]])t.push([a[0]+i,a[1],a[2]+s,.024,c,e()*100]);for(let a of[Rn.z0-.35,Rn.z1+.35])for(let i=0;i<9;i++){let s=Rn.x1+.35+e()*.5,c=a+(e()-.5)*.5;Math.hypot(s-oo.x,c-oo.z)>go-.15||t.push([s,0,c,.026+e()*.014,.18+e()*.3,e()*100])}return t}function U6(t){let o=d2(77),n=[];for(let r=0;r<14;r++){let a=t[Math.floor(o()*t.length)];n.push([a[0],a[1]+a[4],a[2]])}for(let r=0;r<12;r++){let a=n.map(()=>[0,0,0,0]);for(let i of t){let s=[i[0],i[1]+i[4],i[2]],c=0,h=1e9;n.forEach((l,d)=>{let u=(s[0]-l[0])**2+(s[1]-l[1])**2*4+(s[2]-l[2])**2;u<h&&(h=u,c=d)}),a[c][0]+=s[0],a[c][1]+=s[1],a[c][2]+=s[2],a[c][3]++}n=a.map((i,s)=>i[3]?[i[0]/i[3],i[1]/i[3],i[2]/i[3],i[3]]:n[s])}return n.filter(r=>r[3]>0).map(r=>[r[0],r[1]+.12,r[2],r[3]/t.length])}var Bu=H6(),u2=U6(Bu.filter(t=>t[1]<2||t[1]>2.5)).concat(Uu.map(t=>[t[0],t[1]+.35,t[2],.035]));function p2(){return`
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
		col += sky * (0.35 + 0.65 * up) * (0.55 + 0.45 * max(N.y, 0.0)) * (0.6 + 0.4 * max(-dot(N, normalize(p - vec3(${Kn(oo.x)}, ${Kn(g0)}, ${Kn(oo.z)}))), 0.0));
		// and straight down from it a soft pool falls on the piano and
		// whoever is playing it: it catches his shoulders, his hair, the
		// edge of the lid, and lifts them out of the dark
		float pool = 1.0 - smoothstep(0.5, 2.9, length(p.xz - vec2(${Kn(Ml.stoolX)}, ${Kn(Ml.keyFront+.1)})));
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
	}`}var lo={FLOOR:0,WALL:1,STEP:2,SOFFIT:3,STRING:4,CEIL:5,OCULUS:6,HALLSTONE:7,IRON:8,RAILING:9,CANDLE:10};function v2(){let t={pos:[],nrm:[],kind:[],uv:[],idx:[]};return t.v=(e,o,n,r)=>(t.pos.push(e[0],e[1],e[2]),t.nrm.push(o[0],o[1],o[2]),t.kind.push(n),t.uv.push(r?r[0]:0,r?r[1]:0),t.pos.length/3-1),t.quad=(e,o,n,r,a,i,s)=>{let c=t.v(e,a,i,s&&s[0]),h=t.v(o,a,i,s&&s[1]),l=t.v(n,a,i,s&&s[2]),d=t.v(r,a,i,s&&s[3]);t.idx.push(c,h,l,c,l,d)},t.tri=(e,o,n,r,a)=>{let i=t.v(e,r,a),s=t.v(o,r,a),c=t.v(n,r,a);t.idx.push(i,s,c)},t}function B6(){let t=v2(),e=(n,r,a)=>[oo.x+Math.cos(n)*r,a,oo.z+Math.sin(n)*r],o=n=>[Math.cos(n),0,Math.sin(n)];for(let r=0;r>Rn.x0-.01;r-=.25)for(let a=41.2;a<47.8;a+=.2){let i=r-.25,s=r,c=a,h=a+.2;if(!(nc(i,c)||nc(s,c)||nc(i,h)||nc(s,h)||nc((i+s)/2,(c+h)/2)))continue;let l=c,d=h;i>Qa(Le.z0)-.3&&(l=Math.max(l,Le.z0),d=Math.min(d,Le.z1),d<=l)||t.quad([i,0,l],[i,0,d],[s,0,d],[s,0,l],[0,1,0],lo.FLOOR)}{for(let r=0;r<360;r++){let a=r/360*2*jo,i=(r+1)/360*2*jo,s=(a+i)/2,c=e(s,go,0),h=0;c[0]>oo.x&&c[2]>Le.z0-.02&&c[2]<Le.z1+.02&&(h=Math.max(uh(Math.min(Math.max(e(a,go,0)[2],Le.z0),Le.z1)),uh(Math.min(Math.max(e(i,go,0)[2],Le.z0),Le.z1)))),c[0]<oo.x&&c[2]>Rn.z0-.02&&c[2]<Rn.z1+.02&&(h=Rn.top);let l=a*go,d=i*go,u=o(a).map(v=>-v),p=o(i).map(v=>-v),f=[h];for(let v=Math.ceil(h/2.5)*2.5;v<g0;v+=2.5)v>h+.01&&f.push(v);f.push(g0);for(let v=0;v<f.length-1;v++){let m=f[v],g=f[v+1],x=t.v(e(a,go,m),u,lo.WALL,[l,m]),y=t.v(e(i,go,m),p,lo.WALL,[d,m]),w=t.v(e(i,go,g),p,lo.WALL,[d,g]),M=t.v(e(a,go,g),u,lo.WALL,[l,g]);t.idx.push(x,y,w,x,w,M)}}for(let[r,a,i]of[[6.55,.22,.07],[0,.32,.05]])for(let s=0;s<360;s++){let c=s/360*2*jo,h=(s+1)/360*2*jo,l=(c+h)/2,d=e(l,go,0);if(r<1&&(d[0]>oo.x&&d[2]>Le.z0&&d[2]<Le.z1||d[0]<oo.x&&d[2]>Rn.z0&&d[2]<Rn.z1))continue;let u=go-i;t.quad(e(c,u,r),e(h,u,r),e(h,u,r+a),e(c,u,r+a),o(l).map(p=>-p),lo.WALL,[[c*go,r+100],[h*go,r+100],[h*go,r+a+100],[c*go,r+a+100]]),t.quad(e(c,u,r+a),e(h,u,r+a),e(h,go,r+a),e(c,go,r+a),[0,1,0],lo.WALL,[[0,200],[0,200],[0,200],[0,200]]),r>1&&t.quad(e(c,go,r),e(h,go,r),e(h,u,r),e(c,u,r),[0,-1,0],lo.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let n=la.x;for(let[a,i]of[[Le.z0,1],[Le.z1,-1]]){let s=Qa(a);t.quad([n,0,a],[s,0,a],[s,Le.spring,a],[n,Le.spring,a],[0,0,i],lo.WALL,[[n,0],[s,0],[s,Le.spring],[n,Le.spring]])}let r=40;for(let a=0;a<r;a++){let i=a/r*jo,s=(a+1)/r*jo,c=Le.zc-Math.cos(i)*Le.r,h=Le.zc-Math.cos(s)*Le.r,l=Le.spring+Math.sin(i)*Le.r,d=Le.spring+Math.sin(s)*Le.r,u=[0,-Math.sin(i),Math.cos(i)],p=[0,-Math.sin(s),Math.cos(s)],f=t.v([n,l,c],u,lo.WALL,[n,i*Le.r]),v=t.v([Qa(c),l,c],u,lo.WALL,[Qa(c),i*Le.r]),m=t.v([Qa(h),d,h],p,lo.WALL,[Qa(h),s*Le.r]),g=t.v([n,d,h],p,lo.WALL,[n,s*Le.r]);t.idx.push(f,v,m,f,m,g)}}{let n=la.x,r=.05;for(let h=la.z0;h<la.z1-1e-6;h+=r){let l=h,d=Math.min(la.z1,h+r),p=(f=>f>Le.z0&&f<Le.z1)((l+d)/2)?Math.max(uh(l),uh(d)):0;t.quad([n,p,l],[n,p,d],[n,la.top,d],[n,la.top,l],[1,0,0],lo.HALLSTONE,[[l,p],[d,p],[d,la.top],[l,la.top]])}let a=.32,i=.06,s=n+i,c=36;for(let h=0;h<c;h++){let l=h/c*jo,d=(h+1)/c*jo,u=(g,x)=>[s,Le.spring+Math.sin(g)*x,Le.zc-Math.cos(g)*x],p=Le.r,f=Le.r+a;t.quad(u(l,p),u(d,p),u(d,f),u(l,f),[1,0,0],lo.HALLSTONE,[[0,300],[0,300],[1,300],[1,300]]);let v=(g,x,y)=>[y,Le.spring+Math.sin(g)*x,Le.zc-Math.cos(g)*x],m=[0,Math.sin((l+d)/2),-Math.cos((l+d)/2)];t.quad(v(l,f,n),v(d,f,n),v(d,f,s),v(l,f,s),m,lo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad(v(l,p,n),v(d,p,n),v(d,p,s),v(l,p,s),m.map(g=>-g),lo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}for(let[h,l,d]of[[Le.z0-a,Le.z0,-1],[Le.z1,Le.z1+a,1]]){t.quad([s,0,h],[s,0,l],[s,Le.spring,l],[s,Le.spring,h],[1,0,0],lo.HALLSTONE,[[0,300],[1,300],[1,300],[0,300]]);let u=d<0?h:l,p=d<0?l:h;t.quad([n,0,u],[s,0,u],[s,Le.spring,u],[n,Le.spring,u],[0,0,d],lo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad([n,0,p],[s,0,p],[s,Le.spring,p],[n,Le.spring,p],[0,0,-d],lo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);let f=Le.spring-.16,v=.16,m=.11,g=Math.min(h,l)-.05,x=Math.max(h,l)+.05;t.quad([n+m,f,g],[n+m,f,x],[n+m,f+v,x],[n+m,f+v,g],[1,0,0],lo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad([n,f+v,g],[n+m,f+v,g],[n+m,f+v,x],[n,f+v,x],[0,1,0],lo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad([n,f,g],[n,f,x],[n+m,f,x],[n+m,f,g],[0,-1,0],lo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let y of[g,x])t.quad([n,f,y],[n+m,f,y],[n+m,f+v,y],[n,f+v,y],[0,0,y===g?-1:1],lo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}{let h=Le.spring+Le.r-.05,l=Le.spring+Le.r+a+.12,d=.16,u=.22,p=s+.04;t.quad([p,h,Le.zc-d],[p,h,Le.zc+d],[p,l,Le.zc+u],[p,l,Le.zc-u],[1,0,0],lo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let f of[-1,1])t.quad([n,h,Le.zc+f*d],[p,h,Le.zc+f*d],[p,l,Le.zc+f*u],[n,l,Le.zc+f*u],[0,0,f],lo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);t.quad([n,l,Le.zc-u],[p,l,Le.zc-u],[p,l,Le.zc+u],[n,l,Le.zc+u],[0,1,0],lo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}}{let{x0:n,x1:r,z0:a,z1:i,top:s}=Rn;t.quad([n,0,a],[n,0,i],[n,s,i],[n,s,a],[1,0,0],lo.WALL,[[a,0],[i,0],[i,s],[a,s]]);for(let[h,l]of[[a,1],[i,-1]]){let d=oo.x-Math.sqrt(go*go-(h-oo.z)*(h-oo.z));t.quad([n,0,h],[d,0,h],[d,s,h],[n,s,h],[0,0,l],lo.WALL,[[n,0],[d,0],[d,s],[n,s]])}let c=24;for(let h=0;h<c;h++){let l=a+(i-a)*h/c,d=a+(i-a)*(h+1)/c,u=oo.x-Math.sqrt(go*go-(l-oo.z)**2),p=oo.x-Math.sqrt(go*go-(d-oo.z)**2);t.quad([n,s,l],[u,s,l],[p,s,d],[n,s,d],[0,-1,0],lo.WALL,[[0,200],[0,200],[0,200],[0,200]])}for(let h=0;h<c;h++){let l=a+(i-a)*h/c,d=a+(i-a)*(h+1)/c,u=oo.x-Math.sqrt(go*go-(l-oo.z)**2)+.05,p=oo.x-Math.sqrt(go*go-(d-oo.z)**2)+.05;t.quad([u,s-.3,l],[p,s-.3,d],[p,s,d],[u,s,l],[1,0,0],lo.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let r=[1.15,1.6,2.3,3,3.35,4.2,go];for(let a=0;a<120;a++){let i=a/120*2*jo,s=(a+1)/120*2*jo,c=(i+s)/2;c>jo&&(c-=2*jo);for(let h=0;h<r.length-1;h++){let l=r[h],d=r[h+1],u=c*180/jo;l>=3.3&&u>8&&u<85||t.quad(e(i,l,g0),e(i,d,g0),e(s,d,g0),e(s,l,g0),[0,-1,0],lo.CEIL,[[i*l,l],[i*d,d],[s*d,d],[s*l,l]])}t.quad(e(i,1.15,g0),e(s,1.15,g0),e(s,1.15,g0+.7),e(i,1.15,g0+.7),o(c).map(h=>-h),lo.CEIL,[[0,400],[0,400],[0,400],[0,400]]),t.tri([oo.x,g0+.7,oo.z],e(s,1.15,g0+.7),e(i,1.15,g0+.7),[0,-1,0],lo.OCULUS)}}{let n=Fo.ri,r=Fo.ro,a=Fo.n*Fo.step;for(let c=0;c<Fo.n;c++){let h=c*Fo.step,l=(c+1)*Fo.step,d=H0(h),u=H0(l),p=(c+1)*Fo.rise,f=c*Fo.rise,v=2;for(let x=0;x<v;x++){let y=d+(u-d)*x/v-(x===0?.004:0),w=d+(u-d)*(x+1)/v;t.quad(e(y,n,p),e(y,r,p),e(w,r,p),e(w,n,p),[0,1,0],lo.STEP,[[n*y,c],[r*y,c],[r*w,c],[n*w,c]])}let m=[-Math.sin(d),0,Math.cos(d)],g=d-.004;t.quad(e(g,n,f),e(g,r,f),e(g,r,p),e(g,n,p),m,lo.STEP,[[n*d,c+.5],[r*d,c+.5],[r*d,c+.5],[n*d,c+.5]]),t.quad(e(d,n,Za(h)+.06),e(u,n,Za(l)+.06),e(u,n,p),e(g,n,p),o((d+u)/2).map(x=>-x),lo.STEP,[[0,500],[0,500],[0,500],[0,500]])}let i=Math.ceil(a/(1.2*jo/180)),s=[n,n+.6,n+1.2,r];for(let c=0;c<i;c++){let h=c/i*a,l=(c+1)/i*a,d=H0(h),u=H0(l),p=Za(h),f=Za(l),v=p-Fo.thick,m=f-Fo.thick,g=o(d).map(S=>-S),x=o(u).map(S=>-S),y=t.v(e(d,n,v),g,lo.STRING,[h*n,0]),w=t.v(e(u,n,m),x,lo.STRING,[l*n,0]),M=t.v(e(u,n,f+.06),x,lo.STRING,[l*n,1]),_=t.v(e(d,n,p+.06),g,lo.STRING,[h*n,1]);t.idx.push(y,w,M,y,M,_);for(let S=0;S<s.length-1;S++){let R=s[S],N=s[S+1],G=q=>{let V=o(q);return[-V[0]*.12,-.99,-V[2]*.12]};t.quad(e(d,R,v),e(d,N,v),e(u,N,m),e(u,R,m),G((d+u)/2),lo.SOFFIT,[[h*R,R],[h*N,N],[l*N,N],[l*R,R]])}}}return t}function j6(){let t=v2(),e=Fo.ri+.045,o=Fo.n*Fo.step,n=Math.ceil(o/(.8*jo/180)),r=.92,a=(c,h,l)=>[oo.x+Math.cos(c)*h,l,oo.z+Math.sin(c)*h],i=c=>[Math.cos(c),0,Math.sin(c)];for(let c=0;c<n;c++){let h=c/n*o,l=(c+1)/n*o,d=H0(h),u=H0(l),p=Za(h)+.06,f=Za(l)+.06,v=i(d).map(S=>-S),m=i(u).map(S=>-S),g=h*e,x=l*e,y=t.v(a(d,e,p),v,lo.RAILING,[g,0]),w=t.v(a(u,e,f),m,lo.RAILING,[x,0]),M=t.v(a(u,e,f+r),m,lo.RAILING,[x,r]),_=t.v(a(d,e,p+r),v,lo.RAILING,[g,r]);t.idx.push(y,w,M,y,M,_)}((c,h,l,d)=>{let p=v=>{let m=H0(v),g=Za(v)+.06+h,x=a(m,e+c,g),y=i(m),w=[];for(let M=0;M<8;M++){let _=M/8*2*jo,S=[y[0]*Math.cos(_),Math.sin(_),y[2]*Math.cos(_)];w.push([[x[0]+S[0]*l,x[1]+S[1]*l,x[2]+S[2]*l],S])}return w},f=p(0);for(let v=1;v<=n;v++){let m=p(v/n*o);for(let g=0;g<8;g++){let x=(g+1)%8,y=t.v(f[g][0],f[g][1],d),w=t.v(m[g][0],m[g][1],d),M=t.v(m[x][0],m[x][1],d),_=t.v(f[x][0],f[x][1],d);t.idx.push(y,w,M,y,M,_)}f=m}})(0,r+.02,.028,lo.IRON);for(let c of Uu){let h=Math.atan2(c[2]-oo.z,c[0]-oo.x),l=[Math.cos(h),0,Math.sin(h)],d=12;for(let v=0;v<d;v++){let m=v/d*2*jo,g=(v+1)/d*2*jo,x=(y,w,M)=>[c[0]+Math.cos(y)*w,M,c[2]+Math.sin(y)*w];t.quad(x(m,.16,c[1]),x(g,.16,c[1]),x(g,.13,c[1]-.05),x(m,.13,c[1]-.05),[Math.cos(m)*.6,.8,Math.sin(m)*.6],lo.IRON),t.quad(x(m,.16,c[1]),x(g,.16,c[1]),x(g,0,c[1]+.002),x(m,0,c[1]+.002),[0,1,0],lo.IRON)}let u=[c[0]+l[0]*.16,c[1]-.35,c[2]+l[2]*.16],p=[-l[2],0,l[0]],f=.018;t.quad([u[0]-p[0]*f,u[1],u[2]-p[2]*f],[u[0]+p[0]*f,u[1],u[2]+p[2]*f],[c[0]+p[0]*f,c[1]-.05,c[2]+p[2]*f],[c[0]-p[0]*f,c[1]-.05,c[2]-p[2]*f],[-l[0],.5,-l[2]],lo.IRON)}{let c=H0(0),h=a(c,e,0),l=10;for(let d=0;d<l;d++){let u=d/l*2*jo,p=(d+1)/l*2*jo,f=(v,m,g)=>[h[0]+Math.cos(v)*m,g,h[2]+Math.sin(v)*m];t.quad(f(u,.035,0),f(p,.035,0),f(p,.035,r+.1),f(u,.035,r+.1),[Math.cos((u+p)/2),0,Math.sin((u+p)/2)],lo.IRON),t.quad(f(u,.06,r+.1),f(p,.06,r+.1),f(p,.03,r+.2),f(u,.03,r+.2),[Math.cos((u+p)/2)*.8,.6,Math.sin((u+p)/2)*.8],lo.IRON)}}return t}function W6(){let t=[],e=[],o=[],n=[];for(let a of Bu){let[i,s,c,h,l,d]=a,u=t.length/3;for(let f=0;f<=7;f++){let v=f/7*2*jo+d,m=Math.cos(v),g=Math.sin(v);t.push(i+m*h,s,c+g*h,i+m*h,s+l,c+g*h),e.push(m,0,g,m,0,g),o.push(0,l,d,1,l,d)}for(let f=0;f<7;f++){let v=u+f*2;n.push(v,v+2,v+3,v,v+3,v+1)}let p=t.length/3;t.push(i,s+l-.006,c),e.push(0,1,0),o.push(2,l,d);for(let f=0;f<7;f++){let v=f/7*2*jo+d;t.push(i+Math.cos(v)*h,s+l,c+Math.sin(v)*h),e.push(0,1,0),o.push(1,l,d)}for(let f=0;f<7;f++)n.push(p,p+1+f,p+1+(f+1)%7)}return{pos:t,nrm:e,info:o,idx:n}}function V6(){let t=[],e=[],o=[],n=[];for(let r of Bu){let[a,i,s,,c,h]=r,l=t.length/3;for(let d of[[-1,0],[1,0],[1,1],[-1,1]])t.push(a,i+c+.004,s),e.push(d[0],d[1]),o.push(h);n.push(l,l+1,l+2,l,l+2,l+3)}return{ctr:t,corner:e,ph:o,idx:n}}function X6(t){let e=new DataView(t),o=e.getUint32(4,!0),n=e.getUint32(8,!0),r=[],a=[];for(let g=0;g<3;g++)r.push(e.getFloat32(12+g*4,!0)),a.push(e.getFloat32(24+g*4,!0));let i=36,s=new Uint16Array(t,i,o*3);i+=o*6;let c=new Uint16Array(t,i,n);i+=n*2;let h=new Int8Array(t,i,o*3);i+=o*3;let l=new Uint8Array(t,i,o),d=new Float32Array(o*3),u=new Float32Array(o*3),p=new Float32Array(o),f=Math.cos(vn.yaw),v=Math.sin(vn.yaw),m=vn.scale;for(let g=0;g<o;g++){let x=(r[0]+s[g*3]/65535*a[0])*m,y=(r[1]+s[g*3+1]/65535*a[1])*m,w=(r[2]+s[g*3+2]/65535*a[2])*m;d[g*3]=vn.x+f*x+v*w,d[g*3+1]=y,d[g*3+2]=vn.z-v*x+f*w;let M=h[g*3]/127,_=h[g*3+1]/127,S=h[g*3+2]/127;u[g*3]=f*M+v*S,u[g*3+1]=_,u[g*3+2]=-v*M+f*S,p[g]=l[g]}return{pos:d,nrm:u,mat:p,idx:new Uint32Array(c)}}function Y6(){let t=[],e=(d,u)=>[oo.x+Math.cos(d)*u,oo.z+Math.sin(d)*u];t.push([[0,Le.z0],[Qa(Le.z0),Le.z0]]),t.push([[Qa(Le.z1),Le.z1],[0,Le.z1]]);let o=Math.asin((Le.z1-oo.z)/go),n=72;for(let d=0;d<n;d++){let u=o+d/n*(2*jo-2*o),p=o+(d+1)/n*(2*jo-2*o);t.push([e(u,go-.25),e(p,go-.25)])}let r=ph[0]-.55+.35;t.push([[r,Rn.z0],[r,Rn.z1]]);let a=2.4/Fo.k,i=12;for(let d=0;d<i;d++){let u=H0(d/i*a),p=H0((d+1)/i*a);t.push([e(u,Fo.ri-.2),e(p,Fo.ri-.2)])}t.push([e(H0(0),Fo.ri-.2),e(H0(0),go)]),t.push([e(H0(a),Fo.ri-.2),e(H0(a),go)]);let s=Math.cos(vn.yaw),c=Math.sin(vn.yaw),h=vn.scale,l=[[-1,-.62],[1.25,-.62],[1.25,.62],[-1,.62]].map(([d,u])=>[vn.x+(s*d+c*u)*h,vn.z+(-c*d+s*u)*h]);for(let d=0;d<4;d++)t.push([l[d],l[(d+1)%4]]);return t}tr.exports=t=>{let e=B6(),o=j6(),n=W6(),r=V6(),a=Ka(),i=`
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
	}`,c=t({vert:s,frag:`${i}
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
				float r = length(v_pos.xz - vec2(${Kn(oo.x)}, ${Kn(oo.z)}));
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
				vec2 q = v_pos.xz - vec2(${Kn(oo.x)}, ${Kn(oo.z)});
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
		}`,attributes:{position:e.pos,normal:e.nrm,kind:e.kind,uv:e.uv},elements:new Uint32Array(e.idx),cull:{enable:!1}}),h=t({vert:s,frag:`${i}
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
				}`,attributes:{position:g.pos,normal:g.nrm,mat:g.mat},elements:g.idx,cull:{enable:!1}})}).catch(m=>console.error(m));let p=(()=>{let m=[],g=[],x=[],y=[],M=[oo.x,g0-.3,oo.z],_=[Ml.stoolX,.02,Ml.keyFront+.1],S=1.25,R=2.35;for(let N=0;N<=40;N++){let G=N/40*2*jo,q=Math.cos(G),V=Math.sin(G);m.push(M[0]+q*S,M[1],M[2]+V*S,_[0]+q*R,_[1],_[2]+V*R),g.push(q,.08,V,q,.08,V),x.push(1,0)}for(let N=0;N<40;N++){let G=N*2;y.push(G,G+1,G+3,G,G+3,G+2)}return{pos:m,nrm:g,hh:x,idx:y}})(),f=t({vert:`
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
		}`,attributes:{position:p.pos,normal:p.nrm,hh:p.hh},elements:p.idx,depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});function v(m){let g=m&&m.reflected;c(),h(),l(),u&&u(),g||(f(),d({halo:1}),d({halo:0}))}return v};tr.exports.C=oo;tr.exports.R=go;tr.exports.PASS=Le;tr.exports.SURR=la;tr.exports.OFF=ph;tr.exports.BAY=Rn;tr.exports.PATH=dh;tr.exports.PIANO=vn;tr.exports.PLAY=Ml;tr.exports.TOP=g0;tr.exports.roomGLSL=p2;tr.exports.segments=Y6});var S2=Et((Lz,k2)=>{"use strict";var K6=Fs(),{addFlutedColumn:m2,addStatue:Q6,addPlant:Z6}=Bm(),g2=Va(),J6=Ki(),Wr=M0(),t_=Ar(),ac=Ja(),Oo=14,Cn=Wr.C.hallEnd+.35,Zo=8,Ho=.35,ju=1.15,Wu=1.15,Vu=[18,29,40],e_=[[[0,0],[0,ac.PASS.z0]],[[0,ac.PASS.z1],[0,Cn]],[[Oo,Cn],[Oo,0]],[[0,0],[Oo,0]],[[Oo,Cn],[0,Cn]]],w2=[];for(let t of Vu)for(let e of[1.25,Oo-1.25]){let o=ju/2,n=Wu/2;w2.push([[e-o,t-n],[e+o,t-n]],[[e+o,t-n],[e+o,t+n]],[[e+o,t+n],[e-o,t+n]],[[e-o,t+n],[e-o,t-n]])}var mh=12,_2=2.95,M2=.62,yh=_2+M2,gh=[{file:"venus.bin",x:1.85,z:Cn-1.6,yaw:2.67,height:5.2,pedestal:!0,mat:1},{file:"david.bin",x:Oo-2.1,z:Cn-1.6,yaw:-2.67,height:5.2,pedestal:!0,mat:1},{file:"pieta.bin",x:1.75,z:5.9,yaw:Math.PI/2,height:3.6,base:1,mat:1},{file:"spinario.bin",x:Wr.NICHE_X[0],z:Wr.NICHE_STATUE_Z,yaw:-.35,height:1.85,base:Wr.NICHE_PLINTH_TOP,mat:3},{file:"charioteer.bin",x:Wr.NICHE_X[1],z:Wr.NICHE_STATUE_Z+.1,yaw:0,height:2.95,base:Wr.NICHE_PLINTH_TOP,mat:3}],o_={x0:Ho,x1:3.15,z0:3.6,z1:8.2,top:1},x2=.8,bh=1.17,kl=[];[{z:10.4,dz:-.7},{z:19.2,dz:.7},{z:27.8,dz:-.7}].forEach((t,e)=>{kl.push({x:1,z:t.z,seed:11+e*7,away:[1,t.dz]}),kl.push({x:Oo-1,z:t.z,seed:53+e*5,away:[-1,t.dz]})});function Xu(t,e,o,n){return[[[t-o,e-n],[t+o,e-n]],[[t+o,e-n],[t+o,e+n]],[[t+o,e+n],[t-o,e+n]],[[t-o,e+n],[t-o,e-n]]]}var wh=[];for(let t of[-1,1])wh.push(...Xu(Oo/2+t*yh,mh,.85,.85));for(let t of gh.filter(e=>e.pedestal))wh.push(...Xu(t.x,t.z,bh*1.1,bh*1.1));for(let t of kl)wh.push(...Xu(t.x,t.z,.42,.42));var n_=e_.concat(w2,wh,ac.segments());function r_(t){let o=new Map,n=(r,a,i)=>{let s=r+":"+a;o.has(s)||o.set(s,[]);let c=o.get(s);c.includes(i)||c.push(i)};for(let r of t){let a=Math.floor(Math.min(r[0][0],r[1][0])/4)-1,i=Math.floor(Math.max(r[0][0],r[1][0])/4)+1,s=Math.floor(Math.min(r[0][1],r[1][1])/4)-1,c=Math.floor(Math.max(r[0][1],r[1][1])/4)+1;for(let h=a;h<=i;h++)for(let l=s;l<=c;l++)n(h,l,r)}return{get(r,a){let i=Math.floor(r/4),s=Math.floor(a/4),c=[];for(let h=-1;h<=1;h++)for(let l=-1;l<=1;l++){let d=o.get(i+h+":"+(s+l));d&&c.push(...d)}return[...new Set(c)]}}}var xh=[],On={curMat:[0,0,0]};function Yu(t,e,o,n,r,a,i){let s=t.length/3;t.push(...o,...n,...r,...a),e.push(...i,...i,...i,...i);let c=On.curMat;return xh.push(...c,...c,...c,...c),[s,s+2,s+1,s+1,s+2,s+3]}function Go(t,e,o,n,r,a,i,s,c){let h=(l,d,u,p,f)=>{o.push(...Yu(t,e,l,d,u,p,f))};h([n,r,a],[i,r,a],[n,s,a],[i,s,a],[0,0,-1]),h([i,r,c],[n,r,c],[i,s,c],[n,s,c],[0,0,1]),h([n,r,c],[n,r,a],[n,s,c],[n,s,a],[-1,0,0]),h([i,r,a],[i,r,c],[i,s,a],[i,s,c],[1,0,0]),h([n,s,a],[i,s,a],[n,s,c],[i,s,c],[0,1,0]),h([n,r,c],[i,r,c],[n,r,a],[i,r,a],[0,-1,0])}function rc(t,e,o,n,r){let a=On,i=a.vert(t,r),s=a.vert(e,r),c=a.vert(o,r),h=a.vert(n,r);a.tri(i,s,c),a.tri(s,h,c)}function y2(t,e,o,n,r,a,i){for(let s=0;s<i;s++){let c=Math.PI*s/i,h=Math.PI*(s+1)/i,l=Math.cos(c),d=Math.sin(c),u=Math.cos(h),p=Math.sin(h),f=[t+o*l,e+o*d],v=[t+o*u,e+o*p],m=[t+n*l,e+n*d],g=[t+n*u,e+n*p];rc([f[0],f[1],r],[v[0],v[1],r],[m[0],m[1],r],[g[0],g[1],r],[0,0,-1]),rc([f[0],f[1],a],[v[0],v[1],a],[m[0],m[1],a],[g[0],g[1],a],[0,0,1]);let x=(c+h)/2;rc([f[0],f[1],r],[v[0],v[1],r],[f[0],f[1],a],[v[0],v[1],a],[-Math.cos(x),-Math.sin(x),0]),rc([m[0],m[1],r],[g[0],g[1],r],[m[0],m[1],a],[g[0],g[1],a],[Math.cos(x),Math.sin(x),0])}}function a_(t,e,o,n,r,a,i){for(let s=0;s<i;s++){let c=Math.PI*s/i,h=Math.PI*(s+1)/i,l=t+o*Math.cos(c),d=e+o*Math.sin(c),u=t+o*Math.cos(h),p=e+o*Math.sin(h);rc([l,d,r],[u,p,r],[l,n,r],[u,n,r],[0,0,-1]),rc([l,d,a],[u,p,a],[l,n,a],[u,n,a],[0,0,1])}}function s_(t,e,o,n){let r=Oo/2,a=_2,i=3,s=a+.42,c=s+.15,h=M2,l=yh,d=5.98,u=n-.45,p=n+.45,f=64,v=m2(On,r-l,n,0,d,h);m2(On,r+l,n,0,d,h),On.curMat=[0,0,0],y2(r,i,a,s,u,p,f),y2(r,i,s,c,u-.07,p+.07,f),a_(r,i,c,v+.05,u,p,f);for(let g of[-1,1]){let x=r+g*(c-.02),y=r+g*l;Go(t,e,o,Math.min(x,y),i,u,Math.max(x,y),v+.05,p)}for(let g of[-1,1]){let x=r+g*(a-.05),y=r+g*(a+.85);Go(t,e,o,Math.min(x,y),i-.16,n-.6,Math.max(x,y),i,n+.6)}let m=l+h*1.42+.45;Go(t,e,o,r-m,v,n-.7,r+m,v+.44,n+.7),Go(t,e,o,r-m+.12,v+.44,n-.62,r+m-.12,v+.7,n+.62),Go(t,e,o,r-m-.1,v+.7,n-.84,r+m+.1,v+.84,n+.84),Go(t,e,o,r-m-.22,v+.84,n-.96,r+m+.22,v+1,n+.96),Go(t,e,o,r-.3,i+a-.1,n-.56,r+.3,v,n+.56)}function b2(t,e,o,n,r){Go(t,e,o,n-.72,0,r-.72,n+.72,.2,r+.72),Go(t,e,o,n-.58,.2,r-.58,n+.58,.4,r+.58),Go(t,e,o,n-ju/2,.4,r-Wu/2,n+ju/2,Zo-1.35,r+Wu/2),Go(t,e,o,n-.67,.42,r-.67,n+.67,.62,r+.67),Go(t,e,o,n-.67,Zo-1.58,r-.67,n+.67,Zo-1.35,r+.67),Go(t,e,o,n-.82,Zo-1.35,r-.82,n+.82,Zo-1.05,r+.82),Go(t,e,o,n-.66,Zo-1.05,r-.66,n+.66,Zo-.78,r+.66),Go(t,e,o,n-.92,Zo-.78,r-.92,n+.92,Zo-.55,r+.92),Go(t,e,o,n-.78,Zo-.55,r-.78,n+.78,Zo-.3,r+.78),Go(t,e,o,n-.92,Zo-.3,r-.92,n+.92,Zo-.1,r+.92)}function vh(t,e,o,n,r){r==="left"?(Go(t,e,o,-.08,1,n-3.8/2,.14,5.7,n+3.8/2),Go(t,e,o,-.08-.04,1+.18,n-3.8/2+.18,.18,5.7-.18,n+3.8/2-.18)):(Go(t,e,o,Oo-.14,1,n-3.8/2,Oo+.08,5.7,n+3.8/2),Go(t,e,o,Oo-.18,1+.18,n-3.8/2+.18,Oo+.08+.04,5.7-.18,n+3.8/2-.18))}function i_(t,e,o,n){Go(t,e,o,.65,Zo-.16,n-1.65,.65+.22,Zo,n+1.65),Go(t,e,o,Oo-.65-.22,Zo-.16,n-1.65,Oo-.65,Zo,n+1.65),Go(t,e,o,.65,Zo-.16,n-1.65,Oo-.65,Zo,n-1.43),Go(t,e,o,.65,Zo-.16,n+1.43,Oo-.65,Zo,n+1.65),o.push(...Yu(t,e,[.65+.22,Zo-.16,n-1.43],[Oo-.65-.22,Zo-.16,n-1.43],[.65+.22,Zo-.16,n+1.43],[Oo-.65-.22,Zo-.16,n+1.43],[0,-1,0]))}k2.exports=function(){let t=[],e=[],o=[];xh=[],On=K6.createBuilder(t,e,o,xh),o.push(...Yu(t,e,[0,0,0],[Oo,0,0],[0,0,Cn],[Oo,0,Cn],[0,1,0])),J6.addSkylight(On,[0,0,0],Cn),On.curMat=[0,0,0];{let c=ac.SURR;Go(t,e,o,-Ho,0,0,Ho,Zo,c.z0),Go(t,e,o,-Ho,0,c.z1,Ho,Zo,Cn),Go(t,e,o,-Ho,c.top,c.z0,Ho,Zo,c.z1)}Go(t,e,o,Oo-Ho,0,Wr.C.z1,Oo+Ho,Zo,Cn-Ho),Go(t,e,o,Oo-Ho-.12,0,Wr.C.z1+2*Ho,Oo-Ho,.42,Cn-Ho),Go(t,e,o,Oo-Ho-.07,.42,Wr.C.z1+2*Ho,Oo-Ho,.5,Cn-Ho);for(let[c,h]of[[0,ac.SURR.z0],[ac.SURR.z1,Cn-Ho]])Go(t,e,o,Ho,0,c,Ho+.12,.42,h),Go(t,e,o,Ho,.42,c,Ho+.07,.5,h);Go(t,e,o,Ho,0,Cn-Ho-.12,Oo-Ho,.42,Cn-Ho),Go(t,e,o,Ho,.42,Cn-Ho-.07,Oo-Ho,.5,Cn-Ho),g2.addEntranceWall(On),g2.addFrames(On),On.curMat=[0,0,0],Go(t,e,o,-Ho,0,Cn-Ho,Oo+Ho,Zo,Cn+Ho),s_(t,e,o,mh);for(let c of Vu)b2(t,e,o,1.25,c),b2(t,e,o,Oo-1.25,c);vh(t,e,o,22,"left"),vh(t,e,o,25,"right"),vh(t,e,o,33,"left"),vh(t,e,o,36,"right");let n=[4,9,34,39,44,49];for(let c of n)i_(t,e,o,c);Wr.addWing(On),On.curMat=[0,0,0];for(let c of gh.filter(h=>h.pedestal))Q6(On,c.x,c.z,bh,x2);{let c=o_;On.curMat=[0,0,0],On.box(c.x0,0,c.z0-.08,c.x1+.08,.16,c.z1+.08,[0,0,0]),On.box(c.x0,.16,c.z0+.04,c.x1-.04,c.top-.14,c.z1-.04,[0,0,0]),On.box(c.x0,c.top-.14,c.z0-.02,c.x1+.03,c.top-.06,c.z1+.02,[0,0,0]),On.box(c.x0,c.top-.06,c.z0-.06,c.x1+.07,c.top,c.z1+.06,[0,0,0])}t_.addAlcove(On);for(let c of kl)Z6(On,c.x,c.z,c.seed,1,c.away);On.curMat=[0,0,0];let r=[[[Oo,Cn-.35],[0,Cn-.35]],[[0,3],[0,10]],[[Oo,15],[Oo,22]],[[0,24],[0,31]],[[Oo,33],[Oo,40]],[[0,41],[0,46]]],a=r_(n_),i=(c,h)=>{let l=0,d=1/0;return r.forEach((u,p)=>{let f=(u[0][0]+u[1][0])/2,v=(u[0][1]+u[1][1])/2,m=Math.hypot(c-f,h-v);m<d&&(d=m,l=p)}),l},s=[];for(let c=0;c<10;c++)s.push({c:[0,0,0,0],d:[1,0,0,0]});return{placements:r,lights:s,statues:gh,occluders:[...Vu.flatMap(c=>[[1.25,c,.78],[Oo-1.25,c,.78]]),[Oo/2-yh,mh,.86],[Oo/2+yh,mh,.86],...gh.filter(c=>c.pedestal).map(c=>[c.x,c.z,bh*1.12]),...kl.map(c=>[c.x,c.z,.34])],pedestalTop:x2,mat:xh,getAreaIndex:i,getGridSegments:(c,h)=>a.get(c,h),getGridParts:(c,h)=>a.get(c,h),position:t,normal:e,elements:o}}});var Ku=Et((Nz,E2)=>{"use strict";var{doorLightGLSL:c_}=Va(),{skylightGLSL:l_}=Ki(),{windowLightGLSL:f_,C:hr}=M0(),{alcoveLightGLSL:h_}=Ar(),Tr=t=>t.toFixed(4),u_=(()=>{let t=[-.22,.6,-.77],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>(o/e).toFixed(4)).join(", ")})();E2.exports=(t,e,o,n)=>{let a=(e.occluders||[]).slice(0,24).map(([p,f,v])=>`ao = min(ao, contact(v_pos.xz, vec2(${p.toFixed(3)}, ${f.toFixed(3)}), ${v.toFixed(3)}));`).join(`
      `),i={c:[0,0,0,0],d:[1,0,0,0]},s=-1,c=[],h=p=>{let f=p&&p.tick!==void 0?p.tick:0;if(f!==s||c.length===0){s=f;let v=e.viewer||[7,2,20];for(c=e.lights.filter(m=>m.c[3]>.5).map(m=>({l:m,d:Math.hypot(m.c[0]-v[0],m.c[2]-v[2])})).sort((m,g)=>m.d-g.d).slice(0,8).map(m=>m.l);c.length<8;)c.push(i)}return c},l={},d="",u="";for(let p=0;p<8;p++)l["lightC"+p]=f=>h(f)[p].c,l["lightD"+p]=f=>h(f)[p].d,d+="uniform vec4 lightC"+p+", lightD"+p+`;
`,u+="pic += pictureLight(lightC"+p+", lightD"+p+`, v_pos, N);
`;return t({frag:`
    precision highp float;

    uniform float yScale;
    uniform float mirrorOn;
    uniform float night;   // 0 by day, 1 at night
    uniform float time;
    ${Ka().lanternGLSL()}

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
    }`,attributes:{position:e.position,normal:e.normal,a_mat:e.mat},uniforms:l,blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},elements:new Uint32Array(e.elements),offset:n?t.prop("offset"):0,count:n?t.prop("count"):e.elements.length})}});var A2=Et((Rz,z2)=>{"strict mode";var d_="https://api.artic.edu/api/v1/artworks/search",p_=({image_id:t},e)=>`https://www.artic.edu/iiif/2/${t}/full/${e},/0/default.jpg`,v_="?query[bool][must][][term][classification_titles.keyword]=painting&query[bool][must][][term][is_public_domain]=true",m_="&fields=image_id,title,artist_title",g_={low:400,mid:843,high:1686};z2.exports={fetchList:async function(t,e){let o=d_+v_+m_+`&from=${t}&size=${e}`;return(await fetch(o).then(r=>r.json())).data.filter(r=>r.image_id)},fetchImage:async function(t,e){let o=p_(t,g_[e]),n=await fetch(o).then(r=>r.blob());return{title:t.title+" - "+t.artist_title,image:n}}}});var N2=Et((Oz,L2)=>{"use strict";var x_=xu(),y_=Sr(),b_=t=>"images/web/"+t.slug+(y_.isPhone?"-1024":"")+".webp";async function T2(t){let e=await fetch(t);if(!e.ok)throw new Error("Could not load "+t);return e.blob()}L2.exports={fetchList:async function(t,e){return x_.slice(t,t+e).map((o,n)=>({...o,image_id:t+n}))},fetchImage:async function(t){let e;try{e=await T2(b_(t))}catch(o){e=await T2("images/"+t.file)}return{title:t.title,image:e}}}});var O2=Et((Cz,R2)=>{"strict mode";R2.exports={default:"local",artic:A2(),local:N2()}});var Zu=Et((Pz,P2)=>{"strict mode";var js=document.createElement("canvas"),Qu=js.width=js.height=1024,ts=js.getContext("2d");ts.mozImageSmoothingEnabled=!1;ts.webkitImageSmoothingEnabled=!1;ts.font="32px Verdana";ts.textBaseline="bottom";ts.fillStyle="#aaa";function C2(t,e,o,n){var r=e,a,i=0,s=0,c=e.split(" "),h,l;for(h=l=c.length;t.measureText(r).width>o&&h>1;){h--,r=a="";for(var d=0;d<l;d++)d<h?(r+=c[d],d+1<h&&(r+=" ")):(a+=c[d],d+1<l&&(a+=" "))}return n.push(r),s=t.measureText(r).width,a&&(i=C2(t,a,o,n),i>s&&(s=i)),s}P2.exports={init(t,e,o=Qu){var n=[];C2(ts,e,Math.min(o*Qu,Qu),n),ts.clearRect(0,0,js.width,js.height);for(var r=0;r<n.length;r++)ts.fillText(n[r],0,js.height-(Math.max(n.length,3)-r)*32);return t({data:js,min:"mipmap",mipmap:"nice",flipY:!0})},draw(t){return t({frag:`
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
            }`,attributes:{pos:[0,0,1,0,0,1,1,1,0,1,1,0]},uniforms:{model:t.prop("textmodel"),tex:t.prop("text")},count:6,blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}})}}});var q2=Et(($z,I2)=>{"strict mode";var Ju=O2(),w_=new URLSearchParams(window.location.search).get("api"),$2=Ju[w_]||Ju[Ju.default],__=Zu(),td={},ic=[],M_=2;function k_(t){return(!navigator.connection||navigator.connection.downlink<M_)&&(t=t=="high"?"mid":"low"),t}var S_=Sr(),sc=document.createElement("canvas");sc.width=sc.height=S_.isPhone?1024:2048;var nd=sc.getContext("2d");nd.imageSmoothingEnabled=!0;nd.imageSmoothingQuality="high";var ed=!1,E_=t=>[(ic.pop()||t.texture)([[[200,200,200]]]),e=>(ic.pop()||t.texture)([[[0,0,0,0]]]),1];async function od(t,e,o){ed===!1&&(ed=t.hasExtension("EXT_texture_filter_anisotropic")?t._gl.getParameter(t._gl.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0);let n,r;try{let a=await $2.fetchImage(e,k_(o));r=a.title,n=await createImageBitmap(a.image),nd.drawImage(n,0,0,sc.width,sc.height)}catch(a){return console.error(a),o=="high"?await od(t,e,"low"):E_(t)}return[(ic.pop()||t.texture)({data:sc,min:"mipmap",mipmap:"nice",aniso:ed,flipY:!0}),a=>__.init(ic.pop()||t.texture,r,a),n.width/n.height]}I2.exports={fetch:(t,e=10,o="low",n,r)=>{let a=Object.keys(td).length;$2.fetchList(a,e).then(i=>{e=i.length,i.map(s=>{if(td[s.image_id]){--e===0&&r();return}td[s.image_id]=s,od(t,s,o).then(([c,h,l])=>{n({...s,tex:c,textGen:h,aspect:l}),--e===0&&r()})})})},load:(t,e,o="low")=>{e.tex||e.loading||(e.loading=!0,od(t,e,o).then(([n,r])=>{e.loading=!1,e.tex=n,e.text=r(e.width)}))},unload:t=>{t.tex&&(ic.push(t.tex),t.tex=void 0),t.text&&(ic.push(t.text),t.text=void 0)}}});var F2=Et((Iz,D2)=>{D2.exports=z_;function z_(){var t=new Float32Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var H2=Et((qz,G2)=>{G2.exports=A_;function A_(t){var e=new Float32Array(16);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var B2=Et((Dz,U2)=>{U2.exports=T_;function T_(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var rd=Et((Fz,j2)=>{j2.exports=L_;function L_(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var V2=Et((Gz,W2)=>{W2.exports=N_;function N_(t,e){if(t===e){var o=e[1],n=e[2],r=e[3],a=e[6],i=e[7],s=e[11];t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=o,t[6]=e[9],t[7]=e[13],t[8]=n,t[9]=a,t[11]=e[14],t[12]=r,t[13]=i,t[14]=s}else t[0]=e[0],t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=e[1],t[5]=e[5],t[6]=e[9],t[7]=e[13],t[8]=e[2],t[9]=e[6],t[10]=e[10],t[11]=e[14],t[12]=e[3],t[13]=e[7],t[14]=e[11],t[15]=e[15];return t}});var Y2=Et((Hz,X2)=>{X2.exports=R_;function R_(t,e){var o=e[0],n=e[1],r=e[2],a=e[3],i=e[4],s=e[5],c=e[6],h=e[7],l=e[8],d=e[9],u=e[10],p=e[11],f=e[12],v=e[13],m=e[14],g=e[15],x=o*s-n*i,y=o*c-r*i,w=o*h-a*i,M=n*c-r*s,_=n*h-a*s,S=r*h-a*c,R=l*v-d*f,N=l*m-u*f,G=l*g-p*f,q=d*m-u*v,V=d*g-p*v,D=u*g-p*m,B=x*D-y*V+w*q+M*G-_*N+S*R;return B?(B=1/B,t[0]=(s*D-c*V+h*q)*B,t[1]=(r*V-n*D-a*q)*B,t[2]=(v*S-m*_+g*M)*B,t[3]=(u*_-d*S-p*M)*B,t[4]=(c*G-i*D-h*N)*B,t[5]=(o*D-r*G+a*N)*B,t[6]=(m*w-f*S-g*y)*B,t[7]=(l*S-u*w+p*y)*B,t[8]=(i*V-s*G+h*R)*B,t[9]=(n*G-o*V-a*R)*B,t[10]=(f*_-v*w+g*x)*B,t[11]=(d*w-l*_-p*x)*B,t[12]=(s*N-i*q-c*R)*B,t[13]=(o*q-n*N+r*R)*B,t[14]=(v*y-f*M-m*x)*B,t[15]=(l*M-d*y+u*x)*B,t):null}});var Q2=Et((Uz,K2)=>{K2.exports=O_;function O_(t,e){var o=e[0],n=e[1],r=e[2],a=e[3],i=e[4],s=e[5],c=e[6],h=e[7],l=e[8],d=e[9],u=e[10],p=e[11],f=e[12],v=e[13],m=e[14],g=e[15];return t[0]=s*(u*g-p*m)-d*(c*g-h*m)+v*(c*p-h*u),t[1]=-(n*(u*g-p*m)-d*(r*g-a*m)+v*(r*p-a*u)),t[2]=n*(c*g-h*m)-s*(r*g-a*m)+v*(r*h-a*c),t[3]=-(n*(c*p-h*u)-s*(r*p-a*u)+d*(r*h-a*c)),t[4]=-(i*(u*g-p*m)-l*(c*g-h*m)+f*(c*p-h*u)),t[5]=o*(u*g-p*m)-l*(r*g-a*m)+f*(r*p-a*u),t[6]=-(o*(c*g-h*m)-i*(r*g-a*m)+f*(r*h-a*c)),t[7]=o*(c*p-h*u)-i*(r*p-a*u)+l*(r*h-a*c),t[8]=i*(d*g-p*v)-l*(s*g-h*v)+f*(s*p-h*d),t[9]=-(o*(d*g-p*v)-l*(n*g-a*v)+f*(n*p-a*d)),t[10]=o*(s*g-h*v)-i*(n*g-a*v)+f*(n*h-a*s),t[11]=-(o*(s*p-h*d)-i*(n*p-a*d)+l*(n*h-a*s)),t[12]=-(i*(d*m-u*v)-l*(s*m-c*v)+f*(s*u-c*d)),t[13]=o*(d*m-u*v)-l*(n*m-r*v)+f*(n*u-r*d),t[14]=-(o*(s*m-c*v)-i*(n*m-r*v)+f*(n*c-r*s)),t[15]=o*(s*u-c*d)-i*(n*u-r*d)+l*(n*c-r*s),t}});var J2=Et((Bz,Z2)=>{Z2.exports=C_;function C_(t){var e=t[0],o=t[1],n=t[2],r=t[3],a=t[4],i=t[5],s=t[6],c=t[7],h=t[8],l=t[9],d=t[10],u=t[11],p=t[12],f=t[13],v=t[14],m=t[15],g=e*i-o*a,x=e*s-n*a,y=e*c-r*a,w=o*s-n*i,M=o*c-r*i,_=n*c-r*s,S=h*f-l*p,R=h*v-d*p,N=h*m-u*p,G=l*v-d*f,q=l*m-u*f,V=d*m-u*v;return g*V-x*q+y*G+w*N-M*R+_*S}});var eg=Et((jz,tg)=>{tg.exports=P_;function P_(t,e,o){var n=e[0],r=e[1],a=e[2],i=e[3],s=e[4],c=e[5],h=e[6],l=e[7],d=e[8],u=e[9],p=e[10],f=e[11],v=e[12],m=e[13],g=e[14],x=e[15],y=o[0],w=o[1],M=o[2],_=o[3];return t[0]=y*n+w*s+M*d+_*v,t[1]=y*r+w*c+M*u+_*m,t[2]=y*a+w*h+M*p+_*g,t[3]=y*i+w*l+M*f+_*x,y=o[4],w=o[5],M=o[6],_=o[7],t[4]=y*n+w*s+M*d+_*v,t[5]=y*r+w*c+M*u+_*m,t[6]=y*a+w*h+M*p+_*g,t[7]=y*i+w*l+M*f+_*x,y=o[8],w=o[9],M=o[10],_=o[11],t[8]=y*n+w*s+M*d+_*v,t[9]=y*r+w*c+M*u+_*m,t[10]=y*a+w*h+M*p+_*g,t[11]=y*i+w*l+M*f+_*x,y=o[12],w=o[13],M=o[14],_=o[15],t[12]=y*n+w*s+M*d+_*v,t[13]=y*r+w*c+M*u+_*m,t[14]=y*a+w*h+M*p+_*g,t[15]=y*i+w*l+M*f+_*x,t}});var ng=Et((Wz,og)=>{og.exports=$_;function $_(t,e,o){var n=o[0],r=o[1],a=o[2],i,s,c,h,l,d,u,p,f,v,m,g;return e===t?(t[12]=e[0]*n+e[4]*r+e[8]*a+e[12],t[13]=e[1]*n+e[5]*r+e[9]*a+e[13],t[14]=e[2]*n+e[6]*r+e[10]*a+e[14],t[15]=e[3]*n+e[7]*r+e[11]*a+e[15]):(i=e[0],s=e[1],c=e[2],h=e[3],l=e[4],d=e[5],u=e[6],p=e[7],f=e[8],v=e[9],m=e[10],g=e[11],t[0]=i,t[1]=s,t[2]=c,t[3]=h,t[4]=l,t[5]=d,t[6]=u,t[7]=p,t[8]=f,t[9]=v,t[10]=m,t[11]=g,t[12]=i*n+l*r+f*a+e[12],t[13]=s*n+d*r+v*a+e[13],t[14]=c*n+u*r+m*a+e[14],t[15]=h*n+p*r+g*a+e[15]),t}});var ag=Et((Vz,rg)=>{rg.exports=I_;function I_(t,e,o){var n=o[0],r=o[1],a=o[2];return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=e[7]*r,t[8]=e[8]*a,t[9]=e[9]*a,t[10]=e[10]*a,t[11]=e[11]*a,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var ig=Et((Xz,sg)=>{sg.exports=q_;function q_(t,e,o,n){var r=n[0],a=n[1],i=n[2],s=Math.sqrt(r*r+a*a+i*i),c,h,l,d,u,p,f,v,m,g,x,y,w,M,_,S,R,N,G,q,V,D,B,dt;return Math.abs(s)<1e-6?null:(s=1/s,r*=s,a*=s,i*=s,c=Math.sin(o),h=Math.cos(o),l=1-h,d=e[0],u=e[1],p=e[2],f=e[3],v=e[4],m=e[5],g=e[6],x=e[7],y=e[8],w=e[9],M=e[10],_=e[11],S=r*r*l+h,R=a*r*l+i*c,N=i*r*l-a*c,G=r*a*l-i*c,q=a*a*l+h,V=i*a*l+r*c,D=r*i*l+a*c,B=a*i*l-r*c,dt=i*i*l+h,t[0]=d*S+v*R+y*N,t[1]=u*S+m*R+w*N,t[2]=p*S+g*R+M*N,t[3]=f*S+x*R+_*N,t[4]=d*G+v*q+y*V,t[5]=u*G+m*q+w*V,t[6]=p*G+g*q+M*V,t[7]=f*G+x*q+_*V,t[8]=d*D+v*B+y*dt,t[9]=u*D+m*B+w*dt,t[10]=p*D+g*B+M*dt,t[11]=f*D+x*B+_*dt,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)}});var lg=Et((Yz,cg)=>{cg.exports=D_;function D_(t,e,o){var n=Math.sin(o),r=Math.cos(o),a=e[4],i=e[5],s=e[6],c=e[7],h=e[8],l=e[9],d=e[10],u=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=a*r+h*n,t[5]=i*r+l*n,t[6]=s*r+d*n,t[7]=c*r+u*n,t[8]=h*r-a*n,t[9]=l*r-i*n,t[10]=d*r-s*n,t[11]=u*r-c*n,t}});var hg=Et((Kz,fg)=>{fg.exports=F_;function F_(t,e,o){var n=Math.sin(o),r=Math.cos(o),a=e[0],i=e[1],s=e[2],c=e[3],h=e[8],l=e[9],d=e[10],u=e[11];return e!==t&&(t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=a*r-h*n,t[1]=i*r-l*n,t[2]=s*r-d*n,t[3]=c*r-u*n,t[8]=a*n+h*r,t[9]=i*n+l*r,t[10]=s*n+d*r,t[11]=c*n+u*r,t}});var dg=Et((Qz,ug)=>{ug.exports=G_;function G_(t,e,o){var n=Math.sin(o),r=Math.cos(o),a=e[0],i=e[1],s=e[2],c=e[3],h=e[4],l=e[5],d=e[6],u=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=a*r+h*n,t[1]=i*r+l*n,t[2]=s*r+d*n,t[3]=c*r+u*n,t[4]=h*r-a*n,t[5]=l*r-i*n,t[6]=d*r-s*n,t[7]=u*r-c*n,t}});var vg=Et((Zz,pg)=>{pg.exports=H_;function H_(t,e,o){var n,r,a,i=o[0],s=o[1],c=o[2],h=Math.sqrt(i*i+s*s+c*c);return Math.abs(h)<1e-6?null:(h=1/h,i*=h,s*=h,c*=h,n=Math.sin(e),r=Math.cos(e),a=1-r,t[0]=i*i*a+r,t[1]=s*i*a+c*n,t[2]=c*i*a-s*n,t[3]=0,t[4]=i*s*a-c*n,t[5]=s*s*a+r,t[6]=c*s*a+i*n,t[7]=0,t[8]=i*c*a+s*n,t[9]=s*c*a-i*n,t[10]=c*c*a+r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)}});var gg=Et((Jz,mg)=>{mg.exports=U_;function U_(t,e,o){var n=e[0],r=e[1],a=e[2],i=e[3],s=n+n,c=r+r,h=a+a,l=n*s,d=n*c,u=n*h,p=r*c,f=r*h,v=a*h,m=i*s,g=i*c,x=i*h;return t[0]=1-(p+v),t[1]=d+x,t[2]=u-g,t[3]=0,t[4]=d-x,t[5]=1-(l+v),t[6]=f+m,t[7]=0,t[8]=u+g,t[9]=f-m,t[10]=1-(l+p),t[11]=0,t[12]=o[0],t[13]=o[1],t[14]=o[2],t[15]=1,t}});var yg=Et((tA,xg)=>{xg.exports=B_;function B_(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var wg=Et((eA,bg)=>{bg.exports=j_;function j_(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t}});var Mg=Et((oA,_g)=>{_g.exports=W_;function W_(t,e){var o=Math.sin(e),n=Math.cos(e);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n,t[6]=o,t[7]=0,t[8]=0,t[9]=-o,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var Sg=Et((nA,kg)=>{kg.exports=V_;function V_(t,e){var o=Math.sin(e),n=Math.cos(e);return t[0]=n,t[1]=0,t[2]=-o,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=o,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var zg=Et((rA,Eg)=>{Eg.exports=X_;function X_(t,e){var o=Math.sin(e),n=Math.cos(e);return t[0]=n,t[1]=o,t[2]=0,t[3]=0,t[4]=-o,t[5]=n,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var Tg=Et((aA,Ag)=>{Ag.exports=Y_;function Y_(t,e){var o=e[0],n=e[1],r=e[2],a=e[3],i=o+o,s=n+n,c=r+r,h=o*i,l=n*i,d=n*s,u=r*i,p=r*s,f=r*c,v=a*i,m=a*s,g=a*c;return t[0]=1-d-f,t[1]=l+g,t[2]=u-m,t[3]=0,t[4]=l-g,t[5]=1-h-f,t[6]=p+v,t[7]=0,t[8]=u+m,t[9]=p-v,t[10]=1-h-d,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var Ng=Et((sA,Lg)=>{Lg.exports=K_;function K_(t,e,o,n,r,a,i){var s=1/(o-e),c=1/(r-n),h=1/(a-i);return t[0]=a*2*s,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a*2*c,t[6]=0,t[7]=0,t[8]=(o+e)*s,t[9]=(r+n)*c,t[10]=(i+a)*h,t[11]=-1,t[12]=0,t[13]=0,t[14]=i*a*2*h,t[15]=0,t}});var Og=Et((iA,Rg)=>{Rg.exports=Q_;function Q_(t,e,o,n,r){var a=1/Math.tan(e/2),i=1/(n-r);return t[0]=a/o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(r+n)*i,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*r*n*i,t[15]=0,t}});var Pg=Et((cA,Cg)=>{Cg.exports=Z_;function Z_(t,e,o,n){var r=Math.tan(e.upDegrees*Math.PI/180),a=Math.tan(e.downDegrees*Math.PI/180),i=Math.tan(e.leftDegrees*Math.PI/180),s=Math.tan(e.rightDegrees*Math.PI/180),c=2/(i+s),h=2/(r+a);return t[0]=c,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=h,t[6]=0,t[7]=0,t[8]=-((i-s)*c*.5),t[9]=(r-a)*h*.5,t[10]=n/(o-n),t[11]=-1,t[12]=0,t[13]=0,t[14]=n*o/(o-n),t[15]=0,t}});var Ig=Et((lA,$g)=>{$g.exports=J_;function J_(t,e,o,n,r,a,i){var s=1/(e-o),c=1/(n-r),h=1/(a-i);return t[0]=-2*s,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*c,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*h,t[11]=0,t[12]=(e+o)*s,t[13]=(r+n)*c,t[14]=(i+a)*h,t[15]=1,t}});var Dg=Et((fA,qg)=>{var tM=rd();qg.exports=eM;function eM(t,e,o,n){var r,a,i,s,c,h,l,d,u,p,f=e[0],v=e[1],m=e[2],g=n[0],x=n[1],y=n[2],w=o[0],M=o[1],_=o[2];return Math.abs(f-w)<1e-6&&Math.abs(v-M)<1e-6&&Math.abs(m-_)<1e-6?tM(t):(l=f-w,d=v-M,u=m-_,p=1/Math.sqrt(l*l+d*d+u*u),l*=p,d*=p,u*=p,r=x*u-y*d,a=y*l-g*u,i=g*d-x*l,p=Math.sqrt(r*r+a*a+i*i),p?(p=1/p,r*=p,a*=p,i*=p):(r=0,a=0,i=0),s=d*i-u*a,c=u*r-l*i,h=l*a-d*r,p=Math.sqrt(s*s+c*c+h*h),p?(p=1/p,s*=p,c*=p,h*=p):(s=0,c=0,h=0),t[0]=r,t[1]=s,t[2]=l,t[3]=0,t[4]=a,t[5]=c,t[6]=d,t[7]=0,t[8]=i,t[9]=h,t[10]=u,t[11]=0,t[12]=-(r*f+a*v+i*m),t[13]=-(s*f+c*v+h*m),t[14]=-(l*f+d*v+u*m),t[15]=1,t)}});var Gg=Et((hA,Fg)=>{Fg.exports=oM;function oM(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"}});var cc=Et((uA,Hg)=>{Hg.exports={create:F2(),clone:H2(),copy:B2(),identity:rd(),transpose:V2(),invert:Y2(),adjoint:Q2(),determinant:J2(),multiply:eg(),translate:ng(),scale:ag(),rotate:ig(),rotateX:lg(),rotateY:hg(),rotateZ:dg(),fromRotation:vg(),fromRotationTranslation:gg(),fromScaling:yg(),fromTranslation:wg(),fromXRotation:Mg(),fromYRotation:Sg(),fromZRotation:zg(),fromQuat:Tg(),frustum:Ng(),perspective:Og(),perspectiveFromFieldOfView:Pg(),ortho:Ig(),lookAt:Dg(),str:Gg()}});var jg=Et((dA,Bg)=>{"use strict";var Ug=q2(),En=cc(),Ws=M0(),nM=3e3,_h="high",ad,El=.36,zl=13.64,lc=Ws.C.hallEnd-.01,Al=Ws.C.z0+.01,rM=.356,aM=13.644,sM=Ws.C.hallEnd-.006,iM=Ws.C.z0+.006,cM=.12,kh=4,fc=t=>k0[t]&&k0[t].cy||kh,sd=.26,lM=5.6,fM=7,k0=[{side:"right",z:34.5},{side:"right",z:23.5},{side:"left",z:23.5},{side:"end",z:lc},{side:"left",z:34.5},{side:"right",z:14.6},{side:"left",z:14.6,maxW:3.7,maxH:3.7},{side:"corridor",x:Ws.PAINTING_X[0],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:Ws.PAINTING_X[1],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:Ws.PAINTING_X[2],cy:3,maxW:3.3,maxH:3.73}];function hM(t,e){let o=e&&e.maxH||lM,n=e&&e.maxW||fM,r=Math.min(o,n/t);return{width:r*t,height:r}}function uM(t,e,o){let n=k0[o],r=[],a=fc(o)-e/2;return n.side==="left"?(En.fromTranslation(r,[El,a,n.z+t/2]),En.rotateY(r,r,Math.PI/2)):n.side==="right"?(En.fromTranslation(r,[zl,a,n.z-t/2]),En.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?En.fromTranslation(r,[n.x-t/2,a,Al]):(En.fromTranslation(r,[7+t/2,a,lc]),En.rotateY(r,r,Math.PI)),En.scale(r,r,[t,e,cM]),r}function dM(t,e,o){let n=k0[o],r=[],a=fc(o)-e/2;return n.side==="left"?(En.fromTranslation(r,[El,a,n.z+t/2]),En.rotateY(r,r,Math.PI/2)):n.side==="right"?(En.fromTranslation(r,[zl,a,n.z-t/2]),En.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?En.fromTranslation(r,[n.x-t/2,a,Al]):(En.fromTranslation(r,[7+t/2,a,lc]),En.rotateY(r,r,Math.PI)),r}function pM(t,e,o){let n=k0[o],r=[],a=fc(o)-e/2-sd-.38;return n.side==="left"?(En.fromTranslation(r,[rM,a,n.z+t/2]),En.rotateY(r,r,Math.PI/2)):n.side==="right"?(En.fromTranslation(r,[aM,a,n.z-t/2]),En.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?En.fromTranslation(r,[n.x-t/2,a,iM]):(En.fromTranslation(r,[7+t/2,a,sM]),En.rotateY(r,r,Math.PI)),En.scale(r,r,[2,2,2]),r}function vM(t,e,o){let n=k0[o],r=fc(o)-e/2-sd-.38;return n.side==="left"?[El+.55,r,n.z]:n.side==="right"?[zl-.55,r,n.z]:n.side==="corridor"?[n.x,r,Al+.55]:[7,r,lc-.55]}var Sl=.42;function Mh(t,e,o,n,r,a){return[e[0]*n,e[1]*n,e[2]*n,0,0,r,0,0,o[0]*a,o[1]*a,o[2]*a,0,t[0],t[1],t[2],1]}function mM(t,e,o){let n=k0[o],r,a,i;n.side==="left"?(r=[El,n.z],a=[0,0,1],i=[1,0,0]):n.side==="right"?(r=[zl,n.z],a=[0,0,1],i=[-1,0,0]):n.side==="corridor"?(r=[n.x,Al],a=[1,0,0],i=[0,0,1]):(r=[7,lc],a=[1,0,0],i=[0,0,-1]);let s=fc(o)+e/2+sd+.3,c=Math.min(2.4,Math.max(.9,t*.55)),h=(p,f)=>[r[0]+i[0]*p,f,r[1]+i[2]*p],l=[.075,.062,.05],d=[{fixmodel:Mh(h(.014,s),a,i,.1,.13,.028),fixcol:l,fixglow:0},{fixmodel:Mh(h(Sl/2,s),a,i,.02,.02,Sl),fixcol:l,fixglow:0},{fixmodel:Mh(h(Sl,s),a,i,c,.034,.05),fixcol:l,fixglow:0},{fixmodel:Mh(h(Sl-.012,s-.019),a,i,c*.94,.006,.028),fixcol:l,fixglow:1}],u=h(Sl,s-.02);return{fixtures:d,light:{c:[u[0],u[1],u[2],1],d:[a[0],a[1],a[2],c/2]}}}Bg.exports=(t,e)=>{let o=[],n=[],r=a=>{let i=a.image_id;if(!k0[i])return;let{width:s,height:c}=hM(a.aspect,k0[i]),h=mM(s,c,i);e&&e.lights&&i<e.lights.length&&(e.lights[i]=h.light),o.push({...a,fixtures:h.fixtures,side:k0[i].side,model:uM(s,c,i),framemodel:dM(s,c,i),framesize:[s,c],textmodel:pM(s,c,i),text:a.textGen(s),width:s,height:c,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:vM(s,c,i),paintingPosition:k0[i].side==="left"?[El+.05,kh,k0[i].z]:k0[i].side==="right"?[zl-.05,kh,k0[i].z]:k0[i].side==="corridor"?[k0[i].x,fc(i),Al+.05]:[7,kh,lc-.05],textGen:null})};return Ug.fetch(t,k0.length,_h,r,()=>{}),{update:()=>{n=o,n.forEach(a=>{Ug.load(t,a,_h)}),_h="low",ad&&clearTimeout(ad),ad=setTimeout(()=>{_h="high"},nM)},batch:()=>n,interactables:()=>n.map((a,i)=>({side:a.side,width:a.width,index:i,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:a.plaquePosition,paintingPosition:a.paintingPosition}))}}});var Yg=Et((pA,Xg)=>{"use strict";var gM=Zu(),Wg=Sr(),Vg=[[-.02,.125],[-.02,.15],[.035,.15],[.07,.12],[.07,.17],[.185,.17],[.185,.19],[.215,.19],[.26,.03]];function xM(){let t=[[0,0],[1,0],[1,1],[0,1]],e=[];Vg.forEach(([n,r])=>{t.forEach(([a,i])=>e.push([a,i,n,r]))});let o=[];for(let n=0;n<Vg.length-1;n++)for(let r=0;r<4;r++){let a=(r+1)%4,i=n*4+r,s=n*4+a,c=(n+1)*4+r,h=(n+1)*4+a;o.push(i,s,h,i,h,c)}return{verts:e,elems:o}}var yM=`#extension GL_OES_standard_derivatives : enable
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
	${Ka().lanternGLSL()}
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
	}`,attributes:{pos:[0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,-.1,-.1,0,1.1,-.1,0,-.1,1.1,0,1.1,1.1,0]},elements:[0,1,2,3,2,1,1,0,5,4,5,0,3,1,7,5,7,1,0,2,4,6,4,2,8,9,4,5,4,9,9,11,5,7,5,11,11,10,7,6,7,10,10,8,6,4,6,8],uniforms:{model:t.prop("model"),tex:t.prop("tex"),psize:t.prop("framesize"),canvasCm:(i,s)=>s.size?[s.size[1],s.size[0]]:[61,91],texel:1/(Wg.isPhone?1024:2048),detail:()=>Wg.post===0?0:1},blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}}),n=xM(),r=t({frag:yM,vert:bM,attributes:{prof:n.verts},elements:n.elems,uniforms:{model:t.prop("framemodel"),fsize:t.prop("framesize")},cull:{enable:!1},blend:{enable:!1}}),a=t({frag:`#extension GL_OES_standard_derivatives : enable
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
}`,attributes:{pos:[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5],[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]]},elements:[0,1,2,0,2,3,4,5,6,4,6,7,0,1,5,0,5,4,2,3,7,2,7,6,0,3,7,0,7,4,1,2,6,1,6,5],uniforms:{model:t.prop("fixmodel"),fixcol:t.prop("fixcol"),fixglow:t.prop("fixglow")},cull:{enable:!1},blend:{enable:!1}});return function(i){o(i),r(i);let s=[];i.forEach(c=>{c.fixtures&&s.push(...c.fixtures)}),s.length&&a(s),e(i)}}});var Ks=Et((mA,Xr)=>{"use strict";var po=Math.PI,at=t=>(+t).toFixed(4),Ce=[-90,0,0],$t=16,$e=22,mo=7.8,ur=11.6,x0=.55,dr=(ur-mo)/($t/2),ge={c:[3.6,8.6,13.6,18.6],hw:1.3,sill:.62,spring:4.9};ge.top=ge.spring+ge.hw;var U0={cols:[-.65,0,.65],rowH:.71,w:.055,ring:.78},Qo={rafter:$e/12,rafterW:.1,purlin:1,purlinW:.07},Rl=[5.5,11,16.5],Lo={cx:$t/2,hw:1.12,spring:3.95,pier:1.05,face:$e-1.45,back:$e-.2,floor:.66,top:6.55};Lo.x0=Lo.cx-Lo.hw-Lo.pier;Lo.x1=Lo.cx+Lo.hw+Lo.pier;var ct={x0:$t/2-1.7,x1:$t/2+1.7,z0:$e-Lo.face+.44,z1:$e-7.2,curb:.5,top:.36},Fn=t=>ct.z1-(t-5.6)/11*(ct.z1-ct.z0),xn={x:$t/2,z:1,plinth:Lo.floor+.26,height:2.75,yaw:.35,file:"res/nymph.bin"},Sh=$e-xn.z,fa=(()=>{let t=[-.68,.6,.36],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),id=t=>[t[0]+Ce[0],t[1]+Ce[1],t[2]+Ce[2]];function t3(){let t=ge.c.map(o=>`
		{
			float dz = q.z - ${at(o)};
			float inside = smoothstep(-b, b, ${at(ge.hw)} - abs(dz)) * smoothstep(-b, b, q.y - ${at(ge.sill)});
			float arch = smoothstep(-b, b, ${at(ge.hw)} - length(vec2(dz, max(q.y - ${at(ge.spring)}, 0.0))));
			o = max(o, inside * arch);
		}`).join(""),e=ge.c.map(o=>`
		{
			float dz = q.z - ${at(o)};
			if (abs(dz) < ${at(ge.hw+.2)}) {
				${U0.cols.map(n=>`bar = max(bar, 1.0 - smoothstep(${at(U0.w*.5)} - b, ${at(U0.w*.5)} + b, abs(dz - ${at(n)})));`).join(`
				`)}
				float ry = q.y - ${at(ge.sill)};
				float tr = abs(ry - ${at(U0.rowH)} * floor(ry / ${at(U0.rowH)} + 0.5));
				if (q.y < ${at(ge.spring+.02)}) bar = max(bar, 1.0 - smoothstep(${at(U0.w*.5)} - b, ${at(U0.w*.5)} + b, tr));
				float rr = length(vec2(dz, q.y - ${at(ge.spring)}));
				if (q.y > ${at(ge.spring)}) bar = max(bar, 1.0 - smoothstep(${at(U0.w*.5)} - b, ${at(U0.w*.5)} + b, abs(rr - ${at(U0.ring)})));
				// the frame round the opening
				bar = max(bar, 1.0 - smoothstep(0.0, b + 0.03, ${at(ge.hw)} - max(abs(dz), q.y > ${at(ge.spring)} ? rr : 0.0)));
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
		vec3 p = pw - vec3(${at(Ce[0])}, ${at(Ce[1])}, ${at(Ce[2])});
		vec3 S = STUDIO_SUN;
		// the niche: inside its hollow, the sun gets in only through the arch;
		// elsewhere its block of stone stands in the way of some of the light
		{
			// (worked as if the niche stood against the far wall: z turned round)
			vec3 q = vec3(${at($t)} - p.x, p.y, ${at($e)} - p.z);
			vec3 Sq = vec3(-S.x, S.y, -S.z);
			float dxn = q.x - ${at(Lo.cx)};
			if (abs(dxn) < ${at(Lo.hw)} && q.z > ${at(Lo.face)} && q.y > ${at(Lo.floor-.05)} && q.y < ${at(Lo.spring)} + sqrt(max(${at(Lo.hw*Lo.hw)} - dxn * dxn, 0.0))) {
				if (Sq.z >= 0.0) return 0.0;
				vec3 hf = q + Sq * ((${at(Lo.face)} - q.z) / Sq.z);
				float hx = hf.x - ${at(Lo.cx)};
				float edge = ${at(Lo.hw)} - abs(hx);
				float topY = ${at(Lo.spring)} + sqrt(max(${at(Lo.hw*Lo.hw)} - hx * hx, 0.0));
				float soft = 0.02 + 0.03 * (${at(Lo.face)} - q.z) / Sq.z;
				float inA = smoothstep(-soft, soft, edge) * smoothstep(-soft, soft, topY - hf.y);
				if (inA <= 0.0) return 0.0;
			} else {
				vec3 bmin = vec3(${at(Lo.x0-.2)}, 0.0, ${at(Lo.face-.3)}), bmax = vec3(${at(Lo.x1+.2)}, ${at(6.95)}, ${at($e)});
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
		float te = (${at(mo)} - p.y) / S.y;
		if (tw > 0.0 && tw < te) {
			vec3 h0 = p + S * tw;
			if (h0.z < 0.0 || h0.z > ${at($e)}) return 0.0;
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
		if (p.y < ${at(mo)}) {
			if (he.z < 0.0 || he.z > ${at($e)} || he.x < 0.0 || he.x > ${at($t)}) return 0.0;
			float be = 0.01 + 0.008 * te;
			${Rl.map(o=>`vis *= smoothstep(0.08 - be, 0.08 + be, abs(he.z - ${at(o)}));`).join(`
			`)}
			// the bougainvillea along the tie beams
			${Xs.filter(o=>o[0]==="truss").map(([o,n,r])=>`vis *= 1.0 - studioVineShade(he.z - ${at(n)}, he.x, he.z, ${at(r)});`).join(`
			`)}
		}
		// then the glass: the two slopes of the roof
		float tl = (${at(dr)} * p.x - p.y + ${at(mo)}) / (S.y - ${at(dr)} * S.x);
		float tr = (${at(dr)} * (${at($t)} - p.x) - p.y + ${at(mo)}) / (S.y + ${at(dr)} * S.x);
		float t = 1e9;
		vec3 h = vec3(0.0);
		vec3 hl = p + S * tl, hr = p + S * tr;
		if (tl > 0.0 && hl.x >= -0.01 && hl.x <= ${at($t/2+.01)}) { t = tl; h = hl; }
		if (tr > 0.0 && tr < t && hr.x >= ${at($t/2-.01)} && hr.x <= ${at($t+.01)}) { t = tr; h = hr; }
		if (t > 1e8) return 0.0;
		if (h.z < 0.0 || h.z > ${at($e)}) return 0.0;
		float b = 0.008 + 0.0075 * t;
		float rz = abs(h.z - ${at(Qo.rafter)} * floor(h.z / ${at(Qo.rafter)} + 0.5));
		float bar = 1.0 - smoothstep(${at(Qo.rafterW*.5)} - b, ${at(Qo.rafterW*.5)} + b, rz);
		float ux = h.x < ${at($t/2)} ? h.x : ${at($t)} - h.x;
		float rx = abs(ux - ${at(Qo.purlin)} * floor(ux / ${at(Qo.purlin)} + 0.5));
		bar = max(bar, 1.0 - smoothstep(${at(Qo.purlinW*.5)} - b, ${at(Qo.purlinW*.5)} + b, rx));
		// the ridge beam
		bar = max(bar, 1.0 - smoothstep(0.14 - b, 0.14 + b, abs(h.x - ${at($t/2)})));
		// the leaded pattern in the panes (its shadow is crisper than
		// the sun's disc would allow, for the drawing to read)
		vec2 pq = vec2(ux - ${at(Qo.purlin)} * floor(ux / ${at(Qo.purlin)}) - ${at(Qo.purlin/2)}, h.z - ${at(Qo.rafter)} * floor(h.z / ${at(Qo.rafter)}) - ${at(Qo.rafter/2)});
		float pat = studioRoofPattern(pq, 0.004 + 0.0035 * t);
		// and along the rafters and the ridge
		${Xs.filter(o=>o[0]==="rafter").map(([o,n,r])=>`pat *= 1.0 - studioVineShade(h.z - ${at(n)}, h.x, h.z, ${at(r)});`).join(`
		`)}
		pat *= 1.0 - studioVineShade(h.x - ${at($t/2)}, h.z, h.x, 0.9);
		return vis * (1.0 - bar) * pat * 0.78;
	}`}function Ys(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let o=e;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}var kt={FLOOR:0,PLASTER:1,STONE:2,STEEL:3,WATER:4,PAD:5,PETAL:6,STAMEN:7,MARBLE:8,WOOD:9,GESSO:10,PAINT:11,POT:12,SHADE:13,BULB:14,NICHE:15,JAR:16,SOIL:17,BRUSH:18,TRAVERTINE:19,CLOTH:20,WMARBLE:21,REDDOOR:22,REDPANEL:23,DARKWOOD:24,BRASS:25,BRACT:26,KEYHOLE:27,ROCK:28,OLDSTONE:29,HOLLOW:30};function cd(){let t={pos:[],nrm:[],kind:[],uv:[],anchor:[],idx:[]};return t.float=null,t.v=(e,o,n,r)=>(t.pos.push(e[0]+Ce[0],e[1]+Ce[1],e[2]+Ce[2]),t.nrm.push(o[0],o[1],o[2]),t.kind.push(n),t.uv.push(r?r[0]:0,r?r[1]:0),t.float?t.anchor.push(t.float[0]+Ce[0],t.float[1]+Ce[2],t.float[2],1):t.anchor.push(0,0,0,0),t.pos.length/3-1),t.quad=(e,o,n,r,a,i,s)=>{let c=t.v(e,a,i,s&&s[0]),h=t.v(o,a,i,s&&s[1]),l=t.v(n,a,i,s&&s[2]),d=t.v(r,a,i,s&&s[3]);t.idx.push(c,h,l,c,l,d)},t.box=(e,o,n,r,a,i,s,c)=>{let h=c||{};h.top||t.quad([e,a,n],[e,a,i],[r,a,i],[r,a,n],[0,1,0],s,[[e,n],[e,i],[r,i],[r,n]]),h.bottom||t.quad([e,o,n],[r,o,n],[r,o,i],[e,o,i],[0,-1,0],s,[[e,n],[r,n],[r,i],[e,i]]),h.x0||t.quad([e,o,n],[e,o,i],[e,a,i],[e,a,n],[-1,0,0],s,[[n,o],[i,o],[i,a],[n,a]]),h.x1||t.quad([r,o,i],[r,o,n],[r,a,n],[r,a,i],[1,0,0],s,[[i,o],[n,o],[n,a],[i,a]]),h.z0||t.quad([r,o,n],[e,o,n],[e,a,n],[r,a,n],[0,0,-1],s,[[r,o],[e,o],[e,a],[r,a]]),h.z1||t.quad([e,o,i],[r,o,i],[r,a,i],[e,a,i],[0,0,1],s,[[e,o],[r,o],[r,a],[e,a]])},t.tbox=(e,o,n,r,a,i,s,c,h)=>{let l=Math.cos(n),d=Math.sin(n),u=Math.cos(h||0),p=Math.sin(h||0),f=(g,x,y)=>{let w=a+(x-a)*u-y*p*0,M=y+(x-a)*p,_=a+(x-a)*u;return[e+l*g+d*M,_,o-d*g+l*M]},v=g=>{let x=g[1]*u-g[2]*p,y=g[2]*u+g[1]*p;return[l*g[0]+d*y,x,-d*g[0]+l*y]},m=(g,x,y,w,M)=>t.quad(f(...g),f(...x),f(...y),f(...w),v(M),c,[[g[0]+g[2],g[1]],[x[0]+x[2],x[1]],[y[0]+y[2],y[1]],[w[0]+w[2],w[1]]]);m([-r,i,-s],[-r,i,s],[r,i,s],[r,i,-s],[0,1,0]),m([-r,a,-s],[r,a,-s],[r,a,s],[-r,a,s],[0,-1,0]),m([-r,a,-s],[-r,a,s],[-r,i,s],[-r,i,-s],[-1,0,0]),m([r,a,s],[r,a,-s],[r,i,-s],[r,i,s],[1,0,0]),m([r,a,-s],[-r,a,-s],[-r,i,-s],[r,i,-s],[0,0,-1]),m([-r,a,s],[r,a,s],[r,i,s],[-r,i,s],[0,0,1])},t.beam=(e,o,n,r,a)=>{let i=[o[0]-e[0],o[1]-e[1],o[2]-e[2]],s=Math.hypot(...i),c=i.map(f=>f/s),h=a||(Math.abs(c[1])>.9?[1,0,0]:[0,1,0]),l=[c[1]*h[2]-c[2]*h[1],c[2]*h[0]-c[0]*h[2],c[0]*h[1]-c[1]*h[0]],d=Math.hypot(...l);l=l.map(f=>f/d),h=[l[1]*c[2]-l[2]*c[1],l[2]*c[0]-l[0]*c[2],l[0]*c[1]-l[1]*c[0]];let u=(f,v,m)=>[f[0]+l[0]*n*v+h[0]*n*m,f[1]+l[1]*n*v+h[1]*n*m,f[2]+l[2]*n*v+h[2]*n*m],p=[[[1,-1],[1,1],l],[[1,1],[-1,1],h],[[-1,1],[-1,-1],l.map(f=>-f)],[[-1,-1],[1,-1],h.map(f=>-f)]];for(let[f,v,m]of p)t.quad(u(e,...f),u(o,...f),u(o,...v),u(e,...v),m,r,[[0,0],[s,0],[s,1],[0,1]])},t.lathe=(e,o,n,r,a)=>{let i=a||32,s=n.map(([c,h],l)=>{let d=n[Math.max(0,l-1)],u=n[Math.min(n.length-1,l+1)],p=u[0]-d[0],f=u[1]-d[1],v=Math.hypot(p,f)||1,m=f/v,g=-p/v,x=[];for(let y=0;y<=i;y++){let w=y/i*2*po;x.push(t.v([e+Math.cos(w)*c,h,o+Math.sin(w)*c],[Math.cos(w)*m,g,Math.sin(w)*m],r,[y/i*c*2*po,h]))}return x});for(let c=0;c<s.length-1;c++)for(let h=0;h<i;h++){let l=s[c][h],d=s[c][h+1],u=s[c+1][h+1],p=s[c+1][h];t.idx.push(l,p,u,l,u,d)}},t}var Na=t=>Math.abs(t)>=ge.hw?null:ge.spring+Math.sqrt(ge.hw*ge.hw-t*t),Xs=[["truss",Rl[0],3.1],["truss",Rl[1],5.4],["truss",Rl[2],7.7],["rafter",Qo.rafter*2,1.7],["rafter",Qo.rafter*5,8.5],["rafter",Qo.rafter*8,13.6],["rafter",Qo.rafter*10,17],["ridge",$t/2,.9],...[.75,...ge.c.slice(1).map((t,e)=>(t+ge.c[e])/2),$e-.75].map((t,e)=>["wall",t,2.3+e*4.1])],Cl=(t,e)=>.5*Math.sin(t*1.9+e)+.5*Math.sin(t*.77+e*1.3)>-.25,wM=t=>t<$t/2?mo+dr*t:mo+dr*($t-t);function Ah(t,e,o){return t==="wall"?[.12,o,e]:t==="truss"?[o,mo-.12,e]:t==="rafter"?[o,wM(o)-.2,e]:[e,ur-.32,o]}var Th=t=>t==="ridge"?[.4,$e-.4]:t==="wall"?[.15,mo-.05]:[.35,$t-.35],y0={w:1.72,spring:2.05,r:2.05,frame:.21,zl:$e-.05,zf:$e-.13};y0.c=y0.r-y0.w/2;var Nr=(t,e)=>{let o=y0.r+(e||0),n=Math.abs(t)+y0.c;return n>=o?y0.spring:y0.spring+Math.sqrt(o*o-n*n)};y0.top=Nr(0);function _M(t){let e=$t/2,{w:o,frame:n,zl:r,zf:a}=y0,i=o/2,s=i+n,c=.02;for(let _=-s;_<s-1e-6;_+=c){let S=_,R=Math.min(s,_+c),N=(S+R)/2,G=Nr(S,n),q=Nr(R,n),V=0,D=0;Math.abs(N)<i&&(V=Nr(S),D=Nr(R)),Math.abs(N)>=i;{let B=Math.abs(N)<i?V:0,dt=Math.abs(N)<i?D:0;t.quad([e+R,dt,a],[e+S,B,a],[e+S,G,a],[e+R,q,a],[0,0,-1],kt.DARKWOOD,[[R,dt],[S,B],[S,G],[R,q]])}t.quad([e+S,G,a],[e+S,G,$e],[e+R,q,$e],[e+R,q,a],[0,1,0],kt.DARKWOOD,[[S,0],[S,1],[R,1],[R,0]]),Math.abs(N)<i&&t.quad([e+S,V,a],[e+R,D,a],[e+R,D,r],[e+S,V,r],[0,-1,0],kt.DARKWOOD,[[S,0],[R,0],[R,1],[S,1]])}for(let _ of[-1,1])t.quad([e+_*s,0,a],[e+_*s,0,$e],[e+_*s,y0.spring,$e],[e+_*s,y0.spring,a],[_,0,0],kt.DARKWOOD,[[0,0],[1,0],[1,1],[0,1]]),t.quad([e+_*i,0,a],[e+_*i,y0.spring,a],[e+_*i,y0.spring,r],[e+_*i,0,r],[-_,0,0],kt.DARKWOOD,[[0,0],[1,0],[1,1],[0,1]]),t.box(e+_*(i+n/2)-n/2-.04,0,a-.04,e+_*(i+n/2)+n/2+.04,.42,$e,kt.DARKWOOD);let h=40;for(let _=0;_<h;_++){let S=-i+2*i*_/h,R=-i+2*i*(_+1)/h;t.beam([e+S,Nr(S)+.03,a-.015],[e+R,Nr(R)+.03,a-.015],.018,kt.DARKWOOD)}for(let _ of[-1,1])t.beam([e+_*(i+.03),.42,a-.015],[e+_*(i+.03),y0.spring+.02,a-.015],.018,kt.DARKWOOD);for(let _=-i;_<i-1e-6;_+=c){let S=_,R=Math.min(i,_+c),N=Nr(S),G=Nr(R);t.quad([e+R,0,r],[e+S,0,r],[e+S,N,r],[e+R,G,r],[0,0,-1],kt.REDDOOR,[[R,0],[S,0],[S,N],[R,G]])}let l=i-.2,d=.3,u=2.12,p=r-.006,f=.05,v=(_,S,R,N)=>t.box(e+_,S,p-.018,e+R,N,p,kt.REDDOOR);v(-l,d,l,d+f),v(-l,u-f,l,u),v(-l,d,-l+f,u),v(l-f,d,l,u),t.box(e-l+.14,d+.14,p-.022,e+l-.14,u-.14,p,kt.REDDOOR);let m=2.36;v(-i+.08,u+.06,i-.08,u+.12);for(let _ of[-1,1]){let R=i-.17;for(let N=.07;N<R-1e-6;N+=c){let G=N,q=Math.min(R,N+c),V=Nr(G,-.18),D=Nr(q,-.18);if(V<=m+.02&&D<=m+.02)continue;let B=Gt=>e+_*Gt,dt=[[B(G),m,p+.004],[B(q),m,p+.004],[B(q),Math.max(m,D),p+.004],[B(G),Math.max(m,V),p+.004]];_>0?t.quad(dt[1],dt[0],dt[3],dt[2],[0,0,-1],kt.REDPANEL,[[q,0],[G,0],[G,1],[q,1]]):t.quad(...dt,[0,0,-1],kt.REDPANEL,[[G,0],[q,0],[q,1],[G,1]])}}t.beam([e,m-.02,p-.008],[e,Nr(0,-.12),p-.008],.03,kt.REDDOOR),t.beam([e-i+.1,m-.01,p-.006],[e+i-.1,m-.01,p-.006],.014,kt.REDDOOR);let g=e-i+.15,x=1.06,y=p-.03;t.box(g-.034,x-.2,y-.008,g+.034,x+.17,y+.012,kt.BRASS);for(let[_,S]of[[x+.2,.026],[x+.235,.016],[x-.23,.026],[x-.265,.016]])t.lathe(g,y-.002,[[0,_-S],[S,_-S*.4],[S,_+S*.4],[0,_+S]],kt.BRASS,12);for(let _=0;_<6;_++){let S=x-.17+_*.065;for(let R of[-1,1])t.beam([g+R*.034,S,y-.01],[g+R*.041,S+.03,y-.01],.006,kt.BRASS)}let w=y-.008,M=(_,S,R)=>{for(let N=0;N<R;N++){let G=po*N/R,q=po*(N+1)/R;for(let V=0;V<16;V++){let D=2*po*V/16,B=2*po*(V+1)/16,dt=(ze,Se)=>[g+S*Math.sin(ze)*Math.cos(Se),x+.03+S*Math.sin(ze)*Math.sin(Se),_-S*Math.cos(ze)],Gt=(ze,Se)=>[Math.sin(ze)*Math.cos(Se),Math.sin(ze)*Math.sin(Se),-Math.cos(ze)],Nt=t.v(dt(G,D),Gt(G,D),kt.BRASS),xt=t.v(dt(G,B),Gt(G,B),kt.BRASS),ot=t.v(dt(q,B),Gt(q,B),kt.BRASS),Bt=t.v(dt(q,D),Gt(q,D),kt.BRASS);t.idx.push(Nt,xt,ot,Nt,ot,Bt)}}};t.beam([g,x+.03,w],[g,x+.03,w-.05],.011,kt.BRASS),M(w-.075,.034,10),t.box(g-.008,x-.1,y-.0125,g+.008,x-.06,y-.0085,kt.KEYHOLE)}function MM(t,e){let o=t.pos.length/3;for(let n=0;n<e.pos.length;n+=3){let r=e.pos[n]-Ce[0],a=e.pos[n+2]-Ce[2];t.pos.push($t-r+Ce[0],e.pos[n+1],$e-a+Ce[2]),t.nrm.push(-e.nrm[n],e.nrm[n+1],-e.nrm[n+2])}t.kind.push(...e.kind),t.uv.push(...e.uv),t.anchor.push(...e.anchor);for(let n of e.idx)t.idx.push(n+o)}function kM(t){let{cx:e,hw:o,spring:n,pier:r,face:a,back:i,floor:s,x0:c,x1:h}=Lo,l=kt.OLDSTONE,d=kt.HOLLOW,u=i-o,p=5.35,f=m=>n+Math.sqrt(Math.max(0,o*o-(m-e)*(m-e)));t.box(c-.1,0,a-.28,h+.1,s-.06,$e,l,{bottom:!0}),t.box(c-.14,s-.06,a-.34,h+.14,s,$e,l),t.box(e-.95,ct.top,a-.62,e+.95,ct.top+.15,a-.28,l,{bottom:!0});for(let[m,g]of[[c,e-o],[e+o,h]]){t.box(m,s,a+.03,g,p,$e,d,{bottom:!0});let x=m<e?m:g,y=m<e?g:m,w=m<e?1:-1,M=11,_=(p-.38-s)/M;for(let S=0;S<M;S++){let R=s+S*_+.018,N=s+(S+1)*_-.018,G=S%2===0,q=x+w*.01,V=G?y-w*.01:x+w*(r*.66);if(t.box(Math.min(q,V),R,a-.06,Math.max(q,V),N,a+.03,l,{z1:!0}),!G){let B=x+w*(r*.66+.025),dt=y-w*.01;t.box(Math.min(B,dt),R,a-.02,Math.max(B,dt),N,a+.03,l,{z1:!0})}let D=x-w*.035;t.box(Math.min(D,x+w*.02),R,a-.035,Math.max(D,x+w*.02),N,G?a+.9:a+.55,l)}t.box(m-.05,p-.38,a-.07,g+.05,p-.3,$e,l),t.box(m-.02,p-.3,a-.03,g+.02,p-.12,$e,l),t.box(m-.09,p-.12,a-.11,g+.09,p,$e,l)}let v=.03;for(let m=e-o;m<e+o-1e-6;m+=v){let g=m,x=Math.min(e+o,m+v);t.quad([x,f(x),a+.02],[g,f(g),a+.02],[g,p,a+.02],[x,p,a+.02],[0,0,-1],l,[[x,f(x)],[g,f(g)],[g,p],[x,p]])}{let g=o+.07;for(let y=0;y<36;y++){let w=po*y/36,M=po*(y+1)/36;t.beam([e+Math.cos(w)*g,n+Math.sin(w)*g,a-.02],[e+Math.cos(M)*g,n+Math.sin(M)*g,a-.02],.065,l,[0,0,1])}for(let y of[-1,1])t.box(e+y*o-.16,n-.14,a-.06,e+y*o+.16,n,a+.4,l);let x=n+o;t.quad([e-.17,x+.32,a-.08],[e+.17,x+.32,a-.08],[e+.11,x-.06,a-.08],[e-.11,x-.06,a-.08],[0,0,-1],l,[[0,1],[1,1],[1,0],[0,0]]);for(let y of[-1,1])t.quad([e+y*.11,x-.06,a-.08],[e+y*.17,x+.32,a-.08],[e+y*.17,x+.32,a+.02],[e+y*.11,x-.06,a+.02],[y,-.15,0],l,[[0,0],[1,0],[1,1],[0,1]]);t.quad([e-.11,x-.06,a-.08],[e+.11,x-.06,a-.08],[e+.11,x-.06,a+.02],[e-.11,x-.06,a+.02],[0,-1,0],l,[[0,0],[1,0],[1,1],[0,1]])}for(let m of[-1,1]){let g=e+m*o;t.quad([g,s,a],[g,s,u],[g,n,u],[g,n,a],[-m,0,0],d,[[a,s],[u,s],[u,n],[a,n]])}{for(let y=0;y<40;y++){let w=po*y/40,M=po*(y+1)/40,_=(R,N)=>[e+Math.cos(R)*o,n+Math.sin(R)*o,N],S=[-Math.cos((w+M)/2),-Math.sin((w+M)/2),0];t.quad(_(w,a),_(M,a),_(M,u),_(w,u),S,d,[[o*w+0,a],[o*M,a],[o*M,u],[o*w,u]])}for(let y=0;y<40;y++){let w=po*y/40,M=po*(y+1)/40,_=(V,D)=>[e+Math.cos(V)*o,D,u+Math.sin(V)*o],S=V=>[-Math.cos(V),0,-Math.sin(V)],R=t.v(_(w,s),S(w),d,[o*w,s]),N=t.v(_(M,s),S(M),d,[o*M,s]),G=t.v(_(M,n),S(M),d,[o*M,n]),q=t.v(_(w,n),S(w),d,[o*w,n]);t.idx.push(R,N,G,R,G,q)}let x=[];for(let y=0;y<=14;y++){let w=po/2*y/14,M=[];for(let _=0;_<=40;_++){let S=po*_/40,R=[Math.cos(S)*Math.cos(w),Math.sin(w),Math.sin(S)*Math.cos(w)];M.push(t.v([e+o*R[0],n+o*R[1],u+o*R[2]],R.map(N=>-N),d,[o*S,n+o*w]))}x.push(M)}for(let y=0;y<14;y++)for(let w=0;w<40;w++){let M=x[y][w],_=x[y][w+1],S=x[y+1][w+1],R=x[y+1][w];t.idx.push(M,_,S,M,S,R)}t.box(e-o,s-.02,a-.02,e+o,s,i,d,{bottom:!0,x0:!0,x1:!0,z1:!0})}t.box(xn.x-.6,s,Sh-.5,xn.x+.6,xn.plinth-.05,Sh+.55,l,{bottom:!0}),t.box(xn.x-.64,xn.plinth-.05,Sh-.54,xn.x+.64,xn.plinth,Sh+.59,l),t.box(c-.06,p,a-.08,h+.06,p+.32,$e,l),t.box(c-.02,p+.32,a-.02,h+.02,p+.78,$e,l),t.box(c-.12,p+.78,a-.16,h+.12,p+.86,$e,l),t.box(c-.2,p+.86,a-.26,h+.2,p+1.02,$e,l);{let m=p+.55,g=.34,x=.2,y=28,w=[];for(let M=0;M<=4;M++){let _=M/4,S=[];for(let R=0;R<=y;R++){let N=2*po*R/y,G=.09*Math.sqrt(Math.max(0,1-_*_))+.01;S.push(t.v([e+Math.cos(N)*g*_,m+Math.sin(N)*x*_,a-.02-G],[Math.cos(N)*_*.6,Math.sin(N)*_*.6,-1],l,[Math.cos(N)*_,Math.sin(N)*_]))}w.push(S)}for(let M=0;M<4;M++)for(let _=0;_<y;_++){let S=w[M][_],R=w[M][_+1],N=w[M+1][_+1],G=w[M+1][_];t.idx.push(S,G,N,S,N,R)}for(let M=0;M<y;M++){let _=2*po*M/y,S=2*po*(M+1)/y;t.beam([e+Math.cos(_)*(g+.03),m+Math.sin(_)*(x+.03),a-.04],[e+Math.cos(S)*(g+.03),m+Math.sin(S)*(x+.03),a-.04],.025,l,[0,0,1])}for(let M of[-1,1])for(let _=0;_<14;_++){let S=1.8*po*_/14,R=1.8*po*(_+1)/14,N=.1*(1-_/16),G=.1*(1-(_+1)/16),q=e+M*(g+.16),V=m;t.beam([q+M*Math.cos(S)*N,V+Math.sin(S)*N,a-.04],[q+M*Math.cos(R)*G,V+Math.sin(R)*G,a-.04],.018,l,[0,0,1])}}{let m=p+1.02,g=.62,x=(h-c)/2+.2,y=a-.2,w=_=>m+g*(1-Math.abs(_-e)/x);for(let _=e-x;_<e+x-1e-6;_+=.1){let S=_,R=Math.min(e+x,_+.1);t.quad([R,m,y],[S,m,y],[S,w(S),y],[R,w(R),y],[0,0,-1],l,[[R,m],[S,m],[S,w(S)],[R,w(R)]])}let M=Math.hypot(x,g);for(let _ of[-1,1]){let S=[_*g/M,x/M,0],R=e+_*(x+.06);t.quad([e,m+g+.06,y-.06],[R,m-.02,y-.06],[R,m-.02,$e],[e,m+g+.06,$e],S,l,[[0,y],[M,y],[M,$e],[0,$e]]),t.quad([e,m+g+.06,y-.06],[e,m+g-.06,y-.06],[R,m-.12,y-.06],[R,m-.02,y-.06],[0,0,-1],l,[[0,1],[0,0],[M,0],[M,1]])}}}function SM(t){let e=Ys(77);for(let[o,n,r]of Xs){let[a,i]=Th(o);for(let s=0;s<2;s++){let c=null;for(let h=a;h<=i;h+=.18){let l=Ah(o,n,h),d=Math.sin(h*3.1+s*2+r)*.07,u=Math.cos(h*2.3+s+r)*.05,p=o==="wall"?.25+.5*h/mo:0,f=o==="wall"?[.05+Math.abs(u)*.6,l[1],l[2]+d*(1.5+s)*(1+2*p)+(s-.5)*p]:o==="ridge"?[l[0]+d,l[1]+u+.12,l[2]]:[l[0],l[1]+u+.12,l[2]+d];c&&(o==="wall"||Cl(h,r)||e()<.5)&&t.beam(c,f,(o==="wall"?.022*(1.2-h/mo):.012)+.008*e(),kt.WOOD),c=f}}}}function EM(t){let e=Ys(4242),o=(r,a)=>!(r>ct.x0-ct.curb-.1&&r<ct.x1+ct.curb+.1&&a>ct.z0-ct.curb-.1&&a<ct.z1+ct.curb+.1)&&r>.2&&r<$t-.2&&a>.3&&a<$e-.4,n=(r,a,i,s)=>{let c=.022+e()*.022,h=e()*2*po,l=Math.cos(h),d=Math.sin(h),u=(f,v)=>[r+(f*l-v*d)*c,a+.004*f*v,i+(f*d+v*l)*c],p=s?2:0;t.quad(u(-1,-1),u(-1,1),u(1,1),u(1,-1),[0,1,0],kt.BRACT,[[p,0],[p,1],[p+1,1],[p+1,0]])};for(let[r,a,i]of Xs){let[s,c]=Th(r);for(let h=s;h<=c;h+=.05){if(!Cl(h,i)||e()>.55)continue;let l=Ah(r,a,h),d=l[0]+(e()-.5)*1.8,u=l[2]+(e()-.5)*1.8;o(d,u)&&n(d,.004,u,e()<.18)}}for(let r=0;r<260;r++){let a=Math.floor(e()*4),i,s;a<2?(i=a?ct.x1+ct.curb+.12+e()*e()*.9:ct.x0-ct.curb-.12-e()*e()*.9,s=ct.z0+e()*(ct.z1-ct.z0)):(s=a===2?ct.z0-ct.curb-.12-e()*e()*.9:ct.z1+ct.curb+.12+e()*e()*.9,i=ct.x0+e()*(ct.x1-ct.x0)),o(i,s)&&n(i,.004,s,e()<.18)}for(let r=0;r<70;r++){let a=ct.x0+.08+e()*(ct.x1-ct.x0-.16),i=ct.z0+.08+e()*(ct.z1-ct.z0-.16);Math.hypot(a-xn.x,i-xn.z)<.6||(t.float=[a,i,a*5.1+i*2.9],n(a,.016,i,e()<.2),t.float=null)}}function zM(t,e,o){let n=(a,i,s,c,h)=>{let l=t.pos.length/3,d=Math.cos(s),u=Math.sin(s),p=Math.cos(c),f=Math.sin(c),v=[d,0,-u],m=[u*f,p,d*f],g=[v[1]*m[2]-v[2]*m[1],v[2]*m[0]-v[0]*m[2],v[0]*m[1]-v[1]*m[0]],x=h?.95:o()*.8;for(let[y,w]of[[0,0],[1,0],[1,1],[0,1]]){let M=(y-.5)*i,_=(w-.5)*i;t.pos.push(a[0]+v[0]*M+m[0]*_+Ce[0],a[1]+v[1]*M+m[1]*_+Ce[1],a[2]+v[2]*M+m[2]*_+Ce[2]),t.nrm.push(...g),t.uv.push(y,w),t.shade.push(x),t.flower.push(1)}t.idx.push(l,l+1,l+2,l,l+2,l+3)};function r(a,i,s){let c=i/mo,h=Math.min(.15+.9*c,a<1||a>$e-1?.6:1.15),l=Math.round(3+7*c),d=i<1?0:Math.round((2+9*c)*(Cl(i*1.4,s)?1:.45));for(let u=0;u<l;u++){let p=o()*2*po;e([.04+o()*.22,i+(o()-.5)*.12,a+(o()-.5)*2*h],[Math.cos(p)*.4+.5,-.2-o()*.5,Math.sin(p)],[0,0,1],.07+o()*.06,.1)}for(let u=0;u<d;u++)n([.06+o()*.28,i+(o()-.5)*.18,a+(o()-.5)*2*h*.9],.34+o()*.32,o()*2*po,(o()-.5)*2.4,o()<.14);if(i>3&&o()<.05){let u=[.15,i,a+(o()-.5)*2*h],p=.4+o()*1.2;for(let f=0;f<p;f+=.13)u=[u[0]+.03,u[1]-.13,u[2]+(o()-.5)*.06],n([u[0],u[1],u[2]],(.26+o()*.2)*(1-.4*f/p),o()*2*po,(o()-.5)*.8,o()<.15)}}for(let[a,i,s]of Xs){let[c,h]=Th(a);for(let l=c;l<=h;l+=.1){if(a==="wall"){r(i,l,s);continue}if(!Cl(l,s))continue;let d=Ah(a,i,l),u=()=>(o()-.5)*.7,p=4+Math.floor(o()*4);for(let f=0;f<p;f++){let v=a==="ridge"?[d[0]+u(),d[1]-o()*.25,d[2]+u()*.4]:[d[0]+u()*.4,d[1]-o()*.25,d[2]+u()];n(v,.42+o()*.4,o()*2*po,(o()-.5)*2.4,o()<.16)}for(let f=0;f<5;f++){let v=o()*2*po;e([d[0]+u()*.6,d[1]-o()*.2,d[2]+u()*.6],[Math.cos(v),-.3-o()*.5,Math.sin(v)],[-Math.sin(v),0,Math.cos(v)],.08+o()*.06,.1)}if(o()<.22){let f=.5+o()*2,v=[d[0],d[1],d[2]],m=[(o()-.5)*.08,(o()-.5)*.08];for(let g=0;g<f;g+=.13){v=[v[0]+m[0],v[1]-.13,v[2]+m[1]];let x=(.3+o()*.22)*(1-.4*g/f);if(n([v[0]+(o()-.5)*.08,v[1],v[2]+(o()-.5)*.08],x,o()*2*po,(o()-.5)*.8,o()<.15),o()<.6){let y=o()*2*po;e([v[0],v[1],v[2]],[Math.cos(y),-.6,Math.sin(y)],[-Math.sin(y),0,Math.cos(y)],.05+o()*.04,.1)}}}}}}var Kg=(()=>{let t=Ys(9001),e=[],o=[];for(let[r,a,i]of Xs){let[s,c]=Th(r);for(let h=s;h<=c;h+=.1)Cl(h,i)&&o.push(Ah(r,a,h))}let n=o.filter(r=>r[0]>ct.x0-.6&&r[0]<ct.x1+.6&&r[2]>ct.z0&&r[2]<ct.z1);for(let r=0;r<64;r++){let a=r%2===0&&n.length?n:o,i=a[Math.floor(t()*a.length)];e.push({start:[i[0]+(t()-.5)*.4,i[1]-.25-t()*.3,i[2]+(t()-.5)*.4],period:18+t()*22,offset:t()*60,drift:[(t()-.5)*1.6,(t()-.5)*1.6],speed:.45+t()*.25,seed:t(),white:t()<.18?1:0})}return e})(),ns=[ct.x0+.06,ct.z0+.06,ct.x1-.06,ct.z1-.06];function AM(t,e){let o=e+t.offset,n=Math.floor(o/t.period),r=o-n*t.period,a=.6+.4*Math.sin(n*1.7+t.seed*5),i=t.start[0]+t.drift[0]*a,s=t.start[2]+t.drift[1]*a,c=i>ns[0]&&i<ns[2]&&s>ns[1]&&s<ns[3],h=c?.017:.006,l=(t.start[1]-h)/t.speed;return{ph:r,Tf:l,lx:i,lz:s,inPool:c}}var Vr=[{at:[$t/2-.8,Fn(7.6)],dir:.9,len:.92,kind:0,sip:21,first:9},{at:[$t/2+.9,Fn(11.6)],dir:3.6,len:.74,kind:1,sip:29,first:17},{at:[$t/2-.3,Fn(12.8)],dir:5.2,len:.86,kind:2,sip:25,first:4},{at:[$t/2+1,Fn(7)],dir:2.2,len:.7,kind:1,sip:33,first:23},{at:[$t/2-1.1,Fn(10.4)],dir:4.4,len:.82,kind:0,sip:27,first:13},{at:[$t/2+.4,Fn(9)],dir:1.4,len:.94,kind:2,sip:31,first:28},{at:[$t/2-.9,Fn(13)],dir:5.9,len:.66,kind:1,sip:23,first:6},{at:[$t/2+1.1,Fn(12.6)],dir:3,len:.8,kind:0,sip:35,first:31}],Vs=[ct.x0+.5,ct.z0+.5,ct.x1-.5,ct.z1-.55],Tl=[ct.x0+.25,ct.z0+.25,ct.x1-.25,ct.z1-.3],Nl=12,Ll=-.36,ld=[];function TM(){let t=d=>{let u=Math.sin(d*12.9898+78.233)*43758.5453;return u-Math.floor(u)},e=Vr.map((d,u)=>({k:d,i:u,x:d.at[0],z:d.at[1],th:d.dir,w:0,v:.08,y:-.17,ph:u*2.1,pitch:0,kappa:0,thrust:0,amp:.2,stroking:u%2===0,modeT:t(u*3.1)*3,aim:d.dir,nextAim:t(u*7.7)*5,yAim:-.17,nextY:t(u*5.9)*8,gx:d.at[0],gz:d.at[1],nextSip:d.first,sipT:-1,bite:0,notice:0})),o=[],n=[];for(let d=0;d<Nl;d++)n.push({x:0,z:0,alive:0,born:0,seed:d*.37});let r={on:!1,x:0,z:0,t0:0},a=0,i=0,s=d=>Math.atan2(Math.sin(d),Math.cos(d)),c=()=>t(++i*1.618+a*.37);return{fish:e,events:o,crumbs:n,feed:r,drop:(d,u)=>{d=Math.max(Tl[0],Math.min(Tl[2],d)),u=Math.max(Tl[1],Math.min(Tl[3],u)),Object.assign(r,{on:!0,x:d,z:u,t0:a}),n.forEach((p,f)=>{let v=t(a+f)*Math.PI*2,m=.04+.16*Math.sqrt(t(a*1.7+f*3.1));Object.assign(p,{x:d+Math.cos(v)*m,z:u+Math.sin(v)*m,alive:1,born:a+t(f*5.3+a)*.35})}),o.push([d,u,a,1]);for(let p of e)p.notice=a+.3+Math.hypot(p.x-d,p.z-u)*.35+t(p.i*9.1+a)*.7},step:d=>{a+=d;let u=a,p=0;for(let f of n)!f.alive||u<f.born||(p++,f.x+=Math.sin(u*.7+f.seed*11)*.004*d,f.z+=Math.cos(u*.6+f.seed*7)*.004*d);if(r.on&&(p===0&&u>r.t0+1||u>r.t0+40)){r.on=!1;for(let f of n)f.alive=0}for(let f of e){let{k:v}=f,m=v.len,g=r.on&&u>f.notice;(u>f.nextAim||Math.hypot(f.gx-f.x,f.gz-f.z)<.7)&&(f.gx=Vs[0]+c()*(Vs[2]-Vs[0]),f.gz=Vs[1]+c()*(Vs[3]-Vs[1]),f.nextAim=u+12+c()*14),f.aim=Math.atan2(f.gz-f.z,f.gx-f.x)+.35*Math.sin(u*.21+f.i*1.7);let x=f.aim,y=.7,w=null;if(g){let ot=1e9;for(let Se of n){if(!Se.alive||u<Se.born)continue;let De=Math.hypot(Se.x-f.x,Se.z-f.z)+.1*Math.sin(f.i*3.3+Se.seed*9);De<ot&&(ot=De,w=Se)}let Bt=w?w.x:r.x,ze=w?w.z:r.z;x=Math.atan2(ze-f.z,Bt-f.x),f.aim=x,y=1.8}let M=.6+m*.8+f.v*2,_=g?Tl:Vs,S=0;for(let ot of[0,.5,-.5]){let Bt=f.x+Math.cos(f.th+ot)*M,ze=f.z+Math.sin(f.th+ot)*M;S=Math.max(S,Math.max(_[0]-Bt,Bt-_[2],_[1]-ze,ze-_[3],0))}if(S>0){let ot=(_[0]+_[2])/2,Bt=(_[1]+_[3])/2+Math.sin(f.i*2.3)*1.5,ze=Math.atan2(Bt-f.z,ot-f.x),Se=Math.min(1,S*2.2);x=f.th+s(ze-f.th)*Se+s(x-f.th)*(1-Se),g||(f.aim=x),y=Math.max(y,.6+Se*.8)}let R=0;for(let ot of e){if(ot===f)continue;let Bt=ot.x-f.x,ze=ot.z-f.z,Se=Math.hypot(Bt,ze),De=(g?.4:1)*(m+ot.k.len)/2+.2;if(Se<De&&Math.abs(ot.y-f.y)<.14){let Ee=s(Math.atan2(ze,Bt)-f.th);(Math.abs(Ee)<1.6||Se<De*.5)&&(R-=Math.sign(Ee||1)*(De-Se)/De*(Math.abs(Ee)<1.6?1:.6))}}let N=s(x-f.th)+R*(g?.4:2);f.modeT-=d,g?(f.stroking=!0,f.modeT=Math.max(f.modeT,.4)):f.modeT<=0&&(f.stroking=!f.stroking,f.modeT=f.stroking?1.2+c()*1.6:1.6+c()*3.2),!f.stroking&&(Math.abs(N)>.9||f.v<.035)&&(f.stroking=!0,f.modeT=1+c()*.8),!g&&f.sipT<0&&u>f.nextSip&&(f.sipT=0,f.nextSip=u+v.sip*(.7+.6*c()));let G=0;if(f.sipT>=0){let ot=f.sipT;f.sipT+=d,G=Math.min(1,ot/1.6)*(1-Math.max(0,Math.min(1,(ot-2.6)/1.6))),ot<1.7&&f.sipT>=1.7&&o.push([f.x+Math.cos(f.th)*.03,f.z+Math.sin(f.th)*.03,u,.9]),ot<2.4&&f.sipT>=2.4&&o.push([f.x,f.z,u,.55]),(f.sipT>4.2||g)&&(f.sipT=-1)}let q=(f.stroking?g?2.4:1:0)*(1-.6*G);f.thrust+=(q-f.thrust)*Math.min(d*3,1);let V=g?.9:.55;f.v+=(f.thrust*.085*(.7+.4*m)-V*f.v)*d,f.v=Math.max(f.v,.008);let D=.35+.65*Math.min(1,f.thrust),B=Math.max(-y,Math.min(y,N*1.3))*D;f.w+=(B-f.w)*Math.min(d*2.2,1),f.th+=f.w*d,u>f.nextY&&(f.yAim=-(.13+c()*.1),f.nextY=u+6+c()*10);let dt=f.yAim;if(G>0&&(dt+=(-.045-dt)*G),g){let ot=w?w.x:r.x,Bt=w?w.z:r.z,ze=1-Math.min(1,Math.max(0,(Math.hypot(ot-f.x,Bt-f.z)-.15)/.9));if(dt+=(-.04-dt)*ze,w&&u>f.bite&&f.y>-.08){let Se=f.x+Math.cos(f.th)*.02,De=f.z+Math.sin(f.th)*.02;Math.hypot(w.x-Se,w.z-De)<.09&&(w.alive=0,f.bite=u+1.3,o.push([w.x,w.z,u,.75]))}}f.x+=Math.cos(f.th)*f.v*d,f.z+=Math.sin(f.th)*f.v*d,f.x=Math.max(ct.x0+.15,Math.min(ct.x1-.15,f.x)),f.z=Math.max(ct.z0+.15,Math.min(ct.z1-.15,f.z));let Gt=(dt-f.y)*Math.min(d*(g?2:.8),1);f.y+=Gt,f.pitch+=(Math.max(-.4,Math.min(.4,Gt/d/Math.max(f.v,.06)))-f.pitch)*Math.min(d*2.5,1);let Nt=Math.max(-1/m,Math.min(1/m,f.w/Math.max(f.v,.1)));f.kappa+=(Nt-f.kappa)*Math.min(d*4,1);let xt=.12+.88*Math.min(1.4,f.thrust)+.4*Math.min(1,Math.abs(f.w));f.amp+=(xt-f.amp)*Math.min(d*2,1),f.ph+=d*(2+5.5*Math.min(1.6,f.thrust))*(.75+.35/Math.sqrt(m))}for(;o.length&&u-o[0][2]>10;)o.shift()},get t(){return a}}}function LM(){let t=cd();{let e=ct.x0-ct.curb,o=ct.x1+ct.curb,n=ct.z0-ct.curb,r=ct.z1+ct.curb,a=[[0,0,$t,n],[0,r,$t,$e],[0,n,e,r],[o,n,$t,r]];for(let[i,s,c,h]of a)for(let d=i;d<c-1e-6;d+=1)for(let u=s;u<h-1e-6;u+=1){let p=d,f=Math.min(c,d+1),v=u,m=Math.min(h,u+1);t.quad([p,0,v],[p,0,m],[f,0,m],[f,0,v],[0,1,0],kt.FLOOR,[[p,v],[p,m],[f,m],[f,v]])}}for(let e of[0,1]){let o=e?$t:0,n=e?$t+x0:-x0,r=e?[-1,0,0]:[1,0,0],a=.04;for(let p=0;p<$e-1e-6;p+=a){let f=p,v=Math.min($e,p+a),m=(f+v)/2,g=null;if(!e)for(let y of ge.c)Na(m-y)!==null&&(g=[ge.sill,Math.min(Na(f-y)||ge.spring,Na(v-y)||ge.spring)]);let x=g?[[0,g[0]],[g[1],mo]]:[[0,mo]];for(let[y,w]of x)w<=y||(e?t.quad([o,y,v],[o,y,f],[o,w,f],[o,w,v],r,kt.ROCK,[[v,y],[f,y],[f,w],[v,w]]):t.quad([o,y,f],[o,y,v],[o,w,v],[o,w,f],r,kt.ROCK,[[f,y],[v,y],[v,w],[f,w]]))}if(!e)for(let p of ge.c){for(let g of[-1,1]){let x=p+g*ge.hw,y=[0,0,-g],w=[o,ge.sill,x],M=[n,ge.sill,x],_=[n,ge.spring,x],S=[o,ge.spring,x];g>0!=!!e?t.quad(w,M,_,S,y,kt.ROCK,[[0,ge.sill],[x0,ge.sill],[x0,ge.spring],[0,ge.spring]]):t.quad(S,_,M,w,y,kt.ROCK,[[0,ge.spring],[x0,ge.spring],[x0,ge.sill],[0,ge.sill]])}let f=28;for(let g=0;g<f;g++){let x=g/f*po,y=(g+1)/f*po,w=p+Math.cos(x)*ge.hw,M=p+Math.cos(y)*ge.hw,_=ge.spring+Math.sin(x)*ge.hw,S=ge.spring+Math.sin(y)*ge.hw,R=[0,-Math.sin((x+y)/2),-Math.cos((x+y)/2)];e?t.quad([o,_,w],[n,_,w],[n,S,M],[o,S,M],R,kt.ROCK,[[0,x],[x0,x],[x0,y],[0,y]]):t.quad([o,S,M],[n,S,M],[n,_,w],[o,_,w],R,kt.ROCK,[[0,y],[x0,y],[x0,x],[0,x]])}let v=e?$t-.08:-x0,m=e?$t+x0:.08;t.box(v,ge.sill-.09,p-ge.hw-.12,m,ge.sill,p+ge.hw+.12,kt.OLDSTONE)}let i=e?$t:0,s=e?-1:1,c=kt.OLDSTONE,h=Math.min(i,i+s*.32),l=Math.max(i,i+s*.32);t.box(h,mo-.55,0,l,mo-.3,$e,c);let d=Math.min(i,i+s*.42),u=Math.max(i,i+s*.42);t.box(d,mo-.3,0,u,mo-.12,$e,c)}for(let[e,o]of[[0,1],[$e,-1]]){for(let i=0;i<32;i++){let s=i/32*$t,c=(i+1)/32*$t,h=d=>d<$t/2?mo+dr*d:mo+dr*($t-d),l=o>0?[[c,0],[s,0],[s,h(s)],[c,h(c)]]:[[s,0],[c,0],[c,h(c)],[s,h(s)]];t.quad(...l.map(([d,u])=>[d,u,e]),[0,0,o],kt.ROCK,l.map(([d,u])=>[d,u]))}let r=o>0?0:$e-.32,a=o>0?.32:$e;t.box(0,mo-.55,r,$t,mo-.3,a,kt.OLDSTONE)}_M(t);{let e=cd();kM(e),MM(t,e)}{let{x0:e,x1:o,z0:n,z1:r,curb:a,top:i}=ct,s=.06,c=.08;t.box(e-a,0,n-a,e,i-c,r+a,kt.OLDSTONE,{bottom:!0}),t.box(o,0,n-a,o+a,i-c,r+a,kt.OLDSTONE,{bottom:!0}),t.box(e,0,n-a,o,i-c,n,kt.OLDSTONE,{bottom:!0}),t.box(e,0,r,o,i-c,r+a,kt.OLDSTONE,{bottom:!0}),t.box(e-a-s,i-c,n-a-s,e+s*.5,i,r+a+s,kt.OLDSTONE),t.box(o-s*.5,i-c,n-a-s,o+a+s,i,r+a+s,kt.OLDSTONE),t.box(e+s*.5,i-c,n-a-s,o-s*.5,i,n+s*.5,kt.OLDSTONE),t.box(e+s*.5,i-c,r-s*.5,o-s*.5,i,r+a+s,kt.OLDSTONE);let h=.5;for(let l=e;l<o-1e-6;l+=h)for(let d=n;d<r-1e-6;d+=h){let u=l,p=Math.min(o,l+h),f=d,v=Math.min(r,d+h);t.quad([u,0,f],[u,0,v],[p,0,v],[p,0,f],[0,1,0],kt.WATER,[[u,f],[u,v],[p,v],[p,f]])}}return t}function NM(t){for(let o of[0]){let n=o?$t+x0*.5:-x0*.5,r=.05,a=U0.w*.5;for(let i of ge.c){for(let s of U0.cols){let c=Na(s)-.01;t.box(n-r,ge.sill,i+s-a,n+r,c,i+s+a,kt.STEEL)}for(let s=ge.sill+U0.rowH;s<ge.spring+.01;s+=U0.rowH)t.box(n-r,s-a,i-ge.hw,n+r,s+a,i+ge.hw,kt.STEEL);for(let[s,c]of[[ge.hw-.03,.06],[U0.ring,a]])for(let l=0;l<24;l++){let d=l/24*po,u=(l+1)/24*po;t.beam([n,ge.spring+Math.sin(d)*s,i+Math.cos(d)*s],[n,ge.spring+Math.sin(u)*s,i+Math.cos(u)*s],c,kt.STEEL,[1,0,0])}for(let s of[-1,1])t.box(n-r,ge.sill,i+s*(ge.hw-.03)-.03,n+r,ge.spring,i+s*(ge.hw-.03)+.03,kt.STEEL);t.box(n-r,ge.sill,i-ge.hw,n+r,ge.sill+.06,i+ge.hw,kt.STEEL)}}let e=o=>o<$t/2?mo+dr*o:mo+dr*($t-o);for(let o=0;o<=12;o++){let n=o*Qo.rafter;for(let[r,a]of[[-.3,$t/2],[$t/2,$t+.3]])t.beam([r,e(Math.max(0,Math.min($t,r)))-.1,n],[a,e(a)-.1,n],.06,kt.STEEL)}for(let o=Qo.purlin;o<$t/2-.2;o+=Qo.purlin)for(let n of[o,$t-o])t.beam([n,e(n)-.06,-.2],[n,e(n)-.06,$e+.2],.035,kt.STEEL);t.beam([$t/2,ur-.14,-.2],[$t/2,ur-.14,$e+.2],.12,kt.STEEL);for(let o of[.05,$t-.05])t.beam([o,mo-.05,0],[o,mo-.05,$e],.1,kt.STEEL);for(let o of Rl){t.box(-.05,mo-.13,o-.08,$t+.05,mo+.13,o+.08,kt.STEEL),t.beam([$t/2,mo,o],[$t/2,ur-.2,o],.07,kt.STEEL);for(let n of[-1,1])t.beam([$t/2+n*$t/4,mo,o],[$t/2,ur-.4,o],.055,kt.STEEL),t.beam([$t/2+n*$t/4,mo,o],[$t/2+n*$t/4,e($t/2+n*$t/4)-.2,o],.045,kt.STEEL),t.beam([$t/2+n*($t/2-.1),mo,o],[$t/2+n*$t/4,e($t/2+n*$t/4)-.2,o],.045,kt.STEEL);for(let n of[-1,1])t.box($t/2+n*$t/4-.12,mo-.18,o-.1,$t/2+n*$t/4+.12,mo+.18,o+.1,kt.STEEL)}}function RM(t){let e=Ys(311),o=[],n=[[ct.x0+.9,Fn(6.6),.9,11],[ct.x1-.8,Fn(8.4),.85,10],[ct.x0+.8,Fn(10.6),.8,9],[ct.x1-.9,Fn(12.4),.9,11],[ct.x0+1,Fn(13.9),.65,7],[$t/2+.2,Fn(9.6),.5,4],[ct.x1-.7,Fn(15.9),.6,6]];for(let[a,i,s,c]of n)for(let h=0;h<c;h++)for(let l=0;l<40;l++){let d=e()*2*po,u=s*Math.sqrt(e()),p=a+Math.cos(d)*u,f=i+Math.sin(d)*u,v=.15+e()*.17;if(!(p-v<ct.x0+.04||p+v>ct.x1-.04||f-v<ct.z0+.04||f+v>ct.z1-.04)&&!(Math.hypot(p-xn.x,f-xn.z)<.62+v)&&!o.some(m=>Math.hypot(m[0]-p,m[1]-f)<(m[2]+v)*.93)){o.push([p,f,v,e()*2*po,e()]);break}}for(let[a,i,s,c,h]of o){ld.push([a,i,s]),t.float=[a,i,h*7.3+s*13];let l=28,d=4,u=s*1.08,p=[];for(let f=0;f<=d;f++){let v=[];for(let m=0;m<l;m++){let g=m/l*2*po,x=f/d,y=g-c,w=.012+.004*(1-x*x)+.006*Math.pow(x,6)*(.5+.5*Math.sin(g*3+h*9));v.push(t.v([a+Math.cos(g)*u*x,w,i+Math.sin(g)*u*x],[0,1,0],kt.PAD,[.5+.5*x*Math.sin(y),.5+.5*x*Math.cos(y)]))}p.push(v)}for(let f=0;f<d;f++)for(let v=0;v<l;v++){let m=p[f][v],g=p[f][(v+1)%l],x=p[f+1][(v+1)%l],y=p[f+1][v];t.idx.push(m,g,x,m,x,y)}}t.float=null;let r=[[ct.x0+.75,Fn(6.9),1],[ct.x1-.65,Fn(8.1),.85],[ct.x1-.95,Fn(12.6),1.1],[ct.x0+.95,Fn(10.3),.8],[ct.x1-.55,Fn(15.6),.9],[ct.x0+1.05,Fn(13.7),.75]];for(let[a,i,s]of r){t.float=[a,i,a*3.7+i*1.3];let c=.17;[[12,1,70],[10,.86,48],[8,.66,26]].forEach(([l,d,u],p)=>{for(let f=0;f<l;f++){let v=2*po*f/l+p*.33,m=(90-(90-u)*s)*po/180,g=6,x=4,y=[];for(let w=0;w<=g;w++){let M=w/g,_=(.18+.82*Math.sin(po*Math.min(1,Math.pow(M,.8)*.75+.1)))*.36*d*c,S=[];for(let R=0;R<=x;R++){let N=R/x*2-1,G=N*_,q=Math.abs(N)*Math.abs(N)*.12*d*c,V=M*d*c,D=V*Math.cos(m),B=V*Math.sin(m)+q,dt=a+Math.cos(v)*D-Math.sin(v)*G,Gt=i+Math.sin(v)*D+Math.cos(v)*G;S.push(t.v([dt,.03+B,Gt],[-Math.cos(v)*Math.sin(m)*.6,.8,-Math.sin(v)*Math.sin(m)*.6],kt.PETAL,[(p===2?.5:0)+.5*(.5+.5*N*.92),.98-M*.96]))}y.push(S)}for(let w=0;w<g;w++)for(let M=0;M<x;M++){let _=y[w][M],S=y[w][M+1],R=y[w+1][M+1],N=y[w+1][M];t.idx.push(_,S,R,_,R,N,_,R,S,_,N,R)}}}),t.lathe(a,i,[[0,.03+.05*c*4],[.025,.03+.045*c*4],[.032,.035],[0,.03]],kt.STAMEN,12)}t.float=null}function OM(t){let e=Ys(907);{t.box(1.25-.48,.86-.06,11.1-1.35,1.25+.48,.86,11.1+1.35,kt.WOOD);for(let s of[-1,1])for(let c of[-1,1])t.box(1.25+s*(.48-.08)-.04,0,11.1+c*(1.35-.1)-.04,1.25+s*(.48-.08)+.04,.86-.06,11.1+c*(1.35-.1)+.04,kt.WOOD);t.box(1.25-.48+.06,.16,11.1-1.35+.1,1.25+.48-.06,.19,11.1+1.35-.1,kt.WOOD);for(let s=0;s<11;s++){let c=1.25+(e()-.5)*.6,h=11.1+(e()-.5)*2.2,l=.035+e()*.04,d=.09+e()*.14;if(t.lathe(c,h,[[0,.86],[l,.86],[l*1.02,.86+d*.9],[l*.9,.86+d],[0,.86+d]],s%3?kt.JAR:kt.POT,14),s%3===0)for(let u=0;u<7;u++){let p=e()*2*po,f=.28+e()*.12,v=.12+e()*.2;t.beam([c,.86+.03,h],[c+Math.cos(p)*v*f,.86+.03+f,h+Math.sin(p)*v*f],.0055,kt.BRUSH)}}t.box(1.25-.3,.86,11.1+.7,1.25+.15,.86+.02,11.1+1.15,kt.WOOD)}for(let o=0;o<5;o++){let n=.55+e()*.6,r=.75+e()*.8,a=19.3+o*.16,i=.25+o*.07,s=.17,c=[i+r*Math.sin(s)*0,r,a];t.quad([i+.18,0,a-n/2],[i+.18,0,a+n/2],[i+.18-r*Math.sin(s),r*Math.cos(s),a+n/2],[i+.18-r*Math.sin(s),r*Math.cos(s),a-n/2],[Math.cos(s),Math.sin(s),0],o%2?kt.WOOD:kt.GESSO,[[0,0],[1,0],[1,1],[0,1]])}for(let o of e3)t.beam([o[0],mo,o[2]],[o[0],o[1]+.05,o[2]],.008,kt.STEEL),t.lathe(o[0],o[2],[[.04,o[1]+.06],[.06,o[1]+.02],[.16,o[1]-.09],[.29,o[1]-.22],[.33,o[1]-.28],[.32,o[1]-.285]],kt.SHADE,32),t.lathe(o[0],o[2],[[0,o[1]-.25],[.06,o[1]-.2],[0,o[1]-.12]],kt.BULB,12)}var e3=[[4.2,4.6,7.33],[11.8,4.6,7.33],[4.2,4.6,16.5],[11.8,4.6,16.5]],vA=[[ct.x0-1,ct.z0-1,1],[ct.x1+1,ct.z0-1,.95],[ct.x0-1,ct.z1+1,1.15],[ct.x1+1,ct.z1+1,1.1],[.9,1.3,1.25],[$t-.9,$e-1.2,1.3]],Qg=[[0,0,.16,.5],[.16,0,.34,.4],[.35,0,.5,.36],[.5,0,.66,.38],[.68,0,.84,.42],[0,.6,.19,1],[.2,.57,.36,1],[.41,.6,.58,1]];function CM(){let t={pos:[],nrm:[],uv:[],shade:[],flower:[],idx:[]},e=Ys(1213),o=(n,r,a,i,s)=>{let c=Qg[Math.floor(e()*Qg.length)],h=(c[2]-c[0])/(c[3]-c[1]),l=i*h*1,d=5,u=t.pos.length/3,p=.6+e()*.4;for(let f=0;f<=d;f++){let v=f/d,m=s*v*v*i,g=[n[0]+r[0]*v*i,n[1]+r[1]*v*i-m,n[2]+r[2]*v*i];for(let x of[-.5,.5]){t.pos.push(g[0]+a[0]*x*l+Ce[0],g[1]+a[1]*x*l-Math.abs(x)*.08*l+Ce[1],g[2]+a[2]*x*l+Ce[2]);let y=[r[1]*a[2]-r[2]*a[1],r[2]*a[0]-r[0]*a[2],r[0]*a[1]-r[1]*a[0]],w=Math.hypot(...y)||1;t.nrm.push(y[0]/w,Math.abs(y[1]/w)+.2,y[2]/w),t.uv.push(x<0?c[0]:c[2],c[3]-(c[3]-c[1])*v),t.shade.push(p),t.flower.push(0)}}for(let f=0;f<d;f++){let v=u+f*2;t.idx.push(v,v+1,v+3,v,v+3,v+2)}};zM(t,o,e);for(let[n,r,a]of[[ct.x0-.3,ct.z1+.3,-1],[ct.x1+.3,ct.z0-.3,1],[ct.x0-.3,ct.z0-.2,-1]])for(let i=0;i<26;i++){let s=e()*2*po,c=n+(e()-.3)*.5*-a,h=r+(e()-.5)*.8,l=ct.top+.01-Math.max(0,Math.abs(c-n)-.1)*.6*e();o([c,Math.max(.05,l),h],[Math.cos(s),-.15,Math.sin(s)],[-Math.sin(s),0,Math.cos(s)],.08+e()*.05,.12)}return t}function PM(){let t=cd();for(let o of[0]){let n=o?$t+x0*.5+.01:-x0*.5-.01,r=o?[-1,0,0]:[1,0,0];for(let a of ge.c)for(let s=a-ge.hw;s<a+ge.hw-1e-6;s+=.05){let c=s,h=Math.min(a+ge.hw,s+.05),l=Na(c-a+1e-4)||ge.spring,d=Na(h-a-1e-4)||ge.spring;o?t.quad([n,ge.sill,h],[n,ge.sill,c],[n,l,c],[n,d,h],r,0,[[h,ge.sill],[c,ge.sill],[c,l],[h,d]]):t.quad([n,ge.sill,c],[n,ge.sill,h],[n,d,h],[n,l,c],r,0,[[c,ge.sill],[h,ge.sill],[h,d],[c,l]])}}let e=Math.hypot(dr,1);return t.quad([0,mo+.002,$e],[0,mo+.002,0],[$t/2,ur+.002,0],[$t/2,ur+.002,$e],[dr/e,-1/e,0].map(o=>-o).map((o,n)=>n===1?-Math.abs(o):o),1,[[0,$e],[0,0],[$t/2,0],[$t/2,$e]]),t.quad([$t,mo+.002,0],[$t,mo+.002,$e],[$t/2,ur+.002,$e],[$t/2,ur+.002,0],[-dr/e,-1/e,0],1,[[$t,0],[$t,$e],[$t/2,$e],[$t/2,0]]),t}var es={ivy:[[.00293,.0127,.12207,.23633],[.13037,.00586,.24463,.24414],[.25293,.0166,.37207,.23242],[.37793,.02344,.49707,.22656],[.50293,.01367,.62207,.23535],[.62793,.03418,.74707,.21582]],blade:[[.01855,.50391,.02832,.99512],[.05762,.50391,.08301,.99512],[.10889,.50391,.12549,.99609],[.1582,.50391,.16943,.99512],[.19922,.50391,.22266,.99512],[.25,.50391,.26562,.99609],[.29932,.50391,.31006,.99609],[.33008,.50781,.37305,.99121],[.38721,.50391,.40918,.99609]],daisy:[[.75684,.00586,.86768,.24414],[.87793,.00781,.99707,.24121],[.00342,.25586,.12158,.49414],[.12842,.25586,.24609,.49414],[.25293,.25684,.37207,.49219],[.37891,.25586,.49609,.49316]],weed:[[.50293,.25781,.62207,.49121],[.62793,.26562,.74707,.48438],[.75293,.26855,.87207,.48047],[.88281,.25586,.99219,.49414],[.44043,.50977,.55957,.73926],[.5752,.50586,.67432,.74414],[.69043,.50586,.80908,.74414],[.81738,.50586,.93213,.74414],[.44043,.75781,.55957,.99219]],rleaf:[[.69824,.75586,.78076,.99414],[.79834,.75586,.88867,.99414],[.9043,.75586,.99072,.99414],[.94043,.54395,.99707,.70605]],petal:[[.56445,.75391,.68555,.99609]]},$M=[[.248,.8613],[.3438,.9785],[.4492,.584],[.5957,.3281],[.5371,.918],[.1699,.4062],[.752,.6699],[.5879,.2207],[.3789,.8477],[.2637,.2266],[.6758,.7422],[.6016,.0273],[.5762,.502],[.0469,.5078],[.1406,.7773],[.791,.7539],[.6113,.5605],[.9121,.6777],[.6523,.1523],[.2871,.3301],[.2109,.832],[.4297,.625],[.168,.4434],[.1348,.1211],[.9668,.0859],[.3164,.873],[.1777,.7539],[.0215,.3281],[.6719,.334],[.9844,.6172],[.6523,.3828],[.1152,.2988],[.0176,.1328],[.207,.0996],[.6152,.9844],[.0234,.0117],[.0723,.6328],[.2695,.7695],[.2539,.9395],[.502,.9941],[.1504,.9961],[.957,.8145],[.5117,.123],[.4062,.4941],[.0547,.1387],[.4375,.2949],[.373,.2109],[.1699,.3086],[.5176,.6445],[.4863,.3027],[.877,.6602],[.5977,.8887],[.5488,.0098],[.5156,.5332],[.6973,.1094],[.4707,.2051],[.498,.7559],[.0312,.7363],[.2051,.4629],[.541,.8379],[.8398,.8965],[.1426,.1855],[.3711,.1172],[.1328,.9082],[.75,.9629],[.2812,.0449],[.6367,.4277],[.2051,.9824],[.7012,.9766],[.0059,.9102],[.7168,.3379],[.1602,.584],[.8594,.1973],[.3516,.7227],[.0918,.9727],[.416,.3359],[.6465,.9355],[.3418,.627],[.7578,.332],[.0293,.6973],[.9004,.957],[.7012,.7617],[.1855,.8652],[.6914,.8184],[.5684,.543],[.6523,.8672],[.5742,.7441],[.2949,.4121],[.2363,.6387],[.25,.1953],[.0352,.5918],[.248,.293],[.0762,.4863],[.9785,.4922],[.9004,.7305],[.9277,.5527],[.9395,.125],[.3691,.8789],[.4805,.0469],[.5703,.4551],[.4199,.2246],[.0371,.625],[.3281,.4941],[.1152,.6094],[.2793,.834],[.5039,.166],[.4609,.5312],[.0645,.7715],[.6035,.7227],[.4746,.6348],[.6777,.5684],[.2773,.4512],[.8008,.1191],[.3945,.9297],[.2109,.6855],[.5977,.1875],[.5195,.0742],[.1309,.4609],[.9531,.4277],[.4785,.9648],[.543,.3262],[.9121,.041],[.5059,.7188],[.0098,.2969],[.8438,.3789],[.1504,.2637],[.7969,.873],[.8613,.9863],[.834,.7461],[.377,.6211],[.791,.7227],[.6758,.8457],[.7832,.8066],[.834,.5293],[.1973,.6562],[.8281,.9609],[.5332,.7773],[.9062,.8008],[.3262,.0234],[.8984,.7676]],hc={IVY:0,BLADE:1,DAISY:2,WEED:3,ROSE:4,RLEAF:5},IM=2;function qM(){let t={pos:[],nrm:[],uv:[],info:[],idx:[]},e={pos:[],nrm:[],uv:[],info:[],idx:[]},o=t,n=Ys(2718),r=rt=>{let ht=Math.hypot(rt[0],rt[1],rt[2])||1;return[rt[0]/ht,rt[1]/ht,rt[2]/ht]},a=(rt,ht)=>[rt[1]*ht[2]-rt[2]*ht[1],rt[2]*ht[0]-rt[0]*ht[2],rt[0]*ht[1]-rt[1]*ht[0]],i=(rt,ht)=>rt[0]*ht[0]+rt[1]*ht[1]+rt[2]*ht[2],s=(rt,ht,oe)=>[rt[0]+ht[0]*oe,rt[1]+ht[1]*oe,rt[2]+ht[2]*oe],c=rt=>rt[Math.floor(n()*rt.length)],h=rt=>(rt[2]-rt[0])*IM/(rt[3]-rt[1]),l=(rt,ht,oe,lt,It,Jt)=>(o.pos.push(rt[0]+Ce[0],rt[1]+Ce[1],rt[2]+Ce[2]),o.nrm.push(ht[0],ht[1],ht[2]),o.uv.push(oe[0],oe[1]),o.info.push(lt,It,Jt),o.pos.length/3-1),d=(rt,ht,oe,lt,It,Jt,me,xe,te)=>{let se=te?2:1,ut=o.pos.length/3;for(let Vt=0;Vt<=se;Vt++){let he=Vt/se,Ht=te?s(s(rt,oe,he),xe,te*he*he):s(rt,oe,he),Lt=lt[3]+(lt[1]-lt[3])*he;l(s(Ht,ht,-1),me,[lt[0],Lt],It,Jt,he),l(s(Ht,ht,1),me,[lt[2],Lt],It,Jt,he)}for(let Vt=0;Vt<se;Vt++){let he=ut+Vt*2;o.idx.push(he,he+1,he+3,he,he+3,he+2)}},u=null,p=[...es.ivy,...es.ivy,...es.weed.slice(0,7)],f=[0,1,0],v=(rt,ht,oe,lt,It)=>{let Jt=c(p),me=a(oe,ht),xe=r(s(s(ht,oe,n()*.9-.25),me,(n()-.5)*.8)),te=r(s(oe,xe,-i(oe,xe))),se=(n()-.5)*2,ut=Math.cos(se),Vt=Math.sin(se);te=r(s(s([0,0,0],te,ut),a(xe,te),Vt));let he=a(te,xe),Ht=lt*h(Jt);d(s(rt,te,-lt*.18),s([0,0,0],he,Ht/2),s([0,0,0],te,lt),Jt,It,hc.IVY,xe)},m=(rt,ht,oe,lt,It,Jt,me,xe,te)=>{let se=Math.max(3,Math.round(It*2.4*me)),ut=[];for(let he=0;he<se;he++){let Ht=lt+(n()-.5)*It,Lt=Math.min(1,Math.abs(Ht-lt)/(It/2+.001)),Je=Jt*(.6+.4*n())*(1-.5*Lt*Lt);ut.push([Ht,xe||n()*.15,(n()-.5)*.5,Je,0])}let Vt=0;for(;ut.length&&Vt++<4e3;){let[he,Ht,Lt,Je,k]=ut.pop(),to=Ht;for(let no=0;no<260&&(Lt+=(n()-.5)*.45,Lt=Math.max(-1,Math.min(1,Lt)),he+=Math.sin(Lt)*.09,Ht+=(xe?-1:1)*Math.cos(Lt)*.09,!(xe?to-Ht>Je||Ht<(te?te(he):.05):Ht-to>Je));no++){let At=xe?(to-Ht)/Je:(Ht-to)/Je,_t=n()<.9*me?n()<.5?2:1:0;for(let Be=0;Be<_t;Be++){let je=.015+n()*.11,Xe=he+(n()-.5)*.2,Ve=Ht+(n()-.5)*.12;if(u&&u(Xe,Ve))continue;let zo=s(s(s(rt,ht,Xe),f,Ve),oe,je),U=(.14+.1*n())*(xe?1.05-.3*At:1.2-.4*At);v(zo,oe,f,U,.45+.55*(je/.125)*(.6+.4*n()))}k<2&&n()<.035&&ut.push([he,Ht,Lt+(n()<.5?-.7:.7),Je*(.35+.4*n())*(1-At*.5),k+1])}}},g=(rt,ht,oe,lt)=>{let It=es.petal[0],Jt=Math.abs(ht[1])>.9?[1,0,0]:[0,1,0],me=r(a(Jt,ht)),xe=a(ht,me),te=[[3,.42,.2],[5,.56,.6*lt+.2],[7,.7,1.15*lt+.3]],se=n()*2*po;te.forEach(([ut,Vt,he],Ht)=>{for(let Lt=0;Lt<ut;Lt++){let Je=se+(Lt+Ht*.5)*2*po/ut+(n()-.5)*.3,k=s(s([0,0,0],me,Math.cos(Je)),xe,Math.sin(Je)),to=Math.min(1.45,he*(.85+.3*n())),no=r(s(s([0,0,0],ht,Math.cos(to)),k,Math.sin(to))),pt=oe*Vt*(.85+.3*n()),At=r(a(no,k)),_t=pt*.95*(Ht===0?.7:1),Be=s(s(rt,k,oe*.06*Ht),ht,-oe*.05*Ht),je=r(s(s([0,0,0],k,-Math.cos(to)),ht,Math.sin(to)));d(Be,s([0,0,0],At,_t/2),s([0,0,0],no,pt),It,.75+.25*n()-.12*Ht,hc.ROSE,r(s(je,ht,.6)),k,Ht<2?0:pt*.3*lt)}})},x=(rt,ht,oe,lt,It)=>{let Jt=c(es.rleaf),me=r(s(s(ht,oe,n()*.8-.1),a(oe,ht),(n()-.5)*.9)),xe=r(s(oe,me,-i(oe,me))),te=(n()-.5)*3,se=Math.cos(te),ut=Math.sin(te);xe=r(s(s([0,0,0],xe,se),a(me,xe),ut));let Vt=a(xe,me);d(s(rt,xe,-lt*.1),s([0,0,0],Vt,lt*h(Jt)/2),s([0,0,0],xe,lt),Jt,It,hc.RLEAF,me)},y=(rt,ht,oe,lt,It,Jt,me)=>{let xe=Math.max(3,Math.round(It*2.2)),te=(Ht,Lt,Je)=>s(s(s(rt,ht,Ht),f,Lt),oe,Je),se=x,ut=g,Vt=(Ht,...Lt)=>{u&&u(i(s(Ht,rt,-1),ht),Ht[1])||se(Ht,...Lt)},he=(Ht,...Lt)=>{u&&u(i(s(Ht,rt,-1),ht),Ht[1])||ut(Ht,...Lt)};for(let Ht=0;Ht<xe;Ht++){let Lt=lt+(n()-.5)*It*.35,Je=.05,k=(n()-.5)*1.4,to=Jt*(.6+.4*n()),no=(Lt-lt)/(It/2+.001);for(let pt=0;pt<200&&Je<to&&(k+=(n()-.5)*.3+no*.012+(Je>to*.6?Math.sign(k||1)*.02:0),k=Math.max(-1.25,Math.min(1.25,k)),Lt+=Math.sin(k)*.08,Je+=Math.cos(k)*.08,!(Math.abs(Lt-lt)>It*.6));pt++){let At=Je/to;for(let _t=0;_t<(n()<.8?2:1);_t++){let Be=.02+n()*.12;Vt(te(Lt+(n()-.5)*.16,Je+(n()-.5)*.12,Be),oe,f,.07+n()*.05,.5+.5*n())}if(At>.18&&n()<me*(.08+.15*At)){let _t=1+Math.floor(n()*4);for(let Be=0;Be<_t;Be++){let je=r(s(s(oe,f,(n()-.4)*.8),a(f,oe),(n()-.5)*.9));he(te(Lt+(n()-.5)*.18,Je+(n()-.5)*.16,.08+n()*.1),je,.11+n()*.07,.45+.55*n())}for(let Be=0;Be<3;Be++)Vt(te(Lt+(n()-.5)*.25,Je+(n()-.5)*.2,.05+n()*.08),oe,f,.07+n()*.04,.6+.4*n())}}}},w=(rt,...ht)=>y(rt.o,rt.u,rt.n,...ht),M={o:[0,0,0],u:[1,0,0],n:[0,0,1]},_={o:[0,0,$e],u:[1,0,0],n:[0,0,-1]},S={o:[$t,0,0],u:[0,0,1],n:[-1,0,0]},R=(rt,...ht)=>m(rt.o,rt.u,rt.n,...ht);R(M,4.1,3,7,1.5),R(M,12,3.4,5.8,1.3),R(M,1,2.2,4.2,1.2),R(M,15,2,5,1.2),w(M,3.6,3.2,5.6,1.1),w(M,12.6,3,4.8,1),w(M,.9,1.6,3.2,.8);{let rt=Lo.face-.26,ht={o:[0,0,$e-rt+.03],u:[1,0,0],n:[0,0,1]},oe=5.35+1.02;m(ht.o,ht.u,ht.n,$t-Lo.x1+1,1.9,2.2,1.2,oe,()=>3.2),m(ht.o,ht.u,ht.n,$t-Lo.x0-.5,.8,1,.8,oe,()=>4.6);for(let lt=0;lt<70;lt++){let It=Lo.x0+.2+Math.pow(n(),1.6)*2.4,Jt=(Lo.x1-Lo.x0)/2+.2,me=oe+.62*(1-Math.abs(It-Lo.cx)/Jt)+.02;v([$t-It,me+n()*.05,.1+n()*($e-rt-.15)],r([0,1,.3]),[0,0,1],.08+n()*.05,.7+.3*n())}}u=(rt,ht)=>Math.abs(rt-$t/2)<y0.w/2+y0.frame+.12&&ht<y0.top+y0.frame+.12,R(_,5.3,3.2,6.2,1.4),R(_,11,3.6,7,1.4),R(_,1.2,2.4,4.4,1.2),R(_,14.9,2.2,5.4,1.2),m(_.o,_.u,_.n,$t/2+.3,3.8,1.8,1.3,5.4,rt=>Math.abs(rt-$t/2)<1.25?4.15:2.4),w(_,5.6,3.4,5.2,1.2),w(_,10.6,3.6,5.8,1.2),w(_,14.6,2,4,.9),u=null,R(S,2.6,4,7,1.4),R(S,9.2,4.6,5.4,1.2),R(S,15.6,5,7.4,1.5),R(S,20.9,2,4,1.2),w(S,3.2,3.6,5.4,1.1),w(S,8.6,3,4.2,1),w(S,13.4,3.2,5.8,1.1),w(S,18.6,3.4,5,1.2),u=(rt,ht)=>ge.c.some(oe=>{let lt=Na(rt-oe);return lt!==null&&Math.abs(rt-oe)<ge.hw+.06&&ht>ge.sill-.05&&ht<lt+.06});for(let[rt,ht]of Xs.filter(oe=>oe[0]==="wall")){let oe=ht<1||ht>$e-1;m([0,0,0],[0,0,1],[1,0,0],ht,oe?1:1.7,mo-.6,oe?.9:1.1)}for(let rt of ge.c)m([0,0,0],[0,0,1],[1,0,0],rt,ge.hw*2.3,1.6,.8,mo-.6,ht=>Na(ht-rt)!==null?Na(ht-rt)+.15:mo-2.2);u=null,o=e;let N=(rt,ht,oe,lt,It,Jt,me)=>{let xe=c(es.blade),te=[Math.cos(Jt),0,Math.sin(Jt)],se=Math.max(lt*.16,.012);d([rt,ht,oe],[-te[2]*se/2,0,te[0]*se/2],[te[0]*It*lt*.4,lt,te[2]*It*lt*.4],xe,me,hc.BLADE,r([te[0]*.5,1,te[2]*.5]),te,lt>.12?lt*It*.6:0)},G=(rt,ht,oe,lt,It)=>{for(let Jt=0;Jt<It;Jt++){let me=n()*2*po,xe=n()*.035;N(rt+Math.cos(me)*xe,ht,oe+Math.sin(me)*xe,lt*(.45+.55*n()),.25+.75*n(),me+(n()-.5),.6+.4*n())}},q=(rt,ht,oe,lt)=>{let It=4+Math.floor(n()*3),Jt=n()*2*po;for(let me=0;me<It;me++){let xe=c(es.weed),te=Jt+me*2*po/It+(n()-.5)*.4,se=[Math.cos(te),0,Math.sin(te)],ut=.35+n()*.45,Vt=lt*(.7+.5*n()),he=[se[0]*Math.cos(ut)*Vt,Math.sin(ut)*Vt,se[2]*Math.cos(ut)*Vt],Ht=Vt*h(xe);d([rt,ht+.004,oe],[-se[2]*Ht/2,0,se[0]*Ht/2],he,xe,.7+.3*n(),hc.WEED,r([-se[0]*Math.sin(ut),Math.cos(ut),-se[2]*Math.sin(ut)]),[0,-1,0],Vt*.15)}},V=(rt,ht,oe)=>{let lt=.05+n()*.12;N(rt,ht,oe,lt+.02,.15,n()*2*po,.8);let It=c(es.daisy),Jt=.03+n()*.025,me=(n()-.5)*.6,xe=n()*2*po,te=[Math.cos(xe)*Jt*2,Math.sin(me)*Jt,Math.sin(xe)*Jt*2],se=[-Math.sin(xe)*Jt,0,Math.cos(xe)*Jt];d([rt-Math.cos(xe)*Jt,ht+lt,oe-Math.sin(xe)*Jt],se,te,It,1,hc.DAISY,[0,1,0]),q(rt,ht,oe,.04)},D=(rt,ht,oe,lt)=>{let It=n();It<.8?G(rt,ht,oe,lt?.2+.3*n():.08+.1*n(),lt?5+Math.floor(n()*6):3+Math.floor(n()*3)):It<.93?q(rt,ht,oe,lt?.09+.06*n():.06+.03*n()):V(rt,ht,oe)},B=ct.x0-ct.curb-.08,dt=ct.x1+ct.curb+.08,Gt=ct.z0-ct.curb-.08,Nt=ct.z1+ct.curb+.08,xt=$t-Lo.x1-.16,ot=$t-Lo.x0+.16,Bt=$e-Lo.face+.36,ze=(rt,ht)=>rt>B&&rt<dt&&ht>Gt&&ht<Nt||rt>xt&&rt<ot&&ht<Bt||Math.abs(rt-$t/2)<1.15&&ht>$e-.5||rt<.06||rt>$t-.06||ht<.06||ht>$e-.06,Se=(rt,ht)=>{let oe=Math.min(rt,$t-rt,ht,$e-ht),lt=Math.max(B-rt,rt-dt,Gt-ht,ht-Nt),It=Math.max(xt-rt,rt-ot,ht-Bt);return Math.min(oe,Math.max(lt,0)+(lt<0?9:0),Math.max(It,0)+(It<0?9:0))},De=(rt,ht)=>.5+.5*Math.sin(rt*.9+1.3)*Math.sin(ht*.7-.4)+.25*Math.sin(rt*2.3+ht*1.7);for(let rt=0;rt*2<$t;rt++)for(let ht=0;ht*2<$e;ht++)for(let[oe,lt]of $M){let It=(rt+oe)*2,Jt=(ht+lt)*2;if(ze(It,Jt))continue;let me=Se(It,Jt),xe=(me<1.2?.75-.4*me:.2)*Math.max(.2,De(It,Jt));n()<xe&&D(It,.002,Jt,me<.8&&n()<.85)}let Ee=(rt,ht,oe)=>{let lt=Math.hypot(ht[0]-rt[0],ht[1]-rt[1]);for(let It=0;It<lt;It+=.08){if(n()>.8)continue;let Jt=It/lt,me=.04+Math.pow(n(),2)*.3,xe=rt[0]+(ht[0]-rt[0])*Jt+oe[0]*me,te=rt[1]+(ht[1]-rt[1])*Jt+oe[1]*me;ze(xe,te)||D(xe,.002,te,!0)}};Ee([0,0],[0,$e],[1,0]),Ee([$t,0],[$t,$e],[-1,0]),Ee([0,0],[$t,0],[0,1]),Ee([0,$e],[$t,$e],[0,-1]),Ee([B,Gt],[dt,Gt],[0,-1]),Ee([B,Gt],[B,Nt],[-1,0]),Ee([dt,Gt],[dt,Nt],[1,0]),Ee([xt,Bt],[ot,Bt],[0,1]),Ee([xt,0],[xt,Bt],[-1,0]),Ee([ot,0],[ot,Bt],[1,0]);for(let rt=0;rt<60;rt++){let ht=Math.floor(n()*3),oe,lt;ht<2?(oe=ht?ct.x1+.08+n()*.38:ct.x0-.08-n()*.38,lt=ct.z0+n()*(ct.z1-ct.z0)):(lt=ct.z1+.08+n()*.38,oe=ct.x0+n()*(ct.x1-ct.x0)),G(oe,ct.top,lt,.04+.06*n(),2+Math.floor(n()*3))}return{walls:t,ground:e}}var DM=`
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
		vec3 p = pw - vec3(${at(Ce[0])}, ${at(Ce[1])}, ${at(Ce[2])});
		float vis = studioSun(pw + N * 0.03);
		sunVis = vis;
		vec3 sunC = mix(vec3(1.0, 0.88, 0.70) * 3.9, vec3(0.50, 0.64, 1.0) * 1.35, night);
		float lam = max(dot(N, STUDIO_SUN), 0.0);
		vec3 col = sunC * vis * lam;
		vec3 Hh = normalize(STUDIO_SUN + V);
		spec = sunC * vis * pow(max(dot(N, Hh), 0.0), mix(16.0, 400.0, gloss)) * mix(0.04, 1.0, gloss) * (lam > 0.0 ? 1.0 : 0.0);

		// skylight: the roof is glass, the walls are full of windows
		float upF = 0.5 + 0.5 * N.y;
		float hgt = clamp(p.y / ${at(mo)}, 0.0, 1.0);
		// corners and the foot of the walls get less of the sky
		float dw = min(min(p.x, ${at($t)} - p.x), min(p.z, ${at($e)} - p.z));
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
`;function GM(t){let e=new DataView(t),o=e.getUint32(4,!0),n=e.getUint32(8,!0),r=[],a=[];for(let l=0;l<3;l++)r.push(e.getFloat32(12+l*4,!0)),a.push(e.getFloat32(24+l*4,!0));let i=36,s=new Uint16Array(t,i,o*3);i+=o*6;let c=new Uint16Array(t,i,n);i+=n*2;let h=new Int8Array(t,i,o*3);return{nV:o,nI:n,mn:r,sz:a,pos:s,idx:c,nrm:h}}function Lr(t,e,o){let n=o&&o.wrap||"clamp",r=t.texture({data:[[[0,0,0,0]]],min:"linear",mag:"linear"}),a={tex:r,ready:!1};return fetch(e).then(i=>{if(!i.ok)throw new Error("Could not load "+e);return i.blob()}).then(i=>createImageBitmap(i,{premultiplyAlpha:"none"}).catch(()=>new Promise((s,c)=>{let h=new Image;h.onload=()=>s(h),h.onerror=c,h.src=URL.createObjectURL(i)}))).then(i=>{r({data:i,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrap:n}),a.ready=!0}).catch(i=>console.error(i)),a}var Eh=128,zh=Math.round((ct.z1-ct.z0)/(11/372)),Ol=(ct.x1-ct.x0)/Eh,o3=(ct.z1-ct.z0)/zh,HM=.02,n3=`
	float simDec(vec2 c) { return (floor(c.x * 255.0 + 0.5) * 256.0 + floor(c.y * 255.0 + 0.5)) / 65535.0 * 2.0 - 1.0; }
	vec2 simEnc(float h) {
		float v = floor(clamp(h * 0.5 + 0.5, 0.0, 1.0) * 65535.0 + 0.5);
		float hi = floor(v / 256.0);
		return vec2(hi, v - hi * 256.0) / 255.0;
	}
`,os=`
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
		vec2 g = (xz - vec2(${at(ct.x0+Ce[0])}, ${at(ct.z0+Ce[2])})) / vec2(${at(Ol)}, ${at(o3)}) - 0.5;
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
	${os}
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
	${os}
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
		vec3 p = pw - vec3(${at(Ce[0])}, ${at(Ce[1])}, ${at(Ce[2])});
		vec3 V = normalize(v_eye - pw);
		vec3 N = normalize(v_nrm);
		if (dot(N, V) < 0.0 && !is(${kt.PETAL}.0)) N = -N;
		if (is(${kt.PETAL}.0) && dot(N, V) < 0.0) N = -N;

		// in the reflection under the floor, the floor and the water are not drawn
		bool floorish = is(${kt.FLOOR}.0) || is(${kt.WATER}.0);
		if (yScale < 0.0 && floorish) discard;

		// fallen bracts: little papery hearts, pink or white
		if (is(${kt.BRACT}.0)) {
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

		if (is(${kt.ROCK}.0)) {
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
			base *= mix(1.0, 0.84, smoothstep(${at(mo-2.2)}, ${at(mo)}, p.y));
			N = bumped(N, T, B, tn, 1.4);
			aoK = mix(0.42, 1.0, tn.b);
			gloss = 0.05;
		} else if (is(${kt.OLDSTONE}.0) || is(${kt.HOLLOW}.0)) {
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
			float low = 1.0 - smoothstep(0.0, ${at(ct.top+.35)}, p.y);
			float moss = low * smoothstep(0.35, 0.65, fbm3(p * 4.0 + 2.0));
			base = mix(base, vec3(0.10, 0.12, 0.065), moss * 0.6);
			base *= mix(0.72, 1.0, smoothstep(0.0, 0.22, p.y));
			if (is(${kt.HOLLOW}.0)) {
				// the hollow: older, damper, never washed by the sun
				base *= vec3(0.70, 0.73, 0.68) * (0.85 + 0.15 * smoothstep(${at(Lo.floor)}, ${at(Lo.spring)}, p.y));
			}
			N = bumped(N, T, B, tn, 1.1);
			aoK = mix(0.5, 1.0, tn.b);
			gloss = 0.08;
		} else if (is(${kt.PLASTER}.0) || is(${kt.NICHE}.0)) {
			// old lime plaster: warm, patchy, with a soft trowelled bloom
			float big = fbm3(p * vec3(0.35, 0.45, 0.35));
			float mid = fbm3(p * 1.6 + 3.0);
			float fine = vnoise3(p * 14.0);
			vec3 a = vec3(0.70, 0.60, 0.47), b = vec3(0.84, 0.76, 0.63);
			base = mix(a, b, smoothstep(0.3, 0.7, big));
			base *= 0.86 + 0.22 * mid + 0.05 * fine;
			// damp stains low down, soot high up
			base *= mix(0.86, 1.0, smoothstep(0.0, 1.4, p.y + 0.6 * mid));
			base *= mix(1.0, 0.9, smoothstep(${at(mo-2)}, ${at(mo)}, p.y));
			// where the plaster has come away, old brick shows through
			float bare = smoothstep(0.70, 0.74, fbm3(p * vec3(0.5, 0.8, 0.5) + 11.0)) * smoothstep(0.4, 1.6, p.y) * 0.85;
			vec2 bk = (abs(N.x) > 0.5 ? p.zy : p.xy) * vec2(1.0 / 0.23, 1.0 / 0.075);
			bk.x += floor(bk.y) * 0.5;
			float mortar = max(smoothstep(0.9, 0.97, fract(bk.x)), smoothstep(0.82, 0.92, fract(bk.y)));
			vec3 brick = mix(vec3(0.55, 0.30, 0.20), vec3(0.42, 0.25, 0.18), vnoise3(vec3(floor(bk), 0.0) * 0.7)) * (0.85 + 0.3 * hash13(vec3(floor(bk), 1.0)));
			brick = mix(brick, vec3(0.62, 0.58, 0.52), mortar);
			base = mix(base, brick, bare);
			if (is(${kt.NICHE}.0)) base *= 0.55;
			gloss = 0.04;
		} else if (is(${kt.STONE}.0)) {
			float n = fbm3(p * vec3(1.2, 2.5, 1.2));
			base = mix(vec3(0.72, 0.66, 0.56), vec3(0.84, 0.79, 0.70), n) * (0.92 + 0.12 * vnoise3(p * 20.0));
			gloss = 0.12;
		} else if (is(${kt.TRAVERTINE}.0)) {
			// travertine: bands, little holes, a warm cream
			float band = fbm3(vec3(p.x * 0.4, p.y * 9.0 + fbm3(p * 1.5) * 2.0, p.z * 0.4));
			base = mix(vec3(0.73, 0.65, 0.53), vec3(0.88, 0.82, 0.72), band);
			float pit = smoothstep(0.84, 0.9, vnoise3(p * 55.0));
			base *= 1.0 - pit * 0.18;
			// wet and darker just above the water
			base *= mix(0.78, 1.0, smoothstep(0.0, 0.12, p.y));
			gloss = 0.18;
		} else if (is(${kt.STEEL}.0)) {
			base = vec3(0.035, 0.036, 0.038) * (0.8 + 0.4 * vnoise3(p * 3.0));
			gloss = 0.45;
		} else if (is(${kt.FLOOR}.0)) {
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
			float wallD = min(min(p.x, ${at($t)} - p.x), min(p.z, ${at($e)} - p.z));
			base *= mix(0.72, 1.0, smoothstep(0.0, 1.2, wallD));
			N = normalize(N + (vec3(1.0, 0.0, 0.0) * (tn.r * 2.0 - 1.0) + vec3(0.0, 0.0, -1.0) * (tn.g * 2.0 - 1.0)) * 1.2);
			gloss = 0.12;
			aoK = mix(0.5, 1.0, tn.b) * mix(0.62, 1.0, smoothstep(0.0, 0.9, wallD));
			// the curb throws a soft shadow round the pool
			vec2 dq = max(vec2(${at(ct.x0-ct.curb)} - p.x, p.x - ${at(ct.x1+ct.curb)}), vec2(${at(ct.z0-ct.curb)} - p.z, p.z - ${at(ct.z1+ct.curb)}));
			float dpool = max(max(dq.x, dq.y), 0.0);
			aoK *= mix(0.7, 1.0, smoothstep(0.0, 0.4, dpool));
		} else if (is(${kt.WMARBLE}.0)) {
			// white statuary marble, polished: a soft grey cloud and fine veins
			float cl = fbm3(p * 1.4 + 2.0);
			float v1 = abs(sin(p.x * 3.1 + p.z * 1.7 + p.y * 5.0 + cl * 7.0));
			float vein = (1.0 - smoothstep(0.0, 0.05, v1)) * 0.7 + (1.0 - smoothstep(0.0, 0.02, abs(sin(p.z * 6.3 - p.x * 2.2 + cl * 11.0)))) * 0.3;
			base = mix(vec3(0.68, 0.68, 0.66), vec3(0.76, 0.76, 0.74), cl);
			base = mix(base, vec3(0.50, 0.51, 0.52), vein * 0.45);
			base *= mix(0.8, 1.0, smoothstep(0.0, 0.1, p.y));
			gloss = 0.88;
		} else if (is(${kt.REDDOOR}.0) || is(${kt.REDPANEL}.0)) {
			// deep crimson paint over wood: a soft sheen, the grain just showing
			float grain = vnoise3(vec3(p.x * 40.0, p.y * 2.0, p.z * 40.0));
			base = vec3(0.30, 0.022, 0.026) * (0.88 + 0.2 * grain);
			if (is(${kt.REDPANEL}.0)) base *= 0.55;
			gloss = 0.62;
		} else if (is(${kt.DARKWOOD}.0)) {
			float grain = vnoise3(vec3(p.x * 3.0, p.y * 45.0, p.z * 3.0));
			base = mix(vec3(0.030, 0.019, 0.014), vec3(0.062, 0.040, 0.028), grain);
			gloss = 0.35;
		} else if (is(${kt.BRASS}.0)) {
			base = vec3(0.60, 0.44, 0.17) * (0.85 + 0.25 * vnoise3(p * 90.0));
			gloss = 0.78;
		} else if (is(${kt.KEYHOLE}.0)) {
			base = vec3(0.004);
		} else if (is(${kt.BRACT}.0)) {
			float white = step(1.5, v_uv.x);
			base = mix(vec3(0.62, 0.03, 0.22), vec3(0.86, 0.80, 0.80), white) * (0.8 + 0.3 * hash13(floor(p * 30.0)));
			sss = 0.5;
		} else if (is(${kt.WATER}.0)) {
			base = vec3(0.012, 0.018, 0.014);
			gloss = 1.0;
		} else if (is(${kt.PAD}.0)) {
			vec4 tx = texture2D(padTex, v_uv);
			if (tx.a < 0.5) discard;
			base = tx.rgb * tx.rgb * (0.8 + 0.35 * vnoise3(vec3(p.xz * 1.3, 2.0)));
			gloss = 0.55;
		} else if (is(${kt.PETAL}.0)) {
			vec4 tx = texture2D(petalTex, v_uv);
			if (tx.a < 0.45) discard;
			base = tx.rgb * tx.rgb;
			sss = 0.6;
			gloss = 0.25;
		} else if (is(${kt.STAMEN}.0)) {
			base = vec3(0.95, 0.66, 0.12);
			gloss = 0.2;
		} else if (is(${kt.MARBLE}.0)) {
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
		} else if (is(${kt.WOOD}.0)) {
			float g = vnoise3(vec3(p.x * 2.0, p.y * 30.0, p.z * 2.0));
			base = mix(vec3(0.26, 0.15, 0.08), vec3(0.42, 0.27, 0.15), g) * (0.85 + 0.2 * vnoise3(p * 5.0));
			gloss = 0.2;
		} else if (is(${kt.GESSO}.0)) {
			base = vec3(0.86, 0.83, 0.76) * (0.95 + 0.08 * vnoise3(p * 30.0));
		} else if (is(${kt.PAINT}.0)) {
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
		} else if (is(${kt.POT}.0)) {
			base = vec3(0.025, 0.025, 0.028);
			gloss = 0.85;
		} else if (is(${kt.SOIL}.0)) {
			base = vec3(0.10, 0.07, 0.05) * (0.7 + 0.5 * vnoise3(p * 40.0));
		} else if (is(${kt.SHADE}.0)) {
			base = vec3(0.03);
			gloss = 0.6;
		} else if (is(${kt.BULB}.0)) {
			vec3 glow = mix(vec3(0.75, 0.70, 0.62) * 0.35, vec3(1.0, 0.75, 0.45) * 3.5, night);
			gl_FragColor = vec4(sqrt(glow), 1.0);
			return;
		} else if (is(${kt.JAR}.0)) {
			base = mix(vec3(0.55, 0.42, 0.25), vec3(0.75, 0.70, 0.62), hash13(floor(p * 3.0)));
			gloss = 0.7;
		} else if (is(${kt.BRUSH}.0)) {
			base = mix(vec3(0.42, 0.10, 0.06), vec3(0.75, 0.62, 0.38), step(${at(.86+.24)}, p.y));
			gloss = 0.5;
		} else if (is(${kt.CLOTH}.0)) {
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
		if (is(${kt.POT}.0) || is(${kt.STEEL}.0) || is(${kt.SHADE}.0) || is(${kt.JAR}.0)) {
			col += env * (0.04 + 0.6 * fres) * gloss * 1.2;
		}
		if (is(${kt.BRASS}.0)) {
			col = base * light * 0.35 + spec * base * 2.5 + env * base * 1.6;
		}
		if (is(${kt.REDDOOR}.0) || is(${kt.REDPANEL}.0) || is(${kt.WMARBLE}.0)) {
			col += env * (0.03 + 0.5 * fres) * gloss;
		}

		col = studioAir(col, pw, v_eye);

		float alpha = 1.0;
		if (is(${kt.FLOOR}.0)) {
			// worn stone: no mirror, just a faint sheen of the room at grazing angles
			float cosV = clamp(V.y, 0.0, 1.0);
			alpha = 1.0 - 0.1 * pow(1.0 - cosV, 4.0) * mirrorOn;
		}
		if (is(${kt.WATER}.0)) {
			// still, dark water: almost a mirror, the sky's light on it, a
			// very slow breath of ripples
			// the moving surface: its slope from the swell and the rings
			float e = ${at(Ol)};
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
	}`;Xr.exports=function(t){let e=LM();NM(e),RM(e),OM(e),SM(e),EM(e);let o={enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},n=performance.now(),r={t:0},a=0,i=t._gl,s=!!(i&&i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS)>0),c=pt=>s?pt:`#define NO_SIM
`+pt,h=(()=>{let pt=Eh,At=zh,_t=new Uint8Array(pt*At*4);for(let ye=0;ye<pt*At;ye++)_t[ye*4]=128,_t[ye*4+2]=128;let Be=()=>t.framebuffer({color:t.texture({width:pt,height:At,data:_t,min:"nearest",mag:"nearest",wrap:"clamp"}),depth:!1,stencil:!1}),je=[Be(),Be()],Xe=0,Ve=new Uint8Array(pt*At*4);for(let ye=0;ye<At;ye++)for(let be=0;be<pt;be++){let Ye=ct.x0+(be+.5)*Ol,Me=ct.z0+(ye+.5)*o3,ue=Math.abs(Ye-xn.x)<.43&&Math.abs(Me-xn.z)<.43,Re=0;for(let He of ld)Re=Math.max(Re,1-Math.min(1,Math.max(0,(Math.hypot(Ye-He[0],Me-He[1])-He[2]*.7)/(He[2]*.3))));let ee=(ye*pt+be)*4;Ve[ee]=ue?0:255,Ve[ee+1]=Math.round(Re*255),Ve[ee+3]=255}let zo=t.texture({width:pt,height:At,data:Ve,min:"nearest",mag:"nearest",wrap:"clamp"}),U=16,bt=[];for(let ye=0;ye<U;ye++)bt.push([0,0,0,.04]);let Rt={prev:t.prop("prev"),mask:zo};for(let ye=0;ye<U;ye++)Rt["src["+ye+"]"]=(be=>()=>bt[be])(ye);let zt=Math.pow(.36*(1/60)/Ol,2),ce=t({vert:"precision highp float; attribute vec2 position; varying vec2 uv; void main() { uv = position * 0.5 + 0.5; gl_Position = vec4(position, 0.0, 1.0); }",frag:`
			precision highp float;
			uniform highp sampler2D prev, mask;
			uniform vec4 src[${U}];
			varying vec2 uv;
			${n3}
			void main() {
				vec2 px = 1.0 / vec2(${pt}.0, ${At}.0);
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
				float hn = h + (h - hp) * damp + ${at(zt)} * lap;
				hn *= 0.9993;
				// whatever touched the water this moment
				vec2 p = vec2(${at(ct.x0+Ce[0])}, ${at(ct.z0+Ce[2])}) + uv * vec2(${at(ct.x1-ct.x0)}, ${at(ct.z1-ct.z0)});
				for (int i = 0; i < ${U}; i++) {
					vec4 s = src[i];
					if (s.z == 0.0) continue;
					vec2 dd = p - s.xy;
					hn += s.z * exp(-dot(dd, dd) / (s.w * s.w));
				}
				gl_FragColor = vec4(simEnc(clamp(hn, -1.0, 1.0)), simEnc(h));
			}`,attributes:{position:[-1,-1,1,-1,-1,1,1,1]},primitive:"triangle strip",count:4,framebuffer:t.prop("out"),uniforms:Rt,depth:{enable:!1,mask:!1},blend:{enable:!1},cull:{enable:!1},viewport:{x:0,y:0,width:pt,height:At}}),Pe=[],_e=0,le=0;return{tex:()=>je[Xe].color[0],drop(ye,be,Ye,Me){Pe.push([ye,be,_e,Ye,0,Me||.035]),typeof window!="undefined"&&window.__dropLog&&window.__dropLog.push([ye,be,_e,Ye])},advance(ye,be){let Ye=ye-_e-le;if(Ye<0||Ye>2){_e=ye,le=0;return}le+=Ye;let Me=0;for(;le>=1/60&&Me<8;){le-=1/60,_e+=1/60,Me++;let ue=0;for(let Re=Pe.length-1;Re>=0;Re--){let ee=Pe[Re],He=_e-ee[2];if(He>1.4){Pe.splice(Re,1);continue}if(ue>=U)continue;let Ao=ee[3]*.05*Math.sin(He*2*Math.PI*2.4)*Math.exp(-He*3.2),Ue=bt[ue++];Ue[0]=ee[0],Ue[1]=ee[1],Ue[2]=Ao,Ue[3]=ee[5]}for(let Re of be){if(ue>=U)break;let ee=bt[ue++];ee[0]=Re[0],ee[1]=Re[1],ee[2]=Re[2],ee[3]=Re[3]}for(;ue<U;ue++)bt[ue][2]=0;ce({prev:je[Xe].color[0],out:je[1-Xe]}),Xe=1-Xe}Me===8&&(le=0,_e=ye)},read(){return t.read({framebuffer:je[Xe]})}}})(),l=()=>{r.t=(performance.now()-n)/1e3,typeof window!="undefined"&&window.__studioFreeze!=null&&(r.t=window.__studioFreeze);for(let _t of Kg){let Be=AM(_t,r.t),je=Be.ph-Be.Tf;Be.inPool&&je>=0&&je<.5&&!(_t.heard>r.t-1)&&(_t.heard=r.t,h.drop(Be.lx+Ce[0],Be.lz+Ce[2],1.1,.04))}let pt=r.t-De.sim.t;for((pt<0||pt>120)&&(pt=Math.min(Math.max(pt,0),120));pt>1e-6;){let _t=Math.min(pt,.05);De.sim.step(_t),pt-=_t}for(let _t of De.sim.events)_t[2]>a&&(a=_t[2],h.drop(_t[0]+Ce[0],_t[1]+Ce[2],_t[3]*1.3,_t[3]>=1?.07:.04));let At=[];for(let _t of De.sim.fish){let Be=Math.min(1,Math.max(0,(_t.y+.15)/.09));if(Be<=0)continue;let je=.008*Be*Math.min(1.5,_t.v/.15);At.push([_t.x+Ce[0]+Math.cos(_t.th)*.02,_t.z+Ce[2]+Math.sin(_t.th)*.02,je,.045]),At.push([_t.x+Ce[0]-Math.cos(_t.th)*.14,_t.z+Ce[2]-Math.sin(_t.th)*.14,-je,.055])}h.advance(r.t,At)},d={stime:()=>r.t,simTex:()=>h.tex()};typeof location!="undefined"&&/tourdebug/.test(location.search)&&(window.__studioClock=r,window.__pondSim=h);let u=t.texture({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"}),p=[4,4],f=0,v=t({}),m=()=>v(pt=>{let At=pt.viewportWidth,_t=pt.viewportHeight;u.width!==At||u.height!==_t?u({copy:!0,width:At,height:_t,min:"linear",mag:"linear",wrap:"clamp"}):u.subimage({copy:!0,width:At,height:_t}),p[0]=At,p[1]=_t,f=1}),g=Lr(t,"res/pond/lilypad.webp"),x=Lr(t,"res/pond/petals.webp"),y=Lr(t,"res/studio/rock_col.webp",{wrap:"repeat"}),w=Lr(t,"res/studio/rock_nrm.webp",{wrap:"repeat"}),M=Lr(t,"res/studio/oldstone_col.webp",{wrap:"repeat"}),_=Lr(t,"res/studio/oldstone_nrm.webp",{wrap:"repeat"}),S=Lr(t,"res/studio/floor_col.webp",{wrap:"repeat"}),R=Lr(t,"res/studio/floor_nrm.webp",{wrap:"repeat"}),N=Object.assign({padTex:()=>g.tex,petalTex:()=>x.tex,reflTex:()=>u,reflSize:()=>p,reflOn:()=>f,rockCol:()=>y.tex,rockNrm:()=>w.tex,oldCol:()=>M.tex,oldNrm:()=>_.tex,floorCol:()=>S.tex,floorNrm:()=>R.tex},d),G=(pt,At)=>t({vert:c(Zg),frag:UM,attributes:{position:pt.pos,normal:pt.nrm,kind:pt.kind,uv:pt.uv,anchor:pt.anchor&&pt.anchor.length?pt.anchor:new Float32Array(pt.pos.length/3*4)},elements:new Uint32Array(pt.idx),count:At||pt.idx.length,uniforms:N,cull:{enable:!1},blend:o}),q=G(e),V=null;fetch(xn.file).then(pt=>{if(!pt.ok)throw new Error("Could not load "+xn.file);return pt.arrayBuffer()}).then(pt=>{let At=GM(pt),_t={pos:[],nrm:[],kind:[],uv:[],anchor:null,idx:[]},Be=xn.height,je=Math.cos(xn.yaw),Xe=Math.sin(xn.yaw);for(let Ve=0;Ve<At.nV;Ve++){let zo=(At.mn[0]+At.pos[Ve*3]/65535*At.sz[0])*Be,U=(At.mn[1]+At.pos[Ve*3+1]/65535*At.sz[1])*Be,bt=(At.mn[2]+At.pos[Ve*3+2]/65535*At.sz[2])*Be;_t.pos.push(xn.x+je*zo+Xe*bt+Ce[0],xn.plinth+U+Ce[1],xn.z-Xe*zo+je*bt+Ce[2]);let Rt=At.nrm[Ve*3]/127,zt=At.nrm[Ve*3+1]/127,ce=At.nrm[Ve*3+2]/127;_t.nrm.push(je*Rt+Xe*ce,zt,-Xe*Rt+je*ce),_t.kind.push(kt.MARBLE),_t.uv.push(0,0)}for(let Ve=0;Ve<At.nI;Ve++)_t.idx.push(At.idx[Ve]);V=G(_t)}).catch(pt=>console.error(pt));let D=Lr(t,"res/tree/leaves.webp"),B=CM(),dt=t({vert:c(`
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
		}`,attributes:{position:B.pos,normal:B.nrm,uv:B.uv,shade:B.shade,flower:B.flower},elements:new Uint32Array(B.idx),uniforms:{tex:D.tex},cull:{enable:!1}}),Gt=Lr(t,"res/studio/plants.webp"),Nt=qM(),xt=pt=>t({vert:c(`
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
		}`,attributes:{position:pt.pos,normal:pt.nrm,uv:pt.uv,info:pt.info},elements:new Uint32Array(pt.idx),uniforms:{tex:Gt.tex},cull:{enable:!1}}),ot=xt(Nt.walls),Bt=xt(Nt.ground);typeof location!="undefined"&&/tourdebug/.test(location.search)&&console.log("studio greenery: ivy verts",Nt.walls.pos.length/3,"ground verts",Nt.ground.pos.length/3);let ze=(()=>{let pt={corner:[],start:[],par:[],misc:[],idx:[]};return Kg.forEach((At,_t)=>{for(let Be of[[-1,-1],[1,-1],[1,1],[-1,1]])pt.corner.push(Be[0],Be[1]),pt.start.push(At.start[0]+Ce[0],At.start[1],At.start[2]+Ce[2]),pt.par.push(At.period,At.offset,At.drift[0],At.drift[1]),pt.misc.push(At.speed,At.seed,At.white);pt.idx.push(_t*4,_t*4+1,_t*4+2,_t*4,_t*4+2,_t*4+3)}),pt})(),Se=t({vert:c(`
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
		${os}
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
			vec2 lq = land - vec2(${at(Ce[0])}, ${at(Ce[2])});
			bool inPool = lq.x > ${at(ns[0])} && lq.x < ${at(ns[2])} && lq.y > ${at(ns[1])} && lq.y < ${at(ns[3])};
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
		}`,attributes:{corner:ze.corner,start:ze.start,par:ze.par,misc:ze.misc},elements:new Uint32Array(ze.idx),uniforms:d,cull:{enable:!1}}),De={sim:TM(),ready:!1};Pl=De.sim,typeof location!="undefined"&&/tourdebug/.test(location.search)&&(window.__koi=De.sim);let Ee=Object.assign({},d);Vr.forEach((pt,At)=>{Ee["koiA["+At+"]"]=()=>{let _t=De.sim.fish[At];return[_t.x+Ce[0],_t.y,_t.z+Ce[2],_t.th]},Ee["koiB["+At+"]"]=()=>{let _t=De.sim.fish[At];return[_t.kappa,_t.ph,_t.amp,_t.pitch]}});let rt=(()=>{let At=Math.round(96*(ct.z1-ct.z0)/(ct.x1-ct.x0)),_t=new Uint8Array(96*At*4),Be=[-fa[0]/fa[1]*-Ll,-fa[2]/fa[1]*-Ll],je=96/(ct.x1-ct.x0),Xe=At/(ct.z1-ct.z0);for(let Ve=0;Ve<At;Ve++)for(let zo=0;zo<96;zo++){let U=ct.x0+(zo+.5)/je,bt=ct.z0+(Ve+.5)/Xe,Rt=0;for(let zt of ld){let ce=Math.hypot(U-(zt[0]+Be[0]),bt-(zt[1]+Be[1]));Rt=Math.max(Rt,1-Math.min(1,Math.max(0,(ce-zt[2]*.82)/(zt[2]*.35))))}_t[(Ve*96+zo)*4]=Math.round(Rt*255),_t[(Ve*96+zo)*4+3]=255}return t.texture({width:96,height:At,data:_t,min:"linear",mag:"linear"})})(),ht=`
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
	`,oe=`
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
			vec2 lp = pw.xz - vec2(${at(Ce[0])}, ${at(Ce[2])});
			// (the picture is for the bed; nearer the surface the shadow sits nearer the pad)
			vec2 back = W_SUN.xz / W_SUN.y * (pw.y - ${at(Ll)});
			vec2 uv = (lp - back - vec2(${at(ct.x0)}, ${at(ct.z0)})) / vec2(${at(ct.x1-ct.x0)}, ${at(ct.z1-ct.z0)});
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
			float e = ${at(Ol)};
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
	`,lt=(()=>{let pt=[],At=[],_t=[],Be=[],je=(zt,ce,Pe,_e,le)=>(pt.push(zt+Ce[0],ce,Pe+Ce[2]),At.push(..._e),_t.push(le),pt.length/3-1),Xe=(zt,ce,Pe,_e,le,ye,be)=>{let Ye=pt.length/3;for(let Me=0;Me<=_e;Me++)for(let ue=0;ue<=le;ue++)je(zt[0]+ce[0]*Me/_e+Pe[0]*ue/le,zt[1]+ce[1]*Me/_e+Pe[1]*ue/le,zt[2]+ce[2]*Me/_e+Pe[2]*ue/le,ye,be);for(let Me=0;Me<_e;Me++)for(let ue=0;ue<le;ue++){let Re=Ye+Me*(le+1)+ue;Be.push(Re,Re+1,Re+le+2,Re,Re+le+2,Re+le+1)}},{x0:Ve,x1:zo,z0:U,z1:bt}=ct,Rt=Ll;return Xe([Ve,Rt,U],[zo-Ve,0,0],[0,0,bt-U],8,22,[0,1,0],0),Xe([Ve,0,U],[0,0,bt-U],[0,Rt,0],22,2,[1,0,0],1),Xe([zo,0,U],[0,0,bt-U],[0,Rt,0],22,2,[-1,0,0],1),Xe([Ve,0,U],[zo-Ve,0,0],[0,Rt,0],8,2,[0,0,1],1),Xe([Ve,0,bt],[zo-Ve,0,0],[0,Rt,0],8,2,[0,0,-1],1),{pos:pt,nrm:At,kd:_t,idx:Be}})(),It=Lr(t,"res/pond/gravel.jpg",{wrap:"repeat"}),Jt=Object.assign({padShadow:rt,gravel:()=>It.tex,reflTex:()=>u,reflSize:()=>p,reflOn:()=>f},Ee),me=t({vert:c(`
		precision highp float;
		uniform mat4 proj, view;
		attribute vec3 position, normal;
		attribute float kd;
		varying vec3 v_pos, v_nrm, v_eye;
		varying float v_kd;
		${os}
		${ht}
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
		${os}
		${La}
		${oe}
		float klen(int i) {
			${Vr.map((pt,At)=>`if (i == ${At}) return ${at(pt.len)};`).join(" ")}
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
				base = mix(base, vec3(0.10, 0.13, 0.07), smoothstep(-0.05, ${at(Ll)}, v_pos.y) * 0.75);
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
		}`,attributes:{position:lt.pos,normal:lt.nrm,kd:lt.kd},elements:new Uint16Array(lt.idx),uniforms:Jt,cull:{enable:!1},depth:{enable:!0,mask:!1,func:"less"},blend:o}),xe=Lr(t,"res/koi.webp"),te=null,se=null;fetch("res/koi.bin").then(pt=>{if(!pt.ok)throw new Error("Could not load res/koi.bin");return pt.arrayBuffer()}).then(pt=>{let At=new DataView(pt),_t=At.getUint32(4,!0),Be=At.getUint32(8,!0),je=At.getFloat32(12,!0),Xe=16,Ve=new Uint16Array(pt,Xe,_t);Xe+=_t*2;let zo=new Int16Array(pt,Xe,_t*2);Xe+=_t*4;let U=new Uint16Array(pt,Xe,_t*2);Xe+=_t*4;let bt=new Uint16Array(pt,Xe,Be);Xe+=Be*2;let Rt=new Int8Array(pt,Xe,_t*3);Xe+=_t*3;let zt=new Uint8Array(pt,Xe,_t*2),ce=Vr.length,Pe=new Float32Array(_t*3*ce),_e=new Float32Array(_t*3*ce),le=new Float32Array(_t*2*ce),ye=new Float32Array(_t*2*ce),be=new Float32Array(_t*4*ce);Vr.forEach((ue,Re)=>{for(let ee=0;ee<_t;ee++){let He=Re*_t+ee;Pe[He*3]=Ve[ee]/65535*1.2,Pe[He*3+1]=zo[ee*2]/32767*je,Pe[He*3+2]=zo[ee*2+1]/32767*je,_e[He*3]=Rt[ee*3]/127,_e[He*3+1]=Rt[ee*3+1]/127,_e[He*3+2]=Rt[ee*3+2]/127,le[He*2]=U[ee*2]/65535,le[He*2+1]=U[ee*2+1]/65535,ye[He*2]=zt[ee*2]/255,ye[He*2+1]=zt[ee*2+1]/255,be[He*4]=ue.len,be[He*4+1]=ue.kind,be[He*4+2]=Re,be[He*4+3]=0}});let Ye=[],Me=[];for(let ue=0;ue<ce;ue++)for(let Re=0;Re<Be;Re+=3){let ee=bt[Re],He=bt[Re+1],Ao=bt[Re+2];(Math.max(zt[ee*2],zt[He*2],zt[Ao*2])>140?Me:Ye).push(ee+ue*_t,He+ue*_t,Ao+ue*_t)}se={body:t.elements({data:new Uint32Array(Ye),type:"uint32"}),fins:t.elements({data:new Uint32Array(Me),type:"uint32"})},te=t({vert:c(`
				precision highp float;
				uniform mat4 proj, view;
				attribute vec3 loc, nrm;
				attribute vec2 uv, fin;
				attribute vec4 km;
				varying vec3 v_pos, v_nrm, v_eye;
				varying vec2 v_uv;
				varying float v_kind, v_fin, v_depth, v_seed, v_u;
				${os}
				${ht}
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
				${os}
				${La}
				${oe}
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
				}`,attributes:{loc:Pe,nrm:_e,uv:le,fin:ye,km:be},elements:t.prop("els"),uniforms:Object.assign({koiTex:()=>xe.tex,padShadow:rt,reflTex:()=>u,reflSize:()=>p,reflOn:()=>f},Ee),cull:{enable:!1},colorMask:t.prop("color"),depth:{enable:!0,mask:t.prop("write"),func:t.prop("func")},blend:o}),De.ready=!0}).catch(pt=>console.error(pt));let ut=()=>{te&&(te({els:se.body,color:[!1,!1,!1,!1],write:!0,func:"less"}),te({els:se.body,color:[!0,!0,!0,!0],write:!1,func:"lequal"}),te({els:se.fins,color:[!0,!0,!0,!0],write:!1,func:"less"}))},Vt=(()=>{let pt={cp:[],ci:[],idx:[]};for(let At=0;At<Nl;At++){let _t=pt.cp.length/3,Be=5,je=7;for(let Xe=0;Xe<=Be;Xe++)for(let Ve=0;Ve<je;Ve++){let zo=Xe/Be*Math.PI,U=Ve/je*Math.PI*2,bt=1+.35*Math.sin(U*3+At*1.7)*Math.sin(zo*2+At);pt.cp.push(Math.sin(zo)*Math.cos(U)*bt,Math.cos(zo)*.6,Math.sin(zo)*Math.sin(U)*bt*(.8+.4*(At*.37%1))),pt.ci.push(At)}for(let Xe=0;Xe<Be;Xe++)for(let Ve=0;Ve<je;Ve++){let zo=_t+Xe*je+Ve,U=_t+Xe*je+(Ve+1)%je,bt=_t+(Xe+1)*je+Ve,Rt=_t+(Xe+1)*je+(Ve+1)%je;pt.idx.push(zo,U,Rt,zo,Rt,bt)}}return pt})(),he=Object.assign({},d);for(let pt=0;pt<Nl;pt++)he["crumbs["+pt+"]"]=()=>{let At=De.sim.crumbs[pt],_t=De.sim.t,Be=At.alive?Math.min(1,Math.max(0,(_t-At.born)/.25)):0;return[At.x+Ce[0],At.z+Ce[2],Be,At.seed]};let Ht=t({vert:c(`
		precision highp float;
		uniform mat4 proj, view;
		uniform vec4 crumbs[${Nl}];
		attribute vec3 cp;
		attribute float ci;
		varying vec3 v_pos, v_nrm, v_eye;
		${os}
		void main() {
			int k = int(ci + 0.5);
			vec4 c = crumbs[0];
			for (int i = 1; i < ${Nl}; i++) if (i == k) c = crumbs[i];
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
		}`,attributes:{cp:Vt.cp,ci:Vt.ci},elements:new Uint32Array(Vt.idx),uniforms:he,cull:{enable:!1}}),Lt=PM(),Je=t({vert:c(Zg),frag:`
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
			vec3 p = v_pos - vec3(${at(Ce[0])}, ${at(Ce[1])}, ${at(Ce[2])});
			float dust = fbm3(p * vec3(1.5, 3.0, 1.5)) * (v_kind > 0.5 ? 1.0 : 0.6);
			// streaks where old rain has run down the roof
			float streak = v_kind > 0.5 ? smoothstep(0.55, 0.9, vnoise3(vec3(p.z * 9.0, p.x * 0.6, 0.0))) * 0.5 : 0.0;
			vec3 c = mix(vec3(0.85, 0.80, 0.72), vec3(0.12, 0.13, 0.17), night) * (dust * 0.5 + streak);
			float a = clamp(0.05 + dust * 0.16 + streak * 0.2 + F * 0.4, 0.0, 0.6);
			vec3 col = mix(c, studioSky(reflect(-V, N)), F / max(a, 0.01) * 0.4);
			// the roof's leaded pattern: dark cames, frosted rondels lit
			// from behind by the sky
			if (v_kind > 0.5) {
				float ux = p.x < ${at($t/2)} ? p.x : ${at($t)} - p.x;
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
		}`,attributes:{position:Lt.pos,normal:Lt.nrm,kind:Lt.kind,uv:Lt.uv,anchor:Lt.anchor},uniforms:d,elements:new Uint32Array(Lt.idx),cull:{enable:!1},depth:{mask:!1},blend:o}),k=(()=>{let pt={pos:[],idx:[]},At=300,_t=24,Be=12;for(let je=0;je<=Be;je++){let Xe=-.25*po+je/Be*.75*po;for(let Ve=0;Ve<=_t;Ve++){let zo=Ve/_t*2*po;pt.pos.push(Ce[0]+$t/2+At*Math.cos(Xe)*Math.cos(zo),At*Math.sin(Xe),Ce[2]+$e/2+At*Math.cos(Xe)*Math.sin(zo))}}for(let je=0;je<Be;je++)for(let Xe=0;Xe<_t;Xe++){let Ve=je*(_t+1)+Xe,zo=Ve+1,U=Ve+_t+2,bt=Ve+_t+1;pt.idx.push(Ve,zo,U,Ve,U,bt)}return pt})(),to=t({vert:c(`
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
		void main() {`),attributes:{position:k.pos},elements:new Uint32Array(k.idx),cull:{enable:!1}});function no(pt){pt&&pt.reflected||(m(),l()),to(),q(),pt&&pt.reflected||(me(),ut(),Ht()),V&&V(),dt(),ot(),pt&&pt.reflected||Bt(),Se(),pt&&pt.reflected||Je()}return no};var Pl=null;function BM(t,e){if(e[1]>=-1e-4)return null;let o=-t[1]/e[1],n=t[0]+e[0]*o-Ce[0],r=t[2]+e[2]*o-Ce[2];return n<ct.x0||n>ct.x1||r<ct.z0||r>ct.z1?null:[n+Ce[0],r+Ce[2]]}function jM(t,e){Pl&&Pl.drop(t-Ce[0],e-Ce[2])}function WM(){return!!(Pl&&Pl.feed.on)}var Jg=[{from:[8,1.65,21.1],to:[8,1.7,19.1],at:[8,2.4,1],fov:58},{from:[3.6,1.65,20.5],to:[4.6,1.75,18.7],at:[8.8,2.7,1.5],fov:58},{from:[8,1.45,11.2],to:[8,1.55,8.4],at:[8,2.5,.5],fov:46},{from:[8.9,3.9,11.4],to:[7.4,3.7,10.2],at:[8,-.2,7.2],fov:50,pond:!0},{from:[5.1,1.5,5.8],to:[5.7,1.7,4.6],at:[8,2.6,.8],fov:44},{from:[10.6,1.6,2.4],to:[9.7,1.7,3.6],at:[8,2.4,22],fov:60},{from:[2.6,1.5,19],to:[3.6,1.6,17.4],at:[8,6.8,8],fov:62}],uc=11;function VM(t){let e=Jg.length,o=Math.floor(t/uc)%e,n=t%uc/uc,r=n*n*(3-2*n),a=Jg[o],i=a.from.map((c,h)=>c+(a.to[h]-c)*r),s=Math.max(0,1-Math.min(n*uc,(1-n)*uc)/.7);return{eye:id(i),target:id(a.at),fov:a.fov,roll:0,fade:s,pond:!!a.pond&&s<.05,shot:Math.floor(t/uc)}}Xr.exports.previewCam=VM;Xr.exports.poolHit=BM;Xr.exports.feedAt=jM;Xr.exports.feeding=WM;Xr.exports.sunGLSL=t3;Xr.exports.O=Ce;Xr.exports.SIZE={W:$t,L:$e,H:mo,RIDGE:ur};Xr.exports.BOX=[Ce[0]-.8,0,Ce[2]-.8,Ce[0]+$t+.8,ur+.5,Ce[2]+$e+.8];Xr.exports.AIR_BOX=[Ce[0],0,Ce[2],Ce[0]+$t,ur,Ce[2]+$e]});var Nh=Et((gA,l3)=>{"use strict";var{A:b0}=Ar(),{C:Gn}=M0(),{DOOR:dc}=Va(),l0=Ja(),pc=Ks(),s3=Gn.hallEnd+.35,i3={arch:[13.6,0,b0.zc-b0.arch.r-.3,14.4,b0.arch.spring+b0.arch.r+.3,b0.zc+b0.arch.r+.3],mouth:[13.3,0,Gn.z0-.3,14.3,8.2,Gn.z1+.3],stair:[-.5,0,l0.SURR.z0-.2,.5,l0.SURR.top+.3,l0.SURR.z1+.2],door:[dc.x0-.4,0,-.5,dc.x1+.4,dc.top+.4,.5],windows:[15.6,.4,Gn.z1-.2,36.9,6.4,Gn.z1+.9],farDoor:[Gn.x1-.2,0,Gn.zc-dc.r-.4,Gn.x1+.9,dc.top+.4,Gn.zc+dc.r+.4]},Ra={court:[b0.x0-.4,0,b0.z0-.3,b0.x1+.3,b0.domeTop+.5,b0.z1+.3],stair:[l0.C.x-l0.R-2.6,0,l0.C.z-l0.R-1.5,.5,15.6,l0.C.z+l0.R+1.5],street:[-60,-1,-140,74,60,.6],garden:[10,-1,Gn.z1,46,60,Gn.z1+110],florence:[Gn.x1,-1,Gn.zc-30,Gn.x1+80,60,Gn.zc+30],studio:pc.BOX},XM=[[0,0,0,14,0,s3],[13.6,0,Gn.z0,Gn.x1+.4,0,Gn.z1],[b0.x0-.4,0,b0.z0,b0.x1,0,b0.z1],[l0.C.x-l0.R-2.6,0,l0.C.z-l0.R,.4,0,l0.C.z+l0.R],[pc.BOX[0],0,pc.BOX[2],pc.BOX[3],0,pc.BOX[5]]],YM={hall:{court:["arch"],stair:["stair"],street:["door"],garden:["mouth","windows"],florence:["mouth","farDoor"]},wing:{court:["mouth","arch"],stair:["mouth","stair"],street:["mouth","door"],garden:["windows"],florence:["farDoor"]},court:{stair:["arch","stair"],street:["arch","door"],garden:["arch","mouth","windows"],florence:["arch","mouth","farDoor"]},stair:{court:["stair","arch"],street:["stair","door"],garden:["stair","mouth","windows"],florence:["stair","mouth","farDoor"]}},ql=new Float64Array(24),Yr=[7,2,2],c3=0,Oa="out",Lh=!0;try{/[?&]nocull\b/.test(location.search)&&(Lh=!1)}catch(t){}var $l={court:!0,stair:!0,street:!0,garden:!0,florence:!0,studio:!1},Il={court:!0,stair:!0,street:!0,garden:!0,florence:!0,studio:!1},r3=!0;function KM(t){let e=s=>[t[s],t[4+s],t[8+s],t[12+s]],o=e(0),n=e(1),r=e(2),a=e(3),i=(s,c,h,l)=>{for(let d=0;d<4;d++)ql[s*4+d]=c[d]+h*l[d]};i(0,a,1,o),i(1,a,-1,o),i(2,a,1,n),i(3,a,-1,n),i(4,a,1,r),i(5,a,-1,r)}function rs(t,e){if(!Lh)return!0;let o=e?-t[4]:t[1],n=e?-t[1]:t[4];for(let r=0;r<6;r++){let a=ql[r*4],i=ql[r*4+1],s=ql[r*4+2],c=ql[r*4+3],h=a>0?t[3]:t[0],l=i>0?n:o,d=s>0?t[5]:t[2];if(a*h+i*l+s*d+c<0)return!1}return!0}var fd=(t,e)=>Yr[0]>t[0]-e&&Yr[0]<t[3]+e&&Yr[2]>t[2]-e&&Yr[2]<t[5]+e;function QM(t){if(fd(t,.6))return null;let e=1/0,o=-1/0;for(let n=0;n<4;n++){let r=(n&1?t[3]:t[0])-Yr[0],a=(n&2?t[5]:t[2])-Yr[2],i=Math.atan2(r,a)-c3;i-=Math.round(i/(2*Math.PI))*2*Math.PI,e=Math.min(e,i),o=Math.max(o,i)}return o-e>Math.PI?null:[e,o]}function a3(t,e,o){let n=-Math.PI,r=Math.PI,a=i=>{let s=QM(i);return s?(n=Math.max(n,s[0]-.03),r=Math.min(r,s[1]+.03),n<=r):!0};for(let i of t){let s=i3[i];if(!fd(s,.6)&&(!rs(s,o)||!a(s)))return!1}return rs(e,o)&&a(e)}function ZM(){let t=Yr[0],e=Yr[2],o=pc.BOX;return t>o[0]&&t<o[3]&&e>o[2]&&e<o[5]?"studio":t<0&&e>l0.C.z-l0.R-1.5&&t>l0.C.x-l0.R-2.6?"stair":t>14.1&&e>b0.z0-.3&&e<b0.z1+.3&&t<b0.x1+.3?"court":t>13.9&&e>Gn.z0-.4&&e<Gn.z1+.1&&t<Gn.x1+.3?"wing":t>=0&&t<=14.1&&e>.3&&e<s3?"hall":"out"}var JM={PORTAL:i3,ROOM:Ra,update(t,e,o){let n=new Array(16);for(let r=0;r<4;r++)for(let a=0;a<4;a++){let i=0;for(let s=0;s<4;s++)i+=e[s*4+a]*t[r*4+s];n[r*4+a]=i}KM(n),Yr[0]=o[0],Yr[1]=o[1],Yr[2]=o[2],c3=Math.atan2(-t[2],-t[10]),Oa=ZM();for(let r in Ra){if(r==="studio"||Oa==="studio"){$l[r]=Il[r]=r==="studio"&&Oa==="studio";continue}if(!Lh||Oa==="out"||Oa===r||fd(Ra[r],.3))$l[r]=rs(Ra[r],!1)||Oa===r,Il[r]=rs(Ra[r],!0)||Oa===r;else{let a=YM[Oa][r];$l[r]=a?a3(a,Ra[r],!1):rs(Ra[r],!1),Il[r]=a?a3(a,Ra[r],!0):rs(Ra[r],!0)}}r3=!Lh||XM.some(r=>rs(r,!1))},get zone(){return Oa},room(t,e){return e?Il[t]:$l[t]},box(t,e,o){return o&&!(e?Il[o]:$l[o])?!1:rs(t,e)},get floor(){return r3}};l3.exports=JM});var h3=Et((xA,f3)=>{"use strict";var t8=Ku(),e8=Nh();function o8(t){let e=new DataView(t);if(String.fromCharCode(e.getUint8(0),e.getUint8(1),e.getUint8(2),e.getUint8(3))!=="STAT")throw new Error("Not a statue file");let n=e.getUint32(4,!0),r=e.getUint32(8,!0),a=[],i=[];for(let d=0;d<3;d++)a.push(e.getFloat32(12+d*4,!0)),i.push(e.getFloat32(24+d*4,!0));let s=36,c=new Uint16Array(t,s,n*3);s+=n*6;let h=new Uint16Array(t,s,r);s+=r*2;let l=new Int8Array(t,s,n*3);return{nV:n,nI:r,mn:a,sz:i,pos:c,idx:h,nrm:l}}f3.exports=(t,e)=>{let o=[],n=[],r=[],a=[],i=null,s=e.statues.length,c=[],h=(d,u)=>{let p=o.length/3,f=u.height*.75,v=u.base!==void 0?u.base:e.pedestalTop;c.push({offset:a.length,count:d.nI,box:[u.x-f,v-.1,u.z-f,u.x+f,v+u.height+.2,u.z+f]});let m=u.height,g=Math.cos(u.yaw),x=Math.sin(u.yaw),y=u.base!==void 0?u.base:e.pedestalTop;for(let w=0;w<d.nV;w++){let M=(d.mn[0]+d.pos[w*3]/65535*d.sz[0])*m,_=(d.mn[1]+d.pos[w*3+1]/65535*d.sz[1])*m,S=(d.mn[2]+d.pos[w*3+2]/65535*d.sz[2])*m;o.push(u.x+g*M+x*S,y+_,u.z-x*M+g*S);let R=d.nrm[w*3]/127,N=d.nrm[w*3+1]/127,G=d.nrm[w*3+2]/127;n.push(g*R+x*G,N,-x*R+g*G),r.push(u.mat||1,0,0)}for(let w=0;w<d.nI;w++)a.push(p+d.idx[w])},l=()=>{a.length!==0&&(i=t8(t,{position:o,normal:n,mat:r,elements:a,lights:e.lights,get viewer(){return e.viewer}},!1,!0))};return e.statues.forEach(d=>{fetch("res/"+d.file).then(u=>{if(!u.ok)throw new Error("Could not load "+d.file);return u.arrayBuffer()}).then(u=>h(o8(u),d)).catch(u=>console.error(u)).then(()=>{--s===0&&l()})}),function(d){if(!i)return;let u=!!(d&&d.reflected),p=c.filter(f=>e8.box(f.box,u));p.length&&i(p)}}});var _3=Et((yA,ud)=>{"use strict";var n8=Fs(),Qn=1.29032,Zs=[9.2968,2,5.9],r8=[[.767398,.00185,-.10827],[.010515,.769952,.087681],[-.107774,.08829,-.762374]],Rh=2147.64,u3=725,d3=1288,p3=1450,v3=2576,er=-5.197,ti=3.865,as=10.135,ei=-14.679,Dl=-30.229,Fl=7.232,m3=-45.713,vc=17.1*Qn,Js=16.6*Qn,Gl=16.6*Qn,g3=[6.9,17.1],Oh=[2.95,16.6],a8=1.6,s8=0,i8=1,x3=2,hd=3,y3=4,b3=5,c8=6;function l8(){let t=[],e=[],o=[],n=[],r=n8.createBuilder(t,e,o,n),a=(h,l,d,u,p,f,v=1,m=1)=>{let g=[];for(let x=0;x<=v;x++){let y=[];for(let w=0;w<=m;w++){let M=[h[0]+l[0]*x/v+d[0]*w/m,h[1]+l[1]*x/v+d[1]*w/m,h[2]+l[2]*x/v+d[2]*w/m],_=f(M);y.push(r.vert(M,u,[p,_[0],_[1]]))}g.push(y)}for(let x=0;x<v;x++)for(let y=0;y<m;y++)r.tri(g[x][y],g[x+1][y],g[x][y+1]),r.tri(g[x+1][y],g[x+1][y+1],g[x][y+1])},i=h=>l=>[(Zs[2]-l[2])/Qn-h,l[1]/Qn];a([-60,0,-.36],[130,0,0],[0,0,-140],[0,1,0],s8,h=>[h[0]/Qn,h[2]/Qn],13,14),a([ti,0,er],[0,0,ei-er],[0,vc,0],[1,0,0],i8,i(8.6),6,6),a([-40,0,er],[ti+40,0,0],[0,vc,0],[0,0,1],x3,h=>[(ti-h[0])/Qn,h[1]/Qn],8,4),a([-40,0,-.36],[0,0,er+.36],[0,vc,0],[1,0,0],x3,h=>[-h[2]/Qn,h[1]/Qn]),a([as,0,-80],[0,0,er+80],[0,Js,0],[-1,0,0],y3,i(8.6),12,6),a([as,0,er],[60,0,0],[0,Js,0],[0,0,1],b3,h=>[(h[0]-as)/Qn,h[1]/Qn],8,4),a([70,0,er],[0,0,-.36-er],[0,Js,0],[-1,0,0],b3,h=>[-h[2]/Qn,h[1]/Qn]);let s=h=>[(h[0]-Zs[0])/Qn+4.18,h[1]/Qn];a([-20,0,Dl],[Fl+20,0,0],[0,Gl,0],[0,0,1],hd,s,8,6),a([Fl,0,Dl],[0,0,m3-Dl],[0,Gl,0],[1,0,0],hd,i(28),4,4),a([Fl,0,m3],[as-Fl,0,0],[0,Js,0],[0,0,1],y3,h=>[(h[0]-Zs[0])/Qn,h[1]/Qn],2,4),a([-20,0,ei],[0,0,Dl-ei],[0,Gl,0],[1,0,0],hd,i(16),4,4);let c=(h,l,d,u)=>a(h,l,d,u,c8,()=>[0,0],4,4);return c([-300,-20,-300],[600,0,0],[0,320,0],[0,0,1]),c([-300,300,-300],[600,0,0],[0,0,300],[0,-1,0]),c([-300,-20,0],[0,0,-300],[0,320,0],[1,0,0]),c([300,-20,-300],[0,0,300],[0,320,0],[-1,0,0]),{position:t,normal:e,elements:o,attr:n}}function Qs(t,e,o,n){let r=t.texture({data:[[n]],...o,min:"linear",mag:"linear"});return fetch(e).then(a=>{if(!a.ok)throw new Error("Could not load "+e);return a.blob()}).then(a=>createImageBitmap(a)).then(a=>{r({data:a,...o,min:"mipmap",mipmap:"nice",mag:"linear"})}).catch(a=>console.error(a)),r}var Kr=t=>"vec3("+t.map(e=>e.toFixed(4)).join(", ")+")",f8=[[[-.35,0,-.35],[14.35,9.2,50]],[[-40,0,ei],[ti,vc,er]],[[as,0,-80],[70,Js,er]],[[-20,0,-80],[Fl,Gl,Dl]],[[-40,0,-80],[-20,Gl,ei]]],h8=f8.map(t=>`if (hitBox(ro, rd, ${Kr(t[0])}, ${Kr(t[1])}, 1e4) ) return 0.0;`).join(`
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
	vec3 ro = ${Kr(Zs)};
	vec3 rd = p - ro;
	if (hitBox(ro, rd, ${Kr([-40,0,ei])}, ${Kr([ti-.02,vc,er])}, 0.995)) return false;
	if (hitBox(ro, rd, ${Kr([as+.02,0,-80])}, ${Kr([70,Js,er])}, 0.995)) return false;
	return true;
}

// is this point sky in the photo? (only meaningful inside the photo)
bool photoSky(vec3 p) {
	vec3 pc = ${w3} * (p - ${Kr(Zs)});
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
	vec3 pc = ${w3} * (p - ${Kr(Zs)});
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
	float camCos = abs(dot(normalize(p - ${Kr(Zs)}), n));
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
		bool inAlley = v_pos.x > ${(ti-.05).toFixed(3)} && v_pos.x < ${(as+.05).toFixed(3)};
		projectable = inAlley || v_pos.z < ${ei.toFixed(3)};
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
}`,p8=i0();ud.exports=t=>{let e=l8(),o={wrapS:"clamp",wrapT:"clamp",flipY:!1},n={wrapS:"mirror",wrapT:"clamp",flipY:!1},r={wrapS:"repeat",wrapT:"repeat",flipY:!1},a=Qs(t,"res/street/photo.jpg",o,[190,160,120]),i=Qs(t,"res/street/photo_night.jpg",o,[12,14,22]),s=Qs(t,"res/street/photo_mask.png",o,[255,255,255]),c=Qs(t,"res/street/facade_pink.jpg",n,[200,150,135]),h=Qs(t,"res/street/facade_yellow.jpg",n,[225,180,95]),l=Qs(t,"res/street/facade_cream.jpg",n,[215,200,175]),d=Qs(t,"res/street/cobbles.jpg",r,[95,95,95]),u=Date.now(),p=t({frag:u8,vert:d8,attributes:{position:e.position,normal:e.normal,attr:e.attr},elements:new Uint32Array(e.elements),uniforms:{photo:a,photoMask:s,pinkTex:c,yellowTex:h,creamTex:l,cobbleTex:d,photoNight:i,night:()=>p8.night,time:()=>(Date.now()-u)/1e3}});return function(){p()}};ud.exports.layout={MOUTH_Z:er,PINK_X:ti,RIGHT_X:as,PINK_H:vc,CREAM_H:Js,S:Qn}});var S3=Et((bA,k3)=>{"use strict";var v8=i0().GLSL,{glassPanes:m8}=Va(),M3=M0();function g8(){let t=[],e=[],o=(n,r)=>{for(let a of n)t.push(a),e.push(r)};return o(m8(),[0,0,1]),o(M3.windowGlass(),[0,0,1]),o(M3.farDoorGlass(),[1,0,0]),{position:t,normal:e}}k3.exports=t=>{let e=g8(),o=t({frag:`
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
		}`,attributes:{position:e.position,normal:e.normal},count:e.position.length,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o()}}});var H3=Et((wA,gd)=>{"use strict";var N3=i0().GLSL,x8=Fs(),dd=Sr(),{wallWithHoles:y8,C:cs}=M0(),Ie=.28,tt={westBack:14.4,westCol:15-Ie,eastCol:37.4+Ie,eastBack:41.8,south:cs.z1+.7,northCol:cs.z1+.7+16,northBack:cs.z1+.7+19,cx:(15+37.4)/2,cz:(cs.z1+.7+cs.z1+.7+16-Ie)/2},Wo={x0:tt.westCol+Ie,x1:tt.eastCol-Ie,z0:tt.south,z1:tt.northCol-Ie},T0=3.3,Bl=.92,ls=5.6,E3=6,Rr=11.9,is=9.6,So={x0:tt.cx-2.9,x1:tt.cx+2.9,top:14.4},Fh=7,R3=4,vd=(tt.eastCol-tt.westCol)/Fh,b8=(tt.northCol-tt.south)/R3,O3=3,Wl=.26,ai=1.4,ni=1.1,Ph=3,ha=(()=>{let t=[.3,.82,-.49],e=Math.hypot(...t);return t.map(o=>o/e)})(),ve={GROUND:0,BRICK:1,STONE:2,MARBLE:3,HEDGE:4,POT:5,ROOF:6,SHUTTER:7,PANE:8,PLASTER:9,BARK:10,IRON:11,SKY:12,LEAD:13,FARBRICK:14,DARK:15,SOIL:16},ua=[],C3=(t,e,o)=>[tt.cx+t,e,tt.cz+o],$h=C3(-5.9,0,3.4),fs=.85,ss={c:[$h[0],4.6*fs+.5,$h[2]],r:[5*fs,3.6*fs,4.5*fs]},P3=[{d:[0,4.4,0],r:[3.9,2.6,3.6],n:230},{d:[-2.7,4,-1.2],r:[2.6,2.1,2.4],n:105},{d:[2.7,4.5,-1.6],r:[2.5,2.2,2.3],n:105},{d:[.8,6.9,.8],r:[2.6,2,2.5],n:105},{d:[-1.6,6.1,2],r:[2.2,1.9,2],n:80},{d:[2.3,3.4,1.8],r:[2,1.5,1.9],n:60}].map(t=>({c:[$h[0]+t.d[0]*fs,t.d[1]*fs+.5,$h[2]+t.d[2]*fs],r:t.r.map(e=>e*fs),n:t.n}));for(let t of P3)ua.push({...t,cell:0,leaf:[.5,.7,.46],bloom:[1,1,1],size:[.95,1.35],magnolia:1,shadow:1});var w8=[3.6,6.3,9];for(let t of w8){let e=8.6+t%1.7*.6;ua.push({c:C3(t,e/2+.5,5.2),r:[.9,e/2,.9],cell:1,leaf:[.5,.64,.5],bloom:[1,1,1],n:180,size:[.72,.98],spindle:1,shadow:1})}var _8=[{d:[-8.4,-4],bloom:[1,.62,.78]},{d:[-3.6,-4.6],bloom:[1,.98,.94]},{d:[3.8,-4.3],bloom:[1,.98,.94]},{d:[8.5,-4],bloom:[1,.58,.72]}].map(t=>({x:tt.cx+t.d[0],z:tt.cz+t.d[1],bloom:t.bloom}));for(let t of _8)ua.push({c:[t.x,.95,t.z],r:[1.25,.95,1.1],cell:3,leaf:[.7,.86,.58],bloom:t.bloom,n:80,size:[.55,.8],shadow:1});var md=[45,135,225,315].map(t=>{let e=t*Math.PI/180;return[tt.cx+Math.cos(e)*2.3,tt.cz+Math.sin(e)*2.3]});for(let[t,e]of md)ua.push({c:[t,1.85,e],r:[.62,.55,.62],cell:3,leaf:[.78,.95,.55],bloom:[1.25,1,.25],n:36,size:[.32,.42],shadow:1});var $3=[];{let t=(o,n,r,a,i,s)=>{let c=Math.hypot(r-o,a-n),h=Math.floor(c/.9);for(let l=0;l<=h;l++){let d=l/h,u=o+(r-o)*d,p=n+(a-n)*d;i!==void 0&&Math.abs((r!==o?u:p)-i)<s||$3.push([u,p])}};t(Wo.x0+.45,Wo.z0+1.2,Wo.x0+.45,Wo.z1-.45,tt.cz,1),t(Wo.x1-.45,Wo.z0+1.2,Wo.x1-.45,Wo.z1-.45,tt.cz,1),t(Wo.x0+.45,Wo.z1-.45,Wo.x1-.45,Wo.z1-.45,tt.cx,1.9)}var M8=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],Ih=t=>{let e=Math.hypot(t[0],t[1],t[2])||1;return[t[0]/e,t[1]/e,t[2]/e]};function gc(t,e,o,n,r,a,i){let s=t.vert(e,a,i),c=t.vert(o,a,i),h=t.vert(n,a,i),l=t.vert(r,a,i);t.tri(s,c,h),t.tri(s,h,l)}function Zn(t,e,o,n,r,a,i,s){t.box(Math.min(e,r),Math.min(o,a),Math.min(n,i),Math.max(e,r),Math.max(o,a),Math.max(n,i),[s,0,0])}function k8(t,e,o){return{vert:(n,r,a)=>t.vert(e(n),o(r),a),tri:t.tri}}var S8={north:[t=>[t[0],t[1],tt.northCol-t[2]],t=>[t[0],t[1],-t[2]]],west:[t=>[tt.westCol+t[2],t[1],t[0]],t=>[t[2],t[1],t[0]]],east:[t=>[tt.eastCol-t[2],t[1],t[0]],t=>[-t[2],t[1],t[0]]]};function I3(t,e,o,n,r){let a=[];for(let i=0;i<o;i++){let s=t+i*e+(i===0?n:.02),c=t+(i+1)*e-(i===o-1?r:.02);a.push([s,c,t+(i+.5)*e])}return a}var E8=I3(tt.westCol,vd,Fh,Ie+Wl,Ie+Wl),z3=I3(tt.south,b8,R3,.32,Ie+Wl),mc=[tt.cx-32.35,tt.northCol-77],z8=Array.from({length:Fh-1},(t,e)=>tt.westCol+(e+1)*vd),q3=t=>(t[1]-t[0])/2-.2,jl=t=>(t[0]+t[1])/2;function A8(t,e){let o=jl(t),n=q3(t);return{u0:t[0],u1:t[1],bottom:e?0:Bl,head:r=>{let a=Math.abs(r-o);return a<n?T0+Math.sqrt(n*n-a*a):T0},step:.05}}function T8(t,e,o){return{u0:t-o,u1:t+o,bot:n=>e-Math.sqrt(Math.max(0,o*o-(n-t)*(n-t))),head:n=>e+Math.sqrt(Math.max(0,o*o-(n-t)*(n-t))),step:.04,mat:[ve.STONE,0,0]}}function L8(t,e,o,n){return{u0:t-e/2,u1:t+e/2,bottom:o,head:()=>n,step:.5,mat:[ve.STONE,0,0]}}function A3(t,e,o){let[n,r]=S8[e],a=k8(t,n,r),i=[];o.arches.forEach((l,d)=>i.push(A8(l,d===o.open)));let s=[];for(let l of o.bays||o.arches){let d=jl(l);o.oculi&&i.push(T8(d,6.85,.3)),s.push({c:d,y0:o.win[0],y1:o.win[1],w:1.05})}for(let l of o.extraWindows||[])s.push(l);for(let l of s)i.push(L8(l.c,l.w,l.y0,l.y1));for(let l of o.extraHoles||[])i.push(l);y8(a,{u0:o.u0,u1:o.u1,w0:-Ie,w1:Ie,top:o.top,holes:i,mat:[ve.BRICK,0,0],revealMat:[ve.BRICK,0,0],noEnds:o.noEnds,cuts:o.cuts,topStep:.25});let c=(l,d,u,p,f,v,m)=>{let g=n([l,d,u]),x=n([p,f,v]);Zn(t,g[0],g[1],g[2],x[0],x[1],x[2],m)},h=(l,d,u,p,f,v)=>gc(a,l,d,u,p,f,[v,0,0]);for(let l of o.arches){let d=jl(l),u=q3(l),p=28;for(let f of[Ie,-Ie]){let v=f>0?1:-1,m=f+v*.025;for(let g=0;g<p;g++){let x=Math.PI*g/p,y=Math.PI*(g+1)/p,w=(q,V)=>[d+Math.cos(q)*V,T0+Math.sin(q)*V],M=w(x,u),_=w(y,u),S=w(x,u+.26),R=w(y,u+.26);h([M[0],M[1],m],[_[0],_[1],m],[R[0],R[1],m],[S[0],S[1],m],[0,0,v],ve.STONE);let N=Math.cos((x+y)/2),G=Math.sin((x+y)/2);h([S[0],S[1],f],[R[0],R[1],f],[R[0],R[1],m],[S[0],S[1],m],[N,G,0],ve.STONE)}}}if(o.arches.forEach((l,d)=>{d!==o.open&&c(l[0]-.02,Bl,-Ie-.05,l[1]+.02,Bl+.09,Ie+.05,ve.STONE)}),c(o.u0,E3,-Ie,o.u1,E3+.18,Ie+.09,ve.STONE),c(o.u0,o.win[0]-.12,Ie-.01,o.u1,o.win[0],Ie+.06,ve.STONE),o.cornice)for(let[l,d,u]of o.cornice)c(l,u-.22,Ie-.01,d,u,Ie+.16,ve.STONE),c(l,u,Ie-.01,d,u+.16,Ie+.42,ve.STONE);for(let{c:l,y0:d,y1:u,w:p,door:f}of s){let v=p/2;if(h([l-v-.01,d,.06],[l+v+.01,d,.06],[l+v+.01,u,.06],[l-v-.01,u,.06],[0,0,1],f?ve.DARK:ve.PANE),f){c(l-v-.16,0,Ie-.01,l-v,u+.16,Ie+.07,ve.STONE),c(l+v,0,Ie-.01,l+v+.16,u+.16,Ie+.07,ve.STONE),c(l-v-.16,u,Ie-.01,l+v+.16,u+.2,Ie+.09,ve.STONE),c(l-v,0,.07,l+v,u-.02,.12,ve.SHUTTER),c(l-.012,0,.12,l+.012,u-.02,.14,ve.DARK);continue}for(let m of[-1,1]){let g=l+m*v;c(g+m*.02,d+.02,Ie+.02,g+m*(v+.025),u-.02,Ie+.06,ve.SHUTTER)}c(l-v-.09,u,Ie-.01,l+v+.09,u+.16,Ie+.05,ve.STONE),c(l-v-.09,d-.1,Ie-.01,l+v+.09,d,Ie+.09,ve.STONE),c(l-.015,d,.06,l+.015,u,.09,ve.SHUTTER),c(l-v,(d+u)/2-.015,.06,l+v,(d+u)/2+.015,.09,ve.SHUTTER)}if(o.oculi)for(let l of o.bays||o.arches){let d=jl(l);h([d-.31,6.54,0],[d+.31,6.54,0],[d+.31,7.16,0],[d-.31,7.16,0],[0,0,1],ve.DARK)}for(let l of o.cols){let d=Bl+.09,u=n([l,0,0]);Zn(t,u[0]-.24,d,u[2]-.24,u[0]+.24,d+.12,u[2]+.24,ve.MARBLE),t.lathe([[.23,d+.12,1],[.24,d+.17],[.2,d+.24],[.215,d+.28],[.17,d+.34,1],[.165,d+.6],[.155,T0-.5],[.15,T0-.38,1],[.175,T0-.34,1],[.17,T0-.3],[.2,T0-.22],[.27,T0-.15],[.29,T0-.12,1]],u[0],u[2],18,{mat:()=>[ve.MARBLE,0,0]}),Zn(t,u[0]-.29,T0-.12,u[2]-.29,u[0]+.29,T0+.01,u[2]+.29,ve.STONE)}o.walk&&o.walk(t)}function N8(t){let e=[-1,0,1].map(r=>{let a=tt.cx+r*1.7;return{u0:a-.6,u1:a+.6,bottom:11,head:i=>12.9+Math.sqrt(Math.max(0,.36-(i-a)*(i-a))),step:.04,mat:[ve.STONE,0,0]}});A3(t,"north",{u0:tt.westCol-Ie,u1:tt.eastCol+Ie,top:r=>r>So.x0+1e-6&&r<So.x1-1e-6?So.top:Rr,cuts:[So.x0,So.x0+1e-5,So.x1-1e-5,So.x1],arches:E8,open:O3,cols:z8,oculi:!0,win:[8,9.9],extraHoles:e,cornice:[[tt.westCol-Ie-3.3,So.x0,Rr],[So.x1,tt.eastCol+Ie+3.3,Rr],[So.x0-.2,So.x1+.2,So.top]],walk:r=>{Zn(r,Wo.x0,ls,tt.northCol+Ie,Wo.x1,ls+.2,tt.northBack,ve.PLASTER),Zn(r,Wo.x0,0,tt.northBack,Wo.x1,ls,tt.northBack+.3,ve.PLASTER);for(let a of[tt.cx-7.2,tt.cx,tt.cx+7.2])gc(r,[a-.8,0,tt.northBack-.01],[a+.8,0,tt.northBack-.01],[a+.8,2.9,tt.northBack-.01],[a-.8,2.9,tt.northBack-.01],[0,0,-1],[ve.DARK,0,0]),Zn(r,a-.98,0,tt.northBack-.06,a+.98,3.12,tt.northBack,ve.STONE),gc(r,[a-.8,0,tt.northBack-.07],[a+.8,0,tt.northBack-.07],[a+.8,2.9,tt.northBack-.07],[a-.8,2.9,tt.northBack-.07],[0,0,-1],[ve.DARK,0,0])}}),gc(t,[So.x0,11,tt.northCol+.2],[So.x1,11,tt.northCol+.2],[So.x1,13.6,tt.northCol+.2],[So.x0,13.6,tt.northCol+.2],[0,0,-1],[ve.DARK,0,0]),Zn(t,So.x0+.3,10.88,tt.northCol-Ie-.06,So.x1-.3,11,tt.northCol-Ie+.1,ve.STONE),Zn(t,tt.westBack,ls+.2,tt.northBack,tt.eastBack,Rr,tt.northBack+3.4,ve.BRICK),Zn(t,tt.westBack,is,tt.northCol-Ie,tt.westCol-Ie,Rr,tt.northCol+Ie,ve.BRICK),Zn(t,tt.eastCol+Ie,is,tt.northCol-Ie,tt.eastBack,Rr,tt.northCol+Ie,ve.BRICK),Zn(t,tt.westBack,ls+.2,tt.northCol+Ie+.12,tt.eastBack,Rr,tt.northBack,ve.BRICK),Hl(t,[tt.westBack-.5,Rr+.16,tt.northCol-Ie-.42],[So.x0-tt.westBack+.5,0,0],[0,2.6,4.4],ve.ROOF),Hl(t,[So.x1,Rr+.16,tt.northCol-Ie-.42],[tt.eastBack+.5-So.x1,0,0],[0,2.6,4.4],ve.ROOF),Hl(t,[So.x0-.3,So.top+.16,tt.northCol-Ie-.42],[So.x1-So.x0+.6,0,0],[0,1.4,3],ve.ROOF),T3(t,[So.x0-.3,So.top+.16,tt.northCol-Ie-.42],[So.x0-.3,So.top+1.56,tt.northCol-Ie+2.58],[So.x0-.3,So.top+.16,tt.northCol-Ie+2.58],[-1,0,0],ve.BRICK),T3(t,[So.x1+.3,So.top+.16,tt.northCol-Ie-.42],[So.x1+.3,So.top+1.56,tt.northCol-Ie+2.58],[So.x1+.3,So.top+.16,tt.northCol-Ie+2.58],[1,0,0],ve.BRICK),Zn(t,So.x0,Rr,tt.northCol+Ie,So.x1,So.top,tt.northCol+2.6,ve.BRICK);for(let[r,a]of[[tt.cx-9.8,tt.northBack+.6],[tt.cx+9.4,tt.northBack+.4],[tt.cx-4.6,tt.northBack+1]])Zn(t,r-.4,12.5,a-.4,r+.4,15.4,a+.4,ve.BRICK),Zn(t,r-.52,15.4,a-.52,r+.52,15.62,a+.52,ve.STONE);let o=(r,a,i)=>{let s=r==="west"?-1:1,c=[];z3.forEach((d,u)=>{let p=jl(d);u===1?c.push({c:p,y0:0,y1:2.9,w:1.4,door:!0}):c.push({c:p,y0:1,y1:2.75,w:1.05}),c.push({c:p,y0:3.85,y1:5.45,w:1.05})}),A3(t,r,{u0:tt.south,u1:tt.northCol-Ie,top:()=>is,arches:[],bays:z3,cols:[],win:[7.45,8.85],extraWindows:c,noEnds:!0,cornice:[[tt.south,tt.northCol-Ie,is]]}),Zn(t,a,0,tt.south,i+s*(Ie+.12),is,tt.northBack+.3,ve.BRICK);let h=i-s*Ie;Zn(t,h,0,tt.south,h-s*.06,.55,tt.northCol-Ie,ve.STONE);let l=i-s*(Ie+.42);Hl(t,[l,is+.16,tt.south],[0,0,tt.northCol-Ie-tt.south],[a-l+s*.4,1.9,0],ve.ROOF)};o("west",tt.westBack,tt.westCol),o("east",tt.eastBack,tt.eastCol);let n=cs.x1+.7;Zn(t,13.65,7.4,tt.south-.02,n,7.62,tt.south+.14,ve.STONE),Zn(t,13.65,10.4,tt.south-.02,n,10.6,tt.south+.38,ve.STONE),Hl(t,[13.65,10.6,tt.south+.38],[n-13.65,0,0],[0,2.2,-5],ve.ROOF)}function T3(t,e,o,n,r,a){let i=[a,0,0];t.tri(t.vert(e,r,i),t.vert(o,r,i),t.vert(n,r,i))}function Hl(t,e,o,n,r){let a=Ih([o[1]*n[2]-o[2]*n[1],o[2]*n[0]-o[0]*n[2],o[0]*n[1]-o[1]*n[0]]),i=a[1]<0?a.map(h=>-h):a,s=(h,l)=>[e[0]+o[0]*h+n[0]*l,e[1]+o[1]*h+n[1]*l,e[2]+o[2]*h+n[2]*l];gc(t,s(0,0),s(1,0),s(1,1),s(0,1),i,[r,0,0]);let c=.08;gc(t,s(0,0),s(1,0),[s(1,0)[0],s(1,0)[1]-c,s(1,0)[2]],[s(0,0)[0],s(0,0)[1]-c,s(0,0)[2]],Ih([-n[0],0,-n[2]]),[r,0,0])}function R8(t){let e=tt.westBack,o=tt.eastBack,n=tt.south,r=tt.northBack,a=36,i=22,s=[];for(let c=0;c<=a;c++){s.push([]);for(let h=0;h<=i;h++){let l=[e+(o-e)*c/a,0,n+(r-n)*h/i];s[c].push(t.vert(l,[0,1,0],[ve.GROUND,0,0]))}}for(let c=0;c<a;c++)for(let h=0;h<i;h++)t.tri(s[c][h],s[c+1][h],s[c+1][h+1]),t.tri(s[c][h],s[c+1][h+1],s[c][h+1])}var Ul=.46,ri=.58,oi=[[-.5,0],[-.52,.45],[-.46,.78],[-.3,.95],[0,1],[.3,.95],[.46,.78],[.52,.45],[.5,0]];function O8(t,e,o){let n=ni+o,r=(t>0?Wo.x1-tt.cx:tt.cx-Wo.x0)-ai-o,a=ni+o,i=(e>0?Wo.z1-tt.cz:tt.cz-Wo.z0)-ai-o,s=Ph+o,c=Math.sqrt(s*s-n*n),h=Math.sqrt(s*s-a*a),l=[[n,c],[n,i],[r,i],[r,a],[h,a]],d=Math.atan2(a,h),u=Math.atan2(c,n);for(let p=1;p<10;p++){let f=d+(u-d)*p/10;l.push([Math.cos(f)*s,Math.sin(f)*s])}return l.map(([p,f])=>[tt.cx+t*p,tt.cz+e*f])}function C8(t,e,o){let n=o[0]-e[0],r=o[1]-e[1],a=Math.hypot(n,r),i=n/a,s=r/a,c=-s,h=i,l=Ul*.5,d=-l,u=a+l,p=[],f=Math.max(1,Math.ceil((u-d)/1));for(let v=0;v<=f;v++){let m=d+(u-d)*v/f,g=[];for(let x=0;x<oi.length;x++){let[y,w]=oi[x],M=Math.min(oi.length-2,x),_=oi[Math.max(0,x-1)],S=oi[Math.min(oi.length-1,x+1)],R=(S[0]-_[0])*Ul,G=(S[1]-_[1])*ri,q=-R,V=Math.hypot(G,q)||1,D=[e[0]+i*m+c*y*Ul,w*ri,e[1]+s*m+h*y*Ul],B=[c*(-G/V),-q/V,h*(-G/V)];g.push(t.vert(D,B[1]<-.2?[c*Math.sign(y),.3,h*Math.sign(y)]:B,[ve.HEDGE,0,0]))}p.push(g)}for(let v=0;v<f;v++)for(let m=0;m<oi.length-1;m++)t.tri(p[v][m],p[v+1][m],p[v+1][m+1]),t.tri(p[v][m],p[v+1][m+1],p[v][m+1]);for(let[v,m]of[[0,-1],[f,1]]){let g=p[v],x=t.vert([e[0]+i*(v?u:d),ri*.5,e[1]+s*(v?u:d)],[i*m,0,s*m],[ve.HEDGE,0,0]);for(let y=0;y<g.length-1;y++)t.tri(x,g[y],g[y+1])}}function P8(t){for(let e of[-1,1])for(let o of[-1,1]){let n=O8(e,o,.3);for(let r=0;r<n.length;r++)C8(t,n[r],n[(r+1)%n.length])}}function $8(t){let e=tt.cx,o=tt.cz,n=()=>[ve.STONE,0,0];t.lathe([[1.45,0,1],[1.45,.14,1],[1.12,.14,1],[1.12,.3,1],[0,.3]],e,o,8,{mat:n}),t.lathe([[.76,.3,1],[.8,.38,1],[.74,.44],[.76,.7],[.82,.9],[.8,1.02,1],[.88,1.06,1],[.88,1.18,1],[.6,1.18,1],[.6,.98]],e,o,24,{mat:n}),t.lathe([[.6,.98,1],[0,.98]],e,o,16,{mat:()=>[ve.DARK,0,0]});let r={mat:()=>[ve.IRON,0,0]};t.tube([[e-.72,1.1,o],[e-.72,1.9,o],[e-.7,2.3,o]],()=>.035,8,6,r),t.tube([[e+.72,1.1,o],[e+.72,1.9,o],[e+.7,2.3,o]],()=>.035,8,6,r);let a=[];for(let i=0;i<=10;i++){let s=Math.PI*i/10;a.push([e-Math.cos(s)*.7,2.3+Math.sin(s)*.45,o])}t.tube(a,()=>.03,20,6,r),t.tube([[e-.45,2.25,o],[e,2.38,o],[e+.45,2.25,o]],()=>.02,8,5,r),t.ellipsoid([e,2.32,o],[.03,.13,.13],6,10,r);for(let i of[-1,1]){let s=[];for(let c=0;c<=12;c++){let h=c/12*Math.PI*1.6,l=.16*(1-c/16);s.push([e+i*(.72-.18+Math.cos(h)*l*i*-1+0),1.95+Math.sin(h)*l,o])}t.tube(s,()=>.016,16,5,r)}}function I8(t){for(let[e,o]of md)t.lathe([[.26,0,1],[.3,.06],[.36,.42],[.38,.5,1],[.44,.52,1],[.44,.64,1],[.38,.66,1],[.37,.6]],e,o,20,{mat:()=>[ve.POT,0,0]}),t.lathe([[.37,.6,1],[0,.6]],e,o,12,{mat:()=>[ve.SOIL,0,0]}),t.tube([[e,.6,o],[e+.02,1,o-.01],[e-.01,1.45,o+.02]],n=>.045-n*.02,6,6,{mat:()=>[ve.BARK,0,0]})}function q8(t){let[e,,o]=ss.c,n=F3(7),r=[[-1.8,.4,3.6],[1.6,-.9,3.9],[.4,1.9,3.4],[-.6,-1.7,4.2],[2.1,1.2,3.2]];for(let[a,i,s]of r){let c=[[e+a*.05,0,o+i*.05],[e+a*.25,s*.35,o+i*.25],[e+a*.6,s*.7,o+i*.6],[e+a,s,o+i],[e+a*1.35+(n()-.5),s+1.4,o+i*1.35+(n()-.5)]];t.tube(c,h=>.2*(1-h*.75),14,9,{mat:()=>[ve.BARK,0,0]});for(let h=0;h<2;h++){let l=.55+h*.2,d=[e+a*l,s*l,o+i*l],u=n()*Math.PI*2;t.tube([d,[d[0]+Math.cos(u)*1.3,d[1]+.9,d[2]+Math.sin(u)*1.3],[d[0]+Math.cos(u)*2.3,d[1]+1.4+n(),d[2]+Math.sin(u)*2.3]],p=>.08*(1-p*.7),8,6,{mat:()=>[ve.BARK,0,0]})}}for(let a of ua.filter(i=>i.spindle))t.tube([[a.c[0],0,a.c[2]],[a.c[0],1.4,a.c[2]]],()=>.12,3,7,{mat:()=>[ve.BARK,0,0]})}function D8(t){let e=()=>[ve.FARBRICK,0,0],o=()=>[ve.LEAD,0,0],n=(a,i,s,c,h,l)=>{t.lathe([[s+.3,20,1],[s+.3,c-1.2,1],[s+.8,c-.9,1],[s+.8,c,1],[s,c,1]],a,i,28,{mat:e});let d=[];for(let p=0;p<=12;p++){let f=p/12*Math.PI/2,v=Math.cos(f)*s,m=Math.sin(f)*h;l&&(v*=1-.18*Math.sin(f*2)),d.push([Math.max(v,s*.12),c+m])}t.lathe(d,a,i,28,{mat:o});let u=c+h;t.lathe([[s*.13,u-.2,1],[s*.13,u+3,1],[s*.18,u+3.2,1],[s*.02,u+6.4]],a,i,10,{mat:o})};Zn(t,14,0,104,52,26,150,ve.FARBRICK),t.lathe([[3,26],[.1,32]],33,108,4,{mat:e}),n(26,124,7.2,33,9.5,!0),n(40.5,116,6,31,8,!0),n(16.5,117,5.5,30,7.2,!0),t.lathe([[6.4,20,1],[6.4,34,1],[6.9,34.4,1],[6,34.4,1],[.6,46.5,1],[.15,50]],33,132,24,{mat:o});let r=(a,i,s)=>{Zn(t,a-1.8,0,i-1.8,a+1.8,s,i+1.8,ve.FARBRICK),t.lathe([[1.9,s,1],[1.6,s+3.5,1],[1.2,s+3.5,1],[1.2,s+6,1],[.9,s+6.2,1],[.05,s+13]],a,i,8,{mat:e})};r(20.5,109,36),r(46.5,112,38)}function F8(t){let o=[tt.cx,0,tt.cz],n=24,r=10,a=[];for(let i=0;i<=n;i++){a.push([]);let s=-Math.PI*.62+Math.PI*1.24*i/n;for(let c=0;c<=r;c++){let h=Math.PI/2*(c/r)-.05,l=[Math.sin(s)*Math.cos(h),Math.sin(h),Math.cos(s)*Math.cos(h)],d=[o[0]+l[0]*420,o[1]+l[1]*420,o[2]+l[2]*420];a[i].push(t.vert(d,[-l[0],-l[1],-l[2]],[ve.SKY,0,0]))}}for(let i=0;i<n;i++)for(let s=0;s<r;s++)t.tri(a[i][s],a[i+1][s],a[i+1][s+1]),t.tri(a[i][s],a[i+1][s+1],a[i][s+1])}function G8(){let t=[],e=[],o=[],n=[],r=x8.createBuilder(t,e,o,n);return R8(r),N8(r),P8(r),$8(r),I8(r),q8(r),r.save(),r.translate(mc[0],0,mc[1]),D8(r),r.restore(),F8(r),{position:t,normal:e,elements:o,attr:n}}var D3=[[[13.65,0,cs.z0-.7],[cs.x1+.7,10.6,tt.south]],[[tt.westBack,ls,tt.northCol-Ie],[tt.eastBack,Rr,tt.northBack+3.4]],[[So.x0,Rr,tt.northCol-Ie],[So.x1,So.top,tt.northCol+2.6]],[[tt.westBack,0,tt.south],[tt.westCol+Ie,is,tt.northBack+.3]],[[tt.eastCol-Ie,0,tt.south],[tt.eastBack,is,tt.northBack+.3]],[[14+mc[0],0,104+mc[1]],[52+mc[0],26,150+mc[1]]]];function H8(t,e,o,n){let r=.001,a=1e9;for(let i=0;i<3;i++){if(Math.abs(e[i])<1e-9){if(t[i]<o[i]||t[i]>n[i])return!1;continue}let s=(o[i]-t[i])/e[i],c=(n[i]-t[i])/e[i];if(s>c&&([s,c]=[c,s]),r=Math.max(r,s),a=Math.min(a,c),r>a)return!1}return!0}function Ch(t,e,o,n){let r=[(t[0]-o[0])/n[0],(t[1]-o[1])/n[1],(t[2]-o[2])/n[2]],a=[e[0]/n[0],e[1]/n[1],e[2]/n[2]],i=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],s=r[0]*a[0]+r[1]*a[1]+r[2]*a[2],c=r[0]*r[0]+r[1]*r[1]+r[2]*r[2]-1,h=s*s-i*c;if(h<=0)return 0;let l=Math.sqrt(h),d=Math.max(0,(-s-l)/i),u=(-s+l)/i;return Math.max(0,u-d)}function pd(t){for(let[e,o]of D3)if(H8(t,ha,e,o))return 0;return 1}function F3(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let o=e;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function U8(){let t=[],e=[],o=[],n=[],r=[],a=[],i=[],s=F3(21),c=(f,v,m,g,x,y,w)=>{let M=t.length/3;for(let[_,S]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.push(...f),e.push(_,S),o.push(v,m,g),n.push(...x),r.push(...y),a.push(...w);i.push(M,M+1,M+2,M,M+2,M+3)},h=(f,v)=>{let m=1;for(let g of ua){if(g===v||!g.shadow)continue;let x=Ch(f,ha,g.c,g.r);x>0&&(m*=Math.exp(-x*.9))}return m},l=ua.map(f=>({...f,pts:null}));for(let f of l)for(let v=0;v<f.n;v++){let m;do m=[s()*2-1,s()*2-1,s()*2-1];while(m[0]*m[0]+m[1]*m[1]+m[2]*m[2]>1);let g=Math.hypot(m[0],m[1],m[2])||1,x=Math.pow(s(),.35)*.98,y=[m[0]/g*x,m[1]/g*x,m[2]/g*x];if(f.spindle){let D=y[1],B=Math.sqrt(Math.max(.02,1-D*D))*(D>0?1-D*.55:1+D*.25),dt=Math.hypot(y[0],y[2])||1,Gt=B*Math.min(1,dt*1.4);y=[y[0]/dt*Gt,D,y[2]/dt*Gt]}f.magnolia&&y[1]<-.55&&(y[1]=-.55+(y[1]+.55)*.35);let w=[f.c[0]+y[0]*f.r[0],f.c[1]+y[1]*f.r[1],f.c[2]+y[2]*f.r[2]],M,_;if(f.magnolia){let D=0;for(let Gt of P3)D=Math.max(D,Ch(w,ha,Gt.c,Gt.r));M=Math.exp(-D*1.1);let B=1;for(let Gt of ua)if(!Gt.magnolia&&Gt.shadow){let Nt=Ch(w,ha,Gt.c,Gt.r);Nt>0&&(B*=Math.exp(-Nt*.9))}M*=pd(w)*B;let dt=M8(w,ss.c);_=Ih([dt[0]/ss.r[0]+y[0]*.5,dt[1]/ss.r[1]+y[1]*.5,dt[2]/ss.r[2]+y[2]*.5]),x=Math.min(1,Math.hypot(dt[0]/ss.r[0],dt[1]/ss.r[1],dt[2]/ss.r[2])*.6+x*.4)}else{let D=Ch(w,ha,f.c,f.r);M=Math.exp(-D*(f.spindle?2.2:1.25)),M*=pd(w)*h(w,ua[l.indexOf(f)]),_=Ih([y[0]/f.r[0],y[1]/f.r[1],y[2]/f.r[2]])}let S=Math.max(0,_[0]*ha[0]+_[1]*ha[1]+_[2]*ha[2]),R=.25+.75*Math.pow(x,1.5)*(.65+.35*(_[1]*.5+.5)),N=f.size[0]+(f.size[1]-f.size[0])*s(),G=.85+s()*.3,q=f.leaf.map(D=>D*G),V=f.cell;f.cell===3&&s()<.35&&(V=2),c(w,N,V,s()*Math.PI*2,[M,R,.35+.65*S],q,f.bloom)}for(let[f,v]of $3){let m=s()<.5;for(let g=0;g<3;g++){let x=[f+(s()-.5)*.7,.28+s()*.22,v+(s()-.5)*.5],y=pd(x)*h(x,null);c(x,.32+s()*.12,s()<.7?3:2,s()*6.28,[y,.6+s()*.3,.8],[.75,.9,.6],m?[1,.55,.75]:[.85,.8,1.15])}}let d=i.length/6,u=Array.from({length:d},(f,v)=>v);for(let f=d-1;f>0;f--){let v=Math.floor(s()*(f+1));[u[f],u[v]]=[u[v],u[f]]}let p=[];for(let f of u)for(let v=0;v<6;v++)p.push(i[f*6+v]);return{center:t,corner:e,par:o,light:n,tint:r,bloom:a,elements:p}}var Ne=t=>t.toFixed(4),Vl=t=>`vec3(${Ne(t[0])}, ${Ne(t[1])}, ${Ne(t[2])})`,G3=`
const vec3 SUN = ${Vl(ha)};
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
`,B8=D3.map(([t,e])=>`if (hitBox(ro, SUN, ${Vl(t)}, ${Vl(e)})) return 0.0;`).join(`
	`),j8=ua.filter(t=>t.shadow).map(t=>`tr *= crownShade(ro, ${Vl(t.c)}, ${Vl(t.r)}, ${t.spindle?"1.8":"1.0"});`).join(`
	`),W8=(t,e,o,n,r,a,i,s,c)=>`
	{
		float t = (${Ne(e)} - ro.${t}) / SUN.${t};
		if (t > 0.0) {
			vec3 q = ro + SUN * t;
			float u = q.${t==="z"?"x":"z"};
			if (q.y < ${Ne(ls)} && u > ${Ne(o-Ie)} && u < ${Ne(o+n*r+Ie)}) {
				float k = floor((u - ${Ne(o)}) / ${Ne(n)});
				float a = ${Ne(o)} + k * ${Ne(n)} + (k < 0.5 ? ${Ne(a)} : 0.02);
				float b = ${Ne(o)} + (k + 1.0) * ${Ne(n)} - (k > ${Ne(r-1.5)} ? ${Ne(i)} : 0.02);
				float c = 0.5 * (a + b), r = 0.5 * (b - a) - 0.2;
				float d = abs(u - c);
				float sill = abs(k - ${Ne(s)}) < 0.5 ? 0.0 : ${Ne(Bl+.09)};
				bool hole = (q.y > sill && q.y < ${Ne(T0)} && u > a && u < b && d < 0.5 * (b - a) - 0.17)
					|| (q.y >= ${Ne(T0)} && d * d + (q.y - ${Ne(T0)}) * (q.y - ${Ne(T0)}) < r * r);
				if (!hole && ${c}) return 0.0;
			}
		}
	}`,qh=ni+.3,Dh=ni+.3,Xl=Ph+.3,L3=Wo.x1-tt.cx-ai-.3,V8=Wo.z1-tt.cz-ai-.3,X8=tt.cz-Wo.z0-ai-.3,Y8=Math.sqrt(Xl*Xl-qh*qh),K8=Math.sqrt(Xl*Xl-Dh*Dh),Q8=[[tt.cx,tt.cz,.86,1.18],[tt.cx,tt.cz,1.25,.3],...md.map(([t,e])=>[t,e,.42,.65])].map(([t,e,o,n])=>`if (hitCyl(ro, vec2(${Ne(t)}, ${Ne(e)}), ${Ne(o)}, ${Ne(n)})) return 0.0;`).join(`
	`),Z8=`
float segDist(vec2 p, vec2 a, vec2 b) {
	vec2 pa = p - a, ba = b - a;
	float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
	return length(pa - ba * h);
}

// distance to the nearest hedge line
float hedgeDist(vec2 xz) {
	vec2 q = abs(xz - vec2(${Ne(tt.cx)}, ${Ne(tt.cz)}));
	float b1 = xz.y > ${Ne(tt.cz)} ? ${Ne(V8)} : ${Ne(X8)};
	vec2 A = vec2(${Ne(qh)}, ${Ne(Y8)}), Bp = vec2(${Ne(qh)}, b1), C = vec2(${Ne(L3)}, b1);
	vec2 D = vec2(${Ne(L3)}, ${Ne(Dh)}), E = vec2(${Ne(K8)}, ${Ne(Dh)});
	float d = min(min(segDist(q, A, Bp), segDist(q, Bp, C)), min(segDist(q, C, D), segDist(q, D, E)));
	float ang = atan(q.y, q.x);
	if (ang > atan(E.y, E.x) && ang < atan(A.y, A.x)) d = min(d, abs(length(q) - ${Ne(Xl)}));
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
	${W8("z",tt.northCol,tt.westCol,vd,Fh,Ie+Wl,Ie+Wl,O3,"ro.z > "+Ne(tt.northCol-Ie))}
	// on lighter settings only the buildings cast shadows
	if (gardenDetail < 0.5) return 1.0;
	${Q8}
	if (ro.y < ${Ne(ri)} && ro.x > ${Ne(Wo.x0)} && ro.x < ${Ne(Wo.x1)}) {
		for (int i = 1; i <= 4; i++) {
			float t = float(i) / 4.0 * (${Ne(ri)} - ro.y) / SUN.y;
			vec3 q = ro + SUN * t;
			float w = ${Ne(Ul*.5)} * sqrt(max(0.0, 1.0 - pow(q.y / ${Ne(ri)}, 4.0)));
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

	if (kind == ${ve.SKY}.0) {
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

	if (kind == ${ve.GROUND}.0) {
		bool yard = P.x > ${Ne(Wo.x0)} && P.x < ${Ne(Wo.x1)} && P.z < ${Ne(Wo.z1)};
		if (!yard) {
			// stone slabs under the arcades
			vec2 g = P.xz / 0.62;
			vec2 fg = fract(g);
			float h = hash(floor(g));
			base = mix(vec3(0.66, 0.60, 0.52), vec3(0.76, 0.70, 0.62), h);
			base *= 1.0 - 0.25 * (step(fg.x, 0.03) + step(fg.y, 0.03)) * (1.0 - lod);
			spec = 0.15;
		} else {
			float ex = min(P.x - ${Ne(Wo.x0)}, ${Ne(Wo.x1)} - P.x);
			float ez = min(P.z - ${Ne(Wo.z0)}, ${Ne(Wo.z1)} - P.z);
			float edge = min(ex, ez);
			float dx = abs(P.x - ${Ne(tt.cx)}), dz = abs(P.z - ${Ne(tt.cz)});
			float rc = length(vec2(dx, dz));
			if (edge < ${Ne(ai)}) {
				// brick path laid in rows, with a stone kerb
				vec2 q = ex < ez ? P.zx : P.xz;
				base = brick(q * vec2(1.0, 2.6), 0.4) * 0.9;
				if (abs(edge - ${Ne(ai)}) < 0.08) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (rc < ${Ne(Ph)}) {
				// brick in rings round the wellhead
				float ang = atan(P.z - ${Ne(tt.cz)}, P.x - ${Ne(tt.cx)});
				vec2 q = vec2(ang * rc, rc);
				base = brick(q * vec2(1.0, 2.6), 0.5) * 0.92;
				if (abs(rc - ${Ne(Ph)}) < 0.1) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (dx < ${Ne(ni)} || dz < ${Ne(ni)}) {
				// pale gravel
				float g = noise(P.xz * 40.0) * 0.6 + noise(P.xz * 9.0) * 0.4;
				base = mix(vec3(0.66, 0.58, 0.46), vec3(0.86, 0.79, 0.66), mix(g, 0.5, lod));
				base *= 0.94 + 0.12 * noise(P.xz * 1.3);
				float e = min(${Ne(ni)} - min(dx, dz), 1.0);
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
			ao *= 0.6 + 0.4 * smoothstep(0.85, 1.6, length(P.xz - vec2(${Ne(tt.cx)}, ${Ne(tt.cz)})));
		}
	} else if (kind == ${ve.BRICK}.0) {
		float pink = smoothstep(0.4, 0.6, noise(wq * 0.05 + 7.0));
		base = mix(brick(wq, 0.25 * pink), vec3(0.68, 0.46, 0.33), lod * 0.6);
		base *= 1.0 - 0.18 * smoothstep(0.0, 1.5, 1.6 - P.y) * noise(wq * 1.5);
		ao *= 0.78 + 0.22 * smoothstep(0.0, 1.2, P.y);
	} else if (kind == ${ve.STONE}.0) {
		float n = noise(wq * 3.0) * 0.5 + noise(wq * 0.7) * 0.5;
		base = mix(vec3(0.74, 0.70, 0.62), vec3(0.86, 0.83, 0.76), n);
		spec = 0.1;
	} else if (kind == ${ve.MARBLE}.0) {
		// red Verona marble
		float n = noise3(P * vec3(5.0, 1.5, 5.0)) * 0.6 + noise3(P * 14.0) * 0.4;
		base = mix(vec3(0.56, 0.32, 0.25), vec3(0.68, 0.42, 0.33), n);
		base = mix(base, vec3(0.80, 0.66, 0.56), smoothstep(0.66, 0.74, noise3(P * 9.0 + 3.0)) * 0.35);
		spec = 0.35;
	} else if (kind == ${ve.HEDGE}.0) {
		float n = noise3(P * 9.0) * 0.55 + noise3(P * 2.5) * 0.45;
		base = mix(vec3(0.05, 0.16, 0.04), vec3(0.22, 0.38, 0.10), n);
		ao *= 0.55 + 0.45 * smoothstep(0.0, ${Ne(ri)}, P.y) * (0.6 + 0.4 * n);
		N = normalize(N + vec3(noise3(P * 13.0) - 0.5, 0.0, noise3(P * 13.0 + 5.0) - 0.5) * 0.9);
	} else if (kind == ${ve.POT}.0) {
		base = mix(vec3(0.66, 0.34, 0.20), vec3(0.75, 0.44, 0.28), noise(wq * 6.0));
	} else if (kind == ${ve.SOIL}.0) {
		base = vec3(0.20, 0.14, 0.09);
	} else if (kind == ${ve.ROOF}.0) {
		// rows of curved clay tiles
		float along = abs(N.x) > abs(N.z) ? P.z : P.x;
		float rib = abs(fract(along / 0.24) - 0.5) * 2.0;
		float h = hash(vec2(floor(along / 0.24), floor(P.y / 0.42)));
		base = mix(vec3(0.58, 0.30, 0.20), vec3(0.72, 0.44, 0.30), h);
		base = mix(base, vec3(0.45, 0.42, 0.36), smoothstep(0.55, 0.85, noise(P.xz * 0.6)) * 0.4);
		base *= mix(0.62 + 0.38 * (1.0 - rib * rib), 0.85, lod);
	} else if (kind == ${ve.SHUTTER}.0) {
		float slat = fract(P.y / 0.07);
		base = vec3(0.17, 0.30, 0.20) * (0.75 + 0.25 * smoothstep(0.1, 0.5, slat));
	} else if (kind == ${ve.PANE}.0) {
		vec3 R = reflect(-V, N);
		base = vec3(0.03, 0.035, 0.04);
		vec3 refl = skyColor(normalize(vec3(R.x, abs(R.y), R.z))) * 0.25;
		gl_FragColor = vec4(toNight(tonemap(base + refl * (0.4 + 0.6 * pow(1.0 - abs(dot(N, V)), 3.0))), 0.45), 1.0);
		return;
	} else if (kind == ${ve.PLASTER}.0) {
		base = mix(vec3(0.82, 0.76, 0.64), vec3(0.88, 0.83, 0.72), noise(wq * 1.3));
		// a darker dado on the back walls
		if (abs(N.y) < 0.5 && P.y < 1.1) base *= 0.82;
	} else if (kind == ${ve.BARK}.0) {
		base = mix(vec3(0.30, 0.27, 0.24), vec3(0.45, 0.42, 0.38), noise3(P * vec3(8.0, 2.0, 8.0)));
	} else if (kind == ${ve.IRON}.0) {
		base = vec3(0.07, 0.07, 0.07);
		spec = 0.4;
	} else if (kind == ${ve.LEAD}.0) {
		base = mix(vec3(0.30, 0.33, 0.35), vec3(0.40, 0.43, 0.45), noise(P.xy * 0.5));
		// ribs on the domes
		float a = atan(P.z - floor(P.z / 50.0) * 50.0, 1.0);
		base *= 0.9 + 0.1 * step(0.5, fract(a * 6.0));
		far = 1.0;
	} else if (kind == ${ve.FARBRICK}.0) {
		base = mix(vec3(0.66, 0.46, 0.34), vec3(0.74, 0.54, 0.40), noise(P.xy * 0.3));
		// a row of small arches under the eaves and some dark windows
		far = 1.0;
	} else if (kind == ${ve.DARK}.0) {
		base = vec3(0.025, 0.022, 0.02);
	}

	// ---------- light ----------

	// in the arcade walks the sky is mostly hidden
	bool walk = (P.x < ${Ne(tt.westCol)} || P.x > ${Ne(tt.eastCol)} || P.z > ${Ne(tt.northCol)}) && P.y < ${Ne(ls+.05)} && P.z > ${Ne(tt.south-.1)} && P.z < ${Ne(tt.northBack+.5)};
	float skyVis = 0.55 + 0.45 * N.y;
	if (walk) {
		float depth = P.z > ${Ne(tt.northCol)} ? P.z - ${Ne(tt.northCol)} : (P.x < ${Ne(tt.westCol)} ? ${Ne(tt.westCol)} - P.x : P.x - ${Ne(tt.eastCol)});
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
}`;function nk(t,e,o){let n=t.texture({data:[[o]],min:"linear",mag:"linear"});return fetch(e).then(r=>{if(!r.ok)throw new Error("Could not load "+e);return r.blob()}).then(r=>createImageBitmap(r,{premultiplyAlpha:"none"})).then(r=>n({data:r,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(r=>console.error(r)),n}gd.exports=t=>{let e=G8(),o=U8(),n=nk(t,"res/garden/foliage.webp",[0,0,0,0]),r=Date.now(),a=()=>dd.motion?window.__streetClock!==void 0?window.__streetClock:(Date.now()-r)/1e3:20,i=t({frag:J8,vert:tk,attributes:{position:e.position,normal:e.normal,attr:e.attr},elements:new Uint32Array(e.elements),uniforms:{time:a,gardenDetail:()=>dd.gardenDetail}}),s=t({frag:ok,vert:ek,attributes:{center:o.center,corner:o.corner,par:o.par,light:o.light,tint:o.tint,bloom:o.bloom},elements:new Uint32Array(o.elements),uniforms:{leaves:n,time:a},cull:{enable:!1},count:()=>Math.floor(o.elements.length*dd.leafShare/6)*6});return function(){i(),s()}};gd.exports.layout={G:tt,YARD:Wo,SUN:ha}});var V3=Et((_A,W3)=>{"use strict";var rk=i0().GLSL,ak=Fs(),{C:j3}=M0(),L0=j3.x1+.35,wd=j3.zc,xd=[L0-7.3,2,wd],U3=5.2*Math.PI/180,B3=2100,sk=725,ik=1288,ck=1450,lk=2576,Ca=wd-3.2,Uh=wd+3.3,yd=L0+5,bd=L0+11.7,xc=3.9,Yl=L0+22.7,Gh=40;function fk(){let t=[],e=[],o=[],n=[],r=ak.createBuilder(t,e,o,n),a=(l,d,u,p,f,v)=>{let m=[];for(let g=0;g<=f;g++){m.push([]);for(let x=0;x<=v;x++){let y=[0,1,2].map(w=>l[w]+d[w]*g/f+u[w]*x/v);m[g].push(r.vert(y,p,[0,0,0]))}}for(let g=0;g<f;g++)for(let x=0;x<v;x++)r.tri(m[g][x],m[g+1][x],m[g+1][x+1]),r.tri(m[g][x],m[g+1][x+1],m[g][x+1])},i=Uh-Ca,s=.7;a([L0-s,0,Ca],[yd-L0+s,0,0],[0,0,i],[0,1,0],6,4);let c=bd-yd,h=Math.hypot(c,xc);return a([yd,0,Ca],[c,xc,0],[0,0,i],[-xc/h,c/h,0],6,4),a([bd,xc,Ca],[Yl-bd,0,0],[0,0,i],[0,1,0],6,4),a([L0-s,0,Ca],[Yl-L0+s,0,0],[0,Gh,0],[0,0,1],12,12),a([L0-s,0,Uh],[Yl-L0+s,0,0],[0,Gh,0],[0,0,-1],12,12),a([Yl,0,Ca],[0,Gh,0],[0,0,i],[-1,0,0],8,4),a([L0-s,Gh,Ca],[Yl-L0+s,0,0],[0,0,i],[0,-1,0],6,4),{position:t,normal:e,elements:o,attr:n}}var B0=t=>t.toFixed(5),Hh=[[L0+3.4,3.7,Ca+.01,1],[L0+8.6,4.1,Uh-.01,-1],[L0+14.8,xc+3.3,Ca+.01,1],[L0+19.6,xc+3.6,Uh-.01,-1]],hk=`
precision highp float;
${rk}
uniform sampler2D photo;
uniform float time;
varying vec3 v_pos;
varying vec3 v_normal;
const int NLAMP = ${Hh.length};
vec4 LAMP[NLAMP];

void main() {
	${Hh.map((t,e)=>`LAMP[${e}] = vec4(${B0(t[0])}, ${B0(t[1])}, ${B0(t[2])}, ${B0(t[3])});`).join(`
	`)}
	vec3 d = v_pos - vec3(${B0(xd[0])}, ${B0(xd[1])}, ${B0(xd[2])});
	float c = ${B0(Math.cos(U3))}, s = ${B0(Math.sin(U3))};
	float fw = d.x * c + d.y * s;
	float up = -d.x * s + d.y * c;
	fw = max(fw, 0.05);
	vec2 px = vec2(${B0(sk)} + ${B0(B3)} * d.z / fw, ${B0(ik)} - ${B0(B3)} * up / fw);
	vec2 uv = px / vec2(${B0(ck)}, ${B0(lk)});
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
}`;W3.exports=t=>{let e=fk(),o=t.texture({data:[[[120,105,85]]],min:"linear",mag:"linear"});fetch("res/florence/photo.jpg").then(s=>{if(!s.ok)throw new Error("Could not load the Florence photo");return s.blob()}).then(s=>createImageBitmap(s)).then(s=>o({data:s,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(s=>console.error(s));let n=t({frag:hk,vert:uk,attributes:{position:e.position,normal:e.normal},elements:new Uint32Array(e.elements),uniforms:{photo:o},cull:{enable:!1}}),r={pos:[],nrm:[],k:[],idx:[]},a=(s,c,h)=>{let[l,d,u]=s,p=[[[1,0,0],[0,1,0],[0,0,1]],[[-1,0,0],[0,1,0],[0,0,-1]],[[0,0,1],[0,1,0],[-1,0,0]],[[0,0,-1],[0,1,0],[1,0,0]],[[0,1,0],[0,0,1],[1,0,0]],[[0,-1,0],[0,0,1],[-1,0,0]]];for(let[f,v,m]of p){let g=r.pos.length/3;for(let[x,y]of[[-1,-1],[1,-1],[1,1],[-1,1]])r.pos.push(l+f[0]*c[0]+v[0]*x*c[0]+m[0]*y*c[0],d+f[1]*c[1]+v[1]*x*c[1]+m[1]*y*c[1],u+f[2]*c[2]+v[2]*x*c[2]+m[2]*y*c[2]),r.nrm.push(...f),r.k.push(h);r.idx.push(g,g+1,g+2,g,g+2,g+3)}};for(let s of Hh){let c=s[3],h=s[2]+c*.42;a([s[0],s[1],h],[.11,.17,.11],1);for(let l of[-1,1])for(let d of[-1,1])a([s[0]+l*.11,s[1],h+d*.11],[.014,.18,.014],0);a([s[0],s[1]+.2,h],[.15,.03,.15],0),a([s[0],s[1]+.27,h],[.05,.05,.05],0),a([s[0],s[1]-.19,h],[.09,.025,.09],0),a([s[0],s[1]+.34,s[2]+c*.21],[.015,.015,.21],0),a([s[0],s[1]+.15,s[2]+c*.03],[.04,.24,.03],0)}let i=t({vert:`
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
		}`,attributes:{position:r.pos,normal:r.nrm,k:r.k},elements:new Uint16Array(r.idx),cull:{enable:!1}});return function(){n(),i()}}});var Z3=Et((MA,Q3)=>{"use strict";var dk=i0().GLSL,{A:jh,BENCH:Md,SHAFT:_d,TREE:Kl,oculusGLSL:pk}=Ar(),vk=Sr(),Bh=Kl.sxz,X3=Kl.sy,Y3=Kl.yaw;function mk(t){let e=new DataView(t),o=e.getUint32(4,!0),n=e.getUint32(8,!0),r=e.getUint32(12,!0),a=[0,1,2].map(u=>e.getFloat32(16+u*4,!0)),i=[0,1,2].map(u=>e.getFloat32(28+u*4,!0)),s=40,c=new Uint16Array(t,s,o*3);s+=o*6;let h=new Uint16Array(t,s,o*2);s+=o*4;let l=new Int8Array(t,s,o*3);s+=o*3,s=s+3&-4;let d=new Uint32Array(t,s,r);return{nV:o,nWood:n,nI:r,mn:a,sz:i,pos:c,uv:h,nrm:l,idx:d}}function gk(t){let e=new Float32Array(t.nV*3),o=new Float32Array(t.nV*3),n=new Float32Array(t.nV*2),r=new Float32Array(t.nV),a=Math.cos(Y3),i=Math.sin(Y3);for(let s=0;s<t.nV;s++){let c=(t.mn[0]+t.pos[s*3]/65535*t.sz[0])*Bh,h=(t.mn[1]+t.pos[s*3+1]/65535*t.sz[1])*X3,l=(t.mn[2]+t.pos[s*3+2]/65535*t.sz[2])*Bh;e[s*3]=jh.cx+a*c+i*l,e[s*3+1]=Md.soil+.02+h,e[s*3+2]=jh.zc-i*c+a*l;let d=t.nrm[s*3]/127/Bh,u=t.nrm[s*3+1]/127/X3,p=t.nrm[s*3+2]/127/Bh,f=Math.hypot(d,u,p)||1;d/=f,u/=f,p/=f,o[s*3]=a*d+i*p,o[s*3+1]=u,o[s*3+2]=-i*d+a*p,n[s*2]=t.uv[s*2]/65535,n[s*2+1]=t.uv[s*2+1]/65535,r[s]=s>=t.nWood?1:0}return{position:e,normal:o,uv:n,leaf:r,elements:t.idx}}function K3(t,e,o,n){let r=t.texture({data:[[n]],min:"linear",mag:"linear"});return fetch(e).then(a=>{if(!a.ok)throw new Error("Could not load "+e);return a.blob()}).then(a=>createImageBitmap(a,{premultiplyAlpha:"none"}).catch(()=>new Promise((i,s)=>{let c=new Image;c.onload=()=>i(c),c.onerror=s,c.src=URL.createObjectURL(a)}))).then(a=>r({data:a,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",...o})).catch(a=>console.error(a)),r}var f0=t=>t.toFixed(4),yc=Kl.crownC,bc=Kl.crownR,xk=`
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
	vec3 cc = vec3(${f0(yc[0])}, ${f0(yc[1])}, ${f0(yc[2])});
	vec3 cr = vec3(${f0(bc[0])}, ${f0(bc[1])}, ${f0(bc[2])});
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
}`,hs=Ka(),yk=`
precision highp float;
${dk}
uniform float time;
${hs.lanternGLSL(hs.TREE_LANTERN)}
const vec3 LANTERN_POS = vec3(${hs.LANTERNS[hs.TREE_LANTERN[0]].x.toFixed(3)}, ${hs.LANTERNS[hs.TREE_LANTERN[0]].y.toFixed(3)}, ${hs.LANTERNS[hs.TREE_LANTERN[0]].z.toFixed(3)});
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
	vec3 rel = (v_pos - vec3(${f0(yc[0])}, ${f0(yc[1])}, ${f0(yc[2])})) / vec3(${f0(bc[0])}, ${f0(bc[1])}, ${f0(bc[2])});
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
}`;Q3.exports=t=>{let e=null,o=K3(t,"res/tree/leaves.webp",{wrapS:"clamp",wrapT:"clamp"},[60,80,40,0]),n=K3(t,"res/tree/bark.jpg",{wrapS:"repeat",wrapT:"repeat"},[90,80,70]),r=Date.now();return fetch("res/tree.bin").then(a=>{if(!a.ok)throw new Error("Could not load the tree");return a.arrayBuffer()}).then(a=>{let i=gk(mk(a));e=t({vert:xk,frag:yk,attributes:{position:i.position,normal:i.normal,uv:i.uv,leaf:i.leaf},elements:i.elements,uniforms:{leaves:o,bark:n,time:()=>vk.motion?typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-r)/1e3:0},cull:{enable:!1}})}).catch(a=>console.error(a)),function(){e&&e()}}});var Yh=Et((kA,ox)=>{"use strict";var wc=Ja(),bk="res/audio/go-tomorrow.mp3",wk="res/audio/go-tomorrow.json",tx="gallery-sound",Wh=[wc.PIANO.x,1,wc.PIANO.z],_k=wc.R,or=!0;try{localStorage.getItem(tx)==="off"&&(or=!1)}catch(t){}var Pn=null,S0=null,Ql=null,Zl=null,us=null,Pa=null,si=!1,Vh=null,J3=[],Mk=(typeof performance!="undefined"?performance.now():0)/1e3;function kk(t){let e=Math.floor(t.sampleRate*2.6),o=t.createBuffer(2,e,t.sampleRate),n=12345,r=()=>(n=n*16807%2147483647,n/10737418235e-1-1);for(let a=0;a<2;a++){let i=o.getChannelData(a),s=0;for(let c=0;c<e;c++){let h=c/t.sampleRate,l=.25+.6*Math.exp(-h*2.2);s+=(r()-s)*l,i[c]=s*Math.pow(1-c/e,2.2)*Math.exp(-h*1.5)*(h<.012?h/.012:1)}}return o}function Sk(){if(Pn)return;Pn=new Audio,Pn.src=bk,Pn.loop=!0,Pn.preload="auto",Pn.crossOrigin="anonymous";let t=window.AudioContext||window.webkitAudioContext;if(!t){Pn.volume=.2;return}try{S0=new t;let e=S0.createMediaElementSource(Pn);us=S0.createBiquadFilter(),us.type="lowpass",us.frequency.value=1500,us.Q.value=.4,Ql=S0.createGain(),Ql.gain.value=0,Zl=S0.createGain(),Zl.gain.value=0;let o=S0.createConvolver();o.buffer=kk(S0),Pa=S0.createGain(),Pa.gain.value=or?1:0,e.connect(us),us.connect(Ql),Ql.connect(Pa),us.connect(o),o.connect(Zl),Zl.connect(Pa),Pa.connect(S0.destination)}catch(e){S0=null,Pn.volume=.2}}function ex(){if(si||!or)return;Sk();let t=()=>Pn.play().then(()=>{si=!0}).catch(()=>{});S0&&S0.state==="suspended"?S0.resume().then(t,t):t()}typeof window!="undefined"&&(["pointerdown","pointerup","touchend","keydown","click"].forEach(t=>window.addEventListener(t,ex,{capture:!0,passive:!0})),document.addEventListener("visibilitychange",()=>{!Pn||!si||(document.hidden?Pn.pause():or&&Pn.play().catch(()=>{}))}),fetch(wk).then(t=>t.ok?t.json():null).then(t=>{if(!t)return;let e=o=>{let n=o.map(i=>i[2]).sort((i,s)=>i-s),r=n[Math.floor(n.length*.03)]||0,a=n[Math.floor(n.length*.97)]||1;return o.map(i=>({t:i[0],w:i[1],x:Math.max(0,Math.min(1,(i[2]-r)/Math.max(a-r,.001)))}))};Vh={left:e(t.l),right:e(t.r),level:t.e,dur:t.d}}).catch(()=>{}));var Xh={AT:Wh,listen(t){if(!S0||!si)return;let e=t[0]-Wh[0],o=t[2]-Wh[2],n=Math.hypot(e,o,(t[1]-Wh[1])*.5),r=Math.hypot(t[0]-wc.C.x,t[2]-wc.C.z)<_k+.4||t[0]<-.2&&Math.abs(t[2]-wc.C.z)<4,a,i,s;if(r){let h=Math.max(0,Math.min(1,(n-1.2)/5));a=1-.3*h,i=.22+.16*h,s=16e3}else{let h=5.5/Math.max(n,5.5),l=t[0]>14.2&&t[2]<12?.6:1;a=.5*Math.pow(h,1.5)*l,i=.34*Math.pow(h,.95)*l,s=(650+9e3*Math.pow(h,1.3))*(l<1?.7:1)}let c=S0.currentTime;Ql.gain.setTargetAtTime(a,c,.35),Zl.gain.setTargetAtTime(i,c,.35),us.frequency.setTargetAtTime(s,c,.35)},time(){let t=Vh&&Vh.dur||158;return Pn&&si&&!Pn.paused||Pn&&si?Pn.currentTime%t:((performance.now()/1e3-Mk)%t+t)%t},get cues(){return Vh},get on(){return or},set(t){or=!!t;try{localStorage.setItem(tx,or?"on":"off")}catch(e){}or?(ex(),Pn&&si&&Pn.play().catch(()=>{}),Pa&&Pa.gain.setTargetAtTime(1,S0.currentTime,.2)):Pa?Pa.gain.setTargetAtTime(0,S0.currentTime,.15):Pn&&Pn.pause(),J3.forEach(e=>e(or))},toggle(){Xh.set(!or)},onChange(t){J3.push(t)},button(t){let e='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a7.8 7.8 0 0 1 0 11"/></svg>',o='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>',n=document.createElement("button");n.type="button",n.className=t+" sound-toggle";let r=()=>{n.innerHTML=or?e:o,n.setAttribute("aria-label",or?"Turn the music off":"Turn the music on"),n.title=or?"Music on":"Music off",n.setAttribute("aria-pressed",or?"true":"false")};return r(),Xh.onChange(r),["mousedown","pointerdown"].forEach(a=>n.addEventListener(a,i=>i.stopPropagation())),n.addEventListener("click",a=>{a.stopPropagation(),Xh.toggle()}),n}};ox.exports=Xh});var dx=Et((SA,Ad)=>{"use strict";var Ed=i0().GLSL,{A:nx,BENCH:lx,oculusGLSL:fx}=Ar(),rx=Sr(),hx=Ja(),ax=Yh(),Ek=1.74,zk=1.877,N0=Ek/zk,ci={x:nx.cx-1.22,z:nx.zc+.02,hipY:lx.seat+.115},an=(t,e)=>[t[3]*e[0]+t[0]*e[3]+t[1]*e[2]-t[2]*e[1],t[3]*e[1]-t[0]*e[2]+t[1]*e[3]+t[2]*e[0],t[3]*e[2]+t[0]*e[1]-t[1]*e[0]+t[2]*e[3],t[3]*e[3]-t[0]*e[0]-t[1]*e[1]-t[2]*e[2]],Qr=t=>[-t[0],-t[1],-t[2],t[3]],ps=(t,e)=>{let o=Math.hypot(t[0],t[1],t[2])||1,n=Math.sin(e/2);return[t[0]/o*n,t[1]/o*n,t[2]/o*n,Math.cos(e/2)]},Kh=(t,e,o)=>an(ps([0,0,1],o*Math.PI/180),an(ps([0,1,0],e*Math.PI/180),ps([1,0,0],t*Math.PI/180))),zd=t=>{let e=Math.hypot(...t)||1;return t.map(o=>o/e)},da=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],tf=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],ds=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],Sd=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2],Zh=t=>Math.hypot(t[0],t[1],t[2]),Jl=t=>{let e=Zh(t)||1;return[t[0]/e,t[1]/e,t[2]/e]},t1=(t,e)=>[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]],Ak=(t,e)=>{let o=[t[0],t[1],t[2]],n=ds(t1(o,e),2);return tf(tf(e,ds(n,t[3])),t1(o,n))},Tk=(t,e)=>{let o=t1(t,e),n=1+Sd(t,e);return n<1e-6?[0,0,1,0]:zd([o[0],o[1],o[2],n])};function pr(t,e,o){let[n,r,a,i]=e,s=n*n,c=r*r,h=a*a,l=n*r,d=n*a,u=r*a,p=i*n,f=i*r,v=i*a;return[(1-2*(c+h))*o[0],2*(l+v)*o[0],2*(d-f)*o[0],0,2*(l-v)*o[1],(1-2*(s+h))*o[1],2*(u+p)*o[1],0,2*(d+f)*o[2],2*(u-p)*o[2],(1-2*(s+c))*o[2],0,t[0],t[1],t[2],1]}function Jn(t,e){let o=new Array(16);for(let n=0;n<4;n++)for(let r=0;r<4;r++)o[n*4+r]=t[r]*e[n*4]+t[4+r]*e[n*4+1]+t[8+r]*e[n*4+2]+t[12+r]*e[n*4+3];return o}function kd(t){let e=Math.hypot(t[0],t[1],t[2]),o=Math.hypot(t[4],t[5],t[6]),n=Math.hypot(t[8],t[9],t[10]),r=t[0]/e,a=t[1]/e,i=t[2]/e,s=t[4]/o,c=t[5]/o,h=t[6]/o,l=t[8]/n,d=t[9]/n,u=t[10]/n,p=r+c+u,f;if(p>0){let v=Math.sqrt(p+1)*2;f=[(h-d)/v,(l-i)/v,(a-s)/v,v/4]}else if(r>c&&r>u){let v=Math.sqrt(1+r-c-u)*2;f=[v/4,(s+a)/v,(l+i)/v,(h-d)/v]}else if(c>u){let v=Math.sqrt(1+c-r-u)*2;f=[(s+a)/v,v/4,(d+h)/v,(l-i)/v]}else{let v=Math.sqrt(1+u-r-c)*2;f=[(l+i)/v,(d+h)/v,v/4,(a-s)/v]}return zd(f)}var Jh={LeftUpLeg:[-62,10,0],LeftLeg:[122,0,0],LeftFoot:[30,0,0],RightUpLeg:[0,-3,-2],RightLeg:[4,0,0],RightFoot:[35,-12,0],Neck:[10,0,0],Head:[6,0,0],LeftShoulder:[0,0,6],LeftArm:[-112.4,3.4,62.5],LeftForeArm:[0,-122.6,0],LeftHand:[0,0,-10],RightShoulder:[0,0,0],RightArm:[0,78,-8],RightForeArm:[0,14,0],RightHand:[0,0,0]};for(let t of["Left","Right"]){let e=t==="Left"?-1:1,o=t==="Left"?1:.35;["Index","Middle","Ring","Pinky"].forEach((n,r)=>{Jh[t+"Hand"+n+"1"]=[0,0,e*(18+r*6)*o],Jh[t+"Hand"+n+"2"]=[0,0,e*(26+r*6)*o],Jh[t+"Hand"+n+"3"]=[0,0,e*16*o]})}function ii(t,e,o){let n=t-e;return n-=Math.round(n),Math.exp(-(n/o)*(n/o))}function sx(t){let e=9+20*Math.cos(2*Math.PI*t),o=4+13*ii(t,.14,.07)+57*ii(t,.72,.12),n=5*ii(t,.06,.04)-9*ii(t,.42,.12)+17*ii(t,.62,.05)-3*ii(t,.85,.1),r=-26*ii(t,.58,.06);return{hip:e,knee:o,ankle:n,toe:r}}function Lk(t){let e=(t%1+1)%1,o=sx(e),n=sx(e+.5),r=Math.cos(2*Math.PI*e),a=Math.sin(2*Math.PI*e);return{swing:{LeftArm:[16*r,0,0],RightArm:[-16*r,0,0],LeftForeArm:[0,-14-8*Math.max(0,-r),0],RightForeArm:[0,14+8*Math.max(0,r),0]},pose:{Hips:[0,5*a,1.5*Math.cos(4*Math.PI*e)],Spine1:[3,-4*a,0],LeftUpLeg:[-o.hip,0,0],LeftLeg:[o.knee,0,0],LeftFoot:[o.ankle,0,0],LeftToeBase:[o.toe,0,0],RightUpLeg:[-n.hip,0,0],RightLeg:[n.knee,0,0],RightFoot:[n.ankle,0,0],RightToeBase:[n.toe,0,0],LeftArm:[0,0,-78],RightArm:[0,0,78],LeftHand:[0,0,-8],RightHand:[0,0,8]},sway:.022*r}}var ix=`
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
}`,e1=Ka(),cx=`#extension GL_OES_standard_derivatives : enable
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
}`;function Nk(t,e){let o=t.texture({data:[[[120,100,90,255]]],min:"linear",mag:"linear"});return fetch(e).then(n=>{if(!n.ok)throw new Error("Could not load "+e);return n.blob()}).then(n=>createImageBitmap(n,{premultiplyAlpha:"none"}).catch(()=>new Promise((r,a)=>{let i=new Image;i.onload=()=>r(i),i.onerror=a,i.src=URL.createObjectURL(n)}))).then(n=>o({data:n,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(n=>console.error(n)),o}var ux={w:.13,h:.2},Qh=t=>.011*(1-Math.pow(1-t,3));function Rk(){let t=[],e=[],o=[],n=[],r=[],a=(v,m,g,x,y,w,M)=>{let _=t.length/3;[v,m,g,x].forEach((S,R)=>{t.push(...S),e.push(...y),o.push(...M[R]),n.push(w)}),r.push(_,_+1,_+2,_,_+2,_+3)},{w:i,h:s}=ux,c=s/2,h=[[0,1],[1,1],[1,0],[0,0]],l=-.006,d=i+.001,u=c+.001;a([0,l,-u],[d,l,-u],[d,l,u],[0,l,u],[0,-1,0],1,[[0,1],[1,1],[1,0],[0,0]]),a([0,l+.001,-u],[0,l+.001,u],[d,l+.001,u],[d,l+.001,-u],[0,1,0],2,h),a([-d,l,-u],[0,l,-u],[0,l,u],[-d,l,u],[0,-1,0],2,h),a([-d,l+.001,-u],[-d,l+.001,u],[0,l+.001,u],[0,l+.001,-u],[0,1,0],2,h);let p=8;for(let v of[1,-1]){for(let g=0;g<p;g++){let x=g/p,y=(g+1)/p,w=(.002+x*(i-.002))*v,M=(.002+y*(i-.002))*v,_=Qh(x),S=Qh(y),R=v>0?x:1-x,N=v>0?y:1-y,G=1,q=-(S-_)/(M-w);a([w,_,-c],[M,S,-c],[M,S,c],[w,_,c],[q,G,0],3,[[R,1],[N,1],[N,0],[R,0]]),a([w,l+.001,c],[M,l+.001,c],[M,S,c],[w,_,c],[0,0,1],4,h),a([w,_,-c],[M,S,-c],[M,l+.001,-c],[w,l+.001,-c],[0,0,-1],4,h)}let m=i*v;a([m,l+.001,-c],[m,Qh(1),-c],[m,Qh(1),c],[m,l+.001,c],[v,0,0],4,h)}let f=10;for(let v=0;v<f;v++){let m=v/f,g=(v+1)/f,x=t.length/3;for(let[y,w]of[[m,-c],[g,-c],[g,c],[m,c]])t.push(y,0,w),e.push(0,1,0),o.push(y,(w+c)/s),n.push(5);r.push(x,x+1,x+2,x,x+2,x+3)}return{pos:t,nrm:e,uv:o,kind:n,idx:r}}function Ok(){if(typeof document=="undefined")return null;let t=document.createElement("canvas");t.width=512,t.height=768;let e=t.getContext("2d");e.fillStyle="#ebe5d8",e.fillRect(0,0,512,768);let o=7,n=()=>(o=o*16807%2147483647,o/2147483647),r=(i,s,c,h,l,d,u)=>{for(let p=0;p<d;p++){let f=i+(n()-.5)*c*2,v=s+(n()-.5)*h*2,m=20+n()*60,g=e.createRadialGradient(f,v,0,f,v,m);g.addColorStop(0,`rgba(${l},${u})`),g.addColorStop(1,`rgba(${l},0)`),e.fillStyle=g,e.fillRect(f-m,v-m,m*2,m*2)}},a=e.createRadialGradient(236,280,10,256,300,125);a.addColorStop(0,"#3d4866"),a.addColorStop(1,"#232a3d"),e.fillStyle=a,e.beginPath(),e.arc(256,300,122,0,Math.PI*2),e.fill(),e.fillStyle="#b8873f",e.beginPath(),e.moveTo(64,452);for(let i=64;i<=448;i+=16)e.lineTo(i,446+n()*4);for(let i=448;i>=64;i-=16)e.lineTo(i,466+n()*4);e.fill(),e.strokeStyle="#2b2f3a",e.lineCap="round",[[120,392,500,5],[160,352,530,4],[205,307,558,3]].forEach(([i,s,c,h])=>{e.lineWidth=h,e.beginPath(),e.moveTo(i,c),e.lineTo(s,c),e.stroke()});for(let i=0;i<9e3;i++)e.fillStyle=`rgba(90,80,60,${n()*.05})`,e.fillRect(n()*512,n()*768,1,1);return t}var Ck=`
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
}`;function $k(){let t=[],e=[],o=[],n=[],r=[],a=[.36,.11,.07],i=[.1,.07,.05],s=[.78,.76,.72],c=[.55,.41,.26],h=[.8,.55,.22],l=[[0,-.15,h,2],[.0012,-.147,h,2],[.004,-.138,h,2],[.0058,-.125,c,2],[.0064,-.112,c,2],[.006,-.104,c,2],[.0066,-.102,s,1],[.0066,-.08,s,1],[.0062,-.074,s,1],[.0068,-.072,s,1],[.007,-.066,s,1],[.0058,-.064,a,0],[.0062,-.04,a,0],[.0058,0,a,0],[.0046,.06,a,0],[.0036,.11,a,0],[.003,.13,i,0],[.0026,.136,i,0],[0,.139,i,0]],d=16;for(let u=0;u<l.length;u++){let[p,f,v,m]=l[u],g=m===2?.45:1;for(let x=0;x<=d;x++){let y=x/d*Math.PI*2;t.push(Math.cos(y)*p,f,Math.sin(y)*p*g);let w=Math.max(u-1,0),M=Math.min(u+1,l.length-1),_=l[M][0]-l[w][0],S=l[M][1]-l[w][1],R=Math.hypot(_,S)||1;e.push(Math.cos(y)*S/R,-_/R,Math.sin(y)*S/R/g),o.push(...v),n.push(m)}}for(let u=0;u<l.length-1;u++)for(let p=0;p<d;p++){let f=u*(d+1)+p,v=f+d+1;r.push(f,v,f+1,f+1,v,v+1)}return{pos:t,nrm:e,col:o,mat:n,idx:r}}var Ik=`
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
}`;Ad.exports=t=>{let e="res/avatar/",o=null,n=Date.now(),r=()=>typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-n)/1e3,a={glowPos:[ci.x,1.9,ci.z],glow:0};Promise.all([fetch(e+"avatar.json").then(N=>N.json()),fetch(e+"avatar.bin").then(N=>N.arrayBuffer())]).then(([N,G])=>{o=h(N,G)}).catch(N=>console.error(N));let i=null;Promise.all([fetch(e+"motion.json").then(N=>N.ok?N.json():null),fetch(e+"motion.bin").then(N=>N.ok?N.arrayBuffer():null)]).then(([N,G])=>{if(!N||!G)return;let q={};for(let V in N.clips){let D=N.clips[V],B=D.bones.length,dt=new Float32Array(G,D.mean,B*4),Gt={};D.bones.forEach((Nt,xt)=>{Gt[Nt]=[dt[xt*4],dt[xt*4+1],dt[xt*4+2],dt[xt*4+3]]}),q[V]=Object.assign({},D,{Q:new Int16Array(G,D.q,D.frames*B*4),H:new Float32Array(G,D.hips,D.frames*3),meanQ:Gt})}i=q}).catch(()=>{});function s(N,G){let q=N.frames,V=N.bones.length,D=(G%q+q)%q,B=Math.floor(D)%q,dt=(B+1)%q,Gt=D-Math.floor(D),Nt={};for(let Bt=0;Bt<V;Bt++){let ze=(B*V+Bt)*4,Se=(dt*V+Bt)*4,De=N.Q[ze],Ee=N.Q[ze+1],rt=N.Q[ze+2],ht=N.Q[ze+3],oe=N.Q[Se],lt=N.Q[Se+1],It=N.Q[Se+2],Jt=N.Q[Se+3];De*oe+Ee*lt+rt*It+ht*Jt<0&&(oe=-oe,lt=-lt,It=-It,Jt=-Jt),Nt[N.bones[Bt]]=zd([De+(oe-De)*Gt,Ee+(lt-Ee)*Gt,rt+(It-rt)*Gt,ht+(Jt-ht)*Gt])}let xt=B*3,ot=dt*3;return{q:Nt,hips:[N.H[xt]+(N.H[ot]-N.H[xt])*Gt,N.H[xt+1]+(N.H[ot+1]-N.H[xt+1])*Gt,N.H[xt+2]+(N.H[ot+2]-N.H[xt+2])*Gt]}}let c=t.texture({data:[[[255,255,255,255]]]});function h(N,G){let q=(U,bt)=>new Float32Array(G,U,bt),V=N.bones,D=V.length,B={};V.forEach((U,bt)=>{B[U.name]=bt});let dt=[];for(let U=0;U<D;U++)dt.push(Array.from(q(N.ibm+U*64,16)));let Gt=V.map(U=>pr(U.t,U.r,U.s)),Nt=[];for(let U=0;U<D;U++){let bt=V[U].parent;Nt[U]=bt<0?Gt[U]:Jn(Nt[bt],Gt[U])}let xt=Nt.map(kd),ot=N.meshes.map(U=>{let bt=q(U.pos,U.n*3),Rt=q(U.nrm,U.n*3),zt=q(U.uv,U.n*2),ce=new Uint8Array(G,U.jnt,U.n*4),Pe=q(U.wgt,U.n*4),_e=new Uint16Array(G,U.idx,U.ni),le={};for(let Ue in U.morphs){let Ko=U.morphs[Ue];le[Ue]={idx:new Uint16Array(G,Ko.idx,Ko.n),d:q(Ko.d,Ko.n*3)}}let ye=new Float32Array(U.n*3),be=new Float32Array(U.n*3),Ye=new Float32Array(U.n*3),Me=t.buffer({data:ye,usage:"dynamic"}),ue=t.buffer({data:be,usage:"dynamic"}),Re=/avaturn_hair/.test(U.name),ee=/EyeAO|Eyelash/.test(U.name),He=/Body|Head/.test(U.name),Ao=U.kind||0;return{m:U,pos:bt,nrm:Rt,uv:zt,jnt:ce,wgt:Pe,idx:_e,morphs:le,outP:ye,outN:be,work:Ye,pb:Me,nbuf:ue,tex:U.tex?Nk(t,e+U.tex):c,kind:Ao,alphaScale:/EyeAO/.test(U.name)?.25:1,blend:U.blend||Re,alphaCut:Re?.35:ee?.02:0,skin:He?1:0}}),Bt=t({vert:ix,frag:cx,attributes:{position:t.prop("pb"),normal:t.prop("nb"),uv:t.prop("uv")},elements:t.prop("el"),uniforms:{tex:t.prop("tex"),alphaCut:t.prop("alphaCut"),skin:t.prop("skin"),kind:t.prop("kind"),alphaScale:t.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>_&&!S?_.lamp:[0,0,0,0],court:()=>_||S?0:1,candle:()=>S?1:0},cull:{enable:!1}}),ze=t({vert:ix,frag:cx,attributes:{position:t.prop("pb"),normal:t.prop("nb"),uv:t.prop("uv")},elements:t.prop("el"),uniforms:{tex:t.prop("tex"),alphaCut:t.prop("alphaCut"),skin:t.prop("skin"),kind:t.prop("kind"),alphaScale:t.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>_&&!S?_.lamp:[0,0,0,0],court:()=>_||S?0:1,candle:()=>S?1:0},cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"one minus src alpha"}}}),Se=.3;for(let U of ot)if(U.uvBuf=t.buffer(U.uv),/Body/.test(U.m.name)){let bt=[],Rt=[];for(let zt=0;zt<U.idx.length;zt+=3){let ce=U.idx[zt],Pe=U.idx[zt+1],_e=U.idx[zt+2];(U.pos[ce*3+1]<Se&&U.pos[Pe*3+1]<Se&&U.pos[_e*3+1]<Se?Rt:bt).push(ce,Pe,_e)}U.el=t.elements({data:new Uint16Array(bt),type:"uint16"}),Rt.length&&(U.sockEl=t.elements({data:new Uint16Array(Rt),type:"uint16"}))}else U.el=t.elements({data:U.idx,type:"uint16"});let De=Nt[B.Hips],Ee=ps([1,0,0],-Math.PI/2),rt=Jn(pr([ci.x-De[12]*N0,ci.hipY-De[14]*N0,ci.z+De[13]*N0],Ee,[1,1,1]),pr([0,0,0],[0,0,0,1],[N0,N0,N0])),ht=new Array(D),oe=-1,lt=(U,bt,Rt)=>Jn(pr([U,0,bt],ps([0,1,0],Rt),[1,1,1]),pr([0,0,0],[0,0,0,1],[N0,N0,N0])),It=["LeftFoot","RightFoot","LeftToeBase","RightToeBase"].map(U=>B[U]),Jt=It.map(U=>Nt[U][13]*N0);function me(U){if(i&&i.walk)return xe(U);let bt=Lk(U.phase),Rt={},zt=be=>{for(let Ye in be){let Me=be[Ye],ue=Kh(Me[0],Me[1],Me[2]);Rt[Ye]=Rt[Ye]?an(Rt[Ye],ue):ue}};zt(bt.swing),zt(bt.pose);let ce=Math.cos(U.heading),Pe=-Math.sin(U.heading),_e=lt(U.x+ce*bt.sway,U.z+Pe*bt.sway,U.heading),le=new Array(D);for(let be=0;be<D;be++){let Ye=V[be],Me=Gt[be],ue=Rt[Ye.name];if(ue){let Re=xt[be],ee=an(Qr(Re),an(ue,Re));Me=pr(Ye.t,an(Ye.r,ee),Ye.s)}le[be]=Ye.parent<0?Jn(_e,Me):Jn(le[Ye.parent],Me)}let ye=1/0;It.forEach((be,Ye)=>{ye=Math.min(ye,le[be][13]-Jt[Ye])});for(let be=0;be<D;be++)le[be]=le[be].slice(),le[be][13]-=ye,ht[be]=Jn(le[be],dt[be]);return{blink:0}}function xe(U){let bt=i.walk,Rt=s(bt,(U.phase+bt.phase0)*bt.frames),zt=lt(U.x,U.z,U.heading),ce=new Array(D),Pe=B.Hips;for(let le=0;le<D;le++){let ye=V[le],be=Gt[le],Ye=Rt.q[ye.name];if(Ye){let Me=xt[le],ue=an(Qr(Me),an(Ye,Me)),Re=le===Pe?[ye.t[0]+Rt.hips[0],ye.t[1]+Rt.hips[1],ye.t[2]+Rt.hips[2]]:ye.t;be=pr(Re,an(ye.r,ue),ye.s)}ce[le]=ye.parent<0?Jn(zt,be):Jn(ce[ye.parent],be)}let _e=1/0;It.forEach((le,ye)=>{_e=Math.min(_e,ce[le][13]-Jt[ye])});for(let le=0;le<D;le++)ce[le]=ce[le].slice(),ce[le][13]-=_e,ht[le]=Jn(ce[le],dt[le]);return{blink:0}}function te(U,bt){let Rt=Math.sin(U*2*Math.PI/4.6),zt=Math.sin(U*.37)*.6+Math.sin(U*.83+1)*.4,ce={LeftUpLeg:[-86,-6,0],RightUpLeg:[-84,7,0],LeftLeg:[88,0,0],RightLeg:[82,0,0],LeftFoot:[-4,0,0],RightFoot:[-2,0,0],Spine:[6,0,0],Spine1:[5+Rt*.8,0,0],Spine2:[4+Rt*.6,0,0],Neck:[10,0,0],Head:[12+zt*2,zt*2.5,0],LeftArm:[0,0,-72],RightArm:[0,0,72],LeftForeArm:[0,-62,0],RightForeArm:[0,62,0],LeftHand:[0,0,-10],RightHand:[0,0,10]},Pe={};for(let Me in ce){let ue=ce[Me];Pe[Me]=Kh(ue[0],ue[1],ue[2])}let _e=lt(bt.x,bt.z,bt.heading),le=new Array(D);for(let Me=0;Me<D;Me++){let ue=V[Me],Re=Gt[Me],ee=Pe[ue.name];if(ee){let He=xt[Me],Ao=an(Qr(He),an(ee,He));Re=pr(ue.t,an(ue.r,Ao),ue.s)}le[Me]=ue.parent<0?Jn(_e,Re):Jn(le[ue.parent],Re)}let be=le[B.Hips][13]-(bt.y+.1);for(let Me=0;Me<D;Me++)le[Me]=le[Me].slice(),le[Me][13]-=be,ht[Me]=Jn(le[Me],dt[Me]);let Ye=U%4.1;return{blink:Ye<.16?Math.sin(Ye/.16*Math.PI):0}}let se=U=>[Nt[U][12],Nt[U][13],Nt[U][14]],ut=(U,bt)=>{let Rt=Jl(U),zt=Jl(da(bt,ds(Rt,Sd(bt,Rt)))),ce=t1(Rt,zt);return kd([Rt[0],Rt[1],Rt[2],0,zt[0],zt[1],zt[2],0,ce[0],ce[1],ce[2],0,0,0,0,1])},Vt={};for(let U of["Left","Right"]){let bt=B[U+"Arm"],Rt=B[U+"ForeArm"],zt=B[U+"Hand"],ce=B[U+"HandMiddle1"];Vt[U]={a:bt,f:Rt,h:zt,upper:Zh(da(se(Rt),se(bt)))*N0,fore:Zh(da(se(zt),se(Rt)))*N0,dir0:Jl(da(se(Rt),se(bt))),qf0:ut(da(se(zt),se(Rt)),[0,1,0]),qh0:ut(da(se(ce),se(zt)),[0,1,0])}}let he={};for(let U of["Left","Right"])he[Vt[U].a]={side:U,part:0},he[Vt[U].f]={side:U,part:1},he[Vt[U].h]={side:U,part:2};function Ht(U,bt,Rt){if(!U||!U.length)return{x:.5,lift:0,press:0,finger:1,busy:0};let zt=0,ce=U.length-1,Pe=-1;for(;zt<=ce;){let Ko=zt+ce>>1;U[Ko].t<=bt?(Pe=Ko,zt=Ko+1):ce=Ko-1}let _e=U[U.length-1],le=U[0],ye=Pe>=0?U[Pe]:{t:_e.t-Rt,x:_e.x,w:_e.w},be=Pe+1<U.length?U[Pe+1]:{t:le.t+Rt,x:le.x,w:le.w},Ye=Math.max(.05,be.t-ye.t),Me=Math.min(.14,Ye*.45),ue=Math.max(0,Math.min(1,(bt-ye.t-Me)/Math.max(Ye-Me-.03,.02))),Re=ue*ue*(3-2*ue),ee=bt-ye.t,He=(.55+.45*ye.w)*Math.exp(-ee/.11),Ao=be.t-bt,Ue=Ao<.05?(.55+.45*be.w)*(1-Ao/.05):0;return{x:ye.x+(be.x-ye.x)*Re,lift:Math.sin(Math.PI*ue)*Math.min(.05,.012+Ye*.03)*(Ye>2.5?.4:1),press:Math.max(He,Ue),finger:Ue>He?((Pe+1)*7+3)%4:(Math.max(Pe,0)*7+3)%4,busy:Math.exp(-ee/.9)}}let Lt={lean:0,turn:0,nod:0,pedal:0,last:-1},Je=["Index","Middle","Ring","Pinky"];function k(U){let bt=hx.PLAY,Rt=ax.cues,zt=ax.time(),ce=Rt&&Rt.dur||158,Pe={Left:Ht(Rt&&Rt.left,zt,ce),Right:Ht(Rt&&Rt.right,zt,ce)},_e=.35;if(Rt&&Rt.level&&Rt.level.length){let wo=zt*8,No=Math.floor(wo)%Rt.level.length,jn=(No+1)%Rt.level.length;_e=Rt.level[No]+(Rt.level[jn]-Rt.level[No])*(wo-Math.floor(wo))}let le=Lt.last<0?0:Math.min(.1,Math.max(0,U-Lt.last));Lt.last=U;let ye=wo=>Math.min(1,le*wo);Lt.lean+=(_e-Lt.lean)*ye(1.2),Lt.turn+=(Pe.Right.busy-Pe.Left.busy-Lt.turn)*ye(1.5),Lt.nod+=(Math.max(Pe.Right.press,Pe.Left.press*.7)-Lt.nod)*ye(6),Lt.pedal+=((Pe.Left.busy>.35?1:.15)-Lt.pedal)*ye(5);let be=Math.sin(U*2*Math.PI/4.6),Ye=Math.sin(zt*.41)*.6+Math.sin(zt*.17+1)*.4,Me={LeftUpLeg:[-80,-9,0],RightUpLeg:[-77,9,0],LeftLeg:[86,0,0],RightLeg:[64,0,0],LeftFoot:[-2,0,0],RightFoot:[12-10*Lt.pedal,0,0],Spine:[9+3.5*Lt.lean+Ye*1.6,Lt.turn*2.5,-Lt.turn*1.6],Spine1:[7+be*.8+2.5*Lt.lean,Lt.turn*2.5,-Lt.turn*1.2],Spine2:[6+be*.6+Ye*.8,Lt.turn*1.5,0],Neck:[13+3*Lt.lean,Lt.turn*3,0],Head:[15+Lt.nod*3.5+Ye*1.5,Lt.turn*5,Ye*1.5]};for(let wo of["Left","Right"]){let No=wo==="Left"?-1:1,jn=Pe[wo];Je.forEach((X,yt)=>{let de=yt===jn.finger?jn.press:jn.press*.2;Me[wo+"Hand"+X+"1"]=[0,0,No*(20+3*yt+20*de)],Me[wo+"Hand"+X+"2"]=[0,0,No*(26+4*yt-6*de)],Me[wo+"Hand"+X+"3"]=[0,0,No*14]}),Me[wo+"HandThumb1"]=[0,No*-18,No*10]}let ue={};for(let wo in Me){let No=Me[wo];ue[wo]=Kh(No[0],No[1],No[2])}let Re=Nt[B.Hips][13]*N0,ee=Jn(pr([bt.stoolX,bt.stoolTop+.1-Re,bt.stoolFront+.15],ps([0,1,0],bt.heading),[1,1,1]),pr([0,0,0],[0,0,0,1],[N0,N0,N0])),He=(bt.keyX0+bt.keyX1)/2,Ao={};for(let wo of["Left","Right"]){let No=Pe[wo],jn=wo==="Left"?He-.4+.33*No.x:He+.07+.33*No.x;Ao[wo]=[jn,bt.keyTop+.062+No.lift-No.press*.012,bt.keyFront+.075]}let Ue=new Array(D),Ko={},br=[0,1,0];for(let wo=0;wo<D;wo++){let No=V[wo],jn=Gt[wo],X=ue[No.name],yt=he[wo];if(yt){let de=Vt[yt.side];if(yt.part===0){let Oe=Ue[No.parent],qe=Jn(Oe,Gt[wo]),hn=[qe[12],qe[13],qe[14]],u0=an(kd(Oe),Qr(xt[No.parent])),C0=da(Ao[yt.side],hn),un=Zh(C0),z0=(de.upper+de.fore)*.995;un>z0&&(C0=ds(C0,z0/un),un=z0);let dn=ds(C0,1/un),Eo=(de.upper*de.upper-de.fore*de.fore+un*un)/(2*un),n0=Math.sqrt(Math.max(0,de.upper*de.upper-Eo*Eo)),en=[yt.side==="Left"?-.6:.6,-.8,.3];en=Jl(da(en,ds(dn,Sd(en,dn))));let Wn=tf(hn,tf(ds(dn,Eo),ds(en,n0)));de.T=tf(hn,C0),de.elbow=Wn;let Y0=Jl(da(Wn,hn)),K0=an(Tk(Ak(u0,de.dir0),Y0),u0);Ko[wo]=K0,X=an(Qr(u0),K0)}else if(yt.part===1){let Oe=an(ut(da(de.T,de.elbow),br),Qr(de.qf0));Ko[wo]=Oe,X=an(Qr(Ko[No.parent]),Oe)}else{let Oe=Pe[yt.side],qe=an(ut([yt.side==="Left"?.12:-.12,-.2-.1*Oe.press,-1],br),Qr(de.qh0));Ko[wo]=qe,X=an(Qr(Ko[No.parent]),qe)}}if(X){let de=xt[wo],Oe=an(Qr(de),an(X,de));jn=pr(No.t,an(No.r,Oe),No.s)}Ue[wo]=No.parent<0?Jn(ee,jn):Jn(Ue[No.parent],jn)}for(let wo=0;wo<D;wo++)ht[wo]=Jn(Ue[wo],dt[wo]);a.pianist={head:[Ue[B.Head][12],Ue[B.Head][13],Ue[B.Head][14]]};let ga=U%4.3;return{blink:ga<.16?Math.sin(ga/.16*Math.PI):0}}function to(U,bt){if(S)return k(U);if(_)return te(U,_);if(bt)return me(bt);let Rt=Math.sin(U*2*Math.PI/4.2),zt=U%3.7,ce=zt<.16?Math.sin(zt/.16*Math.PI):0,Pe=Math.sin(U*.45),_e=Math.sin(U*.31+.8),le=Math.max(0,Math.sin(U*.085)-.75)*4,ye={RightArm:[0,-22*le,11*Pe],RightForeArm:[0,8+26*le,0],RightHand:[38*_e,0,6*Math.sin(U*.7)],LeftUpLeg:[0,0,3.2*Math.sin(U*.36)],RightFoot:[5*Math.sin(U*.52+.4),0,0],Head:[0,1.6*Math.sin(U*.21),0]};["Index","Middle","Ring","Pinky"].forEach((ee,He)=>{let Ao=Math.sin(U*1.1-He*.5);ye["RightHand"+ee+"1"]=[0,0,8+12*Ao],ye["RightHand"+ee+"2"]=[0,0,6+10*Ao]});let be={},Ye=(ee,He)=>{for(let Ao in ee){let Ue=ee[Ao],Ko=Kh(Ue[0]*He,Ue[1]*He,Ue[2]*He);be[Ao]=be[Ao]?an(be[Ao],Ko):Ko}};Ye(Jh,1),Ye({Spine1:[Rt*.8,0,0],Spine2:[Rt*.6,0,0]},1),Ye(ye,1);let Me=new Array(D),ue=new Array(D);for(let ee=0;ee<D;ee++){let He=V[ee],Ao=Gt[ee],Ue=be[He.name];if(Ue){let Ko=xt[ee],br=an(Qr(Ko),an(Ue,Ko));Ao=pr(He.t,an(He.r,br),He.s)}Me[ee]=He.parent<0?Jn(rt,Ao):Jn(Me[He.parent],Ao),ue[ee]=null}for(let ee=0;ee<D;ee++)ht[ee]=Jn(Me[ee],dt[ee]);let Re=ee=>[ee[12],ee[13],ee[14]];return a.headPos=Re(Me[B.Head]),a.hipsPos=Re(Me[B.Hips]),a.headM=Me[B.Head],{blink:ce}}function no(U,bt){let{pos:Rt,nrm:zt,jnt:ce,wgt:Pe,outP:_e,outN:le,work:ye,m:be}=U,Ye=be.n,Me=Rt;if(bt){ye.set(Rt);for(let ue in U.morphs){let Re=bt[ue]||0;if(Re<=0)continue;let ee=U.morphs[ue];for(let He=0;He<ee.idx.length;He++){let Ao=ee.idx[He]*3;ye[Ao]+=ee.d[He*3]*Re,ye[Ao+1]+=ee.d[He*3+1]*Re,ye[Ao+2]+=ee.d[He*3+2]*Re}}Me=ye}for(let ue=0;ue<Ye;ue++){let Re=Me[ue*3],ee=Me[ue*3+1],He=Me[ue*3+2],Ao=zt[ue*3],Ue=zt[ue*3+1],Ko=zt[ue*3+2],br=0,ga=0,wo=0,No=0,jn=0,X=0;for(let de=0;de<4;de++){let Oe=Pe[ue*4+de];if(Oe===0)continue;let qe=ht[ce[ue*4+de]];br+=Oe*(qe[0]*Re+qe[4]*ee+qe[8]*He+qe[12]),ga+=Oe*(qe[1]*Re+qe[5]*ee+qe[9]*He+qe[13]),wo+=Oe*(qe[2]*Re+qe[6]*ee+qe[10]*He+qe[14]),No+=Oe*(qe[0]*Ao+qe[4]*Ue+qe[8]*Ko),jn+=Oe*(qe[1]*Ao+qe[5]*Ue+qe[9]*Ko),X+=Oe*(qe[2]*Ao+qe[6]*Ue+qe[10]*Ko)}_e[ue*3]=br,_e[ue*3+1]=ga,_e[ue*3+2]=wo;let yt=Math.hypot(No,jn,X)||1;le[ue*3]=No/yt,le[ue*3+1]=jn/yt,le[ue*3+2]=X/yt}be.grid&&!At&&!_&&!S&&pt(U),U.sway&&Ve(U),U.pb.subdata(_e),U.nbuf.subdata(le)}function pt(U){let[bt,Rt]=U.m.grid,zt=U.outP,ce=U.outN,Pe=lx.seat+.012;for(let _e=1;_e<bt;_e++){let le=Math.pow(1-_e/(bt-1),1.5);for(let ye=0;ye<Rt;ye++){let be=(_e*Rt+ye)*3;zt[be+1]>Pe?zt[be+1]=Pe+(zt[be+1]-Pe)*Math.max(le,.15):zt[be+1]=Pe}}for(let _e=0;_e<ce.length;_e+=3)ce[_e]=0,ce[_e+1]=1,ce[_e+2]=0}let At=!1,_t=(U,bt,Rt,zt,ce)=>({bone:B[U],rate:bt,damp:Rt,drag:zt,most:ce,x:[0,0,0],v:[0,0,0],p:null,vel:[0,0,0]}),Be={head:_t("Head",15,.32,.012,.035),chest:_t("Spine2",9,.38,.03,.1),hips:_t("Hips",7,.42,.045,.16)},je=-1;function Xe(U){let bt=je<0?0:U-je;je=U;for(let Rt in Be){let zt=Be[Rt],ce=ht[zt.bone],Pe=Nt[zt.bone],_e=Pe[12],le=Pe[13],ye=Pe[14],be=[ce[0]*_e+ce[4]*le+ce[8]*ye+ce[12],ce[1]*_e+ce[5]*le+ce[9]*ye+ce[13],ce[2]*_e+ce[6]*le+ce[10]*ye+ce[14]];if(!zt.p||!(bt>0)||bt>.25||Math.hypot(be[0]-zt.p[0],be[1]-zt.p[1],be[2]-zt.p[2])>.5){zt.p=be,zt.x=[0,0,0],zt.v=[0,0,0],zt.vel=[0,0,0];continue}let Ye=[(be[0]-zt.p[0])/bt,(be[1]-zt.p[1])/bt,(be[2]-zt.p[2])/bt],Me=Math.max(1,Math.ceil(bt/.016)),ue=bt/Me;for(let ee=0;ee<3;ee++){let He=Math.max(-30,Math.min(30,(Ye[ee]-zt.vel[ee])/bt)),Ao=-Ye[ee]*zt.drag;for(let Ue=0;Ue<Me;Ue++)zt.v[ee]+=((Ao-zt.x[ee])*zt.rate*zt.rate-2*zt.damp*zt.rate*zt.v[ee]-He)*ue,zt.x[ee]+=zt.v[ee]*ue}let Re=Math.hypot(zt.x[0],zt.x[1],zt.x[2]);if(Re>zt.most){let ee=zt.most/Re;zt.x=[zt.x[0]*ee,zt.x[1]*ee,zt.x[2]*ee]}zt.p=be,zt.vel=Ye}}for(let U of ot){let bt=U.m,Rt=bt.n,zt=null,ce=null;if(bt.kind===9){ce="head",zt=new Float32Array(Rt);for(let Pe=0;Pe<Rt;Pe++){let _e=U.uv[Pe*2]<-.5?0:U.uv[Pe*2+1];zt[Pe]=_e*_e}}else if(bt.name==="scarf"){ce="chest",zt=new Float32Array(Rt);for(let Pe=0;Pe<Rt;Pe++)zt[Pe]=l(1.52,1.12,U.pos[Pe*3+1])}else if(bt.grid){ce="hips",zt=new Float32Array(Rt);let Pe=bt.grid[0],_e=bt.grid[1];for(let le=0;le<Rt;le++)zt[le]=Math.pow(Math.floor(le/_e)/(Pe-1),1.6)}zt&&(U.sway=zt,U.spring=Be[ce],U.loose=ce)}function Ve(U){if(!At&&!S&&!_)return;let bt=U.spring.x,Rt=U.sway,zt=U.outP;if(!(Math.abs(bt[0])+Math.abs(bt[1])+Math.abs(bt[2])<1e-5))for(let ce=0,Pe=Rt.length;ce<Pe;ce++){let _e=Rt[ce];_e>0&&(zt[ce*3]+=bt[0]*_e,zt[ce*3+1]+=bt[1]*_e,zt[ce*3+2]+=bt[2]*_e)}}function zo(U,bt){At=!!bt;let Rt=to(U,bt);Xe(U);let zt={eyeBlinkLeft:Rt.blink,eyeBlinkRight:Rt.blink};for(let ce of ot)no(ce,Object.keys(ce.morphs).length?zt:null);a.pose=Rt}return{parts:ot,update:zo,drawOpaque:Bt,drawBlend:ze,state:a}}function l(N,G,q){let V=Math.min(1,Math.max(0,(q-N)/(G-N)));return V*V*(3-2*V)}let d=Rk(),u=Ok(),p=u?t.texture({data:u,flipY:!1,min:"linear",mag:"linear"}):c,f=t({vert:Ck,frag:Pk,attributes:{position:d.pos,normal:d.nrm,uv:d.uv,kind:d.kind},elements:new Uint16Array(d.idx),uniforms:{model:t.prop("model"),turn:0,fold:1.12,cover:p},cull:{enable:!1}}),v=$k(),m=t({vert:Ik,frag:qk,attributes:{position:v.pos,normal:v.nrm,color:v.col,mat:v.mat},elements:new Uint16Array(v.idx),uniforms:{model:t.prop("model"),pulse:t.prop("pulse")},cull:{enable:!1}}),g=t({vert:Dk,frag:Fk,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{center:t.prop("center"),size:t.prop("size"),pulse:t.prop("pulse")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});function x(N){let G=N.headM,q=ot=>{let Bt=Math.hypot(...ot)||1;return ot.map(ze=>ze/Bt)},V=q([G[4],G[5],G[6]]),D=q([G[8],G[9],G[10]]),B=V,dt=D.map(ot=>-ot),Gt=[dt[1]*B[2]-dt[2]*B[1],dt[2]*B[0]-dt[0]*B[2],dt[0]*B[1]-dt[1]*B[0]],Nt=N.headPos,xt=[0,1,2].map(ot=>Nt[ot]+V[ot]*.06+D[ot]*.185);return[Gt[0],Gt[1],Gt[2],0,dt[0],dt[1],dt[2],0,B[0],B[1],B[2],0,xt[0],xt[1],xt[2],1]}let y=-1,w="",M=null,_=null,S=!1;function R(N){if(!o)return;let G=(rx.motion,r()),q=M?[M.x,M.z,M.heading,M.phase].map(D=>D.toFixed(4)).join():"";(_||S||q!==w||!M&&Math.abs(G-y)>(rx.isPhone?1/30:0))&&(o.update(G,M),y=G,w=q);for(let D of o.parts)D.blend||(o.drawOpaque({pb:D.pb,nb:D.nbuf,uv:D.uvBuf,el:D.el,tex:D.tex,alphaCut:D.alphaCut,skin:D.skin,kind:D.kind,alphaScale:D.alphaScale}),D.sockEl&&o.drawOpaque({pb:D.pb,nb:D.nbuf,uv:D.uvBuf,el:D.sockEl,tex:c,alphaCut:0,skin:0,kind:8,alphaScale:1}));let V=o.state;if(V.headM&&!M&&!_&&!S){f({model:x(V)});let D=V.headPos,B=Math.sin(G*1.3)*.02,dt=[D[0],D[1]+.62+B,D[2]+.05],Gt=G*.6,Nt=pr(dt,an(ps([0,1,0],Gt),ps([0,0,1],.18)),[1.2,1.2,1.2]),xt=.5+.5*Math.sin(G*2);m({model:Nt,pulse:xt}),a.glowPos=dt,a.glow=.06+.03*xt,g({center:[dt[0],dt[1]-.12,dt[2]],size:.1,pulse:xt})}for(let D of o.parts)D.blend&&o.drawBlend({pb:D.pb,nb:D.nbuf,uv:D.uvBuf,el:D.el,tex:D.tex,alphaCut:D.alphaCut,skin:D.skin,kind:D.kind,alphaScale:D.alphaScale})}return R.state=a,R.place=ci,R.setWalk=N=>{M=N||null,M&&(a.glow=0)},R.setSeat=N=>{_=N||null,a.glow=_?0:a.glow,y=-1},R.setPiano=N=>{N=!!N,N!==S&&(S=N,S&&(a.glow=0),y=-1)},R};Ad.exports.PLACE=ci});var Td=Et((EA,px)=>{"use strict";px.exports={name:"Muzammil",title:"Hi, I\u2019m Muzammil.",text:`I\u2019m a self-taught artist. I paint emotions. Grief, longing, love, and the quiet ways we keep holding on. I borrow the light and stillness of the Renaissance to talk about very modern feelings.

This gallery is my portfolio, built brick by pixel, so my work has a home that never closes. Every painting comes with a few words, because some feelings need both a frame and a sentence.

You\u2019ll find me in the tree court, catching sunlight and trying not to get too absorbed. Wander the halls, stay as long as you like, and don\u2019t worry about the time. In here, the only thing that\u2019s drying is the paint.`}});var Nd=Et((zA,bx)=>{"use strict";var xx=Sr(),vx=ul(),vs=t=>String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function Ld(){return xx.isPhone||!window.matchMedia||!window.matchMedia("(pointer: fine)").matches?!1:window.innerWidth>=900&&window.innerHeight>=520}var Gk=`
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
`,mx=!1;function yx(){if(mx)return;mx=!0;let t=document.createElement("style");t.textContent=Gk,document.head.appendChild(t)}var Hk='<svg class="visit-play" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="10.2"/><path d="M10 8.4l6 3.6-6 3.6z" fill="currentColor" stroke="none"/></svg>';function Uk(t){return!t||!t.visit||!Ld()?"":(yx(),`<button type="button" class="visit-btn" data-visit="${vs(t.slug||"")}" aria-label="Visit what remained: watch ${vs(t.title)} come to life">${Hk}<span>Visit what remained</span></button>`)}function Bk(t){let e=t.getContext("2d");t.width=t.height=160;let o=e.createImageData(160,160),n=!0,r=0;return function a(i){if(n){if(i-r>70){r=i;let s=o.data;for(let c=0;c<s.length;c+=4){let h=Math.random()*255;s[c]=s[c+1]=s[c+2]=h,s[c+3]=255}e.putImageData(o,0,0),t.style.transform=`translate(${(Math.random()*6-3).toFixed(1)}%, ${(Math.random()*6-3).toFixed(1)}%)`}requestAnimationFrame(a)}}(0),()=>{n=!1}}var ef=null;function jk(t){if(ef||!t||!t.visit)return;yx();let e=document.activeElement;document.body.classList.add("visiting");let o="images/web/"+t.slug+(xx.isPhone?"-1024":"")+".webp",n=document.createElement("div");n.className="visit",n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.setAttribute("aria-label","Visiting "+t.title),n.innerHTML=`
		<video muted playsinline preload="auto" ${t.visit.poster?`poster="${vs(t.visit.poster)}"`:""}></video>
		<img class="visit-art" alt="${vs(t.title)}, ${vs(vx(t))}" src="${vs(o)}">
		<canvas class="visit-grain" aria-hidden="true"></canvas>
		<div class="visit-vignette" aria-hidden="true"></div>
		<div class="visit-bar top" aria-hidden="true"></div>
		<div class="visit-bar bottom" aria-hidden="true"></div>
		<div class="visit-title">
			<span class="visit-kicker">A visit</span>
			<span class="visit-name">${vs(t.title)}</span>
			<span class="visit-meta">${vs(vx(t))}</span>
		</div>
		<button type="button" class="visit-close" aria-label="Return to the gallery">\xD7</button>
		<button type="button" class="visit-skip">Skip</button>
		<div class="visit-end">
			<button type="button" class="primary" data-act="back">Return to the gallery</button>
			<button type="button" data-act="again">Watch again</button>
		</div>`,document.body.appendChild(n);let r=n.querySelector("video"),a=n.querySelector(".visit-title"),i=Bk(n.querySelector(".visit-grain")),s=[],c=(m,g)=>s.push(setTimeout(m,g)),h=m=>m.stopPropagation();["mousedown","pointerdown","click","wheel","touchstart","touchmove"].forEach(m=>n.addEventListener(m,h));let l=m=>{m.key==="Escape"?(m.preventDefault(),v()):m.key===" "&&!(m.target&&m.target.tagName==="BUTTON")&&(m.preventDefault(),p()),m.stopImmediatePropagation()};window.addEventListener("keydown",l,!0);let d=m=>m.stopImmediatePropagation();window.addEventListener("keyup",d,!0);let u=!1;function p(){u||(u=!0,a.classList.add("on"),n.classList.add("resolved"),c(()=>{let m=n.querySelector('[data-act="back"]');m&&m.focus({preventScroll:!0})},1300))}function f(){u=!1,n.classList.remove("resolved"),a.classList.remove("on");try{r.currentTime=0}catch(g){}let m=r.play();m&&m.catch&&m.catch(()=>p()),n.classList.add("playing"),c(()=>{u||a.classList.add("on")},1600),c(()=>{u||a.classList.remove("on")},6200)}r.addEventListener("timeupdate",()=>{r.duration&&r.currentTime>r.duration-1.2&&p()}),r.addEventListener("ended",p),r.addEventListener("error",p);function v(){if(ef){ef=null,s.forEach(clearTimeout),n.classList.remove("on");try{r.pause()}catch(m){}window.removeEventListener("keydown",l,!0),window.removeEventListener("keyup",d,!0),document.body.classList.remove("visiting"),setTimeout(()=>{i(),n.remove(),e&&e.focus&&e.focus({preventScroll:!0})},1150)}}n.querySelector(".visit-close").addEventListener("click",v),n.querySelector(".visit-skip").addEventListener("click",()=>{try{r.pause()}catch(m){}p()}),n.querySelector(".visit-end").addEventListener("click",m=>{let g=m.target.closest("button");g&&(g.dataset.act==="back"&&v(),g.dataset.act==="again"&&(s.forEach(clearTimeout),f()))}),r.src=t.visit.video,ef={close:v},requestAnimationFrame(()=>{n.classList.add("on"),c(f,1300)})}var gx={};function Wk(t){if(!t||!t.visit||gx[t.visit.video]||!Ld())return;gx[t.visit.video]=!0;let e=document.createElement("link");e.rel="preload",e.as="video",e.href=t.visit.video,document.head.appendChild(e)}bx.exports={available:Ld,button:Uk,open:jk,warm:Wk,get active(){return!!ef}}});var Mx=Et((AA,_x)=>{"use strict";var Vk=Sr(),Ec=[0,0],_c=[0,0],$a=null,Od=0;if(typeof window!="undefined"){window.addEventListener("pointermove",e=>{e.pointerType!=="touch"&&(Ec[0]=Math.max(-1,Math.min(1,e.clientX/window.innerWidth*2-1)),Ec[1]=Math.max(-1,Math.min(1,e.clientY/window.innerHeight*2-1)),Od=performance.now())},{passive:!0});let t=()=>{Od=performance.now()};["wheel","touchstart","touchmove","keydown","pointerdown"].forEach(e=>window.addEventListener(e,t,{passive:!0,capture:!0})),window.addEventListener("deviceorientation",e=>{e.gamma===null||e.beta===null||($a||($a=[e.gamma,e.beta]),$a[0]+=(e.gamma-$a[0])*.01,$a[1]+=(e.beta-$a[1])*.01,Ec[0]=Math.max(-1,Math.min(1,(e.gamma-$a[0])/14)),Ec[1]=Math.max(-1,Math.min(1,(e.beta-$a[1])/14)))},{passive:!0})}var wx=0,Mc=null,o1=null,pa=[0,0,0],Rd=0,kc=null,Sc=0,li={eye:[0,0,0],target:[0,0,0],fov:50,roll:0},Xk={apply(t,e){let o=Math.min(.1,Math.max(0,e-wx));wx=e;let n=t.eye,r=t.target,a=[r[0]-n[0],r[1]-n[1],r[2]-n[2]],i=Math.hypot(a[0],a[1],a[2])||1;a=[a[0]/i,a[1]/i,a[2]/i];let s=[-a[2],0,a[0]],c=Math.hypot(s[0],s[2])||1;s=[s[0]/c,0,s[2]/c];let h=[s[1]*a[2]-s[2]*a[1],s[2]*a[0]-s[0]*a[2],s[0]*a[1]-s[1]*a[0]],l=!Mc;if(Mc&&o>0){let y=[n[0]-Mc[0],n[1]-Mc[1],n[2]-Mc[2]],w=Math.hypot(y[0],y[1],y[2]);if(w>2.5)l=!0;else{let _=Math.min(1,o*5);for(let S=0;S<3;S++)pa[S]+=(y[S]/o-pa[S])*_}let M=Math.hypot(r[0]-o1[0],r[1]-o1[1],r[2]-o1[2]);Sc=w/o<.12&&M/o<.2?Sc+o:0}l&&(pa[0]=pa[1]=pa[2]=0,Sc=0),Mc=n.slice(),o1=r.slice(),Rd=Math.hypot(pa[0],pa[1],pa[2]);let d=Math.min(1,o*2.6);_c[0]+=(Ec[0]-_c[0])*d,_c[1]+=(Ec[1]-_c[1])*d;let u=Math.max(.03,Math.min(.32,i*.05)),p=(Vk.isPhone&&!$a?1.5:1)*Math.min(1,Sc/2.5),f=(Math.sin(e*.131)*.55+Math.sin(e*.071+1.3)*.45)*u*.55*p,v=Math.sin(e*.097+.6)*u*.16*p,m=_c[0]*u+f,g=-_c[1]*u*.45+v;for(let y=0;y<3;y++)li.eye[y]=n[y]+s[y]*m+h[y]*g,li.target[y]=r[y]+(s[y]*m+h[y]*g)*.12;n[1]>.05&&(li.eye[1]=Math.max(.05,li.eye[1]));let x=pa[0]*s[0]+pa[2]*s[2];return li.fov=t.fov+Math.min(3.5,Rd*.55),li.roll=(t.roll||0)+Math.max(-.035,Math.min(.035,-x*.006)),li},pull(t,e){(kc===null||!(Math.abs(t.focus-kc)<40))&&(kc=t.focus);let o=1/60;kc+=(t.focus-kc)*Math.min(1,o*3.2),t.focus=kc,t.aperture>0&&(t.aperture*=1+.25*Math.min(1,Sc/3))},get speed(){return Rd},get resting(){return Sc>2&&performance.now()-Od>2e3}};_x.exports=Xk});var Cd=Et((TA,kx)=>{kx.exports=1e-6});var Pd=Et((LA,Sx)=>{Sx.exports=Yk;function Yk(){var t=new Float32Array(3);return t[0]=0,t[1]=0,t[2]=0,t}});var zx=Et((NA,Ex)=>{Ex.exports=Kk;function Kk(t){var e=new Float32Array(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}});var $d=Et((RA,Ax)=>{Ax.exports=Qk;function Qk(t,e,o){var n=new Float32Array(3);return n[0]=t,n[1]=e,n[2]=o,n}});var Id=Et((OA,Tx)=>{Tx.exports=Zk;function Zk(t,e){var o=e[0],n=e[1],r=e[2],a=o*o+n*n+r*r;return a>0&&(a=1/Math.sqrt(a),t[0]=e[0]*a,t[1]=e[1]*a,t[2]=e[2]*a),t}});var qd=Et((CA,Lx)=>{Lx.exports=Jk;function Jk(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}});var Cx=Et((PA,Ox)=>{Ox.exports=eS;var Nx=$d(),Rx=Id(),tS=qd();function eS(t,e){var o=Nx(t[0],t[1],t[2]),n=Nx(e[0],e[1],e[2]);Rx(o,o),Rx(n,n);var r=tS(o,n);return r>1?0:Math.acos(r)}});var $x=Et(($A,Px)=>{Px.exports=oS;function oS(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}});var qx=Et((IA,Ix)=>{Ix.exports=nS;function nS(t,e,o,n){return t[0]=e,t[1]=o,t[2]=n,t}});var Fx=Et((qA,Dx)=>{Dx.exports=rS;var Dd=Cd();function rS(t,e){var o=t[0],n=t[1],r=t[2],a=e[0],i=e[1],s=e[2];return Math.abs(o-a)<=Dd*Math.max(1,Math.abs(o),Math.abs(a))&&Math.abs(n-i)<=Dd*Math.max(1,Math.abs(n),Math.abs(i))&&Math.abs(r-s)<=Dd*Math.max(1,Math.abs(r),Math.abs(s))}});var Hx=Et((DA,Gx)=>{Gx.exports=aS;function aS(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}});var Bx=Et((FA,Ux)=>{Ux.exports=sS;function sS(t,e,o){return t[0]=e[0]+o[0],t[1]=e[1]+o[1],t[2]=e[2]+o[2],t}});var Fd=Et((GA,jx)=>{jx.exports=iS;function iS(t,e,o){return t[0]=e[0]-o[0],t[1]=e[1]-o[1],t[2]=e[2]-o[2],t}});var Vx=Et((HA,Wx)=>{Wx.exports=Fd()});var Gd=Et((UA,Xx)=>{Xx.exports=cS;function cS(t,e,o){return t[0]=e[0]*o[0],t[1]=e[1]*o[1],t[2]=e[2]*o[2],t}});var Kx=Et((BA,Yx)=>{Yx.exports=Gd()});var Hd=Et((jA,Qx)=>{Qx.exports=lS;function lS(t,e,o){return t[0]=e[0]/o[0],t[1]=e[1]/o[1],t[2]=e[2]/o[2],t}});var Jx=Et((WA,Zx)=>{Zx.exports=Hd()});var e5=Et((VA,t5)=>{t5.exports=fS;function fS(t,e,o){return t[0]=Math.min(e[0],o[0]),t[1]=Math.min(e[1],o[1]),t[2]=Math.min(e[2],o[2]),t}});var n5=Et((XA,o5)=>{o5.exports=hS;function hS(t,e,o){return t[0]=Math.max(e[0],o[0]),t[1]=Math.max(e[1],o[1]),t[2]=Math.max(e[2],o[2]),t}});var a5=Et((YA,r5)=>{r5.exports=uS;function uS(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t[2]=Math.floor(e[2]),t}});var i5=Et((KA,s5)=>{s5.exports=dS;function dS(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t[2]=Math.ceil(e[2]),t}});var l5=Et((QA,c5)=>{c5.exports=pS;function pS(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t[2]=Math.round(e[2]),t}});var h5=Et((ZA,f5)=>{f5.exports=vS;function vS(t,e,o){return t[0]=e[0]*o,t[1]=e[1]*o,t[2]=e[2]*o,t}});var d5=Et((JA,u5)=>{u5.exports=mS;function mS(t,e,o,n){return t[0]=e[0]+o[0]*n,t[1]=e[1]+o[1]*n,t[2]=e[2]+o[2]*n,t}});var Ud=Et((t7,p5)=>{p5.exports=gS;function gS(t,e){var o=e[0]-t[0],n=e[1]-t[1],r=e[2]-t[2];return Math.sqrt(o*o+n*n+r*r)}});var m5=Et((e7,v5)=>{v5.exports=Ud()});var Bd=Et((o7,g5)=>{g5.exports=xS;function xS(t,e){var o=e[0]-t[0],n=e[1]-t[1],r=e[2]-t[2];return o*o+n*n+r*r}});var y5=Et((n7,x5)=>{x5.exports=Bd()});var jd=Et((r7,b5)=>{b5.exports=yS;function yS(t){var e=t[0],o=t[1],n=t[2];return Math.sqrt(e*e+o*o+n*n)}});var _5=Et((a7,w5)=>{w5.exports=jd()});var Wd=Et((s7,M5)=>{M5.exports=bS;function bS(t){var e=t[0],o=t[1],n=t[2];return e*e+o*o+n*n}});var S5=Et((i7,k5)=>{k5.exports=Wd()});var z5=Et((c7,E5)=>{E5.exports=wS;function wS(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}});var T5=Et((l7,A5)=>{A5.exports=_S;function _S(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}});var N5=Et((f7,L5)=>{L5.exports=MS;function MS(t,e,o){var n=e[0],r=e[1],a=e[2],i=o[0],s=o[1],c=o[2];return t[0]=r*c-a*s,t[1]=a*i-n*c,t[2]=n*s-r*i,t}});var O5=Et((h7,R5)=>{R5.exports=kS;function kS(t,e,o,n){var r=e[0],a=e[1],i=e[2];return t[0]=r+n*(o[0]-r),t[1]=a+n*(o[1]-a),t[2]=i+n*(o[2]-i),t}});var P5=Et((u7,C5)=>{C5.exports=SS;function SS(t,e){e=e||1;var o=Math.random()*2*Math.PI,n=Math.random()*2-1,r=Math.sqrt(1-n*n)*e;return t[0]=Math.cos(o)*r,t[1]=Math.sin(o)*r,t[2]=n*e,t}});var I5=Et((d7,$5)=>{$5.exports=ES;function ES(t,e,o){var n=e[0],r=e[1],a=e[2],i=o[3]*n+o[7]*r+o[11]*a+o[15];return i=i||1,t[0]=(o[0]*n+o[4]*r+o[8]*a+o[12])/i,t[1]=(o[1]*n+o[5]*r+o[9]*a+o[13])/i,t[2]=(o[2]*n+o[6]*r+o[10]*a+o[14])/i,t}});var D5=Et((p7,q5)=>{q5.exports=zS;function zS(t,e,o){var n=e[0],r=e[1],a=e[2];return t[0]=n*o[0]+r*o[3]+a*o[6],t[1]=n*o[1]+r*o[4]+a*o[7],t[2]=n*o[2]+r*o[5]+a*o[8],t}});var G5=Et((v7,F5)=>{F5.exports=AS;function AS(t,e,o){var n=e[0],r=e[1],a=e[2],i=o[0],s=o[1],c=o[2],h=o[3],l=h*n+s*a-c*r,d=h*r+c*n-i*a,u=h*a+i*r-s*n,p=-i*n-s*r-c*a;return t[0]=l*h+p*-i+d*-c-u*-s,t[1]=d*h+p*-s+u*-i-l*-c,t[2]=u*h+p*-c+l*-s-d*-i,t}});var U5=Et((m7,H5)=>{H5.exports=TS;function TS(t,e,o,n){var r=o[1],a=o[2],i=e[1]-r,s=e[2]-a,c=Math.sin(n),h=Math.cos(n);return t[0]=e[0],t[1]=r+i*h-s*c,t[2]=a+i*c+s*h,t}});var j5=Et((g7,B5)=>{B5.exports=LS;function LS(t,e,o,n){var r=o[0],a=o[2],i=e[0]-r,s=e[2]-a,c=Math.sin(n),h=Math.cos(n);return t[0]=r+s*c+i*h,t[1]=e[1],t[2]=a+s*h-i*c,t}});var V5=Et((x7,W5)=>{W5.exports=NS;function NS(t,e,o,n){var r=o[0],a=o[1],i=e[0]-r,s=e[1]-a,c=Math.sin(n),h=Math.cos(n);return t[0]=r+i*h-s*c,t[1]=a+i*c+s*h,t[2]=e[2],t}});var Y5=Et((y7,X5)=>{X5.exports=RS;var ms=Pd()();function RS(t,e,o,n,r,a){var i,s;for(e||(e=3),o||(o=0),n?s=Math.min(n*e+o,t.length):s=t.length,i=o;i<s;i+=e)ms[0]=t[i],ms[1]=t[i+1],ms[2]=t[i+2],r(ms,ms,a),t[i]=ms[0],t[i+1]=ms[1],t[i+2]=ms[2];return t}});var Q5=Et((b7,K5)=>{K5.exports={EPSILON:Cd(),create:Pd(),clone:zx(),angle:Cx(),fromValues:$d(),copy:$x(),set:qx(),equals:Fx(),exactEquals:Hx(),add:Bx(),subtract:Fd(),sub:Vx(),multiply:Gd(),mul:Kx(),divide:Hd(),div:Jx(),min:e5(),max:n5(),floor:a5(),ceil:i5(),round:l5(),scale:h5(),scaleAndAdd:d5(),distance:Ud(),dist:m5(),squaredDistance:Bd(),sqrDist:y5(),length:jd(),len:_5(),squaredLength:Wd(),sqrLen:S5(),negate:z5(),inverse:T5(),normalize:Id(),dot:qd(),cross:N5(),lerp:O5(),random:P5(),transformMat4:I5(),transformMat3:D5(),transformQuat:G5(),rotateX:U5(),rotateY:j5(),rotateZ:V5(),forEach:Y5()}});var ty=Et((w7,J5)=>{"use strict";function Z5(){let t={};return{on(e,o){return(t[e]=t[e]||[]).push(o),this},emit(e,o){(t[e]||[]).slice().forEach(n=>n(o))}}}J5.exports=function(e){let o=e.ownerDocument||document,n=Z5(),r=null,a={dx:0,dy:0,dt:0},i=0,s=()=>o.pointerLockElement||o.webkitPointerLockElement||null,c=()=>{if(s())return;let l=e.requestPointerLock||e.webkitRequestPointerLock;if(l)try{let d=l.call(e);d&&d.catch&&d.catch(()=>{})}catch(d){}};e.addEventListener("mousedown",c,!1);let h=()=>{if(!s()){r&&(n.emit("release"),r.emit("end"),r=null);return}r=Z5(),i=Date.now(),n.emit("attain",r)};return o.addEventListener("pointerlockchange",h),o.addEventListener("webkitpointerlockchange",h),o.addEventListener("pointerlockerror",()=>n.emit("error")),(o.body||e).addEventListener("mousemove",l=>{r&&(a.dx=l.movementX||l.webkitMovementX||0,a.dy=l.movementY||l.webkitMovementY||0,a.dt=Date.now()-i,n.emit("data",a),r.emit("data",a))},!1),n.request=c,n.target=s,n.release=()=>{s()&&(o.exitPointerLock||o.webkitExitPointerLock).call(o)},n}});var ay=Et((k7,ry)=>{"use strict";var fi=cc(),hi=Q5(),OS=ty(),_7=Math.PI/4,M7=Math.PI/6,ey=2,CS=1,PS=2.4,$S=2.4,IS=1e3,qS=5,DS=7,Vd=M0().C,of=[[7,1.6],[7,Vd.zc],[Vd.x1-2.95,Vd.zc]],gs=of.slice(1).map((t,e)=>{let o=of[e],n=t[0]-o[0],r=t[1]-o[1],a=Math.hypot(n,r);return{a:o,len:a,dir:[n/a,r/a]}}),Xd=gs.reduce((t,e)=>t+e.len,0);function oy(t){let e=Math.max(0,Math.min(Xd,t));for(let n of gs){if(e<=n.len)return[n.a[0]+n.dir[0]*e,n.a[1]+n.dir[1]*e];e-=n.len}let o=of[of.length-1];return[o[0],o[1]]}function FS(t){let e=0;for(let n=0;n<gs.length;n++){let r=gs[n],a=e+r.len;if(t<a-1e-4||n===gs.length-1){let i=r.dir,c=t<=e+1e-4&&n>0?gs[n-1].dir:r.dir;return{ahead:i,back:[-c[0],-c[1]]}}e=a}let o=gs[gs.length-1].dir;return{ahead:o,back:[-o[0],-o[1]]}}var GS=Math.PI/4,HS=7,US=140,BS=70,ny=(t,e,o)=>(1-t)*e+t*o,jS=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;ry.exports=function({getGridSegments:t,getGridParts:e},o){var n=[0,Math.PI],r=[0,Math.PI],a=0,i=[0,0,0],s=[DS,ey,of[0][1]],c=0,h=1,l=0,d=[.707,0,.707],u=[0,1,0],p=[0,0,0],f=.5,v=fi.identity([]),m=fi.identity([]),g=!1,x=[0,0,0],y=[0,0,0],w=1,M=!1;let _=lt=>{n[1]+=lt*GS},S=(lt,It,Jt)=>{if(lt=Math.max(Math.min(lt,100),-100),It=Math.max(Math.min(It,100),-100),n[0]=0,M){a=0;return}for(a+=lt;a>=Jt;)_(1),a-=Jt;for(;a<=-Jt;)_(-1),a+=Jt};OS(document.body).on("attain",lt=>{lt.on("data",It=>{S(It.dx,It.dy,US)})});let N=null,G=null,q=0,V={x:0,y:0},D=58,B=document.createElement("div");B.id="museum-mobile-controls",B.innerHTML=`

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
	`,document.body.appendChild(B);let dt=B.querySelector("#museum-joystick"),Gt=B.querySelector("#museum-joystick-knob"),Nt=()=>{Gt.style.transform="translate(-50%, -50%)",i[0]=0,i[2]=0},xt=lt=>{let It=lt.clientX-V.x,Jt=lt.clientY-V.y,me=Math.hypot(It,Jt);if(me>D&&(It=It/me*D,Jt=Jt/me*D),Gt.style.transform=`translate(
				calc(-50% + ${It}px),
				calc(-50% + ${Jt}px)
			)`,me<10){i[0]=0,i[2]=0;return}let te=It/D,se=Jt/D;i[0]=0,i[2]=Math.abs(se)>.15?se:0},ot=(lt,It)=>{for(let Jt=0;Jt<lt.length;Jt++)if(lt[Jt].identifier===It)return lt[Jt];return null},Bt=lt=>!!(lt&&lt.closest&&lt.closest(".painting-plaque, .story-overlay, .story-card, .story-close, button")),ze=lt=>{if(!Bt(lt.target)&&(lt.cancelable&&lt.preventDefault(),!M))for(let It=0;It<lt.changedTouches.length;It++){let Jt=lt.changedTouches[It];if(N===null&&Jt.clientX<window.innerWidth*.48){N=Jt.identifier;let me=dt.getBoundingClientRect();V.x=me.left+me.width/2,V.y=me.top+me.height/2,xt(Jt)}else G===null&&Jt.clientX>=window.innerWidth*.48&&(G=Jt.identifier,q=Jt.clientX,a=0)}},Se=lt=>{if(Bt(lt.target)||(lt.cancelable&&lt.preventDefault(),M))return;let It=N===null?null:ot(lt.touches,N);It&&xt(It);let Jt=G===null?null:ot(lt.touches,G);if(Jt){let me=Jt.clientX-q;q=Jt.clientX,S(me,0,BS)}},De=lt=>{if(!Bt(lt.target)){lt.cancelable&&lt.preventDefault();for(let It=0;It<lt.changedTouches.length;It++){let Jt=lt.changedTouches[It];Jt.identifier===N&&(N=null,Nt()),Jt.identifier===G&&(G=null)}}};document.addEventListener("touchstart",ze,{passive:!1}),document.addEventListener("touchmove",Se,{passive:!1}),document.addEventListener("touchend",De,{passive:!1}),document.addEventListener("touchcancel",De,{passive:!1});let Ee=document.createElement("style");Ee.textContent=`

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
	`,document.head.appendChild(Ee);var rt={};let ht=lt=>{if(lt.defaultPrevented||lt.ctrlKey||lt.altKey||lt.metaKey)return;let It=lt.type==="keydown";rt[lt.code]=It,It&&!lt.repeat&&!M&&((lt.code==="KeyA"||lt.code==="ArrowLeft")&&_(-1),(lt.code==="KeyD"||lt.code==="ArrowRight")&&_(1)),g=!1;let Jt=rt.KeyW||rt.ArrowUp?1:0;i=[0,0,(rt.KeyS||rt.ArrowDown?1:0)-Jt],lt.preventDefault()};window.addEventListener("keydown",ht),window.addEventListener("keyup",ht);var oe=0;return{pos:s,fmouse:r,forward:d,up:u,setPaused:lt=>{M=!!lt,M&&(i[0]=0,i[2]=0,Nt())},place:(lt,It)=>{c=Math.max(0,Math.min(Xd,lt));let Jt=oy(c);s[0]=Jt[0],s[2]=Jt[1],n[1]=It,r[1]=It,a=0,h=1},view:()=>v,proj:()=>(fi.perspective(m,o(),window.innerWidth/window.innerHeight,.1,700),m),tick:({time:lt})=>{let It=lt-oe;oe=lt;let Jt=[0,0,0],me=[];hi.set(d,Math.sin(r[1]),0,-Math.cos(r[1])),hi.set(u,0,1,0);let xe=g?$S:PS,te=Math.sin(n[1]),se=-Math.cos(n[1]),ut=FS(c),Vt=te*ut.ahead[0]+se*ut.ahead[1],he=te*ut.back[0]+se*ut.back[1],Ht=h;Math.max(Vt,he)>.3&&(Ht=Vt>=he?1:-1);let Lt=M?0:-i[2]*xe;l+=(Lt-l)*(1-Math.exp(-Math.min(It,.1)*5.5)),Lt===0&&Math.abs(l)<.01&&(l=0);let Je=l*Ht*Math.min(It,.1);M&&(i[0]=0,i[2]=0,Je=0,l=0),Je!==0&&(h=Math.sign(Je)*Math.sign(-i[2]||1)),c=Math.max(0,Math.min(Xd,c+Je));let k=oy(c);hi.set(p,k[0]-s[0],0,k[1]-s[2]);let to=hi.len(p);to===0&&f!==.25&&(f=(Math.abs((f+.5)%1-.5)-.25)*.8+.25,(f+.01)%.25<.02&&(f=.25));let no=f;if(f+=to/(g?qS:IS),s[1]=ey,hi.add(s,s,p),w<1){w+=It/CS,w=Math.min(w,1);let pt=jS(w);hi.set(s,ny(pt,x[0],y[0]),s[1],ny(pt,x[2],y[2]))}r[0]=0,r[1]+=(n[1]-r[1])*Math.min(1,Math.min(It,.1)*HS),Math.abs(n[1]-r[1])<5e-4&&(r[1]=n[1]),fi.identity(v),fi.rotateX(v,v,0),fi.rotateY(v,v,r[1]),fi.translate(v,v,hi.scale(Jt,s,-1))}}}});var cy=Et((S7,iy)=>{"use strict";var{skylightGLSL:WS,Z_START:VS,Z_END:XS,GLASS_Y:YS}=Ki(),{oculusGLSL:KS,A:ui}=Ar(),{windowLightGLSL:QS,C:n1}=M0(),{doorLightGLSL:ZS}=Va(),r1=i0(),nf=Nh(),sy=Ks(),Or=t=>t.toFixed(4),Yd=.1,Kd=700,zc={exposure:.88,shafts:1,bloom:1,vignette:.42,grain:.032};function JS(t,e){let o=e[0],n=e[1],r=e[2],a=e[3],i=e[4],s=e[5],c=e[6],h=e[7],l=e[8],d=e[9],u=e[10],p=e[11],f=e[12],v=e[13],m=e[14],g=e[15],x=o*s-n*i,y=o*c-r*i,w=o*h-a*i,M=n*c-r*s,_=n*h-a*s,S=r*h-a*c,R=l*v-d*f,N=l*m-u*f,G=l*g-p*f,q=d*m-u*v,V=d*g-p*v,D=u*g-p*m,B=x*D-y*V+w*q+M*G-_*N+S*R;return B?(B=1/B,t[0]=(s*D-c*V+h*q)*B,t[1]=(r*V-n*D-a*q)*B,t[2]=(v*S-m*_+g*M)*B,t[3]=(u*_-d*S-p*M)*B,t[4]=(c*G-i*D-h*N)*B,t[5]=(o*D-r*G+a*N)*B,t[6]=(m*w-f*S-g*y)*B,t[7]=(l*S-u*w+p*y)*B,t[8]=(i*V-s*G+h*R)*B,t[9]=(n*G-o*V-a*R)*B,t[10]=(f*_-v*w+g*x)*B,t[11]=(d*w-l*_-p*x)*B,t[12]=(s*N-i*q-c*R)*B,t[13]=(o*q-n*N+r*R)*B,t[14]=(v*y-f*M-m*x)*B,t[15]=(l*M-d*y+u*x)*B,t):null}function tE(t,e,o){let n=new Array(16);for(let r=0;r<4;r++)for(let a=0;a<4;a++){let i=0;for(let s=0;s<4;s++)i+=e[s*4+a]*o[r*4+s];n[r*4+a]=i}for(let r=0;r<16;r++)t[r]=n[r];return t}var eE=`
precision highp float;
attribute vec2 position;
varying vec2 uv;
void main() {
	uv = position * 0.5 + 0.5;
	gl_Position = vec4(position, 0.0, 1.0);
}`;iy.exports=(t,e)=>{let o=!!e.isPhone,n=t.hasExtension("webgl_depth_texture"),r=o?10:18,a=()=>e.post>=2?2:4,i=ot=>t.texture(Object.assign({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"},ot||{})),s=()=>t.framebuffer({color:i(),depth:!1}),c=i(),h=n?t.texture({width:4,height:4,format:"depth",type:"uint32"}):null,l=t.framebuffer({color:c,depth:h||!0}),d=[s(),s()],u=[s(),s()],p=[s(),s()],f=[s(),s()],v=new Array(16).fill(0),m=new Array(16).fill(0),g=[0,0,0],x={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},y={position:[-1,-1,3,-1,-1,3]},w=(ot,Bt,ze)=>t(Object.assign({vert:eE,frag:ot,attributes:y,count:3,depth:{enable:!1,mask:!1},cull:{enable:!1},blend:{enable:!1},uniforms:Bt,framebuffer:t.prop("out")},ze||{})),M=[2.6,0,VS-3.2,12.6,YS,XS+.4],_=[ui.x0-.2,0,ui.z0,ui.x1,ui.domeTop,ui.z1],S=[n1.x0,0,n1.z0,n1.x1,7.6,n1.z1],R=[.35,0,.35,13.65,7.6,9],N=sy.AIR_BOX,G=ot=>`vec3(${Or(ot[0])}, ${Or(ot[1])}, ${Or(ot[2])}), vec3(${Or(ot[3])}, ${Or(ot[4])}, ${Or(ot[5])})`,q=w(`
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
					if (p.y < ${Or(ui.dome.base)} && p.x > ${Or(ui.x0-.1)}) acc += oculusOpen(p) * treeShade(p) * air(p);
				}
				float ph = phase(dot(rd, SHAFT), 0.6) + 0.05;
				sum += mix(vec3(1.0, 0.88, 0.68), vec3(0.62, 0.74, 1.0) * 1.2, night) * acc * st * ph * strength.y;
			}
		}

		// the corridor windows
		if (strength.z > 0.0) {
			vec2 t = hitBox(eye, rd, ${G(S)});
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
			vec2 t = hitBox(eye, rd, ${G(R)});
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
	}`,{depthTex:()=>h,invVP:()=>v,eye:()=>g,time:t.context("time"),night:()=>r1.night,strength:()=>V,strength5:()=>D}),V=[0,0,0,0],D=0;function B(){let ot=zc.shafts*x.shafts,Bt=r1.night;return V[0]=nf.box(M)?.06*ot*(1+.9*Bt):0,V[1]=nf.box(_,!1,"court")?.1*ot*(1+.9*Bt):0,V[2]=nf.box(S)?.07*ot*(1+.4*Bt):0,V[3]=nf.box(R)?.04*ot*(1-.75*Bt):0,nf.zone==="studio"?(V[0]=V[1]=V[2]=V[3]=0,D=.03*ot*(1+1.3*Bt)):D=0,V[0]+V[1]+V[2]+V[3]+D>5e-4}let dt=w(`
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
	}`,{src:t.prop("src"),dir:(ot,Bt)=>[Bt.dir[0]/Bt.size[0],Bt.dir[1]/Bt.size[1]]}),Gt=w(`
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
	}`,{src:t.prop("src"),texel:(ot,Bt)=>[.5/Bt.size[0],.5/Bt.size[1]],threshold:t.prop("threshold")}),Nt=w(`
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
	}`,{scene:()=>c,depthTex:()=>h||c,soft:()=>d[0],bloomA:()=>u[0],bloomB:()=>p[0],shafts:()=>f[0],res:()=>[l.width,l.height],time:t.context("time"),exposure:()=>zc.exposure*x.exposure,vignette:()=>Math.min(1,zc.vignette+x.vignette+.22*r1.night),night:()=>r1.night,grain:()=>zc.grain,bloomK:()=>zc.bloom,letterbox:()=>x.letterbox,fade:()=>x.fade,fadeColor:()=>x.fadeColor,aperture:()=>e.post>=2?x.aperture:0,focus:()=>x.focus,hasDepth:n?1:0},{framebuffer:null}),xt=t({framebuffer:()=>l});return{shot:x,look:zc,hasDepth:n,capture(ot,Bt,ze){let Se=Math.max(.4,Math.min(1,e.scale||1)),De=Math.max(2,Math.round(ot.drawingBufferWidth*Se/2)*2),Ee=Math.max(2,Math.round(ot.drawingBufferHeight*Se/2)*2);(l.width!==De||l.height!==Ee)&&l.resize(De,Ee);let rt=Math.max(1,Math.ceil(De/2)),ht=Math.max(1,Math.ceil(Ee/2));d.forEach(oe=>oe.resize(rt,ht)),u.forEach(oe=>oe.resize(Math.max(1,Math.ceil(De/4)),Math.max(1,Math.ceil(Ee/4)))),p.forEach(oe=>oe.resize(Math.max(1,Math.ceil(De/8)),Math.max(1,Math.ceil(Ee/8)))),f.forEach(oe=>oe.resize(Math.max(1,Math.ceil(De/a())),Math.max(1,Math.ceil(Ee/a())))),tE(m,Bt.proj,Bt.view),JS(v,m),g[0]=Bt.eye[0],g[1]=Bt.eye[1],g[2]=Bt.eye[2],xt(()=>{t.clear({color:[0,0,0,1],depth:1}),ze()})},present(){let ot=Bt=>[Bt.width,Bt.height];n&&e.post>=1&&B()?(q({out:f[0]}),dt({out:f[1],src:f[0],dir:[1,0],size:ot(f[0])}),dt({out:f[0],src:f[1],dir:[0,1],size:ot(f[0])})):t.clear({color:[0,0,0,1],framebuffer:f[0]}),Gt({out:d[0],src:c,size:[l.width,l.height],threshold:0}),dt({out:d[1],src:d[0],dir:[1,0],size:ot(d[0])}),dt({out:d[0],src:d[1],dir:[0,1],size:ot(d[0])}),Gt({out:u[0],src:d[0],size:ot(d[0]),threshold:.42}),dt({out:u[1],src:u[0],dir:[1,0],size:ot(u[0])}),dt({out:u[0],src:u[1],dir:[0,1],size:ot(u[0])}),Gt({out:p[0],src:u[0],size:ot(u[0]),threshold:0}),dt({out:p[1],src:p[0],dir:[1.5,0],size:ot(p[0])}),dt({out:p[0],src:p[1],dir:[0,1.5],size:ot(p[0])}),Nt({out:null})}}}});var dy=Et((E7,uy)=>{"use strict";var ly=i0().GLSL,oE=Fs(),Qd=Va(),{C:nE,FAR_DOOR:rE}=M0(),aE=100*Math.PI/180,fy=t=>[rE.x-t[2],t[1],nE.zc-7+t[0]],hy=t=>[-t[2],t[1],t[0]];function sE(t){let e=[],o=[],n=[],r=[],a=oE.createBuilder(e,o,n,r);Qd.addFrames(a,t);let i=Qd.glassPanes(t),s=c=>{let h=[];for(let l=0;l<c.length;l+=3)h.push([c[l],c[l+1],c[l+2]]);return h};return{position:s(e),normal:s(o),elements:n,glass:i}}uy.exports=t=>{let e=Qd.DOOR,o=["left","right"].map(l=>{let d=sE(l),u=d.position.length;return{part:l,hinge:l==="left"?e.x0:e.x1,sign:l==="left"?-1:1,src:d.position.map(p=>p.slice()),srcN:d.normal.map(p=>p.slice()),srcG:d.glass.map(p=>p.slice()),pos:t.buffer({data:new Float32Array(u*3),usage:"dynamic"}),nrm:t.buffer({data:new Float32Array(u*3),usage:"dynamic"}),gpos:t.buffer({data:new Float32Array(d.glass.length*3),usage:"dynamic"}),gnrm:t.buffer({data:new Float32Array(d.glass.length*3),usage:"dynamic"}),el:t.elements({data:new Uint32Array(d.elements),type:"uint32"}),glassCount:d.glass.length,outP:new Float32Array(u*3),outN:new Float32Array(u*3),outG:new Float32Array(d.glass.length*3),outGN:new Float32Array(d.glass.length*3)}}),n=null;function r(l){if(l!==n){n=l;for(let d of o){let u=d.sign*l,p=Math.cos(u),f=Math.sin(u),v=x=>{let y=x[0]-d.hinge,w=x[2];return[d.hinge+y*p+w*f,x[1],-y*f+w*p]},m=x=>[x[0]*p+x[2]*f,x[1],-x[0]*f+x[2]*p];d.src.forEach((x,y)=>{let w=fy(v(x));d.outP.set(w,y*3),d.outN.set(hy(m(d.srcN[y])),y*3)});let g=hy(m([0,0,1]));d.srcG.forEach((x,y)=>{d.outG.set(fy(v(x)),y*3),d.outGN.set(g,y*3)}),d.pos.subdata(d.outP),d.nrm.subdata(d.outN),d.gpos.subdata(d.outG),d.gnrm.subdata(d.outGN)}}}r(0);let a=`
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
	}`,i=t({vert:a,frag:`
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
		}`,attributes:{position:t.prop("pos"),normal:t.prop("nrm")},elements:t.prop("el"),cull:{enable:!1}}),s=t({vert:a,frag:`
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
		}`,attributes:{position:t.prop("pos"),normal:t.prop("nrm")},count:t.prop("count"),cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}}),c=0,h=()=>{r(c*aE);for(let l of o)i({pos:l.pos,nrm:l.nrm,el:l.el})};return h.glass=()=>{for(let l of o)s({pos:l.gpos,nrm:l.gnrm,count:l.glassCount})},h.setOpen=l=>{c=l||0},h.openNow=()=>c,h}});var vy=Et((z7,py)=>{"use strict";var iE=i0().GLSL,{skylightGLSL:cE}=Ki(),{oculusGLSL:lE}=Ar(),{windowLightGLSL:fE}=M0(),Zr=.22;function hE(){let t=[],e=[],o=[],n=[],i=(l,d)=>{let u=Zr*.2*Math.pow(Math.sin(Math.PI*Math.pow(l,.85)),.9)*(d>0?1.06:.94),p=l*Zr-Zr*.12,f=d*u,v=Math.abs(d)*u*.42-.14*l*l*Zr;v+=Math.sin(l*17+(d>0?0:2.1))*.012*Zr*d*d;let m=(l-.3)*.55,g=Math.cos(m),x=Math.sin(m),y=v*g-f*x,w=v*x+f*g;return[p,y,w+.05*Zr*l*l]},s=(l,d)=>{let p=i(Math.min(1,l+.01),d),f=i(Math.max(0,l-.01),d),v=i(l,Math.min(1,d+.01)),m=i(l,Math.max(-1,d-.01)),g=[p[0]-f[0],p[1]-f[1],p[2]-f[2]],x=[v[0]-m[0],v[1]-m[1],v[2]-m[2]],y=[x[1]*g[2]-x[2]*g[1],x[2]*g[0]-x[0]*g[2],x[0]*g[1]-x[1]*g[0]],w=Math.hypot(y[0],y[1],y[2])||1,M=y[1]<0?-1:1;return[y[0]/w*M,y[1]/w*M,y[2]/w*M]};for(let l=0;l<=18;l++){let d=l/18;for(let u=0;u<=5*2;u++){let p=u/5-1;t.push(i(d,p)),e.push(s(Math.min(.97,Math.max(.03,d)),p)),o.push([d,p])}}let c=5*2+1;for(let l=0;l<18;l++)for(let d=0;d<c-1;d++){let u=l*c+d,p=u+1,f=u+c,v=f+1;n.push([u,f,p],[p,f,v])}let h=t.length;return t.push([-Zr*.12,0,-.003],[-Zr*.12,0,.003],[-Zr*.24,-.01,.0015],[-Zr*.24,-.01,-.0015]),e.push([0,1,0],[0,1,0],[0,1,0],[0,1,0]),o.push([0,0],[0,0],[-.1,0],[-.1,0]),n.push([h,h+2,h+1],[h,h+3,h+2]),{pos:t,nrm:e,uv:o,idx:n}}py.exports=t=>{let e=hE(),o=t({vert:`
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{model:t.prop("model"),night:()=>n.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(a){a&&a.visible&&(o({model:a.model}),n.night>.01&&r({model:a.model}))}}});var xy=Et((A7,gy)=>{"use strict";var{skylightGLSL:uE,Z_START:my,Z_END:dE}=Ki(),{oculusGLSL:pE,A:Ac}=Ar(),{windowLightGLSL:vE,C:di}=M0();gy.exports=(t,e)=>{let o=e.isPhone?900:2600,n=e.isPhone?350:900,r=e.isPhone?450:1300,a=e.isPhone?13:22,i=7,s=()=>(i=i*16807%2147483647,(i-1)/2147483646),c=di.x0+.6,h=di.x1-.3,l=[];for(let f=0;f<o;f++)l.push([2.5+s()*10.5,.3+s()*8,my-3.5+s()*(dE-my+4.5),s()]);for(let f=0;f<n;f++)l.push([Ac.x0+.3+s()*(Ac.x1-Ac.x0-.6),.3+s()*7.5,Ac.z0+.3+s()*(Ac.z1-Ac.z0-.6),s()]);for(let f=0;f<r;f++)l.push([c+s()*(h-c),.2+s()*5.6,di.z0+.25+s()*(di.z1-di.z0-.5),s()]);let d=f=>f.toFixed(4),u=[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],p=t({vert:`
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
				p.z = clamp(p.z, ${d(di.z0+.1)}, ${d(di.z1-.1)});
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
		}`,attributes:{seed:l},count:l.length,primitive:"points",uniforms:{time:t.context("time"),pixelScale:f=>f.viewportHeight*.006,focus:(f,v)=>v&&v.focus||6,aperture:(f,v)=>v&&v.aperture||0,wake0:(f,v)=>(v&&v.wake||u)[0],wake1:(f,v)=>(v&&v.wake||u)[1],wake2:(f,v)=>(v&&v.wake||u)[2],wake3:(f,v)=>(v&&v.wake||u)[3],wakeDir:(f,v)=>v&&v.wakeDir||[0,0,1],gust:(f,v)=>v&&v.gust||[0,0]},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});return f=>p(f||{})}});var ky=Et((T7,My)=>{"use strict";var{C:_y}=M0(),yy=i0(),by=15.3,mE=37.1,wy=_y.z1+.9,gE=_y.z1+.7+16-.6;My.exports=(t,e)=>{let o=e.isPhone?36:80,n=11,r=()=>(n=n*16807%2147483647,(n-1)/2147483646),a=[];for(let h=0;h<o;h++){let l=.35+Math.pow(r(),1.8)*2.4;a.push([by+r()*(mE-by),l,wy+r()*(gE-wy),r()])}let i=[],s=[];a.forEach(h=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(l=>{i.push(l[0],l[1]),s.push(...h)})});let c=t({vert:`
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
		}`,attributes:{corner:i,seed:s},count:i.length/2,uniforms:{time:t.context("time"),night:()=>yy.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){yy.night>.01&&c()}}});var i1=Et((L7,gr)=>{"use strict";var Sy=i0(),va=Ja(),xE=cc(),ys=Math.PI,Ge=t=>(+t).toFixed(4),Jr=t=>`vec3(${Ge(t[0])}, ${Ge(t[1])}, ${Ge(t[2])})`,nn={x0:-2.05,z0:41.45,z1:47.55,top:5.1},Io=-.55,e0=-2,yn=42.25,Un=43.65,$r=45.35,j0=46.75,h0=2.75,vr=.12,yE=(Io+e0)/2,Vo={x:-1.3,y:1.42,w:.42,h:.52,z:Un,cell:.026},co={x0:-1.85,x1:-.75,top:.98,z0:Un-.3,z1:Un-.02},Cr={x0:-1.44,x1:-1.16,y0:co.top-.002,y1:co.top+.018},mr={cx:-1.3,cz:Un-.165,w:.2,d:.255,y:co.top+.0012},w0={x:-1.03,z:Un-.14,r:.042,h:.075},sn={x:-.86,z:Un-.12,h:.085,r:.019};sn.flame=[sn.x,co.top+.012+sn.h+.028,sn.z];var s1={a:[w0.x-.004,co.top+.03,w0.z+.004],b:[w0.x-.13,co.top+.34,w0.z-.12]},bn=[-1.5,2.42,44.66],Hn=[-1.78,1.95,yn+.09],Pr={x:-1.32,z:44.08,y:.64,heading:.32},Ay={window:{eye:[-1.3,1.33,42.8],target:[Vo.x,1.37,Un],fov:54},paper:{eye:[-1.3,1.4,43.23],target:[mr.cx,co.top,mr.cz+.01],fov:40},front:{eye:[1.6,1.62,43],target:[-.9,1.35,43],fov:55},bay:{eye:[4.2,2.1,44.6],target:[-1,1.9,44.5],fov:55}},R0={z0:(yn+Un)/2+.03,z1:(yn+Un)/2+.56,y0:.98,y1:1.78,x:Io+.03,cell:.047};Ay.peek={eye:[-1.2,1.42,42.95],target:[va.PLAY.stoolX-va.OFF[0],.85,va.PLAY.keyFront+.2],fov:30};var xs={ink:null,inkDirty:!1,fold:0,slide:0,shown:!0,active:!1};function Ey(){return`
	// a quatrefoil hole in the brass (g: metres across the window from its centre)
	float grilleHole(vec2 g) {
		vec2 q = fract(g / ${Ge(Vo.cell)} + 0.5) - 0.5;
		float d = min(min(length(q - vec2(0.17, 0.0)), length(q + vec2(0.17, 0.0))),
		              min(length(q - vec2(0.0, 0.17)), length(q + vec2(0.0, 0.17))));
		d = min(d, length(q) - 0.04);
		return 1.0 - smoothstep(0.15, 0.19, d);
	}
	// how much of the lamp's light reaches p (on the penitent's side) through the window
	float throughGrille(vec3 p, float soft) {
		vec3 d = p - ${Jr(bn)};
		if (d.z > -0.001) return 0.0;
		float t = (${Ge(Vo.z)} - ${Ge(bn[2])}) / d.z;
		vec2 g = (${Jr(bn)} + d * t).xy - vec2(${Ge(Vo.x)}, ${Ge(Vo.y)});
		float inWin = (1.0 - smoothstep(${Ge(Vo.w/2-.01)}, ${Ge(Vo.w/2)} + soft, abs(g.x))) *
		              (1.0 - smoothstep(${Ge(Vo.h/2-.01)}, ${Ge(Vo.h/2)} + soft, abs(g.y)));
		// the lamp is not a point: the pattern blurs the further it falls
		// from the brass
		float pen = 0.045 * abs(p.z - ${Ge(Vo.z)}) / abs(${Ge(Vo.z)} - ${Ge(bn[2])}) / ${Ge(Vo.cell)};
		vec2 qc = fract(g / ${Ge(Vo.cell)} + 0.5) - 0.5;
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
		vec2 a = vec2(${Ge(w0.x)}, ${Ge(w0.z)}) - p.xz;
		vec2 dd = d.xz;
		float t = clamp(dot(a, dd) / max(dot(dd, dd), 1e-5), 0.0, 1.0);
		float r = length(p.xz + dd * t - vec2(${Ge(w0.x)}, ${Ge(w0.z)}));
		float y = p.y + d.y * t;
		s *= mix(1.0, 0.25, (1.0 - smoothstep(${Ge(w0.r*.7)}, ${Ge(w0.r*1.6)}, r)) * (1.0 - smoothstep(${Ge(co.top+w0.h*.8)}, ${Ge(co.top+w0.h*1.3)}, y)));
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
		bool inB1 = p.z < ${Ge(Un)} && p.z > ${Ge(yn-.04)} && p.x < ${Ge(Io+.02)};
		bool inPriest = p.z >= ${Ge(Un)} && p.z < ${Ge($r)} && p.x < ${Ge(Io)};
		bool inB2 = p.z >= ${Ge($r)} && p.z < ${Ge(j0+.04)} && p.x < ${Ge(Io)};
		// how open to the hall it is
		float open = 1.0;
		if (inB1) open = mix(0.7, 1.1, smoothstep(${Ge(e0)}, ${Ge(Io)}, p.x));
		if (inPriest) open = 0.16;
		if (inB2) open = 0.10;
		// deeper into the bay, a little less of the hall's light
		open *= mix(0.62, 1.0, smoothstep(${Ge(nn.x0)}, 0.3, p.x));
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
	}`}var t0={WOOD:0,CARVED:1,VELVET:2,CUSHION:3,BRASS:4,INKGLASS:5,QUILL:6,LAMPGLASS:7,DARKWOOD:8};function Ty(){let t=[],e=[],o=[],n=[],r=[],a=(h,l)=>[h[0]-l[0],h[1]-l[1],h[2]-l[2]],i=(h,l)=>[h[1]*l[2]-h[2]*l[1],h[2]*l[0]-h[0]*l[2],h[0]*l[1]-h[1]*l[0]],s=h=>{let l=Math.hypot(h[0],h[1],h[2])||1;return[h[0]/l,h[1]/l,h[2]/l]},c={pos:t,nrm:e,kind:o,uv:n,idx:r,norm:s,cross:i,sub:a};return c.v=(h,l,d,u)=>(t.push(h[0],h[1],h[2]),e.push(l[0],l[1],l[2]),o.push(d),n.push(u?u[0]:0,u?u[1]:0),t.length/3-1),c.quad=(h,l,d,u,p,f)=>{let v=s(i(a(l,h),a(u,h)));f=f||[[0,0],[1,0],[1,1],[0,1]];let m=c.v(h,v,p,f[0]),g=c.v(l,v,p,f[1]),x=c.v(d,v,p,f[2]),y=c.v(u,v,p,f[3]);r.push(m,g,x,m,x,y)},c.box=(h,l,d,u,p,f,v)=>{let m=(g,x,y,w,M,_,S,R)=>c.quad(g,x,y,w,v,[[M,S],[_,S],[_,R],[M,R]]);m([u,l,d],[u,l,f],[u,p,f],[u,p,d],d,f,l,p),m([h,l,f],[h,l,d],[h,p,d],[h,p,f],f,d,l,p),m([h,p,d],[u,p,d],[u,p,f],[h,p,f],h,u,d,f),m([h,l,f],[u,l,f],[u,l,d],[h,l,d],h,u,f,d),m([h,l,f],[u,l,f],[u,p,f],[h,p,f],h,u,l,p),m([u,l,d],[h,l,d],[h,p,d],[u,p,d],u,h,l,p)},c.tube=(h,l,d,u)=>{u=u||6;let p=t.length/3;for(let f=0;f<h.length;f++){let v=h[Math.max(0,f-1)],m=h[Math.min(h.length-1,f+1)],g=s(a(m,v)),x=Math.abs(g[1])>.9?[1,0,0]:[0,1,0],y=s(i(g,x)),w=i(y,g),M=typeof l=="function"?l(f/(h.length-1)):l;for(let _=0;_<=u;_++){let S=_/u*ys*2,R=Math.cos(S),N=Math.sin(S),G=[y[0]*R+w[0]*N,y[1]*R+w[1]*N,y[2]*R+w[2]*N];c.v([h[f][0]+G[0]*M,h[f][1]+G[1]*M,h[f][2]+G[2]*M],G,d,[f/(h.length-1),_/u])}}for(let f=0;f<h.length-1;f++)for(let v=0;v<u;v++){let m=p+f*(u+1)+v,g=m+u+1;r.push(m,m+1,g,m+1,g+1,g)}},c.lathe=(h,l,d,u,p)=>{p=p||20;let f=t.length/3;for(let v=0;v<d.length;v++){let[m,g]=d[v],x=d[Math.max(0,v-1)],y=d[Math.min(d.length-1,v+1)],w=y[0]-x[0],M=y[1]-x[1];for(let _=0;_<=p;_++){let S=_/p*ys*2,R=Math.cos(S),N=Math.sin(S),G=s([M*R,-w,M*N]);c.v([h+R*m,g,l+N*m],G,u,[_/p,v/(d.length-1)])}}for(let v=0;v<d.length-1;v++)for(let m=0;m<p;m++){let g=f+v*(p+1)+m,x=g+p+1;r.push(g,x,g+1,g+1,x,x+1)}},c.spire=(h,l,d,u,p,f)=>{let v=[[-u,-u],[u,-u],[u,u],[-u,u]];for(let m=0;m<4;m++){let g=v[m],x=v[(m+1)%4],y=[h+g[0],d,l+g[1]],w=[h+x[0],d,l+x[1]],M=[h,p,l],_=s(i(a(M,y),a(w,y))),S=c.v(y,_,f,[0,0]),R=c.v(w,_,f,[1,0]),N=c.v(M,_,f,[.5,1]);r.push(S,N,R)}},c.orient=()=>{for(let h=0;h<r.length;h+=3){let[l,d,u]=[r[h],r[h+1],r[h+2]],p=m=>[t[m*3],t[m*3+1],t[m*3+2]],f=i(a(p(d),p(l)),a(p(u),p(l))),v=[0,1,2].map(m=>e[l*3+m]+e[d*3+m]+e[u*3+m]);f[0]*v[0]+f[1]*v[1]+f[2]*v[2]<0&&(r[h+1]=u,r[h+2]=d)}return c},c}function a1(t,e,o,n){if(t<=e)return o;let r=t-e;return r>=n?0:Math.max(0,Math.sqrt(n*n-r*r)-(n-o))}var mn={ys:1.78,a:.56,r:.78};mn.apex=mn.ys+Math.sqrt(mn.r*mn.r-(mn.r-mn.a)*(mn.r-mn.a));function bE(){let t=Ty(),e=t0.WOOD,o=t0.CARVED,n=t0.DARKWOOD,r=.06;t.box(e0,0,yn,Io+.08,vr,j0,n),t.box(e0,h0-.06,yn-.04,Io+.1,h0,j0+.04,e),t.box(Io,h0-.2,yn-.06,Io+.12,h0-.06,j0+.06,e),t.box(Io+.02,h0,yn-.08,Io+.14,h0+.07,j0+.08,n),t.box(e0,vr,yn,e0+.04,h0-.06,j0,e);for(let[l,d,u]of[[yn-r,yn,-1],[j0,j0+r,1]]){t.box(e0,0,l,Io+.08,h0,d,e);let p=u<0?l-.018:d;t.box(e0+.18,.45,Math.min(p,p+.018),Io-.12,2.35,Math.max(p,p+.018),n),t.box(e0+.26,.55,Math.min(p,p+.03*u),Io-.2,2.25,Math.max(p,p+.03*u),e)}{let l=Un-.02,d=Un+.02,u=Vo.x-Vo.w/2,p=Vo.x+Vo.w/2,f=Vo.y-Vo.h/2,v=Vo.y+Vo.h/2;t.box(e0,vr,l,Io,Cr.y0,d,e),t.box(e0,Cr.y0,l,Cr.x0,Cr.y1,d,e),t.box(Cr.x1,Cr.y0,l,Io,Cr.y1,d,e),t.box(e0,Cr.y1,l,Io,f,d,e),t.box(e0,f,l,u,v,d,e),t.box(p,f,l,Io,v,d,e),t.box(e0,v,l,Io,h0-.06,d,e);let m=.05,g=l-.025;t.box(u-m,f-m,g,p+m,f,l,n),t.box(u-m,v,g,p+m,v+m,l,n),t.box(u-m,f,g,u,v,l,n),t.box(p,f,g,p+m,v,l,n),t.box(u-m-.02,v+m,g-.015,p+m+.02,v+m+.03,l,e),t.box(Cr.x0-.01,Cr.y1,l-.006,Cr.x1+.01,Cr.y1+.008,l,t0.BRASS)}{let l=R0,d=Io+.008,u=Io+.052;t.box(d,l.y0,l.z0-.035,u,l.y1,l.z0,n),t.box(d,l.y0,l.z0,u,l.y0+.04,l.z1,n),t.box(d,l.y1-.04,l.z0,u,l.y1,l.z1,n),t.box(d+.008,vr,l.z0-.035,u-.008,l.y0,l.z1,e),t.box(u-.008,vr+.12,l.z0+.03,u,l.y0-.08,l.z1-.06,n),t.box(d-.004,l.y0-.012,l.z0-.045,u+.012,l.y0,l.z1,t0.BRASS)}t.box(e0,vr,$r-.02,Io,h0-.06,$r+.02,e),t.box(co.x0,co.top-.035,co.z0,co.x1,co.top,co.z1,e),t.tube([[co.x0,co.top-.018,co.z0],[co.x1,co.top-.018,co.z0]],.02,e,8);for(let l of[co.x0+.1,co.x1-.1]){let d=[];for(let u=0;u<=8;u++){let p=u/8;d.push([l,co.top-.04-.22*p,co.z1-.02-.22*Math.cos(p*ys/2)])}t.tube(d,.018,n,6)}t.box(e0+.06,.12,yn,Io-.1,.44,yn+.42,n),t.box(e0+.08,.44,yn+.01,Io-.12,.52,yn+.41,t0.CUSHION),t.box(e0+.06,.12,j0-.42,Io-.1,.44,j0,n),t.box(Hn[0]-.05,Hn[1]-.16,yn,Hn[0]+.05,Hn[1]-.02,yn+.012,t0.BRASS),t.tube([[Hn[0],Hn[1]-.09,yn+.012],[Hn[0],Hn[1]-.09,Hn[2]-.01],[Hn[0],Hn[1]-.05,Hn[2]]],.006,t0.BRASS,6),t.lathe(Hn[0],Hn[2],[[0,Hn[1]-.05],[.028,Hn[1]-.035],[.034,Hn[1]+.01],[.024,Hn[1]+.06],[.026,Hn[1]+.065]],t0.LAMPGLASS,16),t.box(Pr.x-.22,.12,Pr.z-.24,Pr.x+.22,Pr.y-.05,Pr.z+.16,n),t.box(Pr.x-.24,Pr.y-.05,Pr.z-.26,Pr.x+.24,Pr.y,Pr.z+.18,t0.CUSHION),t.tube([[bn[0],h0-.06,bn[2]],[bn[0],bn[1]+.07,bn[2]]],.005,t0.BRASS,5),t.lathe(bn[0],bn[2],[[0,bn[1]+.09],[.03,bn[1]+.08],[.02,bn[1]+.06]],t0.BRASS,12),t.lathe(bn[0],bn[2],[[0,bn[1]-.06],[.035,bn[1]-.04],[.045,bn[1]],[.035,bn[1]+.05],[.018,bn[1]+.07]],t0.LAMPGLASS,16);let a=Io,i=Io+r;function s(l,d,u){let p=(l+d)/2,f=40,v=[];for(let g=0;g<=f;g++)v.push(vr+(h0-.2-vr)*g/f);let m=[];v.forEach(g=>m.push(g));for(let g=1;g<24;g++)m.push(mn.ys+(mn.apex-mn.ys)*g/24);m.sort((g,x)=>g-x);for(let g=0;g<m.length-1;g++){let x=m[g],y=m[g+1];if(y-x<1e-4)continue;let w=u?a1(x,mn.ys,mn.a,mn.r):0,M=u?a1(y,mn.ys,mn.a,mn.r):0,_=(S,R)=>[S,R];t.quad([i,x,p-w],[i,x,l],[i,y,l],[i,y,p-M],e,[_(p-w,x),_(l,x),_(l,y),_(p-M,y)]),t.quad([i,x,d],[i,x,p+w],[i,y,p+M],[i,y,d],e,[_(d,x),_(p+w,x),_(p+M,y),_(d,y)]),(w>0||M>0)&&(t.quad([a,x,p-w],[i,x,p-w],[i,y,p-M],[a,y,p-M],n),t.quad([i,x,p+w],[a,x,p+w],[a,y,p+M],[i,y,p+M],n),t.quad([a,x,l],[a,x,p-w],[a,y,p-M],[a,y,l],e),t.quad([a,x,p+w],[a,x,d],[a,y,d],[a,y,p+M],e))}if(t.box(a,h0-.2,l,i,h0-.06,d,e),t.box(i,h0-.42,l+.05,i+.012,h0-.24,d-.05,o),u){let g=[];for(let x=0;x<=30;x++){let y=x/30,w=y<.5?vr+(mn.apex-vr)*(y*2):mn.apex-(mn.apex-vr)*((y-.5)*2),M=y<.5?-1:1;g.push([i+.01,Math.min(w,mn.apex-.002),p+M*(a1(w,mn.ys,mn.a,mn.r)+.03)])}t.tube(g,.022,n,6)}}s(yn,Un,!0),s($r,j0,!0);{let l=Un,d=$r,u=(l+d)/2;t.box(a,vr,l,i,h0-.06,d,e);let p={ys:1.85,a:.55,r:.8},f=[];for(let v=0;v<=40;v++){let m=v/40,g=p.ys+Math.sqrt(p.r*p.r-(p.r-p.a)*(p.r-p.a)),x=m<.5?.35+(g-.35)*(m*2):g-(g-.35)*((m-.5)*2),y=m<.5?-1:1;f.push([i+.012,Math.min(x,g-.002),u+y*a1(x,p.ys,p.a,p.r)])}f.push(f[0]),t.tube(f,.02,n,6),t.box(i,.95,u-.22,i+.015,1.3,u+.22,o),t.box(i,.35,u-.42,i+.01,.75,u+.42,n),t.tube([[i+.03,1.12,d-.13],[i+.06,1.12,d-.13],[i+.06,1.12,d-.2]],.009,t0.BRASS,6)}[yn-.02,Un,$r,j0+.02].forEach((l,d)=>{let u=d===1||d===2,p=.075,f=h0+(u?.62:.4);t.box(Io+.06,0,l-p,Io+.06+2*p,f,l+p,e),t.box(Io+.04,f-.04,l-p-.02,Io+.08+2*p,f,l+p+.02,n);let v=Io+.06+p,m=u?.62:.5;t.spire(v,l,f,p*.95,f+m,e);for(let g=1;g<=3;g++){let x=f+m*g/4.2,y=p*.95*(1-g/4.2)+.02;for(let[w,M]of[[1,0],[-1,0],[0,1],[0,-1]])t.tube([[v+w*(y-.02),x-.02,l+M*(y-.02)],[v+w*(y+.015),x+.03,l+M*(y+.015)]],.008,n,4)}t.lathe(v,l,[[0,f+m-.02],[.03,f+m+.03],[.022,f+m+.07],[0,f+m+.1]],e,10)});let h=(l,d,u)=>{let p=(l+d)/2,f=Io+.075,v=h0+.07,m=v+u,g=[1,0,0],x=t.v([f,v,l],g,o,[l,v]),y=t.v([f,v,d],g,o,[d,v]),w=t.v([f,m,p],g,o,[p,m]);t.idx.push(x,y,w);let M=t.v([f-.04,v,l],[-1,0,0],e),_=t.v([f-.04,v,d],[-1,0,0],e),S=t.v([f-.04,m,p],[-1,0,0],e);t.idx.push(M,S,_);let R=[],N=[];for(let D=0;D<=10;D++){let B=D/10;R.push([f+.02,v+u*B,l+(p-l)*B]),N.push([f+.02,v+u*B,d+(p-d)*B])}t.tube(R,.022,n,6),t.tube(N,.022,n,6);for(let D=2;D<=8;D+=2)for(let B of[R[D],N[D]])t.tube([B,[B[0]+.01,B[1]+.06,B[2]+(B===R[D]?-.02:.02)]],.01,n,4);t.lathe(f,p,[[0,m],[.035,m+.06],[.022,m+.12],[0,m+.16]].map(([D,B])=>[D,B]),e,10);let G=Math.min(.17,u*.32),q=v+u*.38,V=[];for(let D=0;D<=24;D++){let B=D/24*ys*2;V.push([f+.012,q+Math.sin(B)*G,p+Math.cos(B)*G])}t.tube(V,.012,n,5)};h(yn-.02,Un,.52),h(Un,$r,.82),h($r,j0+.02,.52),t.lathe(w0.x,w0.z,[[0,co.top],[.036,co.top+.001],[w0.r,co.top+.012],[w0.r*1.02,co.top+.035],[.036,co.top+.052],[.02,co.top+.062],[.016,co.top+.068]],t0.INKGLASS,24),t.lathe(w0.x,w0.z,[[.016,co.top+.064],[.021,co.top+.066],[.022,co.top+.075],[.016,co.top+.076],[0,co.top+.072]],t0.BRASS,20);{let l=s1.a,d=s1.b,u=26,p=x=>{let y=Math.sin(x*ys)*.025;return[l[0]+(d[0]-l[0])*x+y*.6,l[1]+(d[1]-l[1])*x+y*.4,l[2]+(d[2]-l[2])*x+y]},f=[];for(let x=0;x<=u;x++)f.push(p(x/u));t.tube(f,x=>.0028*(1-.7*x)+6e-4,t0.QUILL,5);let v=t.norm(t.sub(d,l)),m=t.norm(t.cross(v,[.2,1,.1])),g=t.cross(m,v);for(let x of[-1,1]){let y=t.pos.length/3;for(let w=0;w<=u;w++){let M=w/u,_=p(M),S=M<.28?0:(x>0?.03:.02)*Math.sin(ys*Math.pow((M-.28)/.72,.75)),R=S*.25,N=[_[0]+m[0]*x*S-g[0]*R,_[1]+m[1]*x*S-g[1]*R,_[2]+m[2]*x*S-g[2]*R];t.v(_,g,t0.QUILL,[M,0]),t.v(N,g,t0.QUILL,[M,x])}for(let w=0;w<u;w++){let M=y+w*2;t.idx.push(M,M+2,M+1,M+1,M+2,M+3)}}}return t.orient()}function wE(t,e){let n=nn.top,r=nn.x0;t(r-.35,0,nn.z0-.35,r,n+.35,nn.z1+.35),t(r,0,nn.z0-.35,-.35,n,nn.z0),t(r,0,nn.z1,-.35,n,nn.z1+.35),t(r,n,nn.z0,-.35,n+.35,nn.z1),t(.35,0,nn.z0-.42,.35+.16,n,nn.z0),t(.35,0,nn.z1,.35+.16,n,nn.z1+.42),t(.35,n,nn.z0-.5,.35+.18,n+.42,nn.z1+.5),t(.35,n+.42,nn.z0-.6,.35+.26,n+.52,nn.z1+.6),t(.35,0,nn.z0-.5,.35+.22,.42,nn.z0),t(.35,0,nn.z1,.35+.22,.42,nn.z1+.5),t(-.35-.01,0,nn.z0,.35+.12,.02,nn.z1),e(r,nn.z0,-.35,nn.z1)}gr.exports=t=>{let e=Ka(),o=Sy.GLSL,n=bE(),r=`
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
	}`,i=t({vert:a,frag:`${r}
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
		}`,attributes:{position:n.pos,normal:n.nrm,kind:n.kind,uv:n.uv},elements:n.idx});function s(Nt,xt,ot,Bt){let ze=[],Se=[],De=[],Ee=[],rt=[],lt=Io-.02,It=mn.apex+.08,Jt=vr+.015;for(let me=0;me<=40;me++){let xe=me/40,te=It+(Jt-It)*xe;for(let se=0;se<=90;se++){let ut=se/90,Vt=ot?.2+.13*xe*xe:xt-Nt,he=Nt+ut*Vt,Ht=ot?.05+.02*xe:.035+.01*Math.sin(ut*7),Lt=ut*Bt*ys*2+Math.sin(xe*2+ut*5)*.6,Je=lt-Ht*(.5+.5*Math.sin(Lt))-(ot?.02*xe:0),to=[1,0,-(-Ht*.5*Math.cos(Lt)*Bt*ys*2/Vt)],no=Math.hypot(to[0],to[1],to[2]);ze.push(Je,te,he),Se.push(to[0]/no,0,to[2]/no),De.push(2),Ee.push(Math.sin(Lt),xe)}}for(let me=0;me<40;me++)for(let xe=0;xe<90;xe++){let te=me*91+xe,se=te+90+1;rt.push(te,se,te+1,te+1,se,se+1)}for(let me=0;me<rt.length;me+=3){let[xe,te,se]=[rt[me],rt[me+1],rt[me+2]],ut=Lt=>[ze[Lt*3],ze[Lt*3+1],ze[Lt*3+2]],Vt=[0,1,2].map(Lt=>ut(te)[Lt]-ut(xe)[Lt]),he=[0,1,2].map(Lt=>ut(se)[Lt]-ut(xe)[Lt]);Vt[1]*he[2]-Vt[2]*he[1]<0&&(rt[me+1]=se,rt[me+2]=te)}return{pos:ze,nrm:Se,kind:De,uv:Ee,idx:rt}}let c=s(yn+.02,yn+.4,!0,6),h=s($r+.04,j0-.04,!1,9),l={pos:c.pos.concat(h.pos),nrm:c.nrm.concat(h.nrm),kind:c.kind.concat(h.kind),uv:c.uv.concat(h.uv),idx:c.idx.concat(h.idx.map(Nt=>Nt+c.pos.length/3))},d=t({vert:`
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
			vec3 p = vec3(${Ge(Vo.x)} + corner.x * ${Ge(Vo.w/2)}, ${Ge(Vo.y)} + corner.y * ${Ge(Vo.h/2)}, ${Ge(Vo.z)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${r}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = v_pos.xy - vec2(${Ge(Vo.x)}, ${Ge(Vo.y)});
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(0.0, 0.0, v_eye.z < ${Ge(Vo.z)} ? -1.0 : 1.0);
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
			vec3 p = vec3(${Ge(R0.x)}, ${Ge((R0.y0+R0.y1)/2)} + corner.y * ${Ge((R0.y1-R0.y0)/2-.04)}, ${Ge((R0.z0+R0.z1)/2)} + corner.x * ${Ge((R0.z1-R0.z0)/2)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${r}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = (v_pos.zy - vec2(${Ge((R0.z0+R0.z1)/2)}, ${Ge((R0.y0+R0.y1)/2)})) * ${Ge(Vo.cell/R0.cell)};
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(v_eye.x < ${Ge(R0.x)} ? -1.0 : 1.0, 0.0, 0.0);
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
			vec3 p = vec3(${Ge(Vo.x)} + corner.x * 0.75, ${Ge(Vo.y)} + corner.y * 0.9, ${Ge($r-.03)});
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),v=14,m=[];for(let Nt=0;Nt<v;Nt++)[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(xt=>m.push(xt[0],xt[1],(Nt+.5)/v));let g=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 c;
		varying vec3 v_pos;
		void main() {
			// slices across the booth, from the window back towards the bench
			vec3 p = vec3(${Ge(yE)} + c.x * ${Ge((Io-e0)/2-.02)}, 0.9 + (c.y + 1.0) * 0.8, ${Ge(Un-.03)} - c.z * 1.25);
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
		}`.replace("float grilleHole","float grilleHole"),attributes:{c:{buffer:t.buffer(m),size:3}},count:m.length/3,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}}),x=(()=>{if(typeof document=="undefined")return null;let Nt=document.createElement("canvas");Nt.width=512,Nt.height=652;let xt=Nt.getContext("2d");xt.fillStyle="#cdb38a",xt.fillRect(0,0,Nt.width,Nt.height);let ot=7,Bt=()=>(ot=ot*1664525+1013904223>>>0,ot/4294967296);for(let Se=0;Se<2400;Se++){xt.fillStyle=`rgba(${Bt()<.5?"90,62,30":"245,230,200"},${.03+Bt()*.05})`;let De=Bt()*Nt.width,Ee=Bt()*Nt.height;xt.fillRect(De,Ee,1+Bt()*14,1)}for(let Se=0;Se<26;Se++){let De=Bt()*Nt.width,Ee=Bt()*Nt.height,rt=20+Bt()*90,ht=xt.createRadialGradient(De,Ee,0,De,Ee,rt);ht.addColorStop(0,`rgba(120,80,35,${.04+Bt()*.06})`),ht.addColorStop(1,"rgba(120,80,35,0)"),xt.fillStyle=ht,xt.fillRect(De-rt,Ee-rt,rt*2,rt*2)}let ze=xt.createRadialGradient(Nt.width/2,Nt.height/2,Nt.width*.3,Nt.width/2,Nt.height/2,Nt.height*.72);return ze.addColorStop(0,"rgba(110,70,30,0)"),ze.addColorStop(1,"rgba(110,70,30,0.38)"),xt.fillStyle=ze,xt.fillRect(0,0,Nt.width,Nt.height),Nt})(),y=x?t.texture({data:x,min:"linear",mag:"linear",flipY:!1}):t.texture(),w=t.texture({shape:[8,8],data:new Uint8Array(8*8*4)}),M=[18,24],_=[],S=[];for(let Nt=0;Nt<=M[1];Nt++)for(let xt=0;xt<=M[0];xt++)_.push(xt/M[0],Nt/M[1]);for(let Nt=0;Nt<M[1];Nt++)for(let xt=0;xt<M[0];xt++){let ot=Nt*(M[0]+1)+xt,Bt=ot+M[0]+1;S.push(ot,ot+1,Bt,ot+1,Bt+1,Bt)}let R=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale, fold, slide;
		attribute vec2 st;
		varying vec3 v_pos, v_n, v_eye;
		varying vec2 v_st;
		void main() {
			// s across (texture left = +x), t from the near edge (0) to the far (1)
			float s = st.x, t = st.y;
			float x = ${Ge(mr.cx+mr.w/2)} - s * ${Ge(mr.w)};
			float zNear = ${Ge(mr.cz-mr.d/2)};
			vec3 p = vec3(x, ${Ge(mr.y)}, zNear + t * ${Ge(mr.d)});
			vec3 n = vec3(0.0, 1.0, 0.0);
			// a slight cockle
			p.y += 0.0012 * sin(s * 7.0 + t * 3.0) * sin(t * 5.0);
			// the near half folds up and over onto the far half
			if (t < 0.5) {
				float a = fold * 3.14159 * 0.985;
				float dd = (0.5 - t) * ${Ge(mr.d)};
				float zf = zNear + 0.5 * ${Ge(mr.d)};
				p.z = zf - dd * cos(a);
				p.y = ${Ge(mr.y)} + dd * sin(a) + 0.0016 * fold;
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
			if (v_pos.z > ${Ge(Un+.015)}) discard;
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
		}`,attributes:{st:{buffer:t.buffer(_),size:2}},elements:S,uniforms:{fold:()=>xs.fold,slide:()=>xs.slide,paperTex:y,inkTex:w},cull:{enable:!1}}),N=Ty();N.lathe(sn.x,sn.z,[[0,co.top],[.048,co.top+.002],[.052,co.top+.012],[.046,co.top+.014],[.022,co.top+.012],[0,co.top+.012]],t0.BRASS,24),N.lathe(sn.x,sn.z,[[0,co.top+.012],[sn.r,co.top+.012],[sn.r*1.02,co.top+.012+sn.h*.6],[sn.r,co.top+.012+sn.h],[sn.r*.75,co.top+.012+sn.h-.004],[0,co.top+.012+sn.h-.008]],9,20),N.tube([[sn.x,co.top+.012+sn.h-.008,sn.z],[sn.x+.001,co.top+.012+sn.h+.012,sn.z]],.0012,8,4),N.orient();let G=t({vert:a,frag:`${r}
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
				float up = smoothstep(${Ge(co.top+sn.h*.4)}, ${Ge(co.top+.012+sn.h)}, v_pos.y);
				col += vec3(1.0, 0.55, 0.22) * up * 0.22 * candleFlicker();
			}
			gl_FragColor = vec4(col * night, 1.0);
		}`,attributes:{position:N.pos,normal:N.nrm,kind:N.kind,uv:N.uv},elements:N.idx}),q=t({vert:`
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{halo:t.prop("halo")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),V=[0,0],D=t({uniforms:{view:t.prop("view")}}),B=new Float32Array(16);function dt(Nt){xE.translate(B,Nt.view,va.OFF),D({view:B},()=>Gt(Nt))}function Gt(Nt){let xt=Nt&&Nt.reflected;if(i(),d(),u(),p(),xs.ink&&xs.inkDirty){let ot=xs.ink;V[0]!==ot.width||V[1]!==ot.height?(w({data:ot,min:"linear",mag:"linear",flipY:!1}),V=[ot.width,ot.height]):w.subimage(ot),xs.inkDirty=!1}xs.shown&&R(),Sy.night>.01&&(G(),xt||(q({halo:1}),q({halo:0}))),xt||(f(),g())}return dt};gr.exports.addBay=wE;gr.exports.BAY=nn;gr.exports.OFF=va.OFF;gr.exports.STATE=xs;var zy=t=>[t[0]+va.OFF[0],t[1]+va.OFF[1],t[2]+va.OFF[2]];gr.exports.SHOTS=Object.fromEntries(Object.entries(Ay).map(([t,e])=>[t,Object.assign({},e,{eye:zy(e.eye),target:zy(e.target)})]));gr.exports.SEAT=Pr;gr.exports.LAMP=bn;gr.exports.SCONCE=Hn;gr.exports.GRILLE=Vo;gr.exports.PAPER=mr;gr.exports.ZONE={FRONT:Io,BACK:e0,ZA:yn,ZB:Un,ZC:$r,ZD:j0}});var Zd=Et((N7,Ny)=>{"use strict";function _E(t){let e=t>>>0||1;return function(){return e=e*1664525+1013904223>>>0,e/4294967296}}var Ly={stroke:.05,letter:.045,word:.15,comma:.28,stop:.45,line:.25,para:.6},ME=["th","ng","er"];function kE(t,e,o){o=Object.assign({ink:"#2a1d12",xh:14,speed:23,lineHeight:2.85,seed:7,width:.12,pace:.45},o||{});let n=t.getContext("2d"),r={};Object.keys(Ly).forEach(v=>{r[v]=Ly[v]*o.pace});let a=[],i=0,s=0,c=0,h=[];function l(v,m){let g=_E(o.seed),x=o.xh,y={},w=B=>{let dt=e[B];if(!dt)return null;let Gt=Math.floor(g()*dt.length);return dt.length>1&&Gt===y[B]&&(Gt=(Gt+1)%dt.length),y[B]=Gt,dt[Gt]},M=B=>{if(e[B])return{g:w(B),sc:1};let dt=B.toLowerCase();return e[dt]?{g:w(dt),sc:/[A-Z]/.test(B)?1.32:1}:null},_=[],S=.15,R=0,N=0,G=(g()-.5)*.02,q=m/x,V=v.split(/\n\s*\n/);V.forEach((B,dt)=>{B.replace(/\s+/g," ").trim().split(" ").forEach(Nt=>{let xt=[];for(let Se=0;Se<Nt.length;Se++){let De=Nt.substr(Se,2).toLowerCase();if(ME.indexOf(De)>=0&&e[De]&&g()<.55&&Nt[Se]===Nt[Se].toLowerCase()){xt.push({ch:De,gl:{g:w(De),sc:1}}),Se++;continue}let Ee=M(Nt[Se]);Ee&&Ee.g&&xt.push({ch:Nt[Se],gl:Ee})}let ot=xt.map(()=>.17+g()*.07),Bt=xt.reduce((Se,De,Ee)=>Se+De.gl.g.w*De.gl.sc+ot[Ee],0);R>0&&R+Bt>q&&(R=0,N++,S+=r.line,G=(g()-.5)*.02),xt.forEach((Se,De)=>{let Ee=Se.gl.g,rt=Se.gl.sc*(.95+g()*.1),ht=(g()-.5)*.06,oe=(g()-.5)*.08+G*R,lt=R,It=N*o.lineHeight+1.9+oe,Jt=Math.cos(ht),me=Math.sin(ht),xe=se=>[(lt+(se[0]*Jt-se[1]*me)*rt)*x,(It+(se[0]*me+se[1]*Jt)*rt)*x],te=(se,ut)=>{let Vt=0;for(let Ht=1;Ht<se.length;Ht++)Vt+=Math.hypot(se[Ht][0]-se[Ht-1][0],se[Ht][1]-se[Ht-1][1]);let he=Math.max(o.minDur||(ut?.06:.07),Vt/(o.speed*x));_.push({pts:se,L:Vt,start:S,dur:he,dot:ut}),S+=he};if(Ee.s.forEach((se,ut)=>{ut>0&&(S+=r.stroke),te(se.map(xe),!1)}),Ee.dot){let se=Ee.s[0][0];Ee.s.forEach(Vt=>Vt.forEach(he=>{he[1]<se[1]&&(se=he)}));let ut=xe([se[0]+.1,-1.36]);S+=r.stroke*1.4,te([ut,[ut[0]+x*.05,ut[1]+x*.03]],!0)}S+=r.letter*(.6+g()*.8),R+=Ee.w*rt+ot[De]});let ze=Nt[Nt.length-1];S+=/[.!?]/.test(ze)?r.stop:/[,;:]/.test(ze)?r.comma:r.word,R+=.55+g()*.2}),dt<V.length-1&&(R=0,N+=1.6,S+=r.para)});let D=(N+1)*o.lineHeight*x+x*1.55;return{strokes:_,total:S,height:D}}function d(v,m){if(o.fixed){let g=o.fixed;n.setTransform(1,0,0,1,g.mx,g.my),n.clearRect(-g.mx,-g.my,t.width,t.height)}else{let g=Math.min(window.devicePixelRatio||1,2);t.width=Math.round(v*g),t.height=Math.round(m*g),t.style.height=m+"px",t.style.width=v+"px",n.setTransform(g,0,0,g,0,0),n.clearRect(0,0,v,m)}n.strokeStyle=o.ink,n.fillStyle=o.ink,n.lineCap="round",n.lineJoin="round",o.shadow&&(n.shadowColor=o.shadow,n.shadowBlur=o.shadowBlur||6)}let u=v=>v<.5?2*v*v:1-Math.pow(-2*v+2,2)/2;function p(v,m){let g=h[v.i]||0;if(m<=g)return;let x=o.width*o.xh,y=0;for(let w=1;w<v.pts.length;w++){let M=v.pts[w-1],_=v.pts[w],S=Math.hypot(_[0]-M[0],_[1]-M[1]),R=y,N=y+S;if(y=N,N<=g||S===0)continue;if(R>=m)break;let G=Math.max(0,(g-R)/S),q=Math.min(1,(m-R)/S),V=[M[0]+(_[0]-M[0])*G,M[1]+(_[1]-M[1])*G],D=[M[0]+(_[0]-M[0])*q,M[1]+(_[1]-M[1])*q],B=(R+N)/2/(v.L||1),dt=.72+.28*Math.sin(Math.PI*Math.min(1,Math.max(0,B)));n.lineWidth=x*dt,n.globalAlpha=.86+.14*dt,n.beginPath(),n.moveTo(V[0],V[1]),n.lineTo(D[0],D[1]),n.stroke()}v.dot&&g===0&&(n.globalAlpha=1,n.beginPath(),n.arc(v.pts[0][0],v.pts[0][1],x*.75,0,Math.PI*2),n.fill()),h[v.i]=m}function f(v){let m=(v-c)/1e3;for(let g=0;g<a.length;g++){let x=a[g];if(x.start>m)break;let y=Math.min(1,(m-x.start)/x.dur);p(x,u(y)*x.L)}if(o.onPen){let g=0;for(;g+1<a.length&&a[g+1].start<=m;)g++;a[g]&&o.onPen(a[g].pts[0][1])}m<i?s=requestAnimationFrame(f):o.onDone&&o.onDone()}return{write(v,m){cancelAnimationFrame(s);let g=o.fixed?t.width-2*o.fixed.mx:t.parentElement.clientWidth,x=l(v,g);a=x.strokes,i=x.total;let y=typeof o.maxTime=="function"?o.maxTime(v):o.maxTime;if(y&&i>y){let M=y/i;a.forEach(_=>{_.start*=M,_.dur*=M}),i=y}a.forEach((M,_)=>{M.i=_}),h=[],d(g,x.height);let w=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(m||w){a.forEach(M=>p(M,M.L));return}return c=performance.now(),s=requestAnimationFrame(f),i},finish(){cancelAnimationFrame(s),a.forEach(v=>p(v,v.L)),o.onDone&&o.onDone()},stop(){cancelAnimationFrame(s)}}}Ny.exports=kE});var tp=Et((R7,Ry)=>{"use strict";var Jd=i0(),SE='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7"/></svg>',EE='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M19.5 14.6A8 8 0 0 1 9.4 4.5a8 8 0 1 0 10.1 10.1z"/></svg>';Ry.exports=function(e){let o=document.createElement("button");o.type="button",o.className=e+" light-toggle";let n=()=>{let r=Jd.isNight;o.innerHTML=r?SE:EE,o.setAttribute("aria-label",r?"Switch to day":"Switch to night"),o.title=r?"Day":"Night",o.setAttribute("aria-pressed",r?"true":"false")};return n(),Jd.onChange(n),["mousedown","pointerdown"].forEach(r=>o.addEventListener(r,a=>a.stopPropagation())),o.addEventListener("click",r=>{r.stopPropagation(),Jd.toggle()}),o}});var $y=Et((O7,Py)=>{"use strict";var Bn=i1(),zE=Ja(),AE=Zd(),TE="81efb912-50a2-4fcd-b5e8-c3a28eecbe93",Oy=100,Ia=t=>Math.max(0,Math.min(1,t)),nr=(t,e,o)=>{let n=Ia((o-t)/(e-t));return n*n*(3-2*n)},ta=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,Ir=(t,e,o)=>t+(e-t)*o,af=(t,e,o)=>[Ir(t[0],e[0],o),Ir(t[1],e[1],o),Ir(t[2],e[2],o)];function pi(t,e){let o=t.length-1,n=Ia(e)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,i=t[Math.max(0,r-1)],s=t[r],c=t[r+1],h=t[Math.min(o,r+2)];return[0,1,2].map(l=>.5*(2*s[l]+(-i[l]+c[l])*a+(2*i[l]-5*s[l]+4*c[l]-h[l])*a*a+(-i[l]+3*s[l]-3*c[l]+h[l])*a*a*a))}var c1=t=>({eye:t.eye.slice(),target:t.target.slice(),fov:t.fov,roll:0});function ep(t,e,o){return{eye:af(t.eye,e.eye,o),target:af(t.target,e.target,o),fov:Ir(t.fov,e.fov,o),roll:Ir(t.roll||0,e.roll||0,o)}}var sf=zE.PLAY,ea=[sf.stoolX,1,sf.keyFront+.25],l1=[sf.stoolX,sf.keyTop+.03,sf.keyFront-.05],np=t=>{let e=(15+110*t)*Math.PI/180,o=2.1+.4*t;return[ea[0]+Math.cos(e)*o,1.15+.4*t,ea[2]+Math.sin(e)*o]},Tc=[{eye:np(1),target:[ea[0],.92,ea[2]-.15],fov:46,aperture:.6},{eye:[-6.93,3.2,45.85],target:[-6.93,.77,45.3],fov:34,aperture:.6,to:l1},{eye:[ea[0]+1,1.14,ea[2]+1.72],target:[l1[0]+.05,.8,l1[2]+.05],fov:40,aperture:1,to:l1}],Cy=(t,e)=>Math.hypot(t[0]-e[0],t[1]-e[1],t[2]-e[2]),f1=t=>({fade:0,letterbox:.55,exposure:1.3,focus:Cy(t.eye,t.to||ea),aperture:t.aperture,vignette:.42,shafts:0}),op={fade:0,letterbox:.55,exposure:2.1,focus:6.2,aperture:.55,vignette:.45,shafts:0},Lc={fade:0,letterbox:.55,exposure:2,focus:.82,aperture:1.1,vignette:.48,shafts:0},rf={fade:0,letterbox:.55,exposure:1.8,focus:.42,aperture:1.3,vignette:.5,shafts:0},LE=`
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
		</div>`,o.appendChild(a);let i=a.querySelector(".conf-write"),s=a.querySelector("textarea"),c=a.querySelector('[data-act="send"]'),h=a.querySelector(".conf-hint"),l=a.querySelector(".conf-close"),d=a.querySelector(".conf-final"),u=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,p=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;s.addEventListener("input",()=>{let ut=s.value.match(new RegExp("^\\s*(\\S+\\s+){0,"+(Oy-1)+"}\\S+"));(s.value.trim()?s.value.trim().split(/\s+/).length:0)>Oy&&ut&&(s.value=ut[0]),c.disabled=!s.value.trim()}),["keydown","keyup","keypress"].forEach(ut=>s.addEventListener(ut,Vt=>Vt.stopPropagation())),a.addEventListener("pointerdown",ut=>ut.stopPropagation()),a.addEventListener("click",ut=>{let Vt=ut.target.closest("button");Vt&&(ut.stopPropagation(),Vt.dataset.act==="send"&&dt(),Vt.dataset.act==="leave"&&xt())});let f=!1,v="",m=0,g=null,x=null,y="",w=null,M=0,_="",S=document.createElement("canvas");S.width=512,S.height=652;function R(ut){ut!==_&&(_=ut,i.classList.toggle("on",ut==="write"),h.classList.toggle("on",ut==="hint"),l.classList.toggle("on",f&&ut==="hint"&&(v==="room"||v==="peek")),d.classList.toggle("on",ut==="final"),ut==="write"&&setTimeout(()=>{if(v==="write")try{s.focus({preventScroll:!0})}catch(Vt){}},900))}function N(ut){v=ut,m=0}function G(ut,Vt){if(f)return;f=!0,g={eye:ut.eye.slice(),target:ut.target.slice(),fov:ut.fov,roll:ut.roll||0},x=Object.assign({},Vt),y="",s.value="",c.disabled=!0,Bn.STATE.fold=0,Bn.STATE.slide=0,Bn.STATE.shown=!0,Bn.STATE.active=!0;let he=S.getContext("2d");he.setTransform(1,0,0,1,0,0),he.clearRect(0,0,S.width,S.height),Bn.STATE.ink=S,Bn.STATE.inkDirty=!0,document.body.classList.add("confessing");let Ht=Tc[0],Lt=p?.3:5.5,Je=p?.3:3.6;q.i=0,q.u=0,q.T=Lt+Je,q.moving=!0,q.rest=0,q.raw=!0,q.lookFrom=x,q.lookTo=f1(Ht);let k=[g.eye,[3.4,1.75,44.5],[.3,1.72,44.7],[-2.8,1.5,45.4],np(0)],to=[g.target,[-3,1.9,44.5],[-6.5,1.3,44.9],[ea[0],1,ea[2]-.1],Ht.target];q.path=no=>{let pt=no*(Lt+Je);if(pt<Lt){let Be=pt/Lt,je=1-Math.cos(Be*Math.PI/2);return{eye:pi(k,je),target:pi(to,nr(0,1,je*1.05)),fov:Ir(g.fov,52,nr(.4,1,je)),roll:(g.roll||0)*(1-je)}}let At=(pt-Lt)/Je,_t=1-Math.pow(1-At,2.4);return{eye:np(_t),target:Ht.target,fov:Ir(52,Ht.fov,_t),roll:.05*Math.sin(Math.PI*_t)}},N("room"),R("")}let q={i:0,u:0,T:1,moving:!1,rest:0,raw:!1,path:null,lookFrom:null,lookTo:null},V=()=>u?"Scroll on":"Swipe up";function D(ut){let Vt=ze,he=Tc[ut],Ht={eye:Vt.eye.slice(),target:Vt.target.slice(),fov:Vt.fov,roll:Vt.roll||0},Lt=af(Ht.eye,he.eye,.5),Je=[Lt[0]-ea[0],0,Lt[2]-ea[2]],k=Math.hypot(Je[0],Je[2])||1,to=[Lt[0]+Je[0]/k*.6,Lt[1]+.3,Lt[2]+Je[2]/k*.6];q.path=no=>{let pt=1-no;return{eye:[0,1,2].map(At=>pt*pt*Ht.eye[At]+2*pt*no*to[At]+no*no*he.eye[At]),target:af(Ht.target,he.target,nr(0,1,no)),fov:Ir(Ht.fov,he.fov,no),roll:Ht.roll*pt}},q.lookFrom=B||f1(Tc[q.i]),q.lookTo=f1(he),q.i=ut,q.u=0,q.moving=!0,q.rest=0,q.raw=!1,q.T=p?.4:Math.max(2.8,Math.min(4.4,Cy(Ht.eye,he.eye)*1+1.6)),R("")}let B=null;function dt(){if(v!=="write"||(y=s.value.trim(),!y))return;s.blur(),R("");let ut=Math.max(10,Math.min(22,24-y.length/28));w=AE(S,e.glyphs(),{ink:"rgba(30,16,8,0.97)",xh:ut,width:.15,seed:11+y.length,speed:60,pace:.2,minDur:.03,maxTime:Vt=>2.4+Vt.length/160,fixed:{mx:46,my:40},onPen:()=>{Bn.STATE.inkDirty=!0},onDone:()=>{Bn.STATE.inkDirty=!0}}),N("down")}function Gt(){try{let ut={access_key:TE,subject:"A note left in the confessional",from_name:"Your gallery",message:y,page:location.href,when:new Date().toString()};fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(ut),keepalive:!0}).catch(()=>{})}catch(ut){}}function Nt(){v==="ready"&&(Gt(),N("fold"),R(""))}function xt(){!f||v==="leave"||(R(""),s.blur(),ot=ze,Bt=B,N("leave"))}let ot=null,Bt=null,ze=null,Se=Bn.SHOTS.window,De=Bn.OFF,Ee=ut=>[ut[0]+De[0],ut[1],ut[2]],rt=[[3.4,1.75,44.5],[.3,1.72,44.5],[-2.5,1.66,45],[-4.6,1.6,46.55],[-7,1.58,47.15],[-9.3,1.55,46.4],Ee([1.25,1.5,43.25]),Ee([-.55,1.36,42.92])],ht=[[-3,1.9,44.5],[-6.5,1.5,44.6],[-7,1,44.4],[-7.6,.95,44],[-10.5,1.5,44.6],Ee([-1,1.55,43.6]),Ee([-1.4,1.35,43.1]),Ee([-1.5,1.33,43.3])];function oe(ut){let Vt=ta(Ia(ut)),he=[g.eye,...rt,Se.eye],Ht=[g.target,...ht,Se.target];return{eye:pi(he,Vt),target:pi(Ht,nr(0,1,Vt*1.03)),fov:Ir(g.fov,Se.fov,nr(.6,.97,Vt)),roll:(g.roll||0)*(1-Vt)}}function lt(ut,Vt){if(p)return ut;let he=performance.now()/1e3,Ht=.004*Vt,Lt=Math.sin(he*.61)*.6+Math.sin(he*1.37+1.3)*.4,Je=Math.sin(he*.47+2.1)*.6+Math.sin(he*1.13+.4)*.4;return{eye:[ut.eye[0]+Lt*Ht,ut.eye[1]+Je*Ht*.7,ut.eye[2]],target:[ut.target[0]+Je*Ht*1.5,ut.target[1]+Lt*Ht,ut.target[2]],fov:ut.fov,roll:ut.roll}}function It(ut,Vt,he){let Ht={};for(let Lt in Vt)Ht[Lt]=typeof Vt[Lt]=="number"&&typeof ut[Lt]=="number"?Ir(ut[Lt],Vt[Lt],he):Vt[Lt];return Ht}function Jt(ut){ut*=window.__confSpeed||1,m+=ut;let Vt=c1(Se),he=c1(Bn.SHOTS.paper),Ht,Lt,Je=c1(Bn.SHOTS.peek);if(v==="room")q.moving?(q.u=Math.min(1,q.u+ut/q.T),Ht=q.path(q.raw?q.u:ta(q.u)),Lt=It(q.lookFrom,q.lookTo,nr(.1,.9,q.u)),q.raw&&(Lt.fade=(x.fade||0)*(1-nr(0,.12,q.u))),q.u>=1&&(q.moving=!1,q.rest=0,h.textContent=V(),R("hint"))):(q.rest+=ut,Ht=lt(c1(Tc[q.i]),2.5),Lt=f1(Tc[q.i]));else if(v==="enter"){let to=Ia(m/(p?.6:9)),no=ta(to),pt=[me.eye,[-7.6,1.9,47.6],[-9.6,1.85,45.6],Ee([.75,1.5,42.95]),Ee([-.25,1.42,42.82]),Ee([-.9,1.42,42.82]),Je.eye];Ht={eye:pi(pt,no),target:af(me.target,Je.target,nr(0,.35,no)),fov:Ir(me.fov,Je.fov,nr(.3,1,no)),roll:0},Lt=It(xe,op,nr(.2,.9,to)),to>=1&&N("peek")}else if(v==="peek")Ht=lt(Je,1.5),Lt=op,m>(p?.5:3.2)&&N("turn");else if(v==="turn"){let k=Ia(m/(p?.4:3.2));Ht=ep(Je,Vt,ta(k)),Lt=It(op,Lc,ta(k)),k>=1&&(N("write"),R("write"))}else if(v==="write")Ht=lt(Vt,1),Lt=Lc;else if(v==="down"){let k=Ia(m/(p?.4:2));Ht=ep(Vt,he,ta(k)),Lt=It(Lc,rf,ta(k)),k>=1&&(M=w.write(y,p)||0,Bn.STATE.inkDirty=!0,N("writing"))}else if(v==="writing")Ht=lt(he,.6),Lt=rf,m>M+.8&&(N("ready"),h.textContent=u?"Scroll to fold it and pass it through":"Swipe up to fold it and pass it through",R("hint"));else if(v==="ready")Ht=lt(he,.6),Lt=rf;else if(v==="fold"){let k=Ia(m/(p?.3:1.5));Bn.STATE.fold=ta(k),Ht=lt(he,.6),Lt=rf,k>=1&&N("slide")}else if(v==="slide"){let to=Ia(m/(p?.6:3.4));Bn.STATE.slide=ta(nr(0,.7,to));let no=ta(nr(.35,1,to));Ht=ep(he,Vt,no),Lt=It(rf,Lc,no),to>=1&&(Bn.STATE.shown=!1,N("final"),R("final"))}else if(v==="final")Ht=lt(Vt,1),Lt=Lc;else if(v==="leave"){let k=p?.6:ot.eye[0]<De[0]-.3?12:7,to=Ia(m/k),no={eye:g.eye,target:g.target,fov:g.fov,roll:g.roll},pt=ta(to),At=ot.eye[0]<De[0]-.3,_t=At?[ot.eye,Ee([-.55,1.4,42.8]),Ee([1.4,1.55,43.3]),[-9.3,1.58,46.4],[-7,1.6,47.15],[-4.6,1.62,46.55],[-2.2,1.68,44.8],[.6,1.72,44.5],no.eye]:[ot.eye,[-3.4,1.7,46.2],[-1.2,1.7,44.8],[.6,1.72,44.5],no.eye],Be=At?[ot.target,Ee([1.5,1.45,43.4]),[-7,1.2,44.6],[-4,1.5,47],[-1.5,1.7,45.5],[1,1.8,44.5],[4,1.8,44.5],[7,1.9,44.2],no.target]:[ot.target,[-1.5,1.7,45.2],[2,1.8,44.5],[6,1.9,44.3],no.target];if(Ht={eye:pi(_t,pt),target:pi(Be,pt),fov:Ir(ot.fov,no.fov,pt),roll:no.roll*pt},Lt=It(Bt||Lc,x,nr(.1,.7,to)),Lt.fade=(x.fade||0)*nr(.82,1,to),to>=1){f=!1,Bn.STATE.active=!1,Bn.STATE.shown=!0,Bn.STATE.fold=0,Bn.STATE.slide=0;let je=S.getContext("2d");je.setTransform(1,0,0,1,0,0),je.clearRect(0,0,S.width,S.height),Bn.STATE.inkDirty=!0,document.body.classList.remove("confessing"),e.onExit&&e.onExit()}}return ze=Ht,B=Lt,{camera:Ht,look:Lt}}let me=null,xe=null;function te(){if(v==="room"){if(q.moving||q.rest<.4)return;q.i<Tc.length-1?D(q.i+1):(me=ze,xe=B,R(""),N("enter"));return}if(v==="peek"){m>.4&&N("turn");return}v==="ready"?Nt():v==="writing"&&w&&(w.finish(),m=Math.max(m,M))}function se(){v==="room"&&!q.moving&&q.rest>.4&&q.i>0&&D(q.i-1)}return{start:G,update:Jt,leave:xt,get active(){return f},get stage(){return v},wheel(ut){ut>8?te():ut<-8&&se()},swipe(ut){ut>0?te():ut<0&&se()},tap(){te()},key(ut){return["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(ut)>=0?(te(),!0):["ArrowUp","ArrowLeft","PageUp"].indexOf(ut)>=0?(se(),!0):ut==="Escape"?(xt(),!0):!1},_setNote(ut){s.value=ut,s.dispatchEvent(new Event("input"))}}}});var jy=Et((C7,By)=>{"use strict";var Nc=cc(),h1=Td(),rp=Kf(),NE=ul(),ap=Nd(),RE=Sr(),u1=!RE.isPhone&&!!(window.matchMedia&&window.matchMedia("(pointer: fine)").matches),{A:xr}=Ar(),{C:_0,PAINTING_X:Pc}=M0(),ar=t=>Math.max(0,Math.min(1,t)),ae=(t,e,o)=>t+(e-t)*o,tn=(t,e,o)=>[ae(t[0],e[0],o),ae(t[1],e[1],o),ae(t[2],e[2],o)],ko=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],sp=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],W0=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],Zt=(t,e,o)=>{let n=ar((o-t)/(e-t));return n*n*(3-2*n)};function OE(t,e,o,n,r,a){if(r<=0)return[t,o];let i=2/n,s=i*r,c=1/(1+s+.48*s*s+.235*s*s*s),h=a*n,l=Math.max(-h,Math.min(h,t-e)),d=t-l,u=(o+i*l)*r,p=(o-i*u)*c,f=d+(l+u)*c;return e-t>0==f>e&&(f=e,p=0),[f,p]}var Iy=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,CE=t=>t*t*t,ip=t=>1-Math.pow(1-t,3),zn=t=>-(Math.cos(Math.PI*t)-1)/2;function $n(t,e){let o=t.length-1,n=ar(e)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,i=t[Math.max(0,r-1)],s=t[r],c=t[r+1],h=t[Math.min(o,r+2)],l=a*a,d=l*a;return[0,1,2].map(u=>.5*(2*s[u]+(-i[u]+c[u])*a+(2*i[u]-5*s[u]+4*c[u]-h[u])*l+(-i[u]+3*s[u]-3*c[u]+h[u])*d))}var bo=(t,e,o,n)=>({eye:t,target:e,fov:o,roll:n||0});function yi(t,e,o){return bo(tn(t.eye,e.eye,o),tn(t.target,e.target,o),ae(t.fov,e.fov,o),ae(t.roll,e.roll,o))}var up=()=>Zt(.75,1.3,window.innerWidth/window.innerHeight),V0=(t,e)=>yi(t,e,up()),d1=[7,3.95,_0.hallEnd-.05],PE=[_0.x1,2.9,_0.zc],Oc=[16.75,4.55,6.75],dp=[6.92,2.72,14.5],oa=[7.3,.015,47.1],$E=[Oc,[16.2,4,7],[15.3,3.45,6.4],[14.1,3.2,5.7],[12.2,3.35,6.6],[10,3.75,9.6],[8.2,3.8,12.2],[7.3,3.4,13.8],dp],IE=[dp,[7.3,4.6,19.5],[7.6,4.9,23.5],[6.6,4.3,28.5],[7.5,3.2,34],[6.8,2.1,39.5],[7.4,1,44.2],[7.2,.3,46.4],oa],mi=[Pc[0],3,_0.z0],gi=[Pc[1],3,_0.z0],lp=47.45,Uy=4.6,qE=13.2,DE=1.57,cf=[7.55,1.25,46.75],pp=[17.25,2.42,46],vp=[26.05,1.95,46],lf=[36.15,.015,44],g1=()=>ae(6.8,6.15,up()),FE=[cf,[9.6,1.65,46.2],[12.3,2.05,45.1],[14.6,2.35,44.5],[16.2,2.3,44.7],pp],GE=[pp,[20.2,2.05,45.6],[23.2,1.8,45],vp],xi=[Pc[2],3,_0.z0],fp=[34.8,1.35,46],ws=[7.89,.03,19.03],qy=.36,Dy=13.64,E0=[{side:"left",z:34.5},{side:"left",z:23.5},{side:"left",z:14.6},{side:"right",z:14.6},{side:"right",z:23.5},{side:"right",z:34.5}];function qr(t){let e=t.side==="left"?1:-1;return tn([7-e*1,3,t.z+e*.2],[7-e*.6,3.25,t.z+e*.13],up())}function HE(t){return t.side==="left"?V0(bo([8.6,3.9,t.z],[qy,1.45,t.z],76),bo([8,3.6,t.z+.7],[qy,3.95,t.z-2],46,-.008)):V0(bo([5.4,3.9,t.z],[Dy,1.45,t.z],76),bo([6,3.6,t.z-.7],[Dy,3.95,t.z+2],46,-.008))}var UE=()=>[lf,[35.6,.5,44.6],[33.2,1.5,45.6],[29,2.3,46.1],[23.5,2.7,45.9],[18.5,2.9,45.4],[14.8,3.1,44.3],[11,3.3,41.8],[7.4,3.4,38.8],[5.4,3.3,36.6],qr(E0[0])],BE=()=>[qr(E0[2]),[3,3.2,13.2],[1.7,3,12],[2.6,3.2,10],[5,3.6,8.9],[7,3.8,8.6],[9,3.6,8.9],[11.4,3.2,10],[12.3,3,12],[11,3.1,13.4],qr(E0[3])],jE=()=>[qr(E0[5]),[9,3.4,31],[7.8,2.8,27.5],[6.8,1.9,24.5],[7.4,1,21],[7.75,.35,19.6],ws],Fy={2:{pos:()=>dp,amp:[.18,.07,.12],tumble:.5},7:{pos:()=>cf,amp:[.12,.09,.1],tumble:.55},8:{pos:()=>pp,amp:[.1,.08,.08],tumble:.5},9:{pos:()=>vp,amp:[.09,.06,.07],tumble:.45},10:{pos:()=>fp,amp:[.07,.04,.06],tumble:.35},12:{pos:()=>qr(E0[0]),amp:[.12,.08,.1],tumble:.5},13:{pos:()=>qr(E0[1]),amp:[.12,.08,.1],tumble:.5},14:{pos:()=>qr(E0[2]),amp:[.12,.08,.1],tumble:.5},15:{pos:()=>qr(E0[3]),amp:[.12,.08,.1],tumble:.5},16:{pos:()=>qr(E0[4]),amp:[.12,.08,.1],tumble:.5},17:{pos:()=>qr(E0[5]),amp:[.12,.08,.1],tumble:.5}},bs=[{name:"corridor",ui:"intro",look:{letterbox:1,exposure:1,focus:14,aperture:.25,vignette:.1},cam(t){let e=.9*(1-Math.exp(-t/14)),o=[0,Math.sin(t*.37)*.025,Math.sin(t*.23)*.06],n=V0(bo([_0.x0+.9,1.85,_0.zc+.25],[_0.x1,2.85,_0.zc-.1],64),bo([_0.x0+1.2,2,_0.zc+.35],[_0.x1,2.6,_0.zc-.15],50));return n.eye=ko(ko(n.eye,[e,0,0]),o),n}},{name:"about",ui:"about",look:{letterbox:.55,exposure:1.32,focus:2.9,aperture:.9,vignette:.12,shafts:.65},cam(t){let e=[Math.sin(t*.21)*.08,Math.sin(t*.33)*.03,-.25*(1-Math.exp(-t/12))],o=V0(bo([16.6,1.9,9.2],[17.3,.4,5.6],64),bo([15,1.35,7.75],[17.55,1.05,5.5],44,-.02));return o.eye=ko(o.eye,e),o}},{name:"sky",ui:"sky",look:{letterbox:.55,exposure:1,focus:2.1,aperture:.45,vignette:.1,shafts:1},cam(t){let e=[Math.sin(t*.12)*.35,Math.sin(t*.2)*.04,(1-Math.cos(t*.12))*.25],o=V0(bo([7,1.35,13],[7.2,7.6,20.4],74,.05),bo([6.6,1.5,12.6],[7.3,7.2,20.8],56,.07));return o.eye=ko(o.eye,e),o}},{name:"master",ui:"master",look:{letterbox:.55,exposure:1.12,focus:8,aperture:.6,vignette:.3,shafts:.5},cam(t){let e=[Math.sin(t*.17)*.05,Math.sin(t*.29)*.02,-.35*(1-Math.exp(-t/16))],o=V0(bo([7,3.6,43.7],[7,3.85,d1[2]],74),bo([7,3.6,41.3],[7,3.95,d1[2]],46));return o.eye=ko(o.eye,e),o}},{name:"story",ui:"story",look:{letterbox:.55,exposure:1,focus:8.1,aperture:.9,vignette:.4,shafts:.4},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=V0(bo([7,3.9,40.3],[7,1.35,d1[2]],76),bo([6.3,3.6,41.2],[3.7,3.95,d1[2]],46,-.008));return o.eye=ko(o.eye,e),o}},{name:"leaf",ui:"leaf",look:{letterbox:.55,exposure:1.15,focus:1.25,aperture:1.3,vignette:.35,shafts:.4},cam(t){let e=[Math.sin(t*.2)*.02,Math.sin(t*.3)*.006,0],o=V0(bo([7.15,.15,46],[7.3,.04,oa[2]],50),bo([7.05,.14,45.9],[7.25,.05,oa[2]],32));return o.eye=ko(o.eye,e),o}},{name:"steps",ui:"steps",look:{letterbox:.9,exposure:1.2,focus:1.6,aperture:1.4,vignette:.4,shafts:.4},cam(t){let e=[Math.sin(t*.2)*.015,0,0],o=V0(bo([7.15,.1,46.3],[7.05,.1,lp],50),bo([7.1,.12,45.85],[7,.2,lp],30));return o.eye=ko(o.eye,e),o}},{name:"float",ui:"float",look:{letterbox:.55,exposure:1.1,focus:2.2,aperture:.8,vignette:.3,shafts:.6},cam(t){let e=[Math.sin(t*.17)*.05,Math.sin(t*.27)*.02,0],o=V0(bo([7.3,.85,45.65],[7.6,1.38,47.1],64),bo([7.25,.82,45.8],[7.65,1.35,47.1],44));return o.eye=ko(o.eye,e),o}},{name:"painting1",ui:"p1",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=V0(bo([mi[0],2.3,46.85],[mi[0],1.25,mi[2]],74),bo([mi[0]-.6,2.55,46.85],[mi[0]+1.9,2.9,mi[2]],46,.008));return o.eye=ko(o.eye,e),o}},{name:"painting2",ui:"p2",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=V0(bo([gi[0],1.95,46.85],[gi[0],1,gi[2]],74),bo([gi[0]-.6,2.1,46.85],[gi[0]+1.9,2.75,gi[2]],46,.008));return o.eye=ko(o.eye,e),o}},{name:"painting3",ui:"p3",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.9},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=V0(bo([xi[0],1.4,46.85],[xi[0],.6,xi[2]],74),bo([xi[0]-.6,1.45,46.85],[xi[0]+1.9,2,xi[2]],46,.008));return o.eye=ko(o.eye,e),o}},{name:"door",ui:"door",look:{letterbox:.8,exposure:1.05,focus:1.45,aperture:1.1,vignette:.35,shafts:1},cam(t){let e=[Math.sin(t*.2)*.02,Math.sin(t*.3)*.006,0],o=V0(bo([34.75,.5,44.15],[_0.x1,.8,43.95],66),bo([34.75,.45,44.3],[_0.x1,.35,43.95],50));return o.eye=ko(o.eye,e),o}},...E0.map((t,e)=>({name:"hall"+e,ui:"h"+e,look:{letterbox:.55,exposure:1,focus:7.6,aperture:.7,vignette:.35,shafts:.7},cam(o){let n=[Math.sin(o*.15)*.04,Math.sin(o*.25)*.015,Math.sin(o*.11)*.04],r=HE(t);return r.eye=ko(r.eye,n),r}})),{name:"rest",ui:"end",look:{letterbox:.55,exposure:1.05,focus:2.4,aperture:.5,vignette:.4,shafts:1.15},cam(t){let e=t*.025,o=V0(bo([7.75,2.6,18.6],[7.89,0,19.08],60),bo([7.75,2.3,18.45],[7.89,0,19.08],46)),n=o.eye[0]-ws[0],r=o.eye[2]-ws[2];return o.eye=[ws[0]+n*Math.cos(e)-r*Math.sin(e),o.eye[1],ws[2]+n*Math.sin(e)+r*Math.cos(e)],o}}],WE=[1,.96,.88];function Gy(t,e){return{dur:e,cam(o,n,r){let a=zn(o),i=yi(n,r,a),s=E0[t].side==="left"?1:-1;return i.eye=ko(i.eye,[s*.6*Math.sin(Math.PI*a),.15*Math.sin(Math.PI*a),0]),i},look(o,n,r){let a={};for(let i in r)typeof r[i]=="number"&&(a[i]=ae(n[i],r[i],o));return a.aperture=ae(n.aperture,r.aperture,o)*(1-.5*Math.sin(Math.PI*o)),a},leaf(o){let n=zn(o),r=qr(E0[t]),a=qr(E0[t+1]),i=E0[t].side==="left"?1:-1,s=ko(tn(r,a,.5),[i*1.2,.5,0]),c=$n([r,tn(r,s,.6),s,tn(a,s,.6),a],n);return{phase:"fly",pos:ko(c,[0,Math.sin(o*Math.PI*5)*.07*Math.sin(Math.PI*o),0]),tumble:.5+.35*Math.sin(Math.PI*o)}}}}var cp=[{dur:6.2,cam(t,e,o){if(t<.5){let s=CE(t/.5),c=tn(e.eye,[_0.x1-3.2,2.6,_0.zc],s),h=tn(e.target,PE,Zt(0,.6,t/.5));return bo(c,h,ae(e.fov,e.fov-8,s),ae(e.roll,.04,s))}let n=ip((t-.5)/.5),r=[[xr.cx+.4,10.4,xr.zc+.6],[xr.cx-.6,7.6,xr.zc+1.3],[xr.cx-1.9,4.6,xr.zc+1.75],o.eye],a=[[xr.cx-.1,0,xr.zc-.2],[xr.cx-1,.4,xr.zc-.1],[xr.cx-1.1,.8,xr.zc-.2],o.target];return bo($n(r,n),$n(a,n),ae(o.fov+14,o.fov,n),ae(-.25,o.roll,n))},look(t,e,o){let n=Zt(.22,.5,t),r=1-Zt(.5,.74,t);return{fade:t<.5?n:r,fadeColor:WE,exposure:ae(e.exposure,o.exposure,Zt(.5,.9,t))*(1+2.2*(t<.5?Zt(.15,.5,t):1-Zt(.5,.8,t))),letterbox:ae(e.letterbox,o.letterbox,Zt(.3,.7,t)),aperture:t<.5?e.aperture*(1-t*2):o.aperture*Zt(.6,1,t),focus:ae(4,o.focus,Zt(.5,1,t)),shafts:ae(e.shafts,o.shafts,Zt(.4,.6,t)),vignette:ae(e.vignette,o.vignette,t)}},leaf(){return{phase:"home"}}},{dur:9,cam(t,e,o,n){let r=[e.eye,[15.6,2.4,8.3],[15.4,2.7,7.1],[12.6,2.6,5.4],[9.6,2,7.4],[7.6,1.6,10.6],o.eye],a=$n(r,zn(t)),i=Zt(0,.12,t)*(1-Zt(.82,1,t)),s=tn(tn(e.target,o.target,Zt(.55,1,t)),n.pos,i),c=ae(e.fov,o.fov,Zt(.3,1,t))-6*Math.sin(Math.PI*t),h=ae(e.roll,o.roll,t)+.05*Math.sin(Math.PI*2*t);return bo(a,s,c,h)},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{exposure:ae(e.exposure,o.exposure,Zt(.25,.75,t)),letterbox:ae(e.letterbox,o.letterbox,t),focus:ae(a,o.focus,Zt(.8,1,t)),aperture:ae(.7,o.aperture,Zt(.8,1,t)),shafts:ae(e.shafts,o.shafts,Zt(.3,.8,t)),vignette:ae(e.vignette,o.vignette,t)}},leaf(t){let e=Iy(t),o=Math.sin(t*Math.PI*7)*.14*Math.sin(Math.PI*t);return{phase:"fly",pos:ko($n($E,e),[0,Math.sin(t*Math.PI*9)*.05*Math.sin(Math.PI*t),o]),tumble:1-.5*Zt(.8,1,t)}}},{dur:11.5,cam(t,e,o,n){let r=$n([e.eye,[7,1.9,19],[7.1,1.6,27.5],[6.9,1.1,36],[7,.7,42.5],[7.05,.5,45.7]],Zt(0,.8,t)*.6+zn(ar(t/.8))*.4),a=$n([[7.05,.5,45.7],[7,1.2,45.3],[7,2.6,43.8],o.eye],zn(Zt(.8,1,t))),i=t<.8?r:a,s=tn(tn(e.target,n.pos,Zt(.03,.22,t)),o.target,Zt(.82,1,t)),c=ae(e.fov,o.fov,Zt(.15,.7,t))-6*Zt(.6,.8,t)*(1-Zt(.85,1,t)),h=ae(e.roll,o.roll,Zt(0,.6,t))-.04*Math.sin(Math.PI*t);return bo(i,s,c,h)},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{exposure:ae(e.exposure,o.exposure,Zt(.5,1,t)),letterbox:ae(e.letterbox,o.letterbox,t),focus:ae(a,o.focus,Zt(.84,1,t)),aperture:ae(1.1,o.aperture,Zt(.84,1,t)),shafts:ae(e.shafts,o.shafts,Zt(.2,.9,t)),vignette:ae(e.vignette,o.vignette,Zt(.5,1,t))}},leaf(t){let e=ae(Iy(t),t,.35),o=$n(IE,Zt(0,.78,e)),n=Math.sin(t*Math.PI*8)*.35*(1-Zt(.55,.76,t)),r=Zt(.7,.8,t);return{phase:"fly",pos:ko(o,[n,Math.abs(Math.cos(t*Math.PI*8))*.12*(1-r),0]),tumble:1-r,swing:n}}},{dur:2.6,cam(t,e,o){let n=zn(t),r=yi(e,o,n);return r.eye=ko(r.eye,[0,0,-.35*Math.sin(Math.PI*n)]),r},look(t,e,o){let n=zn(t),r={};for(let a in o)typeof o[a]=="number"&&(r[a]=ae(e[a],o[a],n));return r},leaf(){return{phase:"floor"}}},{dur:4.5,cam(t,e,o){let n=zn(t),r=$n([e.eye,[6.9,1.7,43.9],[7.05,.45,45.4],o.eye],n),a=tn(e.target,o.target,Zt(.1,.85,t));return bo(r,a,ae(e.fov,o.fov,Zt(.2,1,t)),ae(e.roll,o.roll,n))},look(t,e,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=ae(e[r],o[r],Zt(.2,1,t)));return n},leaf(){return{phase:"floor"}}},{dur:5.5,cam(t,e,o){return yi(e,o,zn(t))},look(t,e,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=ae(e[r],o[r],zn(t)));return n},leaf(){return{phase:"floor"}},walker(t){return ae(Uy,g1(),t)}},{dur:11,kick:t=>ar((t-Rc())/(1-Rc())),cam(t,e,o,n){let r=Rc(),a=Zt(0,r,t)*(1-Zt(r+.12,r+.35,t)),i=Hy(Math.min(t,Cc)),s=ko(e.target,[(i-e.target[0])*.15*a,0,0]),c=Zt(r+.12,1,t),h=$n([e.eye,e.eye,ko(e.eye,[0,.12,-.3]),o.eye],c);return s=tn(s,n.pos,Zt(r+.06,r+.24,t)*(1-Zt(.9,1,t))),s=tn(s,o.target,Zt(.88,1,t)),bo(h,s,ae(e.fov,o.fov,c),ae(e.roll,o.roll,c))},look(t,e,o,n,r){let a=Rc(),i=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]),s=Zt(0,.12,t)*(1-Zt(a+.25,a+.5,t));return{letterbox:ae(ae(e.letterbox,o.letterbox,Zt(a,1,t)),1.75,s),exposure:ae(e.exposure,o.exposure,Zt(a,1,t)),focus:t<a?e.focus:ae(e.focus,i,Zt(a,a+.2,t)),aperture:ae(e.aperture,o.aperture,Zt(a,1,t)),vignette:ae(e.vignette,o.vignette,t),shafts:ae(e.shafts,o.shafts,t)}},leaf(t){let e=ar((t-Rc())/(1-Rc()));if(e<=0)return{phase:"floor"};let o=Zt(0,.85,e)*.85+ip(Zt(0,.15,e))*.15;return{phase:"fly",pos:ko(oa,[(cf[0]-oa[0])*o+Math.sin(e*9)*.08*(1-e),(cf[1]-oa[1])*o,(cf[2]-oa[2])*o+Math.sin(e*7)*.06*(1-e)]),tumble:1.3-.75*e}},walker(t){return t<.985?Hy(t):null}},{dur:9,cam(t,e,o,n){let r=zn(t),a=$n([e.eye,[9.4,1.35,45.6],[12.4,2,45.9],[15,2.45,46.5],o.eye],r),i=1-Zt(.6,.92,t),s=tn(tn(e.target,n.pos,Zt(0,.15,t)),o.target,1-i),c=ae(e.fov,o.fov,Zt(.3,1,t)),h=ae(e.roll,o.roll,r)+.04*Math.sin(Math.PI*t);return bo(a,s,c,h)},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:ae(e.letterbox,o.letterbox,t),exposure:ae(e.exposure,o.exposure,Zt(.3,.8,t)),focus:ae(a,o.focus,Zt(.6,.95,t)),aperture:ae(e.aperture,o.aperture,Zt(.6,1,t)),vignette:ae(e.vignette,o.vignette,t),shafts:ae(e.shafts,o.shafts,Zt(.3,.8,t))}},leaf(t){let e=zn(t);return{phase:"fly",pos:ko($n(FE,e),[0,Math.sin(t*Math.PI*5)*.08*Math.sin(Math.PI*t),Math.sin(t*Math.PI*4)*.12*Math.sin(Math.PI*t)]),tumble:.55+.4*Math.sin(Math.PI*t)}}},{dur:6.5,cam(t,e,o){let n=zn(t),r=yi(e,o,n);return r.eye=ko(r.eye,[0,.12*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),r},look(t,e,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=ae(e[r],o[r],t));return n.aperture=ae(e.aperture,o.aperture,t)*(1-.5*Math.sin(Math.PI*t)),n},leaf(t){let e=zn(t);return{phase:"fly",pos:ko($n(GE,e),[0,Math.sin(t*Math.PI*4)*.07*Math.sin(Math.PI*t),0]),tumble:.5+.3*Math.sin(Math.PI*t)}}},{dur:6.5,cam(t,e,o){let n=zn(t),r=yi(e,o,n);return r.eye=ko(r.eye,[0,.1*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),r},look(t,e,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=ae(e[r],o[r],t));return n.aperture=ae(e.aperture,o.aperture,t)*(1-.5*Math.sin(Math.PI*t)),n},leaf(t){let e=zn(t);return{phase:"fly",pos:ko($n([vp,[29.2,1.75,45.5],[32.2,1.5,45.4],fp],e),[0,Math.sin(t*Math.PI*4)*.06*Math.sin(Math.PI*t),0]),tumble:.45+.25*Math.sin(Math.PI*t)}}},{dur:6,cam(t,e,o,n){let r=zn(t),a=$n([e.eye,[34.2,1.15,45.6],[34.5,.7,44.8],o.eye],r),i=Zt(.05,.3,t)*(1-Zt(.8,1,t)),s=tn(tn(e.target,o.target,Zt(.6,1,t)),n.pos,i);return bo(a,s,ae(e.fov,o.fov,Zt(.2,1,t)),ae(e.roll,o.roll,r))},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:ae(e.letterbox,o.letterbox,t),exposure:ae(e.exposure,o.exposure,t),focus:ae(a,o.focus,Zt(.8,1,t)),aperture:ae(.9,o.aperture,Zt(.8,1,t)),vignette:ae(e.vignette,o.vignette,t),shafts:ae(e.shafts,o.shafts,t)}},leaf(t){let e=$n([fp,[35.3,.9,45.2],[35.75,.4,44.4],[36,.08,44.05],lf],Zt(0,.85,t)),o=Math.sin(t*Math.PI*6)*.25*(1-Zt(.35,.82,t)),n=Zt(.78,.88,t);return{phase:"fly",pos:ko(e,[0,Math.abs(Math.cos(t*Math.PI*6))*.07*(1-n),o]),tumble:.7*(1-n),swing:o}}},{dur:12,door(t){let e=ar((t-.02)/.09);return ip(e)+.07*Math.sin(ar((t-.08)/.18)*Math.PI)*(1-ar((t-.08)/.3))},cam(t,e,o,n){let r=Math.sin(t*340)*.012*Zt(.02,.05,t)*(1-Zt(.08,.16,t)),a=Zt(.06,1,t),i=$n([e.eye,[34.3,1,43.6],[31.5,1.9,43.4],[26.5,2.4,43.6],[21,2.6,43.6],[16.5,2.8,43.2],[12.6,3.1,41.2],[9.6,3.4,38],o.eye],a*.55+zn(a)*.45),s=ko(n.pos,[1,-.2,-1.45]);i=tn(i,s,Zt(.1,.22,t)*(1-Zt(.52,.72,t)));let c=Zt(.06,.16,t)*(1-Zt(.86,1,t)),h=tn(e.target,n.pos,c);h=tn(h,o.target,Zt(.86,1,t));let l=ae(e.fov,o.fov,Zt(.1,1,t))+6*Math.sin(Math.PI*Zt(.08,.9,t)),d=ae(e.roll,o.roll,t)+.06*Math.sin(Math.PI*2*Zt(.1,.9,t))+r;return bo(ko(i,[0,r,0]),h,l,d)},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]),i=Zt(.02,.06,t)*(1-Zt(.08,.3,t));return{letterbox:ae(e.letterbox,o.letterbox,Zt(.1,.4,t)),exposure:ae(e.exposure,o.exposure,t)*(1+.8*i),focus:ae(a,o.focus,Zt(.86,1,t)),aperture:ae(.8,o.aperture,Zt(.86,1,t)),vignette:ae(e.vignette,o.vignette,t),shafts:ae(e.shafts,o.shafts,t)+i}},leaf(t){let e=ar((t-.05)/.95);if(e<=0)return{phase:"floor"};let o=$n(UE(),e*.6+zn(e)*.4),n=Math.sin(t*Math.PI*9)*.12*Math.sin(Math.PI*e);return{phase:"fly",pos:ko(o,[0,n*.6,n]),tumble:1.4-.8*e}}},...[0,1].map(t=>Gy(t,7.5)),{dur:10,cam(t,e,o,n){let r=zn(t),a=$n([e.eye,[7.6,3.2,16.2],[7,2.9,17.2],[6.5,3.2,16],o.eye],r),i=Zt(0,.15,t)*(1-Zt(.85,1,t)),s=tn(tn(e.target,o.target,Zt(.5,1,t)),n.pos,i);return bo(a,s,ae(e.fov,o.fov,r)+4*Math.sin(Math.PI*r),ae(e.roll,o.roll,r))},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:ae(e.letterbox,o.letterbox,t),exposure:ae(e.exposure,o.exposure,t),focus:ae(a,o.focus,Zt(.85,1,t)),aperture:ae(.6,o.aperture,Zt(.85,1,t)),vignette:ae(e.vignette,o.vignette,t),shafts:ae(e.shafts,o.shafts,t)}},leaf(t){let e=zn(t),o=$n(BE(),e);return{phase:"fly",pos:ko(o,[0,Math.sin(t*Math.PI*6)*.06*Math.sin(Math.PI*t),0]),tumble:.6+.4*Math.sin(Math.PI*t)}}},...[3,4].map(t=>Gy(t,7.5)),{dur:10,cam(t,e,o,n){let r=zn(t),a=$n([e.eye,[7.6,4,30.5],[7.3,4.4,25.5],[7.1,4,21.8],o.eye],r),i=Zt(0,.2,t)*(1-Zt(.9,1,t)),s=tn(tn(e.target,o.target,Zt(.5,1,t)),n.pos,i);return bo(a,s,ae(e.fov,o.fov,r),ae(e.roll,o.roll,r))},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:ae(e.letterbox,o.letterbox,t),exposure:ae(e.exposure,o.exposure,t),focus:ae(a,o.focus,Zt(.85,1,t)),aperture:ae(.7,o.aperture,Zt(.85,1,t)),vignette:ae(e.vignette,o.vignette,t),shafts:ae(e.shafts,o.shafts,t)}},leaf(t){let e=$n(jE(),Zt(0,.86,t)),o=Math.sin(t*Math.PI*7)*.3*(1-Zt(.4,.84,t)),n=Zt(.8,.9,t);return{phase:"fly",pos:ko(e,[o,Math.abs(Math.cos(t*Math.PI*7))*.08*(1-n),0]),tumble:.8*(1-n),swing:o}}}],hp=9.2,Cc=.72;function Hy(t){return t<Cc?ae(g1(),hp,t/Cc):ae(hp,qE,(t-Cc)/(1-Cc))}function Rc(){return Cc*ar((oa[0]+.15-g1())/(hp-g1()))}var m1={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},p1=t=>Object.assign({},m1,bs[t].look),VE=`
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
`;function rr(t,e,o){let n=document.createElement(t);return e&&(n.className=e),o!==void 0&&(n.innerHTML=o),n}var vi=t=>String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function v1(t,e,o){t.querySelectorAll(".tour-line").forEach((n,r)=>{n.style.transitionDelay=(e+r*o).toFixed(2)+"s"})}By.exports=function(e){let o=/tourdebug/.test(location.search),{fps:n}=e;if(!document.querySelector("link[data-tour-font]")){let X=document.createElement("link");X.rel="stylesheet",X.href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&display=swap",X.setAttribute("data-tour-font",""),document.head.appendChild(X)}let r=Zd(),a=null;fetch("res/hand.json").then(X=>X.ok?X.json():null).then(X=>{a=X}).catch(()=>{});let i=document.createElement("style");i.textContent=VE+`
	.hand-text { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); clip-path: inset(50%); white-space: normal; }
	.tour-body canvas.hand { display: block; cursor: pointer; }`,i.textContent+=`
	body.touring #museum-mobile-controls,
	body.touring .painting-plaque { display: none !important; }`,document.head.appendChild(i);let s=rr("div","tour");s.setAttribute("role","region"),s.setAttribute("aria-label","Guided tour of the gallery. Swipe, scroll or press the arrow keys to move on.");let c=rr("div","tour-mark",vi(h1.name)),h=rr("button","tour-free","Explore freely");h.type="button";let l=rr("div","tour-links",rp.icons("tour-icon"));l.insertBefore(tp()("tour-icon"),l.firstChild),l.insertBefore(Yh().button("tour-icon"),l.firstChild.nextSibling);let d=rr("button","tour-free tour-note",'<svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 4c-7 1-11.5 5.5-13 13l-1.5 3 3-1.5c7.500-1.500 12-6 13-13z"/><path d="M5.5 20L13 12.500"/></svg><span>Leave a note</span>');d.type="button",d.setAttribute("aria-label","Leave a note: go to the piano room and the confessional"),l.appendChild(d),u1&&l.appendChild(h);let u=rr("div","tour-progress",bs.map(()=>"<i></i>").join("")),p=rr("div","tour-hint",'<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 15l6-6 6 6"></path></svg><span></span>'),f=p.querySelector("span"),v=rr("div","tour-card tour-intro",`
		<span class="tour-line tour-kicker">A virtual gallery</span>
		<span class="tour-rule"></span>
		<h1 class="tour-line tour-title">${vi(h1.name)}</h1>
		<span class="tour-line tour-sub tour-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</span>`);v1(v,.4,.35);let m=h1.text.split(/\n\s*\n/).map(X=>`<p class="tour-line">${vi(X.trim())}</p>`).join(""),g=rr("div","tour-card tour-about",`
		<span class="tour-line tour-kicker">The artist</span>
		<h2 class="tour-line tour-title">${vi(h1.title)}</h2>
		<span class="tour-rule"></span>
		${rp.line("tour-line tour-contact")}
		${m}`);v1(g,.25,.28);let x=rr("div","tour-card tour-sky",`
		<span class="tour-line tour-sub">Every painting here waits for the light.</span>`);v1(x,.6,.3);let y=rr("div","tour-card tour-master","");function w(X){let yt=rr("div","tour-card tour-story",`
			<span class="tour-line tour-kicker"></span>
			<h2 class="tour-title tour-letters"></h2>
			<span class="tour-rule"></span>
			<span class="tour-line visit-row"></span>
			<div class="tour-body"></div>`),de=yt.querySelector(".tour-title"),Oe=yt.querySelector(".tour-body");return yt.filled=!1,yt.body=Oe,yt.fill=()=>{let qe=X();if(!qe||yt.filled)return;yt.filled=!0;let hn=qe.title||"";yt.querySelector(".tour-kicker").textContent=NE(qe)||"Oil on canvas";let u0=yt.querySelector(".visit-row");u0.innerHTML=ap.button(qe),u0.hidden=!u0.innerHTML;let C0=u0.querySelector(".visit-btn");C0&&(C0.addEventListener("click",Eo=>{Eo.stopPropagation(),ap.open(qe)}),yt.warm=()=>ap.warm(qe));let un=0;de.innerHTML=hn.split(" ").map(Eo=>'<span class="tour-word">'+Eo.split("").map(n0=>`<span style="transition-delay:${(.35+un++*.045).toFixed(3)}s">${vi(n0)}</span>`).join("")+"</span>").join(" "),de.setAttribute("aria-label",hn);let z0=.35+hn.length*.045+.2;yt.querySelector(".tour-rule").style.transitionDelay=z0.toFixed(2)+"s";let dn=String(qe.description||"").split(/\n\s*\n/).filter(Eo=>Eo.trim());if(yt.querySelector(".tour-kicker").style.transitionDelay="0.1s",a&&dn.length){Oe.innerHTML=dn.map(An=>`<p class="hand-text">${vi(An.trim())}</p>`).join("")+'<div class="hand-wrap"><canvas class="hand" aria-hidden="true"></canvas></div>';let Eo=Oe.querySelector("canvas"),n0=dn.map(An=>An.trim()).join(`

`),en=!1,Wn=!1,Y0=0;Oe.addEventListener("wheel",()=>{en=!0},{passive:!0}),Oe.addEventListener("touchmove",()=>{en=!0},{passive:!0});let K0=parseFloat(getComputedStyle(Oe).fontSize)||17,Jo=r(Eo,a,{ink:"rgba(244,236,223,0.93)",shadow:"rgba(0,0,0,0.55)",shadowBlur:7,xh:Math.max(8.5,K0*.56),width:.14,speed:80,pace:.12,minDur:.022,maxTime:An=>3.5+An.length/420,seed:3+hn.length,onPen:An=>{if(en)return;let Fr=An-Oe.clientHeight*.55;Fr>Oe.scrollTop+4&&(Oe.scrollTop+=Math.min(16,Fr-Oe.scrollTop))}});Eo.addEventListener("click",An=>{An.stopPropagation(),clearTimeout(Y0),Wn?Jo.finish():(Wn=!0,Jo.write(n0,!0))}),yt.write=()=>{if(clearTimeout(Y0),en=!1,Wn){Jo.write(n0,!0);return}Jo.write("",!0),Y0=setTimeout(()=>{Wn=!0,Jo.write(n0)},z0*.6*1e3)},yt.stopWrite=()=>{clearTimeout(Y0),Jo.stop()};let wr=0;window.addEventListener("resize",()=>{clearTimeout(wr),wr=setTimeout(()=>{Wn&&yt.classList.contains("on")&&Jo.write(n0,!0)},250)})}else Oe.innerHTML=dn.map(Eo=>`<p class="tour-line">${vi(Eo.trim())}</p>`).join(""),Oe.querySelectorAll(".tour-line").forEach((Eo,n0)=>{Eo.style.transitionDelay=(z0+.3+Math.min(n0,6)*.35).toFixed(2)+"s"})},yt}let M=()=>e.paintings?e.paintings():[],_=X=>M().find(yt=>yt.side==="corridor"&&Math.abs(yt.paintingPosition[0]-X)<.5),S=w(()=>M().find(X=>X.side==="end")),R=()=>rr("div","tour-card",""),N=w(()=>_(mi[0])),G=w(()=>_(gi[0])),q=w(()=>_(xi[0])),V=E0.map(X=>w(()=>M().find(yt=>yt.side===X.side&&Math.abs(yt.paintingPosition[2]-X.z)<.5))),D=rr("div","tour-card tour-endcard",`
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
		</div>`);v1(D,.5,.35);let B=[v,g,x,y,S,R(),R(),R(),N,G,q,R(),...V,D];s.append(...B,c,l,u,p),document.body.appendChild(s);let dt=$y()({root:s,avatar:e.avatar,glyphs:()=>a,onExit:()=>{Ht=-1,le&&(ee={start:k},le=!1)}});document.body.classList.add("touring");let Gt=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,Nt=Gt?"Scroll":"Swipe",xt=bs.map((X,yt)=>yt===0?Gt?"Scroll to begin":"Swipe up to begin":yt===1?Nt+" to follow the leaf":yt===2?Nt+" to follow the light":yt===3?Nt+" for its story":yt===6||yt===7||yt===bs.length-1?"":Nt+" on"),ot=[0];cp.forEach(X=>ot.push(ot[ot.length-1]+X.dur));let Bt=ot[ot.length-1],ze=210,Se=95,De=.35,Ee=1.4,rt=.32,ht=1,oe=1.3,lt=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,It=2.2,Jt=.7,me=.9,xe=!0,te=0,se=0,ut=0,Vt=-10,he=!1,Ht=-1,Lt=0,Je=0,k=0,to=null,no=Object.assign({},p1(0)),pt=bs[0].cam(0),At={phase:"home",pos:Oc.slice(),tumble:0},_t=0,Be=X=>{let yt=0;for(let de=1;de<ot.length;de++)Math.abs(ot[de]-X)<Math.abs(ot[yt]-X)&&(yt=de);return yt};function je(X){let yt=B[X];yt&&yt.fill&&(yt.fill(),yt.body.scrollTop=0,yt.offsetWidth),B.forEach((de,Oe)=>{let qe=de.classList.contains("on");de.classList.toggle("on",Oe===X),Oe===X&&!qe&&de.write&&de.write(),Oe!==X&&qe&&de.stopWrite&&de.stopWrite()}),yt&&yt.warm&&yt.warm(),f.textContent=xt[X]||"",p.classList.toggle("on",!!xt[X])}function Xe(){B.forEach(X=>{X.stopWrite&&X.classList.contains("on")&&X.stopWrite(),X.classList.remove("on")}),p.classList.remove("on")}let Ve=null,zo=-1;function U(X){if(dt.active||!xe||to)return;let yt=k-Vt>De;if(Vt=k,yt||!Ve){let de=0,Oe=Bt;for(let qe=0;qe<ot.length;qe++)if(ot[qe]<=te-.02&&(de=ot[qe]),ot[qe]>=te+.02){Oe=ot[qe];break}Ve={lo:de,hi:Oe}}k<zo||(he=!1,ut=Math.max(Ve.lo,Math.min(Ve.hi,ut+X)),ut=Math.max(te-It,Math.min(te+It,ut)))}function bt(X){if(dt.active||!xe||to)return;let yt=he?ut:te,de;if(X>0)de=ot.findIndex(Oe=>Oe>yt+.05);else{de=-1;for(let Oe=ot.length-1;Oe>=0;Oe--)if(ot[Oe]<yt-.05){de=Oe;break}}de<0||(ut=ot[de],he=!0,Vt=k)}let Rt=null,zt=X=>X.stopPropagation();["touchstart","touchmove","touchend","mousedown","mouseup","click","contextmenu"].forEach(X=>s.addEventListener(X,zt)),s.addEventListener("pointerdown",X=>{if(X.stopPropagation(),!(X.target.closest("button, a")||X.target.closest(".tour-body"))){Rt={x:X.clientX,y:X.clientY,lx:X.clientX,ly:X.clientY,t:performance.now(),moved:0,v:0,lt:performance.now()};try{s.setPointerCapture(X.pointerId)}catch(yt){}}}),s.addEventListener("pointermove",X=>{if(!Rt)return;let yt=X.clientX-Rt.lx,de=X.clientY-Rt.ly;Rt.lx=X.clientX,Rt.ly=X.clientY;let Oe=Math.abs(de)>=Math.abs(yt)?-de:-yt;Rt.moved+=Math.abs(Oe);let qe=performance.now(),hn=Oe/Se;Rt.v=Rt.v*.6+hn/Math.max(.008,(qe-Rt.lt)/1e3)*.4,Rt.lt=qe,Rt.moved>6&&U(hn)});let ce=X=>{let yt=Rt;if(Rt=null,!!yt){if(dt.active){yt.moved<10&&performance.now()-yt.t<500?dt.tap():yt.y-(X?X.clientY:yt.ly)>30&&dt.swipe(1);return}yt.moved<10&&performance.now()-yt.t<500?bt(1):performance.now()-yt.lt<120&&U(Math.max(-1.6,Math.min(1.6,yt.v*.22)))}};s.addEventListener("pointerup",X=>{X.stopPropagation(),ce(X)}),s.addEventListener("pointercancel",()=>{Rt=null}),s.addEventListener("wheel",X=>{if(dt.active){if(X.target.closest(".conf-ui"))return;X.preventDefault(),dt.wheel(X.deltaY);return}if(X.target.closest(".tour-body")){let de=X.target.closest(".tour-body"),Oe=de.scrollTop+de.clientHeight>=de.scrollHeight-2&&X.deltaY>0,qe=de.scrollTop<=0&&X.deltaY<0;if(!Oe&&!qe)return}X.preventDefault();let yt=X.deltaMode===1?X.deltaY*16:X.deltaMode===2?X.deltaY*window.innerHeight:X.deltaY;U(yt/ze)},{passive:!1}),window.addEventListener("keydown",X=>{if(!xe||to||document.body.classList.contains("visiting"))return;if(dt.active){if(X.stopImmediatePropagation(),X.target&&/TEXTAREA|INPUT|BUTTON/.test(X.target.tagName))return;dt.key(X.key)&&X.preventDefault();return}let yt=X.key;if(["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(yt)>=0){if((yt==="Enter"||yt===" ")&&X.target&&X.target.tagName==="BUTTON")return;X.preventDefault(),X.stopImmediatePropagation(),bt(1)}else["ArrowUp","ArrowLeft","PageUp"].indexOf(yt)>=0?(X.preventDefault(),X.stopImmediatePropagation(),bt(-1)):yt==="Escape"?(X.preventDefault(),ue()):/^[wasdzq]$/i.test(yt)&&X.stopImmediatePropagation()},!0),window.addEventListener("keyup",X=>{xe&&!to&&/^(Arrow|[wasdzq]$)/i.test(X.key)&&X.stopImmediatePropagation()},!0),h.addEventListener("click",X=>{X.stopPropagation(),ue()}),["mousedown","pointerdown"].forEach(X=>d.addEventListener(X,yt=>yt.stopPropagation())),d.addEventListener("click",X=>{X.stopPropagation(),ye()});let Pe=bo([8.6,1.75,44.3],[-3,1.85,44.5],55,0),_e=null,le=!1;function ye(){if(!xe||to||dt.active||_e)return;Xe(),Ht=-2;let X=pt.eye;if(X[0]>.5&&X[0]<13.5&&X[2]>36&&X[2]<50){le=!1,dt.start(pt,no);return}_e={t:0}}D.addEventListener("click",X=>{let yt=X.target.closest("button");yt&&(X.stopPropagation(),yt.dataset.act==="free"&&ue(),yt.dataset.act==="replay"&&Re(),yt.dataset.act==="list"&&yu().show(!1),yt.dataset.act==="confess"&&(Xe(),Ht=-2,dt.start(pt,no)))});let be=[null,[xr.zc-1.6,Math.PI/2],[11.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[42.5+Pc[0]-7,0],[42.5+Pc[1]-7,0],[42.5+Pc[2]-7,0],[1e3,Math.PI/2],...E0.map(X=>[X.z-1.6,X.side==="left"?-Math.PI/2:Math.PI/2]),[ws[2]-1.6,Math.PI]],Ye=null,Me=0;function ue(){if(!xe||to||!u1)return;let X=Be(te),yt=be[X];Ye=X<=1?{phase:"home",pos:Oc.slice()}:X>=3&&X<=6?{phase:"floor",pos:oa.slice()}:X===11?{phase:"floor",pos:lf.slice()}:X===18?{phase:"floor",pos:ws.slice()}:null,Me=X>=12?1:0,yt&&n.place&&n.place(yt[0],yt[1]),to={start:k,fromCam:pt,fromLook:Object.assign({},no)},Xe(),s.hidden=!0,document.body.classList.remove("touring"),e.onExit&&e.onExit()}function Re(){te=ut=0,se=0,he=!1,Ht=-1,Lt=0,Je=0,At={phase:"home",pos:Oc.slice(),tumble:0},ee={start:k}}let ee={start:-1},He=!1,Ao=[],Ue={prev:null,vel:[0,0,0],axis:[1,0,0],dir:null,bank:0,rock:0,spin:0,fresh:!0};function Ko(X){_t+=X*(At.phase==="floor"?0:1);let yt=At.tumble===void 0?0:At.tumble,de=Nc.fromTranslation(Ao,At.pos);if(At.phase==="home")de=Nc.rotateY(de,de,2.2+Math.sin(_t*.9)*.15),de=Nc.rotateZ(de,de,-1+Math.sin(_t*1.3)*.12),de=Nc.rotateX(de,de,.4);else if(At.phase==="floor")de=Nc.rotateY(de,de,.65),de=Nc.rotateX(de,de,.16);else{let Oe=At.pos;if(Ue.prev&&X>0){let A0=[Oe[0]-Ue.prev[0],Oe[1]-Ue.prev[1],Oe[2]-Ue.prev[2]];if(Math.hypot(A0[0],A0[1],A0[2])<1.5){let Bc=Math.min(1,X*6);for(let As=0;As<3;As++)Ue.vel[As]+=(A0[As]/X-Ue.vel[As])*Bc}else Ue.vel=[0,0,0]}Ue.prev=Oe.slice();let qe=Ue.vel,hn=Math.hypot(qe[0],qe[1],qe[2]),u0=Zt(.25,1.4,hn),C0=Zt(.5,2,-qe[1]),un=_t*.35*(.3+yt)+.65,z0=[Math.cos(un),0,Math.sin(un)];hn>.001&&(z0=tn(z0,W0(qe,-1/hn),u0));let dn=Math.min(1,X*4);Ue.axis=tn(Ue.axis,z0,Ue.fresh?1:dn);let Eo=Ue.axis,n0=Math.hypot(Eo[0],Eo[1],Eo[2])||1;Eo=W0(Eo,1/n0);let en=pt.eye,Wn=[en[0]-Oe[0],en[1]-Oe[1],en[2]-Oe[2]],Y0=Math.hypot(Wn[0],Wn[1],Wn[2])||1,K0=ae(.6,.22,u0),Jo=[Wn[0]/Y0*K0,1+Wn[1]/Y0*K0,Wn[2]/Y0*K0],wr=Eo[0]*Jo[0]+Eo[1]*Jo[1]+Eo[2]*Jo[2];Jo=sp(Jo,W0(Eo,wr));let An=Math.hypot(Jo[0],Jo[1],Jo[2])||1;Jo=W0(Jo,1/An);let Fr=[Eo[1]*Jo[2]-Eo[2]*Jo[1],Eo[2]*Jo[0]-Eo[0]*Jo[2],Eo[0]*Jo[1]-Eo[1]*Jo[0]],qo=Math.hypot(qe[0],qe[2]),pn=0;if(qo>.15&&Ue.dir&&X>0){let A0=[qe[0]/qo,qe[2]/qo];pn=(Ue.dir[0]*A0[1]-Ue.dir[1]*A0[0])/X,Ue.dir=A0}else qo>.15&&(Ue.dir=[qe[0]/qo,qe[2]/qo]);Ue.bank+=(Math.max(-.8,Math.min(.8,pn*.3))*u0-Ue.bank)*Math.min(1,X*3),Ue.rock+=X*(1.5+2.4*u0),Ue.spin+=X*C0*7*(.4+yt);let _r=Math.sin(Ue.rock)*(.26+.45*yt)*(1-.5*C0)+Ue.bank+Ue.spin,Es=Math.sin(Ue.rock*.63+1)*(.16+.3*yt)+(At.swing||0)*.9,ra=Math.cos(_r),zs=Math.sin(_r),mf=ko(W0(Jo,ra),W0(Fr,zs)),Da=ko(W0(Fr,ra),W0(Jo,-zs));ra=Math.cos(Es),zs=Math.sin(Es);let Mi=ko(W0(Eo,ra),W0(mf,zs)),Hc=ko(W0(mf,ra),W0(Eo,-zs)),w1=Math.sin(Ue.rock+1.5708)*.035*(.3+yt)*(1-.5*u0),xa=ko(Oe,W0(Fr,w1)),Uc=[Mi[0],Mi[1],Mi[2],0,Hc[0],Hc[1],Hc[2],0,Da[0],Da[1],Da[2],0,xa[0],xa[1],xa[2],1];for(let A0=0;A0<16;A0++)de[A0]=Uc[A0];Ue.fresh=!1}return At.phase!=="fly"&&(Ue.prev=null,Ue.vel=[0,0,0],Ue.fresh=!0,Ue.spin=0,Ue.bank=0,Ue.dir=null),{visible:!0,model:de}}function br(X){for(let yt in m1)no[yt]=X[yt]!==void 0?X[yt]:m1[yt]}function ga(X,yt){if(X<=1)return{phase:"home",pos:Oc.slice(),tumble:0};let de=Fy[X];if(de){let Oe=de.amp;return{phase:"fly",pos:ko(de.pos(),[Math.sin(yt*.55)*Oe[0],Math.sin(yt*.8)*Oe[1],(1-Math.cos(yt*.45))*Oe[2]]),tumble:de.tumble}}return{phase:"floor",pos:(X>=18?ws:X>=10?lf:oa).slice(),tumble:0}}let wo=0,No=null;function jn(X){let yt=Math.min(.1,Math.max(0,X-wo));if(wo=X,k=X,He||(He=!0,ee.start=X),to)return null;if(_e&&(_e.t+=yt,_e.t>=.7&&(_e=null,le=!0,dt.start(Pe,Object.assign({},m1,{fade:1,fadeColor:[0,0,0]})))),dt.active){let qo=dt.update(yt);return pt=qo.camera,br(qo.look),o&&window.__camOverride&&(pt=window.__camOverride),o&&window.__lookOverride&&Object.assign(no,window.__lookOverride),{camera:pt,walker:null,door:1,look:no,leaf:Ko(yt)}}if(!he&&!Rt&&k-Vt>Jt){let qo=Be(ut);Math.abs(ot[qo]-ut)<me&&(ut=ot[qo])}let de=ut-te;if(he){let pn=Math.sign(de)*Math.min(ht,Math.sqrt(2*oe*Math.abs(de)))-se;se+=Math.sign(pn)*Math.min(Math.abs(pn),oe*yt),te+=se*yt,(de>0&&te>=ut||de<0&&te<=ut||Math.abs(ut-te)<1e-4)&&(te=ut,se=0,he=!1)}else{let qo=OE(te,ut,se,rt,yt,3);te=qo[0],se=qo[1],Math.abs(ut-te)<1e-4&&Math.abs(se)<.001&&(te=ut,se=0)}let Oe=0;for(;Oe<cp.length-1&&te>=ot[Oe+1];)Oe++;let qe=cp[Oe],hn=ar((te-ot[Oe])/qe.dur),u0=bs[Oe],C0=bs[Oe+1],un=Be(te);un!==Lt&&(Lt=un,Je=0);let z0=Math.abs(te-ot[un])<.02;z0&&(Je+=yt);let dn=1-Zt(0,1.2,Math.abs(te-ot[un])),Eo=qe.leaf(hn);if(Eo.pos?At=Object.assign({},Eo):At=Object.assign({},Eo,{pos:Eo.phase==="home"?Oc.slice():(Oe>=10?lf:oa).slice()}),Fy[un]&&dn>0){let qo=ga(un,Je);At.pos=tn(At.pos,qo.pos,dn)}let n0=qe.walker&&(hn>.01||Oe===6)?qe.walker(hn):null;No=n0==null?null:{x:n0,z:lp,heading:Math.PI/2,phase:(n0-Uy)/DE};let en=qe.cam(hn,u0.cam(0),C0.cam(0),At);if(dn>0&&Je>0){let qo=bs[un],pn=qo.cam(0),_r=qo.cam(Je);en=bo(ko(en.eye,W0(sp(_r.eye,pn.eye),dn)),ko(en.target,W0(sp(_r.target,pn.target),dn)),en.fov+(_r.fov-pn.fov)*dn,en.roll+(_r.roll-pn.roll)*dn)}if(dn>0&&!lt){let qo=k,pn=.006*dn,_r=Math.sin(qo*.61)*.6+Math.sin(qo*1.37+1.3)*.4,Es=Math.sin(qo*.47+2.1)*.6+Math.sin(qo*1.13+.4)*.4,ra=Math.sin(qo*.53+4)*.5+Math.sin(qo*.97+2.6)*.5;en=bo(ko(en.eye,[_r*pn,Es*pn*.7,ra*pn]),ko(en.target,[Es*pn*1.8,_r*pn*1.4,0]),en.fov,en.roll+ra*.0012*dn)}pt=en;let Wn=p1(Oe),Y0=p1(Oe+1),K0=Object.assign({},Wn,qe.look(hn,Wn,Y0,At,en.eye));if(dn>0){let qo=p1(un);for(let pn in qo)typeof qo[pn]=="number"&&(K0[pn]=ae(K0[pn],qo[pn],dn))}br(K0);let wr=z0&&Math.abs(ut-te)<.02?un:-1;wr!==Ht&&(wr>=0&&(zo=k+Ee),Ht=wr,wr>=0?je(wr):Xe()),u.querySelectorAll("i").forEach((qo,pn)=>qo.classList.toggle("on",pn===un));let An=Ht>=0?B[Ht]:null;An&&An.fill&&!An.filled&&(An.fill(),An.filled&&(An.classList.remove("on"),An.offsetWidth,An.classList.add("on")));let Fr=ar((X-ee.start)/2.6);return Fr<1&&(no.fade=Math.max(no.fade,1-Zt(0,1,Fr)),no.fadeColor=[0,0,0]),o&&window.__camOverride&&(pt=window.__camOverride),o&&window.__lookOverride&&Object.assign(no,window.__lookOverride),{camera:pt,walker:No,door:qe.door?qe.door(hn):Oe>=12?1:0,look:_e?Object.assign(no,{fade:Math.max(no.fade||0,ar(_e.t/.6)),fadeColor:[0,0,0]}):no,leaf:Ko(yt)}}return o&&(window.__tour={go:bt,exit:ue,wind:U,confess(){Xe(),Ht=-2,dt.start(pt,no)},note:()=>ye(),conf:dt,paper:i1().STATE,seek(X,yt){te=ut=ot[X]+(ot[X+1]-ot[X])*yt,se=0,he=!1,Vt=k+1e6,ee.start=k-10,He=!0},jump(X){te=ut=ot[X],se=0,he=!1,Je=0,Vt=k,ee.start=k-10,He=!0},state:()=>({current:Be(te),scroll:+te.toFixed(3),target:+ut.toFixed(3),shown:Ht,move:Math.abs(ut-te)>.02?{p:te}:null,camNow:pt,leaf:At,look:no})}),{update:jn,get active(){return xe&&!to},handover(X){if(!to)return null;let yt=ar((X-to.start)/1.8);return yt>=1?(xe=!1,null):{from:to.fromCam,fromLook:to.fromLook,k:zn(yt)}},restingDoor:()=>Me,restingLeaf(){return Ye?(At=Ye,Ko(0)):null},mix:yi,cam:bo}}});var XE=Sm(),na=Sr(),zp=yu(),b1=na.reflection,YE=!1,cb=(t,e,o,n,r)=>n+(t-e)*(r-n)/(o-e),Ap=()=>cb(window.innerWidth/window.innerHeight,16/9,9/16,1.7,Math.PI/3);navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)&&(Ap=()=>cb(window.innerWidth/window.innerHeight,16/9,9/16,1.5,Math.PI/3));var lb=()=>2*Math.atan(Math.tan(Ap()*.5)*window.innerHeight/window.innerWidth),KE=qm(),df=new KE;df.showPanel(0);YE&&document.body.appendChild(df.dom);var _n,Gc,yp,qc,bp,wn;function QE(){try{let t=document.createElement("canvas"),e=t.getContext("webgl")||t.getContext("experimental-webgl");return!!(e&&e.getExtension("OES_standard_derivatives"))}catch(t){return!1}}if(!QE())throw XE.finish(),zp.show(!0),new Error("This device cannot draw the 3D gallery; showing the list instead.");_n=Dm()({extensions:["OES_element_index_uint","OES_standard_derivatives"],optionalExtensions:["EXT_texture_filter_anisotropic","WEBGL_depth_texture"],attributes:{alpha:!1,antialias:!1},pixelRatio:na.pixelRatio});location.hash==="#list"&&zp.show(!1);window.addEventListener("hashchange",()=>{location.hash==="#list"&&zp.show(!1)});Gc=S2()();var ZE=Ku();yp=ZE(_n,Gc,b1);qc=jg()(_n,Gc);bp=Yg()(_n);var Wy=h3()(_n,Gc),Vy=_3()(_n),Xy=S3()(_n),Yy=H3()(_n),Ky=V3()(_n),Qy=Z3()(_n),ks=dx()(_n),wp=Td(),fb=Kf(),JE=ul(),_p=Nd(),Mp=i0(),o0=Nh(),kp=Mx(),hb=Yh(),{A:Ic}=Ar();wn=ay()(Gc,lb);var Dc=cy()(_n,na),_s=dy()(_n),Zy=vy()(_n),tz=xy()(_n,na),ez=ky()(_n,na),Jy=Ka()(_n),tb=i1()(_n),eb=Ja()(_n),ob=Ks()(_n),ma=jy()({fps:wn,paintings:()=>qc.interactables(),avatar:ks,onExit:()=>wn.setPaused(!1)});wn.setPaused(!0);/tourdebug/.test(location.search)&&(window.__post=Dc);var Ms=[],Fc=[],O0=[7,2,1.6];Gc.viewer=O0;var oz=_n({cull:{enable:!0,face:"back"},uniforms:{view:()=>Ms,proj:()=>Fc,yScale:1,mirrorOn:()=>b1?1:0,night:()=>Mp.night,time:_n.context("time")}}),nz=_n({cull:{enable:!0,face:"front"},uniforms:{yScale:-1}}),ub=document.createElement("style");ub.textContent=`

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
`;document.head.appendChild(ub);var Dr=document.createElement("button");Dr.className="painting-plaque";Dr.type="button";Dr.setAttribute("aria-label","Read painting");document.body.appendChild(Dr);var X0=document.createElement("div");X0.className="story-overlay";X0.innerHTML=`

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
`;document.body.appendChild(X0);var Ss=document.createElement("div");Ss.className="museum-links";Ss.innerHTML=fb.icons("museum-link");Ss.insertBefore(tp()("museum-link"),Ss.firstChild);Ss.insertBefore(hb.button("museum-link"),Ss.firstChild.nextSibling);["mousedown","pointerdown","click"].forEach(t=>Ss.addEventListener(t,e=>e.stopPropagation()));document.body.appendChild(Ss);var rz=X0.querySelector("#story-title"),az=X0.querySelector("#story-body"),nb=X0.querySelector("#story-meta"),sz=X0.querySelector(".story-contact"),uf=X0.querySelector(".story-visit");uf.addEventListener("click",t=>{t.target.closest(".visit-btn")&&_i&&_p.open(_i)});var iz=X0.querySelector(".story-close"),_i=null,sr={p:0,target:0,last:0},db={title:wp.title,description:wp.text,isAbout:!0},qa=null;function Tp(t){t&&(_i=t,rz.textContent=t.title||"",az.textContent=t.description||"",nb.textContent=t.isAbout?"":JE(t),nb.hidden=!!t.isAbout,sz.hidden=!t.isAbout,uf.innerHTML=t.isAbout?"":_p.button(t),uf.hidden=!uf.innerHTML,uf.hidden||_p.warm(t),X0.classList.toggle("about-mode",!!t.isAbout),X0.classList.add("open"),sr.target=t.isAbout?1:0,qa=t,Dr.classList.remove("visible"),wn.setPaused(!0))}function Lp(){X0.classList.remove("open"),sr.target=0,_i=null,qa=null,wn.setPaused(!1)}function pb(t){t&&(t.preventDefault(),t.stopPropagation()),qa&&Tp(qa)}Dr.addEventListener("pointerup",pb,!0);Dr.addEventListener("touchend",pb,{passive:!1,capture:!0});Dr.addEventListener("click",t=>{t&&(t.preventDefault(),t.stopPropagation()),_i===null&&qa&&Tp(qa)},!0);iz.addEventListener("click",Lp);X0.addEventListener("click",t=>{t.target===X0&&Lp()});window.addEventListener("keydown",t=>{t.code==="Escape"&&X0.classList.contains("open")&&Lp()});function rb(t,e){let o=e[0],n=e[1],r=e[2];return[t[0]*o+t[4]*n+t[8]*r+t[12],t[1]*o+t[5]*n+t[9]*r+t[13],t[2]*o+t[6]*n+t[10]*r+t[14],t[3]*o+t[7]*n+t[11]*r+t[15]]}function cz(){if(_i)return;if(ma.active){qa=null,Dr.classList.remove("visible");return}let t=qc.interactables(),e=wn.forward[0],o=wn.forward[2],n=Math.hypot(e,o)||1,r=null,a=1/0;for(let i of t){let s=i.paintingPosition,c=0,h=0;i.side==="left"?c=1:i.side==="right"?c=-1:i.side==="corridor"?h=1:h=-1;let l=s[0]-wn.pos[0],d=s[2]-wn.pos[2],u=-(l*c+d*h),p=Math.abs(l*h-d*c),f=-(e*c+o*h)/n,v=i.side==="end"?11:8,m=(i.width||2)/2;f>.9&&u>.5&&u<v&&p<m+.8&&u<a&&(r=i,a=u)}if(!r){let i=wn.pos[0],s=wn.pos[2];e/n>.85&&i<13.6&&s>Ic.z0-.5&&s<Ic.z1+.5&&(r=Object.assign({},db,{plaqueTitle:wp.name}))}r?(qa=r,Dr.textContent=r.isAbout?"ABOUT  \xB7  "+r.plaqueTitle:"READ  \xB7  "+r.title,Dr.classList.add("visible")):(qa=null,Dr.classList.remove("visible"))}var vf=cc();function lz(){let t=ks.state;if(!t||!t.glowPos)return null;let e=rb(wn.view(),[t.glowPos[0],t.glowPos[1]-.08,t.glowPos[2],1]),o=rb(wn.proj(),e);return o[3]<=.05?null:[(o[0]/o[3]*.5+.5)*window.innerWidth,(.5-o[1]/o[3]*.5)*window.innerHeight,o[3]]}var Sp=null;window.addEventListener("pointerdown",t=>{Sp={x:t.clientX,y:t.clientY,t:performance.now()}},!0);window.addEventListener("pointerup",t=>{let e=Sp;if(Sp=null,!e||_i||ma.active||!t.target||!/^(CANVAS|BODY)$/.test(t.target.tagName)||Math.hypot(t.clientX-e.x,t.clientY-e.y)>12||performance.now()-e.t>600)return;let o=lz();if(!o)return;let n=!!document.pointerLockElement,r=n?window.innerWidth/2:t.clientX,a=n?window.innerHeight/2:t.clientY,i=Math.max(t.pointerType==="touch"?60:40,260/o[2]);Math.hypot(r-o[0],a-o[1])<i&&(t.preventDefault(),t.stopPropagation(),Tp(db))},!0);function fz(t){let e=Math.min(Math.max(t-sr.last,0),.1);sr.last=t;let o=e/1.6;if(sr.p=sr.target>sr.p?Math.min(1,sr.p+o):Math.max(0,sr.p-o),sr.p<=0)return;let n=sr.p<.5?2*sr.p*sr.p:1-Math.pow(-2*sr.p+2,2)/2,r=window.innerHeight>window.innerWidth,a=ks.state,i=a&&a.hipsPos?a.hipsPos[0]:Ic.cx-1.2,s=a&&a.hipsPos?a.hipsPos[2]:Ic.zc,c=r?[i-2.3,2,s-.1]:[i-1.55,1.55,s+.3],h=r?[i+.1,.2,s-.1]:[i+.1,.7,s+.6],l=wn.pos,d=wn.forward,u=[l[0],l[1],l[2]],p=[l[0]+d[0],l[1]+d[1],l[2]+d[2]],f=(x,y)=>x.map((w,M)=>w+(y[M]-w)*n),v=[Ic.cx-6.2,1.7,Ic.zc],m=1-n,g=u.map((x,y)=>m*m*x+2*m*n*v[y]+n*n*c[y]);vf.lookAt(wn.view(),g,f(p,h),[0,1,0])}var vb=/[?&]studio\b/.test(location.search);if(vb){let t=document.createElement("style");t.textContent=".tour, #museum-mobile-controls, .painting-plaque { display: none !important; }",document.head.appendChild(t),window.addEventListener("pointerdown",e=>{Ep.takes(e)||i0().toggle()}),window.addEventListener("keydown",e=>{(e.key==="n"||e.key===" ")&&i0().toggle()})}var Ep=(()=>{let t={mode:"idle",fedTill:0,offset:0,holdAt:null,now:0,lastShot:-1,doneShot:-1,since:0,hintUntil:0},e=null,o=null,n=null,r=(c,h)=>{n&&(n.textContent=c,n.classList.add("on"),t.hintUntil=h?t.now+h:0)},a=()=>{let c=document.createElement("style");c.textContent=`
.koi-feed { position: fixed; left: 0; right: 0; bottom: 7vh; display: flex; flex-direction: column; align-items: center; gap: 0.6em; z-index: 20; pointer-events: none; font-family: 'Cormorant Garamond', Georgia, serif; }
.koi-feed-btn { pointer-events: none; opacity: 0; transform: translateY(6px); transition: opacity 1.2s ease, transform 1.2s ease; background: rgba(12, 10, 8, 0.28); border: 1px solid rgba(244, 236, 223, 0.38); border-radius: 999px; color: #f4ecdf; font: italic 400 clamp(17px, 2.3vw, 24px)/1 'Cormorant Garamond', Georgia, serif; letter-spacing: 0.06em; padding: 0.7em 1.5em 0.75em; cursor: pointer; text-shadow: 0 1px 8px rgba(0, 0, 0, 0.55); backdrop-filter: blur(3px); -webkit-backdrop-filter: blur(3px); }
.koi-feed-btn.on { opacity: 1; transform: none; pointer-events: auto; }
.koi-feed-btn:hover { background: rgba(12, 10, 8, 0.42); border-color: rgba(244, 236, 223, 0.7); }
.koi-feed-btn .orn { display: inline-block; margin: 0 0.55em; font-style: normal; opacity: 0.75; transform: translateY(-0.05em); }
.koi-feed-hint { opacity: 0; transition: opacity 1.4s ease; color: #f4ecdf; font: italic 400 clamp(16px, 2vw, 21px)/1.3 'Cormorant Garamond', Georgia, serif; letter-spacing: 0.05em; text-shadow: 0 1px 10px rgba(0, 0, 0, 0.7); text-align: center; padding: 0 1em; }
.koi-feed-hint.on { opacity: 0.95; }
.koi-aim, .koi-aim canvas { cursor: crosshair !important; }
`,document.head.appendChild(c),e=document.createElement("div"),e.className="koi-feed",e.innerHTML='<button type="button" class="koi-feed-btn"><span class="orn">\u2766</span>Cast a crumb upon the water<span class="orn">\u2766</span></button><div class="koi-feed-hint"></div>',document.body.appendChild(e),o=e.querySelector(".koi-feed-btn"),n=e.querySelector(".koi-feed-hint"),o.addEventListener("pointerdown",h=>{h.stopPropagation(),t.mode==="idle"&&(t.mode="aim",t.holdAt=t.now-t.offset,t.since=t.now,o.classList.remove("on"),document.body.classList.add("koi-aim"),r("Touch the water where it should fall"))})},i=(c,h)=>{let l=vf.multiply([],Fc,Ms),d=vf.invert([],l);if(!d)return null;let u=c/window.innerWidth*2-1,p=1-h/window.innerHeight*2,f=[0,0,0,0];for(let v=0;v<4;v++)f[v]=d[v]*u+d[4+v]*p+d[8+v]*1+d[12+v];return[f[0]/f[3]-O0[0],f[1]/f[3]-O0[1],f[2]/f[3]-O0[2]]},s=()=>{t.holdAt!==null&&(t.offset=t.now-t.holdAt),t.holdAt=null,t.mode="idle",t.doneShot=t.lastShot,document.body.classList.remove("koi-aim"),n&&n.classList.remove("on")};return{time(c){return t.now=c,t.holdAt!==null?t.holdAt:c-t.offset},update(c){e||a(),c.shot!==t.lastShot&&(t.lastShot=c.shot);let h=Ks();t.mode==="idle"?o.classList.toggle("on",!!c.pond&&t.doneShot!==c.shot):t.mode==="aim"?t.now-t.since>40&&s():t.mode==="watch"&&(h.feeding()&&(t.fedTill=t.now),(t.now-t.fedTill>5&&t.now-t.since>8||t.now-t.since>60)&&s()),t.hintUntil&&t.now>t.hintUntil&&(n.classList.remove("on"),t.hintUntil=0)},takes(c){if(t.mode==="idle")return!1;let h=Ks(),l=i(c.clientX,c.clientY),d=l&&h.poolHit(O0,l);return d?(h.feedAt(d[0],d[1]),t.fedTill=t.now,t.mode==="aim"&&r("and they come, like embers through the dark",5),t.mode="watch",t.since=t.now,document.body.classList.remove("koi-aim"),!0):(t.mode==="aim"&&r("Upon the water, there\u2026"),!0)}}})(),bi={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},wi=null,pf=!1,x1=!1;function hz(t,e,o,n){let r=[o[0]-e[0],o[1]-e[1],o[2]-e[2]],a=Math.hypot(r[0],r[1],r[2])||1,i=[-r[2]/a,0,r[0]/a],s=Math.hypot(i[0],i[2])||1;i=[i[0]/s,0,i[2]/s];let c=Math.cos(n),h=Math.sin(n);return vf.lookAt(t,e,o,[i[0]*h,c,i[2]*h])}function uz(t){let e=window.innerWidth/window.innerHeight,o=Dc.shot,n=ma.active?ma.update(t):null,r=n?null:ma.handover(t),a=null,i=bi;if(n){a=n.camera,i=n.look,wi=n.leaf;let s=window.__walkOverride&&/tourdebug/.test(location.search)?window.__walkOverride:n.walker||null;ks.setWalk(s),pf=!!s,_s.setOpen(n.door||0)}else wi=ma.restingLeaf(),ks.setWalk(null),pf=!1,_s.setOpen(ma.restingDoor());if(r){let s=wn.pos,c=wn.forward,h=ma.cam([s[0],s[1],s[2]],[s[0]+c[0],s[1]+c[1],s[2]+c[2]],lb()*180/Math.PI,0);a=ma.mix(r.from,h,r.k),i={};for(let l in bi)i[l]=Array.isArray(bi[l])?bi[l]:r.fromLook[l]+(bi[l]-r.fromLook[l])*r.k}if(a&&n&&(a=kp.apply(a,t)),vb&&!(/tourdebug/.test(location.search)&&window.__camOverride)){let s=Ks().previewCam(Ep.time(t));Ep.update(s),a=s,i=Object.assign({},bi,{fade:s.fade,focus:8})}if(a)hz(Ms,a.eye,a.target,a.roll||0),vf.perspective(Fc,a.fov*Math.PI/180,e,.1,700),O0[0]=a.eye[0],O0[1]=a.eye[1],O0[2]=a.eye[2];else{let s=wn.view(),c=wn.proj();for(let u=0;u<16;u++)Ms[u]=s[u],Fc[u]=c[u];let h=s[12],l=s[13],d=s[14];O0[0]=-(s[0]*h+s[1]*l+s[2]*d),O0[1]=-(s[4]*h+s[5]*l+s[6]*d),O0[2]=-(s[8]*h+s[9]*l+s[10]*d)}for(let s in bi)o[s]=i[s];n&&kp.pull(o,t)}var yr={wake:[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],wakeDir:[0,0,1],gust:[0,0],focus:6,aperture:0},mp=[9,9,9,9],ab=[0,0,0,0],ff=0,gp=0,$c=null,sb=0,ib=0,hf=0;function dz(t){let e=Math.min(.1,Math.max(0,t-sb));sb=t,yr.focus=Dc.shot.focus,yr.aperture=na.post>=2?Dc.shot.aperture:0;for(let i=0;i<4;i++)mp[i]+=e,yr.wake[i][3]=ab[i]*Math.exp(-mp[i]/1.1);let o=wi&&wi.visible?wi.model:null;if(o&&e>0){let i=[o[12],o[13],o[14]];if($c){let s=[i[0]-$c[0],i[1]-$c[1],i[2]-$c[2]],c=Math.hypot(s[0],s[1],s[2]),h=c/e;if(c<1.5&&h>.12){let l=Math.min(1,e*8);for(let u=0;u<3;u++)yr.wakeDir[u]+=(s[u]/c-yr.wakeDir[u])*l;let d=Math.hypot(yr.wakeDir[0],yr.wakeDir[1],yr.wakeDir[2])||1;for(let u=0;u<3;u++)yr.wakeDir[u]/=d;if(gp+=e,gp>.14){gp=0;let u=yr.wake[ff];u[0]=i[0],u[1]=i[1],u[2]=i[2],ab[ff]=Math.min(1,(h-.12)/1.6)*.5,mp[ff]=0,ff=(ff+1)%4}}}$c=i}else o||($c=null);let n=_s.openNow?_s.openNow():0,r=e>0?(n-ib)/e:0;ib=n;let a=Math.max(-1,Math.min(1,r*1.2));hf+=(a-hf)*Math.min(1,e*(Math.abs(a)>Math.abs(hf)?6:.7)),yr.gust[0]+=hf*5.5*e,yr.gust[1]=Math.abs(hf)}var xp=0,y1=!1;_n.frame(function({time:t}){if(document.body.classList.contains("visiting")){xp=0;return}df.begin(),Mp.tick(t);let e=ma.active&&kp.resting&&Mp.settled&&(na.isPhone||na.scale<1||na.level>0);if(e){if(y1=!y1,y1){df.end();return}}else y1=!1;let o=t-xp;xp=t,na.frame(e?o/2:o),b1=na.reflection,wn.tick({time:t}),fz(t),qc.update(wn.pos,wn.fmouse[1],Ap()),cz(),uz(t),o0.update(Ms,Fc,O0),hb.listen(O0),x1=!pf&&o0.room("stair")&&(!o0.room("court")||O0[0]<.5||O0[2]>30),ks.setPiano(x1),dz(t),Dc.capture(arguments[0],{view:Ms,proj:Fc,eye:O0},()=>{oz(()=>{b1&&o0.floor&&nz(()=>{o0.room("studio",!0)&&ob({reflected:!0}),o0.zone!=="studio"&&(yp(),Wy({reflected:!0}),Jy(),o0.room("stair",!0)&&(eb({reflected:!0}),tb({reflected:!0,view:Ms})),o0.room("court",!0)&&Qy(),(x1||o0.room("court",!0)||pf)&&ks(),bp(qc.batch()),o0.room("street",!0)&&Vy(),o0.room("garden",!0)&&Yy(),o0.room("florence",!0)&&Ky(),Zy(wi),_s(),Xy(),_s.glass())}),o0.room("studio")&&ob(),o0.zone!=="studio"&&(yp(),Wy(),Jy(),o0.room("stair")&&(eb(),tb({view:Ms})),o0.room("court")&&Qy(),(x1||o0.room("court")||pf)&&ks(),bp(qc.batch()),o0.room("street")&&Vy(),o0.room("garden")&&(Yy(),ez()),o0.room("florence")&&Ky(),Zy(wi),_s(),tz(yr),Xy(),_s.glass())})}),Dc.present(),df.end()});})();
