function setMood(mood) {
  const chatbox = document.getElementById("chatbox");
  let message = "";

  switch (mood) {
    case "happy":
      message = "That's great to hear! Keep spreading the joy! 😄";
      break;
    case "sad":
      message = "I'm here for you. Let's walk through this together. 💙";
      break;
    case "stressed":
      message = "Try taking a deep breath. You’re stronger than you think. 💪";
      break;
    case "angry":
      message = "Anger is valid. Let’s channel it into something positive. 🔥";
      break;
  }

  chatbox.innerHTML += `<p><strong>Therapist:</strong> ${message}</p>`;
  chatbox.scrollTop = chatbox.scrollHeight;
}

document.getElementById("sendBtn").addEventListener("click", () => {
  const input = document.getElementById("userInput");
  const chatbox = document.getElementById("chatbox");
  const message = input.value;

  if (message.trim()) {
    chatbox.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
    chatbox.innerHTML += `<p><strong>Therapist:</strong> I'm listening. Tell me more.</p>`;
    input.value = "";
    chatbox.scrollTop = chatbox.scrollHeight;
  }
});
