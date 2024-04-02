let participantes = [
    {
        nome: "Bianca Joely",
        email: "bianca@email.com",
        dataInscricao: new Date(2024, 2, 26, 19, 20),
        dataCheckIn: null,
    },
    {
        nome: "Mayk Brito",
        email: "mayk@email.com",
        dataInscricao: new Date(2024, 2, 27, 22, 20),
        dataCheckIn: new Date(2024, 3, 4, 8, 20),
    },
    {
        nome: "Diego Fernandes",
        email: "diego@email.com",
        dataInscricao: new Date(2024, 2, 27, 22, 20),
        dataCheckIn: new Date(2024, 3, 4, 8, 20),
    },
    {
        nome: "Carla Silva",
        email: "carla@email.com",
        dataInscricao: new Date(2024, 2, 28, 15, 30),
        dataCheckIn: new Date(2024, 3, 3, 10, 40),
    },
    {
        nome: "Pedro Oliveira",
        email: "pedro@email.com",
        dataInscricao: new Date(2024, 2, 29, 10, 45),
        dataCheckIn: new Date(2024, 3, 2, 11, 15),
    },
    {
        nome: "Ana Santos",
        email: "ana@email.com",
        dataInscricao: new Date(2024, 2, 29, 18, 50),
        dataCheckIn: new Date(2024, 3, 1, 14, 20),
    },
    {
        nome: "Lucas Costa",
        email: "lucas@email.com",
        dataInscricao: new Date(2024, 3, 1, 12, 10),
        dataCheckIn: null,
    },
    {
        nome: "Maria Souza",
        email: "maria@email.com",
        dataInscricao: new Date(2024, 3, 2, 9, 20),
        dataCheckIn: new Date(2024, 3, 6, 8, 45),
    },
    {
        nome: "Gustavo Santos",
        email: "gustavo@email.com",
        dataInscricao: new Date(2024, 3, 3, 14, 30),
        dataCheckIn: new Date(2024, 3, 7, 10, 10),
    },
    {
        nome: "Fernanda Lima",
        email: "fernanda@email.com",
        dataInscricao: new Date(2024, 3, 3, 19, 40),
        dataCheckIn: new Date(2024, 3, 8, 11, 25),
    },
    {
        nome: "Ricardo Almeida",
        email: "ricardo@email.com",
        dataInscricao: new Date(2024, 3, 4, 16, 50),
        dataCheckIn: new Date(2024, 3, 9, 12, 30),
    },
];

const criarNovoParticipante = (participante) => {
    const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao);
    let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn);

    if (participante.dataCheckIn == null) {
        dataCheckIn = `
        <button
            data-email="${participante.email}"
            onclick="fazerCheckIn(event)">
            Confirmar check-in
        </button>
        `;
    }

    return `
    <tr>
        <td>
            <strong>${participante.nome}</strong><br>
            <small>${participante.email}</small>
        </td>
        <td>${dataInscricao}</td>
        <td>${dataCheckIn}</td>
    </tr>
    `;
};

const atualizarLista = (participantes) => {
    let output = "";
    for (let participante of participantes) {
        output = output + criarNovoParticipante(participante);
    }
    document.querySelector("tbody").innerHTML = output;
};

atualizarLista(participantes);

const adicionarParticipante = (event) => {
    event.preventDefault();

    const dadosDoFormulario = new FormData(event.target);

    const participante = {
        nome: dadosDoFormulario.get("nome"),
        email: dadosDoFormulario.get("email"),
        dataInscricao: new Date(),
        dataCheckIn: null,
    };

    const participanteExiste = participantes.find(
        (p) => p.email == participante.email
    );

    if (participanteExiste) {
        alert("Email já cadastrado");
        return;
    }

    participantes = [participante, ...participantes];
    atualizarLista(participantes);

    event.target.querySelector('[name="nome"]').value = "";
    event.target.querySelector('[name="email"]').value = "";
};

const fazerCheckIn = (event) => {
    const mensagemConfirmacao = "Tem certeza que deseja confirmar o check-in?";
    if (confirm(mensagemConfirmacao) == false) {
        return;
    }

    const participante = participantes.find(
        (p) => p.email == event.target.dataset.email
    );
    participante.dataCheckIn = new Date();
    atualizarLista(participantes);
};
