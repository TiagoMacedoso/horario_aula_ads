const materias = [
    {
        materia: "Programação de Aplicativos Mobile", 
        professor: "Brenda Medina de Oliveira", 
        email: "brenda.oliveira@facens.br", 
        dia: "Segunda", 
        hora: "22h as 22:50h", 
        link: "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZDliY2YzZGItMTRhZS00MTc5LWI5ODItMDUxNjcwN2JiMWZh%40thread.v2/0?context=%7b%22Tid%22%3a%2259d4f249-0520-46cf-b6b2-873d5da543fe%22%2c%22Oid%22%3a%227326c2b7-2d9c-472f-8cd4-fe0b1fac250e%22%7d", 
        linkName: "PAM" 
    },
    {
        materia: "Inteligência Artificial", 
        professor: "Daniela Costa de Sena", 
        email: "daniela.sena@facens.br", 
        dia: "Quarta", 
        hora: "21h as 22h", 
        link: "https://teams.microsoft.com/l/meetup-join/19%3ameeting_MDQzNGNjMmEtMzM5Yy00NTNhLTk4NTUtMWFmMWQxMjMwMjUy%40thread.v2/0?context=%7b%22Tid%22%3a%2259d4f249-0520-46cf-b6b2-873d5da543fe%22%2c%22Oid%22%3a%22b335140f-8e92-44df-bb54-5e8d6d5eddd7%22%7d", 
        linkName: "IA" 
    },
    {
        materia: "Lean Startup e Agile", 
        professor: "Daniela Costa de Sena", 
        email: "daniela.sena@facens.br", 
        dia: "Quarta", 
        hora: "21:50h as 22:50h", 
        link: "https://teams.microsoft.com/l/meetup-join/19%3ameeting_MDI1NzdjNGMtYWEyZi00N2Y4LWJhYzEtYjc4MGQ2ZjZkOTk5%40thread.v2/0?context=%7b%22Tid%22%3a%2259d4f249-0520-46cf-b6b2-873d5da543fe%22%2c%22Oid%22%3a%22b335140f-8e92-44df-bb54-5e8d6d5eddd7%22%7d", 
        linkName: "LSA" 
    },
    {
        materia: "Arquitetura de Aplicações Web", 
        professor: "Emerson Dos Santos Paduan", 
        email: "emerson.paduan@facens.br", 
        dia: "Quinta", 
        hora: "19h as 20h", 
        link: "https://teams.microsoft.com/l/meetup-join/19%3ameeting_MzQ3OGRkYTctNzlkOC00ZDAwLTkyMGItYWExZWY5YzI1ODYx%40thread.v2/0?context=%7b%22Tid%22%3a%2259d4f249-0520-46cf-b6b2-873d5da543fe%22%2c%22Oid%22%3a%224ecc2cd5-c3b7-451d-9613-63bc411f662b%22%7d", 
        linkName: "AAW" 
    },
    {
        materia: "UPX - Usina de Projetos Experimentais", 
        professor: "Emerson Dos Santos Paduan", 
        email: "emerson.paduan@facens.br", 
        dia: "Quinta", 
        hora: "20h as 21h", 
        link: "https://teams.microsoft.com/l/meetup-join/19%3ameeting_YTRmNTBmOTMtNGJlNi00MGYwLWI4NWEtMzU5ODgyZWI2ZTk4%40thread.v2/0?context=%7b%22Tid%22%3a%2259d4f249-0520-46cf-b6b2-873d5da543fe%22%2c%22Oid%22%3a%224ecc2cd5-c3b7-451d-9613-63bc411f662b%22%7d", 
        linkName: "UPX"
    },
    {
        materia: "CyberSecurity", 
        professor: "Carlos Danilo Luz", 
        email: "carlos.luz@facens.br", 
        dia: "Quinta", 
        hora: "22h as 23h", 
        link: "https://teams.microsoft.com/l/meetup-join/19%3ameeting_YTRmNTBmOTMtNGJlNi00MGYwLWI4NWEtMzU5ODgyZWI2ZTk4%40thread.v2/0?context=%7b%22Tid%22%3a%2259d4f249-0520-46cf-b6b2-873d5da543fe%22%2c%22Oid%22%3a%224ecc2cd5-c3b7-451d-9613-63bc411f662b%22%7d", 
        linkName: "UPX"
    }
]

function mostrarAulas(diaSelecionado, event = null) {
    const container = document.getElementById('aulas-container');
    container.innerHTML = '';

    document.querySelectorAll('.dia').forEach(d => d.classList.remove('selecionado'));
    if (event) {
        event.target.classList.add('selecionado');
    }

    const filtradas = materias.filter(m => m.dia === diaSelecionado);
    filtradas.forEach(m => {
        const slide = document.createElement('swiper-slide');
        slide.innerHTML = `
            <h3>${m.materia}</h3>
            <p><strong>Professor:</strong> ${m.professor}</p>
            <p><strong>E-mail:</strong> ${m.email}</p>
            <p><strong>Horário:</strong> ${m.hora}</p>
            <a class="teams-link" href="${m.link}" target="_blank">
                <img src="./assets/teams.png" alt="Teams">
            </a>
        `;
        container.appendChild(slide);
    });
}

window.onload = function () {
    const diasSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    const hoje = new Date().getDay();
    if (diasSemana[hoje] !== "Domingo" && diasSemana[hoje] !== "Sábado") {
        mostrarAulas(diasSemana[hoje]);
    }
};