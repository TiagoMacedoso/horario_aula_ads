const tbody = document.querySelector("tbody")

const materias = [
    {
        materia: "Empreendedorismo",
        professor: "Natália Marangão",
        email: "natalia.marangao@facens.br",
        dia: "Segunda",
        hora: "19h as 20h",
        link: "https://teams.microsoft.com/l/meetup-join/19%3ameeting_NDMwYzJjZGQtMmVmOC00MzNjLTlmNTUtMGE5MTlmNDViMzEx%40thread.v2/0?context=%7b%22Tid%22%3a%2259d4f249-0520-46cf-b6b2-873d5da543fe%22%2c%22Oid%22%3a%221b575e52-889f-4f2e-b105-8ab037e88ec8%22%7d",
        linkName: "Empreendedorismo"
    },
    {
        materia: "Estrutura de Dados",
        professor: "Bruno Aguilar da Cunha",
        email: "bruno.cunha@facens.br",
        dia: "Terça",
        hora: "19h as 20h",
        link: "https://teams.microsoft.com/l/meetup-join/19%3ameeting_OWU1MzQyYTMtZGY3Yy00ZWMxLTg4NDQtMGRhMmVkMjk2ZjE5%40thread.v2/0?context=%7b%22Tid%22%3a%2259d4f249-0520-46cf-b6b2-873d5da543fe%22%2c%22Oid%22%3a%222418aa2e-245c-4ab4-a995-0376f0024cd1%22%7d",
        linkName: "ED"
    },
    {
        materia: "Análise de Sistemas",
        professor: "Johannes Lochter",
        email: "johannes.lochter@facens.br",
        dia: "Terça",
        hora: "21h as 22h",
        link: "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZjUxYTg2YWMtZmM2MC00YWU1LTg0M2UtMzlkOTlmZWRmZmVl%40thread.v2/0?context=%7b%22Tid%22%3a%2259d4f249-0520-46cf-b6b2-873d5da543fe%22%2c%22Oid%22%3a%22e8ed8b30-a1ab-4480-b76d-cc355287fb38%22%7d",
        linkName: "AS"
    },
    {
        materia: "UPX III",
        professor: "Hadassa Harumi Castelo Onisaki Pinto",
        email: "hadassa.onisaki@facens.br",
        dia: "Quarta",
        hora: "18:00h as 19:00h",
        link: "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZmY0MWIwNmYtOTY3Zi00NzY5LThjZDQtYWJmOGZiNzg1NDU3%40thread.v2/0?context=%7b%22Tid%22%3a%2259d4f249-0520-46cf-b6b2-873d5da543fe%22%2c%22Oid%22%3a%22afbe515f-16ea-4637-96dd-79029fcbc4af%22%7d",
        linkName: "UPX III"
    },
    {
        materia: "Linguagens de Programação",
        professor: "Emerson Dos Santos Paduan",
        email: "emerson.paduan@facens.br",
        dia: "Quarta",
        hora: "20h as 21h",
        link: "https://teams.microsoft.com/l/meetup-join/19%3ameeting_NDUzZDYwNDctMjgzMi00NjkyLTliNmEtY2RhMTBmZDA1M2U4%40thread.v2/0?context=%7b%22Tid%22%3a%2259d4f249-0520-46cf-b6b2-873d5da543fe%22%2c%22Oid%22%3a%224ecc2cd5-c3b7-451d-9613-63bc411f662b%22%7d",
        linkName: "LP"
    },
    {
        materia: "Estatística",
        professor: "Rodrigo Luiz Gigante",
        email: "rodrigo.gigante@facens.br",
        dia: "Sexta",
        hora: "18h as 19h",
        link: "https://teams.microsoft.com/l/meetup-join/19%3ameeting_MzRlYWM2NDUtMDhkNC00Yzc4LWE4N2UtNDRlYTgyZjlkMzUy%40thread.v2/0?context=%7b%22Tid%22%3a%2259d4f249-0520-46cf-b6b2-873d5da543fe%22%2c%22Oid%22%3a%2246a23140-071b-40b0-9a67-063b784bef55%22%7d",
        linkName: "Estatística"
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