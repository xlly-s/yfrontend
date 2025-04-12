async function download() {
  const url = document.getElementById("url").value;
  const result = document.getElementById("result");
  result.innerText = "Fetching download link...";

  try {
    const res = await fetch("https://youtube-production-c250.up.railway.app/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    });

    const data = await res.json();
    console.log('Backend Response:', data);  // Log the response

    if (data.error) {
      result.innerText = data.error;  // Display error message from backend
    } else {
      result.innerHTML = `<a href="${data.url}" class="text-blue-500 underline">Download: ${data.title}</a>`;
    }
  } catch (error) {
    console.error('Error:', error);  // Log any errors from frontend
    result.innerText = `Error: ${error.message}`;
  }
}
