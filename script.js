const tbody = document.querySelector("tbody")

const materias = [
    {
        materia: "UPX IV",
        professor: "Brenda Medina de Oliveira",
        email: "brenda.oliveira@facens.br",
        dia: "Segunda",
        hora: "21h as 22h",
        link: "https://teams.microsoft.com/l/meetup-join/19%3ameeting_MDYxMGY0NmEtOWY2Yy00MDVmLWEyZDItZWNhNmEwZTM0N2E0%40thread.v2/0?context=%7b%22Tid%22%3a%2259d4f249-0520-46cf-b6b2-873d5da543fe%22%2c%22Oid%22%3a%227326c2b7-2d9c-472f-8cd4-fe0b1fac250e%22%7d",
        linkName: "UPX IV"
    },
    {
        materia: "Modelagem de Processos de Negócios",
        professor: "Paula Donaduzzi Rigo",
        email: "paula.rigo@facens.br",
        dia: "Terça",
        hora: "20h as 21h",
        link: "https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fmeetup-join%2F19%3Ameeting_ZDVhNDY3YTUtODA0ZC00NDVmLWE2OWUtNjcxYWUzYzNmMjYw%40thread.v2%2F0%3Fcontext%3D%257b%2522Tid%2522%253a%252259d4f249-0520-46cf-b6b2-873d5da543fe%2522%252c%2522Oid%2522%253a%2522fea352f5-65e2-4830-bbf8-57420354406f%2522%257d%26anon%3Dtrue&type=meetup-join&deeplinkId=ee19771f-70a5-4f81-9bf8-0fe421a17955&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true",
        linkName: "MPN"
    },
    {
        materia: "Qualidade e Teste de Software",
        professor: "Rafael Albuquerque Pinto",
        email: "rafael.pinto@facens.br",
        dia: "Quarta",
        hora: "21:50h as 22:40h",
        link: "https://teams.microsoft.com/l/meetup-join/19%3ameeting_N2ExNWRiODktODk2OC00NWZiLWFjYTUtOGZmYzI4ZGRlOGMx%40thread.v2/0?context=%7b%22Tid%22%3a%2259d4f249-0520-46cf-b6b2-873d5da543fe%22%2c%22Oid%22%3a%22bbfbe01a-312d-4822-81f9-33b52731d6da%22%7d",
        linkName: "QTS"
    },
    {
        materia: "Programação Web",
        professor: "Emerson Dos Santos Paduan",
        email: "emerson.paduan@facens.br",
        dia: "Quinta",
        hora: "21h as 22h",
        link: "https://teams.microsoft.com/l/meetup-join/19%3ameeting_YWI2NDUxYTMtYjRjYi00ZDM2LWFhYTQtOWI0OTkwMWM2YmI0%40thread.v2/0?context=%7b%22Tid%22%3a%2259d4f249-0520-46cf-b6b2-873d5da543fe%22%2c%22Oid%22%3a%224ecc2cd5-c3b7-451d-9613-63bc411f662b%22%7d",
        linkName: "PW"
    },
    {
        materia: "Business Intelligence",
        professor: "SEM PROFESSOR",
        email: ".@facens.br",
        dia: "-",
        hora: "-h as -h",
        link: "https://facens.br",
        linkName: "BI"
    },
    {
        materia: "Eletiva 1",
        professor: "SEM PROFESSOR",
        email: ".@facens.br",
        dia: "-",
        hora: "-h as -h",
        link: "https://facens.br",
        linkName: "Eletiva"
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