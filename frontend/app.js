// app.js
async function download() {
  const url = document.getElementById("url").value;
  const result = document.getElementById("result");
  result.innerText = "Fetching download link...";

  const res = await fetch("https://your-backend-url/download", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url }),
  });

  const data = await res.json();
  result.innerHTML = `<a href="${data.url}" class="text-blue-500 underline">Download: ${data.title}</a>`;
}
