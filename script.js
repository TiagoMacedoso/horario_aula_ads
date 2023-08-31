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
        materia: "Engenharia de Software",
        professor: "Maria Janaina da Silva Ferreira",
        email: "maria.ferreira@facens.br",
        dia: "Segunda",
        hora: "20h as 21h",
        link: "https://teams.microsoft.com/l/meetup-join/19%3ameeting_MzViYmI5ZWQtOTYwYy00NjM2LThhODEtZTVkYWMwNjIxMjgz%40thread.v2/0?context=%7b%22Tid%22%3a%2259d4f249-0520-46cf-b6b2-873d5da543fe%22%2c%22Oid%22%3a%22adfd45bf-a88e-43ba-a7c8-0ac7e35a4fd7%22%7d",
        linkName: "Eng. Software"
    },
    {
        materia: "Programação Orientada à Objetos",
        professor: "Maria Janaina da Silva Ferreira",
        email: "maria.ferreira@facens.br",
        dia: "Quarta",
        hora: "18h as 19h",
        link: "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZmQzNzViMjEtOTk2Yi00NDRlLWJkNGItNDRjY2RkYzc1ZWQ4%40thread.v2/0?context=%7b%22Tid%22%3a%2259d4f249-0520-46cf-b6b2-873d5da543fe%22%2c%22Oid%22%3a%22adfd45bf-a88e-43ba-a7c8-0ac7e35a4fd7%22%7d",
        linkName: "POO"
    },
    {
        materia: "Redes de Computadores",
        professor: "Eliney Sabino",
        email: "eliney.sabino@facens.br",
        dia: "Quinta",
        hora: "20h as 21h",
        link: "https://teams.microsoft.com/l/meetup-join/19%3Ameeting_MjJiZDAwZWUtNTEwNi00YTk1LTk3YTUtNDk0NWNmM2I5Mjdh%40thread.v2/0?context=%7B%22Tid%22%3A%2259d4f249-0520-46cf-b6b2-873d5da543fe%22%2C%22Oid%22%3A%22e8ed8b30-a1ab-4480-b76d-cc355287fb38%22%2C%22MessageId%22%3A%220%22%7D",
        linkName: "Redes"
    },
    {
        materia: "Desenvolvimento Humano e Social",
        professor: "Gilberto José de Camargo",
        email: "gilberto.camargo@facens.br",
        dia: "Sexta",
        hora: "18h as 19h",
        link: "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZTMzNzZjZTgtNmVmZi00ZDI2LTk0MWQtM2YwNzE4OGUxZjgx%40thread.v2/0?context=%7b%22Tid%22%3a%2259d4f249-0520-46cf-b6b2-873d5da543fe%22%2c%22Oid%22%3a%222f5629c9-848a-43a1-b91c-4858fa1c6386%22%7d",
        linkName: "Des. Hum. e Social"
    },
    {
        materia: "Banco de Dados",
        professor: "Maria Janaina da Silva Ferreira",
        email: "maria.ferreira@facens.br",
        dia: "Sexta",
        hora: "19h as 20h",
        link: "https://teams.microsoft.com/l/meetup-join/19%3ameeting_MTY1YzFlNmMtYmEzOC00NTlhLTkzZDYtNDFjMDA3YWZlNDEy%40thread.v2/0?context=%7b%22Tid%22%3a%2259d4f249-0520-46cf-b6b2-873d5da543fe%22%2c%22Oid%22%3a%22adfd45bf-a88e-43ba-a7c8-0ac7e35a4fd7%22%7d",
        linkName: "BD"
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