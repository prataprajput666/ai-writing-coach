async function improveWriting() {
    const input = document.getElementById("inputText").value;
    const output = document.getElementById("output");

    if (!input.trim()) {
        output.innerHTML = "Please enter text.";
        return;
    }

    output.innerHTML = "Improving your writing...";

    const API_KEY = "AIzaSyAhDTZFK_fccObCc3GPBpxF2U-A14voSM8";

    try {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
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
                                    text:
                                        `Correct grammar, improve vocabulary, and make this professional:\n\n${input}`
                                }
                            ]
                        }
                    ]
                })
            }
        );

        const data = await response.json();

        console.log(data);

        const result =
            data.candidates[0].content.parts[0].text;

        output.innerHTML = `
            <div class="result-box">
                <h2>Improved Writing</h2>
                <p>${result}</p>
            </div>
        `;
    } catch (error) {
        console.error(error);
        output.innerHTML = "Error connecting AI.";
    }
}
