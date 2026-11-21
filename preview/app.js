"use strict";(()=>{var At=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var Sm=At((mz,km)=>{"use strict";var Hi=document.getElementById("loader"),Gi=Hi&&Hi.querySelector(".loader-name"),il=0,Wf=0,Vf=!1,P4=performance.now(),Ui=.06,Fi=0,vu=0,ym=!1,$4=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function I4(t){if(!Gi)return;let e=Gi.offsetWidth||1,r=(e*(1.14-1.28*t)-e).toFixed(1)+"px 0";Gi.style.webkitMaskPosition=r,Gi.style.maskPosition=r}function _m(t){let e=Math.min(.05,vu?(t-vu)/1e3:.016);vu=t;let o=Vf?.75:.22+(Ui-Fi)*1.2;if(Fi=Math.min(Ui,Fi+Math.max(0,o)*e),$4&&(Fi=Ui),I4(Fi),Vf&&Fi>=.999){ym||(ym=!0,setTimeout(Mm,650));return}requestAnimationFrame(_m)}Gi&&requestAnimationFrame(_m);function bm(){let t=il?Wf/Math.max(il,24):0;Ui=Math.max(Ui,Math.min(.9,.06+t*.84))}function Mm(){Hi&&(Hi.classList.add("done"),setTimeout(()=>Hi.remove(),1400))}function mu(){Vf||(Vf=!0,window.__galleryReady=!0,Hi&&(Ui=1,Gi||Mm()))}var wm=null;function q4(){clearTimeout(wm),Wf>=il&&performance.now()-P4>600&&(wm=setTimeout(()=>{Wf>=il&&mu()},450))}setTimeout(mu,2e4);var D4=t=>/(^|\/)(res|images)\//.test(t),jf=window.fetch.bind(window);async function F4(t,e){let o=await jf(t+".gz",e);if(!o.ok)throw new Error("no .gz");let r=new Uint8Array(await o.arrayBuffer());if(!(r[0]===31&&r[1]===139))return new Response(r);let n=new Blob([r]).stream().pipeThrough(new DecompressionStream("gzip")),a=await new Response(n).arrayBuffer();return new Response(a,{status:200,headers:{"Content-Type":"application/octet-stream"}})}window.fetch=function(t,e){let o=typeof t=="string"?t:t&&t.url||"";if(!D4(o))return jf(t,e);il++,bm();let r=a=>(Wf++,bm(),q4(),a),n;return/\.bin$/.test(o)&&typeof DecompressionStream!="undefined"?n=F4(o,e).catch(()=>jf(t,e)):n=jf(t,e),n.then(r,a=>{throw r(),a})};km.exports={finish:mu}});var zr=At((gz,Tm)=>{"use strict";var Em=typeof navigator!="undefined"&&navigator.userAgent||"",G4=typeof window!="undefined"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches&&!window.matchMedia("(any-pointer: fine)").matches,_a=/Android|iPhone|iPad|iPod|Mobile|Silk|Kindle|webOS|BlackBerry|Opera Mini|IEMobile/i.test(Em)||/Macintosh/.test(Em)&&typeof navigator!="undefined"&&navigator.maxTouchPoints>1||G4,zm=typeof window!="undefined"&&window.devicePixelRatio||1,Io={isPhone:_a,pixelRatio:_a?Math.min(zm,1.5):Math.min(zm,2),reflection:!_a,gardenDetail:_a?0:1,leafShare:_a?.65:1,motion:!_a,post:_a?1:2,level:_a?1:0};Io.scale=1;var H4=_a?.55:.6,cl=0,Xf=0,ll=0,fl=0,Bi=1,hl=0,Yf=48,ji=null,gu=0;function U4(t){ji={fps:t,scale:Io.scale},Io.scale>.86?Io.scale=.85:Io.reflection?Io.stepDown():Io.scale>.71?Io.scale=.7:Io.stepDown()||(Io.scale=Math.max(H4,Io.scale-.1))}var Am=!0;try{/[?&]noadapt\b/.test(location.search)&&(Am=!1)}catch(t){}Io.frame=t=>{if(!Am)return;if(!(t>0)||t>1){cl=0,Xf=0;return}if(cl+=t,Xf++,cl<.75)return;let e=Xf/cl;if(cl=0,Xf=0,hl>0&&(hl-=.75,hl<=0&&(Bi=1)),ji){if(e<ji.fps*1.08&&ji.scale>Io.scale){if(++gu>=2){Io.scale=1,Bi=1,hl=0,Yf=Math.min(Yf,e*.85),gu=0,ll=0,ji=null;return}}else gu=0;ji=null}if(e<Yf){if(fl=0,++ll>=2){if(ll=0,Io.scale>.61&&Io.climbed){Bi=Io.scale-.05,hl=40,Io.scale=Bi,Io.climbed=!1;return}U4(e)}}else e>Math.max(Yf*1.15,55)?(ll=0,++fl>=6&&Io.scale<Bi-.001?(Io.scale=Math.min(Bi,Io.scale+.05),Io.climbed=!0,fl=0):fl>=6&&(Io.climbed=!1)):(ll=0,fl=0)};Io.stepDown=()=>{if(Io.reflection)Io.reflection=!1;else if(Io.gardenDetail>0||Io.motion)Io.gardenDetail=0,Io.motion=!1,Io.leafShare=Math.min(Io.leafShare,.65);else if(Io.post>0)Io.post--;else return!1;return Io.level++,!0};Tm.exports=Io});var xu=At((xz,Lm)=>{"use strict";Lm.exports=[{file:"IMG_20250717_102753.jpg",slug:"love-me-like-i-am-already-dead",title:"Love me like I am Already Dead",medium:"Oil on canvas",size:[61,91],description:`We live in a world soaked in hypocrisy. We\u2019re told not to \u201Cspeak ill of the dead,\u201D yet we spend lifetimes speaking ill of the living. We judge, ignore, neglect\u2014and then pretend to mourn with grace when it\u2019s too late. People say beautiful things at funerals, but only after burying a lifetime of cruelty or silence.

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
but the loneliness of having no one willing to admit it happened.`}]});var Kf=At((yz,Om)=>{"use strict";var D0={instagram:"muzammil_qureshi",email:"muzammilqureshi100@gmail.com"},Nm='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>',Rm='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>';D0.instagramUrl="https://instagram.com/"+D0.instagram;D0.mailUrl="mailto:"+D0.email+"?subject="+encodeURIComponent("Your paintings");D0.icons=t=>`
	<a class="${t}" href="${D0.instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram: @${D0.instagram}" title="Instagram">${Nm}</a>
	<a class="${t}" href="${D0.mailUrl}" aria-label="Email ${D0.email}" title="Email">${Rm}</a>`;D0.line=t=>`
	<span class="${t}">
		<a href="${D0.instagramUrl}" target="_blank" rel="noopener">${Nm}<span>@${D0.instagram}</span></a>
		<a href="${D0.mailUrl}">${Rm}<span>${D0.email}</span></a>
	</span>`;Om.exports=D0});var ul=At((bz,Cm)=>{"use strict";Cm.exports=t=>{if(!t)return"";let e=[];return t.medium&&e.push(t.medium),t.size&&t.size.length===2&&e.push(t.size[0]+" \xD7 "+t.size[1]+" cm"),e.join("  \xB7  ")}});var yu=At((wz,Im)=>{"use strict";var B4=xu(),j4=Kf(),Pm=ul(),W4=zr(),ja=t=>String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),V4=`
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
`,F0=null;function X4(t){if(F0){F0.hidden=!1,requestAnimationFrame(()=>F0.classList.add("on"));return}let e=document.createElement("style");e.textContent=V4,document.head.appendChild(e);let o=!W4.isPhone;F0=document.createElement("div"),F0.className="plist",F0.setAttribute("role","region"),F0.setAttribute("aria-label","All paintings"),F0.innerHTML=`
		${t?"":'<button type="button" class="plist-close">Back to the gallery</button>'}
		<header class="plist-head">
			<h1>Muzammil</h1>
			<p class="plist-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</p>
			${j4.line("plist-contact")}
		</header>
		${t?'<p class="plist-note">This device could not open the 3D gallery, so here are the paintings on their own.</p>':""}
		<main class="plist-grid">
			${B4.map(n=>`
			<article class="plist-item" id="${ja(n.slug)}">
				<img loading="lazy" decoding="async" alt="${ja(n.title)}, ${ja(Pm(n))}"
					src="images/web/${ja(n.slug)}${o?"":"-1024"}.webp"
					onerror="this.onerror=null;this.src='images/${ja(n.file)}'">
				<p class="plist-meta">${ja(Pm(n))}</p>
				<h2>${ja(n.title)}</h2>
				<details><summary>Read its story</summary>
					${String(n.description).split(/\n\s*\n/).map(a=>`<p>${ja(a.trim())}</p>`).join("")}
				</details>
			</article>`).join("")}
		</main>`,["mousedown","pointerdown","click","wheel","touchstart","touchmove","keydown"].forEach(n=>F0.addEventListener(n,a=>a.stopPropagation(),{passive:!0}));let r=F0.querySelector(".plist-close");r&&r.addEventListener("click",$m),document.body.appendChild(F0),requestAnimationFrame(()=>F0.classList.add("on"))}function $m(){F0&&(F0.classList.remove("on"),setTimeout(()=>{F0.hidden=!0},500),location.hash==="#list"&&history.replaceState(null,"",location.pathname+location.search))}Im.exports={show:X4,hide:$m}});var qm=At((bu,wu)=>{(function(t,e){typeof bu=="object"&&typeof wu!="undefined"?wu.exports=e():typeof define=="function"&&define.amd?define(e):t.Stats=e()})(bu,function(){var t=function(){function e(d){return n.appendChild(d.dom),d}function o(d){for(var u=0;u<n.children.length;u++)n.children[u].style.display=u===d?"block":"none";r=d}var r=0,n=document.createElement("div");n.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",n.addEventListener("click",function(d){d.preventDefault(),o(++r%n.children.length)},!1);var a=(performance||Date).now(),s=a,i=0,c=e(new t.Panel("FPS","#0ff","#002")),h=e(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var l=e(new t.Panel("MB","#f08","#201"));return o(0),{REVISION:16,dom:n,addPanel:e,showPanel:o,begin:function(){a=(performance||Date).now()},end:function(){i++;var d=(performance||Date).now();if(h.update(d-a,200),d>s+1e3&&(c.update(1e3*i/(d-s),100),s=d,i=0,l)){var u=performance.memory;l.update(u.usedJSHeapSize/1048576,u.jsHeapSizeLimit/1048576)}return d},update:function(){a=this.end()},domElement:n,setMode:o}};return t.Panel=function(e,o,r){var n=1/0,a=0,s=Math.round,i=s(window.devicePixelRatio||1),c=80*i,h=48*i,l=3*i,d=2*i,u=3*i,p=15*i,f=74*i,v=30*i,m=document.createElement("canvas");m.width=c,m.height=h,m.style.cssText="width:80px;height:48px";var g=m.getContext("2d");return g.font="bold "+9*i+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=r,g.fillRect(0,0,c,h),g.fillStyle=o,g.fillText(e,l,d),g.fillRect(u,p,f,v),g.fillStyle=r,g.globalAlpha=.9,g.fillRect(u,p,f,v),{dom:m,update:function(x,y){n=Math.min(n,x),a=Math.max(a,x),g.fillStyle=r,g.globalAlpha=1,g.fillRect(0,0,c,p),g.fillStyle=o,g.fillText(s(x)+" "+e+" ("+s(n)+"-"+s(a)+")",l,d),g.drawImage(m,u+i,p,f-i,v,u,p,f-i,v),g.fillRect(u+f-i,p,i,v),g.fillStyle=r,g.globalAlpha=.9,g.fillRect(u+f-i,p,i,s((1-x/y)*v))}}},t})});var Dm=At((_u,Mu)=>{(function(t,e){typeof _u=="object"&&typeof Mu!="undefined"?Mu.exports=e():typeof define=="function"&&define.amd?define(e):t.createREGL=e()})(_u,function(){"use strict";var t=function(b){return b instanceof Uint8Array||b instanceof Uint16Array||b instanceof Uint32Array||b instanceof Int8Array||b instanceof Int16Array||b instanceof Int32Array||b instanceof Float32Array||b instanceof Float64Array||b instanceof Uint8ClampedArray},e=function(b,z){for(var C=Object.keys(z),nt=0;nt<C.length;++nt)b[C[nt]]=z[C[nt]];return b},o=`
`;function r(b){return typeof atob!="undefined"?atob(b):"base64:"+b}function n(b){var z=new Error("(regl) "+b);throw console.error(z),z}function a(b,z){b||n(z)}function s(b){return b?": "+b:""}function i(b,z,C){b in z||n("unknown parameter ("+b+")"+s(C)+". possible values: "+Object.keys(z).join())}function c(b,z){t(b)||n("invalid parameter type"+s(z)+". must be a typed array")}function h(b,z){switch(z){case"number":return typeof b=="number";case"object":return typeof b=="object";case"string":return typeof b=="string";case"boolean":return typeof b=="boolean";case"function":return typeof b=="function";case"undefined":return typeof b=="undefined";case"symbol":return typeof b=="symbol"}}function l(b,z,C){h(b,z)||n("invalid parameter type"+s(C)+". expected "+z+", got "+typeof b)}function d(b,z){b>=0&&(b|0)===b||n("invalid parameter type, ("+b+")"+s(z)+". must be a nonnegative integer")}function u(b,z,C){z.indexOf(b)<0&&n("invalid value"+s(C)+". must be one of: "+z)}var p=["gl","canvas","container","attributes","pixelRatio","extensions","optionalExtensions","profile","onDone"];function f(b){Object.keys(b).forEach(function(z){p.indexOf(z)<0&&n('invalid regl constructor argument "'+z+'". must be one of '+p)})}function v(b,z){for(b=b+"";b.length<z;)b=" "+b;return b}function m(){this.name="unknown",this.lines=[],this.index={},this.hasErrors=!1}function g(b,z){this.number=b,this.line=z,this.errors=[]}function x(b,z,C){this.file=b,this.line=z,this.message=C}function y(){var b=new Error,z=(b.stack||b).toString(),C=/compileProcedure.*\n\s*at.*\((.*)\)/.exec(z);if(C)return C[1];var nt=/compileProcedure.*\n\s*at\s+(.*)(\n|$)/.exec(z);return nt?nt[1]:"unknown"}function w(){var b=new Error,z=(b.stack||b).toString(),C=/at REGLCommand.*\n\s+at.*\((.*)\)/.exec(z);if(C)return C[1];var nt=/at REGLCommand.*\n\s+at\s+(.*)\n/.exec(z);return nt?nt[1]:"unknown"}function M(b,z){var C=b.split(`
`),nt=1,bt=0,tt={unknown:new m,0:new m};tt.unknown.name=tt[0].name=z||y(),tt.unknown.lines.push(new g(0,""));for(var lt=0;lt<C.length;++lt){var Ct=C[lt],qt=/^\s*#\s*(\w+)\s+(.+)\s*$/.exec(Ct);if(qt)switch(qt[1]){case"line":var Ut=/(\d+)(\s+\d+)?/.exec(qt[2]);Ut&&(nt=Ut[1]|0,Ut[2]&&(bt=Ut[2]|0,bt in tt||(tt[bt]=new m)));break;case"define":var Dt=/SHADER_NAME(_B64)?\s+(.*)$/.exec(qt[2]);Dt&&(tt[bt].name=Dt[1]?r(Dt[2]):Dt[2]);break}tt[bt].lines.push(new g(nt++,Ct))}return Object.keys(tt).forEach(function(Yt){var ne=tt[Yt];ne.lines.forEach(function(Pt){ne.index[Pt.number]=Pt})}),tt}function _(b){var z=[];return b.split(`
`).forEach(function(C){if(!(C.length<5)){var nt=/^ERROR:\s+(\d+):(\d+):\s*(.*)$/.exec(C);nt?z.push(new x(nt[1]|0,nt[2]|0,nt[3].trim())):C.length>0&&z.push(new x("unknown",0,C))}}),z}function S(b,z){z.forEach(function(C){var nt=b[C.file];if(nt){var bt=nt.index[C.line];if(bt){bt.errors.push(C),nt.hasErrors=!0;return}}b.unknown.hasErrors=!0,b.unknown.lines[0].errors.push(C)})}function R(b,z,C,nt,bt){if(!b.getShaderParameter(z,b.COMPILE_STATUS)){var tt=b.getShaderInfoLog(z),lt=nt===b.FRAGMENT_SHADER?"fragment":"vertex";pt(C,"string",lt+" shader source must be a string",bt);var Ct=M(C,bt),qt=_(tt);S(Ct,qt),Object.keys(Ct).forEach(function(Ut){var Dt=Ct[Ut];if(!Dt.hasErrors)return;var Yt=[""],ne=[""];function Pt(Kt,Y){Yt.push(Kt),ne.push(Y||"")}Pt("file number "+Ut+": "+Dt.name+`
`,"color:red;text-decoration:underline;font-weight:bold"),Dt.lines.forEach(function(Kt){if(Kt.errors.length>0){Pt(v(Kt.number,4)+"|  ","background-color:yellow; font-weight:bold"),Pt(Kt.line+o,"color:red; background-color:yellow; font-weight:bold");var Y=0;Kt.errors.forEach(function(ft){var Gt=ft.message,ue=/^\s*'(.*)'\s*:\s*(.*)$/.exec(Gt);if(ue){var St=ue[1];switch(Gt=ue[2],St){case"assign":St="=";break}Y=Math.max(Kt.line.indexOf(St,Y),0)}else Y=0;Pt(v("| ",6)),Pt(v("^^^",Y+3)+o,"font-weight:bold"),Pt(v("| ",6)),Pt(Gt+o,"font-weight:bold")}),Pt(v("| ",6)+o)}else Pt(v(Kt.number,4)+"|  "),Pt(Kt.line+o,"color:red")}),typeof document!="undefined"&&!window.chrome?(ne[0]=Yt.join("%c"),console.log.apply(console,ne)):console.log(Yt.join(""))}),a.raise("Error compiling "+lt+" shader, "+Ct[0].name)}}function T(b,z,C,nt,bt){if(!b.getProgramParameter(z,b.LINK_STATUS)){var tt=b.getProgramInfoLog(z),lt=M(C,bt),Ct=M(nt,bt),qt='Error linking program with vertex shader, "'+Ct[0].name+'", and fragment shader "'+lt[0].name+'"';typeof document!="undefined"?console.log("%c"+qt+o+"%c"+tt,"color:red;text-decoration:underline;font-weight:bold","color:red"):console.log(qt+o+tt),a.raise(qt)}}function H(b){b._commandRef=y()}function q(b,z,C,nt){H(b);function bt(qt){return qt?nt.id(qt):0}b._fragId=bt(b.static.frag),b._vertId=bt(b.static.vert);function tt(qt,Ut){Object.keys(Ut).forEach(function(Dt){qt[nt.id(Dt)]=!0})}var lt=b._uniformSet={};tt(lt,z.static),tt(lt,z.dynamic);var Ct=b._attributeSet={};tt(Ct,C.static),tt(Ct,C.dynamic),b._hasCount="count"in b.static||"count"in b.dynamic||"elements"in b.static||"elements"in b.dynamic}function W(b,z){var C=w();n(b+" in command "+(z||y())+(C==="unknown"?"":" called from "+C))}function F(b,z,C){b||W(z,C||y())}function j(b,z,C,nt){b in z||W("unknown parameter ("+b+")"+s(C)+". possible values: "+Object.keys(z).join(),nt||y())}function pt(b,z,C,nt){h(b,z)||W("invalid parameter type"+s(C)+". expected "+z+", got "+typeof b,nt||y())}function Ht(b){b()}function Nt(b,z,C){b.texture?u(b.texture._texture.internalformat,z,"unsupported texture format for attachment"):u(b.renderbuffer._renderbuffer.format,C,"unsupported renderbuffer format for attachment")}var xt=33071,ot=9728,Bt=9984,Se=9985,be=9986,Ke=9987,$e=5120,no=5121,rt=5122,yt=5123,it=5124,Mt=5125,Vt=5126,he=32819,Ne=32820,Qt=33635,Wt=34042,ct=36193,Zt={};Zt[$e]=Zt[no]=1,Zt[rt]=Zt[yt]=Zt[ct]=Zt[Qt]=Zt[he]=Zt[Ne]=2,Zt[it]=Zt[Mt]=Zt[Vt]=Zt[Wt]=4;function de(b,z){return b===Ne||b===he||b===Qt?2:b===Wt?4:Zt[b]*z}function se(b){return!(b&b-1)&&!!b}function Rt(b,z,C){var nt,bt=z.width,tt=z.height,lt=z.channels;a(bt>0&&bt<=C.maxTextureSize&&tt>0&&tt<=C.maxTextureSize,"invalid texture shape"),(b.wrapS!==xt||b.wrapT!==xt)&&a(se(bt)&&se(tt),"incompatible wrap mode for texture, both width and height must be power of 2"),z.mipmask===1?bt!==1&&tt!==1&&a(b.minFilter!==Bt&&b.minFilter!==be&&b.minFilter!==Se&&b.minFilter!==Ke,"min filter requires mipmap"):(a(se(bt)&&se(tt),"texture must be a square power of 2 to support mipmapping"),a(z.mipmask===(bt<<1)-1,"missing or incomplete mipmap data")),z.type===Vt&&(C.extensions.indexOf("oes_texture_float_linear")<0&&a(b.minFilter===ot&&b.magFilter===ot,"filter not supported, must enable oes_texture_float_linear"),a(!b.genMipmaps,"mipmap generation not supported with float textures"));var Ct=z.images;for(nt=0;nt<16;++nt)if(Ct[nt]){var qt=bt>>nt,Ut=tt>>nt;a(z.mipmask&1<<nt,"missing mipmap data");var Dt=Ct[nt];if(a(Dt.width===qt&&Dt.height===Ut,"invalid shape for mip images"),a(Dt.format===z.format&&Dt.internalformat===z.internalformat&&Dt.type===z.type,"incompatible type for mip image"),!Dt.compressed)if(Dt.data){var Yt=Math.ceil(de(Dt.type,lt)*qt/Dt.unpackAlignment)*Dt.unpackAlignment;a(Dt.data.byteLength===Yt*Ut,"invalid data for image, buffer size is inconsistent with image format")}else Dt.element||Dt.copy}else b.genMipmaps||a((z.mipmask&1<<nt)===0,"extra mipmap data");z.compressed&&a(!b.genMipmaps,"mipmap generation for compressed images not supported")}function Ue(b,z,C,nt){var bt=b.width,tt=b.height,lt=b.channels;a(bt>0&&bt<=nt.maxTextureSize&&tt>0&&tt<=nt.maxTextureSize,"invalid texture shape"),a(bt===tt,"cube map must be square"),a(z.wrapS===xt&&z.wrapT===xt,"wrap mode not supported by cube map");for(var Ct=0;Ct<C.length;++Ct){var qt=C[Ct];a(qt.width===bt&&qt.height===tt,"inconsistent cube map face shape"),z.genMipmaps&&(a(!qt.compressed,"can not generate mipmap for compressed textures"),a(qt.mipmask===1,"can not specify mipmaps and generate mipmaps"));for(var Ut=qt.images,Dt=0;Dt<16;++Dt){var Yt=Ut[Dt];if(Yt){var ne=bt>>Dt,Pt=tt>>Dt;a(qt.mipmask&1<<Dt,"missing mipmap data"),a(Yt.width===ne&&Yt.height===Pt,"invalid shape for mip images"),a(Yt.format===b.format&&Yt.internalformat===b.internalformat&&Yt.type===b.type,"incompatible type for mip image"),Yt.compressed||(Yt.data?a(Yt.data.byteLength===ne*Pt*Math.max(de(Yt.type,lt),Yt.unpackAlignment),"invalid data for image, buffer size is inconsistent with image format"):Yt.element||Yt.copy)}}}}var k=e(a,{optional:Ht,raise:n,commandRaise:W,command:F,parameter:i,commandParameter:j,constructor:f,type:l,commandType:pt,isTypedArray:c,nni:d,oneOf:u,shaderError:R,linkError:T,callSite:w,saveCommandRef:H,saveDrawInfo:q,framebufferFormat:Nt,guessCommand:y,texture2D:Rt,textureCube:Ue}),Be=0,Xe=0,mo=5,Je=6;function bo(b,z){this.id=Be++,this.type=b,this.data=z}function vt(b){return b.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function Ot(b){if(b.length===0)return[];var z=b.charAt(0),C=b.charAt(b.length-1);if(b.length>1&&z===C&&(z==='"'||z==="'"))return['"'+vt(b.substr(1,b.length-2))+'"'];var nt=/\[(false|true|null|\d+|'[^']*'|"[^"]*")\]/.exec(b);if(nt)return Ot(b.substr(0,nt.index)).concat(Ot(nt[1])).concat(Ot(b.substr(nt.index+nt[0].length)));var bt=b.split(".");if(bt.length===1)return['"'+vt(b)+'"'];for(var tt=[],lt=0;lt<bt.length;++lt)tt=tt.concat(Ot(bt[lt]));return tt}function Tt(b){return"["+Ot(b).join("][")+"]"}function oo(b,z){return new bo(b,Tt(z+""))}function ro(b){return typeof b=="function"&&!b._reglType||b instanceof bo}function D(b,z){if(typeof b=="function")return new bo(Xe,b);if(typeof b=="number"||typeof b=="boolean")return new bo(mo,b);if(Array.isArray(b))return new bo(Je,b.map((C,nt)=>D(C,z+"["+nt+"]")));if(b instanceof bo)return b;k(!1,"invalid option type in uniform "+z)}var J={DynamicVariable:bo,define:oo,isDynamic:ro,unbox:D,accessor:Tt},mt={next:typeof requestAnimationFrame=="function"?function(b){return requestAnimationFrame(b)}:function(b){return setTimeout(b,16)},cancel:typeof cancelAnimationFrame=="function"?function(b){return cancelAnimationFrame(b)}:clearTimeout},ut=typeof performance!="undefined"&&performance.now?function(){return performance.now()}:function(){return+new Date};function Xt(){var b={"":0},z=[""];return{id:function(C){var nt=b[C];return nt||(nt=b[C]=z.length,z.push(C),nt)},str:function(C){return z[C]}}}function xe(b,z,C){var nt=document.createElement("canvas");e(nt.style,{border:0,margin:0,padding:0,top:0,left:0}),b.appendChild(nt),b===document.body&&(nt.style.position="absolute",e(b.style,{margin:0,padding:0}));function bt(){var Ct=window.innerWidth,qt=window.innerHeight;if(b!==document.body){var Ut=b.getBoundingClientRect();Ct=Ut.right-Ut.left,qt=Ut.bottom-Ut.top}nt.width=C*Ct,nt.height=C*qt,e(nt.style,{width:Ct+"px",height:qt+"px"})}var tt;b!==document.body&&typeof ResizeObserver=="function"?(tt=new ResizeObserver(function(){setTimeout(bt)}),tt.observe(b)):window.addEventListener("resize",bt,!1);function lt(){tt?tt.disconnect():window.removeEventListener("resize",bt),b.removeChild(nt)}return bt(),{canvas:nt,onDestroy:lt}}function we(b,z){function C(nt){try{return b.getContext(nt,z)}catch(bt){return null}}return C("webgl")||C("experimental-webgl")||C("webgl-experimental")}function oe(b){return typeof b.nodeName=="string"&&typeof b.appendChild=="function"&&typeof b.getBoundingClientRect=="function"}function Fe(b){return typeof b.drawArrays=="function"||typeof b.drawElements=="function"}function pe(b){return typeof b=="string"?b.split():(k(Array.isArray(b),"invalid extension array"),b)}function Ie(b){return typeof b=="string"?(k(typeof document!="undefined","not supported outside of DOM"),document.querySelector(b)):b}function fe(b){var z=b||{},C,nt,bt,tt,lt={},Ct=[],qt=[],Ut=typeof window=="undefined"?1:window.devicePixelRatio,Dt=!1,Yt=function(Kt){Kt&&k.raise(Kt)},ne=function(){};if(typeof z=="string"?(k(typeof document!="undefined","selector queries only supported in DOM enviroments"),C=document.querySelector(z),k(C,"invalid query string for element")):typeof z=="object"?oe(z)?C=z:Fe(z)?(tt=z,bt=tt.canvas):(k.constructor(z),"gl"in z?tt=z.gl:"canvas"in z?bt=Ie(z.canvas):"container"in z&&(nt=Ie(z.container)),"attributes"in z&&(lt=z.attributes,k.type(lt,"object","invalid context attributes")),"extensions"in z&&(Ct=pe(z.extensions)),"optionalExtensions"in z&&(qt=pe(z.optionalExtensions)),"onDone"in z&&(k.type(z.onDone,"function","invalid or missing onDone callback"),Yt=z.onDone),"profile"in z&&(Dt=!!z.profile),"pixelRatio"in z&&(Ut=+z.pixelRatio,k(Ut>0,"invalid pixel ratio"))):k.raise("invalid arguments to regl"),C&&(C.nodeName.toLowerCase()==="canvas"?bt=C:nt=C),!tt){if(!bt){k(typeof document!="undefined","must manually specify webgl context outside of DOM environments");var Pt=xe(nt||document.body,Yt,Ut);if(!Pt)return null;bt=Pt.canvas,ne=Pt.onDestroy}lt.premultipliedAlpha===void 0&&(lt.premultipliedAlpha=!0),tt=we(bt,lt)}return tt?{gl:tt,canvas:bt,container:nt,extensions:Ct,optionalExtensions:qt,pixelRatio:Ut,profile:Dt,onDone:Yt,onDestroy:ne}:(ne(),Yt("webgl not supported, try upgrading your browser or graphics drivers http://get.webgl.org"),null)}function Me(b,z){var C={};function nt(lt){k.type(lt,"string","extension name must be string");var Ct=lt.toLowerCase(),qt;try{qt=C[Ct]=b.getExtension(Ct)}catch(Ut){}return!!qt}for(var bt=0;bt<z.extensions.length;++bt){var tt=z.extensions[bt];if(!nt(tt))return z.onDestroy(),z.onDone('"'+tt+'" extension is not supported by the current WebGL context, try upgrading your system or a different browser'),null}return z.optionalExtensions.forEach(nt),{extensions:C,restore:function(){Object.keys(C).forEach(function(lt){if(C[lt]&&!nt(lt))throw new Error("(regl): error restoring extension "+lt)})}}}function Ee(b,z){for(var C=Array(b),nt=0;nt<b;++nt)C[nt]=z(nt);return C}var ie=5120,qe=5121,je=5122,ae=5123,Qe=5124,r0=5125,en=5126;function ko(b){for(var z=16;z<=1<<28;z*=16)if(b<=z)return z;return 0}function Ro(b){var z,C;return z=(b>65535)<<4,b>>>=z,C=(b>255)<<3,b>>>=C,z|=C,C=(b>15)<<2,b>>>=C,z|=C,C=(b>3)<<1,b>>>=C,z|=C,z|b>>1}function Wn(){var b=Ee(8,function(){return[]});function z(tt){var lt=ko(tt),Ct=b[Ro(lt)>>2];return Ct.length>0?Ct.pop():new ArrayBuffer(lt)}function C(tt){b[Ro(tt.byteLength)>>2].push(tt)}function nt(tt,lt){var Ct=null;switch(tt){case ie:Ct=new Int8Array(z(lt),0,lt);break;case qe:Ct=new Uint8Array(z(lt),0,lt);break;case je:Ct=new Int16Array(z(2*lt),0,lt);break;case ae:Ct=new Uint16Array(z(2*lt),0,lt);break;case Qe:Ct=new Int32Array(z(4*lt),0,lt);break;case r0:Ct=new Uint32Array(z(4*lt),0,lt);break;case en:Ct=new Float32Array(z(4*lt),0,lt);break;default:return null}return Ct.length!==lt?Ct.subarray(0,lt):Ct}function bt(tt){C(tt.buffer)}return{alloc:z,free:C,allocType:nt,freeType:bt}}var X=Wn();X.zero=Wn();var _t=3408,ve=3410,Oe=3411,De=3412,un=3413,p0=3414,$0=3415,dn=33901,T0=33902,pn=3379,To=3386,a0=34921,on=36347,Vn=36348,Q0=35661,Z0=35660,Jo=34930,Mr=36349,Tn=34076,Gr=34024,Do=7936,vn=7937,kr=7938,Ss=35724,aa=34047,Es=36063,mf=34852,Da=3553,Mi=34067,Hc=34069,w1=33984,ya=6408,Uc=5126,L0=5121,Bc=36160,zs=36053,gb=36064,xb=16384,yb=function(b,z){var C=1;z.ext_texture_filter_anisotropic&&(C=b.getParameter(aa));var nt=1,bt=1;z.webgl_draw_buffers&&(nt=b.getParameter(mf),bt=b.getParameter(Es));var tt=!!z.oes_texture_float;if(tt){var lt=b.createTexture();b.bindTexture(Da,lt),b.texImage2D(Da,0,ya,1,1,0,ya,Uc,null);var Ct=b.createFramebuffer();if(b.bindFramebuffer(Bc,Ct),b.framebufferTexture2D(Bc,gb,Da,lt,0),b.bindTexture(Da,null),b.checkFramebufferStatus(Bc)!==zs)tt=!1;else{b.viewport(0,0,1,1),b.clearColor(1,0,0,1),b.clear(xb);var qt=X.allocType(Uc,4);b.readPixels(0,0,1,1,ya,Uc,qt),b.getError()?tt=!1:(b.deleteFramebuffer(Ct),b.deleteTexture(lt),tt=qt[0]===1),X.freeType(qt)}}var Ut=typeof navigator!="undefined"&&(/MSIE/.test(navigator.userAgent)||/Trident\//.test(navigator.appVersion)||/Edge/.test(navigator.userAgent)),Dt=!0;if(!Ut){var Yt=b.createTexture(),ne=X.allocType(L0,36);b.activeTexture(w1),b.bindTexture(Mi,Yt),b.texImage2D(Hc,0,ya,3,3,0,ya,L0,ne),X.freeType(ne),b.bindTexture(Mi,null),b.deleteTexture(Yt),Dt=!b.getError()}return{colorBits:[b.getParameter(ve),b.getParameter(Oe),b.getParameter(De),b.getParameter(un)],depthBits:b.getParameter(p0),stencilBits:b.getParameter($0),subpixelBits:b.getParameter(_t),extensions:Object.keys(z).filter(function(Pt){return!!z[Pt]}),maxAnisotropic:C,maxDrawbuffers:nt,maxColorAttachments:bt,pointSizeDims:b.getParameter(dn),lineWidthDims:b.getParameter(T0),maxViewportDims:b.getParameter(To),maxCombinedTextureUnits:b.getParameter(Q0),maxCubeMapSize:b.getParameter(Tn),maxRenderbufferSize:b.getParameter(Gr),maxTextureUnits:b.getParameter(Jo),maxTextureSize:b.getParameter(pn),maxAttributes:b.getParameter(a0),maxVertexUniforms:b.getParameter(on),maxVertexTextureUnits:b.getParameter(Z0),maxVaryingVectors:b.getParameter(Vn),maxFragmentUniforms:b.getParameter(Mr),glsl:b.getParameter(Ss),renderer:b.getParameter(vn),vendor:b.getParameter(Do),version:b.getParameter(kr),readFloat:tt,npotTextureCube:Dt}};function Hr(b){return!!b&&typeof b=="object"&&Array.isArray(b.shape)&&Array.isArray(b.stride)&&typeof b.offset=="number"&&b.shape.length===b.stride.length&&(Array.isArray(b.data)||t(b.data))}var fr=function(b){return Object.keys(b).map(function(z){return b[z]})},gf={shape:Mb,flatten:_b};function bb(b,z,C){for(var nt=0;nt<z;++nt)C[nt]=b[nt]}function wb(b,z,C,nt){for(var bt=0,tt=0;tt<z;++tt)for(var lt=b[tt],Ct=0;Ct<C;++Ct)nt[bt++]=lt[Ct]}function Np(b,z,C,nt,bt,tt){for(var lt=tt,Ct=0;Ct<z;++Ct)for(var qt=b[Ct],Ut=0;Ut<C;++Ut)for(var Dt=qt[Ut],Yt=0;Yt<nt;++Yt)bt[lt++]=Dt[Yt]}function Rp(b,z,C,nt,bt){for(var tt=1,lt=C+1;lt<z.length;++lt)tt*=z[lt];var Ct=z[C];if(z.length-C===4){var qt=z[C+1],Ut=z[C+2],Dt=z[C+3];for(lt=0;lt<Ct;++lt)Np(b[lt],qt,Ut,Dt,nt,bt),bt+=tt}else for(lt=0;lt<Ct;++lt)Rp(b[lt],z,C+1,nt,bt),bt+=tt}function _b(b,z,C,nt){var bt=1;if(z.length)for(var tt=0;tt<z.length;++tt)bt*=z[tt];else bt=0;var lt=nt||X.allocType(C,bt);switch(z.length){case 0:break;case 1:bb(b,z[0],lt);break;case 2:wb(b,z[0],z[1],lt);break;case 3:Np(b,z[0],z[1],z[2],lt,0);break;default:Rp(b,z,0,lt,0)}return lt}function Mb(b){for(var z=[],C=b;C.length;C=C[0])z.push(C.length);return z}var _1={"[object Int8Array]":5120,"[object Int16Array]":5122,"[object Int32Array]":5124,"[object Uint8Array]":5121,"[object Uint8ClampedArray]":5121,"[object Uint16Array]":5123,"[object Uint32Array]":5125,"[object Float32Array]":5126,"[object Float64Array]":5121,"[object ArrayBuffer]":5121},kb=5120,Sb=5122,Eb=5124,zb=5121,Ab=5123,Tb=5125,Lb=5126,Nb=5126,As={int8:kb,int16:Sb,int32:Eb,uint8:zb,uint16:Ab,uint32:Tb,float:Lb,float32:Nb},Rb=35048,Ob=35040,xf={dynamic:Rb,stream:Ob,static:35044},M1=gf.flatten,Op=gf.shape,Cp=35044,Cb=35040,k1=5121,S1=5126,Fa=[];Fa[5120]=1,Fa[5122]=2,Fa[5124]=4,Fa[5121]=1,Fa[5123]=2,Fa[5125]=4,Fa[5126]=4;function yf(b){return _1[Object.prototype.toString.call(b)]|0}function Pp(b,z){for(var C=0;C<z.length;++C)b[C]=z[C]}function $p(b,z,C,nt,bt,tt,lt){for(var Ct=0,qt=0;qt<C;++qt)for(var Ut=0;Ut<nt;++Ut)b[Ct++]=z[bt*qt+tt*Ut+lt]}function Pb(b,z,C,nt){var bt=0,tt={};function lt(Y){this.id=bt++,this.buffer=b.createBuffer(),this.type=Y,this.usage=Cp,this.byteLength=0,this.dimension=1,this.dtype=k1,this.persistentData=null,C.profile&&(this.stats={size:0})}lt.prototype.bind=function(){b.bindBuffer(this.type,this.buffer)},lt.prototype.destroy=function(){ne(this)};var Ct=[];function qt(Y,ft){var Gt=Ct.pop();return Gt||(Gt=new lt(Y)),Gt.bind(),Yt(Gt,ft,Cb,0,1,!1),Gt}function Ut(Y){Ct.push(Y)}function Dt(Y,ft,Gt){Y.byteLength=ft.byteLength,b.bufferData(Y.type,ft,Gt)}function Yt(Y,ft,Gt,ue,St,me){var Lt;if(Y.usage=Gt,Array.isArray(ft)){if(Y.dtype=ue||S1,ft.length>0){var Jt;if(Array.isArray(ft[0])){Lt=Op(ft);for(var zt=1,te=1;te<Lt.length;++te)zt*=Lt[te];Y.dimension=zt,Jt=M1(ft,Lt,Y.dtype),Dt(Y,Jt,Gt),me?Y.persistentData=Jt:X.freeType(Jt)}else if(typeof ft[0]=="number"){Y.dimension=St;var We=X.allocType(Y.dtype,ft.length);Pp(We,ft),Dt(Y,We,Gt),me?Y.persistentData=We:X.freeType(We)}else t(ft[0])?(Y.dimension=ft[0].length,Y.dtype=ue||yf(ft[0])||S1,Jt=M1(ft,[ft.length,ft[0].length],Y.dtype),Dt(Y,Jt,Gt),me?Y.persistentData=Jt:X.freeType(Jt)):k.raise("invalid buffer data")}}else if(t(ft))Y.dtype=ue||yf(ft),Y.dimension=St,Dt(Y,ft,Gt),me&&(Y.persistentData=new Uint8Array(new Uint8Array(ft.buffer)));else if(Hr(ft)){Lt=ft.shape;var ao=ft.stride,re=ft.offset,jt=0,kt=0,to=0,ho=0;Lt.length===1?(jt=Lt[0],kt=1,to=ao[0],ho=0):Lt.length===2?(jt=Lt[0],kt=Lt[1],to=ao[0],ho=ao[1]):k.raise("invalid shape"),Y.dtype=ue||yf(ft.data)||S1,Y.dimension=kt;var ze=X.allocType(Y.dtype,jt*kt);$p(ze,ft.data,jt,kt,to,ho,re),Dt(Y,ze,Gt),me?Y.persistentData=ze:X.freeType(ze)}else ft instanceof ArrayBuffer?(Y.dtype=k1,Y.dimension=St,Dt(Y,ft,Gt),me&&(Y.persistentData=new Uint8Array(new Uint8Array(ft)))):k.raise("invalid buffer data")}function ne(Y){z.bufferCount--,nt(Y);var ft=Y.buffer;k(ft,"buffer must not be deleted already"),b.deleteBuffer(ft),Y.buffer=null,delete tt[Y.id]}function Pt(Y,ft,Gt,ue){z.bufferCount++;var St=new lt(ft);tt[St.id]=St;function me(zt){var te=Cp,We=null,ao=0,re=0,jt=1;return Array.isArray(zt)||t(zt)||Hr(zt)||zt instanceof ArrayBuffer?We=zt:typeof zt=="number"?ao=zt|0:zt&&(k.type(zt,"object","buffer arguments must be an object, a number or an array"),"data"in zt&&(k(We===null||Array.isArray(We)||t(We)||Hr(We),"invalid data for buffer"),We=zt.data),"usage"in zt&&(k.parameter(zt.usage,xf,"invalid buffer usage"),te=xf[zt.usage]),"type"in zt&&(k.parameter(zt.type,As,"invalid buffer type"),re=As[zt.type]),"dimension"in zt&&(k.type(zt.dimension,"number","invalid dimension"),jt=zt.dimension|0),"length"in zt&&(k.nni(ao,"buffer length must be a nonnegative integer"),ao=zt.length|0)),St.bind(),We?Yt(St,We,te,re,jt,ue):(ao&&b.bufferData(St.type,ao,te),St.dtype=re||k1,St.usage=te,St.dimension=jt,St.byteLength=ao),C.profile&&(St.stats.size=St.byteLength*Fa[St.dtype]),me}function Lt(zt,te){k(te+zt.byteLength<=St.byteLength,"invalid buffer subdata call, buffer is too small.  Can't write data of size "+zt.byteLength+" starting from offset "+te+" to a buffer of size "+St.byteLength),b.bufferSubData(St.type,te,zt)}function Jt(zt,te){var We=(te||0)|0,ao;if(St.bind(),t(zt)||zt instanceof ArrayBuffer)Lt(zt,We);else if(Array.isArray(zt)){if(zt.length>0)if(typeof zt[0]=="number"){var re=X.allocType(St.dtype,zt.length);Pp(re,zt),Lt(re,We),X.freeType(re)}else if(Array.isArray(zt[0])||t(zt[0])){ao=Op(zt);var jt=M1(zt,ao,St.dtype);Lt(jt,We),X.freeType(jt)}else k.raise("invalid buffer data")}else if(Hr(zt)){ao=zt.shape;var kt=zt.stride,to=0,ho=0,ze=0,wo=0;ao.length===1?(to=ao[0],ho=1,ze=kt[0],wo=0):ao.length===2?(to=ao[0],ho=ao[1],ze=kt[0],wo=kt[1]):k.raise("invalid shape");var so=Array.isArray(zt.data)?St.dtype:yf(zt.data),go=X.allocType(so,to*ho);$p(go,zt.data,to,ho,ze,wo,zt.offset),Lt(go,We),X.freeType(go)}else k.raise("invalid data for buffer subdata");return me}return Gt||me(Y),me._reglType="buffer",me._buffer=St,me.subdata=Jt,C.profile&&(me.stats=St.stats),me.destroy=function(){ne(St)},me}function Kt(){fr(tt).forEach(function(Y){Y.buffer=b.createBuffer(),b.bindBuffer(Y.type,Y.buffer),b.bufferData(Y.type,Y.persistentData||Y.byteLength,Y.usage)})}return C.profile&&(z.getTotalBufferSize=function(){var Y=0;return Object.keys(tt).forEach(function(ft){Y+=tt[ft].stats.size}),Y}),{create:Pt,createStream:qt,destroyStream:Ut,clear:function(){fr(tt).forEach(ne),Ct.forEach(ne)},getBuffer:function(Y){return Y&&Y._buffer instanceof lt?Y._buffer:null},restore:Kt,_initBuffer:Yt}}var $b=0,Ib=0,qb=1,Db=1,Fb=4,Gb=4,ki={points:$b,point:Ib,lines:qb,line:Db,triangles:Fb,triangle:Gb,"line loop":2,"line strip":3,"triangle strip":5,"triangle fan":6},Hb=0,Ub=1,jc=4,Bb=5120,Si=5121,Ip=5122,Ei=5123,qp=5124,Ts=5125,E1=34963,jb=35040,Wb=35044;function Vb(b,z,C,nt){var bt={},tt=0,lt={uint8:Si,uint16:Ei};z.oes_element_index_uint&&(lt.uint32=Ts);function Ct(Kt){this.id=tt++,bt[this.id]=this,this.buffer=Kt,this.primType=jc,this.vertCount=0,this.type=0}Ct.prototype.bind=function(){this.buffer.bind()};var qt=[];function Ut(Kt){var Y=qt.pop();return Y||(Y=new Ct(C.create(null,E1,!0,!1)._buffer)),Yt(Y,Kt,jb,-1,-1,0,0),Y}function Dt(Kt){qt.push(Kt)}function Yt(Kt,Y,ft,Gt,ue,St,me){Kt.buffer.bind();var Lt;if(Y){var Jt=me;!me&&(!t(Y)||Hr(Y)&&!t(Y.data))&&(Jt=z.oes_element_index_uint?Ts:Ei),C._initBuffer(Kt.buffer,Y,ft,Jt,3)}else b.bufferData(E1,St,ft),Kt.buffer.dtype=Lt||Si,Kt.buffer.usage=ft,Kt.buffer.dimension=3,Kt.buffer.byteLength=St;if(Lt=me,!me){switch(Kt.buffer.dtype){case Si:case Bb:Lt=Si;break;case Ei:case Ip:Lt=Ei;break;case Ts:case qp:Lt=Ts;break;default:k.raise("unsupported type for element array")}Kt.buffer.dtype=Lt}Kt.type=Lt,k(Lt!==Ts||!!z.oes_element_index_uint,"32 bit element buffers not supported, enable oes_element_index_uint first");var zt=ue;zt<0&&(zt=Kt.buffer.byteLength,Lt===Ei?zt>>=1:Lt===Ts&&(zt>>=2)),Kt.vertCount=zt;var te=Gt;if(Gt<0){te=jc;var We=Kt.buffer.dimension;We===1&&(te=Hb),We===2&&(te=Ub),We===3&&(te=jc)}Kt.primType=te}function ne(Kt){nt.elementsCount--,k(Kt.buffer!==null,"must not double destroy elements"),delete bt[Kt.id],Kt.buffer.destroy(),Kt.buffer=null}function Pt(Kt,Y){var ft=C.create(null,E1,!0),Gt=new Ct(ft._buffer);nt.elementsCount++;function ue(St){if(!St)ft(),Gt.primType=jc,Gt.vertCount=0,Gt.type=Si;else if(typeof St=="number")ft(St),Gt.primType=jc,Gt.vertCount=St|0,Gt.type=Si;else{var me=null,Lt=Wb,Jt=-1,zt=-1,te=0,We=0;Array.isArray(St)||t(St)||Hr(St)?me=St:(k.type(St,"object","invalid arguments for elements"),"data"in St&&(me=St.data,k(Array.isArray(me)||t(me)||Hr(me),"invalid data for element buffer")),"usage"in St&&(k.parameter(St.usage,xf,"invalid element buffer usage"),Lt=xf[St.usage]),"primitive"in St&&(k.parameter(St.primitive,ki,"invalid element buffer primitive"),Jt=ki[St.primitive]),"count"in St&&(k(typeof St.count=="number"&&St.count>=0,"invalid vertex count for elements"),zt=St.count|0),"type"in St&&(k.parameter(St.type,lt,"invalid buffer type"),We=lt[St.type]),"length"in St?te=St.length|0:(te=zt,We===Ei||We===Ip?te*=2:(We===Ts||We===qp)&&(te*=4))),Yt(Gt,me,Lt,Jt,zt,te,We)}return ue}return ue(Kt),ue._reglType="elements",ue._elements=Gt,ue.subdata=function(St,me){return ft.subdata(St,me),ue},ue.destroy=function(){ne(Gt)},ue}return{create:Pt,createStream:Ut,destroyStream:Dt,getElements:function(Kt){return typeof Kt=="function"&&Kt._elements instanceof Ct?Kt._elements:null},clear:function(){fr(bt).forEach(ne)}}}var Dp=new Float32Array(1),Xb=new Uint32Array(Dp.buffer),Yb=5123;function Fp(b){for(var z=X.allocType(Yb,b.length),C=0;C<b.length;++C)if(isNaN(b[C]))z[C]=65535;else if(b[C]===1/0)z[C]=31744;else if(b[C]===-1/0)z[C]=64512;else{Dp[0]=b[C];var nt=Xb[0],bt=nt>>>31<<15,tt=(nt<<1>>>24)-127,lt=nt>>13&1023;if(tt<-24)z[C]=bt;else if(tt<-14){var Ct=-14-tt;z[C]=bt+(lt+1024>>Ct)}else tt>15?z[C]=bt+31744:z[C]=bt+(tt+15<<10)+lt}return z}function kn(b){return Array.isArray(b)||t(b)}var Gp=function(b){return!(b&b-1)&&!!b},Kb=34467,sa=3553,z1=34067,bf=34069,Ls=6408,A1=6406,wf=6407,Wc=6409,_f=6410,Hp=32854,T1=32855,Up=36194,Qb=32819,Zb=32820,Jb=33635,tw=34042,L1=6402,Mf=34041,N1=35904,R1=35906,zi=36193,O1=33776,C1=33777,P1=33778,$1=33779,Bp=35986,jp=35987,Wp=34798,Vp=35840,Xp=35841,Yp=35842,Kp=35843,Qp=36196,Ai=5121,I1=5123,q1=5125,Vc=5126,ew=10242,ow=10243,nw=10497,D1=33071,rw=33648,aw=10240,sw=10241,F1=9728,iw=9729,G1=9984,Zp=9985,Jp=9986,H1=9987,cw=33170,kf=4352,lw=4353,fw=4354,hw=34046,uw=3317,dw=37440,pw=37441,vw=37443,tv=37444,Xc=33984,mw=[G1,Jp,Zp,H1],Sf=[0,Wc,_f,wf,Ls],Sr={};Sr[Wc]=Sr[A1]=Sr[L1]=1,Sr[Mf]=Sr[_f]=2,Sr[wf]=Sr[N1]=3,Sr[Ls]=Sr[R1]=4;function Ti(b){return"[object "+b+"]"}var ev=Ti("HTMLCanvasElement"),ov=Ti("OffscreenCanvas"),nv=Ti("CanvasRenderingContext2D"),rv=Ti("ImageBitmap"),av=Ti("HTMLImageElement"),sv=Ti("HTMLVideoElement"),gw=Object.keys(_1).concat([ev,ov,nv,rv,av,sv]),Li=[];Li[Ai]=1,Li[Vc]=4,Li[zi]=2,Li[I1]=2,Li[q1]=4;var v0=[];v0[Hp]=2,v0[T1]=2,v0[Up]=2,v0[Mf]=4,v0[O1]=.5,v0[C1]=.5,v0[P1]=1,v0[$1]=1,v0[Bp]=.5,v0[jp]=1,v0[Wp]=1,v0[Vp]=.5,v0[Xp]=.25,v0[Yp]=.5,v0[Kp]=.25,v0[Qp]=.5;function iv(b){return Array.isArray(b)&&(b.length===0||typeof b[0]=="number")}function cv(b){if(!Array.isArray(b))return!1;var z=b.length;return!(z===0||!kn(b[0]))}function Ns(b){return Object.prototype.toString.call(b)}function lv(b){return Ns(b)===ev}function fv(b){return Ns(b)===ov}function xw(b){return Ns(b)===nv}function yw(b){return Ns(b)===rv}function bw(b){return Ns(b)===av}function ww(b){return Ns(b)===sv}function U1(b){if(!b)return!1;var z=Ns(b);return gw.indexOf(z)>=0?!0:iv(b)||cv(b)||Hr(b)}function hv(b){return _1[Object.prototype.toString.call(b)]|0}function _w(b,z){var C=z.length;switch(b.type){case Ai:case I1:case q1:case Vc:var nt=X.allocType(b.type,C);nt.set(z),b.data=nt;break;case zi:b.data=Fp(z);break;default:k.raise("unsupported texture type, must specify a typed array")}}function uv(b,z){return X.allocType(b.type===zi?Vc:b.type,z)}function dv(b,z){b.type===zi?(b.data=Fp(z),X.freeType(z)):b.data=z}function Mw(b,z,C,nt,bt,tt){for(var lt=b.width,Ct=b.height,qt=b.channels,Ut=lt*Ct*qt,Dt=uv(b,Ut),Yt=0,ne=0;ne<Ct;++ne)for(var Pt=0;Pt<lt;++Pt)for(var Kt=0;Kt<qt;++Kt)Dt[Yt++]=z[C*Pt+nt*ne+bt*Kt+tt];dv(b,Dt)}function Ef(b,z,C,nt,bt,tt){var lt;if(typeof v0[b]!="undefined"?lt=v0[b]:lt=Sr[b]*Li[z],tt&&(lt*=6),bt){for(var Ct=0,qt=C;qt>=1;)Ct+=lt*qt*qt,qt/=2;return Ct}else return lt*C*nt}function kw(b,z,C,nt,bt,tt,lt){var Ct={"don't care":kf,"dont care":kf,nice:fw,fast:lw},qt={repeat:nw,clamp:D1,mirror:rw},Ut={nearest:F1,linear:iw},Dt=e({mipmap:H1,"nearest mipmap nearest":G1,"linear mipmap nearest":Zp,"nearest mipmap linear":Jp,"linear mipmap linear":H1},Ut),Yt={none:0,browser:tv},ne={uint8:Ai,rgba4:Qb,rgb565:Jb,"rgb5 a1":Zb},Pt={alpha:A1,luminance:Wc,"luminance alpha":_f,rgb:wf,rgba:Ls,rgba4:Hp,"rgb5 a1":T1,rgb565:Up},Kt={};z.ext_srgb&&(Pt.srgb=N1,Pt.srgba=R1),z.oes_texture_float&&(ne.float32=ne.float=Vc),z.oes_texture_half_float&&(ne.float16=ne["half float"]=zi),z.webgl_depth_texture&&(e(Pt,{depth:L1,"depth stencil":Mf}),e(ne,{uint16:I1,uint32:q1,"depth stencil":tw})),z.webgl_compressed_texture_s3tc&&e(Kt,{"rgb s3tc dxt1":O1,"rgba s3tc dxt1":C1,"rgba s3tc dxt3":P1,"rgba s3tc dxt5":$1}),z.webgl_compressed_texture_atc&&e(Kt,{"rgb atc":Bp,"rgba atc explicit alpha":jp,"rgba atc interpolated alpha":Wp}),z.webgl_compressed_texture_pvrtc&&e(Kt,{"rgb pvrtc 4bppv1":Vp,"rgb pvrtc 2bppv1":Xp,"rgba pvrtc 4bppv1":Yp,"rgba pvrtc 2bppv1":Kp}),z.webgl_compressed_texture_etc1&&(Kt["rgb etc1"]=Qp);var Y=Array.prototype.slice.call(b.getParameter(Kb));Object.keys(Kt).forEach(function(O){var at=Kt[O];Y.indexOf(at)>=0&&(Pt[O]=at)});var ft=Object.keys(Pt);C.textureFormats=ft;var Gt=[];Object.keys(Pt).forEach(function(O){var at=Pt[O];Gt[at]=O});var ue=[];Object.keys(ne).forEach(function(O){var at=ne[O];ue[at]=O});var St=[];Object.keys(Ut).forEach(function(O){var at=Ut[O];St[at]=O});var me=[];Object.keys(Dt).forEach(function(O){var at=Dt[O];me[at]=O});var Lt=[];Object.keys(qt).forEach(function(O){var at=qt[O];Lt[at]=O});var Jt=ft.reduce(function(O,at){var Z=Pt[at];return Z===Wc||Z===A1||Z===Wc||Z===_f||Z===L1||Z===Mf||z.ext_srgb&&(Z===N1||Z===R1)?O[Z]=Z:Z===T1||at.indexOf("rgba")>=0?O[Z]=Ls:O[Z]=wf,O},{});function zt(){this.internalformat=Ls,this.format=Ls,this.type=Ai,this.compressed=!1,this.premultiplyAlpha=!1,this.flipY=!1,this.unpackAlignment=1,this.colorSpace=tv,this.width=0,this.height=0,this.channels=0}function te(O,at){O.internalformat=at.internalformat,O.format=at.format,O.type=at.type,O.compressed=at.compressed,O.premultiplyAlpha=at.premultiplyAlpha,O.flipY=at.flipY,O.unpackAlignment=at.unpackAlignment,O.colorSpace=at.colorSpace,O.width=at.width,O.height=at.height,O.channels=at.channels}function We(O,at){if(!(typeof at!="object"||!at)){if("premultiplyAlpha"in at&&(k.type(at.premultiplyAlpha,"boolean","invalid premultiplyAlpha"),O.premultiplyAlpha=at.premultiplyAlpha),"flipY"in at&&(k.type(at.flipY,"boolean","invalid texture flip"),O.flipY=at.flipY),"alignment"in at&&(k.oneOf(at.alignment,[1,2,4,8],"invalid texture unpack alignment"),O.unpackAlignment=at.alignment),"colorSpace"in at&&(k.parameter(at.colorSpace,Yt,"invalid colorSpace"),O.colorSpace=Yt[at.colorSpace]),"type"in at){var Z=at.type;k(z.oes_texture_float||!(Z==="float"||Z==="float32"),"you must enable the OES_texture_float extension in order to use floating point textures."),k(z.oes_texture_half_float||!(Z==="half float"||Z==="float16"),"you must enable the OES_texture_half_float extension in order to use 16-bit floating point textures."),k(z.webgl_depth_texture||!(Z==="uint16"||Z==="uint32"||Z==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),k.parameter(Z,ne,"invalid texture type"),O.type=ne[Z]}var _e=O.width,_o=O.height,L=O.channels,E=!1;"shape"in at?(k(Array.isArray(at.shape)&&at.shape.length>=2,"shape must be an array"),_e=at.shape[0],_o=at.shape[1],at.shape.length===3&&(L=at.shape[2],k(L>0&&L<=4,"invalid number of channels"),E=!0),k(_e>=0&&_e<=C.maxTextureSize,"invalid width"),k(_o>=0&&_o<=C.maxTextureSize,"invalid height")):("radius"in at&&(_e=_o=at.radius,k(_e>=0&&_e<=C.maxTextureSize,"invalid radius")),"width"in at&&(_e=at.width,k(_e>=0&&_e<=C.maxTextureSize,"invalid width")),"height"in at&&(_o=at.height,k(_o>=0&&_o<=C.maxTextureSize,"invalid height")),"channels"in at&&(L=at.channels,k(L>0&&L<=4,"invalid number of channels"),E=!0)),O.width=_e|0,O.height=_o|0,O.channels=L|0;var $=!1;if("format"in at){var V=at.format;k(z.webgl_depth_texture||!(V==="depth"||V==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),k.parameter(V,Pt,"invalid texture format");var K=O.internalformat=Pt[V];O.format=Jt[K],V in ne&&("type"in at||(O.type=ne[V])),V in Kt&&(O.compressed=!0),$=!0}!E&&$?O.channels=Sr[O.format]:E&&!$?O.channels!==Sf[O.format]&&(O.format=O.internalformat=Sf[O.channels]):$&&E&&k(O.channels===Sr[O.format],"number of channels inconsistent with specified format")}}function ao(O){b.pixelStorei(dw,O.flipY),b.pixelStorei(pw,O.premultiplyAlpha),b.pixelStorei(vw,O.colorSpace),b.pixelStorei(uw,O.unpackAlignment)}function re(){zt.call(this),this.xOffset=0,this.yOffset=0,this.data=null,this.needsFree=!1,this.element=null,this.needsCopy=!1}function jt(O,at){var Z=null;if(U1(at)?Z=at:at&&(k.type(at,"object","invalid pixel data type"),We(O,at),"x"in at&&(O.xOffset=at.x|0),"y"in at&&(O.yOffset=at.y|0),U1(at.data)&&(Z=at.data)),k(!O.compressed||Z instanceof Uint8Array,"compressed texture data must be stored in a uint8array"),at.copy){k(!Z,"can not specify copy and data field for the same texture");var _e=bt.viewportWidth,_o=bt.viewportHeight;O.width=O.width||_e-O.xOffset,O.height=O.height||_o-O.yOffset,O.needsCopy=!0,k(O.xOffset>=0&&O.xOffset<_e&&O.yOffset>=0&&O.yOffset<_o&&O.width>0&&O.width<=_e&&O.height>0&&O.height<=_o,"copy texture read out of bounds")}else if(!Z)O.width=O.width||1,O.height=O.height||1,O.channels=O.channels||4;else if(t(Z))O.channels=O.channels||4,O.data=Z,!("type"in at)&&O.type===Ai&&(O.type=hv(Z));else if(iv(Z))O.channels=O.channels||4,_w(O,Z),O.alignment=1,O.needsFree=!0;else if(Hr(Z)){var L=Z.data;!Array.isArray(L)&&O.type===Ai&&(O.type=hv(L));var E=Z.shape,$=Z.stride,V,K,G,I,U,N;E.length===3?(G=E[2],N=$[2]):(k(E.length===2,"invalid ndarray pixel data, must be 2 or 3D"),G=1,N=1),V=E[0],K=E[1],I=$[0],U=$[1],O.alignment=1,O.width=V,O.height=K,O.channels=G,O.format=O.internalformat=Sf[G],O.needsFree=!0,Mw(O,L,I,U,N,Z.offset)}else if(lv(Z)||fv(Z)||xw(Z))lv(Z)||fv(Z)?O.element=Z:O.element=Z.canvas,O.width=O.element.width,O.height=O.element.height,O.channels=4;else if(yw(Z))O.element=Z,O.width=Z.width,O.height=Z.height,O.channels=4;else if(bw(Z))O.element=Z,O.width=Z.naturalWidth,O.height=Z.naturalHeight,O.channels=4;else if(ww(Z))O.element=Z,O.width=Z.videoWidth,O.height=Z.videoHeight,O.channels=4;else if(cv(Z)){var P=O.width||Z[0].length,A=O.height||Z.length,B=O.channels;kn(Z[0][0])?B=B||Z[0][0].length:B=B||1;for(var Q=gf.shape(Z),gt=1,wt=0;wt<Q.length;++wt)gt*=Q[wt];var dt=uv(O,gt);gf.flatten(Z,Q,"",dt),dv(O,dt),O.alignment=1,O.width=P,O.height=A,O.channels=B,O.format=O.internalformat=Sf[B],O.needsFree=!0}O.type===Vc?k(C.extensions.indexOf("oes_texture_float")>=0,"oes_texture_float extension not enabled"):O.type===zi&&k(C.extensions.indexOf("oes_texture_half_float")>=0,"oes_texture_half_float extension not enabled")}function kt(O,at,Z){var _e=O.element,_o=O.data,L=O.internalformat,E=O.format,$=O.type,V=O.width,K=O.height;ao(O),_e?b.texImage2D(at,Z,E,E,$,_e):O.compressed?b.compressedTexImage2D(at,Z,L,V,K,0,_o):O.needsCopy?(nt(),b.copyTexImage2D(at,Z,E,O.xOffset,O.yOffset,V,K,0)):b.texImage2D(at,Z,E,V,K,0,E,$,_o||null)}function to(O,at,Z,_e,_o){var L=O.element,E=O.data,$=O.internalformat,V=O.format,K=O.type,G=O.width,I=O.height;ao(O),L?b.texSubImage2D(at,_o,Z,_e,V,K,L):O.compressed?b.compressedTexSubImage2D(at,_o,Z,_e,$,G,I,E):O.needsCopy?(nt(),b.copyTexSubImage2D(at,_o,Z,_e,O.xOffset,O.yOffset,G,I)):b.texSubImage2D(at,_o,Z,_e,G,I,V,K,E)}var ho=[];function ze(){return ho.pop()||new re}function wo(O){O.needsFree&&X.freeType(O.data),re.call(O),ho.push(O)}function so(){zt.call(this),this.genMipmaps=!1,this.mipmapHint=kf,this.mipmask=0,this.images=Array(16)}function go(O,at,Z){var _e=O.images[0]=ze();O.mipmask=1,_e.width=O.width=at,_e.height=O.height=Z,_e.channels=O.channels=4}function Po(O,at){var Z=null;if(U1(at))Z=O.images[0]=ze(),te(Z,O),jt(Z,at),O.mipmask=1;else if(We(O,at),Array.isArray(at.mipmap))for(var _e=at.mipmap,_o=0;_o<_e.length;++_o)Z=O.images[_o]=ze(),te(Z,O),Z.width>>=_o,Z.height>>=_o,jt(Z,_e[_o]),O.mipmask|=1<<_o;else Z=O.images[0]=ze(),te(Z,O),jt(Z,at),O.mipmask=1;te(O,O.images[0]),O.compressed&&(O.internalformat===O1||O.internalformat===C1||O.internalformat===P1||O.internalformat===$1)&&k(O.width%4===0&&O.height%4===0,"for compressed texture formats, mipmap level 0 must have width and height that are a multiple of 4")}function Nn(O,at){for(var Z=O.images,_e=0;_e<Z.length;++_e){if(!Z[_e])return;kt(Z[_e],at,_e)}}var Xn=[];function Eo(){var O=Xn.pop()||new so;zt.call(O),O.mipmask=0;for(var at=0;at<16;++at)O.images[at]=null;return O}function qn(O){for(var at=O.images,Z=0;Z<at.length;++Z)at[Z]&&wo(at[Z]),at[Z]=null;Xn.push(O)}function nn(){this.minFilter=F1,this.magFilter=F1,this.wrapS=D1,this.wrapT=D1,this.anisotropic=1,this.genMipmaps=!1,this.mipmapHint=kf}function Rn(O,at){if("min"in at){var Z=at.min;k.parameter(Z,Dt),O.minFilter=Dt[Z],mw.indexOf(O.minFilter)>=0&&!("faces"in at)&&(O.genMipmaps=!0)}if("mag"in at){var _e=at.mag;k.parameter(_e,Ut),O.magFilter=Ut[_e]}var _o=O.wrapS,L=O.wrapT;if("wrap"in at){var E=at.wrap;typeof E=="string"?(k.parameter(E,qt),_o=L=qt[E]):Array.isArray(E)&&(k.parameter(E[0],qt),k.parameter(E[1],qt),_o=qt[E[0]],L=qt[E[1]])}else{if("wrapS"in at){var $=at.wrapS;k.parameter($,qt),_o=qt[$]}if("wrapT"in at){var V=at.wrapT;k.parameter(V,qt),L=qt[V]}}if(O.wrapS=_o,O.wrapT=L,"anisotropic"in at){var K=at.anisotropic;k(typeof K=="number"&&K>=1&&K<=C.maxAnisotropic,"aniso samples must be between 1 and "),O.anisotropic=at.anisotropic}if("mipmap"in at){var G=!1;switch(typeof at.mipmap){case"string":k.parameter(at.mipmap,Ct,"invalid mipmap hint"),O.mipmapHint=Ct[at.mipmap],O.genMipmaps=!0,G=!0;break;case"boolean":G=O.genMipmaps=at.mipmap;break;case"object":k(Array.isArray(at.mipmap),"invalid mipmap type"),O.genMipmaps=!1,G=!0;break;default:k.raise("invalid mipmap type")}G&&!("min"in at)&&(O.minFilter=G1)}}function Dn(O,at){b.texParameteri(at,sw,O.minFilter),b.texParameteri(at,aw,O.magFilter),b.texParameteri(at,ew,O.wrapS),b.texParameteri(at,ow,O.wrapT),z.ext_texture_filter_anisotropic&&b.texParameteri(at,hw,O.anisotropic),O.genMipmaps&&(b.hint(cw,O.mipmapHint),b.generateMipmap(at))}var Fn=0,s0={},m0=C.maxTextureUnits,Sn=Array(m0).map(function(){return null});function uo(O){zt.call(this),this.mipmask=0,this.internalformat=Ls,this.id=Fn++,this.refCount=1,this.target=O,this.texture=b.createTexture(),this.unit=-1,this.bindCount=0,this.texInfo=new nn,lt.profile&&(this.stats={size:0})}function g0(O){b.activeTexture(Xc),b.bindTexture(O.target,O.texture)}function Fo(){var O=Sn[0];O?b.bindTexture(O.target,O.texture):b.bindTexture(sa,null)}function Ve(O){var at=O.texture;k(at,"must not double destroy texture");var Z=O.unit,_e=O.target;Z>=0&&(b.activeTexture(Xc+Z),b.bindTexture(_e,null),Sn[Z]=null),b.deleteTexture(at),O.texture=null,O.params=null,O.pixels=null,O.refCount=0,delete s0[O.id],tt.textureCount--}e(uo.prototype,{bind:function(){var O=this;O.bindCount+=1;var at=O.unit;if(at<0){for(var Z=0;Z<m0;++Z){var _e=Sn[Z];if(_e){if(_e.bindCount>0)continue;_e.unit=-1}Sn[Z]=O,at=Z;break}at>=m0&&k.raise("insufficient number of texture units"),lt.profile&&tt.maxTextureUnits<at+1&&(tt.maxTextureUnits=at+1),O.unit=at,b.activeTexture(Xc+at),b.bindTexture(O.target,O.texture)}return at},unbind:function(){this.bindCount-=1},decRef:function(){--this.refCount<=0&&Ve(this)}});function So(O,at){var Z=new uo(sa);s0[Z.id]=Z,tt.textureCount++;function _e(E,$){var V=Z.texInfo;nn.call(V);var K=Eo();return typeof E=="number"?typeof $=="number"?go(K,E|0,$|0):go(K,E|0,E|0):E?(k.type(E,"object","invalid arguments to regl.texture"),Rn(V,E),Po(K,E)):go(K,1,1),V.genMipmaps&&(K.mipmask=(K.width<<1)-1),Z.mipmask=K.mipmask,te(Z,K),k.texture2D(V,K,C),Z.internalformat=K.internalformat,_e.width=K.width,_e.height=K.height,g0(Z),Nn(K,sa),Dn(V,sa),Fo(),qn(K),lt.profile&&(Z.stats.size=Ef(Z.internalformat,Z.type,K.width,K.height,V.genMipmaps,!1)),_e.format=Gt[Z.internalformat],_e.type=ue[Z.type],_e.mag=St[V.magFilter],_e.min=me[V.minFilter],_e.wrapS=Lt[V.wrapS],_e.wrapT=Lt[V.wrapT],_e}function _o(E,$,V,K){k(!!E,"must specify image data");var G=$|0,I=V|0,U=K|0,N=ze();return te(N,Z),N.width=0,N.height=0,jt(N,E),N.width=N.width||(Z.width>>U)-G,N.height=N.height||(Z.height>>U)-I,k(Z.type===N.type&&Z.format===N.format&&Z.internalformat===N.internalformat,"incompatible format for texture.subimage"),k(G>=0&&I>=0&&G+N.width<=Z.width&&I+N.height<=Z.height,"texture.subimage write out of bounds"),k(Z.mipmask&1<<U,"missing mipmap data"),k(N.data||N.element||N.needsCopy,"missing image data"),g0(Z),to(N,sa,G,I,U),Fo(),wo(N),_e}function L(E,$){var V=E|0,K=$|0||V;if(V===Z.width&&K===Z.height)return _e;_e.width=Z.width=V,_e.height=Z.height=K,g0(Z);for(var G=0;Z.mipmask>>G;++G){var I=V>>G,U=K>>G;if(!I||!U)break;b.texImage2D(sa,G,Z.format,I,U,0,Z.format,Z.type,null)}return Fo(),lt.profile&&(Z.stats.size=Ef(Z.internalformat,Z.type,V,K,!1,!1)),_e}return _e(O,at),_e.subimage=_o,_e.resize=L,_e._reglType="texture2d",_e._texture=Z,lt.profile&&(_e.stats=Z.stats),_e.destroy=function(){Z.decRef()},_e}function Lo(O,at,Z,_e,_o,L){var E=new uo(z1);s0[E.id]=E,tt.cubeCount++;var $=new Array(6);function V(I,U,N,P,A,B){var Q,gt=E.texInfo;for(nn.call(gt),Q=0;Q<6;++Q)$[Q]=Eo();if(typeof I=="number"||!I){var wt=I|0||1;for(Q=0;Q<6;++Q)go($[Q],wt,wt)}else if(typeof I=="object")if(U)Po($[0],I),Po($[1],U),Po($[2],N),Po($[3],P),Po($[4],A),Po($[5],B);else if(Rn(gt,I),We(E,I),"faces"in I){var dt=I.faces;for(k(Array.isArray(dt)&&dt.length===6,"cube faces must be a length 6 array"),Q=0;Q<6;++Q)k(typeof dt[Q]=="object"&&!!dt[Q],"invalid input for cube map face"),te($[Q],E),Po($[Q],dt[Q])}else for(Q=0;Q<6;++Q)Po($[Q],I);else k.raise("invalid arguments to cube map");for(te(E,$[0]),C.npotTextureCube||k(Gp(E.width)&&Gp(E.height),"your browser does not support non power or two texture dimensions"),gt.genMipmaps?E.mipmask=($[0].width<<1)-1:E.mipmask=$[0].mipmask,k.textureCube(E,gt,$,C),E.internalformat=$[0].internalformat,V.width=$[0].width,V.height=$[0].height,g0(E),Q=0;Q<6;++Q)Nn($[Q],bf+Q);for(Dn(gt,z1),Fo(),lt.profile&&(E.stats.size=Ef(E.internalformat,E.type,V.width,V.height,gt.genMipmaps,!0)),V.format=Gt[E.internalformat],V.type=ue[E.type],V.mag=St[gt.magFilter],V.min=me[gt.minFilter],V.wrapS=Lt[gt.wrapS],V.wrapT=Lt[gt.wrapT],Q=0;Q<6;++Q)qn($[Q]);return V}function K(I,U,N,P,A){k(!!U,"must specify image data"),k(typeof I=="number"&&I===(I|0)&&I>=0&&I<6,"invalid face");var B=N|0,Q=P|0,gt=A|0,wt=ze();return te(wt,E),wt.width=0,wt.height=0,jt(wt,U),wt.width=wt.width||(E.width>>gt)-B,wt.height=wt.height||(E.height>>gt)-Q,k(E.type===wt.type&&E.format===wt.format&&E.internalformat===wt.internalformat,"incompatible format for texture.subimage"),k(B>=0&&Q>=0&&B+wt.width<=E.width&&Q+wt.height<=E.height,"texture.subimage write out of bounds"),k(E.mipmask&1<<gt,"missing mipmap data"),k(wt.data||wt.element||wt.needsCopy,"missing image data"),g0(E),to(wt,bf+I,B,Q,gt),Fo(),wo(wt),V}function G(I){var U=I|0;if(U!==E.width){V.width=E.width=U,V.height=E.height=U,g0(E);for(var N=0;N<6;++N)for(var P=0;E.mipmask>>P;++P)b.texImage2D(bf+N,P,E.format,U>>P,U>>P,0,E.format,E.type,null);return Fo(),lt.profile&&(E.stats.size=Ef(E.internalformat,E.type,V.width,V.height,!1,!0)),V}}return V(O,at,Z,_e,_o,L),V.subimage=K,V.resize=G,V._reglType="textureCube",V._texture=E,lt.profile&&(V.stats=E.stats),V.destroy=function(){E.decRef()},V}function En(){for(var O=0;O<m0;++O)b.activeTexture(Xc+O),b.bindTexture(sa,null),Sn[O]=null;fr(s0).forEach(Ve),tt.cubeCount=0,tt.textureCount=0}lt.profile&&(tt.getTotalTextureSize=function(){var O=0;return Object.keys(s0).forEach(function(at){O+=s0[at].stats.size}),O});function ca(){for(var O=0;O<m0;++O){var at=Sn[O];at&&(at.bindCount=0,at.unit=-1,Sn[O]=null)}fr(s0).forEach(function(Z){Z.texture=b.createTexture(),b.bindTexture(Z.target,Z.texture);for(var _e=0;_e<32;++_e)if(Z.mipmask&1<<_e)if(Z.target===sa)b.texImage2D(sa,_e,Z.internalformat,Z.width>>_e,Z.height>>_e,0,Z.internalformat,Z.type,null);else for(var _o=0;_o<6;++_o)b.texImage2D(bf+_o,_e,Z.internalformat,Z.width>>_e,Z.height>>_e,0,Z.internalformat,Z.type,null);Dn(Z.texInfo,Z.target)})}function qs(){for(var O=0;O<m0;++O){var at=Sn[O];at&&(at.bindCount=0,at.unit=-1,Sn[O]=null),b.activeTexture(Xc+O),b.bindTexture(sa,null),b.bindTexture(z1,null)}}return{create2D:So,createCube:Lo,clear:En,getTexture:function(O){return null},restore:ca,refresh:qs}}var Ga=36161,zf=32854,pv=32855,vv=36194,mv=33189,gv=36168,xv=34041,yv=35907,bv=34836,wv=34842,_v=34843,Ur=[];Ur[zf]=2,Ur[pv]=2,Ur[vv]=2,Ur[mv]=2,Ur[gv]=1,Ur[xv]=4,Ur[yv]=4,Ur[bv]=16,Ur[wv]=8,Ur[_v]=6;function Mv(b,z,C){return Ur[b]*z*C}var Sw=function(b,z,C,nt,bt){var tt={rgba4:zf,rgb565:vv,"rgb5 a1":pv,depth:mv,stencil:gv,"depth stencil":xv};z.ext_srgb&&(tt.srgba=yv),z.ext_color_buffer_half_float&&(tt.rgba16f=wv,tt.rgb16f=_v),z.webgl_color_buffer_float&&(tt.rgba32f=bv);var lt=[];Object.keys(tt).forEach(function(Pt){var Kt=tt[Pt];lt[Kt]=Pt});var Ct=0,qt={};function Ut(Pt){this.id=Ct++,this.refCount=1,this.renderbuffer=Pt,this.format=zf,this.width=0,this.height=0,bt.profile&&(this.stats={size:0})}Ut.prototype.decRef=function(){--this.refCount<=0&&Dt(this)};function Dt(Pt){var Kt=Pt.renderbuffer;k(Kt,"must not double destroy renderbuffer"),b.bindRenderbuffer(Ga,null),b.deleteRenderbuffer(Kt),Pt.renderbuffer=null,Pt.refCount=0,delete qt[Pt.id],nt.renderbufferCount--}function Yt(Pt,Kt){var Y=new Ut(b.createRenderbuffer());qt[Y.id]=Y,nt.renderbufferCount++;function ft(ue,St){var me=0,Lt=0,Jt=zf;if(typeof ue=="object"&&ue){var zt=ue;if("shape"in zt){var te=zt.shape;k(Array.isArray(te)&&te.length>=2,"invalid renderbuffer shape"),me=te[0]|0,Lt=te[1]|0}else"radius"in zt&&(me=Lt=zt.radius|0),"width"in zt&&(me=zt.width|0),"height"in zt&&(Lt=zt.height|0);"format"in zt&&(k.parameter(zt.format,tt,"invalid renderbuffer format"),Jt=tt[zt.format])}else typeof ue=="number"?(me=ue|0,typeof St=="number"?Lt=St|0:Lt=me):ue?k.raise("invalid arguments to renderbuffer constructor"):me=Lt=1;if(k(me>0&&Lt>0&&me<=C.maxRenderbufferSize&&Lt<=C.maxRenderbufferSize,"invalid renderbuffer size"),!(me===Y.width&&Lt===Y.height&&Jt===Y.format))return ft.width=Y.width=me,ft.height=Y.height=Lt,Y.format=Jt,b.bindRenderbuffer(Ga,Y.renderbuffer),b.renderbufferStorage(Ga,Jt,me,Lt),k(b.getError()===0,"invalid render buffer format"),bt.profile&&(Y.stats.size=Mv(Y.format,Y.width,Y.height)),ft.format=lt[Y.format],ft}function Gt(ue,St){var me=ue|0,Lt=St|0||me;return me===Y.width&&Lt===Y.height||(k(me>0&&Lt>0&&me<=C.maxRenderbufferSize&&Lt<=C.maxRenderbufferSize,"invalid renderbuffer size"),ft.width=Y.width=me,ft.height=Y.height=Lt,b.bindRenderbuffer(Ga,Y.renderbuffer),b.renderbufferStorage(Ga,Y.format,me,Lt),k(b.getError()===0,"invalid render buffer format"),bt.profile&&(Y.stats.size=Mv(Y.format,Y.width,Y.height))),ft}return ft(Pt,Kt),ft.resize=Gt,ft._reglType="renderbuffer",ft._renderbuffer=Y,bt.profile&&(ft.stats=Y.stats),ft.destroy=function(){Y.decRef()},ft}bt.profile&&(nt.getTotalRenderbufferSize=function(){var Pt=0;return Object.keys(qt).forEach(function(Kt){Pt+=qt[Kt].stats.size}),Pt});function ne(){fr(qt).forEach(function(Pt){Pt.renderbuffer=b.createRenderbuffer(),b.bindRenderbuffer(Ga,Pt.renderbuffer),b.renderbufferStorage(Ga,Pt.format,Pt.width,Pt.height)}),b.bindRenderbuffer(Ga,null)}return{create:Yt,clear:function(){fr(qt).forEach(Dt)},restore:ne}},ba=36160,B1=36161,Rs=3553,Af=34069,kv=36064,Sv=36096,Ev=36128,zv=33306,Av=36053,Ew=36054,zw=36055,Aw=36057,Tw=36061,Lw=36193,Nw=5121,Rw=5126,Tv=6407,Lv=6408,Ow=6402,Cw=[Tv,Lv],j1=[];j1[Lv]=4,j1[Tv]=3;var Tf=[];Tf[Nw]=1,Tf[Rw]=4,Tf[Lw]=2;var Pw=32854,$w=32855,Iw=36194,qw=33189,Dw=36168,Nv=34041,Fw=35907,Gw=34836,Hw=34842,Uw=34843,Bw=[Pw,$w,Iw,Fw,Hw,Uw,Gw],Ni={};Ni[Av]="complete",Ni[Ew]="incomplete attachment",Ni[Aw]="incomplete dimensions",Ni[zw]="incomplete, missing attachment",Ni[Tw]="unsupported";function jw(b,z,C,nt,bt,tt){var lt={cur:null,next:null,dirty:!1,setFBO:null},Ct=["rgba"],qt=["rgba4","rgb565","rgb5 a1"];z.ext_srgb&&qt.push("srgba"),z.ext_color_buffer_half_float&&qt.push("rgba16f","rgb16f"),z.webgl_color_buffer_float&&qt.push("rgba32f");var Ut=["uint8"];z.oes_texture_half_float&&Ut.push("half float","float16"),z.oes_texture_float&&Ut.push("float","float32");function Dt(re,jt,kt){this.target=re,this.texture=jt,this.renderbuffer=kt;var to=0,ho=0;jt?(to=jt.width,ho=jt.height):kt&&(to=kt.width,ho=kt.height),this.width=to,this.height=ho}function Yt(re){re&&(re.texture&&re.texture._texture.decRef(),re.renderbuffer&&re.renderbuffer._renderbuffer.decRef())}function ne(re,jt,kt){if(re)if(re.texture){var to=re.texture._texture,ho=Math.max(1,to.width),ze=Math.max(1,to.height);k(ho===jt&&ze===kt,"inconsistent width/height for supplied texture"),to.refCount+=1}else{var wo=re.renderbuffer._renderbuffer;k(wo.width===jt&&wo.height===kt,"inconsistent width/height for renderbuffer"),wo.refCount+=1}}function Pt(re,jt){jt&&(jt.texture?b.framebufferTexture2D(ba,re,jt.target,jt.texture._texture.texture,0):b.framebufferRenderbuffer(ba,re,B1,jt.renderbuffer._renderbuffer.renderbuffer))}function Kt(re){var jt=Rs,kt=null,to=null,ho=re;typeof re=="object"&&(ho=re.data,"target"in re&&(jt=re.target|0)),k.type(ho,"function","invalid attachment data");var ze=ho._reglType;return ze==="texture2d"?(kt=ho,k(jt===Rs)):ze==="textureCube"?(kt=ho,k(jt>=Af&&jt<Af+6,"invalid cube map target")):ze==="renderbuffer"?(to=ho,jt=B1):k.raise("invalid regl object for attachment"),new Dt(jt,kt,to)}function Y(re,jt,kt,to,ho){if(kt){var ze=nt.create2D({width:re,height:jt,format:to,type:ho});return ze._texture.refCount=0,new Dt(Rs,ze,null)}else{var wo=bt.create({width:re,height:jt,format:to});return wo._renderbuffer.refCount=0,new Dt(B1,null,wo)}}function ft(re){return re&&(re.texture||re.renderbuffer)}function Gt(re,jt,kt){re&&(re.texture?re.texture.resize(jt,kt):re.renderbuffer&&re.renderbuffer.resize(jt,kt),re.width=jt,re.height=kt)}var ue=0,St={};function me(){this.id=ue++,St[this.id]=this,this.framebuffer=b.createFramebuffer(),this.width=0,this.height=0,this.colorAttachments=[],this.depthAttachment=null,this.stencilAttachment=null,this.depthStencilAttachment=null}function Lt(re){re.colorAttachments.forEach(Yt),Yt(re.depthAttachment),Yt(re.stencilAttachment),Yt(re.depthStencilAttachment)}function Jt(re){var jt=re.framebuffer;k(jt,"must not double destroy framebuffer"),b.deleteFramebuffer(jt),re.framebuffer=null,tt.framebufferCount--,delete St[re.id]}function zt(re){var jt;b.bindFramebuffer(ba,re.framebuffer);var kt=re.colorAttachments;for(jt=0;jt<kt.length;++jt)Pt(kv+jt,kt[jt]);for(jt=kt.length;jt<C.maxColorAttachments;++jt)b.framebufferTexture2D(ba,kv+jt,Rs,null,0);b.framebufferTexture2D(ba,zv,Rs,null,0),b.framebufferTexture2D(ba,Sv,Rs,null,0),b.framebufferTexture2D(ba,Ev,Rs,null,0),Pt(Sv,re.depthAttachment),Pt(Ev,re.stencilAttachment),Pt(zv,re.depthStencilAttachment);var to=b.checkFramebufferStatus(ba);!b.isContextLost()&&to!==Av&&k.raise("framebuffer configuration not supported, status = "+Ni[to]),b.bindFramebuffer(ba,lt.next?lt.next.framebuffer:null),lt.cur=lt.next,b.getError()}function te(re,jt){var kt=new me;tt.framebufferCount++;function to(ze,wo){var so;k(lt.next!==kt,"can not update framebuffer which is currently in use");var go=0,Po=0,Nn=!0,Xn=!0,Eo=null,qn=!0,nn="rgba",Rn="uint8",Dn=1,Fn=null,s0=null,m0=null,Sn=!1;if(typeof ze=="number")go=ze|0,Po=wo|0||go;else if(!ze)go=Po=1;else{k.type(ze,"object","invalid arguments for framebuffer");var uo=ze;if("shape"in uo){var g0=uo.shape;k(Array.isArray(g0)&&g0.length>=2,"invalid shape for framebuffer"),go=g0[0],Po=g0[1]}else"radius"in uo&&(go=Po=uo.radius),"width"in uo&&(go=uo.width),"height"in uo&&(Po=uo.height);("color"in uo||"colors"in uo)&&(Eo=uo.color||uo.colors,Array.isArray(Eo)&&k(Eo.length===1||z.webgl_draw_buffers,"multiple render targets not supported")),Eo||("colorCount"in uo&&(Dn=uo.colorCount|0,k(Dn>0,"invalid color buffer count")),"colorTexture"in uo&&(qn=!!uo.colorTexture,nn="rgba4"),"colorType"in uo&&(Rn=uo.colorType,qn?(k(z.oes_texture_float||!(Rn==="float"||Rn==="float32"),"you must enable OES_texture_float in order to use floating point framebuffer objects"),k(z.oes_texture_half_float||!(Rn==="half float"||Rn==="float16"),"you must enable OES_texture_half_float in order to use 16-bit floating point framebuffer objects")):Rn==="half float"||Rn==="float16"?(k(z.ext_color_buffer_half_float,"you must enable EXT_color_buffer_half_float to use 16-bit render buffers"),nn="rgba16f"):(Rn==="float"||Rn==="float32")&&(k(z.webgl_color_buffer_float,"you must enable WEBGL_color_buffer_float in order to use 32-bit floating point renderbuffers"),nn="rgba32f"),k.oneOf(Rn,Ut,"invalid color type")),"colorFormat"in uo&&(nn=uo.colorFormat,Ct.indexOf(nn)>=0?qn=!0:qt.indexOf(nn)>=0?qn=!1:qn?k.oneOf(uo.colorFormat,Ct,"invalid color format for texture"):k.oneOf(uo.colorFormat,qt,"invalid color format for renderbuffer"))),("depthTexture"in uo||"depthStencilTexture"in uo)&&(Sn=!!(uo.depthTexture||uo.depthStencilTexture),k(!Sn||z.webgl_depth_texture,"webgl_depth_texture extension not supported")),"depth"in uo&&(typeof uo.depth=="boolean"?Nn=uo.depth:(Fn=uo.depth,Xn=!1)),"stencil"in uo&&(typeof uo.stencil=="boolean"?Xn=uo.stencil:(s0=uo.stencil,Nn=!1)),"depthStencil"in uo&&(typeof uo.depthStencil=="boolean"?Nn=Xn=uo.depthStencil:(m0=uo.depthStencil,Nn=!1,Xn=!1))}var Fo=null,Ve=null,So=null,Lo=null;if(Array.isArray(Eo))Fo=Eo.map(Kt);else if(Eo)Fo=[Kt(Eo)];else for(Fo=new Array(Dn),so=0;so<Dn;++so)Fo[so]=Y(go,Po,qn,nn,Rn);k(z.webgl_draw_buffers||Fo.length<=1,"you must enable the WEBGL_draw_buffers extension in order to use multiple color buffers."),k(Fo.length<=C.maxColorAttachments,"too many color attachments, not supported"),go=go||Fo[0].width,Po=Po||Fo[0].height,Fn?Ve=Kt(Fn):Nn&&!Xn&&(Ve=Y(go,Po,Sn,"depth","uint32")),s0?So=Kt(s0):Xn&&!Nn&&(So=Y(go,Po,!1,"stencil","uint8")),m0?Lo=Kt(m0):!Fn&&!s0&&Xn&&Nn&&(Lo=Y(go,Po,Sn,"depth stencil","depth stencil")),k(!!Fn+!!s0+!!m0<=1,"invalid framebuffer configuration, can specify exactly one depth/stencil attachment");var En=null;for(so=0;so<Fo.length;++so)if(ne(Fo[so],go,Po),k(!Fo[so]||Fo[so].texture&&Cw.indexOf(Fo[so].texture._texture.format)>=0||Fo[so].renderbuffer&&Bw.indexOf(Fo[so].renderbuffer._renderbuffer.format)>=0,"framebuffer color attachment "+so+" is invalid"),Fo[so]&&Fo[so].texture){var ca=j1[Fo[so].texture._texture.format]*Tf[Fo[so].texture._texture.type];En===null?En=ca:k(En===ca,"all color attachments much have the same number of bits per pixel.")}return ne(Ve,go,Po),k(!Ve||Ve.texture&&Ve.texture._texture.format===Ow||Ve.renderbuffer&&Ve.renderbuffer._renderbuffer.format===qw,"invalid depth attachment for framebuffer object"),ne(So,go,Po),k(!So||So.renderbuffer&&So.renderbuffer._renderbuffer.format===Dw,"invalid stencil attachment for framebuffer object"),ne(Lo,go,Po),k(!Lo||Lo.texture&&Lo.texture._texture.format===Nv||Lo.renderbuffer&&Lo.renderbuffer._renderbuffer.format===Nv,"invalid depth-stencil attachment for framebuffer object"),Lt(kt),kt.width=go,kt.height=Po,kt.colorAttachments=Fo,kt.depthAttachment=Ve,kt.stencilAttachment=So,kt.depthStencilAttachment=Lo,to.color=Fo.map(ft),to.depth=ft(Ve),to.stencil=ft(So),to.depthStencil=ft(Lo),to.width=kt.width,to.height=kt.height,zt(kt),to}function ho(ze,wo){k(lt.next!==kt,"can not resize a framebuffer which is currently in use");var so=Math.max(ze|0,1),go=Math.max(wo|0||so,1);if(so===kt.width&&go===kt.height)return to;for(var Po=kt.colorAttachments,Nn=0;Nn<Po.length;++Nn)Gt(Po[Nn],so,go);return Gt(kt.depthAttachment,so,go),Gt(kt.stencilAttachment,so,go),Gt(kt.depthStencilAttachment,so,go),kt.width=to.width=so,kt.height=to.height=go,zt(kt),to}return to(re,jt),e(to,{resize:ho,_reglType:"framebuffer",_framebuffer:kt,destroy:function(){Jt(kt),Lt(kt)},use:function(ze){lt.setFBO({framebuffer:to},ze)}})}function We(re){var jt=Array(6);function kt(ho){var ze;k(jt.indexOf(lt.next)<0,"can not update framebuffer which is currently in use");var wo={color:null},so=0,go=null,Po="rgba",Nn="uint8",Xn=1;if(typeof ho=="number")so=ho|0;else if(!ho)so=1;else{k.type(ho,"object","invalid arguments for framebuffer");var Eo=ho;if("shape"in Eo){var qn=Eo.shape;k(Array.isArray(qn)&&qn.length>=2,"invalid shape for framebuffer"),k(qn[0]===qn[1],"cube framebuffer must be square"),so=qn[0]}else"radius"in Eo&&(so=Eo.radius|0),"width"in Eo?(so=Eo.width|0,"height"in Eo&&k(Eo.height===so,"must be square")):"height"in Eo&&(so=Eo.height|0);("color"in Eo||"colors"in Eo)&&(go=Eo.color||Eo.colors,Array.isArray(go)&&k(go.length===1||z.webgl_draw_buffers,"multiple render targets not supported")),go||("colorCount"in Eo&&(Xn=Eo.colorCount|0,k(Xn>0,"invalid color buffer count")),"colorType"in Eo&&(k.oneOf(Eo.colorType,Ut,"invalid color type"),Nn=Eo.colorType),"colorFormat"in Eo&&(Po=Eo.colorFormat,k.oneOf(Eo.colorFormat,Ct,"invalid color format for texture"))),"depth"in Eo&&(wo.depth=Eo.depth),"stencil"in Eo&&(wo.stencil=Eo.stencil),"depthStencil"in Eo&&(wo.depthStencil=Eo.depthStencil)}var nn;if(go)if(Array.isArray(go))for(nn=[],ze=0;ze<go.length;++ze)nn[ze]=go[ze];else nn=[go];else{nn=Array(Xn);var Rn={radius:so,format:Po,type:Nn};for(ze=0;ze<Xn;++ze)nn[ze]=nt.createCube(Rn)}for(wo.color=Array(nn.length),ze=0;ze<nn.length;++ze){var Dn=nn[ze];k(typeof Dn=="function"&&Dn._reglType==="textureCube","invalid cube map"),so=so||Dn.width,k(Dn.width===so&&Dn.height===so,"invalid cube map shape"),wo.color[ze]={target:Af,data:nn[ze]}}for(ze=0;ze<6;++ze){for(var Fn=0;Fn<nn.length;++Fn)wo.color[Fn].target=Af+ze;ze>0&&(wo.depth=jt[0].depth,wo.stencil=jt[0].stencil,wo.depthStencil=jt[0].depthStencil),jt[ze]?jt[ze](wo):jt[ze]=te(wo)}return e(kt,{width:so,height:so,color:nn})}function to(ho){var ze,wo=ho|0;if(k(wo>0&&wo<=C.maxCubeMapSize,"invalid radius for cube fbo"),wo===kt.width)return kt;var so=kt.color;for(ze=0;ze<so.length;++ze)so[ze].resize(wo);for(ze=0;ze<6;++ze)jt[ze].resize(wo);return kt.width=kt.height=wo,kt}return kt(re),e(kt,{faces:jt,resize:to,_reglType:"framebufferCube",destroy:function(){jt.forEach(function(ho){ho.destroy()})}})}function ao(){lt.cur=null,lt.next=null,lt.dirty=!0,fr(St).forEach(function(re){re.framebuffer=b.createFramebuffer(),zt(re)})}return e(lt,{getFramebuffer:function(re){if(typeof re=="function"&&re._reglType==="framebuffer"){var jt=re._framebuffer;if(jt instanceof me)return jt}return null},create:te,createCube:We,clear:function(){fr(St).forEach(Jt)},restore:ao})}var Ww=5126,Rv=34962;function W1(){this.state=0,this.x=0,this.y=0,this.z=0,this.w=0,this.buffer=null,this.size=0,this.normalized=!1,this.type=Ww,this.offset=0,this.stride=0,this.divisor=0}function Vw(b,z,C,nt,bt){for(var tt=C.maxAttributes,lt=new Array(tt),Ct=0;Ct<tt;++Ct)lt[Ct]=new W1;var qt=0,Ut={},Dt={Record:W1,scope:{},state:lt,currentVAO:null,targetVAO:null,restore:ne()?St:function(){},createVAO:me,getVAO:Kt,destroyBuffer:Yt,setVAO:ne()?Y:ft,clear:ne()?Gt:function(){}};function Yt(Lt){for(var Jt=0;Jt<lt.length;++Jt){var zt=lt[Jt];zt.buffer===Lt&&(b.disableVertexAttribArray(Jt),zt.buffer=null)}}function ne(){return z.oes_vertex_array_object}function Pt(){return z.angle_instanced_arrays}function Kt(Lt){return typeof Lt=="function"&&Lt._vao?Lt._vao:null}function Y(Lt){if(Lt!==Dt.currentVAO){var Jt=ne();Lt?Jt.bindVertexArrayOES(Lt.vao):Jt.bindVertexArrayOES(null),Dt.currentVAO=Lt}}function ft(Lt){if(Lt!==Dt.currentVAO){if(Lt)Lt.bindAttrs();else for(var Jt=Pt(),zt=0;zt<lt.length;++zt){var te=lt[zt];te.buffer?(b.enableVertexAttribArray(zt),b.vertexAttribPointer(zt,te.size,te.type,te.normalized,te.stride,te.offfset),Jt&&te.divisor&&Jt.vertexAttribDivisorANGLE(zt,te.divisor)):(b.disableVertexAttribArray(zt),b.vertexAttrib4f(zt,te.x,te.y,te.z,te.w))}Dt.currentVAO=Lt}}function Gt(){fr(Ut).forEach(function(Lt){Lt.destroy()})}function ue(){this.id=++qt,this.attributes=[];var Lt=ne();Lt?this.vao=Lt.createVertexArrayOES():this.vao=null,Ut[this.id]=this,this.buffers=[]}ue.prototype.bindAttrs=function(){for(var Lt=Pt(),Jt=this.attributes,zt=0;zt<Jt.length;++zt){var te=Jt[zt];te.buffer?(b.enableVertexAttribArray(zt),b.bindBuffer(Rv,te.buffer.buffer),b.vertexAttribPointer(zt,te.size,te.type,te.normalized,te.stride,te.offset),Lt&&te.divisor&&Lt.vertexAttribDivisorANGLE(zt,te.divisor)):(b.disableVertexAttribArray(zt),b.vertexAttrib4f(zt,te.x,te.y,te.z,te.w))}for(var We=Jt.length;We<tt;++We)b.disableVertexAttribArray(We)},ue.prototype.refresh=function(){var Lt=ne();Lt&&(Lt.bindVertexArrayOES(this.vao),this.bindAttrs(),Dt.currentVAO=this)},ue.prototype.destroy=function(){if(this.vao){var Lt=ne();this===Dt.currentVAO&&(Dt.currentVAO=null,Lt.bindVertexArrayOES(null)),Lt.deleteVertexArrayOES(this.vao),this.vao=null}Ut[this.id]&&(delete Ut[this.id],nt.vaoCount-=1)};function St(){var Lt=ne();Lt&&fr(Ut).forEach(function(Jt){Jt.refresh()})}function me(Lt){var Jt=new ue;nt.vaoCount+=1;function zt(te){k(Array.isArray(te),"arguments to vertex array constructor must be an array"),k(te.length<tt,"too many attributes"),k(te.length>0,"must specify at least one attribute");var We={},ao=Jt.attributes;ao.length=te.length;for(var re=0;re<te.length;++re){var jt=te[re],kt=ao[re]=new W1,to=jt.data||jt;if(Array.isArray(to)||t(to)||Hr(to)){var ho;Jt.buffers[re]&&(ho=Jt.buffers[re],t(to)&&ho._buffer.byteLength>=to.byteLength?ho.subdata(to):(ho.destroy(),Jt.buffers[re]=null)),Jt.buffers[re]||(ho=Jt.buffers[re]=bt.create(jt,Rv,!1,!0)),kt.buffer=bt.getBuffer(ho),kt.size=kt.buffer.dimension|0,kt.normalized=!1,kt.type=kt.buffer.dtype,kt.offset=0,kt.stride=0,kt.divisor=0,kt.state=1,We[re]=1}else bt.getBuffer(jt)?(kt.buffer=bt.getBuffer(jt),kt.size=kt.buffer.dimension|0,kt.normalized=!1,kt.type=kt.buffer.dtype,kt.offset=0,kt.stride=0,kt.divisor=0,kt.state=1):bt.getBuffer(jt.buffer)?(kt.buffer=bt.getBuffer(jt.buffer),kt.size=(+jt.size||kt.buffer.dimension)|0,kt.normalized=!!jt.normalized||!1,"type"in jt?(k.parameter(jt.type,As,"invalid buffer type"),kt.type=As[jt.type]):kt.type=kt.buffer.dtype,kt.offset=(jt.offset||0)|0,kt.stride=(jt.stride||0)|0,kt.divisor=(jt.divisor||0)|0,kt.state=1,k(kt.size>=1&&kt.size<=4,"size must be between 1 and 4"),k(kt.offset>=0,"invalid offset"),k(kt.stride>=0&&kt.stride<=255,"stride must be between 0 and 255"),k(kt.divisor>=0,"divisor must be positive"),k(!kt.divisor||!!z.angle_instanced_arrays,"ANGLE_instanced_arrays must be enabled to use divisor")):"x"in jt?(k(re>0,"first attribute must not be a constant"),kt.x=+jt.x||0,kt.y=+jt.y||0,kt.z=+jt.z||0,kt.w=+jt.w||0,kt.state=2):k(!1,"invalid attribute spec for location "+re)}for(var ze=0;ze<Jt.buffers.length;++ze)!We[ze]&&Jt.buffers[ze]&&(Jt.buffers[ze].destroy(),Jt.buffers[ze]=null);return Jt.refresh(),zt}return zt.destroy=function(){for(var te=0;te<Jt.buffers.length;++te)Jt.buffers[te]&&Jt.buffers[te].destroy();Jt.buffers.length=0,Jt.destroy()},zt._vao=Jt,zt._reglType="vao",zt(Lt)}return Dt}var Ov=35632,Xw=35633,Yw=35718,Kw=35721;function Qw(b,z,C,nt){var bt={},tt={};function lt(Y,ft,Gt,ue){this.name=Y,this.id=ft,this.location=Gt,this.info=ue}function Ct(Y,ft){for(var Gt=0;Gt<Y.length;++Gt)if(Y[Gt].id===ft.id){Y[Gt].location=ft.location;return}Y.push(ft)}function qt(Y,ft,Gt){var ue=Y===Ov?bt:tt,St=ue[ft];if(!St){var me=z.str(ft);St=b.createShader(Y),b.shaderSource(St,me),b.compileShader(St),k.shaderError(b,St,me,Y,Gt),ue[ft]=St}return St}var Ut={},Dt=[],Yt=0;function ne(Y,ft){this.id=Yt++,this.fragId=Y,this.vertId=ft,this.program=null,this.uniforms=[],this.attributes=[],this.refCount=1,nt.profile&&(this.stats={uniformsCount:0,attributesCount:0})}function Pt(Y,ft,Gt){var ue,St,me=qt(Ov,Y.fragId),Lt=qt(Xw,Y.vertId),Jt=Y.program=b.createProgram();if(b.attachShader(Jt,me),b.attachShader(Jt,Lt),Gt)for(ue=0;ue<Gt.length;++ue){var zt=Gt[ue];b.bindAttribLocation(Jt,zt[0],zt[1])}b.linkProgram(Jt),k.linkError(b,Jt,z.str(Y.fragId),z.str(Y.vertId),ft);var te=b.getProgramParameter(Jt,Yw);nt.profile&&(Y.stats.uniformsCount=te);var We=Y.uniforms;for(ue=0;ue<te;++ue)if(St=b.getActiveUniform(Jt,ue),St)if(St.size>1)for(var ao=0;ao<St.size;++ao){var re=St.name.replace("[0]","["+ao+"]");Ct(We,new lt(re,z.id(re),b.getUniformLocation(Jt,re),St))}else Ct(We,new lt(St.name,z.id(St.name),b.getUniformLocation(Jt,St.name),St));var jt=b.getProgramParameter(Jt,Kw);nt.profile&&(Y.stats.attributesCount=jt);var kt=Y.attributes;for(ue=0;ue<jt;++ue)St=b.getActiveAttrib(Jt,ue),St&&Ct(kt,new lt(St.name,z.id(St.name),b.getAttribLocation(Jt,St.name),St))}nt.profile&&(C.getMaxUniformsCount=function(){var Y=0;return Dt.forEach(function(ft){ft.stats.uniformsCount>Y&&(Y=ft.stats.uniformsCount)}),Y},C.getMaxAttributesCount=function(){var Y=0;return Dt.forEach(function(ft){ft.stats.attributesCount>Y&&(Y=ft.stats.attributesCount)}),Y});function Kt(){bt={},tt={};for(var Y=0;Y<Dt.length;++Y)Pt(Dt[Y],null,Dt[Y].attributes.map(function(ft){return[ft.location,ft.name]}))}return{clear:function(){var Y=b.deleteShader.bind(b);fr(bt).forEach(Y),bt={},fr(tt).forEach(Y),tt={},Dt.forEach(function(ft){b.deleteProgram(ft.program)}),Dt.length=0,Ut={},C.shaderCount=0},program:function(Y,ft,Gt,ue){k.command(Y>=0,"missing vertex shader",Gt),k.command(ft>=0,"missing fragment shader",Gt);var St=Ut[ft];St||(St=Ut[ft]={});var me=St[Y];if(me&&(me.refCount++,!ue))return me;var Lt=new ne(ft,Y);return C.shaderCount++,Pt(Lt,Gt,ue),me||(St[Y]=Lt),Dt.push(Lt),e(Lt,{destroy:function(){if(Lt.refCount--,Lt.refCount<=0){b.deleteProgram(Lt.program);var Jt=Dt.indexOf(Lt);Dt.splice(Jt,1),C.shaderCount--}St[Lt.vertId].refCount<=0&&(b.deleteShader(tt[Lt.vertId]),delete tt[Lt.vertId],delete Ut[Lt.fragId][Lt.vertId]),Object.keys(Ut[Lt.fragId]).length||(b.deleteShader(bt[Lt.fragId]),delete bt[Lt.fragId],delete Ut[Lt.fragId])}})},restore:Kt,shader:qt,frag:-1,vert:-1}}var Zw=6408,Yc=5121,Jw=3333,Lf=5126;function t4(b,z,C,nt,bt,tt,lt){function Ct(Dt){var Yt;z.next===null?(k(bt.preserveDrawingBuffer,'you must create a webgl context with "preserveDrawingBuffer":true in order to read pixels from the drawing buffer'),Yt=Yc):(k(z.next.colorAttachments[0].texture!==null,"You cannot read from a renderbuffer"),Yt=z.next.colorAttachments[0].texture._texture.type,tt.oes_texture_float?(k(Yt===Yc||Yt===Lf,"Reading from a framebuffer is only allowed for the types 'uint8' and 'float'"),Yt===Lf&&k(lt.readFloat,"Reading 'float' values is not permitted in your browser. For a fallback, please see: https://www.npmjs.com/package/glsl-read-float")):k(Yt===Yc,"Reading from a framebuffer is only allowed for the type 'uint8'"));var ne=0,Pt=0,Kt=nt.framebufferWidth,Y=nt.framebufferHeight,ft=null;t(Dt)?ft=Dt:Dt&&(k.type(Dt,"object","invalid arguments to regl.read()"),ne=Dt.x|0,Pt=Dt.y|0,k(ne>=0&&ne<nt.framebufferWidth,"invalid x offset for regl.read"),k(Pt>=0&&Pt<nt.framebufferHeight,"invalid y offset for regl.read"),Kt=(Dt.width||nt.framebufferWidth-ne)|0,Y=(Dt.height||nt.framebufferHeight-Pt)|0,ft=Dt.data||null),ft&&(Yt===Yc?k(ft instanceof Uint8Array,"buffer must be 'Uint8Array' when reading from a framebuffer of type 'uint8'"):Yt===Lf&&k(ft instanceof Float32Array,"buffer must be 'Float32Array' when reading from a framebuffer of type 'float'")),k(Kt>0&&Kt+ne<=nt.framebufferWidth,"invalid width for read pixels"),k(Y>0&&Y+Pt<=nt.framebufferHeight,"invalid height for read pixels"),C();var Gt=Kt*Y*4;return ft||(Yt===Yc?ft=new Uint8Array(Gt):Yt===Lf&&(ft=ft||new Float32Array(Gt))),k.isTypedArray(ft,"data buffer for regl.read() must be a typedarray"),k(ft.byteLength>=Gt,"data buffer for regl.read() too small"),b.pixelStorei(Jw,4),b.readPixels(ne,Pt,Kt,Y,Zw,Yt,ft),ft}function qt(Dt){var Yt;return z.setFBO({framebuffer:Dt.framebuffer},function(){Yt=Ct(Dt)}),Yt}function Ut(Dt){return!Dt||!("framebuffer"in Dt)?Ct(Dt):qt(Dt)}return Ut}function Ri(b){return Array.prototype.slice.call(b)}function Oi(b){return Ri(b).join("")}function e4(){var b=0,z=[],C=[];function nt(Yt){for(var ne=0;ne<C.length;++ne)if(C[ne]===Yt)return z[ne];var Pt="g"+b++;return z.push(Pt),C.push(Yt),Pt}function bt(){var Yt=[];function ne(){Yt.push.apply(Yt,Ri(arguments))}var Pt=[];function Kt(){var Y="v"+b++;return Pt.push(Y),arguments.length>0&&(Yt.push(Y,"="),Yt.push.apply(Yt,Ri(arguments)),Yt.push(";")),Y}return e(ne,{def:Kt,toString:function(){return Oi([Pt.length>0?"var "+Pt.join(",")+";":"",Oi(Yt)])}})}function tt(){var Yt=bt(),ne=bt(),Pt=Yt.toString,Kt=ne.toString;function Y(ft,Gt){ne(ft,Gt,"=",Yt.def(ft,Gt),";")}return e(function(){Yt.apply(Yt,Ri(arguments))},{def:Yt.def,entry:Yt,exit:ne,save:Y,set:function(ft,Gt,ue){Y(ft,Gt),Yt(ft,Gt,"=",ue,";")},toString:function(){return Pt()+Kt()}})}function lt(){var Yt=Oi(arguments),ne=tt(),Pt=tt(),Kt=ne.toString,Y=Pt.toString;return e(ne,{then:function(){return ne.apply(ne,Ri(arguments)),this},else:function(){return Pt.apply(Pt,Ri(arguments)),this},toString:function(){var ft=Y();return ft&&(ft="else{"+ft+"}"),Oi(["if(",Yt,"){",Kt(),"}",ft])}})}var Ct=bt(),qt={};function Ut(Yt,ne){var Pt=[];function Kt(){var St="a"+Pt.length;return Pt.push(St),St}ne=ne||0;for(var Y=0;Y<ne;++Y)Kt();var ft=tt(),Gt=ft.toString,ue=qt[Yt]=e(ft,{arg:Kt,toString:function(){return Oi(["function(",Pt.join(),"){",Gt(),"}"])}});return ue}function Dt(){var Yt=['"use strict";',Ct,"return {"];Object.keys(qt).forEach(function(Kt){Yt.push('"',Kt,'":',qt[Kt].toString(),",")}),Yt.push("}");var ne=Oi(Yt).replace(/;/g,`;
`).replace(/}/g,`}
`).replace(/{/g,`{
`),Pt=Function.apply(null,z.concat(ne));return Pt.apply(null,C)}return{global:Ct,link:nt,block:bt,proc:Ut,scope:tt,cond:lt,compile:Dt}}var Ci="xyzw".split(""),Cv=5121,Pi=1,V1=2,X1=0,Y1=1,K1=2,Q1=3,Nf=4,Pv=5,$v=6,Iv="dither",qv="blend.enable",Dv="blend.color",Z1="blend.equation",J1="blend.func",Fv="depth.enable",Gv="depth.func",Hv="depth.range",Uv="depth.mask",tu="colorMask",Bv="cull.enable",jv="cull.face",eu="frontFace",ou="lineWidth",Wv="polygonOffset.enable",nu="polygonOffset.offset",Vv="sample.alpha",Xv="sample.enable",ru="sample.coverage",Yv="stencil.enable",Kv="stencil.mask",au="stencil.func",su="stencil.opFront",Kc="stencil.opBack",Qv="scissor.enable",Rf="scissor.box",wa="viewport",Qc="profile",Os="framebuffer",Zc="vert",Jc="frag",Cs="elements",Ps="primitive",$s="count",Of="offset",Cf="instances",tl="vao",iu="Width",cu="Height",$i=Os+iu,Ii=Os+cu,o4=wa+iu,n4=wa+cu,Zv="drawingBuffer",Jv=Zv+iu,tm=Zv+cu,r4=[J1,Z1,au,su,Kc,ru,wa,Rf,nu],qi=34962,a4=34963,s4=35632,i4=35633,em=3553,c4=34067,l4=2884,f4=3042,h4=3024,u4=2960,d4=2929,p4=3089,v4=32823,m4=32926,g4=32928,lu=5126,Pf=35664,$f=35665,If=35666,fu=5124,qf=35667,Df=35668,Ff=35669,hu=35670,Gf=35671,Hf=35672,Uf=35673,el=35674,ol=35675,nl=35676,rl=35678,al=35680,om=4,sl=1028,Is=1029,nm=2304,uu=2305,x4=32775,y4=32776,b4=519,Ha=7680,rm=0,am=1,sm=32774,w4=513,im=36160,_4=36064,ia={0:0,1:1,zero:0,one:1,"src color":768,"one minus src color":769,"src alpha":770,"one minus src alpha":771,"dst color":774,"one minus dst color":775,"dst alpha":772,"one minus dst alpha":773,"constant color":32769,"one minus constant color":32770,"constant alpha":32771,"one minus constant alpha":32772,"src alpha saturate":776},cm=["constant color, constant alpha","one minus constant color, constant alpha","constant color, one minus constant alpha","one minus constant color, one minus constant alpha","constant alpha, constant color","constant alpha, one minus constant color","one minus constant alpha, constant color","one minus constant alpha, one minus constant color"],Di={never:512,less:513,"<":513,equal:514,"=":514,"==":514,"===":514,lequal:515,"<=":515,greater:516,">":516,notequal:517,"!=":517,"!==":517,gequal:518,">=":518,always:519},Ua={0:0,zero:0,keep:7680,replace:7681,increment:7682,decrement:7683,"increment wrap":34055,"decrement wrap":34056,invert:5386},lm={frag:s4,vert:i4},du={cw:nm,ccw:uu};function Bf(b){return Array.isArray(b)||t(b)||Hr(b)}function fm(b){return b.sort(function(z,C){return z===wa?-1:C===wa?1:z<C?-1:1})}function I0(b,z,C,nt){this.thisDep=b,this.contextDep=z,this.propDep=C,this.append=nt}function Ba(b){return b&&!(b.thisDep||b.contextDep||b.propDep)}function Ln(b){return new I0(!1,!1,!1,b)}function J0(b,z){var C=b.type;if(C===X1){var nt=b.data.length;return new I0(!0,nt>=1,nt>=2,z)}else if(C===Nf){var bt=b.data;return new I0(bt.thisDep,bt.contextDep,bt.propDep,z)}else{if(C===Pv)return new I0(!1,!1,!1,z);if(C===$v){for(var tt=!1,lt=!1,Ct=!1,qt=0;qt<b.data.length;++qt){var Ut=b.data[qt];if(Ut.type===Y1)Ct=!0;else if(Ut.type===K1)lt=!0;else if(Ut.type===Q1)tt=!0;else if(Ut.type===X1){tt=!0;var Dt=Ut.data;Dt>=1&&(lt=!0),Dt>=2&&(Ct=!0)}else Ut.type===Nf&&(tt=tt||Ut.data.thisDep,lt=lt||Ut.data.contextDep,Ct=Ct||Ut.data.propDep)}return new I0(tt,lt,Ct,z)}else return new I0(C===Q1,C===K1,C===Y1,z)}}var hm=new I0(!1,!1,!1,function(){});function M4(b,z,C,nt,bt,tt,lt,Ct,qt,Ut,Dt,Yt,ne,Pt,Kt){var Y=Ut.Record,ft={add:32774,subtract:32778,"reverse subtract":32779};C.ext_blend_minmax&&(ft.min=x4,ft.max=y4);var Gt=C.angle_instanced_arrays,ue=C.webgl_draw_buffers,St={dirty:!0,profile:Kt.profile},me={},Lt=[],Jt={},zt={};function te(L){return L.replace(".","_")}function We(L,E,$){var V=te(L);Lt.push(L),me[V]=St[V]=!!$,Jt[V]=E}function ao(L,E,$){var V=te(L);Lt.push(L),Array.isArray($)?(St[V]=$.slice(),me[V]=$.slice()):St[V]=me[V]=$,zt[V]=E}We(Iv,h4),We(qv,f4),ao(Dv,"blendColor",[0,0,0,0]),ao(Z1,"blendEquationSeparate",[sm,sm]),ao(J1,"blendFuncSeparate",[am,rm,am,rm]),We(Fv,d4,!0),ao(Gv,"depthFunc",w4),ao(Hv,"depthRange",[0,1]),ao(Uv,"depthMask",!0),ao(tu,tu,[!0,!0,!0,!0]),We(Bv,l4),ao(jv,"cullFace",Is),ao(eu,eu,uu),ao(ou,ou,1),We(Wv,v4),ao(nu,"polygonOffset",[0,0]),We(Vv,m4),We(Xv,g4),ao(ru,"sampleCoverage",[1,!1]),We(Yv,u4),ao(Kv,"stencilMask",-1),ao(au,"stencilFunc",[b4,0,-1]),ao(su,"stencilOpSeparate",[sl,Ha,Ha,Ha]),ao(Kc,"stencilOpSeparate",[Is,Ha,Ha,Ha]),We(Qv,p4),ao(Rf,"scissor",[0,0,b.drawingBufferWidth,b.drawingBufferHeight]),ao(wa,wa,[0,0,b.drawingBufferWidth,b.drawingBufferHeight]);var re={gl:b,context:ne,strings:z,next:me,current:St,draw:Yt,elements:tt,buffer:bt,shader:Dt,attributes:Ut.state,vao:Ut,uniforms:qt,framebuffer:Ct,extensions:C,timer:Pt,isBufferArgs:Bf},jt={primTypes:ki,compareFuncs:Di,blendFuncs:ia,blendEquations:ft,stencilOps:Ua,glTypes:As,orientationType:du};k.optional(function(){re.isArrayLike=kn}),ue&&(jt.backBuffer=[Is],jt.drawBuffer=Ee(nt.maxDrawbuffers,function(L){return L===0?[0]:Ee(L,function(E){return _4+E})}));var kt=0;function to(){var L=e4(),E=L.link,$=L.global;L.id=kt++,L.batchId="0";var V=E(re),K=L.shared={props:"a0"};Object.keys(re).forEach(function(P){K[P]=$.def(V,".",P)}),k.optional(function(){L.CHECK=E(k),L.commandStr=k.guessCommand(),L.command=E(L.commandStr),L.assert=function(P,A,B){P("if(!(",A,"))",this.CHECK,".commandRaise(",E(B),",",this.command,");")},jt.invalidBlendCombinations=cm});var G=L.next={},I=L.current={};Object.keys(zt).forEach(function(P){Array.isArray(St[P])&&(G[P]=$.def(K.next,".",P),I[P]=$.def(K.current,".",P))});var U=L.constants={};Object.keys(jt).forEach(function(P){U[P]=$.def(JSON.stringify(jt[P]))}),L.invoke=function(P,A){switch(A.type){case X1:var B=["this",K.context,K.props,L.batchId];return P.def(E(A.data),".call(",B.slice(0,Math.max(A.data.length+1,4)),")");case Y1:return P.def(K.props,A.data);case K1:return P.def(K.context,A.data);case Q1:return P.def("this",A.data);case Nf:return A.data.append(L,P),A.data.ref;case Pv:return A.data.toString();case $v:return A.data.map(function(Q){return L.invoke(P,Q)})}},L.attribCache={};var N={};return L.scopeAttrib=function(P){var A=z.id(P);if(A in N)return N[A];var B=Ut.scope[A];B||(B=Ut.scope[A]=new Y);var Q=N[A]=E(B);return Q},L}function ho(L){var E=L.static,$=L.dynamic,V;if(Qc in E){var K=!!E[Qc];V=Ln(function(I,U){return K}),V.enable=K}else if(Qc in $){var G=$[Qc];V=J0(G,function(I,U){return I.invoke(U,G)})}return V}function ze(L,E){var $=L.static,V=L.dynamic;if(Os in $){var K=$[Os];return K?(K=Ct.getFramebuffer(K),k.command(K,"invalid framebuffer object"),Ln(function(I,U){var N=I.link(K),P=I.shared;U.set(P.framebuffer,".next",N);var A=P.context;return U.set(A,"."+$i,N+".width"),U.set(A,"."+Ii,N+".height"),N})):Ln(function(I,U){var N=I.shared;U.set(N.framebuffer,".next","null");var P=N.context;return U.set(P,"."+$i,P+"."+Jv),U.set(P,"."+Ii,P+"."+tm),"null"})}else if(Os in V){var G=V[Os];return J0(G,function(I,U){var N=I.invoke(U,G),P=I.shared,A=P.framebuffer,B=U.def(A,".getFramebuffer(",N,")");k.optional(function(){I.assert(U,"!"+N+"||"+B,"invalid framebuffer object")}),U.set(A,".next",B);var Q=P.context;return U.set(Q,"."+$i,B+"?"+B+".width:"+Q+"."+Jv),U.set(Q,"."+Ii,B+"?"+B+".height:"+Q+"."+tm),B})}else return null}function wo(L,E,$){var V=L.static,K=L.dynamic;function G(N){if(N in V){var P=V[N];k.commandType(P,"object","invalid "+N,$.commandStr);var A=!0,B=P.x|0,Q=P.y|0,gt,wt;return"width"in P?(gt=P.width|0,k.command(gt>=0,"invalid "+N,$.commandStr)):A=!1,"height"in P?(wt=P.height|0,k.command(wt>=0,"invalid "+N,$.commandStr)):A=!1,new I0(!A&&E&&E.thisDep,!A&&E&&E.contextDep,!A&&E&&E.propDep,function(Ge,po){var Ae=Ge.shared.context,Ye=gt;"width"in P||(Ye=po.def(Ae,".",$i,"-",B));var io=wt;return"height"in P||(io=po.def(Ae,".",Ii,"-",Q)),[B,Q,Ye,io]})}else if(N in K){var dt=K[N],Ft=J0(dt,function(Ge,po){var Ae=Ge.invoke(po,dt);k.optional(function(){Ge.assert(po,Ae+"&&typeof "+Ae+'==="object"',"invalid "+N)});var Ye=Ge.shared.context,io=po.def(Ae,".x|0"),$o=po.def(Ae,".y|0"),xn=po.def('"width" in ',Ae,"?",Ae,".width|0:","(",Ye,".",$i,"-",io,")"),q0=po.def('"height" in ',Ae,"?",Ae,".height|0:","(",Ye,".",Ii,"-",$o,")");return k.optional(function(){Ge.assert(po,xn+">=0&&"+q0+">=0","invalid "+N)}),[io,$o,xn,q0]});return E&&(Ft.thisDep=Ft.thisDep||E.thisDep,Ft.contextDep=Ft.contextDep||E.contextDep,Ft.propDep=Ft.propDep||E.propDep),Ft}else return E?new I0(E.thisDep,E.contextDep,E.propDep,function(Ge,po){var Ae=Ge.shared.context;return[0,0,po.def(Ae,".",$i),po.def(Ae,".",Ii)]}):null}var I=G(wa);if(I){var U=I;I=new I0(I.thisDep,I.contextDep,I.propDep,function(N,P){var A=U.append(N,P),B=N.shared.context;return P.set(B,"."+o4,A[2]),P.set(B,"."+n4,A[3]),A})}return{viewport:I,scissor_box:G(Rf)}}function so(L,E){var $=L.static,V=typeof $[Jc]=="string"&&typeof $[Zc]=="string";if(V){if(Object.keys(E.dynamic).length>0)return null;var K=E.static,G=Object.keys(K);if(G.length>0&&typeof K[G[0]]=="number"){for(var I=[],U=0;U<G.length;++U)k(typeof K[G[U]]=="number","must specify all vertex attribute locations when using vaos"),I.push([K[G[U]]|0,G[U]]);return I}}return null}function go(L,E,$){var V=L.static,K=L.dynamic;function G(A){if(A in V){var B=z.id(V[A]);k.optional(function(){Dt.shader(lm[A],B,k.guessCommand())});var Q=Ln(function(){return B});return Q.id=B,Q}else if(A in K){var gt=K[A];return J0(gt,function(wt,dt){var Ft=wt.invoke(dt,gt),Ge=dt.def(wt.shared.strings,".id(",Ft,")");return k.optional(function(){dt(wt.shared.shader,".shader(",lm[A],",",Ge,",",wt.command,");")}),Ge})}return null}var I=G(Jc),U=G(Zc),N=null,P;return Ba(I)&&Ba(U)?(N=Dt.program(U.id,I.id,null,$),P=Ln(function(A,B){return A.link(N)})):P=new I0(I&&I.thisDep||U&&U.thisDep,I&&I.contextDep||U&&U.contextDep,I&&I.propDep||U&&U.propDep,function(A,B){var Q=A.shared.shader,gt;I?gt=I.append(A,B):gt=B.def(Q,".",Jc);var wt;U?wt=U.append(A,B):wt=B.def(Q,".",Zc);var dt=Q+".program("+wt+","+gt;return k.optional(function(){dt+=","+A.command}),B.def(dt+")")}),{frag:I,vert:U,progVar:P,program:N}}function Po(L,E){var $=L.static,V=L.dynamic;function K(){if(Cs in $){var A=$[Cs];Bf(A)?A=tt.getElements(tt.create(A,!0)):A&&(A=tt.getElements(A),k.command(A,"invalid elements",E.commandStr));var B=Ln(function(gt,wt){if(A){var dt=gt.link(A);return gt.ELEMENTS=dt,dt}return gt.ELEMENTS=null,null});return B.value=A,B}else if(Cs in V){var Q=V[Cs];return J0(Q,function(gt,wt){var dt=gt.shared,Ft=dt.isBufferArgs,Ge=dt.elements,po=gt.invoke(wt,Q),Ae=wt.def("null"),Ye=wt.def(Ft,"(",po,")"),io=gt.cond(Ye).then(Ae,"=",Ge,".createStream(",po,");").else(Ae,"=",Ge,".getElements(",po,");");return k.optional(function(){gt.assert(io.else,"!"+po+"||"+Ae,"invalid elements")}),wt.entry(io),wt.exit(gt.cond(Ye).then(Ge,".destroyStream(",Ae,");")),gt.ELEMENTS=Ae,Ae})}return null}var G=K();function I(){if(Ps in $){var A=$[Ps];return k.commandParameter(A,ki,"invalid primitve",E.commandStr),Ln(function(Q,gt){return ki[A]})}else if(Ps in V){var B=V[Ps];return J0(B,function(Q,gt){var wt=Q.constants.primTypes,dt=Q.invoke(gt,B);return k.optional(function(){Q.assert(gt,dt+" in "+wt,"invalid primitive, must be one of "+Object.keys(ki))}),gt.def(wt,"[",dt,"]")})}else if(G)return Ba(G)?G.value?Ln(function(Q,gt){return gt.def(Q.ELEMENTS,".primType")}):Ln(function(){return om}):new I0(G.thisDep,G.contextDep,G.propDep,function(Q,gt){var wt=Q.ELEMENTS;return gt.def(wt,"?",wt,".primType:",om)});return null}function U(A,B){if(A in $){var Q=$[A]|0;return k.command(!B||Q>=0,"invalid "+A,E.commandStr),Ln(function(wt,dt){return B&&(wt.OFFSET=Q),Q})}else if(A in V){var gt=V[A];return J0(gt,function(wt,dt){var Ft=wt.invoke(dt,gt);return B&&(wt.OFFSET=Ft,k.optional(function(){wt.assert(dt,Ft+">=0","invalid "+A)})),Ft})}else if(B&&G)return Ln(function(wt,dt){return wt.OFFSET="0",0});return null}var N=U(Of,!0);function P(){if($s in $){var A=$[$s]|0;return k.command(typeof A=="number"&&A>=0,"invalid vertex count",E.commandStr),Ln(function(){return A})}else if($s in V){var B=V[$s];return J0(B,function(wt,dt){var Ft=wt.invoke(dt,B);return k.optional(function(){wt.assert(dt,"typeof "+Ft+'==="number"&&'+Ft+">=0&&"+Ft+"===("+Ft+"|0)","invalid vertex count")}),Ft})}else if(G)if(Ba(G)){if(G)return N?new I0(N.thisDep,N.contextDep,N.propDep,function(wt,dt){var Ft=dt.def(wt.ELEMENTS,".vertCount-",wt.OFFSET);return k.optional(function(){wt.assert(dt,Ft+">=0","invalid vertex offset/element buffer too small")}),Ft}):Ln(function(wt,dt){return dt.def(wt.ELEMENTS,".vertCount")});var Q=Ln(function(){return-1});return k.optional(function(){Q.MISSING=!0}),Q}else{var gt=new I0(G.thisDep||N.thisDep,G.contextDep||N.contextDep,G.propDep||N.propDep,function(wt,dt){var Ft=wt.ELEMENTS;return wt.OFFSET?dt.def(Ft,"?",Ft,".vertCount-",wt.OFFSET,":-1"):dt.def(Ft,"?",Ft,".vertCount:-1")});return k.optional(function(){gt.DYNAMIC=!0}),gt}return null}return{elements:G,primitive:I(),count:P(),instances:U(Cf,!1),offset:N}}function Nn(L,E){var $=L.static,V=L.dynamic,K={};return Lt.forEach(function(G){var I=te(G);function U(N,P){if(G in $){var A=N($[G]);K[I]=Ln(function(){return A})}else if(G in V){var B=V[G];K[I]=J0(B,function(Q,gt){return P(Q,gt,Q.invoke(gt,B))})}}switch(G){case Bv:case qv:case Iv:case Yv:case Fv:case Qv:case Wv:case Vv:case Xv:case Uv:return U(function(N){return k.commandType(N,"boolean",G,E.commandStr),N},function(N,P,A){return k.optional(function(){N.assert(P,"typeof "+A+'==="boolean"',"invalid flag "+G,N.commandStr)}),A});case Gv:return U(function(N){return k.commandParameter(N,Di,"invalid "+G,E.commandStr),Di[N]},function(N,P,A){var B=N.constants.compareFuncs;return k.optional(function(){N.assert(P,A+" in "+B,"invalid "+G+", must be one of "+Object.keys(Di))}),P.def(B,"[",A,"]")});case Hv:return U(function(N){return k.command(kn(N)&&N.length===2&&typeof N[0]=="number"&&typeof N[1]=="number"&&N[0]<=N[1],"depth range is 2d array",E.commandStr),N},function(N,P,A){k.optional(function(){N.assert(P,N.shared.isArrayLike+"("+A+")&&"+A+".length===2&&typeof "+A+'[0]==="number"&&typeof '+A+'[1]==="number"&&'+A+"[0]<="+A+"[1]","depth range must be a 2d array")});var B=P.def("+",A,"[0]"),Q=P.def("+",A,"[1]");return[B,Q]});case J1:return U(function(N){k.commandType(N,"object","blend.func",E.commandStr);var P="srcRGB"in N?N.srcRGB:N.src,A="srcAlpha"in N?N.srcAlpha:N.src,B="dstRGB"in N?N.dstRGB:N.dst,Q="dstAlpha"in N?N.dstAlpha:N.dst;return k.commandParameter(P,ia,I+".srcRGB",E.commandStr),k.commandParameter(A,ia,I+".srcAlpha",E.commandStr),k.commandParameter(B,ia,I+".dstRGB",E.commandStr),k.commandParameter(Q,ia,I+".dstAlpha",E.commandStr),k.command(cm.indexOf(P+", "+B)===-1,"unallowed blending combination (srcRGB, dstRGB) = ("+P+", "+B+")",E.commandStr),[ia[P],ia[B],ia[A],ia[Q]]},function(N,P,A){var B=N.constants.blendFuncs;k.optional(function(){N.assert(P,A+"&&typeof "+A+'==="object"',"invalid blend func, must be an object")});function Q(Ae,Ye){var io=P.def('"',Ae,Ye,'" in ',A,"?",A,".",Ae,Ye,":",A,".",Ae);return k.optional(function(){N.assert(P,io+" in "+B,"invalid "+G+"."+Ae+Ye+", must be one of "+Object.keys(ia))}),io}var gt=Q("src","RGB"),wt=Q("dst","RGB");k.optional(function(){var Ae=N.constants.invalidBlendCombinations;N.assert(P,Ae+".indexOf("+gt+'+", "+'+wt+") === -1 ","unallowed blending combination for (srcRGB, dstRGB)")});var dt=P.def(B,"[",gt,"]"),Ft=P.def(B,"[",Q("src","Alpha"),"]"),Ge=P.def(B,"[",wt,"]"),po=P.def(B,"[",Q("dst","Alpha"),"]");return[dt,Ge,Ft,po]});case Z1:return U(function(N){if(typeof N=="string")return k.commandParameter(N,ft,"invalid "+G,E.commandStr),[ft[N],ft[N]];if(typeof N=="object")return k.commandParameter(N.rgb,ft,G+".rgb",E.commandStr),k.commandParameter(N.alpha,ft,G+".alpha",E.commandStr),[ft[N.rgb],ft[N.alpha]];k.commandRaise("invalid blend.equation",E.commandStr)},function(N,P,A){var B=N.constants.blendEquations,Q=P.def(),gt=P.def(),wt=N.cond("typeof ",A,'==="string"');return k.optional(function(){function dt(Ft,Ge,po){N.assert(Ft,po+" in "+B,"invalid "+Ge+", must be one of "+Object.keys(ft))}dt(wt.then,G,A),N.assert(wt.else,A+"&&typeof "+A+'==="object"',"invalid "+G),dt(wt.else,G+".rgb",A+".rgb"),dt(wt.else,G+".alpha",A+".alpha")}),wt.then(Q,"=",gt,"=",B,"[",A,"];"),wt.else(Q,"=",B,"[",A,".rgb];",gt,"=",B,"[",A,".alpha];"),P(wt),[Q,gt]});case Dv:return U(function(N){return k.command(kn(N)&&N.length===4,"blend.color must be a 4d array",E.commandStr),Ee(4,function(P){return+N[P]})},function(N,P,A){return k.optional(function(){N.assert(P,N.shared.isArrayLike+"("+A+")&&"+A+".length===4","blend.color must be a 4d array")}),Ee(4,function(B){return P.def("+",A,"[",B,"]")})});case Kv:return U(function(N){return k.commandType(N,"number",I,E.commandStr),N|0},function(N,P,A){return k.optional(function(){N.assert(P,"typeof "+A+'==="number"',"invalid stencil.mask")}),P.def(A,"|0")});case au:return U(function(N){k.commandType(N,"object",I,E.commandStr);var P=N.cmp||"keep",A=N.ref||0,B="mask"in N?N.mask:-1;return k.commandParameter(P,Di,G+".cmp",E.commandStr),k.commandType(A,"number",G+".ref",E.commandStr),k.commandType(B,"number",G+".mask",E.commandStr),[Di[P],A,B]},function(N,P,A){var B=N.constants.compareFuncs;k.optional(function(){function dt(){N.assert(P,Array.prototype.join.call(arguments,""),"invalid stencil.func")}dt(A+"&&typeof ",A,'==="object"'),dt('!("cmp" in ',A,")||(",A,".cmp in ",B,")")});var Q=P.def('"cmp" in ',A,"?",B,"[",A,".cmp]",":",Ha),gt=P.def(A,".ref|0"),wt=P.def('"mask" in ',A,"?",A,".mask|0:-1");return[Q,gt,wt]});case su:case Kc:return U(function(N){k.commandType(N,"object",I,E.commandStr);var P=N.fail||"keep",A=N.zfail||"keep",B=N.zpass||"keep";return k.commandParameter(P,Ua,G+".fail",E.commandStr),k.commandParameter(A,Ua,G+".zfail",E.commandStr),k.commandParameter(B,Ua,G+".zpass",E.commandStr),[G===Kc?Is:sl,Ua[P],Ua[A],Ua[B]]},function(N,P,A){var B=N.constants.stencilOps;k.optional(function(){N.assert(P,A+"&&typeof "+A+'==="object"',"invalid "+G)});function Q(gt){return k.optional(function(){N.assert(P,'!("'+gt+'" in '+A+")||("+A+"."+gt+" in "+B+")","invalid "+G+"."+gt+", must be one of "+Object.keys(Ua))}),P.def('"',gt,'" in ',A,"?",B,"[",A,".",gt,"]:",Ha)}return[G===Kc?Is:sl,Q("fail"),Q("zfail"),Q("zpass")]});case nu:return U(function(N){k.commandType(N,"object",I,E.commandStr);var P=N.factor|0,A=N.units|0;return k.commandType(P,"number",I+".factor",E.commandStr),k.commandType(A,"number",I+".units",E.commandStr),[P,A]},function(N,P,A){k.optional(function(){N.assert(P,A+"&&typeof "+A+'==="object"',"invalid "+G)});var B=P.def(A,".factor|0"),Q=P.def(A,".units|0");return[B,Q]});case jv:return U(function(N){var P=0;return N==="front"?P=sl:N==="back"&&(P=Is),k.command(!!P,I,E.commandStr),P},function(N,P,A){return k.optional(function(){N.assert(P,A+'==="front"||'+A+'==="back"',"invalid cull.face")}),P.def(A,'==="front"?',sl,":",Is)});case ou:return U(function(N){return k.command(typeof N=="number"&&N>=nt.lineWidthDims[0]&&N<=nt.lineWidthDims[1],"invalid line width, must be a positive number between "+nt.lineWidthDims[0]+" and "+nt.lineWidthDims[1],E.commandStr),N},function(N,P,A){return k.optional(function(){N.assert(P,"typeof "+A+'==="number"&&'+A+">="+nt.lineWidthDims[0]+"&&"+A+"<="+nt.lineWidthDims[1],"invalid line width")}),A});case eu:return U(function(N){return k.commandParameter(N,du,I,E.commandStr),du[N]},function(N,P,A){return k.optional(function(){N.assert(P,A+'==="cw"||'+A+'==="ccw"',"invalid frontFace, must be one of cw,ccw")}),P.def(A+'==="cw"?'+nm+":"+uu)});case tu:return U(function(N){return k.command(kn(N)&&N.length===4,"color.mask must be length 4 array",E.commandStr),N.map(function(P){return!!P})},function(N,P,A){return k.optional(function(){N.assert(P,N.shared.isArrayLike+"("+A+")&&"+A+".length===4","invalid color.mask")}),Ee(4,function(B){return"!!"+A+"["+B+"]"})});case ru:return U(function(N){k.command(typeof N=="object"&&N,I,E.commandStr);var P="value"in N?N.value:1,A=!!N.invert;return k.command(typeof P=="number"&&P>=0&&P<=1,"sample.coverage.value must be a number between 0 and 1",E.commandStr),[P,A]},function(N,P,A){k.optional(function(){N.assert(P,A+"&&typeof "+A+'==="object"',"invalid sample.coverage")});var B=P.def('"value" in ',A,"?+",A,".value:1"),Q=P.def("!!",A,".invert");return[B,Q]})}}),K}function Xn(L,E){var $=L.static,V=L.dynamic,K={};return Object.keys($).forEach(function(G){var I=$[G],U;if(typeof I=="number"||typeof I=="boolean")U=Ln(function(){return I});else if(typeof I=="function"){var N=I._reglType;N==="texture2d"||N==="textureCube"?U=Ln(function(P){return P.link(I)}):N==="framebuffer"||N==="framebufferCube"?(k.command(I.color.length>0,'missing color attachment for framebuffer sent to uniform "'+G+'"',E.commandStr),U=Ln(function(P){return P.link(I.color[0])})):k.commandRaise('invalid data for uniform "'+G+'"',E.commandStr)}else kn(I)?U=Ln(function(P){var A=P.global.def("[",Ee(I.length,function(B){return k.command(typeof I[B]=="number"||typeof I[B]=="boolean","invalid uniform "+G,P.commandStr),I[B]}),"]");return A}):k.commandRaise('invalid or missing data for uniform "'+G+'"',E.commandStr);U.value=I,K[G]=U}),Object.keys(V).forEach(function(G){var I=V[G];K[G]=J0(I,function(U,N){return U.invoke(N,I)})}),K}function Eo(L,E){var $=L.static,V=L.dynamic,K={};return Object.keys($).forEach(function(G){var I=$[G],U=z.id(G),N=new Y;if(Bf(I))N.state=Pi,N.buffer=bt.getBuffer(bt.create(I,qi,!1,!0)),N.type=0;else{var P=bt.getBuffer(I);if(P)N.state=Pi,N.buffer=P,N.type=0;else if(k.command(typeof I=="object"&&I,"invalid data for attribute "+G,E.commandStr),"constant"in I){var A=I.constant;N.buffer="null",N.state=V1,typeof A=="number"?N.x=A:(k.command(kn(A)&&A.length>0&&A.length<=4,"invalid constant for attribute "+G,E.commandStr),Ci.forEach(function(Ge,po){po<A.length&&(N[Ge]=A[po])}))}else{Bf(I.buffer)?P=bt.getBuffer(bt.create(I.buffer,qi,!1,!0)):P=bt.getBuffer(I.buffer),k.command(!!P,'missing buffer for attribute "'+G+'"',E.commandStr);var B=I.offset|0;k.command(B>=0,'invalid offset for attribute "'+G+'"',E.commandStr);var Q=I.stride|0;k.command(Q>=0&&Q<256,'invalid stride for attribute "'+G+'", must be integer betweeen [0, 255]',E.commandStr);var gt=I.size|0;k.command(!("size"in I)||gt>0&&gt<=4,'invalid size for attribute "'+G+'", must be 1,2,3,4',E.commandStr);var wt=!!I.normalized,dt=0;"type"in I&&(k.commandParameter(I.type,As,"invalid type for attribute "+G,E.commandStr),dt=As[I.type]);var Ft=I.divisor|0;"divisor"in I&&(k.command(Ft===0||Gt,'cannot specify divisor for attribute "'+G+'", instancing not supported',E.commandStr),k.command(Ft>=0,'invalid divisor for attribute "'+G+'"',E.commandStr)),k.optional(function(){var Ge=E.commandStr,po=["buffer","offset","divisor","normalized","type","size","stride"];Object.keys(I).forEach(function(Ae){k.command(po.indexOf(Ae)>=0,'unknown parameter "'+Ae+'" for attribute pointer "'+G+'" (valid parameters are '+po+")",Ge)})}),N.buffer=P,N.state=Pi,N.size=gt,N.normalized=wt,N.type=dt||P.dtype,N.offset=B,N.stride=Q,N.divisor=Ft}}K[G]=Ln(function(Ge,po){var Ae=Ge.attribCache;if(U in Ae)return Ae[U];var Ye={isStream:!1};return Object.keys(N).forEach(function(io){Ye[io]=N[io]}),N.buffer&&(Ye.buffer=Ge.link(N.buffer),Ye.type=Ye.type||Ye.buffer+".dtype"),Ae[U]=Ye,Ye})}),Object.keys(V).forEach(function(G){var I=V[G];function U(N,P){var A=N.invoke(P,I),B=N.shared,Q=N.constants,gt=B.isBufferArgs,wt=B.buffer;k.optional(function(){N.assert(P,A+"&&(typeof "+A+'==="object"||typeof '+A+'==="function")&&('+gt+"("+A+")||"+wt+".getBuffer("+A+")||"+wt+".getBuffer("+A+".buffer)||"+gt+"("+A+'.buffer)||("constant" in '+A+"&&(typeof "+A+'.constant==="number"||'+B.isArrayLike+"("+A+".constant))))",'invalid dynamic attribute "'+G+'"')});var dt={isStream:P.def(!1)},Ft=new Y;Ft.state=Pi,Object.keys(Ft).forEach(function(Ye){dt[Ye]=P.def(""+Ft[Ye])});var Ge=dt.buffer,po=dt.type;P("if(",gt,"(",A,")){",dt.isStream,"=true;",Ge,"=",wt,".createStream(",qi,",",A,");",po,"=",Ge,".dtype;","}else{",Ge,"=",wt,".getBuffer(",A,");","if(",Ge,"){",po,"=",Ge,".dtype;",'}else if("constant" in ',A,"){",dt.state,"=",V1,";","if(typeof "+A+'.constant === "number"){',dt[Ci[0]],"=",A,".constant;",Ci.slice(1).map(function(Ye){return dt[Ye]}).join("="),"=0;","}else{",Ci.map(function(Ye,io){return dt[Ye]+"="+A+".constant.length>"+io+"?"+A+".constant["+io+"]:0;"}).join(""),"}}else{","if(",gt,"(",A,".buffer)){",Ge,"=",wt,".createStream(",qi,",",A,".buffer);","}else{",Ge,"=",wt,".getBuffer(",A,".buffer);","}",po,'="type" in ',A,"?",Q.glTypes,"[",A,".type]:",Ge,".dtype;",dt.normalized,"=!!",A,".normalized;");function Ae(Ye){P(dt[Ye],"=",A,".",Ye,"|0;")}return Ae("size"),Ae("offset"),Ae("stride"),Ae("divisor"),P("}}"),P.exit("if(",dt.isStream,"){",wt,".destroyStream(",Ge,");","}"),dt}K[G]=J0(I,U)}),K}function qn(L,E){var $=L.static,V=L.dynamic;if(tl in $){var K=$[tl];return K!==null&&Ut.getVAO(K)===null&&(K=Ut.createVAO(K)),Ln(function(I){return I.link(Ut.getVAO(K))})}else if(tl in V){var G=V[tl];return J0(G,function(I,U){var N=I.invoke(U,G);return U.def(I.shared.vao+".getVAO("+N+")")})}return null}function nn(L){var E=L.static,$=L.dynamic,V={};return Object.keys(E).forEach(function(K){var G=E[K];V[K]=Ln(function(I,U){return typeof G=="number"||typeof G=="boolean"?""+G:I.link(G)})}),Object.keys($).forEach(function(K){var G=$[K];V[K]=J0(G,function(I,U){return I.invoke(U,G)})}),V}function Rn(L,E,$,V,K){var G=L.static,I=L.dynamic;k.optional(function(){var Ae=[Os,Zc,Jc,Cs,Ps,Of,$s,Cf,Qc,tl].concat(Lt);function Ye(io){Object.keys(io).forEach(function($o){k.command(Ae.indexOf($o)>=0,'unknown parameter "'+$o+'"',K.commandStr)})}Ye(G),Ye(I)});var U=so(L,E),N=ze(L,K),P=wo(L,N,K),A=Po(L,K),B=Nn(L,K),Q=go(L,K,U);function gt(Ae){var Ye=P[Ae];Ye&&(B[Ae]=Ye)}gt(wa),gt(te(Rf));var wt=Object.keys(B).length>0,dt={framebuffer:N,draw:A,shader:Q,state:B,dirty:wt,scopeVAO:null,drawVAO:null,useVAO:!1,attributes:{}};if(dt.profile=ho(L,K),dt.uniforms=Xn($,K),dt.drawVAO=dt.scopeVAO=qn(L,K),!dt.drawVAO&&Q.program&&!U&&C.angle_instanced_arrays){var Ft=!0,Ge=Q.program.attributes.map(function(Ae){var Ye=E.static[Ae];return Ft=Ft&&!!Ye,Ye});if(Ft&&Ge.length>0){var po=Ut.getVAO(Ut.createVAO(Ge));dt.drawVAO=new I0(null,null,null,function(Ae,Ye){return Ae.link(po)}),dt.useVAO=!0}}return U?dt.useVAO=!0:dt.attributes=Eo(E,K),dt.context=nn(V,K),dt}function Dn(L,E,$){var V=L.shared,K=V.context,G=L.scope();Object.keys($).forEach(function(I){E.save(K,"."+I);var U=$[I],N=U.append(L,E);Array.isArray(N)?G(K,".",I,"=[",N.join(),"];"):G(K,".",I,"=",N,";")}),E(G)}function Fn(L,E,$,V){var K=L.shared,G=K.gl,I=K.framebuffer,U;ue&&(U=E.def(K.extensions,".webgl_draw_buffers"));var N=L.constants,P=N.drawBuffer,A=N.backBuffer,B;$?B=$.append(L,E):B=E.def(I,".next"),V||E("if(",B,"!==",I,".cur){"),E("if(",B,"){",G,".bindFramebuffer(",im,",",B,".framebuffer);"),ue&&E(U,".drawBuffersWEBGL(",P,"[",B,".colorAttachments.length]);"),E("}else{",G,".bindFramebuffer(",im,",null);"),ue&&E(U,".drawBuffersWEBGL(",A,");"),E("}",I,".cur=",B,";"),V||E("}")}function s0(L,E,$){var V=L.shared,K=V.gl,G=L.current,I=L.next,U=V.current,N=V.next,P=L.cond(U,".dirty");Lt.forEach(function(A){var B=te(A);if(!(B in $.state)){var Q,gt;if(B in I){Q=I[B],gt=G[B];var wt=Ee(St[B].length,function(Ft){return P.def(Q,"[",Ft,"]")});P(L.cond(wt.map(function(Ft,Ge){return Ft+"!=="+gt+"["+Ge+"]"}).join("||")).then(K,".",zt[B],"(",wt,");",wt.map(function(Ft,Ge){return gt+"["+Ge+"]="+Ft}).join(";"),";"))}else{Q=P.def(N,".",B);var dt=L.cond(Q,"!==",U,".",B);P(dt),B in Jt?dt(L.cond(Q).then(K,".enable(",Jt[B],");").else(K,".disable(",Jt[B],");"),U,".",B,"=",Q,";"):dt(K,".",zt[B],"(",Q,");",U,".",B,"=",Q,";")}}}),Object.keys($.state).length===0&&P(U,".dirty=false;"),E(P)}function m0(L,E,$,V){var K=L.shared,G=L.current,I=K.current,U=K.gl;fm(Object.keys($)).forEach(function(N){var P=$[N];if(!(V&&!V(P))){var A=P.append(L,E);if(Jt[N]){var B=Jt[N];Ba(P)?A?E(U,".enable(",B,");"):E(U,".disable(",B,");"):E(L.cond(A).then(U,".enable(",B,");").else(U,".disable(",B,");")),E(I,".",N,"=",A,";")}else if(kn(A)){var Q=G[N];E(U,".",zt[N],"(",A,");",A.map(function(gt,wt){return Q+"["+wt+"]="+gt}).join(";"),";")}else E(U,".",zt[N],"(",A,");",I,".",N,"=",A,";")}})}function Sn(L,E){Gt&&(L.instancing=E.def(L.shared.extensions,".angle_instanced_arrays"))}function uo(L,E,$,V,K){var G=L.shared,I=L.stats,U=G.current,N=G.timer,P=$.profile;function A(){return typeof performance=="undefined"?"Date.now()":"performance.now()"}var B,Q;function gt(Ae){B=E.def(),Ae(B,"=",A(),";"),typeof K=="string"?Ae(I,".count+=",K,";"):Ae(I,".count++;"),Pt&&(V?(Q=E.def(),Ae(Q,"=",N,".getNumPendingQueries();")):Ae(N,".beginQuery(",I,");"))}function wt(Ae){Ae(I,".cpuTime+=",A(),"-",B,";"),Pt&&(V?Ae(N,".pushScopeStats(",Q,",",N,".getNumPendingQueries(),",I,");"):Ae(N,".endQuery();"))}function dt(Ae){var Ye=E.def(U,".profile");E(U,".profile=",Ae,";"),E.exit(U,".profile=",Ye,";")}var Ft;if(P){if(Ba(P)){P.enable?(gt(E),wt(E.exit),dt("true")):dt("false");return}Ft=P.append(L,E),dt(Ft)}else Ft=E.def(U,".profile");var Ge=L.block();gt(Ge),E("if(",Ft,"){",Ge,"}");var po=L.block();wt(po),E.exit("if(",Ft,"){",po,"}")}function g0(L,E,$,V,K){var G=L.shared;function I(N){switch(N){case Pf:case qf:case Gf:return 2;case $f:case Df:case Hf:return 3;case If:case Ff:case Uf:return 4;default:return 1}}function U(N,P,A){var B=G.gl,Q=E.def(N,".location"),gt=E.def(G.attributes,"[",Q,"]"),wt=A.state,dt=A.buffer,Ft=[A.x,A.y,A.z,A.w],Ge=["buffer","normalized","offset","stride"];function po(){E("if(!",gt,".buffer){",B,".enableVertexAttribArray(",Q,");}");var Ye=A.type,io;if(A.size?io=E.def(A.size,"||",P):io=P,E("if(",gt,".type!==",Ye,"||",gt,".size!==",io,"||",Ge.map(function(xn){return gt+"."+xn+"!=="+A[xn]}).join("||"),"){",B,".bindBuffer(",qi,",",dt,".buffer);",B,".vertexAttribPointer(",[Q,io,Ye,A.normalized,A.stride,A.offset],");",gt,".type=",Ye,";",gt,".size=",io,";",Ge.map(function(xn){return gt+"."+xn+"="+A[xn]+";"}).join(""),"}"),Gt){var $o=A.divisor;E("if(",gt,".divisor!==",$o,"){",L.instancing,".vertexAttribDivisorANGLE(",[Q,$o],");",gt,".divisor=",$o,";}")}}function Ae(){E("if(",gt,".buffer){",B,".disableVertexAttribArray(",Q,");",gt,".buffer=null;","}if(",Ci.map(function(Ye,io){return gt+"."+Ye+"!=="+Ft[io]}).join("||"),"){",B,".vertexAttrib4f(",Q,",",Ft,");",Ci.map(function(Ye,io){return gt+"."+Ye+"="+Ft[io]+";"}).join(""),"}")}wt===Pi?po():wt===V1?Ae():(E("if(",wt,"===",Pi,"){"),po(),E("}else{"),Ae(),E("}"))}V.forEach(function(N){var P=N.name,A=$.attributes[P],B;if(A){if(!K(A))return;B=A.append(L,E)}else{if(!K(hm))return;var Q=L.scopeAttrib(P);k.optional(function(){L.assert(E,Q+".state","missing attribute "+P)}),B={},Object.keys(new Y).forEach(function(gt){B[gt]=E.def(Q,".",gt)})}U(L.link(N),I(N.info.type),B)})}function Fo(L,E,$,V,K){for(var G=L.shared,I=G.gl,U,N=0;N<V.length;++N){var P=V[N],A=P.name,B=P.info.type,Q=$.uniforms[A],gt=L.link(P),wt=gt+".location",dt;if(Q){if(!K(Q))continue;if(Ba(Q)){var Ft=Q.value;if(k.command(Ft!==null&&typeof Ft!="undefined",'missing uniform "'+A+'"',L.commandStr),B===rl||B===al){k.command(typeof Ft=="function"&&(B===rl&&(Ft._reglType==="texture2d"||Ft._reglType==="framebuffer")||B===al&&(Ft._reglType==="textureCube"||Ft._reglType==="framebufferCube")),"invalid texture for uniform "+A,L.commandStr);var Ge=L.link(Ft._texture||Ft.color[0]._texture);E(I,".uniform1i(",wt,",",Ge+".bind());"),E.exit(Ge,".unbind();")}else if(B===el||B===ol||B===nl){k.optional(function(){k.command(kn(Ft),"invalid matrix for uniform "+A,L.commandStr),k.command(B===el&&Ft.length===4||B===ol&&Ft.length===9||B===nl&&Ft.length===16,"invalid length for matrix uniform "+A,L.commandStr)});var po=L.global.def("new Float32Array(["+Array.prototype.slice.call(Ft)+"])"),Ae=2;B===ol?Ae=3:B===nl&&(Ae=4),E(I,".uniformMatrix",Ae,"fv(",wt,",false,",po,");")}else{switch(B){case lu:k.commandType(Ft,"number","uniform "+A,L.commandStr),U="1f";break;case Pf:k.command(kn(Ft)&&Ft.length===2,"uniform "+A,L.commandStr),U="2f";break;case $f:k.command(kn(Ft)&&Ft.length===3,"uniform "+A,L.commandStr),U="3f";break;case If:k.command(kn(Ft)&&Ft.length===4,"uniform "+A,L.commandStr),U="4f";break;case hu:k.commandType(Ft,"boolean","uniform "+A,L.commandStr),U="1i";break;case fu:k.commandType(Ft,"number","uniform "+A,L.commandStr),U="1i";break;case Gf:k.command(kn(Ft)&&Ft.length===2,"uniform "+A,L.commandStr),U="2i";break;case qf:k.command(kn(Ft)&&Ft.length===2,"uniform "+A,L.commandStr),U="2i";break;case Hf:k.command(kn(Ft)&&Ft.length===3,"uniform "+A,L.commandStr),U="3i";break;case Df:k.command(kn(Ft)&&Ft.length===3,"uniform "+A,L.commandStr),U="3i";break;case Uf:k.command(kn(Ft)&&Ft.length===4,"uniform "+A,L.commandStr),U="4i";break;case Ff:k.command(kn(Ft)&&Ft.length===4,"uniform "+A,L.commandStr),U="4i";break}E(I,".uniform",U,"(",wt,",",kn(Ft)?Array.prototype.slice.call(Ft):Ft,");")}continue}else dt=Q.append(L,E)}else{if(!K(hm))continue;dt=E.def(G.uniforms,"[",z.id(A),"]")}B===rl?(k(!Array.isArray(dt),"must specify a scalar prop for textures"),E("if(",dt,"&&",dt,'._reglType==="framebuffer"){',dt,"=",dt,".color[0];","}")):B===al&&(k(!Array.isArray(dt),"must specify a scalar prop for cube maps"),E("if(",dt,"&&",dt,'._reglType==="framebufferCube"){',dt,"=",dt,".color[0];","}")),k.optional(function(){function q0(Br,xm){L.assert(E,Br,'bad data or missing for uniform "'+A+'".  '+xm)}function pu(Br){k(!Array.isArray(dt),"must not specify an array type for uniform"),q0("typeof "+dt+'==="'+Br+'"',"invalid type, expected "+Br)}function Er(Br,xm){Array.isArray(dt)?k(dt.length===Br,"must have length "+Br):q0(G.isArrayLike+"("+dt+")&&"+dt+".length==="+Br,"invalid vector, should have length "+Br,L.commandStr)}function gm(Br){k(!Array.isArray(dt),"must not specify a value type"),q0("typeof "+dt+'==="function"&&'+dt+'._reglType==="texture'+(Br===em?"2d":"Cube")+'"',"invalid texture type",L.commandStr)}switch(B){case fu:pu("number");break;case qf:Er(2,"number");break;case Df:Er(3,"number");break;case Ff:Er(4,"number");break;case lu:pu("number");break;case Pf:Er(2,"number");break;case $f:Er(3,"number");break;case If:Er(4,"number");break;case hu:pu("boolean");break;case Gf:Er(2,"boolean");break;case Hf:Er(3,"boolean");break;case Uf:Er(4,"boolean");break;case el:Er(4,"number");break;case ol:Er(9,"number");break;case nl:Er(16,"number");break;case rl:gm(em);break;case al:gm(c4);break}});var Ye=1;switch(B){case rl:case al:var io=E.def(dt,"._texture");E(I,".uniform1i(",wt,",",io,".bind());"),E.exit(io,".unbind();");continue;case fu:case hu:U="1i";break;case qf:case Gf:U="2i",Ye=2;break;case Df:case Hf:U="3i",Ye=3;break;case Ff:case Uf:U="4i",Ye=4;break;case lu:U="1f";break;case Pf:U="2f",Ye=2;break;case $f:U="3f",Ye=3;break;case If:U="4f",Ye=4;break;case el:U="Matrix2fv";break;case ol:U="Matrix3fv";break;case nl:U="Matrix4fv";break}if(E(I,".uniform",U,"(",wt,","),U.charAt(0)==="M"){var $o=Math.pow(B-el+2,2),xn=L.global.def("new Float32Array(",$o,")");Array.isArray(dt)?E("false,(",Ee($o,function(q0){return xn+"["+q0+"]="+dt[q0]}),",",xn,")"):E("false,(Array.isArray(",dt,")||",dt," instanceof Float32Array)?",dt,":(",Ee($o,function(q0){return xn+"["+q0+"]="+dt+"["+q0+"]"}),",",xn,")")}else Ye>1?E(Ee(Ye,function(q0){return Array.isArray(dt)?dt[q0]:dt+"["+q0+"]"})):(k(!Array.isArray(dt),"uniform value must not be an array"),E(dt));E(");")}}function Ve(L,E,$,V){var K=L.shared,G=K.gl,I=K.draw,U=V.draw;function N(){var io=U.elements,$o,xn=E;return io?((io.contextDep&&V.contextDynamic||io.propDep)&&(xn=$),$o=io.append(L,xn)):$o=xn.def(I,".",Cs),$o&&xn("if("+$o+")"+G+".bindBuffer("+a4+","+$o+".buffer.buffer);"),$o}function P(){var io=U.count,$o,xn=E;return io?((io.contextDep&&V.contextDynamic||io.propDep)&&(xn=$),$o=io.append(L,xn),k.optional(function(){io.MISSING&&L.assert(E,"false","missing vertex count"),io.DYNAMIC&&L.assert(xn,$o+">=0","missing vertex count")})):($o=xn.def(I,".",$s),k.optional(function(){L.assert(xn,$o+">=0","missing vertex count")})),$o}var A=N();function B(io){var $o=U[io];return $o?$o.contextDep&&V.contextDynamic||$o.propDep?$o.append(L,$):$o.append(L,E):E.def(I,".",io)}var Q=B(Ps),gt=B(Of),wt=P();if(typeof wt=="number"){if(wt===0)return}else $("if(",wt,"){"),$.exit("}");var dt,Ft;Gt&&(dt=B(Cf),Ft=L.instancing);var Ge=A+".type",po=U.elements&&Ba(U.elements);function Ae(){function io(){$(Ft,".drawElementsInstancedANGLE(",[Q,wt,Ge,gt+"<<(("+Ge+"-"+Cv+")>>1)",dt],");")}function $o(){$(Ft,".drawArraysInstancedANGLE(",[Q,gt,wt,dt],");")}A?po?io():($("if(",A,"){"),io(),$("}else{"),$o(),$("}")):$o()}function Ye(){function io(){$(G+".drawElements("+[Q,wt,Ge,gt+"<<(("+Ge+"-"+Cv+")>>1)"]+");")}function $o(){$(G+".drawArrays("+[Q,gt,wt]+");")}A?po?io():($("if(",A,"){"),io(),$("}else{"),$o(),$("}")):$o()}Gt&&(typeof dt!="number"||dt>=0)?typeof dt=="string"?($("if(",dt,">0){"),Ae(),$("}else if(",dt,"<0){"),Ye(),$("}")):Ae():Ye()}function So(L,E,$,V,K){var G=to(),I=G.proc("body",K);return k.optional(function(){G.commandStr=E.commandStr,G.command=G.link(E.commandStr)}),Gt&&(G.instancing=I.def(G.shared.extensions,".angle_instanced_arrays")),L(G,I,$,V),G.compile().body}function Lo(L,E,$,V){Sn(L,E),$.useVAO?$.drawVAO?E(L.shared.vao,".setVAO(",$.drawVAO.append(L,E),");"):E(L.shared.vao,".setVAO(",L.shared.vao,".targetVAO);"):(E(L.shared.vao,".setVAO(null);"),g0(L,E,$,V.attributes,function(){return!0})),Fo(L,E,$,V.uniforms,function(){return!0}),Ve(L,E,E,$)}function En(L,E){var $=L.proc("draw",1);Sn(L,$),Dn(L,$,E.context),Fn(L,$,E.framebuffer),s0(L,$,E),m0(L,$,E.state),uo(L,$,E,!1,!0);var V=E.shader.progVar.append(L,$);if($(L.shared.gl,".useProgram(",V,".program);"),E.shader.program)Lo(L,$,E,E.shader.program);else{$(L.shared.vao,".setVAO(null);");var K=L.global.def("{}"),G=$.def(V,".id"),I=$.def(K,"[",G,"]");$(L.cond(I).then(I,".call(this,a0);").else(I,"=",K,"[",G,"]=",L.link(function(U){return So(Lo,L,E,U,1)}),"(",V,");",I,".call(this,a0);"))}Object.keys(E.state).length>0&&$(L.shared.current,".dirty=true;")}function ca(L,E,$,V){L.batchId="a1",Sn(L,E);function K(){return!0}g0(L,E,$,V.attributes,K),Fo(L,E,$,V.uniforms,K),Ve(L,E,E,$)}function qs(L,E,$,V){Sn(L,E);var K=$.contextDep,G=E.def(),I="a0",U="a1",N=E.def();L.shared.props=N,L.batchId=G;var P=L.scope(),A=L.scope();E(P.entry,"for(",G,"=0;",G,"<",U,";++",G,"){",N,"=",I,"[",G,"];",A,"}",P.exit);function B(Ge){return Ge.contextDep&&K||Ge.propDep}function Q(Ge){return!B(Ge)}if($.needsContext&&Dn(L,A,$.context),$.needsFramebuffer&&Fn(L,A,$.framebuffer),m0(L,A,$.state,B),$.profile&&B($.profile)&&uo(L,A,$,!1,!0),V)$.useVAO?$.drawVAO?B($.drawVAO)?A(L.shared.vao,".setVAO(",$.drawVAO.append(L,A),");"):P(L.shared.vao,".setVAO(",$.drawVAO.append(L,P),");"):P(L.shared.vao,".setVAO(",L.shared.vao,".targetVAO);"):(P(L.shared.vao,".setVAO(null);"),g0(L,P,$,V.attributes,Q),g0(L,A,$,V.attributes,B)),Fo(L,P,$,V.uniforms,Q),Fo(L,A,$,V.uniforms,B),Ve(L,P,A,$);else{var gt=L.global.def("{}"),wt=$.shader.progVar.append(L,A),dt=A.def(wt,".id"),Ft=A.def(gt,"[",dt,"]");A(L.shared.gl,".useProgram(",wt,".program);","if(!",Ft,"){",Ft,"=",gt,"[",dt,"]=",L.link(function(Ge){return So(ca,L,$,Ge,2)}),"(",wt,");}",Ft,".call(this,a0[",G,"],",G,");")}}function O(L,E){var $=L.proc("batch",2);L.batchId="0",Sn(L,$);var V=!1,K=!0;Object.keys(E.context).forEach(function(gt){V=V||E.context[gt].propDep}),V||(Dn(L,$,E.context),K=!1);var G=E.framebuffer,I=!1;G?(G.propDep?V=I=!0:G.contextDep&&V&&(I=!0),I||Fn(L,$,G)):Fn(L,$,null),E.state.viewport&&E.state.viewport.propDep&&(V=!0);function U(gt){return gt.contextDep&&V||gt.propDep}s0(L,$,E),m0(L,$,E.state,function(gt){return!U(gt)}),(!E.profile||!U(E.profile))&&uo(L,$,E,!1,"a1"),E.contextDep=V,E.needsContext=K,E.needsFramebuffer=I;var N=E.shader.progVar;if(N.contextDep&&V||N.propDep)qs(L,$,E,null);else{var P=N.append(L,$);if($(L.shared.gl,".useProgram(",P,".program);"),E.shader.program)qs(L,$,E,E.shader.program);else{$(L.shared.vao,".setVAO(null);");var A=L.global.def("{}"),B=$.def(P,".id"),Q=$.def(A,"[",B,"]");$(L.cond(Q).then(Q,".call(this,a0,a1);").else(Q,"=",A,"[",B,"]=",L.link(function(gt){return So(qs,L,E,gt,2)}),"(",P,");",Q,".call(this,a0,a1);"))}}Object.keys(E.state).length>0&&$(L.shared.current,".dirty=true;")}function at(L,E){var $=L.proc("scope",3);L.batchId="a2";var V=L.shared,K=V.current;Dn(L,$,E.context),E.framebuffer&&E.framebuffer.append(L,$),fm(Object.keys(E.state)).forEach(function(I){var U=E.state[I],N=U.append(L,$);kn(N)?N.forEach(function(P,A){$.set(L.next[I],"["+A+"]",P)}):$.set(V.next,"."+I,N)}),uo(L,$,E,!0,!0),[Cs,Of,$s,Cf,Ps].forEach(function(I){var U=E.draw[I];U&&$.set(V.draw,"."+I,""+U.append(L,$))}),Object.keys(E.uniforms).forEach(function(I){var U=E.uniforms[I].append(L,$);Array.isArray(U)&&(U="["+U.join()+"]"),$.set(V.uniforms,"["+z.id(I)+"]",U)}),Object.keys(E.attributes).forEach(function(I){var U=E.attributes[I].append(L,$),N=L.scopeAttrib(I);Object.keys(new Y).forEach(function(P){$.set(N,"."+P,U[P])})}),E.scopeVAO&&$.set(V.vao,".targetVAO",E.scopeVAO.append(L,$));function G(I){var U=E.shader[I];U&&$.set(V.shader,"."+I,U.append(L,$))}G(Zc),G(Jc),Object.keys(E.state).length>0&&($(K,".dirty=true;"),$.exit(K,".dirty=true;")),$("a1(",L.shared.context,",a0,",L.batchId,");")}function Z(L){if(!(typeof L!="object"||kn(L))){for(var E=Object.keys(L),$=0;$<E.length;++$)if(J.isDynamic(L[E[$]]))return!0;return!1}}function _e(L,E,$){var V=E.static[$];if(!V||!Z(V))return;var K=L.global,G=Object.keys(V),I=!1,U=!1,N=!1,P=L.global.def("{}");G.forEach(function(B){var Q=V[B];if(J.isDynamic(Q)){typeof Q=="function"&&(Q=V[B]=J.unbox(Q));var gt=J0(Q,null);I=I||gt.thisDep,N=N||gt.propDep,U=U||gt.contextDep}else{switch(K(P,".",B,"="),typeof Q){case"number":K(Q);break;case"string":K('"',Q,'"');break;case"object":Array.isArray(Q)&&K("[",Q.join(),"]");break;default:K(L.link(Q));break}K(";")}});function A(B,Q){G.forEach(function(gt){var wt=V[gt];if(J.isDynamic(wt)){var dt=B.invoke(Q,wt);Q(P,".",gt,"=",dt,";")}})}E.dynamic[$]=new J.DynamicVariable(Nf,{thisDep:I,contextDep:U,propDep:N,ref:P,append:A}),delete E.static[$]}function _o(L,E,$,V,K){var G=to();G.stats=G.link(K),Object.keys(E.static).forEach(function(U){_e(G,E,U)}),r4.forEach(function(U){_e(G,L,U)});var I=Rn(L,E,$,V,G);return En(G,I),at(G,I),O(G,I),e(G.compile(),{destroy:function(){I.shader.program.destroy()}})}return{next:me,current:St,procs:function(){var L=to(),E=L.proc("poll"),$=L.proc("refresh"),V=L.block();E(V),$(V);var K=L.shared,G=K.gl,I=K.next,U=K.current;V(U,".dirty=false;"),Fn(L,E),Fn(L,$,null,!0);var N;Gt&&(N=L.link(Gt)),C.oes_vertex_array_object&&$(L.link(C.oes_vertex_array_object),".bindVertexArrayOES(null);");for(var P=0;P<nt.maxAttributes;++P){var A=$.def(K.attributes,"[",P,"]"),B=L.cond(A,".buffer");B.then(G,".enableVertexAttribArray(",P,");",G,".bindBuffer(",qi,",",A,".buffer.buffer);",G,".vertexAttribPointer(",P,",",A,".size,",A,".type,",A,".normalized,",A,".stride,",A,".offset);").else(G,".disableVertexAttribArray(",P,");",G,".vertexAttrib4f(",P,",",A,".x,",A,".y,",A,".z,",A,".w);",A,".buffer=null;"),$(B),Gt&&$(N,".vertexAttribDivisorANGLE(",P,",",A,".divisor);")}return $(L.shared.vao,".currentVAO=null;",L.shared.vao,".setVAO(",L.shared.vao,".targetVAO);"),Object.keys(Jt).forEach(function(Q){var gt=Jt[Q],wt=V.def(I,".",Q),dt=L.block();dt("if(",wt,"){",G,".enable(",gt,")}else{",G,".disable(",gt,")}",U,".",Q,"=",wt,";"),$(dt),E("if(",wt,"!==",U,".",Q,"){",dt,"}")}),Object.keys(zt).forEach(function(Q){var gt=zt[Q],wt=St[Q],dt,Ft,Ge=L.block();if(Ge(G,".",gt,"("),kn(wt)){var po=wt.length;dt=L.global.def(I,".",Q),Ft=L.global.def(U,".",Q),Ge(Ee(po,function(Ae){return dt+"["+Ae+"]"}),");",Ee(po,function(Ae){return Ft+"["+Ae+"]="+dt+"["+Ae+"];"}).join("")),E("if(",Ee(po,function(Ae){return dt+"["+Ae+"]!=="+Ft+"["+Ae+"]"}).join("||"),"){",Ge,"}")}else dt=V.def(I,".",Q),Ft=V.def(U,".",Q),Ge(dt,");",U,".",Q,"=",dt,";"),E("if(",dt,"!==",Ft,"){",Ge,"}");$(Ge)}),L.compile()}(),compile:_o}}function k4(){return{vaoCount:0,bufferCount:0,elementsCount:0,framebufferCount:0,shaderCount:0,textureCount:0,cubeCount:0,renderbufferCount:0,maxTextureUnits:0}}var S4=34918,E4=34919,um=35007,z4=function(b,z){if(!z.ext_disjoint_timer_query)return null;var C=[];function nt(){return C.pop()||z.ext_disjoint_timer_query.createQueryEXT()}function bt(Gt){C.push(Gt)}var tt=[];function lt(Gt){var ue=nt();z.ext_disjoint_timer_query.beginQueryEXT(um,ue),tt.push(ue),Pt(tt.length-1,tt.length,Gt)}function Ct(){z.ext_disjoint_timer_query.endQueryEXT(um)}function qt(){this.startQueryIndex=-1,this.endQueryIndex=-1,this.sum=0,this.stats=null}var Ut=[];function Dt(){return Ut.pop()||new qt}function Yt(Gt){Ut.push(Gt)}var ne=[];function Pt(Gt,ue,St){var me=Dt();me.startQueryIndex=Gt,me.endQueryIndex=ue,me.sum=0,me.stats=St,ne.push(me)}var Kt=[],Y=[];function ft(){var Gt,ue,St=tt.length;if(St!==0){Y.length=Math.max(Y.length,St+1),Kt.length=Math.max(Kt.length,St+1),Kt[0]=0,Y[0]=0;var me=0;for(Gt=0,ue=0;ue<tt.length;++ue){var Lt=tt[ue];z.ext_disjoint_timer_query.getQueryObjectEXT(Lt,E4)?(me+=z.ext_disjoint_timer_query.getQueryObjectEXT(Lt,S4),bt(Lt)):tt[Gt++]=Lt,Kt[ue+1]=me,Y[ue+1]=Gt}for(tt.length=Gt,Gt=0,ue=0;ue<ne.length;++ue){var Jt=ne[ue],zt=Jt.startQueryIndex,te=Jt.endQueryIndex;Jt.sum+=Kt[te]-Kt[zt];var We=Y[zt],ao=Y[te];ao===We?(Jt.stats.gpuTime+=Jt.sum/1e6,Yt(Jt)):(Jt.startQueryIndex=We,Jt.endQueryIndex=ao,ne[Gt++]=Jt)}ne.length=Gt}}return{beginQuery:lt,endQuery:Ct,pushScopeStats:Pt,update:ft,getNumPendingQueries:function(){return tt.length},clear:function(){C.push.apply(C,tt);for(var Gt=0;Gt<C.length;Gt++)z.ext_disjoint_timer_query.deleteQueryEXT(C[Gt]);tt.length=0,C.length=0},restore:function(){tt.length=0,C.length=0}}},A4=16384,T4=256,L4=1024,N4=34962,dm="webglcontextlost",pm="webglcontextrestored",vm=1,R4=2,O4=3;function mm(b,z){for(var C=0;C<b.length;++C)if(b[C]===z)return C;return-1}function C4(b){var z=fe(b);if(!z)return null;var C=z.gl,nt=C.getContextAttributes(),bt=C.isContextLost(),tt=Me(C,z);if(!tt)return null;var lt=Xt(),Ct=k4(),qt=tt.extensions,Ut=z4(C,qt),Dt=ut(),Yt=C.drawingBufferWidth,ne=C.drawingBufferHeight,Pt={tick:0,time:0,viewportWidth:Yt,viewportHeight:ne,framebufferWidth:Yt,framebufferHeight:ne,drawingBufferWidth:Yt,drawingBufferHeight:ne,pixelRatio:z.pixelRatio},Kt={},Y={elements:null,primitive:4,count:-1,offset:0,instances:-1},ft=yb(C,qt),Gt=Pb(C,Ct,z,St),ue=Vw(C,qt,ft,Ct,Gt);function St(Ve){return ue.destroyBuffer(Ve)}var me=Vb(C,qt,Gt,Ct),Lt=Qw(C,lt,Ct,z),Jt=kw(C,qt,ft,function(){We.procs.poll()},Pt,Ct,z),zt=Sw(C,qt,ft,Ct,z),te=jw(C,qt,ft,Jt,zt,Ct),We=M4(C,lt,qt,ft,Gt,me,Jt,te,Kt,ue,Lt,Y,Pt,Ut,z),ao=t4(C,te,We.procs.poll,Pt,nt,qt,ft),re=We.next,jt=C.canvas,kt=[],to=[],ho=[],ze=[z.onDestroy],wo=null;function so(){if(kt.length===0){Ut&&Ut.update(),wo=null;return}wo=mt.next(so),m0();for(var Ve=kt.length-1;Ve>=0;--Ve){var So=kt[Ve];So&&So(Pt,null,0)}C.flush(),Ut&&Ut.update()}function go(){!wo&&kt.length>0&&(wo=mt.next(so))}function Po(){wo&&(mt.cancel(so),wo=null)}function Nn(Ve){Ve.preventDefault(),bt=!0,Po(),to.forEach(function(So){So()})}function Xn(Ve){C.getError(),bt=!1,tt.restore(),Lt.restore(),Gt.restore(),Jt.restore(),zt.restore(),te.restore(),ue.restore(),Ut&&Ut.restore(),We.procs.refresh(),go(),ho.forEach(function(So){So()})}jt&&(jt.addEventListener(dm,Nn,!1),jt.addEventListener(pm,Xn,!1));function Eo(){kt.length=0,Po(),jt&&(jt.removeEventListener(dm,Nn),jt.removeEventListener(pm,Xn)),Lt.clear(),te.clear(),zt.clear(),Jt.clear(),me.clear(),Gt.clear(),ue.clear(),Ut&&Ut.clear(),ze.forEach(function(Ve){Ve()})}function qn(Ve){k(!!Ve,"invalid args to regl({...})"),k.type(Ve,"object","invalid args to regl({...})");function So(K){var G=e({},K);delete G.uniforms,delete G.attributes,delete G.context,delete G.vao,"stencil"in G&&G.stencil.op&&(G.stencil.opBack=G.stencil.opFront=G.stencil.op,delete G.stencil.op);function I(U){if(U in G){var N=G[U];delete G[U],Object.keys(N).forEach(function(P){G[U+"."+P]=N[P]})}}return I("blend"),I("depth"),I("cull"),I("stencil"),I("polygonOffset"),I("scissor"),I("sample"),"vao"in K&&(G.vao=K.vao),G}function Lo(K,G){var I={},U={};return Object.keys(K).forEach(function(N){var P=K[N];if(J.isDynamic(P)){U[N]=J.unbox(P,N);return}else if(G&&Array.isArray(P)){for(var A=0;A<P.length;++A)if(J.isDynamic(P[A])){U[N]=J.unbox(P,N);return}}I[N]=P}),{dynamic:U,static:I}}var En=Lo(Ve.context||{},!0),ca=Lo(Ve.uniforms||{},!0),qs=Lo(Ve.attributes||{},!1),O=Lo(So(Ve),!1),at={gpuTime:0,cpuTime:0,count:0},Z=We.compile(O,qs,ca,En,at),_e=Z.draw,_o=Z.batch,L=Z.scope,E=[];function $(K){for(;E.length<K;)E.push(null);return E}function V(K,G){var I;if(bt&&k.raise("context lost"),typeof K=="function")return L.call(this,null,K,0);if(typeof G=="function")if(typeof K=="number")for(I=0;I<K;++I)L.call(this,null,G,I);else if(Array.isArray(K))for(I=0;I<K.length;++I)L.call(this,K[I],G,I);else return L.call(this,K,G,0);else if(typeof K=="number"){if(K>0)return _o.call(this,$(K|0),K|0)}else if(Array.isArray(K)){if(K.length)return _o.call(this,K,K.length)}else return _e.call(this,K)}return e(V,{stats:at,destroy:function(){Z.destroy()}})}var nn=te.setFBO=qn({framebuffer:J.define.call(null,vm,"framebuffer")});function Rn(Ve,So){var Lo=0;We.procs.poll();var En=So.color;En&&(C.clearColor(+En[0]||0,+En[1]||0,+En[2]||0,+En[3]||0),Lo|=A4),"depth"in So&&(C.clearDepth(+So.depth),Lo|=T4),"stencil"in So&&(C.clearStencil(So.stencil|0),Lo|=L4),k(!!Lo,"called regl.clear with no buffer specified"),C.clear(Lo)}function Dn(Ve){if(k(typeof Ve=="object"&&Ve,"regl.clear() takes an object as input"),"framebuffer"in Ve)if(Ve.framebuffer&&Ve.framebuffer_reglType==="framebufferCube")for(var So=0;So<6;++So)nn(e({framebuffer:Ve.framebuffer.faces[So]},Ve),Rn);else nn(Ve,Rn);else Rn(null,Ve)}function Fn(Ve){k.type(Ve,"function","regl.frame() callback must be a function"),kt.push(Ve);function So(){var Lo=mm(kt,Ve);k(Lo>=0,"cannot cancel a frame twice");function En(){var ca=mm(kt,En);kt[ca]=kt[kt.length-1],kt.length-=1,kt.length<=0&&Po()}kt[Lo]=En}return go(),{cancel:So}}function s0(){var Ve=re.viewport,So=re.scissor_box;Ve[0]=Ve[1]=So[0]=So[1]=0,Pt.viewportWidth=Pt.framebufferWidth=Pt.drawingBufferWidth=Ve[2]=So[2]=C.drawingBufferWidth,Pt.viewportHeight=Pt.framebufferHeight=Pt.drawingBufferHeight=Ve[3]=So[3]=C.drawingBufferHeight}function m0(){Pt.tick+=1,Pt.time=uo(),s0(),We.procs.poll()}function Sn(){Jt.refresh(),s0(),We.procs.refresh(),Ut&&Ut.update()}function uo(){return(ut()-Dt)/1e3}Sn();function g0(Ve,So){k.type(So,"function","listener callback must be a function");var Lo;switch(Ve){case"frame":return Fn(So);case"lost":Lo=to;break;case"restore":Lo=ho;break;case"destroy":Lo=ze;break;default:k.raise("invalid event, must be one of frame,lost,restore,destroy")}return Lo.push(So),{cancel:function(){for(var En=0;En<Lo.length;++En)if(Lo[En]===So){Lo[En]=Lo[Lo.length-1],Lo.pop();return}}}}var Fo=e(qn,{clear:Dn,prop:J.define.bind(null,vm),context:J.define.bind(null,R4),this:J.define.bind(null,O4),draw:qn({}),buffer:function(Ve){return Gt.create(Ve,N4,!1,!1)},elements:function(Ve){return me.create(Ve,!1)},texture:Jt.create2D,cube:Jt.createCube,renderbuffer:zt.create,framebuffer:te.create,framebufferCube:te.createCube,vao:ue.createVAO,attributes:nt,frame:Fn,on:g0,limits:ft,hasExtension:function(Ve){return ft.extensions.indexOf(Ve.toLowerCase())>=0},read:ao,destroy:Eo,_gl:C,_refresh:Sn,poll:function(){m0(),Ut&&Ut.update()},now:uo,stats:Ct});return z.onDone(null,Fo),Fo}return C4})});var Ds=At((_z,Fm)=>{"use strict";var Ma=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],ka=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],la=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],Qf=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2],dl=(t,e)=>[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]],ku=t=>Math.hypot(t[0],t[1],t[2]),Ar=t=>{let e=ku(t)||1;return[t[0]/e,t[1]/e,t[2]/e]};function Wi(t,e){let o=t.length-1,r=Math.min(Math.max(e,0),1)*o,n=Math.min(o-1,Math.floor(r)),a=r-n,s=t[Math.max(0,n-1)],i=t[n],c=t[n+1],h=t[Math.min(o,n+2)],l=[0,0,0];for(let d=0;d<3;d++)l[d]=.5*(2*i[d]+(-s[d]+c[d])*a+(2*s[d]-5*i[d]+4*c[d]-h[d])*a*a+(-s[d]+3*i[d]-3*c[d]+h[d])*a*a*a);return l}function Y4(t,e){return Wi(t.map(o=>[o,0,0]),e)[0]}function K4(t,e,o,r){let n={curMat:[0,0,0]},s={r:[1,0,0,0,1,0,0,0,1],t:[0,0,0],s:1},i=[];n.save=()=>{i.push({r:s.r.slice(),t:s.t.slice(),s:s.s})},n.restore=()=>{s=i.pop()};let c=(u,p)=>{let f=new Array(9);for(let v=0;v<3;v++)for(let m=0;m<3;m++)f[v*3+m]=u[v*3]*p[m]+u[v*3+1]*p[3+m]+u[v*3+2]*p[6+m];return f},h=u=>[s.r[0]*u[0]+s.r[1]*u[1]+s.r[2]*u[2],s.r[3]*u[0]+s.r[4]*u[1]+s.r[5]*u[2],s.r[6]*u[0]+s.r[7]*u[1]+s.r[8]*u[2]];n.translate=(u,p,f)=>{let v=h([u,p,f]);s.t=[s.t[0]+v[0]*s.s,s.t[1]+v[1]*s.s,s.t[2]+v[2]*s.s]},n.scale=u=>{s.s*=u},n.rotateY=u=>{let p=Math.cos(u),f=Math.sin(u);s.r=c(s.r,[p,0,f,0,1,0,-f,0,p])},n.vert=(u,p,f)=>{let v=f||n.curMat,m=h(u),g=Ar(h(p));return t.push(m[0]*s.s+s.t[0],m[1]*s.s+s.t[1],m[2]*s.s+s.t[2]),e.push(g[0],g[1],g[2]),r.push(v[0],v[1],v[2]),t.length/3-1};let l=u=>[t[u*3],t[u*3+1],t[u*3+2]],d=u=>[e[u*3],e[u*3+1],e[u*3+2]];return n.tri=(u,p,f)=>{let v=l(u),m=dl(Ma(l(p),v),Ma(l(f),v)),g=ka(ka(d(u),d(p)),d(f));Qf(m,g)<0?o.push(u,f,p):o.push(u,p,f)},n.box=(u,p,f,v,m,g,x)=>{let y=[[[u,p,f],[v,p,f],[u,m,f],[v,m,f],[0,0,-1]],[[v,p,g],[u,p,g],[v,m,g],[u,m,g],[0,0,1]],[[u,p,g],[u,p,f],[u,m,g],[u,m,f],[-1,0,0]],[[v,p,f],[v,p,g],[v,m,f],[v,m,g],[1,0,0]],[[u,m,f],[v,m,f],[u,m,g],[v,m,g],[0,1,0]],[[u,p,g],[v,p,g],[u,p,f],[v,p,f],[0,-1,0]]];for(let w of y){let M=n.vert(w[0],w[4],x),_=n.vert(w[1],w[4],x),S=n.vert(w[2],w[4],x),R=n.vert(w[3],w[4],x);n.tri(M,_,S),n.tri(_,R,S)}},n.surface=(u,p,f,v)=>{v=v||{};let m=.001,g=M=>Math.min(1,Math.max(0,M)),x=[],y=[];for(let M=0;M<=p;M++){let _=[],S=[];for(let R=0;R<=f;R++){let T=M/p,H=R/f,q=u(T,H),W=Math.min(1-m,Math.max(m,T)),F=v.wrapV?H:Math.min(1-m,Math.max(m,H)),j=Ma(u(g(W+m),F),u(g(W-m),F)),pt=v.wrapV?F+m:g(F+m),Ht=v.wrapV?F-m:g(F-m),Nt=Ma(u(W,pt),u(W,Ht)),xt=dl(j,Nt);ku(xt)<1e-14&&(xt=v.inside?Ma(q,v.inside(T,H)):[0,1,0]),xt=Ar(xt),v.inside&&Qf(xt,Ma(q,v.inside(T,H)))<0&&(xt=la(xt,-1));let ot=v.mat?v.mat(T,H,q):null;_.push(n.vert(q,xt,ot)),v.double&&S.push(n.vert(q,la(xt,-1),ot))}x.push(_),y.push(S)}let w=M=>{for(let _=0;_<p;_++)for(let S=0;S<f;S++){let R=M[_][S],T=M[_+1][S],H=M[_][S+1],q=M[_+1][S+1];n.tri(R,T,H),n.tri(T,q,H)}};w(x),v.double&&w(y)},n.ellipsoid=(u,p,f,v,m)=>{m=m||{};let g=m.warp||null;n.surface((x,y)=>{let w=x*Math.PI,M=y*Math.PI*2,_=g?g(x,y):1;return[u[0]+p[0]*_*Math.sin(w)*Math.cos(M),u[1]+p[1]*_*Math.cos(w),u[2]+p[2]*_*Math.sin(w)*Math.sin(M)]},f||10,v||14,{wrapV:!0,inside:()=>u,mat:m.mat})},n.tube=(u,p,f,v,m)=>{m=m||{};let g=40,x=[],y=null;for(let _=0;_<=g;_++){let S=_/g,R=Wi(u,Math.max(0,S-.01)),T=Wi(u,Math.min(1,S+.01)),H=Ar(Ma(T,R)),q;if(y)q=Ar(Ma(y,la(H,Qf(y,H))));else{let W=Math.abs(H[1])<.9?[0,1,0]:[1,0,0];q=Ar(dl(H,W))}x.push({N:q,B:Ar(dl(H,q))}),y=q}let w=_=>{let S=Math.min(Math.max(_,0),1)*g,R=Math.min(g-1,Math.floor(S)),T=S-R,H=x[R],q=x[R+1];return{N:Ar(ka(la(H.N,1-T),la(q.N,T))),B:Ar(ka(la(H.B,1-T),la(q.B,T)))}},M=m.squash||[1,1];n.surface((_,S)=>{let R=Wi(u,_),T=w(_),H=p(_),q=S*Math.PI*2;return ka(R,ka(la(T.N,Math.cos(q)*H*M[0]),la(T.B,Math.sin(q)*H*M[1])))},f||12,v||8,{wrapV:!0,inside:_=>Wi(u,_),mat:m.mat})},n.lathe=(u,p,f,v,m)=>{m=m||{};let g=[];for(let x=0;x<u.length-1;x++){let y=u[x+1][0]-u[x][0],w=u[x+1][1]-u[x][1];g.push(Ar([w,-y,0]))}for(let x=0;x<u.length-1;x++){let y=u[x],w=u[x+1],M=x===0||y[2]===1,_=x===u.length-2||w[2]===1,S=M?g[x]:Ar(ka(g[x-1],g[x])),R=_?g[x]:Ar(ka(g[x],g[x+1])),T=[],H=[];for(let q=0;q<=v;q++){let W=q/v*Math.PI*2,F=Math.cos(W),j=Math.sin(W),pt=m.mat?m.mat(W,y[1]):null,Ht=m.mat?m.mat(W,w[1]):null;T.push(n.vert([p+y[0]*F,y[1],f+y[0]*j],[S[0]*F,S[1],S[0]*j],pt)),H.push(n.vert([p+w[0]*F,w[1],f+w[0]*j],[R[0]*F,R[1],R[0]*j],Ht))}for(let q=0;q<v;q++)n.tri(T[q],T[q+1],H[q]),n.tri(T[q+1],H[q+1],H[q])}},n}Fm.exports={createBuilder:K4,catmull:Wi,curve1:Y4,sub:Ma,add:ka,mul:la,dot:Qf,cross:dl,norm:Ar,len:ku}});var Bm=At((Mz,Um)=>{"use strict";var{norm:Zf,add:Jf,mul:Wa,sub:Q4,cross:Gm}=Ds(),Hm=Math.PI*2,Z4=(t,e,o)=>{let r=Math.min(1,Math.max(0,(o-t)/(e-t)));return r*r*(3-2*r)};function J4(t){let e=t>>>0;return()=>{e|=0,e=e+1831565813|0;let o=Math.imul(e^e>>>15,1|e);return o=o+Math.imul(o^o>>>7,61|o)^o,((o^o>>>14)>>>0)/4294967296}}function t6(t,e,o,r,n,a){let s=(u,p)=>[7,u*a,p];t.curMat=[0,0,0],t.box(e-a*1.36,r,o-a*1.36,e+a*1.36,r+.22,o+a*1.36),t.lathe([[a*1.24,r+.22,1],[a*1.3,r+.27],[a*1.31,r+.32],[a*1.26,r+.37,1],[a*1.1,r+.4],[a*1.14,r+.44,1],[a*1.18,r+.47],[a*1.1,r+.52,1],[a*.96,r+.55]],e,o,56,{mat:s});let i=r+.55,c=n-i,h=20,l=6,d=a*.075;return t.surface((u,p)=>{let f=i+u*c,v=a*(.96-.12*u),m=p*Hm,g=p*h%1,x=v-d*4*g*(1-g);return[e+x*Math.cos(m),f,o+x*Math.sin(m)]},10,h*l,{wrapV:!0,inside:u=>[e,i+u*c,o],mat:(u,p)=>[7,p*Hm*a,i+u*c]}),t.lathe([[a*.8,n-.02,1],[a*.9,n+.02],[a*.9,n+.07,1],[a*.82,n+.09,1],[a*.86,n+.13],[a*1.06,n+.2],[a*1.22,n+.28],[a*1.28,n+.33,1]],e,o,56,{mat:s}),t.curMat=[0,0,0],t.box(e-a*1.42,n+.33,o-a*1.42,e+a*1.42,n+.53,o+a*1.42),n+.53}function e6(t,e,o){t.curMat=[1,0,0],t.lathe([[e*1.1,0,1],[e*1.1,o*.14,1],[e*1.04,o*.14,1],[e*1.04,o*.2],[e*.97,o*.26,1],[e*.95,o*.26,1],[e*.95,o*.8,1],[e*.98,o*.8,1],[e*1.03,o*.86],[e*1.05,o*.92,1],[e*1.05,o,1],[e*.5,o,1],[0,o]],0,0,72)}function o6(t,e,o,r,n){t.save(),t.translate(e,0,o),e6(t,r,n),t.restore()}function n6(t,e,o,r,n,a){let s=J4(r),i=a?Zf([a[0],0,a[1]]):null;t.save(),t.translate(e,0,o),t.scale(n||1),t.curMat=[3,0,0],t.lathe([[.17,0,1],[.2,.02],[.28,.13],[.36,.3],[.395,.47],[.38,.62],[.32,.74],[.29,.8],[.292,.82,1],[.325,.84],[.335,.88,1],[.3,.905,1],[.275,.895,1],[.272,.85]],0,0,48),t.curMat=[5,0,0],t.lathe([[.272,.85,1],[.1,.868],[0,.872]],0,0,24);let c=11,h=.86;for(let l=0;l<c;l++){let d=l>=c-2,u=l*2.399963+s()*.5,p=[Math.cos(u),0,Math.sin(u)],f=[-Math.sin(u),0,Math.cos(u)],v=l*.618%1,m=d?.06+s()*.06:.12+.62*v,g=1;if(i){let xt=p[0]*i[0]+p[2]*i[2];g=.25+.75*Z4(-.7,.5,xt),m*=g}let x=d?1.1+s()*.25:.85+.55*(1-v*.55)+s()*.15,y=d?1+s()*.2:.95+s()*.28,w=d?.055:.215+s()*.05,M=.04+s()*.05,_=[p[0]*M,h,p[2]*M],S=[_[0]+p[0]*Math.sin(m)*x*.92,_[1]+Math.cos(m)*x,_[2]+p[2]*Math.sin(m)*x*.92],R=[_[0]+p[0]*Math.sin(m*.5)*x*.45,_[1]+x*.5,_[2]+p[2]*Math.sin(m*.5)*x*.45];t.curMat=[4,0,0],t.tube([_,R,S],xt=>.02-.008*xt,8,7);let T=24,H=m*.9+.05,q=m+(d?.12:(.95+.45*v)*(.35+.65*g)),W=[S],F=[],j=S;for(let xt=0;xt<T;xt++){let ot=xt/T,Bt=H+(q-H)*ot*ot,Se=[p[0]*Math.sin(Bt),Math.cos(Bt),p[2]*Math.sin(Bt)];F.push(Se),j=Jf(j,Wa(Se,y/T)),W.push(j)}F.push(F[F.length-1]);let pt=xt=>{let ot=xt*T,Bt=Math.min(T-1,Math.floor(ot)),Se=ot-Bt;return Jf(Wa(W[Bt],1-Se),Wa(W[Bt+1],Se))},Ht=xt=>{let ot=xt*T,Bt=Math.min(T,Math.floor(ot)),Se=Math.min(T,Bt+1),be=ot-Bt;return Zf(Jf(Wa(F[Bt],1-be),Wa(F[Se],be)))},Nt=(s()-.5)*.5;t.curMat=[2,0,0],t.surface((xt,ot)=>{let Bt=ot*2-1,Se=pt(xt),be=Ht(xt),Ke=Nt*xt,$e=Jf(Wa(f,Math.cos(Ke)),Wa(Gm(be,f),Math.sin(Ke)));$e=Zf(Q4($e,Wa(be,$e[0]*be[0]+$e[1]*be[1]+$e[2]*be[2])));let no=Zf(Gm($e,be)),rt=w*Math.pow(Math.sin(Math.PI*Math.pow(xt,.72)),.85),yt=.3*rt*Math.abs(Bt)+.012*Math.sin(xt*40+Bt*2)*Math.abs(Bt)*(d?0:1),it=-.1*rt*Bt*Bt*Bt*Bt,Mt=yt+it;return[Se[0]+$e[0]*Bt*rt+no[0]*Mt,Se[1]+$e[1]*Bt*rt+no[1]*Mt,Se[2]+$e[2]*Bt*rt+no[2]*Mt]},14,8,{double:!0,mat:(xt,ot)=>[2,ot*2-1,xt]})}t.restore()}Um.exports={addFlutedColumn:t6,addStatue:o6,addPlant:n6}});var Va=At((kz,Xm)=>{"use strict";var $t={xc:7,r:2.5,spring:4.7};$t.x0=$t.xc-$t.r;$t.x1=$t.xc+$t.r;$t.top=$t.spring+$t.r;var G0=.06,ln=.1,jm=.08,th=$t.r,eh=[$t.x0+th/3,$t.x0+2*th/3,$t.xc+th/3,$t.xc+2*th/3],Vi=.28,Su=[.95,1.65,2.35,3.05,3.75],Wm=[1.05,1.8],pl=[8,0,0],hr=[0,0,0];function Tr(t,e,o,r,n,a,s,i){t.box(Math.min(e,n),Math.min(o,a),Math.min(r,s),Math.max(e,n),Math.max(o,a),Math.max(r,s),i)}function Xi(t,e,o,r,n,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),h=t.vert(r,a,s),l=t.vert(n,a,s);t.tri(i,c,h),t.tri(i,h,l)}function oh(t,e,o,r,n,a,s=48,i=0,c=Math.PI){let h=(l,d,u)=>[$t.xc+d*Math.cos(l),$t.spring+d*Math.sin(l),u];for(let l=0;l<s;l++){let d=i+(c-i)*l/s,u=i+(c-i)*(l+1)/s,p=(d+u)/2;Xi(t,h(d,e,n),h(u,e,n),h(u,o,n),h(d,o,n),[0,0,1],a),Xi(t,h(d,o,r),h(u,o,r),h(u,e,r),h(d,e,r),[0,0,-1],a),Xi(t,h(d,e,r),h(u,e,r),h(u,e,n),h(d,e,n),[-Math.cos(p),-Math.sin(p),0],a),Xi(t,h(u,o,r),h(d,o,r),h(d,o,n),h(u,o,n),[Math.cos(p),Math.sin(p),0],a)}}function r6(t){let r=a=>[$t.xc+$t.r*Math.cos(a),$t.spring+$t.r*Math.sin(a)],n=a=>{let s=Math.cos(a),i=Math.sin(a),c=Math.abs(s)>1e-6?$t.r/Math.abs(s):1/0,h=i>1e-6?(8-$t.spring)/i:1/0,l=Math.min(c,h);return[Math.min($t.x1,Math.max($t.x0,$t.xc+s*l)),Math.min(8,$t.spring+i*l)]};for(let a=0;a<48;a++){let s=Math.PI*a/48,i=Math.PI*(a+1)/48,c=r(s),h=r(i),l=n(s),d=n(i);for(let[p,f]of[[.35,1],[-.35,-1]])Xi(t,[c[0],c[1],p],[h[0],h[1],p],[d[0],d[1],p],[l[0],l[1],p],[0,0,f],hr);let u=(s+i)/2;Xi(t,[c[0],c[1],-.35],[h[0],h[1],-.35],[h[0],h[1],.35],[c[0],c[1],.35],[-Math.cos(u),-Math.sin(u),0],hr)}}function a6(t){Tr(t,-.35,0,-.35,$t.x0,8,.35,hr),Tr(t,$t.x1,0,-.35,14+.35,8,.35,hr),r6(t),Vm(t)}function Vm(t){Tr(t,$t.x0-.32,.3,.35,$t.x0,$t.spring,.35+.07,hr),Tr(t,$t.x1,.3,.35,$t.x1+.32,$t.spring,.35+.07,hr),Tr(t,$t.x0-.32-.05,0,.35,$t.x0,.3,.35+.07+.04,hr),Tr(t,$t.x1,0,.35,$t.x1+.32+.05,.3,.35+.07+.04,hr),Tr(t,$t.x0-.32-.06,$t.spring-.12,.35,$t.x0,$t.spring,.35+.07+.05,hr),Tr(t,$t.x1,$t.spring-.12,.35,$t.x1+.32+.06,$t.spring,.35+.07+.05,hr),oh(t,$t.r,$t.r+.32,.35,.35+.07,hr),oh(t,$t.r+.32,$t.r+.32+.06,.35,.35+.07+.03,hr),Tr(t,$t.xc-.22,$t.top-.08,.35,$t.xc+.22,$t.top+.32+.12,.35+.07+.06,hr)}function s6(t,e){e=e||"all";let o=e==="all",r=o||e==="fixed",n=-jm/2,a=jm/2,s=(u,p,f,v,m=0)=>Tr(t,u-m,p,n,f+m,v,a,pl),i=u=>$t.spring+Math.sqrt(Math.max(0,$t.r*$t.r-(u-$t.xc)*(u-$t.xc))),c=e==="right"?$t.xc:$t.x0,h=e==="left"?$t.xc:$t.x1,l=u=>o||e==="left"&&u<$t.xc||e==="right"&&u>$t.xc,d=o?null:$t.spring-.06;if(r){s($t.x0,0,$t.x0+ln,$t.spring),s($t.x1-ln,0,$t.x1,$t.spring),oh(t,$t.r-ln,$t.r,n,a,pl,64),s($t.x0,0,$t.x1,.05),s($t.x0,$t.spring-.06,$t.x1,$t.spring+.06);for(let u of Wm)oh(t,u-G0/2,u+G0/2,n,a,pl,48)}if(o){s($t.x0,0,$t.x1,Vi),s($t.xc-ln/2,0,$t.xc+ln/2,$t.top-ln*.5);for(let u of eh)s(u-G0/2,Vi,u+G0/2,i(u)-ln*.5);for(let u of Su)s($t.x0,u-G0/2,$t.x1,u+G0/2)}else if(e==="fixed"){s($t.xc-ln/2,$t.spring+.06,$t.xc+ln/2,$t.top-ln*.5);for(let u of eh)s(u-G0/2,$t.spring+.06,u+G0/2,i(u)-ln*.5)}else{let u=e==="left"?$t.x0+ln:$t.x1-ln;s(Math.min(u,u+(e==="left"?ln*.8:-ln*.8)),.05,Math.max(u,u+(e==="left"?ln*.8:-ln*.8)),d),s(c,.05,h,Vi),s(c,d-.07,h,d);let p=e==="left"?$t.xc-ln/2:$t.xc;s(p,.05,p+ln/2,d);for(let f of eh)l(f)&&s(f-G0/2,Vi,f+G0/2,d-.07);for(let f of Su)s(c,f-G0/2,h,f+G0/2)}for(let u of[-1,1]){let p=$t.xc+u*.16;l(p)&&(Tr(t,p-.02,1.05,a,p+.02,1.13,a+.06,pl),Tr(t,p-(u>0?0:.14),1.07,a+.05,p+(u>0?.14:0),1.11,a+.08,pl))}}function i6(t){t=t||"all";let e=[],o=0,{x0:r,x1:n,xc:a,r:s,spring:i}=$t;if(t!=="fixed"){let h=t==="right"?a:r,l=t==="left"?a:n;if(e.push([h,0,o],[l,0,o],[l,i,o],[h,0,o],[l,i,o],[h,i,o]),t!=="all")return e}let c=48;for(let h=0;h<c;h++){let l=Math.PI*h/c,d=Math.PI*(h+1)/c;e.push([a,i,o],[a+s*Math.cos(l),i+s*Math.sin(l),o],[a+s*Math.cos(d),i+s*Math.sin(d),o])}return e}var jo=t=>t.toFixed(4);function c6(){let t=eh.map(r=>`vb = max(vb, barCover(abs(q.x - ${jo(r)}), ${jo(G0/2)}, soft));`).join(`
		`),e=Su.map(r=>`hb = max(hb, barCover(abs(q.y - ${jo(r)}), ${jo(G0/2)}, soft));`).join(`
		`),o=Wm.map(r=>`ab = max(ab, barCover(abs(rr - ${jo(r)}), ${jo(G0/2)}, soft));`).join(`
		`);return`
	float barCover(float d, float hw, float soft) {
		return 1.0 - smoothstep(hw - soft, hw + soft, d);
	}

	// how open the doorway is at a point (x, y) on a plane, 0..1
	float doorOpen(vec2 q, float soft) {
		float side = smoothstep(${jo($t.x0)} - soft, ${jo($t.x0)} + soft, q.x)
		           * (1.0 - smoothstep(${jo($t.x1)} - soft, ${jo($t.x1)} + soft, q.x));
		float above = smoothstep(-soft, soft, q.y);
		float rr = length(q - vec2(${jo($t.xc)}, ${jo($t.spring)}));
		float arch = q.y < ${jo($t.spring)} ? 1.0 : 1.0 - smoothstep(${jo($t.r)} - soft, ${jo($t.r)} + soft, rr);
		return side * above * arch;
	}

	// light that reaches floor point p through the door, 0..1
	float doorLight(vec3 p, vec3 toLight) {
		if (p.z < 0.3 || toLight.z > -0.01) return 0.0;
		// through the inner face of the wall
		float tIn = (${jo(.35)} - p.z) / toLight.z;
		float tMid = (0.0 - p.z) / toLight.z;
		float tOut = (${jo(-.35)} - p.z) / toLight.z;
		vec2 qIn = (p + toLight * tIn).xy;
		vec2 q = (p + toLight * tMid).xy;
		vec2 qOut = (p + toLight * tOut).xy;
		float dist = length(toLight * tMid);
		float soft = 0.006 + 0.016 * dist;
		float open = doorOpen(qIn, soft) * doorOpen(qOut, soft);
		if (open <= 0.0) return 0.0;

		// the frame: outer jambs, arched head, transom, rails, stiles, bars
		float rr = length(q - vec2(${jo($t.xc)}, ${jo($t.spring)}));
		float vb = barCover(abs(q.x - ${jo($t.xc)}), ${jo(ln/2)}, soft);
		${t}
		float hb = barCover(abs(q.y - ${jo($t.spring)}), 0.06, soft);
		hb = max(hb, 1.0 - smoothstep(${jo(Vi)} - soft, ${jo(Vi)} + soft, q.y));
		float hRows = 0.0;
		{
			float hb2 = 0.0;
			${e.replace(/hb = max\(hb,/g,"hb2 = max(hb2,")}
			hRows = q.y < ${jo($t.spring)} ? hb2 : 0.0;
		}
		float ab = 0.0;
		${o}
		ab = q.y > ${jo($t.spring)} ? ab : 0.0;
		float frame = max(
			barCover(abs(q.x - ${jo($t.x0+ln/2)}), ${jo(ln/2)}, soft),
			barCover(abs(q.x - ${jo($t.x1-ln/2)}), ${jo(ln/2)}, soft));
		frame = q.y < ${jo($t.spring)} ? frame : barCover(abs(rr - ${jo($t.r-ln/2)}), ${jo(ln/2)}, soft);
		float cover = max(max(max(vb, hb), max(hRows, ab)), frame);
		return open * (1.0 - cover * 0.92);
	}`}Xm.exports={addEntranceWall:a6,addSurround:Vm,addFrames:s6,glassPanes:i6,doorLightGLSL:c6,DOOR:$t,WALL:.35}});var Ki=At((Sz,t2)=>{"use strict";var Gs=1.1583333333333334,Hs=(13.05-8*.16)/9,zu=Gs+.16,Au=Hs+.16,Ea=14/2-7.75/2,ur=15,vl=Ea+7.75,Sa=ur+13.05,dr=.3,za={y:8+.18,inset:.15},Fs={y:8+.36,inset:dr},Tu=8+.2,ml=8+.62,Lu=8+.9,Nu=.016,Zm=.28,Jm=.66,l6=(()=>{let t=[-.15,1,.3],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),f6=(()=>{let t=[.42,1,-.32],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),h6=[9,0,0],x0=[10,0,0];function Yi(t,e,o,r,n,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),h=t.vert(r,a,s),l=t.vert(n,a,s);t.tri(i,c,h),t.tri(i,h,l)}function H0(t,e,o,r,n,a,s){Yi(t,[e,a,o],[r,a,o],[r,a,n],[e,a,n],[0,-1,0],s)}function Eu(t,e,o,r,n,a,s,i){Yi(t,[e,a,o],[r,a,o],[r,s,o],[e,s,o],[0,0,1],i),Yi(t,[r,a,n],[e,a,n],[e,s,n],[r,s,n],[0,0,-1],i),Yi(t,[e,a,n],[e,a,o],[e,s,o],[e,s,n],[1,0,0],i),Yi(t,[r,a,o],[r,a,n],[r,s,n],[r,s,o],[-1,0,0],i)}function Ym(t,e,o,r,n){H0(t,e[0],e[1],e[2],o[1],r,n),H0(t,e[0],o[3],e[2],e[3],r,n),H0(t,e[0],o[1],o[0],o[3],r,n),H0(t,o[2],o[1],e[2],o[3],r,n)}var Km=t=>Ea+t*zu,Qm=t=>ur+t*Au;function u6(t,e,o=48){let r=[Ea-dr,ur-dr,vl+dr,Sa+dr],n=(h,l)=>[h[0]+l,h[1]+l,h[2]-l,h[3]-l],a=n(r,za.inset),s=n(r,Fs.inset);H0(t,0,0,14,r[1],8,e),H0(t,0,r[3],14,o,8,e),H0(t,0,r[1],r[0],r[3],8,e),H0(t,r[2],r[1],14,r[3],8,e);let i=.06,c=.06;t.box(r[0]-i,8-c,r[1]-i,r[2]+i,8,r[1],x0),t.box(r[0]-i,8-c,r[3],r[2]+i,8,r[3]+i,x0),t.box(r[0]-i,8-c,r[1],r[0],8,r[3],x0),t.box(r[2],8-c,r[1],r[2]+i,8,r[3],x0),Eu(t,...r.slice(0,2),...r.slice(2),8,za.y,x0),Ym(t,r,a,za.y,x0),Eu(t,...a.slice(0,2),...a.slice(2),za.y,Fs.y,x0),Ym(t,a,s,Fs.y,x0);for(let h=1;h<6;h++){let l=Km(h)-.16;t.box(l,Tu,ur,l+.16,Fs.y,Sa,x0)}for(let h=1;h<9;h++){let l=Qm(h)-.16;t.box(Ea,Tu,l,vl,Fs.y,l+.16,x0)}for(let h=0;h<9;h++)for(let l=0;l<6;l++){let d=Km(l),u=Qm(h);Eu(t,d,u,d+Gs,u+Hs,Fs.y,Lu,x0),H0(t,d,u,d+Gs,u+Hs,Lu,h6),d6(t,d+Gs/2,u+Hs/2,Gs/2,Hs/2)}}function d6(t,e,o,r,n){let a=ml,s=Nu;H0(t,e-r,o-s,e+r,o+s,a,x0),H0(t,e-s,o-n,e+s,o+n,a,x0);for(let i of[1,-1]){let c=Math.hypot(r,n),h=r/c,l=i*n/c,d=-l*s,u=h*s;Yi(t,[e-h*c+d,a,o-l*c+u],[e+h*c+d,a,o+l*c+u],[e+h*c-d,a,o+l*c-u],[e-h*c-d,a,o-l*c-u],[0,-1,0],x0)}for(let i of[Zm,Jm]){let c=i*r,h=i*n;H0(t,e-c-s,o-h-s,e+c+s,o-h+s,a,x0),H0(t,e-c-s,o+h-s,e+c+s,o+h+s,a,x0),H0(t,e-c-s,o-h+s,e-c+s,o+h-s,a,x0),H0(t,e+c-s,o-h+s,e+c+s,o+h-s,a,x0)}}var co=t=>t.toFixed(4);function p6(){return`
	// by day the sun, high and a little towards the entrance; by night
	// the moon, lower and from the other side, so its squares of light
	// reach across the floor to the foot of the wall. (When the light is
	// switched, the squares slide from one to the other.)
	const vec3 SKY_SUN_DAY = vec3(${l6.map(co).join(", ")});
	const vec3 SKY_MOON = vec3(${f6.map(co).join(", ")});
	vec3 skySun() { return normalize(mix(SKY_SUN_DAY, SKY_MOON, night)); }
	#define SKY_SUN skySun()

	float rectOpen(vec2 q, vec4 r, float soft) {
		vec2 lo = smoothstep(r.xy - soft, r.xy + soft, q);
		vec2 hi = 1.0 - smoothstep(r.zw - soft, r.zw + soft, q);
		return lo.x * lo.y * hi.x * hi.y;
	}

	// inside a pane (not on a beam)? 0..1
	float paneOpen(vec2 q, float soft) {
		vec2 rel = q - vec2(${co(Ea)}, ${co(ur)});
		vec2 pitch = vec2(${co(zu)}, ${co(Au)});
		vec2 cell = floor(rel / pitch);
		if (cell.x < 0.0 || cell.y < 0.0 || cell.x > ${co(5)} || cell.y > ${co(8)}) return 0.0;
		vec2 loc = rel - cell * pitch;
		return rectOpen(loc, vec4(0.0, 0.0, ${co(Gs)}, ${co(Hs)}), soft);
	}

	float barCov(float d, float soft) {
		return 1.0 - smoothstep(${co(Nu)} - soft, ${co(Nu)} + soft, d);
	}

	// sunlight reaching point p through the skylight, 0..1
	float skylightAt(vec3 p) {
		if (p.y > ${co(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q0 = (p + L * ((${co(8)} - p.y) / L.y)).xz;
		vec2 q1 = (p + L * ((${co(za.y)} - p.y) / L.y)).xz;
		vec2 qb = (p + L * ((${co(Tu)} - p.y) / L.y)).xz;
		vec2 q2 = (p + L * ((${co(Fs.y)} - p.y) / L.y)).xz;
		float tG = (${co(ml)} - p.y) / L.y;
		vec2 qg = (p + L * tG).xz;
		vec2 qt = (p + L * ((${co(Lu)} - p.y) / L.y)).xz;
		float soft = 0.004 + 0.007 * tG;
		float open = rectOpen(q0, vec4(${co(Ea-dr)}, ${co(ur-dr)}, ${co(vl+dr)}, ${co(Sa+dr)}), soft)
		           * rectOpen(q1, vec4(${co(Ea-dr+za.inset)}, ${co(ur-dr+za.inset)}, ${co(vl+dr-za.inset)}, ${co(Sa+dr-za.inset)}), soft)
		           * paneOpen(qb, soft) * paneOpen(q2, soft) * paneOpen(qt, soft);
		if (open <= 0.0) return 0.0;
		// the glazing, measured from the centre of this pane
		vec2 rel = qg - vec2(${co(Ea)}, ${co(ur)});
		vec2 pitch = vec2(${co(zu)}, ${co(Au)});
		vec2 paneHalf = vec2(${co(Gs/2)}, ${co(Hs/2)});
		vec2 c = rel - floor(rel / pitch) * pitch - paneHalf;
		vec2 ac = abs(c);
		vec2 an = ac / paneHalf;                       // 0 at the centre, 1 at the pane's edge
		float hm = min(paneHalf.x, paneHalf.y);
		float ring = max(an.x, an.y);
		float cover = max(barCov(ac.x, soft), barCov(ac.y, soft));
		cover = max(cover, barCov(abs(an.x - an.y) * hm * 0.7071, soft));
		cover = max(cover, barCov(abs(ring - ${co(Zm)}) * hm, soft));
		cover = max(cover, barCov(abs(ring - ${co(Jm)}) * hm, soft));
		return open * (1.0 - cover * 0.9);
	}

	// the same light for the beams in the air: the whole opening glows a
	// little, and the panes and bars show in it, softly
	float skylightVol(vec3 p) {
		if (p.y > ${co(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q = (p + L * ((${co(ml)} - p.y) / L.y)).xz;
		float open = rectOpen(q, vec4(${co(Ea)}, ${co(ur)}, ${co(vl)}, ${co(Sa)}), 0.25);
		if (open <= 0.0) return 0.0;
		return open * (0.13 + 0.87 * skylightAt(p));
	}

	// light thrown back up by the bright squares on the floor: strongest
	// on what stands beside them and faces them (the lower walls, the
	// pillars, the statues, the ceiling above), fading with distance
	float skylightBounce(vec3 p, vec3 n) {
		if (p.x > 14.2 || p.x < -0.4) return 0.0;
		vec3 L = SKY_SUN;
		vec2 c = vec2(${co(14/2)}, ${co((ur+Sa)/2)}) - L.xz * (${co(ml)} / L.y);
		vec2 d = max(abs(p.xz - c) - vec2(${co(7.75/2)}, ${co(13.05/2)}), 0.0);
		float fall = 1.0 / (1.0 + 0.09 * (dot(d, d) + p.y * p.y * 0.6));
		vec3 to = normalize(vec3(c.x, -0.4, c.y) - p);
		return fall * (0.3 + 0.7 * max(dot(n, to), 0.0));
	}

	// a soft daylight glow under the lantern
	float skylightGlow(vec3 p) {
		float z = smoothstep(${co(ur-3)}, ${co(ur+2)}, p.z)
		        * (1.0 - smoothstep(${co(Sa-2)}, ${co(Sa+3)}, p.z));
		float x = 1.0 - 0.35 * smoothstep(${co(7.75/2)}, ${co(14/2)}, abs(p.x - ${co(14/2)}));
		return z * x;
	}`}t2.exports={addSkylight:u6,skylightGLSL:p6,Z_START:ur,Z_END:Sa,GLASS_Y:ml,HEIGHT:8}});var S0=At((Ez,a2)=>{"use strict";var Zi=Va(),Pu=8,fn=.35,le={x0:13.65,x1:38.12,z0:41,z1:47.2,zc:44.1,hallEnd:50.65,spring:5.6,crown:Pu},e2=(le.z1-le.z0)/2,Ru=le.crown-le.spring,Cu=(Ru*Ru+e2*e2)/(2*Ru),$u=le.crown-Cu;function Qi(t){let e=t-le.zc;return $u+Math.sqrt(Math.max(0,Cu*Cu-e*e))}var Ze={first:17.43,pitch:4.4,count:5,halfW:1.2,sill:.75,spring:4.3},jr=Array.from({length:Ze.count},(t,e)=>Ze.first+e*Ze.pitch),n2=jr.slice(1).map(t=>t-Ze.pitch/2),v6=[jr[0],jr[2],jr[4]],rh=[jr[1],jr[3]],tr={r:1.3,sill:.62,spring:3.3},Yo=[0,0,0],gl=[11,0,0],Xa=[10,0,0],xl=[8,0,0];function i0(t,e,o,r,n,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),h=t.vert(r,a,s),l=t.vert(n,a,s);t.tri(i,c,h),t.tri(i,h,l)}function er(t,e,o,r,n,a,s,i){t.box(Math.min(e,n),Math.min(o,a),Math.min(r,s),Math.max(e,n),Math.max(o,a),Math.max(r,s),i)}function yl(t,e){let{u0:o,u1:r,w0:n,w1:a,top:s,holes:i,mat:c}=e,h=new Set([o,r]);for(let v of i){h.add(v.u0),h.add(v.u1);let m=Math.max(8,Math.ceil((v.u1-v.u0)/(v.step||.08)));for(let g=1;g<m;g++)h.add(v.u0+(v.u1-v.u0)*g/m)}for(let v of e.cuts||[])h.add(v);let l=e.topStep||.5;for(let v=o;v<r;v+=l)h.add(v);let d=[...h].filter(v=>v>=o-1e-9&&v<=r+1e-9).sort((v,m)=>v-m),u=(v,m)=>v.bot?v.bot(m):v.bottom,p=(v,m)=>{let g=s(v),x=m.map(M=>[Math.max(0,u(M,v)),Math.min(M.head(v),g)]).filter(M=>M[1]>M[0]).sort((M,_)=>M[0]-_[0]),y=[],w=0;for(let M of x)M[0]>w+1e-6&&y.push([w,M[0]]),w=Math.max(w,M[1]);return g>w+1e-6&&y.push([w,g]),y},f=(v,m,g)=>[v,m,g];for(let v=0;v<d.length-1;v++){let m=d[v],g=d[v+1],x=(m+g)/2,y=i.filter(T=>x>T.u0&&x<T.u1),w=y.length?Math.max(m,Math.max(...y.map(T=>T.u0))+1e-7):m,M=y.length?Math.min(g,Math.min(...y.map(T=>T.u1))-1e-7):g,_=p(w,y),S=p(M,y),R=Math.min(_.length,S.length);for(let T=0;T<R;T++){let[H,q]=_[T],[W,F]=S[T];q-H<1e-6&&F-W<1e-6||(i0(t,f(m,H,a),f(g,W,a),f(g,F,a),f(m,q,a),[0,0,1],c),e.frontOnly||i0(t,f(g,W,n),f(m,H,n),f(m,q,n),f(g,F,n),[0,0,-1],c))}}e.noEnds||(i0(t,f(o,0,n),f(o,0,a),f(o,s(o),a),f(o,s(o),n),[-1,0,0],c),i0(t,f(r,0,a),f(r,0,n),f(r,s(r),n),f(r,s(r),a),[1,0,0],c));for(let v of i){if(v.noReveal)continue;let m=v.mat||e.revealMat||c,g=Math.max(0,u(v,v.u0+1e-7)),x=Math.max(0,u(v,v.u1-1e-7)),y=Math.min(v.head(v.u0+1e-7),s(v.u0)),w=Math.min(v.head(v.u1-1e-7),s(v.u1));y>g+1e-6&&i0(t,f(v.u0,g,a),f(v.u0,g,n),f(v.u0,y,n),f(v.u0,y,a),[1,0,0],m),w>x+1e-6&&i0(t,f(v.u1,x,n),f(v.u1,x,a),f(v.u1,w,a),f(v.u1,w,n),[-1,0,0],m);let M=Math.max(8,Math.ceil((v.u1-v.u0)/(v.step||.06)));for(let _=0;_<M;_++){let S=v.u0+(v.u1-v.u0)*_/M,R=v.u0+(v.u1-v.u0)*(_+1)/M,T=Math.max(S,v.u0+1e-7),H=Math.min(R,v.u1-1e-7),q=Math.min(v.head(T),s(S)),W=Math.min(v.head(H),s(R));if(!(q>=s(S)-1e-6&&W>=s(R)-1e-6)){let pt=R-S,Ht=W-q,Nt=Math.hypot(pt,Ht)||1;i0(t,f(S,q,n),f(R,W,n),f(R,W,a),f(S,q,a),[Ht/Nt,-pt/Nt,0],m)}let F=u(v,T),j=u(v,H);if(F>1e-6||j>1e-6){let pt=R-S,Ht=j-F,Nt=Math.hypot(pt,Ht)||1;i0(t,f(R,j,n),f(S,F,n),f(S,F,a),f(R,j,a),[-Ht/Nt,pt/Nt,0],m)}}}}var Ou=(t,e,o)=>r=>{let n=r-t;return o+Math.sqrt(Math.max(0,e*e-n*n))};function m6(t,e){let o=tr.r,r=tr.sill,n=tr.spring,a=le.z0,s=24,i=(p,f,v)=>[e+Math.cos(p)*f,v,a-Math.sin(p)*f];for(let p=0;p<s;p++){let f=Math.PI*p/s,v=Math.PI*(p+1)/s,m=[-Math.cos(f),0,Math.sin(f)],g=[-Math.cos(v),0,Math.sin(v)],x=[t.vert(i(f,o,r),m,Yo),t.vert(i(v,o,r),g,Yo),t.vert(i(v,o,n),g,Yo),t.vert(i(f,o,n),m,Yo)];t.tri(x[0],x[1],x[2]),t.tri(x[0],x[2],x[3])}let c=12,h=(p,f)=>[e+Math.cos(p)*Math.cos(f)*o,n+Math.sin(f)*o,a-Math.sin(p)*Math.cos(f)*o],l=(p,f)=>[-Math.cos(p)*Math.cos(f),-Math.sin(f),Math.sin(p)*Math.cos(f)];for(let p=0;p<s;p++)for(let f=0;f<c;f++){let v=Math.PI*p/s,m=Math.PI*(p+1)/s,g=Math.PI/2*f/c,x=Math.PI/2*(f+1)/c,y=[t.vert(h(v,g),l(v,g),Xa),t.vert(h(m,g),l(m,g),Xa),t.vert(h(m,x),l(m,x),Xa),t.vert(h(v,x),l(v,x),Xa)];t.tri(y[0],y[1],y[2]),t.tri(y[0],y[2],y[3])}for(let p=1;p<8;p++){let f=Math.PI*p/8,v=[];for(let m=0;m<=10;m++){let g=Math.PI/2*m/10*.97;v.push(h(f,g).map((x,y)=>x-l(f,g)[y]*.02))}t.tube(v,m=>.035*(1-m*.6),12,6,{mat:()=>Xa})}let d=t.vert([e,r,a],[0,1,0],Yo);for(let p=0;p<s;p++){let f=Math.PI*p/s,v=Math.PI*(p+1)/s;t.tri(d,t.vert(i(f,o,r),[0,1,0],Yo),t.vert(i(v,o,r),[0,1,0],Yo))}er(t,e-o-.12,r-.1,a,e+o+.12,r+.02,a+.12,Yo),er(t,e-o-.16,r-.2,a,e+o+.16,r-.1,a+.07,Yo);let u=.16;for(let p=0;p<s;p++){let f=Math.PI*p/s,v=Math.PI*(p+1)/s,m=(g,x,y)=>[e+Math.cos(g)*x,n+Math.sin(g)*x,y];i0(t,m(f,o,a+.05),m(v,o,a+.05),m(v,o+u,a+.05),m(f,o+u,a+.05),[0,0,1],Yo),i0(t,m(f,o+u,a),m(v,o+u,a),m(v,o+u,a+.05),m(f,o+u,a+.05),[Math.cos((f+v)/2),Math.sin((f+v)/2),0],Yo),i0(t,m(f,o,a),m(v,o,a),m(v,o,a+.05),m(f,o,a+.05),[-Math.cos((f+v)/2),-Math.sin((f+v)/2),0],Yo)}for(let p of[-1,1]){let f=e+p*o,v=e+p*(o+u);er(t,f,r,a,v,n,a+.05,Yo),er(t,f-p*.02,n-.12,a,v+p*.06,n,a+.09,Yo)}er(t,e-.11,n+o-.04,a,e+.11,n+o+u+.1,a+.09,Yo),t.lathe([[.66,r,1],[.66,r+.06,1],[.62,r+.1],[.6,r+.3],[.64,r+.34,1],[.64,r+.4,1],[0,r+.4]],e,a-.62,40,{mat:()=>Yo})}var g6=tr.sill+.4,x6=le.z0-.62;function y6(t){i0(t,[14,0,le.z0-fn],[le.x1+fn,0,le.z0-fn],[le.x1+fn,0,le.z1+fn],[14,0,le.z1+fn],[0,1,0],Yo),t.curMat=gl,yl(t,{u0:14+fn,u1:le.x1+2*fn,w0:le.z0-2*fn,w1:le.z0,top:()=>le.spring,holes:rh.map(h=>({u0:h-tr.r,u1:h+tr.r,bottom:tr.sill,head:Ou(h,tr.r,tr.spring),noReveal:!0})),mat:gl,cuts:[le.x1]});for(let h of rh)m6(t,h);t.save(),t.translate(0,0,le.z1),t.rotateY(Math.PI),t.translate(-(le.x1+2*fn),0,-2*fn);let e=h=>le.x1+2*fn-h;yl(t,{u0:e(le.x1+2*fn),u1:e(13.65),w0:0,w1:2*fn,top:()=>le.spring,holes:jr.map(h=>({u0:e(h+Ze.halfW),u1:e(h-Ze.halfW),bottom:Ze.sill,head:Ou(e(h),Ze.halfW,Ze.spring)})),mat:gl,revealMat:Yo}),t.restore(),t.save(),t.translate(le.x1,0,0),t.rotateY(-Math.PI/2);let o=Zi.DOOR,r=le.zc,n=o.r;yl(t,{u0:le.z0-2*fn,u1:le.z1+2*fn,w0:-2*fn,w1:0,top:h=>h<le.z0||h>le.z1?le.spring:Qi(h),topStep:.15,holes:[{u0:r-n,u1:r+n,bottom:0,head:Ou(r,n,o.spring)}],mat:gl,revealMat:Yo}),t.restore(),t.save(),t.translate(14+fn,0,0),t.rotateY(-Math.PI/2),yl(t,{u0:le.z0,u1:le.z1,w0:-0,w1:2*fn,top:()=>Pu,topStep:.15,holes:[{u0:le.z0,u1:le.z1,bottom:0,head:h=>Qi(h)}],mat:gl,revealMat:Yo}),t.restore();let a=14+fn,s=Math.ceil((le.x1-a)/1),i=28,c=[];for(let h=0;h<=s;h++){let l=a+(le.x1-a)*h/s,d=[];for(let u=0;u<=i;u++){let p=le.z0+(le.z1-le.z0)*u/i,f=Qi(p),v=[0,$u-f,le.zc-p],m=Math.hypot(v[1],v[2]);d.push(t.vert([l,f,p],[0,v[1]/m,v[2]/m],Xa))}c.push(d)}for(let h=0;h<s;h++)for(let l=0;l<i;l++)t.tri(c[h][l],c[h+1][l],c[h][l+1]),t.tri(c[h+1][l],c[h+1][l+1],c[h][l+1])}function o2(t,e,o,r){let a=[];for(let s=0;s<=32;s++){let i=le.z0+(le.z1-le.z0)*s/32,c=Qi(i),h=$u-c,l=le.zc-i,d=Math.hypot(h,l),u=[c+h/d*r,i+l/d*r];a.push({y:c,z:i,iy:u[0],iz:u[1],n:[0,h/d,l/d]})}for(let s=0;s<32;s++){let i=a[s],c=a[s+1];i0(t,[e-o,i.iy,i.iz],[e+o,i.iy,i.iz],[e+o,c.iy,c.iz],[e-o,c.iy,c.iz],i.n,Yo),i0(t,[e-o,i.y,i.z],[e-o,i.iy,i.iz],[e-o,c.iy,c.iz],[e-o,c.y,c.z],[-1,0,0],Yo),i0(t,[e+o,i.iy,i.iz],[e+o,i.y,i.z],[e+o,c.y,c.z],[e+o,c.iy,c.iz],[1,0,0],Yo)}}function nh(t,e,o,r){let s=o,i=o+r*.16;er(t,e-.28,0,s,e+.28,le.spring-.3,i,Yo),er(t,e-.28-.06,0,s,e+.28+.06,.32,o+r*(.16+.05),Yo),er(t,e-.28-.05,le.spring-.3,s,e+.28+.05,le.spring-.1,o+r*(.16+.05),Yo),er(t,e-.28-.1,le.spring-.1,s,e+.28+.1,le.spring,o+r*(.16+.1),Yo)}function b6(t,e){let o=Qi(le.zc),r=[[0,o-.13,1],[.05,o-.125],[.12,o-.1],[.16,o-.06,1],[.22,o-.05],[.3,o-.075],[.4,o-.06],[.48,o-.03,1],[.55,o-.035],[.7,o-.025],[.82,o-.012,1],[.95,o+.03]];t.lathe(r,e,le.zc,48,{mat:()=>Xa});for(let n=0;n<8;n++){let a=n*Math.PI/4,s=e+Math.cos(a)*.32,i=le.zc+Math.sin(a)*.32;t.save(),t.translate(s,o-.07,i),t.rotateY(-a),t.curMat=Xa,t.ellipsoid([0,0,0],[.13,.03,.06],6,10),t.restore()}}function w6(t){t.curMat=Yo;for(let[e,o]of[[le.z0,1],[le.z1,-1]])er(t,14.35,le.spring-.12,e,le.x1,le.spring,e+o*.1,Yo),er(t,14.35,le.spring-.04,e,le.x1,le.spring+.05,e+o*.18,Yo);for(let[e,o]of[[le.z0,1],[le.z1,-1]])er(t,14.35,0,e,le.x1,.42,e+o*.12,Yo),er(t,14.35,.42,e,le.x1,.5,e+o*.07,Yo);for(let e of n2)o2(t,e,.24,.16),nh(t,e,le.z0,1),nh(t,e,le.z1,-1);for(let e of[14.35+.28,le.x1-.28])o2(t,e,.28,.22),nh(t,e,le.z0,1),nh(t,e,le.z1,-1);for(let e of jr)b6(t,e)}function _6(t){let e=le.z1+fn,o=e-.04,r=e+.04,n=(i,c,h,l)=>er(t,i,c,o,h,l,r,xl),a=Ze.halfW,s=(i,c,h,l,d,u)=>{let p=(f,v,m)=>[i+v*Math.cos(f),Ze.spring+v*Math.sin(f),m];for(let f=0;f<u;f++){let v=l+(d-l)*f/u,m=l+(d-l)*(f+1)/u;i0(t,p(v,c,o),p(m,c,o),p(m,h,o),p(v,h,o),[0,0,-1],xl),i0(t,p(v,h,r),p(m,h,r),p(m,c,r),p(v,c,r),[0,0,1],xl)}};for(let i of jr){let c=i-a,h=i+a;n(c,Ze.sill,c+.07,Ze.spring),n(h-.07,Ze.sill,h,Ze.spring),n(c,Ze.sill,h,Ze.sill+.07),n(c,Ze.spring-.04,h,Ze.spring+.04);for(let d of[-.5,0,.5])n(i+d*a-.022,Ze.sill,i+d*a+.022,Ze.spring);let l=6;for(let d=1;d<l;d++){let u=Ze.sill+(Ze.spring-Ze.sill)*d/l;n(c,u-.02,h,u+.02)}s(i,a-.07,a,0,Math.PI,32),s(i,.42,.46,0,Math.PI,20);for(let d=1;d<6;d++){let u=Math.PI*d/6,p=Math.cos(u),f=Math.sin(u),v=.02,m=(g,x)=>[i+p*g-f*v*x,Ze.spring+f*g+p*v*x];i0(t,[...m(.44,-1),o],[...m(a-.05,-1),o],[...m(a-.05,1),o],[...m(.44,1),o],[0,0,-1],xl),i0(t,[...m(.44,1),r],[...m(a-.05,1),r],[...m(a-.05,-1),r],[...m(.44,-1),r],[0,0,1],xl)}}}function M6(){let t=[],e=le.z1+fn;for(let o of jr){let r=o-Ze.halfW,n=o+Ze.halfW;t.push([r,Ze.sill,e],[n,Ze.sill,e],[n,Ze.spring,e],[r,Ze.sill,e],[n,Ze.spring,e],[r,Ze.spring,e]);for(let a=0;a<24;a++){let s=Math.PI*a/24,i=Math.PI*(a+1)/24;t.push([o,Ze.spring,e],[o+Ze.halfW*Math.cos(s),Ze.spring+Ze.halfW*Math.sin(s),e],[o+Ze.halfW*Math.cos(i),Ze.spring+Ze.halfW*Math.sin(i),e])}}return t}function r2(t,e){t.save(),t.translate(le.x1+fn,0,le.zc-7),t.rotateY(-Math.PI/2),e(),t.restore()}function k6(t){r2(t,()=>{Zi.addSurround(t),Zi.addFrames(t,"fixed")})}function S6(t){return Zi.glassPanes(t||"fixed").map(([o,r,n])=>[le.x1+fn-n,r,le.zc-7+o])}function E6(t){y6(t),w6(t),_6(t),k6(t),t.curMat=[0,0,0]}var z6={x:le.x1+fn,zLo:le.zc-Zi.DOOR.r,zHi:le.zc+Zi.DOOR.r},Oo=t=>t.toFixed(4);function A6(){return`
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
		float k = floor((q.x - ${Oo(Ze.first)}) / ${Oo(Ze.pitch)} + 0.5);
		if (k < 0.0 || k > ${Oo(Ze.count-1)}) return 0.0;
		float dx = q.x - (${Oo(Ze.first)} + k * ${Oo(Ze.pitch)});
		float side = 1.0 - smoothstep(${Oo(Ze.halfW)} - soft, ${Oo(Ze.halfW)} + soft, abs(dx));
		float sill = smoothstep(${Oo(Ze.sill)} - soft, ${Oo(Ze.sill)} + soft, q.y);
		float r = length(vec2(dx, q.y - ${Oo(Ze.spring)}));
		float head = q.y < ${Oo(Ze.spring)} ? 1.0 : 1.0 - smoothstep(${Oo(Ze.halfW)} - soft, ${Oo(Ze.halfW)} + soft, r);
		float open = side * sill * head;
		// the black glazing bars, softly
		float cover = 0.0;
		cover = max(cover, winBar(abs(dx), 0.022, soft));
		cover = max(cover, winBar(abs(abs(dx) - ${Oo(Ze.halfW*.5)}), 0.022, soft));
		float rowH = ${Oo((Ze.spring-Ze.sill)/6)};
		float ry = (q.y - ${Oo(Ze.sill)}) / rowH;
		cover = max(cover, q.y < ${Oo(Ze.spring)} ? winBar(abs(fract(ry + 0.5) - 0.5) * rowH, 0.02, soft) : 0.0);
		cover = max(cover, q.y > ${Oo(Ze.spring)} ? winBar(abs(r - 0.44), 0.02, soft) : 0.0);
		return open * (1.0 - cover * 0.75);
	}

	// daylight reaching point p from the windows
	float windowLight(vec3 p, vec3 n) {
		if (p.x < ${Oo(le.x0)} || p.z < ${Oo(le.z0-.1)} || p.z > ${Oo(le.z1)}) return 0.0;
		float ndl = max(dot(n, WIN_SKY), 0.0);
		if (ndl <= 0.0) return 0.0;
		float tIn = (${Oo(le.z1)} - p.z) / WIN_SKY.z;
		float tOut = (${Oo(le.z1+2*fn)} - p.z) / WIN_SKY.z;
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
		${rh.map(t=>`{ float d = abs(p.x - ${Oo(t)}); if (d < best) { best = d; lamp = vec3(${Oo(t)}, ${Oo(tr.spring+.55)}, ${Oo(le.z0-.15)}); } }`).join(`
		`)}
		return lamp;
	}

	float nicheLight(vec3 p, vec3 n) {
		if (p.z > ${Oo(le.z0+1.6)} || p.z < ${Oo(le.z0-tr.r-.1)} || p.x < ${Oo(le.x0)}) return 0.0;
		vec3 lamp = nicheLamp(p);
		vec3 d = lamp - p;
		float dist = length(d);
		vec3 L = d / dist;
		// a cone pointing down into the niche
		float cone = smoothstep(0.35, 0.75, dot(-L, normalize(vec3(0.0, -1.0, 0.35))));
		float inside = 1.0 - smoothstep(${Oo(tr.r)}, ${Oo(tr.r+.5)}, abs(p.x - lamp.x));
		return max(dot(n, L), 0.0) * cone * inside / (1.0 + 0.35 * dist * dist);
	}

	// soft general daylight in the corridor, strongest near the glass
	float corridorGlow(vec3 p) {
		if (p.x < ${Oo(le.x0-1)}) return 0.0;
		float inC = smoothstep(${Oo(le.z0-1.5)}, ${Oo(le.z0)}, p.z) * smoothstep(${Oo(le.x0-1)}, ${Oo(le.x0+1)}, p.x);
		float near = 0.55 + 0.45 * smoothstep(${Oo(le.z0)}, ${Oo(le.z1)}, p.z);
		return inC * near;
	}`}a2.exports={wallWithHoles:yl,windowLightGLSL:A6,addWing:E6,windowGlass:M6,farDoorGlass:S6,atFarDoor:r2,FAR_DOOR:z6,vaultY:Qi,C:le,NICHE_X:rh,NICHE:tr,NICHE_PLINTH_TOP:g6,NICHE_STATUE_Z:x6,WIN:Ze,winCentres:jr,piers:n2,PAINTING_X:v6,HEIGHT:Pu}});var Lr=At((zz,c2)=>{"use strict";var Iu=S0(),an=8,ec=.35,Us=14,tc=4,ke={x0:Us+ec,x1:Us+ec+2*tc,z0:5.9-tc,z1:5.9+tc,zc:5.9,cx:Us+ec+tc,arch:{r:2.6,spring:4.4},dome:{r:3.3,base:an},oculus:3.3};ke.domeTop=ke.dome.base+ke.dome.r;var oc={spokes:16,ringE:[.42,.95],bar:.035},Yn={sxz:1.32,sy:1.6,yaw:.6};Yn.crownC=[ke.cx,.4+3.4*Yn.sy,ke.zc];Yn.crownR=[2.3*Yn.sxz,1.9*Yn.sy,2.3*Yn.sxz];Yn.trunkR=.26*Yn.sxz;Yn.trunkTop=.4+2.2*Yn.sy;var s2={inner:1.05,outer:1.62,seat:.48,soil:.4},ih=(()=>{let t=[.2,1,-.15],e=Math.hypot(...t);return t.map(o=>o/e)})(),c0=[0,0,0],Ji=[11,0,0],ah=[10,0,0],sh=[9,0,0],T6=[5,0,0],qu=[3,0,0];function Aa(t,e,o,r,n,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),h=t.vert(r,a,s),l=t.vert(n,a,s);t.tri(i,c,h),t.tri(i,h,l)}function U0(t,e,o,r,n,a,s,i){t.box(Math.min(e,n),Math.min(o,a),Math.min(r,s),Math.max(e,n),Math.max(o,a),Math.max(r,s),i)}var L6=(t,e,o)=>r=>{let n=r-t;return o+Math.sqrt(Math.max(0,e*e-n*n))};function N6(t){t.save(),t.translate(Us+ec,0,0),t.rotateY(-Math.PI/2),Iu.wallWithHoles(t,{u0:0,u1:Iu.C.z0,w0:0,w1:2*ec,top:()=>an,holes:[{u0:ke.zc-ke.arch.r,u1:ke.zc+ke.arch.r,bottom:0,head:L6(ke.zc,ke.arch.r,ke.arch.spring),step:.05}],mat:Ji,revealMat:c0,topStep:1}),t.restore();let e=Us-ec;for(let[s,i]of[[0,ke.zc-ke.arch.r],[ke.zc+ke.arch.r,Iu.C.z0]])U0(t,e-.12,0,s,e,.42,i,c0),U0(t,e-.07,.42,s,e,.5,i,c0);let o=e,r=.24,n=40,a=(s,i,c)=>[c,ke.arch.spring+Math.sin(s)*i,ke.zc+Math.cos(s)*i];for(let s=0;s<n;s++){let i=Math.PI*s/n,c=Math.PI*(s+1)/n;Aa(t,a(i,ke.arch.r,o-.07),a(c,ke.arch.r,o-.07),a(c,ke.arch.r+r,o-.07),a(i,ke.arch.r+r,o-.07),[-1,0,0],c0),Aa(t,a(i,ke.arch.r+r,o),a(c,ke.arch.r+r,o),a(c,ke.arch.r+r,o-.07),a(i,ke.arch.r+r,o-.07),[0,Math.sin((i+c)/2),Math.cos((i+c)/2)],c0),Aa(t,a(i,ke.arch.r,o),a(c,ke.arch.r,o),a(c,ke.arch.r,o-.07),a(i,ke.arch.r,o-.07),[0,-Math.sin((i+c)/2),-Math.cos((i+c)/2)],c0)}U0(t,o-.12,ke.arch.spring+ke.arch.r-.06,ke.zc-.17,o,ke.arch.spring+ke.arch.r+r+.16,ke.zc+.17,c0);for(let s of[-1,1]){let i=ke.zc+s*ke.arch.r,c=ke.zc+s*(ke.arch.r+r);U0(t,o-.07,0,i,o,ke.arch.spring,c,c0),U0(t,o-.13,ke.arch.spring-.16,i-s*.03,o,ke.arch.spring,c+s*.08,c0),U0(t,o-.12,0,i-s*.03,o,.5,c+s*.06,c0)}}function R6(t){let{x0:e,x1:o,z0:r,z1:n}=ke;Aa(t,[Us,0,r],[o,0,r],[o,0,n],[Us,0,n],[0,1,0],c0),t.curMat=Ji,Aa(t,[o,0,r],[o,0,n],[o,an,n],[o,an,r],[-1,0,0],Ji),Aa(t,[e,0,r],[o,0,r],[o,an,r],[e,an,r],[0,0,1],Ji),Aa(t,[o,0,n],[e,0,n],[e,an,n],[o,an,n],[0,0,-1],Ji),Aa(t,[e,0,n],[e,0,r],[e,an,r],[e,an,n],[1,0,0],Ji),U0(t,o-.12,0,r,o,.42,n,c0),U0(t,e,0,r,o,.42,r+.12,c0),U0(t,e,0,n-.12,o,.42,n,c0),U0(t,o-.2,an-.3,r,o,an,n,c0),U0(t,e,an-.3,r,o,an,r+.2,c0),U0(t,e,an-.3,n-.2,o,an,n,c0),U0(t,e,an-.3,r,e+.2,an,n,c0);let a=ke.dome.r,s=48,i=[];for(let g=0;g<=s;g++){let x=Math.PI*2*g/s;i.push([ke.cx+Math.cos(x)*a,ke.zc+Math.sin(x)*a])}let c=g=>{let x=Math.abs(Math.cos(g)),y=Math.abs(Math.sin(g));return Math.min(tc/Math.max(x,1e-6),tc/Math.max(y,1e-6))};for(let g=0;g<s;g++){let x=Math.PI*2*g/s,y=Math.PI*2*(g+1)/s,w=c(x),M=c(y),_=[ke.cx+Math.cos(x)*w,an,ke.zc+Math.sin(x)*w],S=[ke.cx+Math.cos(y)*M,an,ke.zc+Math.sin(y)*M];Aa(t,[i[g][0],an,i[g][1]],[i[g+1][0],an,i[g+1][1]],S,_,[0,-1,0],ah)}t.lathe([[a+.02,an-.18,1],[a-.12,an-.18,1],[a-.12,an-.06,1],[a-.05,an,1],[a,an+.02]],ke.cx,ke.zc,s,{mat:()=>c0});let h=16,l=(g,x,y)=>[ke.cx+Math.cos(g)*Math.cos(x)*y,ke.dome.base+Math.sin(x)*y,ke.zc+Math.sin(g)*Math.cos(x)*y],d=Math.PI/2;for(let g=0;g<s;g++)for(let x=0;x<h;x++){let y=Math.PI*2*g/s,w=Math.PI*2*(g+1)/s,M=d*x/h,_=d*(x+1)/h,S=(T,H)=>[-Math.cos(T)*Math.cos(H),-Math.sin(H),-Math.sin(T)*Math.cos(H)],R=[t.vert(l(y,M,a),S(y,M),sh),t.vert(l(w,M,a),S(w,M),sh),t.vert(l(w,_,a),S(w,_),sh),t.vert(l(y,_,a),S(y,_),sh)];t.tri(R[0],R[1],R[2]),t.tri(R[0],R[2],R[3])}for(let g=0;g<oc.spokes;g++){let x=Math.PI*2*g/oc.spokes,y=[];for(let w=0;w<=14;w++)y.push(l(x,(d-.06)*w/14,a-.04));t.tube(y,()=>.04,20,6,{mat:()=>ah})}for(let g of oc.ringE){let x=Math.cos(g)*(a-.04),y=ke.dome.base+Math.sin(g)*(a-.04),w=[];for(let M=0;M<=72;M++){let _=Math.PI*2*M/72;w.push([ke.cx+Math.cos(_)*x,y,ke.zc+Math.sin(_)*x])}t.tube(w,()=>.035,72,6,{mat:()=>ah})}t.ellipsoid([ke.cx,ke.dome.base+a-.06,ke.zc],[.16,.08,.16],6,12,{mat:()=>ah});let u=.46,p=.55,f=.12,v=(g,x,y,w)=>{U0(t,g,u-.08,x,y,u,w,qu);let M=y-g>w-x?[g+.25,y-.25]:[g+.06,y-.06],_=y-g>w-x?[x+.06,w-.06]:[x+.25,w-.25];U0(t,M[0],0,_[0],M[1],u-.08,_[1],qu)};v(o-f-p,r+1.1,o-f,n-1.1),v(e+1,r+f,o-1.1,r+f+p),v(e+1,n-f-p,o-1.1,n-f);let m=s2;t.lathe([[m.outer,0,1],[m.outer,m.seat-.1,1],[m.outer+.07,m.seat-.07,1],[m.outer+.07,m.seat,1],[m.inner-.05,m.seat,1],[m.inner-.05,m.seat-.06,1],[m.inner,m.seat-.08,1],[m.inner,m.soil]],ke.cx,ke.zc,64,{mat:()=>qu}),t.lathe([[m.inner,m.soil,1],[0,m.soil+.03]],ke.cx,ke.zc,48,{mat:()=>T6})}function O6(t){N6(t),R6(t),t.curMat=[0,0,0]}var Ko=t=>t.toFixed(4);function i2(){let t=ke.dome.r,e=oc.ringE.map(o=>Math.cos(o)*t);return`
	const vec3 SHAFT = vec3(${Ko(ih[0])}, ${Ko(ih[1])}, ${Ko(ih[2])});

	// how much sun the glass dome lets through towards p (0..1): the round
	// opening, less the soft shadows of its ribs and rings (worked out on
	// the dome's base, where the frame is seen almost straight on)
	float oculusOpen(vec3 p) {
		float t = (${Ko(ke.dome.base+.6)} - p.y) / SHAFT.y;
		vec3 q = p + SHAFT * t;
		vec2 d2 = q.xz - vec2(${Ko(ke.cx)}, ${Ko(ke.zc)});
		float d = length(d2);
		float soft = 0.02 + 0.012 * t;
		float open = 1.0 - smoothstep(${Ko(t-.15)} - soft, ${Ko(t-.15)} + soft, d);
		float hw = ${Ko(oc.bar)};
		float cover = 0.0;
		${e.map(o=>`cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, abs(d - ${Ko(o)})));`).join(`
		`)}
		float ang = atan(d2.y, d2.x);
		float stp = ${Ko(Math.PI*2/oc.spokes)};
		float da = abs(mod(ang + stp * 0.5, stp) - stp * 0.5);
		cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, d * sin(da)));
		cover = max(cover, 1.0 - smoothstep(0.16 - soft, 0.16 + soft, d));
		return open * (1.0 - cover * 0.85);
	}

	// the tree's own shade: its crown lets dappled light through, its
	// trunk blocks it
	float treeShade(vec3 p) {
		vec3 c = vec3(${Ko(Yn.crownC[0])}, ${Ko(Yn.crownC[1])}, ${Ko(Yn.crownC[2])});
		vec3 r = vec3(${Ko(Yn.crownR[0])}, ${Ko(Yn.crownR[1])}, ${Ko(Yn.crownR[2])});
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
		float tt = (${Ko(Yn.trunkTop)} - p.y) / SHAFT.y;
		if (tt > 0.0) {
			vec2 o = p.xz - vec2(${Ko(ke.cx)}, ${Ko(ke.zc)});
			vec2 dir = SHAFT.xz;
			float k = clamp(-dot(o, dir) / dot(dir, dir), 0.0, tt);
			float dist = length(o + dir * k);
			tr *= smoothstep(${Ko(Yn.trunkR*.7)}, ${Ko(Yn.trunkR*1.3)}, dist);
		}
		return tr;
	}`}function C6(){return`
	${i2()}

	// sunlight through the oculus reaching p (0..1)
	float alcoveSun(vec3 p, vec3 n) {
		if (p.x < ${Ko(ke.x0-.75)} || p.z < ${Ko(ke.z0-.5)} || p.z > ${Ko(ke.z1+.5)}) return 0.0;
		float ndl = max(dot(n, SHAFT), 0.0);
		if (ndl <= 0.0) return 0.0;
		return ndl * oculusOpen(p) * treeShade(p);
	}

	// soft daylight filling the court, brightest under the dome
	float alcoveGlow(vec3 p) {
		if (p.x < ${Ko(ke.x0-1.5)} || p.z < ${Ko(ke.z0-1.5)} || p.z > ${Ko(ke.z1+1.5)}) return 0.0;
		float inside = smoothstep(${Ko(ke.x0-1.2)}, ${Ko(ke.x0+.6)}, p.x);
		float d = length(p.xz - vec2(${Ko(ke.cx)}, ${Ko(ke.zc)}));
		return inside * (0.55 + 0.45 * smoothstep(0.0, 8.0, p.y)) * (1.0 - 0.35 * smoothstep(1.0, 5.0, d));
	}`}c2.exports={addAlcove:O6,alcoveLightGLSL:C6,oculusGLSL:i2,A:ke,BENCH:s2,SHAFT:ih,TREE:Yn}});var l0=At((Az,f2)=>{"use strict";var Wr=0;try{let t=location.search;/[?&]night\b/.test(t)&&(Wr=1)}catch(t){}var Ta=Wr,Du=0,l2=[],ch={tick(t){let e=Du?Math.min(.1,t-Du):0;if(Du=t,Ta!==Wr){let o=e/2.4;Ta=Wr>Ta?Math.min(Wr,Ta+o):Math.max(Wr,Ta-o)}return ch.night},get night(){return Ta*Ta*(3-2*Ta)},get isNight(){return Wr===1},get settled(){return Ta===Wr},set(t){Wr=t?1:0,l2.forEach(e=>e(Wr))},toggle(){ch.set(!Wr)},onChange(t){l2.push(t)}};ch.GLSL=`
uniform float night;
vec3 toNight(vec3 c, float keep) {
	float l = dot(c, vec3(0.299, 0.587, 0.114));
	vec3 n = mix(vec3(l), c, 0.35) * vec3(0.55, 0.70, 1.05) * keep;
	return mix(c, n, night);
}
`;f2.exports=ch});var Ka=At((Tz,_l)=>{"use strict";var Fu=l0(),{C:Gu}=S0(),{A:lh,BENCH:bl}=Lr(),Kn=Math.PI,P6=[18,29,40],fh=.575,Ya=[],wl=(t,e,o,r,n,a,s)=>Ya.push(Object.assign({x:t,y:e,z:o,o:r,back:n,hw:a,s:1,k:1,range:7,mount:"wall"},s||{}));P6.forEach(t=>{wl(1.25+fh+.48,3.25,t,[1,0],.48,fh,{s:1.2}),wl(12.75-fh-.48,3.25,t,[-1,0],.48,fh,{s:1.2})});[3,11].forEach(t=>wl(t,3.45,Gu.hallEnd-.5,[0,-1],.5,99,{s:1.2}));var $6=[14.63,19.63,24.03,28.43,32.83,Gu.x1-.28];$6.forEach(t=>wl(t,3.15,Gu.z0+.16+.44,[0,1],.44,.28));[3,8.8].forEach(t=>wl(.35+.44,2.75,t,[1,0],.44,99));{let t=(bl.inner+bl.outer)/2,e=Math.atan2(-1.12,-.98);Ya.push({x:lh.cx+Math.cos(e)*t,y:bl.seat+.155,z:lh.zc+Math.sin(e)*t,o:[Math.cos(e),Math.sin(e)],back:0,hw:0,ring:[lh.cx,lh.zc,bl.outer+.07,bl.seat],s:.52,k:2.2,range:3.6,mount:"table"})}var Hu=.13,hh=.21,f0=Hu/Math.cos(Kn/6),Bo=t=>t.toFixed(4);function h2(t){let o=(t||Ya.map((r,n)=>n)).map(r=>{let n=Ya[r],a=-n.o[1],s=n.o[0],i=n.mount==="table"?`
				// the bench it stands on hides the floor under and around it
				if (p.y < ${Bo(n.ring[3]-.03)}) {
					float tt = ${Bo(n.y-n.ring[3])} / max(-D.y, 1e-3);
					vec2 hit = vec2(${Bo(n.x)}, ${Bo(n.z)}) + D.xz * tt - vec2(${Bo(n.ring[0])}, ${Bo(n.ring[1])});
					T *= smoothstep(${Bo(n.ring[2]-.02)}, ${Bo(n.ring[2]+.12)}, length(hit));
				}`:"",c=n.mount==="wall"?`
				{
					// what it hangs on stands behind it and hides what lies beyond
					float behind = -dot(D.xz, vec2(${Bo(n.o[0])}, ${Bo(n.o[1])}));
					if (behind > ${Bo(n.back+.06)}) {
						float side = abs(dot(D.xz, vec2(${Bo(a)}, ${Bo(s)}))) * ${Bo(n.back)} / behind;
						T *= smoothstep(${Bo(n.hw-.04)}, ${Bo(n.hw+.04)}, side);
					}
				}`:"";return`
			{
				vec3 D = p - vec3(${Bo(n.x)}, ${Bo(n.y)}, ${Bo(n.z)});
				float d2 = dot(D, D);
				if (d2 < ${Bo(n.range*n.range)}) {
					float d = sqrt(d2);
					// the direction in the lantern's own frame
					float c = ${Bo(Math.cos(Math.atan2(n.o[1],n.o[0])))}, s = ${Bo(Math.sin(Math.atan2(n.o[1],n.o[0])))};
					vec3 q = vec3(D.x * c + D.z * s, D.y, -D.x * s + D.z * c);
					float T = lanternGlass(q, 0.10 + 0.05 * d);
					${c}${i}
					float fl = 0.90 + 0.06 * sin(time * 6.1 + ${Bo(r*1.7)}) + 0.04 * sin(time * 15.3 + ${Bo(r*2.9)}) * sin(time * 1.9 + ${Bo(r*.6)});
					float lam = max(dot(N, -D / d), 0.0) * 0.85 + 0.15;
					float fall = 1.0 / (1.0 + d2 * ${Bo(1/(n.s*n.s))}) * (1.0 - smoothstep(${Bo(n.range*.6)}, ${Bo(n.range)}, d));
					sum += ${Bo(n.k)} * T * fl * lam * fall;
				}
			}`}).join("");return`
	// how much of a lantern's light gets out in direction q (lantern frame,
	// y up): through the leaded glass, past the iron posts, a little
	// through the vents in the roof and the open work under the base
	float lanternGlass(vec3 q, float blur) {
		float h = length(q.xz) + 1e-5;
		float az = atan(q.z, q.x);
		// which of the six panels, and where across it
		float t = mod(az + ${Bo(Kn/6)}, ${Bo(Kn/3)}) - ${Bo(Kn/6)};
		float U = tan(t) / ${Bo(Math.tan(Kn/6))};
		float V = (q.y / h) * (${Bo(Hu/hh)} / cos(t));
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
	}`}var hn=0,I6=1;function q6(){let t=[],e=[],o=[],r=[],n=[],a=(p,f,v,m)=>(t.push(p[0],p[1],p[2]),e.push(f[0],f[1],f[2]),o.push(v),r.push(m?m[0]:0,m?m[1]:0),t.length/3-1),s=(p,f)=>[p[0]-f[0],p[1]-f[1],p[2]-f[2]],i=(p,f)=>[p[1]*f[2]-p[2]*f[1],p[2]*f[0]-p[0]*f[2],p[0]*f[1]-p[1]*f[0]],c=p=>{let f=Math.hypot(p[0],p[1],p[2])||1;return[p[0]/f,p[1]/f,p[2]/f]};function h(p,f,v,m,g,x){let y=c(i(s(f,p),s(m,p))),w=a(p,y,g,[0,0]),M=a(f,y,g,[1,0]),_=a(v,y,g,[1,1]),S=a(m,y,g,[0,1]);n.push(w,M,_,w,_,S),x&&n.push(w,_,M,w,S,_)}function l(p,f,v){for(let x=0;x<p.length;x++){let y=p[Math.max(0,x-1)],w=p[Math.min(p.length-1,x+1)],M=c(s(w,y)),_=Math.abs(M[1])>.9?[1,0,0]:[0,1,0],S=c(i(M,_)),R=i(S,M),T=typeof f=="function"?f(x/(p.length-1)):f;for(let H=0;H<=6;H++){let q=H/6*Kn*2,W=Math.cos(q),F=Math.sin(q),j=[S[0]*W+R[0]*F,S[1]*W+R[1]*F,S[2]*W+R[2]*F];a([p[x][0]+j[0]*T,p[x][1]+j[1]*T,p[x][2]+j[2]*T],j,v)}}let g=t.length/3-p.length*7;for(let x=0;x<p.length-1;x++)for(let y=0;y<6;y++){let w=g+x*7+y,M=w+6+1;n.push(w,M,w+1,w+1,M,M+1)}}function d(p,f,v,m,g,x,y,w,M){let _=(S,R,T)=>{let H=x+Kn/6+T*Kn/3;return[p[0]+Math.cos(H)*S,R,p[2]+Math.sin(H)*S]};for(let S=0;S<6;S++)h(_(m,f,S+1),_(m,f,S),_(g,v,S),_(g,v,S+1),y);if(w&&g>0)for(let S=0;S<6;S++){let R=a([p[0],v,p[2]],[0,1,0],y),T=a(_(g,v,S),[0,1,0],y),H=a(_(g,v,S+1),[0,1,0],y);n.push(R,H,T)}if(M&&m>0)for(let S=0;S<6;S++){let R=a([p[0],f,p[2]],[0,-1,0],y),T=a(_(m,f,S),[0,-1,0],y),H=a(_(m,f,S+1),[0,-1,0],y);n.push(R,T,H)}}function u(p,f,v,m,g,x,y){let w=[];for(let _=0;_<=18;_++){let S=_/18,R=(y||0)+S*m*Kn*2,T=v*(1-.75*S);w.push([p[0]+f[0]*Math.cos(R)*T,p[1]+Math.sin(R)*T,p[2]+f[2]*Math.cos(R)*T])}l(w,g,x)}return Ya.forEach(p=>{let f=p.s,v=Math.atan2(p.o[1],p.o[0]),m=[p.x,p.y,p.z],g=(w,M,_)=>[p.x+p.o[0]*w-p.o[1]*(_||0),p.y+M,p.z+p.o[1]*w+p.o[0]*(_||0)],x=p.y-hh*f,y=p.y+hh*f;for(let w=0;w<6;w++){let M=v+Kn/6+w*Kn/3,_=M+Kn/3,S=f0*f*.97,R=[p.x+Math.cos(M)*S,x,p.z+Math.sin(M)*S],T=[p.x+Math.cos(_)*S,x,p.z+Math.sin(_)*S];h(T,R,[R[0],y,R[2]],[T[0],y,T[2]],I6,!0)}for(let w=0;w<6;w++){let M=v+Kn/6+w*Kn/3,_=f0*f;l([[p.x+Math.cos(M)*_,x-.02*f,p.z+Math.sin(M)*_],[p.x+Math.cos(M)*_,y+.02*f,p.z+Math.sin(M)*_]],.011*f,hn)}d(m,x-.035*f,x,f0*f*1.12,f0*f*1.12,v,hn,!0,!0),d(m,x-.1*f,x-.035*f,f0*f*.55,f0*f*1,v,hn,!1,!0),d(m,x-.17*f,x-.1*f,0,f0*f*.55,v,hn,!1,!1);for(let w=0;w<6;w++){let M=v+w*Kn/3,_=Hu*f*1.06,S=[p.x+Math.cos(M)*_,x-.06*f,p.z+Math.sin(M)*_];u(S,[-Math.sin(M),0,Math.cos(M)],.03*f,.85,.004*f,hn,.3)}d(m,y,y+.03*f,f0*f*1.14,f0*f*1.14,v,hn,!1,!0),d(m,y+.03*f,y+.2*f,f0*f*1.14,f0*f*.32,v,hn,!1,!1),d(m,y+.2*f,y+.27*f,f0*f*.34,f0*f*.34,v,hn,!1,!1),d(m,y+.27*f,y+.37*f,f0*f*.42,0,v,hn,!1,!0),l([[p.x,y+.36*f,p.z],[p.x,y+.47*f,p.z]],w=>.01*f*(1-.7*w),hn),d([p.x,0,p.z],y+.44*f,y+.47*f,.018*f,0,v,hn,!1,!0);for(let w=0;w<6;w++){let M=v+Kn/6+w*Kn/3,_=f0*f*1.14,S=[p.x+Math.cos(M)*_,y+.03*f,p.z+Math.sin(M)*_];l([S,[S[0],S[1]+.09*f,S[2]]],R=>.008*f*(1-.8*R),hn),d([S[0],0,S[2]],S[1]+.035*f,S[1]+.06*f,.014*f,.014*f,M,hn,!0,!0)}if(p.mount==="wall"){let w=p.back,M=x-.32,_=g(-w,0,0);((q,W,F)=>{let j=[p.o[0],0,p.o[1]],pt=[-p.o[1],0,p.o[0]],Ht=(ot,Bt,Se)=>[_[0]+pt[0]*ot+j[0]*Se,Bt,_[2]+pt[2]*ot+j[2]*Se],Nt=.03,xt=.065;h(Ht(-F,q,xt),Ht(F,q,xt),Ht(F,W,xt),Ht(-F,W,xt),hn,!0),h(Ht(F,q,Nt),Ht(F,q,xt),Ht(F,W,xt),Ht(F,W,Nt),hn,!0),h(Ht(-F,q,xt),Ht(-F,q,Nt),Ht(-F,W,Nt),Ht(-F,W,xt),hn,!0),h(Ht(-F,W,xt),Ht(F,W,xt),Ht(F,W,Nt),Ht(-F,W,Nt),hn,!0),h(Ht(-F,q,Nt),Ht(F,q,Nt),Ht(F,q,xt),Ht(-F,q,xt),hn,!0),d([_[0]+j[0]*xt,0,_[2]+j[2]*xt],W,W+.05,F*.6,0,v,hn,!1,!0),d([_[0]+j[0]*xt,0,_[2]+j[2]*xt],q-.05,q,0,F*.6,v,hn,!1,!1)})(M-.2,M+.2,.07);let R=[];for(let q=0;q<=14;q++){let W=q/14,F=-w+.05+W*(w-.05),j=M+.04+(x-.17*f-M-.04)*Math.pow(W,2.2);R.push(g(F,j-p.y,0))}l(R,q=>.022*(1-.3*q),hn);let T=[];for(let q=0;q<=10;q++){let W=q/10;T.push(g(-w+.05+W*w*.6,M-.14+W*.16+.05*Math.sin(W*Kn)-p.y,0))}l(T,.009,hn);let H=T[T.length-1];u([H[0]-p.o[0]*.03,H[1]+.02,H[2]-p.o[1]*.03],[p.o[0],0,p.o[1]],.045,1.1,.007,hn,-.4),[.3,.55].forEach(q=>{let W=R[Math.round(q*14)],F=T[Math.round(q/.62*10)]||T[10];l([W,F],.006,hn)}),[-1,1].forEach(q=>{let W=g(-.05,-hh*f-.2*f,0);u([W[0]-p.o[1]*q*.05,W[1],W[2]+p.o[0]*q*.05],[-p.o[1]*q,0,p.o[0]*q],.05*f,.9,.006,hn,Kn)})}else for(let w=0;w<3;w++){let M=v+w*Kn*2/3,_=[p.x+Math.cos(M)*f0*f*.7,x-.035*f,p.z+Math.sin(M)*f0*f*.7],S=[p.x+Math.cos(M)*f0*f*1.25,x-.17*f,p.z+Math.sin(M)*f0*f*1.25];l([_,S],.012*f,hn)}}),{pos:t,nrm:e,kind:o,uv:r,elems:n}}_l.exports=t=>{let e=q6(),o=t({vert:`
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
		}`,attributes:{position:e.pos,normal:e.nrm,kind:e.kind,uv:e.uv},elements:e.elems,uniforms:{time:t.context("time"),night:()=>Fu.night}}),r=[],n=[];Ya.forEach((s,i)=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(c=>{r.push(c[0],c[1]),n.push(s.x,s.y,s.z,s.s+i*.001)})});let a=t({vert:`
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
		}`,attributes:{corner:r,at:n},count:r.length/2,uniforms:{time:t.context("time"),night:()=>Fu.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o(),Fu.night>.01&&a()}};_l.exports.lanternGLSL=h2;_l.exports.LANTERNS=Ya;_l.exports.TREE_LANTERN=[Ya.length-1]});var Ja=At((Lz,or)=>{"use strict";var D6=l0(),Wo=Math.PI,Qn=t=>(+t).toFixed(4),F6=t=>`vec3(${Qn(t[0])}, ${Qn(t[1])}, ${Qn(t[2])})`,eo={x:-7,z:44.5},yo=5.2,y0=15,Te={z0:42.6,z1:46.4,zc:44.5,spring:4,r:1.9},fa={z0:42.2,z1:46.8,top:6.3,x:.35},ph=[eo.x-Math.sqrt(yo*yo-3.05*3.05),0,0],On={x0:-2.05+ph[0],x1:ph[0],z0:41.45,z1:47.55,top:4.3},Uu=[[On.x1+.05,2.35,On.z0-.45],[On.x1+.05,2.35,On.z1+.45]].map(([t,e,o])=>{let r=Math.atan2(o-eo.z,t-eo.x);return[eo.x+Math.cos(r)*(yo-.16),e,eo.z+Math.sin(r)*(yo-.16)]}),Go={ri:3.4,ro:yo,a0:-35*Wo/180,rise:.1836,step:3.6*Wo/180,n:88,thick:.36};Go.k=Go.rise/Go.step;var B0=t=>Go.a0-t,Za=t=>t*Go.k,mn={x:eo.x+.1,z:eo.z-.15,yaw:-Wo/2,scale:1.3},La=mn.scale/1.1,Ml={keyX0:mn.x-.524*La,keyX1:mn.x+.491*La,keyTop:.647*La,keyFront:mn.z+.808*La,keyBack:mn.z+.72*La,stoolX:mn.x-.041*La,stoolZ:mn.z+1.122*La,stoolFront:mn.z+.96*La,stoolTop:.37*La,heading:Wo},dh=[[3.6,44.5],[.6,44.5],[-2.2,44.7],[-4.5,46.5],[-7,47.2],[-9.4,46.6],[-10.5,44.9],[-10.9,43.2]];function d2(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let o=e;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function G6(t,e){let o=1e9;for(let r=0;r<dh.length-1;r++){let[n,a]=dh[r],[s,i]=dh[r+1],c=s-n,h=i-a,l=Math.max(0,Math.min(1,((t-n)*c+(e-a)*h)/(c*c+h*h)));o=Math.min(o,Math.hypot(t-n-c*l,e-a-h*l))}return o}var uh=t=>Te.spring+Math.sqrt(Math.max(0,Te.r*Te.r-(t-Te.zc)*(t-Te.zc))),Qa=t=>eo.x+Math.sqrt(Math.max(0,yo*yo-(t-eo.z)*(t-eo.z)));function nc(t,e){return Math.hypot(t-eo.x,e-eo.z)<yo||t<=0&&t>eo.x&&e>Te.z0&&e<Te.z1||t>On.x0&&t<On.x1&&e>On.z0&&e<On.z1}function H6(t,e){if(Math.hypot(t-eo.x,e-eo.z)<Go.ri-.05)return 99;let r=Math.atan2(e-eo.z,t-eo.x),n=Go.a0-r;for(;n<0;)n+=2*Wo;for(;n>=2*Wo;)n-=2*Wo;return n>Go.n*Go.step?99:Za(n)-Go.thick}function U6(){let t=[],e=d2(1729),o=(a,s,i)=>{for(let c=Math.max(0,t.length-400);c<t.length;c++){let h=t[c];if(!(h[1]>.01)&&Math.hypot(h[0]-a,h[2]-s)<i+h[3]+.012)return!0}return!1},r=(a,s)=>{let i=a-mn.x,c=s-mn.z,h=Math.cos(mn.yaw),l=Math.sin(mn.yaw),d=(h*i-l*c)/mn.scale,u=(l*i+h*c)/mn.scale;return d>-1.05&&d<1.3&&u>-.7&&u<.72},n=0;for(;t.length<980&&n<6e4;){n++;let s=e()<.55?1.25+e()*2.1:1.25+Math.sqrt(e())*(yo-1.45),i=e()*2*Wo,c=eo.x+Math.cos(i)*s,h=eo.z+Math.sin(i)*s;if(!nc(c,h)||s>yo-.18||r(c,h)||G6(c,h)<.62||H6(c,h)<2.3||c<On.x1+.9)continue;let l=.022+e()*.02;if(o(c,h,l))continue;let d=e()<.15?.22+e()*.14:.05+e()*.15;t.push([c,0,h,l,d,e()*100])}for(let a=1;a<26;a++){let s=a<12?3:2;for(let i=0;i<s;i++){let c=(a+.25+e()*.5)*Go.step,h=B0(c),l=Go.ri+.55+e()*(Go.ro-Go.ri-.75),d=.022+e()*.016;t.push([eo.x+Math.cos(h)*l,(a+1)*Go.rise,eo.z+Math.sin(h)*l,d,.05+e()*.14,e()*100])}}for(let a of Uu)for(let[s,i,c]of[[0,0,.26],[.06,.05,.18],[-.05,-.04,.14]])t.push([a[0]+s,a[1],a[2]+i,.024,c,e()*100]);for(let a of[On.z0-.35,On.z1+.35])for(let s=0;s<9;s++){let i=On.x1+.35+e()*.5,c=a+(e()-.5)*.5;Math.hypot(i-eo.x,c-eo.z)>yo-.15||t.push([i,0,c,.026+e()*.014,.18+e()*.3,e()*100])}return t}function B6(t){let o=d2(77),r=[];for(let n=0;n<14;n++){let a=t[Math.floor(o()*t.length)];r.push([a[0],a[1]+a[4],a[2]])}for(let n=0;n<12;n++){let a=r.map(()=>[0,0,0,0]);for(let s of t){let i=[s[0],s[1]+s[4],s[2]],c=0,h=1e9;r.forEach((l,d)=>{let u=(i[0]-l[0])**2+(i[1]-l[1])**2*4+(i[2]-l[2])**2;u<h&&(h=u,c=d)}),a[c][0]+=i[0],a[c][1]+=i[1],a[c][2]+=i[2],a[c][3]++}r=a.map((s,i)=>s[3]?[s[0]/s[3],s[1]/s[3],s[2]/s[3],s[3]]:r[i])}return r.filter(n=>n[3]>0).map(n=>[n[0],n[1]+.12,n[2],n[3]/t.length])}var Bu=U6(),u2=B6(Bu.filter(t=>t[1]<2||t[1]>2.5)).concat(Uu.map(t=>[t[0],t[1]+.35,t[2],.035]));function p2(){return`
	vec3 roomLight(vec3 p, vec3 N, vec3 V, float gloss, out vec3 spec) {
		spec = vec3(0.0);
		vec3 col = vec3(0.0);
		float floorK = (p.y < 0.02 && N.y > 0.9) ? 1.0 : 0.0;
		${u2.map((e,o)=>`
		{
			vec3 d = ${F6(e)} - p;
			float dd = dot(d, d);
			vec3 L = d * inversesqrt(dd);
			float fl = 0.86 + 0.08 * sin(time * ${Qn(5.3+o*.71)} + ${Qn(o*1.9)}) + 0.06 * sin(time * ${Qn(11.7+o*1.3)} + ${Qn(o*.7)});
			float w = ${Qn(e[3]*u2.length)} * fl;
			float lam = max(dot(N, L), 0.0) * 0.82 + 0.18;
			col += w * lam / (0.7 + dd * 0.42);
			// the floor glows in pools round the candles
			col += w * floorK * 0.9 / (0.02 + dd * 7.0);
			spec += w * pow(max(dot(N, normalize(L + V)), 0.0), mix(10.0, 180.0, gloss)) * gloss * 1.6 / (0.25 + dd * 0.9);
		}`).join("")}
		col *= vec3(1.0, 0.56, 0.24) * 0.62;
		spec *= vec3(1.0, 0.62, 0.30) * 0.62;
		// light from the oculus, high above: pale by day, moonlight at night
		float up = smoothstep(0.0, ${Qn(y0)}, p.y);
		vec3 sky = mix(vec3(0.10, 0.095, 0.085), vec3(0.030, 0.045, 0.085), night);
		col += sky * (0.35 + 0.65 * up) * (0.55 + 0.45 * max(N.y, 0.0)) * (0.6 + 0.4 * max(-dot(N, normalize(p - vec3(${Qn(eo.x)}, ${Qn(y0)}, ${Qn(eo.z)}))), 0.0));
		// and straight down from it a soft pool falls on the piano and
		// whoever is playing it: it catches his shoulders, his hair, the
		// edge of the lid, and lifts them out of the dark
		float pool = 1.0 - smoothstep(0.5, 2.9, length(p.xz - vec2(${Qn(Ml.stoolX)}, ${Qn(Ml.keyFront+.1)})));
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
	}`}var fo={FLOOR:0,WALL:1,STEP:2,SOFFIT:3,STRING:4,CEIL:5,OCULUS:6,HALLSTONE:7,IRON:8,RAILING:9,CANDLE:10};function v2(){let t={pos:[],nrm:[],kind:[],uv:[],idx:[]};return t.v=(e,o,r,n)=>(t.pos.push(e[0],e[1],e[2]),t.nrm.push(o[0],o[1],o[2]),t.kind.push(r),t.uv.push(n?n[0]:0,n?n[1]:0),t.pos.length/3-1),t.quad=(e,o,r,n,a,s,i)=>{let c=t.v(e,a,s,i&&i[0]),h=t.v(o,a,s,i&&i[1]),l=t.v(r,a,s,i&&i[2]),d=t.v(n,a,s,i&&i[3]);t.idx.push(c,h,l,c,l,d)},t.tri=(e,o,r,n,a)=>{let s=t.v(e,n,a),i=t.v(o,n,a),c=t.v(r,n,a);t.idx.push(s,i,c)},t}function j6(){let t=v2(),e=(r,n,a)=>[eo.x+Math.cos(r)*n,a,eo.z+Math.sin(r)*n],o=r=>[Math.cos(r),0,Math.sin(r)];for(let n=0;n>On.x0-.01;n-=.25)for(let a=41.2;a<47.8;a+=.2){let s=n-.25,i=n,c=a,h=a+.2;if(!(nc(s,c)||nc(i,c)||nc(s,h)||nc(i,h)||nc((s+i)/2,(c+h)/2)))continue;let l=c,d=h;s>Qa(Te.z0)-.3&&(l=Math.max(l,Te.z0),d=Math.min(d,Te.z1),d<=l)||t.quad([s,0,l],[s,0,d],[i,0,d],[i,0,l],[0,1,0],fo.FLOOR)}{for(let n=0;n<360;n++){let a=n/360*2*Wo,s=(n+1)/360*2*Wo,i=(a+s)/2,c=e(i,yo,0),h=0;c[0]>eo.x&&c[2]>Te.z0-.02&&c[2]<Te.z1+.02&&(h=Math.max(uh(Math.min(Math.max(e(a,yo,0)[2],Te.z0),Te.z1)),uh(Math.min(Math.max(e(s,yo,0)[2],Te.z0),Te.z1)))),c[0]<eo.x&&c[2]>On.z0-.02&&c[2]<On.z1+.02&&(h=On.top);let l=a*yo,d=s*yo,u=o(a).map(v=>-v),p=o(s).map(v=>-v),f=[h];for(let v=Math.ceil(h/2.5)*2.5;v<y0;v+=2.5)v>h+.01&&f.push(v);f.push(y0);for(let v=0;v<f.length-1;v++){let m=f[v],g=f[v+1],x=t.v(e(a,yo,m),u,fo.WALL,[l,m]),y=t.v(e(s,yo,m),p,fo.WALL,[d,m]),w=t.v(e(s,yo,g),p,fo.WALL,[d,g]),M=t.v(e(a,yo,g),u,fo.WALL,[l,g]);t.idx.push(x,y,w,x,w,M)}}for(let[n,a,s]of[[6.55,.22,.07],[0,.32,.05]])for(let i=0;i<360;i++){let c=i/360*2*Wo,h=(i+1)/360*2*Wo,l=(c+h)/2,d=e(l,yo,0);if(n<1&&(d[0]>eo.x&&d[2]>Te.z0&&d[2]<Te.z1||d[0]<eo.x&&d[2]>On.z0&&d[2]<On.z1))continue;let u=yo-s;t.quad(e(c,u,n),e(h,u,n),e(h,u,n+a),e(c,u,n+a),o(l).map(p=>-p),fo.WALL,[[c*yo,n+100],[h*yo,n+100],[h*yo,n+a+100],[c*yo,n+a+100]]),t.quad(e(c,u,n+a),e(h,u,n+a),e(h,yo,n+a),e(c,yo,n+a),[0,1,0],fo.WALL,[[0,200],[0,200],[0,200],[0,200]]),n>1&&t.quad(e(c,yo,n),e(h,yo,n),e(h,u,n),e(c,u,n),[0,-1,0],fo.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let r=fa.x;for(let[a,s]of[[Te.z0,1],[Te.z1,-1]]){let i=Qa(a);t.quad([r,0,a],[i,0,a],[i,Te.spring,a],[r,Te.spring,a],[0,0,s],fo.WALL,[[r,0],[i,0],[i,Te.spring],[r,Te.spring]])}let n=40;for(let a=0;a<n;a++){let s=a/n*Wo,i=(a+1)/n*Wo,c=Te.zc-Math.cos(s)*Te.r,h=Te.zc-Math.cos(i)*Te.r,l=Te.spring+Math.sin(s)*Te.r,d=Te.spring+Math.sin(i)*Te.r,u=[0,-Math.sin(s),Math.cos(s)],p=[0,-Math.sin(i),Math.cos(i)],f=t.v([r,l,c],u,fo.WALL,[r,s*Te.r]),v=t.v([Qa(c),l,c],u,fo.WALL,[Qa(c),s*Te.r]),m=t.v([Qa(h),d,h],p,fo.WALL,[Qa(h),i*Te.r]),g=t.v([r,d,h],p,fo.WALL,[r,i*Te.r]);t.idx.push(f,v,m,f,m,g)}}{let r=fa.x,n=.05;for(let h=fa.z0;h<fa.z1-1e-6;h+=n){let l=h,d=Math.min(fa.z1,h+n),p=(f=>f>Te.z0&&f<Te.z1)((l+d)/2)?Math.max(uh(l),uh(d)):0;t.quad([r,p,l],[r,p,d],[r,fa.top,d],[r,fa.top,l],[1,0,0],fo.HALLSTONE,[[l,p],[d,p],[d,fa.top],[l,fa.top]])}let a=.32,s=.06,i=r+s,c=36;for(let h=0;h<c;h++){let l=h/c*Wo,d=(h+1)/c*Wo,u=(g,x)=>[i,Te.spring+Math.sin(g)*x,Te.zc-Math.cos(g)*x],p=Te.r,f=Te.r+a;t.quad(u(l,p),u(d,p),u(d,f),u(l,f),[1,0,0],fo.HALLSTONE,[[0,300],[0,300],[1,300],[1,300]]);let v=(g,x,y)=>[y,Te.spring+Math.sin(g)*x,Te.zc-Math.cos(g)*x],m=[0,Math.sin((l+d)/2),-Math.cos((l+d)/2)];t.quad(v(l,f,r),v(d,f,r),v(d,f,i),v(l,f,i),m,fo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad(v(l,p,r),v(d,p,r),v(d,p,i),v(l,p,i),m.map(g=>-g),fo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}for(let[h,l,d]of[[Te.z0-a,Te.z0,-1],[Te.z1,Te.z1+a,1]]){t.quad([i,0,h],[i,0,l],[i,Te.spring,l],[i,Te.spring,h],[1,0,0],fo.HALLSTONE,[[0,300],[1,300],[1,300],[0,300]]);let u=d<0?h:l,p=d<0?l:h;t.quad([r,0,u],[i,0,u],[i,Te.spring,u],[r,Te.spring,u],[0,0,d],fo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad([r,0,p],[i,0,p],[i,Te.spring,p],[r,Te.spring,p],[0,0,-d],fo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);let f=Te.spring-.16,v=.16,m=.11,g=Math.min(h,l)-.05,x=Math.max(h,l)+.05;t.quad([r+m,f,g],[r+m,f,x],[r+m,f+v,x],[r+m,f+v,g],[1,0,0],fo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad([r,f+v,g],[r+m,f+v,g],[r+m,f+v,x],[r,f+v,x],[0,1,0],fo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad([r,f,g],[r,f,x],[r+m,f,x],[r+m,f,g],[0,-1,0],fo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let y of[g,x])t.quad([r,f,y],[r+m,f,y],[r+m,f+v,y],[r,f+v,y],[0,0,y===g?-1:1],fo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}{let h=Te.spring+Te.r-.05,l=Te.spring+Te.r+a+.12,d=.16,u=.22,p=i+.04;t.quad([p,h,Te.zc-d],[p,h,Te.zc+d],[p,l,Te.zc+u],[p,l,Te.zc-u],[1,0,0],fo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let f of[-1,1])t.quad([r,h,Te.zc+f*d],[p,h,Te.zc+f*d],[p,l,Te.zc+f*u],[r,l,Te.zc+f*u],[0,0,f],fo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);t.quad([r,l,Te.zc-u],[p,l,Te.zc-u],[p,l,Te.zc+u],[r,l,Te.zc+u],[0,1,0],fo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}}{let{x0:r,x1:n,z0:a,z1:s,top:i}=On;t.quad([r,0,a],[r,0,s],[r,i,s],[r,i,a],[1,0,0],fo.WALL,[[a,0],[s,0],[s,i],[a,i]]);for(let[h,l]of[[a,1],[s,-1]]){let d=eo.x-Math.sqrt(yo*yo-(h-eo.z)*(h-eo.z));t.quad([r,0,h],[d,0,h],[d,i,h],[r,i,h],[0,0,l],fo.WALL,[[r,0],[d,0],[d,i],[r,i]])}let c=24;for(let h=0;h<c;h++){let l=a+(s-a)*h/c,d=a+(s-a)*(h+1)/c,u=eo.x-Math.sqrt(yo*yo-(l-eo.z)**2),p=eo.x-Math.sqrt(yo*yo-(d-eo.z)**2);t.quad([r,i,l],[u,i,l],[p,i,d],[r,i,d],[0,-1,0],fo.WALL,[[0,200],[0,200],[0,200],[0,200]])}for(let h=0;h<c;h++){let l=a+(s-a)*h/c,d=a+(s-a)*(h+1)/c,u=eo.x-Math.sqrt(yo*yo-(l-eo.z)**2)+.05,p=eo.x-Math.sqrt(yo*yo-(d-eo.z)**2)+.05;t.quad([u,i-.3,l],[p,i-.3,d],[p,i,d],[u,i,l],[1,0,0],fo.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let n=[1.15,1.6,2.3,3,3.35,4.2,yo];for(let a=0;a<120;a++){let s=a/120*2*Wo,i=(a+1)/120*2*Wo,c=(s+i)/2;c>Wo&&(c-=2*Wo);for(let h=0;h<n.length-1;h++){let l=n[h],d=n[h+1],u=c*180/Wo;l>=3.3&&u>8&&u<85||t.quad(e(s,l,y0),e(s,d,y0),e(i,d,y0),e(i,l,y0),[0,-1,0],fo.CEIL,[[s*l,l],[s*d,d],[i*d,d],[i*l,l]])}t.quad(e(s,1.15,y0),e(i,1.15,y0),e(i,1.15,y0+.7),e(s,1.15,y0+.7),o(c).map(h=>-h),fo.CEIL,[[0,400],[0,400],[0,400],[0,400]]),t.tri([eo.x,y0+.7,eo.z],e(i,1.15,y0+.7),e(s,1.15,y0+.7),[0,-1,0],fo.OCULUS)}}{let r=Go.ri,n=Go.ro,a=Go.n*Go.step;for(let c=0;c<Go.n;c++){let h=c*Go.step,l=(c+1)*Go.step,d=B0(h),u=B0(l),p=(c+1)*Go.rise,f=c*Go.rise,v=2;for(let x=0;x<v;x++){let y=d+(u-d)*x/v-(x===0?.004:0),w=d+(u-d)*(x+1)/v;t.quad(e(y,r,p),e(y,n,p),e(w,n,p),e(w,r,p),[0,1,0],fo.STEP,[[r*y,c],[n*y,c],[n*w,c],[r*w,c]])}let m=[-Math.sin(d),0,Math.cos(d)],g=d-.004;t.quad(e(g,r,f),e(g,n,f),e(g,n,p),e(g,r,p),m,fo.STEP,[[r*d,c+.5],[n*d,c+.5],[n*d,c+.5],[r*d,c+.5]]),t.quad(e(d,r,Za(h)+.06),e(u,r,Za(l)+.06),e(u,r,p),e(g,r,p),o((d+u)/2).map(x=>-x),fo.STEP,[[0,500],[0,500],[0,500],[0,500]])}let s=Math.ceil(a/(1.2*Wo/180)),i=[r,r+.6,r+1.2,n];for(let c=0;c<s;c++){let h=c/s*a,l=(c+1)/s*a,d=B0(h),u=B0(l),p=Za(h),f=Za(l),v=p-Go.thick,m=f-Go.thick,g=o(d).map(S=>-S),x=o(u).map(S=>-S),y=t.v(e(d,r,v),g,fo.STRING,[h*r,0]),w=t.v(e(u,r,m),x,fo.STRING,[l*r,0]),M=t.v(e(u,r,f+.06),x,fo.STRING,[l*r,1]),_=t.v(e(d,r,p+.06),g,fo.STRING,[h*r,1]);t.idx.push(y,w,M,y,M,_);for(let S=0;S<i.length-1;S++){let R=i[S],T=i[S+1],H=q=>{let W=o(q);return[-W[0]*.12,-.99,-W[2]*.12]};t.quad(e(d,R,v),e(d,T,v),e(u,T,m),e(u,R,m),H((d+u)/2),fo.SOFFIT,[[h*R,R],[h*T,T],[l*T,T],[l*R,R]])}}}return t}function W6(){let t=v2(),e=Go.ri+.045,o=Go.n*Go.step,r=Math.ceil(o/(.8*Wo/180)),n=.92,a=(c,h,l)=>[eo.x+Math.cos(c)*h,l,eo.z+Math.sin(c)*h],s=c=>[Math.cos(c),0,Math.sin(c)];for(let c=0;c<r;c++){let h=c/r*o,l=(c+1)/r*o,d=B0(h),u=B0(l),p=Za(h)+.06,f=Za(l)+.06,v=s(d).map(S=>-S),m=s(u).map(S=>-S),g=h*e,x=l*e,y=t.v(a(d,e,p),v,fo.RAILING,[g,0]),w=t.v(a(u,e,f),m,fo.RAILING,[x,0]),M=t.v(a(u,e,f+n),m,fo.RAILING,[x,n]),_=t.v(a(d,e,p+n),v,fo.RAILING,[g,n]);t.idx.push(y,w,M,y,M,_)}((c,h,l,d)=>{let p=v=>{let m=B0(v),g=Za(v)+.06+h,x=a(m,e+c,g),y=s(m),w=[];for(let M=0;M<8;M++){let _=M/8*2*Wo,S=[y[0]*Math.cos(_),Math.sin(_),y[2]*Math.cos(_)];w.push([[x[0]+S[0]*l,x[1]+S[1]*l,x[2]+S[2]*l],S])}return w},f=p(0);for(let v=1;v<=r;v++){let m=p(v/r*o);for(let g=0;g<8;g++){let x=(g+1)%8,y=t.v(f[g][0],f[g][1],d),w=t.v(m[g][0],m[g][1],d),M=t.v(m[x][0],m[x][1],d),_=t.v(f[x][0],f[x][1],d);t.idx.push(y,w,M,y,M,_)}f=m}})(0,n+.02,.028,fo.IRON);for(let c of Uu){let h=Math.atan2(c[2]-eo.z,c[0]-eo.x),l=[Math.cos(h),0,Math.sin(h)],d=12;for(let v=0;v<d;v++){let m=v/d*2*Wo,g=(v+1)/d*2*Wo,x=(y,w,M)=>[c[0]+Math.cos(y)*w,M,c[2]+Math.sin(y)*w];t.quad(x(m,.16,c[1]),x(g,.16,c[1]),x(g,.13,c[1]-.05),x(m,.13,c[1]-.05),[Math.cos(m)*.6,.8,Math.sin(m)*.6],fo.IRON),t.quad(x(m,.16,c[1]),x(g,.16,c[1]),x(g,0,c[1]+.002),x(m,0,c[1]+.002),[0,1,0],fo.IRON)}let u=[c[0]+l[0]*.16,c[1]-.35,c[2]+l[2]*.16],p=[-l[2],0,l[0]],f=.018;t.quad([u[0]-p[0]*f,u[1],u[2]-p[2]*f],[u[0]+p[0]*f,u[1],u[2]+p[2]*f],[c[0]+p[0]*f,c[1]-.05,c[2]+p[2]*f],[c[0]-p[0]*f,c[1]-.05,c[2]-p[2]*f],[-l[0],.5,-l[2]],fo.IRON)}{let c=B0(0),h=a(c,e,0),l=10;for(let d=0;d<l;d++){let u=d/l*2*Wo,p=(d+1)/l*2*Wo,f=(v,m,g)=>[h[0]+Math.cos(v)*m,g,h[2]+Math.sin(v)*m];t.quad(f(u,.035,0),f(p,.035,0),f(p,.035,n+.1),f(u,.035,n+.1),[Math.cos((u+p)/2),0,Math.sin((u+p)/2)],fo.IRON),t.quad(f(u,.06,n+.1),f(p,.06,n+.1),f(p,.03,n+.2),f(u,.03,n+.2),[Math.cos((u+p)/2)*.8,.6,Math.sin((u+p)/2)*.8],fo.IRON)}}return t}function V6(){let t=[],e=[],o=[],r=[];for(let a of Bu){let[s,i,c,h,l,d]=a,u=t.length/3;for(let f=0;f<=7;f++){let v=f/7*2*Wo+d,m=Math.cos(v),g=Math.sin(v);t.push(s+m*h,i,c+g*h,s+m*h,i+l,c+g*h),e.push(m,0,g,m,0,g),o.push(0,l,d,1,l,d)}for(let f=0;f<7;f++){let v=u+f*2;r.push(v,v+2,v+3,v,v+3,v+1)}let p=t.length/3;t.push(s,i+l-.006,c),e.push(0,1,0),o.push(2,l,d);for(let f=0;f<7;f++){let v=f/7*2*Wo+d;t.push(s+Math.cos(v)*h,i+l,c+Math.sin(v)*h),e.push(0,1,0),o.push(1,l,d)}for(let f=0;f<7;f++)r.push(p,p+1+f,p+1+(f+1)%7)}return{pos:t,nrm:e,info:o,idx:r}}function X6(){let t=[],e=[],o=[],r=[];for(let n of Bu){let[a,s,i,,c,h]=n,l=t.length/3;for(let d of[[-1,0],[1,0],[1,1],[-1,1]])t.push(a,s+c+.004,i),e.push(d[0],d[1]),o.push(h);r.push(l,l+1,l+2,l,l+2,l+3)}return{ctr:t,corner:e,ph:o,idx:r}}function Y6(t){let e=new DataView(t),o=e.getUint32(4,!0),r=e.getUint32(8,!0),n=[],a=[];for(let g=0;g<3;g++)n.push(e.getFloat32(12+g*4,!0)),a.push(e.getFloat32(24+g*4,!0));let s=36,i=new Uint16Array(t,s,o*3);s+=o*6;let c=new Uint16Array(t,s,r);s+=r*2;let h=new Int8Array(t,s,o*3);s+=o*3;let l=new Uint8Array(t,s,o),d=new Float32Array(o*3),u=new Float32Array(o*3),p=new Float32Array(o),f=Math.cos(mn.yaw),v=Math.sin(mn.yaw),m=mn.scale;for(let g=0;g<o;g++){let x=(n[0]+i[g*3]/65535*a[0])*m,y=(n[1]+i[g*3+1]/65535*a[1])*m,w=(n[2]+i[g*3+2]/65535*a[2])*m;d[g*3]=mn.x+f*x+v*w,d[g*3+1]=y,d[g*3+2]=mn.z-v*x+f*w;let M=h[g*3]/127,_=h[g*3+1]/127,S=h[g*3+2]/127;u[g*3]=f*M+v*S,u[g*3+1]=_,u[g*3+2]=-v*M+f*S,p[g]=l[g]}return{pos:d,nrm:u,mat:p,idx:new Uint32Array(c)}}function K6(){let t=[],e=(d,u)=>[eo.x+Math.cos(d)*u,eo.z+Math.sin(d)*u];t.push([[0,Te.z0],[Qa(Te.z0),Te.z0]]),t.push([[Qa(Te.z1),Te.z1],[0,Te.z1]]);let o=Math.asin((Te.z1-eo.z)/yo),r=72;for(let d=0;d<r;d++){let u=o+d/r*(2*Wo-2*o),p=o+(d+1)/r*(2*Wo-2*o);t.push([e(u,yo-.25),e(p,yo-.25)])}let n=ph[0]-.55+.35;t.push([[n,On.z0],[n,On.z1]]);let a=2.4/Go.k,s=12;for(let d=0;d<s;d++){let u=B0(d/s*a),p=B0((d+1)/s*a);t.push([e(u,Go.ri-.2),e(p,Go.ri-.2)])}t.push([e(B0(0),Go.ri-.2),e(B0(0),yo)]),t.push([e(B0(a),Go.ri-.2),e(B0(a),yo)]);let i=Math.cos(mn.yaw),c=Math.sin(mn.yaw),h=mn.scale,l=[[-1,-.62],[1.25,-.62],[1.25,.62],[-1,.62]].map(([d,u])=>[mn.x+(i*d+c*u)*h,mn.z+(-c*d+i*u)*h]);for(let d=0;d<4;d++)t.push([l[d],l[(d+1)%4]]);return t}or.exports=t=>{let e=j6(),o=W6(),r=V6(),n=X6(),a=Ka(),s=`
	precision highp float;
	${D6.GLSL}
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
				base *= 1.0 - 0.25 * smoothstep(3.0, ${Qn(y0)}, v_pos.y);
			} else if (k < 2.5) {
				// the steps: a greyer, harder stone, worn paler in the middle
				float r = length(v_pos.xz - vec2(${Qn(eo.x)}, ${Qn(eo.z)}));
				base = limestone(v_pos.xz * 1.4 + v_uv * 0.3) * vec3(0.90, 0.88, 0.86);
				base *= 1.0 + 0.10 * (1.0 - smoothstep(0.0, 0.6, abs(r - ${Qn((Go.ri+Go.ro)/2)})));
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
				vec2 q = v_pos.xz - vec2(${Qn(eo.x)}, ${Qn(eo.z)});
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
		}`,attributes:{position:r.pos,normal:r.nrm,info:r.info},elements:new Uint32Array(r.idx),cull:{enable:!1}}),d=t({vert:`
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
		}`,attributes:{ctr:n.ctr,corner:n.corner,ph:n.ph},elements:new Uint32Array(n.idx),uniforms:{halo:t.prop("halo")},depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),u=null;fetch("res/piano.bin").then(m=>{if(!m.ok)throw new Error("Could not load piano.bin");return m.arrayBuffer()}).then(m=>{let g=Y6(m);u=t({vert:`
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
				}`,attributes:{position:g.pos,normal:g.nrm,mat:g.mat},elements:g.idx,cull:{enable:!1}})}).catch(m=>console.error(m));let p=(()=>{let m=[],g=[],x=[],y=[],M=[eo.x,y0-.3,eo.z],_=[Ml.stoolX,.02,Ml.keyFront+.1],S=1.25,R=2.35;for(let T=0;T<=40;T++){let H=T/40*2*Wo,q=Math.cos(H),W=Math.sin(H);m.push(M[0]+q*S,M[1],M[2]+W*S,_[0]+q*R,_[1],_[2]+W*R),g.push(q,.08,W,q,.08,W),x.push(1,0)}for(let T=0;T<40;T++){let H=T*2;y.push(H,H+1,H+3,H,H+3,H+2)}return{pos:m,nrm:g,hh:x,idx:y}})(),f=t({vert:`
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
		}`,attributes:{position:p.pos,normal:p.nrm,hh:p.hh},elements:p.idx,depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});function v(m){let g=m&&m.reflected;c(),h(),l(),u&&u(),g||(f(),d({halo:1}),d({halo:0}))}return v};or.exports.C=eo;or.exports.R=yo;or.exports.PASS=Te;or.exports.SURR=fa;or.exports.OFF=ph;or.exports.BAY=On;or.exports.PATH=dh;or.exports.PIANO=mn;or.exports.PLAY=Ml;or.exports.TOP=y0;or.exports.roomGLSL=p2;or.exports.segments=K6});var S2=At((Nz,k2)=>{"use strict";var Q6=Ds(),{addFlutedColumn:m2,addStatue:Z6,addPlant:J6}=Bm(),g2=Va(),t_=Ki(),Vr=S0(),e_=Lr(),ac=Ja(),Co=14,Pn=Vr.C.hallEnd+.35,Zo=8,Uo=.35,ju=1.15,Wu=1.15,Vu=[18,29,40],o_=[[[0,0],[0,ac.PASS.z0]],[[0,ac.PASS.z1],[0,Pn]],[[Co,Pn],[Co,0]],[[0,0],[Co,0]],[[Co,Pn],[0,Pn]]],w2=[];for(let t of Vu)for(let e of[1.25,Co-1.25]){let o=ju/2,r=Wu/2;w2.push([[e-o,t-r],[e+o,t-r]],[[e+o,t-r],[e+o,t+r]],[[e+o,t+r],[e-o,t+r]],[[e-o,t+r],[e-o,t-r]])}var mh=12,_2=2.95,M2=.62,yh=_2+M2,gh=[{file:"venus.bin",x:1.85,z:Pn-1.6,yaw:2.67,height:5.2,pedestal:!0,mat:1},{file:"david.bin",x:Co-2.1,z:Pn-1.6,yaw:-2.67,height:5.2,pedestal:!0,mat:1},{file:"pieta.bin",x:1.75,z:5.9,yaw:Math.PI/2,height:3.6,base:1,mat:1},{file:"spinario.bin",x:Vr.NICHE_X[0],z:Vr.NICHE_STATUE_Z,yaw:-.35,height:1.85,base:Vr.NICHE_PLINTH_TOP,mat:3},{file:"charioteer.bin",x:Vr.NICHE_X[1],z:Vr.NICHE_STATUE_Z+.1,yaw:0,height:2.95,base:Vr.NICHE_PLINTH_TOP,mat:3}],n_={x0:Uo,x1:3.15,z0:3.6,z1:8.2,top:1},x2=.8,bh=1.17,kl=[];[{z:10.4,dz:-.7},{z:19.2,dz:.7},{z:27.8,dz:-.7}].forEach((t,e)=>{kl.push({x:1,z:t.z,seed:11+e*7,away:[1,t.dz]}),kl.push({x:Co-1,z:t.z,seed:53+e*5,away:[-1,t.dz]})});function Xu(t,e,o,r){return[[[t-o,e-r],[t+o,e-r]],[[t+o,e-r],[t+o,e+r]],[[t+o,e+r],[t-o,e+r]],[[t-o,e+r],[t-o,e-r]]]}var wh=[];for(let t of[-1,1])wh.push(...Xu(Co/2+t*yh,mh,.85,.85));for(let t of gh.filter(e=>e.pedestal))wh.push(...Xu(t.x,t.z,bh*1.1,bh*1.1));for(let t of kl)wh.push(...Xu(t.x,t.z,.42,.42));var r_=o_.concat(w2,wh,ac.segments());function a_(t){let o=new Map,r=(n,a,s)=>{let i=n+":"+a;o.has(i)||o.set(i,[]);let c=o.get(i);c.includes(s)||c.push(s)};for(let n of t){let a=Math.floor(Math.min(n[0][0],n[1][0])/4)-1,s=Math.floor(Math.max(n[0][0],n[1][0])/4)+1,i=Math.floor(Math.min(n[0][1],n[1][1])/4)-1,c=Math.floor(Math.max(n[0][1],n[1][1])/4)+1;for(let h=a;h<=s;h++)for(let l=i;l<=c;l++)r(h,l,n)}return{get(n,a){let s=Math.floor(n/4),i=Math.floor(a/4),c=[];for(let h=-1;h<=1;h++)for(let l=-1;l<=1;l++){let d=o.get(s+h+":"+(i+l));d&&c.push(...d)}return[...new Set(c)]}}}var xh=[],Cn={curMat:[0,0,0]};function Yu(t,e,o,r,n,a,s){let i=t.length/3;t.push(...o,...r,...n,...a),e.push(...s,...s,...s,...s);let c=Cn.curMat;return xh.push(...c,...c,...c,...c),[i,i+2,i+1,i+1,i+2,i+3]}function Ho(t,e,o,r,n,a,s,i,c){let h=(l,d,u,p,f)=>{o.push(...Yu(t,e,l,d,u,p,f))};h([r,n,a],[s,n,a],[r,i,a],[s,i,a],[0,0,-1]),h([s,n,c],[r,n,c],[s,i,c],[r,i,c],[0,0,1]),h([r,n,c],[r,n,a],[r,i,c],[r,i,a],[-1,0,0]),h([s,n,a],[s,n,c],[s,i,a],[s,i,c],[1,0,0]),h([r,i,a],[s,i,a],[r,i,c],[s,i,c],[0,1,0]),h([r,n,c],[s,n,c],[r,n,a],[s,n,a],[0,-1,0])}function rc(t,e,o,r,n){let a=Cn,s=a.vert(t,n),i=a.vert(e,n),c=a.vert(o,n),h=a.vert(r,n);a.tri(s,i,c),a.tri(i,h,c)}function y2(t,e,o,r,n,a,s){for(let i=0;i<s;i++){let c=Math.PI*i/s,h=Math.PI*(i+1)/s,l=Math.cos(c),d=Math.sin(c),u=Math.cos(h),p=Math.sin(h),f=[t+o*l,e+o*d],v=[t+o*u,e+o*p],m=[t+r*l,e+r*d],g=[t+r*u,e+r*p];rc([f[0],f[1],n],[v[0],v[1],n],[m[0],m[1],n],[g[0],g[1],n],[0,0,-1]),rc([f[0],f[1],a],[v[0],v[1],a],[m[0],m[1],a],[g[0],g[1],a],[0,0,1]);let x=(c+h)/2;rc([f[0],f[1],n],[v[0],v[1],n],[f[0],f[1],a],[v[0],v[1],a],[-Math.cos(x),-Math.sin(x),0]),rc([m[0],m[1],n],[g[0],g[1],n],[m[0],m[1],a],[g[0],g[1],a],[Math.cos(x),Math.sin(x),0])}}function s_(t,e,o,r,n,a,s){for(let i=0;i<s;i++){let c=Math.PI*i/s,h=Math.PI*(i+1)/s,l=t+o*Math.cos(c),d=e+o*Math.sin(c),u=t+o*Math.cos(h),p=e+o*Math.sin(h);rc([l,d,n],[u,p,n],[l,r,n],[u,r,n],[0,0,-1]),rc([l,d,a],[u,p,a],[l,r,a],[u,r,a],[0,0,1])}}function i_(t,e,o,r){let n=Co/2,a=_2,s=3,i=a+.42,c=i+.15,h=M2,l=yh,d=5.98,u=r-.45,p=r+.45,f=64,v=m2(Cn,n-l,r,0,d,h);m2(Cn,n+l,r,0,d,h),Cn.curMat=[0,0,0],y2(n,s,a,i,u,p,f),y2(n,s,i,c,u-.07,p+.07,f),s_(n,s,c,v+.05,u,p,f);for(let g of[-1,1]){let x=n+g*(c-.02),y=n+g*l;Ho(t,e,o,Math.min(x,y),s,u,Math.max(x,y),v+.05,p)}for(let g of[-1,1]){let x=n+g*(a-.05),y=n+g*(a+.85);Ho(t,e,o,Math.min(x,y),s-.16,r-.6,Math.max(x,y),s,r+.6)}let m=l+h*1.42+.45;Ho(t,e,o,n-m,v,r-.7,n+m,v+.44,r+.7),Ho(t,e,o,n-m+.12,v+.44,r-.62,n+m-.12,v+.7,r+.62),Ho(t,e,o,n-m-.1,v+.7,r-.84,n+m+.1,v+.84,r+.84),Ho(t,e,o,n-m-.22,v+.84,r-.96,n+m+.22,v+1,r+.96),Ho(t,e,o,n-.3,s+a-.1,r-.56,n+.3,v,r+.56)}function b2(t,e,o,r,n){Ho(t,e,o,r-.72,0,n-.72,r+.72,.2,n+.72),Ho(t,e,o,r-.58,.2,n-.58,r+.58,.4,n+.58),Ho(t,e,o,r-ju/2,.4,n-Wu/2,r+ju/2,Zo-1.35,n+Wu/2),Ho(t,e,o,r-.67,.42,n-.67,r+.67,.62,n+.67),Ho(t,e,o,r-.67,Zo-1.58,n-.67,r+.67,Zo-1.35,n+.67),Ho(t,e,o,r-.82,Zo-1.35,n-.82,r+.82,Zo-1.05,n+.82),Ho(t,e,o,r-.66,Zo-1.05,n-.66,r+.66,Zo-.78,n+.66),Ho(t,e,o,r-.92,Zo-.78,n-.92,r+.92,Zo-.55,n+.92),Ho(t,e,o,r-.78,Zo-.55,n-.78,r+.78,Zo-.3,n+.78),Ho(t,e,o,r-.92,Zo-.3,n-.92,r+.92,Zo-.1,n+.92)}function vh(t,e,o,r,n){n==="left"?(Ho(t,e,o,-.08,1,r-3.8/2,.14,5.7,r+3.8/2),Ho(t,e,o,-.08-.04,1+.18,r-3.8/2+.18,.18,5.7-.18,r+3.8/2-.18)):(Ho(t,e,o,Co-.14,1,r-3.8/2,Co+.08,5.7,r+3.8/2),Ho(t,e,o,Co-.18,1+.18,r-3.8/2+.18,Co+.08+.04,5.7-.18,r+3.8/2-.18))}function c_(t,e,o,r){Ho(t,e,o,.65,Zo-.16,r-1.65,.65+.22,Zo,r+1.65),Ho(t,e,o,Co-.65-.22,Zo-.16,r-1.65,Co-.65,Zo,r+1.65),Ho(t,e,o,.65,Zo-.16,r-1.65,Co-.65,Zo,r-1.43),Ho(t,e,o,.65,Zo-.16,r+1.43,Co-.65,Zo,r+1.65),o.push(...Yu(t,e,[.65+.22,Zo-.16,r-1.43],[Co-.65-.22,Zo-.16,r-1.43],[.65+.22,Zo-.16,r+1.43],[Co-.65-.22,Zo-.16,r+1.43],[0,-1,0]))}k2.exports=function(){let t=[],e=[],o=[];xh=[],Cn=Q6.createBuilder(t,e,o,xh),o.push(...Yu(t,e,[0,0,0],[Co,0,0],[0,0,Pn],[Co,0,Pn],[0,1,0])),t_.addSkylight(Cn,[0,0,0],Pn),Cn.curMat=[0,0,0];{let c=ac.SURR;Ho(t,e,o,-Uo,0,0,Uo,Zo,c.z0),Ho(t,e,o,-Uo,0,c.z1,Uo,Zo,Pn),Ho(t,e,o,-Uo,c.top,c.z0,Uo,Zo,c.z1)}Ho(t,e,o,Co-Uo,0,Vr.C.z1,Co+Uo,Zo,Pn-Uo),Ho(t,e,o,Co-Uo-.12,0,Vr.C.z1+2*Uo,Co-Uo,.42,Pn-Uo),Ho(t,e,o,Co-Uo-.07,.42,Vr.C.z1+2*Uo,Co-Uo,.5,Pn-Uo);for(let[c,h]of[[0,ac.SURR.z0],[ac.SURR.z1,Pn-Uo]])Ho(t,e,o,Uo,0,c,Uo+.12,.42,h),Ho(t,e,o,Uo,.42,c,Uo+.07,.5,h);Ho(t,e,o,Uo,0,Pn-Uo-.12,Co-Uo,.42,Pn-Uo),Ho(t,e,o,Uo,.42,Pn-Uo-.07,Co-Uo,.5,Pn-Uo),g2.addEntranceWall(Cn),g2.addFrames(Cn),Cn.curMat=[0,0,0],Ho(t,e,o,-Uo,0,Pn-Uo,Co+Uo,Zo,Pn+Uo),i_(t,e,o,mh);for(let c of Vu)b2(t,e,o,1.25,c),b2(t,e,o,Co-1.25,c);vh(t,e,o,22,"left"),vh(t,e,o,25,"right"),vh(t,e,o,33,"left"),vh(t,e,o,36,"right");let r=[4,9,34,39,44,49];for(let c of r)c_(t,e,o,c);Vr.addWing(Cn),Cn.curMat=[0,0,0];for(let c of gh.filter(h=>h.pedestal))Z6(Cn,c.x,c.z,bh,x2);{let c=n_;Cn.curMat=[0,0,0],Cn.box(c.x0,0,c.z0-.08,c.x1+.08,.16,c.z1+.08,[0,0,0]),Cn.box(c.x0,.16,c.z0+.04,c.x1-.04,c.top-.14,c.z1-.04,[0,0,0]),Cn.box(c.x0,c.top-.14,c.z0-.02,c.x1+.03,c.top-.06,c.z1+.02,[0,0,0]),Cn.box(c.x0,c.top-.06,c.z0-.06,c.x1+.07,c.top,c.z1+.06,[0,0,0])}e_.addAlcove(Cn);for(let c of kl)J6(Cn,c.x,c.z,c.seed,1,c.away);Cn.curMat=[0,0,0];let n=[[[Co,Pn-.35],[0,Pn-.35]],[[0,3],[0,10]],[[Co,15],[Co,22]],[[0,24],[0,31]],[[Co,33],[Co,40]],[[0,41],[0,46]]],a=a_(r_),s=(c,h)=>{let l=0,d=1/0;return n.forEach((u,p)=>{let f=(u[0][0]+u[1][0])/2,v=(u[0][1]+u[1][1])/2,m=Math.hypot(c-f,h-v);m<d&&(d=m,l=p)}),l},i=[];for(let c=0;c<10;c++)i.push({c:[0,0,0,0],d:[1,0,0,0]});return{placements:n,lights:i,statues:gh,occluders:[...Vu.flatMap(c=>[[1.25,c,.78],[Co-1.25,c,.78]]),[Co/2-yh,mh,.86],[Co/2+yh,mh,.86],...gh.filter(c=>c.pedestal).map(c=>[c.x,c.z,bh*1.12]),...kl.map(c=>[c.x,c.z,.34])],pedestalTop:x2,mat:xh,getAreaIndex:s,getGridSegments:(c,h)=>a.get(c,h),getGridParts:(c,h)=>a.get(c,h),position:t,normal:e,elements:o}}});var Ku=At((Rz,E2)=>{"use strict";var{doorLightGLSL:l_}=Va(),{skylightGLSL:f_}=Ki(),{windowLightGLSL:h_,C:pr}=S0(),{alcoveLightGLSL:u_}=Lr(),Nr=t=>t.toFixed(4),d_=(()=>{let t=[-.22,.6,-.77],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>(o/e).toFixed(4)).join(", ")})();E2.exports=(t,e,o,r)=>{let a=(e.occluders||[]).slice(0,24).map(([p,f,v])=>`ao = min(ao, contact(v_pos.xz, vec2(${p.toFixed(3)}, ${f.toFixed(3)}), ${v.toFixed(3)}));`).join(`
      `),s={c:[0,0,0,0],d:[1,0,0,0]},i=-1,c=[],h=p=>{let f=p&&p.tick!==void 0?p.tick:0;if(f!==i||c.length===0){i=f;let v=e.viewer||[7,2,20];for(c=e.lights.filter(m=>m.c[3]>.5).map(m=>({l:m,d:Math.hypot(m.c[0]-v[0],m.c[2]-v[2])})).sort((m,g)=>m.d-g.d).slice(0,8).map(m=>m.l);c.length<8;)c.push(s)}return c},l={},d="",u="";for(let p=0;p<8;p++)l["lightC"+p]=f=>h(f)[p].c,l["lightD"+p]=f=>h(f)[p].d,d+="uniform vec4 lightC"+p+", lightD"+p+`;
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

    ${l_()}

    ${f_()}

    ${h_()}

    ${u_()}

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
        step(abs(v_pos.z - ${Nr(pr.hallEnd)}), 0.02) * step(0.5, -N.z) +
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
                 + exp(-pow((v_pos.z - ${Nr((pr.z0+pr.z1)/2)}) / 1.3, 2.0)) * step(14.0, v_pos.x);
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
      light += (1.0 - smoothstep(2.0, 16.0, abs(v_pos.z - ${Nr(pr.hallEnd-1.6)}))) * 0.09 * (1.0 - smoothstep(14.5, 18.0, v_pos.x));

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
          float through = doorLight(v_pos, vec3(${d_}));
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
        if (v_pos.x < 14.0) wallD = min(wallD, ${Nr(pr.hallEnd)} - v_pos.z);
        if (v_pos.x < 14.0 && (v_pos.z < ${Nr(pr.z0)} || v_pos.z > ${Nr(pr.z1)})) wallD = min(wallD, 13.65 - v_pos.x);
        if (v_pos.x > 13.65 && v_pos.z > ${Nr(pr.z0-1)}) wallD = min(min(min(wallD, v_pos.z - ${Nr(pr.z0)}), ${Nr(pr.z1)} - v_pos.z), ${Nr(pr.x1)} - v_pos.x);
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
        if (v_pos.z < ${Nr(pr.z0+.3)} && v_pos.x > ${Nr(pr.x0)}) {
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
    }`,attributes:{position:e.position,normal:e.normal,a_mat:e.mat},uniforms:l,blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},elements:new Uint32Array(e.elements),offset:r?t.prop("offset"):0,count:r?t.prop("count"):e.elements.length})}});var A2=At((Oz,z2)=>{"strict mode";var p_="https://api.artic.edu/api/v1/artworks/search",v_=({image_id:t},e)=>`https://www.artic.edu/iiif/2/${t}/full/${e},/0/default.jpg`,m_="?query[bool][must][][term][classification_titles.keyword]=painting&query[bool][must][][term][is_public_domain]=true",g_="&fields=image_id,title,artist_title",x_={low:400,mid:843,high:1686};z2.exports={fetchList:async function(t,e){let o=p_+m_+g_+`&from=${t}&size=${e}`;return(await fetch(o).then(n=>n.json())).data.filter(n=>n.image_id)},fetchImage:async function(t,e){let o=v_(t,x_[e]),r=await fetch(o).then(n=>n.blob());return{title:t.title+" - "+t.artist_title,image:r}}}});var N2=At((Cz,L2)=>{"use strict";var y_=xu(),b_=zr(),w_=t=>"images/web/"+t.slug+(b_.isPhone?"-1024":"")+".webp";async function T2(t){let e=await fetch(t);if(!e.ok)throw new Error("Could not load "+t);return e.blob()}L2.exports={fetchList:async function(t,e){return y_.slice(t,t+e).map((o,r)=>({...o,image_id:t+r}))},fetchImage:async function(t){let e;try{e=await T2(w_(t))}catch(o){e=await T2("images/"+t.file)}return{title:t.title,image:e}}}});var O2=At((Pz,R2)=>{"strict mode";R2.exports={default:"local",artic:A2(),local:N2()}});var Zu=At(($z,P2)=>{"strict mode";var Bs=document.createElement("canvas"),Qu=Bs.width=Bs.height=1024,ts=Bs.getContext("2d");ts.mozImageSmoothingEnabled=!1;ts.webkitImageSmoothingEnabled=!1;ts.font="32px Verdana";ts.textBaseline="bottom";ts.fillStyle="#aaa";function C2(t,e,o,r){var n=e,a,s=0,i=0,c=e.split(" "),h,l;for(h=l=c.length;t.measureText(n).width>o&&h>1;){h--,n=a="";for(var d=0;d<l;d++)d<h?(n+=c[d],d+1<h&&(n+=" ")):(a+=c[d],d+1<l&&(a+=" "))}return r.push(n),i=t.measureText(n).width,a&&(s=C2(t,a,o,r),s>i&&(i=s)),i}P2.exports={init(t,e,o=Qu){var r=[];C2(ts,e,Math.min(o*Qu,Qu),r),ts.clearRect(0,0,Bs.width,Bs.height);for(var n=0;n<r.length;n++)ts.fillText(r[n],0,Bs.height-(Math.max(r.length,3)-n)*32);return t({data:Bs,min:"mipmap",mipmap:"nice",flipY:!0})},draw(t){return t({frag:`
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
            }`,attributes:{pos:[0,0,1,0,0,1,1,1,0,1,1,0]},uniforms:{model:t.prop("textmodel"),tex:t.prop("text")},count:6,blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}})}}});var q2=At((Iz,I2)=>{"strict mode";var Ju=O2(),__=new URLSearchParams(window.location.search).get("api"),$2=Ju[__]||Ju[Ju.default],M_=Zu(),td={},ic=[],k_=2;function S_(t){return(!navigator.connection||navigator.connection.downlink<k_)&&(t=t=="high"?"mid":"low"),t}var E_=zr(),sc=document.createElement("canvas");sc.width=sc.height=E_.isPhone?1024:2048;var nd=sc.getContext("2d");nd.imageSmoothingEnabled=!0;nd.imageSmoothingQuality="high";var ed=!1,z_=t=>[(ic.pop()||t.texture)([[[200,200,200]]]),e=>(ic.pop()||t.texture)([[[0,0,0,0]]]),1];async function od(t,e,o){ed===!1&&(ed=t.hasExtension("EXT_texture_filter_anisotropic")?t._gl.getParameter(t._gl.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0);let r,n;try{let a=await $2.fetchImage(e,S_(o));n=a.title,r=await createImageBitmap(a.image),nd.drawImage(r,0,0,sc.width,sc.height)}catch(a){return console.error(a),o=="high"?await od(t,e,"low"):z_(t)}return[(ic.pop()||t.texture)({data:sc,min:"mipmap",mipmap:"nice",aniso:ed,flipY:!0}),a=>M_.init(ic.pop()||t.texture,n,a),r.width/r.height]}I2.exports={fetch:(t,e=10,o="low",r,n)=>{let a=Object.keys(td).length;$2.fetchList(a,e).then(s=>{e=s.length,s.map(i=>{if(td[i.image_id]){--e===0&&n();return}td[i.image_id]=i,od(t,i,o).then(([c,h,l])=>{r({...i,tex:c,textGen:h,aspect:l}),--e===0&&n()})})})},load:(t,e,o="low")=>{e.tex||e.loading||(e.loading=!0,od(t,e,o).then(([r,n])=>{e.loading=!1,e.tex=r,e.text=n(e.width)}))},unload:t=>{t.tex&&(ic.push(t.tex),t.tex=void 0),t.text&&(ic.push(t.text),t.text=void 0)}}});var F2=At((qz,D2)=>{D2.exports=A_;function A_(){var t=new Float32Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var H2=At((Dz,G2)=>{G2.exports=T_;function T_(t){var e=new Float32Array(16);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var B2=At((Fz,U2)=>{U2.exports=L_;function L_(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var rd=At((Gz,j2)=>{j2.exports=N_;function N_(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var V2=At((Hz,W2)=>{W2.exports=R_;function R_(t,e){if(t===e){var o=e[1],r=e[2],n=e[3],a=e[6],s=e[7],i=e[11];t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=o,t[6]=e[9],t[7]=e[13],t[8]=r,t[9]=a,t[11]=e[14],t[12]=n,t[13]=s,t[14]=i}else t[0]=e[0],t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=e[1],t[5]=e[5],t[6]=e[9],t[7]=e[13],t[8]=e[2],t[9]=e[6],t[10]=e[10],t[11]=e[14],t[12]=e[3],t[13]=e[7],t[14]=e[11],t[15]=e[15];return t}});var Y2=At((Uz,X2)=>{X2.exports=O_;function O_(t,e){var o=e[0],r=e[1],n=e[2],a=e[3],s=e[4],i=e[5],c=e[6],h=e[7],l=e[8],d=e[9],u=e[10],p=e[11],f=e[12],v=e[13],m=e[14],g=e[15],x=o*i-r*s,y=o*c-n*s,w=o*h-a*s,M=r*c-n*i,_=r*h-a*i,S=n*h-a*c,R=l*v-d*f,T=l*m-u*f,H=l*g-p*f,q=d*m-u*v,W=d*g-p*v,F=u*g-p*m,j=x*F-y*W+w*q+M*H-_*T+S*R;return j?(j=1/j,t[0]=(i*F-c*W+h*q)*j,t[1]=(n*W-r*F-a*q)*j,t[2]=(v*S-m*_+g*M)*j,t[3]=(u*_-d*S-p*M)*j,t[4]=(c*H-s*F-h*T)*j,t[5]=(o*F-n*H+a*T)*j,t[6]=(m*w-f*S-g*y)*j,t[7]=(l*S-u*w+p*y)*j,t[8]=(s*W-i*H+h*R)*j,t[9]=(r*H-o*W-a*R)*j,t[10]=(f*_-v*w+g*x)*j,t[11]=(d*w-l*_-p*x)*j,t[12]=(i*T-s*q-c*R)*j,t[13]=(o*q-r*T+n*R)*j,t[14]=(v*y-f*M-m*x)*j,t[15]=(l*M-d*y+u*x)*j,t):null}});var Q2=At((Bz,K2)=>{K2.exports=C_;function C_(t,e){var o=e[0],r=e[1],n=e[2],a=e[3],s=e[4],i=e[5],c=e[6],h=e[7],l=e[8],d=e[9],u=e[10],p=e[11],f=e[12],v=e[13],m=e[14],g=e[15];return t[0]=i*(u*g-p*m)-d*(c*g-h*m)+v*(c*p-h*u),t[1]=-(r*(u*g-p*m)-d*(n*g-a*m)+v*(n*p-a*u)),t[2]=r*(c*g-h*m)-i*(n*g-a*m)+v*(n*h-a*c),t[3]=-(r*(c*p-h*u)-i*(n*p-a*u)+d*(n*h-a*c)),t[4]=-(s*(u*g-p*m)-l*(c*g-h*m)+f*(c*p-h*u)),t[5]=o*(u*g-p*m)-l*(n*g-a*m)+f*(n*p-a*u),t[6]=-(o*(c*g-h*m)-s*(n*g-a*m)+f*(n*h-a*c)),t[7]=o*(c*p-h*u)-s*(n*p-a*u)+l*(n*h-a*c),t[8]=s*(d*g-p*v)-l*(i*g-h*v)+f*(i*p-h*d),t[9]=-(o*(d*g-p*v)-l*(r*g-a*v)+f*(r*p-a*d)),t[10]=o*(i*g-h*v)-s*(r*g-a*v)+f*(r*h-a*i),t[11]=-(o*(i*p-h*d)-s*(r*p-a*d)+l*(r*h-a*i)),t[12]=-(s*(d*m-u*v)-l*(i*m-c*v)+f*(i*u-c*d)),t[13]=o*(d*m-u*v)-l*(r*m-n*v)+f*(r*u-n*d),t[14]=-(o*(i*m-c*v)-s*(r*m-n*v)+f*(r*c-n*i)),t[15]=o*(i*u-c*d)-s*(r*u-n*d)+l*(r*c-n*i),t}});var J2=At((jz,Z2)=>{Z2.exports=P_;function P_(t){var e=t[0],o=t[1],r=t[2],n=t[3],a=t[4],s=t[5],i=t[6],c=t[7],h=t[8],l=t[9],d=t[10],u=t[11],p=t[12],f=t[13],v=t[14],m=t[15],g=e*s-o*a,x=e*i-r*a,y=e*c-n*a,w=o*i-r*s,M=o*c-n*s,_=r*c-n*i,S=h*f-l*p,R=h*v-d*p,T=h*m-u*p,H=l*v-d*f,q=l*m-u*f,W=d*m-u*v;return g*W-x*q+y*H+w*T-M*R+_*S}});var e3=At((Wz,t3)=>{t3.exports=$_;function $_(t,e,o){var r=e[0],n=e[1],a=e[2],s=e[3],i=e[4],c=e[5],h=e[6],l=e[7],d=e[8],u=e[9],p=e[10],f=e[11],v=e[12],m=e[13],g=e[14],x=e[15],y=o[0],w=o[1],M=o[2],_=o[3];return t[0]=y*r+w*i+M*d+_*v,t[1]=y*n+w*c+M*u+_*m,t[2]=y*a+w*h+M*p+_*g,t[3]=y*s+w*l+M*f+_*x,y=o[4],w=o[5],M=o[6],_=o[7],t[4]=y*r+w*i+M*d+_*v,t[5]=y*n+w*c+M*u+_*m,t[6]=y*a+w*h+M*p+_*g,t[7]=y*s+w*l+M*f+_*x,y=o[8],w=o[9],M=o[10],_=o[11],t[8]=y*r+w*i+M*d+_*v,t[9]=y*n+w*c+M*u+_*m,t[10]=y*a+w*h+M*p+_*g,t[11]=y*s+w*l+M*f+_*x,y=o[12],w=o[13],M=o[14],_=o[15],t[12]=y*r+w*i+M*d+_*v,t[13]=y*n+w*c+M*u+_*m,t[14]=y*a+w*h+M*p+_*g,t[15]=y*s+w*l+M*f+_*x,t}});var n3=At((Vz,o3)=>{o3.exports=I_;function I_(t,e,o){var r=o[0],n=o[1],a=o[2],s,i,c,h,l,d,u,p,f,v,m,g;return e===t?(t[12]=e[0]*r+e[4]*n+e[8]*a+e[12],t[13]=e[1]*r+e[5]*n+e[9]*a+e[13],t[14]=e[2]*r+e[6]*n+e[10]*a+e[14],t[15]=e[3]*r+e[7]*n+e[11]*a+e[15]):(s=e[0],i=e[1],c=e[2],h=e[3],l=e[4],d=e[5],u=e[6],p=e[7],f=e[8],v=e[9],m=e[10],g=e[11],t[0]=s,t[1]=i,t[2]=c,t[3]=h,t[4]=l,t[5]=d,t[6]=u,t[7]=p,t[8]=f,t[9]=v,t[10]=m,t[11]=g,t[12]=s*r+l*n+f*a+e[12],t[13]=i*r+d*n+v*a+e[13],t[14]=c*r+u*n+m*a+e[14],t[15]=h*r+p*n+g*a+e[15]),t}});var a3=At((Xz,r3)=>{r3.exports=q_;function q_(t,e,o){var r=o[0],n=o[1],a=o[2];return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t[4]=e[4]*n,t[5]=e[5]*n,t[6]=e[6]*n,t[7]=e[7]*n,t[8]=e[8]*a,t[9]=e[9]*a,t[10]=e[10]*a,t[11]=e[11]*a,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var i3=At((Yz,s3)=>{s3.exports=D_;function D_(t,e,o,r){var n=r[0],a=r[1],s=r[2],i=Math.sqrt(n*n+a*a+s*s),c,h,l,d,u,p,f,v,m,g,x,y,w,M,_,S,R,T,H,q,W,F,j,pt;return Math.abs(i)<1e-6?null:(i=1/i,n*=i,a*=i,s*=i,c=Math.sin(o),h=Math.cos(o),l=1-h,d=e[0],u=e[1],p=e[2],f=e[3],v=e[4],m=e[5],g=e[6],x=e[7],y=e[8],w=e[9],M=e[10],_=e[11],S=n*n*l+h,R=a*n*l+s*c,T=s*n*l-a*c,H=n*a*l-s*c,q=a*a*l+h,W=s*a*l+n*c,F=n*s*l+a*c,j=a*s*l-n*c,pt=s*s*l+h,t[0]=d*S+v*R+y*T,t[1]=u*S+m*R+w*T,t[2]=p*S+g*R+M*T,t[3]=f*S+x*R+_*T,t[4]=d*H+v*q+y*W,t[5]=u*H+m*q+w*W,t[6]=p*H+g*q+M*W,t[7]=f*H+x*q+_*W,t[8]=d*F+v*j+y*pt,t[9]=u*F+m*j+w*pt,t[10]=p*F+g*j+M*pt,t[11]=f*F+x*j+_*pt,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)}});var l3=At((Kz,c3)=>{c3.exports=F_;function F_(t,e,o){var r=Math.sin(o),n=Math.cos(o),a=e[4],s=e[5],i=e[6],c=e[7],h=e[8],l=e[9],d=e[10],u=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=a*n+h*r,t[5]=s*n+l*r,t[6]=i*n+d*r,t[7]=c*n+u*r,t[8]=h*n-a*r,t[9]=l*n-s*r,t[10]=d*n-i*r,t[11]=u*n-c*r,t}});var h3=At((Qz,f3)=>{f3.exports=G_;function G_(t,e,o){var r=Math.sin(o),n=Math.cos(o),a=e[0],s=e[1],i=e[2],c=e[3],h=e[8],l=e[9],d=e[10],u=e[11];return e!==t&&(t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=a*n-h*r,t[1]=s*n-l*r,t[2]=i*n-d*r,t[3]=c*n-u*r,t[8]=a*r+h*n,t[9]=s*r+l*n,t[10]=i*r+d*n,t[11]=c*r+u*n,t}});var d3=At((Zz,u3)=>{u3.exports=H_;function H_(t,e,o){var r=Math.sin(o),n=Math.cos(o),a=e[0],s=e[1],i=e[2],c=e[3],h=e[4],l=e[5],d=e[6],u=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=a*n+h*r,t[1]=s*n+l*r,t[2]=i*n+d*r,t[3]=c*n+u*r,t[4]=h*n-a*r,t[5]=l*n-s*r,t[6]=d*n-i*r,t[7]=u*n-c*r,t}});var v3=At((Jz,p3)=>{p3.exports=U_;function U_(t,e,o){var r,n,a,s=o[0],i=o[1],c=o[2],h=Math.sqrt(s*s+i*i+c*c);return Math.abs(h)<1e-6?null:(h=1/h,s*=h,i*=h,c*=h,r=Math.sin(e),n=Math.cos(e),a=1-n,t[0]=s*s*a+n,t[1]=i*s*a+c*r,t[2]=c*s*a-i*r,t[3]=0,t[4]=s*i*a-c*r,t[5]=i*i*a+n,t[6]=c*i*a+s*r,t[7]=0,t[8]=s*c*a+i*r,t[9]=i*c*a-s*r,t[10]=c*c*a+n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)}});var g3=At((tA,m3)=>{m3.exports=B_;function B_(t,e,o){var r=e[0],n=e[1],a=e[2],s=e[3],i=r+r,c=n+n,h=a+a,l=r*i,d=r*c,u=r*h,p=n*c,f=n*h,v=a*h,m=s*i,g=s*c,x=s*h;return t[0]=1-(p+v),t[1]=d+x,t[2]=u-g,t[3]=0,t[4]=d-x,t[5]=1-(l+v),t[6]=f+m,t[7]=0,t[8]=u+g,t[9]=f-m,t[10]=1-(l+p),t[11]=0,t[12]=o[0],t[13]=o[1],t[14]=o[2],t[15]=1,t}});var y3=At((eA,x3)=>{x3.exports=j_;function j_(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var w3=At((oA,b3)=>{b3.exports=W_;function W_(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t}});var M3=At((nA,_3)=>{_3.exports=V_;function V_(t,e){var o=Math.sin(e),r=Math.cos(e);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=o,t[7]=0,t[8]=0,t[9]=-o,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var S3=At((rA,k3)=>{k3.exports=X_;function X_(t,e){var o=Math.sin(e),r=Math.cos(e);return t[0]=r,t[1]=0,t[2]=-o,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=o,t[9]=0,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var z3=At((aA,E3)=>{E3.exports=Y_;function Y_(t,e){var o=Math.sin(e),r=Math.cos(e);return t[0]=r,t[1]=o,t[2]=0,t[3]=0,t[4]=-o,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var T3=At((sA,A3)=>{A3.exports=K_;function K_(t,e){var o=e[0],r=e[1],n=e[2],a=e[3],s=o+o,i=r+r,c=n+n,h=o*s,l=r*s,d=r*i,u=n*s,p=n*i,f=n*c,v=a*s,m=a*i,g=a*c;return t[0]=1-d-f,t[1]=l+g,t[2]=u-m,t[3]=0,t[4]=l-g,t[5]=1-h-f,t[6]=p+v,t[7]=0,t[8]=u+m,t[9]=p-v,t[10]=1-h-d,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var N3=At((iA,L3)=>{L3.exports=Q_;function Q_(t,e,o,r,n,a,s){var i=1/(o-e),c=1/(n-r),h=1/(a-s);return t[0]=a*2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a*2*c,t[6]=0,t[7]=0,t[8]=(o+e)*i,t[9]=(n+r)*c,t[10]=(s+a)*h,t[11]=-1,t[12]=0,t[13]=0,t[14]=s*a*2*h,t[15]=0,t}});var O3=At((cA,R3)=>{R3.exports=Z_;function Z_(t,e,o,r,n){var a=1/Math.tan(e/2),s=1/(r-n);return t[0]=a/o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(n+r)*s,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*n*r*s,t[15]=0,t}});var P3=At((lA,C3)=>{C3.exports=J_;function J_(t,e,o,r){var n=Math.tan(e.upDegrees*Math.PI/180),a=Math.tan(e.downDegrees*Math.PI/180),s=Math.tan(e.leftDegrees*Math.PI/180),i=Math.tan(e.rightDegrees*Math.PI/180),c=2/(s+i),h=2/(n+a);return t[0]=c,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=h,t[6]=0,t[7]=0,t[8]=-((s-i)*c*.5),t[9]=(n-a)*h*.5,t[10]=r/(o-r),t[11]=-1,t[12]=0,t[13]=0,t[14]=r*o/(o-r),t[15]=0,t}});var I3=At((fA,$3)=>{$3.exports=tM;function tM(t,e,o,r,n,a,s){var i=1/(e-o),c=1/(r-n),h=1/(a-s);return t[0]=-2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*c,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*h,t[11]=0,t[12]=(e+o)*i,t[13]=(n+r)*c,t[14]=(s+a)*h,t[15]=1,t}});var D3=At((hA,q3)=>{var eM=rd();q3.exports=oM;function oM(t,e,o,r){var n,a,s,i,c,h,l,d,u,p,f=e[0],v=e[1],m=e[2],g=r[0],x=r[1],y=r[2],w=o[0],M=o[1],_=o[2];return Math.abs(f-w)<1e-6&&Math.abs(v-M)<1e-6&&Math.abs(m-_)<1e-6?eM(t):(l=f-w,d=v-M,u=m-_,p=1/Math.sqrt(l*l+d*d+u*u),l*=p,d*=p,u*=p,n=x*u-y*d,a=y*l-g*u,s=g*d-x*l,p=Math.sqrt(n*n+a*a+s*s),p?(p=1/p,n*=p,a*=p,s*=p):(n=0,a=0,s=0),i=d*s-u*a,c=u*n-l*s,h=l*a-d*n,p=Math.sqrt(i*i+c*c+h*h),p?(p=1/p,i*=p,c*=p,h*=p):(i=0,c=0,h=0),t[0]=n,t[1]=i,t[2]=l,t[3]=0,t[4]=a,t[5]=c,t[6]=d,t[7]=0,t[8]=s,t[9]=h,t[10]=u,t[11]=0,t[12]=-(n*f+a*v+s*m),t[13]=-(i*f+c*v+h*m),t[14]=-(l*f+d*v+u*m),t[15]=1,t)}});var G3=At((uA,F3)=>{F3.exports=nM;function nM(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"}});var cc=At((dA,H3)=>{H3.exports={create:F2(),clone:H2(),copy:B2(),identity:rd(),transpose:V2(),invert:Y2(),adjoint:Q2(),determinant:J2(),multiply:e3(),translate:n3(),scale:a3(),rotate:i3(),rotateX:l3(),rotateY:h3(),rotateZ:d3(),fromRotation:v3(),fromRotationTranslation:g3(),fromScaling:y3(),fromTranslation:w3(),fromXRotation:M3(),fromYRotation:S3(),fromZRotation:z3(),fromQuat:T3(),frustum:N3(),perspective:O3(),perspectiveFromFieldOfView:P3(),ortho:I3(),lookAt:D3(),str:G3()}});var j3=At((pA,B3)=>{"use strict";var U3=q2(),zn=cc(),js=S0(),rM=3e3,_h="high",ad,El=.36,zl=13.64,lc=js.C.hallEnd-.01,Al=js.C.z0+.01,aM=.356,sM=13.644,iM=js.C.hallEnd-.006,cM=js.C.z0+.006,lM=.12,kh=4,fc=t=>E0[t]&&E0[t].cy||kh,sd=.26,fM=5.6,hM=7,E0=[{side:"right",z:34.5},{side:"right",z:23.5},{side:"left",z:23.5},{side:"end",z:lc},{side:"left",z:34.5},{side:"right",z:14.6},{side:"left",z:14.6,maxW:3.7,maxH:3.7},{side:"corridor",x:js.PAINTING_X[0],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:js.PAINTING_X[1],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:js.PAINTING_X[2],cy:3,maxW:3.3,maxH:3.73}];function uM(t,e){let o=e&&e.maxH||fM,r=e&&e.maxW||hM,n=Math.min(o,r/t);return{width:n*t,height:n}}function dM(t,e,o){let r=E0[o],n=[],a=fc(o)-e/2;return r.side==="left"?(zn.fromTranslation(n,[El,a,r.z+t/2]),zn.rotateY(n,n,Math.PI/2)):r.side==="right"?(zn.fromTranslation(n,[zl,a,r.z-t/2]),zn.rotateY(n,n,-Math.PI/2)):r.side==="corridor"?zn.fromTranslation(n,[r.x-t/2,a,Al]):(zn.fromTranslation(n,[7+t/2,a,lc]),zn.rotateY(n,n,Math.PI)),zn.scale(n,n,[t,e,lM]),n}function pM(t,e,o){let r=E0[o],n=[],a=fc(o)-e/2;return r.side==="left"?(zn.fromTranslation(n,[El,a,r.z+t/2]),zn.rotateY(n,n,Math.PI/2)):r.side==="right"?(zn.fromTranslation(n,[zl,a,r.z-t/2]),zn.rotateY(n,n,-Math.PI/2)):r.side==="corridor"?zn.fromTranslation(n,[r.x-t/2,a,Al]):(zn.fromTranslation(n,[7+t/2,a,lc]),zn.rotateY(n,n,Math.PI)),n}function vM(t,e,o){let r=E0[o],n=[],a=fc(o)-e/2-sd-.38;return r.side==="left"?(zn.fromTranslation(n,[aM,a,r.z+t/2]),zn.rotateY(n,n,Math.PI/2)):r.side==="right"?(zn.fromTranslation(n,[sM,a,r.z-t/2]),zn.rotateY(n,n,-Math.PI/2)):r.side==="corridor"?zn.fromTranslation(n,[r.x-t/2,a,cM]):(zn.fromTranslation(n,[7+t/2,a,iM]),zn.rotateY(n,n,Math.PI)),zn.scale(n,n,[2,2,2]),n}function mM(t,e,o){let r=E0[o],n=fc(o)-e/2-sd-.38;return r.side==="left"?[El+.55,n,r.z]:r.side==="right"?[zl-.55,n,r.z]:r.side==="corridor"?[r.x,n,Al+.55]:[7,n,lc-.55]}var Sl=.42;function Mh(t,e,o,r,n,a){return[e[0]*r,e[1]*r,e[2]*r,0,0,n,0,0,o[0]*a,o[1]*a,o[2]*a,0,t[0],t[1],t[2],1]}function gM(t,e,o){let r=E0[o],n,a,s;r.side==="left"?(n=[El,r.z],a=[0,0,1],s=[1,0,0]):r.side==="right"?(n=[zl,r.z],a=[0,0,1],s=[-1,0,0]):r.side==="corridor"?(n=[r.x,Al],a=[1,0,0],s=[0,0,1]):(n=[7,lc],a=[1,0,0],s=[0,0,-1]);let i=fc(o)+e/2+sd+.3,c=Math.min(2.4,Math.max(.9,t*.55)),h=(p,f)=>[n[0]+s[0]*p,f,n[1]+s[2]*p],l=[.075,.062,.05],d=[{fixmodel:Mh(h(.014,i),a,s,.1,.13,.028),fixcol:l,fixglow:0},{fixmodel:Mh(h(Sl/2,i),a,s,.02,.02,Sl),fixcol:l,fixglow:0},{fixmodel:Mh(h(Sl,i),a,s,c,.034,.05),fixcol:l,fixglow:0},{fixmodel:Mh(h(Sl-.012,i-.019),a,s,c*.94,.006,.028),fixcol:l,fixglow:1}],u=h(Sl,i-.02);return{fixtures:d,light:{c:[u[0],u[1],u[2],1],d:[a[0],a[1],a[2],c/2]}}}B3.exports=(t,e)=>{let o=[],r=[],n=a=>{let s=a.image_id;if(!E0[s])return;let{width:i,height:c}=uM(a.aspect,E0[s]),h=gM(i,c,s);e&&e.lights&&s<e.lights.length&&(e.lights[s]=h.light),o.push({...a,fixtures:h.fixtures,side:E0[s].side,model:dM(i,c,s),framemodel:pM(i,c,s),framesize:[i,c],textmodel:vM(i,c,s),text:a.textGen(i),width:i,height:c,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:mM(i,c,s),paintingPosition:E0[s].side==="left"?[El+.05,kh,E0[s].z]:E0[s].side==="right"?[zl-.05,kh,E0[s].z]:E0[s].side==="corridor"?[E0[s].x,fc(s),Al+.05]:[7,kh,lc-.05],textGen:null})};return U3.fetch(t,E0.length,_h,n,()=>{}),{update:()=>{r=o,r.forEach(a=>{U3.load(t,a,_h)}),_h="low",ad&&clearTimeout(ad),ad=setTimeout(()=>{_h="high"},rM)},batch:()=>r,interactables:()=>r.map((a,s)=>({side:a.side,width:a.width,index:s,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:a.plaquePosition,paintingPosition:a.paintingPosition}))}}});var Y3=At((vA,X3)=>{"use strict";var xM=Zu(),W3=zr(),V3=[[-.02,.125],[-.02,.15],[.035,.15],[.07,.12],[.07,.17],[.185,.17],[.185,.19],[.215,.19],[.26,.03]];function yM(){let t=[[0,0],[1,0],[1,1],[0,1]],e=[];V3.forEach(([r,n])=>{t.forEach(([a,s])=>e.push([a,s,r,n]))});let o=[];for(let r=0;r<V3.length-1;r++)for(let n=0;n<4;n++){let a=(n+1)%4,s=r*4+n,i=r*4+a,c=(r+1)*4+n,h=(r+1)*4+a;o.push(s,i,h,s,h,c)}return{verts:e,elems:o}}var bM=`#extension GL_OES_standard_derivatives : enable
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
}`,wM=`
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
}`;X3.exports=t=>{let e=xM.draw(t),o=t({frag:`#extension GL_OES_standard_derivatives : enable
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
	}`,attributes:{pos:[0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,-.1,-.1,0,1.1,-.1,0,-.1,1.1,0,1.1,1.1,0]},elements:[0,1,2,3,2,1,1,0,5,4,5,0,3,1,7,5,7,1,0,2,4,6,4,2,8,9,4,5,4,9,9,11,5,7,5,11,11,10,7,6,7,10,10,8,6,4,6,8],uniforms:{model:t.prop("model"),tex:t.prop("tex"),psize:t.prop("framesize"),canvasCm:(s,i)=>i.size?[i.size[1],i.size[0]]:[61,91],texel:1/(W3.isPhone?1024:2048),detail:()=>W3.post===0?0:1},blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}}),r=yM(),n=t({frag:bM,vert:wM,attributes:{prof:r.verts},elements:r.elems,uniforms:{model:t.prop("framemodel"),fsize:t.prop("framesize")},cull:{enable:!1},blend:{enable:!1}}),a=t({frag:`#extension GL_OES_standard_derivatives : enable
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
}`,attributes:{pos:[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5],[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]]},elements:[0,1,2,0,2,3,4,5,6,4,6,7,0,1,5,0,5,4,2,3,7,2,7,6,0,3,7,0,7,4,1,2,6,1,6,5],uniforms:{model:t.prop("fixmodel"),fixcol:t.prop("fixcol"),fixglow:t.prop("fixglow")},cull:{enable:!1},blend:{enable:!1}});return function(s){o(s),n(s);let i=[];s.forEach(c=>{c.fixtures&&i.push(...c.fixtures)}),i.length&&a(i),e(s)}}});var Ks=At((gA,Yr)=>{"use strict";var vo=Math.PI,st=t=>(+t).toFixed(4),Re=[-90,0,0],It=16,Ce=22,xo=7.8,vr=11.6,b0=.55,mr=(vr-xo)/(It/2),ye={c:[3.6,8.6,13.6,18.6],hw:1.3,sill:.62,spring:4.9};ye.top=ye.spring+ye.hw;var j0={cols:[-.65,0,.65],rowH:.71,w:.055,ring:.78},Qo={rafter:Ce/12,rafterW:.1,purlin:1,purlinW:.07},Rl=[5.5,11,16.5],No={cx:It/2,hw:1.12,spring:3.95,pier:1.05,face:Ce-1.45,back:Ce-.2,floor:.66,top:6.55};No.x0=No.cx-No.hw-No.pier;No.x1=No.cx+No.hw+No.pier;var ht={x0:It/2-1.7,x1:It/2+1.7,z0:Ce-No.face+.44,z1:Ce-7.2,curb:.5,top:.36},Gn=t=>ht.z1-(t-5.6)/11*(ht.z1-ht.z0),yn={x:It/2,z:1,plinth:No.floor+.26,height:2.75,yaw:.35,file:"res/nymph.bin"},Sh=Ce-yn.z,ua=(()=>{let t=[-.68,.6,.36],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),id=t=>[t[0]+Re[0],t[1]+Re[1],t[2]+Re[2]];function eg(){let t=ye.c.map(o=>`
		{
			float dz = q.z - ${st(o)};
			float inside = smoothstep(-b, b, ${st(ye.hw)} - abs(dz)) * smoothstep(-b, b, q.y - ${st(ye.sill)});
			float arch = smoothstep(-b, b, ${st(ye.hw)} - length(vec2(dz, max(q.y - ${st(ye.spring)}, 0.0))));
			o = max(o, inside * arch);
		}`).join(""),e=ye.c.map(o=>`
		{
			float dz = q.z - ${st(o)};
			if (abs(dz) < ${st(ye.hw+.2)}) {
				${j0.cols.map(r=>`bar = max(bar, 1.0 - smoothstep(${st(j0.w*.5)} - b, ${st(j0.w*.5)} + b, abs(dz - ${st(r)})));`).join(`
				`)}
				float ry = q.y - ${st(ye.sill)};
				float tr = abs(ry - ${st(j0.rowH)} * floor(ry / ${st(j0.rowH)} + 0.5));
				if (q.y < ${st(ye.spring+.02)}) bar = max(bar, 1.0 - smoothstep(${st(j0.w*.5)} - b, ${st(j0.w*.5)} + b, tr));
				float rr = length(vec2(dz, q.y - ${st(ye.spring)}));
				if (q.y > ${st(ye.spring)}) bar = max(bar, 1.0 - smoothstep(${st(j0.w*.5)} - b, ${st(j0.w*.5)} + b, abs(rr - ${st(j0.ring)})));
				// the frame round the opening
				bar = max(bar, 1.0 - smoothstep(0.0, b + 0.03, ${st(ye.hw)} - max(abs(dz), q.y > ${st(ye.spring)} ? rr : 0.0)));
			}
		}`).join("");return`
	const vec3 STUDIO_SUN = vec3(${st(ua[0])}, ${st(ua[1])}, ${st(ua[2])});

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
	// coordinates (centre 0, half size ${st(Qo.purlin/2)} x ${st(Qo.rafter/2)}),
	// b the softness. Returns how much light gets through.
	float studioRoofPattern(vec2 q, float b) {
		vec2 hs = vec2(${st(Qo.purlin/2)}, ${st(Qo.rafter/2)});
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
		vec3 p = pw - vec3(${st(Re[0])}, ${st(Re[1])}, ${st(Re[2])});
		vec3 S = STUDIO_SUN;
		// the niche: inside its hollow, the sun gets in only through the arch;
		// elsewhere its block of stone stands in the way of some of the light
		{
			// (worked as if the niche stood against the far wall: z turned round)
			vec3 q = vec3(${st(It)} - p.x, p.y, ${st(Ce)} - p.z);
			vec3 Sq = vec3(-S.x, S.y, -S.z);
			float dxn = q.x - ${st(No.cx)};
			if (abs(dxn) < ${st(No.hw)} && q.z > ${st(No.face)} && q.y > ${st(No.floor-.05)} && q.y < ${st(No.spring)} + sqrt(max(${st(No.hw*No.hw)} - dxn * dxn, 0.0))) {
				if (Sq.z >= 0.0) return 0.0;
				vec3 hf = q + Sq * ((${st(No.face)} - q.z) / Sq.z);
				float hx = hf.x - ${st(No.cx)};
				float edge = ${st(No.hw)} - abs(hx);
				float topY = ${st(No.spring)} + sqrt(max(${st(No.hw*No.hw)} - hx * hx, 0.0));
				float soft = 0.02 + 0.03 * (${st(No.face)} - q.z) / Sq.z;
				float inA = smoothstep(-soft, soft, edge) * smoothstep(-soft, soft, topY - hf.y);
				if (inA <= 0.0) return 0.0;
			} else {
				vec3 bmin = vec3(${st(No.x0-.2)}, 0.0, ${st(No.face-.3)}), bmax = vec3(${st(No.x1+.2)}, ${st(6.95)}, ${st(Ce)});
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
		float te = (${st(xo)} - p.y) / S.y;
		if (tw > 0.0 && tw < te) {
			vec3 h0 = p + S * tw;
			if (h0.z < 0.0 || h0.z > ${st(Ce)}) return 0.0;
			vec3 h1 = p + S * ((${st(-b0)} - p.x) / S.x);
			vec3 hm = p + S * ((${st(-b0*.5)} - p.x) / S.x);
			float b = 0.006 + 0.0075 * tw;
			float open = min(studioWinOpen(h0, b), studioWinOpen(h1, b));
			if (open <= 0.0) return 0.0;
			float bar = studioWinBars(hm, b);
			return open * (1.0 - bar) * 0.92;
		}
		// up through the roof: the trusses' tie beams first
		vec3 he = p + S * max(te, 0.0);
		float vis = 1.0;
		if (p.y < ${st(xo)}) {
			if (he.z < 0.0 || he.z > ${st(Ce)} || he.x < 0.0 || he.x > ${st(It)}) return 0.0;
			float be = 0.01 + 0.008 * te;
			${Rl.map(o=>`vis *= smoothstep(0.08 - be, 0.08 + be, abs(he.z - ${st(o)}));`).join(`
			`)}
			// the bougainvillea along the tie beams
			${Xs.filter(o=>o[0]==="truss").map(([o,r,n])=>`vis *= 1.0 - studioVineShade(he.z - ${st(r)}, he.x, he.z, ${st(n)});`).join(`
			`)}
		}
		// then the glass: the two slopes of the roof
		float tl = (${st(mr)} * p.x - p.y + ${st(xo)}) / (S.y - ${st(mr)} * S.x);
		float tr = (${st(mr)} * (${st(It)} - p.x) - p.y + ${st(xo)}) / (S.y + ${st(mr)} * S.x);
		float t = 1e9;
		vec3 h = vec3(0.0);
		vec3 hl = p + S * tl, hr = p + S * tr;
		if (tl > 0.0 && hl.x >= -0.01 && hl.x <= ${st(It/2+.01)}) { t = tl; h = hl; }
		if (tr > 0.0 && tr < t && hr.x >= ${st(It/2-.01)} && hr.x <= ${st(It+.01)}) { t = tr; h = hr; }
		if (t > 1e8) return 0.0;
		if (h.z < 0.0 || h.z > ${st(Ce)}) return 0.0;
		float b = 0.008 + 0.0075 * t;
		float rz = abs(h.z - ${st(Qo.rafter)} * floor(h.z / ${st(Qo.rafter)} + 0.5));
		float bar = 1.0 - smoothstep(${st(Qo.rafterW*.5)} - b, ${st(Qo.rafterW*.5)} + b, rz);
		float ux = h.x < ${st(It/2)} ? h.x : ${st(It)} - h.x;
		float rx = abs(ux - ${st(Qo.purlin)} * floor(ux / ${st(Qo.purlin)} + 0.5));
		bar = max(bar, 1.0 - smoothstep(${st(Qo.purlinW*.5)} - b, ${st(Qo.purlinW*.5)} + b, rx));
		// the ridge beam
		bar = max(bar, 1.0 - smoothstep(0.14 - b, 0.14 + b, abs(h.x - ${st(It/2)})));
		// the leaded pattern in the panes (its shadow is crisper than
		// the sun's disc would allow, for the drawing to read)
		vec2 pq = vec2(ux - ${st(Qo.purlin)} * floor(ux / ${st(Qo.purlin)}) - ${st(Qo.purlin/2)}, h.z - ${st(Qo.rafter)} * floor(h.z / ${st(Qo.rafter)}) - ${st(Qo.rafter/2)});
		float pat = studioRoofPattern(pq, 0.004 + 0.0035 * t);
		// and along the rafters and the ridge
		${Xs.filter(o=>o[0]==="rafter").map(([o,r,n])=>`pat *= 1.0 - studioVineShade(h.z - ${st(r)}, h.x, h.z, ${st(n)});`).join(`
		`)}
		pat *= 1.0 - studioVineShade(h.x - ${st(It/2)}, h.z, h.x, 0.9);
		return vis * (1.0 - bar) * pat * 0.78;
	}`}function Ys(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let o=e;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}var Et={FLOOR:0,PLASTER:1,STONE:2,STEEL:3,WATER:4,PAD:5,PETAL:6,STAMEN:7,MARBLE:8,WOOD:9,GESSO:10,PAINT:11,POT:12,SHADE:13,BULB:14,NICHE:15,JAR:16,SOIL:17,BRUSH:18,TRAVERTINE:19,CLOTH:20,WMARBLE:21,REDDOOR:22,REDPANEL:23,DARKWOOD:24,BRASS:25,BRACT:26,KEYHOLE:27,ROCK:28,OLDSTONE:29,HOLLOW:30};function cd(){let t={pos:[],nrm:[],kind:[],uv:[],anchor:[],idx:[]};return t.float=null,t.v=(e,o,r,n)=>(t.pos.push(e[0]+Re[0],e[1]+Re[1],e[2]+Re[2]),t.nrm.push(o[0],o[1],o[2]),t.kind.push(r),t.uv.push(n?n[0]:0,n?n[1]:0),t.float?t.anchor.push(t.float[0]+Re[0],t.float[1]+Re[2],t.float[2],1):t.anchor.push(0,0,0,0),t.pos.length/3-1),t.quad=(e,o,r,n,a,s,i)=>{let c=t.v(e,a,s,i&&i[0]),h=t.v(o,a,s,i&&i[1]),l=t.v(r,a,s,i&&i[2]),d=t.v(n,a,s,i&&i[3]);t.idx.push(c,h,l,c,l,d)},t.box=(e,o,r,n,a,s,i,c)=>{let h=c||{};h.top||t.quad([e,a,r],[e,a,s],[n,a,s],[n,a,r],[0,1,0],i,[[e,r],[e,s],[n,s],[n,r]]),h.bottom||t.quad([e,o,r],[n,o,r],[n,o,s],[e,o,s],[0,-1,0],i,[[e,r],[n,r],[n,s],[e,s]]),h.x0||t.quad([e,o,r],[e,o,s],[e,a,s],[e,a,r],[-1,0,0],i,[[r,o],[s,o],[s,a],[r,a]]),h.x1||t.quad([n,o,s],[n,o,r],[n,a,r],[n,a,s],[1,0,0],i,[[s,o],[r,o],[r,a],[s,a]]),h.z0||t.quad([n,o,r],[e,o,r],[e,a,r],[n,a,r],[0,0,-1],i,[[n,o],[e,o],[e,a],[n,a]]),h.z1||t.quad([e,o,s],[n,o,s],[n,a,s],[e,a,s],[0,0,1],i,[[e,o],[n,o],[n,a],[e,a]])},t.tbox=(e,o,r,n,a,s,i,c,h)=>{let l=Math.cos(r),d=Math.sin(r),u=Math.cos(h||0),p=Math.sin(h||0),f=(g,x,y)=>{let w=a+(x-a)*u-y*p*0,M=y+(x-a)*p,_=a+(x-a)*u;return[e+l*g+d*M,_,o-d*g+l*M]},v=g=>{let x=g[1]*u-g[2]*p,y=g[2]*u+g[1]*p;return[l*g[0]+d*y,x,-d*g[0]+l*y]},m=(g,x,y,w,M)=>t.quad(f(...g),f(...x),f(...y),f(...w),v(M),c,[[g[0]+g[2],g[1]],[x[0]+x[2],x[1]],[y[0]+y[2],y[1]],[w[0]+w[2],w[1]]]);m([-n,s,-i],[-n,s,i],[n,s,i],[n,s,-i],[0,1,0]),m([-n,a,-i],[n,a,-i],[n,a,i],[-n,a,i],[0,-1,0]),m([-n,a,-i],[-n,a,i],[-n,s,i],[-n,s,-i],[-1,0,0]),m([n,a,i],[n,a,-i],[n,s,-i],[n,s,i],[1,0,0]),m([n,a,-i],[-n,a,-i],[-n,s,-i],[n,s,-i],[0,0,-1]),m([-n,a,i],[n,a,i],[n,s,i],[-n,s,i],[0,0,1])},t.beam=(e,o,r,n,a)=>{let s=[o[0]-e[0],o[1]-e[1],o[2]-e[2]],i=Math.hypot(...s),c=s.map(f=>f/i),h=a||(Math.abs(c[1])>.9?[1,0,0]:[0,1,0]),l=[c[1]*h[2]-c[2]*h[1],c[2]*h[0]-c[0]*h[2],c[0]*h[1]-c[1]*h[0]],d=Math.hypot(...l);l=l.map(f=>f/d),h=[l[1]*c[2]-l[2]*c[1],l[2]*c[0]-l[0]*c[2],l[0]*c[1]-l[1]*c[0]];let u=(f,v,m)=>[f[0]+l[0]*r*v+h[0]*r*m,f[1]+l[1]*r*v+h[1]*r*m,f[2]+l[2]*r*v+h[2]*r*m],p=[[[1,-1],[1,1],l],[[1,1],[-1,1],h],[[-1,1],[-1,-1],l.map(f=>-f)],[[-1,-1],[1,-1],h.map(f=>-f)]];for(let[f,v,m]of p)t.quad(u(e,...f),u(o,...f),u(o,...v),u(e,...v),m,n,[[0,0],[i,0],[i,1],[0,1]])},t.lathe=(e,o,r,n,a)=>{let s=a||32,i=r.map(([c,h],l)=>{let d=r[Math.max(0,l-1)],u=r[Math.min(r.length-1,l+1)],p=u[0]-d[0],f=u[1]-d[1],v=Math.hypot(p,f)||1,m=f/v,g=-p/v,x=[];for(let y=0;y<=s;y++){let w=y/s*2*vo;x.push(t.v([e+Math.cos(w)*c,h,o+Math.sin(w)*c],[Math.cos(w)*m,g,Math.sin(w)*m],n,[y/s*c*2*vo,h]))}return x});for(let c=0;c<i.length-1;c++)for(let h=0;h<s;h++){let l=i[c][h],d=i[c][h+1],u=i[c+1][h+1],p=i[c+1][h];t.idx.push(l,p,u,l,u,d)}},t}var Na=t=>Math.abs(t)>=ye.hw?null:ye.spring+Math.sqrt(ye.hw*ye.hw-t*t),Xs=[["truss",Rl[0],3.1],["truss",Rl[1],5.4],["truss",Rl[2],7.7],["rafter",Qo.rafter*2,1.7],["rafter",Qo.rafter*5,8.5],["rafter",Qo.rafter*8,13.6],["rafter",Qo.rafter*10,17],["ridge",It/2,.9],...[.75,...ye.c.slice(1).map((t,e)=>(t+ye.c[e])/2),Ce-.75].map((t,e)=>["wall",t,2.3+e*4.1])],Cl=(t,e)=>.5*Math.sin(t*1.9+e)+.5*Math.sin(t*.77+e*1.3)>-.25,_M=t=>t<It/2?xo+mr*t:xo+mr*(It-t);function Ah(t,e,o){return t==="wall"?[.12,o,e]:t==="truss"?[o,xo-.12,e]:t==="rafter"?[o,_M(o)-.2,e]:[e,vr-.32,o]}var Th=t=>t==="ridge"?[.4,Ce-.4]:t==="wall"?[.15,xo-.05]:[.35,It-.35],w0={w:1.72,spring:2.05,r:2.05,frame:.21,zl:Ce-.05,zf:Ce-.13};w0.c=w0.r-w0.w/2;var Rr=(t,e)=>{let o=w0.r+(e||0),r=Math.abs(t)+w0.c;return r>=o?w0.spring:w0.spring+Math.sqrt(o*o-r*r)};w0.top=Rr(0);function MM(t){let e=It/2,{w:o,frame:r,zl:n,zf:a}=w0,s=o/2,i=s+r,c=.02;for(let _=-i;_<i-1e-6;_+=c){let S=_,R=Math.min(i,_+c),T=(S+R)/2,H=Rr(S,r),q=Rr(R,r),W=0,F=0;Math.abs(T)<s&&(W=Rr(S),F=Rr(R)),Math.abs(T)>=s;{let j=Math.abs(T)<s?W:0,pt=Math.abs(T)<s?F:0;t.quad([e+R,pt,a],[e+S,j,a],[e+S,H,a],[e+R,q,a],[0,0,-1],Et.DARKWOOD,[[R,pt],[S,j],[S,H],[R,q]])}t.quad([e+S,H,a],[e+S,H,Ce],[e+R,q,Ce],[e+R,q,a],[0,1,0],Et.DARKWOOD,[[S,0],[S,1],[R,1],[R,0]]),Math.abs(T)<s&&t.quad([e+S,W,a],[e+R,F,a],[e+R,F,n],[e+S,W,n],[0,-1,0],Et.DARKWOOD,[[S,0],[R,0],[R,1],[S,1]])}for(let _ of[-1,1])t.quad([e+_*i,0,a],[e+_*i,0,Ce],[e+_*i,w0.spring,Ce],[e+_*i,w0.spring,a],[_,0,0],Et.DARKWOOD,[[0,0],[1,0],[1,1],[0,1]]),t.quad([e+_*s,0,a],[e+_*s,w0.spring,a],[e+_*s,w0.spring,n],[e+_*s,0,n],[-_,0,0],Et.DARKWOOD,[[0,0],[1,0],[1,1],[0,1]]),t.box(e+_*(s+r/2)-r/2-.04,0,a-.04,e+_*(s+r/2)+r/2+.04,.42,Ce,Et.DARKWOOD);let h=40;for(let _=0;_<h;_++){let S=-s+2*s*_/h,R=-s+2*s*(_+1)/h;t.beam([e+S,Rr(S)+.03,a-.015],[e+R,Rr(R)+.03,a-.015],.018,Et.DARKWOOD)}for(let _ of[-1,1])t.beam([e+_*(s+.03),.42,a-.015],[e+_*(s+.03),w0.spring+.02,a-.015],.018,Et.DARKWOOD);for(let _=-s;_<s-1e-6;_+=c){let S=_,R=Math.min(s,_+c),T=Rr(S),H=Rr(R);t.quad([e+R,0,n],[e+S,0,n],[e+S,T,n],[e+R,H,n],[0,0,-1],Et.REDDOOR,[[R,0],[S,0],[S,T],[R,H]])}let l=s-.2,d=.3,u=2.12,p=n-.006,f=.05,v=(_,S,R,T)=>t.box(e+_,S,p-.018,e+R,T,p,Et.REDDOOR);v(-l,d,l,d+f),v(-l,u-f,l,u),v(-l,d,-l+f,u),v(l-f,d,l,u),t.box(e-l+.14,d+.14,p-.022,e+l-.14,u-.14,p,Et.REDDOOR);let m=2.36;v(-s+.08,u+.06,s-.08,u+.12);for(let _ of[-1,1]){let R=s-.17;for(let T=.07;T<R-1e-6;T+=c){let H=T,q=Math.min(R,T+c),W=Rr(H,-.18),F=Rr(q,-.18);if(W<=m+.02&&F<=m+.02)continue;let j=Ht=>e+_*Ht,pt=[[j(H),m,p+.004],[j(q),m,p+.004],[j(q),Math.max(m,F),p+.004],[j(H),Math.max(m,W),p+.004]];_>0?t.quad(pt[1],pt[0],pt[3],pt[2],[0,0,-1],Et.REDPANEL,[[q,0],[H,0],[H,1],[q,1]]):t.quad(...pt,[0,0,-1],Et.REDPANEL,[[H,0],[q,0],[q,1],[H,1]])}}t.beam([e,m-.02,p-.008],[e,Rr(0,-.12),p-.008],.03,Et.REDDOOR),t.beam([e-s+.1,m-.01,p-.006],[e+s-.1,m-.01,p-.006],.014,Et.REDDOOR);let g=e-s+.15,x=1.06,y=p-.03;t.box(g-.034,x-.2,y-.008,g+.034,x+.17,y+.012,Et.BRASS);for(let[_,S]of[[x+.2,.026],[x+.235,.016],[x-.23,.026],[x-.265,.016]])t.lathe(g,y-.002,[[0,_-S],[S,_-S*.4],[S,_+S*.4],[0,_+S]],Et.BRASS,12);for(let _=0;_<6;_++){let S=x-.17+_*.065;for(let R of[-1,1])t.beam([g+R*.034,S,y-.01],[g+R*.041,S+.03,y-.01],.006,Et.BRASS)}let w=y-.008,M=(_,S,R)=>{for(let T=0;T<R;T++){let H=vo*T/R,q=vo*(T+1)/R;for(let W=0;W<16;W++){let F=2*vo*W/16,j=2*vo*(W+1)/16,pt=(Se,be)=>[g+S*Math.sin(Se)*Math.cos(be),x+.03+S*Math.sin(Se)*Math.sin(be),_-S*Math.cos(Se)],Ht=(Se,be)=>[Math.sin(Se)*Math.cos(be),Math.sin(Se)*Math.sin(be),-Math.cos(Se)],Nt=t.v(pt(H,F),Ht(H,F),Et.BRASS),xt=t.v(pt(H,j),Ht(H,j),Et.BRASS),ot=t.v(pt(q,j),Ht(q,j),Et.BRASS),Bt=t.v(pt(q,F),Ht(q,F),Et.BRASS);t.idx.push(Nt,xt,ot,Nt,ot,Bt)}}};t.beam([g,x+.03,w],[g,x+.03,w-.05],.011,Et.BRASS),M(w-.075,.034,10),t.box(g-.008,x-.1,y-.0125,g+.008,x-.06,y-.0085,Et.KEYHOLE)}function kM(t,e){let o=t.pos.length/3;for(let r=0;r<e.pos.length;r+=3){let n=e.pos[r]-Re[0],a=e.pos[r+2]-Re[2];t.pos.push(It-n+Re[0],e.pos[r+1],Ce-a+Re[2]),t.nrm.push(-e.nrm[r],e.nrm[r+1],-e.nrm[r+2])}t.kind.push(...e.kind),t.uv.push(...e.uv),t.anchor.push(...e.anchor);for(let r of e.idx)t.idx.push(r+o)}function SM(t){let{cx:e,hw:o,spring:r,pier:n,face:a,back:s,floor:i,x0:c,x1:h}=No,l=Et.OLDSTONE,d=Et.HOLLOW,u=s-o,p=5.35,f=m=>r+Math.sqrt(Math.max(0,o*o-(m-e)*(m-e)));t.box(c-.1,0,a-.28,h+.1,i-.06,Ce,l,{bottom:!0}),t.box(c-.14,i-.06,a-.34,h+.14,i,Ce,l),t.box(e-.95,ht.top,a-.62,e+.95,ht.top+.15,a-.28,l,{bottom:!0});for(let[m,g]of[[c,e-o],[e+o,h]]){t.box(m,i,a+.03,g,p,Ce,d,{bottom:!0});let x=m<e?m:g,y=m<e?g:m,w=m<e?1:-1,M=11,_=(p-.38-i)/M;for(let S=0;S<M;S++){let R=i+S*_+.018,T=i+(S+1)*_-.018,H=S%2===0,q=x+w*.01,W=H?y-w*.01:x+w*(n*.66);if(t.box(Math.min(q,W),R,a-.06,Math.max(q,W),T,a+.03,l,{z1:!0}),!H){let j=x+w*(n*.66+.025),pt=y-w*.01;t.box(Math.min(j,pt),R,a-.02,Math.max(j,pt),T,a+.03,l,{z1:!0})}let F=x-w*.035;t.box(Math.min(F,x+w*.02),R,a-.035,Math.max(F,x+w*.02),T,H?a+.9:a+.55,l)}t.box(m-.05,p-.38,a-.07,g+.05,p-.3,Ce,l),t.box(m-.02,p-.3,a-.03,g+.02,p-.12,Ce,l),t.box(m-.09,p-.12,a-.11,g+.09,p,Ce,l)}let v=.03;for(let m=e-o;m<e+o-1e-6;m+=v){let g=m,x=Math.min(e+o,m+v);t.quad([x,f(x),a+.02],[g,f(g),a+.02],[g,p,a+.02],[x,p,a+.02],[0,0,-1],l,[[x,f(x)],[g,f(g)],[g,p],[x,p]])}{let g=o+.07;for(let y=0;y<36;y++){let w=vo*y/36,M=vo*(y+1)/36;t.beam([e+Math.cos(w)*g,r+Math.sin(w)*g,a-.02],[e+Math.cos(M)*g,r+Math.sin(M)*g,a-.02],.065,l,[0,0,1])}for(let y of[-1,1])t.box(e+y*o-.16,r-.14,a-.06,e+y*o+.16,r,a+.4,l);let x=r+o;t.quad([e-.17,x+.32,a-.08],[e+.17,x+.32,a-.08],[e+.11,x-.06,a-.08],[e-.11,x-.06,a-.08],[0,0,-1],l,[[0,1],[1,1],[1,0],[0,0]]);for(let y of[-1,1])t.quad([e+y*.11,x-.06,a-.08],[e+y*.17,x+.32,a-.08],[e+y*.17,x+.32,a+.02],[e+y*.11,x-.06,a+.02],[y,-.15,0],l,[[0,0],[1,0],[1,1],[0,1]]);t.quad([e-.11,x-.06,a-.08],[e+.11,x-.06,a-.08],[e+.11,x-.06,a+.02],[e-.11,x-.06,a+.02],[0,-1,0],l,[[0,0],[1,0],[1,1],[0,1]])}for(let m of[-1,1]){let g=e+m*o;t.quad([g,i,a],[g,i,u],[g,r,u],[g,r,a],[-m,0,0],d,[[a,i],[u,i],[u,r],[a,r]])}{for(let y=0;y<40;y++){let w=vo*y/40,M=vo*(y+1)/40,_=(R,T)=>[e+Math.cos(R)*o,r+Math.sin(R)*o,T],S=[-Math.cos((w+M)/2),-Math.sin((w+M)/2),0];t.quad(_(w,a),_(M,a),_(M,u),_(w,u),S,d,[[o*w+0,a],[o*M,a],[o*M,u],[o*w,u]])}for(let y=0;y<40;y++){let w=vo*y/40,M=vo*(y+1)/40,_=(W,F)=>[e+Math.cos(W)*o,F,u+Math.sin(W)*o],S=W=>[-Math.cos(W),0,-Math.sin(W)],R=t.v(_(w,i),S(w),d,[o*w,i]),T=t.v(_(M,i),S(M),d,[o*M,i]),H=t.v(_(M,r),S(M),d,[o*M,r]),q=t.v(_(w,r),S(w),d,[o*w,r]);t.idx.push(R,T,H,R,H,q)}let x=[];for(let y=0;y<=14;y++){let w=vo/2*y/14,M=[];for(let _=0;_<=40;_++){let S=vo*_/40,R=[Math.cos(S)*Math.cos(w),Math.sin(w),Math.sin(S)*Math.cos(w)];M.push(t.v([e+o*R[0],r+o*R[1],u+o*R[2]],R.map(T=>-T),d,[o*S,r+o*w]))}x.push(M)}for(let y=0;y<14;y++)for(let w=0;w<40;w++){let M=x[y][w],_=x[y][w+1],S=x[y+1][w+1],R=x[y+1][w];t.idx.push(M,_,S,M,S,R)}t.box(e-o,i-.02,a-.02,e+o,i,s,d,{bottom:!0,x0:!0,x1:!0,z1:!0})}t.box(yn.x-.6,i,Sh-.5,yn.x+.6,yn.plinth-.05,Sh+.55,l,{bottom:!0}),t.box(yn.x-.64,yn.plinth-.05,Sh-.54,yn.x+.64,yn.plinth,Sh+.59,l),t.box(c-.06,p,a-.08,h+.06,p+.32,Ce,l),t.box(c-.02,p+.32,a-.02,h+.02,p+.78,Ce,l),t.box(c-.12,p+.78,a-.16,h+.12,p+.86,Ce,l),t.box(c-.2,p+.86,a-.26,h+.2,p+1.02,Ce,l);{let m=p+.55,g=.34,x=.2,y=28,w=[];for(let M=0;M<=4;M++){let _=M/4,S=[];for(let R=0;R<=y;R++){let T=2*vo*R/y,H=.09*Math.sqrt(Math.max(0,1-_*_))+.01;S.push(t.v([e+Math.cos(T)*g*_,m+Math.sin(T)*x*_,a-.02-H],[Math.cos(T)*_*.6,Math.sin(T)*_*.6,-1],l,[Math.cos(T)*_,Math.sin(T)*_]))}w.push(S)}for(let M=0;M<4;M++)for(let _=0;_<y;_++){let S=w[M][_],R=w[M][_+1],T=w[M+1][_+1],H=w[M+1][_];t.idx.push(S,H,T,S,T,R)}for(let M=0;M<y;M++){let _=2*vo*M/y,S=2*vo*(M+1)/y;t.beam([e+Math.cos(_)*(g+.03),m+Math.sin(_)*(x+.03),a-.04],[e+Math.cos(S)*(g+.03),m+Math.sin(S)*(x+.03),a-.04],.025,l,[0,0,1])}for(let M of[-1,1])for(let _=0;_<14;_++){let S=1.8*vo*_/14,R=1.8*vo*(_+1)/14,T=.1*(1-_/16),H=.1*(1-(_+1)/16),q=e+M*(g+.16),W=m;t.beam([q+M*Math.cos(S)*T,W+Math.sin(S)*T,a-.04],[q+M*Math.cos(R)*H,W+Math.sin(R)*H,a-.04],.018,l,[0,0,1])}}{let m=p+1.02,g=.62,x=(h-c)/2+.2,y=a-.2,w=_=>m+g*(1-Math.abs(_-e)/x);for(let _=e-x;_<e+x-1e-6;_+=.1){let S=_,R=Math.min(e+x,_+.1);t.quad([R,m,y],[S,m,y],[S,w(S),y],[R,w(R),y],[0,0,-1],l,[[R,m],[S,m],[S,w(S)],[R,w(R)]])}let M=Math.hypot(x,g);for(let _ of[-1,1]){let S=[_*g/M,x/M,0],R=e+_*(x+.06);t.quad([e,m+g+.06,y-.06],[R,m-.02,y-.06],[R,m-.02,Ce],[e,m+g+.06,Ce],S,l,[[0,y],[M,y],[M,Ce],[0,Ce]]),t.quad([e,m+g+.06,y-.06],[e,m+g-.06,y-.06],[R,m-.12,y-.06],[R,m-.02,y-.06],[0,0,-1],l,[[0,1],[0,0],[M,0],[M,1]])}}}function EM(t){let e=Ys(77);for(let[o,r,n]of Xs){let[a,s]=Th(o);for(let i=0;i<2;i++){let c=null;for(let h=a;h<=s;h+=.18){let l=Ah(o,r,h),d=Math.sin(h*3.1+i*2+n)*.07,u=Math.cos(h*2.3+i+n)*.05,p=o==="wall"?.25+.5*h/xo:0,f=o==="wall"?[.05+Math.abs(u)*.6,l[1],l[2]+d*(1.5+i)*(1+2*p)+(i-.5)*p]:o==="ridge"?[l[0]+d,l[1]+u+.12,l[2]]:[l[0],l[1]+u+.12,l[2]+d];c&&(o==="wall"||Cl(h,n)||e()<.5)&&t.beam(c,f,(o==="wall"?.022*(1.2-h/xo):.012)+.008*e(),Et.WOOD),c=f}}}}function zM(t){let e=Ys(4242),o=(n,a)=>!(n>ht.x0-ht.curb-.1&&n<ht.x1+ht.curb+.1&&a>ht.z0-ht.curb-.1&&a<ht.z1+ht.curb+.1)&&n>.2&&n<It-.2&&a>.3&&a<Ce-.4,r=(n,a,s,i)=>{let c=.022+e()*.022,h=e()*2*vo,l=Math.cos(h),d=Math.sin(h),u=(f,v)=>[n+(f*l-v*d)*c,a+.004*f*v,s+(f*d+v*l)*c],p=i?2:0;t.quad(u(-1,-1),u(-1,1),u(1,1),u(1,-1),[0,1,0],Et.BRACT,[[p,0],[p,1],[p+1,1],[p+1,0]])};for(let[n,a,s]of Xs){let[i,c]=Th(n);for(let h=i;h<=c;h+=.05){if(!Cl(h,s)||e()>.55)continue;let l=Ah(n,a,h),d=l[0]+(e()-.5)*1.8,u=l[2]+(e()-.5)*1.8;o(d,u)&&r(d,.004,u,e()<.18)}}for(let n=0;n<260;n++){let a=Math.floor(e()*4),s,i;a<2?(s=a?ht.x1+ht.curb+.12+e()*e()*.9:ht.x0-ht.curb-.12-e()*e()*.9,i=ht.z0+e()*(ht.z1-ht.z0)):(i=a===2?ht.z0-ht.curb-.12-e()*e()*.9:ht.z1+ht.curb+.12+e()*e()*.9,s=ht.x0+e()*(ht.x1-ht.x0)),o(s,i)&&r(s,.004,i,e()<.18)}for(let n=0;n<70;n++){let a=ht.x0+.08+e()*(ht.x1-ht.x0-.16),s=ht.z0+.08+e()*(ht.z1-ht.z0-.16);Math.hypot(a-yn.x,s-yn.z)<.6||(t.float=[a,s,a*5.1+s*2.9],r(a,.016,s,e()<.2),t.float=null)}}function AM(t,e,o){let r=(a,s,i,c,h)=>{let l=t.pos.length/3,d=Math.cos(i),u=Math.sin(i),p=Math.cos(c),f=Math.sin(c),v=[d,0,-u],m=[u*f,p,d*f],g=[v[1]*m[2]-v[2]*m[1],v[2]*m[0]-v[0]*m[2],v[0]*m[1]-v[1]*m[0]],x=h?.95:o()*.8;for(let[y,w]of[[0,0],[1,0],[1,1],[0,1]]){let M=(y-.5)*s,_=(w-.5)*s;t.pos.push(a[0]+v[0]*M+m[0]*_+Re[0],a[1]+v[1]*M+m[1]*_+Re[1],a[2]+v[2]*M+m[2]*_+Re[2]),t.nrm.push(...g),t.uv.push(y,w),t.shade.push(x),t.flower.push(1)}t.idx.push(l,l+1,l+2,l,l+2,l+3)};function n(a,s,i){let c=s/xo,h=Math.min(.15+.9*c,a<1||a>Ce-1?.6:1.15),l=Math.round(3+7*c),d=s<1?0:Math.round((2+9*c)*(Cl(s*1.4,i)?1:.45));for(let u=0;u<l;u++){let p=o()*2*vo;e([.04+o()*.22,s+(o()-.5)*.12,a+(o()-.5)*2*h],[Math.cos(p)*.4+.5,-.2-o()*.5,Math.sin(p)],[0,0,1],.07+o()*.06,.1)}for(let u=0;u<d;u++)r([.06+o()*.28,s+(o()-.5)*.18,a+(o()-.5)*2*h*.9],.34+o()*.32,o()*2*vo,(o()-.5)*2.4,o()<.14);if(s>3&&o()<.05){let u=[.15,s,a+(o()-.5)*2*h],p=.4+o()*1.2;for(let f=0;f<p;f+=.13)u=[u[0]+.03,u[1]-.13,u[2]+(o()-.5)*.06],r([u[0],u[1],u[2]],(.26+o()*.2)*(1-.4*f/p),o()*2*vo,(o()-.5)*.8,o()<.15)}}for(let[a,s,i]of Xs){let[c,h]=Th(a);for(let l=c;l<=h;l+=.1){if(a==="wall"){n(s,l,i);continue}if(!Cl(l,i))continue;let d=Ah(a,s,l),u=()=>(o()-.5)*.7,p=4+Math.floor(o()*4);for(let f=0;f<p;f++){let v=a==="ridge"?[d[0]+u(),d[1]-o()*.25,d[2]+u()*.4]:[d[0]+u()*.4,d[1]-o()*.25,d[2]+u()];r(v,.42+o()*.4,o()*2*vo,(o()-.5)*2.4,o()<.16)}for(let f=0;f<5;f++){let v=o()*2*vo;e([d[0]+u()*.6,d[1]-o()*.2,d[2]+u()*.6],[Math.cos(v),-.3-o()*.5,Math.sin(v)],[-Math.sin(v),0,Math.cos(v)],.08+o()*.06,.1)}if(o()<.22){let f=.5+o()*2,v=[d[0],d[1],d[2]],m=[(o()-.5)*.08,(o()-.5)*.08];for(let g=0;g<f;g+=.13){v=[v[0]+m[0],v[1]-.13,v[2]+m[1]];let x=(.3+o()*.22)*(1-.4*g/f);if(r([v[0]+(o()-.5)*.08,v[1],v[2]+(o()-.5)*.08],x,o()*2*vo,(o()-.5)*.8,o()<.15),o()<.6){let y=o()*2*vo;e([v[0],v[1],v[2]],[Math.cos(y),-.6,Math.sin(y)],[-Math.sin(y),0,Math.cos(y)],.05+o()*.04,.1)}}}}}}var K3=(()=>{let t=Ys(9001),e=[],o=[];for(let[n,a,s]of Xs){let[i,c]=Th(n);for(let h=i;h<=c;h+=.1)Cl(h,s)&&o.push(Ah(n,a,h))}let r=o.filter(n=>n[0]>ht.x0-.6&&n[0]<ht.x1+.6&&n[2]>ht.z0&&n[2]<ht.z1);for(let n=0;n<64;n++){let a=n%2===0&&r.length?r:o,s=a[Math.floor(t()*a.length)];e.push({start:[s[0]+(t()-.5)*.4,s[1]-.25-t()*.3,s[2]+(t()-.5)*.4],period:18+t()*22,offset:t()*60,drift:[(t()-.5)*1.6,(t()-.5)*1.6],speed:.45+t()*.25,seed:t(),white:t()<.18?1:0})}return e})(),os=[ht.x0+.06,ht.z0+.06,ht.x1-.06,ht.z1-.06];function TM(t,e){let o=e+t.offset,r=Math.floor(o/t.period),n=o-r*t.period,a=.6+.4*Math.sin(r*1.7+t.seed*5),s=t.start[0]+t.drift[0]*a,i=t.start[2]+t.drift[1]*a,c=s>os[0]&&s<os[2]&&i>os[1]&&i<os[3],h=c?.017:.006,l=(t.start[1]-h)/t.speed;return{ph:n,Tf:l,lx:s,lz:i,inPool:c}}var Xr=[{at:[It/2-.8,Gn(7.6)],dir:.9,len:.92,kind:0,sip:21,first:9},{at:[It/2+.9,Gn(11.6)],dir:3.6,len:.74,kind:1,sip:29,first:17},{at:[It/2-.3,Gn(12.8)],dir:5.2,len:.86,kind:2,sip:25,first:4},{at:[It/2+1,Gn(7)],dir:2.2,len:.7,kind:1,sip:33,first:23},{at:[It/2-1.1,Gn(10.4)],dir:4.4,len:.82,kind:0,sip:27,first:13},{at:[It/2+.4,Gn(9)],dir:1.4,len:.94,kind:2,sip:31,first:28},{at:[It/2-.9,Gn(13)],dir:5.9,len:.66,kind:1,sip:23,first:6},{at:[It/2+1.1,Gn(12.6)],dir:3,len:.8,kind:0,sip:35,first:31}],Ws=[ht.x0+.5,ht.z0+.5,ht.x1-.5,ht.z1-.55],Tl=[ht.x0+.25,ht.z0+.25,ht.x1-.25,ht.z1-.3],Nl=12,Ll=-.36,ld=[];function LM(){let t=d=>{let u=Math.sin(d*12.9898+78.233)*43758.5453;return u-Math.floor(u)},e=Xr.map((d,u)=>({k:d,i:u,x:d.at[0],z:d.at[1],th:d.dir,w:0,v:.08,y:-.17,ph:u*2.1,pitch:0,kappa:0,thrust:0,amp:.2,stroking:u%2===0,modeT:t(u*3.1)*3,aim:d.dir,nextAim:t(u*7.7)*5,yAim:-.17,nextY:t(u*5.9)*8,gx:d.at[0],gz:d.at[1],nextSip:d.first,sipT:-1,bite:0,notice:0})),o=[],r=[];for(let d=0;d<Nl;d++)r.push({x:0,z:0,alive:0,born:0,seed:d*.37});let n={on:!1,x:0,z:0,t0:0},a=0,s=0,i=d=>Math.atan2(Math.sin(d),Math.cos(d)),c=()=>t(++s*1.618+a*.37);return{fish:e,events:o,crumbs:r,feed:n,drop:(d,u)=>{d=Math.max(Tl[0],Math.min(Tl[2],d)),u=Math.max(Tl[1],Math.min(Tl[3],u)),Object.assign(n,{on:!0,x:d,z:u,t0:a}),r.forEach((p,f)=>{let v=t(a+f)*Math.PI*2,m=.04+.16*Math.sqrt(t(a*1.7+f*3.1));Object.assign(p,{x:d+Math.cos(v)*m,z:u+Math.sin(v)*m,alive:1,born:a+t(f*5.3+a)*.35})}),o.push([d,u,a,1]);for(let p of e)p.notice=a+.3+Math.hypot(p.x-d,p.z-u)*.35+t(p.i*9.1+a)*.7},step:d=>{a+=d;let u=a,p=0;for(let f of r)!f.alive||u<f.born||(p++,f.x+=Math.sin(u*.7+f.seed*11)*.004*d,f.z+=Math.cos(u*.6+f.seed*7)*.004*d);if(n.on&&(p===0&&u>n.t0+1||u>n.t0+40)){n.on=!1;for(let f of r)f.alive=0}for(let f of e){let{k:v}=f,m=v.len,g=n.on&&u>f.notice;(u>f.nextAim||Math.hypot(f.gx-f.x,f.gz-f.z)<.7)&&(f.gx=Ws[0]+c()*(Ws[2]-Ws[0]),f.gz=Ws[1]+c()*(Ws[3]-Ws[1]),f.nextAim=u+12+c()*14),f.aim=Math.atan2(f.gz-f.z,f.gx-f.x)+.35*Math.sin(u*.21+f.i*1.7);let x=f.aim,y=.7,w=null;if(g){let ot=1e9;for(let be of r){if(!be.alive||u<be.born)continue;let Ke=Math.hypot(be.x-f.x,be.z-f.z)+.1*Math.sin(f.i*3.3+be.seed*9);Ke<ot&&(ot=Ke,w=be)}let Bt=w?w.x:n.x,Se=w?w.z:n.z;x=Math.atan2(Se-f.z,Bt-f.x),f.aim=x,y=1.8}let M=.6+m*.8+f.v*2,_=g?Tl:Ws,S=0;for(let ot of[0,.5,-.5]){let Bt=f.x+Math.cos(f.th+ot)*M,Se=f.z+Math.sin(f.th+ot)*M;S=Math.max(S,Math.max(_[0]-Bt,Bt-_[2],_[1]-Se,Se-_[3],0))}if(S>0){let ot=(_[0]+_[2])/2,Bt=(_[1]+_[3])/2+Math.sin(f.i*2.3)*1.5,Se=Math.atan2(Bt-f.z,ot-f.x),be=Math.min(1,S*2.2);x=f.th+i(Se-f.th)*be+i(x-f.th)*(1-be),g||(f.aim=x),y=Math.max(y,.6+be*.8)}let R=0;for(let ot of e){if(ot===f)continue;let Bt=ot.x-f.x,Se=ot.z-f.z,be=Math.hypot(Bt,Se),Ke=(g?.4:1)*(m+ot.k.len)/2+.2;if(be<Ke&&Math.abs(ot.y-f.y)<.14){let $e=i(Math.atan2(Se,Bt)-f.th);(Math.abs($e)<1.6||be<Ke*.5)&&(R-=Math.sign($e||1)*(Ke-be)/Ke*(Math.abs($e)<1.6?1:.6))}}let T=i(x-f.th)+R*(g?.4:2);f.modeT-=d,g?(f.stroking=!0,f.modeT=Math.max(f.modeT,.4)):f.modeT<=0&&(f.stroking=!f.stroking,f.modeT=f.stroking?1.2+c()*1.6:1.6+c()*3.2),!f.stroking&&(Math.abs(T)>.9||f.v<.035)&&(f.stroking=!0,f.modeT=1+c()*.8),!g&&f.sipT<0&&u>f.nextSip&&(f.sipT=0,f.nextSip=u+v.sip*(.7+.6*c()));let H=0;if(f.sipT>=0){let ot=f.sipT;f.sipT+=d,H=Math.min(1,ot/1.6)*(1-Math.max(0,Math.min(1,(ot-2.6)/1.6))),ot<1.7&&f.sipT>=1.7&&o.push([f.x+Math.cos(f.th)*.03,f.z+Math.sin(f.th)*.03,u,.9]),ot<2.4&&f.sipT>=2.4&&o.push([f.x,f.z,u,.55]),(f.sipT>4.2||g)&&(f.sipT=-1)}let q=(f.stroking?g?2.4:1:0)*(1-.6*H);f.thrust+=(q-f.thrust)*Math.min(d*3,1);let W=g?.9:.55;f.v+=(f.thrust*.085*(.7+.4*m)-W*f.v)*d,f.v=Math.max(f.v,.008);let F=.35+.65*Math.min(1,f.thrust),j=Math.max(-y,Math.min(y,T*1.3))*F;f.w+=(j-f.w)*Math.min(d*2.2,1),f.th+=f.w*d,u>f.nextY&&(f.yAim=-(.13+c()*.1),f.nextY=u+6+c()*10);let pt=f.yAim;if(H>0&&(pt+=(-.045-pt)*H),g){let ot=w?w.x:n.x,Bt=w?w.z:n.z,Se=1-Math.min(1,Math.max(0,(Math.hypot(ot-f.x,Bt-f.z)-.15)/.9));if(pt+=(-.04-pt)*Se,w&&u>f.bite&&f.y>-.08){let be=f.x+Math.cos(f.th)*.02,Ke=f.z+Math.sin(f.th)*.02;Math.hypot(w.x-be,w.z-Ke)<.09&&(w.alive=0,f.bite=u+1.3,o.push([w.x,w.z,u,.75]))}}f.x+=Math.cos(f.th)*f.v*d,f.z+=Math.sin(f.th)*f.v*d,f.x=Math.max(ht.x0+.15,Math.min(ht.x1-.15,f.x)),f.z=Math.max(ht.z0+.15,Math.min(ht.z1-.15,f.z));let Ht=(pt-f.y)*Math.min(d*(g?2:.8),1);f.y+=Ht,f.pitch+=(Math.max(-.4,Math.min(.4,Ht/d/Math.max(f.v,.06)))-f.pitch)*Math.min(d*2.5,1);let Nt=Math.max(-1/m,Math.min(1/m,f.w/Math.max(f.v,.1)));f.kappa+=(Nt-f.kappa)*Math.min(d*4,1);let xt=.12+.88*Math.min(1.4,f.thrust)+.4*Math.min(1,Math.abs(f.w));f.amp+=(xt-f.amp)*Math.min(d*2,1),f.ph+=d*(2+5.5*Math.min(1.6,f.thrust))*(.75+.35/Math.sqrt(m))}for(;o.length&&u-o[0][2]>10;)o.shift()},get t(){return a}}}function NM(){let t=cd();{let e=ht.x0-ht.curb,o=ht.x1+ht.curb,r=ht.z0-ht.curb,n=ht.z1+ht.curb,a=[[0,0,It,r],[0,n,It,Ce],[0,r,e,n],[o,r,It,n]];for(let[s,i,c,h]of a)for(let d=s;d<c-1e-6;d+=1)for(let u=i;u<h-1e-6;u+=1){let p=d,f=Math.min(c,d+1),v=u,m=Math.min(h,u+1);t.quad([p,0,v],[p,0,m],[f,0,m],[f,0,v],[0,1,0],Et.FLOOR,[[p,v],[p,m],[f,m],[f,v]])}}for(let e of[0,1]){let o=e?It:0,r=e?It+b0:-b0,n=e?[-1,0,0]:[1,0,0],a=.04;for(let p=0;p<Ce-1e-6;p+=a){let f=p,v=Math.min(Ce,p+a),m=(f+v)/2,g=null;if(!e)for(let y of ye.c)Na(m-y)!==null&&(g=[ye.sill,Math.min(Na(f-y)||ye.spring,Na(v-y)||ye.spring)]);let x=g?[[0,g[0]],[g[1],xo]]:[[0,xo]];for(let[y,w]of x)w<=y||(e?t.quad([o,y,v],[o,y,f],[o,w,f],[o,w,v],n,Et.ROCK,[[v,y],[f,y],[f,w],[v,w]]):t.quad([o,y,f],[o,y,v],[o,w,v],[o,w,f],n,Et.ROCK,[[f,y],[v,y],[v,w],[f,w]]))}if(!e)for(let p of ye.c){for(let g of[-1,1]){let x=p+g*ye.hw,y=[0,0,-g],w=[o,ye.sill,x],M=[r,ye.sill,x],_=[r,ye.spring,x],S=[o,ye.spring,x];g>0!=!!e?t.quad(w,M,_,S,y,Et.ROCK,[[0,ye.sill],[b0,ye.sill],[b0,ye.spring],[0,ye.spring]]):t.quad(S,_,M,w,y,Et.ROCK,[[0,ye.spring],[b0,ye.spring],[b0,ye.sill],[0,ye.sill]])}let f=28;for(let g=0;g<f;g++){let x=g/f*vo,y=(g+1)/f*vo,w=p+Math.cos(x)*ye.hw,M=p+Math.cos(y)*ye.hw,_=ye.spring+Math.sin(x)*ye.hw,S=ye.spring+Math.sin(y)*ye.hw,R=[0,-Math.sin((x+y)/2),-Math.cos((x+y)/2)];e?t.quad([o,_,w],[r,_,w],[r,S,M],[o,S,M],R,Et.ROCK,[[0,x],[b0,x],[b0,y],[0,y]]):t.quad([o,S,M],[r,S,M],[r,_,w],[o,_,w],R,Et.ROCK,[[0,y],[b0,y],[b0,x],[0,x]])}let v=e?It-.08:-b0,m=e?It+b0:.08;t.box(v,ye.sill-.09,p-ye.hw-.12,m,ye.sill,p+ye.hw+.12,Et.OLDSTONE)}let s=e?It:0,i=e?-1:1,c=Et.OLDSTONE,h=Math.min(s,s+i*.32),l=Math.max(s,s+i*.32);t.box(h,xo-.55,0,l,xo-.3,Ce,c);let d=Math.min(s,s+i*.42),u=Math.max(s,s+i*.42);t.box(d,xo-.3,0,u,xo-.12,Ce,c)}for(let[e,o]of[[0,1],[Ce,-1]]){for(let s=0;s<32;s++){let i=s/32*It,c=(s+1)/32*It,h=d=>d<It/2?xo+mr*d:xo+mr*(It-d),l=o>0?[[c,0],[i,0],[i,h(i)],[c,h(c)]]:[[i,0],[c,0],[c,h(c)],[i,h(i)]];t.quad(...l.map(([d,u])=>[d,u,e]),[0,0,o],Et.ROCK,l.map(([d,u])=>[d,u]))}let n=o>0?0:Ce-.32,a=o>0?.32:Ce;t.box(0,xo-.55,n,It,xo-.3,a,Et.OLDSTONE)}MM(t);{let e=cd();SM(e),kM(t,e)}{let{x0:e,x1:o,z0:r,z1:n,curb:a,top:s}=ht,i=.06,c=.08;t.box(e-a,0,r-a,e,s-c,n+a,Et.OLDSTONE,{bottom:!0}),t.box(o,0,r-a,o+a,s-c,n+a,Et.OLDSTONE,{bottom:!0}),t.box(e,0,r-a,o,s-c,r,Et.OLDSTONE,{bottom:!0}),t.box(e,0,n,o,s-c,n+a,Et.OLDSTONE,{bottom:!0}),t.box(e-a-i,s-c,r-a-i,e+i*.5,s,n+a+i,Et.OLDSTONE),t.box(o-i*.5,s-c,r-a-i,o+a+i,s,n+a+i,Et.OLDSTONE),t.box(e+i*.5,s-c,r-a-i,o-i*.5,s,r+i*.5,Et.OLDSTONE),t.box(e+i*.5,s-c,n-i*.5,o-i*.5,s,n+a+i,Et.OLDSTONE);let h=.5;for(let l=e;l<o-1e-6;l+=h)for(let d=r;d<n-1e-6;d+=h){let u=l,p=Math.min(o,l+h),f=d,v=Math.min(n,d+h);t.quad([u,0,f],[u,0,v],[p,0,v],[p,0,f],[0,1,0],Et.WATER,[[u,f],[u,v],[p,v],[p,f]])}}return t}function RM(t){for(let o of[0]){let r=o?It+b0*.5:-b0*.5,n=.05,a=j0.w*.5;for(let s of ye.c){for(let i of j0.cols){let c=Na(i)-.01;t.box(r-n,ye.sill,s+i-a,r+n,c,s+i+a,Et.STEEL)}for(let i=ye.sill+j0.rowH;i<ye.spring+.01;i+=j0.rowH)t.box(r-n,i-a,s-ye.hw,r+n,i+a,s+ye.hw,Et.STEEL);for(let[i,c]of[[ye.hw-.03,.06],[j0.ring,a]])for(let l=0;l<24;l++){let d=l/24*vo,u=(l+1)/24*vo;t.beam([r,ye.spring+Math.sin(d)*i,s+Math.cos(d)*i],[r,ye.spring+Math.sin(u)*i,s+Math.cos(u)*i],c,Et.STEEL,[1,0,0])}for(let i of[-1,1])t.box(r-n,ye.sill,s+i*(ye.hw-.03)-.03,r+n,ye.spring,s+i*(ye.hw-.03)+.03,Et.STEEL);t.box(r-n,ye.sill,s-ye.hw,r+n,ye.sill+.06,s+ye.hw,Et.STEEL)}}let e=o=>o<It/2?xo+mr*o:xo+mr*(It-o);for(let o=0;o<=12;o++){let r=o*Qo.rafter;for(let[n,a]of[[-.3,It/2],[It/2,It+.3]])t.beam([n,e(Math.max(0,Math.min(It,n)))-.1,r],[a,e(a)-.1,r],.06,Et.STEEL)}for(let o=Qo.purlin;o<It/2-.2;o+=Qo.purlin)for(let r of[o,It-o])t.beam([r,e(r)-.06,-.2],[r,e(r)-.06,Ce+.2],.035,Et.STEEL);t.beam([It/2,vr-.14,-.2],[It/2,vr-.14,Ce+.2],.12,Et.STEEL);for(let o of[.05,It-.05])t.beam([o,xo-.05,0],[o,xo-.05,Ce],.1,Et.STEEL);for(let o of Rl){t.box(-.05,xo-.13,o-.08,It+.05,xo+.13,o+.08,Et.STEEL),t.beam([It/2,xo,o],[It/2,vr-.2,o],.07,Et.STEEL);for(let r of[-1,1])t.beam([It/2+r*It/4,xo,o],[It/2,vr-.4,o],.055,Et.STEEL),t.beam([It/2+r*It/4,xo,o],[It/2+r*It/4,e(It/2+r*It/4)-.2,o],.045,Et.STEEL),t.beam([It/2+r*(It/2-.1),xo,o],[It/2+r*It/4,e(It/2+r*It/4)-.2,o],.045,Et.STEEL);for(let r of[-1,1])t.box(It/2+r*It/4-.12,xo-.18,o-.1,It/2+r*It/4+.12,xo+.18,o+.1,Et.STEEL)}}function OM(t){let e=Ys(311),o=[],r=[[ht.x0+.9,Gn(6.6),.9,11],[ht.x1-.8,Gn(8.4),.85,10],[ht.x0+.8,Gn(10.6),.8,9],[ht.x1-.9,Gn(12.4),.9,11],[ht.x0+1,Gn(13.9),.65,7],[It/2+.2,Gn(9.6),.5,4],[ht.x1-.7,Gn(15.9),.6,6]];for(let[a,s,i,c]of r)for(let h=0;h<c;h++)for(let l=0;l<40;l++){let d=e()*2*vo,u=i*Math.sqrt(e()),p=a+Math.cos(d)*u,f=s+Math.sin(d)*u,v=.15+e()*.17;if(!(p-v<ht.x0+.04||p+v>ht.x1-.04||f-v<ht.z0+.04||f+v>ht.z1-.04)&&!(Math.hypot(p-yn.x,f-yn.z)<.62+v)&&!o.some(m=>Math.hypot(m[0]-p,m[1]-f)<(m[2]+v)*.93)){o.push([p,f,v,e()*2*vo,e()]);break}}for(let[a,s,i,c,h]of o){ld.push([a,s,i]),t.float=[a,s,h*7.3+i*13];let l=28,d=4,u=i*1.08,p=[];for(let f=0;f<=d;f++){let v=[];for(let m=0;m<l;m++){let g=m/l*2*vo,x=f/d,y=g-c,w=.012+.004*(1-x*x)+.006*Math.pow(x,6)*(.5+.5*Math.sin(g*3+h*9));v.push(t.v([a+Math.cos(g)*u*x,w,s+Math.sin(g)*u*x],[0,1,0],Et.PAD,[.5+.5*x*Math.sin(y),.5+.5*x*Math.cos(y)]))}p.push(v)}for(let f=0;f<d;f++)for(let v=0;v<l;v++){let m=p[f][v],g=p[f][(v+1)%l],x=p[f+1][(v+1)%l],y=p[f+1][v];t.idx.push(m,g,x,m,x,y)}}t.float=null;let n=[[ht.x0+.75,Gn(6.9),1],[ht.x1-.65,Gn(8.1),.85],[ht.x1-.95,Gn(12.6),1.1],[ht.x0+.95,Gn(10.3),.8],[ht.x1-.55,Gn(15.6),.9],[ht.x0+1.05,Gn(13.7),.75]];for(let[a,s,i]of n){t.float=[a,s,a*3.7+s*1.3];let c=.17;[[12,1,70],[10,.86,48],[8,.66,26]].forEach(([l,d,u],p)=>{for(let f=0;f<l;f++){let v=2*vo*f/l+p*.33,m=(90-(90-u)*i)*vo/180,g=6,x=4,y=[];for(let w=0;w<=g;w++){let M=w/g,_=(.18+.82*Math.sin(vo*Math.min(1,Math.pow(M,.8)*.75+.1)))*.36*d*c,S=[];for(let R=0;R<=x;R++){let T=R/x*2-1,H=T*_,q=Math.abs(T)*Math.abs(T)*.12*d*c,W=M*d*c,F=W*Math.cos(m),j=W*Math.sin(m)+q,pt=a+Math.cos(v)*F-Math.sin(v)*H,Ht=s+Math.sin(v)*F+Math.cos(v)*H;S.push(t.v([pt,.03+j,Ht],[-Math.cos(v)*Math.sin(m)*.6,.8,-Math.sin(v)*Math.sin(m)*.6],Et.PETAL,[(p===2?.5:0)+.5*(.5+.5*T*.92),.98-M*.96]))}y.push(S)}for(let w=0;w<g;w++)for(let M=0;M<x;M++){let _=y[w][M],S=y[w][M+1],R=y[w+1][M+1],T=y[w+1][M];t.idx.push(_,S,R,_,R,T,_,R,S,_,T,R)}}}),t.lathe(a,s,[[0,.03+.05*c*4],[.025,.03+.045*c*4],[.032,.035],[0,.03]],Et.STAMEN,12)}t.float=null}function CM(t){let e=Ys(907);{t.box(1.25-.48,.86-.06,11.1-1.35,1.25+.48,.86,11.1+1.35,Et.WOOD);for(let i of[-1,1])for(let c of[-1,1])t.box(1.25+i*(.48-.08)-.04,0,11.1+c*(1.35-.1)-.04,1.25+i*(.48-.08)+.04,.86-.06,11.1+c*(1.35-.1)+.04,Et.WOOD);t.box(1.25-.48+.06,.16,11.1-1.35+.1,1.25+.48-.06,.19,11.1+1.35-.1,Et.WOOD);for(let i=0;i<11;i++){let c=1.25+(e()-.5)*.6,h=11.1+(e()-.5)*2.2,l=.035+e()*.04,d=.09+e()*.14;if(t.lathe(c,h,[[0,.86],[l,.86],[l*1.02,.86+d*.9],[l*.9,.86+d],[0,.86+d]],i%3?Et.JAR:Et.POT,14),i%3===0)for(let u=0;u<7;u++){let p=e()*2*vo,f=.28+e()*.12,v=.12+e()*.2;t.beam([c,.86+.03,h],[c+Math.cos(p)*v*f,.86+.03+f,h+Math.sin(p)*v*f],.0055,Et.BRUSH)}}t.box(1.25-.3,.86,11.1+.7,1.25+.15,.86+.02,11.1+1.15,Et.WOOD)}for(let o=0;o<5;o++){let r=.55+e()*.6,n=.75+e()*.8,a=19.3+o*.16,s=.25+o*.07,i=.17,c=[s+n*Math.sin(i)*0,n,a];t.quad([s+.18,0,a-r/2],[s+.18,0,a+r/2],[s+.18-n*Math.sin(i),n*Math.cos(i),a+r/2],[s+.18-n*Math.sin(i),n*Math.cos(i),a-r/2],[Math.cos(i),Math.sin(i),0],o%2?Et.WOOD:Et.GESSO,[[0,0],[1,0],[1,1],[0,1]])}for(let o of og)t.beam([o[0],xo,o[2]],[o[0],o[1]+.05,o[2]],.008,Et.STEEL),t.lathe(o[0],o[2],[[.04,o[1]+.06],[.06,o[1]+.02],[.16,o[1]-.09],[.29,o[1]-.22],[.33,o[1]-.28],[.32,o[1]-.285]],Et.SHADE,32),t.lathe(o[0],o[2],[[0,o[1]-.25],[.06,o[1]-.2],[0,o[1]-.12]],Et.BULB,12)}var og=[[4.2,4.6,7.33],[11.8,4.6,7.33],[4.2,4.6,16.5],[11.8,4.6,16.5]],mA=[[ht.x0-1,ht.z0-1,1],[ht.x1+1,ht.z0-1,.95],[ht.x0-1,ht.z1+1,1.15],[ht.x1+1,ht.z1+1,1.1],[.9,1.3,1.25],[It-.9,Ce-1.2,1.3]],Q3=[[0,0,.16,.5],[.16,0,.34,.4],[.35,0,.5,.36],[.5,0,.66,.38],[.68,0,.84,.42],[0,.6,.19,1],[.2,.57,.36,1],[.41,.6,.58,1]];function PM(){let t={pos:[],nrm:[],uv:[],shade:[],flower:[],idx:[]},e=Ys(1213),o=(r,n,a,s,i)=>{let c=Q3[Math.floor(e()*Q3.length)],h=(c[2]-c[0])/(c[3]-c[1]),l=s*h*1,d=5,u=t.pos.length/3,p=.6+e()*.4;for(let f=0;f<=d;f++){let v=f/d,m=i*v*v*s,g=[r[0]+n[0]*v*s,r[1]+n[1]*v*s-m,r[2]+n[2]*v*s];for(let x of[-.5,.5]){t.pos.push(g[0]+a[0]*x*l+Re[0],g[1]+a[1]*x*l-Math.abs(x)*.08*l+Re[1],g[2]+a[2]*x*l+Re[2]);let y=[n[1]*a[2]-n[2]*a[1],n[2]*a[0]-n[0]*a[2],n[0]*a[1]-n[1]*a[0]],w=Math.hypot(...y)||1;t.nrm.push(y[0]/w,Math.abs(y[1]/w)+.2,y[2]/w),t.uv.push(x<0?c[0]:c[2],c[3]-(c[3]-c[1])*v),t.shade.push(p),t.flower.push(0)}}for(let f=0;f<d;f++){let v=u+f*2;t.idx.push(v,v+1,v+3,v,v+3,v+2)}};AM(t,o,e);for(let[r,n,a]of[[ht.x0-.3,ht.z1+.3,-1],[ht.x1+.3,ht.z0-.3,1],[ht.x0-.3,ht.z0-.2,-1]])for(let s=0;s<26;s++){let i=e()*2*vo,c=r+(e()-.3)*.5*-a,h=n+(e()-.5)*.8,l=ht.top+.01-Math.max(0,Math.abs(c-r)-.1)*.6*e();o([c,Math.max(.05,l),h],[Math.cos(i),-.15,Math.sin(i)],[-Math.sin(i),0,Math.cos(i)],.08+e()*.05,.12)}return t}function $M(){let t=cd();for(let o of[0]){let r=o?It+b0*.5+.01:-b0*.5-.01,n=o?[-1,0,0]:[1,0,0];for(let a of ye.c)for(let i=a-ye.hw;i<a+ye.hw-1e-6;i+=.05){let c=i,h=Math.min(a+ye.hw,i+.05),l=Na(c-a+1e-4)||ye.spring,d=Na(h-a-1e-4)||ye.spring;o?t.quad([r,ye.sill,h],[r,ye.sill,c],[r,l,c],[r,d,h],n,0,[[h,ye.sill],[c,ye.sill],[c,l],[h,d]]):t.quad([r,ye.sill,c],[r,ye.sill,h],[r,d,h],[r,l,c],n,0,[[c,ye.sill],[h,ye.sill],[h,d],[c,l]])}}let e=Math.hypot(mr,1);return t.quad([0,xo+.002,Ce],[0,xo+.002,0],[It/2,vr+.002,0],[It/2,vr+.002,Ce],[mr/e,-1/e,0].map(o=>-o).map((o,r)=>r===1?-Math.abs(o):o),1,[[0,Ce],[0,0],[It/2,0],[It/2,Ce]]),t.quad([It,xo+.002,0],[It,xo+.002,Ce],[It/2,vr+.002,Ce],[It/2,vr+.002,0],[-mr/e,-1/e,0],1,[[It,0],[It,Ce],[It/2,Ce],[It/2,0]]),t}var Vs={ivy:[[.00293,.0127,.12207,.23633],[.13037,.00586,.24463,.24414],[.25293,.0166,.37207,.23242],[.37793,.02344,.49707,.22656],[.50293,.01367,.62207,.23535],[.62793,.03418,.74707,.21582]],blade:[[.01855,.50391,.02832,.99512],[.05762,.50391,.08301,.99512],[.10889,.50391,.12549,.99609],[.1582,.50391,.16943,.99512],[.19922,.50391,.22266,.99512],[.25,.50391,.26562,.99609],[.29932,.50391,.31006,.99609],[.33008,.50781,.37305,.99121],[.38721,.50391,.40918,.99609]],daisy:[[.75684,.00586,.86768,.24414],[.87793,.00781,.99707,.24121],[.00342,.25586,.12158,.49414],[.12842,.25586,.24609,.49414],[.25293,.25684,.37207,.49219],[.37891,.25586,.49609,.49316]],weed:[[.50293,.25781,.62207,.49121],[.62793,.26562,.74707,.48438],[.75293,.26855,.87207,.48047],[.88281,.25586,.99219,.49414],[.44043,.50977,.55957,.73926],[.5752,.50586,.67432,.74414],[.69043,.50586,.80908,.74414],[.81738,.50586,.93213,.74414],[.44043,.75781,.55957,.99219]],rleaf:[[.69824,.75586,.78076,.99414],[.79834,.75586,.88867,.99414],[.9043,.75586,.99072,.99414],[.94043,.54395,.99707,.70605]],petal:[[.56445,.75391,.68555,.99609]]},IM=[[.248,.8613],[.3438,.9785],[.4492,.584],[.5957,.3281],[.5371,.918],[.1699,.4062],[.752,.6699],[.5879,.2207],[.3789,.8477],[.2637,.2266],[.6758,.7422],[.6016,.0273],[.5762,.502],[.0469,.5078],[.1406,.7773],[.791,.7539],[.6113,.5605],[.9121,.6777],[.6523,.1523],[.2871,.3301],[.2109,.832],[.4297,.625],[.168,.4434],[.1348,.1211],[.9668,.0859],[.3164,.873],[.1777,.7539],[.0215,.3281],[.6719,.334],[.9844,.6172],[.6523,.3828],[.1152,.2988],[.0176,.1328],[.207,.0996],[.6152,.9844],[.0234,.0117],[.0723,.6328],[.2695,.7695],[.2539,.9395],[.502,.9941],[.1504,.9961],[.957,.8145],[.5117,.123],[.4062,.4941],[.0547,.1387],[.4375,.2949],[.373,.2109],[.1699,.3086],[.5176,.6445],[.4863,.3027],[.877,.6602],[.5977,.8887],[.5488,.0098],[.5156,.5332],[.6973,.1094],[.4707,.2051],[.498,.7559],[.0312,.7363],[.2051,.4629],[.541,.8379],[.8398,.8965],[.1426,.1855],[.3711,.1172],[.1328,.9082],[.75,.9629],[.2812,.0449],[.6367,.4277],[.2051,.9824],[.7012,.9766],[.0059,.9102],[.7168,.3379],[.1602,.584],[.8594,.1973],[.3516,.7227],[.0918,.9727],[.416,.3359],[.6465,.9355],[.3418,.627],[.7578,.332],[.0293,.6973],[.9004,.957],[.7012,.7617],[.1855,.8652],[.6914,.8184],[.5684,.543],[.6523,.8672],[.5742,.7441],[.2949,.4121],[.2363,.6387],[.25,.1953],[.0352,.5918],[.248,.293],[.0762,.4863],[.9785,.4922],[.9004,.7305],[.9277,.5527],[.9395,.125],[.3691,.8789],[.4805,.0469],[.5703,.4551],[.4199,.2246],[.0371,.625],[.3281,.4941],[.1152,.6094],[.2793,.834],[.5039,.166],[.4609,.5312],[.0645,.7715],[.6035,.7227],[.4746,.6348],[.6777,.5684],[.2773,.4512],[.8008,.1191],[.3945,.9297],[.2109,.6855],[.5977,.1875],[.5195,.0742],[.1309,.4609],[.9531,.4277],[.4785,.9648],[.543,.3262],[.9121,.041],[.5059,.7188],[.0098,.2969],[.8438,.3789],[.1504,.2637],[.7969,.873],[.8613,.9863],[.834,.7461],[.377,.6211],[.791,.7227],[.6758,.8457],[.7832,.8066],[.834,.5293],[.1973,.6562],[.8281,.9609],[.5332,.7773],[.9062,.8008],[.3262,.0234],[.8984,.7676]],hc={IVY:0,BLADE:1,DAISY:2,WEED:3,ROSE:4,RLEAF:5,GRAPE:6},Z3=[[[.006,.013,-.051],[-.04,-.022,.004],[-.029,.026,-.015]],[[-.094,.019,.023],[.014,-.004,-.003],[.06,.026,-.027]],[[-.034,-.031,.002],[-.019,.07,-.028],[-.07,.018,-.039]],[[.102,-.049,-.011],[.057,-.046,.157],[.042,-.031,.089]],[[.026,.006,.019],[-.038,-.037,-.073],[-.042,-.019,.021]],[[.088,-.048,.008],[.143,-.012,.005],[-.044,.033,.028]],[[.039,-.084,-.04],[-.054,-.031,.031],[.076,.028,.014]],[[.082,-.037,-.05],[-.078,.011,.004],[-.076,-.047,.042]]],qM=2;function DM(){let t={pos:[],nrm:[],uv:[],info:[],idx:[]},e=[],o={pos:[],nrm:[],uv:[],info:[],idx:[]},r=t,n=Ys(2718),a=rt=>{let yt=Math.hypot(rt[0],rt[1],rt[2])||1;return[rt[0]/yt,rt[1]/yt,rt[2]/yt]},s=(rt,yt)=>[rt[1]*yt[2]-rt[2]*yt[1],rt[2]*yt[0]-rt[0]*yt[2],rt[0]*yt[1]-rt[1]*yt[0]],i=(rt,yt)=>rt[0]*yt[0]+rt[1]*yt[1]+rt[2]*yt[2],c=(rt,yt,it)=>[rt[0]+yt[0]*it,rt[1]+yt[1]*it,rt[2]+yt[2]*it],h=rt=>rt[Math.floor(n()*rt.length)],l=rt=>(rt[2]-rt[0])*qM/(rt[3]-rt[1]),d=(rt,yt,it,Mt,Vt,he)=>(r.pos.push(rt[0]+Re[0],rt[1]+Re[1],rt[2]+Re[2]),r.nrm.push(yt[0],yt[1],yt[2]),r.uv.push(it[0],it[1]),r.info.push(Mt,Vt,he),r.pos.length/3-1),u=(rt,yt,it,Mt,Vt,he,Ne,Qt,Wt)=>{let ct=Wt?2:1,Zt=r.pos.length/3;for(let de=0;de<=ct;de++){let se=de/ct,Rt=Wt?c(c(rt,it,se),Qt,Wt*se*se):c(rt,it,se),Ue=Mt[3]+(Mt[1]-Mt[3])*se;d(c(Rt,yt,-1),Ne,[Mt[0],Ue],Vt,he,se),d(c(Rt,yt,1),Ne,[Mt[2],Ue],Vt,he,se)}for(let de=0;de<ct;de++){let se=Zt+de*2;r.idx.push(se,se+1,se+3,se,se+3,se+2)}},p=null,f=[...Vs.ivy,...Vs.ivy,...Vs.weed.slice(0,7)],v=[0,1,0],m=(rt,yt,it,Mt,Vt)=>{let he=h(f),Ne=s(it,yt),Qt=a(c(c(yt,it,n()*.9-.25),Ne,(n()-.5)*.8)),Wt=a(c(it,Qt,-i(it,Qt))),ct=(n()-.5)*2,Zt=Math.cos(ct),de=Math.sin(ct);Wt=a(c(c([0,0,0],Wt,Zt),s(Qt,Wt),de));let se=s(Wt,Qt),Rt=Mt*l(he);u(c(rt,Wt,-Mt*.18),c([0,0,0],se,Rt/2),c([0,0,0],Wt,Mt),he,Vt,hc.IVY,Qt)},g=(rt,yt,it,Mt,Vt)=>{let he=Math.floor(n()*Z3.length),Ne=Z3[he],Qt=s(it,yt),Wt=a(c(c(yt,it,n()*.8-.3),Qt,(n()-.5)*.9)),ct=a(c(it,Wt,-i(it,Wt))),Zt=n()*2*vo,de=Math.cos(Zt),se=Math.sin(Zt);ct=a(c(c([0,0,0],ct,de),s(Wt,ct),se));let Rt=s(ct,Wt),Ue=he%4/4,k=Math.floor(he/4)/2,Be=1.4,Xe=[],mo=r.pos.length/3;for(let Je=0;Je<3;Je++)for(let bo=0;bo<3;bo++){let vt=bo/2-.5,Ot=.5-Je/2;Xe.push(c(c(c(rt,Rt,vt*Mt),ct,Ot*Mt),Wt,Ne[Je][bo]*Mt*Be))}for(let Je=0;Je<3;Je++)for(let bo=0;bo<3;bo++){let vt=Math.max(bo-1,0),Ot=Math.min(bo+1,2),Tt=Math.max(Je-1,0),oo=Math.min(Je+1,2),ro=c(Xe[Je*3+Ot],Xe[Je*3+vt],-1),D=c(Xe[Tt*3+bo],Xe[oo*3+bo],-1),J=a(s(ro,D));i(J,Wt)<0&&(J=J.map(mt=>-mt)),d(Xe[Je*3+bo],J,[Ue+bo/2*.25,k+Je/2*.5],Vt,hc.GRAPE,1)}for(let Je=0;Je<2;Je++)for(let bo=0;bo<2;bo++){let vt=mo+Je*3+bo;r.idx.push(vt,vt+1,vt+4,vt,vt+4,vt+3)}},x=(rt,yt,it,Mt,Vt,he,Ne,Qt,Wt,ct=.3)=>{let Zt=Math.max(3,Math.round(Vt*2.4*Ne)),de=[];for(let Rt=0;Rt<Zt;Rt++){let Ue=Mt+(n()-.5)*Vt,k=Math.min(1,Math.abs(Ue-Mt)/(Vt/2+.001)),Be=he*(.6+.4*n())*(1-.5*k*k);de.push([Ue,Qt||n()*.15,(n()-.5)*.5,Be,0])}let se=0;for(;de.length&&se++<4e3;){let[Rt,Ue,k,Be,Xe]=de.pop(),mo=Ue;for(let Je=0;Je<260&&(k+=(n()-.5)*.45,k=Math.max(-1,Math.min(1,k)),Rt+=Math.sin(k)*.09,Ue+=(Qt?-1:1)*Math.cos(k)*.09,!(Qt?mo-Ue>Be||Ue<(Wt?Wt(Rt):.05):Ue-mo>Be));Je++){let vt=Qt?(mo-Ue)/Be:(Ue-mo)/Be,Ot=n()<.9*Ne?n()<.5?2:1:0;for(let Tt=0;Tt<Ot;Tt++){let oo=.015+n()*.11,ro=Rt+(n()-.5)*.2,D=Ue+(n()-.5)*.12;if(p&&p(ro,D))continue;let J=c(c(c(rt,yt,ro),v,D),it,oo),mt=(.14+.1*n())*(Qt?1.05-.3*vt:1.2-.4*vt),ut=.45+.55*(oo/.125)*(.6+.4*n());n()<ct?n()<.55&&g(J,it,v,mt*1.7,ut):m(J,it,v,mt,ut)}Xe<2&&n()<.035&&de.push([Rt,Ue,k+(n()<.5?-.7:.7),Be*(.35+.4*n())*(1-vt*.5),Xe+1])}}},y=(rt,yt,it,Mt,Vt)=>{let he=h(Vs.rleaf),Ne=a(c(c(yt,it,n()*.8-.1),s(it,yt),(n()-.5)*.9)),Qt=a(c(it,Ne,-i(it,Ne))),Wt=(n()-.5)*3,ct=Math.cos(Wt),Zt=Math.sin(Wt);Qt=a(c(c([0,0,0],Qt,ct),s(Ne,Qt),Zt));let de=s(Qt,Ne);u(c(rt,Qt,-Mt*.1),c([0,0,0],de,Mt*l(he)/2),c([0,0,0],Qt,Mt),he,Vt,hc.RLEAF,Ne)},w=(rt,yt,it,Mt,Vt,he,Ne)=>{let Qt=Math.max(3,Math.round(Vt*2.2)),Wt=(Rt,Ue,k)=>c(c(c(rt,yt,Rt),v,Ue),it,k),ct=y,Zt=null,de=(Rt,...Ue)=>{p&&p(i(c(Rt,rt,-1),yt),Rt[1])||ct(Rt,...Ue)},se=(Rt,Ue,k)=>{p&&p(i(c(Rt,rt,-1),yt),Rt[1])||e.push({at:Rt,f:Ue,size:k,spin:n()*2*vo})};for(let Rt=0;Rt<Qt;Rt++){let Ue=Mt+(n()-.5)*Vt*.35,k=.05,Be=(n()-.5)*1.4,Xe=he*(.6+.4*n()),mo=(Ue-Mt)/(Vt/2+.001);for(let Je=0;Je<200&&k<Xe&&(Be+=(n()-.5)*.3+mo*.012+(k>Xe*.6?Math.sign(Be||1)*.02:0),Be=Math.max(-1.25,Math.min(1.25,Be)),Ue+=Math.sin(Be)*.08,k+=Math.cos(Be)*.08,!(Math.abs(Ue-Mt)>Vt*.6));Je++){let bo=k/Xe;for(let vt=0;vt<(n()<.8?2:1);vt++){let Ot=.02+n()*.12;de(Wt(Ue+(n()-.5)*.16,k+(n()-.5)*.12,Ot),it,v,.07+n()*.05,.5+.5*n())}if(bo>.2&&n()<Ne*(.018+.038*bo)){let vt=1+Math.floor(n()*3);for(let Ot=0;Ot<vt;Ot++){let Tt=a(c(c(it,v,(n()-.4)*.8),s(v,it),(n()-.5)*.9));se(Wt(Ue+(n()-.5)*.22,k+(n()-.5)*.2,.16+n()*.1),Tt,.19+n()*.09)}for(let Ot=0;Ot<3;Ot++)de(Wt(Ue+(n()-.5)*.25,k+(n()-.5)*.2,.05+n()*.08),it,v,.07+n()*.04,.6+.4*n())}}}},M=(rt,...yt)=>w(rt.o,rt.u,rt.n,...yt),_={o:[0,0,0],u:[1,0,0],n:[0,0,1]},S={o:[0,0,Ce],u:[1,0,0],n:[0,0,-1]},R={o:[It,0,0],u:[0,0,1],n:[-1,0,0]},T=(rt,...yt)=>x(rt.o,rt.u,rt.n,...yt);T(_,4.1,3,7,1.5),T(_,12,3.4,5.8,1.3),T(_,1,2.2,4.2,1.2),T(_,15,2,5,1.2),M(_,3.6,3.2,5.6,1.1),M(_,12.6,3,4.8,1),M(_,.9,1.6,3.2,.8);{let rt=No.face-.26,yt={o:[0,0,Ce-rt+.03],u:[1,0,0],n:[0,0,1]},it=5.35+1.02;x(yt.o,yt.u,yt.n,It-No.x1+1,1.9,2.2,1.2,it,()=>3.2),x(yt.o,yt.u,yt.n,It-No.x0-.5,.8,1,.8,it,()=>4.6);for(let Mt=0;Mt<70;Mt++){let Vt=No.x0+.2+Math.pow(n(),1.6)*2.4,he=(No.x1-No.x0)/2+.2,Ne=it+.62*(1-Math.abs(Vt-No.cx)/he)+.02;m([It-Vt,Ne+n()*.05,.1+n()*(Ce-rt-.15)],a([0,1,.3]),[0,0,1],.08+n()*.05,.7+.3*n())}}p=(rt,yt)=>Math.abs(rt-It/2)<w0.w/2+w0.frame+.12&&yt<w0.top+w0.frame+.12,T(S,5.3,3.2,6.2,1.4),T(S,11,3.6,7,1.4),T(S,1.2,2.4,4.4,1.2),T(S,14.9,2.2,5.4,1.2),x(S.o,S.u,S.n,It/2+.3,3.8,1.8,1.3,5.4,rt=>Math.abs(rt-It/2)<1.25?4.15:2.4),M(S,5.6,3.4,5.2,1.2),M(S,10.6,3.6,5.8,1.2),M(S,14.6,2,4,.9),p=null,T(R,2.6,4,7,1.4),T(R,9.2,4.6,5.4,1.2),T(R,15.6,5,7.4,1.5),T(R,20.9,2,4,1.2),M(R,3.2,3.6,5.4,1.1),M(R,8.6,3,4.2,1),M(R,13.4,3.2,5.8,1.1),M(R,18.6,3.4,5,1.2),p=(rt,yt)=>ye.c.some(it=>{let Mt=Na(rt-it);return Mt!==null&&Math.abs(rt-it)<ye.hw+.06&&yt>ye.sill-.05&&yt<Mt+.06});for(let[rt,yt]of Xs.filter(it=>it[0]==="wall")){let it=yt<1||yt>Ce-1;x([0,0,0],[0,0,1],[1,0,0],yt,it?1:1.7,xo-.6,it?.9:1.1,0,null,.85)}for(let rt of ye.c)x([0,0,0],[0,0,1],[1,0,0],rt,ye.hw*2.3,1.6,.8,xo-.6,yt=>Na(yt-rt)!==null?Na(yt-rt)+.15:xo-2.2,.85);p=null,r=o;let H=(rt,yt,it,Mt,Vt,he,Ne)=>{let Qt=h(Vs.blade),Wt=[Math.cos(he),0,Math.sin(he)],ct=Math.max(Mt*.16,.012);u([rt,yt,it],[-Wt[2]*ct/2,0,Wt[0]*ct/2],[Wt[0]*Vt*Mt*.4,Mt,Wt[2]*Vt*Mt*.4],Qt,Ne,hc.BLADE,a([Wt[0]*.5,1,Wt[2]*.5]),Wt,Mt>.12?Mt*Vt*.6:0)},q=(rt,yt,it,Mt,Vt)=>{for(let he=0;he<Vt;he++){let Ne=n()*2*vo,Qt=n()*.035;H(rt+Math.cos(Ne)*Qt,yt,it+Math.sin(Ne)*Qt,Mt*(.45+.55*n()),.25+.75*n(),Ne+(n()-.5),.6+.4*n())}},W=(rt,yt,it,Mt)=>{let Vt=4+Math.floor(n()*3),he=n()*2*vo;for(let Ne=0;Ne<Vt;Ne++){let Qt=h(Vs.weed),Wt=he+Ne*2*vo/Vt+(n()-.5)*.4,ct=[Math.cos(Wt),0,Math.sin(Wt)],Zt=.35+n()*.45,de=Mt*(.7+.5*n()),se=[ct[0]*Math.cos(Zt)*de,Math.sin(Zt)*de,ct[2]*Math.cos(Zt)*de],Rt=de*l(Qt);u([rt,yt+.004,it],[-ct[2]*Rt/2,0,ct[0]*Rt/2],se,Qt,.7+.3*n(),hc.WEED,a([-ct[0]*Math.sin(Zt),Math.cos(Zt),-ct[2]*Math.sin(Zt)]),[0,-1,0],de*.15)}},F=(rt,yt,it)=>{let Mt=.05+n()*.12;H(rt,yt,it,Mt+.02,.15,n()*2*vo,.8);let Vt=h(Vs.daisy),he=.03+n()*.025,Ne=(n()-.5)*.6,Qt=n()*2*vo,Wt=[Math.cos(Qt)*he*2,Math.sin(Ne)*he,Math.sin(Qt)*he*2],ct=[-Math.sin(Qt)*he,0,Math.cos(Qt)*he];u([rt-Math.cos(Qt)*he,yt+Mt,it-Math.sin(Qt)*he],ct,Wt,Vt,1,hc.DAISY,[0,1,0]),W(rt,yt,it,.04)},j=(rt,yt,it,Mt)=>{let Vt=n();Vt<.8?q(rt,yt,it,Mt?.2+.3*n():.08+.1*n(),Mt?5+Math.floor(n()*6):3+Math.floor(n()*3)):Vt<.93?W(rt,yt,it,Mt?.09+.06*n():.06+.03*n()):F(rt,yt,it)},pt=ht.x0-ht.curb-.08,Ht=ht.x1+ht.curb+.08,Nt=ht.z0-ht.curb-.08,xt=ht.z1+ht.curb+.08,ot=It-No.x1-.16,Bt=It-No.x0+.16,Se=Ce-No.face+.36,be=(rt,yt)=>rt>pt&&rt<Ht&&yt>Nt&&yt<xt||rt>ot&&rt<Bt&&yt<Se||Math.abs(rt-It/2)<1.15&&yt>Ce-.5||rt<.06||rt>It-.06||yt<.06||yt>Ce-.06,Ke=(rt,yt)=>{let it=Math.min(rt,It-rt,yt,Ce-yt),Mt=Math.max(pt-rt,rt-Ht,Nt-yt,yt-xt),Vt=Math.max(ot-rt,rt-Bt,yt-Se);return Math.min(it,Math.max(Mt,0)+(Mt<0?9:0),Math.max(Vt,0)+(Vt<0?9:0))},$e=(rt,yt)=>.5+.5*Math.sin(rt*.9+1.3)*Math.sin(yt*.7-.4)+.25*Math.sin(rt*2.3+yt*1.7);for(let rt=0;rt*2<It;rt++)for(let yt=0;yt*2<Ce;yt++)for(let[it,Mt]of IM){let Vt=(rt+it)*2,he=(yt+Mt)*2;if(be(Vt,he))continue;let Ne=Ke(Vt,he),Qt=(Ne<1.2?.75-.4*Ne:.2)*Math.max(.2,$e(Vt,he));n()<Qt&&j(Vt,.002,he,Ne<.8&&n()<.85)}let no=(rt,yt,it)=>{let Mt=Math.hypot(yt[0]-rt[0],yt[1]-rt[1]);for(let Vt=0;Vt<Mt;Vt+=.08){if(n()>.8)continue;let he=Vt/Mt,Ne=.04+Math.pow(n(),2)*.3,Qt=rt[0]+(yt[0]-rt[0])*he+it[0]*Ne,Wt=rt[1]+(yt[1]-rt[1])*he+it[1]*Ne;be(Qt,Wt)||j(Qt,.002,Wt,!0)}};no([0,0],[0,Ce],[1,0]),no([It,0],[It,Ce],[-1,0]),no([0,0],[It,0],[0,1]),no([0,Ce],[It,Ce],[0,-1]),no([pt,Nt],[Ht,Nt],[0,-1]),no([pt,Nt],[pt,xt],[-1,0]),no([Ht,Nt],[Ht,xt],[1,0]),no([ot,Se],[Bt,Se],[0,1]),no([ot,0],[ot,Se],[-1,0]),no([Bt,0],[Bt,Se],[1,0]);for(let rt=0;rt<60;rt++){let yt=Math.floor(n()*3),it,Mt;yt<2?(it=yt?ht.x1+.08+n()*.38:ht.x0-.08-n()*.38,Mt=ht.z0+n()*(ht.z1-ht.z0)):(Mt=ht.z1+.08+n()*.38,it=ht.x0+n()*(ht.x1-ht.x0)),q(it,ht.top,Mt,.04+.06*n(),2+Math.floor(n()*3))}return{walls:t,ground:o,roses:e}}var FM=`
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
`,GM=og.map(t=>id([t[0],t[1]-.22,t[2]])),ha=`
	${FM}
	${eg()}

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
		vec3 p = pw - vec3(${st(Re[0])}, ${st(Re[1])}, ${st(Re[2])});
		float vis = studioSun(pw + N * 0.03);
		sunVis = vis;
		vec3 sunC = mix(vec3(1.0, 0.88, 0.70) * 3.9, vec3(0.50, 0.64, 1.0) * 1.35, night);
		float lam = max(dot(N, STUDIO_SUN), 0.0);
		vec3 col = sunC * vis * lam;
		vec3 Hh = normalize(STUDIO_SUN + V);
		spec = sunC * vis * pow(max(dot(N, Hh), 0.0), mix(16.0, 400.0, gloss)) * mix(0.04, 1.0, gloss) * (lam > 0.0 ? 1.0 : 0.0);

		// skylight: the roof is glass, the walls are full of windows
		float upF = 0.5 + 0.5 * N.y;
		float hgt = clamp(p.y / ${st(xo)}, 0.0, 1.0);
		// corners and the foot of the walls get less of the sky
		float dw = min(min(p.x, ${st(It)} - p.x), min(p.z, ${st(Ce)} - p.z));
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
			${GM.map(t=>`
			{
				vec3 d = vec3(${st(t[0])}, ${st(t[1])}, ${st(t[2])}) - pw;
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
`;function HM(t){let e=new DataView(t),o=e.getUint32(4,!0),r=e.getUint32(8,!0),n=[],a=[];for(let l=0;l<3;l++)n.push(e.getFloat32(12+l*4,!0)),a.push(e.getFloat32(24+l*4,!0));let s=36,i=new Uint16Array(t,s,o*3);s+=o*6;let c=new Uint16Array(t,s,r);s+=r*2;let h=new Int8Array(t,s,o*3);return{nV:o,nI:r,mn:n,sz:a,pos:i,idx:c,nrm:h}}function nr(t,e,o){let r=o&&o.wrap||"clamp",n=t.texture({data:[[[0,0,0,0]]],min:"linear",mag:"linear"}),a={tex:n,ready:!1};return fetch(e).then(s=>{if(!s.ok)throw new Error("Could not load "+e);return s.blob()}).then(s=>createImageBitmap(s,{premultiplyAlpha:"none"}).catch(()=>new Promise((i,c)=>{let h=new Image;h.onload=()=>i(h),h.onerror=c,h.src=URL.createObjectURL(s)}))).then(s=>{n({data:s,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrap:r}),a.ready=!0}).catch(s=>console.error(s)),a}var Eh=128,zh=Math.round((ht.z1-ht.z0)/(11/372)),Ol=(ht.x1-ht.x0)/Eh,ng=(ht.z1-ht.z0)/zh,UM=.02,rg=`
	float simDec(vec2 c) { return (floor(c.x * 255.0 + 0.5) * 256.0 + floor(c.y * 255.0 + 0.5)) / 65535.0 * 2.0 - 1.0; }
	vec2 simEnc(float h) {
		float v = floor(clamp(h * 0.5 + 0.5, 0.0, 1.0) * 65535.0 + 0.5);
		float hi = floor(v / 256.0);
		return vec2(hi, v - hi * 256.0) / 255.0;
	}
`,es=`
	uniform float stime;
	uniform highp sampler2D simTex;
	${rg}
	float simAt(vec2 i) {
		i = clamp(i, vec2(0.0), vec2(${Eh-1}.0, ${zh-1}.0));
		return simDec(texture2D(simTex, (i + 0.5) / vec2(${Eh}.0, ${zh}.0)).rg);
	}
	// the height of the water at world xz (metres, tiny)
	float poolHeight(vec2 xz) {
		float h = 0.0018 * sin(xz.x * 2.1 + stime * 0.55) * sin(xz.y * 1.7 - stime * 0.43)
		        + 0.0010 * sin(xz.x * 3.7 - xz.y * 2.9 + stime * 0.8);
#ifndef NO_SIM
		vec2 g = (xz - vec2(${st(ht.x0+Re[0])}, ${st(ht.z0+Re[2])})) / vec2(${st(Ol)}, ${st(ng)}) - 0.5;
		vec2 i = floor(g), fr = g - i;
		float sh = mix(mix(simAt(i), simAt(i + vec2(1.0, 0.0)), fr.x), mix(simAt(i + vec2(0.0, 1.0)), simAt(i + vec2(1.0, 1.0)), fr.x), fr.y);
		h += sh * ${st(UM)};
#endif
		return h;
	}
`,J3=`
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
	${es}
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
	}`,BM=`
	precision highp float;
	uniform float night, time, yScale, mirrorOn;
	uniform sampler2D padTex, petalTex, reflTex;
	uniform sampler2D rockCol, rockNrm, oldCol, oldNrm, floorCol, floorNrm;
	uniform vec2 reflSize;
	uniform float reflOn;
	uniform mat4 view;
	${es}
	varying vec3 v_pos, v_nrm, v_eye;
	varying float v_kind;
	varying vec2 v_uv;
	${ha}

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
		vec3 p = pw - vec3(${st(Re[0])}, ${st(Re[1])}, ${st(Re[2])});
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
			base *= mix(1.0, 0.84, smoothstep(${st(xo-2.2)}, ${st(xo)}, p.y));
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
			float low = 1.0 - smoothstep(0.0, ${st(ht.top+.35)}, p.y);
			float moss = low * smoothstep(0.35, 0.65, fbm3(p * 4.0 + 2.0));
			base = mix(base, vec3(0.10, 0.12, 0.065), moss * 0.6);
			base *= mix(0.72, 1.0, smoothstep(0.0, 0.22, p.y));
			if (is(${Et.HOLLOW}.0)) {
				// the hollow: older, damper, never washed by the sun
				base *= vec3(0.70, 0.73, 0.68) * (0.85 + 0.15 * smoothstep(${st(No.floor)}, ${st(No.spring)}, p.y));
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
			base *= mix(1.0, 0.9, smoothstep(${st(xo-2)}, ${st(xo)}, p.y));
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
			float wallD = min(min(p.x, ${st(It)} - p.x), min(p.z, ${st(Ce)} - p.z));
			base *= mix(0.72, 1.0, smoothstep(0.0, 1.2, wallD));
			N = normalize(N + (vec3(1.0, 0.0, 0.0) * (tn.r * 2.0 - 1.0) + vec3(0.0, 0.0, -1.0) * (tn.g * 2.0 - 1.0)) * 1.2);
			gloss = 0.12;
			aoK = mix(0.5, 1.0, tn.b) * mix(0.62, 1.0, smoothstep(0.0, 0.9, wallD));
			// the curb throws a soft shadow round the pool
			vec2 dq = max(vec2(${st(ht.x0-ht.curb)} - p.x, p.x - ${st(ht.x1+ht.curb)}), vec2(${st(ht.z0-ht.curb)} - p.z, p.z - ${st(ht.z1+ht.curb)}));
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
			float foot = 1.0 - smoothstep(${st(yn.plinth)}, ${st(yn.plinth+.7)}, p.y);
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
			base = mix(vec3(0.42, 0.10, 0.06), vec3(0.75, 0.62, 0.38), step(${st(.86+.24)}, p.y));
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
			float e = ${st(Ol)};
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
	}`;Yr.exports=function(t){let e=NM();RM(e),OM(e),CM(e),EM(e),zM(e);let o={enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},r=performance.now(),n={t:0},a=0,s=t._gl,i=!!(s&&s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS)>0),c=vt=>i?vt:`#define NO_SIM
`+vt,h=(()=>{let vt=Eh,Ot=zh,Tt=new Uint8Array(vt*Ot*4);for(let fe=0;fe<vt*Ot;fe++)Tt[fe*4]=128,Tt[fe*4+2]=128;let oo=()=>t.framebuffer({color:t.texture({width:vt,height:Ot,data:Tt,min:"nearest",mag:"nearest",wrap:"clamp"}),depth:!1,stencil:!1}),ro=[oo(),oo()],D=0,J=new Uint8Array(vt*Ot*4);for(let fe=0;fe<Ot;fe++)for(let Me=0;Me<vt;Me++){let Ee=ht.x0+(Me+.5)*Ol,ie=ht.z0+(fe+.5)*ng,qe=Math.abs(Ee-yn.x)<.43&&Math.abs(ie-yn.z)<.43,je=0;for(let Qe of ld)je=Math.max(je,1-Math.min(1,Math.max(0,(Math.hypot(Ee-Qe[0],ie-Qe[1])-Qe[2]*.7)/(Qe[2]*.3))));let ae=(fe*vt+Me)*4;J[ae]=qe?0:255,J[ae+1]=Math.round(je*255),J[ae+3]=255}let mt=t.texture({width:vt,height:Ot,data:J,min:"nearest",mag:"nearest",wrap:"clamp"}),ut=16,Xt=[];for(let fe=0;fe<ut;fe++)Xt.push([0,0,0,.04]);let xe={prev:t.prop("prev"),mask:mt};for(let fe=0;fe<ut;fe++)xe["src["+fe+"]"]=(Me=>()=>Xt[Me])(fe);let we=Math.pow(.36*(1/60)/Ol,2),oe=t({vert:"precision highp float; attribute vec2 position; varying vec2 uv; void main() { uv = position * 0.5 + 0.5; gl_Position = vec4(position, 0.0, 1.0); }",frag:`
			precision highp float;
			uniform highp sampler2D prev, mask;
			uniform vec4 src[${ut}];
			varying vec2 uv;
			${rg}
			void main() {
				vec2 px = 1.0 / vec2(${vt}.0, ${Ot}.0);
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
				float hn = h + (h - hp) * damp + ${st(we)} * lap;
				hn *= 0.9993;
				// whatever touched the water this moment
				vec2 p = vec2(${st(ht.x0+Re[0])}, ${st(ht.z0+Re[2])}) + uv * vec2(${st(ht.x1-ht.x0)}, ${st(ht.z1-ht.z0)});
				for (int i = 0; i < ${ut}; i++) {
					vec4 s = src[i];
					if (s.z == 0.0) continue;
					vec2 dd = p - s.xy;
					hn += s.z * exp(-dot(dd, dd) / (s.w * s.w));
				}
				gl_FragColor = vec4(simEnc(clamp(hn, -1.0, 1.0)), simEnc(h));
			}`,attributes:{position:[-1,-1,1,-1,-1,1,1,1]},primitive:"triangle strip",count:4,framebuffer:t.prop("out"),uniforms:xe,depth:{enable:!1,mask:!1},blend:{enable:!1},cull:{enable:!1},viewport:{x:0,y:0,width:vt,height:Ot}}),Fe=[],pe=0,Ie=0;return{tex:()=>ro[D].color[0],drop(fe,Me,Ee,ie){Fe.push([fe,Me,pe,Ee,0,ie||.035]),typeof window!="undefined"&&window.__dropLog&&window.__dropLog.push([fe,Me,pe,Ee])},advance(fe,Me){let Ee=fe-pe-Ie;if(Ee<0||Ee>2){pe=fe,Ie=0;return}Ie+=Ee;let ie=0;for(;Ie>=1/60&&ie<8;){Ie-=1/60,pe+=1/60,ie++;let qe=0;for(let je=Fe.length-1;je>=0;je--){let ae=Fe[je],Qe=pe-ae[2];if(Qe>1.4){Fe.splice(je,1);continue}if(qe>=ut)continue;let r0=ae[3]*.05*Math.sin(Qe*2*Math.PI*2.4)*Math.exp(-Qe*3.2),en=Xt[qe++];en[0]=ae[0],en[1]=ae[1],en[2]=r0,en[3]=ae[5]}for(let je of Me){if(qe>=ut)break;let ae=Xt[qe++];ae[0]=je[0],ae[1]=je[1],ae[2]=je[2],ae[3]=je[3]}for(;qe<ut;qe++)Xt[qe][2]=0;oe({prev:ro[D].color[0],out:ro[1-D]}),D=1-D}ie===8&&(Ie=0,pe=fe)},read(){return t.read({framebuffer:ro[D]})}}})(),l=()=>{n.t=(performance.now()-r)/1e3,typeof window!="undefined"&&window.__studioFreeze!=null&&(n.t=window.__studioFreeze);for(let Tt of K3){let oo=TM(Tt,n.t),ro=oo.ph-oo.Tf;oo.inPool&&ro>=0&&ro<.5&&!(Tt.heard>n.t-1)&&(Tt.heard=n.t,h.drop(oo.lx+Re[0],oo.lz+Re[2],1.1,.04))}let vt=n.t-rt.sim.t;for((vt<0||vt>120)&&(vt=Math.min(Math.max(vt,0),120));vt>1e-6;){let Tt=Math.min(vt,.05);rt.sim.step(Tt),vt-=Tt}for(let Tt of rt.sim.events)Tt[2]>a&&(a=Tt[2],h.drop(Tt[0]+Re[0],Tt[1]+Re[2],Tt[3]*1.3,Tt[3]>=1?.07:.04));let Ot=[];for(let Tt of rt.sim.fish){let oo=Math.min(1,Math.max(0,(Tt.y+.15)/.09));if(oo<=0)continue;let ro=.008*oo*Math.min(1.5,Tt.v/.15);Ot.push([Tt.x+Re[0]+Math.cos(Tt.th)*.02,Tt.z+Re[2]+Math.sin(Tt.th)*.02,ro,.045]),Ot.push([Tt.x+Re[0]-Math.cos(Tt.th)*.14,Tt.z+Re[2]-Math.sin(Tt.th)*.14,-ro,.055])}h.advance(n.t,Ot)},d={stime:()=>n.t,simTex:()=>h.tex()};typeof location!="undefined"&&/tourdebug/.test(location.search)&&(window.__studioClock=n,window.__pondSim=h);let u=t.texture({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"}),p=[4,4],f=0,v=t({}),m=()=>v(vt=>{let Ot=vt.viewportWidth,Tt=vt.viewportHeight;u.width!==Ot||u.height!==Tt?u({copy:!0,width:Ot,height:Tt,min:"linear",mag:"linear",wrap:"clamp"}):u.subimage({copy:!0,width:Ot,height:Tt}),p[0]=Ot,p[1]=Tt,f=1}),g=nr(t,"res/pond/lilypad.webp"),x=nr(t,"res/pond/petals.webp"),y=nr(t,"res/studio/rock_col.webp",{wrap:"repeat"}),w=nr(t,"res/studio/rock_nrm.webp",{wrap:"repeat"}),M=nr(t,"res/studio/oldstone_col.webp",{wrap:"repeat"}),_=nr(t,"res/studio/oldstone_nrm.webp",{wrap:"repeat"}),S=nr(t,"res/studio/floor_col.webp",{wrap:"repeat"}),R=nr(t,"res/studio/floor_nrm.webp",{wrap:"repeat"}),T=Object.assign({padTex:()=>g.tex,petalTex:()=>x.tex,reflTex:()=>u,reflSize:()=>p,reflOn:()=>f,rockCol:()=>y.tex,rockNrm:()=>w.tex,oldCol:()=>M.tex,oldNrm:()=>_.tex,floorCol:()=>S.tex,floorNrm:()=>R.tex},d),H=(vt,Ot)=>t({vert:c(J3),frag:BM,attributes:{position:vt.pos,normal:vt.nrm,kind:vt.kind,uv:vt.uv,anchor:vt.anchor&&vt.anchor.length?vt.anchor:new Float32Array(vt.pos.length/3*4)},elements:new Uint32Array(vt.idx),count:Ot||vt.idx.length,uniforms:T,cull:{enable:!1},blend:o}),q=H(e),W=null;fetch(yn.file).then(vt=>{if(!vt.ok)throw new Error("Could not load "+yn.file);return vt.arrayBuffer()}).then(vt=>{let Ot=HM(vt),Tt={pos:[],nrm:[],kind:[],uv:[],anchor:null,idx:[]},oo=yn.height,ro=Math.cos(yn.yaw),D=Math.sin(yn.yaw);for(let J=0;J<Ot.nV;J++){let mt=(Ot.mn[0]+Ot.pos[J*3]/65535*Ot.sz[0])*oo,ut=(Ot.mn[1]+Ot.pos[J*3+1]/65535*Ot.sz[1])*oo,Xt=(Ot.mn[2]+Ot.pos[J*3+2]/65535*Ot.sz[2])*oo;Tt.pos.push(yn.x+ro*mt+D*Xt+Re[0],yn.plinth+ut+Re[1],yn.z-D*mt+ro*Xt+Re[2]);let xe=Ot.nrm[J*3]/127,we=Ot.nrm[J*3+1]/127,oe=Ot.nrm[J*3+2]/127;Tt.nrm.push(ro*xe+D*oe,we,-D*xe+ro*oe),Tt.kind.push(Et.MARBLE),Tt.uv.push(0,0)}for(let J=0;J<Ot.nI;J++)Tt.idx.push(Ot.idx[J]);W=H(Tt)}).catch(vt=>console.error(vt));let F=nr(t,"res/tree/leaves.webp"),j=PM(),pt=t({vert:c(`
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
		${ha}
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
		}`,attributes:{position:j.pos,normal:j.nrm,uv:j.uv,shade:j.shade,flower:j.flower},elements:new Uint32Array(j.idx),uniforms:{tex:F.tex},cull:{enable:!1}}),Ht=nr(t,"res/studio/plants.webp"),Nt=nr(t,"res/studio/vleaves.webp"),xt=DM(),ot=vt=>t({vert:c(`
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
		${ha}
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
		}`,attributes:{position:vt.pos,normal:vt.nrm,uv:vt.uv,info:vt.info},elements:new Uint32Array(vt.idx),uniforms:{tex:Ht.tex,tex2:Nt.tex},cull:{enable:!1}}),Bt=ot(xt.walls),Se=nr(t,"res/studio/rose_col.webp"),be=null;fetch("res/studio/rose.bin").then(vt=>{if(!vt.ok)throw new Error("Could not load res/studio/rose.bin");return vt.arrayBuffer()}).then(vt=>{let Ot=new DataView(vt).getUint32(4,!0),Tt=new Float32Array(vt,8,Ot*8),oo=new Float32Array(xt.roses.length*Ot*3),ro=new Float32Array(oo.length),D=new Float32Array(xt.roses.length*Ot*2),J=0;for(let mt of xt.roses){let ut=mt.f,Xt=Math.abs(ut[1])>.9?[1,0,0]:[0,1,0],xe=[Xt[1]*ut[2]-Xt[2]*ut[1],Xt[2]*ut[0]-Xt[0]*ut[2],Xt[0]*ut[1]-Xt[1]*ut[0]],we=Math.hypot(...xe),oe=xe.map(Ee=>Ee/we),Fe=[ut[1]*oe[2]-ut[2]*oe[1],ut[2]*oe[0]-ut[0]*oe[2],ut[0]*oe[1]-ut[1]*oe[0]],pe=Math.cos(mt.spin),Ie=Math.sin(mt.spin),fe=oe.map((Ee,ie)=>Ee*pe+Fe[ie]*Ie),Me=Fe.map((Ee,ie)=>Ee*pe-oe[ie]*Ie);for(let Ee=0;Ee<Ot;Ee++){let ie=Tt[Ee*8],qe=Tt[Ee*8+1],je=Tt[Ee*8+2],ae=Tt[Ee*8+3],Qe=Tt[Ee*8+4],r0=Tt[Ee*8+5];for(let en=0;en<3;en++)oo[J*3+en]=mt.at[en]+Re[en]+(fe[en]*ie+Me[en]*qe+ut[en]*je)*mt.size,ro[J*3+en]=fe[en]*ae+Me[en]*Qe+ut[en]*r0;D[J*2]=Tt[Ee*8+6],D[J*2+1]=Tt[Ee*8+7],J++}}be=t({vert:c(`
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
				${ha}
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
				}`,attributes:{position:oo,normal:ro,uv:D},count:J,uniforms:{tex:Se.tex},cull:{enable:!1}})}).catch(vt=>console.error(vt));let Ke=ot(xt.ground);typeof location!="undefined"&&/tourdebug/.test(location.search)&&console.log("studio greenery: ivy verts",xt.walls.pos.length/3,"ground verts",xt.ground.pos.length/3);let $e=(()=>{let vt={corner:[],start:[],par:[],misc:[],idx:[]};return K3.forEach((Ot,Tt)=>{for(let oo of[[-1,-1],[1,-1],[1,1],[-1,1]])vt.corner.push(oo[0],oo[1]),vt.start.push(Ot.start[0]+Re[0],Ot.start[1],Ot.start[2]+Re[2]),vt.par.push(Ot.period,Ot.offset,Ot.drift[0],Ot.drift[1]),vt.misc.push(Ot.speed,Ot.seed,Ot.white);vt.idx.push(Tt*4,Tt*4+1,Tt*4+2,Tt*4,Tt*4+2,Tt*4+3)}),vt})(),no=t({vert:c(`
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
		${es}
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
			vec2 lq = land - vec2(${st(Re[0])}, ${st(Re[2])});
			bool inPool = lq.x > ${st(os[0])} && lq.x < ${st(os[2])} && lq.y > ${st(os[1])} && lq.y < ${st(os[3])};
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
		${ha}
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
		}`,attributes:{corner:$e.corner,start:$e.start,par:$e.par,misc:$e.misc},elements:new Uint32Array($e.idx),uniforms:d,cull:{enable:!1}}),rt={sim:LM(),ready:!1};Pl=rt.sim,typeof location!="undefined"&&/tourdebug/.test(location.search)&&(window.__koi=rt.sim);let yt=Object.assign({},d);Xr.forEach((vt,Ot)=>{yt["koiA["+Ot+"]"]=()=>{let Tt=rt.sim.fish[Ot];return[Tt.x+Re[0],Tt.y,Tt.z+Re[2],Tt.th]},yt["koiB["+Ot+"]"]=()=>{let Tt=rt.sim.fish[Ot];return[Tt.kappa,Tt.ph,Tt.amp,Tt.pitch]}});let it=(()=>{let Ot=Math.round(96*(ht.z1-ht.z0)/(ht.x1-ht.x0)),Tt=new Uint8Array(96*Ot*4),oo=[-ua[0]/ua[1]*-Ll,-ua[2]/ua[1]*-Ll],ro=96/(ht.x1-ht.x0),D=Ot/(ht.z1-ht.z0);for(let J=0;J<Ot;J++)for(let mt=0;mt<96;mt++){let ut=ht.x0+(mt+.5)/ro,Xt=ht.z0+(J+.5)/D,xe=0;for(let we of ld){let oe=Math.hypot(ut-(we[0]+oo[0]),Xt-(we[1]+oo[1]));xe=Math.max(xe,1-Math.min(1,Math.max(0,(oe-we[2]*.82)/(we[2]*.35))))}Tt[(J*96+mt)*4]=Math.round(xe*255),Tt[(J*96+mt)*4+3]=255}return t.texture({width:96,height:Ot,data:Tt,min:"linear",mag:"linear"})})(),Mt=`
		uniform vec4 koiA[${Xr.length}], koiB[${Xr.length}];
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
	`,Vt=`
		uniform vec4 koiA[${Xr.length}], koiB[${Xr.length}];
		uniform sampler2D padShadow;
		const vec3 W_SUN = vec3(${st(ua[0])}, ${st(ua[1])}, ${st(ua[2])});
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
			vec2 lp = pw.xz - vec2(${st(Re[0])}, ${st(Re[2])});
			// (the picture is for the bed; nearer the surface the shadow sits nearer the pad)
			vec2 back = W_SUN.xz / W_SUN.y * (pw.y - ${st(Ll)});
			vec2 uv = (lp - back - vec2(${st(ht.x0)}, ${st(ht.z0)})) / vec2(${st(ht.x1-ht.x0)}, ${st(ht.z1-ht.z0)});
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
			float e = ${st(Ol)};
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
	`,he=(()=>{let vt=[],Ot=[],Tt=[],oo=[],ro=(we,oe,Fe,pe,Ie)=>(vt.push(we+Re[0],oe,Fe+Re[2]),Ot.push(...pe),Tt.push(Ie),vt.length/3-1),D=(we,oe,Fe,pe,Ie,fe,Me)=>{let Ee=vt.length/3;for(let ie=0;ie<=pe;ie++)for(let qe=0;qe<=Ie;qe++)ro(we[0]+oe[0]*ie/pe+Fe[0]*qe/Ie,we[1]+oe[1]*ie/pe+Fe[1]*qe/Ie,we[2]+oe[2]*ie/pe+Fe[2]*qe/Ie,fe,Me);for(let ie=0;ie<pe;ie++)for(let qe=0;qe<Ie;qe++){let je=Ee+ie*(Ie+1)+qe;oo.push(je,je+1,je+Ie+2,je,je+Ie+2,je+Ie+1)}},{x0:J,x1:mt,z0:ut,z1:Xt}=ht,xe=Ll;return D([J,xe,ut],[mt-J,0,0],[0,0,Xt-ut],8,22,[0,1,0],0),D([J,0,ut],[0,0,Xt-ut],[0,xe,0],22,2,[1,0,0],1),D([mt,0,ut],[0,0,Xt-ut],[0,xe,0],22,2,[-1,0,0],1),D([J,0,ut],[mt-J,0,0],[0,xe,0],8,2,[0,0,1],1),D([J,0,Xt],[mt-J,0,0],[0,xe,0],8,2,[0,0,-1],1),{pos:vt,nrm:Ot,kd:Tt,idx:oo}})(),Ne=nr(t,"res/pond/gravel.jpg",{wrap:"repeat"}),Qt=Object.assign({padShadow:it,gravel:()=>Ne.tex,reflTex:()=>u,reflSize:()=>p,reflOn:()=>f},yt),Wt=t({vert:c(`
		precision highp float;
		uniform mat4 proj, view;
		attribute vec3 position, normal;
		attribute float kd;
		varying vec3 v_pos, v_nrm, v_eye;
		varying float v_kd;
		${es}
		${Mt}
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
		${es}
		${ha}
		${Vt}
		float klen(int i) {
			${Xr.map((vt,Ot)=>`if (i == ${Ot}) return ${st(vt.len)};`).join(" ")}
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
				base = mix(base, vec3(0.10, 0.13, 0.07), smoothstep(-0.05, ${st(Ll)}, v_pos.y) * 0.75);
			}
			vec3 spec; float sv;
			vec3 light = studioLight(vec3(v_pos.x - W_SUN.x / W_SUN.y * v_pos.y, 0.02, v_pos.z - W_SUN.z / W_SUN.y * v_pos.y), N, V, 0.1, spec, sv);
			vec3 sunPart;
			vec3 lit = underSun(v_pos, N, sv, sunPart);
			// the koi's shadows, softer the higher they swim above the bed
			float sh = 0.0;
			for (int i = 0; i < ${Xr.length}; i++) {
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
		}`,attributes:{position:he.pos,normal:he.nrm,kd:he.kd},elements:new Uint16Array(he.idx),uniforms:Qt,cull:{enable:!1},depth:{enable:!0,mask:!1,func:"less"},blend:o}),ct=nr(t,"res/koi.webp"),Zt=null,de=null;fetch("res/koi.bin").then(vt=>{if(!vt.ok)throw new Error("Could not load res/koi.bin");return vt.arrayBuffer()}).then(vt=>{let Ot=new DataView(vt),Tt=Ot.getUint32(4,!0),oo=Ot.getUint32(8,!0),ro=Ot.getFloat32(12,!0),D=16,J=new Uint16Array(vt,D,Tt);D+=Tt*2;let mt=new Int16Array(vt,D,Tt*2);D+=Tt*4;let ut=new Uint16Array(vt,D,Tt*2);D+=Tt*4;let Xt=new Uint16Array(vt,D,oo);D+=oo*2;let xe=new Int8Array(vt,D,Tt*3);D+=Tt*3;let we=new Uint8Array(vt,D,Tt*2),oe=Xr.length,Fe=new Float32Array(Tt*3*oe),pe=new Float32Array(Tt*3*oe),Ie=new Float32Array(Tt*2*oe),fe=new Float32Array(Tt*2*oe),Me=new Float32Array(Tt*4*oe);Xr.forEach((qe,je)=>{for(let ae=0;ae<Tt;ae++){let Qe=je*Tt+ae;Fe[Qe*3]=J[ae]/65535*1.2,Fe[Qe*3+1]=mt[ae*2]/32767*ro,Fe[Qe*3+2]=mt[ae*2+1]/32767*ro,pe[Qe*3]=xe[ae*3]/127,pe[Qe*3+1]=xe[ae*3+1]/127,pe[Qe*3+2]=xe[ae*3+2]/127,Ie[Qe*2]=ut[ae*2]/65535,Ie[Qe*2+1]=ut[ae*2+1]/65535,fe[Qe*2]=we[ae*2]/255,fe[Qe*2+1]=we[ae*2+1]/255,Me[Qe*4]=qe.len,Me[Qe*4+1]=qe.kind,Me[Qe*4+2]=je,Me[Qe*4+3]=0}});let Ee=[],ie=[];for(let qe=0;qe<oe;qe++)for(let je=0;je<oo;je+=3){let ae=Xt[je],Qe=Xt[je+1],r0=Xt[je+2];(Math.max(we[ae*2],we[Qe*2],we[r0*2])>140?ie:Ee).push(ae+qe*Tt,Qe+qe*Tt,r0+qe*Tt)}de={body:t.elements({data:new Uint32Array(Ee),type:"uint32"}),fins:t.elements({data:new Uint32Array(ie),type:"uint32"})},Zt=t({vert:c(`
				precision highp float;
				uniform mat4 proj, view;
				attribute vec3 loc, nrm;
				attribute vec2 uv, fin;
				attribute vec4 km;
				varying vec3 v_pos, v_nrm, v_eye;
				varying vec2 v_uv;
				varying float v_kind, v_fin, v_depth, v_seed, v_u;
				${es}
				${Mt}
				void main() {
					float len = km.x;
					int fi = int(km.z + 0.5);
					vec4 A = koiA[0], B = koiB[0];
					for (int i = 1; i < ${Xr.length}; i++) if (i == fi) { A = koiA[i]; B = koiB[i]; }
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
				${es}
				${ha}
				${Vt}
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
				}`,attributes:{loc:Fe,nrm:pe,uv:Ie,fin:fe,km:Me},elements:t.prop("els"),uniforms:Object.assign({koiTex:()=>ct.tex,padShadow:it,reflTex:()=>u,reflSize:()=>p,reflOn:()=>f},yt),cull:{enable:!1},colorMask:t.prop("color"),depth:{enable:!0,mask:t.prop("write"),func:t.prop("func")},blend:o}),rt.ready=!0}).catch(vt=>console.error(vt));let se=()=>{Zt&&(Zt({els:de.body,color:[!1,!1,!1,!1],write:!0,func:"less"}),Zt({els:de.body,color:[!0,!0,!0,!0],write:!1,func:"lequal"}),Zt({els:de.fins,color:[!0,!0,!0,!0],write:!1,func:"less"}))},Rt=(()=>{let vt={cp:[],ci:[],idx:[]};for(let Ot=0;Ot<Nl;Ot++){let Tt=vt.cp.length/3,oo=5,ro=7;for(let D=0;D<=oo;D++)for(let J=0;J<ro;J++){let mt=D/oo*Math.PI,ut=J/ro*Math.PI*2,Xt=1+.35*Math.sin(ut*3+Ot*1.7)*Math.sin(mt*2+Ot);vt.cp.push(Math.sin(mt)*Math.cos(ut)*Xt,Math.cos(mt)*.6,Math.sin(mt)*Math.sin(ut)*Xt*(.8+.4*(Ot*.37%1))),vt.ci.push(Ot)}for(let D=0;D<oo;D++)for(let J=0;J<ro;J++){let mt=Tt+D*ro+J,ut=Tt+D*ro+(J+1)%ro,Xt=Tt+(D+1)*ro+J,xe=Tt+(D+1)*ro+(J+1)%ro;vt.idx.push(mt,ut,xe,mt,xe,Xt)}}return vt})(),Ue=Object.assign({},d);for(let vt=0;vt<Nl;vt++)Ue["crumbs["+vt+"]"]=()=>{let Ot=rt.sim.crumbs[vt],Tt=rt.sim.t,oo=Ot.alive?Math.min(1,Math.max(0,(Tt-Ot.born)/.25)):0;return[Ot.x+Re[0],Ot.z+Re[2],oo,Ot.seed]};let k=t({vert:c(`
		precision highp float;
		uniform mat4 proj, view;
		uniform vec4 crumbs[${Nl}];
		attribute vec3 cp;
		attribute float ci;
		varying vec3 v_pos, v_nrm, v_eye;
		${es}
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
		${ha}
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
		}`,attributes:{cp:Rt.cp,ci:Rt.ci},elements:new Uint32Array(Rt.idx),uniforms:Ue,cull:{enable:!1}}),Be=$M(),Xe=t({vert:c(J3),frag:`
		precision highp float;
		uniform float night, time;
		varying vec3 v_pos, v_nrm, v_eye;
		varying float v_kind;
		varying vec2 v_uv;
		${ha}
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			vec3 N = normalize(v_nrm);
			if (dot(N, V) < 0.0) N = -N;
			float F = 0.04 + 0.96 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
			vec3 p = v_pos - vec3(${st(Re[0])}, ${st(Re[1])}, ${st(Re[2])});
			float dust = fbm3(p * vec3(1.5, 3.0, 1.5)) * (v_kind > 0.5 ? 1.0 : 0.6);
			// streaks where old rain has run down the roof
			float streak = v_kind > 0.5 ? smoothstep(0.55, 0.9, vnoise3(vec3(p.z * 9.0, p.x * 0.6, 0.0))) * 0.5 : 0.0;
			vec3 c = mix(vec3(0.85, 0.80, 0.72), vec3(0.12, 0.13, 0.17), night) * (dust * 0.5 + streak);
			float a = clamp(0.05 + dust * 0.16 + streak * 0.2 + F * 0.4, 0.0, 0.6);
			vec3 col = mix(c, studioSky(reflect(-V, N)), F / max(a, 0.01) * 0.4);
			// the roof's leaded pattern: dark cames, frosted rondels lit
			// from behind by the sky
			if (v_kind > 0.5) {
				float ux = p.x < ${st(It/2)} ? p.x : ${st(It)} - p.x;
				vec2 pq = vec2(ux - ${st(Qo.purlin)} * floor(ux / ${st(Qo.purlin)}) - ${st(Qo.purlin/2)}, p.z - ${st(Qo.rafter)} * floor(p.z / ${st(Qo.rafter)}) - ${st(Qo.rafter/2)});
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
		}`,attributes:{position:Be.pos,normal:Be.nrm,kind:Be.kind,uv:Be.uv,anchor:Be.anchor},uniforms:d,elements:new Uint32Array(Be.idx),cull:{enable:!1},depth:{mask:!1},blend:o}),mo=(()=>{let vt={pos:[],idx:[]},Ot=300,Tt=24,oo=12;for(let ro=0;ro<=oo;ro++){let D=-.25*vo+ro/oo*.75*vo;for(let J=0;J<=Tt;J++){let mt=J/Tt*2*vo;vt.pos.push(Re[0]+It/2+Ot*Math.cos(D)*Math.cos(mt),Ot*Math.sin(D),Re[2]+Ce/2+Ot*Math.cos(D)*Math.sin(mt))}}for(let ro=0;ro<oo;ro++)for(let D=0;D<Tt;D++){let J=ro*(Tt+1)+D,mt=J+1,ut=J+Tt+2,Xt=J+Tt+1;vt.idx.push(J,mt,ut,J,ut,Xt)}return vt})(),Je=t({vert:c(`
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
		${ha}
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
		void main() {`),attributes:{position:mo.pos},elements:new Uint32Array(mo.idx),cull:{enable:!1}});function bo(vt){vt&&vt.reflected||(m(),l()),Je(),q(),vt&&vt.reflected||(Wt(),se(),k()),W&&W(),pt(),Bt(),be&&be(),vt&&vt.reflected||Ke(),no(),vt&&vt.reflected||Xe()}return bo};var Pl=null;function jM(t,e){if(e[1]>=-1e-4)return null;let o=-t[1]/e[1],r=t[0]+e[0]*o-Re[0],n=t[2]+e[2]*o-Re[2];return r<ht.x0||r>ht.x1||n<ht.z0||n>ht.z1?null:[r+Re[0],n+Re[2]]}function WM(t,e){Pl&&Pl.drop(t-Re[0],e-Re[2])}function VM(){return!!(Pl&&Pl.feed.on)}var tg=[{from:[8,1.65,21.1],to:[8,1.7,19.1],at:[8,2.4,1],fov:58},{from:[3.6,1.65,20.5],to:[4.6,1.75,18.7],at:[8.8,2.7,1.5],fov:58},{from:[8,1.45,11.2],to:[8,1.55,8.4],at:[8,2.5,.5],fov:46},{from:[8.9,3.9,11.4],to:[7.4,3.7,10.2],at:[8,-.2,7.2],fov:50,pond:!0},{from:[5.1,1.5,5.8],to:[5.7,1.7,4.6],at:[8,2.6,.8],fov:44},{from:[10.6,1.6,2.4],to:[9.7,1.7,3.6],at:[8,2.4,22],fov:60},{from:[2.6,1.5,19],to:[3.6,1.6,17.4],at:[8,6.8,8],fov:62}],uc=11;function XM(t){let e=tg.length,o=Math.floor(t/uc)%e,r=t%uc/uc,n=r*r*(3-2*r),a=tg[o],s=a.from.map((c,h)=>c+(a.to[h]-c)*n),i=Math.max(0,1-Math.min(r*uc,(1-r)*uc)/.7);return{eye:id(s),target:id(a.at),fov:a.fov,roll:0,fade:i,pond:!!a.pond&&i<.05,shot:Math.floor(t/uc)}}Yr.exports.previewCam=XM;Yr.exports.poolHit=jM;Yr.exports.feedAt=WM;Yr.exports.feeding=VM;Yr.exports.sunGLSL=eg;Yr.exports.O=Re;Yr.exports.SIZE={W:It,L:Ce,H:xo,RIDGE:vr};Yr.exports.BOX=[Re[0]-.8,0,Re[2]-.8,Re[0]+It+.8,vr+.5,Re[2]+Ce+.8];Yr.exports.AIR_BOX=[Re[0],0,Re[2],Re[0]+It,vr,Re[2]+Ce]});var Nh=At((xA,fg)=>{"use strict";var{A:_0}=Lr(),{C:Hn}=S0(),{DOOR:dc}=Va(),h0=Ja(),pc=Ks(),ig=Hn.hallEnd+.35,cg={arch:[13.6,0,_0.zc-_0.arch.r-.3,14.4,_0.arch.spring+_0.arch.r+.3,_0.zc+_0.arch.r+.3],mouth:[13.3,0,Hn.z0-.3,14.3,8.2,Hn.z1+.3],stair:[-.5,0,h0.SURR.z0-.2,.5,h0.SURR.top+.3,h0.SURR.z1+.2],door:[dc.x0-.4,0,-.5,dc.x1+.4,dc.top+.4,.5],windows:[15.6,.4,Hn.z1-.2,36.9,6.4,Hn.z1+.9],farDoor:[Hn.x1-.2,0,Hn.zc-dc.r-.4,Hn.x1+.9,dc.top+.4,Hn.zc+dc.r+.4]},Ra={court:[_0.x0-.4,0,_0.z0-.3,_0.x1+.3,_0.domeTop+.5,_0.z1+.3],stair:[h0.C.x-h0.R-2.6,0,h0.C.z-h0.R-1.5,.5,15.6,h0.C.z+h0.R+1.5],street:[-60,-1,-140,74,60,.6],garden:[10,-1,Hn.z1,46,60,Hn.z1+110],florence:[Hn.x1,-1,Hn.zc-30,Hn.x1+80,60,Hn.zc+30],studio:pc.BOX},YM=[[0,0,0,14,0,ig],[13.6,0,Hn.z0,Hn.x1+.4,0,Hn.z1],[_0.x0-.4,0,_0.z0,_0.x1,0,_0.z1],[h0.C.x-h0.R-2.6,0,h0.C.z-h0.R,.4,0,h0.C.z+h0.R],[pc.BOX[0],0,pc.BOX[2],pc.BOX[3],0,pc.BOX[5]]],KM={hall:{court:["arch"],stair:["stair"],street:["door"],garden:["mouth","windows"],florence:["mouth","farDoor"]},wing:{court:["mouth","arch"],stair:["mouth","stair"],street:["mouth","door"],garden:["windows"],florence:["farDoor"]},court:{stair:["arch","stair"],street:["arch","door"],garden:["arch","mouth","windows"],florence:["arch","mouth","farDoor"]},stair:{court:["stair","arch"],street:["stair","door"],garden:["stair","mouth","windows"],florence:["stair","mouth","farDoor"]}},ql=new Float64Array(24),Kr=[7,2,2],lg=0,Oa="out",Lh=!0;try{/[?&]nocull\b/.test(location.search)&&(Lh=!1)}catch(t){}var $l={court:!0,stair:!0,street:!0,garden:!0,florence:!0,studio:!1},Il={court:!0,stair:!0,street:!0,garden:!0,florence:!0,studio:!1},ag=!0;function QM(t){let e=i=>[t[i],t[4+i],t[8+i],t[12+i]],o=e(0),r=e(1),n=e(2),a=e(3),s=(i,c,h,l)=>{for(let d=0;d<4;d++)ql[i*4+d]=c[d]+h*l[d]};s(0,a,1,o),s(1,a,-1,o),s(2,a,1,r),s(3,a,-1,r),s(4,a,1,n),s(5,a,-1,n)}function ns(t,e){if(!Lh)return!0;let o=e?-t[4]:t[1],r=e?-t[1]:t[4];for(let n=0;n<6;n++){let a=ql[n*4],s=ql[n*4+1],i=ql[n*4+2],c=ql[n*4+3],h=a>0?t[3]:t[0],l=s>0?r:o,d=i>0?t[5]:t[2];if(a*h+s*l+i*d+c<0)return!1}return!0}var fd=(t,e)=>Kr[0]>t[0]-e&&Kr[0]<t[3]+e&&Kr[2]>t[2]-e&&Kr[2]<t[5]+e;function ZM(t){if(fd(t,.6))return null;let e=1/0,o=-1/0;for(let r=0;r<4;r++){let n=(r&1?t[3]:t[0])-Kr[0],a=(r&2?t[5]:t[2])-Kr[2],s=Math.atan2(n,a)-lg;s-=Math.round(s/(2*Math.PI))*2*Math.PI,e=Math.min(e,s),o=Math.max(o,s)}return o-e>Math.PI?null:[e,o]}function sg(t,e,o){let r=-Math.PI,n=Math.PI,a=s=>{let i=ZM(s);return i?(r=Math.max(r,i[0]-.03),n=Math.min(n,i[1]+.03),r<=n):!0};for(let s of t){let i=cg[s];if(!fd(i,.6)&&(!ns(i,o)||!a(i)))return!1}return ns(e,o)&&a(e)}function JM(){let t=Kr[0],e=Kr[2],o=pc.BOX;return t>o[0]&&t<o[3]&&e>o[2]&&e<o[5]?"studio":t<0&&e>h0.C.z-h0.R-1.5&&t>h0.C.x-h0.R-2.6?"stair":t>14.1&&e>_0.z0-.3&&e<_0.z1+.3&&t<_0.x1+.3?"court":t>13.9&&e>Hn.z0-.4&&e<Hn.z1+.1&&t<Hn.x1+.3?"wing":t>=0&&t<=14.1&&e>.3&&e<ig?"hall":"out"}var t8={PORTAL:cg,ROOM:Ra,update(t,e,o){let r=new Array(16);for(let n=0;n<4;n++)for(let a=0;a<4;a++){let s=0;for(let i=0;i<4;i++)s+=e[i*4+a]*t[n*4+i];r[n*4+a]=s}QM(r),Kr[0]=o[0],Kr[1]=o[1],Kr[2]=o[2],lg=Math.atan2(-t[2],-t[10]),Oa=JM();for(let n in Ra){if(n==="studio"||Oa==="studio"){$l[n]=Il[n]=n==="studio"&&Oa==="studio";continue}if(!Lh||Oa==="out"||Oa===n||fd(Ra[n],.3))$l[n]=ns(Ra[n],!1)||Oa===n,Il[n]=ns(Ra[n],!0)||Oa===n;else{let a=KM[Oa][n];$l[n]=a?sg(a,Ra[n],!1):ns(Ra[n],!1),Il[n]=a?sg(a,Ra[n],!0):ns(Ra[n],!0)}}ag=!Lh||YM.some(n=>ns(n,!1))},get zone(){return Oa},room(t,e){return e?Il[t]:$l[t]},box(t,e,o){return o&&!(e?Il[o]:$l[o])?!1:ns(t,e)},get floor(){return ag}};fg.exports=t8});var ug=At((yA,hg)=>{"use strict";var e8=Ku(),o8=Nh();function n8(t){let e=new DataView(t);if(String.fromCharCode(e.getUint8(0),e.getUint8(1),e.getUint8(2),e.getUint8(3))!=="STAT")throw new Error("Not a statue file");let r=e.getUint32(4,!0),n=e.getUint32(8,!0),a=[],s=[];for(let d=0;d<3;d++)a.push(e.getFloat32(12+d*4,!0)),s.push(e.getFloat32(24+d*4,!0));let i=36,c=new Uint16Array(t,i,r*3);i+=r*6;let h=new Uint16Array(t,i,n);i+=n*2;let l=new Int8Array(t,i,r*3);return{nV:r,nI:n,mn:a,sz:s,pos:c,idx:h,nrm:l}}hg.exports=(t,e)=>{let o=[],r=[],n=[],a=[],s=null,i=e.statues.length,c=[],h=(d,u)=>{let p=o.length/3,f=u.height*.75,v=u.base!==void 0?u.base:e.pedestalTop;c.push({offset:a.length,count:d.nI,box:[u.x-f,v-.1,u.z-f,u.x+f,v+u.height+.2,u.z+f]});let m=u.height,g=Math.cos(u.yaw),x=Math.sin(u.yaw),y=u.base!==void 0?u.base:e.pedestalTop;for(let w=0;w<d.nV;w++){let M=(d.mn[0]+d.pos[w*3]/65535*d.sz[0])*m,_=(d.mn[1]+d.pos[w*3+1]/65535*d.sz[1])*m,S=(d.mn[2]+d.pos[w*3+2]/65535*d.sz[2])*m;o.push(u.x+g*M+x*S,y+_,u.z-x*M+g*S);let R=d.nrm[w*3]/127,T=d.nrm[w*3+1]/127,H=d.nrm[w*3+2]/127;r.push(g*R+x*H,T,-x*R+g*H),n.push(u.mat||1,0,0)}for(let w=0;w<d.nI;w++)a.push(p+d.idx[w])},l=()=>{a.length!==0&&(s=e8(t,{position:o,normal:r,mat:n,elements:a,lights:e.lights,get viewer(){return e.viewer}},!1,!0))};return e.statues.forEach(d=>{fetch("res/"+d.file).then(u=>{if(!u.ok)throw new Error("Could not load "+d.file);return u.arrayBuffer()}).then(u=>h(n8(u),d)).catch(u=>console.error(u)).then(()=>{--i===0&&l()})}),function(d){if(!s)return;let u=!!(d&&d.reflected),p=c.filter(f=>o8.box(f.box,u));p.length&&s(p)}}});var Mg=At((bA,ud)=>{"use strict";var r8=Ds(),Zn=1.29032,Zs=[9.2968,2,5.9],a8=[[.767398,.00185,-.10827],[.010515,.769952,.087681],[-.107774,.08829,-.762374]],Rh=2147.64,dg=725,pg=1288,vg=1450,mg=2576,rr=-5.197,ti=3.865,rs=10.135,ei=-14.679,Dl=-30.229,Fl=7.232,gg=-45.713,vc=17.1*Zn,Js=16.6*Zn,Gl=16.6*Zn,xg=[6.9,17.1],Oh=[2.95,16.6],s8=1.6,i8=0,c8=1,yg=2,hd=3,bg=4,wg=5,l8=6;function f8(){let t=[],e=[],o=[],r=[],n=r8.createBuilder(t,e,o,r),a=(h,l,d,u,p,f,v=1,m=1)=>{let g=[];for(let x=0;x<=v;x++){let y=[];for(let w=0;w<=m;w++){let M=[h[0]+l[0]*x/v+d[0]*w/m,h[1]+l[1]*x/v+d[1]*w/m,h[2]+l[2]*x/v+d[2]*w/m],_=f(M);y.push(n.vert(M,u,[p,_[0],_[1]]))}g.push(y)}for(let x=0;x<v;x++)for(let y=0;y<m;y++)n.tri(g[x][y],g[x+1][y],g[x][y+1]),n.tri(g[x+1][y],g[x+1][y+1],g[x][y+1])},s=h=>l=>[(Zs[2]-l[2])/Zn-h,l[1]/Zn];a([-60,0,-.36],[130,0,0],[0,0,-140],[0,1,0],i8,h=>[h[0]/Zn,h[2]/Zn],13,14),a([ti,0,rr],[0,0,ei-rr],[0,vc,0],[1,0,0],c8,s(8.6),6,6),a([-40,0,rr],[ti+40,0,0],[0,vc,0],[0,0,1],yg,h=>[(ti-h[0])/Zn,h[1]/Zn],8,4),a([-40,0,-.36],[0,0,rr+.36],[0,vc,0],[1,0,0],yg,h=>[-h[2]/Zn,h[1]/Zn]),a([rs,0,-80],[0,0,rr+80],[0,Js,0],[-1,0,0],bg,s(8.6),12,6),a([rs,0,rr],[60,0,0],[0,Js,0],[0,0,1],wg,h=>[(h[0]-rs)/Zn,h[1]/Zn],8,4),a([70,0,rr],[0,0,-.36-rr],[0,Js,0],[-1,0,0],wg,h=>[-h[2]/Zn,h[1]/Zn]);let i=h=>[(h[0]-Zs[0])/Zn+4.18,h[1]/Zn];a([-20,0,Dl],[Fl+20,0,0],[0,Gl,0],[0,0,1],hd,i,8,6),a([Fl,0,Dl],[0,0,gg-Dl],[0,Gl,0],[1,0,0],hd,s(28),4,4),a([Fl,0,gg],[rs-Fl,0,0],[0,Js,0],[0,0,1],bg,h=>[(h[0]-Zs[0])/Zn,h[1]/Zn],2,4),a([-20,0,ei],[0,0,Dl-ei],[0,Gl,0],[1,0,0],hd,s(16),4,4);let c=(h,l,d,u)=>a(h,l,d,u,l8,()=>[0,0],4,4);return c([-300,-20,-300],[600,0,0],[0,320,0],[0,0,1]),c([-300,300,-300],[600,0,0],[0,0,300],[0,-1,0]),c([-300,-20,0],[0,0,-300],[0,320,0],[1,0,0]),c([300,-20,-300],[0,0,300],[0,320,0],[-1,0,0]),{position:t,normal:e,elements:o,attr:r}}function Qs(t,e,o,r){let n=t.texture({data:[[r]],...o,min:"linear",mag:"linear"});return fetch(e).then(a=>{if(!a.ok)throw new Error("Could not load "+e);return a.blob()}).then(a=>createImageBitmap(a)).then(a=>{n({data:a,...o,min:"mipmap",mipmap:"nice",mag:"linear"})}).catch(a=>console.error(a)),n}var Qr=t=>"vec3("+t.map(e=>e.toFixed(4)).join(", ")+")",h8=[[[-.35,0,-.35],[14.35,9.2,50]],[[-40,0,ei],[ti,vc,rr]],[[rs,0,-80],[70,Js,rr]],[[-20,0,-80],[Fl,Gl,Dl]],[[-40,0,-80],[-20,Gl,ei]]],u8=h8.map(t=>`if (hitBox(ro, rd, ${Qr(t[0])}, ${Qr(t[1])}, 1e4) ) return 0.0;`).join(`
		`),_g="mat3("+[0,1,2].map(t=>[0,1,2].map(e=>a8[e][t].toFixed(6)).join(", ")).join(", ")+")",d8=`
precision highp float;

uniform sampler2D photo, photoNight, photoMask, pinkTex, yellowTex, creamTex, cobbleTex;
uniform float time;
uniform float night;   // 0 by day, 1 at night

varying vec3 v_pos;
varying vec3 v_normal;
varying vec3 v_attr;
varying vec3 v_eye;

const vec3 SUN = ${Qr([-.25,.4,.88].map(t=>t/Math.hypot(-.25,.4,.88)))};

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
	${u8}
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
	vec3 ro = ${Qr(Zs)};
	vec3 rd = p - ro;
	if (hitBox(ro, rd, ${Qr([-40,0,ei])}, ${Qr([ti-.02,vc,rr])}, 0.995)) return false;
	if (hitBox(ro, rd, ${Qr([rs+.02,0,-80])}, ${Qr([70,Js,rr])}, 0.995)) return false;
	return true;
}

// is this point sky in the photo? (only meaningful inside the photo)
bool photoSky(vec3 p) {
	vec3 pc = ${_g} * (p - ${Qr(Zs)});
	if (pc.z < 0.2) return false;
	vec2 uv = vec2(
		(${dg.toFixed(2)} + ${Rh.toFixed(3)} * pc.x / pc.z) / ${vg.toFixed(1)},
		(${pg.toFixed(2)} - ${Rh.toFixed(3)} * pc.y / pc.z) / ${mg.toFixed(1)}
	);
	if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return false;
	return texture2D(photoMask, uv).r < 0.5;
}

// photo colour and how much to trust it (0..1)
vec4 photoAt(vec3 p, vec3 n, vec3 eye) {
	vec3 pc = ${_g} * (p - ${Qr(Zs)});
	if (pc.z < 0.2) return vec4(0.0);
	vec2 uv = vec2(
		(${dg.toFixed(2)} + ${Rh.toFixed(3)} * pc.x / pc.z) / ${vg.toFixed(1)},
		(${pg.toFixed(2)} - ${Rh.toFixed(3)} * pc.y / pc.z) / ${mg.toFixed(1)}
	);
	vec2 e = min(uv, 1.0 - uv);
	float w = smoothstep(0.002, 0.02, min(e.x, e.y));
	if (w <= 0.0) return vec4(0.0);
	w *= smoothstep(0.35, 0.75, texture2D(photoMask, uv).r);
	if (w <= 0.0) return vec4(0.0);
	if (!photoSees(p)) return vec4(0.0);
	// if we see this surface much more square-on than the photo did,
	// the photo would look smeared: hand over to the painted facade
	float camCos = abs(dot(normalize(p - ${Qr(Zs)}), n));
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
		base = texture2D(cobbleTex, fuv / ${s8.toFixed(2)}).rgb;
	} else if (kind < 2.5) {
		base = texture2D(pinkTex, vec2(fuv.x / ${xg[0].toFixed(2)}, 1.0 - fuv.y / ${xg[1].toFixed(2)})).rgb;
	} else if (kind < 3.5) {
		base = texture2D(yellowTex, vec2(fuv.x / ${Oh[0].toFixed(2)}, 1.0 - fuv.y / ${Oh[1].toFixed(2)})).rgb;
	} else {
		base = texture2D(creamTex, vec2(fuv.x / ${Oh[0].toFixed(2)}, 1.0 - fuv.y / ${Oh[1].toFixed(2)})).rgb;
	}

	// ---------- the photograph, where it can be trusted ----------
	bool projectable = kind < 0.5 || (kind > 0.5 && kind < 1.5) || (kind > 2.5 && kind < 4.5);
	if (kind < 0.5) {
		// the photo only shows ground inside the alley, or beyond its corners
		bool inAlley = v_pos.x > ${(ti-.05).toFixed(3)} && v_pos.x < ${(rs+.05).toFixed(3)};
		projectable = inAlley || v_pos.z < ${ei.toFixed(3)};
		projectable = projectable && v_pos.z < ${(rr+4.5).toFixed(3)};
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
}`,p8=`
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
}`,v8=l0();ud.exports=t=>{let e=f8(),o={wrapS:"clamp",wrapT:"clamp",flipY:!1},r={wrapS:"mirror",wrapT:"clamp",flipY:!1},n={wrapS:"repeat",wrapT:"repeat",flipY:!1},a=Qs(t,"res/street/photo.jpg",o,[190,160,120]),s=Qs(t,"res/street/photo_night.jpg",o,[12,14,22]),i=Qs(t,"res/street/photo_mask.png",o,[255,255,255]),c=Qs(t,"res/street/facade_pink.jpg",r,[200,150,135]),h=Qs(t,"res/street/facade_yellow.jpg",r,[225,180,95]),l=Qs(t,"res/street/facade_cream.jpg",r,[215,200,175]),d=Qs(t,"res/street/cobbles.jpg",n,[95,95,95]),u=Date.now(),p=t({frag:d8,vert:p8,attributes:{position:e.position,normal:e.normal,attr:e.attr},elements:new Uint32Array(e.elements),uniforms:{photo:a,photoMask:i,pinkTex:c,yellowTex:h,creamTex:l,cobbleTex:d,photoNight:s,night:()=>v8.night,time:()=>(Date.now()-u)/1e3}});return function(){p()}};ud.exports.layout={MOUTH_Z:rr,PINK_X:ti,RIGHT_X:rs,PINK_H:vc,CREAM_H:Js,S:Zn}});var Eg=At((wA,Sg)=>{"use strict";var m8=l0().GLSL,{glassPanes:g8}=Va(),kg=S0();function x8(){let t=[],e=[],o=(r,n)=>{for(let a of r)t.push(a),e.push(n)};return o(g8(),[0,0,1]),o(kg.windowGlass(),[0,0,1]),o(kg.farDoorGlass(),[1,0,0]),{position:t,normal:e}}Sg.exports=t=>{let e=x8(),o=t({frag:`
		precision highp float;
		${m8}
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
		}`,attributes:{position:e.position,normal:e.normal},count:e.position.length,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o()}}});var Ug=At((_A,gd)=>{"use strict";var Rg=l0().GLSL,y8=Ds(),dd=zr(),{wallWithHoles:b8,C:is}=S0(),Pe=.28,et={westBack:14.4,westCol:15-Pe,eastCol:37.4+Pe,eastBack:41.8,south:is.z1+.7,northCol:is.z1+.7+16,northBack:is.z1+.7+19,cx:(15+37.4)/2,cz:(is.z1+.7+is.z1+.7+16-Pe)/2},Vo={x0:et.westCol+Pe,x1:et.eastCol-Pe,z0:et.south,z1:et.northCol-Pe},N0=3.3,Bl=.92,cs=5.6,zg=6,Or=11.9,ss=9.6,Ao={x0:et.cx-2.9,x1:et.cx+2.9,top:14.4},Fh=7,Og=4,vd=(et.eastCol-et.westCol)/Fh,w8=(et.northCol-et.south)/Og,Cg=3,Wl=.26,ai=1.4,ni=1.1,Ph=3,da=(()=>{let t=[.3,.82,-.49],e=Math.hypot(...t);return t.map(o=>o/e)})(),ge={GROUND:0,BRICK:1,STONE:2,MARBLE:3,HEDGE:4,POT:5,ROOF:6,SHUTTER:7,PANE:8,PLASTER:9,BARK:10,IRON:11,SKY:12,LEAD:13,FARBRICK:14,DARK:15,SOIL:16},pa=[],Pg=(t,e,o)=>[et.cx+t,e,et.cz+o],$h=Pg(-5.9,0,3.4),ls=.85,as={c:[$h[0],4.6*ls+.5,$h[2]],r:[5*ls,3.6*ls,4.5*ls]},$g=[{d:[0,4.4,0],r:[3.9,2.6,3.6],n:230},{d:[-2.7,4,-1.2],r:[2.6,2.1,2.4],n:105},{d:[2.7,4.5,-1.6],r:[2.5,2.2,2.3],n:105},{d:[.8,6.9,.8],r:[2.6,2,2.5],n:105},{d:[-1.6,6.1,2],r:[2.2,1.9,2],n:80},{d:[2.3,3.4,1.8],r:[2,1.5,1.9],n:60}].map(t=>({c:[$h[0]+t.d[0]*ls,t.d[1]*ls+.5,$h[2]+t.d[2]*ls],r:t.r.map(e=>e*ls),n:t.n}));for(let t of $g)pa.push({...t,cell:0,leaf:[.5,.7,.46],bloom:[1,1,1],size:[.95,1.35],magnolia:1,shadow:1});var _8=[3.6,6.3,9];for(let t of _8){let e=8.6+t%1.7*.6;pa.push({c:Pg(t,e/2+.5,5.2),r:[.9,e/2,.9],cell:1,leaf:[.5,.64,.5],bloom:[1,1,1],n:180,size:[.72,.98],spindle:1,shadow:1})}var M8=[{d:[-8.4,-4],bloom:[1,.62,.78]},{d:[-3.6,-4.6],bloom:[1,.98,.94]},{d:[3.8,-4.3],bloom:[1,.98,.94]},{d:[8.5,-4],bloom:[1,.58,.72]}].map(t=>({x:et.cx+t.d[0],z:et.cz+t.d[1],bloom:t.bloom}));for(let t of M8)pa.push({c:[t.x,.95,t.z],r:[1.25,.95,1.1],cell:3,leaf:[.7,.86,.58],bloom:t.bloom,n:80,size:[.55,.8],shadow:1});var md=[45,135,225,315].map(t=>{let e=t*Math.PI/180;return[et.cx+Math.cos(e)*2.3,et.cz+Math.sin(e)*2.3]});for(let[t,e]of md)pa.push({c:[t,1.85,e],r:[.62,.55,.62],cell:3,leaf:[.78,.95,.55],bloom:[1.25,1,.25],n:36,size:[.32,.42],shadow:1});var Ig=[];{let t=(o,r,n,a,s,i)=>{let c=Math.hypot(n-o,a-r),h=Math.floor(c/.9);for(let l=0;l<=h;l++){let d=l/h,u=o+(n-o)*d,p=r+(a-r)*d;s!==void 0&&Math.abs((n!==o?u:p)-s)<i||Ig.push([u,p])}};t(Vo.x0+.45,Vo.z0+1.2,Vo.x0+.45,Vo.z1-.45,et.cz,1),t(Vo.x1-.45,Vo.z0+1.2,Vo.x1-.45,Vo.z1-.45,et.cz,1),t(Vo.x0+.45,Vo.z1-.45,Vo.x1-.45,Vo.z1-.45,et.cx,1.9)}var k8=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],Ih=t=>{let e=Math.hypot(t[0],t[1],t[2])||1;return[t[0]/e,t[1]/e,t[2]/e]};function gc(t,e,o,r,n,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),h=t.vert(r,a,s),l=t.vert(n,a,s);t.tri(i,c,h),t.tri(i,h,l)}function Jn(t,e,o,r,n,a,s,i){t.box(Math.min(e,n),Math.min(o,a),Math.min(r,s),Math.max(e,n),Math.max(o,a),Math.max(r,s),[i,0,0])}function S8(t,e,o){return{vert:(r,n,a)=>t.vert(e(r),o(n),a),tri:t.tri}}var E8={north:[t=>[t[0],t[1],et.northCol-t[2]],t=>[t[0],t[1],-t[2]]],west:[t=>[et.westCol+t[2],t[1],t[0]],t=>[t[2],t[1],t[0]]],east:[t=>[et.eastCol-t[2],t[1],t[0]],t=>[-t[2],t[1],t[0]]]};function qg(t,e,o,r,n){let a=[];for(let s=0;s<o;s++){let i=t+s*e+(s===0?r:.02),c=t+(s+1)*e-(s===o-1?n:.02);a.push([i,c,t+(s+.5)*e])}return a}var z8=qg(et.westCol,vd,Fh,Pe+Wl,Pe+Wl),Ag=qg(et.south,w8,Og,.32,Pe+Wl),mc=[et.cx-32.35,et.northCol-77],A8=Array.from({length:Fh-1},(t,e)=>et.westCol+(e+1)*vd),Dg=t=>(t[1]-t[0])/2-.2,jl=t=>(t[0]+t[1])/2;function T8(t,e){let o=jl(t),r=Dg(t);return{u0:t[0],u1:t[1],bottom:e?0:Bl,head:n=>{let a=Math.abs(n-o);return a<r?N0+Math.sqrt(r*r-a*a):N0},step:.05}}function L8(t,e,o){return{u0:t-o,u1:t+o,bot:r=>e-Math.sqrt(Math.max(0,o*o-(r-t)*(r-t))),head:r=>e+Math.sqrt(Math.max(0,o*o-(r-t)*(r-t))),step:.04,mat:[ge.STONE,0,0]}}function N8(t,e,o,r){return{u0:t-e/2,u1:t+e/2,bottom:o,head:()=>r,step:.5,mat:[ge.STONE,0,0]}}function Tg(t,e,o){let[r,n]=E8[e],a=S8(t,r,n),s=[];o.arches.forEach((l,d)=>s.push(T8(l,d===o.open)));let i=[];for(let l of o.bays||o.arches){let d=jl(l);o.oculi&&s.push(L8(d,6.85,.3)),i.push({c:d,y0:o.win[0],y1:o.win[1],w:1.05})}for(let l of o.extraWindows||[])i.push(l);for(let l of i)s.push(N8(l.c,l.w,l.y0,l.y1));for(let l of o.extraHoles||[])s.push(l);b8(a,{u0:o.u0,u1:o.u1,w0:-Pe,w1:Pe,top:o.top,holes:s,mat:[ge.BRICK,0,0],revealMat:[ge.BRICK,0,0],noEnds:o.noEnds,cuts:o.cuts,topStep:.25});let c=(l,d,u,p,f,v,m)=>{let g=r([l,d,u]),x=r([p,f,v]);Jn(t,g[0],g[1],g[2],x[0],x[1],x[2],m)},h=(l,d,u,p,f,v)=>gc(a,l,d,u,p,f,[v,0,0]);for(let l of o.arches){let d=jl(l),u=Dg(l),p=28;for(let f of[Pe,-Pe]){let v=f>0?1:-1,m=f+v*.025;for(let g=0;g<p;g++){let x=Math.PI*g/p,y=Math.PI*(g+1)/p,w=(q,W)=>[d+Math.cos(q)*W,N0+Math.sin(q)*W],M=w(x,u),_=w(y,u),S=w(x,u+.26),R=w(y,u+.26);h([M[0],M[1],m],[_[0],_[1],m],[R[0],R[1],m],[S[0],S[1],m],[0,0,v],ge.STONE);let T=Math.cos((x+y)/2),H=Math.sin((x+y)/2);h([S[0],S[1],f],[R[0],R[1],f],[R[0],R[1],m],[S[0],S[1],m],[T,H,0],ge.STONE)}}}if(o.arches.forEach((l,d)=>{d!==o.open&&c(l[0]-.02,Bl,-Pe-.05,l[1]+.02,Bl+.09,Pe+.05,ge.STONE)}),c(o.u0,zg,-Pe,o.u1,zg+.18,Pe+.09,ge.STONE),c(o.u0,o.win[0]-.12,Pe-.01,o.u1,o.win[0],Pe+.06,ge.STONE),o.cornice)for(let[l,d,u]of o.cornice)c(l,u-.22,Pe-.01,d,u,Pe+.16,ge.STONE),c(l,u,Pe-.01,d,u+.16,Pe+.42,ge.STONE);for(let{c:l,y0:d,y1:u,w:p,door:f}of i){let v=p/2;if(h([l-v-.01,d,.06],[l+v+.01,d,.06],[l+v+.01,u,.06],[l-v-.01,u,.06],[0,0,1],f?ge.DARK:ge.PANE),f){c(l-v-.16,0,Pe-.01,l-v,u+.16,Pe+.07,ge.STONE),c(l+v,0,Pe-.01,l+v+.16,u+.16,Pe+.07,ge.STONE),c(l-v-.16,u,Pe-.01,l+v+.16,u+.2,Pe+.09,ge.STONE),c(l-v,0,.07,l+v,u-.02,.12,ge.SHUTTER),c(l-.012,0,.12,l+.012,u-.02,.14,ge.DARK);continue}for(let m of[-1,1]){let g=l+m*v;c(g+m*.02,d+.02,Pe+.02,g+m*(v+.025),u-.02,Pe+.06,ge.SHUTTER)}c(l-v-.09,u,Pe-.01,l+v+.09,u+.16,Pe+.05,ge.STONE),c(l-v-.09,d-.1,Pe-.01,l+v+.09,d,Pe+.09,ge.STONE),c(l-.015,d,.06,l+.015,u,.09,ge.SHUTTER),c(l-v,(d+u)/2-.015,.06,l+v,(d+u)/2+.015,.09,ge.SHUTTER)}if(o.oculi)for(let l of o.bays||o.arches){let d=jl(l);h([d-.31,6.54,0],[d+.31,6.54,0],[d+.31,7.16,0],[d-.31,7.16,0],[0,0,1],ge.DARK)}for(let l of o.cols){let d=Bl+.09,u=r([l,0,0]);Jn(t,u[0]-.24,d,u[2]-.24,u[0]+.24,d+.12,u[2]+.24,ge.MARBLE),t.lathe([[.23,d+.12,1],[.24,d+.17],[.2,d+.24],[.215,d+.28],[.17,d+.34,1],[.165,d+.6],[.155,N0-.5],[.15,N0-.38,1],[.175,N0-.34,1],[.17,N0-.3],[.2,N0-.22],[.27,N0-.15],[.29,N0-.12,1]],u[0],u[2],18,{mat:()=>[ge.MARBLE,0,0]}),Jn(t,u[0]-.29,N0-.12,u[2]-.29,u[0]+.29,N0+.01,u[2]+.29,ge.STONE)}o.walk&&o.walk(t)}function R8(t){let e=[-1,0,1].map(n=>{let a=et.cx+n*1.7;return{u0:a-.6,u1:a+.6,bottom:11,head:s=>12.9+Math.sqrt(Math.max(0,.36-(s-a)*(s-a))),step:.04,mat:[ge.STONE,0,0]}});Tg(t,"north",{u0:et.westCol-Pe,u1:et.eastCol+Pe,top:n=>n>Ao.x0+1e-6&&n<Ao.x1-1e-6?Ao.top:Or,cuts:[Ao.x0,Ao.x0+1e-5,Ao.x1-1e-5,Ao.x1],arches:z8,open:Cg,cols:A8,oculi:!0,win:[8,9.9],extraHoles:e,cornice:[[et.westCol-Pe-3.3,Ao.x0,Or],[Ao.x1,et.eastCol+Pe+3.3,Or],[Ao.x0-.2,Ao.x1+.2,Ao.top]],walk:n=>{Jn(n,Vo.x0,cs,et.northCol+Pe,Vo.x1,cs+.2,et.northBack,ge.PLASTER),Jn(n,Vo.x0,0,et.northBack,Vo.x1,cs,et.northBack+.3,ge.PLASTER);for(let a of[et.cx-7.2,et.cx,et.cx+7.2])gc(n,[a-.8,0,et.northBack-.01],[a+.8,0,et.northBack-.01],[a+.8,2.9,et.northBack-.01],[a-.8,2.9,et.northBack-.01],[0,0,-1],[ge.DARK,0,0]),Jn(n,a-.98,0,et.northBack-.06,a+.98,3.12,et.northBack,ge.STONE),gc(n,[a-.8,0,et.northBack-.07],[a+.8,0,et.northBack-.07],[a+.8,2.9,et.northBack-.07],[a-.8,2.9,et.northBack-.07],[0,0,-1],[ge.DARK,0,0])}}),gc(t,[Ao.x0,11,et.northCol+.2],[Ao.x1,11,et.northCol+.2],[Ao.x1,13.6,et.northCol+.2],[Ao.x0,13.6,et.northCol+.2],[0,0,-1],[ge.DARK,0,0]),Jn(t,Ao.x0+.3,10.88,et.northCol-Pe-.06,Ao.x1-.3,11,et.northCol-Pe+.1,ge.STONE),Jn(t,et.westBack,cs+.2,et.northBack,et.eastBack,Or,et.northBack+3.4,ge.BRICK),Jn(t,et.westBack,ss,et.northCol-Pe,et.westCol-Pe,Or,et.northCol+Pe,ge.BRICK),Jn(t,et.eastCol+Pe,ss,et.northCol-Pe,et.eastBack,Or,et.northCol+Pe,ge.BRICK),Jn(t,et.westBack,cs+.2,et.northCol+Pe+.12,et.eastBack,Or,et.northBack,ge.BRICK),Hl(t,[et.westBack-.5,Or+.16,et.northCol-Pe-.42],[Ao.x0-et.westBack+.5,0,0],[0,2.6,4.4],ge.ROOF),Hl(t,[Ao.x1,Or+.16,et.northCol-Pe-.42],[et.eastBack+.5-Ao.x1,0,0],[0,2.6,4.4],ge.ROOF),Hl(t,[Ao.x0-.3,Ao.top+.16,et.northCol-Pe-.42],[Ao.x1-Ao.x0+.6,0,0],[0,1.4,3],ge.ROOF),Lg(t,[Ao.x0-.3,Ao.top+.16,et.northCol-Pe-.42],[Ao.x0-.3,Ao.top+1.56,et.northCol-Pe+2.58],[Ao.x0-.3,Ao.top+.16,et.northCol-Pe+2.58],[-1,0,0],ge.BRICK),Lg(t,[Ao.x1+.3,Ao.top+.16,et.northCol-Pe-.42],[Ao.x1+.3,Ao.top+1.56,et.northCol-Pe+2.58],[Ao.x1+.3,Ao.top+.16,et.northCol-Pe+2.58],[1,0,0],ge.BRICK),Jn(t,Ao.x0,Or,et.northCol+Pe,Ao.x1,Ao.top,et.northCol+2.6,ge.BRICK);for(let[n,a]of[[et.cx-9.8,et.northBack+.6],[et.cx+9.4,et.northBack+.4],[et.cx-4.6,et.northBack+1]])Jn(t,n-.4,12.5,a-.4,n+.4,15.4,a+.4,ge.BRICK),Jn(t,n-.52,15.4,a-.52,n+.52,15.62,a+.52,ge.STONE);let o=(n,a,s)=>{let i=n==="west"?-1:1,c=[];Ag.forEach((d,u)=>{let p=jl(d);u===1?c.push({c:p,y0:0,y1:2.9,w:1.4,door:!0}):c.push({c:p,y0:1,y1:2.75,w:1.05}),c.push({c:p,y0:3.85,y1:5.45,w:1.05})}),Tg(t,n,{u0:et.south,u1:et.northCol-Pe,top:()=>ss,arches:[],bays:Ag,cols:[],win:[7.45,8.85],extraWindows:c,noEnds:!0,cornice:[[et.south,et.northCol-Pe,ss]]}),Jn(t,a,0,et.south,s+i*(Pe+.12),ss,et.northBack+.3,ge.BRICK);let h=s-i*Pe;Jn(t,h,0,et.south,h-i*.06,.55,et.northCol-Pe,ge.STONE);let l=s-i*(Pe+.42);Hl(t,[l,ss+.16,et.south],[0,0,et.northCol-Pe-et.south],[a-l+i*.4,1.9,0],ge.ROOF)};o("west",et.westBack,et.westCol),o("east",et.eastBack,et.eastCol);let r=is.x1+.7;Jn(t,13.65,7.4,et.south-.02,r,7.62,et.south+.14,ge.STONE),Jn(t,13.65,10.4,et.south-.02,r,10.6,et.south+.38,ge.STONE),Hl(t,[13.65,10.6,et.south+.38],[r-13.65,0,0],[0,2.2,-5],ge.ROOF)}function Lg(t,e,o,r,n,a){let s=[a,0,0];t.tri(t.vert(e,n,s),t.vert(o,n,s),t.vert(r,n,s))}function Hl(t,e,o,r,n){let a=Ih([o[1]*r[2]-o[2]*r[1],o[2]*r[0]-o[0]*r[2],o[0]*r[1]-o[1]*r[0]]),s=a[1]<0?a.map(h=>-h):a,i=(h,l)=>[e[0]+o[0]*h+r[0]*l,e[1]+o[1]*h+r[1]*l,e[2]+o[2]*h+r[2]*l];gc(t,i(0,0),i(1,0),i(1,1),i(0,1),s,[n,0,0]);let c=.08;gc(t,i(0,0),i(1,0),[i(1,0)[0],i(1,0)[1]-c,i(1,0)[2]],[i(0,0)[0],i(0,0)[1]-c,i(0,0)[2]],Ih([-r[0],0,-r[2]]),[n,0,0])}function O8(t){let e=et.westBack,o=et.eastBack,r=et.south,n=et.northBack,a=36,s=22,i=[];for(let c=0;c<=a;c++){i.push([]);for(let h=0;h<=s;h++){let l=[e+(o-e)*c/a,0,r+(n-r)*h/s];i[c].push(t.vert(l,[0,1,0],[ge.GROUND,0,0]))}}for(let c=0;c<a;c++)for(let h=0;h<s;h++)t.tri(i[c][h],i[c+1][h],i[c+1][h+1]),t.tri(i[c][h],i[c+1][h+1],i[c][h+1])}var Ul=.46,ri=.58,oi=[[-.5,0],[-.52,.45],[-.46,.78],[-.3,.95],[0,1],[.3,.95],[.46,.78],[.52,.45],[.5,0]];function C8(t,e,o){let r=ni+o,n=(t>0?Vo.x1-et.cx:et.cx-Vo.x0)-ai-o,a=ni+o,s=(e>0?Vo.z1-et.cz:et.cz-Vo.z0)-ai-o,i=Ph+o,c=Math.sqrt(i*i-r*r),h=Math.sqrt(i*i-a*a),l=[[r,c],[r,s],[n,s],[n,a],[h,a]],d=Math.atan2(a,h),u=Math.atan2(c,r);for(let p=1;p<10;p++){let f=d+(u-d)*p/10;l.push([Math.cos(f)*i,Math.sin(f)*i])}return l.map(([p,f])=>[et.cx+t*p,et.cz+e*f])}function P8(t,e,o){let r=o[0]-e[0],n=o[1]-e[1],a=Math.hypot(r,n),s=r/a,i=n/a,c=-i,h=s,l=Ul*.5,d=-l,u=a+l,p=[],f=Math.max(1,Math.ceil((u-d)/1));for(let v=0;v<=f;v++){let m=d+(u-d)*v/f,g=[];for(let x=0;x<oi.length;x++){let[y,w]=oi[x],M=Math.min(oi.length-2,x),_=oi[Math.max(0,x-1)],S=oi[Math.min(oi.length-1,x+1)],R=(S[0]-_[0])*Ul,H=(S[1]-_[1])*ri,q=-R,W=Math.hypot(H,q)||1,F=[e[0]+s*m+c*y*Ul,w*ri,e[1]+i*m+h*y*Ul],j=[c*(-H/W),-q/W,h*(-H/W)];g.push(t.vert(F,j[1]<-.2?[c*Math.sign(y),.3,h*Math.sign(y)]:j,[ge.HEDGE,0,0]))}p.push(g)}for(let v=0;v<f;v++)for(let m=0;m<oi.length-1;m++)t.tri(p[v][m],p[v+1][m],p[v+1][m+1]),t.tri(p[v][m],p[v+1][m+1],p[v][m+1]);for(let[v,m]of[[0,-1],[f,1]]){let g=p[v],x=t.vert([e[0]+s*(v?u:d),ri*.5,e[1]+i*(v?u:d)],[s*m,0,i*m],[ge.HEDGE,0,0]);for(let y=0;y<g.length-1;y++)t.tri(x,g[y],g[y+1])}}function $8(t){for(let e of[-1,1])for(let o of[-1,1]){let r=C8(e,o,.3);for(let n=0;n<r.length;n++)P8(t,r[n],r[(n+1)%r.length])}}function I8(t){let e=et.cx,o=et.cz,r=()=>[ge.STONE,0,0];t.lathe([[1.45,0,1],[1.45,.14,1],[1.12,.14,1],[1.12,.3,1],[0,.3]],e,o,8,{mat:r}),t.lathe([[.76,.3,1],[.8,.38,1],[.74,.44],[.76,.7],[.82,.9],[.8,1.02,1],[.88,1.06,1],[.88,1.18,1],[.6,1.18,1],[.6,.98]],e,o,24,{mat:r}),t.lathe([[.6,.98,1],[0,.98]],e,o,16,{mat:()=>[ge.DARK,0,0]});let n={mat:()=>[ge.IRON,0,0]};t.tube([[e-.72,1.1,o],[e-.72,1.9,o],[e-.7,2.3,o]],()=>.035,8,6,n),t.tube([[e+.72,1.1,o],[e+.72,1.9,o],[e+.7,2.3,o]],()=>.035,8,6,n);let a=[];for(let s=0;s<=10;s++){let i=Math.PI*s/10;a.push([e-Math.cos(i)*.7,2.3+Math.sin(i)*.45,o])}t.tube(a,()=>.03,20,6,n),t.tube([[e-.45,2.25,o],[e,2.38,o],[e+.45,2.25,o]],()=>.02,8,5,n),t.ellipsoid([e,2.32,o],[.03,.13,.13],6,10,n);for(let s of[-1,1]){let i=[];for(let c=0;c<=12;c++){let h=c/12*Math.PI*1.6,l=.16*(1-c/16);i.push([e+s*(.72-.18+Math.cos(h)*l*s*-1+0),1.95+Math.sin(h)*l,o])}t.tube(i,()=>.016,16,5,n)}}function q8(t){for(let[e,o]of md)t.lathe([[.26,0,1],[.3,.06],[.36,.42],[.38,.5,1],[.44,.52,1],[.44,.64,1],[.38,.66,1],[.37,.6]],e,o,20,{mat:()=>[ge.POT,0,0]}),t.lathe([[.37,.6,1],[0,.6]],e,o,12,{mat:()=>[ge.SOIL,0,0]}),t.tube([[e,.6,o],[e+.02,1,o-.01],[e-.01,1.45,o+.02]],r=>.045-r*.02,6,6,{mat:()=>[ge.BARK,0,0]})}function D8(t){let[e,,o]=as.c,r=Gg(7),n=[[-1.8,.4,3.6],[1.6,-.9,3.9],[.4,1.9,3.4],[-.6,-1.7,4.2],[2.1,1.2,3.2]];for(let[a,s,i]of n){let c=[[e+a*.05,0,o+s*.05],[e+a*.25,i*.35,o+s*.25],[e+a*.6,i*.7,o+s*.6],[e+a,i,o+s],[e+a*1.35+(r()-.5),i+1.4,o+s*1.35+(r()-.5)]];t.tube(c,h=>.2*(1-h*.75),14,9,{mat:()=>[ge.BARK,0,0]});for(let h=0;h<2;h++){let l=.55+h*.2,d=[e+a*l,i*l,o+s*l],u=r()*Math.PI*2;t.tube([d,[d[0]+Math.cos(u)*1.3,d[1]+.9,d[2]+Math.sin(u)*1.3],[d[0]+Math.cos(u)*2.3,d[1]+1.4+r(),d[2]+Math.sin(u)*2.3]],p=>.08*(1-p*.7),8,6,{mat:()=>[ge.BARK,0,0]})}}for(let a of pa.filter(s=>s.spindle))t.tube([[a.c[0],0,a.c[2]],[a.c[0],1.4,a.c[2]]],()=>.12,3,7,{mat:()=>[ge.BARK,0,0]})}function F8(t){let e=()=>[ge.FARBRICK,0,0],o=()=>[ge.LEAD,0,0],r=(a,s,i,c,h,l)=>{t.lathe([[i+.3,20,1],[i+.3,c-1.2,1],[i+.8,c-.9,1],[i+.8,c,1],[i,c,1]],a,s,28,{mat:e});let d=[];for(let p=0;p<=12;p++){let f=p/12*Math.PI/2,v=Math.cos(f)*i,m=Math.sin(f)*h;l&&(v*=1-.18*Math.sin(f*2)),d.push([Math.max(v,i*.12),c+m])}t.lathe(d,a,s,28,{mat:o});let u=c+h;t.lathe([[i*.13,u-.2,1],[i*.13,u+3,1],[i*.18,u+3.2,1],[i*.02,u+6.4]],a,s,10,{mat:o})};Jn(t,14,0,104,52,26,150,ge.FARBRICK),t.lathe([[3,26],[.1,32]],33,108,4,{mat:e}),r(26,124,7.2,33,9.5,!0),r(40.5,116,6,31,8,!0),r(16.5,117,5.5,30,7.2,!0),t.lathe([[6.4,20,1],[6.4,34,1],[6.9,34.4,1],[6,34.4,1],[.6,46.5,1],[.15,50]],33,132,24,{mat:o});let n=(a,s,i)=>{Jn(t,a-1.8,0,s-1.8,a+1.8,i,s+1.8,ge.FARBRICK),t.lathe([[1.9,i,1],[1.6,i+3.5,1],[1.2,i+3.5,1],[1.2,i+6,1],[.9,i+6.2,1],[.05,i+13]],a,s,8,{mat:e})};n(20.5,109,36),n(46.5,112,38)}function G8(t){let o=[et.cx,0,et.cz],r=24,n=10,a=[];for(let s=0;s<=r;s++){a.push([]);let i=-Math.PI*.62+Math.PI*1.24*s/r;for(let c=0;c<=n;c++){let h=Math.PI/2*(c/n)-.05,l=[Math.sin(i)*Math.cos(h),Math.sin(h),Math.cos(i)*Math.cos(h)],d=[o[0]+l[0]*420,o[1]+l[1]*420,o[2]+l[2]*420];a[s].push(t.vert(d,[-l[0],-l[1],-l[2]],[ge.SKY,0,0]))}}for(let s=0;s<r;s++)for(let i=0;i<n;i++)t.tri(a[s][i],a[s+1][i],a[s+1][i+1]),t.tri(a[s][i],a[s+1][i+1],a[s][i+1])}function H8(){let t=[],e=[],o=[],r=[],n=y8.createBuilder(t,e,o,r);return O8(n),R8(n),$8(n),I8(n),q8(n),D8(n),n.save(),n.translate(mc[0],0,mc[1]),F8(n),n.restore(),G8(n),{position:t,normal:e,elements:o,attr:r}}var Fg=[[[13.65,0,is.z0-.7],[is.x1+.7,10.6,et.south]],[[et.westBack,cs,et.northCol-Pe],[et.eastBack,Or,et.northBack+3.4]],[[Ao.x0,Or,et.northCol-Pe],[Ao.x1,Ao.top,et.northCol+2.6]],[[et.westBack,0,et.south],[et.westCol+Pe,ss,et.northBack+.3]],[[et.eastCol-Pe,0,et.south],[et.eastBack,ss,et.northBack+.3]],[[14+mc[0],0,104+mc[1]],[52+mc[0],26,150+mc[1]]]];function U8(t,e,o,r){let n=.001,a=1e9;for(let s=0;s<3;s++){if(Math.abs(e[s])<1e-9){if(t[s]<o[s]||t[s]>r[s])return!1;continue}let i=(o[s]-t[s])/e[s],c=(r[s]-t[s])/e[s];if(i>c&&([i,c]=[c,i]),n=Math.max(n,i),a=Math.min(a,c),n>a)return!1}return!0}function Ch(t,e,o,r){let n=[(t[0]-o[0])/r[0],(t[1]-o[1])/r[1],(t[2]-o[2])/r[2]],a=[e[0]/r[0],e[1]/r[1],e[2]/r[2]],s=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],i=n[0]*a[0]+n[1]*a[1]+n[2]*a[2],c=n[0]*n[0]+n[1]*n[1]+n[2]*n[2]-1,h=i*i-s*c;if(h<=0)return 0;let l=Math.sqrt(h),d=Math.max(0,(-i-l)/s),u=(-i+l)/s;return Math.max(0,u-d)}function pd(t){for(let[e,o]of Fg)if(U8(t,da,e,o))return 0;return 1}function Gg(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let o=e;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function B8(){let t=[],e=[],o=[],r=[],n=[],a=[],s=[],i=Gg(21),c=(f,v,m,g,x,y,w)=>{let M=t.length/3;for(let[_,S]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.push(...f),e.push(_,S),o.push(v,m,g),r.push(...x),n.push(...y),a.push(...w);s.push(M,M+1,M+2,M,M+2,M+3)},h=(f,v)=>{let m=1;for(let g of pa){if(g===v||!g.shadow)continue;let x=Ch(f,da,g.c,g.r);x>0&&(m*=Math.exp(-x*.9))}return m},l=pa.map(f=>({...f,pts:null}));for(let f of l)for(let v=0;v<f.n;v++){let m;do m=[i()*2-1,i()*2-1,i()*2-1];while(m[0]*m[0]+m[1]*m[1]+m[2]*m[2]>1);let g=Math.hypot(m[0],m[1],m[2])||1,x=Math.pow(i(),.35)*.98,y=[m[0]/g*x,m[1]/g*x,m[2]/g*x];if(f.spindle){let F=y[1],j=Math.sqrt(Math.max(.02,1-F*F))*(F>0?1-F*.55:1+F*.25),pt=Math.hypot(y[0],y[2])||1,Ht=j*Math.min(1,pt*1.4);y=[y[0]/pt*Ht,F,y[2]/pt*Ht]}f.magnolia&&y[1]<-.55&&(y[1]=-.55+(y[1]+.55)*.35);let w=[f.c[0]+y[0]*f.r[0],f.c[1]+y[1]*f.r[1],f.c[2]+y[2]*f.r[2]],M,_;if(f.magnolia){let F=0;for(let Ht of $g)F=Math.max(F,Ch(w,da,Ht.c,Ht.r));M=Math.exp(-F*1.1);let j=1;for(let Ht of pa)if(!Ht.magnolia&&Ht.shadow){let Nt=Ch(w,da,Ht.c,Ht.r);Nt>0&&(j*=Math.exp(-Nt*.9))}M*=pd(w)*j;let pt=k8(w,as.c);_=Ih([pt[0]/as.r[0]+y[0]*.5,pt[1]/as.r[1]+y[1]*.5,pt[2]/as.r[2]+y[2]*.5]),x=Math.min(1,Math.hypot(pt[0]/as.r[0],pt[1]/as.r[1],pt[2]/as.r[2])*.6+x*.4)}else{let F=Ch(w,da,f.c,f.r);M=Math.exp(-F*(f.spindle?2.2:1.25)),M*=pd(w)*h(w,pa[l.indexOf(f)]),_=Ih([y[0]/f.r[0],y[1]/f.r[1],y[2]/f.r[2]])}let S=Math.max(0,_[0]*da[0]+_[1]*da[1]+_[2]*da[2]),R=.25+.75*Math.pow(x,1.5)*(.65+.35*(_[1]*.5+.5)),T=f.size[0]+(f.size[1]-f.size[0])*i(),H=.85+i()*.3,q=f.leaf.map(F=>F*H),W=f.cell;f.cell===3&&i()<.35&&(W=2),c(w,T,W,i()*Math.PI*2,[M,R,.35+.65*S],q,f.bloom)}for(let[f,v]of Ig){let m=i()<.5;for(let g=0;g<3;g++){let x=[f+(i()-.5)*.7,.28+i()*.22,v+(i()-.5)*.5],y=pd(x)*h(x,null);c(x,.32+i()*.12,i()<.7?3:2,i()*6.28,[y,.6+i()*.3,.8],[.75,.9,.6],m?[1,.55,.75]:[.85,.8,1.15])}}let d=s.length/6,u=Array.from({length:d},(f,v)=>v);for(let f=d-1;f>0;f--){let v=Math.floor(i()*(f+1));[u[f],u[v]]=[u[v],u[f]]}let p=[];for(let f of u)for(let v=0;v<6;v++)p.push(s[f*6+v]);return{center:t,corner:e,par:o,light:r,tint:n,bloom:a,elements:p}}var Le=t=>t.toFixed(4),Vl=t=>`vec3(${Le(t[0])}, ${Le(t[1])}, ${Le(t[2])})`,Hg=`
const vec3 SUN = ${Vl(da)};
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
`,j8=Fg.map(([t,e])=>`if (hitBox(ro, SUN, ${Vl(t)}, ${Vl(e)})) return 0.0;`).join(`
	`),W8=pa.filter(t=>t.shadow).map(t=>`tr *= crownShade(ro, ${Vl(t.c)}, ${Vl(t.r)}, ${t.spindle?"1.8":"1.0"});`).join(`
	`),V8=(t,e,o,r,n,a,s,i,c)=>`
	{
		float t = (${Le(e)} - ro.${t}) / SUN.${t};
		if (t > 0.0) {
			vec3 q = ro + SUN * t;
			float u = q.${t==="z"?"x":"z"};
			if (q.y < ${Le(cs)} && u > ${Le(o-Pe)} && u < ${Le(o+r*n+Pe)}) {
				float k = floor((u - ${Le(o)}) / ${Le(r)});
				float a = ${Le(o)} + k * ${Le(r)} + (k < 0.5 ? ${Le(a)} : 0.02);
				float b = ${Le(o)} + (k + 1.0) * ${Le(r)} - (k > ${Le(n-1.5)} ? ${Le(s)} : 0.02);
				float c = 0.5 * (a + b), r = 0.5 * (b - a) - 0.2;
				float d = abs(u - c);
				float sill = abs(k - ${Le(i)}) < 0.5 ? 0.0 : ${Le(Bl+.09)};
				bool hole = (q.y > sill && q.y < ${Le(N0)} && u > a && u < b && d < 0.5 * (b - a) - 0.17)
					|| (q.y >= ${Le(N0)} && d * d + (q.y - ${Le(N0)}) * (q.y - ${Le(N0)}) < r * r);
				if (!hole && ${c}) return 0.0;
			}
		}
	}`,qh=ni+.3,Dh=ni+.3,Xl=Ph+.3,Ng=Vo.x1-et.cx-ai-.3,X8=Vo.z1-et.cz-ai-.3,Y8=et.cz-Vo.z0-ai-.3,K8=Math.sqrt(Xl*Xl-qh*qh),Q8=Math.sqrt(Xl*Xl-Dh*Dh),Z8=[[et.cx,et.cz,.86,1.18],[et.cx,et.cz,1.25,.3],...md.map(([t,e])=>[t,e,.42,.65])].map(([t,e,o,r])=>`if (hitCyl(ro, vec2(${Le(t)}, ${Le(e)}), ${Le(o)}, ${Le(r)})) return 0.0;`).join(`
	`),J8=`
float segDist(vec2 p, vec2 a, vec2 b) {
	vec2 pa = p - a, ba = b - a;
	float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
	return length(pa - ba * h);
}

// distance to the nearest hedge line
float hedgeDist(vec2 xz) {
	vec2 q = abs(xz - vec2(${Le(et.cx)}, ${Le(et.cz)}));
	float b1 = xz.y > ${Le(et.cz)} ? ${Le(X8)} : ${Le(Y8)};
	vec2 A = vec2(${Le(qh)}, ${Le(K8)}), Bp = vec2(${Le(qh)}, b1), C = vec2(${Le(Ng)}, b1);
	vec2 D = vec2(${Le(Ng)}, ${Le(Dh)}), E = vec2(${Le(Q8)}, ${Le(Dh)});
	float d = min(min(segDist(q, A, Bp), segDist(q, Bp, C)), min(segDist(q, C, D), segDist(q, D, E)));
	float ang = atan(q.y, q.x);
	if (ang > atan(E.y, E.x) && ang < atan(A.y, A.x)) d = min(d, abs(length(q) - ${Le(Xl)}));
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
	${j8}
	${V8("z",et.northCol,et.westCol,vd,Fh,Pe+Wl,Pe+Wl,Cg,"ro.z > "+Le(et.northCol-Pe))}
	// on lighter settings only the buildings cast shadows
	if (gardenDetail < 0.5) return 1.0;
	${Z8}
	if (ro.y < ${Le(ri)} && ro.x > ${Le(Vo.x0)} && ro.x < ${Le(Vo.x1)}) {
		for (int i = 1; i <= 4; i++) {
			float t = float(i) / 4.0 * (${Le(ri)} - ro.y) / SUN.y;
			vec3 q = ro + SUN * t;
			float w = ${Le(Ul*.5)} * sqrt(max(0.0, 1.0 - pow(q.y / ${Le(ri)}, 4.0)));
			if (hedgeDist(q.xz) < w) return 0.0;
		}
	}
	float tr = 1.0;
	${W8}
	return tr;
}
`,tk=`
precision highp float;
${Rg}
varying vec3 v_pos, v_normal, v_attr, v_eye;
uniform float time, gardenDetail;
${Hg}
${J8}

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

	if (kind == ${ge.SKY}.0) {
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

	if (kind == ${ge.GROUND}.0) {
		bool yard = P.x > ${Le(Vo.x0)} && P.x < ${Le(Vo.x1)} && P.z < ${Le(Vo.z1)};
		if (!yard) {
			// stone slabs under the arcades
			vec2 g = P.xz / 0.62;
			vec2 fg = fract(g);
			float h = hash(floor(g));
			base = mix(vec3(0.66, 0.60, 0.52), vec3(0.76, 0.70, 0.62), h);
			base *= 1.0 - 0.25 * (step(fg.x, 0.03) + step(fg.y, 0.03)) * (1.0 - lod);
			spec = 0.15;
		} else {
			float ex = min(P.x - ${Le(Vo.x0)}, ${Le(Vo.x1)} - P.x);
			float ez = min(P.z - ${Le(Vo.z0)}, ${Le(Vo.z1)} - P.z);
			float edge = min(ex, ez);
			float dx = abs(P.x - ${Le(et.cx)}), dz = abs(P.z - ${Le(et.cz)});
			float rc = length(vec2(dx, dz));
			if (edge < ${Le(ai)}) {
				// brick path laid in rows, with a stone kerb
				vec2 q = ex < ez ? P.zx : P.xz;
				base = brick(q * vec2(1.0, 2.6), 0.4) * 0.9;
				if (abs(edge - ${Le(ai)}) < 0.08) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (rc < ${Le(Ph)}) {
				// brick in rings round the wellhead
				float ang = atan(P.z - ${Le(et.cz)}, P.x - ${Le(et.cx)});
				vec2 q = vec2(ang * rc, rc);
				base = brick(q * vec2(1.0, 2.6), 0.5) * 0.92;
				if (abs(rc - ${Le(Ph)}) < 0.1) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (dx < ${Le(ni)} || dz < ${Le(ni)}) {
				// pale gravel
				float g = noise(P.xz * 40.0) * 0.6 + noise(P.xz * 9.0) * 0.4;
				base = mix(vec3(0.66, 0.58, 0.46), vec3(0.86, 0.79, 0.66), mix(g, 0.5, lod));
				base *= 0.94 + 0.12 * noise(P.xz * 1.3);
				float e = min(${Le(ni)} - min(dx, dz), 1.0);
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
			ao *= 0.6 + 0.4 * smoothstep(0.85, 1.6, length(P.xz - vec2(${Le(et.cx)}, ${Le(et.cz)})));
		}
	} else if (kind == ${ge.BRICK}.0) {
		float pink = smoothstep(0.4, 0.6, noise(wq * 0.05 + 7.0));
		base = mix(brick(wq, 0.25 * pink), vec3(0.68, 0.46, 0.33), lod * 0.6);
		base *= 1.0 - 0.18 * smoothstep(0.0, 1.5, 1.6 - P.y) * noise(wq * 1.5);
		ao *= 0.78 + 0.22 * smoothstep(0.0, 1.2, P.y);
	} else if (kind == ${ge.STONE}.0) {
		float n = noise(wq * 3.0) * 0.5 + noise(wq * 0.7) * 0.5;
		base = mix(vec3(0.74, 0.70, 0.62), vec3(0.86, 0.83, 0.76), n);
		spec = 0.1;
	} else if (kind == ${ge.MARBLE}.0) {
		// red Verona marble
		float n = noise3(P * vec3(5.0, 1.5, 5.0)) * 0.6 + noise3(P * 14.0) * 0.4;
		base = mix(vec3(0.56, 0.32, 0.25), vec3(0.68, 0.42, 0.33), n);
		base = mix(base, vec3(0.80, 0.66, 0.56), smoothstep(0.66, 0.74, noise3(P * 9.0 + 3.0)) * 0.35);
		spec = 0.35;
	} else if (kind == ${ge.HEDGE}.0) {
		float n = noise3(P * 9.0) * 0.55 + noise3(P * 2.5) * 0.45;
		base = mix(vec3(0.05, 0.16, 0.04), vec3(0.22, 0.38, 0.10), n);
		ao *= 0.55 + 0.45 * smoothstep(0.0, ${Le(ri)}, P.y) * (0.6 + 0.4 * n);
		N = normalize(N + vec3(noise3(P * 13.0) - 0.5, 0.0, noise3(P * 13.0 + 5.0) - 0.5) * 0.9);
	} else if (kind == ${ge.POT}.0) {
		base = mix(vec3(0.66, 0.34, 0.20), vec3(0.75, 0.44, 0.28), noise(wq * 6.0));
	} else if (kind == ${ge.SOIL}.0) {
		base = vec3(0.20, 0.14, 0.09);
	} else if (kind == ${ge.ROOF}.0) {
		// rows of curved clay tiles
		float along = abs(N.x) > abs(N.z) ? P.z : P.x;
		float rib = abs(fract(along / 0.24) - 0.5) * 2.0;
		float h = hash(vec2(floor(along / 0.24), floor(P.y / 0.42)));
		base = mix(vec3(0.58, 0.30, 0.20), vec3(0.72, 0.44, 0.30), h);
		base = mix(base, vec3(0.45, 0.42, 0.36), smoothstep(0.55, 0.85, noise(P.xz * 0.6)) * 0.4);
		base *= mix(0.62 + 0.38 * (1.0 - rib * rib), 0.85, lod);
	} else if (kind == ${ge.SHUTTER}.0) {
		float slat = fract(P.y / 0.07);
		base = vec3(0.17, 0.30, 0.20) * (0.75 + 0.25 * smoothstep(0.1, 0.5, slat));
	} else if (kind == ${ge.PANE}.0) {
		vec3 R = reflect(-V, N);
		base = vec3(0.03, 0.035, 0.04);
		vec3 refl = skyColor(normalize(vec3(R.x, abs(R.y), R.z))) * 0.25;
		gl_FragColor = vec4(toNight(tonemap(base + refl * (0.4 + 0.6 * pow(1.0 - abs(dot(N, V)), 3.0))), 0.45), 1.0);
		return;
	} else if (kind == ${ge.PLASTER}.0) {
		base = mix(vec3(0.82, 0.76, 0.64), vec3(0.88, 0.83, 0.72), noise(wq * 1.3));
		// a darker dado on the back walls
		if (abs(N.y) < 0.5 && P.y < 1.1) base *= 0.82;
	} else if (kind == ${ge.BARK}.0) {
		base = mix(vec3(0.30, 0.27, 0.24), vec3(0.45, 0.42, 0.38), noise3(P * vec3(8.0, 2.0, 8.0)));
	} else if (kind == ${ge.IRON}.0) {
		base = vec3(0.07, 0.07, 0.07);
		spec = 0.4;
	} else if (kind == ${ge.LEAD}.0) {
		base = mix(vec3(0.30, 0.33, 0.35), vec3(0.40, 0.43, 0.45), noise(P.xy * 0.5));
		// ribs on the domes
		float a = atan(P.z - floor(P.z / 50.0) * 50.0, 1.0);
		base *= 0.9 + 0.1 * step(0.5, fract(a * 6.0));
		far = 1.0;
	} else if (kind == ${ge.FARBRICK}.0) {
		base = mix(vec3(0.66, 0.46, 0.34), vec3(0.74, 0.54, 0.40), noise(P.xy * 0.3));
		// a row of small arches under the eaves and some dark windows
		far = 1.0;
	} else if (kind == ${ge.DARK}.0) {
		base = vec3(0.025, 0.022, 0.02);
	}

	// ---------- light ----------

	// in the arcade walks the sky is mostly hidden
	bool walk = (P.x < ${Le(et.westCol)} || P.x > ${Le(et.eastCol)} || P.z > ${Le(et.northCol)}) && P.y < ${Le(cs+.05)} && P.z > ${Le(et.south-.1)} && P.z < ${Le(et.northBack+.5)};
	float skyVis = 0.55 + 0.45 * N.y;
	if (walk) {
		float depth = P.z > ${Le(et.northCol)} ? P.z - ${Le(et.northCol)} : (P.x < ${Le(et.westCol)} ? ${Le(et.westCol)} - P.x : P.x - ${Le(et.eastCol)});
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
}`,ok=`
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
}`,nk=`
precision highp float;
${Rg}
uniform sampler2D leaves;
varying vec2 v_uv;
varying vec3 v_light, v_tint, v_bloom, v_pos;
${Hg}
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
}`;function rk(t,e,o){let r=t.texture({data:[[o]],min:"linear",mag:"linear"});return fetch(e).then(n=>{if(!n.ok)throw new Error("Could not load "+e);return n.blob()}).then(n=>createImageBitmap(n,{premultiplyAlpha:"none"})).then(n=>r({data:n,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(n=>console.error(n)),r}gd.exports=t=>{let e=H8(),o=B8(),r=rk(t,"res/garden/foliage.webp",[0,0,0,0]),n=Date.now(),a=()=>dd.motion?window.__streetClock!==void 0?window.__streetClock:(Date.now()-n)/1e3:20,s=t({frag:tk,vert:ek,attributes:{position:e.position,normal:e.normal,attr:e.attr},elements:new Uint32Array(e.elements),uniforms:{time:a,gardenDetail:()=>dd.gardenDetail}}),i=t({frag:nk,vert:ok,attributes:{center:o.center,corner:o.corner,par:o.par,light:o.light,tint:o.tint,bloom:o.bloom},elements:new Uint32Array(o.elements),uniforms:{leaves:r,time:a},cull:{enable:!1},count:()=>Math.floor(o.elements.length*dd.leafShare/6)*6});return function(){s(),i()}};gd.exports.layout={G:et,YARD:Vo,SUN:da}});var Xg=At((MA,Vg)=>{"use strict";var ak=l0().GLSL,sk=Ds(),{C:Wg}=S0(),R0=Wg.x1+.35,wd=Wg.zc,xd=[R0-7.3,2,wd],Bg=5.2*Math.PI/180,jg=2100,ik=725,ck=1288,lk=1450,fk=2576,Ca=wd-3.2,Uh=wd+3.3,yd=R0+5,bd=R0+11.7,xc=3.9,Yl=R0+22.7,Gh=40;function hk(){let t=[],e=[],o=[],r=[],n=sk.createBuilder(t,e,o,r),a=(l,d,u,p,f,v)=>{let m=[];for(let g=0;g<=f;g++){m.push([]);for(let x=0;x<=v;x++){let y=[0,1,2].map(w=>l[w]+d[w]*g/f+u[w]*x/v);m[g].push(n.vert(y,p,[0,0,0]))}}for(let g=0;g<f;g++)for(let x=0;x<v;x++)n.tri(m[g][x],m[g+1][x],m[g+1][x+1]),n.tri(m[g][x],m[g+1][x+1],m[g][x+1])},s=Uh-Ca,i=.7;a([R0-i,0,Ca],[yd-R0+i,0,0],[0,0,s],[0,1,0],6,4);let c=bd-yd,h=Math.hypot(c,xc);return a([yd,0,Ca],[c,xc,0],[0,0,s],[-xc/h,c/h,0],6,4),a([bd,xc,Ca],[Yl-bd,0,0],[0,0,s],[0,1,0],6,4),a([R0-i,0,Ca],[Yl-R0+i,0,0],[0,Gh,0],[0,0,1],12,12),a([R0-i,0,Uh],[Yl-R0+i,0,0],[0,Gh,0],[0,0,-1],12,12),a([Yl,0,Ca],[0,Gh,0],[0,0,s],[-1,0,0],8,4),a([R0-i,Gh,Ca],[Yl-R0+i,0,0],[0,0,s],[0,-1,0],6,4),{position:t,normal:e,elements:o,attr:r}}var W0=t=>t.toFixed(5),Hh=[[R0+3.4,3.7,Ca+.01,1],[R0+8.6,4.1,Uh-.01,-1],[R0+14.8,xc+3.3,Ca+.01,1],[R0+19.6,xc+3.6,Uh-.01,-1]],uk=`
precision highp float;
${ak}
uniform sampler2D photo;
uniform float time;
varying vec3 v_pos;
varying vec3 v_normal;
const int NLAMP = ${Hh.length};
vec4 LAMP[NLAMP];

void main() {
	${Hh.map((t,e)=>`LAMP[${e}] = vec4(${W0(t[0])}, ${W0(t[1])}, ${W0(t[2])}, ${W0(t[3])});`).join(`
	`)}
	vec3 d = v_pos - vec3(${W0(xd[0])}, ${W0(xd[1])}, ${W0(xd[2])});
	float c = ${W0(Math.cos(Bg))}, s = ${W0(Math.sin(Bg))};
	float fw = d.x * c + d.y * s;
	float up = -d.x * s + d.y * c;
	fw = max(fw, 0.05);
	vec2 px = vec2(${W0(ik)} + ${W0(jg)} * d.z / fw, ${W0(ck)} - ${W0(jg)} * up / fw);
	vec2 uv = px / vec2(${W0(lk)}, ${W0(fk)});
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
}`,dk=`
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
}`;Vg.exports=t=>{let e=hk(),o=t.texture({data:[[[120,105,85]]],min:"linear",mag:"linear"});fetch("res/florence/photo.jpg").then(i=>{if(!i.ok)throw new Error("Could not load the Florence photo");return i.blob()}).then(i=>createImageBitmap(i)).then(i=>o({data:i,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(i=>console.error(i));let r=t({frag:uk,vert:dk,attributes:{position:e.position,normal:e.normal},elements:new Uint32Array(e.elements),uniforms:{photo:o},cull:{enable:!1}}),n={pos:[],nrm:[],k:[],idx:[]},a=(i,c,h)=>{let[l,d,u]=i,p=[[[1,0,0],[0,1,0],[0,0,1]],[[-1,0,0],[0,1,0],[0,0,-1]],[[0,0,1],[0,1,0],[-1,0,0]],[[0,0,-1],[0,1,0],[1,0,0]],[[0,1,0],[0,0,1],[1,0,0]],[[0,-1,0],[0,0,1],[-1,0,0]]];for(let[f,v,m]of p){let g=n.pos.length/3;for(let[x,y]of[[-1,-1],[1,-1],[1,1],[-1,1]])n.pos.push(l+f[0]*c[0]+v[0]*x*c[0]+m[0]*y*c[0],d+f[1]*c[1]+v[1]*x*c[1]+m[1]*y*c[1],u+f[2]*c[2]+v[2]*x*c[2]+m[2]*y*c[2]),n.nrm.push(...f),n.k.push(h);n.idx.push(g,g+1,g+2,g,g+2,g+3)}};for(let i of Hh){let c=i[3],h=i[2]+c*.42;a([i[0],i[1],h],[.11,.17,.11],1);for(let l of[-1,1])for(let d of[-1,1])a([i[0]+l*.11,i[1],h+d*.11],[.014,.18,.014],0);a([i[0],i[1]+.2,h],[.15,.03,.15],0),a([i[0],i[1]+.27,h],[.05,.05,.05],0),a([i[0],i[1]-.19,h],[.09,.025,.09],0),a([i[0],i[1]+.34,i[2]+c*.21],[.015,.015,.21],0),a([i[0],i[1]+.15,i[2]+c*.03],[.04,.24,.03],0)}let s=t({vert:`
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
		}`,attributes:{position:n.pos,normal:n.nrm,k:n.k},elements:new Uint16Array(n.idx),cull:{enable:!1}});return function(){r(),s()}}});var Jg=At((kA,Zg)=>{"use strict";var pk=l0().GLSL,{A:jh,BENCH:Md,SHAFT:_d,TREE:Kl,oculusGLSL:vk}=Lr(),mk=zr(),Bh=Kl.sxz,Yg=Kl.sy,Kg=Kl.yaw;function gk(t){let e=new DataView(t),o=e.getUint32(4,!0),r=e.getUint32(8,!0),n=e.getUint32(12,!0),a=[0,1,2].map(u=>e.getFloat32(16+u*4,!0)),s=[0,1,2].map(u=>e.getFloat32(28+u*4,!0)),i=40,c=new Uint16Array(t,i,o*3);i+=o*6;let h=new Uint16Array(t,i,o*2);i+=o*4;let l=new Int8Array(t,i,o*3);i+=o*3,i=i+3&-4;let d=new Uint32Array(t,i,n);return{nV:o,nWood:r,nI:n,mn:a,sz:s,pos:c,uv:h,nrm:l,idx:d}}function xk(t){let e=new Float32Array(t.nV*3),o=new Float32Array(t.nV*3),r=new Float32Array(t.nV*2),n=new Float32Array(t.nV),a=Math.cos(Kg),s=Math.sin(Kg);for(let i=0;i<t.nV;i++){let c=(t.mn[0]+t.pos[i*3]/65535*t.sz[0])*Bh,h=(t.mn[1]+t.pos[i*3+1]/65535*t.sz[1])*Yg,l=(t.mn[2]+t.pos[i*3+2]/65535*t.sz[2])*Bh;e[i*3]=jh.cx+a*c+s*l,e[i*3+1]=Md.soil+.02+h,e[i*3+2]=jh.zc-s*c+a*l;let d=t.nrm[i*3]/127/Bh,u=t.nrm[i*3+1]/127/Yg,p=t.nrm[i*3+2]/127/Bh,f=Math.hypot(d,u,p)||1;d/=f,u/=f,p/=f,o[i*3]=a*d+s*p,o[i*3+1]=u,o[i*3+2]=-s*d+a*p,r[i*2]=t.uv[i*2]/65535,r[i*2+1]=t.uv[i*2+1]/65535,n[i]=i>=t.nWood?1:0}return{position:e,normal:o,uv:r,leaf:n,elements:t.idx}}function Qg(t,e,o,r){let n=t.texture({data:[[r]],min:"linear",mag:"linear"});return fetch(e).then(a=>{if(!a.ok)throw new Error("Could not load "+e);return a.blob()}).then(a=>createImageBitmap(a,{premultiplyAlpha:"none"}).catch(()=>new Promise((s,i)=>{let c=new Image;c.onload=()=>s(c),c.onerror=i,c.src=URL.createObjectURL(a)}))).then(a=>n({data:a,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",...o})).catch(a=>console.error(a)),n}var u0=t=>t.toFixed(4),yc=Kl.crownC,bc=Kl.crownR,yk=`
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

const vec3 SHAFT = vec3(${u0(_d[0])}, ${u0(_d[1])}, ${u0(_d[2])});

void main() {
	vec3 p = position;
	// the air in the court is never quite still. The whole tree leans
	// with it, slowly, more the higher and the further out on a limb
	// (wood and leaves together, so every leaf stays on its twig) ...
	float h = max(p.y - 1.2, 0.0);
	vec2 out2 = p.xz - vec2(${u0(jh.cx)}, ${u0(jh.zc)});
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
	vec3 cc = vec3(${u0(yc[0])}, ${u0(yc[1])}, ${u0(yc[2])});
	vec3 cr = vec3(${u0(bc[0])}, ${u0(bc[1])}, ${u0(bc[2])});
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
}`,fs=Ka(),bk=`
precision highp float;
${pk}
uniform float time;
${fs.lanternGLSL(fs.TREE_LANTERN)}
const vec3 LANTERN_POS = vec3(${fs.LANTERNS[fs.TREE_LANTERN[0]].x.toFixed(3)}, ${fs.LANTERNS[fs.TREE_LANTERN[0]].y.toFixed(3)}, ${fs.LANTERNS[fs.TREE_LANTERN[0]].z.toFixed(3)});
uniform sampler2D leaves, bark;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_leaf, v_shade;
varying vec3 v_eye;

${vk()}

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
	vec3 rel = (v_pos - vec3(${u0(yc[0])}, ${u0(yc[1])}, ${u0(yc[2])})) / vec3(${u0(bc[0])}, ${u0(bc[1])}, ${u0(bc[2])});
	float outer = clamp(length(rel), 0.0, 1.0);
	float ao = mix(0.38, 1.0, outer * outer) * (0.75 + 0.25 * smoothstep(0.4, 2.0, v_pos.y));
	// and the trunk darkens where it meets the soil
	ao *= 0.6 + 0.4 * smoothstep(${u0(Md.soil)}, ${u0(Md.soil+.5)}, v_pos.y);

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
}`;Zg.exports=t=>{let e=null,o=Qg(t,"res/tree/leaves.webp",{wrapS:"clamp",wrapT:"clamp"},[60,80,40,0]),r=Qg(t,"res/tree/bark.jpg",{wrapS:"repeat",wrapT:"repeat"},[90,80,70]),n=Date.now();return fetch("res/tree.bin").then(a=>{if(!a.ok)throw new Error("Could not load the tree");return a.arrayBuffer()}).then(a=>{let s=xk(gk(a));e=t({vert:yk,frag:bk,attributes:{position:s.position,normal:s.normal,uv:s.uv,leaf:s.leaf},elements:s.elements,uniforms:{leaves:o,bark:r,time:()=>mk.motion?typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-n)/1e3:0},cull:{enable:!1}})}).catch(a=>console.error(a)),function(){e&&e()}}});var Yh=At((SA,nx)=>{"use strict";var wc=Ja(),wk="res/audio/go-tomorrow.mp3",_k="res/audio/go-tomorrow.json",ex="gallery-sound",Wh=[wc.PIANO.x,1,wc.PIANO.z],Mk=wc.R,ar=!0;try{localStorage.getItem(ex)==="off"&&(ar=!1)}catch(t){}var $n=null,z0=null,Ql=null,Zl=null,hs=null,Pa=null,si=!1,Vh=null,tx=[],kk=(typeof performance!="undefined"?performance.now():0)/1e3;function Sk(t){let e=Math.floor(t.sampleRate*2.6),o=t.createBuffer(2,e,t.sampleRate),r=12345,n=()=>(r=r*16807%2147483647,r/10737418235e-1-1);for(let a=0;a<2;a++){let s=o.getChannelData(a),i=0;for(let c=0;c<e;c++){let h=c/t.sampleRate,l=.25+.6*Math.exp(-h*2.2);i+=(n()-i)*l,s[c]=i*Math.pow(1-c/e,2.2)*Math.exp(-h*1.5)*(h<.012?h/.012:1)}}return o}function Ek(){if($n)return;$n=new Audio,$n.src=wk,$n.loop=!0,$n.preload="auto",$n.crossOrigin="anonymous";let t=window.AudioContext||window.webkitAudioContext;if(!t){$n.volume=.2;return}try{z0=new t;let e=z0.createMediaElementSource($n);hs=z0.createBiquadFilter(),hs.type="lowpass",hs.frequency.value=1500,hs.Q.value=.4,Ql=z0.createGain(),Ql.gain.value=0,Zl=z0.createGain(),Zl.gain.value=0;let o=z0.createConvolver();o.buffer=Sk(z0),Pa=z0.createGain(),Pa.gain.value=ar?1:0,e.connect(hs),hs.connect(Ql),Ql.connect(Pa),hs.connect(o),o.connect(Zl),Zl.connect(Pa),Pa.connect(z0.destination)}catch(e){z0=null,$n.volume=.2}}function ox(){if(si||!ar)return;Ek();let t=()=>$n.play().then(()=>{si=!0}).catch(()=>{});z0&&z0.state==="suspended"?z0.resume().then(t,t):t()}typeof window!="undefined"&&(["pointerdown","pointerup","touchend","keydown","click"].forEach(t=>window.addEventListener(t,ox,{capture:!0,passive:!0})),document.addEventListener("visibilitychange",()=>{!$n||!si||(document.hidden?$n.pause():ar&&$n.play().catch(()=>{}))}),fetch(_k).then(t=>t.ok?t.json():null).then(t=>{if(!t)return;let e=o=>{let r=o.map(s=>s[2]).sort((s,i)=>s-i),n=r[Math.floor(r.length*.03)]||0,a=r[Math.floor(r.length*.97)]||1;return o.map(s=>({t:s[0],w:s[1],x:Math.max(0,Math.min(1,(s[2]-n)/Math.max(a-n,.001)))}))};Vh={left:e(t.l),right:e(t.r),level:t.e,dur:t.d}}).catch(()=>{}));var Xh={AT:Wh,listen(t){if(!z0||!si)return;let e=t[0]-Wh[0],o=t[2]-Wh[2],r=Math.hypot(e,o,(t[1]-Wh[1])*.5),n=Math.hypot(t[0]-wc.C.x,t[2]-wc.C.z)<Mk+.4||t[0]<-.2&&Math.abs(t[2]-wc.C.z)<4,a,s,i;if(n){let h=Math.max(0,Math.min(1,(r-1.2)/5));a=1-.3*h,s=.22+.16*h,i=16e3}else{let h=5.5/Math.max(r,5.5),l=t[0]>14.2&&t[2]<12?.6:1;a=.5*Math.pow(h,1.5)*l,s=.34*Math.pow(h,.95)*l,i=(650+9e3*Math.pow(h,1.3))*(l<1?.7:1)}let c=z0.currentTime;Ql.gain.setTargetAtTime(a,c,.35),Zl.gain.setTargetAtTime(s,c,.35),hs.frequency.setTargetAtTime(i,c,.35)},time(){let t=Vh&&Vh.dur||158;return $n&&si&&!$n.paused||$n&&si?$n.currentTime%t:((performance.now()/1e3-kk)%t+t)%t},get cues(){return Vh},get on(){return ar},set(t){ar=!!t;try{localStorage.setItem(ex,ar?"on":"off")}catch(e){}ar?(ox(),$n&&si&&$n.play().catch(()=>{}),Pa&&Pa.gain.setTargetAtTime(1,z0.currentTime,.2)):Pa?Pa.gain.setTargetAtTime(0,z0.currentTime,.15):$n&&$n.pause(),tx.forEach(e=>e(ar))},toggle(){Xh.set(!ar)},onChange(t){tx.push(t)},button(t){let e='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a7.8 7.8 0 0 1 0 11"/></svg>',o='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>',r=document.createElement("button");r.type="button",r.className=t+" sound-toggle";let n=()=>{r.innerHTML=ar?e:o,r.setAttribute("aria-label",ar?"Turn the music off":"Turn the music on"),r.title=ar?"Music on":"Music off",r.setAttribute("aria-pressed",ar?"true":"false")};return n(),Xh.onChange(n),["mousedown","pointerdown"].forEach(a=>r.addEventListener(a,s=>s.stopPropagation())),r.addEventListener("click",a=>{a.stopPropagation(),Xh.toggle()}),r}};nx.exports=Xh});var px=At((EA,Ad)=>{"use strict";var Ed=l0().GLSL,{A:rx,BENCH:fx,oculusGLSL:hx}=Lr(),ax=zr(),ux=Ja(),sx=Yh(),zk=1.74,Ak=1.877,O0=zk/Ak,ci={x:rx.cx-1.22,z:rx.zc+.02,hipY:fx.seat+.115},sn=(t,e)=>[t[3]*e[0]+t[0]*e[3]+t[1]*e[2]-t[2]*e[1],t[3]*e[1]-t[0]*e[2]+t[1]*e[3]+t[2]*e[0],t[3]*e[2]+t[0]*e[1]-t[1]*e[0]+t[2]*e[3],t[3]*e[3]-t[0]*e[0]-t[1]*e[1]-t[2]*e[2]],Zr=t=>[-t[0],-t[1],-t[2],t[3]],ds=(t,e)=>{let o=Math.hypot(t[0],t[1],t[2])||1,r=Math.sin(e/2);return[t[0]/o*r,t[1]/o*r,t[2]/o*r,Math.cos(e/2)]},Kh=(t,e,o)=>sn(ds([0,0,1],o*Math.PI/180),sn(ds([0,1,0],e*Math.PI/180),ds([1,0,0],t*Math.PI/180))),zd=t=>{let e=Math.hypot(...t)||1;return t.map(o=>o/e)},va=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],tf=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],us=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],Sd=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2],Zh=t=>Math.hypot(t[0],t[1],t[2]),Jl=t=>{let e=Zh(t)||1;return[t[0]/e,t[1]/e,t[2]/e]},t1=(t,e)=>[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]],Tk=(t,e)=>{let o=[t[0],t[1],t[2]],r=us(t1(o,e),2);return tf(tf(e,us(r,t[3])),t1(o,r))},Lk=(t,e)=>{let o=t1(t,e),r=1+Sd(t,e);return r<1e-6?[0,0,1,0]:zd([o[0],o[1],o[2],r])};function gr(t,e,o){let[r,n,a,s]=e,i=r*r,c=n*n,h=a*a,l=r*n,d=r*a,u=n*a,p=s*r,f=s*n,v=s*a;return[(1-2*(c+h))*o[0],2*(l+v)*o[0],2*(d-f)*o[0],0,2*(l-v)*o[1],(1-2*(i+h))*o[1],2*(u+p)*o[1],0,2*(d+f)*o[2],2*(u-p)*o[2],(1-2*(i+c))*o[2],0,t[0],t[1],t[2],1]}function t0(t,e){let o=new Array(16);for(let r=0;r<4;r++)for(let n=0;n<4;n++)o[r*4+n]=t[n]*e[r*4]+t[4+n]*e[r*4+1]+t[8+n]*e[r*4+2]+t[12+n]*e[r*4+3];return o}function kd(t){let e=Math.hypot(t[0],t[1],t[2]),o=Math.hypot(t[4],t[5],t[6]),r=Math.hypot(t[8],t[9],t[10]),n=t[0]/e,a=t[1]/e,s=t[2]/e,i=t[4]/o,c=t[5]/o,h=t[6]/o,l=t[8]/r,d=t[9]/r,u=t[10]/r,p=n+c+u,f;if(p>0){let v=Math.sqrt(p+1)*2;f=[(h-d)/v,(l-s)/v,(a-i)/v,v/4]}else if(n>c&&n>u){let v=Math.sqrt(1+n-c-u)*2;f=[v/4,(i+a)/v,(l+s)/v,(h-d)/v]}else if(c>u){let v=Math.sqrt(1+c-n-u)*2;f=[(i+a)/v,v/4,(d+h)/v,(l-s)/v]}else{let v=Math.sqrt(1+u-n-c)*2;f=[(l+s)/v,(d+h)/v,v/4,(a-i)/v]}return zd(f)}var Jh={LeftUpLeg:[-62,10,0],LeftLeg:[122,0,0],LeftFoot:[30,0,0],RightUpLeg:[0,-3,-2],RightLeg:[4,0,0],RightFoot:[35,-12,0],Neck:[10,0,0],Head:[6,0,0],LeftShoulder:[0,0,6],LeftArm:[-112.4,3.4,62.5],LeftForeArm:[0,-122.6,0],LeftHand:[0,0,-10],RightShoulder:[0,0,0],RightArm:[0,78,-8],RightForeArm:[0,14,0],RightHand:[0,0,0]};for(let t of["Left","Right"]){let e=t==="Left"?-1:1,o=t==="Left"?1:.35;["Index","Middle","Ring","Pinky"].forEach((r,n)=>{Jh[t+"Hand"+r+"1"]=[0,0,e*(18+n*6)*o],Jh[t+"Hand"+r+"2"]=[0,0,e*(26+n*6)*o],Jh[t+"Hand"+r+"3"]=[0,0,e*16*o]})}function ii(t,e,o){let r=t-e;return r-=Math.round(r),Math.exp(-(r/o)*(r/o))}function ix(t){let e=9+20*Math.cos(2*Math.PI*t),o=4+13*ii(t,.14,.07)+57*ii(t,.72,.12),r=5*ii(t,.06,.04)-9*ii(t,.42,.12)+17*ii(t,.62,.05)-3*ii(t,.85,.1),n=-26*ii(t,.58,.06);return{hip:e,knee:o,ankle:r,toe:n}}function Nk(t){let e=(t%1+1)%1,o=ix(e),r=ix(e+.5),n=Math.cos(2*Math.PI*e),a=Math.sin(2*Math.PI*e);return{swing:{LeftArm:[16*n,0,0],RightArm:[-16*n,0,0],LeftForeArm:[0,-14-8*Math.max(0,-n),0],RightForeArm:[0,14+8*Math.max(0,n),0]},pose:{Hips:[0,5*a,1.5*Math.cos(4*Math.PI*e)],Spine1:[3,-4*a,0],LeftUpLeg:[-o.hip,0,0],LeftLeg:[o.knee,0,0],LeftFoot:[o.ankle,0,0],LeftToeBase:[o.toe,0,0],RightUpLeg:[-r.hip,0,0],RightLeg:[r.knee,0,0],RightFoot:[r.ankle,0,0],RightToeBase:[r.toe,0,0],LeftArm:[0,0,-78],RightArm:[0,0,78],LeftHand:[0,0,-8],RightHand:[0,0,8]},sway:.022*n}}var cx=`
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
}`,e1=Ka(),lx=`#extension GL_OES_standard_derivatives : enable
precision highp float;
${Ed}
uniform float time;
${ux.roomGLSL()}
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
${hx()}
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
}`;function Rk(t,e){let o=t.texture({data:[[[120,100,90,255]]],min:"linear",mag:"linear"});return fetch(e).then(r=>{if(!r.ok)throw new Error("Could not load "+e);return r.blob()}).then(r=>createImageBitmap(r,{premultiplyAlpha:"none"}).catch(()=>new Promise((n,a)=>{let s=new Image;s.onload=()=>n(s),s.onerror=a,s.src=URL.createObjectURL(r)}))).then(r=>o({data:r,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(r=>console.error(r)),o}var dx={w:.13,h:.2},Qh=t=>.011*(1-Math.pow(1-t,3));function Ok(){let t=[],e=[],o=[],r=[],n=[],a=(v,m,g,x,y,w,M)=>{let _=t.length/3;[v,m,g,x].forEach((S,R)=>{t.push(...S),e.push(...y),o.push(...M[R]),r.push(w)}),n.push(_,_+1,_+2,_,_+2,_+3)},{w:s,h:i}=dx,c=i/2,h=[[0,1],[1,1],[1,0],[0,0]],l=-.006,d=s+.001,u=c+.001;a([0,l,-u],[d,l,-u],[d,l,u],[0,l,u],[0,-1,0],1,[[0,1],[1,1],[1,0],[0,0]]),a([0,l+.001,-u],[0,l+.001,u],[d,l+.001,u],[d,l+.001,-u],[0,1,0],2,h),a([-d,l,-u],[0,l,-u],[0,l,u],[-d,l,u],[0,-1,0],2,h),a([-d,l+.001,-u],[-d,l+.001,u],[0,l+.001,u],[0,l+.001,-u],[0,1,0],2,h);let p=8;for(let v of[1,-1]){for(let g=0;g<p;g++){let x=g/p,y=(g+1)/p,w=(.002+x*(s-.002))*v,M=(.002+y*(s-.002))*v,_=Qh(x),S=Qh(y),R=v>0?x:1-x,T=v>0?y:1-y,H=1,q=-(S-_)/(M-w);a([w,_,-c],[M,S,-c],[M,S,c],[w,_,c],[q,H,0],3,[[R,1],[T,1],[T,0],[R,0]]),a([w,l+.001,c],[M,l+.001,c],[M,S,c],[w,_,c],[0,0,1],4,h),a([w,_,-c],[M,S,-c],[M,l+.001,-c],[w,l+.001,-c],[0,0,-1],4,h)}let m=s*v;a([m,l+.001,-c],[m,Qh(1),-c],[m,Qh(1),c],[m,l+.001,c],[v,0,0],4,h)}let f=10;for(let v=0;v<f;v++){let m=v/f,g=(v+1)/f,x=t.length/3;for(let[y,w]of[[m,-c],[g,-c],[g,c],[m,c]])t.push(y,0,w),e.push(0,1,0),o.push(y,(w+c)/i),r.push(5);n.push(x,x+1,x+2,x,x+2,x+3)}return{pos:t,nrm:e,uv:o,kind:r,idx:n}}function Ck(){if(typeof document=="undefined")return null;let t=document.createElement("canvas");t.width=512,t.height=768;let e=t.getContext("2d");e.fillStyle="#ebe5d8",e.fillRect(0,0,512,768);let o=7,r=()=>(o=o*16807%2147483647,o/2147483647),n=(s,i,c,h,l,d,u)=>{for(let p=0;p<d;p++){let f=s+(r()-.5)*c*2,v=i+(r()-.5)*h*2,m=20+r()*60,g=e.createRadialGradient(f,v,0,f,v,m);g.addColorStop(0,`rgba(${l},${u})`),g.addColorStop(1,`rgba(${l},0)`),e.fillStyle=g,e.fillRect(f-m,v-m,m*2,m*2)}},a=e.createRadialGradient(236,280,10,256,300,125);a.addColorStop(0,"#3d4866"),a.addColorStop(1,"#232a3d"),e.fillStyle=a,e.beginPath(),e.arc(256,300,122,0,Math.PI*2),e.fill(),e.fillStyle="#b8873f",e.beginPath(),e.moveTo(64,452);for(let s=64;s<=448;s+=16)e.lineTo(s,446+r()*4);for(let s=448;s>=64;s-=16)e.lineTo(s,466+r()*4);e.fill(),e.strokeStyle="#2b2f3a",e.lineCap="round",[[120,392,500,5],[160,352,530,4],[205,307,558,3]].forEach(([s,i,c,h])=>{e.lineWidth=h,e.beginPath(),e.moveTo(s,c),e.lineTo(i,c),e.stroke()});for(let s=0;s<9e3;s++)e.fillStyle=`rgba(90,80,60,${r()*.05})`,e.fillRect(r()*512,r()*768,1,1);return t}var Pk=`
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
		float r = u * ${dx.w.toFixed(3)};
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
}`,$k=`
precision highp float;
${Ed}
uniform float time;
${e1.lanternGLSL(e1.TREE_LANTERN)}
uniform sampler2D cover;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_kind;
${hx()}
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
}`;function Ik(){let t=[],e=[],o=[],r=[],n=[],a=[.36,.11,.07],s=[.1,.07,.05],i=[.78,.76,.72],c=[.55,.41,.26],h=[.8,.55,.22],l=[[0,-.15,h,2],[.0012,-.147,h,2],[.004,-.138,h,2],[.0058,-.125,c,2],[.0064,-.112,c,2],[.006,-.104,c,2],[.0066,-.102,i,1],[.0066,-.08,i,1],[.0062,-.074,i,1],[.0068,-.072,i,1],[.007,-.066,i,1],[.0058,-.064,a,0],[.0062,-.04,a,0],[.0058,0,a,0],[.0046,.06,a,0],[.0036,.11,a,0],[.003,.13,s,0],[.0026,.136,s,0],[0,.139,s,0]],d=16;for(let u=0;u<l.length;u++){let[p,f,v,m]=l[u],g=m===2?.45:1;for(let x=0;x<=d;x++){let y=x/d*Math.PI*2;t.push(Math.cos(y)*p,f,Math.sin(y)*p*g);let w=Math.max(u-1,0),M=Math.min(u+1,l.length-1),_=l[M][0]-l[w][0],S=l[M][1]-l[w][1],R=Math.hypot(_,S)||1;e.push(Math.cos(y)*S/R,-_/R,Math.sin(y)*S/R/g),o.push(...v),r.push(m)}}for(let u=0;u<l.length-1;u++)for(let p=0;p<d;p++){let f=u*(d+1)+p,v=f+d+1;n.push(f,v,f+1,f+1,v,v+1)}return{pos:t,nrm:e,col:o,mat:r,idx:n}}var qk=`
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
}`,Dk=`
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
}`,Fk=`
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
}`,Gk=`
precision highp float;
uniform float pulse;
varying vec2 v_c;
void main() {
	float d = length(v_c);
	float g = exp(-d * d * 6.0) * 0.10 + exp(-d * d * 30.0) * 0.08;
	gl_FragColor = vec4(vec3(1.0, 0.80, 0.45) * g * (0.75 + 0.25 * pulse), 1.0);
}`;Ad.exports=t=>{let e="res/avatar/",o=null,r=Date.now(),n=()=>typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-r)/1e3,a={glowPos:[ci.x,1.9,ci.z],glow:0};Promise.all([fetch(e+"avatar.json").then(T=>T.json()),fetch(e+"avatar.bin").then(T=>T.arrayBuffer())]).then(([T,H])=>{o=h(T,H)}).catch(T=>console.error(T));let s=null;Promise.all([fetch(e+"motion.json").then(T=>T.ok?T.json():null),fetch(e+"motion.bin").then(T=>T.ok?T.arrayBuffer():null)]).then(([T,H])=>{if(!T||!H)return;let q={};for(let W in T.clips){let F=T.clips[W],j=F.bones.length,pt=new Float32Array(H,F.mean,j*4),Ht={};F.bones.forEach((Nt,xt)=>{Ht[Nt]=[pt[xt*4],pt[xt*4+1],pt[xt*4+2],pt[xt*4+3]]}),q[W]=Object.assign({},F,{Q:new Int16Array(H,F.q,F.frames*j*4),H:new Float32Array(H,F.hips,F.frames*3),meanQ:Ht})}s=q}).catch(()=>{});function i(T,H){let q=T.frames,W=T.bones.length,F=(H%q+q)%q,j=Math.floor(F)%q,pt=(j+1)%q,Ht=F-Math.floor(F),Nt={};for(let Bt=0;Bt<W;Bt++){let Se=(j*W+Bt)*4,be=(pt*W+Bt)*4,Ke=T.Q[Se],$e=T.Q[Se+1],no=T.Q[Se+2],rt=T.Q[Se+3],yt=T.Q[be],it=T.Q[be+1],Mt=T.Q[be+2],Vt=T.Q[be+3];Ke*yt+$e*it+no*Mt+rt*Vt<0&&(yt=-yt,it=-it,Mt=-Mt,Vt=-Vt),Nt[T.bones[Bt]]=zd([Ke+(yt-Ke)*Ht,$e+(it-$e)*Ht,no+(Mt-no)*Ht,rt+(Vt-rt)*Ht])}let xt=j*3,ot=pt*3;return{q:Nt,hips:[T.H[xt]+(T.H[ot]-T.H[xt])*Ht,T.H[xt+1]+(T.H[ot+1]-T.H[xt+1])*Ht,T.H[xt+2]+(T.H[ot+2]-T.H[xt+2])*Ht]}}let c=t.texture({data:[[[255,255,255,255]]]});function h(T,H){let q=(D,J)=>new Float32Array(H,D,J),W=T.bones,F=W.length,j={};W.forEach((D,J)=>{j[D.name]=J});let pt=[];for(let D=0;D<F;D++)pt.push(Array.from(q(T.ibm+D*64,16)));let Ht=W.map(D=>gr(D.t,D.r,D.s)),Nt=[];for(let D=0;D<F;D++){let J=W[D].parent;Nt[D]=J<0?Ht[D]:t0(Nt[J],Ht[D])}let xt=Nt.map(kd),ot=T.meshes.map(D=>{let J=q(D.pos,D.n*3),mt=q(D.nrm,D.n*3),ut=q(D.uv,D.n*2),Xt=new Uint8Array(H,D.jnt,D.n*4),xe=q(D.wgt,D.n*4),we=new Uint16Array(H,D.idx,D.ni),oe={};for(let ae in D.morphs){let Qe=D.morphs[ae];oe[ae]={idx:new Uint16Array(H,Qe.idx,Qe.n),d:q(Qe.d,Qe.n*3)}}let Fe=new Float32Array(D.n*3),pe=new Float32Array(D.n*3),Ie=new Float32Array(D.n*3),fe=t.buffer({data:Fe,usage:"dynamic"}),Me=t.buffer({data:pe,usage:"dynamic"}),Ee=/avaturn_hair/.test(D.name),ie=/EyeAO|Eyelash/.test(D.name),qe=/Body|Head/.test(D.name),je=D.kind||0;return{m:D,pos:J,nrm:mt,uv:ut,jnt:Xt,wgt:xe,idx:we,morphs:oe,outP:Fe,outN:pe,work:Ie,pb:fe,nbuf:Me,tex:D.tex?Rk(t,e+D.tex):c,kind:je,alphaScale:/EyeAO/.test(D.name)?.25:1,blend:D.blend||Ee,alphaCut:Ee?.35:ie?.02:0,skin:qe?1:0}}),Bt=t({vert:cx,frag:lx,attributes:{position:t.prop("pb"),normal:t.prop("nb"),uv:t.prop("uv")},elements:t.prop("el"),uniforms:{tex:t.prop("tex"),alphaCut:t.prop("alphaCut"),skin:t.prop("skin"),kind:t.prop("kind"),alphaScale:t.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>_&&!S?_.lamp:[0,0,0,0],court:()=>_||S?0:1,candle:()=>S?1:0},cull:{enable:!1}}),Se=t({vert:cx,frag:lx,attributes:{position:t.prop("pb"),normal:t.prop("nb"),uv:t.prop("uv")},elements:t.prop("el"),uniforms:{tex:t.prop("tex"),alphaCut:t.prop("alphaCut"),skin:t.prop("skin"),kind:t.prop("kind"),alphaScale:t.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>_&&!S?_.lamp:[0,0,0,0],court:()=>_||S?0:1,candle:()=>S?1:0},cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"one minus src alpha"}}}),be=.3;for(let D of ot)if(D.uvBuf=t.buffer(D.uv),/Body/.test(D.m.name)){let J=[],mt=[];for(let ut=0;ut<D.idx.length;ut+=3){let Xt=D.idx[ut],xe=D.idx[ut+1],we=D.idx[ut+2];(D.pos[Xt*3+1]<be&&D.pos[xe*3+1]<be&&D.pos[we*3+1]<be?mt:J).push(Xt,xe,we)}D.el=t.elements({data:new Uint16Array(J),type:"uint16"}),mt.length&&(D.sockEl=t.elements({data:new Uint16Array(mt),type:"uint16"}))}else D.el=t.elements({data:D.idx,type:"uint16"});let Ke=Nt[j.Hips],$e=ds([1,0,0],-Math.PI/2),no=t0(gr([ci.x-Ke[12]*O0,ci.hipY-Ke[14]*O0,ci.z+Ke[13]*O0],$e,[1,1,1]),gr([0,0,0],[0,0,0,1],[O0,O0,O0])),rt=new Array(F),yt=-1,it=(D,J,mt)=>t0(gr([D,0,J],ds([0,1,0],mt),[1,1,1]),gr([0,0,0],[0,0,0,1],[O0,O0,O0])),Mt=["LeftFoot","RightFoot","LeftToeBase","RightToeBase"].map(D=>j[D]),Vt=Mt.map(D=>Nt[D][13]*O0);function he(D){if(s&&s.walk)return Ne(D);let J=Nk(D.phase),mt={},ut=pe=>{for(let Ie in pe){let fe=pe[Ie],Me=Kh(fe[0],fe[1],fe[2]);mt[Ie]=mt[Ie]?sn(mt[Ie],Me):Me}};ut(J.swing),ut(J.pose);let Xt=Math.cos(D.heading),xe=-Math.sin(D.heading),we=it(D.x+Xt*J.sway,D.z+xe*J.sway,D.heading),oe=new Array(F);for(let pe=0;pe<F;pe++){let Ie=W[pe],fe=Ht[pe],Me=mt[Ie.name];if(Me){let Ee=xt[pe],ie=sn(Zr(Ee),sn(Me,Ee));fe=gr(Ie.t,sn(Ie.r,ie),Ie.s)}oe[pe]=Ie.parent<0?t0(we,fe):t0(oe[Ie.parent],fe)}let Fe=1/0;Mt.forEach((pe,Ie)=>{Fe=Math.min(Fe,oe[pe][13]-Vt[Ie])});for(let pe=0;pe<F;pe++)oe[pe]=oe[pe].slice(),oe[pe][13]-=Fe,rt[pe]=t0(oe[pe],pt[pe]);return{blink:0}}function Ne(D){let J=s.walk,mt=i(J,(D.phase+J.phase0)*J.frames),ut=it(D.x,D.z,D.heading),Xt=new Array(F),xe=j.Hips;for(let oe=0;oe<F;oe++){let Fe=W[oe],pe=Ht[oe],Ie=mt.q[Fe.name];if(Ie){let fe=xt[oe],Me=sn(Zr(fe),sn(Ie,fe)),Ee=oe===xe?[Fe.t[0]+mt.hips[0],Fe.t[1]+mt.hips[1],Fe.t[2]+mt.hips[2]]:Fe.t;pe=gr(Ee,sn(Fe.r,Me),Fe.s)}Xt[oe]=Fe.parent<0?t0(ut,pe):t0(Xt[Fe.parent],pe)}let we=1/0;Mt.forEach((oe,Fe)=>{we=Math.min(we,Xt[oe][13]-Vt[Fe])});for(let oe=0;oe<F;oe++)Xt[oe]=Xt[oe].slice(),Xt[oe][13]-=we,rt[oe]=t0(Xt[oe],pt[oe]);return{blink:0}}function Qt(D,J){let mt=Math.sin(D*2*Math.PI/4.6),ut=Math.sin(D*.37)*.6+Math.sin(D*.83+1)*.4,Xt={LeftUpLeg:[-86,-6,0],RightUpLeg:[-84,7,0],LeftLeg:[88,0,0],RightLeg:[82,0,0],LeftFoot:[-4,0,0],RightFoot:[-2,0,0],Spine:[6,0,0],Spine1:[5+mt*.8,0,0],Spine2:[4+mt*.6,0,0],Neck:[10,0,0],Head:[12+ut*2,ut*2.5,0],LeftArm:[0,0,-72],RightArm:[0,0,72],LeftForeArm:[0,-62,0],RightForeArm:[0,62,0],LeftHand:[0,0,-10],RightHand:[0,0,10]},xe={};for(let fe in Xt){let Me=Xt[fe];xe[fe]=Kh(Me[0],Me[1],Me[2])}let we=it(J.x,J.z,J.heading),oe=new Array(F);for(let fe=0;fe<F;fe++){let Me=W[fe],Ee=Ht[fe],ie=xe[Me.name];if(ie){let qe=xt[fe],je=sn(Zr(qe),sn(ie,qe));Ee=gr(Me.t,sn(Me.r,je),Me.s)}oe[fe]=Me.parent<0?t0(we,Ee):t0(oe[Me.parent],Ee)}let pe=oe[j.Hips][13]-(J.y+.1);for(let fe=0;fe<F;fe++)oe[fe]=oe[fe].slice(),oe[fe][13]-=pe,rt[fe]=t0(oe[fe],pt[fe]);let Ie=D%4.1;return{blink:Ie<.16?Math.sin(Ie/.16*Math.PI):0}}let Wt=D=>[Nt[D][12],Nt[D][13],Nt[D][14]],ct=(D,J)=>{let mt=Jl(D),ut=Jl(va(J,us(mt,Sd(J,mt)))),Xt=t1(mt,ut);return kd([mt[0],mt[1],mt[2],0,ut[0],ut[1],ut[2],0,Xt[0],Xt[1],Xt[2],0,0,0,0,1])},Zt={};for(let D of["Left","Right"]){let J=j[D+"Arm"],mt=j[D+"ForeArm"],ut=j[D+"Hand"],Xt=j[D+"HandMiddle1"];Zt[D]={a:J,f:mt,h:ut,upper:Zh(va(Wt(mt),Wt(J)))*O0,fore:Zh(va(Wt(ut),Wt(mt)))*O0,dir0:Jl(va(Wt(mt),Wt(J))),qf0:ct(va(Wt(ut),Wt(mt)),[0,1,0]),qh0:ct(va(Wt(Xt),Wt(ut)),[0,1,0])}}let de={};for(let D of["Left","Right"])de[Zt[D].a]={side:D,part:0},de[Zt[D].f]={side:D,part:1},de[Zt[D].h]={side:D,part:2};function se(D,J,mt){if(!D||!D.length)return{x:.5,lift:0,press:0,finger:1,busy:0};let ut=0,Xt=D.length-1,xe=-1;for(;ut<=Xt;){let Qe=ut+Xt>>1;D[Qe].t<=J?(xe=Qe,ut=Qe+1):Xt=Qe-1}let we=D[D.length-1],oe=D[0],Fe=xe>=0?D[xe]:{t:we.t-mt,x:we.x,w:we.w},pe=xe+1<D.length?D[xe+1]:{t:oe.t+mt,x:oe.x,w:oe.w},Ie=Math.max(.05,pe.t-Fe.t),fe=Math.min(.14,Ie*.45),Me=Math.max(0,Math.min(1,(J-Fe.t-fe)/Math.max(Ie-fe-.03,.02))),Ee=Me*Me*(3-2*Me),ie=J-Fe.t,qe=(.55+.45*Fe.w)*Math.exp(-ie/.11),je=pe.t-J,ae=je<.05?(.55+.45*pe.w)*(1-je/.05):0;return{x:Fe.x+(pe.x-Fe.x)*Ee,lift:Math.sin(Math.PI*Me)*Math.min(.05,.012+Ie*.03)*(Ie>2.5?.4:1),press:Math.max(qe,ae),finger:ae>qe?((xe+1)*7+3)%4:(Math.max(xe,0)*7+3)%4,busy:Math.exp(-ie/.9)}}let Rt={lean:0,turn:0,nod:0,pedal:0,last:-1},Ue=["Index","Middle","Ring","Pinky"];function k(D){let J=ux.PLAY,mt=sx.cues,ut=sx.time(),Xt=mt&&mt.dur||158,xe={Left:se(mt&&mt.left,ut,Xt),Right:se(mt&&mt.right,ut,Xt)},we=.35;if(mt&&mt.level&&mt.level.length){let ko=ut*8,Ro=Math.floor(ko)%mt.level.length,Wn=(Ro+1)%mt.level.length;we=mt.level[Ro]+(mt.level[Wn]-mt.level[Ro])*(ko-Math.floor(ko))}let oe=Rt.last<0?0:Math.min(.1,Math.max(0,D-Rt.last));Rt.last=D;let Fe=ko=>Math.min(1,oe*ko);Rt.lean+=(we-Rt.lean)*Fe(1.2),Rt.turn+=(xe.Right.busy-xe.Left.busy-Rt.turn)*Fe(1.5),Rt.nod+=(Math.max(xe.Right.press,xe.Left.press*.7)-Rt.nod)*Fe(6),Rt.pedal+=((xe.Left.busy>.35?1:.15)-Rt.pedal)*Fe(5);let pe=Math.sin(D*2*Math.PI/4.6),Ie=Math.sin(ut*.41)*.6+Math.sin(ut*.17+1)*.4,fe={LeftUpLeg:[-80,-9,0],RightUpLeg:[-77,9,0],LeftLeg:[86,0,0],RightLeg:[64,0,0],LeftFoot:[-2,0,0],RightFoot:[12-10*Rt.pedal,0,0],Spine:[9+3.5*Rt.lean+Ie*1.6,Rt.turn*2.5,-Rt.turn*1.6],Spine1:[7+pe*.8+2.5*Rt.lean,Rt.turn*2.5,-Rt.turn*1.2],Spine2:[6+pe*.6+Ie*.8,Rt.turn*1.5,0],Neck:[13+3*Rt.lean,Rt.turn*3,0],Head:[15+Rt.nod*3.5+Ie*1.5,Rt.turn*5,Ie*1.5]};for(let ko of["Left","Right"]){let Ro=ko==="Left"?-1:1,Wn=xe[ko];Ue.forEach((X,_t)=>{let ve=_t===Wn.finger?Wn.press:Wn.press*.2;fe[ko+"Hand"+X+"1"]=[0,0,Ro*(20+3*_t+20*ve)],fe[ko+"Hand"+X+"2"]=[0,0,Ro*(26+4*_t-6*ve)],fe[ko+"Hand"+X+"3"]=[0,0,Ro*14]}),fe[ko+"HandThumb1"]=[0,Ro*-18,Ro*10]}let Me={};for(let ko in fe){let Ro=fe[ko];Me[ko]=Kh(Ro[0],Ro[1],Ro[2])}let Ee=Nt[j.Hips][13]*O0,ie=t0(gr([J.stoolX,J.stoolTop+.1-Ee,J.stoolFront+.15],ds([0,1,0],J.heading),[1,1,1]),gr([0,0,0],[0,0,0,1],[O0,O0,O0])),qe=(J.keyX0+J.keyX1)/2,je={};for(let ko of["Left","Right"]){let Ro=xe[ko],Wn=ko==="Left"?qe-.4+.33*Ro.x:qe+.07+.33*Ro.x;je[ko]=[Wn,J.keyTop+.062+Ro.lift-Ro.press*.012,J.keyFront+.075]}let ae=new Array(F),Qe={},r0=[0,1,0];for(let ko=0;ko<F;ko++){let Ro=W[ko],Wn=Ht[ko],X=Me[Ro.name],_t=de[ko];if(_t){let ve=Zt[_t.side];if(_t.part===0){let Oe=ae[Ro.parent],De=t0(Oe,Ht[ko]),un=[De[12],De[13],De[14]],p0=sn(kd(Oe),Zr(xt[Ro.parent])),$0=va(je[_t.side],un),dn=Zh($0),T0=(ve.upper+ve.fore)*.995;dn>T0&&($0=us($0,T0/dn),dn=T0);let pn=us($0,1/dn),To=(ve.upper*ve.upper-ve.fore*ve.fore+dn*dn)/(2*dn),a0=Math.sqrt(Math.max(0,ve.upper*ve.upper-To*To)),on=[_t.side==="Left"?-.6:.6,-.8,.3];on=Jl(va(on,us(pn,Sd(on,pn))));let Vn=tf(un,tf(us(pn,To),us(on,a0)));ve.T=tf(un,$0),ve.elbow=Vn;let Q0=Jl(va(Vn,un)),Z0=sn(Lk(Tk(p0,ve.dir0),Q0),p0);Qe[ko]=Z0,X=sn(Zr(p0),Z0)}else if(_t.part===1){let Oe=sn(ct(va(ve.T,ve.elbow),r0),Zr(ve.qf0));Qe[ko]=Oe,X=sn(Zr(Qe[Ro.parent]),Oe)}else{let Oe=xe[_t.side],De=sn(ct([_t.side==="Left"?.12:-.12,-.2-.1*Oe.press,-1],r0),Zr(ve.qh0));Qe[ko]=De,X=sn(Zr(Qe[Ro.parent]),De)}}if(X){let ve=xt[ko],Oe=sn(Zr(ve),sn(X,ve));Wn=gr(Ro.t,sn(Ro.r,Oe),Ro.s)}ae[ko]=Ro.parent<0?t0(ie,Wn):t0(ae[Ro.parent],Wn)}for(let ko=0;ko<F;ko++)rt[ko]=t0(ae[ko],pt[ko]);a.pianist={head:[ae[j.Head][12],ae[j.Head][13],ae[j.Head][14]]};let en=D%4.3;return{blink:en<.16?Math.sin(en/.16*Math.PI):0}}function Be(D,J){if(S)return k(D);if(_)return Qt(D,_);if(J)return he(J);let mt=Math.sin(D*2*Math.PI/4.2),ut=D%3.7,Xt=ut<.16?Math.sin(ut/.16*Math.PI):0,xe=Math.sin(D*.45),we=Math.sin(D*.31+.8),oe=Math.max(0,Math.sin(D*.085)-.75)*4,Fe={RightArm:[0,-22*oe,11*xe],RightForeArm:[0,8+26*oe,0],RightHand:[38*we,0,6*Math.sin(D*.7)],LeftUpLeg:[0,0,3.2*Math.sin(D*.36)],RightFoot:[5*Math.sin(D*.52+.4),0,0],Head:[0,1.6*Math.sin(D*.21),0]};["Index","Middle","Ring","Pinky"].forEach((ie,qe)=>{let je=Math.sin(D*1.1-qe*.5);Fe["RightHand"+ie+"1"]=[0,0,8+12*je],Fe["RightHand"+ie+"2"]=[0,0,6+10*je]});let pe={},Ie=(ie,qe)=>{for(let je in ie){let ae=ie[je],Qe=Kh(ae[0]*qe,ae[1]*qe,ae[2]*qe);pe[je]=pe[je]?sn(pe[je],Qe):Qe}};Ie(Jh,1),Ie({Spine1:[mt*.8,0,0],Spine2:[mt*.6,0,0]},1),Ie(Fe,1);let fe=new Array(F),Me=new Array(F);for(let ie=0;ie<F;ie++){let qe=W[ie],je=Ht[ie],ae=pe[qe.name];if(ae){let Qe=xt[ie],r0=sn(Zr(Qe),sn(ae,Qe));je=gr(qe.t,sn(qe.r,r0),qe.s)}fe[ie]=qe.parent<0?t0(no,je):t0(fe[qe.parent],je),Me[ie]=null}for(let ie=0;ie<F;ie++)rt[ie]=t0(fe[ie],pt[ie]);let Ee=ie=>[ie[12],ie[13],ie[14]];return a.headPos=Ee(fe[j.Head]),a.hipsPos=Ee(fe[j.Hips]),a.headM=fe[j.Head],{blink:Xt}}function Xe(D,J){let{pos:mt,nrm:ut,jnt:Xt,wgt:xe,outP:we,outN:oe,work:Fe,m:pe}=D,Ie=pe.n,fe=mt;if(J){Fe.set(mt);for(let Me in D.morphs){let Ee=J[Me]||0;if(Ee<=0)continue;let ie=D.morphs[Me];for(let qe=0;qe<ie.idx.length;qe++){let je=ie.idx[qe]*3;Fe[je]+=ie.d[qe*3]*Ee,Fe[je+1]+=ie.d[qe*3+1]*Ee,Fe[je+2]+=ie.d[qe*3+2]*Ee}}fe=Fe}for(let Me=0;Me<Ie;Me++){let Ee=fe[Me*3],ie=fe[Me*3+1],qe=fe[Me*3+2],je=ut[Me*3],ae=ut[Me*3+1],Qe=ut[Me*3+2],r0=0,en=0,ko=0,Ro=0,Wn=0,X=0;for(let ve=0;ve<4;ve++){let Oe=xe[Me*4+ve];if(Oe===0)continue;let De=rt[Xt[Me*4+ve]];r0+=Oe*(De[0]*Ee+De[4]*ie+De[8]*qe+De[12]),en+=Oe*(De[1]*Ee+De[5]*ie+De[9]*qe+De[13]),ko+=Oe*(De[2]*Ee+De[6]*ie+De[10]*qe+De[14]),Ro+=Oe*(De[0]*je+De[4]*ae+De[8]*Qe),Wn+=Oe*(De[1]*je+De[5]*ae+De[9]*Qe),X+=Oe*(De[2]*je+De[6]*ae+De[10]*Qe)}we[Me*3]=r0,we[Me*3+1]=en,we[Me*3+2]=ko;let _t=Math.hypot(Ro,Wn,X)||1;oe[Me*3]=Ro/_t,oe[Me*3+1]=Wn/_t,oe[Me*3+2]=X/_t}pe.grid&&!Je&&!_&&!S&&mo(D),D.sway&&oo(D),D.pb.subdata(we),D.nbuf.subdata(oe)}function mo(D){let[J,mt]=D.m.grid,ut=D.outP,Xt=D.outN,xe=fx.seat+.012;for(let we=1;we<J;we++){let oe=Math.pow(1-we/(J-1),1.5);for(let Fe=0;Fe<mt;Fe++){let pe=(we*mt+Fe)*3;ut[pe+1]>xe?ut[pe+1]=xe+(ut[pe+1]-xe)*Math.max(oe,.15):ut[pe+1]=xe}}for(let we=0;we<Xt.length;we+=3)Xt[we]=0,Xt[we+1]=1,Xt[we+2]=0}let Je=!1,bo=(D,J,mt,ut,Xt)=>({bone:j[D],rate:J,damp:mt,drag:ut,most:Xt,x:[0,0,0],v:[0,0,0],p:null,vel:[0,0,0]}),vt={head:bo("Head",15,.32,.012,.035),chest:bo("Spine2",9,.38,.03,.1),hips:bo("Hips",7,.42,.045,.16)},Ot=-1;function Tt(D){let J=Ot<0?0:D-Ot;Ot=D;for(let mt in vt){let ut=vt[mt],Xt=rt[ut.bone],xe=Nt[ut.bone],we=xe[12],oe=xe[13],Fe=xe[14],pe=[Xt[0]*we+Xt[4]*oe+Xt[8]*Fe+Xt[12],Xt[1]*we+Xt[5]*oe+Xt[9]*Fe+Xt[13],Xt[2]*we+Xt[6]*oe+Xt[10]*Fe+Xt[14]];if(!ut.p||!(J>0)||J>.25||Math.hypot(pe[0]-ut.p[0],pe[1]-ut.p[1],pe[2]-ut.p[2])>.5){ut.p=pe,ut.x=[0,0,0],ut.v=[0,0,0],ut.vel=[0,0,0];continue}let Ie=[(pe[0]-ut.p[0])/J,(pe[1]-ut.p[1])/J,(pe[2]-ut.p[2])/J],fe=Math.max(1,Math.ceil(J/.016)),Me=J/fe;for(let ie=0;ie<3;ie++){let qe=Math.max(-30,Math.min(30,(Ie[ie]-ut.vel[ie])/J)),je=-Ie[ie]*ut.drag;for(let ae=0;ae<fe;ae++)ut.v[ie]+=((je-ut.x[ie])*ut.rate*ut.rate-2*ut.damp*ut.rate*ut.v[ie]-qe)*Me,ut.x[ie]+=ut.v[ie]*Me}let Ee=Math.hypot(ut.x[0],ut.x[1],ut.x[2]);if(Ee>ut.most){let ie=ut.most/Ee;ut.x=[ut.x[0]*ie,ut.x[1]*ie,ut.x[2]*ie]}ut.p=pe,ut.vel=Ie}}for(let D of ot){let J=D.m,mt=J.n,ut=null,Xt=null;if(J.kind===9){Xt="head",ut=new Float32Array(mt);for(let xe=0;xe<mt;xe++){let we=D.uv[xe*2]<-.5?0:D.uv[xe*2+1];ut[xe]=we*we}}else if(J.name==="scarf"){Xt="chest",ut=new Float32Array(mt);for(let xe=0;xe<mt;xe++)ut[xe]=l(1.52,1.12,D.pos[xe*3+1])}else if(J.grid){Xt="hips",ut=new Float32Array(mt);let xe=J.grid[0],we=J.grid[1];for(let oe=0;oe<mt;oe++)ut[oe]=Math.pow(Math.floor(oe/we)/(xe-1),1.6)}ut&&(D.sway=ut,D.spring=vt[Xt],D.loose=Xt)}function oo(D){if(!Je&&!S&&!_)return;let J=D.spring.x,mt=D.sway,ut=D.outP;if(!(Math.abs(J[0])+Math.abs(J[1])+Math.abs(J[2])<1e-5))for(let Xt=0,xe=mt.length;Xt<xe;Xt++){let we=mt[Xt];we>0&&(ut[Xt*3]+=J[0]*we,ut[Xt*3+1]+=J[1]*we,ut[Xt*3+2]+=J[2]*we)}}function ro(D,J){Je=!!J;let mt=Be(D,J);Tt(D);let ut={eyeBlinkLeft:mt.blink,eyeBlinkRight:mt.blink};for(let Xt of ot)Xe(Xt,Object.keys(Xt.morphs).length?ut:null);a.pose=mt}return{parts:ot,update:ro,drawOpaque:Bt,drawBlend:Se,state:a}}function l(T,H,q){let W=Math.min(1,Math.max(0,(q-T)/(H-T)));return W*W*(3-2*W)}let d=Ok(),u=Ck(),p=u?t.texture({data:u,flipY:!1,min:"linear",mag:"linear"}):c,f=t({vert:Pk,frag:$k,attributes:{position:d.pos,normal:d.nrm,uv:d.uv,kind:d.kind},elements:new Uint16Array(d.idx),uniforms:{model:t.prop("model"),turn:0,fold:1.12,cover:p},cull:{enable:!1}}),v=Ik(),m=t({vert:qk,frag:Dk,attributes:{position:v.pos,normal:v.nrm,color:v.col,mat:v.mat},elements:new Uint16Array(v.idx),uniforms:{model:t.prop("model"),pulse:t.prop("pulse")},cull:{enable:!1}}),g=t({vert:Fk,frag:Gk,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{center:t.prop("center"),size:t.prop("size"),pulse:t.prop("pulse")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});function x(T){let H=T.headM,q=ot=>{let Bt=Math.hypot(...ot)||1;return ot.map(Se=>Se/Bt)},W=q([H[4],H[5],H[6]]),F=q([H[8],H[9],H[10]]),j=W,pt=F.map(ot=>-ot),Ht=[pt[1]*j[2]-pt[2]*j[1],pt[2]*j[0]-pt[0]*j[2],pt[0]*j[1]-pt[1]*j[0]],Nt=T.headPos,xt=[0,1,2].map(ot=>Nt[ot]+W[ot]*.06+F[ot]*.185);return[Ht[0],Ht[1],Ht[2],0,pt[0],pt[1],pt[2],0,j[0],j[1],j[2],0,xt[0],xt[1],xt[2],1]}let y=-1,w="",M=null,_=null,S=!1;function R(T){if(!o)return;let H=(ax.motion,n()),q=M?[M.x,M.z,M.heading,M.phase].map(F=>F.toFixed(4)).join():"";(_||S||q!==w||!M&&Math.abs(H-y)>(ax.isPhone?1/30:0))&&(o.update(H,M),y=H,w=q);for(let F of o.parts)F.blend||(o.drawOpaque({pb:F.pb,nb:F.nbuf,uv:F.uvBuf,el:F.el,tex:F.tex,alphaCut:F.alphaCut,skin:F.skin,kind:F.kind,alphaScale:F.alphaScale}),F.sockEl&&o.drawOpaque({pb:F.pb,nb:F.nbuf,uv:F.uvBuf,el:F.sockEl,tex:c,alphaCut:0,skin:0,kind:8,alphaScale:1}));let W=o.state;if(W.headM&&!M&&!_&&!S){f({model:x(W)});let F=W.headPos,j=Math.sin(H*1.3)*.02,pt=[F[0],F[1]+.62+j,F[2]+.05],Ht=H*.6,Nt=gr(pt,sn(ds([0,1,0],Ht),ds([0,0,1],.18)),[1.2,1.2,1.2]),xt=.5+.5*Math.sin(H*2);m({model:Nt,pulse:xt}),a.glowPos=pt,a.glow=.06+.03*xt,g({center:[pt[0],pt[1]-.12,pt[2]],size:.1,pulse:xt})}for(let F of o.parts)F.blend&&o.drawBlend({pb:F.pb,nb:F.nbuf,uv:F.uvBuf,el:F.el,tex:F.tex,alphaCut:F.alphaCut,skin:F.skin,kind:F.kind,alphaScale:F.alphaScale})}return R.state=a,R.place=ci,R.setWalk=T=>{M=T||null,M&&(a.glow=0)},R.setSeat=T=>{_=T||null,a.glow=_?0:a.glow,y=-1},R.setPiano=T=>{T=!!T,T!==S&&(S=T,S&&(a.glow=0),y=-1)},R};Ad.exports.PLACE=ci});var Td=At((zA,vx)=>{"use strict";vx.exports={name:"Muzammil",title:"Hi, I\u2019m Muzammil.",text:`I\u2019m a self-taught artist. I paint emotions. Grief, longing, love, and the quiet ways we keep holding on. I borrow the light and stillness of the Renaissance to talk about very modern feelings.

This gallery is my portfolio, built brick by pixel, so my work has a home that never closes. Every painting comes with a few words, because some feelings need both a frame and a sentence.

You\u2019ll find me in the tree court, catching sunlight and trying not to get too absorbed. Wander the halls, stay as long as you like, and don\u2019t worry about the time. In here, the only thing that\u2019s drying is the paint.`}});var Nd=At((AA,wx)=>{"use strict";var yx=zr(),mx=ul(),ps=t=>String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function Ld(){return yx.isPhone||!window.matchMedia||!window.matchMedia("(pointer: fine)").matches?!1:window.innerWidth>=900&&window.innerHeight>=520}var Hk=`
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
`,gx=!1;function bx(){if(gx)return;gx=!0;let t=document.createElement("style");t.textContent=Hk,document.head.appendChild(t)}var Uk='<svg class="visit-play" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="10.2"/><path d="M10 8.4l6 3.6-6 3.6z" fill="currentColor" stroke="none"/></svg>';function Bk(t){return!t||!t.visit||!Ld()?"":(bx(),`<button type="button" class="visit-btn" data-visit="${ps(t.slug||"")}" aria-label="Visit what remained: watch ${ps(t.title)} come to life">${Uk}<span>Visit what remained</span></button>`)}function jk(t){let e=t.getContext("2d");t.width=t.height=160;let o=e.createImageData(160,160),r=!0,n=0;return function a(s){if(r){if(s-n>70){n=s;let i=o.data;for(let c=0;c<i.length;c+=4){let h=Math.random()*255;i[c]=i[c+1]=i[c+2]=h,i[c+3]=255}e.putImageData(o,0,0),t.style.transform=`translate(${(Math.random()*6-3).toFixed(1)}%, ${(Math.random()*6-3).toFixed(1)}%)`}requestAnimationFrame(a)}}(0),()=>{r=!1}}var ef=null;function Wk(t){if(ef||!t||!t.visit)return;bx();let e=document.activeElement;document.body.classList.add("visiting");let o="images/web/"+t.slug+(yx.isPhone?"-1024":"")+".webp",r=document.createElement("div");r.className="visit",r.setAttribute("role","dialog"),r.setAttribute("aria-modal","true"),r.setAttribute("aria-label","Visiting "+t.title),r.innerHTML=`
		<video muted playsinline preload="auto" ${t.visit.poster?`poster="${ps(t.visit.poster)}"`:""}></video>
		<img class="visit-art" alt="${ps(t.title)}, ${ps(mx(t))}" src="${ps(o)}">
		<canvas class="visit-grain" aria-hidden="true"></canvas>
		<div class="visit-vignette" aria-hidden="true"></div>
		<div class="visit-bar top" aria-hidden="true"></div>
		<div class="visit-bar bottom" aria-hidden="true"></div>
		<div class="visit-title">
			<span class="visit-kicker">A visit</span>
			<span class="visit-name">${ps(t.title)}</span>
			<span class="visit-meta">${ps(mx(t))}</span>
		</div>
		<button type="button" class="visit-close" aria-label="Return to the gallery">\xD7</button>
		<button type="button" class="visit-skip">Skip</button>
		<div class="visit-end">
			<button type="button" class="primary" data-act="back">Return to the gallery</button>
			<button type="button" data-act="again">Watch again</button>
		</div>`,document.body.appendChild(r);let n=r.querySelector("video"),a=r.querySelector(".visit-title"),s=jk(r.querySelector(".visit-grain")),i=[],c=(m,g)=>i.push(setTimeout(m,g)),h=m=>m.stopPropagation();["mousedown","pointerdown","click","wheel","touchstart","touchmove"].forEach(m=>r.addEventListener(m,h));let l=m=>{m.key==="Escape"?(m.preventDefault(),v()):m.key===" "&&!(m.target&&m.target.tagName==="BUTTON")&&(m.preventDefault(),p()),m.stopImmediatePropagation()};window.addEventListener("keydown",l,!0);let d=m=>m.stopImmediatePropagation();window.addEventListener("keyup",d,!0);let u=!1;function p(){u||(u=!0,a.classList.add("on"),r.classList.add("resolved"),c(()=>{let m=r.querySelector('[data-act="back"]');m&&m.focus({preventScroll:!0})},1300))}function f(){u=!1,r.classList.remove("resolved"),a.classList.remove("on");try{n.currentTime=0}catch(g){}let m=n.play();m&&m.catch&&m.catch(()=>p()),r.classList.add("playing"),c(()=>{u||a.classList.add("on")},1600),c(()=>{u||a.classList.remove("on")},6200)}n.addEventListener("timeupdate",()=>{n.duration&&n.currentTime>n.duration-1.2&&p()}),n.addEventListener("ended",p),n.addEventListener("error",p);function v(){if(ef){ef=null,i.forEach(clearTimeout),r.classList.remove("on");try{n.pause()}catch(m){}window.removeEventListener("keydown",l,!0),window.removeEventListener("keyup",d,!0),document.body.classList.remove("visiting"),setTimeout(()=>{s(),r.remove(),e&&e.focus&&e.focus({preventScroll:!0})},1150)}}r.querySelector(".visit-close").addEventListener("click",v),r.querySelector(".visit-skip").addEventListener("click",()=>{try{n.pause()}catch(m){}p()}),r.querySelector(".visit-end").addEventListener("click",m=>{let g=m.target.closest("button");g&&(g.dataset.act==="back"&&v(),g.dataset.act==="again"&&(i.forEach(clearTimeout),f()))}),n.src=t.visit.video,ef={close:v},requestAnimationFrame(()=>{r.classList.add("on"),c(f,1300)})}var xx={};function Vk(t){if(!t||!t.visit||xx[t.visit.video]||!Ld())return;xx[t.visit.video]=!0;let e=document.createElement("link");e.rel="preload",e.as="video",e.href=t.visit.video,document.head.appendChild(e)}wx.exports={available:Ld,button:Bk,open:Wk,warm:Vk,get active(){return!!ef}}});var kx=At((TA,Mx)=>{"use strict";var Xk=zr(),Ec=[0,0],_c=[0,0],$a=null,Od=0;if(typeof window!="undefined"){window.addEventListener("pointermove",e=>{e.pointerType!=="touch"&&(Ec[0]=Math.max(-1,Math.min(1,e.clientX/window.innerWidth*2-1)),Ec[1]=Math.max(-1,Math.min(1,e.clientY/window.innerHeight*2-1)),Od=performance.now())},{passive:!0});let t=()=>{Od=performance.now()};["wheel","touchstart","touchmove","keydown","pointerdown"].forEach(e=>window.addEventListener(e,t,{passive:!0,capture:!0})),window.addEventListener("deviceorientation",e=>{e.gamma===null||e.beta===null||($a||($a=[e.gamma,e.beta]),$a[0]+=(e.gamma-$a[0])*.01,$a[1]+=(e.beta-$a[1])*.01,Ec[0]=Math.max(-1,Math.min(1,(e.gamma-$a[0])/14)),Ec[1]=Math.max(-1,Math.min(1,(e.beta-$a[1])/14)))},{passive:!0})}var _x=0,Mc=null,o1=null,ma=[0,0,0],Rd=0,kc=null,Sc=0,li={eye:[0,0,0],target:[0,0,0],fov:50,roll:0},Yk={apply(t,e){let o=Math.min(.1,Math.max(0,e-_x));_x=e;let r=t.eye,n=t.target,a=[n[0]-r[0],n[1]-r[1],n[2]-r[2]],s=Math.hypot(a[0],a[1],a[2])||1;a=[a[0]/s,a[1]/s,a[2]/s];let i=[-a[2],0,a[0]],c=Math.hypot(i[0],i[2])||1;i=[i[0]/c,0,i[2]/c];let h=[i[1]*a[2]-i[2]*a[1],i[2]*a[0]-i[0]*a[2],i[0]*a[1]-i[1]*a[0]],l=!Mc;if(Mc&&o>0){let y=[r[0]-Mc[0],r[1]-Mc[1],r[2]-Mc[2]],w=Math.hypot(y[0],y[1],y[2]);if(w>2.5)l=!0;else{let _=Math.min(1,o*5);for(let S=0;S<3;S++)ma[S]+=(y[S]/o-ma[S])*_}let M=Math.hypot(n[0]-o1[0],n[1]-o1[1],n[2]-o1[2]);Sc=w/o<.12&&M/o<.2?Sc+o:0}l&&(ma[0]=ma[1]=ma[2]=0,Sc=0),Mc=r.slice(),o1=n.slice(),Rd=Math.hypot(ma[0],ma[1],ma[2]);let d=Math.min(1,o*2.6);_c[0]+=(Ec[0]-_c[0])*d,_c[1]+=(Ec[1]-_c[1])*d;let u=Math.max(.03,Math.min(.32,s*.05)),p=(Xk.isPhone&&!$a?1.5:1)*Math.min(1,Sc/2.5),f=(Math.sin(e*.131)*.55+Math.sin(e*.071+1.3)*.45)*u*.55*p,v=Math.sin(e*.097+.6)*u*.16*p,m=_c[0]*u+f,g=-_c[1]*u*.45+v;for(let y=0;y<3;y++)li.eye[y]=r[y]+i[y]*m+h[y]*g,li.target[y]=n[y]+(i[y]*m+h[y]*g)*.12;r[1]>.05&&(li.eye[1]=Math.max(.05,li.eye[1]));let x=ma[0]*i[0]+ma[2]*i[2];return li.fov=t.fov+Math.min(3.5,Rd*.55),li.roll=(t.roll||0)+Math.max(-.035,Math.min(.035,-x*.006)),li},pull(t,e){(kc===null||!(Math.abs(t.focus-kc)<40))&&(kc=t.focus);let o=1/60;kc+=(t.focus-kc)*Math.min(1,o*3.2),t.focus=kc,t.aperture>0&&(t.aperture*=1+.25*Math.min(1,Sc/3))},get speed(){return Rd},get resting(){return Sc>2&&performance.now()-Od>2e3}};Mx.exports=Yk});var Cd=At((LA,Sx)=>{Sx.exports=1e-6});var Pd=At((NA,Ex)=>{Ex.exports=Kk;function Kk(){var t=new Float32Array(3);return t[0]=0,t[1]=0,t[2]=0,t}});var Ax=At((RA,zx)=>{zx.exports=Qk;function Qk(t){var e=new Float32Array(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}});var $d=At((OA,Tx)=>{Tx.exports=Zk;function Zk(t,e,o){var r=new Float32Array(3);return r[0]=t,r[1]=e,r[2]=o,r}});var Id=At((CA,Lx)=>{Lx.exports=Jk;function Jk(t,e){var o=e[0],r=e[1],n=e[2],a=o*o+r*r+n*n;return a>0&&(a=1/Math.sqrt(a),t[0]=e[0]*a,t[1]=e[1]*a,t[2]=e[2]*a),t}});var qd=At((PA,Nx)=>{Nx.exports=tS;function tS(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}});var Px=At(($A,Cx)=>{Cx.exports=oS;var Rx=$d(),Ox=Id(),eS=qd();function oS(t,e){var o=Rx(t[0],t[1],t[2]),r=Rx(e[0],e[1],e[2]);Ox(o,o),Ox(r,r);var n=eS(o,r);return n>1?0:Math.acos(n)}});var Ix=At((IA,$x)=>{$x.exports=nS;function nS(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}});var Dx=At((qA,qx)=>{qx.exports=rS;function rS(t,e,o,r){return t[0]=e,t[1]=o,t[2]=r,t}});var Gx=At((DA,Fx)=>{Fx.exports=aS;var Dd=Cd();function aS(t,e){var o=t[0],r=t[1],n=t[2],a=e[0],s=e[1],i=e[2];return Math.abs(o-a)<=Dd*Math.max(1,Math.abs(o),Math.abs(a))&&Math.abs(r-s)<=Dd*Math.max(1,Math.abs(r),Math.abs(s))&&Math.abs(n-i)<=Dd*Math.max(1,Math.abs(n),Math.abs(i))}});var Ux=At((FA,Hx)=>{Hx.exports=sS;function sS(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}});var jx=At((GA,Bx)=>{Bx.exports=iS;function iS(t,e,o){return t[0]=e[0]+o[0],t[1]=e[1]+o[1],t[2]=e[2]+o[2],t}});var Fd=At((HA,Wx)=>{Wx.exports=cS;function cS(t,e,o){return t[0]=e[0]-o[0],t[1]=e[1]-o[1],t[2]=e[2]-o[2],t}});var Xx=At((UA,Vx)=>{Vx.exports=Fd()});var Gd=At((BA,Yx)=>{Yx.exports=lS;function lS(t,e,o){return t[0]=e[0]*o[0],t[1]=e[1]*o[1],t[2]=e[2]*o[2],t}});var Qx=At((jA,Kx)=>{Kx.exports=Gd()});var Hd=At((WA,Zx)=>{Zx.exports=fS;function fS(t,e,o){return t[0]=e[0]/o[0],t[1]=e[1]/o[1],t[2]=e[2]/o[2],t}});var t5=At((VA,Jx)=>{Jx.exports=Hd()});var o5=At((XA,e5)=>{e5.exports=hS;function hS(t,e,o){return t[0]=Math.min(e[0],o[0]),t[1]=Math.min(e[1],o[1]),t[2]=Math.min(e[2],o[2]),t}});var r5=At((YA,n5)=>{n5.exports=uS;function uS(t,e,o){return t[0]=Math.max(e[0],o[0]),t[1]=Math.max(e[1],o[1]),t[2]=Math.max(e[2],o[2]),t}});var s5=At((KA,a5)=>{a5.exports=dS;function dS(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t[2]=Math.floor(e[2]),t}});var c5=At((QA,i5)=>{i5.exports=pS;function pS(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t[2]=Math.ceil(e[2]),t}});var f5=At((ZA,l5)=>{l5.exports=vS;function vS(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t[2]=Math.round(e[2]),t}});var u5=At((JA,h5)=>{h5.exports=mS;function mS(t,e,o){return t[0]=e[0]*o,t[1]=e[1]*o,t[2]=e[2]*o,t}});var p5=At((t7,d5)=>{d5.exports=gS;function gS(t,e,o,r){return t[0]=e[0]+o[0]*r,t[1]=e[1]+o[1]*r,t[2]=e[2]+o[2]*r,t}});var Ud=At((e7,v5)=>{v5.exports=xS;function xS(t,e){var o=e[0]-t[0],r=e[1]-t[1],n=e[2]-t[2];return Math.sqrt(o*o+r*r+n*n)}});var g5=At((o7,m5)=>{m5.exports=Ud()});var Bd=At((n7,x5)=>{x5.exports=yS;function yS(t,e){var o=e[0]-t[0],r=e[1]-t[1],n=e[2]-t[2];return o*o+r*r+n*n}});var b5=At((r7,y5)=>{y5.exports=Bd()});var jd=At((a7,w5)=>{w5.exports=bS;function bS(t){var e=t[0],o=t[1],r=t[2];return Math.sqrt(e*e+o*o+r*r)}});var M5=At((s7,_5)=>{_5.exports=jd()});var Wd=At((i7,k5)=>{k5.exports=wS;function wS(t){var e=t[0],o=t[1],r=t[2];return e*e+o*o+r*r}});var E5=At((c7,S5)=>{S5.exports=Wd()});var A5=At((l7,z5)=>{z5.exports=_S;function _S(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}});var L5=At((f7,T5)=>{T5.exports=MS;function MS(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}});var R5=At((h7,N5)=>{N5.exports=kS;function kS(t,e,o){var r=e[0],n=e[1],a=e[2],s=o[0],i=o[1],c=o[2];return t[0]=n*c-a*i,t[1]=a*s-r*c,t[2]=r*i-n*s,t}});var C5=At((u7,O5)=>{O5.exports=SS;function SS(t,e,o,r){var n=e[0],a=e[1],s=e[2];return t[0]=n+r*(o[0]-n),t[1]=a+r*(o[1]-a),t[2]=s+r*(o[2]-s),t}});var $5=At((d7,P5)=>{P5.exports=ES;function ES(t,e){e=e||1;var o=Math.random()*2*Math.PI,r=Math.random()*2-1,n=Math.sqrt(1-r*r)*e;return t[0]=Math.cos(o)*n,t[1]=Math.sin(o)*n,t[2]=r*e,t}});var q5=At((p7,I5)=>{I5.exports=zS;function zS(t,e,o){var r=e[0],n=e[1],a=e[2],s=o[3]*r+o[7]*n+o[11]*a+o[15];return s=s||1,t[0]=(o[0]*r+o[4]*n+o[8]*a+o[12])/s,t[1]=(o[1]*r+o[5]*n+o[9]*a+o[13])/s,t[2]=(o[2]*r+o[6]*n+o[10]*a+o[14])/s,t}});var F5=At((v7,D5)=>{D5.exports=AS;function AS(t,e,o){var r=e[0],n=e[1],a=e[2];return t[0]=r*o[0]+n*o[3]+a*o[6],t[1]=r*o[1]+n*o[4]+a*o[7],t[2]=r*o[2]+n*o[5]+a*o[8],t}});var H5=At((m7,G5)=>{G5.exports=TS;function TS(t,e,o){var r=e[0],n=e[1],a=e[2],s=o[0],i=o[1],c=o[2],h=o[3],l=h*r+i*a-c*n,d=h*n+c*r-s*a,u=h*a+s*n-i*r,p=-s*r-i*n-c*a;return t[0]=l*h+p*-s+d*-c-u*-i,t[1]=d*h+p*-i+u*-s-l*-c,t[2]=u*h+p*-c+l*-i-d*-s,t}});var B5=At((g7,U5)=>{U5.exports=LS;function LS(t,e,o,r){var n=o[1],a=o[2],s=e[1]-n,i=e[2]-a,c=Math.sin(r),h=Math.cos(r);return t[0]=e[0],t[1]=n+s*h-i*c,t[2]=a+s*c+i*h,t}});var W5=At((x7,j5)=>{j5.exports=NS;function NS(t,e,o,r){var n=o[0],a=o[2],s=e[0]-n,i=e[2]-a,c=Math.sin(r),h=Math.cos(r);return t[0]=n+i*c+s*h,t[1]=e[1],t[2]=a+i*h-s*c,t}});var X5=At((y7,V5)=>{V5.exports=RS;function RS(t,e,o,r){var n=o[0],a=o[1],s=e[0]-n,i=e[1]-a,c=Math.sin(r),h=Math.cos(r);return t[0]=n+s*h-i*c,t[1]=a+s*c+i*h,t[2]=e[2],t}});var K5=At((b7,Y5)=>{Y5.exports=OS;var vs=Pd()();function OS(t,e,o,r,n,a){var s,i;for(e||(e=3),o||(o=0),r?i=Math.min(r*e+o,t.length):i=t.length,s=o;s<i;s+=e)vs[0]=t[s],vs[1]=t[s+1],vs[2]=t[s+2],n(vs,vs,a),t[s]=vs[0],t[s+1]=vs[1],t[s+2]=vs[2];return t}});var Z5=At((w7,Q5)=>{Q5.exports={EPSILON:Cd(),create:Pd(),clone:Ax(),angle:Px(),fromValues:$d(),copy:Ix(),set:Dx(),equals:Gx(),exactEquals:Ux(),add:jx(),subtract:Fd(),sub:Xx(),multiply:Gd(),mul:Qx(),divide:Hd(),div:t5(),min:o5(),max:r5(),floor:s5(),ceil:c5(),round:f5(),scale:u5(),scaleAndAdd:p5(),distance:Ud(),dist:g5(),squaredDistance:Bd(),sqrDist:b5(),length:jd(),len:M5(),squaredLength:Wd(),sqrLen:E5(),negate:A5(),inverse:L5(),normalize:Id(),dot:qd(),cross:R5(),lerp:C5(),random:$5(),transformMat4:q5(),transformMat3:F5(),transformQuat:H5(),rotateX:B5(),rotateY:W5(),rotateZ:X5(),forEach:K5()}});var ey=At((_7,ty)=>{"use strict";function J5(){let t={};return{on(e,o){return(t[e]=t[e]||[]).push(o),this},emit(e,o){(t[e]||[]).slice().forEach(r=>r(o))}}}ty.exports=function(e){let o=e.ownerDocument||document,r=J5(),n=null,a={dx:0,dy:0,dt:0},s=0,i=()=>o.pointerLockElement||o.webkitPointerLockElement||null,c=()=>{if(i())return;let l=e.requestPointerLock||e.webkitRequestPointerLock;if(l)try{let d=l.call(e);d&&d.catch&&d.catch(()=>{})}catch(d){}};e.addEventListener("mousedown",c,!1);let h=()=>{if(!i()){n&&(r.emit("release"),n.emit("end"),n=null);return}n=J5(),s=Date.now(),r.emit("attain",n)};return o.addEventListener("pointerlockchange",h),o.addEventListener("webkitpointerlockchange",h),o.addEventListener("pointerlockerror",()=>r.emit("error")),(o.body||e).addEventListener("mousemove",l=>{n&&(a.dx=l.movementX||l.webkitMovementX||0,a.dy=l.movementY||l.webkitMovementY||0,a.dt=Date.now()-s,r.emit("data",a),n.emit("data",a))},!1),r.request=c,r.target=i,r.release=()=>{i()&&(o.exitPointerLock||o.webkitExitPointerLock).call(o)},r}});var sy=At((S7,ay)=>{"use strict";var fi=cc(),hi=Z5(),CS=ey(),M7=Math.PI/4,k7=Math.PI/6,oy=2,PS=1,$S=2.4,IS=2.4,qS=1e3,DS=5,FS=7,Vd=S0().C,of=[[7,1.6],[7,Vd.zc],[Vd.x1-2.95,Vd.zc]],ms=of.slice(1).map((t,e)=>{let o=of[e],r=t[0]-o[0],n=t[1]-o[1],a=Math.hypot(r,n);return{a:o,len:a,dir:[r/a,n/a]}}),Xd=ms.reduce((t,e)=>t+e.len,0);function ny(t){let e=Math.max(0,Math.min(Xd,t));for(let r of ms){if(e<=r.len)return[r.a[0]+r.dir[0]*e,r.a[1]+r.dir[1]*e];e-=r.len}let o=of[of.length-1];return[o[0],o[1]]}function GS(t){let e=0;for(let r=0;r<ms.length;r++){let n=ms[r],a=e+n.len;if(t<a-1e-4||r===ms.length-1){let s=n.dir,c=t<=e+1e-4&&r>0?ms[r-1].dir:n.dir;return{ahead:s,back:[-c[0],-c[1]]}}e=a}let o=ms[ms.length-1].dir;return{ahead:o,back:[-o[0],-o[1]]}}var HS=Math.PI/4,US=7,BS=140,jS=70,ry=(t,e,o)=>(1-t)*e+t*o,WS=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;ay.exports=function({getGridSegments:t,getGridParts:e},o){var r=[0,Math.PI],n=[0,Math.PI],a=0,s=[0,0,0],i=[FS,oy,of[0][1]],c=0,h=1,l=0,d=[.707,0,.707],u=[0,1,0],p=[0,0,0],f=.5,v=fi.identity([]),m=fi.identity([]),g=!1,x=[0,0,0],y=[0,0,0],w=1,M=!1;let _=it=>{r[1]+=it*HS},S=(it,Mt,Vt)=>{if(it=Math.max(Math.min(it,100),-100),Mt=Math.max(Math.min(Mt,100),-100),r[0]=0,M){a=0;return}for(a+=it;a>=Vt;)_(1),a-=Vt;for(;a<=-Vt;)_(-1),a+=Vt};CS(document.body).on("attain",it=>{it.on("data",Mt=>{S(Mt.dx,Mt.dy,BS)})});let T=null,H=null,q=0,W={x:0,y:0},F=58,j=document.createElement("div");j.id="museum-mobile-controls",j.innerHTML=`

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
	`,document.body.appendChild(j);let pt=j.querySelector("#museum-joystick"),Ht=j.querySelector("#museum-joystick-knob"),Nt=()=>{Ht.style.transform="translate(-50%, -50%)",s[0]=0,s[2]=0},xt=it=>{let Mt=it.clientX-W.x,Vt=it.clientY-W.y,he=Math.hypot(Mt,Vt);if(he>F&&(Mt=Mt/he*F,Vt=Vt/he*F),Ht.style.transform=`translate(
				calc(-50% + ${Mt}px),
				calc(-50% + ${Vt}px)
			)`,he<10){s[0]=0,s[2]=0;return}let Qt=Mt/F,Wt=Vt/F;s[0]=0,s[2]=Math.abs(Wt)>.15?Wt:0},ot=(it,Mt)=>{for(let Vt=0;Vt<it.length;Vt++)if(it[Vt].identifier===Mt)return it[Vt];return null},Bt=it=>!!(it&&it.closest&&it.closest(".painting-plaque, .story-overlay, .story-card, .story-close, button")),Se=it=>{if(!Bt(it.target)&&(it.cancelable&&it.preventDefault(),!M))for(let Mt=0;Mt<it.changedTouches.length;Mt++){let Vt=it.changedTouches[Mt];if(T===null&&Vt.clientX<window.innerWidth*.48){T=Vt.identifier;let he=pt.getBoundingClientRect();W.x=he.left+he.width/2,W.y=he.top+he.height/2,xt(Vt)}else H===null&&Vt.clientX>=window.innerWidth*.48&&(H=Vt.identifier,q=Vt.clientX,a=0)}},be=it=>{if(Bt(it.target)||(it.cancelable&&it.preventDefault(),M))return;let Mt=T===null?null:ot(it.touches,T);Mt&&xt(Mt);let Vt=H===null?null:ot(it.touches,H);if(Vt){let he=Vt.clientX-q;q=Vt.clientX,S(he,0,jS)}},Ke=it=>{if(!Bt(it.target)){it.cancelable&&it.preventDefault();for(let Mt=0;Mt<it.changedTouches.length;Mt++){let Vt=it.changedTouches[Mt];Vt.identifier===T&&(T=null,Nt()),Vt.identifier===H&&(H=null)}}};document.addEventListener("touchstart",Se,{passive:!1}),document.addEventListener("touchmove",be,{passive:!1}),document.addEventListener("touchend",Ke,{passive:!1}),document.addEventListener("touchcancel",Ke,{passive:!1});let $e=document.createElement("style");$e.textContent=`

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
	`,document.head.appendChild($e);var no={};let rt=it=>{if(it.defaultPrevented||it.ctrlKey||it.altKey||it.metaKey)return;let Mt=it.type==="keydown";no[it.code]=Mt,Mt&&!it.repeat&&!M&&((it.code==="KeyA"||it.code==="ArrowLeft")&&_(-1),(it.code==="KeyD"||it.code==="ArrowRight")&&_(1)),g=!1;let Vt=no.KeyW||no.ArrowUp?1:0;s=[0,0,(no.KeyS||no.ArrowDown?1:0)-Vt],it.preventDefault()};window.addEventListener("keydown",rt),window.addEventListener("keyup",rt);var yt=0;return{pos:i,fmouse:n,forward:d,up:u,setPaused:it=>{M=!!it,M&&(s[0]=0,s[2]=0,Nt())},place:(it,Mt)=>{c=Math.max(0,Math.min(Xd,it));let Vt=ny(c);i[0]=Vt[0],i[2]=Vt[1],r[1]=Mt,n[1]=Mt,a=0,h=1},view:()=>v,proj:()=>(fi.perspective(m,o(),window.innerWidth/window.innerHeight,.1,700),m),tick:({time:it})=>{let Mt=it-yt;yt=it;let Vt=[0,0,0],he=[];hi.set(d,Math.sin(n[1]),0,-Math.cos(n[1])),hi.set(u,0,1,0);let Ne=g?IS:$S,Qt=Math.sin(r[1]),Wt=-Math.cos(r[1]),ct=GS(c),Zt=Qt*ct.ahead[0]+Wt*ct.ahead[1],de=Qt*ct.back[0]+Wt*ct.back[1],se=h;Math.max(Zt,de)>.3&&(se=Zt>=de?1:-1);let Rt=M?0:-s[2]*Ne;l+=(Rt-l)*(1-Math.exp(-Math.min(Mt,.1)*5.5)),Rt===0&&Math.abs(l)<.01&&(l=0);let Ue=l*se*Math.min(Mt,.1);M&&(s[0]=0,s[2]=0,Ue=0,l=0),Ue!==0&&(h=Math.sign(Ue)*Math.sign(-s[2]||1)),c=Math.max(0,Math.min(Xd,c+Ue));let k=ny(c);hi.set(p,k[0]-i[0],0,k[1]-i[2]);let Be=hi.len(p);Be===0&&f!==.25&&(f=(Math.abs((f+.5)%1-.5)-.25)*.8+.25,(f+.01)%.25<.02&&(f=.25));let Xe=f;if(f+=Be/(g?DS:qS),i[1]=oy,hi.add(i,i,p),w<1){w+=Mt/PS,w=Math.min(w,1);let mo=WS(w);hi.set(i,ry(mo,x[0],y[0]),i[1],ry(mo,x[2],y[2]))}n[0]=0,n[1]+=(r[1]-n[1])*Math.min(1,Math.min(Mt,.1)*US),Math.abs(r[1]-n[1])<5e-4&&(n[1]=r[1]),fi.identity(v),fi.rotateX(v,v,0),fi.rotateY(v,v,n[1]),fi.translate(v,v,hi.scale(Vt,i,-1))}}}});var ly=At((E7,cy)=>{"use strict";var{skylightGLSL:VS,Z_START:XS,Z_END:YS,GLASS_Y:KS}=Ki(),{oculusGLSL:QS,A:ui}=Lr(),{windowLightGLSL:ZS,C:n1}=S0(),{doorLightGLSL:JS}=Va(),r1=l0(),nf=Nh(),iy=Ks(),Cr=t=>t.toFixed(4),Yd=.1,Kd=700,zc={exposure:.88,shafts:1,bloom:1,vignette:.42,grain:.032};function tE(t,e){let o=e[0],r=e[1],n=e[2],a=e[3],s=e[4],i=e[5],c=e[6],h=e[7],l=e[8],d=e[9],u=e[10],p=e[11],f=e[12],v=e[13],m=e[14],g=e[15],x=o*i-r*s,y=o*c-n*s,w=o*h-a*s,M=r*c-n*i,_=r*h-a*i,S=n*h-a*c,R=l*v-d*f,T=l*m-u*f,H=l*g-p*f,q=d*m-u*v,W=d*g-p*v,F=u*g-p*m,j=x*F-y*W+w*q+M*H-_*T+S*R;return j?(j=1/j,t[0]=(i*F-c*W+h*q)*j,t[1]=(n*W-r*F-a*q)*j,t[2]=(v*S-m*_+g*M)*j,t[3]=(u*_-d*S-p*M)*j,t[4]=(c*H-s*F-h*T)*j,t[5]=(o*F-n*H+a*T)*j,t[6]=(m*w-f*S-g*y)*j,t[7]=(l*S-u*w+p*y)*j,t[8]=(s*W-i*H+h*R)*j,t[9]=(r*H-o*W-a*R)*j,t[10]=(f*_-v*w+g*x)*j,t[11]=(d*w-l*_-p*x)*j,t[12]=(i*T-s*q-c*R)*j,t[13]=(o*q-r*T+n*R)*j,t[14]=(v*y-f*M-m*x)*j,t[15]=(l*M-d*y+u*x)*j,t):null}function eE(t,e,o){let r=new Array(16);for(let n=0;n<4;n++)for(let a=0;a<4;a++){let s=0;for(let i=0;i<4;i++)s+=e[i*4+a]*o[n*4+i];r[n*4+a]=s}for(let n=0;n<16;n++)t[n]=r[n];return t}var oE=`
precision highp float;
attribute vec2 position;
varying vec2 uv;
void main() {
	uv = position * 0.5 + 0.5;
	gl_Position = vec4(position, 0.0, 1.0);
}`;cy.exports=(t,e)=>{let o=!!e.isPhone,r=t.hasExtension("webgl_depth_texture"),n=o?10:18,a=()=>e.post>=2?2:4,s=ot=>t.texture(Object.assign({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"},ot||{})),i=()=>t.framebuffer({color:s(),depth:!1}),c=s(),h=r?t.texture({width:4,height:4,format:"depth",type:"uint32"}):null,l=t.framebuffer({color:c,depth:h||!0}),d=[i(),i()],u=[i(),i()],p=[i(),i()],f=[i(),i()],v=new Array(16).fill(0),m=new Array(16).fill(0),g=[0,0,0],x={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},y={position:[-1,-1,3,-1,-1,3]},w=(ot,Bt,Se)=>t(Object.assign({vert:oE,frag:ot,attributes:y,count:3,depth:{enable:!1,mask:!1},cull:{enable:!1},blend:{enable:!1},uniforms:Bt,framebuffer:t.prop("out")},Se||{})),M=[2.6,0,XS-3.2,12.6,KS,YS+.4],_=[ui.x0-.2,0,ui.z0,ui.x1,ui.domeTop,ui.z1],S=[n1.x0,0,n1.z0,n1.x1,7.6,n1.z1],R=[.35,0,.35,13.65,7.6,9],T=iy.AIR_BOX,H=ot=>`vec3(${Cr(ot[0])}, ${Cr(ot[1])}, ${Cr(ot[2])}), vec3(${Cr(ot[3])}, ${Cr(ot[4])}, ${Cr(ot[5])})`,q=w(`
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

	${VS()}
	${QS()}
	${ZS()}
	${JS()}
	${iy.sunGLSL()}

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
			vec2 t = hitBox(eye, rd, ${H(M)});
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
			vec2 t = hitBox(eye, rd, ${H(_)});
			t.y = min(t.y, len);
			if (t.y > t.x) {
				float st = (t.y - t.x) / float(N);
				float acc = 0.0;
				for (int i = 0; i < N; i++) {
					vec3 p = eye + rd * (t.x + (float(i) + jit) * st);
					if (p.y < ${Cr(ui.dome.base)} && p.x > ${Cr(ui.x0-.1)}) acc += oculusOpen(p) * treeShade(p) * air(p);
				}
				float ph = phase(dot(rd, SHAFT), 0.6) + 0.05;
				sum += mix(vec3(1.0, 0.88, 0.68), vec3(0.62, 0.74, 1.0) * 1.2, night) * acc * st * ph * strength.y;
			}
		}

		// the corridor windows
		if (strength.z > 0.0) {
			vec2 t = hitBox(eye, rd, ${H(S)});
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
			vec2 t = hitBox(eye, rd, ${H(R)});
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
			vec2 t = hitBox(eye, rd, ${H(T)});
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
	}`,{depthTex:()=>h,invVP:()=>v,eye:()=>g,time:t.context("time"),night:()=>r1.night,strength:()=>W,strength5:()=>F}),W=[0,0,0,0],F=0;function j(){let ot=zc.shafts*x.shafts,Bt=r1.night;return W[0]=nf.box(M)?.06*ot*(1+.9*Bt):0,W[1]=nf.box(_,!1,"court")?.1*ot*(1+.9*Bt):0,W[2]=nf.box(S)?.07*ot*(1+.4*Bt):0,W[3]=nf.box(R)?.04*ot*(1-.75*Bt):0,nf.zone==="studio"?(W[0]=W[1]=W[2]=W[3]=0,F=.03*ot*(1+1.3*Bt)):F=0,W[0]+W[1]+W[2]+W[3]+F>5e-4}let pt=w(`
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
	}`,{src:t.prop("src"),dir:(ot,Bt)=>[Bt.dir[0]/Bt.size[0],Bt.dir[1]/Bt.size[1]]}),Ht=w(`
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
		return 2.0 * ${Cr(Yd)} * ${Cr(Kd)} / (${Cr(Kd+Yd)} - z * ${Cr(Kd-Yd)});
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
	}`,{scene:()=>c,depthTex:()=>h||c,soft:()=>d[0],bloomA:()=>u[0],bloomB:()=>p[0],shafts:()=>f[0],res:()=>[l.width,l.height],time:t.context("time"),exposure:()=>zc.exposure*x.exposure,vignette:()=>Math.min(1,zc.vignette+x.vignette+.22*r1.night),night:()=>r1.night,grain:()=>zc.grain,bloomK:()=>zc.bloom,letterbox:()=>x.letterbox,fade:()=>x.fade,fadeColor:()=>x.fadeColor,aperture:()=>e.post>=2?x.aperture:0,focus:()=>x.focus,hasDepth:r?1:0},{framebuffer:null}),xt=t({framebuffer:()=>l});return{shot:x,look:zc,hasDepth:r,capture(ot,Bt,Se){let be=Math.max(.4,Math.min(1,e.scale||1)),Ke=Math.max(2,Math.round(ot.drawingBufferWidth*be/2)*2),$e=Math.max(2,Math.round(ot.drawingBufferHeight*be/2)*2);(l.width!==Ke||l.height!==$e)&&l.resize(Ke,$e);let no=Math.max(1,Math.ceil(Ke/2)),rt=Math.max(1,Math.ceil($e/2));d.forEach(yt=>yt.resize(no,rt)),u.forEach(yt=>yt.resize(Math.max(1,Math.ceil(Ke/4)),Math.max(1,Math.ceil($e/4)))),p.forEach(yt=>yt.resize(Math.max(1,Math.ceil(Ke/8)),Math.max(1,Math.ceil($e/8)))),f.forEach(yt=>yt.resize(Math.max(1,Math.ceil(Ke/a())),Math.max(1,Math.ceil($e/a())))),eE(m,Bt.proj,Bt.view),tE(v,m),g[0]=Bt.eye[0],g[1]=Bt.eye[1],g[2]=Bt.eye[2],xt(()=>{t.clear({color:[0,0,0,1],depth:1}),Se()})},present(){let ot=Bt=>[Bt.width,Bt.height];r&&e.post>=1&&j()?(q({out:f[0]}),pt({out:f[1],src:f[0],dir:[1,0],size:ot(f[0])}),pt({out:f[0],src:f[1],dir:[0,1],size:ot(f[0])})):t.clear({color:[0,0,0,1],framebuffer:f[0]}),Ht({out:d[0],src:c,size:[l.width,l.height],threshold:0}),pt({out:d[1],src:d[0],dir:[1,0],size:ot(d[0])}),pt({out:d[0],src:d[1],dir:[0,1],size:ot(d[0])}),Ht({out:u[0],src:d[0],size:ot(d[0]),threshold:.42}),pt({out:u[1],src:u[0],dir:[1,0],size:ot(u[0])}),pt({out:u[0],src:u[1],dir:[0,1],size:ot(u[0])}),Ht({out:p[0],src:u[0],size:ot(u[0]),threshold:0}),pt({out:p[1],src:p[0],dir:[1.5,0],size:ot(p[0])}),pt({out:p[0],src:p[1],dir:[0,1.5],size:ot(p[0])}),Nt({out:null})}}}});var py=At((z7,dy)=>{"use strict";var fy=l0().GLSL,nE=Ds(),Qd=Va(),{C:rE,FAR_DOOR:aE}=S0(),sE=100*Math.PI/180,hy=t=>[aE.x-t[2],t[1],rE.zc-7+t[0]],uy=t=>[-t[2],t[1],t[0]];function iE(t){let e=[],o=[],r=[],n=[],a=nE.createBuilder(e,o,r,n);Qd.addFrames(a,t);let s=Qd.glassPanes(t),i=c=>{let h=[];for(let l=0;l<c.length;l+=3)h.push([c[l],c[l+1],c[l+2]]);return h};return{position:i(e),normal:i(o),elements:r,glass:s}}dy.exports=t=>{let e=Qd.DOOR,o=["left","right"].map(l=>{let d=iE(l),u=d.position.length;return{part:l,hinge:l==="left"?e.x0:e.x1,sign:l==="left"?-1:1,src:d.position.map(p=>p.slice()),srcN:d.normal.map(p=>p.slice()),srcG:d.glass.map(p=>p.slice()),pos:t.buffer({data:new Float32Array(u*3),usage:"dynamic"}),nrm:t.buffer({data:new Float32Array(u*3),usage:"dynamic"}),gpos:t.buffer({data:new Float32Array(d.glass.length*3),usage:"dynamic"}),gnrm:t.buffer({data:new Float32Array(d.glass.length*3),usage:"dynamic"}),el:t.elements({data:new Uint32Array(d.elements),type:"uint32"}),glassCount:d.glass.length,outP:new Float32Array(u*3),outN:new Float32Array(u*3),outG:new Float32Array(d.glass.length*3),outGN:new Float32Array(d.glass.length*3)}}),r=null;function n(l){if(l!==r){r=l;for(let d of o){let u=d.sign*l,p=Math.cos(u),f=Math.sin(u),v=x=>{let y=x[0]-d.hinge,w=x[2];return[d.hinge+y*p+w*f,x[1],-y*f+w*p]},m=x=>[x[0]*p+x[2]*f,x[1],-x[0]*f+x[2]*p];d.src.forEach((x,y)=>{let w=hy(v(x));d.outP.set(w,y*3),d.outN.set(uy(m(d.srcN[y])),y*3)});let g=uy(m([0,0,1]));d.srcG.forEach((x,y)=>{d.outG.set(hy(v(x)),y*3),d.outGN.set(g,y*3)}),d.pos.subdata(d.outP),d.nrm.subdata(d.outN),d.gpos.subdata(d.outG),d.gnrm.subdata(d.outGN)}}}n(0);let a=`
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
		${fy}
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
		${fy}
		varying vec3 v_pos, v_n, v_eye;
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			float c = abs(dot(V, normalize(v_n)));
			float fres = pow(1.0 - c, 3.0);
			float d = (v_pos.x + v_pos.z) * 0.55 + v_pos.y * 0.85;
			float sheen = smoothstep(0.35, 0.0, abs(fract(d * 0.22) - 0.5)) * 0.05;
			float a = 0.05 + 0.32 * fres + sheen;
			gl_FragColor = vec4(toNight(mix(vec3(0.80, 0.86, 0.90), vec3(1.0, 0.95, 0.86), 0.4), 0.22), a);
		}`,attributes:{position:t.prop("pos"),normal:t.prop("nrm")},count:t.prop("count"),cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}}),c=0,h=()=>{n(c*sE);for(let l of o)s({pos:l.pos,nrm:l.nrm,el:l.el})};return h.glass=()=>{for(let l of o)i({pos:l.gpos,nrm:l.gnrm,count:l.glassCount})},h.setOpen=l=>{c=l||0},h.openNow=()=>c,h}});var my=At((A7,vy)=>{"use strict";var cE=l0().GLSL,{skylightGLSL:lE}=Ki(),{oculusGLSL:fE}=Lr(),{windowLightGLSL:hE}=S0(),Jr=.22;function uE(){let t=[],e=[],o=[],r=[],s=(l,d)=>{let u=Jr*.2*Math.pow(Math.sin(Math.PI*Math.pow(l,.85)),.9)*(d>0?1.06:.94),p=l*Jr-Jr*.12,f=d*u,v=Math.abs(d)*u*.42-.14*l*l*Jr;v+=Math.sin(l*17+(d>0?0:2.1))*.012*Jr*d*d;let m=(l-.3)*.55,g=Math.cos(m),x=Math.sin(m),y=v*g-f*x,w=v*x+f*g;return[p,y,w+.05*Jr*l*l]},i=(l,d)=>{let p=s(Math.min(1,l+.01),d),f=s(Math.max(0,l-.01),d),v=s(l,Math.min(1,d+.01)),m=s(l,Math.max(-1,d-.01)),g=[p[0]-f[0],p[1]-f[1],p[2]-f[2]],x=[v[0]-m[0],v[1]-m[1],v[2]-m[2]],y=[x[1]*g[2]-x[2]*g[1],x[2]*g[0]-x[0]*g[2],x[0]*g[1]-x[1]*g[0]],w=Math.hypot(y[0],y[1],y[2])||1,M=y[1]<0?-1:1;return[y[0]/w*M,y[1]/w*M,y[2]/w*M]};for(let l=0;l<=18;l++){let d=l/18;for(let u=0;u<=5*2;u++){let p=u/5-1;t.push(s(d,p)),e.push(i(Math.min(.97,Math.max(.03,d)),p)),o.push([d,p])}}let c=5*2+1;for(let l=0;l<18;l++)for(let d=0;d<c-1;d++){let u=l*c+d,p=u+1,f=u+c,v=f+1;r.push([u,f,p],[p,f,v])}let h=t.length;return t.push([-Jr*.12,0,-.003],[-Jr*.12,0,.003],[-Jr*.24,-.01,.0015],[-Jr*.24,-.01,-.0015]),e.push([0,1,0],[0,1,0],[0,1,0],[0,1,0]),o.push([0,0],[0,0],[-.1,0],[-.1,0]),r.push([h,h+2,h+1],[h,h+3,h+2]),{pos:t,nrm:e,uv:o,idx:r}}vy.exports=t=>{let e=uE(),o=t({vert:`
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
		${cE}
		uniform float time;
		uniform float yScale, visible;
		varying vec3 v_pos, v_normal;
		varying vec2 v_uv;
		varying vec3 v_eye;

		${lE()}
		${fE()}
		${hE()}

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
		}`,attributes:{position:e.pos,normal:e.nrm,uv:e.uv},elements:e.idx,uniforms:{model:t.prop("model"),visible:1},cull:{enable:!1}}),r=l0(),n=t({vert:`
		precision highp float;
		uniform mat4 proj, view, model;
		uniform float yScale;
		attribute vec2 corner;
		varying vec2 v_uv;
		void main() {
			vec3 c = (model * vec4(${(Jr*.35).toFixed(3)}, 0.0, 0.0, 1.0)).xyz;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{model:t.prop("model"),night:()=>r.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(a){a&&a.visible&&(o({model:a.model}),r.night>.01&&n({model:a.model}))}}});var yy=At((T7,xy)=>{"use strict";var{skylightGLSL:dE,Z_START:gy,Z_END:pE}=Ki(),{oculusGLSL:vE,A:Ac}=Lr(),{windowLightGLSL:mE,C:di}=S0();xy.exports=(t,e)=>{let o=e.isPhone?900:2600,r=e.isPhone?350:900,n=e.isPhone?450:1300,a=e.isPhone?13:22,s=7,i=()=>(s=s*16807%2147483647,(s-1)/2147483646),c=di.x0+.6,h=di.x1-.3,l=[];for(let f=0;f<o;f++)l.push([2.5+i()*10.5,.3+i()*8,gy-3.5+i()*(pE-gy+4.5),i()]);for(let f=0;f<r;f++)l.push([Ac.x0+.3+i()*(Ac.x1-Ac.x0-.6),.3+i()*7.5,Ac.z0+.3+i()*(Ac.z1-Ac.z0-.6),i()]);for(let f=0;f<n;f++)l.push([c+i()*(h-c),.2+i()*5.6,di.z0+.25+i()*(di.z1-di.z0-.5),i()]);let d=f=>f.toFixed(4),u=[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],p=t({vert:`
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

		${dE()}
		${vE()}
		${mE()}

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
		}`,attributes:{seed:l},count:l.length,primitive:"points",uniforms:{time:t.context("time"),pixelScale:f=>f.viewportHeight*.006,focus:(f,v)=>v&&v.focus||6,aperture:(f,v)=>v&&v.aperture||0,wake0:(f,v)=>(v&&v.wake||u)[0],wake1:(f,v)=>(v&&v.wake||u)[1],wake2:(f,v)=>(v&&v.wake||u)[2],wake3:(f,v)=>(v&&v.wake||u)[3],wakeDir:(f,v)=>v&&v.wakeDir||[0,0,1],gust:(f,v)=>v&&v.gust||[0,0]},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});return f=>p(f||{})}});var Sy=At((L7,ky)=>{"use strict";var{C:My}=S0(),by=l0(),wy=15.3,gE=37.1,_y=My.z1+.9,xE=My.z1+.7+16-.6;ky.exports=(t,e)=>{let o=e.isPhone?36:80,r=11,n=()=>(r=r*16807%2147483647,(r-1)/2147483646),a=[];for(let h=0;h<o;h++){let l=.35+Math.pow(n(),1.8)*2.4;a.push([wy+n()*(gE-wy),l,_y+n()*(xE-_y),n()])}let s=[],i=[];a.forEach(h=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(l=>{s.push(l[0],l[1]),i.push(...h)})});let c=t({vert:`
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
		}`,attributes:{corner:s,seed:i},count:s.length/2,uniforms:{time:t.context("time"),night:()=>by.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){by.night>.01&&c()}}});var i1=At((N7,br)=>{"use strict";var Ey=l0(),ga=Ja(),yE=cc(),xs=Math.PI,He=t=>(+t).toFixed(4),ta=t=>`vec3(${He(t[0])}, ${He(t[1])}, ${He(t[2])})`,rn={x0:-2.05,z0:41.45,z1:47.55,top:5.1},qo=-.55,o0=-2,bn=42.25,Bn=43.65,Ir=45.35,V0=46.75,d0=2.75,xr=.12,bE=(qo+o0)/2,Xo={x:-1.3,y:1.42,w:.42,h:.52,z:Bn,cell:.026},lo={x0:-1.85,x1:-.75,top:.98,z0:Bn-.3,z1:Bn-.02},Pr={x0:-1.44,x1:-1.16,y0:lo.top-.002,y1:lo.top+.018},yr={cx:-1.3,cz:Bn-.165,w:.2,d:.255,y:lo.top+.0012},M0={x:-1.03,z:Bn-.14,r:.042,h:.075},cn={x:-.86,z:Bn-.12,h:.085,r:.019};cn.flame=[cn.x,lo.top+.012+cn.h+.028,cn.z];var s1={a:[M0.x-.004,lo.top+.03,M0.z+.004],b:[M0.x-.13,lo.top+.34,M0.z-.12]},wn=[-1.5,2.42,44.66],Un=[-1.78,1.95,bn+.09],$r={x:-1.32,z:44.08,y:.64,heading:.32},Ty={window:{eye:[-1.3,1.33,42.8],target:[Xo.x,1.37,Bn],fov:54},paper:{eye:[-1.3,1.4,43.23],target:[yr.cx,lo.top,yr.cz+.01],fov:40},front:{eye:[1.6,1.62,43],target:[-.9,1.35,43],fov:55},bay:{eye:[4.2,2.1,44.6],target:[-1,1.9,44.5],fov:55}},C0={z0:(bn+Bn)/2+.03,z1:(bn+Bn)/2+.56,y0:.98,y1:1.78,x:qo+.03,cell:.047};Ty.peek={eye:[-1.2,1.42,42.95],target:[ga.PLAY.stoolX-ga.OFF[0],.85,ga.PLAY.keyFront+.2],fov:30};var gs={ink:null,inkDirty:!1,fold:0,slide:0,shown:!0,active:!1};function zy(){return`
	// a quatrefoil hole in the brass (g: metres across the window from its centre)
	float grilleHole(vec2 g) {
		vec2 q = fract(g / ${He(Xo.cell)} + 0.5) - 0.5;
		float d = min(min(length(q - vec2(0.17, 0.0)), length(q + vec2(0.17, 0.0))),
		              min(length(q - vec2(0.0, 0.17)), length(q + vec2(0.0, 0.17))));
		d = min(d, length(q) - 0.04);
		return 1.0 - smoothstep(0.15, 0.19, d);
	}
	// how much of the lamp's light reaches p (on the penitent's side) through the window
	float throughGrille(vec3 p, float soft) {
		vec3 d = p - ${ta(wn)};
		if (d.z > -0.001) return 0.0;
		float t = (${He(Xo.z)} - ${He(wn[2])}) / d.z;
		vec2 g = (${ta(wn)} + d * t).xy - vec2(${He(Xo.x)}, ${He(Xo.y)});
		float inWin = (1.0 - smoothstep(${He(Xo.w/2-.01)}, ${He(Xo.w/2)} + soft, abs(g.x))) *
		              (1.0 - smoothstep(${He(Xo.h/2-.01)}, ${He(Xo.h/2)} + soft, abs(g.y)));
		// the lamp is not a point: the pattern blurs the further it falls
		// from the brass
		float pen = 0.045 * abs(p.z - ${He(Xo.z)}) / abs(${He(Xo.z)} - ${He(wn[2])}) / ${He(Xo.cell)};
		vec2 qc = fract(g / ${He(Xo.cell)} + 0.5) - 0.5;
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
		vec3 c = ${ta(cn.flame)};
		vec3 d = c - p;
		float s = 1.0;
		// the pot: a short upright cylinder
		vec2 a = vec2(${He(M0.x)}, ${He(M0.z)}) - p.xz;
		vec2 dd = d.xz;
		float t = clamp(dot(a, dd) / max(dot(dd, dd), 1e-5), 0.0, 1.0);
		float r = length(p.xz + dd * t - vec2(${He(M0.x)}, ${He(M0.z)}));
		float y = p.y + d.y * t;
		s *= mix(1.0, 0.25, (1.0 - smoothstep(${He(M0.r*.7)}, ${He(M0.r*1.6)}, r)) * (1.0 - smoothstep(${He(lo.top+M0.h*.8)}, ${He(lo.top+M0.h*1.3)}, y)));
		// the quill: a thin capsule
		vec3 qa = ${ta(s1.a)}, qb = ${ta(s1.b)};
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
		bool inB1 = p.z < ${He(Bn)} && p.z > ${He(bn-.04)} && p.x < ${He(qo+.02)};
		bool inPriest = p.z >= ${He(Bn)} && p.z < ${He(Ir)} && p.x < ${He(qo)};
		bool inB2 = p.z >= ${He(Ir)} && p.z < ${He(V0+.04)} && p.x < ${He(qo)};
		// how open to the hall it is
		float open = 1.0;
		if (inB1) open = mix(0.7, 1.1, smoothstep(${He(o0)}, ${He(qo)}, p.x));
		if (inPriest) open = 0.16;
		if (inB2) open = 0.10;
		// deeper into the bay, a little less of the hall's light
		open *= mix(0.62, 1.0, smoothstep(${He(rn.x0)}, 0.3, p.x));
		// the stair hall's candlelight (it stands there now: see stairhall.js)
		vec3 rs;
		vec3 col = roomLight(p + ${ta(ga.OFF)}, N, V, gloss, rs) * 1.25 * open;
		spec += rs * open;
		// the lamp, warm, behind the brass
		vec3 Ld = ${ta(wn)} - p;
		float dl = length(Ld);
		vec3 L = Ld / dl;
		float T = inPriest ? 1.0 : (inB1 ? throughGrille(p, 0.0) : 0.0);
		vec3 lampCol = vec3(1.0, 0.70, 0.40) * mix(3.2, 1.0, night);
		vec3 lamp = lampCol * T * max(dot(N, L), 0.0) / (1.0 + dl * dl * 1.6);
		col += lamp;
		spec += lampCol * T * pow(max(dot(N, normalize(L + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss / (1.0 + dl * dl * 1.6);
		// the little lamp in the open booth
		if (inB1) {
			vec3 Sd = ${ta(Un)} - p;
			float ds = length(Sd);
			vec3 Ls = Sd / ds;
			vec3 sc = vec3(1.0, 0.72, 0.42) * mix(1.5, 0.35, night);
			col += sc * (max(dot(N, Ls), 0.0) * 0.8 + 0.2) / (0.15 + ds * ds * 1.6);
			spec += sc * pow(max(dot(N, normalize(Ls + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss * 0.6 / (0.15 + ds * ds * 1.6);
		}
		// the candle
		if (night > 0.01) {
			vec3 Cd = ${ta(cn.flame)} - p;
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
	}`}var e0={WOOD:0,CARVED:1,VELVET:2,CUSHION:3,BRASS:4,INKGLASS:5,QUILL:6,LAMPGLASS:7,DARKWOOD:8};function Ly(){let t=[],e=[],o=[],r=[],n=[],a=(h,l)=>[h[0]-l[0],h[1]-l[1],h[2]-l[2]],s=(h,l)=>[h[1]*l[2]-h[2]*l[1],h[2]*l[0]-h[0]*l[2],h[0]*l[1]-h[1]*l[0]],i=h=>{let l=Math.hypot(h[0],h[1],h[2])||1;return[h[0]/l,h[1]/l,h[2]/l]},c={pos:t,nrm:e,kind:o,uv:r,idx:n,norm:i,cross:s,sub:a};return c.v=(h,l,d,u)=>(t.push(h[0],h[1],h[2]),e.push(l[0],l[1],l[2]),o.push(d),r.push(u?u[0]:0,u?u[1]:0),t.length/3-1),c.quad=(h,l,d,u,p,f)=>{let v=i(s(a(l,h),a(u,h)));f=f||[[0,0],[1,0],[1,1],[0,1]];let m=c.v(h,v,p,f[0]),g=c.v(l,v,p,f[1]),x=c.v(d,v,p,f[2]),y=c.v(u,v,p,f[3]);n.push(m,g,x,m,x,y)},c.box=(h,l,d,u,p,f,v)=>{let m=(g,x,y,w,M,_,S,R)=>c.quad(g,x,y,w,v,[[M,S],[_,S],[_,R],[M,R]]);m([u,l,d],[u,l,f],[u,p,f],[u,p,d],d,f,l,p),m([h,l,f],[h,l,d],[h,p,d],[h,p,f],f,d,l,p),m([h,p,d],[u,p,d],[u,p,f],[h,p,f],h,u,d,f),m([h,l,f],[u,l,f],[u,l,d],[h,l,d],h,u,f,d),m([h,l,f],[u,l,f],[u,p,f],[h,p,f],h,u,l,p),m([u,l,d],[h,l,d],[h,p,d],[u,p,d],u,h,l,p)},c.tube=(h,l,d,u)=>{u=u||6;let p=t.length/3;for(let f=0;f<h.length;f++){let v=h[Math.max(0,f-1)],m=h[Math.min(h.length-1,f+1)],g=i(a(m,v)),x=Math.abs(g[1])>.9?[1,0,0]:[0,1,0],y=i(s(g,x)),w=s(y,g),M=typeof l=="function"?l(f/(h.length-1)):l;for(let _=0;_<=u;_++){let S=_/u*xs*2,R=Math.cos(S),T=Math.sin(S),H=[y[0]*R+w[0]*T,y[1]*R+w[1]*T,y[2]*R+w[2]*T];c.v([h[f][0]+H[0]*M,h[f][1]+H[1]*M,h[f][2]+H[2]*M],H,d,[f/(h.length-1),_/u])}}for(let f=0;f<h.length-1;f++)for(let v=0;v<u;v++){let m=p+f*(u+1)+v,g=m+u+1;n.push(m,m+1,g,m+1,g+1,g)}},c.lathe=(h,l,d,u,p)=>{p=p||20;let f=t.length/3;for(let v=0;v<d.length;v++){let[m,g]=d[v],x=d[Math.max(0,v-1)],y=d[Math.min(d.length-1,v+1)],w=y[0]-x[0],M=y[1]-x[1];for(let _=0;_<=p;_++){let S=_/p*xs*2,R=Math.cos(S),T=Math.sin(S),H=i([M*R,-w,M*T]);c.v([h+R*m,g,l+T*m],H,u,[_/p,v/(d.length-1)])}}for(let v=0;v<d.length-1;v++)for(let m=0;m<p;m++){let g=f+v*(p+1)+m,x=g+p+1;n.push(g,x,g+1,g+1,x,x+1)}},c.spire=(h,l,d,u,p,f)=>{let v=[[-u,-u],[u,-u],[u,u],[-u,u]];for(let m=0;m<4;m++){let g=v[m],x=v[(m+1)%4],y=[h+g[0],d,l+g[1]],w=[h+x[0],d,l+x[1]],M=[h,p,l],_=i(s(a(M,y),a(w,y))),S=c.v(y,_,f,[0,0]),R=c.v(w,_,f,[1,0]),T=c.v(M,_,f,[.5,1]);n.push(S,T,R)}},c.orient=()=>{for(let h=0;h<n.length;h+=3){let[l,d,u]=[n[h],n[h+1],n[h+2]],p=m=>[t[m*3],t[m*3+1],t[m*3+2]],f=s(a(p(d),p(l)),a(p(u),p(l))),v=[0,1,2].map(m=>e[l*3+m]+e[d*3+m]+e[u*3+m]);f[0]*v[0]+f[1]*v[1]+f[2]*v[2]<0&&(n[h+1]=u,n[h+2]=d)}return c},c}function a1(t,e,o,r){if(t<=e)return o;let n=t-e;return n>=r?0:Math.max(0,Math.sqrt(r*r-n*n)-(r-o))}var gn={ys:1.78,a:.56,r:.78};gn.apex=gn.ys+Math.sqrt(gn.r*gn.r-(gn.r-gn.a)*(gn.r-gn.a));function wE(){let t=Ly(),e=e0.WOOD,o=e0.CARVED,r=e0.DARKWOOD,n=.06;t.box(o0,0,bn,qo+.08,xr,V0,r),t.box(o0,d0-.06,bn-.04,qo+.1,d0,V0+.04,e),t.box(qo,d0-.2,bn-.06,qo+.12,d0-.06,V0+.06,e),t.box(qo+.02,d0,bn-.08,qo+.14,d0+.07,V0+.08,r),t.box(o0,xr,bn,o0+.04,d0-.06,V0,e);for(let[l,d,u]of[[bn-n,bn,-1],[V0,V0+n,1]]){t.box(o0,0,l,qo+.08,d0,d,e);let p=u<0?l-.018:d;t.box(o0+.18,.45,Math.min(p,p+.018),qo-.12,2.35,Math.max(p,p+.018),r),t.box(o0+.26,.55,Math.min(p,p+.03*u),qo-.2,2.25,Math.max(p,p+.03*u),e)}{let l=Bn-.02,d=Bn+.02,u=Xo.x-Xo.w/2,p=Xo.x+Xo.w/2,f=Xo.y-Xo.h/2,v=Xo.y+Xo.h/2;t.box(o0,xr,l,qo,Pr.y0,d,e),t.box(o0,Pr.y0,l,Pr.x0,Pr.y1,d,e),t.box(Pr.x1,Pr.y0,l,qo,Pr.y1,d,e),t.box(o0,Pr.y1,l,qo,f,d,e),t.box(o0,f,l,u,v,d,e),t.box(p,f,l,qo,v,d,e),t.box(o0,v,l,qo,d0-.06,d,e);let m=.05,g=l-.025;t.box(u-m,f-m,g,p+m,f,l,r),t.box(u-m,v,g,p+m,v+m,l,r),t.box(u-m,f,g,u,v,l,r),t.box(p,f,g,p+m,v,l,r),t.box(u-m-.02,v+m,g-.015,p+m+.02,v+m+.03,l,e),t.box(Pr.x0-.01,Pr.y1,l-.006,Pr.x1+.01,Pr.y1+.008,l,e0.BRASS)}{let l=C0,d=qo+.008,u=qo+.052;t.box(d,l.y0,l.z0-.035,u,l.y1,l.z0,r),t.box(d,l.y0,l.z0,u,l.y0+.04,l.z1,r),t.box(d,l.y1-.04,l.z0,u,l.y1,l.z1,r),t.box(d+.008,xr,l.z0-.035,u-.008,l.y0,l.z1,e),t.box(u-.008,xr+.12,l.z0+.03,u,l.y0-.08,l.z1-.06,r),t.box(d-.004,l.y0-.012,l.z0-.045,u+.012,l.y0,l.z1,e0.BRASS)}t.box(o0,xr,Ir-.02,qo,d0-.06,Ir+.02,e),t.box(lo.x0,lo.top-.035,lo.z0,lo.x1,lo.top,lo.z1,e),t.tube([[lo.x0,lo.top-.018,lo.z0],[lo.x1,lo.top-.018,lo.z0]],.02,e,8);for(let l of[lo.x0+.1,lo.x1-.1]){let d=[];for(let u=0;u<=8;u++){let p=u/8;d.push([l,lo.top-.04-.22*p,lo.z1-.02-.22*Math.cos(p*xs/2)])}t.tube(d,.018,r,6)}t.box(o0+.06,.12,bn,qo-.1,.44,bn+.42,r),t.box(o0+.08,.44,bn+.01,qo-.12,.52,bn+.41,e0.CUSHION),t.box(o0+.06,.12,V0-.42,qo-.1,.44,V0,r),t.box(Un[0]-.05,Un[1]-.16,bn,Un[0]+.05,Un[1]-.02,bn+.012,e0.BRASS),t.tube([[Un[0],Un[1]-.09,bn+.012],[Un[0],Un[1]-.09,Un[2]-.01],[Un[0],Un[1]-.05,Un[2]]],.006,e0.BRASS,6),t.lathe(Un[0],Un[2],[[0,Un[1]-.05],[.028,Un[1]-.035],[.034,Un[1]+.01],[.024,Un[1]+.06],[.026,Un[1]+.065]],e0.LAMPGLASS,16),t.box($r.x-.22,.12,$r.z-.24,$r.x+.22,$r.y-.05,$r.z+.16,r),t.box($r.x-.24,$r.y-.05,$r.z-.26,$r.x+.24,$r.y,$r.z+.18,e0.CUSHION),t.tube([[wn[0],d0-.06,wn[2]],[wn[0],wn[1]+.07,wn[2]]],.005,e0.BRASS,5),t.lathe(wn[0],wn[2],[[0,wn[1]+.09],[.03,wn[1]+.08],[.02,wn[1]+.06]],e0.BRASS,12),t.lathe(wn[0],wn[2],[[0,wn[1]-.06],[.035,wn[1]-.04],[.045,wn[1]],[.035,wn[1]+.05],[.018,wn[1]+.07]],e0.LAMPGLASS,16);let a=qo,s=qo+n;function i(l,d,u){let p=(l+d)/2,f=40,v=[];for(let g=0;g<=f;g++)v.push(xr+(d0-.2-xr)*g/f);let m=[];v.forEach(g=>m.push(g));for(let g=1;g<24;g++)m.push(gn.ys+(gn.apex-gn.ys)*g/24);m.sort((g,x)=>g-x);for(let g=0;g<m.length-1;g++){let x=m[g],y=m[g+1];if(y-x<1e-4)continue;let w=u?a1(x,gn.ys,gn.a,gn.r):0,M=u?a1(y,gn.ys,gn.a,gn.r):0,_=(S,R)=>[S,R];t.quad([s,x,p-w],[s,x,l],[s,y,l],[s,y,p-M],e,[_(p-w,x),_(l,x),_(l,y),_(p-M,y)]),t.quad([s,x,d],[s,x,p+w],[s,y,p+M],[s,y,d],e,[_(d,x),_(p+w,x),_(p+M,y),_(d,y)]),(w>0||M>0)&&(t.quad([a,x,p-w],[s,x,p-w],[s,y,p-M],[a,y,p-M],r),t.quad([s,x,p+w],[a,x,p+w],[a,y,p+M],[s,y,p+M],r),t.quad([a,x,l],[a,x,p-w],[a,y,p-M],[a,y,l],e),t.quad([a,x,p+w],[a,x,d],[a,y,d],[a,y,p+M],e))}if(t.box(a,d0-.2,l,s,d0-.06,d,e),t.box(s,d0-.42,l+.05,s+.012,d0-.24,d-.05,o),u){let g=[];for(let x=0;x<=30;x++){let y=x/30,w=y<.5?xr+(gn.apex-xr)*(y*2):gn.apex-(gn.apex-xr)*((y-.5)*2),M=y<.5?-1:1;g.push([s+.01,Math.min(w,gn.apex-.002),p+M*(a1(w,gn.ys,gn.a,gn.r)+.03)])}t.tube(g,.022,r,6)}}i(bn,Bn,!0),i(Ir,V0,!0);{let l=Bn,d=Ir,u=(l+d)/2;t.box(a,xr,l,s,d0-.06,d,e);let p={ys:1.85,a:.55,r:.8},f=[];for(let v=0;v<=40;v++){let m=v/40,g=p.ys+Math.sqrt(p.r*p.r-(p.r-p.a)*(p.r-p.a)),x=m<.5?.35+(g-.35)*(m*2):g-(g-.35)*((m-.5)*2),y=m<.5?-1:1;f.push([s+.012,Math.min(x,g-.002),u+y*a1(x,p.ys,p.a,p.r)])}f.push(f[0]),t.tube(f,.02,r,6),t.box(s,.95,u-.22,s+.015,1.3,u+.22,o),t.box(s,.35,u-.42,s+.01,.75,u+.42,r),t.tube([[s+.03,1.12,d-.13],[s+.06,1.12,d-.13],[s+.06,1.12,d-.2]],.009,e0.BRASS,6)}[bn-.02,Bn,Ir,V0+.02].forEach((l,d)=>{let u=d===1||d===2,p=.075,f=d0+(u?.62:.4);t.box(qo+.06,0,l-p,qo+.06+2*p,f,l+p,e),t.box(qo+.04,f-.04,l-p-.02,qo+.08+2*p,f,l+p+.02,r);let v=qo+.06+p,m=u?.62:.5;t.spire(v,l,f,p*.95,f+m,e);for(let g=1;g<=3;g++){let x=f+m*g/4.2,y=p*.95*(1-g/4.2)+.02;for(let[w,M]of[[1,0],[-1,0],[0,1],[0,-1]])t.tube([[v+w*(y-.02),x-.02,l+M*(y-.02)],[v+w*(y+.015),x+.03,l+M*(y+.015)]],.008,r,4)}t.lathe(v,l,[[0,f+m-.02],[.03,f+m+.03],[.022,f+m+.07],[0,f+m+.1]],e,10)});let h=(l,d,u)=>{let p=(l+d)/2,f=qo+.075,v=d0+.07,m=v+u,g=[1,0,0],x=t.v([f,v,l],g,o,[l,v]),y=t.v([f,v,d],g,o,[d,v]),w=t.v([f,m,p],g,o,[p,m]);t.idx.push(x,y,w);let M=t.v([f-.04,v,l],[-1,0,0],e),_=t.v([f-.04,v,d],[-1,0,0],e),S=t.v([f-.04,m,p],[-1,0,0],e);t.idx.push(M,S,_);let R=[],T=[];for(let F=0;F<=10;F++){let j=F/10;R.push([f+.02,v+u*j,l+(p-l)*j]),T.push([f+.02,v+u*j,d+(p-d)*j])}t.tube(R,.022,r,6),t.tube(T,.022,r,6);for(let F=2;F<=8;F+=2)for(let j of[R[F],T[F]])t.tube([j,[j[0]+.01,j[1]+.06,j[2]+(j===R[F]?-.02:.02)]],.01,r,4);t.lathe(f,p,[[0,m],[.035,m+.06],[.022,m+.12],[0,m+.16]].map(([F,j])=>[F,j]),e,10);let H=Math.min(.17,u*.32),q=v+u*.38,W=[];for(let F=0;F<=24;F++){let j=F/24*xs*2;W.push([f+.012,q+Math.sin(j)*H,p+Math.cos(j)*H])}t.tube(W,.012,r,5)};h(bn-.02,Bn,.52),h(Bn,Ir,.82),h(Ir,V0+.02,.52),t.lathe(M0.x,M0.z,[[0,lo.top],[.036,lo.top+.001],[M0.r,lo.top+.012],[M0.r*1.02,lo.top+.035],[.036,lo.top+.052],[.02,lo.top+.062],[.016,lo.top+.068]],e0.INKGLASS,24),t.lathe(M0.x,M0.z,[[.016,lo.top+.064],[.021,lo.top+.066],[.022,lo.top+.075],[.016,lo.top+.076],[0,lo.top+.072]],e0.BRASS,20);{let l=s1.a,d=s1.b,u=26,p=x=>{let y=Math.sin(x*xs)*.025;return[l[0]+(d[0]-l[0])*x+y*.6,l[1]+(d[1]-l[1])*x+y*.4,l[2]+(d[2]-l[2])*x+y]},f=[];for(let x=0;x<=u;x++)f.push(p(x/u));t.tube(f,x=>.0028*(1-.7*x)+6e-4,e0.QUILL,5);let v=t.norm(t.sub(d,l)),m=t.norm(t.cross(v,[.2,1,.1])),g=t.cross(m,v);for(let x of[-1,1]){let y=t.pos.length/3;for(let w=0;w<=u;w++){let M=w/u,_=p(M),S=M<.28?0:(x>0?.03:.02)*Math.sin(xs*Math.pow((M-.28)/.72,.75)),R=S*.25,T=[_[0]+m[0]*x*S-g[0]*R,_[1]+m[1]*x*S-g[1]*R,_[2]+m[2]*x*S-g[2]*R];t.v(_,g,e0.QUILL,[M,0]),t.v(T,g,e0.QUILL,[M,x])}for(let w=0;w<u;w++){let M=y+w*2;t.idx.push(M,M+2,M+1,M+1,M+2,M+3)}}}return t.orient()}function _E(t,e){let r=rn.top,n=rn.x0;t(n-.35,0,rn.z0-.35,n,r+.35,rn.z1+.35),t(n,0,rn.z0-.35,-.35,r,rn.z0),t(n,0,rn.z1,-.35,r,rn.z1+.35),t(n,r,rn.z0,-.35,r+.35,rn.z1),t(.35,0,rn.z0-.42,.35+.16,r,rn.z0),t(.35,0,rn.z1,.35+.16,r,rn.z1+.42),t(.35,r,rn.z0-.5,.35+.18,r+.42,rn.z1+.5),t(.35,r+.42,rn.z0-.6,.35+.26,r+.52,rn.z1+.6),t(.35,0,rn.z0-.5,.35+.22,.42,rn.z0),t(.35,0,rn.z1,.35+.22,.42,rn.z1+.5),t(-.35-.01,0,rn.z0,.35+.12,.02,rn.z1),e(n,rn.z0,-.35,rn.z1)}br.exports=t=>{let e=Ka(),o=Ey.GLSL,r=wE(),n=`
	precision highp float;
	${o}
	uniform float time;
	${e.lanternGLSL()}
	${ga.roomGLSL()}
	${zy()}
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
		}`,attributes:{position:r.pos,normal:r.nrm,kind:r.kind,uv:r.uv},elements:r.idx});function i(Nt,xt,ot,Bt){let Se=[],be=[],Ke=[],$e=[],no=[],it=qo-.02,Mt=gn.apex+.08,Vt=xr+.015;for(let he=0;he<=40;he++){let Ne=he/40,Qt=Mt+(Vt-Mt)*Ne;for(let Wt=0;Wt<=90;Wt++){let ct=Wt/90,Zt=ot?.2+.13*Ne*Ne:xt-Nt,de=Nt+ct*Zt,se=ot?.05+.02*Ne:.035+.01*Math.sin(ct*7),Rt=ct*Bt*xs*2+Math.sin(Ne*2+ct*5)*.6,Ue=it-se*(.5+.5*Math.sin(Rt))-(ot?.02*Ne:0),Be=[1,0,-(-se*.5*Math.cos(Rt)*Bt*xs*2/Zt)],Xe=Math.hypot(Be[0],Be[1],Be[2]);Se.push(Ue,Qt,de),be.push(Be[0]/Xe,0,Be[2]/Xe),Ke.push(2),$e.push(Math.sin(Rt),Ne)}}for(let he=0;he<40;he++)for(let Ne=0;Ne<90;Ne++){let Qt=he*91+Ne,Wt=Qt+90+1;no.push(Qt,Wt,Qt+1,Qt+1,Wt,Wt+1)}for(let he=0;he<no.length;he+=3){let[Ne,Qt,Wt]=[no[he],no[he+1],no[he+2]],ct=Rt=>[Se[Rt*3],Se[Rt*3+1],Se[Rt*3+2]],Zt=[0,1,2].map(Rt=>ct(Qt)[Rt]-ct(Ne)[Rt]),de=[0,1,2].map(Rt=>ct(Wt)[Rt]-ct(Ne)[Rt]);Zt[1]*de[2]-Zt[2]*de[1]<0&&(no[he+1]=Wt,no[he+2]=Qt)}return{pos:Se,nrm:be,kind:Ke,uv:$e,idx:no}}let c=i(bn+.02,bn+.4,!0,6),h=i(Ir+.04,V0-.04,!1,9),l={pos:c.pos.concat(h.pos),nrm:c.nrm.concat(h.nrm),kind:c.kind.concat(h.kind),uv:c.uv.concat(h.uv),idx:c.idx.concat(h.idx.map(Nt=>Nt+c.pos.length/3))},d=t({vert:`
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
		}`,attributes:{position:l.pos,normal:l.nrm,uv:l.uv},elements:l.idx}),u=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec2 corner;
		varying vec3 v_pos, v_eye;
		void main() {
			vec3 p = vec3(${He(Xo.x)} + corner.x * ${He(Xo.w/2)}, ${He(Xo.y)} + corner.y * ${He(Xo.h/2)}, ${He(Xo.z)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${n}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = v_pos.xy - vec2(${He(Xo.x)}, ${He(Xo.y)});
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(0.0, 0.0, v_eye.z < ${He(Xo.z)} ? -1.0 : 1.0);
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
			vec3 p = vec3(${He(C0.x)}, ${He((C0.y0+C0.y1)/2)} + corner.y * ${He((C0.y1-C0.y0)/2-.04)}, ${He((C0.z0+C0.z1)/2)} + corner.x * ${He((C0.z1-C0.z0)/2)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${n}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = (v_pos.zy - vec2(${He((C0.z0+C0.z1)/2)}, ${He((C0.y0+C0.y1)/2)})) * ${He(Xo.cell/C0.cell)};
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(v_eye.x < ${He(C0.x)} ? -1.0 : 1.0, 0.0, 0.0);
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
			vec3 p = vec3(${He(Xo.x)} + corner.x * 0.75, ${He(Xo.y)} + corner.y * 0.9, ${He(Ir-.03)});
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
			vec3 p = vec3(${He(bE)} + c.x * ${He((qo-o0)/2-.02)}, 0.9 + (c.y + 1.0) * 0.8, ${He(Bn-.03)} - c.z * 1.25);
			v_pos = p;
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`
		precision highp float;
		uniform float night, time;
		${zy().split("// the candle's light is hidden")[0]}
		varying vec3 v_pos;
		void main() {
			float T = throughGrille(v_pos, 0.0);
			float d = length(v_pos - ${ta(wn)});
			// dust drifting in the beam
			float dust = 0.65 + 0.35 * sin(v_pos.x * 23.0 + time * 0.3) * sin(v_pos.y * 17.0 - time * 0.21) * sin(v_pos.z * 19.0 + time * 0.17);
			vec3 col = vec3(1.0, 0.68, 0.36) * T * dust * 0.035 / (0.4 + d * d * 0.5) * mix(1.0, 0.7, night);
			gl_FragColor = vec4(col, 1.0);
		}`.replace("float grilleHole","float grilleHole"),attributes:{c:{buffer:t.buffer(m),size:3}},count:m.length/3,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}}),x=(()=>{if(typeof document=="undefined")return null;let Nt=document.createElement("canvas");Nt.width=512,Nt.height=652;let xt=Nt.getContext("2d");xt.fillStyle="#cdb38a",xt.fillRect(0,0,Nt.width,Nt.height);let ot=7,Bt=()=>(ot=ot*1664525+1013904223>>>0,ot/4294967296);for(let be=0;be<2400;be++){xt.fillStyle=`rgba(${Bt()<.5?"90,62,30":"245,230,200"},${.03+Bt()*.05})`;let Ke=Bt()*Nt.width,$e=Bt()*Nt.height;xt.fillRect(Ke,$e,1+Bt()*14,1)}for(let be=0;be<26;be++){let Ke=Bt()*Nt.width,$e=Bt()*Nt.height,no=20+Bt()*90,rt=xt.createRadialGradient(Ke,$e,0,Ke,$e,no);rt.addColorStop(0,`rgba(120,80,35,${.04+Bt()*.06})`),rt.addColorStop(1,"rgba(120,80,35,0)"),xt.fillStyle=rt,xt.fillRect(Ke-no,$e-no,no*2,no*2)}let Se=xt.createRadialGradient(Nt.width/2,Nt.height/2,Nt.width*.3,Nt.width/2,Nt.height/2,Nt.height*.72);return Se.addColorStop(0,"rgba(110,70,30,0)"),Se.addColorStop(1,"rgba(110,70,30,0.38)"),xt.fillStyle=Se,xt.fillRect(0,0,Nt.width,Nt.height),Nt})(),y=x?t.texture({data:x,min:"linear",mag:"linear",flipY:!1}):t.texture(),w=t.texture({shape:[8,8],data:new Uint8Array(8*8*4)}),M=[18,24],_=[],S=[];for(let Nt=0;Nt<=M[1];Nt++)for(let xt=0;xt<=M[0];xt++)_.push(xt/M[0],Nt/M[1]);for(let Nt=0;Nt<M[1];Nt++)for(let xt=0;xt<M[0];xt++){let ot=Nt*(M[0]+1)+xt,Bt=ot+M[0]+1;S.push(ot,ot+1,Bt,ot+1,Bt+1,Bt)}let R=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale, fold, slide;
		attribute vec2 st;
		varying vec3 v_pos, v_n, v_eye;
		varying vec2 v_st;
		void main() {
			// s across (texture left = +x), t from the near edge (0) to the far (1)
			float s = st.x, t = st.y;
			float x = ${He(yr.cx+yr.w/2)} - s * ${He(yr.w)};
			float zNear = ${He(yr.cz-yr.d/2)};
			vec3 p = vec3(x, ${He(yr.y)}, zNear + t * ${He(yr.d)});
			vec3 n = vec3(0.0, 1.0, 0.0);
			// a slight cockle
			p.y += 0.0012 * sin(s * 7.0 + t * 3.0) * sin(t * 5.0);
			// the near half folds up and over onto the far half
			if (t < 0.5) {
				float a = fold * 3.14159 * 0.985;
				float dd = (0.5 - t) * ${He(yr.d)};
				float zf = zNear + 0.5 * ${He(yr.d)};
				p.z = zf - dd * cos(a);
				p.y = ${He(yr.y)} + dd * sin(a) + 0.0016 * fold;
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
			if (v_pos.z > ${He(Bn+.015)}) discard;
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
		}`,attributes:{st:{buffer:t.buffer(_),size:2}},elements:S,uniforms:{fold:()=>gs.fold,slide:()=>gs.slide,paperTex:y,inkTex:w},cull:{enable:!1}}),T=Ly();T.lathe(cn.x,cn.z,[[0,lo.top],[.048,lo.top+.002],[.052,lo.top+.012],[.046,lo.top+.014],[.022,lo.top+.012],[0,lo.top+.012]],e0.BRASS,24),T.lathe(cn.x,cn.z,[[0,lo.top+.012],[cn.r,lo.top+.012],[cn.r*1.02,lo.top+.012+cn.h*.6],[cn.r,lo.top+.012+cn.h],[cn.r*.75,lo.top+.012+cn.h-.004],[0,lo.top+.012+cn.h-.008]],9,20),T.tube([[cn.x,lo.top+.012+cn.h-.008,cn.z],[cn.x+.001,lo.top+.012+cn.h+.012,cn.z]],.0012,8,4),T.orient();let H=t({vert:a,frag:`${n}
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
				float up = smoothstep(${He(lo.top+cn.h*.4)}, ${He(lo.top+.012+cn.h)}, v_pos.y);
				col += vec3(1.0, 0.55, 0.22) * up * 0.22 * candleFlicker();
			}
			gl_FragColor = vec4(col * night, 1.0);
		}`,attributes:{position:T.pos,normal:T.nrm,kind:T.kind,uv:T.uv},elements:T.idx}),q=t({vert:`
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
			vec3 p = ${ta(cn.flame)} + right * corner.x * size.x + vec3(0.0, 1.0, 0.0) * corner.y * size.y;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{halo:t.prop("halo")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),W=[0,0],F=t({uniforms:{view:t.prop("view")}}),j=new Float32Array(16);function pt(Nt){yE.translate(j,Nt.view,ga.OFF),F({view:j},()=>Ht(Nt))}function Ht(Nt){let xt=Nt&&Nt.reflected;if(s(),d(),u(),p(),gs.ink&&gs.inkDirty){let ot=gs.ink;W[0]!==ot.width||W[1]!==ot.height?(w({data:ot,min:"linear",mag:"linear",flipY:!1}),W=[ot.width,ot.height]):w.subimage(ot),gs.inkDirty=!1}gs.shown&&R(),Ey.night>.01&&(H(),xt||(q({halo:1}),q({halo:0}))),xt||(f(),g())}return pt};br.exports.addBay=_E;br.exports.BAY=rn;br.exports.OFF=ga.OFF;br.exports.STATE=gs;var Ay=t=>[t[0]+ga.OFF[0],t[1]+ga.OFF[1],t[2]+ga.OFF[2]];br.exports.SHOTS=Object.fromEntries(Object.entries(Ty).map(([t,e])=>[t,Object.assign({},e,{eye:Ay(e.eye),target:Ay(e.target)})]));br.exports.SEAT=$r;br.exports.LAMP=wn;br.exports.SCONCE=Un;br.exports.GRILLE=Xo;br.exports.PAPER=yr;br.exports.ZONE={FRONT:qo,BACK:o0,ZA:bn,ZB:Bn,ZC:Ir,ZD:V0}});var Zd=At((R7,Ry)=>{"use strict";function ME(t){let e=t>>>0||1;return function(){return e=e*1664525+1013904223>>>0,e/4294967296}}var Ny={stroke:.05,letter:.045,word:.15,comma:.28,stop:.45,line:.25,para:.6},kE=["th","ng","er"];function SE(t,e,o){o=Object.assign({ink:"#2a1d12",xh:14,speed:23,lineHeight:2.85,seed:7,width:.12,pace:.45},o||{});let r=t.getContext("2d"),n={};Object.keys(Ny).forEach(v=>{n[v]=Ny[v]*o.pace});let a=[],s=0,i=0,c=0,h=[];function l(v,m){let g=ME(o.seed),x=o.xh,y={},w=j=>{let pt=e[j];if(!pt)return null;let Ht=Math.floor(g()*pt.length);return pt.length>1&&Ht===y[j]&&(Ht=(Ht+1)%pt.length),y[j]=Ht,pt[Ht]},M=j=>{if(e[j])return{g:w(j),sc:1};let pt=j.toLowerCase();return e[pt]?{g:w(pt),sc:/[A-Z]/.test(j)?1.32:1}:null},_=[],S=.15,R=0,T=0,H=(g()-.5)*.02,q=m/x,W=v.split(/\n\s*\n/);W.forEach((j,pt)=>{j.replace(/\s+/g," ").trim().split(" ").forEach(Nt=>{let xt=[];for(let be=0;be<Nt.length;be++){let Ke=Nt.substr(be,2).toLowerCase();if(kE.indexOf(Ke)>=0&&e[Ke]&&g()<.55&&Nt[be]===Nt[be].toLowerCase()){xt.push({ch:Ke,gl:{g:w(Ke),sc:1}}),be++;continue}let $e=M(Nt[be]);$e&&$e.g&&xt.push({ch:Nt[be],gl:$e})}let ot=xt.map(()=>.17+g()*.07),Bt=xt.reduce((be,Ke,$e)=>be+Ke.gl.g.w*Ke.gl.sc+ot[$e],0);R>0&&R+Bt>q&&(R=0,T++,S+=n.line,H=(g()-.5)*.02),xt.forEach((be,Ke)=>{let $e=be.gl.g,no=be.gl.sc*(.95+g()*.1),rt=(g()-.5)*.06,yt=(g()-.5)*.08+H*R,it=R,Mt=T*o.lineHeight+1.9+yt,Vt=Math.cos(rt),he=Math.sin(rt),Ne=Wt=>[(it+(Wt[0]*Vt-Wt[1]*he)*no)*x,(Mt+(Wt[0]*he+Wt[1]*Vt)*no)*x],Qt=(Wt,ct)=>{let Zt=0;for(let se=1;se<Wt.length;se++)Zt+=Math.hypot(Wt[se][0]-Wt[se-1][0],Wt[se][1]-Wt[se-1][1]);let de=Math.max(o.minDur||(ct?.06:.07),Zt/(o.speed*x));_.push({pts:Wt,L:Zt,start:S,dur:de,dot:ct}),S+=de};if($e.s.forEach((Wt,ct)=>{ct>0&&(S+=n.stroke),Qt(Wt.map(Ne),!1)}),$e.dot){let Wt=$e.s[0][0];$e.s.forEach(Zt=>Zt.forEach(de=>{de[1]<Wt[1]&&(Wt=de)}));let ct=Ne([Wt[0]+.1,-1.36]);S+=n.stroke*1.4,Qt([ct,[ct[0]+x*.05,ct[1]+x*.03]],!0)}S+=n.letter*(.6+g()*.8),R+=$e.w*no+ot[Ke]});let Se=Nt[Nt.length-1];S+=/[.!?]/.test(Se)?n.stop:/[,;:]/.test(Se)?n.comma:n.word,R+=.55+g()*.2}),pt<W.length-1&&(R=0,T+=1.6,S+=n.para)});let F=(T+1)*o.lineHeight*x+x*1.55;return{strokes:_,total:S,height:F}}function d(v,m){if(o.fixed){let g=o.fixed;r.setTransform(1,0,0,1,g.mx,g.my),r.clearRect(-g.mx,-g.my,t.width,t.height)}else{let g=Math.min(window.devicePixelRatio||1,2);t.width=Math.round(v*g),t.height=Math.round(m*g),t.style.height=m+"px",t.style.width=v+"px",r.setTransform(g,0,0,g,0,0),r.clearRect(0,0,v,m)}r.strokeStyle=o.ink,r.fillStyle=o.ink,r.lineCap="round",r.lineJoin="round",o.shadow&&(r.shadowColor=o.shadow,r.shadowBlur=o.shadowBlur||6)}let u=v=>v<.5?2*v*v:1-Math.pow(-2*v+2,2)/2;function p(v,m){let g=h[v.i]||0;if(m<=g)return;let x=o.width*o.xh,y=0;for(let w=1;w<v.pts.length;w++){let M=v.pts[w-1],_=v.pts[w],S=Math.hypot(_[0]-M[0],_[1]-M[1]),R=y,T=y+S;if(y=T,T<=g||S===0)continue;if(R>=m)break;let H=Math.max(0,(g-R)/S),q=Math.min(1,(m-R)/S),W=[M[0]+(_[0]-M[0])*H,M[1]+(_[1]-M[1])*H],F=[M[0]+(_[0]-M[0])*q,M[1]+(_[1]-M[1])*q],j=(R+T)/2/(v.L||1),pt=.72+.28*Math.sin(Math.PI*Math.min(1,Math.max(0,j)));r.lineWidth=x*pt,r.globalAlpha=.86+.14*pt,r.beginPath(),r.moveTo(W[0],W[1]),r.lineTo(F[0],F[1]),r.stroke()}v.dot&&g===0&&(r.globalAlpha=1,r.beginPath(),r.arc(v.pts[0][0],v.pts[0][1],x*.75,0,Math.PI*2),r.fill()),h[v.i]=m}function f(v){let m=(v-c)/1e3;for(let g=0;g<a.length;g++){let x=a[g];if(x.start>m)break;let y=Math.min(1,(m-x.start)/x.dur);p(x,u(y)*x.L)}if(o.onPen){let g=0;for(;g+1<a.length&&a[g+1].start<=m;)g++;a[g]&&o.onPen(a[g].pts[0][1])}m<s?i=requestAnimationFrame(f):o.onDone&&o.onDone()}return{write(v,m){cancelAnimationFrame(i);let g=o.fixed?t.width-2*o.fixed.mx:t.parentElement.clientWidth,x=l(v,g);a=x.strokes,s=x.total;let y=typeof o.maxTime=="function"?o.maxTime(v):o.maxTime;if(y&&s>y){let M=y/s;a.forEach(_=>{_.start*=M,_.dur*=M}),s=y}a.forEach((M,_)=>{M.i=_}),h=[],d(g,x.height);let w=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(m||w){a.forEach(M=>p(M,M.L));return}return c=performance.now(),i=requestAnimationFrame(f),s},finish(){cancelAnimationFrame(i),a.forEach(v=>p(v,v.L)),o.onDone&&o.onDone()},stop(){cancelAnimationFrame(i)}}}Ry.exports=SE});var tp=At((O7,Oy)=>{"use strict";var Jd=l0(),EE='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7"/></svg>',zE='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M19.5 14.6A8 8 0 0 1 9.4 4.5a8 8 0 1 0 10.1 10.1z"/></svg>';Oy.exports=function(e){let o=document.createElement("button");o.type="button",o.className=e+" light-toggle";let r=()=>{let n=Jd.isNight;o.innerHTML=n?EE:zE,o.setAttribute("aria-label",n?"Switch to day":"Switch to night"),o.title=n?"Day":"Night",o.setAttribute("aria-pressed",n?"true":"false")};return r(),Jd.onChange(r),["mousedown","pointerdown"].forEach(n=>o.addEventListener(n,a=>a.stopPropagation())),o.addEventListener("click",n=>{n.stopPropagation(),Jd.toggle()}),o}});var Iy=At((C7,$y)=>{"use strict";var jn=i1(),AE=Ja(),TE=Zd(),LE="81efb912-50a2-4fcd-b5e8-c3a28eecbe93",Cy=100,Ia=t=>Math.max(0,Math.min(1,t)),sr=(t,e,o)=>{let r=Ia((o-t)/(e-t));return r*r*(3-2*r)},ea=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,qr=(t,e,o)=>t+(e-t)*o,af=(t,e,o)=>[qr(t[0],e[0],o),qr(t[1],e[1],o),qr(t[2],e[2],o)];function pi(t,e){let o=t.length-1,r=Ia(e)*o,n=Math.min(o-1,Math.floor(r)),a=r-n,s=t[Math.max(0,n-1)],i=t[n],c=t[n+1],h=t[Math.min(o,n+2)];return[0,1,2].map(l=>.5*(2*i[l]+(-s[l]+c[l])*a+(2*s[l]-5*i[l]+4*c[l]-h[l])*a*a+(-s[l]+3*i[l]-3*c[l]+h[l])*a*a*a))}var c1=t=>({eye:t.eye.slice(),target:t.target.slice(),fov:t.fov,roll:0});function ep(t,e,o){return{eye:af(t.eye,e.eye,o),target:af(t.target,e.target,o),fov:qr(t.fov,e.fov,o),roll:qr(t.roll||0,e.roll||0,o)}}var sf=AE.PLAY,oa=[sf.stoolX,1,sf.keyFront+.25],l1=[sf.stoolX,sf.keyTop+.03,sf.keyFront-.05],np=t=>{let e=(15+110*t)*Math.PI/180,o=2.1+.4*t;return[oa[0]+Math.cos(e)*o,1.15+.4*t,oa[2]+Math.sin(e)*o]},Tc=[{eye:np(1),target:[oa[0],.92,oa[2]-.15],fov:46,aperture:.6},{eye:[-6.93,3.2,45.85],target:[-6.93,.77,45.3],fov:34,aperture:.6,to:l1},{eye:[oa[0]+1,1.14,oa[2]+1.72],target:[l1[0]+.05,.8,l1[2]+.05],fov:40,aperture:1,to:l1}],Py=(t,e)=>Math.hypot(t[0]-e[0],t[1]-e[1],t[2]-e[2]),f1=t=>({fade:0,letterbox:.55,exposure:1.3,focus:Py(t.eye,t.to||oa),aperture:t.aperture,vignette:.42,shafts:0}),op={fade:0,letterbox:.55,exposure:2.1,focus:6.2,aperture:.55,vignette:.45,shafts:0},Lc={fade:0,letterbox:.55,exposure:2,focus:.82,aperture:1.1,vignette:.48,shafts:0},rf={fade:0,letterbox:.55,exposure:1.8,focus:.42,aperture:1.3,vignette:.5,shafts:0},NE=`
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
`;$y.exports=function(e){let{root:o,avatar:r}=e,n=document.createElement("style");n.textContent=NE,document.head.appendChild(n);let a=document.createElement("div");a.className="conf-ui",a.innerHTML=`
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
		</div>`,o.appendChild(a);let s=a.querySelector(".conf-write"),i=a.querySelector("textarea"),c=a.querySelector('[data-act="send"]'),h=a.querySelector(".conf-hint"),l=a.querySelector(".conf-close"),d=a.querySelector(".conf-final"),u=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,p=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;i.addEventListener("input",()=>{let ct=i.value.match(new RegExp("^\\s*(\\S+\\s+){0,"+(Cy-1)+"}\\S+"));(i.value.trim()?i.value.trim().split(/\s+/).length:0)>Cy&&ct&&(i.value=ct[0]),c.disabled=!i.value.trim()}),["keydown","keyup","keypress"].forEach(ct=>i.addEventListener(ct,Zt=>Zt.stopPropagation())),a.addEventListener("pointerdown",ct=>ct.stopPropagation()),a.addEventListener("click",ct=>{let Zt=ct.target.closest("button");Zt&&(ct.stopPropagation(),Zt.dataset.act==="send"&&pt(),Zt.dataset.act==="leave"&&xt())});let f=!1,v="",m=0,g=null,x=null,y="",w=null,M=0,_="",S=document.createElement("canvas");S.width=512,S.height=652;function R(ct){ct!==_&&(_=ct,s.classList.toggle("on",ct==="write"),h.classList.toggle("on",ct==="hint"),l.classList.toggle("on",f&&ct==="hint"&&(v==="room"||v==="peek")),d.classList.toggle("on",ct==="final"),ct==="write"&&setTimeout(()=>{if(v==="write")try{i.focus({preventScroll:!0})}catch(Zt){}},900))}function T(ct){v=ct,m=0}function H(ct,Zt){if(f)return;f=!0,g={eye:ct.eye.slice(),target:ct.target.slice(),fov:ct.fov,roll:ct.roll||0},x=Object.assign({},Zt),y="",i.value="",c.disabled=!0,jn.STATE.fold=0,jn.STATE.slide=0,jn.STATE.shown=!0,jn.STATE.active=!0;let de=S.getContext("2d");de.setTransform(1,0,0,1,0,0),de.clearRect(0,0,S.width,S.height),jn.STATE.ink=S,jn.STATE.inkDirty=!0,document.body.classList.add("confessing");let se=Tc[0],Rt=p?.3:5.5,Ue=p?.3:3.6;q.i=0,q.u=0,q.T=Rt+Ue,q.moving=!0,q.rest=0,q.raw=!0,q.lookFrom=x,q.lookTo=f1(se);let k=[g.eye,[3.4,1.75,44.5],[.3,1.72,44.7],[-2.8,1.5,45.4],np(0)],Be=[g.target,[-3,1.9,44.5],[-6.5,1.3,44.9],[oa[0],1,oa[2]-.1],se.target];q.path=Xe=>{let mo=Xe*(Rt+Ue);if(mo<Rt){let vt=mo/Rt,Ot=1-Math.cos(vt*Math.PI/2);return{eye:pi(k,Ot),target:pi(Be,sr(0,1,Ot*1.05)),fov:qr(g.fov,52,sr(.4,1,Ot)),roll:(g.roll||0)*(1-Ot)}}let Je=(mo-Rt)/Ue,bo=1-Math.pow(1-Je,2.4);return{eye:np(bo),target:se.target,fov:qr(52,se.fov,bo),roll:.05*Math.sin(Math.PI*bo)}},T("room"),R("")}let q={i:0,u:0,T:1,moving:!1,rest:0,raw:!1,path:null,lookFrom:null,lookTo:null},W=()=>u?"Scroll on":"Swipe up";function F(ct){let Zt=Se,de=Tc[ct],se={eye:Zt.eye.slice(),target:Zt.target.slice(),fov:Zt.fov,roll:Zt.roll||0},Rt=af(se.eye,de.eye,.5),Ue=[Rt[0]-oa[0],0,Rt[2]-oa[2]],k=Math.hypot(Ue[0],Ue[2])||1,Be=[Rt[0]+Ue[0]/k*.6,Rt[1]+.3,Rt[2]+Ue[2]/k*.6];q.path=Xe=>{let mo=1-Xe;return{eye:[0,1,2].map(Je=>mo*mo*se.eye[Je]+2*mo*Xe*Be[Je]+Xe*Xe*de.eye[Je]),target:af(se.target,de.target,sr(0,1,Xe)),fov:qr(se.fov,de.fov,Xe),roll:se.roll*mo}},q.lookFrom=j||f1(Tc[q.i]),q.lookTo=f1(de),q.i=ct,q.u=0,q.moving=!0,q.rest=0,q.raw=!1,q.T=p?.4:Math.max(2.8,Math.min(4.4,Py(se.eye,de.eye)*1+1.6)),R("")}let j=null;function pt(){if(v!=="write"||(y=i.value.trim(),!y))return;i.blur(),R("");let ct=Math.max(10,Math.min(22,24-y.length/28));w=TE(S,e.glyphs(),{ink:"rgba(30,16,8,0.97)",xh:ct,width:.15,seed:11+y.length,speed:60,pace:.2,minDur:.03,maxTime:Zt=>2.4+Zt.length/160,fixed:{mx:46,my:40},onPen:()=>{jn.STATE.inkDirty=!0},onDone:()=>{jn.STATE.inkDirty=!0}}),T("down")}function Ht(){try{let ct={access_key:LE,subject:"A note left in the confessional",from_name:"Your gallery",message:y,page:location.href,when:new Date().toString()};fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(ct),keepalive:!0}).catch(()=>{})}catch(ct){}}function Nt(){v==="ready"&&(Ht(),T("fold"),R(""))}function xt(){!f||v==="leave"||(R(""),i.blur(),ot=Se,Bt=j,T("leave"))}let ot=null,Bt=null,Se=null,be=jn.SHOTS.window,Ke=jn.OFF,$e=ct=>[ct[0]+Ke[0],ct[1],ct[2]],no=[[3.4,1.75,44.5],[.3,1.72,44.5],[-2.5,1.66,45],[-4.6,1.6,46.55],[-7,1.58,47.15],[-9.3,1.55,46.4],$e([1.25,1.5,43.25]),$e([-.55,1.36,42.92])],rt=[[-3,1.9,44.5],[-6.5,1.5,44.6],[-7,1,44.4],[-7.6,.95,44],[-10.5,1.5,44.6],$e([-1,1.55,43.6]),$e([-1.4,1.35,43.1]),$e([-1.5,1.33,43.3])];function yt(ct){let Zt=ea(Ia(ct)),de=[g.eye,...no,be.eye],se=[g.target,...rt,be.target];return{eye:pi(de,Zt),target:pi(se,sr(0,1,Zt*1.03)),fov:qr(g.fov,be.fov,sr(.6,.97,Zt)),roll:(g.roll||0)*(1-Zt)}}function it(ct,Zt){if(p)return ct;let de=performance.now()/1e3,se=.004*Zt,Rt=Math.sin(de*.61)*.6+Math.sin(de*1.37+1.3)*.4,Ue=Math.sin(de*.47+2.1)*.6+Math.sin(de*1.13+.4)*.4;return{eye:[ct.eye[0]+Rt*se,ct.eye[1]+Ue*se*.7,ct.eye[2]],target:[ct.target[0]+Ue*se*1.5,ct.target[1]+Rt*se,ct.target[2]],fov:ct.fov,roll:ct.roll}}function Mt(ct,Zt,de){let se={};for(let Rt in Zt)se[Rt]=typeof Zt[Rt]=="number"&&typeof ct[Rt]=="number"?qr(ct[Rt],Zt[Rt],de):Zt[Rt];return se}function Vt(ct){ct*=window.__confSpeed||1,m+=ct;let Zt=c1(be),de=c1(jn.SHOTS.paper),se,Rt,Ue=c1(jn.SHOTS.peek);if(v==="room")q.moving?(q.u=Math.min(1,q.u+ct/q.T),se=q.path(q.raw?q.u:ea(q.u)),Rt=Mt(q.lookFrom,q.lookTo,sr(.1,.9,q.u)),q.raw&&(Rt.fade=(x.fade||0)*(1-sr(0,.12,q.u))),q.u>=1&&(q.moving=!1,q.rest=0,h.textContent=W(),R("hint"))):(q.rest+=ct,se=it(c1(Tc[q.i]),2.5),Rt=f1(Tc[q.i]));else if(v==="enter"){let Be=Ia(m/(p?.6:9)),Xe=ea(Be),mo=[he.eye,[-7.6,1.9,47.6],[-9.6,1.85,45.6],$e([.75,1.5,42.95]),$e([-.25,1.42,42.82]),$e([-.9,1.42,42.82]),Ue.eye];se={eye:pi(mo,Xe),target:af(he.target,Ue.target,sr(0,.35,Xe)),fov:qr(he.fov,Ue.fov,sr(.3,1,Xe)),roll:0},Rt=Mt(Ne,op,sr(.2,.9,Be)),Be>=1&&T("peek")}else if(v==="peek")se=it(Ue,1.5),Rt=op,m>(p?.5:3.2)&&T("turn");else if(v==="turn"){let k=Ia(m/(p?.4:3.2));se=ep(Ue,Zt,ea(k)),Rt=Mt(op,Lc,ea(k)),k>=1&&(T("write"),R("write"))}else if(v==="write")se=it(Zt,1),Rt=Lc;else if(v==="down"){let k=Ia(m/(p?.4:2));se=ep(Zt,de,ea(k)),Rt=Mt(Lc,rf,ea(k)),k>=1&&(M=w.write(y,p)||0,jn.STATE.inkDirty=!0,T("writing"))}else if(v==="writing")se=it(de,.6),Rt=rf,m>M+.8&&(T("ready"),h.textContent=u?"Scroll to fold it and pass it through":"Swipe up to fold it and pass it through",R("hint"));else if(v==="ready")se=it(de,.6),Rt=rf;else if(v==="fold"){let k=Ia(m/(p?.3:1.5));jn.STATE.fold=ea(k),se=it(de,.6),Rt=rf,k>=1&&T("slide")}else if(v==="slide"){let Be=Ia(m/(p?.6:3.4));jn.STATE.slide=ea(sr(0,.7,Be));let Xe=ea(sr(.35,1,Be));se=ep(de,Zt,Xe),Rt=Mt(rf,Lc,Xe),Be>=1&&(jn.STATE.shown=!1,T("final"),R("final"))}else if(v==="final")se=it(Zt,1),Rt=Lc;else if(v==="leave"){let k=p?.6:ot.eye[0]<Ke[0]-.3?12:7,Be=Ia(m/k),Xe={eye:g.eye,target:g.target,fov:g.fov,roll:g.roll},mo=ea(Be),Je=ot.eye[0]<Ke[0]-.3,bo=Je?[ot.eye,$e([-.55,1.4,42.8]),$e([1.4,1.55,43.3]),[-9.3,1.58,46.4],[-7,1.6,47.15],[-4.6,1.62,46.55],[-2.2,1.68,44.8],[.6,1.72,44.5],Xe.eye]:[ot.eye,[-3.4,1.7,46.2],[-1.2,1.7,44.8],[.6,1.72,44.5],Xe.eye],vt=Je?[ot.target,$e([1.5,1.45,43.4]),[-7,1.2,44.6],[-4,1.5,47],[-1.5,1.7,45.5],[1,1.8,44.5],[4,1.8,44.5],[7,1.9,44.2],Xe.target]:[ot.target,[-1.5,1.7,45.2],[2,1.8,44.5],[6,1.9,44.3],Xe.target];if(se={eye:pi(bo,mo),target:pi(vt,mo),fov:qr(ot.fov,Xe.fov,mo),roll:Xe.roll*mo},Rt=Mt(Bt||Lc,x,sr(.1,.7,Be)),Rt.fade=(x.fade||0)*sr(.82,1,Be),Be>=1){f=!1,jn.STATE.active=!1,jn.STATE.shown=!0,jn.STATE.fold=0,jn.STATE.slide=0;let Ot=S.getContext("2d");Ot.setTransform(1,0,0,1,0,0),Ot.clearRect(0,0,S.width,S.height),jn.STATE.inkDirty=!0,document.body.classList.remove("confessing"),e.onExit&&e.onExit()}}return Se=se,j=Rt,{camera:se,look:Rt}}let he=null,Ne=null;function Qt(){if(v==="room"){if(q.moving||q.rest<.4)return;q.i<Tc.length-1?F(q.i+1):(he=Se,Ne=j,R(""),T("enter"));return}if(v==="peek"){m>.4&&T("turn");return}v==="ready"?Nt():v==="writing"&&w&&(w.finish(),m=Math.max(m,M))}function Wt(){v==="room"&&!q.moving&&q.rest>.4&&q.i>0&&F(q.i-1)}return{start:H,update:Vt,leave:xt,get active(){return f},get stage(){return v},wheel(ct){ct>8?Qt():ct<-8&&Wt()},swipe(ct){ct>0?Qt():ct<0&&Wt()},tap(){Qt()},key(ct){return["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(ct)>=0?(Qt(),!0):["ArrowUp","ArrowLeft","PageUp"].indexOf(ct)>=0?(Wt(),!0):ct==="Escape"?(xt(),!0):!1},_setNote(ct){i.value=ct,i.dispatchEvent(new Event("input"))}}}});var Wy=At((P7,jy)=>{"use strict";var Nc=cc(),h1=Td(),rp=Kf(),RE=ul(),ap=Nd(),OE=zr(),u1=!OE.isPhone&&!!(window.matchMedia&&window.matchMedia("(pointer: fine)").matches),{A:wr}=Lr(),{C:k0,PAINTING_X:Pc}=S0(),cr=t=>Math.max(0,Math.min(1,t)),ce=(t,e,o)=>t+(e-t)*o,tn=(t,e,o)=>[ce(t[0],e[0],o),ce(t[1],e[1],o),ce(t[2],e[2],o)],zo=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],sp=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],X0=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],ee=(t,e,o)=>{let r=cr((o-t)/(e-t));return r*r*(3-2*r)};function CE(t,e,o,r,n,a){if(n<=0)return[t,o];let s=2/r,i=s*n,c=1/(1+i+.48*i*i+.235*i*i*i),h=a*r,l=Math.max(-h,Math.min(h,t-e)),d=t-l,u=(o+s*l)*n,p=(o-s*u)*c,f=d+(l+u)*c;return e-t>0==f>e&&(f=e,p=0),[f,p]}var qy=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,PE=t=>t*t*t,ip=t=>1-Math.pow(1-t,3),An=t=>-(Math.cos(Math.PI*t)-1)/2;function In(t,e){let o=t.length-1,r=cr(e)*o,n=Math.min(o-1,Math.floor(r)),a=r-n,s=t[Math.max(0,n-1)],i=t[n],c=t[n+1],h=t[Math.min(o,n+2)],l=a*a,d=l*a;return[0,1,2].map(u=>.5*(2*i[u]+(-s[u]+c[u])*a+(2*s[u]-5*i[u]+4*c[u]-h[u])*l+(-s[u]+3*i[u]-3*c[u]+h[u])*d))}var Mo=(t,e,o,r)=>({eye:t,target:e,fov:o,roll:r||0});function yi(t,e,o){return Mo(tn(t.eye,e.eye,o),tn(t.target,e.target,o),ce(t.fov,e.fov,o),ce(t.roll,e.roll,o))}var up=()=>ee(.75,1.3,window.innerWidth/window.innerHeight),Y0=(t,e)=>yi(t,e,up()),d1=[7,3.95,k0.hallEnd-.05],$E=[k0.x1,2.9,k0.zc],Oc=[16.75,4.55,6.75],dp=[6.92,2.72,14.5],na=[7.3,.015,47.1],IE=[Oc,[16.2,4,7],[15.3,3.45,6.4],[14.1,3.2,5.7],[12.2,3.35,6.6],[10,3.75,9.6],[8.2,3.8,12.2],[7.3,3.4,13.8],dp],qE=[dp,[7.3,4.6,19.5],[7.6,4.9,23.5],[6.6,4.3,28.5],[7.5,3.2,34],[6.8,2.1,39.5],[7.4,1,44.2],[7.2,.3,46.4],na],mi=[Pc[0],3,k0.z0],gi=[Pc[1],3,k0.z0],lp=47.45,By=4.6,DE=13.2,FE=1.57,cf=[7.55,1.25,46.75],pp=[17.25,2.42,46],vp=[26.05,1.95,46],lf=[36.15,.015,44],g1=()=>ce(6.8,6.15,up()),GE=[cf,[9.6,1.65,46.2],[12.3,2.05,45.1],[14.6,2.35,44.5],[16.2,2.3,44.7],pp],HE=[pp,[20.2,2.05,45.6],[23.2,1.8,45],vp],xi=[Pc[2],3,k0.z0],fp=[34.8,1.35,46],bs=[7.89,.03,19.03],Dy=.36,Fy=13.64,A0=[{side:"left",z:34.5},{side:"left",z:23.5},{side:"left",z:14.6},{side:"right",z:14.6},{side:"right",z:23.5},{side:"right",z:34.5}];function Dr(t){let e=t.side==="left"?1:-1;return tn([7-e*1,3,t.z+e*.2],[7-e*.6,3.25,t.z+e*.13],up())}function UE(t){return t.side==="left"?Y0(Mo([8.6,3.9,t.z],[Dy,1.45,t.z],76),Mo([8,3.6,t.z+.7],[Dy,3.95,t.z-2],46,-.008)):Y0(Mo([5.4,3.9,t.z],[Fy,1.45,t.z],76),Mo([6,3.6,t.z-.7],[Fy,3.95,t.z+2],46,-.008))}var BE=()=>[lf,[35.6,.5,44.6],[33.2,1.5,45.6],[29,2.3,46.1],[23.5,2.7,45.9],[18.5,2.9,45.4],[14.8,3.1,44.3],[11,3.3,41.8],[7.4,3.4,38.8],[5.4,3.3,36.6],Dr(A0[0])],jE=()=>[Dr(A0[2]),[3,3.2,13.2],[1.7,3,12],[2.6,3.2,10],[5,3.6,8.9],[7,3.8,8.6],[9,3.6,8.9],[11.4,3.2,10],[12.3,3,12],[11,3.1,13.4],Dr(A0[3])],WE=()=>[Dr(A0[5]),[9,3.4,31],[7.8,2.8,27.5],[6.8,1.9,24.5],[7.4,1,21],[7.75,.35,19.6],bs],Gy={2:{pos:()=>dp,amp:[.18,.07,.12],tumble:.5},7:{pos:()=>cf,amp:[.12,.09,.1],tumble:.55},8:{pos:()=>pp,amp:[.1,.08,.08],tumble:.5},9:{pos:()=>vp,amp:[.09,.06,.07],tumble:.45},10:{pos:()=>fp,amp:[.07,.04,.06],tumble:.35},12:{pos:()=>Dr(A0[0]),amp:[.12,.08,.1],tumble:.5},13:{pos:()=>Dr(A0[1]),amp:[.12,.08,.1],tumble:.5},14:{pos:()=>Dr(A0[2]),amp:[.12,.08,.1],tumble:.5},15:{pos:()=>Dr(A0[3]),amp:[.12,.08,.1],tumble:.5},16:{pos:()=>Dr(A0[4]),amp:[.12,.08,.1],tumble:.5},17:{pos:()=>Dr(A0[5]),amp:[.12,.08,.1],tumble:.5}},ys=[{name:"corridor",ui:"intro",look:{letterbox:1,exposure:1,focus:14,aperture:.25,vignette:.1},cam(t){let e=.9*(1-Math.exp(-t/14)),o=[0,Math.sin(t*.37)*.025,Math.sin(t*.23)*.06],r=Y0(Mo([k0.x0+.9,1.85,k0.zc+.25],[k0.x1,2.85,k0.zc-.1],64),Mo([k0.x0+1.2,2,k0.zc+.35],[k0.x1,2.6,k0.zc-.15],50));return r.eye=zo(zo(r.eye,[e,0,0]),o),r}},{name:"about",ui:"about",look:{letterbox:.55,exposure:1.32,focus:2.9,aperture:.9,vignette:.12,shafts:.65},cam(t){let e=[Math.sin(t*.21)*.08,Math.sin(t*.33)*.03,-.25*(1-Math.exp(-t/12))],o=Y0(Mo([16.6,1.9,9.2],[17.3,.4,5.6],64),Mo([15,1.35,7.75],[17.55,1.05,5.5],44,-.02));return o.eye=zo(o.eye,e),o}},{name:"sky",ui:"sky",look:{letterbox:.55,exposure:1,focus:2.1,aperture:.45,vignette:.1,shafts:1},cam(t){let e=[Math.sin(t*.12)*.35,Math.sin(t*.2)*.04,(1-Math.cos(t*.12))*.25],o=Y0(Mo([7,1.35,13],[7.2,7.6,20.4],74,.05),Mo([6.6,1.5,12.6],[7.3,7.2,20.8],56,.07));return o.eye=zo(o.eye,e),o}},{name:"master",ui:"master",look:{letterbox:.55,exposure:1.12,focus:8,aperture:.6,vignette:.3,shafts:.5},cam(t){let e=[Math.sin(t*.17)*.05,Math.sin(t*.29)*.02,-.35*(1-Math.exp(-t/16))],o=Y0(Mo([7,3.6,43.7],[7,3.85,d1[2]],74),Mo([7,3.6,41.3],[7,3.95,d1[2]],46));return o.eye=zo(o.eye,e),o}},{name:"story",ui:"story",look:{letterbox:.55,exposure:1,focus:8.1,aperture:.9,vignette:.4,shafts:.4},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=Y0(Mo([7,3.9,40.3],[7,1.35,d1[2]],76),Mo([6.3,3.6,41.2],[3.7,3.95,d1[2]],46,-.008));return o.eye=zo(o.eye,e),o}},{name:"leaf",ui:"leaf",look:{letterbox:.55,exposure:1.15,focus:1.25,aperture:1.3,vignette:.35,shafts:.4},cam(t){let e=[Math.sin(t*.2)*.02,Math.sin(t*.3)*.006,0],o=Y0(Mo([7.15,.15,46],[7.3,.04,na[2]],50),Mo([7.05,.14,45.9],[7.25,.05,na[2]],32));return o.eye=zo(o.eye,e),o}},{name:"steps",ui:"steps",look:{letterbox:.9,exposure:1.2,focus:1.6,aperture:1.4,vignette:.4,shafts:.4},cam(t){let e=[Math.sin(t*.2)*.015,0,0],o=Y0(Mo([7.15,.1,46.3],[7.05,.1,lp],50),Mo([7.1,.12,45.85],[7,.2,lp],30));return o.eye=zo(o.eye,e),o}},{name:"float",ui:"float",look:{letterbox:.55,exposure:1.1,focus:2.2,aperture:.8,vignette:.3,shafts:.6},cam(t){let e=[Math.sin(t*.17)*.05,Math.sin(t*.27)*.02,0],o=Y0(Mo([7.3,.85,45.65],[7.6,1.38,47.1],64),Mo([7.25,.82,45.8],[7.65,1.35,47.1],44));return o.eye=zo(o.eye,e),o}},{name:"painting1",ui:"p1",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=Y0(Mo([mi[0],2.3,46.85],[mi[0],1.25,mi[2]],74),Mo([mi[0]-.6,2.55,46.85],[mi[0]+1.9,2.9,mi[2]],46,.008));return o.eye=zo(o.eye,e),o}},{name:"painting2",ui:"p2",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=Y0(Mo([gi[0],1.95,46.85],[gi[0],1,gi[2]],74),Mo([gi[0]-.6,2.1,46.85],[gi[0]+1.9,2.75,gi[2]],46,.008));return o.eye=zo(o.eye,e),o}},{name:"painting3",ui:"p3",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.9},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=Y0(Mo([xi[0],1.4,46.85],[xi[0],.6,xi[2]],74),Mo([xi[0]-.6,1.45,46.85],[xi[0]+1.9,2,xi[2]],46,.008));return o.eye=zo(o.eye,e),o}},{name:"door",ui:"door",look:{letterbox:.8,exposure:1.05,focus:1.45,aperture:1.1,vignette:.35,shafts:1},cam(t){let e=[Math.sin(t*.2)*.02,Math.sin(t*.3)*.006,0],o=Y0(Mo([34.75,.5,44.15],[k0.x1,.8,43.95],66),Mo([34.75,.45,44.3],[k0.x1,.35,43.95],50));return o.eye=zo(o.eye,e),o}},...A0.map((t,e)=>({name:"hall"+e,ui:"h"+e,look:{letterbox:.55,exposure:1,focus:7.6,aperture:.7,vignette:.35,shafts:.7},cam(o){let r=[Math.sin(o*.15)*.04,Math.sin(o*.25)*.015,Math.sin(o*.11)*.04],n=UE(t);return n.eye=zo(n.eye,r),n}})),{name:"rest",ui:"end",look:{letterbox:.55,exposure:1.05,focus:2.4,aperture:.5,vignette:.4,shafts:1.15},cam(t){let e=t*.025,o=Y0(Mo([7.75,2.6,18.6],[7.89,0,19.08],60),Mo([7.75,2.3,18.45],[7.89,0,19.08],46)),r=o.eye[0]-bs[0],n=o.eye[2]-bs[2];return o.eye=[bs[0]+r*Math.cos(e)-n*Math.sin(e),o.eye[1],bs[2]+r*Math.sin(e)+n*Math.cos(e)],o}}],VE=[1,.96,.88];function Hy(t,e){return{dur:e,cam(o,r,n){let a=An(o),s=yi(r,n,a),i=A0[t].side==="left"?1:-1;return s.eye=zo(s.eye,[i*.6*Math.sin(Math.PI*a),.15*Math.sin(Math.PI*a),0]),s},look(o,r,n){let a={};for(let s in n)typeof n[s]=="number"&&(a[s]=ce(r[s],n[s],o));return a.aperture=ce(r.aperture,n.aperture,o)*(1-.5*Math.sin(Math.PI*o)),a},leaf(o){let r=An(o),n=Dr(A0[t]),a=Dr(A0[t+1]),s=A0[t].side==="left"?1:-1,i=zo(tn(n,a,.5),[s*1.2,.5,0]),c=In([n,tn(n,i,.6),i,tn(a,i,.6),a],r);return{phase:"fly",pos:zo(c,[0,Math.sin(o*Math.PI*5)*.07*Math.sin(Math.PI*o),0]),tumble:.5+.35*Math.sin(Math.PI*o)}}}}var cp=[{dur:6.2,cam(t,e,o){if(t<.5){let i=PE(t/.5),c=tn(e.eye,[k0.x1-3.2,2.6,k0.zc],i),h=tn(e.target,$E,ee(0,.6,t/.5));return Mo(c,h,ce(e.fov,e.fov-8,i),ce(e.roll,.04,i))}let r=ip((t-.5)/.5),n=[[wr.cx+.4,10.4,wr.zc+.6],[wr.cx-.6,7.6,wr.zc+1.3],[wr.cx-1.9,4.6,wr.zc+1.75],o.eye],a=[[wr.cx-.1,0,wr.zc-.2],[wr.cx-1,.4,wr.zc-.1],[wr.cx-1.1,.8,wr.zc-.2],o.target];return Mo(In(n,r),In(a,r),ce(o.fov+14,o.fov,r),ce(-.25,o.roll,r))},look(t,e,o){let r=ee(.22,.5,t),n=1-ee(.5,.74,t);return{fade:t<.5?r:n,fadeColor:VE,exposure:ce(e.exposure,o.exposure,ee(.5,.9,t))*(1+2.2*(t<.5?ee(.15,.5,t):1-ee(.5,.8,t))),letterbox:ce(e.letterbox,o.letterbox,ee(.3,.7,t)),aperture:t<.5?e.aperture*(1-t*2):o.aperture*ee(.6,1,t),focus:ce(4,o.focus,ee(.5,1,t)),shafts:ce(e.shafts,o.shafts,ee(.4,.6,t)),vignette:ce(e.vignette,o.vignette,t)}},leaf(){return{phase:"home"}}},{dur:9,cam(t,e,o,r){let n=[e.eye,[15.6,2.4,8.3],[15.4,2.7,7.1],[12.6,2.6,5.4],[9.6,2,7.4],[7.6,1.6,10.6],o.eye],a=In(n,An(t)),s=ee(0,.12,t)*(1-ee(.82,1,t)),i=tn(tn(e.target,o.target,ee(.55,1,t)),r.pos,s),c=ce(e.fov,o.fov,ee(.3,1,t))-6*Math.sin(Math.PI*t),h=ce(e.roll,o.roll,t)+.05*Math.sin(Math.PI*2*t);return Mo(a,i,c,h)},look(t,e,o,r,n){let a=Math.hypot(r.pos[0]-n[0],r.pos[1]-n[1],r.pos[2]-n[2]);return{exposure:ce(e.exposure,o.exposure,ee(.25,.75,t)),letterbox:ce(e.letterbox,o.letterbox,t),focus:ce(a,o.focus,ee(.8,1,t)),aperture:ce(.7,o.aperture,ee(.8,1,t)),shafts:ce(e.shafts,o.shafts,ee(.3,.8,t)),vignette:ce(e.vignette,o.vignette,t)}},leaf(t){let e=qy(t),o=Math.sin(t*Math.PI*7)*.14*Math.sin(Math.PI*t);return{phase:"fly",pos:zo(In(IE,e),[0,Math.sin(t*Math.PI*9)*.05*Math.sin(Math.PI*t),o]),tumble:1-.5*ee(.8,1,t)}}},{dur:11.5,cam(t,e,o,r){let n=In([e.eye,[7,1.9,19],[7.1,1.6,27.5],[6.9,1.1,36],[7,.7,42.5],[7.05,.5,45.7]],ee(0,.8,t)*.6+An(cr(t/.8))*.4),a=In([[7.05,.5,45.7],[7,1.2,45.3],[7,2.6,43.8],o.eye],An(ee(.8,1,t))),s=t<.8?n:a,i=tn(tn(e.target,r.pos,ee(.03,.22,t)),o.target,ee(.82,1,t)),c=ce(e.fov,o.fov,ee(.15,.7,t))-6*ee(.6,.8,t)*(1-ee(.85,1,t)),h=ce(e.roll,o.roll,ee(0,.6,t))-.04*Math.sin(Math.PI*t);return Mo(s,i,c,h)},look(t,e,o,r,n){let a=Math.hypot(r.pos[0]-n[0],r.pos[1]-n[1],r.pos[2]-n[2]);return{exposure:ce(e.exposure,o.exposure,ee(.5,1,t)),letterbox:ce(e.letterbox,o.letterbox,t),focus:ce(a,o.focus,ee(.84,1,t)),aperture:ce(1.1,o.aperture,ee(.84,1,t)),shafts:ce(e.shafts,o.shafts,ee(.2,.9,t)),vignette:ce(e.vignette,o.vignette,ee(.5,1,t))}},leaf(t){let e=ce(qy(t),t,.35),o=In(qE,ee(0,.78,e)),r=Math.sin(t*Math.PI*8)*.35*(1-ee(.55,.76,t)),n=ee(.7,.8,t);return{phase:"fly",pos:zo(o,[r,Math.abs(Math.cos(t*Math.PI*8))*.12*(1-n),0]),tumble:1-n,swing:r}}},{dur:2.6,cam(t,e,o){let r=An(t),n=yi(e,o,r);return n.eye=zo(n.eye,[0,0,-.35*Math.sin(Math.PI*r)]),n},look(t,e,o){let r=An(t),n={};for(let a in o)typeof o[a]=="number"&&(n[a]=ce(e[a],o[a],r));return n},leaf(){return{phase:"floor"}}},{dur:4.5,cam(t,e,o){let r=An(t),n=In([e.eye,[6.9,1.7,43.9],[7.05,.45,45.4],o.eye],r),a=tn(e.target,o.target,ee(.1,.85,t));return Mo(n,a,ce(e.fov,o.fov,ee(.2,1,t)),ce(e.roll,o.roll,r))},look(t,e,o){let r={};for(let n in o)typeof o[n]=="number"&&(r[n]=ce(e[n],o[n],ee(.2,1,t)));return r},leaf(){return{phase:"floor"}}},{dur:5.5,cam(t,e,o){return yi(e,o,An(t))},look(t,e,o){let r={};for(let n in o)typeof o[n]=="number"&&(r[n]=ce(e[n],o[n],An(t)));return r},leaf(){return{phase:"floor"}},walker(t){return ce(By,g1(),t)}},{dur:11,kick:t=>cr((t-Rc())/(1-Rc())),cam(t,e,o,r){let n=Rc(),a=ee(0,n,t)*(1-ee(n+.12,n+.35,t)),s=Uy(Math.min(t,Cc)),i=zo(e.target,[(s-e.target[0])*.15*a,0,0]),c=ee(n+.12,1,t),h=In([e.eye,e.eye,zo(e.eye,[0,.12,-.3]),o.eye],c);return i=tn(i,r.pos,ee(n+.06,n+.24,t)*(1-ee(.9,1,t))),i=tn(i,o.target,ee(.88,1,t)),Mo(h,i,ce(e.fov,o.fov,c),ce(e.roll,o.roll,c))},look(t,e,o,r,n){let a=Rc(),s=Math.hypot(r.pos[0]-n[0],r.pos[1]-n[1],r.pos[2]-n[2]),i=ee(0,.12,t)*(1-ee(a+.25,a+.5,t));return{letterbox:ce(ce(e.letterbox,o.letterbox,ee(a,1,t)),1.75,i),exposure:ce(e.exposure,o.exposure,ee(a,1,t)),focus:t<a?e.focus:ce(e.focus,s,ee(a,a+.2,t)),aperture:ce(e.aperture,o.aperture,ee(a,1,t)),vignette:ce(e.vignette,o.vignette,t),shafts:ce(e.shafts,o.shafts,t)}},leaf(t){let e=cr((t-Rc())/(1-Rc()));if(e<=0)return{phase:"floor"};let o=ee(0,.85,e)*.85+ip(ee(0,.15,e))*.15;return{phase:"fly",pos:zo(na,[(cf[0]-na[0])*o+Math.sin(e*9)*.08*(1-e),(cf[1]-na[1])*o,(cf[2]-na[2])*o+Math.sin(e*7)*.06*(1-e)]),tumble:1.3-.75*e}},walker(t){return t<.985?Uy(t):null}},{dur:9,cam(t,e,o,r){let n=An(t),a=In([e.eye,[9.4,1.35,45.6],[12.4,2,45.9],[15,2.45,46.5],o.eye],n),s=1-ee(.6,.92,t),i=tn(tn(e.target,r.pos,ee(0,.15,t)),o.target,1-s),c=ce(e.fov,o.fov,ee(.3,1,t)),h=ce(e.roll,o.roll,n)+.04*Math.sin(Math.PI*t);return Mo(a,i,c,h)},look(t,e,o,r,n){let a=Math.hypot(r.pos[0]-n[0],r.pos[1]-n[1],r.pos[2]-n[2]);return{letterbox:ce(e.letterbox,o.letterbox,t),exposure:ce(e.exposure,o.exposure,ee(.3,.8,t)),focus:ce(a,o.focus,ee(.6,.95,t)),aperture:ce(e.aperture,o.aperture,ee(.6,1,t)),vignette:ce(e.vignette,o.vignette,t),shafts:ce(e.shafts,o.shafts,ee(.3,.8,t))}},leaf(t){let e=An(t);return{phase:"fly",pos:zo(In(GE,e),[0,Math.sin(t*Math.PI*5)*.08*Math.sin(Math.PI*t),Math.sin(t*Math.PI*4)*.12*Math.sin(Math.PI*t)]),tumble:.55+.4*Math.sin(Math.PI*t)}}},{dur:6.5,cam(t,e,o){let r=An(t),n=yi(e,o,r);return n.eye=zo(n.eye,[0,.12*Math.sin(Math.PI*r),.1*Math.sin(Math.PI*r)]),n},look(t,e,o){let r={};for(let n in o)typeof o[n]=="number"&&(r[n]=ce(e[n],o[n],t));return r.aperture=ce(e.aperture,o.aperture,t)*(1-.5*Math.sin(Math.PI*t)),r},leaf(t){let e=An(t);return{phase:"fly",pos:zo(In(HE,e),[0,Math.sin(t*Math.PI*4)*.07*Math.sin(Math.PI*t),0]),tumble:.5+.3*Math.sin(Math.PI*t)}}},{dur:6.5,cam(t,e,o){let r=An(t),n=yi(e,o,r);return n.eye=zo(n.eye,[0,.1*Math.sin(Math.PI*r),.1*Math.sin(Math.PI*r)]),n},look(t,e,o){let r={};for(let n in o)typeof o[n]=="number"&&(r[n]=ce(e[n],o[n],t));return r.aperture=ce(e.aperture,o.aperture,t)*(1-.5*Math.sin(Math.PI*t)),r},leaf(t){let e=An(t);return{phase:"fly",pos:zo(In([vp,[29.2,1.75,45.5],[32.2,1.5,45.4],fp],e),[0,Math.sin(t*Math.PI*4)*.06*Math.sin(Math.PI*t),0]),tumble:.45+.25*Math.sin(Math.PI*t)}}},{dur:6,cam(t,e,o,r){let n=An(t),a=In([e.eye,[34.2,1.15,45.6],[34.5,.7,44.8],o.eye],n),s=ee(.05,.3,t)*(1-ee(.8,1,t)),i=tn(tn(e.target,o.target,ee(.6,1,t)),r.pos,s);return Mo(a,i,ce(e.fov,o.fov,ee(.2,1,t)),ce(e.roll,o.roll,n))},look(t,e,o,r,n){let a=Math.hypot(r.pos[0]-n[0],r.pos[1]-n[1],r.pos[2]-n[2]);return{letterbox:ce(e.letterbox,o.letterbox,t),exposure:ce(e.exposure,o.exposure,t),focus:ce(a,o.focus,ee(.8,1,t)),aperture:ce(.9,o.aperture,ee(.8,1,t)),vignette:ce(e.vignette,o.vignette,t),shafts:ce(e.shafts,o.shafts,t)}},leaf(t){let e=In([fp,[35.3,.9,45.2],[35.75,.4,44.4],[36,.08,44.05],lf],ee(0,.85,t)),o=Math.sin(t*Math.PI*6)*.25*(1-ee(.35,.82,t)),r=ee(.78,.88,t);return{phase:"fly",pos:zo(e,[0,Math.abs(Math.cos(t*Math.PI*6))*.07*(1-r),o]),tumble:.7*(1-r),swing:o}}},{dur:12,door(t){let e=cr((t-.02)/.09);return ip(e)+.07*Math.sin(cr((t-.08)/.18)*Math.PI)*(1-cr((t-.08)/.3))},cam(t,e,o,r){let n=Math.sin(t*340)*.012*ee(.02,.05,t)*(1-ee(.08,.16,t)),a=ee(.06,1,t),s=In([e.eye,[34.3,1,43.6],[31.5,1.9,43.4],[26.5,2.4,43.6],[21,2.6,43.6],[16.5,2.8,43.2],[12.6,3.1,41.2],[9.6,3.4,38],o.eye],a*.55+An(a)*.45),i=zo(r.pos,[1,-.2,-1.45]);s=tn(s,i,ee(.1,.22,t)*(1-ee(.52,.72,t)));let c=ee(.06,.16,t)*(1-ee(.86,1,t)),h=tn(e.target,r.pos,c);h=tn(h,o.target,ee(.86,1,t));let l=ce(e.fov,o.fov,ee(.1,1,t))+6*Math.sin(Math.PI*ee(.08,.9,t)),d=ce(e.roll,o.roll,t)+.06*Math.sin(Math.PI*2*ee(.1,.9,t))+n;return Mo(zo(s,[0,n,0]),h,l,d)},look(t,e,o,r,n){let a=Math.hypot(r.pos[0]-n[0],r.pos[1]-n[1],r.pos[2]-n[2]),s=ee(.02,.06,t)*(1-ee(.08,.3,t));return{letterbox:ce(e.letterbox,o.letterbox,ee(.1,.4,t)),exposure:ce(e.exposure,o.exposure,t)*(1+.8*s),focus:ce(a,o.focus,ee(.86,1,t)),aperture:ce(.8,o.aperture,ee(.86,1,t)),vignette:ce(e.vignette,o.vignette,t),shafts:ce(e.shafts,o.shafts,t)+s}},leaf(t){let e=cr((t-.05)/.95);if(e<=0)return{phase:"floor"};let o=In(BE(),e*.6+An(e)*.4),r=Math.sin(t*Math.PI*9)*.12*Math.sin(Math.PI*e);return{phase:"fly",pos:zo(o,[0,r*.6,r]),tumble:1.4-.8*e}}},...[0,1].map(t=>Hy(t,7.5)),{dur:10,cam(t,e,o,r){let n=An(t),a=In([e.eye,[7.6,3.2,16.2],[7,2.9,17.2],[6.5,3.2,16],o.eye],n),s=ee(0,.15,t)*(1-ee(.85,1,t)),i=tn(tn(e.target,o.target,ee(.5,1,t)),r.pos,s);return Mo(a,i,ce(e.fov,o.fov,n)+4*Math.sin(Math.PI*n),ce(e.roll,o.roll,n))},look(t,e,o,r,n){let a=Math.hypot(r.pos[0]-n[0],r.pos[1]-n[1],r.pos[2]-n[2]);return{letterbox:ce(e.letterbox,o.letterbox,t),exposure:ce(e.exposure,o.exposure,t),focus:ce(a,o.focus,ee(.85,1,t)),aperture:ce(.6,o.aperture,ee(.85,1,t)),vignette:ce(e.vignette,o.vignette,t),shafts:ce(e.shafts,o.shafts,t)}},leaf(t){let e=An(t),o=In(jE(),e);return{phase:"fly",pos:zo(o,[0,Math.sin(t*Math.PI*6)*.06*Math.sin(Math.PI*t),0]),tumble:.6+.4*Math.sin(Math.PI*t)}}},...[3,4].map(t=>Hy(t,7.5)),{dur:10,cam(t,e,o,r){let n=An(t),a=In([e.eye,[7.6,4,30.5],[7.3,4.4,25.5],[7.1,4,21.8],o.eye],n),s=ee(0,.2,t)*(1-ee(.9,1,t)),i=tn(tn(e.target,o.target,ee(.5,1,t)),r.pos,s);return Mo(a,i,ce(e.fov,o.fov,n),ce(e.roll,o.roll,n))},look(t,e,o,r,n){let a=Math.hypot(r.pos[0]-n[0],r.pos[1]-n[1],r.pos[2]-n[2]);return{letterbox:ce(e.letterbox,o.letterbox,t),exposure:ce(e.exposure,o.exposure,t),focus:ce(a,o.focus,ee(.85,1,t)),aperture:ce(.7,o.aperture,ee(.85,1,t)),vignette:ce(e.vignette,o.vignette,t),shafts:ce(e.shafts,o.shafts,t)}},leaf(t){let e=In(WE(),ee(0,.86,t)),o=Math.sin(t*Math.PI*7)*.3*(1-ee(.4,.84,t)),r=ee(.8,.9,t);return{phase:"fly",pos:zo(e,[o,Math.abs(Math.cos(t*Math.PI*7))*.08*(1-r),0]),tumble:.8*(1-r),swing:o}}}],hp=9.2,Cc=.72;function Uy(t){return t<Cc?ce(g1(),hp,t/Cc):ce(hp,DE,(t-Cc)/(1-Cc))}function Rc(){return Cc*cr((na[0]+.15-g1())/(hp-g1()))}var m1={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},p1=t=>Object.assign({},m1,ys[t].look),XE=`
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
`;function ir(t,e,o){let r=document.createElement(t);return e&&(r.className=e),o!==void 0&&(r.innerHTML=o),r}var vi=t=>String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function v1(t,e,o){t.querySelectorAll(".tour-line").forEach((r,n)=>{r.style.transitionDelay=(e+n*o).toFixed(2)+"s"})}jy.exports=function(e){let o=/tourdebug/.test(location.search),{fps:r}=e;if(!document.querySelector("link[data-tour-font]")){let X=document.createElement("link");X.rel="stylesheet",X.href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&display=swap",X.setAttribute("data-tour-font",""),document.head.appendChild(X)}let n=Zd(),a=null;fetch("res/hand.json").then(X=>X.ok?X.json():null).then(X=>{a=X}).catch(()=>{});let s=document.createElement("style");s.textContent=XE+`
	.hand-text { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); clip-path: inset(50%); white-space: normal; }
	.tour-body canvas.hand { display: block; cursor: pointer; }`,s.textContent+=`
	body.touring #museum-mobile-controls,
	body.touring .painting-plaque { display: none !important; }`,document.head.appendChild(s);let i=ir("div","tour");i.setAttribute("role","region"),i.setAttribute("aria-label","Guided tour of the gallery. Swipe, scroll or press the arrow keys to move on.");let c=ir("div","tour-mark",vi(h1.name)),h=ir("button","tour-free","Explore freely");h.type="button";let l=ir("div","tour-links",rp.icons("tour-icon"));l.insertBefore(tp()("tour-icon"),l.firstChild),l.insertBefore(Yh().button("tour-icon"),l.firstChild.nextSibling);let d=ir("button","tour-free tour-note",'<svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 4c-7 1-11.5 5.5-13 13l-1.5 3 3-1.5c7.500-1.500 12-6 13-13z"/><path d="M5.5 20L13 12.500"/></svg><span>Leave a note</span>');d.type="button",d.setAttribute("aria-label","Leave a note: go to the piano room and the confessional"),l.appendChild(d),u1&&l.appendChild(h);let u=ir("div","tour-progress",ys.map(()=>"<i></i>").join("")),p=ir("div","tour-hint",'<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 15l6-6 6 6"></path></svg><span></span>'),f=p.querySelector("span"),v=ir("div","tour-card tour-intro",`
		<span class="tour-line tour-kicker">A virtual gallery</span>
		<span class="tour-rule"></span>
		<h1 class="tour-line tour-title">${vi(h1.name)}</h1>
		<span class="tour-line tour-sub tour-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</span>`);v1(v,.4,.35);let m=h1.text.split(/\n\s*\n/).map(X=>`<p class="tour-line">${vi(X.trim())}</p>`).join(""),g=ir("div","tour-card tour-about",`
		<span class="tour-line tour-kicker">The artist</span>
		<h2 class="tour-line tour-title">${vi(h1.title)}</h2>
		<span class="tour-rule"></span>
		${rp.line("tour-line tour-contact")}
		${m}`);v1(g,.25,.28);let x=ir("div","tour-card tour-sky",`
		<span class="tour-line tour-sub">Every painting here waits for the light.</span>`);v1(x,.6,.3);let y=ir("div","tour-card tour-master","");function w(X){let _t=ir("div","tour-card tour-story",`
			<span class="tour-line tour-kicker"></span>
			<h2 class="tour-title tour-letters"></h2>
			<span class="tour-rule"></span>
			<span class="tour-line visit-row"></span>
			<div class="tour-body"></div>`),ve=_t.querySelector(".tour-title"),Oe=_t.querySelector(".tour-body");return _t.filled=!1,_t.body=Oe,_t.fill=()=>{let De=X();if(!De||_t.filled)return;_t.filled=!0;let un=De.title||"";_t.querySelector(".tour-kicker").textContent=RE(De)||"Oil on canvas";let p0=_t.querySelector(".visit-row");p0.innerHTML=ap.button(De),p0.hidden=!p0.innerHTML;let $0=p0.querySelector(".visit-btn");$0&&($0.addEventListener("click",To=>{To.stopPropagation(),ap.open(De)}),_t.warm=()=>ap.warm(De));let dn=0;ve.innerHTML=un.split(" ").map(To=>'<span class="tour-word">'+To.split("").map(a0=>`<span style="transition-delay:${(.35+dn++*.045).toFixed(3)}s">${vi(a0)}</span>`).join("")+"</span>").join(" "),ve.setAttribute("aria-label",un);let T0=.35+un.length*.045+.2;_t.querySelector(".tour-rule").style.transitionDelay=T0.toFixed(2)+"s";let pn=String(De.description||"").split(/\n\s*\n/).filter(To=>To.trim());if(_t.querySelector(".tour-kicker").style.transitionDelay="0.1s",a&&pn.length){Oe.innerHTML=pn.map(Tn=>`<p class="hand-text">${vi(Tn.trim())}</p>`).join("")+'<div class="hand-wrap"><canvas class="hand" aria-hidden="true"></canvas></div>';let To=Oe.querySelector("canvas"),a0=pn.map(Tn=>Tn.trim()).join(`

`),on=!1,Vn=!1,Q0=0;Oe.addEventListener("wheel",()=>{on=!0},{passive:!0}),Oe.addEventListener("touchmove",()=>{on=!0},{passive:!0});let Z0=parseFloat(getComputedStyle(Oe).fontSize)||17,Jo=n(To,a,{ink:"rgba(244,236,223,0.93)",shadow:"rgba(0,0,0,0.55)",shadowBlur:7,xh:Math.max(8.5,Z0*.56),width:.14,speed:80,pace:.12,minDur:.022,maxTime:Tn=>3.5+Tn.length/420,seed:3+un.length,onPen:Tn=>{if(on)return;let Gr=Tn-Oe.clientHeight*.55;Gr>Oe.scrollTop+4&&(Oe.scrollTop+=Math.min(16,Gr-Oe.scrollTop))}});To.addEventListener("click",Tn=>{Tn.stopPropagation(),clearTimeout(Q0),Vn?Jo.finish():(Vn=!0,Jo.write(a0,!0))}),_t.write=()=>{if(clearTimeout(Q0),on=!1,Vn){Jo.write(a0,!0);return}Jo.write("",!0),Q0=setTimeout(()=>{Vn=!0,Jo.write(a0)},T0*.6*1e3)},_t.stopWrite=()=>{clearTimeout(Q0),Jo.stop()};let Mr=0;window.addEventListener("resize",()=>{clearTimeout(Mr),Mr=setTimeout(()=>{Vn&&_t.classList.contains("on")&&Jo.write(a0,!0)},250)})}else Oe.innerHTML=pn.map(To=>`<p class="tour-line">${vi(To.trim())}</p>`).join(""),Oe.querySelectorAll(".tour-line").forEach((To,a0)=>{To.style.transitionDelay=(T0+.3+Math.min(a0,6)*.35).toFixed(2)+"s"})},_t}let M=()=>e.paintings?e.paintings():[],_=X=>M().find(_t=>_t.side==="corridor"&&Math.abs(_t.paintingPosition[0]-X)<.5),S=w(()=>M().find(X=>X.side==="end")),R=()=>ir("div","tour-card",""),T=w(()=>_(mi[0])),H=w(()=>_(gi[0])),q=w(()=>_(xi[0])),W=A0.map(X=>w(()=>M().find(_t=>_t.side===X.side&&Math.abs(_t.paintingPosition[2]-X.z)<.5))),F=ir("div","tour-card tour-endcard",`
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
		</div>`);v1(F,.5,.35);let j=[v,g,x,y,S,R(),R(),R(),T,H,q,R(),...W,F];i.append(...j,c,l,u,p),document.body.appendChild(i);let pt=Iy()({root:i,avatar:e.avatar,glyphs:()=>a,onExit:()=>{se=-1,oe&&(ie={start:k},oe=!1)}});document.body.classList.add("touring");let Ht=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,Nt=Ht?"Scroll":"Swipe",xt=ys.map((X,_t)=>_t===0?Ht?"Scroll to begin":"Swipe up to begin":_t===1?Nt+" to follow the leaf":_t===2?Nt+" to follow the light":_t===3?Nt+" for its story":_t===6||_t===7||_t===ys.length-1?"":Nt+" on"),ot=[0];cp.forEach(X=>ot.push(ot[ot.length-1]+X.dur));let Bt=ot[ot.length-1],Se=210,be=95,Ke=.35,$e=1.4,no=.32,rt=1,yt=1.3,it=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,Mt=2.2,Vt=.7,he=.9,Ne=!0,Qt=0,Wt=0,ct=0,Zt=-10,de=!1,se=-1,Rt=0,Ue=0,k=0,Be=null,Xe=Object.assign({},p1(0)),mo=ys[0].cam(0),Je={phase:"home",pos:Oc.slice(),tumble:0},bo=0,vt=X=>{let _t=0;for(let ve=1;ve<ot.length;ve++)Math.abs(ot[ve]-X)<Math.abs(ot[_t]-X)&&(_t=ve);return _t};function Ot(X){let _t=j[X];_t&&_t.fill&&(_t.fill(),_t.body.scrollTop=0,_t.offsetWidth),j.forEach((ve,Oe)=>{let De=ve.classList.contains("on");ve.classList.toggle("on",Oe===X),Oe===X&&!De&&ve.write&&ve.write(),Oe!==X&&De&&ve.stopWrite&&ve.stopWrite()}),_t&&_t.warm&&_t.warm(),f.textContent=xt[X]||"",p.classList.toggle("on",!!xt[X])}function Tt(){j.forEach(X=>{X.stopWrite&&X.classList.contains("on")&&X.stopWrite(),X.classList.remove("on")}),p.classList.remove("on")}let oo=null,ro=-1;function D(X){if(pt.active||!Ne||Be)return;let _t=k-Zt>Ke;if(Zt=k,_t||!oo){let ve=0,Oe=Bt;for(let De=0;De<ot.length;De++)if(ot[De]<=Qt-.02&&(ve=ot[De]),ot[De]>=Qt+.02){Oe=ot[De];break}oo={lo:ve,hi:Oe}}k<ro||(de=!1,ct=Math.max(oo.lo,Math.min(oo.hi,ct+X)),ct=Math.max(Qt-Mt,Math.min(Qt+Mt,ct)))}function J(X){if(pt.active||!Ne||Be)return;let _t=de?ct:Qt,ve;if(X>0)ve=ot.findIndex(Oe=>Oe>_t+.05);else{ve=-1;for(let Oe=ot.length-1;Oe>=0;Oe--)if(ot[Oe]<_t-.05){ve=Oe;break}}ve<0||(ct=ot[ve],de=!0,Zt=k)}let mt=null,ut=X=>X.stopPropagation();["touchstart","touchmove","touchend","mousedown","mouseup","click","contextmenu"].forEach(X=>i.addEventListener(X,ut)),i.addEventListener("pointerdown",X=>{if(X.stopPropagation(),!(X.target.closest("button, a")||X.target.closest(".tour-body"))){mt={x:X.clientX,y:X.clientY,lx:X.clientX,ly:X.clientY,t:performance.now(),moved:0,v:0,lt:performance.now()};try{i.setPointerCapture(X.pointerId)}catch(_t){}}}),i.addEventListener("pointermove",X=>{if(!mt)return;let _t=X.clientX-mt.lx,ve=X.clientY-mt.ly;mt.lx=X.clientX,mt.ly=X.clientY;let Oe=Math.abs(ve)>=Math.abs(_t)?-ve:-_t;mt.moved+=Math.abs(Oe);let De=performance.now(),un=Oe/be;mt.v=mt.v*.6+un/Math.max(.008,(De-mt.lt)/1e3)*.4,mt.lt=De,mt.moved>6&&D(un)});let Xt=X=>{let _t=mt;if(mt=null,!!_t){if(pt.active){_t.moved<10&&performance.now()-_t.t<500?pt.tap():_t.y-(X?X.clientY:_t.ly)>30&&pt.swipe(1);return}_t.moved<10&&performance.now()-_t.t<500?J(1):performance.now()-_t.lt<120&&D(Math.max(-1.6,Math.min(1.6,_t.v*.22)))}};i.addEventListener("pointerup",X=>{X.stopPropagation(),Xt(X)}),i.addEventListener("pointercancel",()=>{mt=null}),i.addEventListener("wheel",X=>{if(pt.active){if(X.target.closest(".conf-ui"))return;X.preventDefault(),pt.wheel(X.deltaY);return}if(X.target.closest(".tour-body")){let ve=X.target.closest(".tour-body"),Oe=ve.scrollTop+ve.clientHeight>=ve.scrollHeight-2&&X.deltaY>0,De=ve.scrollTop<=0&&X.deltaY<0;if(!Oe&&!De)return}X.preventDefault();let _t=X.deltaMode===1?X.deltaY*16:X.deltaMode===2?X.deltaY*window.innerHeight:X.deltaY;D(_t/Se)},{passive:!1}),window.addEventListener("keydown",X=>{if(!Ne||Be||document.body.classList.contains("visiting"))return;if(pt.active){if(X.stopImmediatePropagation(),X.target&&/TEXTAREA|INPUT|BUTTON/.test(X.target.tagName))return;pt.key(X.key)&&X.preventDefault();return}let _t=X.key;if(["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(_t)>=0){if((_t==="Enter"||_t===" ")&&X.target&&X.target.tagName==="BUTTON")return;X.preventDefault(),X.stopImmediatePropagation(),J(1)}else["ArrowUp","ArrowLeft","PageUp"].indexOf(_t)>=0?(X.preventDefault(),X.stopImmediatePropagation(),J(-1)):_t==="Escape"?(X.preventDefault(),Me()):/^[wasdzq]$/i.test(_t)&&X.stopImmediatePropagation()},!0),window.addEventListener("keyup",X=>{Ne&&!Be&&/^(Arrow|[wasdzq]$)/i.test(X.key)&&X.stopImmediatePropagation()},!0),h.addEventListener("click",X=>{X.stopPropagation(),Me()}),["mousedown","pointerdown"].forEach(X=>d.addEventListener(X,_t=>_t.stopPropagation())),d.addEventListener("click",X=>{X.stopPropagation(),Fe()});let xe=Mo([8.6,1.75,44.3],[-3,1.85,44.5],55,0),we=null,oe=!1;function Fe(){if(!Ne||Be||pt.active||we)return;Tt(),se=-2;let X=mo.eye;if(X[0]>.5&&X[0]<13.5&&X[2]>36&&X[2]<50){oe=!1,pt.start(mo,Xe);return}we={t:0}}F.addEventListener("click",X=>{let _t=X.target.closest("button");_t&&(X.stopPropagation(),_t.dataset.act==="free"&&Me(),_t.dataset.act==="replay"&&Ee(),_t.dataset.act==="list"&&yu().show(!1),_t.dataset.act==="confess"&&(Tt(),se=-2,pt.start(mo,Xe)))});let pe=[null,[wr.zc-1.6,Math.PI/2],[11.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[42.5+Pc[0]-7,0],[42.5+Pc[1]-7,0],[42.5+Pc[2]-7,0],[1e3,Math.PI/2],...A0.map(X=>[X.z-1.6,X.side==="left"?-Math.PI/2:Math.PI/2]),[bs[2]-1.6,Math.PI]],Ie=null,fe=0;function Me(){if(!Ne||Be||!u1)return;let X=vt(Qt),_t=pe[X];Ie=X<=1?{phase:"home",pos:Oc.slice()}:X>=3&&X<=6?{phase:"floor",pos:na.slice()}:X===11?{phase:"floor",pos:lf.slice()}:X===18?{phase:"floor",pos:bs.slice()}:null,fe=X>=12?1:0,_t&&r.place&&r.place(_t[0],_t[1]),Be={start:k,fromCam:mo,fromLook:Object.assign({},Xe)},Tt(),i.hidden=!0,document.body.classList.remove("touring"),e.onExit&&e.onExit()}function Ee(){Qt=ct=0,Wt=0,de=!1,se=-1,Rt=0,Ue=0,Je={phase:"home",pos:Oc.slice(),tumble:0},ie={start:k}}let ie={start:-1},qe=!1,je=[],ae={prev:null,vel:[0,0,0],axis:[1,0,0],dir:null,bank:0,rock:0,spin:0,fresh:!0};function Qe(X){bo+=X*(Je.phase==="floor"?0:1);let _t=Je.tumble===void 0?0:Je.tumble,ve=Nc.fromTranslation(je,Je.pos);if(Je.phase==="home")ve=Nc.rotateY(ve,ve,2.2+Math.sin(bo*.9)*.15),ve=Nc.rotateZ(ve,ve,-1+Math.sin(bo*1.3)*.12),ve=Nc.rotateX(ve,ve,.4);else if(Je.phase==="floor")ve=Nc.rotateY(ve,ve,.65),ve=Nc.rotateX(ve,ve,.16);else{let Oe=Je.pos;if(ae.prev&&X>0){let L0=[Oe[0]-ae.prev[0],Oe[1]-ae.prev[1],Oe[2]-ae.prev[2]];if(Math.hypot(L0[0],L0[1],L0[2])<1.5){let Bc=Math.min(1,X*6);for(let zs=0;zs<3;zs++)ae.vel[zs]+=(L0[zs]/X-ae.vel[zs])*Bc}else ae.vel=[0,0,0]}ae.prev=Oe.slice();let De=ae.vel,un=Math.hypot(De[0],De[1],De[2]),p0=ee(.25,1.4,un),$0=ee(.5,2,-De[1]),dn=bo*.35*(.3+_t)+.65,T0=[Math.cos(dn),0,Math.sin(dn)];un>.001&&(T0=tn(T0,X0(De,-1/un),p0));let pn=Math.min(1,X*4);ae.axis=tn(ae.axis,T0,ae.fresh?1:pn);let To=ae.axis,a0=Math.hypot(To[0],To[1],To[2])||1;To=X0(To,1/a0);let on=mo.eye,Vn=[on[0]-Oe[0],on[1]-Oe[1],on[2]-Oe[2]],Q0=Math.hypot(Vn[0],Vn[1],Vn[2])||1,Z0=ce(.6,.22,p0),Jo=[Vn[0]/Q0*Z0,1+Vn[1]/Q0*Z0,Vn[2]/Q0*Z0],Mr=To[0]*Jo[0]+To[1]*Jo[1]+To[2]*Jo[2];Jo=sp(Jo,X0(To,Mr));let Tn=Math.hypot(Jo[0],Jo[1],Jo[2])||1;Jo=X0(Jo,1/Tn);let Gr=[To[1]*Jo[2]-To[2]*Jo[1],To[2]*Jo[0]-To[0]*Jo[2],To[0]*Jo[1]-To[1]*Jo[0]],Do=Math.hypot(De[0],De[2]),vn=0;if(Do>.15&&ae.dir&&X>0){let L0=[De[0]/Do,De[2]/Do];vn=(ae.dir[0]*L0[1]-ae.dir[1]*L0[0])/X,ae.dir=L0}else Do>.15&&(ae.dir=[De[0]/Do,De[2]/Do]);ae.bank+=(Math.max(-.8,Math.min(.8,vn*.3))*p0-ae.bank)*Math.min(1,X*3),ae.rock+=X*(1.5+2.4*p0),ae.spin+=X*$0*7*(.4+_t);let kr=Math.sin(ae.rock)*(.26+.45*_t)*(1-.5*$0)+ae.bank+ae.spin,Ss=Math.sin(ae.rock*.63+1)*(.16+.3*_t)+(Je.swing||0)*.9,aa=Math.cos(kr),Es=Math.sin(kr),mf=zo(X0(Jo,aa),X0(Gr,Es)),Da=zo(X0(Gr,aa),X0(Jo,-Es));aa=Math.cos(Ss),Es=Math.sin(Ss);let Mi=zo(X0(To,aa),X0(mf,Es)),Hc=zo(X0(mf,aa),X0(To,-Es)),w1=Math.sin(ae.rock+1.5708)*.035*(.3+_t)*(1-.5*p0),ya=zo(Oe,X0(Gr,w1)),Uc=[Mi[0],Mi[1],Mi[2],0,Hc[0],Hc[1],Hc[2],0,Da[0],Da[1],Da[2],0,ya[0],ya[1],ya[2],1];for(let L0=0;L0<16;L0++)ve[L0]=Uc[L0];ae.fresh=!1}return Je.phase!=="fly"&&(ae.prev=null,ae.vel=[0,0,0],ae.fresh=!0,ae.spin=0,ae.bank=0,ae.dir=null),{visible:!0,model:ve}}function r0(X){for(let _t in m1)Xe[_t]=X[_t]!==void 0?X[_t]:m1[_t]}function en(X,_t){if(X<=1)return{phase:"home",pos:Oc.slice(),tumble:0};let ve=Gy[X];if(ve){let Oe=ve.amp;return{phase:"fly",pos:zo(ve.pos(),[Math.sin(_t*.55)*Oe[0],Math.sin(_t*.8)*Oe[1],(1-Math.cos(_t*.45))*Oe[2]]),tumble:ve.tumble}}return{phase:"floor",pos:(X>=18?bs:X>=10?lf:na).slice(),tumble:0}}let ko=0,Ro=null;function Wn(X){let _t=Math.min(.1,Math.max(0,X-ko));if(ko=X,k=X,qe||(qe=!0,ie.start=X),Be)return null;if(we&&(we.t+=_t,we.t>=.7&&(we=null,oe=!0,pt.start(xe,Object.assign({},m1,{fade:1,fadeColor:[0,0,0]})))),pt.active){let Do=pt.update(_t);return mo=Do.camera,r0(Do.look),o&&window.__camOverride&&(mo=window.__camOverride),o&&window.__lookOverride&&Object.assign(Xe,window.__lookOverride),{camera:mo,walker:null,door:1,look:Xe,leaf:Qe(_t)}}if(!de&&!mt&&k-Zt>Vt){let Do=vt(ct);Math.abs(ot[Do]-ct)<he&&(ct=ot[Do])}let ve=ct-Qt;if(de){let vn=Math.sign(ve)*Math.min(rt,Math.sqrt(2*yt*Math.abs(ve)))-Wt;Wt+=Math.sign(vn)*Math.min(Math.abs(vn),yt*_t),Qt+=Wt*_t,(ve>0&&Qt>=ct||ve<0&&Qt<=ct||Math.abs(ct-Qt)<1e-4)&&(Qt=ct,Wt=0,de=!1)}else{let Do=CE(Qt,ct,Wt,no,_t,3);Qt=Do[0],Wt=Do[1],Math.abs(ct-Qt)<1e-4&&Math.abs(Wt)<.001&&(Qt=ct,Wt=0)}let Oe=0;for(;Oe<cp.length-1&&Qt>=ot[Oe+1];)Oe++;let De=cp[Oe],un=cr((Qt-ot[Oe])/De.dur),p0=ys[Oe],$0=ys[Oe+1],dn=vt(Qt);dn!==Rt&&(Rt=dn,Ue=0);let T0=Math.abs(Qt-ot[dn])<.02;T0&&(Ue+=_t);let pn=1-ee(0,1.2,Math.abs(Qt-ot[dn])),To=De.leaf(un);if(To.pos?Je=Object.assign({},To):Je=Object.assign({},To,{pos:To.phase==="home"?Oc.slice():(Oe>=10?lf:na).slice()}),Gy[dn]&&pn>0){let Do=en(dn,Ue);Je.pos=tn(Je.pos,Do.pos,pn)}let a0=De.walker&&(un>.01||Oe===6)?De.walker(un):null;Ro=a0==null?null:{x:a0,z:lp,heading:Math.PI/2,phase:(a0-By)/FE};let on=De.cam(un,p0.cam(0),$0.cam(0),Je);if(pn>0&&Ue>0){let Do=ys[dn],vn=Do.cam(0),kr=Do.cam(Ue);on=Mo(zo(on.eye,X0(sp(kr.eye,vn.eye),pn)),zo(on.target,X0(sp(kr.target,vn.target),pn)),on.fov+(kr.fov-vn.fov)*pn,on.roll+(kr.roll-vn.roll)*pn)}if(pn>0&&!it){let Do=k,vn=.006*pn,kr=Math.sin(Do*.61)*.6+Math.sin(Do*1.37+1.3)*.4,Ss=Math.sin(Do*.47+2.1)*.6+Math.sin(Do*1.13+.4)*.4,aa=Math.sin(Do*.53+4)*.5+Math.sin(Do*.97+2.6)*.5;on=Mo(zo(on.eye,[kr*vn,Ss*vn*.7,aa*vn]),zo(on.target,[Ss*vn*1.8,kr*vn*1.4,0]),on.fov,on.roll+aa*.0012*pn)}mo=on;let Vn=p1(Oe),Q0=p1(Oe+1),Z0=Object.assign({},Vn,De.look(un,Vn,Q0,Je,on.eye));if(pn>0){let Do=p1(dn);for(let vn in Do)typeof Do[vn]=="number"&&(Z0[vn]=ce(Z0[vn],Do[vn],pn))}r0(Z0);let Mr=T0&&Math.abs(ct-Qt)<.02?dn:-1;Mr!==se&&(Mr>=0&&(ro=k+$e),se=Mr,Mr>=0?Ot(Mr):Tt()),u.querySelectorAll("i").forEach((Do,vn)=>Do.classList.toggle("on",vn===dn));let Tn=se>=0?j[se]:null;Tn&&Tn.fill&&!Tn.filled&&(Tn.fill(),Tn.filled&&(Tn.classList.remove("on"),Tn.offsetWidth,Tn.classList.add("on")));let Gr=cr((X-ie.start)/2.6);return Gr<1&&(Xe.fade=Math.max(Xe.fade,1-ee(0,1,Gr)),Xe.fadeColor=[0,0,0]),o&&window.__camOverride&&(mo=window.__camOverride),o&&window.__lookOverride&&Object.assign(Xe,window.__lookOverride),{camera:mo,walker:Ro,door:De.door?De.door(un):Oe>=12?1:0,look:we?Object.assign(Xe,{fade:Math.max(Xe.fade||0,cr(we.t/.6)),fadeColor:[0,0,0]}):Xe,leaf:Qe(_t)}}return o&&(window.__tour={go:J,exit:Me,wind:D,confess(){Tt(),se=-2,pt.start(mo,Xe)},note:()=>Fe(),conf:pt,paper:i1().STATE,seek(X,_t){Qt=ct=ot[X]+(ot[X+1]-ot[X])*_t,Wt=0,de=!1,Zt=k+1e6,ie.start=k-10,qe=!0},jump(X){Qt=ct=ot[X],Wt=0,de=!1,Ue=0,Zt=k,ie.start=k-10,qe=!0},state:()=>({current:vt(Qt),scroll:+Qt.toFixed(3),target:+ct.toFixed(3),shown:se,move:Math.abs(ct-Qt)>.02?{p:Qt}:null,camNow:mo,leaf:Je,look:Xe})}),{update:Wn,get active(){return Ne&&!Be},handover(X){if(!Be)return null;let _t=cr((X-Be.start)/1.8);return _t>=1?(Ne=!1,null):{from:Be.fromCam,fromLook:Be.fromLook,k:An(_t)}},restingDoor:()=>fe,restingLeaf(){return Ie?(Je=Ie,Qe(0)):null},mix:yi,cam:Mo}}});var YE=Sm(),ra=zr(),zp=yu(),b1=ra.reflection,KE=!1,lb=(t,e,o,r,n)=>r+(t-e)*(n-r)/(o-e),Ap=()=>lb(window.innerWidth/window.innerHeight,16/9,9/16,1.7,Math.PI/3);navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)&&(Ap=()=>lb(window.innerWidth/window.innerHeight,16/9,9/16,1.5,Math.PI/3));var fb=()=>2*Math.atan(Math.tan(Ap()*.5)*window.innerHeight/window.innerWidth),QE=qm(),df=new QE;df.showPanel(0);KE&&document.body.appendChild(df.dom);var Mn,Gc,yp,qc,bp,_n;function ZE(){try{let t=document.createElement("canvas"),e=t.getContext("webgl")||t.getContext("experimental-webgl");return!!(e&&e.getExtension("OES_standard_derivatives"))}catch(t){return!1}}if(!ZE())throw YE.finish(),zp.show(!0),new Error("This device cannot draw the 3D gallery; showing the list instead.");Mn=Dm()({extensions:["OES_element_index_uint","OES_standard_derivatives"],optionalExtensions:["EXT_texture_filter_anisotropic","WEBGL_depth_texture"],attributes:{alpha:!1,antialias:!1},pixelRatio:ra.pixelRatio});location.hash==="#list"&&zp.show(!1);window.addEventListener("hashchange",()=>{location.hash==="#list"&&zp.show(!1)});Gc=S2()();var JE=Ku();yp=JE(Mn,Gc,b1);qc=j3()(Mn,Gc);bp=Y3()(Mn);var Vy=ug()(Mn,Gc),Xy=Mg()(Mn),Yy=Eg()(Mn),Ky=Ug()(Mn),Qy=Xg()(Mn),Zy=Jg()(Mn),Ms=px()(Mn),wp=Td(),hb=Kf(),tz=ul(),_p=Nd(),Mp=l0(),n0=Nh(),kp=kx(),ub=Yh(),{A:Ic}=Lr();_n=sy()(Gc,fb);var Dc=ly()(Mn,ra),ws=py()(Mn),Jy=my()(Mn),ez=yy()(Mn,ra),oz=Sy()(Mn,ra),tb=Ka()(Mn),eb=i1()(Mn),ob=Ja()(Mn),nb=Ks()(Mn),xa=Wy()({fps:_n,paintings:()=>qc.interactables(),avatar:Ms,onExit:()=>_n.setPaused(!1)});_n.setPaused(!0);/tourdebug/.test(location.search)&&(window.__post=Dc);var _s=[],Fc=[],P0=[7,2,1.6];Gc.viewer=P0;var nz=Mn({cull:{enable:!0,face:"back"},uniforms:{view:()=>_s,proj:()=>Fc,yScale:1,mirrorOn:()=>b1?1:0,night:()=>Mp.night,time:Mn.context("time")}}),rz=Mn({cull:{enable:!0,face:"front"},uniforms:{yScale:-1}}),db=document.createElement("style");db.textContent=`

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
`;document.head.appendChild(db);var Fr=document.createElement("button");Fr.className="painting-plaque";Fr.type="button";Fr.setAttribute("aria-label","Read painting");document.body.appendChild(Fr);var K0=document.createElement("div");K0.className="story-overlay";K0.innerHTML=`

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

		${hb.line("story-contact")}

		<div class="visit-row story-visit"></div>

		<p
			class="story-body"
			id="story-body"
		></p>

	</article>
`;document.body.appendChild(K0);var ks=document.createElement("div");ks.className="museum-links";ks.innerHTML=hb.icons("museum-link");ks.insertBefore(tp()("museum-link"),ks.firstChild);ks.insertBefore(ub.button("museum-link"),ks.firstChild.nextSibling);["mousedown","pointerdown","click"].forEach(t=>ks.addEventListener(t,e=>e.stopPropagation()));document.body.appendChild(ks);var az=K0.querySelector("#story-title"),sz=K0.querySelector("#story-body"),rb=K0.querySelector("#story-meta"),iz=K0.querySelector(".story-contact"),uf=K0.querySelector(".story-visit");uf.addEventListener("click",t=>{t.target.closest(".visit-btn")&&_i&&_p.open(_i)});var cz=K0.querySelector(".story-close"),_i=null,lr={p:0,target:0,last:0},pb={title:wp.title,description:wp.text,isAbout:!0},qa=null;function Tp(t){t&&(_i=t,az.textContent=t.title||"",sz.textContent=t.description||"",rb.textContent=t.isAbout?"":tz(t),rb.hidden=!!t.isAbout,iz.hidden=!t.isAbout,uf.innerHTML=t.isAbout?"":_p.button(t),uf.hidden=!uf.innerHTML,uf.hidden||_p.warm(t),K0.classList.toggle("about-mode",!!t.isAbout),K0.classList.add("open"),lr.target=t.isAbout?1:0,qa=t,Fr.classList.remove("visible"),_n.setPaused(!0))}function Lp(){K0.classList.remove("open"),lr.target=0,_i=null,qa=null,_n.setPaused(!1)}function vb(t){t&&(t.preventDefault(),t.stopPropagation()),qa&&Tp(qa)}Fr.addEventListener("pointerup",vb,!0);Fr.addEventListener("touchend",vb,{passive:!1,capture:!0});Fr.addEventListener("click",t=>{t&&(t.preventDefault(),t.stopPropagation()),_i===null&&qa&&Tp(qa)},!0);cz.addEventListener("click",Lp);K0.addEventListener("click",t=>{t.target===K0&&Lp()});window.addEventListener("keydown",t=>{t.code==="Escape"&&K0.classList.contains("open")&&Lp()});function ab(t,e){let o=e[0],r=e[1],n=e[2];return[t[0]*o+t[4]*r+t[8]*n+t[12],t[1]*o+t[5]*r+t[9]*n+t[13],t[2]*o+t[6]*r+t[10]*n+t[14],t[3]*o+t[7]*r+t[11]*n+t[15]]}function lz(){if(_i)return;if(xa.active){qa=null,Fr.classList.remove("visible");return}let t=qc.interactables(),e=_n.forward[0],o=_n.forward[2],r=Math.hypot(e,o)||1,n=null,a=1/0;for(let s of t){let i=s.paintingPosition,c=0,h=0;s.side==="left"?c=1:s.side==="right"?c=-1:s.side==="corridor"?h=1:h=-1;let l=i[0]-_n.pos[0],d=i[2]-_n.pos[2],u=-(l*c+d*h),p=Math.abs(l*h-d*c),f=-(e*c+o*h)/r,v=s.side==="end"?11:8,m=(s.width||2)/2;f>.9&&u>.5&&u<v&&p<m+.8&&u<a&&(n=s,a=u)}if(!n){let s=_n.pos[0],i=_n.pos[2];e/r>.85&&s<13.6&&i>Ic.z0-.5&&i<Ic.z1+.5&&(n=Object.assign({},pb,{plaqueTitle:wp.name}))}n?(qa=n,Fr.textContent=n.isAbout?"ABOUT  \xB7  "+n.plaqueTitle:"READ  \xB7  "+n.title,Fr.classList.add("visible")):(qa=null,Fr.classList.remove("visible"))}var vf=cc();function fz(){let t=Ms.state;if(!t||!t.glowPos)return null;let e=ab(_n.view(),[t.glowPos[0],t.glowPos[1]-.08,t.glowPos[2],1]),o=ab(_n.proj(),e);return o[3]<=.05?null:[(o[0]/o[3]*.5+.5)*window.innerWidth,(.5-o[1]/o[3]*.5)*window.innerHeight,o[3]]}var Sp=null;window.addEventListener("pointerdown",t=>{Sp={x:t.clientX,y:t.clientY,t:performance.now()}},!0);window.addEventListener("pointerup",t=>{let e=Sp;if(Sp=null,!e||_i||xa.active||!t.target||!/^(CANVAS|BODY)$/.test(t.target.tagName)||Math.hypot(t.clientX-e.x,t.clientY-e.y)>12||performance.now()-e.t>600)return;let o=fz();if(!o)return;let r=!!document.pointerLockElement,n=r?window.innerWidth/2:t.clientX,a=r?window.innerHeight/2:t.clientY,s=Math.max(t.pointerType==="touch"?60:40,260/o[2]);Math.hypot(n-o[0],a-o[1])<s&&(t.preventDefault(),t.stopPropagation(),Tp(pb))},!0);function hz(t){let e=Math.min(Math.max(t-lr.last,0),.1);lr.last=t;let o=e/1.6;if(lr.p=lr.target>lr.p?Math.min(1,lr.p+o):Math.max(0,lr.p-o),lr.p<=0)return;let r=lr.p<.5?2*lr.p*lr.p:1-Math.pow(-2*lr.p+2,2)/2,n=window.innerHeight>window.innerWidth,a=Ms.state,s=a&&a.hipsPos?a.hipsPos[0]:Ic.cx-1.2,i=a&&a.hipsPos?a.hipsPos[2]:Ic.zc,c=n?[s-2.3,2,i-.1]:[s-1.55,1.55,i+.3],h=n?[s+.1,.2,i-.1]:[s+.1,.7,i+.6],l=_n.pos,d=_n.forward,u=[l[0],l[1],l[2]],p=[l[0]+d[0],l[1]+d[1],l[2]+d[2]],f=(x,y)=>x.map((w,M)=>w+(y[M]-w)*r),v=[Ic.cx-6.2,1.7,Ic.zc],m=1-r,g=u.map((x,y)=>m*m*x+2*m*r*v[y]+r*r*c[y]);vf.lookAt(_n.view(),g,f(p,h),[0,1,0])}var mb=/[?&]studio\b/.test(location.search);if(mb){let t=document.createElement("style");t.textContent=".tour, #museum-mobile-controls, .painting-plaque { display: none !important; }",document.head.appendChild(t),window.addEventListener("pointerdown",e=>{Ep.takes(e)||l0().toggle()}),window.addEventListener("keydown",e=>{(e.key==="n"||e.key===" ")&&l0().toggle()})}var Ep=(()=>{let t={mode:"idle",fedTill:0,offset:0,holdAt:null,now:0,lastShot:-1,doneShot:-1,since:0,hintUntil:0},e=null,o=null,r=null,n=(c,h)=>{r&&(r.textContent=c,r.classList.add("on"),t.hintUntil=h?t.now+h:0)},a=()=>{let c=document.createElement("style");c.textContent=`
.koi-feed { position: fixed; left: 0; right: 0; bottom: 7vh; display: flex; flex-direction: column; align-items: center; gap: 0.6em; z-index: 20; pointer-events: none; font-family: 'Cormorant Garamond', Georgia, serif; }
.koi-feed-btn { pointer-events: none; opacity: 0; transform: translateY(6px); transition: opacity 1.2s ease, transform 1.2s ease; background: rgba(12, 10, 8, 0.28); border: 1px solid rgba(244, 236, 223, 0.38); border-radius: 999px; color: #f4ecdf; font: italic 400 clamp(17px, 2.3vw, 24px)/1 'Cormorant Garamond', Georgia, serif; letter-spacing: 0.06em; padding: 0.7em 1.5em 0.75em; cursor: pointer; text-shadow: 0 1px 8px rgba(0, 0, 0, 0.55); backdrop-filter: blur(3px); -webkit-backdrop-filter: blur(3px); }
.koi-feed-btn.on { opacity: 1; transform: none; pointer-events: auto; }
.koi-feed-btn:hover { background: rgba(12, 10, 8, 0.42); border-color: rgba(244, 236, 223, 0.7); }
.koi-feed-btn .orn { display: inline-block; margin: 0 0.55em; font-style: normal; opacity: 0.75; transform: translateY(-0.05em); }
.koi-feed-hint { opacity: 0; transition: opacity 1.4s ease; color: #f4ecdf; font: italic 400 clamp(16px, 2vw, 21px)/1.3 'Cormorant Garamond', Georgia, serif; letter-spacing: 0.05em; text-shadow: 0 1px 10px rgba(0, 0, 0, 0.7); text-align: center; padding: 0 1em; }
.koi-feed-hint.on { opacity: 0.95; }
.koi-aim, .koi-aim canvas { cursor: crosshair !important; }
`,document.head.appendChild(c),e=document.createElement("div"),e.className="koi-feed",e.innerHTML='<button type="button" class="koi-feed-btn"><span class="orn">\u2766</span>Cast a crumb upon the water<span class="orn">\u2766</span></button><div class="koi-feed-hint"></div>',document.body.appendChild(e),o=e.querySelector(".koi-feed-btn"),r=e.querySelector(".koi-feed-hint"),o.addEventListener("pointerdown",h=>{h.stopPropagation(),t.mode==="idle"&&(t.mode="aim",t.holdAt=t.now-t.offset,t.since=t.now,o.classList.remove("on"),document.body.classList.add("koi-aim"),n("Touch the water where it should fall"))})},s=(c,h)=>{let l=vf.multiply([],Fc,_s),d=vf.invert([],l);if(!d)return null;let u=c/window.innerWidth*2-1,p=1-h/window.innerHeight*2,f=[0,0,0,0];for(let v=0;v<4;v++)f[v]=d[v]*u+d[4+v]*p+d[8+v]*1+d[12+v];return[f[0]/f[3]-P0[0],f[1]/f[3]-P0[1],f[2]/f[3]-P0[2]]},i=()=>{t.holdAt!==null&&(t.offset=t.now-t.holdAt),t.holdAt=null,t.mode="idle",t.doneShot=t.lastShot,document.body.classList.remove("koi-aim"),r&&r.classList.remove("on")};return{time(c){return t.now=c,t.holdAt!==null?t.holdAt:c-t.offset},update(c){e||a(),c.shot!==t.lastShot&&(t.lastShot=c.shot);let h=Ks();t.mode==="idle"?o.classList.toggle("on",!!c.pond&&t.doneShot!==c.shot):t.mode==="aim"?t.now-t.since>40&&i():t.mode==="watch"&&(h.feeding()&&(t.fedTill=t.now),(t.now-t.fedTill>5&&t.now-t.since>8||t.now-t.since>60)&&i()),t.hintUntil&&t.now>t.hintUntil&&(r.classList.remove("on"),t.hintUntil=0)},takes(c){if(t.mode==="idle")return!1;let h=Ks(),l=s(c.clientX,c.clientY),d=l&&h.poolHit(P0,l);return d?(h.feedAt(d[0],d[1]),t.fedTill=t.now,t.mode==="aim"&&n("and they come, like embers through the dark",5),t.mode="watch",t.since=t.now,document.body.classList.remove("koi-aim"),!0):(t.mode==="aim"&&n("Upon the water, there\u2026"),!0)}}})(),bi={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},wi=null,pf=!1,x1=!1;function uz(t,e,o,r){let n=[o[0]-e[0],o[1]-e[1],o[2]-e[2]],a=Math.hypot(n[0],n[1],n[2])||1,s=[-n[2]/a,0,n[0]/a],i=Math.hypot(s[0],s[2])||1;s=[s[0]/i,0,s[2]/i];let c=Math.cos(r),h=Math.sin(r);return vf.lookAt(t,e,o,[s[0]*h,c,s[2]*h])}function dz(t){let e=window.innerWidth/window.innerHeight,o=Dc.shot,r=xa.active?xa.update(t):null,n=r?null:xa.handover(t),a=null,s=bi;if(r){a=r.camera,s=r.look,wi=r.leaf;let i=window.__walkOverride&&/tourdebug/.test(location.search)?window.__walkOverride:r.walker||null;Ms.setWalk(i),pf=!!i,ws.setOpen(r.door||0)}else wi=xa.restingLeaf(),Ms.setWalk(null),pf=!1,ws.setOpen(xa.restingDoor());if(n){let i=_n.pos,c=_n.forward,h=xa.cam([i[0],i[1],i[2]],[i[0]+c[0],i[1]+c[1],i[2]+c[2]],fb()*180/Math.PI,0);a=xa.mix(n.from,h,n.k),s={};for(let l in bi)s[l]=Array.isArray(bi[l])?bi[l]:n.fromLook[l]+(bi[l]-n.fromLook[l])*n.k}if(a&&r&&(a=kp.apply(a,t)),mb&&!(/tourdebug/.test(location.search)&&window.__camOverride)){let i=Ks().previewCam(Ep.time(t));Ep.update(i),a=i,s=Object.assign({},bi,{fade:i.fade,focus:8})}if(a)uz(_s,a.eye,a.target,a.roll||0),vf.perspective(Fc,a.fov*Math.PI/180,e,.1,700),P0[0]=a.eye[0],P0[1]=a.eye[1],P0[2]=a.eye[2];else{let i=_n.view(),c=_n.proj();for(let u=0;u<16;u++)_s[u]=i[u],Fc[u]=c[u];let h=i[12],l=i[13],d=i[14];P0[0]=-(i[0]*h+i[1]*l+i[2]*d),P0[1]=-(i[4]*h+i[5]*l+i[6]*d),P0[2]=-(i[8]*h+i[9]*l+i[10]*d)}for(let i in bi)o[i]=s[i];r&&kp.pull(o,t)}var _r={wake:[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],wakeDir:[0,0,1],gust:[0,0],focus:6,aperture:0},mp=[9,9,9,9],sb=[0,0,0,0],ff=0,gp=0,$c=null,ib=0,cb=0,hf=0;function pz(t){let e=Math.min(.1,Math.max(0,t-ib));ib=t,_r.focus=Dc.shot.focus,_r.aperture=ra.post>=2?Dc.shot.aperture:0;for(let s=0;s<4;s++)mp[s]+=e,_r.wake[s][3]=sb[s]*Math.exp(-mp[s]/1.1);let o=wi&&wi.visible?wi.model:null;if(o&&e>0){let s=[o[12],o[13],o[14]];if($c){let i=[s[0]-$c[0],s[1]-$c[1],s[2]-$c[2]],c=Math.hypot(i[0],i[1],i[2]),h=c/e;if(c<1.5&&h>.12){let l=Math.min(1,e*8);for(let u=0;u<3;u++)_r.wakeDir[u]+=(i[u]/c-_r.wakeDir[u])*l;let d=Math.hypot(_r.wakeDir[0],_r.wakeDir[1],_r.wakeDir[2])||1;for(let u=0;u<3;u++)_r.wakeDir[u]/=d;if(gp+=e,gp>.14){gp=0;let u=_r.wake[ff];u[0]=s[0],u[1]=s[1],u[2]=s[2],sb[ff]=Math.min(1,(h-.12)/1.6)*.5,mp[ff]=0,ff=(ff+1)%4}}}$c=s}else o||($c=null);let r=ws.openNow?ws.openNow():0,n=e>0?(r-cb)/e:0;cb=r;let a=Math.max(-1,Math.min(1,n*1.2));hf+=(a-hf)*Math.min(1,e*(Math.abs(a)>Math.abs(hf)?6:.7)),_r.gust[0]+=hf*5.5*e,_r.gust[1]=Math.abs(hf)}var xp=0,y1=!1;Mn.frame(function({time:t}){if(document.body.classList.contains("visiting")){xp=0;return}df.begin(),Mp.tick(t);let e=xa.active&&kp.resting&&Mp.settled&&(ra.isPhone||ra.scale<1||ra.level>0);if(e){if(y1=!y1,y1){df.end();return}}else y1=!1;let o=t-xp;xp=t,ra.frame(e?o/2:o),b1=ra.reflection,_n.tick({time:t}),hz(t),qc.update(_n.pos,_n.fmouse[1],Ap()),lz(),dz(t),n0.update(_s,Fc,P0),ub.listen(P0),x1=!pf&&n0.room("stair")&&(!n0.room("court")||P0[0]<.5||P0[2]>30),Ms.setPiano(x1),pz(t),Dc.capture(arguments[0],{view:_s,proj:Fc,eye:P0},()=>{nz(()=>{b1&&n0.floor&&rz(()=>{n0.room("studio",!0)&&nb({reflected:!0}),n0.zone!=="studio"&&(yp(),Vy({reflected:!0}),tb(),n0.room("stair",!0)&&(ob({reflected:!0}),eb({reflected:!0,view:_s})),n0.room("court",!0)&&Zy(),(x1||n0.room("court",!0)||pf)&&Ms(),bp(qc.batch()),n0.room("street",!0)&&Xy(),n0.room("garden",!0)&&Ky(),n0.room("florence",!0)&&Qy(),Jy(wi),ws(),Yy(),ws.glass())}),n0.room("studio")&&nb(),n0.zone!=="studio"&&(yp(),Vy(),tb(),n0.room("stair")&&(ob(),eb({view:_s})),n0.room("court")&&Zy(),(x1||n0.room("court")||pf)&&Ms(),bp(qc.batch()),n0.room("street")&&Xy(),n0.room("garden")&&(Ky(),oz()),n0.room("florence")&&Qy(),Jy(wi),ws(),ez(_r),Yy(),ws.glass())})}),Dc.present(),df.end()});})();
