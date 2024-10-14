async function enviarMensagensContinuamente() {
    const mensagens = [
        "BORA", "TA PRONTO?", "VAI DEMORAR?", "VAMO LOGO", "VAMOO!!", 
        "QUE DEMORA", "TA DEMORANDO MUITO", "ALO", "BORA", "ASSADO"
    ];

    const escolherMensagem = () => mensagens[Math.floor(Math.random() * mensagens.length)];

    const main = document.querySelector("#main");
    const textarea = main.querySelector(`div[contenteditable="true"]`);

    if (!textarea) throw new Error("Não há uma conversa aberta");

    while (true) {  // Loop infinito
        const message = escolherMensagem();
        console.log(message);

        textarea.focus();
        document.execCommand('insertText', false, message);
        textarea.dispatchEvent(new Event('change', { bubbles: true }));

        // Random delay between 50ms to 150ms
        await new Promise(resolve => setTimeout(resolve, 50 + Math.floor(Math.random() * 100)));

        (main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();

        // Random delay between messages from 100ms to 200ms
        await new Promise(resolve => setTimeout(resolve, 100 + Math.floor(Math.random() * 100)));
    }
}

// Iniciar o envio contínuo de mensagens
enviarMensagensContinuamente()
    .then(e => console.log(`Código finalizado, ${e} mensagens enviadas`))
    .catch(console.error);
