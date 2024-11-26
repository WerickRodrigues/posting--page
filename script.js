const form = document.querySelector("#postForm");
const tituloInput = document.querySelector("#titulo");
const conteudoInput = document.querySelector("#conteudo");
const renderizadorTitulo = document.querySelector("#renderizador-titulo");
const renderizadorConteudo = document.querySelector("#renderizador-conteudo");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        title: tituloInput.value,
        body: conteudoInput.value,
        userId: 1,
    };

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json; charset=UTF-8" },
        });

        if (!response.ok) throw new Error("Erro ao enviar o post");

        const responseData = await response.json();

        renderizadorTitulo.innerHTML = responseData.title;
        renderizadorConteudo.innerHTML = responseData.body;

        tituloInput.value = "";
        conteudoInput.value = "";

    } catch (error) {
        console.error("Erro:", error);
        alert("Houve um problema ao criar o post.");
    }
});
