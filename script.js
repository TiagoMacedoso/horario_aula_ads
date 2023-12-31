const tbody = document.querySelector("tbody")

const materias = [
    {
        materia: "Usina de Projetos Experimentais II",
        professor: "Adson Nogueira Alves",
        email: "adson.alves@facens.br",
        dia: "Segunda",
        hora: "19h as 20h",
        link: "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ODhhOWM5NDItNmEwNi00OWVlLWEzYjEtYzI3N2M3ZTUwNWRm%40thread.v2/0?context=%7b%22Tid%22%3a%2259d4f249-0520-46cf-b6b2-873d5da543fe%22%2c%22Oid%22%3a%22f791c0ec-0a4c-447d-be2b-8ff5895ef185%22%7d",
        linkName: "UPX II"
    },
    {
        materia: "Banco de Dados",
        professor: "Vanessa Cristina Lourenço",
        email: "vanessa.lourenco@facens.br",
        dia: "Quarta",
        hora: "21:30h as 22:30h",
        link: "https://teams.microsoft.com/l/meetup-join/19%3Ameeting_ZTg5NTM1NjMtN2QxZi00N2QyLWJhNzYtMWY3MGYxYmM1Y2Q4%40thread.v2/0?context=%7B%22Tid%22%3A%2259d4f249-0520-46cf-b6b2-873d5da543fe%22%2C%22Oid%22%3A%22e8ed8b30-a1ab-4480-b76d-cc355287fb38%22%2C%22MessageId%22%3A%220%22%7D",
        linkName: "BD"
    },
    {
        materia: "Engenharia de Software",
        professor: "Evandro Klengenfuss Veronez",
        email: "evandro.veronez@facens.br",
        dia: "Quinta",
        hora: "18h as 19h",
        link: "https://teams.microsoft.com/l/meetup-join/19%3ameeting_OTU1MjFiZGQtOGJiMy00ZWE4LTllYTAtZDBmNTU1OGRkZDg1%40thread.v2/0?context=%7b%22Tid%22%3a%2259d4f249-0520-46cf-b6b2-873d5da543fe%22%2c%22Oid%22%3a%2280f5702e-0a98-4db2-9a23-4c7250ebe79e%22%7d",
        linkName: "Eng. Software"
    },
    {
        materia: "Redes de Computadores",
        professor: "Amauri Antunes Filho",
        email: "amauri.filho@facens.br",
        dia: "Quinta",
        hora: "20h as 21h",
        link: "https://teams.microsoft.com/l/meetup-join/19%3Ameeting_MDM4NjY2YjAtNDJkMC00Y2Y1LWEzMDAtMDcwMjE4YmE4MDNk%40thread.v2/0?context=%7B%22Tid%22%3A%2259d4f249-0520-46cf-b6b2-873d5da543fe%22%2C%22Oid%22%3A%22d25365c9-870d-4903-b8e9-87358155a71c%22%2C%22MessageId%22%3A%220%22%7D",
        linkName: "Redes"
    },
    {
        materia: "Desenvolvimento Humano e Social",
        professor: "Gilberto José de Camargo",
        email: "gilberto.camargo@facens.br",
        dia: "Sexta",
        hora: "18h as 19h",
        link: "https://teams.microsoft.com/l/meetup-join/19%3Ameeting_ZWU0MTAwYjAtN2RmNy00OWMzLThkNTMtZThiMTE1NjVlZmRk%40thread.v2/0?context=%7B%22Tid%22%3A%2259d4f249-0520-46cf-b6b2-873d5da543fe%22%2C%22Oid%22%3A%222f5629c9-848a-43a1-b91c-4858fa1c6386%22%2C%22MessageId%22%3A%220%22%7D",
        linkName: "Des. Hum. e Social"
    },
    {
        materia: "Programação Orientada à Objetos",
        professor: "Emerson Dos Santos Paduan",
        email: "emerson.paduan@facens.br",
        dia: "Sexta",
        hora: "21h as 22h",
        link: "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZmQzNzViMjEtOTk2Yi00NDRlLWJkNGItNDRjY2RkYzc1ZWQ4%40thread.v2/0?context=%7b%22Tid%22%3a%2259d4f249-0520-46cf-b6b2-873d5da543fe%22%2c%22Oid%22%3a%22adfd45bf-a88e-43ba-a7c8-0ac7e35a4fd7%22%7d",
        linkName: "POO"
    }
]

for(let i = 0; i < materias.length; i++){
    let tr = tbody.insertRow()
    
    let td_materia = tr.insertCell()
    let td_professor = tr.insertCell()
    let td_email = tr.insertCell()
    let td_dia = tr.insertCell()
    let td_hora = tr.insertCell()
    let td_link = tr.insertCell()

    td_materia.innerText = materias[i].materia
    td_professor.innerText = materias[i].professor
    td_email.innerText = materias[i].email
    td_dia.innerText = materias[i].dia
    td_hora.innerText = materias[i].hora

    materias[i].link == "Não divulgado" ? td_link.innerText = "Ainda não está disponível" : td_link.innerHTML = `<a href="${materias[i].link}">Clique para acessar o chat de ${materias[i].linkName}</a>`
}