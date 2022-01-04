( () => { 
	const criarTarefa = (evento)=> {
		evento.preventDefault();
		const lista = document.querySelector("[data-list]");
		const input = document.querySelector("[data-form-input]");
		const valor = input.value;
		const tarefa = document.createElement("li");
		tarefa.classList.add("task");
		const conteudo = `<p class="content">${valor}</p>`;
		tarefa.innerHTML = conteudo;
		tarefa.appendChild(BotaoConcluir());
		tarefa.appendChild(BotaoDeletar());
		lista.appendChild(tarefa);
		input.value = " ";
	}

	const novaTarefa = document.querySelector("[data-form-button]");

	novaTarefa.addEventListener("click", criarTarefa);

	const BotaoConcluir = () => {
		const botaoConcluir = document.createElement("button");
		botaoConcluir.classList.add("check-button");
		botaoConcluir.innerText = "concluir";
		botaoConcluir.addEventListener("click", concluirTarefa); 
		return botaoConcluir;
	}

	const concluirTarefa = (evento) => {
		const botaoConcluir = evento.target;
		const tarefaCompleta = botaoConcluir.parentElement;
		tarefaCompleta.classList.toggle("done");
	}

	const BotaoDeletar = () =>{
		const botaoDeletar = document.createElement("button");
		botaoDeletar.innerText = "deletar";
		botaoDeletar.addEventListener("click", deletarTarefa);
		return botaoDeletar;
	}

	const deletarTarefa = (evento) => {
		const botaoDeletar = evento.target;
		const tarefaCompleta = botaoDeletar.parentElement;
		tarefaCompleta.remove();
		return botaoDeletar;
	}
})()