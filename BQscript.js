
const username = localStorage.getItem("username");
document.getElementById("diplayuser").textContent = `😉 `+username;



  function displayTime() {
  const now = new Date();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const day = days[now.getDay()];
  const timeString = now.toLocaleTimeString();

  const timeElement = document.getElementById("currentTime");
  timeElement.textContent = `${day} ${timeString} `;
}


setInterval(displayTime, 1000);


displayTime();


const quotes = [
      `Romans 15:13 - "May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit."`,
      `Ephesians 3:20 - "Now to him who is able to do immeasurably more than all we ask or imagine, according to his power that is at work within us."`,
      `Romans 8:38-39 - "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord."`,
      `Lamentations 3:22-23 - "The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness."`,
      `2 Corinthians 4:16-18 - "So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen."`,
      `Deuteronomy 31:6 - "Be strong and courageous. Do not be afraid or terrified because of them, or the Lord your God goes with you; he will never leave you nor forsake you."`,
      `Isaiah 41:10 - "Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand."`,
      `John 15:13 - "Greater love has no one than this: to lay down one's life for one's friends."`,
      `Genesis 11:6 - "The Lord said, “Behold, they are one people, and they all have the same language. And this is what they began to do, and now nothing which they purpose to do will be impossible for them.' "`,
      `Proverbs 3:5-6 - "Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths."`
    ];

    const quoteElement = document.getElementById("quote");
    const moreButton = document.getElementById("btn");

    moreButton.addEventListener("click", () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      quoteElement.textContent = quotes[randomIndex];
    });

    function check(){
      document.getElementById("programpopup").style.display="block";
    }
    function okay(){
      document.getElementById("programpopup").style.display="none";
    }




