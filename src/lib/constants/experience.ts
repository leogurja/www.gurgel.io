import dedent from "dedent";
import type { Tech } from "./techs";

export interface Experience {
	company: string;
	site: string;
	role: string;
	period: {
		from: Date;
		to: Date;
	};
	tags: Tech[];
	description: string;
}

export const experience = [
	{
		company: "Central IT",
		site: "https://centralit.com.br/",
		role: "Analista Desenvolvedor",
		period: {
			from: new Date(2019, 11, 16),
			to: new Date(2023, 5, 15),
		},
		tags: [
			{ name: "Ruby", site: "https://ruby-lang.org/" },
			{ name: "Rails", site: "https://rubyonrails.org/" },
			{ name: "Java", site: "https://www.java.com/" },
			{ name: "Spring", site: "https://spring.io/" },
			{
				name: "JavaScript",
				site: "https://developer.mozilla.org/docs/Web/JavaScript",
			},
			{ name: "MySQL", site: "https://mysql.com/" },
			{ name: "Oracle", site: "https://oracle.com/database/" },
			{ name: "RabbitMQ", site: "https://rabbitmq.com/" },
			{ name: "Node.js", site: "https://nodejs.org/" },
			{ name: "Docker", site: "https://docker.com/" },
			{ name: "Redis", site: "https://redis.io/" },
			{ name: "CSS", site: "https://developer.mozilla.org/docs/Web/CSS" },
		],
		description: dedent`
      Atuei no desenvolvimento e manutenção de sistemas com Ruby on Rails e Spring Boot,
      contribuindo para a estabilidade e evolução contínua das aplicações. Apoiei treinamentos internos,
      reforçando boas práticas de desenvolvimento e cultura de qualidade. Também liderei revisões de código,
      prototipei interfaces com foco na experiência do usuário e automatizei a configuração de ambientes de desenvolvimento,
      acelerando o onboarding da equipe. Além disso, participei da adaptação dos sistemas da UFF à nova carga horária de extensão exigida pelo MEC.
    `,
	},
	{
		company: "STI - UFF",
		site: "https://sti.uff.br/",
		role: "Estágio em Desenvolvimento de Sistemas",
		period: {
			from: new Date(2019, 11, 16),
			to: new Date(2021, 11, 16),
		},
		tags: [
			{ name: "Ruby", site: "https://ruby-lang.org/" },
			{ name: "Rails", site: "https://rubyonrails.org/" },
			{
				name: "JavaScript",
				site: "https://developer.mozilla.org/docs/Web/JavaScript",
			},
			{ name: "MySQL", site: "https://mysql.com/" },
			{ name: "Webpack", site: "https://webpack.js.org/" },
			{ name: "CSS", site: "https://developer.mozilla.org/docs/Web/CSS" },
		],
		description: dedent`
      Atuei no desenvolvimento, manutenção e refatoração de sistemas Ruby on Rails,
      lidando tanto com aplicações legadas quanto com novos projetos. Fui responsável por implementar funcionalidades,
      corrigir bugs, criar testes automatizados e desenhar interfaces com foco em usabilidade.
      Liderei a migração do sistema de gestão de pós-graduação para uma base tecnológica mais moderna,
      substituindo jQuery e otimizando significativamente a performance e manutenibilidade.
      Também apresentei um workshop técnico sobre JavaScript moderno e Webpack,
      contribuindo para a atualização tecnológica da equipe.
    `,
	},
] as Experience[];
