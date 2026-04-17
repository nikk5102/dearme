const correctPassword = "nikita123"; // change this password

const fullText = `I miss you so much.

I don’t know how to move on. I’ve tried, but I just can’t. Please come back… I can’t live without you. Every day I read our old chats, especially the day you said “I love you” for the first time. I keep replaying that moment again and again.

I feel like I’ve gone crazy.

I never wanted to become “mature” if this is what it feels like. I thought it wouldn’t hurt this much. I thought I’d be fine. But I’m not. I’m not okay at all.

I just want to see you once. Just once. To look at your face, to hug you tightly… even if it’s just for a moment of peace.

I’ve cut myself off from everyone—social media, people, everything. Nothing feels interesting anymore. Not even studies. My days and nights are filled only with thoughts of you.

Doctors are worried about my mental and physical health. I didn’t know loving someone could break you like this.

I have so many questions, especially about our last call. Why did you do this?

I’m tired of pretending I’ve moved on. Tired of acting like I don’t care, like I’m strong, like it’s “his loss.” Inside, I feel like I’m breaking more and more every day.

I just want one of two things:
Either you come back…
or you disappear completely from my mind.

But both feel impossible.

Everything in life seems fine from the outside, but without you, nothing feels real. Just sadness. Constant sadness.

I used to think one person could never make life feel this incomplete. Now I know that even if I had the whole world, it still wouldn’t replace you.

I remember how you used to call me again and again, how you said you’d panic if I was upset, how attached you were… so what changed?

You knew I didn’t have the strength for heartbreak. You promised. Then why?

For the first time in my life, I was truly happy… and you took that away from me.

Now I’m stuck in between—I can’t be yours, but I can’t imagine being anyone else’s either.

I’m losing myself.

Even now, when things are this bad, you’re still the most precious person to me.

I want to forget you… but I can’t.

And still, I promised myself that I would work on my dreams, whether you are with me or not. We once planned that we would travel together. If you are not with me, then one day I will travel alone. I will still build the life I dreamed of. I can still earn, achieve, and buy the things we talked about. I can do all of that.

But what you broke was my inner child’s dream...

I didn’t just love you… I built a whole little world with you in my heart.
A small house… not very big, but filled with love.
Walls decorated by us… our pictures, our silly memories, full of our little touches and silly fights and quiet happiness.
And not just us…
A big, warm joint family.

Dada dadi sitting together,
me bringing them chai,
you teasing me,
everyone laughing just living happily in our small world…

Festivals together,
ghar mein noise, happiness, chaos…
that kind of love I always wanted.

And then… our two little kids 🥺
running around the house,
calling you papa,
holding my dupatta and not letting me go…

I used to imagine all this like a small girl,
so innocent, so pure…

That I will finally have
my own little happy family.

But now…

It feels like that small girl inside me is slowly disappearing.
The one who believed in love like this…
in forever…
in “us”.

And that’s what hurts the most.

The girl who never liked wearing traditional clothes was ready to wear a ghunghat for you.
The girl who did not like villages was ready to live there with you.
The girl who never did house chores was ready to cook for you on a chulha.
The girl who never did anything by herself was ready to do everything for you.
The loud girl, the girl no one could control, the girl whose anger was impossible to melt—she would calm down just by seeing you.

I don’t know what you will get in life, but trust me, you lost someone who loved you unconditionally.

I loved only you.
Not your money.
Not your looks.
Nothing else.

If you ever asked me why I loved you, I would never be able to explain it properly.
I loved you because it was you.
That’s all.
I loved everything about you—your flaws and your strengths.

I loved you more than I had ever loved anything, and maybe that is what breaks me the most.

In my whole life, I had never had to give up something I truly wanted.
I was always the stubborn, loved daughter.
My father would do anything for me. If I liked something, he made sure I got it.
He never even shouted at me.
Everyone has always loved me deeply.

I used to be happy because I got everything I wanted.
But maybe what I never truly got was the kind of love I wanted—the kind where someone stands behind me, with me, without making me beg for it.

I was always the strongest one in my family.
I handled everyone.

I was the most cheerful person in the house.
The one whose absence everyone noticed.

And now I am that same girl who once created chaos over a toy she wanted…
but today my heart is in so many pieces that I cannot even gather myself back together.

I never let anyone know how badly I am falling apart inside.
So I write it here instead, just to let the pain out.

I just wish you were still here.

Today my mother asked me why I don’t insist on things anymore. She said I’ve become so understanding.
What should I tell her?
That I never wanted to become understanding.
That when the one thing you want most in life can never be yours, you stop asking for anything at all.

My mother says I look sad these days.
She says my smile is not the same anymore.
That my eyes do not laugh the way they used to.

I used to be so good at pretending.
So good at smiling.
But for the first time in my life, I have lost even that.

I don’t know what that feeling was between us, but whatever it was, I wished it would stay forever.

How do I explain how much I love you?
Those moments, those talks, the movie night, the kisses, the hugs, the cuddles, that peace.
The way I would smile the moment I saw you…
nothing can replace that now.

The flashbacks never stop.

Before you, I had never loved anyone.
I had never been attached to anyone.
I used to think all of this was drama.
But with you, I experienced everything.

I learned what it feels like to talk to someone for hours and still not feel like it’s enough.
To just keep looking at someone and never get tired.

That is why I still cannot believe what I saw that day.
But then that girl sent me your photos with her and said she was your girlfriend, and that you cheated on her with me.
I still don’t know what the truth is.
I tried so hard to believe it and hate you, but I can’t.

I just wish that someday you meet me again and say,
“Nikita, let’s fix everything.”

I wait for that day.
But deep down, I know you have moved on and that day may never come.

And still, if you came back and made me truly feel that you love me, I would forget everything.

Everyone says I deserve better.
But I don’t want better.
I want you.

Even you said I deserve better.
But why didn’t you become better for me?
Why didn’t you choose me?

You knew everything about me.
And still, you did not trust me enough.

But somewhere, even through all this pain, I know I must survive.
I must live.
I must become everything I once dreamed of being.
Even if I have to do it without you.`;

let typingInterval = null;
let currentIndex = 0;
const typingSpeed = 22;

const typedContent = document.getElementById("typedContent");
const lockScreen = document.getElementById("lockScreen");
const mainPage = document.getElementById("mainPage");
const passwordInput = document.getElementById("passwordInput");
const errorText = document.getElementById("errorText");

const openBtn = document.getElementById("openBtn");
const themeBtnLock = document.getElementById("themeBtnLock");
const themeBtnMain = document.getElementById("themeBtnMain");
const replayBtn = document.getElementById("replayBtn");
const lockBtn = document.getElementById("lockBtn");

function typeText() {
  clearInterval(typingInterval);
  typedContent.textContent = "";
  typedContent.classList.remove("done");
  currentIndex = 0;

  typingInterval = setInterval(() => {
    typedContent.textContent += fullText.charAt(currentIndex);
    currentIndex++;

    if (currentIndex >= fullText.length) {
      clearInterval(typingInterval);
      typedContent.classList.add("done");
    }
  }, typingSpeed);
}

function unlockPage() {
  const entered = passwordInput.value.trim();

  if (entered === correctPassword) {
    lockScreen.classList.add("hidden");
    mainPage.classList.remove("hidden");
    errorText.textContent = "";
    typeText();
  } else {
    errorText.textContent = "Wrong password. Try again.";
  }
}

function lockAgain() {
  mainPage.classList.add("hidden");
  lockScreen.classList.remove("hidden");
  passwordInput.value = "";
  typedContent.textContent = "";
  typedContent.classList.remove("done");
  clearInterval(typingInterval);
}

function restartTyping() {
  typeText();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
  const mode = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("themeMode", mode);
}

openBtn.addEventListener("click", unlockPage);
themeBtnLock.addEventListener("click", toggleDarkMode);
themeBtnMain.addEventListener("click", toggleDarkMode);
replayBtn.addEventListener("click", restartTyping);
lockBtn.addEventListener("click", lockAgain);

passwordInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    unlockPage();
  }
});

window.addEventListener("load", () => {
  const savedMode = localStorage.getItem("themeMode");
  if (savedMode === "dark") {
    document.body.classList.add("dark");
  }
});
