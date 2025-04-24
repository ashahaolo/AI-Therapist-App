function setMood(mood) {
  const chatbox = document.getElementById("chatbox");
  let message = "";
  let audioFile = "";

  switch (mood) {
    case "happy":
      message = "That's great to hear! Keep spreading the joy! 😄";
      audioFile = "audio/happy.mp3";
      break;
    case "sad":
      message = "I'm here for you. Let's walk through this together. 💙";
      audioFile = "audio/sad.mp3";
      break;
    case "stressed":
      message = "Try closing your eyes. Inhale deeply... and exhale slowly. You're doing okay. 🌿";
      audioFile = "audio/stressed.mp3";
      break;
    case "angry":
      message = "Anger is valid. Breathe in, hold it... now slowly let it go. 🔥";
      audioFile = "audio/angry.mp3";
      break;
  }

  // Play the audio
  const audio = new Audio(audioFile);
  audio.play();

  // Display the message
  chatbox.innerHTML += `<p><strong>Therapist:</strong> ${message}</p>`;
  chatbox.scrollTop = chatbox.scrollHeight;
}
