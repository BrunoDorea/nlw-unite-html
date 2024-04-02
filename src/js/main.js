let participantes = [
    {
        nome: "Bruno Henrique",
        email: "bruno@email.com",
        dataInscricao: new Date(2024, 2, 26, 19, 20),
        dataCheckIn: new Date(2024, 3, 4, 9, 20),
    },
    {
        nome: "Mayk Brito",
        email: "mayk@email.com",
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
        dataCheckIn: new Date(2024, 3, 5, 9, 30),
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
    return `
    <tr>
        <td>
            <strong>${participante.nome}</strong><br>
            <small>${participante.email}</small>
        </td>
        <td>${participante.dataInscricao}</td>
        <td>${participante.dataCheckIn}</td>
    </tr>
    `;
};

const atualizarLista = (participantes) => {
    let output = "";
    for (let participante of participantes) {
        output = output + criarNovoParticipante(participante);
    }
    document.querySelector("tbody").innerHTML = output
};

atualizarLista(participantes);
