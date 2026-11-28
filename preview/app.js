"use strict";(()=>{var me=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Fm=me((UA,Im)=>{"use strict";var I0=document.getElementById("loader"),P0=I0&&I0.querySelector(".loader-name"),ol=0,$f=0,qf=!1,o_=performance.now(),F0=.06,O0=0,xd=0,Cm=!1,n_=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function r_(e){if(!P0)return;let t=P0.offsetWidth||1,n=(t*(1.14-1.28*e)-t).toFixed(1)+"px 0";P0.style.webkitMaskPosition=n,P0.style.maskPosition=n}function Om(e){let t=Math.min(.05,xd?(e-xd)/1e3:.016);xd=e;let o=qf?.75:.22+(F0-O0)*1.2;if(O0=Math.min(F0,O0+Math.max(0,o)*t),n_&&(O0=F0),r_(O0),qf&&O0>=.999){Cm||(Cm=!0,setTimeout(Pm,650));return}requestAnimationFrame(Om)}P0&&requestAnimationFrame(Om);function Nm(){let e=ol?$f/Math.max(ol,24):0;F0=Math.max(F0,Math.min(.9,.06+e*.84))}function Pm(){I0&&(I0.classList.add("done"),setTimeout(()=>I0.remove(),1400))}function yd(){qf||(qf=!0,window.__galleryReady=!0,I0&&(F0=1,P0||Pm()))}var Rm=null;function a_(){clearTimeout(Rm),$f>=ol&&performance.now()-o_>600&&(Rm=setTimeout(()=>{$f>=ol&&yd()},450))}setTimeout(yd,2e4);var i_=e=>/(^|\/)(res|images)\//.test(e),Gf=window.fetch.bind(window);async function s_(e,t){let o=await Gf(e+".gz",t);if(!o.ok)throw new Error("no .gz");let n=new Uint8Array(await o.arrayBuffer());if(!(n[0]===31&&n[1]===139))return new Response(n);let r=new Blob([n]).stream().pipeThrough(new DecompressionStream("gzip")),a=await new Response(r).arrayBuffer();return new Response(a,{status:200,headers:{"Content-Type":"application/octet-stream"}})}window.fetch=function(e,t){let o=typeof e=="string"?e:e&&e.url||"";if(!i_(o))return Gf(e,t);ol++,Nm();let n=a=>($f++,Nm(),a_(),a),r;return/\.bin$/.test(o)&&typeof DecompressionStream!="undefined"?r=s_(o,t).catch(()=>Gf(e,t)):r=Gf(e,t),r.then(n,a=>{throw n(),a})};Im.exports={finish:yd}});var vr=me((jA,$m)=>{"use strict";var Dm=typeof navigator!="undefined"&&navigator.userAgent||"",c_=typeof window!="undefined"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches&&!window.matchMedia("(any-pointer: fine)").matches,Va=/Android|iPhone|iPad|iPod|Mobile|Silk|Kindle|webOS|BlackBerry|Opera Mini|IEMobile/i.test(Dm)||/Macintosh/.test(Dm)&&typeof navigator!="undefined"&&navigator.maxTouchPoints>1||c_,Hf=typeof window!="undefined"&&window.devicePixelRatio||1,l_=typeof location!="undefined"&&/[?&](studio|redroom)\b/.test(location.search),f_=(()=>{try{return((/[?&]exp=([\w,]+)/.exec(location.search)||[])[1]||"").split(",")}catch(e){return[]}})(),vo={isPhone:Va,exp:e=>f_.indexOf(e)>=0,pixelRatio:l_?Va?Math.min(Hf,1.25):Math.min(Hf,1.5):Va?Math.min(Hf,1.5):Math.min(Hf,2),reflection:!Va,gardenDetail:Va?0:1,leafShare:Va?.65:1,motion:!Va,post:Va?1:2,level:Va?1:0};vo.scale=1;var h_=Va?.55:.6,nl=0,Bf=0,rl=0,al=0,D0=1,il=0,Uf=48,G0=null,bd=0;function u_(e){G0={fps:e,scale:vo.scale},vo.scale>.86?vo.scale=.85:vo.reflection?vo.stepDown():vo.scale>.71?vo.scale=.7:vo.stepDown()||(vo.scale=Math.max(h_,vo.scale-.1))}var Gm=!0;try{/[?&]noadapt\b/.test(location.search)&&(Gm=!1)}catch(e){}vo.frame=e=>{if(!Gm)return;if(!(e>0)||e>1){nl=0,Bf=0;return}if(nl+=e,Bf++,nl<.75)return;let t=Bf/nl;if(nl=0,Bf=0,il>0&&(il-=.75,il<=0&&(D0=1)),G0){if(t<G0.fps*1.08&&G0.scale>vo.scale){if(++bd>=2){vo.scale=1,D0=1,il=0,Uf=Math.min(Uf,t*.85),bd=0,rl=0,G0=null;return}}else bd=0;G0=null}if(t<Uf){if(al=0,++rl>=2){if(rl=0,vo.scale>.61&&vo.climbed){D0=vo.scale-.05,il=40,vo.scale=D0,vo.climbed=!1;return}u_(t)}}else t>Math.max(Uf*1.15,55)?(rl=0,++al>=6&&vo.scale<D0-.001?(vo.scale=Math.min(D0,vo.scale+.05),vo.climbed=!0,al=0):al>=6&&(vo.climbed=!1)):(rl=0,al=0)};vo.stepDown=()=>{if(vo.reflection)vo.reflection=!1;else if(vo.gardenDetail>0||vo.motion)vo.gardenDetail=0,vo.motion=!1,vo.leafShare=Math.min(vo.leafShare,.65);else if(vo.post>0)vo.post--;else return!1;return vo.level++,!0};$m.exports=vo});var wd=me((WA,qm)=>{"use strict";qm.exports=[{file:"IMG_20250717_102753.jpg",slug:"love-me-like-i-am-already-dead",title:"Love me like I am Already Dead",medium:"Oil on canvas",size:[61,91],description:`We live in a world soaked in hypocrisy. We\u2019re told not to \u201Cspeak ill of the dead,\u201D yet we spend lifetimes speaking ill of the living. We judge, ignore, neglect\u2014and then pretend to mourn with grace when it\u2019s too late. People say beautiful things at funerals, but only after burying a lifetime of cruelty or silence.

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
but the loneliness of having no one willing to admit it happened.`}]});var jf=me((VA,Um)=>{"use strict";var Ar={instagram:"muzammil_qureshi",email:"muzammilqureshi100@gmail.com"},Hm='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>',Bm='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>';Ar.instagramUrl="https://instagram.com/"+Ar.instagram;Ar.mailUrl="mailto:"+Ar.email+"?subject="+encodeURIComponent("Your paintings");Ar.icons=e=>`
	<a class="${e}" href="${Ar.instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram: @${Ar.instagram}" title="Instagram">${Hm}</a>
	<a class="${e}" href="${Ar.mailUrl}" aria-label="Email ${Ar.email}" title="Email">${Bm}</a>`;Ar.line=e=>`
	<span class="${e}">
		<a href="${Ar.instagramUrl}" target="_blank" rel="noopener">${Hm}<span>@${Ar.instagram}</span></a>
		<a href="${Ar.mailUrl}">${Bm}<span>${Ar.email}</span></a>
	</span>`;Um.exports=Ar});var sl=me((XA,jm)=>{"use strict";jm.exports=e=>{if(!e)return"";let t=[];return e.medium&&t.push(e.medium),e.size&&e.size.length===2&&t.push(e.size[0]+" \xD7 "+e.size[1]+" cm"),t.join("  \xB7  ")}});var _d=me((YA,Xm)=>{"use strict";var d_=wd(),p_=jf(),Wm=sl(),v_=vr(),Oi=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),m_=`
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
`,Tr=null;function g_(e){if(Tr){Tr.hidden=!1,requestAnimationFrame(()=>Tr.classList.add("on"));return}let t=document.createElement("style");t.textContent=m_,document.head.appendChild(t);let o=!v_.isPhone;Tr=document.createElement("div"),Tr.className="plist",Tr.setAttribute("role","region"),Tr.setAttribute("aria-label","All paintings"),Tr.innerHTML=`
		${e?"":'<button type="button" class="plist-close">Back to the gallery</button>'}
		<header class="plist-head">
			<h1>Muzammil</h1>
			<p class="plist-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</p>
			${p_.line("plist-contact")}
		</header>
		${e?'<p class="plist-note">This device could not open the 3D gallery, so here are the paintings on their own.</p>':""}
		<main class="plist-grid">
			${d_.map(r=>`
			<article class="plist-item" id="${Oi(r.slug)}">
				<img loading="lazy" decoding="async" alt="${Oi(r.title)}, ${Oi(Wm(r))}"
					src="images/web/${Oi(r.slug)}${o?"":"-1024"}.webp"
					onerror="this.onerror=null;this.src='images/${Oi(r.file)}'">
				<p class="plist-meta">${Oi(Wm(r))}</p>
				<h2>${Oi(r.title)}</h2>
				<details><summary>Read its story</summary>
					${String(r.description).split(/\n\s*\n/).map(a=>`<p>${Oi(a.trim())}</p>`).join("")}
				</details>
			</article>`).join("")}
		</main>`,["mousedown","pointerdown","click","wheel","touchstart","touchmove","keydown"].forEach(r=>Tr.addEventListener(r,a=>a.stopPropagation(),{passive:!0}));let n=Tr.querySelector(".plist-close");n&&n.addEventListener("click",Vm),document.body.appendChild(Tr),requestAnimationFrame(()=>Tr.classList.add("on"))}function Vm(){Tr&&(Tr.classList.remove("on"),setTimeout(()=>{Tr.hidden=!0},500),location.hash==="#list"&&history.replaceState(null,"",location.pathname+location.search))}Xm.exports={show:g_,hide:Vm}});var Ym=me((Md,kd)=>{(function(e,t){typeof Md=="object"&&typeof kd!="undefined"?kd.exports=t():typeof define=="function"&&define.amd?define(t):e.Stats=t()})(Md,function(){var e=function(){function t(u){return r.appendChild(u.dom),u}function o(u){for(var h=0;h<r.children.length;h++)r.children[h].style.display=h===u?"block":"none";n=u}var n=0,r=document.createElement("div");r.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",r.addEventListener("click",function(u){u.preventDefault(),o(++n%r.children.length)},!1);var a=(performance||Date).now(),i=a,s=0,c=t(new e.Panel("FPS","#0ff","#002")),l=t(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var f=t(new e.Panel("MB","#f08","#201"));return o(0),{REVISION:16,dom:r,addPanel:t,showPanel:o,begin:function(){a=(performance||Date).now()},end:function(){s++;var u=(performance||Date).now();if(l.update(u-a,200),u>i+1e3&&(c.update(1e3*s/(u-i),100),i=u,s=0,f)){var h=performance.memory;f.update(h.usedJSHeapSize/1048576,h.jsHeapSizeLimit/1048576)}return u},update:function(){a=this.end()},domElement:r,setMode:o}};return e.Panel=function(t,o,n){var r=1/0,a=0,i=Math.round,s=i(window.devicePixelRatio||1),c=80*s,l=48*s,f=3*s,u=2*s,h=3*s,p=15*s,v=74*s,d=30*s,m=document.createElement("canvas");m.width=c,m.height=l,m.style.cssText="width:80px;height:48px";var g=m.getContext("2d");return g.font="bold "+9*s+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=n,g.fillRect(0,0,c,l),g.fillStyle=o,g.fillText(t,f,u),g.fillRect(h,p,v,d),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(h,p,v,d),{dom:m,update:function(y,b){r=Math.min(r,y),a=Math.max(a,y),g.fillStyle=n,g.globalAlpha=1,g.fillRect(0,0,c,p),g.fillStyle=o,g.fillText(i(y)+" "+t+" ("+i(r)+"-"+i(a)+")",f,u),g.drawImage(m,h+s,p,v-s,d,h,p,v-s,d),g.fillRect(h+v-s,p,s,d),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(h+v-s,p,s,i((1-y/b)*d))}}},e})});var Km=me((Ed,Sd)=>{(function(e,t){typeof Ed=="object"&&typeof Sd!="undefined"?Sd.exports=t():typeof define=="function"&&define.amd?define(t):e.createREGL=t()})(Ed,function(){"use strict";var e=function(x){return x instanceof Uint8Array||x instanceof Uint16Array||x instanceof Uint32Array||x instanceof Int8Array||x instanceof Int16Array||x instanceof Int32Array||x instanceof Float32Array||x instanceof Float64Array||x instanceof Uint8ClampedArray},t=function(x,A){for(var O=Object.keys(A),oe=0;oe<O.length;++oe)x[O[oe]]=A[O[oe]];return x},o=`
`;function n(x){return typeof atob!="undefined"?atob(x):"base64:"+x}function r(x){var A=new Error("(regl) "+x);throw console.error(A),A}function a(x,A){x||r(A)}function i(x){return x?": "+x:""}function s(x,A,O){x in A||r("unknown parameter ("+x+")"+i(O)+". possible values: "+Object.keys(A).join())}function c(x,A){e(x)||r("invalid parameter type"+i(A)+". must be a typed array")}function l(x,A){switch(A){case"number":return typeof x=="number";case"object":return typeof x=="object";case"string":return typeof x=="string";case"boolean":return typeof x=="boolean";case"function":return typeof x=="function";case"undefined":return typeof x=="undefined";case"symbol":return typeof x=="symbol"}}function f(x,A,O){l(x,A)||r("invalid parameter type"+i(O)+". expected "+A+", got "+typeof x)}function u(x,A){x>=0&&(x|0)===x||r("invalid parameter type, ("+x+")"+i(A)+". must be a nonnegative integer")}function h(x,A,O){A.indexOf(x)<0&&r("invalid value"+i(O)+". must be one of: "+A)}var p=["gl","canvas","container","attributes","pixelRatio","extensions","optionalExtensions","profile","onDone"];function v(x){Object.keys(x).forEach(function(A){p.indexOf(A)<0&&r('invalid regl constructor argument "'+A+'". must be one of '+p)})}function d(x,A){for(x=x+"";x.length<A;)x=" "+x;return x}function m(){this.name="unknown",this.lines=[],this.index={},this.hasErrors=!1}function g(x,A){this.number=x,this.line=A,this.errors=[]}function y(x,A,O){this.file=x,this.line=A,this.message=O}function b(){var x=new Error,A=(x.stack||x).toString(),O=/compileProcedure.*\n\s*at.*\((.*)\)/.exec(A);if(O)return O[1];var oe=/compileProcedure.*\n\s*at\s+(.*)(\n|$)/.exec(A);return oe?oe[1]:"unknown"}function M(){var x=new Error,A=(x.stack||x).toString(),O=/at REGLCommand.*\n\s+at.*\((.*)\)/.exec(A);if(O)return O[1];var oe=/at REGLCommand.*\n\s+at\s+(.*)\n/.exec(A);return oe?oe[1]:"unknown"}function w(x,A){var O=x.split(`
`),oe=1,he=0,ee={unknown:new m,0:new m};ee.unknown.name=ee[0].name=A||b(),ee.unknown.lines.push(new g(0,""));for(var re=0;re<O.length;++re){var we=O[re],ke=/^\s*#\s*(\w+)\s+(.+)\s*$/.exec(we);if(ke)switch(ke[1]){case"line":var Te=/(\d+)(\s+\d+)?/.exec(ke[2]);Te&&(oe=Te[1]|0,Te[2]&&(he=Te[2]|0,he in ee||(ee[he]=new m)));break;case"define":var Ee=/SHADER_NAME(_B64)?\s+(.*)$/.exec(ke[2]);Ee&&(ee[he].name=Ee[1]?n(Ee[2]):Ee[2]);break}ee[he].lines.push(new g(oe++,we))}return Object.keys(ee).forEach(function(ze){var Ge=ee[ze];Ge.lines.forEach(function(_e){Ge.index[_e.number]=_e})}),ee}function _(x){var A=[];return x.split(`
`).forEach(function(O){if(!(O.length<5)){var oe=/^ERROR:\s+(\d+):(\d+):\s*(.*)$/.exec(O);oe?A.push(new y(oe[1]|0,oe[2]|0,oe[3].trim())):O.length>0&&A.push(new y("unknown",0,O))}}),A}function S(x,A){A.forEach(function(O){var oe=x[O.file];if(oe){var he=oe.index[O.line];if(he){he.errors.push(O),oe.hasErrors=!0;return}}x.unknown.hasErrors=!0,x.unknown.lines[0].errors.push(O)})}function G(x,A,O,oe,he){if(!x.getShaderParameter(A,x.COMPILE_STATUS)){var ee=x.getShaderInfoLog(A),re=oe===x.FRAGMENT_SHADER?"fragment":"vertex";se(O,"string",re+" shader source must be a string",he);var we=w(O,he),ke=_(ee);S(we,ke),Object.keys(we).forEach(function(Te){var Ee=we[Te];if(!Ee.hasErrors)return;var ze=[""],Ge=[""];function _e(Ne,X){ze.push(Ne),Ge.push(X||"")}_e("file number "+Te+": "+Ee.name+`
`,"color:red;text-decoration:underline;font-weight:bold"),Ee.lines.forEach(function(Ne){if(Ne.errors.length>0){_e(d(Ne.number,4)+"|  ","background-color:yellow; font-weight:bold"),_e(Ne.line+o,"color:red; background-color:yellow; font-weight:bold");var X=0;Ne.errors.forEach(function(ae){var Ae=ae.message,Ue=/^\s*'(.*)'\s*:\s*(.*)$/.exec(Ae);if(Ue){var ge=Ue[1];switch(Ae=Ue[2],ge){case"assign":ge="=";break}X=Math.max(Ne.line.indexOf(ge,X),0)}else X=0;_e(d("| ",6)),_e(d("^^^",X+3)+o,"font-weight:bold"),_e(d("| ",6)),_e(Ae+o,"font-weight:bold")}),_e(d("| ",6)+o)}else _e(d(Ne.number,4)+"|  "),_e(Ne.line+o,"color:red")}),typeof document!="undefined"&&!window.chrome?(Ge[0]=ze.join("%c"),console.log.apply(console,Ge)):console.log(ze.join(""))}),a.raise("Error compiling "+re+" shader, "+we[0].name)}}function R(x,A,O,oe,he){if(!x.getProgramParameter(A,x.LINK_STATUS)){var ee=x.getProgramInfoLog(A),re=w(O,he),we=w(oe,he),ke='Error linking program with vertex shader, "'+we[0].name+'", and fragment shader "'+re[0].name+'"';typeof document!="undefined"?console.log("%c"+ke+o+"%c"+ee,"color:red;text-decoration:underline;font-weight:bold","color:red"):console.log(ke+o+ee),a.raise(ke)}}function q(x){x._commandRef=b()}function T(x,A,O,oe){q(x);function he(ke){return ke?oe.id(ke):0}x._fragId=he(x.static.frag),x._vertId=he(x.static.vert);function ee(ke,Te){Object.keys(Te).forEach(function(Ee){ke[oe.id(Ee)]=!0})}var re=x._uniformSet={};ee(re,A.static),ee(re,A.dynamic);var we=x._attributeSet={};ee(we,O.static),ee(we,O.dynamic),x._hasCount="count"in x.static||"count"in x.dynamic||"elements"in x.static||"elements"in x.dynamic}function B(x,A){var O=M();r(x+" in command "+(A||b())+(O==="unknown"?"":" called from "+O))}function P(x,A,O){x||B(A,O||b())}function H(x,A,O,oe){x in A||B("unknown parameter ("+x+")"+i(O)+". possible values: "+Object.keys(A).join(),oe||b())}function se(x,A,O,oe){l(x,A)||B("invalid parameter type"+i(O)+". expected "+A+", got "+typeof x,oe||b())}function Z(x){x()}function le(x,A,O){x.texture?h(x.texture._texture.internalformat,A,"unsupported texture format for attachment"):h(x.renderbuffer._renderbuffer.format,O,"unsupported renderbuffer format for attachment")}var ie=33071,pe=9728,Qe=9984,wt=9985,Fe=9986,st=9987,yt=5120,Bt=5121,Zt=5122,Oo=5123,Be=5124,ct=5125,dt=5126,Rt=32819,so=32820,zt=33635,mt=34042,be=36193,ot={};ot[yt]=ot[Bt]=1,ot[Zt]=ot[Oo]=ot[be]=ot[zt]=ot[Rt]=ot[so]=2,ot[Be]=ot[ct]=ot[dt]=ot[mt]=4;function Ct(x,A){return x===so||x===Rt||x===zt?2:x===mt?4:ot[x]*A}function ht(x){return!(x&x-1)&&!!x}function Xe(x,A,O){var oe,he=A.width,ee=A.height,re=A.channels;a(he>0&&he<=O.maxTextureSize&&ee>0&&ee<=O.maxTextureSize,"invalid texture shape"),(x.wrapS!==ie||x.wrapT!==ie)&&a(ht(he)&&ht(ee),"incompatible wrap mode for texture, both width and height must be power of 2"),A.mipmask===1?he!==1&&ee!==1&&a(x.minFilter!==Qe&&x.minFilter!==Fe&&x.minFilter!==wt&&x.minFilter!==st,"min filter requires mipmap"):(a(ht(he)&&ht(ee),"texture must be a square power of 2 to support mipmapping"),a(A.mipmask===(he<<1)-1,"missing or incomplete mipmap data")),A.type===dt&&(O.extensions.indexOf("oes_texture_float_linear")<0&&a(x.minFilter===pe&&x.magFilter===pe,"filter not supported, must enable oes_texture_float_linear"),a(!x.genMipmaps,"mipmap generation not supported with float textures"));var we=A.images;for(oe=0;oe<16;++oe)if(we[oe]){var ke=he>>oe,Te=ee>>oe;a(A.mipmask&1<<oe,"missing mipmap data");var Ee=we[oe];if(a(Ee.width===ke&&Ee.height===Te,"invalid shape for mip images"),a(Ee.format===A.format&&Ee.internalformat===A.internalformat&&Ee.type===A.type,"incompatible type for mip image"),!Ee.compressed)if(Ee.data){var ze=Math.ceil(Ct(Ee.type,re)*ke/Ee.unpackAlignment)*Ee.unpackAlignment;a(Ee.data.byteLength===ze*Te,"invalid data for image, buffer size is inconsistent with image format")}else Ee.element||Ee.copy}else x.genMipmaps||a((A.mipmask&1<<oe)===0,"extra mipmap data");A.compressed&&a(!x.genMipmaps,"mipmap generation for compressed images not supported")}function go(x,A,O,oe){var he=x.width,ee=x.height,re=x.channels;a(he>0&&he<=oe.maxTextureSize&&ee>0&&ee<=oe.maxTextureSize,"invalid texture shape"),a(he===ee,"cube map must be square"),a(A.wrapS===ie&&A.wrapT===ie,"wrap mode not supported by cube map");for(var we=0;we<O.length;++we){var ke=O[we];a(ke.width===he&&ke.height===ee,"inconsistent cube map face shape"),A.genMipmaps&&(a(!ke.compressed,"can not generate mipmap for compressed textures"),a(ke.mipmask===1,"can not specify mipmaps and generate mipmaps"));for(var Te=ke.images,Ee=0;Ee<16;++Ee){var ze=Te[Ee];if(ze){var Ge=he>>Ee,_e=ee>>Ee;a(ke.mipmask&1<<Ee,"missing mipmap data"),a(ze.width===Ge&&ze.height===_e,"invalid shape for mip images"),a(ze.format===x.format&&ze.internalformat===x.internalformat&&ze.type===x.type,"incompatible type for mip image"),ze.compressed||(ze.data?a(ze.data.byteLength===Ge*_e*Math.max(Ct(ze.type,re),ze.unpackAlignment),"invalid data for image, buffer size is inconsistent with image format"):ze.element||ze.copy)}}}}var E=t(a,{optional:Z,raise:r,commandRaise:B,command:P,parameter:s,commandParameter:H,constructor:v,type:f,commandType:se,isTypedArray:c,nni:u,oneOf:h,shaderError:G,linkError:R,callSite:M,saveCommandRef:q,saveDrawInfo:T,framebufferFormat:le,guessCommand:b,texture2D:Xe,textureCube:go}),no=0,Xt=0,xo=5,Eo=6;function un(x,A){this.id=no++,this.type=x,this.data=A}function wr(x){return x.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function qn(x){if(x.length===0)return[];var A=x.charAt(0),O=x.charAt(x.length-1);if(x.length>1&&A===O&&(A==='"'||A==="'"))return['"'+wr(x.substr(1,x.length-2))+'"'];var oe=/\[(false|true|null|\d+|'[^']*'|"[^"]*")\]/.exec(x);if(oe)return qn(x.substr(0,oe.index)).concat(qn(oe[1])).concat(qn(x.substr(oe.index+oe[0].length)));var he=x.split(".");if(he.length===1)return['"'+wr(x)+'"'];for(var ee=[],re=0;re<he.length;++re)ee=ee.concat(qn(he[re]));return ee}function Ha(x){return"["+qn(x).join("][")+"]"}function Ai(x,A){return new un(x,Ha(A+""))}function m0(x){return typeof x=="function"&&!x._reglType||x instanceof un}function J(x,A){if(typeof x=="function")return new un(Xt,x);if(typeof x=="number"||typeof x=="boolean")return new un(xo,x);if(Array.isArray(x))return new un(Eo,x.map((O,oe)=>J(O,A+"["+oe+"]")));if(x instanceof un)return x;E(!1,"invalid option type in uniform "+A)}var Re={DynamicVariable:un,define:Ai,isDynamic:m0,unbox:J,accessor:Ha},De={next:typeof requestAnimationFrame=="function"?function(x){return requestAnimationFrame(x)}:function(x){return setTimeout(x,16)},cancel:typeof cancelAnimationFrame=="function"?function(x){return cancelAnimationFrame(x)}:clearTimeout},Ce=typeof performance!="undefined"&&performance.now?function(){return performance.now()}:function(){return+new Date};function it(){var x={"":0},A=[""];return{id:function(O){var oe=x[O];return oe||(oe=x[O]=A.length,A.push(O),oe)},str:function(O){return A[O]}}}function Et(x,A,O){var oe=document.createElement("canvas");t(oe.style,{border:0,margin:0,padding:0,top:0,left:0}),x.appendChild(oe),x===document.body&&(oe.style.position="absolute",t(x.style,{margin:0,padding:0}));function he(){var we=window.innerWidth,ke=window.innerHeight;if(x!==document.body){var Te=x.getBoundingClientRect();we=Te.right-Te.left,ke=Te.bottom-Te.top}oe.width=O*we,oe.height=O*ke,t(oe.style,{width:we+"px",height:ke+"px"})}var ee;x!==document.body&&typeof ResizeObserver=="function"?(ee=new ResizeObserver(function(){setTimeout(he)}),ee.observe(x)):window.addEventListener("resize",he,!1);function re(){ee?ee.disconnect():window.removeEventListener("resize",he),x.removeChild(oe)}return he(),{canvas:oe,onDestroy:re}}function _t(x,A){function O(oe){try{return x.getContext(oe,A)}catch(he){return null}}return O("webgl")||O("experimental-webgl")||O("webgl-experimental")}function ut(x){return typeof x.nodeName=="string"&&typeof x.appendChild=="function"&&typeof x.getBoundingClientRect=="function"}function Ot(x){return typeof x.drawArrays=="function"||typeof x.drawElements=="function"}function gt(x){return typeof x=="string"?x.split():(E(Array.isArray(x),"invalid extension array"),x)}function Ut(x){return typeof x=="string"?(E(typeof document!="undefined","not supported outside of DOM"),document.querySelector(x)):x}function kt(x){var A=x||{},O,oe,he,ee,re={},we=[],ke=[],Te=typeof window=="undefined"?1:window.devicePixelRatio,Ee=!1,ze=function(Ne){Ne&&E.raise(Ne)},Ge=function(){};if(typeof A=="string"?(E(typeof document!="undefined","selector queries only supported in DOM enviroments"),O=document.querySelector(A),E(O,"invalid query string for element")):typeof A=="object"?ut(A)?O=A:Ot(A)?(ee=A,he=ee.canvas):(E.constructor(A),"gl"in A?ee=A.gl:"canvas"in A?he=Ut(A.canvas):"container"in A&&(oe=Ut(A.container)),"attributes"in A&&(re=A.attributes,E.type(re,"object","invalid context attributes")),"extensions"in A&&(we=gt(A.extensions)),"optionalExtensions"in A&&(ke=gt(A.optionalExtensions)),"onDone"in A&&(E.type(A.onDone,"function","invalid or missing onDone callback"),ze=A.onDone),"profile"in A&&(Ee=!!A.profile),"pixelRatio"in A&&(Te=+A.pixelRatio,E(Te>0,"invalid pixel ratio"))):E.raise("invalid arguments to regl"),O&&(O.nodeName.toLowerCase()==="canvas"?he=O:oe=O),!ee){if(!he){E(typeof document!="undefined","must manually specify webgl context outside of DOM environments");var _e=Et(oe||document.body,ze,Te);if(!_e)return null;he=_e.canvas,Ge=_e.onDestroy}re.premultipliedAlpha===void 0&&(re.premultipliedAlpha=!0),ee=_t(he,re)}return ee?{gl:ee,canvas:he,container:oe,extensions:we,optionalExtensions:ke,pixelRatio:Te,profile:Ee,onDone:ze,onDestroy:Ge}:(Ge(),ze("webgl not supported, try upgrading your browser or graphics drivers http://get.webgl.org"),null)}function St(x,A){var O={};function oe(re){E.type(re,"string","extension name must be string");var we=re.toLowerCase(),ke;try{ke=O[we]=x.getExtension(we)}catch(Te){}return!!ke}for(var he=0;he<A.extensions.length;++he){var ee=A.extensions[he];if(!oe(ee))return A.onDestroy(),A.onDone('"'+ee+'" extension is not supported by the current WebGL context, try upgrading your system or a different browser'),null}return A.optionalExtensions.forEach(oe),{extensions:O,restore:function(){Object.keys(O).forEach(function(re){if(O[re]&&!oe(re))throw new Error("(regl): error restoring extension "+re)})}}}function Wt(x,A){for(var O=Array(x),oe=0;oe<x;++oe)O[oe]=A(oe);return O}var pt=5120,ro=5121,_o=5122,xt=5123,Po=5124,la=5125,ri=5126;function Jt(x){for(var A=16;A<=1<<28;A*=16)if(x<=A)return A;return 0}function co(x){var A,O;return A=(x>65535)<<4,x>>>=A,O=(x>255)<<3,x>>>=O,A|=O,O=(x>15)<<2,x>>>=O,A|=O,O=(x>3)<<1,x>>>=O,A|=O,A|x>>1}function zn(){var x=Wt(8,function(){return[]});function A(ee){var re=Jt(ee),we=x[co(re)>>2];return we.length>0?we.pop():new ArrayBuffer(re)}function O(ee){x[co(ee.byteLength)>>2].push(ee)}function oe(ee,re){var we=null;switch(ee){case pt:we=new Int8Array(A(re),0,re);break;case ro:we=new Uint8Array(A(re),0,re);break;case _o:we=new Int16Array(A(2*re),0,re);break;case xt:we=new Uint16Array(A(2*re),0,re);break;case Po:we=new Int32Array(A(4*re),0,re);break;case la:we=new Uint32Array(A(4*re),0,re);break;case ri:we=new Float32Array(A(4*re),0,re);break;default:return null}return we.length!==re?we.subarray(0,re):we}function he(ee){O(ee.buffer)}return{alloc:A,free:O,allocType:oe,freeType:he}}var V=zn();V.zero=zn();var de=3408,je=3410,nt=3411,rt=3412,Xo=3413,Cn=3414,_r=3415,Bo=33901,Gr=33902,Jo=3379,So=3386,rn=34921,Co=36347,Hn=36348,Mr=35661,cr=35660,an=34930,lr=36349,kr=34076,Qn=34024,lo=7936,Yo=7937,fa=7938,ds=35724,Ba=34047,ps=36063,ff=34852,Ti=3553,g0=34067,Fc=34069,ku=33984,ai=6408,Dc=5126,pr=5121,Gc=36160,vs=36053,D5=36064,G5=16384,$5=function(x,A){var O=1;A.ext_texture_filter_anisotropic&&(O=x.getParameter(Ba));var oe=1,he=1;A.webgl_draw_buffers&&(oe=x.getParameter(ff),he=x.getParameter(ps));var ee=!!A.oes_texture_float;if(ee){var re=x.createTexture();x.bindTexture(Ti,re),x.texImage2D(Ti,0,ai,1,1,0,ai,Dc,null);var we=x.createFramebuffer();if(x.bindFramebuffer(Gc,we),x.framebufferTexture2D(Gc,D5,Ti,re,0),x.bindTexture(Ti,null),x.checkFramebufferStatus(Gc)!==vs)ee=!1;else{x.viewport(0,0,1,1),x.clearColor(1,0,0,1),x.clear(G5);var ke=V.allocType(Dc,4);x.readPixels(0,0,1,1,ai,Dc,ke),x.getError()?ee=!1:(x.deleteFramebuffer(we),x.deleteTexture(re),ee=ke[0]===1),V.freeType(ke)}}var Te=typeof navigator!="undefined"&&(/MSIE/.test(navigator.userAgent)||/Trident\//.test(navigator.appVersion)||/Edge/.test(navigator.userAgent)),Ee=!0;if(!Te){var ze=x.createTexture(),Ge=V.allocType(pr,36);x.activeTexture(ku),x.bindTexture(g0,ze),x.texImage2D(Fc,0,ai,3,3,0,ai,pr,Ge),V.freeType(Ge),x.bindTexture(g0,null),x.deleteTexture(ze),Ee=!x.getError()}return{colorBits:[x.getParameter(je),x.getParameter(nt),x.getParameter(rt),x.getParameter(Xo)],depthBits:x.getParameter(Cn),stencilBits:x.getParameter(_r),subpixelBits:x.getParameter(de),extensions:Object.keys(A).filter(function(_e){return!!A[_e]}),maxAnisotropic:O,maxDrawbuffers:oe,maxColorAttachments:he,pointSizeDims:x.getParameter(Bo),lineWidthDims:x.getParameter(Gr),maxViewportDims:x.getParameter(So),maxCombinedTextureUnits:x.getParameter(Mr),maxCubeMapSize:x.getParameter(kr),maxRenderbufferSize:x.getParameter(Qn),maxTextureUnits:x.getParameter(an),maxTextureSize:x.getParameter(Jo),maxAttributes:x.getParameter(rn),maxVertexUniforms:x.getParameter(Co),maxVertexTextureUnits:x.getParameter(cr),maxVaryingVectors:x.getParameter(Hn),maxFragmentUniforms:x.getParameter(lr),glsl:x.getParameter(ds),renderer:x.getParameter(Yo),vendor:x.getParameter(lo),version:x.getParameter(fa),readFloat:ee,npotTextureCube:Ee}};function Ea(x){return!!x&&typeof x=="object"&&Array.isArray(x.shape)&&Array.isArray(x.stride)&&typeof x.offset=="number"&&x.shape.length===x.stride.length&&(Array.isArray(x.data)||e(x.data))}var Yr=function(x){return Object.keys(x).map(function(A){return x[A]})},hf={shape:U5,flatten:B5};function q5(x,A,O){for(var oe=0;oe<A;++oe)O[oe]=x[oe]}function H5(x,A,O,oe){for(var he=0,ee=0;ee<A;++ee)for(var re=x[ee],we=0;we<O;++we)oe[he++]=re[we]}function Bp(x,A,O,oe,he,ee){for(var re=ee,we=0;we<A;++we)for(var ke=x[we],Te=0;Te<O;++Te)for(var Ee=ke[Te],ze=0;ze<oe;++ze)he[re++]=Ee[ze]}function Up(x,A,O,oe,he){for(var ee=1,re=O+1;re<A.length;++re)ee*=A[re];var we=A[O];if(A.length-O===4){var ke=A[O+1],Te=A[O+2],Ee=A[O+3];for(re=0;re<we;++re)Bp(x[re],ke,Te,Ee,oe,he),he+=ee}else for(re=0;re<we;++re)Up(x[re],A,O+1,oe,he),he+=ee}function B5(x,A,O,oe){var he=1;if(A.length)for(var ee=0;ee<A.length;++ee)he*=A[ee];else he=0;var re=oe||V.allocType(O,he);switch(A.length){case 0:break;case 1:q5(x,A[0],re);break;case 2:H5(x,A[0],A[1],re);break;case 3:Bp(x,A[0],A[1],A[2],re,0);break;default:Up(x,A,0,re,0)}return re}function U5(x){for(var A=[],O=x;O.length;O=O[0])A.push(O.length);return A}var Eu={"[object Int8Array]":5120,"[object Int16Array]":5122,"[object Int32Array]":5124,"[object Uint8Array]":5121,"[object Uint8ClampedArray]":5121,"[object Uint16Array]":5123,"[object Uint32Array]":5125,"[object Float32Array]":5126,"[object Float64Array]":5121,"[object ArrayBuffer]":5121},j5=5120,W5=5122,V5=5124,X5=5121,Y5=5123,K5=5125,Q5=5126,Z5=5126,ms={int8:j5,int16:W5,int32:V5,uint8:X5,uint16:Y5,uint32:K5,float:Q5,float32:Z5},J5=35048,ew=35040,uf={dynamic:J5,stream:ew,static:35044},Su=hf.flatten,jp=hf.shape,Wp=35044,tw=35040,Au=5121,Tu=5126,Li=[];Li[5120]=1,Li[5122]=2,Li[5124]=4,Li[5121]=1,Li[5123]=2,Li[5125]=4,Li[5126]=4;function df(x){return Eu[Object.prototype.toString.call(x)]|0}function Vp(x,A){for(var O=0;O<A.length;++O)x[O]=A[O]}function Xp(x,A,O,oe,he,ee,re){for(var we=0,ke=0;ke<O;++ke)for(var Te=0;Te<oe;++Te)x[we++]=A[he*ke+ee*Te+re]}function ow(x,A,O,oe){var he=0,ee={};function re(X){this.id=he++,this.buffer=x.createBuffer(),this.type=X,this.usage=Wp,this.byteLength=0,this.dimension=1,this.dtype=Au,this.persistentData=null,O.profile&&(this.stats={size:0})}re.prototype.bind=function(){x.bindBuffer(this.type,this.buffer)},re.prototype.destroy=function(){Ge(this)};var we=[];function ke(X,ae){var Ae=we.pop();return Ae||(Ae=new re(X)),Ae.bind(),ze(Ae,ae,tw,0,1,!1),Ae}function Te(X){we.push(X)}function Ee(X,ae,Ae){X.byteLength=ae.byteLength,x.bufferData(X.type,ae,Ae)}function ze(X,ae,Ae,Ue,ge,We){var ye;if(X.usage=Ae,Array.isArray(ae)){if(X.dtype=Ue||Tu,ae.length>0){var Oe;if(Array.isArray(ae[0])){ye=jp(ae);for(var xe=1,Pe=1;Pe<ye.length;++Pe)xe*=ye[Pe];X.dimension=xe,Oe=Su(ae,ye,X.dtype),Ee(X,Oe,Ae),We?X.persistentData=Oe:V.freeType(Oe)}else if(typeof ae[0]=="number"){X.dimension=ge;var vt=V.allocType(X.dtype,ae.length);Vp(vt,ae),Ee(X,vt,Ae),We?X.persistentData=vt:V.freeType(vt)}else e(ae[0])?(X.dimension=ae[0].length,X.dtype=Ue||df(ae[0])||Tu,Oe=Su(ae,[ae.length,ae[0].length],X.dtype),Ee(X,Oe,Ae),We?X.persistentData=Oe:V.freeType(Oe)):E.raise("invalid buffer data")}}else if(e(ae))X.dtype=Ue||df(ae),X.dimension=ge,Ee(X,ae,Ae),We&&(X.persistentData=new Uint8Array(new Uint8Array(ae.buffer)));else if(Ea(ae)){ye=ae.shape;var Nt=ae.stride,$e=ae.offset,Le=0,ve=0,Tt=0,$t=0;ye.length===1?(Le=ye[0],ve=1,Tt=Nt[0],$t=0):ye.length===2?(Le=ye[0],ve=ye[1],Tt=Nt[0],$t=Nt[1]):E.raise("invalid shape"),X.dtype=Ue||df(ae.data)||Tu,X.dimension=ve;var Ze=V.allocType(X.dtype,Le*ve);Xp(Ze,ae.data,Le,ve,Tt,$t,$e),Ee(X,Ze,Ae),We?X.persistentData=Ze:V.freeType(Ze)}else ae instanceof ArrayBuffer?(X.dtype=Au,X.dimension=ge,Ee(X,ae,Ae),We&&(X.persistentData=new Uint8Array(new Uint8Array(ae)))):E.raise("invalid buffer data")}function Ge(X){A.bufferCount--,oe(X);var ae=X.buffer;E(ae,"buffer must not be deleted already"),x.deleteBuffer(ae),X.buffer=null,delete ee[X.id]}function _e(X,ae,Ae,Ue){A.bufferCount++;var ge=new re(ae);ee[ge.id]=ge;function We(xe){var Pe=Wp,vt=null,Nt=0,$e=0,Le=1;return Array.isArray(xe)||e(xe)||Ea(xe)||xe instanceof ArrayBuffer?vt=xe:typeof xe=="number"?Nt=xe|0:xe&&(E.type(xe,"object","buffer arguments must be an object, a number or an array"),"data"in xe&&(E(vt===null||Array.isArray(vt)||e(vt)||Ea(vt),"invalid data for buffer"),vt=xe.data),"usage"in xe&&(E.parameter(xe.usage,uf,"invalid buffer usage"),Pe=uf[xe.usage]),"type"in xe&&(E.parameter(xe.type,ms,"invalid buffer type"),$e=ms[xe.type]),"dimension"in xe&&(E.type(xe.dimension,"number","invalid dimension"),Le=xe.dimension|0),"length"in xe&&(E.nni(Nt,"buffer length must be a nonnegative integer"),Nt=xe.length|0)),ge.bind(),vt?ze(ge,vt,Pe,$e,Le,Ue):(Nt&&x.bufferData(ge.type,Nt,Pe),ge.dtype=$e||Au,ge.usage=Pe,ge.dimension=Le,ge.byteLength=Nt),O.profile&&(ge.stats.size=ge.byteLength*Li[ge.dtype]),We}function ye(xe,Pe){E(Pe+xe.byteLength<=ge.byteLength,"invalid buffer subdata call, buffer is too small.  Can't write data of size "+xe.byteLength+" starting from offset "+Pe+" to a buffer of size "+ge.byteLength),x.bufferSubData(ge.type,Pe,xe)}function Oe(xe,Pe){var vt=(Pe||0)|0,Nt;if(ge.bind(),e(xe)||xe instanceof ArrayBuffer)ye(xe,vt);else if(Array.isArray(xe)){if(xe.length>0)if(typeof xe[0]=="number"){var $e=V.allocType(ge.dtype,xe.length);Vp($e,xe),ye($e,vt),V.freeType($e)}else if(Array.isArray(xe[0])||e(xe[0])){Nt=jp(xe);var Le=Su(xe,Nt,ge.dtype);ye(Le,vt),V.freeType(Le)}else E.raise("invalid buffer data")}else if(Ea(xe)){Nt=xe.shape;var ve=xe.stride,Tt=0,$t=0,Ze=0,Yt=0;Nt.length===1?(Tt=Nt[0],$t=1,Ze=ve[0],Yt=0):Nt.length===2?(Tt=Nt[0],$t=Nt[1],Ze=ve[0],Yt=ve[1]):E.raise("invalid shape");var Pt=Array.isArray(xe.data)?ge.dtype:df(xe.data),jt=V.allocType(Pt,Tt*$t);Xp(jt,xe.data,Tt,$t,Ze,Yt,xe.offset),ye(jt,vt),V.freeType(jt)}else E.raise("invalid data for buffer subdata");return We}return Ae||We(X),We._reglType="buffer",We._buffer=ge,We.subdata=Oe,O.profile&&(We.stats=ge.stats),We.destroy=function(){Ge(ge)},We}function Ne(){Yr(ee).forEach(function(X){X.buffer=x.createBuffer(),x.bindBuffer(X.type,X.buffer),x.bufferData(X.type,X.persistentData||X.byteLength,X.usage)})}return O.profile&&(A.getTotalBufferSize=function(){var X=0;return Object.keys(ee).forEach(function(ae){X+=ee[ae].stats.size}),X}),{create:_e,createStream:ke,destroyStream:Te,clear:function(){Yr(ee).forEach(Ge),we.forEach(Ge)},getBuffer:function(X){return X&&X._buffer instanceof re?X._buffer:null},restore:Ne,_initBuffer:ze}}var nw=0,rw=0,aw=1,iw=1,sw=4,cw=4,x0={points:nw,point:rw,lines:aw,line:iw,triangles:sw,triangle:cw,"line loop":2,"line strip":3,"triangle strip":5,"triangle fan":6},lw=0,fw=1,$c=4,hw=5120,y0=5121,Yp=5122,b0=5123,Kp=5124,gs=5125,Lu=34963,uw=35040,dw=35044;function pw(x,A,O,oe){var he={},ee=0,re={uint8:y0,uint16:b0};A.oes_element_index_uint&&(re.uint32=gs);function we(Ne){this.id=ee++,he[this.id]=this,this.buffer=Ne,this.primType=$c,this.vertCount=0,this.type=0}we.prototype.bind=function(){this.buffer.bind()};var ke=[];function Te(Ne){var X=ke.pop();return X||(X=new we(O.create(null,Lu,!0,!1)._buffer)),ze(X,Ne,uw,-1,-1,0,0),X}function Ee(Ne){ke.push(Ne)}function ze(Ne,X,ae,Ae,Ue,ge,We){Ne.buffer.bind();var ye;if(X){var Oe=We;!We&&(!e(X)||Ea(X)&&!e(X.data))&&(Oe=A.oes_element_index_uint?gs:b0),O._initBuffer(Ne.buffer,X,ae,Oe,3)}else x.bufferData(Lu,ge,ae),Ne.buffer.dtype=ye||y0,Ne.buffer.usage=ae,Ne.buffer.dimension=3,Ne.buffer.byteLength=ge;if(ye=We,!We){switch(Ne.buffer.dtype){case y0:case hw:ye=y0;break;case b0:case Yp:ye=b0;break;case gs:case Kp:ye=gs;break;default:E.raise("unsupported type for element array")}Ne.buffer.dtype=ye}Ne.type=ye,E(ye!==gs||!!A.oes_element_index_uint,"32 bit element buffers not supported, enable oes_element_index_uint first");var xe=Ue;xe<0&&(xe=Ne.buffer.byteLength,ye===b0?xe>>=1:ye===gs&&(xe>>=2)),Ne.vertCount=xe;var Pe=Ae;if(Ae<0){Pe=$c;var vt=Ne.buffer.dimension;vt===1&&(Pe=lw),vt===2&&(Pe=fw),vt===3&&(Pe=$c)}Ne.primType=Pe}function Ge(Ne){oe.elementsCount--,E(Ne.buffer!==null,"must not double destroy elements"),delete he[Ne.id],Ne.buffer.destroy(),Ne.buffer=null}function _e(Ne,X){var ae=O.create(null,Lu,!0),Ae=new we(ae._buffer);oe.elementsCount++;function Ue(ge){if(!ge)ae(),Ae.primType=$c,Ae.vertCount=0,Ae.type=y0;else if(typeof ge=="number")ae(ge),Ae.primType=$c,Ae.vertCount=ge|0,Ae.type=y0;else{var We=null,ye=dw,Oe=-1,xe=-1,Pe=0,vt=0;Array.isArray(ge)||e(ge)||Ea(ge)?We=ge:(E.type(ge,"object","invalid arguments for elements"),"data"in ge&&(We=ge.data,E(Array.isArray(We)||e(We)||Ea(We),"invalid data for element buffer")),"usage"in ge&&(E.parameter(ge.usage,uf,"invalid element buffer usage"),ye=uf[ge.usage]),"primitive"in ge&&(E.parameter(ge.primitive,x0,"invalid element buffer primitive"),Oe=x0[ge.primitive]),"count"in ge&&(E(typeof ge.count=="number"&&ge.count>=0,"invalid vertex count for elements"),xe=ge.count|0),"type"in ge&&(E.parameter(ge.type,re,"invalid buffer type"),vt=re[ge.type]),"length"in ge?Pe=ge.length|0:(Pe=xe,vt===b0||vt===Yp?Pe*=2:(vt===gs||vt===Kp)&&(Pe*=4))),ze(Ae,We,ye,Oe,xe,Pe,vt)}return Ue}return Ue(Ne),Ue._reglType="elements",Ue._elements=Ae,Ue.subdata=function(ge,We){return ae.subdata(ge,We),Ue},Ue.destroy=function(){Ge(Ae)},Ue}return{create:_e,createStream:Te,destroyStream:Ee,getElements:function(Ne){return typeof Ne=="function"&&Ne._elements instanceof we?Ne._elements:null},clear:function(){Yr(he).forEach(Ge)}}}var Qp=new Float32Array(1),vw=new Uint32Array(Qp.buffer),mw=5123;function Zp(x){for(var A=V.allocType(mw,x.length),O=0;O<x.length;++O)if(isNaN(x[O]))A[O]=65535;else if(x[O]===1/0)A[O]=31744;else if(x[O]===-1/0)A[O]=64512;else{Qp[0]=x[O];var oe=vw[0],he=oe>>>31<<15,ee=(oe<<1>>>24)-127,re=oe>>13&1023;if(ee<-24)A[O]=he;else if(ee<-14){var we=-14-ee;A[O]=he+(re+1024>>we)}else ee>15?A[O]=he+31744:A[O]=he+(ee+15<<10)+re}return A}function sn(x){return Array.isArray(x)||e(x)}var Jp=function(x){return!(x&x-1)&&!!x},gw=34467,Ua=3553,zu=34067,pf=34069,xs=6408,Cu=6406,vf=6407,qc=6409,mf=6410,ev=32854,Nu=32855,tv=36194,xw=32819,yw=32820,bw=33635,ww=34042,Ru=6402,gf=34041,Ou=35904,Pu=35906,w0=36193,Iu=33776,Fu=33777,Du=33778,Gu=33779,ov=35986,nv=35987,rv=34798,av=35840,iv=35841,sv=35842,cv=35843,lv=36196,_0=5121,$u=5123,qu=5125,Hc=5126,_w=10242,Mw=10243,kw=10497,Hu=33071,Ew=33648,Sw=10240,Aw=10241,Bu=9728,Tw=9729,Uu=9984,fv=9985,hv=9986,ju=9987,Lw=33170,xf=4352,zw=4353,Cw=4354,Nw=34046,Rw=3317,Ow=37440,Pw=37441,Iw=37443,uv=37444,Bc=33984,Fw=[Uu,hv,fv,ju],yf=[0,qc,mf,vf,xs],ha={};ha[qc]=ha[Cu]=ha[Ru]=1,ha[gf]=ha[mf]=2,ha[vf]=ha[Ou]=3,ha[xs]=ha[Pu]=4;function M0(x){return"[object "+x+"]"}var dv=M0("HTMLCanvasElement"),pv=M0("OffscreenCanvas"),vv=M0("CanvasRenderingContext2D"),mv=M0("ImageBitmap"),gv=M0("HTMLImageElement"),xv=M0("HTMLVideoElement"),Dw=Object.keys(Eu).concat([dv,pv,vv,mv,gv,xv]),k0=[];k0[_0]=1,k0[Hc]=4,k0[w0]=2,k0[$u]=2,k0[qu]=4;var Zn=[];Zn[ev]=2,Zn[Nu]=2,Zn[tv]=2,Zn[gf]=4,Zn[Iu]=.5,Zn[Fu]=.5,Zn[Du]=1,Zn[Gu]=1,Zn[ov]=.5,Zn[nv]=1,Zn[rv]=1,Zn[av]=.5,Zn[iv]=.25,Zn[sv]=.5,Zn[cv]=.25,Zn[lv]=.5;function yv(x){return Array.isArray(x)&&(x.length===0||typeof x[0]=="number")}function bv(x){if(!Array.isArray(x))return!1;var A=x.length;return!(A===0||!sn(x[0]))}function ys(x){return Object.prototype.toString.call(x)}function wv(x){return ys(x)===dv}function _v(x){return ys(x)===pv}function Gw(x){return ys(x)===vv}function $w(x){return ys(x)===mv}function qw(x){return ys(x)===gv}function Hw(x){return ys(x)===xv}function Wu(x){if(!x)return!1;var A=ys(x);return Dw.indexOf(A)>=0?!0:yv(x)||bv(x)||Ea(x)}function Mv(x){return Eu[Object.prototype.toString.call(x)]|0}function Bw(x,A){var O=A.length;switch(x.type){case _0:case $u:case qu:case Hc:var oe=V.allocType(x.type,O);oe.set(A),x.data=oe;break;case w0:x.data=Zp(A);break;default:E.raise("unsupported texture type, must specify a typed array")}}function kv(x,A){return V.allocType(x.type===w0?Hc:x.type,A)}function Ev(x,A){x.type===w0?(x.data=Zp(A),V.freeType(A)):x.data=A}function Uw(x,A,O,oe,he,ee){for(var re=x.width,we=x.height,ke=x.channels,Te=re*we*ke,Ee=kv(x,Te),ze=0,Ge=0;Ge<we;++Ge)for(var _e=0;_e<re;++_e)for(var Ne=0;Ne<ke;++Ne)Ee[ze++]=A[O*_e+oe*Ge+he*Ne+ee];Ev(x,Ee)}function bf(x,A,O,oe,he,ee){var re;if(typeof Zn[x]!="undefined"?re=Zn[x]:re=ha[x]*k0[A],ee&&(re*=6),he){for(var we=0,ke=O;ke>=1;)we+=re*ke*ke,ke/=2;return we}else return re*O*oe}function jw(x,A,O,oe,he,ee,re){var we={"don't care":xf,"dont care":xf,nice:Cw,fast:zw},ke={repeat:kw,clamp:Hu,mirror:Ew},Te={nearest:Bu,linear:Tw},Ee=t({mipmap:ju,"nearest mipmap nearest":Uu,"linear mipmap nearest":fv,"nearest mipmap linear":hv,"linear mipmap linear":ju},Te),ze={none:0,browser:uv},Ge={uint8:_0,rgba4:xw,rgb565:bw,"rgb5 a1":yw},_e={alpha:Cu,luminance:qc,"luminance alpha":mf,rgb:vf,rgba:xs,rgba4:ev,"rgb5 a1":Nu,rgb565:tv},Ne={};A.ext_srgb&&(_e.srgb=Ou,_e.srgba=Pu),A.oes_texture_float&&(Ge.float32=Ge.float=Hc),A.oes_texture_half_float&&(Ge.float16=Ge["half float"]=w0),A.webgl_depth_texture&&(t(_e,{depth:Ru,"depth stencil":gf}),t(Ge,{uint16:$u,uint32:qu,"depth stencil":ww})),A.webgl_compressed_texture_s3tc&&t(Ne,{"rgb s3tc dxt1":Iu,"rgba s3tc dxt1":Fu,"rgba s3tc dxt3":Du,"rgba s3tc dxt5":Gu}),A.webgl_compressed_texture_atc&&t(Ne,{"rgb atc":ov,"rgba atc explicit alpha":nv,"rgba atc interpolated alpha":rv}),A.webgl_compressed_texture_pvrtc&&t(Ne,{"rgb pvrtc 4bppv1":av,"rgb pvrtc 2bppv1":iv,"rgba pvrtc 4bppv1":sv,"rgba pvrtc 2bppv1":cv}),A.webgl_compressed_texture_etc1&&(Ne["rgb etc1"]=lv);var X=Array.prototype.slice.call(x.getParameter(gw));Object.keys(Ne).forEach(function(N){var ne=Ne[N];X.indexOf(ne)>=0&&(_e[N]=ne)});var ae=Object.keys(_e);O.textureFormats=ae;var Ae=[];Object.keys(_e).forEach(function(N){var ne=_e[N];Ae[ne]=N});var Ue=[];Object.keys(Ge).forEach(function(N){var ne=Ge[N];Ue[ne]=N});var ge=[];Object.keys(Te).forEach(function(N){var ne=Te[N];ge[ne]=N});var We=[];Object.keys(Ee).forEach(function(N){var ne=Ee[N];We[ne]=N});var ye=[];Object.keys(ke).forEach(function(N){var ne=ke[N];ye[ne]=N});var Oe=ae.reduce(function(N,ne){var Q=_e[ne];return Q===qc||Q===Cu||Q===qc||Q===mf||Q===Ru||Q===gf||A.ext_srgb&&(Q===Ou||Q===Pu)?N[Q]=Q:Q===Nu||ne.indexOf("rgba")>=0?N[Q]=xs:N[Q]=vf,N},{});function xe(){this.internalformat=xs,this.format=xs,this.type=_0,this.compressed=!1,this.premultiplyAlpha=!1,this.flipY=!1,this.unpackAlignment=1,this.colorSpace=uv,this.width=0,this.height=0,this.channels=0}function Pe(N,ne){N.internalformat=ne.internalformat,N.format=ne.format,N.type=ne.type,N.compressed=ne.compressed,N.premultiplyAlpha=ne.premultiplyAlpha,N.flipY=ne.flipY,N.unpackAlignment=ne.unpackAlignment,N.colorSpace=ne.colorSpace,N.width=ne.width,N.height=ne.height,N.channels=ne.channels}function vt(N,ne){if(!(typeof ne!="object"||!ne)){if("premultiplyAlpha"in ne&&(E.type(ne.premultiplyAlpha,"boolean","invalid premultiplyAlpha"),N.premultiplyAlpha=ne.premultiplyAlpha),"flipY"in ne&&(E.type(ne.flipY,"boolean","invalid texture flip"),N.flipY=ne.flipY),"alignment"in ne&&(E.oneOf(ne.alignment,[1,2,4,8],"invalid texture unpack alignment"),N.unpackAlignment=ne.alignment),"colorSpace"in ne&&(E.parameter(ne.colorSpace,ze,"invalid colorSpace"),N.colorSpace=ze[ne.colorSpace]),"type"in ne){var Q=ne.type;E(A.oes_texture_float||!(Q==="float"||Q==="float32"),"you must enable the OES_texture_float extension in order to use floating point textures."),E(A.oes_texture_half_float||!(Q==="half float"||Q==="float16"),"you must enable the OES_texture_half_float extension in order to use 16-bit floating point textures."),E(A.webgl_depth_texture||!(Q==="uint16"||Q==="uint32"||Q==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),E.parameter(Q,Ge,"invalid texture type"),N.type=Ge[Q]}var Ye=N.width,Kt=N.height,z=N.channels,k=!1;"shape"in ne?(E(Array.isArray(ne.shape)&&ne.shape.length>=2,"shape must be an array"),Ye=ne.shape[0],Kt=ne.shape[1],ne.shape.length===3&&(z=ne.shape[2],E(z>0&&z<=4,"invalid number of channels"),k=!0),E(Ye>=0&&Ye<=O.maxTextureSize,"invalid width"),E(Kt>=0&&Kt<=O.maxTextureSize,"invalid height")):("radius"in ne&&(Ye=Kt=ne.radius,E(Ye>=0&&Ye<=O.maxTextureSize,"invalid radius")),"width"in ne&&(Ye=ne.width,E(Ye>=0&&Ye<=O.maxTextureSize,"invalid width")),"height"in ne&&(Kt=ne.height,E(Kt>=0&&Kt<=O.maxTextureSize,"invalid height")),"channels"in ne&&(z=ne.channels,E(z>0&&z<=4,"invalid number of channels"),k=!0)),N.width=Ye|0,N.height=Kt|0,N.channels=z|0;var F=!1;if("format"in ne){var W=ne.format;E(A.webgl_depth_texture||!(W==="depth"||W==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),E.parameter(W,_e,"invalid texture format");var Y=N.internalformat=_e[W];N.format=Oe[Y],W in Ge&&("type"in ne||(N.type=Ge[W])),W in Ne&&(N.compressed=!0),F=!0}!k&&F?N.channels=ha[N.format]:k&&!F?N.channels!==yf[N.format]&&(N.format=N.internalformat=yf[N.channels]):F&&k&&E(N.channels===ha[N.format],"number of channels inconsistent with specified format")}}function Nt(N){x.pixelStorei(Ow,N.flipY),x.pixelStorei(Pw,N.premultiplyAlpha),x.pixelStorei(Iw,N.colorSpace),x.pixelStorei(Rw,N.unpackAlignment)}function $e(){xe.call(this),this.xOffset=0,this.yOffset=0,this.data=null,this.needsFree=!1,this.element=null,this.needsCopy=!1}function Le(N,ne){var Q=null;if(Wu(ne)?Q=ne:ne&&(E.type(ne,"object","invalid pixel data type"),vt(N,ne),"x"in ne&&(N.xOffset=ne.x|0),"y"in ne&&(N.yOffset=ne.y|0),Wu(ne.data)&&(Q=ne.data)),E(!N.compressed||Q instanceof Uint8Array,"compressed texture data must be stored in a uint8array"),ne.copy){E(!Q,"can not specify copy and data field for the same texture");var Ye=he.viewportWidth,Kt=he.viewportHeight;N.width=N.width||Ye-N.xOffset,N.height=N.height||Kt-N.yOffset,N.needsCopy=!0,E(N.xOffset>=0&&N.xOffset<Ye&&N.yOffset>=0&&N.yOffset<Kt&&N.width>0&&N.width<=Ye&&N.height>0&&N.height<=Kt,"copy texture read out of bounds")}else if(!Q)N.width=N.width||1,N.height=N.height||1,N.channels=N.channels||4;else if(e(Q))N.channels=N.channels||4,N.data=Q,!("type"in ne)&&N.type===_0&&(N.type=Mv(Q));else if(yv(Q))N.channels=N.channels||4,Bw(N,Q),N.alignment=1,N.needsFree=!0;else if(Ea(Q)){var z=Q.data;!Array.isArray(z)&&N.type===_0&&(N.type=Mv(z));var k=Q.shape,F=Q.stride,W,Y,$,D,U,C;k.length===3?($=k[2],C=F[2]):(E(k.length===2,"invalid ndarray pixel data, must be 2 or 3D"),$=1,C=1),W=k[0],Y=k[1],D=F[0],U=F[1],N.alignment=1,N.width=W,N.height=Y,N.channels=$,N.format=N.internalformat=yf[$],N.needsFree=!0,Uw(N,z,D,U,C,Q.offset)}else if(wv(Q)||_v(Q)||Gw(Q))wv(Q)||_v(Q)?N.element=Q:N.element=Q.canvas,N.width=N.element.width,N.height=N.element.height,N.channels=4;else if($w(Q))N.element=Q,N.width=Q.width,N.height=Q.height,N.channels=4;else if(qw(Q))N.element=Q,N.width=Q.naturalWidth,N.height=Q.naturalHeight,N.channels=4;else if(Hw(Q))N.element=Q,N.width=Q.videoWidth,N.height=Q.videoHeight,N.channels=4;else if(bv(Q)){var I=N.width||Q[0].length,L=N.height||Q.length,j=N.channels;sn(Q[0][0])?j=j||Q[0][0].length:j=j||1;for(var K=hf.shape(Q),fe=1,ue=0;ue<K.length;++ue)fe*=K[ue];var ce=kv(N,fe);hf.flatten(Q,K,"",ce),Ev(N,ce),N.alignment=1,N.width=I,N.height=L,N.channels=j,N.format=N.internalformat=yf[j],N.needsFree=!0}N.type===Hc?E(O.extensions.indexOf("oes_texture_float")>=0,"oes_texture_float extension not enabled"):N.type===w0&&E(O.extensions.indexOf("oes_texture_half_float")>=0,"oes_texture_half_float extension not enabled")}function ve(N,ne,Q){var Ye=N.element,Kt=N.data,z=N.internalformat,k=N.format,F=N.type,W=N.width,Y=N.height;Nt(N),Ye?x.texImage2D(ne,Q,k,k,F,Ye):N.compressed?x.compressedTexImage2D(ne,Q,z,W,Y,0,Kt):N.needsCopy?(oe(),x.copyTexImage2D(ne,Q,k,N.xOffset,N.yOffset,W,Y,0)):x.texImage2D(ne,Q,k,W,Y,0,k,F,Kt||null)}function Tt(N,ne,Q,Ye,Kt){var z=N.element,k=N.data,F=N.internalformat,W=N.format,Y=N.type,$=N.width,D=N.height;Nt(N),z?x.texSubImage2D(ne,Kt,Q,Ye,W,Y,z):N.compressed?x.compressedTexSubImage2D(ne,Kt,Q,Ye,F,$,D,k):N.needsCopy?(oe(),x.copyTexSubImage2D(ne,Kt,Q,Ye,N.xOffset,N.yOffset,$,D)):x.texSubImage2D(ne,Kt,Q,Ye,$,D,W,Y,k)}var $t=[];function Ze(){return $t.pop()||new $e}function Yt(N){N.needsFree&&V.freeType(N.data),$e.call(N),$t.push(N)}function Pt(){xe.call(this),this.genMipmaps=!1,this.mipmapHint=xf,this.mipmask=0,this.images=Array(16)}function jt(N,ne,Q){var Ye=N.images[0]=Ze();N.mipmask=1,Ye.width=N.width=ne,Ye.height=N.height=Q,Ye.channels=N.channels=4}function uo(N,ne){var Q=null;if(Wu(ne))Q=N.images[0]=Ze(),Pe(Q,N),Le(Q,ne),N.mipmask=1;else if(vt(N,ne),Array.isArray(ne.mipmap))for(var Ye=ne.mipmap,Kt=0;Kt<Ye.length;++Kt)Q=N.images[Kt]=Ze(),Pe(Q,N),Q.width>>=Kt,Q.height>>=Kt,Le(Q,Ye[Kt]),N.mipmask|=1<<Kt;else Q=N.images[0]=Ze(),Pe(Q,N),Le(Q,ne),N.mipmask=1;Pe(N,N.images[0]),N.compressed&&(N.internalformat===Iu||N.internalformat===Fu||N.internalformat===Du||N.internalformat===Gu)&&E(N.width%4===0&&N.height%4===0,"for compressed texture formats, mipmap level 0 must have width and height that are a multiple of 4")}function pn(N,ne){for(var Q=N.images,Ye=0;Ye<Q.length;++Ye){if(!Q[Ye])return;ve(Q[Ye],ne,Ye)}}var Nn=[];function to(){var N=Nn.pop()||new Pt;xe.call(N),N.mipmask=0;for(var ne=0;ne<16;++ne)N.images[ne]=null;return N}function _n(N){for(var ne=N.images,Q=0;Q<ne.length;++Q)ne[Q]&&Yt(ne[Q]),ne[Q]=null;Nn.push(N)}function Do(){this.minFilter=Bu,this.magFilter=Bu,this.wrapS=Hu,this.wrapT=Hu,this.anisotropic=1,this.genMipmaps=!1,this.mipmapHint=xf}function vn(N,ne){if("min"in ne){var Q=ne.min;E.parameter(Q,Ee),N.minFilter=Ee[Q],Fw.indexOf(N.minFilter)>=0&&!("faces"in ne)&&(N.genMipmaps=!0)}if("mag"in ne){var Ye=ne.mag;E.parameter(Ye,Te),N.magFilter=Te[Ye]}var Kt=N.wrapS,z=N.wrapT;if("wrap"in ne){var k=ne.wrap;typeof k=="string"?(E.parameter(k,ke),Kt=z=ke[k]):Array.isArray(k)&&(E.parameter(k[0],ke),E.parameter(k[1],ke),Kt=ke[k[0]],z=ke[k[1]])}else{if("wrapS"in ne){var F=ne.wrapS;E.parameter(F,ke),Kt=ke[F]}if("wrapT"in ne){var W=ne.wrapT;E.parameter(W,ke),z=ke[W]}}if(N.wrapS=Kt,N.wrapT=z,"anisotropic"in ne){var Y=ne.anisotropic;E(typeof Y=="number"&&Y>=1&&Y<=O.maxAnisotropic,"aniso samples must be between 1 and "),N.anisotropic=ne.anisotropic}if("mipmap"in ne){var $=!1;switch(typeof ne.mipmap){case"string":E.parameter(ne.mipmap,we,"invalid mipmap hint"),N.mipmapHint=we[ne.mipmap],N.genMipmaps=!0,$=!0;break;case"boolean":$=N.genMipmaps=ne.mipmap;break;case"object":E(Array.isArray(ne.mipmap),"invalid mipmap type"),N.genMipmaps=!1,$=!0;break;default:E.raise("invalid mipmap type")}$&&!("min"in ne)&&(N.minFilter=Uu)}}function Mn(N,ne){x.texParameteri(ne,Aw,N.minFilter),x.texParameteri(ne,Sw,N.magFilter),x.texParameteri(ne,_w,N.wrapS),x.texParameteri(ne,Mw,N.wrapT),A.ext_texture_filter_anisotropic&&x.texParameteri(ne,Nw,N.anisotropic),N.genMipmaps&&(x.hint(Lw,N.mipmapHint),x.generateMipmap(ne))}var kn=0,Bn={},Jn=O.maxTextureUnits,cn=Array(Jn).map(function(){return null});function qt(N){xe.call(this),this.mipmask=0,this.internalformat=xs,this.id=kn++,this.refCount=1,this.target=N,this.texture=x.createTexture(),this.unit=-1,this.bindCount=0,this.texInfo=new Do,re.profile&&(this.stats={size:0})}function er(N){x.activeTexture(Bc),x.bindTexture(N.target,N.texture)}function yo(){var N=cn[0];N?x.bindTexture(N.target,N.texture):x.bindTexture(Ua,null)}function bt(N){var ne=N.texture;E(ne,"must not double destroy texture");var Q=N.unit,Ye=N.target;Q>=0&&(x.activeTexture(Bc+Q),x.bindTexture(Ye,null),cn[Q]=null),x.deleteTexture(ne),N.texture=null,N.params=null,N.pixels=null,N.refCount=0,delete Bn[N.id],ee.textureCount--}t(qt.prototype,{bind:function(){var N=this;N.bindCount+=1;var ne=N.unit;if(ne<0){for(var Q=0;Q<Jn;++Q){var Ye=cn[Q];if(Ye){if(Ye.bindCount>0)continue;Ye.unit=-1}cn[Q]=N,ne=Q;break}ne>=Jn&&E.raise("insufficient number of texture units"),re.profile&&ee.maxTextureUnits<ne+1&&(ee.maxTextureUnits=ne+1),N.unit=ne,x.activeTexture(Bc+ne),x.bindTexture(N.target,N.texture)}return ne},unbind:function(){this.bindCount-=1},decRef:function(){--this.refCount<=0&&bt(this)}});function eo(N,ne){var Q=new qt(Ua);Bn[Q.id]=Q,ee.textureCount++;function Ye(k,F){var W=Q.texInfo;Do.call(W);var Y=to();return typeof k=="number"?typeof F=="number"?jt(Y,k|0,F|0):jt(Y,k|0,k|0):k?(E.type(k,"object","invalid arguments to regl.texture"),vn(W,k),uo(Y,k)):jt(Y,1,1),W.genMipmaps&&(Y.mipmask=(Y.width<<1)-1),Q.mipmask=Y.mipmask,Pe(Q,Y),E.texture2D(W,Y,O),Q.internalformat=Y.internalformat,Ye.width=Y.width,Ye.height=Y.height,er(Q),pn(Y,Ua),Mn(W,Ua),yo(),_n(Y),re.profile&&(Q.stats.size=bf(Q.internalformat,Q.type,Y.width,Y.height,W.genMipmaps,!1)),Ye.format=Ae[Q.internalformat],Ye.type=Ue[Q.type],Ye.mag=ge[W.magFilter],Ye.min=We[W.minFilter],Ye.wrapS=ye[W.wrapS],Ye.wrapT=ye[W.wrapT],Ye}function Kt(k,F,W,Y){E(!!k,"must specify image data");var $=F|0,D=W|0,U=Y|0,C=Ze();return Pe(C,Q),C.width=0,C.height=0,Le(C,k),C.width=C.width||(Q.width>>U)-$,C.height=C.height||(Q.height>>U)-D,E(Q.type===C.type&&Q.format===C.format&&Q.internalformat===C.internalformat,"incompatible format for texture.subimage"),E($>=0&&D>=0&&$+C.width<=Q.width&&D+C.height<=Q.height,"texture.subimage write out of bounds"),E(Q.mipmask&1<<U,"missing mipmap data"),E(C.data||C.element||C.needsCopy,"missing image data"),er(Q),Tt(C,Ua,$,D,U),yo(),Yt(C),Ye}function z(k,F){var W=k|0,Y=F|0||W;if(W===Q.width&&Y===Q.height)return Ye;Ye.width=Q.width=W,Ye.height=Q.height=Y,er(Q);for(var $=0;Q.mipmask>>$;++$){var D=W>>$,U=Y>>$;if(!D||!U)break;x.texImage2D(Ua,$,Q.format,D,U,0,Q.format,Q.type,null)}return yo(),re.profile&&(Q.stats.size=bf(Q.internalformat,Q.type,W,Y,!1,!1)),Ye}return Ye(N,ne),Ye.subimage=Kt,Ye.resize=z,Ye._reglType="texture2d",Ye._texture=Q,re.profile&&(Ye.stats=Q.stats),Ye.destroy=function(){Q.decRef()},Ye}function io(N,ne,Q,Ye,Kt,z){var k=new qt(zu);Bn[k.id]=k,ee.cubeCount++;var F=new Array(6);function W(D,U,C,I,L,j){var K,fe=k.texInfo;for(Do.call(fe),K=0;K<6;++K)F[K]=to();if(typeof D=="number"||!D){var ue=D|0||1;for(K=0;K<6;++K)jt(F[K],ue,ue)}else if(typeof D=="object")if(U)uo(F[0],D),uo(F[1],U),uo(F[2],C),uo(F[3],I),uo(F[4],L),uo(F[5],j);else if(vn(fe,D),vt(k,D),"faces"in D){var ce=D.faces;for(E(Array.isArray(ce)&&ce.length===6,"cube faces must be a length 6 array"),K=0;K<6;++K)E(typeof ce[K]=="object"&&!!ce[K],"invalid input for cube map face"),Pe(F[K],k),uo(F[K],ce[K])}else for(K=0;K<6;++K)uo(F[K],D);else E.raise("invalid arguments to cube map");for(Pe(k,F[0]),O.npotTextureCube||E(Jp(k.width)&&Jp(k.height),"your browser does not support non power or two texture dimensions"),fe.genMipmaps?k.mipmask=(F[0].width<<1)-1:k.mipmask=F[0].mipmask,E.textureCube(k,fe,F,O),k.internalformat=F[0].internalformat,W.width=F[0].width,W.height=F[0].height,er(k),K=0;K<6;++K)pn(F[K],pf+K);for(Mn(fe,zu),yo(),re.profile&&(k.stats.size=bf(k.internalformat,k.type,W.width,W.height,fe.genMipmaps,!0)),W.format=Ae[k.internalformat],W.type=Ue[k.type],W.mag=ge[fe.magFilter],W.min=We[fe.minFilter],W.wrapS=ye[fe.wrapS],W.wrapT=ye[fe.wrapT],K=0;K<6;++K)_n(F[K]);return W}function Y(D,U,C,I,L){E(!!U,"must specify image data"),E(typeof D=="number"&&D===(D|0)&&D>=0&&D<6,"invalid face");var j=C|0,K=I|0,fe=L|0,ue=Ze();return Pe(ue,k),ue.width=0,ue.height=0,Le(ue,U),ue.width=ue.width||(k.width>>fe)-j,ue.height=ue.height||(k.height>>fe)-K,E(k.type===ue.type&&k.format===ue.format&&k.internalformat===ue.internalformat,"incompatible format for texture.subimage"),E(j>=0&&K>=0&&j+ue.width<=k.width&&K+ue.height<=k.height,"texture.subimage write out of bounds"),E(k.mipmask&1<<fe,"missing mipmap data"),E(ue.data||ue.element||ue.needsCopy,"missing image data"),er(k),Tt(ue,pf+D,j,K,fe),yo(),Yt(ue),W}function $(D){var U=D|0;if(U!==k.width){W.width=k.width=U,W.height=k.height=U,er(k);for(var C=0;C<6;++C)for(var I=0;k.mipmask>>I;++I)x.texImage2D(pf+C,I,k.format,U>>I,U>>I,0,k.format,k.type,null);return yo(),re.profile&&(k.stats.size=bf(k.internalformat,k.type,W.width,W.height,!1,!0)),W}}return W(N,ne,Q,Ye,Kt,z),W.subimage=Y,W.resize=$,W._reglType="textureCube",W._texture=k,re.profile&&(W.stats=k.stats),W.destroy=function(){k.decRef()},W}function ln(){for(var N=0;N<Jn;++N)x.activeTexture(Bc+N),x.bindTexture(Ua,null),cn[N]=null;Yr(Bn).forEach(bt),ee.cubeCount=0,ee.textureCount=0}re.profile&&(ee.getTotalTextureSize=function(){var N=0;return Object.keys(Bn).forEach(function(ne){N+=Bn[ne].stats.size}),N});function Wa(){for(var N=0;N<Jn;++N){var ne=cn[N];ne&&(ne.bindCount=0,ne.unit=-1,cn[N]=null)}Yr(Bn).forEach(function(Q){Q.texture=x.createTexture(),x.bindTexture(Q.target,Q.texture);for(var Ye=0;Ye<32;++Ye)if(Q.mipmask&1<<Ye)if(Q.target===Ua)x.texImage2D(Ua,Ye,Q.internalformat,Q.width>>Ye,Q.height>>Ye,0,Q.internalformat,Q.type,null);else for(var Kt=0;Kt<6;++Kt)x.texImage2D(pf+Kt,Ye,Q.internalformat,Q.width>>Ye,Q.height>>Ye,0,Q.internalformat,Q.type,null);Mn(Q.texInfo,Q.target)})}function Ss(){for(var N=0;N<Jn;++N){var ne=cn[N];ne&&(ne.bindCount=0,ne.unit=-1,cn[N]=null),x.activeTexture(Bc+N),x.bindTexture(Ua,null),x.bindTexture(zu,null)}}return{create2D:eo,createCube:io,clear:ln,getTexture:function(N){return null},restore:Wa,refresh:Ss}}var zi=36161,wf=32854,Sv=32855,Av=36194,Tv=33189,Lv=36168,zv=34041,Cv=35907,Nv=34836,Rv=34842,Ov=34843,Sa=[];Sa[wf]=2,Sa[Sv]=2,Sa[Av]=2,Sa[Tv]=2,Sa[Lv]=1,Sa[zv]=4,Sa[Cv]=4,Sa[Nv]=16,Sa[Rv]=8,Sa[Ov]=6;function Pv(x,A,O){return Sa[x]*A*O}var Ww=function(x,A,O,oe,he){var ee={rgba4:wf,rgb565:Av,"rgb5 a1":Sv,depth:Tv,stencil:Lv,"depth stencil":zv};A.ext_srgb&&(ee.srgba=Cv),A.ext_color_buffer_half_float&&(ee.rgba16f=Rv,ee.rgb16f=Ov),A.webgl_color_buffer_float&&(ee.rgba32f=Nv);var re=[];Object.keys(ee).forEach(function(_e){var Ne=ee[_e];re[Ne]=_e});var we=0,ke={};function Te(_e){this.id=we++,this.refCount=1,this.renderbuffer=_e,this.format=wf,this.width=0,this.height=0,he.profile&&(this.stats={size:0})}Te.prototype.decRef=function(){--this.refCount<=0&&Ee(this)};function Ee(_e){var Ne=_e.renderbuffer;E(Ne,"must not double destroy renderbuffer"),x.bindRenderbuffer(zi,null),x.deleteRenderbuffer(Ne),_e.renderbuffer=null,_e.refCount=0,delete ke[_e.id],oe.renderbufferCount--}function ze(_e,Ne){var X=new Te(x.createRenderbuffer());ke[X.id]=X,oe.renderbufferCount++;function ae(Ue,ge){var We=0,ye=0,Oe=wf;if(typeof Ue=="object"&&Ue){var xe=Ue;if("shape"in xe){var Pe=xe.shape;E(Array.isArray(Pe)&&Pe.length>=2,"invalid renderbuffer shape"),We=Pe[0]|0,ye=Pe[1]|0}else"radius"in xe&&(We=ye=xe.radius|0),"width"in xe&&(We=xe.width|0),"height"in xe&&(ye=xe.height|0);"format"in xe&&(E.parameter(xe.format,ee,"invalid renderbuffer format"),Oe=ee[xe.format])}else typeof Ue=="number"?(We=Ue|0,typeof ge=="number"?ye=ge|0:ye=We):Ue?E.raise("invalid arguments to renderbuffer constructor"):We=ye=1;if(E(We>0&&ye>0&&We<=O.maxRenderbufferSize&&ye<=O.maxRenderbufferSize,"invalid renderbuffer size"),!(We===X.width&&ye===X.height&&Oe===X.format))return ae.width=X.width=We,ae.height=X.height=ye,X.format=Oe,x.bindRenderbuffer(zi,X.renderbuffer),x.renderbufferStorage(zi,Oe,We,ye),E(x.getError()===0,"invalid render buffer format"),he.profile&&(X.stats.size=Pv(X.format,X.width,X.height)),ae.format=re[X.format],ae}function Ae(Ue,ge){var We=Ue|0,ye=ge|0||We;return We===X.width&&ye===X.height||(E(We>0&&ye>0&&We<=O.maxRenderbufferSize&&ye<=O.maxRenderbufferSize,"invalid renderbuffer size"),ae.width=X.width=We,ae.height=X.height=ye,x.bindRenderbuffer(zi,X.renderbuffer),x.renderbufferStorage(zi,X.format,We,ye),E(x.getError()===0,"invalid render buffer format"),he.profile&&(X.stats.size=Pv(X.format,X.width,X.height))),ae}return ae(_e,Ne),ae.resize=Ae,ae._reglType="renderbuffer",ae._renderbuffer=X,he.profile&&(ae.stats=X.stats),ae.destroy=function(){X.decRef()},ae}he.profile&&(oe.getTotalRenderbufferSize=function(){var _e=0;return Object.keys(ke).forEach(function(Ne){_e+=ke[Ne].stats.size}),_e});function Ge(){Yr(ke).forEach(function(_e){_e.renderbuffer=x.createRenderbuffer(),x.bindRenderbuffer(zi,_e.renderbuffer),x.renderbufferStorage(zi,_e.format,_e.width,_e.height)}),x.bindRenderbuffer(zi,null)}return{create:ze,clear:function(){Yr(ke).forEach(Ee)},restore:Ge}},ii=36160,Vu=36161,bs=3553,_f=34069,Iv=36064,Fv=36096,Dv=36128,Gv=33306,$v=36053,Vw=36054,Xw=36055,Yw=36057,Kw=36061,Qw=36193,Zw=5121,Jw=5126,qv=6407,Hv=6408,e4=6402,t4=[qv,Hv],Xu=[];Xu[Hv]=4,Xu[qv]=3;var Mf=[];Mf[Zw]=1,Mf[Jw]=4,Mf[Qw]=2;var o4=32854,n4=32855,r4=36194,a4=33189,i4=36168,Bv=34041,s4=35907,c4=34836,l4=34842,f4=34843,h4=[o4,n4,r4,s4,l4,f4,c4],E0={};E0[$v]="complete",E0[Vw]="incomplete attachment",E0[Yw]="incomplete dimensions",E0[Xw]="incomplete, missing attachment",E0[Kw]="unsupported";function u4(x,A,O,oe,he,ee){var re={cur:null,next:null,dirty:!1,setFBO:null},we=["rgba"],ke=["rgba4","rgb565","rgb5 a1"];A.ext_srgb&&ke.push("srgba"),A.ext_color_buffer_half_float&&ke.push("rgba16f","rgb16f"),A.webgl_color_buffer_float&&ke.push("rgba32f");var Te=["uint8"];A.oes_texture_half_float&&Te.push("half float","float16"),A.oes_texture_float&&Te.push("float","float32");function Ee($e,Le,ve){this.target=$e,this.texture=Le,this.renderbuffer=ve;var Tt=0,$t=0;Le?(Tt=Le.width,$t=Le.height):ve&&(Tt=ve.width,$t=ve.height),this.width=Tt,this.height=$t}function ze($e){$e&&($e.texture&&$e.texture._texture.decRef(),$e.renderbuffer&&$e.renderbuffer._renderbuffer.decRef())}function Ge($e,Le,ve){if($e)if($e.texture){var Tt=$e.texture._texture,$t=Math.max(1,Tt.width),Ze=Math.max(1,Tt.height);E($t===Le&&Ze===ve,"inconsistent width/height for supplied texture"),Tt.refCount+=1}else{var Yt=$e.renderbuffer._renderbuffer;E(Yt.width===Le&&Yt.height===ve,"inconsistent width/height for renderbuffer"),Yt.refCount+=1}}function _e($e,Le){Le&&(Le.texture?x.framebufferTexture2D(ii,$e,Le.target,Le.texture._texture.texture,0):x.framebufferRenderbuffer(ii,$e,Vu,Le.renderbuffer._renderbuffer.renderbuffer))}function Ne($e){var Le=bs,ve=null,Tt=null,$t=$e;typeof $e=="object"&&($t=$e.data,"target"in $e&&(Le=$e.target|0)),E.type($t,"function","invalid attachment data");var Ze=$t._reglType;return Ze==="texture2d"?(ve=$t,E(Le===bs)):Ze==="textureCube"?(ve=$t,E(Le>=_f&&Le<_f+6,"invalid cube map target")):Ze==="renderbuffer"?(Tt=$t,Le=Vu):E.raise("invalid regl object for attachment"),new Ee(Le,ve,Tt)}function X($e,Le,ve,Tt,$t){if(ve){var Ze=oe.create2D({width:$e,height:Le,format:Tt,type:$t});return Ze._texture.refCount=0,new Ee(bs,Ze,null)}else{var Yt=he.create({width:$e,height:Le,format:Tt});return Yt._renderbuffer.refCount=0,new Ee(Vu,null,Yt)}}function ae($e){return $e&&($e.texture||$e.renderbuffer)}function Ae($e,Le,ve){$e&&($e.texture?$e.texture.resize(Le,ve):$e.renderbuffer&&$e.renderbuffer.resize(Le,ve),$e.width=Le,$e.height=ve)}var Ue=0,ge={};function We(){this.id=Ue++,ge[this.id]=this,this.framebuffer=x.createFramebuffer(),this.width=0,this.height=0,this.colorAttachments=[],this.depthAttachment=null,this.stencilAttachment=null,this.depthStencilAttachment=null}function ye($e){$e.colorAttachments.forEach(ze),ze($e.depthAttachment),ze($e.stencilAttachment),ze($e.depthStencilAttachment)}function Oe($e){var Le=$e.framebuffer;E(Le,"must not double destroy framebuffer"),x.deleteFramebuffer(Le),$e.framebuffer=null,ee.framebufferCount--,delete ge[$e.id]}function xe($e){var Le;x.bindFramebuffer(ii,$e.framebuffer);var ve=$e.colorAttachments;for(Le=0;Le<ve.length;++Le)_e(Iv+Le,ve[Le]);for(Le=ve.length;Le<O.maxColorAttachments;++Le)x.framebufferTexture2D(ii,Iv+Le,bs,null,0);x.framebufferTexture2D(ii,Gv,bs,null,0),x.framebufferTexture2D(ii,Fv,bs,null,0),x.framebufferTexture2D(ii,Dv,bs,null,0),_e(Fv,$e.depthAttachment),_e(Dv,$e.stencilAttachment),_e(Gv,$e.depthStencilAttachment);var Tt=x.checkFramebufferStatus(ii);!x.isContextLost()&&Tt!==$v&&E.raise("framebuffer configuration not supported, status = "+E0[Tt]),x.bindFramebuffer(ii,re.next?re.next.framebuffer:null),re.cur=re.next,x.getError()}function Pe($e,Le){var ve=new We;ee.framebufferCount++;function Tt(Ze,Yt){var Pt;E(re.next!==ve,"can not update framebuffer which is currently in use");var jt=0,uo=0,pn=!0,Nn=!0,to=null,_n=!0,Do="rgba",vn="uint8",Mn=1,kn=null,Bn=null,Jn=null,cn=!1;if(typeof Ze=="number")jt=Ze|0,uo=Yt|0||jt;else if(!Ze)jt=uo=1;else{E.type(Ze,"object","invalid arguments for framebuffer");var qt=Ze;if("shape"in qt){var er=qt.shape;E(Array.isArray(er)&&er.length>=2,"invalid shape for framebuffer"),jt=er[0],uo=er[1]}else"radius"in qt&&(jt=uo=qt.radius),"width"in qt&&(jt=qt.width),"height"in qt&&(uo=qt.height);("color"in qt||"colors"in qt)&&(to=qt.color||qt.colors,Array.isArray(to)&&E(to.length===1||A.webgl_draw_buffers,"multiple render targets not supported")),to||("colorCount"in qt&&(Mn=qt.colorCount|0,E(Mn>0,"invalid color buffer count")),"colorTexture"in qt&&(_n=!!qt.colorTexture,Do="rgba4"),"colorType"in qt&&(vn=qt.colorType,_n?(E(A.oes_texture_float||!(vn==="float"||vn==="float32"),"you must enable OES_texture_float in order to use floating point framebuffer objects"),E(A.oes_texture_half_float||!(vn==="half float"||vn==="float16"),"you must enable OES_texture_half_float in order to use 16-bit floating point framebuffer objects")):vn==="half float"||vn==="float16"?(E(A.ext_color_buffer_half_float,"you must enable EXT_color_buffer_half_float to use 16-bit render buffers"),Do="rgba16f"):(vn==="float"||vn==="float32")&&(E(A.webgl_color_buffer_float,"you must enable WEBGL_color_buffer_float in order to use 32-bit floating point renderbuffers"),Do="rgba32f"),E.oneOf(vn,Te,"invalid color type")),"colorFormat"in qt&&(Do=qt.colorFormat,we.indexOf(Do)>=0?_n=!0:ke.indexOf(Do)>=0?_n=!1:_n?E.oneOf(qt.colorFormat,we,"invalid color format for texture"):E.oneOf(qt.colorFormat,ke,"invalid color format for renderbuffer"))),("depthTexture"in qt||"depthStencilTexture"in qt)&&(cn=!!(qt.depthTexture||qt.depthStencilTexture),E(!cn||A.webgl_depth_texture,"webgl_depth_texture extension not supported")),"depth"in qt&&(typeof qt.depth=="boolean"?pn=qt.depth:(kn=qt.depth,Nn=!1)),"stencil"in qt&&(typeof qt.stencil=="boolean"?Nn=qt.stencil:(Bn=qt.stencil,pn=!1)),"depthStencil"in qt&&(typeof qt.depthStencil=="boolean"?pn=Nn=qt.depthStencil:(Jn=qt.depthStencil,pn=!1,Nn=!1))}var yo=null,bt=null,eo=null,io=null;if(Array.isArray(to))yo=to.map(Ne);else if(to)yo=[Ne(to)];else for(yo=new Array(Mn),Pt=0;Pt<Mn;++Pt)yo[Pt]=X(jt,uo,_n,Do,vn);E(A.webgl_draw_buffers||yo.length<=1,"you must enable the WEBGL_draw_buffers extension in order to use multiple color buffers."),E(yo.length<=O.maxColorAttachments,"too many color attachments, not supported"),jt=jt||yo[0].width,uo=uo||yo[0].height,kn?bt=Ne(kn):pn&&!Nn&&(bt=X(jt,uo,cn,"depth","uint32")),Bn?eo=Ne(Bn):Nn&&!pn&&(eo=X(jt,uo,!1,"stencil","uint8")),Jn?io=Ne(Jn):!kn&&!Bn&&Nn&&pn&&(io=X(jt,uo,cn,"depth stencil","depth stencil")),E(!!kn+!!Bn+!!Jn<=1,"invalid framebuffer configuration, can specify exactly one depth/stencil attachment");var ln=null;for(Pt=0;Pt<yo.length;++Pt)if(Ge(yo[Pt],jt,uo),E(!yo[Pt]||yo[Pt].texture&&t4.indexOf(yo[Pt].texture._texture.format)>=0||yo[Pt].renderbuffer&&h4.indexOf(yo[Pt].renderbuffer._renderbuffer.format)>=0,"framebuffer color attachment "+Pt+" is invalid"),yo[Pt]&&yo[Pt].texture){var Wa=Xu[yo[Pt].texture._texture.format]*Mf[yo[Pt].texture._texture.type];ln===null?ln=Wa:E(ln===Wa,"all color attachments much have the same number of bits per pixel.")}return Ge(bt,jt,uo),E(!bt||bt.texture&&bt.texture._texture.format===e4||bt.renderbuffer&&bt.renderbuffer._renderbuffer.format===a4,"invalid depth attachment for framebuffer object"),Ge(eo,jt,uo),E(!eo||eo.renderbuffer&&eo.renderbuffer._renderbuffer.format===i4,"invalid stencil attachment for framebuffer object"),Ge(io,jt,uo),E(!io||io.texture&&io.texture._texture.format===Bv||io.renderbuffer&&io.renderbuffer._renderbuffer.format===Bv,"invalid depth-stencil attachment for framebuffer object"),ye(ve),ve.width=jt,ve.height=uo,ve.colorAttachments=yo,ve.depthAttachment=bt,ve.stencilAttachment=eo,ve.depthStencilAttachment=io,Tt.color=yo.map(ae),Tt.depth=ae(bt),Tt.stencil=ae(eo),Tt.depthStencil=ae(io),Tt.width=ve.width,Tt.height=ve.height,xe(ve),Tt}function $t(Ze,Yt){E(re.next!==ve,"can not resize a framebuffer which is currently in use");var Pt=Math.max(Ze|0,1),jt=Math.max(Yt|0||Pt,1);if(Pt===ve.width&&jt===ve.height)return Tt;for(var uo=ve.colorAttachments,pn=0;pn<uo.length;++pn)Ae(uo[pn],Pt,jt);return Ae(ve.depthAttachment,Pt,jt),Ae(ve.stencilAttachment,Pt,jt),Ae(ve.depthStencilAttachment,Pt,jt),ve.width=Tt.width=Pt,ve.height=Tt.height=jt,xe(ve),Tt}return Tt($e,Le),t(Tt,{resize:$t,_reglType:"framebuffer",_framebuffer:ve,destroy:function(){Oe(ve),ye(ve)},use:function(Ze){re.setFBO({framebuffer:Tt},Ze)}})}function vt($e){var Le=Array(6);function ve($t){var Ze;E(Le.indexOf(re.next)<0,"can not update framebuffer which is currently in use");var Yt={color:null},Pt=0,jt=null,uo="rgba",pn="uint8",Nn=1;if(typeof $t=="number")Pt=$t|0;else if(!$t)Pt=1;else{E.type($t,"object","invalid arguments for framebuffer");var to=$t;if("shape"in to){var _n=to.shape;E(Array.isArray(_n)&&_n.length>=2,"invalid shape for framebuffer"),E(_n[0]===_n[1],"cube framebuffer must be square"),Pt=_n[0]}else"radius"in to&&(Pt=to.radius|0),"width"in to?(Pt=to.width|0,"height"in to&&E(to.height===Pt,"must be square")):"height"in to&&(Pt=to.height|0);("color"in to||"colors"in to)&&(jt=to.color||to.colors,Array.isArray(jt)&&E(jt.length===1||A.webgl_draw_buffers,"multiple render targets not supported")),jt||("colorCount"in to&&(Nn=to.colorCount|0,E(Nn>0,"invalid color buffer count")),"colorType"in to&&(E.oneOf(to.colorType,Te,"invalid color type"),pn=to.colorType),"colorFormat"in to&&(uo=to.colorFormat,E.oneOf(to.colorFormat,we,"invalid color format for texture"))),"depth"in to&&(Yt.depth=to.depth),"stencil"in to&&(Yt.stencil=to.stencil),"depthStencil"in to&&(Yt.depthStencil=to.depthStencil)}var Do;if(jt)if(Array.isArray(jt))for(Do=[],Ze=0;Ze<jt.length;++Ze)Do[Ze]=jt[Ze];else Do=[jt];else{Do=Array(Nn);var vn={radius:Pt,format:uo,type:pn};for(Ze=0;Ze<Nn;++Ze)Do[Ze]=oe.createCube(vn)}for(Yt.color=Array(Do.length),Ze=0;Ze<Do.length;++Ze){var Mn=Do[Ze];E(typeof Mn=="function"&&Mn._reglType==="textureCube","invalid cube map"),Pt=Pt||Mn.width,E(Mn.width===Pt&&Mn.height===Pt,"invalid cube map shape"),Yt.color[Ze]={target:_f,data:Do[Ze]}}for(Ze=0;Ze<6;++Ze){for(var kn=0;kn<Do.length;++kn)Yt.color[kn].target=_f+Ze;Ze>0&&(Yt.depth=Le[0].depth,Yt.stencil=Le[0].stencil,Yt.depthStencil=Le[0].depthStencil),Le[Ze]?Le[Ze](Yt):Le[Ze]=Pe(Yt)}return t(ve,{width:Pt,height:Pt,color:Do})}function Tt($t){var Ze,Yt=$t|0;if(E(Yt>0&&Yt<=O.maxCubeMapSize,"invalid radius for cube fbo"),Yt===ve.width)return ve;var Pt=ve.color;for(Ze=0;Ze<Pt.length;++Ze)Pt[Ze].resize(Yt);for(Ze=0;Ze<6;++Ze)Le[Ze].resize(Yt);return ve.width=ve.height=Yt,ve}return ve($e),t(ve,{faces:Le,resize:Tt,_reglType:"framebufferCube",destroy:function(){Le.forEach(function($t){$t.destroy()})}})}function Nt(){re.cur=null,re.next=null,re.dirty=!0,Yr(ge).forEach(function($e){$e.framebuffer=x.createFramebuffer(),xe($e)})}return t(re,{getFramebuffer:function($e){if(typeof $e=="function"&&$e._reglType==="framebuffer"){var Le=$e._framebuffer;if(Le instanceof We)return Le}return null},create:Pe,createCube:vt,clear:function(){Yr(ge).forEach(Oe)},restore:Nt})}var d4=5126,Uv=34962;function Yu(){this.state=0,this.x=0,this.y=0,this.z=0,this.w=0,this.buffer=null,this.size=0,this.normalized=!1,this.type=d4,this.offset=0,this.stride=0,this.divisor=0}function p4(x,A,O,oe,he){for(var ee=O.maxAttributes,re=new Array(ee),we=0;we<ee;++we)re[we]=new Yu;var ke=0,Te={},Ee={Record:Yu,scope:{},state:re,currentVAO:null,targetVAO:null,restore:Ge()?ge:function(){},createVAO:We,getVAO:Ne,destroyBuffer:ze,setVAO:Ge()?X:ae,clear:Ge()?Ae:function(){}};function ze(ye){for(var Oe=0;Oe<re.length;++Oe){var xe=re[Oe];xe.buffer===ye&&(x.disableVertexAttribArray(Oe),xe.buffer=null)}}function Ge(){return A.oes_vertex_array_object}function _e(){return A.angle_instanced_arrays}function Ne(ye){return typeof ye=="function"&&ye._vao?ye._vao:null}function X(ye){if(ye!==Ee.currentVAO){var Oe=Ge();ye?Oe.bindVertexArrayOES(ye.vao):Oe.bindVertexArrayOES(null),Ee.currentVAO=ye}}function ae(ye){if(ye!==Ee.currentVAO){if(ye)ye.bindAttrs();else for(var Oe=_e(),xe=0;xe<re.length;++xe){var Pe=re[xe];Pe.buffer?(x.enableVertexAttribArray(xe),x.vertexAttribPointer(xe,Pe.size,Pe.type,Pe.normalized,Pe.stride,Pe.offfset),Oe&&Pe.divisor&&Oe.vertexAttribDivisorANGLE(xe,Pe.divisor)):(x.disableVertexAttribArray(xe),x.vertexAttrib4f(xe,Pe.x,Pe.y,Pe.z,Pe.w))}Ee.currentVAO=ye}}function Ae(){Yr(Te).forEach(function(ye){ye.destroy()})}function Ue(){this.id=++ke,this.attributes=[];var ye=Ge();ye?this.vao=ye.createVertexArrayOES():this.vao=null,Te[this.id]=this,this.buffers=[]}Ue.prototype.bindAttrs=function(){for(var ye=_e(),Oe=this.attributes,xe=0;xe<Oe.length;++xe){var Pe=Oe[xe];Pe.buffer?(x.enableVertexAttribArray(xe),x.bindBuffer(Uv,Pe.buffer.buffer),x.vertexAttribPointer(xe,Pe.size,Pe.type,Pe.normalized,Pe.stride,Pe.offset),ye&&Pe.divisor&&ye.vertexAttribDivisorANGLE(xe,Pe.divisor)):(x.disableVertexAttribArray(xe),x.vertexAttrib4f(xe,Pe.x,Pe.y,Pe.z,Pe.w))}for(var vt=Oe.length;vt<ee;++vt)x.disableVertexAttribArray(vt)},Ue.prototype.refresh=function(){var ye=Ge();ye&&(ye.bindVertexArrayOES(this.vao),this.bindAttrs(),Ee.currentVAO=this)},Ue.prototype.destroy=function(){if(this.vao){var ye=Ge();this===Ee.currentVAO&&(Ee.currentVAO=null,ye.bindVertexArrayOES(null)),ye.deleteVertexArrayOES(this.vao),this.vao=null}Te[this.id]&&(delete Te[this.id],oe.vaoCount-=1)};function ge(){var ye=Ge();ye&&Yr(Te).forEach(function(Oe){Oe.refresh()})}function We(ye){var Oe=new Ue;oe.vaoCount+=1;function xe(Pe){E(Array.isArray(Pe),"arguments to vertex array constructor must be an array"),E(Pe.length<ee,"too many attributes"),E(Pe.length>0,"must specify at least one attribute");var vt={},Nt=Oe.attributes;Nt.length=Pe.length;for(var $e=0;$e<Pe.length;++$e){var Le=Pe[$e],ve=Nt[$e]=new Yu,Tt=Le.data||Le;if(Array.isArray(Tt)||e(Tt)||Ea(Tt)){var $t;Oe.buffers[$e]&&($t=Oe.buffers[$e],e(Tt)&&$t._buffer.byteLength>=Tt.byteLength?$t.subdata(Tt):($t.destroy(),Oe.buffers[$e]=null)),Oe.buffers[$e]||($t=Oe.buffers[$e]=he.create(Le,Uv,!1,!0)),ve.buffer=he.getBuffer($t),ve.size=ve.buffer.dimension|0,ve.normalized=!1,ve.type=ve.buffer.dtype,ve.offset=0,ve.stride=0,ve.divisor=0,ve.state=1,vt[$e]=1}else he.getBuffer(Le)?(ve.buffer=he.getBuffer(Le),ve.size=ve.buffer.dimension|0,ve.normalized=!1,ve.type=ve.buffer.dtype,ve.offset=0,ve.stride=0,ve.divisor=0,ve.state=1):he.getBuffer(Le.buffer)?(ve.buffer=he.getBuffer(Le.buffer),ve.size=(+Le.size||ve.buffer.dimension)|0,ve.normalized=!!Le.normalized||!1,"type"in Le?(E.parameter(Le.type,ms,"invalid buffer type"),ve.type=ms[Le.type]):ve.type=ve.buffer.dtype,ve.offset=(Le.offset||0)|0,ve.stride=(Le.stride||0)|0,ve.divisor=(Le.divisor||0)|0,ve.state=1,E(ve.size>=1&&ve.size<=4,"size must be between 1 and 4"),E(ve.offset>=0,"invalid offset"),E(ve.stride>=0&&ve.stride<=255,"stride must be between 0 and 255"),E(ve.divisor>=0,"divisor must be positive"),E(!ve.divisor||!!A.angle_instanced_arrays,"ANGLE_instanced_arrays must be enabled to use divisor")):"x"in Le?(E($e>0,"first attribute must not be a constant"),ve.x=+Le.x||0,ve.y=+Le.y||0,ve.z=+Le.z||0,ve.w=+Le.w||0,ve.state=2):E(!1,"invalid attribute spec for location "+$e)}for(var Ze=0;Ze<Oe.buffers.length;++Ze)!vt[Ze]&&Oe.buffers[Ze]&&(Oe.buffers[Ze].destroy(),Oe.buffers[Ze]=null);return Oe.refresh(),xe}return xe.destroy=function(){for(var Pe=0;Pe<Oe.buffers.length;++Pe)Oe.buffers[Pe]&&Oe.buffers[Pe].destroy();Oe.buffers.length=0,Oe.destroy()},xe._vao=Oe,xe._reglType="vao",xe(ye)}return Ee}var jv=35632,v4=35633,m4=35718,g4=35721;function x4(x,A,O,oe){var he={},ee={};function re(X,ae,Ae,Ue){this.name=X,this.id=ae,this.location=Ae,this.info=Ue}function we(X,ae){for(var Ae=0;Ae<X.length;++Ae)if(X[Ae].id===ae.id){X[Ae].location=ae.location;return}X.push(ae)}function ke(X,ae,Ae){var Ue=X===jv?he:ee,ge=Ue[ae];if(!ge){var We=A.str(ae);ge=x.createShader(X),x.shaderSource(ge,We),x.compileShader(ge),E.shaderError(x,ge,We,X,Ae),Ue[ae]=ge}return ge}var Te={},Ee=[],ze=0;function Ge(X,ae){this.id=ze++,this.fragId=X,this.vertId=ae,this.program=null,this.uniforms=[],this.attributes=[],this.refCount=1,oe.profile&&(this.stats={uniformsCount:0,attributesCount:0})}function _e(X,ae,Ae){var Ue,ge,We=ke(jv,X.fragId),ye=ke(v4,X.vertId),Oe=X.program=x.createProgram();if(x.attachShader(Oe,We),x.attachShader(Oe,ye),Ae)for(Ue=0;Ue<Ae.length;++Ue){var xe=Ae[Ue];x.bindAttribLocation(Oe,xe[0],xe[1])}x.linkProgram(Oe),E.linkError(x,Oe,A.str(X.fragId),A.str(X.vertId),ae);var Pe=x.getProgramParameter(Oe,m4);oe.profile&&(X.stats.uniformsCount=Pe);var vt=X.uniforms;for(Ue=0;Ue<Pe;++Ue)if(ge=x.getActiveUniform(Oe,Ue),ge)if(ge.size>1)for(var Nt=0;Nt<ge.size;++Nt){var $e=ge.name.replace("[0]","["+Nt+"]");we(vt,new re($e,A.id($e),x.getUniformLocation(Oe,$e),ge))}else we(vt,new re(ge.name,A.id(ge.name),x.getUniformLocation(Oe,ge.name),ge));var Le=x.getProgramParameter(Oe,g4);oe.profile&&(X.stats.attributesCount=Le);var ve=X.attributes;for(Ue=0;Ue<Le;++Ue)ge=x.getActiveAttrib(Oe,Ue),ge&&we(ve,new re(ge.name,A.id(ge.name),x.getAttribLocation(Oe,ge.name),ge))}oe.profile&&(O.getMaxUniformsCount=function(){var X=0;return Ee.forEach(function(ae){ae.stats.uniformsCount>X&&(X=ae.stats.uniformsCount)}),X},O.getMaxAttributesCount=function(){var X=0;return Ee.forEach(function(ae){ae.stats.attributesCount>X&&(X=ae.stats.attributesCount)}),X});function Ne(){he={},ee={};for(var X=0;X<Ee.length;++X)_e(Ee[X],null,Ee[X].attributes.map(function(ae){return[ae.location,ae.name]}))}return{clear:function(){var X=x.deleteShader.bind(x);Yr(he).forEach(X),he={},Yr(ee).forEach(X),ee={},Ee.forEach(function(ae){x.deleteProgram(ae.program)}),Ee.length=0,Te={},O.shaderCount=0},program:function(X,ae,Ae,Ue){E.command(X>=0,"missing vertex shader",Ae),E.command(ae>=0,"missing fragment shader",Ae);var ge=Te[ae];ge||(ge=Te[ae]={});var We=ge[X];if(We&&(We.refCount++,!Ue))return We;var ye=new Ge(ae,X);return O.shaderCount++,_e(ye,Ae,Ue),We||(ge[X]=ye),Ee.push(ye),t(ye,{destroy:function(){if(ye.refCount--,ye.refCount<=0){x.deleteProgram(ye.program);var Oe=Ee.indexOf(ye);Ee.splice(Oe,1),O.shaderCount--}ge[ye.vertId].refCount<=0&&(x.deleteShader(ee[ye.vertId]),delete ee[ye.vertId],delete Te[ye.fragId][ye.vertId]),Object.keys(Te[ye.fragId]).length||(x.deleteShader(he[ye.fragId]),delete he[ye.fragId],delete Te[ye.fragId])}})},restore:Ne,shader:ke,frag:-1,vert:-1}}var y4=6408,Uc=5121,b4=3333,kf=5126;function w4(x,A,O,oe,he,ee,re){function we(Ee){var ze;A.next===null?(E(he.preserveDrawingBuffer,'you must create a webgl context with "preserveDrawingBuffer":true in order to read pixels from the drawing buffer'),ze=Uc):(E(A.next.colorAttachments[0].texture!==null,"You cannot read from a renderbuffer"),ze=A.next.colorAttachments[0].texture._texture.type,ee.oes_texture_float?(E(ze===Uc||ze===kf,"Reading from a framebuffer is only allowed for the types 'uint8' and 'float'"),ze===kf&&E(re.readFloat,"Reading 'float' values is not permitted in your browser. For a fallback, please see: https://www.npmjs.com/package/glsl-read-float")):E(ze===Uc,"Reading from a framebuffer is only allowed for the type 'uint8'"));var Ge=0,_e=0,Ne=oe.framebufferWidth,X=oe.framebufferHeight,ae=null;e(Ee)?ae=Ee:Ee&&(E.type(Ee,"object","invalid arguments to regl.read()"),Ge=Ee.x|0,_e=Ee.y|0,E(Ge>=0&&Ge<oe.framebufferWidth,"invalid x offset for regl.read"),E(_e>=0&&_e<oe.framebufferHeight,"invalid y offset for regl.read"),Ne=(Ee.width||oe.framebufferWidth-Ge)|0,X=(Ee.height||oe.framebufferHeight-_e)|0,ae=Ee.data||null),ae&&(ze===Uc?E(ae instanceof Uint8Array,"buffer must be 'Uint8Array' when reading from a framebuffer of type 'uint8'"):ze===kf&&E(ae instanceof Float32Array,"buffer must be 'Float32Array' when reading from a framebuffer of type 'float'")),E(Ne>0&&Ne+Ge<=oe.framebufferWidth,"invalid width for read pixels"),E(X>0&&X+_e<=oe.framebufferHeight,"invalid height for read pixels"),O();var Ae=Ne*X*4;return ae||(ze===Uc?ae=new Uint8Array(Ae):ze===kf&&(ae=ae||new Float32Array(Ae))),E.isTypedArray(ae,"data buffer for regl.read() must be a typedarray"),E(ae.byteLength>=Ae,"data buffer for regl.read() too small"),x.pixelStorei(b4,4),x.readPixels(Ge,_e,Ne,X,y4,ze,ae),ae}function ke(Ee){var ze;return A.setFBO({framebuffer:Ee.framebuffer},function(){ze=we(Ee)}),ze}function Te(Ee){return!Ee||!("framebuffer"in Ee)?we(Ee):ke(Ee)}return Te}function S0(x){return Array.prototype.slice.call(x)}function A0(x){return S0(x).join("")}function _4(){var x=0,A=[],O=[];function oe(ze){for(var Ge=0;Ge<O.length;++Ge)if(O[Ge]===ze)return A[Ge];var _e="g"+x++;return A.push(_e),O.push(ze),_e}function he(){var ze=[];function Ge(){ze.push.apply(ze,S0(arguments))}var _e=[];function Ne(){var X="v"+x++;return _e.push(X),arguments.length>0&&(ze.push(X,"="),ze.push.apply(ze,S0(arguments)),ze.push(";")),X}return t(Ge,{def:Ne,toString:function(){return A0([_e.length>0?"var "+_e.join(",")+";":"",A0(ze)])}})}function ee(){var ze=he(),Ge=he(),_e=ze.toString,Ne=Ge.toString;function X(ae,Ae){Ge(ae,Ae,"=",ze.def(ae,Ae),";")}return t(function(){ze.apply(ze,S0(arguments))},{def:ze.def,entry:ze,exit:Ge,save:X,set:function(ae,Ae,Ue){X(ae,Ae),ze(ae,Ae,"=",Ue,";")},toString:function(){return _e()+Ne()}})}function re(){var ze=A0(arguments),Ge=ee(),_e=ee(),Ne=Ge.toString,X=_e.toString;return t(Ge,{then:function(){return Ge.apply(Ge,S0(arguments)),this},else:function(){return _e.apply(_e,S0(arguments)),this},toString:function(){var ae=X();return ae&&(ae="else{"+ae+"}"),A0(["if(",ze,"){",Ne(),"}",ae])}})}var we=he(),ke={};function Te(ze,Ge){var _e=[];function Ne(){var ge="a"+_e.length;return _e.push(ge),ge}Ge=Ge||0;for(var X=0;X<Ge;++X)Ne();var ae=ee(),Ae=ae.toString,Ue=ke[ze]=t(ae,{arg:Ne,toString:function(){return A0(["function(",_e.join(),"){",Ae(),"}"])}});return Ue}function Ee(){var ze=['"use strict";',we,"return {"];Object.keys(ke).forEach(function(Ne){ze.push('"',Ne,'":',ke[Ne].toString(),",")}),ze.push("}");var Ge=A0(ze).replace(/;/g,`;
`).replace(/}/g,`}
`).replace(/{/g,`{
`),_e=Function.apply(null,A.concat(Ge));return _e.apply(null,O)}return{global:we,link:oe,block:he,proc:Te,scope:ee,cond:re,compile:Ee}}var T0="xyzw".split(""),Wv=5121,L0=1,Ku=2,Qu=0,Zu=1,Ju=2,ed=3,Ef=4,Vv=5,Xv=6,Yv="dither",Kv="blend.enable",Qv="blend.color",td="blend.equation",od="blend.func",Zv="depth.enable",Jv="depth.func",em="depth.range",tm="depth.mask",nd="colorMask",om="cull.enable",nm="cull.face",rd="frontFace",ad="lineWidth",rm="polygonOffset.enable",id="polygonOffset.offset",am="sample.alpha",im="sample.enable",sd="sample.coverage",sm="stencil.enable",cm="stencil.mask",cd="stencil.func",ld="stencil.opFront",jc="stencil.opBack",lm="scissor.enable",Sf="scissor.box",si="viewport",Wc="profile",ws="framebuffer",Vc="vert",Xc="frag",_s="elements",Ms="primitive",ks="count",Af="offset",Tf="instances",Yc="vao",fd="Width",hd="Height",z0=ws+fd,C0=ws+hd,M4=si+fd,k4=si+hd,fm="drawingBuffer",hm=fm+fd,um=fm+hd,E4=[od,td,cd,ld,jc,sd,si,Sf,id],N0=34962,S4=34963,A4=35632,T4=35633,dm=3553,L4=34067,z4=2884,C4=3042,N4=3024,R4=2960,O4=2929,P4=3089,I4=32823,F4=32926,D4=32928,ud=5126,Lf=35664,zf=35665,Cf=35666,dd=5124,Nf=35667,Rf=35668,Of=35669,pd=35670,Pf=35671,If=35672,Ff=35673,Kc=35674,Qc=35675,Zc=35676,Jc=35678,el=35680,pm=4,tl=1028,Es=1029,vm=2304,vd=2305,G4=32775,$4=32776,q4=519,Ci=7680,mm=0,gm=1,xm=32774,H4=513,ym=36160,B4=36064,ja={0:0,1:1,zero:0,one:1,"src color":768,"one minus src color":769,"src alpha":770,"one minus src alpha":771,"dst color":774,"one minus dst color":775,"dst alpha":772,"one minus dst alpha":773,"constant color":32769,"one minus constant color":32770,"constant alpha":32771,"one minus constant alpha":32772,"src alpha saturate":776},bm=["constant color, constant alpha","one minus constant color, constant alpha","constant color, one minus constant alpha","one minus constant color, one minus constant alpha","constant alpha, constant color","constant alpha, one minus constant color","one minus constant alpha, constant color","one minus constant alpha, one minus constant color"],R0={never:512,less:513,"<":513,equal:514,"=":514,"==":514,"===":514,lequal:515,"<=":515,greater:516,">":516,notequal:517,"!=":517,"!==":517,gequal:518,">=":518,always:519},Ni={0:0,zero:0,keep:7680,replace:7681,increment:7682,decrement:7683,"increment wrap":34055,"decrement wrap":34056,invert:5386},wm={frag:A4,vert:T4},md={cw:vm,ccw:vd};function Df(x){return Array.isArray(x)||e(x)||Ea(x)}function _m(x){return x.sort(function(A,O){return A===si?-1:O===si?1:A<O?-1:1})}function Er(x,A,O,oe){this.thisDep=x,this.contextDep=A,this.propDep=O,this.append=oe}function Ri(x){return x&&!(x.thisDep||x.contextDep||x.propDep)}function dn(x){return new Er(!1,!1,!1,x)}function $r(x,A){var O=x.type;if(O===Qu){var oe=x.data.length;return new Er(!0,oe>=1,oe>=2,A)}else if(O===Ef){var he=x.data;return new Er(he.thisDep,he.contextDep,he.propDep,A)}else{if(O===Vv)return new Er(!1,!1,!1,A);if(O===Xv){for(var ee=!1,re=!1,we=!1,ke=0;ke<x.data.length;++ke){var Te=x.data[ke];if(Te.type===Zu)we=!0;else if(Te.type===Ju)re=!0;else if(Te.type===ed)ee=!0;else if(Te.type===Qu){ee=!0;var Ee=Te.data;Ee>=1&&(re=!0),Ee>=2&&(we=!0)}else Te.type===Ef&&(ee=ee||Te.data.thisDep,re=re||Te.data.contextDep,we=we||Te.data.propDep)}return new Er(ee,re,we,A)}else return new Er(O===ed,O===Ju,O===Zu,A)}}var Mm=new Er(!1,!1,!1,function(){});function U4(x,A,O,oe,he,ee,re,we,ke,Te,Ee,ze,Ge,_e,Ne){var X=Te.Record,ae={add:32774,subtract:32778,"reverse subtract":32779};O.ext_blend_minmax&&(ae.min=G4,ae.max=$4);var Ae=O.angle_instanced_arrays,Ue=O.webgl_draw_buffers,ge={dirty:!0,profile:Ne.profile},We={},ye=[],Oe={},xe={};function Pe(z){return z.replace(".","_")}function vt(z,k,F){var W=Pe(z);ye.push(z),We[W]=ge[W]=!!F,Oe[W]=k}function Nt(z,k,F){var W=Pe(z);ye.push(z),Array.isArray(F)?(ge[W]=F.slice(),We[W]=F.slice()):ge[W]=We[W]=F,xe[W]=k}vt(Yv,N4),vt(Kv,C4),Nt(Qv,"blendColor",[0,0,0,0]),Nt(td,"blendEquationSeparate",[xm,xm]),Nt(od,"blendFuncSeparate",[gm,mm,gm,mm]),vt(Zv,O4,!0),Nt(Jv,"depthFunc",H4),Nt(em,"depthRange",[0,1]),Nt(tm,"depthMask",!0),Nt(nd,nd,[!0,!0,!0,!0]),vt(om,z4),Nt(nm,"cullFace",Es),Nt(rd,rd,vd),Nt(ad,ad,1),vt(rm,I4),Nt(id,"polygonOffset",[0,0]),vt(am,F4),vt(im,D4),Nt(sd,"sampleCoverage",[1,!1]),vt(sm,R4),Nt(cm,"stencilMask",-1),Nt(cd,"stencilFunc",[q4,0,-1]),Nt(ld,"stencilOpSeparate",[tl,Ci,Ci,Ci]),Nt(jc,"stencilOpSeparate",[Es,Ci,Ci,Ci]),vt(lm,P4),Nt(Sf,"scissor",[0,0,x.drawingBufferWidth,x.drawingBufferHeight]),Nt(si,si,[0,0,x.drawingBufferWidth,x.drawingBufferHeight]);var $e={gl:x,context:Ge,strings:A,next:We,current:ge,draw:ze,elements:ee,buffer:he,shader:Ee,attributes:Te.state,vao:Te,uniforms:ke,framebuffer:we,extensions:O,timer:_e,isBufferArgs:Df},Le={primTypes:x0,compareFuncs:R0,blendFuncs:ja,blendEquations:ae,stencilOps:Ni,glTypes:ms,orientationType:md};E.optional(function(){$e.isArrayLike=sn}),Ue&&(Le.backBuffer=[Es],Le.drawBuffer=Wt(oe.maxDrawbuffers,function(z){return z===0?[0]:Wt(z,function(k){return B4+k})}));var ve=0;function Tt(){var z=_4(),k=z.link,F=z.global;z.id=ve++,z.batchId="0";var W=k($e),Y=z.shared={props:"a0"};Object.keys($e).forEach(function(I){Y[I]=F.def(W,".",I)}),E.optional(function(){z.CHECK=k(E),z.commandStr=E.guessCommand(),z.command=k(z.commandStr),z.assert=function(I,L,j){I("if(!(",L,"))",this.CHECK,".commandRaise(",k(j),",",this.command,");")},Le.invalidBlendCombinations=bm});var $=z.next={},D=z.current={};Object.keys(xe).forEach(function(I){Array.isArray(ge[I])&&($[I]=F.def(Y.next,".",I),D[I]=F.def(Y.current,".",I))});var U=z.constants={};Object.keys(Le).forEach(function(I){U[I]=F.def(JSON.stringify(Le[I]))}),z.invoke=function(I,L){switch(L.type){case Qu:var j=["this",Y.context,Y.props,z.batchId];return I.def(k(L.data),".call(",j.slice(0,Math.max(L.data.length+1,4)),")");case Zu:return I.def(Y.props,L.data);case Ju:return I.def(Y.context,L.data);case ed:return I.def("this",L.data);case Ef:return L.data.append(z,I),L.data.ref;case Vv:return L.data.toString();case Xv:return L.data.map(function(K){return z.invoke(I,K)})}},z.attribCache={};var C={};return z.scopeAttrib=function(I){var L=A.id(I);if(L in C)return C[L];var j=Te.scope[L];j||(j=Te.scope[L]=new X);var K=C[L]=k(j);return K},z}function $t(z){var k=z.static,F=z.dynamic,W;if(Wc in k){var Y=!!k[Wc];W=dn(function(D,U){return Y}),W.enable=Y}else if(Wc in F){var $=F[Wc];W=$r($,function(D,U){return D.invoke(U,$)})}return W}function Ze(z,k){var F=z.static,W=z.dynamic;if(ws in F){var Y=F[ws];return Y?(Y=we.getFramebuffer(Y),E.command(Y,"invalid framebuffer object"),dn(function(D,U){var C=D.link(Y),I=D.shared;U.set(I.framebuffer,".next",C);var L=I.context;return U.set(L,"."+z0,C+".width"),U.set(L,"."+C0,C+".height"),C})):dn(function(D,U){var C=D.shared;U.set(C.framebuffer,".next","null");var I=C.context;return U.set(I,"."+z0,I+"."+hm),U.set(I,"."+C0,I+"."+um),"null"})}else if(ws in W){var $=W[ws];return $r($,function(D,U){var C=D.invoke(U,$),I=D.shared,L=I.framebuffer,j=U.def(L,".getFramebuffer(",C,")");E.optional(function(){D.assert(U,"!"+C+"||"+j,"invalid framebuffer object")}),U.set(L,".next",j);var K=I.context;return U.set(K,"."+z0,j+"?"+j+".width:"+K+"."+hm),U.set(K,"."+C0,j+"?"+j+".height:"+K+"."+um),j})}else return null}function Yt(z,k,F){var W=z.static,Y=z.dynamic;function $(C){if(C in W){var I=W[C];E.commandType(I,"object","invalid "+C,F.commandStr);var L=!0,j=I.x|0,K=I.y|0,fe,ue;return"width"in I?(fe=I.width|0,E.command(fe>=0,"invalid "+C,F.commandStr)):L=!1,"height"in I?(ue=I.height|0,E.command(ue>=0,"invalid "+C,F.commandStr)):L=!1,new Er(!L&&k&&k.thisDep,!L&&k&&k.contextDep,!L&&k&&k.propDep,function(lt,Ht){var Je=lt.shared.context,Mt=fe;"width"in I||(Mt=Ht.def(Je,".",z0,"-",j));var It=ue;return"height"in I||(It=Ht.def(Je,".",C0,"-",K)),[j,K,Mt,It]})}else if(C in Y){var ce=Y[C],Se=$r(ce,function(lt,Ht){var Je=lt.invoke(Ht,ce);E.optional(function(){lt.assert(Ht,Je+"&&typeof "+Je+'==="object"',"invalid "+C)});var Mt=lt.shared.context,It=Ht.def(Je,".x|0"),po=Ht.def(Je,".y|0"),en=Ht.def('"width" in ',Je,"?",Je,".width|0:","(",Mt,".",z0,"-",It,")"),Sr=Ht.def('"height" in ',Je,"?",Je,".height|0:","(",Mt,".",C0,"-",po,")");return E.optional(function(){lt.assert(Ht,en+">=0&&"+Sr+">=0","invalid "+C)}),[It,po,en,Sr]});return k&&(Se.thisDep=Se.thisDep||k.thisDep,Se.contextDep=Se.contextDep||k.contextDep,Se.propDep=Se.propDep||k.propDep),Se}else return k?new Er(k.thisDep,k.contextDep,k.propDep,function(lt,Ht){var Je=lt.shared.context;return[0,0,Ht.def(Je,".",z0),Ht.def(Je,".",C0)]}):null}var D=$(si);if(D){var U=D;D=new Er(D.thisDep,D.contextDep,D.propDep,function(C,I){var L=U.append(C,I),j=C.shared.context;return I.set(j,"."+M4,L[2]),I.set(j,"."+k4,L[3]),L})}return{viewport:D,scissor_box:$(Sf)}}function Pt(z,k){var F=z.static,W=typeof F[Xc]=="string"&&typeof F[Vc]=="string";if(W){if(Object.keys(k.dynamic).length>0)return null;var Y=k.static,$=Object.keys(Y);if($.length>0&&typeof Y[$[0]]=="number"){for(var D=[],U=0;U<$.length;++U)E(typeof Y[$[U]]=="number","must specify all vertex attribute locations when using vaos"),D.push([Y[$[U]]|0,$[U]]);return D}}return null}function jt(z,k,F){var W=z.static,Y=z.dynamic;function $(L){if(L in W){var j=A.id(W[L]);E.optional(function(){Ee.shader(wm[L],j,E.guessCommand())});var K=dn(function(){return j});return K.id=j,K}else if(L in Y){var fe=Y[L];return $r(fe,function(ue,ce){var Se=ue.invoke(ce,fe),lt=ce.def(ue.shared.strings,".id(",Se,")");return E.optional(function(){ce(ue.shared.shader,".shader(",wm[L],",",lt,",",ue.command,");")}),lt})}return null}var D=$(Xc),U=$(Vc),C=null,I;return Ri(D)&&Ri(U)?(C=Ee.program(U.id,D.id,null,F),I=dn(function(L,j){return L.link(C)})):I=new Er(D&&D.thisDep||U&&U.thisDep,D&&D.contextDep||U&&U.contextDep,D&&D.propDep||U&&U.propDep,function(L,j){var K=L.shared.shader,fe;D?fe=D.append(L,j):fe=j.def(K,".",Xc);var ue;U?ue=U.append(L,j):ue=j.def(K,".",Vc);var ce=K+".program("+ue+","+fe;return E.optional(function(){ce+=","+L.command}),j.def(ce+")")}),{frag:D,vert:U,progVar:I,program:C}}function uo(z,k){var F=z.static,W=z.dynamic;function Y(){if(_s in F){var L=F[_s];Df(L)?L=ee.getElements(ee.create(L,!0)):L&&(L=ee.getElements(L),E.command(L,"invalid elements",k.commandStr));var j=dn(function(fe,ue){if(L){var ce=fe.link(L);return fe.ELEMENTS=ce,ce}return fe.ELEMENTS=null,null});return j.value=L,j}else if(_s in W){var K=W[_s];return $r(K,function(fe,ue){var ce=fe.shared,Se=ce.isBufferArgs,lt=ce.elements,Ht=fe.invoke(ue,K),Je=ue.def("null"),Mt=ue.def(Se,"(",Ht,")"),It=fe.cond(Mt).then(Je,"=",lt,".createStream(",Ht,");").else(Je,"=",lt,".getElements(",Ht,");");return E.optional(function(){fe.assert(It.else,"!"+Ht+"||"+Je,"invalid elements")}),ue.entry(It),ue.exit(fe.cond(Mt).then(lt,".destroyStream(",Je,");")),fe.ELEMENTS=Je,Je})}return null}var $=Y();function D(){if(Ms in F){var L=F[Ms];return E.commandParameter(L,x0,"invalid primitve",k.commandStr),dn(function(K,fe){return x0[L]})}else if(Ms in W){var j=W[Ms];return $r(j,function(K,fe){var ue=K.constants.primTypes,ce=K.invoke(fe,j);return E.optional(function(){K.assert(fe,ce+" in "+ue,"invalid primitive, must be one of "+Object.keys(x0))}),fe.def(ue,"[",ce,"]")})}else if($)return Ri($)?$.value?dn(function(K,fe){return fe.def(K.ELEMENTS,".primType")}):dn(function(){return pm}):new Er($.thisDep,$.contextDep,$.propDep,function(K,fe){var ue=K.ELEMENTS;return fe.def(ue,"?",ue,".primType:",pm)});return null}function U(L,j){if(L in F){var K=F[L]|0;return E.command(!j||K>=0,"invalid "+L,k.commandStr),dn(function(ue,ce){return j&&(ue.OFFSET=K),K})}else if(L in W){var fe=W[L];return $r(fe,function(ue,ce){var Se=ue.invoke(ce,fe);return j&&(ue.OFFSET=Se,E.optional(function(){ue.assert(ce,Se+">=0","invalid "+L)})),Se})}else if(j&&$)return dn(function(ue,ce){return ue.OFFSET="0",0});return null}var C=U(Af,!0);function I(){if(ks in F){var L=F[ks]|0;return E.command(typeof L=="number"&&L>=0,"invalid vertex count",k.commandStr),dn(function(){return L})}else if(ks in W){var j=W[ks];return $r(j,function(ue,ce){var Se=ue.invoke(ce,j);return E.optional(function(){ue.assert(ce,"typeof "+Se+'==="number"&&'+Se+">=0&&"+Se+"===("+Se+"|0)","invalid vertex count")}),Se})}else if($)if(Ri($)){if($)return C?new Er(C.thisDep,C.contextDep,C.propDep,function(ue,ce){var Se=ce.def(ue.ELEMENTS,".vertCount-",ue.OFFSET);return E.optional(function(){ue.assert(ce,Se+">=0","invalid vertex offset/element buffer too small")}),Se}):dn(function(ue,ce){return ce.def(ue.ELEMENTS,".vertCount")});var K=dn(function(){return-1});return E.optional(function(){K.MISSING=!0}),K}else{var fe=new Er($.thisDep||C.thisDep,$.contextDep||C.contextDep,$.propDep||C.propDep,function(ue,ce){var Se=ue.ELEMENTS;return ue.OFFSET?ce.def(Se,"?",Se,".vertCount-",ue.OFFSET,":-1"):ce.def(Se,"?",Se,".vertCount:-1")});return E.optional(function(){fe.DYNAMIC=!0}),fe}return null}return{elements:$,primitive:D(),count:I(),instances:U(Tf,!1),offset:C}}function pn(z,k){var F=z.static,W=z.dynamic,Y={};return ye.forEach(function($){var D=Pe($);function U(C,I){if($ in F){var L=C(F[$]);Y[D]=dn(function(){return L})}else if($ in W){var j=W[$];Y[D]=$r(j,function(K,fe){return I(K,fe,K.invoke(fe,j))})}}switch($){case om:case Kv:case Yv:case sm:case Zv:case lm:case rm:case am:case im:case tm:return U(function(C){return E.commandType(C,"boolean",$,k.commandStr),C},function(C,I,L){return E.optional(function(){C.assert(I,"typeof "+L+'==="boolean"',"invalid flag "+$,C.commandStr)}),L});case Jv:return U(function(C){return E.commandParameter(C,R0,"invalid "+$,k.commandStr),R0[C]},function(C,I,L){var j=C.constants.compareFuncs;return E.optional(function(){C.assert(I,L+" in "+j,"invalid "+$+", must be one of "+Object.keys(R0))}),I.def(j,"[",L,"]")});case em:return U(function(C){return E.command(sn(C)&&C.length===2&&typeof C[0]=="number"&&typeof C[1]=="number"&&C[0]<=C[1],"depth range is 2d array",k.commandStr),C},function(C,I,L){E.optional(function(){C.assert(I,C.shared.isArrayLike+"("+L+")&&"+L+".length===2&&typeof "+L+'[0]==="number"&&typeof '+L+'[1]==="number"&&'+L+"[0]<="+L+"[1]","depth range must be a 2d array")});var j=I.def("+",L,"[0]"),K=I.def("+",L,"[1]");return[j,K]});case od:return U(function(C){E.commandType(C,"object","blend.func",k.commandStr);var I="srcRGB"in C?C.srcRGB:C.src,L="srcAlpha"in C?C.srcAlpha:C.src,j="dstRGB"in C?C.dstRGB:C.dst,K="dstAlpha"in C?C.dstAlpha:C.dst;return E.commandParameter(I,ja,D+".srcRGB",k.commandStr),E.commandParameter(L,ja,D+".srcAlpha",k.commandStr),E.commandParameter(j,ja,D+".dstRGB",k.commandStr),E.commandParameter(K,ja,D+".dstAlpha",k.commandStr),E.command(bm.indexOf(I+", "+j)===-1,"unallowed blending combination (srcRGB, dstRGB) = ("+I+", "+j+")",k.commandStr),[ja[I],ja[j],ja[L],ja[K]]},function(C,I,L){var j=C.constants.blendFuncs;E.optional(function(){C.assert(I,L+"&&typeof "+L+'==="object"',"invalid blend func, must be an object")});function K(Je,Mt){var It=I.def('"',Je,Mt,'" in ',L,"?",L,".",Je,Mt,":",L,".",Je);return E.optional(function(){C.assert(I,It+" in "+j,"invalid "+$+"."+Je+Mt+", must be one of "+Object.keys(ja))}),It}var fe=K("src","RGB"),ue=K("dst","RGB");E.optional(function(){var Je=C.constants.invalidBlendCombinations;C.assert(I,Je+".indexOf("+fe+'+", "+'+ue+") === -1 ","unallowed blending combination for (srcRGB, dstRGB)")});var ce=I.def(j,"[",fe,"]"),Se=I.def(j,"[",K("src","Alpha"),"]"),lt=I.def(j,"[",ue,"]"),Ht=I.def(j,"[",K("dst","Alpha"),"]");return[ce,lt,Se,Ht]});case td:return U(function(C){if(typeof C=="string")return E.commandParameter(C,ae,"invalid "+$,k.commandStr),[ae[C],ae[C]];if(typeof C=="object")return E.commandParameter(C.rgb,ae,$+".rgb",k.commandStr),E.commandParameter(C.alpha,ae,$+".alpha",k.commandStr),[ae[C.rgb],ae[C.alpha]];E.commandRaise("invalid blend.equation",k.commandStr)},function(C,I,L){var j=C.constants.blendEquations,K=I.def(),fe=I.def(),ue=C.cond("typeof ",L,'==="string"');return E.optional(function(){function ce(Se,lt,Ht){C.assert(Se,Ht+" in "+j,"invalid "+lt+", must be one of "+Object.keys(ae))}ce(ue.then,$,L),C.assert(ue.else,L+"&&typeof "+L+'==="object"',"invalid "+$),ce(ue.else,$+".rgb",L+".rgb"),ce(ue.else,$+".alpha",L+".alpha")}),ue.then(K,"=",fe,"=",j,"[",L,"];"),ue.else(K,"=",j,"[",L,".rgb];",fe,"=",j,"[",L,".alpha];"),I(ue),[K,fe]});case Qv:return U(function(C){return E.command(sn(C)&&C.length===4,"blend.color must be a 4d array",k.commandStr),Wt(4,function(I){return+C[I]})},function(C,I,L){return E.optional(function(){C.assert(I,C.shared.isArrayLike+"("+L+")&&"+L+".length===4","blend.color must be a 4d array")}),Wt(4,function(j){return I.def("+",L,"[",j,"]")})});case cm:return U(function(C){return E.commandType(C,"number",D,k.commandStr),C|0},function(C,I,L){return E.optional(function(){C.assert(I,"typeof "+L+'==="number"',"invalid stencil.mask")}),I.def(L,"|0")});case cd:return U(function(C){E.commandType(C,"object",D,k.commandStr);var I=C.cmp||"keep",L=C.ref||0,j="mask"in C?C.mask:-1;return E.commandParameter(I,R0,$+".cmp",k.commandStr),E.commandType(L,"number",$+".ref",k.commandStr),E.commandType(j,"number",$+".mask",k.commandStr),[R0[I],L,j]},function(C,I,L){var j=C.constants.compareFuncs;E.optional(function(){function ce(){C.assert(I,Array.prototype.join.call(arguments,""),"invalid stencil.func")}ce(L+"&&typeof ",L,'==="object"'),ce('!("cmp" in ',L,")||(",L,".cmp in ",j,")")});var K=I.def('"cmp" in ',L,"?",j,"[",L,".cmp]",":",Ci),fe=I.def(L,".ref|0"),ue=I.def('"mask" in ',L,"?",L,".mask|0:-1");return[K,fe,ue]});case ld:case jc:return U(function(C){E.commandType(C,"object",D,k.commandStr);var I=C.fail||"keep",L=C.zfail||"keep",j=C.zpass||"keep";return E.commandParameter(I,Ni,$+".fail",k.commandStr),E.commandParameter(L,Ni,$+".zfail",k.commandStr),E.commandParameter(j,Ni,$+".zpass",k.commandStr),[$===jc?Es:tl,Ni[I],Ni[L],Ni[j]]},function(C,I,L){var j=C.constants.stencilOps;E.optional(function(){C.assert(I,L+"&&typeof "+L+'==="object"',"invalid "+$)});function K(fe){return E.optional(function(){C.assert(I,'!("'+fe+'" in '+L+")||("+L+"."+fe+" in "+j+")","invalid "+$+"."+fe+", must be one of "+Object.keys(Ni))}),I.def('"',fe,'" in ',L,"?",j,"[",L,".",fe,"]:",Ci)}return[$===jc?Es:tl,K("fail"),K("zfail"),K("zpass")]});case id:return U(function(C){E.commandType(C,"object",D,k.commandStr);var I=C.factor|0,L=C.units|0;return E.commandType(I,"number",D+".factor",k.commandStr),E.commandType(L,"number",D+".units",k.commandStr),[I,L]},function(C,I,L){E.optional(function(){C.assert(I,L+"&&typeof "+L+'==="object"',"invalid "+$)});var j=I.def(L,".factor|0"),K=I.def(L,".units|0");return[j,K]});case nm:return U(function(C){var I=0;return C==="front"?I=tl:C==="back"&&(I=Es),E.command(!!I,D,k.commandStr),I},function(C,I,L){return E.optional(function(){C.assert(I,L+'==="front"||'+L+'==="back"',"invalid cull.face")}),I.def(L,'==="front"?',tl,":",Es)});case ad:return U(function(C){return E.command(typeof C=="number"&&C>=oe.lineWidthDims[0]&&C<=oe.lineWidthDims[1],"invalid line width, must be a positive number between "+oe.lineWidthDims[0]+" and "+oe.lineWidthDims[1],k.commandStr),C},function(C,I,L){return E.optional(function(){C.assert(I,"typeof "+L+'==="number"&&'+L+">="+oe.lineWidthDims[0]+"&&"+L+"<="+oe.lineWidthDims[1],"invalid line width")}),L});case rd:return U(function(C){return E.commandParameter(C,md,D,k.commandStr),md[C]},function(C,I,L){return E.optional(function(){C.assert(I,L+'==="cw"||'+L+'==="ccw"',"invalid frontFace, must be one of cw,ccw")}),I.def(L+'==="cw"?'+vm+":"+vd)});case nd:return U(function(C){return E.command(sn(C)&&C.length===4,"color.mask must be length 4 array",k.commandStr),C.map(function(I){return!!I})},function(C,I,L){return E.optional(function(){C.assert(I,C.shared.isArrayLike+"("+L+")&&"+L+".length===4","invalid color.mask")}),Wt(4,function(j){return"!!"+L+"["+j+"]"})});case sd:return U(function(C){E.command(typeof C=="object"&&C,D,k.commandStr);var I="value"in C?C.value:1,L=!!C.invert;return E.command(typeof I=="number"&&I>=0&&I<=1,"sample.coverage.value must be a number between 0 and 1",k.commandStr),[I,L]},function(C,I,L){E.optional(function(){C.assert(I,L+"&&typeof "+L+'==="object"',"invalid sample.coverage")});var j=I.def('"value" in ',L,"?+",L,".value:1"),K=I.def("!!",L,".invert");return[j,K]})}}),Y}function Nn(z,k){var F=z.static,W=z.dynamic,Y={};return Object.keys(F).forEach(function($){var D=F[$],U;if(typeof D=="number"||typeof D=="boolean")U=dn(function(){return D});else if(typeof D=="function"){var C=D._reglType;C==="texture2d"||C==="textureCube"?U=dn(function(I){return I.link(D)}):C==="framebuffer"||C==="framebufferCube"?(E.command(D.color.length>0,'missing color attachment for framebuffer sent to uniform "'+$+'"',k.commandStr),U=dn(function(I){return I.link(D.color[0])})):E.commandRaise('invalid data for uniform "'+$+'"',k.commandStr)}else sn(D)?U=dn(function(I){var L=I.global.def("[",Wt(D.length,function(j){return E.command(typeof D[j]=="number"||typeof D[j]=="boolean","invalid uniform "+$,I.commandStr),D[j]}),"]");return L}):E.commandRaise('invalid or missing data for uniform "'+$+'"',k.commandStr);U.value=D,Y[$]=U}),Object.keys(W).forEach(function($){var D=W[$];Y[$]=$r(D,function(U,C){return U.invoke(C,D)})}),Y}function to(z,k){var F=z.static,W=z.dynamic,Y={};return Object.keys(F).forEach(function($){var D=F[$],U=A.id($),C=new X;if(Df(D))C.state=L0,C.buffer=he.getBuffer(he.create(D,N0,!1,!0)),C.type=0;else{var I=he.getBuffer(D);if(I)C.state=L0,C.buffer=I,C.type=0;else if(E.command(typeof D=="object"&&D,"invalid data for attribute "+$,k.commandStr),"constant"in D){var L=D.constant;C.buffer="null",C.state=Ku,typeof L=="number"?C.x=L:(E.command(sn(L)&&L.length>0&&L.length<=4,"invalid constant for attribute "+$,k.commandStr),T0.forEach(function(lt,Ht){Ht<L.length&&(C[lt]=L[Ht])}))}else{Df(D.buffer)?I=he.getBuffer(he.create(D.buffer,N0,!1,!0)):I=he.getBuffer(D.buffer),E.command(!!I,'missing buffer for attribute "'+$+'"',k.commandStr);var j=D.offset|0;E.command(j>=0,'invalid offset for attribute "'+$+'"',k.commandStr);var K=D.stride|0;E.command(K>=0&&K<256,'invalid stride for attribute "'+$+'", must be integer betweeen [0, 255]',k.commandStr);var fe=D.size|0;E.command(!("size"in D)||fe>0&&fe<=4,'invalid size for attribute "'+$+'", must be 1,2,3,4',k.commandStr);var ue=!!D.normalized,ce=0;"type"in D&&(E.commandParameter(D.type,ms,"invalid type for attribute "+$,k.commandStr),ce=ms[D.type]);var Se=D.divisor|0;"divisor"in D&&(E.command(Se===0||Ae,'cannot specify divisor for attribute "'+$+'", instancing not supported',k.commandStr),E.command(Se>=0,'invalid divisor for attribute "'+$+'"',k.commandStr)),E.optional(function(){var lt=k.commandStr,Ht=["buffer","offset","divisor","normalized","type","size","stride"];Object.keys(D).forEach(function(Je){E.command(Ht.indexOf(Je)>=0,'unknown parameter "'+Je+'" for attribute pointer "'+$+'" (valid parameters are '+Ht+")",lt)})}),C.buffer=I,C.state=L0,C.size=fe,C.normalized=ue,C.type=ce||I.dtype,C.offset=j,C.stride=K,C.divisor=Se}}Y[$]=dn(function(lt,Ht){var Je=lt.attribCache;if(U in Je)return Je[U];var Mt={isStream:!1};return Object.keys(C).forEach(function(It){Mt[It]=C[It]}),C.buffer&&(Mt.buffer=lt.link(C.buffer),Mt.type=Mt.type||Mt.buffer+".dtype"),Je[U]=Mt,Mt})}),Object.keys(W).forEach(function($){var D=W[$];function U(C,I){var L=C.invoke(I,D),j=C.shared,K=C.constants,fe=j.isBufferArgs,ue=j.buffer;E.optional(function(){C.assert(I,L+"&&(typeof "+L+'==="object"||typeof '+L+'==="function")&&('+fe+"("+L+")||"+ue+".getBuffer("+L+")||"+ue+".getBuffer("+L+".buffer)||"+fe+"("+L+'.buffer)||("constant" in '+L+"&&(typeof "+L+'.constant==="number"||'+j.isArrayLike+"("+L+".constant))))",'invalid dynamic attribute "'+$+'"')});var ce={isStream:I.def(!1)},Se=new X;Se.state=L0,Object.keys(Se).forEach(function(Mt){ce[Mt]=I.def(""+Se[Mt])});var lt=ce.buffer,Ht=ce.type;I("if(",fe,"(",L,")){",ce.isStream,"=true;",lt,"=",ue,".createStream(",N0,",",L,");",Ht,"=",lt,".dtype;","}else{",lt,"=",ue,".getBuffer(",L,");","if(",lt,"){",Ht,"=",lt,".dtype;",'}else if("constant" in ',L,"){",ce.state,"=",Ku,";","if(typeof "+L+'.constant === "number"){',ce[T0[0]],"=",L,".constant;",T0.slice(1).map(function(Mt){return ce[Mt]}).join("="),"=0;","}else{",T0.map(function(Mt,It){return ce[Mt]+"="+L+".constant.length>"+It+"?"+L+".constant["+It+"]:0;"}).join(""),"}}else{","if(",fe,"(",L,".buffer)){",lt,"=",ue,".createStream(",N0,",",L,".buffer);","}else{",lt,"=",ue,".getBuffer(",L,".buffer);","}",Ht,'="type" in ',L,"?",K.glTypes,"[",L,".type]:",lt,".dtype;",ce.normalized,"=!!",L,".normalized;");function Je(Mt){I(ce[Mt],"=",L,".",Mt,"|0;")}return Je("size"),Je("offset"),Je("stride"),Je("divisor"),I("}}"),I.exit("if(",ce.isStream,"){",ue,".destroyStream(",lt,");","}"),ce}Y[$]=$r(D,U)}),Y}function _n(z,k){var F=z.static,W=z.dynamic;if(Yc in F){var Y=F[Yc];return Y!==null&&Te.getVAO(Y)===null&&(Y=Te.createVAO(Y)),dn(function(D){return D.link(Te.getVAO(Y))})}else if(Yc in W){var $=W[Yc];return $r($,function(D,U){var C=D.invoke(U,$);return U.def(D.shared.vao+".getVAO("+C+")")})}return null}function Do(z){var k=z.static,F=z.dynamic,W={};return Object.keys(k).forEach(function(Y){var $=k[Y];W[Y]=dn(function(D,U){return typeof $=="number"||typeof $=="boolean"?""+$:D.link($)})}),Object.keys(F).forEach(function(Y){var $=F[Y];W[Y]=$r($,function(D,U){return D.invoke(U,$)})}),W}function vn(z,k,F,W,Y){var $=z.static,D=z.dynamic;E.optional(function(){var Je=[ws,Vc,Xc,_s,Ms,Af,ks,Tf,Wc,Yc].concat(ye);function Mt(It){Object.keys(It).forEach(function(po){E.command(Je.indexOf(po)>=0,'unknown parameter "'+po+'"',Y.commandStr)})}Mt($),Mt(D)});var U=Pt(z,k),C=Ze(z,Y),I=Yt(z,C,Y),L=uo(z,Y),j=pn(z,Y),K=jt(z,Y,U);function fe(Je){var Mt=I[Je];Mt&&(j[Je]=Mt)}fe(si),fe(Pe(Sf));var ue=Object.keys(j).length>0,ce={framebuffer:C,draw:L,shader:K,state:j,dirty:ue,scopeVAO:null,drawVAO:null,useVAO:!1,attributes:{}};if(ce.profile=$t(z,Y),ce.uniforms=Nn(F,Y),ce.drawVAO=ce.scopeVAO=_n(z,Y),!ce.drawVAO&&K.program&&!U&&O.angle_instanced_arrays){var Se=!0,lt=K.program.attributes.map(function(Je){var Mt=k.static[Je];return Se=Se&&!!Mt,Mt});if(Se&&lt.length>0){var Ht=Te.getVAO(Te.createVAO(lt));ce.drawVAO=new Er(null,null,null,function(Je,Mt){return Je.link(Ht)}),ce.useVAO=!0}}return U?ce.useVAO=!0:ce.attributes=to(k,Y),ce.context=Do(W,Y),ce}function Mn(z,k,F){var W=z.shared,Y=W.context,$=z.scope();Object.keys(F).forEach(function(D){k.save(Y,"."+D);var U=F[D],C=U.append(z,k);Array.isArray(C)?$(Y,".",D,"=[",C.join(),"];"):$(Y,".",D,"=",C,";")}),k($)}function kn(z,k,F,W){var Y=z.shared,$=Y.gl,D=Y.framebuffer,U;Ue&&(U=k.def(Y.extensions,".webgl_draw_buffers"));var C=z.constants,I=C.drawBuffer,L=C.backBuffer,j;F?j=F.append(z,k):j=k.def(D,".next"),W||k("if(",j,"!==",D,".cur){"),k("if(",j,"){",$,".bindFramebuffer(",ym,",",j,".framebuffer);"),Ue&&k(U,".drawBuffersWEBGL(",I,"[",j,".colorAttachments.length]);"),k("}else{",$,".bindFramebuffer(",ym,",null);"),Ue&&k(U,".drawBuffersWEBGL(",L,");"),k("}",D,".cur=",j,";"),W||k("}")}function Bn(z,k,F){var W=z.shared,Y=W.gl,$=z.current,D=z.next,U=W.current,C=W.next,I=z.cond(U,".dirty");ye.forEach(function(L){var j=Pe(L);if(!(j in F.state)){var K,fe;if(j in D){K=D[j],fe=$[j];var ue=Wt(ge[j].length,function(Se){return I.def(K,"[",Se,"]")});I(z.cond(ue.map(function(Se,lt){return Se+"!=="+fe+"["+lt+"]"}).join("||")).then(Y,".",xe[j],"(",ue,");",ue.map(function(Se,lt){return fe+"["+lt+"]="+Se}).join(";"),";"))}else{K=I.def(C,".",j);var ce=z.cond(K,"!==",U,".",j);I(ce),j in Oe?ce(z.cond(K).then(Y,".enable(",Oe[j],");").else(Y,".disable(",Oe[j],");"),U,".",j,"=",K,";"):ce(Y,".",xe[j],"(",K,");",U,".",j,"=",K,";")}}}),Object.keys(F.state).length===0&&I(U,".dirty=false;"),k(I)}function Jn(z,k,F,W){var Y=z.shared,$=z.current,D=Y.current,U=Y.gl;_m(Object.keys(F)).forEach(function(C){var I=F[C];if(!(W&&!W(I))){var L=I.append(z,k);if(Oe[C]){var j=Oe[C];Ri(I)?L?k(U,".enable(",j,");"):k(U,".disable(",j,");"):k(z.cond(L).then(U,".enable(",j,");").else(U,".disable(",j,");")),k(D,".",C,"=",L,";")}else if(sn(L)){var K=$[C];k(U,".",xe[C],"(",L,");",L.map(function(fe,ue){return K+"["+ue+"]="+fe}).join(";"),";")}else k(U,".",xe[C],"(",L,");",D,".",C,"=",L,";")}})}function cn(z,k){Ae&&(z.instancing=k.def(z.shared.extensions,".angle_instanced_arrays"))}function qt(z,k,F,W,Y){var $=z.shared,D=z.stats,U=$.current,C=$.timer,I=F.profile;function L(){return typeof performance=="undefined"?"Date.now()":"performance.now()"}var j,K;function fe(Je){j=k.def(),Je(j,"=",L(),";"),typeof Y=="string"?Je(D,".count+=",Y,";"):Je(D,".count++;"),_e&&(W?(K=k.def(),Je(K,"=",C,".getNumPendingQueries();")):Je(C,".beginQuery(",D,");"))}function ue(Je){Je(D,".cpuTime+=",L(),"-",j,";"),_e&&(W?Je(C,".pushScopeStats(",K,",",C,".getNumPendingQueries(),",D,");"):Je(C,".endQuery();"))}function ce(Je){var Mt=k.def(U,".profile");k(U,".profile=",Je,";"),k.exit(U,".profile=",Mt,";")}var Se;if(I){if(Ri(I)){I.enable?(fe(k),ue(k.exit),ce("true")):ce("false");return}Se=I.append(z,k),ce(Se)}else Se=k.def(U,".profile");var lt=z.block();fe(lt),k("if(",Se,"){",lt,"}");var Ht=z.block();ue(Ht),k.exit("if(",Se,"){",Ht,"}")}function er(z,k,F,W,Y){var $=z.shared;function D(C){switch(C){case Lf:case Nf:case Pf:return 2;case zf:case Rf:case If:return 3;case Cf:case Of:case Ff:return 4;default:return 1}}function U(C,I,L){var j=$.gl,K=k.def(C,".location"),fe=k.def($.attributes,"[",K,"]"),ue=L.state,ce=L.buffer,Se=[L.x,L.y,L.z,L.w],lt=["buffer","normalized","offset","stride"];function Ht(){k("if(!",fe,".buffer){",j,".enableVertexAttribArray(",K,");}");var Mt=L.type,It;if(L.size?It=k.def(L.size,"||",I):It=I,k("if(",fe,".type!==",Mt,"||",fe,".size!==",It,"||",lt.map(function(en){return fe+"."+en+"!=="+L[en]}).join("||"),"){",j,".bindBuffer(",N0,",",ce,".buffer);",j,".vertexAttribPointer(",[K,It,Mt,L.normalized,L.stride,L.offset],");",fe,".type=",Mt,";",fe,".size=",It,";",lt.map(function(en){return fe+"."+en+"="+L[en]+";"}).join(""),"}"),Ae){var po=L.divisor;k("if(",fe,".divisor!==",po,"){",z.instancing,".vertexAttribDivisorANGLE(",[K,po],");",fe,".divisor=",po,";}")}}function Je(){k("if(",fe,".buffer){",j,".disableVertexAttribArray(",K,");",fe,".buffer=null;","}if(",T0.map(function(Mt,It){return fe+"."+Mt+"!=="+Se[It]}).join("||"),"){",j,".vertexAttrib4f(",K,",",Se,");",T0.map(function(Mt,It){return fe+"."+Mt+"="+Se[It]+";"}).join(""),"}")}ue===L0?Ht():ue===Ku?Je():(k("if(",ue,"===",L0,"){"),Ht(),k("}else{"),Je(),k("}"))}W.forEach(function(C){var I=C.name,L=F.attributes[I],j;if(L){if(!Y(L))return;j=L.append(z,k)}else{if(!Y(Mm))return;var K=z.scopeAttrib(I);E.optional(function(){z.assert(k,K+".state","missing attribute "+I)}),j={},Object.keys(new X).forEach(function(fe){j[fe]=k.def(K,".",fe)})}U(z.link(C),D(C.info.type),j)})}function yo(z,k,F,W,Y){for(var $=z.shared,D=$.gl,U,C=0;C<W.length;++C){var I=W[C],L=I.name,j=I.info.type,K=F.uniforms[L],fe=z.link(I),ue=fe+".location",ce;if(K){if(!Y(K))continue;if(Ri(K)){var Se=K.value;if(E.command(Se!==null&&typeof Se!="undefined",'missing uniform "'+L+'"',z.commandStr),j===Jc||j===el){E.command(typeof Se=="function"&&(j===Jc&&(Se._reglType==="texture2d"||Se._reglType==="framebuffer")||j===el&&(Se._reglType==="textureCube"||Se._reglType==="framebufferCube")),"invalid texture for uniform "+L,z.commandStr);var lt=z.link(Se._texture||Se.color[0]._texture);k(D,".uniform1i(",ue,",",lt+".bind());"),k.exit(lt,".unbind();")}else if(j===Kc||j===Qc||j===Zc){E.optional(function(){E.command(sn(Se),"invalid matrix for uniform "+L,z.commandStr),E.command(j===Kc&&Se.length===4||j===Qc&&Se.length===9||j===Zc&&Se.length===16,"invalid length for matrix uniform "+L,z.commandStr)});var Ht=z.global.def("new Float32Array(["+Array.prototype.slice.call(Se)+"])"),Je=2;j===Qc?Je=3:j===Zc&&(Je=4),k(D,".uniformMatrix",Je,"fv(",ue,",false,",Ht,");")}else{switch(j){case ud:E.commandType(Se,"number","uniform "+L,z.commandStr),U="1f";break;case Lf:E.command(sn(Se)&&Se.length===2,"uniform "+L,z.commandStr),U="2f";break;case zf:E.command(sn(Se)&&Se.length===3,"uniform "+L,z.commandStr),U="3f";break;case Cf:E.command(sn(Se)&&Se.length===4,"uniform "+L,z.commandStr),U="4f";break;case pd:E.commandType(Se,"boolean","uniform "+L,z.commandStr),U="1i";break;case dd:E.commandType(Se,"number","uniform "+L,z.commandStr),U="1i";break;case Pf:E.command(sn(Se)&&Se.length===2,"uniform "+L,z.commandStr),U="2i";break;case Nf:E.command(sn(Se)&&Se.length===2,"uniform "+L,z.commandStr),U="2i";break;case If:E.command(sn(Se)&&Se.length===3,"uniform "+L,z.commandStr),U="3i";break;case Rf:E.command(sn(Se)&&Se.length===3,"uniform "+L,z.commandStr),U="3i";break;case Ff:E.command(sn(Se)&&Se.length===4,"uniform "+L,z.commandStr),U="4i";break;case Of:E.command(sn(Se)&&Se.length===4,"uniform "+L,z.commandStr),U="4i";break}k(D,".uniform",U,"(",ue,",",sn(Se)?Array.prototype.slice.call(Se):Se,");")}continue}else ce=K.append(z,k)}else{if(!Y(Mm))continue;ce=k.def($.uniforms,"[",A.id(L),"]")}j===Jc?(E(!Array.isArray(ce),"must specify a scalar prop for textures"),k("if(",ce,"&&",ce,'._reglType==="framebuffer"){',ce,"=",ce,".color[0];","}")):j===el&&(E(!Array.isArray(ce),"must specify a scalar prop for cube maps"),k("if(",ce,"&&",ce,'._reglType==="framebufferCube"){',ce,"=",ce,".color[0];","}")),E.optional(function(){function Sr(Aa,zm){z.assert(k,Aa,'bad data or missing for uniform "'+L+'".  '+zm)}function gd(Aa){E(!Array.isArray(ce),"must not specify an array type for uniform"),Sr("typeof "+ce+'==="'+Aa+'"',"invalid type, expected "+Aa)}function ua(Aa,zm){Array.isArray(ce)?E(ce.length===Aa,"must have length "+Aa):Sr($.isArrayLike+"("+ce+")&&"+ce+".length==="+Aa,"invalid vector, should have length "+Aa,z.commandStr)}function Lm(Aa){E(!Array.isArray(ce),"must not specify a value type"),Sr("typeof "+ce+'==="function"&&'+ce+'._reglType==="texture'+(Aa===dm?"2d":"Cube")+'"',"invalid texture type",z.commandStr)}switch(j){case dd:gd("number");break;case Nf:ua(2,"number");break;case Rf:ua(3,"number");break;case Of:ua(4,"number");break;case ud:gd("number");break;case Lf:ua(2,"number");break;case zf:ua(3,"number");break;case Cf:ua(4,"number");break;case pd:gd("boolean");break;case Pf:ua(2,"boolean");break;case If:ua(3,"boolean");break;case Ff:ua(4,"boolean");break;case Kc:ua(4,"number");break;case Qc:ua(9,"number");break;case Zc:ua(16,"number");break;case Jc:Lm(dm);break;case el:Lm(L4);break}});var Mt=1;switch(j){case Jc:case el:var It=k.def(ce,"._texture");k(D,".uniform1i(",ue,",",It,".bind());"),k.exit(It,".unbind();");continue;case dd:case pd:U="1i";break;case Nf:case Pf:U="2i",Mt=2;break;case Rf:case If:U="3i",Mt=3;break;case Of:case Ff:U="4i",Mt=4;break;case ud:U="1f";break;case Lf:U="2f",Mt=2;break;case zf:U="3f",Mt=3;break;case Cf:U="4f",Mt=4;break;case Kc:U="Matrix2fv";break;case Qc:U="Matrix3fv";break;case Zc:U="Matrix4fv";break}if(k(D,".uniform",U,"(",ue,","),U.charAt(0)==="M"){var po=Math.pow(j-Kc+2,2),en=z.global.def("new Float32Array(",po,")");Array.isArray(ce)?k("false,(",Wt(po,function(Sr){return en+"["+Sr+"]="+ce[Sr]}),",",en,")"):k("false,(Array.isArray(",ce,")||",ce," instanceof Float32Array)?",ce,":(",Wt(po,function(Sr){return en+"["+Sr+"]="+ce+"["+Sr+"]"}),",",en,")")}else Mt>1?k(Wt(Mt,function(Sr){return Array.isArray(ce)?ce[Sr]:ce+"["+Sr+"]"})):(E(!Array.isArray(ce),"uniform value must not be an array"),k(ce));k(");")}}function bt(z,k,F,W){var Y=z.shared,$=Y.gl,D=Y.draw,U=W.draw;function C(){var It=U.elements,po,en=k;return It?((It.contextDep&&W.contextDynamic||It.propDep)&&(en=F),po=It.append(z,en)):po=en.def(D,".",_s),po&&en("if("+po+")"+$+".bindBuffer("+S4+","+po+".buffer.buffer);"),po}function I(){var It=U.count,po,en=k;return It?((It.contextDep&&W.contextDynamic||It.propDep)&&(en=F),po=It.append(z,en),E.optional(function(){It.MISSING&&z.assert(k,"false","missing vertex count"),It.DYNAMIC&&z.assert(en,po+">=0","missing vertex count")})):(po=en.def(D,".",ks),E.optional(function(){z.assert(en,po+">=0","missing vertex count")})),po}var L=C();function j(It){var po=U[It];return po?po.contextDep&&W.contextDynamic||po.propDep?po.append(z,F):po.append(z,k):k.def(D,".",It)}var K=j(Ms),fe=j(Af),ue=I();if(typeof ue=="number"){if(ue===0)return}else F("if(",ue,"){"),F.exit("}");var ce,Se;Ae&&(ce=j(Tf),Se=z.instancing);var lt=L+".type",Ht=U.elements&&Ri(U.elements);function Je(){function It(){F(Se,".drawElementsInstancedANGLE(",[K,ue,lt,fe+"<<(("+lt+"-"+Wv+")>>1)",ce],");")}function po(){F(Se,".drawArraysInstancedANGLE(",[K,fe,ue,ce],");")}L?Ht?It():(F("if(",L,"){"),It(),F("}else{"),po(),F("}")):po()}function Mt(){function It(){F($+".drawElements("+[K,ue,lt,fe+"<<(("+lt+"-"+Wv+")>>1)"]+");")}function po(){F($+".drawArrays("+[K,fe,ue]+");")}L?Ht?It():(F("if(",L,"){"),It(),F("}else{"),po(),F("}")):po()}Ae&&(typeof ce!="number"||ce>=0)?typeof ce=="string"?(F("if(",ce,">0){"),Je(),F("}else if(",ce,"<0){"),Mt(),F("}")):Je():Mt()}function eo(z,k,F,W,Y){var $=Tt(),D=$.proc("body",Y);return E.optional(function(){$.commandStr=k.commandStr,$.command=$.link(k.commandStr)}),Ae&&($.instancing=D.def($.shared.extensions,".angle_instanced_arrays")),z($,D,F,W),$.compile().body}function io(z,k,F,W){cn(z,k),F.useVAO?F.drawVAO?k(z.shared.vao,".setVAO(",F.drawVAO.append(z,k),");"):k(z.shared.vao,".setVAO(",z.shared.vao,".targetVAO);"):(k(z.shared.vao,".setVAO(null);"),er(z,k,F,W.attributes,function(){return!0})),yo(z,k,F,W.uniforms,function(){return!0}),bt(z,k,k,F)}function ln(z,k){var F=z.proc("draw",1);cn(z,F),Mn(z,F,k.context),kn(z,F,k.framebuffer),Bn(z,F,k),Jn(z,F,k.state),qt(z,F,k,!1,!0);var W=k.shader.progVar.append(z,F);if(F(z.shared.gl,".useProgram(",W,".program);"),k.shader.program)io(z,F,k,k.shader.program);else{F(z.shared.vao,".setVAO(null);");var Y=z.global.def("{}"),$=F.def(W,".id"),D=F.def(Y,"[",$,"]");F(z.cond(D).then(D,".call(this,a0);").else(D,"=",Y,"[",$,"]=",z.link(function(U){return eo(io,z,k,U,1)}),"(",W,");",D,".call(this,a0);"))}Object.keys(k.state).length>0&&F(z.shared.current,".dirty=true;")}function Wa(z,k,F,W){z.batchId="a1",cn(z,k);function Y(){return!0}er(z,k,F,W.attributes,Y),yo(z,k,F,W.uniforms,Y),bt(z,k,k,F)}function Ss(z,k,F,W){cn(z,k);var Y=F.contextDep,$=k.def(),D="a0",U="a1",C=k.def();z.shared.props=C,z.batchId=$;var I=z.scope(),L=z.scope();k(I.entry,"for(",$,"=0;",$,"<",U,";++",$,"){",C,"=",D,"[",$,"];",L,"}",I.exit);function j(lt){return lt.contextDep&&Y||lt.propDep}function K(lt){return!j(lt)}if(F.needsContext&&Mn(z,L,F.context),F.needsFramebuffer&&kn(z,L,F.framebuffer),Jn(z,L,F.state,j),F.profile&&j(F.profile)&&qt(z,L,F,!1,!0),W)F.useVAO?F.drawVAO?j(F.drawVAO)?L(z.shared.vao,".setVAO(",F.drawVAO.append(z,L),");"):I(z.shared.vao,".setVAO(",F.drawVAO.append(z,I),");"):I(z.shared.vao,".setVAO(",z.shared.vao,".targetVAO);"):(I(z.shared.vao,".setVAO(null);"),er(z,I,F,W.attributes,K),er(z,L,F,W.attributes,j)),yo(z,I,F,W.uniforms,K),yo(z,L,F,W.uniforms,j),bt(z,I,L,F);else{var fe=z.global.def("{}"),ue=F.shader.progVar.append(z,L),ce=L.def(ue,".id"),Se=L.def(fe,"[",ce,"]");L(z.shared.gl,".useProgram(",ue,".program);","if(!",Se,"){",Se,"=",fe,"[",ce,"]=",z.link(function(lt){return eo(Wa,z,F,lt,2)}),"(",ue,");}",Se,".call(this,a0[",$,"],",$,");")}}function N(z,k){var F=z.proc("batch",2);z.batchId="0",cn(z,F);var W=!1,Y=!0;Object.keys(k.context).forEach(function(fe){W=W||k.context[fe].propDep}),W||(Mn(z,F,k.context),Y=!1);var $=k.framebuffer,D=!1;$?($.propDep?W=D=!0:$.contextDep&&W&&(D=!0),D||kn(z,F,$)):kn(z,F,null),k.state.viewport&&k.state.viewport.propDep&&(W=!0);function U(fe){return fe.contextDep&&W||fe.propDep}Bn(z,F,k),Jn(z,F,k.state,function(fe){return!U(fe)}),(!k.profile||!U(k.profile))&&qt(z,F,k,!1,"a1"),k.contextDep=W,k.needsContext=Y,k.needsFramebuffer=D;var C=k.shader.progVar;if(C.contextDep&&W||C.propDep)Ss(z,F,k,null);else{var I=C.append(z,F);if(F(z.shared.gl,".useProgram(",I,".program);"),k.shader.program)Ss(z,F,k,k.shader.program);else{F(z.shared.vao,".setVAO(null);");var L=z.global.def("{}"),j=F.def(I,".id"),K=F.def(L,"[",j,"]");F(z.cond(K).then(K,".call(this,a0,a1);").else(K,"=",L,"[",j,"]=",z.link(function(fe){return eo(Ss,z,k,fe,2)}),"(",I,");",K,".call(this,a0,a1);"))}}Object.keys(k.state).length>0&&F(z.shared.current,".dirty=true;")}function ne(z,k){var F=z.proc("scope",3);z.batchId="a2";var W=z.shared,Y=W.current;Mn(z,F,k.context),k.framebuffer&&k.framebuffer.append(z,F),_m(Object.keys(k.state)).forEach(function(D){var U=k.state[D],C=U.append(z,F);sn(C)?C.forEach(function(I,L){F.set(z.next[D],"["+L+"]",I)}):F.set(W.next,"."+D,C)}),qt(z,F,k,!0,!0),[_s,Af,ks,Tf,Ms].forEach(function(D){var U=k.draw[D];U&&F.set(W.draw,"."+D,""+U.append(z,F))}),Object.keys(k.uniforms).forEach(function(D){var U=k.uniforms[D].append(z,F);Array.isArray(U)&&(U="["+U.join()+"]"),F.set(W.uniforms,"["+A.id(D)+"]",U)}),Object.keys(k.attributes).forEach(function(D){var U=k.attributes[D].append(z,F),C=z.scopeAttrib(D);Object.keys(new X).forEach(function(I){F.set(C,"."+I,U[I])})}),k.scopeVAO&&F.set(W.vao,".targetVAO",k.scopeVAO.append(z,F));function $(D){var U=k.shader[D];U&&F.set(W.shader,"."+D,U.append(z,F))}$(Vc),$(Xc),Object.keys(k.state).length>0&&(F(Y,".dirty=true;"),F.exit(Y,".dirty=true;")),F("a1(",z.shared.context,",a0,",z.batchId,");")}function Q(z){if(!(typeof z!="object"||sn(z))){for(var k=Object.keys(z),F=0;F<k.length;++F)if(Re.isDynamic(z[k[F]]))return!0;return!1}}function Ye(z,k,F){var W=k.static[F];if(!W||!Q(W))return;var Y=z.global,$=Object.keys(W),D=!1,U=!1,C=!1,I=z.global.def("{}");$.forEach(function(j){var K=W[j];if(Re.isDynamic(K)){typeof K=="function"&&(K=W[j]=Re.unbox(K));var fe=$r(K,null);D=D||fe.thisDep,C=C||fe.propDep,U=U||fe.contextDep}else{switch(Y(I,".",j,"="),typeof K){case"number":Y(K);break;case"string":Y('"',K,'"');break;case"object":Array.isArray(K)&&Y("[",K.join(),"]");break;default:Y(z.link(K));break}Y(";")}});function L(j,K){$.forEach(function(fe){var ue=W[fe];if(Re.isDynamic(ue)){var ce=j.invoke(K,ue);K(I,".",fe,"=",ce,";")}})}k.dynamic[F]=new Re.DynamicVariable(Ef,{thisDep:D,contextDep:U,propDep:C,ref:I,append:L}),delete k.static[F]}function Kt(z,k,F,W,Y){var $=Tt();$.stats=$.link(Y),Object.keys(k.static).forEach(function(U){Ye($,k,U)}),E4.forEach(function(U){Ye($,z,U)});var D=vn(z,k,F,W,$);return ln($,D),ne($,D),N($,D),t($.compile(),{destroy:function(){D.shader.program.destroy()}})}return{next:We,current:ge,procs:function(){var z=Tt(),k=z.proc("poll"),F=z.proc("refresh"),W=z.block();k(W),F(W);var Y=z.shared,$=Y.gl,D=Y.next,U=Y.current;W(U,".dirty=false;"),kn(z,k),kn(z,F,null,!0);var C;Ae&&(C=z.link(Ae)),O.oes_vertex_array_object&&F(z.link(O.oes_vertex_array_object),".bindVertexArrayOES(null);");for(var I=0;I<oe.maxAttributes;++I){var L=F.def(Y.attributes,"[",I,"]"),j=z.cond(L,".buffer");j.then($,".enableVertexAttribArray(",I,");",$,".bindBuffer(",N0,",",L,".buffer.buffer);",$,".vertexAttribPointer(",I,",",L,".size,",L,".type,",L,".normalized,",L,".stride,",L,".offset);").else($,".disableVertexAttribArray(",I,");",$,".vertexAttrib4f(",I,",",L,".x,",L,".y,",L,".z,",L,".w);",L,".buffer=null;"),F(j),Ae&&F(C,".vertexAttribDivisorANGLE(",I,",",L,".divisor);")}return F(z.shared.vao,".currentVAO=null;",z.shared.vao,".setVAO(",z.shared.vao,".targetVAO);"),Object.keys(Oe).forEach(function(K){var fe=Oe[K],ue=W.def(D,".",K),ce=z.block();ce("if(",ue,"){",$,".enable(",fe,")}else{",$,".disable(",fe,")}",U,".",K,"=",ue,";"),F(ce),k("if(",ue,"!==",U,".",K,"){",ce,"}")}),Object.keys(xe).forEach(function(K){var fe=xe[K],ue=ge[K],ce,Se,lt=z.block();if(lt($,".",fe,"("),sn(ue)){var Ht=ue.length;ce=z.global.def(D,".",K),Se=z.global.def(U,".",K),lt(Wt(Ht,function(Je){return ce+"["+Je+"]"}),");",Wt(Ht,function(Je){return Se+"["+Je+"]="+ce+"["+Je+"];"}).join("")),k("if(",Wt(Ht,function(Je){return ce+"["+Je+"]!=="+Se+"["+Je+"]"}).join("||"),"){",lt,"}")}else ce=W.def(D,".",K),Se=W.def(U,".",K),lt(ce,");",U,".",K,"=",ce,";"),k("if(",ce,"!==",Se,"){",lt,"}");F(lt)}),z.compile()}(),compile:Kt}}function j4(){return{vaoCount:0,bufferCount:0,elementsCount:0,framebufferCount:0,shaderCount:0,textureCount:0,cubeCount:0,renderbufferCount:0,maxTextureUnits:0}}var W4=34918,V4=34919,km=35007,X4=function(x,A){if(!A.ext_disjoint_timer_query)return null;var O=[];function oe(){return O.pop()||A.ext_disjoint_timer_query.createQueryEXT()}function he(Ae){O.push(Ae)}var ee=[];function re(Ae){var Ue=oe();A.ext_disjoint_timer_query.beginQueryEXT(km,Ue),ee.push(Ue),_e(ee.length-1,ee.length,Ae)}function we(){A.ext_disjoint_timer_query.endQueryEXT(km)}function ke(){this.startQueryIndex=-1,this.endQueryIndex=-1,this.sum=0,this.stats=null}var Te=[];function Ee(){return Te.pop()||new ke}function ze(Ae){Te.push(Ae)}var Ge=[];function _e(Ae,Ue,ge){var We=Ee();We.startQueryIndex=Ae,We.endQueryIndex=Ue,We.sum=0,We.stats=ge,Ge.push(We)}var Ne=[],X=[];function ae(){var Ae,Ue,ge=ee.length;if(ge!==0){X.length=Math.max(X.length,ge+1),Ne.length=Math.max(Ne.length,ge+1),Ne[0]=0,X[0]=0;var We=0;for(Ae=0,Ue=0;Ue<ee.length;++Ue){var ye=ee[Ue];A.ext_disjoint_timer_query.getQueryObjectEXT(ye,V4)?(We+=A.ext_disjoint_timer_query.getQueryObjectEXT(ye,W4),he(ye)):ee[Ae++]=ye,Ne[Ue+1]=We,X[Ue+1]=Ae}for(ee.length=Ae,Ae=0,Ue=0;Ue<Ge.length;++Ue){var Oe=Ge[Ue],xe=Oe.startQueryIndex,Pe=Oe.endQueryIndex;Oe.sum+=Ne[Pe]-Ne[xe];var vt=X[xe],Nt=X[Pe];Nt===vt?(Oe.stats.gpuTime+=Oe.sum/1e6,ze(Oe)):(Oe.startQueryIndex=vt,Oe.endQueryIndex=Nt,Ge[Ae++]=Oe)}Ge.length=Ae}}return{beginQuery:re,endQuery:we,pushScopeStats:_e,update:ae,getNumPendingQueries:function(){return ee.length},clear:function(){O.push.apply(O,ee);for(var Ae=0;Ae<O.length;Ae++)A.ext_disjoint_timer_query.deleteQueryEXT(O[Ae]);ee.length=0,O.length=0},restore:function(){ee.length=0,O.length=0}}},Y4=16384,K4=256,Q4=1024,Z4=34962,Em="webglcontextlost",Sm="webglcontextrestored",Am=1,J4=2,e_=3;function Tm(x,A){for(var O=0;O<x.length;++O)if(x[O]===A)return O;return-1}function t_(x){var A=kt(x);if(!A)return null;var O=A.gl,oe=O.getContextAttributes(),he=O.isContextLost(),ee=St(O,A);if(!ee)return null;var re=it(),we=j4(),ke=ee.extensions,Te=X4(O,ke),Ee=Ce(),ze=O.drawingBufferWidth,Ge=O.drawingBufferHeight,_e={tick:0,time:0,viewportWidth:ze,viewportHeight:Ge,framebufferWidth:ze,framebufferHeight:Ge,drawingBufferWidth:ze,drawingBufferHeight:Ge,pixelRatio:A.pixelRatio},Ne={},X={elements:null,primitive:4,count:-1,offset:0,instances:-1},ae=$5(O,ke),Ae=ow(O,we,A,ge),Ue=p4(O,ke,ae,we,Ae);function ge(bt){return Ue.destroyBuffer(bt)}var We=pw(O,ke,Ae,we),ye=x4(O,re,we,A),Oe=jw(O,ke,ae,function(){vt.procs.poll()},_e,we,A),xe=Ww(O,ke,ae,we,A),Pe=u4(O,ke,ae,Oe,xe,we),vt=U4(O,re,ke,ae,Ae,We,Oe,Pe,Ne,Ue,ye,X,_e,Te,A),Nt=w4(O,Pe,vt.procs.poll,_e,oe,ke,ae),$e=vt.next,Le=O.canvas,ve=[],Tt=[],$t=[],Ze=[A.onDestroy],Yt=null;function Pt(){if(ve.length===0){Te&&Te.update(),Yt=null;return}Yt=De.next(Pt),Jn();for(var bt=ve.length-1;bt>=0;--bt){var eo=ve[bt];eo&&eo(_e,null,0)}O.flush(),Te&&Te.update()}function jt(){!Yt&&ve.length>0&&(Yt=De.next(Pt))}function uo(){Yt&&(De.cancel(Pt),Yt=null)}function pn(bt){bt.preventDefault(),he=!0,uo(),Tt.forEach(function(eo){eo()})}function Nn(bt){O.getError(),he=!1,ee.restore(),ye.restore(),Ae.restore(),Oe.restore(),xe.restore(),Pe.restore(),Ue.restore(),Te&&Te.restore(),vt.procs.refresh(),jt(),$t.forEach(function(eo){eo()})}Le&&(Le.addEventListener(Em,pn,!1),Le.addEventListener(Sm,Nn,!1));function to(){ve.length=0,uo(),Le&&(Le.removeEventListener(Em,pn),Le.removeEventListener(Sm,Nn)),ye.clear(),Pe.clear(),xe.clear(),Oe.clear(),We.clear(),Ae.clear(),Ue.clear(),Te&&Te.clear(),Ze.forEach(function(bt){bt()})}function _n(bt){E(!!bt,"invalid args to regl({...})"),E.type(bt,"object","invalid args to regl({...})");function eo(Y){var $=t({},Y);delete $.uniforms,delete $.attributes,delete $.context,delete $.vao,"stencil"in $&&$.stencil.op&&($.stencil.opBack=$.stencil.opFront=$.stencil.op,delete $.stencil.op);function D(U){if(U in $){var C=$[U];delete $[U],Object.keys(C).forEach(function(I){$[U+"."+I]=C[I]})}}return D("blend"),D("depth"),D("cull"),D("stencil"),D("polygonOffset"),D("scissor"),D("sample"),"vao"in Y&&($.vao=Y.vao),$}function io(Y,$){var D={},U={};return Object.keys(Y).forEach(function(C){var I=Y[C];if(Re.isDynamic(I)){U[C]=Re.unbox(I,C);return}else if($&&Array.isArray(I)){for(var L=0;L<I.length;++L)if(Re.isDynamic(I[L])){U[C]=Re.unbox(I,C);return}}D[C]=I}),{dynamic:U,static:D}}var ln=io(bt.context||{},!0),Wa=io(bt.uniforms||{},!0),Ss=io(bt.attributes||{},!1),N=io(eo(bt),!1),ne={gpuTime:0,cpuTime:0,count:0},Q=vt.compile(N,Ss,Wa,ln,ne),Ye=Q.draw,Kt=Q.batch,z=Q.scope,k=[];function F(Y){for(;k.length<Y;)k.push(null);return k}function W(Y,$){var D;if(he&&E.raise("context lost"),typeof Y=="function")return z.call(this,null,Y,0);if(typeof $=="function")if(typeof Y=="number")for(D=0;D<Y;++D)z.call(this,null,$,D);else if(Array.isArray(Y))for(D=0;D<Y.length;++D)z.call(this,Y[D],$,D);else return z.call(this,Y,$,0);else if(typeof Y=="number"){if(Y>0)return Kt.call(this,F(Y|0),Y|0)}else if(Array.isArray(Y)){if(Y.length)return Kt.call(this,Y,Y.length)}else return Ye.call(this,Y)}return t(W,{stats:ne,destroy:function(){Q.destroy()}})}var Do=Pe.setFBO=_n({framebuffer:Re.define.call(null,Am,"framebuffer")});function vn(bt,eo){var io=0;vt.procs.poll();var ln=eo.color;ln&&(O.clearColor(+ln[0]||0,+ln[1]||0,+ln[2]||0,+ln[3]||0),io|=Y4),"depth"in eo&&(O.clearDepth(+eo.depth),io|=K4),"stencil"in eo&&(O.clearStencil(eo.stencil|0),io|=Q4),E(!!io,"called regl.clear with no buffer specified"),O.clear(io)}function Mn(bt){if(E(typeof bt=="object"&&bt,"regl.clear() takes an object as input"),"framebuffer"in bt)if(bt.framebuffer&&bt.framebuffer_reglType==="framebufferCube")for(var eo=0;eo<6;++eo)Do(t({framebuffer:bt.framebuffer.faces[eo]},bt),vn);else Do(bt,vn);else vn(null,bt)}function kn(bt){E.type(bt,"function","regl.frame() callback must be a function"),ve.push(bt);function eo(){var io=Tm(ve,bt);E(io>=0,"cannot cancel a frame twice");function ln(){var Wa=Tm(ve,ln);ve[Wa]=ve[ve.length-1],ve.length-=1,ve.length<=0&&uo()}ve[io]=ln}return jt(),{cancel:eo}}function Bn(){var bt=$e.viewport,eo=$e.scissor_box;bt[0]=bt[1]=eo[0]=eo[1]=0,_e.viewportWidth=_e.framebufferWidth=_e.drawingBufferWidth=bt[2]=eo[2]=O.drawingBufferWidth,_e.viewportHeight=_e.framebufferHeight=_e.drawingBufferHeight=bt[3]=eo[3]=O.drawingBufferHeight}function Jn(){_e.tick+=1,_e.time=qt(),Bn(),vt.procs.poll()}function cn(){Oe.refresh(),Bn(),vt.procs.refresh(),Te&&Te.update()}function qt(){return(Ce()-Ee)/1e3}cn();function er(bt,eo){E.type(eo,"function","listener callback must be a function");var io;switch(bt){case"frame":return kn(eo);case"lost":io=Tt;break;case"restore":io=$t;break;case"destroy":io=Ze;break;default:E.raise("invalid event, must be one of frame,lost,restore,destroy")}return io.push(eo),{cancel:function(){for(var ln=0;ln<io.length;++ln)if(io[ln]===eo){io[ln]=io[io.length-1],io.pop();return}}}}var yo=t(_n,{clear:Mn,prop:Re.define.bind(null,Am),context:Re.define.bind(null,J4),this:Re.define.bind(null,e_),draw:_n({}),buffer:function(bt){return Ae.create(bt,Z4,!1,!1)},elements:function(bt){return We.create(bt,!1)},texture:Oe.create2D,cube:Oe.createCube,renderbuffer:xe.create,framebuffer:Pe.create,framebufferCube:Pe.createCube,vao:Ue.createVAO,attributes:oe,frame:kn,on:er,limits:ae,hasExtension:function(bt){return ae.extensions.indexOf(bt.toLowerCase())>=0},read:Nt,destroy:to,_gl:O,_refresh:cn,poll:function(){Jn(),Te&&Te.update()},now:qt,stats:we});return A.onDone(null,yo),yo}return t_})});var As=me((KA,Qm)=>{"use strict";var ci=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],li=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],Xa=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],Wf=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],cl=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],Ad=e=>Math.hypot(e[0],e[1],e[2]),da=e=>{let t=Ad(e)||1;return[e[0]/t,e[1]/t,e[2]/t]};function $0(e,t){let o=e.length-1,n=Math.min(Math.max(t,0),1)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,i=e[Math.max(0,r-1)],s=e[r],c=e[r+1],l=e[Math.min(o,r+2)],f=[0,0,0];for(let u=0;u<3;u++)f[u]=.5*(2*s[u]+(-i[u]+c[u])*a+(2*i[u]-5*s[u]+4*c[u]-l[u])*a*a+(-i[u]+3*s[u]-3*c[u]+l[u])*a*a*a);return f}function x_(e,t){return $0(e.map(o=>[o,0,0]),t)[0]}function y_(e,t,o,n){let r={curMat:[0,0,0]},i={r:[1,0,0,0,1,0,0,0,1],t:[0,0,0],s:1},s=[];r.save=()=>{s.push({r:i.r.slice(),t:i.t.slice(),s:i.s})},r.restore=()=>{i=s.pop()};let c=(h,p)=>{let v=new Array(9);for(let d=0;d<3;d++)for(let m=0;m<3;m++)v[d*3+m]=h[d*3]*p[m]+h[d*3+1]*p[3+m]+h[d*3+2]*p[6+m];return v},l=h=>[i.r[0]*h[0]+i.r[1]*h[1]+i.r[2]*h[2],i.r[3]*h[0]+i.r[4]*h[1]+i.r[5]*h[2],i.r[6]*h[0]+i.r[7]*h[1]+i.r[8]*h[2]];r.translate=(h,p,v)=>{let d=l([h,p,v]);i.t=[i.t[0]+d[0]*i.s,i.t[1]+d[1]*i.s,i.t[2]+d[2]*i.s]},r.scale=h=>{i.s*=h},r.rotateY=h=>{let p=Math.cos(h),v=Math.sin(h);i.r=c(i.r,[p,0,v,0,1,0,-v,0,p])},r.vert=(h,p,v)=>{let d=v||r.curMat,m=l(h),g=da(l(p));return e.push(m[0]*i.s+i.t[0],m[1]*i.s+i.t[1],m[2]*i.s+i.t[2]),t.push(g[0],g[1],g[2]),n.push(d[0],d[1],d[2]),e.length/3-1};let f=h=>[e[h*3],e[h*3+1],e[h*3+2]],u=h=>[t[h*3],t[h*3+1],t[h*3+2]];return r.tri=(h,p,v)=>{let d=f(h),m=cl(ci(f(p),d),ci(f(v),d)),g=li(li(u(h),u(p)),u(v));Wf(m,g)<0?o.push(h,v,p):o.push(h,p,v)},r.box=(h,p,v,d,m,g,y)=>{let b=[[[h,p,v],[d,p,v],[h,m,v],[d,m,v],[0,0,-1]],[[d,p,g],[h,p,g],[d,m,g],[h,m,g],[0,0,1]],[[h,p,g],[h,p,v],[h,m,g],[h,m,v],[-1,0,0]],[[d,p,v],[d,p,g],[d,m,v],[d,m,g],[1,0,0]],[[h,m,v],[d,m,v],[h,m,g],[d,m,g],[0,1,0]],[[h,p,g],[d,p,g],[h,p,v],[d,p,v],[0,-1,0]]];for(let M of b){let w=r.vert(M[0],M[4],y),_=r.vert(M[1],M[4],y),S=r.vert(M[2],M[4],y),G=r.vert(M[3],M[4],y);r.tri(w,_,S),r.tri(_,G,S)}},r.surface=(h,p,v,d)=>{d=d||{};let m=.001,g=w=>Math.min(1,Math.max(0,w)),y=[],b=[];for(let w=0;w<=p;w++){let _=[],S=[];for(let G=0;G<=v;G++){let R=w/p,q=G/v,T=h(R,q),B=Math.min(1-m,Math.max(m,R)),P=d.wrapV?q:Math.min(1-m,Math.max(m,q)),H=ci(h(g(B+m),P),h(g(B-m),P)),se=d.wrapV?P+m:g(P+m),Z=d.wrapV?P-m:g(P-m),le=ci(h(B,se),h(B,Z)),ie=cl(H,le);Ad(ie)<1e-14&&(ie=d.inside?ci(T,d.inside(R,q)):[0,1,0]),ie=da(ie),d.inside&&Wf(ie,ci(T,d.inside(R,q)))<0&&(ie=Xa(ie,-1));let pe=d.mat?d.mat(R,q,T):null;_.push(r.vert(T,ie,pe)),d.double&&S.push(r.vert(T,Xa(ie,-1),pe))}y.push(_),b.push(S)}let M=w=>{for(let _=0;_<p;_++)for(let S=0;S<v;S++){let G=w[_][S],R=w[_+1][S],q=w[_][S+1],T=w[_+1][S+1];r.tri(G,R,q),r.tri(R,T,q)}};M(y),d.double&&M(b)},r.ellipsoid=(h,p,v,d,m)=>{m=m||{};let g=m.warp||null;r.surface((y,b)=>{let M=y*Math.PI,w=b*Math.PI*2,_=g?g(y,b):1;return[h[0]+p[0]*_*Math.sin(M)*Math.cos(w),h[1]+p[1]*_*Math.cos(M),h[2]+p[2]*_*Math.sin(M)*Math.sin(w)]},v||10,d||14,{wrapV:!0,inside:()=>h,mat:m.mat})},r.tube=(h,p,v,d,m)=>{m=m||{};let g=40,y=[],b=null;for(let _=0;_<=g;_++){let S=_/g,G=$0(h,Math.max(0,S-.01)),R=$0(h,Math.min(1,S+.01)),q=da(ci(R,G)),T;if(b)T=da(ci(b,Xa(q,Wf(b,q))));else{let B=Math.abs(q[1])<.9?[0,1,0]:[1,0,0];T=da(cl(q,B))}y.push({N:T,B:da(cl(q,T))}),b=T}let M=_=>{let S=Math.min(Math.max(_,0),1)*g,G=Math.min(g-1,Math.floor(S)),R=S-G,q=y[G],T=y[G+1];return{N:da(li(Xa(q.N,1-R),Xa(T.N,R))),B:da(li(Xa(q.B,1-R),Xa(T.B,R)))}},w=m.squash||[1,1];r.surface((_,S)=>{let G=$0(h,_),R=M(_),q=p(_),T=S*Math.PI*2;return li(G,li(Xa(R.N,Math.cos(T)*q*w[0]),Xa(R.B,Math.sin(T)*q*w[1])))},v||12,d||8,{wrapV:!0,inside:_=>$0(h,_),mat:m.mat})},r.lathe=(h,p,v,d,m)=>{m=m||{};let g=[];for(let y=0;y<h.length-1;y++){let b=h[y+1][0]-h[y][0],M=h[y+1][1]-h[y][1];g.push(da([M,-b,0]))}for(let y=0;y<h.length-1;y++){let b=h[y],M=h[y+1],w=y===0||b[2]===1,_=y===h.length-2||M[2]===1,S=w?g[y]:da(li(g[y-1],g[y])),G=_?g[y]:da(li(g[y],g[y+1])),R=[],q=[];for(let T=0;T<=d;T++){let B=T/d*Math.PI*2,P=Math.cos(B),H=Math.sin(B),se=m.mat?m.mat(B,b[1]):null,Z=m.mat?m.mat(B,M[1]):null;R.push(r.vert([p+b[0]*P,b[1],v+b[0]*H],[S[0]*P,S[1],S[0]*H],se)),q.push(r.vert([p+M[0]*P,M[1],v+M[0]*H],[G[0]*P,G[1],G[0]*H],Z))}for(let T=0;T<d;T++)r.tri(R[T],R[T+1],q[T]),r.tri(R[T+1],q[T+1],q[T])}},r}Qm.exports={createBuilder:y_,catmull:$0,curve1:x_,sub:ci,add:li,mul:Xa,dot:Wf,cross:cl,norm:da,len:Ad}});var t2=me((QA,e2)=>{"use strict";var{norm:Vf,add:Xf,mul:Pi,sub:b_,cross:Zm}=As(),Jm=Math.PI*2,w_=(e,t,o)=>{let n=Math.min(1,Math.max(0,(o-e)/(t-e)));return n*n*(3-2*n)};function __(e){let t=e>>>0;return()=>{t|=0,t=t+1831565813|0;let o=Math.imul(t^t>>>15,1|t);return o=o+Math.imul(o^o>>>7,61|o)^o,((o^o>>>14)>>>0)/4294967296}}function M_(e,t,o,n,r,a){let i=(h,p)=>[7,h*a,p];e.curMat=[0,0,0],e.box(t-a*1.36,n,o-a*1.36,t+a*1.36,n+.22,o+a*1.36),e.lathe([[a*1.24,n+.22,1],[a*1.3,n+.27],[a*1.31,n+.32],[a*1.26,n+.37,1],[a*1.1,n+.4],[a*1.14,n+.44,1],[a*1.18,n+.47],[a*1.1,n+.52,1],[a*.96,n+.55]],t,o,56,{mat:i});let s=n+.55,c=r-s,l=20,f=6,u=a*.075;return e.surface((h,p)=>{let v=s+h*c,d=a*(.96-.12*h),m=p*Jm,g=p*l%1,y=d-u*4*g*(1-g);return[t+y*Math.cos(m),v,o+y*Math.sin(m)]},10,l*f,{wrapV:!0,inside:h=>[t,s+h*c,o],mat:(h,p)=>[7,p*Jm*a,s+h*c]}),e.lathe([[a*.8,r-.02,1],[a*.9,r+.02],[a*.9,r+.07,1],[a*.82,r+.09,1],[a*.86,r+.13],[a*1.06,r+.2],[a*1.22,r+.28],[a*1.28,r+.33,1]],t,o,56,{mat:i}),e.curMat=[0,0,0],e.box(t-a*1.42,r+.33,o-a*1.42,t+a*1.42,r+.53,o+a*1.42),r+.53}function k_(e,t,o){e.curMat=[1,0,0],e.lathe([[t*1.1,0,1],[t*1.1,o*.14,1],[t*1.04,o*.14,1],[t*1.04,o*.2],[t*.97,o*.26,1],[t*.95,o*.26,1],[t*.95,o*.8,1],[t*.98,o*.8,1],[t*1.03,o*.86],[t*1.05,o*.92,1],[t*1.05,o,1],[t*.5,o,1],[0,o]],0,0,72)}function E_(e,t,o,n,r){e.save(),e.translate(t,0,o),k_(e,n,r),e.restore()}function S_(e,t,o,n,r,a){let i=__(n),s=a?Vf([a[0],0,a[1]]):null;e.save(),e.translate(t,0,o),e.scale(r||1),e.curMat=[3,0,0],e.lathe([[.17,0,1],[.2,.02],[.28,.13],[.36,.3],[.395,.47],[.38,.62],[.32,.74],[.29,.8],[.292,.82,1],[.325,.84],[.335,.88,1],[.3,.905,1],[.275,.895,1],[.272,.85]],0,0,48),e.curMat=[5,0,0],e.lathe([[.272,.85,1],[.1,.868],[0,.872]],0,0,24);let c=11,l=.86;for(let f=0;f<c;f++){let u=f>=c-2,h=f*2.399963+i()*.5,p=[Math.cos(h),0,Math.sin(h)],v=[-Math.sin(h),0,Math.cos(h)],d=f*.618%1,m=u?.06+i()*.06:.12+.62*d,g=1;if(s){let ie=p[0]*s[0]+p[2]*s[2];g=.25+.75*w_(-.7,.5,ie),m*=g}let y=u?1.1+i()*.25:.85+.55*(1-d*.55)+i()*.15,b=u?1+i()*.2:.95+i()*.28,M=u?.055:.215+i()*.05,w=.04+i()*.05,_=[p[0]*w,l,p[2]*w],S=[_[0]+p[0]*Math.sin(m)*y*.92,_[1]+Math.cos(m)*y,_[2]+p[2]*Math.sin(m)*y*.92],G=[_[0]+p[0]*Math.sin(m*.5)*y*.45,_[1]+y*.5,_[2]+p[2]*Math.sin(m*.5)*y*.45];e.curMat=[4,0,0],e.tube([_,G,S],ie=>.02-.008*ie,8,7);let R=24,q=m*.9+.05,T=m+(u?.12:(.95+.45*d)*(.35+.65*g)),B=[S],P=[],H=S;for(let ie=0;ie<R;ie++){let pe=ie/R,Qe=q+(T-q)*pe*pe,wt=[p[0]*Math.sin(Qe),Math.cos(Qe),p[2]*Math.sin(Qe)];P.push(wt),H=Xf(H,Pi(wt,b/R)),B.push(H)}P.push(P[P.length-1]);let se=ie=>{let pe=ie*R,Qe=Math.min(R-1,Math.floor(pe)),wt=pe-Qe;return Xf(Pi(B[Qe],1-wt),Pi(B[Qe+1],wt))},Z=ie=>{let pe=ie*R,Qe=Math.min(R,Math.floor(pe)),wt=Math.min(R,Qe+1),Fe=pe-Qe;return Vf(Xf(Pi(P[Qe],1-Fe),Pi(P[wt],Fe)))},le=(i()-.5)*.5;e.curMat=[2,0,0],e.surface((ie,pe)=>{let Qe=pe*2-1,wt=se(ie),Fe=Z(ie),st=le*ie,yt=Xf(Pi(v,Math.cos(st)),Pi(Zm(Fe,v),Math.sin(st)));yt=Vf(b_(yt,Pi(Fe,yt[0]*Fe[0]+yt[1]*Fe[1]+yt[2]*Fe[2])));let Bt=Vf(Zm(yt,Fe)),Zt=M*Math.pow(Math.sin(Math.PI*Math.pow(ie,.72)),.85),Oo=.3*Zt*Math.abs(Qe)+.012*Math.sin(ie*40+Qe*2)*Math.abs(Qe)*(u?0:1),Be=-.1*Zt*Qe*Qe*Qe*Qe,ct=Oo+Be;return[wt[0]+yt[0]*Qe*Zt+Bt[0]*ct,wt[1]+yt[1]*Qe*Zt+Bt[1]*ct,wt[2]+yt[2]*Qe*Zt+Bt[2]*ct]},14,8,{double:!0,mat:(ie,pe)=>[2,pe*2-1,ie]})}e.restore()}e2.exports={addFlutedColumn:M_,addStatue:E_,addPlant:S_}});var Ii=me((ZA,a2)=>{"use strict";var Me={xc:7,r:2.5,spring:4.7};Me.x0=Me.xc-Me.r;Me.x1=Me.xc+Me.r;Me.top=Me.spring+Me.r;var Lr=.06,Uo=.1,o2=.08,Yf=Me.r,Kf=[Me.x0+Yf/3,Me.x0+2*Yf/3,Me.xc+Yf/3,Me.xc+2*Yf/3],q0=.28,Td=[.95,1.65,2.35,3.05,3.75],n2=[1.05,1.8],ll=[8,0,0],Kr=[0,0,0];function pa(e,t,o,n,r,a,i,s){e.box(Math.min(t,r),Math.min(o,a),Math.min(n,i),Math.max(t,r),Math.max(o,a),Math.max(n,i),s)}function H0(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),l=e.vert(n,a,i),f=e.vert(r,a,i);e.tri(s,c,l),e.tri(s,l,f)}function Qf(e,t,o,n,r,a,i=48,s=0,c=Math.PI){let l=(f,u,h)=>[Me.xc+u*Math.cos(f),Me.spring+u*Math.sin(f),h];for(let f=0;f<i;f++){let u=s+(c-s)*f/i,h=s+(c-s)*(f+1)/i,p=(u+h)/2;H0(e,l(u,t,r),l(h,t,r),l(h,o,r),l(u,o,r),[0,0,1],a),H0(e,l(u,o,n),l(h,o,n),l(h,t,n),l(u,t,n),[0,0,-1],a),H0(e,l(u,t,n),l(h,t,n),l(h,t,r),l(u,t,r),[-Math.cos(p),-Math.sin(p),0],a),H0(e,l(h,o,n),l(u,o,n),l(u,o,r),l(h,o,r),[Math.cos(p),Math.sin(p),0],a)}}function A_(e){let n=a=>[Me.xc+Me.r*Math.cos(a),Me.spring+Me.r*Math.sin(a)],r=a=>{let i=Math.cos(a),s=Math.sin(a),c=Math.abs(i)>1e-6?Me.r/Math.abs(i):1/0,l=s>1e-6?(8-Me.spring)/s:1/0,f=Math.min(c,l);return[Math.min(Me.x1,Math.max(Me.x0,Me.xc+i*f)),Math.min(8,Me.spring+s*f)]};for(let a=0;a<48;a++){let i=Math.PI*a/48,s=Math.PI*(a+1)/48,c=n(i),l=n(s),f=r(i),u=r(s);for(let[p,v]of[[.35,1],[-.35,-1]])H0(e,[c[0],c[1],p],[l[0],l[1],p],[u[0],u[1],p],[f[0],f[1],p],[0,0,v],Kr);let h=(i+s)/2;H0(e,[c[0],c[1],-.35],[l[0],l[1],-.35],[l[0],l[1],.35],[c[0],c[1],.35],[-Math.cos(h),-Math.sin(h),0],Kr)}}function T_(e){pa(e,-.35,0,-.35,Me.x0,8,.35,Kr),pa(e,Me.x1,0,-.35,14+.35,8,.35,Kr),A_(e),r2(e)}function r2(e){pa(e,Me.x0-.32,.3,.35,Me.x0,Me.spring,.35+.07,Kr),pa(e,Me.x1,.3,.35,Me.x1+.32,Me.spring,.35+.07,Kr),pa(e,Me.x0-.32-.05,0,.35,Me.x0,.3,.35+.07+.04,Kr),pa(e,Me.x1,0,.35,Me.x1+.32+.05,.3,.35+.07+.04,Kr),pa(e,Me.x0-.32-.06,Me.spring-.12,.35,Me.x0,Me.spring,.35+.07+.05,Kr),pa(e,Me.x1,Me.spring-.12,.35,Me.x1+.32+.06,Me.spring,.35+.07+.05,Kr),Qf(e,Me.r,Me.r+.32,.35,.35+.07,Kr),Qf(e,Me.r+.32,Me.r+.32+.06,.35,.35+.07+.03,Kr),pa(e,Me.xc-.22,Me.top-.08,.35,Me.xc+.22,Me.top+.32+.12,.35+.07+.06,Kr)}function L_(e,t){t=t||"all";let o=t==="all",n=o||t==="fixed",r=-o2/2,a=o2/2,i=(h,p,v,d,m=0)=>pa(e,h-m,p,r,v+m,d,a,ll),s=h=>Me.spring+Math.sqrt(Math.max(0,Me.r*Me.r-(h-Me.xc)*(h-Me.xc))),c=t==="right"?Me.xc:Me.x0,l=t==="left"?Me.xc:Me.x1,f=h=>o||t==="left"&&h<Me.xc||t==="right"&&h>Me.xc,u=o?null:Me.spring-.06;if(n){i(Me.x0,0,Me.x0+Uo,Me.spring),i(Me.x1-Uo,0,Me.x1,Me.spring),Qf(e,Me.r-Uo,Me.r,r,a,ll,64),i(Me.x0,0,Me.x1,.05),i(Me.x0,Me.spring-.06,Me.x1,Me.spring+.06);for(let h of n2)Qf(e,h-Lr/2,h+Lr/2,r,a,ll,48)}if(o){i(Me.x0,0,Me.x1,q0),i(Me.xc-Uo/2,0,Me.xc+Uo/2,Me.top-Uo*.5);for(let h of Kf)i(h-Lr/2,q0,h+Lr/2,s(h)-Uo*.5);for(let h of Td)i(Me.x0,h-Lr/2,Me.x1,h+Lr/2)}else if(t==="fixed"){i(Me.xc-Uo/2,Me.spring+.06,Me.xc+Uo/2,Me.top-Uo*.5);for(let h of Kf)i(h-Lr/2,Me.spring+.06,h+Lr/2,s(h)-Uo*.5)}else{let h=t==="left"?Me.x0+Uo:Me.x1-Uo;i(Math.min(h,h+(t==="left"?Uo*.8:-Uo*.8)),.05,Math.max(h,h+(t==="left"?Uo*.8:-Uo*.8)),u),i(c,.05,l,q0),i(c,u-.07,l,u);let p=t==="left"?Me.xc-Uo/2:Me.xc;i(p,.05,p+Uo/2,u);for(let v of Kf)f(v)&&i(v-Lr/2,q0,v+Lr/2,u-.07);for(let v of Td)i(c,v-Lr/2,l,v+Lr/2)}for(let h of[-1,1]){let p=Me.xc+h*.16;f(p)&&(pa(e,p-.02,1.05,a,p+.02,1.13,a+.06,ll),pa(e,p-(h>0?0:.14),1.07,a+.05,p+(h>0?.14:0),1.11,a+.08,ll))}}function z_(e){e=e||"all";let t=[],o=0,{x0:n,x1:r,xc:a,r:i,spring:s}=Me;if(e!=="fixed"){let l=e==="right"?a:n,f=e==="left"?a:r;if(t.push([l,0,o],[f,0,o],[f,s,o],[l,0,o],[f,s,o],[l,s,o]),e!=="all")return t}let c=48;for(let l=0;l<c;l++){let f=Math.PI*l/c,u=Math.PI*(l+1)/c;t.push([a,s,o],[a+i*Math.cos(f),s+i*Math.sin(f),o],[a+i*Math.cos(u),s+i*Math.sin(u),o])}return t}var Ao=e=>e.toFixed(4);function C_(){let e=Kf.map(n=>`vb = max(vb, barCover(abs(q.x - ${Ao(n)}), ${Ao(Lr/2)}, soft));`).join(`
		`),t=Td.map(n=>`hb = max(hb, barCover(abs(q.y - ${Ao(n)}), ${Ao(Lr/2)}, soft));`).join(`
		`),o=n2.map(n=>`ab = max(ab, barCover(abs(rr - ${Ao(n)}), ${Ao(Lr/2)}, soft));`).join(`
		`);return`
	float barCover(float d, float hw, float soft) {
		return 1.0 - smoothstep(hw - soft, hw + soft, d);
	}

	// how open the doorway is at a point (x, y) on a plane, 0..1
	float doorOpen(vec2 q, float soft) {
		float side = smoothstep(${Ao(Me.x0)} - soft, ${Ao(Me.x0)} + soft, q.x)
		           * (1.0 - smoothstep(${Ao(Me.x1)} - soft, ${Ao(Me.x1)} + soft, q.x));
		float above = smoothstep(-soft, soft, q.y);
		float rr = length(q - vec2(${Ao(Me.xc)}, ${Ao(Me.spring)}));
		float arch = q.y < ${Ao(Me.spring)} ? 1.0 : 1.0 - smoothstep(${Ao(Me.r)} - soft, ${Ao(Me.r)} + soft, rr);
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
		float rr = length(q - vec2(${Ao(Me.xc)}, ${Ao(Me.spring)}));
		float vb = barCover(abs(q.x - ${Ao(Me.xc)}), ${Ao(Uo/2)}, soft);
		${e}
		float hb = barCover(abs(q.y - ${Ao(Me.spring)}), 0.06, soft);
		hb = max(hb, 1.0 - smoothstep(${Ao(q0)} - soft, ${Ao(q0)} + soft, q.y));
		float hRows = 0.0;
		{
			float hb2 = 0.0;
			${t.replace(/hb = max\(hb,/g,"hb2 = max(hb2,")}
			hRows = q.y < ${Ao(Me.spring)} ? hb2 : 0.0;
		}
		float ab = 0.0;
		${o}
		ab = q.y > ${Ao(Me.spring)} ? ab : 0.0;
		float frame = max(
			barCover(abs(q.x - ${Ao(Me.x0+Uo/2)}), ${Ao(Uo/2)}, soft),
			barCover(abs(q.x - ${Ao(Me.x1-Uo/2)}), ${Ao(Uo/2)}, soft));
		frame = q.y < ${Ao(Me.spring)} ? frame : barCover(abs(rr - ${Ao(Me.r-Uo/2)}), ${Ao(Uo/2)}, soft);
		float cover = max(max(max(vb, hb), max(hRows, ab)), frame);
		return open * (1.0 - cover * 0.92);
	}`}a2.exports={addEntranceWall:T_,addSurround:r2,addFrames:L_,glassPanes:z_,doorLightGLSL:C_,DOOR:Me,WALL:.35}});var U0=me((JA,h2)=>{"use strict";var Ls=1.1583333333333334,zs=(13.05-8*.16)/9,zd=Ls+.16,Cd=zs+.16,hi=14/2-7.75/2,Qr=15,fl=hi+7.75,fi=Qr+13.05,Zr=.3,ui={y:8+.18,inset:.15},Ts={y:8+.36,inset:Zr},Nd=8+.2,hl=8+.62,Rd=8+.9,Od=.016,l2=.28,f2=.66,N_=(()=>{let e=[-.15,1,.3],t=Math.hypot(e[0],e[1],e[2]);return e.map(o=>o/t)})(),R_=(()=>{let e=[.42,1,-.32],t=Math.hypot(e[0],e[1],e[2]);return e.map(o=>o/t)})(),O_=[9,0,0],tr=[10,0,0];function B0(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),l=e.vert(n,a,i),f=e.vert(r,a,i);e.tri(s,c,l),e.tri(s,l,f)}function zr(e,t,o,n,r,a,i){B0(e,[t,a,o],[n,a,o],[n,a,r],[t,a,r],[0,-1,0],i)}function Ld(e,t,o,n,r,a,i,s){B0(e,[t,a,o],[n,a,o],[n,i,o],[t,i,o],[0,0,1],s),B0(e,[n,a,r],[t,a,r],[t,i,r],[n,i,r],[0,0,-1],s),B0(e,[t,a,r],[t,a,o],[t,i,o],[t,i,r],[1,0,0],s),B0(e,[n,a,o],[n,a,r],[n,i,r],[n,i,o],[-1,0,0],s)}function i2(e,t,o,n,r){zr(e,t[0],t[1],t[2],o[1],n,r),zr(e,t[0],o[3],t[2],t[3],n,r),zr(e,t[0],o[1],o[0],o[3],n,r),zr(e,o[2],o[1],t[2],o[3],n,r)}var s2=e=>hi+e*zd,c2=e=>Qr+e*Cd;function P_(e,t,o=48){let n=[hi-Zr,Qr-Zr,fl+Zr,fi+Zr],r=(l,f)=>[l[0]+f,l[1]+f,l[2]-f,l[3]-f],a=r(n,ui.inset),i=r(n,Ts.inset);zr(e,0,0,14,n[1],8,t),zr(e,0,n[3],14,o,8,t),zr(e,0,n[1],n[0],n[3],8,t),zr(e,n[2],n[1],14,n[3],8,t);let s=.06,c=.06;e.box(n[0]-s,8-c,n[1]-s,n[2]+s,8,n[1],tr),e.box(n[0]-s,8-c,n[3],n[2]+s,8,n[3]+s,tr),e.box(n[0]-s,8-c,n[1],n[0],8,n[3],tr),e.box(n[2],8-c,n[1],n[2]+s,8,n[3],tr),Ld(e,...n.slice(0,2),...n.slice(2),8,ui.y,tr),i2(e,n,a,ui.y,tr),Ld(e,...a.slice(0,2),...a.slice(2),ui.y,Ts.y,tr),i2(e,a,i,Ts.y,tr);for(let l=1;l<6;l++){let f=s2(l)-.16;e.box(f,Nd,Qr,f+.16,Ts.y,fi,tr)}for(let l=1;l<9;l++){let f=c2(l)-.16;e.box(hi,Nd,f,fl,Ts.y,f+.16,tr)}for(let l=0;l<9;l++)for(let f=0;f<6;f++){let u=s2(f),h=c2(l);Ld(e,u,h,u+Ls,h+zs,Ts.y,Rd,tr),zr(e,u,h,u+Ls,h+zs,Rd,O_),I_(e,u+Ls/2,h+zs/2,Ls/2,zs/2)}}function I_(e,t,o,n,r){let a=hl,i=Od;zr(e,t-n,o-i,t+n,o+i,a,tr),zr(e,t-i,o-r,t+i,o+r,a,tr);for(let s of[1,-1]){let c=Math.hypot(n,r),l=n/c,f=s*r/c,u=-f*i,h=l*i;B0(e,[t-l*c+u,a,o-f*c+h],[t+l*c+u,a,o+f*c+h],[t+l*c-u,a,o+f*c-h],[t-l*c-u,a,o-f*c-h],[0,-1,0],tr)}for(let s of[l2,f2]){let c=s*n,l=s*r;zr(e,t-c-i,o-l-i,t+c+i,o-l+i,a,tr),zr(e,t-c-i,o+l-i,t+c+i,o+l+i,a,tr),zr(e,t-c-i,o-l+i,t-c+i,o+l-i,a,tr),zr(e,t+c-i,o-l+i,t+c+i,o+l-i,a,tr)}}var Ft=e=>e.toFixed(4);function F_(){return`
	// by day the sun, high and a little towards the entrance; by night
	// the moon, lower and from the other side, so its squares of light
	// reach across the floor to the foot of the wall. (When the light is
	// switched, the squares slide from one to the other.)
	const vec3 SKY_SUN_DAY = vec3(${N_.map(Ft).join(", ")});
	const vec3 SKY_MOON = vec3(${R_.map(Ft).join(", ")});
	vec3 skySun() { return normalize(mix(SKY_SUN_DAY, SKY_MOON, night)); }
	#define SKY_SUN skySun()

	float rectOpen(vec2 q, vec4 r, float soft) {
		vec2 lo = smoothstep(r.xy - soft, r.xy + soft, q);
		vec2 hi = 1.0 - smoothstep(r.zw - soft, r.zw + soft, q);
		return lo.x * lo.y * hi.x * hi.y;
	}

	// inside a pane (not on a beam)? 0..1
	float paneOpen(vec2 q, float soft) {
		vec2 rel = q - vec2(${Ft(hi)}, ${Ft(Qr)});
		vec2 pitch = vec2(${Ft(zd)}, ${Ft(Cd)});
		vec2 cell = floor(rel / pitch);
		if (cell.x < 0.0 || cell.y < 0.0 || cell.x > ${Ft(5)} || cell.y > ${Ft(8)}) return 0.0;
		vec2 loc = rel - cell * pitch;
		return rectOpen(loc, vec4(0.0, 0.0, ${Ft(Ls)}, ${Ft(zs)}), soft);
	}

	float barCov(float d, float soft) {
		return 1.0 - smoothstep(${Ft(Od)} - soft, ${Ft(Od)} + soft, d);
	}

	// sunlight reaching point p through the skylight, 0..1
	float skylightAt(vec3 p) {
		if (p.y > ${Ft(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q0 = (p + L * ((${Ft(8)} - p.y) / L.y)).xz;
		vec2 q1 = (p + L * ((${Ft(ui.y)} - p.y) / L.y)).xz;
		vec2 qb = (p + L * ((${Ft(Nd)} - p.y) / L.y)).xz;
		vec2 q2 = (p + L * ((${Ft(Ts.y)} - p.y) / L.y)).xz;
		float tG = (${Ft(hl)} - p.y) / L.y;
		vec2 qg = (p + L * tG).xz;
		vec2 qt = (p + L * ((${Ft(Rd)} - p.y) / L.y)).xz;
		float soft = 0.004 + 0.007 * tG;
		float open = rectOpen(q0, vec4(${Ft(hi-Zr)}, ${Ft(Qr-Zr)}, ${Ft(fl+Zr)}, ${Ft(fi+Zr)}), soft)
		           * rectOpen(q1, vec4(${Ft(hi-Zr+ui.inset)}, ${Ft(Qr-Zr+ui.inset)}, ${Ft(fl+Zr-ui.inset)}, ${Ft(fi+Zr-ui.inset)}), soft)
		           * paneOpen(qb, soft) * paneOpen(q2, soft) * paneOpen(qt, soft);
		if (open <= 0.0) return 0.0;
		// the glazing, measured from the centre of this pane
		vec2 rel = qg - vec2(${Ft(hi)}, ${Ft(Qr)});
		vec2 pitch = vec2(${Ft(zd)}, ${Ft(Cd)});
		vec2 paneHalf = vec2(${Ft(Ls/2)}, ${Ft(zs/2)});
		vec2 c = rel - floor(rel / pitch) * pitch - paneHalf;
		vec2 ac = abs(c);
		vec2 an = ac / paneHalf;                       // 0 at the centre, 1 at the pane's edge
		float hm = min(paneHalf.x, paneHalf.y);
		float ring = max(an.x, an.y);
		float cover = max(barCov(ac.x, soft), barCov(ac.y, soft));
		cover = max(cover, barCov(abs(an.x - an.y) * hm * 0.7071, soft));
		cover = max(cover, barCov(abs(ring - ${Ft(l2)}) * hm, soft));
		cover = max(cover, barCov(abs(ring - ${Ft(f2)}) * hm, soft));
		return open * (1.0 - cover * 0.9);
	}

	// the same light for the beams in the air: the whole opening glows a
	// little, and the panes and bars show in it, softly
	float skylightVol(vec3 p) {
		if (p.y > ${Ft(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q = (p + L * ((${Ft(hl)} - p.y) / L.y)).xz;
		float open = rectOpen(q, vec4(${Ft(hi)}, ${Ft(Qr)}, ${Ft(fl)}, ${Ft(fi)}), 0.25);
		if (open <= 0.0) return 0.0;
		return open * (0.13 + 0.87 * skylightAt(p));
	}

	// light thrown back up by the bright squares on the floor: strongest
	// on what stands beside them and faces them (the lower walls, the
	// pillars, the statues, the ceiling above), fading with distance
	float skylightBounce(vec3 p, vec3 n) {
		if (p.x > 14.2 || p.x < -0.4) return 0.0;
		vec3 L = SKY_SUN;
		vec2 c = vec2(${Ft(14/2)}, ${Ft((Qr+fi)/2)}) - L.xz * (${Ft(hl)} / L.y);
		vec2 d = max(abs(p.xz - c) - vec2(${Ft(7.75/2)}, ${Ft(13.05/2)}), 0.0);
		float fall = 1.0 / (1.0 + 0.09 * (dot(d, d) + p.y * p.y * 0.6));
		vec3 to = normalize(vec3(c.x, -0.4, c.y) - p);
		return fall * (0.3 + 0.7 * max(dot(n, to), 0.0));
	}

	// a soft daylight glow under the lantern
	float skylightGlow(vec3 p) {
		float z = smoothstep(${Ft(Qr-3)}, ${Ft(Qr+2)}, p.z)
		        * (1.0 - smoothstep(${Ft(fi-2)}, ${Ft(fi+3)}, p.z));
		float x = 1.0 - 0.35 * smoothstep(${Ft(7.75/2)}, ${Ft(14/2)}, abs(p.x - ${Ft(14/2)}));
		return z * x;
	}`}h2.exports={addSkylight:P_,skylightGLSL:F_,Z_START:Qr,Z_END:fi,GLASS_Y:hl,HEIGHT:8}});var or=me((eT,m2)=>{"use strict";var W0=Ii(),Dd=8,jo=.35,He={x0:13.65,x1:38.12,z0:41,z1:47.2,zc:44.1,hallEnd:50.65,spring:5.6,crown:Dd},u2=(He.z1-He.z0)/2,Pd=He.crown-He.spring,Fd=(Pd*Pd+u2*u2)/(2*Pd),Gd=He.crown-Fd;function j0(e){let t=e-He.zc;return Gd+Math.sqrt(Math.max(0,Fd*Fd-t*t))}var At={first:17.43,pitch:4.4,count:5,halfW:1.2,sill:.75,spring:4.3},Ta=Array.from({length:At.count},(e,t)=>At.first+t*At.pitch),p2=Ta.slice(1).map(e=>e-At.pitch/2),D_=[Ta[0],Ta[2],Ta[4]],Jf=[Ta[1],Ta[3]],qr={r:1.3,sill:.62,spring:3.3},No=[0,0,0],ul=[11,0,0],Fi=[10,0,0],dl=[8,0,0];function Un(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),l=e.vert(n,a,i),f=e.vert(r,a,i);e.tri(s,c,l),e.tri(s,l,f)}function Hr(e,t,o,n,r,a,i,s){e.box(Math.min(t,r),Math.min(o,a),Math.min(n,i),Math.max(t,r),Math.max(o,a),Math.max(n,i),s)}function pl(e,t){let{u0:o,u1:n,w0:r,w1:a,top:i,holes:s,mat:c}=t,l=new Set([o,n]);for(let d of s){l.add(d.u0),l.add(d.u1);let m=Math.max(8,Math.ceil((d.u1-d.u0)/(d.step||.08)));for(let g=1;g<m;g++)l.add(d.u0+(d.u1-d.u0)*g/m)}for(let d of t.cuts||[])l.add(d);let f=t.topStep||.5;for(let d=o;d<n;d+=f)l.add(d);let u=[...l].filter(d=>d>=o-1e-9&&d<=n+1e-9).sort((d,m)=>d-m),h=(d,m)=>d.bot?d.bot(m):d.bottom,p=(d,m)=>{let g=i(d),y=m.map(w=>[Math.max(0,h(w,d)),Math.min(w.head(d),g)]).filter(w=>w[1]>w[0]).sort((w,_)=>w[0]-_[0]),b=[],M=0;for(let w of y)w[0]>M+1e-6&&b.push([M,w[0]]),M=Math.max(M,w[1]);return g>M+1e-6&&b.push([M,g]),b},v=(d,m,g)=>[d,m,g];for(let d=0;d<u.length-1;d++){let m=u[d],g=u[d+1],y=(m+g)/2,b=s.filter(R=>y>R.u0&&y<R.u1),M=b.length?Math.max(m,Math.max(...b.map(R=>R.u0))+1e-7):m,w=b.length?Math.min(g,Math.min(...b.map(R=>R.u1))-1e-7):g,_=p(M,b),S=p(w,b),G=Math.min(_.length,S.length);for(let R=0;R<G;R++){let[q,T]=_[R],[B,P]=S[R];T-q<1e-6&&P-B<1e-6||(Un(e,v(m,q,a),v(g,B,a),v(g,P,a),v(m,T,a),[0,0,1],c),t.frontOnly||Un(e,v(g,B,r),v(m,q,r),v(m,T,r),v(g,P,r),[0,0,-1],c))}}t.noEnds||(Un(e,v(o,0,r),v(o,0,a),v(o,i(o),a),v(o,i(o),r),[-1,0,0],c),Un(e,v(n,0,a),v(n,0,r),v(n,i(n),r),v(n,i(n),a),[1,0,0],c));for(let d of s){if(d.noReveal)continue;let m=d.mat||t.revealMat||c,g=Math.max(0,h(d,d.u0+1e-7)),y=Math.max(0,h(d,d.u1-1e-7)),b=Math.min(d.head(d.u0+1e-7),i(d.u0)),M=Math.min(d.head(d.u1-1e-7),i(d.u1));b>g+1e-6&&Un(e,v(d.u0,g,a),v(d.u0,g,r),v(d.u0,b,r),v(d.u0,b,a),[1,0,0],m),M>y+1e-6&&Un(e,v(d.u1,y,r),v(d.u1,y,a),v(d.u1,M,a),v(d.u1,M,r),[-1,0,0],m);let w=Math.max(8,Math.ceil((d.u1-d.u0)/(d.step||.06)));for(let _=0;_<w;_++){let S=d.u0+(d.u1-d.u0)*_/w,G=d.u0+(d.u1-d.u0)*(_+1)/w,R=Math.max(S,d.u0+1e-7),q=Math.min(G,d.u1-1e-7),T=Math.min(d.head(R),i(S)),B=Math.min(d.head(q),i(G));if(!(T>=i(S)-1e-6&&B>=i(G)-1e-6)){let se=G-S,Z=B-T,le=Math.hypot(se,Z)||1;Un(e,v(S,T,r),v(G,B,r),v(G,B,a),v(S,T,a),[Z/le,-se/le,0],m)}let P=h(d,R),H=h(d,q);if(P>1e-6||H>1e-6){let se=G-S,Z=H-P,le=Math.hypot(se,Z)||1;Un(e,v(G,H,r),v(S,P,r),v(S,P,a),v(G,H,a),[-Z/le,se/le,0],m)}}}}var Id=(e,t,o)=>n=>{let r=n-e;return o+Math.sqrt(Math.max(0,t*t-r*r))};function G_(e,t){let o=qr.r,n=qr.sill,r=qr.spring,a=He.z0,i=24,s=(p,v,d)=>[t+Math.cos(p)*v,d,a-Math.sin(p)*v];for(let p=0;p<i;p++){let v=Math.PI*p/i,d=Math.PI*(p+1)/i,m=[-Math.cos(v),0,Math.sin(v)],g=[-Math.cos(d),0,Math.sin(d)],y=[e.vert(s(v,o,n),m,No),e.vert(s(d,o,n),g,No),e.vert(s(d,o,r),g,No),e.vert(s(v,o,r),m,No)];e.tri(y[0],y[1],y[2]),e.tri(y[0],y[2],y[3])}let c=12,l=(p,v)=>[t+Math.cos(p)*Math.cos(v)*o,r+Math.sin(v)*o,a-Math.sin(p)*Math.cos(v)*o],f=(p,v)=>[-Math.cos(p)*Math.cos(v),-Math.sin(v),Math.sin(p)*Math.cos(v)];for(let p=0;p<i;p++)for(let v=0;v<c;v++){let d=Math.PI*p/i,m=Math.PI*(p+1)/i,g=Math.PI/2*v/c,y=Math.PI/2*(v+1)/c,b=[e.vert(l(d,g),f(d,g),Fi),e.vert(l(m,g),f(m,g),Fi),e.vert(l(m,y),f(m,y),Fi),e.vert(l(d,y),f(d,y),Fi)];e.tri(b[0],b[1],b[2]),e.tri(b[0],b[2],b[3])}for(let p=1;p<8;p++){let v=Math.PI*p/8,d=[];for(let m=0;m<=10;m++){let g=Math.PI/2*m/10*.97;d.push(l(v,g).map((y,b)=>y-f(v,g)[b]*.02))}e.tube(d,m=>.035*(1-m*.6),12,6,{mat:()=>Fi})}let u=e.vert([t,n,a],[0,1,0],No);for(let p=0;p<i;p++){let v=Math.PI*p/i,d=Math.PI*(p+1)/i;e.tri(u,e.vert(s(v,o,n),[0,1,0],No),e.vert(s(d,o,n),[0,1,0],No))}Hr(e,t-o-.12,n-.1,a,t+o+.12,n+.02,a+.12,No),Hr(e,t-o-.16,n-.2,a,t+o+.16,n-.1,a+.07,No);let h=.16;for(let p=0;p<i;p++){let v=Math.PI*p/i,d=Math.PI*(p+1)/i,m=(g,y,b)=>[t+Math.cos(g)*y,r+Math.sin(g)*y,b];Un(e,m(v,o,a+.05),m(d,o,a+.05),m(d,o+h,a+.05),m(v,o+h,a+.05),[0,0,1],No),Un(e,m(v,o+h,a),m(d,o+h,a),m(d,o+h,a+.05),m(v,o+h,a+.05),[Math.cos((v+d)/2),Math.sin((v+d)/2),0],No),Un(e,m(v,o,a),m(d,o,a),m(d,o,a+.05),m(v,o,a+.05),[-Math.cos((v+d)/2),-Math.sin((v+d)/2),0],No)}for(let p of[-1,1]){let v=t+p*o,d=t+p*(o+h);Hr(e,v,n,a,d,r,a+.05,No),Hr(e,v-p*.02,r-.12,a,d+p*.06,r,a+.09,No)}Hr(e,t-.11,r+o-.04,a,t+.11,r+o+h+.1,a+.09,No),e.lathe([[.66,n,1],[.66,n+.06,1],[.62,n+.1],[.6,n+.3],[.64,n+.34,1],[.64,n+.4,1],[0,n+.4]],t,a-.62,40,{mat:()=>No})}var $_=qr.sill+.4,q_=He.z0-.62;function H_(e){Un(e,[14,0,He.z0-jo],[He.x1+jo,0,He.z0-jo],[He.x1+jo,0,He.z1+jo],[14,0,He.z1+jo],[0,1,0],No),e.curMat=ul,pl(e,{u0:14+jo,u1:He.x1+2*jo,w0:He.z0-2*jo,w1:He.z0,top:()=>He.spring,holes:Jf.map(l=>({u0:l-qr.r,u1:l+qr.r,bottom:qr.sill,head:Id(l,qr.r,qr.spring),noReveal:!0})),mat:ul,cuts:[He.x1]});for(let l of Jf)G_(e,l);e.save(),e.translate(0,0,He.z1),e.rotateY(Math.PI),e.translate(-(He.x1+2*jo),0,-2*jo);let t=l=>He.x1+2*jo-l;pl(e,{u0:t(He.x1+2*jo),u1:t(13.65),w0:0,w1:2*jo,top:()=>He.spring,holes:Ta.map(l=>({u0:t(l+At.halfW),u1:t(l-At.halfW),bottom:At.sill,head:Id(t(l),At.halfW,At.spring)})),mat:ul,revealMat:No}),e.restore(),e.save(),e.translate(He.x1,0,0),e.rotateY(-Math.PI/2);let o=W0.DOOR,n=He.zc,r=o.r;pl(e,{u0:He.z0-2*jo,u1:He.z1+2*jo,w0:-2*jo,w1:0,top:l=>l<He.z0||l>He.z1?He.spring:j0(l),topStep:.15,holes:[{u0:n-r,u1:n+r,bottom:0,head:Id(n,r,o.spring)}],mat:ul,revealMat:No}),e.restore(),e.save(),e.translate(14+jo,0,0),e.rotateY(-Math.PI/2),pl(e,{u0:He.z0,u1:He.z1,w0:-0,w1:2*jo,top:()=>Dd,topStep:.15,holes:[{u0:He.z0,u1:He.z1,bottom:0,head:l=>j0(l)}],mat:ul,revealMat:No}),e.restore();let a=14+jo,i=Math.ceil((He.x1-a)/1),s=28,c=[];for(let l=0;l<=i;l++){let f=a+(He.x1-a)*l/i,u=[];for(let h=0;h<=s;h++){let p=He.z0+(He.z1-He.z0)*h/s,v=j0(p),d=[0,Gd-v,He.zc-p],m=Math.hypot(d[1],d[2]);u.push(e.vert([f,v,p],[0,d[1]/m,d[2]/m],Fi))}c.push(u)}for(let l=0;l<i;l++)for(let f=0;f<s;f++)e.tri(c[l][f],c[l+1][f],c[l][f+1]),e.tri(c[l+1][f],c[l+1][f+1],c[l][f+1])}function d2(e,t,o,n){let a=[];for(let i=0;i<=32;i++){let s=He.z0+(He.z1-He.z0)*i/32,c=j0(s),l=Gd-c,f=He.zc-s,u=Math.hypot(l,f),h=[c+l/u*n,s+f/u*n];a.push({y:c,z:s,iy:h[0],iz:h[1],n:[0,l/u,f/u]})}for(let i=0;i<32;i++){let s=a[i],c=a[i+1];Un(e,[t-o,s.iy,s.iz],[t+o,s.iy,s.iz],[t+o,c.iy,c.iz],[t-o,c.iy,c.iz],s.n,No),Un(e,[t-o,s.y,s.z],[t-o,s.iy,s.iz],[t-o,c.iy,c.iz],[t-o,c.y,c.z],[-1,0,0],No),Un(e,[t+o,s.iy,s.iz],[t+o,s.y,s.z],[t+o,c.y,c.z],[t+o,c.iy,c.iz],[1,0,0],No)}}function Zf(e,t,o,n){let i=o,s=o+n*.16;Hr(e,t-.28,0,i,t+.28,He.spring-.3,s,No),Hr(e,t-.28-.06,0,i,t+.28+.06,.32,o+n*(.16+.05),No),Hr(e,t-.28-.05,He.spring-.3,i,t+.28+.05,He.spring-.1,o+n*(.16+.05),No),Hr(e,t-.28-.1,He.spring-.1,i,t+.28+.1,He.spring,o+n*(.16+.1),No)}function B_(e,t){let o=j0(He.zc),n=[[0,o-.13,1],[.05,o-.125],[.12,o-.1],[.16,o-.06,1],[.22,o-.05],[.3,o-.075],[.4,o-.06],[.48,o-.03,1],[.55,o-.035],[.7,o-.025],[.82,o-.012,1],[.95,o+.03]];e.lathe(n,t,He.zc,48,{mat:()=>Fi});for(let r=0;r<8;r++){let a=r*Math.PI/4,i=t+Math.cos(a)*.32,s=He.zc+Math.sin(a)*.32;e.save(),e.translate(i,o-.07,s),e.rotateY(-a),e.curMat=Fi,e.ellipsoid([0,0,0],[.13,.03,.06],6,10),e.restore()}}function U_(e){e.curMat=No;for(let[t,o]of[[He.z0,1],[He.z1,-1]])Hr(e,14.35,He.spring-.12,t,He.x1,He.spring,t+o*.1,No),Hr(e,14.35,He.spring-.04,t,He.x1,He.spring+.05,t+o*.18,No);for(let[t,o]of[[He.z0,1],[He.z1,-1]])Hr(e,14.35,0,t,He.x1,.42,t+o*.12,No),Hr(e,14.35,.42,t,He.x1,.5,t+o*.07,No);for(let t of p2)d2(e,t,.24,.16),Zf(e,t,He.z0,1),Zf(e,t,He.z1,-1);for(let t of[14.35+.28,He.x1-.28])d2(e,t,.28,.22),Zf(e,t,He.z0,1),Zf(e,t,He.z1,-1);for(let t of Ta)B_(e,t)}function j_(e){let t=He.z1+jo,o=t-.04,n=t+.04,r=(s,c,l,f)=>Hr(e,s,c,o,l,f,n,dl),a=At.halfW,i=(s,c,l,f,u,h)=>{let p=(v,d,m)=>[s+d*Math.cos(v),At.spring+d*Math.sin(v),m];for(let v=0;v<h;v++){let d=f+(u-f)*v/h,m=f+(u-f)*(v+1)/h;Un(e,p(d,c,o),p(m,c,o),p(m,l,o),p(d,l,o),[0,0,-1],dl),Un(e,p(d,l,n),p(m,l,n),p(m,c,n),p(d,c,n),[0,0,1],dl)}};for(let s of Ta){let c=s-a,l=s+a;r(c,At.sill,c+.07,At.spring),r(l-.07,At.sill,l,At.spring),r(c,At.sill,l,At.sill+.07),r(c,At.spring-.04,l,At.spring+.04);for(let u of[-.5,0,.5])r(s+u*a-.022,At.sill,s+u*a+.022,At.spring);let f=6;for(let u=1;u<f;u++){let h=At.sill+(At.spring-At.sill)*u/f;r(c,h-.02,l,h+.02)}i(s,a-.07,a,0,Math.PI,32),i(s,.42,.46,0,Math.PI,20);for(let u=1;u<6;u++){let h=Math.PI*u/6,p=Math.cos(h),v=Math.sin(h),d=.02,m=(g,y)=>[s+p*g-v*d*y,At.spring+v*g+p*d*y];Un(e,[...m(.44,-1),o],[...m(a-.05,-1),o],[...m(a-.05,1),o],[...m(.44,1),o],[0,0,-1],dl),Un(e,[...m(.44,1),n],[...m(a-.05,1),n],[...m(a-.05,-1),n],[...m(.44,-1),n],[0,0,1],dl)}}}function W_(){let e=[],t=He.z1+jo;for(let o of Ta){let n=o-At.halfW,r=o+At.halfW;e.push([n,At.sill,t],[r,At.sill,t],[r,At.spring,t],[n,At.sill,t],[r,At.spring,t],[n,At.spring,t]);for(let a=0;a<24;a++){let i=Math.PI*a/24,s=Math.PI*(a+1)/24;e.push([o,At.spring,t],[o+At.halfW*Math.cos(i),At.spring+At.halfW*Math.sin(i),t],[o+At.halfW*Math.cos(s),At.spring+At.halfW*Math.sin(s),t])}}return e}function v2(e,t){e.save(),e.translate(He.x1+jo,0,He.zc-7),e.rotateY(-Math.PI/2),t(),e.restore()}function V_(e){v2(e,()=>{W0.addSurround(e),W0.addFrames(e,"fixed")})}function X_(e){return W0.glassPanes(e||"fixed").map(([o,n,r])=>[He.x1+jo-r,n,He.zc-7+o])}function Y_(e){H_(e),U_(e),j_(e),V_(e),e.curMat=[0,0,0]}var K_={x:He.x1+jo,zLo:He.zc-W0.DOOR.r,zHi:He.zc+W0.DOOR.r},fo=e=>e.toFixed(4);function Q_(){return`
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
		float k = floor((q.x - ${fo(At.first)}) / ${fo(At.pitch)} + 0.5);
		if (k < 0.0 || k > ${fo(At.count-1)}) return 0.0;
		float dx = q.x - (${fo(At.first)} + k * ${fo(At.pitch)});
		float side = 1.0 - smoothstep(${fo(At.halfW)} - soft, ${fo(At.halfW)} + soft, abs(dx));
		float sill = smoothstep(${fo(At.sill)} - soft, ${fo(At.sill)} + soft, q.y);
		float r = length(vec2(dx, q.y - ${fo(At.spring)}));
		float head = q.y < ${fo(At.spring)} ? 1.0 : 1.0 - smoothstep(${fo(At.halfW)} - soft, ${fo(At.halfW)} + soft, r);
		float open = side * sill * head;
		// the black glazing bars, softly
		float cover = 0.0;
		cover = max(cover, winBar(abs(dx), 0.022, soft));
		cover = max(cover, winBar(abs(abs(dx) - ${fo(At.halfW*.5)}), 0.022, soft));
		float rowH = ${fo((At.spring-At.sill)/6)};
		float ry = (q.y - ${fo(At.sill)}) / rowH;
		cover = max(cover, q.y < ${fo(At.spring)} ? winBar(abs(fract(ry + 0.5) - 0.5) * rowH, 0.02, soft) : 0.0);
		cover = max(cover, q.y > ${fo(At.spring)} ? winBar(abs(r - 0.44), 0.02, soft) : 0.0);
		return open * (1.0 - cover * 0.75);
	}

	// daylight reaching point p from the windows
	float windowLight(vec3 p, vec3 n) {
		if (p.x < ${fo(He.x0)} || p.z < ${fo(He.z0-.1)} || p.z > ${fo(He.z1)}) return 0.0;
		float ndl = max(dot(n, WIN_SKY), 0.0);
		if (ndl <= 0.0) return 0.0;
		float tIn = (${fo(He.z1)} - p.z) / WIN_SKY.z;
		float tOut = (${fo(He.z1+2*jo)} - p.z) / WIN_SKY.z;
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
		${Jf.map(e=>`{ float d = abs(p.x - ${fo(e)}); if (d < best) { best = d; lamp = vec3(${fo(e)}, ${fo(qr.spring+.55)}, ${fo(He.z0-.15)}); } }`).join(`
		`)}
		return lamp;
	}

	float nicheLight(vec3 p, vec3 n) {
		if (p.z > ${fo(He.z0+1.6)} || p.z < ${fo(He.z0-qr.r-.1)} || p.x < ${fo(He.x0)}) return 0.0;
		vec3 lamp = nicheLamp(p);
		vec3 d = lamp - p;
		float dist = length(d);
		vec3 L = d / dist;
		// a cone pointing down into the niche
		float cone = smoothstep(0.35, 0.75, dot(-L, normalize(vec3(0.0, -1.0, 0.35))));
		float inside = 1.0 - smoothstep(${fo(qr.r)}, ${fo(qr.r+.5)}, abs(p.x - lamp.x));
		return max(dot(n, L), 0.0) * cone * inside / (1.0 + 0.35 * dist * dist);
	}

	// soft general daylight in the corridor, strongest near the glass
	float corridorGlow(vec3 p) {
		if (p.x < ${fo(He.x0-1)}) return 0.0;
		float inC = smoothstep(${fo(He.z0-1.5)}, ${fo(He.z0)}, p.z) * smoothstep(${fo(He.x0-1)}, ${fo(He.x0+1)}, p.x);
		float near = 0.55 + 0.45 * smoothstep(${fo(He.z0)}, ${fo(He.z1)}, p.z);
		return inC * near;
	}`}m2.exports={wallWithHoles:pl,windowLightGLSL:Q_,addWing:Y_,windowGlass:W_,farDoorGlass:X_,atFarDoor:v2,FAR_DOOR:K_,vaultY:j0,C:He,NICHE_X:Jf,NICHE:qr,NICHE_PLINTH_TOP:$_,NICHE_STATUE_Z:q_,WIN:At,winCentres:Ta,piers:p2,PAINTING_X:D_,HEIGHT:Dd}});var Jr=me((tT,y2)=>{"use strict";var $d=or(),$o=8,Y0=.35,Cs=14,X0=4,Ke={x0:Cs+Y0,x1:Cs+Y0+2*X0,z0:5.9-X0,z1:5.9+X0,zc:5.9,cx:Cs+Y0+X0,arch:{r:2.6,spring:4.4},dome:{r:3.3,base:$o},oculus:3.3};Ke.domeTop=Ke.dome.base+Ke.dome.r;var K0={spokes:16,ringE:[.42,.95],bar:.035},Rn={sxz:1.32,sy:1.6,yaw:.6};Rn.crownC=[Ke.cx,.4+3.4*Rn.sy,Ke.zc];Rn.crownR=[2.3*Rn.sxz,1.9*Rn.sy,2.3*Rn.sxz];Rn.trunkR=.26*Rn.sxz;Rn.trunkTop=.4+2.2*Rn.sy;var g2={inner:1.05,outer:1.62,seat:.48,soil:.4},oh=(()=>{let e=[.2,1,-.15],t=Math.hypot(...e);return e.map(o=>o/t)})(),jn=[0,0,0],V0=[11,0,0],eh=[10,0,0],th=[9,0,0],Z_=[5,0,0],qd=[3,0,0];function di(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),l=e.vert(n,a,i),f=e.vert(r,a,i);e.tri(s,c,l),e.tri(s,l,f)}function Cr(e,t,o,n,r,a,i,s){e.box(Math.min(t,r),Math.min(o,a),Math.min(n,i),Math.max(t,r),Math.max(o,a),Math.max(n,i),s)}var J_=(e,t,o)=>n=>{let r=n-e;return o+Math.sqrt(Math.max(0,t*t-r*r))};function e6(e){e.save(),e.translate(Cs+Y0,0,0),e.rotateY(-Math.PI/2),$d.wallWithHoles(e,{u0:0,u1:$d.C.z0,w0:0,w1:2*Y0,top:()=>$o,holes:[{u0:Ke.zc-Ke.arch.r,u1:Ke.zc+Ke.arch.r,bottom:0,head:J_(Ke.zc,Ke.arch.r,Ke.arch.spring),step:.05}],mat:V0,revealMat:jn,topStep:1}),e.restore();let t=Cs-Y0;for(let[i,s]of[[0,Ke.zc-Ke.arch.r],[Ke.zc+Ke.arch.r,$d.C.z0]])Cr(e,t-.12,0,i,t,.42,s,jn),Cr(e,t-.07,.42,i,t,.5,s,jn);let o=t,n=.24,r=40,a=(i,s,c)=>[c,Ke.arch.spring+Math.sin(i)*s,Ke.zc+Math.cos(i)*s];for(let i=0;i<r;i++){let s=Math.PI*i/r,c=Math.PI*(i+1)/r;di(e,a(s,Ke.arch.r,o-.07),a(c,Ke.arch.r,o-.07),a(c,Ke.arch.r+n,o-.07),a(s,Ke.arch.r+n,o-.07),[-1,0,0],jn),di(e,a(s,Ke.arch.r+n,o),a(c,Ke.arch.r+n,o),a(c,Ke.arch.r+n,o-.07),a(s,Ke.arch.r+n,o-.07),[0,Math.sin((s+c)/2),Math.cos((s+c)/2)],jn),di(e,a(s,Ke.arch.r,o),a(c,Ke.arch.r,o),a(c,Ke.arch.r,o-.07),a(s,Ke.arch.r,o-.07),[0,-Math.sin((s+c)/2),-Math.cos((s+c)/2)],jn)}Cr(e,o-.12,Ke.arch.spring+Ke.arch.r-.06,Ke.zc-.17,o,Ke.arch.spring+Ke.arch.r+n+.16,Ke.zc+.17,jn);for(let i of[-1,1]){let s=Ke.zc+i*Ke.arch.r,c=Ke.zc+i*(Ke.arch.r+n);Cr(e,o-.07,0,s,o,Ke.arch.spring,c,jn),Cr(e,o-.13,Ke.arch.spring-.16,s-i*.03,o,Ke.arch.spring,c+i*.08,jn),Cr(e,o-.12,0,s-i*.03,o,.5,c+i*.06,jn)}}function t6(e){let{x0:t,x1:o,z0:n,z1:r}=Ke;di(e,[Cs,0,n],[o,0,n],[o,0,r],[Cs,0,r],[0,1,0],jn),e.curMat=V0,di(e,[o,0,n],[o,0,r],[o,$o,r],[o,$o,n],[-1,0,0],V0),di(e,[t,0,n],[o,0,n],[o,$o,n],[t,$o,n],[0,0,1],V0),di(e,[o,0,r],[t,0,r],[t,$o,r],[o,$o,r],[0,0,-1],V0),di(e,[t,0,r],[t,0,n],[t,$o,n],[t,$o,r],[1,0,0],V0),Cr(e,o-.12,0,n,o,.42,r,jn),Cr(e,t,0,n,o,.42,n+.12,jn),Cr(e,t,0,r-.12,o,.42,r,jn),Cr(e,o-.2,$o-.3,n,o,$o,r,jn),Cr(e,t,$o-.3,n,o,$o,n+.2,jn),Cr(e,t,$o-.3,r-.2,o,$o,r,jn),Cr(e,t,$o-.3,n,t+.2,$o,r,jn);let a=Ke.dome.r,i=48,s=[];for(let g=0;g<=i;g++){let y=Math.PI*2*g/i;s.push([Ke.cx+Math.cos(y)*a,Ke.zc+Math.sin(y)*a])}let c=g=>{let y=Math.abs(Math.cos(g)),b=Math.abs(Math.sin(g));return Math.min(X0/Math.max(y,1e-6),X0/Math.max(b,1e-6))};for(let g=0;g<i;g++){let y=Math.PI*2*g/i,b=Math.PI*2*(g+1)/i,M=c(y),w=c(b),_=[Ke.cx+Math.cos(y)*M,$o,Ke.zc+Math.sin(y)*M],S=[Ke.cx+Math.cos(b)*w,$o,Ke.zc+Math.sin(b)*w];di(e,[s[g][0],$o,s[g][1]],[s[g+1][0],$o,s[g+1][1]],S,_,[0,-1,0],eh)}e.lathe([[a+.02,$o-.18,1],[a-.12,$o-.18,1],[a-.12,$o-.06,1],[a-.05,$o,1],[a,$o+.02]],Ke.cx,Ke.zc,i,{mat:()=>jn});let l=16,f=(g,y,b)=>[Ke.cx+Math.cos(g)*Math.cos(y)*b,Ke.dome.base+Math.sin(y)*b,Ke.zc+Math.sin(g)*Math.cos(y)*b],u=Math.PI/2;for(let g=0;g<i;g++)for(let y=0;y<l;y++){let b=Math.PI*2*g/i,M=Math.PI*2*(g+1)/i,w=u*y/l,_=u*(y+1)/l,S=(R,q)=>[-Math.cos(R)*Math.cos(q),-Math.sin(q),-Math.sin(R)*Math.cos(q)],G=[e.vert(f(b,w,a),S(b,w),th),e.vert(f(M,w,a),S(M,w),th),e.vert(f(M,_,a),S(M,_),th),e.vert(f(b,_,a),S(b,_),th)];e.tri(G[0],G[1],G[2]),e.tri(G[0],G[2],G[3])}for(let g=0;g<K0.spokes;g++){let y=Math.PI*2*g/K0.spokes,b=[];for(let M=0;M<=14;M++)b.push(f(y,(u-.06)*M/14,a-.04));e.tube(b,()=>.04,20,6,{mat:()=>eh})}for(let g of K0.ringE){let y=Math.cos(g)*(a-.04),b=Ke.dome.base+Math.sin(g)*(a-.04),M=[];for(let w=0;w<=72;w++){let _=Math.PI*2*w/72;M.push([Ke.cx+Math.cos(_)*y,b,Ke.zc+Math.sin(_)*y])}e.tube(M,()=>.035,72,6,{mat:()=>eh})}e.ellipsoid([Ke.cx,Ke.dome.base+a-.06,Ke.zc],[.16,.08,.16],6,12,{mat:()=>eh});let h=.46,p=.55,v=.12,d=(g,y,b,M)=>{Cr(e,g,h-.08,y,b,h,M,qd);let w=b-g>M-y?[g+.25,b-.25]:[g+.06,b-.06],_=b-g>M-y?[y+.06,M-.06]:[y+.25,M-.25];Cr(e,w[0],0,_[0],w[1],h-.08,_[1],qd)};d(o-v-p,n+1.1,o-v,r-1.1),d(t+1,n+v,o-1.1,n+v+p),d(t+1,r-v-p,o-1.1,r-v);let m=g2;e.lathe([[m.outer,0,1],[m.outer,m.seat-.1,1],[m.outer+.07,m.seat-.07,1],[m.outer+.07,m.seat,1],[m.inner-.05,m.seat,1],[m.inner-.05,m.seat-.06,1],[m.inner,m.seat-.08,1],[m.inner,m.soil]],Ke.cx,Ke.zc,64,{mat:()=>qd}),e.lathe([[m.inner,m.soil,1],[0,m.soil+.03]],Ke.cx,Ke.zc,48,{mat:()=>Z_})}function o6(e){e6(e),t6(e),e.curMat=[0,0,0]}var Ro=e=>e.toFixed(4);function x2(){let e=Ke.dome.r,t=K0.ringE.map(o=>Math.cos(o)*e);return`
	const vec3 SHAFT = vec3(${Ro(oh[0])}, ${Ro(oh[1])}, ${Ro(oh[2])});

	// how much sun the glass dome lets through towards p (0..1): the round
	// opening, less the soft shadows of its ribs and rings (worked out on
	// the dome's base, where the frame is seen almost straight on)
	float oculusOpen(vec3 p) {
		float t = (${Ro(Ke.dome.base+.6)} - p.y) / SHAFT.y;
		vec3 q = p + SHAFT * t;
		vec2 d2 = q.xz - vec2(${Ro(Ke.cx)}, ${Ro(Ke.zc)});
		float d = length(d2);
		float soft = 0.02 + 0.012 * t;
		float open = 1.0 - smoothstep(${Ro(e-.15)} - soft, ${Ro(e-.15)} + soft, d);
		float hw = ${Ro(K0.bar)};
		float cover = 0.0;
		${t.map(o=>`cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, abs(d - ${Ro(o)})));`).join(`
		`)}
		float ang = atan(d2.y, d2.x);
		float stp = ${Ro(Math.PI*2/K0.spokes)};
		float da = abs(mod(ang + stp * 0.5, stp) - stp * 0.5);
		cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, d * sin(da)));
		cover = max(cover, 1.0 - smoothstep(0.16 - soft, 0.16 + soft, d));
		return open * (1.0 - cover * 0.85);
	}

	// the tree's own shade: its crown lets dappled light through, its
	// trunk blocks it
	float treeShade(vec3 p) {
		vec3 c = vec3(${Ro(Rn.crownC[0])}, ${Ro(Rn.crownC[1])}, ${Ro(Rn.crownC[2])});
		vec3 r = vec3(${Ro(Rn.crownR[0])}, ${Ro(Rn.crownR[1])}, ${Ro(Rn.crownR[2])});
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
		float tt = (${Ro(Rn.trunkTop)} - p.y) / SHAFT.y;
		if (tt > 0.0) {
			vec2 o = p.xz - vec2(${Ro(Ke.cx)}, ${Ro(Ke.zc)});
			vec2 dir = SHAFT.xz;
			float k = clamp(-dot(o, dir) / dot(dir, dir), 0.0, tt);
			float dist = length(o + dir * k);
			tr *= smoothstep(${Ro(Rn.trunkR*.7)}, ${Ro(Rn.trunkR*1.3)}, dist);
		}
		return tr;
	}`}function n6(){return`
	${x2()}

	// sunlight through the oculus reaching p (0..1)
	float alcoveSun(vec3 p, vec3 n) {
		if (p.x < ${Ro(Ke.x0-.75)} || p.z < ${Ro(Ke.z0-.5)} || p.z > ${Ro(Ke.z1+.5)}) return 0.0;
		float ndl = max(dot(n, SHAFT), 0.0);
		if (ndl <= 0.0) return 0.0;
		return ndl * oculusOpen(p) * treeShade(p);
	}

	// soft daylight filling the court, brightest under the dome
	float alcoveGlow(vec3 p) {
		if (p.x < ${Ro(Ke.x0-1.5)} || p.z < ${Ro(Ke.z0-1.5)} || p.z > ${Ro(Ke.z1+1.5)}) return 0.0;
		float inside = smoothstep(${Ro(Ke.x0-1.2)}, ${Ro(Ke.x0+.6)}, p.x);
		float d = length(p.xz - vec2(${Ro(Ke.cx)}, ${Ro(Ke.zc)}));
		return inside * (0.55 + 0.45 * smoothstep(0.0, 8.0, p.y)) * (1.0 - 0.35 * smoothstep(1.0, 5.0, d));
	}`}y2.exports={addAlcove:o6,alcoveLightGLSL:n6,oculusGLSL:x2,A:Ke,BENCH:g2,SHAFT:oh,TREE:Rn}});var nr=me((oT,w2)=>{"use strict";var La=0;try{let e=location.search;/[?&]night\b/.test(e)&&(La=1)}catch(e){}var pi=La,Hd=0,b2=[],nh={tick(e){let t=Hd?Math.min(.1,e-Hd):0;if(Hd=e,pi!==La){let o=t/2.4;pi=La>pi?Math.min(La,pi+o):Math.max(La,pi-o)}return nh.night},get night(){return pi*pi*(3-2*pi)},get isNight(){return La===1},get settled(){return pi===La},set(e){La=e?1:0,b2.forEach(t=>t(La))},toggle(){nh.set(!La)},onChange(e){b2.push(e)}};nh.GLSL=`
uniform float night;
vec3 toNight(vec3 c, float keep) {
	float l = dot(c, vec3(0.299, 0.587, 0.114));
	vec3 n = mix(vec3(l), c, 0.35) * vec3(0.55, 0.70, 1.05) * keep;
	return mix(c, n, night);
}
`;w2.exports=nh});var Bd=me((nT,_2)=>{"use strict";function r6(e,t){let o=Object.assign({width:1024,maxHeight:2048,scale:1,cos:.94,slab:.6},t||{}),n=e.pos,r=e.nrm,a=e.idx,i=a.length/3,s=new Array(i);for(let w=0;w<i;w++){let _=a[w*3],S=a[w*3+1],G=a[w*3+2],R=n[S*3]-n[_*3],q=n[S*3+1]-n[_*3+1],T=n[S*3+2]-n[_*3+2],B=n[G*3]-n[_*3],P=n[G*3+1]-n[_*3+1],H=n[G*3+2]-n[_*3+2],se=q*H-T*P,Z=T*B-R*H,le=R*P-q*B,ie=Math.hypot(se,Z,le),pe=ie>1e-10;pe&&(se/=ie,Z/=ie,le/=ie,r[_*3]*se+r[_*3+1]*Z+r[_*3+2]*le<0&&(se=-se,Z=-Z,le=-le),pe=!!o.bakeTri(w,_,S,G,[se,Z,le])),s[w]={t:w,a:_,b:S,c:G,n:[se,Z,le],ok:pe,chart:null}}let c=w=>Math.round(n[w*3]*2e3)+","+Math.round(n[w*3+1]*2e3)+","+Math.round(n[w*3+2]*2e3),l=new Map,f=new Array(n.length/3);for(let w=0;w<f.length;w++)f[w]=c(w);for(let w of s){if(!w.ok)continue;let _=[f[w.a],f[w.b],f[w.c]];for(let S=0;S<3;S++){let G=_[S],R=_[(S+1)%3],q=G<R?G+"|"+R:R+"|"+G;l.has(q)||l.set(q,[]),l.get(q).push(w)}}let u=w=>{let _=[f[w.a],f[w.b],f[w.c]],S=[];for(let G=0;G<3;G++){let R=_[G],q=_[(G+1)%3];for(let T of l.get(R<q?R+"|"+q:q+"|"+R)||[])T!==w&&S.push(T)}return S},h=[];for(let w of s){if(!w.ok||w.chart)continue;let _=w.n,S=Math.abs(_[1])<.9?[0,1,0]:[1,0,0],G=S[1]*_[2]-S[2]*_[1],R=S[2]*_[0]-S[0]*_[2],q=S[0]*_[1]-S[1]*_[0],T=Math.hypot(G,R,q);G/=T,R/=T,q/=T;let B=_[1]*q-_[2]*R,P=_[2]*G-_[0]*q,H=_[0]*R-_[1]*G,se=n[w.a*3]*_[0]+n[w.a*3+1]*_[1]+n[w.a*3+2]*_[2],Z={tris:[],n:_,T:[G,R,q],B:[B,P,H],kind:o.kind?o.kind(_,[n[w.a*3],n[w.a*3+1],n[w.a*3+2]]):"wall"},le=[w];for(w.chart=Z;le.length;){let ie=le.pop();Z.tris.push(ie);for(let pe of u(ie)){if(pe.chart||!pe.ok||pe.n[0]*_[0]+pe.n[1]*_[1]+pe.n[2]*_[2]<o.cos)continue;let Qe=!1;for(let wt of[pe.a,pe.b,pe.c])Math.abs(n[wt*3]*_[0]+n[wt*3+1]*_[1]+n[wt*3+2]*_[2]-se)>o.slab&&(Qe=!0);Qe||(pe.chart=Z,le.push(pe))}}h.push(Z)}for(let w of h){let _=1/0,S=1/0,G=-1/0,R=-1/0;for(let q of w.tris)for(let T of[q.a,q.b,q.c]){let B=n[T*3]*w.T[0]+n[T*3+1]*w.T[1]+n[T*3+2]*w.T[2],P=n[T*3]*w.B[0]+n[T*3+1]*w.B[1]+n[T*3+2]*w.B[2];B<_&&(_=B),B>G&&(G=B),P<S&&(S=P),P>R&&(R=P)}w.u0=_,w.v0=S,w.du=G-_,w.dv=R-S}let p=o.width,v=o.scale,d=0;for(let w=0;;w++){for(let T of h){let B=o.density(T.kind)*v;if(T.dU=Math.max(B,3/Math.max(T.du,1e-4)),T.dV=Math.max(B,3/Math.max(T.dv,1e-4)),T.w=Math.ceil(T.du*T.dU)+2*2,T.h=Math.ceil(T.dv*T.dV)+2*2,T.rot=T.h>T.w,T.rot){let P=T.w;T.w=T.h,T.h=P}}let _=h.slice().sort((T,B)=>B.h-T.h||B.w-T.w),S=0,G=0,R=0,q=!0;for(let T of _){if(T.w>p){q=!1;break}S+T.w>p&&(G+=R,S=0,R=0),T.x=S,T.y=G,S+=T.w,R=Math.max(R,T.h)}if(d=G+R,q&&d<=o.maxHeight)break;if(v*=.92,w>40)throw new Error("bake: the room does not fit")}d=Math.max(4,Math.ceil(d/4)*4);let m=s.filter(w=>w.ok).concat(s.filter(w=>!w.ok)),g=i*3,y={position:new Float32Array(g*3),normal:new Float32Array(g*3),lm:new Float32Array(g*3)},b=e.extra||{};for(let w in b)y[w]=new Float32Array(g*b[w][1]);let M=0;for(let w of m){let _=w.chart;for(let S of[w.a,w.b,w.c]){for(let G=0;G<3;G++)y.position[M*3+G]=n[S*3+G],y.normal[M*3+G]=r[S*3+G];for(let G in b){let[R,q]=b[G];for(let T=0;T<q;T++)y[G][M*q+T]=R[S*q+T]}if(_&&w.ok){let G=n[S*3]*_.T[0]+n[S*3+1]*_.T[1]+n[S*3+2]*_.T[2],R=n[S*3]*_.B[0]+n[S*3+1]*_.B[1]+n[S*3+2]*_.B[2],q=(G-_.u0)*_.dU+2,T=(R-_.v0)*_.dV+2;if(_.rot){let B=q;q=T,T=B}y.lm[M*3]=(_.x+q)/p,y.lm[M*3+1]=(_.y+T)/d,y.lm[M*3+2]=1}M++}}y.elements=new Uint32Array(g);for(let w=0;w<g;w++)y.elements[w]=w;return y.width=p,y.height=d,y.scale=v,y.bakedCount=s.filter(w=>w.ok).length*3,y.charts=h.length,y}function a6(e,t,o,n){let r=t.width,a=t.height,i=d=>e.texture({width:r,height:a,min:d,mag:d,wrap:"clamp"}),s=d=>e.framebuffer({color:d,depth:!1}),c=n.map(()=>i("linear")),l=c.map(s),u=Object.keys(o).filter(d=>d!=="lm"&&d!=="a_lm").map(d=>{let m=o[d].length/t.elements.length;return"attribute "+(m===1?"float":"vec"+Math.round(m))+" "+d+";"}).join(`
`),h=n.map(d=>e({frag:d.frag,vert:`
		precision highp float;
		${u}
		attribute vec3 a_lm;
		${d.vertDecl||""}
		void main() {
			${d.vertMain||""}
			gl_Position = vec4(a_lm.xy * 2.0 - 1.0, 0.0, 1.0);
		}`,attributes:Object.assign({},o,{a_lm:o.a_lm||t.lm}),uniforms:d.uniforms||{},framebuffer:e.prop("fbo"),depth:{enable:!1},cull:{enable:!1},blend:{enable:!1},viewport:{x:0,y:0,width:r,height:a},count:t.bakedCount})),p=e({frag:`
		precision highp float;
		uniform sampler2D src;
		uniform vec2 px;
		uniform float copyOnly;
		void main() {
			vec2 uv = gl_FragCoord.xy * px;
			vec4 c = texture2D(src, uv);
			if (c.a > 0.0 || copyOnly > 0.5) { gl_FragColor = c; return; }
			vec4 sum = vec4(0.0);
			float n = 0.0;
			for (int y = -1; y <= 1; y++) {
				for (int x = -1; x <= 1; x++) {
					vec4 s = texture2D(src, uv + vec2(float(x), float(y)) * px);
					if (s.a > 0.0) { sum += s; n += 1.0; }
				}
			}
			gl_FragColor = n > 0.0 ? sum / n : vec4(0.0);
		}`,vert:`
		precision highp float;
		attribute vec2 p;
		void main() { gl_Position = vec4(p, 0.0, 1.0); }`,attributes:{p:[-1,-1,3,-1,-1,3]},uniforms:{src:e.prop("src"),px:[1/r,1/a],copyOnly:e.prop("copy")},framebuffer:e.prop("fbo"),depth:{enable:!1},blend:{enable:!1},viewport:{x:0,y:0,width:r,height:a},count:3}),v={tex:c,ready:!1,bake(){let d=i("nearest"),m=i("nearest"),g=s(d),y=s(m);h.forEach((b,M)=>{e.clear({color:[0,0,0,0],framebuffer:g}),b({fbo:g});for(let w=0;w<2;w++)p({src:d,fbo:y,copy:0}),p({src:m,fbo:g,copy:0});p({src:d,fbo:l[M],copy:1})}),g.destroy(),y.destroy(),d.destroy(),m.destroy(),v.ready=!0}};return v}_2.exports={charts:r6,baker:a6}});var Gi=me((rT,gl)=>{"use strict";var Ud=nr(),{C:jd}=or(),{A:rh,BENCH:vl}=Jr(),On=Math.PI,i6=[18,29,40],ah=.575,Di=[],ml=(e,t,o,n,r,a,i)=>Di.push(Object.assign({x:e,y:t,z:o,o:n,back:r,hw:a,s:1,k:1,range:7,mount:"wall"},i||{}));i6.forEach(e=>{ml(1.25+ah+.48,3.25,e,[1,0],.48,ah,{s:1.2}),ml(12.75-ah-.48,3.25,e,[-1,0],.48,ah,{s:1.2})});[3,11].forEach(e=>ml(e,3.45,jd.hallEnd-.5,[0,-1],.5,99,{s:1.2}));var s6=[14.63,19.63,24.03,28.43,32.83,jd.x1-.28];s6.forEach(e=>ml(e,3.15,jd.z0+.16+.44,[0,1],.44,.28));[3,8.8].forEach(e=>ml(.35+.44,2.75,e,[1,0],.44,99));{let e=(vl.inner+vl.outer)/2,t=Math.atan2(-1.12,-.98);Di.push({x:rh.cx+Math.cos(t)*e,y:vl.seat+.155,z:rh.zc+Math.sin(t)*e,o:[Math.cos(t),Math.sin(t)],back:0,hw:0,ring:[rh.cx,rh.zc,vl.outer+.07,vl.seat],s:.52,k:2.2,range:3.6,mount:"table"})}var Wd=.13,ih=.21,Wn=Wd/Math.cos(On/6),ko=e=>e.toFixed(4);function M2(e){let o=(e||Di.map((n,r)=>r)).map(n=>{let r=Di[n],a=-r.o[1],i=r.o[0],s=r.mount==="table"?`
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
		float t = mod(az + ${ko(On/6)}, ${ko(On/3)}) - ${ko(On/6)};
		float U = tan(t) / ${ko(Math.tan(On/6))};
		float V = (q.y / h) * (${ko(Wd/ih)} / cos(t));
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
	}`}var Wo=0,c6=1;function l6(){let e=[],t=[],o=[],n=[],r=[],a=(p,v,d,m)=>(e.push(p[0],p[1],p[2]),t.push(v[0],v[1],v[2]),o.push(d),n.push(m?m[0]:0,m?m[1]:0),e.length/3-1),i=(p,v)=>[p[0]-v[0],p[1]-v[1],p[2]-v[2]],s=(p,v)=>[p[1]*v[2]-p[2]*v[1],p[2]*v[0]-p[0]*v[2],p[0]*v[1]-p[1]*v[0]],c=p=>{let v=Math.hypot(p[0],p[1],p[2])||1;return[p[0]/v,p[1]/v,p[2]/v]};function l(p,v,d,m,g,y){let b=c(s(i(v,p),i(m,p))),M=a(p,b,g,[0,0]),w=a(v,b,g,[1,0]),_=a(d,b,g,[1,1]),S=a(m,b,g,[0,1]);r.push(M,w,_,M,_,S),y&&r.push(M,_,w,M,S,_)}function f(p,v,d){for(let y=0;y<p.length;y++){let b=p[Math.max(0,y-1)],M=p[Math.min(p.length-1,y+1)],w=c(i(M,b)),_=Math.abs(w[1])>.9?[1,0,0]:[0,1,0],S=c(s(w,_)),G=s(S,w),R=typeof v=="function"?v(y/(p.length-1)):v;for(let q=0;q<=6;q++){let T=q/6*On*2,B=Math.cos(T),P=Math.sin(T),H=[S[0]*B+G[0]*P,S[1]*B+G[1]*P,S[2]*B+G[2]*P];a([p[y][0]+H[0]*R,p[y][1]+H[1]*R,p[y][2]+H[2]*R],H,d)}}let g=e.length/3-p.length*7;for(let y=0;y<p.length-1;y++)for(let b=0;b<6;b++){let M=g+y*7+b,w=M+6+1;r.push(M,w,M+1,M+1,w,w+1)}}function u(p,v,d,m,g,y,b,M,w){let _=(S,G,R)=>{let q=y+On/6+R*On/3;return[p[0]+Math.cos(q)*S,G,p[2]+Math.sin(q)*S]};for(let S=0;S<6;S++)l(_(m,v,S+1),_(m,v,S),_(g,d,S),_(g,d,S+1),b);if(M&&g>0)for(let S=0;S<6;S++){let G=a([p[0],d,p[2]],[0,1,0],b),R=a(_(g,d,S),[0,1,0],b),q=a(_(g,d,S+1),[0,1,0],b);r.push(G,q,R)}if(w&&m>0)for(let S=0;S<6;S++){let G=a([p[0],v,p[2]],[0,-1,0],b),R=a(_(m,v,S),[0,-1,0],b),q=a(_(m,v,S+1),[0,-1,0],b);r.push(G,R,q)}}function h(p,v,d,m,g,y,b){let M=[];for(let _=0;_<=18;_++){let S=_/18,G=(b||0)+S*m*On*2,R=d*(1-.75*S);M.push([p[0]+v[0]*Math.cos(G)*R,p[1]+Math.sin(G)*R,p[2]+v[2]*Math.cos(G)*R])}f(M,g,y)}return Di.forEach(p=>{let v=p.s,d=Math.atan2(p.o[1],p.o[0]),m=[p.x,p.y,p.z],g=(M,w,_)=>[p.x+p.o[0]*M-p.o[1]*(_||0),p.y+w,p.z+p.o[1]*M+p.o[0]*(_||0)],y=p.y-ih*v,b=p.y+ih*v;for(let M=0;M<6;M++){let w=d+On/6+M*On/3,_=w+On/3,S=Wn*v*.97,G=[p.x+Math.cos(w)*S,y,p.z+Math.sin(w)*S],R=[p.x+Math.cos(_)*S,y,p.z+Math.sin(_)*S];l(R,G,[G[0],b,G[2]],[R[0],b,R[2]],c6,!0)}for(let M=0;M<6;M++){let w=d+On/6+M*On/3,_=Wn*v;f([[p.x+Math.cos(w)*_,y-.02*v,p.z+Math.sin(w)*_],[p.x+Math.cos(w)*_,b+.02*v,p.z+Math.sin(w)*_]],.011*v,Wo)}u(m,y-.035*v,y,Wn*v*1.12,Wn*v*1.12,d,Wo,!0,!0),u(m,y-.1*v,y-.035*v,Wn*v*.55,Wn*v*1,d,Wo,!1,!0),u(m,y-.17*v,y-.1*v,0,Wn*v*.55,d,Wo,!1,!1);for(let M=0;M<6;M++){let w=d+M*On/3,_=Wd*v*1.06,S=[p.x+Math.cos(w)*_,y-.06*v,p.z+Math.sin(w)*_];h(S,[-Math.sin(w),0,Math.cos(w)],.03*v,.85,.004*v,Wo,.3)}u(m,b,b+.03*v,Wn*v*1.14,Wn*v*1.14,d,Wo,!1,!0),u(m,b+.03*v,b+.2*v,Wn*v*1.14,Wn*v*.32,d,Wo,!1,!1),u(m,b+.2*v,b+.27*v,Wn*v*.34,Wn*v*.34,d,Wo,!1,!1),u(m,b+.27*v,b+.37*v,Wn*v*.42,0,d,Wo,!1,!0),f([[p.x,b+.36*v,p.z],[p.x,b+.47*v,p.z]],M=>.01*v*(1-.7*M),Wo),u([p.x,0,p.z],b+.44*v,b+.47*v,.018*v,0,d,Wo,!1,!0);for(let M=0;M<6;M++){let w=d+On/6+M*On/3,_=Wn*v*1.14,S=[p.x+Math.cos(w)*_,b+.03*v,p.z+Math.sin(w)*_];f([S,[S[0],S[1]+.09*v,S[2]]],G=>.008*v*(1-.8*G),Wo),u([S[0],0,S[2]],S[1]+.035*v,S[1]+.06*v,.014*v,.014*v,w,Wo,!0,!0)}if(p.mount==="wall"){let M=p.back,w=y-.32,_=g(-M,0,0);((T,B,P)=>{let H=[p.o[0],0,p.o[1]],se=[-p.o[1],0,p.o[0]],Z=(pe,Qe,wt)=>[_[0]+se[0]*pe+H[0]*wt,Qe,_[2]+se[2]*pe+H[2]*wt],le=.03,ie=.065;l(Z(-P,T,ie),Z(P,T,ie),Z(P,B,ie),Z(-P,B,ie),Wo,!0),l(Z(P,T,le),Z(P,T,ie),Z(P,B,ie),Z(P,B,le),Wo,!0),l(Z(-P,T,ie),Z(-P,T,le),Z(-P,B,le),Z(-P,B,ie),Wo,!0),l(Z(-P,B,ie),Z(P,B,ie),Z(P,B,le),Z(-P,B,le),Wo,!0),l(Z(-P,T,le),Z(P,T,le),Z(P,T,ie),Z(-P,T,ie),Wo,!0),u([_[0]+H[0]*ie,0,_[2]+H[2]*ie],B,B+.05,P*.6,0,d,Wo,!1,!0),u([_[0]+H[0]*ie,0,_[2]+H[2]*ie],T-.05,T,0,P*.6,d,Wo,!1,!1)})(w-.2,w+.2,.07);let G=[];for(let T=0;T<=14;T++){let B=T/14,P=-M+.05+B*(M-.05),H=w+.04+(y-.17*v-w-.04)*Math.pow(B,2.2);G.push(g(P,H-p.y,0))}f(G,T=>.022*(1-.3*T),Wo);let R=[];for(let T=0;T<=10;T++){let B=T/10;R.push(g(-M+.05+B*M*.6,w-.14+B*.16+.05*Math.sin(B*On)-p.y,0))}f(R,.009,Wo);let q=R[R.length-1];h([q[0]-p.o[0]*.03,q[1]+.02,q[2]-p.o[1]*.03],[p.o[0],0,p.o[1]],.045,1.1,.007,Wo,-.4),[.3,.55].forEach(T=>{let B=G[Math.round(T*14)],P=R[Math.round(T/.62*10)]||R[10];f([B,P],.006,Wo)}),[-1,1].forEach(T=>{let B=g(-.05,-ih*v-.2*v,0);h([B[0]-p.o[1]*T*.05,B[1],B[2]+p.o[0]*T*.05],[-p.o[1]*T,0,p.o[0]*T],.05*v,.9,.006,Wo,On)})}else for(let M=0;M<3;M++){let w=d+M*On*2/3,_=[p.x+Math.cos(w)*Wn*v*.7,y-.035*v,p.z+Math.sin(w)*Wn*v*.7],S=[p.x+Math.cos(w)*Wn*v*1.25,y-.17*v,p.z+Math.sin(w)*Wn*v*1.25];f([_,S],.012*v,Wo)}}),{pos:e,nrm:t,kind:o,uv:n,elems:r}}gl.exports=e=>{let t=l6(),o=e({vert:`
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
		${M2()}
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
		}`,attributes:{position:t.pos,normal:t.nrm,kind:t.kind,uv:t.uv},elements:t.elems,uniforms:{time:e.context("time"),night:()=>Ud.night}}),n=[],r=[];Di.forEach((i,s)=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(c=>{n.push(c[0],c[1]),r.push(i.x,i.y,i.z,i.s+s*.001)})});let a=e({vert:`
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
		}`,attributes:{corner:n,at:r},count:n.length/2,uniforms:{time:e.context("time"),night:()=>Ud.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o(),Ud.night>.01&&a()}};gl.exports.lanternGLSL=M2;gl.exports.LANTERNS=Di;gl.exports.TREE_LANTERN=[Di.length-1]});var gi=me((aT,Rr)=>{"use strict";var f6=nr(),To=Math.PI,Vn=e=>(+e).toFixed(4),Vd=e=>`vec3(${Vn(e[0])}, ${Vn(e[1])}, ${Vn(e[2])})`,Lt={x:-7,z:44.5},Vt=5.2,rr=15,et={z0:42.6,z1:46.4,zc:44.5,spring:4,r:1.9},Ya={z0:42.2,z1:46.8,top:6.3,x:.35},fh=[Lt.x-Math.sqrt(Vt*Vt-3.05*3.05),0,0],mn={x0:-2.05+fh[0],x1:fh[0],z0:41.45,z1:47.55,top:4.3},Xd=[[mn.x1+.05,2.35,mn.z0-.45],[mn.x1+.05,2.35,mn.z1+.45]].map(([e,t,o])=>{let n=Math.atan2(o-Lt.z,e-Lt.x);return[Lt.x+Math.cos(n)*(Vt-.16),t,Lt.z+Math.sin(n)*(Vt-.16)]}),bo={ri:3.4,ro:Vt,a0:-35*To/180,rise:.1836,step:3.6*To/180,n:88,thick:.36};bo.k=bo.rise/bo.step;var Nr=e=>bo.a0-e,qi=e=>e*bo.k,Ko={x:Lt.x+.1,z:Lt.z-.15,yaw:-To/2,scale:1.3},vi=Ko.scale/1.1,xl={keyX0:Ko.x-.524*vi,keyX1:Ko.x+.491*vi,keyTop:.647*vi,keyFront:Ko.z+.808*vi,keyBack:Ko.z+.72*vi,stoolX:Ko.x-.041*vi,stoolZ:Ko.z+1.122*vi,stoolFront:Ko.z+.96*vi,stoolTop:.37*vi,heading:To},lh=[[3.6,44.5],[.6,44.5],[-2.2,44.7],[-4.5,46.5],[-7,47.2],[-9.4,46.6],[-10.5,44.9],[-10.9,43.2]];function k2(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let o=t;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function h6(e,t){let o=1e9;for(let n=0;n<lh.length-1;n++){let[r,a]=lh[n],[i,s]=lh[n+1],c=i-r,l=s-a,f=Math.max(0,Math.min(1,((e-r)*c+(t-a)*l)/(c*c+l*l)));o=Math.min(o,Math.hypot(e-r-c*f,t-a-l*f))}return o}var sh=e=>et.spring+Math.sqrt(Math.max(0,et.r*et.r-(e-et.zc)*(e-et.zc))),$i=e=>Lt.x+Math.sqrt(Math.max(0,Vt*Vt-(e-Lt.z)*(e-Lt.z)));function Q0(e,t){return Math.hypot(e-Lt.x,t-Lt.z)<Vt||e<=0&&e>Lt.x&&t>et.z0&&t<et.z1||e>mn.x0&&e<mn.x1&&t>mn.z0&&t<mn.z1}function u6(e,t){if(Math.hypot(e-Lt.x,t-Lt.z)<bo.ri-.05)return 99;let n=Math.atan2(t-Lt.z,e-Lt.x),r=bo.a0-n;for(;r<0;)r+=2*To;for(;r>=2*To;)r-=2*To;return r>bo.n*bo.step?99:qi(r)-bo.thick}function d6(){let e=[],t=k2(1729),o=(a,i,s)=>{for(let c=Math.max(0,e.length-400);c<e.length;c++){let l=e[c];if(!(l[1]>.01)&&Math.hypot(l[0]-a,l[2]-i)<s+l[3]+.012)return!0}return!1},n=(a,i)=>{let s=a-Ko.x,c=i-Ko.z,l=Math.cos(Ko.yaw),f=Math.sin(Ko.yaw),u=(l*s-f*c)/Ko.scale,h=(f*s+l*c)/Ko.scale;return u>-1.05&&u<1.3&&h>-.7&&h<.72},r=0;for(;e.length<980&&r<6e4;){r++;let i=t()<.55?1.25+t()*2.1:1.25+Math.sqrt(t())*(Vt-1.45),s=t()*2*To,c=Lt.x+Math.cos(s)*i,l=Lt.z+Math.sin(s)*i;if(!Q0(c,l)||i>Vt-.18||n(c,l)||h6(c,l)<.62||u6(c,l)<2.3||c<mn.x1+.9)continue;let f=.022+t()*.02;if(o(c,l,f))continue;let u=t()<.15?.22+t()*.14:.05+t()*.15;e.push([c,0,l,f,u,t()*100])}for(let a=1;a<26;a++){let i=a<12?3:2;for(let s=0;s<i;s++){let c=(a+.25+t()*.5)*bo.step,l=Nr(c),f=bo.ri+.55+t()*(bo.ro-bo.ri-.75),u=.022+t()*.016;e.push([Lt.x+Math.cos(l)*f,(a+1)*bo.rise,Lt.z+Math.sin(l)*f,u,.05+t()*.14,t()*100])}}for(let a of Xd)for(let[i,s,c]of[[0,0,.26],[.06,.05,.18],[-.05,-.04,.14]])e.push([a[0]+i,a[1],a[2]+s,.024,c,t()*100]);for(let a of[mn.z0-.35,mn.z1+.35])for(let i=0;i<9;i++){let s=mn.x1+.35+t()*.5,c=a+(t()-.5)*.5;Math.hypot(s-Lt.x,c-Lt.z)>Vt-.15||e.push([s,0,c,.026+t()*.014,.18+t()*.3,t()*100])}return e}function p6(e){let o=k2(77),n=[];for(let r=0;r<14;r++){let a=e[Math.floor(o()*e.length)];n.push([a[0],a[1]+a[4],a[2]])}for(let r=0;r<12;r++){let a=n.map(()=>[0,0,0,0]);for(let i of e){let s=[i[0],i[1]+i[4],i[2]],c=0,l=1e9;n.forEach((f,u)=>{let h=(s[0]-f[0])**2+(s[1]-f[1])**2*4+(s[2]-f[2])**2;h<l&&(l=h,c=u)}),a[c][0]+=s[0],a[c][1]+=s[1],a[c][2]+=s[2],a[c][3]++}n=a.map((i,s)=>i[3]?[i[0]/i[3],i[1]/i[3],i[2]/i[3],i[3]]:n[s])}return n.filter(r=>r[3]>0).map(r=>[r[0],r[1]+.12,r[2],r[3]/e.length])}var Yd=d6(),mi=p6(Yd.filter(e=>e[1]<2||e[1]>2.5)).concat(Xd.map(e=>[e[0],e[1]+.35,e[2],.035])),v6=64,Z0=Math.ceil(mi.length/4);function E2(){let e=mi.map((n,r)=>`
	float candleD${r}(vec3 p, vec3 N, float floorK) {
		vec3 d = ${Vd(n)} - p;
		float dd = dot(d, d);
		vec3 L = d * inversesqrt(dd);
		float lam = max(dot(N, L), 0.0) * 0.82 + 0.18;
		return ${Vn(n[3]*mi.length)} * (lam / (0.7 + dd * 0.42) + floorK * 0.9 / (0.02 + dd * 7.0));
	}`).join(""),t=mi.map((n,r)=>`
		{
			vec3 d = ${Vd(n)} - p;
			float dd = dot(d, d);
			vec3 L = d * inversesqrt(dd);
			spec += ${Vn(n[3]*mi.length)} * shFl${r>>2}.${"xyzw"[r&3]} * pow(max(dot(N, normalize(L + V)), 0.0), ex) / (0.25 + dd * 0.9);
		}`).join(""),o=[];for(let n=0;n<Z0;n++)o.push(`dot(candleDec(b${n}), shFl${n})`);return`${e}
	// the candles' glints on a polished face (seen from where you stand, so
	// never baked)
	vec3 candleSpec(vec3 p, vec3 N, vec3 V, float gloss) {
		vec3 spec = vec3(0.0);
		float ex = mix(10.0, 180.0, gloss);
		${t}
		return spec * gloss * 1.6 * vec3(1.0, 0.62, 0.30) * 0.62;
	}
	const float CANDLE_LOG = ${Vn(Math.log2(1+8*v6))};
	float candleEnc(float d) { return max(log2(1.0 + 8.0 * max(d, 0.0)) / CANDLE_LOG, 1.0 / 255.0); }
	vec4 candleDec(vec4 e) { return (exp2(e * CANDLE_LOG) - 1.0) / 8.0; }
	vec3 candlesBaked(${Array.from({length:Z0},(n,r)=>"vec4 b"+r).join(", ")}) {
		return (${o.join(" + ")}) * vec3(1.0, 0.56, 0.24) * 0.62;
	}`}function m6(e){let t=[0,1,2,3].map(o=>e*4+o<mi.length?`candleEnc(candleD${e*4+o}(v_pos, N, floorK))`:"1.0 / 255.0");return`
	precision highp float;
	uniform float night;
	uniform vec4 shFl0, shFl1, shFl2, shFl3;
	varying vec3 v_pos, v_n;
	${E2()}
	void main() {
		vec3 N = normalize(v_n);
		float floorK = (v_pos.y < 0.02 && N.y > 0.9) ? 1.0 : 0.0;
		gl_FragColor = vec4(${t.join(", ")});
	}`}function S2(){let e=vr().exp("shnolights")?"":mi.map((t,o)=>`
		{
			vec3 d = ${Vd(t)} - p;
			float dd = dot(d, d);
			vec3 L = d * inversesqrt(dd);
			float fl = shFl${o>>2}.${"xyzw"[o&3]};
			float w = ${Vn(t[3]*mi.length)} * fl;
			float lam = max(dot(N, L), 0.0) * 0.82 + 0.18;
			col += w * lam / (0.7 + dd * 0.42);
			// the floor glows in pools round the candles
			col += w * floorK * 0.9 / (0.02 + dd * 7.0);
			spec += w * pow(max(dot(N, normalize(L + V)), 0.0), mix(10.0, 180.0, gloss)) * gloss * 1.6 / (0.25 + dd * 0.9);
		}`).join("");return`
	// each candle's flicker, worked out once a frame (flickers below)
	uniform vec4 shFl0, shFl1, shFl2, shFl3;
	${E2()}
	vec3 roomRest(vec3 p, vec3 N);
	vec3 roomLight(vec3 p, vec3 N, vec3 V, float gloss, out vec3 spec) {
		spec = vec3(0.0);
		vec3 col = vec3(0.0);
		float floorK = (p.y < 0.02 && N.y > 0.9) ? 1.0 : 0.0;
		${e}
		col *= vec3(1.0, 0.56, 0.24) * 0.62;
		spec *= vec3(1.0, 0.62, 0.30) * 0.62;
		return col + roomRest(p, N);
	}
	// the rest of the room's light: the oculus, the pool on the piano, the
	// hall's light through the arch (cheap, and it follows day and night)
	vec3 roomRest(vec3 p, vec3 N) {
		vec3 col = vec3(0.0);
		// light from the oculus, high above: pale by day, moonlight at night
		float up = smoothstep(0.0, ${Vn(rr)}, p.y);
		vec3 sky = mix(vec3(0.10, 0.095, 0.085), vec3(0.030, 0.045, 0.085), night);
		col += sky * (0.35 + 0.65 * up) * (0.55 + 0.45 * max(N.y, 0.0)) * (0.6 + 0.4 * max(-dot(N, normalize(p - vec3(${Vn(Lt.x)}, ${Vn(rr)}, ${Vn(Lt.z)}))), 0.0));
		// and straight down from it a soft pool falls on the piano and
		// whoever is playing it: it catches his shoulders, his hair, the
		// edge of the lid, and lifts them out of the dark
		float pool = 1.0 - smoothstep(0.5, 2.9, length(p.xz - vec2(${Vn(xl.stoolX)}, ${Vn(xl.keyFront+.1)})));
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
	}`}var Dt={FLOOR:0,WALL:1,STEP:2,SOFFIT:3,STRING:4,CEIL:5,OCULUS:6,HALLSTONE:7,IRON:8,RAILING:9,CANDLE:10};function A2(){let e={pos:[],nrm:[],kind:[],uv:[],idx:[]};return e.v=(t,o,n,r)=>(e.pos.push(t[0],t[1],t[2]),e.nrm.push(o[0],o[1],o[2]),e.kind.push(n),e.uv.push(r?r[0]:0,r?r[1]:0),e.pos.length/3-1),e.quad=(t,o,n,r,a,i,s)=>{let c=e.v(t,a,i,s&&s[0]),l=e.v(o,a,i,s&&s[1]),f=e.v(n,a,i,s&&s[2]),u=e.v(r,a,i,s&&s[3]);e.idx.push(c,l,f,c,f,u)},e.tri=(t,o,n,r,a)=>{let i=e.v(t,r,a),s=e.v(o,r,a),c=e.v(n,r,a);e.idx.push(i,s,c)},e}function g6(){let e=A2(),t=(n,r,a)=>[Lt.x+Math.cos(n)*r,a,Lt.z+Math.sin(n)*r],o=n=>[Math.cos(n),0,Math.sin(n)];for(let r=0;r>mn.x0-.01;r-=.25)for(let a=41.2;a<47.8;a+=.2){let i=r-.25,s=r,c=a,l=a+.2;if(!(Q0(i,c)||Q0(s,c)||Q0(i,l)||Q0(s,l)||Q0((i+s)/2,(c+l)/2)))continue;let f=c,u=l;i>$i(et.z0)-.3&&(f=Math.max(f,et.z0),u=Math.min(u,et.z1),u<=f)||e.quad([i,0,f],[i,0,u],[s,0,u],[s,0,f],[0,1,0],Dt.FLOOR)}{for(let r=0;r<360;r++){let a=r/360*2*To,i=(r+1)/360*2*To,s=(a+i)/2,c=t(s,Vt,0),l=0;c[0]>Lt.x&&c[2]>et.z0-.02&&c[2]<et.z1+.02&&(l=Math.max(sh(Math.min(Math.max(t(a,Vt,0)[2],et.z0),et.z1)),sh(Math.min(Math.max(t(i,Vt,0)[2],et.z0),et.z1)))),c[0]<Lt.x&&c[2]>mn.z0-.02&&c[2]<mn.z1+.02&&(l=mn.top);let f=a*Vt,u=i*Vt,h=o(a).map(d=>-d),p=o(i).map(d=>-d),v=[l];for(let d=Math.ceil(l/2.5)*2.5;d<rr;d+=2.5)d>l+.01&&v.push(d);v.push(rr);for(let d=0;d<v.length-1;d++){let m=v[d],g=v[d+1],y=e.v(t(a,Vt,m),h,Dt.WALL,[f,m]),b=e.v(t(i,Vt,m),p,Dt.WALL,[u,m]),M=e.v(t(i,Vt,g),p,Dt.WALL,[u,g]),w=e.v(t(a,Vt,g),h,Dt.WALL,[f,g]);e.idx.push(y,b,M,y,M,w)}}for(let[r,a,i]of[[6.55,.22,.07],[0,.32,.05]])for(let s=0;s<360;s++){let c=s/360*2*To,l=(s+1)/360*2*To,f=(c+l)/2,u=t(f,Vt,0);if(r<1&&(u[0]>Lt.x&&u[2]>et.z0&&u[2]<et.z1||u[0]<Lt.x&&u[2]>mn.z0&&u[2]<mn.z1))continue;let h=Vt-i;e.quad(t(c,h,r),t(l,h,r),t(l,h,r+a),t(c,h,r+a),o(f).map(p=>-p),Dt.WALL,[[c*Vt,r+100],[l*Vt,r+100],[l*Vt,r+a+100],[c*Vt,r+a+100]]),e.quad(t(c,h,r+a),t(l,h,r+a),t(l,Vt,r+a),t(c,Vt,r+a),[0,1,0],Dt.WALL,[[0,200],[0,200],[0,200],[0,200]]),r>1&&e.quad(t(c,Vt,r),t(l,Vt,r),t(l,h,r),t(c,h,r),[0,-1,0],Dt.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let n=Ya.x;for(let[a,i]of[[et.z0,1],[et.z1,-1]]){let s=$i(a);e.quad([n,0,a],[s,0,a],[s,et.spring,a],[n,et.spring,a],[0,0,i],Dt.WALL,[[n,0],[s,0],[s,et.spring],[n,et.spring]])}let r=40;for(let a=0;a<r;a++){let i=a/r*To,s=(a+1)/r*To,c=et.zc-Math.cos(i)*et.r,l=et.zc-Math.cos(s)*et.r,f=et.spring+Math.sin(i)*et.r,u=et.spring+Math.sin(s)*et.r,h=[0,-Math.sin(i),Math.cos(i)],p=[0,-Math.sin(s),Math.cos(s)],v=e.v([n,f,c],h,Dt.WALL,[n,i*et.r]),d=e.v([$i(c),f,c],h,Dt.WALL,[$i(c),i*et.r]),m=e.v([$i(l),u,l],p,Dt.WALL,[$i(l),s*et.r]),g=e.v([n,u,l],p,Dt.WALL,[n,s*et.r]);e.idx.push(v,d,m,v,m,g)}}{let n=Ya.x,r=.05;for(let l=Ya.z0;l<Ya.z1-1e-6;l+=r){let f=l,u=Math.min(Ya.z1,l+r),p=(v=>v>et.z0&&v<et.z1)((f+u)/2)?Math.max(sh(f),sh(u)):0;e.quad([n,p,f],[n,p,u],[n,Ya.top,u],[n,Ya.top,f],[1,0,0],Dt.HALLSTONE,[[f,p],[u,p],[u,Ya.top],[f,Ya.top]])}let a=.32,i=.06,s=n+i,c=36;for(let l=0;l<c;l++){let f=l/c*To,u=(l+1)/c*To,h=(g,y)=>[s,et.spring+Math.sin(g)*y,et.zc-Math.cos(g)*y],p=et.r,v=et.r+a;e.quad(h(f,p),h(u,p),h(u,v),h(f,v),[1,0,0],Dt.HALLSTONE,[[0,300],[0,300],[1,300],[1,300]]);let d=(g,y,b)=>[b,et.spring+Math.sin(g)*y,et.zc-Math.cos(g)*y],m=[0,Math.sin((f+u)/2),-Math.cos((f+u)/2)];e.quad(d(f,v,n),d(u,v,n),d(u,v,s),d(f,v,s),m,Dt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),e.quad(d(f,p,n),d(u,p,n),d(u,p,s),d(f,p,s),m.map(g=>-g),Dt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}for(let[l,f,u]of[[et.z0-a,et.z0,-1],[et.z1,et.z1+a,1]]){e.quad([s,0,l],[s,0,f],[s,et.spring,f],[s,et.spring,l],[1,0,0],Dt.HALLSTONE,[[0,300],[1,300],[1,300],[0,300]]);let h=u<0?l:f,p=u<0?f:l;e.quad([n,0,h],[s,0,h],[s,et.spring,h],[n,et.spring,h],[0,0,u],Dt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),e.quad([n,0,p],[s,0,p],[s,et.spring,p],[n,et.spring,p],[0,0,-u],Dt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);let v=et.spring-.16,d=.16,m=.11,g=Math.min(l,f)-.05,y=Math.max(l,f)+.05;e.quad([n+m,v,g],[n+m,v,y],[n+m,v+d,y],[n+m,v+d,g],[1,0,0],Dt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),e.quad([n,v+d,g],[n+m,v+d,g],[n+m,v+d,y],[n,v+d,y],[0,1,0],Dt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),e.quad([n,v,g],[n,v,y],[n+m,v,y],[n+m,v,g],[0,-1,0],Dt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let b of[g,y])e.quad([n,v,b],[n+m,v,b],[n+m,v+d,b],[n,v+d,b],[0,0,b===g?-1:1],Dt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}{let l=et.spring+et.r-.05,f=et.spring+et.r+a+.12,u=.16,h=.22,p=s+.04;e.quad([p,l,et.zc-u],[p,l,et.zc+u],[p,f,et.zc+h],[p,f,et.zc-h],[1,0,0],Dt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let v of[-1,1])e.quad([n,l,et.zc+v*u],[p,l,et.zc+v*u],[p,f,et.zc+v*h],[n,f,et.zc+v*h],[0,0,v],Dt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);e.quad([n,f,et.zc-h],[p,f,et.zc-h],[p,f,et.zc+h],[n,f,et.zc+h],[0,1,0],Dt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}}{let{x0:n,x1:r,z0:a,z1:i,top:s}=mn;e.quad([n,0,a],[n,0,i],[n,s,i],[n,s,a],[1,0,0],Dt.WALL,[[a,0],[i,0],[i,s],[a,s]]);for(let[l,f]of[[a,1],[i,-1]]){let u=Lt.x-Math.sqrt(Vt*Vt-(l-Lt.z)*(l-Lt.z));e.quad([n,0,l],[u,0,l],[u,s,l],[n,s,l],[0,0,f],Dt.WALL,[[n,0],[u,0],[u,s],[n,s]])}let c=24;for(let l=0;l<c;l++){let f=a+(i-a)*l/c,u=a+(i-a)*(l+1)/c,h=Lt.x-Math.sqrt(Vt*Vt-(f-Lt.z)**2),p=Lt.x-Math.sqrt(Vt*Vt-(u-Lt.z)**2);e.quad([n,s,f],[h,s,f],[p,s,u],[n,s,u],[0,-1,0],Dt.WALL,[[0,200],[0,200],[0,200],[0,200]])}for(let l=0;l<c;l++){let f=a+(i-a)*l/c,u=a+(i-a)*(l+1)/c,h=Lt.x-Math.sqrt(Vt*Vt-(f-Lt.z)**2)+.05,p=Lt.x-Math.sqrt(Vt*Vt-(u-Lt.z)**2)+.05;e.quad([h,s-.3,f],[p,s-.3,u],[p,s,u],[h,s,f],[1,0,0],Dt.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let r=[1.15,1.6,2.3,3,3.35,4.2,Vt];for(let a=0;a<120;a++){let i=a/120*2*To,s=(a+1)/120*2*To,c=(i+s)/2;c>To&&(c-=2*To);for(let l=0;l<r.length-1;l++){let f=r[l],u=r[l+1],h=c*180/To;f>=3.3&&h>8&&h<85||e.quad(t(i,f,rr),t(i,u,rr),t(s,u,rr),t(s,f,rr),[0,-1,0],Dt.CEIL,[[i*f,f],[i*u,u],[s*u,u],[s*f,f]])}e.quad(t(i,1.15,rr),t(s,1.15,rr),t(s,1.15,rr+.7),t(i,1.15,rr+.7),o(c).map(l=>-l),Dt.CEIL,[[0,400],[0,400],[0,400],[0,400]]),e.tri([Lt.x,rr+.7,Lt.z],t(s,1.15,rr+.7),t(i,1.15,rr+.7),[0,-1,0],Dt.OCULUS)}}{let n=bo.ri,r=bo.ro,a=bo.n*bo.step;for(let c=0;c<bo.n;c++){let l=c*bo.step,f=(c+1)*bo.step,u=Nr(l),h=Nr(f),p=(c+1)*bo.rise,v=c*bo.rise,d=2;for(let y=0;y<d;y++){let b=u+(h-u)*y/d-(y===0?.004:0),M=u+(h-u)*(y+1)/d;e.quad(t(b,n,p),t(b,r,p),t(M,r,p),t(M,n,p),[0,1,0],Dt.STEP,[[n*b,c],[r*b,c],[r*M,c],[n*M,c]])}let m=[-Math.sin(u),0,Math.cos(u)],g=u-.004;e.quad(t(g,n,v),t(g,r,v),t(g,r,p),t(g,n,p),m,Dt.STEP,[[n*u,c+.5],[r*u,c+.5],[r*u,c+.5],[n*u,c+.5]]),e.quad(t(u,n,qi(l)+.06),t(h,n,qi(f)+.06),t(h,n,p),t(g,n,p),o((u+h)/2).map(y=>-y),Dt.STEP,[[0,500],[0,500],[0,500],[0,500]])}let i=Math.ceil(a/(1.2*To/180)),s=[n,n+.6,n+1.2,r];for(let c=0;c<i;c++){let l=c/i*a,f=(c+1)/i*a,u=Nr(l),h=Nr(f),p=qi(l),v=qi(f),d=p-bo.thick,m=v-bo.thick,g=o(u).map(S=>-S),y=o(h).map(S=>-S),b=e.v(t(u,n,d),g,Dt.STRING,[l*n,0]),M=e.v(t(h,n,m),y,Dt.STRING,[f*n,0]),w=e.v(t(h,n,v+.06),y,Dt.STRING,[f*n,1]),_=e.v(t(u,n,p+.06),g,Dt.STRING,[l*n,1]);e.idx.push(b,M,w,b,w,_);for(let S=0;S<s.length-1;S++){let G=s[S],R=s[S+1],q=T=>{let B=o(T);return[-B[0]*.12,-.99,-B[2]*.12]};e.quad(t(u,G,d),t(u,R,d),t(h,R,m),t(h,G,m),q((u+h)/2),Dt.SOFFIT,[[l*G,G],[l*R,R],[f*R,R],[f*G,G]])}}}return e}function x6(){let e=A2(),t=bo.ri+.045,o=bo.n*bo.step,n=Math.ceil(o/(.8*To/180)),r=.92,a=(c,l,f)=>[Lt.x+Math.cos(c)*l,f,Lt.z+Math.sin(c)*l],i=c=>[Math.cos(c),0,Math.sin(c)];for(let c=0;c<n;c++){let l=c/n*o,f=(c+1)/n*o,u=Nr(l),h=Nr(f),p=qi(l)+.06,v=qi(f)+.06,d=i(u).map(S=>-S),m=i(h).map(S=>-S),g=l*t,y=f*t,b=e.v(a(u,t,p),d,Dt.RAILING,[g,0]),M=e.v(a(h,t,v),m,Dt.RAILING,[y,0]),w=e.v(a(h,t,v+r),m,Dt.RAILING,[y,r]),_=e.v(a(u,t,p+r),d,Dt.RAILING,[g,r]);e.idx.push(b,M,w,b,w,_)}((c,l,f,u)=>{let p=d=>{let m=Nr(d),g=qi(d)+.06+l,y=a(m,t+c,g),b=i(m),M=[];for(let w=0;w<8;w++){let _=w/8*2*To,S=[b[0]*Math.cos(_),Math.sin(_),b[2]*Math.cos(_)];M.push([[y[0]+S[0]*f,y[1]+S[1]*f,y[2]+S[2]*f],S])}return M},v=p(0);for(let d=1;d<=n;d++){let m=p(d/n*o);for(let g=0;g<8;g++){let y=(g+1)%8,b=e.v(v[g][0],v[g][1],u),M=e.v(m[g][0],m[g][1],u),w=e.v(m[y][0],m[y][1],u),_=e.v(v[y][0],v[y][1],u);e.idx.push(b,M,w,b,w,_)}v=m}})(0,r+.02,.028,Dt.IRON);for(let c of Xd){let l=Math.atan2(c[2]-Lt.z,c[0]-Lt.x),f=[Math.cos(l),0,Math.sin(l)],u=12;for(let d=0;d<u;d++){let m=d/u*2*To,g=(d+1)/u*2*To,y=(b,M,w)=>[c[0]+Math.cos(b)*M,w,c[2]+Math.sin(b)*M];e.quad(y(m,.16,c[1]),y(g,.16,c[1]),y(g,.13,c[1]-.05),y(m,.13,c[1]-.05),[Math.cos(m)*.6,.8,Math.sin(m)*.6],Dt.IRON),e.quad(y(m,.16,c[1]),y(g,.16,c[1]),y(g,0,c[1]+.002),y(m,0,c[1]+.002),[0,1,0],Dt.IRON)}let h=[c[0]+f[0]*.16,c[1]-.35,c[2]+f[2]*.16],p=[-f[2],0,f[0]],v=.018;e.quad([h[0]-p[0]*v,h[1],h[2]-p[2]*v],[h[0]+p[0]*v,h[1],h[2]+p[2]*v],[c[0]+p[0]*v,c[1]-.05,c[2]+p[2]*v],[c[0]-p[0]*v,c[1]-.05,c[2]-p[2]*v],[-f[0],.5,-f[2]],Dt.IRON)}{let c=Nr(0),l=a(c,t,0),f=10;for(let u=0;u<f;u++){let h=u/f*2*To,p=(u+1)/f*2*To,v=(d,m,g)=>[l[0]+Math.cos(d)*m,g,l[2]+Math.sin(d)*m];e.quad(v(h,.035,0),v(p,.035,0),v(p,.035,r+.1),v(h,.035,r+.1),[Math.cos((h+p)/2),0,Math.sin((h+p)/2)],Dt.IRON),e.quad(v(h,.06,r+.1),v(p,.06,r+.1),v(p,.03,r+.2),v(h,.03,r+.2),[Math.cos((h+p)/2)*.8,.6,Math.sin((h+p)/2)*.8],Dt.IRON)}}return e}function y6(){let e=[],t=[],o=[],n=[];for(let a of Yd){let[i,s,c,l,f,u]=a,h=e.length/3;for(let v=0;v<=7;v++){let d=v/7*2*To+u,m=Math.cos(d),g=Math.sin(d);e.push(i+m*l,s,c+g*l,i+m*l,s+f,c+g*l),t.push(m,0,g,m,0,g),o.push(0,f,u,1,f,u)}for(let v=0;v<7;v++){let d=h+v*2;n.push(d,d+2,d+3,d,d+3,d+1)}let p=e.length/3;e.push(i,s+f-.006,c),t.push(0,1,0),o.push(2,f,u);for(let v=0;v<7;v++){let d=v/7*2*To+u;e.push(i+Math.cos(d)*l,s+f,c+Math.sin(d)*l),t.push(0,1,0),o.push(1,f,u)}for(let v=0;v<7;v++)n.push(p,p+1+v,p+1+(v+1)%7)}return{pos:e,nrm:t,info:o,idx:n}}function b6(){let e=[],t=[],o=[],n=[];for(let r of Yd){let[a,i,s,,c,l]=r,f=e.length/3;for(let u of[[-1,0],[1,0],[1,1],[-1,1]])e.push(a,i+c+.004,s),t.push(u[0],u[1]),o.push(l);n.push(f,f+1,f+2,f,f+2,f+3)}return{ctr:e,corner:t,ph:o,idx:n}}function w6(e){let t=new DataView(e),o=t.getUint32(4,!0),n=t.getUint32(8,!0),r=[],a=[];for(let g=0;g<3;g++)r.push(t.getFloat32(12+g*4,!0)),a.push(t.getFloat32(24+g*4,!0));let i=36,s=new Uint16Array(e,i,o*3);i+=o*6;let c=new Uint16Array(e,i,n);i+=n*2;let l=new Int8Array(e,i,o*3);i+=o*3;let f=new Uint8Array(e,i,o),u=new Float32Array(o*3),h=new Float32Array(o*3),p=new Float32Array(o),v=Math.cos(Ko.yaw),d=Math.sin(Ko.yaw),m=Ko.scale;for(let g=0;g<o;g++){let y=(r[0]+s[g*3]/65535*a[0])*m,b=(r[1]+s[g*3+1]/65535*a[1])*m,M=(r[2]+s[g*3+2]/65535*a[2])*m;u[g*3]=Ko.x+v*y+d*M,u[g*3+1]=b,u[g*3+2]=Ko.z-d*y+v*M;let w=l[g*3]/127,_=l[g*3+1]/127,S=l[g*3+2]/127;h[g*3]=v*w+d*S,h[g*3+1]=_,h[g*3+2]=-d*w+v*S,p[g]=f[g]}return{pos:u,nrm:h,mat:p,idx:new Uint32Array(c)}}function _6(){let e=[],t=(u,h)=>[Lt.x+Math.cos(u)*h,Lt.z+Math.sin(u)*h];e.push([[0,et.z0],[$i(et.z0),et.z0]]),e.push([[$i(et.z1),et.z1],[0,et.z1]]);let o=Math.asin((et.z1-Lt.z)/Vt),n=72;for(let u=0;u<n;u++){let h=o+u/n*(2*To-2*o),p=o+(u+1)/n*(2*To-2*o);e.push([t(h,Vt-.25),t(p,Vt-.25)])}let r=fh[0]-.55+.35;e.push([[r,mn.z0],[r,mn.z1]]);let a=2.4/bo.k,i=12;for(let u=0;u<i;u++){let h=Nr(u/i*a),p=Nr((u+1)/i*a);e.push([t(h,bo.ri-.2),t(p,bo.ri-.2)])}e.push([t(Nr(0),bo.ri-.2),t(Nr(0),Vt)]),e.push([t(Nr(a),bo.ri-.2),t(Nr(a),Vt)]);let s=Math.cos(Ko.yaw),c=Math.sin(Ko.yaw),l=Ko.scale,f=[[-1,-.62],[1.25,-.62],[1.25,.62],[-1,.62]].map(([u,h])=>[Ko.x+(s*u+c*h)*l,Ko.z+(-c*u+s*h)*l]);for(let u=0;u<4;u++)e.push([f[u],f[(u+1)%4]]);return e}Rr.exports=e=>{let t=g6(),o=null;if(!vr().exp("shnobake"))try{o=Bd().charts({pos:t.pos,nrm:t.nrm,idx:t.idx,extra:{kind:[t.kind,1],uv:[t.uv,2]}},{width:1024,maxHeight:2048,scale:vr().isPhone?.75:1,bakeTri:(S,G)=>t.kind[G]<=Dt.CEIL,kind:(S,G)=>S[1]>.9&&G[1]<.05?"floor":S[1]<-.5?"ceiling":"wall",density:S=>({floor:40,wall:20,ceiling:10})[S]})}catch(_){o=null}let n=o?{pos:o.position,nrm:o.normal,kind:o.kind,uv:o.uv,idx:o.elements}:t,r=x6(),a=y6(),i=b6(),s=Gi(),c=`
	precision highp float;
	${f6.GLSL}
	uniform float time;
	${S2()}
	${s.lanternGLSL()}
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
	}`,l=`
	precision highp float;
	uniform mat4 proj, view;
	uniform float yScale;
	attribute vec3 position, normal;
	attribute float kind;
	attribute vec2 uv;
	varying vec3 v_pos, v_n, v_eye;
	varying float v_kind;
	varying vec2 v_uv;
	#ifdef HAS_BAKE
	attribute vec3 a_lm;
	varying vec3 v_lm;
	#endif
	void main() {
		v_pos = position; v_n = normal; v_kind = kind; v_uv = uv;
		#ifdef HAS_BAKE
		v_lm = a_lm;
		#endif
		v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
		vec3 p = position; p.y *= yScale;
		gl_Position = proj * view * vec4(p, 1.0);
	}`,f=o?`#define HAS_BAKE
`:"",u=null;if(o)try{u=Bd().baker(e,o,{position:o.position,normal:o.normal},Array.from({length:Z0},(_,S)=>({frag:m6(S),vertDecl:"varying vec3 v_pos, v_n;",vertMain:"v_pos = position; v_n = normal;"})))}catch(_){u=null}let h=e.texture({width:1,height:1}),p={bakeOn:()=>u&&u.ready?1:0};for(let _=0;_<Z0;_++)p["shB"+_]=()=>u&&u.ready?u.tex[_]:h;let v=e({vert:f+l,uniforms:o?p:{},frag:`${f}${c}
		#ifdef HAS_BAKE
		uniform float bakeOn;
		uniform sampler2D ${Array.from({length:Z0},(_,S)=>"shB"+S).join(", ")};
		varying vec3 v_lm;
		#endif
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
				base *= 1.0 - 0.25 * smoothstep(3.0, ${Vn(rr)}, v_pos.y);
			} else if (k < 2.5) {
				// the steps: a greyer, harder stone, worn paler in the middle
				float r = length(v_pos.xz - vec2(${Vn(Lt.x)}, ${Vn(Lt.z)}));
				base = limestone(v_pos.xz * 1.4 + v_uv * 0.3) * vec3(0.90, 0.88, 0.86);
				base *= 1.0 + 0.10 * (1.0 - smoothstep(0.0, 0.6, abs(r - ${Vn((bo.ri+bo.ro)/2)})));
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
				vec2 q = v_pos.xz - vec2(${Vn(Lt.x)}, ${Vn(Lt.z)});
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
			vec3 light;
			bool fromBake = false;
			#ifdef HAS_BAKE
			// (the baked light is for the faces' fronts; a back seen through
			// a gap keeps its light live)
			if (bakeOn > 0.5 && v_lm.z > 0.5 && gl_FrontFacing) {
				vec4 b0 = texture2D(shB0, v_lm.xy);
				if (b0.a > 0.5 / 255.0) {
					light = candlesBaked(${Array.from({length:Z0},(_,S)=>S===0?"b0":"texture2D(shB"+S+", v_lm.xy)").join(", ")}) + roomRest(v_pos, N);
					spec = gloss > 0.3 ? candleSpec(v_pos, N, V, gloss) : vec3(0.0);
					fromBake = true;
				}
			}
			#endif
			if (!fromBake) light = roomLight(v_pos, N, V, gloss, spec);
			vec3 col = base * light + spec * 0.6;
			// under the stair, and high up, a deeper dark
			col *= mix(0.55, 1.0, smoothstep(-0.95, -0.2, N.y));
			col = roomHaze(v_pos, v_eye, col);
			gl_FragColor = vec4(col, 1.0);
		}`,attributes:o?{position:n.pos,normal:n.nrm,kind:n.kind,uv:n.uv,a_lm:o.lm}:{position:n.pos,normal:n.nrm,kind:n.kind,uv:n.uv},elements:o?n.idx:new Uint32Array(n.idx),cull:{enable:!1}}),d=e({vert:l,frag:`${c}
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
		}`,attributes:{position:r.pos,normal:r.nrm,kind:r.kind,uv:r.uv},elements:new Uint32Array(r.idx),cull:{enable:!1}}),m=e({vert:`
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
		}`,frag:`${c}
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
		}`,attributes:{position:a.pos,normal:a.nrm,info:a.info},elements:new Uint32Array(a.idx),cull:{enable:!1}}),g=e({vert:`
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
		}`,attributes:{ctr:i.ctr,corner:i.corner,ph:i.ph},elements:new Uint32Array(i.idx),uniforms:{halo:e.prop("halo")},depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),y=null;fetch("res/piano.bin").then(_=>{if(!_.ok)throw new Error("Could not load piano.bin");return _.arrayBuffer()}).then(_=>{let S=w6(_);y=e({vert:`
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
				}`,frag:`${c}
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
				}`,attributes:{position:S.pos,normal:S.nrm,mat:S.mat},elements:S.idx,cull:{enable:!1}})}).catch(_=>console.error(_));let b=(()=>{let _=[],S=[],G=[],R=[],T=[Lt.x,rr-.3,Lt.z],B=[xl.stoolX,.02,xl.keyFront+.1],P=1.25,H=2.35;for(let se=0;se<=40;se++){let Z=se/40*2*To,le=Math.cos(Z),ie=Math.sin(Z);_.push(T[0]+le*P,T[1],T[2]+ie*P,B[0]+le*H,B[1],B[2]+ie*H),S.push(le,.08,ie,le,.08,ie),G.push(1,0)}for(let se=0;se<40;se++){let Z=se*2;R.push(Z,Z+1,Z+3,Z,Z+3,Z+2)}return{pos:_,nrm:S,hh:G,idx:R}})(),M=e({vert:`
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
		}`,attributes:{position:b.pos,normal:b.nrm,hh:b.hh},elements:b.idx,depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});function w(_){let S=_&&_.reflected;v(),d(),m(),y&&y(),S||(M(),g({halo:1}),g({halo:0}))}return w.prepare=()=>{if(!(!u||u.ready))try{u.bake()}catch(_){u=null}},w};Rr.exports.C=Lt;Rr.exports.R=Vt;Rr.exports.PASS=et;Rr.exports.SURR=Ya;Rr.exports.OFF=fh;Rr.exports.BAY=mn;Rr.exports.PATH=lh;Rr.exports.PIANO=Ko;Rr.exports.PLAY=xl;Rr.exports.TOP=rr;Rr.exports.roomGLSL=S2;var ch=e=>+(+e).toFixed(4);Rr.exports.flicker=(e,t)=>[0,1,2,3].map(o=>{let n=t*4+o;return n>=mi.length?0:.86+.08*Math.sin(e*ch(5.3+n*.71)+ch(n*1.9))+.06*Math.sin(e*ch(11.7+n*1.3)+ch(n*.7))});Rr.exports.segments=_6});var F2=me((iT,I2)=>{"use strict";var M6=As(),{addFlutedColumn:T2,addStatue:k6,addPlant:E6}=t2(),L2=Ii(),S6=U0(),za=or(),A6=Jr(),ec=gi(),ho=14,xn=za.C.hallEnd+.35,Io=8,Mo=.35,Kd=1.15,Qd=1.15,Zd=[18,29,40],T6=[[[0,0],[0,ec.PASS.z0]],[[0,ec.PASS.z1],[0,xn]],[[ho,xn],[ho,0]],[[0,0],[ho,0]],[[ho,xn],[0,xn]]],R2=[];for(let e of Zd)for(let t of[1.25,ho-1.25]){let o=Kd/2,n=Qd/2;R2.push([[t-o,e-n],[t+o,e-n]],[[t+o,e-n],[t+o,e+n]],[[t+o,e+n],[t-o,e+n]],[[t-o,e+n],[t-o,e-n]])}var uh=12,O2=2.95,P2=.62,vh=O2+P2,dh=[{file:"venus.bin",x:1.85,z:xn-1.6,yaw:2.67,height:5.2,pedestal:!0,mat:1},{file:"david.bin",x:ho-2.1,z:xn-1.6,yaw:-2.67,height:5.2,pedestal:!0,mat:1},{file:"pieta.bin",x:1.75,z:5.9,yaw:Math.PI/2,height:3.6,base:1,mat:1},{file:"spinario.bin",x:za.NICHE_X[0],z:za.NICHE_STATUE_Z,yaw:-.35,height:1.85,base:za.NICHE_PLINTH_TOP,mat:3},{file:"charioteer.bin",x:za.NICHE_X[1],z:za.NICHE_STATUE_Z+.1,yaw:0,height:2.95,base:za.NICHE_PLINTH_TOP,mat:3}],L6={x0:Mo,x1:3.15,z0:3.6,z1:8.2,top:1},z2=.8,mh=1.17,yl=[];[{z:10.4,dz:-.7},{z:19.2,dz:.7},{z:27.8,dz:-.7}].forEach((e,t)=>{yl.push({x:1,z:e.z,seed:11+t*7,away:[1,e.dz]}),yl.push({x:ho-1,z:e.z,seed:53+t*5,away:[-1,e.dz]})});function Jd(e,t,o,n){return[[[e-o,t-n],[e+o,t-n]],[[e+o,t-n],[e+o,t+n]],[[e+o,t+n],[e-o,t+n]],[[e-o,t+n],[e-o,t-n]]]}var gh=[];for(let e of[-1,1])gh.push(...Jd(ho/2+e*vh,uh,.85,.85));for(let e of dh.filter(t=>t.pedestal))gh.push(...Jd(e.x,e.z,mh*1.1,mh*1.1));for(let e of yl)gh.push(...Jd(e.x,e.z,.42,.42));var z6=T6.concat(R2,gh,ec.segments());function C6(e){let o=new Map,n=(r,a,i)=>{let s=r+":"+a;o.has(s)||o.set(s,[]);let c=o.get(s);c.includes(i)||c.push(i)};for(let r of e){let a=Math.floor(Math.min(r[0][0],r[1][0])/4)-1,i=Math.floor(Math.max(r[0][0],r[1][0])/4)+1,s=Math.floor(Math.min(r[0][1],r[1][1])/4)-1,c=Math.floor(Math.max(r[0][1],r[1][1])/4)+1;for(let l=a;l<=i;l++)for(let f=s;f<=c;f++)n(l,f,r)}return{get(r,a){let i=Math.floor(r/4),s=Math.floor(a/4),c=[];for(let l=-1;l<=1;l++)for(let f=-1;f<=1;f++){let u=o.get(i+l+":"+(s+f));u&&c.push(...u)}return[...new Set(c)]}}}var ph=[],gn={curMat:[0,0,0]};function e1(e,t,o,n,r,a,i){let s=e.length/3;e.push(...o,...n,...r,...a),t.push(...i,...i,...i,...i);let c=gn.curMat;return ph.push(...c,...c,...c,...c),[s,s+2,s+1,s+1,s+2,s+3]}function wo(e,t,o,n,r,a,i,s,c){let l=(f,u,h,p,v)=>{o.push(...e1(e,t,f,u,h,p,v))};l([n,r,a],[i,r,a],[n,s,a],[i,s,a],[0,0,-1]),l([i,r,c],[n,r,c],[i,s,c],[n,s,c],[0,0,1]),l([n,r,c],[n,r,a],[n,s,c],[n,s,a],[-1,0,0]),l([i,r,a],[i,r,c],[i,s,a],[i,s,c],[1,0,0]),l([n,s,a],[i,s,a],[n,s,c],[i,s,c],[0,1,0]),l([n,r,c],[i,r,c],[n,r,a],[i,r,a],[0,-1,0])}function J0(e,t,o,n,r){let a=gn,i=a.vert(e,r),s=a.vert(t,r),c=a.vert(o,r),l=a.vert(n,r);a.tri(i,s,c),a.tri(s,l,c)}function C2(e,t,o,n,r,a,i){for(let s=0;s<i;s++){let c=Math.PI*s/i,l=Math.PI*(s+1)/i,f=Math.cos(c),u=Math.sin(c),h=Math.cos(l),p=Math.sin(l),v=[e+o*f,t+o*u],d=[e+o*h,t+o*p],m=[e+n*f,t+n*u],g=[e+n*h,t+n*p];J0([v[0],v[1],r],[d[0],d[1],r],[m[0],m[1],r],[g[0],g[1],r],[0,0,-1]),J0([v[0],v[1],a],[d[0],d[1],a],[m[0],m[1],a],[g[0],g[1],a],[0,0,1]);let y=(c+l)/2;J0([v[0],v[1],r],[d[0],d[1],r],[v[0],v[1],a],[d[0],d[1],a],[-Math.cos(y),-Math.sin(y),0]),J0([m[0],m[1],r],[g[0],g[1],r],[m[0],m[1],a],[g[0],g[1],a],[Math.cos(y),Math.sin(y),0])}}function N6(e,t,o,n,r,a,i){for(let s=0;s<i;s++){let c=Math.PI*s/i,l=Math.PI*(s+1)/i,f=e+o*Math.cos(c),u=t+o*Math.sin(c),h=e+o*Math.cos(l),p=t+o*Math.sin(l);J0([f,u,r],[h,p,r],[f,n,r],[h,n,r],[0,0,-1]),J0([f,u,a],[h,p,a],[f,n,a],[h,n,a],[0,0,1])}}function R6(e,t,o,n){let r=ho/2,a=O2,i=3,s=a+.42,c=s+.15,l=P2,f=vh,u=5.98,h=n-.45,p=n+.45,v=64,d=T2(gn,r-f,n,0,u,l);T2(gn,r+f,n,0,u,l),gn.curMat=[0,0,0],C2(r,i,a,s,h,p,v),C2(r,i,s,c,h-.07,p+.07,v),N6(r,i,c,d+.05,h,p,v);for(let g of[-1,1]){let y=r+g*(c-.02),b=r+g*f;wo(e,t,o,Math.min(y,b),i,h,Math.max(y,b),d+.05,p)}for(let g of[-1,1]){let y=r+g*(a-.05),b=r+g*(a+.85);wo(e,t,o,Math.min(y,b),i-.16,n-.6,Math.max(y,b),i,n+.6)}let m=f+l*1.42+.45;wo(e,t,o,r-m,d,n-.7,r+m,d+.44,n+.7),wo(e,t,o,r-m+.12,d+.44,n-.62,r+m-.12,d+.7,n+.62),wo(e,t,o,r-m-.1,d+.7,n-.84,r+m+.1,d+.84,n+.84),wo(e,t,o,r-m-.22,d+.84,n-.96,r+m+.22,d+1,n+.96),wo(e,t,o,r-.3,i+a-.1,n-.56,r+.3,d,n+.56)}function N2(e,t,o,n,r){wo(e,t,o,n-.72,0,r-.72,n+.72,.2,r+.72),wo(e,t,o,n-.58,.2,r-.58,n+.58,.4,r+.58),wo(e,t,o,n-Kd/2,.4,r-Qd/2,n+Kd/2,Io-1.35,r+Qd/2),wo(e,t,o,n-.67,.42,r-.67,n+.67,.62,r+.67),wo(e,t,o,n-.67,Io-1.58,r-.67,n+.67,Io-1.35,r+.67),wo(e,t,o,n-.82,Io-1.35,r-.82,n+.82,Io-1.05,r+.82),wo(e,t,o,n-.66,Io-1.05,r-.66,n+.66,Io-.78,r+.66),wo(e,t,o,n-.92,Io-.78,r-.92,n+.92,Io-.55,r+.92),wo(e,t,o,n-.78,Io-.55,r-.78,n+.78,Io-.3,r+.78),wo(e,t,o,n-.92,Io-.3,r-.92,n+.92,Io-.1,r+.92)}function hh(e,t,o,n,r){r==="left"?(wo(e,t,o,-.08,1,n-3.8/2,.14,5.7,n+3.8/2),wo(e,t,o,-.08-.04,1+.18,n-3.8/2+.18,.18,5.7-.18,n+3.8/2-.18)):(wo(e,t,o,ho-.14,1,n-3.8/2,ho+.08,5.7,n+3.8/2),wo(e,t,o,ho-.18,1+.18,n-3.8/2+.18,ho+.08+.04,5.7-.18,n+3.8/2-.18))}function O6(e,t,o,n){wo(e,t,o,.65,Io-.16,n-1.65,.65+.22,Io,n+1.65),wo(e,t,o,ho-.65-.22,Io-.16,n-1.65,ho-.65,Io,n+1.65),wo(e,t,o,.65,Io-.16,n-1.65,ho-.65,Io,n-1.43),wo(e,t,o,.65,Io-.16,n+1.43,ho-.65,Io,n+1.65),o.push(...e1(e,t,[.65+.22,Io-.16,n-1.43],[ho-.65-.22,Io-.16,n-1.43],[.65+.22,Io-.16,n+1.43],[ho-.65-.22,Io-.16,n+1.43],[0,-1,0]))}I2.exports=function(){let e=[],t=[],o=[];ph=[],gn=M6.createBuilder(e,t,o,ph),o.push(...e1(e,t,[0,0,0],[ho,0,0],[0,0,xn],[ho,0,xn],[0,1,0])),S6.addSkylight(gn,[0,0,0],xn),gn.curMat=[0,0,0];{let c=ec.SURR;wo(e,t,o,-Mo,0,0,Mo,Io,c.z0),wo(e,t,o,-Mo,0,c.z1,Mo,Io,xn),wo(e,t,o,-Mo,c.top,c.z0,Mo,Io,c.z1)}wo(e,t,o,ho-Mo,0,za.C.z1,ho+Mo,Io,xn-Mo),wo(e,t,o,ho-Mo-.12,0,za.C.z1+2*Mo,ho-Mo,.42,xn-Mo),wo(e,t,o,ho-Mo-.07,.42,za.C.z1+2*Mo,ho-Mo,.5,xn-Mo);for(let[c,l]of[[0,ec.SURR.z0],[ec.SURR.z1,xn-Mo]])wo(e,t,o,Mo,0,c,Mo+.12,.42,l),wo(e,t,o,Mo,.42,c,Mo+.07,.5,l);wo(e,t,o,Mo,0,xn-Mo-.12,ho-Mo,.42,xn-Mo),wo(e,t,o,Mo,.42,xn-Mo-.07,ho-Mo,.5,xn-Mo),L2.addEntranceWall(gn),L2.addFrames(gn),gn.curMat=[0,0,0],wo(e,t,o,-Mo,0,xn-Mo,ho+Mo,Io,xn+Mo),R6(e,t,o,uh);for(let c of Zd)N2(e,t,o,1.25,c),N2(e,t,o,ho-1.25,c);hh(e,t,o,22,"left"),hh(e,t,o,25,"right"),hh(e,t,o,33,"left"),hh(e,t,o,36,"right");let n=[4,9,34,39,44,49];for(let c of n)O6(e,t,o,c);za.addWing(gn),gn.curMat=[0,0,0];for(let c of dh.filter(l=>l.pedestal))k6(gn,c.x,c.z,mh,z2);{let c=L6;gn.curMat=[0,0,0],gn.box(c.x0,0,c.z0-.08,c.x1+.08,.16,c.z1+.08,[0,0,0]),gn.box(c.x0,.16,c.z0+.04,c.x1-.04,c.top-.14,c.z1-.04,[0,0,0]),gn.box(c.x0,c.top-.14,c.z0-.02,c.x1+.03,c.top-.06,c.z1+.02,[0,0,0]),gn.box(c.x0,c.top-.06,c.z0-.06,c.x1+.07,c.top,c.z1+.06,[0,0,0])}A6.addAlcove(gn);for(let c of yl)E6(gn,c.x,c.z,c.seed,1,c.away);gn.curMat=[0,0,0];let r=[[[ho,xn-.35],[0,xn-.35]],[[0,3],[0,10]],[[ho,15],[ho,22]],[[0,24],[0,31]],[[ho,33],[ho,40]],[[0,41],[0,46]]],a=C6(z6),i=(c,l)=>{let f=0,u=1/0;return r.forEach((h,p)=>{let v=(h[0][0]+h[1][0])/2,d=(h[0][1]+h[1][1])/2,m=Math.hypot(c-v,l-d);m<u&&(u=m,f=p)}),f},s=[];for(let c=0;c<10;c++)s.push({c:[0,0,0,0],d:[1,0,0,0]});return{placements:r,lights:s,statues:dh,occluders:[...Zd.flatMap(c=>[[1.25,c,.78],[ho-1.25,c,.78]]),[ho/2-vh,uh,.86],[ho/2+vh,uh,.86],...dh.filter(c=>c.pedestal).map(c=>[c.x,c.z,mh*1.12]),...yl.map(c=>[c.x,c.z,.34])],pedestalTop:z2,mat:ph,getAreaIndex:i,getGridSegments:(c,l)=>a.get(c,l),getGridParts:(c,l)=>a.get(c,l),position:e,normal:t,elements:o}}});var $2=me((sT,G2)=>{"use strict";var D2=[0,10,11],{C:bl}=or(),{A:xh}=Jr(),Ns=gi(),P6=[[.35,13.65,.35,bl.hallEnd],[bl.x0,bl.x1,bl.z0,bl.z1],[xh.x0,xh.x1,xh.z0,xh.z1],[Ns.C.x-Ns.R-.6,Ns.SURR.x,Ns.C.z-Ns.R-.6,Ns.C.z+Ns.R+.6]],I6=(e,t)=>P6.some(o=>e>o[0]-.01&&e<o[1]+.01&&t>o[2]-.01&&t<o[3]+.01),F6={floor:34,wall:22,ceiling:12},yh=2;function D6(e,t){let o=Object.assign({width:2048,maxHeight:2048,scale:1},t||{}),n=e.position,r=e.normal,a=e.mat,i=e.elements,s=i.length/3,c=[];for(let T=0;T<s;T++){let B=i[T*3],P=i[T*3+1],H=i[T*3+2],se=n[B*3],Z=n[B*3+1],le=n[B*3+2],ie=n[P*3]-se,pe=n[P*3+1]-Z,Qe=n[P*3+2]-le,wt=n[H*3]-se,Fe=n[H*3+1]-Z,st=n[H*3+2]-le,yt=pe*st-Qe*Fe,Bt=Qe*wt-ie*st,Zt=ie*Fe-pe*wt,Oo=Math.hypot(yt,Bt,Zt),Be=-1,ct=0;if(Oo>1e-12&&D2.indexOf(Math.round(a[B*3]))>=0){yt/=Oo,Bt/=Oo,Zt/=Oo;let dt=[yt,Bt,Zt];for(let Rt=0;Rt<3;Rt++)Math.abs(dt[Rt])>.999&&(Be=Rt,ct=dt[Rt]>0?1:-1);if(Be>=0){let Rt=(n[B*3]+n[P*3]+n[H*3])/3+dt[0]*.03,so=(n[B*3+2]+n[P*3+2]+n[H*3+2])/3+dt[2]*.03;I6(Rt,so)||(Be=-1)}if(Be>=0){for(let Rt of[B,P,H])if(Math.abs(r[Rt*3+Be]-ct)>.01){Be=-1;break}}}c.push({t:T,a:B,b:P,c:H,axis:Be,sign:ct})}let l=T=>n[T*3].toFixed(3)+","+n[T*3+1].toFixed(3)+","+n[T*3+2].toFixed(3),f=new Map;for(let T of c){if(T.axis<0)continue;let B=T.axis+(T.sign>0?"+":"-")+n[T.a*3+T.axis].toFixed(3);f.has(B)||f.set(B,[]),f.get(B).push(T)}let u=[];for(let[,T]of f){let B=T.map((Z,le)=>le),P=Z=>{for(;B[Z]!==Z;)B[Z]=B[B[Z]],Z=B[Z];return Z},H=new Map;T.forEach((Z,le)=>{for(let ie of[Z.a,Z.b,Z.c]){let pe=l(ie);if(H.has(pe)){let Qe=P(H.get(pe)),wt=P(le);Qe!==wt&&(B[Qe]=wt)}else H.set(pe,le)}});let se=new Map;T.forEach((Z,le)=>{let ie=P(le);se.has(ie)||se.set(ie,[]),se.get(ie).push(Z)});for(let[,Z]of se)u.push({tris:Z,axis:Z[0].axis,sign:Z[0].sign})}let h=[[2,1],[0,2],[0,1]];for(let T of u){let[B,P]=h[T.axis],H=1/0,se=1/0,Z=-1/0,le=-1/0;for(let Qe of T.tris)for(let wt of[Qe.a,Qe.b,Qe.c]){let Fe=n[wt*3+B],st=n[wt*3+P];Fe<H&&(H=Fe),Fe>Z&&(Z=Fe),st<se&&(se=st),st>le&&(le=st)}T.i=B,T.j=P,T.u0=H,T.v0=se,T.du=Z-H,T.dv=le-se;let ie=T.axis===1&&T.sign>0,pe=T.axis===1&&T.sign<0;T.kind=ie&&Math.abs(n[T.tris[0].a*3+1])<.05?"floor":pe?"ceiling":"wall"}let p=o.width,v=o.scale,d=0,m=0;for(;;){for(let Z of u){let le=F6[Z.kind]*v;if(Z.dU=Math.max(le,3/Math.max(Z.du,1e-4)),Z.dV=Math.max(le,3/Math.max(Z.dv,1e-4)),Z.w=Math.ceil(Z.du*Z.dU)+yh*2,Z.h=Math.ceil(Z.dv*Z.dV)+yh*2,Z.rot=Z.h>Z.w,Z.rot){let ie=Z.w;Z.w=Z.h,Z.h=ie}}let T=u.slice().sort((Z,le)=>le.h-Z.h||le.w-Z.w),B=0,P=0,H=0,se=!0;for(let Z of T){if(Z.w>p){se=!1;break}B+Z.w>p&&(P+=H,B=0,H=0),Z.x=B,Z.y=P,B+=Z.w,H=Math.max(H,Z.h)}if(d=P+H,se&&d<=o.maxHeight)break;if(v*=.92,++m>40)throw new Error("lightmap: the architecture does not fit")}d=Math.ceil(d/4)*4;let g=c.filter(T=>T.axis>=0),y=c.filter(T=>T.axis<0),b=new Map;for(let T of u)for(let B of T.tris)b.set(B,T);let M=s*3,w=new Float32Array(M*3),_=new Float32Array(M*3),S=new Float32Array(M*3),G=new Float32Array(M*3),R=0;for(let T of g.concat(y)){let B=b.get(T);for(let P of[T.a,T.b,T.c]){for(let H=0;H<3;H++)w[R*3+H]=n[P*3+H],_[R*3+H]=r[P*3+H],S[R*3+H]=a[P*3+H];if(B){let H=(n[P*3+B.i]-B.u0)*B.dU+yh,se=(n[P*3+B.j]-B.v0)*B.dV+yh;if(B.rot){let Z=H;H=se,se=Z}G[R*3]=(B.x+H)/p,G[R*3+1]=(B.y+se)/d,G[R*3+2]=1}R++}}let q=new Uint32Array(M);for(let T=0;T<M;T++)q[T]=T;return{width:p,height:d,scale:v,charts:u.length,bakedCount:g.length*3,position:w,normal:_,mat:S,lm:G,elements:q}}G2.exports={build:D6,BAKED_MATS:D2}});var t1=me((cT,U2)=>{"use strict";var{doorLightGLSL:G6}=Ii(),{skylightGLSL:$6}=U0(),{windowLightGLSL:q6,C:ea}=or(),{alcoveLightGLSL:H6}=Jr(),va=e=>e.toFixed(4),B6=(()=>{let e=[-.22,.6,-.77],t=Math.hypot(e[0],e[1],e[2]);return e.map(o=>(o/t).toFixed(4)).join(", ")})(),U6=vr(),j6=$2(),q2=4,H2=4,B2=!0;try{/[?&]nobake\b/.test(location.search)&&(B2=!1)}catch(e){}U2.exports=(e,t,o,n)=>{let r=null;if(B2&&!n)try{let q=e.limits.maxTextureSize||2048;r=j6.build(t,{width:Math.min(2048,q),maxHeight:Math.min(2048,q),scale:U6.isPhone?.72:1})}catch(q){r=null}let i=(t.occluders||[]).slice(0,24).map(([q,T,B])=>`ao = min(ao, contact(v_pos.xz, vec2(${q.toFixed(3)}, ${T.toFixed(3)}), ${B.toFixed(3)}));`).join(`
      `),s={c:[0,0,0,0],d:[1,0,0,0]},c=-1,l=[],f=q=>{let T=q&&q.tick!==void 0?q.tick:0;if(T!==c||l.length===0){c=T;let B=t.viewer||[7,2,20];for(l=t.lights.filter(P=>P.c[3]>.5).map(P=>({l:P,d:Math.hypot(P.c[0]-B[0],P.c[2]-B[2])})).sort((P,H)=>P.d-H.d).slice(0,8).map(P=>P.l);l.length<8;)l.push(s)}return l},u={},h="",p="";for(let q=0;q<8;q++)u["lightC"+q]=T=>f(T)[q].c,u["lightD"+q]=T=>f(T)[q].d,h+="uniform vec4 lightC"+q+", lightD"+q+`;
`,p+="pic += pictureLight(lightC"+q+", lightD"+q+`, v_pos, N);
`;let v=(t.lights||[]).length,d={},m="",g="";for(let q=0;q<v;q++)d["lightC"+q]=()=>t.lights[q].c,d["lightD"+q]=()=>t.lights[q].d,m+="uniform vec4 lightC"+q+", lightD"+q+`;
`,g+="pic += pictureLight(lightC"+q+", lightD"+q+`, v_pos, N);
`;let y=(q,T,B)=>`
    precision highp float;
    ${q}
    #ifdef HAS_BAKE
    uniform float bakeOn;
    uniform sampler2D lmDay, lmNight;
    varying vec3 v_lm;
    #endif

    uniform float yScale;
    uniform float mirrorOn;
    uniform float night;   // 0 by day, 1 at night
    uniform float time;
    ${Gi().lanternGLSL()}

    varying vec3 v_pos;
    varying vec3 v_relativepos;
    varying vec3 v_normal;
    varying vec3 v_eye;
    varying vec3 v_mat;

    ${T}

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

    ${G6()}

    ${$6()}

    ${q6()}

    ${H6()}

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
        step(abs(v_pos.z - ${va(ea.hallEnd)}), 0.02) * step(0.5, -N.z) +
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
                 + exp(-pow((v_pos.z - ${va((ea.z0+ea.z1)/2)}) / 1.3, 2.0)) * step(14.0, v_pos.x);
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

      // ---------------------------------------------------------
      // BAKED LIGHT
      // The light of the flat architecture is read from the baked
      // light picture (lightmap.js) when it is ready; everything
      // else works its light out here, as it always did. Eb is the
      // light falling on the surface (the material is multiplied in
      // afterwards); glossW and wash are what the polish needs.
      // ---------------------------------------------------------
      vec3 Eb = vec3(0.0);
      float glossW = 0.0, wash = 0.0;
      bool fromBake = false;
      #ifdef HAS_BAKE
      if (bakeOn > 0.5 && v_lm.z > 0.5) {
        vec4 d0 = texture2D(lmDay, v_lm.xy);
        // (a texel no face covered, which should not happen, is left to
        // the live light)
        if (d0.a > 1.0 / 255.0) {
          vec4 d1 = texture2D(lmNight, v_lm.xy);
          // day and night fade into one another as the light is switched
          Eb = mix(d0.rgb * d0.rgb, d1.rgb * d1.rgb, night) * ${q2.toFixed(1)};
          float ba = mix(d0.a, d1.a, night);
          glossW = ba * ${H2.toFixed(1)};
          wash = ba * 0.45;
          fromBake = true;
        }
      }
      #endif
      if (!fromBake) {
      float diffuse = max(dot(N, lightDirection), 0.0);

      // the room's own lamps are kept low: most of the light is daylight
      // from the skylight, the windows, the door and the oculus
      float light = 0.47 + diffuse * 0.2;
      // the painting walls sit a touch darker so each picture light reads
      // as its own pool
      light -= 0.045 * isShell * (1.0 - isCeiling);

      // Light from the bar above each painting
      float pic = 0.0;
      ${B}

      // Corridor glow and the end wall light
      light += (1.0 - smoothstep(7.0, 35.0, abs(v_pos.z - 29.0))) * 0.04;
      light += (1.0 - smoothstep(2.0, 16.0, abs(v_pos.z - ${va(ea.hallEnd-1.6)}))) * 0.09 * (1.0 - smoothstep(14.5, 18.0, v_pos.x));

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
      float sun = 0.0;
      float glow = 0.0, aGlow = 0.0, winL = 0.0, cg = 0.0;
      if (v_pos.z < 12.0 && v_pos.z > 0.30) {
        if (isFloor > 0.5) {
          float through = doorLight(v_pos, vec3(${B6}));
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
      glow = skylightGlow(v_pos);
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
      aGlow = alcoveGlow(v_pos);
      light += aSun * 1.8 * mix(1.0, 1.45, night) + aGlow * 0.5 * (1.0 - 0.3 * isCeiling) * mix(1.0, 0.2, night);
      light += isCream * aGlow * 0.18 * smoothstep(8.0, 10.5, v_pos.y) * mix(1.0, 0.2, night);
      sun = max(sun, aSun);

      winL = windowLight(v_pos, N);
      cg = corridorGlow(v_pos);
      light += winL * 0.48 * mix(1.0, 1.35, night) + cg * 0.16 * (1.0 - 0.4 * isCeiling) * mix(1.0, 0.7, night);

      // the little lamps in the statue niches
      float nl = nicheLight(v_pos, N);
      light += nl * 1.1;

      // soft contact shadows where pillars, statues and plants meet the floor
      if (isFloor > 0.5) {
        float ao = 1.0;
        ${i}
        // and a little darker along the foot of the walls
        float wallD = v_pos.x - 0.35;
        if (v_pos.x < 14.0) wallD = min(wallD, ${va(ea.hallEnd)} - v_pos.z);
        if (v_pos.x < 14.0 && (v_pos.z < ${va(ea.z0)} || v_pos.z > ${va(ea.z1)})) wallD = min(wallD, 13.65 - v_pos.x);
        if (v_pos.x > 13.65 && v_pos.z > ${va(ea.z0-1)}) wallD = min(min(min(wallD, v_pos.z - ${va(ea.z0)}), ${va(ea.z1)} - v_pos.z), ${va(ea.x1)} - v_pos.x);
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
      Eb = vec3(light) * spillTint + pictureTint * pic * ${.78.toFixed(3)} * (1.0 - 0.5 * isFloor);

      // light bounced off the warm floor onto the lower walls and columns
      Eb += vec3(1.0, 0.84, 0.62) * 0.05 * mix(1.0, 0.3, night) * ${.6.toFixed(3)}
        * (1.0 - smoothstep(0.0, 2.4, v_pos.y)) * (1.0 - isFloor) * (1.0 - abs(N.y));

      // and the sunlit (or moonlit) squares under the skylight throw their
      // own light back into the room: warm by day, faint and cold by night
      float bounce = skylightBounce(v_pos, N) * (1.0 - isFloor) * (1.0 - isSky);
      Eb += mix(vec3(1.0, 0.86, 0.66) * 0.17, vec3(0.62, 0.74, 1.0) * 0.12, night) * bounce * ${.6.toFixed(3)};

      glossW = light + pic * 0.5;
      wash = clamp(spill * 0.4 + sun * 0.4, 0.0, 0.45);

      #ifdef BAKE_PASS
      // into the light picture: the light (its square root, so the dark
      // keeps its gradations), and in the fourth channel the floor's
      // sunlit wash or the polish's strength (never 0: 0 marks a texel
      // no face covers)
      float bakeA = isFloor > 0.5 ? wash / 0.45 : glossW / ${H2.toFixed(1)};
      gl_FragColor = vec4(sqrt(clamp(Eb / ${q2.toFixed(1)}, 0.0, 1.0)), max(clamp(bakeA, 0.0, 1.0), 2.0 / 255.0));
      return;
      #endif
      }

      vec3 finalColour = material * Eb;

      // lantern light, patterned by the leaded glass, at night (always
      // live: the flames flicker)
      if (night > 0.0) finalColour += material * lanternLight(v_pos, N);

      // polished marble (columns, arch, skirting): a soft highlight of the
      // daylight that drifts across the stone as you move, rougher in places
      float isMarble = (1.0 - isShell) * (1.0 - isObj) * (1.0 - isFloor) * (1.0 - isCeiling) * (1.0 - isCream) + isFluted;
      if (detail && isMarble > 0.5) {
        vec3 Hm = normalize(lightDirection + V);
        float rough = 0.55 + 0.45 * vnoise(uv * 1.7 + 3.0);
        float gloss = pow(max(dot(N, Hm), 0.0), mix(60.0, 14.0, rough));
        float fresM = 0.04 + 0.96 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
        finalColour += vec3(1.0, 0.96, 0.88) * (gloss * 0.07 * (1.0 - rough * 0.6) + fresM * 0.05) * glossW;
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
        if (v_pos.z < ${va(ea.z0+.3)} && v_pos.x > ${va(ea.x0)}) {
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
        alpha = mix(alpha, 1.0, wash);
      }

      gl_FragColor = vec4(finalColour, alpha);
    }`,b=`
    precision highp float;
    #ifdef HAS_BAKE
    attribute vec3 a_lm;
    varying vec3 v_lm;
    #endif

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

      #ifdef HAS_BAKE
      v_lm = a_lm;
      #endif

      gl_Position = proj * view * vec4(pos, 1.0);
    }`,M=r||t,w=r?e.texture({width:1,height:1}):null,_={position:M.position,normal:M.normal,a_mat:M.mat};r&&(_.a_lm=r.lm);let S=null;if(r)try{S=W6(e,r,_,y("#define BAKE_PASS",m,g),d,t)}catch(q){S=null}let G=e({frag:y(r?"#define HAS_BAKE":"",h,p),vert:(r?`#define HAS_BAKE
`:"")+b,attributes:_,uniforms:r?Object.assign({bakeOn:()=>S&&S.ready?1:0,lmDay:()=>S?S.day:w,lmNight:()=>S?S.night:w},u):u,blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},elements:r?r.elements:new Uint32Array(t.elements),offset:n?e.prop("offset"):0,count:n?e.prop("count"):r?r.elements.length:t.elements.length}),R=q=>G(q);return R.prepare=()=>{if(S)try{S.update()}catch(q){S.ready=!1,S=null}},R.baked=()=>!!(S&&S.ready),R};function W6(e,t,o,n,r,a){let i=t.width,s=t.height,c=b=>e.texture({width:i,height:s,min:b,mag:b,wrap:"clamp"}),l=b=>e.framebuffer({color:b,depth:!1}),f=c("linear"),u=c("linear"),h=l(f),p=l(u),v=e({frag:n,vert:`
    precision highp float;
    attribute vec3 position, normal, a_mat, a_lm;
    varying vec3 v_pos, v_relativepos, v_normal, v_eye, v_mat;
    void main() {
      v_pos = position;
      v_normal = normal;
      v_mat = a_mat;
      // no camera: the light is the same seen from anywhere
      v_eye = position + normal;
      v_relativepos = vec3(0.0);
      gl_Position = vec4(a_lm.xy * 2.0 - 1.0, 0.0, 1.0);
    }`,attributes:o,uniforms:Object.assign({yScale:1,mirrorOn:0,time:0,night:e.prop("night")},r),framebuffer:e.prop("fbo"),depth:{enable:!1},cull:{enable:!1},blend:{enable:!1},viewport:{x:0,y:0,width:i,height:s},count:t.bakedCount}),d=e({frag:`
    precision highp float;
    uniform sampler2D src;
    uniform vec2 px;
    uniform float copyOnly;
    void main() {
      vec2 uv = gl_FragCoord.xy * px;
      vec4 c = texture2D(src, uv);
      if (c.a > 0.0 || copyOnly > 0.5) { gl_FragColor = c; return; }
      vec4 sum = vec4(0.0);
      float n = 0.0;
      for (int y = -1; y <= 1; y++) {
        for (int x = -1; x <= 1; x++) {
          vec4 s = texture2D(src, uv + vec2(float(x), float(y)) * px);
          if (s.a > 0.0) { sum += s; n += 1.0; }
        }
      }
      gl_FragColor = n > 0.0 ? sum / n : vec4(0.0);
    }`,vert:`
    precision highp float;
    attribute vec2 p;
    void main() { gl_Position = vec4(p, 0.0, 1.0); }`,attributes:{p:[-1,-1,3,-1,-1,3]},uniforms:{src:e.prop("src"),px:[1/i,1/s],copyOnly:e.prop("copy")},framebuffer:e.prop("fbo"),depth:{enable:!1},blend:{enable:!1},viewport:{x:0,y:0,width:i,height:s},count:3}),m=(b,M)=>{let w=c("nearest"),_=c("nearest"),S=l(w),G=l(_);e.clear({color:[0,0,0,0],framebuffer:S}),v({night:b,fbo:S});for(let R=0;R<2;R++)d({src:w,fbo:G,copy:0}),d({src:_,fbo:S,copy:0});d({src:w,fbo:M,copy:1}),S.destroy(),G.destroy(),w.destroy(),_.destroy()},g=()=>(a.lights||[]).map(b=>b.c.concat(b.d).map(M=>M.toFixed(3)).join(",")).join(";"),y={day:f,night:u,ready:!1,sig:null,seen:null,since:0,update(){let b=g(),M=performance.now();b!==y.seen&&(y.seen=b,y.since=M),!(b===y.sig||M-y.since<700)&&(y.sig=b,m(0,h),m(1,p),y.ready=!0)}};return y}});var W2=me((lT,j2)=>{"strict mode";var V6="https://api.artic.edu/api/v1/artworks/search",X6=({image_id:e},t)=>`https://www.artic.edu/iiif/2/${e}/full/${t},/0/default.jpg`,Y6="?query[bool][must][][term][classification_titles.keyword]=painting&query[bool][must][][term][is_public_domain]=true",K6="&fields=image_id,title,artist_title",Q6={low:400,mid:843,high:1686};j2.exports={fetchList:async function(e,t){let o=V6+Y6+K6+`&from=${e}&size=${t}`;return(await fetch(o).then(r=>r.json())).data.filter(r=>r.image_id)},fetchImage:async function(e,t){let o=X6(e,Q6[t]),n=await fetch(o).then(r=>r.blob());return{title:e.title+" - "+e.artist_title,image:n}}}});var Y2=me((fT,X2)=>{"use strict";var Z6=wd(),J6=vr(),eM=e=>"images/web/"+e.slug+(J6.isPhone?"-1024":"")+".webp";async function V2(e){let t=await fetch(e);if(!t.ok)throw new Error("Could not load "+e);return t.blob()}X2.exports={fetchList:async function(e,t){return Z6.slice(e,e+t).map((o,n)=>({...o,image_id:e+n}))},fetchImage:async function(e){let t;try{t=await V2(eM(e))}catch(o){t=await V2("images/"+e.file)}return{title:e.title,image:t}}}});var Q2=me((hT,K2)=>{"strict mode";K2.exports={default:"local",artic:W2(),local:Y2()}});var n1=me((uT,J2)=>{"strict mode";var Rs=document.createElement("canvas"),o1=Rs.width=Rs.height=1024,Hi=Rs.getContext("2d");Hi.mozImageSmoothingEnabled=!1;Hi.webkitImageSmoothingEnabled=!1;Hi.font="32px Verdana";Hi.textBaseline="bottom";Hi.fillStyle="#aaa";function Z2(e,t,o,n){var r=t,a,i=0,s=0,c=t.split(" "),l,f;for(l=f=c.length;e.measureText(r).width>o&&l>1;){l--,r=a="";for(var u=0;u<f;u++)u<l?(r+=c[u],u+1<l&&(r+=" ")):(a+=c[u],u+1<f&&(a+=" "))}return n.push(r),s=e.measureText(r).width,a&&(i=Z2(e,a,o,n),i>s&&(s=i)),s}J2.exports={init(e,t,o=o1){var n=[];Z2(Hi,t,Math.min(o*o1,o1),n),Hi.clearRect(0,0,Rs.width,Rs.height);for(var r=0;r<n.length;r++)Hi.fillText(n[r],0,Rs.height-(Math.max(n.length,3)-r)*32);return e({data:Rs,min:"mipmap",mipmap:"nice",flipY:!0})},draw(e){return e({frag:`
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
            }`,attributes:{pos:[0,0,1,0,0,1,1,1,0,1,1,0]},uniforms:{model:e.prop("textmodel"),tex:e.prop("text")},count:6,blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}})}}});var og=me((dT,tg)=>{"strict mode";var r1=Q2(),tM=new URLSearchParams(window.location.search).get("api"),eg=r1[tM]||r1[r1.default],oM=n1(),a1={},oc=[],nM=2;function rM(e){return(!navigator.connection||navigator.connection.downlink<nM)&&(e=e=="high"?"mid":"low"),e}var aM=vr(),tc=document.createElement("canvas");tc.width=tc.height=aM.isPhone?1024:2048;var c1=tc.getContext("2d");c1.imageSmoothingEnabled=!0;c1.imageSmoothingQuality="high";var i1=!1,iM=e=>[(oc.pop()||e.texture)([[[200,200,200]]]),t=>(oc.pop()||e.texture)([[[0,0,0,0]]]),1];async function s1(e,t,o){i1===!1&&(i1=e.hasExtension("EXT_texture_filter_anisotropic")?e._gl.getParameter(e._gl.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0);let n,r;try{let a=await eg.fetchImage(t,rM(o));r=a.title,n=await createImageBitmap(a.image),c1.drawImage(n,0,0,tc.width,tc.height)}catch(a){return console.error(a),o=="high"?await s1(e,t,"low"):iM(e)}return[(oc.pop()||e.texture)({data:tc,min:"mipmap",mipmap:"nice",aniso:i1,flipY:!0}),a=>oM.init(oc.pop()||e.texture,r,a),n.width/n.height]}tg.exports={fetch:(e,t=10,o="low",n,r)=>{let a=Object.keys(a1).length;eg.fetchList(a,t).then(i=>{t=i.length,i.map(s=>{if(a1[s.image_id]){--t===0&&r();return}a1[s.image_id]=s,s1(e,s,o).then(([c,l,f])=>{n({...s,tex:c,textGen:l,aspect:f}),--t===0&&r()})})})},load:(e,t,o="low")=>{t.tex||t.loading||(t.loading=!0,s1(e,t,o).then(([n,r])=>{t.loading=!1,t.tex=n,t.text=r(t.width)}))},unload:e=>{e.tex&&(oc.push(e.tex),e.tex=void 0),e.text&&(oc.push(e.text),e.text=void 0)}}});var rg=me((pT,ng)=>{ng.exports=sM;function sM(){var e=new Float32Array(16);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var ig=me((vT,ag)=>{ag.exports=cM;function cM(e){var t=new Float32Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var cg=me((mT,sg)=>{sg.exports=lM;function lM(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var l1=me((gT,lg)=>{lg.exports=fM;function fM(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var hg=me((xT,fg)=>{fg.exports=hM;function hM(e,t){if(e===t){var o=t[1],n=t[2],r=t[3],a=t[6],i=t[7],s=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=o,e[6]=t[9],e[7]=t[13],e[8]=n,e[9]=a,e[11]=t[14],e[12]=r,e[13]=i,e[14]=s}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e}});var dg=me((yT,ug)=>{ug.exports=uM;function uM(e,t){var o=t[0],n=t[1],r=t[2],a=t[3],i=t[4],s=t[5],c=t[6],l=t[7],f=t[8],u=t[9],h=t[10],p=t[11],v=t[12],d=t[13],m=t[14],g=t[15],y=o*s-n*i,b=o*c-r*i,M=o*l-a*i,w=n*c-r*s,_=n*l-a*s,S=r*l-a*c,G=f*d-u*v,R=f*m-h*v,q=f*g-p*v,T=u*m-h*d,B=u*g-p*d,P=h*g-p*m,H=y*P-b*B+M*T+w*q-_*R+S*G;return H?(H=1/H,e[0]=(s*P-c*B+l*T)*H,e[1]=(r*B-n*P-a*T)*H,e[2]=(d*S-m*_+g*w)*H,e[3]=(h*_-u*S-p*w)*H,e[4]=(c*q-i*P-l*R)*H,e[5]=(o*P-r*q+a*R)*H,e[6]=(m*M-v*S-g*b)*H,e[7]=(f*S-h*M+p*b)*H,e[8]=(i*B-s*q+l*G)*H,e[9]=(n*q-o*B-a*G)*H,e[10]=(v*_-d*M+g*y)*H,e[11]=(u*M-f*_-p*y)*H,e[12]=(s*R-i*T-c*G)*H,e[13]=(o*T-n*R+r*G)*H,e[14]=(d*b-v*w-m*y)*H,e[15]=(f*w-u*b+h*y)*H,e):null}});var vg=me((bT,pg)=>{pg.exports=dM;function dM(e,t){var o=t[0],n=t[1],r=t[2],a=t[3],i=t[4],s=t[5],c=t[6],l=t[7],f=t[8],u=t[9],h=t[10],p=t[11],v=t[12],d=t[13],m=t[14],g=t[15];return e[0]=s*(h*g-p*m)-u*(c*g-l*m)+d*(c*p-l*h),e[1]=-(n*(h*g-p*m)-u*(r*g-a*m)+d*(r*p-a*h)),e[2]=n*(c*g-l*m)-s*(r*g-a*m)+d*(r*l-a*c),e[3]=-(n*(c*p-l*h)-s*(r*p-a*h)+u*(r*l-a*c)),e[4]=-(i*(h*g-p*m)-f*(c*g-l*m)+v*(c*p-l*h)),e[5]=o*(h*g-p*m)-f*(r*g-a*m)+v*(r*p-a*h),e[6]=-(o*(c*g-l*m)-i*(r*g-a*m)+v*(r*l-a*c)),e[7]=o*(c*p-l*h)-i*(r*p-a*h)+f*(r*l-a*c),e[8]=i*(u*g-p*d)-f*(s*g-l*d)+v*(s*p-l*u),e[9]=-(o*(u*g-p*d)-f*(n*g-a*d)+v*(n*p-a*u)),e[10]=o*(s*g-l*d)-i*(n*g-a*d)+v*(n*l-a*s),e[11]=-(o*(s*p-l*u)-i*(n*p-a*u)+f*(n*l-a*s)),e[12]=-(i*(u*m-h*d)-f*(s*m-c*d)+v*(s*h-c*u)),e[13]=o*(u*m-h*d)-f*(n*m-r*d)+v*(n*h-r*u),e[14]=-(o*(s*m-c*d)-i*(n*m-r*d)+v*(n*c-r*s)),e[15]=o*(s*h-c*u)-i*(n*h-r*u)+f*(n*c-r*s),e}});var gg=me((wT,mg)=>{mg.exports=pM;function pM(e){var t=e[0],o=e[1],n=e[2],r=e[3],a=e[4],i=e[5],s=e[6],c=e[7],l=e[8],f=e[9],u=e[10],h=e[11],p=e[12],v=e[13],d=e[14],m=e[15],g=t*i-o*a,y=t*s-n*a,b=t*c-r*a,M=o*s-n*i,w=o*c-r*i,_=n*c-r*s,S=l*v-f*p,G=l*d-u*p,R=l*m-h*p,q=f*d-u*v,T=f*m-h*v,B=u*m-h*d;return g*B-y*T+b*q+M*R-w*G+_*S}});var yg=me((_T,xg)=>{xg.exports=vM;function vM(e,t,o){var n=t[0],r=t[1],a=t[2],i=t[3],s=t[4],c=t[5],l=t[6],f=t[7],u=t[8],h=t[9],p=t[10],v=t[11],d=t[12],m=t[13],g=t[14],y=t[15],b=o[0],M=o[1],w=o[2],_=o[3];return e[0]=b*n+M*s+w*u+_*d,e[1]=b*r+M*c+w*h+_*m,e[2]=b*a+M*l+w*p+_*g,e[3]=b*i+M*f+w*v+_*y,b=o[4],M=o[5],w=o[6],_=o[7],e[4]=b*n+M*s+w*u+_*d,e[5]=b*r+M*c+w*h+_*m,e[6]=b*a+M*l+w*p+_*g,e[7]=b*i+M*f+w*v+_*y,b=o[8],M=o[9],w=o[10],_=o[11],e[8]=b*n+M*s+w*u+_*d,e[9]=b*r+M*c+w*h+_*m,e[10]=b*a+M*l+w*p+_*g,e[11]=b*i+M*f+w*v+_*y,b=o[12],M=o[13],w=o[14],_=o[15],e[12]=b*n+M*s+w*u+_*d,e[13]=b*r+M*c+w*h+_*m,e[14]=b*a+M*l+w*p+_*g,e[15]=b*i+M*f+w*v+_*y,e}});var wg=me((MT,bg)=>{bg.exports=mM;function mM(e,t,o){var n=o[0],r=o[1],a=o[2],i,s,c,l,f,u,h,p,v,d,m,g;return t===e?(e[12]=t[0]*n+t[4]*r+t[8]*a+t[12],e[13]=t[1]*n+t[5]*r+t[9]*a+t[13],e[14]=t[2]*n+t[6]*r+t[10]*a+t[14],e[15]=t[3]*n+t[7]*r+t[11]*a+t[15]):(i=t[0],s=t[1],c=t[2],l=t[3],f=t[4],u=t[5],h=t[6],p=t[7],v=t[8],d=t[9],m=t[10],g=t[11],e[0]=i,e[1]=s,e[2]=c,e[3]=l,e[4]=f,e[5]=u,e[6]=h,e[7]=p,e[8]=v,e[9]=d,e[10]=m,e[11]=g,e[12]=i*n+f*r+v*a+t[12],e[13]=s*n+u*r+d*a+t[13],e[14]=c*n+h*r+m*a+t[14],e[15]=l*n+p*r+g*a+t[15]),e}});var Mg=me((kT,_g)=>{_g.exports=gM;function gM(e,t,o){var n=o[0],r=o[1],a=o[2];return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*r,e[5]=t[5]*r,e[6]=t[6]*r,e[7]=t[7]*r,e[8]=t[8]*a,e[9]=t[9]*a,e[10]=t[10]*a,e[11]=t[11]*a,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var Eg=me((ET,kg)=>{kg.exports=xM;function xM(e,t,o,n){var r=n[0],a=n[1],i=n[2],s=Math.sqrt(r*r+a*a+i*i),c,l,f,u,h,p,v,d,m,g,y,b,M,w,_,S,G,R,q,T,B,P,H,se;return Math.abs(s)<1e-6?null:(s=1/s,r*=s,a*=s,i*=s,c=Math.sin(o),l=Math.cos(o),f=1-l,u=t[0],h=t[1],p=t[2],v=t[3],d=t[4],m=t[5],g=t[6],y=t[7],b=t[8],M=t[9],w=t[10],_=t[11],S=r*r*f+l,G=a*r*f+i*c,R=i*r*f-a*c,q=r*a*f-i*c,T=a*a*f+l,B=i*a*f+r*c,P=r*i*f+a*c,H=a*i*f-r*c,se=i*i*f+l,e[0]=u*S+d*G+b*R,e[1]=h*S+m*G+M*R,e[2]=p*S+g*G+w*R,e[3]=v*S+y*G+_*R,e[4]=u*q+d*T+b*B,e[5]=h*q+m*T+M*B,e[6]=p*q+g*T+w*B,e[7]=v*q+y*T+_*B,e[8]=u*P+d*H+b*se,e[9]=h*P+m*H+M*se,e[10]=p*P+g*H+w*se,e[11]=v*P+y*H+_*se,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}});var Ag=me((ST,Sg)=>{Sg.exports=yM;function yM(e,t,o){var n=Math.sin(o),r=Math.cos(o),a=t[4],i=t[5],s=t[6],c=t[7],l=t[8],f=t[9],u=t[10],h=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=a*r+l*n,e[5]=i*r+f*n,e[6]=s*r+u*n,e[7]=c*r+h*n,e[8]=l*r-a*n,e[9]=f*r-i*n,e[10]=u*r-s*n,e[11]=h*r-c*n,e}});var Lg=me((AT,Tg)=>{Tg.exports=bM;function bM(e,t,o){var n=Math.sin(o),r=Math.cos(o),a=t[0],i=t[1],s=t[2],c=t[3],l=t[8],f=t[9],u=t[10],h=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*r-l*n,e[1]=i*r-f*n,e[2]=s*r-u*n,e[3]=c*r-h*n,e[8]=a*n+l*r,e[9]=i*n+f*r,e[10]=s*n+u*r,e[11]=c*n+h*r,e}});var Cg=me((TT,zg)=>{zg.exports=wM;function wM(e,t,o){var n=Math.sin(o),r=Math.cos(o),a=t[0],i=t[1],s=t[2],c=t[3],l=t[4],f=t[5],u=t[6],h=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*r+l*n,e[1]=i*r+f*n,e[2]=s*r+u*n,e[3]=c*r+h*n,e[4]=l*r-a*n,e[5]=f*r-i*n,e[6]=u*r-s*n,e[7]=h*r-c*n,e}});var Rg=me((LT,Ng)=>{Ng.exports=_M;function _M(e,t,o){var n,r,a,i=o[0],s=o[1],c=o[2],l=Math.sqrt(i*i+s*s+c*c);return Math.abs(l)<1e-6?null:(l=1/l,i*=l,s*=l,c*=l,n=Math.sin(t),r=Math.cos(t),a=1-r,e[0]=i*i*a+r,e[1]=s*i*a+c*n,e[2]=c*i*a-s*n,e[3]=0,e[4]=i*s*a-c*n,e[5]=s*s*a+r,e[6]=c*s*a+i*n,e[7]=0,e[8]=i*c*a+s*n,e[9]=s*c*a-i*n,e[10]=c*c*a+r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e)}});var Pg=me((zT,Og)=>{Og.exports=MM;function MM(e,t,o){var n=t[0],r=t[1],a=t[2],i=t[3],s=n+n,c=r+r,l=a+a,f=n*s,u=n*c,h=n*l,p=r*c,v=r*l,d=a*l,m=i*s,g=i*c,y=i*l;return e[0]=1-(p+d),e[1]=u+y,e[2]=h-g,e[3]=0,e[4]=u-y,e[5]=1-(f+d),e[6]=v+m,e[7]=0,e[8]=h+g,e[9]=v-m,e[10]=1-(f+p),e[11]=0,e[12]=o[0],e[13]=o[1],e[14]=o[2],e[15]=1,e}});var Fg=me((CT,Ig)=>{Ig.exports=kM;function kM(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var Gg=me((NT,Dg)=>{Dg.exports=EM;function EM(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}});var qg=me((RT,$g)=>{$g.exports=SM;function SM(e,t){var o=Math.sin(t),n=Math.cos(t);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=n,e[6]=o,e[7]=0,e[8]=0,e[9]=-o,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var Bg=me((OT,Hg)=>{Hg.exports=AM;function AM(e,t){var o=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=0,e[2]=-o,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=o,e[9]=0,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var jg=me((PT,Ug)=>{Ug.exports=TM;function TM(e,t){var o=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=o,e[2]=0,e[3]=0,e[4]=-o,e[5]=n,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var Vg=me((IT,Wg)=>{Wg.exports=LM;function LM(e,t){var o=t[0],n=t[1],r=t[2],a=t[3],i=o+o,s=n+n,c=r+r,l=o*i,f=n*i,u=n*s,h=r*i,p=r*s,v=r*c,d=a*i,m=a*s,g=a*c;return e[0]=1-u-v,e[1]=f+g,e[2]=h-m,e[3]=0,e[4]=f-g,e[5]=1-l-v,e[6]=p+d,e[7]=0,e[8]=h+m,e[9]=p-d,e[10]=1-l-u,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var Yg=me((FT,Xg)=>{Xg.exports=zM;function zM(e,t,o,n,r,a,i){var s=1/(o-t),c=1/(r-n),l=1/(a-i);return e[0]=a*2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a*2*c,e[6]=0,e[7]=0,e[8]=(o+t)*s,e[9]=(r+n)*c,e[10]=(i+a)*l,e[11]=-1,e[12]=0,e[13]=0,e[14]=i*a*2*l,e[15]=0,e}});var Qg=me((DT,Kg)=>{Kg.exports=CM;function CM(e,t,o,n,r){var a=1/Math.tan(t/2),i=1/(n-r);return e[0]=a/o,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(r+n)*i,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*r*n*i,e[15]=0,e}});var Jg=me((GT,Zg)=>{Zg.exports=NM;function NM(e,t,o,n){var r=Math.tan(t.upDegrees*Math.PI/180),a=Math.tan(t.downDegrees*Math.PI/180),i=Math.tan(t.leftDegrees*Math.PI/180),s=Math.tan(t.rightDegrees*Math.PI/180),c=2/(i+s),l=2/(r+a);return e[0]=c,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=l,e[6]=0,e[7]=0,e[8]=-((i-s)*c*.5),e[9]=(r-a)*l*.5,e[10]=n/(o-n),e[11]=-1,e[12]=0,e[13]=0,e[14]=n*o/(o-n),e[15]=0,e}});var tx=me(($T,ex)=>{ex.exports=RM;function RM(e,t,o,n,r,a,i){var s=1/(t-o),c=1/(n-r),l=1/(a-i);return e[0]=-2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*c,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*l,e[11]=0,e[12]=(t+o)*s,e[13]=(r+n)*c,e[14]=(i+a)*l,e[15]=1,e}});var nx=me((qT,ox)=>{var OM=l1();ox.exports=PM;function PM(e,t,o,n){var r,a,i,s,c,l,f,u,h,p,v=t[0],d=t[1],m=t[2],g=n[0],y=n[1],b=n[2],M=o[0],w=o[1],_=o[2];return Math.abs(v-M)<1e-6&&Math.abs(d-w)<1e-6&&Math.abs(m-_)<1e-6?OM(e):(f=v-M,u=d-w,h=m-_,p=1/Math.sqrt(f*f+u*u+h*h),f*=p,u*=p,h*=p,r=y*h-b*u,a=b*f-g*h,i=g*u-y*f,p=Math.sqrt(r*r+a*a+i*i),p?(p=1/p,r*=p,a*=p,i*=p):(r=0,a=0,i=0),s=u*i-h*a,c=h*r-f*i,l=f*a-u*r,p=Math.sqrt(s*s+c*c+l*l),p?(p=1/p,s*=p,c*=p,l*=p):(s=0,c=0,l=0),e[0]=r,e[1]=s,e[2]=f,e[3]=0,e[4]=a,e[5]=c,e[6]=u,e[7]=0,e[8]=i,e[9]=l,e[10]=h,e[11]=0,e[12]=-(r*v+a*d+i*m),e[13]=-(s*v+c*d+l*m),e[14]=-(f*v+u*d+h*m),e[15]=1,e)}});var ax=me((HT,rx)=>{rx.exports=IM;function IM(e){return"mat4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+", "+e[9]+", "+e[10]+", "+e[11]+", "+e[12]+", "+e[13]+", "+e[14]+", "+e[15]+")"}});var nc=me((BT,ix)=>{ix.exports={create:rg(),clone:ig(),copy:cg(),identity:l1(),transpose:hg(),invert:dg(),adjoint:vg(),determinant:gg(),multiply:yg(),translate:wg(),scale:Mg(),rotate:Eg(),rotateX:Ag(),rotateY:Lg(),rotateZ:Cg(),fromRotation:Rg(),fromRotationTranslation:Pg(),fromScaling:Fg(),fromTranslation:Gg(),fromXRotation:qg(),fromYRotation:Bg(),fromZRotation:jg(),fromQuat:Vg(),frustum:Yg(),perspective:Qg(),perspectiveFromFieldOfView:Jg(),ortho:tx(),lookAt:nx(),str:ax()}});var lx=me((UT,cx)=>{"use strict";var sx=og(),fn=nc(),Os=or(),FM=3e3,bh="high",f1,_l=.36,Ml=13.64,rc=Os.C.hallEnd-.01,kl=Os.C.z0+.01,DM=.356,GM=13.644,$M=Os.C.hallEnd-.006,qM=Os.C.z0+.006,HM=.12,_h=4,ac=e=>fr[e]&&fr[e].cy||_h,h1=.26,BM=5.6,UM=7,fr=[{side:"right",z:34.5},{side:"right",z:23.5},{side:"left",z:23.5},{side:"end",z:rc},{side:"left",z:34.5},{side:"right",z:14.6},{side:"left",z:14.6,maxW:3.7,maxH:3.7},{side:"corridor",x:Os.PAINTING_X[0],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:Os.PAINTING_X[1],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:Os.PAINTING_X[2],cy:3,maxW:3.3,maxH:3.73}];function jM(e,t){let o=t&&t.maxH||BM,n=t&&t.maxW||UM,r=Math.min(o,n/e);return{width:r*e,height:r}}function WM(e,t,o){let n=fr[o],r=[],a=ac(o)-t/2;return n.side==="left"?(fn.fromTranslation(r,[_l,a,n.z+e/2]),fn.rotateY(r,r,Math.PI/2)):n.side==="right"?(fn.fromTranslation(r,[Ml,a,n.z-e/2]),fn.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?fn.fromTranslation(r,[n.x-e/2,a,kl]):(fn.fromTranslation(r,[7+e/2,a,rc]),fn.rotateY(r,r,Math.PI)),fn.scale(r,r,[e,t,HM]),r}function VM(e,t,o){let n=fr[o],r=[],a=ac(o)-t/2;return n.side==="left"?(fn.fromTranslation(r,[_l,a,n.z+e/2]),fn.rotateY(r,r,Math.PI/2)):n.side==="right"?(fn.fromTranslation(r,[Ml,a,n.z-e/2]),fn.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?fn.fromTranslation(r,[n.x-e/2,a,kl]):(fn.fromTranslation(r,[7+e/2,a,rc]),fn.rotateY(r,r,Math.PI)),r}function XM(e,t,o){let n=fr[o],r=[],a=ac(o)-t/2-h1-.38;return n.side==="left"?(fn.fromTranslation(r,[DM,a,n.z+e/2]),fn.rotateY(r,r,Math.PI/2)):n.side==="right"?(fn.fromTranslation(r,[GM,a,n.z-e/2]),fn.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?fn.fromTranslation(r,[n.x-e/2,a,qM]):(fn.fromTranslation(r,[7+e/2,a,$M]),fn.rotateY(r,r,Math.PI)),fn.scale(r,r,[2,2,2]),r}function YM(e,t,o){let n=fr[o],r=ac(o)-t/2-h1-.38;return n.side==="left"?[_l+.55,r,n.z]:n.side==="right"?[Ml-.55,r,n.z]:n.side==="corridor"?[n.x,r,kl+.55]:[7,r,rc-.55]}var wl=.42;function wh(e,t,o,n,r,a){return[t[0]*n,t[1]*n,t[2]*n,0,0,r,0,0,o[0]*a,o[1]*a,o[2]*a,0,e[0],e[1],e[2],1]}function KM(e,t,o){let n=fr[o],r,a,i;n.side==="left"?(r=[_l,n.z],a=[0,0,1],i=[1,0,0]):n.side==="right"?(r=[Ml,n.z],a=[0,0,1],i=[-1,0,0]):n.side==="corridor"?(r=[n.x,kl],a=[1,0,0],i=[0,0,1]):(r=[7,rc],a=[1,0,0],i=[0,0,-1]);let s=ac(o)+t/2+h1+.3,c=Math.min(2.4,Math.max(.9,e*.55)),l=(p,v)=>[r[0]+i[0]*p,v,r[1]+i[2]*p],f=[.075,.062,.05],u=[{fixmodel:wh(l(.014,s),a,i,.1,.13,.028),fixcol:f,fixglow:0},{fixmodel:wh(l(wl/2,s),a,i,.02,.02,wl),fixcol:f,fixglow:0},{fixmodel:wh(l(wl,s),a,i,c,.034,.05),fixcol:f,fixglow:0},{fixmodel:wh(l(wl-.012,s-.019),a,i,c*.94,.006,.028),fixcol:f,fixglow:1}],h=l(wl,s-.02);return{fixtures:u,light:{c:[h[0],h[1],h[2],1],d:[a[0],a[1],a[2],c/2]}}}cx.exports=(e,t)=>{let o=[],n=[],r=a=>{let i=a.image_id;if(!fr[i])return;let{width:s,height:c}=jM(a.aspect,fr[i]),l=KM(s,c,i);t&&t.lights&&i<t.lights.length&&(t.lights[i]=l.light),o.push({...a,fixtures:l.fixtures,side:fr[i].side,model:WM(s,c,i),framemodel:VM(s,c,i),framesize:[s,c],textmodel:XM(s,c,i),text:a.textGen(s),width:s,height:c,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:YM(s,c,i),paintingPosition:fr[i].side==="left"?[_l+.05,_h,fr[i].z]:fr[i].side==="right"?[Ml-.05,_h,fr[i].z]:fr[i].side==="corridor"?[fr[i].x,ac(i),kl+.05]:[7,_h,rc-.05],textGen:null})};return sx.fetch(e,fr.length,bh,r,()=>{}),{update:()=>{n=o,n.forEach(a=>{sx.load(e,a,bh)}),bh="low",f1&&clearTimeout(f1),f1=setTimeout(()=>{bh="high"},FM)},batch:()=>n,interactables:()=>n.map((a,i)=>({side:a.side,width:a.width,index:i,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:a.plaquePosition,paintingPosition:a.paintingPosition}))}}});var dx=me((jT,ux)=>{"use strict";var QM=n1(),fx=vr(),hx=[[-.02,.125],[-.02,.15],[.035,.15],[.07,.12],[.07,.17],[.185,.17],[.185,.19],[.215,.19],[.26,.03]];function ZM(){let e=[[0,0],[1,0],[1,1],[0,1]],t=[];hx.forEach(([n,r])=>{e.forEach(([a,i])=>t.push([a,i,n,r]))});let o=[];for(let n=0;n<hx.length-1;n++)for(let r=0;r<4;r++){let a=(r+1)%4,i=n*4+r,s=n*4+a,c=(n+1)*4+r,l=(n+1)*4+a;o.push(i,s,l,i,l,c)}return{verts:t,elems:o}}var JM=`#extension GL_OES_standard_derivatives : enable
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
}`,ek=`
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
}`;ux.exports=e=>{let t=QM.draw(e),o=e({frag:`#extension GL_OES_standard_derivatives : enable
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
	${Gi().lanternGLSL()}
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
	}`,attributes:{pos:[0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,-.1,-.1,0,1.1,-.1,0,-.1,1.1,0,1.1,1.1,0]},elements:[0,1,2,3,2,1,1,0,5,4,5,0,3,1,7,5,7,1,0,2,4,6,4,2,8,9,4,5,4,9,9,11,5,7,5,11,11,10,7,6,7,10,10,8,6,4,6,8],uniforms:{model:e.prop("model"),tex:e.prop("tex"),psize:e.prop("framesize"),canvasCm:(i,s)=>s.size?[s.size[1],s.size[0]]:[61,91],texel:1/(fx.isPhone?1024:2048),detail:()=>fx.post===0?0:1},blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}}),n=ZM(),r=e({frag:JM,vert:ek,attributes:{prof:n.verts},elements:n.elems,uniforms:{model:e.prop("framemodel"),fsize:e.prop("framesize")},cull:{enable:!1},blend:{enable:!1}}),a=e({frag:`#extension GL_OES_standard_derivatives : enable
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
}`,attributes:{pos:[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5],[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]]},elements:[0,1,2,0,2,3,4,5,6,4,6,7,0,1,5,0,5,4,2,3,7,2,7,6,0,3,7,0,7,4,1,2,6,1,6,5],uniforms:{model:e.prop("fixmodel"),fixcol:e.prop("fixcol"),fixglow:e.prop("fixglow")},cull:{enable:!1},blend:{enable:!1}});return function(i){o(i),r(i);let s=[];i.forEach(c=>{c.fixtures&&s.push(...c.fixtures)}),s.length&&a(s),t(i)}}});var Mh=me((WT,px)=>{"use strict";var xi=[-90,0,0],u1=16,d1=27.5,p1=11.6;px.exports={O:xi,W:u1,L:d1,RIDGE:p1,BOX:[xi[0]-.8,0,xi[2]-11.5,xi[0]+u1+.8,p1+.5,xi[2]+d1+.8],AIR_BOX:[xi[0],0,xi[2],xi[0]+u1,p1,xi[2]+d1]}});var Eh=me((VT,bx)=>{"use strict";var{A:ar}=Jr(),{C:En}=or(),{DOOR:ic}=Ii(),Xn=gi(),sc=Mh(),gx=En.hallEnd+.35,xx={arch:[13.6,0,ar.zc-ar.arch.r-.3,14.4,ar.arch.spring+ar.arch.r+.3,ar.zc+ar.arch.r+.3],mouth:[13.3,0,En.z0-.3,14.3,8.2,En.z1+.3],stair:[-.5,0,Xn.SURR.z0-.2,.5,Xn.SURR.top+.3,Xn.SURR.z1+.2],door:[ic.x0-.4,0,-.5,ic.x1+.4,ic.top+.4,.5],windows:[15.6,.4,En.z1-.2,36.9,6.4,En.z1+.9],farDoor:[En.x1-.2,0,En.zc-ic.r-.4,En.x1+.9,ic.top+.4,En.zc+ic.r+.4]},yi={court:[ar.x0-.4,0,ar.z0-.3,ar.x1+.3,ar.domeTop+.5,ar.z1+.3],stair:[Xn.C.x-Xn.R-2.6,0,Xn.C.z-Xn.R-1.5,.5,15.6,Xn.C.z+Xn.R+1.5],street:[-60,-1,-140,74,60,.6],garden:[10,-1,En.z1,46,60,En.z1+110],florence:[En.x1,-1,En.zc-30,En.x1+80,60,En.zc+30],studio:sc.BOX},tk=[[0,0,0,14,0,gx],[13.6,0,En.z0,En.x1+.4,0,En.z1],[ar.x0-.4,0,ar.z0,ar.x1,0,ar.z1],[Xn.C.x-Xn.R-2.6,0,Xn.C.z-Xn.R,.4,0,Xn.C.z+Xn.R],[sc.BOX[0],0,sc.BOX[2],sc.BOX[3],0,sc.BOX[5]]],ok={hall:{court:["arch"],stair:["stair"],street:["door"],garden:["mouth","windows"],florence:["mouth","farDoor"]},wing:{court:["mouth","arch"],stair:["mouth","stair"],street:["mouth","door"],garden:["windows"],florence:["farDoor"]},court:{stair:["arch","stair"],street:["arch","door"],garden:["arch","mouth","windows"],florence:["arch","mouth","farDoor"]},stair:{court:["stair","arch"],street:["stair","door"],garden:["stair","mouth","windows"],florence:["stair","mouth","farDoor"]}},Al=new Float64Array(24),Ca=[7,2,2],yx=0,bi="out",kh=!0;try{/[?&]nocull\b/.test(location.search)&&(kh=!1)}catch(e){}var El={court:!0,stair:!0,street:!0,garden:!0,florence:!0,studio:!1},Sl={court:!0,stair:!0,street:!0,garden:!0,florence:!0,studio:!1},vx=!0;function nk(e){let t=s=>[e[s],e[4+s],e[8+s],e[12+s]],o=t(0),n=t(1),r=t(2),a=t(3),i=(s,c,l,f)=>{for(let u=0;u<4;u++)Al[s*4+u]=c[u]+l*f[u]};i(0,a,1,o),i(1,a,-1,o),i(2,a,1,n),i(3,a,-1,n),i(4,a,1,r),i(5,a,-1,r)}function Bi(e,t){if(!kh)return!0;let o=t?-e[4]:e[1],n=t?-e[1]:e[4];for(let r=0;r<6;r++){let a=Al[r*4],i=Al[r*4+1],s=Al[r*4+2],c=Al[r*4+3],l=a>0?e[3]:e[0],f=i>0?n:o,u=s>0?e[5]:e[2];if(a*l+i*f+s*u+c<0)return!1}return!0}var v1=(e,t)=>Ca[0]>e[0]-t&&Ca[0]<e[3]+t&&Ca[2]>e[2]-t&&Ca[2]<e[5]+t;function rk(e){if(v1(e,.6))return null;let t=1/0,o=-1/0;for(let n=0;n<4;n++){let r=(n&1?e[3]:e[0])-Ca[0],a=(n&2?e[5]:e[2])-Ca[2],i=Math.atan2(r,a)-yx;i-=Math.round(i/(2*Math.PI))*2*Math.PI,t=Math.min(t,i),o=Math.max(o,i)}return o-t>Math.PI?null:[t,o]}function mx(e,t,o){let n=-Math.PI,r=Math.PI,a=i=>{let s=rk(i);return s?(n=Math.max(n,s[0]-.03),r=Math.min(r,s[1]+.03),n<=r):!0};for(let i of e){let s=xx[i];if(!v1(s,.6)&&(!Bi(s,o)||!a(s)))return!1}return Bi(t,o)&&a(t)}function ak(){let e=Ca[0],t=Ca[2],o=sc.BOX;return e>o[0]&&e<o[3]&&t>o[2]&&t<o[5]?"studio":e<0&&t>Xn.C.z-Xn.R-1.5&&e>Xn.C.x-Xn.R-2.6?"stair":e>14.1&&t>ar.z0-.3&&t<ar.z1+.3&&e<ar.x1+.3?"court":e>13.9&&t>En.z0-.4&&t<En.z1+.1&&e<En.x1+.3?"wing":e>=0&&e<=14.1&&t>.3&&t<gx?"hall":"out"}var ik={PORTAL:xx,ROOM:yi,update(e,t,o){let n=new Array(16);for(let r=0;r<4;r++)for(let a=0;a<4;a++){let i=0;for(let s=0;s<4;s++)i+=t[s*4+a]*e[r*4+s];n[r*4+a]=i}nk(n),Ca[0]=o[0],Ca[1]=o[1],Ca[2]=o[2],yx=Math.atan2(-e[2],-e[10]),bi=ak();for(let r in yi){if(r==="studio"||bi==="studio"){El[r]=Sl[r]=r==="studio"&&bi==="studio";continue}if(!kh||bi==="out"||bi===r||v1(yi[r],.3))El[r]=Bi(yi[r],!1)||bi===r,Sl[r]=Bi(yi[r],!0)||bi===r;else{let a=ok[bi][r];El[r]=a?mx(a,yi[r],!1):Bi(yi[r],!1),Sl[r]=a?mx(a,yi[r],!0):Bi(yi[r],!0)}}vx=!kh||tk.some(r=>Bi(r,!1))},get zone(){return bi},room(e,t){return t?Sl[e]:El[e]},box(e,t,o){return o&&!(t?Sl[o]:El[o])?!1:Bi(e,t)},get floor(){return vx}};bx.exports=ik});var _x=me((XT,wx)=>{"use strict";var sk=t1(),ck=Eh();function lk(e){let t=new DataView(e);if(String.fromCharCode(t.getUint8(0),t.getUint8(1),t.getUint8(2),t.getUint8(3))!=="STAT")throw new Error("Not a statue file");let n=t.getUint32(4,!0),r=t.getUint32(8,!0),a=[],i=[];for(let u=0;u<3;u++)a.push(t.getFloat32(12+u*4,!0)),i.push(t.getFloat32(24+u*4,!0));let s=36,c=new Uint16Array(e,s,n*3);s+=n*6;let l=new Uint16Array(e,s,r);s+=r*2;let f=new Int8Array(e,s,n*3);return{nV:n,nI:r,mn:a,sz:i,pos:c,idx:l,nrm:f}}wx.exports=(e,t)=>{let o=[],n=[],r=[],a=[],i=null,s=t.statues.length,c=[],l=(u,h)=>{let p=o.length/3,v=h.height*.75,d=h.base!==void 0?h.base:t.pedestalTop;c.push({offset:a.length,count:u.nI,box:[h.x-v,d-.1,h.z-v,h.x+v,d+h.height+.2,h.z+v]});let m=h.height,g=Math.cos(h.yaw),y=Math.sin(h.yaw),b=h.base!==void 0?h.base:t.pedestalTop;for(let M=0;M<u.nV;M++){let w=(u.mn[0]+u.pos[M*3]/65535*u.sz[0])*m,_=(u.mn[1]+u.pos[M*3+1]/65535*u.sz[1])*m,S=(u.mn[2]+u.pos[M*3+2]/65535*u.sz[2])*m;o.push(h.x+g*w+y*S,b+_,h.z-y*w+g*S);let G=u.nrm[M*3]/127,R=u.nrm[M*3+1]/127,q=u.nrm[M*3+2]/127;n.push(g*G+y*q,R,-y*G+g*q),r.push(h.mat||1,0,0)}for(let M=0;M<u.nI;M++)a.push(p+u.idx[M])},f=()=>{a.length!==0&&(i=sk(e,{position:o,normal:n,mat:r,elements:a,lights:t.lights,get viewer(){return t.viewer}},!1,!0))};return t.statues.forEach(u=>{fetch("res/"+u.file).then(h=>{if(!h.ok)throw new Error("Could not load "+u.file);return h.arrayBuffer()}).then(h=>l(lk(h),u)).catch(h=>console.error(h)).then(()=>{--s===0&&f()})}),function(u){if(!i)return;let h=!!(u&&u.reflected),p=c.filter(v=>ck.box(v.box,h));p.length&&i(p)}}});var Rx=me((YT,g1)=>{"use strict";var fk=As(),Pn=1.29032,Is=[9.2968,2,5.9],hk=[[.767398,.00185,-.10827],[.010515,.769952,.087681],[-.107774,.08829,-.762374]],Sh=2147.64,Mx=725,kx=1288,Ex=1450,Sx=2576,Br=-5.197,Ds=3.865,Ui=10.135,Gs=-14.679,Tl=-30.229,Ll=7.232,Ax=-45.713,cc=17.1*Pn,Fs=16.6*Pn,zl=16.6*Pn,Tx=[6.9,17.1],Ah=[2.95,16.6],uk=1.6,dk=0,pk=1,Lx=2,m1=3,zx=4,Cx=5,vk=6;function mk(){let e=[],t=[],o=[],n=[],r=fk.createBuilder(e,t,o,n),a=(l,f,u,h,p,v,d=1,m=1)=>{let g=[];for(let y=0;y<=d;y++){let b=[];for(let M=0;M<=m;M++){let w=[l[0]+f[0]*y/d+u[0]*M/m,l[1]+f[1]*y/d+u[1]*M/m,l[2]+f[2]*y/d+u[2]*M/m],_=v(w);b.push(r.vert(w,h,[p,_[0],_[1]]))}g.push(b)}for(let y=0;y<d;y++)for(let b=0;b<m;b++)r.tri(g[y][b],g[y+1][b],g[y][b+1]),r.tri(g[y+1][b],g[y+1][b+1],g[y][b+1])},i=l=>f=>[(Is[2]-f[2])/Pn-l,f[1]/Pn];a([-60,0,-.36],[130,0,0],[0,0,-140],[0,1,0],dk,l=>[l[0]/Pn,l[2]/Pn],13,14),a([Ds,0,Br],[0,0,Gs-Br],[0,cc,0],[1,0,0],pk,i(8.6),6,6),a([-40,0,Br],[Ds+40,0,0],[0,cc,0],[0,0,1],Lx,l=>[(Ds-l[0])/Pn,l[1]/Pn],8,4),a([-40,0,-.36],[0,0,Br+.36],[0,cc,0],[1,0,0],Lx,l=>[-l[2]/Pn,l[1]/Pn]),a([Ui,0,-80],[0,0,Br+80],[0,Fs,0],[-1,0,0],zx,i(8.6),12,6),a([Ui,0,Br],[60,0,0],[0,Fs,0],[0,0,1],Cx,l=>[(l[0]-Ui)/Pn,l[1]/Pn],8,4),a([70,0,Br],[0,0,-.36-Br],[0,Fs,0],[-1,0,0],Cx,l=>[-l[2]/Pn,l[1]/Pn]);let s=l=>[(l[0]-Is[0])/Pn+4.18,l[1]/Pn];a([-20,0,Tl],[Ll+20,0,0],[0,zl,0],[0,0,1],m1,s,8,6),a([Ll,0,Tl],[0,0,Ax-Tl],[0,zl,0],[1,0,0],m1,i(28),4,4),a([Ll,0,Ax],[Ui-Ll,0,0],[0,Fs,0],[0,0,1],zx,l=>[(l[0]-Is[0])/Pn,l[1]/Pn],2,4),a([-20,0,Gs],[0,0,Tl-Gs],[0,zl,0],[1,0,0],m1,i(16),4,4);let c=(l,f,u,h)=>a(l,f,u,h,vk,()=>[0,0],4,4);return c([-300,-20,-300],[600,0,0],[0,320,0],[0,0,1]),c([-300,300,-300],[600,0,0],[0,0,300],[0,-1,0]),c([-300,-20,0],[0,0,-300],[0,320,0],[1,0,0]),c([300,-20,-300],[0,0,300],[0,320,0],[-1,0,0]),{position:e,normal:t,elements:o,attr:n}}function Ps(e,t,o,n){let r=e.texture({data:[[n]],...o,min:"linear",mag:"linear"});return fetch(t).then(a=>{if(!a.ok)throw new Error("Could not load "+t);return a.blob()}).then(a=>createImageBitmap(a)).then(a=>{r({data:a,...o,min:"mipmap",mipmap:"nice",mag:"linear"})}).catch(a=>console.error(a)),r}var Na=e=>"vec3("+e.map(t=>t.toFixed(4)).join(", ")+")",gk=[[[-.35,0,-.35],[14.35,9.2,50]],[[-40,0,Gs],[Ds,cc,Br]],[[Ui,0,-80],[70,Fs,Br]],[[-20,0,-80],[Ll,zl,Tl]],[[-40,0,-80],[-20,zl,Gs]]],xk=gk.map(e=>`if (hitBox(ro, rd, ${Na(e[0])}, ${Na(e[1])}, 1e4) ) return 0.0;`).join(`
		`),Nx="mat3("+[0,1,2].map(e=>[0,1,2].map(t=>hk[t][e].toFixed(6)).join(", ")).join(", ")+")",yk=`
precision highp float;

uniform sampler2D photo, photoNight, photoMask, pinkTex, yellowTex, creamTex, cobbleTex;
uniform float time;
uniform float night;   // 0 by day, 1 at night

varying vec3 v_pos;
varying vec3 v_normal;
varying vec3 v_attr;
varying vec3 v_eye;

const vec3 SUN = ${Na([-.25,.4,.88].map(e=>e/Math.hypot(-.25,.4,.88)))};

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
	${xk}
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
	vec3 ro = ${Na(Is)};
	vec3 rd = p - ro;
	if (hitBox(ro, rd, ${Na([-40,0,Gs])}, ${Na([Ds-.02,cc,Br])}, 0.995)) return false;
	if (hitBox(ro, rd, ${Na([Ui+.02,0,-80])}, ${Na([70,Fs,Br])}, 0.995)) return false;
	return true;
}

// is this point sky in the photo? (only meaningful inside the photo)
bool photoSky(vec3 p) {
	vec3 pc = ${Nx} * (p - ${Na(Is)});
	if (pc.z < 0.2) return false;
	vec2 uv = vec2(
		(${Mx.toFixed(2)} + ${Sh.toFixed(3)} * pc.x / pc.z) / ${Ex.toFixed(1)},
		(${kx.toFixed(2)} - ${Sh.toFixed(3)} * pc.y / pc.z) / ${Sx.toFixed(1)}
	);
	if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return false;
	return texture2D(photoMask, uv).r < 0.5;
}

// photo colour and how much to trust it (0..1)
vec4 photoAt(vec3 p, vec3 n, vec3 eye) {
	vec3 pc = ${Nx} * (p - ${Na(Is)});
	if (pc.z < 0.2) return vec4(0.0);
	vec2 uv = vec2(
		(${Mx.toFixed(2)} + ${Sh.toFixed(3)} * pc.x / pc.z) / ${Ex.toFixed(1)},
		(${kx.toFixed(2)} - ${Sh.toFixed(3)} * pc.y / pc.z) / ${Sx.toFixed(1)}
	);
	vec2 e = min(uv, 1.0 - uv);
	float w = smoothstep(0.002, 0.02, min(e.x, e.y));
	if (w <= 0.0) return vec4(0.0);
	w *= smoothstep(0.35, 0.75, texture2D(photoMask, uv).r);
	if (w <= 0.0) return vec4(0.0);
	if (!photoSees(p)) return vec4(0.0);
	// if we see this surface much more square-on than the photo did,
	// the photo would look smeared: hand over to the painted facade
	float camCos = abs(dot(normalize(p - ${Na(Is)}), n));
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
		base = texture2D(cobbleTex, fuv / ${uk.toFixed(2)}).rgb;
	} else if (kind < 2.5) {
		base = texture2D(pinkTex, vec2(fuv.x / ${Tx[0].toFixed(2)}, 1.0 - fuv.y / ${Tx[1].toFixed(2)})).rgb;
	} else if (kind < 3.5) {
		base = texture2D(yellowTex, vec2(fuv.x / ${Ah[0].toFixed(2)}, 1.0 - fuv.y / ${Ah[1].toFixed(2)})).rgb;
	} else {
		base = texture2D(creamTex, vec2(fuv.x / ${Ah[0].toFixed(2)}, 1.0 - fuv.y / ${Ah[1].toFixed(2)})).rgb;
	}

	// ---------- the photograph, where it can be trusted ----------
	bool projectable = kind < 0.5 || (kind > 0.5 && kind < 1.5) || (kind > 2.5 && kind < 4.5);
	if (kind < 0.5) {
		// the photo only shows ground inside the alley, or beyond its corners
		bool inAlley = v_pos.x > ${(Ds-.05).toFixed(3)} && v_pos.x < ${(Ui+.05).toFixed(3)};
		projectable = inAlley || v_pos.z < ${Gs.toFixed(3)};
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
}`,bk=`
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
}`,wk=nr();g1.exports=e=>{let t=mk(),o={wrapS:"clamp",wrapT:"clamp",flipY:!1},n={wrapS:"mirror",wrapT:"clamp",flipY:!1},r={wrapS:"repeat",wrapT:"repeat",flipY:!1},a=Ps(e,"res/street/photo.jpg",o,[190,160,120]),i=Ps(e,"res/street/photo_night.jpg",o,[12,14,22]),s=Ps(e,"res/street/photo_mask.png",o,[255,255,255]),c=Ps(e,"res/street/facade_pink.jpg",n,[200,150,135]),l=Ps(e,"res/street/facade_yellow.jpg",n,[225,180,95]),f=Ps(e,"res/street/facade_cream.jpg",n,[215,200,175]),u=Ps(e,"res/street/cobbles.jpg",r,[95,95,95]),h=Date.now(),p=e({frag:yk,vert:bk,attributes:{position:t.position,normal:t.normal,attr:t.attr},elements:new Uint32Array(t.elements),uniforms:{photo:a,photoMask:s,pinkTex:c,yellowTex:l,creamTex:f,cobbleTex:u,photoNight:i,night:()=>wk.night,time:()=>(Date.now()-h)/1e3}});return function(){p()}};g1.exports.layout={MOUTH_Z:Br,PINK_X:Ds,RIGHT_X:Ui,PINK_H:cc,CREAM_H:Fs,S:Pn}});var Ix=me((KT,Px)=>{"use strict";var _k=nr().GLSL,{glassPanes:Mk}=Ii(),Ox=or();function kk(){let e=[],t=[],o=(n,r)=>{for(let a of n)e.push(a),t.push(r)};return o(Mk(),[0,0,1]),o(Ox.windowGlass(),[0,0,1]),o(Ox.farDoorGlass(),[1,0,0]),{position:e,normal:t}}Px.exports=e=>{let t=kk(),o=e({frag:`
		precision highp float;
		${_k}
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
		}`,attributes:{position:t.position,normal:t.normal},count:t.position.length,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o()}}});var Jx=me((QT,_1)=>{"use strict";var Hx=nr().GLSL,Ek=As(),x1=vr(),{wallWithHoles:Sk,C:Vi}=or(),at=.28,te={westBack:14.4,westCol:15-at,eastCol:37.4+at,eastBack:41.8,south:Vi.z1+.7,northCol:Vi.z1+.7+16,northBack:Vi.z1+.7+19,cx:(15+37.4)/2,cz:(Vi.z1+.7+Vi.z1+.7+16-at)/2},Lo={x0:te.westCol+at,x1:te.eastCol-at,z0:te.south,z1:te.northCol-at},mr=3.3,Rl=.92,Xi=5.6,Fx=6,ma=11.9,Wi=9.6,ao={x0:te.cx-2.9,x1:te.cx+2.9,top:14.4},Oh=7,Bx=4,b1=(te.eastCol-te.westCol)/Oh,Ak=(te.northCol-te.south)/Bx,Ux=3,Pl=.26,Bs=1.4,qs=1.1,Lh=3,Ka=(()=>{let e=[.3,.82,-.49],t=Math.hypot(...e);return e.map(o=>o/t)})(),Ve={GROUND:0,BRICK:1,STONE:2,MARBLE:3,HEDGE:4,POT:5,ROOF:6,SHUTTER:7,PANE:8,PLASTER:9,BARK:10,IRON:11,SKY:12,LEAD:13,FARBRICK:14,DARK:15,SOIL:16},Qa=[],jx=(e,t,o)=>[te.cx+e,t,te.cz+o],zh=jx(-5.9,0,3.4),Yi=.85,ji={c:[zh[0],4.6*Yi+.5,zh[2]],r:[5*Yi,3.6*Yi,4.5*Yi]},Wx=[{d:[0,4.4,0],r:[3.9,2.6,3.6],n:230},{d:[-2.7,4,-1.2],r:[2.6,2.1,2.4],n:105},{d:[2.7,4.5,-1.6],r:[2.5,2.2,2.3],n:105},{d:[.8,6.9,.8],r:[2.6,2,2.5],n:105},{d:[-1.6,6.1,2],r:[2.2,1.9,2],n:80},{d:[2.3,3.4,1.8],r:[2,1.5,1.9],n:60}].map(e=>({c:[zh[0]+e.d[0]*Yi,e.d[1]*Yi+.5,zh[2]+e.d[2]*Yi],r:e.r.map(t=>t*Yi),n:e.n}));for(let e of Wx)Qa.push({...e,cell:0,leaf:[.5,.7,.46],bloom:[1,1,1],size:[.95,1.35],magnolia:1,shadow:1});var Tk=[3.6,6.3,9];for(let e of Tk){let t=8.6+e%1.7*.6;Qa.push({c:jx(e,t/2+.5,5.2),r:[.9,t/2,.9],cell:1,leaf:[.5,.64,.5],bloom:[1,1,1],n:180,size:[.72,.98],spindle:1,shadow:1})}var Lk=[{d:[-8.4,-4],bloom:[1,.62,.78]},{d:[-3.6,-4.6],bloom:[1,.98,.94]},{d:[3.8,-4.3],bloom:[1,.98,.94]},{d:[8.5,-4],bloom:[1,.58,.72]}].map(e=>({x:te.cx+e.d[0],z:te.cz+e.d[1],bloom:e.bloom}));for(let e of Lk)Qa.push({c:[e.x,.95,e.z],r:[1.25,.95,1.1],cell:3,leaf:[.7,.86,.58],bloom:e.bloom,n:80,size:[.55,.8],shadow:1});var w1=[45,135,225,315].map(e=>{let t=e*Math.PI/180;return[te.cx+Math.cos(t)*2.3,te.cz+Math.sin(t)*2.3]});for(let[e,t]of w1)Qa.push({c:[e,1.85,t],r:[.62,.55,.62],cell:3,leaf:[.78,.95,.55],bloom:[1.25,1,.25],n:36,size:[.32,.42],shadow:1});var Vx=[];{let e=(o,n,r,a,i,s)=>{let c=Math.hypot(r-o,a-n),l=Math.floor(c/.9);for(let f=0;f<=l;f++){let u=f/l,h=o+(r-o)*u,p=n+(a-n)*u;i!==void 0&&Math.abs((r!==o?h:p)-i)<s||Vx.push([h,p])}};e(Lo.x0+.45,Lo.z0+1.2,Lo.x0+.45,Lo.z1-.45,te.cz,1),e(Lo.x1-.45,Lo.z0+1.2,Lo.x1-.45,Lo.z1-.45,te.cz,1),e(Lo.x0+.45,Lo.z1-.45,Lo.x1-.45,Lo.z1-.45,te.cx,1.9)}var zk=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],Ch=e=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]};function fc(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),l=e.vert(n,a,i),f=e.vert(r,a,i);e.tri(s,c,l),e.tri(s,l,f)}function In(e,t,o,n,r,a,i,s){e.box(Math.min(t,r),Math.min(o,a),Math.min(n,i),Math.max(t,r),Math.max(o,a),Math.max(n,i),[s,0,0])}function Ck(e,t,o){return{vert:(n,r,a)=>e.vert(t(n),o(r),a),tri:e.tri}}var Nk={north:[e=>[e[0],e[1],te.northCol-e[2]],e=>[e[0],e[1],-e[2]]],west:[e=>[te.westCol+e[2],e[1],e[0]],e=>[e[2],e[1],e[0]]],east:[e=>[te.eastCol-e[2],e[1],e[0]],e=>[-e[2],e[1],e[0]]]};function Xx(e,t,o,n,r){let a=[];for(let i=0;i<o;i++){let s=e+i*t+(i===0?n:.02),c=e+(i+1)*t-(i===o-1?r:.02);a.push([s,c,e+(i+.5)*t])}return a}var Rk=Xx(te.westCol,b1,Oh,at+Pl,at+Pl),Dx=Xx(te.south,Ak,Bx,.32,at+Pl),lc=[te.cx-32.35,te.northCol-77],Ok=Array.from({length:Oh-1},(e,t)=>te.westCol+(t+1)*b1),Yx=e=>(e[1]-e[0])/2-.2,Ol=e=>(e[0]+e[1])/2;function Pk(e,t){let o=Ol(e),n=Yx(e);return{u0:e[0],u1:e[1],bottom:t?0:Rl,head:r=>{let a=Math.abs(r-o);return a<n?mr+Math.sqrt(n*n-a*a):mr},step:.05}}function Ik(e,t,o){return{u0:e-o,u1:e+o,bot:n=>t-Math.sqrt(Math.max(0,o*o-(n-e)*(n-e))),head:n=>t+Math.sqrt(Math.max(0,o*o-(n-e)*(n-e))),step:.04,mat:[Ve.STONE,0,0]}}function Fk(e,t,o,n){return{u0:e-t/2,u1:e+t/2,bottom:o,head:()=>n,step:.5,mat:[Ve.STONE,0,0]}}function Gx(e,t,o){let[n,r]=Nk[t],a=Ck(e,n,r),i=[];o.arches.forEach((f,u)=>i.push(Pk(f,u===o.open)));let s=[];for(let f of o.bays||o.arches){let u=Ol(f);o.oculi&&i.push(Ik(u,6.85,.3)),s.push({c:u,y0:o.win[0],y1:o.win[1],w:1.05})}for(let f of o.extraWindows||[])s.push(f);for(let f of s)i.push(Fk(f.c,f.w,f.y0,f.y1));for(let f of o.extraHoles||[])i.push(f);Sk(a,{u0:o.u0,u1:o.u1,w0:-at,w1:at,top:o.top,holes:i,mat:[Ve.BRICK,0,0],revealMat:[Ve.BRICK,0,0],noEnds:o.noEnds,cuts:o.cuts,topStep:.25});let c=(f,u,h,p,v,d,m)=>{let g=n([f,u,h]),y=n([p,v,d]);In(e,g[0],g[1],g[2],y[0],y[1],y[2],m)},l=(f,u,h,p,v,d)=>fc(a,f,u,h,p,v,[d,0,0]);for(let f of o.arches){let u=Ol(f),h=Yx(f),p=28;for(let v of[at,-at]){let d=v>0?1:-1,m=v+d*.025;for(let g=0;g<p;g++){let y=Math.PI*g/p,b=Math.PI*(g+1)/p,M=(T,B)=>[u+Math.cos(T)*B,mr+Math.sin(T)*B],w=M(y,h),_=M(b,h),S=M(y,h+.26),G=M(b,h+.26);l([w[0],w[1],m],[_[0],_[1],m],[G[0],G[1],m],[S[0],S[1],m],[0,0,d],Ve.STONE);let R=Math.cos((y+b)/2),q=Math.sin((y+b)/2);l([S[0],S[1],v],[G[0],G[1],v],[G[0],G[1],m],[S[0],S[1],m],[R,q,0],Ve.STONE)}}}if(o.arches.forEach((f,u)=>{u!==o.open&&c(f[0]-.02,Rl,-at-.05,f[1]+.02,Rl+.09,at+.05,Ve.STONE)}),c(o.u0,Fx,-at,o.u1,Fx+.18,at+.09,Ve.STONE),c(o.u0,o.win[0]-.12,at-.01,o.u1,o.win[0],at+.06,Ve.STONE),o.cornice)for(let[f,u,h]of o.cornice)c(f,h-.22,at-.01,u,h,at+.16,Ve.STONE),c(f,h,at-.01,u,h+.16,at+.42,Ve.STONE);for(let{c:f,y0:u,y1:h,w:p,door:v}of s){let d=p/2;if(l([f-d-.01,u,.06],[f+d+.01,u,.06],[f+d+.01,h,.06],[f-d-.01,h,.06],[0,0,1],v?Ve.DARK:Ve.PANE),v){c(f-d-.16,0,at-.01,f-d,h+.16,at+.07,Ve.STONE),c(f+d,0,at-.01,f+d+.16,h+.16,at+.07,Ve.STONE),c(f-d-.16,h,at-.01,f+d+.16,h+.2,at+.09,Ve.STONE),c(f-d,0,.07,f+d,h-.02,.12,Ve.SHUTTER),c(f-.012,0,.12,f+.012,h-.02,.14,Ve.DARK);continue}for(let m of[-1,1]){let g=f+m*d;c(g+m*.02,u+.02,at+.02,g+m*(d+.025),h-.02,at+.06,Ve.SHUTTER)}c(f-d-.09,h,at-.01,f+d+.09,h+.16,at+.05,Ve.STONE),c(f-d-.09,u-.1,at-.01,f+d+.09,u,at+.09,Ve.STONE),c(f-.015,u,.06,f+.015,h,.09,Ve.SHUTTER),c(f-d,(u+h)/2-.015,.06,f+d,(u+h)/2+.015,.09,Ve.SHUTTER)}if(o.oculi)for(let f of o.bays||o.arches){let u=Ol(f);l([u-.31,6.54,0],[u+.31,6.54,0],[u+.31,7.16,0],[u-.31,7.16,0],[0,0,1],Ve.DARK)}for(let f of o.cols){let u=Rl+.09,h=n([f,0,0]);In(e,h[0]-.24,u,h[2]-.24,h[0]+.24,u+.12,h[2]+.24,Ve.MARBLE),e.lathe([[.23,u+.12,1],[.24,u+.17],[.2,u+.24],[.215,u+.28],[.17,u+.34,1],[.165,u+.6],[.155,mr-.5],[.15,mr-.38,1],[.175,mr-.34,1],[.17,mr-.3],[.2,mr-.22],[.27,mr-.15],[.29,mr-.12,1]],h[0],h[2],18,{mat:()=>[Ve.MARBLE,0,0]}),In(e,h[0]-.29,mr-.12,h[2]-.29,h[0]+.29,mr+.01,h[2]+.29,Ve.STONE)}o.walk&&o.walk(e)}function Dk(e){let t=[-1,0,1].map(r=>{let a=te.cx+r*1.7;return{u0:a-.6,u1:a+.6,bottom:11,head:i=>12.9+Math.sqrt(Math.max(0,.36-(i-a)*(i-a))),step:.04,mat:[Ve.STONE,0,0]}});Gx(e,"north",{u0:te.westCol-at,u1:te.eastCol+at,top:r=>r>ao.x0+1e-6&&r<ao.x1-1e-6?ao.top:ma,cuts:[ao.x0,ao.x0+1e-5,ao.x1-1e-5,ao.x1],arches:Rk,open:Ux,cols:Ok,oculi:!0,win:[8,9.9],extraHoles:t,cornice:[[te.westCol-at-3.3,ao.x0,ma],[ao.x1,te.eastCol+at+3.3,ma],[ao.x0-.2,ao.x1+.2,ao.top]],walk:r=>{In(r,Lo.x0,Xi,te.northCol+at,Lo.x1,Xi+.2,te.northBack,Ve.PLASTER),In(r,Lo.x0,0,te.northBack,Lo.x1,Xi,te.northBack+.3,Ve.PLASTER);for(let a of[te.cx-7.2,te.cx,te.cx+7.2])fc(r,[a-.8,0,te.northBack-.01],[a+.8,0,te.northBack-.01],[a+.8,2.9,te.northBack-.01],[a-.8,2.9,te.northBack-.01],[0,0,-1],[Ve.DARK,0,0]),In(r,a-.98,0,te.northBack-.06,a+.98,3.12,te.northBack,Ve.STONE),fc(r,[a-.8,0,te.northBack-.07],[a+.8,0,te.northBack-.07],[a+.8,2.9,te.northBack-.07],[a-.8,2.9,te.northBack-.07],[0,0,-1],[Ve.DARK,0,0])}}),fc(e,[ao.x0,11,te.northCol+.2],[ao.x1,11,te.northCol+.2],[ao.x1,13.6,te.northCol+.2],[ao.x0,13.6,te.northCol+.2],[0,0,-1],[Ve.DARK,0,0]),In(e,ao.x0+.3,10.88,te.northCol-at-.06,ao.x1-.3,11,te.northCol-at+.1,Ve.STONE),In(e,te.westBack,Xi+.2,te.northBack,te.eastBack,ma,te.northBack+3.4,Ve.BRICK),In(e,te.westBack,Wi,te.northCol-at,te.westCol-at,ma,te.northCol+at,Ve.BRICK),In(e,te.eastCol+at,Wi,te.northCol-at,te.eastBack,ma,te.northCol+at,Ve.BRICK),In(e,te.westBack,Xi+.2,te.northCol+at+.12,te.eastBack,ma,te.northBack,Ve.BRICK),Cl(e,[te.westBack-.5,ma+.16,te.northCol-at-.42],[ao.x0-te.westBack+.5,0,0],[0,2.6,4.4],Ve.ROOF),Cl(e,[ao.x1,ma+.16,te.northCol-at-.42],[te.eastBack+.5-ao.x1,0,0],[0,2.6,4.4],Ve.ROOF),Cl(e,[ao.x0-.3,ao.top+.16,te.northCol-at-.42],[ao.x1-ao.x0+.6,0,0],[0,1.4,3],Ve.ROOF),$x(e,[ao.x0-.3,ao.top+.16,te.northCol-at-.42],[ao.x0-.3,ao.top+1.56,te.northCol-at+2.58],[ao.x0-.3,ao.top+.16,te.northCol-at+2.58],[-1,0,0],Ve.BRICK),$x(e,[ao.x1+.3,ao.top+.16,te.northCol-at-.42],[ao.x1+.3,ao.top+1.56,te.northCol-at+2.58],[ao.x1+.3,ao.top+.16,te.northCol-at+2.58],[1,0,0],Ve.BRICK),In(e,ao.x0,ma,te.northCol+at,ao.x1,ao.top,te.northCol+2.6,Ve.BRICK);for(let[r,a]of[[te.cx-9.8,te.northBack+.6],[te.cx+9.4,te.northBack+.4],[te.cx-4.6,te.northBack+1]])In(e,r-.4,12.5,a-.4,r+.4,15.4,a+.4,Ve.BRICK),In(e,r-.52,15.4,a-.52,r+.52,15.62,a+.52,Ve.STONE);let o=(r,a,i)=>{let s=r==="west"?-1:1,c=[];Dx.forEach((u,h)=>{let p=Ol(u);h===1?c.push({c:p,y0:0,y1:2.9,w:1.4,door:!0}):c.push({c:p,y0:1,y1:2.75,w:1.05}),c.push({c:p,y0:3.85,y1:5.45,w:1.05})}),Gx(e,r,{u0:te.south,u1:te.northCol-at,top:()=>Wi,arches:[],bays:Dx,cols:[],win:[7.45,8.85],extraWindows:c,noEnds:!0,cornice:[[te.south,te.northCol-at,Wi]]}),In(e,a,0,te.south,i+s*(at+.12),Wi,te.northBack+.3,Ve.BRICK);let l=i-s*at;In(e,l,0,te.south,l-s*.06,.55,te.northCol-at,Ve.STONE);let f=i-s*(at+.42);Cl(e,[f,Wi+.16,te.south],[0,0,te.northCol-at-te.south],[a-f+s*.4,1.9,0],Ve.ROOF)};o("west",te.westBack,te.westCol),o("east",te.eastBack,te.eastCol);let n=Vi.x1+.7;In(e,13.65,7.4,te.south-.02,n,7.62,te.south+.14,Ve.STONE),In(e,13.65,10.4,te.south-.02,n,10.6,te.south+.38,Ve.STONE),Cl(e,[13.65,10.6,te.south+.38],[n-13.65,0,0],[0,2.2,-5],Ve.ROOF)}function $x(e,t,o,n,r,a){let i=[a,0,0];e.tri(e.vert(t,r,i),e.vert(o,r,i),e.vert(n,r,i))}function Cl(e,t,o,n,r){let a=Ch([o[1]*n[2]-o[2]*n[1],o[2]*n[0]-o[0]*n[2],o[0]*n[1]-o[1]*n[0]]),i=a[1]<0?a.map(l=>-l):a,s=(l,f)=>[t[0]+o[0]*l+n[0]*f,t[1]+o[1]*l+n[1]*f,t[2]+o[2]*l+n[2]*f];fc(e,s(0,0),s(1,0),s(1,1),s(0,1),i,[r,0,0]);let c=.08;fc(e,s(0,0),s(1,0),[s(1,0)[0],s(1,0)[1]-c,s(1,0)[2]],[s(0,0)[0],s(0,0)[1]-c,s(0,0)[2]],Ch([-n[0],0,-n[2]]),[r,0,0])}function Gk(e){let t=te.westBack,o=te.eastBack,n=te.south,r=te.northBack,a=36,i=22,s=[];for(let c=0;c<=a;c++){s.push([]);for(let l=0;l<=i;l++){let f=[t+(o-t)*c/a,0,n+(r-n)*l/i];s[c].push(e.vert(f,[0,1,0],[Ve.GROUND,0,0]))}}for(let c=0;c<a;c++)for(let l=0;l<i;l++)e.tri(s[c][l],s[c+1][l],s[c+1][l+1]),e.tri(s[c][l],s[c+1][l+1],s[c][l+1])}var Nl=.46,Hs=.58,$s=[[-.5,0],[-.52,.45],[-.46,.78],[-.3,.95],[0,1],[.3,.95],[.46,.78],[.52,.45],[.5,0]];function $k(e,t,o){let n=qs+o,r=(e>0?Lo.x1-te.cx:te.cx-Lo.x0)-Bs-o,a=qs+o,i=(t>0?Lo.z1-te.cz:te.cz-Lo.z0)-Bs-o,s=Lh+o,c=Math.sqrt(s*s-n*n),l=Math.sqrt(s*s-a*a),f=[[n,c],[n,i],[r,i],[r,a],[l,a]],u=Math.atan2(a,l),h=Math.atan2(c,n);for(let p=1;p<10;p++){let v=u+(h-u)*p/10;f.push([Math.cos(v)*s,Math.sin(v)*s])}return f.map(([p,v])=>[te.cx+e*p,te.cz+t*v])}function qk(e,t,o){let n=o[0]-t[0],r=o[1]-t[1],a=Math.hypot(n,r),i=n/a,s=r/a,c=-s,l=i,f=Nl*.5,u=-f,h=a+f,p=[],v=Math.max(1,Math.ceil((h-u)/1));for(let d=0;d<=v;d++){let m=u+(h-u)*d/v,g=[];for(let y=0;y<$s.length;y++){let[b,M]=$s[y],w=Math.min($s.length-2,y),_=$s[Math.max(0,y-1)],S=$s[Math.min($s.length-1,y+1)],G=(S[0]-_[0])*Nl,q=(S[1]-_[1])*Hs,T=-G,B=Math.hypot(q,T)||1,P=[t[0]+i*m+c*b*Nl,M*Hs,t[1]+s*m+l*b*Nl],H=[c*(-q/B),-T/B,l*(-q/B)];g.push(e.vert(P,H[1]<-.2?[c*Math.sign(b),.3,l*Math.sign(b)]:H,[Ve.HEDGE,0,0]))}p.push(g)}for(let d=0;d<v;d++)for(let m=0;m<$s.length-1;m++)e.tri(p[d][m],p[d+1][m],p[d+1][m+1]),e.tri(p[d][m],p[d+1][m+1],p[d][m+1]);for(let[d,m]of[[0,-1],[v,1]]){let g=p[d],y=e.vert([t[0]+i*(d?h:u),Hs*.5,t[1]+s*(d?h:u)],[i*m,0,s*m],[Ve.HEDGE,0,0]);for(let b=0;b<g.length-1;b++)e.tri(y,g[b],g[b+1])}}function Hk(e){for(let t of[-1,1])for(let o of[-1,1]){let n=$k(t,o,.3);for(let r=0;r<n.length;r++)qk(e,n[r],n[(r+1)%n.length])}}function Bk(e){let t=te.cx,o=te.cz,n=()=>[Ve.STONE,0,0];e.lathe([[1.45,0,1],[1.45,.14,1],[1.12,.14,1],[1.12,.3,1],[0,.3]],t,o,8,{mat:n}),e.lathe([[.76,.3,1],[.8,.38,1],[.74,.44],[.76,.7],[.82,.9],[.8,1.02,1],[.88,1.06,1],[.88,1.18,1],[.6,1.18,1],[.6,.98]],t,o,24,{mat:n}),e.lathe([[.6,.98,1],[0,.98]],t,o,16,{mat:()=>[Ve.DARK,0,0]});let r={mat:()=>[Ve.IRON,0,0]};e.tube([[t-.72,1.1,o],[t-.72,1.9,o],[t-.7,2.3,o]],()=>.035,8,6,r),e.tube([[t+.72,1.1,o],[t+.72,1.9,o],[t+.7,2.3,o]],()=>.035,8,6,r);let a=[];for(let i=0;i<=10;i++){let s=Math.PI*i/10;a.push([t-Math.cos(s)*.7,2.3+Math.sin(s)*.45,o])}e.tube(a,()=>.03,20,6,r),e.tube([[t-.45,2.25,o],[t,2.38,o],[t+.45,2.25,o]],()=>.02,8,5,r),e.ellipsoid([t,2.32,o],[.03,.13,.13],6,10,r);for(let i of[-1,1]){let s=[];for(let c=0;c<=12;c++){let l=c/12*Math.PI*1.6,f=.16*(1-c/16);s.push([t+i*(.72-.18+Math.cos(l)*f*i*-1+0),1.95+Math.sin(l)*f,o])}e.tube(s,()=>.016,16,5,r)}}function Uk(e){for(let[t,o]of w1)e.lathe([[.26,0,1],[.3,.06],[.36,.42],[.38,.5,1],[.44,.52,1],[.44,.64,1],[.38,.66,1],[.37,.6]],t,o,20,{mat:()=>[Ve.POT,0,0]}),e.lathe([[.37,.6,1],[0,.6]],t,o,12,{mat:()=>[Ve.SOIL,0,0]}),e.tube([[t,.6,o],[t+.02,1,o-.01],[t-.01,1.45,o+.02]],n=>.045-n*.02,6,6,{mat:()=>[Ve.BARK,0,0]})}function jk(e){let[t,,o]=ji.c,n=Qx(7),r=[[-1.8,.4,3.6],[1.6,-.9,3.9],[.4,1.9,3.4],[-.6,-1.7,4.2],[2.1,1.2,3.2]];for(let[a,i,s]of r){let c=[[t+a*.05,0,o+i*.05],[t+a*.25,s*.35,o+i*.25],[t+a*.6,s*.7,o+i*.6],[t+a,s,o+i],[t+a*1.35+(n()-.5),s+1.4,o+i*1.35+(n()-.5)]];e.tube(c,l=>.2*(1-l*.75),14,9,{mat:()=>[Ve.BARK,0,0]});for(let l=0;l<2;l++){let f=.55+l*.2,u=[t+a*f,s*f,o+i*f],h=n()*Math.PI*2;e.tube([u,[u[0]+Math.cos(h)*1.3,u[1]+.9,u[2]+Math.sin(h)*1.3],[u[0]+Math.cos(h)*2.3,u[1]+1.4+n(),u[2]+Math.sin(h)*2.3]],p=>.08*(1-p*.7),8,6,{mat:()=>[Ve.BARK,0,0]})}}for(let a of Qa.filter(i=>i.spindle))e.tube([[a.c[0],0,a.c[2]],[a.c[0],1.4,a.c[2]]],()=>.12,3,7,{mat:()=>[Ve.BARK,0,0]})}function Wk(e){let t=()=>[Ve.FARBRICK,0,0],o=()=>[Ve.LEAD,0,0],n=(a,i,s,c,l,f)=>{e.lathe([[s+.3,20,1],[s+.3,c-1.2,1],[s+.8,c-.9,1],[s+.8,c,1],[s,c,1]],a,i,28,{mat:t});let u=[];for(let p=0;p<=12;p++){let v=p/12*Math.PI/2,d=Math.cos(v)*s,m=Math.sin(v)*l;f&&(d*=1-.18*Math.sin(v*2)),u.push([Math.max(d,s*.12),c+m])}e.lathe(u,a,i,28,{mat:o});let h=c+l;e.lathe([[s*.13,h-.2,1],[s*.13,h+3,1],[s*.18,h+3.2,1],[s*.02,h+6.4]],a,i,10,{mat:o})};In(e,14,0,104,52,26,150,Ve.FARBRICK),e.lathe([[3,26],[.1,32]],33,108,4,{mat:t}),n(26,124,7.2,33,9.5,!0),n(40.5,116,6,31,8,!0),n(16.5,117,5.5,30,7.2,!0),e.lathe([[6.4,20,1],[6.4,34,1],[6.9,34.4,1],[6,34.4,1],[.6,46.5,1],[.15,50]],33,132,24,{mat:o});let r=(a,i,s)=>{In(e,a-1.8,0,i-1.8,a+1.8,s,i+1.8,Ve.FARBRICK),e.lathe([[1.9,s,1],[1.6,s+3.5,1],[1.2,s+3.5,1],[1.2,s+6,1],[.9,s+6.2,1],[.05,s+13]],a,i,8,{mat:t})};r(20.5,109,36),r(46.5,112,38)}function Vk(e){let o=[te.cx,0,te.cz],n=24,r=10,a=[];for(let i=0;i<=n;i++){a.push([]);let s=-Math.PI*.62+Math.PI*1.24*i/n;for(let c=0;c<=r;c++){let l=Math.PI/2*(c/r)-.05,f=[Math.sin(s)*Math.cos(l),Math.sin(l),Math.cos(s)*Math.cos(l)],u=[o[0]+f[0]*420,o[1]+f[1]*420,o[2]+f[2]*420];a[i].push(e.vert(u,[-f[0],-f[1],-f[2]],[Ve.SKY,0,0]))}}for(let i=0;i<n;i++)for(let s=0;s<r;s++)e.tri(a[i][s],a[i+1][s],a[i+1][s+1]),e.tri(a[i][s],a[i+1][s+1],a[i][s+1])}function Xk(){let e=[],t=[],o=[],n=[],r=Ek.createBuilder(e,t,o,n);return Gk(r),Dk(r),Hk(r),Bk(r),Uk(r),jk(r),r.save(),r.translate(lc[0],0,lc[1]),Wk(r),r.restore(),Vk(r),{position:e,normal:t,elements:o,attr:n}}var Kx=[[[13.65,0,Vi.z0-.7],[Vi.x1+.7,10.6,te.south]],[[te.westBack,Xi,te.northCol-at],[te.eastBack,ma,te.northBack+3.4]],[[ao.x0,ma,te.northCol-at],[ao.x1,ao.top,te.northCol+2.6]],[[te.westBack,0,te.south],[te.westCol+at,Wi,te.northBack+.3]],[[te.eastCol-at,0,te.south],[te.eastBack,Wi,te.northBack+.3]],[[14+lc[0],0,104+lc[1]],[52+lc[0],26,150+lc[1]]]];function Yk(e,t,o,n){let r=.001,a=1e9;for(let i=0;i<3;i++){if(Math.abs(t[i])<1e-9){if(e[i]<o[i]||e[i]>n[i])return!1;continue}let s=(o[i]-e[i])/t[i],c=(n[i]-e[i])/t[i];if(s>c&&([s,c]=[c,s]),r=Math.max(r,s),a=Math.min(a,c),r>a)return!1}return!0}function Th(e,t,o,n){let r=[(e[0]-o[0])/n[0],(e[1]-o[1])/n[1],(e[2]-o[2])/n[2]],a=[t[0]/n[0],t[1]/n[1],t[2]/n[2]],i=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],s=r[0]*a[0]+r[1]*a[1]+r[2]*a[2],c=r[0]*r[0]+r[1]*r[1]+r[2]*r[2]-1,l=s*s-i*c;if(l<=0)return 0;let f=Math.sqrt(l),u=Math.max(0,(-s-f)/i),h=(-s+f)/i;return Math.max(0,h-u)}function y1(e){for(let[t,o]of Kx)if(Yk(e,Ka,t,o))return 0;return 1}function Qx(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let o=t;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function Kk(){let e=[],t=[],o=[],n=[],r=[],a=[],i=[],s=Qx(21),c=(v,d,m,g,y,b,M)=>{let w=e.length/3;for(let[_,S]of[[-1,-1],[1,-1],[1,1],[-1,1]])e.push(...v),t.push(_,S),o.push(d,m,g),n.push(...y),r.push(...b),a.push(...M);i.push(w,w+1,w+2,w,w+2,w+3)},l=(v,d)=>{let m=1;for(let g of Qa){if(g===d||!g.shadow)continue;let y=Th(v,Ka,g.c,g.r);y>0&&(m*=Math.exp(-y*.9))}return m},f=Qa.map(v=>({...v,pts:null}));for(let v of f)for(let d=0;d<v.n;d++){let m;do m=[s()*2-1,s()*2-1,s()*2-1];while(m[0]*m[0]+m[1]*m[1]+m[2]*m[2]>1);let g=Math.hypot(m[0],m[1],m[2])||1,y=Math.pow(s(),.35)*.98,b=[m[0]/g*y,m[1]/g*y,m[2]/g*y];if(v.spindle){let P=b[1],H=Math.sqrt(Math.max(.02,1-P*P))*(P>0?1-P*.55:1+P*.25),se=Math.hypot(b[0],b[2])||1,Z=H*Math.min(1,se*1.4);b=[b[0]/se*Z,P,b[2]/se*Z]}v.magnolia&&b[1]<-.55&&(b[1]=-.55+(b[1]+.55)*.35);let M=[v.c[0]+b[0]*v.r[0],v.c[1]+b[1]*v.r[1],v.c[2]+b[2]*v.r[2]],w,_;if(v.magnolia){let P=0;for(let Z of Wx)P=Math.max(P,Th(M,Ka,Z.c,Z.r));w=Math.exp(-P*1.1);let H=1;for(let Z of Qa)if(!Z.magnolia&&Z.shadow){let le=Th(M,Ka,Z.c,Z.r);le>0&&(H*=Math.exp(-le*.9))}w*=y1(M)*H;let se=zk(M,ji.c);_=Ch([se[0]/ji.r[0]+b[0]*.5,se[1]/ji.r[1]+b[1]*.5,se[2]/ji.r[2]+b[2]*.5]),y=Math.min(1,Math.hypot(se[0]/ji.r[0],se[1]/ji.r[1],se[2]/ji.r[2])*.6+y*.4)}else{let P=Th(M,Ka,v.c,v.r);w=Math.exp(-P*(v.spindle?2.2:1.25)),w*=y1(M)*l(M,Qa[f.indexOf(v)]),_=Ch([b[0]/v.r[0],b[1]/v.r[1],b[2]/v.r[2]])}let S=Math.max(0,_[0]*Ka[0]+_[1]*Ka[1]+_[2]*Ka[2]),G=.25+.75*Math.pow(y,1.5)*(.65+.35*(_[1]*.5+.5)),R=v.size[0]+(v.size[1]-v.size[0])*s(),q=.85+s()*.3,T=v.leaf.map(P=>P*q),B=v.cell;v.cell===3&&s()<.35&&(B=2),c(M,R,B,s()*Math.PI*2,[w,G,.35+.65*S],T,v.bloom)}for(let[v,d]of Vx){let m=s()<.5;for(let g=0;g<3;g++){let y=[v+(s()-.5)*.7,.28+s()*.22,d+(s()-.5)*.5],b=y1(y)*l(y,null);c(y,.32+s()*.12,s()<.7?3:2,s()*6.28,[b,.6+s()*.3,.8],[.75,.9,.6],m?[1,.55,.75]:[.85,.8,1.15])}}let u=i.length/6,h=Array.from({length:u},(v,d)=>d);for(let v=u-1;v>0;v--){let d=Math.floor(s()*(v+1));[h[v],h[d]]=[h[d],h[v]]}let p=[];for(let v of h)for(let d=0;d<6;d++)p.push(i[v*6+d]);return{center:e,corner:t,par:o,light:n,tint:r,bloom:a,elements:p}}var tt=e=>e.toFixed(4),Il=e=>`vec3(${tt(e[0])}, ${tt(e[1])}, ${tt(e[2])})`,Zx=`
const vec3 SUN = ${Il(Ka)};
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
`,Qk=Kx.map(([e,t])=>`if (hitBox(ro, SUN, ${Il(e)}, ${Il(t)})) return 0.0;`).join(`
	`),Zk=Qa.filter(e=>e.shadow).map(e=>`tr *= crownShade(ro, ${Il(e.c)}, ${Il(e.r)}, ${e.spindle?"1.8":"1.0"});`).join(`
	`),Jk=(e,t,o,n,r,a,i,s,c)=>`
	{
		float t = (${tt(t)} - ro.${e}) / SUN.${e};
		if (t > 0.0) {
			vec3 q = ro + SUN * t;
			float u = q.${e==="z"?"x":"z"};
			if (q.y < ${tt(Xi)} && u > ${tt(o-at)} && u < ${tt(o+n*r+at)}) {
				float k = floor((u - ${tt(o)}) / ${tt(n)});
				float a = ${tt(o)} + k * ${tt(n)} + (k < 0.5 ? ${tt(a)} : 0.02);
				float b = ${tt(o)} + (k + 1.0) * ${tt(n)} - (k > ${tt(r-1.5)} ? ${tt(i)} : 0.02);
				float c = 0.5 * (a + b), r = 0.5 * (b - a) - 0.2;
				float d = abs(u - c);
				float sill = abs(k - ${tt(s)}) < 0.5 ? 0.0 : ${tt(Rl+.09)};
				bool hole = (q.y > sill && q.y < ${tt(mr)} && u > a && u < b && d < 0.5 * (b - a) - 0.17)
					|| (q.y >= ${tt(mr)} && d * d + (q.y - ${tt(mr)}) * (q.y - ${tt(mr)}) < r * r);
				if (!hole && ${c}) return 0.0;
			}
		}
	}`,Nh=qs+.3,Rh=qs+.3,Fl=Lh+.3,qx=Lo.x1-te.cx-Bs-.3,eE=Lo.z1-te.cz-Bs-.3,tE=te.cz-Lo.z0-Bs-.3,oE=Math.sqrt(Fl*Fl-Nh*Nh),nE=Math.sqrt(Fl*Fl-Rh*Rh),rE=[[te.cx,te.cz,.86,1.18],[te.cx,te.cz,1.25,.3],...w1.map(([e,t])=>[e,t,.42,.65])].map(([e,t,o,n])=>`if (hitCyl(ro, vec2(${tt(e)}, ${tt(t)}), ${tt(o)}, ${tt(n)})) return 0.0;`).join(`
	`),aE=`
float segDist(vec2 p, vec2 a, vec2 b) {
	vec2 pa = p - a, ba = b - a;
	float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
	return length(pa - ba * h);
}

// distance to the nearest hedge line
float hedgeDist(vec2 xz) {
	vec2 q = abs(xz - vec2(${tt(te.cx)}, ${tt(te.cz)}));
	float b1 = xz.y > ${tt(te.cz)} ? ${tt(eE)} : ${tt(tE)};
	vec2 A = vec2(${tt(Nh)}, ${tt(oE)}), Bp = vec2(${tt(Nh)}, b1), C = vec2(${tt(qx)}, b1);
	vec2 D = vec2(${tt(qx)}, ${tt(Rh)}), E = vec2(${tt(nE)}, ${tt(Rh)});
	float d = min(min(segDist(q, A, Bp), segDist(q, Bp, C)), min(segDist(q, C, D), segDist(q, D, E)));
	float ang = atan(q.y, q.x);
	if (ang > atan(E.y, E.x) && ang < atan(A.y, A.x)) d = min(d, abs(length(q) - ${tt(Fl)}));
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
	${Qk}
	${Jk("z",te.northCol,te.westCol,b1,Oh,at+Pl,at+Pl,Ux,"ro.z > "+tt(te.northCol-at))}
	// on lighter settings only the buildings cast shadows
	if (gardenDetail < 0.5) return 1.0;
	${rE}
	if (ro.y < ${tt(Hs)} && ro.x > ${tt(Lo.x0)} && ro.x < ${tt(Lo.x1)}) {
		for (int i = 1; i <= 4; i++) {
			float t = float(i) / 4.0 * (${tt(Hs)} - ro.y) / SUN.y;
			vec3 q = ro + SUN * t;
			float w = ${tt(Nl*.5)} * sqrt(max(0.0, 1.0 - pow(q.y / ${tt(Hs)}, 4.0)));
			if (hedgeDist(q.xz) < w) return 0.0;
		}
	}
	float tr = 1.0;
	${Zk}
	return tr;
}
`,iE=`
precision highp float;
${Hx}
varying vec3 v_pos, v_normal, v_attr, v_eye;
uniform float time, gardenDetail;
${Zx}
${aE}

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
		bool yard = P.x > ${tt(Lo.x0)} && P.x < ${tt(Lo.x1)} && P.z < ${tt(Lo.z1)};
		if (!yard) {
			// stone slabs under the arcades
			vec2 g = P.xz / 0.62;
			vec2 fg = fract(g);
			float h = hash(floor(g));
			base = mix(vec3(0.66, 0.60, 0.52), vec3(0.76, 0.70, 0.62), h);
			base *= 1.0 - 0.25 * (step(fg.x, 0.03) + step(fg.y, 0.03)) * (1.0 - lod);
			spec = 0.15;
		} else {
			float ex = min(P.x - ${tt(Lo.x0)}, ${tt(Lo.x1)} - P.x);
			float ez = min(P.z - ${tt(Lo.z0)}, ${tt(Lo.z1)} - P.z);
			float edge = min(ex, ez);
			float dx = abs(P.x - ${tt(te.cx)}), dz = abs(P.z - ${tt(te.cz)});
			float rc = length(vec2(dx, dz));
			if (edge < ${tt(Bs)}) {
				// brick path laid in rows, with a stone kerb
				vec2 q = ex < ez ? P.zx : P.xz;
				base = brick(q * vec2(1.0, 2.6), 0.4) * 0.9;
				if (abs(edge - ${tt(Bs)}) < 0.08) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (rc < ${tt(Lh)}) {
				// brick in rings round the wellhead
				float ang = atan(P.z - ${tt(te.cz)}, P.x - ${tt(te.cx)});
				vec2 q = vec2(ang * rc, rc);
				base = brick(q * vec2(1.0, 2.6), 0.5) * 0.92;
				if (abs(rc - ${tt(Lh)}) < 0.1) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (dx < ${tt(qs)} || dz < ${tt(qs)}) {
				// pale gravel
				float g = noise(P.xz * 40.0) * 0.6 + noise(P.xz * 9.0) * 0.4;
				base = mix(vec3(0.66, 0.58, 0.46), vec3(0.86, 0.79, 0.66), mix(g, 0.5, lod));
				base *= 0.94 + 0.12 * noise(P.xz * 1.3);
				float e = min(${tt(qs)} - min(dx, dz), 1.0);
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
			ao *= 0.6 + 0.4 * smoothstep(0.85, 1.6, length(P.xz - vec2(${tt(te.cx)}, ${tt(te.cz)})));
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
		ao *= 0.55 + 0.45 * smoothstep(0.0, ${tt(Hs)}, P.y) * (0.6 + 0.4 * n);
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
	bool walk = (P.x < ${tt(te.westCol)} || P.x > ${tt(te.eastCol)} || P.z > ${tt(te.northCol)}) && P.y < ${tt(Xi+.05)} && P.z > ${tt(te.south-.1)} && P.z < ${tt(te.northBack+.5)};
	float skyVis = 0.55 + 0.45 * N.y;
	if (walk) {
		float depth = P.z > ${tt(te.northCol)} ? P.z - ${tt(te.northCol)} : (P.x < ${tt(te.westCol)} ? ${tt(te.westCol)} - P.x : P.x - ${tt(te.eastCol)});
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
}`,sE=`
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
}`,cE=`
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
}`,lE=`
precision highp float;
${Hx}
uniform sampler2D leaves;
varying vec2 v_uv;
varying vec3 v_light, v_tint, v_bloom, v_pos;
${Zx}
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
}`;function fE(e,t,o){let n=e.texture({data:[[o]],min:"linear",mag:"linear"});return fetch(t).then(r=>{if(!r.ok)throw new Error("Could not load "+t);return r.blob()}).then(r=>createImageBitmap(r,{premultiplyAlpha:"none"})).then(r=>n({data:r,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(r=>console.error(r)),n}_1.exports=e=>{let t=Xk(),o=Kk(),n=fE(e,"res/garden/foliage.webp",[0,0,0,0]),r=Date.now(),a=()=>x1.motion?window.__streetClock!==void 0?window.__streetClock:(Date.now()-r)/1e3:20,i=e({frag:iE,vert:sE,attributes:{position:t.position,normal:t.normal,attr:t.attr},elements:new Uint32Array(t.elements),uniforms:{time:a,gardenDetail:()=>x1.gardenDetail}}),s=e({frag:lE,vert:cE,attributes:{center:o.center,corner:o.corner,par:o.par,light:o.light,tint:o.tint,bloom:o.bloom},elements:new Uint32Array(o.elements),uniforms:{leaves:n,time:a},cull:{enable:!1},count:()=>Math.floor(o.elements.length*x1.leafShare/6)*6});return function(){i(),s()}};_1.exports.layout={G:te,YARD:Lo,SUN:Ka}});var r3=me((ZT,n3)=>{"use strict";var hE=nr().GLSL,uE=As(),{C:o3}=or(),gr=o3.x1+.35,S1=o3.zc,M1=[gr-7.3,2,S1],e3=5.2*Math.PI/180,t3=2100,dE=725,pE=1288,vE=1450,mE=2576,wi=S1-3.2,Fh=S1+3.3,k1=gr+5,E1=gr+11.7,hc=3.9,Dl=gr+22.7,Ph=40;function gE(){let e=[],t=[],o=[],n=[],r=uE.createBuilder(e,t,o,n),a=(f,u,h,p,v,d)=>{let m=[];for(let g=0;g<=v;g++){m.push([]);for(let y=0;y<=d;y++){let b=[0,1,2].map(M=>f[M]+u[M]*g/v+h[M]*y/d);m[g].push(r.vert(b,p,[0,0,0]))}}for(let g=0;g<v;g++)for(let y=0;y<d;y++)r.tri(m[g][y],m[g+1][y],m[g+1][y+1]),r.tri(m[g][y],m[g+1][y+1],m[g][y+1])},i=Fh-wi,s=.7;a([gr-s,0,wi],[k1-gr+s,0,0],[0,0,i],[0,1,0],6,4);let c=E1-k1,l=Math.hypot(c,hc);return a([k1,0,wi],[c,hc,0],[0,0,i],[-hc/l,c/l,0],6,4),a([E1,hc,wi],[Dl-E1,0,0],[0,0,i],[0,1,0],6,4),a([gr-s,0,wi],[Dl-gr+s,0,0],[0,Ph,0],[0,0,1],12,12),a([gr-s,0,Fh],[Dl-gr+s,0,0],[0,Ph,0],[0,0,-1],12,12),a([Dl,0,wi],[0,Ph,0],[0,0,i],[-1,0,0],8,4),a([gr-s,Ph,wi],[Dl-gr+s,0,0],[0,0,i],[0,-1,0],6,4),{position:e,normal:t,elements:o,attr:n}}var Or=e=>e.toFixed(5),Ih=[[gr+3.4,3.7,wi+.01,1],[gr+8.6,4.1,Fh-.01,-1],[gr+14.8,hc+3.3,wi+.01,1],[gr+19.6,hc+3.6,Fh-.01,-1]],xE=`
precision highp float;
${hE}
uniform sampler2D photo;
uniform float time;
varying vec3 v_pos;
varying vec3 v_normal;
const int NLAMP = ${Ih.length};
vec4 LAMP[NLAMP];

void main() {
	${Ih.map((e,t)=>`LAMP[${t}] = vec4(${Or(e[0])}, ${Or(e[1])}, ${Or(e[2])}, ${Or(e[3])});`).join(`
	`)}
	vec3 d = v_pos - vec3(${Or(M1[0])}, ${Or(M1[1])}, ${Or(M1[2])});
	float c = ${Or(Math.cos(e3))}, s = ${Or(Math.sin(e3))};
	float fw = d.x * c + d.y * s;
	float up = -d.x * s + d.y * c;
	fw = max(fw, 0.05);
	vec2 px = vec2(${Or(dE)} + ${Or(t3)} * d.z / fw, ${Or(pE)} - ${Or(t3)} * up / fw);
	vec2 uv = px / vec2(${Or(vE)}, ${Or(mE)});
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
	for (int i = 0; i < ${Ih.length}; i++) {
		vec4 L = LAMP[i];                       // x, y, z, side (+1 left wall, -1 right)
		vec3 d = L.xyz - v_pos;
		float dd = dot(d, d);
		float fl = 0.92 + 0.05 * sin(time * 7.3 + float(i) * 2.1) + 0.03 * sin(time * 17.0 + float(i));
		// the wall it hangs on is lit across, the paving from above
		float face = v_normal.y > 0.5 ? max(normalize(d).y, 0.0) : 0.35 + 0.65 * max(dot(v_normal, normalize(d)), 0.0);
		lit += albedo * vec3(1.0, 0.62, 0.30) * face * fl * lampK * 3.2 / (0.6 + dd * 0.45);
	}
	gl_FragColor = vec4(lit, 1.0);
}`,yE=`
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
}`;n3.exports=e=>{let t=gE(),o=e.texture({data:[[[120,105,85]]],min:"linear",mag:"linear"});fetch("res/florence/photo.jpg").then(s=>{if(!s.ok)throw new Error("Could not load the Florence photo");return s.blob()}).then(s=>createImageBitmap(s)).then(s=>o({data:s,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(s=>console.error(s));let n=e({frag:xE,vert:yE,attributes:{position:t.position,normal:t.normal},elements:new Uint32Array(t.elements),uniforms:{photo:o},cull:{enable:!1}}),r={pos:[],nrm:[],k:[],idx:[]},a=(s,c,l)=>{let[f,u,h]=s,p=[[[1,0,0],[0,1,0],[0,0,1]],[[-1,0,0],[0,1,0],[0,0,-1]],[[0,0,1],[0,1,0],[-1,0,0]],[[0,0,-1],[0,1,0],[1,0,0]],[[0,1,0],[0,0,1],[1,0,0]],[[0,-1,0],[0,0,1],[-1,0,0]]];for(let[v,d,m]of p){let g=r.pos.length/3;for(let[y,b]of[[-1,-1],[1,-1],[1,1],[-1,1]])r.pos.push(f+v[0]*c[0]+d[0]*y*c[0]+m[0]*b*c[0],u+v[1]*c[1]+d[1]*y*c[1]+m[1]*b*c[1],h+v[2]*c[2]+d[2]*y*c[2]+m[2]*b*c[2]),r.nrm.push(...v),r.k.push(l);r.idx.push(g,g+1,g+2,g,g+2,g+3)}};for(let s of Ih){let c=s[3],l=s[2]+c*.42;a([s[0],s[1],l],[.11,.17,.11],1);for(let f of[-1,1])for(let u of[-1,1])a([s[0]+f*.11,s[1],l+u*.11],[.014,.18,.014],0);a([s[0],s[1]+.2,l],[.15,.03,.15],0),a([s[0],s[1]+.27,l],[.05,.05,.05],0),a([s[0],s[1]-.19,l],[.09,.025,.09],0),a([s[0],s[1]+.34,s[2]+c*.21],[.015,.015,.21],0),a([s[0],s[1]+.15,s[2]+c*.03],[.04,.24,.03],0)}let i=e({vert:`
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
		}`,attributes:{position:r.pos,normal:r.nrm,k:r.k},elements:new Uint16Array(r.idx),cull:{enable:!1}});return function(){n(),i()}}});var l3=me((JT,c3)=>{"use strict";var bE=nr().GLSL,{A:Gh,BENCH:T1,SHAFT:A1,TREE:Gl,oculusGLSL:wE}=Jr(),_E=vr(),Dh=Gl.sxz,a3=Gl.sy,i3=Gl.yaw;function ME(e){let t=new DataView(e),o=t.getUint32(4,!0),n=t.getUint32(8,!0),r=t.getUint32(12,!0),a=[0,1,2].map(h=>t.getFloat32(16+h*4,!0)),i=[0,1,2].map(h=>t.getFloat32(28+h*4,!0)),s=40,c=new Uint16Array(e,s,o*3);s+=o*6;let l=new Uint16Array(e,s,o*2);s+=o*4;let f=new Int8Array(e,s,o*3);s+=o*3,s=s+3&-4;let u=new Uint32Array(e,s,r);return{nV:o,nWood:n,nI:r,mn:a,sz:i,pos:c,uv:l,nrm:f,idx:u}}function kE(e){let t=new Float32Array(e.nV*3),o=new Float32Array(e.nV*3),n=new Float32Array(e.nV*2),r=new Float32Array(e.nV),a=Math.cos(i3),i=Math.sin(i3);for(let s=0;s<e.nV;s++){let c=(e.mn[0]+e.pos[s*3]/65535*e.sz[0])*Dh,l=(e.mn[1]+e.pos[s*3+1]/65535*e.sz[1])*a3,f=(e.mn[2]+e.pos[s*3+2]/65535*e.sz[2])*Dh;t[s*3]=Gh.cx+a*c+i*f,t[s*3+1]=T1.soil+.02+l,t[s*3+2]=Gh.zc-i*c+a*f;let u=e.nrm[s*3]/127/Dh,h=e.nrm[s*3+1]/127/a3,p=e.nrm[s*3+2]/127/Dh,v=Math.hypot(u,h,p)||1;u/=v,h/=v,p/=v,o[s*3]=a*u+i*p,o[s*3+1]=h,o[s*3+2]=-i*u+a*p,n[s*2]=e.uv[s*2]/65535,n[s*2+1]=e.uv[s*2+1]/65535,r[s]=s>=e.nWood?1:0}return{position:t,normal:o,uv:n,leaf:r,elements:e.idx}}function s3(e,t,o,n){let r=e.texture({data:[[n]],min:"linear",mag:"linear"});return fetch(t).then(a=>{if(!a.ok)throw new Error("Could not load "+t);return a.blob()}).then(a=>createImageBitmap(a,{premultiplyAlpha:"none"}).catch(()=>new Promise((i,s)=>{let c=new Image;c.onload=()=>i(c),c.onerror=s,c.src=URL.createObjectURL(a)}))).then(a=>r({data:a,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",...o})).catch(a=>console.error(a)),r}var Yn=e=>e.toFixed(4),uc=Gl.crownC,dc=Gl.crownR,EE=`
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

const vec3 SHAFT = vec3(${Yn(A1[0])}, ${Yn(A1[1])}, ${Yn(A1[2])});

void main() {
	vec3 p = position;
	// the air in the court is never quite still. The whole tree leans
	// with it, slowly, more the higher and the further out on a limb
	// (wood and leaves together, so every leaf stays on its twig) ...
	float h = max(p.y - 1.2, 0.0);
	vec2 out2 = p.xz - vec2(${Yn(Gh.cx)}, ${Yn(Gh.zc)});
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
	vec3 cc = vec3(${Yn(uc[0])}, ${Yn(uc[1])}, ${Yn(uc[2])});
	vec3 cr = vec3(${Yn(dc[0])}, ${Yn(dc[1])}, ${Yn(dc[2])});
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
}`,Ki=Gi(),SE=`
precision highp float;
${bE}
uniform float time;
${Ki.lanternGLSL(Ki.TREE_LANTERN)}
const vec3 LANTERN_POS = vec3(${Ki.LANTERNS[Ki.TREE_LANTERN[0]].x.toFixed(3)}, ${Ki.LANTERNS[Ki.TREE_LANTERN[0]].y.toFixed(3)}, ${Ki.LANTERNS[Ki.TREE_LANTERN[0]].z.toFixed(3)});
uniform sampler2D leaves, bark;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_leaf, v_shade;
varying vec3 v_eye;

${wE()}

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
	vec3 rel = (v_pos - vec3(${Yn(uc[0])}, ${Yn(uc[1])}, ${Yn(uc[2])})) / vec3(${Yn(dc[0])}, ${Yn(dc[1])}, ${Yn(dc[2])});
	float outer = clamp(length(rel), 0.0, 1.0);
	float ao = mix(0.38, 1.0, outer * outer) * (0.75 + 0.25 * smoothstep(0.4, 2.0, v_pos.y));
	// and the trunk darkens where it meets the soil
	ao *= 0.6 + 0.4 * smoothstep(${Yn(T1.soil)}, ${Yn(T1.soil+.5)}, v_pos.y);

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
}`;c3.exports=e=>{let t=null,o=s3(e,"res/tree/leaves.webp",{wrapS:"clamp",wrapT:"clamp"},[60,80,40,0]),n=s3(e,"res/tree/bark.jpg",{wrapS:"repeat",wrapT:"repeat"},[90,80,70]),r=Date.now();return fetch("res/tree.bin").then(a=>{if(!a.ok)throw new Error("Could not load the tree");return a.arrayBuffer()}).then(a=>{let i=kE(ME(a));t=e({vert:EE,frag:SE,attributes:{position:i.position,normal:i.normal,uv:i.uv,leaf:i.leaf},elements:i.elements,uniforms:{leaves:o,bark:n,time:()=>_E.motion?typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-r)/1e3:0},cull:{enable:!1}})}).catch(a=>console.error(a)),function(){t&&t()}}});var Bh=me((eL,d3)=>{"use strict";var pc=gi(),AE="res/audio/go-tomorrow.mp3",TE="res/audio/go-tomorrow.json",h3="gallery-sound",$h=[pc.PIANO.x,1,pc.PIANO.z],LE=pc.R,Ur=!0;try{localStorage.getItem(h3)==="off"&&(Ur=!1)}catch(e){}var yn=null,hr=null,$l=null,ql=null,Qi=null,_i=null,Us=!1,qh=null,f3=[],zE=(typeof performance!="undefined"?performance.now():0)/1e3;function CE(e){let t=Math.floor(e.sampleRate*2.6),o=e.createBuffer(2,t,e.sampleRate),n=12345,r=()=>(n=n*16807%2147483647,n/10737418235e-1-1);for(let a=0;a<2;a++){let i=o.getChannelData(a),s=0;for(let c=0;c<t;c++){let l=c/e.sampleRate,f=.25+.6*Math.exp(-l*2.2);s+=(r()-s)*f,i[c]=s*Math.pow(1-c/t,2.2)*Math.exp(-l*1.5)*(l<.012?l/.012:1)}}return o}function NE(){if(yn)return;yn=new Audio,yn.src=AE,yn.loop=!0,yn.preload="auto",yn.crossOrigin="anonymous";let e=window.AudioContext||window.webkitAudioContext;if(!e){yn.volume=.2;return}try{hr=new e;let t=hr.createMediaElementSource(yn);Qi=hr.createBiquadFilter(),Qi.type="lowpass",Qi.frequency.value=1500,Qi.Q.value=.4,$l=hr.createGain(),$l.gain.value=0,ql=hr.createGain(),ql.gain.value=0;let o=hr.createConvolver();o.buffer=CE(hr),_i=hr.createGain(),_i.gain.value=Ur?1:0,t.connect(Qi),Qi.connect($l),$l.connect(_i),Qi.connect(o),o.connect(ql),ql.connect(_i),_i.connect(hr.destination)}catch(t){hr=null,yn.volume=.2}}function u3(){if(Us||!Ur)return;NE();let e=()=>yn.play().then(()=>{Us=!0}).catch(()=>{});hr&&hr.state==="suspended"?hr.resume().then(e,e):e()}typeof window!="undefined"&&(["pointerdown","pointerup","touchend","keydown","click"].forEach(e=>window.addEventListener(e,u3,{capture:!0,passive:!0})),document.addEventListener("visibilitychange",()=>{!yn||!Us||(document.hidden?yn.pause():Ur&&yn.play().catch(()=>{}))}),fetch(TE).then(e=>e.ok?e.json():null).then(e=>{if(!e)return;let t=o=>{let n=o.map(i=>i[2]).sort((i,s)=>i-s),r=n[Math.floor(n.length*.03)]||0,a=n[Math.floor(n.length*.97)]||1;return o.map(i=>({t:i[0],w:i[1],x:Math.max(0,Math.min(1,(i[2]-r)/Math.max(a-r,.001)))}))};qh={left:t(e.l),right:t(e.r),level:e.e,dur:e.d}}).catch(()=>{}));var Hh={AT:$h,listen(e){if(!hr||!Us)return;let t=e[0]-$h[0],o=e[2]-$h[2],n=Math.hypot(t,o,(e[1]-$h[1])*.5),r=Math.hypot(e[0]-pc.C.x,e[2]-pc.C.z)<LE+.4||e[0]<-.2&&Math.abs(e[2]-pc.C.z)<4,a,i,s;if(r){let l=Math.max(0,Math.min(1,(n-1.2)/5));a=1-.3*l,i=.22+.16*l,s=16e3}else{let l=5.5/Math.max(n,5.5),f=e[0]>14.2&&e[2]<12?.6:1;a=.5*Math.pow(l,1.5)*f,i=.34*Math.pow(l,.95)*f,s=(650+9e3*Math.pow(l,1.3))*(f<1?.7:1)}let c=hr.currentTime;$l.gain.setTargetAtTime(a,c,.35),ql.gain.setTargetAtTime(i,c,.35),Qi.frequency.setTargetAtTime(s,c,.35)},time(){let e=qh&&qh.dur||158;return yn&&Us&&!yn.paused||yn&&Us?yn.currentTime%e:((performance.now()/1e3-zE)%e+e)%e},get cues(){return qh},get on(){return Ur},set(e){Ur=!!e;try{localStorage.setItem(h3,Ur?"on":"off")}catch(t){}Ur?(u3(),yn&&Us&&yn.play().catch(()=>{}),_i&&_i.gain.setTargetAtTime(1,hr.currentTime,.2)):_i?_i.gain.setTargetAtTime(0,hr.currentTime,.15):yn&&yn.pause(),f3.forEach(t=>t(Ur))},toggle(){Hh.set(!Ur)},onChange(e){f3.push(e)},button(e){let t='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a7.8 7.8 0 0 1 0 11"/></svg>',o='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>',n=document.createElement("button");n.type="button",n.className=e+" sound-toggle";let r=()=>{n.innerHTML=Ur?t:o,n.setAttribute("aria-label",Ur?"Turn the music off":"Turn the music on"),n.title=Ur?"Music on":"Music off",n.setAttribute("aria-pressed",Ur?"true":"false")};return r(),Hh.onChange(r),["mousedown","pointerdown"].forEach(a=>n.addEventListener(a,i=>i.stopPropagation())),n.addEventListener("click",a=>{a.stopPropagation(),Hh.toggle()}),n}};d3.exports=Hh});var k3=me((tL,R1)=>{"use strict";var C1=nr().GLSL,{A:p3,BENCH:b3,oculusGLSL:w3}=Jr(),v3=vr(),_3=gi(),m3=Bh(),RE=1.74,OE=1.877,xr=RE/OE,Ws={x:p3.cx-1.22,z:p3.zc+.02,hipY:b3.seat+.115},qo=(e,t)=>[e[3]*t[0]+e[0]*t[3]+e[1]*t[2]-e[2]*t[1],e[3]*t[1]-e[0]*t[2]+e[1]*t[3]+e[2]*t[0],e[3]*t[2]+e[0]*t[1]-e[1]*t[0]+e[2]*t[3],e[3]*t[3]-e[0]*t[0]-e[1]*t[1]-e[2]*t[2]],Ra=e=>[-e[0],-e[1],-e[2],e[3]],Ji=(e,t)=>{let o=Math.hypot(e[0],e[1],e[2])||1,n=Math.sin(t/2);return[e[0]/o*n,e[1]/o*n,e[2]/o*n,Math.cos(t/2)]},Uh=(e,t,o)=>qo(Ji([0,0,1],o*Math.PI/180),qo(Ji([0,1,0],t*Math.PI/180),Ji([1,0,0],e*Math.PI/180))),N1=e=>{let t=Math.hypot(...e)||1;return e.map(o=>o/t)},Za=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],Bl=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],Zi=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],z1=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],Wh=e=>Math.hypot(e[0],e[1],e[2]),Hl=e=>{let t=Wh(e)||1;return[e[0]/t,e[1]/t,e[2]/t]},Xh=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],PE=(e,t)=>{let o=[e[0],e[1],e[2]],n=Zi(Xh(o,t),2);return Bl(Bl(t,Zi(n,e[3])),Xh(o,n))},IE=(e,t)=>{let o=Xh(e,t),n=1+z1(e,t);return n<1e-6?[0,0,1,0]:N1([o[0],o[1],o[2],n])};function ta(e,t,o){let[n,r,a,i]=t,s=n*n,c=r*r,l=a*a,f=n*r,u=n*a,h=r*a,p=i*n,v=i*r,d=i*a;return[(1-2*(c+l))*o[0],2*(f+d)*o[0],2*(u-v)*o[0],0,2*(f-d)*o[1],(1-2*(s+l))*o[1],2*(h+p)*o[1],0,2*(u+v)*o[2],2*(h-p)*o[2],(1-2*(s+c))*o[2],0,e[0],e[1],e[2],1]}function Fn(e,t){let o=new Array(16);for(let n=0;n<4;n++)for(let r=0;r<4;r++)o[n*4+r]=e[r]*t[n*4]+e[4+r]*t[n*4+1]+e[8+r]*t[n*4+2]+e[12+r]*t[n*4+3];return o}function L1(e){let t=Math.hypot(e[0],e[1],e[2]),o=Math.hypot(e[4],e[5],e[6]),n=Math.hypot(e[8],e[9],e[10]),r=e[0]/t,a=e[1]/t,i=e[2]/t,s=e[4]/o,c=e[5]/o,l=e[6]/o,f=e[8]/n,u=e[9]/n,h=e[10]/n,p=r+c+h,v;if(p>0){let d=Math.sqrt(p+1)*2;v=[(l-u)/d,(f-i)/d,(a-s)/d,d/4]}else if(r>c&&r>h){let d=Math.sqrt(1+r-c-h)*2;v=[d/4,(s+a)/d,(f+i)/d,(l-u)/d]}else if(c>h){let d=Math.sqrt(1+c-r-h)*2;v=[(s+a)/d,d/4,(u+l)/d,(f-i)/d]}else{let d=Math.sqrt(1+h-r-c)*2;v=[(f+i)/d,(u+l)/d,d/4,(a-s)/d]}return N1(v)}var Vh={LeftUpLeg:[-62,10,0],LeftLeg:[122,0,0],LeftFoot:[30,0,0],RightUpLeg:[0,-3,-2],RightLeg:[4,0,0],RightFoot:[35,-12,0],Neck:[10,0,0],Head:[6,0,0],LeftShoulder:[0,0,6],LeftArm:[-112.4,3.4,62.5],LeftForeArm:[0,-122.6,0],LeftHand:[0,0,-10],RightShoulder:[0,0,0],RightArm:[0,78,-8],RightForeArm:[0,14,0],RightHand:[0,0,0]};for(let e of["Left","Right"]){let t=e==="Left"?-1:1,o=e==="Left"?1:.35;["Index","Middle","Ring","Pinky"].forEach((n,r)=>{Vh[e+"Hand"+n+"1"]=[0,0,t*(18+r*6)*o],Vh[e+"Hand"+n+"2"]=[0,0,t*(26+r*6)*o],Vh[e+"Hand"+n+"3"]=[0,0,t*16*o]})}function js(e,t,o){let n=e-t;return n-=Math.round(n),Math.exp(-(n/o)*(n/o))}function g3(e){let t=9+20*Math.cos(2*Math.PI*e),o=4+13*js(e,.14,.07)+57*js(e,.72,.12),n=5*js(e,.06,.04)-9*js(e,.42,.12)+17*js(e,.62,.05)-3*js(e,.85,.1),r=-26*js(e,.58,.06);return{hip:t,knee:o,ankle:n,toe:r}}function FE(e){let t=(e%1+1)%1,o=g3(t),n=g3(t+.5),r=Math.cos(2*Math.PI*t),a=Math.sin(2*Math.PI*t);return{swing:{LeftArm:[16*r,0,0],RightArm:[-16*r,0,0],LeftForeArm:[0,-14-8*Math.max(0,-r),0],RightForeArm:[0,14+8*Math.max(0,r),0]},pose:{Hips:[0,5*a,1.5*Math.cos(4*Math.PI*t)],Spine1:[3,-4*a,0],LeftUpLeg:[-o.hip,0,0],LeftLeg:[o.knee,0,0],LeftFoot:[o.ankle,0,0],LeftToeBase:[o.toe,0,0],RightUpLeg:[-n.hip,0,0],RightLeg:[n.knee,0,0],RightFoot:[n.ankle,0,0],RightToeBase:[n.toe,0,0],LeftArm:[0,0,-78],RightArm:[0,0,78],LeftHand:[0,0,-8],RightHand:[0,0,8]},sway:.022*r}}var x3=`
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
}`,Yh=Gi(),y3=`#extension GL_OES_standard_derivatives : enable
precision highp float;
${C1}
uniform float time;
${_3.roomGLSL()}
${Yh.lanternGLSL(Yh.TREE_LANTERN)}
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
${w3()}
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
}`;function DE(e,t){let o=e.texture({data:[[[120,100,90,255]]],min:"linear",mag:"linear"});return fetch(t).then(n=>{if(!n.ok)throw new Error("Could not load "+t);return n.blob()}).then(n=>createImageBitmap(n,{premultiplyAlpha:"none"}).catch(()=>new Promise((r,a)=>{let i=new Image;i.onload=()=>r(i),i.onerror=a,i.src=URL.createObjectURL(n)}))).then(n=>o({data:n,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(n=>console.error(n)),o}var M3={w:.13,h:.2},jh=e=>.011*(1-Math.pow(1-e,3));function GE(){let e=[],t=[],o=[],n=[],r=[],a=(d,m,g,y,b,M,w)=>{let _=e.length/3;[d,m,g,y].forEach((S,G)=>{e.push(...S),t.push(...b),o.push(...w[G]),n.push(M)}),r.push(_,_+1,_+2,_,_+2,_+3)},{w:i,h:s}=M3,c=s/2,l=[[0,1],[1,1],[1,0],[0,0]],f=-.006,u=i+.001,h=c+.001;a([0,f,-h],[u,f,-h],[u,f,h],[0,f,h],[0,-1,0],1,[[0,1],[1,1],[1,0],[0,0]]),a([0,f+.001,-h],[0,f+.001,h],[u,f+.001,h],[u,f+.001,-h],[0,1,0],2,l),a([-u,f,-h],[0,f,-h],[0,f,h],[-u,f,h],[0,-1,0],2,l),a([-u,f+.001,-h],[-u,f+.001,h],[0,f+.001,h],[0,f+.001,-h],[0,1,0],2,l);let p=8;for(let d of[1,-1]){for(let g=0;g<p;g++){let y=g/p,b=(g+1)/p,M=(.002+y*(i-.002))*d,w=(.002+b*(i-.002))*d,_=jh(y),S=jh(b),G=d>0?y:1-y,R=d>0?b:1-b,q=1,T=-(S-_)/(w-M);a([M,_,-c],[w,S,-c],[w,S,c],[M,_,c],[T,q,0],3,[[G,1],[R,1],[R,0],[G,0]]),a([M,f+.001,c],[w,f+.001,c],[w,S,c],[M,_,c],[0,0,1],4,l),a([M,_,-c],[w,S,-c],[w,f+.001,-c],[M,f+.001,-c],[0,0,-1],4,l)}let m=i*d;a([m,f+.001,-c],[m,jh(1),-c],[m,jh(1),c],[m,f+.001,c],[d,0,0],4,l)}let v=10;for(let d=0;d<v;d++){let m=d/v,g=(d+1)/v,y=e.length/3;for(let[b,M]of[[m,-c],[g,-c],[g,c],[m,c]])e.push(b,0,M),t.push(0,1,0),o.push(b,(M+c)/s),n.push(5);r.push(y,y+1,y+2,y,y+2,y+3)}return{pos:e,nrm:t,uv:o,kind:n,idx:r}}function $E(){if(typeof document=="undefined")return null;let e=document.createElement("canvas");e.width=512,e.height=768;let t=e.getContext("2d");t.fillStyle="#ebe5d8",t.fillRect(0,0,512,768);let o=7,n=()=>(o=o*16807%2147483647,o/2147483647),r=(i,s,c,l,f,u,h)=>{for(let p=0;p<u;p++){let v=i+(n()-.5)*c*2,d=s+(n()-.5)*l*2,m=20+n()*60,g=t.createRadialGradient(v,d,0,v,d,m);g.addColorStop(0,`rgba(${f},${h})`),g.addColorStop(1,`rgba(${f},0)`),t.fillStyle=g,t.fillRect(v-m,d-m,m*2,m*2)}},a=t.createRadialGradient(236,280,10,256,300,125);a.addColorStop(0,"#3d4866"),a.addColorStop(1,"#232a3d"),t.fillStyle=a,t.beginPath(),t.arc(256,300,122,0,Math.PI*2),t.fill(),t.fillStyle="#b8873f",t.beginPath(),t.moveTo(64,452);for(let i=64;i<=448;i+=16)t.lineTo(i,446+n()*4);for(let i=448;i>=64;i-=16)t.lineTo(i,466+n()*4);t.fill(),t.strokeStyle="#2b2f3a",t.lineCap="round",[[120,392,500,5],[160,352,530,4],[205,307,558,3]].forEach(([i,s,c,l])=>{t.lineWidth=l,t.beginPath(),t.moveTo(i,c),t.lineTo(s,c),t.stroke()});for(let i=0;i<9e3;i++)t.fillStyle=`rgba(90,80,60,${n()*.05})`,t.fillRect(n()*512,n()*768,1,1);return e}var qE=`
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
		float r = u * ${M3.w.toFixed(3)};
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
}`,HE=`
precision highp float;
${C1}
uniform float time;
${Yh.lanternGLSL(Yh.TREE_LANTERN)}
uniform sampler2D cover;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_kind;
${w3()}
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
}`;function BE(){let e=[],t=[],o=[],n=[],r=[],a=[.36,.11,.07],i=[.1,.07,.05],s=[.78,.76,.72],c=[.55,.41,.26],l=[.8,.55,.22],f=[[0,-.15,l,2],[.0012,-.147,l,2],[.004,-.138,l,2],[.0058,-.125,c,2],[.0064,-.112,c,2],[.006,-.104,c,2],[.0066,-.102,s,1],[.0066,-.08,s,1],[.0062,-.074,s,1],[.0068,-.072,s,1],[.007,-.066,s,1],[.0058,-.064,a,0],[.0062,-.04,a,0],[.0058,0,a,0],[.0046,.06,a,0],[.0036,.11,a,0],[.003,.13,i,0],[.0026,.136,i,0],[0,.139,i,0]],u=16;for(let h=0;h<f.length;h++){let[p,v,d,m]=f[h],g=m===2?.45:1;for(let y=0;y<=u;y++){let b=y/u*Math.PI*2;e.push(Math.cos(b)*p,v,Math.sin(b)*p*g);let M=Math.max(h-1,0),w=Math.min(h+1,f.length-1),_=f[w][0]-f[M][0],S=f[w][1]-f[M][1],G=Math.hypot(_,S)||1;t.push(Math.cos(b)*S/G,-_/G,Math.sin(b)*S/G/g),o.push(...d),n.push(m)}}for(let h=0;h<f.length-1;h++)for(let p=0;p<u;p++){let v=h*(u+1)+p,d=v+u+1;r.push(v,d,v+1,v+1,d,d+1)}return{pos:e,nrm:t,col:o,mat:n,idx:r}}var UE=`
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
}`,jE=`
precision highp float;
${C1}
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
}`,WE=`
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
}`,VE=`
precision highp float;
uniform float pulse;
varying vec2 v_c;
void main() {
	float d = length(v_c);
	float g = exp(-d * d * 6.0) * 0.10 + exp(-d * d * 30.0) * 0.08;
	gl_FragColor = vec4(vec3(1.0, 0.80, 0.45) * g * (0.75 + 0.25 * pulse), 1.0);
}`;R1.exports=e=>{let t="res/avatar/",o=null,n=Date.now(),r=()=>typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-n)/1e3,a={glowPos:[Ws.x,1.9,Ws.z],glow:0};Promise.all([fetch(t+"avatar.json").then(R=>R.json()),fetch(t+"avatar.bin").then(R=>R.arrayBuffer())]).then(([R,q])=>{o=l(R,q)}).catch(R=>console.error(R));let i=null;Promise.all([fetch(t+"motion.json").then(R=>R.ok?R.json():null),fetch(t+"motion.bin").then(R=>R.ok?R.arrayBuffer():null)]).then(([R,q])=>{if(!R||!q)return;let T={};for(let B in R.clips){let P=R.clips[B],H=P.bones.length,se=new Float32Array(q,P.mean,H*4),Z={};P.bones.forEach((le,ie)=>{Z[le]=[se[ie*4],se[ie*4+1],se[ie*4+2],se[ie*4+3]]}),T[B]=Object.assign({},P,{Q:new Int16Array(q,P.q,P.frames*H*4),H:new Float32Array(q,P.hips,P.frames*3),meanQ:Z})}i=T}).catch(()=>{});function s(R,q){let T=R.frames,B=R.bones.length,P=(q%T+T)%T,H=Math.floor(P)%T,se=(H+1)%T,Z=P-Math.floor(P),le={};for(let Qe=0;Qe<B;Qe++){let wt=(H*B+Qe)*4,Fe=(se*B+Qe)*4,st=R.Q[wt],yt=R.Q[wt+1],Bt=R.Q[wt+2],Zt=R.Q[wt+3],Oo=R.Q[Fe],Be=R.Q[Fe+1],ct=R.Q[Fe+2],dt=R.Q[Fe+3];st*Oo+yt*Be+Bt*ct+Zt*dt<0&&(Oo=-Oo,Be=-Be,ct=-ct,dt=-dt),le[R.bones[Qe]]=N1([st+(Oo-st)*Z,yt+(Be-yt)*Z,Bt+(ct-Bt)*Z,Zt+(dt-Zt)*Z])}let ie=H*3,pe=se*3;return{q:le,hips:[R.H[ie]+(R.H[pe]-R.H[ie])*Z,R.H[ie+1]+(R.H[pe+1]-R.H[ie+1])*Z,R.H[ie+2]+(R.H[pe+2]-R.H[ie+2])*Z]}}let c=e.texture({data:[[[255,255,255,255]]]});function l(R,q){let T=(J,Re)=>new Float32Array(q,J,Re),B=R.bones,P=B.length,H={};B.forEach((J,Re)=>{H[J.name]=Re});let se=[];for(let J=0;J<P;J++)se.push(Array.from(T(R.ibm+J*64,16)));let Z=B.map(J=>ta(J.t,J.r,J.s)),le=[];for(let J=0;J<P;J++){let Re=B[J].parent;le[J]=Re<0?Z[J]:Fn(le[Re],Z[J])}let ie=le.map(L1),pe=R.meshes.map(J=>{let Re=T(J.pos,J.n*3),De=T(J.nrm,J.n*3),Ce=T(J.uv,J.n*2),it=new Uint8Array(q,J.jnt,J.n*4),Et=T(J.wgt,J.n*4),_t=new Uint16Array(q,J.idx,J.ni),ut={};for(let xt in J.morphs){let Po=J.morphs[xt];ut[xt]={idx:new Uint16Array(q,Po.idx,Po.n),d:T(Po.d,Po.n*3)}}let Ot=new Float32Array(J.n*3),gt=new Float32Array(J.n*3),Ut=new Float32Array(J.n*3),kt=e.buffer({data:Ot,usage:"dynamic"}),St=e.buffer({data:gt,usage:"dynamic"}),Wt=/avaturn_hair/.test(J.name),pt=/EyeAO|Eyelash/.test(J.name),ro=/Body|Head/.test(J.name),_o=J.kind||0;return{m:J,pos:Re,nrm:De,uv:Ce,jnt:it,wgt:Et,idx:_t,morphs:ut,outP:Ot,outN:gt,work:Ut,pb:kt,nbuf:St,tex:J.tex?DE(e,t+J.tex):c,kind:_o,alphaScale:/EyeAO/.test(J.name)?.25:1,blend:J.blend||Wt,alphaCut:Wt?.35:pt?.02:0,skin:ro?1:0}}),Qe=e({vert:x3,frag:y3,attributes:{position:e.prop("pb"),normal:e.prop("nb"),uv:e.prop("uv")},elements:e.prop("el"),uniforms:{tex:e.prop("tex"),alphaCut:e.prop("alphaCut"),skin:e.prop("skin"),kind:e.prop("kind"),alphaScale:e.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>_&&!S?_.lamp:[0,0,0,0],court:()=>_||S?0:1,candle:()=>S?1:0},cull:{enable:!1}}),wt=e({vert:x3,frag:y3,attributes:{position:e.prop("pb"),normal:e.prop("nb"),uv:e.prop("uv")},elements:e.prop("el"),uniforms:{tex:e.prop("tex"),alphaCut:e.prop("alphaCut"),skin:e.prop("skin"),kind:e.prop("kind"),alphaScale:e.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>_&&!S?_.lamp:[0,0,0,0],court:()=>_||S?0:1,candle:()=>S?1:0},cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"one minus src alpha"}}}),Fe=.3;for(let J of pe)if(J.uvBuf=e.buffer(J.uv),/Body/.test(J.m.name)){let Re=[],De=[];for(let Ce=0;Ce<J.idx.length;Ce+=3){let it=J.idx[Ce],Et=J.idx[Ce+1],_t=J.idx[Ce+2];(J.pos[it*3+1]<Fe&&J.pos[Et*3+1]<Fe&&J.pos[_t*3+1]<Fe?De:Re).push(it,Et,_t)}J.el=e.elements({data:new Uint16Array(Re),type:"uint16"}),De.length&&(J.sockEl=e.elements({data:new Uint16Array(De),type:"uint16"}))}else J.el=e.elements({data:J.idx,type:"uint16"});let st=le[H.Hips],yt=Ji([1,0,0],-Math.PI/2),Bt=Fn(ta([Ws.x-st[12]*xr,Ws.hipY-st[14]*xr,Ws.z+st[13]*xr],yt,[1,1,1]),ta([0,0,0],[0,0,0,1],[xr,xr,xr])),Zt=new Array(P),Oo=-1,Be=(J,Re,De)=>Fn(ta([J,0,Re],Ji([0,1,0],De),[1,1,1]),ta([0,0,0],[0,0,0,1],[xr,xr,xr])),ct=["LeftFoot","RightFoot","LeftToeBase","RightToeBase"].map(J=>H[J]),dt=ct.map(J=>le[J][13]*xr);function Rt(J){if(i&&i.walk)return so(J);let Re=FE(J.phase),De={},Ce=gt=>{for(let Ut in gt){let kt=gt[Ut],St=Uh(kt[0],kt[1],kt[2]);De[Ut]=De[Ut]?qo(De[Ut],St):St}};Ce(Re.swing),Ce(Re.pose);let it=Math.cos(J.heading),Et=-Math.sin(J.heading),_t=Be(J.x+it*Re.sway,J.z+Et*Re.sway,J.heading),ut=new Array(P);for(let gt=0;gt<P;gt++){let Ut=B[gt],kt=Z[gt],St=De[Ut.name];if(St){let Wt=ie[gt],pt=qo(Ra(Wt),qo(St,Wt));kt=ta(Ut.t,qo(Ut.r,pt),Ut.s)}ut[gt]=Ut.parent<0?Fn(_t,kt):Fn(ut[Ut.parent],kt)}let Ot=1/0;ct.forEach((gt,Ut)=>{Ot=Math.min(Ot,ut[gt][13]-dt[Ut])});for(let gt=0;gt<P;gt++)ut[gt]=ut[gt].slice(),ut[gt][13]-=Ot,Zt[gt]=Fn(ut[gt],se[gt]);return{blink:0}}function so(J){let Re=i.walk,De=s(Re,(J.phase+Re.phase0)*Re.frames),Ce=Be(J.x,J.z,J.heading),it=new Array(P),Et=H.Hips;for(let ut=0;ut<P;ut++){let Ot=B[ut],gt=Z[ut],Ut=De.q[Ot.name];if(Ut){let kt=ie[ut],St=qo(Ra(kt),qo(Ut,kt)),Wt=ut===Et?[Ot.t[0]+De.hips[0],Ot.t[1]+De.hips[1],Ot.t[2]+De.hips[2]]:Ot.t;gt=ta(Wt,qo(Ot.r,St),Ot.s)}it[ut]=Ot.parent<0?Fn(Ce,gt):Fn(it[Ot.parent],gt)}let _t=1/0;ct.forEach((ut,Ot)=>{_t=Math.min(_t,it[ut][13]-dt[Ot])});for(let ut=0;ut<P;ut++)it[ut]=it[ut].slice(),it[ut][13]-=_t,Zt[ut]=Fn(it[ut],se[ut]);return{blink:0}}function zt(J,Re){let De=Math.sin(J*2*Math.PI/4.6),Ce=Math.sin(J*.37)*.6+Math.sin(J*.83+1)*.4,it={LeftUpLeg:[-86,-6,0],RightUpLeg:[-84,7,0],LeftLeg:[88,0,0],RightLeg:[82,0,0],LeftFoot:[-4,0,0],RightFoot:[-2,0,0],Spine:[6,0,0],Spine1:[5+De*.8,0,0],Spine2:[4+De*.6,0,0],Neck:[10,0,0],Head:[12+Ce*2,Ce*2.5,0],LeftArm:[0,0,-72],RightArm:[0,0,72],LeftForeArm:[0,-62,0],RightForeArm:[0,62,0],LeftHand:[0,0,-10],RightHand:[0,0,10]},Et={};for(let kt in it){let St=it[kt];Et[kt]=Uh(St[0],St[1],St[2])}let _t=Be(Re.x,Re.z,Re.heading),ut=new Array(P);for(let kt=0;kt<P;kt++){let St=B[kt],Wt=Z[kt],pt=Et[St.name];if(pt){let ro=ie[kt],_o=qo(Ra(ro),qo(pt,ro));Wt=ta(St.t,qo(St.r,_o),St.s)}ut[kt]=St.parent<0?Fn(_t,Wt):Fn(ut[St.parent],Wt)}let gt=ut[H.Hips][13]-(Re.y+.1);for(let kt=0;kt<P;kt++)ut[kt]=ut[kt].slice(),ut[kt][13]-=gt,Zt[kt]=Fn(ut[kt],se[kt]);let Ut=J%4.1;return{blink:Ut<.16?Math.sin(Ut/.16*Math.PI):0}}let mt=J=>[le[J][12],le[J][13],le[J][14]],be=(J,Re)=>{let De=Hl(J),Ce=Hl(Za(Re,Zi(De,z1(Re,De)))),it=Xh(De,Ce);return L1([De[0],De[1],De[2],0,Ce[0],Ce[1],Ce[2],0,it[0],it[1],it[2],0,0,0,0,1])},ot={};for(let J of["Left","Right"]){let Re=H[J+"Arm"],De=H[J+"ForeArm"],Ce=H[J+"Hand"],it=H[J+"HandMiddle1"];ot[J]={a:Re,f:De,h:Ce,upper:Wh(Za(mt(De),mt(Re)))*xr,fore:Wh(Za(mt(Ce),mt(De)))*xr,dir0:Hl(Za(mt(De),mt(Re))),qf0:be(Za(mt(Ce),mt(De)),[0,1,0]),qh0:be(Za(mt(it),mt(Ce)),[0,1,0])}}let Ct={};for(let J of["Left","Right"])Ct[ot[J].a]={side:J,part:0},Ct[ot[J].f]={side:J,part:1},Ct[ot[J].h]={side:J,part:2};function ht(J,Re,De){if(!J||!J.length)return{x:.5,lift:0,press:0,finger:1,busy:0};let Ce=0,it=J.length-1,Et=-1;for(;Ce<=it;){let Po=Ce+it>>1;J[Po].t<=Re?(Et=Po,Ce=Po+1):it=Po-1}let _t=J[J.length-1],ut=J[0],Ot=Et>=0?J[Et]:{t:_t.t-De,x:_t.x,w:_t.w},gt=Et+1<J.length?J[Et+1]:{t:ut.t+De,x:ut.x,w:ut.w},Ut=Math.max(.05,gt.t-Ot.t),kt=Math.min(.14,Ut*.45),St=Math.max(0,Math.min(1,(Re-Ot.t-kt)/Math.max(Ut-kt-.03,.02))),Wt=St*St*(3-2*St),pt=Re-Ot.t,ro=(.55+.45*Ot.w)*Math.exp(-pt/.11),_o=gt.t-Re,xt=_o<.05?(.55+.45*gt.w)*(1-_o/.05):0;return{x:Ot.x+(gt.x-Ot.x)*Wt,lift:Math.sin(Math.PI*St)*Math.min(.05,.012+Ut*.03)*(Ut>2.5?.4:1),press:Math.max(ro,xt),finger:xt>ro?((Et+1)*7+3)%4:(Math.max(Et,0)*7+3)%4,busy:Math.exp(-pt/.9)}}let Xe={lean:0,turn:0,nod:0,pedal:0,last:-1},go=["Index","Middle","Ring","Pinky"];function E(J){let Re=_3.PLAY,De=m3.cues,Ce=m3.time(),it=De&&De.dur||158,Et={Left:ht(De&&De.left,Ce,it),Right:ht(De&&De.right,Ce,it)},_t=.35;if(De&&De.level&&De.level.length){let Jt=Ce*8,co=Math.floor(Jt)%De.level.length,zn=(co+1)%De.level.length;_t=De.level[co]+(De.level[zn]-De.level[co])*(Jt-Math.floor(Jt))}let ut=Xe.last<0?0:Math.min(.1,Math.max(0,J-Xe.last));Xe.last=J;let Ot=Jt=>Math.min(1,ut*Jt);Xe.lean+=(_t-Xe.lean)*Ot(1.2),Xe.turn+=(Et.Right.busy-Et.Left.busy-Xe.turn)*Ot(1.5),Xe.nod+=(Math.max(Et.Right.press,Et.Left.press*.7)-Xe.nod)*Ot(6),Xe.pedal+=((Et.Left.busy>.35?1:.15)-Xe.pedal)*Ot(5);let gt=Math.sin(J*2*Math.PI/4.6),Ut=Math.sin(Ce*.41)*.6+Math.sin(Ce*.17+1)*.4,kt={LeftUpLeg:[-80,-9,0],RightUpLeg:[-77,9,0],LeftLeg:[86,0,0],RightLeg:[64,0,0],LeftFoot:[-2,0,0],RightFoot:[12-10*Xe.pedal,0,0],Spine:[9+3.5*Xe.lean+Ut*1.6,Xe.turn*2.5,-Xe.turn*1.6],Spine1:[7+gt*.8+2.5*Xe.lean,Xe.turn*2.5,-Xe.turn*1.2],Spine2:[6+gt*.6+Ut*.8,Xe.turn*1.5,0],Neck:[13+3*Xe.lean,Xe.turn*3,0],Head:[15+Xe.nod*3.5+Ut*1.5,Xe.turn*5,Ut*1.5]};for(let Jt of["Left","Right"]){let co=Jt==="Left"?-1:1,zn=Et[Jt];go.forEach((V,de)=>{let je=de===zn.finger?zn.press:zn.press*.2;kt[Jt+"Hand"+V+"1"]=[0,0,co*(20+3*de+20*je)],kt[Jt+"Hand"+V+"2"]=[0,0,co*(26+4*de-6*je)],kt[Jt+"Hand"+V+"3"]=[0,0,co*14]}),kt[Jt+"HandThumb1"]=[0,co*-18,co*10]}let St={};for(let Jt in kt){let co=kt[Jt];St[Jt]=Uh(co[0],co[1],co[2])}let Wt=le[H.Hips][13]*xr,pt=Fn(ta([Re.stoolX,Re.stoolTop+.1-Wt,Re.stoolFront+.15],Ji([0,1,0],Re.heading),[1,1,1]),ta([0,0,0],[0,0,0,1],[xr,xr,xr])),ro=(Re.keyX0+Re.keyX1)/2,_o={};for(let Jt of["Left","Right"]){let co=Et[Jt],zn=Jt==="Left"?ro-.4+.33*co.x:ro+.07+.33*co.x;_o[Jt]=[zn,Re.keyTop+.062+co.lift-co.press*.012,Re.keyFront+.075]}let xt=new Array(P),Po={},la=[0,1,0];for(let Jt=0;Jt<P;Jt++){let co=B[Jt],zn=Z[Jt],V=St[co.name],de=Ct[Jt];if(de){let je=ot[de.side];if(de.part===0){let nt=xt[co.parent],rt=Fn(nt,Z[Jt]),Xo=[rt[12],rt[13],rt[14]],Cn=qo(L1(nt),Ra(ie[co.parent])),_r=Za(_o[de.side],Xo),Bo=Wh(_r),Gr=(je.upper+je.fore)*.995;Bo>Gr&&(_r=Zi(_r,Gr/Bo),Bo=Gr);let Jo=Zi(_r,1/Bo),So=(je.upper*je.upper-je.fore*je.fore+Bo*Bo)/(2*Bo),rn=Math.sqrt(Math.max(0,je.upper*je.upper-So*So)),Co=[de.side==="Left"?-.6:.6,-.8,.3];Co=Hl(Za(Co,Zi(Jo,z1(Co,Jo))));let Hn=Bl(Xo,Bl(Zi(Jo,So),Zi(Co,rn)));je.T=Bl(Xo,_r),je.elbow=Hn;let Mr=Hl(Za(Hn,Xo)),cr=qo(IE(PE(Cn,je.dir0),Mr),Cn);Po[Jt]=cr,V=qo(Ra(Cn),cr)}else if(de.part===1){let nt=qo(be(Za(je.T,je.elbow),la),Ra(je.qf0));Po[Jt]=nt,V=qo(Ra(Po[co.parent]),nt)}else{let nt=Et[de.side],rt=qo(be([de.side==="Left"?.12:-.12,-.2-.1*nt.press,-1],la),Ra(je.qh0));Po[Jt]=rt,V=qo(Ra(Po[co.parent]),rt)}}if(V){let je=ie[Jt],nt=qo(Ra(je),qo(V,je));zn=ta(co.t,qo(co.r,nt),co.s)}xt[Jt]=co.parent<0?Fn(pt,zn):Fn(xt[co.parent],zn)}for(let Jt=0;Jt<P;Jt++)Zt[Jt]=Fn(xt[Jt],se[Jt]);a.pianist={head:[xt[H.Head][12],xt[H.Head][13],xt[H.Head][14]]};let ri=J%4.3;return{blink:ri<.16?Math.sin(ri/.16*Math.PI):0}}function no(J,Re){if(S)return E(J);if(_)return zt(J,_);if(Re)return Rt(Re);let De=Math.sin(J*2*Math.PI/4.2),Ce=J%3.7,it=Ce<.16?Math.sin(Ce/.16*Math.PI):0,Et=Math.sin(J*.45),_t=Math.sin(J*.31+.8),ut=Math.max(0,Math.sin(J*.085)-.75)*4,Ot={RightArm:[0,-22*ut,11*Et],RightForeArm:[0,8+26*ut,0],RightHand:[38*_t,0,6*Math.sin(J*.7)],LeftUpLeg:[0,0,3.2*Math.sin(J*.36)],RightFoot:[5*Math.sin(J*.52+.4),0,0],Head:[0,1.6*Math.sin(J*.21),0]};["Index","Middle","Ring","Pinky"].forEach((pt,ro)=>{let _o=Math.sin(J*1.1-ro*.5);Ot["RightHand"+pt+"1"]=[0,0,8+12*_o],Ot["RightHand"+pt+"2"]=[0,0,6+10*_o]});let gt={},Ut=(pt,ro)=>{for(let _o in pt){let xt=pt[_o],Po=Uh(xt[0]*ro,xt[1]*ro,xt[2]*ro);gt[_o]=gt[_o]?qo(gt[_o],Po):Po}};Ut(Vh,1),Ut({Spine1:[De*.8,0,0],Spine2:[De*.6,0,0]},1),Ut(Ot,1);let kt=new Array(P),St=new Array(P);for(let pt=0;pt<P;pt++){let ro=B[pt],_o=Z[pt],xt=gt[ro.name];if(xt){let Po=ie[pt],la=qo(Ra(Po),qo(xt,Po));_o=ta(ro.t,qo(ro.r,la),ro.s)}kt[pt]=ro.parent<0?Fn(Bt,_o):Fn(kt[ro.parent],_o),St[pt]=null}for(let pt=0;pt<P;pt++)Zt[pt]=Fn(kt[pt],se[pt]);let Wt=pt=>[pt[12],pt[13],pt[14]];return a.headPos=Wt(kt[H.Head]),a.hipsPos=Wt(kt[H.Hips]),a.headM=kt[H.Head],{blink:it}}function Xt(J,Re){let{pos:De,nrm:Ce,jnt:it,wgt:Et,outP:_t,outN:ut,work:Ot,m:gt}=J,Ut=gt.n,kt=De;if(Re){Ot.set(De);for(let St in J.morphs){let Wt=Re[St]||0;if(Wt<=0)continue;let pt=J.morphs[St];for(let ro=0;ro<pt.idx.length;ro++){let _o=pt.idx[ro]*3;Ot[_o]+=pt.d[ro*3]*Wt,Ot[_o+1]+=pt.d[ro*3+1]*Wt,Ot[_o+2]+=pt.d[ro*3+2]*Wt}}kt=Ot}for(let St=0;St<Ut;St++){let Wt=kt[St*3],pt=kt[St*3+1],ro=kt[St*3+2],_o=Ce[St*3],xt=Ce[St*3+1],Po=Ce[St*3+2],la=0,ri=0,Jt=0,co=0,zn=0,V=0;for(let je=0;je<4;je++){let nt=Et[St*4+je];if(nt===0)continue;let rt=Zt[it[St*4+je]];la+=nt*(rt[0]*Wt+rt[4]*pt+rt[8]*ro+rt[12]),ri+=nt*(rt[1]*Wt+rt[5]*pt+rt[9]*ro+rt[13]),Jt+=nt*(rt[2]*Wt+rt[6]*pt+rt[10]*ro+rt[14]),co+=nt*(rt[0]*_o+rt[4]*xt+rt[8]*Po),zn+=nt*(rt[1]*_o+rt[5]*xt+rt[9]*Po),V+=nt*(rt[2]*_o+rt[6]*xt+rt[10]*Po)}_t[St*3]=la,_t[St*3+1]=ri,_t[St*3+2]=Jt;let de=Math.hypot(co,zn,V)||1;ut[St*3]=co/de,ut[St*3+1]=zn/de,ut[St*3+2]=V/de}gt.grid&&!Eo&&!_&&!S&&xo(J),J.sway&&Ai(J),J.pb.subdata(_t),J.nbuf.subdata(ut)}function xo(J){let[Re,De]=J.m.grid,Ce=J.outP,it=J.outN,Et=b3.seat+.012;for(let _t=1;_t<Re;_t++){let ut=Math.pow(1-_t/(Re-1),1.5);for(let Ot=0;Ot<De;Ot++){let gt=(_t*De+Ot)*3;Ce[gt+1]>Et?Ce[gt+1]=Et+(Ce[gt+1]-Et)*Math.max(ut,.15):Ce[gt+1]=Et}}for(let _t=0;_t<it.length;_t+=3)it[_t]=0,it[_t+1]=1,it[_t+2]=0}let Eo=!1,un=(J,Re,De,Ce,it)=>({bone:H[J],rate:Re,damp:De,drag:Ce,most:it,x:[0,0,0],v:[0,0,0],p:null,vel:[0,0,0]}),wr={head:un("Head",15,.32,.012,.035),chest:un("Spine2",9,.38,.03,.1),hips:un("Hips",7,.42,.045,.16)},qn=-1;function Ha(J){let Re=qn<0?0:J-qn;qn=J;for(let De in wr){let Ce=wr[De],it=Zt[Ce.bone],Et=le[Ce.bone],_t=Et[12],ut=Et[13],Ot=Et[14],gt=[it[0]*_t+it[4]*ut+it[8]*Ot+it[12],it[1]*_t+it[5]*ut+it[9]*Ot+it[13],it[2]*_t+it[6]*ut+it[10]*Ot+it[14]];if(!Ce.p||!(Re>0)||Re>.25||Math.hypot(gt[0]-Ce.p[0],gt[1]-Ce.p[1],gt[2]-Ce.p[2])>.5){Ce.p=gt,Ce.x=[0,0,0],Ce.v=[0,0,0],Ce.vel=[0,0,0];continue}let Ut=[(gt[0]-Ce.p[0])/Re,(gt[1]-Ce.p[1])/Re,(gt[2]-Ce.p[2])/Re],kt=Math.max(1,Math.ceil(Re/.016)),St=Re/kt;for(let pt=0;pt<3;pt++){let ro=Math.max(-30,Math.min(30,(Ut[pt]-Ce.vel[pt])/Re)),_o=-Ut[pt]*Ce.drag;for(let xt=0;xt<kt;xt++)Ce.v[pt]+=((_o-Ce.x[pt])*Ce.rate*Ce.rate-2*Ce.damp*Ce.rate*Ce.v[pt]-ro)*St,Ce.x[pt]+=Ce.v[pt]*St}let Wt=Math.hypot(Ce.x[0],Ce.x[1],Ce.x[2]);if(Wt>Ce.most){let pt=Ce.most/Wt;Ce.x=[Ce.x[0]*pt,Ce.x[1]*pt,Ce.x[2]*pt]}Ce.p=gt,Ce.vel=Ut}}for(let J of pe){let Re=J.m,De=Re.n,Ce=null,it=null;if(Re.kind===9){it="head",Ce=new Float32Array(De);for(let Et=0;Et<De;Et++){let _t=J.uv[Et*2]<-.5?0:J.uv[Et*2+1];Ce[Et]=_t*_t}}else if(Re.name==="scarf"){it="chest",Ce=new Float32Array(De);for(let Et=0;Et<De;Et++)Ce[Et]=f(1.52,1.12,J.pos[Et*3+1])}else if(Re.grid){it="hips",Ce=new Float32Array(De);let Et=Re.grid[0],_t=Re.grid[1];for(let ut=0;ut<De;ut++)Ce[ut]=Math.pow(Math.floor(ut/_t)/(Et-1),1.6)}Ce&&(J.sway=Ce,J.spring=wr[it],J.loose=it)}function Ai(J){if(!Eo&&!S&&!_)return;let Re=J.spring.x,De=J.sway,Ce=J.outP;if(!(Math.abs(Re[0])+Math.abs(Re[1])+Math.abs(Re[2])<1e-5))for(let it=0,Et=De.length;it<Et;it++){let _t=De[it];_t>0&&(Ce[it*3]+=Re[0]*_t,Ce[it*3+1]+=Re[1]*_t,Ce[it*3+2]+=Re[2]*_t)}}function m0(J,Re){Eo=!!Re;let De=no(J,Re);Ha(J);let Ce={eyeBlinkLeft:De.blink,eyeBlinkRight:De.blink};for(let it of pe)Xt(it,Object.keys(it.morphs).length?Ce:null);a.pose=De}return{parts:pe,update:m0,drawOpaque:Qe,drawBlend:wt,state:a}}function f(R,q,T){let B=Math.min(1,Math.max(0,(T-R)/(q-R)));return B*B*(3-2*B)}let u=GE(),h=$E(),p=h?e.texture({data:h,flipY:!1,min:"linear",mag:"linear"}):c,v=e({vert:qE,frag:HE,attributes:{position:u.pos,normal:u.nrm,uv:u.uv,kind:u.kind},elements:new Uint16Array(u.idx),uniforms:{model:e.prop("model"),turn:0,fold:1.12,cover:p},cull:{enable:!1}}),d=BE(),m=e({vert:UE,frag:jE,attributes:{position:d.pos,normal:d.nrm,color:d.col,mat:d.mat},elements:new Uint16Array(d.idx),uniforms:{model:e.prop("model"),pulse:e.prop("pulse")},cull:{enable:!1}}),g=e({vert:WE,frag:VE,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{center:e.prop("center"),size:e.prop("size"),pulse:e.prop("pulse")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});function y(R){let q=R.headM,T=pe=>{let Qe=Math.hypot(...pe)||1;return pe.map(wt=>wt/Qe)},B=T([q[4],q[5],q[6]]),P=T([q[8],q[9],q[10]]),H=B,se=P.map(pe=>-pe),Z=[se[1]*H[2]-se[2]*H[1],se[2]*H[0]-se[0]*H[2],se[0]*H[1]-se[1]*H[0]],le=R.headPos,ie=[0,1,2].map(pe=>le[pe]+B[pe]*.06+P[pe]*.185);return[Z[0],Z[1],Z[2],0,se[0],se[1],se[2],0,H[0],H[1],H[2],0,ie[0],ie[1],ie[2],1]}let b=-1,M="",w=null,_=null,S=!1;function G(R){if(!o)return;let q=(v3.motion,r()),T=w?[w.x,w.z,w.heading,w.phase].map(P=>P.toFixed(4)).join():"";(_||S||T!==M||!w&&Math.abs(q-b)>(v3.isPhone?1/30:0))&&(o.update(q,w),b=q,M=T);for(let P of o.parts)P.blend||(o.drawOpaque({pb:P.pb,nb:P.nbuf,uv:P.uvBuf,el:P.el,tex:P.tex,alphaCut:P.alphaCut,skin:P.skin,kind:P.kind,alphaScale:P.alphaScale}),P.sockEl&&o.drawOpaque({pb:P.pb,nb:P.nbuf,uv:P.uvBuf,el:P.sockEl,tex:c,alphaCut:0,skin:0,kind:8,alphaScale:1}));let B=o.state;if(B.headM&&!w&&!_&&!S){v({model:y(B)});let P=B.headPos,H=Math.sin(q*1.3)*.02,se=[P[0],P[1]+.62+H,P[2]+.05],Z=q*.6,le=ta(se,qo(Ji([0,1,0],Z),Ji([0,0,1],.18)),[1.2,1.2,1.2]),ie=.5+.5*Math.sin(q*2);m({model:le,pulse:ie}),a.glowPos=se,a.glow=.06+.03*ie,g({center:[se[0],se[1]-.12,se[2]],size:.1,pulse:ie})}for(let P of o.parts)P.blend&&o.drawBlend({pb:P.pb,nb:P.nbuf,uv:P.uvBuf,el:P.el,tex:P.tex,alphaCut:P.alphaCut,skin:P.skin,kind:P.kind,alphaScale:P.alphaScale})}return G.state=a,G.place=Ws,G.setWalk=R=>{w=R||null,w&&(a.glow=0)},G.setSeat=R=>{_=R||null,a.glow=_?0:a.glow,b=-1},G.setPiano=R=>{R=!!R,R!==S&&(S=R,S&&(a.glow=0),b=-1)},G};R1.exports.PLACE=Ws});var O1=me((oL,E3)=>{"use strict";E3.exports={name:"Muzammil",title:"Hi, I\u2019m Muzammil.",text:`I\u2019m a self-taught artist. I paint emotions. Grief, longing, love, and the quiet ways we keep holding on. I borrow the light and stillness of the Renaissance to talk about very modern feelings.

This gallery is my portfolio, built brick by pixel, so my work has a home that never closes. Every painting comes with a few words, because some feelings need both a frame and a sentence.

You\u2019ll find me in the tree court, catching sunlight and trying not to get too absorbed. Wander the halls, stay as long as you like, and don\u2019t worry about the time. In here, the only thing that\u2019s drying is the paint.`}});var I1=me((nL,C3)=>{"use strict";var L3=vr(),S3=sl(),es=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function P1(){return L3.isPhone||!window.matchMedia||!window.matchMedia("(pointer: fine)").matches?!1:window.innerWidth>=900&&window.innerHeight>=520}var XE=`
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
`,A3=!1;function z3(){if(A3)return;A3=!0;let e=document.createElement("style");e.textContent=XE,document.head.appendChild(e)}var YE='<svg class="visit-play" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="10.2"/><path d="M10 8.4l6 3.6-6 3.6z" fill="currentColor" stroke="none"/></svg>';function KE(e){return!e||!e.visit||!P1()?"":(z3(),`<button type="button" class="visit-btn" data-visit="${es(e.slug||"")}" aria-label="Visit what remained: watch ${es(e.title)} come to life">${YE}<span>Visit what remained</span></button>`)}function QE(e){let t=e.getContext("2d");e.width=e.height=160;let o=t.createImageData(160,160),n=!0,r=0;return function a(i){if(n){if(i-r>70){r=i;let s=o.data;for(let c=0;c<s.length;c+=4){let l=Math.random()*255;s[c]=s[c+1]=s[c+2]=l,s[c+3]=255}t.putImageData(o,0,0),e.style.transform=`translate(${(Math.random()*6-3).toFixed(1)}%, ${(Math.random()*6-3).toFixed(1)}%)`}requestAnimationFrame(a)}}(0),()=>{n=!1}}var Ul=null;function ZE(e){if(Ul||!e||!e.visit)return;z3();let t=document.activeElement;document.body.classList.add("visiting");let o="images/web/"+e.slug+(L3.isPhone?"-1024":"")+".webp",n=document.createElement("div");n.className="visit",n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.setAttribute("aria-label","Visiting "+e.title),n.innerHTML=`
		<video muted playsinline preload="auto" ${e.visit.poster?`poster="${es(e.visit.poster)}"`:""}></video>
		<img class="visit-art" alt="${es(e.title)}, ${es(S3(e))}" src="${es(o)}">
		<canvas class="visit-grain" aria-hidden="true"></canvas>
		<div class="visit-vignette" aria-hidden="true"></div>
		<div class="visit-bar top" aria-hidden="true"></div>
		<div class="visit-bar bottom" aria-hidden="true"></div>
		<div class="visit-title">
			<span class="visit-kicker">A visit</span>
			<span class="visit-name">${es(e.title)}</span>
			<span class="visit-meta">${es(S3(e))}</span>
		</div>
		<button type="button" class="visit-close" aria-label="Return to the gallery">\xD7</button>
		<button type="button" class="visit-skip">Skip</button>
		<div class="visit-end">
			<button type="button" class="primary" data-act="back">Return to the gallery</button>
			<button type="button" data-act="again">Watch again</button>
		</div>`,document.body.appendChild(n);let r=n.querySelector("video"),a=n.querySelector(".visit-title"),i=QE(n.querySelector(".visit-grain")),s=[],c=(m,g)=>s.push(setTimeout(m,g)),l=m=>m.stopPropagation();["mousedown","pointerdown","click","wheel","touchstart","touchmove"].forEach(m=>n.addEventListener(m,l));let f=m=>{m.key==="Escape"?(m.preventDefault(),d()):m.key===" "&&!(m.target&&m.target.tagName==="BUTTON")&&(m.preventDefault(),p()),m.stopImmediatePropagation()};window.addEventListener("keydown",f,!0);let u=m=>m.stopImmediatePropagation();window.addEventListener("keyup",u,!0);let h=!1;function p(){h||(h=!0,a.classList.add("on"),n.classList.add("resolved"),c(()=>{let m=n.querySelector('[data-act="back"]');m&&m.focus({preventScroll:!0})},1300))}function v(){h=!1,n.classList.remove("resolved"),a.classList.remove("on");try{r.currentTime=0}catch(g){}let m=r.play();m&&m.catch&&m.catch(()=>p()),n.classList.add("playing"),c(()=>{h||a.classList.add("on")},1600),c(()=>{h||a.classList.remove("on")},6200)}r.addEventListener("timeupdate",()=>{r.duration&&r.currentTime>r.duration-1.2&&p()}),r.addEventListener("ended",p),r.addEventListener("error",p);function d(){if(Ul){Ul=null,s.forEach(clearTimeout),n.classList.remove("on");try{r.pause()}catch(m){}window.removeEventListener("keydown",f,!0),window.removeEventListener("keyup",u,!0),document.body.classList.remove("visiting"),setTimeout(()=>{i(),n.remove(),t&&t.focus&&t.focus({preventScroll:!0})},1150)}}n.querySelector(".visit-close").addEventListener("click",d),n.querySelector(".visit-skip").addEventListener("click",()=>{try{r.pause()}catch(m){}p()}),n.querySelector(".visit-end").addEventListener("click",m=>{let g=m.target.closest("button");g&&(g.dataset.act==="back"&&d(),g.dataset.act==="again"&&(s.forEach(clearTimeout),v()))}),r.src=e.visit.video,Ul={close:d},requestAnimationFrame(()=>{n.classList.add("on"),c(v,1300)})}var T3={};function JE(e){if(!e||!e.visit||T3[e.visit.video]||!P1())return;T3[e.visit.video]=!0;let t=document.createElement("link");t.rel="preload",t.as="video",t.href=e.visit.video,document.head.appendChild(t)}C3.exports={available:P1,button:KE,open:ZE,warm:JE,get active(){return!!Ul}}});var O3=me((rL,R3)=>{"use strict";var eS=vr(),yc=[0,0],vc=[0,0],Mi=null,D1=0;if(typeof window!="undefined"){window.addEventListener("pointermove",t=>{t.pointerType!=="touch"&&(yc[0]=Math.max(-1,Math.min(1,t.clientX/window.innerWidth*2-1)),yc[1]=Math.max(-1,Math.min(1,t.clientY/window.innerHeight*2-1)),D1=performance.now())},{passive:!0});let e=()=>{D1=performance.now()};["wheel","touchstart","touchmove","keydown","pointerdown"].forEach(t=>window.addEventListener(t,e,{passive:!0,capture:!0})),window.addEventListener("deviceorientation",t=>{t.gamma===null||t.beta===null||(Mi||(Mi=[t.gamma,t.beta]),Mi[0]+=(t.gamma-Mi[0])*.01,Mi[1]+=(t.beta-Mi[1])*.01,yc[0]=Math.max(-1,Math.min(1,(t.gamma-Mi[0])/14)),yc[1]=Math.max(-1,Math.min(1,(t.beta-Mi[1])/14)))},{passive:!0})}var N3=0,mc=null,Kh=null,Ja=[0,0,0],F1=0,gc=null,xc=0,Vs={eye:[0,0,0],target:[0,0,0],fov:50,roll:0},tS={apply(e,t){let o=Math.min(.1,Math.max(0,t-N3));N3=t;let n=e.eye,r=e.target,a=[r[0]-n[0],r[1]-n[1],r[2]-n[2]],i=Math.hypot(a[0],a[1],a[2])||1;a=[a[0]/i,a[1]/i,a[2]/i];let s=[-a[2],0,a[0]],c=Math.hypot(s[0],s[2])||1;s=[s[0]/c,0,s[2]/c];let l=[s[1]*a[2]-s[2]*a[1],s[2]*a[0]-s[0]*a[2],s[0]*a[1]-s[1]*a[0]],f=!mc;if(mc&&o>0){let b=[n[0]-mc[0],n[1]-mc[1],n[2]-mc[2]],M=Math.hypot(b[0],b[1],b[2]);if(M>2.5)f=!0;else{let _=Math.min(1,o*5);for(let S=0;S<3;S++)Ja[S]+=(b[S]/o-Ja[S])*_}let w=Math.hypot(r[0]-Kh[0],r[1]-Kh[1],r[2]-Kh[2]);xc=M/o<.12&&w/o<.2?xc+o:0}f&&(Ja[0]=Ja[1]=Ja[2]=0,xc=0),mc=n.slice(),Kh=r.slice(),F1=Math.hypot(Ja[0],Ja[1],Ja[2]);let u=Math.min(1,o*2.6);vc[0]+=(yc[0]-vc[0])*u,vc[1]+=(yc[1]-vc[1])*u;let h=Math.max(.03,Math.min(.32,i*.05)),p=(eS.isPhone&&!Mi?1.5:1)*Math.min(1,xc/2.5),v=(Math.sin(t*.131)*.55+Math.sin(t*.071+1.3)*.45)*h*.55*p,d=Math.sin(t*.097+.6)*h*.16*p,m=vc[0]*h+v,g=-vc[1]*h*.45+d;for(let b=0;b<3;b++)Vs.eye[b]=n[b]+s[b]*m+l[b]*g,Vs.target[b]=r[b]+(s[b]*m+l[b]*g)*.12;n[1]>.05&&(Vs.eye[1]=Math.max(.05,Vs.eye[1]));let y=Ja[0]*s[0]+Ja[2]*s[2];return Vs.fov=e.fov+Math.min(3.5,F1*.55),Vs.roll=(e.roll||0)+Math.max(-.035,Math.min(.035,-y*.006)),Vs},pull(e,t){(gc===null||!(Math.abs(e.focus-gc)<40))&&(gc=e.focus);let o=1/60;gc+=(e.focus-gc)*Math.min(1,o*3.2),e.focus=gc,e.aperture>0&&(e.aperture*=1+.25*Math.min(1,xc/3))},get speed(){return F1},get resting(){return xc>2&&performance.now()-D1>2e3}};R3.exports=tS});var G1=me((aL,P3)=>{P3.exports=1e-6});var $1=me((iL,I3)=>{I3.exports=oS;function oS(){var e=new Float32Array(3);return e[0]=0,e[1]=0,e[2]=0,e}});var D3=me((sL,F3)=>{F3.exports=nS;function nS(e){var t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}});var q1=me((cL,G3)=>{G3.exports=rS;function rS(e,t,o){var n=new Float32Array(3);return n[0]=e,n[1]=t,n[2]=o,n}});var H1=me((lL,$3)=>{$3.exports=aS;function aS(e,t){var o=t[0],n=t[1],r=t[2],a=o*o+n*n+r*r;return a>0&&(a=1/Math.sqrt(a),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a),e}});var B1=me((fL,q3)=>{q3.exports=iS;function iS(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}});var j3=me((hL,U3)=>{U3.exports=cS;var H3=q1(),B3=H1(),sS=B1();function cS(e,t){var o=H3(e[0],e[1],e[2]),n=H3(t[0],t[1],t[2]);B3(o,o),B3(n,n);var r=sS(o,n);return r>1?0:Math.acos(r)}});var V3=me((uL,W3)=>{W3.exports=lS;function lS(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}});var Y3=me((dL,X3)=>{X3.exports=fS;function fS(e,t,o,n){return e[0]=t,e[1]=o,e[2]=n,e}});var Q3=me((pL,K3)=>{K3.exports=hS;var U1=G1();function hS(e,t){var o=e[0],n=e[1],r=e[2],a=t[0],i=t[1],s=t[2];return Math.abs(o-a)<=U1*Math.max(1,Math.abs(o),Math.abs(a))&&Math.abs(n-i)<=U1*Math.max(1,Math.abs(n),Math.abs(i))&&Math.abs(r-s)<=U1*Math.max(1,Math.abs(r),Math.abs(s))}});var J3=me((vL,Z3)=>{Z3.exports=uS;function uS(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}});var ty=me((mL,ey)=>{ey.exports=dS;function dS(e,t,o){return e[0]=t[0]+o[0],e[1]=t[1]+o[1],e[2]=t[2]+o[2],e}});var j1=me((gL,oy)=>{oy.exports=pS;function pS(e,t,o){return e[0]=t[0]-o[0],e[1]=t[1]-o[1],e[2]=t[2]-o[2],e}});var ry=me((xL,ny)=>{ny.exports=j1()});var W1=me((yL,ay)=>{ay.exports=vS;function vS(e,t,o){return e[0]=t[0]*o[0],e[1]=t[1]*o[1],e[2]=t[2]*o[2],e}});var sy=me((bL,iy)=>{iy.exports=W1()});var V1=me((wL,cy)=>{cy.exports=mS;function mS(e,t,o){return e[0]=t[0]/o[0],e[1]=t[1]/o[1],e[2]=t[2]/o[2],e}});var fy=me((_L,ly)=>{ly.exports=V1()});var uy=me((ML,hy)=>{hy.exports=gS;function gS(e,t,o){return e[0]=Math.min(t[0],o[0]),e[1]=Math.min(t[1],o[1]),e[2]=Math.min(t[2],o[2]),e}});var py=me((kL,dy)=>{dy.exports=xS;function xS(e,t,o){return e[0]=Math.max(t[0],o[0]),e[1]=Math.max(t[1],o[1]),e[2]=Math.max(t[2],o[2]),e}});var my=me((EL,vy)=>{vy.exports=yS;function yS(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e}});var xy=me((SL,gy)=>{gy.exports=bS;function bS(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e}});var by=me((AL,yy)=>{yy.exports=wS;function wS(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e}});var _y=me((TL,wy)=>{wy.exports=_S;function _S(e,t,o){return e[0]=t[0]*o,e[1]=t[1]*o,e[2]=t[2]*o,e}});var ky=me((LL,My)=>{My.exports=MS;function MS(e,t,o,n){return e[0]=t[0]+o[0]*n,e[1]=t[1]+o[1]*n,e[2]=t[2]+o[2]*n,e}});var X1=me((zL,Ey)=>{Ey.exports=kS;function kS(e,t){var o=t[0]-e[0],n=t[1]-e[1],r=t[2]-e[2];return Math.sqrt(o*o+n*n+r*r)}});var Ay=me((CL,Sy)=>{Sy.exports=X1()});var Y1=me((NL,Ty)=>{Ty.exports=ES;function ES(e,t){var o=t[0]-e[0],n=t[1]-e[1],r=t[2]-e[2];return o*o+n*n+r*r}});var zy=me((RL,Ly)=>{Ly.exports=Y1()});var K1=me((OL,Cy)=>{Cy.exports=SS;function SS(e){var t=e[0],o=e[1],n=e[2];return Math.sqrt(t*t+o*o+n*n)}});var Ry=me((PL,Ny)=>{Ny.exports=K1()});var Q1=me((IL,Oy)=>{Oy.exports=AS;function AS(e){var t=e[0],o=e[1],n=e[2];return t*t+o*o+n*n}});var Iy=me((FL,Py)=>{Py.exports=Q1()});var Dy=me((DL,Fy)=>{Fy.exports=TS;function TS(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}});var $y=me((GL,Gy)=>{Gy.exports=LS;function LS(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e}});var Hy=me(($L,qy)=>{qy.exports=zS;function zS(e,t,o){var n=t[0],r=t[1],a=t[2],i=o[0],s=o[1],c=o[2];return e[0]=r*c-a*s,e[1]=a*i-n*c,e[2]=n*s-r*i,e}});var Uy=me((qL,By)=>{By.exports=CS;function CS(e,t,o,n){var r=t[0],a=t[1],i=t[2];return e[0]=r+n*(o[0]-r),e[1]=a+n*(o[1]-a),e[2]=i+n*(o[2]-i),e}});var Wy=me((HL,jy)=>{jy.exports=NS;function NS(e,t){t=t||1;var o=Math.random()*2*Math.PI,n=Math.random()*2-1,r=Math.sqrt(1-n*n)*t;return e[0]=Math.cos(o)*r,e[1]=Math.sin(o)*r,e[2]=n*t,e}});var Xy=me((BL,Vy)=>{Vy.exports=RS;function RS(e,t,o){var n=t[0],r=t[1],a=t[2],i=o[3]*n+o[7]*r+o[11]*a+o[15];return i=i||1,e[0]=(o[0]*n+o[4]*r+o[8]*a+o[12])/i,e[1]=(o[1]*n+o[5]*r+o[9]*a+o[13])/i,e[2]=(o[2]*n+o[6]*r+o[10]*a+o[14])/i,e}});var Ky=me((UL,Yy)=>{Yy.exports=OS;function OS(e,t,o){var n=t[0],r=t[1],a=t[2];return e[0]=n*o[0]+r*o[3]+a*o[6],e[1]=n*o[1]+r*o[4]+a*o[7],e[2]=n*o[2]+r*o[5]+a*o[8],e}});var Zy=me((jL,Qy)=>{Qy.exports=PS;function PS(e,t,o){var n=t[0],r=t[1],a=t[2],i=o[0],s=o[1],c=o[2],l=o[3],f=l*n+s*a-c*r,u=l*r+c*n-i*a,h=l*a+i*r-s*n,p=-i*n-s*r-c*a;return e[0]=f*l+p*-i+u*-c-h*-s,e[1]=u*l+p*-s+h*-i-f*-c,e[2]=h*l+p*-c+f*-s-u*-i,e}});var eb=me((WL,Jy)=>{Jy.exports=IS;function IS(e,t,o,n){var r=o[1],a=o[2],i=t[1]-r,s=t[2]-a,c=Math.sin(n),l=Math.cos(n);return e[0]=t[0],e[1]=r+i*l-s*c,e[2]=a+i*c+s*l,e}});var ob=me((VL,tb)=>{tb.exports=FS;function FS(e,t,o,n){var r=o[0],a=o[2],i=t[0]-r,s=t[2]-a,c=Math.sin(n),l=Math.cos(n);return e[0]=r+s*c+i*l,e[1]=t[1],e[2]=a+s*l-i*c,e}});var rb=me((XL,nb)=>{nb.exports=DS;function DS(e,t,o,n){var r=o[0],a=o[1],i=t[0]-r,s=t[1]-a,c=Math.sin(n),l=Math.cos(n);return e[0]=r+i*l-s*c,e[1]=a+i*c+s*l,e[2]=t[2],e}});var ib=me((YL,ab)=>{ab.exports=GS;var ts=$1()();function GS(e,t,o,n,r,a){var i,s;for(t||(t=3),o||(o=0),n?s=Math.min(n*t+o,e.length):s=e.length,i=o;i<s;i+=t)ts[0]=e[i],ts[1]=e[i+1],ts[2]=e[i+2],r(ts,ts,a),e[i]=ts[0],e[i+1]=ts[1],e[i+2]=ts[2];return e}});var cb=me((KL,sb)=>{sb.exports={EPSILON:G1(),create:$1(),clone:D3(),angle:j3(),fromValues:q1(),copy:V3(),set:Y3(),equals:Q3(),exactEquals:J3(),add:ty(),subtract:j1(),sub:ry(),multiply:W1(),mul:sy(),divide:V1(),div:fy(),min:uy(),max:py(),floor:my(),ceil:xy(),round:by(),scale:_y(),scaleAndAdd:ky(),distance:X1(),dist:Ay(),squaredDistance:Y1(),sqrDist:zy(),length:K1(),len:Ry(),squaredLength:Q1(),sqrLen:Iy(),negate:Dy(),inverse:$y(),normalize:H1(),dot:B1(),cross:Hy(),lerp:Uy(),random:Wy(),transformMat4:Xy(),transformMat3:Ky(),transformQuat:Zy(),rotateX:eb(),rotateY:ob(),rotateZ:rb(),forEach:ib()}});var hb=me((QL,fb)=>{"use strict";function lb(){let e={};return{on(t,o){return(e[t]=e[t]||[]).push(o),this},emit(t,o){(e[t]||[]).slice().forEach(n=>n(o))}}}fb.exports=function(t){let o=t.ownerDocument||document,n=lb(),r=null,a={dx:0,dy:0,dt:0},i=0,s=()=>o.pointerLockElement||o.webkitPointerLockElement||null,c=()=>{if(s())return;let f=t.requestPointerLock||t.webkitRequestPointerLock;if(f)try{let u=f.call(t);u&&u.catch&&u.catch(()=>{})}catch(u){}};t.addEventListener("mousedown",c,!1);let l=()=>{if(!s()){r&&(n.emit("release"),r.emit("end"),r=null);return}r=lb(),i=Date.now(),n.emit("attain",r)};return o.addEventListener("pointerlockchange",l),o.addEventListener("webkitpointerlockchange",l),o.addEventListener("pointerlockerror",()=>n.emit("error")),(o.body||t).addEventListener("mousemove",f=>{r&&(a.dx=f.movementX||f.webkitMovementX||0,a.dy=f.movementY||f.webkitMovementY||0,a.dt=Date.now()-i,n.emit("data",a),r.emit("data",a))},!1),n.request=c,n.target=s,n.release=()=>{s()&&(o.exitPointerLock||o.webkitExitPointerLock).call(o)},n}});var mb=me((ez,vb)=>{"use strict";var Xs=nc(),Ys=cb(),$S=hb(),ZL=Math.PI/4,JL=Math.PI/6,ub=2,qS=1,HS=2.4,BS=2.4,US=1e3,jS=5,WS=7,Z1=or().C,jl=[[7,1.6],[7,Z1.zc],[Z1.x1-2.95,Z1.zc]],os=jl.slice(1).map((e,t)=>{let o=jl[t],n=e[0]-o[0],r=e[1]-o[1],a=Math.hypot(n,r);return{a:o,len:a,dir:[n/a,r/a]}}),J1=os.reduce((e,t)=>e+t.len,0);function db(e){let t=Math.max(0,Math.min(J1,e));for(let n of os){if(t<=n.len)return[n.a[0]+n.dir[0]*t,n.a[1]+n.dir[1]*t];t-=n.len}let o=jl[jl.length-1];return[o[0],o[1]]}function VS(e){let t=0;for(let n=0;n<os.length;n++){let r=os[n],a=t+r.len;if(e<a-1e-4||n===os.length-1){let i=r.dir,c=e<=t+1e-4&&n>0?os[n-1].dir:r.dir;return{ahead:i,back:[-c[0],-c[1]]}}t=a}let o=os[os.length-1].dir;return{ahead:o,back:[-o[0],-o[1]]}}var XS=Math.PI/4,YS=7,KS=140,QS=70,pb=(e,t,o)=>(1-e)*t+e*o,ZS=e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2;vb.exports=function({getGridSegments:e,getGridParts:t},o){var n=[0,Math.PI],r=[0,Math.PI],a=0,i=[0,0,0],s=[WS,ub,jl[0][1]],c=0,l=1,f=0,u=[.707,0,.707],h=[0,1,0],p=[0,0,0],v=.5,d=Xs.identity([]),m=Xs.identity([]),g=!1,y=[0,0,0],b=[0,0,0],M=1,w=!1;let _=Be=>{n[1]+=Be*XS},S=(Be,ct,dt)=>{if(Be=Math.max(Math.min(Be,100),-100),ct=Math.max(Math.min(ct,100),-100),n[0]=0,w){a=0;return}for(a+=Be;a>=dt;)_(1),a-=dt;for(;a<=-dt;)_(-1),a+=dt};$S(document.body).on("attain",Be=>{Be.on("data",ct=>{S(ct.dx,ct.dy,KS)})});let R=null,q=null,T=0,B={x:0,y:0},P=58,H=document.createElement("div");H.id="museum-mobile-controls",H.innerHTML=`

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
	`,document.body.appendChild(H);let se=H.querySelector("#museum-joystick"),Z=H.querySelector("#museum-joystick-knob"),le=()=>{Z.style.transform="translate(-50%, -50%)",i[0]=0,i[2]=0},ie=Be=>{let ct=Be.clientX-B.x,dt=Be.clientY-B.y,Rt=Math.hypot(ct,dt);if(Rt>P&&(ct=ct/Rt*P,dt=dt/Rt*P),Z.style.transform=`translate(
				calc(-50% + ${ct}px),
				calc(-50% + ${dt}px)
			)`,Rt<10){i[0]=0,i[2]=0;return}let zt=ct/P,mt=dt/P;i[0]=0,i[2]=Math.abs(mt)>.15?mt:0},pe=(Be,ct)=>{for(let dt=0;dt<Be.length;dt++)if(Be[dt].identifier===ct)return Be[dt];return null},Qe=Be=>!!(Be&&Be.closest&&Be.closest(".painting-plaque, .story-overlay, .story-card, .story-close, button")),wt=Be=>{if(!Qe(Be.target)&&(Be.cancelable&&Be.preventDefault(),!w))for(let ct=0;ct<Be.changedTouches.length;ct++){let dt=Be.changedTouches[ct];if(R===null&&dt.clientX<window.innerWidth*.48){R=dt.identifier;let Rt=se.getBoundingClientRect();B.x=Rt.left+Rt.width/2,B.y=Rt.top+Rt.height/2,ie(dt)}else q===null&&dt.clientX>=window.innerWidth*.48&&(q=dt.identifier,T=dt.clientX,a=0)}},Fe=Be=>{if(Qe(Be.target)||(Be.cancelable&&Be.preventDefault(),w))return;let ct=R===null?null:pe(Be.touches,R);ct&&ie(ct);let dt=q===null?null:pe(Be.touches,q);if(dt){let Rt=dt.clientX-T;T=dt.clientX,S(Rt,0,QS)}},st=Be=>{if(!Qe(Be.target)){Be.cancelable&&Be.preventDefault();for(let ct=0;ct<Be.changedTouches.length;ct++){let dt=Be.changedTouches[ct];dt.identifier===R&&(R=null,le()),dt.identifier===q&&(q=null)}}};document.addEventListener("touchstart",wt,{passive:!1}),document.addEventListener("touchmove",Fe,{passive:!1}),document.addEventListener("touchend",st,{passive:!1}),document.addEventListener("touchcancel",st,{passive:!1});let yt=document.createElement("style");yt.textContent=`

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
	`,document.head.appendChild(yt);var Bt={};let Zt=Be=>{if(document.body.classList.contains("in-conservatory")){Bt={};return}if(Be.defaultPrevented||Be.ctrlKey||Be.altKey||Be.metaKey)return;let ct=Be.type==="keydown";Bt[Be.code]=ct,ct&&!Be.repeat&&!w&&((Be.code==="KeyA"||Be.code==="ArrowLeft")&&_(-1),(Be.code==="KeyD"||Be.code==="ArrowRight")&&_(1)),g=!1;let dt=Bt.KeyW||Bt.ArrowUp?1:0;i=[0,0,(Bt.KeyS||Bt.ArrowDown?1:0)-dt],Be.preventDefault()};window.addEventListener("keydown",Zt),window.addEventListener("keyup",Zt);var Oo=0;return{pos:s,fmouse:r,forward:u,up:h,setPaused:Be=>{w=!!Be,w&&(i[0]=0,i[2]=0,le())},place:(Be,ct)=>{c=Math.max(0,Math.min(J1,Be));let dt=db(c);s[0]=dt[0],s[2]=dt[1],n[1]=ct,r[1]=ct,a=0,l=1},view:()=>d,proj:()=>(Xs.perspective(m,o(),window.innerWidth/window.innerHeight,.1,700),m),tick:({time:Be})=>{let ct=Be-Oo;Oo=Be;let dt=[0,0,0],Rt=[];Ys.set(u,Math.sin(r[1]),0,-Math.cos(r[1])),Ys.set(h,0,1,0);let so=g?BS:HS,zt=Math.sin(n[1]),mt=-Math.cos(n[1]),be=VS(c),ot=zt*be.ahead[0]+mt*be.ahead[1],Ct=zt*be.back[0]+mt*be.back[1],ht=l;Math.max(ot,Ct)>.3&&(ht=ot>=Ct?1:-1);let Xe=w?0:-i[2]*so;f+=(Xe-f)*(1-Math.exp(-Math.min(ct,.1)*5.5)),Xe===0&&Math.abs(f)<.01&&(f=0);let go=f*ht*Math.min(ct,.1);w&&(i[0]=0,i[2]=0,go=0,f=0),go!==0&&(l=Math.sign(go)*Math.sign(-i[2]||1)),c=Math.max(0,Math.min(J1,c+go));let E=db(c);Ys.set(p,E[0]-s[0],0,E[1]-s[2]);let no=Ys.len(p);no===0&&v!==.25&&(v=(Math.abs((v+.5)%1-.5)-.25)*.8+.25,(v+.01)%.25<.02&&(v=.25));let Xt=v;if(v+=no/(g?jS:US),s[1]=ub,Ys.add(s,s,p),M<1){M+=ct/qS,M=Math.min(M,1);let xo=ZS(M);Ys.set(s,pb(xo,y[0],b[0]),s[1],pb(xo,y[2],b[2]))}r[0]=0,r[1]+=(n[1]-r[1])*Math.min(1,Math.min(ct,.1)*YS),Math.abs(n[1]-r[1])<5e-4&&(r[1]=n[1]),Xs.identity(d),Xs.rotateX(d,d,0),Xs.rotateY(d,d,r[1]),Xs.translate(d,d,Ys.scale(dt,s,-1))}}}});var xb=me((tz,gb)=>{"use strict";var{skylightGLSL:JS,Z_START:e8,Z_END:t8,GLASS_Y:o8}=U0(),{oculusGLSL:n8,A:Ks}=Jr(),{windowLightGLSL:r8,C:Qh}=or(),{doorLightGLSL:a8}=Ii(),Zh=nr(),ns=Eh(),i8=Mh(),bc=null,ga=e=>e.toFixed(4),ep=.1,tp=700,wc={exposure:.88,shafts:1,bloom:1,vignette:.42,grain:.032};function s8(e,t){let o=t[0],n=t[1],r=t[2],a=t[3],i=t[4],s=t[5],c=t[6],l=t[7],f=t[8],u=t[9],h=t[10],p=t[11],v=t[12],d=t[13],m=t[14],g=t[15],y=o*s-n*i,b=o*c-r*i,M=o*l-a*i,w=n*c-r*s,_=n*l-a*s,S=r*l-a*c,G=f*d-u*v,R=f*m-h*v,q=f*g-p*v,T=u*m-h*d,B=u*g-p*d,P=h*g-p*m,H=y*P-b*B+M*T+w*q-_*R+S*G;return H?(H=1/H,e[0]=(s*P-c*B+l*T)*H,e[1]=(r*B-n*P-a*T)*H,e[2]=(d*S-m*_+g*w)*H,e[3]=(h*_-u*S-p*w)*H,e[4]=(c*q-i*P-l*R)*H,e[5]=(o*P-r*q+a*R)*H,e[6]=(m*M-v*S-g*b)*H,e[7]=(f*S-h*M+p*b)*H,e[8]=(i*B-s*q+l*G)*H,e[9]=(n*q-o*B-a*G)*H,e[10]=(v*_-d*M+g*y)*H,e[11]=(u*M-f*_-p*y)*H,e[12]=(s*R-i*T-c*G)*H,e[13]=(o*T-n*R+r*G)*H,e[14]=(d*b-v*w-m*y)*H,e[15]=(f*w-u*b+h*y)*H,e):null}function c8(e,t,o){let n=new Array(16);for(let r=0;r<4;r++)for(let a=0;a<4;a++){let i=0;for(let s=0;s<4;s++)i+=t[s*4+a]*o[r*4+s];n[r*4+a]=i}for(let r=0;r<16;r++)e[r]=n[r];return e}var l8=`
precision highp float;
attribute vec2 position;
varying vec2 uv;
void main() {
	uv = position * 0.5 + 0.5;
	gl_Position = vec4(position, 0.0, 1.0);
}`;gb.exports=(e,t)=>{let o=!!t.isPhone,n=e.hasExtension("webgl_depth_texture"),r=o?10:18,a=()=>ns.zone==="studio"?4:t.post>=2?2:4,i=o?7:11,s=Fe=>e.texture(Object.assign({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"},Fe||{})),c=()=>e.framebuffer({color:s(),depth:!1}),l=s(),f=n?e.texture({width:4,height:4,format:"depth",type:"uint32"}):null,u=e.framebuffer({color:l,depth:f||!0}),h=[c(),c()],p=[c(),c()],v=[c(),c()],d=[c(),c()],m=new Array(16).fill(0),g=new Array(16).fill(0),y=[0,0,0],b={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0,glitch:0},M={position:[-1,-1,3,-1,-1,3]},w=(Fe,st,yt)=>e(Object.assign({vert:l8,frag:Fe,attributes:M,count:3,depth:{enable:!1,mask:!1},cull:{enable:!1},blend:{enable:!1},uniforms:st,framebuffer:e.prop("out")},yt||{})),_=[2.6,0,e8-3.2,12.6,o8,t8+.4],S=[Ks.x0-.2,0,Ks.z0,Ks.x1,Ks.domeTop,Ks.z1],G=[Qh.x0,0,Qh.z0,Qh.x1,7.6,Qh.z1],R=[.35,0,.35,13.65,7.6,9],q=i8.AIR_BOX,T=Fe=>`vec3(${ga(Fe[0])}, ${ga(Fe[1])}, ${ga(Fe[2])}), vec3(${ga(Fe[3])}, ${ga(Fe[4])}, ${ga(Fe[5])})`,B=`
	#define STUDIO_SUN vec3(0.0, 1.0, 0.0)
	float studioSun(vec3 p) { return 0.0; }`,P=Fe=>w(`
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

	${JS()}
	${n8()}
	${r8()}
	${a8()}
	${Fe}

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
			vec2 t = hitBox(eye, rd, ${T(_)});
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
			vec2 t = hitBox(eye, rd, ${T(S)});
			t.y = min(t.y, len);
			if (t.y > t.x) {
				float st = (t.y - t.x) / float(N);
				float acc = 0.0;
				for (int i = 0; i < N; i++) {
					vec3 p = eye + rd * (t.x + (float(i) + jit) * st);
					if (p.y < ${ga(Ks.dome.base)} && p.x > ${ga(Ks.x0-.1)}) acc += oculusOpen(p) * treeShade(p) * air(p);
				}
				float ph = phase(dot(rd, SHAFT), 0.6) + 0.05;
				sum += mix(vec3(1.0, 0.88, 0.68), vec3(0.62, 0.74, 1.0) * 1.2, night) * acc * st * ph * strength.y;
			}
		}

		// the corridor windows
		if (strength.z > 0.0) {
			vec2 t = hitBox(eye, rd, ${T(G)});
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
			vec2 t = hitBox(eye, rd, ${T(R)});
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
			vec2 t = hitBox(eye, rd, ${T(q)});
			t.y = min(t.y, len);
			if (t.y > t.x) {
				const int NS = ${i};
				float st = (t.y - t.x) / float(NS);
				float acc = 0.0;
				for (int i = 0; i < NS; i++) {
					vec3 p = eye + rd * (t.x + (float(i) + jit) * st);
					#ifdef STUDIO_AIR_EVEN
					acc += studioSun(p) * (0.75 + 0.25 * air(p));
					#else
					acc += studioSun(p) * air(p);
					#endif
				}
				#ifdef STUDIO_SUN2
				// (a room lit from both sides: the red room, redroom.js)
				float ph = 0.5 * (phase(dot(rd, STUDIO_SUN), 0.4) + phase(dot(rd, STUDIO_SUN2), 0.4)) + 0.05;
				#else
				float ph = phase(dot(rd, STUDIO_SUN), 0.6) + 0.04;
				#endif
				#ifdef SHAFT_TINT
				// (a soft ceiling: a deep colour must not run past what the
				// picture can hold, or it bleaches)
				float sv = acc * st * ph * strength5;
				sum += SHAFT_TINT * sv / (1.0 + sv * 0.8);
				#else
				sum += mix(vec3(1.0, 0.84, 0.62), vec3(0.62, 0.74, 1.0) * 1.15, night) * acc * st * ph * strength5;
				#endif
			}
		}

		gl_FragColor = vec4(sum, 1.0);
	}`,{depthTex:()=>f,invVP:()=>m,eye:()=>y,time:e.context("time"),night:()=>Zh.night,strength:()=>se,strength5:()=>Z,...Fe===B?{}:{studioBake:()=>bc.bakedSun(e)}}),H=P(B),se=[0,0,0,0],Z=0;function le(){let Fe=wc.shafts*b.shafts,st=Zh.night;return se[0]=ns.box(_)?.06*Fe*(1+.9*st):0,se[1]=ns.box(S,!1,"court")?.1*Fe*(1+.9*st):0,se[2]=ns.box(G)?.07*Fe*(1+.4*st):0,se[3]=ns.box(R)?.04*Fe*(1-.75*st):0,ns.zone==="studio"?(se[0]=se[1]=se[2]=se[3]=0,Z=.065*Fe*(1+1*st)):Z=0,se[0]+se[1]+se[2]+se[3]+Z>5e-4}let ie=w(`
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
	}`,{src:e.prop("src"),dir:(Fe,st)=>[st.dir[0]/st.size[0],st.dir[1]/st.size[1]]}),pe=w(`
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
	}`,{src:e.prop("src"),texel:(Fe,st)=>[.5/st.size[0],.5/st.size[1]],threshold:e.prop("threshold")}),Qe=w(`
	precision highp float;
	varying vec2 uv;
	uniform sampler2D scene, depthTex, soft, bloomA, bloomB, shafts;
	uniform vec2 res;
	uniform float time, exposure, vignette, grain, letterbox, fade, aperture, focus, hasDepth, bloomK, night, glitch;
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
		return 2.0 * ${ga(ep)} * ${ga(tp)} / (${ga(tp+ep)} - z * ${ga(tp-ep)});
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

		// the picture breaking up: lines slipping sideways, blocks torn out
		// and shifted, the frame rolling
		float gfr = floor(time * 18.0);
		if (glitch > 0.0) {
			float row = floor(p.y * mix(14.0, 60.0, hash12(vec2(gfr, 1.0))));
			float slip = step(1.0 - glitch * 0.65, hash12(vec2(row, gfr)));
			p.x = fract(p.x + (hash12(vec2(row * 2.3, gfr + 7.0)) - 0.5) * 0.25 * glitch * slip);
			vec2 blk = floor(p * vec2(12.0, 8.0));
			if (hash12(blk + gfr * 1.3) > 1.0 - glitch * 0.35) p = fract(p + (vec2(hash12(blk + gfr), hash12(blk.yx + gfr)) - 0.5) * 0.18 * glitch);
			p.y = fract(p.y + glitch * glitch * 0.3 * step(0.7, hash12(vec2(gfr, 4.0))) * hash12(vec2(gfr, 5.0)));
		}

		vec3 c = fxaa(p);
		if (glitch > 0.0) {
			// the colours parting
			float sh = 0.012 * glitch * (0.5 + hash12(vec2(gfr, 9.0)));
			c.r = texture2D(scene, p + vec2(sh, 0.0)).r;
			c.b = texture2D(scene, p - vec2(sh, 0.0)).b;
		}

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

		if (glitch > 0.0) {
			// scan lines, a crush of snow, and the odd frame gone wrong
			col *= 1.0 - 0.35 * glitch * step(0.5, fract(gl_FragCoord.y * 0.5));
			float sn = hash12(floor(gl_FragCoord.xy / 3.0) + gfr * 31.0);
			col = mix(col, vec3(sn), glitch * 0.35 * step(0.55, hash12(vec2(floor(p.y * 40.0), gfr))));
			if (hash12(vec2(gfr, 11.0)) > 1.0 - glitch * 0.12) col = vec3(1.0) - col;
			col = mix(col, floor(col * 4.0) / 4.0, glitch * 0.5);
		}
		col = mix(col, fadeColor, fade);
		gl_FragColor = vec4(col, 1.0);
	}`,{scene:()=>l,depthTex:()=>f||l,soft:()=>h[0],bloomA:()=>p[0],bloomB:()=>v[0],shafts:()=>d[0],res:()=>[u.width,u.height],time:e.context("time"),exposure:()=>wc.exposure*b.exposure,vignette:()=>Math.min(1,wc.vignette+b.vignette+.22*Zh.night+(ns.zone==="studio"?.2:0)),night:()=>Zh.night,grain:()=>wc.grain,bloomK:()=>wc.bloom,letterbox:()=>b.letterbox,fade:()=>b.fade,fadeColor:()=>b.fadeColor,glitch:()=>b.glitch||0,aperture:()=>t.post>=2?b.aperture:0,focus:()=>b.focus,hasDepth:n?1:0},{framebuffer:null}),wt=e({framebuffer:()=>u});return{shot:b,look:wc,hasDepth:n,useStudio(Fe){bc!==Fe&&(bc=Fe,H=P(Fe?Fe.sunGLSL():B))},capture(Fe,st,yt){let Bt=Math.max(.4,Math.min(1,t.scale||1)),Zt=Math.max(2,Math.round(Fe.drawingBufferWidth*Bt/2)*2),Oo=Math.max(2,Math.round(Fe.drawingBufferHeight*Bt/2)*2);(u.width!==Zt||u.height!==Oo)&&u.resize(Zt,Oo);let Be=Math.max(1,Math.ceil(Zt/2)),ct=Math.max(1,Math.ceil(Oo/2));h.forEach(dt=>dt.resize(Be,ct)),p.forEach(dt=>dt.resize(Math.max(1,Math.ceil(Zt/4)),Math.max(1,Math.ceil(Oo/4)))),v.forEach(dt=>dt.resize(Math.max(1,Math.ceil(Zt/8)),Math.max(1,Math.ceil(Oo/8)))),d.forEach(dt=>dt.resize(Math.max(1,Math.ceil(Zt/a())),Math.max(1,Math.ceil(Oo/a())))),c8(g,st.proj,st.view),s8(m,g),y[0]=st.eye[0],y[1]=st.eye[1],y[2]=st.eye[2],wt(()=>{e.clear({color:[0,0,0,1],depth:1}),yt()})},present(){let Fe=st=>[st.width,st.height];n&&t.post>=1&&le()?(H({out:d[0]}),ie({out:d[1],src:d[0],dir:[1,0],size:Fe(d[0])}),ie({out:d[0],src:d[1],dir:[0,1],size:Fe(d[0])})):e.clear({color:[0,0,0,1],framebuffer:d[0]}),pe({out:h[0],src:l,size:[u.width,u.height],threshold:0}),ie({out:h[1],src:h[0],dir:[1,0],size:Fe(h[0])}),ie({out:h[0],src:h[1],dir:[0,1],size:Fe(h[0])}),pe({out:p[0],src:h[0],size:Fe(h[0]),threshold:ns.zone==="studio"&&bc&&bc.POST&&bc.POST.threshold||.42}),ie({out:p[1],src:p[0],dir:[1,0],size:Fe(p[0])}),ie({out:p[0],src:p[1],dir:[0,1],size:Fe(p[0])}),pe({out:v[0],src:p[0],size:Fe(p[0]),threshold:0}),ie({out:v[1],src:v[0],dir:[1.5,0],size:Fe(v[0])}),ie({out:v[0],src:v[1],dir:[0,1.5],size:Fe(v[0])}),Qe({out:null})}}}});var Mb=me((oz,_b)=>{"use strict";var yb=nr().GLSL,f8=As(),op=Ii(),{C:h8,FAR_DOOR:u8}=or(),d8=100*Math.PI/180,bb=e=>[u8.x-e[2],e[1],h8.zc-7+e[0]],wb=e=>[-e[2],e[1],e[0]];function p8(e){let t=[],o=[],n=[],r=[],a=f8.createBuilder(t,o,n,r);op.addFrames(a,e);let i=op.glassPanes(e),s=c=>{let l=[];for(let f=0;f<c.length;f+=3)l.push([c[f],c[f+1],c[f+2]]);return l};return{position:s(t),normal:s(o),elements:n,glass:i}}_b.exports=e=>{let t=op.DOOR,o=["left","right"].map(f=>{let u=p8(f),h=u.position.length;return{part:f,hinge:f==="left"?t.x0:t.x1,sign:f==="left"?-1:1,src:u.position.map(p=>p.slice()),srcN:u.normal.map(p=>p.slice()),srcG:u.glass.map(p=>p.slice()),pos:e.buffer({data:new Float32Array(h*3),usage:"dynamic"}),nrm:e.buffer({data:new Float32Array(h*3),usage:"dynamic"}),gpos:e.buffer({data:new Float32Array(u.glass.length*3),usage:"dynamic"}),gnrm:e.buffer({data:new Float32Array(u.glass.length*3),usage:"dynamic"}),el:e.elements({data:new Uint32Array(u.elements),type:"uint32"}),glassCount:u.glass.length,outP:new Float32Array(h*3),outN:new Float32Array(h*3),outG:new Float32Array(u.glass.length*3),outGN:new Float32Array(u.glass.length*3)}}),n=null;function r(f){if(f!==n){n=f;for(let u of o){let h=u.sign*f,p=Math.cos(h),v=Math.sin(h),d=y=>{let b=y[0]-u.hinge,M=y[2];return[u.hinge+b*p+M*v,y[1],-b*v+M*p]},m=y=>[y[0]*p+y[2]*v,y[1],-y[0]*v+y[2]*p];u.src.forEach((y,b)=>{let M=bb(d(y));u.outP.set(M,b*3),u.outN.set(wb(m(u.srcN[b])),b*3)});let g=wb(m([0,0,1]));u.srcG.forEach((y,b)=>{u.outG.set(bb(d(y)),b*3),u.outGN.set(g,b*3)}),u.pos.subdata(u.outP),u.nrm.subdata(u.outN),u.gpos.subdata(u.outG),u.gnrm.subdata(u.outGN)}}}r(0);let a=`
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
		${yb}
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
		${yb}
		varying vec3 v_pos, v_n, v_eye;
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			float c = abs(dot(V, normalize(v_n)));
			float fres = pow(1.0 - c, 3.0);
			float d = (v_pos.x + v_pos.z) * 0.55 + v_pos.y * 0.85;
			float sheen = smoothstep(0.35, 0.0, abs(fract(d * 0.22) - 0.5)) * 0.05;
			float a = 0.05 + 0.32 * fres + sheen;
			gl_FragColor = vec4(toNight(mix(vec3(0.80, 0.86, 0.90), vec3(1.0, 0.95, 0.86), 0.4), 0.22), a);
		}`,attributes:{position:e.prop("pos"),normal:e.prop("nrm")},count:e.prop("count"),cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}}),c=0,l=()=>{r(c*d8);for(let f of o)i({pos:f.pos,nrm:f.nrm,el:f.el})};return l.glass=()=>{for(let f of o)s({pos:f.gpos,nrm:f.gnrm,count:f.glassCount})},l.setOpen=f=>{c=f||0},l.openNow=()=>c,l}});var Eb=me((nz,kb)=>{"use strict";var v8=nr().GLSL,{skylightGLSL:m8}=U0(),{oculusGLSL:g8}=Jr(),{windowLightGLSL:x8}=or(),Oa=.22;function y8(){let e=[],t=[],o=[],n=[],i=(f,u)=>{let h=Oa*.2*Math.pow(Math.sin(Math.PI*Math.pow(f,.85)),.9)*(u>0?1.06:.94),p=f*Oa-Oa*.12,v=u*h,d=Math.abs(u)*h*.42-.14*f*f*Oa;d+=Math.sin(f*17+(u>0?0:2.1))*.012*Oa*u*u;let m=(f-.3)*.55,g=Math.cos(m),y=Math.sin(m),b=d*g-v*y,M=d*y+v*g;return[p,b,M+.05*Oa*f*f]},s=(f,u)=>{let p=i(Math.min(1,f+.01),u),v=i(Math.max(0,f-.01),u),d=i(f,Math.min(1,u+.01)),m=i(f,Math.max(-1,u-.01)),g=[p[0]-v[0],p[1]-v[1],p[2]-v[2]],y=[d[0]-m[0],d[1]-m[1],d[2]-m[2]],b=[y[1]*g[2]-y[2]*g[1],y[2]*g[0]-y[0]*g[2],y[0]*g[1]-y[1]*g[0]],M=Math.hypot(b[0],b[1],b[2])||1,w=b[1]<0?-1:1;return[b[0]/M*w,b[1]/M*w,b[2]/M*w]};for(let f=0;f<=18;f++){let u=f/18;for(let h=0;h<=5*2;h++){let p=h/5-1;e.push(i(u,p)),t.push(s(Math.min(.97,Math.max(.03,u)),p)),o.push([u,p])}}let c=5*2+1;for(let f=0;f<18;f++)for(let u=0;u<c-1;u++){let h=f*c+u,p=h+1,v=h+c,d=v+1;n.push([h,v,p],[p,v,d])}let l=e.length;return e.push([-Oa*.12,0,-.003],[-Oa*.12,0,.003],[-Oa*.24,-.01,.0015],[-Oa*.24,-.01,-.0015]),t.push([0,1,0],[0,1,0],[0,1,0],[0,1,0]),o.push([0,0],[0,0],[-.1,0],[-.1,0]),n.push([l,l+2,l+1],[l,l+3,l+2]),{pos:e,nrm:t,uv:o,idx:n}}kb.exports=e=>{let t=y8(),o=e({vert:`
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
		${v8}
		uniform float time;
		uniform float yScale, visible;
		varying vec3 v_pos, v_normal;
		varying vec2 v_uv;
		varying vec3 v_eye;

		${m8()}
		${g8()}
		${x8()}

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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{model:e.prop("model"),night:()=>n.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(a){a&&a.visible&&(o({model:a.model}),n.night>.01&&r({model:a.model}))}}});var Tb=me((rz,Ab)=>{"use strict";var{skylightGLSL:b8,Z_START:Sb,Z_END:w8}=U0(),{oculusGLSL:_8,A:_c}=Jr(),{windowLightGLSL:M8,C:Qs}=or();Ab.exports=(e,t)=>{let o=t.isPhone?900:2600,n=t.isPhone?350:900,r=t.isPhone?450:1300,a=t.isPhone?13:22,i=7,s=()=>(i=i*16807%2147483647,(i-1)/2147483646),c=Qs.x0+.6,l=Qs.x1-.3,f=[];for(let v=0;v<o;v++)f.push([2.5+s()*10.5,.3+s()*8,Sb-3.5+s()*(w8-Sb+4.5),s()]);for(let v=0;v<n;v++)f.push([_c.x0+.3+s()*(_c.x1-_c.x0-.6),.3+s()*7.5,_c.z0+.3+s()*(_c.z1-_c.z0-.6),s()]);for(let v=0;v<r;v++)f.push([c+s()*(l-c),.2+s()*5.6,Qs.z0+.25+s()*(Qs.z1-Qs.z0-.5),s()]);let u=v=>v.toFixed(4),h=[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],p=e({vert:`
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

		${b8()}
		${_8()}
		${M8()}

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
				p.x = ${u(c)} + mod(p.x - ${u(c)} - gust.x * (0.55 + 0.9 * seed.w), ${u(l-c)});
				p.y += sin(time * 5.0 + s * 11.0) * 0.22 * gust.y;
				p.z += cos(time * 4.3 + s * 13.0) * 0.30 * gust.y;
				p.z = clamp(p.z, ${u(Qs.z0+.1)}, ${u(Qs.z1-.1)});
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
		}`,attributes:{seed:f},count:f.length,primitive:"points",uniforms:{time:e.context("time"),pixelScale:v=>v.viewportHeight*.006,focus:(v,d)=>d&&d.focus||6,aperture:(v,d)=>d&&d.aperture||0,wake0:(v,d)=>(d&&d.wake||h)[0],wake1:(v,d)=>(d&&d.wake||h)[1],wake2:(v,d)=>(d&&d.wake||h)[2],wake3:(v,d)=>(d&&d.wake||h)[3],wakeDir:(v,d)=>d&&d.wakeDir||[0,0,1],gust:(v,d)=>d&&d.gust||[0,0]},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});return v=>p(v||{})}});var Ob=me((az,Rb)=>{"use strict";var{C:Nb}=or(),Lb=nr(),zb=15.3,k8=37.1,Cb=Nb.z1+.9,E8=Nb.z1+.7+16-.6;Rb.exports=(e,t)=>{let o=t.isPhone?36:80,n=11,r=()=>(n=n*16807%2147483647,(n-1)/2147483646),a=[];for(let l=0;l<o;l++){let f=.35+Math.pow(r(),1.8)*2.4;a.push([zb+r()*(k8-zb),f,Cb+r()*(E8-Cb),r()])}let i=[],s=[];a.forEach(l=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(f=>{i.push(f[0],f[1]),s.push(...l)})});let c=e({vert:`
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
		}`,attributes:{corner:i,seed:s},count:i.length/2,uniforms:{time:e.context("time"),night:()=>Lb.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){Lb.night>.01&&c()}}});var tu=me((iz,ra)=>{"use strict";var Pb=nr(),ei=gi(),S8=nc(),as=Math.PI,ft=e=>(+e).toFixed(4),Pa=e=>`vec3(${ft(e[0])}, ${ft(e[1])}, ${ft(e[2])})`,Go={x0:-2.05,z0:41.45,z1:47.55,top:5.1},mo=-.55,Gn=-2,tn=42.25,An=43.65,ba=45.35,Pr=46.75,Kn=2.75,oa=.12,A8=(mo+Gn)/2,zo={x:-1.3,y:1.42,w:.42,h:.52,z:An,cell:.026},Gt={x0:-1.85,x1:-.75,top:.98,z0:An-.3,z1:An-.02},xa={x0:-1.44,x1:-1.16,y0:Gt.top-.002,y1:Gt.top+.018},na={cx:-1.3,cz:An-.165,w:.2,d:.255,y:Gt.top+.0012},ir={x:-1.03,z:An-.14,r:.042,h:.075},Ho={x:-.86,z:An-.12,h:.085,r:.019};Ho.flame=[Ho.x,Gt.top+.012+Ho.h+.028,Ho.z];var eu={a:[ir.x-.004,Gt.top+.03,ir.z+.004],b:[ir.x-.13,Gt.top+.34,ir.z-.12]},on=[-1.5,2.42,44.66],Sn=[-1.78,1.95,tn+.09],ya={x:-1.32,z:44.08,y:.64,heading:.32},Db={window:{eye:[-1.3,1.33,42.8],target:[zo.x,1.37,An],fov:54},paper:{eye:[-1.3,1.4,43.23],target:[na.cx,Gt.top,na.cz+.01],fov:40},front:{eye:[1.6,1.62,43],target:[-.9,1.35,43],fov:55},bay:{eye:[4.2,2.1,44.6],target:[-1,1.9,44.5],fov:55}},yr={z0:(tn+An)/2+.03,z1:(tn+An)/2+.56,y0:.98,y1:1.78,x:mo+.03,cell:.047};Db.peek={eye:[-1.2,1.42,42.95],target:[ei.PLAY.stoolX-ei.OFF[0],.85,ei.PLAY.keyFront+.2],fov:30};var rs={ink:null,inkDirty:!1,fold:0,slide:0,shown:!0,active:!1};function Ib(){return`
	// a quatrefoil hole in the brass (g: metres across the window from its centre)
	float grilleHole(vec2 g) {
		vec2 q = fract(g / ${ft(zo.cell)} + 0.5) - 0.5;
		float d = min(min(length(q - vec2(0.17, 0.0)), length(q + vec2(0.17, 0.0))),
		              min(length(q - vec2(0.0, 0.17)), length(q + vec2(0.0, 0.17))));
		d = min(d, length(q) - 0.04);
		return 1.0 - smoothstep(0.15, 0.19, d);
	}
	// how much of the lamp's light reaches p (on the penitent's side) through the window
	float throughGrille(vec3 p, float soft) {
		vec3 d = p - ${Pa(on)};
		if (d.z > -0.001) return 0.0;
		float t = (${ft(zo.z)} - ${ft(on[2])}) / d.z;
		vec2 g = (${Pa(on)} + d * t).xy - vec2(${ft(zo.x)}, ${ft(zo.y)});
		float inWin = (1.0 - smoothstep(${ft(zo.w/2-.01)}, ${ft(zo.w/2)} + soft, abs(g.x))) *
		              (1.0 - smoothstep(${ft(zo.h/2-.01)}, ${ft(zo.h/2)} + soft, abs(g.y)));
		// the lamp is not a point: the pattern blurs the further it falls
		// from the brass
		float pen = 0.045 * abs(p.z - ${ft(zo.z)}) / abs(${ft(zo.z)} - ${ft(on[2])}) / ${ft(zo.cell)};
		vec2 qc = fract(g / ${ft(zo.cell)} + 0.5) - 0.5;
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
		vec3 c = ${Pa(Ho.flame)};
		vec3 d = c - p;
		float s = 1.0;
		// the pot: a short upright cylinder
		vec2 a = vec2(${ft(ir.x)}, ${ft(ir.z)}) - p.xz;
		vec2 dd = d.xz;
		float t = clamp(dot(a, dd) / max(dot(dd, dd), 1e-5), 0.0, 1.0);
		float r = length(p.xz + dd * t - vec2(${ft(ir.x)}, ${ft(ir.z)}));
		float y = p.y + d.y * t;
		s *= mix(1.0, 0.25, (1.0 - smoothstep(${ft(ir.r*.7)}, ${ft(ir.r*1.6)}, r)) * (1.0 - smoothstep(${ft(Gt.top+ir.h*.8)}, ${ft(Gt.top+ir.h*1.3)}, y)));
		// the quill: a thin capsule
		vec3 qa = ${Pa(eu.a)}, qb = ${Pa(eu.b)};
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
		bool inB1 = p.z < ${ft(An)} && p.z > ${ft(tn-.04)} && p.x < ${ft(mo+.02)};
		bool inPriest = p.z >= ${ft(An)} && p.z < ${ft(ba)} && p.x < ${ft(mo)};
		bool inB2 = p.z >= ${ft(ba)} && p.z < ${ft(Pr+.04)} && p.x < ${ft(mo)};
		// how open to the hall it is
		float open = 1.0;
		if (inB1) open = mix(0.7, 1.1, smoothstep(${ft(Gn)}, ${ft(mo)}, p.x));
		if (inPriest) open = 0.16;
		if (inB2) open = 0.10;
		// deeper into the bay, a little less of the hall's light
		open *= mix(0.62, 1.0, smoothstep(${ft(Go.x0)}, 0.3, p.x));
		// the stair hall's candlelight (it stands there now: see stairhall.js)
		vec3 rs;
		vec3 col = roomLight(p + ${Pa(ei.OFF)}, N, V, gloss, rs) * 1.25 * open;
		spec += rs * open;
		// the lamp, warm, behind the brass
		vec3 Ld = ${Pa(on)} - p;
		float dl = length(Ld);
		vec3 L = Ld / dl;
		float T = inPriest ? 1.0 : (inB1 ? throughGrille(p, 0.0) : 0.0);
		vec3 lampCol = vec3(1.0, 0.70, 0.40) * mix(3.2, 1.0, night);
		vec3 lamp = lampCol * T * max(dot(N, L), 0.0) / (1.0 + dl * dl * 1.6);
		col += lamp;
		spec += lampCol * T * pow(max(dot(N, normalize(L + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss / (1.0 + dl * dl * 1.6);
		// the little lamp in the open booth
		if (inB1) {
			vec3 Sd = ${Pa(Sn)} - p;
			float ds = length(Sd);
			vec3 Ls = Sd / ds;
			vec3 sc = vec3(1.0, 0.72, 0.42) * mix(1.5, 0.35, night);
			col += sc * (max(dot(N, Ls), 0.0) * 0.8 + 0.2) / (0.15 + ds * ds * 1.6);
			spec += sc * pow(max(dot(N, normalize(Ls + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss * 0.6 / (0.15 + ds * ds * 1.6);
		}
		// the candle
		if (night > 0.01) {
			vec3 Cd = ${Pa(Ho.flame)} - p;
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
	}`}var Dn={WOOD:0,CARVED:1,VELVET:2,CUSHION:3,BRASS:4,INKGLASS:5,QUILL:6,LAMPGLASS:7,DARKWOOD:8};function Gb(){let e=[],t=[],o=[],n=[],r=[],a=(l,f)=>[l[0]-f[0],l[1]-f[1],l[2]-f[2]],i=(l,f)=>[l[1]*f[2]-l[2]*f[1],l[2]*f[0]-l[0]*f[2],l[0]*f[1]-l[1]*f[0]],s=l=>{let f=Math.hypot(l[0],l[1],l[2])||1;return[l[0]/f,l[1]/f,l[2]/f]},c={pos:e,nrm:t,kind:o,uv:n,idx:r,norm:s,cross:i,sub:a};return c.v=(l,f,u,h)=>(e.push(l[0],l[1],l[2]),t.push(f[0],f[1],f[2]),o.push(u),n.push(h?h[0]:0,h?h[1]:0),e.length/3-1),c.quad=(l,f,u,h,p,v)=>{let d=s(i(a(f,l),a(h,l)));v=v||[[0,0],[1,0],[1,1],[0,1]];let m=c.v(l,d,p,v[0]),g=c.v(f,d,p,v[1]),y=c.v(u,d,p,v[2]),b=c.v(h,d,p,v[3]);r.push(m,g,y,m,y,b)},c.box=(l,f,u,h,p,v,d)=>{let m=(g,y,b,M,w,_,S,G)=>c.quad(g,y,b,M,d,[[w,S],[_,S],[_,G],[w,G]]);m([h,f,u],[h,f,v],[h,p,v],[h,p,u],u,v,f,p),m([l,f,v],[l,f,u],[l,p,u],[l,p,v],v,u,f,p),m([l,p,u],[h,p,u],[h,p,v],[l,p,v],l,h,u,v),m([l,f,v],[h,f,v],[h,f,u],[l,f,u],l,h,v,u),m([l,f,v],[h,f,v],[h,p,v],[l,p,v],l,h,f,p),m([h,f,u],[l,f,u],[l,p,u],[h,p,u],h,l,f,p)},c.tube=(l,f,u,h)=>{h=h||6;let p=e.length/3;for(let v=0;v<l.length;v++){let d=l[Math.max(0,v-1)],m=l[Math.min(l.length-1,v+1)],g=s(a(m,d)),y=Math.abs(g[1])>.9?[1,0,0]:[0,1,0],b=s(i(g,y)),M=i(b,g),w=typeof f=="function"?f(v/(l.length-1)):f;for(let _=0;_<=h;_++){let S=_/h*as*2,G=Math.cos(S),R=Math.sin(S),q=[b[0]*G+M[0]*R,b[1]*G+M[1]*R,b[2]*G+M[2]*R];c.v([l[v][0]+q[0]*w,l[v][1]+q[1]*w,l[v][2]+q[2]*w],q,u,[v/(l.length-1),_/h])}}for(let v=0;v<l.length-1;v++)for(let d=0;d<h;d++){let m=p+v*(h+1)+d,g=m+h+1;r.push(m,m+1,g,m+1,g+1,g)}},c.lathe=(l,f,u,h,p)=>{p=p||20;let v=e.length/3;for(let d=0;d<u.length;d++){let[m,g]=u[d],y=u[Math.max(0,d-1)],b=u[Math.min(u.length-1,d+1)],M=b[0]-y[0],w=b[1]-y[1];for(let _=0;_<=p;_++){let S=_/p*as*2,G=Math.cos(S),R=Math.sin(S),q=s([w*G,-M,w*R]);c.v([l+G*m,g,f+R*m],q,h,[_/p,d/(u.length-1)])}}for(let d=0;d<u.length-1;d++)for(let m=0;m<p;m++){let g=v+d*(p+1)+m,y=g+p+1;r.push(g,y,g+1,g+1,y,y+1)}},c.spire=(l,f,u,h,p,v)=>{let d=[[-h,-h],[h,-h],[h,h],[-h,h]];for(let m=0;m<4;m++){let g=d[m],y=d[(m+1)%4],b=[l+g[0],u,f+g[1]],M=[l+y[0],u,f+y[1]],w=[l,p,f],_=s(i(a(w,b),a(M,b))),S=c.v(b,_,v,[0,0]),G=c.v(M,_,v,[1,0]),R=c.v(w,_,v,[.5,1]);r.push(S,R,G)}},c.orient=()=>{for(let l=0;l<r.length;l+=3){let[f,u,h]=[r[l],r[l+1],r[l+2]],p=m=>[e[m*3],e[m*3+1],e[m*3+2]],v=i(a(p(u),p(f)),a(p(h),p(f))),d=[0,1,2].map(m=>t[f*3+m]+t[u*3+m]+t[h*3+m]);v[0]*d[0]+v[1]*d[1]+v[2]*d[2]<0&&(r[l+1]=h,r[l+2]=u)}return c},c}function Jh(e,t,o,n){if(e<=t)return o;let r=e-t;return r>=n?0:Math.max(0,Math.sqrt(n*n-r*r)-(n-o))}var Qo={ys:1.78,a:.56,r:.78};Qo.apex=Qo.ys+Math.sqrt(Qo.r*Qo.r-(Qo.r-Qo.a)*(Qo.r-Qo.a));function T8(){let e=Gb(),t=Dn.WOOD,o=Dn.CARVED,n=Dn.DARKWOOD,r=.06;e.box(Gn,0,tn,mo+.08,oa,Pr,n),e.box(Gn,Kn-.06,tn-.04,mo+.1,Kn,Pr+.04,t),e.box(mo,Kn-.2,tn-.06,mo+.12,Kn-.06,Pr+.06,t),e.box(mo+.02,Kn,tn-.08,mo+.14,Kn+.07,Pr+.08,n),e.box(Gn,oa,tn,Gn+.04,Kn-.06,Pr,t);for(let[f,u,h]of[[tn-r,tn,-1],[Pr,Pr+r,1]]){e.box(Gn,0,f,mo+.08,Kn,u,t);let p=h<0?f-.018:u;e.box(Gn+.18,.45,Math.min(p,p+.018),mo-.12,2.35,Math.max(p,p+.018),n),e.box(Gn+.26,.55,Math.min(p,p+.03*h),mo-.2,2.25,Math.max(p,p+.03*h),t)}{let f=An-.02,u=An+.02,h=zo.x-zo.w/2,p=zo.x+zo.w/2,v=zo.y-zo.h/2,d=zo.y+zo.h/2;e.box(Gn,oa,f,mo,xa.y0,u,t),e.box(Gn,xa.y0,f,xa.x0,xa.y1,u,t),e.box(xa.x1,xa.y0,f,mo,xa.y1,u,t),e.box(Gn,xa.y1,f,mo,v,u,t),e.box(Gn,v,f,h,d,u,t),e.box(p,v,f,mo,d,u,t),e.box(Gn,d,f,mo,Kn-.06,u,t);let m=.05,g=f-.025;e.box(h-m,v-m,g,p+m,v,f,n),e.box(h-m,d,g,p+m,d+m,f,n),e.box(h-m,v,g,h,d,f,n),e.box(p,v,g,p+m,d,f,n),e.box(h-m-.02,d+m,g-.015,p+m+.02,d+m+.03,f,t),e.box(xa.x0-.01,xa.y1,f-.006,xa.x1+.01,xa.y1+.008,f,Dn.BRASS)}{let f=yr,u=mo+.008,h=mo+.052;e.box(u,f.y0,f.z0-.035,h,f.y1,f.z0,n),e.box(u,f.y0,f.z0,h,f.y0+.04,f.z1,n),e.box(u,f.y1-.04,f.z0,h,f.y1,f.z1,n),e.box(u+.008,oa,f.z0-.035,h-.008,f.y0,f.z1,t),e.box(h-.008,oa+.12,f.z0+.03,h,f.y0-.08,f.z1-.06,n),e.box(u-.004,f.y0-.012,f.z0-.045,h+.012,f.y0,f.z1,Dn.BRASS)}e.box(Gn,oa,ba-.02,mo,Kn-.06,ba+.02,t),e.box(Gt.x0,Gt.top-.035,Gt.z0,Gt.x1,Gt.top,Gt.z1,t),e.tube([[Gt.x0,Gt.top-.018,Gt.z0],[Gt.x1,Gt.top-.018,Gt.z0]],.02,t,8);for(let f of[Gt.x0+.1,Gt.x1-.1]){let u=[];for(let h=0;h<=8;h++){let p=h/8;u.push([f,Gt.top-.04-.22*p,Gt.z1-.02-.22*Math.cos(p*as/2)])}e.tube(u,.018,n,6)}e.box(Gn+.06,.12,tn,mo-.1,.44,tn+.42,n),e.box(Gn+.08,.44,tn+.01,mo-.12,.52,tn+.41,Dn.CUSHION),e.box(Gn+.06,.12,Pr-.42,mo-.1,.44,Pr,n),e.box(Sn[0]-.05,Sn[1]-.16,tn,Sn[0]+.05,Sn[1]-.02,tn+.012,Dn.BRASS),e.tube([[Sn[0],Sn[1]-.09,tn+.012],[Sn[0],Sn[1]-.09,Sn[2]-.01],[Sn[0],Sn[1]-.05,Sn[2]]],.006,Dn.BRASS,6),e.lathe(Sn[0],Sn[2],[[0,Sn[1]-.05],[.028,Sn[1]-.035],[.034,Sn[1]+.01],[.024,Sn[1]+.06],[.026,Sn[1]+.065]],Dn.LAMPGLASS,16),e.box(ya.x-.22,.12,ya.z-.24,ya.x+.22,ya.y-.05,ya.z+.16,n),e.box(ya.x-.24,ya.y-.05,ya.z-.26,ya.x+.24,ya.y,ya.z+.18,Dn.CUSHION),e.tube([[on[0],Kn-.06,on[2]],[on[0],on[1]+.07,on[2]]],.005,Dn.BRASS,5),e.lathe(on[0],on[2],[[0,on[1]+.09],[.03,on[1]+.08],[.02,on[1]+.06]],Dn.BRASS,12),e.lathe(on[0],on[2],[[0,on[1]-.06],[.035,on[1]-.04],[.045,on[1]],[.035,on[1]+.05],[.018,on[1]+.07]],Dn.LAMPGLASS,16);let a=mo,i=mo+r;function s(f,u,h){let p=(f+u)/2,v=40,d=[];for(let g=0;g<=v;g++)d.push(oa+(Kn-.2-oa)*g/v);let m=[];d.forEach(g=>m.push(g));for(let g=1;g<24;g++)m.push(Qo.ys+(Qo.apex-Qo.ys)*g/24);m.sort((g,y)=>g-y);for(let g=0;g<m.length-1;g++){let y=m[g],b=m[g+1];if(b-y<1e-4)continue;let M=h?Jh(y,Qo.ys,Qo.a,Qo.r):0,w=h?Jh(b,Qo.ys,Qo.a,Qo.r):0,_=(S,G)=>[S,G];e.quad([i,y,p-M],[i,y,f],[i,b,f],[i,b,p-w],t,[_(p-M,y),_(f,y),_(f,b),_(p-w,b)]),e.quad([i,y,u],[i,y,p+M],[i,b,p+w],[i,b,u],t,[_(u,y),_(p+M,y),_(p+w,b),_(u,b)]),(M>0||w>0)&&(e.quad([a,y,p-M],[i,y,p-M],[i,b,p-w],[a,b,p-w],n),e.quad([i,y,p+M],[a,y,p+M],[a,b,p+w],[i,b,p+w],n),e.quad([a,y,f],[a,y,p-M],[a,b,p-w],[a,b,f],t),e.quad([a,y,p+M],[a,y,u],[a,b,u],[a,b,p+w],t))}if(e.box(a,Kn-.2,f,i,Kn-.06,u,t),e.box(i,Kn-.42,f+.05,i+.012,Kn-.24,u-.05,o),h){let g=[];for(let y=0;y<=30;y++){let b=y/30,M=b<.5?oa+(Qo.apex-oa)*(b*2):Qo.apex-(Qo.apex-oa)*((b-.5)*2),w=b<.5?-1:1;g.push([i+.01,Math.min(M,Qo.apex-.002),p+w*(Jh(M,Qo.ys,Qo.a,Qo.r)+.03)])}e.tube(g,.022,n,6)}}s(tn,An,!0),s(ba,Pr,!0);{let f=An,u=ba,h=(f+u)/2;e.box(a,oa,f,i,Kn-.06,u,t);let p={ys:1.85,a:.55,r:.8},v=[];for(let d=0;d<=40;d++){let m=d/40,g=p.ys+Math.sqrt(p.r*p.r-(p.r-p.a)*(p.r-p.a)),y=m<.5?.35+(g-.35)*(m*2):g-(g-.35)*((m-.5)*2),b=m<.5?-1:1;v.push([i+.012,Math.min(y,g-.002),h+b*Jh(y,p.ys,p.a,p.r)])}v.push(v[0]),e.tube(v,.02,n,6),e.box(i,.95,h-.22,i+.015,1.3,h+.22,o),e.box(i,.35,h-.42,i+.01,.75,h+.42,n),e.tube([[i+.03,1.12,u-.13],[i+.06,1.12,u-.13],[i+.06,1.12,u-.2]],.009,Dn.BRASS,6)}[tn-.02,An,ba,Pr+.02].forEach((f,u)=>{let h=u===1||u===2,p=.075,v=Kn+(h?.62:.4);e.box(mo+.06,0,f-p,mo+.06+2*p,v,f+p,t),e.box(mo+.04,v-.04,f-p-.02,mo+.08+2*p,v,f+p+.02,n);let d=mo+.06+p,m=h?.62:.5;e.spire(d,f,v,p*.95,v+m,t);for(let g=1;g<=3;g++){let y=v+m*g/4.2,b=p*.95*(1-g/4.2)+.02;for(let[M,w]of[[1,0],[-1,0],[0,1],[0,-1]])e.tube([[d+M*(b-.02),y-.02,f+w*(b-.02)],[d+M*(b+.015),y+.03,f+w*(b+.015)]],.008,n,4)}e.lathe(d,f,[[0,v+m-.02],[.03,v+m+.03],[.022,v+m+.07],[0,v+m+.1]],t,10)});let l=(f,u,h)=>{let p=(f+u)/2,v=mo+.075,d=Kn+.07,m=d+h,g=[1,0,0],y=e.v([v,d,f],g,o,[f,d]),b=e.v([v,d,u],g,o,[u,d]),M=e.v([v,m,p],g,o,[p,m]);e.idx.push(y,b,M);let w=e.v([v-.04,d,f],[-1,0,0],t),_=e.v([v-.04,d,u],[-1,0,0],t),S=e.v([v-.04,m,p],[-1,0,0],t);e.idx.push(w,S,_);let G=[],R=[];for(let P=0;P<=10;P++){let H=P/10;G.push([v+.02,d+h*H,f+(p-f)*H]),R.push([v+.02,d+h*H,u+(p-u)*H])}e.tube(G,.022,n,6),e.tube(R,.022,n,6);for(let P=2;P<=8;P+=2)for(let H of[G[P],R[P]])e.tube([H,[H[0]+.01,H[1]+.06,H[2]+(H===G[P]?-.02:.02)]],.01,n,4);e.lathe(v,p,[[0,m],[.035,m+.06],[.022,m+.12],[0,m+.16]].map(([P,H])=>[P,H]),t,10);let q=Math.min(.17,h*.32),T=d+h*.38,B=[];for(let P=0;P<=24;P++){let H=P/24*as*2;B.push([v+.012,T+Math.sin(H)*q,p+Math.cos(H)*q])}e.tube(B,.012,n,5)};l(tn-.02,An,.52),l(An,ba,.82),l(ba,Pr+.02,.52),e.lathe(ir.x,ir.z,[[0,Gt.top],[.036,Gt.top+.001],[ir.r,Gt.top+.012],[ir.r*1.02,Gt.top+.035],[.036,Gt.top+.052],[.02,Gt.top+.062],[.016,Gt.top+.068]],Dn.INKGLASS,24),e.lathe(ir.x,ir.z,[[.016,Gt.top+.064],[.021,Gt.top+.066],[.022,Gt.top+.075],[.016,Gt.top+.076],[0,Gt.top+.072]],Dn.BRASS,20);{let f=eu.a,u=eu.b,h=26,p=y=>{let b=Math.sin(y*as)*.025;return[f[0]+(u[0]-f[0])*y+b*.6,f[1]+(u[1]-f[1])*y+b*.4,f[2]+(u[2]-f[2])*y+b]},v=[];for(let y=0;y<=h;y++)v.push(p(y/h));e.tube(v,y=>.0028*(1-.7*y)+6e-4,Dn.QUILL,5);let d=e.norm(e.sub(u,f)),m=e.norm(e.cross(d,[.2,1,.1])),g=e.cross(m,d);for(let y of[-1,1]){let b=e.pos.length/3;for(let M=0;M<=h;M++){let w=M/h,_=p(w),S=w<.28?0:(y>0?.03:.02)*Math.sin(as*Math.pow((w-.28)/.72,.75)),G=S*.25,R=[_[0]+m[0]*y*S-g[0]*G,_[1]+m[1]*y*S-g[1]*G,_[2]+m[2]*y*S-g[2]*G];e.v(_,g,Dn.QUILL,[w,0]),e.v(R,g,Dn.QUILL,[w,y])}for(let M=0;M<h;M++){let w=b+M*2;e.idx.push(w,w+2,w+1,w+1,w+2,w+3)}}}return e.orient()}function L8(e,t){let n=Go.top,r=Go.x0;e(r-.35,0,Go.z0-.35,r,n+.35,Go.z1+.35),e(r,0,Go.z0-.35,-.35,n,Go.z0),e(r,0,Go.z1,-.35,n,Go.z1+.35),e(r,n,Go.z0,-.35,n+.35,Go.z1),e(.35,0,Go.z0-.42,.35+.16,n,Go.z0),e(.35,0,Go.z1,.35+.16,n,Go.z1+.42),e(.35,n,Go.z0-.5,.35+.18,n+.42,Go.z1+.5),e(.35,n+.42,Go.z0-.6,.35+.26,n+.52,Go.z1+.6),e(.35,0,Go.z0-.5,.35+.22,.42,Go.z0),e(.35,0,Go.z1,.35+.22,.42,Go.z1+.5),e(-.35-.01,0,Go.z0,.35+.12,.02,Go.z1),t(r,Go.z0,-.35,Go.z1)}ra.exports=e=>{let t=Gi(),o=Pb.GLSL,n=T8(),r=`
	precision highp float;
	${o}
	uniform float time;
	${t.lanternGLSL()}
	${ei.roomGLSL()}
	${Ib()}
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
		}`,attributes:{position:n.pos,normal:n.nrm,kind:n.kind,uv:n.uv},elements:n.idx});function s(le,ie,pe,Qe){let wt=[],Fe=[],st=[],yt=[],Bt=[],Be=mo-.02,ct=Qo.apex+.08,dt=oa+.015;for(let Rt=0;Rt<=40;Rt++){let so=Rt/40,zt=ct+(dt-ct)*so;for(let mt=0;mt<=90;mt++){let be=mt/90,ot=pe?.2+.13*so*so:ie-le,Ct=le+be*ot,ht=pe?.05+.02*so:.035+.01*Math.sin(be*7),Xe=be*Qe*as*2+Math.sin(so*2+be*5)*.6,go=Be-ht*(.5+.5*Math.sin(Xe))-(pe?.02*so:0),no=[1,0,-(-ht*.5*Math.cos(Xe)*Qe*as*2/ot)],Xt=Math.hypot(no[0],no[1],no[2]);wt.push(go,zt,Ct),Fe.push(no[0]/Xt,0,no[2]/Xt),st.push(2),yt.push(Math.sin(Xe),so)}}for(let Rt=0;Rt<40;Rt++)for(let so=0;so<90;so++){let zt=Rt*91+so,mt=zt+90+1;Bt.push(zt,mt,zt+1,zt+1,mt,mt+1)}for(let Rt=0;Rt<Bt.length;Rt+=3){let[so,zt,mt]=[Bt[Rt],Bt[Rt+1],Bt[Rt+2]],be=Xe=>[wt[Xe*3],wt[Xe*3+1],wt[Xe*3+2]],ot=[0,1,2].map(Xe=>be(zt)[Xe]-be(so)[Xe]),Ct=[0,1,2].map(Xe=>be(mt)[Xe]-be(so)[Xe]);ot[1]*Ct[2]-ot[2]*Ct[1]<0&&(Bt[Rt+1]=mt,Bt[Rt+2]=zt)}return{pos:wt,nrm:Fe,kind:st,uv:yt,idx:Bt}}let c=s(tn+.02,tn+.4,!0,6),l=s(ba+.04,Pr-.04,!1,9),f={pos:c.pos.concat(l.pos),nrm:c.nrm.concat(l.nrm),kind:c.kind.concat(l.kind),uv:c.uv.concat(l.uv),idx:c.idx.concat(l.idx.map(le=>le+c.pos.length/3))},u=e({vert:`
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
		}`,attributes:{position:f.pos,normal:f.nrm,uv:f.uv},elements:f.idx}),h=e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec2 corner;
		varying vec3 v_pos, v_eye;
		void main() {
			vec3 p = vec3(${ft(zo.x)} + corner.x * ${ft(zo.w/2)}, ${ft(zo.y)} + corner.y * ${ft(zo.h/2)}, ${ft(zo.z)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${r}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = v_pos.xy - vec2(${ft(zo.x)}, ${ft(zo.y)});
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(0.0, 0.0, v_eye.z < ${ft(zo.z)} ? -1.0 : 1.0);
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
		varying vec3 v_pos, v_eye;
		void main() {
			vec3 p = vec3(${ft(yr.x)}, ${ft((yr.y0+yr.y1)/2)} + corner.y * ${ft((yr.y1-yr.y0)/2-.04)}, ${ft((yr.z0+yr.z1)/2)} + corner.x * ${ft((yr.z1-yr.z0)/2)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${r}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = (v_pos.zy - vec2(${ft((yr.z0+yr.z1)/2)}, ${ft((yr.y0+yr.y1)/2)})) * ${ft(zo.cell/yr.cell)};
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(v_eye.x < ${ft(yr.x)} ? -1.0 : 1.0, 0.0, 0.0);
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
			vec3 p = vec3(${ft(zo.x)} + corner.x * 0.75, ${ft(zo.y)} + corner.y * 0.9, ${ft(ba-.03)});
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),d=14,m=[];for(let le=0;le<d;le++)[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(ie=>m.push(ie[0],ie[1],(le+.5)/d));let g=e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 c;
		varying vec3 v_pos;
		void main() {
			// slices across the booth, from the window back towards the bench
			vec3 p = vec3(${ft(A8)} + c.x * ${ft((mo-Gn)/2-.02)}, 0.9 + (c.y + 1.0) * 0.8, ${ft(An-.03)} - c.z * 1.25);
			v_pos = p;
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`
		precision highp float;
		uniform float night, time;
		${Ib().split("// the candle's light is hidden")[0]}
		varying vec3 v_pos;
		void main() {
			float T = throughGrille(v_pos, 0.0);
			float d = length(v_pos - ${Pa(on)});
			// dust drifting in the beam
			float dust = 0.65 + 0.35 * sin(v_pos.x * 23.0 + time * 0.3) * sin(v_pos.y * 17.0 - time * 0.21) * sin(v_pos.z * 19.0 + time * 0.17);
			vec3 col = vec3(1.0, 0.68, 0.36) * T * dust * 0.035 / (0.4 + d * d * 0.5) * mix(1.0, 0.7, night);
			gl_FragColor = vec4(col, 1.0);
		}`.replace("float grilleHole","float grilleHole"),attributes:{c:{buffer:e.buffer(m),size:3}},count:m.length/3,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}}),y=(()=>{if(typeof document=="undefined")return null;let le=document.createElement("canvas");le.width=512,le.height=652;let ie=le.getContext("2d");ie.fillStyle="#cdb38a",ie.fillRect(0,0,le.width,le.height);let pe=7,Qe=()=>(pe=pe*1664525+1013904223>>>0,pe/4294967296);for(let Fe=0;Fe<2400;Fe++){ie.fillStyle=`rgba(${Qe()<.5?"90,62,30":"245,230,200"},${.03+Qe()*.05})`;let st=Qe()*le.width,yt=Qe()*le.height;ie.fillRect(st,yt,1+Qe()*14,1)}for(let Fe=0;Fe<26;Fe++){let st=Qe()*le.width,yt=Qe()*le.height,Bt=20+Qe()*90,Zt=ie.createRadialGradient(st,yt,0,st,yt,Bt);Zt.addColorStop(0,`rgba(120,80,35,${.04+Qe()*.06})`),Zt.addColorStop(1,"rgba(120,80,35,0)"),ie.fillStyle=Zt,ie.fillRect(st-Bt,yt-Bt,Bt*2,Bt*2)}let wt=ie.createRadialGradient(le.width/2,le.height/2,le.width*.3,le.width/2,le.height/2,le.height*.72);return wt.addColorStop(0,"rgba(110,70,30,0)"),wt.addColorStop(1,"rgba(110,70,30,0.38)"),ie.fillStyle=wt,ie.fillRect(0,0,le.width,le.height),le})(),b=y?e.texture({data:y,min:"linear",mag:"linear",flipY:!1}):e.texture(),M=e.texture({shape:[8,8],data:new Uint8Array(8*8*4)}),w=[18,24],_=[],S=[];for(let le=0;le<=w[1];le++)for(let ie=0;ie<=w[0];ie++)_.push(ie/w[0],le/w[1]);for(let le=0;le<w[1];le++)for(let ie=0;ie<w[0];ie++){let pe=le*(w[0]+1)+ie,Qe=pe+w[0]+1;S.push(pe,pe+1,Qe,pe+1,Qe+1,Qe)}let G=e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale, fold, slide;
		attribute vec2 st;
		varying vec3 v_pos, v_n, v_eye;
		varying vec2 v_st;
		void main() {
			// s across (texture left = +x), t from the near edge (0) to the far (1)
			float s = st.x, t = st.y;
			float x = ${ft(na.cx+na.w/2)} - s * ${ft(na.w)};
			float zNear = ${ft(na.cz-na.d/2)};
			vec3 p = vec3(x, ${ft(na.y)}, zNear + t * ${ft(na.d)});
			vec3 n = vec3(0.0, 1.0, 0.0);
			// a slight cockle
			p.y += 0.0012 * sin(s * 7.0 + t * 3.0) * sin(t * 5.0);
			// the near half folds up and over onto the far half
			if (t < 0.5) {
				float a = fold * 3.14159 * 0.985;
				float dd = (0.5 - t) * ${ft(na.d)};
				float zf = zNear + 0.5 * ${ft(na.d)};
				p.z = zf - dd * cos(a);
				p.y = ${ft(na.y)} + dd * sin(a) + 0.0016 * fold;
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
			if (v_pos.z > ${ft(An+.015)}) discard;
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
		}`,attributes:{st:{buffer:e.buffer(_),size:2}},elements:S,uniforms:{fold:()=>rs.fold,slide:()=>rs.slide,paperTex:b,inkTex:M},cull:{enable:!1}}),R=Gb();R.lathe(Ho.x,Ho.z,[[0,Gt.top],[.048,Gt.top+.002],[.052,Gt.top+.012],[.046,Gt.top+.014],[.022,Gt.top+.012],[0,Gt.top+.012]],Dn.BRASS,24),R.lathe(Ho.x,Ho.z,[[0,Gt.top+.012],[Ho.r,Gt.top+.012],[Ho.r*1.02,Gt.top+.012+Ho.h*.6],[Ho.r,Gt.top+.012+Ho.h],[Ho.r*.75,Gt.top+.012+Ho.h-.004],[0,Gt.top+.012+Ho.h-.008]],9,20),R.tube([[Ho.x,Gt.top+.012+Ho.h-.008,Ho.z],[Ho.x+.001,Gt.top+.012+Ho.h+.012,Ho.z]],.0012,8,4),R.orient();let q=e({vert:a,frag:`${r}
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
				float up = smoothstep(${ft(Gt.top+Ho.h*.4)}, ${ft(Gt.top+.012+Ho.h)}, v_pos.y);
				col += vec3(1.0, 0.55, 0.22) * up * 0.22 * candleFlicker();
			}
			gl_FragColor = vec4(col * night, 1.0);
		}`,attributes:{position:R.pos,normal:R.nrm,kind:R.kind,uv:R.uv},elements:R.idx}),T=e({vert:`
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
			vec3 p = ${Pa(Ho.flame)} + right * corner.x * size.x + vec3(0.0, 1.0, 0.0) * corner.y * size.y;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{halo:e.prop("halo")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),B=[0,0],P=e({uniforms:{view:e.prop("view")}}),H=new Float32Array(16);function se(le){S8.translate(H,le.view,ei.OFF),P({view:H},()=>Z(le))}function Z(le){let ie=le&&le.reflected;if(i(),u(),h(),p(),rs.ink&&rs.inkDirty){let pe=rs.ink;B[0]!==pe.width||B[1]!==pe.height?(M({data:pe,min:"linear",mag:"linear",flipY:!1}),B=[pe.width,pe.height]):M.subimage(pe),rs.inkDirty=!1}rs.shown&&G(),Pb.night>.01&&(q(),ie||(T({halo:1}),T({halo:0}))),ie||(v(),g())}return se};ra.exports.addBay=L8;ra.exports.BAY=Go;ra.exports.OFF=ei.OFF;ra.exports.STATE=rs;var Fb=e=>[e[0]+ei.OFF[0],e[1]+ei.OFF[1],e[2]+ei.OFF[2]];ra.exports.SHOTS=Object.fromEntries(Object.entries(Db).map(([e,t])=>[e,Object.assign({},t,{eye:Fb(t.eye),target:Fb(t.target)})]));ra.exports.SEAT=ya;ra.exports.LAMP=on;ra.exports.SCONCE=Sn;ra.exports.GRILLE=zo;ra.exports.PAPER=na;ra.exports.ZONE={FRONT:mo,BACK:Gn,ZA:tn,ZB:An,ZC:ba,ZD:Pr}});var fp=me((sz,Jb)=>{"use strict";var kc=nr(),z8=Mh(),np="love-me-like-i-am-already-dead",C8=3621206063,N8=e=>{let t=2166136261;for(let o=0;o<e.length;o++)t^=e.charCodeAt(o),t=Math.imul(t,16777619)>>>0;return t>>>0},Yl=/[?&]redroom\b/.test(location.search),$b="a-private-eulogy",R8=[.5,.31],n0=Yl||/[?&]studio\b/.test(location.search),Zs=[.32,.02,.05],O8=[.3,.37],Vl=e=>Math.max(0,Math.min(1,e)),Js=e=>(e=Vl(e),e*e*(3-2*e)),P8=e=>(e=Vl(e),e*e*e),t0=(e,t,o)=>e+(t-e)*o,qb=(e,t,o)=>[t0(e[0],t[0],o),t0(e[1],t[1],o),t0(e[2],t[2],o)],e0={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0,glitch:0},I8=`
.cons-btn {
	display: inline-flex; align-items: center; gap: 10px;
	min-height: 40px; margin: 2px 0 14px; padding: 0 18px 0 14px;
	border: 1px solid rgba(190,40,60,.7); border-radius: 999px;
	background: rgba(120,10,25,.18); color: #f4ecdf;
	font: 500 12px/1.2 Georgia, serif; letter-spacing: .16em; text-transform: uppercase;
	cursor: pointer; pointer-events: auto;
	transition: background .35s ease, border-color .35s ease, box-shadow .35s ease;
}
.cons-btn:hover { background: rgba(150,15,35,.32); border-color: #d9475d; box-shadow: 0 0 26px rgba(200,30,60,.25); }
.cons-btn:focus-visible { outline: 2px solid #e9cf9a; outline-offset: 3px; }
.cons-btn svg { flex: none; }
.cons-ask {
	position: fixed; inset: 0; z-index: 420;
	display: flex; align-items: center; justify-content: center;
	background: rgba(6,3,4,.55); opacity: 0; transition: opacity .6s ease;
	font-family: 'Cormorant Garamond', Georgia, serif; color: #f4ecdf;
	backdrop-filter: blur(3px); -webkit-backdrop-filter: blur(3px);
}
.cons-ask.on { opacity: 1; }
.cons-card {
	position: relative; width: min(460px, 88vw); padding: 34px 32px 30px;
	background: rgba(24,10,12,.82); border: 1px solid rgba(190,40,60,.45); border-radius: 4px;
	box-shadow: 0 30px 80px rgba(0,0,0,.6); text-align: center;
}
.cons-kicker { display: block; font: 500 11px/1.4 Georgia, serif; letter-spacing: .26em; text-transform: uppercase; color: #d98a96; margin-bottom: 18px; }
.cons-q { font-size: 23px; line-height: 1.4; font-style: italic; margin: 0 0 22px; }
.cons-form { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; }
.cons-in {
	flex: 1 1 180px; min-width: 0; height: 42px; padding: 0 14px;
	background: rgba(0,0,0,.35); color: #f4ecdf; border: 1px solid rgba(244,236,223,.3); border-radius: 3px;
	font: 18px Georgia, serif; text-align: center;
}
.cons-in:focus { outline: none; border-color: #d9475d; }
.cons-go, .cons-flower {
	height: 42px; padding: 0 20px; border-radius: 999px; cursor: pointer;
	border: 1px solid rgba(190,40,60,.75); background: rgba(140,15,35,.35); color: #f4ecdf;
	font: 500 12px/1 Georgia, serif; letter-spacing: .18em; text-transform: uppercase;
}
.cons-go:hover, .cons-flower:hover { background: rgba(170,20,45,.55); }
.cons-flower { height: 48px; padding: 0 26px; display: inline-flex; align-items: center; gap: 10px; }
.cons-msg { min-height: 1.4em; margin: 16px 0 0; font-size: 17px; font-style: italic; color: #e9b8c0; opacity: 0; transition: opacity .5s ease; }
.cons-msg.on { opacity: 1; }
.cons-x {
	position: absolute; top: 8px; right: 10px; width: 34px; height: 34px;
	background: none; border: 0; color: rgba(244,236,223,.6); font-size: 22px; cursor: pointer;
}
.cons-x:hover { color: #f4ecdf; }
.cons-shake { animation: cons-shake .45s ease; }
@keyframes cons-shake { 20%, 60% { transform: translateX(-7px); } 40%, 80% { transform: translateX(7px); } }

/* in the room */
body.in-conservatory .tour,
body.in-conservatory #museum-mobile-controls,
body.in-conservatory .painting-plaque { display: none !important; }
.cons-ui { position: fixed; top: 16px; right: 16px; z-index: 410; display: flex; gap: 10px; opacity: 0; transition: opacity 1s ease; pointer-events: none; }
.cons-ui.on { opacity: 1; pointer-events: auto; }
.cons-ui button, .st-ui {
	height: 40px; min-width: 40px; padding: 0 14px; border-radius: 999px;
	border: 1px solid rgba(244,236,223,.4); background: rgba(12,10,8,.35); color: #f4ecdf;
	font: 500 11px/1 Georgia, serif; letter-spacing: .18em; text-transform: uppercase; cursor: pointer;
	backdrop-filter: blur(3px); -webkit-backdrop-filter: blur(3px);
}
.cons-ui .cons-sky { font-size: 18px; padding: 0; width: 40px; letter-spacing: 0; text-transform: none; }
.cons-name {
	position: fixed; left: 50%; top: 13vh; transform: translateX(-50%); z-index: 405;
	font: italic 400 clamp(20px, 3.2vw, 34px)/1.3 'Cormorant Garamond', Georgia, serif; color: #f4ecdf;
	text-shadow: 0 2px 24px rgba(0,0,0,.85); letter-spacing: .04em; text-align: center; white-space: nowrap;
	opacity: 0; transition: opacity 2.2s ease; pointer-events: none;
}
.cons-name.on { opacity: .92; }
.cons-note {
	position: fixed; left: 50%; bottom: 12vh; transform: translate(-50%, 10px); z-index: 410;
	width: min(440px, 86vw); padding: 22px 26px 24px; text-align: center;
	background: rgba(20,8,10,.72); border: 1px solid rgba(190,40,60,.4); border-radius: 4px;
	font-family: 'Cormorant Garamond', Georgia, serif; color: #f4ecdf;
	opacity: 0; transition: opacity 1.2s ease, transform 1.2s ease; pointer-events: none;
	backdrop-filter: blur(3px); -webkit-backdrop-filter: blur(3px);
}
.cons-note.on { opacity: 1; transform: translate(-50%, 0); pointer-events: auto; }
.cons-note p { margin: 0 0 16px; font-size: 20px; line-height: 1.4; font-style: italic; }
`,Vb='<svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8.5c-2.2 0-3.6-1.6-3.6-3.4C8.4 3.6 10 2.5 12 3.6c2-1.1 3.6 0 3.6 1.5 0 1.8-1.4 3.4-3.6 3.4z"/><path d="M12 8.5V21"/><path d="M12 15c-2.5-.2-4-1.6-4.4-3.4 2.3.1 3.8 1.1 4.4 3.4z"/><path d="M12 13c1.8-.4 3-1.6 3.3-3 -1.7.1-2.9 1-3.3 3z"/></svg>',F8='<svg aria-hidden="true" width="16" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 21V9a6 6 0 0 1 12 0v12"/><path d="M4 21h16"/><path d="M14.5 13.5v1"/></svg>',ou={},nn=Yl?"red":"cons";function ip(e){return e=e||nn,ou[e]||(ou[e]=new Promise((t,o)=>{let n=e==="red"?"__redRoom":"__conservatoryRoom";if(window[n]){t(window[n]);return}let r=document.createElement("script");r.src=e==="red"?"redroom.js?v=0aa4f22874":"conservatory.js?v=022bdd0255",r.async=!0,r.onload=()=>window[n]?t(window[n]):o(new Error("The room did not load")),r.onerror=()=>{ou[e]=null,o(new Error("The room could not be fetched"))},document.head.appendChild(r)})),ou[e]}var D8={cons:["res/pond/lilypad.webp","res/pond/petals.webp","res/studio/rock_col.webp","res/studio/rock_nrm.webp","res/studio/oldstone_col.webp","res/studio/oldstone_nrm.webp","res/studio/floor_col.webp","res/studio/floor_nrm.webp","res/nymph.bin","res/studio/grave.webp","res/studio/grave.bin","res/conservatory/flower.webp","res/conservatory/flower.bin","res/conservatory/rose_lo.bin","res/tree/leaves.webp","res/studio/plants.webp","res/studio/vleaves.webp","res/studio/rose_col.webp","res/studio/rose.bin","res/pond/gravel.jpg","res/koi.webp","res/koi.bin"],red:["res/redroom/memories.webp","res/redroom/polaroids.webp","res/redroom/print.webp","res/redroom/woman_all.bin","res/redroom/woman_0.webp","res/redroom/veil.bin","res/redroom/tv_crt.bin","res/redroom/tv_old.bin","res/redroom/tv_sony.bin","res/redroom/proj_body.bin","res/redroom/proj_0.webp","res/redroom/enlarger_all.bin","res/redroom/enlarger_0.webp","res/redroom/camera_all.bin","res/redroom/rose_all.bin","res/redroom/rose_0.webp"]},Hb={};function Bb(e){if(Hb[e]||n0||typeof fetch=="undefined")return;Hb[e]=!0;let t=()=>{ip(e).catch(()=>{});let o=D8[e].slice(),n=()=>{let r=o.shift();if(!r)return;let a;try{a=fetch(r,{priority:"low"})}catch(i){a=fetch(r)}a.then(i=>i.blob()).catch(()=>{}).finally(n)};n(),n()};window.requestIdleCallback?window.requestIdleCallback(t,{timeout:1500}):setTimeout(t,300)}function G8(e){return ip(e).then(t=>{if(oi[e]=t,!r0[e]){let o=performance.now();r0[e]=t.studio(Xl),/tourdebug/.test(location.search)&&console.log("room built in "+Math.round(performance.now()-o)+" ms")}return t})}var Xb="api/roses",Yb="cons-roses-v1",Ub="cons-rose-day",Kb=()=>{try{let e=JSON.parse(localStorage.getItem(Yb));return Array.isArray(e)?e:[]}catch(e){return[]}};function $8(){return fetch(Xb,{cache:"no-store"}).then(e=>{if(!e.ok)throw new Error("no roses");return e.json()}).then(e=>({first:e.first||0,roses:Array.isArray(e.roses)?e.roses:[],shared:!0})).catch(()=>({first:0,roses:Kb(),shared:!1}))}function sp(e,t){return $8().then(o=>{let n=oi.cons;return n&&n.studio.setRoses(o.roses,o.first,t||0,e),o})}function q8(){let e=new Date().toISOString().slice(0,10),t=null;try{t=localStorage.getItem(Ub)}catch(r){}if(t===e&&!/tourdebug/.test(location.search))return;try{localStorage.setItem(Ub,e)}catch(r){}let o=Math.random(),n=()=>{try{let r=Kb();return r.push({t:Date.now(),s:o}),localStorage.setItem(Yb,JSON.stringify(r.slice(-300))),r}catch(r){return[{t:Date.now(),s:o}]}};fetch(Xb,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({s:o})}).then(r=>{if(!r.ok)throw new Error("not kept");return r.json()}).then(r=>{if(!Array.isArray(r.roses))throw new Error("not kept");let a=oi.cons;a&&a.studio.setRoses(r.roses,r.first||0,r.added?1:0,!!r.added)}).catch(()=>{let r=n(),a=oi.cons;a&&a.studio.setRoses(r,0,1,!0)})}var Xl=null,nu=null,ur=null,Kl=null,r0={},oi={};function au(e){!oi[e]||!r0[e]||(ur=oi[e],Kl=r0[e],nu&&nu.useStudio&&nu.useStudio(ur.studio))}var jb=null,ia=null,Tn="idle",Qb=0,Mc=0,is=null,aa=null,ki=null,Wl=null,Ia=null,br=null,$n=null,H8=!1;function ti(e,t,o){let n=document.createElement(e);return t&&(n.className=t),o!==void 0&&(n.innerHTML=o),n}function o0(e){Tn=e,Qb=Mc}function iu(e){return e=e||nn,ip(e).then(t=>{if(oi[e]=t,!r0[e]){let o=performance.now();r0[e]=t.studio(Xl),/tourdebug/.test(location.search)&&console.log("room built in "+Math.round(performance.now()-o)+" ms")}return e===nn&&au(e),t})}var rp=!1;function B8(e){if(e&&e.slug===np&&Bb("cons"),e&&e.slug===$b&&Bb("red"),e&&e.slug===$b&&!n0)return j8(e);if(!e||e.slug!==np||n0||rp)return null;let t=ti("button","cons-btn",F8+"<span>The Conservatory of Unsaid Things</span>");return t.type="button",t.setAttribute("aria-label","The Conservatory of Unsaid Things: answer its question to go in"),t.addEventListener("pointerdown",o=>o.stopPropagation()),t.addEventListener("click",o=>{o.stopPropagation(),W8(e)}),t}var U8='<svg aria-hidden="true" width="16" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c-3 0-5 2.6-5 6.2 0 2.5-1 4.4-2.6 6.3C6.6 18 9 21 12 21s5.4-3 7.6-5.5C18 13.6 17 11.7 17 9.2 17 5.6 15 3 12 3z"/><path d="M9.5 9.5c.7 1.6 1.6 2.5 2.5 2.5s1.8-.9 2.5-2.5"/></svg>';function j8(e){let t=ti("button","cons-btn",U8+"<span>Step through the door of her thoughts</span>");return t.type="button",t.setAttribute("aria-label","Step through the door of her thoughts: go into the room of A Private Eulogy"),t.addEventListener("pointerdown",o=>o.stopPropagation()),t.addEventListener("click",o=>{if(o.stopPropagation(),Tn==="idle"){try{let n=window.AudioContext||window.webkitAudioContext;n&&!window.__redAudio&&(window.__redAudio=new n),window.__redAudio&&window.__redAudio.state==="suspended"&&window.__redAudio.resume()}catch(n){}iu("red").catch(n=>console.error(n)),nn="red",au("red"),cp(e)}}),t}function W8(e){if(Tn!=="idle"||rp)return;document.body.classList.add("cons-asking"),setTimeout(()=>{G8("cons").catch(s=>console.error(s))},120);let t=ti("div","cons-ask");t.setAttribute("role","dialog"),t.setAttribute("aria-label","The Conservatory of Unsaid Things");let o=ti("div","cons-card",`
		<button type="button" class="cons-x" aria-label="Close">\xD7</button>
		<span class="cons-kicker">The Conservatory of Unsaid Things</span>
		<p class="cons-q">They are offered only at the end,<br>and heal nothing they touch.<br>What are they?</p>
		<form class="cons-form" autocomplete="off">
			<input class="cons-in" type="text" aria-label="Your answer" spellcheck="false" autocapitalize="off">
			<button type="submit" class="cons-go">Answer</button>
		</form>
		<p class="cons-msg" aria-live="polite"></p>`);t.appendChild(o),document.body.appendChild(t),requestAnimationFrame(()=>t.classList.add("on"));let n=o.querySelector(".cons-in"),r=o.querySelector(".cons-msg"),a=()=>{t.classList.remove("on"),document.body.classList.remove("cons-asking"),setTimeout(()=>t.remove(),600),window.removeEventListener("keydown",i,!0)},i=s=>{s.stopPropagation(),s.key==="Escape"&&a()};window.addEventListener("keydown",i,!0),["pointerdown","wheel","touchstart","touchmove"].forEach(s=>t.addEventListener(s,c=>c.stopPropagation(),{passive:!0})),t.addEventListener("click",s=>{s.target===t&&a()}),o.querySelector(".cons-x").addEventListener("click",a),setTimeout(()=>n.focus(),350),o.querySelector("form").addEventListener("submit",s=>{s.preventDefault();let c=n.value.trim().replace(/[.!?]+$/,"").toLowerCase();if(N8(c)===C8){nn="cons",au("cons"),iu("cons").then(()=>sp(!1,0)).catch(l=>console.error(l)),o.innerHTML=`
				<button type="button" class="cons-x" aria-label="Close">\xD7</button>
				<span class="cons-kicker">The Conservatory of Unsaid Things</span>
				<p class="cons-q">Flowers.</p>
				<button type="button" class="cons-flower">${Vb}<span>Bring a flower while it still matters</span></button>`,o.querySelector(".cons-x").addEventListener("click",a),o.querySelector(".cons-flower").addEventListener("click",()=>{a(),cp(e)}),setTimeout(()=>{let l=o.querySelector(".cons-flower");l&&l.focus()},50);return}rp=!0,n.disabled=!0,o.querySelector(".cons-go").disabled=!0,r.textContent="Not this time.",r.classList.add("on"),document.querySelectorAll(".cons-btn").forEach(l=>l.remove()),setTimeout(a,1800)})}function cp(e){let t=e.paintingPosition,o=e.width||1.6,n=e.height||1.1,r=e.side==="right",a=r?[-1,0,0]:[1,0,0],i=r?[0,0,1]:[0,0,-1],s=nn==="red"?R8:O8,c=(s[0]-.5)*o,l=(.5-s[1])*n;aa={at:[t[0]+i[0]*c-a[0]*.04,t[1]+l,t[2]+i[2]*c],n:a},is=null,H8=!1,Wl=null,document.body.classList.add("in-conservatory"),o0("zoom"),V8()}function V8(){if(Ia){Ia.classList.add("on");let o=Ia.querySelector(".cons-sky");o&&(o.style.display=nn==="red"?"none":""),nn!=="red"&&!$n&&($n=ti("div","cons-name","The Conservatory of Unsaid Things"),document.body.appendChild($n)),window.addEventListener("keydown",ap);return}Ia=ti("div","cons-ui");let e=ti("button","cons-sky",kc.night>.5?"\u2600":"\u263E");e.type="button",e.setAttribute("aria-label","Day or night"),e.addEventListener("click",o=>{o.stopPropagation(),kc.toggle(),setTimeout(()=>{e.textContent=kc.night>.5?"\u2600":"\u263E"},50)});let t=ti("button","cons-back","\u2190 Back to the gallery");t.type="button",t.setAttribute("aria-label","Back to the gallery"),t.addEventListener("click",o=>{o.stopPropagation(),lp()}),Ia.appendChild(e),Ia.appendChild(t),nn==="red"&&(e.style.display="none"),["pointerdown","pointerup"].forEach(o=>Ia.addEventListener(o,n=>n.stopPropagation())),document.body.appendChild(Ia),requestAnimationFrame(()=>Ia.classList.add("on")),nn!=="red"&&($n=ti("div","cons-name","The Conservatory of Unsaid Things"),document.body.appendChild($n)),window.addEventListener("keydown",ap)}var ap=e=>{e.key==="Escape"&&(Tn==="room"||Tn==="wait")&&lp()};function Wb(){br&&br.remove(),br=ti("div","cons-note",`
		<p>You brought a flower while it still matters.<br>Lay it down.</p>
		<button type="button" class="cons-flower">${Vb}<span>Place the flower</span></button>`),["pointerdown","pointerup"].forEach(e=>br.addEventListener(e,t=>t.stopPropagation())),br.querySelector("button").addEventListener("click",e=>{e.stopPropagation(),ia&&ia.placeFlower(),setTimeout(()=>{Tn==="room"&&nn==="cons"&&q8()},6500),br.classList.remove("on"),setTimeout(()=>{br&&(br.remove(),br=null)},1300)}),document.body.appendChild(br),requestAnimationFrame(()=>br.classList.add("on"))}function lp(){Tn!=="room"&&Tn!=="wait"||(o0("leave"),br&&br.classList.remove("on"),$n&&$n.classList.remove("on"))}var ru=!1;function X8(){Tn==="room"&&(ru=!0,Zb())}function Zb(){ia&&(ia.dispose(),ia=null),ur&&(ur.studio.setFlower(-1),ur.studio.setGuide({vis:!1})),br&&(br.remove(),br=null),Ia&&Ia.classList.remove("on"),$n&&($n.remove(),$n=null),window.removeEventListener("keydown",ap),document.body.classList.remove("in-conservatory"),o0("back")}function Y8(e,t,o){if(Mc=e,n0){if(!ia)return null;let r=ia.update(e);return{eye:r.eye,target:r.target,fov:r.fov,roll:r.roll,moving:r.moving,look:Object.assign({},e0,r.look)}}if(Tn==="idle")return o&&(ki=o),null;let n=e-Qb;if(Tn==="zoom"){if(!is&&(is=t?{eye:t.eye.slice(),target:t.target.slice(),fov:t.fov,roll:t.roll||0}:null,ki=o||e0,!is))return null;let a=Vl(n/2.8),i=Js(a),s=P8(a),c=[aa.at[0]+aa.n[0]*.09,aa.at[1],aa.at[2]+aa.n[2]*.09],l=qb(is.eye,c,t0(i,1,s*.6)),f=qb(is.target,aa.at,Js(a*1.6)),u=ki&&ki.letterbox||0,h=Object.assign({},e0,ki,{fade:Js((a-.72)/.28),fadeColor:nn==="red"?[0,0,0]:Zs,aperture:0,letterbox:nn==="red"?u:t0(u,.55,Js(a))});return a>=1&&o0("wait"),{eye:l,target:f,fov:t0(is.fov,26,i),roll:t0(is.roll,0,i),look:h,moving:!0}}if(Tn==="wait"){let r=ur&&Kl&&ur===oi[nn]&&Kl===r0[nn];if(r&&nn!=="red"&&ur.tour.introStart){Wl===null&&(Wl=Mc);let c=Mc-Wl;(ur.studio.ready()&&c>.6||c>3)&&(ia=ur.tour({intro:!0,onLanded:Wb,onFlowerSettled:()=>{}}),$n&&setTimeout(()=>{$n&&Tn==="room"&&$n.classList.add("on"),setTimeout(()=>{$n&&$n.classList.remove("on")},5200)},2600),Wl=null,o0("room"));let l=ur.tour.introStart(),f=.92+.08*Math.sin(Mc*2.1);return{eye:l.eye,target:l.target,fov:l.fov,roll:0,look:Object.assign({},e0,{letterbox:.55,fade:1,fadeColor:[Zs[0]*f,Zs[1]*f,Zs[2]*f]}),moving:!0}}r&&ur.studio.ready()&&n>(nn==="red"?.9:.35)&&(ia=nn==="red"?ur.tour({onExpel:X8}):ur.tour({intro:!0,onLanded:Wb,onFlowerSettled:()=>{}}),$n&&setTimeout(()=>{$n&&Tn==="room"&&$n.classList.add("on"),setTimeout(()=>{$n&&$n.classList.remove("on")},5200)},2600),o0("room"));let i=[aa.at[0]+aa.n[0]*.09,aa.at[1],aa.at[2]+aa.n[2]*.09],s=nn==="red"?1:.92+.08*Math.sin(Mc*2.1);return{eye:i,target:aa.at,fov:26,roll:0,look:Object.assign({},e0,ki,{fade:1,fadeColor:nn==="red"?[0,0,0]:[Zs[0]*s,Zs[1]*s,Zs[2]*s],letterbox:nn==="red"?ki&&ki.letterbox||0:.55}),moving:nn!=="red"}}if(Tn==="room"||Tn==="leave"){let r=ia.update(e),a=Object.assign({},e0,r.look);if(Tn==="leave"){let i=Vl(n/.9);a.fade=Math.max(a.fade||0,Js(i)),a.fadeColor=[0,0,0],i>=1&&Zb()}return{eye:r.eye,target:r.target,fov:r.fov,roll:r.roll,moving:r.moving,look:a}}if(Tn==="back"){let a=Vl(n/(ru?2.4:1.2));if(a>=1)return o0("idle"),ru=!1,null;if(!t)return null;let i=0,s=1-Js(a);return ru&&(s=1-Js(n/.9),i=Math.max(0,.7*(1-n/.8))+(n>1.7&&n<1.82?.55:0)),{eye:t.eye,target:t.target,fov:t.fov,roll:t.roll||0,look:Object.assign({},e0,o||ki,{fade:s,fadeColor:[0,0,0],glitch:i}),moving:!0}}return null}typeof window!="undefined"&&/tourdebug/.test(location.search)&&(window.__consDebug={go(e,t){nn=t,au(t),iu(t).then(()=>{t==="cons"&&sp(!1,0)}).catch(o=>console.error(o)),cp(e)},leave:lp,roses(e,t,o){let n=[];for(let r=0;r<e;r++)n.push({t:r,s:r*.618%1});oi.cons&&oi.cons.studio.setRoses(n,0,t||0,!!o)},place(){ia&&ia.placeFlower()}});Jb.exports={SLUG:np,PREVIEW:n0,box:z8,init(e){Xl=e.regl,nu=e.post;let t=document.createElement("style");t.textContent=I8,document.head.appendChild(t),jb=Xl.texture({width:1,height:1,data:[0,0,0,0]}),n0&&K8()},button:B8,update:Y8,get draw(){return Kl},get active(){return Tn!=="idle"||n0},get alwaysMirror(){return nn==="red"&&!!Kl&&(Yl||Tn==="room"||Tn==="wait")},bake(){return ur?ur.studio.bakedSun(Xl):jb}};function K8(){let e=document.createElement("style");if(e.textContent=".tour, #museum-mobile-controls, .painting-plaque { display: none !important; } .st-ui { position: fixed; top: 18px; right: 18px; z-index: 30; width: 42px; padding: 0; font-size: 20px; letter-spacing: 0; }",document.head.appendChild(e),iu().then(()=>{ia=ur.tour({}),Yl||sp(!1,0)}).catch(o=>console.error(o)),Yl)return;let t=document.createElement("button");t.type="button",t.className="st-ui",t.setAttribute("aria-label","Day or night"),t.textContent="\u263E",document.body.appendChild(t),t.addEventListener("pointerdown",o=>o.stopPropagation()),t.addEventListener("click",o=>{o.stopPropagation(),kc.toggle(),setTimeout(()=>{t.textContent=kc.night>.5?"\u2600":"\u263E"},50)}),window.addEventListener("keydown",o=>{o.key==="n"&&kc.toggle()})}});var hp=me((cz,t5)=>{"use strict";function Q8(e){let t=e>>>0||1;return function(){return t=t*1664525+1013904223>>>0,t/4294967296}}var e5={stroke:.05,letter:.045,word:.15,comma:.28,stop:.45,line:.25,para:.6},Z8=["th","ng","er"];function J8(e,t,o){o=Object.assign({ink:"#2a1d12",xh:14,speed:23,lineHeight:2.85,seed:7,width:.12,pace:.45},o||{});let n=e.getContext("2d"),r={};Object.keys(e5).forEach(d=>{r[d]=e5[d]*o.pace});let a=[],i=0,s=0,c=0,l=[];function f(d,m){let g=Q8(o.seed),y=o.xh,b={},M=H=>{let se=t[H];if(!se)return null;let Z=Math.floor(g()*se.length);return se.length>1&&Z===b[H]&&(Z=(Z+1)%se.length),b[H]=Z,se[Z]},w=H=>{if(t[H])return{g:M(H),sc:1};let se=H.toLowerCase();return t[se]?{g:M(se),sc:/[A-Z]/.test(H)?1.32:1}:null},_=[],S=.15,G=0,R=0,q=(g()-.5)*.02,T=m/y,B=d.split(/\n\s*\n/);B.forEach((H,se)=>{H.replace(/\s+/g," ").trim().split(" ").forEach(le=>{let ie=[];for(let Fe=0;Fe<le.length;Fe++){let st=le.substr(Fe,2).toLowerCase();if(Z8.indexOf(st)>=0&&t[st]&&g()<.55&&le[Fe]===le[Fe].toLowerCase()){ie.push({ch:st,gl:{g:M(st),sc:1}}),Fe++;continue}let yt=w(le[Fe]);yt&&yt.g&&ie.push({ch:le[Fe],gl:yt})}let pe=ie.map(()=>.17+g()*.07),Qe=ie.reduce((Fe,st,yt)=>Fe+st.gl.g.w*st.gl.sc+pe[yt],0);G>0&&G+Qe>T&&(G=0,R++,S+=r.line,q=(g()-.5)*.02),ie.forEach((Fe,st)=>{let yt=Fe.gl.g,Bt=Fe.gl.sc*(.95+g()*.1),Zt=(g()-.5)*.06,Oo=(g()-.5)*.08+q*G,Be=G,ct=R*o.lineHeight+1.9+Oo,dt=Math.cos(Zt),Rt=Math.sin(Zt),so=mt=>[(Be+(mt[0]*dt-mt[1]*Rt)*Bt)*y,(ct+(mt[0]*Rt+mt[1]*dt)*Bt)*y],zt=(mt,be)=>{let ot=0;for(let ht=1;ht<mt.length;ht++)ot+=Math.hypot(mt[ht][0]-mt[ht-1][0],mt[ht][1]-mt[ht-1][1]);let Ct=Math.max(o.minDur||(be?.06:.07),ot/(o.speed*y));_.push({pts:mt,L:ot,start:S,dur:Ct,dot:be}),S+=Ct};if(yt.s.forEach((mt,be)=>{be>0&&(S+=r.stroke),zt(mt.map(so),!1)}),yt.dot){let mt=yt.s[0][0];yt.s.forEach(ot=>ot.forEach(Ct=>{Ct[1]<mt[1]&&(mt=Ct)}));let be=so([mt[0]+.1,-1.36]);S+=r.stroke*1.4,zt([be,[be[0]+y*.05,be[1]+y*.03]],!0)}S+=r.letter*(.6+g()*.8),G+=yt.w*Bt+pe[st]});let wt=le[le.length-1];S+=/[.!?]/.test(wt)?r.stop:/[,;:]/.test(wt)?r.comma:r.word,G+=.55+g()*.2}),se<B.length-1&&(G=0,R+=1.6,S+=r.para)});let P=(R+1)*o.lineHeight*y+y*1.55;return{strokes:_,total:S,height:P}}function u(d,m){if(o.fixed){let g=o.fixed;n.setTransform(1,0,0,1,g.mx,g.my),n.clearRect(-g.mx,-g.my,e.width,e.height)}else{let g=Math.min(window.devicePixelRatio||1,2);e.width=Math.round(d*g),e.height=Math.round(m*g),e.style.height=m+"px",e.style.width=d+"px",n.setTransform(g,0,0,g,0,0),n.clearRect(0,0,d,m)}n.strokeStyle=o.ink,n.fillStyle=o.ink,n.lineCap="round",n.lineJoin="round",o.shadow&&(n.shadowColor=o.shadow,n.shadowBlur=o.shadowBlur||6)}let h=d=>d<.5?2*d*d:1-Math.pow(-2*d+2,2)/2;function p(d,m){let g=l[d.i]||0;if(m<=g)return;let y=o.width*o.xh,b=0;for(let M=1;M<d.pts.length;M++){let w=d.pts[M-1],_=d.pts[M],S=Math.hypot(_[0]-w[0],_[1]-w[1]),G=b,R=b+S;if(b=R,R<=g||S===0)continue;if(G>=m)break;let q=Math.max(0,(g-G)/S),T=Math.min(1,(m-G)/S),B=[w[0]+(_[0]-w[0])*q,w[1]+(_[1]-w[1])*q],P=[w[0]+(_[0]-w[0])*T,w[1]+(_[1]-w[1])*T],H=(G+R)/2/(d.L||1),se=.72+.28*Math.sin(Math.PI*Math.min(1,Math.max(0,H)));n.lineWidth=y*se,n.globalAlpha=.86+.14*se,n.beginPath(),n.moveTo(B[0],B[1]),n.lineTo(P[0],P[1]),n.stroke()}d.dot&&g===0&&(n.globalAlpha=1,n.beginPath(),n.arc(d.pts[0][0],d.pts[0][1],y*.75,0,Math.PI*2),n.fill()),l[d.i]=m}function v(d){let m=(d-c)/1e3;for(let g=0;g<a.length;g++){let y=a[g];if(y.start>m)break;let b=Math.min(1,(m-y.start)/y.dur);p(y,h(b)*y.L)}if(o.onPen){let g=0;for(;g+1<a.length&&a[g+1].start<=m;)g++;a[g]&&o.onPen(a[g].pts[0][1])}m<i?s=requestAnimationFrame(v):o.onDone&&o.onDone()}return{write(d,m){cancelAnimationFrame(s);let g=o.fixed?e.width-2*o.fixed.mx:e.parentElement.clientWidth,y=f(d,g);a=y.strokes,i=y.total;let b=typeof o.maxTime=="function"?o.maxTime(d):o.maxTime;if(b&&i>b){let w=b/i;a.forEach(_=>{_.start*=w,_.dur*=w}),i=b}a.forEach((w,_)=>{w.i=_}),l=[],u(g,y.height);let M=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(m||M){a.forEach(w=>p(w,w.L));return}return c=performance.now(),s=requestAnimationFrame(v),i},finish(){cancelAnimationFrame(s),a.forEach(d=>p(d,d.L)),o.onDone&&o.onDone()},stop(){cancelAnimationFrame(s)}}}t5.exports=J8});var dp=me((lz,o5)=>{"use strict";var up=nr(),eA='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7"/></svg>',tA='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M19.5 14.6A8 8 0 0 1 9.4 4.5a8 8 0 1 0 10.1 10.1z"/></svg>';o5.exports=function(t){let o=document.createElement("button");o.type="button",o.className=t+" light-toggle";let n=()=>{let r=up.isNight;o.innerHTML=r?eA:tA,o.setAttribute("aria-label",r?"Switch to day":"Switch to night"),o.title=r?"Day":"Night",o.setAttribute("aria-pressed",r?"true":"false")};return n(),up.onChange(n),["mousedown","pointerdown"].forEach(r=>o.addEventListener(r,a=>a.stopPropagation())),o.addEventListener("click",r=>{r.stopPropagation(),up.toggle()}),o}});var i5=me((fz,a5)=>{"use strict";var Ln=tu(),oA=gi(),nA=hp(),rA="81efb912-50a2-4fcd-b5e8-c3a28eecbe93",n5=100,Ei=e=>Math.max(0,Math.min(1,e)),jr=(e,t,o)=>{let n=Ei((o-e)/(t-e));return n*n*(3-2*n)},Fa=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,wa=(e,t,o)=>e+(t-e)*o,Zl=(e,t,o)=>[wa(e[0],t[0],o),wa(e[1],t[1],o),wa(e[2],t[2],o)];function a0(e,t){let o=e.length-1,n=Ei(t)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,i=e[Math.max(0,r-1)],s=e[r],c=e[r+1],l=e[Math.min(o,r+2)];return[0,1,2].map(f=>.5*(2*s[f]+(-i[f]+c[f])*a+(2*i[f]-5*s[f]+4*c[f]-l[f])*a*a+(-i[f]+3*s[f]-3*c[f]+l[f])*a*a*a))}var su=e=>({eye:e.eye.slice(),target:e.target.slice(),fov:e.fov,roll:0});function pp(e,t,o){return{eye:Zl(e.eye,t.eye,o),target:Zl(e.target,t.target,o),fov:wa(e.fov,t.fov,o),roll:wa(e.roll||0,t.roll||0,o)}}var Jl=oA.PLAY,Da=[Jl.stoolX,1,Jl.keyFront+.25],cu=[Jl.stoolX,Jl.keyTop+.03,Jl.keyFront-.05],mp=e=>{let t=(15+110*e)*Math.PI/180,o=2.1+.4*e;return[Da[0]+Math.cos(t)*o,1.15+.4*e,Da[2]+Math.sin(t)*o]},Ec=[{eye:mp(1),target:[Da[0],.92,Da[2]-.15],fov:46,aperture:.6},{eye:[-6.93,3.2,45.85],target:[-6.93,.77,45.3],fov:34,aperture:.6,to:cu},{eye:[Da[0]+1,1.14,Da[2]+1.72],target:[cu[0]+.05,.8,cu[2]+.05],fov:40,aperture:1,to:cu}],r5=(e,t)=>Math.hypot(e[0]-t[0],e[1]-t[1],e[2]-t[2]),lu=e=>({fade:0,letterbox:.55,exposure:1.3,focus:r5(e.eye,e.to||Da),aperture:e.aperture,vignette:.42,shafts:0}),vp={fade:0,letterbox:.55,exposure:2.1,focus:6.2,aperture:.55,vignette:.45,shafts:0},Sc={fade:0,letterbox:.55,exposure:2,focus:.82,aperture:1.1,vignette:.48,shafts:0},Ql={fade:0,letterbox:.55,exposure:1.8,focus:.42,aperture:1.3,vignette:.5,shafts:0},aA=`
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
`;a5.exports=function(t){let{root:o,avatar:n}=t,r=document.createElement("style");r.textContent=aA,document.head.appendChild(r);let a=document.createElement("div");a.className="conf-ui",a.innerHTML=`
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
		</div>`,o.appendChild(a);let i=a.querySelector(".conf-write"),s=a.querySelector("textarea"),c=a.querySelector('[data-act="send"]'),l=a.querySelector(".conf-hint"),f=a.querySelector(".conf-close"),u=a.querySelector(".conf-final"),h=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,p=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;s.addEventListener("input",()=>{let be=s.value.match(new RegExp("^\\s*(\\S+\\s+){0,"+(n5-1)+"}\\S+"));(s.value.trim()?s.value.trim().split(/\s+/).length:0)>n5&&be&&(s.value=be[0]),c.disabled=!s.value.trim()}),["keydown","keyup","keypress"].forEach(be=>s.addEventListener(be,ot=>ot.stopPropagation())),a.addEventListener("pointerdown",be=>be.stopPropagation()),a.addEventListener("click",be=>{let ot=be.target.closest("button");ot&&(be.stopPropagation(),ot.dataset.act==="send"&&se(),ot.dataset.act==="leave"&&ie())});let v=!1,d="",m=0,g=null,y=null,b="",M=null,w=0,_="",S=document.createElement("canvas");S.width=512,S.height=652;function G(be){be!==_&&(_=be,i.classList.toggle("on",be==="write"),l.classList.toggle("on",be==="hint"),f.classList.toggle("on",v&&be==="hint"&&(d==="room"||d==="peek")),u.classList.toggle("on",be==="final"),be==="write"&&setTimeout(()=>{if(d==="write")try{s.focus({preventScroll:!0})}catch(ot){}},900))}function R(be){d=be,m=0}function q(be,ot){if(v)return;v=!0,g={eye:be.eye.slice(),target:be.target.slice(),fov:be.fov,roll:be.roll||0},y=Object.assign({},ot),b="",s.value="",c.disabled=!0,Ln.STATE.fold=0,Ln.STATE.slide=0,Ln.STATE.shown=!0,Ln.STATE.active=!0;let Ct=S.getContext("2d");Ct.setTransform(1,0,0,1,0,0),Ct.clearRect(0,0,S.width,S.height),Ln.STATE.ink=S,Ln.STATE.inkDirty=!0,document.body.classList.add("confessing");let ht=Ec[0],Xe=p?.3:5.5,go=p?.3:3.6;T.i=0,T.u=0,T.T=Xe+go,T.moving=!0,T.rest=0,T.raw=!0,T.lookFrom=y,T.lookTo=lu(ht);let E=[g.eye,[3.4,1.75,44.5],[.3,1.72,44.7],[-2.8,1.5,45.4],mp(0)],no=[g.target,[-3,1.9,44.5],[-6.5,1.3,44.9],[Da[0],1,Da[2]-.1],ht.target];T.path=Xt=>{let xo=Xt*(Xe+go);if(xo<Xe){let wr=xo/Xe,qn=1-Math.cos(wr*Math.PI/2);return{eye:a0(E,qn),target:a0(no,jr(0,1,qn*1.05)),fov:wa(g.fov,52,jr(.4,1,qn)),roll:(g.roll||0)*(1-qn)}}let Eo=(xo-Xe)/go,un=1-Math.pow(1-Eo,2.4);return{eye:mp(un),target:ht.target,fov:wa(52,ht.fov,un),roll:.05*Math.sin(Math.PI*un)}},R("room"),G("")}let T={i:0,u:0,T:1,moving:!1,rest:0,raw:!1,path:null,lookFrom:null,lookTo:null},B=()=>h?"Scroll on":"Swipe up";function P(be){let ot=wt,Ct=Ec[be],ht={eye:ot.eye.slice(),target:ot.target.slice(),fov:ot.fov,roll:ot.roll||0},Xe=Zl(ht.eye,Ct.eye,.5),go=[Xe[0]-Da[0],0,Xe[2]-Da[2]],E=Math.hypot(go[0],go[2])||1,no=[Xe[0]+go[0]/E*.6,Xe[1]+.3,Xe[2]+go[2]/E*.6];T.path=Xt=>{let xo=1-Xt;return{eye:[0,1,2].map(Eo=>xo*xo*ht.eye[Eo]+2*xo*Xt*no[Eo]+Xt*Xt*Ct.eye[Eo]),target:Zl(ht.target,Ct.target,jr(0,1,Xt)),fov:wa(ht.fov,Ct.fov,Xt),roll:ht.roll*xo}},T.lookFrom=H||lu(Ec[T.i]),T.lookTo=lu(Ct),T.i=be,T.u=0,T.moving=!0,T.rest=0,T.raw=!1,T.T=p?.4:Math.max(2.8,Math.min(4.4,r5(ht.eye,Ct.eye)*1+1.6)),G("")}let H=null;function se(){if(d!=="write"||(b=s.value.trim(),!b))return;s.blur(),G("");let be=Math.max(10,Math.min(22,24-b.length/28));M=nA(S,t.glyphs(),{ink:"rgba(30,16,8,0.97)",xh:be,width:.15,seed:11+b.length,speed:60,pace:.2,minDur:.03,maxTime:ot=>2.4+ot.length/160,fixed:{mx:46,my:40},onPen:()=>{Ln.STATE.inkDirty=!0},onDone:()=>{Ln.STATE.inkDirty=!0}}),R("down")}function Z(){try{let be={access_key:rA,subject:"A note left in the confessional",from_name:"Your gallery",message:b,page:location.href,when:new Date().toString()};fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(be),keepalive:!0}).catch(()=>{})}catch(be){}}function le(){d==="ready"&&(Z(),R("fold"),G(""))}function ie(){!v||d==="leave"||(G(""),s.blur(),pe=wt,Qe=H,R("leave"))}let pe=null,Qe=null,wt=null,Fe=Ln.SHOTS.window,st=Ln.OFF,yt=be=>[be[0]+st[0],be[1],be[2]],Bt=[[3.4,1.75,44.5],[.3,1.72,44.5],[-2.5,1.66,45],[-4.6,1.6,46.55],[-7,1.58,47.15],[-9.3,1.55,46.4],yt([1.25,1.5,43.25]),yt([-.55,1.36,42.92])],Zt=[[-3,1.9,44.5],[-6.5,1.5,44.6],[-7,1,44.4],[-7.6,.95,44],[-10.5,1.5,44.6],yt([-1,1.55,43.6]),yt([-1.4,1.35,43.1]),yt([-1.5,1.33,43.3])];function Oo(be){let ot=Fa(Ei(be)),Ct=[g.eye,...Bt,Fe.eye],ht=[g.target,...Zt,Fe.target];return{eye:a0(Ct,ot),target:a0(ht,jr(0,1,ot*1.03)),fov:wa(g.fov,Fe.fov,jr(.6,.97,ot)),roll:(g.roll||0)*(1-ot)}}function Be(be,ot){if(p)return be;let Ct=performance.now()/1e3,ht=.004*ot,Xe=Math.sin(Ct*.61)*.6+Math.sin(Ct*1.37+1.3)*.4,go=Math.sin(Ct*.47+2.1)*.6+Math.sin(Ct*1.13+.4)*.4;return{eye:[be.eye[0]+Xe*ht,be.eye[1]+go*ht*.7,be.eye[2]],target:[be.target[0]+go*ht*1.5,be.target[1]+Xe*ht,be.target[2]],fov:be.fov,roll:be.roll}}function ct(be,ot,Ct){let ht={};for(let Xe in ot)ht[Xe]=typeof ot[Xe]=="number"&&typeof be[Xe]=="number"?wa(be[Xe],ot[Xe],Ct):ot[Xe];return ht}function dt(be){be*=window.__confSpeed||1,m+=be;let ot=su(Fe),Ct=su(Ln.SHOTS.paper),ht,Xe,go=su(Ln.SHOTS.peek);if(d==="room")T.moving?(T.u=Math.min(1,T.u+be/T.T),ht=T.path(T.raw?T.u:Fa(T.u)),Xe=ct(T.lookFrom,T.lookTo,jr(.1,.9,T.u)),T.raw&&(Xe.fade=(y.fade||0)*(1-jr(0,.12,T.u))),T.u>=1&&(T.moving=!1,T.rest=0,l.textContent=B(),G("hint"))):(T.rest+=be,ht=Be(su(Ec[T.i]),2.5),Xe=lu(Ec[T.i]));else if(d==="enter"){let no=Ei(m/(p?.6:9)),Xt=Fa(no),xo=[Rt.eye,[-7.6,1.9,47.6],[-9.6,1.85,45.6],yt([.75,1.5,42.95]),yt([-.25,1.42,42.82]),yt([-.9,1.42,42.82]),go.eye];ht={eye:a0(xo,Xt),target:Zl(Rt.target,go.target,jr(0,.35,Xt)),fov:wa(Rt.fov,go.fov,jr(.3,1,Xt)),roll:0},Xe=ct(so,vp,jr(.2,.9,no)),no>=1&&R("peek")}else if(d==="peek")ht=Be(go,1.5),Xe=vp,m>(p?.5:3.2)&&R("turn");else if(d==="turn"){let E=Ei(m/(p?.4:3.2));ht=pp(go,ot,Fa(E)),Xe=ct(vp,Sc,Fa(E)),E>=1&&(R("write"),G("write"))}else if(d==="write")ht=Be(ot,1),Xe=Sc;else if(d==="down"){let E=Ei(m/(p?.4:2));ht=pp(ot,Ct,Fa(E)),Xe=ct(Sc,Ql,Fa(E)),E>=1&&(w=M.write(b,p)||0,Ln.STATE.inkDirty=!0,R("writing"))}else if(d==="writing")ht=Be(Ct,.6),Xe=Ql,m>w+.8&&(R("ready"),l.textContent=h?"Scroll to fold it and pass it through":"Swipe up to fold it and pass it through",G("hint"));else if(d==="ready")ht=Be(Ct,.6),Xe=Ql;else if(d==="fold"){let E=Ei(m/(p?.3:1.5));Ln.STATE.fold=Fa(E),ht=Be(Ct,.6),Xe=Ql,E>=1&&R("slide")}else if(d==="slide"){let no=Ei(m/(p?.6:3.4));Ln.STATE.slide=Fa(jr(0,.7,no));let Xt=Fa(jr(.35,1,no));ht=pp(Ct,ot,Xt),Xe=ct(Ql,Sc,Xt),no>=1&&(Ln.STATE.shown=!1,R("final"),G("final"))}else if(d==="final")ht=Be(ot,1),Xe=Sc;else if(d==="leave"){let E=p?.6:pe.eye[0]<st[0]-.3?12:7,no=Ei(m/E),Xt={eye:g.eye,target:g.target,fov:g.fov,roll:g.roll},xo=Fa(no),Eo=pe.eye[0]<st[0]-.3,un=Eo?[pe.eye,yt([-.55,1.4,42.8]),yt([1.4,1.55,43.3]),[-9.3,1.58,46.4],[-7,1.6,47.15],[-4.6,1.62,46.55],[-2.2,1.68,44.8],[.6,1.72,44.5],Xt.eye]:[pe.eye,[-3.4,1.7,46.2],[-1.2,1.7,44.8],[.6,1.72,44.5],Xt.eye],wr=Eo?[pe.target,yt([1.5,1.45,43.4]),[-7,1.2,44.6],[-4,1.5,47],[-1.5,1.7,45.5],[1,1.8,44.5],[4,1.8,44.5],[7,1.9,44.2],Xt.target]:[pe.target,[-1.5,1.7,45.2],[2,1.8,44.5],[6,1.9,44.3],Xt.target];if(ht={eye:a0(un,xo),target:a0(wr,xo),fov:wa(pe.fov,Xt.fov,xo),roll:Xt.roll*xo},Xe=ct(Qe||Sc,y,jr(.1,.7,no)),Xe.fade=(y.fade||0)*jr(.82,1,no),no>=1){v=!1,Ln.STATE.active=!1,Ln.STATE.shown=!0,Ln.STATE.fold=0,Ln.STATE.slide=0;let qn=S.getContext("2d");qn.setTransform(1,0,0,1,0,0),qn.clearRect(0,0,S.width,S.height),Ln.STATE.inkDirty=!0,document.body.classList.remove("confessing"),t.onExit&&t.onExit()}}return wt=ht,H=Xe,{camera:ht,look:Xe}}let Rt=null,so=null;function zt(){if(d==="room"){if(T.moving||T.rest<.4)return;T.i<Ec.length-1?P(T.i+1):(Rt=wt,so=H,G(""),R("enter"));return}if(d==="peek"){m>.4&&R("turn");return}d==="ready"?le():d==="writing"&&M&&(M.finish(),m=Math.max(m,w))}function mt(){d==="room"&&!T.moving&&T.rest>.4&&T.i>0&&P(T.i-1)}return{start:q,update:dt,leave:ie,get active(){return v},get stage(){return d},wheel(be){be>8?zt():be<-8&&mt()},swipe(be){be>0?zt():be<0&&mt()},tap(){zt()},key(be){return["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(be)>=0?(zt(),!0):["ArrowUp","ArrowLeft","PageUp"].indexOf(be)>=0?(mt(),!0):be==="Escape"?(ie(),!0):!1},_setNote(be){s.value=be,s.dispatchEvent(new Event("input"))}}}});var v5=me((hz,p5)=>{"use strict";var Ac=nc(),fu=O1(),gp=jf(),iA=sl(),xp=I1(),sA=vr(),hu=!sA.isPhone&&!!(window.matchMedia&&window.matchMedia("(pointer: fine)").matches),{A:sa}=Jr(),{C:sr,PAINTING_X:Cc}=or(),Vr=e=>Math.max(0,Math.min(1,e)),qe=(e,t,o)=>e+(t-e)*o,Fo=(e,t,o)=>[qe(e[0],t[0],o),qe(e[1],t[1],o),qe(e[2],t[2],o)],oo=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],yp=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],Ir=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],Ie=(e,t,o)=>{let n=Vr((o-e)/(t-e));return n*n*(3-2*n)};function cA(e,t,o,n,r,a){if(r<=0)return[e,o];let i=2/n,s=i*r,c=1/(1+s+.48*s*s+.235*s*s*s),l=a*n,f=Math.max(-l,Math.min(l,e-t)),u=e-f,h=(o+i*f)*r,p=(o-i*h)*c,v=u+(f+h)*c;return t-e>0==v>t&&(v=t,p=0),[v,p]}var s5=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,lA=e=>e*e*e,bp=e=>1-Math.pow(1-e,3),hn=e=>-(Math.cos(Math.PI*e)-1)/2;function bn(e,t){let o=e.length-1,n=Vr(t)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,i=e[Math.max(0,r-1)],s=e[r],c=e[r+1],l=e[Math.min(o,r+2)],f=a*a,u=f*a;return[0,1,2].map(h=>.5*(2*s[h]+(-i[h]+c[h])*a+(2*i[h]-5*s[h]+4*c[h]-l[h])*f+(-i[h]+3*s[h]-3*c[h]+l[h])*u))}var Qt=(e,t,o,n)=>({eye:e,target:t,fov:o,roll:n||0});function f0(e,t,o){return Qt(Fo(e.eye,t.eye,o),Fo(e.target,t.target,o),qe(e.fov,t.fov,o),qe(e.roll,t.roll,o))}var Ep=()=>Ie(.75,1.3,window.innerWidth/window.innerHeight),Fr=(e,t)=>f0(e,t,Ep()),uu=[7,3.95,sr.hallEnd-.05],fA=[sr.x1,2.9,sr.zc],Lc=[16.75,4.55,6.75],Sp=[6.92,2.72,14.5],Ga=[7.3,.015,47.1],hA=[Lc,[16.2,4,7],[15.3,3.45,6.4],[14.1,3.2,5.7],[12.2,3.35,6.6],[10,3.75,9.6],[8.2,3.8,12.2],[7.3,3.4,13.8],Sp],uA=[Sp,[7.3,4.6,19.5],[7.6,4.9,23.5],[6.6,4.3,28.5],[7.5,3.2,34],[6.8,2.1,39.5],[7.4,1,44.2],[7.2,.3,46.4],Ga],s0=[Cc[0],3,sr.z0],c0=[Cc[1],3,sr.z0],_p=47.45,d5=4.6,dA=13.2,pA=1.57,ef=[7.55,1.25,46.75],Ap=[17.25,2.42,46],Tp=[26.05,1.95,46],tf=[36.15,.015,44],mu=()=>qe(6.8,6.15,Ep()),vA=[ef,[9.6,1.65,46.2],[12.3,2.05,45.1],[14.6,2.35,44.5],[16.2,2.3,44.7],Ap],mA=[Ap,[20.2,2.05,45.6],[23.2,1.8,45],Tp],l0=[Cc[2],3,sr.z0],Mp=[34.8,1.35,46],cs=[7.89,.03,19.03],c5=.36,l5=13.64,dr=[{side:"left",z:34.5},{side:"left",z:23.5},{side:"left",z:14.6},{side:"right",z:14.6},{side:"right",z:23.5},{side:"right",z:34.5}];function _a(e){let t=e.side==="left"?1:-1;return Fo([7-t*1,3,e.z+t*.2],[7-t*.6,3.25,e.z+t*.13],Ep())}function gA(e){return e.side==="left"?Fr(Qt([8.6,3.9,e.z],[c5,1.45,e.z],76),Qt([8,3.6,e.z+.7],[c5,3.95,e.z-2],46,-.008)):Fr(Qt([5.4,3.9,e.z],[l5,1.45,e.z],76),Qt([6,3.6,e.z-.7],[l5,3.95,e.z+2],46,-.008))}var xA=()=>[tf,[35.6,.5,44.6],[33.2,1.5,45.6],[29,2.3,46.1],[23.5,2.7,45.9],[18.5,2.9,45.4],[14.8,3.1,44.3],[11,3.3,41.8],[7.4,3.4,38.8],[5.4,3.3,36.6],_a(dr[0])],yA=()=>[_a(dr[2]),[3,3.2,13.2],[1.7,3,12],[2.6,3.2,10],[5,3.6,8.9],[7,3.8,8.6],[9,3.6,8.9],[11.4,3.2,10],[12.3,3,12],[11,3.1,13.4],_a(dr[3])],bA=()=>[_a(dr[5]),[9,3.4,31],[7.8,2.8,27.5],[6.8,1.9,24.5],[7.4,1,21],[7.75,.35,19.6],cs],f5={2:{pos:()=>Sp,amp:[.18,.07,.12],tumble:.5},7:{pos:()=>ef,amp:[.12,.09,.1],tumble:.55},8:{pos:()=>Ap,amp:[.1,.08,.08],tumble:.5},9:{pos:()=>Tp,amp:[.09,.06,.07],tumble:.45},10:{pos:()=>Mp,amp:[.07,.04,.06],tumble:.35},12:{pos:()=>_a(dr[0]),amp:[.12,.08,.1],tumble:.5},13:{pos:()=>_a(dr[1]),amp:[.12,.08,.1],tumble:.5},14:{pos:()=>_a(dr[2]),amp:[.12,.08,.1],tumble:.5},15:{pos:()=>_a(dr[3]),amp:[.12,.08,.1],tumble:.5},16:{pos:()=>_a(dr[4]),amp:[.12,.08,.1],tumble:.5},17:{pos:()=>_a(dr[5]),amp:[.12,.08,.1],tumble:.5}},ss=[{name:"corridor",ui:"intro",look:{letterbox:1,exposure:1,focus:14,aperture:.25,vignette:.1},cam(e){let t=.9*(1-Math.exp(-e/14)),o=[0,Math.sin(e*.37)*.025,Math.sin(e*.23)*.06],n=Fr(Qt([sr.x0+.9,1.85,sr.zc+.25],[sr.x1,2.85,sr.zc-.1],64),Qt([sr.x0+1.2,2,sr.zc+.35],[sr.x1,2.6,sr.zc-.15],50));return n.eye=oo(oo(n.eye,[t,0,0]),o),n}},{name:"about",ui:"about",look:{letterbox:.55,exposure:1.32,focus:2.9,aperture:.9,vignette:.12,shafts:.65},cam(e){let t=[Math.sin(e*.21)*.08,Math.sin(e*.33)*.03,-.25*(1-Math.exp(-e/12))],o=Fr(Qt([16.6,1.9,9.2],[17.3,.4,5.6],64),Qt([15,1.35,7.75],[17.55,1.05,5.5],44,-.02));return o.eye=oo(o.eye,t),o}},{name:"sky",ui:"sky",look:{letterbox:.55,exposure:1,focus:2.1,aperture:.45,vignette:.1,shafts:1},cam(e){let t=[Math.sin(e*.12)*.35,Math.sin(e*.2)*.04,(1-Math.cos(e*.12))*.25],o=Fr(Qt([7,1.35,13],[7.2,7.6,20.4],74,.05),Qt([6.6,1.5,12.6],[7.3,7.2,20.8],56,.07));return o.eye=oo(o.eye,t),o}},{name:"master",ui:"master",look:{letterbox:.55,exposure:1.12,focus:8,aperture:.6,vignette:.3,shafts:.5},cam(e){let t=[Math.sin(e*.17)*.05,Math.sin(e*.29)*.02,-.35*(1-Math.exp(-e/16))],o=Fr(Qt([7,3.6,43.7],[7,3.85,uu[2]],74),Qt([7,3.6,41.3],[7,3.95,uu[2]],46));return o.eye=oo(o.eye,t),o}},{name:"story",ui:"story",look:{letterbox:.55,exposure:1,focus:8.1,aperture:.9,vignette:.4,shafts:.4},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],o=Fr(Qt([7,3.9,40.3],[7,1.35,uu[2]],76),Qt([6.3,3.6,41.2],[3.7,3.95,uu[2]],46,-.008));return o.eye=oo(o.eye,t),o}},{name:"leaf",ui:"leaf",look:{letterbox:.55,exposure:1.15,focus:1.25,aperture:1.3,vignette:.35,shafts:.4},cam(e){let t=[Math.sin(e*.2)*.02,Math.sin(e*.3)*.006,0],o=Fr(Qt([7.15,.15,46],[7.3,.04,Ga[2]],50),Qt([7.05,.14,45.9],[7.25,.05,Ga[2]],32));return o.eye=oo(o.eye,t),o}},{name:"steps",ui:"steps",look:{letterbox:.9,exposure:1.2,focus:1.6,aperture:1.4,vignette:.4,shafts:.4},cam(e){let t=[Math.sin(e*.2)*.015,0,0],o=Fr(Qt([7.15,.1,46.3],[7.05,.1,_p],50),Qt([7.1,.12,45.85],[7,.2,_p],30));return o.eye=oo(o.eye,t),o}},{name:"float",ui:"float",look:{letterbox:.55,exposure:1.1,focus:2.2,aperture:.8,vignette:.3,shafts:.6},cam(e){let t=[Math.sin(e*.17)*.05,Math.sin(e*.27)*.02,0],o=Fr(Qt([7.3,.85,45.65],[7.6,1.38,47.1],64),Qt([7.25,.82,45.8],[7.65,1.35,47.1],44));return o.eye=oo(o.eye,t),o}},{name:"painting1",ui:"p1",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],o=Fr(Qt([s0[0],2.3,46.85],[s0[0],1.25,s0[2]],74),Qt([s0[0]-.6,2.55,46.85],[s0[0]+1.9,2.9,s0[2]],46,.008));return o.eye=oo(o.eye,t),o}},{name:"painting2",ui:"p2",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],o=Fr(Qt([c0[0],1.95,46.85],[c0[0],1,c0[2]],74),Qt([c0[0]-.6,2.1,46.85],[c0[0]+1.9,2.75,c0[2]],46,.008));return o.eye=oo(o.eye,t),o}},{name:"painting3",ui:"p3",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.9},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],o=Fr(Qt([l0[0],1.4,46.85],[l0[0],.6,l0[2]],74),Qt([l0[0]-.6,1.45,46.85],[l0[0]+1.9,2,l0[2]],46,.008));return o.eye=oo(o.eye,t),o}},{name:"door",ui:"door",look:{letterbox:.8,exposure:1.05,focus:1.45,aperture:1.1,vignette:.35,shafts:1},cam(e){let t=[Math.sin(e*.2)*.02,Math.sin(e*.3)*.006,0],o=Fr(Qt([34.75,.5,44.15],[sr.x1,.8,43.95],66),Qt([34.75,.45,44.3],[sr.x1,.35,43.95],50));return o.eye=oo(o.eye,t),o}},...dr.map((e,t)=>({name:"hall"+t,ui:"h"+t,look:{letterbox:.55,exposure:1,focus:7.6,aperture:.7,vignette:.35,shafts:.7},cam(o){let n=[Math.sin(o*.15)*.04,Math.sin(o*.25)*.015,Math.sin(o*.11)*.04],r=gA(e);return r.eye=oo(r.eye,n),r}})),{name:"rest",ui:"end",look:{letterbox:.55,exposure:1.05,focus:2.4,aperture:.5,vignette:.4,shafts:1.15},cam(e){let t=e*.025,o=Fr(Qt([7.75,2.6,18.6],[7.89,0,19.08],60),Qt([7.75,2.3,18.45],[7.89,0,19.08],46)),n=o.eye[0]-cs[0],r=o.eye[2]-cs[2];return o.eye=[cs[0]+n*Math.cos(t)-r*Math.sin(t),o.eye[1],cs[2]+n*Math.sin(t)+r*Math.cos(t)],o}}],wA=[1,.96,.88];function h5(e,t){return{dur:t,cam(o,n,r){let a=hn(o),i=f0(n,r,a),s=dr[e].side==="left"?1:-1;return i.eye=oo(i.eye,[s*.6*Math.sin(Math.PI*a),.15*Math.sin(Math.PI*a),0]),i},look(o,n,r){let a={};for(let i in r)typeof r[i]=="number"&&(a[i]=qe(n[i],r[i],o));return a.aperture=qe(n.aperture,r.aperture,o)*(1-.5*Math.sin(Math.PI*o)),a},leaf(o){let n=hn(o),r=_a(dr[e]),a=_a(dr[e+1]),i=dr[e].side==="left"?1:-1,s=oo(Fo(r,a,.5),[i*1.2,.5,0]),c=bn([r,Fo(r,s,.6),s,Fo(a,s,.6),a],n);return{phase:"fly",pos:oo(c,[0,Math.sin(o*Math.PI*5)*.07*Math.sin(Math.PI*o),0]),tumble:.5+.35*Math.sin(Math.PI*o)}}}}var wp=[{dur:6.2,cam(e,t,o){if(e<.5){let s=lA(e/.5),c=Fo(t.eye,[sr.x1-3.2,2.6,sr.zc],s),l=Fo(t.target,fA,Ie(0,.6,e/.5));return Qt(c,l,qe(t.fov,t.fov-8,s),qe(t.roll,.04,s))}let n=bp((e-.5)/.5),r=[[sa.cx+.4,10.4,sa.zc+.6],[sa.cx-.6,7.6,sa.zc+1.3],[sa.cx-1.9,4.6,sa.zc+1.75],o.eye],a=[[sa.cx-.1,0,sa.zc-.2],[sa.cx-1,.4,sa.zc-.1],[sa.cx-1.1,.8,sa.zc-.2],o.target];return Qt(bn(r,n),bn(a,n),qe(o.fov+14,o.fov,n),qe(-.25,o.roll,n))},look(e,t,o){let n=Ie(.22,.5,e),r=1-Ie(.5,.74,e);return{fade:e<.5?n:r,fadeColor:wA,exposure:qe(t.exposure,o.exposure,Ie(.5,.9,e))*(1+2.2*(e<.5?Ie(.15,.5,e):1-Ie(.5,.8,e))),letterbox:qe(t.letterbox,o.letterbox,Ie(.3,.7,e)),aperture:e<.5?t.aperture*(1-e*2):o.aperture*Ie(.6,1,e),focus:qe(4,o.focus,Ie(.5,1,e)),shafts:qe(t.shafts,o.shafts,Ie(.4,.6,e)),vignette:qe(t.vignette,o.vignette,e)}},leaf(){return{phase:"home"}}},{dur:9,cam(e,t,o,n){let r=[t.eye,[15.6,2.4,8.3],[15.4,2.7,7.1],[12.6,2.6,5.4],[9.6,2,7.4],[7.6,1.6,10.6],o.eye],a=bn(r,hn(e)),i=Ie(0,.12,e)*(1-Ie(.82,1,e)),s=Fo(Fo(t.target,o.target,Ie(.55,1,e)),n.pos,i),c=qe(t.fov,o.fov,Ie(.3,1,e))-6*Math.sin(Math.PI*e),l=qe(t.roll,o.roll,e)+.05*Math.sin(Math.PI*2*e);return Qt(a,s,c,l)},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{exposure:qe(t.exposure,o.exposure,Ie(.25,.75,e)),letterbox:qe(t.letterbox,o.letterbox,e),focus:qe(a,o.focus,Ie(.8,1,e)),aperture:qe(.7,o.aperture,Ie(.8,1,e)),shafts:qe(t.shafts,o.shafts,Ie(.3,.8,e)),vignette:qe(t.vignette,o.vignette,e)}},leaf(e){let t=s5(e),o=Math.sin(e*Math.PI*7)*.14*Math.sin(Math.PI*e);return{phase:"fly",pos:oo(bn(hA,t),[0,Math.sin(e*Math.PI*9)*.05*Math.sin(Math.PI*e),o]),tumble:1-.5*Ie(.8,1,e)}}},{dur:11.5,cam(e,t,o,n){let r=bn([t.eye,[7,1.9,19],[7.1,1.6,27.5],[6.9,1.1,36],[7,.7,42.5],[7.05,.5,45.7]],Ie(0,.8,e)*.6+hn(Vr(e/.8))*.4),a=bn([[7.05,.5,45.7],[7,1.2,45.3],[7,2.6,43.8],o.eye],hn(Ie(.8,1,e))),i=e<.8?r:a,s=Fo(Fo(t.target,n.pos,Ie(.03,.22,e)),o.target,Ie(.82,1,e)),c=qe(t.fov,o.fov,Ie(.15,.7,e))-6*Ie(.6,.8,e)*(1-Ie(.85,1,e)),l=qe(t.roll,o.roll,Ie(0,.6,e))-.04*Math.sin(Math.PI*e);return Qt(i,s,c,l)},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{exposure:qe(t.exposure,o.exposure,Ie(.5,1,e)),letterbox:qe(t.letterbox,o.letterbox,e),focus:qe(a,o.focus,Ie(.84,1,e)),aperture:qe(1.1,o.aperture,Ie(.84,1,e)),shafts:qe(t.shafts,o.shafts,Ie(.2,.9,e)),vignette:qe(t.vignette,o.vignette,Ie(.5,1,e))}},leaf(e){let t=qe(s5(e),e,.35),o=bn(uA,Ie(0,.78,t)),n=Math.sin(e*Math.PI*8)*.35*(1-Ie(.55,.76,e)),r=Ie(.7,.8,e);return{phase:"fly",pos:oo(o,[n,Math.abs(Math.cos(e*Math.PI*8))*.12*(1-r),0]),tumble:1-r,swing:n}}},{dur:2.6,cam(e,t,o){let n=hn(e),r=f0(t,o,n);return r.eye=oo(r.eye,[0,0,-.35*Math.sin(Math.PI*n)]),r},look(e,t,o){let n=hn(e),r={};for(let a in o)typeof o[a]=="number"&&(r[a]=qe(t[a],o[a],n));return r},leaf(){return{phase:"floor"}}},{dur:4.5,cam(e,t,o){let n=hn(e),r=bn([t.eye,[6.9,1.7,43.9],[7.05,.45,45.4],o.eye],n),a=Fo(t.target,o.target,Ie(.1,.85,e));return Qt(r,a,qe(t.fov,o.fov,Ie(.2,1,e)),qe(t.roll,o.roll,n))},look(e,t,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=qe(t[r],o[r],Ie(.2,1,e)));return n},leaf(){return{phase:"floor"}}},{dur:5.5,cam(e,t,o){return f0(t,o,hn(e))},look(e,t,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=qe(t[r],o[r],hn(e)));return n},leaf(){return{phase:"floor"}},walker(e){return qe(d5,mu(),e)}},{dur:11,kick:e=>Vr((e-Tc())/(1-Tc())),cam(e,t,o,n){let r=Tc(),a=Ie(0,r,e)*(1-Ie(r+.12,r+.35,e)),i=u5(Math.min(e,zc)),s=oo(t.target,[(i-t.target[0])*.15*a,0,0]),c=Ie(r+.12,1,e),l=bn([t.eye,t.eye,oo(t.eye,[0,.12,-.3]),o.eye],c);return s=Fo(s,n.pos,Ie(r+.06,r+.24,e)*(1-Ie(.9,1,e))),s=Fo(s,o.target,Ie(.88,1,e)),Qt(l,s,qe(t.fov,o.fov,c),qe(t.roll,o.roll,c))},look(e,t,o,n,r){let a=Tc(),i=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]),s=Ie(0,.12,e)*(1-Ie(a+.25,a+.5,e));return{letterbox:qe(qe(t.letterbox,o.letterbox,Ie(a,1,e)),1.75,s),exposure:qe(t.exposure,o.exposure,Ie(a,1,e)),focus:e<a?t.focus:qe(t.focus,i,Ie(a,a+.2,e)),aperture:qe(t.aperture,o.aperture,Ie(a,1,e)),vignette:qe(t.vignette,o.vignette,e),shafts:qe(t.shafts,o.shafts,e)}},leaf(e){let t=Vr((e-Tc())/(1-Tc()));if(t<=0)return{phase:"floor"};let o=Ie(0,.85,t)*.85+bp(Ie(0,.15,t))*.15;return{phase:"fly",pos:oo(Ga,[(ef[0]-Ga[0])*o+Math.sin(t*9)*.08*(1-t),(ef[1]-Ga[1])*o,(ef[2]-Ga[2])*o+Math.sin(t*7)*.06*(1-t)]),tumble:1.3-.75*t}},walker(e){return e<.985?u5(e):null}},{dur:9,cam(e,t,o,n){let r=hn(e),a=bn([t.eye,[9.4,1.35,45.6],[12.4,2,45.9],[15,2.45,46.5],o.eye],r),i=1-Ie(.6,.92,e),s=Fo(Fo(t.target,n.pos,Ie(0,.15,e)),o.target,1-i),c=qe(t.fov,o.fov,Ie(.3,1,e)),l=qe(t.roll,o.roll,r)+.04*Math.sin(Math.PI*e);return Qt(a,s,c,l)},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:qe(t.letterbox,o.letterbox,e),exposure:qe(t.exposure,o.exposure,Ie(.3,.8,e)),focus:qe(a,o.focus,Ie(.6,.95,e)),aperture:qe(t.aperture,o.aperture,Ie(.6,1,e)),vignette:qe(t.vignette,o.vignette,e),shafts:qe(t.shafts,o.shafts,Ie(.3,.8,e))}},leaf(e){let t=hn(e);return{phase:"fly",pos:oo(bn(vA,t),[0,Math.sin(e*Math.PI*5)*.08*Math.sin(Math.PI*e),Math.sin(e*Math.PI*4)*.12*Math.sin(Math.PI*e)]),tumble:.55+.4*Math.sin(Math.PI*e)}}},{dur:6.5,cam(e,t,o){let n=hn(e),r=f0(t,o,n);return r.eye=oo(r.eye,[0,.12*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),r},look(e,t,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=qe(t[r],o[r],e));return n.aperture=qe(t.aperture,o.aperture,e)*(1-.5*Math.sin(Math.PI*e)),n},leaf(e){let t=hn(e);return{phase:"fly",pos:oo(bn(mA,t),[0,Math.sin(e*Math.PI*4)*.07*Math.sin(Math.PI*e),0]),tumble:.5+.3*Math.sin(Math.PI*e)}}},{dur:6.5,cam(e,t,o){let n=hn(e),r=f0(t,o,n);return r.eye=oo(r.eye,[0,.1*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),r},look(e,t,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=qe(t[r],o[r],e));return n.aperture=qe(t.aperture,o.aperture,e)*(1-.5*Math.sin(Math.PI*e)),n},leaf(e){let t=hn(e);return{phase:"fly",pos:oo(bn([Tp,[29.2,1.75,45.5],[32.2,1.5,45.4],Mp],t),[0,Math.sin(e*Math.PI*4)*.06*Math.sin(Math.PI*e),0]),tumble:.45+.25*Math.sin(Math.PI*e)}}},{dur:6,cam(e,t,o,n){let r=hn(e),a=bn([t.eye,[34.2,1.15,45.6],[34.5,.7,44.8],o.eye],r),i=Ie(.05,.3,e)*(1-Ie(.8,1,e)),s=Fo(Fo(t.target,o.target,Ie(.6,1,e)),n.pos,i);return Qt(a,s,qe(t.fov,o.fov,Ie(.2,1,e)),qe(t.roll,o.roll,r))},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:qe(t.letterbox,o.letterbox,e),exposure:qe(t.exposure,o.exposure,e),focus:qe(a,o.focus,Ie(.8,1,e)),aperture:qe(.9,o.aperture,Ie(.8,1,e)),vignette:qe(t.vignette,o.vignette,e),shafts:qe(t.shafts,o.shafts,e)}},leaf(e){let t=bn([Mp,[35.3,.9,45.2],[35.75,.4,44.4],[36,.08,44.05],tf],Ie(0,.85,e)),o=Math.sin(e*Math.PI*6)*.25*(1-Ie(.35,.82,e)),n=Ie(.78,.88,e);return{phase:"fly",pos:oo(t,[0,Math.abs(Math.cos(e*Math.PI*6))*.07*(1-n),o]),tumble:.7*(1-n),swing:o}}},{dur:12,door(e){let t=Vr((e-.02)/.09);return bp(t)+.07*Math.sin(Vr((e-.08)/.18)*Math.PI)*(1-Vr((e-.08)/.3))},cam(e,t,o,n){let r=Math.sin(e*340)*.012*Ie(.02,.05,e)*(1-Ie(.08,.16,e)),a=Ie(.06,1,e),i=bn([t.eye,[34.3,1,43.6],[31.5,1.9,43.4],[26.5,2.4,43.6],[21,2.6,43.6],[16.5,2.8,43.2],[12.6,3.1,41.2],[9.6,3.4,38],o.eye],a*.55+hn(a)*.45),s=oo(n.pos,[1,-.2,-1.45]);i=Fo(i,s,Ie(.1,.22,e)*(1-Ie(.52,.72,e)));let c=Ie(.06,.16,e)*(1-Ie(.86,1,e)),l=Fo(t.target,n.pos,c);l=Fo(l,o.target,Ie(.86,1,e));let f=qe(t.fov,o.fov,Ie(.1,1,e))+6*Math.sin(Math.PI*Ie(.08,.9,e)),u=qe(t.roll,o.roll,e)+.06*Math.sin(Math.PI*2*Ie(.1,.9,e))+r;return Qt(oo(i,[0,r,0]),l,f,u)},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]),i=Ie(.02,.06,e)*(1-Ie(.08,.3,e));return{letterbox:qe(t.letterbox,o.letterbox,Ie(.1,.4,e)),exposure:qe(t.exposure,o.exposure,e)*(1+.8*i),focus:qe(a,o.focus,Ie(.86,1,e)),aperture:qe(.8,o.aperture,Ie(.86,1,e)),vignette:qe(t.vignette,o.vignette,e),shafts:qe(t.shafts,o.shafts,e)+i}},leaf(e){let t=Vr((e-.05)/.95);if(t<=0)return{phase:"floor"};let o=bn(xA(),t*.6+hn(t)*.4),n=Math.sin(e*Math.PI*9)*.12*Math.sin(Math.PI*t);return{phase:"fly",pos:oo(o,[0,n*.6,n]),tumble:1.4-.8*t}}},...[0,1].map(e=>h5(e,7.5)),{dur:10,cam(e,t,o,n){let r=hn(e),a=bn([t.eye,[7.6,3.2,16.2],[7,2.9,17.2],[6.5,3.2,16],o.eye],r),i=Ie(0,.15,e)*(1-Ie(.85,1,e)),s=Fo(Fo(t.target,o.target,Ie(.5,1,e)),n.pos,i);return Qt(a,s,qe(t.fov,o.fov,r)+4*Math.sin(Math.PI*r),qe(t.roll,o.roll,r))},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:qe(t.letterbox,o.letterbox,e),exposure:qe(t.exposure,o.exposure,e),focus:qe(a,o.focus,Ie(.85,1,e)),aperture:qe(.6,o.aperture,Ie(.85,1,e)),vignette:qe(t.vignette,o.vignette,e),shafts:qe(t.shafts,o.shafts,e)}},leaf(e){let t=hn(e),o=bn(yA(),t);return{phase:"fly",pos:oo(o,[0,Math.sin(e*Math.PI*6)*.06*Math.sin(Math.PI*e),0]),tumble:.6+.4*Math.sin(Math.PI*e)}}},...[3,4].map(e=>h5(e,7.5)),{dur:10,cam(e,t,o,n){let r=hn(e),a=bn([t.eye,[7.6,4,30.5],[7.3,4.4,25.5],[7.1,4,21.8],o.eye],r),i=Ie(0,.2,e)*(1-Ie(.9,1,e)),s=Fo(Fo(t.target,o.target,Ie(.5,1,e)),n.pos,i);return Qt(a,s,qe(t.fov,o.fov,r),qe(t.roll,o.roll,r))},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:qe(t.letterbox,o.letterbox,e),exposure:qe(t.exposure,o.exposure,e),focus:qe(a,o.focus,Ie(.85,1,e)),aperture:qe(.7,o.aperture,Ie(.85,1,e)),vignette:qe(t.vignette,o.vignette,e),shafts:qe(t.shafts,o.shafts,e)}},leaf(e){let t=bn(bA(),Ie(0,.86,e)),o=Math.sin(e*Math.PI*7)*.3*(1-Ie(.4,.84,e)),n=Ie(.8,.9,e);return{phase:"fly",pos:oo(t,[o,Math.abs(Math.cos(e*Math.PI*7))*.08*(1-n),0]),tumble:.8*(1-n),swing:o}}}],kp=9.2,zc=.72;function u5(e){return e<zc?qe(mu(),kp,e/zc):qe(kp,dA,(e-zc)/(1-zc))}function Tc(){return zc*Vr((Ga[0]+.15-mu())/(kp-mu()))}var vu={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},du=e=>Object.assign({},vu,ss[e].look),_A=`
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
`;function Wr(e,t,o){let n=document.createElement(e);return t&&(n.className=t),o!==void 0&&(n.innerHTML=o),n}var i0=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function pu(e,t,o){e.querySelectorAll(".tour-line").forEach((n,r)=>{n.style.transitionDelay=(t+r*o).toFixed(2)+"s"})}p5.exports=function(t){let o=/tourdebug/.test(location.search),{fps:n}=t;if(!document.querySelector("link[data-tour-font]")){let V=document.createElement("link");V.rel="stylesheet",V.href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&display=swap",V.setAttribute("data-tour-font",""),document.head.appendChild(V)}let r=hp(),a=null;fetch("res/hand.json").then(V=>V.ok?V.json():null).then(V=>{a=V}).catch(()=>{});let i=document.createElement("style");i.textContent=_A+`
	.hand-text { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); clip-path: inset(50%); white-space: normal; }
	.tour-body canvas.hand { display: block; cursor: pointer; }`,i.textContent+=`
	body.touring #museum-mobile-controls,
	body.touring .painting-plaque { display: none !important; }`,document.head.appendChild(i);let s=Wr("div","tour");s.setAttribute("role","region"),s.setAttribute("aria-label","Guided tour of the gallery. Swipe, scroll or press the arrow keys to move on.");let c=Wr("div","tour-mark",i0(fu.name)),l=Wr("button","tour-free","Explore freely");l.type="button";let f=Wr("div","tour-links",gp.icons("tour-icon"));f.insertBefore(dp()("tour-icon"),f.firstChild),f.insertBefore(Bh().button("tour-icon"),f.firstChild.nextSibling);let u=Wr("button","tour-free tour-note",'<svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 4c-7 1-11.5 5.5-13 13l-1.5 3 3-1.5c7.500-1.500 12-6 13-13z"/><path d="M5.5 20L13 12.500"/></svg><span>Leave a note</span>');u.type="button",u.setAttribute("aria-label","Leave a note: go to the piano room and the confessional"),f.appendChild(u),hu&&f.appendChild(l);let h=Wr("div","tour-progress",ss.map(()=>"<i></i>").join("")),p=Wr("div","tour-hint",'<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 15l6-6 6 6"></path></svg><span></span>'),v=p.querySelector("span"),d=Wr("div","tour-card tour-intro",`
		<span class="tour-line tour-kicker">A virtual gallery</span>
		<span class="tour-rule"></span>
		<h1 class="tour-line tour-title">${i0(fu.name)}</h1>
		<span class="tour-line tour-sub tour-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</span>`);pu(d,.4,.35);let m=fu.text.split(/\n\s*\n/).map(V=>`<p class="tour-line">${i0(V.trim())}</p>`).join(""),g=Wr("div","tour-card tour-about",`
		<span class="tour-line tour-kicker">The artist</span>
		<h2 class="tour-line tour-title">${i0(fu.title)}</h2>
		<span class="tour-rule"></span>
		${gp.line("tour-line tour-contact")}
		${m}`);pu(g,.25,.28);let y=Wr("div","tour-card tour-sky",`
		<span class="tour-line tour-sub">Every painting here waits for the light.</span>`);pu(y,.6,.3);let b=Wr("div","tour-card tour-master","");function M(V){let de=Wr("div","tour-card tour-story",`
			<span class="tour-line tour-kicker"></span>
			<h2 class="tour-title tour-letters"></h2>
			<span class="tour-rule"></span>
			<span class="tour-line visit-row"></span>
			<div class="tour-body"></div>`),je=de.querySelector(".tour-title"),nt=de.querySelector(".tour-body");return de.filled=!1,de.body=nt,de.fill=()=>{let rt=V();if(!rt||de.filled)return;de.filled=!0;let Xo=rt.title||"";de.querySelector(".tour-kicker").textContent=iA(rt)||"Oil on canvas";let Cn=de.querySelector(".visit-row");Cn.innerHTML=xp.button(rt),Cn.hidden=!Cn.innerHTML;let _r=Cn.querySelector(".visit-btn");_r&&(_r.addEventListener("click",rn=>{rn.stopPropagation(),xp.open(rt)}),de.warm=()=>xp.warm(rt));let Bo=fp().button(rt);Bo&&(Cn.appendChild(Bo),Cn.hidden=!1);let Gr=0;je.innerHTML=Xo.split(" ").map(rn=>'<span class="tour-word">'+rn.split("").map(Co=>`<span style="transition-delay:${(.35+Gr++*.045).toFixed(3)}s">${i0(Co)}</span>`).join("")+"</span>").join(" "),je.setAttribute("aria-label",Xo);let Jo=.35+Xo.length*.045+.2;de.querySelector(".tour-rule").style.transitionDelay=Jo.toFixed(2)+"s";let So=String(rt.description||"").split(/\n\s*\n/).filter(rn=>rn.trim());if(de.querySelector(".tour-kicker").style.transitionDelay="0.1s",a&&So.length){nt.innerHTML=So.map(Qn=>`<p class="hand-text">${i0(Qn.trim())}</p>`).join("")+'<div class="hand-wrap"><canvas class="hand" aria-hidden="true"></canvas></div>';let rn=nt.querySelector("canvas"),Co=So.map(Qn=>Qn.trim()).join(`

`),Hn=!1,Mr=!1,cr=0;nt.addEventListener("wheel",()=>{Hn=!0},{passive:!0}),nt.addEventListener("touchmove",()=>{Hn=!0},{passive:!0});let an=parseFloat(getComputedStyle(nt).fontSize)||17,lr=r(rn,a,{ink:"rgba(244,236,223,0.93)",shadow:"rgba(0,0,0,0.55)",shadowBlur:7,xh:Math.max(8.5,an*.56),width:.14,speed:80,pace:.12,minDur:.022,maxTime:Qn=>3.5+Qn.length/420,seed:3+Xo.length,onPen:Qn=>{if(Hn)return;let lo=Qn-nt.clientHeight*.55;lo>nt.scrollTop+4&&(nt.scrollTop+=Math.min(16,lo-nt.scrollTop))}});rn.addEventListener("click",Qn=>{Qn.stopPropagation(),clearTimeout(cr),Mr?lr.finish():(Mr=!0,lr.write(Co,!0))}),de.write=()=>{if(clearTimeout(cr),Hn=!1,Mr){lr.write(Co,!0);return}lr.write("",!0),cr=setTimeout(()=>{Mr=!0,lr.write(Co)},Jo*.6*1e3)},de.stopWrite=()=>{clearTimeout(cr),lr.stop()};let kr=0;window.addEventListener("resize",()=>{clearTimeout(kr),kr=setTimeout(()=>{Mr&&de.classList.contains("on")&&lr.write(Co,!0)},250)})}else nt.innerHTML=So.map(rn=>`<p class="tour-line">${i0(rn.trim())}</p>`).join(""),nt.querySelectorAll(".tour-line").forEach((rn,Co)=>{rn.style.transitionDelay=(Jo+.3+Math.min(Co,6)*.35).toFixed(2)+"s"})},de}let w=()=>t.paintings?t.paintings():[],_=V=>w().find(de=>de.side==="corridor"&&Math.abs(de.paintingPosition[0]-V)<.5),S=M(()=>w().find(V=>V.side==="end")),G=()=>Wr("div","tour-card",""),R=M(()=>_(s0[0])),q=M(()=>_(c0[0])),T=M(()=>_(l0[0])),B=dr.map(V=>M(()=>w().find(de=>de.side===V.side&&Math.abs(de.paintingPosition[2]-V.z)<.5))),P=Wr("div","tour-card tour-endcard",`
		<span class="tour-line tour-kicker">Thank you for walking with me</span>
		<span class="tour-rule"></span>
		<span class="tour-line tour-sub">${hu?"The rest of the gallery is yours to wander.":"Swipe back to return to any painting."}</span>
		<span class="tour-line tour-sub tour-confess-line">Before you leave, the confessional is open.<br>Leave me a note; no one else will read it.</span>
		<div class="tour-line tour-end"><button type="button" class="tour-btn" data-act="confess">Leave something behind</button></div>
		${gp.line("tour-line tour-contact")}
		<div class="tour-line tour-end">
			${hu?'<button type="button" class="tour-btn" data-act="free">Walk the gallery</button>':""}
			<button type="button" class="tour-btn quiet" data-act="list">All paintings</button>
			<button type="button" class="tour-btn quiet" data-act="replay">Replay</button>
		</div>`);pu(P,.5,.35);let H=[d,g,y,b,S,G(),G(),G(),R,q,T,G(),...B,P];s.append(...H,c,f,h,p),document.body.appendChild(s);let se=i5()({root:s,avatar:t.avatar,glyphs:()=>a,onExit:()=>{ht=-1,ut&&(pt={start:E},ut=!1)}});document.body.classList.add("touring");let Z=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,le=Z?"Scroll":"Swipe",ie=ss.map((V,de)=>de===0?Z?"Scroll to begin":"Swipe up to begin":de===1?le+" to follow the leaf":de===2?le+" to follow the light":de===3?le+" for its story":de===6||de===7||de===ss.length-1?"":le+" on"),pe=[0];wp.forEach(V=>pe.push(pe[pe.length-1]+V.dur));let Qe=pe[pe.length-1],wt=210,Fe=95,st=.35,yt=1.4,Bt=.32,Zt=1,Oo=1.3,Be=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,ct=2.2,dt=.7,Rt=.9,so=!0,zt=0,mt=0,be=0,ot=-10,Ct=!1,ht=-1,Xe=0,go=0,E=0,no=null,Xt=Object.assign({},du(0)),xo=ss[0].cam(0),Eo={phase:"home",pos:Lc.slice(),tumble:0},un=0,wr=V=>{let de=0;for(let je=1;je<pe.length;je++)Math.abs(pe[je]-V)<Math.abs(pe[de]-V)&&(de=je);return de};function qn(V){let de=H[V];de&&de.fill&&(de.fill(),de.body.scrollTop=0,de.offsetWidth),H.forEach((je,nt)=>{let rt=je.classList.contains("on");je.classList.toggle("on",nt===V),nt===V&&!rt&&je.write&&je.write(),nt!==V&&rt&&je.stopWrite&&je.stopWrite()}),de&&de.warm&&de.warm(),v.textContent=ie[V]||"",p.classList.toggle("on",!!ie[V])}function Ha(){H.forEach(V=>{V.stopWrite&&V.classList.contains("on")&&V.stopWrite(),V.classList.remove("on")}),p.classList.remove("on")}let Ai=null,m0=-1;function J(V){if(se.active||!so||no)return;let de=E-ot>st;if(ot=E,de||!Ai){let je=0,nt=Qe;for(let rt=0;rt<pe.length;rt++)if(pe[rt]<=zt-.02&&(je=pe[rt]),pe[rt]>=zt+.02){nt=pe[rt];break}Ai={lo:je,hi:nt}}E<m0||(Ct=!1,be=Math.max(Ai.lo,Math.min(Ai.hi,be+V)),be=Math.max(zt-ct,Math.min(zt+ct,be)))}function Re(V){if(se.active||!so||no)return;let de=Ct?be:zt,je;if(V>0)je=pe.findIndex(nt=>nt>de+.05);else{je=-1;for(let nt=pe.length-1;nt>=0;nt--)if(pe[nt]<de-.05){je=nt;break}}je<0||(be=pe[je],Ct=!0,ot=E)}let De=null,Ce=V=>V.stopPropagation();["touchstart","touchmove","touchend","mousedown","mouseup","click","contextmenu"].forEach(V=>s.addEventListener(V,Ce)),s.addEventListener("pointerdown",V=>{if(V.stopPropagation(),!(V.target.closest("button, a")||V.target.closest(".tour-body"))){De={x:V.clientX,y:V.clientY,lx:V.clientX,ly:V.clientY,t:performance.now(),moved:0,v:0,lt:performance.now()};try{s.setPointerCapture(V.pointerId)}catch(de){}}}),s.addEventListener("pointermove",V=>{if(!De)return;let de=V.clientX-De.lx,je=V.clientY-De.ly;De.lx=V.clientX,De.ly=V.clientY;let nt=Math.abs(je)>=Math.abs(de)?-je:-de;De.moved+=Math.abs(nt);let rt=performance.now(),Xo=nt/Fe;De.v=De.v*.6+Xo/Math.max(.008,(rt-De.lt)/1e3)*.4,De.lt=rt,De.moved>6&&J(Xo)});let it=V=>{let de=De;if(De=null,!!de){if(se.active){de.moved<10&&performance.now()-de.t<500?se.tap():de.y-(V?V.clientY:de.ly)>30&&se.swipe(1);return}de.moved<10&&performance.now()-de.t<500?Re(1):performance.now()-de.lt<120&&J(Math.max(-1.6,Math.min(1.6,de.v*.22)))}};s.addEventListener("pointerup",V=>{V.stopPropagation(),it(V)}),s.addEventListener("pointercancel",()=>{De=null}),s.addEventListener("wheel",V=>{if(se.active){if(V.target.closest(".conf-ui"))return;V.preventDefault(),se.wheel(V.deltaY);return}if(V.target.closest(".tour-body")){let je=V.target.closest(".tour-body"),nt=je.scrollTop+je.clientHeight>=je.scrollHeight-2&&V.deltaY>0,rt=je.scrollTop<=0&&V.deltaY<0;if(!nt&&!rt)return}V.preventDefault();let de=V.deltaMode===1?V.deltaY*16:V.deltaMode===2?V.deltaY*window.innerHeight:V.deltaY;J(de/wt)},{passive:!1}),window.addEventListener("keydown",V=>{if(!so||no||document.body.classList.contains("visiting")||document.body.classList.contains("in-conservatory")||document.body.classList.contains("cons-asking"))return;if(se.active){if(V.stopImmediatePropagation(),V.target&&/TEXTAREA|INPUT|BUTTON/.test(V.target.tagName))return;se.key(V.key)&&V.preventDefault();return}let de=V.key;if(["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(de)>=0){if((de==="Enter"||de===" ")&&V.target&&V.target.tagName==="BUTTON")return;V.preventDefault(),V.stopImmediatePropagation(),Re(1)}else["ArrowUp","ArrowLeft","PageUp"].indexOf(de)>=0?(V.preventDefault(),V.stopImmediatePropagation(),Re(-1)):de==="Escape"?(V.preventDefault(),St()):/^[wasdzq]$/i.test(de)&&V.stopImmediatePropagation()},!0),window.addEventListener("keyup",V=>{so&&!no&&/^(Arrow|[wasdzq]$)/i.test(V.key)&&V.stopImmediatePropagation()},!0),l.addEventListener("click",V=>{V.stopPropagation(),St()}),["mousedown","pointerdown"].forEach(V=>u.addEventListener(V,de=>de.stopPropagation())),u.addEventListener("click",V=>{V.stopPropagation(),Ot()});let Et=Qt([8.6,1.75,44.3],[-3,1.85,44.5],55,0),_t=null,ut=!1;function Ot(){if(!so||no||se.active||_t)return;Ha(),ht=-2;let V=xo.eye;if(V[0]>.5&&V[0]<13.5&&V[2]>36&&V[2]<50){ut=!1,se.start(xo,Xt);return}_t={t:0}}P.addEventListener("click",V=>{let de=V.target.closest("button");de&&(V.stopPropagation(),de.dataset.act==="free"&&St(),de.dataset.act==="replay"&&Wt(),de.dataset.act==="list"&&_d().show(!1),de.dataset.act==="confess"&&(Ha(),ht=-2,se.start(xo,Xt)))});let gt=[null,[sa.zc-1.6,Math.PI/2],[11.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[42.5+Cc[0]-7,0],[42.5+Cc[1]-7,0],[42.5+Cc[2]-7,0],[1e3,Math.PI/2],...dr.map(V=>[V.z-1.6,V.side==="left"?-Math.PI/2:Math.PI/2]),[cs[2]-1.6,Math.PI]],Ut=null,kt=0;function St(){if(!so||no||!hu)return;let V=wr(zt),de=gt[V];Ut=V<=1?{phase:"home",pos:Lc.slice()}:V>=3&&V<=6?{phase:"floor",pos:Ga.slice()}:V===11?{phase:"floor",pos:tf.slice()}:V===18?{phase:"floor",pos:cs.slice()}:null,kt=V>=12?1:0,de&&n.place&&n.place(de[0],de[1]),no={start:E,fromCam:xo,fromLook:Object.assign({},Xt)},Ha(),s.hidden=!0,document.body.classList.remove("touring"),t.onExit&&t.onExit()}function Wt(){zt=be=0,mt=0,Ct=!1,ht=-1,Xe=0,go=0,Eo={phase:"home",pos:Lc.slice(),tumble:0},pt={start:E}}let pt={start:-1},ro=!1,_o=[],xt={prev:null,vel:[0,0,0],axis:[1,0,0],dir:null,bank:0,rock:0,spin:0,fresh:!0};function Po(V){un+=V*(Eo.phase==="floor"?0:1);let de=Eo.tumble===void 0?0:Eo.tumble,je=Ac.fromTranslation(_o,Eo.pos);if(Eo.phase==="home")je=Ac.rotateY(je,je,2.2+Math.sin(un*.9)*.15),je=Ac.rotateZ(je,je,-1+Math.sin(un*1.3)*.12),je=Ac.rotateX(je,je,.4);else if(Eo.phase==="floor")je=Ac.rotateY(je,je,.65),je=Ac.rotateX(je,je,.16);else{let nt=Eo.pos;if(xt.prev&&V>0){let pr=[nt[0]-xt.prev[0],nt[1]-xt.prev[1],nt[2]-xt.prev[2]];if(Math.hypot(pr[0],pr[1],pr[2])<1.5){let Gc=Math.min(1,V*6);for(let vs=0;vs<3;vs++)xt.vel[vs]+=(pr[vs]/V-xt.vel[vs])*Gc}else xt.vel=[0,0,0]}xt.prev=nt.slice();let rt=xt.vel,Xo=Math.hypot(rt[0],rt[1],rt[2]),Cn=Ie(.25,1.4,Xo),_r=Ie(.5,2,-rt[1]),Bo=un*.35*(.3+de)+.65,Gr=[Math.cos(Bo),0,Math.sin(Bo)];Xo>.001&&(Gr=Fo(Gr,Ir(rt,-1/Xo),Cn));let Jo=Math.min(1,V*4);xt.axis=Fo(xt.axis,Gr,xt.fresh?1:Jo);let So=xt.axis,rn=Math.hypot(So[0],So[1],So[2])||1;So=Ir(So,1/rn);let Co=xo.eye,Hn=[Co[0]-nt[0],Co[1]-nt[1],Co[2]-nt[2]],Mr=Math.hypot(Hn[0],Hn[1],Hn[2])||1,cr=qe(.6,.22,Cn),an=[Hn[0]/Mr*cr,1+Hn[1]/Mr*cr,Hn[2]/Mr*cr],lr=So[0]*an[0]+So[1]*an[1]+So[2]*an[2];an=yp(an,Ir(So,lr));let kr=Math.hypot(an[0],an[1],an[2])||1;an=Ir(an,1/kr);let Qn=[So[1]*an[2]-So[2]*an[1],So[2]*an[0]-So[0]*an[2],So[0]*an[1]-So[1]*an[0]],lo=Math.hypot(rt[0],rt[2]),Yo=0;if(lo>.15&&xt.dir&&V>0){let pr=[rt[0]/lo,rt[2]/lo];Yo=(xt.dir[0]*pr[1]-xt.dir[1]*pr[0])/V,xt.dir=pr}else lo>.15&&(xt.dir=[rt[0]/lo,rt[2]/lo]);xt.bank+=(Math.max(-.8,Math.min(.8,Yo*.3))*Cn-xt.bank)*Math.min(1,V*3),xt.rock+=V*(1.5+2.4*Cn),xt.spin+=V*_r*7*(.4+de);let fa=Math.sin(xt.rock)*(.26+.45*de)*(1-.5*_r)+xt.bank+xt.spin,ds=Math.sin(xt.rock*.63+1)*(.16+.3*de)+(Eo.swing||0)*.9,Ba=Math.cos(fa),ps=Math.sin(fa),ff=oo(Ir(an,Ba),Ir(Qn,ps)),Ti=oo(Ir(Qn,Ba),Ir(an,-ps));Ba=Math.cos(ds),ps=Math.sin(ds);let g0=oo(Ir(So,Ba),Ir(ff,ps)),Fc=oo(Ir(ff,Ba),Ir(So,-ps)),ku=Math.sin(xt.rock+1.5708)*.035*(.3+de)*(1-.5*Cn),ai=oo(nt,Ir(Qn,ku)),Dc=[g0[0],g0[1],g0[2],0,Fc[0],Fc[1],Fc[2],0,Ti[0],Ti[1],Ti[2],0,ai[0],ai[1],ai[2],1];for(let pr=0;pr<16;pr++)je[pr]=Dc[pr];xt.fresh=!1}return Eo.phase!=="fly"&&(xt.prev=null,xt.vel=[0,0,0],xt.fresh=!0,xt.spin=0,xt.bank=0,xt.dir=null),{visible:!0,model:je}}function la(V){for(let de in vu)Xt[de]=V[de]!==void 0?V[de]:vu[de]}function ri(V,de){if(V<=1)return{phase:"home",pos:Lc.slice(),tumble:0};let je=f5[V];if(je){let nt=je.amp;return{phase:"fly",pos:oo(je.pos(),[Math.sin(de*.55)*nt[0],Math.sin(de*.8)*nt[1],(1-Math.cos(de*.45))*nt[2]]),tumble:je.tumble}}return{phase:"floor",pos:(V>=18?cs:V>=10?tf:Ga).slice(),tumble:0}}let Jt=0,co=null;function zn(V){let de=Math.min(.1,Math.max(0,V-Jt));if(Jt=V,E=V,ro||(ro=!0,pt.start=V),no)return null;if(_t&&(_t.t+=de,_t.t>=.7&&(_t=null,ut=!0,se.start(Et,Object.assign({},vu,{fade:1,fadeColor:[0,0,0]})))),se.active){let lo=se.update(de);return xo=lo.camera,la(lo.look),o&&window.__camOverride&&(xo=window.__camOverride),o&&window.__lookOverride&&Object.assign(Xt,window.__lookOverride),{camera:xo,walker:null,door:1,look:Xt,leaf:Po(de)}}if(!Ct&&!De&&E-ot>dt){let lo=wr(be);Math.abs(pe[lo]-be)<Rt&&(be=pe[lo])}let je=be-zt;if(Ct){let Yo=Math.sign(je)*Math.min(Zt,Math.sqrt(2*Oo*Math.abs(je)))-mt;mt+=Math.sign(Yo)*Math.min(Math.abs(Yo),Oo*de),zt+=mt*de,(je>0&&zt>=be||je<0&&zt<=be||Math.abs(be-zt)<1e-4)&&(zt=be,mt=0,Ct=!1)}else{let lo=cA(zt,be,mt,Bt,de,3);zt=lo[0],mt=lo[1],Math.abs(be-zt)<1e-4&&Math.abs(mt)<.001&&(zt=be,mt=0)}let nt=0;for(;nt<wp.length-1&&zt>=pe[nt+1];)nt++;let rt=wp[nt],Xo=Vr((zt-pe[nt])/rt.dur),Cn=ss[nt],_r=ss[nt+1],Bo=wr(zt);Bo!==Xe&&(Xe=Bo,go=0);let Gr=Math.abs(zt-pe[Bo])<.02;Gr&&(go+=de);let Jo=1-Ie(0,1.2,Math.abs(zt-pe[Bo])),So=rt.leaf(Xo);if(So.pos?Eo=Object.assign({},So):Eo=Object.assign({},So,{pos:So.phase==="home"?Lc.slice():(nt>=10?tf:Ga).slice()}),f5[Bo]&&Jo>0){let lo=ri(Bo,go);Eo.pos=Fo(Eo.pos,lo.pos,Jo)}let rn=rt.walker&&(Xo>.01||nt===6)?rt.walker(Xo):null;co=rn==null?null:{x:rn,z:_p,heading:Math.PI/2,phase:(rn-d5)/pA};let Co=rt.cam(Xo,Cn.cam(0),_r.cam(0),Eo);if(Jo>0&&go>0){let lo=ss[Bo],Yo=lo.cam(0),fa=lo.cam(go);Co=Qt(oo(Co.eye,Ir(yp(fa.eye,Yo.eye),Jo)),oo(Co.target,Ir(yp(fa.target,Yo.target),Jo)),Co.fov+(fa.fov-Yo.fov)*Jo,Co.roll+(fa.roll-Yo.roll)*Jo)}if(Jo>0&&!Be){let lo=E,Yo=.006*Jo,fa=Math.sin(lo*.61)*.6+Math.sin(lo*1.37+1.3)*.4,ds=Math.sin(lo*.47+2.1)*.6+Math.sin(lo*1.13+.4)*.4,Ba=Math.sin(lo*.53+4)*.5+Math.sin(lo*.97+2.6)*.5;Co=Qt(oo(Co.eye,[fa*Yo,ds*Yo*.7,Ba*Yo]),oo(Co.target,[ds*Yo*1.8,fa*Yo*1.4,0]),Co.fov,Co.roll+Ba*.0012*Jo)}xo=Co;let Hn=du(nt),Mr=du(nt+1),cr=Object.assign({},Hn,rt.look(Xo,Hn,Mr,Eo,Co.eye));if(Jo>0){let lo=du(Bo);for(let Yo in lo)typeof lo[Yo]=="number"&&(cr[Yo]=qe(cr[Yo],lo[Yo],Jo))}la(cr);let lr=Gr&&Math.abs(be-zt)<.02?Bo:-1;lr!==ht&&(lr>=0&&(m0=E+yt),ht=lr,lr>=0?qn(lr):Ha()),h.querySelectorAll("i").forEach((lo,Yo)=>lo.classList.toggle("on",Yo===Bo));let kr=ht>=0?H[ht]:null;kr&&kr.fill&&!kr.filled&&(kr.fill(),kr.filled&&(kr.classList.remove("on"),kr.offsetWidth,kr.classList.add("on")));let Qn=Vr((V-pt.start)/2.6);return Qn<1&&(Xt.fade=Math.max(Xt.fade,1-Ie(0,1,Qn)),Xt.fadeColor=[0,0,0]),o&&window.__camOverride&&(xo=window.__camOverride),o&&window.__lookOverride&&Object.assign(Xt,window.__lookOverride),{camera:xo,walker:co,door:rt.door?rt.door(Xo):nt>=12?1:0,look:_t?Object.assign(Xt,{fade:Math.max(Xt.fade||0,Vr(_t.t/.6)),fadeColor:[0,0,0]}):Xt,leaf:Po(de)}}return o&&(window.__tour={go:Re,exit:St,wind:J,confess(){Ha(),ht=-2,se.start(xo,Xt)},note:()=>Ot(),conf:se,paper:tu().STATE,seek(V,de){zt=be=pe[V]+(pe[V+1]-pe[V])*de,mt=0,Ct=!1,ot=E+1e6,pt.start=E-10,ro=!0},jump(V){zt=be=pe[V],mt=0,Ct=!1,go=0,ot=E,pt.start=E-10,ro=!0},state:()=>({current:wr(zt),scroll:+zt.toFixed(3),target:+be.toFixed(3),shown:ht,move:Math.abs(be-zt)>.02?{p:zt}:null,camNow:xo,leaf:Eo,look:Xt})}),{update:zn,get active(){return so&&!no},handover(V){if(!no)return null;let de=Vr((V-no.start)/1.8);return de>=1?(so=!1,null):{from:no.fromCam,fromLook:no.fromLook,k:hn(de)}},restingDoor:()=>kt,restingLeaf(){return Ut?(Eo=Ut,Po(0)):null},mix:f0,cam:Qt}}});var MA=Fm(),$a=vr(),Gp=_d(),af=$a.reflection,kA=!1,C5=(e,t,o,n,r)=>n+(e-t)*(r-n)/(o-t),$p=()=>C5(window.innerWidth/window.innerHeight,16/9,9/16,1.7,Math.PI/3);navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)&&($p=()=>C5(window.innerWidth/window.innerHeight,16/9,9/16,1.5,Math.PI/3));var N5=()=>2*Math.atan(Math.tan($p()*.5)*window.innerHeight/window.innerWidth),EA=Ym(),sf=new EA;sf.showPanel(0);kA&&document.body.appendChild(sf.dom);var Zo,Ic,wu,fs,Rp,Vo;function SA(){try{let e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");return!!(t&&t.getExtension("OES_standard_derivatives"))}catch(e){return!1}}if(!SA())throw MA.finish(),Gp.show(!0),new Error("This device cannot draw the 3D gallery; showing the list instead.");Zo=Km()({extensions:["OES_element_index_uint","OES_standard_derivatives"],optionalExtensions:["EXT_texture_filter_anisotropic","WEBGL_depth_texture"],attributes:{alpha:!1,antialias:!1},pixelRatio:$a.pixelRatio});location.hash==="#list"&&Gp.show(!1);window.addEventListener("hashchange",()=>{location.hash==="#list"&&Gp.show(!1)});Ic=F2()();var AA=t1();wu=AA(Zo,Ic,af);fs=lx()(Zo,Ic);Rp=dx()(Zo);var m5=_x()(Zo,Ic),g5=Rx()(Zo),x5=Ix()(Zo),y5=Jx()(Zo),b5=r3()(Zo),w5=l3()(Zo),hs=k3()(Zo),Op=O1(),R5=jf(),TA=sl(),Pp=I1(),_u=nr(),wn=Eh(),Ip=O3(),O5=Bh(),{A:Pc}=Jr();Vo=mb()(Ic,N5);var p0=xb()(Zo,$a),ls=Mb()(Zo),_5=Eb()(Zo),LA=Tb()(Zo,$a),zA=Ob()(Zo,$a),M5=Gi()(Zo),k5=tu()(Zo),rf=gi(),gu=rf(Zo),qa=fp();qa.init({regl:Zo,post:p0});/tourdebug/.test(location.search)&&(window.__enterCons=()=>{let e=fs.interactables().find(t=>t.slug===qa.SLUG);return e&&window.__consDebug.go(e,"cons"),!!e});/tourdebug/.test(location.search)&&(window.__enterRed=()=>{let e=fs.interactables().find(o=>o.slug==="a-private-eulogy"),t=e&&qa.button(e);return t&&t.click(),!!t});var Rc=e=>{let t=qa.draw;t&&t(e)};Rc.reflect=(e,t)=>{let o=qa.draw;o&&o.reflect(e,t)};var ni=v5()({fps:Vo,paintings:()=>fs.interactables(),avatar:hs,onExit:()=>Vo.setPaused(!1)});Vo.setPaused(!0);/tourdebug/.test(location.search)&&(window.__post=p0);var u0=[],lf=[],Ma=[7,2,1.6];Ic.viewer=Ma;var CA=Zo({cull:{enable:!0,face:"back"},uniforms:{view:()=>u0,proj:()=>lf,yScale:1,mirrorOn:()=>af?1:0,night:()=>_u.night,studioBake:()=>qa.bake(),candleT:Zo.context("time"),time:Zo.context("time"),shFl0:e=>rf.flicker(e.time,0),shFl1:e=>rf.flicker(e.time,1),shFl2:e=>rf.flicker(e.time,2),shFl3:e=>rf.flicker(e.time,3)}}),E5=Zo({cull:{enable:!0,face:"front"},uniforms:{yScale:-1}}),P5=document.createElement("style");P5.textContent=`

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
`;document.head.appendChild(P5);var ka=document.createElement("button");ka.className="painting-plaque";ka.type="button";ka.setAttribute("aria-label","Read painting");document.body.appendChild(ka);var Dr=document.createElement("div");Dr.className="story-overlay";Dr.innerHTML=`

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

		${R5.line("story-contact")}

		<div class="visit-row story-visit"></div>

		<p
			class="story-body"
			id="story-body"
		></p>

	</article>
`;document.body.appendChild(Dr);var us=document.createElement("div");us.className="museum-links";us.innerHTML=R5.icons("museum-link");us.insertBefore(dp()("museum-link"),us.firstChild);us.insertBefore(O5.button("museum-link"),us.firstChild.nextSibling);["mousedown","pointerdown","click"].forEach(e=>us.addEventListener(e,t=>t.stopPropagation()));document.body.appendChild(us);var NA=Dr.querySelector("#story-title"),RA=Dr.querySelector("#story-body"),S5=Dr.querySelector("#story-meta"),OA=Dr.querySelector(".story-contact"),Oc=Dr.querySelector(".story-visit");Oc.addEventListener("click",e=>{e.target.closest(".visit-btn")&&v0&&Pp.open(v0)});var PA=Dr.querySelector(".story-close"),v0=null,Xr={p:0,target:0,last:0},I5={title:Op.title,description:Op.text,isAbout:!0},Si=null;function qp(e){if(e){if(v0=e,NA.textContent=e.title||"",RA.textContent=e.description||"",S5.textContent=e.isAbout?"":TA(e),S5.hidden=!!e.isAbout,OA.hidden=!e.isAbout,Oc.innerHTML=e.isAbout?"":Pp.button(e),!e.isAbout&&e.paintingPosition){let t=qa.button(e);t&&e.slug!==qa.SLUG&&(t.addEventListener("click",()=>Mu()),Oc.appendChild(t))}Oc.hidden=!Oc.innerHTML,Oc.hidden||Pp.warm(e),Dr.classList.toggle("about-mode",!!e.isAbout),Dr.classList.add("open"),Xr.target=e.isAbout?1:0,Si=e,ka.classList.remove("visible"),Vo.setPaused(!0)}}function Mu(){Dr.classList.remove("open"),Xr.target=0,v0=null,Si=null,Vo.setPaused(!1)}function F5(e){e&&(e.preventDefault(),e.stopPropagation()),Si&&qp(Si)}ka.addEventListener("pointerup",F5,!0);ka.addEventListener("touchend",F5,{passive:!1,capture:!0});ka.addEventListener("click",e=>{e&&(e.preventDefault(),e.stopPropagation()),v0===null&&Si&&qp(Si)},!0);PA.addEventListener("click",Mu);Dr.addEventListener("click",e=>{e.target===Dr&&Mu()});window.addEventListener("keydown",e=>{e.code==="Escape"&&Dr.classList.contains("open")&&Mu()});function A5(e,t){let o=t[0],n=t[1],r=t[2];return[e[0]*o+e[4]*n+e[8]*r+e[12],e[1]*o+e[5]*n+e[9]*r+e[13],e[2]*o+e[6]*n+e[10]*r+e[14],e[3]*o+e[7]*n+e[11]*r+e[15]]}function IA(){if(v0)return;if(ni.active){Si=null,ka.classList.remove("visible");return}let e=fs.interactables(),t=Vo.forward[0],o=Vo.forward[2],n=Math.hypot(t,o)||1,r=null,a=1/0;for(let i of e){let s=i.paintingPosition,c=0,l=0;i.side==="left"?c=1:i.side==="right"?c=-1:i.side==="corridor"?l=1:l=-1;let f=s[0]-Vo.pos[0],u=s[2]-Vo.pos[2],h=-(f*c+u*l),p=Math.abs(f*l-u*c),v=-(t*c+o*l)/n,d=i.side==="end"?11:8,m=(i.width||2)/2;v>.9&&h>.5&&h<d&&p<m+.8&&h<a&&(r=i,a=h)}if(!r){let i=Vo.pos[0],s=Vo.pos[2];t/n>.85&&i<13.6&&s>Pc.z0-.5&&s<Pc.z1+.5&&(r=Object.assign({},I5,{plaqueTitle:Op.name}))}r?(Si=r,ka.textContent=r.isAbout?"ABOUT  \xB7  "+r.plaqueTitle:"READ  \xB7  "+r.title,ka.classList.add("visible")):(Si=null,ka.classList.remove("visible"))}var Hp=nc();function FA(){let e=hs.state;if(!e||!e.glowPos)return null;let t=A5(Vo.view(),[e.glowPos[0],e.glowPos[1]-.08,e.glowPos[2],1]),o=A5(Vo.proj(),t);return o[3]<=.05?null:[(o[0]/o[3]*.5+.5)*window.innerWidth,(.5-o[1]/o[3]*.5)*window.innerHeight,o[3]]}var Fp=null;window.addEventListener("pointerdown",e=>{Fp={x:e.clientX,y:e.clientY,t:performance.now()}},!0);window.addEventListener("pointerup",e=>{let t=Fp;if(Fp=null,!t||v0||ni.active||!e.target||!/^(CANVAS|BODY)$/.test(e.target.tagName)||Math.hypot(e.clientX-t.x,e.clientY-t.y)>12||performance.now()-t.t>600)return;let o=FA();if(!o)return;let n=!!document.pointerLockElement,r=n?window.innerWidth/2:e.clientX,a=n?window.innerHeight/2:e.clientY,i=Math.max(e.pointerType==="touch"?60:40,260/o[2]);Math.hypot(r-o[0],a-o[1])<i&&(e.preventDefault(),e.stopPropagation(),qp(I5))},!0);function DA(e){let t=Math.min(Math.max(e-Xr.last,0),.1);Xr.last=e;let o=t/1.6;if(Xr.p=Xr.target>Xr.p?Math.min(1,Xr.p+o):Math.max(0,Xr.p-o),Xr.p<=0)return;let n=Xr.p<.5?2*Xr.p*Xr.p:1-Math.pow(-2*Xr.p+2,2)/2,r=window.innerHeight>window.innerWidth,a=hs.state,i=a&&a.hipsPos?a.hipsPos[0]:Pc.cx-1.2,s=a&&a.hipsPos?a.hipsPos[2]:Pc.zc,c=r?[i-2.3,2,s-.1]:[i-1.55,1.55,s+.3],l=r?[i+.1,.2,s-.1]:[i+.1,.7,s+.6],f=Vo.pos,u=Vo.forward,h=[f[0],f[1],f[2]],p=[f[0]+u[0],f[1]+u[1],f[2]+u[2]],v=(y,b)=>y.map((M,w)=>M+(b[w]-M)*n),d=[Pc.cx-6.2,1.7,Pc.zc],m=1-n,g=h.map((y,b)=>m*m*y+2*m*n*d[b]+n*n*c[b]);Hp.lookAt(Vo.view(),g,v(p,l),[0,1,0])}var uz=qa.PREVIEW,h0={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0,glitch:0},d0=null,cf=!1,xu=!1;function GA(e,t,o,n){let r=[o[0]-t[0],o[1]-t[1],o[2]-t[2]],a=Math.hypot(r[0],r[1],r[2])||1,i=[-r[2]/a,0,r[0]/a],s=Math.hypot(i[0],i[2])||1;i=[i[0]/s,0,i[2]/s];let c=Math.cos(n),l=Math.sin(n);return Hp.lookAt(e,t,o,[i[0]*l,c,i[2]*l])}function $A(e){let t=window.innerWidth/window.innerHeight,o=p0.shot,n=ni.active?ni.update(e):null,r=n?null:ni.handover(e),a=null,i=h0;if(n){a=n.camera,i=n.look,d0=n.leaf;let s=window.__walkOverride&&/tourdebug/.test(location.search)?window.__walkOverride:n.walker||null;hs.setWalk(s),cf=!!s,ls.setOpen(n.door||0)}else d0=ni.restingLeaf(),hs.setWalk(null),cf=!1,ls.setOpen(ni.restingDoor());if(r){let s=Vo.pos,c=Vo.forward,l=ni.cam([s[0],s[1],s[2]],[s[0]+c[0],s[1]+c[1],s[2]+c[2]],N5()*180/Math.PI,0);a=ni.mix(r.from,l,r.k),i={};for(let f in h0)i[f]=Array.isArray(h0[f])?h0[f]:r.fromLook[f]+(h0[f]-r.fromLook[f])*r.k}if(a&&n&&(a=Ip.apply(a,e)),!(/tourdebug/.test(location.search)&&window.__camOverride)){let s=a;if(!s){let l=Vo.view(),f=l[12],u=l[13],h=l[14],p=[-(l[0]*f+l[1]*u+l[2]*h),-(l[4]*f+l[5]*u+l[6]*h),-(l[8]*f+l[9]*u+l[10]*h)];s={eye:p,target:[p[0]-l[2],p[1]-l[6],p[2]-l[10]],fov:2*Math.atan(1/Vo.proj()[5])*180/Math.PI,roll:0}}let c=qa.update(e,s,i);c&&(Dp=c.moving!==!1,a=c,i=c.look)}if(a)GA(u0,a.eye,a.target,a.roll||0),Hp.perspective(lf,a.fov*Math.PI/180,t,.1,700),Ma[0]=a.eye[0],Ma[1]=a.eye[1],Ma[2]=a.eye[2];else{let s=Vo.view(),c=Vo.proj();for(let h=0;h<16;h++)u0[h]=s[h],lf[h]=c[h];let l=s[12],f=s[13],u=s[14];Ma[0]=-(s[0]*l+s[1]*f+s[2]*u),Ma[1]=-(s[4]*l+s[5]*f+s[6]*u),Ma[2]=-(s[8]*l+s[9]*f+s[10]*u)}for(let s in h0)o[s]=i[s]!==void 0?i[s]:h0[s];n&&Ip.pull(o,e)}var ca={wake:[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],wakeDir:[0,0,1],gust:[0,0],focus:6,aperture:0},Lp=[9,9,9,9],T5=[0,0,0,0],of=0,zp=0,Nc=null,L5=0,z5=0,nf=0;function qA(e){let t=Math.min(.1,Math.max(0,e-L5));L5=e,ca.focus=p0.shot.focus,ca.aperture=$a.post>=2?p0.shot.aperture:0;for(let i=0;i<4;i++)Lp[i]+=t,ca.wake[i][3]=T5[i]*Math.exp(-Lp[i]/1.1);let o=d0&&d0.visible?d0.model:null;if(o&&t>0){let i=[o[12],o[13],o[14]];if(Nc){let s=[i[0]-Nc[0],i[1]-Nc[1],i[2]-Nc[2]],c=Math.hypot(s[0],s[1],s[2]),l=c/t;if(c<1.5&&l>.12){let f=Math.min(1,t*8);for(let h=0;h<3;h++)ca.wakeDir[h]+=(s[h]/c-ca.wakeDir[h])*f;let u=Math.hypot(ca.wakeDir[0],ca.wakeDir[1],ca.wakeDir[2])||1;for(let h=0;h<3;h++)ca.wakeDir[h]/=u;if(zp+=t,zp>.14){zp=0;let h=ca.wake[of];h[0]=i[0],h[1]=i[1],h[2]=i[2],T5[of]=Math.min(1,(l-.12)/1.6)*.5,Lp[of]=0,of=(of+1)%4}}}Nc=i}else o||(Nc=null);let n=ls.openNow?ls.openNow():0,r=t>0?(n-z5)/t:0;z5=n;let a=Math.max(-1,Math.min(1,r*1.2));nf+=(a-nf)*Math.min(1,t*(Math.abs(a)>Math.abs(nf)?6:.7)),ca.gust[0]+=nf*5.5*t,ca.gust[1]=Math.abs(nf)}var Cp=0,yu=!1,Np=0,bu=0,Dp=!0,HA=/[?&]nocap\b/.test(location.search);Zo.frame(function({time:e}){if(document.body.classList.contains("visiting")){Cp=0;return}if(Np++,wn.zone==="studio"&&!HA&&bu>0&&e>bu){let r=Dp||!_u.settled?.03333333333333333:.041666666666666664;if(e-bu<r-.006)return}bu=e;let t=Math.max(1,Np);Np=0,sf.begin(),_u.tick(e);let o=ni.active&&Ip.resting&&_u.settled&&($a.isPhone||$a.scale<1||$a.level>0);if(o){if(yu=!yu,yu){sf.end();return}}else yu=!1;let n=e-Cp;Cp=e,$a.frame(o?n/2:n/t),af=$a.reflection,qa.alwaysMirror&&(af=!0),Vo.tick({time:e}),DA(e),fs.update(Vo.pos,Vo.fmouse[1],$p()),IA(),$A(e),wn.update(u0,lf,Ma),O5.listen(Ma),xu=!cf&&wn.room("stair")&&(!wn.room("court")||Ma[0]<.5||Ma[2]>30),hs.setPiano(xu),qA(e),wu.prepare(),gu.prepare&&gu.prepare(),p0.capture(arguments[0],{view:u0,proj:lf,eye:Ma},()=>{CA(()=>{af&&wn.floor&&(wn.zone==="studio"&&Rc.reflect?Rc.reflect(()=>E5(()=>Rc({reflected:!0})),Dp?2:4):E5(()=>{wn.room("studio",!0)&&Rc({reflected:!0}),wn.zone!=="studio"&&(wu(),m5({reflected:!0}),M5(),wn.room("stair",!0)&&(gu({reflected:!0}),k5({reflected:!0,view:u0})),wn.room("court",!0)&&w5(),(xu||wn.room("court",!0)||cf)&&hs(),Rp(fs.batch()),wn.room("street",!0)&&g5(),wn.room("garden",!0)&&y5(),wn.room("florence",!0)&&b5(),_5(d0),ls(),x5(),ls.glass())})),wn.room("studio")&&Rc(),wn.zone!=="studio"&&(wu(),m5(),M5(),wn.room("stair")&&(gu(),k5({view:u0})),wn.room("court")&&w5(),(xu||wn.room("court")||cf)&&hs(),Rp(fs.batch()),wn.room("street")&&g5(),wn.room("garden")&&(y5(),zA()),wn.room("florence")&&b5(),_5(d0),ls(),LA(ca),x5(),ls.glass())})}),p0.present(),sf.end()});})();
