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
      resume: "Aplicaciín de envíos online",
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
      tecnologias: ["/assets/images/logos/angular.png", "/assets/images/logos/bootstrap.png","/assets/images/logos/nodejs.png", "/assets/images/logos/express.png", "/assets/images/logos/mysql.png"],
      description: "Sistema web de gestión comercial integral con múltiples módulos. Control de stock, registro de ventas, facturación electrónica conectada con AFIP, control de caja, control de clientes, control de proveedores, generación de presupuestos, reportes, entre otros módulos.",
    },
    {
      title: "Gestory Shop",
      isFeatured: true,
      thumbnail: "/assets/images/projects/gestory-shop.png",
      liveUrl: "https://gestory.app",
      tecnologias: ["/assets/images/logos/ionic.png", "/assets/images/logos/nodejs.png", "/assets/images/logos/express.png", "/assets/images/logos/mysql.png"],
      description: "Sistema web de catálogo online y ventas por WhatsApp. Acelera el proceso de venta online generando un pedido de productos que se envía por WhatsApp, el comercio puede gestionar sus ventas y se puede conectar con Gestory para tener todas sus características.",
    },
    {
      title: "Gestory Landing",
      isFeatured: true,
      thumbnail: "/assets/images/projects/gestory-landing.png",
      liveUrl: "https://gestory-site.surge.sh/",
      tecnologias: ["/assets/images/logos/html.png", "/assets/images/logos/css.png", "/assets/images/logos/javascript.png"],
      description: "Landing Page donde se muestra toda la funcionalidad de Gestory.",
    },
    {
      title: "Gestory Shop Landing",
      isFeatured: true,
      thumbnail: "/assets/images/projects/gestory-shop-landing.png",
      liveUrl: "https://gestory-shop.surge.sh/",
      tecnologias: ["/assets/images/logos/html.png", "/assets/images/logos/css.png", "/assets/images/logos/javascript.png"],
      description: "Landing Page donde se muestra toda la funcionalidad de Gestory Shop.",
    },
    {
      title: "Listapp",
      isFeatured: true,
      thumbnail: "/assets/images/projects/listapp.png",
      githubUrl: "https://github.com/agupalavecino97/maketList",
      liveUrl: "https://list-app-react.netlify.app/",
      tecnologias: ["/assets/images/logos/react.png", "assets/images/logos/mui.png", "assets/images/logos/nodejs.png", "assets/images/logos/express.png", "assets/images/logos/mysql.png"],
      description: "Aplicación web para crear listas, permite crear una cuenta y guardar las listas creadas para usarlas en un futuro.",
    },
    {
      title: "Portfolio",
      isFeatured: true,
      thumbnail: "/assets/images/projects/portfolio.png",
      githubUrl: "https://github.com/agupalavecino97/agustin-palavecino-portfolio",
      liveUrl: "https://astro-portfolio-uzair.vercel.app/",
      tecnologias: ["assets/images/logos/astro.png", "assets/images/logos/html.png", "assets/images/logos/css.png", "/assets/images/logos/javascript.png", "assets/images/logos/tailwind.png" ],
      description: "Landing page creada con la herramienta Astro donde se muestra mis proyectos y experiencia como desarrollador web.",
    },
  ],
  principal_skills: [
    {
      name: "HTML",
      url: "/assets/images/logos/html.png",
      time: "3",
    },
    {
      name: "CSS",
      url: "/assets/images/logos/css.png",
      time: "3",
    },
    {
      name: "Javascript",
      url: "/assets/images/logos/javascript.png",
      time: "3",
    }, 
    {
      name: "Angular",
      url: "/assets/images/logos/angular.png",
      time: "3",
    },
    {
      name: "Nodejs",
      url: "/assets/images/logos/nodejs.png",
      time: "3",
    },
    {
      name: "MySQL",
      url: "/assets/images/logos/mysql.png",
      time: "3",
    },
  ],
  frontend_skills: [
    {
      name: "HTML",
      url: "/assets/images/logos/html.png",
      time: "3 años",
    },
    {
      name: "CSS",
      url: "/assets/images/logos/css.png",
      time: "3 años",
    },
    {
      name: "Javascript",
      url: "/assets/images/logos/javascript.png",
      time: "3 años",
    }, 
    {
      name: "Angular 6+",
      url: "/assets/images/logos/angular.png",
      time: "3 años",
    },
    {
      name: "Reactjs",
      url: "/assets/images/logos/react.png",
      time: "1 año",
    },
     {
      name: "Ionic",
      url: "/assets/images/logos/ionic.png",
      time: "1 año",
    },
    {
      name: "TypeScript",
      url: "/assets/images/logos/typescript.png",
      time: "2 años",
    },
    {
      name: "Bootstrap",
      url: "/assets/images/logos/bootstrap.png",
      time: "3 años",
    },
    {
      name: "Material Angular",
      url: "/assets/images/logos/material-angular.png",
      time: "3 años",
    },
    {
      name: "React Bootstrap",
      url: "/assets/images/logos/react-bootstrap.png",
      time: "1 años",
    },
  ],
  backend_skills: [
    {
      name: "Javascript",
      url: "/assets/images/logos/javascript.png",
      time: "3 años",
    },
    {
      name: "NodeJs",
      url: "/assets/images/logos/nodejs.png",
      time: "3 años",
    },
    {
      name: "Express.js",
      url: "/assets/images/logos/express.png",
      time: "3 años",
    }, 
    {
      name: "TypeScript",
      url: "/assets/images/logos/typescript.png",
      time: "2 años",
    },
    {
      name: "Sequelize",
      url: "/assets/images/logos/sequelize.png",
      time: "1 año",
    }
  ],
  database_skills: [
    {
      name: "MySQL",
      url: "/assets/images/logos/mysql.png",
      time: "3 años",
    },
    {
      name: "MongoDB",
      url: "/assets/images/logos/mongo.png",
      time: "1 año",
    },
    {
      name: "HeidiSQL",
      url: "/assets/images/logos/heidi.png",
      time: "3 años",
    }, 
  ],
  other_skills: [
    {
      name: "GIT",
      url: "/assets/images/logos/git.png",
      time: "3 años",
    },
    {
      name: "Bitbucket",
      url: "/assets/images/logos/bitbucket.png",
      time: "3 años",
    },
    {
      name: "Github",
      url: "/assets/images/logos/github.png",
      time: "3 años",
    }, 
    {
      name: "Kanban",
      url: "/assets/images/logos/kanban.png",
      time: "2 años",
    }, 
    {
      name: "Trello",
      url: "/assets/images/logos/trello.png",
      time: "2 años",
    }, 
    {
      name: "SCRUM",
      url: "/assets/images/logos/scrum.png",
      time: "1 año",
    }, 
    {
      name: "Jira",
      url: "/assets/images/logos/jira.png",
      time: "1 año",
    },
    {
      name: "Python",
      url: "/assets/images/logos/python.png",
      time: "2 años",
    },
  ],
};
