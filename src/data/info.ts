export const info = {
  baseUrl: "https://astro-portfolio-uzair.vercel.app",
  name: "Agustín Palavecino",
  jobDescription: "Desarrollador Web Full Stack",
  about: `Desarrollador web full stack de la ciudad de Santiago de Estero, Argentina. 
   Graduado en Analista en Sistemas en la Universidad Nacional de Santiago del Estero y estudiante de la 
   Licenciatura en Sistemas de Información.
   Me apasionan los proyectos desafiantes y el aprendizaje de nuevas tecnologías.
   Comencé a introducirme en el desarrollo web 3 años atrás, con demostrada experiencia tanto en Frontend como en Backend.
  `,
  experience: [

    
    {
      name: "Vitrinia",
      resume: "Aplicación de envíos online",
      startDate: "Enero 2022",
      endDate: "Septiembre 2022",
      experiencia: true,
      tecnologias: [" ReactJs", ", NodeJs", ", Express.js", ", Sequelize", ", MySQL"],
      description: [
        "- Desarrollo y mantenimiento de componentes UI usando React y React-botstrap.",
        "- Participación en el análisis y diseño de soluciones para múltiples requerimientos de usuario.",
        "- Desarrollo y mantenimiento del servidor usando Node.js, Express y Sequelize",
        "- Uso de la metodología ágil Scrum con la herramienta Jira.",      ],
    },
    {
      name: "Universidad Nacional de Santiago del Estero",
      resume: "Ayudante estudiantil de la catedra de Fundamentos de la Programación",
      startDate: "Enero 2022",
      endDate: "Enero 2023",
      experiencia: false,
      description: [
        "- Clases de apoyo semanales tanto teóricas como prácticas sobre temas fundamentales de la informática como estructuras de datos, algoritmos, tipos de datos, etc.",
        "- Apoyo en el taller de la materia donde se desarrollaban programas en Python.",
        "- Asistencia en los exámenes parciales donde resolvía dudas a los estudiantes.",
      ],
    },
    {
      name: "Gestory Shop",
      resume: "Sistema web de catálogo online",
      startDate: "Junio 2021",
      endDate: "Presente",
      experiencia: true,
      tecnologias: [" Ionic", ", NodeJs", ", Express.js", ", MySQL"],
      description: [
        "- Desarrollo de componentes UI usando Ionic UI Components.",
        "- Participación en el análisis y diseño de soluciones para múltiples requerimientos de usuario.",
        "- Desarrollo de múltiples endpoints con diferentes funcionalidades usando Node.js y Express.",
        "- Uso de la metodología ágil Kanban con la herramienta Trello.",
      ],
    },

    {
      name: "Gestory",
      resume: "Sistema web de gestión comercial",
      startDate: "Enero 2020",
      endDate: "Presente",
      experiencia: true,
      tecnologias: [" Angular", ", NodeJs", ", Express.js", ", MySQL"],
      description: [
        "- Desarrollo de componentes UI usando Angular, Bootstap, ngx-bootstrap y Material Angular.",
        "- Participación en el análisis y diseño de soluciones para múltiples requerimientos de usuario.",
        "- Desarrollo de múltiples endpoints con diferentes funcionalidades usando Node.js y Express.",
        "- Uso de la metodología ágil Kanban con la herramienta Trello.",
      ],
    },

  ],

  education: [
    {
      name: "Universidad Nacional de Santiago del Estero",
      startDate: "2015",
      endDate: "Presente",
      experiencia: false,
      description: [
        "Título de Licenciatura en Sistemas de Información",
      ],
    },
    {
      name: "Universidad Nacional de Santiago del Estero",
      startDate: "2015",
      endDate: "2022",
      experiencia: false,
      description: ["Título de Analista en sistemas (completado)"],
    },
    {
      name: "Colegio San José",
      startDate: "2008",
      endDate: "2014",
      experiencia: false,
      description: ["Título Bachiller"],
    },
  ],

  socialMedia: {
    github: "https://github.com/agupalavecino97",
    email: "agupalavecino97@gmail.com",
    linkedin: "https://www.linkedin.com/in/agustin-adrian-palavecino/",
  },

  projects: [
    {
      title: "Gestory",
      isFeatured: true,
      thumbnail: "/assets/images/projects/gestory.png",
      liveUrl: "https://admin.gestory.app",
      youtubeUrl: "https://www.youtube.com/watch?v=IInwzHK_46Y",
      tecnologias: [
          {name: "Angular", logo: "/assets/images/logos/angular.png"},
          // {name: "Bootstrap", logo: "/assets/images/logos/bootstrap.png"},
          {name: "Material Angular", logo: "/assets/images/logos/material-angular.png"},
          {name: "NodeJs", logo: "/assets/images/logos/nodejs.png"},
          {name: "Express", logo: "/assets/images/logos/express.png"},
          {name: "Mysql", logo: "/assets/images/logos/mysql.png"},
        ],
      description: "Sistema web de gestión comercial integral con múltiples módulos. Control de stock, registro de ventas, facturación electrónica conectada con AFIP, control de caja, control de clientes, control de proveedores, generación de presupuestos, reportes, entre otros módulos.",
    },
    {
      title: "Gestory Shop",
      isFeatured: true,
      thumbnail: "/assets/images/projects/gestory-shop.png",
      liveUrl: "https://gestory.app",
      tecnologias: [
          {name: "Ionic", logo: "/assets/images/logos/ionic.png"},
          {name: "NodeJs", logo: "/assets/images/logos/nodejs.png"},
          {name: "Express", logo: "/assets/images/logos/express.png"},
          {name: "Mysql", logo: "/assets/images/logos/mysql.png"},
      ],
      description: "Sistema web de catálogo online y ventas por WhatsApp. Acelera el proceso de venta online generando un pedido de productos que se envía por WhatsApp, el comercio puede gestionar sus ventas y se puede conectar con Gestory para tener todas sus características.",
    },
    {
      title: "CR23",
      isFeatured: true,
      thumbnail: "/assets/images/projects/cr23.png",
      githubUrl: "https://github.com/agupalavecino97/cr23",
      liveUrl: "https://cr23.netlify.app/",
      tecnologias: [
          {name: "React", logo: "/assets/images/logos/react.png"},
          {name: "MUI", logo: "/assets/images/logos/mui.png"},
          {name: "NodeJs", logo: "/assets/images/logos/nodejs.png"},
          {name: "Express", logo: "/assets/images/logos/express.png"},
          {name: "MongoDB", logo: "/assets/images/logos/mongo.png"},
        ],
      description: "Aplicación web para crear un lineUP personalizado del festival Cosquín Rock, permite crear una cuenta y guardar las bandas que se deseen ver para organizarse mejor.",
    },
    {
      title: "Listapp",
      isFeatured: true,
      thumbnail: "/assets/images/projects/listapp.png",
      githubUrl: "https://github.com/agupalavecino97/maketList",
      liveUrl: "https://list-app-react.netlify.app/",
      tecnologias: [
          {name: "React", logo: "/assets/images/logos/react.png"},
          {name: "MUI", logo: "/assets/images/logos/mui.png"},
          {name: "NodeJs", logo: "/assets/images/logos/nodejs.png"},
          {name: "Express", logo: "/assets/images/logos/express.png"},
          {name: "MySQL", logo: "/assets/images/logos/mysql.png"},
        ],
      description: "Aplicación web para crear listas, permite crear una cuenta y guardar las listas creadas para usarlas en un futuro.",
    },
    {
      title: "GoodLearner",
      isFeatured: true,
      thumbnail: "/assets/images/projects/goodlearner.png",
      githubUrl: "https://github.com/No-Country/c9-19-t-javareact",
      liveUrl: "https://goodlearner.vercel.app/",
      tecnologias: [
          {name: "React", logo: "/assets/images/logos/react.png"},
          {name: "React Bootstrap", logo: "/assets/images/logos/react-bootstrap.png"},
          {name: "Java", logo: "/assets/images/logos/java.png"},
          {name: "Spring", logo: "/assets/images/logos/spring.png"},
          {name: "MySQL", logo: "/assets/images/logos/mysql.png"},
        ],
      description: "Participación en la plataforma NoCountry, donde forme parte de un equipo multidiciplinario para la creación de la web app GoodLearner (en la cual realice tareas tanto de Frontend como de Backend), un sistema web para la administración de una escuela, con cuatro perfiles diferentes (administrador, profesor, tutor y estudiante), permite gestionar las diferentes comisiones, materias, profesores, asignar notas, ver el progreso de los alumnos, gestionar los diferentes usuarios, entre otras funcionalidades.",
    },
    {
      title: "No Country Management System",
      isFeatured: true,
      thumbnail: "/assets/images/projects/nocountry.png",
      githubUrl: "https://github.com/No-Country/S7-05-t-Angular",
      liveUrl: "https://s7-05-t-angular.vercel.app/",
      tecnologias: [
          {name: "Angular", logo: "/assets/images/logos/angular.png"},
          {name: "Material Angular", logo: "/assets/images/logos/material-angular.png"},
          {name: "NodeJs", logo: "/assets/images/logos/nodejs.png"},
          {name: "Sequelize", logo: "/assets/images/logos/sequelize.png"},
          {name: "PostgreSQL", logo: "/assets/images/logos/PostgreSQL.png"},
        ],
      description: "Participación en la plataforma NoCountry, donde forme parte de un equipo multidiciplinario para la creación de la web app No Country Management System (en la cual realice tareas tanto de Frontend como de Backend), un sistema web para ayudar a un teamLeader de un equipo a gestionar los miembos, asistencia semanal y para ayudar a los Administradores a gestionar TeamLeaders.",
    },
    {
      title: "Gestory Landing",
      isFeatured: true,
      thumbnail: "/assets/images/projects/gestory-landing.png",
      liveUrl: "https://gestory-site.surge.sh/",
      tecnologias: [
          {name: "HTML", logo: "/assets/images/logos/html.png"},
          {name: "CSS", logo: "/assets/images/logos/css.png"},
          {name: "Javascript", logo: "/assets/images/logos/javascript.png"},
          {name: "Bootstrap", logo: "/assets/images/logos/bootstrap.png"},

        ],
      description: "Landing Page donde se muestra toda la funcionalidad de Gestory.",
    },
    {
      title: "Gestory Shop Landing",
      isFeatured: true,
      thumbnail: "/assets/images/projects/gestory-shop-landing.png",
      liveUrl: "https://gestory-shop.surge.sh/",
      tecnologias: [
          {name: "HTML", logo: "/assets/images/logos/html.png"},
          {name: "CSS", logo: "/assets/images/logos/css.png"},
          {name: "Javascript", logo: "/assets/images/logos/javascript.png"},
          {name: "Bootstrap", logo: "/assets/images/logos/bootstrap.png"},
        ],
      description: "Landing Page donde se muestra toda la funcionalidad de Gestory Shop.",
    },
    {
      title: "PlannerApp",
      isFeatured: true,
      thumbnail: "/assets/images/projects/planner.png",
      githubUrl: "https://github.com/agupalavecino97/planner",
      liveUrl: "https://planner-app.netlify.app/",
      tecnologias: [
          {name: "Angular", logo: "/assets/images/logos/angular.png"},
          {name: "Material Angular", logo: "/assets/images/logos/material-angular.png"},
          {name: "NodeJs", logo: "/assets/images/logos/nodejs.png"},
          {name: "Express", logo: "/assets/images/logos/express.png"},
      ],
      description: "Aplicación web para organizar un itinerario de actividades.",
    },
    {
      title: "Portfolio",
      isFeatured: true,
      thumbnail: "/assets/images/projects/portfolio.png",
      githubUrl: "https://github.com/agupalavecino97/agustin-palavecino-portfolio",
      liveUrl: "https://agustin-palavecino-portfolio.netlify.app/",
      tecnologias: [
          {name: "Astro", logo: "/assets/images/logos/astro.png"},
          {name: "HTML", logo: "/assets/images/logos/html.png"},
          {name: "CSS", logo: "/assets/images/logos/css.png"},
          {name: "Javascript", logo: "/assets/images/logos/javascript.png"},
          {name: "Tailwind", logo: "/assets/images/logos/tailwind.png"},
        ],
      description: "Landing page creada con la herramienta Astro donde se muestra mis proyectos y experiencia como desarrollador web.",
    },
  ],
  principal_skills: [
    {
      name: "HTML",
      url: "/assets/images/logos/html.png",
      time: "3",
      amountProjects: "10",
    },
    {
      name: "CSS",
      url: "/assets/images/logos/css.png",
      time: "3",
      amountProjects: "10",
    },
    {
      name: "Javascript",
      url: "/assets/images/logos/javascript.png",
      time: "3",
      amountProjects: "10",
    }, 
    {
      name: "Angular",
      url: "/assets/images/logos/angular.png",
      time: "3",
      amountProjects: "2",
    },
    {
      name: "Nodejs",
      url: "/assets/images/logos/nodejs.png",
      time: "3",
      amountProjects: "6",
    },
    {
      name: "MySQL",
      url: "/assets/images/logos/mysql.png",
      time: "3",
      amountProjects: "5",
    },
  ],
  frontend_skills: [
    {
      name: "HTML",
      url: "/assets/images/logos/html.png",
      time: "3 años",
      amountProjects: "10",
    },
    {
      name: "CSS",
      url: "/assets/images/logos/css.png",
      time: "3 años",
      amountProjects: "10",
    },
    {
      name: "Javascript",
      url: "/assets/images/logos/javascript.png",
      time: "3 años",
      amountProjects: "10",
    }, 
    {
      name: "Angular 6+",
      url: "/assets/images/logos/angular.png",
      time: "3 años",
      amountProjects: "2",
    },
    {
      name: "Reactjs",
      url: "/assets/images/logos/react.png",
      time: "1 año",
      amountProjects: "4",
    },
     {
      name: "Ionic",
      url: "/assets/images/logos/ionic.png",
      time: "1 año",
      amountProjects: "1",
    },
    {
      name: "TypeScript",
      url: "/assets/images/logos/typescript.png",
      time: "2 años",
      amountProjects: "7",
    },
    {
      name: "Bootstrap",
      url: "/assets/images/logos/bootstrap.png",
      time: "3 años",
      amountProjects: "9",
    },
    {
      name: "Material Angular",
      url: "/assets/images/logos/material-angular.png",
      time: "3 años",
      amountProjects: "2",
    },
    {
      name: "React Bootstrap",
      url: "/assets/images/logos/react-bootstrap.png",
      time: "1 años",
      amountProjects: "2",
    },
  ],
  backend_skills: [
    {
      name: "Javascript",
      url: "/assets/images/logos/javascript.png",
      time: "3 años",
      amountProjects: "6",
    },
    {
      name: "NodeJs",
      url: "/assets/images/logos/nodejs.png",
      time: "3 años",
      amountProjects: "6",
    },
    {
      name: "Express.js",
      url: "/assets/images/logos/express.png",
      time: "3 años",
      amountProjects: "6",
    }, 
    {
      name: "TypeScript",
      url: "/assets/images/logos/typescript.png",
      time: "2 años",
      amountProjects: "7",
    },
    {
      name: "Sequelize",
      url: "/assets/images/logos/sequelize.png",
      time: "1 año",
      amountProjects: "1",
    }
  ],
  database_skills: [
    {
      name: "MySQL",
      url: "/assets/images/logos/mysql.png",
      time: "3 años",
      amountProjects: "5",
    },
    {
      name: "MongoDB",
      url: "/assets/images/logos/mongo.png",
      time: "1 año",
      amountProjects: "2",
    },
    {
      name: "HeidiSQL",
      url: "/assets/images/logos/heidi.png",
      time: "3 años",
      amountProjects: "4",
    }, 
  ],
  other_skills: [
    {
      name: "GIT",
      url: "/assets/images/logos/git.png",
      time: "3 años",
      amountProjects: "10",
    },
    {
      name: "Bitbucket",
      url: "/assets/images/logos/bitbucket.png",
      time: "3 años",
      amountProjects: "3",
    },
    {
      name: "Github",
      url: "/assets/images/logos/github.png",
      time: "3 años",
      amountProjects: "7",
    }, 
    {
      name: "Kanban",
      url: "/assets/images/logos/kanban.png",
      time: "2 años",
      amountProjects: "3",
    }, 
    {
      name: "Trello",
      url: "/assets/images/logos/trello.png",
      time: "2 años",
      amountProjects: "3",
    }, 
    {
      name: "SCRUM",
      url: "/assets/images/logos/scrum.png",
      time: "1 año",
      amountProjects: "1",
    }, 
    {
      name: "Jira",
      url: "/assets/images/logos/jira.png",
      time: "1 año",
      amountProjects: "1",
    },
    {
      name: "Python",
      url: "/assets/images/logos/python.png",
      time: "2 años",
      amountProjects: "0",
    },
  ],
};
