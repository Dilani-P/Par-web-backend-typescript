const course = [
  {
    name: "Straight talk",
    slug: "straight-talk",
    participantRoles: [
      {
        name: "teller",
        steps: [
          {
            slug: "topic",
            prerequisites: [],
            components: [
              {
                type: "textarea", // a component that

                dataType: "topic", // the data that

                slug: "topic-component", // the key
              },
            ],
          },
          {
            slug: "example-step-1",
            prerequisites: [{ dataType: "topic" }],
            components: [
              {
                type: "textarea",
                dataType: "example1",
                slug: "example-1-component",
              },
              {
                type: "checkbox",
                dataType: "i-agree",
                slug: "agree",
              },
            ],
          },
        ],
      },
      {
        name: "receiver",
        steps: [
          {
            slug: "read",
            prerequisites: [],
            components: [
              {
                type: "readText", // a component that
                dataType: "topic", // the data showing
                slug: "topic",
              },
            ],
          },
          {
            slug: "example-step-2",
            prerequisites: [{ dataType: "topic" }],
            components: [
              {
                type: "readCheckbox", // a component
                dataType: "i-agree",
                slug: "agree",
              },
            ],
          },
        ],
      },
    ],
  },
];
