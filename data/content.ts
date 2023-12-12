export const contentData = [
    {
      title: "Work Experience",
      items: [
        {
          title: "Web Developer at Lacebot",
          subTitle: "Remote",
          date: "2023 - Present",
          description: "Design, Seo and user experience",
        },
        {
          title: "Front-End Developer at Yupfront",
          subTitle: "Remote",
          date: "2022 - 2023",
          description: "Working for clients around the world.",
        },
      ],
    },
    {
      title: "Education",
      items: [
        {
          title: "Bachelor's Degree in Electrical and Industrial Engineering",
          subTitle: "University of Balearic Islands",
          date: "2015 - 2019",
          description: "Assembly, C++",
        },
        {
          title: "Certified in web development",
          subTitle: "Kaicen, Mallorca",
          date: "2022 - 2023",
          description: "HTML5, CSS, JS",
        },
      ],
    },
    {
      title: "Skills",
      items: [
        {
          title: "Hard Skills",
          subTitle: "",
          date: "",
          description: "Next.js, React, Javascript, Typescript, CSS, SASS, Tailwind, SEO, UX, Git, Node.js, npm, MongoDB, MySQL, GraphQL, PostgreSQL,",
        },
        {
          title: "Soft Skills",
          subTitle: "",
          date: "",
          description: "Critical Thinking, Problem Solving , Self-Learning, Adaptability, Teamwork",
        },
      ],
    },
    //   @NOTE: You can add more sections here
    //   {
    //     title: "Projects",
    //     items: [
    //       {
    //         title: "Project 1",
    //         subTitle: "Sub Title",
    //         date: "2015 - 2016",
    //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    //       },
    //     ],
    //   },
  ];
  
  export type Content = {
    title: string;
    items: {
      title: string;
      subTitle: string;
      date: string;
      description: string;
    }[];
  };
  
  export type ContentData = Content[];