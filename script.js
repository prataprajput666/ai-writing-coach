<script>
async function improveWriting() {
    const input = document.getElementById("inputText").value;
    const output = document.getElementById("output");

    output.innerHTML = "Improving...";

    const API_KEY = "AIzaSyCvyXjTNdtpxj6WxheyHNex5qtQf5ZLVu0";

    try {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                {
                                    text: `Correct grammar and improve vocabulary of this text:\n${input}`
                                }
                            ]
                        }
                    ]
                })
            }
        );

        const data = await response.json();

        const result =
            data.candidates[0].content.parts[0].text;

        output.innerHTML = result;

    } catch (error) {
        output.innerHTML = "Error connecting AI.";
        console.error(error);
    }
}
</script>
