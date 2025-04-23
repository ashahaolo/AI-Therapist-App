
const chatbox = document.getElementById("chatbox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

let selectedMood = "";

function setMood(mood) {
  selectedMood = mood;
  const messages = {
    happy: "That's wonderful to hear! Keep smiling 😊",
    sad: "I'm here for you. Let's walk through this together.",
    stressed: "Try to take deep breaths. We can handle one thing at a time.",
    angry: "It's okay to feel angry. Let's find a safe way to express it."
  };
  appendMessage("AI Therapist", messages[mood]);
}

sendBtn.onclick = async function () {
  const message = userInput.value.trim();
  if (!message) return;
  appendMessage("You", message);
  userInput.value = "";

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer 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"
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a compassionate AI therapist helping the user based on their mood." },
          { role: "user", content: `${selectedMood ? "[" + selectedMood + "] " : ""}${message}` }
        ]
      })
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "Sorry, I couldn't understand that.";
    appendMessage("AI Therapist", reply);
  } catch (error) {
    appendMessage("AI Therapist", "There was an error. Please try again later.");
  }
};

function appendMessage(sender, text) {
  const div = document.createElement("div");
  div.textContent = `${sender}: ${text}`;
  chatbox.appendChild(div);
  chatbox.scrollTop = chatbox.scrollHeight;
}
