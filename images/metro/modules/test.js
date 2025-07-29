export const metrics = [
    {
        name: "test_random_value",
        type: "gauge",
        description: "Short description of this metric",
        collect: async () => {
            return Math.floor(Math.random() * 100); // Has to be a number
        }

    },
    {
        name: "test_params",
        type: "gauge",
        description: "This will have 2 different metrics in one!",
        collect: async () => {
            return [
                {
                    value: 0, // Has to be a number
                    params: {
                        index: "one", // Has to be a string
                    }
                },
                {
                    value: 5,
                    params: {
                        index: "two"
                    }
                }
            ];
        }
    }
];
