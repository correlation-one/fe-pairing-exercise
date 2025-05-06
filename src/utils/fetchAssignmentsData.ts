type Assignment = {
  general_info: {
    id: string;
    title: string;
    category: string;
    due_date: string;
    is_overdue: boolean;
    is_optional: boolean;
    is_group: boolean;
    description: string;
  };
  submission_details?: {
    score: number;
    submission_link: string;
  };
};

export const fetchAssignmentsData = (): Promise<Assignment[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const mockAssignmentsData: Assignment[] = [
        {
          general_info: {
            id: "f1",
            title: "Responsive Layout Challenge",
            category: "Frontend Development",
            due_date: "2025-05-15T23:59:00Z",
            is_overdue: true,
            is_optional: false,
            is_group: false,
            description:
              "Create a responsive landing page that adapts to mobile, tablet, and desktop screens.",
          },
        },
        {
          general_info: {
            id: "f2",
            title: "CSS Animations Practice",
            category: "Frontend Development",
            due_date: "2025-05-22T23:59:00Z",
            is_overdue: false,
            is_optional: true,
            is_group: false,
            description:
              "Build a small site with hover effects, keyframe animations, and smooth transitions.",
          },
        },
        {
          general_info: {
            id: "f3",
            title: "React Forms Validation",
            category: "Frontend Development",
            due_date: "2025-05-29T23:59:00Z",
            is_overdue: false,
            is_optional: false,
            is_group: true,
            description:
              "Implement a registration form in React with real-time validation and error handling.",
          },
        },
        {
          general_info: {
            id: "f4",
            title: "Accessible Web Components",
            category: "Frontend Accessibility",
            due_date: "2025-06-05T23:59:00Z",
            is_overdue: false,
            is_optional: true,
            is_group: true,
            description:
              "Build reusable UI components (buttons, modals) following WCAG accessibility standards.",
          },
        },
        {
          general_info: {
            id: "f5",
            title: "Optimizing Frontend Performance",
            category: "Frontend Performance",
            due_date: "2025-06-12T23:59:00Z",
            is_overdue: false,
            is_optional: false,
            is_group: false,
            description:
              "Analyze a sample website and implement lazy loading, code splitting, and image optimization.",
          },
          submission_details: {
            score: 91,
            submission_link:
              "https://dummydata.com/submissions/frontend-performance",
          },
        },
        {
          general_info: {
            id: "f6",
            title: "State Management with Redux",
            category: "Frontend Development",
            due_date: "2025-06-19T23:59:00Z",
            is_overdue: true,
            is_optional: true,
            is_group: true,
            description:
              "Build a simple React + Redux app managing authentication and user data.",
          },
        },
        {
          general_info: {
            id: "f7",
            title: "Unit Testing with Jest",
            category: "Frontend Testing",
            due_date: "2025-06-26T23:59:00Z",
            is_overdue: false,
            is_optional: false,
            is_group: true,
            description:
              "Write unit tests for a React application using Jest and React Testing Library.",
          },
        },
        {
          general_info: {
            id: "f8",
            title: "Building a Design System",
            category: "UI/UX",
            due_date: "2025-07-03T23:59:00Z",
            is_overdue: false,
            is_optional: true,
            is_group: false,
            description:
              "Create a basic design system with consistent spacing, typography, and components.",
          },
        },
        {
          general_info: {
            id: "f9",
            title: "Single Page Application Challenge",
            category: "Frontend Development",
            due_date: "2025-07-10T23:59:00Z",
            is_overdue: false,
            is_optional: false,
            is_group: false,
            description:
              "Develop a simple SPA (Single Page Application) using React Router.",
          },
          submission_details: {
            score: 84,
            submission_link: "https://dummydata.com/submissions/spa-challenge",
          },
        },
        {
          general_info: {
            id: "f10",
            title: "API Integration with Axios",
            category: "Frontend Development",
            due_date: "2025-07-17T23:59:00Z",
            is_overdue: false,
            is_optional: true,
            is_group: true,
            description:
              "Fetch and display data from a mock REST API using Axios in a React app.",
          },
        },
      ];

      resolve(mockAssignmentsData);
    }, 500);
  });
};
